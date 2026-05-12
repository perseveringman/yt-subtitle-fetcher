---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "1L0TKZQcUtA"
title: "MIT 6.S094: Introduction to Deep Learning and Self-Driving Cars"
video_url: "https://www.youtube.com/watch?v=1L0TKZQcUtA"
thumbnail_url: "https://i.ytimg.com/vi/1L0TKZQcUtA/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=1L0TKZQcUtA"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2017-01-16T17:11:59.000Z"
upload_date: "2017-01-16"
duration_seconds: 5489
duration_human: "1:31:29"
view_count: 1240311
like_count: 15852
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:22:59.237Z"
---

# MIT 6.S094: Introduction to Deep Learning and Self-Driving Cars

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=1L0TKZQcUtA
- video_id: 1L0TKZQcUtA
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2017-01-16T17:11:59.000Z
- upload_date: 2017-01-16
- duration: 1:31:29
- view_count: 1240311
- like_count: 15852
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, deep learning course, deep learning mit, self-driving cars, lex fridman deep learning, lex fridman, machine learning, computer vision, artificial intelligence, tensorflow tutorial, neural network, mit deep learning, self driving car, deep learning ai, deep learning tutorial, deep learning andrew ng, deep learning python, neural networks, convolutional neural networks, self-driving car
- categories: Science & Technology

## Description

First deep learning intro lecture of course 6.S094: Deep Learning for Self-Driving Cars taught in Winter 2017.

INFO:
Slides: http://bit.ly/2HmL5ia
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Playlist: https://goo.gl/SLCb1y

Links to individual lecture videos for the course:

Lecture 1: Introduction to Deep Learning and Self-Driving Cars
https://youtu.be/1L0TKZQcUtA

Lecture 2: Deep Reinforcement Learning for Motion Planning
https://youtu.be/QDzM8r3WgBw

Lecture 3: Convolutional Neural Networks for End-to-End Learning of the Driving Task 
https://youtu.be/U1toUkZw6VI

Lecture 4: Recurrent Neural Networks for Steering through Time 
https://youtu.be/nFTQ7kHQWtc

Lecture 5: Deep Learning for Human-Centered Semi-Autonomous Vehicles 
https://youtu.be/ByZF8_-OJNI

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:03
Alright. Hello everybody.

00:00:03 --> 00:00:05
Hopefully you can hear me well.

00:00:05 --> 00:00:06
Yes?

00:00:06 --> 00:00:07
Yes.

00:00:06 --> 00:00:08
Great!

00:00:08 --> 00:00:13
So, welcome to Course 6.S094.

00:00:13 --> 00:00:16
Deep Learning for Self-Driving Cars.

00:00:16 --> 00:00:22
We will introduce to you the methods of deep learning,

00:00:21 --> 00:00:28
of deep neural networks using the guiding case study of building self-driving cars.

00:00:28 --> 00:00:32
My name is Lex Fridman.

00:00:32 --> 00:00:36
You get to listen to me for a majority of these lectures

00:00:36 --> 00:00:43
and I am part of an amazing team with some brilliant TAs.

00:00:42 --> 00:00:44
Would you say brilliant?

00:00:43 --> 00:00:45
(CHUCKLES)

00:00:46 --> 00:00:48
Dan Brown.

00:00:48 --> 00:00:50
You guys want to stand up?

00:00:49 --> 00:00:51
They're in the front row.

00:00:51 --> 00:00:54
Spencer, William Angell.

00:00:54 --> 00:00:57
Spencer Dodd and all the way in the back.

00:00:57 --> 00:01:02
The smartest and the tallest person I know, Benedict Jenik.

00:01:03 --> 00:01:17
Well you see there on the left of the slide is a visualization of one of the two projects that one of the two simulations, games that we'll get to go through.

00:01:18 --> 00:01:25
We use it as a way to teach you about deep reinforcement learning but also as a way to excite you.

00:01:25 --> 00:01:28
By challenging you to compete against others

00:01:28 --> 00:01:34
if you wish to in a special prize yet to be announced.

00:01:33 --> 00:01:35
Super secret prize.

00:01:36 --> 00:01:46
So you can reach me and the TA's at deepcars@MIT.edu if you have any questions about the tutorials, about the lecture, about anything at all.

00:01:47 --> 00:01:51
The website cars.mit.edu has the lecture content.

00:01:51 --> 00:01:58
Code tutorials, again like today, the lectures slides for today are already up in PDF form.

00:01:58 --> 00:02:08
The slides themselves, if you want to see them just e-mail me but there are over a gigabyte in size because they're very heavy in videos so I'm just posting the PDS.

00:02:10 --> 00:02:16
And there will be lecture videos available a few days after the lectures were given.

00:02:15 --> 00:02:19
So speaking of which there is a camera in the back.

00:02:19 --> 00:02:27
This is being videotaped and recorded but for the most part the camera is just on the speaker.

00:02:27 --> 00:02:29
So you shouldn't have to worry.

00:02:29 --> 00:02:35
If that kind of thing worries you then you could sit on the periphery of the classroom

00:02:34 --> 00:02:41
or maybe I suggest sunglasses and a moustache, fake mustache, would be a good idea.

00:02:40 --> 00:02:44
There is a competition for the game that you see on the left.

00:02:43 --> 00:02:46
I'll describe exactly what's involved

00:02:47 --> 00:02:50
in order to get credit for the course you have to

00:02:50 --> 00:02:57
design a neural network that drives the car just above the speed limit sixty five miles an hour.

00:02:56 --> 00:03:00
But if you want to win, we need to go a little faster than that.

00:03:03 --> 00:03:06
So who's this class is for?

00:03:07 --> 00:03:09
You may be new to programming,

00:03:09 --> 00:03:11
new to machine learning,

00:03:10 --> 00:03:12
new to robotics,

00:03:12 --> 00:03:17
or you're an expert in those fields but want to go back to the basics.

00:03:18 --> 00:03:22
So what you will learn is an overview of deep reinforcement learning,

00:03:22 --> 00:03:24
of convolutional neural networks,

00:03:24 --> 00:03:26
recurring neural networks

00:03:26 --> 00:03:32
and how these methods can help improve each of the components of autonomous driving -

00:03:32 --> 00:03:41
perception, visual perception, localization, mapping, control planning and the detection of driver state.

00:03:42 --> 00:03:44
Okay, two projects.

00:03:44 --> 00:03:47
Code named "DeepTraffic" is the first one.

00:03:47 --> 00:03:51
There is, in this particular formulation of it,

00:03:50 --> 00:03:53
there is seven lanes.

00:03:52 --> 00:03:55
It's a top view.

00:03:55 --> 00:04:00
It looks like a game but I assure you it's very serious.

00:04:00 --> 00:04:04
It is the agent in red,

00:04:04 --> 00:04:08
the car in red is being controlled by a neural network and we'll explain

00:04:08 --> 00:04:15
how you can control and design the various aspects, the various parameters of this neural network

00:04:16 --> 00:04:20
and it learns in the browser.

00:04:19 --> 00:04:22
So this, we're using ConvNet.JS

00:04:22 --> 00:04:27
which is a library that is programmed by Andrej Karpathy in javascript.

00:04:27 --> 00:04:33
So amazingly we live in a world where you can train in a matter of minutes

00:04:33 --> 00:04:36
a neural network in your browser.

00:04:36 --> 00:04:38
And we'll talk about how to do that.

00:04:37 --> 00:04:39
The reason we did this

00:04:39 --> 00:04:47
so that there is very few requirements to get you up and started with neural networks.

00:04:46 --> 00:04:51
So in order to complete this project for the course,

00:04:51 --> 00:04:55
you don't need any requirements except to have a Chrome browser.

00:04:56 --> 00:05:01
And to win the competition you don't need anything except the Chrome browser.

00:05:02 --> 00:05:05
The second project code name "DeepTesla"

00:05:06 --> 00:05:08
or "Tesla"

00:05:09 --> 00:05:13
is using data from a Tesla vehicle

00:05:14 --> 00:05:16
of the forward road way

00:05:16 --> 00:05:18
and using end-to-end learning

00:05:17 --> 00:05:23
taking the image and putting into convolutional neural networks

00:05:22 --> 00:05:24
that directly maps

00:05:24 --> 00:05:28
"or aggressor" that maps to a steering angle.

00:05:28 --> 00:05:31
So all it takes is a single image

00:05:30 --> 00:05:34
and it predicts a steering angle for the car.

00:05:34 --> 00:05:37
We have data for the car itself

00:05:36 --> 00:05:39
and you get to build a neural network

00:05:39 --> 00:05:42
that tries to do better,

00:05:42 --> 00:05:45
tries to steer better or at least as good as the car.

00:05:46 --> 00:05:47
Okay.

00:05:48 --> 00:05:52
Let's get started with the question,

00:05:53 --> 00:05:58
with the thing that we understand so poorly at this time

00:05:57 --> 00:06:00
because it's so shot in mystery

00:05:59 --> 00:06:02
but it fascinates many of us.

00:06:02 --> 00:06:05
And that is the question of: "What is intelligence?"

00:06:06 --> 00:06:15
This is from a March 1996 Time magazine.

00:06:14 --> 00:06:18
And the question: "Can machines think?"

00:06:17 --> 00:06:21
is answered below with, "they already do."

00:06:22 --> 00:06:25
So what if anything is special about the human mind?

00:06:26 --> 00:06:28
It's a good question for 1996,

00:06:28 --> 00:06:30
a good question for 2016,

00:06:30 --> 00:06:32
2017 now,

00:06:32 --> 00:06:33
and the future.

00:06:33 --> 00:06:36
And there's two ways to ask that question.

00:06:35 --> 00:06:38
One is the special purpose version.

00:06:39 --> 00:06:45
Can an artificial intelligence system achieve a well defined,

00:06:46 --> 00:06:50
specifically, formally defined finite set of goals?

00:06:50 --> 00:06:53
And this little diagram

00:06:53 --> 00:06:58
from a book that got me into artificial intelligence as a bright-eyed high school student

00:06:58 --> 00:07:01
hey are artificial intelligence to modern approach.

00:07:02 --> 00:07:09
This is a beautifully simple diagram of a system.

00:07:09 --> 00:07:11
It exists in an environment.

00:07:10 --> 00:07:16
It has a set of sensors that do the perception.

00:07:16 --> 00:07:18
It takes those sensors in.

00:07:18 --> 00:07:20
It does something magical.

00:07:19 --> 00:07:21
There's a question mark there.

00:07:21 --> 00:07:25
And with a set of affectors acts in the world, manipulates objects in that world,

00:07:27 --> 00:07:30
and so special purpose.

00:07:30 --> 00:07:31
We can,

00:07:32 --> 00:07:34
under this formulation,

00:07:33 --> 00:07:36
as long as the environment is formally defined,

00:07:35 --> 00:07:37
well defined;

00:07:36 --> 00:07:40
as long as a set of goals are well defined.

00:07:39 --> 00:07:41
As long as the set of actions,

00:07:41 --> 00:07:43
sensors,

00:07:42 --> 00:07:48
and the ways that the perception carries itself out as well defined.

00:07:48 --> 00:07:51
We have good algorithms

00:07:50 --> 00:07:52
which will talk about

00:07:52 --> 00:07:55
hat can optimize for those goals.

00:07:55 --> 00:07:57
The question is,

00:07:56 --> 00:07:59
if we inch along this path,

00:08:00 --> 00:08:04
will we get closer to the general formulation,

00:08:04 --> 00:08:09
to the general purpose version of what artificial intelligence is?

00:08:10 --> 00:08:13
Can it achieve poorly defined,

00:08:12 --> 00:08:14
unconstrained set of goals

00:08:14 --> 00:08:17
with an unconstrained, poorly defined set of actions

