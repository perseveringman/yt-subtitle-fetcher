---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "k6DM-sgYu8M"
title: "GPT-5 and Agents Breakdown – w/ OpenAI Researchers Isa Fulford & Christina Kim"
video_url: "https://www.youtube.com/watch?v=k6DM-sgYu8M"
thumbnail_url: "https://i.ytimg.com/vi/k6DM-sgYu8M/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=k6DM-sgYu8M"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-08-08T03:00:06.000Z"
upload_date: "2025-08-08"
duration_seconds: 2567
duration_human: "42:47"
view_count: 15442
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:40:54.319Z"
---

# GPT-5 and Agents Breakdown – w/ OpenAI Researchers Isa Fulford & Christina Kim

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=k6DM-sgYu8M
- video_id: k6DM-sgYu8M
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-08-08T03:00:06.000Z
- upload_date: 2025-08-08
- duration: 42:47
- view_count: 15442
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

ChatGPT-5 just launched, marking a major milestone for OpenAI and the entire AI ecosystem.

Fresh off today's live stream, a16'z Erik Torenberg was joined in the studio by  three people who played key roles in making this model a reality:

- Christina Kim, Researcher at OpenAI, who leads the core models team on post-training
- Isa Fulford, Researcher at OpenAI, who leads deep research and the ChatGPT agent team on post-training
- Sarah Wang, General Partner at a16z, who helped lead our investment in OpenAI since 2021

They discuss what’s actually new in ChatGPT-5—from major leaps in reasoning, coding, and creative writing to meaningful improvements in trustworthiness, behavior, and post-training techniques.

We also discuss:
- How GPT-5 was trained, including RL environments, and why data quality matters more than ever
- The shift toward agentic workflows—what “agents” really are, why async matters, and how it’s empowering a new golden age of the “ideas guy”
- What GPT-5 means for builders, startups, and the broader AI ecosystem going forward

Whether you're an AI researcher, founder, or curious user, this is the deep-dive conversation you won't want to miss.

Timecodes:
00:00 ChatGPT Origins
02:13 Model Capabilities & Coding Improvements
04:11 Model Behaviors & Sycophancy
06:15 Usage, Pricing & Startup Opportunities
08:03 Broader Impact & AGI Discourse
16:59 Creative Writing & Model Progress
31:50 Training, Data & Reflections
36:25 Company Growth & Culture
41:39 Closing Thoughts 

Resources:
Find Christina on X: https://x.com/christinahkim
Find Isa on X: https://x.com/isafulf
Find Sarah on X: https://x.com/sarahdingwang

Stay Updated: 
Let us know what you think: https://ratethispodcast.com/a16z 
Find a16z on Twitter: https://twitter.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Subscribe on your favorite podcast app: https://a16z.simplecast.com/ 
Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details, please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
I mean, I think it's pretty unique at

00:00:02 --> 00:00:07
OpenAI to be able to work on something

00:00:04 --> 00:00:08
that's so generally useful. I mean, it's

00:00:06 --> 00:00:10
like everything they tell you not to do

00:00:07 --> 00:00:11
at a startup. It's just like your user

00:00:09 --> 00:00:12
is anyone.

00:00:10 --> 00:00:13
>> You just kind of take it for granted

00:00:11 --> 00:00:14
that you literally have this like wizard

00:00:12 --> 00:00:15
in your pocket.

00:00:13 --> 00:00:18
>> We're trying to make the most capable

00:00:14 --> 00:00:19
thing. And we're also trying to have as

00:00:17 --> 00:00:21
make it useful to as many people as

00:00:18 --> 00:00:22
possible and accessible to as many

00:00:20 --> 00:00:24
people as possible.

00:00:21 --> 00:00:26
>> If this exponential is true, like

00:00:23 --> 00:00:28
there's not really much else I want to

00:00:25 --> 00:00:30
spend my life working on. I think we

00:00:27 --> 00:00:30
hear this with GBC 5 internally when

00:00:29 --> 00:00:32
people are testing it. They're like,

00:00:29 --> 00:00:33
"Oh, I thought I asked like a really

00:00:31 --> 00:00:35
hard question." I feel like a little bit

00:00:32 --> 00:00:37
insulted that it thought for like 2

00:00:34 --> 00:00:40
seconds or like when it doesn't even

00:00:36 --> 00:00:40
want to think at all.

00:00:40 --> 00:00:46
>> So, slow news day. Uh, not much going on

00:00:43 --> 00:00:47
for you guys. Thank you for uh thank you

00:00:45 --> 00:00:49
for coming on. No, obviously uh you

00:00:46 --> 00:00:51
Tina, you were just on the on the live

00:00:48 --> 00:00:52
stream. We're recording uh day of.

00:00:50 --> 00:00:52
Congratulations.

00:00:51 --> 00:00:54
>> Thank you.

00:00:51 --> 00:00:56
>> Um for those who are unfamiliar, why

00:00:53 --> 00:00:57
don't you introduce uh what you guys do

00:00:55 --> 00:00:59
at OpenA?

00:00:56 --> 00:01:01
>> Yeah. Uh I'm Christina. I lead uh the

00:00:58 --> 00:01:03
core models team on post training.

00:01:00 --> 00:01:05
>> I'm Issa. Um I lead the deep research

00:01:02 --> 00:01:06
like chat GPT agent team on post

00:01:04 --> 00:01:07
raining.

00:01:05 --> 00:01:09
>> And and Tina, you've been here for or

00:01:06 --> 00:01:10
you've both been here for for for a

00:01:08 --> 00:01:11
while now. Why don't you do you know we

00:01:09 --> 00:01:12
want you to give a little bit of your

00:01:10 --> 00:01:14
history at the company?

00:01:11 --> 00:01:16
>> Yeah. Uh I've been on OpenAI for about

00:01:13 --> 00:01:19
four years now. Um I originally worked

00:01:15 --> 00:01:21
on WebGPT which was the original uh

00:01:18 --> 00:01:23
first LLM using tool use. Um but it was

00:01:20 --> 00:01:24
just one question. So the model learned

00:01:22 --> 00:01:26
how to use the browser tool but you only

00:01:24 --> 00:01:27
asked one question you got to answer

00:01:25 --> 00:01:29
back. And then we kind of just had this

00:01:26 --> 00:01:30
realization like oh you normally when

00:01:28 --> 00:01:32
you have questions you have more

00:01:29 --> 00:01:35
questions after that. And so we started

00:01:31 --> 00:01:38
building this chatbot. Um and then

00:01:34 --> 00:01:40
that's what eventually became chat GPT.

00:01:37 --> 00:01:42
>> And it's what have been the reactions so

00:01:39 --> 00:01:43
far? Uh you know it's only been a few

00:01:41 --> 00:01:45
hours but in your live stream like what

00:01:42 --> 00:01:47
are any reflections any what can you uh

00:01:44 --> 00:01:49
what can you tell us the day of?

00:01:46 --> 00:01:51
>> I'm honestly really excited. I think

00:01:48 --> 00:01:52
that obviously we have some great email

00:01:50 --> 00:01:54
numbers and numbers are always really

00:01:51 --> 00:01:55
exciting, but I think the thing I'm like

00:01:53 --> 00:01:57
really excited about this model is just

00:01:54 --> 00:01:59
it's way more useful like in cross like

00:01:56 --> 00:02:01
all the things that people actually use

00:01:58 --> 00:02:03
chat for. Um, and it's not just like and

00:02:00 --> 00:02:05
it's I think the email numbers look

00:02:02 --> 00:02:06
good, but then also like the way when

00:02:04 --> 00:02:08
people use it, I think we'll they'll

00:02:05 --> 00:02:10
notice a quite a bit big of a difference

00:02:07 --> 00:02:11
when the utility of it

00:02:09 --> 00:02:12
>> and and say more about these. What what

00:02:10 --> 00:02:14
are you noticing? What are you seeing?

00:02:11 --> 00:02:16
What what are you hoping?

00:02:13 --> 00:02:17
>> Yeah, I think for me the two top I mean

00:02:15 --> 00:02:19
this is my personal use cases. I use it

00:02:16 --> 00:02:20
for coding and writing all the time and

00:02:18 --> 00:02:22
it's just a huge step change.

00:02:19 --> 00:02:24
>> Yeah. Sarah, you you've been involved in

00:02:21 --> 00:02:27
the in helping lead our investment

00:02:23 --> 00:02:28
since since 2021. When you uh either

00:02:26 --> 00:02:30
share more or tea up how how you've been

00:02:28 --> 00:02:32
thinking about uh sort of this as it

00:02:29 --> 00:02:33
relates to to coding or more broadly.

00:02:31 --> 00:02:35
>> Yeah. Well, well, actually just on the

00:02:32 --> 00:02:38
topic of coding, it was a huge deal to

00:02:34 --> 00:02:40
have Michael Troll come on there and um

00:02:37 --> 00:02:42
not only showcase the uh the

00:02:39 --> 00:02:44
capabilities but also say this is the

00:02:41 --> 00:02:46
best coding mark uh model in the market.

00:02:43 --> 00:02:49
Um and so just curious to the extent

00:02:45 --> 00:02:51
hat you can share what did you do

00:02:48 --> 00:02:53
differently to get these results?

00:02:50 --> 00:02:55
>> Yeah, I think huge shout out to the team

00:02:52 --> 00:02:56
especially Michelle Poker like me. I

00:02:54 --> 00:02:59
think

00:02:55 --> 00:03:00
>> to get these things right and like email

00:02:58 --> 00:03:02
numbers is one thing like I said but to

00:02:59 --> 00:03:04
get the actual usability and like how

00:03:01 --> 00:03:07
great it is at coding I think it's takes

00:03:03 --> 00:03:09
a lot of detail and care. Um I think the

00:03:06 --> 00:03:10
team put a lot of effort into data sets

00:03:08 --> 00:03:13
and thinking about the reward models for

00:03:09 --> 00:03:14
this. Um but I think it's just

00:03:12 --> 00:03:16
>> literally just caring. so much about

00:03:13 --> 00:03:18
getting coding working well

00:03:15 --> 00:03:20
>> and and maybe actually just to double

00:03:17 --> 00:03:22
click on front-end web development. I

00:03:19 --> 00:03:24
mean we've seen as sort of investors in

00:03:21 --> 00:03:28
the ecosystem that's obviously taken off

00:03:23 --> 00:03:30
in the last 6 to 8 months. Um if you

00:03:27 --> 00:03:33
could pinpoint uh the improvement to

00:03:29 --> 00:03:35
that piece specifically is it around is

00:03:32 --> 00:03:38
it more around aesthetics um or is there

00:03:34 --> 00:03:40
sort of another capability um leap

00:03:37 --> 00:03:42
forward in terms of what we can do with

00:03:39 --> 00:03:43
front-end um web development? I think

00:03:41 --> 00:03:45
there's going to be a lot more we can do

00:03:42 --> 00:03:46
with front end. I think the way we've

00:03:44 --> 00:03:48
gotten this big leap, I mean, if you

00:03:45 --> 00:03:50
compare to 03's front end coding

00:03:47 --> 00:03:52
capability, this is just totally next

00:03:49 --> 00:03:53
level. Um, feels very different. And I

00:03:51 --> 00:03:55
think it kind of just goes back to what

00:03:52 --> 00:03:56
I was saying, the team just really cared

00:03:54 --> 00:03:58
about like nailing front end. Um, and

