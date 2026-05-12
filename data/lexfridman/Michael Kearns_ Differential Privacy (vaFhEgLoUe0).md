---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "vaFhEgLoUe0"
title: "Michael Kearns: Differential Privacy"
video_url: "https://www.youtube.com/watch?v=vaFhEgLoUe0"
thumbnail_url: "https://i.ytimg.com/vi/vaFhEgLoUe0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=vaFhEgLoUe0"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-11-21T14:53:40.000Z"
upload_date: "2019-11-21"
duration_seconds: 461
duration_human: "7:41"
view_count: 6158
like_count: 188
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:11:11.139Z"
---

# Michael Kearns: Differential Privacy

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=vaFhEgLoUe0
- video_id: vaFhEgLoUe0
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-11-21T14:53:40.000Z
- upload_date: 2019-11-21
- duration: 7:41
- view_count: 6158
- like_count: 188
- has_subtitle: true
- language: en
- availability: public
- tags: Differential Privacy, privacy, security, machine learning, svm, private algorithms, facebook, michael kearns, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

Full episode with Michael Kearns (Nov 2019): https://www.youtube.com/watch?v=AzdxbzHtjgs
New clips channel (Lex Clips): https://www.youtube.com/lexclips
Once it reaches 20,000 subscribers, I'll start posting the clips there instead. 
(more links below)

For now, new full episodes are released once or twice a week and 1-2 new clips or a new non-podcast video is released on all other days.

Clip from full episode: https://www.youtube.com/watch?v=AzdxbzHtjgs If you enjoy these clips, subscribe to the new clips channel (Lex Clips): https://www.youtube.com/lexclips Once it reaches 20,000 subscribers, I'll start posting the clips there instead. For now, new full episodes are released once or twice a week and 1-2 new clips or a new non-podcast video is released on all other days.
(more links below)

Podcast full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4

Podcasts clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

Podcast website:
https://lexfridman.com/ai

Podcast on Apple Podcasts (iTunes):
https://apple.co/2lwqZIr

Podcast on Spotify:
https://spoti.fi/2nEwCF8

Podcast RSS:
https://lexfridman.com/category/ai/feed/

Michael Kearns is a professor at University of Pennsylvania and a co-author of the new book Ethical Algorithm that is the focus of much of our conversation, including algorithmic fairness, bias, privacy, and ethics in general. But, that is just one of many fields that Michael is a world-class researcher in, some of which we touch on quickly including learning theory or theoretical foundations of machine learning, game theory, algorithmic trading, quantitative finance, computational social science, and more.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:08
so is there hope for any kind of privacy

00:00:04 --> 00:00:11
in a world where a few likes can can

00:00:07 --> 00:00:13
identify you so there is differential

00:00:10 --> 00:00:16
privacy right what is differential

00:00:12 --> 00:00:18
privacy basically is a kind

00:00:15 --> 00:00:20
of alternate much stronger notion of

00:00:17 --> 00:00:24
privacy than these anonymization ideas

00:00:19 --> 00:00:28
and it you know it's a technical

00:00:23 --> 00:00:31
definition but like the spirit of it is

00:00:27 --> 00:00:34
we we compared to two alternate worlds

00:00:30 --> 00:00:37
okay so let's suppose I'm a researcher

00:00:33 --> 00:00:38
and I want to do you know I there's a

00:00:36 --> 00:00:41
database of medical records and one of

00:00:37 --> 00:00:44
them's yours and I want to use that

00:00:40 --> 00:00:45
database of medical records to build a

00:00:43 --> 00:00:48
predictive model for some disease so

00:00:44 --> 00:00:50
based on people's symptoms and test

00:00:47 --> 00:00:52
results and the like I want to you know

00:00:49 --> 00:00:54
build a probably a model predicting the

00:00:51 --> 00:00:56
probability two people have disease so

00:00:53 --> 00:00:58
you know this is the type of scientific

00:00:55 --> 00:01:00
research that we would like to be

00:00:57 --> 00:01:03
allowed to continue and in differential

00:00:59 --> 00:01:04
privacy you act ask a very particular

00:01:02 --> 00:01:08
counterfactual question

00:01:03 --> 00:01:13
we basically compare two alternatives

00:01:07 --> 00:01:16
one is when I do this I build this model

00:01:12 --> 00:01:18
on the database of medical records

00:01:15 --> 00:01:22
including your medical record and the

00:01:17 --> 00:01:25
other one is where I do the same

00:01:21 --> 00:01:28
xercise with the same database with

00:01:24 --> 00:01:30
just your medical record removed so

00:01:27 --> 00:01:33
basically you know it's two databases

00:01:29 --> 00:01:36
one with n records in it and one with n

00:01:32 --> 00:01:38
minus one records in it the n minus one

