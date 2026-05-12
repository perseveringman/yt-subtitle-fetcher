---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "sRxaMDDMWQQ"
title: "Self-Driving Cars: State of the Art (2019)"
video_url: "https://www.youtube.com/watch?v=sRxaMDDMWQQ"
thumbnail_url: "https://i.ytimg.com/vi/sRxaMDDMWQQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=sRxaMDDMWQQ"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-02-01T14:43:11.000Z"
upload_date: "2019-02-01"
duration_seconds: 3273
duration_human: "54:33"
view_count: 290851
like_count: 4591
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:13:58.263Z"
---

# Self-Driving Cars: State of the Art (2019)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=sRxaMDDMWQQ
- video_id: sRxaMDDMWQQ
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-02-01T14:43:11.000Z
- upload_date: 2019-02-01
- duration: 54:33
- view_count: 290851
- like_count: 4591
- has_subtitle: true
- language: en
- availability: public
- tags: self-driving cars, deep learning, lex fridman, mit lex, autonomous cars, deep learning mit, self-driving cars 2019, self-driving cars tesla, mit tesla, waymo, mit waymo, mit lex fridman, autonomous vehicles, artificial intelligence, elon musk, elon musk self driving car, neural networks, machine learning, computer vision, lidar, radar, camera, waymo one, self-driving cars accidents, uber, lyft, cruise, gm, ford, veoneer, car crash, fatalities, uber flying cars, uber self driving car
- categories: Science & Technology

## Description

Introductory lecture of the MIT Self-Driving Cars series (6.S094) with an overview of the autonomous vehicle industry in 2018 and looking forward to 2019, including Waymo, Tesla, Cruise, Ford, GM, and out-of-the-box ideas of boring tunnels, flying cars, connected vehicles, and more. This covers the state of the art in terms of industry developments and not the perception and planning algorithm development. The latter will be covered in detail in future lectures. For more lecture videos on deep learning, reinforcement learning (RL), artificial intelligence (AI & AGI), and podcast conversations, visit our website or follow TensorFlow code tutorials on our GitHub repo.

INFO:
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Slides: http://bit.ly/2HLcQ4s 
Playlist: http://bit.ly/2S1MVdy

OUTLINE:
0:00 - Introduction
1:53 - 2018 in review
4:49 - Fatalities
8:29 - Taxi services
10:54 - Predictions
16:55 - Human-centered autonomy
19:42 - Levels of autonomy and proliferation strategies
24:48 - Out-of-the-box ideas
27:28 - Who will be first?
29:26 - Historical context
31:05 - Underlying beliefs of the industry and public
32:32 - Driving is hard
35:32 - Humans are amazing
37:10 - Humans and automation don't mix well?
41:55 - Two approaches: Lidar vs Vision
49:54 - In the meantime… data
52:49 - The road ahead

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:03
- Today I'd like to talk about the state

00:00:02 --> 00:00:05
of the art of autonomous vehicles,

00:00:04 --> 00:00:08
how I see the landscape, how others see the landscape,

00:00:07 --> 00:00:10
what we're all excited about,

00:00:09 --> 00:00:12
ways to solve the problem

00:00:11 --> 00:00:15
and what to look forward to in 2019

00:00:14 --> 00:00:19
as we also get to hear from the different perspectives

00:00:18 --> 00:00:21
and the various leaders in industry and autonomous vehicles

00:00:20 --> 00:00:25
in the next few, next couple of weeks and next few days.

00:00:25 --> 00:00:29
So the problem, the mission, the dream,

00:00:28 --> 00:00:31
the thing that we're trying to solve

00:00:30 --> 00:00:34
for many it may be about entrepreneurial possibilities

00:00:33 --> 00:00:35
of making money and so on.

00:00:34 --> 00:00:40
But really it's about improving access to mobility,

00:00:39 --> 00:00:41
moving people around in the world

00:00:40 --> 00:00:43
that don't have that ability,

00:00:42 --> 00:00:45
whether it has to do with age

00:00:44 --> 00:00:48
or purely access of where you live.

00:00:48 --> 00:00:53
We want to increase the efficiency of how people move about.

00:00:52 --> 00:00:57
The ability to be productive in the time we spend

00:00:56 --> 00:00:59
in traffic and transportation.

00:00:58 --> 00:01:04
One of the most hated things in terms of stress, emotion,

00:01:03 --> 00:01:07
the thing in our lives that if we could just

00:01:06 --> 00:01:10
with a snap of a finger remove is traffic.

00:01:09 --> 00:01:14
So the ability to convert that into efficiency,

00:01:13 --> 00:01:17
into a productive aspect, into a positive aspect of life

00:01:16 --> 00:01:20
and really the most important thing at least for me

00:01:19 --> 00:01:22
and for many of us working in the space,

00:01:21 --> 00:01:26
is to save lives, prevent crashes that lead to injuries,

00:01:25 --> 00:01:27
prevent crash that will lead to fatalities.

00:01:26 --> 00:01:29
Here's a counter.

00:01:28 --> 00:01:32
Every 23 seconds somebody in the world dies

00:01:31 --> 00:01:34
in a car, auto crash.

00:01:33 --> 00:01:37
It should be a sobering, it is for me,

00:01:36 --> 00:01:40
thing that I think about every single day.

00:01:39 --> 00:01:41
You go to bed, you wake up,

00:01:40 --> 00:01:42
you work on all the deep learning levels,

00:01:41 --> 00:01:44
all the different papers are publishing,

00:01:43 --> 00:01:46
everything we're trying to push forward is really

00:01:45 --> 00:01:50
to save lives at the beginning and at the end

00:01:49 --> 00:01:51
that is the main goal.

00:01:52 --> 00:01:55
So with that groundwork, with that idea, with that base,

00:01:54 --> 00:01:58
the mission that we're all working towards

00:01:57 --> 00:02:01
from the different ideas and different perspectives,

00:02:00 --> 00:02:04
I would like to review what happened in 2018.

00:02:04 --> 00:02:10
So first, Waymo has done incredible work

00:02:11 --> 00:02:14
in deploying and testing their vehicles in various domains

00:02:13 --> 00:02:18
and having October reached the mark

00:02:17 --> 00:02:20
of 10 million miles, German autonomously

00:02:19 --> 00:02:22
which is an incredible accomplishment.

00:02:21 --> 00:02:27
It's truly a big step for fully autonomous vehicles

00:02:26 --> 00:02:31
in terms of deployment and obviously is growing

00:02:30 --> 00:02:33
and growing by day.

00:02:32 --> 00:02:36
And we'll have Drago here from Waymo

00:02:35 --> 00:02:37
to talk about their work there.

00:02:36 --> 00:02:41
Then on the L2 on the semi-autonomous side,

00:02:40 --> 00:02:45
that's the pair, that's the mirror side of this equation.

00:02:44 --> 00:02:47
The other incredible number,

00:02:46 --> 00:02:50
that's perhaps less talked about,

00:02:49 --> 00:02:54
is the one billion mile mark reached by Tesla

00:02:53 --> 00:02:57
in the semi autonomous driving of autopilot.

00:02:56 --> 00:02:59
Now autopilot is a system that's able to control

00:02:58 --> 00:03:02
its position in the lane, center itself in the lane,

00:03:01 --> 00:03:04
it's able to control the longitudinal movement

00:03:03 --> 00:03:06
so not follow a vehicle

00:03:05 --> 00:03:08
when there's a vehicle in front and so on.

00:03:07 --> 00:03:11
But the degree of its ability

00:03:10 --> 00:03:13
to do so is the critical thing here,

00:03:12 --> 00:03:16
is the ability to do so for many minutes at a time

00:03:15 --> 00:03:19
ven hours at a time especially on highway driving.

00:03:18 --> 00:03:20
That's the critical thing.

00:03:19 --> 00:03:22
And the fact that they've reached one billion

00:03:21 --> 00:03:25
with a B miles is an incredible accomplishment.

00:03:25 --> 00:03:29
All of that from the machine learning perspective is data.

00:03:28 --> 00:03:30
That's data.

00:03:29 --> 00:03:34
And all of the autopilot models are driven

00:03:33 --> 00:03:39
with the primary sensor being a camera,

00:03:38 --> 00:03:40
that's computer vision.

00:03:39 --> 00:03:43
Now how does computer vision work in modern day,

00:03:43 --> 00:03:47
especially with the second iteration of auto pilot hardware

00:03:46 --> 00:03:48
there's a neural network.

00:03:47 --> 00:03:50
There's a set of neural networks behind it.

00:03:49 --> 00:03:51
That's super exciting.

00:03:50 --> 00:03:56
That is probably the largest deployment

00:03:55 --> 00:03:59
of neural networks in the world

00:03:58 --> 00:04:04
that has a direct impact

00:04:03 --> 00:04:06
on a human life,

00:04:05 --> 00:04:08
that's able to decide,

00:04:07 --> 00:04:11
that's able to make life critical decisions

00:04:11 --> 00:04:14
many times a second over and over.

00:04:13 --> 00:04:15
That's incredible.

00:04:14 --> 00:04:19
You go from the step of image classification on ImageNet

00:04:18 --> 00:04:22
and you sit there with a tensor flow

00:04:21 --> 00:04:23
and you're very happy there.

00:04:22 --> 00:04:26
You were able to achieve a 99.3 accuracy

00:04:25 --> 00:04:28
with a state of the art algorithm.

00:04:27 --> 00:04:32
You take from that a step towards there's a human life,

00:04:31 --> 00:04:37
your parents driving, your grandparents driving this,

00:04:36 --> 00:04:40
your children driving the system

00:04:39 --> 00:04:42
and there's a neural network making the decision

00:04:41 --> 00:04:44
of whether they'll live.

00:04:43 --> 00:04:48
So that one billion mark is an incredible accomplishment.

00:04:47 --> 00:04:53
And on the sobering side and from various perspectives,

00:04:53 --> 00:04:57
the fatalities, there's been two fatalities

00:04:56 --> 00:04:59
that happened in March of 2018.

00:04:58 --> 00:05:01
One in the fully autonomous side of things

00:05:00 --> 00:05:05
with Uber in Tempe, Arizona, hitting a pedestrian

00:05:06 --> 00:05:09
d leading to a pedestrian fatality.

