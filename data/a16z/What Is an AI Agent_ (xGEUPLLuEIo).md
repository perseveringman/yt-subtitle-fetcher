---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "xGEUPLLuEIo"
title: "What Is an AI Agent?"
video_url: "https://www.youtube.com/watch?v=xGEUPLLuEIo"
thumbnail_url: "https://i.ytimg.com/vi/xGEUPLLuEIo/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=xGEUPLLuEIo"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-05-02T14:01:35.000Z"
upload_date: "2025-05-02"
duration_seconds: 2208
duration_human: "36:48"
view_count: 18464
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T12:50:13.183Z"
---

# What Is an AI Agent?

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=xGEUPLLuEIo
- video_id: xGEUPLLuEIo
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-05-02T14:01:35.000Z
- upload_date: 2025-05-02
- duration: 36:48
- view_count: 18464
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

In this episode of AI + a16z, a16z Infra partners Guido Appenzeller, Matt Bornstein, and Yoko Li discuss and debate one of the tech industry's buzziest words right now: AI agents. The trio digs into the topic from a number of angles, including:

- Whether a uniform definition of agent actually exists
- How to distinguish between agents, LLMs, and functions
- How to think about pricing agents
- Whether agents can actually replace humans, and
- The effects of data siloes on agents that can access the web.
- They don't claim to have all the answers, but they raise many questions and insights that should interest anybody building, buying, and even marketing AI agents.

00:00:39 - How do we define “AI agents”
00:04:40 - Degrees of agentic behavior
00:09:34 - Can agents really replace humans?
00:15:32 - Is it agentic behavior or a software function?
00:18:46 -  How should we price AI agents?
00:22:54 -  Identifying true value
00:25:59 -  Where do agent capabilities live?
00:29:40 -  Agents vs. a hostile web
00:34:04 -  What does success look like?

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
I almost feel like for all the use cases

00:00:03 --> 00:00:09
we've described, there's one element

00:00:05 --> 00:00:11
hat all agents have, which is reasoning

00:00:08 --> 00:00:14
and decision. I actually feel like it's

00:00:10 --> 00:00:16
like a multi-step LM chain with a

00:00:13 --> 00:00:17
decision tree. A dynamic decision tree.

00:00:15 --> 00:00:20
A dynamic decision. Yeah, I think that's

00:00:16 --> 00:00:22
fair. I think we've all just been

00:00:19 --> 00:00:24
erd sniped. I I just think, you know,

00:00:21 --> 00:00:26
we're computer scientists, so I think

00:00:23 --> 00:00:28
we're like not well equipped when a bit

00:00:25 --> 00:00:29
isn't just zero or one. It's like maybe

00:00:27 --> 00:00:32
something in between and we just talk

00:00:28 --> 00:00:37
about it a lot until we like try to like

00:00:31 --> 00:00:37
coersse it to one value or the other.

00:00:38 --> 00:00:43
[Music]

00:00:40 --> 00:00:45
So I think there's some things which are

00:00:42 --> 00:00:47
probably kind of easy to say which is a

00:00:44 --> 00:00:48
there's a good amount of disagreement

00:00:46 --> 00:00:51
what is an agent. We've heard a lot of

00:00:47 --> 00:00:54
different definitions of it on the both

00:00:50 --> 00:00:57
on the technical side as well I'd say on

00:00:53 --> 00:00:58
the marketing and sales side in some

00:00:56 --> 00:01:01
cases because there's some sales models

00:00:57 --> 00:01:04
associated with it. So so let's start

00:01:00 --> 00:01:06
with a with a technical um side. I think

00:01:03 --> 00:01:08
there's sort of a continuum here. You

00:01:05 --> 00:01:10
know, the the the simplest thing that

00:01:07 --> 00:01:11
I've heard being called an agent is

00:01:09 --> 00:01:13
basically just a clever prompt on top of

00:01:10 --> 00:01:15
some kind of knowledge base or some kind

00:01:12 --> 00:01:16
of context. Uh, you know, that has a s

00:01:14 --> 00:01:18
of a chat type interface. So, from a

00:01:15 --> 00:01:20
user's perspective, this looks like an

00:01:18 --> 00:01:22
human agent would look like, right? So,

00:01:19 --> 00:01:24
for example, I ask it, hey, I have a

00:01:21 --> 00:01:27
technical problem with my product XYZ.

00:01:23 --> 00:01:29
It looks at the knowledge base and comes

00:01:26 --> 00:01:31
back with a canned response, right? But

00:01:28 --> 00:01:33
here doesn't have to be a knowledge

00:01:30 --> 00:01:34
base, right? It doesn't even have to be

00:01:32 --> 00:01:36
a knowledge base. I see. Got it. Okay.

00:01:33 --> 00:01:37
So maybe maybe it's just a trained

00:01:35 --> 00:01:39
model. It's all the model weights the

00:01:36 --> 00:01:41
knowledge. So it's even simpler. So an

00:01:38 --> 00:01:43
agent could just be an LLM with a with a

00:01:40 --> 00:01:45
chat interface or something like that by

00:01:42 --> 00:01:47
some definition, right? I think on the

00:01:44 --> 00:01:49
other end of the spectrum, there are

00:01:46 --> 00:01:51
some people who basically say for

00:01:48 --> 00:01:53
something to be a real agent, it has to

00:01:50 --> 00:01:55
be something fairly close to AGI, right?

00:01:52 --> 00:01:56
It needs to persist over long periods of

00:01:54 --> 00:01:58
time. It needs to be able to learn. It

00:01:55 --> 00:02:00
needs to have a a knowledge base. It

00:01:57 --> 00:02:02
needs to work independently on problems.

00:01:59 --> 00:02:04
If you take then the most extensive

00:02:01 --> 00:02:06
definition, is it fair to say that

00:02:03 --> 00:02:09
doesn't work yet? I think so. It doesn't

00:02:05 --> 00:02:12
work yet, although

00:02:08 --> 00:02:14
will it ever work? That's a

00:02:11 --> 00:02:16
philosophical question. All right. Fair.

00:02:13 --> 00:02:18
Very fair. Very fair. So, if we take

00:02:15 --> 00:02:21
that continuum in between, is is at

00:02:17 --> 00:02:23
least a way to to chop that up into a

00:02:20 --> 00:02:26
couple of categories of sort of maybe

00:02:22 --> 00:02:28
degrees of agentic behavior and

00:02:25 --> 00:02:31
ifferent types of agent. There's some

00:02:27 --> 00:02:33
artsy agent that help artists to you

00:02:30 --> 00:02:35
know come up with new buzzier curves.

00:02:32 --> 00:02:38
There's coding agent which we like to

00:02:34 --> 00:02:40
talk about as the agent of the day.

00:02:37 --> 00:02:43
Yeah. Yeah. Which we use. There's agent

00:02:39 --> 00:02:46
hat's just a wrapper on top of LLM.

00:02:42 --> 00:02:49
That's right. Yeah. I I may be the the

00:02:45 --> 00:02:52
contrarian in this group. All right. Um

00:02:48 --> 00:02:54
look, I I kind of think agent is just a

00:02:51 --> 00:02:57
word for AI applications, right?

00:02:54 --> 00:02:59
Anything that uses AI kind of can be an

00:02:56 --> 00:03:01
agent. Now, before we started this talk,

00:02:58 --> 00:03:02
I actually went online just to refresh

00:03:00 --> 00:03:04
myself about some of the more

00:03:01 --> 00:03:06
interesting um you know AI agent

00:03:04 --> 00:03:09
perspectives out there. I found a really

00:03:05 --> 00:03:11
cool talk from Karpathy that he gave a

00:03:08 --> 00:03:12
couple of years ago about about agents

00:03:10 --> 00:03:14
which I I can describe a little bit. But

00:03:11 --> 00:03:17
he really funny part was on the YouTube

00:03:13 --> 00:03:19
recommended videos to watch next. It's

00:03:16 --> 00:03:21
like AI agents are going to

00:03:18 --> 00:03:23
revolutionize your lifestyle and the

00:03:20 --> 00:03:25
rise of super intelligent AI, you know,

00:03:22 --> 00:03:26
it's just kind of like marketing. And so

00:03:24 --> 00:03:28
I actually do think that's what's going

00:03:25 --> 00:03:32
on in a lot of ways. The the cleanest

00:03:27 --> 00:03:34
definition I've seen of an agent is just

00:03:31 --> 00:03:36
something that does complex planning and

00:03:34 --> 00:03:38
something that interacts with outside

00:03:35 --> 00:03:40
systems. The problem with that

00:03:37 --> 00:03:42
definition is all LLMs now do both of

00:03:39 --> 00:03:44
those things, right? they have built-in

00:03:41 --> 00:03:46
planning in many cases and they at least

00:03:43 --> 00:03:48
consume information you know at least

00:03:45 --> 00:03:50
from the internet maybe from you know

00:03:47 --> 00:03:52
some servers that expose information

00:03:49 --> 00:03:54
through MCP or some other protocol so

00:03:51 --> 00:03:55
the line really is very blurry what was

