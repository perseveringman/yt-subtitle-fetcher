---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "uRuY0ozEm3Q"
title: "Will LLMs Get Us To AGI?"
video_url: "https://www.youtube.com/watch?v=uRuY0ozEm3Q"
thumbnail_url: "https://i.ytimg.com/vi/uRuY0ozEm3Q/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=uRuY0ozEm3Q"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-10-13T12:24:51.000Z"
upload_date: "2025-10-13"
duration_seconds: 3048
duration_human: "50:48"
view_count: 11320
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:33:49.139Z"
---

# Will LLMs Get Us To AGI?

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=uRuY0ozEm3Q
- video_id: uRuY0ozEm3Q
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-10-13T12:24:51.000Z
- upload_date: 2025-10-13
- duration: 50:48
- view_count: 11320
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

LLMs have made tremendous progress in modeling human language. But can they go beyond that to make new discoveries and move the needle on novel scientific progress?

We sat down with distinguished Columbia CS professor Vishal Misra to discuss this, plus why chain-of-thought reasoning works so well, and what real AGI would look like.

Timecodes: 
0:00 Intro
0:32 How LLMs and humans reason through manifolds
4:15 Token prediction, entropy & confidence
8:05 Chain-of-thought reasoning and entropy reduction
10:20 Vishal’s background
14:10 Inventing RAG
17:30 The rise of LLMs and the question of plateau
21:00 The Matrix Model / how prompts map to token distributions
28:10 Why LLMs can’t recursively self-improve
34:02 Defining AGI
38:25 Future architectures & multimodal intelligence
42:00 Modeling vs prompt engineering
47:20 What would prove AGI has arrived?
50:01 Closing thoughts

Resources:
Follow Dr. Misra on X: https://x.com/vishalmisra
Follow Martin on X: https://x.com/martin_casado

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

00:00:00 --> 00:00:07
Any LLM that was trained on pre-1915

00:00:03 --> 00:00:09
physics would never have come up with a

00:00:06 --> 00:00:11
theory of relativity.

00:00:08 --> 00:00:13
Einstein had to sort of reject the

00:00:10 --> 00:00:15
Newtonian physics and come up with this

00:00:12 --> 00:00:17
pace-time continuum. He completely

00:00:14 --> 00:00:20
rewrote the rules. AGI will be when you

00:00:16 --> 00:00:22
are able to create new science, new

00:00:19 --> 00:00:24
results, new math. When an AGI comes up

00:00:21 --> 00:00:26
with a theory of relativity, it has to

00:00:23 --> 00:00:29
go beyond what it has been trained on to

00:00:25 --> 00:00:33
come up with new paradigms, new science.

00:00:28 --> 00:00:33
That's my definition of AGI.

00:00:33 --> 00:00:39
Martine, um yeah, I know you wanted to

00:00:36 --> 00:00:40
have Vishal on. What what do you find so

00:00:38 --> 00:00:41
remarkable about him and his

00:00:39 --> 00:00:43
contributions that that inspired this?

00:00:40 --> 00:00:44
>> Vishal and I actually have very similar

00:00:42 --> 00:00:45
backgrounds. We both come from

00:00:43 --> 00:00:46
networking. He's a much more

00:00:44 --> 00:00:48
accomplished networking guy than I am,

00:00:45 --> 00:00:50
but That's a high bar given you your

00:00:47 --> 00:00:52
accomplishments in the field. But but

00:00:49 --> 00:00:53
what we come from and so we we actually

00:00:51 --> 00:00:55
view the world in an

00:00:52 --> 00:00:58
information-theoretic way. It is

00:00:54 --> 00:01:00
actually part of networking. Um and you

00:00:57 --> 00:01:04
know, with all this AI stuff, there's so

00:00:59 --> 00:01:06
much work trying to create models that

00:01:03 --> 00:01:09
can help us understand how these LLMs

00:01:05 --> 00:01:11
work. And in my experience over the last

00:01:08 --> 00:01:12
few years, the ones that have most

00:01:10 --> 00:01:14
impacted my understanding and I think

00:01:11 --> 00:01:16
have been the most predictive are the

00:01:13 --> 00:01:18
ones that Vishal has come up with. Um he

00:01:16 --> 00:01:19
did a previous one that we're going to

00:01:17 --> 00:01:22
talk about um

00:01:18 --> 00:01:24
called Matrix, is it?

00:01:21 --> 00:01:25
Uh Beyond the Black Black Box, but yeah,

00:01:23 --> 00:01:27
the Matrix

00:01:24 --> 00:01:28
>> Box. So actually if yeah, you know, we

00:01:26 --> 00:01:31
should put this in the notes for this,

00:01:27 --> 00:01:34
but like the single best talk I've ever

00:01:30 --> 00:01:36
seen on trying to understand how LLMs

00:01:33 --> 00:01:38
work is one that Vishal did at MIT,

00:01:35 --> 00:01:40
which uh um Hari Balakrishnan pointed me

00:01:37 --> 00:01:42
to and I watched that. So So he did that

00:01:39 --> 00:01:45
work and then he's doing more recent

00:01:41 --> 00:01:48
work that's actually trying to scope out

00:01:44 --> 00:01:49
not only how LLMs reason, but like it

00:01:47 --> 00:01:51
has some reflexes on humans reason, too.

00:01:49 --> 00:01:52
And so I just think he's doing some of

00:01:50 --> 00:01:55
the more profound work in trying to

00:01:51 --> 00:01:58
understand and come up with models,

00:01:54 --> 00:02:00
formal models for how LLMs reason.

00:01:57 --> 00:02:03
Which is on that note, you said his most

00:02:00 --> 00:02:05
recent work helped you change how how

00:02:02 --> 00:02:06
humans think. Why don't you flush

00:02:04 --> 00:02:08
that out a little bit? How did it sort

00:02:05 --> 00:02:09
of Well, okay, so can I can I just try

00:02:07 --> 00:02:11
to take a rough sketch at it and then

00:02:08 --> 00:02:12
you just tell me how how how how wrong I

00:02:10 --> 00:02:13
am?

00:02:11 --> 00:02:15
>> I am. You know, you're trying to

00:02:12 --> 00:02:19
describe how LLMs work and one thing

00:02:14 --> 00:02:23
that you found is that they reduce a

00:02:18 --> 00:02:27
very very complex

00:02:22 --> 00:02:29
multidimensional space into basically a

00:02:26 --> 00:02:32
geometric manifold

00:02:28 --> 00:02:34
that's a reduced state space. So it's a

00:02:31 --> 00:02:36
reduced degrees of freedom, but you can

00:02:33 --> 00:02:39
actually predict where in the manifold

00:02:35 --> 00:02:42
the reasoning can move to.

00:02:38 --> 00:02:44
Roughly. So so So you've reduced the

00:02:41 --> 00:02:46
dimensionality of the problem to a

00:02:43 --> 00:02:50
geometric manifold and then you can

00:02:45 --> 00:02:53
actually formally specify kind of how

00:02:49 --> 00:02:55
far you can reason within that that

00:02:52 --> 00:02:57
manifold. So it it it it and the

00:02:54 --> 00:03:00
articulation is that we

00:02:56 --> 00:03:02
or one of the intuitions is that we as

00:02:59 --> 00:03:04
humans do the same thing is we take this

00:03:01 --> 00:03:05
very complex heavy-tailed stochastic

00:03:03 --> 00:03:08
universe and we reduce it to kind of

00:03:04 --> 00:03:09
this geometric manifold and then when we

00:03:07 --> 00:03:11
reason, we just move along that

00:03:08 --> 00:03:13
manifold.

00:03:11 --> 00:03:14
Yeah, I think you captured it

00:03:12 --> 00:03:16
accurately. That's that's kind of the

00:03:14 --> 00:03:17
spirit of the work, yeah.

00:03:15 --> 00:03:19
>> Well, wait, can I just hear it in your

00:03:16 --> 00:03:23
words because, you know, I'm this lay

00:03:18 --> 00:03:23
I'm a VC, so

00:03:22 --> 00:03:28
You're you're a VC with an H-index of

00:03:24 --> 00:03:28
what, 60? Something

00:03:27 --> 00:03:32
Uh yeah, so so

00:03:30 --> 00:03:34
you know,

00:03:31 --> 00:03:36
ultimately what all these LLMs are

00:03:33 --> 00:03:37
doing, whether

00:03:35 --> 00:03:40
you know,

00:03:36 --> 00:03:43
the early LLMs or the LLMs that we have

00:03:39 --> 00:03:45
today with uh

00:03:42 --> 00:03:48
you know, all sorts of post training

00:03:44 --> 00:03:51
RLHF, whatever you do, at the end of the

00:03:47 --> 00:03:53
day what they do is they create a

00:03:50 --> 00:03:55
distribution for the next token.

00:03:52 --> 00:03:58
Right? So

00:03:54 --> 00:03:59
given a prompt these LLMs create a

00:03:57 --> 00:04:02
distribution for the next token or the

00:03:58 --> 00:04:05
next word and then they pick

00:04:01 --> 00:04:07
uh something from that distribution

00:04:04 --> 00:04:09
using some

00:04:06 --> 00:04:11
kind of algorithm to predict the

00:04:08 --> 00:04:12
next token, pick it, and then keep

00:04:10 --> 00:04:16
going.

00:04:11 --> 00:04:18
Now what happens uh

00:04:15 --> 00:04:20
because of the way we train these LLMs,

00:04:17 --> 00:04:22
the architecture of the transformers,

00:04:19 --> 00:04:24
and the loss function, you know, the the

00:04:21 --> 00:04:27
way you put it is right. It sort of

00:04:23 --> 00:04:30
reduces the world into these Bayesian

00:04:26 --> 00:04:32
manifolds. Yeah. And as long as the LLM

00:04:29 --> 00:04:34
is going

00:04:31 --> 00:04:36
uh in it's sort of traversing through

00:04:33 --> 00:04:38
these manifolds

00:04:35 --> 00:04:41
it is confident.

00:04:37 --> 00:04:42
And it can produce something which is

00:04:40 --> 00:04:45
which makes sense.

00:04:41 --> 00:04:47
The the moment it sort of veers away

00:04:44 --> 00:04:49
from the manifold, then it starts

00:04:46 --> 00:04:50
hallucinating and starts spouting

00:04:48 --> 00:04:52
nonsense. Confident nonsense, but

00:04:49 --> 00:04:54
nonsense. Yeah. So so so it creates

00:04:51 --> 00:04:56
these manifolds and the trick is, you

00:04:53 --> 00:04:58
know, we the distribution that is

00:04:56 --> 00:05:00
produced

00:04:57 --> 00:05:02
you can measure the entropy of the

00:04:59 --> 00:05:04
distribution.

00:05:01 --> 00:05:05
It

00:05:03 --> 00:05:06
entropy the way

00:05:04 --> 00:05:07
Shannon described

00:05:05 --> 00:05:09
>> Shannon Shannon entropy.

00:05:06 --> 00:05:10
Shannon entropy, yeah, not not

00:05:08 --> 00:05:12
hermodynamic entropy.

00:05:09 --> 00:05:14
So uh

00:05:11 --> 00:05:16
So so suppose you have

00:05:13 --> 00:05:18
a vocabulary of let's say 50,000

