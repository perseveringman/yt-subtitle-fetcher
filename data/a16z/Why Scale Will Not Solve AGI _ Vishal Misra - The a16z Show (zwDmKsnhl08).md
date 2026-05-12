---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "zwDmKsnhl08"
title: "Why Scale Will Not Solve AGI | Vishal Misra - The a16z Show"
video_url: "https://www.youtube.com/watch?v=zwDmKsnhl08"
thumbnail_url: "https://i.ytimg.com/vi/zwDmKsnhl08/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=zwDmKsnhl08"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2026-03-17T14:42:25.000Z"
upload_date: "2026-03-17"
duration_seconds: 2808
duration_human: "46:48"
view_count: 9513
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:20:12.193Z"
---

# Why Scale Will Not Solve AGI | Vishal Misra - The a16z Show

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=zwDmKsnhl08
- video_id: zwDmKsnhl08
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2026-03-17T14:42:25.000Z
- upload_date: 2026-03-17
- duration: 46:48
- view_count: 9513
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Vishal Misra returns to explain his latest research on how LLMs actually work under the hood. He walks through experiments showing that transformers update their predictions in a precise, mathematically predictable way as they process new information, explains why this still doesn't mean they're conscious, and describes what's actually required for AGI: the ability to keep learning after training and the move from pattern matching to understanding cause and effect.

Timestamps
00:00 — Introduction
02:58 — LLM as Giant Matrix
08:24 — What Is In-Context Learning
13:00 — Bayesian Updating as Evidence
19:13 — Bayesian Wind Tunnel Tests
27:22 — Brains Simulate Causality
36:34 — Manifolds and New Representations
42:17 — Simulation as Short Program

Read the full transcript here: https://www.a16z.news/s/podcast

Resources:
Follow Vishal Misra on X: https://x.com/vishalmisra 
Follow Martin Casado on X: https://x.com/martin_casado 

Stay Updated:
If you enjoyed this episode, be sure to like, subscribe, and share with your friends!

Find a16z on X: https://twitter.com/a16z

Find a16z on LinkedIn: https://www.linkedin.com/company/a16z

Listen to the a16z Show on Spotify: https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX

Listen to the a16z Show on Apple Podcasts: https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711

Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see http://a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
Anthropic makes great products. Clot

00:00:02 --> 00:00:08
code is fantastic. Co-work is fantastic.

00:00:05 --> 00:00:10
But they are grains of silicon doing

00:00:07 --> 00:00:11
matrix multiplication. They don't have

00:00:09 --> 00:00:14
consciousness. They don't have an inner

00:00:10 --> 00:00:18
monologue. You take an LLM and train it

00:00:13 --> 00:00:19
on pre 1916 or 1911 physics and see if

00:00:17 --> 00:00:21
it can come up with the theory of

00:00:18 --> 00:00:22
relativity. If it does, then we have

00:00:20 --> 00:00:25
AGI.

00:00:21 --> 00:00:27
>> Just today, by the way, Daario allegedly

00:00:24 --> 00:00:28
said that you can't rule out that

00:00:26 --> 00:00:31
hey're conscious. You can rule out

00:00:28 --> 00:00:34
heir cost. I think I mean come on to

00:00:30 --> 00:00:35
get to what is called AGI. I think there

00:00:33 --> 00:00:38
are two things that need to happen. One

00:00:34 --> 00:00:38
is

00:00:39 --> 00:00:42
>> Michelle. It's great to have you in

00:00:40 --> 00:00:44
again.

00:00:41 --> 00:00:47
>> Great to be back. This is one of my

00:00:43 --> 00:00:48
favorite topics which is um how do LLM

00:00:46 --> 00:00:50
actually work?

00:00:47 --> 00:00:52
>> And I think that uh you in my opinion

00:00:49 --> 00:00:53
you've done kind of the best work on

00:00:51 --> 00:00:55
this modeling it out.

00:00:52 --> 00:00:58
>> Thank you. For those that did not see

00:00:54 --> 00:01:00
the original um one, maybe it's probably

00:00:57 --> 00:01:02
worth doing just a quick background on

00:01:00 --> 00:01:04
kind of what led you to this point and

00:01:01 --> 00:01:04
then we'll just go into the current work

00:01:03 --> 00:01:08
that you've been doing.

00:01:04 --> 00:01:09
>> 5 years ago when GPD3 was first

00:01:07 --> 00:01:14
released,

00:01:08 --> 00:01:16
>> uh I got early access to it and I

00:01:13 --> 00:01:19
started playing with it and I was trying

00:01:15 --> 00:01:20
to solve a problem related to quering a

00:01:18 --> 00:01:23
cricket database.

00:01:19 --> 00:01:25
>> Yeah. And I got GPD3

00:01:22 --> 00:01:27
to do in context learning, few short

00:01:24 --> 00:01:29
learning. And you know it was kind of

00:01:26 --> 00:01:32
the

00:01:28 --> 00:01:36
first at least to to me it was the first

00:01:31 --> 00:01:37
known uh implementation of rag retrieval

00:01:35 --> 00:01:40
augmented generation which I used to

00:01:36 --> 00:01:42
solve this problem of uh querying

00:01:39 --> 00:01:45
etting GPD3 to translate natural

00:01:41 --> 00:01:47
anguage into something that could be

00:01:44 --> 00:01:50
used to query a database that GPD3 had

00:01:46 --> 00:01:51
no idea about. I had no access to GPD3's

00:01:49 --> 00:01:54
internals, but I was still able to use

00:01:50 --> 00:01:56
it to solve that problem. So, it it it

00:01:53 --> 00:02:00
worked beautifully. Uh we we deployed uh

00:01:55 --> 00:02:02
this uh in production at ESPN in

00:01:59 --> 00:02:05
September 21. But

00:02:01 --> 00:02:07
>> Wow. Wow. You

00:02:04 --> 00:02:08
you did the first implementation of Frag

00:02:06 --> 00:02:09
in 2021.

00:02:07 --> 00:02:10
>> No, no, no. In 2020.

00:02:08 --> 00:02:12
>> 2020.

00:02:09 --> 00:02:14
I got it working and by the time

00:02:11 --> 00:02:15
you talked to all the lawyers at ESPN

00:02:13 --> 00:02:18
and you know, productionize it, it took

00:02:14 --> 00:02:23
a while. But October 2020 we had

00:02:18 --> 00:02:25
well I had this architecture working but

00:02:22 --> 00:02:27
after I got it to work I was amazed that

00:02:24 --> 00:02:28
it worked. I wanted to understand how it

00:02:26 --> 00:02:31
worked

00:02:27 --> 00:02:32
>> and I looked at

00:02:30 --> 00:02:34
you know the attention is all your deep

00:02:31 --> 00:02:37
apers and all the other sort of deep

00:02:33 --> 00:02:38
learning architecture papers and I

00:02:36 --> 00:02:39
couldn't understand why it worked.

00:02:37 --> 00:02:42
>> Yeah.

00:02:38 --> 00:02:44
>> So then I started getting sort of deep

00:02:41 --> 00:02:47
into building a mathematical model.

00:02:43 --> 00:02:49
>> Yeah. And now you published a series of

00:02:46 --> 00:02:50
papers. The first one that I read was

00:02:48 --> 00:02:52
the one where you had kind of your

00:02:49 --> 00:02:54
matrix kind of abstraction. So maybe

00:02:51 --> 00:02:55
we'll talk about that and then we'll

00:02:53 --> 00:02:55
talk about the more recent

00:02:54 --> 00:02:56
>> Yeah.

00:02:54 --> 00:02:58
>> work.

00:02:55 --> 00:02:59
>> So perhaps we'll just start with the

00:02:57 --> 00:03:01
first one which is

00:02:58 --> 00:03:03
>> you were trying to you were trying to

00:03:00 --> 00:03:05
describe you're trying to come up with a

00:03:02 --> 00:03:05
mathematical model of how LLM works.

00:03:04 --> 00:03:07
>> Yeah.

00:03:04 --> 00:03:09
>> And you had which was very helpful to me

00:03:06 --> 00:03:10
which was um and at the time you were

00:03:08 --> 00:03:12
actually trying to like figure out how

00:03:09 --> 00:03:12
incontext learning was working.

00:03:11 --> 00:03:14
>> Yes. Yeah.

00:03:11 --> 00:03:16
>> And you came up with an abstraction for

00:03:13 --> 00:03:17
LLMs which is basically this very very

00:03:15 --> 00:03:19
large matrix and you use that to

00:03:16 --> 00:03:20
describe. So maybe you can kind of walk

00:03:18 --> 00:03:20
through that work very quick.

00:03:19 --> 00:03:23
>> Sure.

00:03:19 --> 00:03:26
>> Yeah. So so what you do is you you

00:03:22 --> 00:03:29
imagine this huge gigantic matrix where

00:03:25 --> 00:03:30
very row of the matrix corresponds to a

00:03:28 --> 00:03:34
prompt.

00:03:30 --> 00:03:38
And the way these LLMs work is given a

00:03:33 --> 00:03:40
prompt they construct a distribution of

00:03:37 --> 00:03:43
probabilities of the next token. Next

00:03:39 --> 00:03:45
oken is next word. So every LLM has a

00:03:42 --> 00:03:46
vocabulary, you know, GPD and its

00:03:44 --> 00:03:48
variants have a vocabulary of about

00:03:45 --> 00:03:50
50,000 tokens.

00:03:47 --> 00:03:52
>> So given a prompt, it'll come up with a

00:03:49 --> 00:03:54
distribution of what the next token

00:03:51 --> 00:03:55
should be. And then all these models

00:03:53 --> 00:03:57
ample from that distribution.

00:03:54 --> 00:03:57
>> Yeah. So that's the posterior

00:03:56 --> 00:03:58
distribution.

00:03:56 --> 00:04:00
>> That's the posterior distribution,

00:03:57 --> 00:04:02
right? That that's how LLM work. And so

00:03:59 --> 00:04:05
the idea of this matrix is matrix is for

00:04:02 --> 00:04:07
every possible combination of tokens

00:04:04 --> 00:04:07
which is a prompt, there's a row.

00:04:06 --> 00:04:10
>> Yeah. Yeah.

00:04:06 --> 00:04:11
>> And the columns are a distribution over

00:04:09 --> 00:04:12
the vocabulary.

00:04:10 --> 00:04:14
>> So if you have like a vocabulary of

00:04:11 --> 00:04:15
50,000 possible tokens, it's a

00:04:13 --> 00:04:16
distribution over

00:04:14 --> 00:04:18
>> those 50,000 tokens.