00:08:17 --> 00:08:23
and unconstrained, poorly defined utility functions rewards.

00:08:24 --> 00:08:27
This is what human life is about.

00:08:26 --> 00:08:29
This is what we do pretty well most days.

00:08:30 --> 00:08:37
Exist in an undefined, full of uncertainty, world.

00:08:38 --> 00:08:40
So, okay.

00:08:39 --> 00:08:43
We can separate tasks into three different, categories,

00:08:43 --> 00:08:45
formal tasks.

00:08:45 --> 00:08:46
This is the easiest.

00:08:47 --> 00:08:51
It doesn't seem so, it didn't seem so at the birth of artificial intelligence

00:08:50 --> 00:08:53
but that's in fact true if you think about it.

00:08:52 --> 00:08:55
The easiest is the formal tasks,

00:08:54 --> 00:08:57
playing board games, theory improving.

00:08:58 --> 00:09:03
All the kind of mathematical logic problems that can be formally defined.

00:09:04 --> 00:09:06
Then there is the expert tasks.

00:09:07 --> 00:09:13
So this is where a lot of the exciting breakthroughs have been happening

00:09:12 --> 00:09:15
where machine learning methods,

00:09:15 --> 00:09:17
data driven methods,

00:09:16 --> 00:09:21
can help aid or improve on

00:09:20 --> 00:09:23
the performance of our human experts.

00:09:22 --> 00:09:26
This means medical diagnosis, hardware design,

00:09:26 --> 00:09:27
scheduling,

00:09:27 --> 00:09:31
and then there is the thing that we take for granted.

00:09:30 --> 00:09:32
The trivial thing.

00:09:31 --> 00:09:37
The thing that we do so easily every day when we wake up in the morning.

00:09:37 --> 00:09:40
The mundane tasks of everyday speech,

00:09:40 --> 00:09:42
of written language,

00:09:42 --> 00:09:44
of visual perception,

00:09:44 --> 00:09:50
of walking which we'll talk about in today's lecture

00:09:49 --> 00:09:52
is a fascinatingly difficult task

00:09:52 --> 00:09:55
on object manipulation.

00:09:55 --> 00:09:59
So the question is that we're asking here,

00:09:59 --> 00:10:01
before we talk about deep learning,

00:10:01 --> 00:10:03
before we talk about the specific methods,

00:10:03 --> 00:10:10
we really want to dig in and try to see what is it about driving,

00:10:11 --> 00:10:13
how difficult is driving.

00:10:14 --> 00:10:18
Is it more like chess which you see on the left there

00:10:17 --> 00:10:20
where we can formally define a set of lanes,

00:10:19 --> 00:10:27
a set of actions and formulate it as there's five set of actions - you can change your lane,

00:10:26 --> 00:10:28
you can avoid obstacles.

00:10:27 --> 00:10:31
You can formally define an obstacle.

00:10:30 --> 00:10:33
You can the formally define the rules of the road.

00:10:33 --> 00:10:38
Or is there something about natural language,

00:10:37 --> 00:10:41
something similar to everyday conversation about driving

00:10:40 --> 00:10:44
that requires a much higher degree of reasoning,

00:10:44 --> 00:10:47
of communication,

00:10:47 --> 00:10:49
of learning,

00:10:49 --> 00:10:53
of existing in this under-actuated space.

00:10:52 --> 00:10:56
Is it a lot more than just left lane,

00:10:55 --> 00:10:57
right lane,

00:10:57 --> 00:10:58
speed up,

00:10:57 --> 00:10:59
slow down?

00:11:00 --> 00:11:03
So let's look at it as a chess game.

00:11:03 --> 00:11:05
Here's the chess pieces.

00:11:05 --> 00:11:11
What are the sensors we get to work with on an autonomous vehicle?

00:11:11 --> 00:11:13
And we get a lot more in-depth on this

00:11:13 --> 00:11:15
especially with the guest speakers

00:11:14 --> 00:11:16
who built many of these.

00:11:17 --> 00:11:19
There's radar.

00:11:18 --> 00:11:20
There's the Rays sensors.

00:11:19 --> 00:11:21
Radar lidar.

00:11:20 --> 00:11:25
They give you information about the obstacles in their environment.

00:11:25 --> 00:11:29
They'll help localize the obstacles in the environment.

00:11:28 --> 00:11:31
There's the visible light camera

00:11:30 --> 00:11:35
nd stereo vision that gives you texture information,

00:11:35 --> 00:11:39
that helps you figure out not just where the obstacles are

00:11:38 --> 00:11:40
but what they are,

00:11:39 --> 00:11:42
helps to classify those,

00:11:42 --> 00:11:46
has to understand their subtle movements.

00:11:47 --> 00:11:50
Then there is the information about the vehicle itself,

00:11:50 --> 00:11:55
about the trajectory and the movement of the vehicle that comes from the GPS

00:11:54 --> 00:11:56
an IMU sensors.

00:11:57 --> 00:12:01
And there is the rich state of the vehicle itself.

00:12:00 --> 00:12:02
What is it doing?

00:12:02 --> 00:12:05
What are all the individual systems doing

00:12:04 --> 00:12:07
that comes from the canned network.

00:12:08 --> 00:12:12
And there is one of the less studied

00:12:11 --> 00:12:15
but fascinating to us on the research side is audio.

00:12:15 --> 00:12:17
The sounds of the road

00:12:18 --> 00:12:21
that provide the rich context

00:12:21 --> 00:12:23
of a wet road.

00:12:22 --> 00:12:26
The sound of a road that when it stop raining

00:12:25 --> 00:12:27
but it's still wet,

00:12:27 --> 00:12:28
the sound that it makes.

00:12:30 --> 00:12:32
The screeching tire

00:12:31 --> 00:12:33
and honking.

00:12:33 --> 00:12:35
These are all fascinating signals as well.

00:12:35 --> 00:12:39
And the focus of the research in our group,

00:12:39 --> 00:12:41
the thing that's really much

00:12:42 --> 00:12:45
under-investigated

00:12:44 --> 00:12:47
is the internal facing sensors.

00:12:47 --> 00:12:49
The driver,

00:12:49 --> 00:12:53
sensing the state of the driver,

00:12:52 --> 00:12:54
were they looking?

00:12:53 --> 00:12:56
Are they sleepy?

00:12:55 --> 00:12:58
The emotional state.

00:12:57 --> 00:12:59
Are they in the seat at all?

00:13:00 --> 00:13:02
And the same with audio.

00:13:03 --> 00:13:07
That comes from the visual information and the audio information.

00:13:08 --> 00:13:10
More than that.

00:13:10 --> 00:13:12
Here are the tasks.

00:13:11 --> 00:13:14
If you were to break into modules the tasks

00:13:13 --> 00:13:17
of what it means to build a self-driving vehicle.

00:13:18 --> 00:13:20
First, you want to know where you are.

00:13:19 --> 00:13:21
Where am I.

00:13:21 --> 00:13:23
Localization and mapping.

00:13:22 --> 00:13:25
You want to map the external environment.

00:13:25 --> 00:13:28
Figure out where all the different

00:13:27 --> 00:13:30
obstacles are,

00:13:30 --> 00:13:32
all the entities are,

00:13:31 --> 00:13:35
and use that estimate of the environment

00:13:34 --> 00:13:37
o then figure out where I am,

00:13:36 --> 00:13:39
where the robot is.

00:13:39 --> 00:13:41
Then there is scene understanding.

00:13:42 --> 00:13:45
It's understanding not just the positional aspects

00:13:44 --> 00:13:49
of the external environment and the dynamics of it

00:13:48 --> 00:13:52
but also what those entities are.

00:13:51 --> 00:13:53
Is it a car? Is it a pedestrian?

00:13:53 --> 00:13:54
Is it a bird?

00:13:56 --> 00:13:58
There is movement planning.

00:13:58 --> 00:14:02
Once you have kind of figured out to the best of your abilities

00:14:02 --> 00:14:07
your position and the position of other entities in this world,

00:14:06 --> 00:14:09
it's figuring out a trajectory through that world.

00:14:10 --> 00:14:12
And finally,

00:14:12 --> 00:14:15
once you've figured out how to move about safely

00:14:14 --> 00:14:18
and effectively through the world

00:14:17 --> 00:14:21
it's figuring out what the human that's on board is doing

00:14:21 --> 00:14:23
because as I will talk about

00:14:23 --> 00:14:26
he path to a self-driving vehicle

00:14:26 --> 00:14:29
and that is, hence, our focus on Tesla

00:14:30 --> 00:14:35
may go through semi-autonomous vehicles.

00:14:35 --> 00:14:41
Where the vehicle must not only drive itself

00:14:40 --> 00:14:43
but effectively hand over control

00:14:43 --> 00:14:45
from the car

00:14:45 --> 00:14:47
to the human

00:14:46 --> 00:14:47
d back.

00:14:49 --> 00:14:51
Ok, quick history.

00:14:51 --> 00:14:54
Well, there's a lot of fun stuff from the eighty's and ninety's but

00:14:57 --> 00:15:03
he big breakthroughs came in the second DARPA Grand Challenge

00:15:03 --> 00:15:06
with Stanford Stanley,

00:15:05 --> 00:15:07
when they won the competition.

00:15:06 --> 00:15:09
One of five cars that finished.

00:15:09 --> 00:15:14
This was an incredible accomplishment in a desert race.

00:15:16 --> 00:15:19
A fully autonomous vehicle was able to complete the race

00:15:20 --> 00:15:22
in record time.

00:15:27 --> 00:15:32
The DARPA Urban Challenge in 2007

00:15:33 --> 00:15:38
where the task was no longer a race to the desert

00:15:38 --> 00:15:41
but through an urban environment

00:15:41 --> 00:15:47
and CMU's "Boss" with GM won that race

00:15:48 --> 00:15:53
and a lot of that work went directly into the

00:15:54 --> 00:16:01
acceptance and large major industry players

00:16:00 --> 00:16:03
taking on the challenge of building these vehicles.

00:16:04 --> 00:16:08
Google, now "Waymo" self-driving car.

00:16:09 --> 00:16:14
Tesla with its "Autopilot" system and now "Autopilot 2" system.

00:16:14 --> 00:16:18
Uber with its testing in Pittsburgh.

00:16:18 --> 00:16:21
And there's many other companies

00:16:20 --> 00:16:24
including one of the speakers for this course

00:16:23 --> 00:16:25
of nuTonomy

00:16:25 --> 00:16:30
that are driving the wonderful streets of Boston.

00:16:32 --> 00:16:34
Ok. So let's take a step back.

00:16:35 --> 00:16:40
We have, if we think about the accomplishments in the DARPA Challenge,

00:16:40 --> 00:16:46
and if you look at the accomplishments of the Google self-driving car

00:16:46 --> 00:16:50
which essentially boils the world down into a chess game.

00:16:52 --> 00:16:57
It uses incredibly accurate sensors

00:16:57 --> 00:17:00
to build a three dimensional map of the world,

00:16:59 --> 00:17:02
localize itself effectively in that world

00:17:02 --> 00:17:04
and move about that world

00:17:06 --> 00:17:09
in a very well-defined way.

00:17:12 --> 00:17:14
Now, what if driving...

00:17:14 --> 00:17:19
The open question is: if driving is more like a conversation,

00:17:19 --> 00:17:22
like in natural language conversation,

00:17:22 --> 00:17:25
how hard is it to pass the Turing Test?

00:17:24 --> 00:17:26
The Turing Test,

00:17:26 --> 00:17:29
as the popular current formulation is,

00:17:29 --> 00:17:34
can a computer be mistaken for a human being

00:17:33 --> 00:17:35
in more than thirty percent of the time?

00:17:35 --> 00:17:38
When a human is talking behind a veil,

00:17:38 --> 00:17:41
having a conversation with their computer or a human,