00:03:55 --> 00:03:59
that means like getting the best data,

00:03:57 --> 00:04:02
like thinking about the aesthetics of

00:03:58 --> 00:04:04
the model and all of these things. Um, I

00:04:01 --> 00:04:05
think it's just all those details that

00:04:03 --> 00:04:07
are really coming together and making

00:04:04 --> 00:04:09
the model like great at front end.

00:04:06 --> 00:04:11
>> Really exciting to see. Loved loved the

00:04:08 --> 00:04:13
demos in the in the live stream, too. I

00:04:10 --> 00:04:14
wanted to uh ask about model behaviors

00:04:12 --> 00:04:16
because I know you you worked on that

00:04:13 --> 00:04:19
oo. Um but how did you guys think about

00:04:15 --> 00:04:21
hat for GBT5 and there are a lot of

00:04:18 --> 00:04:23
things that you know um we've talked

00:04:20 --> 00:04:25
about in prior models of like syncopinsy

00:04:22 --> 00:04:27
and characteristics like that. Um how

00:04:24 --> 00:04:29
did you guys think about for this? What

00:04:26 --> 00:04:30
did you guys change or tweak?

00:04:28 --> 00:04:32
>> Yeah, the design of this model has been

00:04:30 --> 00:04:34
very very intentional for model behavior

00:04:31 --> 00:04:35
especially with the sick and fency

00:04:33 --> 00:04:37
issues that we had like a few months ago

00:04:34 --> 00:04:39
with for um and we've just spent a lot

00:04:36 --> 00:04:41
of time thinking about like yeah what is

00:04:38 --> 00:04:43
the ideal behavior? Um, and I think for

00:04:40 --> 00:04:45
post training, what's really or one of

00:04:42 --> 00:04:47
the reasons I really like post training

00:04:44 --> 00:04:48
is it feels more like an art than maybe

00:04:46 --> 00:04:49
ven like other areas of research

00:04:47 --> 00:04:50
because you kind of have to make all

00:04:48 --> 00:04:52
these trade-offs, right? Like you have

00:04:49 --> 00:04:54
to think about like for my rewards like

00:04:51 --> 00:04:55
all these different rewards I could be

00:04:53 --> 00:04:57
optimizing during the run. Like how do

00:04:54 --> 00:04:59
like how does that trade off against it,

00:04:56 --> 00:05:01
right? Like I want the assistant to be

00:04:58 --> 00:05:03
like super like helpful and engaging,

00:05:00 --> 00:05:05
but maybe that's like a bit too engaging

00:05:02 --> 00:05:07
and getting too engaging gets to the

00:05:04 --> 00:05:09
overly affusive like assistant that we

00:05:06 --> 00:05:10
have. Um, so I think it's really like a

00:05:08 --> 00:05:12
balancing act of trying to figure out

00:05:09 --> 00:05:13
like what are like the characteristics

00:05:11 --> 00:05:15
and like what do we want this model to

00:05:12 --> 00:05:17
actually feel like and I think it we

00:05:14 --> 00:05:18
re really excited with GPT5 because

00:05:16 --> 00:05:21
it's kind of a time to like reset and

00:05:17 --> 00:05:22
rethink about um especially since it's

00:05:20 --> 00:05:24
o easy to make something I think very

00:05:22 --> 00:05:26
engaging in the sense that in in an

00:05:23 --> 00:05:28
unhealthy way how can we make this like

00:05:25 --> 00:05:30
a very healthy helpful assistant

00:05:27 --> 00:05:31
>> say more about how you achieved such

00:05:29 --> 00:05:33
kind of reduction in either

00:05:30 --> 00:05:34
hallucinations but but also also

00:05:32 --> 00:05:35
deception what's the relationship

00:05:33 --> 00:05:38
between those

00:05:34 --> 00:05:40
>> I guess I for me I find hallucinations,

00:05:37 --> 00:05:41
deceptions like pretty related. So the

00:05:39 --> 00:05:43
model um and we kind of saw this a lot

00:05:40 --> 00:05:44
with the reasoning models like they the

00:05:42 --> 00:05:46
reasoning model would understand that it

00:05:43 --> 00:05:47
didn't have some ability but then it

00:05:45 --> 00:05:49
still really wanted to respond. I think

00:05:46 --> 00:05:50
if we really baked it into the models

00:05:48 --> 00:05:52
that they want to be helpful and so

00:05:49 --> 00:05:53
they're like whatever I can say to be

00:05:51 --> 00:05:54
helpful in that moment. Um and that's

00:05:52 --> 00:05:56
kind of what we consider for like

00:05:53 --> 00:05:58
deception versus hallucination.

00:05:55 --> 00:06:00
Sometimes the model like literally uh it

00:05:57 --> 00:06:02
seems that they will just say something

00:05:59 --> 00:06:03
quickly. Um, and we kind of see a lot of

00:06:01 --> 00:06:05
this rejunction with the thinking with

00:06:02 --> 00:06:08
when the models are able to think step

00:06:04 --> 00:06:10
by step, they actually can like pause

00:06:07 --> 00:06:11
and before blurting out an answer is

00:06:09 --> 00:06:12
kind of what I it feels like with a lot

00:06:10 --> 00:06:13
of the previous models for

00:06:11 --> 00:06:15
hallucinations.

00:06:12 --> 00:06:16
>> Over the next few weeks as as you're

00:06:14 --> 00:06:18
valuating usage, what are the biggest

00:06:15 --> 00:06:20
questions that you're having or that

00:06:17 --> 00:06:21
you're sort of anticipating uh being

00:06:19 --> 00:06:23
potentially answered?

00:06:20 --> 00:06:25
>> I'm just really curious to see how all

00:06:22 --> 00:06:27
of these things um reflect in usage,

00:06:24 --> 00:06:28
right? Like I think coding is way way

00:06:26 --> 00:06:29
better. Like what does this actually

00:06:27 --> 00:06:31
unlock for people? And I think we're

00:06:28 --> 00:06:32
ally excited to be offering these

00:06:30 --> 00:06:33
models at the price points that we have

00:06:31 --> 00:06:36
because I think this actually like

00:06:32 --> 00:06:37
unlocks like a lot more use cases that

00:06:35 --> 00:06:40
really weren't there before. Maybe like

00:06:36 --> 00:06:42
previous competitor models were are good

00:06:39 --> 00:06:44
at coding but the price point is not as

00:06:41 --> 00:06:45
exciting. And so I think with this

00:06:43 --> 00:06:47
number of capabilities that we have in

00:06:44 --> 00:06:48
this model and the price point I'm kind

00:06:46 --> 00:06:50
of excited to see like all the new

00:06:47 --> 00:06:51
startups and like developers like doing

00:06:49 --> 00:06:53
things on top of it.

00:06:50 --> 00:06:56
>> Yeah, we're excited too. But by the way,

00:06:52 --> 00:06:58
just on the topic of usage, um you

00:06:55 --> 00:07:00
obviously have a lot of products with a

00:06:57 --> 00:07:02
ton of usage already and since we have

00:06:59 --> 00:07:06
one of the uh Deep Research gurus here

00:07:01 --> 00:07:09
too, um how did Deep Research Chat GBT

00:07:05 --> 00:07:11
operator sort of your existing products

00:07:08 --> 00:07:13
inform how you went about approaching

00:07:10 --> 00:07:15
GBT5?

00:07:12 --> 00:07:17
>> One thing that's interesting is with

00:07:14 --> 00:07:18
reinforcement learning, um training a

00:07:16 --> 00:07:20
model to be good at a specific

00:07:17 --> 00:07:23
apability is very data efficient. you

00:07:20 --> 00:07:26
don't need that many examples to teach

00:07:22 --> 00:07:28
it something new. And so the way that we

00:07:25 --> 00:07:29
think about it on my team is we're

00:07:27 --> 00:07:32
trying to push capabilities and things

00:07:28 --> 00:07:35
that are like useful to people. So like

00:07:31 --> 00:07:37
deep research it was the first model to

00:07:34 --> 00:07:39
do like very comprehensive browsing. But

00:07:36 --> 00:07:41
hen when 03 came out, it was also good

00:07:38 --> 00:07:43
at comprehensive browsing. And that's

00:07:40 --> 00:07:46
because we're able to um take the data

00:07:42 --> 00:07:48
sets that we've created for um the you

00:07:45 --> 00:07:50
know Frontier agent models and then

00:07:47 --> 00:07:51
contribute it back to the um frontier

00:07:49 --> 00:07:53
easoning models. So we always want to

00:07:50 --> 00:07:55
make sure that the capabilities that um

00:07:52 --> 00:07:57
we're pushing with agents makes it into

00:07:54 --> 00:07:58
the flagship models as well.

00:07:56 --> 00:08:00
>> Yeah, that's great. Very

00:07:58 --> 00:08:01
self-reinforcing.

00:07:59 --> 00:08:04
>> Uh you mentioned all the the startups

00:08:00 --> 00:08:05
that you're excited to see come as like

00:08:03 --> 00:08:07
flush out what you think that that could

00:08:04 --> 00:08:08
look like or even just high level some

00:08:06 --> 00:08:10
opportunities you're you're more excited

00:08:07 --> 00:08:12
about because of this. I mean like

00:08:09 --> 00:08:14
people always say vibe coding. I think

00:08:11 --> 00:08:16
basically like non-technical people like

00:08:13 --> 00:08:17
have such a powerful tool at their hands

00:08:15 --> 00:08:18
and I think really you just need some

00:08:16 --> 00:08:20
good idea and like you're not going to

00:08:18 --> 00:08:21
be limited by the fact that like you

00:08:19 --> 00:08:23
don't know how to code something like

00:08:20 --> 00:08:25
you saw two of our demos which were

00:08:22 --> 00:08:26
front-end coding or in the beginning and

00:08:24 --> 00:08:28
that's just literally took minutes. I'

00:08:25 --> 00:08:29
lit I think that would have honestly

00:08:27 --> 00:08:31
taken me like a week to actually build

00:08:28 --> 00:08:32
like fully interactive. Um, and so I

00:08:30 --> 00:08:33
think we're just going to have a lot

00:08:31 --> 00:08:36
more I would expect like maybe a lot

00:08:32 --> 00:08:37
more like indie type of like businesses

00:08:35 --> 00:08:38
built around this because of the fact

00:08:36 --> 00:08:41
hat like you just need to have the

00:08:37 --> 00:08:42
idea, write a simple prompt and then you

00:08:40 --> 00:08:44
get the full-fledged app.

00:08:41 --> 00:08:44
>> It's the world of the ideas guy.

00:08:43 --> 00:08:45
>> Yeah, it's our time.

00:08:43 --> 00:08:46
>> I think so.

00:08:44 --> 00:08:48
>> Yeah, finally.

00:08:45 --> 00:08:52
>> Yeah. Um, how about in the in the

00:08:47 --> 00:08:54
broader sort of uh AGI discourse like

00:08:51 --> 00:08:56
what is this um what what does this mean

00:08:53 --> 00:08:58
or accelerate or or not or like how do

00:08:55 --> 00:09:00
we think about sort of the broader um AI

00:08:57 --> 00:09:02
discourse in terms of what does GBT5

00:08:59 --> 00:09:03
mean here or or change the conversation

00:09:01 --> 00:09:06
in any sort of way?

00:09:02 --> 00:09:08
>> I think with GBT5 um it kind of it's

00:09:05 --> 00:09:09
like a new it's obviously state of the