00:05:15 --> 00:05:20
different tokens and you have a

00:05:18 --> 00:05:23
distribution next token distribution

00:05:19 --> 00:05:25
over these 50,000 tokens. So let's say

00:05:22 --> 00:05:27
the cat sat on the

00:05:24 --> 00:05:28
right? If that is a prompt, then the

00:05:26 --> 00:05:33
distribution will have a high

00:05:27 --> 00:05:36
probability for mat Yeah. or hat or

00:05:32 --> 00:05:40
table and a very low probability of

00:05:35 --> 00:05:42
let's say ship or whale or something

00:05:39 --> 00:05:44
like that, right? Yeah. So

00:05:41 --> 00:05:47
because of the way it's trained, it it

00:05:43 --> 00:05:49
has these distributions. Now the

00:05:46 --> 00:05:51
distributions can be low entropy or high

00:05:48 --> 00:05:53
entropy. Yeah. A high entropy

00:05:50 --> 00:05:56
distribution means that there are many

00:05:52 --> 00:05:58
different ways that the LLM can go Yeah.

00:05:55 --> 00:06:01
with a high enough probability for all

00:05:57 --> 00:06:03
those paths. Yeah. Low entropy means

00:06:00 --> 00:06:07
that there are only a small set of

00:06:02 --> 00:06:10
choices for the next token.

00:06:06 --> 00:06:12
And the prompts also you can

00:06:09 --> 00:06:14
categorize into

00:06:11 --> 00:06:16
two kinds of prompts.

00:06:13 --> 00:06:18
One prompt is uh

00:06:15 --> 00:06:21
is you can say uh

00:06:17 --> 00:06:25
igh information entropy Yeah. and one

00:06:20 --> 00:06:28
prompt is low information entropy. Yeah.

00:06:24 --> 00:06:32
So the way these manifolds work

00:06:27 --> 00:06:34
the the LLM start paying attention to

00:06:31 --> 00:06:37
prompts that have high

00:06:34 --> 00:06:39
information entropy Yeah. and low

00:06:36 --> 00:06:41
prediction entropy.

00:06:38 --> 00:06:45
So what do I mean by that? So So when I

00:06:40 --> 00:06:45
say I'm going out for dinner Yeah.

00:06:44 --> 00:06:48
right?

00:06:44 --> 00:06:49
So when I say I'm going out for dinner

00:06:47 --> 00:06:53
that

00:06:48 --> 00:06:55
phrase the the LLMs have been trained

00:06:52 --> 00:06:56
you know, they've seen it a lot and

00:06:54 --> 00:06:58
there are many different directions I

00:06:55 --> 00:07:01
can go with it. I can say I'm going for

00:06:58 --> 00:07:02
dinner tonight, I'm going for dinner to

00:07:00 --> 00:07:03
McDonald's, or I'm going to dinner blah

00:07:01 --> 00:07:05
blah. There there are many

00:07:02 --> 00:07:07
different Yeah.

00:07:04 --> 00:07:09
But when I say I'm going to dinner with

00:07:06 --> 00:07:11
Martin Casado

00:07:08 --> 00:07:15
you know, the LLM now this is

00:07:10 --> 00:07:18
information-rich. This is sort of a rare

00:07:14 --> 00:07:20
phrase. And now the the sort of realm of

00:07:17 --> 00:07:21
possibilities reduces because Martin is

00:07:19 --> 00:07:22
only going to take me to Michelin-star

00:07:21 --> 00:07:23
estaurants.

00:07:21 --> 00:07:26
>> Yeah. Yeah.

00:07:23 --> 00:07:28
Uh I'm not going to go to

00:07:25 --> 00:07:30
a McDonald's. You know, you you you get

00:07:27 --> 00:07:32
what I'm saying. The moment you add more

00:07:29 --> 00:07:34
context Yeah. you make the prompt

00:07:31 --> 00:07:36
information-rich

00:07:33 --> 00:07:40
the prediction entropy reduces. Yep.

00:07:35 --> 00:07:41
Yep. Yep. And another example that

00:07:39 --> 00:07:43
uh

00:07:40 --> 00:07:44
I often Well, I mean, but but just

00:07:42 --> 00:07:46
quickly, what So what

00:07:43 --> 00:07:48
But what is your takeaway? What is your

00:07:45 --> 00:07:49
implication on that? Which is of course

00:07:47 --> 00:07:54
as as

00:07:49 --> 00:07:56
your intro So yeah, so you're um

00:07:53 --> 00:07:58
uh

00:07:55 --> 00:08:00
So sorry sorry, I forgot how you

00:07:57 --> 00:08:02
described it, but like so the the more

00:07:59 --> 00:08:06
precise you are, the more tokens you

00:08:01 --> 00:08:08
are, I presume the less options you have

00:08:05 --> 00:08:10
for the next token. Is that correct or

00:08:07 --> 00:08:12
not correct? Yeah. Yeah. Essentially. So

00:08:09 --> 00:08:15
you're redu you're reducing it you're

00:08:11 --> 00:08:17
ducing it to like a very specific

00:08:14 --> 00:08:20
state space

00:08:16 --> 00:08:21
when it comes to confidence in an

00:08:19 --> 00:08:23
swer. And like this is kind of a

00:08:20 --> 00:08:26
manifold that you can go on.

00:08:22 --> 00:08:27
And then I mean, do you

00:08:25 --> 00:08:30
have kind of a conclusion of what

00:08:27 --> 00:08:32
hat means for systems or what that

00:08:29 --> 00:08:36
means for reasoning or is it just a nice

00:08:31 --> 00:08:39
way to articulate the bounds of LLMs?

00:08:35 --> 00:08:40
No, that that there is something uh

00:08:38 --> 00:08:41
I don't know

00:08:39 --> 00:08:43
if I should say profound,

00:08:40 --> 00:08:45
but but there is something about it

00:08:42 --> 00:08:47
which tells what these LLMs can or

00:08:44 --> 00:08:49
cannot do.

00:08:46 --> 00:08:53
Right? So it it

00:08:49 --> 00:08:56
uh one of the examples that uh

00:08:52 --> 00:09:01
I often tell is suppose I ask you what

00:08:55 --> 00:09:02
is 769 * 1,025?

00:09:00 --> 00:09:06
You have no idea. You can have some

00:09:01 --> 00:09:08
vague idea given the two numbers, right?

00:09:05 --> 00:09:09
And so in your mind

00:09:07 --> 00:09:11
the next token distribution of the

00:09:08 --> 00:09:14
answer

00:09:10 --> 00:09:16
is going to be diffuse. Right?

00:09:13 --> 00:09:17
You don't know. You have maybe a vague

00:09:15 --> 00:09:19
ss. If you are, you know,

00:09:16 --> 00:09:21
mathematically very good, maybe your

00:09:18 --> 00:09:22
guess is more precise, but it's still

00:09:20 --> 00:09:25
going to be diffuse and it's not going

00:09:21 --> 00:09:27
to be the correct answer. But

00:09:24 --> 00:09:29
if I if you say can I write it down and

00:09:26 --> 00:09:30
o it

00:09:28 --> 00:09:33
he way we have learned multiplication

00:09:29 --> 00:09:34
tables, now you know exactly what to do

00:09:32 --> 00:09:36
next step.

00:09:33 --> 00:09:40
Right? You write 769

00:09:35 --> 00:09:43
and then 1025 and then you know exactly.

00:09:39 --> 00:09:46
So at each stage of that process your

00:09:42 --> 00:09:48
prediction entropy is very low.

00:09:45 --> 00:09:51
You know exactly what to do.

00:09:47 --> 00:09:53
Because you have been taught

00:09:50 --> 00:09:56
his algorithm.

00:09:52 --> 00:09:58
And by invoking this algorithm, saying,

00:09:55 --> 00:09:59
"Okay, I'm not going to just guess the

00:09:57 --> 00:10:01
answer, but I'm going to do it step by

00:09:59 --> 00:10:03
step.

00:10:00 --> 00:10:04
Then your prediction and entropy

00:10:02 --> 00:10:07
reduces.

00:10:03 --> 00:10:08
And you can arrive at an answer which

00:10:06 --> 00:10:11
you're confident of and which is

00:10:08 --> 00:10:12
correct. And the LLMs are pretty much

00:10:10 --> 00:10:13
the same way.

00:10:11 --> 00:10:15
You know, that's why chain of thought

00:10:12 --> 00:10:17
works.

00:10:14 --> 00:10:19
What happens with chain of thought is

00:10:16 --> 00:10:22
you ask the LLM to do something chain of

00:10:18 --> 00:10:24
thought, it starts breaking the problem

00:10:21 --> 00:10:26
into small steps. These steps it has

00:10:23 --> 00:10:27
een in the past. It has been trained

00:10:25 --> 00:10:29
on.

00:10:26 --> 00:10:31
Maybe with some different numbers, but

00:10:28 --> 00:10:33
he concept it has been trained on.

00:10:30 --> 00:10:34
And once it breaks it down, then it's

00:10:32 --> 00:10:37
confident.

00:10:33 --> 00:10:39
Okay, now I need to do A, B, C, D and

00:10:36 --> 00:10:41
then I arrive at this answer.

00:10:38 --> 00:10:42
Whatever it is.

00:10:40 --> 00:10:44
Let's zoom back. I want to want to get

00:10:41 --> 00:10:45
into LLMs, but before first Vishal,

00:10:43 --> 00:10:47
maybe you can

00:10:44 --> 00:10:49
give more of context on your background

00:10:46 --> 00:10:51
and how that informs

00:10:48 --> 00:10:53
your your work here.

00:10:50 --> 00:10:55
Okay. So yeah, yeah, as

00:10:52 --> 00:10:57
my team said, my background is very

00:10:54 --> 00:10:59
similar to his. We, you know, we come

00:10:56 --> 00:11:03
from doing networking.

00:10:58 --> 00:11:06
So my PhD thesis, my sort of early work

00:11:02 --> 00:11:07
at Columbia has all been in networking.

00:11:05 --> 00:11:09
But there's another side of me, another

00:11:06 --> 00:11:11
hat that I wear.

00:11:08 --> 00:11:13
Which is

00:11:10 --> 00:11:14
both an entrepreneur and a cricket fan.

00:11:12 --> 00:11:16
>> I was going to say, don't you own a

00:11:13 --> 00:11:19
cricket team or something?

00:11:15 --> 00:11:21
I am a minority owner at your for your

00:11:18 --> 00:11:23
local cricket team, the San Francisco

00:11:20 --> 00:11:25
Unicorns. Yeah, that's right.

00:11:22 --> 00:11:27
Very proud to have you.

00:11:24 --> 00:11:30
So but the uh

00:11:26 --> 00:11:31
So so in the '90s I was one of the

00:11:29 --> 00:11:33
people who uh

00:11:30 --> 00:11:36
started this uh portal called

00:11:33 --> 00:11:39
Cricinfo.

00:11:35 --> 00:11:40
And uh Cricinfo uh

00:11:38 --> 00:11:41
at one point it was the most popular

00:11:39 --> 00:11:44
website in the world. It had more hits

00:11:40 --> 00:11:45
than Yahoo. That was before India came

00:11:43 --> 00:11:46
on.

00:11:44 --> 00:11:47
Remarkable.

