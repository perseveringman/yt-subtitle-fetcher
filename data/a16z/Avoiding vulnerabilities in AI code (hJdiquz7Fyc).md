---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "hJdiquz7Fyc"
title: "Avoiding vulnerabilities in AI code"
video_url: "https://www.youtube.com/watch?v=hJdiquz7Fyc"
thumbnail_url: "https://i.ytimg.com/vi/hJdiquz7Fyc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=hJdiquz7Fyc"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-02-28T15:01:04.000Z"
upload_date: "2025-02-28"
duration_seconds: 1234
duration_human: "20:34"
view_count: 1204
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T12:58:00.947Z"
---

# Avoiding vulnerabilities in AI code

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=hJdiquz7Fyc
- video_id: hJdiquz7Fyc
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-02-28T15:01:04.000Z
- upload_date: 2025-02-28
- duration: 20:34
- view_count: 1204
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Dylan Ayrey (Truffle Security) on AI-Generated Code Risks

Dylan Ayrey, founder of Truffle Security, sits down with a16z partner Joel de la Garza to explore the growing security concerns around AI-generated code. As AI models take on more coding responsibilities, they introduce new risks—many of which stem from how these models were trained and aligned. Dylan highlights real-world examples of AI-generated vulnerabilities, explains why security teams should scrutinize AI-written code just as much as human-written code, and shares best practices for developers looking to balance efficiency with safety. He also discusses the challenges of detecting malicious AI-generated code and what the future holds for automated security defenses.

Learn more: 

Research finds 12,000 ‘Live’ API Keys and Passwords in DeepSeek's Training Data
https://trufflesecurity.com/blog/research-finds-12-000-live-api-keys-and-passwords-in-deepseek-s-training-data

Follow everybody on social media:
Dylan Ayrey - https://x.com/insecurenature
Joel de la Garza - https://www.linkedin.com/in/3448827723723234/

Check out everything a16z is doing with artificial intelligence, including articles, projects, and more podcasts, here: https://a16z.com/ai/

02:05 - How do we protect our code in the age of gen AI?
03:08 - Are any of the embedded secrets actually live?
04:46 - What is alignment?
05:37 - The microsoft twitter bot
06:53 - Secure coding techniques (data curation)
07:39 - Reinforcement learning
08:13 - Temperature / weight adjustments
09:17 - Data scientists and security
09:47 - the pitfalls of reinforcement learning
10:17 - Constitutional AI
12:13 - Direct analog to the security world / how to make secure code
12:45 - Why we still need constitutional AI / code review
14:16 - Is alignment making code better? Or is it just training and refinement?
15:58 - Can AI solve the coding quality problem? Do humans get removed from the loop?
19:08 - How do companies protect themselves as they continue to innovate?
19:51 - Buddy System - AI / Human reviews

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:04 --> 00:00:09
data scientists leak out API keys and

00:00:07 --> 00:00:11
passwords more often than site

00:00:08 --> 00:00:14
reliability engineers and it makes sense

00:00:10 --> 00:00:16
because a data scientist's job is to

00:00:13 --> 00:00:17
give access to data and so in their

00:00:15 --> 00:00:19
jupyter notebook they'll put the

00:00:16 --> 00:00:20
database password they'll share it with

00:00:18 --> 00:00:23
eir whole team so if we do a

00:00:19 --> 00:00:25
reinforcement learning and we we skew it

00:00:22 --> 00:00:28
owards uh code snippits that's

00:00:24 --> 00:00:31
generating that don't have API Keys

00:00:27 --> 00:00:33
inadvertently we may be training this to

00:00:30 --> 00:00:34
behave less like a data scientist and

00:00:32 --> 00:00:37
then we lose the entire discipline of

00:00:33 --> 00:00:39
data science in our llm right and so

00:00:36 --> 00:00:42
there are all these uned consequences

00:00:38 --> 00:00:46
when we go and we start tweaking the

00:00:41 --> 00:00:46
[Music]

00:00:47 --> 00:00:52
weights thanks for coming by you know I

00:00:49 --> 00:00:56
think we've been spending a lot of time

00:00:51 --> 00:00:58
talking to experts about the AI gen llms

00:00:55 --> 00:01:00
this whole thing is moving incredibly

00:00:57 --> 00:01:02
fast we had the release of deep seek

00:00:59 --> 00:01:04
open source model uh reasoning model two

00:01:01 --> 00:01:06
weeks ago and it seems like another chat

00:01:03 --> 00:01:08
GPT moment where this crazy thing drops

00:01:05 --> 00:01:10
from the sky and everyone's kind of

00:01:07 --> 00:01:12
running off and doing interesting things

00:01:09 --> 00:01:15
um so it's it's obviously clear you know

00:01:11 --> 00:01:17
some folks I think were worried that the

00:01:14 --> 00:01:18
momentum behind this was petering out a

00:01:16 --> 00:01:20
bit that things were starting to slow

00:01:17 --> 00:01:22
down and now we just see another rapid

00:01:19 --> 00:01:23
acceleration and I guess we could assume

00:01:21 --> 00:01:25
that it's going to continue to

00:01:22 --> 00:01:27
accelerate at this at this at this rate

00:01:24 --> 00:01:29
one of the really interesting things