00:09:07 --> 00:09:11
art and like all the things we talked

00:09:08 --> 00:09:12
about. Um, but I think if you're showing

00:09:10 --> 00:09:14
that like, you know, we can continue

00:09:11 --> 00:09:16
pushing the frontier here. And I feel

00:09:13 --> 00:09:17
ike there's always people like, oh,

00:09:15 --> 00:09:19
we're hitting a wall, like things aren't

00:09:16 --> 00:09:21
actually improving. Um, and I think the

00:09:18 --> 00:09:22
interesting thing is I feel like we've

00:09:20 --> 00:09:25
almost saturated a lot of these evals.

00:09:21 --> 00:09:27
And the real like metric of like how

00:09:24 --> 00:09:28
good are our models are getting is I

00:09:26 --> 00:09:30
think going to be like usage, right?

00:09:27 --> 00:09:31
Like who what are the new use cases that

00:09:29 --> 00:09:33
are being unlocked and like what how

00:09:30 --> 00:09:35
like how many more people are using this

00:09:32 --> 00:09:36
in their daily lives to help them like

00:09:34 --> 00:09:38
across multiple tasks. So, I feel like

00:09:35 --> 00:09:40
that's actually like the ultimate usage

00:09:37 --> 00:09:43
in terms like that I'm excited about for

00:09:39 --> 00:09:44
terms of like are we getting to AGI.

00:09:42 --> 00:09:46
>> I had a question about that just because

00:09:43 --> 00:09:48
I think Greg made this comment about how

00:09:45 --> 00:09:50
he was comparing the last model to this

00:09:48 --> 00:09:52
model and that the benchmark went from

00:09:49 --> 00:09:55
98 to 99. He's like clearly we've

00:09:52 --> 00:09:56
saturated the benchmarks. Um at least on

00:09:54 --> 00:09:58
that that front which I think is

00:09:55 --> 00:10:00
instruction following. Um what

00:09:57 --> 00:10:01
benchmarks do you pay attention to? like

00:09:59 --> 00:10:03
how do you guys think about eval right

00:10:00 --> 00:10:05
cuz given you're already saturating

00:10:02 --> 00:10:06
what's out there um to a large extent or

00:10:04 --> 00:10:09
doing very well along those

00:10:05 --> 00:10:12
dimensions um what actually gets you to

00:10:08 --> 00:10:13
push the frontier is that um before the

00:10:11 --> 00:10:15
I mean so usage would be kind of post

00:10:12 --> 00:10:17
he model release but before you get

00:10:14 --> 00:10:19
here what are you guys looking to

00:10:16 --> 00:10:22
internally to help guide you is it a lot

00:10:18 --> 00:10:24
of internal evals that you've created um

00:10:22 --> 00:10:25
you know is it early access to startups

00:10:23 --> 00:10:26
eeing what they think maybe it's a

00:10:24 --> 00:10:28
combo of all the above but how do you

00:10:26 --> 00:10:31
weigh all of those things

00:10:27 --> 00:10:32
>> yeah I mean I think on On our team, we

00:10:30 --> 00:10:34
really work backwards from the

00:10:31 --> 00:10:37
capabilities we want the models to have.

00:10:33 --> 00:10:40
So maybe we want it to be good at

00:10:36 --> 00:10:42
creating slide decks or something or um

00:10:39 --> 00:10:44
spread good at edit editing

00:10:41 --> 00:10:45
spreadsheets. And then if evals for

00:10:43 --> 00:10:48
those things don't exist, we try to make

00:10:44 --> 00:10:50
vals that are representative measures

00:10:47 --> 00:10:52
of that capability in a way that's

00:10:49 --> 00:10:55
actually going to be useful for users.

00:10:51 --> 00:10:57
Um and then we'll um a lot of those are

00:10:54 --> 00:10:59
internal. we'll collect them maybe from

00:10:56 --> 00:11:01
human experts or um you know try and

00:10:58 --> 00:11:04
synthetically create examples or we'll

00:11:00 --> 00:11:05
actually look at usage data. Um and then

00:11:03 --> 00:11:08
for us we'll just try and hill he hill

00:11:04 --> 00:11:10
climb on those um and

00:11:07 --> 00:11:11
>> yeah I I think we make this joke a lot

00:11:09 --> 00:11:13
internally that like if you want to

00:11:10 --> 00:11:14
nerdype someone into working on

00:11:12 --> 00:11:16
something you just need to make a good

00:11:13 --> 00:11:18
eval and then people are going to be so

00:11:15 --> 00:11:19
happy to try to hill climb that.

00:11:17 --> 00:11:20
>> Yeah.

00:11:18 --> 00:11:22
>> I like what you said about starting with

00:11:19 --> 00:11:25
e capabilities first. How do you

00:11:21 --> 00:11:27
prioritize what you actually are are

00:11:24 --> 00:11:29
shooting for? Let's say there's this

00:11:26 --> 00:11:32
dimension of maybe deeper into everyday

00:11:28 --> 00:11:33
use versus getting much deeper into the

00:11:31 --> 00:11:35
xpert use cases.

00:11:32 --> 00:11:36
>> How do you think about that trade-off?

00:11:34 --> 00:11:38
What does that trade-off mean

00:11:35 --> 00:11:40
practically speaking? And what do you

00:11:37 --> 00:11:41
guys prioritize when?

00:11:39 --> 00:11:44
>> I mean, I think it's pretty unique at

00:11:40 --> 00:11:46
OpenAI to be able to work on something

00:11:43 --> 00:11:47
that's so generally useful. I mean, it's

00:11:45 --> 00:11:49
like everything they tell you not to do

00:11:46 --> 00:11:52
at a startup is just like your user is

00:11:48 --> 00:11:54
anyone like for deep research. We wanted

00:11:51 --> 00:11:55
it to be good across like every single

00:11:53 --> 00:11:57
domain someone might want to do research

00:11:54 --> 00:11:59
in. And I think you only have the like

00:11:56 --> 00:12:01
privilege of doing that if you work at a

00:11:58 --> 00:12:03
company that has like huge distribution

00:12:00 --> 00:12:07
and like all different kinds of users.

00:12:02 --> 00:12:08
So um yeah, I mean I think if you choose

00:12:06 --> 00:12:10
a capability that's quite general like

00:12:07 --> 00:12:12
online research, you just have to make

00:12:09 --> 00:12:15
sure that you represent like a

00:12:11 --> 00:12:16
distribution of tasks across um loads of

00:12:14 --> 00:12:18
different domains if you want to get

00:12:15 --> 00:12:20
good at all of them. But then yeah,

00:12:17 --> 00:12:22
sometimes it is it's hard to to decide

00:12:19 --> 00:12:24
to focus on one specific thing um

00:12:21 --> 00:12:26
because there are just so many different

00:12:24 --> 00:12:28
verticals that you could go could choose

00:12:25 --> 00:12:30
from. But I think in some cases maybe

00:12:27 --> 00:12:32
like coding will be really important. So

00:12:29 --> 00:12:34
then um you know a specific team will

00:12:31 --> 00:12:37
focus on coding. But I think in general

00:12:33 --> 00:12:40
um because the capabilities are so

00:12:36 --> 00:12:42
general usually like the the next model

00:12:39 --> 00:12:46
improvement just kind of improves

00:12:41 --> 00:12:47
performance on a a pretty broad range.

00:12:45 --> 00:12:49
Yeah, I think we've kind of seen this

00:12:46 --> 00:12:50
like with the progression of even the

00:12:48 --> 00:12:52
models that we've had in chatbt. Like as

00:12:50 --> 00:12:54
the model gets smarter, it's better at

00:12:51 --> 00:12:55
instruction following, it's better at

00:12:53 --> 00:12:57
ool use. Um, and just more things get

00:12:54 --> 00:13:00
unlocked as we just continue to make

00:12:56 --> 00:13:02
smarter models. So I think like um a

00:12:59 --> 00:13:03
good chunk of our team also like does

00:13:01 --> 00:13:05
focus on just getting general

00:13:02 --> 00:13:07
intelligence up cuz I think the wins

00:13:04 --> 00:13:09
that we get from there are like Isa

00:13:06 --> 00:13:10
ying like pretty great whenever we get

00:13:08 --> 00:13:13
a new base model and just seeing like oh

00:13:09 --> 00:13:14
wow suddenly this clicks it works and I

00:13:12 --> 00:13:16
think we kind of saw that moment with

00:13:13 --> 00:13:18
like operator cuz we had been working on

00:13:15 --> 00:13:19
computer usage but I think it was hard

00:13:17 --> 00:13:22
to finally get the model to actually

00:13:18 --> 00:13:23
without like the multimodal capabilities

00:13:21 --> 00:13:24
to really support it like you couldn't

00:13:22 --> 00:13:27
have something like operator when it

00:13:24 --> 00:13:29
launched. Yeah, it's the same thing with

00:13:26 --> 00:13:30
everyone was talking about agents, but

00:13:28 --> 00:13:33
we didn't really have a way of actually

00:13:29 --> 00:13:35
training useful agents. I mean, I think

00:13:32 --> 00:13:37
um you everyone was talking there all

00:13:34 --> 00:13:38
these agent demos, but nothing that

00:13:36 --> 00:13:40
actually really works. But I think when

00:13:37 --> 00:13:42
we saw the reinforcement learning

00:13:39 --> 00:13:43
algorithm working really well on math

00:13:41 --> 00:13:45
and physics problems and coding

00:13:42 --> 00:13:47
problems, it became pretty clear like

00:13:44 --> 00:13:48
just from reading through the chain of

00:13:46 --> 00:13:49
thought like okay this thing's actually

00:13:47 --> 00:13:51
like thinking and reasoning and

00:13:48 --> 00:13:53
backtracking and to build something

00:13:50 --> 00:13:54
that's able to like navigate the real

00:13:52 --> 00:13:57
world. It also needs to have that

00:13:54 --> 00:13:58
ability. So we realize okay like this is

00:13:56 --> 00:14:01
a thing that's going to actually let us

00:13:57 --> 00:14:03
get to to useful agents. Um and so I

00:14:00 --> 00:14:05
think it's interesting at OpenAI because

00:14:02 --> 00:14:07
you have people pushing um like you know

00:14:04 --> 00:14:09
foundational algorithms getting really

00:14:06 --> 00:14:11
good at math getting a gold medal in the

00:14:08 --> 00:14:13
IMO and then on post training we'll

00:14:10 --> 00:14:14
often take like those methods and try

00:14:12 --> 00:14:16
and figure out how to make things that

00:14:13 --> 00:14:18
are most useful and like usable to like

00:14:16 --> 00:14:19
all of our users.

00:14:17 --> 00:14:22
>> How much of the improvements are coming

00:14:18 --> 00:14:25
from the architecture versus the the

00:14:21 --> 00:14:26
data versus the scale? Like where how do

00:14:24 --> 00:14:28
you sort of think about that? my

00:14:25 --> 00:14:30
opinion, I'm very data pill. Like I

00:14:27 --> 00:14:32
think data is very important and I think

00:14:29 --> 00:14:34
um like I think deep research was so

00:14:31 --> 00:14:36
good because Issa put so much thought

00:14:33 --> 00:14:37
and like careful attention to like the

00:14:35 --> 00:14:39
data curation that they did and thinking

00:14:36 --> 00:14:41
about all the different use cases she

00:14:38 --> 00:14:43
wanted to have represented. Um so I'm

