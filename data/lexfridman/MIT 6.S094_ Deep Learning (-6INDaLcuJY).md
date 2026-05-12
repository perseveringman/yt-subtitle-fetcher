---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "-6INDaLcuJY"
title: "MIT 6.S094: Deep Learning"
video_url: "https://www.youtube.com/watch?v=-6INDaLcuJY"
thumbnail_url: "https://i.ytimg.com/vi/-6INDaLcuJY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=-6INDaLcuJY"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-01-15T21:19:11.000Z"
upload_date: "2018-01-15"
duration_seconds: 3726
duration_human: "1:02:06"
view_count: 141124
like_count: 1842
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:21:33.767Z"
---

# MIT 6.S094: Deep Learning

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=-6INDaLcuJY
- video_id: -6INDaLcuJY
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-01-15T21:19:11.000Z
- upload_date: 2018-01-15
- duration: 1:02:06
- view_count: 141124
- like_count: 1842
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, mit, self-driving cars, artificial intelligence, machine learning, opencourseware, free, open, 2018
- categories: Science & Technology

## Description

This is lecture 1 of course 6.S094: Deep Learning for Self-Driving Cars (2018 version). This class is free and open to everyone. It is an introduction to the practice of deep learning through the applied theme of building a self-driving car.

OUTLINE:
0:00 - Introduction
8:14 - Self-Driving Cars
14:20 - Deep Learning

INFO:
Slides: http://bit.ly/2HlyFHI
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Playlist: https://goo.gl/SLCb1y

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

LINKS:
Playlist: https://goo.gl/SLCb1y
Lecture 1: Deep Learning - https://youtu.be/-6INDaLcuJY
Lecture 2: Self-Driving Cars - https://youtu.be/_OCjqIgxwHw
Lecture 3: Deep Reinforcement Learning - https://youtu.be/MQ6pP65o7OM
Lecture 4: Computer Vision - https://youtu.be/CLOAswsxudo
Lecture 5: Deep Learning for Human Sensing - https://youtu.be/Z2GfE8pLyxc

Guest talk: Sacha Arnoud, Waymo - https://youtu.be/LSX3qdy0dFg
Guest talk: Emilio Frazolli, nuTonomy - https://youtu.be/dWSbItd0HEA
Guest talk: Sterling Anderson, Aurora - https://youtu.be/HKBhP9JISF0

2017:
Guest talk: Sertac Karaman, MIT - https://youtu.be/0fLSf3NO0-s
Guest talk: Chris Gerdes, Stanford - https://youtu.be/LDprUza7yT4

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:05
Thank you everyone for braving the cold, and the snow

00:00:05 --> 00:00:07
To be here

00:00:08 --> 00:00:13
This is 6.S094: Deep Learning for Self-Driving Cars

00:00:14 --> 00:00:19
And, it's a course where we cover the topic of Deep learning

00:00:19 --> 00:00:25
Which is a set of techniques, that have taken a leap in the last decade

00:00:24 --> 00:00:28
For our understanding

00:00:27 --> 00:00:31
Of what artificial intelligence systems are capable of doing

00:00:30 --> 00:00:35
And self-driving cars, which is systems,

00:00:34 --> 00:00:39
that can take these techniques, and integrate them

00:00:38 --> 00:00:44
In a meaningful, profound way into our daily lives

00:00:43 --> 00:00:45
In a way that transforms society.

00:00:46 --> 00:00:50
So that's why both of these topics, are extremely important

00:00:49 --> 00:00:53
And extremely exciting.

00:00:52 --> 00:00:55
My name is Lex Fridman,

00:00:54 --> 00:00:57
And I'm joined by an amazing team of engineers,

00:00:56 --> 00:01:03
In Jack Terwilliger, Julia Kindelsberger, Dan Brown

00:01:02 --> 00:01:05
Michael Glazer, Li Ding,

00:01:04 --> 00:01:09
Spencer Dodd and Benedikt Jenik,

00:01:08 --> 00:01:11
Among many others...

00:01:10 --> 00:01:15
We build autonomous vehicles, here at MIT,

00:01:14 --> 00:01:21
Not just ones that perceive, and move about the environment,

00:01:20 --> 00:01:25
But ones that interact, communicate, and earn the trust,

00:01:24 --> 00:01:28
And understanding of human beings inside the car,

00:01:27 --> 00:01:30
The drivers and the passengers,

00:01:29 --> 00:01:33
And the human beings outside the car

00:01:32 --> 00:01:37
the pedestrians and other drivers and cyclists.

00:01:39 --> 00:01:44
The website for this course: selfdrivingcars.mit.edu

00:01:43 --> 00:01:48
if you have questions, email at: deepcars@mit.edu

00:01:47 --> 00:01:52
Slack: deep-mit

00:01:51 --> 00:01:56
For registered MIT students, you have to register on the website

00:01:57 --> 00:02:02
And, by midnight, Friday, January 19th

00:02:02 --> 00:02:06
build a neural network, and submit it to the competition.

00:02:05 --> 00:02:09
That achieves the speed of 65 miles per hour

00:02:08 --> 00:02:12
On the new deep traffic 2.0

00:02:11 --> 00:02:15
It's much harder and much more interesting

00:02:14 --> 00:02:18
than last year's for those of you who participated.

00:02:17 --> 00:02:21
There's three competitions in this class:

00:02:20 --> 00:02:25
Deep Taffic,SegFuse DeepCrash

00:02:24 --> 00:02:28
There's guest speakers, that come from:

00:02:27 --> 00:02:31
Waymo, Google, Tesla

00:02:31 --> 00:02:36
And, those are starting new, autonomous vehicle startups

00:02:36 --> 00:02:42
In Voyage, NuTonomy and Aurora

00:02:43 --> 00:02:47
And then use a lot today from CES.

00:02:48 --> 00:02:53
And, we have shirts! For those of you who braved the snow

00:02:52 --> 00:02:57
and continued to do so towards the end of the class

00:02:56 --> 00:02:58
there will be free shirts.

00:02:57 --> 00:03:01
Yes, I said free and shirts in the same sentence,

00:03:00 --> 00:03:02
You should be here.

00:03:03 --> 00:03:07
Okay. First: The Deep Traffic competition

00:03:07 --> 00:03:11
There's a lot of updates, and we'll cover those on Wednesday.

00:03:11 --> 00:03:14
it's a deep reinforcement learning competition.

00:03:13 --> 00:03:18
Last year we received over 18,000 submissions,

00:03:18 --> 00:03:21
This year we're going to go bigger!

00:03:23 --> 00:03:27
Not only can you control one car, with your neural network

00:03:26 --> 00:03:28
You can control up to ten

00:03:27 --> 00:03:31
This is multi agent deep renforcement learning.

00:03:30 --> 00:03:33
This is super cool!

00:03:34 --> 00:03:39
Second: SegFuse - Dynamic Driving Scene Segmentation competition

00:03:39 --> 00:03:44
Where, you're given the raw video,

00:03:44 --> 00:03:50
The kinematics of the vehicles, the movement of the vehicle,

00:03:49 --> 00:03:52
The state-of-the-art segmentation.

00:03:52 --> 00:03:55
For the training set you're given:

00:03:54 --> 00:03:58
Ground truth labels, pixel level labels

00:03:57 --> 00:04:01
Scene segmentation, and optical flow.

00:04:00 --> 00:04:03
And with those pieces of data,

00:04:02 --> 00:04:07
You're tasked to try to perform better than the state-of-the-art

00:04:07 --> 00:04:10
In image based segmentation.

00:04:10 --> 00:04:13
Why is this critical,

00:04:13 --> 00:04:16
And fascinating, in an open research problem?

00:04:17 --> 00:04:22
Because, robots that act in this world,

00:04:21 --> 00:04:25
In the physical space, not only must interpret,

00:04:24 --> 00:04:27
Use these deep learning methods to interpret,

00:04:26 --> 00:04:29
The spatial visual characteristics of a scene,

00:04:29 --> 00:04:33
They must also interpret, understand, and track

00:04:32 --> 00:04:35
The temporal dynamics of the scene.

00:04:34 --> 00:04:38
This competition is about temporal propagaton of information,

00:04:37 --> 00:04:40
Not just scene segmentation.

00:04:40 --> 00:04:43
You must understand the space, and time.

00:04:44 --> 00:04:47
And finally

00:04:47 --> 00:04:49
Deep Crash

00:04:48 --> 00:04:51
Where we use deep reinforcement learning,

00:04:50 --> 00:04:54
To slam cars thousands of times,

00:04:53 --> 00:04:57
Here, at MIT, at the gym.

00:04:57 --> 00:05:03
You're given data on a thousand runs, where car

00:05:02 --> 00:05:06
Or a car knowing nothing is using a monocular camera's

00:05:05 --> 00:05:09
Single input, driving over 30 miles an hour,

00:05:08 --> 00:05:11
Through a scene, it has very little control through

00:05:10 --> 00:05:14
Very little capability to localize itself

00:05:13 --> 00:05:16
It must act very quickly.

00:05:15 --> 00:05:19
In that scene you're given a thousand runs, to learn anything.

00:05:21 --> 00:05:25
We'll discuss this, in the coming weeks.

00:05:24 --> 00:05:29
This competition will result in four submissions

00:05:29 --> 00:05:33
That; We evaluate everyone's in simulation

00:05:32 --> 00:05:37
But the top four submissions, we put head-to-head at the gym.

00:05:36 --> 00:05:41
And, until there is a winner declared, we keep slamming cars

00:05:41 --> 00:05:43
...at 30 miles an hour.

00:05:43 --> 00:05:48
Deep crash, and also on the website is from the last year,

00:05:47 --> 00:05:51
And on GitHub there's DeepTesla.

00:05:50 --> 00:05:55
Which is using the large-scale naturalistic driving data set

00:05:54 --> 00:05:58
We have to train a neural network to do enter and steering

00:05:57 --> 00:06:01
That takes in monocular video from the forward roadway,

00:06:00 --> 00:06:03
And produces steering commands,

00:06:03 --> 00:06:06
Steering commands for the car.

00:06:07 --> 00:06:10
Lectures: Today we'll talk about deep learning,

00:06:10 --> 00:06:13
Tomorrow we'll talk about autonomous vehicles,

00:06:12 --> 00:06:15
Deep RL is on Wednesday,

00:06:15 --> 00:06:20
Driving scene understanding So segmentation

00:06:19 --> 00:06:22
That's Thursday.

00:06:21 --> 00:06:25
On Friday, we have Sacha Arnoud,

00:06:25 --> 00:06:28
The Director of Engineering at Waymo.

