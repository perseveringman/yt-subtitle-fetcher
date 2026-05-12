---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "O5xeyoRL95U"
title: "Deep Learning Basics: Introduction and Overview"
video_url: "https://www.youtube.com/watch?v=O5xeyoRL95U"
thumbnail_url: "https://i.ytimg.com/vi/O5xeyoRL95U/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=O5xeyoRL95U"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-01-11T16:47:40.000Z"
upload_date: "2019-01-11"
duration_seconds: 4086
duration_human: "1:08:06"
view_count: 2521141
like_count: 46251
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:14:40.829Z"
---

# Deep Learning Basics: Introduction and Overview

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=O5xeyoRL95U
- video_id: O5xeyoRL95U
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-01-11T16:47:40.000Z
- upload_date: 2019-01-11
- duration: 1:08:06
- view_count: 2521141
- like_count: 46251
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, machine learning, computer vision, tensorflow, deepmind, openai, mit, introduction, basics, lex fridman, mit deep learning, deep learning mit, deep learning tutorial, deep learning basics, intro to deep learning, introduction to deep learning, what is deep learning, deep learning basics mit, basics of deep learning, tensorflow tutorial, deep learning python, deep learning andrew ng, deep learning tensorflow, intro to machine learning, deep learning introduction
- categories: Science & Technology

## Description

An introductory lecture for MIT course 6.S094 on the basics of deep learning including a few key ideas, subfields, and the big picture of why neural networks have inspired and energized an entire new generation of researchers. For more lecture videos on deep learning, reinforcement learning (RL), artificial intelligence (AI & AGI), and podcast conversations, visit our website or follow TensorFlow code tutorials on our GitHub repo.

INFO:
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Slides: http://bit.ly/deep-learning-basics-slides
Playlist: http://bit.ly/deep-learning-playlist
Blog post: https://link.medium.com/TkE476jw2T

OUTLINE:
0:00 - Introduction
0:53 - Deep learning in one slide
4:55 - History of ideas and tools
9:43 - Simple example in TensorFlow
11:36 - TensorFlow in one slide
13:32 - Deep learning is representation learning
16:02 - Why deep learning (and why not)
22:00 - Challenges for supervised learning
38:27 - Key low-level concepts
46:15 - Higher-level methods
1:06:00 - Toward artificial general intelligence

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
Welcome everyone to 2019.

00:00:03 --> 00:00:06
It's really good to see everybody here

00:00:05 --> 00:00:07
make it in the cold.

00:00:06 --> 00:00:11
This is 6.S094 Deep Learning for Self-Driving Cars.

00:00:13 --> 00:00:16
It is part of a series of courses

00:00:16 --> 00:00:20
on deep learning that we're running throughout this month.

00:00:19 --> 00:00:23
The website that you can get all the content of

00:00:22 --> 00:00:24
videos, the lectures and the code is

00:00:24 --> 00:00:27
deeplearning.mit.edu.

00:00:26 --> 00:00:30
The videos and slides will be made available there

00:00:29 --> 00:00:32
along with a github repository

00:00:31 --> 00:00:34
that's accompanying the course.

00:00:34 --> 00:00:36
Assignments for registered students will be

00:00:35 --> 00:00:39
mailed later on in the week.

00:00:39 --> 00:00:42
And you can always contact us with

00:00:41 --> 00:00:43
questions, concerns, comments at

00:00:43 --> 00:00:49
hcai, human centered AI, at mit.edu.

00:00:48 --> 00:00:52
So let's start through the basics,

00:00:51 --> 00:00:53
the fundamentals.

00:00:53 --> 00:00:56
To summarize in one slide,

00:00:55 --> 00:00:59
what is deep learning?

00:00:58 --> 00:01:03
It is a way to extract useful patterns from data

00:01:02 --> 00:01:04
in an automated way

00:01:04 --> 00:01:09
with as little human effort involved

00:01:09 --> 00:01:12
as possible hence to automate it.

00:01:12 --> 00:01:16
How? The fundamental aspect that we'll talk about

00:01:15 --> 00:01:19
a lot is the optimization of neural networks.

00:01:19 --> 00:01:23
The practical nature that we'll provide the code

00:01:22 --> 00:01:26
and so on is that there's

00:01:25 --> 00:01:30
libraries that make it accessible

00:01:29 --> 00:01:33
and easy to do some of the most powerful things

00:01:33 --> 00:01:38
in deep learning using Python, TensorFlow & friends.

00:01:38 --> 00:01:42
The hard part always with

00:01:41 --> 00:01:46
machine learning artificial intelligence in general

00:01:45 --> 00:01:50
is asking good questions and getting good data.

00:01:49 --> 00:01:55
A lot of times the exciting aspects of what's the news covers

00:01:54 --> 00:01:59
and a lot of the exciting aspects of what is published

00:01:58 --> 00:02:02
and that the prestigious conferences in an archive,

00:02:01 --> 00:02:05
in a blog post is the methodology.

00:02:04 --> 00:02:07
The hard part is applying the

00:02:06 --> 00:02:10
methodology to solve real world problems,

00:02:09 --> 00:02:11
to solve fascinating interesting problems.

00:02:10 --> 00:02:13
And that requires data,

00:02:12 --> 00:02:16
that requires asking the right questions of that data,

00:02:16 --> 00:02:18
organizing that data

00:02:18 --> 00:02:23
nd labeling selecting aspects of that data that can reveal

00:02:23 --> 00:02:26
the answers to the questions you ask.

00:02:25 --> 00:02:31
So why has this breakthrough over the past decade

00:02:30 --> 00:02:33
of the application of neural networks,

00:02:33 --> 00:02:35
the ideas in neural networks?

00:02:34 --> 00:02:36
What has happened? What has changed?

00:02:35 --> 00:02:41
They've been around since the 1940s.

00:02:40 --> 00:02:45
And ideas were percolating even before.

00:02:44 --> 00:02:49
The digitization of information, data.

00:02:48 --> 00:02:54
The ability to access data easily in a distributed fashion across the world.

00:02:53 --> 00:02:57
All kinds of problems have now a digital form.

00:02:56 --> 00:03:00
They can be accessed by learning algorithms.

00:02:59 --> 00:03:07
Hardware; compute, both the Moore's Law of CPU and GPU

00:03:07 --> 00:03:10
and ASICs, Google's TPU systems,

00:03:09 --> 00:03:13
hardware that enables the efficient

00:03:12 --> 00:03:18
effective large-scale execution of these algorithms.

00:03:18 --> 00:03:22
Community; people here, people all over the world

00:03:22 --> 00:03:26
are being able to work together, to talk to each other,

00:03:25 --> 00:03:29
to feed the fire of excitement behind machine learning.

00:03:28 --> 00:03:32
github and beyond.

00:03:31 --> 00:03:36
The tooling; we'll talk about TensorFlow

00:03:35 --> 00:03:39
PyTorch and everything in between

00:03:39 --> 00:03:46
that enables a person with an idea

00:03:45 --> 00:03:51
to reach a solution in less and less and less time.

00:03:50 --> 00:03:53
Higher and higher levels of abstraction

00:03:52 --> 00:03:55
empower people

00:03:54 --> 00:03:57
to solve problems in less and less time

00:03:56 --> 00:03:59
with less and less knowledge,

00:03:59 --> 00:04:03
where the idea and the data become the central point,

00:04:02 --> 00:04:07
not the effort, that takes you from an idea to the solution.

00:04:06 --> 00:04:10
And there's been a lot of exciting progress.

00:04:09 --> 00:04:13
Some of which we'll talk about from face recognition to

00:04:12 --> 00:04:17
the general problem of scene understanding, image classification,

00:04:16 --> 00:04:21
the speech, text, natural language processing, transcription,

00:04:20 --> 00:04:25
translation in medical applications and medical diagnosis.

00:04:24 --> 00:04:27
And cars

00:04:27 --> 00:04:31
being able to solve many aspects of perception in autonomous vehicles

00:04:31 --> 00:04:33
with drivable area, lane detection,

00:04:33 --> 00:04:36
object detection, digital assistance,

00:04:35 --> 00:04:41
ones on your phone and beyond the ones in your home.

00:04:40 --> 00:04:47
Ads, recommender systems from Netflix to search to social, Facebook.

00:04:46 --> 00:04:53
And of course deep reinforcement learning successes in the playing of games,

00:04:52 --> 00:04:56
from board games to StarCraft and Dota.

00:04:58 --> 00:05:01
Let's take a step back.

00:05:00 --> 00:05:05
Deep learning is more than a set of tools

00:05:04 --> 00:05:07
to solve practical problems.

00:05:08 --> 00:05:11
Pamela McCorduck said in 79

00:05:10 --> 00:05:15
"AI began with the ancient wish to forge the gods."

00:05:14 --> 00:05:20
Throughout our history, throughout our civilization, human civilization

00:05:19 --> 00:05:23
we've dreamed about creating echoes of

00:05:22 --> 00:05:27
whatever is in this mind of ours in the machine.

00:05:26 --> 00:05:34
And creating living organisms from the popular culture in the 1800s

00:05:33 --> 00:05:38
with Frankenstein to Ex Machina this vision is dream

00:05:37 --> 00:05:42
of understanding intelligence and creating intelligence has captivated all of us.

00:05:41 --> 00:05:45
And deep learning is at the core of that.

00:05:45 --> 00:05:49
Because there's aspects of, the learning aspects

00:05:49 --> 00:05:53
that captivate our imagination about what is possible.

00:05:52 --> 00:05:56
Given data and methodology what learning

00:05:55 --> 00:06:01
to learn and beyond how far that can take us.

00:06:03 --> 00:06:06
And here visualized is just 3% of the neurons

00:06:06 --> 00:06:11
and one millionth of the synapses in our own brain.

00:06:10 --> 00:06:13
This incredible structure that's in our mind

00:06:13 --> 00:06:16
and there's only echoes of it.

00:06:15 --> 00:06:20
Small shadows of it in our artificial neural networks that we're able to create.

00:06:19 --> 00:06:24
But nevertheless those echoes are inspiring to us.

00:06:25 --> 00:06:32
The history of neural networks on this pale blue dot of ours

00:06:31 --> 00:06:35
tarted quite a while ago

00:06:34 --> 00:06:38
with summers and winters,

00:06:37 --> 00:06:42
with excitements and periods of pessimism.

00:06:41 --> 00:06:45
Starting in the 40s with neural networks and

00:06:44 --> 00:06:48
the implementation of those neural networks is a perceptron in the 50s;

00:06:47 --> 00:06:52
with ideas of backpropagation,

