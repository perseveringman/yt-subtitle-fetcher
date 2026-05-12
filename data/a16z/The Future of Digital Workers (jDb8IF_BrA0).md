---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "jDb8IF_BrA0"
title: "The Future of Digital Workers"
video_url: "https://www.youtube.com/watch?v=jDb8IF_BrA0"
thumbnail_url: "https://i.ytimg.com/vi/jDb8IF_BrA0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=jDb8IF_BrA0"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-03-20T17:01:01.000Z"
upload_date: "2025-03-20"
duration_seconds: 1558
duration_human: "25:58"
view_count: 6564
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:56:03.131Z"
---

# The Future of Digital Workers

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=jDb8IF_BrA0
- video_id: jDb8IF_BrA0
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-03-20T17:01:01.000Z
- upload_date: 2025-03-20
- duration: 25:58
- view_count: 6564
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

In this episode of AI + a16z, a16z Partner Joe Schmidt sits down with 11x CTO Prabhav Jain for an inside look at how AI-powered digital workers are reshaping sales and revenue operations. They discuss the evolution of agentic AI, the trade-offs between orchestration and autonomy, and the technical innovations driving 11x’s products, Alice and Mike.

Prabhav breaks down the challenges of real-time voice AI, the complexities of multimodal agent interactions, and why the future of enterprise AI is about delivering measurable customer outcomes—not just automation. They also dive into the fast-moving landscape of model providers, the impact of open-source AI, and how startups can stay ahead in an environment of constant technological change.

Plus, they explore 11x’s bold decision to re-architect its platform from the ground up, the lessons learned from scaling AI-powered sales automation, and what it takes to build truly effective digital workers.

Key Takeaways:
- The difference between true AI agents and complex orchestrations—and why it matters.
- How 11x built Alice and Mike to deliver human-like sales performance at scale.
- The cutting-edge advancements shaping AI voice assistants and real-time multimodal interactions.
- Lessons from rebuilding an AI platform while supporting a fast-growing customer base.
- How AI startups can balance rapid iteration with long-term strategic bets.
- For anyone interested in AI-powered automation, enterprise sales, or the future of digital work, this episode offers a front-row seat to the latest innovations pushing the boundaries of AI agents.

Learn more:

11x - https://www.11x.ai/

Follow everybody on X:

Prabhav Jain - https://x.com/prabhavjain

Joe Schmidt - https://x.com/joeschmidtiv?lang=en

Check out everything a16z is doing with artificial intelligence, including articles, projects, and more podcasts, here: https://a16z.com/ai/

Chapters:
0:00 - 00:14   | Intro
00:15 - 01:26 | 11x CTO Prabhav Jain Describes What  AI Agentic Products Mean To Him
01:27 - 02:12 | Are AI Agentics More Effective Than Humans?
02:13 - 04:17 | 11x And What Products They’re Building Today
04:18 - 05:15| Where Do These Products Live?
05:16 - 08:13 | Market Evolutions, And The Decisions 11x Has Made Over The Last Year 
08:14 - 11:01 | Product Rebuilds To Scale And The Challenges
11:02 - 12:40 | Architecting And Testing When Building New Products
12:41 - 13:50 | Performance And Data Determines Customer Outcome
13:51 - 16:46 | Staying On The Cutting Edge 
16:47 - 17:56 | Building For Scale VS New Tools
17:57 - 19:08 | Solving Customer Pain Points And Feature Requests
19:09 - 20:29 | Multi Product Strategy And Validating PMF
20:30 - 21:14 | What He Would Have Changed When Determining PMF
21:15 - 23:37 | Design Decisions and The User Journey
23:38 - 25:49 | Hiring And Talent

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
as a company been really really obsessed

00:00:02 --> 00:00:06
with customer outcomes so if I can do

00:00:04 --> 00:00:08
something without using agents I will

00:00:05 --> 00:00:09
ultimately all that matters is is are

00:00:07 --> 00:00:12
our customers getting the results that

00:00:08 --> 00:00:12
hey're hiring our digital workers

00:00:14 --> 00:00:19
for for Bob thanks for being here man

00:00:16 --> 00:00:21
thank you for inviting me yeah all right

00:00:18 --> 00:00:23
so maybe we'll start this with with

00:00:20 --> 00:00:25
maybe a high level question a lot of

00:00:22 --> 00:00:26
people talk about agentic experiences

00:00:24 --> 00:00:27
today you know it's really good

00:00:25 --> 00:00:29
marketing but maybe I'd like to just

00:00:26 --> 00:00:31
ake a step back and start by asking

00:00:28 --> 00:00:33
what is an agentic product mean to you

00:00:30 --> 00:00:35
totally totally this is a great question

00:00:32 --> 00:00:36
I think the term agents and sort of

00:00:34 --> 00:00:39
agentic experience is thrown around a

00:00:35 --> 00:00:40
ton if you're using llms at any level

00:00:38 --> 00:00:42
you're now an agent company which means

00:00:39 --> 00:00:43
like every company out there is an agent

00:00:41 --> 00:00:47
company but you know for us like agents

00:00:42 --> 00:00:49
really have to plan reason reflect think

00:00:46 --> 00:00:50
get better over time like to me that the

00:00:48 --> 00:00:52
definition of a true agent and and you

00:00:49 --> 00:00:54
know the the agent problems that really

00:00:51 --> 00:00:55
sort of interest me are the ones where

00:00:53 --> 00:00:57
the answer like isn't clear like there

00:00:54 --> 00:00:58
isn't a right answer even a human

00:00:56 --> 00:01:00
wouldn't have the right answer like what

00:00:57 --> 00:01:02
makes a piece of writing good right

00:00:59 --> 00:01:04
hat's really hard to quantify that's

00:01:01 --> 00:01:05
what really excites me about agents the

00:01:03 --> 00:01:07
user interface and the user experience

00:01:04 --> 00:01:09
really really matters over the last 25

00:01:06 --> 00:01:11
years we have been trained to understand

00:01:08 --> 00:01:13
like web and mobile interfaces and now

00:01:10 --> 00:01:16
you have these agents coming up which

00:01:12 --> 00:01:17
aren't like deterministic they change

00:01:15 --> 00:01:19
what they output every time you sort of

00:01:16 --> 00:01:20
call them and that's like a very new

00:01:18 --> 00:01:22
thing that we have to kind of train and

00:01:19 --> 00:01:23
explain to to perspective customers that

00:01:21 --> 00:01:25
like hey this thing doesn't quite always

00:01:22 --> 00:01:26
work the same way um so it's like a

00:01:24 --> 00:01:27
really interesting concept that's come

00:01:25 --> 00:01:29
up with with agents now yeah it's

00:01:26 --> 00:01:32
interesting like not always working the

00:01:28 --> 00:01:34
same way I guess the the thing that I'm

00:01:31 --> 00:01:36
always tied to is like what what is

00:01:34 --> 00:01:38
Effectiveness and so how do how do you

00:01:35 --> 00:01:40
think about these agentic products that

00:01:38 --> 00:01:43
you're building or maybe you've seen are

00:01:39 --> 00:01:44
they more effective than humans or is it

00:01:42 --> 00:01:45
really just like hey is this

00:01:43 --> 00:01:46
orchestration and we're just making

00:01:44 --> 00:01:48
rules and trying to build different

00:01:46 --> 00:01:50
experiences you know what I've seen is

00:01:47 --> 00:01:51
that especially in like code generation

00:01:49 --> 00:01:53
I I sort of count that as like true

00:01:50 --> 00:01:54
agenta companies because not only can

00:01:52 --> 00:01:56
they like generate code like you know

00:01:54 --> 00:01:58
plan what they're gonna write G the code

00:01:56 --> 00:02:00
then run it see errors that come up and