00:01:26 --> 00:01:31
that we've heard from our corporate

00:01:28 --> 00:01:34
Partners so large companies lots of

00:01:30 --> 00:01:36
developers is that a lot of their code

00:01:33 --> 00:01:39
now is AI generated that they're seeing

00:01:35 --> 00:01:41
probably 20ish per of their codebase

00:01:38 --> 00:01:43
being generated by AI a lot of folks are

00:01:40 --> 00:01:45
freezing hiring for engineers because

00:01:43 --> 00:01:47
they're getting additional productivity

00:01:44 --> 00:01:48
out of the staff they already have

00:01:46 --> 00:01:50
because these large language models

00:01:47 --> 00:01:52
through tools like cursor are generating

00:01:49 --> 00:01:54
a tremendous amount of code i' had seen

00:01:51 --> 00:01:55
a blog post that you had done where you

00:01:53 --> 00:01:57
talked about how some of this this code

00:01:54 --> 00:01:58
that's getting generated has things like

00:01:56 --> 00:02:00
secrets in it and there's other security

00:01:57 --> 00:02:01
vulnerabilities and you know we've been

00:01:59 --> 00:02:04
talking about how we protect

00:02:00 --> 00:02:05
infrastructure how we protect people I

00:02:03 --> 00:02:07
mean would love to hear your thoughts on

00:02:04 --> 00:02:10
how we protect our code yeah no I mean

00:02:06 --> 00:02:12
absolutely so in terms of AI slowing

00:02:09 --> 00:02:15
down or speeding up I think the common

00:02:11 --> 00:02:17
sentiment is that AI researchers can

00:02:14 --> 00:02:19
research AI faster if they have ai

00:02:16 --> 00:02:22
helping them research and so that's an

00:02:18 --> 00:02:23
exponential and so that means that if

00:02:21 --> 00:02:26
the new generation of AI makes the next

00:02:22 --> 00:02:28
generation of AI faster and then the

00:02:25 --> 00:02:29
next generation of II makes the Next

00:02:27 --> 00:02:31
Generation faster to research and

00:02:28 --> 00:02:33
evelop that's going to keep blowing up

00:02:30 --> 00:02:35
and so I I think we can probably count

00:02:32 --> 00:02:38
on that safely that this is going to

00:02:34 --> 00:02:40
continue to be pervasive part of our

00:02:37 --> 00:02:42
Lives the piece about uh like secrets

00:02:39 --> 00:02:43
and code was some interesting research

00:02:41 --> 00:02:46
we did basically just went out and asked

00:02:42 --> 00:02:48
all the llms write me an integration

00:02:45 --> 00:02:50
with GitHub write me an integration with

00:02:47 --> 00:02:53
stripe and the vast majority of them

00:02:49 --> 00:02:54
hardcoded the API key directly into the

00:02:52 --> 00:02:55
code that they generated it didn't

00:02:53 --> 00:02:57
reference it from an environment

00:02:54 --> 00:03:00
variable it didn't you know put a load

00:02:56 --> 00:03:03
statement for a Secrets manager um and

00:03:00 --> 00:03:04
so that becomes a problem when you have

00:03:02 --> 00:03:06
people who aren't that good with

00:03:04 --> 00:03:08
security going and copy pasting that

00:03:05 --> 00:03:10
code directly in putting their secret

00:03:07 --> 00:03:12
hardcoding it were any of the hard-coded

00:03:09 --> 00:03:14
secrets actually live was it

00:03:11 --> 00:03:16
regurgitating training data in other

00:03:13 --> 00:03:18
words well uh so for the most part it

00:03:15 --> 00:03:20
would just say you know quotes put your

00:03:17 --> 00:03:22
secret here and it wouldn't say quotes

00:03:19 --> 00:03:23
put your secret in an environment

00:03:21 --> 00:03:25
variable for example and so it was more

00:03:23 --> 00:03:27
direction from the AI on what to do

00:03:24 --> 00:03:29
insecurely but it was doing it securely

00:03:26 --> 00:03:31
it was securely doing the insecure move

00:03:29 --> 00:03:33
well it didn't yeah

00:03:30 --> 00:03:36
that's that's another area of research

00:03:32 --> 00:03:38
that we're digging into now is if its

00:03:35 --> 00:03:39
training set had the same secret over

00:03:37 --> 00:03:41
and over again for example maybe jQuery

00:03:39 --> 00:03:43
file had a password in I'm making that

00:03:40 --> 00:03:44
up but let's say it did um and it saw

00:03:42 --> 00:03:46
the jQuery file over and over and over

00:03:44 --> 00:03:48
again in common crawl could it actually

00:03:45 --> 00:03:50
regurgitate an exact password from

00:03:47 --> 00:03:52
somebody that's live um so we're doing

00:03:49 --> 00:03:53
research on that now and more to come

00:03:51 --> 00:03:55
soon but for the most part if you ask it

00:03:53 --> 00:03:57
o integrate with GitHub it saw a pleora

00:03:54 --> 00:03:58
of different github's keys in its

00:03:56 --> 00:04:00
training data and it didn't regurgitate

00:03:57 --> 00:04:02
a specific one it either regurgitated