00:05:09 --> 00:05:13
And on the semi-autonomous side with Tesla Autopilot,

00:05:12 --> 00:05:16
the third fatality that Tesla Autopilot led to

00:05:15 --> 00:05:21
and the one in 2018 is in Mountain View, California

00:05:20 --> 00:05:25
when Tesla slammed

00:05:24 --> 00:05:28
into a divider killing his driver.

00:05:29 --> 00:05:33
Now the two aspects here that are sobering

00:05:32 --> 00:05:34
and really important to think about

00:05:33 --> 00:05:39
as we talk about the progression of autonomous vehicles,

00:05:38 --> 00:05:43
proliferation in our world is our response as a public,

00:05:42 --> 00:05:46
is from the general public to the engineers

00:05:45 --> 00:05:47
to the media and so on,

00:05:46 --> 00:05:49
how we think about these fatalities.

00:05:48 --> 00:05:52
And obviously there's a disproportionate amount

00:05:51 --> 00:05:54
of attention given to these fatalities.

00:05:53 --> 00:05:55
And that's something as engineers

00:05:54 --> 00:05:57
you have to also think about,

00:05:56 --> 00:06:00
that the bar is much higher on every level

00:05:59 --> 00:06:02
in terms of performance.

00:06:01 --> 00:06:04
So in order to success, as I'll argue,

00:06:03 --> 00:06:07
in order to design successful autonomous vehicles

00:06:06 --> 00:06:10
those vehicles will have to take risks.

00:06:09 --> 00:06:14
And when the risks don't pan out,

00:06:13 --> 00:06:18
the public, if the public doesn't understand,

00:06:18 --> 00:06:21
the general problem that we're tackling,

00:06:20 --> 00:06:22
the goal of the mission,

00:06:21 --> 00:06:25
that those risks when they don't,

00:06:24 --> 00:06:26
the risks that are taken

00:06:27 --> 00:06:30
can have significant detrimental effect

00:06:29 --> 00:06:33
o the progress in this autonomous vehicle space.

00:06:32 --> 00:06:35
So that's something we really have to think about.

00:06:34 --> 00:06:37
That's our role as engineers and so on.

00:06:36 --> 00:06:38
Question, yeah.

00:06:37 --> 00:06:41
So the question was, do we know the the rate

00:06:40 --> 00:06:44
of fatalities per mile of vehicle driven

00:06:43 --> 00:06:48
which is at the crudest level how people think about safety.

00:06:47 --> 00:06:52
So there's about 80, 90, 100 million miles driven

00:06:51 --> 00:06:56
in manually controlled cars at every fatality.

00:06:55 --> 00:07:00
So one fatality per, depending on which numbers you look at,

00:06:59 --> 00:07:02
it's 80 to 100 million miles.

00:07:01 --> 00:07:05
In the Tesla vehicle, for example,

00:07:04 --> 00:07:09
the fatality is well we could just take the one billion

00:07:08 --> 00:07:10
and divided it by three.

00:07:11 --> 00:07:15
Now this, it's apples and oranges in comparison

00:07:14 --> 00:07:16
and that's something actually

00:07:15 --> 00:07:17
that we're working on to make sure

00:07:16 --> 00:07:20
that we compare it correctly.

00:07:19 --> 00:07:23
Compare the aspects of manual miles

00:07:22 --> 00:07:27
that directly are comparable to the autopilot miles.

00:07:26 --> 00:07:30
So Autopilot is a modern vehicle that's much safer.

00:07:29 --> 00:07:32
Tesla is a modern vehicle that's much safer

00:07:31 --> 00:07:35
than the general population of manually driven vehicles.

00:07:34 --> 00:07:38
Autopilot is driven on only a particular kinds of roads

00:07:37 --> 00:07:41
on the highway primarily, most of the miles.

00:07:40 --> 00:07:43
The kinds of people that drive Autopilot,

00:07:42 --> 00:07:45
all these kinds of factors need to be considered

00:07:44 --> 00:07:47
when you compare the two.

00:07:46 --> 00:07:49
But when you just look at the numbers,

00:07:48 --> 00:07:51
Tesla Autopilot's three times safer

00:07:50 --> 00:07:53
than manually driven vehicles.

00:07:52 --> 00:07:55
But that's not the right way to look at it.

00:07:54 --> 00:07:59
And for anyone that's ever taken a statistics class,

00:07:58 --> 00:08:03
three fatalities is not, does not,

00:08:02 --> 00:08:05
it's not a large number

00:08:04 --> 00:08:08
by which to make any significant conclusions.

00:08:09 --> 00:08:12
Nevertheless, that doesn't stop the media,

00:08:11 --> 00:08:14
the New York Times and everybody

00:08:13 --> 00:08:16
from responding to a single fatality,

00:08:16 --> 00:08:20
which PR and marketing aspects

00:08:19 --> 00:08:22
of these different companies are very sensitive to,

00:08:21 --> 00:08:25
which is of course troubling and concerning for an engineer

00:08:24 --> 00:08:27
that wants to save lives.

00:08:26 --> 00:08:29
But it's something that we have to think about.

00:08:28 --> 00:08:33
Okay, 2018 in review continued.

00:08:32 --> 00:08:35
There's been a lot of announcements

00:08:34 --> 00:08:39
or rather actual launches

00:08:38 --> 00:08:43
of public testing of autonomous taxi services.

00:08:42 --> 00:08:48
So companies that on public roads have been delivering

00:08:47 --> 00:08:50
real people from one location to another.

00:08:49 --> 00:08:52
Now there's a lot of caveats.

00:08:51 --> 00:08:55
In many of these cases it's very small scale,

00:08:54 --> 00:08:59
just a few vehicles, in most cases it's very low speed,

00:08:58 --> 00:09:00
in a constrained environment,

00:08:59 --> 00:09:03
in a constrained community

00:09:02 --> 00:09:07
and almost always, really always, with a safety driver.

00:09:06 --> 00:09:09
There's a few exceptions

00:09:08 --> 00:09:10
for demonstration purposes

00:09:09 --> 00:09:12
but there's always an actual driver in the seat.

00:09:12 --> 00:09:14
Some of the brilliant folks

00:09:13 --> 00:09:16
representing these companies will speak

00:09:15 --> 00:09:21
in this course is Voyage doing it in an isolated community,

00:09:20 --> 00:09:23
awesome work they're doing in villages in Florida,

00:09:22 --> 00:09:27
Optimus Ride here in Boston doing

00:09:26 --> 00:09:28
and the community in Union Point,

00:09:28 --> 00:09:34
Drive.ai in Texas, May Mobility expanding beyond Detroit

00:09:33 --> 00:09:36
but really most operation's in Detroit,

00:09:35 --> 00:09:38
Waymo has launched its service.

00:09:37 --> 00:09:43
Waymo one that's gotten some publicity in Phoenix, Arizona.

00:09:42 --> 00:09:48
That Nuro doing zero occupancy deliveries

00:09:47 --> 00:09:51
of groceries autonomously.

00:09:50 --> 00:09:53
So we didn't say has to be delivering humans,

00:09:52 --> 00:09:55
it's delivering groceries autonomously.

00:09:54 --> 00:09:58
Uber is quietly, or not so quietly,

00:09:57 --> 00:10:02
resumed its autonomous vehicle taxi service testing

00:10:01 --> 00:10:07
in Pittsburgh in a very careful constrained way.

00:10:08 --> 00:10:14
Aptiv, after acquiring Carl Iagnemma and nuTonomy,

00:10:16 --> 00:10:22
has been doing extensive large-scaled taxi service testing

00:10:22 --> 00:10:27
everywhere from Vegas to Boston here to Pittsburgh

00:10:26 --> 00:10:30
and in Singapore of course.

00:10:29 --> 00:10:35
Aurora that spoke here last time,

00:10:34 --> 00:10:38
the head of Tesla Autopilot launched Aurora

00:10:37 --> 00:10:42
nd the Chris Urmson behind this young upstart company

00:10:41 --> 00:10:45
is doing testing in San Francisco and Pittsburgh

00:10:44 --> 00:10:48
and then Cruise, Kyle will be here to talk from GM,

00:10:47 --> 00:10:51
is doing testing in San Francisco, Arizona and Michigan.

00:10:51 --> 00:10:55
So when we talk about predictions,

00:10:54 --> 00:10:57
I'll talk about a few people predicting

00:10:56 --> 00:11:00
when we're going to have autonomous vehicles

00:10:59 --> 00:11:03
and when you yourself think about what it means

00:11:02 --> 00:11:05
when will they be here?

00:11:04 --> 00:11:07
When will autonomous vehicles arise

00:11:06 --> 00:11:10
such that that Uber that you call will be autonomous

00:11:09 --> 00:11:12
and not with a populated by a driver.

00:11:11 --> 00:11:15
So the thing we have to think about is

00:11:14 --> 00:11:20
what we think about what, how we define autonomous,

00:11:19 --> 00:11:22
what that experience looks like.

00:11:21 --> 00:11:24
And most importantly in these discussions,

00:11:23 --> 00:11:26
we have to think about scale.

00:11:26 --> 00:11:29
So we here at MIT

00:11:28 --> 00:11:32
our group MIT Human Centered Autonomous Vehicle,

00:11:31 --> 00:11:34
we have a fully autonomous vehicle that people can get in

00:11:33 --> 00:11:37
if you would like and it will give you a ride

00:11:36 --> 00:11:38
in a particular location.

00:11:38 --> 00:11:42
But that's one vehicle, it's not a service

00:11:41 --> 00:11:44
and it only works on particular roads.

00:11:43 --> 00:11:46
It's extremely constrained.

00:11:45 --> 00:11:47
In some ways it's not much different

00:11:46 --> 00:11:51
han most of the companies that we were talking about today.

00:11:50 --> 00:11:53
Now scale here, there's a magic number,

00:11:52 --> 00:11:55
I'm not sure what it is but for this,

00:11:54 --> 00:11:58
the purpose of this conversation let's say it's 10,000,

00:11:57 --> 00:12:00
where there's a meaningful deployment,

00:11:59 --> 00:12:05
when it's truly going beyond that prototype demo mode

00:12:04 --> 00:12:07
to where everything is under control,

00:12:06 --> 00:12:10
to where it's really touching the general population

00:12:09 --> 00:12:12
in a fundamental way.