00:01:57 --> 00:02:02
then keep going keep going right and I

00:01:59 --> 00:02:04
think that part of the ecosystem is

00:02:01 --> 00:02:06
quite mature now I think for like B2B

00:02:03 --> 00:02:08
like verticalized agentic applications

00:02:05 --> 00:02:09
it's quite a bit more complex right

00:02:07 --> 00:02:12
again you can like run ceny for it like

00:02:08 --> 00:02:13
runs right uh but for for for these

00:02:11 --> 00:02:14
applications they're they're much more

00:02:12 --> 00:02:16
complex maybe say a little bit more

00:02:13 --> 00:02:18
about that what makes these B2B

00:02:15 --> 00:02:20
applications more complicated and harder

00:02:17 --> 00:02:21
to solve for there's a lot of people

00:02:19 --> 00:02:23
involved right so for us for example you

00:02:20 --> 00:02:25
know we s to go to market teams what

00:02:22 --> 00:02:26
makes good content what makes the the

00:02:24 --> 00:02:29
lead that you're reaching out to like a

00:02:25 --> 00:02:31
true ICP lead for you again just kind of

00:02:28 --> 00:02:32
subjective yeah um and so I think that's

00:02:30 --> 00:02:33
what makes it trickier whereas you know

00:02:31 --> 00:02:35
for a piece of Coda kind of runs and

00:02:32 --> 00:02:37
oes what you tell it to do makes a lot

00:02:34 --> 00:02:39
of sense and I think this might be a

00:02:36 --> 00:02:41
good time to segue into talking a little

00:02:38 --> 00:02:42
bit more about like the Lex's products

00:02:40 --> 00:02:44
because that might give us a backdrop to

00:02:41 --> 00:02:46
talk about more of these uh these

00:02:43 --> 00:02:48
xperiences so maybe give us a little

00:02:45 --> 00:02:50
bit of a sense of what 11x is built

00:02:47 --> 00:02:52
oday so you know 11x we're really

00:02:49 --> 00:02:54
building digital workers for for for

00:02:51 --> 00:02:55
Revenue teams and we we like to think

00:02:53 --> 00:02:57
that our digital workers deliver human

00:02:54 --> 00:02:59
results and so you know with our sales

00:02:56 --> 00:03:00
revops marketing we kind of want to

00:02:58 --> 00:03:01
focus on these as as as our main

00:02:59 --> 00:03:02
customers

00:03:00 --> 00:03:04
we have two products in the market today

00:03:01 --> 00:03:06
which is pretty rare for a company of of

00:03:03 --> 00:03:08
a far like I guess earliness to have two

00:03:05 --> 00:03:10
products but our first product is called

00:03:07 --> 00:03:12
Alice Alice is our AIS SDR you know she

00:03:09 --> 00:03:14
can engage prospects across multiple

00:03:11 --> 00:03:16
channels um she can drive qualified

00:03:13 --> 00:03:18
meetings she can drive Pipeline and

00:03:15 --> 00:03:20
Alice does this today by working with

00:03:17 --> 00:03:22
data that's in like first party data

00:03:19 --> 00:03:24
that's in your CRM Alice can leverage

00:03:21 --> 00:03:26
our extensive data warehouse of third

00:03:23 --> 00:03:28
party data Alice can Target visit

00:03:25 --> 00:03:30
ors coming to your website and so

00:03:27 --> 00:03:32
the goal here is to make it dead simple

00:03:29 --> 00:03:33
for go to market teams to run these like

00:03:31 --> 00:03:35
campaigns on autopilot and under the

00:03:32 --> 00:03:37
hood there's a lot of complexity we're

00:03:34 --> 00:03:38
kind of abstracting away from from the

00:03:36 --> 00:03:40
End customer you know how do you find

00:03:37 --> 00:03:42
the right lead how do you do extensive

00:03:39 --> 00:03:44
deep research on both the lead and the

00:03:41 --> 00:03:45
company they're at how do you scale the

00:03:43 --> 00:03:46
actual Outreach across a bunch of

00:03:44 --> 00:03:48
channels how do you make it super

00:03:46 --> 00:03:50
sonalized how do you make sure it

00:03:47 --> 00:03:51
converts and to our customers they don't

00:03:49 --> 00:03:52
see any of that complexity right because

00:03:50 --> 00:03:53
that's kind of our job when we're

00:03:51 --> 00:03:56
building these companies when building

00:03:53 --> 00:03:57
this agent company Mike is our second

00:03:55 --> 00:03:59
product it's doing a lot of the same

00:03:56 --> 00:04:00
things that Alice is doing but through

00:03:58 --> 00:04:03
the channel of voice so it's our voice

00:03:59 --> 00:04:05
agent you know we've focused Mike um and

00:04:02 --> 00:04:07
esigned it for sort of inbound and

00:04:04 --> 00:04:08
consented outbound use cases you know

00:04:06 --> 00:04:11
Mike can operate across a bunch of

00:04:07 --> 00:04:13
languages 247 um it integrates deeply

00:04:10 --> 00:04:15
with our customers workflow so with

00:04:12 --> 00:04:16
eir CRM with with their calendaring

00:04:14 --> 00:04:18
software and it's really designed to

00:04:15 --> 00:04:20
superpower and supercharge their teams

00:04:17 --> 00:04:21
and if we just step back to that first

00:04:19 --> 00:04:24
question for a second and think about a

00:04:20 --> 00:04:26
spectrum of fully agentic to fully

00:04:23 --> 00:04:29
orchestrated and and maybe rules based

00:04:25 --> 00:04:30
is maybe the opposite of of tic like

00:04:28 --> 00:04:32
where do these products live today and

00:04:29 --> 00:04:34
how do you think about where those

00:04:31 --> 00:04:36
products should be yes you know I think

00:04:33 --> 00:04:38
as a company we're really really

00:04:35 --> 00:04:40
obsessed with customer outcomes so if I

00:04:37 --> 00:04:41
can do something without using agents I

00:04:39 --> 00:04:43
will yeah right ultimately all that

00:04:40 --> 00:04:44
matters is is are our customers getting

00:04:42 --> 00:04:46
the results that they're hiring our

00:04:43 --> 00:04:47
digital workers for and so what we tend

00:04:45 --> 00:04:49
to do is we tend to break down our

00:04:46 --> 00:04:51
agents into a set of tasks somebody's

00:04:48 --> 00:04:52
tasks are agentic somebody's tasks are

00:04:50 --> 00:04:54
not agentic the key metric we always

00:04:51 --> 00:04:56
look at is like for this tasks what is

00:04:53 --> 00:04:57
the best technology that's going to get

00:04:55 --> 00:05:00
he best outcomes and so we're like sort

00:04:56 --> 00:05:02
of very uh purist about that um and so

00:04:59 --> 00:05:03
you know if you look at sort of our our

00:05:01 --> 00:05:05
agents you know some part is just a

00:05:02 --> 00:05:06
complex orchestration which is you know

00:05:04 --> 00:05:07
a complex problem in itself the other

00:05:05 --> 00:05:09
parts are actually agentic so for

00:05:06 --> 00:05:11
example when be like write content

00:05:08 --> 00:05:13
hat's a gentic right when we do deep

00:05:10 --> 00:05:14
research that's a gentic but when we are

00:05:12 --> 00:05:17
you know sending out an email on behalf

00:05:14 --> 00:05:20
of a customer just normal stuff do do

00:05:16 --> 00:05:21
what works do what works exactly no if

00:05:19 --> 00:05:24
you think about like the market things

00:05:20 --> 00:05:26
have changed so fast over the last 12

00:05:23 --> 00:05:29
months maybe walk us through the

00:05:26 --> 00:05:31
volution of you your two products in

00:05:28 --> 00:05:33
the 11x platform over that time period

