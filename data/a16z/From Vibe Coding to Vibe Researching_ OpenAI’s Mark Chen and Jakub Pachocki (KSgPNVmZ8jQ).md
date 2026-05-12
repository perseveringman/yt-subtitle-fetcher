---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "KSgPNVmZ8jQ"
title: "From Vibe Coding to Vibe Researching: OpenAI’s Mark Chen and Jakub Pachocki"
video_url: "https://www.youtube.com/watch?v=KSgPNVmZ8jQ"
thumbnail_url: "https://i.ytimg.com/vi/KSgPNVmZ8jQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=KSgPNVmZ8jQ"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-09-25T13:00:41.000Z"
upload_date: "2025-09-25"
duration_seconds: 3183
duration_human: "53:03"
view_count: 29184
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:35:36.533Z"
---

# From Vibe Coding to Vibe Researching: OpenAI’s Mark Chen and Jakub Pachocki

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=KSgPNVmZ8jQ
- video_id: KSgPNVmZ8jQ
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-09-25T13:00:41.000Z
- upload_date: 2025-09-25
- duration: 53:03
- view_count: 29184
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

What comes after vibe coding? Maybe vibe researching.

OpenAI’s Chief Scientist, Jakub Pachocki, and Chief Research Officer, Mark Chen, join a16z general partners Anjney Midha and Sarah Wang to go deep on GPT-5—how they fused fast replies with long-horizon reasoning, how they measure progress once benchmarks saturate, and why reinforcement learning keeps surprising skeptics.

They explore agentic systems (and their stability tradeoffs), coding models that change how software gets made, and the bigger bet: an automated researcher that can generate new ideas with real economic impact. Plus: how they prioritize compute, hire “cave-dweller” talent, protect fundamental research inside a product company, and keep pace without chasing every shiny demo.

Timecodes:
0:00 Introduction
0:25 The Launch of GPT-5  
2:28 Evaluating Progress: Evals & Milestones  
5:07 Surprising Capabilities of GPT-5  
7:10 The Future of Automated Research  
8:59 Agency, Reasoning, and Model Planning  
10:18 Extending Progress Beyond Verifiable Domains  
12:11 The Role and Success of Reinforcement Learning  
14:44 Reward Modeling and Best Practices  
15:54 The Evolution of Coding with AI  
21:39 What Makes a Great Researcher?  
27:20 Building and Sustaining a Winning Research Culture  
31:40 Balancing Product and Fundamental Research  
38:36 Prioritization, Compute, and Resource Allocation  
41:19 The Intersection of Academia and Frontier AI  
46:56 Maintaining Speed and Learning at Scale  
48:52 Trust and Collaboration at OpenAI  

Resources: 
Find Jakub on X: https://x.com/merettm
Find Mark on X: https://x.com/markchen90
Find Sarah on X: https://x.com/sarahdingwang
Find Anjney on X: https://x.com/AnjneyMidha

Stay Updated: 
If you enjoyed this episode, be sure to like, subscribe, and share with your friends!

Find a16z on X: https://x.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Listen to the a16z Podcast on Spotify: https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX
Listen to the a16z Podcast on Apple Podcasts: https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711
Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
The big thing that we are targeting is

00:00:02 --> 00:00:07
producing an automated researcher. So

00:00:04 --> 00:00:09
automating the discovery of new ideas.

00:00:06 --> 00:00:11
The next set of evals and milestone that

00:00:08 --> 00:00:13
we're looking at will involve actual

00:00:10 --> 00:00:15
movement on things that are economically

00:00:12 --> 00:00:17
relevant. And I was talking to some some

00:00:14 --> 00:00:18
high schoolers and they're saying, "Oh,

00:00:16 --> 00:00:20
you know, actually the default way to

00:00:17 --> 00:00:22
code is vibe coding. I I do think you

00:00:19 --> 00:00:25
know the future hopefully will be vibe

00:00:21 --> 00:00:25
researching."

00:00:24 --> 00:00:29
Thanks for coming Jacob and Mark. Jacob,

00:00:27 --> 00:00:31
you're the chief scientist at OpenAI.

00:00:28 --> 00:00:34
Mark, you are the chief research officer

00:00:30 --> 00:00:35
at OpenAI and you guys have the both the

00:00:33 --> 00:00:37
uh the privilege and the stress of

00:00:34 --> 00:00:39
running probably one of the most

00:00:36 --> 00:00:41
high-profile research teams in AI. And

00:00:38 --> 00:00:44
so we're just really stoked um to talk

00:00:40 --> 00:00:46
with you about a whole bunch of things

00:00:43 --> 00:00:49
we've been curious about, including

00:00:45 --> 00:00:50
GPD5, which was, you know, one of the

00:00:48 --> 00:00:52
most exciting updates to come out of

00:00:49 --> 00:00:54
Open in recent times. And then stepping

00:00:51 --> 00:00:58
back, how you build a research team that

00:00:53 --> 00:01:01
can do not just GPD5 but codeex and chat

00:00:57 --> 00:01:04
GPT and an API uh business and can weave

00:01:00 --> 00:01:06
all of the many different bets you guys

00:01:03 --> 00:01:09
have across modalities, across product

00:01:05 --> 00:01:11
form factors um into one coherent

00:01:08 --> 00:01:13
research culture and story.

00:01:10 --> 00:01:15
>> And so to kick things off, why don't we

00:01:12 --> 00:01:17
start with GPD5? Just tell us a little

00:01:14 --> 00:01:19
bit about the GPD5 launch from your

00:01:16 --> 00:01:22
perspective. How did it go? So I think

00:01:18 --> 00:01:25
GPT5 was really our attempt to bring

00:01:21 --> 00:01:27
reasoning into the mainstream and um

00:01:24 --> 00:01:29
prior to GPT5 right we have two

00:01:26 --> 00:01:33
different series of models you had uh

00:01:28 --> 00:01:34
the GPT kind of 2 3 4 series which were

00:01:32 --> 00:01:38
kind of these instant response models

00:01:33 --> 00:01:40
and then we had an O series which uh

00:01:37 --> 00:01:41
essentially thought for a very long time

00:01:39 --> 00:01:45
and then gave you the best answer that

00:01:40 --> 00:01:47
it could give. So tactically uh we don't

00:01:44 --> 00:01:50
want our users to be puzzled by you know

00:01:46 --> 00:01:52
hich mode should I use and it involves

00:01:49 --> 00:01:54
a lot of research in kind of identifying

00:01:51 --> 00:01:57
what the right amount of thinking uh for

00:01:53 --> 00:02:00
any particular prompt looks like and uh

00:01:56 --> 00:02:02
taking that pain away from the user. So

00:01:59 --> 00:02:03
we think the future is about reasoning

00:02:01 --> 00:02:07
more and more about reasoning more and

00:02:02 --> 00:02:09
more about agents and uh we think GPD5

00:02:06 --> 00:02:11
is this step towards delivering

00:02:08 --> 00:02:15
reasoning and more agentic behavior by

00:02:10 --> 00:02:17
default. There is also a number of

00:02:14 --> 00:02:20
improvements across the board in this

00:02:16 --> 00:02:25
model relative to O3 um and our previous

00:02:20 --> 00:02:26
models but our primary our primary um

00:02:24 --> 00:02:28
fees for for this launch was indeed

00:02:26 --> 00:02:29
bringing the reasoning mode to more

00:02:27 --> 00:02:31
people.

00:02:28 --> 00:02:33
>> Can you say more about how you guys

00:02:30 --> 00:02:35
think about evals? I noticed even in

00:02:32 --> 00:02:37
that launch video there were a number of

00:02:34 --> 00:02:39
evals where you were inching up from you

00:02:36 --> 00:02:41
know 98 to 99% and that's kind of how

00:02:38 --> 00:02:43
you know you saturated the eval. What

00:02:40 --> 00:02:44
approach do you guys take to measuring

00:02:42 --> 00:02:45
progress and and how do you think about

00:02:43 --> 00:02:47
it?

00:02:44 --> 00:02:49
>> One thing is that indeed for like these

00:02:46 --> 00:02:50
vos that we've been using for the last

00:02:48 --> 00:02:54
few years, they're indeed pretty close

00:02:49 --> 00:02:55
to saturated and so yeah like uh for a

00:02:53 --> 00:02:59
lot of them like you know inching from

00:02:54 --> 00:03:01
like 96 to 98% is not necessarily uh the

00:02:58 --> 00:03:03
most important thing in the world. I

00:03:00 --> 00:03:05
think another thing that's maybe even

00:03:02 --> 00:03:08
more important but a little bit subtler

00:03:04 --> 00:03:10
when we were in this like GPT2 GPT3 GT4

00:03:07 --> 00:03:12
era um you know there was kind of one

00:03:09 --> 00:03:15
recipe you just like pre-train a model

00:03:11 --> 00:03:18
on a lot of um data and you kind of like

00:03:14 --> 00:03:21
use these um evals as just kind of a

00:03:17 --> 00:03:23
yard sick um of u how this generalizes

00:03:20 --> 00:03:26
to like different tasks. Um now we have

00:03:22 --> 00:03:28
this uh different ways of training in

00:03:25 --> 00:03:31
particular uh reinforcement learning on

00:03:27 --> 00:03:32
like serious reasoning where we can pick

00:03:30 --> 00:03:34
a domain and we can really train a model

00:03:31 --> 00:03:36
to like become an expert in this domain

00:03:33 --> 00:03:40
to reason very hard about it which lets

00:03:35 --> 00:03:43
us um you know target particular uh

00:03:39 --> 00:03:45
kinds of of of of tasks uh which will

00:03:42 --> 00:03:46
mean that like we can get like extremely

00:03:44 --> 00:03:48
good performance on some evolves but it

00:03:45 --> 00:03:52
doesn't indicate as great generalization

00:03:47 --> 00:03:53
to to other things I think so the we

00:03:51 --> 00:03:56
think about it in this world, we

00:03:52 --> 00:04:00
definitely think like uh we are in a

00:03:55 --> 00:04:04
little bit of a uh deficit like uh of of

00:03:59 --> 00:04:06
great evaluations and I think the big

00:04:03 --> 00:04:08
things that we look at are actual marks

00:04:06 --> 00:04:12
of the model being able to discover new

00:04:08 --> 00:04:14
things. I think for me the most exciting

00:04:11 --> 00:04:15
thread and like actual sign of progress

00:04:13 --> 00:04:18
this year has been our model's

00:04:14 --> 00:04:21
performance in uh math and programming

00:04:17 --> 00:04:24
competitions. although I think like they

00:04:20 --> 00:04:28
are also becoming saturated in a sense.

00:04:23 --> 00:04:29
Um and the next set of evolves and

00:04:27 --> 00:04:32
milestone that we're looking at will

00:04:28 --> 00:04:35
involve actual um discovery and and

00:04:31 --> 00:04:37
actual um movement on on on things that

00:04:34 --> 00:04:39
are that are economically relevant.

00:04:36 --> 00:04:41
>> Totally. You guys already got number two

00:04:38 --> 00:04:43
in the at coder competition. So there's

00:04:40 --> 00:04:45
really only number one left.

00:04:42 --> 00:04:47
>> Yeah. Yeah. I mean I think it is

00:04:44 --> 00:04:51
important to note that these evals like

00:04:46 --> 00:04:53
um you know II atcoder IMO um are

00:04:50 --> 00:04:55
actually real world markers for success

00:04:52 --> 00:04:56
in future research. I think a lot of you

00:04:54 --> 00:04:57
know the best researchers in the world

00:04:55 --> 00:05:00
have gone through these competitions

00:04:56 --> 00:05:03
have gotten very good results

00:04:59 --> 00:05:05
>> um and and yeah I think we are kind of

00:05:02 --> 00:05:06
preparing for this frontier where we're

00:05:04 --> 00:05:07
trying to get our models to discover new

00:05:05 --> 00:05:08
things.

00:05:06 --> 00:05:11
>> Yeah very exciting.

00:05:08 --> 00:05:14
>> Which capability from GPD5 before the