00:03:53 --> 00:03:57
o interesting about the Karpathy talk

00:03:54 --> 00:04:00
is he basically he related it to

00:03:56 --> 00:04:02
autonomous vehicles and said AI agents

00:03:59 --> 00:04:04
are a real problem but it's it's like a

00:04:02 --> 00:04:06
10-year problem it's like a decade

00:04:03 --> 00:04:07
problem that we need to work on and I

00:04:05 --> 00:04:09
think most of what we're seeing in the

00:04:06 --> 00:04:11
market now is like is not the decade

00:04:08 --> 00:04:13
version of this problem it's like the

00:04:10 --> 00:04:14
weekend demo version of this problem.

00:04:12 --> 00:04:16
And and this is why we sort of generate

00:04:13 --> 00:04:18
so much confusion. You have this kind of

00:04:15 --> 00:04:20
poorly defined nebulous thing that LLMs

00:04:17 --> 00:04:22
are kind of consuming themselves over

00:04:19 --> 00:04:23
time. And so I don't think anything we

00:04:21 --> 00:04:25
have are actually agents is is kind of

00:04:22 --> 00:04:27
and and agent itself may be a poorly

00:04:24 --> 00:04:29
defined and kind of overloaded term, but

00:04:26 --> 00:04:31
if someone's willing to do the hard work

00:04:28 --> 00:04:33
and like define exactly what it's like

00:04:30 --> 00:04:35
to kind of be a human but in digital

00:04:32 --> 00:04:37
form um and spend 10 years to make it

00:04:34 --> 00:04:41
actually work like you know that that's

00:04:36 --> 00:04:41
ort of what I'm excited to see.

00:04:41 --> 00:04:47
I wonder if part of a conversation is

00:04:44 --> 00:04:49
redefining agent because we all know

00:04:46 --> 00:04:51
that agent as a term just not a great

00:04:48 --> 00:04:54
erm. It means so many things to so many

00:04:50 --> 00:04:55
people. Um if it's interesting to

00:04:53 --> 00:04:57
dissect like what do we mean what do

00:04:54 --> 00:04:59
different people mean when they say

00:04:56 --> 00:05:02
agents where are different ways we could

00:04:58 --> 00:05:04
utilize this process we call agents.

00:05:01 --> 00:05:06
So it seems to me there's if if we're

00:05:03 --> 00:05:08
trying to define agents or well maybe

00:05:05 --> 00:05:10
ven degrees of agentic behavior which

00:05:07 --> 00:05:12
might be might be a little

00:05:09 --> 00:05:14
asier. There's something like a user

00:05:11 --> 00:05:16
interface aspect to it, right? Where

00:05:13 --> 00:05:19
something that's a pure co-pilot where

00:05:15 --> 00:05:21
basically user goes back and forth with

00:05:18 --> 00:05:23
a with an LM to work in a particular

00:05:20 --> 00:05:25
task that's often not called an agent.

00:05:22 --> 00:05:28
Is that fair? So so there's there's a

00:05:24 --> 00:05:31
little bit the co-pilots versus agents

00:05:27 --> 00:05:34
UI models. Yeah. I guess like what are

00:05:30 --> 00:05:37
the elements we will think that go goes

00:05:33 --> 00:05:40
into agendic behavior? Um like Matt

00:05:36 --> 00:05:42
mentioned planning could be one. There

00:05:39 --> 00:05:44
could be decisions made by the agent.

00:05:41 --> 00:05:46
There has to be LLM somewhere. But

00:05:43 --> 00:05:48
curious about your takes. Another

00:05:45 --> 00:05:50
definition we heard from anthropic re

00:05:47 --> 00:05:53
cently was this idea that an agent is

00:05:49 --> 00:05:57
an LLM running in a loop with tool use,

00:05:52 --> 00:05:58
right? Which I think the there's two two

00:05:56 --> 00:06:01
important parts that one is this notion

00:05:57 --> 00:06:04
that it's not just a single prompt and

00:06:00 --> 00:06:05
not even just a single static sequence

00:06:03 --> 00:06:07
of prompts, right? But something where

00:06:04 --> 00:06:09
the LLM takes the output of a prompt,

00:06:06 --> 00:06:11
feeds it back into itself and based on

00:06:08 --> 00:06:13
that makes decisions on what the next

00:06:10 --> 00:06:15
prompt is and likely also when to abort

00:06:12 --> 00:06:17
like when to when when to complete a

00:06:14 --> 00:06:20
task, right? So I think I think that for

00:06:16 --> 00:06:21
the real agents or the more agentic

00:06:19 --> 00:06:23
behaviors, I think that's a reasonably

00:06:20 --> 00:06:25
good definition. But just by that

00:06:22 --> 00:06:28
definition, isn't isn't

00:06:24 --> 00:06:30
every chatbot effectively an agent then

00:06:27 --> 00:06:33
in this in this world? Right? Like if I

00:06:30 --> 00:06:35
go just to

00:06:32 --> 00:06:37
chatgpt.com and use, you know, their

00:06:34 --> 00:06:39
latest reasoning model with web search,

00:06:36 --> 00:06:41
right? Isn't it using tools and and like

00:06:38 --> 00:06:43
feeding, you know, feeding its outputs

00:06:40 --> 00:06:46
into a new prompt in order to do kind of

00:06:42 --> 00:06:47
chain of thought reasoning? But it it I

00:06:45 --> 00:06:49
mean, if chain of thought is a little

00:06:46 --> 00:06:50
bit in between, if if it's just a single

00:06:48 --> 00:06:52
prompt, it comes back with a result,

00:06:49 --> 00:06:54
then it wouldn't have this notion of

00:06:51 --> 00:06:55
planning and doing a more long-term

00:06:53 --> 00:06:57
concept and deciding itself when it is

00:06:54 --> 00:06:59
complete. Right? If you have a chain of

00:06:56 --> 00:07:00
thought reasoning where I'm I'm given a

00:06:58 --> 00:07:04
more complex task, that's starting to

00:06:59 --> 00:07:07
look. I agree. I just think it's really

00:07:03 --> 00:07:09
tough to define a system based on what

00:07:06 --> 00:07:12
someone says to it, right? Because

00:07:08 --> 00:07:13
because these are these are by design uh

00:07:11 --> 00:07:15
unstructured inputs like these systems

00:07:12 --> 00:07:17
will accept literally anything. And so

00:07:14 --> 00:07:19
sure if you tell it, you know, what's

00:07:16 --> 00:07:20
today's weather, I would agree that's

00:07:18 --> 00:07:22
not agentic, right? That's just kind of

00:07:19 --> 00:07:25
like fetching, you know, from an API. if

00:07:21 --> 00:07:27
you ask it like you know define a new

00:07:24 --> 00:07:29
philosophy of weather, right? Like it'll

00:07:26 --> 00:07:30
go it'll happily go do it, right? So so

00:07:28 --> 00:07:32
it's like an agent if you ask it one

00:07:30 --> 00:07:33
thing but not an agent if you ask it

00:07:31 --> 00:07:35
another thing. I I think that's kind of

00:07:32 --> 00:07:37
a lot of the confusion in the market

00:07:34 --> 00:07:39
around this and and you know if we spoke

00:07:36 --> 00:07:41
in the terms that you're talking about

00:07:38 --> 00:07:42
Guido of like hey this is an LLM in a

00:07:40 --> 00:07:44
loop with a tool like like that's

00:07:41 --> 00:07:45
actually a much more productive way to

00:07:43 --> 00:07:47
talk about it I think. Yeah. Yeah. I

00:07:44 --> 00:07:49
mean that said it it seems like we're

00:07:46 --> 00:07:52
seeing to some degree a specialization

00:07:48 --> 00:07:54
of user interfaces in in s of two

00:07:51 --> 00:07:55
directions right there's let's say the a

00:07:53 --> 00:07:58
cursor or something like that which

00:07:54 --> 00:07:59
really emphasizes the tight loop between

00:07:57 --> 00:08:01
the user the tight feedback loop between

00:07:58 --> 00:08:03
the user and the LM and the the thing

00:08:00 --> 00:08:05
I'm working on right so I'm I want

00:08:02 --> 00:08:06
immediate gratification when I when I do

00:08:04 --> 00:08:09
something you know and of response time

00:08:06 --> 00:08:10
matters then there's of more the the

00:08:08 --> 00:08:12
back end as you know source code

00:08:09 --> 00:08:14
management system type plugins where

00:08:11 --> 00:08:16
it's more about throwing something um

00:08:13 --> 00:08:18
over the wall by maybe answering a

00:08:15 --> 00:08:20
couple of questions and then you try to

00:08:17 --> 00:08:22
maximize the amount of time the the the

00:08:19 --> 00:08:24
agent can work independently. So it

00:08:21 --> 00:08:26
seems like I think you're right that

00:08:23 --> 00:08:28
here's no clean system def like

00:08:25 --> 00:08:29
definition split between the two but

00:08:27 --> 00:08:31
here seems to be a little bit of an