00:05:30 --> 00:05:35
and the decisions that you've made to to

00:05:32 --> 00:05:37
come from there to now y totally you

00:05:34 --> 00:05:39
know in 2022 like GPD kind of took the

00:05:36 --> 00:05:40
World by storm it's like wow this thing

00:05:38 --> 00:05:42
can actually produce some pretty cool

00:05:39 --> 00:05:44
stuff our main use case at the time was

00:05:41 --> 00:05:45
like hey can we help our customer

00:05:43 --> 00:05:47
generate these emails generate this

00:05:44 --> 00:05:49
content and you we using basic prompting

00:05:46 --> 00:05:50
just like s of every company out there

00:05:48 --> 00:05:52
in the last I would say like eight

00:05:49 --> 00:05:54
months like the world has completely

00:05:51 --> 00:05:57
changed now you have like agents agent

00:05:53 --> 00:06:00
Frameworks like monitoring evaluation

00:05:56 --> 00:06:02
like multimodal models um reasoning

00:05:59 --> 00:06:03
models like basically the entire game

00:06:01 --> 00:06:05
has changed I wouldn't say that took us

00:06:02 --> 00:06:06
by surprise but like just how quickly we

00:06:04 --> 00:06:08
had to move to keep up with the with the

00:06:05 --> 00:06:10
Innovation was was something that's a

00:06:07 --> 00:06:11
bit surprising ultimately like we're

00:06:09 --> 00:06:12
like like I mentioned we're very

00:06:10 --> 00:06:14
customer oriented so we're like okay

00:06:11 --> 00:06:15
these like three new models came out

00:06:13 --> 00:06:16
his week we have to ship all these

00:06:14 --> 00:06:17
other features like how do we balance

00:06:15 --> 00:06:19
both um and that was that was a tough

00:06:17 --> 00:06:20
problem because maybe the one of the

00:06:18 --> 00:06:23
models that came out was like going to

00:06:19 --> 00:06:24
increase Roi by 20% and then it's

00:06:22 --> 00:06:26
important for us to sort of test that so

00:06:23 --> 00:06:27
we had to get into this muscle of like

00:06:25 --> 00:06:29
very quickly testing things while also

00:06:26 --> 00:06:31
keeping you know our our goals are

00:06:28 --> 00:06:33
focused on Northstar for our customers

00:06:30 --> 00:06:34
which is outcomes for our second product

00:06:32 --> 00:06:36
it's a voice based product that I would

00:06:33 --> 00:06:38
say in the last six months we've seen

00:06:35 --> 00:06:40
the most development in right it's a

00:06:37 --> 00:06:42
completely new set of challenges right

00:06:39 --> 00:06:43
like how do you how do you handle

00:06:41 --> 00:06:45
background noise how do you handle

00:06:42 --> 00:06:47
turn-taking how do you handle latency

00:06:44 --> 00:06:48
how do you make the speech sound natural

00:06:46 --> 00:06:49
there's all these things that we do as

00:06:47 --> 00:06:51
humans that's actually quite hard for

00:06:49 --> 00:06:52
sort of agents to understand I mean even

00:06:50 --> 00:06:54
something as simple as talking through

00:06:51 --> 00:06:55
like your airpods uh the speech that you

00:06:53 --> 00:06:57
actually get back on side is very

00:06:54 --> 00:06:58
different from if feel like just pick up

00:06:56 --> 00:06:59
your opponent and talk to it right and

00:06:57 --> 00:07:00
so there's all these things that you

00:06:58 --> 00:07:02
know we had quite anticip until we

00:07:00 --> 00:07:04
started building sort of our voice

00:07:01 --> 00:07:05
agents and I was in the very early days

00:07:03 --> 00:07:07
people were like okay I want to build a

00:07:05 --> 00:07:09
voice agent I'm going to start off with

00:07:06 --> 00:07:10
something that takes speech and converts

00:07:08 --> 00:07:12
to text right I'm going to take that

00:07:09 --> 00:07:15
ext and like throw it into like GPT 40

00:07:12 --> 00:07:16
or like a llama model or a cloud model

00:07:14 --> 00:07:18
right or and then at the end of it I'm

00:07:15 --> 00:07:20
going to take the text I get out and put

00:07:17 --> 00:07:21
it through some speech synthesis and

00:07:19 --> 00:07:22
that was kind of like what everyone was

00:07:20 --> 00:07:25
trying to clobber together trying to

00:07:22 --> 00:07:26
juice you know 100 millisecs of latency

00:07:24 --> 00:07:28
here 100 Mills of latency here try to

00:07:25 --> 00:07:29
make the experience Supernatural and I

00:07:27 --> 00:07:30
would say it would have last probably

00:07:28 --> 00:07:33
like two months we've seen a lot of

00:07:29 --> 00:07:35
advancements in voice to voice models or

00:07:32 --> 00:07:38
models that do both the uh speech to

00:07:34 --> 00:07:40
text and inference within the same model

00:07:37 --> 00:07:41
within the same box uh to make it much

00:07:39 --> 00:07:42
more natural and so I think like

00:07:40 --> 00:07:44
we're kind of pushing the Forefront of

00:07:41 --> 00:07:45
this right now with our agents and one

00:07:43 --> 00:07:47
thing we've noticed is that for the

00:07:44 --> 00:07:49
agents that we sell uh that that we're

00:07:46 --> 00:07:51
sort of selling for our customers you

00:07:48 --> 00:07:53
have to get three things right one it

00:07:50 --> 00:07:54
has to be intelligent right so if the

00:07:52 --> 00:07:56
nd user says something this agent has

00:07:54 --> 00:07:58
to be able to think on its feet two it

00:07:55 --> 00:08:00
has to the speech has to sound natural

00:07:57 --> 00:08:02
yeah right and three it has to be quite

00:07:59 --> 00:08:03
accurate and one thing we've seen uh is

00:08:01 --> 00:08:04
that for most companies building voice

00:08:03 --> 00:08:06
agents they probably have to get like

00:08:03 --> 00:08:08
two or or one of these three things

00:08:05 --> 00:08:09
right we have to get all three right

00:08:07 --> 00:08:12
um so it's a it's more of a you Pi

00:08:08 --> 00:08:13
heart problem exactly exactly but the

00:08:11 --> 00:08:14
good thing is there's like no one's

00:08:12 --> 00:08:17
really competing in the space which is

00:08:13 --> 00:08:19
no totally and if I think about the you

00:08:16 --> 00:08:20
know the decisions and the platform

00:08:18 --> 00:08:22
shift that you guys have actually gone

00:08:19 --> 00:08:25
through to take advantage of a lot of

00:08:21 --> 00:08:27
this Innovation it's been a total

00:08:24 --> 00:08:30
Whirlwind right I mean I think you guys

00:08:26 --> 00:08:32
basically fully rearchitecturing

00:08:29 --> 00:08:34
talk through a little bit about that

00:08:31 --> 00:08:35
decision to do the rebuild on initially

00:08:33 --> 00:08:38
the Alice product and even on the Mike

00:08:34 --> 00:08:40
product you know why did you decide to

00:08:37 --> 00:08:41
do that and then talk us a little bit

00:08:39 --> 00:08:44
about how you structured the team and

00:08:40 --> 00:08:46
actually made this happen while also

00:08:43 --> 00:08:48
scaling really fast totally I mean this

00:08:45 --> 00:08:50
was this was hard I won't lie this was

00:08:47 --> 00:08:52
really really hard but ultimately you

00:08:49 --> 00:08:53
know we realized that the new

00:08:51 --> 00:08:55
advancements had come out would provide

00:08:52 --> 00:08:57
so much more value to customers and if

00:08:54 --> 00:08:58
we all start from like what do we what