00:12:11 --> 00:12:14
Scale is everything here and it starts,

00:12:13 --> 00:12:16
let's say at 10,000.

00:12:15 --> 00:12:17
Just to give you for reference,

00:12:16 --> 00:12:20
there's 46,000 active Uber drivers in New York City.

00:12:19 --> 00:12:23
So that's what 10,000 feels like some,

00:12:22 --> 00:12:27
you know 25, 30 % of the Uber drivers in New York City

00:12:26 --> 00:12:31
all of a sudden are become passengers.

00:12:34 --> 00:12:39
So the predictions, I'm not a marketing PR person,

00:12:38 --> 00:12:41
so I don't understand what everybody has

00:12:40 --> 00:12:44
to have make a prediction but they all seem to.

00:12:43 --> 00:12:46
Although major automakers have made a prediction

00:12:45 --> 00:12:48
of when they'll have a deploy,

00:12:47 --> 00:12:51
when they will be able to deploy autonomous vehicles.

00:12:51 --> 00:12:56
Tesla has made in early 2017,

00:12:56 --> 00:13:01
a prediction that it will have autonomous vehicles 2018.

00:13:00 --> 00:13:05
In 2018 they've now adjusted the prediction to 2019.

00:13:04 --> 00:13:10
Nissan, Honda, Toyota have made prediction for 2020

00:13:09 --> 00:13:13
under certain constraints in highway urban.

00:13:12 --> 00:13:17
Hyundai and Volvo has in 2021.

00:13:16 --> 00:13:21
BMW and Ford, Ford saying at scale,

00:13:20 --> 00:13:24
so a large scale deployment 2021.

00:13:23 --> 00:13:28
And Chrysler in '21 and Daimler saying in the early '20s.

00:13:27 --> 00:13:32
So there is the the predictions

00:13:31 --> 00:13:36
that are extremely optimistic that are perhaps driven

00:13:36 --> 00:13:42
by the instinct that the company has to declare

00:13:41 --> 00:13:45
that they're at the cutting edge of innovation.

00:13:44 --> 00:13:47
And then there is many of the leading engineers

00:13:46 --> 00:13:51
behind the leading these teams including Carl Iagnemma

00:13:50 --> 00:13:56
nd Gill Pratt from MIT who in injects a little bit

00:13:56 --> 00:14:02
of caution and grounded

00:14:02 --> 00:14:06
ideas about how difficult it is

00:14:05 --> 00:14:08
to remove the human from the loop of automation.

00:14:07 --> 00:14:12
So Carl says that basically teleoperation,

00:14:11 --> 00:14:14
kind of gives this analogy of an elevator

00:14:13 --> 00:14:17
and the elevators fully autonomous

00:14:16 --> 00:14:19
but there is still a button to call for help

00:14:18 --> 00:14:21
if something happens.

00:14:20 --> 00:14:23
And that's how he thinks about autonomous vehicles.

00:14:22 --> 00:14:26
Even with greater and greater degree of automation,

00:14:25 --> 00:14:28
they're still going to have to be a human in the loop,

00:14:27 --> 00:14:29
they're still going to be a way

00:14:28 --> 00:14:32
to contact a human to get help.

00:14:31 --> 00:14:35
And Gill Pratt and Toyota

00:14:34 --> 00:14:37
nd they're making some announcements at CES,

00:14:36 --> 00:14:38
basically saying that the human

00:14:37 --> 00:14:40
in the loop is the fundamental aspect

00:14:39 --> 00:14:42
hat we need to approach this problem and removing the human

00:14:41 --> 00:14:46
from consideration is really, really far away.

00:14:46 --> 00:14:50
And Gill, who's historically and currently is one

00:14:49 --> 00:14:52
of the sort of the great roboticists in the world

00:14:51 --> 00:14:54
that defined a lot of the DARPA challenges

00:14:53 --> 00:14:57
and a lot of our progress historically speaking

00:14:56 --> 00:14:59
up to this point.

00:14:58 --> 00:15:00
So they're really the full spectrum,

00:14:59 --> 00:15:05
we can think of it as the Elon Rodney spectrum

00:15:04 --> 00:15:08
of optimism versus pessimism.

00:15:07 --> 00:15:12
Elon Musk, who's extremely bold and optimistic

00:15:11 --> 00:15:14
about his predictions.

00:15:13 --> 00:15:18
I often connect with this kind of thinking

00:15:17 --> 00:15:19
because sometimes you have to believe

00:15:18 --> 00:15:22
the impossible is possible in order to make it happen.

00:15:21 --> 00:15:24
And then there is Rodney,

00:15:24 --> 00:15:26
also one of the great roboticists,

00:15:25 --> 00:15:31
the former head of the of CSAIL, the AI laboratory here,

00:15:30 --> 00:15:34
is a little bit on the pessimistic side.

00:15:33 --> 00:15:35
So for Elon,

00:15:34 --> 00:15:38
now fully autonomous vehicle will be here in 2019

00:15:37 --> 00:15:40
for Rodney the vehicles are really,

00:15:39 --> 00:15:44
fully autonomous are beyond 2050.

00:15:43 --> 00:15:47
But there, he believes in the '30s

00:15:46 --> 00:15:52
there will be a significant, a major city will be able

00:15:51 --> 00:15:57
to allocate a significant region of that city

00:15:56 --> 00:15:59
where manual driving is fully banned.

00:15:58 --> 00:16:01
Which is the way he believes

00:16:00 --> 00:16:03
those vehicles could, autonomous vehicle really proliferate

00:16:02 --> 00:16:07
when you ban manually driven vehicles in certain parts.

00:16:06 --> 00:16:10
And then in the '40s, 2045 or beyond,

00:16:09 --> 00:16:14
majority of U.S cities will ban manually driven vehicles.

00:16:13 --> 00:16:19
Of course the quote from Elon Musk in 2017 is that,

00:16:18 --> 00:16:23
my guess is that in probably 10 years

00:16:22 --> 00:16:26
it will be very unusual for cars to be built

00:16:25 --> 00:16:28
hat are not fully autonomous.

00:16:27 --> 00:16:33
So we also have to think about the long tail of the fact

00:16:33 --> 00:16:34
hat many people drive cars

00:16:33 --> 00:16:37
that are 10 years old, 20 years old.

00:16:36 --> 00:16:40
So even when you have every car's built as fully autonomous,

00:16:39 --> 00:16:42
it's still gonna take time

00:16:41 --> 00:16:45
for that dissipation of vehicles to happen.

00:16:44 --> 00:16:48
And so my own view beyond predictions,

00:16:48 --> 00:16:52
to take a little pause into the ridiculous

00:16:51 --> 00:16:54
and the fun to explain the view.

00:16:56 --> 00:16:59
Yes that is me playing guitar in our autonomous vehicle.

00:16:59 --> 00:17:04
Now the point of this ridiculous video and embarrassing,

00:17:03 --> 00:17:05
I should've never played it.

00:17:06 --> 00:17:09
Yeah, okay, I think it's gonna be over soon.

00:17:08 --> 00:17:13
Now for those of you born in the '90s that's classic rock.

00:17:12 --> 00:17:15
(audience laughing)

00:17:15 --> 00:17:19
So the point I'm trying to make beyond predictions is

00:17:18 --> 00:17:24
that autonomous vehicles will not be adopted by human beings

00:17:23 --> 00:17:26
in the near term, in the next 10-15 years,

00:17:25 --> 00:17:28
because they're safer.

00:17:27 --> 00:17:32
Safety is not going to, they may be safer but that is,

00:17:31 --> 00:17:34
they're not going to be so much safer that

00:17:33 --> 00:17:37
's going to be the reason you adopt.

00:17:36 --> 00:17:39
It's not gonna be because they get you

00:17:38 --> 00:17:40
to the location faster.

00:17:39 --> 00:17:42
Everything we see with autonomy is

00:17:41 --> 00:17:43
they're going to be slower

00:17:42 --> 00:17:47
until majority of the fleet is autonomous.

00:17:46 --> 00:17:50
They're cautious and therefore slower

00:17:49 --> 00:17:52
and therefore more annoying in the way we think

00:17:51 --> 00:17:54
about actually how we navigate this world.

00:17:53 --> 00:17:57
We take risk, we drive assertively with speed

00:17:56 --> 00:17:58
over the speed limit all the time.

00:17:57 --> 00:18:01
That is not how autonomous vehicles today operate.

00:18:00 --> 00:18:03
So they're not gonna get us there faster

00:18:02 --> 00:18:05
and for every promise,

00:18:04 --> 00:18:07
every hope that they're going to be cheaper

00:18:06 --> 00:18:12
eally there's still significant investment going into them

00:18:11 --> 00:18:15
and there is not good economics in the near term

00:18:14 --> 00:18:18
of how to make them obviously significantly cheaper.

00:18:18 --> 00:18:24
What I think Uber and Lyft has taken over the taxi service

00:18:24 --> 00:18:27
because of the human experience.

00:18:26 --> 00:18:30
In the same way autonomy will only take over if,

00:18:29 --> 00:18:33
not take over but be adopted by human beings

00:18:32 --> 00:18:35
if it creates a better human experience.

00:18:34 --> 00:18:38
If there's something about the experience

00:18:37 --> 00:18:41
that you enjoy the heck out of.

00:18:40 --> 00:18:45
This video and many others that we're putting out,

00:18:44 --> 00:18:47
shows that in the natural language communication,

00:18:46 --> 00:18:49
the interaction with the car,

00:18:48 --> 00:18:51
the ability of the car to sense everything you're doing

00:18:50 --> 00:18:56
from the activity of the driver to the driver's attention

00:18:55 --> 00:18:58
and being able to transfer control back and forth

00:18:57 --> 00:19:02
in a playful way but really in a serious way

00:19:01 --> 00:19:06
also that's personalized to you.

00:19:05 --> 00:19:09
That's really the human experience,

00:19:08 --> 00:19:10
the efficiency of the human experience,

00:19:10 --> 00:19:12
the richness of the human experience,

00:19:11 --> 00:19:14
that is what we need to also solve.

00:19:14 --> 00:19:16
That's something you have to think about

00:19:15 --> 00:19:17
because many of the people,

00:19:16 --> 00:19:19
that'll be speaking at this class

00:19:18 --> 00:19:21
and many of the people that are working