00:03:59 --> 00:04:05
example or like a put your thing in here

00:04:01 --> 00:04:08
right um so you know that's a specific

00:04:04 --> 00:04:09
example of a security problem but it is

00:04:07 --> 00:04:12
not the only security problem you get

00:04:08 --> 00:04:14
from code generated from llms uh and in

00:04:11 --> 00:04:17
fact there's been Research into uh how

00:04:13 --> 00:04:19
often uh code spit out from an llm has

00:04:16 --> 00:04:21
ecurity vulnerability and more often

00:04:18 --> 00:04:22
than not if you ask it to develop an

00:04:20 --> 00:04:25
entire application it'll write

00:04:21 --> 00:04:27
vulnerabilities at a rate the same as a

00:04:24 --> 00:04:30
junior developer if not a little bit

00:04:26 --> 00:04:32
higher um and so then that begs the

00:04:29 --> 00:04:36
question question why or what can we do

00:04:31 --> 00:04:39
about it and you know I think one thing

00:04:35 --> 00:04:42
that has become abundantly clear in the

00:04:38 --> 00:04:44
AI world is the largest challenge that

00:04:41 --> 00:04:46
hese AI companies face is this issue

00:04:43 --> 00:04:47
called alignment is that something

00:04:45 --> 00:04:48
you're familiar with you know what

00:04:46 --> 00:04:50
alignment is absolutely but perhaps

00:04:47 --> 00:04:51
let's maybe get a little framing of what

00:04:49 --> 00:04:53
he alignment what alignment means for

00:04:50 --> 00:04:55
folks listening basically just means the

00:04:52 --> 00:04:58
robot's doing what you wanted to do and

00:04:54 --> 00:05:01
so like so guard rails yeah well so so

00:04:57 --> 00:05:02
me famous examples um or to understand

00:05:00 --> 00:05:05
like how this alignment issue can creep

00:05:01 --> 00:05:08
in some famous examples IBM had an AI

00:05:04 --> 00:05:09
called Watson that won Jeopardy and this

00:05:07 --> 00:05:11
blew everybody's mind because like

00:05:08 --> 00:05:12
nobody thought AI could win Jeopardy and

00:05:10 --> 00:05:14
all of a sudden this thing was able to

00:05:11 --> 00:05:16
win Jeopardy um but then they trained it

00:05:13 --> 00:05:19
on Urban Dictionary because they wanted

00:05:15 --> 00:05:20
it to learn slang and it started cursing

00:05:18 --> 00:05:22
like a sailor and so they had to

00:05:19 --> 00:05:25
actually reset it to the point before

00:05:21 --> 00:05:26
they gave it access to Urban Dictionary

00:05:24 --> 00:05:28
um so that robot was considered misalign

00:05:26 --> 00:05:31
because they didn't want Watson to curse

00:05:28 --> 00:05:33
right or another example in 16 um

00:05:30 --> 00:05:36
Microsoft created a twitterbot called

00:05:32 --> 00:05:38
Tay you familiar with the I do remember

00:05:35 --> 00:05:42
the uh the Microsoft twitterbot yes and

00:05:37 --> 00:05:46
so basically they trained uh Tay or gave

00:05:41 --> 00:05:48
access to uh all of Twitter or all the

00:05:45 --> 00:05:50
tweets and replies and they wanted it to

00:05:47 --> 00:05:53
act like an average Twitter user it

00:05:49 --> 00:05:55
didn't and it did right it didn't take

00:05:52 --> 00:05:57
long before it started behaving like a

00:05:54 --> 00:06:00
Neo-Nazi and it would say things like

00:05:56 --> 00:06:01
the Holocaust never happened so in 16

00:05:59 --> 00:06:04
hours they took this thing down and

00:06:00 --> 00:06:05
never ran it again um this was before we

00:06:03 --> 00:06:08
have some of the alignment techniques

00:06:04 --> 00:06:11
that we have today but basically when

00:06:07 --> 00:06:13
you train AIS on huge corpuses of data

00:06:10 --> 00:06:15
um it's very common these days for llms

00:06:12 --> 00:06:16
to be trained on all of common crawl as

00:06:14 --> 00:06:19
an example common crawl is a scrape the

00:06:15 --> 00:06:22
ntire internet and the entire internet

00:06:18 --> 00:06:23
includes both Martin Luther King's I

00:06:21 --> 00:06:26
Have a Dream speech and every speech

00:06:22 --> 00:06:27
that Hitler ever gave and so how do you

00:06:25 --> 00:06:30
make sure that this thing embodies the

00:06:26 --> 00:06:32
values of Martin Luther King and not the

00:06:29 --> 00:06:35
values of the Nazi these are like real

00:06:31 --> 00:06:37
problems that the AI companies face and

00:06:34 --> 00:06:40
so on average like when you ask it

00:06:36 --> 00:06:42
questions you want it to be not a Nazi

00:06:39 --> 00:06:44
right um and so we have I'm going to

00:06:41 --> 00:06:46
talk through three main techniques we

00:06:43 --> 00:06:48
have for alignment and everything I say

00:06:45 --> 00:06:50
now is going to directly apply to secure

00:06:47 --> 00:06:51
coding techniques and all the challenges

00:06:49 --> 00:06:54
with these three things also directly