00:06:27 --> 00:06:31
Waymo is one of the companies, that's truly taking

00:06:30 --> 00:06:34
Huge strides in fully autonomous vehicles.

00:06:33 --> 00:06:38
They're taking the fully L4, L5, autonomous vehicle approach.

00:06:37 --> 00:06:40
and it's fascinating to learn,

00:06:39 --> 00:06:42
he's also the head of perception for them.

00:06:41 --> 00:06:46
To learn from him; What kind of problems they're facing?

00:06:45 --> 00:06:48
And what kind of approach they're taking on?

00:06:47 --> 00:06:50
We have Emilio Frazzoli,

00:06:49 --> 00:06:52
Who's one of last year's speakers

00:06:51 --> 00:06:56
Sertac Karaman said Emilio is the smartest person he knows,

00:06:55 --> 00:06:59
So Emilio Frazzoli's the CTO of nuTonomy

00:06:58 --> 00:07:03
An autonomous vehicle company, that was just acquired by Delphi

00:07:03 --> 00:07:06
For a large sum of money. And they're doing a lot of

00:07:05 --> 00:07:09
incredible work in Singapore, and here in Boston.

00:07:10 --> 00:07:14
Next Wednesday, we are going to talk

00:07:13 --> 00:07:18
about the topic of our research, or my personal fascination,

00:07:17 --> 00:07:21
is deep learning for driver state sensing.

00:07:20 --> 00:07:24
Understanding the human, perceiving everything about the human

00:07:23 --> 00:07:26
being inside the car, and outside the car.

00:07:26 --> 00:07:30
One talk, I'm really excited about,

00:07:29 --> 00:07:32
is Oliver Cameron on Thursday.

00:07:32 --> 00:07:38
He is now the CEO of autonomous vehicle startup Voyage.

00:07:37 --> 00:07:42
He's previously the director of the self-driving car program, for Udacity

00:07:41 --> 00:07:47
He will talk about: how to start a self-driving car company,

00:07:46 --> 00:07:51
For those, who said that MIT folks are entrepreneurs.

00:07:50 --> 00:07:54
If you want to start one yourself, he'll tell you exactly how.

00:07:54 --> 00:07:56
It's super cool!

00:07:55 --> 00:07:58
And then, Sterling Anderson!

00:07:58 --> 00:08:04
Who was the director previously, Tesla Autopilot team.

00:08:03 --> 00:08:07
And now is a co-founder of Aurora,

00:08:06 --> 00:08:12
The self-driving car startup, that I mentioned,

00:08:11 --> 00:08:14
...that has now partnered, with NVIDIA and many others.

00:08:14 --> 00:08:17
So, why self-driving cars?

00:08:16 --> 00:08:21
This class is about applying data-driven learning methods,

00:08:20 --> 00:08:23
To the problem of autonomous vehicles.

00:08:23 --> 00:08:27
Why self-driving cars are fascinating,

00:08:26 --> 00:08:29
And an interesting problem space?

00:08:30 --> 00:08:34
Quite possibly, in my opinion,

00:08:33 --> 00:08:37
This is the first wide reaching, and profound integration

00:08:36 --> 00:08:40
Of personal robots, in society.

00:08:40 --> 00:08:44
Wide-reaching, because there's one billion cars on the road,

00:08:43 --> 00:08:46
Even a fraction of that, will change,

00:08:47 --> 00:08:51
...the face of transportation, and how we move about this world.

00:08:51 --> 00:08:55
Profound, and this is an important point,

00:08:54 --> 00:08:57
...that's not always understood.

00:08:58 --> 00:09:03
There's an intimate connection, between a human,

00:09:02 --> 00:09:08
And a vehicle, when there's a direct transfer of control.

00:09:07 --> 00:09:10
It's a direct transfer of control...

00:09:10 --> 00:09:14
That takes that, his or her life, into the hands,

00:09:13 --> 00:09:16
Of an artificial intelligence system.

00:09:16 --> 00:09:18
I showed a few quick,

00:09:19 --> 00:09:24
Quick clips here, you can Google first time with Tesla autopilot,

00:09:23 --> 00:09:28
On YouTube and watch people, perform that transfer of control,

00:09:27 --> 00:09:30
There's something magical...

00:09:29 --> 00:09:33
About a human and a robot working together,

00:09:33 --> 00:09:38
That will transform, what artificial intelligence is,

00:09:37 --> 00:09:39
In the 21st century.

00:09:38 --> 00:09:42
And this particular autonomous system,

00:09:41 --> 00:09:47
AI system, self-driving cars, is on the scale.

00:09:46 --> 00:09:51
And the profound,the life-critical nature of it, is profound.

00:09:50 --> 00:09:55
In a way that, it will truly test the capabilities of AI.

00:09:55 --> 00:09:58
There'a a personal connection,

00:09:58 --> 00:10:01
That will argue throughout these lectures,

00:10:00 --> 00:10:02
That we cannot escape considering the human being. That will argue throughout these lectures,

00:10:01 --> 00:10:04
That we cannot escape considering the human being.

00:10:03 --> 00:10:08
That autonomous vehicle, must not only perceive and control

00:10:07 --> 00:10:09
It's movement through the environment.

00:10:08 --> 00:10:13
You must also perceive everything about the human driver and the passenger

00:10:12 --> 00:10:16
And interact, communicate, and build trust with that driver.

00:10:20 --> 00:10:22
Because,...

00:10:22 --> 00:10:25
In my view,

00:10:24 --> 00:10:28
As I will argue throughout this course,

00:10:27 --> 00:10:31
An autonomous vehicle is more of a personal robot,

00:10:31 --> 00:10:35
than it is a perfect perception controled system.

00:10:34 --> 00:10:38
Because, perfect perception and control,

00:10:38 --> 00:10:41
For this world, full of humans,...

00:10:41 --> 00:10:44
Is extremely difficult.

00:10:43 --> 00:10:47
And could be, two-three-four decades away.

00:10:47 --> 00:10:49
Full autonomy.

00:10:49 --> 00:10:53
Autonomous vehicles are going to be flawed.

00:10:52 --> 00:10:55
They're going to have flaws...

00:10:54 --> 00:10:59
And we have to design systems, that are effectively caught

00:10:58 --> 00:11:03
That effectively transfer control to human beings,

00:11:02 --> 00:11:04
When they can't handle the situation.

00:11:04 --> 00:11:08
And that transfer of control... Is an...

00:11:07 --> 00:11:10
Is a fascinating opportunity for AI.

00:11:13 --> 00:11:17
Because the obstacle avoidance,

00:11:16 --> 00:11:22
Perception of obstacles, and obstacle avoidance,

00:11:21 --> 00:11:24
It's the easy problem.

00:11:23 --> 00:11:27
It's the safe problem. Going 30 miles an hour

00:11:26 --> 00:11:29
Navigating through streets of Boston,

00:11:29 --> 00:11:31
It's easy.

00:11:30 --> 00:11:35
It's when you have to get, to work, and you're late.

00:11:35 --> 00:11:38
Or you're sick of the person in front of you,

00:11:37 --> 00:11:41
...that you want to go in the opposing lane,

00:11:40 --> 00:11:41
and speed up.

00:11:41 --> 00:11:45
That's human nature. And we can't escape it.

00:11:44 --> 00:11:48
Our artificial intelligence systems,

00:11:47 --> 00:11:51
Can't escape human nature, they must work with it.

00:11:51 --> 00:11:54
What's shown here, is one of the algorithms,

00:11:53 --> 00:11:56
We'll talk about next week, for cognitive load.

00:11:56 --> 00:11:59
Or we take, the raw,...

00:11:58 --> 00:12:01
3D convolutional neural networks,

00:12:00 --> 00:12:05
Take in the eye region, the blinking, and the pupil movement

00:12:04 --> 00:12:07
To determine the cognitive load of the driver.

00:12:06 --> 00:12:10
We'll see how we can detect everything about the driver,

00:12:09 --> 00:12:13
Where they're looking? Emotion?

00:12:12 --> 00:12:16
Cognitive load? Body pose estimation?

00:12:16 --> 00:12:18
Drowsiness.

00:12:18 --> 00:12:23
The movement towards full autonomy

00:12:22 --> 00:12:24
...is so difficult...

00:12:24 --> 00:12:26
I would argue

00:12:25 --> 00:12:29
That it almost requires human level intelligence.

00:12:30 --> 00:12:32
That the....

00:12:31 --> 00:12:35
As I said, 2-3-4 decade out journey...

00:12:35 --> 00:12:39
For artificial intelligence researchers, to achieve full autonomy

00:12:39 --> 00:12:43
Will require achieving, solving, some of the problems

00:12:42 --> 00:12:46
Fundamental problems of creating intelligence.

00:12:46 --> 00:12:50
And... That's something we'll discuss,

00:12:49 --> 00:12:51
In much more depth,

00:12:51 --> 00:12:53
In a broader view in two weeks,

00:12:53 --> 00:12:56
For the artificial general intelligence course,

00:12:56 --> 00:12:59
Where we have Andrej Karpathy, from Tesla,

00:12:58 --> 00:13:03
Ray Kurzweil, Marc Raibert, from Boston Dynamics

00:13:03 --> 00:13:08
Who asked for the dimensions of this room, because he's bringing robots

00:13:08 --> 00:13:11
Nothing else was told to me...

00:13:11 --> 00:13:13
It'll be a surprise.

00:13:16 --> 00:13:18
So that is why I argue the human centered

00:13:17 --> 00:13:20
Artificial intelligence approach

00:13:20 --> 00:13:24
In every algorithm of a design considers the human.

00:13:26 --> 00:13:30
For autonomous vehicle on the left, the perception

00:13:29 --> 00:13:33
Scene understanding, and the control problem,

00:13:32 --> 00:13:35
As we'll explore through the competitions,

00:13:34 --> 00:13:37
And the assignments, of this course

00:13:37 --> 00:13:40
Can handle 90, and increasing

00:13:39 --> 00:13:44
...percent of the cases. But it's the 10,

00:13:43 --> 00:13:49
1.1 percent of the cases as we get better and better,

00:13:48 --> 00:13:50
That we have to...

00:13:50 --> 00:13:53
We're not able to handle through these methods

00:13:52 --> 00:13:55
And that's where the human, perceiving the human

00:13:54 --> 00:13:56
is really important.

00:13:55 --> 00:13:58
This is the video from last year.

00:13:58 --> 00:14:01
Of Arc de Triomphe Thank you

00:14:00 --> 00:14:02
Didn't know it last year, I know now.

00:14:02 --> 00:14:07
That is one of millions of cases,