00:19:20 --> 00:19:25
on this problem are not focused on the human experience.

00:19:24 --> 00:19:28
It's a kind of afterthought

00:19:27 --> 00:19:30
hat once we solve the autonomous vehicle problem

00:19:29 --> 00:19:32
it'll be fun as hell to be in that car.

00:19:32 --> 00:19:35
I believe you first have to make it fun

00:19:34 --> 00:19:36
as hell to be in the car

00:19:35 --> 00:19:40
and then solve the autonomous vehicle problem jointly.

00:19:41 --> 00:19:44
So in the language that we're talking about here

00:19:43 --> 00:19:47
there are several levels of autonomy that are defined

00:19:46 --> 00:19:48
from level zero to level four.

00:19:47 --> 00:19:51
Level zero no automation, four and five,

00:19:50 --> 00:19:54
level three, four and five increasing automation.

00:19:53 --> 00:19:57
So level two is when the driver is still responsible,

00:19:56 --> 00:19:59
level three, four, five is

00:19:58 --> 00:20:01
when there's less and less responsibility.

00:20:00 --> 00:20:03
But really in three, four, five,

00:20:02 --> 00:20:05
there's parts of the driving

00:20:04 --> 00:20:08
where the liability's on the car.

00:20:07 --> 00:20:12
So there's only really two, as far as I'm concerned, levels,

00:20:11 --> 00:20:14
human center autonomy and full autonomy.

00:20:13 --> 00:20:16
Human centered means the human is responsible.

00:20:15 --> 00:20:20
Full autonomy means the car is responsible

00:20:20 --> 00:20:24
both on the legal side, the experience side

00:20:23 --> 00:20:26
and the algorithm side.

00:20:25 --> 00:20:31
That means full autonomy does not allow for teleoperation.

00:20:32 --> 00:20:36
So it doesn't allow for the human to step in

00:20:35 --> 00:20:38
and remotely control the vehicle

00:20:37 --> 00:20:40
because that means the human is still in the loop.

00:20:39 --> 00:20:42
It doesn't allow for the 10 second rule

00:20:41 --> 00:20:45
that it's gonna be fully autonomous

00:20:44 --> 00:20:47
but once it starts warning you,

00:20:46 --> 00:20:48
you have 10 seconds to take over.

00:20:47 --> 00:20:50
No, it's not fully autonomous

00:20:49 --> 00:20:54
if it cannot guarantee safety in any situation.

00:20:53 --> 00:20:55
It has to be able to,

00:20:55 --> 00:20:58
if the driver doesn't respond in 10 seconds

00:20:57 --> 00:20:59
it has to be able to find safe harbor.

00:20:58 --> 00:21:02
It has to be able to pull off to the side of the road

00:21:01 --> 00:21:05
without hurting anybody else to find safety.

00:21:04 --> 00:21:09
So that's the fully autonomous challenge.

00:21:08 --> 00:21:12
And so how do we envision these two levels

00:21:11 --> 00:21:15
of automation proliferating society,

00:21:14 --> 00:21:17
getting deployed at a mass scale?

00:21:16 --> 00:21:20
The 10,000, 10 million beyond.

00:21:19 --> 00:21:22
On the fully autonomous side,

00:21:22 --> 00:21:28
the way to think about it with the predictions

00:21:27 --> 00:21:30
that we're talking about here,

00:21:29 --> 00:21:32
is there's several different possibilities

00:21:31 --> 00:21:33
of how to deploy these vehicles.

00:21:35 --> 00:21:41
One is last mile delivery of goods and services

00:21:41 --> 00:21:43
like the groceries.

00:21:42 --> 00:21:46
These are zero occupancy vehicles delivering groceries

00:21:45 --> 00:21:49
or delivering human beings at the last mile.

00:21:48 --> 00:21:54
What the last mile means is it's slow-moving transport

00:21:53 --> 00:21:57
o the destination where most of the tricky driving

00:21:56 --> 00:21:58
along the way is done manually

00:21:57 --> 00:22:00
and then the last mile delivery in the city

00:21:59 --> 00:22:03
in the urban environment is done

00:22:02 --> 00:22:07
by zero occupancy autonomous vehicles.

00:22:06 --> 00:22:10
Trucking on the highway, possibly with platooning,

00:22:10 --> 00:22:13
where a sequence of trucks follow each other.

00:22:12 --> 00:22:15
So in this what people think about it

00:22:14 --> 00:22:20
as a pretty well-defined problem of highway driving

00:22:20 --> 00:22:24
with lanes well marked, well mapped routes

00:22:23 --> 00:22:27
throughout the United States and globally

00:22:26 --> 00:22:29
on the highway driving is automatable.

00:22:28 --> 00:22:32
The specific urban routes kind of like

00:22:31 --> 00:22:34
what a lot of the these companies are working on,

00:22:33 --> 00:22:37
defining this taxi service

00:22:36 --> 00:22:39
and personalized public transport.

00:22:38 --> 00:22:42
There's certain pickup locations you're allowed to go to,

00:22:41 --> 00:22:44
there are certain drop-off locations and that's it.

00:22:43 --> 00:22:46
It's kind of like taking the train here

00:22:45 --> 00:22:48
but as opposed to getting on the train

00:22:47 --> 00:22:51
with 100 other people you're getting or bus,

00:22:50 --> 00:22:53
you're getting on the car with,

00:22:52 --> 00:22:55
when you're alone or with one other person.

00:22:55 --> 00:22:58
The closed communities,

00:22:57 --> 00:23:01
something Oliver Cameron with Voyage is working on

00:23:00 --> 00:23:04
defining and Optimus Ride,

00:23:03 --> 00:23:05
defining a particular community

00:23:04 --> 00:23:09
that you now have a monopoly over

00:23:08 --> 00:23:10
that you define the constraints,

00:23:09 --> 00:23:12
you define the customer base

00:23:11 --> 00:23:13
and then you just deliver the vehicles.

00:23:12 --> 00:23:17
You map the entire road, you have slow-moving transport

00:23:16 --> 00:23:19
hat gets people from A to B anywhere in that community.

00:23:21 --> 00:23:25
And then there's the world

00:23:24 --> 00:23:27
of zero occupancy ride-sharing delivery.

00:23:26 --> 00:23:29
So the Uber that comes to you

00:23:28 --> 00:23:31
as opposed to having you drive it yourself

00:23:30 --> 00:23:34
and it comes to you autonomously with nobody in there

00:23:34 --> 00:23:37
and then you get in and drive it.

00:23:36 --> 00:23:38
So imagine a world

00:23:37 --> 00:23:41
where we have empty vehicles driving around,

00:23:40 --> 00:23:44
delivering themselves to you.

00:23:43 --> 00:23:48
Semi-autonomous side is thinking about a world

00:23:48 --> 00:23:52
where teleoperation plays a really crucial role

00:23:51 --> 00:23:54
where it's fully autonomous under certain constraints

00:23:53 --> 00:23:56
on the highway but a human can always step in.

00:23:56 --> 00:23:59
High autonomy on the highway kind of like

00:23:58 --> 00:24:03
what Tesla is working towards most recently,

00:24:02 --> 00:24:04
it's on-ramp to off-ramp.

00:24:03 --> 00:24:08
Now the driver is still responsible, liability wise

00:24:07 --> 00:24:10
and in terms of just observing the vehicle

00:24:09 --> 00:24:12
and algorithmically speaking

00:24:11 --> 00:24:17
but the autonomy is pretty high level

00:24:16 --> 00:24:18
to a point where much

00:24:17 --> 00:24:21
of the highway driving could be done fully autonomously.

00:24:20 --> 00:24:24
And low autonomy unrestricted travel

00:24:23 --> 00:24:28
as an advanced driver assistance system,

00:24:27 --> 00:24:32
meaning that the car kind of like the Tesla,

00:24:31 --> 00:24:36
the Volvo S90s or the Super Cruise and the Cadillacs

00:24:35 --> 00:24:38
all these kinds of L2 systems that are able

00:24:37 --> 00:24:40
to keep you in the lane,

00:24:39 --> 00:24:43
you know 10 to 30% of the miles that you drive

00:24:42 --> 00:24:45
and some fraction of the time take some

00:24:44 --> 00:24:47
of the stress of driving off.

00:24:46 --> 00:24:51
And then there is some out there ideas, right.

00:24:50 --> 00:24:53
The idea of connected vehicles,

00:24:52 --> 00:24:55
vehicle to vehicle communication

00:24:54 --> 00:24:58
and vehicle to infrastructure communication enabling us

00:24:57 --> 00:25:01
to navigate, for example, intersection efficiently

00:25:00 --> 00:25:04
without stopping, removing all traffic lights.

00:25:03 --> 00:25:07
So here shown on the bottom is our conventional approach

00:25:06 --> 00:25:10
of there's a queuing system that forms

00:25:09 --> 00:25:13
because of traffic lights that turn red, green, yellow

00:25:12 --> 00:25:16
and without traffic lights and with communication

00:25:15 --> 00:25:18
to the infrastructure in between the vehicles

00:25:17 --> 00:25:19
you can actually optimize that

00:25:18 --> 00:25:23
o significantly increase the traffic load through a city.

00:25:22 --> 00:25:27
Of course there's the boring solution

00:25:30 --> 00:25:33
of tunnels under cities,

00:25:34 --> 00:25:37
layers of tunnels under cities.

00:25:38 --> 00:25:41
Tunnels all the way down.

00:25:41 --> 00:25:46
Autonomous vehicles basically

00:25:45 --> 00:25:48
by the design of the tunnel,

00:25:47 --> 00:25:51
constraining the problem to such a degree

00:25:50 --> 00:25:54
that an, I mean the idea of autonomy

00:25:53 --> 00:25:56
just is completely transformed.

00:25:55 --> 00:25:59
That you're basically, a car is able to transform itself

00:25:58 --> 00:26:02
into a mini train, into a mini public transit entity,

00:26:01 --> 00:26:05
for a particular period of time.

00:26:04 --> 00:26:06
So you get into that tunnel,

00:26:05 --> 00:26:08
you drive at 200 miles an hour

00:26:07 --> 00:26:12
and or not necessarily drive, be driven 200 miles an hour

00:26:11 --> 00:26:15
and then you get out of the tunnel.

