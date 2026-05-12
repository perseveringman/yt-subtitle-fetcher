---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "0_NGsljlo3o"
title: "How Bots, Deepfakes and AI Agents Are Forcing a New Internet Identity Layer | Alex Blania on a16z"
video_url: "https://www.youtube.com/watch?v=0_NGsljlo3o"
thumbnail_url: "https://i.ytimg.com/vi/0_NGsljlo3o/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=0_NGsljlo3o"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2026-04-02T16:26:55.000Z"
upload_date: "2026-04-02"
duration_seconds: 2531
duration_human: "42:11"
view_count: 29593
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:18:54.809Z"
---

# How Bots, Deepfakes and AI Agents Are Forcing a New Internet Identity Layer | Alex Blania on a16z

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=0_NGsljlo3o
- video_id: 0_NGsljlo3o
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2026-04-02T16:26:55.000Z
- upload_date: 2026-04-02
- duration: 42:11
- view_count: 29593
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

a16z's Ben Horowitz and Erik Torenberg speak with Alex Blania, cofounder and CEO of Tools for Humanity, World, and cofounder of Merge Labs. World is building the largest real human network, a proof-of-human layer for the AI era. They cover the technical challenge of proving human uniqueness at scale using iris biometrics, the privacy architecture behind World ID, and why platforms from social networks to dating apps to video conferencing will soon require proof of human verification.

Timestamps:
0:00—Introduction
4:07—Three Big Ideas People Were Interested In
9:05—The Orb Verification Piece
15:21—Social Media Bots: PSYOPs and Propaganda
29:21—We Had Proof of Personhood for the Longest Time
36:44—Next Year Go-to-Market Is Focused on the US
40:09—Different Levels of Verification

Read the full transcript here: https://www.a16z.news/s/podcast

Resources:
Follow Alex Blania on X: https://twitter.com/alexblania 
Follow Ben Horowitz on X: https://twitter.com/bhorowitz 
Follow Erik Torenberg on X: https://twitter.com/eriktorenberg 

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

00:00:00 --> 00:00:05
How do you prove somebody's human? It is

00:00:02 --> 00:00:07
a surprisingly hard problem. I think

00:00:04 --> 00:00:09
that people are going to start getting

00:00:06 --> 00:00:11
accused of being bots. What we currently

00:00:08 --> 00:00:12
see is less than 1% of what it will look

00:00:10 --> 00:00:16
like in probably [music] a year or two.

00:00:11 --> 00:00:18
>> The idea that AGI will lead to some very

00:00:15 --> 00:00:18
fundamental shift seems obvious. [music]

00:00:17 --> 00:00:20
Like

00:00:17 --> 00:00:22
>> AI's are really good at programming

00:00:19 --> 00:00:23
humans. Much better than humans are at

00:00:21 --> 00:00:23
programming AI's.

00:00:22 --> 00:00:24
>> Absolutely.

00:00:22 --> 00:00:26
>> AI [snorts] will be able to have a

00:00:23 --> 00:00:28
GitHub account and will be able to post

00:00:25 --> 00:00:30
and also attest to five other AI's that

00:00:27 --> 00:00:31
hese are in fact humans and even though

00:00:29 --> 00:00:34
they're not. I see if you don't take it

00:00:31 --> 00:00:34
serious now.

00:00:38 --> 00:00:42
Alex, welcome to the podcast. Great to

00:00:40 --> 00:00:44
have you. Thanks for having me.

00:00:41 --> 00:00:46
So, proof of human is having a moment

00:00:43 --> 00:00:47
right now. Won't you first give a

00:00:45 --> 00:00:49
background for people who are

00:00:46 --> 00:00:50
unfamiliar?

00:00:48 --> 00:00:52
What is the moment that's happening and

00:00:49 --> 00:00:54
how did we get here? Yeah, and what is

00:00:51 --> 00:00:57
proof proof of human? Proof of human, as

00:00:54 --> 00:01:00
the name suggests, is you know, do you

00:00:56 --> 00:01:02
know if you interact with a human or

00:00:59 --> 00:01:03
like something else on the internet? And

00:01:01 --> 00:01:05
I actually think that the the kinds of

00:01:02 --> 00:01:06
questions that we're now asking is, are

00:01:04 --> 00:01:07
you interacting interacting with a

00:01:05 --> 00:01:10
human,

00:01:07 --> 00:01:12
uh an agent on behalf of a human,

00:01:09 --> 00:01:14
or just an agent? Like I think these are

00:01:11 --> 00:01:17
like roughly the three the three areas

00:01:13 --> 00:01:18
that we want to split apart.

00:01:16 --> 00:01:20
Well, and and describe a little bit the

00:01:17 --> 00:01:23
difference between just an agent and an

00:01:19 --> 00:01:26
agent acting on behalf of a human. How

00:01:22 --> 00:01:28
do you see that distinction? Yeah, so um

00:01:25 --> 00:01:30
quickly explaining just the term proof

00:01:28 --> 00:01:32
human and I think what is hard about

00:01:29 --> 00:01:34
it and then I'll I'll explain how that

00:01:31 --> 00:01:35
fits into into an agent on behalf of a

00:01:33 --> 00:01:36
human. So,

00:01:34 --> 00:01:39
um

00:01:35 --> 00:01:41
what proof of human really means is that

00:01:38 --> 00:01:44
uh you know, every individual that

00:01:40 --> 00:01:46
interacts on a platform has only one,

00:01:43 --> 00:01:47
ideally one account or you know, a

00:01:45 --> 00:01:50
limited number of accounts

00:01:46 --> 00:01:51
and stays the owner of that account.

00:01:49 --> 00:01:52
Like that that's that's kind of the

00:01:50 --> 00:01:54
property that you're looking for. So,

00:01:51 --> 00:01:57
like you're looking for a uh initial

00:01:53 --> 00:01:59
verification uh that ideally should be,

00:01:56 --> 00:02:01
you know, something like anonymous or

00:01:58 --> 00:02:04
very extremely privacy preserving and

00:02:00 --> 00:02:05
then ongoing authentication that the

00:02:03 --> 00:02:07
same person remains in control of their

00:02:04 --> 00:02:08
account. Um and then there was like some

00:02:06 --> 00:02:10
secondary properties that I think are

00:02:07 --> 00:02:12
good to have. But that actually tells

00:02:09 --> 00:02:15
you that the really hard thing is

00:02:11 --> 00:02:17
uniqueness. Like like what what is

00:02:14 --> 00:02:18
happening on a platform like Twitter

00:02:16 --> 00:02:20
ight now is that there's all these

00:02:17 --> 00:02:23
accounts, you know, all these all these

00:02:19 --> 00:02:24
bots that are in the replies um that,

00:02:22 --> 00:02:26
you know, there's probably one human

00:02:23 --> 00:02:30
sitting somewhere and and sending out

00:02:25 --> 00:02:33
10,000 or like 100,000 of AI's. And

00:02:29 --> 00:02:36
there's this catch-up game where like uh

00:02:32 --> 00:02:37
you know, Twitter and X are trying to

00:02:35 --> 00:02:40
just find them and block probably

00:02:37 --> 00:02:44
millions a day of these. Which is what

00:02:39 --> 00:02:46
like uh a 100th of the of the bots. That

00:02:43 --> 00:02:48
hat's right. That's how it feels like.

00:02:45 --> 00:02:50
Um and then agent on behalf of human, I

00:02:47 --> 00:02:52
think like

00:02:49 --> 00:02:54
how that will look like is

00:02:51 --> 00:02:56
uh you know, I as a like I think all of

00:02:53 --> 00:02:57
us will have agents.

00:02:55 --> 00:02:59
It's unclear how that will look like. Is

00:02:56 --> 00:03:01
it's going to be one or there multiple

00:02:58 --> 00:03:03
ones, maybe with different tasks and

00:03:00 --> 00:03:07
ifferent even even types of characters.

00:03:02 --> 00:03:09
Um and I think it will then come down to

00:03:06 --> 00:03:11
I, you know, I approve a certain action

00:03:08 --> 00:03:14
of my agent. I give him certain rights.

00:03:10 --> 00:03:16
So, like So, act on my behalf. Okay. The

00:03:13 --> 00:03:17
post post to my X account, post to my

00:03:15 --> 00:03:20
Instagram. For example.

00:03:17 --> 00:03:22
>> But it's my Instagram and I'm a unique

00:03:19 --> 00:03:24
human that owns that. That's right. You

00:03:21 --> 00:03:26
know, that X or Instagram could

00:03:23 --> 00:03:27
decide that if that's actually

00:03:25 --> 00:03:29
something they want as a platform.

00:03:26 --> 00:03:30
>> Right. Uh but that's how you could do

00:03:28 --> 00:03:33
it.

00:03:29 --> 00:03:34
That makes sense. Um and so

00:03:32 --> 00:03:35
>> [sighs]

00:03:33 --> 00:03:36
>> how do you

00:03:34 --> 00:03:38
>> [laughter]

00:03:35 --> 00:03:41
>> how do you prove somebody's human? It is

00:03:37 --> 00:03:42
it is a surprisingly hard problem. Yeah.

00:03:40 --> 00:03:45
So, you know, it's

00:03:41 --> 00:03:47
>> those agents are very very clever.

00:03:44 --> 00:03:49
It's uh you know, it's funny. We started

00:03:46 --> 00:03:52
this company now a couple of years ago,

00:03:48 --> 00:03:53
way before ChatGPT and before all of

00:03:51 --> 00:03:55
that. But we we kind of took that as an

00:03:52 --> 00:03:58
assumption that eventually we will have

00:03:54 --> 00:04:00
AI's that, you know, both pass the

00:03:57 --> 00:04:01
Turing test, so they can just claim to

00:03:59 --> 00:04:03
be a human and you will not be able to

00:04:00 --> 00:04:05
tell them anymore on the internet.

00:04:02 --> 00:04:07
And also that they would be, you know,

00:04:04 --> 00:04:09
highly agentic and just like run around

00:04:06 --> 00:04:11
and do their own thing. And so that

00:04:08 --> 00:04:13
makes it really really hard because

00:04:10 --> 00:04:14
uh back then when we started the

00:04:12 --> 00:04:16
company,

00:04:13 --> 00:04:17
there were like roughly

00:04:15 --> 00:04:18
three big ideas that people were

00:04:16 --> 00:04:19
interested in.

00:04:17 --> 00:04:22
Um

00:04:18 --> 00:04:25
One was this idea of

00:04:21 --> 00:04:28
uh web of trust or like related idea.

00:04:24 --> 00:04:31
So, this idea that you

00:04:27 --> 00:04:32
look how someone behaves on the

00:04:30 --> 00:04:35
internet or did behave in the past. So,

00:04:31 --> 00:04:37
like usually a combination of you have

00:04:34 --> 00:04:38
these certain number of accounts