00:04:16 --> 00:04:18
>> And by distribution, it's just the

00:04:17 --> 00:04:20
probability

00:04:18 --> 00:04:22
>> just the probability. Sorry. Yeah. Just

00:04:19 --> 00:04:24
he probability that the next token

00:04:21 --> 00:04:25
should be this versus that.

00:04:23 --> 00:04:27
>> Y.

00:04:24 --> 00:04:29
>> Uh so that that's sort of the idea and

00:04:26 --> 00:04:33
when you start viewing it that way,

00:04:28 --> 00:04:36
it makes things at least clearer to

00:04:32 --> 00:04:39
people like me who want to model it. uh

00:04:35 --> 00:04:42
what what's happening? So concretely

00:04:38 --> 00:04:44
let's say you have an example that

00:04:41 --> 00:04:48
uh let's say your prompt is just one

00:04:43 --> 00:04:50
word protein. Yeah. So if you look at

00:04:47 --> 00:04:53
he distribution of the next word next

00:04:49 --> 00:04:56
oken after that uh most of the uh

00:04:52 --> 00:04:58
probabilities would be zero but you'd

00:04:55 --> 00:05:02
have non zero non-trivial probabilities

00:04:57 --> 00:05:04
on let's say two words one is synthesis

00:05:01 --> 00:05:08
the other is shake

00:05:03 --> 00:05:11
>> right and now the LLM is going to sample

00:05:07 --> 00:05:13
synthesis sample uh this next token and

00:05:10 --> 00:05:17
man pick synthesis or shake

00:05:12 --> 00:05:18
>> or you as a human will give the prompt

00:05:16 --> 00:05:21
protein shake

00:05:17 --> 00:05:23
>> or protein synthesis. Now, depending on

00:05:20 --> 00:05:26
whether you pick synthesis or shake, the

00:05:22 --> 00:05:29
next that row looks very different,

00:05:25 --> 00:05:31
right? If you pick protein synthesis,

00:05:28 --> 00:05:32
the terms that would have a high

00:05:30 --> 00:05:36
probability would be all concerned with

00:05:31 --> 00:05:38
biology, right? But if you pick protein

00:05:35 --> 00:05:40
shake, it'll all be about gyms and

00:05:37 --> 00:05:42
exercise and all, you know, bodybuilding

00:05:39 --> 00:05:44
stuff. So, that synthesis or shake

00:05:42 --> 00:05:47
completely changes what comes next.

00:05:43 --> 00:05:51
>> Yeah. So this is an example of uh you

00:05:46 --> 00:05:53
can say bijian updating.

00:05:50 --> 00:05:55
You start with protein you have a prior

00:05:52 --> 00:05:58
that after protein this is going to

00:05:54 --> 00:06:02
happen. As soon as you get new evidence

00:05:57 --> 00:06:06
then the next term is synthesis or shake

00:06:01 --> 00:06:08
you completely update the distribution.

00:06:05 --> 00:06:11
So now you can imagine that the whole

00:06:07 --> 00:06:14
the the entirety of LLM is this giant

00:06:10 --> 00:06:16
matrix where you have every row protein

00:06:13 --> 00:06:17
shake protein synthesis the cat

00:06:15 --> 00:06:20
sat on the

00:06:16 --> 00:06:25
>> you know Humpty Dumpty blah blah blah

00:06:19 --> 00:06:28
>> now given uh the vocabulary of uh these

00:06:24 --> 00:06:32
LLM let's say 50,000 and the context

00:06:27 --> 00:06:34
window so GPD for instance chat GPD the

00:06:31 --> 00:06:37
first version had a context window of

00:06:33 --> 00:06:40
8,000 tokens. Yeah, if you look at all

00:06:36 --> 00:06:44
possible combinations of 8,000 tokens

00:06:39 --> 00:06:46
and 50,000 uh vocabulary, the number of

00:06:43 --> 00:06:47
rows

00:06:45 --> 00:06:51
in this matrix is more than the number

00:06:46 --> 00:06:54
of electrons across all galaxies. Right?

00:06:50 --> 00:06:57
>> So, so there's no way that these LLMs

00:06:53 --> 00:06:59
can represent it exactly now.

00:06:56 --> 00:07:01
Fortunately, this matrix is very sparse.

00:06:58 --> 00:07:02
Why? Because you know an arbitrary

00:07:00 --> 00:07:04
combination of these tokens is

00:07:02 --> 00:07:06
gibberish. We're not never going to use

00:07:03 --> 00:07:07
that in natural in real life.

00:07:06 --> 00:07:12
>> Yeah.

00:07:06 --> 00:07:12
>> Also, the columns are also mainly zero.

00:07:11 --> 00:07:14
>> Yeah.

00:07:11 --> 00:07:16
>> Right. If you have protein, then you

00:07:13 --> 00:07:18
won't have lots of, you know, you won't

00:07:15 --> 00:07:20
have arbitrary numbers or arbitrary

00:07:17 --> 00:07:25
words after that. It's very sparse both

00:07:19 --> 00:07:28
in rows and in columns. So I in kind of

00:07:24 --> 00:07:31
an abstract way what all these LLMs are

00:07:28 --> 00:07:33
doing is coming coming up with a

00:07:30 --> 00:07:36
compressed representation

00:07:32 --> 00:07:39
of this matrix and when you give a

00:07:35 --> 00:07:42
prompt they try to approximate what the

00:07:38 --> 00:07:44
true distribution should have been and

00:07:41 --> 00:07:46
try to generate it that that's what uh

00:07:43 --> 00:07:49
in my mind at least it boils up to

00:07:46 --> 00:07:54
>> just from my understanding. So if you

00:07:48 --> 00:07:57
have a row of uh protein

00:07:53 --> 00:07:57
and then you have one with protein shake

00:07:56 --> 00:08:00
>> Mhm.

00:07:56 --> 00:08:01
>> is protein shake a subset of protein or

00:07:59 --> 00:08:03
is it different?

00:08:00 --> 00:08:04
>> It's different. It's a continuation from

00:08:02 --> 00:08:05
>> I see.

00:08:03 --> 00:08:06
>> Yeah.

00:08:04 --> 00:08:08
>> Right. No, but I'm just saying like the

00:08:05 --> 00:08:09
actual the actual posterior distribution

00:08:07 --> 00:08:11
is that a subset?

00:08:08 --> 00:08:13
>> You you can say it's a subset, right? Uh

00:08:10 --> 00:08:14
if you have protein then protein shake

00:08:12 --> 00:08:16
and protein synthesis are all

00:08:13 --> 00:08:19
continuations from protein. So both

00:08:15 --> 00:08:23
synthesis and shake have non-zero

00:08:18 --> 00:08:25
probabilities. So you can yeah

00:08:22 --> 00:08:26
you can think of it as somewhat a subset

00:08:24 --> 00:08:28
>> right

00:08:25 --> 00:08:31
>> you you know you use this approach to

00:08:27 --> 00:08:33
describe how in context learning works

00:08:30 --> 00:08:35
and so maybe first describe what in

00:08:32 --> 00:08:37
context learning is and then kind of the

00:08:34 --> 00:08:41
conclusion that you came from that. So

00:08:36 --> 00:08:46
eight context learning is when you

00:08:40 --> 00:08:48
h show the LLM something it has kind of

00:08:45 --> 00:08:51
never seen before. You give it a few

00:08:47 --> 00:08:53
examples of this is what it wants uh

00:08:50 --> 00:08:55
this is what you're trying to do. Then

00:08:52 --> 00:08:56
you give a new problem which is related

00:08:54 --> 00:08:59
to the examples that you have shown

00:08:56 --> 00:09:02
>> and the LLM learns in real time what

00:08:58 --> 00:09:03
it's supposed to do and solves that

00:09:01 --> 00:09:05
problem. And by the way, the first time

00:09:02 --> 00:09:09
I saw this, it absolutely blew my mind.

00:09:04 --> 00:09:11
And I actually I actually use your DSL

00:09:08 --> 00:09:14
>> when I was like first learning about it.

00:09:10 --> 00:09:17
So maybe like kind of like

00:09:13 --> 00:09:18
the DSL thing is just just crazy this

00:09:16 --> 00:09:20
works at all.

00:09:17 --> 00:09:23
>> It's absolutely, you know, mind-blowing

00:09:19 --> 00:09:26
that it works. And so going back to that

00:09:22 --> 00:09:28
cricket problem was you know

00:09:25 --> 00:09:31
in the mid '90s uh I was part of a group

00:09:27 --> 00:09:32
that had created this uh cricket portal

00:09:30 --> 00:09:33
called cricket info.

00:09:31 --> 00:09:37
>> Yeah.

00:09:32 --> 00:09:39
>> Uh cricket uh is a very start sport. You

00:09:36 --> 00:09:42
know you think baseball multiply by a

00:09:38 --> 00:09:45
thousand. at all kinds of stats and we

00:09:41 --> 00:09:47
had created this uh

00:09:44 --> 00:09:49
online searchable database called stats

00:09:46 --> 00:09:52
guru where you could search for anything

00:09:48 --> 00:09:54
any stat related to cricket and has been

00:09:51 --> 00:09:57
available since 2000

00:09:53 --> 00:09:59
>> but because you can query for anything

00:09:56 --> 00:10:00
everything was be made available and how

00:09:58 --> 00:10:02
do you make something like that

00:09:59 --> 00:10:04
available to the general public well

00:10:01 --> 00:10:07
they're not going to write SQL queries

00:10:03 --> 00:10:10
>> the next best thing at that time was to

00:10:06 --> 00:10:12
create a web form unfortunately ally

00:10:09 --> 00:10:14
everything was crammed into that web

00:10:11 --> 00:10:17
form. So as a result you had like 20

00:10:14 --> 00:10:20
drop downs, 15 checkboxes, 18 different

00:10:16 --> 00:10:23
ext fields. It looked like a very

00:10:19 --> 00:10:25
complicated, daunting interface. So as a

00:10:22 --> 00:10:27
result, even though it could solve or it

00:10:24 --> 00:10:30
could answer any query, almost no one

00:10:26 --> 00:10:31
used it. A vanishingly small percentage

00:10:29 --> 00:10:34
of cricket fans use it because it it

00:10:30 --> 00:10:37
just looked intimidating. And then ESPN

00:10:33 --> 00:10:40
bought that site uh in 2007.

00:10:36 --> 00:10:42
I still know people who uh run the site

00:10:39 --> 00:10:45
and I always told them you know why

00:10:41 --> 00:10:47
don't you do something about stats guru

00:10:44 --> 00:10:49
and in January 2020 uh the