00:06:51 --> 00:06:55
restricted Boltzmann machine, recurrent neural networks

00:06:54 --> 00:06:58
in the 70s and 80s; with convolutional neural networks

00:06:57 --> 00:07:02
and the MNIST data set with data sets beginning to percolate

00:07:01 --> 00:07:05
LSTM, bi-directional RNNs in the 90s;

00:07:05 --> 00:07:10
and the rebranding and the rebirth of neural networks

00:07:09 --> 00:07:12
under the flag of Deep Learning

00:07:11 --> 00:07:15
and Deep Belief Nets in 2006;

00:07:14 --> 00:07:18
the birth of ImageNet, the data set that on which

00:07:18 --> 00:07:24
the possibilities of a deep learning can bring to the world

00:07:23 --> 00:07:28
has been first illustrated in the recent years in 2009.

00:07:28 --> 00:07:33
And AlexNet the network that an ImageNet performed exactly that

00:07:32 --> 00:07:36
with a few ideas like dropout and improved

00:07:35 --> 00:07:38
neural networks over time every year by year

00:07:37 --> 00:07:40
improving the performance of neural networks.

00:07:39 --> 00:07:45
In 2014 the idea of GANs, the Yann LeCun called

00:07:44 --> 00:07:49
the most exciting idea of the last 20 years,

00:07:48 --> 00:07:53
the Generative Adversarial Networks, the ability to with very little supervision

00:07:52 --> 00:07:58
generate data, to generate ideas after forming representation of those.

00:07:57 --> 00:08:02
From the understanding from the high-level

00:08:01 --> 00:08:04
abstractions of what is extracted

00:08:03 --> 00:08:07
in the data be able to generate new samples.

00:08:06 --> 00:08:10
Create, the idea of being able to create

00:08:10 --> 00:08:12
as opposed to memorize

00:08:11 --> 00:08:14
is really exciting.

00:08:13 --> 00:08:18
And on the applied side in 2014 with DeepFace

00:08:17 --> 00:08:20
the ability to do face recognition.

00:08:20 --> 00:08:24
There's been a lot of breakthroughs on the computer vision front

00:08:23 --> 00:08:25
hat being one of them.

00:08:24 --> 00:08:32
The world was inspired, captivated in 2016

00:08:31 --> 00:08:34
with AlphaGo, and in 17 with AlphaZero

00:08:33 --> 00:08:38
beating with less and less and less effort

00:08:37 --> 00:08:41
he best players in the in the world at Go.

00:08:40 --> 00:08:45
The problem that for mostly the history of

00:08:44 --> 00:08:48
artificial intelligence thought to be unsolvable.

00:08:47 --> 00:08:53
And new ideas with capsule networks and in this year, the year 2018

00:08:53 --> 00:08:56
was the year of natural language processing.

00:08:55 --> 00:08:58
A lot of interesting breakthroughs

00:08:58 --> 00:09:03
of Google's Bert and others that we'll talk about

00:09:02 --> 00:09:08
breakthroughs on ability to understand language, understand speech

00:09:07 --> 00:09:13
and everything including generation that's built all around that.

00:09:14 --> 00:09:17
And there's a parallel history of tooling

00:09:16 --> 00:09:19
starting in the 60s with the perceptron

00:09:19 --> 00:09:21
and the wiring diagrams.

00:09:20 --> 00:09:27
They're ending with this year with PyTorch 1.0 and TensorFlow 2.0.

00:09:26 --> 00:09:33
These really solidified, exciting, powerful ecosystems of tools

00:09:32 --> 00:09:38
that enable you to do very, to do a lot with very little effort.

00:09:37 --> 00:09:41
The sky is the limit, thanks to the tooling.

00:09:44 --> 00:09:49
So let's then from the big picture taken to the smallest.

00:09:48 --> 00:09:52
Everything should be made as simple as possible.

00:09:54 --> 00:09:59
So let's start simple with a little piece of code

00:09:59 --> 00:10:04
before we jump into the details

00:10:03 --> 00:10:09
and a big run through everything that is possible in deep learning.

00:10:08 --> 00:10:13
At the very basic level with just a few lines of code

00:10:12 --> 00:10:14
really six here,

00:10:14 --> 00:10:17
six little pieces of code,

00:10:16 --> 00:10:19
you can train a neural network that understand

00:10:18 --> 00:10:21
what's going on in an image.

00:10:20 --> 00:10:24
The classic, that I will always love MNIST data set,

00:10:24 --> 00:10:27
the handwritten digits where the input

00:10:27 --> 00:10:29
o a neural network or machine learning system is

00:10:28 --> 00:10:31
a picture of a handwritten digit

00:10:30 --> 00:10:35
and the output is the number that's in that digit.

00:10:36 --> 00:10:42
It's as simple as in the 1st Step: import a library TensorFlow.

00:10:41 --> 00:10:46
2nd step: import the data set MNIST.

00:10:45 --> 00:10:51
3rd step, like Lego bricks, stack on top of each other

00:10:50 --> 00:10:55
the neural network layer by layer, with a hidden layer,

00:10:54 --> 00:10:57
an input layer and output layer.

00:10:58 --> 00:11:03
Step 4 train the model as simple as a single line: model fit.

00:11:03 --> 00:11:08
Evaluate the model in Step 5 on the testing data set.

00:11:07 --> 00:11:11
And that's it. In Step 6 you're ready to deploy.

00:11:10 --> 00:11:14
You're ready to predict what's in the image.

00:11:14 --> 00:11:16
It's simple as that.

00:11:15 --> 00:11:20
And much of this code obviously much more complicated or

00:11:20 --> 00:11:24
much more elaborate and rich and interesting

00:11:23 --> 00:11:27
and complex we'll be making available on

00:11:27 --> 00:11:30
github on our repository that accompanies these courses.

00:11:30 --> 00:11:34
Today we'll release the first tutorial on driver scene segmentation.

00:11:33 --> 00:11:36
I encourage everybody to go through it.

00:11:37 --> 00:11:42
And then on the tooling side in one slide,

00:11:41 --> 00:11:45
before we dive into the neural networks and deep learning.

00:11:45 --> 00:11:49
The tooling side amongst many other things

00:11:48 --> 00:11:51
TensorFlow is a deep learning library,

00:11:50 --> 00:11:53
an open source library from Google.

00:11:53 --> 00:11:56
The most popular one today.

00:11:55 --> 00:11:59
The most active with a large ecosystem.

00:11:58 --> 00:12:03
It's not just something you import in Python

00:12:02 --> 00:12:05
and to solve some basic problems.

00:12:04 --> 00:12:07
There's an entire ecosystem of tooling.

00:12:07 --> 00:12:11
There's different levels of APIs.

00:12:10 --> 00:12:14
Much of what we'll do in this course will be

00:12:13 --> 00:12:16
the highest level API with Keras.

00:12:15 --> 00:12:20
But there's also the ability to run in the browser with TensorFlow.js,

00:12:19 --> 00:12:22
on the phone with TensorFlow Lite.

00:12:21 --> 00:12:28
In the cloud without any need to have a computer hardware,

00:12:27 --> 00:12:30
anything any of the libraries set up on your own machine, you can run

00:12:29 --> 00:12:33
all the code that we're providing in the cloud

00:12:32 --> 00:12:35
with Google Colab, Colaboratory.

00:12:35 --> 00:12:40
And the optimized ASICs hardware that Google is

00:12:39 --> 00:12:44
optimized for TensorFlow with their TPU-Tensor Processing Unit

00:12:44 --> 00:12:50
ability to visualize tensorboard models that provide TensorFlow Hub.

00:12:49 --> 00:12:53
And there's just, this is an entire ecosystem including

00:12:52 --> 00:12:55
most importantly I think documentation of blogs

00:12:55 --> 00:13:00
that make it extremely accessible to

00:12:59 --> 00:13:05
understand the fundamentals of the tooling

00:13:04 --> 00:13:06
that allow you to solve the problems

00:13:05 --> 00:13:08
from natural language processing to computer vision

00:13:08 --> 00:13:11
to GANs-Generative Adversarial Networks and

00:13:11 --> 00:13:15
everything in between with deeper enforcement learning and so on.

00:13:16 --> 00:13:22
So that's why we were excited to work both in theory in this course,

00:13:22 --> 00:13:27
in this series of lectures, and in the tooling,

00:13:26 --> 00:13:29
in the applied side of TensorFlow.

00:13:28 --> 00:13:33
It really makes it exceptionally these ideas exceptionally accessible.

00:13:32 --> 00:13:36
So deep learning at the core is the ability to form

00:13:35 --> 00:13:39
higher and higher level of abstractions

00:13:38 --> 00:13:42
of representations in data and raw patterns.

00:13:41 --> 00:13:45
Higher and higher levels of understanding of patterns.

00:13:46 --> 00:13:54
And those representations are extremely important

00:13:55 --> 00:14:02
and effective for being able to interpret data.

00:14:01 --> 00:14:06
Under certain representations data is trivial

00:14:05 --> 00:14:09
to understand, cat versus dog,

00:14:08 --> 00:14:12
blue dot versus green triangle.

00:14:11 --> 00:14:15
Under others it's much more difficult.

00:14:14 --> 00:14:20
In this task drawing a line under polar coordinates is trivial,

00:14:20 --> 00:14:23
under Cartesian coordinates is very difficult,

00:14:22 --> 00:14:26
well impossible to do accurately.

00:14:25 --> 00:14:28
And that's a trivial example of a representation.

00:14:27 --> 00:14:32
So our task with deep learning, with machine learning in general

00:14:32 --> 00:14:35
is forming representations that map the topology.

00:14:34 --> 00:14:40
This, the whatever the topology, the rich space of the problem

00:14:39 --> 00:14:42
that you're trying to deal with of the raw inputs,

00:14:41 --> 00:14:45
map it in such a way

00:14:44 --> 00:14:50
that the final representation is trivial to work with,

00:14:50 --> 00:14:55
trivial to classify, trivial to perform regression,

00:14:55 --> 00:14:59
trivial to generate new samples of that data.

00:14:58 --> 00:15:01
And that representation of higher and higher levels of representation

00:15:00 --> 00:15:07
is really the dream of artificial intelligence.

00:15:06 --> 00:15:08
That is what understanding is,

00:15:07 --> 00:15:12
making the complex simple, like

00:15:11 --> 00:15:15
Einstein back in a few slides ago said.

00:15:15 --> 00:15:21
And that with Juergen Schmidhuber and whoever else said it, I don't know,

00:15:21 --> 00:15:27
that's been the dream of all of science in general.

00:15:26 --> 00:15:31
Of the history of science is the history of compression progress,