00:08:56 --> 00:09:00
can we do to deliver more outcomes for

00:08:57 --> 00:09:02
our customers like that is sort of our

00:08:59 --> 00:09:03
nor star and like I said we re

00:09:01 --> 00:09:06
architected our entire product to be

00:09:02 --> 00:09:07
super agentic and you know we kind of

00:09:05 --> 00:09:08
had this thought exercise where we were

00:09:06 --> 00:09:11
like okay let's take our existing

00:09:07 --> 00:09:12
platform let's project out couple months

00:09:10 --> 00:09:14
would that deliver more results or

00:09:11 --> 00:09:15
complete rebuilding and project that out

00:09:13 --> 00:09:16
hree months right and it was quite

00:09:14 --> 00:09:19
clear to us that would be a second

00:09:15 --> 00:09:20
approach but at the same time you have

00:09:18 --> 00:09:22
tons of customers on the first product

00:09:19 --> 00:09:24
who are actively using it and you're

00:09:21 --> 00:09:26
trying to rebuild get parody re

00:09:23 --> 00:09:28
architect and migrate uh it's quite

00:09:25 --> 00:09:30
hard and so what we ended up doing

00:09:27 --> 00:09:32
was you know we had the major of our

00:09:29 --> 00:09:33
team working on the new product and some

00:09:31 --> 00:09:35
small percentage of our team kind of

00:09:32 --> 00:09:36
like making sure the old product is

00:09:34 --> 00:09:38
working you know life support handling

00:09:35 --> 00:09:40
customer issues trying not to build new

00:09:37 --> 00:09:41
features right because we' rather build

00:09:39 --> 00:09:44
into a new product I would say that's a

00:09:41 --> 00:09:46
quite painful couple months but you know

00:09:43 --> 00:09:48
huge kudos to LX team like they sprinted

00:09:45 --> 00:09:49
yeah right and we got this out very very

00:09:47 --> 00:09:51
quickly I think faster most people

00:09:48 --> 00:09:53
thought was like humanly possible and so

00:09:50 --> 00:09:55
that was that was super exciting for us

00:09:52 --> 00:09:57
and I think that those tradeoffs are are

00:09:55 --> 00:09:59
like really interesting to think about

00:09:56 --> 00:10:01
like okay there's this product that you

00:09:58 --> 00:10:02
spend all this time on that has all

00:10:00 --> 00:10:04
these you know wonderful little features

00:10:01 --> 00:10:05
for whatever customer set and then

00:10:03 --> 00:10:07
there's this new thing that you're

00:10:04 --> 00:10:10
trying to build which will be better and

00:10:06 --> 00:10:12
so how did you think about like how to

00:10:09 --> 00:10:14
balance those trade-offs and and even

00:10:11 --> 00:10:16
when to actually rip the Band-Aid and

00:10:13 --> 00:10:18
rebuild like how did you think about

00:10:15 --> 00:10:19
hose those decisions you know it was

00:10:17 --> 00:10:21
really interesting like very early on

00:10:18 --> 00:10:23
when we were rebuilding the sort the

00:10:20 --> 00:10:25
that new product um we like created this

00:10:22 --> 00:10:25
prototype right and then we showed it

00:10:24 --> 00:10:27
internally we showed it to some

00:10:24 --> 00:10:28
perspective customers and we were like

00:10:26 --> 00:10:29
had so much confidence that this is

00:10:27 --> 00:10:31
going to be right you know for the first

00:10:28 --> 00:10:32
couple of months were there going to be

00:10:30 --> 00:10:33
a lot of bugs of course where there

00:10:31 --> 00:10:35
going to be a lot of issues of course

00:10:32 --> 00:10:37
but we knew that once we got past that

00:10:34 --> 00:10:38
hump um that this new product would

00:10:36 --> 00:10:40
generate a lot more value for our

00:10:37 --> 00:10:41
customers it's really interesting you

00:10:39 --> 00:10:43
one of the things that Viv started doing

00:10:40 --> 00:10:44
as a business which no one in our space

00:10:42 --> 00:10:45
does is uh you know during the sales

00:10:43 --> 00:10:48
process we actually give our new product

00:10:44 --> 00:10:49
away like for free for them to use we're

00:10:47 --> 00:10:51
like hey we believe so much in our

00:10:48 --> 00:10:52
product like here you go yeah right and

00:10:50 --> 00:10:53
no one else is doing that because most

00:10:51 --> 00:10:55
of their products out there require a

00:10:52 --> 00:10:57
lot of human support to actually get

00:10:54 --> 00:10:59
folks set up but with this new product

00:10:56 --> 00:11:00
we're like boom here's your log go for

00:10:58 --> 00:11:02
it um and so that also gives a lot of

00:10:59 --> 00:11:04
confidence of sort of moving in the

00:11:01 --> 00:11:05
right direction I love that and we

00:11:03 --> 00:11:06
talked a little bit about that we've

00:11:04 --> 00:11:08
touched on this rather of all the

00:11:05 --> 00:11:09
changes you mentioned how many different

00:11:07 --> 00:11:12
model providers there's the Deep seek

00:11:09 --> 00:11:14
news you know a month ago how do you

00:11:11 --> 00:11:16
think about like testing and integrating

00:11:13 --> 00:11:18
as like as a part of this and you know

00:11:15 --> 00:11:20
different providers get better or worse

00:11:17 --> 00:11:21
depending on new releases and there's

00:11:19 --> 00:11:23
new new models that are coming out it

00:11:20 --> 00:11:24
feels like every month how do you think

00:11:22 --> 00:11:26
about architecting the experience and

00:11:23 --> 00:11:28
then basically testing and like what

00:11:25 --> 00:11:29
you're doing on a day-to-day basis to

00:11:27 --> 00:11:31
understand how to build the r product

00:11:28 --> 00:11:33
you know I think the way we think about

00:11:30 --> 00:11:35
our agents is our agents perform a set

00:11:32 --> 00:11:36
of tasks some models are optimized for

00:11:34 --> 00:11:37
some tasks some models are not sometimes

00:11:35 --> 00:11:39
it's not even agentic for one of those

00:11:36 --> 00:11:41
tasks and I think we're sort of like you

00:11:38 --> 00:11:43
know we don't have any like sacred cows

00:11:40 --> 00:11:45
internally so we're sort of very open to

00:11:42 --> 00:11:46
trying out whatever is there that will

00:11:44 --> 00:11:47
be the most effective at that specific

00:11:45 --> 00:11:49
task and that's what our customers are

00:11:46 --> 00:11:50
counting on us for right they want us to

00:11:48 --> 00:11:52
build the best agents that kind of

00:11:49 --> 00:11:54
achieve these outcomes and so you know

00:11:51 --> 00:11:55
hether it's like writing content or

00:11:53 --> 00:11:57
like tool calling or instruction

00:11:54 --> 00:11:59
following each of these tasks are are

00:11:56 --> 00:12:01
quite different per model and we' tried

00:11:58 --> 00:12:03
everything out there right and we and

00:12:00 --> 00:12:06
and because we tried everything we

00:12:02 --> 00:12:07
sort of designed our our our Tech stack

00:12:05 --> 00:12:10
to make it's really easy for us to swap

00:12:06 --> 00:12:11
in up models um but when you're swapping

00:12:09 --> 00:12:12
models like all the time the things that

00:12:10 --> 00:12:14
you have to really get right is like if

00:12:11 --> 00:12:16
you swap a model is it actually better

00:12:13 --> 00:12:17
at scale you can't just like run a few

00:12:15 --> 00:12:19
example like oh looks good let's like

00:12:16 --> 00:12:20
roll it out for everyone right which in

00:12:18 --> 00:12:22
some tasks it's easy because there's an