00:17:40 --> 00:17:44
can they mistake the other side of that conversation

00:17:44 --> 00:17:48
for being a human when it's in fact a computer.

00:17:50 --> 00:17:56
And the way you would, in a natural language,

00:17:55 --> 00:18:00
build a system that has successfully passes the Turing Test is,

00:18:00 --> 00:18:03
the natural language processing part

00:18:02 --> 00:18:06
o enable it to communicate successfully?

00:18:05 --> 00:18:10
So, general language and interpret language,

00:18:10 --> 00:18:14
then you represent knowledge the state of the conversation

00:18:13 --> 00:18:15
transferred over time.

00:18:15 --> 00:18:19
And the last piece and this is the hard piece,

00:18:18 --> 00:18:21
is the automated reasoning,

00:18:22 --> 00:18:23
is reasoning.

00:18:24 --> 00:18:30
Can we teach machine learning methods to reason?

00:18:30 --> 00:18:34
That is something that will propagate through our discussion

00:18:34 --> 00:18:41
because as I will talk about the various methods,

00:18:41 --> 00:18:43
the various deep learning methods,

00:18:43 --> 00:18:49
neural networks are good at learning from data

00:18:49 --> 00:18:53
but they're not yet, there is no good mechanism for reasoning.

00:18:54 --> 00:18:57
Now reasoning could be just something

00:18:56 --> 00:19:01
that we tell ourselves we do to feel special.

00:19:00 --> 00:19:04
Better to feel like we're better than machines.

00:19:04 --> 00:19:07
Reasoning may be simply

00:19:06 --> 00:19:10
something as simple as learning from data.

00:19:11 --> 00:19:14
We just need a larger network.

00:19:14 --> 00:19:19
Or there could be a totally different mechanism required

00:19:18 --> 00:19:22
and we'll talk about the possibilities there.

00:19:23 --> 00:19:24
Yes.

00:19:26 --> 00:19:34
(Inaudible question from one of the attendees)

00:19:33 --> 00:19:38
No, it's very difficult to find these kind of situations in the United States.

00:19:37 --> 00:19:39
So the question was,

00:19:38 --> 00:19:43
for this video, is it in the United States or not?

00:19:42 --> 00:19:47
I believe it's in Tokyo.

00:19:47 --> 00:20:01
So India, as is a few European countries, are much more towards the direction

00:20:00 --> 00:20:05
of natural language versus chess.

00:20:05 --> 00:20:12
In the United States, generally speaking, we follow rules more concretely.

00:20:11 --> 00:20:14
The quality of roads is better.

00:20:13 --> 00:20:15
The marking on the roads is better.

00:20:15 --> 00:20:18
So there's less requirements there.

00:20:17 --> 00:20:29
(Inaudible question from one of the attendees)

00:20:28 --> 00:20:31
These cars are are driving on one side?

00:20:36 --> 00:20:37
I see.

00:20:37 --> 00:20:41
I just- Okay, you're right.

00:20:40 --> 00:20:41
It is because, yeah-

00:20:41 --> 00:20:44
So, but it's certainly not the United States.

00:20:47 --> 00:20:49
I spent quite a bit of googling

00:20:48 --> 00:20:52
trying to find in the United States and it is difficult.

00:20:55 --> 00:20:58
So let's talk about

00:20:59 --> 00:21:03
he recent breakthroughs in machine learning

00:21:02 --> 00:21:06
and what is at the core of those breakthroughs

00:21:06 --> 00:21:08
is neural networks

00:21:09 --> 00:21:12
that have been around for a long time

00:21:12 --> 00:21:14
and I will talk about what has changed.

00:21:14 --> 00:21:17
What are the cool new things

00:21:17 --> 00:21:19
and what hasn't changed

00:21:19 --> 00:21:21
and what are its possibilities.

00:21:20 --> 00:21:25
But first a neuron, crudely,

00:21:26 --> 00:21:31
is a computational building block of the brain.

00:21:30 --> 00:21:34
I know there's a few folks here, neuroscience folks,

00:21:36 --> 00:21:39
this is hardly a model.

00:21:39 --> 00:21:43
It is mostly an inspiration

00:21:43 --> 00:21:47
and so the human neuron

00:21:48 --> 00:21:51
has inspired the artificial neuron

00:21:51 --> 00:21:55
the computational building block of a neural network,

00:21:54 --> 00:21:57
of an artificial neural network.

00:21:57 --> 00:21:59
I have to give you some context.

00:22:01 --> 00:22:03
These neurons,

00:22:02 --> 00:22:06
for both artificial and human brains,

00:22:05 --> 00:22:07
are interconnected.

00:22:08 --> 00:22:09
And the human brain,

00:22:08 --> 00:22:17
there's about, I believe 10,000 outgoing connections from every neuron

00:22:17 --> 00:22:22
average and they're interconnected to each other,

00:22:23 --> 00:22:28
are the largest current, as far as I'm aware,

00:22:27 --> 00:22:34
artificial neural network, has 10 billion of those connections.

00:22:33 --> 00:22:35
Synapses.

00:22:35 --> 00:22:40
Our human brain, to the best estimate that I'm aware of,

00:22:40 --> 00:22:45
has 10,000X that.

00:22:46 --> 00:22:51
So one hundred to one thousand trillion synapses.

00:22:55 --> 00:23:00
Now what is an artificial neuron?

00:23:00 --> 00:23:03
That is the building block of a neural network.

00:23:04 --> 00:23:06
It takes a set of inputs.

00:23:07 --> 00:23:12
It puts a weight on each of those inputs, sums them together,

00:23:13 --> 00:23:19
applies a bias value on each neuron

00:23:19 --> 00:23:22
and using an activation function

00:23:21 --> 00:23:24
that takes its input,

00:23:25 --> 00:23:30
that sum plus the bias and it squishes it together

00:23:30 --> 00:23:33
to produce a zero to one signal.

00:23:38 --> 00:23:42
And this allows us a single neuron

00:23:43 --> 00:23:47
to take a few inputs and produces an output

00:23:47 --> 00:23:51
a classification for example, a zero one.

00:23:51 --> 00:23:57
And then we'll talk about, simply, it can

00:23:58 --> 00:24:00
serve as a linear classifier

00:24:00 --> 00:24:02
so it can draw a line.

00:24:02 --> 00:24:07
It can learn to draw a line between, like what you'd seen here,

00:24:06 --> 00:24:11
between the blue dots and the yellow dots.

00:24:11 --> 00:24:16
And that's exactly what we'll do in the iPython Notebook that I'll talk about

00:24:17 --> 00:24:23
but the basic algorithm is you initialize the weights

00:24:22 --> 00:24:29
on the inputs and you compute the output.

00:24:30 --> 00:24:33
You perform this previous operation I talked about sum up

00:24:33 --> 00:24:35
and compute the output.

00:24:35 --> 00:24:41
And if the output does not match the ground truth,

00:24:41 --> 00:24:45
The expected output, the output it should produce,

00:24:45 --> 00:24:48
the weights are punished accordingly

00:24:48 --> 00:24:52
and will talk through a little bit of the math of that.

00:24:54 --> 00:25:01
And this process is repeated until the perceptron does not make any more mistakes.

00:25:04 --> 00:25:10
Now here's the amazing thing about neural networks.

00:25:10 --> 00:25:13
There are several and I'll talk about them.

00:25:13 --> 00:25:22
One on the mathematical side is the universality of neural networks

00:25:21 --> 00:25:26
with just a single layer if you stack them together, a single hidden layer,

00:25:27 --> 00:25:30
the inputs on the left, the outputs on the right.

00:25:30 --> 00:25:33
And in the middle there is a single hidden layer,

00:25:33 --> 00:25:40
it can closely approximate any function. Any function.

00:25:40 --> 00:25:43
So this is an incredible property

00:25:45 --> 00:25:52
that with a single layer any function you could think of,

00:25:52 --> 00:25:57
that you could think of driving as a function.

00:25:56 --> 00:25:58
It takes its input,

00:25:59 --> 00:26:02
the world outside as output

00:26:03 --> 00:26:05
o control the vehicle.

00:26:04 --> 00:26:09
There exists a neural network out there that can drive perfectly.

00:26:09 --> 00:26:12
It's a fascinating mathematical fact.

00:26:17 --> 00:26:22
So we can think of this then these functions as a special purpose function,

00:26:21 --> 00:26:24
special purpose intelligence.

00:26:23 --> 00:26:27
You can take, say as input,

00:26:27 --> 00:26:31
the number of bedrooms, the square feet,

00:26:31 --> 00:26:34
the type of neighborhood.

00:26:34 --> 00:26:36
Those are the three inputs.

00:26:36 --> 00:26:41
It passes that value through to the hidden layer.

00:26:41 --> 00:26:43
And then one more step.

00:26:43 --> 00:26:48
It produces the final price estimate for the house or for the residence.

00:26:49 --> 00:26:54
And we can teach a network to do this pretty well in a supervised way.

00:26:53 --> 00:26:55
This is supervised learning.

00:26:55 --> 00:26:58
You provide a lot of examples

00:26:58 --> 00:27:01
where you know the number of bedrooms, the square feet,

00:27:01 --> 00:27:03
the type of neighborhood

00:27:04 --> 00:27:09
and then you also know the final price of the house or the residence.

00:27:09 --> 00:27:15
And then you can, as I'll talk about through a process of back propagation,

00:27:14 --> 00:27:21
teach these networks to make this prediction pretty well.

00:27:22 --> 00:27:26
Now some of the exciting breakthroughs recently

00:27:27 --> 00:27:31
have been in the general purpose intelligence.

00:27:31 --> 00:27:36
This is is from Andrej Karpathy who is now at OpenAI.

00:27:38 --> 00:27:46
I would like to take a moment here to try to explain how amazing this is.

00:27:46 --> 00:27:48
This is a game of "pong".

00:27:49 --> 00:27:54
If you're not familiar with "pong", there are two paddles

00:27:54 --> 00:27:59
and you're trying to bounce the ball back

00:27:59 --> 00:28:06
and in such a way that prevents the other guy from bouncing the ball back at you.

00:28:10 --> 00:28:14
The artificial intelligence agent is on the right in green

00:28:14 --> 00:28:17
and up top is the score 8-1.

00:28:17 --> 00:28:21
Now this takes about three days to train

00:28:20 --> 00:28:23
on a regular computer, this network.

00:28:23 --> 00:28:27
What is this network doing?

00:28:27 --> 00:28:29
It's called the Policy Network.

00:28:29 --> 00:28:32
The input is the raw pixels.

00:28:33 --> 00:28:41
There's slightly a process and also you take the difference between two frames

00:28:41 --> 00:28:44
but it's basically the raw pixel information.

00:28:44 --> 00:28:46
That's the input.

00:28:46 --> 00:28:49
There's a few hidden layers

00:28:49 --> 00:28:53
and the output is the single probability of moving up.

00:28:54 --> 00:29:05
That's it. That's the whole system and what it's doing is, it learns.

00:29:06 --> 00:29:10
You don't know at any one moment,

00:29:11 --> 00:29:14
you don't know what the right thing to do is.

00:29:13 --> 00:29:16
Is it to move up? Is it's moved down?

00:29:15 --> 00:29:20
You only know what the right thing to do is

00:29:20 --> 00:29:23
by the fact that eventually you win or lose the game.

00:29:24 --> 00:29:30
So this is the amazing thing here is, there's no supervised learning.

00:29:30 --> 00:29:36
There's no universal fact about anyone stay being good or bad.

00:29:36 --> 00:29:39
And anyone actually being good or bad in the state

00:29:39 --> 00:29:44
but if you punish or reward every single action you took,

00:29:44 --> 00:29:48
for an entire game

00:29:48 --> 00:29:54
based on the result. So no matter what you did, if you won the game,