00:15:30 --> 00:15:34
of forming simpler

00:15:35 --> 00:15:40
and simpler representations of ideas.

00:15:40 --> 00:15:46
The models of the universe of our solar system

00:15:45 --> 00:15:47
with the earth at the center of it

00:15:47 --> 00:15:52
is much more complex to perform to do physics on

00:15:51 --> 00:15:57
then a model where the Sun is at the center.

00:15:56 --> 00:16:00
Those higher and higher levels of simple representations

00:16:00 --> 00:16:02
enable us to do extremely powerful things.

00:16:02 --> 00:16:04
That has been the dream of science

00:16:03 --> 00:16:06
and the dream of artificial intelligence.

00:16:07 --> 00:16:10
And why deep learning?

00:16:10 --> 00:16:14
What is so special about deep learning in the grander

00:16:13 --> 00:16:16
world of machine learning and artificial intelligence?

00:16:17 --> 00:16:23
It's the ability to more and more remove the input of human experts,

00:16:23 --> 00:16:25
remove the human from the picture,

00:16:25 --> 00:16:29
the human costly inefficient effort of human beings in the picture.

00:16:29 --> 00:16:35
Deep learning automates much of the extraction from the raw

00:16:35 --> 00:16:37
gets us closer and closer to the raw data

00:16:36 --> 00:16:40
without the need of human involvement,

00:16:39 --> 00:16:41
human expert involvement.

00:16:40 --> 00:16:44
Ability to form representations from the raw data

00:16:43 --> 00:16:48
s opposed to having a human being need to extract features

00:16:47 --> 00:16:51
as was done in the 80s and 90s

00:16:50 --> 00:16:54
in the early aughts to extract features

00:16:53 --> 00:16:57
with which then the machine learning algorithms can work with.

00:16:56 --> 00:16:59
The automated extraction of features

00:16:58 --> 00:17:01
enables us to work with large and larger datasets

00:17:00 --> 00:17:03
removing the human completely

00:17:02 --> 00:17:07
except from the supervision labeling step at the very end.

00:17:07 --> 00:17:10
It doesn't require the human expert.

00:17:10 --> 00:17:13
But at the same time

00:17:13 --> 00:17:19
there is limits to our technologies.

00:17:18 --> 00:17:24
There's always a balance between excitement and disillusionment.

00:17:23 --> 00:17:26
The Gartner hype cycle,

00:17:27 --> 00:17:32
as much as we don't like to think about it,

00:17:31 --> 00:17:34
applies to almost every single technology.

00:17:34 --> 00:17:37
Of course the magnitude of the peaks and the troughs is different.

00:17:37 --> 00:17:40
But I would say we are at the peak

00:17:39 --> 00:17:43
of inflated expectation with deep learning.

00:17:43 --> 00:17:46
And that's something we have to think about as we talk about

00:17:45 --> 00:17:49
some of the ideas and exciting possibilities of the future.

00:17:50 --> 00:17:53
And with self driving cars that we'll talk about in

00:17:52 --> 00:17:55
future lectures in this course

00:17:54 --> 00:17:55
we're at the same.

00:17:54 --> 00:17:58
In fact we're little bit beyond the peak.

00:17:57 --> 00:18:00
And so it's up to us.

00:17:59 --> 00:18:05
This is MIT and engineers and the people working on this in the world

00:18:04 --> 00:18:08
to carry us through the trough,

00:18:07 --> 00:18:11
to carry us through the future as the ups and downs

00:18:10 --> 00:18:16
of the excitement progresses forward

00:18:16 --> 00:18:19
into the plateau of productivity.

00:18:18 --> 00:18:22
Why else not deep learning?

00:18:22 --> 00:18:26
If we look at real world applications

00:18:26 --> 00:18:32
especially with humanoid robotics, robotics manipulation

00:18:31 --> 00:18:35
and even yes autonomous vehicles,

00:18:34 --> 00:18:38
majority aspects of the autonomous vehicles

00:18:37 --> 00:18:41
do not involve to an extensive amount

00:18:40 --> 00:18:42
machine learning today.

00:18:43 --> 00:18:47
The problems are not formulated as data driven learning,

00:18:46 --> 00:18:50
instead they're model-based optimization methods

00:18:49 --> 00:18:52
that don't learn from data over time.

00:18:51 --> 00:18:55
And then from the speakers that these couple of weeks

00:18:55 --> 00:18:59
we'll get to see how much machine learning starting to creep in.

00:18:59 --> 00:19:02
But the examples shown here with the Boston

00:19:01 --> 00:19:05
with amazing humanoid robotics in Boston Dynamics

00:19:06 --> 00:19:10
to date almost no machine learning has been used

00:19:09 --> 00:19:12
except for trivial perception.

00:19:11 --> 00:19:14
The same with autonomous vehicles.

00:19:13 --> 00:19:16
Almost no machine learning and deep learning has been used

00:19:15 --> 00:19:19
except with perception.

00:19:18 --> 00:19:23
Some aspect of enhanced perception from the visual texture information.

00:19:23 --> 00:19:29
Plus what's becoming, what's starting to be used a little bit more

00:19:28 --> 00:19:33
is the use of recurrent neural networks

00:19:32 --> 00:19:36
to predict the future,

00:19:36 --> 00:19:42
to predict the intent of the different players in the scene

00:19:41 --> 00:19:43
in order to anticipate what the future is.

00:19:43 --> 00:19:45
But these are very early steps.

00:19:44 --> 00:19:50
Most of the success of EC today the 10 million miles away Moses achieved

00:19:49 --> 00:19:55
has been attributed mostly to non machine learning methods.

00:19:56 --> 00:20:00
Why else not deep learning?

00:19:59 --> 00:20:04
Here's a really clean example of unintended consequences

00:20:06 --> 00:20:09
of ethical issues.

00:20:08 --> 00:20:12
We have to really think about.

00:20:11 --> 00:20:15
When an algorithm learns from data

00:20:14 --> 00:20:17
based on an objective function, a loss function,

00:20:17 --> 00:20:24
the power, the consequences of an algorithm that

00:20:23 --> 00:20:26
optimizes that function is not always obvious.

00:20:25 --> 00:20:29
Here's an example of a human player playing the game

00:20:28 --> 00:20:31
of coast runners with a,

00:20:30 --> 00:20:35
it's a boat racing game where the task is to go

00:20:34 --> 00:20:38
around the racetrack and try to win the race.

00:20:39 --> 00:20:43
And the objective is to get as many points as possible.

00:20:42 --> 00:20:45
There are three ways to get points.

00:20:44 --> 00:20:47
The finishing time, how long it took you to finish.

00:20:47 --> 00:20:51
The finishing position, where you were in ranking.

00:20:51 --> 00:20:57
And picking up cone called turbos those little green things along the way.

00:20:56 --> 00:20:57
They give you points.

00:20:57 --> 00:21:00
Okay simple enough.

00:20:59 --> 00:21:03
So we designed an agent in this case an RL Agent

00:21:02 --> 00:21:06
hat optimizes for the rewards.

00:21:06 --> 00:21:11
And what we find on the right here,

00:21:10 --> 00:21:13
the optimal the agent discovers that the optimal

00:21:13 --> 00:21:17
actually has nothing to do with finishing the race or the ranking.

00:21:16 --> 00:21:19
They can get much more points

00:21:18 --> 00:21:22
by just focusing on the turbos and collecting those

00:21:22 --> 00:21:25
little green dots because they regenerate.

00:21:25 --> 00:21:29
So if you go in circles over and over and over slamming into the wall

00:21:28 --> 00:21:32
collecting the green turbos.

00:21:31 --> 00:21:36
And that's a very clear example of

00:21:35 --> 00:21:42
a well-reasoned, formulated objective function

00:21:41 --> 00:21:44
that has totally unexpected consequences.

00:21:43 --> 00:21:48
At least without sort of considering

00:21:47 --> 00:21:50
those consequences ahead of time.

00:21:49 --> 00:21:53
And so that shows the need for AI safety

00:21:52 --> 00:21:55
for a human in the loop of machine learning.

00:21:55 --> 00:21:58
That's why not deep learning exclusively.

00:22:00 --> 00:22:08
The challenge of deep learning algorithms, of deep learning applied

00:22:07 --> 00:22:10
is to ask the right question

00:22:10 --> 00:22:13
and understand what the answers mean.

00:22:12 --> 00:22:20
You have to take a step back and look at the difference,

00:22:19 --> 00:22:26
the distinction, the levels, degrees of what the algorithm is accomplishing.

00:22:25 --> 00:22:28
For example image classification

00:22:27 --> 00:22:30
is not necessarily scene understanding.

00:22:30 --> 00:22:34
In fact it's very far from scene understanding.

00:22:33 --> 00:22:37
Classification may be very far from understanding.

00:22:37 --> 00:22:42
And the datasets can vary drastically

00:22:41 --> 00:22:45
across the different benchmarks in the datasets used.

00:22:44 --> 00:22:48
The professionally done photographs versus

00:22:47 --> 00:22:52
ynthetically generated images versus real world data.

00:22:51 --> 00:22:57
And the real world data is where the big impact is.

00:22:56 --> 00:22:59
So often times the one doesn't transfer to the other.

00:22:59 --> 00:23:02
That's the challenge of deep learning.

00:23:01 --> 00:23:06
Solving all of these problems of different lighting variations,

00:23:05 --> 00:23:08
impose variation, inter class variation

00:23:07 --> 00:23:11
all the things that we take for granted human beings

00:23:10 --> 00:23:13
with our incredible perception system.

00:23:12 --> 00:23:14
All have to be solved in order to gain

00:23:14 --> 00:23:17
greater and greater understanding of a scene.

00:23:16 --> 00:23:21
And all the other things we have to close the gap

00:23:20 --> 00:23:23
on that we're not even close to yet.

00:23:22 --> 00:23:27
Here's an image from Andrej Karpathy blog from a few years ago

00:23:26 --> 00:23:31
f former President Obama's stepping on a scale.

00:23:30 --> 00:23:34
We can classify, we can do semantic segmentation

00:23:33 --> 00:23:35
of the scene, we can do object detection,

00:23:35 --> 00:23:38
we can do a little bit of 3d reconstruction from a

00:23:37 --> 00:23:39
video version of the scene.

00:23:39 --> 00:23:44
But we can't do well is all the things we take for granted.

00:23:43 --> 00:23:50
We can't tell the images in the mirrors versus in reality as different.

00:23:49 --> 00:23:53
We can't deal with the sparsity of information.

00:23:52 --> 00:23:56
Just a few pixels on President Obama's face