00:08:28 --> 00:08:33
user interface specialization. Is that

00:08:30 --> 00:08:35
is that a fair statement? I almost feel

00:08:32 --> 00:08:38
ike for all the use cases we've

00:08:34 --> 00:08:40
described there's one element that all

00:08:37 --> 00:08:43
agents have which is reasoning and

00:08:39 --> 00:08:46
ecision. like would you call just a

00:08:42 --> 00:08:48
call to LM to say translate this text to

00:08:45 --> 00:08:51
JSON that's probably not the agent but

00:08:47 --> 00:08:55
hen if you uh ask the agent to like ask

00:08:50 --> 00:08:58
LM to say hey like decide where you know

00:08:54 --> 00:09:00
this response goes and route it for me

00:08:57 --> 00:09:02
like it feels more like a agent than

00:08:59 --> 00:09:04
before so it almost felt like a planning

00:09:01 --> 00:09:06
I'm actually not sure does the agent

00:09:03 --> 00:09:08
need to plan or does it need to decide

00:09:05 --> 00:09:11
maybe both I actually feel it's like a

00:09:07 --> 00:09:13
multi-step LM chain with a decision

00:09:10 --> 00:09:15
tree. A dynamic decision tree. A

00:09:12 --> 00:09:17
dynamic decision tree. I think that's

00:09:14 --> 00:09:19
fair. I think we've all just been

00:09:16 --> 00:09:21
erd sniped. I I just think, you know,

00:09:18 --> 00:09:23
we're computer scientists, so I think

00:09:20 --> 00:09:25
we're like not well equipped when a bit

00:09:22 --> 00:09:27
isn't just zero or one. It's like maybe

00:09:24 --> 00:09:30
something in between and we just like

00:09:26 --> 00:09:31
talk about it a lot until we like try to

00:09:29 --> 00:09:34
like coersse it to one value or the

00:09:30 --> 00:09:34
other.

00:09:34 --> 00:09:39
That rais an interesting point which is

00:09:36 --> 00:09:41
I think there is a marketing angle to

00:09:38 --> 00:09:42
agents, right? I've heard this narrative

00:09:40 --> 00:09:44
from a couple of startups that they're

00:09:41 --> 00:09:46
basically saying like hey you know the

00:09:43 --> 00:09:47
uh we can price the software that we're

00:09:45 --> 00:09:49
building much much higher because this

00:09:46 --> 00:09:51
an agent. So we can go to a company

00:09:48 --> 00:09:52
and say you're replacing a human worker

00:09:50 --> 00:09:55
um you know with this agent the human

00:09:52 --> 00:09:57
worker uh makes I don't know $50,000 a

00:09:54 --> 00:09:59
year and therefore you know this agent

00:09:56 --> 00:10:02
you can get for only $30,000 a year

00:09:58 --> 00:10:03
which you know this this sounds really

00:10:01 --> 00:10:05
compelling from a first glance and

00:10:02 --> 00:10:07
actually I mean there's some value to it

00:10:04 --> 00:10:09
in the very early days. It's very easy

00:10:06 --> 00:10:10
to understand comparative pricing for

00:10:08 --> 00:10:12
somebody who has to make a buying

00:10:09 --> 00:10:14
decision, right? You know, on the flip

00:10:11 --> 00:10:16
side, we all know that the the cost of a

00:10:13 --> 00:10:17
product over time converges towards the

00:10:15 --> 00:10:20
marginal cost of production, right? And

00:10:16 --> 00:10:21
so today, if I'm, you know, I used to

00:10:19 --> 00:10:23
use a translator maybe to translate a

00:10:20 --> 00:10:26
page of text. Today, you use chat GPT. I

00:10:22 --> 00:10:29
do not pay pay chat GD like I paid my

00:10:25 --> 00:10:31
translator. I paid a tiny fraction of a

00:10:28 --> 00:10:34
scent, right? Which is the uh via the

00:10:30 --> 00:10:36
API um which is the actual cost. So I

00:10:33 --> 00:10:38
sort of wonder h how much of the agent

00:10:35 --> 00:10:39
debate is is driven by marketing and

00:10:37 --> 00:10:42
pricing. I just actually think this is a

00:10:38 --> 00:10:46
really interesting topic like what

00:10:41 --> 00:10:48
fields can you think of that are

00:10:45 --> 00:10:50
actually suffering complete replacement

00:10:47 --> 00:10:52
from AI or AI agent or or thing and and

00:10:49 --> 00:10:54
this is a setup I'll warn you I have I

00:10:51 --> 00:10:56
have another extreme point of view that

00:10:53 --> 00:10:58
I'll that I'll like say afterward but

00:10:55 --> 00:11:00
like can you think of fields where this

00:10:57 --> 00:11:02
actually happening? Not completely

00:10:59 --> 00:11:05
but definitely partially because there's

00:11:01 --> 00:11:06
a lot of for example voice agents that

00:11:04 --> 00:11:08
replace people who would you know get

00:11:05 --> 00:11:10
back to customers. So there's definitely

00:11:07 --> 00:11:12
a lot of workloads that have been

00:11:09 --> 00:11:15
offloaded from the folks uh who

00:11:11 --> 00:11:18
traditionally did the job but I don't

00:11:14 --> 00:11:20
hink they're you know 100% replaced

00:11:17 --> 00:11:22
they can you know they can do something

00:11:19 --> 00:11:25
else but we are seeing headcount growth

00:11:21 --> 00:11:27
in some areas are slowing. So it's not

00:11:24 --> 00:11:29
hat existing jobs are being replaced.

00:11:26 --> 00:11:32
It's more like they're hiring net new

00:11:28 --> 00:11:34
humans slower. I think it's exactly

00:11:31 --> 00:11:36
right. I mean I think in few cases

00:11:33 --> 00:11:39
humans will get replaced by AI. In most

00:11:35 --> 00:11:41
cases, you know, two humans will get

00:11:38 --> 00:11:43
replaced, one human that is more by one

00:11:40 --> 00:11:45
human that's more productive with AI.

00:11:42 --> 00:11:47
Yeah. Or or maybe they keep the two

00:11:44 --> 00:11:48
employees and they go to three employees

00:11:46 --> 00:11:50
because now they're more productive.

00:11:47 --> 00:11:50
Right. Yeah. Right. Like it's just a

00:11:49 --> 00:11:51
really interesting question and the

00:11:49 --> 00:11:55
reason I think it's really relevant to

00:11:50 --> 00:11:57
agents is I think part of the ethos and

00:11:54 --> 00:11:59
part of the confusion around agents is

00:11:56 --> 00:12:01
this idea that we actually will develop

00:11:58 --> 00:12:03
human replacements right and and that

00:12:00 --> 00:12:04
like this this thing we called an an

00:12:02 --> 00:12:07
agent which by the way is a name for a

00:12:04 --> 00:12:08
person right before before we had AI we

00:12:06 --> 00:12:10
had people called agents and we still

00:12:07 --> 00:12:12
have all kinds of people called agents

00:12:09 --> 00:12:14
and it just doesn't seem like that's

00:12:11 --> 00:12:16
happening right like like not in the

00:12:13 --> 00:12:18
replacement sense right like you you

00:12:15 --> 00:12:20
mentioned Yoko with agents like we've

00:12:17 --> 00:12:22
always had, you know, customer support

00:12:19 --> 00:12:23
automation. You know, we've had 1-800

00:12:21 --> 00:12:25
numbers where you like press one for

00:12:22 --> 00:12:26
sales plus, you know, that's existed for

00:12:24 --> 00:12:29
a long time. This is a much better form

00:12:26 --> 00:12:31
of that. Obviously, um translation is is

00:12:28 --> 00:12:32
a great example too, Greo. Like these

00:12:30 --> 00:12:35
systems can perform translation

00:12:31 --> 00:12:36
extremely well, but you're probably not

00:12:34 --> 00:12:38
going to just stick something to chat

00:12:35 --> 00:12:39
GPT and then publish it on your website,

00:12:37 --> 00:12:42
right? Like there is actually work that

00:12:38 --> 00:12:43
needs to take place. And I think the

00:12:41 --> 00:12:46
reason for this is there's just

00:12:42 --> 00:12:48
fundamental creative work in most things

00:12:45 --> 00:12:50
that humans do, right? Like I I think

00:12:47 --> 00:12:52
from our kind of perch in Silicon

00:12:49 --> 00:12:56
Valley, we can you know forget that

00:12:51 --> 00:12:58
sometimes that that like um people like

00:12:55 --> 00:13:00
all over the country and doing all sorts

00:12:57 --> 00:13:02
of jobs actually have hard jobs and not

00:12:59 --> 00:13:03
just hard in in the sense of like

00:13:01 --> 00:13:06
someone's got to do it jobs, but hard in

00:13:02 --> 00:13:09
the sense of um it does take thinking

00:13:05 --> 00:13:11
and and and like human decision-m which

00:13:08 --> 00:13:13
I I just don't know that AI kind of has

00:13:10 --> 00:13:15
what we would think of as decision-m or