00:04:36 --> 00:04:40
that you

00:04:37 --> 00:04:42
know, you own since a couple of

00:04:39 --> 00:04:44
years and then you post regularly or you

00:04:41 --> 00:04:45
comment regularly to GitHub. Like these

00:04:43 --> 00:04:48
were the kind the kinds of things that

00:04:44 --> 00:04:50
people are using. And then let's say all

00:04:47 --> 00:04:52
three of us have them and then I attest

00:04:49 --> 00:04:53
also that, you know, I know you in the

00:04:51 --> 00:04:54
real world and I attest to you that I

00:04:52 --> 00:04:57
know you in the real world and that's

00:04:53 --> 00:05:00
how you would build a certain graph.

00:04:56 --> 00:05:02
And that was like a very hot idea back

00:04:59 --> 00:05:04
then for this.

00:05:01 --> 00:05:05
Um but we disregarded it basically

00:05:03 --> 00:05:07
immediately because we assumed that, you

00:05:04 --> 00:05:08
know, eventually

00:05:06 --> 00:05:11
everything that is just digital and AI

00:05:07 --> 00:05:12
will be able to do as well. Like

00:05:10 --> 00:05:14
No, we're

00:05:11 --> 00:05:14
there. Yeah, exactly. So, an

00:05:13 --> 00:05:16
[clears throat] AI will be able to have

00:05:13 --> 00:05:18
a GitHub account and will be able to

00:05:15 --> 00:05:20
post and own an account and like also

00:05:17 --> 00:05:21
attest to five other AI's that these are

00:05:19 --> 00:05:23
in fact humans and even though they're

00:05:20 --> 00:05:25
not. So, uh

00:05:22 --> 00:05:28
so, you know, there was there was area

00:05:24 --> 00:05:31
number one. Area number two was to just,

00:05:27 --> 00:05:34
you know, uh use government ID's for

00:05:30 --> 00:05:35
everything, which uh we just also

00:05:33 --> 00:05:38
immediately disregarded for a couple of

00:05:34 --> 00:05:39
reasons. One is you know,

00:05:37 --> 00:05:41
uh I think

00:05:38 --> 00:05:43
you know, it's strictly better if the

00:05:40 --> 00:05:44
government would not control such an

00:05:42 --> 00:05:45
infrastructure in terms of free speech

00:05:44 --> 00:05:47
and

00:05:44 --> 00:05:50
actually breaking that apart. But then

00:05:46 --> 00:05:51
also Right, you lose anonymity.

00:05:49 --> 00:05:53
Instantly, right?

00:05:50 --> 00:05:54
>> You could hypothetically set up a system

00:05:52 --> 00:05:56
that maybe preserves it, but it's very

00:05:54 --> 00:05:57
hard to do. And then the second thing is

00:05:55 --> 00:05:59
also

00:05:56 --> 00:06:00
um

00:05:58 --> 00:06:02
you know, the government ID identity

00:05:59 --> 00:06:05
system is just not built for that. Mhm.

00:06:01 --> 00:06:07
And and and what is so hard about this

00:06:04 --> 00:06:10
problem is it's going to be a global

00:06:06 --> 00:06:12
problem. And so it doesn't really matter

00:06:09 --> 00:06:13
if, you know, one government maybe has

00:06:11 --> 00:06:15
the perfect infrastructure. For example,

00:06:12 --> 00:06:17
Singapore is like an example of a of a

00:06:14 --> 00:06:19
government that has, you know,

00:06:16 --> 00:06:21
perfect infrastructure all around. Mhm.

00:06:18 --> 00:06:23
But that barely doesn't doesn't matter

00:06:20 --> 00:06:24
because, you know, for example, I don't

00:06:22 --> 00:06:25
know, Meta is a global product with 3

00:06:23 --> 00:06:28
billion users and there's a lot of other

00:06:24 --> 00:06:30
countries. Yeah, Singapore is what, like

00:06:27 --> 00:06:31
2 million people or a million people?

00:06:29 --> 00:06:34
Yeah, so do you want to lock everyone

00:06:31 --> 00:06:35
else out? So,

00:06:33 --> 00:06:36
uh so yeah. And and then there's a long

00:06:34 --> 00:06:39
list of other

00:06:35 --> 00:06:40
things um why we disregarded that

00:06:38 --> 00:06:41
basically immediately. And and then the

00:06:39 --> 00:06:43
last one is

00:06:40 --> 00:06:45
biometrics, which actually, you know,

00:06:42 --> 00:06:47
immediately gives us this sick reaction.

00:06:44 --> 00:06:48
It's it's like

00:06:46 --> 00:06:51
um

00:06:47 --> 00:06:53
and it even went further because uh

00:06:50 --> 00:06:53
what is so hard about this problem, as I

00:06:52 --> 00:06:57
mentioned in the beginning, is

00:06:52 --> 00:06:58
uniqueness. Mhm. And so just like in

00:06:56 --> 00:07:00
very simple words, how you can describe

00:06:57 --> 00:07:02
the problem is

00:06:59 --> 00:07:05
um well, first of all, for example, what

00:07:01 --> 00:07:07
does Face ID do? Face ID checks that I'm

00:07:04 --> 00:07:10
the same person again using my phone.

00:07:06 --> 00:07:11
Mhm. And uh so it's a one-to-one

00:07:09 --> 00:07:13
authentication. So, there's an embedding

00:07:10 --> 00:07:15
stored on my phone. It takes a picture

00:07:12 --> 00:07:17
of my face, creates a new picture,

00:07:14 --> 00:07:19
compares it to the previous one.

00:07:16 --> 00:07:21
And if that is close enough, I can use

00:07:18 --> 00:07:22
my I can use my phone.

00:07:20 --> 00:07:24
But

00:07:21 --> 00:07:25
uh so that's a one-to-one, you know, one

00:07:23 --> 00:07:26
mbedding [clears throat] to one new

00:07:24 --> 00:07:28
embedding.

00:07:25 --> 00:07:30
To solve the proof of human problem, you

00:07:27 --> 00:07:31
will need to distinguish one new

00:07:29 --> 00:07:34
individual from all previous

00:07:30 --> 00:07:36
individuals. Mhm. Uh you need to make

00:07:33 --> 00:07:38
sure that, you know, Ben is trying to

00:07:35 --> 00:07:41
sign up and Ben did not sign up before.

00:07:37 --> 00:07:44
Yeah. Um and then suddenly it goes from

00:07:40 --> 00:07:46
one-to-one to one-to-n. And n is the n

00:07:43 --> 00:07:47
is the size of your network essentially

00:07:45 --> 00:07:49
that you're that you're trying to prove

00:07:46 --> 00:07:51
that to. Right. And then you can just do

00:07:48 --> 00:07:53
the math and you can calculate how much

00:07:50 --> 00:07:55
mathematical entropy, like how much

00:07:52 --> 00:07:58
information, just information

00:07:54 --> 00:08:00
theoretically, do you need to um to

00:07:57 --> 00:08:02
prove that? And it turns out that's a

00:07:59 --> 00:08:03
pretty high number because it's it's an

00:08:01 --> 00:08:04
exponential problem.

00:08:02 --> 00:08:06
>> Right. And so then you can just do the

00:08:03 --> 00:08:08
math and you find out that, you know,

00:08:05 --> 00:08:09
things like face uh or or, you know,

00:08:07 --> 00:08:11
even

00:08:08 --> 00:08:13
fingerprints or something doesn't work.

00:08:10 --> 00:08:14
Uh like then you would basically hit a

00:08:12 --> 00:08:15
wall after tens of millions of users.

00:08:14 --> 00:08:17
>> Yeah.

00:08:14 --> 00:08:19
And so then you end up with

00:08:16 --> 00:08:21
uh you know, something like iris, which

00:08:18 --> 00:08:22
is the muscle of your of your eye, that

00:08:20 --> 00:08:23
actually has enough entropy.

00:08:21 --> 00:08:25
[clears throat]

00:08:22 --> 00:08:27
That it's unique. That is unique. That

00:08:24 --> 00:08:30
is unique enough. And how do you also

00:08:26 --> 00:08:33
then solve the uh

00:08:29 --> 00:08:35
you know, one thing that biometrics have

00:08:32 --> 00:08:37
been subject to historically is just

00:08:34 --> 00:08:40
replay attacks.

00:08:36 --> 00:08:42
Where okay, I may I may not have your

00:08:39 --> 00:08:45
eyeball, but I've got enough information

00:08:41 --> 00:08:46
that I can run a replay attack on you.

00:08:44 --> 00:08:48
Um

00:08:45 --> 00:08:49
so I there's there's now actually, you

00:08:47 --> 00:08:51
know,

00:08:48 --> 00:08:54
I get it is important I think to split

00:08:50 --> 00:08:56
up the problem in verification, which is

00:08:53 --> 00:08:58
essentially in, you know, old terms,

00:08:55 --> 00:09:00
it's like you're getting your passport.

00:08:57 --> 00:09:02
Right. And then authentication, which is

00:08:59 --> 00:09:05
you showing your passport

00:09:01 --> 00:09:06
constantly for certain kinds of things.

00:09:04 --> 00:09:08
And on the, you know, on the

00:09:05 --> 00:09:11
verification piece,

00:09:07 --> 00:09:12
um that's, you know, we we've went down

00:09:10 --> 00:09:13
if you know Worldcoin, you know that

00:09:11 --> 00:09:14
we've built this thing called an Orb.

00:09:12 --> 00:09:14
So,

00:09:13 --> 00:09:15
>> [snorts]

00:09:13 --> 00:09:18
>> you know, it's it's doing a lot of

00:09:14 --> 00:09:19
things to prevent these kinds of

00:09:17 --> 00:09:22
attacks. So, it's for example, it has

00:09:18 --> 00:09:24
multiple sensors in the, you know,

00:09:21 --> 00:09:26
electromagnetic spectrum to just make

00:09:23 --> 00:09:28
sure that you cannot show a display to

00:09:25 --> 00:09:30
it and it and it would recognize that.

00:09:27 --> 00:09:34
Um so, I think on that side we've, you

00:09:29 --> 00:09:36
know, we've got it handled. On the on

00:09:33 --> 00:09:37
the consumer side, like

00:09:35 --> 00:09:39
you know, that should then

00:09:36 --> 00:09:41
reauthenticate, it turns out to be much

00:09:38 --> 00:09:42
arder because

00:09:40 --> 00:09:45
uh you would need to trust the phone in

00:09:41 --> 00:09:46
some sense. Mhm. Uh because what we

00:09:44 --> 00:09:49
actually do in that moment is when you

00:09:45 --> 00:09:51
verify with an Orb, we

00:09:48 --> 00:09:52
not only do we check uh your uniqueness

00:09:50 --> 00:09:53
in a fully anonymous and privacy

00:09:51 --> 00:09:56
preserving way and we should talk about