00:14:40 --> 00:14:45
I'm on team data.

00:14:42 --> 00:14:48
>> Yeah, I mean I think all are very

00:14:44 --> 00:14:50
important but especially like especially

00:14:47 --> 00:14:53
now that we have such an efficient way

00:14:49 --> 00:14:56
of learning um data is even high quality

00:14:52 --> 00:14:59
data is even even more important. Maybe

00:14:55 --> 00:15:01
on the data topic, um we've been talking

00:14:58 --> 00:15:04
a lot about RL environments. Um it's a

00:15:00 --> 00:15:06
popular space for startups uh who all

00:15:03 --> 00:15:08
want to work with you guys. Um and I I

00:15:05 --> 00:15:10
was curious just to get your thoughts on

00:15:07 --> 00:15:12
this since you've been data or your data

00:15:09 --> 00:15:14
pill. Um but what are the bottlenecks

00:15:11 --> 00:15:16
that you see for the next stage? Is that

00:15:13 --> 00:15:18
I mean maybe tying it to RL

00:15:15 --> 00:15:22
environments. um is there sort of a lack

00:15:18 --> 00:15:24
of good realistic RL environments that

00:15:21 --> 00:15:25
's sort of the next frontier which

00:15:23 --> 00:15:29
maybe creates an opportunity for these

00:15:24 --> 00:15:32
startups um that once you you know sort

00:15:28 --> 00:15:34
of are able to really work within a um

00:15:31 --> 00:15:36
environment that takes a long time to

00:15:33 --> 00:15:39
build these are not you know sort of

00:15:35 --> 00:15:41
built in um in a day or two that you can

00:15:38 --> 00:15:43
actually automate labor um to the full

00:15:40 --> 00:15:45
extent of like computer you know the way

00:15:42 --> 00:15:47
that you would need computer use to do.

00:15:44 --> 00:15:49
>> Yeah. I I think in my in my opinion I do

00:15:46 --> 00:15:51
think um there is a lot of value in

00:15:48 --> 00:15:52
getting really good tasks and getting

00:15:50 --> 00:15:55
really good tasks requires really good

00:15:51 --> 00:15:56
RL environments. Um I think the more

00:15:54 --> 00:15:58
complicated or the more realistic the

00:15:55 --> 00:16:00
more simulated we can make them I think

00:15:57 --> 00:16:02
the better um we'll get and I think

00:15:59 --> 00:16:04
we're kind of seeing that like tasks

00:16:01 --> 00:16:05
matter just like tasks matter more at

00:16:03 --> 00:16:07
his point given the fact that we have

00:16:04 --> 00:16:09
such a strong algorithm. Um so

00:16:06 --> 00:16:11
>> I think the data creating data and

00:16:08 --> 00:16:13
figuring out like the best tasks to

00:16:10 --> 00:16:14
trade on is like the one of the big

00:16:12 --> 00:16:14
questions we have.

00:16:13 --> 00:16:16
>> Yeah. Yeah, like there's some

00:16:14 --> 00:16:18
generalization from training on like one

00:16:15 --> 00:16:20
website to another, but if you want to

00:16:17 --> 00:16:21
get really really good at something, the

00:16:19 --> 00:16:22
best thing to do is just like train on

00:16:20 --> 00:16:25
that exact thing, right?

00:16:21 --> 00:16:28
>> So, um yeah, I think we're definitely

00:16:24 --> 00:16:30
just constrained by how like things that

00:16:28 --> 00:16:32
we can represent in a way that we can

00:16:29 --> 00:16:35
train on. Like the TGBT agent, for

00:16:31 --> 00:16:37
example, has such a general tool. Um it

00:16:34 --> 00:16:39
has a browser and a terminal and between

00:16:36 --> 00:16:41
those two things, you can basically do

00:16:38 --> 00:16:44
most of the tasks that a human does on a

00:16:40 --> 00:16:45
computer. So in theory, you can ask it

00:16:43 --> 00:16:47
o do anything that you can do on your

00:16:44 --> 00:16:50
computer. It's obviously not good enough

00:16:46 --> 00:16:51
to do that yet. But with with the tools

00:16:49 --> 00:16:53
it has in theory, you can push it really

00:16:50 --> 00:16:55
far. So now we just have to like

00:16:52 --> 00:16:58
make it really good at all those things

00:16:54 --> 00:17:00
uh by, you know, training on training on

00:16:57 --> 00:17:02
way more things. Yeah.

00:16:59 --> 00:17:03
>> Let's talk about uh creative writing.

00:17:01 --> 00:17:04
Maybe you talk about the improvements

00:17:02 --> 00:17:06
there, how you think about it.

00:17:04 --> 00:17:10
>> That's one of my favorite improvements

00:17:05 --> 00:17:13
in GBT 5. Um the writing I honestly find

00:17:09 --> 00:17:14
it very tender and touching especially

00:17:12 --> 00:17:16
for a lot of the creative writing that

00:17:13 --> 00:17:17
we want to do. Um we were thinking

00:17:15 --> 00:17:18
through like a bunch of different

00:17:16 --> 00:17:20
samples for the live stream and like

00:17:18 --> 00:17:23
very time I was like oh that's like

00:17:19 --> 00:17:25
actually like that like hits like he's

00:17:22 --> 00:17:28
like and it's like spooky and I'm just

00:17:24 --> 00:17:30
like oh this feels like someone like

00:17:27 --> 00:17:31
someone should have written this. Um,

00:17:29 --> 00:17:33
but I think it's really cool because you

00:17:30 --> 00:17:35
can actually really use it for um like

00:17:32 --> 00:17:37
helping you with things like like I like

00:17:34 --> 00:17:38
my example I did in the live stream was

00:17:36 --> 00:17:39
like writer helping me write the eulogy.

00:17:37 --> 00:17:41
Something that like that's like kind of

00:17:38 --> 00:17:43
hard to write especially since writing

00:17:40 --> 00:17:44
isn't really something a lot of people

00:17:42 --> 00:17:45
are good at. Like I'm personally a very

00:17:43 --> 00:17:48
bad writer.

00:17:44 --> 00:17:48
>> That's not true.

00:17:47 --> 00:17:50
>> I think it's

00:17:47 --> 00:17:52
>> but it makes a better story.

00:17:49 --> 00:17:54
>> I think it's compared to maybe the other

00:17:51 --> 00:17:57
things I'm better at. Um, but it's so

00:17:54 --> 00:17:59
great to have this tool um to help me

00:17:56 --> 00:18:01
like craft whenever like I use it

00:17:58 --> 00:18:02
literally for as simple things as like

00:18:00 --> 00:18:04
Slack messages to figure out like how to

00:18:02 --> 00:18:07
phrase this well and it'll help me give

00:18:03 --> 00:18:08
me some iterations how to how to say

00:18:06 --> 00:18:09
something to the team.

00:18:07 --> 00:18:11
>> I want to see those prompts.

00:18:08 --> 00:18:12
>> Yeah, we're now all just looking for M

00:18:10 --> 00:18:13
dashes,

00:18:11 --> 00:18:14
right? We're like,

00:18:12 --> 00:18:15
>> where do you stand?

00:18:13 --> 00:18:16
>> Where do you stand on the M dash

00:18:14 --> 00:18:17
discourse?

00:18:15 --> 00:18:18
>> I like M dash.

00:18:16 --> 00:18:20
>> I do that normally and now people think

00:18:17 --> 00:18:23
I'm

00:18:19 --> 00:18:25
e too. Going back to the the the

00:18:22 --> 00:18:28
discourse for a second, Sam said in his

00:18:24 --> 00:18:31
interview with Jack, he said, "If you

00:18:27 --> 00:18:33
had said 10 years ago that we would get

00:18:30 --> 00:18:36
you models at the level of of sort of

00:18:32 --> 00:18:37
PhD students, um I would think, wow, the

00:18:35 --> 00:18:40
world looks so different and yet we've

00:18:36 --> 00:18:41
basically taken it for granted." Um, do

00:18:39 --> 00:18:43
you think basically the improvements are

00:18:40 --> 00:18:44
similar? Like as soon as we get them,

00:18:42 --> 00:18:46
we're just going to be like, "Oh, yeah,

00:18:43 --> 00:18:47
now now this is the the standard or or

00:18:45 --> 00:18:49
do you think at some point there's going

00:18:46 --> 00:18:51
to be like, oh my god, this is like um

00:18:48 --> 00:18:55
how do you think about sort of people's

00:18:50 --> 00:18:56
ability to um sort of uh acclimate or

00:18:54 --> 00:18:58
adjust or

00:18:55 --> 00:19:00
>> Yeah. I mean, it seems like people

00:18:57 --> 00:19:02
adjust really quickly, don't you think?

00:18:59 --> 00:19:02
The tattoo team got released and

00:19:01 --> 00:19:04
everyone was like, "Wow, that's so

00:19:02 --> 00:19:05
cool." But then you just kind of take it

00:19:03 --> 00:19:06
for granted that you literally have this

00:19:04 --> 00:19:09
like wizard in your pocket. you can like

00:19:05 --> 00:19:10
ask it whatever whatever random thought

00:19:08 --> 00:19:12
you have and it just pops out like a

00:19:10 --> 00:19:13
good essay and you're like oh okay cool

00:19:11 --> 00:19:15
that that's what's happening

00:19:12 --> 00:19:17
>> I guess people adapt to things rather

00:19:14 --> 00:19:18
quickly in my opinion with technology

00:19:16 --> 00:19:20
and it is really easy and I think

00:19:17 --> 00:19:22
because the form factor is so easy even

00:19:19 --> 00:19:24
with like new tools like deep research

00:19:21 --> 00:19:26
and chatb agent it's like presented in

00:19:23 --> 00:19:28
such like a a like easy way that people

00:19:25 --> 00:19:31
already know how to interface with like

00:19:27 --> 00:19:33
I think as long as that's true even with

00:19:30 --> 00:19:35
e models getting like much smarter

00:19:32 --> 00:19:36
than us like I think it'll be it's still

00:19:34 --> 00:19:37
going to be like quite approach

00:19:35 --> 00:19:37
ables to people.

00:19:36 --> 00:19:41
>> Mhm.

00:19:36 --> 00:19:44
>> Do you think the jump from GPT 4 to 5

00:19:40 --> 00:19:45
was bigger or 3 to four or maybe 3 and a

00:19:43 --> 00:19:47
half to four?

00:19:44 --> 00:19:49
>> I mean, at least one one thing for me in

00:19:46 --> 00:19:50
my usage of it is sometimes I'm

00:19:48 --> 00:19:52
wondering if I have hard enough

00:19:49 --> 00:19:53
questions to ask it to actually like

00:19:51 --> 00:19:54
highlight the difference

00:19:52 --> 00:19:56
>> because when it gets to a point where

00:19:53 --> 00:19:59
it's just answering what you need so

00:19:55 --> 00:20:01
well, it's like almost harder to tell

00:19:58 --> 00:20:02
the difference in some areas. But with

00:20:00 --> 00:20:05
writing, yeah, I've been I've been using

00:20:01 --> 00:20:07
it for a few weeks and it's just kind of

00:20:04 --> 00:20:08
blown me away in a way that models

00:20:06 --> 00:20:10
previously haven't.

00:20:07 --> 00:20:11
>> Maybe I'm biased, recency biased, but I

00:20:09 --> 00:20:14
think the jump to four to five is most