00:12:19 --> 00:12:24
objective answer yeah in other tasks

00:12:21 --> 00:12:25
like if I show you an email and say hey

00:12:23 --> 00:12:26
this is Jo what do you think is it's

00:12:24 --> 00:12:28
good you might say it's great I might

00:12:25 --> 00:12:30
say it's really bad right it's so

00:12:27 --> 00:12:31
dependent on the use case and that is a

00:12:29 --> 00:12:32
challenge that many people in the

00:12:30 --> 00:12:35
industry face like if there is no

00:12:31 --> 00:12:37
subjective answer how do you know if

00:12:34 --> 00:12:38
it's good um and so that's where we have

00:12:36 --> 00:12:39
to have a bit of human in the loop like

00:12:37 --> 00:12:40
you know talk to our customers and make

00:12:38 --> 00:12:42
sure for their use cases is actually

00:12:39 --> 00:12:44
good yeah and on that use case

00:12:41 --> 00:12:46
Point that's kind of interesting because

00:12:43 --> 00:12:47
you have so many different customers on

00:12:45 --> 00:12:48
you know I don't know how many customers

00:12:46 --> 00:12:50
we have at this point they're using it

00:12:47 --> 00:12:52
in so many different ways like on those

00:12:49 --> 00:12:54
subjective questions like is there a

00:12:51 --> 00:12:56
process that you maybe you've built to

00:12:53 --> 00:12:58
try to think about like is this good is

00:12:55 --> 00:13:00
this you know is this better or worse

00:12:57 --> 00:13:02
rather yeah you know one thing we always

00:12:59 --> 00:13:03
try to convince our customers is you

00:13:01 --> 00:13:05
know what they might consider good might

00:13:02 --> 00:13:06
not actually perform the best and so we

00:13:04 --> 00:13:08
always try to convince our customers

00:13:05 --> 00:13:09
like hey let us run this on autop palot

00:13:07 --> 00:13:11
for a bit just so you get some data

00:13:08 --> 00:13:12
because often times you know we we we

00:13:10 --> 00:13:14
would see some customers trying to take

00:13:11 --> 00:13:16
our system and make it right the exact

00:13:13 --> 00:13:17
same thing that their scr is for at that

00:13:15 --> 00:13:19
point you should just use your use your

00:13:16 --> 00:13:20
SC like why use your product right and

00:13:18 --> 00:13:22
often times it's things that are

00:13:19 --> 00:13:24
unintuitive that work really well and so

00:13:21 --> 00:13:25
for us we have so much data on what

00:13:23 --> 00:13:27
performs across different segments you

00:13:24 --> 00:13:28
know whether the email's Open click you

00:13:26 --> 00:13:29
know where someone's replies whether

00:13:27 --> 00:13:31
that results in a booked meeting maybe

00:13:28 --> 00:13:32
we send an email the person visits your

00:13:30 --> 00:13:34
website then to sign up for a demo like

00:13:31 --> 00:13:35
we have data on all of these things yeah

00:13:33 --> 00:13:37
right and so now we can like sort

00:13:34 --> 00:13:39
leverage that rich data back and be like

00:13:36 --> 00:13:40
hey this is what works um and you know

00:13:38 --> 00:13:41
it's kind of funny like in the early

00:13:39 --> 00:13:43
days of Salesforce people bought

00:13:40 --> 00:13:45
Salesforce to learn how Salesforce use

00:13:42 --> 00:13:46
Salesforce right and so part part of

00:13:44 --> 00:13:48
what we have to sort of educate

00:13:45 --> 00:13:50
customers like this is how levex use

00:13:47 --> 00:13:51
levex to grow accelerate our growth um

00:13:49 --> 00:13:53
this is how you should be doing it as

00:13:50 --> 00:13:55
well so it's interesting to think about

00:13:52 --> 00:13:56
Alice and Mike as like these combination

00:13:54 --> 00:13:58
of so many different tools and the model

00:13:55 --> 00:14:00
providers you just touched on like how

00:13:58 --> 00:14:03
many different products or even a part

00:13:59 --> 00:14:05
of Alice and Mike and how do you stay on

00:14:02 --> 00:14:06
The Cutting Edge of all of those

00:14:04 --> 00:14:08
different infrastructure providers and

00:14:05 --> 00:14:09
the changing market and constantly

00:14:07 --> 00:14:11
testing and inting I'd love to hear you

00:14:08 --> 00:14:12
talk about that totally you know if if

00:14:10 --> 00:14:14
you look at the Modern like salesperson

00:14:11 --> 00:14:17
today they use 20 30 different tools as

00:14:13 --> 00:14:19
part of like their sales stack right and

00:14:16 --> 00:14:20
part of our product is consolidating all

00:14:18 --> 00:14:22
those tool all that complexity under the

00:14:19 --> 00:14:22
hood and abstracting that of it from the

00:14:21 --> 00:14:25
customers it's like hey you're just

00:14:21 --> 00:14:26
focused on your own outcomes and to do

00:14:24 --> 00:14:27
that you know not only do we have to

00:14:25 --> 00:14:30
integrate a lot of vendors but we also

00:14:26 --> 00:14:31
have to build a pretty seamless

00:14:29 --> 00:14:33
Warehouse system whether it's third

00:14:30 --> 00:14:34
party data or first party data just to

00:14:32 --> 00:14:36
give our customers a ton of insights

00:14:33 --> 00:14:37
into what's actually happening and

00:14:35 --> 00:14:39
that's one part of our stack another

00:14:36 --> 00:14:40
part is just like there's a ton of

00:14:38 --> 00:14:42
vendors we work with for things like

00:14:39 --> 00:14:44
crawling infrastructure or hosting on

00:14:41 --> 00:14:46
Prem models have low latency and you

00:14:43 --> 00:14:48
know the way we think about this is like

00:14:45 --> 00:14:49
we really really care about velocity

00:14:47 --> 00:14:50
right so if there's a vendor who's

00:14:48 --> 00:14:52
thought deeply about a problem and we

00:14:50 --> 00:14:53
can leverage their work and they can

00:14:51 --> 00:14:55
scale with us we're very very happy to

00:14:52 --> 00:14:57
use them and internally we built this

00:14:54 --> 00:14:59
muscle where we can leverage a vendor do

00:14:56 --> 00:15:01
an integration in days or sometimes

00:14:58 --> 00:15:03
hours right and that's really cool good

00:15:00 --> 00:15:04
for us because now we can leverage this

00:15:02 --> 00:15:05
collective intelligence that's sort of

00:15:03 --> 00:15:07
exists out there for companies that have

00:15:04 --> 00:15:08
gone really deep into a specific problem

00:15:06 --> 00:15:09
just use that for our use cases and

00:15:07 --> 00:15:12
suddenly you know our evals are just

00:15:08 --> 00:15:14
shooting up um and so that's that's been

00:15:11 --> 00:15:15
really cool to see um but at the same

00:15:13 --> 00:15:17
time that means you're managing like a

00:15:15 --> 00:15:18
ton of integration underhood our

00:15:16 --> 00:15:20
customers don't care if one of our

00:15:17 --> 00:15:21
providers goes down they just want they

00:15:19 --> 00:15:22
just care about their outcomes and so we

00:15:20 --> 00:15:24
have to like build a lot of redundancy

00:15:22 --> 00:15:26
and stuff into place to make sure and a

00:15:23 --> 00:15:27
lot of monitoring to make sure that you

00:15:25 --> 00:15:30
know they have a seamless experience

00:15:27 --> 00:15:32
ven though we're coordinating so

00:15:29 --> 00:15:33
rchestrations under the hood well and

00:15:31 --> 00:15:35
it's interesting because some of these

00:15:32 --> 00:15:37
vendors like if you're thinking about

00:15:34 --> 00:15:38
he SDR use case some of these tools