00:09:52 --> 00:09:58
hat, but also we send to your phone a

00:09:55 --> 00:10:00
signed face image that you then can

00:09:57 --> 00:10:03
later use to re-authenticate against it.

00:09:59 --> 00:10:05
Right. Um and you know, with a new

00:10:02 --> 00:10:07
iPhone, you can have meaningful amount

00:10:04 --> 00:10:09
of trust against that, but with old

00:10:06 --> 00:10:10
Android phones, basically not. And so

00:10:08 --> 00:10:12
Oh, yeah, yeah, yeah. Yeah, you know,

00:10:09 --> 00:10:14
because like you can just uh you can

00:10:11 --> 00:10:16
just show a a deep fake essentially

00:10:13 --> 00:10:17
either through a display or just

00:10:15 --> 00:10:18
directly inject it in the camera stream.

00:10:16 --> 00:10:21
So,

00:10:17 --> 00:10:23
um that's the problem. And so, it's

00:10:20 --> 00:10:25
going to be a mix of uh you know, if you

00:10:22 --> 00:10:27
have a new enough, let's say iPhone or a

00:10:24 --> 00:10:30
general phone, um then you can just

00:10:26 --> 00:10:31
re-authenticate against that uh picture

00:10:29 --> 00:10:32
that you took on verification.

00:10:30 --> 00:10:34
Otherwise, you would probably have to

00:10:31 --> 00:10:36
even go back to an orb somewhat

00:10:33 --> 00:10:38
frequently. Um like let's say a couple

00:10:35 --> 00:10:40
times a year. If you just I see. Right

00:10:37 --> 00:10:41
o re-authenticate. Yeah, that's right.

00:10:39 --> 00:10:43
Interesting.

00:10:40 --> 00:10:45
And then, you know, one of the things so

00:10:42 --> 00:10:47
ne of the kind of

00:10:44 --> 00:10:50
incorrect criticisms of the approach

00:10:46 --> 00:10:51
early was, "Oh my god, they've got my

00:10:49 --> 00:10:51
eyeball.

00:10:50 --> 00:10:54
>> [laughter]

00:10:50 --> 00:10:56
>> Um you know, now they you know, they

00:10:53 --> 00:10:58
somehow have uh

00:10:55 --> 00:11:00
access to my privacy and they're going

00:10:57 --> 00:11:02
to you know, do all these things to me

00:10:59 --> 00:11:03
and and that's my access and then they

00:11:01 --> 00:11:07
can

00:11:02 --> 00:11:08
they uh Worldcoin can um impersonate me

00:11:06 --> 00:11:10
and all these kinds of things, but

00:11:07 --> 00:11:13
hat's not the case and

00:11:09 --> 00:11:14
um so that was also like a non-trivial

00:11:12 --> 00:11:16
engineering problem.

00:11:13 --> 00:11:18
>> was There was very much non-trivial. Um

00:11:15 --> 00:11:19
so actually, I think one point on iris

00:11:17 --> 00:11:20
that I think people don't appreciate

00:11:18 --> 00:11:22
nough.

00:11:19 --> 00:11:24
Yeah, that's a bet we took back then,

00:11:21 --> 00:11:26
but it was essentially that iris will

00:11:23 --> 00:11:28
turn out to be super normal as a as

00:11:25 --> 00:11:30
modality just because I think we will

00:11:27 --> 00:11:33
all wear

00:11:29 --> 00:11:35
um AR and VR systems that do that. You

00:11:32 --> 00:11:36
know, Apple already does it.

00:11:34 --> 00:11:37
Uh Yep.

00:11:35 --> 00:11:38
>> Already has it [clears throat] iris ID

00:11:36 --> 00:11:40
in in the Vision Pro. So, I think it's

00:11:37 --> 00:11:41
So, maybe that's a general point. I

00:11:39 --> 00:11:43
think it's going it's going to be become

00:11:40 --> 00:11:46
something that we will use across many

00:11:42 --> 00:11:48
different devices and uh will normalize

00:11:45 --> 00:11:50
in that sense. But I think on the

00:11:47 --> 00:11:51
privacy piece,

00:11:49 --> 00:11:53
um

00:11:50 --> 00:11:55
that took us a lot of time because like

00:11:52 --> 00:11:59
when when we when we decided back then

00:11:54 --> 00:12:00
that you know, with our assumptions,

00:11:58 --> 00:12:02
you know, which was 6 years ago that we

00:11:59 --> 00:12:05
will need a custom hardware device for

00:12:01 --> 00:12:06
biometrics, it was actually quite scary.

00:12:04 --> 00:12:08
Um you know, to to come to that

00:12:06 --> 00:12:09
conclusion because like Yeah, that's an

00:12:07 --> 00:12:11
expensive conclusion.

00:12:08 --> 00:12:12
>> It's It's like It's like very expensive

00:12:10 --> 00:12:13
and then just having this idea that you

00:12:11 --> 00:12:15
would need to distribute them all over

00:12:12 --> 00:12:16
the world. Like that that just assumes

00:12:14 --> 00:12:18
that you would be able to like somehow

00:12:15 --> 00:12:21
bring up billions of dollars and

00:12:17 --> 00:12:24
to like a massive effort to to just

00:12:20 --> 00:12:26
resolve the world. Um but then also, the

00:12:23 --> 00:12:28
privacy challenge of like how could you

00:12:25 --> 00:12:29
build such a system that has all the all

00:12:27 --> 00:12:32
the requirements that we care about. And

00:12:28 --> 00:12:34
the the two main

00:12:31 --> 00:12:36
high-level, you know, ideas on how to

00:12:33 --> 00:12:38
solve it were

00:12:35 --> 00:12:41
uh multi-party computation

00:12:37 --> 00:12:42
and zero-knowledge proofs. Mhm. And so,

00:12:40 --> 00:12:43
um

00:12:41 --> 00:12:45
to

00:12:42 --> 00:12:47
again, what is different to Face ID

00:12:44 --> 00:12:50
because Face ID actually is it you know,

00:12:46 --> 00:12:51
can be very private just because

00:12:49 --> 00:12:53
the embedding is stored on the phone. It

00:12:50 --> 00:12:56
doesn't have to leave the phone ever

00:12:52 --> 00:12:57
just because it's just you against you

00:12:55 --> 00:13:00
in the past.

00:12:56 --> 00:13:02
But to check uniqueness, uh you need to

00:12:59 --> 00:13:05
check against all previous people. So,

00:13:01 --> 00:13:06
it So so something needs to leave. Yeah.

00:13:04 --> 00:13:08
Uh you know, something needs to leave

00:13:05 --> 00:13:10
something and be compared to someone

00:13:07 --> 00:13:11
lse uh and that's and that's a much

00:13:09 --> 00:13:13
arder

00:13:10 --> 00:13:15
uh challenge and

00:13:12 --> 00:13:17
um how we approach that is we have

00:13:14 --> 00:13:19
multi-party computation. And so, that

00:13:16 --> 00:13:22
essentially means that

00:13:18 --> 00:13:24
So, in our case, when you uh verify with

00:13:21 --> 00:13:27
an orb, you know, we we take all these

00:13:23 --> 00:13:29
pictures, uh they get computed on the

00:13:26 --> 00:13:31
device,

00:13:28 --> 00:13:33
and uh then they actually get split up

00:13:30 --> 00:13:34
in multiple pieces. So,

00:13:32 --> 00:13:36
we for [clears throat] example, we take

00:13:33 --> 00:13:38
a picture of your iris, we calculate an

00:13:35 --> 00:13:40
iris code, um then we break that iris

00:13:37 --> 00:13:41
code in multiple pieces and send send it

00:13:39 --> 00:13:43
o multiple computers

00:13:40 --> 00:13:46
uch that

00:13:42 --> 00:13:48
um there is no central database in some

00:13:45 --> 00:13:50
sort. So, no one actually has the

00:13:48 --> 00:13:53
information about you. Right. And then

00:13:49 --> 00:13:55
you do some clever tricks of how these

00:13:52 --> 00:13:58
different parties need to come together

00:13:54 --> 00:14:00
to do a computation that still leaves

00:13:57 --> 00:14:01
the pieces apart Right, right, right.

00:13:59 --> 00:14:02
>> in such a way that

00:14:00 --> 00:14:04
>> Right, nobody has the whole thing.

00:14:01 --> 00:14:06
>> Yeah, so no one has the whole thing and

00:14:03 --> 00:14:06
also during the computation, no one has

00:14:05 --> 00:14:08
the whole thing.

00:14:05 --> 00:14:10
>> Yeah. But they do some you know, some

00:14:07 --> 00:14:11
clever interactions to come to the

00:14:09 --> 00:14:13
conclusion

00:14:10 --> 00:14:16
>> like a zero-knowledge proof kind of

00:14:12 --> 00:14:18
technique. Uh it's It I mean, it it's

00:14:15 --> 00:14:19
very different, but I think in terms of

00:14:17 --> 00:14:22
the properties it achieves, it's

00:14:18 --> 00:14:23
omewhat similar. Where like you

00:14:21 --> 00:14:25
no one knows anything about you, but you

00:14:22 --> 00:14:28
can actually together make a statement

00:14:25 --> 00:14:30
about you. Right. And so, you know, you

00:14:27 --> 00:14:31
send it to this multi-party computation

00:14:29 --> 00:14:33
and what comes back is, "Yes, that

00:14:30 --> 00:14:33
individual is unique."

00:14:32 --> 00:14:35
>> [gasps]

00:14:32 --> 00:14:39
>> And then the second thing we do is we we

00:14:34 --> 00:14:41
separate all of this um from you with a

00:14:38 --> 00:14:43
zero-knowledge proof. So, meaning you

00:14:40 --> 00:14:45
have the secret on your phone, but no

00:14:42 --> 00:14:46
ne else has it, no server has it, we

00:14:44 --> 00:14:48
don't have it.

00:14:45 --> 00:14:51
Um and then you can later go back to

00:14:47 --> 00:14:54
this multi-party uh computation

00:14:50 --> 00:14:57
and say like, "Hey, I have a secret that

00:14:53 --> 00:14:59
is part of that computation and I am in

00:14:56 --> 00:15:00
fact unique."

00:14:58 --> 00:15:01
Uh and then you can prove that to a

00:14:59 --> 00:15:03
platform. You could go to the social

00:15:00 --> 00:15:05
network and prove that you're a unique

00:15:02 --> 00:15:07
user to the social platform without us

00:15:05 --> 00:15:09
knowing anything about you or the social

00:15:06 --> 00:15:11
network knowing anything about you.

00:15:08 --> 00:15:13
And so, it's just like very

00:15:10 --> 00:15:14
counterintuitive

00:15:12 --> 00:15:15
that you

00:15:13 --> 00:15:18
there is like even though it uses

00:15:14 --> 00:15:20
biometrics, you you know, you preserve