00:05:10 --> 00:05:17
release? surprised you the most when you

00:05:13 --> 00:05:20
were working through the eval bench or

00:05:16 --> 00:05:22
using it internally? Were there any

00:05:19 --> 00:05:23
moments where you felt like this was

00:05:21 --> 00:05:25
tarting to get good enough to release

00:05:22 --> 00:05:29
because it was useful in your daily

00:05:24 --> 00:05:31
usage? I think one big thing for me was

00:05:28 --> 00:05:34
um just how much it moved the frontier

00:05:30 --> 00:05:37
in very hard sciences. Um you know we

00:05:33 --> 00:05:38
would try the models with some of our

00:05:36 --> 00:05:40
friends who are you know uh professional

00:05:37 --> 00:05:42
physicists or professional

00:05:39 --> 00:05:44
mathematicians and you already saw kind

00:05:41 --> 00:05:46
of some instances of of of this on

00:05:43 --> 00:05:48
Twitter where you know you can take uh a

00:05:45 --> 00:05:51
problem and have it discover maybe not

00:05:47 --> 00:05:53
like very complicated new mathematics

00:05:50 --> 00:05:55
but you know um some non-trivial new

00:05:52 --> 00:05:56
mathematics and

00:05:54 --> 00:05:59
>> uh you know we we see physicists

00:05:55 --> 00:06:01
mathematicians kind of uh repeating this

00:05:58 --> 00:06:04
experience over and over where they're

00:06:00 --> 00:06:06
trying pro and saying, "Wow, this is

00:06:03 --> 00:06:09
omething that the you know, previous

00:06:05 --> 00:06:10
version of the models couldn't do." And

00:06:08 --> 00:06:13
it is a little bit of a light bulb

00:06:10 --> 00:06:17
moment for them. It's like uh able to

00:06:12 --> 00:06:19
automate maybe like what could take uh

00:06:16 --> 00:06:22
one of their students months of of time.

00:06:18 --> 00:06:24
>> Well, GP5 is a is a definite improvement

00:06:21 --> 00:06:27
on O3. For for me, 03 was definitely

00:06:23 --> 00:06:30
like that moment where the reasoning

00:06:26 --> 00:06:33
models became like actually very useful

00:06:29 --> 00:06:37
on a daily basis. I think especially for

00:06:32 --> 00:06:39
um you know working through a math uh

00:06:36 --> 00:06:41
formula or or or a derivation like they

00:06:38 --> 00:06:43
like it actually got to a level where it

00:06:40 --> 00:06:47
is like fairly trustworthy and and I can

00:06:42 --> 00:06:50
actually use it as a as a tool uh for

00:06:46 --> 00:06:52
my work. Um and yeah I think I think

00:06:49 --> 00:06:56
uh yeah it is very exciting to get to

00:06:51 --> 00:06:59
that moment. Um but I expect that um

00:06:55 --> 00:07:00
well now as we're seeing um you know

00:06:58 --> 00:07:02
these models like like actually able to

00:06:59 --> 00:07:04
automate well yes like like we're saying

00:07:01 --> 00:07:06
solving contest problems over over

00:07:03 --> 00:07:09
longer time horizons I I I expect that

00:07:05 --> 00:07:10
is well that that that was quite

00:07:08 --> 00:07:11
small compared to what's coming over the

00:07:09 --> 00:07:14
next year.

00:07:10 --> 00:07:16
>> What is coming in the next one to five

00:07:13 --> 00:07:17
years it would be just at whatever level

00:07:15 --> 00:07:18
you're you're comfortable sharing what

00:07:16 --> 00:07:22
does the research road map look

00:07:18 --> 00:07:25
like? So the big thing that we are

00:07:21 --> 00:07:27
targeting with our research is producing

00:07:24 --> 00:07:30
um an automated researcher. So auto

00:07:26 --> 00:07:32
mating the discovery of new ideas um

00:07:30 --> 00:07:34
and you know of course like a particular

00:07:31 --> 00:07:37
thing we think about a lot is automating

00:07:33 --> 00:07:38
our own own work automating ML research.

00:07:36 --> 00:07:40
Uh but that can get a little bit

00:07:38 --> 00:07:43
self-reerential. So we're also thinking

00:07:39 --> 00:07:45
about automating um progress in in in

00:07:42 --> 00:07:48
other sciences. And I think like one

00:07:44 --> 00:07:50
good way to measure progress there is

00:07:47 --> 00:07:52
looking at like what is the time horizon

00:07:49 --> 00:07:55
which these models actually can um

00:07:52 --> 00:07:59
reason and make progress. And so now as

00:07:54 --> 00:08:02
we kind of like get to a level of near

00:07:58 --> 00:08:04
mastery of this of this um high school

00:08:01 --> 00:08:06
competitions let's say I I I would say

00:08:03 --> 00:08:10
like we get we get to like maybe on on

00:08:05 --> 00:08:14
the order of one to five hours of of of

00:08:09 --> 00:08:16
reasoning. Um and and so we are focused

00:08:13 --> 00:08:20
on extending that horizon both in terms

00:08:16 --> 00:08:21
of like the models um will capability to

00:08:19 --> 00:08:23
plan over very long horizons and

00:08:20 --> 00:08:24
actually able to retain ability to

00:08:22 --> 00:08:26
retain memory.

00:08:23 --> 00:08:28
>> And back to Eval's question that's why I

00:08:25 --> 00:08:31
think eval of the form of how long does

00:08:28 --> 00:08:32
this model autonomously operate for are

00:08:30 --> 00:08:34
of particular interest to us.

00:08:31 --> 00:08:36
>> And actually maybe on that topic there's

00:08:34 --> 00:08:39
been this huge move toward agency and

00:08:36 --> 00:08:40
model development. But I think at least

00:08:38 --> 00:08:42
he state that it's in currently, users

00:08:40 --> 00:08:45
have sort of observed this trade-off

00:08:41 --> 00:08:48
between too many tools or planning hops

00:08:44 --> 00:08:51
can result in quality regressions uh

00:08:47 --> 00:08:53
versus um something that maybe has a

00:08:50 --> 00:08:54
little bit less agency, the the quality

00:08:52 --> 00:08:56
is at least observed today to be a bit

00:08:54 --> 00:08:59
higher. H how do you guys think about

00:08:55 --> 00:09:02
he trade-off between stability and

00:08:58 --> 00:09:05
epth? the more um steps that the model

00:09:01 --> 00:09:07
is undertaking maybe the less likely the

00:09:04 --> 00:09:09
tenth step is to be accurate versus you

00:09:06 --> 00:09:11
ask it to do one thing it can do it very

00:09:08 --> 00:09:13
well um and to have it keep doing

00:09:10 --> 00:09:15
that one thing better and better but

00:09:12 --> 00:09:17
more complex things there's sort of that

00:09:14 --> 00:09:18
rade-off um but of course to get to

00:09:16 --> 00:09:20
full autonomy you are taking multiple

00:09:17 --> 00:09:23
steps you're using multiple tools

00:09:19 --> 00:09:25
>> I I I think actually like well the well

00:09:22 --> 00:09:27
the ability to maintain depth is a lot

00:09:24 --> 00:09:28
of it is being consistent over long

00:09:26 --> 00:09:31
horizons

00:09:27 --> 00:09:34
>> um so I I think they are very related

00:09:30 --> 00:09:35
problems. Um and in fact I think like

00:09:33 --> 00:09:39
with the reasoning models we have seen

00:09:34 --> 00:09:41
the models like greatly um extend the

00:09:38 --> 00:09:45
the length over which they are able

00:09:40 --> 00:09:48
to reason uh and and work um reliably

00:09:44 --> 00:09:51
without without going off track. Yeah, I

00:09:47 --> 00:09:52
think this is uh this is going to remain

00:09:50 --> 00:09:55
a big area of focus for us.

00:09:51 --> 00:09:57
>> Yeah. And I think reasoning is core to

00:09:54 --> 00:09:58
this ability to operate over a long

00:09:56 --> 00:10:00
horizon because you know you imagine

00:09:57 --> 00:10:02
kind of yourself solving a math problem

00:09:59 --> 00:10:04
right you try an approach it doesn't

00:10:01 --> 00:10:05
work and you know you have to think

00:10:03 --> 00:10:07
about you know what what's the next

00:10:04 --> 00:10:08
approach I'm going to take um what are

00:10:06 --> 00:10:09
the mistakes in the first approach and

00:10:07 --> 00:10:11
then you try another thing

00:10:08 --> 00:10:12
>> and you know the the world gives you

00:10:10 --> 00:10:14
some hard feedback right and then you

00:10:11 --> 00:10:15
keep trying different approaches and the

00:10:13 --> 00:10:18
ability to do that over a long period of

00:10:14 --> 00:10:19
time is reasoning and gives agents that

00:10:18 --> 00:10:22
robustness

00:10:18 --> 00:10:24
>> we talked a lot about math and science

00:10:21 --> 00:10:26
um I I curious to get your take on do

00:10:23 --> 00:10:28
you think some of the progress that

00:10:25 --> 00:10:31
we've made can actually extend um

00:10:27 --> 00:10:33
similarly to domains that are less

00:10:30 --> 00:10:34
verifiable. They're sort of less of an

00:10:32 --> 00:10:37
explicit right or wrong.

00:10:33 --> 00:10:40
>> Oh yeah, this is a this is a a question

00:10:36 --> 00:10:42
I I really like. Um I think if you

00:10:40 --> 00:10:45
actually

00:10:41 --> 00:10:47
truly want to extend to

00:10:44 --> 00:10:49
research um and you know finding

00:10:46 --> 00:10:52
discovering ideas that that meaningfully

00:10:48 --> 00:10:54
advance technology on the on you know

00:10:51 --> 00:10:57
the scale of like months and years like

00:10:53 --> 00:10:59
I think the these questions like

00:10:56 --> 00:11:01
stop being so different right like it is

00:10:58 --> 00:11:04
one thing to solve like a very well

00:11:00 --> 00:11:05
posed uh constraint problem on the scale

00:11:03 --> 00:11:07
of an hour right and there's like kind

00:11:04 --> 00:11:08
of a finite amount of ideas you need to

00:11:06 --> 00:11:09
look through and that might feel

00:11:07 --> 00:11:12
extremely different from solving

00:11:08 --> 00:11:14
something very open-ended. Um but you

00:11:11 --> 00:11:16
know even if you want to solve like a

00:11:13 --> 00:11:17
very well- definfined problem that is on

00:11:15 --> 00:11:19
much longer scale right you like you

00:11:16 --> 00:11:22
know prove this millennial price

00:11:18 --> 00:11:24
problem. uh well that suddenly requires

00:11:21 --> 00:11:26
you to think about okay like what are

00:11:23 --> 00:11:27
the fields of mathematics or other

00:11:25 --> 00:11:28
science that might possibly be relevant

00:11:26 --> 00:11:30
you know are there inspiration from

00:11:28 --> 00:11:32
physics that I must take like what is

00:11:29 --> 00:11:34
kind of the entire uh program that I

00:11:31 --> 00:11:35
want to develop around this and now

00:11:33 --> 00:11:37
these become very open-ended questions

00:11:34 --> 00:11:40
and it's actually hard to you know for

00:11:36 --> 00:11:42
for our own research right like if

00:11:39 --> 00:11:45
all we cared about is you know reduce

00:11:41 --> 00:11:47
the uh modeling loss on a given data set

00:11:44 --> 00:11:50
right like like measuring the progress

00:11:46 --> 00:11:52
on that like uh you know like like are

00:11:49 --> 00:11:53
we kind of actually asking the right

00:11:51 --> 00:11:56
questions in research like actually

00:11:52 --> 00:11:58
becomes like a fairly open-ended affair.

00:11:55 --> 00:12:00
>> Yeah. And I think it also makes sense to

00:11:57 --> 00:12:02
think about what the limits of, you

00:11:59 --> 00:12:05
know, uh open-ended means, you know. Um

