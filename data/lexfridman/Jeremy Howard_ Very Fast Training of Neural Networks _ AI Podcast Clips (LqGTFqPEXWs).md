---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "LqGTFqPEXWs"
title: "Jeremy Howard: Very Fast Training of Neural Networks | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=LqGTFqPEXWs"
thumbnail_url: "https://i.ytimg.com/vi/LqGTFqPEXWs/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=LqGTFqPEXWs"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-10-08T13:49:47.000Z"
upload_date: "2019-10-08"
duration_seconds: 286
duration_human: "4:46"
view_count: 10053
like_count: 383
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:57:02.084Z"
---

# Jeremy Howard: Very Fast Training of Neural Networks | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=LqGTFqPEXWs
- video_id: LqGTFqPEXWs
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-10-08T13:49:47.000Z
- upload_date: 2019-10-08
- duration: 4:46
- view_count: 10053
- like_count: 383
- has_subtitle: true
- language: en
- availability: public
- tags: machine learning, deep learning, fastai, neural networks, learning rate, super convergence, jeremy howard, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

This is a clip from a conversation with Jeremy Howard from Aug 2019. New full episodes every Mon & Thu and 1-2 new clips or a new non-podcast video on all other days. You can watch the full conversation here: https://www.youtube.com/watch?v=J6XcP4JOHmk
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

Jeremy Howard is the founder of fast.ai, a research institute dedicated to make deep learning more accessible. He is also a Distinguished Research Scientist at the University of San Francisco, a former president of Kaggle as well a top-ranking competitor there, and in general, he's a successful entrepreneur, educator, research, and an inspiring personality in the AI community.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:06
there's some magic on learning rate that

00:00:03 --> 00:00:08
you played around with yeah interesting

00:00:05 --> 00:00:11
yeah so this is all work that came from

00:00:07 --> 00:00:14
a guy called Leslie Smith Leslie's a

00:00:10 --> 00:00:18
researcher who like us cares a lot about

00:00:13 --> 00:00:20
just the practicalities of training

00:00:17 --> 00:00:22
neural networks quickly and accurately

00:00:19 --> 00:00:27
which i think is what everybody should

00:00:21 --> 00:00:28
care about but almost nobody does and he

00:00:26 --> 00:00:30
discovered something very interesting

00:00:27 --> 00:00:32
which he calls super convergence which

00:00:29 --> 00:00:34
is there are certain networks that with

00:00:31 --> 00:00:36
certain settings of high parameters

00:00:33 --> 00:00:39
could suddenly be trained 10 times

00:00:35 --> 00:00:44
faster by using a 10 times higher

00:00:38 --> 00:00:49
learning rate now no one published that

00:00:43 --> 00:00:51
paper because it's not an area of kind

00:00:48 --> 00:00:53
of active research in the academic world

00:00:50 --> 00:00:56
no academics recognized this is

00:00:52 --> 00:00:59
important and also deep learning in

00:00:55 --> 00:01:01
academia is not considered a

00:00:58 --> 00:01:03
experimental science so unlike in

00:01:00 --> 00:01:06
physics where you could say like I just

00:01:02 --> 00:01:08
saw as a subatomic particle do something

00:01:05 --> 00:01:10
which the theory doesn't explain you

00:01:07 --> 00:01:12
could publish that without an

00:01:09 --> 00:01:14
explanation and then in the next 60

00:01:11 --> 00:01:14
years people can try to work out how to

00:01:13 --> 00:01:16
explain it

00:01:13 --> 00:01:19
we don't allow this in the deep learning

00:01:15 --> 00:01:22
world so it's it's literally impossible

00:01:18 --> 00:01:24
for Leslie to publish a paper that says

00:01:21 --> 00:01:26
I've just seen something amazing happen

00:01:23 --> 00:01:27
this thing trained ten times faster than

00:01:25 --> 00:01:30
it should have I don't know why

00:01:26 --> 00:01:31
and so the reviewers were like we can't

00:01:29 --> 00:01:33
publish that because you don't know why

00:01:30 --> 00:01:35
so anyway that's important to pause on

00:01:32 --> 00:01:37
because there's so many discoveries that

00:01:34 --> 00:01:39
would need to start like that every

00:01:36 --> 00:01:42
other scientific field I know of

00:01:38 --> 00:01:44
work so that way I don't know why ours

00:01:41 --> 00:01:48
is uniquely disinterested

00:01:43 --> 00:01:50
in publishing unexplained experimental

00:01:47 --> 00:01:55
results but there it is so it wasn't