00:14:06 --> 00:14:12
Where human to human interaction is the dominant driver.

00:14:12 --> 00:14:16
Not, the basic perception control problem

00:14:19 --> 00:14:22
So why deep learning in this space?

00:14:23 --> 00:14:26
Because deep learning

00:14:25 --> 00:14:31
Is a set of methods, that do well from a lot of data.

00:14:31 --> 00:14:34
And to solve these problems

00:14:33 --> 00:14:36
Where human life is at stake,

00:14:35 --> 00:14:39
We have to be able to have techniques

00:14:38 --> 00:14:42
That learn from data, learn from real-world data.

00:14:41 --> 00:14:46
This is the fundamental reality of artificial intelligent systems

00:14:45 --> 00:14:47
That operate in the real world.

00:14:47 --> 00:14:50
They must learn from real world data.

00:14:49 --> 00:14:54
Whether that's on the left for the perception, the control side,

00:14:54 --> 00:14:58
Or on the right, for the human

00:14:57 --> 00:15:01
The perception, and the communication, Interaction

00:15:00 --> 00:15:03
And collaboration with the human,

00:15:03 --> 00:15:05
And the human robot interaction.

00:15:06 --> 00:15:08
Ok.

00:15:08 --> 00:15:10
So what is deep learning?

00:15:13 --> 00:15:15
It's a set of techniques,

00:15:15 --> 00:15:18
if you allow me the definition, of intelligence

00:15:17 --> 00:15:21
Being the ability to accomplish complex goals,

00:15:21 --> 00:15:25
Then I would argue, definition of understanding

00:15:25 --> 00:15:28
Maybe a reasoning is...

00:15:28 --> 00:15:31
The ability to turn complex information

00:15:30 --> 00:15:34
Into simple, useful, actionable information.

00:15:34 --> 00:15:37
And that is what deep learning does.

00:15:37 --> 00:15:40
Deep learning is representation learning,

00:15:40 --> 00:15:43
Or feature learning, if you will.

00:15:43 --> 00:15:46
It's able to take raw information,

00:15:46 --> 00:15:48
Raw complicated information,

00:15:48 --> 00:15:50
That's hard to do anything with,

00:15:49 --> 00:15:54
And construct hierarchical representations of that information,

00:15:53 --> 00:15:56
To be able to do something interesting with it.

00:15:56 --> 00:16:00
It is the branch of artificial intelligence,

00:15:59 --> 00:16:03
Which is most capable and focused, on this task.

00:16:04 --> 00:16:07
Forming representations from data,

00:16:06 --> 00:16:09
Whether it's supervised or unsupervised,

00:16:08 --> 00:16:11
Whether it's with the help of humans, or not;

00:16:10 --> 00:16:15
It's able to construct structure,

00:16:14 --> 00:16:19
Find structure in the data; Such that you can extract

00:16:18 --> 00:16:21
Simple, useful, actionable information.

00:16:21 --> 00:16:23
On the left,

00:16:23 --> 00:16:25
From Ian Goodfellow's book,

00:16:26 --> 00:16:31
Is the basic example of a misclassification.

00:16:30 --> 00:16:33
The input of the image,

00:16:34 --> 00:16:37
On the bottom, with the raw pixels

00:16:36 --> 00:16:40
And as we go up the stack as we go up the layers,

00:16:39 --> 00:16:43
Higher and higher order representations are formed.

00:16:42 --> 00:16:47
From edges, to contours The corners, to object parts

00:16:46 --> 00:16:48
And then finally,

00:16:47 --> 00:16:51
The full object semantic classification, of what's in the image

00:16:51 --> 00:16:54
This is representation learning

00:16:54 --> 00:16:57
A favorite example for me

00:16:57 --> 00:17:01
Is, one from four centuries ago.

00:17:02 --> 00:17:04
Our place in the universe,

00:17:05 --> 00:17:08
And representing that place in the universe,

00:17:07 --> 00:17:10
Whether it's relative to Earth,

00:17:09 --> 00:17:12
Or relative to the Sun.

00:17:13 --> 00:17:17
On the left is our current belief,

00:17:16 --> 00:17:21
On the right is the one, that was held widely,

00:17:20 --> 00:17:22
Four centuries ago

00:17:23 --> 00:17:27
Representation matters! Because,what's on the right

00:17:26 --> 00:17:30
Is much more complicated than what's on the left.

00:17:34 --> 00:17:37
You can think of, in a simple case here

00:17:36 --> 00:17:40
When the task is to draw a line that separates,

00:17:39 --> 00:17:41
Green triangles and blue circles

00:17:41 --> 00:17:44
In the Cartesian coordinates space, on the left

00:17:44 --> 00:17:48
The task is much more difficult. Impossible, to do well

00:17:47 --> 00:17:51
On the right, it's trivial, in polar coordinates.

00:17:51 --> 00:17:54
This transformation is exactly

00:17:53 --> 00:17:57
Whan we need to learn, this is representation learning.

00:17:57 --> 00:18:00
So you can take the same task,

00:17:59 --> 00:18:01
Of having to draw a line that separates

00:18:00 --> 00:18:03
The blue curve, and the red curve on the left .

00:18:03 --> 00:18:08
If we draw a straight line, it's going to be a high

00:18:07 --> 00:18:11
There's no way to do it with zero error.

00:18:11 --> 00:18:13
With 100% accuracy

00:18:13 --> 00:18:17
Shown on the right, is our best attempt.

00:18:18 --> 00:18:21
But what we can do with deep learning,

00:18:20 --> 00:18:24
With a single hidden layer network done here,

00:18:23 --> 00:18:29
Is form the topology, the mapping of the space,

00:18:28 --> 00:18:30
In such a way, in the middle,

00:18:30 --> 00:18:33
That allows for a straight line to be drawn,

00:18:32 --> 00:18:35
That separates the blue curve, and the red curve.

00:18:35 --> 00:18:38
The learning of the function in the middle,

00:18:38 --> 00:18:41
Is what we're able to achieve with deep learning.

00:18:42 --> 00:18:46
It's taking raw, complicated information,

00:18:45 --> 00:18:51
And making it simple, actionable, useful.

00:18:51 --> 00:18:57
And the point is, that, this kind of ability to learn,

00:18:56 --> 00:18:59
From raw sensory information

00:18:58 --> 00:19:02
Means that, we can do a lot more, with a lot more data.

00:19:03 --> 00:19:07
So, deep learning gets better with more data.

00:19:09 --> 00:19:13
And that's important, for real world applications.

00:19:14 --> 00:19:17
Where edge cases are everything.

00:19:17 --> 00:19:22
This is us driving, with two perception control systems.

00:19:21 --> 00:19:25
One is in Tesla vehicle, with the autopilot

00:19:25 --> 00:19:28
Version one system that's using a monocular camera,

00:19:27 --> 00:19:30
To perceive the external environment,

00:19:29 --> 00:19:32
And produce control decisions.

00:19:31 --> 00:19:34
And our own, neural network

00:19:33 --> 00:19:37
Running on adjacent TX2, that's taking in the same.

00:19:36 --> 00:19:40
With a monocular camera, and producing control decisions.

00:19:40 --> 00:19:45
And, the two systems argue, and when they disagree

00:19:44 --> 00:19:48
They raise up a flag, to say that this is an edge case

00:19:47 --> 00:19:50
That needs human intervention.

00:19:50 --> 00:19:52
There is...

00:19:51 --> 00:19:55
Covering such edge cases, using machine learning,

00:19:55 --> 00:19:59
Is the main problem, of artificial intelligence, and...

00:19:59 --> 00:20:01
When applied to the real world,

00:20:01 --> 00:20:03
It is the main problem to solve.

00:20:04 --> 00:20:06
Okay.

00:20:06 --> 00:20:08
So what are neural networks?

00:20:09 --> 00:20:13
Inspired very loosely, and I'll discuss

00:20:12 --> 00:20:14
About the key difference between,

00:20:13 --> 00:20:17
Our own brains and artificial brains

00:20:17 --> 00:20:20
Because there's a lot of insights, in that difference.

00:20:20 --> 00:20:24
But inspired loosely by biological neural networks,

00:20:23 --> 00:20:27
Here, as a simulation of a...

00:20:26 --> 00:20:29
Thalamocortical brain network,

00:20:28 --> 00:20:31
Which is only 3 million neurons,

00:20:31 --> 00:20:35
476 million synapses... The full human brain,

00:20:34 --> 00:20:38
Is a lot more than that. A 100 billion neurons,

00:20:37 --> 00:20:43
...1,000 trillion synapses.

00:20:46 --> 00:20:49
There's inspirational music, with this one

00:20:48 --> 00:20:53
That I didn't realize was here, it should make you think.

00:20:53 --> 00:20:57
Artificial neural networks, yeah... Let's

00:20:56 --> 00:20:58
Just let it play...

00:21:00 --> 00:21:04
The human neural network is, a hundred billion neurons, right?

00:21:04 --> 00:21:07
1,000 trillion synapses.

00:21:06 --> 00:21:10
One of the state-of-the-art,

00:21:09 --> 00:21:13
Neural network is ResNet-152, which has...

00:21:13 --> 00:21:15
60 million synapses.

00:21:17 --> 00:21:21
That's a difference, of about...

00:21:20 --> 00:21:21
A seven order of magnitude difference That's a difference, of about...

00:21:20 --> 00:21:23
A seven order of magnitude difference

00:21:22 --> 00:21:27
The human brains have, 10 million times more synapses,

00:21:26 --> 00:21:29
Than artificial neural networks.

00:21:29 --> 00:21:33
Plus or minus one order of magnitude, depending on the network.

00:21:34 --> 00:21:37
So, what's the difference, between

00:21:36 --> 00:21:39
A biological neuron, and an artificial neuron?

00:21:40 --> 00:21:43
The topology of the human brain have no layers.

00:21:42 --> 00:21:46
Neural networks are stacked in layers

00:21:46 --> 00:21:48
They're fixed, for the most part.

00:21:49 --> 00:21:51
There is chaos!

00:21:51 --> 00:21:54
Very little structure in our human brain

00:21:53 --> 00:21:56
In terms of how neurons are connected.

00:21:56 --> 00:22:00
They're connected, often, to 10,000 plus other neurons.

00:22:00 --> 00:22:03
The number of synapses, from individual neurons

00:22:02 --> 00:22:07
That are... Input into the neuron is huge!

00:22:07 --> 00:22:12
They're asynchronous. The human brain works asynchronously.

00:22:11 --> 00:22:14
Artificial neural networks work synchronously.

00:22:15 --> 00:22:20
The learning algorithm for artificial neuron networks,