00:13:12 --> 00:13:17
intent, right? It's a system that still

00:13:14 --> 00:13:18
somebody has to push the button, right?

00:13:16 --> 00:13:19
It may be running somewhere, it may do a

00:13:17 --> 00:13:21
great job or whatever, but someone tell

00:13:18 --> 00:13:23
us to give it a prompt and and hit go.

00:13:20 --> 00:13:25
Um, and to me, that's a lot of the

00:13:22 --> 00:13:26
confusion around

00:13:24 --> 00:13:28
agents. It's right. It's like we're all

00:13:25 --> 00:13:30
thinking like at some point like a a

00:13:27 --> 00:13:31
human person with intent and creativity

00:13:29 --> 00:13:33
and thinking is going to be repled. And

00:13:30 --> 00:13:35
and I'm just not sure that even is like

00:13:32 --> 00:13:38
kind of theoretically possible, right?

00:13:34 --> 00:13:40
It's it's almost like a um it's almost

00:13:37 --> 00:13:43
like a just like a catch 22 to say to

00:13:40 --> 00:13:44
say an a you know an AI system is

00:13:42 --> 00:13:45
thinking for itself, right? because

00:13:43 --> 00:13:47
somebody has to have sort of created,

00:13:44 --> 00:13:48
you know, this this is old sci-fi like

00:13:46 --> 00:13:50
philosophy I'm getting into now. But

00:13:47 --> 00:13:51
like I actually do think it's a part a

00:13:49 --> 00:13:52
big reason for the confusion that you

00:13:50 --> 00:13:54
know we sort of experience now. It's

00:13:51 --> 00:13:56
interesting because there's two types of

00:13:53 --> 00:13:58
agent we're already talking about.

00:13:55 --> 00:14:00
There's one type where the agent is like

00:13:57 --> 00:14:03
replacing humans work with humans like

00:13:59 --> 00:14:04
do things humans can do. There's the

00:14:02 --> 00:14:07
other type of agents that's more like a

00:14:03 --> 00:14:09
low-level system processes. They work

00:14:06 --> 00:14:11
with each other. They hand hand off task

00:14:08 --> 00:14:13
to each other. To some extent agents are

00:14:10 --> 00:14:16
like technical details in the system in

00:14:12 --> 00:14:18
that way but we mean both when we talk

00:14:15 --> 00:14:20
about agents in that case is actually a

00:14:17 --> 00:14:22
difference between an agent and a

00:14:19 --> 00:14:25
function I think so I think agent will

00:14:21 --> 00:14:27
be multiple functions with LMS in the

00:14:24 --> 00:14:29
middle have a low-level agent and I'm

00:14:26 --> 00:14:31
giving this low-level agent a task and I

00:14:28 --> 00:14:33
get back a task

00:14:30 --> 00:14:37
result looks a little bit like a classic

00:14:32 --> 00:14:39
API call but with the L in the middle to

00:14:36 --> 00:14:42
make decisions on what to do for that

00:14:38 --> 00:14:43
API So, but I understood but that's sort

00:14:41 --> 00:14:45
of how this function works internally.

00:14:42 --> 00:14:47
Yes. To some degree. Yes. Right. Yeah.

00:14:44 --> 00:14:50
So, from the outside, would would I

00:14:46 --> 00:14:54
care? You wouldn't care. Um, it's like

00:14:49 --> 00:14:57
most of the time when we see AI SDRs,

00:14:53 --> 00:15:00
uh, when we talk about AISDR agents is

00:14:56 --> 00:15:03
like what we mean by that is when the

00:14:59 --> 00:15:06
agent can go to the CRM, pull something

00:15:02 --> 00:15:08
out and then filter the list, draft an

00:15:05 --> 00:15:12
email, and send the email. So that feels

00:15:07 --> 00:15:14
very um process level instead of human

00:15:11 --> 00:15:16
level. Yeah. So that's what I meant. If

00:15:13 --> 00:15:18
you don't know how this thing works

00:15:15 --> 00:15:21
internally, a classic function and agent

00:15:18 --> 00:15:23
become indistinguishable. Totally. I

00:15:20 --> 00:15:25
absolutely uh agree. But when you as a

00:15:22 --> 00:15:28
programmer when you find write the

00:15:24 --> 00:15:33
function you define agent that does do

00:15:27 --> 00:15:33
es this thing implementation.

00:15:34 --> 00:15:40
So here's one interesting thing to think

00:15:36 --> 00:15:41
about on that topic. Um I totally agree

00:15:39 --> 00:15:44
with you Guido and I think you sort of

00:15:40 --> 00:15:45
agreed too. There there's like it's

00:15:43 --> 00:15:46
really a function if you kind of just

00:15:44 --> 00:15:49
look at it that way. Sharable

00:15:45 --> 00:15:51
reproducible functions have never really

00:15:48 --> 00:15:52
been a thing. Like this has been one of

00:15:50 --> 00:15:55
these

00:15:51 --> 00:15:57
longtime you know kind of you know goals

00:15:54 --> 00:15:58
that people in the market have tried to

00:15:56 --> 00:16:00
say oh I can just write a function and

00:15:57 --> 00:16:01
then you know anybody in on earth can

00:15:59 --> 00:16:03
use it right like you know we have

00:16:00 --> 00:16:04
packages right that you know you can

00:16:02 --> 00:16:05
download a whole package with you know

00:16:03 --> 00:16:07
various functionality but literally just

00:16:04 --> 00:16:09
one function that you could share.

00:16:06 --> 00:16:12
Um, if you kind of squint a little bit,

00:16:08 --> 00:16:14
that kind of exists now with with AI,

00:16:11 --> 00:16:16
right? Because you have these models

00:16:13 --> 00:16:18
that's trained by somebody. Somebody

00:16:15 --> 00:16:20
else may download it, fine-tune it, you

00:16:17 --> 00:16:22
know, uh, train alla, you know, what

00:16:19 --> 00:16:23
ever, you know, package it up into

00:16:21 --> 00:16:25
some some new and interesting way. Then

00:16:22 --> 00:16:27
it's actually immediately available for

00:16:24 --> 00:16:28
someone else to use on hosting services

00:16:26 --> 00:16:31
or hugging face or something like that.

00:16:27 --> 00:16:32
So while while it does seem to be just

00:16:30 --> 00:16:34
an implementation detail whether you're

00:16:31 --> 00:16:36
using an LLM or not, it there is this

00:16:33 --> 00:16:38
interesting thing where the model itself

00:16:35 --> 00:16:40
takes up so much of that functionality

00:16:37 --> 00:16:42
in the in in the function and it's just

00:16:39 --> 00:16:44
a different kind of animal compared to

00:16:41 --> 00:16:46
normal code. Like it's actually more

00:16:43 --> 00:16:47
it's kind of shared by default in a way

00:16:45 --> 00:16:49
because nobody's like going in and

00:16:46 --> 00:16:51
training their own model every time

00:16:48 --> 00:16:52
they're writing um writing code. You

00:16:50 --> 00:16:53
know it's obviously heavy, right? It's

00:16:51 --> 00:16:55
harder to move around. Like there all

00:16:52 --> 00:16:56
these different characteristics from

00:16:54 --> 00:16:58
normal functions that some of which are

00:16:55 --> 00:17:00
actually very desirable like some some

00:16:57 --> 00:17:01
are kind of you know bad right

00:16:59 --> 00:17:02
characteristics you don't want but but

00:17:00 --> 00:17:04
many of them are kind of interesting and

00:17:01 --> 00:17:05
I think we'll actually see new

00:17:03 --> 00:17:07
infrastructure new dev tools kind of

00:17:04 --> 00:17:10
built around this in the long I

00:17:06 --> 00:17:12
think it would make sense I mean when if

00:17:09 --> 00:17:15
we go back in time the last time we sort

00:17:11 --> 00:17:16
of invented a major new component for

00:17:14 --> 00:17:18
building systems which was probably

00:17:15 --> 00:17:19
networking how we thought about calling

00:17:17 --> 00:17:22
a function before networking afterwards

00:17:18 --> 00:17:24
changed a lot rightly

00:17:21 --> 00:17:25
the complexities of APIs and and the

00:17:23 --> 00:17:27
infrastructure around it is completely

00:17:24 --> 00:17:29
different today. This is such a good

00:17:26 --> 00:17:30
point because now I think about it I

00:17:28 --> 00:17:33
feel like humans are just functions too.

00:17:29 --> 00:17:35
Like if you have a thought experiment

00:17:32 --> 00:17:38
and then replace LMS in the program to a

00:17:34 --> 00:17:40
human like how the kind of answers we'll

00:17:37 --> 00:17:42
give to the program is not that

00:17:39 --> 00:17:44
different from what the LM will give to

00:17:41 --> 00:17:46
the program. So if we actually all get

00:17:43 --> 00:17:49
hooked up to servers one day and can be

00:17:45 --> 00:17:51
called as a function from like lambda

00:17:48 --> 00:17:53
then I will agree that a agents have

00:17:50 --> 00:17:56
been created that that's what an agent