00:15:36 --> 00:15:40
that the SDR used have been around

00:15:37 --> 00:15:42
forever there's an established base of

00:15:39 --> 00:15:44
infrastructure providers for those tools

00:15:41 --> 00:15:45
but then there's the stuff like web

00:15:43 --> 00:15:47
scraping that maybe is changing really

00:15:44 --> 00:15:49
fast or um or all the different parts of

00:15:47 --> 00:15:51
the voice stack that are changing really

00:15:48 --> 00:15:52
fast so how do you think about like this

00:15:50 --> 00:15:54
a different type of testing and

00:15:51 --> 00:15:56
iterating and and exploring how do you

00:15:53 --> 00:15:57
think about those tools and how do you

00:15:55 --> 00:15:59
stay on The Cutting Edge because it's

00:15:56 --> 00:16:01
just incredible to me how the pace at

00:15:58 --> 00:16:02
which our team is exploring these

00:16:00 --> 00:16:04
totally totally you know it's really

00:16:02 --> 00:16:06
funny I think if you if you went to like

00:16:03 --> 00:16:08
the last like YC demo day you probably

00:16:05 --> 00:16:10
saw 11x as a customer for so such a

00:16:07 --> 00:16:11
large percentage of those companies I

00:16:09 --> 00:16:12
think and part of the reason is because

00:16:10 --> 00:16:14
we're sort of in touch with all these

00:16:11 --> 00:16:15
companies like we're like hey this is a

00:16:13 --> 00:16:17
problem we have like if you build it for

00:16:14 --> 00:16:18
us we'll use it will pay you yeah right

00:16:16 --> 00:16:20
and so I think it it creates like this

00:16:17 --> 00:16:21
ecosystem where people are like hey if I

00:16:19 --> 00:16:23
want to like get something tested I want

00:16:20 --> 00:16:25
o go to level next and so we kind of

00:16:22 --> 00:16:27
have like this is this distributed Army

00:16:24 --> 00:16:28
of folks you know across building these

00:16:26 --> 00:16:29
cool things that we can Leever and be

00:16:27 --> 00:16:30
like hey this is good or this is bad for

00:16:28 --> 00:16:32
these reasons and they impr it great

00:16:29 --> 00:16:36
we'll use it if they don't then we won

00:16:31 --> 00:16:38
it's exhausting keeping up all yes yes

00:16:35 --> 00:16:40
totally but it's it's it's also

00:16:37 --> 00:16:41
really cool because all these teams are

00:16:39 --> 00:16:43
xperimenting with different ways like

00:16:40 --> 00:16:44
things that people haden't tried before

00:16:42 --> 00:16:45
yeah and so we get to learn from them

00:16:43 --> 00:16:47
and see ultimately what delivers

00:16:44 --> 00:16:48
outcomes for for our customers and

00:16:46 --> 00:16:50
that's been that's been exciting another

00:16:47 --> 00:16:52
interesting aspect of this is we you

00:16:49 --> 00:16:55
know we've grown so fast now we're we're

00:16:51 --> 00:16:57
building for scale but we're also doing

00:16:54 --> 00:17:00
all this testing and iterating so how do

00:16:56 --> 00:17:02
you think about that problem of hey we

00:16:59 --> 00:17:05
now have a ton of customers that expect

00:17:01 --> 00:17:07
a really high level of service we we are

00:17:04 --> 00:17:10
taking over parts of the sales motion or

00:17:06 --> 00:17:11
the entire sales Motion in some cases so

00:17:09 --> 00:17:13
how do you think about the scale problem

00:17:10 --> 00:17:15
and building for scale versus exploring

00:17:12 --> 00:17:16
all these different tools you know

00:17:14 --> 00:17:17
that's that's a really tough question

00:17:15 --> 00:17:19
and I think the short answer is you have

00:17:16 --> 00:17:21
to just do both right you can't just

00:17:18 --> 00:17:22
focus on one right customers are

00:17:20 --> 00:17:24
xpecting a bunch of new features

00:17:21 --> 00:17:25
they're expecting the product to scale

00:17:23 --> 00:17:27
with them right and so the way we sort

00:17:24 --> 00:17:29
of thought about it for like R&D and

00:17:26 --> 00:17:31
product teams is like hey we will sort

00:17:28 --> 00:17:34
of think themes on a weekly basis right

00:17:30 --> 00:17:36
like on one week we might be sort of

00:17:33 --> 00:17:37
talking through how we could accelerate

00:17:35 --> 00:17:38
some fature developments another week we

00:17:36 --> 00:17:40
like okay this part of for system is

00:17:37 --> 00:17:42
like crumbling we need to make sure we

00:17:39 --> 00:17:43
can go in scale it and so every week we

00:17:41 --> 00:17:46
kind of like try to make investments in

00:17:42 --> 00:17:47
both of these buckets the the amount of

00:17:45 --> 00:17:49
investment we make might change

00:17:46 --> 00:17:51
relatively week over week but we kind of

00:17:48 --> 00:17:52
have to make progress on both because at

00:17:50 --> 00:17:53
he pace we're at in customers like

00:17:51 --> 00:17:54
very part of the system is going to be

00:17:52 --> 00:17:56
like oh crap like we didn't think we'd

00:17:53 --> 00:17:57
get this much scale this quickly have to

00:17:55 --> 00:17:59
go on like spend time scaling that up

00:17:57 --> 00:18:02
maybe as you as you've scaled like you

00:17:58 --> 00:18:04
know you keep adding customers they're

00:18:01 --> 00:18:06
always asking for you to go in certain

00:18:03 --> 00:18:09
directions based on their business and

00:18:05 --> 00:18:11
so how do you on the one hand listen to

00:18:08 --> 00:18:13
that demand but also think about not

00:18:10 --> 00:18:16
letting that create product drift or or

00:18:12 --> 00:18:17
scope drift on on the product you know

00:18:15 --> 00:18:18
this is this is one of the things where

00:18:16 --> 00:18:20
we kind of have to stay true to to our

00:18:17 --> 00:18:21
mission right we're trying to create

00:18:19 --> 00:18:24
these digital workers that deliver human

00:18:20 --> 00:18:25
results some feature requests move us

00:18:23 --> 00:18:27
away from the digital workers they move

00:18:24 --> 00:18:29
us more toward traditional SAS and you

00:18:26 --> 00:18:30
know at some point we have to say no

00:18:28 --> 00:18:32
like we can't do that

00:18:29 --> 00:18:34
but if our hypothesis is right what we

00:18:31 --> 00:18:36
are building is enough of like a

00:18:33 --> 00:18:37
painkiller that customers will still

00:18:35 --> 00:18:38
stay yeah right and that gives us a good

00:18:36 --> 00:18:39
confidence if they're like like oh

00:18:37 --> 00:18:41
can you build this like custom

00:18:38 --> 00:18:42
integration for us and we're like no no

00:18:40 --> 00:18:43
uh but here's all this other good stuff

00:18:41 --> 00:18:45
that you use in our platform and if they

00:18:42 --> 00:18:46
still stick around that gives us good

00:18:44 --> 00:18:49
confidence in general it's really

00:18:45 --> 00:18:50
valuable to listen to the problems and

00:18:48 --> 00:18:52
pain points customers have and what

00:18:49 --> 00:18:52
heir current Solutions are but you know

00:18:51 --> 00:18:54
if you were to just take their solutions

00:18:52 --> 00:18:56
that face value our product would be

00:18:53 --> 00:18:59
like this Behemoth of like 100 different

00:18:55 --> 00:19:01
custom sort of Integrations um but we

00:18:58 --> 00:19:02
Truly Deeply listen to their problems

00:19:00 --> 00:19:04
and use that to kind of inform our road