00:01:35 --> 00:01:40
records are the same and the only one

00:01:37 --> 00:01:44
that's missing in the second case is

00:01:39 --> 00:01:48
your medical record so differential

00:01:43 --> 00:01:53
privacy basically says that any harms

00:01:47 --> 00:01:56
that might come to you from the analysis

00:01:52 --> 00:01:59
in which your data was included are

00:01:55 --> 00:02:01
ssentially Munir ly identical to the

00:01:58 --> 00:02:03
harms that would have come to you if the

00:02:00 --> 00:02:06
same analysis had done been done without

00:02:02 --> 00:02:08
your medical record included so in other

00:02:05 --> 00:02:10
words this doesn't say that bad things

00:02:07 --> 00:02:13
cannot happen to you as a result of data

00:02:09 --> 00:02:15
nalysis it just says that these bad

00:02:12 --> 00:02:15
things were going to happen to you

00:02:14 --> 00:02:18
already

00:02:14 --> 00:02:20
even if your data wasn't included and to

00:02:17 --> 00:02:23
give a very concrete example right you

00:02:19 --> 00:02:26
know you know like we discussed at some

00:02:22 --> 00:02:27
length the the study that you know the

00:02:25 --> 00:02:29
in the 50s that was done that created

00:02:26 --> 00:02:32
the that established the link between

00:02:28 --> 00:02:34
smoking and lung cancer and we make the

00:02:31 --> 00:02:37
point that like well if your data was

00:02:33 --> 00:02:38
used in that analysis and you know the

00:02:36 --> 00:02:40
world kind of knew that you were a

00:02:37 --> 00:02:42
smoker because you know there was no

00:02:39 --> 00:02:46
stigma associated with smoking before

00:02:41 --> 00:02:47
that those findings real harm might have

00:02:45 --> 00:02:49
come to you as a result of that study

00:02:46 --> 00:02:52
that your data was included in in

00:02:48 --> 00:02:54
particular your insurer now might have a

00:02:51 --> 00:02:56
higher posterior belief that you might

00:02:53 --> 00:02:59
have lung cancer and raise your premiums

00:02:55 --> 00:03:02
o you've suffered economic damage but

00:02:58 --> 00:03:05
he point is is that if the same

00:03:01 --> 00:03:08
analysis been done without with all the

00:03:04 --> 00:03:09
other n minus-1 medical records and just

00:03:07 --> 00:03:12
yours missing the outcome would have

00:03:08 --> 00:03:15
been the same your your data was an

00:03:11 --> 00:03:17
idiosyncratic eleum crucial to

00:03:14 --> 00:03:18
establishing the link between smoking

00:03:16 --> 00:03:21
and lung cancer because the link between

00:03:17 --> 00:03:23
smoking and lung cancer is like a fact

00:03:20 --> 00:03:25
about the world that can be discovered

00:03:22 --> 00:03:28
with any sufficiently large database of

00:03:24 --> 00:03:30
medical records but that's a very low

00:03:27 --> 00:03:33
value of harm yes so that's showing that

00:03:29 --> 00:03:35
very little harm is done great but how

00:03:32 --> 00:03:38
hat is the mechanism of differential

00:03:34 --> 00:03:39
privacy so that's the kind of beautiful

00:03:37 --> 00:03:42
statement of it well what's the

00:03:38 --> 00:03:44
mechanism by which privacy's preserve

00:03:41 --> 00:03:47
yeah so it's it's basically by adding

00:03:43 --> 00:03:50
noise to computations right so the basic

00:03:46 --> 00:03:52
idea is that every differentially

00:03:49 --> 00:03:54
private algorithm first of all or every

00:03:51 --> 00:03:57
good differentially private al but never

00:03:53 --> 00:04:00
useful one is a probabilistic algorithm

00:03:56 --> 00:04:02
so it doesn't on a given input if you

00:03:59 --> 00:04:04
gave the Elven the same input multiple

00:04:01 --> 00:04:06
times and we would give different

00:04:03 --> 00:04:09
outputs each time from some distribution

00:04:05 --> 00:04:11
and the way you achieve differential

00:04:08 --> 00:04:14
privacy algorithmically is by kind of

00:04:10 --> 00:04:17
carefully and tastefully adding noise to

00:04:13 --> 00:04:18
a computation in the right places and

00:04:16 --> 00:04:21
you know to give a very concrete example

00:04:17 --> 00:04:24
if I want to compute the average of a

00:04:20 --> 00:04:26
set of numbers right the non private way

00:04:23 --> 00:04:29
of doing that is to take those numbers

00:04:25 --> 00:04:29
and average them and release like a new

00:04:28 --> 00:04:33
mayor

00:04:28 --> 00:04:35
we precise value for the average okay in