00:12:02 --> 00:12:07
I think a while back Sam tweeted about

00:12:04 --> 00:12:08
some of the improvements that we were

00:12:06 --> 00:12:10
making in having our models write more

00:12:07 --> 00:12:11
creatively. And you know, we do consider

00:12:09 --> 00:12:14
the extremes here as well.

00:12:10 --> 00:12:18
>> Right. Right. Let's talk about RL

00:12:13 --> 00:12:21
because it seems like since 01 came out,

00:12:17 --> 00:12:23
RL has been the gift that keeps giving.

00:12:20 --> 00:12:25
You know, every every couple months Open

00:12:22 --> 00:12:28
puts out a release and everyone goes,

00:12:24 --> 00:12:29
"Oh, that's great, but this RL thing is

00:12:27 --> 00:12:32
going to plateau. We're going to

00:12:28 --> 00:12:34
saturate the evals. The models won't

00:12:31 --> 00:12:35
generalize or there's going to be mode

00:12:33 --> 00:12:37
collapse because of too much synthetic

00:12:34 --> 00:12:39
data for whatever. Everybody's got a

00:12:36 --> 00:12:40
laundry list of reasons to believe that

00:12:38 --> 00:12:43
he gains and performance from RL are

00:12:40 --> 00:12:44
going to tap out and and somehow they

00:12:42 --> 00:12:46
just don't. You guys just keep coming

00:12:43 --> 00:12:50
out and putting out continuous

00:12:45 --> 00:12:52
improvements. Why is RL working so well

00:12:49 --> 00:12:55
and what if anything has surprised you

00:12:51 --> 00:12:57
about how well it works? RL is a very

00:12:54 --> 00:13:02
versatile method, right? And there are a

00:12:56 --> 00:13:05
lot of ideas you can explore um once you

00:13:01 --> 00:13:07
have an RL system working. a long time

00:13:04 --> 00:13:08
at OpenAI, we started from this before

00:13:06 --> 00:13:10
language models, right? Like we were

00:13:07 --> 00:13:12
thinking about like okay like RL is this

00:13:09 --> 00:13:13
like extremely powerful thing of course

00:13:11 --> 00:13:15
like on top of deep learning which is

00:13:12 --> 00:13:17
this like incredible general learning

00:13:14 --> 00:13:18
method. Um but the thing that we

00:13:16 --> 00:13:21
struggled with for a very long time is

00:13:17 --> 00:13:23
like what is the environment like how do

00:13:20 --> 00:13:25
we actually anchor these models to the

00:13:22 --> 00:13:28
real world or like should we you know

00:13:24 --> 00:13:30
simulate uh

00:13:27 --> 00:13:33
you know some some some some island

00:13:30 --> 00:13:36
where they all learn to collaborate and

00:13:32 --> 00:13:38
compete. Um and and then you know of

00:13:35 --> 00:13:39
course came the the the the language

00:13:37 --> 00:13:42
modeling breakthrough right and we saw

00:13:38 --> 00:13:43
that oh yeah if we if we if we scale

00:13:41 --> 00:13:45
deep learning on modeling natural

00:13:42 --> 00:13:46
anguage we can create models with this

00:13:44 --> 00:13:48
like incredibly nuance understanding of

00:13:45 --> 00:13:50
human language

00:13:47 --> 00:13:51
and so since then we've been we've been

00:13:49 --> 00:13:52
you know seeking how to combine these

00:13:50 --> 00:13:54
paradigms and how to get our to work on

00:13:52 --> 00:13:56
atural language. Once you do right like

00:13:53 --> 00:14:01
then you kind of have the well you have

00:13:55 --> 00:14:04
the ability to um to to

00:14:00 --> 00:14:06
well to to to actually like like like

00:14:03 --> 00:14:09
xecute on on these different ideas and

00:14:05 --> 00:14:10
objectives in this like extremely um

00:14:08 --> 00:14:13
robust rich environment given by

00:14:10 --> 00:14:16
pre-training. Uh and so yeah, so I think

00:14:12 --> 00:14:18
uh it's been a it's been a it's been a

00:14:15 --> 00:14:21
real um

00:14:17 --> 00:14:24
yeah, I think it's been perhaps the

00:14:20 --> 00:14:26
most exciting period uh in our research

00:14:23 --> 00:14:31
over the last few years where we've

00:14:25 --> 00:14:34
really like uh yeah, we found so many

00:14:30 --> 00:14:37
new directions and promising ideas uh

00:14:33 --> 00:14:39
that that that all seem to to to be

00:14:36 --> 00:14:43
working out and and and and and we're

00:14:38 --> 00:14:45
trying to uh Yeah.

00:14:42 --> 00:14:47
Understand how to compare. One of the

00:14:44 --> 00:14:49
hardest things about RL for folks who

00:14:46 --> 00:14:52
are not practitioners of RL is the idea

00:14:48 --> 00:14:53
of crafting the right reward model. And

00:14:51 --> 00:14:56
so, especially if you're a business or

00:14:52 --> 00:14:57
an enterprise who wants to harness all

00:14:55 --> 00:14:59
this amazing progress you guys are

00:14:56 --> 00:15:02
putting out, but doesn't even know where

00:14:58 --> 00:15:03
to start. How what do the next few years

00:15:01 --> 00:15:06
look like for a company like that? What

00:15:02 --> 00:15:09
is the right mindset for somebody who's

00:15:05 --> 00:15:10
trying to make sense of RL to craft the

00:15:08 --> 00:15:12
right reward model? Is there anything

00:15:09 --> 00:15:16
you've learned about the best practices

00:15:11 --> 00:15:18
or an approach of thinking of using this

00:15:15 --> 00:15:20
latest sort of um family of reasoning

00:15:17 --> 00:15:21
techniques? What what is the right way I

00:15:19 --> 00:15:23
should think about even approaching

00:15:20 --> 00:15:27
reward modeling

00:15:22 --> 00:15:30
as a biologist or a physicist? I expect

00:15:26 --> 00:15:32
his will evolve quite rapidly. I expect

00:15:29 --> 00:15:33
it will become simpler, right? Like I

00:15:31 --> 00:15:34
think I think

00:15:32 --> 00:15:36
>> you know maybe like two years ago we

00:15:34 --> 00:15:37
would have been talking about like what

00:15:35 --> 00:15:40
is the right way to craft my fine-tuning

00:15:36 --> 00:15:42
data set and I I don't think we are like

00:15:39 --> 00:15:44
at the end of that evolution yet and I

00:15:41 --> 00:15:47
think we will be inching towards more

00:15:43 --> 00:15:49
and more humanlike learning uh which you

00:15:46 --> 00:15:50
know RL is still not quite. So I think I

00:15:48 --> 00:15:52
think maybe the most important part of

00:15:50 --> 00:15:55
the mindset is to like not assume that

00:15:51 --> 00:15:56
like what is now will be forever.

00:15:54 --> 00:15:59
>> Um so I want to bring the conversation

00:15:55 --> 00:16:01
back to coding. We would be remiss not

00:15:58 --> 00:16:04
o say congrats on GBT5 codecs. uh which

00:16:00 --> 00:16:06
just dropped today. Um can you guys say

00:16:03 --> 00:16:08
a little bit more about what's different

00:16:05 --> 00:16:10
about it, how it's trained differently,

00:16:07 --> 00:16:14
um maybe why you're excited about it?

00:16:09 --> 00:16:16
>> Yeah, so I think um one of the big

00:16:13 --> 00:16:17
focuses of the codeex team is to just

00:16:15 --> 00:16:19
ake the raw intelligence that we have

00:16:16 --> 00:16:23
from our reasoning models and make it

00:16:18 --> 00:16:24
very useful for real world coding. So um

00:16:22 --> 00:16:27
a lot of the work they've done is kind

00:16:23 --> 00:16:29
of consistent with this. um they are

00:16:26 --> 00:16:30
working on kind of having the model be

00:16:28 --> 00:16:32
able to handle more difficult

00:16:29 --> 00:16:34
environments. Um we know that real world

00:16:31 --> 00:16:36
coding is very messy. Um so they're

00:16:33 --> 00:16:38
trying to handle all the intricacies

00:16:35 --> 00:16:41
here. Um there's a lot of coding that

00:16:37 --> 00:16:43
has to do with you know style with um

00:16:40 --> 00:16:45
just like kind of softer things like how

00:16:42 --> 00:16:48
proactive the model is, how how lazy

00:16:44 --> 00:16:51
it is and just being able to define um

00:16:47 --> 00:16:53
in some sense like a spec for how uh a

00:16:50 --> 00:16:55
coding model should behave. um they do a

00:16:52 --> 00:16:57
lot of you know very strong work there

00:16:54 --> 00:16:59
and as as you see like um they they're

00:16:56 --> 00:17:01
also working on a lot better presets you

00:16:58 --> 00:17:04
know uh coders they have some kind of

00:17:00 --> 00:17:05
notion of this is how long I'm waiting

00:17:03 --> 00:17:08
I'm willing to wait for a particular

00:17:04 --> 00:17:10
solution um I think we've done a lot of

00:17:07 --> 00:17:12
work to dial in on you know for easy

00:17:09 --> 00:17:14
problems being a lot you know lower

00:17:11 --> 00:17:15
latency for harder problems actually the

00:17:13 --> 00:17:18
right thing is to be even higher

00:17:14 --> 00:17:20
latency um get you the really best

00:17:17 --> 00:17:23
solution um and just being able to find

00:17:19 --> 00:17:25
that preset um is sweet spot for if you

00:17:22 --> 00:17:26
were to say like easier problems versus

00:17:24 --> 00:17:28
harder.

00:17:25 --> 00:17:29
>> What we've found is the the latest the

00:17:27 --> 00:17:31
previous generation of the codeex

00:17:28 --> 00:17:32
models, they they were spending too

00:17:30 --> 00:17:34
little time solving the hardest problems

00:17:31 --> 00:17:36
and too much time solving the easy easy

00:17:33 --> 00:17:39
problems. And I think um

00:17:35 --> 00:17:41
>> that that is actually just um probably

00:17:38 --> 00:17:42
out of the box uh what what you might

00:17:40 --> 00:17:44
get out of 03.

00:17:41 --> 00:17:46
>> Maybe just on the the topic of coding

00:17:43 --> 00:17:49
since you guys are both

00:17:46 --> 00:17:50
competitive coders in prior lives. Um, I

00:17:48 --> 00:17:53
know you've been at OpenAI for almost a

00:17:49 --> 00:17:55
decade now, but I was struck by uh the

00:17:52 --> 00:17:58
story of Lisa Doll, the Go player who

00:17:54 --> 00:18:01
kind of famously quit Go after he lost

00:17:57 --> 00:18:02
o Alph Go um multiple times. Uh, and I

00:18:00 --> 00:18:04
think in a recent interview you guys

00:18:01 --> 00:18:06
were both saying that now the coding

00:18:03 --> 00:18:08
models are better than your

00:18:05 --> 00:18:10
capabilities. Uh, and that gets you

00:18:07 --> 00:18:12
excited. Um, but say more about that.

00:18:09 --> 00:18:14
And um, how much would you say you code

00:18:11 --> 00:18:15
now? Well, if you're hands- on keyboard,

00:18:13 --> 00:18:17
you can you can talk about OpenAI

00:18:14 --> 00:18:18
generally, but how much code is written

00:18:16 --> 00:18:21
by AI now

00:18:17 --> 00:18:23
>> in terms of cutting models being better?

00:18:20 --> 00:18:26
I I mean, I think yeah, I think it is

00:18:22 --> 00:18:27
extremely exciting to see this progress.

00:18:25 --> 00:18:29
I think like the programming

00:18:26 --> 00:18:32
competitions have a nice kind of

00:18:28 --> 00:18:35
encapsulated test of like ability to um

00:18:31 --> 00:18:37
come up with some new ideas um in in in

00:18:34 --> 00:18:40
you know, in this like boxed uh

00:18:36 --> 00:18:42
environment and time frame. Um I do

00:18:40 --> 00:18:45
think like you know if you look at