00:22:19 --> 00:22:23
The only one, the best one...

00:22:22 --> 00:22:25
Is back propagation.

00:22:25 --> 00:22:30
And we don't know, how human brains learn...

00:22:33 --> 00:22:38
Processing speed, this is one of the...

00:22:38 --> 00:22:42
The only benefits we have with artificial neural networks is...

00:22:42 --> 00:22:45
Artificial neurons are faster.

00:22:45 --> 00:22:49
But they're also extremely power inefficient,

00:22:50 --> 00:22:55
And... There is a division into stages,

00:22:54 --> 00:22:57
Of training and testing with neural networks.

00:22:56 --> 00:23:01
With biological neural networks, as you're sitting here today

00:23:00 --> 00:23:03
They're always learning.

00:23:03 --> 00:23:08
The only profound similarity, the inspiring one

00:23:07 --> 00:23:12
The captivating one, is that both are,

00:23:11 --> 00:23:14
Distributed computation at scale.

00:23:14 --> 00:23:19
There is an emergent aspect to neural networks,

00:23:19 --> 00:23:24
Where the basic element of computation: A neuron,

00:23:24 --> 00:23:27
Is simple. Is extremely simple.

00:23:27 --> 00:23:31
But when connected together, beautiful

00:23:30 --> 00:23:35
Amazing, powerful approximators can be formed.

00:23:35 --> 00:23:39
A neural network is built up with these computational units,

00:23:38 --> 00:23:40
They're the inputs,

00:23:39 --> 00:23:43
There's a set of edges, with weights on them.

00:23:43 --> 00:23:45
The edges...

00:23:44 --> 00:23:48
The weights are multiplied by this input signal,

00:23:47 --> 00:23:52
A bias is added, with a nonlinear function.

00:23:52 --> 00:23:55
That determines whether the network gets activated or not

00:23:54 --> 00:23:58
Well, the neuron gets activated or not.

00:23:57 --> 00:23:59
Visualized here.

00:23:59 --> 00:24:04
And these neurons can be combined in a number of ways.

00:24:03 --> 00:24:06
they can form a feed-forward neural network,

00:24:05 --> 00:24:09
Or they can feed back into itself,

00:24:09 --> 00:24:13
To form... To have state memory.

00:24:13 --> 00:24:16
In Recurrent neural networks.

00:24:15 --> 00:24:20
The ones on the left, are the ones that are most successful,

00:24:19 --> 00:24:24
For most applications, in computer vision.

00:24:24 --> 00:24:28
The ones on the right are very popular, and specific.

00:24:27 --> 00:24:31
One temporal dynamics, or dynamics time series

00:24:30 --> 00:24:32
of any kind are used.

00:24:32 --> 00:24:36
In fact, the ones on the right, are much closer

00:24:35 --> 00:24:38
To the way our human brains are

00:24:38 --> 00:24:40
Than the ones on the left,

00:24:40 --> 00:24:43
But that's why, they're really hard to train.

00:24:45 --> 00:24:50
One beautiful aspect, of this emergent power,

00:24:49 --> 00:24:52
For multiple neurons being connected together

00:24:51 --> 00:24:54
Is the universal property

00:24:53 --> 00:24:56
That with a single hidden layer

00:24:55 --> 00:24:59
These networks can learn any function

00:24:58 --> 00:25:01
Learn to approximate any function.

00:25:00 --> 00:25:06
Which is an important property to be aware of, because

00:25:06 --> 00:25:11
The limits here, are not in the power of the networks

00:25:11 --> 00:25:15
The limit in... ...is in the methods by which

00:25:14 --> 00:25:18
We construct them, and train them.

00:25:21 --> 00:25:26
What kinds of machine learning, deep learning are there?

00:25:26 --> 00:25:32
We can separate into two categories.

00:25:32 --> 00:25:34
Memorizers,

00:25:34 --> 00:25:39
The approaches, that essentially memorize patterns in the data.

00:25:39 --> 00:25:43
And approaches that, we can loosely say

00:25:42 --> 00:25:45
Are beginning to reason

00:25:45 --> 00:25:48
To generalize over the data, with minimal human input.

00:25:47 --> 00:25:52
On top, on the left are the, quote/unquote "Teachers",

00:25:51 --> 00:25:54
Is how much human input in blue, is needed

00:25:53 --> 00:25:58
To make the method successful for supervised learning,

00:25:57 --> 00:26:01
Which is what most of deep learning successes come from

00:26:00 --> 00:26:04
Or most of the data is annotated by human beings,

00:26:03 --> 00:26:08
The human is at the core of the success.

00:26:07 --> 00:26:10
Most of the data, that's part of the training

00:26:09 --> 00:26:12
Needs to be annotated by human beings.

00:26:12 --> 00:26:17
With some additional successes, coming from augmentation methods,

00:26:16 --> 00:26:18
That extend that...

00:26:18 --> 00:26:23
Extend the data, based on which these networks are trained

00:26:26 --> 00:26:30
And the semi-supervised reinforcement learning,

00:26:29 --> 00:26:31
And unsupervised methods,

00:26:30 --> 00:26:33
That we'll talk about, later in the course,

00:26:33 --> 00:26:37
That's where the near-term successes we hope are.

00:26:37 --> 00:26:40
And with the unsupervised learning approaches,

00:26:39 --> 00:26:42
that's where, the true excitement,

00:26:41 --> 00:26:45
About the possibilities of artificial intelligence lie.

00:26:44 --> 00:26:48
Being able to make sense, of our world

00:26:47 --> 00:26:51
With minimal input from humans,...

00:26:53 --> 00:27:00
So, we can think of two kinds of deep learning impact spaces.

00:27:00 --> 00:27:03
One is a special purpose intelligence.

00:27:03 --> 00:27:06
It's taking a problem, formalizing it.

00:27:05 --> 00:27:10
Collecting enough data on it, and being able to,

00:27:10 --> 00:27:16
Solve a particular case, that provides value.

00:27:16 --> 00:27:19
Of particular interest here is a network

00:27:18 --> 00:27:22
That estimates apartment costs in the Boston area.

00:27:21 --> 00:27:24
So you could take the number of bedrooms,

00:27:23 --> 00:27:26
The square feet, and the neighborhood...

00:27:25 --> 00:27:29
And provide as output, the estimated cost.

00:27:28 --> 00:27:33
On the right is the actual data,

00:27:32 --> 00:27:36
Of apartment cost. We're actually standing,

00:27:36 --> 00:27:42
In an area, that has over 3000 dollars for a studio apartment

00:27:44 --> 00:27:47
Some of you may be feeling that pain.

00:27:47 --> 00:27:51
And then there's general-purpose intelligence.

00:27:50 --> 00:27:54
Or something that feels like...

00:27:53 --> 00:27:57
Approaching general-purpose intelligence.

00:27:56 --> 00:28:00
Which is reinforcement, and unsupervised learning.

00:27:59 --> 00:28:04
Here with Andrej, from Andrej Karpathy's, Pong to Pixels.

00:28:03 --> 00:28:07
A system that takes in, 80 by 80 pixel image

00:28:06 --> 00:28:09
And with no other information is able to beat,

00:28:09 --> 00:28:11
Is able to win at this game.

00:28:10 --> 00:28:14
No information except a sequence of images,

00:28:13 --> 00:28:16
Raw sensory information,

00:28:15 --> 00:28:18
The same way, the same kind of information,

00:28:17 --> 00:28:20
That human beings take in, from the visual

00:28:19 --> 00:28:24
Audio, touch, sensory data.

00:28:23 --> 00:28:27
The very low-level data, and be able to learn to win.

00:28:26 --> 00:28:29
And it's very simplistic,

00:28:28 --> 00:28:32
And it's very artificially constructed world,

00:28:31 --> 00:28:33
But nevertheless,

00:28:32 --> 00:28:36
A world where no feature learning is performed.

00:28:35 --> 00:28:39
Only raw sensory information is used to win.

00:28:38 --> 00:28:42
With very sparse minimal human input.

00:28:42 --> 00:28:46
We'll talk about that on Wednesday.

00:28:46 --> 00:28:49
With deep reinforcement learning.

00:28:50 --> 00:28:54
So. But for now we'll focus on supervised learning.

00:28:54 --> 00:28:57
Where there is input data,

00:28:56 --> 00:28:59
There is a network we're trying to train,

00:28:59 --> 00:29:02
A learning system, and there's a correct output,

00:29:01 --> 00:29:04
That's labeled by human beings.

00:29:04 --> 00:29:08
That's the general training process for a neural network.

00:29:07 --> 00:29:10
Input data, labels...

00:29:09 --> 00:29:14
And the training of that network , that model.

00:29:13 --> 00:29:16
So that, in a testing stage,

00:29:15 --> 00:29:19
A new input data, that has never seen before,

00:29:18 --> 00:29:23
It's tasked with producing guesses, and is evaluated based on that.

00:29:23 --> 00:29:26
For autonomous vehicles, that means being released

00:29:25 --> 00:29:29
Either in simulation, or in the real world, to operate.

00:29:32 --> 00:29:36
And how they learn, how neural networks learn,

00:29:35 --> 00:29:38
Is given, the forward pass,

00:29:37 --> 00:29:41
Of taking the input data, whether it's from the training stage

00:29:42 --> 00:29:45
In the training stage, taking the input data,

00:29:44 --> 00:29:47
Producing a prediction.

00:29:46 --> 00:29:50
And then given that there's ground truth in the training stage,

00:29:49 --> 00:29:54
We can have a measure of error, based on a loss function.

00:29:53 --> 00:29:55
That then punishes...

00:29:55 --> 00:30:00
The synapses, the connections, the parameters,

00:29:59 --> 00:30:05
That were involved with making that wrong prediction.

00:30:07 --> 00:30:11
And it back propagates the error, through those weights.

00:30:11 --> 00:30:14
We'll discuss that in a little bit more detail, in a bit here...

00:30:14 --> 00:30:17
So what can we do with deep learning?

00:30:16 --> 00:30:19
You can do one-to-one mapping.

00:30:18 --> 00:30:22
Really you can think of input as being anything,

00:30:21 --> 00:30:24
It can be a number, a vector of number, a sequence of numbers

00:30:24 --> 00:30:27
A sequence of vector of numbers...

00:30:26 --> 00:30:29
Anything you can think of, from images to video,

00:30:28 --> 00:30:31
To audio, to text can be represented in this way.

00:30:31 --> 00:30:35
And the output can, the same, be a single number,

00:30:34 --> 00:30:39
Or it can be images, video, text, audio.

00:30:38 --> 00:30:41
One-to-one mapping on the bottom,