00:15:17 --> 00:15:22
anonymity and and uh extreme levels of

00:15:19 --> 00:15:24
privacy, which I think is super cool.

00:15:21 --> 00:15:26
You know, social media is one kind of

00:15:23 --> 00:15:29
vector of

00:15:25 --> 00:15:32
uh you know, things that were annoying

00:15:28 --> 00:15:34
and are now becoming overwhelming in

00:15:31 --> 00:15:35
terms of just bots. You know,

00:15:33 --> 00:15:37
particularly with

00:15:34 --> 00:15:39
psyops, propaganda, all these kinds of

00:15:36 --> 00:15:41
things. What are some of the other

00:15:38 --> 00:15:43
um

00:15:40 --> 00:15:45
you know, uses of bots that are going to

00:15:42 --> 00:15:46
be

00:15:44 --> 00:15:48
kind of impossible to live with if we

00:15:45 --> 00:15:49
don't get to proof of human in the

00:15:47 --> 00:15:50
future?

00:15:48 --> 00:15:53
Yeah, actually I think the the simple

00:15:49 --> 00:15:55
model I have for it is every moment on

00:15:52 --> 00:15:57
the internet

00:15:54 --> 00:15:59
uh that is primarily about humans

00:15:56 --> 00:16:01
interacting with each other.

00:15:58 --> 00:16:03
You know, or or or even indirectly

00:16:00 --> 00:16:04
interacting with each other. So,

00:16:02 --> 00:16:06
uh you know, you can you can start with

00:16:03 --> 00:16:08
simple ones like dating. You know, that

00:16:05 --> 00:16:08
really matters.

00:16:07 --> 00:16:10
>> [laughter]

00:16:07 --> 00:16:11
>> Yep. It is what if the other side is in

00:16:09 --> 00:16:13
fact a person?

00:16:10 --> 00:16:16
Um Yeah, well, they

00:16:12 --> 00:16:17
Got bad news for listeners. Well, I I I

00:16:15 --> 00:16:19
and the person who you expected to be.

00:16:16 --> 00:16:20
Yeah, yeah. Yeah, exactly. [laughter]

00:16:18 --> 00:16:22
Yeah, we did this problem even before

00:16:19 --> 00:16:24
the whole catfish thing. Yeah, exactly.

00:16:21 --> 00:16:25
Yeah, yeah. So, that that that's

00:16:23 --> 00:16:26
[clears throat] that's an obvious one.

00:16:24 --> 00:16:29
Um and so, and so for example, Tinder is

00:16:25 --> 00:16:32
already using it for that reason. Um I I

00:16:28 --> 00:16:35
think And what's what's the uh the

00:16:31 --> 00:16:37
Tinder use case? So, So, we started we

00:16:34 --> 00:16:38
started in Japan uh

00:16:36 --> 00:16:38
and

00:16:37 --> 00:16:40
>> [clears throat]

00:16:37 --> 00:16:42
>> like as as a test as a test market and

00:16:39 --> 00:16:43
it's essentially exactly what we just

00:16:41 --> 00:16:46
discussed that is

00:16:42 --> 00:16:48
um if you verified with an orb, you get

00:16:45 --> 00:16:49
a little badge that you know, signals to

00:16:47 --> 00:16:51
ther people that you are in fact a

00:16:48 --> 00:16:52
human. So, it has a high level of

00:16:50 --> 00:16:55
verification.

00:16:51 --> 00:16:57
Um and then also, um I don't think

00:16:54 --> 00:16:59
that's live yet, but what will come next

00:16:56 --> 00:17:01
is that you're actually the person you

00:16:58 --> 00:17:03
claim to be. So, meaning you have a

00:17:00 --> 00:17:05
world ID that is associated to the kind

00:17:02 --> 00:17:08
of profile pictures that you use.

00:17:04 --> 00:17:10
Um so, you just run a quick check that

00:17:07 --> 00:17:12
his is all correct. Um

00:17:09 --> 00:17:15
and so, you know, you then know you're

00:17:11 --> 00:17:17
not interacting with a bot, but also you

00:17:14 --> 00:17:19
know, you interact with a fully

00:17:16 --> 00:17:20
authentic profile. Yeah. Another fun one

00:17:18 --> 00:17:21
because I think it's somewhat

00:17:19 --> 00:17:23
counterintuitive, but I think it will be

00:17:20 --> 00:17:25
video conferencing.

00:17:22 --> 00:17:27
Mhm. Uh because you know, you already

00:17:24 --> 00:17:29
have deep fakes. Yeah, just to

00:17:26 --> 00:17:31
I don't feel like going to this video

00:17:28 --> 00:17:33
conference with my deep fake on.

00:17:30 --> 00:17:35
Yeah, [laughter] and actually you um you

00:17:33 --> 00:17:36
raised it to me first and that's why we

00:17:34 --> 00:17:38
started building a product for it

00:17:35 --> 00:17:41
because you know, it will actually start

00:17:37 --> 00:17:42
with very high-value users. You know,

00:17:40 --> 00:17:45
like for example, people you know, like

00:17:41 --> 00:17:46
yourself that maybe manage a fund and

00:17:44 --> 00:17:48
you know, sometimes calls actually could

00:17:45 --> 00:17:50
be very high-value if it's about

00:17:47 --> 00:17:55
borrowing money or Oh, yeah, yeah. Well,

00:17:49 --> 00:17:55
so so so so somebody can uh

00:18:04 --> 00:18:08
still slightly hypothetical because

00:18:06 --> 00:18:10
these these things are not fully real

00:18:07 --> 00:18:12
time and you can somehow They're very

00:18:09 --> 00:18:13
close. But they're very close. And so, I

00:18:11 --> 00:18:14
think

00:18:12 --> 00:18:16
you know, in a year from now, it's just

00:18:14 --> 00:18:18
going to be a full commodity and it's

00:18:15 --> 00:18:20
going to be super photorealistic and

00:18:17 --> 00:18:22
absolutely real time and you will just

00:18:19 --> 00:18:24
not know anything anymore on these video

00:18:21 --> 00:18:25
calls. And and so,

00:18:23 --> 00:18:27
I think that's another one.

00:18:24 --> 00:18:29
Uh I think another one then will be just

00:18:27 --> 00:18:32
I think it's fun, but it's it's going to

00:18:28 --> 00:18:34
be gaming. Uh yeah, because Oh, yeah,

00:18:31 --> 00:18:36
yeah. Because like gamers really care.

00:18:33 --> 00:18:37
Oh, yeah, that they're not playing an

00:18:35 --> 00:18:37
AI.

00:18:36 --> 00:18:40
>> [laughter]

00:18:36 --> 00:18:41
>> Holy cow, that's frustrating. Yeah.

00:18:39 --> 00:18:43
Especially if we bet money. Yeah,

00:18:40 --> 00:18:45
exactly. And you you you lose money, you

00:18:42 --> 00:18:46
train multiple hours a day to get like

00:18:44 --> 00:18:48
really good at this thing and then

00:18:45 --> 00:18:50
suddenly you get, you know, you you get

00:18:47 --> 00:18:53
destroyed by an AI that is just

00:18:49 --> 00:18:56
superhuman in every dimension.

00:18:52 --> 00:18:58
Um Funny enough, uh like I wonder what

00:18:56 --> 00:18:59
you think about this, but

00:18:57 --> 00:19:01
because I don't have a good mental model

00:18:58 --> 00:19:03
about it, but even

00:19:00 --> 00:19:05
the

00:19:02 --> 00:19:07
whole model for video platforms, I

00:19:04 --> 00:19:08
think, is about to break

00:19:06 --> 00:19:09
because

00:19:07 --> 00:19:11
there's a couple dimensions to the

00:19:08 --> 00:19:15
problem, but one if if if the if the

00:19:10 --> 00:19:17
creation of content is is becoming super

00:19:14 --> 00:19:20
scalable. Like for example, I I heard

00:19:16 --> 00:19:22
about this one guy that uh created, I

00:19:19 --> 00:19:24
think, like

00:19:21 --> 00:19:26
it was like on the order of a hundred

00:19:23 --> 00:19:27
videos a day on YouTube and made

00:19:25 --> 00:19:29
tens of thousands of dollars a month.

00:19:26 --> 00:19:30
All of them were fully AI generated.

00:19:28 --> 00:19:32
Yeah.

00:19:29 --> 00:19:33
Um and people just fell for it. So, now

00:19:31 --> 00:19:36
the question is, is that actually

00:19:32 --> 00:19:38
something that YouTube wants to monetize

00:19:35 --> 00:19:40
that way? Yeah, like is that Yeah, well,

00:19:37 --> 00:19:43
it's it's interesting, right? They fell

00:19:39 --> 00:19:46
for it. Um

00:19:42 --> 00:19:47
But maybe they liked it. Yeah, yeah.

00:19:45 --> 00:19:49
They're like like that could be, but it

00:19:46 --> 00:19:52
would sure be nice to know like,

00:19:48 --> 00:19:55
"Okay, this is a human video or this is

00:19:51 --> 00:19:56
an AI video. Um Actually, my thesis

00:19:54 --> 00:19:58
about this is like something something

00:19:56 --> 00:20:01
along the lines of I think there's

00:19:58 --> 00:20:03
categories of content that are clearly

00:20:00 --> 00:20:04
just fictional. Yeah. Like movies are

00:20:02 --> 00:20:05
that, you know? It's like you you don't

00:20:03 --> 00:20:07
care that there's any connection to

00:20:04 --> 00:20:08
reality. It's just a fully fictional

00:20:06 --> 00:20:09
story.

00:20:07 --> 00:20:10
But now, if you think about something

00:20:09 --> 00:20:12
like

00:20:10 --> 00:20:15
TikTok or, you know, all all these kind

00:20:12 --> 00:20:16
of things, like people actually really

00:20:14 --> 00:20:19
care about them mostly because there is

00:20:15 --> 00:20:20
ome connection to reality. Yeah.

00:20:18 --> 00:20:23
>> Yeah. Well, there's reality and there's

00:20:19 --> 00:20:25
connection to human, right? So,

00:20:22 --> 00:20:28
>> you can create a pretty good like you

00:20:24 --> 00:20:30
can take a scientific paper and give it

00:20:27 --> 00:20:33
o Gemini and say make this into a

00:20:29 --> 00:20:35
podcast. And, you know, it'll be like a

00:20:32 --> 00:20:38
pretty entertaining podcast and it will

00:20:34 --> 00:20:40
be reality in that it came from, you

00:20:37 --> 00:20:42
know, some real thing.

00:20:39 --> 00:20:43
But you would like to know that.

00:20:41 --> 00:20:44
>> You would like to know that. Yeah. I

00:20:42 --> 00:20:46
would like to know that.

00:20:43 --> 00:20:49
>> it continues as an advertiser, you would

00:20:45 --> 00:20:50
like to know did a human watch it Yeah.