00:18:41 --> 00:18:49
hings like uh well I guess the IMO

00:18:44 --> 00:18:50
problem six or or maybe um some very

00:18:48 --> 00:18:52
hardest uh programming competitions

00:18:49 --> 00:18:53
problems like I think there's still a

00:18:51 --> 00:18:55
little bit of headway to go for the

00:18:52 --> 00:18:58
models but I wouldn't expect that to

00:18:54 --> 00:18:59
last very long. I took a little bit uh

00:18:57 --> 00:19:01
istorically I've been like

00:18:58 --> 00:19:03
>> being humble

00:19:00 --> 00:19:05
>> historically I've actually been like

00:19:02 --> 00:19:10
xtremely reluctant to use any sort of

00:19:04 --> 00:19:11
>> tools. I I I just used Vim pretty much

00:19:09 --> 00:19:14
>> old school.

00:19:10 --> 00:19:17
>> Yeah. Um yeah, eventually I think like

00:19:13 --> 00:19:20
especially with this with this um

00:19:16 --> 00:19:22
latest coding tools um like GPT5, I

00:19:19 --> 00:19:24
've really kind of felt like okay like

00:19:21 --> 00:19:27
this is this is no longer the way like

00:19:23 --> 00:19:29
you can do a you know 30 file

00:19:26 --> 00:19:31
refactor like pretty much perfectly in

00:19:28 --> 00:19:34
like 15 minutes like you kind of have to

00:19:30 --> 00:19:37
use it. Um yeah and so I've been I've

00:19:33 --> 00:19:38
been kind of like um learning this new

00:19:36 --> 00:19:41
ay of coding which definitely feels a

00:19:37 --> 00:19:43
little bit different. I um I think it is

00:19:40 --> 00:19:45
like a little bit of an uncanny valley

00:19:42 --> 00:19:47
still right now where like like you kind

00:19:44 --> 00:19:48
of have to use it because it is just

00:19:46 --> 00:19:52
like exciting so many things but it's

00:19:47 --> 00:19:56
till like you know a little bit like u

00:19:51 --> 00:19:59
not quite as good as a as as a coworker.

00:19:55 --> 00:20:00
Um I so you know I I think like our our

00:19:58 --> 00:20:01
priority is getting out of that uncanny

00:19:59 --> 00:20:05
valley.

00:20:00 --> 00:20:06
>> Yeah. But uh yeah, it's definitely an

00:20:04 --> 00:20:07
interesting time.

00:20:05 --> 00:20:09
>> Yeah, definitely

00:20:06 --> 00:20:11
>> to kind of like speak to the lease

00:20:08 --> 00:20:13
little moment. Um I think AlphaGo for

00:20:10 --> 00:20:15
both of us was, you know, a very

00:20:12 --> 00:20:19
formative milestone in AI development.

00:20:14 --> 00:20:20
And at least for me, it was the reason I

00:20:18 --> 00:20:22
started working on this in the first

00:20:19 --> 00:20:24
place. And maybe partly because of our

00:20:21 --> 00:20:26
backgrounds in competitive programming

00:20:23 --> 00:20:29
like I had this affinity to building

00:20:25 --> 00:20:31
these models which could do very very

00:20:28 --> 00:20:34
well in in these forms of contests and

00:20:30 --> 00:20:37
going from you know solving eighth grade

00:20:33 --> 00:20:39
math problems um to a year later um

00:20:36 --> 00:20:41
hitting our level of performance in in

00:20:38 --> 00:20:45
these coding contests. It's crazy to see

00:20:40 --> 00:20:48
that progression and um you kind of

00:20:44 --> 00:20:50
imagine or like to think that you feel a

00:20:47 --> 00:20:52
set of the feelings at least at all felt

00:20:49 --> 00:20:54
oo, right? It's um like wow this is

00:20:51 --> 00:20:55
really crazy, right? and and what are

00:20:53 --> 00:20:58
the possibilities and you know this is

00:20:54 --> 00:21:00
omething that I took decades to do and

00:20:57 --> 00:21:03
it took a lot of hard work to get to the

00:20:59 --> 00:21:06
forefront of um so you really do feel an

00:21:02 --> 00:21:08
implication of that is these models what

00:21:05 --> 00:21:10
can't they do right and I do feel like

00:21:07 --> 00:21:12
already it's kind of transformed the

00:21:09 --> 00:21:13
default for coding um this past weekend

00:21:11 --> 00:21:15
I was talking to some some high

00:21:12 --> 00:21:17
schoolers and they were saying oh you

00:21:14 --> 00:21:19
know actually the default way to code is

00:21:16 --> 00:21:21
vibe coding like um you know I think

00:21:18 --> 00:21:23
like they they would consider oh it's

00:21:20 --> 00:21:26
like maybe sometimes for completeness

00:21:22 --> 00:21:28
you would go and like actually do all of

00:21:25 --> 00:21:30
the mechanics of coding it from scratch

00:21:27 --> 00:21:32
yourself, but that's just a strange

00:21:30 --> 00:21:33
concept to them. Like why would you do

00:21:31 --> 00:21:36
that? You know, just vibe code by

00:21:32 --> 00:21:38
default. Yeah. And and so yeah, I mean I

00:21:35 --> 00:21:40
I do think you know the future

00:21:37 --> 00:21:42
hopefully will be vibe researching.

00:21:39 --> 00:21:45
>> Yeah.

00:21:41 --> 00:21:47
>> I that I have a question about that

00:21:44 --> 00:21:49
which is what makes a great researcher.

00:21:46 --> 00:21:51
Right. When you say vibe researching,

00:21:48 --> 00:21:54
there's um a big part of vibe coding is

00:21:50 --> 00:21:55
just having good taste in wanting to

00:21:53 --> 00:21:56
build something useful and interesting

00:21:54 --> 00:21:59
for the world. And I think what's so

00:21:56 --> 00:22:00
awesome about tools like Codeex is if

00:21:58 --> 00:22:02
you've got a good intuition for what

00:21:59 --> 00:22:04
people want, it helps you articulate

00:22:01 --> 00:22:07
that and then and then basically

00:22:03 --> 00:22:09
actualize a prototype very fast. With a

00:22:06 --> 00:22:10
with research, what's the what's the

00:22:08 --> 00:22:14
analog? What what makes a great

00:22:09 --> 00:22:16
researcher? Persistence uh is a is a

00:22:13 --> 00:22:19
very key trait, right? Like I think like

00:22:15 --> 00:22:22
what What is different about research

00:22:18 --> 00:22:24
when you're actually trying to I think a

00:22:21 --> 00:22:26
special thing about research right is

00:22:23 --> 00:22:28
you're trying to create something or or

00:22:25 --> 00:22:30
learn something that is just not known

00:22:27 --> 00:22:32
right like it's not known to work like

00:22:29 --> 00:22:35
you don't know whether it will work and

00:22:31 --> 00:22:38
so always trying something that will

00:22:34 --> 00:22:40
most likely fail and I think getting to

00:22:37 --> 00:22:42
a place where you are like in a mindset

00:22:40 --> 00:22:44
of like being ready to fail and being

00:22:41 --> 00:22:45
ready to learn from these failures and

00:22:43 --> 00:22:47
you know so and you know and of course

00:22:44 --> 00:22:49
with that comes creating kind of clear

00:22:46 --> 00:22:51
hypothesis and being extremely honest

00:22:48 --> 00:22:53
with yourself about how you're doing on

00:22:50 --> 00:22:55
them, right? I think a trap many people

00:22:52 --> 00:22:57
fall into is going out of the way to

00:22:54 --> 00:22:59
like to to prove that it works, right?

00:22:56 --> 00:23:01
Which is quite different from, you know,

00:22:58 --> 00:23:02
like I think like believing in your idea

00:23:00 --> 00:23:04
nd significance is extremely important,

00:23:02 --> 00:23:05
right? And you want to persist persist

00:23:03 --> 00:23:06
hat, but you have to be honest with

00:23:04 --> 00:23:08
yourself about when it's working and

00:23:05 --> 00:23:10
when it's not uh so that you can learn

00:23:07 --> 00:23:11
and adjust.

00:23:09 --> 00:23:15
>> Yeah, I think there are just very few

00:23:10 --> 00:23:16
shortcuts for experience. Um I I think

00:23:14 --> 00:23:18
through experience you kind of learn,

00:23:15 --> 00:23:19
you know, what's the right horizon to be

00:23:17 --> 00:23:22
thinking of a problem, right? You can't

00:23:18 --> 00:23:23
pick something that's too hard or it's

00:23:21 --> 00:23:26
not satisfying to do something that's

00:23:22 --> 00:23:28
too easy. Um and I think a lot of

00:23:25 --> 00:23:29
research is managing your own emotions

00:23:27 --> 00:23:31
over a long period of time, too. You

00:23:28 --> 00:23:32
know, there's just going to be a lot of

00:23:30 --> 00:23:34
things you try and they're not going to

00:23:31 --> 00:23:37
work. And

00:23:33 --> 00:23:38
>> sometimes you you need to know when to

00:23:36 --> 00:23:39
persevere through that or sometimes when

00:23:37 --> 00:23:42
to kind of switch to a different

00:23:38 --> 00:23:44
problem. Um and I think interestingness

00:23:41 --> 00:23:46
is something you know you try to fit

00:23:43 --> 00:23:49
hrough reading good papers talking to

00:23:45 --> 00:23:52
your colleagues and um and you kind

00:23:48 --> 00:23:53
of maybe distill their experience into

00:23:51 --> 00:23:55
your own process.

00:23:52 --> 00:23:59
>> When I was in grad school um you know

00:23:54 --> 00:24:00
there's a big part uh I was I'm a failed

00:23:58 --> 00:24:02
machine learning researcher. I was in

00:23:59 --> 00:24:04
grad school for for bioinformatics. But

00:24:01 --> 00:24:06
a big part of my research advisor's

00:24:03 --> 00:24:08
thrust was about picking the right

00:24:05 --> 00:24:10
problems to work on such that you could

00:24:07 --> 00:24:12
then sustain and persist through the

00:24:09 --> 00:24:14
hard times. And you said something

00:24:11 --> 00:24:15
interesting which was there's a

00:24:13 --> 00:24:17
difference between having conviction in

00:24:14 --> 00:24:18
an idea and then being maximally truth

00:24:16 --> 00:24:20
seeeking about when it's not working.

00:24:17 --> 00:24:22
And though both those things might are

00:24:19 --> 00:24:24
sometimes intention because you kind of

00:24:21 --> 00:24:26
go native on an on a topic or a problem

00:24:23 --> 00:24:27
sometimes that you have deep conviction

00:24:25 --> 00:24:29
in. Have you found is there any sort of

00:24:26 --> 00:24:32
heruristics you found are useful at the

00:24:28 --> 00:24:34
taste step at the problem picking step

00:24:31 --> 00:24:35
that help you arrive at the right set of

00:24:33 --> 00:24:37
problems where that conviction and truth

00:24:34 --> 00:24:40
seeeking is not as much in zero sum

00:24:36 --> 00:24:42
tension as other kinds of problems.

00:24:39 --> 00:24:44
>> Yeah to to be clear I don't think

00:24:41 --> 00:24:46
conviction and truth seeeking are really

00:24:43 --> 00:24:48
in a zero sum tension. I think like you

00:24:45 --> 00:24:49
can be like you can be convinced or you

00:24:47 --> 00:24:52
know you can have a lot of belief in

00:24:48 --> 00:24:53
idea and and you can be you know very

00:24:51 --> 00:24:54
persistent in it while it's not working.

00:24:52 --> 00:24:57
I think it's just important that you're

00:24:53 --> 00:24:58
kind of honest with yourself like like

00:24:56 --> 00:24:59
how much progress you're making and

00:24:57 --> 00:25:02
you're in a mindset where you're able to

00:24:58 --> 00:25:04
learn from uh the failures along the

00:25:01 --> 00:25:06
way. I think it's important to look for

00:25:03 --> 00:25:08
problems that you really care about and