00:10:46 --> 00:10:51
ditor-inchief of cricket info Sambbal

00:10:48 --> 00:10:53
he's he's a friend so he came to New

00:10:50 --> 00:10:55
York and we had gone out for rings and

00:10:52 --> 00:10:57
again I told him you know why don't you

00:10:54 --> 00:10:58
do something about stats guru so he

00:10:56 --> 00:11:00
looks at me and says why don't you do

00:10:57 --> 00:11:03
something about stats guru he was joking

00:10:59 --> 00:11:05
but uh that idea kind of stayed with me

00:11:02 --> 00:11:07
and when GP3 was released I thought

00:11:04 --> 00:11:10
maybe I could use stats guru

00:11:06 --> 00:11:12
se GP3 to create a front end for stats

00:11:10 --> 00:11:15
guru.

00:11:11 --> 00:11:18
>> And so what I did was uh I designed a

00:11:14 --> 00:11:21
DSL a domain specific language which uh

00:11:17 --> 00:11:23
converted queries about cricket stats in

00:11:20 --> 00:11:24
atural language into this DSL.

00:11:22 --> 00:11:25
>> No.

00:11:23 --> 00:11:27
>> And to be clear you created this it

00:11:24 --> 00:11:29
wasn't like part of like any training

00:11:26 --> 00:11:30
that was online that like could have

00:11:28 --> 00:11:32
seen.

00:11:29 --> 00:11:34
>> Nothing GPD could have seen. I created

00:11:31 --> 00:11:37
it. I thought okay this makes sense. So

00:11:33 --> 00:11:39
I designed that DSL and then I did that

00:11:36 --> 00:11:42
few short learning things. So I would so

00:11:38 --> 00:11:46
I created about a database of about I

00:11:41 --> 00:11:49
would say 1500 natural language queries

00:11:45 --> 00:11:51
and the DSL corresponding to that query.

00:11:48 --> 00:11:54
So when a new query came in, somebody's

00:11:50 --> 00:11:57
asking a stats question in English. What

00:11:53 --> 00:11:59
I would do is I would go through the

00:11:56 --> 00:12:04
natural language queries, do a semantic

00:11:58 --> 00:12:05
search, pick the most closely matching

00:12:03 --> 00:12:05
top few.

00:12:04 --> 00:12:07
>> Yeah.

00:12:04 --> 00:12:10
>> Uh and then use that natural language

00:12:06 --> 00:12:13
query and its DSL and send that as a

00:12:09 --> 00:12:15
prefix. Now GPD3, if you recall, had a

00:12:12 --> 00:12:17
context window of only 2,000 tokens.

00:12:14 --> 00:12:19
>> Yeah. So you had to be very judicious

00:12:16 --> 00:12:21
about which examples that you picked.

00:12:18 --> 00:12:24
But you pick that and then you send the

00:12:20 --> 00:12:27
new query and GP3 would complete it in

00:12:23 --> 00:12:29
the DSL that I had designed which until

00:12:26 --> 00:12:29
milliseconds ago it had never seen.

00:12:28 --> 00:12:31
>> Yeah.

00:12:28 --> 00:12:33
>> And I had no access to internals of

00:12:30 --> 00:12:33
GPD3. I had no access to the weights.

00:12:32 --> 00:12:36
>> Yeah.

00:12:32 --> 00:12:37
>> But still it worked. So that that's how

00:12:35 --> 00:12:39
so

00:12:36 --> 00:12:42
>> so so it's not obvious to me given your

00:12:38 --> 00:12:44
matrix example of like a prompt and then

00:12:41 --> 00:12:46
a distribution how something like in

00:12:43 --> 00:12:47
context learning

00:12:45 --> 00:12:48
>> works

00:12:46 --> 00:12:50
>> would work and so like I think your

00:12:47 --> 00:12:51
first paper

00:12:49 --> 00:12:52
>> tackled this problem

00:12:50 --> 00:12:55
>> right

00:12:51 --> 00:12:59
>> um and so maybe you could walk through

00:12:54 --> 00:13:01
your understanding of how LLMs

00:12:58 --> 00:13:03
do in context learning.

00:13:00 --> 00:13:07
>> Yeah. So, so when you think about what

00:13:02 --> 00:13:10
in context learning is is that

00:13:06 --> 00:13:12
as you see evidence. So, so you know in

00:13:09 --> 00:13:14
the first paper what I also did was I I

00:13:11 --> 00:13:15
took this cricket DSL example.

00:13:13 --> 00:13:18
>> Yeah.

00:13:14 --> 00:13:21
>> And I uh

00:13:17 --> 00:13:22
I depicted the next token probabilities

00:13:20 --> 00:13:25
>> mhm

00:13:21 --> 00:13:27
>> of the model as it was shown more and

00:13:24 --> 00:13:29
more examples. So the first time you

00:13:26 --> 00:13:32
show it this DSL the natural language

00:13:28 --> 00:13:35
and the DSL the probabilities of the DSL

00:13:31 --> 00:13:39
tokens were were extremely low because

00:13:34 --> 00:13:42
GP3 had never seen this thing. When it

00:13:38 --> 00:13:44
saw the cricket question

00:13:41 --> 00:13:47
in its mind it was trying to continue it

00:13:43 --> 00:13:50
with an English answer.

00:13:46 --> 00:13:52
So the probabilities that were high were

00:13:49 --> 00:13:56
all English words.

00:13:51 --> 00:13:58
>> Yeah. Once it saw my prompt where I had

00:13:55 --> 00:14:01
the question and the DSL, the next time

00:13:58 --> 00:14:04
I had the question in the next row, the

00:14:00 --> 00:14:05
probabilities of the DSL token started

00:14:03 --> 00:14:08
going up

00:14:04 --> 00:14:10
with every example, it went up and

00:14:07 --> 00:14:12
finally when I gave the new query, it

00:14:09 --> 00:14:14
was like it had almost 100% probability

00:14:12 --> 00:14:14
of getting the right token.

00:14:13 --> 00:14:18
>> Yeah.

00:14:13 --> 00:14:21
>> So this is an example of in real time

00:14:17 --> 00:14:23
the model was updating its posterior

00:14:20 --> 00:14:25
probability. It was upgrading its

00:14:22 --> 00:14:28
knowledge that okay I've seen evidence

00:14:24 --> 00:14:30
this is what I'm supposed to do. Now

00:14:27 --> 00:14:31
this is a colloquial way of saying what

00:14:29 --> 00:14:34
Beijian

00:14:30 --> 00:14:37
>> inference is. Beijian updating basically

00:14:33 --> 00:14:39
is you start with a prior when you see a

00:14:36 --> 00:14:41
new evidence you update your posterior.

00:14:38 --> 00:14:43
That's the mathematical division. But

00:14:40 --> 00:14:46
but in in English it's basically you see

00:14:42 --> 00:14:47
something you see new evidence you

00:14:45 --> 00:14:48
pdate your belief about what's

00:14:46 --> 00:14:48
happening.

00:14:47 --> 00:14:52
>> Yeah.

00:14:47 --> 00:14:54
>> Right. So it was clear to me that LLMs

00:14:51 --> 00:14:57
are doing something which resembles

00:14:53 --> 00:14:59
Beijian updating. So in that first paper

00:14:56 --> 00:15:01
I had this matrix formulation and I

00:14:58 --> 00:15:04
showed that you know what it's doing. It

00:15:00 --> 00:15:05
looks like Beijian updating.

00:15:03 --> 00:15:07
>> Yeah.

00:15:04 --> 00:15:08
>> Then we can come to the sort of next

00:15:06 --> 00:15:10
series of papers.

00:15:07 --> 00:15:12
>> That's right. So okay so I mean it it it

00:15:09 --> 00:15:14
seemed pretty conclusive to me at that

00:15:11 --> 00:15:17
ime and then you went quiet for a while

00:15:14 --> 00:15:18
and then I still remember the WhatsApp

00:15:16 --> 00:15:20
text. You said Martin I know exactly how

00:15:18 --> 00:15:21
these things are working now.

00:15:19 --> 00:15:22
>> Yeah. Well

00:15:20 --> 00:15:24
>> and then and then and then listen you

00:15:21 --> 00:15:25
dropped a series of papers that kind of

00:15:23 --> 00:15:26
broke the internet. like you went super

00:15:24 --> 00:15:30
viral on Twitter like I mean people

00:15:26 --> 00:15:32
really noticed. Um uh and so I I want to

00:15:29 --> 00:15:34
get to that in just a second. But before

00:15:31 --> 00:15:35
that, um

00:15:33 --> 00:15:38
>> I remember when your first paper came

00:15:34 --> 00:15:39
out, people would be like,

00:15:37 --> 00:15:44
>> you know, these things are definitely

00:15:38 --> 00:15:45
not Beijian. Like, you know, you know,

00:15:43 --> 00:15:47
anything could be considered to be

00:15:44 --> 00:15:50
Beijian, but they're not. Like, why do

00:15:46 --> 00:15:52
you think that there was this reaction

00:15:49 --> 00:15:53
to like,

00:15:51 --> 00:15:55
>> you know, there's something new, they're

00:15:52 --> 00:15:57
not Beijian? I mean, I felt like there's

00:15:54 --> 00:15:58
almost kind of a backlash just because

00:15:56 --> 00:16:00
they're being characterized as

00:15:57 --> 00:16:05
>> Yeah. Yeah. I I think this whole world

00:15:59 --> 00:16:07
of uh uh probability and machine

00:16:04 --> 00:16:08
learning that there have been camps of

00:16:06 --> 00:16:09
Beijian and frequentists.

00:16:07 --> 00:16:11
>> Yes.

00:16:08 --> 00:16:13
>> And I don't want to get in the middle of

00:16:10 --> 00:16:15
that sort of political battle, but

00:16:12 --> 00:16:17
Beijian has become like almost like

00:16:14 --> 00:16:18
people had a reaction to that. It's it's

00:16:16 --> 00:16:20
part of that war.

00:16:17 --> 00:16:22
>> I see.

00:16:19 --> 00:16:24
>> So, it's like the old Beijian

00:16:21 --> 00:16:26
frequentist type battle. Yeah. So, so

00:16:23 --> 00:16:28
people just had oh no you can say

00:16:25 --> 00:16:30
anything is Beijian right? So I said

00:16:27 --> 00:16:33
okay maybe they have a point maybe what

00:16:29 --> 00:16:34
we are saying is not really Beijian how

00:16:32 --> 00:16:35
do we prove that it's Beijian

00:16:33 --> 00:16:39
>> right

00:16:34 --> 00:16:43
>> so then first I have to thank you and

00:16:38 --> 00:16:45
Harovitz for this uh