00:11:45 --> 00:11:49
>> And

00:11:46 --> 00:11:51
so you know, uh

00:11:48 --> 00:11:53
we built Cricket is a very star-studded

00:11:50 --> 00:11:55
sport. You'll think baseball multiplied

00:11:52 --> 00:11:59
by a thousand.

00:11:54 --> 00:12:00
And we had built this free searchable

00:11:58 --> 00:12:02
stats database on cricket called

00:11:59 --> 00:12:03
Statsguru.

00:12:01 --> 00:12:07
And this has been available on on

00:12:03 --> 00:12:08
Cricinfo since 2000.

00:12:06 --> 00:12:09
But

00:12:07 --> 00:12:11
because

00:12:08 --> 00:12:14
you can search for anything, everything

00:12:10 --> 00:12:16
was made available on Statsguru.

00:12:13 --> 00:12:18
And you know, you can't expect people to

00:12:15 --> 00:12:21
write SQL queries to query everything.

00:12:17 --> 00:12:24
So how do you how did we do it? Well,

00:12:20 --> 00:12:25
it was a web form.

00:12:23 --> 00:12:27
You know, where you could formulate your

00:12:24 --> 00:12:29
query using that form that and in the

00:12:26 --> 00:12:30
back end that that was translated into

00:12:28 --> 00:12:31
SQL query, got the results, and got it

00:12:29 --> 00:12:33
back.

00:12:30 --> 00:12:35
But as a result, that because you could

00:12:32 --> 00:12:37
o everything, everything was made

00:12:34 --> 00:12:40
available, the web form had like 25

00:12:36 --> 00:12:42
different check boxes, 15 text fields,

00:12:39 --> 00:12:45
18 different drop downs. The interface

00:12:41 --> 00:12:47
was a mess. It was very daunting.

00:12:44 --> 00:12:47
So

00:12:47 --> 00:12:54
and ESPNcricinfo

00:12:50 --> 00:12:57
in the mid 2006, I think.

00:12:53 --> 00:12:59
But they still kept the same interface.

00:12:56 --> 00:13:01
And that has always sort of

00:12:58 --> 00:13:02
nagged me.

00:13:00 --> 00:13:02
And so I still know the people who run

00:13:01 --> 00:13:04
it.

00:13:02 --> 00:13:06
>> nagged What nagged you? Is that Cricinfo

00:13:03 --> 00:13:08
did not have a formal language, it had a

00:13:05 --> 00:13:10
web form for doing queries? That web

00:13:08 --> 00:13:13
form was terrible.

00:13:09 --> 00:13:16
[Laughter]

00:13:12 --> 00:13:16
Because of that only the real nerds used

00:13:15 --> 00:13:18
that form.

00:13:15 --> 00:13:21
>> in the world to bother you, the fact

00:13:17 --> 00:13:23
hat an old website was a web form. It

00:13:20 --> 00:13:25
was I appreciate I appreciate your

00:13:22 --> 00:13:27
commitment to aesthetics.

00:13:24 --> 00:13:29
[Laughter]

00:13:26 --> 00:13:31
So so I I'm still friendly with the

00:13:28 --> 00:13:33
people who run ESPNcricinfo. They're the

00:13:30 --> 00:13:34
ditor-in-chief.

00:13:32 --> 00:13:36
Whenever he comes to New York, you know,

00:13:33 --> 00:13:39
we meet up, we go out for a drink.

00:13:35 --> 00:13:41
And so he was here in 2000. So now the

00:13:38 --> 00:13:45
story shifts to

00:13:40 --> 00:13:47
how LLMs and me sort of met.

00:13:44 --> 00:13:48
So January 2000, right before the

00:13:46 --> 00:13:50
pandemic, he was here

00:13:47 --> 00:13:51
and I again said, "Why don't you do

00:13:49 --> 00:13:52
something about Statsguru?" And he looks

00:13:50 --> 00:13:54
at me and says, "Why don't you do

00:13:51 --> 00:13:56
something about Statsguru?"

00:13:53 --> 00:13:57
He was kind of joking, but uh

00:13:55 --> 00:13:59
e he thought maybe, you know, I had

00:13:57 --> 00:14:01
some

00:13:58 --> 00:14:04
ways to fix the interface.

00:14:00 --> 00:14:05
So anyway, then the pandemic hit, the

00:14:03 --> 00:14:08
world stopped.

00:14:04 --> 00:14:11
But in July of 2020, the first version

00:14:07 --> 00:14:14
of GPT-3 was released.

00:14:10 --> 00:14:16
And I saw someone uh

00:14:13 --> 00:14:19
use GPT-3

00:14:15 --> 00:14:23
to write a SQL query for their own da-

00:14:18 --> 00:14:24
database using natural language.

00:14:22 --> 00:14:28
And I thought,

00:14:23 --> 00:14:31
"Can I use this to fix Statsguru?"

00:14:27 --> 00:14:33
So I got early access to GPT-3. You

00:14:30 --> 00:14:35
know, getting access those days was

00:14:32 --> 00:14:37
difficult, but somehow I got it.

00:14:34 --> 00:14:39
But soon I realized that, you know, no,

00:14:36 --> 00:14:41
I cannot really do it.

00:14:38 --> 00:14:43
Because Statsguru, the the back-end

00:14:40 --> 00:14:47
atabases were so complex and if you

00:14:42 --> 00:14:48
remember GT GPT-3 had only a 2048 token

00:14:46 --> 00:14:51
context window.

00:14:47 --> 00:14:53
There was no way in hell I could fit fit

00:14:50 --> 00:14:54
he complexities of that database in

00:14:52 --> 00:14:58
that context window.

00:14:53 --> 00:15:01
And and GPT-3 also did not do

00:14:57 --> 00:15:01
instruction following at that time.

00:15:01 --> 00:15:06
But then in trying to solve this

00:15:02 --> 00:15:09
problem, I accidentally invented what's

00:15:05 --> 00:15:11
now called RAG.

00:15:08 --> 00:15:12
Where based on the natural language

00:15:10 --> 00:15:14
query,

00:15:11 --> 00:15:16
I created a database of natural language

00:15:13 --> 00:15:19
queries and structure

00:15:15 --> 00:15:20
sort of the structured queries. I

00:15:18 --> 00:15:24
created a DSL

00:15:20 --> 00:15:26
which then translated into a REST call

00:15:23 --> 00:15:28
to Statsguru.

00:15:25 --> 00:15:30
So based on the new query, I would look

00:15:27 --> 00:15:32
through my set of natural language

00:15:29 --> 00:15:34
queries. I had about 1500 examples and I

00:15:31 --> 00:15:36
would pick pick the six or seven most

00:15:33 --> 00:15:38
relevant ones.

00:15:35 --> 00:15:41
And then that and the structured query I

00:15:37 --> 00:15:43
would send as a prefix and the new query

00:15:40 --> 00:15:45
and GPT-3 magically

00:15:42 --> 00:15:47
completed it and the accuracy was very

00:15:44 --> 00:15:48
high. So that had been running in

00:15:46 --> 00:15:50
production since

00:15:47 --> 00:15:52
September 2021.

00:15:49 --> 00:15:54
You know, about 15 months before ChatGPT

00:15:51 --> 00:15:56
came.

00:15:53 --> 00:15:59
And you know, the whole

00:15:55 --> 00:16:00
revolution in some sense started and RAG

00:15:58 --> 00:16:01
became very popular. So I didn't call it

00:15:59 --> 00:16:02
RAG,

00:16:00 --> 00:16:04
but this is something sort of I

00:16:01 --> 00:16:06
accidentally did in trying to solve that

00:16:03 --> 00:16:09
problem for Cricinfo.

00:16:05 --> 00:16:11
Now once I

00:16:08 --> 00:16:13
built it, you know, I was

00:16:10 --> 00:16:15
thrilled that this worked, but I had no

00:16:12 --> 00:16:17
idea why it worked.

00:16:14 --> 00:16:19
You know, I stared at that I stared at

00:16:16 --> 00:16:22
hat what transformer architecture

00:16:19 --> 00:16:24
diagram. I read those papers, but I

00:16:21 --> 00:16:25
couldn't understand how or why it

00:16:23 --> 00:16:29
worked.

00:16:25 --> 00:16:30
So then I started in this journey of

00:16:28 --> 00:16:31
developing a mathematical model trying

00:16:29 --> 00:16:34
to

00:16:30 --> 00:16:37
understand how it worked.

00:16:33 --> 00:16:39
So that that's been sort of my

00:16:36 --> 00:16:41
journey through this world of AI and

00:16:38 --> 00:16:43
LLMs because I was trying to solve this

00:16:40 --> 00:16:43
cricket problem.

00:16:42 --> 00:16:45
Yeah.

00:16:42 --> 00:16:47
Amazing. And and so maybe reflecting

00:16:44 --> 00:16:49
back since since the release of GPT-3,

00:16:46 --> 00:16:52
what has most surprised you about how

00:16:48 --> 00:16:54
LLMs have have developed?

00:16:51 --> 00:16:56
So what has most surprised me? The pace

00:16:53 --> 00:16:59
of development.

00:16:55 --> 00:17:00
So GPT-3 was, you know,

00:16:58 --> 00:17:03
it was a nice parlor trick and you had

00:17:00 --> 00:17:04
to jump through hoops to get it to do

00:17:02 --> 00:17:08
something useful.

00:17:03 --> 00:17:10
But starting with you know, ChatGPT was

00:17:07 --> 00:17:12
an advance over GPT-3 and then you had

00:17:09 --> 00:17:16
all these things like chain of thought,

00:17:11 --> 00:17:17
instruction following. GPT-4 really made

00:17:15 --> 00:17:18
it polished.

00:17:16 --> 00:17:20
And

00:17:18 --> 00:17:22
you know, the pace of development has

00:17:19 --> 00:17:23
really surprised me.

00:17:21 --> 00:17:27
Now, you know, when I started working

00:17:22 --> 00:17:28
with GPT-3, I could sort of see what its

00:17:26 --> 00:17:31
limitations were, what I could make it

00:17:27 --> 00:17:33
do, what I couldn't make it do. But I

00:17:30 --> 00:17:35
never thought of it as

00:17:32 --> 00:17:37
you know, what it what these LLMs have

00:17:34 --> 00:17:39
become for me now and what what I've

00:17:36 --> 00:17:42
become for millions of people around the

00:17:38 --> 00:17:44
world. We treat these models as our

00:17:42 --> 00:17:46
co-workers.

00:17:43 --> 00:17:49
Almost like an intern that, you know,

00:17:45 --> 00:17:51
you're constantly uh chatting with them,

00:17:48 --> 00:17:53
brainstorming, making them do all sorts

00:17:50 --> 00:17:54
of work which we couldn't imagine, you

00:17:52 --> 00:17:56
know,

00:17:53 --> 00:17:57
just when ChatGPT was released. You

00:17:55 --> 00:17:59
know, it was nice. It was it could write

00:17:56 --> 00:18:02
poem, it could write limericks, it could

00:17:58 --> 00:18:04
answer some hallucinated

00:18:01 --> 00:18:05
uh questions. But the capabilities that

00:18:03 --> 00:18:07
have

00:18:04 --> 00:18:09
merged now,