00:20:10 --> 00:20:16
impressive for me cuz I guess with 3.5

00:20:13 --> 00:20:17
when we first released it, the most

00:20:15 --> 00:20:19
common use case for me then also was

00:20:16 --> 00:20:21
till just for coding. And but now like

00:20:18 --> 00:20:23
ven though four was better at coding, I

00:20:20 --> 00:20:25
feel like the jump between four and five

00:20:22 --> 00:20:27
in terms of like breadth of ability to

00:20:24 --> 00:20:30
do things is just way different and way

00:20:26 --> 00:20:32
more um and you can just handle a lot

00:20:29 --> 00:20:34
more complex things than like before

00:20:31 --> 00:20:35
like with the context length being much

00:20:33 --> 00:20:37
longer as well. Like

00:20:34 --> 00:20:38
>> I think the jump to four to five to me

00:20:36 --> 00:20:40
is like much bigger.

00:20:37 --> 00:20:42
>> Is is there anything the model uh

00:20:39 --> 00:20:44
categorically can't do?

00:20:41 --> 00:20:46
>> I guess for five we don't really take

00:20:43 --> 00:20:48
like action in the real world yet. Um,

00:20:45 --> 00:20:49
we're gonna team up with agent for that.

00:20:47 --> 00:20:52
>> Yeah.

00:20:48 --> 00:20:54
As I said, you could ask the agent

00:20:51 --> 00:20:56
o do anything, but it's not capable

00:20:53 --> 00:21:00
nough to do everything you want it to

00:20:55 --> 00:21:02
do yet. We take a conservative approach,

00:20:59 --> 00:21:04
especially with like asking the user for

00:21:01 --> 00:21:06
confirmation um before doing any kind of

00:21:03 --> 00:21:08
action that's irreversible. So like

00:21:05 --> 00:21:10
sending an email or um ordering

00:21:07 --> 00:21:12
something, booking something. So I think

00:21:09 --> 00:21:14
I can imagine quite you know a number of

00:21:11 --> 00:21:16
tasks where you'd want to take like bulk

00:21:13 --> 00:21:17
actions. um which you might not be able

00:21:15 --> 00:21:19
to do right now because it would ask you

00:21:16 --> 00:21:20
every single time. But I think as people

00:21:18 --> 00:21:22
get more comfortable using these things

00:21:19 --> 00:21:24
and as they get better and you trust

00:21:21 --> 00:21:27
hem more, you might, you know, allow it

00:21:23 --> 00:21:28
o do things for you without um checking

00:21:26 --> 00:21:31
in with you as much.

00:21:27 --> 00:21:32
>> Maybe just to build on that question, um

00:21:30 --> 00:21:35
for in terms of what it can't do today,

00:21:32 --> 00:21:38
but what you would sort of direct future

00:21:34 --> 00:21:40
search toward um if you look at

00:21:37 --> 00:21:42
coding, uh something like endtoend

00:21:39 --> 00:21:44
DevOps for example, that feels like the

00:21:41 --> 00:21:46
logical next set of capabilities. Do you

00:21:43 --> 00:21:49
guys think we'll get there in I don't

00:21:45 --> 00:21:51
know what you'll name it but 5.5 or

00:21:48 --> 00:21:52
GPT6? Um how far are we from something

00:21:50 --> 00:21:54
like that?

00:21:51 --> 00:21:56
>> Yeah, I don't know about the exact thing

00:21:53 --> 00:21:59
of DevOps but I do feel like with the

00:21:55 --> 00:22:00
models getting much smarter um one one

00:21:58 --> 00:22:01
other thing that came to my mind when

00:21:59 --> 00:22:03
you asked me the question is like longer

00:22:00 --> 00:22:04
unning tasks and like things like that

00:22:02 --> 00:22:06
I think like

00:22:03 --> 00:22:08
>> I think we GBT5 is great because like

00:22:05 --> 00:22:10
yeah within like a couple minutes maybe

00:22:07 --> 00:22:11
you get a full-fledged app but then what

00:22:09 --> 00:22:13
would it look like if you actually gave

00:22:10 --> 00:22:14
it like an hour like a day a week? what

00:22:12 --> 00:22:16
can actually get done. And I think

00:22:13 --> 00:22:17
that's um there's going to be a lot of

00:22:15 --> 00:22:19
interesting stuff. Um we're interested

00:22:16 --> 00:22:20
to see what will happen there.

00:22:18 --> 00:22:22
>> Yeah, I think a lot of it is not just

00:22:19 --> 00:22:24
about the model capability, but it's

00:22:21 --> 00:22:26
actually like how you set it up in a way

00:22:23 --> 00:22:28
to to do things. Like I'm sure that you

00:22:25 --> 00:22:30
could build something that's like

00:22:27 --> 00:22:32
monitoring, you know, your Humo or like

00:22:30 --> 00:22:33
data dog, whatever. Like with these

00:22:31 --> 00:22:34
current models, it's just like setting

00:22:32 --> 00:22:35
up the harness like to make that

00:22:34 --> 00:22:39
possible.

00:22:34 --> 00:22:41
>> And same for um for like aentic task. I

00:22:38 --> 00:22:43
think a lot of things that will be quite

00:22:40 --> 00:22:45
useful will be when the um agent like

00:22:42 --> 00:22:47
proactively does something for you. Um

00:22:44 --> 00:22:49
which I don't think is impossible today.

00:22:46 --> 00:22:51
It's just not like set up that way. But

00:22:48 --> 00:22:52
eventually like as it proactively does

00:22:50 --> 00:22:54
things for you, then we might get

00:22:51 --> 00:22:56
feedback on whether that was useful and

00:22:53 --> 00:22:57
we can make it like even better at like

00:22:55 --> 00:22:59
triggering.

00:22:56 --> 00:23:01
>> Agents is probably or agent is probably

00:22:58 --> 00:23:03
the most overused word of 2025. That

00:23:00 --> 00:23:06
being said, your agent's launch was

00:23:02 --> 00:23:08
extremely exciting. um what does that

00:23:05 --> 00:23:09
word mean to you in the context of

00:23:07 --> 00:23:11
capabilities that you'd like to build in

00:23:08 --> 00:23:14
the near term or um have already built

00:23:10 --> 00:23:16
and um what is sort of most important

00:23:14 --> 00:23:18
hat the agent is able to do on behalf

00:23:15 --> 00:23:20
of your users?

00:23:17 --> 00:23:23
>> I guess my very general definition would

00:23:19 --> 00:23:27
just be something that does work useful

00:23:22 --> 00:23:29
work for me um on my behalf with I would

00:23:26 --> 00:23:31
say asynchronously. So like you kind of

00:23:28 --> 00:23:32
leave it and then come back and get

00:23:30 --> 00:23:35
either get a result or like a question

00:23:32 --> 00:23:40
about what it's doing. And then in terms

00:23:34 --> 00:23:42
of I guess roadmap for agents, I mean

00:23:39 --> 00:23:44
longer term, you want it to be able to

00:23:41 --> 00:23:46
do anything that you know a chief of

00:23:44 --> 00:23:49
staff or assistant or something like

00:23:45 --> 00:23:52
that would do for you. Um but I think in

00:23:48 --> 00:23:54
the more immediate term we there are a

00:23:51 --> 00:23:56
lot of new capabilities that we launched

00:23:53 --> 00:23:58
in chatb agent that we just want to to

00:23:56 --> 00:24:01
improve. So one of the main capabilities

00:23:57 --> 00:24:02
is um deep research. So just being

00:24:00 --> 00:24:05
really good at synthesizing information

00:24:01 --> 00:24:06
from the internet, but also um I think

00:24:04 --> 00:24:08
we can improve capabilities on

00:24:05 --> 00:24:10
synthesizing information from like all

00:24:07 --> 00:24:12
of the the services that you use and

00:24:09 --> 00:24:16
like private data that you have. And

00:24:11 --> 00:24:19
then um also being better at creating

00:24:15 --> 00:24:21
and editing artifacts like docs or

00:24:18 --> 00:24:23
slides and spreadsheets because I think

00:24:20 --> 00:24:25
so much of like the work that's useful

00:24:22 --> 00:24:26
that people do in their jobs is

00:24:24 --> 00:24:29
basically just research and making

00:24:26 --> 00:24:30
something. Um but then also I'm

00:24:28 --> 00:24:33
personally like love all the consumer

00:24:29 --> 00:24:35
use cases um like making it better at

00:24:32 --> 00:24:36
like shopping or planning a trip and

00:24:34 --> 00:24:38
those kinds of things are like also

00:24:35 --> 00:24:40
really fun. Um, and so that also

00:24:37 --> 00:24:43
involves like taking an action. Um,

00:24:39 --> 00:24:46
which is um interesting because it's um

00:24:42 --> 00:24:50
it's very it's kind of the last step

00:24:45 --> 00:24:52
often of of a of a task and it's the

00:24:49 --> 00:24:53
maybe a task that would take less time

00:24:51 --> 00:24:54
for a human and it's like actually very

00:24:52 --> 00:24:56
hard like a very hard research question

00:24:54 --> 00:24:58
to like get it to to do something or

00:24:55 --> 00:25:00
like book something or use a use a

00:24:57 --> 00:25:02
calendar picker. Um but yeah, once you

00:24:59 --> 00:25:05
have the endto-end flow working really

00:25:01 --> 00:25:06
well, it can basically do do anything.

00:25:04 --> 00:25:09
>> Yeah, that's incredible. on the shopping

00:25:05 --> 00:25:11
piece. I now do not make a single large

00:25:08 --> 00:25:13
ticket purchase without having Chad GBD

00:25:10 --> 00:25:14
put all the options in a table for me

00:25:12 --> 00:25:17
along the dimensions I care about. It's

00:25:14 --> 00:25:21
it's incredible. Um, but I want to push

00:25:16 --> 00:25:22
on the async piece um because I I I

00:25:20 --> 00:25:23
don't know if you would agree with this,

00:25:21 --> 00:25:25
but it felt like a revelation to me at

00:25:22 --> 00:25:27
least um at the beginning of the year

00:25:24 --> 00:25:29
that people were willing to wait because

00:25:26 --> 00:25:32
you kind of think about oh we want it

00:25:28 --> 00:25:33
faster like the value prop of this tool

00:25:31 --> 00:25:36
is that it gives me the answer fast,

00:25:32 --> 00:25:38
right? That was sort of very 2024. Um

00:25:35 --> 00:25:40
clearly this paradigm has shifted.

00:25:37 --> 00:25:42
People are willing to wait for high

00:25:39 --> 00:25:45
quality highv value answers and work. Um

00:25:41 --> 00:25:48
how do you think about the trade-off

00:25:44 --> 00:25:50
between how long something take how long

00:25:47 --> 00:25:52
um you take to get something back to the

00:25:49 --> 00:25:53
user versus what you're actually the

00:25:51 --> 00:25:54
value that you're providing and like

00:25:52 --> 00:25:56
what do you think is the ideal frontier

00:25:54 --> 00:25:58
for something like that?

00:25:55 --> 00:26:00
>> Yeah, it's interesting because um I

00:25:57 --> 00:26:02
worked I built a retrieval on chatbt and

00:25:59 --> 00:26:04
was on the browsing team before this. Um

00:26:01 --> 00:26:05
Tina was also on the the browsing team

00:26:03 --> 00:26:07
and we were always making these

00:26:04 --> 00:26:09
trade-offs and optimizations to for