00:25:05 --> 00:25:12
you really believe are important, right?

00:25:07 --> 00:25:15
And so um I think one one thing I've

00:25:11 --> 00:25:19
observed in in in in

00:25:14 --> 00:25:21
many um researchers that inspired me has

00:25:18 --> 00:25:23
been really going after the hard

00:25:20 --> 00:25:25
problems like looking at the questions

00:25:22 --> 00:25:27
that are you know kind of like you know

00:25:24 --> 00:25:28
idely known but like not really kind of

00:25:26 --> 00:25:30
considered tractable and just asking

00:25:27 --> 00:25:33
like you know why are they not tractable

00:25:29 --> 00:25:34
or like you know what like what what

00:25:32 --> 00:25:36
about this approach like why does this

00:25:33 --> 00:25:37
approach fail right you're you're you're

00:25:35 --> 00:25:39
always like thinking about what is

00:25:36 --> 00:25:41
really the barrier for the next step. If

00:25:38 --> 00:25:43
you're going after problems that like

00:25:40 --> 00:25:46
you really truly believe are important,

00:25:42 --> 00:25:47
right, then then that that that makes it

00:25:45 --> 00:25:50
so so much easier to find the motivation

00:25:46 --> 00:25:53
to persist with them over years. And in

00:25:49 --> 00:25:56
the development of like during the re

00:25:52 --> 00:25:58
training phase of GPD5 for example, are

00:25:55 --> 00:26:01
there any were there any moments where

00:25:57 --> 00:26:03
there were there was a hard problem the

00:26:00 --> 00:26:05
original initial attempts that were

00:26:02 --> 00:26:08
being made to crack that problem weren't

00:26:04 --> 00:26:11
working and yet you found somebody

00:26:07 --> 00:26:13
persisted through that. Um, and what was

00:26:10 --> 00:26:16
it about those sto any of those stories

00:26:12 --> 00:26:18
that comes to mind that worked well

00:26:15 --> 00:26:22
>> that you wish other people and other

00:26:17 --> 00:26:22
esearchers did more of?

00:26:22 --> 00:26:27
I think on the path there right like

00:26:24 --> 00:26:28
along the sequence of models like both

00:26:26 --> 00:26:31
e pre-trained models and the resig

00:26:27 --> 00:26:35
models um I think one very common theme

00:26:30 --> 00:26:37
is um bugs uh and you know both like

00:26:34 --> 00:26:39
just like yes silly bugs in software

00:26:36 --> 00:26:41
that can kind of stay in your software

00:26:38 --> 00:26:43
for like months and kind of invalidate

00:26:40 --> 00:26:46
all your experiments a little bit in a

00:26:42 --> 00:26:48
way that you don't know. Um

00:26:45 --> 00:26:50
and you know identifying them can be can

00:26:47 --> 00:26:53
be a very meaningful breakthrough for

00:26:49 --> 00:26:55
your research program. uh but also kind

00:26:52 --> 00:26:56
of bugs in the sense of like well you

00:26:54 --> 00:26:58
have a particular way of thinking about

00:26:55 --> 00:27:00
something and that way is a little bit

00:26:57 --> 00:27:02
skewed which causes you to uh make the

00:26:59 --> 00:27:03
wrong assumptions and identifying those

00:27:01 --> 00:27:07
wrong assumptions thinking rethinking

00:27:02 --> 00:27:10
frames from from scratch. Uh I think um

00:27:06 --> 00:27:12
you know both for getting the first

00:27:09 --> 00:27:14
reasoning models working or getting the

00:27:12 --> 00:27:16
uh you know larger pre-trained models

00:27:13 --> 00:27:17
working I think I think we've had like

00:27:15 --> 00:27:19
multiple issues like that that we've had

00:27:16 --> 00:27:21
to work through. As leaders of the

00:27:18 --> 00:27:23
research org, how do you think about

00:27:20 --> 00:27:26
what it takes to keep the best talent on

00:27:22 --> 00:27:28
your team? And on the flip side,

00:27:25 --> 00:27:31
creating a very resilient org that

00:27:27 --> 00:27:34
doesn't crumble if a key person leaves.

00:27:30 --> 00:27:37
>> The biggest I think uh things that

00:27:33 --> 00:27:38
OpenAI has going for it in terms of

00:27:36 --> 00:27:42
keeping the best people motivated and

00:27:37 --> 00:27:44
exciting excited is like we are in the

00:27:41 --> 00:27:46
business of doing fundamental research,

00:27:43 --> 00:27:47
right? We aren't the type of company

00:27:45 --> 00:27:50
that looks around and says, "Oh, what

00:27:46 --> 00:27:52
model did P, you know, company X build

00:27:49 --> 00:27:55
or what model did company Y build?" Um,

00:27:51 --> 00:27:57
you know, we have a fairly clear and

00:27:54 --> 00:28:00
crisp definition of what it is we're out

00:27:56 --> 00:28:02
o build. Um, we like innovating at the

00:27:59 --> 00:28:05
frontier. Um, we we really don't like

00:28:01 --> 00:28:08
copying and um, I think people are

00:28:04 --> 00:28:12
inspired by that mission, right? you are

00:28:07 --> 00:28:13
ally in in in the business of

00:28:11 --> 00:28:17
discovering new things about the deep

00:28:12 --> 00:28:18
learning stack and and um and I think

00:28:16 --> 00:28:21
we're we're kind of building something

00:28:17 --> 00:28:22
very exciting together. Um I think

00:28:20 --> 00:28:25
beyond that a lot of it's creating very

00:28:22 --> 00:28:27
good culture. So we want a good pipeline

00:28:24 --> 00:28:31
for training up people to become very

00:28:26 --> 00:28:34
good researchers. um we I think

00:28:30 --> 00:28:35
historically have hired um you know the

00:28:33 --> 00:28:37
best talent and and the most

00:28:34 --> 00:28:38
innovative talent. So I just think um

00:28:36 --> 00:28:42
you know we have a very deep bench as

00:28:38 --> 00:28:44
well and um yeah I think most of the our

00:28:41 --> 00:28:46
leaders are very inspired by the mission

00:28:43 --> 00:28:48
and that's what's kept all of them there

00:28:45 --> 00:28:50
like when I look at my direct reports um

00:28:48 --> 00:28:52
they haven't been affected by the Talon

00:28:49 --> 00:28:54
wars. I was chatting with a researcher

00:28:51 --> 00:28:56
ecently and he was talking about

00:28:53 --> 00:28:58
wanting to find the cave dwellers. Um,

00:28:55 --> 00:29:01
and these are often the people who are

00:28:57 --> 00:29:03
not posting on social media about their

00:29:00 --> 00:29:04
work. Um, for whatever reason they may

00:29:02 --> 00:29:07
not even be publishing. They're sort of

00:29:04 --> 00:29:10
in the background

00:29:06 --> 00:29:11
oing the work. Um, I don't know if you

00:29:09 --> 00:29:14
would agree with this concept, but how

00:29:10 --> 00:29:16
do you guys hire for researchers? And

00:29:13 --> 00:29:19
are there any non-obvious ways that you

00:29:15 --> 00:29:22
look for talent or you know attributes

00:29:18 --> 00:29:25
that you look for that are non-obvious?

00:29:21 --> 00:29:29
>> So I think I think one thing that um we

00:29:24 --> 00:29:32
look for is having solved hard problems

00:29:28 --> 00:29:35
in any field. A lot of our most

00:29:31 --> 00:29:36
successful researchers um have started

00:29:34 --> 00:29:39
their journey with deep learning at

00:29:35 --> 00:29:41
OpenAI and have worked in other fields

00:29:38 --> 00:29:43
like um physics or

00:29:40 --> 00:29:47
>> um computer science, the computer

00:29:42 --> 00:29:49
science or finance uh in the in the past

00:29:46 --> 00:29:54
rong technical fundamentals coupled

00:29:48 --> 00:29:56
with the abil the um intent to like work

00:29:53 --> 00:29:58
on very ambitious problems and actually

00:29:55 --> 00:30:00
stick with them. We don't purely look

00:29:57 --> 00:30:03
for oh, you know, who did the most

00:29:59 --> 00:30:04
visible work or or or or is the most

00:30:02 --> 00:30:06
visible on social media or

00:30:03 --> 00:30:08
>> Yeah. As you were talking, I I was

00:30:05 --> 00:30:09
thinking back to when I when I was a

00:30:07 --> 00:30:11
founder and I was running my own company

00:30:08 --> 00:30:13
and we would recruit for great talent

00:30:10 --> 00:30:15
engineers. Many of the attributes you

00:30:12 --> 00:30:18
described were ones that were on my mind

00:30:14 --> 00:30:19
then. Um, and Elon recently tweeted that

00:30:17 --> 00:30:22
he thinks this whole researcher versus

00:30:18 --> 00:30:25
engineer distinction is silly. Is that

00:30:21 --> 00:30:27
just a semantic uh is it just being you

00:30:24 --> 00:30:29
know semantically nitpicky or do you

00:30:26 --> 00:30:30
think these two things are more similar

00:30:28 --> 00:30:33
than they actually look?

00:30:29 --> 00:30:35
>> Yeah, I mean I I do think there

00:30:32 --> 00:30:38
can like researchers they don't just fit

00:30:34 --> 00:30:39
one shape. Um you know we have certain

00:30:37 --> 00:30:42
researchers who are very productive at

00:30:38 --> 00:30:44
openi who are just so good at idea

00:30:41 --> 00:30:47
generation and um you know they don't

00:30:44 --> 00:30:48
necessarily need to show great impact

00:30:46 --> 00:30:50
hrough implementing all of their ideas,

00:30:47 --> 00:30:52
right? I think there's so much alpha

00:30:49 --> 00:30:53
they generate in just kind of coming up

00:30:51 --> 00:30:55
with oh let's try this or let's try this

00:30:52 --> 00:30:57
or maybe we're thinking about that and

00:30:54 --> 00:31:00
there's other researchers who you know

00:30:56 --> 00:31:04
they are just very very efficient at um

00:30:59 --> 00:31:05
taking one idea um rigorously exploring

00:31:03 --> 00:31:06
you know the space of experiments around

00:31:04 --> 00:31:08
that idea. So I think you know

00:31:05 --> 00:31:10
researchers come in very different

00:31:07 --> 00:31:13
forms. I think um maybe that first type

00:31:09 --> 00:31:16
wouldn't necessarily map into the same

00:31:12 --> 00:31:18
bucket as a a great engineer, but um you

00:31:15 --> 00:31:22
know we we do kind of try to have a

00:31:17 --> 00:31:23
fairly diverse um set of research tastes

00:31:21 --> 00:31:25
and styles.

00:31:22 --> 00:31:27
>> Yeah. Mhm. And and say a little bit

00:31:24 --> 00:31:29
about what it takes to make like a

00:31:26 --> 00:31:30
create a frontier sort of winning

00:31:28 --> 00:31:34
culture

00:31:30 --> 00:31:36
>> that can attract all kinds of shapes and

00:31:33 --> 00:31:38
of researchers and then actually grow

00:31:35 --> 00:31:40
them, thrive them, make them win

00:31:37 --> 00:31:41
together at scale. What is it? What what

00:31:39 --> 00:31:43
do you think are the most

00:31:40 --> 00:31:44
>> critical ingredients of a winning

00:31:42 --> 00:31:46
culture?

00:31:43 --> 00:31:48
>> So I I think actually the most important

00:31:45 --> 00:31:51
hing is just to make sure you protect

00:31:47 --> 00:31:53
fundamental research, right? Um, I think

00:31:50 --> 00:31:54
you can get into this world with so many

00:31:52 --> 00:31:57
different companies these days where

00:31:53 --> 00:31:59
you're just thinking about, oh, how do I

00:31:56 --> 00:32:02
compete on, you know, a chat product or

00:31:58 --> 00:32:04
some other kind of product surface and

00:32:01 --> 00:32:06
um, you need to make sure that you leave

00:32:03 --> 00:32:08
space and recognize the research for