00:30:40 --> 00:30:45
One-to-many, many-to-one, many to many, and...

00:30:44 --> 00:30:49
Many to many with different starting points for the data.

00:30:49 --> 00:30:51
Asynchronous.

00:30:53 --> 00:30:56
Some quick terms, that will come up

00:30:55 --> 00:30:59
Deep learning is the same as neural networks,

00:30:59 --> 00:31:04
It's really deep neural networks, large neural networks

00:31:03 --> 00:31:07
It's a subset of machine learning, that has been

00:31:06 --> 00:31:10
Extremely successful in the past decade.

00:31:10 --> 00:31:14
Multi-layer perceptron, deep neural network ,

00:31:13 --> 00:31:15
Recurrent neural network

00:31:14 --> 00:31:18
Long short-term memory network LSTM

00:31:17 --> 00:31:21
Convolution neural network and deep belief networks,

00:31:20 --> 00:31:23
All of these will come up to the slides...

00:31:24 --> 00:31:28
And, there is specific operations,

00:31:27 --> 00:31:29
Layers within these networks of

00:31:28 --> 00:31:32
Convolution, pooling, activation, and back propagation.

00:31:31 --> 00:31:34
This concept that we'll discuss,

00:31:35 --> 00:31:37
In this class.

00:31:36 --> 00:31:40
Activation functions, there's a lot of variants.

00:31:41 --> 00:31:44
On the left is the activation function, the left column,

00:31:44 --> 00:31:47
And the x-axis is the input,

00:31:46 --> 00:31:49
On the y-axis is the output.

00:31:49 --> 00:31:52
The sigmoid function, the output.

00:31:52 --> 00:31:55
If the font is too small, the output is...

00:31:54 --> 00:31:57
Not centered at zero.

00:31:58 --> 00:32:03
For the Tanh function, it's centered at zero;

00:32:02 --> 00:32:05
But it still suffers from vanishing gradients.

00:32:04 --> 00:32:08
Vanishing gradients is when the value,

00:32:07 --> 00:32:10
The input is low or high.

00:32:11 --> 00:32:16
The output of the network, as you see in the right column,

00:32:15 --> 00:32:19
There, the derivative of the function is very low.

00:32:18 --> 00:32:21
So the learning rate is very low.

00:32:22 --> 00:32:24
For ReLU,

00:32:25 --> 00:32:29
Not, it's also not zero centered,

00:32:28 --> 00:32:32
But it does not suffer from vanishing gradients.

00:32:32 --> 00:32:35
Back propagation is the process of learning

00:32:35 --> 00:32:38
It's the way we take goal from error,

00:32:37 --> 00:32:39
Compute as the loss function,

00:32:38 --> 00:32:41
At the bottom right of the slide,

00:32:40 --> 00:32:45
Taking the actual output of the network with a forward pass,

00:32:44 --> 00:32:48
Subtracting it from the ground truth,

00:32:48 --> 00:32:50
Squaring, dividing by two,

00:32:49 --> 00:32:54
And than using that loss function. that back propagate,

00:32:53 --> 00:32:58
Through, to construct a gradient, to back propagate the error.

00:32:57 --> 00:32:59
To the weights that were responsible,

00:32:58 --> 00:33:02
For making either a correct, or an incorrect decision.

00:33:02 --> 00:33:06
So the subtasks are there, there's a forward pass,

00:33:05 --> 00:33:08
There's a backward pass, and...

00:33:07 --> 00:33:11
A fraction of the weight's gradient subtracted from the weight.

00:33:10 --> 00:33:12
That's it!

00:33:11 --> 00:33:15
That process is modular,

00:33:14 --> 00:33:17
So it's local to each individual neuron,

00:33:17 --> 00:33:19
Which is why it's extremely,...

00:33:18 --> 00:33:24
We're able to distribute it across multiple,

00:33:25 --> 00:33:29
Across the GPU. Parallelize across the GPU.

00:33:31 --> 00:33:35
So, learning for a neural network,

00:33:34 --> 00:33:37
These competition units are extremely simple.

00:33:37 --> 00:33:40
They're extremely simple to then...

00:33:39 --> 00:33:42
Correct when they make an error, when they're

00:33:41 --> 00:33:44
Part of a larger network, that makes an error.

00:33:43 --> 00:33:46
And, all that boils down to,

00:33:45 --> 00:33:48
Is essentially an optimization problem.

00:33:47 --> 00:33:51
Where the objective, utility, function is

00:33:50 --> 00:33:54
The loss function, and the goal is to minimize it.

00:33:53 --> 00:33:56
And we have to update the parameters

00:33:55 --> 00:33:57
The weights, and the synapses,

00:33:56 --> 00:34:00
And the biases to decrease that loss function.

00:34:01 --> 00:34:05
And that loss function is highly nonlinear.

00:34:06 --> 00:34:09
Depending on the activation function's different properties,

00:34:09 --> 00:34:11
Different issues arise.

00:34:10 --> 00:34:14
There's vanishing gradients, for sigmoid.

00:34:15 --> 00:34:18
Where the learning can be slow

00:34:18 --> 00:34:20
There's dying ReLU's...

00:34:21 --> 00:34:25
Where the derivative is exactly zero,

00:34:24 --> 00:34:28
For inputs less than zero.

00:34:28 --> 00:34:31
There are solutions to this, like leaky ReLU's

00:34:30 --> 00:34:34
And a bunch of details, you may discover

00:34:33 --> 00:34:37
When you try to win the deep traffic competition

00:34:36 --> 00:34:38
But, for the most part

00:34:37 --> 00:34:40
These are the main activation functions

00:34:40 --> 00:34:46
And it's the choice of the neural network designer

00:34:45 --> 00:34:48
Which one works best...

00:34:48 --> 00:34:51
There's saddle points, all the problems

00:34:50 --> 00:34:53
From your miracle, non-linear optimization

00:34:52 --> 00:34:55
That arise, come up here.

00:34:56 --> 00:34:59
It's hard to break symmetry,

00:34:58 --> 00:35:02
And stochastic gradient descent

00:35:02 --> 00:35:05
Wthout any kind of tricks to it,

00:35:04 --> 00:35:08
Can take a very long time, to arrive at the minima

00:35:09 --> 00:35:13
One of the biggest problems in all of machine learning

00:35:12 --> 00:35:16
And certainly deep learning, is overfitting

00:35:15 --> 00:35:19
You can think of the blue dots and a plot here

00:35:18 --> 00:35:22
As the data, to which we want to fit a curve

00:35:22 --> 00:35:27
We want to design a learning system that approximates

00:35:26 --> 00:35:29
The regression of this data.

00:35:29 --> 00:35:33
So, in green, is a sine curve

00:35:32 --> 00:35:35
Simple. Fits well.

00:35:35 --> 00:35:38
And then, there's a ninth degree polynomial

00:35:37 --> 00:35:41
Which fits even better, in terms of the error

00:35:40 --> 00:35:44
But it clearly overfits this data

00:35:43 --> 00:35:46
If there's other data

00:35:46 --> 00:35:50
That it has not seen yet that it has to fit

00:35:49 --> 00:35:52
It's likely to produce a high error

00:35:51 --> 00:35:54
So it's overfitting the training set

00:35:54 --> 00:35:57
This is a big problem for small data sets

00:35:57 --> 00:36:01
And so we have to fix that, with regularization

00:36:00 --> 00:36:04
Regularization is a set of methodologies

00:36:03 --> 00:36:05
That prevent overfitting

00:36:05 --> 00:36:09
Learning the training too well, in order

00:36:08 --> 00:36:11
And then to not be able to generalize

00:36:10 --> 00:36:13
To the testing stage

00:36:14 --> 00:36:17
And overfitting, the main symptom

00:36:16 --> 00:36:19
Is the error decreases in training set

00:36:18 --> 00:36:21
But increases in the test set.

00:36:22 --> 00:36:26
So there's a lot of techniques and traditional machine learning

00:36:25 --> 00:36:28
That deal with this; Cross validation, and so on...

00:36:27 --> 00:36:30
But because of the cost of training

00:36:29 --> 00:36:31
for neural networks

00:36:31 --> 00:36:36
Its traditional to use what's called a validation set

00:36:35 --> 00:36:38
So you create a subset of the training

00:36:38 --> 00:36:40
That you keep away

00:36:39 --> 00:36:42
For which you have the ground truth

00:36:41 --> 00:36:46
And use that, as a representative of the testing set.

00:36:46 --> 00:36:47
So you...

00:36:47 --> 00:36:50
Perform early stoppage, or more realistically

00:36:49 --> 00:36:53
Just save a checkpoint. Often.

00:36:53 --> 00:36:57
To see how, as the training evolves,

00:36:57 --> 00:37:02
The performance changes on the validation set,

00:37:01 --> 00:37:04
And so you can stop, when the performance

00:37:03 --> 00:37:06
In the validation set is getting a lot worse

00:37:05 --> 00:37:09
It means you're overtraining on the training set.

00:37:11 --> 00:37:14
In practice, of course,

00:37:13 --> 00:37:16
We run training much longer

00:37:15 --> 00:37:19
And see when, what is the best performing

00:37:18 --> 00:37:22
What is the best performing

00:37:21 --> 00:37:24
Snapshot checkpoint of the network?

00:37:24 --> 00:37:29
Dropout, is another very powerful regularization technique.

00:37:28 --> 00:37:31
Where we randomly remove part of the network

00:37:31 --> 00:37:35
Randomly remove some of the nodes in the network

00:37:34 --> 00:37:38
Along, with it's incoming and outgoing edges

00:37:38 --> 00:37:40
So what that really looks like,

00:37:39 --> 00:37:43
Is a probability of keeping a node.

00:37:42 --> 00:37:46
And in many deep learning frameworks today

00:37:45 --> 00:37:48
It comes with a dropout layer

00:37:47 --> 00:37:50
So it's essentially a probability

00:37:49 --> 00:37:52
That's usually greater than 0.5

00:37:51 --> 00:37:55
That a node will be kept.

00:37:54 --> 00:37:57
For the input layer

00:37:56 --> 00:37:59
The probability should be much higher,

00:37:58 --> 00:38:03
Or, more effectively, what works well is just adding noise

00:38:02 --> 00:38:04
What's the point here?

00:38:03 --> 00:38:09
You want to create enough diversity in the training data

00:38:08 --> 00:38:12
Such that it is generalizable, to the testing.

00:38:13 --> 00:38:16
And as you'll see with deep traffic competition,

00:38:15 --> 00:38:18
There's L2 and L1 penalty,

00:38:18 --> 00:38:20
Weight decay, weight penalty