00:20:48 --> 00:20:50
>> or did an AI watch it?

00:20:49 --> 00:20:52
>> [laughter]

00:20:49 --> 00:20:54
>> Yes. Right, right. Well, right. That

00:20:51 --> 00:20:58
hat that's the other thing is I created

00:20:53 --> 00:20:59
100 AI videos. I had a million AIs watch

00:20:57 --> 00:21:00
it.

00:20:58 --> 00:21:01
>> [laughter]

00:20:59 --> 00:21:04
>> And then I made a lot of money off of

00:21:00 --> 00:21:06
YouTube. Exactly. And actually saw that

00:21:03 --> 00:21:08
video today of of a YouTube farm where

00:21:05 --> 00:21:09
like there's like thousands of phones

00:21:07 --> 00:21:12
that just watch videos all day for a

00:21:08 --> 00:21:14
reason. Yeah, yeah. And then like that's

00:21:11 --> 00:21:16
got zero value to the YouTube

00:21:13 --> 00:21:18
advertisers. And so that's that's

00:21:15 --> 00:21:20
actually a real problem for them. Right.

00:21:17 --> 00:21:21
Well, the whole sort of the creator

00:21:19 --> 00:21:24
economy platforms last decade, you know,

00:21:20 --> 00:21:26
Substack, Spotify, and all the people

00:21:23 --> 00:21:29
who support artists or you know, Patreon

00:21:25 --> 00:21:30
and other creators, YouTubers, they they

00:21:28 --> 00:21:32
have a personal relationship with with

00:21:29 --> 00:21:34
these people. It's not just they

00:21:31 --> 00:21:35
like the the art. And so, if they all of

00:21:33 --> 00:21:37
a sudden found out that they were, you

00:21:34 --> 00:21:38
know, bots, that might, you know, they

00:21:36 --> 00:21:41
might not want to support them in the

00:21:38 --> 00:21:44
same way. Yeah. You [laughter] you might

00:21:40 --> 00:21:46
not want to give them a a big YouTube

00:21:43 --> 00:21:48
tip or Yeah, I think there's a certain

00:21:45 --> 00:21:49
subset of people who support, um, you

00:21:47 --> 00:21:50
know, want to support actual people and

00:21:48 --> 00:21:51
feel like they're having a real

00:21:49 --> 00:21:52
relationship.

00:21:50 --> 00:21:54
>> Yeah. And and the thing that I think

00:21:51 --> 00:21:56
like people don't really get is that,

00:21:54 --> 00:21:59
you know, it should be always but I

00:21:55 --> 00:22:00
don't think people really understand the

00:21:58 --> 00:22:03
consequence of that. I think two

00:21:59 --> 00:22:05
things. One is that

00:22:02 --> 00:22:07
what we currently experience is like a

00:22:04 --> 00:22:10
super super tiny

00:22:07 --> 00:22:10
thing of what is about to happen, you

00:22:09 --> 00:22:12
know, just because

00:22:09 --> 00:22:13
>> Yeah. Right. It's a glimpse.

00:22:11 --> 00:22:15
>> It's a glimpse. Like, you know, cost of

00:22:12 --> 00:22:17
intelligent intelligence is dropping

00:22:14 --> 00:22:19
almost exponentially. Agentic

00:22:16 --> 00:22:21
apabilities are increasing, you know,

00:22:18 --> 00:22:24
in like some super linear form. So, like

00:22:21 --> 00:22:25
yeah, we currently see this less than 1%

00:22:23 --> 00:22:27
of what it will look like in probably a

00:22:24 --> 00:22:29
year or two. And then so, and then

00:22:26 --> 00:22:31
second, these things will be actually

00:22:28 --> 00:22:32
they will be superhuman in many ways.

00:22:30 --> 00:22:34
They will be like perfectly able to

00:22:31 --> 00:22:36
understand you and like talk in the what

00:22:33 --> 00:22:39
right way to you. Yeah. For example,

00:22:35 --> 00:22:41
this is like one paper that I that I

00:22:38 --> 00:22:42
think you got to read it after. But it

00:22:40 --> 00:22:45
was, um,

00:22:41 --> 00:22:48
it was the Change My Mind subreddit.

00:22:44 --> 00:22:50
Mhm. Um, where the University of Zurich

00:22:47 --> 00:22:52
did this thing where they had AIs

00:22:50 --> 00:22:55
actually interact with Change My Mind.

00:22:51 --> 00:22:56
>> Mhm. Yeah. And they were like superhuman

00:22:54 --> 00:22:58
in their ability to change it because

00:22:55 --> 00:23:00
they they were going back to the profile

00:22:57 --> 00:23:01
of the people posting it and were like

00:22:59 --> 00:23:02
understanding their political

00:23:00 --> 00:23:04
motivation,

00:23:01 --> 00:23:05
the way they talk, and like and then

00:23:03 --> 00:23:06
they're just interacting in perfect in

00:23:04 --> 00:23:07
the perfect way.

00:23:05 --> 00:23:08
>> [laughter]

00:23:06 --> 00:23:10
>> You know, I just like hit all the

00:23:07 --> 00:23:11
buttons and, uh, like

00:23:09 --> 00:23:13
>> AIs are really good at programming

00:23:10 --> 00:23:15
humans. That that that's much better

00:23:12 --> 00:23:17
than humans are at programming AIs.

00:23:14 --> 00:23:18
>> Absolutely. There's no question. And so,

00:23:16 --> 00:23:21
I think that's going to get quite scary,

00:23:17 --> 00:23:24
also. But, uh, I I think at least if you

00:23:20 --> 00:23:25
know you're being a victim of a side up,

00:23:23 --> 00:23:27
>> [laughter]

00:23:24 --> 00:23:30
>> then or or or it's a very advanced one

00:23:26 --> 00:23:32
done by an AI, that would be extremely

00:23:29 --> 00:23:33
useful to understand. Totally. Talk a

00:23:31 --> 00:23:35
little bit a bit more about the state of

00:23:32 --> 00:23:38
the product and the business today. Like

00:23:34 --> 00:23:39
how many IDs are are out there? Want to

00:23:37 --> 00:23:41
give a little bit of an update. Maybe

00:23:39 --> 00:23:43
talk about the evolution as well. Well,

00:23:40 --> 00:23:44
first of all, it's a multi-sided

00:23:42 --> 00:23:46
problem. And I think there's like

00:23:43 --> 00:23:47
roughly three that you have to consider.

00:23:45 --> 00:23:51
One is

00:23:47 --> 00:23:52
uh, well, you need platforms to use the

00:23:50 --> 00:23:54
technology.

00:23:51 --> 00:23:58
Uh, then, you know, things like Reddit

00:23:53 --> 00:24:00
or, you know, X or, you know, things

00:23:57 --> 00:24:02
like that.

00:23:59 --> 00:24:03
You need, uh, distribution of these

00:24:01 --> 00:24:06
devices.

00:24:02 --> 00:24:07
And I think the right mental model to to

00:24:05 --> 00:24:09
have for it is

00:24:06 --> 00:24:12
how many minutes does it take a person

00:24:08 --> 00:24:14
to reach such a device on average? And,

00:24:11 --> 00:24:15
you know, currently it's if if you would

00:24:13 --> 00:24:17
take the global average, it would be a

00:24:14 --> 00:24:18
terrible number. It would be like, you

00:24:16 --> 00:24:20
know, days or something because many

00:24:17 --> 00:24:22
people would need to fly.

00:24:19 --> 00:24:25
But but, you know, how do we get that

00:24:21 --> 00:24:26
down to below 15 minutes across the US?

00:24:24 --> 00:24:28
And so, that's probably roughly around

00:24:26 --> 00:24:30
50,000 devices that you need to deploy.

00:24:27 --> 00:24:31
That's like

00:24:29 --> 00:24:33
it's not crazy, but it's also not

00:24:30 --> 00:24:35
hing. It's it's, you know, it's it's

00:24:32 --> 00:24:37
hard to do. And then the last one is

00:24:34 --> 00:24:40
how does all of that come together to

00:24:36 --> 00:24:42
something that a lot of people really

00:24:39 --> 00:24:45
want to use it? And that's a combination

00:24:41 --> 00:24:46
of, you know, the utility of all the sub

00:24:44 --> 00:24:48
platforms essentially. But but all of

00:24:45 --> 00:24:49
that layers on top. Like maybe you can

00:24:47 --> 00:24:51
use a new Reddit account. Maybe you get

00:24:48 --> 00:24:53
like, you know, certain amount of

00:24:50 --> 00:24:54
ChatGPT subscription for free or like

00:24:52 --> 00:24:56
So, I think it's going to be a

00:24:53 --> 00:24:58
combination of things, but you need to

00:24:55 --> 00:25:00
land all three at some point

00:24:57 --> 00:25:02
at the same time,

00:24:59 --> 00:25:04
which is, uh, which is hard to do. We

00:25:01 --> 00:25:06
are now at 18 million users that are

00:25:03 --> 00:25:07
verified. 40 million in total in the

00:25:05 --> 00:25:09
app.

00:25:06 --> 00:25:11
Uh, but

00:25:08 --> 00:25:12
he biggest thing is because of the past

00:25:10 --> 00:25:14
administration, because we use, you

00:25:11 --> 00:25:16
know, we use crypto, we we did not

00:25:13 --> 00:25:18
really invest in the US for a long time.

00:25:15 --> 00:25:18
And, um,

00:25:17 --> 00:25:19
that's not the main [clears throat]

00:25:17 --> 00:25:22
shift that we're going through. So,

00:25:19 --> 00:25:24
Yeah. for all of this, the main thing

00:25:21 --> 00:25:25
that matters is the US. And ho- ho-

00:25:23 --> 00:25:26
hopefully,

00:25:24 --> 00:25:27
uh, we get the Clarity Act passed

00:25:25 --> 00:25:28
shortly.

00:25:26 --> 00:25:30
>> Yeah, exactly. That would that would be

00:25:27 --> 00:25:32
really great. So,

00:25:29 --> 00:25:35
um, to get clarity on that. Uh-huh.

00:25:31 --> 00:25:37
Yeah. So, so the big focus that we that

00:25:34 --> 00:25:39
we now are going through right now is to

00:25:36 --> 00:25:42
kind of go all in on the US. So, I think

00:25:38 --> 00:25:44
over the next year, 90% of the of the,

00:25:42 --> 00:25:47
you know, effort of the company is just

00:25:43 --> 00:25:48
going to go about the US. And how do you

00:25:46 --> 00:25:51
get, for example, device distribution

00:25:47 --> 00:25:52
up? How how do you eventually have this

00:25:50 --> 00:25:54
on every Starbucks?

00:25:51 --> 00:25:56
Um, so it becomes just, you know, super

00:25:53 --> 00:25:58
normal and people just just use it every