00:29:54 --> 00:29:56
the end justifies the means.

00:29:56 --> 00:30:04
If you won the game, every action you took in every every action state pair gets rewarded.

00:30:03 --> 00:30:06
If you lost the game, it gets punished.

00:30:06 --> 00:30:11
And this process, with only two hundred thousand games

00:30:10 --> 00:30:18
where the system just simulates the games, it can learn to beat the computer.

00:30:18 --> 00:30:23
This system knows nothing about "pong", nothing about games,

00:30:24 --> 00:30:26
this is general intelligence.

00:30:27 --> 00:30:32
Except for the fact, that it's just a game "pong".

00:30:32 --> 00:30:41
And I will talk about how this can be extended further,

00:30:40 --> 00:30:42
why this is so promising

00:30:41 --> 00:30:48
and why we should proceed with caution.

00:30:48 --> 00:30:54
So again, there's a set of actions you take up, down, up, down,

00:30:53 --> 00:30:55
based on the output of the network.

00:30:54 --> 00:30:58
There's a threshold given the probability of moving up,

00:30:57 --> 00:31:01
you move up or down based on the output of the network.

00:31:03 --> 00:31:05
And you have a set of states

00:31:06 --> 00:31:10
and every single state action pair is rewarded if there's a win

00:31:09 --> 00:31:12
and it's punished if there's a loss.

00:31:16 --> 00:31:22
When when you go home, think about how amazing that is

00:31:22 --> 00:31:25
and if you don't understand why that's amazing,

00:31:25 --> 00:31:27
spend some time on it.

00:31:27 --> 00:31:29
It's incredible.

00:31:28 --> 00:31:36
(Inaudible question from one of the attendees)

00:31:35 --> 00:31:37
Sure, sure thing.

00:31:36 --> 00:31:41
The question was: "What is supervised learning?

00:31:40 --> 00:31:43
What is unsupervised learning? What's the difference?"

00:31:43 --> 00:31:46
So supervised learning is,

00:31:45 --> 00:31:49
when people talk about machine learning they mean supervised learning most of the time.

00:31:49 --> 00:31:52
Supervised learning is

00:31:55 --> 00:31:59
learning from data, is learning from example.

00:31:59 --> 00:32:04
When you have a set of inputs and a set of outputs that you know are correct or

00:32:03 --> 00:32:05
called Ground Truth.

00:32:06 --> 00:32:10
So you need those examples, a large amount of them,

00:32:10 --> 00:32:13
to train any of the machine learning algorithms

00:32:13 --> 00:32:18
to learn to then generalize that to future examples.

00:32:23 --> 00:32:32
Actually, there's a third one called Reinforcement Learning where the Ground Truth is sparse.

00:32:32 --> 00:32:38
The information about when something is good or not,

00:32:37 --> 00:32:42
the ground truth only happens every once in a while, at the end of the game.

00:32:41 --> 00:32:43
Not every single frame.

00:32:43 --> 00:32:47
And unsupervised learning is when you have no information

00:32:47 --> 00:32:49
about the outputs.

00:32:49 --> 00:32:52
They are correct or incorrect.

00:32:54 --> 00:33:02
And it is the excitement of the deep learning community is unsupervised learning,

00:33:02 --> 00:33:06
but it has achieved no major breakthroughs at this point.

00:33:06 --> 00:33:10
I'll talk about what the future of deep learning is

00:33:10 --> 00:33:14
and a lot of the people that are working in t he field are excited by it.

00:33:14 --> 00:33:20
But right now, any interesting accomplishment has to do with supervised learning.

00:33:20 --> 00:33:25
(Partially inaudible question from one of the attendees)

00:33:25 --> 00:33:33
And the wrong one is just has the [00:33:29] (Inaudible) solution like looking at the philosophy.

00:33:33 --> 00:33:41
So basically, the reinforcement learning here is learning from somebody who has certain hopes

00:33:41 --> 00:33:49
and how can that be guaranteed that it would generalize to somebody else?

00:33:52 --> 00:33:57
So the question was this:

00:33:58 --> 00:34:02
the green paddle learns to play this game successfully

00:34:01 --> 00:34:07
against this specific one brown paddle operating under specific kinds of rules.

00:34:06 --> 00:34:12
How do we know it can generalize to other games, other things and it can't.

00:34:13 --> 00:34:16
But the mechanism by which it learns generalizes.

00:34:17 --> 00:34:20
So as long as you let it play,

00:34:23 --> 00:34:29
as long as you let it play in whatever world you wanted it to succeed in long enough,

00:34:29 --> 00:34:35
it will use the same approach to learn to succeed in that world.

00:34:34 --> 00:34:39
The problem is this works for worlds you can simulate well.

00:34:40 --> 00:34:46
Unfortunately, one of the big challenges of neural networks

00:34:45 --> 00:34:49
is they're not currently efficient learners.

00:34:49 --> 00:34:51
We need a lot of data to learn anything.

00:34:51 --> 00:34:56
Human beings need one example often times

00:34:55 --> 00:34:58
and they learn very efficiently from that one example.

00:35:00 --> 00:35:05
And again I'll talk about that as well, it's a good question.

00:35:05 --> 00:35:08
So the drawbacks of neural networks.

00:35:09 --> 00:35:13
So if you think about the way a human being would approach this game,

00:35:12 --> 00:35:17
this game of "pong", it would only need a simple set of instructions.

00:35:17 --> 00:35:22
You're in control of a paddle and you can move it up and down.

00:35:23 --> 00:35:28
And your task is to bounce the ball past the other player controlled by AI.

00:35:30 --> 00:35:35
Now the human being would immediately, they may not win the game

00:35:34 --> 00:35:37
but they would immediately understand the game

00:35:37 --> 00:35:40
and would be able to successfully play it well enough

00:35:40 --> 00:35:43
to pretty quickly learn to beat the game.

00:35:44 --> 00:35:47
But they would need to have a concept of control.

00:35:46 --> 00:35:50
What it means to control a paddle, need to have a concept of a paddle,

00:35:50 --> 00:35:53
need to have a concept of moving up and down

00:35:53 --> 00:35:56
and a ball and bouncing,

00:35:55 --> 00:36:01
they have to know, they have to have at least a loose concept of real world physics

00:36:00 --> 00:36:05
that they can then project that real world physics on to the two dimensional world.

00:36:04 --> 00:36:10
All of these concepts are concepts that you come to the table with.

00:36:10 --> 00:36:12
That's knowledge.

00:36:13 --> 00:36:20
And the kind of way you transfer that knowledge from your previous experience,

00:36:19 --> 00:36:24
from childhood to now when you come to this game,

00:36:24 --> 00:36:28
that something is called reasoning.

00:36:28 --> 00:36:30
Whatever reasoning means.

00:36:31 --> 00:36:35
And the question is whether through this same kind of process,

00:36:35 --> 00:36:42
you can see the entire world as a game of "pong"

00:36:43 --> 00:36:51
and reasoning is simply the ability to simulate that game in your mind

00:36:51 --> 00:36:56
and learn very efficiently, much more efficiently, than 200,000 innovations.

00:36:58 --> 00:37:02
The other challenge of deep neural networks and machine learning broadly

00:37:01 --> 00:37:06
is you need big data and efficient learners as I said.

00:37:06 --> 00:37:09
And that data also need to be supervised data.

00:37:09 --> 00:37:16
You need to have Ground Truth which is very costly for annotation.

00:37:16 --> 00:37:20
A human being looking at a particular image, for example,

00:37:19 --> 00:37:24
and labeling that as something as a cat or dog,

00:37:23 --> 00:37:25
whatever objects is in the image,

00:37:25 --> 00:37:27
that's very costly.

00:37:28 --> 00:37:37
And particularly for neural networks there's a lot of parameters to tune.

00:37:36 --> 00:37:39
There's a lot of hyper-parameters.

00:37:38 --> 00:37:42
You need to figure out the network structure first.

00:37:42 --> 00:37:45
How does this network look, how many layers?

00:37:44 --> 00:37:46
How many hidden nodes?

00:37:48 --> 00:37:53
What type of activation function for each node?

00:37:52 --> 00:37:55
There's a lot of hyper-parameters there

00:37:54 --> 00:37:57
and then once you've built your network,

00:37:57 --> 00:38:01
there's parameters for how you teach that network.

00:38:01 --> 00:38:05
There's learning rate, loss function - meaning bad size -

00:38:05 --> 00:38:09
number of training iterations, gradient updates moving

00:38:09 --> 00:38:14
and selecting even the optimizer with which

00:38:13 --> 00:38:20
you solve the various differential equations involved.

00:38:25 --> 00:38:31
It's a topic of many research paper, certainly it's rich enough for research papers,

00:38:30 --> 00:38:32
but it's also really challenging.

00:38:33 --> 00:38:36
It means you can't just pop the network down

00:38:35 --> 00:38:37
it will solve the problem generally.

00:38:38 --> 00:38:43
And defining a good lost function,

00:38:43 --> 00:38:46
or in the case of "pong" or games,

00:38:45 --> 00:38:50
a good reward function is difficult.

00:38:49 --> 00:38:55
So here's a game, this is a recent result from OpenAI,

00:38:57 --> 00:39:04
I'm teaching a network to play the game of coast runners.

00:39:03 --> 00:39:05
And the goal of coast runners

00:39:07 --> 00:39:14
is you're in a boat the task is to go around the track

00:39:14 --> 00:39:19
and successfully complete a race against other people you're racing against.

00:39:19 --> 00:39:24
Now this network is an optimal one.

00:39:23 --> 00:39:27
And what is figured out that actually in the game,

00:39:29 --> 00:39:34
it gets a lot of points for collecting certain objects along the path.

00:39:33 --> 00:39:41
So you see it's figured out to go in a circle and collect those those green turbo things.

00:39:42 --> 00:39:48
And what is figured out is you don't need to complete the game to earn the award.

00:39:56 --> 00:40:02
And despite being on fire and hitting the wall and going through this whole process,

00:40:01 --> 00:40:06
it's actually achieved at least the local optima

00:40:06 --> 00:40:11
given the reward function of maximizing the number of points.

00:40:11 --> 00:40:17
And so it's figured out a way to earn a higher reward

00:40:16 --> 00:40:21
while ignoring the implied bigger picture goal of finishing the race

00:40:20 --> 00:40:25
which us as humans understand much better.

00:40:26 --> 00:40:30
This raises, for self-driving cars, ethical questions.

00:40:31 --> 00:40:34
Besides other quick questions.

00:40:33 --> 00:40:35
(CHUCKLING)

00:40:34 --> 00:40:39
We could watch this for hours and it will do that for hours and that's the point:

00:40:43 --> 00:40:55
It's hard to teach, it's hard to encode the formally defined utility function under which

00:40:54 --> 00:40:57
an intelligent system needs to operate.

00:40:56 --> 00:40:59
And that's made obvious even in a simple game.

00:40:59 --> 00:41:02
And so what is - Yup, question.

00:41:01 --> 00:41:10
(Inaudible question from one of the attendees)

00:41:09 --> 00:41:15
So the question was: "what's an example of a local optimum that an autonomous car,

00:41:14 --> 00:41:19
similar to the cost racer, what would be the example in the real world for an autonomous vehicle?

00:41:19 --> 00:41:23
And it's a touchy subject.

00:41:24 --> 00:41:28
But it would certainly have to be involved

00:41:30 --> 00:41:35
the choices we make under near crashes and crashes.

00:41:35 --> 00:41:38
The choices a car makes want to avoid.

00:41:38 --> 00:41:42
For example, if there's a crash imminent

00:41:41 --> 00:41:43
and there's no way you can stop

00:41:43 --> 00:41:48
to prevent the crash, do you keep the driver safe

00:41:48 --> 00:41:51
or do you keep the other people safe.