00:16:42 --> 00:16:47
>> you know when I when I when I said that

00:16:44 --> 00:16:49
I in my first paper I showed these

00:16:46 --> 00:16:52
probabilities

00:16:48 --> 00:16:55
>> uh it was because open AI had in its

00:16:52 --> 00:16:57
chat uh interface

00:16:54 --> 00:17:01
uh this option to displays those

00:16:56 --> 00:17:03
probabilities then they stopped

00:17:00 --> 00:17:04
>> so we could not peer inside what's going

00:17:02 --> 00:17:07
what's happening for some reason they

00:17:03 --> 00:17:09
stopped openai

00:17:06 --> 00:17:11
I'm not going to get into

00:17:08 --> 00:17:13
>> the open and close but but they stopped

00:17:10 --> 00:17:16
so then we developed our own interface

00:17:12 --> 00:17:18
which could let you look not only at uh

00:17:15 --> 00:17:20
the probabilities but also the entropy

00:17:17 --> 00:17:21
of the next token was this on top of an

00:17:20 --> 00:17:23
open source model

00:17:20 --> 00:17:25
>> yeah yeah so so you can load any sort of

00:17:22 --> 00:17:26
open source model but you know being an

00:17:24 --> 00:17:28
academia

00:17:26 --> 00:17:29
We didn't have access to compute. Thanks

00:17:27 --> 00:17:33
to

00:17:28 --> 00:17:34
>> your generous uh uh donation, we got uh

00:17:32 --> 00:17:36
the clusters

00:17:33 --> 00:17:37
>> to run uh over what it's called token

00:17:36 --> 00:17:39
probe. So you can go to

00:17:36 --> 00:17:40
kenprobe.cchs.colia.edu.

00:17:38 --> 00:17:42
>> Is it still running?

00:17:39 --> 00:17:44
>> It's still running. It's still running

00:17:41 --> 00:17:47
and people come to it. Uh I use it in my

00:17:43 --> 00:17:49
classes uh to get students to do

00:17:46 --> 00:17:51
assignments. They write their own DSLs

00:17:48 --> 00:17:52
and you know they say that that it

00:17:50 --> 00:17:54
really helps them understand how these

00:17:52 --> 00:17:56
LLMs work. So I literally my

00:17:53 --> 00:17:58
understanding of LMS came from token pro

00:17:55 --> 00:18:00
just you know sit there and just look at

00:17:57 --> 00:18:02
he the distribution as as you filled

00:17:59 --> 00:18:03
out a prompt. It's actually very very

00:18:01 --> 00:18:05
enlightening. So for those of you that

00:18:02 --> 00:18:06
are listening um

00:18:04 --> 00:18:07
>> what's the URL again?

00:18:05 --> 00:18:10
>> Token probe

00:18:06 --> 00:18:12
>> token probe.cs.colia.edu.

00:18:09 --> 00:18:15
>> Yeah check it out. It's actually very

00:18:11 --> 00:18:17
useful way to I can actually see

00:18:14 --> 00:18:19
how the probability distribution gets

00:18:16 --> 00:18:20
updated as as you fill out a prompt.

00:18:18 --> 00:18:22
>> Right. Yeah.

00:18:19 --> 00:18:23
>> But then I cheated.

00:18:21 --> 00:18:25
Oh,

00:18:22 --> 00:18:27
>> I you know it was running

00:18:24 --> 00:18:28
>> but I also had access to the GPUs that

00:18:26 --> 00:18:29
were powering it.

00:18:27 --> 00:18:31
>> Mhm.

00:18:28 --> 00:18:35
>> And then along with colleagues at

00:18:30 --> 00:18:40
Colombia and one of them now is uh is at

00:18:34 --> 00:18:42
deep mind we started to sort of think

00:18:39 --> 00:18:45
about how do you really prove that it's

00:18:41 --> 00:18:46
Beijing

00:18:44 --> 00:18:48
to prove

00:18:45 --> 00:18:49
>> Can you just explain it? Actually I I

00:18:47 --> 00:18:52
actually don't know the answer to this.

00:18:48 --> 00:18:54
>> Yeah. It seemed to me you proved it in

00:18:51 --> 00:18:55
the first paper like what was missing.

00:18:53 --> 00:18:57
>> Well, in the first paper we showed it.

00:18:54 --> 00:18:59
It was empirical

00:18:56 --> 00:19:00
>> and you could see I see I see you could

00:18:58 --> 00:19:02
see not a mathematical because it was

00:19:00 --> 00:19:04
obvious to me that

00:19:01 --> 00:19:07
>> yeah it was even obvious to me but to

00:19:03 --> 00:19:09
convince uh you you could say you know

00:19:06 --> 00:19:10
people who dismiss oh anything can be

00:19:08 --> 00:19:10
based in

00:19:09 --> 00:19:12
>> I see I see

00:19:09 --> 00:19:13
>> we had to show it precisely

00:19:12 --> 00:19:15
mathematically.

00:19:12 --> 00:19:17
>> Got it. Got it. So then we came up with

00:19:14 --> 00:19:20
is idea you know my colleagues at

00:19:16 --> 00:19:22
Namanagaral and Sedhad Dalal we the

00:19:19 --> 00:19:24
series of papers were were written with

00:19:21 --> 00:19:27
em. We came up with this idea of a

00:19:23 --> 00:19:29
Beijian wind tunnel. Okay so what's a

00:19:26 --> 00:19:31
wind tunnel? Well wind tunnel in the

00:19:28 --> 00:19:34
aerospace industry is where you test an

00:19:30 --> 00:19:36
aircraft in an isolated environment. you

00:19:33 --> 00:19:39
don't fly it and you test test it

00:19:35 --> 00:19:41
against all sorts of uh uh you know

00:19:38 --> 00:19:43
aerodynamic pressure then you see what

00:19:40 --> 00:19:45
it'll withstand what kind of

00:19:42 --> 00:19:47
altitude pressure blah blah blah right

00:19:44 --> 00:19:49
you don't want to do it up in the air

00:19:46 --> 00:19:51
testing

00:19:48 --> 00:19:54
>> so we said okay why don't we create an

00:19:50 --> 00:19:57
environment where we take these

00:19:53 --> 00:20:02
architectures and we tested transformers

00:19:56 --> 00:20:04
mamba LSTMs MLPS all architectures we

00:20:01 --> 00:20:06
say why don't we create take a blank

00:20:03 --> 00:20:10
architecture.

00:20:05 --> 00:20:13
Give it a task where it's impossible for

00:20:09 --> 00:20:16
the architecture to memorize what the

00:20:12 --> 00:20:19
solution to that task should be.

00:20:15 --> 00:20:21
The space is combinatorily

00:20:18 --> 00:20:22
impossible for given the number of

00:20:20 --> 00:20:24
parameters and we took very small

00:20:21 --> 00:20:26
models.

00:20:23 --> 00:20:28
So it's difficult enough that they

00:20:25 --> 00:20:30
cannot memorize it

00:20:27 --> 00:20:34
>> but it's tractable enough that we know

00:20:29 --> 00:20:36
precisely what the the Beijian posterior

00:20:34 --> 00:20:38
should be. You can calculate it

00:20:35 --> 00:20:41
analytically.

00:20:37 --> 00:20:43
So we gave these models a bunch of tasks

00:20:40 --> 00:20:45
where again we show that it's impossible

00:20:42 --> 00:20:47
to memorize. We trained these models and

00:20:44 --> 00:20:51
we found that the transformer got the

00:20:46 --> 00:20:55
precise Beijian posterior down to 10 ^

00:20:50 --> 00:20:57
minus 3 bits accuracy. It was matching

00:20:54 --> 00:20:59
the distribution perfectly. So it is

00:20:56 --> 00:21:02
actually doing Beijian in the

00:20:58 --> 00:21:04
mathematical sense given a task

00:21:01 --> 00:21:06
>> where it has to update its belief. Uh

00:21:03 --> 00:21:10
Mamba also does it reasonably well.

00:21:05 --> 00:21:12
LSTMs can do one of the things. So the

00:21:09 --> 00:21:14
in the papers we have a taxonomy of

00:21:11 --> 00:21:17
Beijing task. Transformer does

00:21:13 --> 00:21:20
everything. Mamba does most of it. LSTMs

00:21:16 --> 00:21:21
do only partially and MLPs fail

00:21:19 --> 00:21:25
completely.

00:21:20 --> 00:21:27
>> So is this a reflection of the data that

00:21:24 --> 00:21:30
it's trained on or is it more a

00:21:26 --> 00:21:31
reflection of the mechanism?

00:21:29 --> 00:21:33
>> It's the mechanism. It's the

00:21:30 --> 00:21:36
architecture.

00:21:32 --> 00:21:38
The data decides what tasks it learns.

00:21:35 --> 00:21:40
>> Right? So in the first paper we had

00:21:37 --> 00:21:43
these beijian wind tunnels and we show

00:21:39 --> 00:21:46
that you know it's doing the job where

00:21:42 --> 00:21:48
different tasks in the second paper we

00:21:45 --> 00:21:50
show why it does it. So we look at the

00:21:47 --> 00:21:52
transformers we look at the gradients

00:21:49 --> 00:21:55
and we show how the gradients actually

00:21:52 --> 00:21:58
shape this geometry

00:21:54 --> 00:22:00
which enables this basin updating to

00:21:57 --> 00:22:02
happen.

00:21:59 --> 00:22:05
Then in the third paper what we did we

00:22:01 --> 00:22:07
take we took these frontier production

00:22:04 --> 00:22:10
LLMs which have open weights so that we

00:22:06 --> 00:22:12
could look inside them and we did our

00:22:09 --> 00:22:16
testing and we saw that the geometries

00:22:11 --> 00:22:18
that we saw in the small models

00:22:15 --> 00:22:20
persisted in models which are you know

00:22:17 --> 00:22:23
hundreds of millions of parameters the

00:22:19 --> 00:22:26
same signature existed. The only thing

00:22:22 --> 00:22:28
is that uh because they are trained on

00:22:25 --> 00:22:30
all sorts of data, it's a little bit

00:22:27 --> 00:22:30
dirty or messy.

00:22:29 --> 00:22:32
>> Yeah.

00:22:29 --> 00:22:34
>> But you can see the same structure. So

00:22:31 --> 00:22:36
the the whole idea behind the Beijian

00:22:33 --> 00:22:39
wind tunnel was unlike these production

00:22:35 --> 00:22:40
LLMs where you don't know what they have

00:22:38 --> 00:22:40
been trained on,

00:22:39 --> 00:22:42
>> right?