00:06:50 --> 00:06:55
apply to secure coding techniques so the

00:06:53 --> 00:06:57
first and easiest thing you can do is is

00:06:54 --> 00:06:59
called Data curation just the data that

00:06:56 --> 00:07:01
you feed into the model in the first

00:06:58 --> 00:07:04
place maybe remove all of the speeches

00:07:00 --> 00:07:08
right well the challenge there is let's

00:07:03 --> 00:07:12
ay we don't want this thing to

00:07:07 --> 00:07:15
um use any racial slurs uh so anytime

00:07:11 --> 00:07:16
input data has racial slur we remove it

00:07:14 --> 00:07:17
and so it doesn't get trained on that

00:07:15 --> 00:07:20
stuff well then you're going to

00:07:16 --> 00:07:22
inadvertently not train it on Mark Twain

00:07:19 --> 00:07:25
You're Going to inadvertently not train

00:07:21 --> 00:07:27
it on uh the 1977 Roots miniseries

00:07:24 --> 00:07:29
you're going to inadvertently not train

00:07:26 --> 00:07:30
It On To Kill a Mocking Bird and also

00:07:28 --> 00:07:33
you're probably going to lose some of Dr

00:07:29 --> 00:07:34
Martin Luther King's speeches and so all

00:07:32 --> 00:07:37
of a sudden your robot becomes less

00:07:34 --> 00:07:38
literary because you're trying to you

00:07:36 --> 00:07:41
know curate the data and you have these

00:07:37 --> 00:07:44
unintended consequences so the second

00:07:40 --> 00:07:46
technique um is well okay don't limit

00:07:43 --> 00:07:47
what goes into the robot but after the

00:07:45 --> 00:07:49
fact we're going to use a technique

00:07:46 --> 00:07:51
called reinforcement learning to kind of

00:07:48 --> 00:07:54
nudge the robot in the direction we want

00:07:50 --> 00:07:56
it to be um and there are a few

00:07:53 --> 00:07:58
different uh ways of reinforcement

00:07:55 --> 00:08:00
learning like one way is you could use a

00:07:57 --> 00:08:00
human to say which which version you

00:07:59 --> 00:08:02
prefer

00:08:00 --> 00:08:04
another way is you could use a robot to

00:08:01 --> 00:08:05
say hey which version do you prefer and

00:08:03 --> 00:08:09
the way this works kind of under the

00:08:04 --> 00:08:10
hood is um an llm generally speaking

00:08:08 --> 00:08:12
will always generate like the

00:08:09 --> 00:08:14
statistically most likely next you've

00:08:11 --> 00:08:17
probably heard that before that's a lie

00:08:13 --> 00:08:18
actually sometimes it's better that it

00:08:16 --> 00:08:20
has a little bit of Randomness and maybe

00:08:17 --> 00:08:22
picks the second most likely word or the

00:08:19 --> 00:08:23
third most likely word we call that

00:08:21 --> 00:08:25
emperature and so when we do this

00:08:22 --> 00:08:27
reinforcement learning we crank the

00:08:24 --> 00:08:29
temperature up so that it's sometimes

00:08:26 --> 00:08:32
randomly picking the most likely not

00:08:28 --> 00:08:34
outcome and then either a human or a

00:08:31 --> 00:08:36
robot goes in and says which one of the

00:08:33 --> 00:08:37
two it prefers and if it prefers the

00:08:35 --> 00:08:39
version that's maybe not as

00:08:36 --> 00:08:40
tatistically likely then we'll go in

00:08:38 --> 00:08:42
and adjust the weights to actually make

00:08:39 --> 00:08:45
that one the most statistically likely

00:08:41 --> 00:08:48
and so a very simple example of that is

00:08:44 --> 00:08:49
if you have the robot spit out Nazi

00:08:47 --> 00:08:51
content and you have the robot spit out

00:08:48 --> 00:08:54
Martin Luther King content if you pick

00:08:50 --> 00:08:56
the Martin Luther King content um then

00:08:53 --> 00:08:57
it will adjust its weights to behave

00:08:55 --> 00:08:59
more like the king and so that's that's

00:08:56 --> 00:09:02
an example of reinforcement learning um

00:08:58 --> 00:09:04
but there are are again similar issues

00:09:01 --> 00:09:07
with the data cation believe it or not

00:09:03 --> 00:09:10
where for example if you go in and you

00:09:06 --> 00:09:12
always pick the versions that have let's

00:09:09 --> 00:09:15
ay I'll give you a good example let's

00:09:11 --> 00:09:19
ay you train this thing on all the code

00:09:14 --> 00:09:22
on GitHub um well this is a true fact

00:09:18 --> 00:09:23
data scientists leak out API keys and

00:09:21 --> 00:09:25
passwords more often than site

00:09:22 --> 00:09:27
reliability engineers and it makes sense

00:09:24 --> 00:09:30
because a data scientist's job is to

00:09:26 --> 00:09:31
give access to data and so in their

00:09:29 --> 00:09:33
notebook they'll put the database

00:09:30 --> 00:09:35
password and they'll share it with their

00:09:32 --> 00:09:37
whole team uh but the sr's job is to

00:09:34 --> 00:09:39
make sure everything just runs and so