00:23:55 --> 00:23:58
we can still identify Mr.President.

00:23:58 --> 00:24:02
The 3D structure of the scene

00:24:01 --> 00:24:07
that there's a foot on top of a scale that there's human beings behind

00:24:07 --> 00:24:09
with from a single image.

00:24:08 --> 00:24:14
Things we can trivially do using all the common-sense semantic knowledge that we have

00:24:13 --> 00:24:17
cannot do the physics of the scene that there's gravity.

00:24:16 --> 00:24:20
And the biggest thing,

00:24:19 --> 00:24:22
the hardest thing is what some people's minds.

00:24:22 --> 00:24:28
And what some people's minds about what's on other people's minds and so on.

00:24:27 --> 00:24:32
Mental models of the world being able to infer what people are thinking about.

00:24:31 --> 00:24:36
Be able to infer there's been a lot of exciting work here at MIT about

00:24:35 --> 00:24:38
what people are looking at.

00:24:37 --> 00:24:41
But we're not even close to solving that problem either.

00:24:40 --> 00:24:43
But what they're thinking about we're not even

00:24:43 --> 00:24:47
we haven't even begun to really think about that problem.

00:24:46 --> 00:24:49
And we do trivially as human beings.

00:24:50 --> 00:24:53
And I think at the core of that

00:24:52 --> 00:24:56
I think I'm harboring on the visual perception problem.

00:24:55 --> 00:25:00
Because it's one we take really for granted as human beings

00:24:59 --> 00:25:01
especially when trying to solve real world problems,

00:25:01 --> 00:25:05
especially when trying to solve autonomous driving

00:25:04 --> 00:25:09
is we've have 540 million years of data for visual perception

00:25:08 --> 00:25:11
so we take it for granted.

00:25:10 --> 00:25:13
We don't realize how difficult it is.

00:25:12 --> 00:25:16
And we can't focus all our attention on this recent development

00:25:15 --> 00:25:19
of a hundred thousand years of abstract thought

00:25:18 --> 00:25:21
being able to play chess being able to reason.

00:25:20 --> 00:25:26
But the visual perception is nevertheless extremely difficult.

00:25:25 --> 00:25:31
At every single layer of what's required to perceive, interpret

00:25:31 --> 00:25:35
and understand the fundamentals of a scene.

00:25:34 --> 00:25:38
In a trivial way to show that is just all the ways you can mess

00:25:38 --> 00:25:40
with these image classification systems

00:25:40 --> 00:25:43
by adding a little bit of noise.

00:25:42 --> 00:25:47
The last few years there's been a lot of papers a lot of work

00:25:46 --> 00:25:49
to show that you can mess with these systems

00:25:49 --> 00:25:54
by adding noise. Here with 99% accuracy predicted dog

00:25:53 --> 00:25:55
add a little bit of distortion

00:25:54 --> 00:26:00
you immediately the system predicts with 99% accuracy that's an ostrich.

00:26:00 --> 00:26:04
And you can do that kind of manipulation with just a single pixel.

00:26:03 --> 00:26:10
So that's just a clean way to show the gap between image classification

00:26:09 --> 00:26:12
an artificial data cell like ImageNet

00:26:12 --> 00:26:15
and real world perception that has to be solved,

00:26:15 --> 00:26:19
especially for life critical situations like autonomous driving.

00:26:21 --> 00:26:29
I really like this Max Tegmark's visualization of this rising sea

00:26:28 --> 00:26:35
of the landscape of human competence from Hans Moravec.

00:26:35 --> 00:26:41
And this is the difference as we progress forward.

00:26:41 --> 00:26:44
And we discussed some of these machine learning methods

00:26:44 --> 00:26:50
is there is the human intelligence, the general human intelligence.

00:26:50 --> 00:26:53
Let's call Einstein here.

00:26:52 --> 00:26:57
That's able to generalize over all kinds of problems

00:26:56 --> 00:27:01
over all kinds of from the common sense to the incredibly complex.

00:27:01 --> 00:27:05
And then there is the way we've been doing

00:27:04 --> 00:27:08
especially data-driven machine learning,

00:27:07 --> 00:27:12
which is Savant, which is specialized intelligence.

00:27:11 --> 00:27:15
Extremely smart at a particular task

00:27:14 --> 00:27:18
but not being able to transfer except in the very narrow

00:27:17 --> 00:27:19
neighborhood on this landscape

00:27:19 --> 00:27:24
of different of art, cinematography, book writing at the peaks

00:27:23 --> 00:27:27
and chess, arithmetic and theorem proving and vision at the

00:27:27 --> 00:27:30
bottom in the lake.

00:27:29 --> 00:27:33
And there's this rising sea as we saw a problem after problem

00:27:33 --> 00:27:38
the question can the methodology in and the approach of

00:27:37 --> 00:27:40
deep learning of everything we're doing now

00:27:40 --> 00:27:44
keep the sea rising or do fundamental breakthroughs

00:27:43 --> 00:27:46
have to happen in order to generalize

00:27:45 --> 00:27:48
and solve these problems.

00:27:47 --> 00:27:52
And so from the specialized where the successes are

00:27:51 --> 00:27:58
the systems are essentially boiled down to given the dataset

00:27:58 --> 00:28:01
and given the ground truth for that data set,

00:28:00 --> 00:28:04
here's the apartment cost in the Boston area

00:28:03 --> 00:28:07
be able to input several parameters

00:28:06 --> 00:28:09
and based on those parameters predict the apartment cost.

00:28:09 --> 00:28:17
That's the basic premise approach behind the successful

00:28:16 --> 00:28:20
supervised deep learning systems today.

00:28:20 --> 00:28:23
If you have good enough data, that's good enough ground truth

00:28:23 --> 00:28:26
at can be formalized, we can solve it.

00:28:26 --> 00:28:33
Some of the recent promise that we will do an entire series of lectures

00:28:32 --> 00:28:35
in the third week on deep reinforcement learning

00:28:34 --> 00:28:41
show that from raw sensory information with very little annotation

00:28:40 --> 00:28:47
to self play whether systems learn without human supervision

00:28:46 --> 00:28:51
are able to perform extremely well in these constrained context.

00:28:50 --> 00:28:54
The question of a video game.

00:28:54 --> 00:28:58
Here pong to pixels being able to perceive the raw pixels

00:28:57 --> 00:29:03
of this pong game as raw input

00:29:02 --> 00:29:07
and learn the fundamental quote unquote physics of this game.

00:29:06 --> 00:29:11
Understand how it is this game behaves

00:29:10 --> 00:29:12
and how to be able to win this game.

00:29:12 --> 00:29:17
That's kind of a step toward general purpose artificial intelligence.

00:29:16 --> 00:29:19
But it is a very small step

00:29:18 --> 00:29:23
because it's in a simulated very trivial situation.

00:29:23 --> 00:29:26
That's the challenge, that's before us

00:29:25 --> 00:29:32
with less and less human supervision be able to solve huge real-world problems.

00:29:31 --> 00:29:38
From the top supervised learning where majority of the teaching

00:29:37 --> 00:29:40
is done by human beings

00:29:39 --> 00:29:42
throughout the annotation process, through labeling all the data,

00:29:41 --> 00:29:44
by showing different examples

00:29:45 --> 00:29:50
and further and further down to semi-supervised learning,

00:29:49 --> 00:29:51
reinforcement learning and supervised learning

00:29:51 --> 00:29:53
removing the teacher from the picture.

00:29:52 --> 00:29:58
And making that teacher extremely efficient when is needed.

00:29:58 --> 00:30:04
Of course data augmentation is one way we'll talk about.

00:30:03 --> 00:30:09
So taking a small number of examples and

00:30:08 --> 00:30:13
messing with that set of examples, augmenting that set of examples,

00:30:12 --> 00:30:17
through trivial and through complex methods of cropping,

00:30:16 --> 00:30:19
stretching, shifting and so on.

00:30:18 --> 00:30:22
Including to generative networks modifying those images

00:30:21 --> 00:30:24
to grow a small data set into a large one

00:30:24 --> 00:30:30
to minimize, to decrease further and further the input that's a human is

00:30:29 --> 00:30:32
the input of the human teacher.

00:30:32 --> 00:30:38
But still that's quite far away from the incredibly efficient

00:30:37 --> 00:30:42
both teaching and learning that humans do.

00:30:41 --> 00:30:51
This is a video and there's many of them online for the first time a human baby walking.

00:30:53 --> 00:31:01
We learn to do this you know, it's one shot learning.

00:31:00 --> 00:31:07
One day you're on four, all fours, and the next day your two hands up

00:31:06 --> 00:31:09
and then you figure out the rest.

00:31:08 --> 00:31:17
One shot. Well you can kind of ish, you can kind of play around with it.

00:31:16 --> 00:31:19
But the point is you extremely efficient.

00:31:19 --> 00:31:24
With only a few examples we are able to learn the fundamental aspect of

00:31:23 --> 00:31:25
how to solve a particular problem.

00:31:26 --> 00:31:31
Machines in most cases need thousands, millions

00:31:30 --> 00:31:36
and sometimes more examples depending on the life critical nature of the application.

00:31:37 --> 00:31:51
The data flow of supervised learning systems is there's input data,

00:31:50 --> 00:31:54
there's a learning system and there is output.

00:31:53 --> 00:31:58
Now in the training stage for the output we have the ground truth.

00:31:58 --> 00:32:03
And so we use that ground truth to teach the system.

00:32:02 --> 00:32:07
In the testing stage when it goes out into the wild there's new input data over

00:32:06 --> 00:32:09
which we have to generalize with the learning system,

00:32:08 --> 00:32:10
we have to make our best guess.

00:32:10 --> 00:32:17
In the training stage that the processes with neural networks is, given

00:32:16 --> 00:32:20
the input data for which we have the ground truth, pass it through the model,

00:32:19 --> 00:32:23
get the prediction. And given that we have the ground truth

00:32:23 --> 00:32:25
we can compare the prediction to the ground truth,

00:32:25 --> 00:32:28
look at the error. And based on that error adjust the weights.

00:32:28 --> 00:32:33
The types of predictions we can make is regression and classification.

00:32:32 --> 00:32:38
Regression is continuous and classification is categorical.

00:32:37 --> 00:32:44
Here if we look at whether the regression problem says

00:32:43 --> 00:32:46
what is the temperature going to be tomorrow.

00:32:46 --> 00:32:48
And the classification formulation of that problem

00:32:48 --> 00:32:50
says is it going to be hot or cold

00:32:50 --> 00:32:54
or some threshold definition of what hot or cold is.