00:25:55 --> 00:25:59
day. So, that's kind of the And on the

00:25:57 --> 00:26:01
platform side, actually, we went through

00:25:58 --> 00:26:03
a

00:26:00 --> 00:26:05
It's, um, it was a very interesting

00:26:02 --> 00:26:06
experience to go through personally

00:26:04 --> 00:26:07
because I think,

00:26:05 --> 00:26:10
um,

00:26:07 --> 00:26:11
like a couple of years ago, universally

00:26:09 --> 00:26:13
people just made fun of us, you know?

00:26:10 --> 00:26:15
Like just it was like the universal

00:26:12 --> 00:26:16
reaction. Uh, well, minus recent and

00:26:14 --> 00:26:19
then a couple of other people who

00:26:15 --> 00:26:21
believed in it, but, um,

00:26:18 --> 00:26:24
Yeah, like in the press and like like

00:26:20 --> 00:26:27
the amount of fun making of something

00:26:23 --> 00:26:28
that it just shows how short-sighted

00:26:26 --> 00:26:29
people are. That's right.

00:26:27 --> 00:26:31
>> It's like you don't think the bots are

00:26:28 --> 00:26:33
coming? What did you think when when we

00:26:30 --> 00:26:34
first pitched, actually? Because even

00:26:32 --> 00:26:37
you must have thought this is crazy.

00:26:33 --> 00:26:40
Well, because you had the orb.

00:26:36 --> 00:26:42
Like the orb was so

00:26:39 --> 00:26:44
wild. Um,

00:26:41 --> 00:26:45
you know, okay, we're going to scan

00:26:43 --> 00:26:46
people's retinas and that's how we're

00:26:44 --> 00:26:48
going to know they're human and so

00:26:45 --> 00:26:50
forth. And this was, I mean, you pitched

00:26:47 --> 00:26:52
us 6 and 1/2 years ago. 6 years ago.

00:26:49 --> 00:26:55
>> Yeah, it was before COVID because you

00:26:51 --> 00:26:57
were there with the orb. Right. Um,

00:26:54 --> 00:26:58
and, you know, AI just hadn't happened

00:26:56 --> 00:26:58
yet.

00:26:57 --> 00:27:01
>> [laughter]

00:26:58 --> 00:27:02
>> And and, you know, you could kind of

00:27:00 --> 00:27:05
see, but there, you know, there there's

00:27:01 --> 00:27:07
bots, um, but they were kind of very

00:27:04 --> 00:27:08
crude and, you know, compared to what

00:27:06 --> 00:27:09
here are now.

00:27:07 --> 00:27:10
>> [gasps]

00:27:08 --> 00:27:14
>> Um,

00:27:09 --> 00:27:16
but it, uh, it seemed inevitable. Um, at

00:27:13 --> 00:27:18
least at at the time, you know, the

00:27:15 --> 00:27:21
thing was it was so out of it was so

00:27:17 --> 00:27:22
from the future that, uh,

00:27:20 --> 00:27:24
you know, we always worry about, okay,

00:27:21 --> 00:27:26
like what's the timing of this and this

00:27:23 --> 00:27:27
and that and the other and and so forth.

00:27:25 --> 00:27:28
Um,

00:27:26 --> 00:27:30
but

00:27:27 --> 00:27:32
you know, you were impressive enough and

00:27:29 --> 00:27:33
it was

00:27:31 --> 00:27:35
going to happen eventually and it was an

00:27:32 --> 00:27:38
exciting enough idea that I think all

00:27:34 --> 00:27:41
those things kind of got us to go, okay,

00:27:37 --> 00:27:43
we're Um, but but it was not

00:27:40 --> 00:27:45
it was one of the

00:27:42 --> 00:27:47
it wasn't obvious that like it was going

00:27:44 --> 00:27:49
to work in that time frame. It seemed

00:27:46 --> 00:27:50
very in obvious for a long time.

00:27:48 --> 00:27:51
And how different was that pitch from

00:27:49 --> 00:27:52
what it ended up

00:27:50 --> 00:27:54
or talk a little bit about it. It was

00:27:52 --> 00:27:55
actually pretty much exactly the same

00:27:53 --> 00:27:57
pitch. I think it's the same thing. The

00:27:54 --> 00:27:58
device changed. You know, you know,

00:27:56 --> 00:28:00
they've they've made it much more

00:27:57 --> 00:28:02
conomical and and convenient, but

00:27:59 --> 00:28:04
That's right. It's, uh, But the initial

00:28:01 --> 00:28:06
instinct was right. It was there.

00:28:03 --> 00:28:07
It was basically

00:28:05 --> 00:28:08
everybody's going to have to prove

00:28:06 --> 00:28:10
they're

00:28:07 --> 00:28:11
you're either going to

00:28:09 --> 00:28:15
have to have some proof that you're

00:28:10 --> 00:28:17
human on in cyberspace or like

00:28:14 --> 00:28:19
it's going to be a very bad world. Yeah.

00:28:16 --> 00:28:20
I mean, the robots are going to get us.

00:28:19 --> 00:28:22
We're done.

00:28:19 --> 00:28:24
>> Right. And then actually the second was

00:28:21 --> 00:28:26
like this was the first thing is like

00:28:23 --> 00:28:27
it's going to be a that itself is going

00:28:25 --> 00:28:29
to be a big deal. But then second of all

00:28:26 --> 00:28:31
that, you know,

00:28:28 --> 00:28:32
when it's going to become a big deal, we

00:28:30 --> 00:28:34
will be able to build one of the most

00:28:31 --> 00:28:37
valuable networks as a result of that.

00:28:33 --> 00:28:38
Because in a world of AI, having a human

00:28:36 --> 00:28:40
etwork is going to be this incredibly

00:28:37 --> 00:28:42
important thing. And, uh,

00:28:39 --> 00:28:43
and so actually, yeah, two things. Like

00:28:41 --> 00:28:44
one, you will need to prove you're

00:28:42 --> 00:28:46
human, but then second, it will have

00:28:43 --> 00:28:47
ry strong network effects. And even as

00:28:45 --> 00:28:49
the platforms, as you get into

00:28:46 --> 00:28:51
platforms, even as the platforms'

00:28:48 --> 00:28:54
largest problem has been bots. I mean,

00:28:50 --> 00:28:56
you remember Elon and the you know, he

00:28:53 --> 00:28:59
backed out of buying Twitter because all

00:28:55 --> 00:29:00
the stats were based on bots.

00:28:58 --> 00:29:03
They still

00:28:59 --> 00:29:06
even knowing that,

00:29:02 --> 00:29:07
it was hard for them to get

00:29:05 --> 00:29:09
all the way to the future in their

00:29:06 --> 00:29:10
thinking and go, yeah, we need proof of

00:29:08 --> 00:29:12
human. Yeah. Like

00:29:09 --> 00:29:13
it's kind of obvious.

00:29:11 --> 00:29:15
>> people were like, what does it even

00:29:13 --> 00:29:17
mean, you know? Like, what does proof of

00:29:14 --> 00:29:18
human even mean? We can just we can

00:29:16 --> 00:29:20
just, you know, And did you have the

00:29:17 --> 00:29:21
language detection tools? When did you

00:29:19 --> 00:29:22
come up with the language proof of

00:29:20 --> 00:29:23
human?

00:29:21 --> 00:29:25
We had actually we we had proof of

00:29:22 --> 00:29:27
personhood for the longest time. It's

00:29:24 --> 00:29:30
even here in this on this brief. Yeah.

00:29:26 --> 00:29:31
But then, uh, at some point we were

00:29:29 --> 00:29:33
like, well, at some point AIs will

00:29:30 --> 00:29:35
have personhood, too. So,

00:29:32 --> 00:29:35
>> [laughter]

00:29:35 --> 00:29:39
>> Uh, so like that's not going to fly. So,

00:29:37 --> 00:29:41
Yeah, but they're not going to have

00:29:38 --> 00:29:41
retinas for a long time.

00:29:40 --> 00:29:42
>> [clears throat]

00:29:40 --> 00:29:43
>> That's actually Oh, [laughter] that's

00:29:41 --> 00:29:44
coming eventually. It was it was

00:29:42 --> 00:29:47
actually really funny. It was like some

00:29:43 --> 00:29:49
of the some of the OpenAI people,

00:29:46 --> 00:29:51
uh, that I met were like, "Man, Alex,

00:29:48 --> 00:29:52
this is going to this is going to be so

00:29:50 --> 00:29:54
dark. Like, people will hate you for

00:29:51 --> 00:29:55
like not giving personal to AIs." And I

00:29:53 --> 00:29:57
was like, "Jesus."

00:29:54 --> 00:29:57
>> [laughter]

00:29:57 --> 00:30:02
>> Let's call it Proof of Human, then.

00:29:59 --> 00:30:05
Um that's funny. So, that that's how it

00:30:01 --> 00:30:07
changed. Um but then actually, so then I

00:30:04 --> 00:30:09
would say like last year, so post then

00:30:06 --> 00:30:11
it was like a big shift post post

00:30:08 --> 00:30:13
ChatGPT. Like, people were then like

00:30:10 --> 00:30:15
that was like the

00:30:12 --> 00:30:17
AI suddenly got real to people.

00:30:14 --> 00:30:18
And then actually, I think. And so,

00:30:16 --> 00:30:21
that's when people started talking to

00:30:17 --> 00:30:22
us, but still we're not like, you know,

00:30:20 --> 00:30:24
like it's a future problem. It's

00:30:21 --> 00:30:25
probably a couple of years out. Like, we

00:30:23 --> 00:30:26
don't really

00:30:24 --> 00:30:27
care about it. Let's stay in touch.

00:30:25 --> 00:30:29
Like, it was like the common response.

00:30:26 --> 00:30:30
And then

00:30:28 --> 00:30:32
uh

00:30:30 --> 00:30:34
you know, and well, but you also you had

00:30:31 --> 00:30:36
a couple CEOs that really believed that

00:30:33 --> 00:30:39
and were like willing to take the

00:30:35 --> 00:30:41
long-term bet um to to give them credit.

00:30:38 --> 00:30:44
But, I think the second big shift was

00:30:40 --> 00:30:46
actually Cloud Bots and Mobile Book

00:30:43 --> 00:30:48
recently. Yeah.

00:30:45 --> 00:30:49
Just because of the

00:30:47 --> 00:30:52
That [clears throat] kind of means like

00:30:49 --> 00:30:53
the the cow is way out of the barn.

00:30:51 --> 00:30:54
>> [laughter]

00:30:52 --> 00:30:55
[gasps]

00:30:53 --> 00:30:57
>> Yeah, and and so like honestly, if you

00:30:54 --> 00:30:59
don't take it serious now,

00:30:56 --> 00:31:00
then I think you just you you should get

00:30:58 --> 00:31:02
a different job or something. They're

00:30:59 --> 00:31:03
not