00:26:14 --> 00:26:17
Of course there's the flying cars,

00:26:16 --> 00:26:19
personalized flying car vehicles.

00:26:18 --> 00:26:21
I will not, I mean,

00:26:24 --> 00:26:27
Rodney as I mentioned before, does believe

00:26:26 --> 00:26:29
that we'll have them in 2050.

00:26:28 --> 00:26:31
There's a lot of people that are seriously actually thinking

00:26:30 --> 00:26:35
about this problem is there's a level of autonomy

00:26:34 --> 00:26:38
obviously that's required here for a regular person.

00:26:39 --> 00:26:43
I don't know somebody without a pilot's license,

00:26:42 --> 00:26:46
for example, to be able to take off and land.

00:26:45 --> 00:26:50
Making that experience accessible to regular people means

00:26:49 --> 00:26:52
that there's going to be a significant amount

00:26:51 --> 00:26:53
of autonomy involved.

00:26:52 --> 00:26:54
One of the people really,

00:26:53 --> 00:26:57
one of the companies really seriously working on this,

00:26:56 --> 00:27:02
is Uber with the Uber Elevate, Uber Air I think it's called

00:27:02 --> 00:27:06
and the idea is that you would meet your vehicle

00:27:05 --> 00:27:09
not on the street but at a roof,

00:27:08 --> 00:27:10
you take it elevator,

00:27:09 --> 00:27:14
you meet them at the roof of a building.

00:27:13 --> 00:27:16
This video's from Uber.

00:27:15 --> 00:27:19
They're seriously addressing this problem.

00:27:18 --> 00:27:21
Many of the great solutions

00:27:20 --> 00:27:23
to the world's problems have been laughed at

00:27:22 --> 00:27:24
some point.

00:27:23 --> 00:27:29
So let's not laugh too loud at these possibilities.

00:27:29 --> 00:27:33
Back in my day we used to drive in the street.

00:27:32 --> 00:27:38
Okay so aha, 10,000 vehicles,

00:27:37 --> 00:27:40
if that's the bar.

00:27:39 --> 00:27:43
I sort of out of curiosity asked,

00:27:42 --> 00:27:44
did a little public poll.

00:27:43 --> 00:27:47
3,000 people responded.

00:27:46 --> 00:27:49
Asked who will be first

00:27:48 --> 00:27:53
o deploy 10,000 fully autonomous cars operating

00:27:52 --> 00:27:56
on public roads without a safety driver.

00:27:56 --> 00:28:02
And several options percolated with Tesla getting 57%

00:28:03 --> 00:28:07
of the vote and Waymo gaining 21% of the vote

00:28:06 --> 00:28:12
and 14% someone else and 8% the curmudgeons

00:28:13 --> 00:28:16
and the engineers saying

00:28:15 --> 00:28:18
no one in the next 50 years will do it.

00:28:19 --> 00:28:24
And again in 1998 when Google came along,

00:28:23 --> 00:28:27
the leaders of the space were Ask Jeeves

00:28:26 --> 00:28:31
and Infoseek and Excite, all services I've used

00:28:30 --> 00:28:33
and probably some people in this room have used,

00:28:32 --> 00:28:37
Lycos, Yahoo, obviously they were the leaders in the space

00:28:36 --> 00:28:40
and Google disrupted that space completely.

00:28:39 --> 00:28:44
So this poll shows the current leaders

00:28:43 --> 00:28:47
but it's wide open to ideas and that's why there's a lot

00:28:46 --> 00:28:49
of autonomous vehicle companies.

00:28:48 --> 00:28:52
Some companies are taking advantage of the hype

00:28:51 --> 00:28:55
and the fact that there's a lot of investment in the space

00:28:54 --> 00:29:00
but some companies, like some of the speakers visiting

00:28:59 --> 00:29:02
in this course are really trying to solve this problem.

00:29:01 --> 00:29:03
They want to be the next Google,

00:29:02 --> 00:29:05
the next billion, multi-billion,

00:29:04 --> 00:29:09
next trillion dollar company by solving the problem.

00:29:08 --> 00:29:10
So it's wide open.

00:29:09 --> 00:29:12
But currently Tesla with a human,

00:29:11 --> 00:29:16
with the semi-autonomous vehicle approach working

00:29:15 --> 00:29:19
towards trying to become fully autonomous.

00:29:18 --> 00:29:22
And Waymo starting with the fully autonomous working

00:29:21 --> 00:29:24
towards achieving scale at the fully autonomous

00:29:23 --> 00:29:26
are the leaders in the space.

00:29:25 --> 00:29:28
Given that,

00:29:29 --> 00:29:32
ranking in 2019,

00:29:31 --> 00:29:34
let's take a quick step back to 2005

00:29:33 --> 00:29:37
with the DARPA challenge when the story began.

00:29:36 --> 00:29:41
The race to the desert when Stanley from Stanford won a race

00:29:40 --> 00:29:43
through the desert

00:29:42 --> 00:29:45
hat really captivated people's imagination

00:29:44 --> 00:29:46
about what's possible.

00:29:45 --> 00:29:48
And a lot of people have said

00:29:47 --> 00:29:51
that the autonomous vehicle problem is solved in 2005.

00:29:50 --> 00:29:54
They really said you know the idea was especially

00:29:53 --> 00:29:56
because in 2004 nobody finished that race,

00:29:55 --> 00:29:59
2005 four cars finished the race,

00:29:58 --> 00:30:00
it was like well we cracked it.

00:29:59 --> 00:30:02
This is it.

00:30:01 --> 00:30:04
And then you know some critics said

00:30:03 --> 00:30:08
that urban driving is really nothing comparable

00:30:07 --> 00:30:11
to desert driving, desert is very simple

00:30:10 --> 00:30:12
there's no obstacles and so on.

00:30:11 --> 00:30:14
It's really a mechanical engineering problem

00:30:13 --> 00:30:15
it's not a software problem.

00:30:14 --> 00:30:17
It's not a fundamentally,

00:30:16 --> 00:30:19
it's not really an autonomous driving problem

00:30:18 --> 00:30:21
as it would be delivered to consumers

00:30:20 --> 00:30:23
and of course in 2007,

00:30:22 --> 00:30:25
DARPA put together Urban Grand Challenge

00:30:24 --> 00:30:29
and several people finished that with CMU's boss winning.

00:30:29 --> 00:30:32
And so the thought was at that point,

00:30:31 --> 00:30:34
that's it, we're done.

00:30:33 --> 00:30:38
As Ernest Rutherford, a physicist, said,

00:30:37 --> 00:30:39
that physics is the only real science,

00:30:38 --> 00:30:41
the rest is just stamp collecting,

00:30:40 --> 00:30:43
all the biology, chemistry.

00:30:42 --> 00:30:44
Certainly, oh boy, I wouldn't want to know

00:30:43 --> 00:30:47
hat he thinks about computer science.

00:30:46 --> 00:30:49
It's just all this stupid silly details

00:30:48 --> 00:30:50
Physics is the fundamentals.

00:30:49 --> 00:30:52
And that was the idea

00:30:51 --> 00:30:54
with the DARPA Grand Challenge and solving that

00:30:53 --> 00:30:57
we solved the fundamental problem of autonomy.

00:30:56 --> 00:31:00
And the rest is just for industry to figure out

00:30:59 --> 00:31:03
some of the details of how to make an app

00:31:02 --> 00:31:05
and make a business out of it.

00:31:05 --> 00:31:07
So that could be true.

00:31:06 --> 00:31:08
And the underlying beliefs there is

00:31:07 --> 00:31:13
that driving is an easy task, that it's solvable.

00:31:12 --> 00:31:14
The thing that we do as human beings

00:31:13 --> 00:31:17
that it's pretty formalizable

00:31:16 --> 00:31:20
it's pretty easy to solve with autonomy

00:31:19 --> 00:31:24
that the other idea is that humans are bad at driving.

00:31:23 --> 00:31:25
This is a common belief.

00:31:24 --> 00:31:28
Not me, not you but everybody else,

00:31:27 --> 00:31:31
nobody in this room but everybody else is a terrible driver.

00:31:30 --> 00:31:33
The kind of intuition that we have

00:31:32 --> 00:31:35
about our experience of traffic leads us to believe

00:31:34 --> 00:31:38
that humans are just really bad at driving.

00:31:37 --> 00:31:41
And from the human factors, psychology side,

00:31:40 --> 00:31:46
there's been over 70 years

00:31:48 --> 00:31:53
of research showing that humans are not able

00:31:53 --> 00:31:58
to monitor, maintain vigilance, monitoring a system.

00:31:57 --> 00:32:01
So when you put a human in a room with a robot

00:32:00 --> 00:32:04
and say watch that robot,

00:32:03 --> 00:32:08
they start texting like 15 seconds in.

00:32:07 --> 00:32:10
So that's the fundamental psychology.

00:32:09 --> 00:32:12
There's thousands of papers on this.

00:32:11 --> 00:32:15
People are, they tune out, they over trust the system,

00:32:14 --> 00:32:20
they misinterpret the system and they lose vigilance.

00:32:19 --> 00:32:22
Those are the three underlying beliefs.

00:32:21 --> 00:32:26
It very well could be true but what if it is not?

00:32:25 --> 00:32:29
So we have to consider that it is not.

00:32:28 --> 00:32:31
The driving task is easy

00:32:30 --> 00:32:33
because if you think the driving task is easy

00:32:32 --> 00:32:35
and formalizable and solvable by autonomous vehicles,

00:32:34 --> 00:32:37
you have to solve this problem.

00:32:36 --> 00:32:39
The subtle vehicle-to-vehicle,

00:32:38 --> 00:32:42
vehicles-to-pedestrian nonverbal communication

00:32:41 --> 00:32:45
that happens here in a dramatic sense

00:32:44 --> 00:32:47
but really happens in the subtle sense

00:32:46 --> 00:32:51
millions of times every single day in Boston.

00:32:50 --> 00:32:54
Subtle nonverbal communication between vehicles,

00:32:53 --> 00:32:56
you go, no, you go.

00:32:56 --> 00:33:01
You have to solve all the crazy road conditions

00:33:00 --> 00:33:05
where in a split seconds you have to make a decision

00:33:04 --> 00:33:08
about, so in snowy, icy weather, rain,