00:17:52 --> 00:17:57
is. Isn't mechanical turk exactly that

00:17:55 --> 00:17:59
or or maybe even your email inbox. I

00:17:56 --> 00:18:03
don't know. There's

00:17:59 --> 00:18:05
a supermarket a while back in S. So like

00:18:02 --> 00:18:07
they I think they were advertising that

00:18:04 --> 00:18:09
it's computer vision models behind the

00:18:06 --> 00:18:13
scenes identifying what you took from

00:18:08 --> 00:18:15
the supermarket. But then uh people

00:18:12 --> 00:18:17
found that they hire a lot of people

00:18:14 --> 00:18:20
behind the scenes to actually label the

00:18:16 --> 00:18:22
data in real time. So the humans in that

00:18:19 --> 00:18:24
case are the functions that today maybe

00:18:21 --> 00:18:26
secret agents, right? Replaced by LM

00:18:23 --> 00:18:27
with multi. Well, but this was exactly

00:18:25 --> 00:18:29
my point though, right? There actually

00:18:26 --> 00:18:32
is important creative work e even in a

00:18:28 --> 00:18:34
a grocery store checkout clerk,

00:18:31 --> 00:18:35
right? Like like you could you could

00:18:33 --> 00:18:37
naively think like, oh, this is an easy

00:18:34 --> 00:18:39
job. Actually, it's not an easy job at

00:18:36 --> 00:18:42
all, right? And so like you can take

00:18:38 --> 00:18:44
this work and kind of shift it, right?

00:18:41 --> 00:18:45
And you can you can squeeze it down with

00:18:43 --> 00:18:48
automation and stuff, but it never

00:18:44 --> 00:18:48
eally goes

00:18:49 --> 00:18:56
away. Usually if you introduce a brand

00:18:53 --> 00:18:58
new product category, right, you often

00:18:55 --> 00:19:00
initially put a pricing that prices

00:18:57 --> 00:19:02
against the status quo, right? Whatever

00:18:59 --> 00:19:04
you replace or augment in some cases.

00:19:01 --> 00:19:05
But let let's assume we have a a direct

00:19:03 --> 00:19:07
replacement, right? So that's I think

00:19:04 --> 00:19:10
where this idea from. Oh, this replaces

00:19:06 --> 00:19:12
a human, which it doesn't. And but if it

00:19:09 --> 00:19:15
would, right? Then you could charge uh

00:19:11 --> 00:19:17
you know x amount for it, right? Usually

00:19:14 --> 00:19:19
over time competition kicks in, right?

00:19:16 --> 00:19:21
And you effectively price by how much

00:19:18 --> 00:19:23
your competitors are charging, right?

00:19:20 --> 00:19:24
And uh and you start sort of an erosion.

00:19:22 --> 00:19:26
Then it depends on many things like how

00:19:24 --> 00:19:29
much of a mode do you have? Do you have

00:19:25 --> 00:19:31
customer lock in right and and so on

00:19:28 --> 00:19:32
long-term converge against the

00:19:30 --> 00:19:36
marginalized marginal cost of

00:19:32 --> 00:19:37
production, right? which I mean look if

00:19:35 --> 00:19:40
I look at most agents today is probably

00:19:36 --> 00:19:43
very low right any agent you can purely

00:19:39 --> 00:19:45
model in software with a couple of LLMs

00:19:42 --> 00:19:47
calls you can run at a very very low

00:19:44 --> 00:19:49
cost and the cost is is decreasing over

00:19:46 --> 00:19:52
time yeah and I would I would sort of

00:19:48 --> 00:19:56
argue that that's kind of already what's

00:19:51 --> 00:19:58
happening that that in practice most AI

00:19:55 --> 00:20:00
applications and and if we in particular

00:19:57 --> 00:20:02
if we want to call them AI agent

00:19:59 --> 00:20:04
applications you know they have their

00:20:01 --> 00:20:06
sales pitch around you should pay us X

00:20:03 --> 00:20:07
because we're saving you, you know, it's

00:20:05 --> 00:20:10
like a classic, you know, ROI

00:20:06 --> 00:20:13
calculation. Yeah. Exact. Yeah. Exactly.

00:20:09 --> 00:20:14
Value based pricing, you know, like um

00:20:12 --> 00:20:16
but in practice, I think most buyers are

00:20:14 --> 00:20:18
actually pretty sophisticated about

00:20:15 --> 00:20:19
what's going on under the hood and and

00:20:17 --> 00:20:21
to your point, they know it's like

00:20:18 --> 00:20:22
pretty simple stuff happening. And so

00:20:20 --> 00:20:24
what does it cost you to run all these

00:20:21 --> 00:20:26
GPUs and we'll pay you some premium over

00:20:23 --> 00:20:27
that. And I I think that's how a lot of

00:20:25 --> 00:20:30
vendors are pricing in practice these

00:20:26 --> 00:20:32
days. I mean long time you'd expect

00:20:29 --> 00:20:34
pretty healthy margins just like in SAS,

00:20:31 --> 00:20:36
right? which software traditionally has

00:20:33 --> 00:20:39
very good margins. It's so funny because

00:20:35 --> 00:20:41
like we always advise companies to not

00:20:38 --> 00:20:43
price based on the margin but price

00:20:40 --> 00:20:45
based on the value you add whatever that

00:20:42 --> 00:20:47
could be could be compared to other

00:20:44 --> 00:20:48
vendors on the market could could be

00:20:46 --> 00:20:51
compared to just you know what it is

00:20:48 --> 00:20:54
like building inhouse and traditionally

00:20:50 --> 00:20:56
for infra a rule of thumb like like not

00:20:53 --> 00:20:59
always the case is that if the surface

00:20:55 --> 00:21:01
is used by a human it's a per se pricing

00:20:58 --> 00:21:03
and if it's a service that's used by

00:21:00 --> 00:21:04
other machines it's a usagebased

00:21:02 --> 00:21:06
pricing.

00:21:03 --> 00:21:09
And I actually don't know where to put

00:21:05 --> 00:21:10
agent here.

00:21:08 --> 00:21:12
Well, it could be used by either, right?

00:21:09 --> 00:21:14
Agent could be using an agent or a human

00:21:11 --> 00:21:15
could be using. Look, I I think your

00:21:13 --> 00:21:18
analysis exa is exactly right. And the

00:21:14 --> 00:21:19
reality is most AI companies don't know

00:21:17 --> 00:21:22
hat value they're generating yet. Like

00:21:18 --> 00:21:24
this is like so new and so nent that

00:21:21 --> 00:21:25
it's like, hey, we're just going to

00:21:23 --> 00:21:27
charge something that we're not going to

00:21:24 --> 00:21:29
lose money on. And you know, like look

00:21:26 --> 00:21:31
in the case of Open AI, they have how

00:21:28 --> 00:21:32
many millions of users. They probably

00:21:30 --> 00:21:34
don't have a very strong sense of what

00:21:31 --> 00:21:36
hey're all using it for. And and once

00:21:33 --> 00:21:37
they do, right, and you see this more,

00:21:35 --> 00:21:39
they're starting to verticalize a bit

00:21:36 --> 00:21:41
more and and have kind of specific

00:21:38 --> 00:21:43
products for specific use cases, code

00:21:40 --> 00:21:44
obviously being the big one. Um, uh, you

00:21:42 --> 00:21:46
know, then you'll be able to see the

00:21:44 --> 00:21:49
pricing kind of catch up is is kind of

00:21:45 --> 00:21:51
my hypothesis. This reminds me, uh, in

00:21:48 --> 00:21:53
the open like the OpenAI point you

00:21:50 --> 00:21:55
brought up. I was thinking about AI

00:21:52 --> 00:21:58
companions because that's the closest to

00:21:54 --> 00:22:01
per se perceived human pricing. Like you

00:21:57 --> 00:22:02
can't charge someone to like every

00:22:00 --> 00:22:04
sentence they talk to their companion.

00:22:02 --> 00:22:06
Although some of the foundational models

00:22:03 --> 00:22:09
that there are there there are services

00:22:05 --> 00:22:12
that will charge you per for a response.

00:22:08 --> 00:22:16
I I haven't used them but they do exist.

00:22:11 --> 00:22:18
I see. Wow. Okay. So, usually it's kind

00:22:15 --> 00:22:20
of weird to charge someone uh like you

00:22:17 --> 00:22:22
know like buy tokens of how much they

00:22:19 --> 00:22:24
talk to the companion rather than like a

00:22:21 --> 00:22:26
flat monthly fee. It doesn't feel like a

00:22:23 --> 00:22:28
true friend. Exactly. It's very

00:22:25 --> 00:22:30
transactional.

00:22:27 --> 00:22:33
Look, this is all theory, right? like

00:22:29 --> 00:22:34
people love sitting around and

00:22:32 --> 00:22:37
talking, oh, we're gonna charge p per

00:22:34 --> 00:22:39
son, per task, per, you know, like

00:22:36 --> 00:22:41
world economy that we that we rescue,