00:31:01 --> 00:31:04
Yeah. They're just like not thinking

00:31:02 --> 00:31:05
about problems in the right way. Like,

00:31:03 --> 00:31:07
it's

00:31:04 --> 00:31:08
And so, that's that was like the moment

00:31:06 --> 00:31:10
when many many people started reaching

00:31:07 --> 00:31:12
out. And now now it feels like much more

00:31:09 --> 00:31:14
of an execution problem. Not not anymore

00:31:11 --> 00:31:16
a market risk. Like a market risk or

00:31:13 --> 00:31:18
like a thesis problem or Like like just

00:31:15 --> 00:31:19
a

00:31:17 --> 00:31:21
And which is still a big

00:31:18 --> 00:31:23
problem. So, like how do you how do you

00:31:20 --> 00:31:25
get 50,000 devices out there?

00:31:22 --> 00:31:27
How how do you make it cheap enough? How

00:31:24 --> 00:31:29
do you make it economic? Like, you know,

00:31:26 --> 00:31:30
how do you how do you make all these

00:31:28 --> 00:31:31
three things at the same time? It's

00:31:29 --> 00:31:33
till a very hard problem. How do you

00:31:30 --> 00:31:34
normalize the behavior, etc. So, people

00:31:32 --> 00:31:36
aren't weirded out in a Starbucks or

00:31:33 --> 00:31:38
something. Although, I I think that's

00:31:35 --> 00:31:40
now going to be

00:31:37 --> 00:31:41
go to get used to. I I'm just because I

00:31:39 --> 00:31:43
think people will hate the alternative

00:31:40 --> 00:31:44
so much. Yeah. And I think people are

00:31:42 --> 00:31:46
going to

00:31:43 --> 00:31:48
by the way take a lot more pride in

00:31:45 --> 00:31:49
being human. Uh particularly online

00:31:47 --> 00:31:50
because

00:31:48 --> 00:31:53
>> [gasps]

00:31:49 --> 00:31:56
>> I I think that people are going to start

00:31:52 --> 00:31:58
getting accused of being bots.

00:31:55 --> 00:31:59
Totally. It's it's going to get really

00:31:57 --> 00:32:01
weird.

00:31:58 --> 00:32:04
Um and without

00:32:00 --> 00:32:05
like clear delineation, it's

00:32:03 --> 00:32:08
going to be a mess. Like, I don't I

00:32:05 --> 00:32:10
don't understand how somebody can think

00:32:07 --> 00:32:11
they're going to have a social media

00:32:09 --> 00:32:13
platform that doesn't distinguish

00:32:10 --> 00:32:15
between humans and bots. Like, that

00:32:12 --> 00:32:17
seems absurd to me.

00:32:14 --> 00:32:19
It's absurd. I think we will

00:32:16 --> 00:32:21
My guess is over the next couple months

00:32:18 --> 00:32:24
we'll see we'll see things like these

00:32:20 --> 00:32:26
platforms trying to use things like face

00:32:23 --> 00:32:28
biometrics on the phone.

00:32:25 --> 00:32:30
Which, you know,

00:32:27 --> 00:32:32
I know it will break, so it's fine. But,

00:32:29 --> 00:32:35
I think we'll go through that cycle now.

00:32:31 --> 00:32:37
Uh and yeah, so we just need to get to

00:32:34 --> 00:32:40
scale fast enough to

00:32:36 --> 00:32:41
meet uh the market to what comes

00:32:39 --> 00:32:42
after, which I think something like the

00:32:40 --> 00:32:45
Orb is the only solution. I think

00:32:41 --> 00:32:47
currently there's no real competition. I

00:32:44 --> 00:32:48
think we'll also see that. I have not

00:32:46 --> 00:32:50
seen a competitor yet.

00:32:47 --> 00:32:52
Because it's so because it's so

00:32:49 --> 00:32:54
ridiculous. It's so ridiculous and it is

00:32:51 --> 00:32:55
o hard to get to in terms of building

00:32:53 --> 00:32:58
it.

00:32:55 --> 00:33:01
And then there's a massive network

00:32:57 --> 00:33:03
effect um Right. which like people are

00:33:00 --> 00:33:06
starting

00:33:02 --> 00:33:08
6 years behind you on that. But,

00:33:05 --> 00:33:10
yeah, I'm sure they'll come cuz it's

00:33:07 --> 00:33:12
just such an obvious problem now.

00:33:09 --> 00:33:14
What actually do you think about like AI

00:33:11 --> 00:33:15
continues,

00:33:13 --> 00:33:17
what in your mind are the economic

00:33:14 --> 00:33:19
policies that we will need to implement

00:33:16 --> 00:33:22
or directionally? I think governments do

00:33:18 --> 00:33:24
have to figure out how to send citizens

00:33:21 --> 00:33:26
money. They're good at taking money from

00:33:23 --> 00:33:27
citizens, but not reverse.

00:33:25 --> 00:33:29
I mean,

00:33:26 --> 00:33:31
well, just if you go back to COVID, the

00:33:28 --> 00:33:35
stimulus program.

00:33:30 --> 00:33:37
Like, I think $400 billion was stolen.

00:33:34 --> 00:33:38
And like that that that's pretty crazy.

00:33:36 --> 00:33:40
You would have liked to know that you

00:33:37 --> 00:33:42
were sending the money to unique humans.

00:33:39 --> 00:33:44
I mean, if even if not citizens. As long

00:33:41 --> 00:33:44
as they were unique humans, that would

00:33:43 --> 00:33:46
have been good.

00:33:43 --> 00:33:47
>> Yeah, I mean, the social security

00:33:45 --> 00:33:48
system, for example, is a mess in the

00:33:46 --> 00:33:51
US. It's a total

00:33:47 --> 00:33:54
it's a total disaster, yeah. So,

00:33:50 --> 00:33:57
We're going to have to get to some kind

00:33:53 --> 00:33:59
of way to cryptographically strong way

00:33:56 --> 00:34:00
to identify

00:33:58 --> 00:34:03
who's the citizen

00:33:59 --> 00:34:06
of what country. Like like like that's

00:34:02 --> 00:34:07
going to be a really bad problem um I

00:34:05 --> 00:34:09
think.

00:34:06 --> 00:34:11
So, otherwise,

00:34:08 --> 00:34:13
there's no way to even have a democracy.

00:34:10 --> 00:34:14
I mean, you know, like the

00:34:12 --> 00:34:16
It's pretty crude what they're trying to

00:34:13 --> 00:34:19
do with the Save Act, but it's not

00:34:15 --> 00:34:22
completely insane, which is

00:34:18 --> 00:34:24
how do you even know like the people are

00:34:21 --> 00:34:26
voting are actual people or living

00:34:23 --> 00:34:29
people or anything? And we really don't

00:34:25 --> 00:34:31
know now. Um well, like we genuinely

00:34:28 --> 00:34:32
don't know. And then if you go to

00:34:30 --> 00:34:32
I mean,

00:34:31 --> 00:34:34
>> [laughter]

00:34:31 --> 00:34:36
>> the the the whole mail-in ballot thing

00:34:33 --> 00:34:40
like is built for whole very different

00:34:35 --> 00:34:42
world, right? That's right. Uh so, like

00:34:39 --> 00:34:44
I don't think in an AI world where you

00:34:41 --> 00:34:47
can have like

00:34:44 --> 00:34:49
very high scale impersonation that and

00:34:46 --> 00:34:51
then with a broken social security

00:34:48 --> 00:34:53
system that like you're going to have

00:34:51 --> 00:34:55
the will of the people anymore. Like, I

00:34:52 --> 00:34:57
think that's going to be

00:34:54 --> 00:35:00
gone pretty fast. So, I think

00:34:56 --> 00:35:02
we're going to need some kind of

00:34:59 --> 00:35:04
you know, cryptographically strong

00:35:01 --> 00:35:07
infrastructure on like who's who.

00:35:03 --> 00:35:08
Um and then, you know, similarly, I

00:35:06 --> 00:35:10
think we're going to have to be able to

00:35:07 --> 00:35:13
get people money much more efficiently

00:35:09 --> 00:35:15
than through these uh this crazy

00:35:12 --> 00:35:17
apparatus of social programs that we

00:35:14 --> 00:35:19
have. Uh

00:35:16 --> 00:35:23
just cuz like how lossy

00:35:18 --> 00:35:25
is and fraudulent is social security or

00:35:22 --> 00:35:27
Medicare or any of these things. I mean,

00:35:24 --> 00:35:29
like the

00:35:26 --> 00:35:31
Medicare is so frustrating for people

00:35:28 --> 00:35:33
that they shot the CEO of United

00:35:30 --> 00:35:35
Healthcare in mail. Like, and people are

00:35:32 --> 00:35:36
happy about that. Like, really happy.

00:35:34 --> 00:35:39
So, like think about how bad a system

00:35:35 --> 00:35:41
that is um when you know, and the

00:35:38 --> 00:35:43
government spends a lot of money sending

00:35:40 --> 00:35:46
you money for your health care, but they

00:35:42 --> 00:35:49
do it in a like super inefficient way.

00:35:45 --> 00:35:51
Um but we have the technology to do that

00:35:48 --> 00:35:54
now. So, I think that

00:35:50 --> 00:35:57
AI is going to make that problem so bad

00:35:53 --> 00:35:59
uh cuz the ability to file fraudulent

00:35:56 --> 00:36:01
claims and create fake, you know,

00:35:58 --> 00:36:03
buy social I mean, you can buy social

00:36:00 --> 00:36:04
security numbers on the black market.

00:36:02 --> 00:36:06
Like,

00:36:03 --> 00:36:07
for those of you don't know, that's a

00:36:05 --> 00:36:10
easy thing. That's a real thing. Like,

00:36:07 --> 00:36:12
that is like everybody's social security

00:36:09 --> 00:36:14
number is for sale.

00:36:11 --> 00:36:15
Uh and so,

00:36:13 --> 00:36:17
um

00:36:14 --> 00:36:19
you know, like AI is just a way of

00:36:16 --> 00:36:20
making that

00:36:18 --> 00:36:23
kind of

00:36:19 --> 00:36:27
loose black market underground fraud

00:36:22 --> 00:36:28
thing just massive and extremely

00:36:26 --> 00:36:31
scalable.

00:36:27 --> 00:36:34
I agree with that. Yeah. So, I I I I

00:36:30 --> 00:36:36
think you know, proof of human is a

00:36:33 --> 00:36:37
piece of a very important puzzle where

00:36:35 --> 00:36:39
we have to upgrade the entire

00:36:36 --> 00:36:41
infrastructure or we're not going to be

00:36:38 --> 00:36:44
a democracy anymore. I mean, that that's

00:36:40 --> 00:36:45
be my guess. I agree with that.

00:36:43 --> 00:36:48
Sure, more you said okay, next year go