00:22:39 --> 00:22:43
>> So you cannot mathematically compute the

00:22:41 --> 00:22:45
posterior.

00:22:42 --> 00:22:46
>> So again, how do you prove it?

00:22:44 --> 00:22:48
>> I mean it looks based in you know from

00:22:46 --> 00:22:49
the first paper.

00:22:47 --> 00:22:51
>> From the first it looks Beijian, but you

00:22:48 --> 00:22:53
know. So the wind tunnel sort of solved

00:22:50 --> 00:22:55
that problem for us. We said okay let's

00:22:52 --> 00:22:58
tart with a blank architecture. Give it

00:22:54 --> 00:23:01
a task where we know what the answer is.

00:22:57 --> 00:23:02
It cannot memorize it. Let's see what it

00:23:00 --> 00:23:04
does. And

00:23:01 --> 00:23:06
>> so do you think this provides any sort

00:23:03 --> 00:23:08
of like indication of how humans think

00:23:05 --> 00:23:09
or do you think that these things are

00:23:07 --> 00:23:12
totally independent?

00:23:08 --> 00:23:14
>> No no it it does provide right. So you

00:23:11 --> 00:23:16
know human beings also

00:23:14 --> 00:23:20
uh update our beliefs as we see new

00:23:15 --> 00:23:23
evidence. Right. So we do in some sort

00:23:19 --> 00:23:26
of in some sense uh Beijian updating but

00:23:22 --> 00:23:31
we do something more than that I'll come

00:23:25 --> 00:23:34
to that but uh these transformers uh or

00:23:30 --> 00:23:37
even mamba do this beijian updating

00:23:33 --> 00:23:39
>> and uh but but but the difference with

00:23:36 --> 00:23:42
umans is

00:23:38 --> 00:23:45
you know we we'll update our posterior

00:23:41 --> 00:23:49
when we see some new evidence but the

00:23:44 --> 00:23:51
way our brains have evolved evolved over

00:23:48 --> 00:23:54
hundreds of millions of years is our

00:23:50 --> 00:23:58
optimization objective has been don't

00:23:53 --> 00:23:59
die and reproduce. Right? That's been

00:23:57 --> 00:24:02
sort of the driving force and our brains

00:23:58 --> 00:24:04
have learned to adjust and so when we

00:24:01 --> 00:24:06
see some danger

00:24:03 --> 00:24:09
there's some something rustling in that

00:24:05 --> 00:24:11
bush. Don't go near. We know how to

00:24:08 --> 00:24:14
react to that danger. We know how to uh

00:24:10 --> 00:24:17
save ourselves.

00:24:13 --> 00:24:19
We internalize that

00:24:16 --> 00:24:22
learning and our brain cells or our

00:24:18 --> 00:24:26
synapses remain plastic throughout our

00:24:21 --> 00:24:28
lifetime. What happens with LLM is once

00:24:25 --> 00:24:30
the training is done those weights are

00:24:27 --> 00:24:32
frozen.

00:24:29 --> 00:24:35
when you're doing an inference for

00:24:31 --> 00:24:37
instance in context learning or anything

00:24:34 --> 00:24:39
during that conversation

00:24:36 --> 00:24:41
okay you're doing bijian inference but

00:24:38 --> 00:24:43
hen you forget

00:24:40 --> 00:24:46
he next time a new conversation starts

00:24:42 --> 00:24:49
with zero context you don't retain any

00:24:45 --> 00:24:50
learning that happened in the previous

00:24:48 --> 00:24:52
instance so so for instance with the

00:24:49 --> 00:24:55
cricket DSL that I was doing every

00:24:51 --> 00:24:58
invocation of it was fresh

00:24:54 --> 00:25:01
it did not remember the last time I sent

00:24:57 --> 00:25:04
a query what the DSL looked

00:25:00 --> 00:25:09
So that's one difference between uh

00:25:03 --> 00:25:12
ow humans uh uh use sort of beijan

00:25:08 --> 00:25:13
updating which is we remain plastic all

00:25:11 --> 00:25:17
our lives

00:25:12 --> 00:25:20
>> whereas uh LMS are frozen and there's

00:25:16 --> 00:25:22
another uh sort of

00:25:19 --> 00:25:22
difference which uh if you want me to

00:25:21 --> 00:25:24
get

00:25:22 --> 00:25:28
>> tell me yeah yeah yeah

00:25:23 --> 00:25:30
>> so so the other difference is uh u

00:25:27 --> 00:25:34
well first you know our objective ive is

00:25:29 --> 00:25:36
don't die reproduce. LLM's objective is

00:25:33 --> 00:25:40
predict the next token as accurately as

00:25:35 --> 00:25:43
possible. Right? So all these uh

00:25:39 --> 00:25:45
scary stories that you you read about

00:25:42 --> 00:25:47
hat oh the LLM tried to deceive and it

00:25:44 --> 00:25:49
ried to prevent itself from being shut

00:25:46 --> 00:25:51
down. That's not a function of the

00:25:48 --> 00:25:53
architecture.

00:25:50 --> 00:25:56
That's a function of the training data.

00:25:52 --> 00:25:59
>> It has been fed you know articles on

00:25:55 --> 00:26:03
Reddit or SMO or whatever. I mean, just

00:25:58 --> 00:26:06
oday, by the way, Daario

00:26:02 --> 00:26:08
>> allegedly said that uh you can't rule

00:26:05 --> 00:26:11
out that they're conscious.

00:26:07 --> 00:26:13
>> You can rule out their I mean, come on.

00:26:10 --> 00:26:16
And I said, you know, Antropic makes

00:26:12 --> 00:26:18
great products. Cloud code is fantastic.

00:26:15 --> 00:26:21
Coco work is fantastic,

00:26:18 --> 00:26:23
but they are grains of silicon doing

00:26:20 --> 00:26:25
matrix multiplication.

00:26:22 --> 00:26:26
They don't have consciousness. They

00:26:24 --> 00:26:28
don't have an inner monologue. They

00:26:25 --> 00:26:30
don't uh they're not driven by the same

00:26:27 --> 00:26:33
objective function. Don't die,

00:26:29 --> 00:26:35
reproduce, right? They're driven by

00:26:32 --> 00:26:37
don't make a mistake on the next token.

00:26:34 --> 00:26:39
And that's driven entirely by the

00:26:36 --> 00:26:42
training data,

00:26:38 --> 00:26:45
right? You train the LLM with stories of

00:26:41 --> 00:26:47
ASMO or Reddit where you know to survive

00:26:44 --> 00:26:50
it's going to do this or that. It'll

00:26:46 --> 00:26:52
reproduce that. So it's it it's a

00:26:49 --> 00:26:55
reflection. It's not a mind. And and the

00:26:51 --> 00:26:57
results, just to say it for the 10th

00:26:54 --> 00:26:58
time, are perfectly vision.

00:26:56 --> 00:27:00
>> Perfectly. Yeah.

00:26:57 --> 00:27:02
>> To the to the to the digit.

00:26:59 --> 00:27:05
>> To the digit. Yeah. I mean, I I trained

00:27:01 --> 00:27:08
it for 150,000 steps

00:27:04 --> 00:27:09
>> and uh the accuracy was 10 ^ minus 3

00:27:07 --> 00:27:11
bits.

00:27:08 --> 00:27:12
>> I could have trained it for you know

00:27:10 --> 00:27:14
this happened in half an hour

00:27:12 --> 00:27:16
>> on the infrastructure that you provided

00:27:13 --> 00:27:19
for token pro in the background. I could

00:27:15 --> 00:27:22
use those APUs to train. But uh so thank

00:27:18 --> 00:27:24
you again for that. But so no human

00:27:21 --> 00:27:25
beings coming back to it, we we are

00:27:23 --> 00:27:28
>> Beijian,

00:27:24 --> 00:27:29
>> but we do something else. You know when

00:27:27 --> 00:27:31
I when I when I throw this pen at you,

00:27:28 --> 00:27:31
what will you do?

00:27:30 --> 00:27:32
>> Dodge it or

00:27:30 --> 00:27:35
>> do it? Yeah.

00:27:31 --> 00:27:36
>> Why will you dodge it?

00:27:34 --> 00:27:39
>> To avoid being hit.

00:27:35 --> 00:27:42
>> Avoid being hit. But your head is not

00:27:38 --> 00:27:44
doing a Beijian calculation of okay,

00:27:41 --> 00:27:47
this pen is coming. The probability that

00:27:43 --> 00:27:48
it hits me, it'll cause this much pain

00:27:46 --> 00:27:50
or all that.

00:27:47 --> 00:27:51
>> Correct. What you're essentially doing

00:27:49 --> 00:27:53
in your head is you're doing a

00:27:50 --> 00:27:56
simulation.

00:27:52 --> 00:27:58
>> You see the uh the the the pen coming

00:27:55 --> 00:28:01
and you know that it'll come and hit me.

00:27:58 --> 00:28:03
Your mind simulates and you dodge it.

00:28:00 --> 00:28:07
Right? So

00:28:02 --> 00:28:10
all of deep learning is uh doing

00:28:06 --> 00:28:10
correlations.

00:28:10 --> 00:28:15
It's not doing causation.

00:28:11 --> 00:28:18
>> Yeah. Causal models are the ones that

00:28:14 --> 00:28:20
are able to do simulations and

00:28:17 --> 00:28:23
interventions. So you know Judea has

00:28:19 --> 00:28:25
this whole uh causal hierarchy

00:28:22 --> 00:28:27
>> where the first hierarchy and the first

00:28:24 --> 00:28:29
hierarchy is association which is you

00:28:26 --> 00:28:31
build these correlation models. Deep

00:28:28 --> 00:28:33
learning is beautiful. It it's extremely

00:28:30 --> 00:28:36
powerful. I mean you see every day all

00:28:32 --> 00:28:38
these models are like amazingly good.

00:28:35 --> 00:28:40
>> They do association. The second is

00:28:37 --> 00:28:42
intervention

00:28:39 --> 00:28:44
in the hierarchy. Yeah,

00:28:41 --> 00:28:47
>> deep learning models do not do that.

00:28:43 --> 00:28:49
Third is counterfactual.

00:28:46 --> 00:28:51
So both intervention and counterfactual

00:28:48 --> 00:28:52
you can imagine it it it's some sort of

00:28:50 --> 00:28:55
simulation.

00:28:52 --> 00:28:57
You you build a model of causal model of

00:28:54 --> 00:29:01
what's happening and then you are able

00:28:56 --> 00:29:03
to simulate. So our brains do that.

00:29:00 --> 00:29:05
The current architectures don't do that.