00:32:53 --> 00:32:56
That's regression and classification.

00:32:55 --> 00:32:59
And the classification front it can be multi class

00:32:58 --> 00:33:03
which is the the standard formulation. We are tasked with saying,

00:33:02 --> 00:33:09
what is, there's only a particular entity can be only be one thing,

00:33:08 --> 00:33:10
and then there's multi-label or a particular entity can be multiple things.

00:33:09 --> 00:33:19
And overall the input to the system can be not just a single

00:33:18 --> 00:33:19
sample of the particular dataset

00:33:21 --> 00:33:24
and the output doesn't have to be a particular

00:33:23 --> 00:33:27
sample of the ground truth dataset.

00:33:26 --> 00:33:30
They can be a sequence, sequence to sequence,

00:33:29 --> 00:33:33
a single sample to a sequence, a sequence to the sample

00:33:33 --> 00:33:36
and so on. From video captioning

00:33:35 --> 00:33:40
or it's video captioning to translation to

00:33:40 --> 00:33:44
natural language generation to of course the one-to-one

00:33:43 --> 00:33:46
computing to general computer vision.

00:33:45 --> 00:33:50
Okay that's the bigger picture. Let's step back from the big to the small

00:33:49 --> 00:33:56
to a single neuron inspired by our own brain,

00:33:55 --> 00:33:58
the biological neural networks in our brain,

00:33:58 --> 00:34:03
in the computational block that is behind a lot of the intelligence in our mind.

00:34:06 --> 00:34:09
The artificial neuron has inputs with weights on them

00:34:08 --> 00:34:12
plus a bias and activation function

00:34:11 --> 00:34:14
and an output.

00:34:14 --> 00:34:17
It's inspired by this thing

00:34:16 --> 00:34:21
as I showed it before. Here visualizes the Thalamocortial system

00:34:20 --> 00:34:22
with three million neurons

00:34:21 --> 00:34:24
and 476 million synapses.

00:34:23 --> 00:34:29
The full brain has a hundred billion billion neurons

00:34:29 --> 00:34:35
and a thousand trillion synapses.

00:34:34 --> 00:34:37
ResNet and some of the other state-of-the-art networks

00:34:36 --> 00:34:41
have tens hundreds of millions

00:34:40 --> 00:34:44
of edges of synapses.

00:34:45 --> 00:34:52
The human brain has ten million times more synapses

00:34:51 --> 00:34:54
than artificial neural neural networks

00:34:53 --> 00:35:01
and there's other differences. The topology is asynchronous

00:35:00 --> 00:35:04
and not constructed in layers.

00:35:03 --> 00:35:08
The learning algorithm for artificial neural networks is backpropagation

00:35:07 --> 00:35:13
for our biological networks we don't know.

00:35:12 --> 00:35:15
That's one of the mysteries of the human brain.

00:35:15 --> 00:35:18
There's ideas but we really don't know.

00:35:17 --> 00:35:21
A power consumption human brains are much more efficient

00:35:20 --> 00:35:24
han you know networks that's one of the problems that we're trying to solve

00:35:23 --> 00:35:28
and ASICs are starting to begin to solve some of these problems.

00:35:27 --> 00:35:32
And the stages of learning in the biological neural networks

00:35:32 --> 00:35:34
you really never stop learning.

00:35:33 --> 00:35:36
You're always learning, always changing

00:35:35 --> 00:35:37
both on the hardware and a software.

00:35:38 --> 00:35:43
In artificial neural networks often times there's a training stage,

00:35:42 --> 00:35:45
there's a distinct training stage

00:35:44 --> 00:35:48
and there's a distinct testing stage when you release the thing in the wild.

00:35:47 --> 00:35:50
Online learning is an exceptionally difficult thing

00:35:49 --> 00:35:54
that we're still in the very early stages of.

00:35:55 --> 00:36:00
This neuron takes a few inputs,

00:35:59 --> 00:36:03
the fundamental computational block behind neural networks,

00:36:02 --> 00:36:07
takes a few inputs, applies weights which are the parameters that are learned,

00:36:07 --> 00:36:13
sums them up, puts it into a nonlinear activation function after adding the bias,

00:36:12 --> 00:36:18
also learned parameter and gives an output.

00:36:17 --> 00:36:21
And the task of this neuron is to get excited

00:36:20 --> 00:36:24
based on certain aspects of the layers, features

00:36:23 --> 00:36:26
inputs that follow before.

00:36:25 --> 00:36:32
And in that ability to discriminate get excited by certain things

00:36:31 --> 00:36:35
and get not excited about other things hold a little piece of information

00:36:35 --> 00:36:38
of whatever level of abstraction it is.

00:36:37 --> 00:36:40
So when you combine many of them together

00:36:40 --> 00:36:44
you have knowledge.

00:36:43 --> 00:36:47
Different levels of abstractions form a knowledge base

00:36:47 --> 00:36:53
that's able to represent, understand or even act on a particular set of raw inputs.

00:36:53 --> 00:36:58
And you stack these neurons together in layers

00:36:57 --> 00:37:02
both in width and depth increasing further on.

00:37:02 --> 00:37:05
And there's a lot of different architectural variants.

00:37:05 --> 00:37:11
But they begin at this basic fact that with just a single hidden layer of a neural network.

00:37:11 --> 00:37:13
The possibilities are endless.

00:37:13 --> 00:37:17
You can approximate an any arbitrary function.

00:37:17 --> 00:37:22
A neural network with a single hidden layer can approximate any function.

00:37:21 --> 00:37:25
That means any other neural network with multiple layers and so on

00:37:24 --> 00:37:30
is just interesting optimizations

00:37:29 --> 00:37:33
of how we can discover those functions.

00:37:33 --> 00:37:36
The possibilities are endless.

00:37:36 --> 00:37:42
And the other aspect here is the mathematical underpinnings

00:37:42 --> 00:37:48
of neural networks with the weights and the differentiable activation functions

00:37:47 --> 00:37:53
are such that in a few steps from the inputs to the outputs

00:37:53 --> 00:37:57
are deeply parallelizable.

00:37:57 --> 00:38:01
And that's why the other aspect on the compute

00:38:00 --> 00:38:03
the parallelizability of neural networks

00:38:03 --> 00:38:06
is what enables some of the exciting

00:38:05 --> 00:38:11
advancements on the graphical processing unit the GPUs

00:38:11 --> 00:38:14
and with ASICs TPUs.

00:38:13 --> 00:38:18
The ability to run across, across machines,

00:38:17 --> 00:38:25
across GPU units in the very large distributed scale

00:38:24 --> 00:38:28
to be able to train and perform inference on neural networks.

00:38:27 --> 00:38:32
Activation functions.

00:38:31 --> 00:38:35
These activation functions put together

00:38:34 --> 00:38:39
are tasked with optimizing a loss function.

00:38:38 --> 00:38:47
For regression that loss function is mean squared error usually, there's a lot of variance.

00:38:46 --> 00:38:49
And for classifications cross entropy loss.

00:38:49 --> 00:38:52
In the cross entropy loss the ground truth is 0,1.

00:38:51 --> 00:38:57
In the mean squared error it's a real number.

00:39:00 --> 00:39:05
And so with the loss function and the weights and the bias and the activation functions

00:39:04 --> 00:39:09
propagating forward to the network from the input to the output.

00:39:08 --> 00:39:14
Using the loss function we use the algorithm of backpropagation,

00:39:13 --> 00:39:17
which I did an entire lecture last time,

00:39:17 --> 00:39:21
to adjust the weights.

00:39:21 --> 00:39:24
To have the air flow backwards to the network

00:39:23 --> 00:39:27
and adjust the weights such that

00:39:26 --> 00:39:31
once again the weights that were responsible for

00:39:31 --> 00:39:35
producing the correct output

00:39:35 --> 00:39:40
are increased in the weights that were responsible for

00:39:39 --> 00:39:44
producing the incorrect output are decreased

00:39:44 --> 00:39:48
The forward pass gives you the error.

00:39:48 --> 00:39:52
The backward pass computes the gradients and based on the gradients

00:39:51 --> 00:39:56
the optimization algorithm combine a learning rate adjust the weights.

00:39:55 --> 00:40:00
The learning rate is how fast the network learns.

00:40:00 --> 00:40:05
And all of this is possible on the numerical computation

00:40:04 --> 00:40:07
side with automatic differentiation.

00:40:08 --> 00:40:11
The optimization problem given those gradients

00:40:10 --> 00:40:13
that are computed and enough

00:40:12 --> 00:40:19
backward flow to the network of the gradients is Stochastic Gradient Descent.

00:40:18 --> 00:40:21
There's a lot of variants of this optimization algorithms

00:40:20 --> 00:40:23
that solve various problems

00:40:22 --> 00:40:27
from Dying ReLUs to Vanishing Gradients.

00:40:26 --> 00:40:32
There's a lot of different parameters and momentum and so on.

00:40:32 --> 00:40:37
That's really just boil down to all the different problems that are

00:40:36 --> 00:57:34
It is part of a series of courses

00:40:36 --> 00:57:34
This is 6.S094 deep learning for self-driving cars.

00:40:36 --> 00:40:37
making in the cold.

00:40:36 --> 00:40:37
It's really good to see everybody here

00:40:36 --> 00:57:34
solved with non linear optimization.

00:40:40 --> 00:57:34
Mini-batch size.

00:40:40 --> 00:40:43
What is the right size of a batch?

00:40:43 --> 00:40:48
Or really it's called mini batch when it's not the entire dataset

00:40:47 --> 00:40:53
o you based on which to compute the gradients to adjust the learning.

00:40:52 --> 00:40:56
Do you do it over a very large amount?

00:40:55 --> 00:41:01
Or do you do it with stochastic gradient descent for every single sample of the data?

00:41:01 --> 00:41:05
If you listen to Yann LeCun and a lot of recent literature is

00:41:04 --> 00:41:09
mall minibatch sizes are good.

00:41:08 --> 00:41:12
He says "Training with large minibatches is bad for your health.

00:41:11 --> 00:41:14
More importantly, it's bad for your test error.

00:41:13 --> 00:41:19
Friends don't let friends use minibatches larger than 32"

00:41:18 --> 00:41:23
Larger batch size means more computational speed

00:41:22 --> 00:41:26
because you don't have to update the weights often.

00:41:25 --> 00:41:32
But smaller batch size empirically produces better generalization.

00:41:34 --> 00:41:39
The problem we're often on the broader scale of learning

00:41:38 --> 00:41:43
trying to solve is overfitting.

00:41:42 --> 00:41:46
And the way we solve it is the regularization.