00:36:44 --> 00:36:49
to market. Is focus on the on the US.

00:36:47 --> 00:36:52
Say more about how how you're thinking

00:36:49 --> 00:36:53
about that. Is the incentive for people

00:36:51 --> 00:36:55
to do it because they get to use a set

00:36:52 --> 00:36:56
of services? Is there some other

00:36:54 --> 00:36:58
economic incentive or how do you

00:36:55 --> 00:36:59
envision it? Basically, a month ago we

00:36:57 --> 00:37:01
ntered a very different phase as a

00:36:58 --> 00:37:03
project where

00:37:00 --> 00:37:05
I do believe many of the platforms that

00:37:02 --> 00:37:07
we're now integrating with

00:37:04 --> 00:37:10
will really, you know, bring a lot of

00:37:06 --> 00:37:11
users to our platform. And that changes,

00:37:09 --> 00:37:13
you know, how you think about it

00:37:10 --> 00:37:15
entirely. Like, if you have a if you

00:37:12 --> 00:37:19
have a platform with a a billion users

00:37:14 --> 00:37:20
um sending users to you, then it's

00:37:18 --> 00:37:22
really just all about like how do you

00:37:19 --> 00:37:24
meet that demand? It's like, you know,

00:37:21 --> 00:37:27
and that's that's that's what we're now

00:37:23 --> 00:37:28
entering. And and so,

00:37:26 --> 00:37:30
um

00:37:27 --> 00:37:31
yeah, so I think the response is first.

00:37:29 --> 00:37:33
Um

00:37:30 --> 00:37:35
I think you will see, and we're already

00:37:33 --> 00:37:36
working on it, but you will see a lot of

00:37:34 --> 00:37:37
really large platforms that you know

00:37:35 --> 00:37:40
integrate

00:37:36 --> 00:37:42
in the in the near term future.

00:37:39 --> 00:37:44
I think that will, just to set

00:37:41 --> 00:37:45
expectations, I think it will be slow

00:37:43 --> 00:37:47
initially because it also should be.

00:37:44 --> 00:37:49
Just you know, to to get understand the

00:37:46 --> 00:37:51
product. It will be focused on certain

00:37:48 --> 00:37:53
geographies. Like, what we did with

00:37:50 --> 00:37:53
Tinder, we started in Japan just to, you

00:37:52 --> 00:37:54
know,

00:37:52 --> 00:37:55
to

00:37:53 --> 00:37:58
uh

00:37:54 --> 00:38:00
to test the product and also to just

00:37:57 --> 00:38:03
normalize the concept.

00:37:59 --> 00:38:05
Uh but that will happen. And then,

00:38:02 --> 00:38:06
secondly, which is now becoming like one

00:38:04 --> 00:38:08
of the main priorities for me is just

00:38:05 --> 00:38:10
how do you get this Orb distribution up?

00:38:08 --> 00:38:12
Which is

00:38:09 --> 00:38:13
which is, you know,

00:38:11 --> 00:38:15
broadly speaking, there's a couple

00:38:12 --> 00:38:17
different dimensions to that, but

00:38:14 --> 00:38:19
one is first of all, the product needs

00:38:16 --> 00:38:19
to work at scale

00:38:18 --> 00:38:22
uh

00:38:18 --> 00:38:23
you know, without supervision.

00:38:21 --> 00:38:26
Which is turns out to be much harder

00:38:23 --> 00:38:27
than you would think. It's you know,

00:38:25 --> 00:38:28
every engineering problem at scale turns

00:38:26 --> 00:38:30
out to be much more complicated than you

00:38:28 --> 00:38:35
would think because, you know, fighting

00:38:29 --> 00:38:37
for 1% of improvement in quality is this

00:38:34 --> 00:38:38
of,

00:38:36 --> 00:38:40
you know, all these dependencies that

00:38:38 --> 00:38:41
come together. So, that's the I think

00:38:39 --> 00:38:43
that's like one of the biggest

00:38:40 --> 00:38:44
engineering focuses right now. But then,

00:38:42 --> 00:38:47
second,

00:38:43 --> 00:38:48
um you need to find places to deploy

00:38:46 --> 00:38:50
them at. And and the way to think about

00:38:47 --> 00:38:52
it is

00:38:49 --> 00:38:53
there are large-scale distribution

00:38:51 --> 00:38:56
partnerships. That could be something

00:38:52 --> 00:38:57
like Walmart, you know, or if you

00:38:55 --> 00:38:59
're very ambitious, it could be

00:38:56 --> 00:39:00
something like Starbucks.

00:38:58 --> 00:39:03
Um

00:38:59 --> 00:39:06
or it it can just be you go to one-off,

00:39:02 --> 00:39:08
you know, hip coffee shops. And you just

00:39:05 --> 00:39:09
put it there. Or, you know, and

00:39:07 --> 00:39:11
then it you could go you could

00:39:08 --> 00:39:13
eventually even go to the DMV and just

00:39:10 --> 00:39:14
put it right there. So,

00:39:12 --> 00:39:15
that's the problem we're currently

00:39:13 --> 00:39:17
trying to

00:39:14 --> 00:39:18
puzzle together.

00:39:16 --> 00:39:19
Um

00:39:17 --> 00:39:21
And, you know, it's going to be some

00:39:18 --> 00:39:21
of all of that. I think there's

00:39:20 --> 00:39:23
going to be some large-scale

00:39:20 --> 00:39:25
distribution partnerships.

00:39:22 --> 00:39:27
Many one-off coffee shops. Well,

00:39:24 --> 00:39:28
actually, one thing that we will

00:39:26 --> 00:39:29
uh we will launch soon, and the team is

00:39:27 --> 00:39:31
going to hate that I'm saying this now,

00:39:28 --> 00:39:33
but uh it's going to be

00:39:30 --> 00:39:33
Orb on Demand. Sounds good.

00:39:32 --> 00:39:36
>> [laughter]

00:39:32 --> 00:39:38
>> Orb on Demand. Yeah. Send it send it

00:39:35 --> 00:39:41
here. Just because actually it's such a

00:39:37 --> 00:39:42
gnarly problem to

00:39:40 --> 00:39:44
you know, to get an Orb to truly

00:39:41 --> 00:39:46
everyone. You know, [clears throat] it's

00:39:43 --> 00:39:48
like to to get that, the cap backs is

00:39:45 --> 00:39:51
insane. Yeah. So, it's actually it's

00:39:47 --> 00:39:53
actually much cheaper and easier to just

00:39:50 --> 00:39:55
put an orb on a motorbike

00:39:52 --> 00:39:57
and drive it to you. As as as crazy

00:39:54 --> 00:39:59
[laughter]

00:39:56 --> 00:40:01
as as crazy as it sounds. So, like in in

00:39:58 --> 00:40:03
places like the Bay Area or New York,

00:40:00 --> 00:40:05
you will just be able to say like,

00:40:02 --> 00:40:07
"Yeah, I want to verify now." Wow. And

00:40:04 --> 00:40:09
50 minutes later, there's an orb comes

00:40:06 --> 00:40:12
to you to your work and you can you can

00:40:08 --> 00:40:13
verify. And uh Did you ever think about

00:40:11 --> 00:40:16
uh I don't know, this is probably a

00:40:12 --> 00:40:18
terrible idea, but um having kind of

00:40:15 --> 00:40:19
different levels like

00:40:17 --> 00:40:22
we know you're a

00:40:18 --> 00:40:24
unique human or like hey, this guy may

00:40:21 --> 00:40:26
be a unique human cuz he's done it on

00:40:23 --> 00:40:28
his iPhone and it's not quite the the

00:40:25 --> 00:40:30
same, but Yeah, yeah, we have we have

00:40:27 --> 00:40:33
that. So, actually we um

00:40:29 --> 00:40:34
you know, generally we just have to

00:40:32 --> 00:40:36
you know, we have the principle of you

00:40:33 --> 00:40:38
know, what whatever could be useful for

00:40:35 --> 00:40:39
this problem, we just build it.

00:40:37 --> 00:40:41
And

00:40:38 --> 00:40:43
and uh

00:40:40 --> 00:40:46
And so, we we have something called Face

00:40:42 --> 00:40:48
Check that that does that. So, it uses

00:40:45 --> 00:40:50
face uh from the camera. It

00:40:47 --> 00:40:51
still uses multi-party computation what

00:40:49 --> 00:40:55
we've built for the entire system, so

00:40:50 --> 00:40:57
you're still anonymous. Mhm. Um and you

00:40:54 --> 00:41:00
know, it of course reaches way less

00:40:56 --> 00:41:02
accuracy. So, uh you know, as a system

00:40:59 --> 00:41:03
you will know something along the lines

00:41:01 --> 00:41:06
of well,

00:41:02 --> 00:41:08
this is you know, at least one person

00:41:05 --> 00:41:10
cannot create 100 accounts. Maybe it's

00:41:07 --> 00:41:11
just 10 or 20. So, like it's like a at

00:41:09 --> 00:41:13
least it's some measure of rate

00:41:10 --> 00:41:14
limiting.

00:41:12 --> 00:41:16
Um

00:41:13 --> 00:41:18
and I do think just as a disclaimer, I

00:41:15 --> 00:41:19
think with deep fakes and you know, all

00:41:17 --> 00:41:21
this stuff, I think that will

00:41:18 --> 00:41:23
fundamentally break. So, it's a Mhm.

00:41:20 --> 00:41:24
temp It's it's a it's a temporary

00:41:22 --> 00:41:26
solution that I think can get us to

00:41:23 --> 00:41:29
scale. That's kind of how I think about

00:41:25 --> 00:41:32
it. Uh we also actually use government

00:41:28 --> 00:41:33
IDs uh similarly where like we we use a

00:41:31 --> 00:41:36
but just the ones that have an NFC ID

00:41:32 --> 00:41:39
chip. Mhm. Um and we use multi-party

00:41:36 --> 00:41:41
computation, so you remain anonymous and

00:41:38 --> 00:41:42
platforms can choose to use that as

00:41:40 --> 00:41:44
well. Uh but no one really did. It's

00:41:41 --> 00:41:45
just some of them they have this like

00:41:43 --> 00:41:46
very negative stigma, which I think

00:41:44 --> 00:41:48
makes sense.

00:41:45 --> 00:41:51
>> Yeah. Um but yeah, basically whatever

00:41:47 --> 00:41:52
could do it Yeah.

00:41:50 --> 00:41:53
by any means necessary.

00:41:51 --> 00:41:54
>> That's right. Yeah.

00:41:52 --> 00:41:56
I don't know. Well, thanks so much for

00:41:53 --> 00:41:57
coming on the podcast. It's been great.

00:41:55 --> 00:41:59
>> Yeah. Thank you. Thank you. That's

00:41:56 --> 00:41:59
Thanks for having me.

<!-- YOUTUBE_TRANSCRIPT_END -->