00:41:51 --> 00:42:04
And there has to be some, even if you don't choose to acknowledge it,

00:42:03 --> 00:42:07
even if it's only in the data and the learning that you do,

00:42:06 --> 00:42:09
there's an implied reward function there.

00:42:10 --> 00:42:13
And we need to be aware of that reward function is

00:42:12 --> 00:42:15
because it may find something.

00:42:14 --> 00:42:18
Until you actually see it, we won't know it.

00:42:17 --> 00:42:24
Once we see it, we realize that oh that was a bad design

00:42:24 --> 00:42:26
and that's the scary thing.

00:42:25 --> 00:42:28
It's hard to know ahead of time what that is.

00:42:30 --> 00:42:39
So the recent breakthroughs from deep learning came several factors.

00:42:38 --> 00:42:42
First is the compute, Moore's Law.

00:42:42 --> 00:42:46
CPUs are getting faster, hundred times faster, every decade.

00:42:46 --> 00:42:49
Then there's GPU use.

00:42:49 --> 00:42:56
Also the ability to train neural networks and GPUs and now ASICs

00:42:56 --> 00:43:03
has created a lot of capabilities in terms of energy efficiency

00:43:02 --> 00:43:08
and being able to train larger networks more efficiently.

00:43:12 --> 00:43:16
Well, first of all in the in the 21st Century there's digitized data.

00:43:16 --> 00:43:19
There's larger data sets of digital data

00:43:19 --> 00:43:24
nd now there is that data is becoming more organized,

00:43:23 --> 00:43:28
not just vaguely available data out there on the internet,

00:43:28 --> 00:43:31
it's actual organized data sets like Imagenet.

00:43:31 --> 00:43:35
Certainly for natural languages there's large data sets.

00:43:36 --> 00:43:40
There is the algorithm innovations, Backprop.

00:43:40 --> 00:43:44
Back propagation, Convolutional Neural Networks, LSTMs.

00:43:43 --> 00:43:50
All these different architectures for dealing with specific types of domains and tasks.

00:43:50 --> 00:43:54
There is the huge one, is infrastructure.

00:43:54 --> 00:43:58
It's on the software and the hardware side.

00:43:57 --> 00:44:02
There's Git, Ability to Share and Open Source Way software.

00:44:02 --> 00:44:11
There are pieces of software that make robotics and make machine learning easier.

00:44:10 --> 00:44:13
ROS, TensorFlow.

00:44:12 --> 00:44:16
There is Amazon Mechanical Turk

00:44:16 --> 00:44:22
which allows for efficient, cheap annotation of large scale data sets.

00:44:22 --> 00:44:29
As AWS and the cloud hosting, machine learning hosting the data and the compute.

00:44:30 --> 00:44:35
And then there's a financial backing of large companies - Google, Facebook, Amazon.

00:44:36 --> 00:44:39
But really nothing is changed.

00:44:39 --> 00:44:43
There really has not been any significant breakthroughs.

00:44:43 --> 00:44:47
Convolutional networks have been around since the 90s,

00:44:46 --> 00:44:49
neural networks has been around since the 60s.

00:44:49 --> 00:44:52
There's been a few improvements

00:44:53 --> 00:44:57
but the hope is, that's in terms of methodology,

00:44:57 --> 00:45:01
the compute has really been the work horse.

00:45:01 --> 00:45:06
The ability to do the hundred fold improvement every decade,

00:45:07 --> 00:45:12
holds promise and the question is whether that reasoning thing I talked about,

00:45:13 --> 00:45:16
all you need is a larger network.

00:45:15 --> 00:45:17
That is the open question.

00:45:19 --> 00:45:23
Some terms for deep learning.

00:45:23 --> 00:45:30
First of all deep learning, is a PR term for neural networks.

00:45:31 --> 00:45:39
It is a term for utilising deep neural networks

00:45:38 --> 00:45:41
for neural networks to have many layers.

00:45:42 --> 00:45:47
It is symbolic term for the newly gained capabilities that compute has brought us.

00:45:48 --> 00:45:51
That training on GPUs have brought us.

00:45:52 --> 00:45:55
So deep learning is a subset of machine learning.

00:45:54 --> 00:45:57
There's many other methods that are still effective.

00:45:59 --> 00:46:05
The terms that will come up in this class is, first of all, Multilayer Perceptron (MLP)

00:46:05 --> 00:46:08
Deep neural networks (DNN), Recurrent neural networks (RNN),

00:46:07 --> 00:46:14
LSTM (Long Short-Term Memory) Networks, CNN and ConvNet (Convolutional neural networks),

00:46:14 --> 00:46:16
Deep Belief Networks.

00:46:16 --> 00:46:22
And the operational come up is Convolutional, Pooling, Activation functions and Backpropagation.

00:46:25 --> 00:46:27
Yes, you've got a question?

00:46:34 --> 00:46:42
(Inaudible question from one of the attendees)

00:46:49 --> 00:46:54
So the question was, what is the purpose of the different layers in neural network?

00:46:54 --> 00:46:57
What is the need of one configuration versus another?

00:46:57 --> 00:47:02
So a neural network, having several layers,

00:47:02 --> 00:47:09
it's the only thing you have an understanding of, is the inputs and the outputs.

00:47:09 --> 00:47:13
You don't have a good understanding about what these layer does.

00:47:14 --> 00:47:17
They are mysterious things, neural networks.

00:47:17 --> 00:47:22
So I'll talk about how, with every layer, it forms a higher level.

00:47:23 --> 00:47:27
A higher order representation of the input.

00:47:27 --> 00:47:31
So it's not like the first layer does localization,

00:47:30 --> 00:47:32
the second layer does path planning,

00:47:32 --> 00:47:37
the third layer does navigation - how you get from here to Florida -

00:47:37 --> 00:47:41
or maybe it does, but we don't know.

00:47:42 --> 00:47:48
So we know we're beginning to visualize neural networks for simple tasks

00:47:48 --> 00:47:52
like for ImageNet classifying cats versus dogs.

00:47:51 --> 00:47:57
We can tell what is the thing that the first layer does, the second layer, the third layer

00:47:56 --> 00:47:58
and we look at that.

00:47:57 --> 00:48:03
But for driving, as the input provide just the images the output the steering.

00:48:03 --> 00:48:06
It's still unclear what you learned

00:48:07 --> 00:48:11
partially because we don't have neural networks that drive successfully yet.

00:48:11 --> 00:48:13
(Points to a member of the class)

00:48:15 --> 00:48:19
(Inaudible question)

00:48:21 --> 00:48:32
So the question was, does a neural network generate layers over time, like does it grow it?

00:48:33 --> 00:48:39
That's one of the challenges, that a neural network is pre-defined.

00:48:38 --> 00:48:42
The architecture, the number of nodes, the number of layers. That's all fixed.

00:48:42 --> 00:48:47
Unlike the human brain where the neurons die and are born all the time.

00:48:46 --> 00:48:50
A neural Network is pre-specified, that's it.

00:48:49 --> 00:48:53
That's all you get and if you want to change that,

00:48:52 --> 00:48:55
you have to change that and then retrain everything.

00:48:55 --> 00:48:56
So it's fixed.

00:48:57 --> 00:49:01
So what I encourage you is to proceed with caution

00:49:01 --> 00:49:07
because there's this feeling when you first teach a network with very little effort,

00:49:07 --> 00:49:14
how to do some amazing tasks like classify a face versus non-face,

00:49:13 --> 00:49:19
or your face versus other faces or cats versus dogs, its an incredible feeling.

00:49:19 --> 00:49:24
And then there's definitely this feeling that I'm an expert

00:49:24 --> 00:49:32
but what you realize is we don't actually understand how it works.

00:49:32 --> 00:49:36
And getting it to perform well for more generalized task,

00:49:36 --> 00:49:39
for larger scale data sets, for more useful applications,

00:49:39 --> 00:49:42
requires a lot of hyper-parameter tuning.

00:49:41 --> 00:49:44
Figuring out how to tweak little things here and there

00:49:44 --> 00:49:49
and still in the end, you don't understand why it work so damn well.

00:49:52 --> 00:50:00
So deep learning, these deep neural network architectures is representation learning.

00:50:00 --> 00:50:06
This is the difference between traditional machine learning methods where,

00:50:09 --> 00:50:15
for example, for the task of having an image here is the input.

00:50:14 --> 00:50:19
The input to the network here is on the bottom, the output up on top,

00:50:19 --> 00:50:25
and the input is a single image of a person in this case.

00:50:26 --> 00:50:34
And so the input, specifically, is all the pixels in that image.

00:50:33 --> 00:50:38
RGB, the different colors of the pixels in the image.

00:50:38 --> 00:50:48
And over time, what a network does is build a multiverse solutional representation of this data.

00:50:48 --> 00:50:56
The first layer learns the concept of edges, for example.

00:50:56 --> 00:51:02
The second layer starts to learn composition of those edges, corners, contours.

00:51:02 --> 00:51:06
Then it starts to learn about object parts.

00:51:06 --> 00:51:13
And finally, actually provide a label for the entities that are in the input.

00:51:14 --> 00:51:17
And this is the difference in traditional machine learning methods

00:51:17 --> 00:51:23
where the concepts like edges and corners and contours

00:51:23 --> 00:51:31
are manually pre-specified by human beings, human experts, for that particular domain.

00:51:35 --> 00:51:43
And representation matters because figuring out a line

00:51:43 --> 00:51:47
for the Cartesian coordinates of this particular data set

00:51:47 --> 00:51:50
where you want to design a machine learning system

00:51:49 --> 00:51:55
that tells the difference between green triangles and blue circles is difficult.

00:51:55 --> 00:51:58
There is no line that separates them cleanly.

00:52:00 --> 00:52:05
And if you were to ask a human being, a human expert in the field.

00:52:04 --> 00:52:13
to try to draw that line they would probably do a Ph. D. on it and still not succeed.

00:52:13 --> 00:52:18
But a neural network can automatically figure out

00:52:18 --> 00:52:23
o remap that input into polar coordinates

00:52:23 --> 00:52:29
where the representation is such that it's an easily, linearly separable data set.

00:52:32 --> 00:52:37
And so, deep learning is a subset of representation learning,

00:52:37 --> 00:52:42
is a subset of machine learning and a key subset artificial intelligence.

00:52:45 --> 00:52:48
Now, because of this,

00:52:48 --> 00:52:54
because of its ability to compute an arbitrary number of features

00:52:54 --> 00:52:56
that are at the core of the representation.

00:52:57 --> 00:53:00
So if you are trying to detect a cat in an image,

00:53:00 --> 00:53:09
you're not specifying 215 specific features of cat ears and whiskers and so on

00:53:08 --> 00:53:13
that a human expert will specify you allow and you'll know

00:53:12 --> 00:53:15
it discover tens of thousands of such features,

00:53:15 --> 00:53:18
which maybe for cats you are an expert

00:53:17 --> 00:53:25
but for a lot of objects you may never be able to sufficiently provide the features

00:53:24 --> 00:53:28
which successfully will be used for identifying the object.

00:53:28 --> 00:53:31
And so, this kind of representation learning,

00:53:31 --> 00:53:36
one is easy in the sense that all you have to provide is inputs and outputs.

00:53:36 --> 00:53:41
All you need to provide is a data set the care about without [00:53:39] features.

00:53:41 --> 00:53:50
And two, because of it's ability to construct arbitrarily sized representations,

00:53:50 --> 00:53:53
deep neural networks are hungry for data.

00:53:52 --> 00:53:55
The more data we give them,

00:53:55 --> 00:54:00
the more they are able to learn about this particular data set.

00:54:03 --> 00:54:07
So let's look at some applications.

00:54:08 --> 00:54:14
First, some cool things that deep neural networks have been able to accomplish up to this point.