00:29:02 --> 00:29:09
Another example I think which will make

00:29:04 --> 00:29:11
it clear is uh the difference between

00:29:08 --> 00:29:12
I'll use these technical term Shannon

00:29:10 --> 00:29:14
entropy

00:29:11 --> 00:29:15
>> and kmogrove complexity.

00:29:13 --> 00:29:18
>> Sure.

00:29:14 --> 00:29:20
>> So if you look at the Shannon entropy of

00:29:17 --> 00:29:21
the digits of pi

00:29:19 --> 00:29:22
>> it's infinite.

00:29:20 --> 00:29:24
>> Sure.

00:29:21 --> 00:29:27
>> It's impossible to predict and learn

00:29:23 --> 00:29:29
what digit will come after. Yeah. So

00:29:26 --> 00:29:32
that's the definition of Shannon entropy

00:29:28 --> 00:29:34
and Shannon entropy sort of tries to

00:29:31 --> 00:29:36
build a correlation. It tries to learn

00:29:33 --> 00:29:38
the correlation. Deep learning does the

00:29:35 --> 00:29:40
Shannon entropy.

00:29:37 --> 00:29:43
>> Gulmagraph complexity on the other hand

00:29:39 --> 00:29:44
is the is the length of the shortest

00:29:42 --> 00:29:45
program.

00:29:43 --> 00:29:47
>> Yeah.

00:29:44 --> 00:29:49
>> Which will reproduce

00:29:46 --> 00:29:50
uh the string that you that is under

00:29:48 --> 00:29:50
question.

00:29:49 --> 00:29:53
>> Yeah.

00:29:49 --> 00:29:54
>> Now the program to get the digits of pi

00:29:52 --> 00:29:57
are very small.

00:29:53 --> 00:29:59
>> Yeah. Thanks to Raman Jim and others you

00:29:56 --> 00:30:02
know there all sorts of really small

00:29:58 --> 00:30:05
program that can reproduce it exactly.

00:30:01 --> 00:30:08
So the colograph complexity of pi is

00:30:04 --> 00:30:11
very small. Shannon entropy is infinite.

00:30:07 --> 00:30:13
>> I think deep learning is still in the

00:30:10 --> 00:30:16
Shannon entropy world. It has not

00:30:12 --> 00:30:17
crossed over to the colog complexity and

00:30:15 --> 00:30:18
the causal world.

00:30:16 --> 00:30:22
>> Wow interesting.

00:30:17 --> 00:30:25
>> Right. So uh do you to what extent do

00:30:21 --> 00:30:27
you think this provides us research

00:30:24 --> 00:30:28
directions to kind of improve the state

00:30:26 --> 00:30:30
of the so let me just give you a

00:30:27 --> 00:30:33
specific example you talked about

00:30:29 --> 00:30:35
>> human beings don't actually update you

00:30:32 --> 00:30:37
know the matrix they don't kind of

00:30:34 --> 00:30:38
update their weights

00:30:36 --> 00:30:43
>> but right now there's a lot of research

00:30:37 --> 00:30:45
on continual learning you know so

00:30:42 --> 00:30:47
>> does your work provide some guidance of

00:30:44 --> 00:30:48
how you might approach those problems

00:30:46 --> 00:30:51
and and in particular I've always had

00:30:48 --> 00:30:52
this question which is we use so much

00:30:50 --> 00:30:52
data and so much compute.

00:30:51 --> 00:30:56
>> Yeah.

00:30:51 --> 00:30:58
>> To create these models like is it even

00:30:55 --> 00:30:59
reasonable to think that you can update

00:30:57 --> 00:31:02
the weights and actually have a

00:30:58 --> 00:31:04
meaningful impact you know with in in

00:31:01 --> 00:31:05
real time. I mean it just seems like you

00:31:03 --> 00:31:06
just need so much more data in order to

00:31:04 --> 00:31:07
do that. So can you start answering

00:31:05 --> 00:31:09
these questions?

00:31:06 --> 00:31:11
>> You you can start answering some of

00:31:08 --> 00:31:13
these questions and and one of the

00:31:10 --> 00:31:16
misconceptions that exists today is that

00:31:12 --> 00:31:17
scale will solve everything. Scale will

00:31:15 --> 00:31:19
not solve everything. you you you need a

00:31:16 --> 00:31:21
different kind of architecture and this

00:31:18 --> 00:31:23
continual learning is a difficult

00:31:20 --> 00:31:25
problem. You have to balance the fact

00:31:22 --> 00:31:27
hat you will learn something new

00:31:24 --> 00:31:29
against the risk of catastrophic

00:31:26 --> 00:31:29
forgetting.

00:31:28 --> 00:31:29
>> Right.

00:31:29 --> 00:31:33
>> If you update the weights and you forget

00:31:30 --> 00:31:36
what what was important and what you

00:31:32 --> 00:31:38
have already learned then then you are

00:31:35 --> 00:31:40
you know you're not making progress.

00:31:37 --> 00:31:43
Then it'll just be some sort of random

00:31:39 --> 00:31:46
chaotic model. So to solve that problem

00:31:42 --> 00:31:49
is difficult. That's one aspect of it.

00:31:45 --> 00:31:51
So, so, so you know to get to what is

00:31:48 --> 00:31:53
called AGI, I think there are two things

00:31:50 --> 00:31:56
that need to happen. One is this

00:31:52 --> 00:31:58
plasticity

00:31:55 --> 00:31:59
which has to be implemented through

00:31:57 --> 00:32:00
container learning.

00:31:58 --> 00:32:02
>> Secondly, we have to move from

00:31:59 --> 00:32:03
correlation to causation.

00:32:01 --> 00:32:07
>> Yeah,

00:32:02 --> 00:32:10
>> that's uh uh I how much is this similar

00:32:06 --> 00:32:13
to what Yan Lun talks about with the

00:32:09 --> 00:32:15
>> so Yan Lun causality planning?

00:32:12 --> 00:32:16
>> Yeah. you know predicting like how your

00:32:14 --> 00:32:18
action would

00:32:15 --> 00:32:20
>> it is it is related you know he he's

00:32:17 --> 00:32:21
coming at it from a different angle than

00:32:19 --> 00:32:24
the jp model right

00:32:20 --> 00:32:26
>> but it is related the the other thing is

00:32:23 --> 00:32:28
uh you know the first time I came on

00:32:25 --> 00:32:29
this podcast I I mentioned this test of

00:32:27 --> 00:32:30
AGI

00:32:28 --> 00:32:31
>> the Einstein test

00:32:30 --> 00:32:35
>> I don't remember

00:32:30 --> 00:32:40
>> so I said you know uh uh you take an LLM

00:32:34 --> 00:32:44
>> and train it on pre 1916 or 1911 physics

00:32:39 --> 00:32:45
>> and see if it can come up with the

00:32:43 --> 00:32:45
ory of relativity.

00:32:44 --> 00:32:48
>> Yeah,

00:32:44 --> 00:32:50
>> if it does then we have AGI. I mean it's

00:32:47 --> 00:32:54
a high bar but you know we should have

00:32:49 --> 00:32:57
high bars. It won't. And this is the

00:32:53 --> 00:32:59
same test that I think Demis uh

00:32:56 --> 00:33:01
mentioned at uh the India AI summit

00:32:58 --> 00:33:04
couple of weeks ago. It's created a lot

00:33:00 --> 00:33:07
of news. But why why is that and how is

00:33:04 --> 00:33:09
that related to this idea of Shannon

00:33:06 --> 00:33:13
versus Kro?

00:33:08 --> 00:33:16
So at the time of Einstein there were a

00:33:12 --> 00:33:18
lot of clues

00:33:15 --> 00:33:19
that Newtonian mechanics there was

00:33:17 --> 00:33:20
omething missing.

00:33:18 --> 00:33:22
>> Yeah.

00:33:19 --> 00:33:24
>> Right. Uh people knew that Mercury's

00:33:21 --> 00:33:26
orbit didn't make sense. There was

00:33:23 --> 00:33:28
omething off about it. Then there were

00:33:25 --> 00:33:31
these experiments done uh the

00:33:27 --> 00:33:35
Michaelelsson Mley experiments where

00:33:30 --> 00:33:39
they were trying to figure out uh

00:33:34 --> 00:33:42
this uh medium called uh the ether

00:33:38 --> 00:33:44
through which light travels.

00:33:41 --> 00:33:48
And they felt that if you know you

00:33:43 --> 00:33:50
bounce light in different directions

00:33:47 --> 00:33:52
uh the speed might change and they they

00:33:49 --> 00:33:54
could detect a change in the speed of

00:33:51 --> 00:33:56
light.

00:33:53 --> 00:33:59
They tried several experiments. They had

00:33:55 --> 00:34:01
really precise instruments which could

00:33:58 --> 00:34:02
measure the speed and they found

00:34:00 --> 00:34:05
nothing. They found that that speed of

00:34:01 --> 00:34:07
light did not change at all.

00:34:04 --> 00:34:08
Then there were there's a whole issue of

00:34:06 --> 00:34:08
black holes.

00:34:07 --> 00:34:11
>> Yeah.

00:34:07 --> 00:34:13
>> Then gravitational lensing. So there

00:34:10 --> 00:34:16
were a lot of these signs that Newtonian

00:34:12 --> 00:34:18
mechanics

00:34:15 --> 00:34:19
is not really explaining everything.

00:34:17 --> 00:34:22
>> Yeah.

00:34:18 --> 00:34:23
But until Einstein came up with a new

00:34:21 --> 00:34:26
representation of the space-time

00:34:22 --> 00:34:26
container,

00:34:25 --> 00:34:27
>> right,

00:34:25 --> 00:34:29
>> we were stuck.

00:34:26 --> 00:34:32
>> So if you had a model that just looked

00:34:28 --> 00:34:35
at correlations and so uh sees all of

00:34:31 --> 00:34:38
this, you know,

00:34:34 --> 00:34:41
all of these uh pieces of individual

00:34:37 --> 00:34:44
evidence and put together, it would not

00:34:40 --> 00:34:47
have come up with the beautiful equation

00:34:43 --> 00:34:50
that Einstein came up with. you know uh

00:34:46 --> 00:34:53
I'm forgetting exactly what it is g muv=

00:34:49 --> 00:34:55
8 pi t muv some something like that

00:34:52 --> 00:34:58
>> where you know uh the the the equation

00:34:54 --> 00:34:59
of uh the rel the space-time continum

00:34:57 --> 00:35:03
that the tensor

00:34:58 --> 00:35:06
>> so he came up with a new formulation

00:35:02 --> 00:35:09
>> so he kind of rejected the existing