00:41:45 --> 00:41:53
We want to train on a dataset without memorizing to an extent

00:41:52 --> 00:41:56
hat you only do well in that trained dataset.

00:41:55 --> 00:41:59
So you want it to be generalizable into future

00:41:59 --> 00:42:03
into into into the future things that you haven't seen yet.

00:42:03 --> 00:42:08
So obviously this is a problem for small datasets

00:42:07 --> 00:42:10
and also for sets of parameters that you choose.

00:42:10 --> 00:42:17
Here shown an example of a sine curve trying to fit

00:42:16 --> 00:42:20
particular data versus a 9-degree polynomial,

00:42:19 --> 00:42:22
trying to fit a particular set of data with the blue dots.

00:42:22 --> 00:42:26
The 9-degree polynomial is overfitting.

00:42:25 --> 00:42:29
It does very well for that particular set of samples

00:42:28 --> 00:42:32
but does not generalize well in the general case

00:42:32 --> 00:42:36
And the trade-off here is, as you train further and further

00:42:37 --> 00:42:43
at a certain point there's a deviation between the

00:42:42 --> 00:42:48
error being decreased to 0 on the training set

00:42:47 --> 00:42:51
and going to 1 on the test set.

00:42:50 --> 00:42:53
And that's the balance we have to strike.

00:42:52 --> 00:42:56
That's done with the validation set.

00:42:57 --> 00:43:02
So you take a piece of the training set for which you have the ground truth

00:43:02 --> 00:43:05
and you call it the validation set in set inside

00:43:04 --> 00:43:09
and you evaluate the performance of your system on that validation set.

00:43:09 --> 00:43:16
And after you notice that your training network is performing poorly

00:43:16 --> 00:43:19
on the validation set for prolonged period of time,

00:43:18 --> 00:43:22
that's when you stop. That's early stoppage.

00:43:21 --> 00:43:23
Basically it's getting better and better and better

00:43:22 --> 00:43:25
and then there's some period of time,

00:43:24 --> 00:43:26
there's always noise of course,

00:43:25 --> 00:43:30
and after some period of time is definitely getting worse.

00:43:29 --> 00:43:31
That's we need to stop there.

00:43:31 --> 00:43:36
So that provides an automated way to discovering when need to stop.

00:43:35 --> 00:43:39
And there's a lot of other regularization methodologies.

00:43:39 --> 00:43:40
Of course as I mentioned

00:43:39 --> 00:43:44
ropout is very interesting approach for.

00:43:43 --> 00:43:50
And it's variance of simply with a certain kind of probability

00:43:49 --> 00:43:53
randomly remove nodes in the network,

00:43:53 --> 00:43:56
both the incoming and outgoing edges,

00:43:55 --> 00:43:59
randomly throughout the training process.

00:43:59 --> 00:44:02
And there's normalization.

00:44:04 --> 00:44:11
Normalization is obviously always applied at the input.

00:44:11 --> 00:44:14
So whenever you have dataset

00:44:13 --> 00:44:17
as different lighting conditions different variations

00:44:17 --> 00:44:19
they get different sources and so on,

00:44:18 --> 00:44:22
you have to all kind of put on the same level ground.

00:44:22 --> 00:44:25
So that we're learning the fundamental aspects of the input data

00:44:25 --> 00:44:31
s opposed to the some less relevant semantic information

00:44:30 --> 00:44:32
like lighting variation and so on.

00:44:31 --> 00:44:35
So we usually always normalize.

00:44:35 --> 00:44:39
For example if it's a computer vision with pixels from 0 to 255,

00:44:39 --> 00:44:42
you always normalize to 0 to 1 or -1 to 1

00:44:42 --> 00:44:46
or normalize based on the mean and the standard deviation.

00:44:46 --> 00:44:50
That's something you should almost always do.

00:44:50 --> 00:44:57
The thing that enabled a lot of breakthrough performances

00:44:56 --> 00:44:59
in the past few years is batch normalization.

00:44:59 --> 00:45:03
It's performing its kind of same normalization later on in the network,

00:45:02 --> 00:45:08
looking at the inputs to the hidden layers.

00:45:07 --> 00:45:12
And normalizing based on the batch of data which on

00:45:11 --> 00:45:15
which yo're training normalized based on mean and the standard deviation.

00:45:15 --> 00:45:19
As batch normalization with batch renormalization

00:45:18 --> 00:45:22
fixes a few of the challenges

00:45:21 --> 00:45:29
which is given that you're normalizing during the training

00:45:28 --> 00:45:32
on the minibatches in the training data set,

00:45:31 --> 00:45:35
that doesn't directly map to the inference station the testing.

00:45:35 --> 00:45:39
And so it allows, by keeping a running average,

00:45:38 --> 00:45:44
it, across both training and testing,

00:45:43 --> 00:45:48
you're able to asymptotically approach a global normalization.

00:45:47 --> 00:45:50
So this idea across all the weights

00:45:49 --> 00:45:54
not just the inputs across all the weights you normalize

00:45:53 --> 00:45:59
the world in the all the levels of abstractions you forming.

00:45:58 --> 00:46:02
And batch renorm solves a lot of these problems doing inference.

00:46:01 --> 00:46:05
And there's a lot of other ideas from layer to weight to

00:46:04 --> 00:46:07
instance normalization to group normalization.

00:46:07 --> 00:46:12
And you can play with a lot of these ideas in the TensorFlow playground.

00:46:11 --> 00:46:15
On playground.tensorflow.org that I highly recommend.

00:46:14 --> 00:46:19
So now let's run through a bunch of different ideas

00:46:18 --> 00:46:22
ome of which we'll cover in future lectures.

00:46:22 --> 00:46:26
And what is all of this in this world of deep learning

00:46:25 --> 00:46:28
from computer vision to deep reinforcement learning

00:46:27 --> 00:46:31
to the different small level techniques

00:46:30 --> 00:46:34
to the large natural language processing?

00:46:33 --> 00:46:35
So convolutional neural networks,

00:46:34 --> 00:46:38
the thing that enables image classification.

00:46:37 --> 00:46:44
So these convolution of filters slide over the image and

00:46:43 --> 00:46:44
able to take advantage of the the spatial invariance

00:46:43 --> 00:46:47
of visual information that a cat in the top-left corner is

00:46:46 --> 00:46:51
the same as features associated with cats in the top right corner and so on.

00:46:51 --> 00:46:56
Images are just a set of numbers and our task is to take that image

00:46:55 --> 00:46:58
and produce a classification

00:46:57 --> 00:47:05
and use the spatial in the spatial variance of visual information to make that

00:47:05 --> 00:47:09
o slide a convolution filter across the image.

00:47:08 --> 00:47:12
And learn that filter as opposed to

00:47:11 --> 00:47:17
assigning equal value to features that are present in various

00:47:16 --> 00:47:19
at various regions of the image.

00:47:18 --> 00:47:24
And stacked on top feature these convolution filters can form

00:47:23 --> 00:47:28
high-level abstractions of visual information and images

00:47:28 --> 00:47:33
with AlexNet, as I've mentioned, and the ImageNet data set and challenge

00:47:33 --> 00:47:37
captivating the world of what is possible with neural networks

00:47:36 --> 00:47:39
have been further and further improved

00:47:38 --> 00:47:45
superseding human performance with of special note

00:47:44 --> 00:47:47
GoogLeNet with the inception module.

00:47:47 --> 00:47:51
There's different ideas that came along ResNet with the residual blocks.

00:47:53 --> 00:47:56
And SENet most recently.

00:47:56 --> 00:48:02
So the object detection problem is a step the next step

00:48:01 --> 00:48:03
in the visual recognition.

00:48:02 --> 00:48:06
So the image classification is just taking the entire image

00:48:05 --> 00:48:07
saying what's in the image.

00:48:06 --> 00:48:13
Object detection localization is saying find all the objects of interest

00:48:12 --> 00:48:15
in the scene and classify them.

00:48:14 --> 00:48:19
The region based methods like shown here Faster R-CNN

00:48:18 --> 00:48:21
takes the image,

00:48:20 --> 00:48:22
uses convolution neural network to

00:48:21 --> 00:48:24
extract features in that image

00:48:24 --> 00:48:26
and generate region proposals.

00:48:25 --> 00:48:28
Here's a bunch of candidates that you should look at.

00:48:27 --> 00:48:31
And within those candidates, it classifies what they are

00:48:31 --> 00:48:39
and generates a four parameters the bounding box

00:48:38 --> 00:48:39
that thing that captures that thing.

00:48:38 --> 00:48:44
So object detection localization ultimately boils down to a bounding box,

00:48:44 --> 00:48:47
a rectangle with a class.

00:48:46 --> 00:48:50
That's the most likely class that's in that bounding box.

00:48:49 --> 00:48:54
And you can really summarize region based methods

00:48:53 --> 00:48:57
as you generate the region proposal

00:48:56 --> 00:49:00
here little pseudocode and do a for loop over the

00:48:59 --> 00:49:02
region proposals

00:49:02 --> 00:49:06
and perform detection on that for loop.

00:49:06 --> 00:49:10
The Single-Shot methods remove the for loop.

00:49:10 --> 00:49:13
There's a single pass through,

00:49:12 --> 00:49:17
you had a bunch of, take a for example here shown SSD.

00:49:17 --> 00:49:21
Take a pretrained neural network

00:49:20 --> 00:49:23
that's been trained to do image classification,

00:49:22 --> 00:49:25
stack a bunch of convolutional layers on top,

00:49:24 --> 00:49:28
from each layer extract features

00:49:27 --> 00:49:30
that are then able to generate in a single pass

00:49:29 --> 00:49:34
classes boundary boxes,

00:49:33 --> 00:49:37
boundary box predictions and the class associate of this boundary box.

00:49:36 --> 00:49:43
The trade off here, this is where the popular yellow v123come from

00:49:43 --> 00:49:49
the trade-off here oftentimes is in performance and accuracy.

00:49:49 --> 00:49:55
So single-shot methods are often less performant

00:49:54 --> 00:49:57
especially on in terms of accuracy

00:49:57 --> 00:49:59
on objects that really far away or

00:49:58 --> 00:50:02
ather objects that are small in the image or really large.

00:50:03 --> 00:50:08
Then the next step up in visual perception, visual understanding

00:50:07 --> 00:50:11
is semantic segmentation.

00:50:10 --> 00:50:16
That's where the tutorial that we presented here on github is covering.

00:50:15 --> 00:50:20
Semantic segmentation is the task of now as opposed to a boundary box

00:50:19 --> 00:50:23
or the classify the entire image or detecting the object is a boundary box

