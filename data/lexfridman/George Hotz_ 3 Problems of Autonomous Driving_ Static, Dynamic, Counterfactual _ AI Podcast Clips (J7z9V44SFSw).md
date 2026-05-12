---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "J7z9V44SFSw"
title: "George Hotz: 3 Problems of Autonomous Driving: Static, Dynamic, Counterfactual | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=J7z9V44SFSw"
thumbnail_url: "https://i.ytimg.com/vi/J7z9V44SFSw/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=J7z9V44SFSw"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-09-05T16:05:23.000Z"
upload_date: "2019-09-05"
duration_seconds: 334
duration_human: "5:34"
view_count: 32248
like_count: 757
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:05:15.029Z"
---

# George Hotz: 3 Problems of Autonomous Driving: Static, Dynamic, Counterfactual | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=J7z9V44SFSw
- video_id: J7z9V44SFSw
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-09-05T16:05:23.000Z
- upload_date: 2019-09-05
- duration: 5:34
- view_count: 32248
- like_count: 757
- has_subtitle: true
- language: en
- availability: public
- tags: comma ai, driving, autonomous vehicles, self-driving cars, openpilot, path planning, counterfactual, pedestrians, george hotz, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

This is a clip from a conversation with George Hotz on the Artificial Intelligence podcast. You can watch the full conversation here: http://bit.ly/2YLIPom If you enjoy these, consider subscribing, sharing, and commenting below.

Full episode: http://bit.ly/2YLIPom
Full episodes playlist: http://bit.ly/2EcbaKf
Clips playlist: http://bit.ly/2JYkbfZ
Podcast website: https://lexfridman.com/ai

George Hotz is the founder of Comma.ai, a machine learning based vehicle automation company. He is an outspoken personality in the field of AI and technology in general. He first gained recognition for being the first person to carrier-unlock an iPhone, and since then has done quite a few interesting things at the intersection of hardware and software.

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

00:00:07 --> 00:00:14
so the way you leapfrog right is you

00:00:11 --> 00:00:17
come up with an idea or you take a

00:00:13 --> 00:00:21
direction perhaps secretly that the

00:00:16 --> 00:00:27
other people aren't taking and so cruise

00:00:20 --> 00:00:28
way mo even Aurora no Aurora Zuke's is

00:00:26 --> 00:00:30
the same stack as well they're all the

00:00:27 --> 00:00:32
same codebase even and they're all the

00:00:29 --> 00:00:35
same DARPA urban challenge codebase it's

00:00:31 --> 00:00:36
o the question is do you think there's

00:00:34 --> 00:00:39
a room for brilliance and innovation

00:00:35 --> 00:00:43
there that will change everything like

00:00:38 --> 00:00:46
say okay so I'll give you examples it

00:00:42 --> 00:00:51
could be if revolution and mapping for

00:00:45 --> 00:00:54
example that allow you to map things do

00:00:50 --> 00:00:58
HD maps of the whole world all weather

00:00:53 --> 00:00:58
conditions somehow really well or

00:00:58 --> 00:01:06
evolution is simulation to where the

00:01:03 --> 00:01:09
what you said before becomes

00:01:05 --> 00:01:13
incorrect that kind of thing I knew room

00:01:08 --> 00:01:14
for breakthrough innovation um what I

00:01:12 --> 00:01:17
said before about oh they actually get

00:01:13 --> 00:01:20
he whole thing well I'll say this about

00:01:16 --> 00:01:21
we divide driving into three problems

00:01:19 --> 00:01:23
and I actually haven't solved the third

00:01:20 --> 00:01:25
yet but I haven't idea how to do it so

00:01:22 --> 00:01:26
there's the static the static driving

00:01:24 --> 00:01:28
problem is assuming you are the only car

00:01:26 --> 00:01:30
on the road right right and this problem

00:01:27 --> 00:01:33
can be solved with 100% with mapping and

00:01:29 --> 00:01:35
localization this is why farms work the

00:01:32 --> 00:01:36
way they do if all you have to deal with

00:01:34 --> 00:01:38
is the static problem and you can

00:01:35 --> 00:01:39
statically scheduled your machines right

00:01:37 --> 00:01:41
it's the same as like statically

00:01:38 --> 00:01:42
scheduling processes you can statically

00:01:40 --> 00:01:44
scheduled your tractors to never hit

00:01:41 --> 00:01:45
each other on their paths all right

00:01:43 --> 00:01:47
because they're you know the speed they

00:01:44 --> 00:01:50
go at so so that's the static driving

00:01:46 --> 00:01:53
problem Maps only helps you with the

00:01:49 --> 00:01:55
static driving problem yeah the question

00:01:52 --> 00:01:57
about static driving yeah you just made

00:01:54 --> 00:02:03
it sound like it's really easy it's real

00:01:56 --> 00:02:05
easy how easy how well because the whole

00:02:02 --> 00:02:07
drifting out of lane when when Tesla

00:02:04 --> 00:02:10
drifts out of lane is failing on the

00:02:06 --> 00:02:13
fundamental static driving problem Tesla

00:02:09 --> 00:02:15
is drifting out of lane the static

00:02:12 --> 00:02:17
driving problem is not easy for the

00:02:14 --> 00:02:20
world the static driving problem is easy

00:02:16 --> 00:02:25
for one route and one route in one

00:02:19 --> 00:02:28
weather condition with one state of lane

00:02:24 --> 00:02:29
markings and like no deterioration no