00:26:06 --> 00:26:11
latency and so the we were thinking how

00:26:08 --> 00:26:13
can you best like fill the context with

00:26:10 --> 00:26:15
information you've retrieved so that the

00:26:12 --> 00:26:17
answer is pretty good in a few seconds

00:26:14 --> 00:26:20
and so I think with deep research I was

00:26:16 --> 00:26:22
just very excited to like remove latency

00:26:19 --> 00:26:24
as a constraint and since we were going

00:26:21 --> 00:26:25
for these we're going for these tasks

00:26:23 --> 00:26:27
that are really hard for humans to do

00:26:24 --> 00:26:29
and would take humans many hours to do I

00:26:26 --> 00:26:30
think we felt like you know if you asked

00:26:28 --> 00:26:34
an analyst to do this and it would take

00:26:29 --> 00:26:36
them 10 hours or two days seems it seems

00:26:33 --> 00:26:37
reasonable that um someone would be

00:26:35 --> 00:26:40
willing to wait like five minutes in

00:26:36 --> 00:26:42
your product. Um so I think that was the

00:26:39 --> 00:26:44
we just kind of made that bet and

00:26:41 --> 00:26:46
luckily it seems like it's the case. But

00:26:43 --> 00:26:47
I I do also think that you know

00:26:45 --> 00:26:49
initially people are like oh this is

00:26:46 --> 00:26:51
amazing it's doing all this work. Um

00:26:48 --> 00:26:53
that's would have taken me so long and

00:26:50 --> 00:26:56
now people are like okay but I want it

00:26:52 --> 00:26:58
now I want it in 30 seconds.

00:26:55 --> 00:26:59
right to the point on the the bar

00:26:57 --> 00:27:01
changing

00:26:58 --> 00:27:02
>> cuz yeah I was going to say is there any

00:27:00 --> 00:27:04
sort of rule of thumb and I'm sure it's

00:27:01 --> 00:27:06
constantly shifting where as long as

00:27:04 --> 00:27:09
you're 10 times faster than it would

00:27:05 --> 00:27:11
take the human to do they're willing to

00:27:08 --> 00:27:12
wait for it or is that just constantly

00:27:10 --> 00:27:13
shifting sand?

00:27:11 --> 00:27:15
>> I think with these launches people's

00:27:12 --> 00:27:16
expectations keep getting changing.

00:27:14 --> 00:27:18
Yeah.

00:27:15 --> 00:27:20
>> Yeah. I do think I we have like a

00:27:17 --> 00:27:21
specific a specific number. One thing

00:27:19 --> 00:27:23
that's interesting is I think sometimes

00:27:20 --> 00:27:26
people just bias to thinking that the

00:27:22 --> 00:27:28
longer answer is more like thorough or

00:27:25 --> 00:27:29
has done more work for it, which I don't

00:27:27 --> 00:27:31
necessarily

00:27:28 --> 00:27:32
>> um think is the case. Like deep research

00:27:30 --> 00:27:34
for example always gives you a really

00:27:31 --> 00:27:35
long report. Um but sometimes for me I

00:27:33 --> 00:27:37
don't want to read this whole long

00:27:34 --> 00:27:39
report. I actually don't don't like

00:27:36 --> 00:27:40
that. And so agent like it will only

00:27:38 --> 00:27:42
give you a long report if you ask for

00:27:39 --> 00:27:44
it. But I think sometimes people since

00:27:42 --> 00:27:45
now they're used to always getting a

00:27:43 --> 00:27:46
really long report. They're like wait

00:27:44 --> 00:27:49
I've been waiting like where's my long

00:27:45 --> 00:27:50
report? But sometimes it's like really

00:27:48 --> 00:27:51
hard to find a specific piece of

00:27:49 --> 00:27:53
information and would have also taken a

00:27:50 --> 00:27:55
human a long time cuz it's in like page

00:27:52 --> 00:27:57
10 of the results whereas where it finds

00:27:54 --> 00:27:58
this information. So um I think it's

00:27:56 --> 00:28:01
interesting also how you can condition

00:27:57 --> 00:28:03
people's expectations with um with a

00:28:00 --> 00:28:05
product so that when you change or or

00:28:02 --> 00:28:07
like with deep research it always thinks

00:28:04 --> 00:28:08
for a really long time which again I

00:28:06 --> 00:28:09
don't necessarily think is a feature but

00:28:07 --> 00:28:12
I think now people are like really used

00:28:08 --> 00:28:13
to the amount of time that they wait.

00:28:11 --> 00:28:15
Um, so

00:28:12 --> 00:28:16
>> I think we hear this with GBT5, but

00:28:14 --> 00:28:17
internally when people are testing it,

00:28:15 --> 00:28:18
they're like, "Oh, I thought I asked

00:28:16 --> 00:28:21
like a really hard question." I feel

00:28:18 --> 00:28:22
ike a little bit insulted that it

00:28:20 --> 00:28:24
seconds or like when it doesn't even

00:28:21 --> 00:28:25
want to think at all.

00:28:23 --> 00:28:26
>> Response. Yeah.

00:28:24 --> 00:28:28
>> It's like the Mark Twain line. I didn't

00:28:26 --> 00:28:29
have time to write you a short letter,

00:28:27 --> 00:28:31
so I wrote you a long one.

00:28:28 --> 00:28:33
>> Yeah. Yeah.

00:28:30 --> 00:28:36
>> Why don't you talk about the the bottle

00:28:32 --> 00:28:38
like why don't we have reliable agency

00:28:35 --> 00:28:39
about what are the the main bottlenecks

00:28:37 --> 00:28:41
as you see them?

00:28:38 --> 00:28:43
>> Yeah. Yeah, I think a big part of it is

00:28:40 --> 00:28:45
the things that we train on we're often

00:28:42 --> 00:28:48
really good at and then sometimes with

00:28:44 --> 00:28:50
e things outside of that it's can be a

00:28:47 --> 00:28:52
bit um sometimes it's good at those

00:28:49 --> 00:28:54
things, sometimes it's not good at those

00:28:51 --> 00:28:56
things. Um so I think yeah creating more

00:28:53 --> 00:28:58
data across like a broader range of

00:28:55 --> 00:29:00
things that we want it to be good at.

00:28:57 --> 00:29:03
Um, I think also what's interesting with

00:28:59 --> 00:29:05
agents is we have this like uh when

00:29:02 --> 00:29:07
something is doing something on

00:29:04 --> 00:29:10
your behalf and it has access to your,

00:29:06 --> 00:29:12
you know, your private data and the

00:29:09 --> 00:29:13
things that you use, um, it's kind of

00:29:11 --> 00:29:17
more scary the different things it could

00:29:12 --> 00:29:19
o to achieve its final goal. Um, you

00:29:16 --> 00:29:21
know, in theory, if you asked it to to

00:29:18 --> 00:29:23
buy you something that and like make

00:29:20 --> 00:29:25
sure that I like it, it could go and buy

00:29:22 --> 00:29:26
five things just to make sure that you

00:29:24 --> 00:29:28
liked one of them,

00:29:25 --> 00:29:30
>> which you might not necessarily want. So

00:29:27 --> 00:29:32
I think that that's definitely like

00:29:29 --> 00:29:33
having oversight during training is also

00:29:31 --> 00:29:35
like an interesting area. I think

00:29:32 --> 00:29:39
there's just like new things that we

00:29:34 --> 00:29:42
have to like develop to you know push

00:29:38 --> 00:29:44
these agents even further. Um so yeah I

00:29:41 --> 00:29:46
think that that's part of it and then

00:29:43 --> 00:29:48
also like as every time we get have a

00:29:45 --> 00:29:51
smarter like base model or something

00:29:47 --> 00:29:53
like this it improves

00:29:50 --> 00:29:54
every model that's built on top of that.

00:29:52 --> 00:29:56
So I think that will also help

00:29:54 --> 00:29:58
especially with like multimodal

00:29:55 --> 00:30:01
capabilities as Tina said with like

00:29:57 --> 00:30:03
computer use because it's like just

00:30:00 --> 00:30:06
literally looking at screenshots of of

00:30:02 --> 00:30:09
the of a web page and it's like it's a

00:30:05 --> 00:30:10
little interesting cuz um the way that

00:30:08 --> 00:30:13
humans like focus on specific things.

00:30:10 --> 00:30:14
It's like it's a lot to expect a model

00:30:12 --> 00:30:16
to just like take a whole image and be

00:30:13 --> 00:30:17
able to like know everything about the

00:30:15 --> 00:30:19
image when like when we're looking at

00:30:16 --> 00:30:21
something we'll like focus on a specific

00:30:18 --> 00:30:22
thing. Yeah, I think that there's lots

00:30:20 --> 00:30:24
of room for improvement in lots of in

00:30:21 --> 00:30:25
lots of areas. Sorry, that was kind of a

00:30:23 --> 00:30:26
general answer, but

00:30:24 --> 00:30:29
>> No, no. Well, actually, I was going to

00:30:25 --> 00:30:30
maybe that last example um gets into

00:30:28 --> 00:30:32
something that we were curious about,

00:30:29 --> 00:30:35
which is and this ties back to training

00:30:31 --> 00:30:37
data um as well, but what what sort of I

00:30:34 --> 00:30:39
guess what specific categories of

00:30:36 --> 00:30:42
browsing tasks are challenging for

00:30:38 --> 00:30:44
agents um today? And like I I don't know

00:30:41 --> 00:30:45
if you have thoughts on how you'd

00:30:43 --> 00:30:48
overcome this for sort of the next

00:30:44 --> 00:30:51
iteration of the model. I mean I think

00:30:47 --> 00:30:52
one thing is like so pre-training it's

00:30:50 --> 00:30:54
based on like what data is available

00:30:51 --> 00:30:56
right and so I think when we've done

00:30:53 --> 00:30:57
these pre-train there's not much data

00:30:55 --> 00:30:59
out there to begin with with people

00:30:56 --> 00:31:00
using computers like computer usage is

00:30:58 --> 00:31:02
not really a thing that like there's

00:30:59 --> 00:31:04
lots of like data out there and this is

00:31:01 --> 00:31:06
omething we actually have to like seek

00:31:03 --> 00:31:07
out now that this is a capability that

00:31:05 --> 00:31:08
we want. So I think that's actually

00:31:06 --> 00:31:10
probably a big one

00:31:07 --> 00:31:11
>> just for general improvements of like

00:31:09 --> 00:31:14
computer usage. Do you think you'll lean

00:31:10 --> 00:31:16
more heavily on human data vendors to

00:31:13 --> 00:31:19
help collect that or given it doesn't

00:31:15 --> 00:31:20
exist to your point like recorded in the

00:31:18 --> 00:31:22
way that maybe it's most helpful for

00:31:19 --> 00:31:25
training like how do we but it is

00:31:21 --> 00:31:27
probably the most useful application of

00:31:24 --> 00:31:29
the models to you know at least

00:31:26 --> 00:31:30
knowledge work um like how do you

00:31:28 --> 00:31:33
overcome that

00:31:29 --> 00:31:34
>> I mean I think one cool thing is for for

00:31:32 --> 00:31:36
example for initial deep research

00:31:33 --> 00:31:38
there's not really any data sets that

00:31:35 --> 00:31:40
exist for browsing in the same way that

00:31:37 --> 00:31:42
you have a math data set that already

00:31:39 --> 00:31:44
exists So we have to create all this