00:50:22 --> 00:50:26
is assigning at a pixel level

00:50:25 --> 00:50:29
the boundaries of what the object is.

00:50:28 --> 00:50:34
Every single, in full scene classic full scene segmentation classifying,

00:50:33 --> 00:50:38
what every single pixel which class that pixel belongs to.

00:50:37 --> 00:50:40
And the fundamental aspect there's

00:50:39 --> 00:50:44
we'll cover a little bit or a lot more on Wednesday

00:50:44 --> 00:50:51
is taking a image classification network,

00:50:50 --> 00:50:52
chopping it off at some point.

00:50:51 --> 00:50:56
And then having which is performing the encoding step

00:50:55 --> 00:50:59
of compressing a representation of the scene.

00:50:58 --> 00:51:02
And taking that a representation with a decoder

00:51:01 --> 00:51:07
upsampling in a dense way.

00:51:06 --> 00:51:11
So taking that representation upsampling

00:51:10 --> 00:51:12
the pixel level classification.

00:51:12 --> 00:51:15
So that upsampling has a lot of tricks that we'll talk through.

00:51:15 --> 00:51:17
They are interesting but ultimately boils down to

00:51:17 --> 00:51:20
the encoding step of forming a representation

00:51:19 --> 00:51:21
what's going on on the scene

00:51:20 --> 00:51:24
and then decoding step that upsamples

00:51:24 --> 00:51:28
the pixel level annotation, classification of all the individual pixels.

00:51:28 --> 00:51:32
And as I mentioned here the underlying idea applied

00:51:31 --> 00:51:33
most extensively most successfully

00:51:33 --> 00:51:38
in computer vision is transfer learning.

00:51:39 --> 00:51:47
Most commonly applied way of transfer learning is taking a pre-trained your network

00:51:47 --> 00:51:52
like ResNet and chopping it off at some point.

00:51:51 --> 00:51:55
It's chopping off the fully connected layers,

00:51:54 --> 00:52:00
some aspects some parts of the layers and then taking a data set,

00:52:00 --> 00:52:05
a new data set and retraining that network.

00:52:04 --> 00:52:07
So what is this useful for?

00:52:06 --> 00:52:09
For every single application computer vision in industry.

00:52:09 --> 00:52:13
When you have a specific application

00:52:12 --> 00:52:16
like you want to build a pedestrian detector.

00:52:16 --> 00:52:20
If you want to build a pedestrian detector and you have a pedestrian dataset,

00:52:20 --> 00:52:28
it's useful to take ResNet trained on ImageNet or COCO

00:52:27 --> 00:52:30
And taking that network, chopping off some of the layers

00:52:29 --> 00:52:30
trained in the general case of vision perception.

00:52:29 --> 00:52:33
and then retrain it on your specialized pedestrian dataset.

00:52:33 --> 00:52:38
And depending on how large the dataset is

00:52:37 --> 00:52:44
the sum of the previous layers that from the pre-training network should be fixed,

00:52:44 --> 00:52:48
frozen. And sometimes not depending on how large the data is.

00:52:48 --> 00:52:52
And this is extremely effective in computer vision

00:52:51 --> 00:52:55
but also in audio speech and NLP.

00:52:57 --> 00:53:02
And so as I mentioned with the pre-trained networks

00:53:03 --> 00:53:08
they are ultimately forming representations of the database

00:53:07 --> 00:53:10
on which classifications the regression is made,

00:53:09 --> 00:53:13
prediction is made.

00:53:12 --> 00:53:16
But a cleanest example of this is the auto encoder

00:53:15 --> 00:53:19
of forming representations in an unsupervised way.

00:53:19 --> 00:53:24
The input is an image and the output is that exactly same image.

00:53:23 --> 00:53:25
So why do we do that?

00:53:25 --> 00:53:31
Of you add a bottleneck in the network

00:53:30 --> 00:53:37
where there is where the network is narrower at the

00:53:36 --> 00:53:40
in the middle than it is on the inputs and the outputs.

00:53:39 --> 00:53:44
It's forced to compress the data down into meaningful representation.

00:53:43 --> 00:53:45
That's what the auto encoder does.

00:53:44 --> 00:53:49
You're training it to reproduce the output

00:53:48 --> 00:53:52
and reproduce it with a latent representation

00:53:51 --> 00:53:54
that is smaller than the original raw data.

00:53:53 --> 00:53:57
That's a really powerful way to compress the data.

00:53:56 --> 00:53:59
It's used for removing noise and so on.

00:53:58 --> 00:54:04
But it's also just a effective way to demonstrate a concept.

00:54:03 --> 00:54:06
It can also be used for embeddings.

00:54:05 --> 00:54:08
We have a huge amount of data and you want to

00:54:08 --> 00:54:16
form a compressed efficient representation of that data.

00:54:15 --> 00:54:20
Now in practice, this is completely unsupervised.

00:54:19 --> 00:54:27
In practice, if you want to form an efficient useful representation of the data,

00:54:28 --> 00:54:32
you want to train it in a supervised way.

00:54:31 --> 00:54:34
You want to train it on a discriminative task

00:54:34 --> 00:54:36
where you have labelled data.

00:54:36 --> 00:54:40
And the network is trained to identify cat versus dog.

00:54:39 --> 00:54:44
Network that's trained in the discriminative way on an

00:54:43 --> 00:54:47
notated supervised learning way

00:54:47 --> 00:54:50
is able to form better representation.

00:54:49 --> 00:54:52
But nevertheless the concept stands.

00:54:51 --> 00:54:55
And one way to visualize these concepts is the

00:54:54 --> 00:54:58
tool that I really love projector.tensorflow.org,

00:54:58 --> 00:55:01
is a way to visualize these different representations

00:55:00 --> 00:55:02
these different embeddings.

00:55:01 --> 00:55:06
You should definitely play with and you can insert your own data.

00:55:05 --> 00:55:09
Okay going further and further in this direction of unsupervised

00:55:09 --> 00:55:12
and forming representations is

00:55:11 --> 00:55:14
generative adversarial networks.

00:55:13 --> 00:55:17
From these representations being able to generate new data.

00:55:16 --> 00:55:26
And the fundamental methodology of GANs is to have two networks.

00:55:25 --> 00:55:27
One is the generator, one is the discriminator

00:55:27 --> 00:55:30
and they compete against each other

00:55:29 --> 00:55:32
in order to, for the generator

00:55:31 --> 00:55:37
to get better and better and better at generating realistic images.

00:55:37 --> 00:55:42
The generator's tasks from noise to generate images

00:55:41 --> 00:55:45
based on a certain representation that are realistic.

00:55:44 --> 00:55:51
And the discriminator is the critic that has to discriminate

00:55:50 --> 00:55:54
between real images and those generated by the generator.

00:55:53 --> 00:55:57
And both get better together.

00:55:56 --> 00:56:00
The generator gets better and better at generating real images

00:55:59 --> 00:56:02
to trick the discriminator

00:56:02 --> 00:56:05
and the discriminator gets better and better at

00:56:04 --> 00:56:09
elling the difference in real and fake

00:56:09 --> 00:56:14
until the generator is able to generate some incredible things.

00:56:14 --> 00:56:20
So shown here in by the work with NVIDIA, mean the ability to generate realistic faces

00:56:20 --> 00:56:26
as skyrocketed in the past 3 years.

00:56:25 --> 00:56:29
So these are samples of celebrities photos that have been able to generate.

00:56:29 --> 00:56:32
Those are all generated by GAN.

00:56:31 --> 00:56:38
There's ability to generate temporally consistent video over time

00:56:37 --> 00:56:41
with GANs. And then there's the ability shown

00:56:40 --> 00:56:43
at the bottom right and Nvidia I'm sure

00:56:42 --> 00:56:47
also we'll talk about the pixel level from semantic segmentation

00:56:47 --> 00:56:52
being. So from the semantic pixel segmentation on the right

00:56:52 --> 00:56:58
be able to generate completely the scene on the left.

00:56:57 --> 00:57:02
All the raw rich high-definition pixels on the left.

00:57:04 --> 00:57:08
The natural language processing world same,

00:57:07 --> 00:57:11
forming representations, forming embeddings

00:57:10 --> 00:57:19
with Word2Vec, ability to from words to form representation

00:57:18 --> 00:57:25
that are efficiently able to then be used to reason about the words.

00:57:24 --> 00:57:28
The whole idea of forming representation about the data

00:57:27 --> 00:57:30
is taking a huge,

00:57:29 --> 00:57:32
you know, vocabulary over a million words.

00:57:31 --> 00:57:34
You want to be able to map it into a space

00:57:38 --> 00:57:42
are in a Euclidean sense

00:57:41 --> 00:57:44
in Euclidean distance between words are

00:57:43 --> 00:57:47
semantically far apart from each other as well.

00:57:47 --> 00:57:51
So things that are similar are together in that space.

00:57:50 --> 00:57:55
And one way of doing that with skip grams for example

00:57:54 --> 00:57:57
is looking at a source text

00:57:56 --> 00:58:02
and turning into a large body of text, into a supervised learning problem

00:58:02 --> 00:58:06
by learning to map, predict from the words

00:58:05 --> 00:58:09
from a particular word to all its neighbors.

00:58:08 --> 00:58:13
So training network on the connections that are

00:58:12 --> 00:58:15
commonly seen in natural language.

00:58:15 --> 00:58:18
And based on those connections we're able to know

00:58:17 --> 00:58:20
hich words are related to each other.

00:58:19 --> 00:58:24
Now the main thing here is.

00:58:23 --> 00:58:27
Now I won't get into too many details but the

00:58:26 --> 00:58:30
main thing here with the input vector representing the words

00:58:29 --> 00:58:33
and the output vector representing the probability

00:58:33 --> 00:58:35
that those words are connected to each other.

00:58:35 --> 00:58:38
The main thing both are thrown away in the end

00:58:37 --> 00:58:41
the main thing is the middle, the hidden layer

00:58:40 --> 00:58:44
That representation gives you the embedding.

00:58:43 --> 00:58:48
That represent these words in such a way where in the Euclidean space

00:58:47 --> 00:58:50
the ones that are close together semantically.

00:58:50 --> 00:58:53
Are semantically together in the ones

00:58:52 --> 00:58:56
that are not are semantically far apart.

00:58:57 --> 00:59:03
And natural language and other sequence data,

00:59:03 --> 00:59:09
text, speech, audio, video relies on recurrent neural networks.

00:59:09 --> 00:59:12
Recurrent neural networks are able to learn

00:59:11 --> 00:59:18
temporal data, temporal dynamics in the data.