00:35:05 --> 00:35:11
axioms he came up with a very short

00:35:08 --> 00:35:12
colograph representation of

00:35:10 --> 00:35:13
>> interesting

00:35:11 --> 00:35:15
>> the world

00:35:12 --> 00:35:17
>> one equation from that equation

00:35:14 --> 00:35:18
everything else follows

00:35:16 --> 00:35:21
>> right whether you're talking about

00:35:17 --> 00:35:25
gravitational waves or black holes or

00:35:20 --> 00:35:27
mercury or how GPS works you know GPS

00:35:24 --> 00:35:29
the GPS that we use every day in our

00:35:26 --> 00:35:32
phones it uses the equation of

00:35:28 --> 00:35:34
relativity so do does this end up

00:35:31 --> 00:35:37
becoming like

00:35:33 --> 00:35:39
um

00:35:36 --> 00:35:42
you you you almost have to ignore the

00:35:38 --> 00:35:44
majority of previous data in order to do

00:35:41 --> 00:35:45
it which LLM can't because they're

00:35:43 --> 00:35:47
trained on the majority of previous

00:35:44 --> 00:35:49
data. It's like you almost have like

00:35:46 --> 00:35:51
this kind of data gravity that's pulling

00:35:48 --> 00:35:53
you back. It's like it's like everybody

00:35:50 --> 00:35:54
said it's X.

00:35:52 --> 00:35:55
>> There's a little bit of evidence that

00:35:53 --> 00:35:58
it's Y, but because everybody said it's

00:35:54 --> 00:36:00
X, like the LM will always say it's X.

00:35:57 --> 00:36:03
>> It'll always say it'll treat that Y as

00:35:59 --> 00:36:04
an anomaly. Actually this is actually a

00:36:02 --> 00:36:06
very nice way to say it which is like

00:36:04 --> 00:36:08
>> it's like

00:36:05 --> 00:36:11
>> I so now okay now I get your Shannon

00:36:07 --> 00:36:14
entropy versus like one of them is like

00:36:10 --> 00:36:16
>> the total amount of information there

00:36:13 --> 00:36:17
that will always be bound to the total

00:36:15 --> 00:36:18
amount of information there which is

00:36:16 --> 00:36:23
what happens right now.

00:36:17 --> 00:36:26
>> Yeah. where you can actually describe

00:36:22 --> 00:36:29
another another motion. You can describe

00:36:25 --> 00:36:31
verything with a shorter description

00:36:28 --> 00:36:32
with the new data, which would be a

00:36:30 --> 00:36:33
totally different motion, which would be

00:36:31 --> 00:36:35
like

00:36:32 --> 00:36:36
>> you need a new representation, right?

00:36:34 --> 00:36:37
Yeah. You know, another way that I've

00:36:35 --> 00:36:39
always thought about these, I thought

00:36:36 --> 00:36:41
you articulated it well in the last time

00:36:38 --> 00:36:43
we talked about it, which is the

00:36:40 --> 00:36:47
universe is this very, very complex

00:36:42 --> 00:36:50
space and then, you know, somehow humans

00:36:46 --> 00:36:50
map it into a manifold.

00:36:49 --> 00:36:51
>> Mhm.

00:36:49 --> 00:36:52
>> That's less complex.

00:36:50 --> 00:36:54
>> Yeah.

00:36:51 --> 00:36:57
>> And then that gets kind of written down

00:36:53 --> 00:36:58
and then the LLM. So that's kind of some

00:36:56 --> 00:37:00
distribution, some you know, it's

00:36:57 --> 00:37:02
till a very large space, but it's it's

00:36:59 --> 00:37:06
a bounded space. And the LM learn that

00:37:01 --> 00:37:07
manifold and then they kind of use,

00:37:05 --> 00:37:09
you know, Beijian inference to move up

00:37:06 --> 00:37:10
and down that manifold, but they're kind

00:37:08 --> 00:37:11
of bound to that manifold.

00:37:09 --> 00:37:13
>> Yeah.

00:37:10 --> 00:37:14
>> And then again, I don't want to put

00:37:12 --> 00:37:16
words in your mouth. And then, but like

00:37:13 --> 00:37:18
what they can't do is is generate a new

00:37:15 --> 00:37:19
manifold, right? Which requires

00:37:17 --> 00:37:20
understanding the way that the universe

00:37:18 --> 00:37:22
works and then coming up with a new

00:37:19 --> 00:37:24
representation of the universe.

00:37:21 --> 00:37:25
>> And this is what relativity is, right?

00:37:23 --> 00:37:26
>> Yeah. Exactly.

00:37:24 --> 00:37:28
>> Einstein had to create a new manifold.

00:37:25 --> 00:37:31
>> Yeah. If you just stuck with the old

00:37:27 --> 00:37:33
manifold of the Newtonian physics,

00:37:30 --> 00:37:34
>> then you would see these correlations

00:37:32 --> 00:37:36
but you could not come up with a

00:37:33 --> 00:37:38
manifold that explained them. So you

00:37:35 --> 00:37:40
need to come up with a new

00:37:37 --> 00:37:42
representation. So to me you know there

00:37:39 --> 00:37:44
are lots of definitions of AGI uh you

00:37:42 --> 00:37:47
know Turing test we have already passed

00:37:43 --> 00:37:51
that you know performing economically

00:37:46 --> 00:37:52
useful work every day you see you know

00:37:50 --> 00:37:54
LLMs are doing that.

00:37:51 --> 00:37:55
>> Do we I don't know. No, I mean they are

00:37:53 --> 00:37:56
>> I mean I mean without human

00:37:54 --> 00:37:58
intervention.

00:37:55 --> 00:38:01
>> No no no. So that that's different but

00:37:57 --> 00:38:02
still you know it's like a car can run

00:38:00 --> 00:38:05
faster than humans, right?

00:38:01 --> 00:38:06
>> I mean that's a that's the that's a

00:38:04 --> 00:38:08
very shallow definition.

00:38:05 --> 00:38:10
>> Yeah. So all these definitions do useful

00:38:07 --> 00:38:15
>> you know maybe you know in 6 months

00:38:09 --> 00:38:17
you'll have cloud or what a gemini do

00:38:14 --> 00:38:20
without intervention cing tasks which

00:38:16 --> 00:38:23
are well defined well scoped

00:38:19 --> 00:38:25
>> that's possible but to me AGI will

00:38:22 --> 00:38:26
happen when these two problems get

00:38:24 --> 00:38:29
solved

00:38:25 --> 00:38:32
>> elasticity continual learning properly

00:38:28 --> 00:38:34
and building a causal model from you

00:38:31 --> 00:38:37
know

00:38:33 --> 00:38:40
uh in a more data efficient manner Yeah,

00:38:36 --> 00:38:43
we we are hearing people now talking

00:38:39 --> 00:38:45
about you know seeing generality like

00:38:42 --> 00:38:48
Donald Kuth for example in the last few

00:38:44 --> 00:38:51
days right you know had this you know

00:38:47 --> 00:38:53
aha moment apparently that

00:38:50 --> 00:38:54
kind of made went viral on X so do you

00:38:52 --> 00:38:55
think that that suggests that we're

00:38:53 --> 00:38:58
seeing generality or

00:38:54 --> 00:39:00
>> No no no so so that actually

00:38:57 --> 00:39:03
to me it validates what I've been

00:38:59 --> 00:39:07
talking about for a while now how

00:39:02 --> 00:39:09
>> so so if if you read what he did uh with

00:39:06 --> 00:39:12
e help of uh you know a colleague he

00:39:08 --> 00:39:16
got the LLMs to solve this particular

00:39:11 --> 00:39:18
problem of finding Hamiltonian cycles

00:39:15 --> 00:39:20
odd numbers we won't get into that and

00:39:17 --> 00:39:23
he got the LLMs to keep solving for one

00:39:19 --> 00:39:27
odd number after the other right

00:39:22 --> 00:39:30
>> what he also got to do is after it found

00:39:26 --> 00:39:35
a solution for a particular value of m

00:39:29 --> 00:39:37
he made the LLM update its memory

00:39:34 --> 00:39:39
with exactly what it learned in solving

00:39:36 --> 00:39:40
that problem. So the LLM's tried many

00:39:38 --> 00:39:42
different things. Yeah.

00:39:39 --> 00:39:44
>> You know, something worked, update the

00:39:41 --> 00:39:46
memory. So that's kind of like

00:39:43 --> 00:39:46
hacking together plasticity.

00:39:45 --> 00:39:49
>> Yeah.

00:39:45 --> 00:39:52
>> Right. It's learning what it has done as

00:39:48 --> 00:39:54
we went along. Again, it's it's a hacked

00:39:51 --> 00:39:56
version of it. You're not changing the

00:39:53 --> 00:39:57
weights. You're just sort of improving

00:39:55 --> 00:39:58
the context.

00:39:56 --> 00:40:01
>> Right.

00:39:57 --> 00:40:04
But you as you learned and even

00:40:00 --> 00:40:07
after that so this whole space of

00:40:03 --> 00:40:10
Hamiltonian cycles and the associated

00:40:06 --> 00:40:12
math is well represented in the

00:40:09 --> 00:40:13
manifolds that these LLMs have been

00:40:11 --> 00:40:15
trained on

00:40:12 --> 00:40:18
>> right you just had to find the right

00:40:14 --> 00:40:19
connection and LLMs I know compute you

00:40:17 --> 00:40:25
throw enough compute they will find the

00:40:18 --> 00:40:26
right connection so can was able to find

00:40:24 --> 00:40:32
the LLM's

00:40:26 --> 00:40:35
attempts And eventually it needed him

00:40:31 --> 00:40:38
to put together what he saw into a

00:40:34 --> 00:40:41
solution. It definitely helped him get

00:40:37 --> 00:40:43
o the solution but he had to create the

00:40:40 --> 00:40:45
new sort of manifold

00:40:42 --> 00:40:48
>> to come to the solution. The LLMs were

00:40:44 --> 00:40:51
after a while stuck right he you read

00:40:47 --> 00:40:53
what he has written. I mean it just hot

00:40:50 --> 00:40:55
up the press I think two days ago.

00:40:52 --> 00:40:57
>> Two days ago days ago but uh eventually

00:40:54 --> 00:40:59
he used the solutions and he came up

00:40:56 --> 00:40:59
with uh the proof.

00:40:58 --> 00:41:02
>> Yeah.

00:40:58 --> 00:41:07
>> Right. So it's like you know it's like

00:41:01 --> 00:41:10
Einstein saw all these evidences

00:41:06 --> 00:41:12
then he thought what will explain