00:38:20 --> 00:38:25
Where, there's a penalisation on the weights that get too large

00:38:24 --> 00:38:28
The L2 penalty keeps the weight small

00:38:27 --> 00:38:30
Unless the error derivative is huge

00:38:30 --> 00:38:33
And produces a smoother model,

00:38:32 --> 00:38:38
And prefers to distribute When there is two similar inputs

00:38:37 --> 00:38:40
It prefers to put half the weights on each

00:38:39 --> 00:38:42
Distribute the weights

00:38:41 --> 00:38:44
As opposed to putting the weight on one of the edges.

00:38:45 --> 00:38:48
Makes the network more robust

00:38:47 --> 00:38:50
L1 penalty has the one benefit

00:38:49 --> 00:38:52
That, for really large weights

00:38:52 --> 00:38:55
They're allowed to be, to stay.

00:38:54 --> 00:38:58
So it allows for a few weights to remain very large.

00:38:57 --> 00:39:00
These are the regularization techniques

00:38:59 --> 00:39:02
And I wanted to mention them because they're useful

00:39:01 --> 00:39:04
To some of the competitions, here in the course.

00:39:04 --> 00:39:07
And I recommend to go to playground

00:39:06 --> 00:39:09
To tensorflow playground

00:39:08 --> 00:39:11
To play around with some of these parameters

00:39:11 --> 00:39:15
Where you get to, online in the browser

00:39:14 --> 00:39:18
Play around with different inputs, different features

00:39:17 --> 00:39:20
Different number of layers, and regularization techniques

00:39:20 --> 00:39:23
And to build your intuition about classification

00:39:22 --> 00:39:27
Regression problems, given different input data sets.

00:39:28 --> 00:39:34
So what changed? Why over the past many decades

00:39:34 --> 00:39:38
Neural networks that have gone through two winters

00:39:37 --> 00:39:39
Are now again

00:39:39 --> 00:39:42
Dominating the artificial intelligence community

00:39:42 --> 00:39:46
CPUs, GPUs, ASICs,

00:39:45 --> 00:39:49
So, computational power has skyrocketed

00:39:48 --> 00:39:52
From Moore's law to GPUs

00:39:52 --> 00:39:58
There is huge data set, including ImageNet, and others

00:39:58 --> 00:40:03
There is research; Back propagation

00:40:02 --> 00:40:09
In the 80's, The convolutional neural networks

00:40:08 --> 00:40:13
LSTMs, there's been a lot of interesting breakthroughs

00:40:12 --> 00:40:15
About how to design these architectures

00:40:14 --> 00:40:18
How to build them, such that they're trainable efficiently

00:40:17 --> 00:40:19
Using GPUs.

00:40:20 --> 00:40:23
There is the software infrastructure

00:40:22 --> 00:40:25
From being able to share the data, or get;

00:40:24 --> 00:40:29
To being able to train networks, and share code

00:40:28 --> 00:40:33
And effectively view neural networks as a stack of layers

00:40:33 --> 00:40:36
As opposed to having to implement stuff from scratch

00:40:35 --> 00:40:40
With TensorFlow, PyTorch and other deep learning frameworks

00:40:39 --> 00:40:43
And there's huge financial backing from Google, Facebook, and so on...

00:40:46 --> 00:40:48
Deep learning...

00:40:49 --> 00:40:51
is...

00:40:51 --> 00:40:57
In order to understand, why it works so well

00:40:56 --> 00:40:58
And where it's limitations are...

00:40:58 --> 00:41:01
We need to understand where our own intuition comes from

00:41:00 --> 00:41:03
About what is hard, and what is easy

00:41:03 --> 00:41:05
The important thing about computer vision

00:41:04 --> 00:41:07
Which is a lot of what this course is about

00:41:06 --> 00:41:10
Even in deep reinforcement learning formulation

00:41:10 --> 00:41:14
Is that visual perception for us human beings

00:41:13 --> 00:41:18
Was formed 540 million years ago

00:41:17 --> 00:41:22
That's 540 million years worth of data

00:41:23 --> 00:41:25
An abstract thought

00:41:24 --> 00:41:28
Is only formed about a 100 thousand years ago

00:41:28 --> 00:41:32
That's several orders of magnitude less data

00:41:32 --> 00:41:35
So we can make, with the neural networks

00:41:34 --> 00:41:39
Predictions that seemed trivial

00:41:40 --> 00:41:44
Trivial to us human beings

00:41:43 --> 00:41:49
But completely challenging and wrong to neural networks

00:41:48 --> 00:41:52
Here, on the left, showing a prediction of a dog

00:41:51 --> 00:41:55
With a little bit of a distortion and noise added to the image

00:41:54 --> 00:41:57
Producing the image on the right

00:41:56 --> 00:41:59
And your network is confidently

00:41:58 --> 00:42:04
99 percent plus accuracy, Predicting that it's an ostrich

00:42:05 --> 00:42:08
And there's all these problems to deal with

00:42:07 --> 00:42:10
Whether it's in computer vision data,

00:42:09 --> 00:42:13
Whether it's in text data, audio...

00:42:12 --> 00:42:16
All of this variation arises

00:42:15 --> 00:42:19
In vision, It's illumination variability

00:42:18 --> 00:42:22
The set of pixels and the numbers look completely different

00:42:21 --> 00:42:23
Depending on the lighting conditions

00:42:22 --> 00:42:25
It's the biggest problem in driving

00:42:24 --> 00:42:28
Is, lighting conditions, lighting variability.

00:42:28 --> 00:42:30
Pose variation

00:42:29 --> 00:42:34
Objects need to be learned from every different perspective

00:42:33 --> 00:42:36
I'll discuss that for when sensing the driver

00:42:36 --> 00:42:37
Most of....

00:42:36 --> 00:42:41
Most of the deep learning work that's done in the face

00:42:40 --> 00:42:44
On the human, is done on the frontal face

00:42:43 --> 00:42:45
Or semi frontal face.

00:42:44 --> 00:42:51
There's very little work done on the full 360 pose

00:42:50 --> 00:42:53
Variability that a human being could take on.

00:42:55 --> 00:42:59
Intraclass variability for the classification problem,

00:42:58 --> 00:43:00
For the detection problem...

00:42:59 --> 00:43:03
There is a lot of different kinds of objects

00:43:02 --> 00:43:06
For cats, dogs, cars, bicyclists, pedestrians.

00:43:07 --> 00:43:10
So that brings us to object classification.

00:43:09 --> 00:43:14
And I'd like to take you through where deep learning

00:43:13 --> 00:43:17
Has taken big strides for the past several years

00:43:16 --> 00:43:20
Leading up to this year, to 2018

00:43:20 --> 00:43:25
So let's start at object classification

00:43:24 --> 00:43:27
Is when you take a single image,

00:43:26 --> 00:43:29
And you have to say...

00:43:28 --> 00:43:33
One class, that's most likely to belong in that image.

00:43:32 --> 00:43:37
The most famous variant of that is the ImageNet competition

00:43:36 --> 00:43:38
ImageNet challenge.

00:43:37 --> 00:43:41
ImageNet data set is a data set of 14 million images

00:43:40 --> 00:43:43
With 21,000 categories

00:43:43 --> 00:43:47
And... For, say, the category of fruit

00:43:46 --> 00:43:51
There's a total of 188,000 images of fruit

00:43:50 --> 00:43:55
And there is 1200 images of Granny Smith apples.

00:43:54 --> 00:43:58
It gives you a sense, of what we're talking about here

00:43:58 --> 00:44:01
So this has been, the source

00:44:00 --> 00:44:05
Of a lot of interesting breakthroughs in deep learning

00:44:04 --> 00:44:07
And a lot of the excitement, in deep learning

00:44:07 --> 00:44:11
It's first, the big successful network

00:44:10 --> 00:44:14
At least, one that became famous

00:44:13 --> 00:44:18
In deep learning is AlexNet in 2012

00:44:17 --> 00:44:20
That took a leap of...

00:44:19 --> 00:44:23
A significant leap in performance on the ImageNet challenge.

00:44:23 --> 00:44:26
So it was one of the first neural networks

00:44:25 --> 00:44:29
That was successfully trained on the GPU

00:44:28 --> 00:44:31
And achieved an incredible performance boost

00:44:30 --> 00:44:34
Over the previous year on the ImageNet challenge.

00:44:33 --> 00:44:36
The challenge is:

00:44:35 --> 00:44:38
...and I'll talk about some of these networks...

00:44:37 --> 00:44:41
It's to given a single image, give five guesses,

00:44:40 --> 00:44:44
And you have five guesses to guess

00:44:43 --> 00:44:46
For one of them to be correct

00:44:46 --> 00:44:49
The human annotation is a question often comes up

00:44:48 --> 00:44:51
So how do you know the ground truth?

00:44:51 --> 00:44:56
Human level performance is 5.1 percent accuracy, on this task.

00:44:57 --> 00:45:02
But, the way the annotation for ImageNet is performed, is

00:45:01 --> 00:45:06
There's a Google search, where you pull the images

00:45:05 --> 00:45:09
Already labeled for you, and then the annotation that

00:45:08 --> 00:45:11
Mechanical Turk, other humans perform

00:45:10 --> 00:45:14
Is just binary: Is this a cat, or not a cat

00:45:13 --> 00:45:16
So they're not tasked with performing

00:45:15 --> 00:45:21
The very high-resolution semantic labeling of the image.

00:45:21 --> 00:45:27
Okay. So, through, from 2012 with AlexNet, to today

00:45:27 --> 00:45:32
And the big transition in 2018 of the ImageNet challenge

00:45:31 --> 00:45:34
Leaving Stanford and going to Kaggle.

00:45:35 --> 00:45:38
It's sort of a monumental step

00:45:37 --> 00:45:40
Because in 2015 with the ResNet network

00:45:40 --> 00:45:42
Was the first time

00:45:41 --> 00:45:44
That the human level performance was exceeded

00:45:44 --> 00:45:50
And I think this is, a very important

00:45:51 --> 00:45:54
Map of where deep learning is.

00:45:53 --> 00:45:57
For particularly what I would argue is a toy example

00:45:56 --> 00:46:00
Despite the fact that it's 14 million images

00:45:59 --> 00:46:03
So we're developing state-of-the-art techniques here

00:46:02 --> 00:46:06
And in next stage, as we are now exceeding

00:46:05 --> 00:46:08
Human level performance, on this task

00:46:07 --> 00:46:11
Is how to take these methods into the real world.

00:46:10 --> 00:46:16
To perform scene perception, to perform driver state perception.

00:46:18 --> 00:46:22
In 2016, and 2017