00:59:17 --> 00:59:21
Sequence data and are able to generate sequence data.

00:59:21 --> 00:59:27
The challenge is that they're not able to learn long-term context.

00:59:26 --> 00:59:31
Because when unrolling a neural network

00:59:30 --> 00:59:35
it's trained by unrolling and doing backpropagation

00:59:34 --> 00:59:38
without any tricks the backpropagation of the

00:59:37 --> 00:59:40
gradient fades away very quickly.

00:59:39 --> 00:59:43
So you're not able to memorize the context

00:59:42 --> 00:59:45
in a longer form of the sentences.

00:59:44 --> 00:59:47
Unless there's extensions here

00:59:46 --> 00:59:52
with LSTMs that are use long term dependency

00:59:51 --> 00:59:54
is captured by allowing

00:59:53 --> 00:59:58
the network to forget information,

00:59:57 --> 01:00:02
allow it to freely pass through information in time.

01:00:03 --> 01:00:06
So what to forget what to remember

01:00:05 --> 01:00:09
and every time decide what to output.

01:00:08 --> 01:00:12
And all of those aspects have gates that are all trainable

01:00:12 --> 01:00:16
with sigmoid and tanh functions.

01:00:16 --> 01:00:20
Bi-directional real recurrent neural networks

01:00:19 --> 01:00:24
from the 90s is an extension often used for providing

01:00:23 --> 01:00:26
context in both direction.

01:00:25 --> 01:00:31
So recurrent neural networks simply define is

01:00:30 --> 01:00:34
learning representations what happened in the past.

01:00:33 --> 01:00:36
Now in many cases you're able,

01:00:35 --> 01:00:38
it's not real-time operation in that

01:00:37 --> 01:00:40
you're able to also look into the future.

01:00:39 --> 01:00:42
You look into the data that falls out of the sequence.

01:00:42 --> 01:00:45
So benefits you do a forward pass to the network

01:00:44 --> 01:00:48
beyond the current and then back.

01:00:51 --> 01:00:57
The encoder-decoder architecture in recurrent neural networks

01:00:56 --> 01:01:00
used very much when the sequence on the input

01:00:59 --> 01:01:03
and the sequence and the output are not relied to be of the same length.

01:01:03 --> 01:01:10
The task is to first with the encoder network encode everything

01:01:09 --> 01:01:14
that's came, everything on the input sequence.

01:01:13 --> 01:01:16
So this is useful for machine translation for example.

01:01:15 --> 01:01:19
So encoding all the information the input sequence in English

01:01:18 --> 01:01:23
and then in the language you translating to

01:01:22 --> 01:01:25
given that representation,

01:01:24 --> 01:01:27
keep feeding it into the decoder

01:01:26 --> 01:01:30
ecurrent neural network to generate the translation.

01:01:29 --> 01:01:34
The input might be much smaller or much larger than the output.

01:01:33 --> 01:01:38
That's the encoder decoder architecture.

01:01:37 --> 01:01:41
And then there's improvements.

01:01:41 --> 01:01:47
Attention is the improvement on this encoder-decoder architecture

01:01:46 --> 01:01:51
that allows you to as opposed to taking the input sequence,

01:01:50 --> 01:01:54
forming a representation of it and that's it.

01:01:53 --> 01:01:56
It allows you to actually look back at different parts of the input.

01:01:57 --> 01:02:03
So not just relying in the on the single vector representation

01:02:02 --> 01:02:05
of all the entire input.

01:02:09 --> 01:02:13
And a lot of excitement

01:02:13 --> 01:02:18
has been around the idea as I mentioned

01:02:17 --> 01:02:21
some of the dream of artificial intelligence

01:02:20 --> 01:02:22
and machine learning in general

01:02:21 --> 01:02:25
has been to remove the human more and more and more from the picture.

01:02:24 --> 01:02:29
Being able to automate some of the difficult tasks.

01:02:28 --> 01:02:32
So AutoML from Google and just the general concept of

01:02:31 --> 01:02:34
neural architecture search, NasNet.

01:02:33 --> 01:02:41
The ability to automate the discovery of

01:02:40 --> 01:02:44
parameters of a neural network.

01:02:45 --> 01:02:50
And the ability to discover the actual architecture

01:02:49 --> 01:02:51
that produces the best result.

01:02:51 --> 01:02:55
So with neural architecture search you have basic

01:02:54 --> 01:02:59
modules similar to the ResNet modules,

01:02:59 --> 01:03:02
and with a recurrent neural network

01:03:01 --> 01:03:05
you keep assembling and network together.

01:03:05 --> 01:03:10
And assembling in such a way that it minimizes

01:03:09 --> 01:03:13
the loss of the overall classification performance.

01:03:12 --> 01:03:16
And it's shown that you can then construct

01:03:15 --> 01:03:19
a neural network that's much more efficient

01:03:18 --> 01:03:21
and much more accurate than state of the art

01:03:20 --> 01:03:25
on classification tasks like ImageNet here shown with a plot

01:03:25 --> 01:03:31
erved at the very least competitive with the state of the art and SCnet.

01:03:30 --> 01:03:33
It's super exciting that as opposed to

01:03:32 --> 01:03:36
like I said stacking lego pieces yourself,

01:03:35 --> 01:03:40
the final result is essentially you step back

01:03:39 --> 01:03:43
and you say here's I have a data set

01:03:42 --> 01:03:46
with the with the labels with the ground truth

01:03:46 --> 01:03:50
which is what Google the dream of Google AutoML is

01:03:50 --> 01:03:51
have the data set

01:03:51 --> 01:03:55
you tell me what kind of neural network

01:03:55 --> 01:03:56
will do best on this data set.

01:03:55 --> 01:03:58
And that's it. so all you bring is the data

01:03:57 --> 01:04:00
It constructs the network

01:03:59 --> 01:04:02
through this neural architecture search

01:04:01 --> 01:04:05
and it returns to you the model and that's it.

01:04:04 --> 01:04:10
It solves, it makes it possible to solve the exception

01:04:10 --> 01:04:15
you know, solve many of the real world problems

01:04:14 --> 01:04:17
that essentially boil down to I have a few classes

01:04:16 --> 01:04:19
I need to be very accurate on

01:04:18 --> 01:04:20
here's my data set.

01:04:20 --> 01:04:24
And then I convert the problem of a deep learning researcher

01:04:23 --> 01:04:27
to the problem of maybe what's traditionally

01:04:26 --> 01:04:30
what's more commonly called the sort of a data science

01:04:29 --> 01:04:33
ngineer where the task is

01:04:32 --> 01:04:36
as I said focuses on what is the right question

01:04:35 --> 01:04:38
and what is the right data to solve that question.

01:04:39 --> 01:04:44
And deep reinforcement learning taking further steps

01:04:43 --> 01:04:47
along the path of decreasing human input.

01:04:46 --> 01:04:51
Deep reinforcement learning is the task of an agent

01:04:50 --> 01:04:53
o act in the world based on

01:04:53 --> 01:04:57
the observations of the state and the rewards received in that state,

01:04:56 --> 01:05:00
knowing very little about the world

01:04:59 --> 01:05:03
and learning from the very sparse nature of the reward.

01:05:02 --> 01:05:07
Sometimes only when you in the gaming context

01:05:06 --> 01:05:08
when you win or lose.

01:05:07 --> 01:05:13
Or in the robotics contest when you successfully accomplish a task or not

01:05:12 --> 01:05:16
with a very sparse award are able to learn how to behave in that world.

01:05:16 --> 01:05:22
Here with with cats learning how the Bell maps to the food

01:05:21 --> 01:05:25
and a lot of the amazing work at open AI and deep mind

01:05:24 --> 01:05:29
about the robotics manipulation and navigation

01:05:28 --> 01:05:32
through self play in simulated environments.

01:05:32 --> 01:05:36
And of course the best of our own deep reinforcement learning

01:05:36 --> 01:05:38
competition with deep traffic

01:05:37 --> 01:05:41
that all of you can participate.

01:05:40 --> 01:05:47
And I encourage you to try to win that with no supervised knowledge.

01:05:47 --> 01:05:54
No human supervision through sparse rewards from the simulation

01:05:53 --> 01:05:59
or through self play constructs able to learn how to

01:05:58 --> 01:06:00
perate successfully in this world.

01:06:00 --> 01:06:04
And those are the steps we're taking towards

01:06:03 --> 01:06:07
general towards artificial general intelligence.

01:06:07 --> 01:06:13
This is the exciting from the breakthrough ideas

01:06:12 --> 01:06:16
that we'll talk about on Wednesday natural language processing

01:06:15 --> 01:06:18
to generative adversarial networks.

01:06:17 --> 01:06:22
They're able to generate arbitrary, data high resolution data,

01:06:21 --> 01:06:25
create data. Really from this understanding of the world

01:06:24 --> 01:06:28
to deep reinforcement learning being able to learn

01:06:27 --> 01:06:32
how to act in the world, very little input from human supervision

01:06:31 --> 01:06:34
is taking further and further steps

01:06:33 --> 01:06:36
and there's been a lot of exciting ideas

01:06:35 --> 01:06:39
going by different names. Sometimes misused,

01:06:38 --> 01:06:47
sometimes overused, sometimes misinterpreted of transfer learning,

01:06:47 --> 01:06:52
meta learning and the hyper parameter architecture search

01:06:51 --> 01:06:55
basically removing a human as much as possible

01:06:54 --> 01:06:56
from the menial tasks

01:06:55 --> 01:06:59
and involving a human only on the fundamental side

01:06:58 --> 01:07:02
as I mentioned with the racing boat on the ethical side.

01:07:01 --> 01:07:07
And the things that us humans at least pretend to be quite good at

01:07:07 --> 01:07:10
which is understanding the fundamental big questions,

01:07:09 --> 01:07:15
understanding the data that empowers us to solve real world problems,

01:07:14 --> 01:07:17
and understand the ethical balance

01:07:16 --> 01:07:19
that needs to be struck in order to solve those problems.

01:07:18 --> 01:07:26
Well on the bottom right I show that's our job here in this room

01:07:26 --> 01:07:30
our job for all the engineers in the world to solve these problems

01:07:30 --> 01:07:34
and progress forward through the current summer

01:07:33 --> 01:07:36
and through the winter, if it ever comes.

01:07:35 --> 01:07:38
So with that I'd like to thank you and

01:07:37 --> 01:07:41
you can get the videos, code and so on

01:07:40 --> 01:07:43
line deeplearning.mit.edu.

01:07:42 --> 01:07:46
Thank you very much guys.

<!-- YOUTUBE_TRANSCRIPT_END -->