00:18:06 --> 00:18:11
that pace has been very sort of

00:18:08 --> 00:18:14
surprising to me. Do you see progress

00:18:11 --> 00:18:16
plat- plateauing or how do you either

00:18:13 --> 00:18:18
now or or in the near future how how do

00:18:15 --> 00:18:20
you see it going?

00:18:17 --> 00:18:23
I yes,

00:18:19 --> 00:18:25
in some sense progress is plateauing.

00:18:22 --> 00:18:27
Uh it's like the iPhone, you know, when

00:18:24 --> 00:18:29
the iPhone came out,

00:18:26 --> 00:18:32
wow, what is this thing? And then

00:18:29 --> 00:18:33
and the early iterations, you know,

00:18:31 --> 00:18:36
constantly we were amazed by new

00:18:32 --> 00:18:39
capabilities. But the last, you know,

00:18:35 --> 00:18:40
seven, eight, nine years,

00:18:38 --> 00:18:42
it's maybe the camera got a little bit

00:18:39 --> 00:18:45
better or, you know, one thing

00:18:41 --> 00:18:48
changed here or memory is more, but

00:18:44 --> 00:18:51
here has been no fundamental advance in

00:18:47 --> 00:18:53
what it's capable of.

00:18:50 --> 00:18:55
You can sort of see a similar thing

00:18:52 --> 00:18:58
happening with these LLMs.

00:18:54 --> 00:19:00
And this is not true for just one one

00:18:57 --> 00:19:03
company and one model. Right? You look

00:18:59 --> 00:19:07
at what OpenAI is coming up with or what

00:19:02 --> 00:19:09
Anthropic, Google,

00:19:06 --> 00:19:13
or all these open source Chinese model

00:19:08 --> 00:19:15
or Mistral, the capabilities of LLMs has

00:19:12 --> 00:19:18
not fundamentally changed. They've

00:19:14 --> 00:19:21
become better, right? They've improved,

00:19:17 --> 00:19:24
but they have not crossed into

00:19:20 --> 00:19:26
a different realm. So this is something

00:19:23 --> 00:19:28
that I really appreciate about

00:19:25 --> 00:19:32
your work. And so

00:19:27 --> 00:19:34
um the thing that really struck me is as

00:19:31 --> 00:19:36
oon as these things showed up, you

00:19:33 --> 00:19:40
actually got busy trying to have a

00:19:35 --> 00:19:41
formal model of what they're capable of,

00:19:39 --> 00:19:43
which was in stark contrast to what

00:19:40 --> 00:19:45
everybody else was doing. Everybody else

00:19:42 --> 00:19:48
was like, "AGI, these things are going

00:19:44 --> 00:19:51
to, you know, recursively self-improve."

00:19:47 --> 00:19:53
Like or or or they'll say, "Oh, all are

00:19:50 --> 00:19:54
just stochastic parrots, which doesn't

00:19:52 --> 00:19:57
mean anything. So, everybody had

00:19:54 --> 00:19:59
rhetoric, and sometimes this rhetoric

00:19:56 --> 00:20:00
was fanciful, and sometimes

00:19:58 --> 00:20:02
this rhetoric was almost reductionist,

00:19:59 --> 00:20:03
like, "Oh, it's just a database," which

00:20:01 --> 00:20:05
is clearly not true.

00:20:02 --> 00:20:06
And the thing that really struck me

00:20:04 --> 00:20:08
about your work is you're like, "No,

00:20:05 --> 00:20:10
let's figure out exactly what's going

00:20:07 --> 00:20:12
on. Let's come up with a formal model,

00:20:09 --> 00:20:14
and once we have a formal model, we can

00:20:11 --> 00:20:16
reason about what that means."

00:20:13 --> 00:20:18
And then, you know, in in my reading of

00:20:15 --> 00:20:20
your work, I kind of break it into

00:20:17 --> 00:20:22
pieces. There's the first one where you

00:20:19 --> 00:20:23
basically you came up with this, you

00:20:21 --> 00:20:25
know, matrix abstraction. I think it's

00:20:22 --> 00:20:25
worth you talking through. And then

00:20:24 --> 00:20:27
>> Yeah.

00:20:24 --> 00:20:29
you took in-context learning as an

00:20:26 --> 00:20:31
example, and you mapped it to Bayesian

00:20:28 --> 00:20:33
reasoning, which to me was incredibly

00:20:30 --> 00:20:35
powerful, cuz at the time, nobody knew

00:20:32 --> 00:20:37
hy in-context learning worked. So, I

00:20:34 --> 00:20:39
think it'd be great for you to discuss

00:20:36 --> 00:20:41
that, because again, I think I think it

00:20:38 --> 00:20:43
was the first real kind of formal effect

00:20:40 --> 00:20:46
on like like, how are these things

00:20:42 --> 00:20:49
working? And then, the more recent work

00:20:45 --> 00:20:53
that you're working on now is a kind of

00:20:48 --> 00:20:55
more generalizing version of of

00:20:52 --> 00:20:58
what is the state space that these

00:20:54 --> 00:21:00
models output when it comes to comes to

00:20:57 --> 00:21:01
confidence, which is the manifold that

00:20:59 --> 00:21:03
we're talking about

00:21:00 --> 00:21:03
uh before. So, I would it would be I

00:21:02 --> 00:21:06
think it'd be great if you just

00:21:03 --> 00:21:08
described your matrix

00:21:05 --> 00:21:10
model, and then how you use that to just

00:21:07 --> 00:21:12
o to to

00:21:09 --> 00:21:14
provide some bounds what in-context

00:21:11 --> 00:21:15
learning is doing. What's what's

00:21:13 --> 00:21:18
happening.

00:21:14 --> 00:21:20
Okay, so so so yeah, let's start with

00:21:17 --> 00:21:22
at matrix abstraction. So so the idea

00:21:19 --> 00:21:24
behind the matrix is you have this

00:21:21 --> 00:21:26
gigantic matrix

00:21:23 --> 00:21:30
where every row

00:21:25 --> 00:21:32
corresponds to a prompt.

00:21:29 --> 00:21:35
And then, the number of columns of this

00:21:31 --> 00:21:37
matrix is the vocabulary of the LLM, the

00:21:34 --> 00:21:39
number of tokens it has that it can

00:21:36 --> 00:21:42
emit.

00:21:38 --> 00:21:44
So, for every prompt

00:21:41 --> 00:21:46
his matrix contains the distribution

00:21:43 --> 00:21:48
over this

00:21:45 --> 00:21:50
vocabulary. Yep. So, when you say the

00:21:47 --> 00:21:52
cat sat on the

00:21:49 --> 00:21:53
you know, the column that corresponds to

00:21:51 --> 00:21:56
mat

00:21:53 --> 00:21:58
will have a high probability. Most of

00:21:55 --> 00:21:59
them will be zero. But, you know,

00:21:57 --> 00:22:01
reasonable ex-

00:21:58 --> 00:22:03
continuations will have a non-zero

00:22:00 --> 00:22:04
probability.

00:22:02 --> 00:22:06
And so, you can imagine that there's

00:22:03 --> 00:22:09
this gigantic matrix.

00:22:05 --> 00:22:10
Now, the size of this matrix is, you

00:22:08 --> 00:22:13
know,

00:22:09 --> 00:22:14
if you just take just the old

00:22:12 --> 00:22:16
uh

00:22:13 --> 00:22:19
first generation GPT-3 model, which had

00:22:15 --> 00:22:24
a context window of 2,000 tokens

00:22:18 --> 00:22:25
and a vocabulary of 50,000

00:22:23 --> 00:22:27
next tokens

00:22:24 --> 00:22:30
or 50,000 tokens

00:22:26 --> 00:22:32
then, the size of it, the number of rows

00:22:29 --> 00:22:35
in this matrix is more than the number

00:22:31 --> 00:22:37
of atoms across all galaxies

00:22:34 --> 00:22:40
that we know of.

00:22:36 --> 00:22:42
So, clearly, we can't represent

00:22:39 --> 00:22:44
it exactly.

00:22:41 --> 00:22:46
Now fortunately

00:22:43 --> 00:22:49
a lot of these rows are

00:22:45 --> 00:22:51
do not appear in real life.

00:22:48 --> 00:22:52
Right? An arbitrary correct collection

00:22:50 --> 00:22:54
of tokens, you're not going to use that

00:22:51 --> 00:22:56
as a prompt.

00:22:53 --> 00:22:57
Similarly

00:22:55 --> 00:23:00
uh you so so a lot of these rows are

00:22:56 --> 00:23:01
absent, and a lot of the column values

00:22:59 --> 00:23:04
are also zero.

00:23:00 --> 00:23:06
Right? When you say the cat sat on the,

00:23:03 --> 00:23:07
it's unlikely to be followed by the

00:23:05 --> 00:23:09
token corresponding to, let's say,

00:23:06 --> 00:23:11
numbers.

00:23:08 --> 00:23:13
Or, you know, an arbitrary collection of

00:23:10 --> 00:23:15
tokens. There will be only a very small

00:23:12 --> 00:23:17
subset of tokens that can follow a

00:23:15 --> 00:23:21
particular prompt.

00:23:16 --> 00:23:24
So, this matrix is very very sparse.

00:23:21 --> 00:23:26
But, even after that sparsity, and even

00:23:23 --> 00:23:28
after removing the sort of gibberish

00:23:25 --> 00:23:32
prompts, the size of this matrix is too

00:23:27 --> 00:23:33
much for these models to

00:23:31 --> 00:23:35
represent, even with a trillion

00:23:32 --> 00:23:37
parameters.

00:23:34 --> 00:23:40
So, what in an abstract sense, what what

00:23:36 --> 00:23:42
is happening is

00:23:39 --> 00:23:45
the models get trained

00:23:42 --> 00:23:49
on certain, you know, data from the

00:23:44 --> 00:23:52
training set and certain some a subset a

00:23:48 --> 00:23:54
small subset of these rows you have

00:23:51 --> 00:23:57
reasonable values.

00:23:53 --> 00:23:59
For the next token distribution.

00:23:56 --> 00:24:01
Whenever you give the prompt something

00:23:58 --> 00:24:01
new

00:24:00 --> 00:24:04
like

00:24:01 --> 00:24:05
then, it'll try to interpolate with what

00:24:03 --> 00:24:08
it has learned

00:24:04 --> 00:24:11
and what's there in the new prompt, and

00:24:07 --> 00:24:13
come up with a new distribution.

00:24:10 --> 00:24:15
But, it's basically so it it's more than

00:24:12 --> 00:24:18
a stochastic parrot.

00:24:14 --> 00:24:19
It is sort of Bayesian on this uh

00:24:18 --> 00:24:23
on this subset of the matrix that it has

00:24:20 --> 00:24:25
been trained on.

00:24:22 --> 00:24:28
So so when I say, you know

00:24:24 --> 00:24:30
"I'm going out for dinner with Martin

00:24:27 --> 00:24:31
tonight."

00:24:29 --> 00:24:33
Now

00:24:30 --> 00:24:36
I'm reasonably sure that it has never

00:24:32 --> 00:24:39
encountered that phrase

00:24:35 --> 00:24:42
in its training data, right? But, it has

00:24:38 --> 00:24:46
encountered variants of this phrase.