00:46:22 --> 00:46:27
CUImage and SENnet has a very unique new addition

00:46:26 --> 00:46:29
To the previous formulations that has achieved

00:46:28 --> 00:46:32
An accuracy of 2.2 percent error

00:46:32 --> 00:46:37
2.25 percent error on the ImageNet classification challenge.

00:46:36 --> 00:46:39
It's an incredible result.

00:46:38 --> 00:46:42
Ok, so you have this image classification architecture

00:46:42 --> 00:46:46
That takes in a single image, and produces convolution

00:46:45 --> 00:46:50
And takes it through pooling convolution, and at the end

00:46:49 --> 00:46:52
Fully connected layers and performs

00:46:51 --> 00:46:54
A classification task, or regression task.

00:46:53 --> 00:46:59
And you can swap out that layer to perform any kind of other task

00:46:59 --> 00:47:02
Including with recurrent neural networks of

00:47:01 --> 00:47:04
Image captioning, and so on...

00:47:03 --> 00:47:06
Or localization of bounding boxes

00:47:05 --> 00:47:10
Or, you can do fully convolutional networks

00:47:09 --> 00:47:13
Which we'll talk about on Thursday

00:47:13 --> 00:47:17
Which is when you take an image as an input,

00:47:16 --> 00:47:19
And produce an image as an output.

00:47:18 --> 00:47:22
But where the output image, in this case,is a segmentation.

00:47:22 --> 00:47:27
Is, where a color indicates what the object is.

00:47:26 --> 00:47:29
The category of the object.

00:47:28 --> 00:47:31
So it's pixel level segmentation,

00:47:30 --> 00:47:33
Every single pixel in the image is assigned,

00:47:32 --> 00:47:37
A class, a category, where that pixel belongs to.

00:47:37 --> 00:47:41
This is, the kind of task,

00:47:40 --> 00:47:46
That's overlaid on top of other sensory information,

00:47:45 --> 00:47:47
Coming for the car in order to

00:47:46 --> 00:47:51
Perceive the external environment

00:47:50 --> 00:47:53
You can continue to extract information

00:47:52 --> 00:47:55
From images in this way

00:47:54 --> 00:47:56
To produce image to image mapping

00:47:55 --> 00:47:59
For example to colorize images

00:47:58 --> 00:48:01
And take from grayscale images to color images

00:48:04 --> 00:48:07
Or you can use that kind of heat map information

00:48:06 --> 00:48:09
To localize objects in the image

00:48:09 --> 00:48:13
So as opposed to just classifying that this is an image of a cow

00:48:13 --> 00:48:17
R-CNN, Fast and Faster R-CNN,

00:48:16 --> 00:48:19
And a lot of other localization networks

00:48:19 --> 00:48:23
Allow you to propose different candidates

00:48:22 --> 00:48:26
For where exactly the cow is located in this image

00:48:25 --> 00:48:28
And thereby being able to perform object detection

00:48:27 --> 00:48:30
Not just object classification.

00:48:32 --> 00:48:36
In 2017 there has been a lot of cool applications

00:48:35 --> 00:48:38
Of these architectures

00:48:37 --> 00:48:40
One of which is background removal

00:48:40 --> 00:48:43
Again mapping from image to image

00:48:42 --> 00:48:47
Ability to remove background from selfies

00:48:46 --> 00:48:53
Of humans or human-like pictures of faces

00:48:53 --> 00:48:59
The reference is, with some incredible animations,

00:48:58 --> 00:49:00
Are in the bottom of the slide,

00:48:59 --> 00:49:02
And the slides are now available online

00:49:04 --> 00:49:07
Pix2pixHD

00:49:07 --> 00:49:11
There's been a lot of work in GANs

00:49:10 --> 00:49:16
In Generative Adversarial Networks In particular in driving

00:49:16 --> 00:49:21
GANs have been used to generate examples

00:49:20 --> 00:49:25
That generate examples from source data

00:49:24 --> 00:49:27
Whether that's from raw data

00:49:26 --> 00:49:29
Or in this case with pix2pixHD

00:49:28 --> 00:49:34
Is taking coarse semantic labeling of the images

00:49:33 --> 00:49:36
Pixel level, and producing

00:49:35 --> 00:49:41
Photorealistic, high-definition images of the forward roadway

00:49:40 --> 00:49:45
This is an exciting possibility

00:49:44 --> 00:49:46
For being able to generate

00:49:45 --> 00:49:49
A variety of cases for self-driving cars

00:49:48 --> 00:49:51
For autonomous vehicles to be able to learn

00:49:50 --> 00:49:53
To generate, to augment the data

00:49:52 --> 00:49:56
And be able to change the way different roads look

00:49:55 --> 00:49:57
Road conditions,

00:49:56 --> 00:50:00
To change the way vehicles look cyclists, pedestrians.

00:50:00 --> 00:50:03
Then we can move on to recurrent neural networks

00:50:02 --> 00:50:06
Everything I've talked about was one-to-one mapping

00:50:06 --> 00:50:09
From image to image, or image to number

00:50:08 --> 00:50:11
Recurrent neural networks work with sequences

00:50:11 --> 00:50:16
We can use sequences to generate handwriting

00:50:18 --> 00:50:23
To generate text captions from an image

00:50:23 --> 00:50:27
Based on the localization, as the various detections, in that image.

00:50:28 --> 00:50:33
We can provide video description generation

00:50:32 --> 00:50:34
So taking a video

00:50:34 --> 00:50:37
And combining convolutional neural networks

00:50:36 --> 00:50:38
With recurrent neural networks

00:50:37 --> 00:50:41
Using convolutional neural networks to extract features

00:50:40 --> 00:50:42
Frame to frame

00:50:41 --> 00:50:44
And using those extracted features

00:50:43 --> 00:50:50
To input into our RDRN ends, to then generate labeling

00:50:50 --> 00:50:53
A description of what's going on in the video

00:50:54 --> 00:50:58
A lot of exciting approaches for autonomous systems

00:50:57 --> 00:51:00
Especially in drones

00:50:59 --> 00:51:05
Where the time to make a decision is short

00:51:04 --> 00:51:08
Same with the RC car traveling 30 miles an hour

00:51:07 --> 00:51:10
Attentional mechanisms

00:51:09 --> 00:51:12
For steering the attention of the network

00:51:11 --> 00:51:13
Have been very popular

00:51:12 --> 00:51:17
For the localization tasks and for just saving

00:51:16 --> 00:51:19
How much interpretation of the image

00:51:18 --> 00:51:21
How many pixels need to be considered

00:51:20 --> 00:51:22
In the classification task

00:51:22 --> 00:51:26
So we can steer, we can model the way

00:51:25 --> 00:51:28
A human being looks around an image

00:51:27 --> 00:51:29
To interpret it

00:51:28 --> 00:51:31
And use the network to do the same.

00:51:30 --> 00:51:33
And we can use that kind of steering

00:51:33 --> 00:51:36
To draw images, as well.

00:51:41 --> 00:51:45
Finally the big breakthroughs in 2017

00:51:44 --> 00:51:49
Came from this Pong to Pixels

00:51:48 --> 00:51:52
The reinforcement learning using sensory data

00:51:51 --> 00:51:53
Raw sensory data

00:51:52 --> 00:51:55
And use reinforcement learning methods

00:51:54 --> 00:51:58
Deep are all methods of which we'll talk about on Wednesday

00:51:57 --> 00:51:59
I'm really excited about...

00:51:59 --> 00:52:03
The underlying methodology of deep traffic, and deep crash

00:52:03 --> 00:52:09
Is using neural networks as the approximators

00:52:09 --> 00:52:12
Inside reinforcement learning approaches.

00:52:12 --> 00:52:15
So AlphaGo in 2016, have achieved

00:52:14 --> 00:52:17
a monumental task.

00:52:16 --> 00:52:19
That when I first started in artificial intelligence

00:52:19 --> 00:52:23
Was told to me is impossible for a system to accomplish

00:52:22 --> 00:52:26
Which is to win at the game of Go

00:52:25 --> 00:52:28
Against the top human player in the world.

00:52:29 --> 00:52:34
However that method was trained on human expert positions

00:52:34 --> 00:52:38
The Alphago system, was trained on previous games

00:52:37 --> 00:52:39
Played by human experts.

00:52:39 --> 00:52:43
And in an incredible accomplishment

00:52:43 --> 00:52:46
AlphaGo Zero in 2017

00:52:46 --> 00:52:50
Was able to beat AlphaGo,

00:52:49 --> 00:52:51
And many of it's variants

00:52:52 --> 00:52:58
By playing itself, from zero information

00:52:58 --> 00:53:02
So no knowledge of human experts

00:53:01 --> 00:53:07
No games, no training data very little human input

00:53:08 --> 00:53:11
And what more, it was able to generate

00:53:10 --> 00:53:14
Moves, that were surprising to human experts.

00:53:15 --> 00:53:20
I think it's Einstein that said that intelligence

00:53:19 --> 00:53:23
That the key mark of intelligence is imagination.

00:53:23 --> 00:53:28
I think it's beautiful to see an artificial intelligence system

00:53:27 --> 00:53:31
Come up with something that surprises human experts

00:53:31 --> 00:53:33
Truly surprises...

00:53:36 --> 00:53:39
For the gambling junkies, DeepStack

00:53:38 --> 00:53:41
And a few other variants

00:53:40 --> 00:53:45
Have been used in 2017 to win a heads-up poker.

00:53:45 --> 00:53:48
Again another incredible result!

00:53:47 --> 00:53:51
I was always told an artificial intelligence would be impossible

00:53:50 --> 00:53:51
For Deep,

00:53:50 --> 00:53:54
For any machine learning method to achieve

00:53:54 --> 00:53:57
And was able to beat a professional player

00:53:56 --> 00:54:00
And several competitors have come along since

00:54:00 --> 00:54:03
We're yet to be able to beat

00:54:02 --> 00:54:06
To win, in a tournament setting, so multiple players

00:54:05 --> 00:54:08
For those unfamiliar heads-up poker is one-on-one.

00:54:07 --> 00:54:13
It's a much much smaller, easier space to solve.

00:54:12 --> 00:54:16
There's a lot more human-to-human dynamics going on,

00:54:15 --> 00:54:17
For when there's multiple players.

00:54:17 --> 00:54:20
But that's the task for 2018

00:54:21 --> 00:54:26
And the drawbacks! It's one of my favorite videos

00:54:25 --> 00:54:29
I show it often, of Coast runners.

00:54:29 --> 00:54:32
For these deep reinforcement learning approaches

00:54:32 --> 00:54:36
The learning of the reward function