00:22:38 --> 00:22:43
you know, it's like it's all made up,

00:22:40 --> 00:22:44
right? Like like I think Guido's thing

00:22:42 --> 00:22:46
was exactly right. It's like let's look

00:22:43 --> 00:22:47
at the actual technology underlying what

00:22:45 --> 00:22:49
we're calling agents right now. Where

00:22:46 --> 00:22:50
are they being deployed and why? And and

00:22:48 --> 00:22:53
honestly, the pricing, the marketing,

00:22:50 --> 00:22:54
the sales tact like like all all of this

00:22:52 --> 00:22:57
kind of follows from what they're

00:22:53 --> 00:22:57
actually selling.

00:22:57 --> 00:23:01
You just need to be selling a solution

00:22:59 --> 00:23:04
rather than a product, right? Like this

00:23:00 --> 00:23:07
this is really wellwn kind of like

00:23:03 --> 00:23:09
xpertise in enterprise go to market

00:23:06 --> 00:23:11
like you know code you can somewhat see

00:23:08 --> 00:23:13
the decoupling of price from the

00:23:10 --> 00:23:15
underlying technology now because

00:23:12 --> 00:23:18
there's very clear like it really works.

00:23:14 --> 00:23:20
There's very clear ROI to all of the um

00:23:17 --> 00:23:22
to to to people who use it. And so as a

00:23:19 --> 00:23:24
VP of engineering or a CTO you can look

00:23:21 --> 00:23:26
at this and say like okay I'm actually

00:23:23 --> 00:23:27
saving a lot of money and my guys are

00:23:25 --> 00:23:28
getting a lot more productive. I can

00:23:26 --> 00:23:30
value I can do a normal

00:23:27 --> 00:23:31
Yeah. So, you're kind of buying a

00:23:29 --> 00:23:32
solution, right? You're buying from a

00:23:30 --> 00:23:34
vendor something that solves a problem

00:23:31 --> 00:23:35
for you, which again, this is like what

00:23:33 --> 00:23:37
Microsoft, Oracle, Salesforce people

00:23:34 --> 00:23:39
have been doing forever, forever. Um,

00:23:36 --> 00:23:40
once we start to see more of that, like

00:23:38 --> 00:23:42
it's going to be these things that that

00:23:39 --> 00:23:43
kind of like become real products and

00:23:41 --> 00:23:45
kind of decouple pricing and and and

00:23:42 --> 00:23:47
look kind of like real businesses. I

00:23:44 --> 00:23:49
think I think it's dictated by the

00:23:46 --> 00:23:52
highlevel application. So, I'll give you

00:23:48 --> 00:23:54
an example. So, I'm a Pokémon Go player.

00:23:51 --> 00:23:57
Uh, so for those who have played Pokemon

00:23:53 --> 00:23:59
Go, once you collect enough Pokemons,

00:23:56 --> 00:24:02
you are out of storage in your pocket.

00:23:58 --> 00:24:05
So you need to pay extra to buy a new

00:24:02 --> 00:24:08
bag, virtual bag that you can put more

00:24:04 --> 00:24:09
Pokemon in. And as an infrastructure

00:24:07 --> 00:24:11
investor, I invest in storage

00:24:08 --> 00:24:13
businesses. And then when I look at how

00:24:10 --> 00:24:16
much I need to pay for like 30 extra

00:24:12 --> 00:24:18
Pokemon, it was thousands of times more

00:24:15 --> 00:24:20
xpensive than what storage is. So it

00:24:17 --> 00:24:22
actually reminded him surprises

00:24:19 --> 00:24:24
thousands. It's like what have to guess

00:24:21 --> 00:24:27
10 to the 15. So there's a whole price

00:24:23 --> 00:24:29
curve on Pokemon storage it turns out.

00:24:26 --> 00:24:32
But cuz this is like one JSON blob

00:24:28 --> 00:24:34
asically is your Pokemon JSON blob. I

00:24:31 --> 00:24:36
know and they charge you like $5. And

00:24:33 --> 00:24:38
then the Pokemon normal Pokemon players

00:24:35 --> 00:24:40
they wouldn't think about this like how

00:24:37 --> 00:24:42
much do storage cost right? Like a

00:24:39 --> 00:24:45
normal Pokemon player will be like oh

00:24:41 --> 00:24:47
this capability I would be happily

00:24:44 --> 00:24:50
paying thousands of more than like I

00:24:46 --> 00:24:51
were to have a S3 bucket somewhere. So

00:24:49 --> 00:24:53
ne of it is monopoly. So it's a

00:24:50 --> 00:24:55
pplication layer monopoly that you

00:24:52 --> 00:24:57
wouldn't have been able to store the

00:24:54 --> 00:24:58
Pokemon anywhere else. And two, it's a

00:24:56 --> 00:25:00
use cases. It's for a different

00:24:58 --> 00:25:02
audience. It wouldn't be asking these

00:24:59 --> 00:25:05
questions. They would be thinking about

00:25:01 --> 00:25:08
what's in that new um uh cost I will be

00:25:04 --> 00:25:10
willing to uh you know put the bill for

00:25:07 --> 00:25:12
if I were to get this value. Is it a fun

00:25:09 --> 00:25:14
game? It's a fun game. Take like a

00:25:11 --> 00:25:15
hundred more dollars. Yeah, I think

00:25:13 --> 00:25:17
that's exactly right. and and implicit

00:25:14 --> 00:25:20
is what you're saying is is this idea

00:25:16 --> 00:25:21
that like the the product or the

00:25:19 --> 00:25:22
solution has to actually work for them,

00:25:20 --> 00:25:24
right? For like a less technical person

00:25:22 --> 00:25:26
who's, you know, the person who's not

00:25:23 --> 00:25:29
going to try to like provision their own

00:25:25 --> 00:25:31
storage bucket

00:25:28 --> 00:25:33
self-hosted for Pokemon. Yeah. And it's

00:25:30 --> 00:25:35
quite defensible differentiated too

00:25:32 --> 00:25:37
because you know, you know, Pokémon Go

00:25:34 --> 00:25:39
is not open source. There's no other

00:25:36 --> 00:25:41
eplacement Pokémon Go. There's only one

00:25:38 --> 00:25:43
Pokemon Go. So there's only one place

00:25:40 --> 00:25:45
where you would be willing to pay so

00:25:42 --> 00:25:47
much money for Pokemon storage. Plus

00:25:44 --> 00:25:48
plus very strong brand plus you have a

00:25:46 --> 00:25:49
little bit of network effect because you

00:25:47 --> 00:25:51
can play together. Yeah. And then we

00:25:48 --> 00:25:53
will see the agent AI agent version of

00:25:50 --> 00:25:55
this. I can't wait to see the AI

00:25:52 --> 00:26:00
companion version of this plane storage

00:25:54 --> 00:26:00
for AI companions wardrobe.

00:26:02 --> 00:26:06
Super interesting question, right?

00:26:03 --> 00:26:09
What's the systems perspective of how an

00:26:05 --> 00:26:11
agent is built? And I personally think

00:26:08 --> 00:26:13
that

00:26:10 --> 00:26:14
architecturally there really is no

00:26:12 --> 00:26:16
difference between your typical SAS

00:26:13 --> 00:26:18
software today and agent in terms of of

00:26:15 --> 00:26:20
how you build it, right? And and let

00:26:17 --> 00:26:22
me let me explain why, right? So an

00:26:19 --> 00:26:24
agent we said you have sort of an

00:26:21 --> 00:26:25
overall loop with an LLM and prompts

00:26:23 --> 00:26:29
that feeds into itself plus plus

00:26:24 --> 00:26:30
external tool use. Um the LLM itself you

00:26:28 --> 00:26:32
probably want to run a separate

00:26:29 --> 00:26:33
infrastructure just because it's highly

00:26:31 --> 00:26:36
specialized. You need these vast GPU

00:26:32 --> 00:26:38
farms. uh you know you can't easily run

00:26:35 --> 00:26:39
today's SL LMS on a single GPU. So

00:26:37 --> 00:26:40
that's that's a very specialized

00:26:38 --> 00:26:42
infrastructure that's externally. So the

00:26:40 --> 00:26:45
LM call is

00:26:41 --> 00:26:46
external. The state management well

00:26:44 --> 00:26:48
today in SAS applications we do all the

00:26:45 --> 00:26:49
state management externally in databases

00:26:47 --> 00:26:51
or something like that. So you probably

00:26:48 --> 00:26:53
also want to externalize that, right?

00:26:50 --> 00:26:54
And then what remains is fairly

00:26:52 --> 00:26:57
lightweight logic, right? Where I

00:26:53 --> 00:26:59
basically I'm I'm taking context that I

00:26:56 --> 00:27:01
retrieve somehow from databases. I

00:26:58 --> 00:27:03
assemble that into a prompt. I run the

00:27:00 --> 00:27:06
prompt and then I occasionally invoke

00:27:02 --> 00:27:07
tools. Um maybe I do that with MCP or

00:27:05 --> 00:27:09
something like that with an external