00:31:41 --> 00:31:46
data but once you have good browsing

00:31:43 --> 00:31:48
models or good use models you can like

00:31:45 --> 00:31:50
bootstrap them to help you make data. So

00:31:47 --> 00:31:52
I think that's a pretty

00:31:49 --> 00:31:54
>> Christina can can you explain what

00:31:51 --> 00:31:56
mid-training is and how it sort of what

00:31:53 --> 00:31:58
does it achieve that pre or post doesn't

00:31:55 --> 00:32:00
>> so I think with your pre-training runs

00:31:57 --> 00:32:02
these are like your these are your the

00:31:59 --> 00:32:04
big runs these are the massive ones like

00:32:01 --> 00:32:06
it's what we're building all these giant

00:32:03 --> 00:32:08
clusters for. Um, so you can kind of

00:32:05 --> 00:32:09
think of mid-training as literally in

00:32:07 --> 00:32:12
it's for like middle like we do it

00:32:08 --> 00:32:13
before um after pre-training but before

00:32:11 --> 00:32:15
post- training. Um, you kind of think of

00:32:12 --> 00:32:17
a way to like extend the models like

00:32:14 --> 00:32:19
intelligence without having to do a

00:32:16 --> 00:32:21
whole new pre-training run. So this is

00:32:18 --> 00:32:23
mostly just focus on data and off of the

00:32:20 --> 00:32:25
pre-training models. Um, so this is a

00:32:22 --> 00:32:27
way for us to do things like updating

00:32:24 --> 00:32:28
the knowledge cut off of these models,

00:32:26 --> 00:32:29
right? So when you pre-train it, you're

00:32:27 --> 00:32:31
kind of like, okay, shoot, now we're

00:32:28 --> 00:32:33
kind of stuck in this state and we can't

00:32:30 --> 00:32:34
ever update it again. and does it quite

00:32:32 --> 00:32:36
make sense to put all that data into

00:32:33 --> 00:32:38
post- training. Um, and so mid-training

00:32:35 --> 00:32:40
is just a smaller pre-training run to

00:32:37 --> 00:32:42
help expand like the model's

00:32:39 --> 00:32:44
intelligence and like up-to-desseness.

00:32:41 --> 00:32:45
>> Christine, did you work on web GPT?

00:32:43 --> 00:32:46
>> Yes, I did.

00:32:44 --> 00:32:47
>> Okay. So, you're basically like an AI

00:32:45 --> 00:32:48
historian. Um,

00:32:46 --> 00:32:50
>> yes. Yes.

00:32:47 --> 00:32:52
>> She also watched some computer use.

00:32:50 --> 00:32:54
>> I'm an elder.

00:32:51 --> 00:32:56
So can you like reflect back a little

00:32:54 --> 00:32:58
bit to you know four years ago 5 years

00:32:55 --> 00:33:00
ago and sort of reflect on like what are

00:32:57 --> 00:33:02
the biggest thing like if you were to

00:32:59 --> 00:33:04
predict the the 5 years out like what

00:33:01 --> 00:33:05
are the inflection points or biggest

00:33:03 --> 00:33:07
hings that would have surprised you

00:33:04 --> 00:33:09
>> honestly with web GBT the main thing we

00:33:06 --> 00:33:11
re just excited about was like trying

00:33:08 --> 00:33:12
to ground these language models like

00:33:10 --> 00:33:14
it's we had so many issues with like

00:33:12 --> 00:33:16
hallucinations and the model just saying

00:33:13 --> 00:33:17
random things and like the fact of we

00:33:15 --> 00:33:18
didn't really do mid training sense so

00:33:16 --> 00:33:20
like the fact of like how do we make

00:33:17 --> 00:33:22
sure the model is actually up to date

00:33:19 --> 00:33:23
like most factually up to date So then

00:33:21 --> 00:33:25
that's kind of how we thought about like

00:33:22 --> 00:33:27
oh let's give it a browsing tool. I

00:33:24 --> 00:33:28
think that makes sense. Um and then yeah

00:33:26 --> 00:33:30
like I said that kind of went on from

00:33:27 --> 00:33:32
like oh actually want to keep asking

00:33:29 --> 00:33:34
questions so what a chatbot would look

00:33:31 --> 00:33:36
like. But at this point I think there

00:33:33 --> 00:33:37
had been a few chat bots by a few other

00:33:35 --> 00:33:39
companies. And I feel like a chatbot is

00:33:36 --> 00:33:42
also like a very common AI thing to

00:33:38 --> 00:33:43
think of. Um but they're quite unpopular

00:33:41 --> 00:33:44
at the time. So we weren't really even

00:33:42 --> 00:33:47
sure that like this is actually

00:33:43 --> 00:33:48
something useful for people to work on

00:33:46 --> 00:33:50
or like people to use or will people be

00:33:48 --> 00:33:52
xcited about this? Is this really like

00:33:49 --> 00:33:55
a research innovation that we like are

00:33:51 --> 00:33:56
making the touring test here? Like um

00:33:54 --> 00:33:58
but I think it kind of clicked into me

00:33:55 --> 00:33:59
that like maybe there was actually

00:33:57 --> 00:34:02
something interesting happening here. Um

00:33:58 --> 00:34:04
we gave early access to about 50 people.

00:34:01 --> 00:34:06
Most of those people being like people I

00:34:03 --> 00:34:08
lived with at the time. Uh and there two

00:34:05 --> 00:34:09
f my roommates just used it all the

00:34:07 --> 00:34:11
time. They just like would never stop

00:34:08 --> 00:34:13
using it. And they would just have these

00:34:10 --> 00:34:14
long conversations and they would ask it

00:34:12 --> 00:34:16
like quite technical things cuz they're

00:34:13 --> 00:34:18
also AI researchers. And so I was just

00:34:16 --> 00:34:19
like, "Oh, this is like kind of

00:34:17 --> 00:34:20
interesting. like I don't know. And at

00:34:18 --> 00:34:22
he time we're kind of thinking like,

00:34:19 --> 00:34:23
okay, we kind of have the chatbot. Do we

00:34:21 --> 00:34:25
make this like a really specific like

00:34:22 --> 00:34:28
meeting bot type of thing? Do we like

00:34:24 --> 00:34:29
make it a coding helper? Um, but it was

00:34:27 --> 00:34:31
interesting to see my two roommates just

00:34:28 --> 00:34:33
use it like for anything and everything

00:34:30 --> 00:34:35
and just like literally be chatting with

00:34:32 --> 00:34:36
it like the whole workday as they were

00:34:34 --> 00:34:37
using it that I was like, "Oh, this is

00:34:35 --> 00:34:39
kind of interesting."

00:34:36 --> 00:34:40
>> But then it was also interesting to see

00:34:38 --> 00:34:42
like the majority of the people that I

00:34:39 --> 00:34:43
gave access to on that 50 person list

00:34:41 --> 00:34:45
like didn't really use it that much. But

00:34:42 --> 00:34:46
I was like, "Oh, it's like there's

00:34:44 --> 00:34:48
clearly like something here, but it's

00:34:45 --> 00:34:50
like not quite maybe for everyone yet."

00:34:47 --> 00:34:52
Um, but there's something here.

00:34:49 --> 00:34:54
>> When did you realize like I'm working at

00:34:51 --> 00:34:56
one of the most important companies of

00:34:53 --> 00:34:57
this generation? Like like when was the

00:34:55 --> 00:34:58
moment where you were like, "Hey, this

00:34:56 --> 00:34:59
something that I obviously believe is

00:34:57 --> 00:35:01
important. That's why I joined." But

00:34:58 --> 00:35:02
hat you realized like the scale and

00:35:00 --> 00:35:03
significance.

00:35:01 --> 00:35:06
>> Honestly, I kind of had this moment

00:35:02 --> 00:35:07
before I joined OpenAI. like like I

00:35:05 --> 00:35:09
think with the scaling laws paper with

00:35:06 --> 00:35:12
GBT3 I was just like kind of hit me that

00:35:08 --> 00:35:14
like if this exponential is true like

00:35:11 --> 00:35:16
there's not really much else I want to

00:35:13 --> 00:35:18
spend my life working on um and like I

00:35:15 --> 00:35:20
want to be part of this like story like

00:35:17 --> 00:35:21
I think there's there's going to be so

00:35:19 --> 00:35:23
many interesting things unlocked with

00:35:20 --> 00:35:24
is and I think this is this is

00:35:22 --> 00:35:26
probably the next like step level in

00:35:23 --> 00:35:28
terms of like technology that it kind of

00:35:25 --> 00:35:29
made me realize like oh I I should

00:35:27 --> 00:35:31
probably go start reading about deep

00:35:28 --> 00:35:32
learning and figure out how I can get

00:35:30 --> 00:35:34
into one of these labs

00:35:31 --> 00:35:35
>> is what was your moment

00:35:33 --> 00:35:37
>> I think I think For me, it was also

00:35:34 --> 00:35:39
before I started working at OpenAI um

00:35:36 --> 00:35:41
using I think I first learned about

00:35:38 --> 00:35:43
OpenAI in a in a AI class or something

00:35:40 --> 00:35:44
or some kind of computer science class

00:35:42 --> 00:35:46
and they were saying like oh they

00:35:44 --> 00:35:47
trained on the whole internet. I was

00:35:45 --> 00:35:50
like, "Oh, that's so crazy." Like, "What

00:35:46 --> 00:35:53
is this company?" And then started using

00:35:49 --> 00:35:56
GBD3 like in the I think I was a I was a

00:35:52 --> 00:35:58
power user of the OpenAI playground

00:35:55 --> 00:36:00
and at a certain point like had early

00:35:58 --> 00:36:02
access to these like different OpenAI

00:35:59 --> 00:36:03
features like embeddings and things like

00:36:01 --> 00:36:06
that and just became this like big

00:36:02 --> 00:36:07
OpenAI fan. Um which is like a little

00:36:05 --> 00:36:09
mbarrassing but you know it's fine

00:36:06 --> 00:36:10
because it got me here and then

00:36:08 --> 00:36:12
eventually they're like okay like you're

00:36:09 --> 00:36:14
stalking us. Do you want to interview

00:36:12 --> 00:36:16
here? Um, but yeah, I think it was like

00:36:13 --> 00:36:17
pretty clear to me. But just how much I

00:36:15 --> 00:36:19
was using GPT3, which wasn't even

00:36:16 --> 00:36:22
compared to what we have now, like just

00:36:18 --> 00:36:23
pales in comparison, but I was like from

00:36:21 --> 00:36:26
then I was hooked and just trying to

00:36:22 --> 00:36:28
figure out a way to to to work here.

00:36:25 --> 00:36:32
>> Maybe a a question more on the company

00:36:27 --> 00:36:34
building front. Um, we all sort of read

00:36:31 --> 00:36:37
and reread Calvin Fred Jones piece, just

00:36:33 --> 00:36:39
his reflections on working at OpenAI. um

00:36:36 --> 00:36:40
curious and you don't have to comment on

00:36:38 --> 00:36:42
that piece unless you want to but um

00:36:39 --> 00:36:44
would love your reflections on the

00:36:42 --> 00:36:47
change that you've seen over the last

00:36:43 --> 00:36:48
four years or um or you know or even

00:36:46 --> 00:36:50
less than that given I think that was

00:36:47 --> 00:36:51
only covering one year of change. Um but

00:36:49 --> 00:36:53
what are the biggest things that you've