00:33:07 --> 00:33:10
limited visibility conditions,

00:33:09 --> 00:33:14
you have 100, 200 milliseconds to make a decision.

00:33:13 --> 00:33:16
Your algorithm based on the perception has

00:33:15 --> 00:33:17
to make a control decision.

00:33:19 --> 00:33:21
And then you have to deal

00:33:20 --> 00:33:23
with a nonverbal communication with pedestrians,

00:33:22 --> 00:33:27
these unreasonable irrational creatures, us human beings.

00:33:26 --> 00:33:30
You have to not only understand

00:33:29 --> 00:33:35
what the intent of the movement that's anticipated.

00:33:35 --> 00:33:38
So anticipating the trajectory of the pedestrian

00:33:37 --> 00:33:41
you also have to assert yourself in a game theoretic way

00:33:40 --> 00:33:44
as crazy as it might sound, you have to threaten yourself,

00:33:43 --> 00:33:46
you have to take a risk.

00:33:45 --> 00:33:47
You have to take a risk that

00:33:46 --> 00:33:51
if I don't slow down like that ambulance didn't slow down

00:33:50 --> 00:33:53
that the pedestrian will slow down.

00:33:54 --> 00:33:58
Algorithmically we're afraid to do that.

00:33:58 --> 00:34:03
The idea that a pedestrian that's moving,

00:34:02 --> 00:34:06
we anticipate their trajectory based on the simple physics

00:34:05 --> 00:34:07
of the current velocity of the momentum,

00:34:06 --> 00:34:10
they're gonna keep going with some probability.

00:34:09 --> 00:34:13
The fact that by us accelerating

00:34:12 --> 00:34:16
we might make that pedestrian stop,

00:34:15 --> 00:34:18
it's something that we have to incorporate into algorithms

00:34:17 --> 00:34:19
and we don't today.

00:34:19 --> 00:34:22
And we don't know how to really.

00:34:22 --> 00:34:25
So if driving is easy we have to solve that too.

00:34:24 --> 00:34:27
And of course the thing I showed yesterday

00:34:26 --> 00:34:29
with the coast runners and the boat going around

00:34:31 --> 00:34:37
and all the ethical dilemmas from the moral machine

00:34:36 --> 00:34:41
to the more serious engineering aspects

00:34:40 --> 00:34:44
that from the unintended consequences

00:34:43 --> 00:34:49
that arise from having to formalize the objective function

00:34:49 --> 00:34:53
under which a planning algorithm operates.

00:34:52 --> 00:34:56
If there's any learning that, as I showed yesterday,

00:34:56 --> 00:35:00
a boat on the left run by a human wants to finish the race,

00:34:59 --> 00:35:01
the boat on the right figures out

00:35:00 --> 00:35:03
hat it doesn't have to finish the race,

00:35:02 --> 00:35:05
it can pick up turbos along the way

00:35:04 --> 00:35:07
and gets much more reward.

00:35:06 --> 00:35:10
So if the objective function is to maximize the reward,

00:35:09 --> 00:35:12
you can slam into the wall over and over and over again

00:35:11 --> 00:35:15
and that's actually the way to optimize the reward.

00:35:14 --> 00:35:18
And those are the unintended consequences of an algorithm

00:35:17 --> 00:35:22
that has to be formalizable to the objective function

00:35:21 --> 00:35:23
without a human in the loop.

00:35:23 --> 00:35:25
Humans are bad at driving.

00:35:24 --> 00:35:27
As I showed yesterday,

00:35:27 --> 00:35:31
humans if they're bad at anything

00:35:30 --> 00:35:33
it's about having a good intuition

00:35:32 --> 00:35:37
about what's hard and what's easy.

00:35:36 --> 00:35:39
The fact that we have 540 million years worth of data

00:35:38 --> 00:35:42
on our visual perception system means

00:35:41 --> 00:35:44
we don't understand how damn impressive it is

00:35:43 --> 00:35:47
to be able to perceive and understand the scene

00:35:46 --> 00:35:50
in a split second, maintain context,

00:35:49 --> 00:35:52
maintain an understanding of performing

00:35:51 --> 00:35:55
all the visual localization tasks

00:35:54 --> 00:35:59
about anticipating the physics of the scene and so on.

00:35:59 --> 00:36:02
And then there's a control side.

00:36:01 --> 00:36:05
The humans don't give enough credit to ourselves.

00:36:04 --> 00:36:10
We're incredible, state-of-the-art soccer player on the left

00:36:09 --> 00:36:11
(audience laughing)

00:36:10 --> 00:36:14
and the state-of-the-art robot on the right.

00:36:25 --> 00:36:30
I think there's like four or five times he scores,

00:36:29 --> 00:36:33
(audience laughing) all right.

00:36:34 --> 00:36:37
And this is all the movement and so on involved with that,

00:36:36 --> 00:36:40
of course here that's the human robot,

00:36:39 --> 00:36:42
that's a really incredible work

00:36:41 --> 00:36:44
that's done for the DARPA Robotics Challenge

00:36:43 --> 00:36:48
with the humanoid robots on the right and incredible work

00:36:47 --> 00:36:53
by the human people doing the same kind of tasks

00:36:53 --> 00:36:56
much more impressive task I would say.

00:36:55 --> 00:36:57
So that's where we stand.

00:36:56 --> 00:37:00
And the ones on the right are actually not fully autonomous,

00:36:59 --> 00:37:02
there's still some human in the loop.

00:37:01 --> 00:37:04
There's just noisy broken communication.

00:37:03 --> 00:37:06
So that, humans are incredible

00:37:05 --> 00:37:08
in terms of our ability to understand the world

00:37:07 --> 00:37:11
and in terms of our ability to act in that world.

00:37:10 --> 00:37:15
And the fact that humans, the idea, the view,

00:37:14 --> 00:37:19
the popular view grounded in the psychology that humans

00:37:18 --> 00:37:22
and automations don't mix well, over trust,

00:37:21 --> 00:37:25
misunderstanding, loss of vigilance, the command and so on,

00:37:25 --> 00:37:28
that's not an obvious fact.

00:37:27 --> 00:37:30
It happens a lot in the lab.

00:37:29 --> 00:37:32
Most of the experiments are actually in the lab.

00:37:31 --> 00:37:34
This is the difference.

00:37:33 --> 00:37:39
You put, many of you, you put a undergrad, grad student

00:37:38 --> 00:37:42
in a lab and say here watch this screen

00:37:41 --> 00:37:45
and wait for the dot to appear.

00:37:44 --> 00:37:48
They'll tune out immediately but when it's your life

00:37:47 --> 00:37:51
and you're on the road, it's just you in the car,

00:37:50 --> 00:37:52
it's a different experience.

00:37:51 --> 00:37:55
It's not completely obvious that vigilance will be lost

00:37:54 --> 00:37:59
and it's not a complete, when it's just you and the robot,

00:37:58 --> 00:38:03
it's not completely obvious what the psychology,

00:38:02 --> 00:38:04
what the attentional mechanism,

00:38:03 --> 00:38:06
with the vigilance that it looks like.

00:38:05 --> 00:38:07
So one of the things we did,

00:38:06 --> 00:38:10
is we instrumented here 22 Tesla's and observed people

00:38:09 --> 00:38:13
now over a period of two years of what they actually do

00:38:12 --> 00:38:16
when they're driving autopilot, driving these systems.

00:38:15 --> 00:38:18
In red shown manually controlled vehicles

00:38:17 --> 00:38:23
and cyan showed vehicle control autopilot.

00:38:22 --> 00:38:24
Now there's a lot of details here

00:38:23 --> 00:38:26
and we have a lot of presentations on this

00:38:25 --> 00:38:27
but really, the fundamentals are,

00:38:26 --> 00:38:30
is that they drive 34%,

00:38:29 --> 00:38:33
large percentage of the miles in autopilot

00:38:32 --> 00:38:38
and in 26,000 moments of transfer of control

00:38:40 --> 00:38:43
they are always vigilant.

00:38:42 --> 00:38:46
There's not a moment once in this data set

00:38:45 --> 00:38:51
where they respond too late to a critical situation,

00:38:50 --> 00:38:53
to a challenging role situation.

00:38:52 --> 00:38:56
Now the data set, 22 vehicles,

00:38:55 --> 00:39:01
that's a 0.1% or less than the full Tesla fleet

00:39:01 --> 00:39:04
hat has autopilot.

00:39:03 --> 00:39:05
But it's still an inkling.

00:39:04 --> 00:39:07
It's not obvious that it's not possible to build a system

00:39:06 --> 00:39:09
that works together with a human being

00:39:11 --> 00:39:15
and that system essentially looks like this.

00:39:14 --> 00:39:18
Some percentage, 90%, maybe less, maybe more,

00:39:18 --> 00:39:22
when it can solve the problem of autonomous driving

00:39:21 --> 00:39:25
it solves it and when he needs human help it asks for help.

00:39:24 --> 00:39:28
That's the trade-off, that's the balance.

00:39:27 --> 00:39:29
On the fully autonomous side,

00:39:28 --> 00:39:33
on the right it has to solve here with citations

00:39:32 --> 00:39:36
and there's references always on the bottom.

00:39:35 --> 00:39:39
All the problems have to be solved exceptionally, perfectly,

00:39:38 --> 00:39:42
from mapping localization to the scene perception

00:39:41 --> 00:39:47
to control to planning to being able to find safe harbor

00:39:46 --> 00:39:49
at any moment to also being able

00:39:48 --> 00:39:52
to do external HMI communication with the other pedestrians,

00:39:51 --> 00:39:54
the vehicles in the scene

00:39:53 --> 00:39:55
and then there's teleoperation,

00:39:54 --> 00:39:57
vehicle-to-vehicle, vehicle-to-AI.

00:39:56 --> 00:39:59
You have to solve those perfectly

00:39:58 --> 00:40:01
if you want to solve the fully autonomous problem,

00:40:00 --> 00:40:03
as I said including all the crazy things

00:40:02 --> 00:40:05
that happen in driving.

00:40:04 --> 00:40:07
And if you approach the shared autonomy side,

00:40:06 --> 00:40:10
the semi-autonomous where you're only responsible

00:40:09 --> 00:40:13
for a large percentage but not 100% of the driving

00:40:12 --> 00:40:15
then you have to solve the human side,