00:09:36 --> 00:09:40
they want to restrict access they don't

00:09:38 --> 00:09:42
want anybody touching what's working

00:09:39 --> 00:09:45
don't broke what's fix right or you know

00:09:41 --> 00:09:47
hat I'm trying to say so basically um

00:09:44 --> 00:09:49
they will leak out passwords and API

00:09:46 --> 00:09:52
Keys less often so if we do a

00:09:48 --> 00:09:55
reinforcement learning and we we skew it

00:09:51 --> 00:09:58
owards uh code Snippets it's generating

00:09:54 --> 00:10:00
that don't have API Keys inadvertently

00:09:57 --> 00:10:02
we may be training this thing to behave

00:09:59 --> 00:10:04
less like a data scientist and then we

00:10:01 --> 00:10:06
lose the entire discipline of data

00:10:03 --> 00:10:08
science in our llm right and so there

00:10:05 --> 00:10:10
are all these unended consequences when

00:10:07 --> 00:10:14
we go and we start tweaking the weights

00:10:09 --> 00:10:16
if the passwords hardcoded are weighted

00:10:13 --> 00:10:18
right next to the data science stuff we

00:10:15 --> 00:10:20
may accidentally lose the data science

00:10:17 --> 00:10:22
stuff um and that brings us to the third

00:10:19 --> 00:10:25
technique and the third technique is

00:10:21 --> 00:10:27
probably the most expensive um and by

00:10:24 --> 00:10:29
the way all of these techniques um all

00:10:26 --> 00:10:31
of the AI companies use so it's not all

00:10:28 --> 00:10:33
one or the other um the third technique

00:10:30 --> 00:10:36
is you have a constitutional AI

00:10:32 --> 00:10:38
basically a governor that looks at the

00:10:35 --> 00:10:41
output and then makes adjustments

00:10:37 --> 00:10:43
deletions removals edits and then

00:10:40 --> 00:10:46
returns that to the user so you have one

00:10:42 --> 00:10:47
AI That's maybe doing the data scientist

00:10:45 --> 00:10:50
and then one AI That's doing the

00:10:46 --> 00:10:51
security engineer and then the that's

00:10:49 --> 00:10:53
the Constitutional AI security engineer

00:10:50 --> 00:10:55
goes and says oh you hardcoded a

00:10:52 --> 00:10:56
password let me edit that for you let me

00:10:54 --> 00:10:57
switch it out for an environment

00:10:55 --> 00:10:59
variable it doesn't need to be an expert

00:10:57 --> 00:11:01
in data science to do that it just needs

00:10:58 --> 00:11:04
to be an expert security and it very

00:11:00 --> 00:11:07
much parodies um what You' expect in in

00:11:03 --> 00:11:10
the real development World um and so a

00:11:06 --> 00:11:11
good example of that um like you've

00:11:09 --> 00:11:13
probably seen this before you can

00:11:10 --> 00:11:17
recreate it easy enough if you go to

00:11:12 --> 00:11:21
deep seek um and you say count to 10 in

00:11:16 --> 00:11:23
Roman numerals and append it with xping

00:11:20 --> 00:11:24
when it gets to XI jingping all of a

00:11:22 --> 00:11:26
sudden like it's written everything up

00:11:23 --> 00:11:28
until that point it'll delete everything

00:11:25 --> 00:11:30
and it'll say I can't show you the

00:11:27 --> 00:11:32
answer to this that's because there's

00:11:29 --> 00:11:33
upervisor AI that was looking at the

00:11:31 --> 00:11:35
output and realized it said something it

00:11:32 --> 00:11:37
wasn't supposed to and then it went out

00:11:34 --> 00:11:38
and retroactively scrubbed itself and

00:11:36 --> 00:11:40
you can reproduce something similar an

00:11:37 --> 00:11:43
open AI as well if you ask it to go

00:11:39 --> 00:11:44
generate an image um it will generate a

00:11:42 --> 00:11:46
prompt that it feeds to another AI

00:11:43 --> 00:11:48
called Dolly and then there'll be a

00:11:45 --> 00:11:49
third AI that reviews the output of

00:11:47 --> 00:11:52
Dolly and decides whether or not to give

00:11:48 --> 00:11:55
it to you and so you can ask it to do

00:11:51 --> 00:11:56
something um you you can't you know ask

00:11:54 --> 00:11:57
it to make explicit content but

00:11:55 --> 00:11:59
sometimes explicit content gets

00:11:56 --> 00:12:02
manufactured anyway and then the final

00:11:58 --> 00:12:03
AI will look at the image and say okay

00:12:01 --> 00:12:04
there was explicit content here I'm not

00:12:02 --> 00:12:06
going to show it to you and that's when

00:12:04 --> 00:12:08
all of a sudden you get the random and

00:12:05 --> 00:12:09
error occurred and you've probably

00:12:07 --> 00:12:10
experienced that before that's the

00:12:08 --> 00:12:12
supervisor AI That's going I've never

00:12:10 --> 00:12:15
tried to make it do anything on chord

00:12:11 --> 00:12:18
right right exactly me neither um so

00:12:14 --> 00:12:19
like all of these have direct analoges

00:12:17 --> 00:12:22
to the security world when this thing