00:24:41 --> 00:24:49
And given that I'm going out with Martin

00:24:45 --> 00:24:51
it it can produce a Bayesian posterior.

00:24:48 --> 00:24:53
It uses that evidence that Martin is the

00:24:50 --> 00:24:55
one that I'm going for dinner with, and

00:24:52 --> 00:24:57
it'll produce a next token distribution

00:24:54 --> 00:25:00
that'll focus on the likely places that

00:24:57 --> 00:25:02
we are going.

00:24:59 --> 00:25:04
So so this matrix

00:25:01 --> 00:25:05
because it's represented in a compressed

00:25:03 --> 00:25:08
way

00:25:04 --> 00:25:09
et the models respond to everything,

00:25:07 --> 00:25:11
every prompt.

00:25:08 --> 00:25:13
How do they do it? Well, they they go

00:25:10 --> 00:25:16
back to what they've been trained on

00:25:12 --> 00:25:20
interpolate there, and use the prompt as

00:25:15 --> 00:25:22
ort of some evidence to compute a new

00:25:19 --> 00:25:22
distribution.

00:25:21 --> 00:25:27
Right. So right. So the

00:25:23 --> 00:25:30
the context of the prompt impacts

00:25:27 --> 00:25:33
the posterior distribution. Ex- exactly.

00:25:29 --> 00:25:37
Yeah. Right. And this is and this is you

00:25:32 --> 00:25:42
mapped to Bayesian learning where

00:25:36 --> 00:25:43
the the the context is the new evidence.

00:25:41 --> 00:25:45
New evidence, exactly.

00:25:42 --> 00:25:47
>> So so I I'll give you so so so for

00:25:44 --> 00:25:50
instance, uh the cricket example that I

00:25:46 --> 00:25:52
spoke about earlier. Yeah. So I created

00:25:49 --> 00:25:53
my own DSL. Yep.

00:25:51 --> 00:25:56
Which, you know, mapped a natural

00:25:52 --> 00:25:59
anguage query in cricket to this DSL

00:25:55 --> 00:26:01
which then I can translate into a SQL

00:25:58 --> 00:26:03
query or a REST API or whatever. But,

00:26:00 --> 00:26:05
getting the DSL is important.

00:26:02 --> 00:26:08
Now, these LLMs have never seen that

00:26:04 --> 00:26:11
DSL. I designed it. Yeah. Right?

00:26:07 --> 00:26:14
But, yet after showing a few examples,

00:26:10 --> 00:26:15
it learned it.

00:26:13 --> 00:26:17
How did it learn that?

00:26:14 --> 00:26:20
>> is this is in the prompt. You didn't no

00:26:16 --> 00:26:21
training the person. 100% in the prompt,

00:26:19 --> 00:26:22
right? So, like it's the way the waiter

00:26:20 --> 00:26:24
stand time.

00:26:21 --> 00:26:26
Yeah yeah, this this is this was

00:26:23 --> 00:26:29
happening in October of 2020.

00:26:25 --> 00:26:30
Right? I had no access to internals of

00:26:28 --> 00:26:32
OpenAI.

00:26:29 --> 00:26:35
I could just, you know, access the API.

00:26:31 --> 00:26:37
OpenAI had no access to internal

00:26:34 --> 00:26:39
structure of Stats Guru.

00:26:36 --> 00:26:41
Or the DSL that I cooked up in my head.

00:26:38 --> 00:26:43
Yet, after showing it only a few

00:26:40 --> 00:26:46
examples, it learned it right away.

00:26:42 --> 00:26:51
So, that's an example where it has seen

00:26:45 --> 00:26:54
DSLs or structures in the past.

00:26:50 --> 00:26:56
And now using this evidence that I show,

00:26:53 --> 00:26:59
"Okay, this is what my DSL looks like."

00:26:55 --> 00:27:02
Now, a new natural language query, it is

00:26:58 --> 00:27:04
able to create the right posterior

00:27:01 --> 00:27:07
distribution for the tokens

00:27:03 --> 00:27:08
that map to the example that I've seen.

00:27:06 --> 00:27:11
Now, the

00:27:07 --> 00:27:13
other beautiful thing about this is

00:27:10 --> 00:27:15
an example of few-shot learning

00:27:12 --> 00:27:19
or in-context learning, right?

00:27:14 --> 00:27:21
But, when I give that prompt along with

00:27:18 --> 00:27:23
is these examples to this LLM I'm not

00:27:20 --> 00:27:24
saying to the LLM, "Okay, this is an

00:27:22 --> 00:27:26
example of few-shot learning, so learn

00:27:23 --> 00:27:27
from these examples."

00:27:25 --> 00:27:30
Right?

00:27:26 --> 00:27:34
You just pass this to the to the LLM as

00:27:29 --> 00:27:36
a prompt, and it processes it exactly

00:27:33 --> 00:27:38
the way it would process any other

00:27:35 --> 00:27:40
prompt, which is not an example of

00:27:37 --> 00:27:42
in-context learning.

00:27:39 --> 00:27:45
So, that really means that the

00:27:41 --> 00:27:46
underlying mechanism is the same.

00:27:44 --> 00:27:49
Right?

00:27:45 --> 00:27:51
Whether you give a set of examples, and

00:27:48 --> 00:27:53
then ask it to complete a task a task

00:27:50 --> 00:27:56
like in in-context learning, or just

00:27:52 --> 00:27:57
give it some prompt for continuation,

00:27:55 --> 00:27:59
that I'm going out for dinner with

00:27:56 --> 00:28:01
Martin tonight.

00:27:58 --> 00:28:02
There's no in-context learning there.

00:28:00 --> 00:28:03
But

00:28:01 --> 00:28:05
he

00:28:02 --> 00:28:08
process with which it's generating

00:28:04 --> 00:28:10
or doing this inferencing is exactly the

00:28:07 --> 00:28:13
same. And that's what I have been trying

00:28:09 --> 00:28:14
to model and come up with a formal model

00:28:12 --> 00:28:17
of.

00:28:13 --> 00:28:20
What I've found very impressive is

00:28:16 --> 00:28:22
you've used this basic model to show a

00:28:19 --> 00:28:23
number of things, right? To describe

00:28:21 --> 00:28:24
in-context learning and to map it to

00:28:22 --> 00:28:26
Bayesian learning, but you did it for

00:28:23 --> 00:28:29
another one where you kind of you've

00:28:25 --> 00:28:34
sketched out this almost glib argument

00:28:28 --> 00:28:35
on Twitter, on X where you made this um

00:28:33 --> 00:28:37
uh

00:28:34 --> 00:28:39
you you made a rough argument for why

00:28:36 --> 00:28:42
recursive self-improvement

00:28:39 --> 00:28:44
can't happen without additional

00:28:41 --> 00:28:46
information. And so, maybe maybe just

00:28:43 --> 00:28:48
walk through very quickly how like the

00:28:45 --> 00:28:50
same model you can just very quickly

00:28:47 --> 00:28:53
show that a model can never self

00:28:49 --> 00:28:54
recursively self-improve.

00:28:52 --> 00:28:55
So,

00:28:53 --> 00:28:58
uh

00:28:54 --> 00:29:00
you know, another phrase that uh

00:28:59 --> 00:29:05
we've been using recently is, you know,

00:29:02 --> 00:29:07
the output of the LLM is the inductive

00:29:04 --> 00:29:08
closure of what it has been trained on.

00:29:06 --> 00:29:11
Yeah.

00:29:07 --> 00:29:15
So, when you say that it can recursively

00:29:10 --> 00:29:15
self-improve uh

00:29:14 --> 00:29:18
it could mean one of two things. So, let

00:29:16 --> 00:29:19
's get back to the

00:29:17 --> 00:29:22
>> well, actually, you know what's kind of

00:29:19 --> 00:29:23
interesting is like often the

00:29:21 --> 00:29:25
I mo- most people agree that if you have

00:29:22 --> 00:29:27
one LLM, and you just feed the output

00:29:24 --> 00:29:29
into the input, like it's not going to

00:29:26 --> 00:29:31
do anything. But then, often people will

00:29:29 --> 00:29:32
say, "Well, what if you have two LLM you

00:29:30 --> 00:29:34
have no external information, but you

00:29:31 --> 00:29:36
have two LLMs talking to each other.

00:29:33 --> 00:29:37
Maybe they can improve each other, and

00:29:35 --> 00:29:40
then you can have like, you know, a

00:29:36 --> 00:29:42
takeoff scenario." But again, you even

00:29:39 --> 00:29:44
addressed this, even in the case of like

00:29:41 --> 00:29:46
n number of LLMs using kind of the

00:29:43 --> 00:29:49
matrix model to show that like you just

00:29:45 --> 00:29:51
aren't gaining any information.

00:29:48 --> 00:29:53
Uh Yeah, entropy, yeah.

00:29:50 --> 00:29:55
Yeah, so so so you can represent the the

00:29:52 --> 00:29:56
sort of information contained in these

00:29:54 --> 00:29:59
models.

00:29:55 --> 00:30:01
And let's go back to that matrix analogy

00:29:58 --> 00:30:03
that have the matrix abstraction. So

00:30:00 --> 00:30:05
like I said, you know,

00:30:02 --> 00:30:09
the these models are

00:30:04 --> 00:30:09
uh represent a subset of the rows.

00:30:08 --> 00:30:12
Right? Yeah.

00:30:08 --> 00:30:16
>> So a subset of the rows are uh

00:30:11 --> 00:30:18
represented. But some of these rows

00:30:15 --> 00:30:22
are able to

00:30:17 --> 00:30:24
help fill out some of the missing rows.

00:30:21 --> 00:30:26
For instance, you know,

00:30:23 --> 00:30:28
uh if the model knows how to do

00:30:25 --> 00:30:29
multiplication doing the step-by-step,

00:30:27 --> 00:30:32
then every row that is corresponding to

00:30:29 --> 00:30:34
let's say 769 * 125 or whatever, all

00:30:31 --> 00:30:36
those multiplications

00:30:33 --> 00:30:39
it can fill out the answer because it

00:30:35 --> 00:30:40
has those algorithms sort of embedded in

00:30:38 --> 00:30:41
them. You just need to unroll them.

00:30:39 --> 00:30:44
Yeah.

00:30:40 --> 00:30:45
So it can sort of self-improve up to a

00:30:43 --> 00:30:48
point.

00:30:44 --> 00:30:49
But beyond that point, uh these models

00:30:47 --> 00:30:51
can only

00:30:48 --> 00:30:52
uh

00:30:50 --> 00:30:55
sort of generate what they've been

00:30:51 --> 00:30:58
trained on. So let me give you

00:30:54 --> 00:31:02
I'll give you three examples. Yeah.

00:30:57 --> 00:31:05
So any model any LLM that was uh

00:31:01 --> 00:31:07
trained on

00:31:04 --> 00:31:09
pre-1915 physics

00:31:06 --> 00:31:12
would never have come up with a theory

00:31:08 --> 00:31:14
of relativity.

00:31:11 --> 00:31:16
Einstein had to sort of reject the

00:31:13 --> 00:31:18
Newtonian physics and come up with the

00:31:15 --> 00:31:20
space-time continuum. He completely

00:31:17 --> 00:31:25
rewrote the rules, right?