00:01:49 --> 00:01:57
published having said that I read a lot

00:01:55 --> 00:01:59
more unpublished papers and published

00:01:56 --> 00:02:01
papers because that's where you find the

00:01:58 --> 00:02:05
interesting insights so I absolutely

00:02:00 --> 00:02:09
read this paper and I was just like this

00:02:04 --> 00:02:12
astonishingly mind-blowing and weird

00:02:08 --> 00:02:14
and awesome and like why isn't everybody

00:02:11 --> 00:02:15
only talking about this because like if

00:02:13 --> 00:02:17
you can train these things ten times

00:02:14 --> 00:02:19
faster they also generalize better

00:02:16 --> 00:02:21
because your your doing less epochs

00:02:18 --> 00:02:23
which means you look at the data less

00:02:20 --> 00:02:26
you get better accuracy so I've been

00:02:22 --> 00:02:29
kind of studying that ever since and

00:02:25 --> 00:02:32
eventually Leslie kind of figured out a

00:02:28 --> 00:02:34
lot of how to get it's done and we added

00:02:31 --> 00:02:36
minor tweaks and a big part of the trick

00:02:33 --> 00:02:39
is starting at a very low learning rate

00:02:35 --> 00:02:41
very gradually increasing it so as

00:02:38 --> 00:02:43
you're training your model you would

00:02:40 --> 00:02:44
take very small steps at the start and

00:02:42 --> 00:02:46
it gradually makes them bigger and

00:02:43 --> 00:02:47
troll eventually you're

00:02:45 --> 00:02:51
taking much bigger steps than anybody

00:02:46 --> 00:02:53
thought as possible there's a few other

00:02:50 --> 00:02:55
little tricks to make it work but ever

00:02:52 --> 00:02:57
it basically we can reliable to get

00:02:54 --> 00:02:59
super convergence and so for the drawing

00:02:56 --> 00:03:01
bench thing we were using just much

00:02:58 --> 00:03:03
igher learning rates than people

00:03:00 --> 00:03:06
xpected to work what do you think the

00:03:02 --> 00:03:07
future of I mean makes so much sense for

00:03:05 --> 00:03:09
that to be a critical hyper parameter

00:03:06 --> 00:03:12
learning rate that you very what do you

00:03:08 --> 00:03:15
think the future of learning rate magic

00:03:11 --> 00:03:17
looks like well there's been a lot of

00:03:14 --> 00:03:19
great work in the last 12 months in this

00:03:16 --> 00:03:21
area it's and people are increasingly

00:03:18 --> 00:03:23
realizing that up to might like we just

00:03:20 --> 00:03:26
have no idea really how optimizers work

00:03:22 --> 00:03:28
and the combination of weight decay

00:03:25 --> 00:03:30
which is how we regularize optimizers

00:03:27 --> 00:03:33
and the learning rate and then other

00:03:29 --> 00:03:35
things like the epsilon we use in in the

00:03:32 --> 00:03:38
atom optimizer they all work together in

00:03:34 --> 00:03:40
weird ways and different parts of the

00:03:37 --> 00:03:42
model this is another thing we've done a

00:03:39 --> 00:03:44
lot of work on is research into how

00:03:41 --> 00:03:46
different parts of the model should be

00:03:43 --> 00:03:48
trained at different rates in different

00:03:45 --> 00:03:50
ways so we do something we call

00:03:47 --> 00:03:51
discriminative learning rates which is

00:03:49 --> 00:03:55
really important particularly for

00:03:50 --> 00:03:56
transfer learning so really I think in

00:03:54 --> 00:03:57
the last 12 months a lot of people have

00:03:55 --> 00:03:59
realized that all this stuff is

00:03:56 --> 00:04:01
important there's been a lot of great

00:03:58 --> 00:04:06
work coming out and we're starting to

00:04:00 --> 00:04:08
see algorithms here which have very very

00:04:05 --> 00:04:10
few dials if any that you have to touch

00:04:07 --> 00:04:12
so like that I think what's gonna happen

00:04:09 --> 00:04:14
is the idea of a learning rate well it

00:04:11 --> 00:04:16
almost already has disappeared in the

00:04:13 --> 00:04:19
latest research and instead it's just

00:04:15 --> 00:04:23
like you know we we know enough about

00:04:18 --> 00:04:25
how to interpret the gradients and the

00:04:22 --> 00:04:29
change of gradients we see to know how

00:04:24 --> 00:04:29
to set every parameter you can't wait it

00:04:33 --> 00:04:36
you

<!-- YOUTUBE_TRANSCRIPT_END -->