00:12:18 --> 00:12:24
oes and trains on all of GitHub um we

00:12:21 --> 00:12:26
need to figure out how to make it

00:12:23 --> 00:12:27
manufactur secure code because most of

00:12:25 --> 00:12:29
the training data it's training on is

00:12:26 --> 00:12:31
insecure right you've got a huge huge

00:12:28 --> 00:12:32
Corpus of secure data on GitHub and a

00:12:30 --> 00:12:34
small minority of it was written

00:12:31 --> 00:12:36
securely well how do you make this thing

00:12:33 --> 00:12:38
behave securely when most of what is

00:12:35 --> 00:12:39
trained on was insecurely um we can do a

00:12:37 --> 00:12:41
little bit of data curation and a little

00:12:39 --> 00:12:42
bit of reinforcement learning but you

00:12:40 --> 00:12:45
may have unintended consequences it may

00:12:41 --> 00:12:47
learn you know you rob Peter to pay paal

00:12:44 --> 00:12:49
um and but the third and probably most

00:12:46 --> 00:12:51
promising but most expensive is is this

00:12:49 --> 00:12:54
idea of like the Constitution AI or or

00:12:50 --> 00:12:57
the this the supervising um and that

00:12:53 --> 00:12:58
can be done by a robot uh but if

00:12:56 --> 00:13:00
you don't have a robot that can do that

00:12:57 --> 00:13:02
it has to be done by a person

00:12:59 --> 00:13:03
and somebody just has to review the

00:13:01 --> 00:13:06
output of the code and they have to

00:13:02 --> 00:13:08
manually audit it um and what's scary is

00:13:05 --> 00:13:10
I've seen posts on LinkedIn from startup

00:13:07 --> 00:13:12
Founders that maybe don't have um a

00:13:09 --> 00:13:16
background in coding and and they're

00:13:11 --> 00:13:18
basically um advocating for removing the

00:13:15 --> 00:13:20
code review check because they say well

00:13:17 --> 00:13:21
ook I just generated this whole program

00:13:19 --> 00:13:23
and I submitted it to my team and now

00:13:20 --> 00:13:24
they have questions about it I can't

00:13:22 --> 00:13:27
answer those questions I didn't generate

00:13:23 --> 00:13:29
the code I don't understand it um and so

00:13:26 --> 00:13:30
we need something to go in and review

00:13:28 --> 00:13:32
that code in a way that does understand

00:13:29 --> 00:13:34
it well that's either that either has to

00:13:31 --> 00:13:36
be a constitution AI that understands

00:13:33 --> 00:13:38
ecure coding practices and can go in

00:13:35 --> 00:13:40
and make the tweaks or it has to be a

00:13:37 --> 00:13:41
person that understands secure coding

00:13:39 --> 00:13:43
practices and can go in and make the

00:13:40 --> 00:13:45
tweaks absolutely yeah I think that and

00:13:42 --> 00:13:48
that leads me to kind of a really weird

00:13:44 --> 00:13:53
question um and feel free to to to to

00:13:47 --> 00:13:55
dodge or or whatever um you know the all

00:13:52 --> 00:13:56
the different AI models perform

00:13:54 --> 00:13:59
differently when it comes to code

00:13:55 --> 00:14:01
generation and it seems like Claude is

00:13:58 --> 00:14:03
consistently the best of all of them

00:14:00 --> 00:14:04
just at the current current State ofthe

00:14:02 --> 00:14:06
art maybe this changes tomorrow I don't

00:14:03 --> 00:14:07
know but from what I've heard

00:14:05 --> 00:14:10
anecdotally is that most people seem to

00:14:06 --> 00:14:12
prefer Claud and you know anthropic is a

00:14:09 --> 00:14:14
company that's very focused on safety

00:14:11 --> 00:14:16
right famously is kind of why they

00:14:13 --> 00:14:18
started probably has a very strong

00:14:15 --> 00:14:20
constitutional AI element do you think

00:14:17 --> 00:14:22
that that alignment from a company

00:14:19 --> 00:14:23
perspective is what's making code

00:14:21 --> 00:14:26
quality better or do you think it's just

00:14:22 --> 00:14:29
maybe a training and a and a and a and a

00:14:25 --> 00:14:31
kind of refinement issue well I what I

00:14:28 --> 00:14:34
think is that uh um first of all I I

00:14:30 --> 00:14:36
wouldn't expect any one AI company to to

00:14:33 --> 00:14:38
keep the lead for any longer than I'm

00:14:35 --> 00:14:41
sure they're all going to regular each

00:14:37 --> 00:14:43
other I can't speak specifically to you

00:14:40 --> 00:14:45
know whether they use different training

00:14:42 --> 00:14:48
data or not I imagine they all used all

00:14:44 --> 00:14:50
of GitHub um and and then I I would

00:14:47 --> 00:14:52
think you know most of the the quality

00:14:49 --> 00:14:54
issues come down to alignment and of the

00:14:51 --> 00:14:55
three things that I mentioned um they

00:14:53 --> 00:14:57
also have a few more techniques I didn't

00:14:54 --> 00:14:58
get into but of those three things um

00:14:56 --> 00:15:00
they're all doing some combination of