00:31:19 --> 00:31:27
So that is an example of, you know, AGI.

00:31:24 --> 00:31:30
Where you are generating or generating

00:31:26 --> 00:31:32
new knowledge. It's not simply about the

00:31:29 --> 00:31:34
universe, right? It's not computing the

00:31:31 --> 00:31:35
universe. It's actually discovering

00:31:33 --> 00:31:37
something fundamental about the

00:31:34 --> 00:31:38
universe. Fundamental. And for that you

00:31:36 --> 00:31:40
have to go outside your training set.

00:31:37 --> 00:31:42
Similarly, you know, any any LLM that

00:31:39 --> 00:31:44
was trained on it would not have come up

00:31:41 --> 00:31:47
with quantum mechanics.

00:31:44 --> 00:31:49
Right? That that's wave-particle duality

00:31:46 --> 00:31:51
or this whole probabilistic notion or

00:31:48 --> 00:31:53
that, you know, energy is not continuous

00:31:50 --> 00:31:55
but it is quantized. You had to reject

00:31:52 --> 00:31:58
Newtonian physics. Yeah.

00:31:54 --> 00:32:01
Or Gödel's incompleteness theorem.

00:31:57 --> 00:32:03
Yeah. He had to go outside the axioms to

00:32:00 --> 00:32:06
say that, "Okay, it is incomplete." So

00:32:02 --> 00:32:08
those are examples where you're creating

00:32:05 --> 00:32:11
new science

00:32:07 --> 00:32:14
or fundamentally new results. That kind

00:32:10 --> 00:32:16
of self-improvement is not possible with

00:32:13 --> 00:32:18
ese architectures.

00:32:15 --> 00:32:20
They can refine these They can fill out

00:32:17 --> 00:32:22
hese rows. Yeah. Where the answer

00:32:19 --> 00:32:24
already exists. Another example, you

00:32:21 --> 00:32:27
know, which has received a lot of press

00:32:23 --> 00:32:29
these days is these IMO results,

00:32:26 --> 00:32:32
International Math Olympiad. Yeah. You

00:32:28 --> 00:32:35
know, whether it's a human solving it

00:32:31 --> 00:32:37
or the LLM solving it,

00:32:34 --> 00:32:38
they're not inventing new kinds of math.

00:32:36 --> 00:32:40
Yeah.

00:32:38 --> 00:32:43
They are

00:32:39 --> 00:32:45
able to connect known results in a

00:32:42 --> 00:32:47
sequence of steps

00:32:44 --> 00:32:49
to come up with the answer.

00:32:46 --> 00:32:51
Yeah. So even the LLMs, what they're

00:32:48 --> 00:32:53
doing is they are exploring all sorts of

00:32:50 --> 00:32:55
solutions.

00:32:52 --> 00:32:57
In some of these solutions, they they

00:32:54 --> 00:33:02
start going on this path where their

00:32:56 --> 00:33:03
next token entropy is low.

00:33:01 --> 00:33:05
So that's where where I say they they

00:33:02 --> 00:33:06
are in that Bayesian manifold.

00:33:04 --> 00:33:09
>> Yep. Yep. Yep. Where you have this

00:33:05 --> 00:33:12
entropy collapse. And by doing those

00:33:08 --> 00:33:14
steps, you arrive at the at the answer.

00:33:11 --> 00:33:16
But you're not inventing new math.

00:33:13 --> 00:33:18
You're not inventing new axioms or new

00:33:15 --> 00:33:19
branch branches of mathematics. Yeah.

00:33:17 --> 00:33:21
You're sort of

00:33:18 --> 00:33:24
using what you've been trained on to

00:33:20 --> 00:33:26
arrive at that answer. Yeah. So those

00:33:23 --> 00:33:29
things LLMs can do, you know, they'll

00:33:25 --> 00:33:31
get better at it of connecting the known

00:33:28 --> 00:33:34
dots. Yeah.

00:33:30 --> 00:33:36
But creating new dots, I think we need

00:33:33 --> 00:33:37
an architectural

00:33:35 --> 00:33:38
advance.

00:33:36 --> 00:33:40
Yeah.

00:33:37 --> 00:33:41
So Martin was talking earlier about how

00:33:39 --> 00:33:43
the discourse, you know, was was either

00:33:40 --> 00:33:45
a stochastic parrot stochastic parrots

00:33:42 --> 00:33:48
or, you know, AGI or because it's all

00:33:44 --> 00:33:51
new. How are you How do you conceive of

00:33:47 --> 00:33:53
sort of the AGI discourse or or or even

00:33:50 --> 00:33:55
the the the concept? What does it mean

00:33:52 --> 00:33:57
to the extent that it's it's useful? How

00:33:54 --> 00:33:58
do you think about that?

00:33:56 --> 00:34:00
So so

00:33:57 --> 00:34:01
the way, you know, I think about it, the

00:33:59 --> 00:34:03
way we try to formulate in our papers is

00:34:00 --> 00:34:05
it's it's beyond the stochastic parrot,

00:34:02 --> 00:34:08
but it's not AGI.

00:34:04 --> 00:34:09
It's doing Bayesian reasoning over what

00:34:07 --> 00:34:10
it has been trained on.

00:34:08 --> 00:34:13
So it's it's it's a lot more

00:34:09 --> 00:34:14
sophisticated than just a stochastic

00:34:12 --> 00:34:17
parrot.

00:34:13 --> 00:34:19
How do you define AGI?

00:34:16 --> 00:34:23
Okay, so AGI,

00:34:18 --> 00:34:26
uh so how do I define AGI? So

00:34:22 --> 00:34:26
the way I would say that

00:34:26 --> 00:34:31
LLMs currently

00:34:27 --> 00:34:32
navigate through this known Bayesian

00:34:30 --> 00:34:36
manifold,

00:34:31 --> 00:34:38
AGI will create new manifolds.

00:34:35 --> 00:34:40
So right now these models navigate, they

00:34:37 --> 00:34:43
do not create.

00:34:39 --> 00:34:46
AGI will be when we are able to create

00:34:42 --> 00:34:47
new science, new results, new math.

00:34:45 --> 00:34:49
When an AGI comes up with a theory of

00:34:47 --> 00:34:50
relativity, I mean, it's it's it's an

00:34:48 --> 00:34:51
extremely high bar, but you get what I'm

00:34:49 --> 00:34:53
saying.

00:34:50 --> 00:34:54
It has to go beyond what it has been

00:34:52 --> 00:34:56
trained on

00:34:53 --> 00:34:57
to come up with

00:34:55 --> 00:35:00
uh

00:34:56 --> 00:35:03
new paradigms, new science, and

00:34:59 --> 00:35:05
that's that's my definition of AGI.

00:35:02 --> 00:35:07
Vishal, can you Do you think that based

00:35:04 --> 00:35:11
on the work you've done, can you bound

00:35:06 --> 00:35:13
the amount of data, computer, or

00:35:10 --> 00:35:17
data or compute that would be needed in

00:35:12 --> 00:35:19
order for it to to evolve? So so So what

00:35:16 --> 00:35:21
are the problems

00:35:18 --> 00:35:23
if if you just take LLMs as they exist?

00:35:20 --> 00:35:24
Is it There is so much data used to

00:35:22 --> 00:35:27
create them.

00:35:23 --> 00:35:29
To create a new manifold will need a lot

00:35:26 --> 00:35:30
more data just because of the basic

00:35:28 --> 00:35:32
mechanisms, right? Otherwise, it'll just

00:35:29 --> 00:35:34
kind of like, you know, get kind of

00:35:31 --> 00:35:38
consumed into the existing set of data.

00:35:33 --> 00:35:40
Like Have you found any bounds of of

00:35:37 --> 00:35:42
what would be needed to actually

00:35:39 --> 00:35:43
evolve the manifold in a useful way or

00:35:41 --> 00:35:45
do you think we just need a new

00:35:42 --> 00:35:47
architecture?

00:35:44 --> 00:35:49
I personally

00:35:46 --> 00:35:51
think that we need a new architecture.

00:35:48 --> 00:35:53
The more data that we have, the more

00:35:50 --> 00:35:55
compute we have, we'll get maybe

00:35:52 --> 00:35:57
smoother manifolds. So it's like a map.

00:35:54 --> 00:35:58
Yeah, cuz cuz I mean there's there's

00:35:56 --> 00:36:00
this view that people have.

00:35:57 --> 00:36:01
They're like, "Well,

00:35:59 --> 00:36:03
Vishal, this is all this is all this is

00:36:00 --> 00:36:05
all, you know, good and well, but, you

00:36:02 --> 00:36:07
know, I could just take an LLM and I can

00:36:04 --> 00:36:08
give it eyes and I can give it ears and

00:36:06 --> 00:36:10
I can put it in the world and it'll gain

00:36:08 --> 00:36:13
formation and based on that

00:36:09 --> 00:36:15
information, it'll improve itself.

00:36:12 --> 00:36:17
Um and therefore it can learn new

00:36:14 --> 00:36:19
things, but the counterpoint that I've

00:36:16 --> 00:36:20
always just intuitively thought to that

00:36:18 --> 00:36:21
is

00:36:19 --> 00:36:24
the amount of data used to train these

00:36:20 --> 00:36:26
things is so large. How much can you

00:36:23 --> 00:36:28
actually evolve that manifold given an

00:36:25 --> 00:36:31
incremental I mean, it's almost none at

00:36:27 --> 00:36:33
all, right? There has to be some other

00:36:30 --> 00:36:36
way to generate new manifolds that

00:36:32 --> 00:36:38
aren't evolving the existing one.

00:36:35 --> 00:36:41
I I completely agree. There has to be a

00:36:37 --> 00:36:42
new sort of architectural leap that is

00:36:40 --> 00:36:44
needed

00:36:41 --> 00:36:47
to go from the current, you know, just

00:36:43 --> 00:36:48
hrowing more data and more compute. You

00:36:46 --> 00:36:51
know, it's going to plateau. It's it's,

00:36:47 --> 00:36:52
you know, the iPhone 15, 16, 17.

00:36:50 --> 00:36:54
And are are there any research

00:36:51 --> 00:36:56
directions that are promising in in your

00:36:53 --> 00:36:59
mind that might help us, you know, go

00:36:55 --> 00:37:01
beyond LLM limitations?

00:36:58 --> 00:37:05
But so so I mean uh

00:37:01 --> 00:37:06
again, I love LLMs. They are fantastic.

00:37:04 --> 00:37:08
And they are going to increase

00:37:05 --> 00:37:10
productivity like nobody's business. But

00:37:07 --> 00:37:13
I don't think they are the answer.

00:37:09 --> 00:37:16
So, you know, Yann LeCun famously says

00:37:12 --> 00:37:17
that uh LLMs are a distraction on the

00:37:15 --> 00:37:19
road to AGI.

00:37:16 --> 00:37:23
>> end. They're dead end to AGI. I don't

00:37:18 --> 00:37:26
hink I'm not quite in that camp, but I

00:37:22 --> 00:37:29
think we need a new

00:37:25 --> 00:37:32
architecture to sit on top of LLMs

00:37:28 --> 00:37:33
to reach AGI. You know, a very basic

00:37:31 --> 00:37:34
thing, you know, what Martin just said,

