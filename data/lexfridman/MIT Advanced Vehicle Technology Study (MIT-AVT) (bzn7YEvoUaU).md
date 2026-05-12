---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "bzn7YEvoUaU"
title: "MIT Advanced Vehicle Technology Study (MIT-AVT)"
video_url: "https://www.youtube.com/watch?v=bzn7YEvoUaU"
thumbnail_url: "https://i.ytimg.com/vi/bzn7YEvoUaU/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=bzn7YEvoUaU"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-03-26T18:18:39.000Z"
upload_date: "2018-03-26"
duration_seconds: 152
duration_human: "2:32"
view_count: 35667
like_count: 693
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:18:25.295Z"
---

# MIT Advanced Vehicle Technology Study (MIT-AVT)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=bzn7YEvoUaU
- video_id: bzn7YEvoUaU
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-03-26T18:18:39.000Z
- upload_date: 2018-03-26
- duration: 2:32
- view_count: 35667
- like_count: 693
- has_subtitle: true
- language: en
- availability: public
- tags: mit, tesla, volvo, nds, driving, human factors, deep learning, computer vision, data, research, autonomous vehicles, self-driving cars, autopilot, super cruise, driver monitoring, lex mit
- categories: Science & Technology

## Description

MIT-AVT is a large-scale semi-autonomous driving study aimed at understanding how human-AI interaction in driving can be safe and enjoyable. The emphasis is on objective, data-driven analysis through large-scale real-world driving data collection and deep learning based parsing of that data.

UPDATE: Please note that initial version of the paper through the review process (and this video) referred to this study as the MIT Autonomous Vehicle Technology Study. It was renamed to MIT Advanced Vehicle Technology Study as the scope of our data collection and research efforts broadened to include vehicle technology beyond vehicle autonomy.

Link: https://hcai.mit.edu/avt
Paper: https://arxiv.org/abs/1711.06976

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
as part of the MIT autonomous vehicle

00:00:02 --> 00:00:07
technology study we're instrumenting

00:00:04 --> 00:00:08
cars with various degrees of automation

00:00:06 --> 00:00:11
so let's take a look at one of those

00:00:07 --> 00:00:14
cars a Tesla Model S and look at our

00:00:10 --> 00:00:16
instrumentation inside the car we have

00:00:13 --> 00:00:19
three cameras one is looking at the

00:00:15 --> 00:00:21
driver's face and that's capturing

00:00:18 --> 00:00:23
things like where the driver is looking

00:00:20 --> 00:00:26
the draws state of the driver the

00:00:22 --> 00:00:30
motional state and also cognitive load

00:00:25 --> 00:00:32
we have a camera looking at the driver's

00:00:29 --> 00:00:34
body a fish lens camera that's capturing

00:00:31 --> 00:00:36
the entire body of the driver including

00:00:33 --> 00:00:38
hands and that's giving you information

00:00:35 --> 00:00:41
about whether the hands are off wheel

00:00:37 --> 00:00:43
whether the body is aligned and further

00:00:40 --> 00:00:45
supplementary information about the

00:00:42 --> 00:00:48
state of the driver that the face camera

00:00:44 --> 00:00:50
provides and finally there's a forward-

00:00:47 --> 00:00:52
facing camera attached to the windshield

00:00:49 --> 00:00:53
that's looking at the forward roadway

00:00:51 --> 00:00:55
and it's capturing everything in the

00:00:52 --> 00:00:57
xternal environment such as the

00:00:54 --> 00:01:00
vehicles the lanes and other

00:00:56 --> 00:01:02
characteristics of the road having these

00:00:59 --> 00:01:04
three cameras in the car allows us to

00:01:01 --> 00:01:07
study driver behavior and interaction

00:01:04 --> 00:01:09
with automation so the driver facing

00:01:06 --> 00:01:11
camera looking at the face a camera

00:01:08 --> 00:01:14
looking at the body and a camera looking

00:01:10 --> 00:01:16
at the outside environment allows us to

00:01:13 --> 00:01:19
understand over hundreds of thousands of

00:01:15 --> 00:01:21
miles of real world driving how people

00:01:18 --> 00:01:23
interact with these Technologies how we

00:01:20 --> 00:01:26
can have artificial intelligence systems

00:01:22 --> 00:01:29
play an important role in keeping us

00:01:25 --> 00:01:31
afe and providing an enjoyable

00:01:28 --> 00:01:33
xperience in driving with we have now

00:01:30 --> 00:01:36
to date collected

00:01:32 --> 00:01:38
275,000 M of real world driving and

00:01:35 --> 00:01:41
interaction with autonomous systems in

00:01:37 --> 00:01:44
Tesla Model S vehicles in Land Rover

00:01:40 --> 00:01:46
Evoke vehicles and a Volvo S90 but most

00:01:43 --> 00:01:50
importantly once that data is collected

00:01:45 --> 00:01:52
it's just raw pixels 3.5 billion video

00:01:49 --> 00:01:54
frames of raw pixels we're using

00:01:51 --> 00:01:57
computer vision deep learning methods to

00:01:53 --> 00:01:58
convert those pixels into knowledge into

00:01:56 --> 00:02:00
understanding of what the drivers are

00:01:58 --> 00:02:02
actually doing with these systems that

00:01:59 --> 00:02:04
comes from the face camera that comes

00:02:01 --> 00:02:07
from the body camera and the forward-

00:02:03 --> 00:02:08
facing camera understanding comes from

00:02:06 --> 00:02:10
actually being able to touch every

00:02:07 --> 00:02:14
single one of those frames and convert

00:02:09 --> 00:02:16
hem into behavior of human beings as

00:02:13 --> 00:02:20
they interact with these artificial

00:02:15 --> 00:02:20
intelligence systems

<!-- YOUTUBE_TRANSCRIPT_END -->