00:27:06 --> 00:27:11
server, but the core loop is actually

00:27:08 --> 00:27:13
pretty lightweight, right? And I can run

00:27:10 --> 00:27:15
a gazillion agents on a single server.

00:27:12 --> 00:27:17
Not a gazillion, but many agents on on a

00:27:14 --> 00:27:19
single server. Um I don't need a lot of

00:27:16 --> 00:27:22
compute performance for that. Does does

00:27:18 --> 00:27:24
that sound about right? Yeah. Yeah, I

00:27:21 --> 00:27:26
totally agree. the the interesting

00:27:23 --> 00:27:28
architectural question for me has always

00:27:25 --> 00:27:30
been how do you handle the kind of

00:27:27 --> 00:27:34
non-determinism that may come from right

00:27:29 --> 00:27:36
like like many of these successful AI AI

00:27:33 --> 00:27:38
applications that we all use and love

00:27:35 --> 00:27:41
really just spit model outputs back out

00:27:37 --> 00:27:42
o the user right like a chatbot or

00:27:40 --> 00:27:44
image generator it's like hey I called

00:27:41 --> 00:27:46
the LLM here's what I got you know good

00:27:43 --> 00:27:48
luck um when you try to actually

00:27:45 --> 00:27:51
incorporate the output from an LLM into

00:27:47 --> 00:27:54
the control flow of your program like

00:27:50 --> 00:27:55
that is very hard very unsolved problem

00:27:53 --> 00:27:58
that that you know to your to your point

00:27:54 --> 00:27:59
like you know they're relatively minor

00:27:57 --> 00:28:01
architectural differences today but but

00:27:58 --> 00:28:03
like this may actually drive more

00:28:00 --> 00:28:05
significant changes in the future. I

00:28:02 --> 00:28:06
actually think the winners who will be

00:28:04 --> 00:28:09
the specialists not the foundational

00:28:06 --> 00:28:10
models is the people who will build on

00:28:08 --> 00:28:12
top of the foundational models or

00:28:09 --> 00:28:15
fine-tune the foundational models. So

00:28:11 --> 00:28:17
like a very artistic uh example of this

00:28:14 --> 00:28:20
that I've been spending the last two

00:28:16 --> 00:28:23
weeks just prompting uh GB40 their image

00:28:19 --> 00:28:25
model. It's very good at cartooning, so

00:28:22 --> 00:28:28
it it's very good at manga. It can

00:28:24 --> 00:28:31
spell, so it has a story line. But then

00:28:27 --> 00:28:32
uh I realized that there's only top two

00:28:30 --> 00:28:35
r three style it's good at. So it's

00:28:31 --> 00:28:37
good at jibli, it's good at manga, and

00:28:34 --> 00:28:40
then there's like variations of the

00:28:36 --> 00:28:43
style in that realm. So now uh where art

00:28:39 --> 00:28:46
comes in is that the market likes out of

00:28:42 --> 00:28:48
distribution art. Like everyone don't

00:28:45 --> 00:28:49
like doesn't want to see the same things

00:28:47 --> 00:28:51
over and over again because that's how

00:28:48 --> 00:28:54
they value art. like something that's

00:28:50 --> 00:28:56
different. Yeah. Ideally, maybe.

00:28:53 --> 00:28:58
Did somebody recently

00:28:55 --> 00:29:01
define art as out of distribution

00:28:57 --> 00:29:04
samples? Yeah. Yeah. Yeah. I mean, the

00:29:00 --> 00:29:06
art can be in distribution. That's pop

00:29:03 --> 00:29:08
art, right? It could also be out of

00:29:06 --> 00:29:10
distribution. That's like when

00:29:07 --> 00:29:12
impressionism, you know, came up many

00:29:09 --> 00:29:14
ears ago. Everyone was drawing

00:29:11 --> 00:29:16
impressionism. And then at the time,

00:29:13 --> 00:29:17
like the painters before, they were

00:29:15 --> 00:29:19
like, "What's wrong with your eyes? Why

00:29:16 --> 00:29:23
are you drawing blurry images?" So like

00:29:18 --> 00:29:25
styles come and go but because of that

00:29:22 --> 00:29:28
um I think it's a pushing distribution

00:29:24 --> 00:29:31
question. Um how the foundational model

00:29:27 --> 00:29:33
will never cover 100% of everything. So

00:29:30 --> 00:29:35
it's really up to the humans and

00:29:32 --> 00:29:37
specialists of the next wave to come up

00:29:34 --> 00:29:42
with the new data, new workflows, new

00:29:36 --> 00:29:42
aesthetics to push that distribution.

00:29:43 --> 00:29:48
It seems like one of the hardest things

00:29:45 --> 00:29:50
about agents today are data modes,

00:29:48 --> 00:29:51
right? In some cases, just because

00:29:49 --> 00:29:53
they're technically difficult. I'm

00:29:50 --> 00:29:54
trying to access data. An agent is

00:29:52 --> 00:29:56
trying to access data and it's just very

00:29:53 --> 00:29:58
hard to integrate with that system. In

00:29:55 --> 00:30:01
some cases, it's very deliberate, right?

00:29:57 --> 00:30:03
My iPhone, the photos are not accessible

00:30:00 --> 00:30:05
via any API because it's a walled

00:30:02 --> 00:30:08
garden. So, sort of data silos. Data

00:30:04 --> 00:30:10
silos, right? So, is is that something

00:30:07 --> 00:30:12
that's holding back agents or is making

00:30:09 --> 00:30:15
them more difficult? Or to make it even

00:30:11 --> 00:30:18
stronger, consumer companies

00:30:14 --> 00:30:19
traditionally often were opposed to

00:30:17 --> 00:30:21
ffering automated access to their

00:30:18 --> 00:30:23
services because they want the user

00:30:20 --> 00:30:25
engagement. They want the the time to

00:30:22 --> 00:30:28
advertise to the user. Will that limit

00:30:24 --> 00:30:30
how how much we can deploy agents? And

00:30:27 --> 00:30:31
would that be changed once we have the

00:30:29 --> 00:30:34
browser native agents that can browse

00:30:30 --> 00:30:36
the web and browse? Great question. Yes.

00:30:33 --> 00:30:39
Yeah. Yeah. I think Yoko is totally

00:30:35 --> 00:30:43
right. There's strong incentives for

00:30:38 --> 00:30:45
people who own data about, you know,

00:30:42 --> 00:30:47
physical entities, you know, people,

00:30:44 --> 00:30:49
businesses, etc., um, to keep it to

00:30:46 --> 00:30:50
themselves, right? Especially because

00:30:48 --> 00:30:51
they may be scared what AI is going to

00:30:49 --> 00:30:54
do to them, by the way. So, they're kind

00:30:50 --> 00:30:56
of clinging tight to what they have. Um,

00:30:53 --> 00:30:58
and and like these problems are rarely

00:30:55 --> 00:31:00
solved by defining a new protocol and

00:30:57 --> 00:31:02
just saying like, hey, if we make it

00:30:59 --> 00:31:03
easy for people to give away their core

00:31:01 --> 00:31:04
assets, they'll just do it. you know,

00:31:02 --> 00:31:07
obviously, you know, that's very

00:31:04 --> 00:31:09
unlikely to work, but someone eventually

00:31:06 --> 00:31:10
will solve this by saying, "Hey, if your

00:31:08 --> 00:31:12
data is publicly visible, we're going to

00:31:09 --> 00:31:13
get it." You know, it's like, by the

00:31:11 --> 00:31:15
way, it's not actually your data. It's

00:31:12 --> 00:31:16
data about me. So, like, so like why

00:31:14 --> 00:31:18
should you be holding on to it? Yeah.

00:31:15 --> 00:31:20
Actually, I feel like the new

00:31:17 --> 00:31:22
advancement in models may just change

00:31:19 --> 00:31:25
the data mode. Uh, kind of to the point

00:31:21 --> 00:31:28
of like today, uh, web browsing using an

00:31:24 --> 00:31:30
agent doesn't work super well. It's very

00:31:27 --> 00:31:32
slow. It's very clunky. You have to try

00:31:29 --> 00:31:34
it multiple times for it to do any task.

00:31:31 --> 00:31:36
But imagine if we have foundational

00:31:34 --> 00:31:40
model capability of giving an agent

00:31:35 --> 00:31:42
ability to go to any website loging as a

00:31:39 --> 00:31:45
human. Uh we'll table that one. I don't

00:31:41 --> 00:31:48
know how agent identity works yet. Uh or

00:31:44 --> 00:31:50
go you know go SSH into a server like

00:31:47 --> 00:31:53
xecute certain commands or like spin up

00:31:49 --> 00:31:56
a virtual machine for a mobile or access

00:31:52 --> 00:31:59
a device far device farm to play Pokemon

00:31:55 --> 00:32:02
Go. like maybe those are the the data

00:31:58 --> 00:32:04
traditionally only available to humans

00:32:01 --> 00:32:07
under that account now may be available

00:32:03 --> 00:32:08
to agents. There's also the opposite