00:37:32 --> 00:37:35
you know, you give them eyes and you

00:37:33 --> 00:37:36
give them ears, you make them

00:37:34 --> 00:37:38
ultimodal, they of course they'll

00:37:35 --> 00:37:40
become more powerful. But you need a

00:37:37 --> 00:37:41
little bit more than that.

00:37:39 --> 00:37:44
You know, the the way human brains

00:37:40 --> 00:37:46
learns with with very few examples,

00:37:43 --> 00:37:47
that's not the way transformers learn.

00:37:45 --> 00:37:49
Yeah.

00:37:46 --> 00:37:50
Uh and

00:37:48 --> 00:37:52
you know,

00:37:49 --> 00:37:54
I'm not saying that we need to create an

00:37:51 --> 00:37:56
Einstein or a Gödel, but

00:37:53 --> 00:37:59
here has to be an architectural leap

00:37:55 --> 00:38:00
that is able to create these manifolds.

00:37:58 --> 00:38:02
And just throwing new data will not do

00:37:59 --> 00:38:04
it. It'll just smoothen out the already

00:38:01 --> 00:38:06
existing manifolds.

00:38:03 --> 00:38:08
Is that something So is is your goal to

00:38:05 --> 00:38:10
actually help

00:38:07 --> 00:38:12
like think through new architectures or

00:38:09 --> 00:38:16
are you primarily focused on putting

00:38:11 --> 00:38:18
formal bounds on existing architectures?

00:38:15 --> 00:38:21
A bit of both. I mean, the the former

00:38:17 --> 00:38:23
goal is the more ambitious one that uh

00:38:20 --> 00:38:25
everybody is chasing. And yeah, I I

00:38:22 --> 00:38:28
think about that constantly.

00:38:24 --> 00:38:30
Are are there any new even like uh sort

00:38:27 --> 00:38:32
of hints at a new architect or like have

00:38:29 --> 00:38:34
we started to make any progress on on on

00:38:31 --> 00:38:37
ew architectures?

00:38:33 --> 00:38:39
Or is it

00:38:36 --> 00:38:39
Uh

00:38:40 --> 00:38:45
You you you know, um

00:38:42 --> 00:38:47
Yann has been pushing at this Jepa

00:38:44 --> 00:38:49
rchitecture. Yeah. Uh energy-based

00:38:46 --> 00:38:53
architectures, uh they they seem

00:38:48 --> 00:38:57
promising. The the way I have been sort

00:38:52 --> 00:38:57
of thinking about it is

00:38:57 --> 00:39:01
you know, you there's this

00:38:59 --> 00:39:04
uh set of

00:39:00 --> 00:39:07
a benchmark or the ARC prize. Yeah.

00:39:03 --> 00:39:10
Right? That Mark Mike Canoop and

00:39:06 --> 00:39:13
Francois Chollet have have And

00:39:09 --> 00:39:15
if you understand why the LLMs are

00:39:12 --> 00:39:18
failing on this test, maybe you can sort

00:39:14 --> 00:39:20
of reverse engineer a new architecture

00:39:17 --> 00:39:21
that'll help you

00:39:19 --> 00:39:24
h

00:39:20 --> 00:39:27
succeed in that, right? Uh and

00:39:23 --> 00:39:29
I agree with a a lot of what several

00:39:27 --> 00:39:31
people say that, you know,

00:39:28 --> 00:39:34
language is great, but language is not

00:39:30 --> 00:39:37
he answer. You know, when I'm looking

00:39:33 --> 00:39:39
at catching a ball that is coming to me,

00:39:36 --> 00:39:40
I'm mentally doing that simulation in my

00:39:38 --> 00:39:42
head.

00:39:39 --> 00:39:44
I'm not translating it to language to

00:39:41 --> 00:39:46
figure out where it will land. I do that

00:39:44 --> 00:39:47
simulation in my head.

00:39:45 --> 00:39:49
So

00:39:46 --> 00:39:52
where you know one of the new

00:39:48 --> 00:39:54
architectures architectural things is

00:39:51 --> 00:39:57
how do we do how do we get these models

00:39:53 --> 00:39:59
to do approximate simulations?

00:39:56 --> 00:40:01
To test out that idea and whether to

00:39:58 --> 00:40:02
proceed

00:40:00 --> 00:40:04
or not.

00:40:01 --> 00:40:06
So

00:40:03 --> 00:40:08
so yeah, we have you know

00:40:05 --> 00:40:09
another thing that I've always wondered

00:40:07 --> 00:40:12
about is

00:40:08 --> 00:40:15
did we develop as humans did we develop

00:40:11 --> 00:40:18
language because we were intelligent

00:40:14 --> 00:40:20
or because we developed language we

00:40:17 --> 00:40:23
accelerated our intelligence?

00:40:19 --> 00:40:24
So I I don't know which side of the camp

00:40:22 --> 00:40:25
you fall on that question.

00:40:23 --> 00:40:27
>> mean

00:40:24 --> 00:40:31
what's interesting is like you have

00:40:26 --> 00:40:33
these anecdotal examples of

00:40:30 --> 00:40:34
humans developing languages de novo that

00:40:32 --> 00:40:36
have been recorded, right? Like it's

00:40:33 --> 00:40:38
either what the watermelon or

00:40:35 --> 00:40:40
Nicaraguan sign language, right? Where

00:40:37 --> 00:40:43
there is these students that develop

00:40:39 --> 00:40:45
their own language without being taught

00:40:42 --> 00:40:47
and so that would suggest that language

00:40:44 --> 00:40:49
is follows intelligence.

00:40:46 --> 00:40:50
The problem is is they're all anecdotal,

00:40:48 --> 00:40:52
right? Like who knows if somebody didn't

00:40:50 --> 00:40:54
each them sign language? Like nobody

00:40:51 --> 00:40:56
really knows there is no controls. So

00:40:53 --> 00:40:59
this is all these observational studies

00:40:55 --> 00:41:01
and there's so few of them you have to

00:40:58 --> 00:41:03
wonder if it's just kind of sloppy

00:41:00 --> 00:41:05
observation. And so I think that the

00:41:02 --> 00:41:06
question is still outstanding.

00:41:04 --> 00:41:09
Yeah.

00:41:05 --> 00:41:09
So

00:41:08 --> 00:41:13
I mean language definitely accelerated

00:41:11 --> 00:41:15
our intelligence. There's no question

00:41:12 --> 00:41:16
about that. Yeah. But which followed

00:41:14 --> 00:41:18
which we don't know.

00:41:15 --> 00:41:20
I view it as I view it as a I view it as

00:41:17 --> 00:41:21
a networking problem naturally which is

00:41:19 --> 00:41:23
once you have languages you can

00:41:20 --> 00:41:25
communicate. You can communicate you can

00:41:22 --> 00:41:28
store you can replicate, yeah. Yeah

00:41:24 --> 00:41:30
yeah. Exactly exactly, right. Cool. Um

00:41:27 --> 00:41:33
again this is kind of a wonky question

00:41:29 --> 00:41:34
but um Yeah. Uh

00:41:32 --> 00:41:35
you know what I think one thing that

00:41:33 --> 00:41:36
you've brought to the discourse and for

00:41:34 --> 00:41:37
those that are listening to this I

00:41:35 --> 00:41:39
really think that you should look up

00:41:36 --> 00:41:40
Vishal's work and read it. I just think

00:41:38 --> 00:41:41
it'll give you a really really

00:41:39 --> 00:41:43
especially if you have a systems

00:41:40 --> 00:41:43
background like a networking or systems

00:41:42 --> 00:41:45
background. It'll give you a really

00:41:42 --> 00:41:48
good understanding of kind of the

00:41:44 --> 00:41:51
bounds on these. Um but like the toolkit

00:41:47 --> 00:41:55
hat you draw from is like information

00:41:50 --> 00:41:58
theory and like more formal

00:41:54 --> 00:42:00
have you found that the AI community is

00:41:57 --> 00:42:02
receptive to this or is it like

00:42:00 --> 00:42:04
two different cultures two different

00:42:01 --> 00:42:06
planets trying to communicate and not a

00:42:03 --> 00:42:08
lot of common ground? Like how have you

00:42:05 --> 00:42:12
found like bringing like the networking

00:42:07 --> 00:42:15
view of the world to the AI realm? Some

00:42:11 --> 00:42:17
of them are receptive to it definitely.

00:42:14 --> 00:42:17
But

00:42:17 --> 00:42:22
you know uh

00:42:19 --> 00:42:25
these large conferences at the reviewing

00:42:21 --> 00:42:27
process it's so random and the kind of

00:42:24 --> 00:42:30
questions they ask you know I'm a

00:42:26 --> 00:42:32
modeling person. I like to model things.

00:42:29 --> 00:42:34
And you know I submitted one version of

00:42:31 --> 00:42:37
this work to

00:42:33 --> 00:42:39
ne very famous uh

00:42:36 --> 00:42:41
machine learning or AI conference and

00:42:38 --> 00:42:43
the reviewer said okay this is a model

00:42:40 --> 00:42:43
so what?

00:42:45 --> 00:42:50
So

00:42:47 --> 00:42:50
there is uh

00:42:50 --> 00:42:54
That's absolutely remarkable. So like

00:42:52 --> 00:42:56
you you've actually taken a system that

00:42:53 --> 00:42:58
nobody understands. We have no models

00:42:55 --> 00:43:00
for. You actually provided some model

00:42:57 --> 00:43:01
that we can use to analyze it and uh

00:42:59 --> 00:43:03
that alone wasn't sufficient.

00:43:01 --> 00:43:07
>> They ask and so where are the large

00:43:02 --> 00:43:09
scale experiments to to prove this? I do

00:43:06 --> 00:43:11
listen I I honestly I mean I I find

00:43:08 --> 00:43:13
there's so much empiricism in like the

00:43:10 --> 00:43:15
the current

00:43:12 --> 00:43:17
you know AI community exactly cuz we

00:43:14 --> 00:43:20
don't understand the systems. You know

00:43:16 --> 00:43:21
it kind of reminds me I I I feel like

00:43:19 --> 00:43:23
systems went the other way,

00:43:20 --> 00:43:24
right? It's like we had all of these

00:43:22 --> 00:43:26
models but then we didn't understand how

00:43:23 --> 00:43:28
the systems worked and then we just like

00:43:25 --> 00:43:30
actually did measurement. It feels like

00:43:27 --> 00:43:31
ML and or the AI stuff is the opposite

00:43:29 --> 00:43:33
which is like we know we don't

00:43:30 --> 00:43:34
understand them and so we just measure

00:43:32 --> 00:43:37
them but now we're trying to like come

00:43:33 --> 00:43:40
up with the models.

00:43:36 --> 00:43:43
Yeah exactly. So it was so easy in some

00:43:39 --> 00:43:45
sense to build these uh artifacts and

00:43:42 --> 00:43:47
then just measure them that people have

00:43:44 --> 00:43:50
been going around

00:43:46 --> 00:43:52
trying to do that and

00:43:49 --> 00:43:54
you know one time I really dislike is

00:43:51 --> 00:43:55
prompt engineering.

00:43:54 --> 00:43:57
Why?

00:43:54 --> 00:43:59
>> You know engineering used to mean

