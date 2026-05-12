---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "y0c1yrPDLN8"
title: "Peter Norvig: We Are Seduced by Our Low-Dimensional Metaphors | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=y0c1yrPDLN8"
thumbnail_url: "https://i.ytimg.com/vi/y0c1yrPDLN8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=y0c1yrPDLN8"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-10-01T17:39:23.000Z"
upload_date: "2019-10-01"
duration_seconds: 461
duration_human: "7:41"
view_count: 7078
like_count: 251
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:58:09.352Z"
---

# Peter Norvig: We Are Seduced by Our Low-Dimensional Metaphors | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=y0c1yrPDLN8
- video_id: y0c1yrPDLN8
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-10-01T17:39:23.000Z
- upload_date: 2019-10-01
- duration: 7:41
- view_count: 7078
- like_count: 251
- has_subtitle: true
- language: en
- availability: public
- tags: machine learning, deep learning, explainable ai, adversarial machine learning, machine learning security, gan, adversarial attacks, ian goodfellow, peter norvig, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

This is a clip from a conversation with Peter Norvig from Sep 2019. New full episodes every Mon & Thu and 1-2 new clips or a new non-podcast video on all other days. You can watch the full conversation here: https://www.youtube.com/watch?v=_VPxEcT_Adc
(more links below)

Podcast full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4

Podcasts clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

Podcast website:
https://lexfridman.com/ai

Podcast on iTunes:
https://apple.co/2lwqZIr

Podcast on Spotify:
https://spoti.fi/2nEwCF8

Podcast RSS:
https://lexfridman.com/category/ai/feed/

Note: I select clips with insights from these much longer conversation with the hope of helping make these ideas more accessible and discoverable. Ultimately, this podcast is a small side hobby for me with the goal of sharing and discussing ideas. For now, I post a few clips every Tue & Fri. I did a poll and 92% of people either liked or loved the posting of daily clips, 2% were indifferent, and 6% hated it, some suggesting that I post them on a separate YouTube channel. I hear the 6% and partially agree, so am torn about the whole thing. I tried creating a separate clips channel but the YouTube algorithm makes it very difficult for that channel to grow unless the main channel is already very popular. So for a little while, I'll keep posting clips on the main channel. I ask for your patience and to see these clips as supporting the dissemination of knowledge contained in nuanced discussion. If you enjoy it, consider subscribing, sharing, and commenting.

Peter Norvig is a research director at Google and the co-author with Stuart Russell of the book Artificial Intelligence: A Modern Approach that educated and inspired a whole generation of researchers including myself to get into the field.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:03 --> 00:00:07
[Music]

00:00:07 --> 00:00:12
anytime use noodle networks anytime you

00:00:09 --> 00:00:15
learn from data form representation from

00:00:11 --> 00:00:19
day in an automated way it's not very

00:00:14 --> 00:00:23
explainable as to or it's not

00:00:18 --> 00:00:25
introspective to us humans in terms of

00:00:22 --> 00:00:28
how this neural network sees the world

00:00:24 --> 00:00:31
where why does it succeed so brilliantly

00:00:27 --> 00:00:33
on so many in so many cases and fail so

00:00:30 --> 00:00:37
miserably in surprising ways and small

00:00:32 --> 00:00:40
so what do you think is this is the

00:00:36 --> 00:00:42
future there can simply more data better

00:00:39 --> 00:00:46
data more organized data solve that

00:00:41 --> 00:00:48
problem or is there elements of symbolic

00:00:45 --> 00:00:50
systems they need to be brought in which

00:00:47 --> 00:00:55
are a little bit more explainable yeah

00:00:49 --> 00:00:58
so I prefer to talk about trust and

00:00:54 --> 00:01:00
validation and verification rather than

00:00:57 --> 00:01:03
just about explain ability and then I

00:00:59 --> 00:01:07
think explanations are one tool that you

00:01:02 --> 00:01:09
se towards those goals and I think it

00:01:06 --> 00:01:11
is an important issue that we don't want

00:01:08 --> 00:01:12
o use these systems unless we trust

00:01:10 --> 00:01:14
hem and we want to understand where

00:01:11 --> 00:01:17
they work and where they don't work and

00:01:13 --> 00:01:20
in an explanation can be part of that

00:01:16 --> 00:01:23
right so I apply for loan and I get

00:01:19 --> 00:01:27
denied I want some explanation of why

00:01:22 --> 00:01:29
and you have in Europe we have the GD P

00:01:26 --> 00:01:32
R that says you're required to be able

00:01:28 --> 00:01:35
to get that but on the other hand the

00:01:31 --> 00:01:37
xplanation alone is not enough right so