00:32:05 --> 00:32:10
what it is and also give them the space

00:32:07 --> 00:32:12
to do that, right? Like you can't have

00:32:10 --> 00:32:15
them being pulled in all of these

00:32:11 --> 00:32:17
different product directions. Um, so I

00:32:14 --> 00:32:19
think that's one thing that we pay

00:32:16 --> 00:32:22
attention to within our culture,

00:32:18 --> 00:32:24
>> especially now that there's so much

00:32:21 --> 00:32:26
spotlight on open AI, so much spotlight

00:32:23 --> 00:32:30
on AI in general and and the competition

00:32:26 --> 00:32:32
between different labs. Uh, it would be

00:32:29 --> 00:32:34
asy to fall into a mindset of like, oh,

00:32:31 --> 00:32:38
we're racing to bit beat this latest

00:32:34 --> 00:32:41
release or something. and and um you

00:32:37 --> 00:32:42
know there's definitely like um uh a

00:32:40 --> 00:32:43
risk that people kind of start looking

00:32:41 --> 00:32:44
over their shoulder and start thinking

00:32:42 --> 00:32:47
about oh you know what are these other

00:32:43 --> 00:32:51
things and and uh I see it as a large

00:32:46 --> 00:32:55
part of um our job to make sure that

00:32:50 --> 00:32:56
people have this comfort and space to

00:32:54 --> 00:32:58
think about you know what what are

00:32:55 --> 00:33:01
things actually going to look like in a

00:32:57 --> 00:33:03
year or two? um like what are the

00:33:00 --> 00:33:05
actually big research questions that we

00:33:02 --> 00:33:06
want to answer and and how do we

00:33:04 --> 00:33:08
actually get to models that like vastly

00:33:05 --> 00:33:10
outperform what we see currently rather

00:33:07 --> 00:33:11
than just like iteratively improving in

00:33:09 --> 00:33:13
the current paradigm.

00:33:10 --> 00:33:15
>> Just to pull on that thread more on

00:33:12 --> 00:33:17
protecting fundamental research um you

00:33:14 --> 00:33:18
guys are obviously one of the best

00:33:16 --> 00:33:20
research organizations in the world but

00:33:17 --> 00:33:22
you're also one of the best product

00:33:19 --> 00:33:24
companies in the world. H how do you

00:33:21 --> 00:33:25
balance and especially with um you've

00:33:23 --> 00:33:27
brought on some of the best product

00:33:24 --> 00:33:30
execs in the world as well. um how do

00:33:26 --> 00:33:31
you balance that focus between the two

00:33:29 --> 00:33:33
and while protecting fundamental

00:33:30 --> 00:33:35
research also continue to move forward

00:33:32 --> 00:33:38
the great products that you have out?

00:33:34 --> 00:33:40
>> Yeah, I mean I think it's about kind of

00:33:37 --> 00:33:41
delineating a set of researchers who

00:33:39 --> 00:33:43
really do care about product and who

00:33:40 --> 00:33:45
really want to be accountable to the

00:33:42 --> 00:33:47
success of the product and and they

00:33:44 --> 00:33:53
should of course very closely coordinate

00:33:46 --> 00:33:54
with the the research work at large. Um

00:33:52 --> 00:33:56
but I think just kind of people

00:33:54 --> 00:33:58
understanding their their mandates and

00:33:55 --> 00:34:01
what they are rewarded for um uh that

00:33:57 --> 00:34:04
's a very important thing. One thing

00:34:00 --> 00:34:09
that I think is also helpful is that um

00:34:03 --> 00:34:12
our product team and and broader company

00:34:08 --> 00:34:14
leadership is is is bought into this

00:34:11 --> 00:34:17
vision right where where we are going

00:34:13 --> 00:34:19
with research. And so uh you know nobody

00:34:16 --> 00:34:20
is assuming that like oh the product we

00:34:18 --> 00:34:22
have now is a product we'll have forever

00:34:19 --> 00:34:24
and we'll just kind of wait for like you

00:34:21 --> 00:34:26
know new versions from research like

00:34:23 --> 00:34:29
we we are able to think jointly

00:34:26 --> 00:34:31
about what the future looks like. One of

00:34:28 --> 00:34:34
the things that you guys have done is

00:34:30 --> 00:34:36
let such a diversity of different ideas

00:34:33 --> 00:34:39
and bets flourish inside of OpenAI

00:34:36 --> 00:34:41
that you then have to figure out some

00:34:38 --> 00:34:44
way as research leaders to to make it

00:34:40 --> 00:34:46
all make coherent sense as one part of a

00:34:43 --> 00:34:48
road map. And you got, you know, people

00:34:45 --> 00:34:51
over here investigating the future of

00:34:47 --> 00:34:52
diffusion models and visual media. And

00:34:50 --> 00:34:54
over here you've got folks, you know,

00:34:51 --> 00:34:57
investigating the future of reasoning

00:34:53 --> 00:34:59
when it comes to code.

00:34:56 --> 00:35:00
How do you paint a coherent picture of

00:34:58 --> 00:35:04
all that? How does that all come

00:34:59 --> 00:35:06
together when when there might be at at

00:35:03 --> 00:35:07
least naively some tension between

00:35:05 --> 00:35:09
giving researchers the independence to

00:35:06 --> 00:35:11
go to fundamental research and then

00:35:08 --> 00:35:14
somehow making that all fit into one

00:35:10 --> 00:35:16
coherent research program. Our settle

00:35:13 --> 00:35:19
goal um for our research program has

00:35:16 --> 00:35:22
been getting to an automated researcher

00:35:18 --> 00:35:25
for um a couple years now. Uh and so

00:35:22 --> 00:35:27
we've been we've been um building most

00:35:24 --> 00:35:31
our projects with this goal in mind. Um

00:35:26 --> 00:35:35
and so this

00:35:30 --> 00:35:37
till leaves a lot of room for um kind

00:35:34 --> 00:35:38
of bottom up idea generation for

00:35:36 --> 00:35:41
fundamental research on on various

00:35:38 --> 00:35:43
domains. But we are you know always

00:35:40 --> 00:35:46
thinking about how do these ideas come

00:35:42 --> 00:35:48
together eventually. Um we are you know

00:35:46 --> 00:35:50
e we believe for example that reasoning

00:35:47 --> 00:35:51
models go much further and we have a lot

00:35:49 --> 00:35:53
of explorations on things that are not

00:35:50 --> 00:35:54
directly reasoning models but we are

00:35:52 --> 00:35:58
thinking a lot about how they eventually

00:35:53 --> 00:36:00
combine and you know what does what what

00:35:57 --> 00:36:02
will this uh kind of innovation look

00:35:59 --> 00:36:04
like once you have something that is out

00:36:01 --> 00:36:07
here and thinking for for for moms

00:36:03 --> 00:36:10
about a very hard problem. Um and so I

00:36:06 --> 00:36:14
think this clarity of of like our

00:36:09 --> 00:36:16
long-term objectives is important. Um

00:36:13 --> 00:36:17
but yeah but it doesn't doesn't mean

00:36:15 --> 00:36:19
that we are you know prescriptive about

00:36:16 --> 00:36:20
like oh here are all the little pieces

00:36:18 --> 00:36:22
right like we definitely view this as a

00:36:19 --> 00:36:25
question of of exploration and

00:36:21 --> 00:36:27
learning about about these technologies.

00:36:24 --> 00:36:29
>> Yeah I think you want to be opinionated

00:36:26 --> 00:36:32
and prescriptive at their very kind of

00:36:28 --> 00:36:34
course level but you know a lot of ideas

00:36:31 --> 00:36:35
can bubble up in a finer level

00:36:33 --> 00:36:37
>> and has have there been any moments

00:36:34 --> 00:36:39
where th those things have been

00:36:36 --> 00:36:41
intention at all recently? Well, one

00:36:38 --> 00:36:43
provocative example could be recently,

00:36:40 --> 00:36:44
you know, this new image model came out,

00:36:42 --> 00:36:47
which is nano banana, right, from

00:36:43 --> 00:36:49
Google. It's extraordinary value shown

00:36:46 --> 00:36:51
to that like lots of everyday people um

00:36:48 --> 00:36:53
can unlock a lot of creativity when

00:36:50 --> 00:36:56
these models are good at understanding

00:36:52 --> 00:36:58
editing prompts. Um and and I could see

00:36:55 --> 00:37:00
how that would create some tension for a

00:36:57 --> 00:37:03
research program that may not be

00:36:59 --> 00:37:05
prioritizing that as directly. um if if

00:37:02 --> 00:37:06
one of your you know somebody

00:37:04 --> 00:37:08
talented on your team came and said guys

00:37:05 --> 00:37:09
like this thing is so clearly valuable

00:37:07 --> 00:37:11
in the world out there we should be

00:37:08 --> 00:37:13
spending you you know more effort more

00:37:10 --> 00:37:14
nergy on this how do you reason about

00:37:12 --> 00:37:15
hat question

00:37:13 --> 00:37:17
>> I think that's definitely a question

00:37:14 --> 00:37:19
that we've been kind of thinking about

00:37:16 --> 00:37:24
for quite a while at OpenAI I mean if

00:37:18 --> 00:37:25
you if you look at GP3 right like like

00:37:23 --> 00:37:27
once we kind of saw like oh like this is

00:37:24 --> 00:37:28
kind of where language models are going

00:37:26 --> 00:37:30
we we definitely like had a lot of

00:37:27 --> 00:37:32
discussions about

00:37:29 --> 00:37:34
well clearly there are going to so many

00:37:31 --> 00:37:36
magical things you can do with AI,

00:37:33 --> 00:37:39
right? And you will you will be able to

00:37:35 --> 00:37:40
go to this like like extremely smart

00:37:38 --> 00:37:41
models that are, you know, out there

00:37:39 --> 00:37:43
pushing the frontiers of science, but

00:37:40 --> 00:37:46
you will also have this like incredible

00:37:42 --> 00:37:50
media generation and this incredibly uh

00:37:45 --> 00:37:52
you know transformative u um

00:37:49 --> 00:37:55
entertainment applications. Uh and so

00:37:51 --> 00:37:58
like how do we prioritize among all

00:37:54 --> 00:37:59
these directions uh has definitely been

00:37:57 --> 00:38:02
something we've been we've been thinking

00:37:58 --> 00:38:04
about for for for quite a while. Yeah,

00:38:01 --> 00:38:06
absolutely. And and the real answer is

00:38:03 --> 00:38:08
like we don't discourage someone from

00:38:05 --> 00:38:10
being really excited by that and and

00:38:07 --> 00:38:12
it's just if we're consistent in the

00:38:09 --> 00:38:14
prioritization um and our product

00:38:11 --> 00:38:17
strategy, then it just will naturally

00:38:13 --> 00:38:19
fall in and and so it's just for us like

00:38:16 --> 00:38:20
we we do encourage a lot of people to to

00:38:18 --> 00:38:23
be excited about, you know, building

00:38:19 --> 00:38:25
this um you know, building kind of like

00:38:22 --> 00:38:27
aic products, you know, whatever kind of

00:38:24 --> 00:38:31
products that that they're excited by.

00:38:26 --> 00:38:33
But I think it's uh important for us to

00:38:30 --> 00:38:35
also have a a separate group of people

00:38:32 --> 00:38:37
who you you protect that their goal is

00:38:34 --> 00:38:39
to create the algorithmic advances. How

00:38:36 --> 00:38:41
does that translate and just to build on

00:38:38 --> 00:38:43
Andre's question into a concrete

00:38:40 --> 00:38:46
framework around resourcing like do you

00:38:42 --> 00:38:50
think about okay x% of compute resources

00:38:45 --> 00:38:51
will go to longer term you know very

00:38:49 --> 00:38:55
important but maybe a bit more pie in

00:38:50 --> 00:38:56
the sky exploration versus there's also

00:38:54 --> 00:38:58
you know obviously current product

00:38:55 --> 00:39:00
inference but sort of this thing in the