00:19:01 --> 00:19:05
map because ultimately they have a

00:19:03 --> 00:19:06
problem they're making buying decision

00:19:04 --> 00:19:08
based on that problem so we have to

00:19:05 --> 00:19:09
solve that problem just maybe not in the

00:19:07 --> 00:19:11
same way that they think they should be

00:19:08 --> 00:19:14
solved on that note you know you guys

00:19:10 --> 00:19:16
went multiproduct so early I think that

00:19:13 --> 00:19:18
would probably be against the advice of

00:19:15 --> 00:19:19
you know many senior product leaders or

00:19:17 --> 00:19:21
people that have gone before why' you

00:19:18 --> 00:19:23
make that decision and any learnings

00:19:20 --> 00:19:24
from that experience like like you

00:19:22 --> 00:19:26
mention it was a very deliberate choice

00:19:23 --> 00:19:27
that we kind of made very early on you

00:19:25 --> 00:19:28
know we knew that different sales

00:19:26 --> 00:19:30
trategies and motions work for

00:19:27 --> 00:19:31
different companies for some it's an

00:19:29 --> 00:19:32
outbound motion for some it's inbound

00:19:30 --> 00:19:34
for some it's phone calling for some

00:19:31 --> 00:19:35
it's email or you know SMS or another

00:19:33 --> 00:19:37
Channel we knew that different things

00:19:34 --> 00:19:38
work for different companies and so we

00:19:36 --> 00:19:40
re like how do we set up our company

00:19:37 --> 00:19:41
to be antifragile yeah we need to be

00:19:39 --> 00:19:43
able to support all these different

00:19:40 --> 00:19:44
motions it's very hard problem to do it

00:19:42 --> 00:19:46
hat quickly like you know within a year

00:19:43 --> 00:19:47
we had multiple products in the market

00:19:45 --> 00:19:49
both you know hitting pretty good scale

00:19:46 --> 00:19:51
it was it was very difficult but the way

00:19:48 --> 00:19:52
I think we sort of handled that is like

00:19:50 --> 00:19:54
we structured like we would have really

00:19:51 --> 00:19:56
small pods working on the next like sort

00:19:53 --> 00:19:58
of0 to one bet and the entire goal of

00:19:55 --> 00:20:00
that pod is get to pmf like you are a

00:19:57 --> 00:20:03
startup imagine y Dem is coming up in a

00:19:59 --> 00:20:04
month get to pmf right and we've built a

00:20:02 --> 00:20:06
platform and so we want folks to

00:20:03 --> 00:20:07
leverage a platform but in some cases

00:20:05 --> 00:20:09
you know again the company isn't very

00:20:06 --> 00:20:11
old we said just do what it takes to get

00:20:08 --> 00:20:12
o pmf like validate that what you are

00:20:10 --> 00:20:13
building is something customers actually

00:20:11 --> 00:20:15
want once you get there then we can sort

00:20:12 --> 00:20:16
of put it into rest in Machinery design

00:20:14 --> 00:20:18
it for scale all that good stuff but in

00:20:16 --> 00:20:20
the beginning anything you do that's not

00:20:17 --> 00:20:21
delivering customer value is a waste

00:20:19 --> 00:20:23
because you don't even know the product

00:20:20 --> 00:20:25
is going to work yeah um and so we're

00:20:22 --> 00:20:26
sort of very very practical as a team

00:20:24 --> 00:20:27
where we're like hey we need to figure

00:20:25 --> 00:20:29
out how this works and then we'll invest

00:20:26 --> 00:20:31
in making it amazing but first just get

00:20:28 --> 00:20:33
he answer to those questions there's a

00:20:30 --> 00:20:35
long way to go still um you know there's

00:20:32 --> 00:20:38
o much still to build but if you just

00:20:34 --> 00:20:39
pause for a moment and look back at all

00:20:37 --> 00:20:41
the decisions you made and all the

00:20:38 --> 00:20:44
product you've built what would you have

00:20:40 --> 00:20:46
changed if if you knew what you know now

00:20:43 --> 00:20:47
uh and could go back and tell yourself

00:20:45 --> 00:20:48
you know back then yeah it's a really

00:20:46 --> 00:20:50
interesting question you know one of the

00:20:48 --> 00:20:52
things you um you asked me earlier about

00:20:49 --> 00:20:53
agents and I was like you know design

00:20:51 --> 00:20:55
really really matters I think we had a

00:20:52 --> 00:20:56
designer too late um and I think that's

00:20:54 --> 00:20:58
one thing I think we would have changed

00:20:55 --> 00:21:00
if I go back is like have them very very

00:20:57 --> 00:21:02
involved like from day one of the

00:20:59 --> 00:21:03
process because it it determines exactly

00:21:01 --> 00:21:05
how the user is experiencing your

00:21:03 --> 00:21:07
product a lot of times actually changes

00:21:04 --> 00:21:09
what we build the actual experience user

00:21:06 --> 00:21:11
has sort of under the hood and so you

00:21:08 --> 00:21:14
know one thing and now we have you know

00:21:10 --> 00:21:14
great designers on our team but if you

00:21:13 --> 00:21:16
started with that it would probably

00:21:13 --> 00:21:17
accelerate our development quite a bit

00:21:15 --> 00:21:19
and may maybe just to double click on

00:21:16 --> 00:21:21
that like what are the what are the

00:21:18 --> 00:21:22
design decisions maybe that you've now

00:21:20 --> 00:21:24
been able to make that you think you

00:21:21 --> 00:21:25
would have liked to have made earlier I

00:21:23 --> 00:21:27
think it's just kind of interesting like

00:21:25 --> 00:21:29
it's so hard to sometimes like grock

00:21:26 --> 00:21:32
like what is this agent doing that it's

00:21:28 --> 00:21:34
kind of invisible it's completing work

00:21:31 --> 00:21:36
like are there ways that you've now you

00:21:33 --> 00:21:38
know you feel good about how people see

00:21:35 --> 00:21:40
that work being done yes yes I think one

00:21:37 --> 00:21:42
good way is like taking the user

00:21:39 --> 00:21:43
along for the journey right so basically

00:21:41 --> 00:21:45
it's like hey what is our agent actually

00:21:42 --> 00:21:47
doing yeah like we would now if you go

00:21:44 --> 00:21:48
to our if if you go to our product like

00:21:46 --> 00:21:50
you can see our agent is like crawling

00:21:48 --> 00:21:51
these websites it's like writing this

00:21:49 --> 00:21:52
research report and we showed that to

00:21:50 --> 00:21:54
you so it's like the agent isn't just

00:21:51 --> 00:21:55
like doing something in the background

00:21:53 --> 00:21:57
and boom you he some content it's like

00:21:54 --> 00:21:58
here step by step everything it's doing

00:21:56 --> 00:21:59
and the design for that was really

00:21:57 --> 00:22:01
interesting right because if you run

00:21:58 --> 00:22:02
that agent again it might do slightly

00:22:00 --> 00:22:03
different things right but really taking

00:22:01 --> 00:22:05
the user along for that journey to be

00:22:02 --> 00:22:06
like hey this is what is happening at

00:22:04 --> 00:22:08
his St this is what the agent is doing

00:22:05 --> 00:22:11
it wrote this content because it found

00:22:07 --> 00:22:12
this information elsewhere um I that

00:22:10 --> 00:22:14
really helps build truster Customer

00:22:11 --> 00:22:16
because otherwise they're like why why

00:22:13 --> 00:22:17
did you write that right if I think of

00:22:15 --> 00:22:18
like a few other things that I think I

00:22:16 --> 00:22:20
would I would have Chang one is I think

00:22:17 --> 00:22:22
moving from London to SF earlier this is

00:22:19 --> 00:22:24
like the mecca of AI agents there will