00:54:35 --> 00:54:38
The definition of the reward function

00:54:38 --> 00:54:43
Controls how the actual system behaves

00:54:42 --> 00:54:45
And this will come...

00:54:44 --> 00:54:48
This would be extremely important for us, with autonomous vehicles

00:54:48 --> 00:54:51
Here the boat is tasked with

00:54:50 --> 00:54:54
Gaining the highest number of points,

00:54:53 --> 00:54:57
And it figures out that it does not need to race,

00:54:56 --> 00:54:59
Which is the whole point of the game,

00:54:58 --> 00:55:00
In order to gain points

00:54:59 --> 00:55:03
But instead, pick up green circles

00:55:02 --> 00:55:06
That regenerate themselves, over and over.

00:55:05 --> 00:55:07
This is the...

00:55:07 --> 00:55:12
The counterintuitive behavior of a system

00:55:11 --> 00:55:16
That would not be expected

00:55:15 --> 00:55:17
When you first designed the reward function

00:55:17 --> 00:55:20
And this is a very formal simple system

00:55:19 --> 00:55:21
Nevertheless

00:55:20 --> 00:55:25
Is extremely difficult to come up with a reward function

00:55:24 --> 00:55:28
That makes it operate in the way you expect it to operate

00:55:27 --> 00:55:31
Very applicable for autonomous vehicles

00:55:31 --> 00:55:34
Of course in the perception side

00:55:33 --> 00:55:36
As I and mentioned with the ostrich and the dog

00:55:36 --> 00:55:41
A little bit of noise, with 99.6 percent confidence

00:55:40 --> 00:55:42
We can predict

00:55:41 --> 00:55:45
That the noise up top is a robbing, a cheetah,

00:55:44 --> 00:55:46
Armadillo, lesser Panda...

00:55:45 --> 00:55:50
These are outputs from actual state-of-the-art neural networks

00:55:51 --> 00:55:55
Taking in the noise, and producing a confident prediction

00:55:55 --> 00:56:00
It should build our intuition, to understand that we don't

00:55:59 --> 00:56:02
That the visual characteristics,

00:56:01 --> 00:56:05
The spatial characteristics of an image

00:56:04 --> 00:56:08
Did not necessarily convey the level of hierarchy

00:56:07 --> 00:56:10
Necessary to function in this world.

00:56:12 --> 00:56:16
In a similar way, with a dog and the ostrich

00:56:15 --> 00:56:17
And everything and an ostrich

00:56:16 --> 00:56:21
Network confidently, with a little bit of noise

00:56:20 --> 00:56:22
Can make the wrong prediction

00:56:22 --> 00:56:25
Thinking that school bus, is an ostrich

00:56:25 --> 00:56:28
And a speaker is an ostrich

00:56:29 --> 00:56:34
They're easily fooled But not really...

00:56:33 --> 00:56:38
Because they perform the task that they were trained to do, well

00:56:38 --> 00:56:43
So we have to make sure we keep our intuition

00:56:44 --> 00:56:48
Optimized to the way machines learn

00:56:47 --> 00:56:49
Not the way humans have learned

00:56:49 --> 00:56:53
Over the 540 million years of data

00:56:52 --> 00:56:54
That we've gained

00:56:53 --> 00:56:56
Through developing the eye through evolution

00:56:56 --> 00:56:59
The current challenges we're taking on

00:56:58 --> 00:57:01
First: Transfer learning

00:57:00 --> 00:57:04
There's a lot of success in transfer learning

00:57:03 --> 00:57:07
Between domains that are very close to each other

00:57:06 --> 00:57:10
So, image classification from one domain to the next.

00:57:10 --> 00:57:13
There's a lot of value in forming representations

00:57:12 --> 00:57:15
Of the way scenes look, in order

00:57:14 --> 00:57:17
Natural scenes look,

00:57:16 --> 00:57:19
In order to do scene segmentation

00:57:18 --> 00:57:21
The driving case, for example.

00:57:20 --> 00:57:26
But we're not able to do any bigger leaps,

00:57:25 --> 00:57:28
In the way it would perform transfer learning

00:57:28 --> 00:57:30
The biggest challenge for deep learning

00:57:29 --> 00:57:31
Is to generalize

00:57:31 --> 00:57:33
Generalize across domains.

00:57:33 --> 00:57:36
It lacks the ability to reason,

00:57:35 --> 00:57:39
In the way that we've defined understanding previously

00:57:38 --> 00:57:42
Which is the ability to turn complex information

00:57:41 --> 00:57:44
Into simple useful information.

00:57:44 --> 00:57:48
Convert domain specific,

00:57:48 --> 00:57:51
Complicated sensory information.

00:57:50 --> 00:57:54
That doesn't relate to the initial training set.

00:57:54 --> 00:57:57
That's the open challenge for deep learning

00:57:56 --> 00:58:00
Train on very little data, and then go and reason,

00:57:59 --> 00:58:01
And operate in the real world.

00:58:01 --> 00:58:04
Right now, you'll know, it's very inefficient

00:58:04 --> 00:58:06
They require big data

00:58:06 --> 00:58:09
They require supervised data

00:58:08 --> 00:58:10
Which means they need human.

00:58:09 --> 00:58:12
Cost a human input

00:58:12 --> 00:58:15
They're not fully automated,

00:58:14 --> 00:58:17
Despite the fact that the feature learning

00:58:16 --> 00:58:18
Incredibly the big breakthrough

00:58:17 --> 00:58:21
Feature learning is performed automatically,

00:58:20 --> 00:58:23
You still have to do a lot of design,

00:58:22 --> 00:58:25
Of the actual architecture of the network

00:58:24 --> 00:58:27
And all the different hyper parameter tuning

00:58:26 --> 00:58:28
needs to be performed.

00:58:28 --> 00:58:30
Human input

00:58:29 --> 00:58:33
Perhaps a little bit more educated human input,

00:58:32 --> 00:58:36
A former PhD students, postdocs faculty

00:58:35 --> 00:58:40
Is required to tune these hyper parameters.

00:58:39 --> 00:58:42
But nevertheless, human input is still necessary.

00:58:41 --> 00:58:44
They cannot be left alone.

00:58:44 --> 00:58:46
For the most part...

00:58:47 --> 00:58:50
The reward. Defining the reward As we saw with coast run

00:58:49 --> 00:58:51
Is extremely difficult

00:58:51 --> 00:58:55
For systems that operate in the real world

00:58:54 --> 00:58:56
Transparency

00:58:56 --> 00:58:59
Quite possibly it's not an important one

00:58:58 --> 00:59:02
But neural networks, currently, are a black box.

00:59:01 --> 00:59:03
For the most part.

00:59:02 --> 00:59:04
They're not able to accept

00:59:03 --> 00:59:07
Through a few successful visualization methods

00:59:06 --> 00:59:10
That visualize different aspects of the activations

00:59:09 --> 00:59:14
They're not able to reveal, to us humans

00:59:13 --> 00:59:16
Why they work, or where they fail

00:59:17 --> 00:59:20
And this is a philosophical question,

00:59:19 --> 00:59:22
For autonomous vehicles,

00:59:21 --> 00:59:23
That we may not care as human beings

00:59:22 --> 00:59:25
If a system works well enough.

00:59:25 --> 00:59:30
But I would argue that, it will be a long time,

00:59:29 --> 00:59:32
Before systems work well enough,

00:59:31 --> 00:59:33
Or we don't care.

00:59:33 --> 00:59:35
We'll care,

00:59:34 --> 00:59:37
And we'll have to work together with these systems

00:59:36 --> 00:59:39
And that's where transparency, communication,

00:59:38 --> 00:59:41
...collaboration is critical.

00:59:40 --> 00:59:44
Edge cases. It's all about edge cases.

00:59:43 --> 00:59:47
In robotics, in autonomous vehicles...

00:59:47 --> 00:59:51
The 99.9 percent of driving is really boring,

00:59:50 --> 00:59:54
It's the same. Especially highway driving.

00:59:53 --> 00:59:57
Traffic driving. It's the same.

00:59:56 --> 01:00:00
The obstacle avoidance, the car following the lanes...

00:59:59 --> 01:00:02
centering. All these problems are trivial.

01:00:01 --> 01:00:04
It's the edge cases.

01:00:04 --> 01:00:07
Trillions of edge cases,

01:00:06 --> 01:00:08
They need to be generalised over,

01:00:07 --> 01:00:10
On a very small amount of training data.

01:00:15 --> 01:00:19
So again I return to: Why deep learning?

01:00:21 --> 01:00:24
I mentioned a bunch of challenges,

01:00:24 --> 01:00:27
And this is an opportunity!

01:00:26 --> 01:00:33
It's an opportunity, to come up with techniques,

01:00:33 --> 01:00:36
that operate successfully in this world.

01:00:36 --> 01:00:40
So I hope the competitions we present in this class,

01:00:39 --> 01:00:41
And the autonomous vehicle domain,

01:00:40 --> 01:00:45
Will give you some insight, and an opportunity to apply...

01:00:44 --> 01:00:48
In some of these cases are open research problems,

01:00:47 --> 01:00:51
Wth semantic segmentation of external perception,

01:00:50 --> 01:00:54
With control of the vehicle, and deep traffic

01:00:54 --> 01:00:58
And, with deep crash,

01:00:57 --> 01:01:02
Of control of the vehicle, and under actuated

01:01:01 --> 01:01:07
High speed conditions, and the driver state perception.

01:01:10 --> 01:01:14
So with that, I wanted to introduce deep learning to you today,

01:01:13 --> 01:01:17
Before we get to the fun tomorrow of autonomous vehicles.

01:01:17 --> 01:01:22
So, I would like to thank: Nvidia, Google, Autoliv,

01:01:22 --> 01:01:28
Toyota. And, at the risk of setting off people's phones:

01:01:27 --> 01:01:30
Amazon Alexa, Auto...

01:01:31 --> 01:01:39
But, truly, I would like to say, that I've been humbled

01:01:38 --> 01:01:42
Over the past year, by the

01:01:41 --> 01:01:43
thousands of messages were received

01:01:43 --> 01:01:48
By the attention. By the 18,000 competition entries.

01:01:47 --> 01:01:52
By the many people across the world, not just here at MIT,

01:01:51 --> 01:01:56
That are brilliant, that I got a chance to interact with.

01:01:55 --> 01:01:58
And I hope we go bigger,

01:01:57 --> 01:02:00
And do some impressive stuff in 2018.

01:02:00 --> 01:02:03
Thank you very much, and tomorrow is self-driving!

<!-- YOUTUBE_TRANSCRIPT_END -->