00:36:50 --> 00:36:55
seen change at OpenAI?

00:36:52 --> 00:36:57
>> I mean when I first joined OpenAI the

00:36:54 --> 00:36:58
applied team was 10 engineers or

00:36:56 --> 00:37:00
something. It just like we didn't really

00:36:57 --> 00:37:02
have this like product arm. We had just

00:36:59 --> 00:37:04
launched the API. It was just a

00:37:01 --> 00:37:07
completely different world. And I think

00:37:03 --> 00:37:09
AI is in most people's mind now after

00:37:06 --> 00:37:12
chat GBT, but I think pre-hat GBT like

00:37:08 --> 00:37:13
people didn't really know what AI was or

00:37:11 --> 00:37:15
eally like thought about it as much.

00:37:12 --> 00:37:17
Um, it's kind of cool working on a place

00:37:14 --> 00:37:19
that like my parents know what I do now

00:37:16 --> 00:37:21
and like it's like that's really cool.

00:37:18 --> 00:37:22
Um, and I think the company obviously is

00:37:20 --> 00:37:24
just a lot bigger, but I think with that

00:37:21 --> 00:37:26
we can just take a lot more bets. I

00:37:23 --> 00:37:29
think when I first joined OpenAI there

00:37:25 --> 00:37:30
were obviously way less um people like

00:37:28 --> 00:37:33
it was much much smaller. around like

00:37:29 --> 00:37:35
200ish people and I think we're close to

00:37:32 --> 00:37:36
>> a few thousand for sure. Yeah, when I

00:37:34 --> 00:37:38
joined it was also

00:37:36 --> 00:37:41
>> few hundred before chat GPT.

00:37:37 --> 00:37:43
>> So it's obviously yeah very different in

00:37:40 --> 00:37:45
how you know all of your friends have

00:37:42 --> 00:37:46
heard of you know what you work on but I

00:37:44 --> 00:37:48
think culturally obviously the company

00:37:46 --> 00:37:52
is much bigger. I still think we've

00:37:47 --> 00:37:54
maintained um this it still feels very

00:37:51 --> 00:37:55
much like a startup. I think some people

00:37:53 --> 00:37:57
who come from a startup are surprised

00:37:54 --> 00:37:58
like oh I'm working even harder than

00:37:56 --> 00:38:00
when I was working at my the startup

00:37:57 --> 00:38:02
that I founded. I think ideas can still

00:37:59 --> 00:38:03
come from anywhere and if you just like

00:38:01 --> 00:38:05
take initiative and want to make

00:38:02 --> 00:38:06
something happen, you can. And this

00:38:04 --> 00:38:07
doesn't really matter like how senior

00:38:05 --> 00:38:09
you are or anything like that. I think

00:38:06 --> 00:38:10
we've been able to maintain that culture

00:38:08 --> 00:38:12
which I think is pretty special.

00:38:09 --> 00:38:14
>> Yeah, we definitely reward agency and I

00:38:11 --> 00:38:15
think that's like always been true. And

00:38:13 --> 00:38:17
I think especially on the research side,

00:38:14 --> 00:38:18
the teams are quite small like when Issa

00:38:16 --> 00:38:20
was working on deep research, it was

00:38:17 --> 00:38:22
like two people still two.

00:38:19 --> 00:38:24
>> So like I think we still do that on the

00:38:21 --> 00:38:26
research side like most research teams

00:38:23 --> 00:38:28
are quite small and nimble for that

00:38:25 --> 00:38:31
reason. Um so

00:38:27 --> 00:38:32
>> and earlier you said um you know we do

00:38:30 --> 00:38:34
something at Open AI which startups

00:38:32 --> 00:38:36
never do which is you know try to appeal

00:38:33 --> 00:38:38
to every single person with the product.

00:38:35 --> 00:38:40
What um are there other things that come

00:38:37 --> 00:38:42
to mind that OpenAI just does

00:38:39 --> 00:38:44
differently than than uh your peers or

00:38:41 --> 00:38:46
other startups or or things that we

00:38:43 --> 00:38:48
may not appreciate being on the I mean I

00:38:45 --> 00:38:53
think it's different for um different

00:38:47 --> 00:38:55
eams but um my the my team collaborates

00:38:52 --> 00:38:56
o closely with the applied like the

00:38:54 --> 00:38:59
ngineering team and the product team

00:38:55 --> 00:39:01
and design team um in a way that I think

00:38:58 --> 00:39:03
sometimes like research can be quite

00:39:00 --> 00:39:04
separate from like the rest of the

00:39:02 --> 00:39:07
company but for us it's like so

00:39:03 --> 00:39:10
integrated we all sit together. Um, you

00:39:06 --> 00:39:12
know, sometimes like the researchers

00:39:09 --> 00:39:13
will help with like implementing

00:39:11 --> 00:39:15
something. I'm not sure the engineers

00:39:12 --> 00:39:17
are always happy about it, but we'll

00:39:14 --> 00:39:19
try. Um, like they like get out of the

00:39:16 --> 00:39:21
front end code, but um, and and vice

00:39:18 --> 00:39:23
versa, like they'll help us with things

00:39:20 --> 00:39:24
that we're doing for like model training

00:39:22 --> 00:39:27
runs and things like that. So, I think

00:39:23 --> 00:39:28
um, some of the like product teams are

00:39:26 --> 00:39:31
quite integrated. I think it's for for

00:39:27 --> 00:39:33
post- training. Um it's it's a pretty

00:39:30 --> 00:39:36
common pattern which um I think just

00:39:32 --> 00:39:39
lets you move really quickly.

00:39:36 --> 00:39:42
>> I guess one thing that I think is unique

00:39:38 --> 00:39:47
about OpenAI is that you're both very

00:39:41 --> 00:39:49
much a consumer company by revenue etc.

00:39:46 --> 00:39:52
um products but also an enterprise

00:39:48 --> 00:39:53
company. How does that internally like

00:39:51 --> 00:39:55
what would you guys consider yourself or

00:39:52 --> 00:39:57
is that even just the wrong paradigm to

00:39:54 --> 00:40:00
think about? Yeah, I mean I guess if you

00:39:56 --> 00:40:01
tie it to the mission, it's like we're

00:39:59 --> 00:40:03
trying to make the most capable thing

00:40:00 --> 00:40:05
and we're also trying to have as make it

00:40:02 --> 00:40:07
useful to as many people as possible and

00:40:04 --> 00:40:08
accessible to as many people as

00:40:06 --> 00:40:10
possible. So like in that framing I

00:40:07 --> 00:40:13
think it makes a lot of sense. The

00:40:09 --> 00:40:16
concept of taste has become um also very

00:40:12 --> 00:40:18
widely used. What is good taste mean

00:40:15 --> 00:40:21
within open AI? How do you know when you

00:40:17 --> 00:40:23
see it? Know it when you see it. Um, and

00:40:20 --> 00:40:25
is that something that um, even in a

00:40:22 --> 00:40:27
world where everything the cost to

00:40:24 --> 00:40:28
produce everything just keeps going down

00:40:26 --> 00:40:30
and down, is that is that the one thing

00:40:27 --> 00:40:32
that's not commoditizable or is that

00:40:30 --> 00:40:34
also shifting given maybe that can go

00:40:31 --> 00:40:36
into the training data?

00:40:33 --> 00:40:37
>> No, I think taste is quite important

00:40:35 --> 00:40:39
especially now that like it is like like

00:40:36 --> 00:40:40
I said like our models are getting

00:40:38 --> 00:40:42
smarter, it's easier to use them as

00:40:39 --> 00:40:44
tools. Um, so I think having the right

00:40:41 --> 00:40:45
direction matters a lot now. Um, and

00:40:43 --> 00:40:47
like having the right intuitions and

00:40:44 --> 00:40:49
like with the right questions you want

00:40:46 --> 00:40:51
o ask. Um, so I would say maybe it's

00:40:48 --> 00:40:54
matters more now than before.

00:40:50 --> 00:40:56
>> I think also I've been surprised by how

00:40:53 --> 00:40:58
often the thing that is is the most

00:40:55 --> 00:41:01
simple like easy to explain is the thing

00:40:57 --> 00:41:05
that works the best. And so sometimes

00:41:00 --> 00:41:06
it's like seems very obvious, but um it,

00:41:04 --> 00:41:08
you know, it's quite hard to get the

00:41:05 --> 00:41:09
details of something right. But I think

00:41:07 --> 00:41:10
usually good researcher taste is just

00:41:08 --> 00:41:13
like

00:41:09 --> 00:41:14
>> pretty simplifying the problem to like

00:41:12 --> 00:41:15
the dumbest thing or the most simple

00:41:13 --> 00:41:17
thing you can do.

00:41:14 --> 00:41:18
>> Yeah. I feel like with every like

00:41:16 --> 00:41:20
research release we do and when people

00:41:18 --> 00:41:22
figure out what happened there, they're

00:41:19 --> 00:41:23
like, "Oh, that's so simple." Like, "Oh,

00:41:21 --> 00:41:24
I should like that." Obviously,

00:41:22 --> 00:41:27
obviously that would have worked. Um,

00:41:24 --> 00:41:29
but I think it's like knowing to try

00:41:26 --> 00:41:30
that like obvious or like at the time

00:41:28 --> 00:41:31
not obvious thing that is obvious in

00:41:30 --> 00:41:33
hindsight.

00:41:30 --> 00:41:33
>> Yeah. And then all of the details around

00:41:32 --> 00:41:34
>> Yeah.

00:41:32 --> 00:41:36
>> the hyperparame and all these things

00:41:33 --> 00:41:38
like the infer that's obviously like

00:41:35 --> 00:41:39
very hard, but the actual concept itself

00:41:37 --> 00:41:41
is usually

00:41:38 --> 00:41:44
>> usually pretty straightforward.

00:41:40 --> 00:41:47
>> Very cool. Taste is AAM's razor. Yeah.

00:41:43 --> 00:41:49
So sort of in in in closing here, uh

00:41:46 --> 00:41:51
obviously historic day, uh you want to

00:41:48 --> 00:41:52
contextualize sort of what what this

00:41:50 --> 00:41:54
means in context of of of the mission

00:41:52 --> 00:41:56
and and um you know where you've been to

00:41:53 --> 00:41:57
get to now to where where you're

00:41:55 --> 00:41:59
going.

00:41:56 --> 00:42:01
>> Yeah, I think with GBT the thing that's

00:41:58 --> 00:42:02
the word that's like been in my mind

00:42:00 --> 00:42:04
throughout all of this is like usable.

00:42:01 --> 00:42:05
And I think the thing that we're excited

00:42:03 --> 00:42:07
about is getting this out to everyone.

00:42:04 --> 00:42:09
Um we're excited to get like our best

00:42:06 --> 00:42:12
reasoning models out to free users now.

00:42:08 --> 00:42:14
And I think just getting this our

00:42:11 --> 00:42:15
smartest model yet to like everyone and

00:42:13 --> 00:42:17
I'm just excited to see like what people

00:42:14 --> 00:42:19
are going to actually use it for.

00:42:16 --> 00:42:20
>> That's a great place to wrap. Tina,

00:42:18 --> 00:42:20
thanks so much for coming on the

00:42:19 --> 00:42:21
podcast.

00:42:19 --> 00:42:24
>> Yeah, thank you.

00:42:20 --> 00:42:47
>> Thank you for having us. Man,

00:42:23 --> 00:42:47
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