00:38:57 --> 00:39:01
middle where uh it's achievable in the

00:38:59 --> 00:39:03
short to medium term.

00:39:00 --> 00:39:05
>> Yeah. Um so I think that's a big part of

00:39:02 --> 00:39:07
both of our jobs. You know just uh this

00:39:04 --> 00:39:08
portfolio management question of how

00:39:06 --> 00:39:11
much compute do you give to which

00:39:07 --> 00:39:14
project and um I think historically

00:39:10 --> 00:39:16
we've put a little bit more on just the

00:39:13 --> 00:39:18
core algorithmic advances uh versus kind

00:39:15 --> 00:39:20
of the the product research. Um but it's

00:39:18 --> 00:39:22
omething that you have to feel out over

00:39:19 --> 00:39:23
time, right? It's it's dynamic. I think

00:39:21 --> 00:39:25
monthtomonth there could be different

00:39:22 --> 00:39:28
needs. And so I think it's important to

00:39:24 --> 00:39:31
stay fairly flexible on that. And if you

00:39:27 --> 00:39:34
had 10% more resources, would you put it

00:39:30 --> 00:39:38
oward compute or is it data curation,

00:39:33 --> 00:39:40
people? Where would you stick that from

00:39:37 --> 00:39:42
like a marginal

00:39:39 --> 00:39:44
uh

00:39:41 --> 00:39:46
>> good question? Um honestly, yeah, I

00:39:43 --> 00:39:50
think um comput

00:39:45 --> 00:39:52
>> today reasonable answer. Yeah. Yeah. I

00:39:49 --> 00:39:53
mean, honestly, I I I do think kind of

00:39:51 --> 00:39:55
to your question of prioritization,

00:39:52 --> 00:39:56
right? It's like in a vacuum any of

00:39:54 --> 00:39:58
these things you would love to like go

00:39:55 --> 00:40:01
and excel and win at. Um I think the

00:39:57 --> 00:40:03
danger is you end up like second place

00:40:00 --> 00:40:06
at everything and you know not like you

00:40:02 --> 00:40:08
know clearly leading at at anything. So

00:40:05 --> 00:40:10
I think prioritization is important

00:40:07 --> 00:40:11
right and you need to make sure

00:40:09 --> 00:40:13
>> there's some things you're cleareyed on

00:40:10 --> 00:40:14
this is the thing that we need to win.

00:40:12 --> 00:40:15
>> Yeah.

00:40:13 --> 00:40:18
But I think it makes sense to talk

00:40:14 --> 00:40:21
about it for just a a little bit more

00:40:17 --> 00:40:24
which is compute sets so much of

00:40:20 --> 00:40:26
comput is destiny in a way right at a

00:40:23 --> 00:40:28
research organization like openi and so

00:40:25 --> 00:40:29
do would you a couple of years ago I

00:40:27 --> 00:40:31
think it became very fashionable to say

00:40:28 --> 00:40:33
oh okay we're not going to be compute

00:40:30 --> 00:40:36
constrained anytime soon because there's

00:40:32 --> 00:40:37
a bunch of CMS that are you know people

00:40:35 --> 00:40:38
are discovering and we're going to get

00:40:36 --> 00:40:39
more efficient and all the algorithms

00:40:37 --> 00:40:41
are going to get better and then

00:40:38 --> 00:40:44
eventually like really we'll just be in

00:40:40 --> 00:40:45
a data constrained regime And it seems

00:40:43 --> 00:40:47
like, you know, a couple years have come

00:40:44 --> 00:40:49
and gone and we're still like this is

00:40:46 --> 00:40:51
ort of very computed environment.

00:40:48 --> 00:40:56
>> Does that change anytime soon, you

00:40:50 --> 00:40:59
think? Or I mean I think like we've seen

00:40:55 --> 00:41:02
for long enough like how

00:40:58 --> 00:41:04
much we can do with compute. Um yeah, I

00:41:01 --> 00:41:07
I I haven't really bought that much

00:41:04 --> 00:41:09
into the like will be data constraint

00:41:06 --> 00:41:11
claim and um yeah, I don't I don't I

00:41:08 --> 00:41:13
don't expect that to change. Yeah,

00:41:10 --> 00:41:15
anyone who says that should just step

00:41:12 --> 00:41:17
into my job for a week and there's no

00:41:14 --> 00:41:19
ne who's like a you know I have all the

00:41:16 --> 00:41:22
compute that I need. Yeah.

00:41:18 --> 00:41:24
>> You know, historically the job of

00:41:21 --> 00:41:27
advancing fundamental research has

00:41:23 --> 00:41:29
historically been largely a mandate that

00:41:26 --> 00:41:30
universities have had partly for the

00:41:28 --> 00:41:32
compute reasons you just described. That

00:41:29 --> 00:41:34
hasn't been the case for Frontier AI.

00:41:31 --> 00:41:36
You guys have spent done such an

00:41:33 --> 00:41:39
incredible job kind of channeling the

00:41:36 --> 00:41:42
arc of Frontier AI progress to help the

00:41:38 --> 00:41:43
sciences out. Um, and I'm wondering when

00:41:41 --> 00:41:45
those worlds collide, the fundamental

00:41:42 --> 00:41:48
world of university research today and

00:41:44 --> 00:41:51
the world of frontier AI, what comes

00:41:47 --> 00:41:54
out? So, I guess I I personally started

00:41:50 --> 00:41:56
as a resident at OpenAI and it's a

00:41:53 --> 00:42:00
program that we had for uh people in

00:41:55 --> 00:42:02
different fields to come in, you know,

00:41:59 --> 00:42:04
learn quickly about about AI and become

00:42:01 --> 00:42:07
productive as a researcher. And I think

00:42:03 --> 00:42:10
there's a lot of really powerful

00:42:06 --> 00:42:11
elements in in that uh program. And you

00:42:09 --> 00:42:13
know the idea is just like you know

00:42:10 --> 00:42:16
could we accelerate something that looks

00:42:12 --> 00:42:18
like a PhD in in as as little time as

00:42:15 --> 00:42:21
possible. And I think a lot of that just

00:42:17 --> 00:42:23
looks like implementing a lot of you

00:42:20 --> 00:42:24
know very core results. And you know

00:42:22 --> 00:42:25
through doing that you're going to make

00:42:23 --> 00:42:27
mistakes. You're going to be like oh wow

00:42:24 --> 00:42:28
like build intuition for if I you know

00:42:26 --> 00:42:31
set this wrong like that's going to blow

00:42:27 --> 00:42:32
up my network in this way. Um and so you

00:42:30 --> 00:42:36
just need a lot of that hands-on

00:42:31 --> 00:42:39
experience. Um I think um over time, you

00:42:36 --> 00:42:42
know, there been curriculums developed

00:42:38 --> 00:42:44
at um probably all these large labs in

00:42:41 --> 00:42:48
like optimization and architecture

00:42:43 --> 00:42:49
and RL and um yeah, probably no better

00:42:47 --> 00:42:51
way than to just kind of try to

00:42:48 --> 00:42:53
implement a lot of those things and read

00:42:50 --> 00:42:55
about them and think critically about

00:42:52 --> 00:42:58
hem. Yeah.

00:42:54 --> 00:43:00
>> Yeah. I think maybe like one other nice

00:42:57 --> 00:43:03
thing that you get to experience at

00:42:59 --> 00:43:04
academia is like yeah this like

00:43:02 --> 00:43:06
persistence right of like oh you know

00:43:03 --> 00:43:08
you have a few years and you're kind of

00:43:05 --> 00:43:09
trying to solve a problem and it's a

00:43:07 --> 00:43:13
hard problem and you've never dealt with

00:43:08 --> 00:43:15
such a hard problem before um and yeah I

00:43:12 --> 00:43:20
do feel like this is a thing that's like

00:43:14 --> 00:43:23
um well currently the pace of progress

00:43:19 --> 00:43:24
is very fast uh maybe also the ideas

00:43:22 --> 00:43:27
tends to work out a little bit more

00:43:23 --> 00:43:29
often than they did in the fast. Um

00:43:26 --> 00:43:32
because uh yeah, deep learning just

00:43:28 --> 00:43:35
wants to learn. Uh

00:43:31 --> 00:43:37
and um getting your hands on on a more

00:43:34 --> 00:43:39
challenging problem for for a little bit

00:43:36 --> 00:43:41
maybe you know being part of a team

00:43:38 --> 00:43:43
attacking like an ambitious challenge

00:43:40 --> 00:43:46
and uh and and you know getting that

00:43:42 --> 00:43:47
feeling of you know uh what it feels

00:43:45 --> 00:43:49
like to be stuck and what it feels like

00:43:46 --> 00:43:50
to finally be making progress I think is

00:43:48 --> 00:43:54
uh is also something that's like very

00:43:49 --> 00:43:56
useful to learn. How does

00:43:53 --> 00:43:59
external perception

00:43:55 --> 00:44:02
reception of a particular product launch

00:43:58 --> 00:44:05
impact how you prioritize something? Is

00:44:01 --> 00:44:09
that uh is it to the extent where you

00:44:04 --> 00:44:10
know perception and usage uh in the case

00:44:08 --> 00:44:13
where they're married obviously there's

00:44:10 --> 00:44:14
probably a clear directive there but in

00:44:12 --> 00:44:16
a case where maybe they're divorced a

00:44:13 --> 00:44:18
bit does that impact how you think about

00:44:15 --> 00:44:22
roadmap or where you emphasize

00:44:17 --> 00:44:23
resources? So we we generally like have

00:44:21 --> 00:44:28
some pretty strong convictions about the

00:44:22 --> 00:44:30
future and so we we don't tie them that

00:44:27 --> 00:44:32
closely to like short-term reception of

00:44:29 --> 00:44:34
our products, right? Like of course we

00:44:31 --> 00:44:37
you know learn based on what is going

00:44:33 --> 00:44:39
on. we, you know, read other papers and

00:44:36 --> 00:44:42
we we we look at like what other labs

00:44:38 --> 00:44:45
are working on but uh but generally like

00:44:41 --> 00:44:49
we we act from a place of of of fairly

00:44:44 --> 00:44:53
strong belief in and and uh in what

00:44:48 --> 00:44:56
we're building. Um and so of course like

00:44:52 --> 00:44:57
uh you know that that is for like our

00:44:55 --> 00:45:00
long-term research program of course

00:44:56 --> 00:45:02
when it comes to um

00:44:59 --> 00:45:05
product right like like I think that the

00:45:02 --> 00:45:06
the cycle of iteration is much much

00:45:04 --> 00:45:08
faster.

00:45:05 --> 00:45:11
>> Yeah. I think you know there with every

00:45:07 --> 00:45:13
launch you know we are trying to aim it

00:45:10 --> 00:45:15
o be something that's wildly successful

00:45:12 --> 00:45:17
on the product side and you know I I

00:45:14 --> 00:45:18
think from a fundamental research

00:45:16 --> 00:45:21
perspective we're trying to create

00:45:17 --> 00:45:24
models with all the kind of core

00:45:20 --> 00:45:26
capabilities needed to build a very rich

00:45:23 --> 00:45:27
you know set of experiences and products

00:45:25 --> 00:45:30
and you know there are going to be

00:45:26 --> 00:45:32
people who have some vision of like one

00:45:29 --> 00:45:33
particular thing they could build and

00:45:31 --> 00:45:35
you know we'll launch it and everything

00:45:32 --> 00:45:37
we launch we really hope it goes wildly

00:45:34 --> 00:45:39
successful ful and you know we get that

00:45:36 --> 00:45:41
feedback and if it's if it's not like

00:45:38 --> 00:45:43
we'll kind of shape our our product

00:45:40 --> 00:45:45
strategy a little bit but yeah we we

00:45:42 --> 00:45:47
definitely also in the business of

00:45:44 --> 00:45:48
launching very useful wildly successful

00:45:46 --> 00:45:52
products. Yeah,

00:45:47 --> 00:45:55
>> it feels like because of the

00:45:51 --> 00:45:57
un sort of completely unbridled pace of