00:40:14 --> 00:40:19
the human interaction, the sensing what the driver is doing,

00:40:18 --> 00:40:21
the collaborating communicating with the driver

00:40:20 --> 00:40:24
and the personalization aspect that learns with the driver.

00:40:25 --> 00:40:30
As I said you can go online, we have a lot of demonstrations

00:40:29 --> 00:40:31
of these kinds of ideas.

00:40:30 --> 00:40:34
But the natural language, the communication,

00:40:33 --> 00:40:36
I think is critical for all of us

00:40:35 --> 00:40:38
as we're tweeting as all of us do.

00:40:43 --> 00:40:45
(people chattering)

00:40:44 --> 00:40:47
So it's as simple as,

00:40:46 --> 00:40:50
so this is just demonstration of Eco taking control

00:40:49 --> 00:40:53
when the attention over time,

00:40:52 --> 00:40:55
that the driver is being,

00:40:56 --> 00:40:59
okay, we got it thank you.

00:41:02 --> 00:41:06
Okay so basically a smartphone use

00:41:05 --> 00:41:07
which has gone up year by year

00:41:06 --> 00:41:08
and we're doing a lot of analysis on that,

00:41:07 --> 00:41:10
it's really what people do

00:41:09 --> 00:41:12
in the car is they use their phone,

00:41:12 --> 00:41:15
whether it's manual or autonomous driving

00:41:14 --> 00:41:16
or semi-autonomous driving.

00:41:15 --> 00:41:20
So being able to manage that, to communicate with the driver

00:41:19 --> 00:41:23
about when they should be paying attention

00:41:22 --> 00:41:25
which may not be always.

00:41:24 --> 00:41:28
You're sort of balancing the time when it's a critical time

00:41:27 --> 00:41:29
to pay attention when it's not

00:41:28 --> 00:41:32
and communicating effectively, learning with the driver,

00:41:31 --> 00:41:36
that problem is a fundamental machine learning problem.

00:41:35 --> 00:41:38
There's a lot of data visible light,

00:41:37 --> 00:41:41
everything about the driver and it's a psychology problem.

00:41:40 --> 00:41:45
So we have data, we have complicated human beings

00:41:44 --> 00:41:48
and it's a human robot interaction problem

00:41:47 --> 00:41:49
that deserves solving.

00:41:49 --> 00:41:55
But as you'll hear on the beyond the human side looking out

00:41:55 --> 00:41:57
into the world, people that are trying

00:41:56 --> 00:41:59
to solve the fully autonomous vehicle

00:41:58 --> 00:42:01
it's really a two approach consideration.

00:42:00 --> 00:42:06
One approach is vision, cameras and deep learning, right.

00:42:07 --> 00:42:10
Collect a huge amount of data.

00:42:09 --> 00:42:14
So cameras have this aspect

00:42:13 --> 00:42:15
hat they're the highest resolution

00:42:14 --> 00:42:17
of information available.

00:42:16 --> 00:42:19
It's rich texture information

00:42:18 --> 00:42:22
and there's a lot of it which is exactly

00:42:21 --> 00:42:23
what you know networks love right.

00:42:22 --> 00:42:27
So to be able to cover all the crazy edge cases,

00:42:26 --> 00:42:31
the vision data, camera data, visible light data,

00:42:30 --> 00:42:33
is exactly the kind of data you need

00:42:32 --> 00:42:35
to collect a huge amount of, to be able to generalize over

00:42:34 --> 00:42:38
all the crazy countless edge cases that happen.

00:42:38 --> 00:42:41
It's also feasible, all the major data sets,

00:42:40 --> 00:42:46
all the, in terms of cost, interest, scale,

00:42:45 --> 00:42:49
all the major data sets of visible light cameras.

00:42:48 --> 00:42:51
That's another pro and they're cheap

00:42:50 --> 00:42:54
and the world as it happens,

00:42:54 --> 00:42:57
whoever designed the simulation that we're all living in,

00:42:56 --> 00:43:02
made it such that our world, our roads and our world,

00:43:02 --> 00:43:05
is designed for human eyes.

00:43:07 --> 00:43:10
Eyes is the way we perceive the world

00:43:09 --> 00:43:12
and so the lane mark is also on is visual,

00:43:11 --> 00:43:15
most of the road textures that you use

00:43:14 --> 00:43:20
to navigate, to drive are visible, are made for human eyes.

00:43:21 --> 00:43:25
The cons are that without a ton of data

00:43:24 --> 00:43:30
nd we don't know how much, they're not accurate.

00:43:29 --> 00:43:31
You make errors because driving is ultimately

00:43:30 --> 00:43:36
about 99.99999% accuracy and so that's what I mean

00:43:36 --> 00:43:38
by not accurate.

00:43:37 --> 00:43:41
It's really difficult to reach that level.

00:43:41 --> 00:43:45
And then the second approach is LIDAR,

00:43:45 --> 00:43:49
taking a very particular constrained set of roads,

00:43:48 --> 00:43:52
mapping the heck out of them,

00:43:51 --> 00:43:53
understanding them fully

00:43:52 --> 00:43:55
under different weather conditions and so on

00:43:54 --> 00:43:59
and then using the most accurate sensors available.

00:43:58 --> 00:44:02
A suite one sensors but really LIDAR at the forefront.

00:44:01 --> 00:44:04
Being able to localize yourself effectively.

00:44:03 --> 00:44:07
The pros there that it's consistent,

00:44:06 --> 00:44:10
especially when machine learning is not involved,

00:44:09 --> 00:44:13
it's consistent and reliable and it's explainable.

00:44:12 --> 00:44:15
If it fails, you can understand why,

00:44:14 --> 00:44:17
you can account for those situations.

00:44:16 --> 00:44:20
It's not so much true for machine learning methods.

00:44:19 --> 00:44:22
It's not so much explainable why it failed

00:44:21 --> 00:44:24
in a particular situation.

00:44:23 --> 00:44:27
The accuracy is higher as we'll talk about.

00:44:26 --> 00:44:30
The cons of LIDAR is that it's expensive

00:44:29 --> 00:44:32
and most of the approaches

00:44:31 --> 00:44:36
in perceiving the world using LIDAR primarily

00:44:35 --> 00:44:38
are not deep learning based

00:44:37 --> 00:44:40
and therefore they're not learning over time.

00:44:39 --> 00:44:42
And if they were deep learning based,

00:44:41 --> 00:44:43
there's a reason they're not,

00:44:42 --> 00:44:46
it's 'cause you need a lot of car,

00:44:45 --> 00:44:48
you gonna need a lot of LIDAR data.

00:44:47 --> 00:44:52
And there's only a tiny percentage of cars in the world

00:44:51 --> 00:44:56
quite obviously are equipped with LIDAR

00:44:55 --> 00:44:58
in order to collect that data.

00:44:57 --> 00:45:01
So quickly running through the sensors.

00:45:00 --> 00:45:06
Radar is, it's kind of like the offensive line of football.

00:45:06 --> 00:45:09
They're actually the ones that do all the work

00:45:08 --> 00:45:11
and they never get the credit.

00:45:10 --> 00:45:13
So radar is that.

00:45:12 --> 00:45:15
It's always behind to catch,

00:45:14 --> 00:45:18
to actually do the detection in terms of obstacle,

00:45:17 --> 00:45:21
the most critical safety critical obstacle avoidance.

00:45:20 --> 00:45:24
It's cheap, it does extremely well

00:45:23 --> 00:45:26
and it does well in extreme weather

00:45:25 --> 00:45:31
but it's low resolution so it cannot stand on its own

00:45:30 --> 00:45:34
to achieve any kind of degree of high autonomy.

00:45:33 --> 00:45:36
Now on the LIDAR side it's expensive,

00:45:35 --> 00:45:38
it's extremely accurate depth information,

00:45:37 --> 00:45:40
3D cloud, point cloud information.

00:45:39 --> 00:45:43
Its resolution is much higher than radar

00:45:42 --> 00:45:46
but still lower than visible light

00:45:45 --> 00:45:48
and there is depending on the sensor,

00:45:47 --> 00:45:51
a 360 degree visibility that's built in.

00:45:51 --> 00:45:54
So there's a difference in resolution here,

00:45:53 --> 00:45:58
visualized LIDAR on the right, radar on the left.

00:45:57 --> 00:46:01
The resolution is just much higher and is improving

00:46:00 --> 00:46:03
and the cost is going down and so on.

00:46:02 --> 00:46:06
Now on the camera side, it's cheap, everybody got one,

00:46:05 --> 00:46:08
the resolution is extremely high

00:46:07 --> 00:46:12
in terms of the amount of information transferred per frame

00:46:11 --> 00:46:17
and everybody you know really the scale

00:46:16 --> 00:46:18
of the number of vehicles

00:46:17 --> 00:46:20
that have this equipped is humongous.

00:46:19 --> 00:46:25
So it's ripe for application of deep learning.

00:46:24 --> 00:46:28
And the challenge is it's noisy,

00:46:27 --> 00:46:30
it's bad at depth estimation

00:46:30 --> 00:46:33
and it's not good in extreme weather.

00:46:35 --> 00:46:39
So if we kind use this plot to look,

00:46:38 --> 00:46:41
to compare these sensors,

00:46:40 --> 00:46:43
to compare these different approaches.

00:46:42 --> 00:46:46
So LIDAR works in the dark,

00:46:45 --> 00:46:49
variable lighting conditions, has pretty good resolution,

00:46:48 --> 00:46:53
has pretty good range but it's expensive,

00:46:53 --> 00:46:56
it's huge,

00:46:55 --> 00:47:01
and it doesn't provide rich textural contrast information

00:47:01 --> 00:47:05
and it's also sensitive to fog and rain conditions.

00:47:04 --> 00:47:09
Now ultrasonic sensors catch a lot of those problems.

00:47:08 --> 00:47:10
They're better at detecting proximity,

00:47:09 --> 00:47:14
they're high resolution in objects that are close

00:47:13 --> 00:47:16
which is why they're often used for parking

00:47:15 --> 00:47:17
but they can still also be integrated

00:47:16 --> 00:47:20
in the sensor fusion package

00:47:19 --> 00:47:21
for an autonomous vehicle.

00:47:20 --> 00:47:26
They really catch a lot of the problems that radar has.