00:01:34 --> 00:01:40
you know we were used to dealing with

00:01:36 --> 00:01:42
people's and with organizations and

00:01:39 --> 00:01:44
corporations and so on and they can give

00:01:42 --> 00:01:46
you an explanation and you have no

00:01:43 --> 00:01:49
guarantee that that explanation relates

00:01:45 --> 00:01:51
to reality right right so the bank can

00:01:48 --> 00:01:52
tell me well you didn't get the loan

00:01:50 --> 00:01:55
because you didn't have enough

00:01:51 --> 00:01:56
collateral and that may be true or it

00:01:54 --> 00:02:00
may be true that they just didn't like

00:01:55 --> 00:02:02
my religion or or something else I can't

00:01:59 --> 00:02:04
ell from the explanation and that's

00:02:01 --> 00:02:07
true whether the decision was

00:02:03 --> 00:02:10
made by a computer or by a person

00:02:06 --> 00:02:12
so I want more

00:02:09 --> 00:02:14
I do want to have the explanations and I

00:02:11 --> 00:02:17
want to be able to have a conversation

00:02:13 --> 00:02:18
to go back and forth and said well you

00:02:16 --> 00:02:20
gave this explanation but what about

00:02:17 --> 00:02:23
his and what would have happened if

00:02:19 --> 00:02:26
this had happened and what would I need

00:02:22 --> 00:02:28
to change that so I think a conversation

00:02:25 --> 00:02:31
is a better way to think about it than

00:02:27 --> 00:02:34
just an explanation as a single output

00:02:30 --> 00:02:38
and I think we need testing of various

00:02:33 --> 00:02:40
kinds right so in order to know was the

00:02:37 --> 00:02:44
decision really based on my collateral

00:02:39 --> 00:02:46
or was it based on my religion or skin

00:02:43 --> 00:02:48
color or whatever I can't tell if I'm

00:02:45 --> 00:02:51
only looking at my case but if I look

00:02:47 --> 00:02:53
across all the cases then I can detect

00:02:50 --> 00:02:56
he pattern that's right so you want to

00:02:52 --> 00:02:58
have that kind of capability you want to

00:02:55 --> 00:03:00
have these adversarial testing right so

00:02:57 --> 00:03:03
we thought we're doing pretty good at

00:02:59 --> 00:03:06
object recognition in images we said

00:03:02 --> 00:03:08
look we're hats or pretty close to human

00:03:05 --> 00:03:10
level performance on an image net and so

00:03:07 --> 00:03:12
n and then you start seeing these

00:03:09 --> 00:03:15
adversarial images and you say wait a

00:03:11 --> 00:03:18
minute that part is nothing like human

00:03:14 --> 00:03:19
performance you can mess with it really

00:03:17 --> 00:03:21
easily you can mess with it really

00:03:18 --> 00:03:23
easily right and yeah you could do that

00:03:20 --> 00:03:26
o humans too right so in a different

00:03:22 --> 00:03:28
way perhaps right humans don't know what

00:03:25 --> 00:03:30
color the dress was right and so they're

00:03:27 --> 00:03:32
vulnerable to certain attacks that are

00:03:29 --> 00:03:34
different than the attacks on the

00:03:31 --> 00:03:37
machines but the you know the taxol

00:03:33 --> 00:03:38
machines are so striking they really

00:03:36 --> 00:03:41
change the way you think about what

00:03:37 --> 00:03:44
we've done right and the way I think

00:03:40 --> 00:03:48
about it is I think part of the problem

00:03:43 --> 00:03:52
is we're seduced by our low dimensional

00:03:47 --> 00:03:54
metaphors right yeah so you know you

00:03:51 --> 00:03:56
don't like that phrase you look in in a

00:03:53 --> 00:03:59
text book and you say okay now we've

00:03:55 --> 00:04:02
mapped out the space and you know a cat

00:03:58 --> 00:04:04
is here and dog is here and maybe

00:04:01 --> 00:04:06
there's a tiny little spot in the middle

00:04:03 --> 00:04:08
where you can't tell the difference but

00:04:05 --> 00:04:11
mostly we've got it all covered and if

00:04:07 --> 00:04:14
you believe that metaphor then you say

00:04:10 --> 00:04:15
well we're nearly there and you know

00:04:13 --> 00:04:17
there's only gonna be a couple of

00:04:14 --> 00:04:18
adversarial images but I think that's

00:04:16 --> 00:04:21
the wrong metaphor and what you should

00:04:17 --> 00:04:23
really say is it's not a 2d flat space

00:04:20 --> 00:04:24
that we've got mostly covered it's a

00:04:22 --> 00:04:27
million

00:04:23 --> 00:04:30
mentioned space and cat is this string