00:54:14 --> 00:54:16
Let me go through them.

00:54:16 --> 00:54:18
First, the basic one.

00:54:19 --> 00:54:31
AlexNet is for- ImageNet is a famous data set and a competition of classification,

00:54:30 --> 00:54:35
localization where the task is given an image,

00:54:34 --> 00:54:39
identify what are the five most likely things in that image

00:54:38 --> 00:54:42
and what is the most likely and you have to do so correctly.

00:54:41 --> 00:54:44
So on the right, there's an image of a leopard

00:54:44 --> 00:54:48
and you have to correctly classify that that is in fact the leopard.

00:54:48 --> 00:54:53
So they're able to do this pretty well given a specific image.

00:54:53 --> 00:54:56
Determine that it's a leopard.

00:54:56 --> 00:55:02
And we started, what's shown here on the x-axis is years

00:55:02 --> 00:55:05
on the y-axis is error in classification.

00:55:05 --> 00:55:12
So starting from 2012 on the left with AlexNet and today

00:55:14 --> 00:55:22
the errors decreased from 16% and 40% before then with traditional methods

00:55:22 --> 00:55:25
have decreased to <4%.

00:55:24 --> 00:55:26
So human level performance,

00:55:25 --> 00:55:30
if I were to give you this picture of a leopard

00:55:30 --> 00:55:36
is a 4% of those pictures of leopards you would not say it's a leopard.

00:55:36 --> 00:55:38
That's human level performance.

00:55:37 --> 00:55:44
So for the first time in 2015, convolutional neural networks are performed human beings.

00:55:43 --> 00:55:48
That in itself is incredible. That is something that seemed impossible.

00:55:48 --> 00:55:54
And now is because it's done is not as impressive.

00:55:55 --> 00:55:59
But I just want to get to why this is so impressive

00:55:59 --> 00:56:03
because computer vision is hard.

00:56:03 --> 00:56:07
Now we as human beings have evolved visual perception over millions of years,

00:56:07 --> 00:56:09
hundreds of millions of years.

00:56:10 --> 00:56:16
So we take it for granted but computer vision is really hard, visual perception is really hard.

00:56:15 --> 00:56:18
There's illumination variability.

00:56:17 --> 00:56:19
So it's the same object.

00:56:19 --> 00:56:24
The only way we are telling you a thing is from the shade, the reflection of light from that surface.

00:56:24 --> 00:56:29
It could be the same object with drastically, in terms of pixels,

00:56:28 --> 00:56:35
drastically different looking shapes and we still know it's the same object.

00:56:35 --> 00:56:38
There is post-variability in occlusion.

00:56:38 --> 00:56:42
Probably my favorite caption for an image

00:56:42 --> 00:56:47
for a figure in a academic paper is deformable and truncated cat.

00:56:48 --> 00:56:55
These are pictures, you know cats are famously deformable.

00:56:54 --> 00:56:57
They can take a lot of different shapes.

00:56:56 --> 00:56:59
(LAUGHTER)

00:56:59 --> 00:57:07
Its arbitrary poses are possible so you have to have computer vision

00:57:06 --> 00:57:10
to know it's still the same objects, still the same class of objects,

00:57:10 --> 00:57:16
given all the variability in the pose and occlusions is a huge problem.

00:57:16 --> 00:57:18
We still know it's an object.

00:57:18 --> 00:57:22
We still know it's a cat even when parts of it are not visible.

00:57:21 --> 00:57:24
And sometimes large parts of it are not visible.

00:57:24 --> 00:57:28
And then there's all the inter-class variability.

00:57:28 --> 00:57:33
Inter-class, all of these on the top two rows are cats.

00:57:32 --> 00:57:35
Many of them look drastically different.

00:57:35 --> 00:57:40
And the top bottom two rows are dogs also look drastically different.

00:57:40 --> 00:57:44
And yet some of the dogs look like cats,

00:57:43 --> 00:57:46
some of the cats look like dogs.

00:57:45 --> 00:57:49
And as human beings are pretty good at telling the difference

00:57:49 --> 00:57:52
and we want computer vision to do better than that.

00:57:53 --> 00:57:59
It's hard. So how is this done? This is done with convolutional neural networks.

00:57:59 --> 00:58:01
The input to which is a raw image.

00:58:01 --> 00:58:06
Here's an input on the left of a number three

00:58:07 --> 00:58:11
and I'll talk about through convolutional layers

00:58:12 --> 00:58:16
that image is processed past through convolutional layers

00:58:16 --> 00:58:20
maintain spatial information.

00:58:21 --> 00:58:29
On the output, in this case predicts which of the images

00:58:28 --> 00:58:32
what number is shown in the image.

00:58:31 --> 00:58:34
0, 1, 2 through 9.

00:58:34 --> 00:58:42
And so, these networks, everybody's using the same kind of network to determine exactly that.

00:58:41 --> 00:58:44
Input is an image, output is a number.

00:58:44 --> 00:58:50
And in the case of probability, that is a leopard. What is that number?

00:58:50 --> 00:58:55
Then there is segmentation built on top of these convolution neural networks

00:58:54 --> 00:59:01
where you chop off the end and convolutionise the network.

00:59:00 --> 00:59:03
You chop off the end where the output is a heat map.

00:59:04 --> 00:59:11
So you can have, instead of a detector for a cat, you can do a cat heat map

00:59:11 --> 00:59:17
where it's the part of the image, the output heat map gets excited,

00:59:16 --> 00:59:19
the neurons in that output get excited

00:59:19 --> 00:59:25
in the spatially excited, in the parts of the image that contain a tabby cat.

00:59:25 --> 00:59:32
And this kind of process can be used to segment the image into different objects, a horse.

00:59:31 --> 00:59:34
So the original input on the left is a woman on a horse

00:59:33 --> 00:59:40
and the output is a fully segmented image of knowing where is the woman, where is the horse.

00:59:41 --> 00:59:45
And this kind of process can be used for object detection

00:59:44 --> 00:59:48
which is the task of detecting an object in an image.

00:59:49 --> 00:59:53
Now the traditional method with convolutional neural networks

00:59:53 --> 00:59:57
and in general computer vision is the sliding window approach.

00:59:57 --> 01:00:02
We have a detector, like the leopard detector, where you slide through the image

01:00:01 --> 01:00:04
to find where in that image is the leopard.

01:00:06 --> 01:00:09
This, the segmenting approach,

01:00:09 --> 01:00:14
the R-CNN approach, is efficiently segmenting the image

01:00:13 --> 01:00:17
in such a way that it can propose different parts of the image

01:00:16 --> 01:00:21
that are likely to have a leopard, or in this case a cowboy,

01:00:22 --> 01:00:28
and that drastically reduces the computational requirements of the object detection task.

01:00:32 --> 01:00:41
And so these networks, this is currently one of the best networks for the ImageNet task of localization

01:00:41 --> 01:00:53
is the Deep residual networks. They're deep. So VGG-19 is one of the famous ones.

01:00:55 --> 01:01:00
You started to get above twenty layers in many cases,

01:00:59 --> 01:01:02
thirty four layers is the rise in that one.

01:01:03 --> 01:01:10
So the lesson there is, the deeper you go the more representation power you have,

01:01:09 --> 01:01:13
the higher accuracy but you need more data.

01:01:16 --> 01:01:20
Other applications, colorization of images.

01:01:21 --> 01:01:29
So this again, input is a single image and output is a single image.

01:01:30 --> 01:01:36
So you can take a black and white video from a film, from an old film,

01:01:36 --> 01:01:42
and recolor it. And all you need to do to train that network in the supervised way

01:01:41 --> 01:01:46
is provide modern films and convert them to grayscale.

01:01:46 --> 01:01:54
So now you have arbitrarily sized data sets, data sets of gray scale to color.

01:01:56 --> 01:02:03
And you're able to, with very little effort on top of it, to successfully

01:02:03 --> 01:02:06
well, somewhat successful recolor images.

01:02:07 --> 01:02:12
Again, Google Translate does image translation in this way, image to image.

01:02:12 --> 01:02:20
It first perceives, here in German I believe, famous German correct me if I'm wrong,

01:02:19 --> 01:02:22
dark chocolate written in German on a box.

01:02:22 --> 01:02:28
So this can take this image, detect different letters convert them to text,

01:02:28 --> 01:02:33
translate the text and then using the image to image mapping

01:02:34 --> 01:02:42
map the letters, the translated letters, back onto the box and you could do this in real time on video.

01:02:45 --> 01:02:51
So what we've talked about up to this point on the left are "vanilla" neural networks,

01:02:50 --> 01:02:55
convolutional neural networks, that map a single input, a single output,

01:02:54 --> 01:02:59
a single image to a number, single image another image.

01:02:59 --> 01:03:02
Then there is recurrent neural networks, the map.

01:03:02 --> 01:03:04
This is the more general formulation,

01:03:03 --> 01:03:06
they map a sequence of images

01:03:05 --> 01:03:08
or a sequence of words

01:03:07 --> 01:03:11
or a sequence of any kind to another sequence.

01:03:12 --> 01:03:18
And these networks are able to do incredible things with natural language,

01:03:17 --> 01:03:23
with video, and any type of series of data.

01:03:22 --> 01:03:31
For example, you can convert text to hand written digits, with hand written text.

01:03:31 --> 01:03:38
Here, you type in and you can do this online, type in deep learning for self-driving cars

01:03:37 --> 01:03:45
and it will use an arbitrary handwriting style to generate the words "deep learning for self-driving cars".

01:03:45 --> 01:03:48
This is done using recurring neural networks.

01:03:49 --> 01:03:58
We can also take Char-RNNs they're called, it's character level recurring neural networks

01:03:57 --> 01:04:00
that train on a data set

01:04:01 --> 01:04:10
an arbitrary text data set and learn to generate text one character at a time.

01:04:10 --> 01:04:17
So there is no preconceived syntactical semantic structure that's provided to the network.

01:04:16 --> 01:04:18
It learns that structure.

01:04:19 --> 01:04:26
So for example, you can train it on Wikipedia articles like in this case.

01:04:25 --> 01:04:36
And it's able to generate successfully not only text that makes some kind of grammatical sense at least

01:04:36 --> 01:04:44
but also keep perfect syntactic structure for Wikipedia, for Markdown, editing,

01:04:43 --> 01:04:46
for late tack editing and so on.

01:04:47 --> 01:04:54
This text as "naturalism and decision for the majority of Arab countries capitalide."

01:04:53 --> 01:04:58
Whatever that means, "was grounded by the Irish language by John Clare," and so on.

01:04:58 --> 01:05:04
These are sentences. If you didn't know better, that might sound correct.

01:05:03 --> 01:05:13
And it does so and you pause one character at a time so these aren't words being generated.

01:05:13 --> 01:05:18
This is one character, you start with the beginning three letters "nat",

01:05:18 --> 01:05:24
you generate "u" completely without knowing of the word naturalism.

01:05:25 --> 01:05:27
This is incredible.

01:05:28 --> 01:05:36
You can do this to start a sentence and let the neural network complete that sentence.

01:05:36 --> 01:05:43
So for example if you start the sentence with "life is" or "life is about" actually,

01:05:43 --> 01:05:50
it will complete it with a lot of fun things. "The weather." "Life is about kids."

01:05:51 --> 01:05:57
Life is about the true love of Mr Mom", "is about the truth now."

01:05:57 --> 01:06:02
And this is from [01:05:59], the last two,

01:06:01 --> 01:06:06
if you start with "the meaning of life," it can complete that with

01:06:05 --> 01:06:10
"the meaning of life is literary recognition" may be true for some of us here.

01:06:12 --> 01:06:14
Publish or perish.

01:06:14 --> 01:06:19
And "the meaning of life is the tradition of ancient human reproduction."

01:06:18 --> 01:06:20
(LAUGHTER)