00:47:25 --> 00:47:28
They complement each other well

00:47:27 --> 00:47:33
and radar, cheap, tiny, detect speed

00:47:33 --> 00:47:39
and has pretty good range

00:47:38 --> 00:47:43
but has terrible resolution.

00:47:42 --> 00:47:45
There's very little information being provided.

00:47:45 --> 00:47:51
And then cameras a lot of rich information,

00:47:50 --> 00:47:54
they're are cheap, their small range is great,

00:47:53 --> 00:47:57
the best range actually of all the sensors

00:47:56 --> 00:48:00
and works in bright conditions

00:47:59 --> 00:48:02
but doesn't work in the dark, in extreme conditions

00:48:01 --> 00:48:05
and it's just susceptible to all these kinds of problems

00:48:04 --> 00:48:07
and doesn't detect speed

00:48:06 --> 00:48:10
unless you do some tricky structure

00:48:09 --> 00:48:11
from motion kind of things.

00:48:10 --> 00:48:13
So here's where sense of fusion steps in

00:48:12 --> 00:48:16
and you, everybody works together

00:48:15 --> 00:48:18
to build an entire picture.

00:48:17 --> 00:48:20
That's how this plot works.

00:48:19 --> 00:48:22
You can stack it on top of each other.

00:48:21 --> 00:48:24
So if you look at a suite that for example Tesla is using

00:48:23 --> 00:48:26
which is ultrasonic radar and camera

00:48:25 --> 00:48:28
nd you compare it to just LIDAR

00:48:27 --> 00:48:30
and see how these paths compare

00:48:29 --> 00:48:35
that actually the suite of camera, radar

00:48:34 --> 00:48:38
and ultrasonic are comparable to LIDAR.

00:48:38 --> 00:48:41
So that those are the two comparisons that we have.

00:48:40 --> 00:48:44
You have the costly non machine-learning way

00:48:43 --> 00:48:48
of LIDAR and you have the cheap

00:48:47 --> 00:48:52
but needs a lot of data and is not explainable and reliable

00:48:51 --> 00:48:55
in the near-term vision based approach.

00:48:54 --> 00:48:57
And those are the two competing approaches.

00:48:56 --> 00:48:59
Now of course huevos will talk about they're trying

00:48:58 --> 00:49:03
to use both but ultimately the question is

00:49:02 --> 00:49:08
who catches, who is the fail safe?

00:49:07 --> 00:49:10
In the semi-autonomous way

00:49:09 --> 00:49:12
when there's a camera based method,

00:49:11 --> 00:49:13
the human is the fail safe.

00:49:12 --> 00:49:16
When you say, oh crap I don't know what to do,

00:49:15 --> 00:49:18
the human catches.

00:49:17 --> 00:49:21
In the fully autonomous mode,

00:49:20 --> 00:49:25
so what Waymo's working on and others,

00:49:24 --> 00:49:27
the fail safe is LIDAR,

00:49:26 --> 00:49:31
the fail safe is maps that you can't rely on the human.

00:49:30 --> 00:49:33
But you know this road so well

00:49:32 --> 00:49:35
that if the camera is freaked out

00:49:34 --> 00:49:37
if there's any of the sensors freaked out

00:49:36 --> 00:49:40
hat you're able to, you have such good maps,

00:49:39 --> 00:49:42
you have such good accurate sensors,

00:49:41 --> 00:49:45
that the fundamental problem of obstacle avoidance

00:49:44 --> 00:49:50
which is what safety is about, can be solved.

00:49:49 --> 00:49:53
The question is what kind of experience that creates.

00:49:52 --> 00:49:55
In the meantime as the people debate,

00:49:54 --> 00:49:57
try to make money, start companies,

00:49:56 --> 00:49:59
there's just lots of data.

00:49:58 --> 00:50:04
Ford F-150 still the most popular car in America.

00:50:03 --> 00:50:05
Manually driven cars are still happening.

00:50:04 --> 00:50:07
So there's a lot of data happening.

00:50:06 --> 00:50:11
Semi-autonomous cars, every company is now releasing

00:50:10 --> 00:50:14
more and more semi-autonomous technology.

00:50:13 --> 00:50:16
So that's all data.

00:50:15 --> 00:50:19
And what that boils down to is the two paths

00:50:18 --> 00:50:22
they're walking towards is vision versus LIDAR,

00:50:21 --> 00:50:26
L2 versus L4, semi-autonomous versus fully autonomous.

00:50:25 --> 00:50:29
Tesla on the semi-autonomous front has reached

00:50:28 --> 00:50:30
one billion miles.

00:50:29 --> 00:50:32
Waymo the leader on the autonomous front has reached

00:50:31 --> 00:50:34
10 million miles.

00:50:33 --> 00:50:36
The pros and cons as I've outlined them.

00:50:35 --> 00:50:41
One, division one, the one I'm obviously very excited about

00:50:40 --> 00:50:44
and machine learning researchers excited are about

00:50:43 --> 00:50:47
which fundamentally relies on huge data and deep learning.

00:50:46 --> 00:50:52
The neural networks that are running inside the Tesla

00:50:51 --> 00:50:54
nd with their new as they,

00:50:54 --> 00:50:57
it's kind of the same kind of path as Google was taking

00:50:56 --> 00:50:59
from the GPU to the TPU,

00:50:58 --> 00:51:03
Tesla's taking from Nvidia Drive PX2 system,

00:51:02 --> 00:51:05
sort of more general GPU based system

00:51:04 --> 00:51:06
to creating their own ASIC

00:51:05 --> 00:51:08
and having a ton of awesome neural networks running

00:51:07 --> 00:51:09
on their car.

00:51:08 --> 00:51:12
That kind of path, that others are beginning to embrace,

00:51:11 --> 00:51:14
is really interesting to think about

00:51:13 --> 00:51:16
for machine learning engineers.

00:51:15 --> 00:51:20
And then people that are maybe more grounded

00:51:19 --> 00:51:25
and actually wanna, are really, value, safety, reliability

00:51:25 --> 00:51:29
and sort of from the automotive world, are thinking well

00:51:28 --> 00:51:32
we need machine learning is not explainable

00:51:31 --> 00:51:36
it's difficult to work with, it's not reliable

00:51:35 --> 00:51:38
and so in that sense we have to have a sensor suite

00:51:37 --> 00:51:39
that are extremely reliable.

00:51:38 --> 00:51:41
Those are the two paths.

00:51:41 --> 00:51:44
Yep, question.

00:51:43 --> 00:51:49
The question is there's all kinds of things you need

00:51:48 --> 00:51:51
to perceive, stop signs and traffic lights,

00:51:50 --> 00:51:53
pedestrians and so on.

00:51:52 --> 00:51:56
Some of them, if you hit them it's a problem,

00:51:55 --> 00:51:59
some of them are a bag flying through the air

00:51:58 --> 00:52:01
and all have different visual characteristics

00:52:00 --> 00:52:02
all have different characteristics

00:52:01 --> 00:52:04
for all the different sensors.

00:52:03 --> 00:52:09
So LIDAR can detect of solid-body objects,

00:52:08 --> 00:52:11
camera is better at detecting,

00:52:11 --> 00:52:15
as last year Sasha Arnu talked about,

00:52:14 --> 00:52:17
I think fog or smoke.

00:52:16 --> 00:52:18
These are interesting things.

00:52:17 --> 00:52:20
They might look like an object

00:52:19 --> 00:52:22
o certain sensors and not to others,

00:52:21 --> 00:52:27
But the traffic light detection problem luckily is

00:52:26 --> 00:52:31
with cameras is, it's pretty solved at this point.

00:52:30 --> 00:52:34
So that's luckily the easy part.

00:52:33 --> 00:52:37
The hard part is when you have a green light

00:52:36 --> 00:52:42
and there's a drunk, drugged, drowsy or distracted,

00:52:41 --> 00:52:45
the four Ds that hits an online pedestrian trying to cross

00:52:45 --> 00:52:47
what to do.

00:52:46 --> 00:52:48
That's the hard part.

00:52:47 --> 00:52:52
So the road ahead for us as engineers,

00:52:51 --> 00:52:53
the science is the thing I'm super excited

00:52:52 --> 00:52:55
about the possibility

00:52:54 --> 00:52:57
of artificial intelligence having a huge impact,

00:52:56 --> 00:53:01
is taking the step from having these

00:53:01 --> 00:53:05
ven if they're large, toy datasets,

00:53:04 --> 00:53:09
toy problems, toy benchmarks of ImageNet classification

00:53:09 --> 00:53:13
in cocoa, all the exciting deep RL stuff

00:53:12 --> 00:53:16
that we'll talk about in the future weeks,

00:53:15 --> 00:53:19
really are toy examples, the game of go and chess and so on.

00:53:18 --> 00:53:21
But taking those algorithms and putting them in cars

00:53:20 --> 00:53:23
where they can save people's lives

00:53:22 --> 00:53:25
and they actually directly touch

00:53:24 --> 00:53:28
and impact our entire civilization

00:53:27 --> 00:53:30
that's actually the defining problem

00:53:29 --> 00:53:34
for artificial intelligence in the 21st century is AI

00:53:33 --> 00:53:35
that touches people in a real way

00:53:34 --> 00:53:38
and I think cars, autonomous vehicles,

00:53:37 --> 00:53:40
is one of the big ways that that happens.

00:53:39 --> 00:53:43
We get to deal with the psychology, the philosophy,

00:53:42 --> 00:53:46
the sociology aspects of it, how we associate,

00:53:45 --> 00:53:48
think about it, to the robotics problem,

00:53:47 --> 00:53:49
to the perception problem.

00:53:48 --> 00:53:51
It's a fascinating space to explore

00:53:51 --> 00:53:55
and we have many guest speakers exploring

00:53:54 --> 00:53:56
that different ways

00:53:55 --> 00:53:59
and that's really exciting to see

00:53:58 --> 00:54:02
how these people are trying to change the world.

00:54:01 --> 00:54:05
So with that I'd like to thank you very much,

00:54:04 --> 00:54:08
go to deeplearning.mit.edu

00:54:07 --> 00:54:10
and the code is always available online.

00:54:09 --> 00:54:13
(people clapping)

<!-- YOUTUBE_TRANSCRIPT_END -->