00:41:09 --> 00:41:15
he came up with a causal model.

00:41:11 --> 00:41:16
>> Yeah. So canut and his brain is sort of

00:41:14 --> 00:41:19
the

00:41:15 --> 00:41:21
>> that's in the chimograph is the human

00:41:18 --> 00:41:23
right and the llms are extremely

00:41:20 --> 00:41:25
efficient at doing the shannon part of

00:41:22 --> 00:41:28
it. It found all the solutions by trying

00:41:24 --> 00:41:29
you know various things and learning

00:41:27 --> 00:41:30
more and more

00:41:28 --> 00:41:31
>> clever way to decompose it. I'm

00:41:29 --> 00:41:33
wondering like do you think this again

00:41:30 --> 00:41:35
I'm going to ask the same question again

00:41:32 --> 00:41:37
which is do you think this provides some

00:41:34 --> 00:41:38
sort of insight on like the next problem

00:41:36 --> 00:41:40
to tackle like yeah

00:41:37 --> 00:41:44
>> like like is there a mechanism that will

00:41:39 --> 00:41:48
get the kagarov complexity

00:41:43 --> 00:41:49
>> or not like is this it tells us which

00:41:47 --> 00:41:51
direction

00:41:48 --> 00:41:53
>> but clearly not how to do it like

00:41:50 --> 00:41:55
>> not how to do but even colograph

00:41:52 --> 00:41:57
complexity has largely remained a sort

00:41:54 --> 00:42:00
of a theoretical construct

00:41:56 --> 00:42:02
>> yeah for sure there's no algorithm

00:41:59 --> 00:42:04
There's no there haven't been practical

00:42:01 --> 00:42:05
implementations of finding

00:42:03 --> 00:42:07
>> the shortest program.

00:42:04 --> 00:42:10
>> We know it exists. You know, you can

00:42:06 --> 00:42:13
argue about it. It but so so that's

00:42:09 --> 00:42:15
where I think

00:42:12 --> 00:42:17
>> it's my bias. That's where our energy

00:42:14 --> 00:42:18
>> should be focused not larger models with

00:42:16 --> 00:42:19
more tokens.

00:42:17 --> 00:42:22
>> Can you and can you can you tie the two

00:42:18 --> 00:42:24
things like how does that pair with

00:42:21 --> 00:42:26
doing simulation or is that simulation

00:42:23 --> 00:42:29
totally orthogonal?

00:42:25 --> 00:42:31
>> No, simulation is is related, right? So

00:42:28 --> 00:42:35
you think it like basically you do

00:42:30 --> 00:42:38
simulation and somehow that is a step

00:42:34 --> 00:42:41
towards doing the kagra complexity.

00:42:37 --> 00:42:43
>> It it's it's the simulator is the is the

00:42:40 --> 00:42:44
program that we create. It may not be

00:42:42 --> 00:42:45
the perfect program.

00:42:43 --> 00:42:47
>> Oh I see.

00:42:44 --> 00:42:48
>> But in our heads we create this uh

00:42:46 --> 00:42:50
simulator that when I'm throwing the pen

00:42:47 --> 00:42:52
you know that it's coming at you right

00:42:49 --> 00:42:56
and you duck. So, so you're not

00:42:52 --> 00:42:58
computing the probabilities as it goes,

00:42:55 --> 00:42:59
but but you have, you know, you build a

00:42:57 --> 00:43:01
very physical thing versus we were

00:42:58 --> 00:43:02
talking more conceptually.

00:43:00 --> 00:43:03
>> Conceptually, but but it's the same

00:43:01 --> 00:43:04
because of the same mechanism.

00:43:02 --> 00:43:07
>> It's the same mechanism really.

00:43:04 --> 00:43:07
>> Yeah. You have to build a causal model.

00:43:06 --> 00:43:07
>> Yeah.

00:43:06 --> 00:43:10
>> Right.

00:43:06 --> 00:43:11
>> I see. For most things, right?

00:43:09 --> 00:43:13
>> So, you have to move from correlation to

00:43:10 --> 00:43:13
causation. I mean, we've heard this

00:43:12 --> 00:43:16
term.

00:43:12 --> 00:43:19
>> Yeah. you know

00:43:15 --> 00:43:20
add infinitum but here it it's making a

00:43:18 --> 00:43:23
difference in the way we view

00:43:20 --> 00:43:25
intelligence

00:43:22 --> 00:43:27
>> how how how has the last three papers

00:43:24 --> 00:43:30
been received

00:43:26 --> 00:43:30
>> no I don't know there well I mean I mean

00:43:29 --> 00:43:34
the archive

00:43:30 --> 00:43:36
>> versions will let me tell you it I mean

00:43:33 --> 00:43:38
>> um lot of great reception a lot of

00:43:36 --> 00:43:39
people read it I'm just wondering like

00:43:37 --> 00:43:41
what kind of feedback that you've got

00:43:38 --> 00:43:43
>> I'm getting good feedback but I'm an

00:43:40 --> 00:43:44
outsider in this field right that's

00:43:42 --> 00:43:46
right like networking guy.

00:43:43 --> 00:43:48
>> I'm a networking guy. Why is he writing

00:43:45 --> 00:43:50
about you know learning and machine

00:43:47 --> 00:43:52
learning and deep learning and basian so

00:43:49 --> 00:43:54
but but people who have actually taken

00:43:51 --> 00:43:57
the time to read those papers I'm

00:43:53 --> 00:44:00
getting really good feedback uh there

00:43:56 --> 00:44:01
was a recent paper by Google

00:43:59 --> 00:44:04
research

00:44:00 --> 00:44:07
>> which tried to teach uh LLM by some sort

00:44:03 --> 00:44:07
of RLF to do Beijian learning properly.

00:44:06 --> 00:44:09
>> Yeah.

00:44:06 --> 00:44:10
>> And that's going in this direction. And

00:44:08 --> 00:44:13
I think people are coming around to the

00:44:09 --> 00:44:16
view that okay LLMs are doing Beijian

00:44:12 --> 00:44:18
learning. I know that some people also

00:44:15 --> 00:44:21
looked at the Beijian vent tunnel paper

00:44:17 --> 00:44:22
the archive version and they reproduced

00:44:20 --> 00:44:22
the experiments.

00:44:21 --> 00:44:24
>> That's great.

00:44:21 --> 00:44:25
>> Did they just saw what was written and

00:44:23 --> 00:44:27
they they did the trading and they saw

00:44:24 --> 00:44:30
yeah this is actually happening. So

00:44:26 --> 00:44:33
>> that's great. So what's next?

00:44:29 --> 00:44:37
uh what's next is uh you know these two

00:44:32 --> 00:44:42
parallel uh tracks I hope to make

00:44:36 --> 00:44:44
progress there plasticity and causal

00:44:41 --> 00:44:45
>> because today you've taken an existing

00:44:43 --> 00:44:47
mechanism

00:44:44 --> 00:44:48
>> and you've created a formal model how it

00:44:46 --> 00:44:51
works

00:44:47 --> 00:44:53
>> and so now you're actually interested in

00:44:50 --> 00:44:54
improving in creating a new mechanism

00:44:52 --> 00:44:56
>> and do you think it's an entirely

00:44:53 --> 00:44:58
different architecture

00:44:55 --> 00:44:59
>> I or do you think do you think LLMs are

00:44:57 --> 00:45:00
like part of the solution

00:44:58 --> 00:45:01
>> I think LLMs are definitely part of the

00:44:59 --> 00:45:01
solution.

00:45:00 --> 00:45:03
>> I see.

00:45:00 --> 00:45:04
>> But but there has to be something more

00:45:02 --> 00:45:06
>> and other.

00:45:03 --> 00:45:08
>> So you know I was not interested in sort

00:45:05 --> 00:45:09
of cataloging what all these

00:45:07 --> 00:45:12
>> LLMs can do.

00:45:08 --> 00:45:13
>> Was more interested in why are they and

00:45:11 --> 00:45:17
how are they doing it.

00:45:12 --> 00:45:19
>> I think now we have a good grip on

00:45:16 --> 00:45:21
>> the why and how.

00:45:18 --> 00:45:23
>> And the next step is to you know

00:45:20 --> 00:45:25
>> move them to the next level. We we now I

00:45:22 --> 00:45:27
think we have a fairly good

00:45:24 --> 00:45:28
understanding of what the limits are.

00:45:26 --> 00:45:31
>> Yeah.

00:45:27 --> 00:45:33
Now how do you uh go to the next step?

00:45:30 --> 00:45:35
>> Is there an is there an equivalent kind

00:45:32 --> 00:45:38
of theoretical

00:45:34 --> 00:45:40
framework for causality that applies

00:45:37 --> 00:45:41
here like similar to like Beijian for

00:45:40 --> 00:45:44
inference?

00:45:40 --> 00:45:44
>> Well the Japal's whole causal hierarchy

00:45:43 --> 00:45:45
I think

00:45:43 --> 00:45:47
>> I think that's the right one.

00:45:44 --> 00:45:51
>> That's that's a very good one. You know

00:45:46 --> 00:45:53
the whole do calculus uh approach

00:45:50 --> 00:45:57
I think it's a good way to think about

00:45:52 --> 00:45:59
it. you know the the sort of association

00:45:56 --> 00:46:00
intervention counterfactuals.

00:45:58 --> 00:46:01
>> Yeah.

00:45:59 --> 00:46:03
>> It takes you from correlation to

00:46:00 --> 00:46:04
actually simulation.

00:46:02 --> 00:46:06
>> Yeah.

00:46:03 --> 00:46:06
>> In a mathematical way.

00:46:05 --> 00:46:07
>> That's great.

00:46:05 --> 00:46:09
>> All right. Well, listen, really

00:46:06 --> 00:46:10
appreciate you coming. This is awesome.

00:46:08 --> 00:46:12
So, we had you here for the first paper

00:46:09 --> 00:46:14
where you had the empirical results.

00:46:11 --> 00:46:17
>> Mhm. And then we had you back when you

00:46:13 --> 00:46:18
actually have like the formal proof and

00:46:16 --> 00:46:20
hopefully the next time you come back

00:46:17 --> 00:46:22
you will have a proposal for the

00:46:19 --> 00:46:24
mechanism that uh

00:46:21 --> 00:46:25
>> that actually provides the next step.

00:46:23 --> 00:46:27
>> Hopefully.

00:46:24 --> 00:46:27
>> All right. Cool. Thank you for coming

00:46:26 --> 00:46:31
in.

00:46:26 --> 00:46:31
>> Thank you for having me.

<!-- YOUTUBE_TRANSCRIPT_END -->