00:04:32 --> 00:04:37
differential privacy you wouldn't do

00:04:34 --> 00:04:40
that you would first compute that

00:04:36 --> 00:04:42
average to numerical Precision's and

00:04:39 --> 00:04:44
then you'd add some noise to it right

00:04:41 --> 00:04:47
you'd add some kind of a zero mean you

00:04:43 --> 00:04:50
know Gaussian or exponential noise to it

00:04:46 --> 00:04:53
so that the actual value you output

00:04:49 --> 00:04:56
right is not the exact mean but it'll be

00:04:52 --> 00:04:58
close to the mean but it'll be close the

00:04:55 --> 00:05:01
noise the you add will sort of prove

00:04:57 --> 00:05:04
that nobody can kind of reverse engineer

00:05:00 --> 00:05:08
any particular value that went into the

00:05:03 --> 00:05:12
average so noise noise is the Savior how

00:05:07 --> 00:05:15
many algorithms can be aided by miam by

00:05:11 --> 00:05:18
adding noise yeah so I'm a relatively

00:05:14 --> 00:05:19
recent member of the differential

00:05:17 --> 00:05:22
privacy community my co-author Aaron

00:05:18 --> 00:05:23
Roth is you know really one of the

00:05:21 --> 00:05:25
founders of the field and has done a

00:05:22 --> 00:05:27
great deal of work and I've learned a

00:05:24 --> 00:05:29
tremendous amount working with him on it

00:05:26 --> 00:05:31
growing up field already yeah but it now

00:05:28 --> 00:05:32
it's pretty mature but I must admit the

00:05:30 --> 00:05:34
first time I saw the definition of

00:05:31 --> 00:05:37
deferential privacy my reaction was like

00:05:33 --> 00:05:39
wow that is a clever definition and it's

00:05:36 --> 00:05:42
really making very strong promises and

00:05:38 --> 00:05:45
my you know you know at first saw the

00:05:41 --> 00:05:47
definition in much earlier days and my

00:05:44 --> 00:05:49
first reaction was like well my worried

00:05:46 --> 00:05:50
about this definition would be that it's

00:05:48 --> 00:05:53
a great definition of privacy but that

00:05:49 --> 00:05:54
it'll be so restrictive that we won't

00:05:52 --> 00:05:57
really be able to use it like you know

00:05:53 --> 00:05:58
e won't be able to do compute many

00:05:56 --> 00:06:00
things in a differentially private way

00:05:57 --> 00:06:02
so that that's one of the great

00:05:59 --> 00:06:04
successes of the field I think isn't

00:06:01 --> 00:06:08
showing that the opposite is true and

00:06:03 --> 00:06:11
that you know most things that we know

00:06:07 --> 00:06:13
how to compute absent any privacy

00:06:10 --> 00:06:15
considerations can be computed in a

00:06:12 --> 00:06:17
differentially private way so for

00:06:14 --> 00:06:19
example pretty much all of statistics

00:06:16 --> 00:06:21
and machine learning can be done

00:06:18 --> 00:06:24
differentially privately so pick your

00:06:20 --> 00:06:26
favorite machine learning algorithm at

00:06:23 --> 00:06:29
propagation and neural networks you know

00:06:25 --> 00:06:32
card for decision trees support vector

00:06:28 --> 00:06:34
machines boosting you name it as well as

00:06:31 --> 00:06:36
classic hypothesis testing and the like

00:06:33 --> 00:06:38
and statistics

00:06:35 --> 00:06:40
none of those algorithms are

00:06:37 --> 00:06:40
differentially private in their original

00:06:39 --> 00:06:43
form

00:06:39 --> 00:06:45
all of them have mod

00:06:42 --> 00:06:47
vacations that add noise to the

00:06:44 --> 00:06:50
computation in different places in

00:06:46 --> 00:06:52
different ways that achieve differential

00:06:49 --> 00:06:55
privacy so this really means that to the

00:06:51 --> 00:06:58
xtent that you know we've become a you

00:06:54 --> 00:07:01
know a scientific community very

00:06:57 --> 00:07:02
dependent on the use of machine learning

00:07:00 --> 00:07:07
and statistical modeling and data

00:07:01 --> 00:07:09
nalysis we really do have a path to

00:07:06 --> 00:07:11
kind of provide privacy guarantees to

00:07:08 --> 00:07:15
those methods and and so we can still

00:07:10 --> 00:07:18
you know enjoy the benefits of kind of

00:07:14 --> 00:07:21
the data science era while providing you

00:07:17 --> 00:07:23
know rather robust privacy guarantees to

00:07:20 --> 00:07:23
individuals

00:07:28 --> 00:07:31
you

<!-- YOUTUBE_TRANSCRIPT_END -->