00:32:06 --> 00:32:10
that could happen right that basically

00:32:07 --> 00:32:13
all the consumer sites are starting with

00:32:10 --> 00:32:15
more and more complex complex anti- aent

00:32:12 --> 00:32:17
captures trying to keep out their agents

00:32:14 --> 00:32:19
because they only want the humans that

00:32:16 --> 00:32:21
have attention to come to those sides. I

00:32:18 --> 00:32:24
recently did use one of these deep

00:32:20 --> 00:32:26
research tools, one of the major LLMs

00:32:23 --> 00:32:27
and one of the steps if you look through

00:32:25 --> 00:32:29
all the steps I went through was like

00:32:26 --> 00:32:30
you know trying to to see how I can get

00:32:28 --> 00:32:31
around the capture mechanism for a

00:32:29 --> 00:32:33
site that was an actual reasoning step

00:32:30 --> 00:32:35
right where I basically felt it know

00:32:32 --> 00:32:37
hat information I wanted and it was

00:32:34 --> 00:32:39
blocked from accessing it. So is that

00:32:36 --> 00:32:43
you know how dystopian is the future

00:32:38 --> 00:32:44
going to be here? It solved it actually.

00:32:42 --> 00:32:47
I mean it's so interesting. So, like

00:32:43 --> 00:32:48
here here's like a really early ML, you

00:32:46 --> 00:32:49
know, really early machine learning

00:32:47 --> 00:32:51
example of this. I don't know if you

00:32:48 --> 00:32:54
guys remember when Gmail first

00:32:50 --> 00:32:56
implemented ads. It was a big

00:32:53 --> 00:32:58
controversy because they basically said,

00:32:55 --> 00:33:00
"Okay, we're not going to read your

00:32:57 --> 00:33:02
emails, but our algorithms are going to

00:32:59 --> 00:33:04
read your emails and we're going to, you

00:33:01 --> 00:33:06
know, suggest ads that you should watch

00:33:03 --> 00:33:09
ba, you know, or click on based based on

00:33:05 --> 00:33:11
that." Um, we all sort of, I think, just

00:33:08 --> 00:33:13
forgot and got got used to it. I still

00:33:10 --> 00:33:15
think we don't love the idea, but we

00:33:12 --> 00:33:17
kind of lived with it. But um some of

00:33:14 --> 00:33:19
the data providers reacted by removing

00:33:16 --> 00:33:21
data from email, right? So Amazon

00:33:18 --> 00:33:23
famously now when you order something,

00:33:20 --> 00:33:24
they send you a confirmation email that

00:33:22 --> 00:33:26
says like, hey, you just ordered

00:33:23 --> 00:33:27
something, you know, click here to find

00:33:25 --> 00:33:28
out what you ordered, when it's going to

00:33:26 --> 00:33:30
arrive, or any information you might

00:33:27 --> 00:33:32
want to know. And and so like that

00:33:29 --> 00:33:34
actually did happen in practice in that

00:33:31 --> 00:33:37
example that the major data holders kind

00:33:33 --> 00:33:38
of found ways to withhold it. Um it'll

00:33:36 --> 00:33:40
be interesting to see whether that's

00:33:37 --> 00:33:44
possible now. But that same data is

00:33:39 --> 00:33:47
cripted on the client side like from um

00:33:43 --> 00:33:48
the ad networks I install. Oh, sure.

00:33:46 --> 00:33:50
Yeah. Yeah. Yeah. Yeah. There's always

00:33:47 --> 00:33:53
ome other way. Yeah. Not maybe exactly

00:33:49 --> 00:33:55
the same, but pretty good proxy. Yeah.

00:33:52 --> 00:33:57
It may be that it's much harder to tell

00:33:54 --> 00:34:00
the difference between an LLM and a

00:33:56 --> 00:34:02
human than a classic, you know, sort of

00:33:59 --> 00:34:06
API call mechanism and a human. That may

00:34:01 --> 00:34:06
be that may change the dynamics.

00:34:07 --> 00:34:11
Look, I think the the positive vision is

00:34:09 --> 00:34:14
that in two

00:34:10 --> 00:34:17
years we figured out how an agent

00:34:13 --> 00:34:19
working on my behalf can use most of the

00:34:16 --> 00:34:21
tools that I have access to. I think

00:34:18 --> 00:34:22
it's also clear what are all the pieces

00:34:20 --> 00:34:24
that are missing for that. Right? We

00:34:21 --> 00:34:26
have not figured out security,

00:34:23 --> 00:34:27
authentication, access control for

00:34:25 --> 00:34:30
agents work on my behalf yet, right? We

00:34:26 --> 00:34:32
have not figured out how data retention

00:34:29 --> 00:34:34
works. you know, we have not figured out

00:34:31 --> 00:34:36
he relationship with consumer websites

00:34:33 --> 00:34:39
that potentially want to to block that

00:34:35 --> 00:34:41
agent. Um, but if you had that, it could

00:34:38 --> 00:34:45
make many tasks much much easier, right?

00:34:41 --> 00:34:47
Today, if I have data sitting, say my

00:34:44 --> 00:34:49
Google Drive or so, right? How easy I

00:34:46 --> 00:34:51
can reason about that data versus other

00:34:48 --> 00:34:52
data that's in more fragmented um

00:34:50 --> 00:34:54
sources, it makes an incredible

00:34:51 --> 00:34:56
difference, right? So, they I think

00:34:53 --> 00:34:58
that's that's the bull case, right?

00:34:55 --> 00:34:59
where where you have agents that can

00:34:57 --> 00:35:00
take all the data that you can access,

00:34:58 --> 00:35:02
they can access it on your behalf and

00:34:59 --> 00:35:03
perform tasks on your behalf, right? And

00:35:01 --> 00:35:06
save you a ton of time, right? It could

00:35:02 --> 00:35:08
make you uh depending what you do like

00:35:05 --> 00:35:09
you know multiple times as productive as

00:35:07 --> 00:35:11
you are today. My answer to that is

00:35:08 --> 00:35:13
actually different modalities on the

00:35:10 --> 00:35:15
foundational model. Today it's still

00:35:12 --> 00:35:17
very much text based and that worked

00:35:14 --> 00:35:20
really well for coding and textbased

00:35:16 --> 00:35:22
tests. But then for more visual first

00:35:19 --> 00:35:24
ests, there's just no onetoone mapping.

00:35:21 --> 00:35:25
uh even for web browsing it's like a

00:35:23 --> 00:35:28
very clunky experience of take

00:35:24 --> 00:35:30
screenshot every couple seconds and send

00:35:27 --> 00:35:32
it back to the foundational model. Um so

00:35:30 --> 00:35:35
I will actually bet on multimodality

00:35:32 --> 00:35:37
when it comes to like if we train more

00:35:34 --> 00:35:40
model uh training like the model with

00:35:36 --> 00:35:42
like different traces of like uh

00:35:39 --> 00:35:44
clicking on buttons on the website

00:35:41 --> 00:35:48
navigating the web uh using different

00:35:43 --> 00:35:50
devices drawing um producing vector art.

00:35:47 --> 00:35:52
I think there will be net new things

00:35:49 --> 00:35:55
that the model could unlock on the agent

00:35:51 --> 00:35:56
level. You can you can probably guess my

00:35:54 --> 00:35:58
answer. If we don't use the word agent

00:35:55 --> 00:35:59
wo years from now or five years from

00:35:57 --> 00:36:04
now, I think that's a that's a huge win.

00:35:59 --> 00:36:07
Um there there's actually a a a fun

00:36:03 --> 00:36:09
paper put out by um some folks at

00:36:06 --> 00:36:11
Colombia, I think, called AI is normal

00:36:08 --> 00:36:13
technology. And they sort of make the

00:36:10 --> 00:36:15
argument that the the there's a false

00:36:12 --> 00:36:17
dichotomy out there that AI is either

00:36:14 --> 00:36:18
going to bring about utopia or dystopia.

00:36:16 --> 00:36:20
meaning like everything's going to be

00:36:17 --> 00:36:21
amazing because we have AI or

00:36:19 --> 00:36:23
everything's going to be terrible. Like

00:36:20 --> 00:36:24
this is kind of the national discourse.

00:36:22 --> 00:36:28
But if you just think of it as normal,

00:36:23 --> 00:36:29
right, like water or electricity or the

00:36:27 --> 00:36:30
internet or or things like that, like I

00:36:28 --> 00:36:32
think that's the world we're kind of

00:36:29 --> 00:36:36
headed towards. An agent is this kind of

00:36:31 --> 00:36:37
like, you know, way to help us get

00:36:35 --> 00:36:39
here. And and and that and so that

00:36:36 --> 00:36:40
's my goal. I mean, the stuff is

00:36:38 --> 00:36:41
just incredibly powerful. We understand

00:36:39 --> 00:36:43
how to use it. We understand the use

00:36:40 --> 00:36:45
cases and we're kind of, you know, we're

00:36:42 --> 00:36:48
kind of putting it to use for us.

00:36:44 --> 00:36:48
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