00:04:26 --> 00:04:32
that goes out in this crazy bath and if

00:04:29 --> 00:04:34
you step a little bit off the path in

00:04:31 --> 00:04:36
any direction you're in nowheres land

00:04:33 --> 00:04:38
you don't know what's gonna happen

00:04:35 --> 00:04:42
and so I think that's where we are and

00:04:37 --> 00:04:44
now we've got to deal with that so it

00:04:41 --> 00:04:47
wasn't so much an explanation but it was

00:04:43 --> 00:04:48
an understanding of what the models are

00:04:46 --> 00:04:50
and what they're doing and now we can

00:04:47 --> 00:04:52
start exploring how do you fix that

00:04:49 --> 00:04:54
yeah validating that robustness of the

00:04:51 --> 00:04:58
system so onbut take you back to the

00:04:53 --> 00:05:00
this this word trust do you think we're

00:04:57 --> 00:05:07
a little too hard on our robots in terms

00:04:59 --> 00:05:07
of the standards we apply so you know of

00:05:06 --> 00:05:11
there's a dance there's a there's a

00:05:09 --> 00:05:14
dance and nonverbal and verbal

00:05:10 --> 00:05:16
communication between humans you know if

00:05:13 --> 00:05:17
we apply the same kind of standard in

00:05:15 --> 00:05:19
terms of humans

00:05:16 --> 00:05:22
you know we trust each other pretty

00:05:18 --> 00:05:24
quickly I you know you and I haven't met

00:05:21 --> 00:05:27
before and there's some degree of trust

00:05:23 --> 00:05:30
yeah right that nothing's gonna go crazy

00:05:26 --> 00:05:33
wrong and yet to AI when we look at AI

00:05:29 --> 00:05:36
systems or we seem to approach the

00:05:32 --> 00:05:39
skepticism always always you know it's

00:05:35 --> 00:05:42
like they have to prove through a lot of

00:05:38 --> 00:05:44
hard work that they're even worthy of

00:05:41 --> 00:05:45
even inkling of our trust they would do

00:05:43 --> 00:05:48
what do you what do you think about that

00:05:44 --> 00:05:49
how do we break that barrier close that

00:05:47 --> 00:05:53
gap I think that's right I think that's

00:05:48 --> 00:05:56
a big issue just listening my friend

00:05:52 --> 00:05:59
Marc Moffitt is a naturalist and he says

00:05:55 --> 00:06:02
the most amazing thing about humans is

00:05:58 --> 00:06:07
that you can walk into a coffee shop or

00:06:01 --> 00:06:08
a busy street in a city and there's lots

00:06:06 --> 00:06:10
of people around you that you've never

00:06:07 --> 00:06:12
met before and you don't kill each other

00:06:09 --> 00:06:14
yeah

00:06:11 --> 00:06:17
e says chimpanzees cannot do that yeah

00:06:13 --> 00:06:19
right right if if you pansies in a

00:06:16 --> 00:06:22
situation where here's some that are

00:06:19 --> 00:06:22
from my tribe

00:06:22 --> 00:06:26
things happen fresh in your coffee shop

00:06:24 --> 00:06:29
this delicious food around you know yeah

00:06:25 --> 00:06:32
but but we humans have figured that

00:06:28 --> 00:06:33
out yeah right and you know for the most

00:06:31 --> 00:06:36
part for the most part we still go to

00:06:32 --> 00:06:37
war we still do terrible things but for

00:06:35 --> 00:06:40
the most part we've learned to trust

00:06:36 --> 00:06:44
each other and live together so that's

00:06:39 --> 00:06:48
gonna be important for our AI systems as

00:06:43 --> 00:06:54
well and I also I think in a lot of the

00:06:47 --> 00:06:56
mphasis is on AI but in many cases yeah

00:06:53 --> 00:06:58
as part of the technology but isn't

00:06:55 --> 00:07:01
really the main thing so a lot of what

00:06:57 --> 00:07:05
we've seen is more due to communications

00:07:00 --> 00:07:07
technology than AI ta AI technology yeah

00:07:04 --> 00:07:09
you want to make these good decisions

00:07:06 --> 00:07:12
but the reason we're able to have any

00:07:08 --> 00:07:14
kind of system at all is we've got the

00:07:11 --> 00:07:17
communications so that we're collecting

00:07:13 --> 00:07:19
the data and so that we can reach lots

00:07:16 --> 00:07:21
of people around the world I think

00:07:18 --> 00:07:23
that's a bigger change that we're

00:07:20 --> 00:07:23
dealing with

00:07:27 --> 00:07:30
you

<!-- YOUTUBE_TRANSCRIPT_END -->