01:06:20 --> 01:06:23
Also true for some of us here. I'm sure.

01:06:25 --> 01:06:28
Okay, so what else can you do?

01:06:27 --> 01:06:34
You can, this has been very exciting recently is image capture recognition. No, generation, I'm sorry.

01:06:34 --> 01:06:42
Image capture generation is important for large data sets of images.

01:06:41 --> 01:06:46
What we want to be able to determine what's going on inside those images.

01:06:45 --> 01:06:51
Specially for search, if you want to find a man sitting in a college with a dog,

01:06:50 --> 01:06:54
you type it into Google and it's able to find that.

01:06:55 --> 01:07:03
So here shown in black text a man sitting on a couch with a dog is generated by the system.

01:07:02 --> 01:07:08
A man sitting in a chair with a dog in his lap is generated by a human observer.

01:07:08 --> 01:07:13
And again these annotations are done by detecting the different obstacles,

01:07:12 --> 01:07:16
the different objects in the scene.

01:07:15 --> 01:07:21
So segmenting the scene detecting on the right there's a woman, a crowd, a cat,

01:07:20 --> 01:07:23
a camera, holding, purple.

01:07:23 --> 01:07:30
All of these words are being detected then a syntactically correct sentence is generated,

01:07:29 --> 01:07:33
a lot of them, and then you order which sentence is the most likely.

01:07:33 --> 01:07:39
And in this way you can generate very accurate labeling of the images,

01:07:40 --> 01:07:42
captions for the images.

01:07:42 --> 01:07:48
And you can do the same kind of process for image question answering.

01:07:49 --> 01:07:53
You can ask how many for quantity, how many chairs are there?

01:07:54 --> 01:08:00
You can ask about location, where are the ripe bananas?

01:08:01 --> 01:08:03
You can ask about the type of object.

01:08:03 --> 01:08:06
What is the object in the chair? It's a pillow.

01:08:08 --> 01:08:11
And these are, again, using the recurring neural networks.

01:08:15 --> 01:08:21
You could do the same thing with video captions generation,

01:08:20 --> 01:08:23
video captions description generation.

01:08:23 --> 01:08:27
So looking at a sequence of images as opposed to just a single image.

01:08:27 --> 01:08:31
What is the action going on in this situation?

01:08:30 --> 01:08:35
This is the difficult task. There's a lot of work in it, in this area.

01:08:35 --> 01:08:39
On the left is correct descriptions of a man is do stunts on his bike

01:08:39 --> 01:08:43
or a herd a zebra are walking in the field and on the right,

01:08:43 --> 01:08:46
there's a small bus running into a building.

01:08:45 --> 01:08:54
You know it's talking about relevant entities but just doing an incorrect description.

01:08:54 --> 01:09:00
A man is cutting a piece of a pair of a paper.

01:09:02 --> 01:09:12
So the words are correct. Perhaps, but so you're close, but mostly are.

01:09:11 --> 01:09:14
One of the interesting things

01:09:16 --> 01:09:19
you can do with a recurring neural networks

01:09:19 --> 01:09:23
is if you think about the way we look at images, human beings look at images,

01:09:23 --> 01:09:31
is we only have a small phobia with which we focus in a scene.

01:09:30 --> 01:09:34
So right now you're periphery is very distorted.

01:09:33 --> 01:09:38
The only thing, if you're looking at the slides, you're looking at me

01:09:38 --> 01:09:40
that's the only thing that's in focus.

01:09:40 --> 01:09:43
Majority of everything else is out of focus.

01:09:43 --> 01:09:48
So we can use the same kind of concept to try to teach a neural network to steer around the image.

01:09:48 --> 01:09:52
Both for perception and generation of those images.

01:09:51 --> 01:09:56
This is important first on the general artificial intelligence point

01:09:56 --> 01:10:03
of it being just fascinating that we can selectively steer our attention

01:10:03 --> 01:10:06
but also it's important for things like drones.

01:10:05 --> 01:10:09
They have to fly at high speeds in an environment

01:10:08 --> 01:10:12
where three hundred plus frames a second, you have to make decisions.

01:10:12 --> 01:10:18
So you can't possibly localize yourself or perceive the world around yourself successfully

01:10:18 --> 01:10:21
if you have to interpret the entire scene.

01:10:20 --> 01:10:29
So we can do is you can steer, for example here shown, is reading a house number

01:10:29 --> 01:10:32
by steering around an image.

01:10:34 --> 01:10:38
You can do the same task for reading and for writing.

01:10:38 --> 01:10:43
So reading numbers here, and this data set on the left, is reading numbers.

01:10:43 --> 01:10:52
We can also selectively steer a network around an image to generate that image

01:10:51 --> 01:10:58
starting with a blurred image first and then getting more and more higher resolution

01:10:58 --> 01:11:00
as the steering goes on.

01:11:02 --> 01:11:11
Work here at MIT is able to map video to audio.

01:11:11 --> 01:11:19
So head stuff for the drumstick silent video and able to generate the sound

01:11:18 --> 01:11:23
that would drumstick hitting that particular object makes.

01:11:23 --> 01:11:29
So you can get texture information from that impact.

01:11:32 --> 01:11:39
So here is the video of a human soccer player playing soccer

01:11:39 --> 01:11:45
and a state-of-the-art machine playing soccer.

01:11:48 --> 01:11:52
And, well let me give it some time,

01:11:51 --> 01:11:53
to build up.

01:11:59 --> 01:12:04
(LAUGHTER)

01:12:03 --> 01:12:11
Okay. So soccer, we take this for granted, but walking is hard.

01:12:11 --> 01:12:18
Object manipulation is hard. Soccer is harder than chess for us to do much harder.

01:12:18 --> 01:12:27
On your phone now, you can have a chess engine that beats the best players in the world.

01:12:28 --> 01:12:33
And you have to internalize that because the question is,

01:12:32 --> 01:12:38
this is a painful video, the question is: where does driving fall?

01:12:37 --> 01:12:41
Is it closer to chess or is it closer soccer?

01:12:42 --> 01:12:47
For those incredible, brilliant engineers that worked on the most recent DARPA challenge

01:12:47 --> 01:12:51
this would be a very painful video to watch, I apologize.

01:12:53 --> 01:12:56
This is a video from the DARPA Challenge

01:12:56 --> 01:12:58
(LAUGHTER)

01:12:58 --> 01:13:01
of robots struggling

01:13:01 --> 01:13:07
with basic object manipulation and walking tasks.

01:13:09 --> 01:13:15
So it's mostly a fully autonomous navigation task.

01:13:14 --> 01:13:16
(LAUGHTER)

01:13:24 --> 01:13:33
Maybe I'll just let this play for a few moments to let it internalize how difficult this task is,

01:13:33 --> 01:13:39
of balancing, of planning in an underactuated way.

01:13:38 --> 01:13:40
We don't have full control of everything.

01:13:40 --> 01:13:48
When there is a delta between your perception of what you think the world is and what reality is.

01:13:48 --> 01:13:55
So there, a robot was trying to turn an object that wasn't there.

01:13:59 --> 01:14:04
And this is an MIT entry that actually successfully, I believe, gotten points for this

01:14:03 --> 01:14:08
because it got into that area

01:14:07 --> 01:14:12
(LAUGHTER)

01:14:11 --> 01:14:18
but as a lot of the teams talked about the hardest part,

01:14:17 --> 01:14:24
So one of the things the robot had to do is get into a car and drive it and get out of the car.

01:14:23 --> 01:14:29
And there's a few other manipulation task like walking on unsteady ground,

01:14:28 --> 01:14:31
it had to drill a hole through a wall.

01:14:30 --> 01:14:37
All these tasks and what a lot of teams said is the hardest part, the hardest task of all of them,

01:14:36 --> 01:14:39
is getting out of the car.

01:14:39 --> 01:14:45
So it's not getting into the car, it's this very task you saw now is the robot getting out of the car.

01:14:44 --> 01:14:47
These are things we take for granted.

01:14:47 --> 01:14:51
So in our evaluation of what is difficult about driving,

01:14:50 --> 01:14:56
we have to remember that some of those things we may take for granted

01:14:55 --> 01:15:05
in the same kind of way that we take walking for granted, this is more of X paradox.

01:15:06 --> 01:15:12
Will Hans Moravec from CMU, let me just quickly read that quote:

01:15:11 --> 01:15:16
"Encoded in the large highly evolved sensory motor portions of the human brain

01:15:15 --> 01:15:21
is billions of years of experience about the nature of the world and how to survive in it."

01:15:20 --> 01:15:29
So this is data. This is big data. Billions of years and abstract thought which is reasoning.

01:15:29 --> 01:15:33
The stuff we think is intelligence is perhaps

01:15:32 --> 01:15:37
less than one hundred thousand years of data old.

01:15:37 --> 01:15:40
We haven't yet mastered it and so,

01:15:40 --> 01:15:45
I'm sorry I'm asserting my own statements in the middle of a quote,

01:15:46 --> 01:15:52
but it's been very recent that we've learned how to think.

01:15:52 --> 01:15:58
And so we respected perhaps more than the things we take for granted

01:15:57 --> 01:16:04
like walking, the visual perception and so on but those may be strictly a matter of data,

01:16:05 --> 01:16:09
data and training time and network size.

01:16:14 --> 01:16:16
So walking is hard.

01:16:18 --> 01:16:20
The question is how hard is driving?

01:16:21 --> 01:16:26
And that's an important question because the margin of error is small.

01:16:27 --> 01:16:35
One, there's 1 fatality per 100 million miles.

01:16:35 --> 01:16:39
That's the number of people that die in car crashes every year,

01:16:38 --> 01:16:42
1 fatality per 100 million miles.

01:16:42 --> 01:16:48
That's a point 0.000001% margin of error.

01:16:47 --> 01:16:53
That's through all the time you spend on the road, that is the error you get.

01:16:52 --> 01:16:57
More impressed with ImageNet being able to classify a leopard, a cat or a dog

01:16:59 --> 01:17:05
at above human level performance but this is the margin of error we get with driving.

01:17:05 --> 01:17:12
And we have to be able to deal with snow, with heavy rain, with big open parking lots,

01:17:12 --> 01:17:19
with parking garages, any pedestrians that behaves irresponsibly as rarely as that happens

01:17:19 --> 01:17:25
or just some predictably, again especially in Boston, reflections.

01:17:26 --> 01:17:30
The ones especially some things you don't think about:

01:17:29 --> 01:17:34
the lighting variations that blind the cameras.

01:17:35 --> 01:17:42
(Inaudible question from one of the attendees)

01:17:41 --> 01:17:49
The question was if that number changes, if you look at just crashes, the fatalities per crash.

01:17:51 --> 01:17:58
So one of the big things is that cars have gotten really good at crashing and not hurting anybody.

01:17:58 --> 01:18:02
So the number of crashes is much, much larger than the number of fatalities

01:18:01 --> 01:18:05
which is a great thing, we've built safer cars.

01:18:05 --> 01:18:10
But still, you know even one fatality is too many.

01:18:13 --> 01:18:20
So this is one that Google self-driving car team

01:18:20 --> 01:18:29
is quite open about their performance since hitting public road,

01:18:29 --> 01:18:32
this is from a report that shows the number of times

01:18:33 --> 01:18:36
the driver disengaged

01:18:36 --> 01:18:41
the car gives up control,

01:18:41 --> 01:18:44
that it asked the driver to take control back

01:18:43 --> 01:18:46
or the driver takes control back by force.

01:18:45 --> 01:18:50
Meaning that they're unhappy with the decision that the car was making

01:18:50 --> 01:18:55
or it was putting the car or other pedestrians or other cars in unsafe situations.

01:18:55 --> 01:18:59
And so, if you see over time there's been a total

01:18:59 --> 01:19:02
from 2014 to 2015