00:43:56 --> 00:44:01
sending a man to the moon or providing

00:43:58 --> 00:44:04
five nines reliability.

00:44:01 --> 00:44:06
Prompt engineering is prompt twiddling.

00:44:03 --> 00:44:09
Yeah. You you fiddle with a prompt and

00:44:05 --> 00:44:11
the model changes and the the inference

00:44:08 --> 00:44:14
the output changes and you know you have

00:44:10 --> 00:44:17
like hundreds of papers just

00:44:13 --> 00:44:18
you know doing one experiment the

00:44:16 --> 00:44:21
other changing a prompt this way that

00:44:17 --> 00:44:23
way and writing their observations.

00:44:20 --> 00:44:25
And as a result you know lots of these

00:44:22 --> 00:44:27
papers are being written are being

00:44:24 --> 00:44:29
submitted for review reviewers get busy

00:44:26 --> 00:44:30
looking at all this kind of empirical

00:44:28 --> 00:44:33
work.

00:44:30 --> 00:44:37
And my personal taste is

00:44:32 --> 00:44:38
to first try to understand model it.

00:44:36 --> 00:44:40
Yeah.

00:44:37 --> 00:44:43
And then you can do the other things.

00:44:39 --> 00:44:45
>> so like I'm a theory guy.

00:44:42 --> 00:44:47
I don't know about this bit twiddling

00:44:44 --> 00:44:48
like

00:44:46 --> 00:44:51
Let me ask one more LLM question which

00:44:47 --> 00:44:53
is Yeah. are there any benchmarks or

00:44:50 --> 00:44:55
eal world tasks that if they if they

00:44:52 --> 00:44:58
occurred you'd sort of re-evaluate and

00:44:54 --> 00:45:01
say hey maybe LLMs are you know closer

00:44:57 --> 00:45:01
to the path to AGI than than I thought.

00:45:01 --> 00:45:07
If there were any real world tasks.

00:45:11 --> 00:45:15
Good question.

00:45:18 --> 00:45:23
You know which uh

00:45:20 --> 00:45:25
for

00:45:22 --> 00:45:29
LLMs

00:45:24 --> 00:45:31
uh all these models the one

00:45:28 --> 00:45:34
domain where you have the most training

00:45:30 --> 00:45:39
data is probably coding.

00:45:33 --> 00:45:39
And coding is where

00:45:39 --> 00:45:44
you can also have the most structure.

00:45:42 --> 00:45:46
And yet

00:45:43 --> 00:45:48
anyone who's used

00:45:45 --> 00:45:51
these tools whether it's cursor or

00:45:47 --> 00:45:54
whatever cloud code

00:45:50 --> 00:45:57
LLMs continue to hallucinate continue to

00:45:53 --> 00:45:59
generate unreasonable code. You know you

00:45:56 --> 00:46:02
have to

00:45:58 --> 00:46:05
you have to constantly uh

00:46:01 --> 00:46:08
babysit these models.

00:46:04 --> 00:46:12
So the day an LLM can create a large

00:46:07 --> 00:46:12
software project without any

00:46:11 --> 00:46:15
babysitting

00:46:13 --> 00:46:17
is the day I'll be a little bit

00:46:14 --> 00:46:20
convinced that it's

00:46:16 --> 00:46:23
towards AGI. But again

00:46:19 --> 00:46:25
I don't think uh it'll be able to create

00:46:22 --> 00:46:26
new science. If it does

00:46:24 --> 00:46:28
that's when I'll be convinced. I you

00:46:25 --> 00:46:29
know I think that you can almost take a

00:46:27 --> 00:46:31
definitional approach to answer this

00:46:28 --> 00:46:33
question Vishal like the problem with

00:46:30 --> 00:46:35
ese types of questions is is if you

00:46:32 --> 00:46:36
have billions of dollars and you can

00:46:34 --> 00:46:38
collect whatever data you want you can

00:46:35 --> 00:46:39
make a model do anything you want,

00:46:37 --> 00:46:40
right? And so like

00:46:38 --> 00:46:43
you know what I'm saying like it's it's

00:46:39 --> 00:46:45
some level you've got this

00:46:42 --> 00:46:48
entire capital

00:46:44 --> 00:46:49
structure machinery behind these models.

00:46:47 --> 00:46:50
So you're like oh it can be good at

00:46:48 --> 00:46:52
science. Well sure you put a billion

00:46:49 --> 00:46:53
dollars to solving materials science and

00:46:51 --> 00:46:55
collect all this data you'll be good at

00:46:52 --> 00:46:57
material science or or whatever it is.

00:46:54 --> 00:47:00
And so but there is a definitional

00:46:56 --> 00:47:01
answer which is

00:46:59 --> 00:47:03
and and and and I'm going to draw from

00:47:00 --> 00:47:05
your work which is there is a manifold

00:47:02 --> 00:47:07
that's in there based on the data it's

00:47:04 --> 00:47:09
been training on and then the question

00:47:06 --> 00:47:12
is is if it ever produces something

00:47:08 --> 00:47:13
that's off like a new manifold

00:47:11 --> 00:47:15
so considering the existing training

00:47:12 --> 00:47:16
data if it ever does that. If it does

00:47:14 --> 00:47:19
omething that's outside of that

00:47:15 --> 00:47:21
distribution then clearly we're on a

00:47:18 --> 00:47:22
path to to learning new things and if

00:47:20 --> 00:47:24
not then everything is just a

00:47:21 --> 00:47:25
computational step from what's already

00:47:23 --> 00:47:27
known.

00:47:24 --> 00:47:28
Yeah so so I mean And then I guess I

00:47:26 --> 00:47:31
guess the counter I guess the counter to

00:47:27 --> 00:47:34
that would be maybe all humans do is

00:47:30 --> 00:47:36
work on their own manifold and Einstein

00:47:33 --> 00:47:37
uh you know

00:47:35 --> 00:47:39
as lucky or something I guess would be

00:47:36 --> 00:47:40
the counter to that but I I just don't

00:47:38 --> 00:47:42
know.

00:47:39 --> 00:47:44
>> you know that's several

00:47:41 --> 00:47:45
many unseen examples and yeah it's

00:47:43 --> 00:47:47
creating this new manifold. I didn't

00:47:44 --> 00:47:49
want to use that definitional answer. I

00:47:46 --> 00:47:50
thought it might sound too

00:47:48 --> 00:47:52
Yeah.

00:47:49 --> 00:47:55
too wonky too mathematical.

00:47:51 --> 00:47:58
But essentially

00:47:54 --> 00:48:00
if LLMs really created this new manifold

00:47:57 --> 00:48:03
then I would be convinced.

00:47:59 --> 00:48:04
But so far they have just gotten better

00:48:02 --> 00:48:06
at navigating the existing manifold the

00:48:04 --> 00:48:07
xisting training set. Which is hugely

00:48:05 --> 00:48:08
powerful and it's going to change the

00:48:06 --> 00:48:10
world.

00:48:07 --> 00:48:12
>> hugely I'm not denying that. I think

00:48:09 --> 00:48:14
they are extremely extremely good Yeah.

00:48:11 --> 00:48:15
at what they can do. But there's a limit

00:48:13 --> 00:48:16
o what they can do.

00:48:14 --> 00:48:18
So I have one quick question. What's

00:48:15 --> 00:48:19
next for you? I mean you've uh you

00:48:17 --> 00:48:21
've you've tackled in context

00:48:18 --> 00:48:22
learning. You've got a model for LLMs

00:48:20 --> 00:48:24
and then you've got a generalized model

00:48:21 --> 00:48:27
for like you know like their solution

00:48:23 --> 00:48:29
space. What are you thinking about

00:48:26 --> 00:48:30
ackling next?

00:48:28 --> 00:48:32
Yeah in terms of

00:48:29 --> 00:48:34
uh modeling or

00:48:31 --> 00:48:35
Academically

00:48:33 --> 00:48:40
an LLM

00:48:34 --> 00:48:40
>> Academically yeah I academically I'm uh

00:48:39 --> 00:48:44
you know I'm I'm thinking of this

00:48:41 --> 00:48:46
what is the architectural leap that is

00:48:43 --> 00:48:47
needed Oh that's exciting. to create

00:48:45 --> 00:48:50
this

00:48:46 --> 00:48:52
new manifold and how do we use you know

00:48:49 --> 00:48:55
multimodal data?

00:48:51 --> 00:48:58
Awesome. to to expand the realm of

00:48:54 --> 00:49:00
science and talk to us. That's right.

00:48:57 --> 00:49:02
We'd love that. So I mean

00:48:59 --> 00:49:04
you know even with

00:49:01 --> 00:49:04
LLMs you know the in the paper we say

00:49:03 --> 00:49:08
that

00:49:04 --> 00:49:10
you can improve uh the inference

00:49:07 --> 00:49:13
by following this

00:49:09 --> 00:49:15
low or minimum entropy path.

00:49:12 --> 00:49:17
So so that's a very sort of small step

00:49:14 --> 00:49:18
that we are taking you know

00:49:16 --> 00:49:21
e are building and trading models that

00:49:17 --> 00:49:23
will do inference based on

00:49:20 --> 00:49:24
the entropic path.

00:49:22 --> 00:49:27
Yeah.

00:49:23 --> 00:49:28
By the way is is model probe still up?

00:49:26 --> 00:49:31
Token probe yeah yeah token probe is

00:49:27 --> 00:49:32
till up and and you can see actually

00:49:30 --> 00:49:33
the you know

00:49:31 --> 00:49:35
token probe is

00:49:33 --> 00:49:38
oftware that we built and thanks to

00:49:34 --> 00:49:41
Martin and A16Z's generosity it's

00:49:37 --> 00:49:43
running on your servers and anyone can

00:49:40 --> 00:49:47
go and test. And what we have done there

00:49:42 --> 00:49:49
is we actually show the entropy. Yeah.

00:49:46 --> 00:49:50
It is so inviting. I recommend anybody

00:49:48 --> 00:49:51
listening to this who's interested

00:49:49 --> 00:49:54
actually check out Token Prop. It

00:49:50 --> 00:49:55
literally shows you the

00:49:53 --> 00:49:57
Yeah, as you go along. It's it's

00:49:54 --> 00:49:58
remarkable. You know, so in context

00:49:56 --> 00:50:01
learning, you know, you create your new

00:49:57 --> 00:50:02
DSL and you give it to the prompt

00:50:00 --> 00:50:04
and you can see

00:50:01 --> 00:50:07
the confidence rising with each new

00:50:03 --> 00:50:10
example, the entropy reducing. And that

00:50:06 --> 00:50:11
sort of is a validation of the model.

00:50:09 --> 00:50:13
You can see it

00:50:10 --> 00:50:15
sort of unfolding in right in front of

00:50:12 --> 00:50:17
your eyes. The Token Prop is here. All

00:50:14 --> 00:50:18
right, thanks. Thanks again.

00:50:16 --> 00:50:20
Uh Vishal, thanks so much for coming to

00:50:17 --> 00:50:21
the podcast. It's a great conversation.

00:50:19 --> 00:50:23
We appreciate it. Thanks for It was

00:50:20 --> 00:50:23
great fun. Thank you. Thank you so much

00:50:22 --> 00:50:26
again.

00:50:22 --> 00:50:26
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