00:22:21 --> 00:22:26
be a lot of londoners that are very

00:22:23 --> 00:22:27
unhappy to hear but I agree with you

00:22:25 --> 00:22:29
keep going yeah I mean just there's just

00:22:26 --> 00:22:31
so much development happening here and

00:22:28 --> 00:22:33
we learn so so much from our peers right

00:22:30 --> 00:22:34
everyone is facing similar problems

00:22:32 --> 00:22:36
right and the rate at which we can

00:22:33 --> 00:22:39
accelerate by kind of being in this

00:22:35 --> 00:22:40
Mecca having um you know this collective

00:22:38 --> 00:22:41
intelligence across so many people

00:22:39 --> 00:22:43
trying so many different things has

00:22:41 --> 00:22:45
really sort of accelerated our

00:22:42 --> 00:22:46
development um so I think moving early

00:22:44 --> 00:22:48
would have been uh would have you know

00:22:45 --> 00:22:50
accelerated even even more I think the

00:22:47 --> 00:22:53
third thing is I kind of alluded to this

00:22:49 --> 00:22:54
earlier which is people a lot of the

00:22:52 --> 00:22:56
reason people buy 11x to learn how we

00:22:53 --> 00:22:58
sort of accelerate our growth using 11x

00:22:55 --> 00:23:00
and so I think being more opinionated

00:22:57 --> 00:23:02
about how to use our product

00:22:59 --> 00:23:04
be in of like here's a blank slate go

00:23:01 --> 00:23:07
right I think that would have you know

00:23:03 --> 00:23:09
helped us set customer expectations and

00:23:06 --> 00:23:11
gone the more success even earlier it's

00:23:08 --> 00:23:12
like hey this is this is our opinion

00:23:10 --> 00:23:14
view of how you should run your cold

00:23:11 --> 00:23:16
upbound or your warm upbound or your or

00:23:14 --> 00:23:18
your INB phone calls or any of these

00:23:15 --> 00:23:20
things um I think would have really

00:23:17 --> 00:23:21
level set with the customer like this is

00:23:19 --> 00:23:22
what you should be doing and this is

00:23:20 --> 00:23:24
what success looks like a lot of times

00:23:21 --> 00:23:26
customers like I don't what does success

00:23:23 --> 00:23:28
look like is am I comparing it just to

00:23:25 --> 00:23:29
my humanr but sometimes not an app Plus

00:23:27 --> 00:23:31
app plus comparison what if I'm running

00:23:28 --> 00:23:34
like a brand campaign on l x right and

00:23:30 --> 00:23:35
so really setting that from day one to

00:23:33 --> 00:23:37
be like hey this is what success is this

00:23:34 --> 00:23:38
T Sho their product and and that's the

00:23:36 --> 00:23:40
direction that we're moving towards now

00:23:37 --> 00:23:42
yeah this this product is is not

00:23:39 --> 00:23:44
straight up magic it's like it is built

00:23:41 --> 00:23:47
for a certain type of use case no I

00:23:43 --> 00:23:50
think that's so right um things are

00:23:46 --> 00:23:51
changing so quickly in the market and AI

00:23:49 --> 00:23:53
tooling is constantly you know the whole

00:23:50 --> 00:23:55
landscape you just said like it changed

00:23:52 --> 00:23:56
in the last six months for voice and

00:23:54 --> 00:23:58
it's like it's gonna change that much

00:23:55 --> 00:24:01
more in the next six months how do you

00:23:57 --> 00:24:03
think about the people that are best

00:24:00 --> 00:24:05
equipped to solve these problems and

00:24:02 --> 00:24:07
like how does that inform the type of

00:24:04 --> 00:24:08
team that you're trying to build at 11x

00:24:06 --> 00:24:11
so maybe walk us through how you're

00:24:07 --> 00:24:12
thinking about hiring and and in Talent

00:24:10 --> 00:24:14
you know I think at the at the IC level

00:24:11 --> 00:24:17
one of the things we really look at is

00:24:13 --> 00:24:18
one the ability to move fast right as

00:24:16 --> 00:24:19
you said the landscape is changing so

00:24:17 --> 00:24:21
quickly right we have to be able to

00:24:18 --> 00:24:23
react to that very very quickly the

00:24:20 --> 00:24:24
second piece is really like and this is

00:24:22 --> 00:24:26
regardless if it was an agent company or

00:24:23 --> 00:24:28
not like ownership is really really

00:24:25 --> 00:24:29
important right ultimately like you know

00:24:27 --> 00:24:31
e have this like internal like we will

00:24:28 --> 00:24:32
die for our customers pipeline right

00:24:30 --> 00:24:34
like we will do whatever it takes to

00:24:31 --> 00:24:35
make them successful cuz we'll only be

00:24:33 --> 00:24:37
successful if our customers are

00:24:34 --> 00:24:39
successful right and so really having

00:24:36 --> 00:24:40
that deep deep level of ownership for

00:24:38 --> 00:24:41
like I will do whatever it takes to make

00:24:39 --> 00:24:43
our customer successful is something we

00:24:40 --> 00:24:44
really look for and the third thing is

00:24:42 --> 00:24:46
like it's a chaotic environment out

00:24:43 --> 00:24:47
here you got to be able to handle chaos

00:24:45 --> 00:24:49
right we might change you know a new

00:24:46 --> 00:24:50
model might come out we might change a

00:24:48 --> 00:24:52
specific feature because of something

00:24:49 --> 00:24:54
some new thing that has been unlocked

00:24:51 --> 00:24:55
yeah um and so we have to be open to you

00:24:53 --> 00:24:56
could have been working on something

00:24:54 --> 00:24:57
for like two weeks and it's like

00:24:55 --> 00:24:58
actually we're going to throw that away

00:24:56 --> 00:24:59
eah we're going to kill that now

00:24:57 --> 00:25:01
correct correct and so I think not being

00:24:58 --> 00:25:02
like sort of married to the work you've

00:25:00 --> 00:25:03
done but really staying focused on what

00:25:01 --> 00:25:05
will deliver more outcomes I think is

00:25:02 --> 00:25:07
omething that we really look for in

00:25:04 --> 00:25:08
folks and I think like at the leadership

00:25:06 --> 00:25:11
level it's a lot of the same things but

00:25:07 --> 00:25:13
also like the really the ability to both

00:25:10 --> 00:25:15
ave like vision and strategy but also

00:25:12 --> 00:25:17
be able to go like heads down into

00:25:14 --> 00:25:18
execution because once you have like the

00:25:16 --> 00:25:20
vision strateg I just got to build it

00:25:17 --> 00:25:22
exe right and that is super important so

00:25:19 --> 00:25:24
like for all of our leaders they need to

00:25:21 --> 00:25:26
be go scale up and down like on a

00:25:23 --> 00:25:27
moment's notice yeah um and that I think

00:25:25 --> 00:25:30
and that's one of the reasons why we

00:25:26 --> 00:25:31
have so many former Founders at X yeah

00:25:29 --> 00:25:33
um because they have had to do that so

00:25:30 --> 00:25:35
many times in the past this has been an

00:25:32 --> 00:25:37
absolute blast thank you so much for

00:25:34 --> 00:25:39
coming in and sharing all your learnings

00:25:36 --> 00:25:41
uh we love working with 11x I love with

00:25:38 --> 00:25:43
you and you know I look forward to uh

00:25:40 --> 00:25:44
many more many more fun things like this

00:25:42 --> 00:25:46
in the future amazing this is an amazing

00:25:43 --> 00:25:47
chat and I'm I'm really happy we share

00:25:45 --> 00:25:49
some of the stuff that we've been doing

00:25:46 --> 00:25:54
thanks for awesome thank you

00:25:48 --> 00:25:54
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