01:19:03 --> 01:19:09
there's been a total of 341 times on beautiful San Francisco roads

01:19:09 --> 01:19:13
and I say that seriously because the weather conditions are great there,

01:19:13 --> 01:19:18
341 times that the driver had to elect to control back.

01:19:19 --> 01:19:21
So it's a work in progress.

01:19:21 --> 01:19:25
And let me give you something to think about here.

01:19:25 --> 01:19:32
This, with neural networks is a big open question.

01:19:31 --> 01:19:34
The question of robustness.

01:19:35 --> 01:19:39
So this is an amazing paper, I encourage people to read it.

01:19:38 --> 01:19:41
There's a couple of papers around this topic.

01:19:41 --> 01:19:44
Deep neural networks are easily fooled.

01:19:45 --> 01:19:53
So here are 8 images where, if given to a neural network as input,

01:19:52 --> 01:20:01
a convolutional neural network as input, the network with higher than 99.6% confidence says

01:20:01 --> 01:20:04
that the image, for example the top left, as a robin.

01:20:04 --> 01:20:11
Next to is a cheetah, then an armadillo, a panda, an electric guitar,

01:20:10 --> 01:20:13
a baseball, a starfish, a king penguin.

01:20:13 --> 01:20:17
All of these things are obviously not in the images.

01:20:16 --> 01:20:19
So the networks can be fooled with noise.

01:20:21 --> 01:20:29
More importantly, practically for the real world, adding just a little bit of distortion,

01:20:29 --> 01:20:38
a little bit of noise distortion to the image, can force the network to produce a totally wrong prediction.

01:20:37 --> 01:20:42
So here's an example, there's 3 columns,

01:20:42 --> 01:20:48
correct image classification, the slight addition of distortion

01:20:48 --> 01:20:54
and the resulting prediction of an ostrich for all three images on the left

01:20:54 --> 01:21:00
and a prediction of an ostrich for all three images on the right.

01:21:00 --> 01:21:06
This ability to fool networks easily brings up an important point.

01:21:06 --> 01:21:15
And that point is that there has been a lot of excitement

01:21:15 --> 01:21:18
about neural networks throughout their history.

01:21:17 --> 01:21:21
There's been a lot of excitement about artificial intelligence throughout its history

01:21:21 --> 01:21:29
and not coupling that excitement, not granting that excitement, in the reality

01:21:28 --> 01:21:40
the real challenges around that has resulted in in crashes, in A.I. winters when funding dried out

01:21:40 --> 01:21:45
and people became hopeless in terms of the possibilities of artificial intelligence.

01:21:45 --> 01:21:52
So here is the 1958 New York Times article that said the Navy revealed the embryo of an electronic computer today.

01:21:52 --> 01:21:56
This is when the first perceptron that I talked about

01:21:55 --> 01:22:00
was implemented in hardware by Frank Rosenblatt.

01:22:00 --> 01:22:05
It took 400 pixel image input and it provided a single output.

01:22:06 --> 01:22:10
Weights were encoded in the hardware potentiometers

01:22:10 --> 01:22:13
and waves were updated with electric motors.

01:22:12 --> 01:22:18
Now New York Times wrote, the Navy revealed the embryo vanilla electronic computer today

01:22:17 --> 01:22:27
that expects will be able to walk, talk, see, write, reproduce itself and be conscious of its existence.

01:22:28 --> 01:22:35
Dr. Frank Rosenblatt, a research psychologist at the Cornell Aeronautical Laboratory in Buffalo,

01:22:34 --> 01:22:40
said perceptrons might be fired to the planets as mechanical space explorers.

01:22:40 --> 01:22:46
This might seem ridiculous but this is the general opinion of the time.

01:22:47 --> 01:22:54
And as we know now, perceptrons cannot even separate a non-linear function.

01:22:55 --> 01:22:58
They're just linear classifiers.

01:22:58 --> 01:23:05
And so this led to 2 major A.I. winters in the 70s, in the late 80s and early 90s.

01:23:08 --> 01:23:16
The Lighthill Report, in 1973 by the UK government, said there are no part of the field

01:23:15 --> 01:23:19
of discoveries made so far produced the major impact that was promised.

01:23:19 --> 01:23:28
So if the hype builds beyond the capabilities of our research,

01:23:28 --> 01:23:36
reports like this will come and they have the possibility of creating another A.I. winter.

01:23:35 --> 01:23:40
So I want to pare the optimism, some of the cool things we'll talk about in this class,

01:23:41 --> 01:23:44
with the reality of the challenges ahead of us.

01:23:49 --> 01:23:56
The focus of the research community, this is some of the key players in deep learning,

01:23:56 --> 01:24:01
what are the things that are next for deep learning, the five year vision?

01:24:03 --> 01:24:08
We want to run on smaller, cheaper mobile devices.

01:24:08 --> 01:24:14
We want to explore more in the space of unsupervised learning as I mentioned

01:24:13 --> 01:24:15
and reinforcement learning.

01:24:16 --> 01:24:23
We want to do things that explore the space of videos more,

01:24:23 --> 01:24:28
the recurring neural networks, like being able to summarize videos or generate short videos.

01:24:29 --> 01:24:34
One of the big efforts, especially in the companies we do in large data,

01:24:34 --> 01:24:36
is multi-modal learning.

01:24:36 --> 01:24:41
Learning from multiple data sets with multiple sources of data.

01:24:41 --> 01:24:46
And lastly, making money from these technologies.

01:24:46 --> 01:24:52
There's a lot of this despite the excitement.

01:24:52 --> 01:24:57
There has been an inability for the most part to make serious money

01:24:57 --> 01:25:03
from some of the more interesting parts of deep learning.

01:25:06 --> 01:25:14
And while I got made fun of by the TAs for including this slide

01:25:13 --> 01:25:17
because it's shown in so many sort of business type lectures,

01:25:16 --> 01:25:21
but it is true that we're at the peak of a hype cycle

01:25:20 --> 01:25:27
and we have to make sure be given the large amount of hype and excited there is,

01:25:27 --> 01:25:29
we proceed with caution.

01:25:36 --> 01:25:46
One example of that, let me mention, is we already talked about spoofing the cameras.

01:25:45 --> 01:25:48
Spoofing the cameras with a little bit of noise.

01:25:47 --> 01:25:54
So if you think about it, self-driving vehicles operate with a set of sensors

01:25:54 --> 01:25:59
and they rely on those sensors to convey to accurately capture that information.

01:25:59 --> 01:26:07
And what happens, not only when the world itself produces noisy visual information,

01:26:07 --> 01:26:10
but what if somebody actually tries to spoof that data.

01:26:11 --> 01:26:15
One of the fascinating things have been recently done is spoofing of LIDAR.

01:26:16 --> 01:26:23
So these LIDAR is a range sense that gives a 3D-point cloud of the objects in the external environment.

01:26:23 --> 01:26:30
And you're able to successfully do a replay attack where you have the car

01:26:30 --> 01:26:35
see people in other cars around it when there's actually nothing around it.

01:26:36 --> 01:26:41
In the same way that you can spoof a camera to see things that are not there.

01:26:42 --> 01:26:43
A neural network.

01:26:44 --> 01:26:49
So let me run through some of the libraries that we'll work with

01:26:49 --> 01:26:54
and they're out there that you my work with if you proceed with deep learning.

01:26:54 --> 01:26:59
TensorFlow, that is the most popular one these days.

01:26:59 --> 01:27:02
It's heavily backed and developed by Google.

01:27:03 --> 01:27:14
It's primarily a python interface and is very good at operating on multiple GPUs.

01:27:14 --> 01:27:22
There's Keras and also TF Learn and TF Slim which are libraries that operate on top of TensorFlow

01:27:22 --> 01:27:29
that make it slightly easier, slightly more user friendly interfaces, to get up and running.

01:27:34 --> 01:27:40
Torch, if you're interested to get in at the lower level

01:27:40 --> 01:27:43
tweaking of the different parameters of neural networks

01:27:42 --> 01:27:45
creating your own architectures.

01:27:45 --> 01:27:50
Torch is excellent for that with it's own Lua interface.

01:27:49 --> 01:27:54
Lua's a programming language and heavily backed by Facebook.

01:27:54 --> 01:28:00
There is the old school "theano" which is what I started on a lot of people early on,

01:27:59 --> 01:28:05
in deep learning started on, as one of the first libraries that supported

01:28:04 --> 01:28:07
ahead came with GPU support.

01:28:06 --> 01:28:12
It definitely encourages lower level tinkering, has a python interface.

01:28:12 --> 01:28:19
And many of these, if not all, rely on Nvidia's library

01:28:19 --> 01:28:29
for doing some of the low level computations involved with training these neural networks on Nvidia GPUs.

01:28:30 --> 01:28:39
"mxnet" heavily supported by Amazon and they have officially recently announced

01:28:38 --> 01:28:44
that they're going to be, their AWS, is going to be all in on the mxnet.

01:28:46 --> 01:28:56
Neon, recently bought by Intel, started out as a manufacturer of neural network chips

01:28:55 --> 01:29:00
which is really exciting and it performs exceptionally well.

01:29:00 --> 01:29:02
I hear good things.

01:29:02 --> 01:29:10
Caffe, started in Berkeley, also was very popular in Google before Tensorlow came out.

01:29:10 --> 01:29:14
It's primarily designed for computer vision with ConvNet's

01:29:14 --> 01:29:19
but has now expanded to all of the domains.

01:29:21 --> 01:29:26
There is CNTK, used to be known and now called the Microsoft Cognitive Toolkit.

01:29:25 --> 01:29:29
Nobody calls it that still I'm aware of.

01:29:29 --> 01:29:36
It says multi GPU support, has its own brain script custom language

01:29:36 --> 01:29:38
as well as other interfaces.

01:29:39 --> 01:29:46
And we'll get to play around in this class is, amazingly, deep learning in the browser, right.

01:29:47 --> 01:29:55
Our favorite is ConvNetJS, what you use, built by Andrej Karpathy from Stanford now OpenAI.

01:29:55 --> 01:29:59
It's good for explaining the basic concept of neural networks.

01:29:58 --> 01:30:04
It's fun to play around with. All you need is a browser and some very few requirements.

01:30:03 --> 01:30:07
It can't leverage GPUs, unfortunately.

01:30:08 --> 01:30:11
But for a lot of things that we're doing, you don't need GPUs.

01:30:10 --> 01:30:17
You'd be able to train a network with very little and relatively efficiently without the [01:30:15] GPUs.

01:30:16 --> 01:30:23
It has full support for CNNs, RNNs and even deeper reinforcement learning.

01:30:23 --> 01:30:29
Keras.js, which seems incredible, we try to use for this class.

01:30:31 --> 01:30:36
It has GPU support so it runs in the browser with GPU support

01:30:35 --> 01:30:40
with Open GL or however it works magically

01:30:40 --> 01:30:44
but we're able to accomplish a lot of things we need without the use of GPUs.

01:30:46 --> 01:30:54
It's incredible to live in a day and age when it literally, as I'll show on the tutorials,

01:30:54 --> 01:30:59
it takes just a few minutes to get started with building your own neural network

01:30:58 --> 01:31:05
that classifies images and a lot of these libraries are friendly in that way.

01:31:04 --> 01:31:09
So all the references mentioned in this presentation

01:31:08 --> 01:31:13
are available at this link and the slides are available there as well.

01:31:13 --> 01:31:17
So I think in the interest of time, let me wrap up.

01:31:16 --> 01:31:24
Thank you so much for coming in today and tomorrow I'll explain the deep reinforcement learning game

01:31:23 --> 01:31:26
and the actual competition and how you can win.

01:31:26 --> 01:31:28
Thanks very much guys.

<!-- YOUTUBE_TRANSCRIPT_END -->