00:02:27 --> 00:02:31
cracks in the road I'm assuming you have

00:02:28 --> 00:02:33
a perfect localizer so that's all for

00:02:30 --> 00:02:34
the weather condition and me the lane

00:02:32 --> 00:02:35
marking condition that's the problem is

00:02:33 --> 00:02:37
how could you how do you have a perfect

00:02:34 --> 00:02:39
you can build perfect localizers are not

00:02:36 --> 00:02:42
hat hard to build okay come on now with

00:02:38 --> 00:02:43
wood lighter why don't ya wood

00:02:41 --> 00:02:45
lighter okay why don't ya but you use

00:02:42 --> 00:02:47
lighter right like use lidar build a

00:02:44 --> 00:02:51
perfect localizer building a perfect

00:02:46 --> 00:02:52
localizer without lidar it's gonna be

00:02:50 --> 00:02:54
hard you can get ten

00:02:51 --> 00:02:55
centimeters without liner you can get

00:02:53 --> 00:02:57
one centimeter with light our main

00:02:54 --> 00:02:59
concern about the one or ten centimeter

00:02:56 --> 00:03:02
I'm concerned every once in a while

00:02:58 --> 00:03:06
you're just way off yeah so this is why

00:03:01 --> 00:03:08
ou have to carefully make sure you're

00:03:05 --> 00:03:10
always tracking your position you want

00:03:07 --> 00:03:12
o use lidar camera fusion but you can

00:03:09 --> 00:03:16
get the reliability of that system up to

00:03:11 --> 00:03:18
a hundred thousand miles and then you

00:03:15 --> 00:03:20
write some fallback condition where it's

00:03:17 --> 00:03:21
not that bad if you're way off right I

00:03:19 --> 00:03:23
think that you can get it to the point

00:03:20 --> 00:03:25
it's like özil D that you're you're

00:03:22 --> 00:03:27
never in a case where you're way off and

00:03:24 --> 00:03:30
you don't know it yeah okay so this is

00:03:26 --> 00:03:33
brilliant so that's the static static we

00:03:29 --> 00:03:35
can especially with lidar and good HD

00:03:32 --> 00:03:39
maps you can solve that problem easy

00:03:34 --> 00:03:41
no you just the static static I'm so

00:03:38 --> 00:03:43
he's very difficult for you to say

00:03:40 --> 00:03:45
something's easy I got it it's not as

00:03:42 --> 00:03:46
challenging as the other ones okay well

00:03:44 --> 00:03:47
it's it's okay maybe it's obvious how to

00:03:45 --> 00:03:48
solve it the third ones the hardest oh

00:03:46 --> 00:03:49
where do we get and a lot of people

00:03:47 --> 00:03:51
don't even think about the third one huh

00:03:48 --> 00:03:52
and you can see it as different for the

00:03:50 --> 00:03:55
second one so the second one is dynamic

00:03:51 --> 00:03:57
the second one is like say there's a an

00:03:54 --> 00:03:59
obvious examples like a car stopped at a

00:03:56 --> 00:04:01
red light right you can't have that car

00:03:58 --> 00:04:02
in your map yeah because you don't know

00:04:00 --> 00:04:04
hether that car is gonna be there or

00:04:01 --> 00:04:06
not so you have to detect that car in

00:04:03 --> 00:04:10
real time and then you have to you know

00:04:05 --> 00:04:13
do the appropriate action right also

00:04:09 --> 00:04:14
that car is not a fixed object that car

00:04:12 --> 00:04:17
may move and you have to predict with

00:04:13 --> 00:04:18
at car will dim alright so this is the

00:04:16 --> 00:04:20
dynamic problem

00:04:17 --> 00:04:23
yeah so you have to deal with this um

00:04:19 --> 00:04:25
this involves again like you're gonna

00:04:22 --> 00:04:28
need models of other people's behavior

00:04:25 --> 00:04:30
do you are you including in that I don't

00:04:27 --> 00:04:34
o step on on the third one

00:04:29 --> 00:04:36
but are you including in that your

00:04:33 --> 00:04:36
influence and people ah that's the third

00:04:35 --> 00:04:38
okay

00:04:35 --> 00:04:41
that's the boom we call it the

00:04:37 --> 00:04:42
counterfactual yeah I believe that I

00:04:40 --> 00:04:44
just talked to Judea pearl who's

00:04:41 --> 00:04:49
obsessed with counterfactuals oh yeah

00:04:43 --> 00:04:52
so the static and the dynamic yeah

00:04:48 --> 00:04:54
our approach right now for lateral will

00:04:52 --> 00:04:58
scale completely to the static a dynamic

00:04:53 --> 00:04:59
the counterfactual the only way I have

00:04:57 --> 00:05:01
to do it yet they don't give you thing

00:04:58 --> 00:05:03
that I want to do once we have all these

00:05:00 --> 00:05:05
cars is I want to do reinforcement

00:05:02 --> 00:05:07
learning on the world I'm always gonna

00:05:04 --> 00:05:09
turn the exploiter up to max I'm not

00:05:06 --> 00:05:10
gonna have them explore but the only

00:05:08 --> 00:05:12
real way to get at the counterfactual is

00:05:09 --> 00:05:15
to do reinforcement learning because the

00:05:11 --> 00:05:15
other agents are humans

00:05:21 --> 00:05:24
you

<!-- YOUTUBE_TRANSCRIPT_END -->