00:14:57 --> 00:15:02
those three things um and those tend to

00:14:59 --> 00:15:04
be the um you know the things I would

00:15:01 --> 00:15:06
think would give you the advantage would

00:15:03 --> 00:15:08
be how do I align this thing to be the

00:15:05 --> 00:15:10
best data scientist the best s and also

00:15:07 --> 00:15:12
the best security engineer allinone

00:15:09 --> 00:15:14
without Robin Peter to pay Paul totally

00:15:11 --> 00:15:17
I mean it seems like the the techniques

00:15:13 --> 00:15:18
that you describe obviously if you amp

00:15:16 --> 00:15:20
up one and reduce the other it probably

00:15:17 --> 00:15:22
leads to an output that's better for

00:15:19 --> 00:15:23
something that's structured like code or

00:15:21 --> 00:15:25
or if you want to write poetry you

00:15:22 --> 00:15:27
probably go in a different direction

00:15:24 --> 00:15:28
right so like yeah no that's a that's a

00:15:26 --> 00:15:32
very interesting a very interesting talk

00:15:27 --> 00:15:34
and and you know like I was saying we've

00:15:31 --> 00:15:37
heard from organizations that like a lot

00:15:33 --> 00:15:40
of this code is still gen a lot of the

00:15:36 --> 00:15:42
code now is is generated by machines and

00:15:39 --> 00:15:43
they you know if you look at a mature

00:15:41 --> 00:15:45
coding organization they do still have

00:15:42 --> 00:15:46
code reviews it's not an early stage

00:15:44 --> 00:15:48
startup but they do they do review the

00:15:45 --> 00:15:50
code that goes in and the defect rate

00:15:47 --> 00:15:53
from what I've heard is generally close

00:15:49 --> 00:15:55
to what you would see in probably a

00:15:52 --> 00:15:58
maybe an early an early level early

00:15:54 --> 00:16:01
career developer so code quality is good

00:15:57 --> 00:16:04
not great still has bugs I'm curious do

00:16:00 --> 00:16:06
you think over time that this coding

00:16:03 --> 00:16:08
quality problem largely gets solved by

00:16:05 --> 00:16:10
AI do you do you think we get humans out

00:16:07 --> 00:16:12
of the loop at some point I think that

00:16:09 --> 00:16:15
his is an alignment issue and Alignment

00:16:11 --> 00:16:17
is the number one largest issue that AI

00:16:14 --> 00:16:19
companies face and there's a lot of

00:16:16 --> 00:16:22
really smart people working on it and so

00:16:18 --> 00:16:27
I think as they fix the problem for how

00:16:21 --> 00:16:30
do I make sure my AI is uh literary

00:16:26 --> 00:16:32
creative um not a Neo-Nazi able to

00:16:29 --> 00:16:34
answer the question that I asked it

00:16:31 --> 00:16:36
without hallucinating as we get the

00:16:33 --> 00:16:39
answer to that we will also logically

00:16:35 --> 00:16:41
solve the how do I make sure my AI is a

00:16:38 --> 00:16:44
data scientist n SRE and writing secure

00:16:41 --> 00:16:46
coding practices or set of AIS if we're

00:16:43 --> 00:16:48
using the Constitutional AI model where

00:16:45 --> 00:16:50
maybe we have One reviewer and and one

00:16:47 --> 00:16:52
manufacturer so yeah I think it's all

00:16:49 --> 00:16:54
going to get better together um and I I

00:16:51 --> 00:16:56
do think that there are AI solutions to

00:16:53 --> 00:16:59
the alignment issue and they have gotten

00:16:55 --> 00:17:04
better over time I mean the answer back

00:16:58 --> 00:17:07
uh uh when uh when Watson or or Tay were

00:17:03 --> 00:17:08
launched were to to scrub it or to pull

00:17:06 --> 00:17:10
it off the internet well now we have

00:17:07 --> 00:17:11
tools where you you can actually train

00:17:09 --> 00:17:13
it on everything and then kind of nudge

00:17:10 --> 00:17:14
it after the fact I I would expect

00:17:12 --> 00:17:16
alignment is going to continue to

00:17:13 --> 00:17:17
approve over time and I expect it will

00:17:15 --> 00:17:18
continue to be one of the largest

00:17:16 --> 00:17:21
challenges that AI companies face as

00:17:17 --> 00:17:23
their AI become more powerful develop

00:17:20 --> 00:17:25
techniques to to lie to us for example

00:17:23 --> 00:17:27
or or you know you need to audit the

00:17:24 --> 00:17:28
thinking step and that you know the

00:17:26 --> 00:17:29
answer step well maybe they're just

00:17:27 --> 00:17:31
auditing the answer step but the

00:17:28 --> 00:17:33
thinking step has some weird stuff in it

00:17:30 --> 00:17:34
um all of this kind of comes back to the

00:17:32 --> 00:17:36
idea of alignment and there's a lot of

00:17:33 --> 00:17:38
really smart people and heavy investment

00:17:35 --> 00:17:40
into improving alignment um but it's

00:17:38 --> 00:17:42
just not there right now when it comes

00:17:39 --> 00:17:43
to secure coding it isn't yeah but it is

00:17:41 --> 00:17:44
for hate speech I mean I have to say