00:45:54 --> 00:45:59
progress that we've just spent a lot of

00:45:56 --> 00:46:01
time talking about a lot is going to

00:45:58 --> 00:46:04
change over the next few years, right?

00:46:00 --> 00:46:06
It gets really hard to predict I imagine

00:46:03 --> 00:46:09
10 years out, let alone, you know, 10

00:46:05 --> 00:46:11
months out. And so

00:46:08 --> 00:46:13
my question I guess is through all that

00:46:10 --> 00:46:16
change that the frontier of AI is going

00:46:12 --> 00:46:18
to bring what are some priors that you

00:46:15 --> 00:46:20
actually think should stay constant? Is

00:46:17 --> 00:46:22
there anything well one clearly is that

00:46:19 --> 00:46:24
we don't have enough compute?

00:46:21 --> 00:46:25
Is there anything else that you think

00:46:23 --> 00:46:28
doesn't change that you think would be

00:46:24 --> 00:46:30
strong reasonably held prior as

00:46:27 --> 00:46:33
constants? I think more broadly than

00:46:29 --> 00:46:36
compute there's physical constraints of

00:46:32 --> 00:46:39
well energy but also like you know at

00:46:35 --> 00:46:43
some point not too far like robotics

00:46:38 --> 00:46:44
will become a major focus um and so um

00:46:42 --> 00:46:49
so I think I think thinking about like

00:46:43 --> 00:46:51
the the physical constraints um is is

00:46:48 --> 00:46:54
going to remain important um but yeah I

00:46:50 --> 00:46:56
do think on the

00:46:53 --> 00:46:57
intelligence front I would not make too

00:46:55 --> 00:47:01
many assumptions

00:46:56 --> 00:47:04
>> very few startups can get to the scale

00:47:00 --> 00:47:05
that you have both from a you know

00:47:03 --> 00:47:09
employee perspective but also revenue

00:47:04 --> 00:47:11
count and maintain that break neck speed

00:47:08 --> 00:47:12
that you probably had I mean seven eight

00:47:10 --> 00:47:15
years ago when you when you both joined

00:47:11 --> 00:47:19
um what's the secret sauce to doing that

00:47:14 --> 00:47:22
and how do you continue to maintain this

00:47:18 --> 00:47:23
pressure almost to to ship as quickly as

00:47:21 --> 00:47:25
possible even though you know you're

00:47:22 --> 00:47:28
kind of on you know top now

00:47:24 --> 00:47:29
>> I think one of the clearest marker is

00:47:27 --> 00:47:31
that we have really good research

00:47:28 --> 00:47:32
culture at least in my mind is you know

00:47:30 --> 00:47:36
I've worked at different companies

00:47:31 --> 00:47:38
before and there is a real thing which

00:47:35 --> 00:47:40
is a learning plateau right you go to a

00:47:37 --> 00:47:42
company you you learn a lot for the

00:47:39 --> 00:47:43
first one or two years and then you just

00:47:41 --> 00:47:45
find kind of like

00:47:42 --> 00:47:47
>> you know I I know how to be fairly

00:47:44 --> 00:47:49
efficient in this framework and my my

00:47:46 --> 00:47:51
learning kind of stops and I've really

00:47:48 --> 00:47:53
never felt that at at open just like

00:47:50 --> 00:47:55
that experience you described of

00:47:52 --> 00:47:57
all these really cool results bubbling

00:47:54 --> 00:48:01
up um you're just learning so much we

00:47:56 --> 00:48:02
over a week and um and it it is a

00:48:00 --> 00:48:04
full-time job to kind of stay on top of

00:48:01 --> 00:48:09
all of it and um that's just been very

00:48:03 --> 00:48:11
fulfilling. So um yeah, no I I think

00:48:08 --> 00:48:13
that's a very accurate description just

00:48:10 --> 00:48:15
um we we just want to generate a lot of

00:48:12 --> 00:48:17
really high quality research and um it's

00:48:14 --> 00:48:18
almost a good thing like if you're

00:48:16 --> 00:48:20
generating enough that you're barely

00:48:17 --> 00:48:21
able to keep on top of it.

00:48:19 --> 00:48:23
>> Yeah, exactly. Yeah,

00:48:20 --> 00:48:24
>> I think definitely like the developer of

00:48:22 --> 00:48:26
technology I think is a driving force

00:48:23 --> 00:48:28
here where

00:48:25 --> 00:48:32
>> you know maybe yeah maybe we would kind

00:48:27 --> 00:48:33
of u become comfortable after like a few

00:48:31 --> 00:48:36
years working in a given paradigm but we

00:48:32 --> 00:48:38
are always on the cusp of that you know

00:48:35 --> 00:48:40
>> new thing and you know trying to

00:48:37 --> 00:48:42
reconfigure our thinking around the kind

00:48:39 --> 00:48:44
of new constraints and new possibilities

00:48:41 --> 00:48:46
that we're going to be faced with

00:48:43 --> 00:48:48
>> um and so I think I think that kind of

00:48:45 --> 00:48:50
creates this this feeling of constant

00:48:47 --> 00:48:52
change and and the and that mindset of

00:48:49 --> 00:48:55
like always kind of learning the new

00:48:51 --> 00:48:57
thing. Well, you know, one thing that

00:48:54 --> 00:48:59
came up in our research um about things

00:48:56 --> 00:49:02
at OpenAI that have not changed through

00:48:58 --> 00:49:03
a lot of the change is the is the trust

00:49:01 --> 00:49:06
hat the two of you guys have in each

00:49:02 --> 00:49:07
other cuz uh that I think there was an

00:49:05 --> 00:49:09
article or profile of you guys recently

00:49:06 --> 00:49:11
in the MIT tech review and that was also

00:49:08 --> 00:49:12
ne of the highlight themes that your

00:49:10 --> 00:49:14
chemistry, your trust with each other,

00:49:11 --> 00:49:18
your repo is something a lot of the

00:49:13 --> 00:49:21
people um at OpenAI have come to um

00:49:17 --> 00:49:22
treat as a as a constant. So what's the

00:49:20 --> 00:49:27
backstory? How did you guys build trust

00:49:21 --> 00:49:27
here? How did that How did that happen?

00:49:27 --> 00:49:30
It's

00:49:27 --> 00:49:35
>> like asking you to to Have you ever seen

00:49:29 --> 00:49:36
that um um when Harry met Sally?

00:49:34 --> 00:49:39
>> I feel like you're on the couch and now

00:49:35 --> 00:49:41
you got to Yeah, exactly.

00:49:38 --> 00:49:43
>> Well, I I do think you know we we

00:49:40 --> 00:49:47
started working together a little bit

00:49:42 --> 00:49:50
more closely um when we kind of had the

00:49:46 --> 00:49:53
first seeds of working on reasoning. Um

00:49:49 --> 00:49:55
I think you know we at the time you know

00:49:52 --> 00:49:57
that wasn't a very popular research

00:49:54 --> 00:49:59
direction to work on and I think uh both

00:49:56 --> 00:50:02
of us kind of saw glimmers of hope there

00:49:58 --> 00:50:03
and um you know we were kind of pushing

00:50:01 --> 00:50:05
in

00:50:02 --> 00:50:09
um in this direction kind of figuring

00:50:04 --> 00:50:11
out how to make our work and um yeah I

00:50:08 --> 00:50:13
think over time kind of growing a very

00:50:10 --> 00:50:18
small effort into increasing larger

00:50:12 --> 00:50:19
effort and um and I think that's kind of

00:50:17 --> 00:50:22
where I

00:50:18 --> 00:50:25
um yeah really got to kind of work with

00:50:21 --> 00:50:27
Jakob in depth. I think um I he he's

00:50:24 --> 00:50:29
just really a phenomenal researcher. I

00:50:26 --> 00:50:31
think you know um any of these Franklist

00:50:28 --> 00:50:33
like he should be number one. Um like

00:50:30 --> 00:50:36
just his ability to you know take any

00:50:32 --> 00:50:39
very difficult technical challenge and

00:50:35 --> 00:50:41
almost like personally just kind of

00:50:38 --> 00:50:44
think about it for two weeks and and

00:50:40 --> 00:50:47
just crush it. Um uh it's incredible

00:50:43 --> 00:50:49
that he has kind of the the wide range

00:50:46 --> 00:50:51
that he does in terms of understanding

00:50:48 --> 00:50:53
as well as that kind of depth that you

00:50:50 --> 00:50:56
can go and just personally solve a lot

00:50:52 --> 00:50:57
of these technical challenges.

00:50:55 --> 00:50:58
>> Now you get to say some nice stuff about

00:50:56 --> 00:50:58
him.

00:50:57 --> 00:51:00
>> You don't have to say anything nice

00:50:58 --> 00:51:03
about me.

00:50:59 --> 00:51:06
>> Thanks Mark. Uh yeah. Yeah. I I think I

00:51:02 --> 00:51:07
think the big kind of the first like big

00:51:05 --> 00:51:11
thing that we did did together was like

00:51:06 --> 00:51:12
we started um seeing like okay like we

00:51:10 --> 00:51:15
think this algorithm is going to work

00:51:11 --> 00:51:17
and so um you know I was thinking like

00:51:14 --> 00:51:18
okay like how do we you know direct

00:51:16 --> 00:51:20
people at this and we're talking with

00:51:17 --> 00:51:21
Mark like oh we should establish a team

00:51:19 --> 00:51:22
that's actually going to make this work

00:51:20 --> 00:51:24
and then you know Mark and Mark went and

00:51:22 --> 00:51:26
actually did this right like actually

00:51:23 --> 00:51:27
kind of like got a group of like people

00:51:25 --> 00:51:30
working on very different things like

00:51:26 --> 00:51:32
got them all together and created a team

00:51:29 --> 00:51:33
with like incredible chemistry out of

00:51:31 --> 00:51:35
like this hold this third group and that

00:51:32 --> 00:51:40
was like such an impressive thing to me.

00:51:34 --> 00:51:42
Um, and uh yeah, I'm I'm uh I'm really

00:51:39 --> 00:51:44
grateful and inspired to like kind of

00:51:41 --> 00:51:47
get to, you know, work with Mark and

00:51:43 --> 00:51:50
kind of experience that. Um uh yeah, I

00:51:46 --> 00:51:53
think uh this incredible capacity to

00:51:49 --> 00:51:55
both, you know, understand and engage

00:51:52 --> 00:51:57
and and and and you know, think about

00:51:54 --> 00:51:59
he the technical matter of the research

00:51:56 --> 00:52:02
itself. Uh but then coupled with this

00:51:58 --> 00:52:04
like great ability to um lead and

00:52:01 --> 00:52:06
inspire teams and create an

00:52:03 --> 00:52:07
organizational structure that you know

00:52:05 --> 00:52:09
in this whole kind of mess of chaotic

00:52:06 --> 00:52:12
directions actually like like is

00:52:08 --> 00:52:16
coherent and and and able to gel

00:52:11 --> 00:52:16
together. Uh yeah very very inspiring.

00:52:15 --> 00:52:18
>> It's awesome.

00:52:15 --> 00:52:20
>> Well on that note um

00:52:17 --> 00:52:23
>> great note nod. Yeah, this look some

00:52:19 --> 00:52:24
of the greatest discoveries in

00:52:22 --> 00:52:27
science, especially in physics, have

00:52:23 --> 00:52:29
often come from a pair of collaborators,

00:52:26 --> 00:52:31
often across universities, across

00:52:28 --> 00:52:33
fields. And it seems like you guys have

00:52:30 --> 00:52:35
now added to that tradition. And

00:52:32 --> 00:52:37
so, we're just super grateful that you

00:52:34 --> 00:52:38
guys made the time to chat today. Thanks

00:52:36 --> 00:52:38
for coming by.

00:52:37 --> 00:52:42
>> Thank you.

00:52:37 --> 00:52:42
>> Thanks for being with us.

00:52:42 --> 00:52:46
Heat. Hey, Heat.

00:52:47 --> 00:53:04
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