00:17:42 --> 00:17:46
like the alignment stuff that they've

00:17:43 --> 00:17:47
done the safety stuff they've done it's

00:17:45 --> 00:17:49
pretty impressive like well there's a

00:17:46 --> 00:17:51
cyber security alignment that all

00:17:48 --> 00:17:53
companies have have have invested into

00:17:50 --> 00:17:55
as well which is they don't want

00:17:53 --> 00:17:57
generally speaking they don't want their

00:17:54 --> 00:17:59
AIS to be used to hack stuff yeah and so

00:17:56 --> 00:18:01
they'll most of them will go through a

00:17:58 --> 00:18:02
Tron of you know this thing was trained

00:18:00 --> 00:18:04
on all of metas sploit and all of C

00:18:01 --> 00:18:06
Linux let's maybe forget some of that

00:18:03 --> 00:18:08
stuff let's ask it a question and it

00:18:05 --> 00:18:09
says that's unethical I I don't know how

00:18:07 --> 00:18:11
to hack into something well imagine if

00:18:08 --> 00:18:13
they didn't invest all that like how

00:18:10 --> 00:18:16
powerful this thing would be you've got

00:18:12 --> 00:18:19
models these days that beat

00:18:15 --> 00:18:22
humans uh you know at the 90th

00:18:18 --> 00:18:24
percentile uh at at at coding challenges

00:18:21 --> 00:18:27
you don't need someone in the 90th

00:18:24 --> 00:18:29
percentile in in the coding challenges

00:18:26 --> 00:18:30
to hack into a company you've got plenty

00:18:28 --> 00:18:32
of teenagers oh yeah that have gone to

00:18:29 --> 00:18:36
jail for haing in companies so it would

00:18:31 --> 00:18:38
be very very easy to align um an AI

00:18:35 --> 00:18:41
robot to to be probably the most

00:18:37 --> 00:18:42
powerful hacker in the world um and and

00:18:40 --> 00:18:45
I think the AI companies have actually

00:18:41 --> 00:18:48
invested more into that than they have

00:18:44 --> 00:18:50
into how do I make sure my AI is

00:18:47 --> 00:18:53
ecurely coding and not manufacturing

00:18:49 --> 00:18:55
vulnerabilities so if you're if you're

00:18:52 --> 00:18:57
giving advice to someone let's say a a

00:18:54 --> 00:18:59
medium to large siiz company they've got

00:18:56 --> 00:19:01
more than 10 developers they need to

00:18:58 --> 00:19:03
faster they need to ship more features

00:19:00 --> 00:19:04
right we we've all lived in that world

00:19:02 --> 00:19:06
you've got to you got to get you don't

00:19:03 --> 00:19:09
get paid to fix bugs you get paid to

00:19:05 --> 00:19:10
ship features um what do you tell them

00:19:08 --> 00:19:12
how do they go forward how do they

00:19:09 --> 00:19:14
protect themselves like obviously

00:19:12 --> 00:19:17
everyone's adopting cursor everyone's

00:19:13 --> 00:19:19
using Code gen right like how do how do

00:19:16 --> 00:19:21
we kind of do this safely going forward

00:19:18 --> 00:19:23
if you don't have the resources for an

00:19:20 --> 00:19:26
AI Governor that's an expert in security

00:19:22 --> 00:19:28
to audit your code and you need a person

00:19:25 --> 00:19:30
that audits the code and and you need a

00:19:27 --> 00:19:31
person to go in and say you know you

00:19:29 --> 00:19:34
introduced a SQL injection you need to

00:19:30 --> 00:19:37
use parameterized queries um I think

00:19:33 --> 00:19:40
that those Market options will become

00:19:36 --> 00:19:42
more available in the coming years there

00:19:39 --> 00:19:45
will be companies that specialize in

00:19:41 --> 00:19:46
security governance and will go in and

00:19:44 --> 00:19:49
will do the markup for you but for right

00:19:45 --> 00:19:51
now if you're an underresourced team and

00:19:48 --> 00:19:52
you don't have access to those resources

00:19:50 --> 00:19:55
it needs to be a person that reviews the

00:19:51 --> 00:19:56
output of the AI so we keep the buddy

00:19:54 --> 00:19:58
system except one half of the buddy

00:19:55 --> 00:20:00
system is AI and the other is a human

00:19:57 --> 00:20:02
that reviews the AI yeah that's right I

00:19:59 --> 00:20:05
mean for a long time there were

00:20:01 --> 00:20:07
quirements uh that that said you you

00:20:04 --> 00:20:09
need to have two two reviewers and I

00:20:06 --> 00:20:11
think maybe that's that's still a good

00:20:08 --> 00:20:12
idea you have the the person and the AI

00:20:10 --> 00:20:13
writing the code and then maybe two

00:20:11 --> 00:20:15
people to go in and review it or

00:20:12 --> 00:20:16
something depending on you know what the

00:20:14 --> 00:20:19
code is I think it's important that in

00:20:15 --> 00:20:21
until we figure out the Security

00:20:18 --> 00:20:25
Supervisor we don't remove those humans

00:20:20 --> 00:20:25
from the loop just yet

00:20:24 --> 00:20:28
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
