---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "bmjamLZ3v8A"
title: "MIT 6.S093: Introduction to Human-Centered Artificial Intelligence (AI)"
video_url: "https://www.youtube.com/watch?v=bmjamLZ3v8A"
thumbnail_url: "https://i.ytimg.com/vi/bmjamLZ3v8A/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=bmjamLZ3v8A"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-04-24T16:46:08.000Z"
upload_date: "2019-04-24"
duration_seconds: 4055
duration_human: "1:07:35"
view_count: 50545
like_count: 1143
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:11:33.449Z"
---

# MIT 6.S093: Introduction to Human-Centered Artificial Intelligence (AI)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=bmjamLZ3v8A
- video_id: bmjamLZ3v8A
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-04-24T16:46:08.000Z
- upload_date: 2019-04-24
- duration: 1:07:35
- view_count: 50545
- like_count: 1143
- has_subtitle: true
- language: en
- availability: public
- tags: human-centered ai, human-centered artificial intelligence, human-centered design, mit, lex, hai, hcai, deep learning, deep learning lex, deep learning mit, mit deep learning, self-driving cars, tesla, neural networks, artificial intelligence, mit lecture, mit course, introduction to deep learning, introduction to artificial intelligence, introduction to ai, intro to deep learning, intro to ai, mit introduction to deep learning, elon musk, machine learning, autonomous vehicle
- categories: Science & Technology

## Description

Introductory lecture on Human-Centered Artificial Intelligence (MIT 6.S093) I gave on February 1, 2019. For more lecture videos on deep learning, reinforcement learning (RL), artificial intelligence (AI & AGI), and podcast conversations, visit our website or follow TensorFlow code tutorials on our GitHub repo.

INFO:
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Slides: http://bit.ly/2IDMd0U 
Transcript: http://bit.ly/2IDMkcQ
Playlist: http://bit.ly/deep-learning-playlist

OUTLINE:
0:00 - Introduction to human-centered AI
5:17 - Deep Learning with human out of the loop
6:11 - Deep Learning with human in the loop
8:55 - Integrating the human into training process and real-world operation
11:53 - Five areas of research
15:38 - Machine teaching
19:27 - Reward engineering
22:35 - Question about representative government as a recommender system
24:27 - Human sensing
27:06 - Human-robot interaction experience
30:28 - AI safety and ethics
33:10 - Deep learning for understanding the human
34:06 - Face recognition
45:20 - Activity recognition
51:16 - Body pose estimation
57:24 - AI Safety
1:02:35 - Human-centered autonomy
1:04:33 - Symbiosis with learning-based AI systems
1:05:42 - Interdisciplinary research

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
- Welcome to Human-Centered Artificial Intelligence.

00:00:04 --> 00:00:09
The last couple of decades in the developments

00:00:08 --> 00:00:12
of deep learning have been exciting

00:00:11 --> 00:00:16
in the problems that we've been able to automate,

00:00:15 --> 00:00:19
in the problems that we've been able to crack

00:00:18 --> 00:00:22
with learning-based methods.

00:00:21 --> 00:00:24
One of the things underlying this lecture

00:00:23 --> 00:00:28
and the following lectures is the idea

00:00:27 --> 00:00:32
that with purely the learning-based approach

00:00:31 --> 00:00:36
that we have been using, there's certain aspects

00:00:35 --> 00:00:38
that are fundamental to our reality

00:00:37 --> 00:00:40
that we're going to hit a wall on,

00:00:39 --> 00:00:44
that we have to integrate, incorporate the human being

00:00:43 --> 00:00:46
deeply into the learning-based systems

00:00:47 --> 00:00:51
in order to make the systems learn well

00:00:50 --> 00:00:53
and operate in the real world.

00:00:53 --> 00:00:58
The underlying first prediction

00:00:57 --> 00:01:01
under the idea of human-centered AI in this century

00:01:00 --> 00:01:04
is that the learning-based approaches

00:01:03 --> 00:01:07
have been successful over the past two decades,

00:01:06 --> 00:01:09
like deep learning, machine learning approaches

00:01:08 --> 00:01:12
that learn from data, are going to continue

00:01:11 --> 00:01:17
to become better and dominate the real-world applications.

00:01:16 --> 00:01:22
So as opposed to fine-tuned optimization-based models

00:01:21 --> 00:01:24
that do not learn from data,

00:01:23 --> 00:01:27
more and more we're going to see learning-based methods

00:01:27 --> 00:01:30
dominate real-world applications.

00:01:29 --> 00:01:34
That's the underlying prediction that we're working with.

00:01:33 --> 00:01:36
Now, if that's the case,

00:01:35 --> 00:01:40
the corollary of that, if learning-based methods

00:01:39 --> 00:01:44
is the solution to many of these real-world problems

00:01:43 --> 00:01:47
is the way we get smarter AI systems

00:01:46 --> 00:01:51
is by improving the machine learning

00:01:50 --> 00:01:53
and the machine teaching.

00:01:52 --> 00:01:54
Machine learning is the thing

00:01:53 --> 00:01:57
that we've been talking about quite a bit,

00:01:56 --> 00:01:59
that's the deep learning, that's the algorithm,

00:01:58 --> 00:02:02
the optimization of neural network parameters

00:02:01 --> 00:02:04
where you learn from data.

00:02:03 --> 00:02:06
That's the current focus of the community,

00:02:05 --> 00:02:07
current focus in the research

00:02:06 --> 00:02:09
and the thing that's behind the success

00:02:08 --> 00:02:12
of much of the developments in deep learning.

00:02:11 --> 00:02:14
And then there's the machine teaching,

00:02:13 --> 00:02:16
that's the human-centered part.

00:02:17 --> 00:02:20
It's optimizing not the models,

00:02:19 --> 00:02:23
not the algorithms, but optimizing

00:02:23 --> 00:02:28
how you select the data based on which the algorithms learn.

00:02:27 --> 00:02:30
It's to make better teachers,

00:02:29 --> 00:02:34
just like when you yourself are learning as a student

00:02:33 --> 00:02:37
or as a child how to operate in this world,

00:02:36 --> 00:02:42
the world and the parents and the teachers around you

00:02:42 --> 00:02:46
are informing you with very sparse information

00:02:45 --> 00:02:48
but providing the kind of information

00:02:47 --> 00:02:50
that is most useful for your learning process.

00:02:49 --> 00:02:54
The selection of data based on which to learn,

00:02:53 --> 00:02:58
I believe, is the critical direction of research

00:02:57 --> 00:03:01
where we have to solve in order

00:03:00 --> 00:03:04
to create truly intelligent systems

00:03:03 --> 00:03:06
and ones that are able to work in the real world,

00:03:05 --> 00:03:11
and I'll explain why in ways that I'm referring to.

00:03:10 --> 00:03:13
The implications of learning-based systems,

00:03:12 --> 00:03:16
so when you have a learning system,

00:03:15 --> 00:03:18
a system that learns from data,

00:03:18 --> 00:03:22
neural networks, machine learning, learns from data,

00:03:22 --> 00:03:26
the fundamental reality of that

00:03:25 --> 00:03:30
is the model is trying to generalize

00:03:29 --> 00:03:33
across the entirety of the reality

00:03:32 --> 00:03:36
in which we'll be tasked with operating

00:03:35 --> 00:03:41
based on a very small subset of samples from that reality.

00:03:40 --> 00:03:44
And that generalization means that

00:03:44 --> 00:03:48
here's always going to be a degree of uncertainty,

00:03:47 --> 00:03:50
there's always going to be a degree

00:03:49 --> 00:03:51
of incomplete information,

00:03:50 --> 00:03:54
and so no matter how much we want to,

00:03:53 --> 00:03:58
these systems will not be provably safe,

00:03:57 --> 00:04:01
so we can't put anything concrete down

00:04:00 --> 00:04:06
to how guaranteed to be safe in some specific way

00:04:05 --> 00:04:08
unless it's extremely constrained,

00:04:07 --> 00:04:12
therefore we need human supervision of these systems.

00:04:11 --> 00:04:14
The systems will not provably fair

00:04:13 --> 00:04:16
from an ethics perspective,

00:04:15 --> 00:04:17
from a discrimination perspective,

00:04:16 --> 00:04:19
from all degree of fairness,

00:04:18 --> 00:04:23
therefore we need human supervision of these systems.

00:04:22 --> 00:04:27
And it will not be explainable.

00:04:26 --> 00:04:28
At any step of the pipeline

00:04:27 --> 00:04:30
in which they made the decisions,

00:04:29 --> 00:04:33
AI systems will not be perfectly explainable

00:04:32 --> 00:04:38
to the satisfaction of us as human supervisors.

00:04:38 --> 00:04:42
So there, again, human supervision

00:04:41 --> 00:04:44
constantly will be required.

00:04:44 --> 00:04:47
And the solution to this is a whole set

00:04:46 --> 00:04:49
of techniques, whole set of ideas

00:04:48 --> 00:04:52
that we're putting under the flag

00:04:51 --> 00:04:54
of human-centered artificial intelligence,

00:04:53 --> 00:04:57
human-centered AI, and the core ideas there

00:04:56 --> 00:05:00
is that we need to integrate the human being

00:04:59 --> 00:05:03
deeply into the annotation process

00:05:02 --> 00:05:07
and deeply into the human supervision

00:05:06 --> 00:05:10
of the real-world operation of the system.

00:05:09 --> 00:05:14
So both in the training phase and the testing phase,

00:05:13 --> 00:05:17
the execution, the operation of the system.

00:05:16 --> 00:05:19
So this is what deep learning looks like

00:05:18 --> 00:05:21
with the human out of the loop.

00:05:21 --> 00:05:26
The human contributes to a learning model

00:05:25 --> 00:05:28
by helping annotate some data,

00:05:27 --> 00:05:31
and that data is then used to train

00:05:30 --> 00:05:33
a lot of the hopefully generalized

00:05:32 --> 00:05:35
in the real world in that model

00:05:34 --> 00:05:38
makes decisions, and deep learning's really exciting

00:05:37 --> 00:05:41
because it's able to, in greater

00:05:40 --> 00:05:42
and greater degree of autonomy

00:05:41 --> 00:05:45
able to form high-level representations

00:05:44 --> 00:05:48
of the raw data in a way that it's actually able

00:05:47 --> 00:05:51
to do quite well on certain kinds of tasks

00:05:50 --> 00:05:53
that were before very difficult.

00:05:52 --> 00:05:56
But fundamentally the human is out of loop

00:05:55 --> 00:05:58
both of the training and the operation.

00:05:57 --> 00:06:01
First you build the data set, annotate the data set,

00:06:00 --> 00:06:03
and then the systems run away with it.

00:06:02 --> 00:06:06
They train on the data, and the real-world operation

00:06:05 --> 00:06:10
does not involve the human except as the recipient

00:06:09 --> 00:06:12
of the service the system provides.

00:06:11 --> 00:06:14
Now, the loop version of that,

00:06:13 --> 00:06:16
the human-centered version of that

00:06:15 --> 00:06:21
means that annotation and operation of the system

00:06:22 --> 00:06:28
is both aided by human beings in a deep way.

00:06:28 --> 00:06:31
What does that mean?

00:06:30 --> 00:06:34
So, we can look at a human expert, so individuals,

00:06:33 --> 00:06:38
and crowd intelligence, the wisdom of the crowd

00:06:37 --> 00:06:40
and the wisdom of the individual.

00:06:39 --> 00:06:45
At the training phase, the first part of that

00:06:44 --> 00:06:47
is the objective annotation.

00:06:46 --> 00:06:50
We need to significantly improve objective annotation,

00:06:49 --> 00:06:54
meaning annotation where the human intelligence

00:06:53 --> 00:06:57
is sufficient to be able to look at a sample

00:06:56 --> 00:06:58
and annotate it.

00:06:57 --> 00:06:59
This is what we think about is the ImageNet

00:06:58 --> 00:07:01
and all the basic computer vision tasks

00:07:00 --> 00:07:03
where a single human is enough to do

00:07:02 --> 00:07:06
a pretty damn good job of determining

00:07:05 --> 00:07:07
what's in the particular sample.

00:07:06 --> 00:07:10
And then there's subjective annotation,

00:07:09 --> 00:07:12
things that are difficult to humans

00:07:11 --> 00:07:16
to determine as a singular sample of a human being,

00:07:15 --> 00:07:18
as the crowd will kind of converge

00:07:17 --> 00:07:21
in these difficult questions.

00:07:20 --> 00:07:25
These are questions at a low level of emotion,

00:07:24 --> 00:07:27
these things that are a little bit fuzzy,

00:07:26 --> 00:07:29
that require multiple people to annotate.

00:07:28 --> 00:07:33
And at the high level are ethical questions

00:07:32 --> 00:07:37
of decisions that an AI system is tasked to making

00:07:36 --> 00:07:39
or we're tasked to making

00:07:38 --> 00:07:41
that nobody really knows the right answer to

00:07:40 --> 00:07:44
and as a crowd will kind of converge in the right answer.

00:07:43 --> 00:07:46
That's where the crowd intelligence comes in

00:07:45 --> 00:07:47
on the data annotation stint.

00:07:46 --> 00:07:51
Now, in the operation, once you train the model,

00:07:50 --> 00:07:55
the supervision, again, of the system based,

00:07:54 --> 00:07:58
and I'll give examples of this more concretely,

00:07:57 --> 00:08:01
on the wisdom of the individual is,

00:08:00 --> 00:08:03
for example, operating an autonomous vehicle.

00:08:02 --> 00:08:06
The supervision of that autonomous vehicle,

00:08:05 --> 00:08:08
a single driver is tasked with supervising

00:08:07 --> 00:08:10
the decisions of that AI system.

00:08:09 --> 00:08:13
That's a critical step for a learning-based system

00:08:12 --> 00:08:16
that's not guaranteed to be safe,

00:08:15 --> 00:08:19
that's not guaranteed to be explainable.

00:08:18 --> 00:08:23
And the subjective side of that,

00:08:22 --> 00:08:25
where the crowd intelligence is required,

00:08:24 --> 00:08:27
where a single person's not able to make it,

00:08:26 --> 00:08:29
these are, again, ethical questions

00:08:28 --> 00:08:31
about the operation of autonomous systems,

00:08:30 --> 00:08:34
the supervision of autonomous vehicles,

00:08:33 --> 00:08:38
the supervision of systems in the medical diagnosis

00:08:37 --> 00:08:42
in medicine in general and this is

00:08:41 --> 00:08:45
AI operating in the real world,

00:08:44 --> 00:08:50
making ethical decisions that are fundamentally

00:08:49 --> 00:08:53
difficult decisions for humans to make,

00:08:52 --> 00:08:56
and that's where the crowd intelligence needs to come in.

00:08:55 --> 00:08:59
And so we have to transform the machine learning problem

00:08:59 --> 00:09:02
by integrating the human being.

00:09:01 --> 00:09:04
First up top in the training process,

00:09:03 --> 00:09:08
on the left that's the usual machine learning formulation

00:09:07 --> 00:09:11
of a human being doing brute force annotation

00:09:10 --> 00:09:14
with some kind of data set, cats and dogs in ImageNet,

00:09:13 --> 00:09:18
segmentation data set in Cityscapes,

00:09:17 --> 00:09:23
video action recognition in the YouTube data set.

00:09:22 --> 00:09:26
Given the data set, humans put in a lot of expensive labor

00:09:25 --> 00:09:28
to annotate what's going on in that data,

00:09:27 --> 00:09:30
and then the machine learns.

00:09:30 --> 00:09:34
The flip side of that, the machine teaching side,

00:09:33 --> 00:09:36
the human-centered side of that

00:09:35 --> 00:09:38
is the machine instead, the learning model,

00:09:37 --> 00:09:40
the learning algorithm, we're talking

00:09:39 --> 00:09:42
about most of the neural networks here,

00:09:41 --> 00:09:46
is tasked with providing,

00:09:47 --> 00:09:53
selecting the subset, the small, sparse subsets of the data

00:09:52 --> 00:09:56
that are most useful for the human to annotate.

00:09:55 --> 00:10:00
So instead of the human doing the brute force task first

00:09:59 --> 00:10:03
of the annotation, the machine queries the human.

00:10:02 --> 00:10:05
This is the field called machine teaching.

00:10:04 --> 00:10:08
The machine queries a human with questions,

00:10:07 --> 00:10:10
and therefore the task is,

00:10:09 --> 00:10:12
and this is a wide open research field,

00:10:12 --> 00:10:18
the task is to minimize in several orders of magnitude

00:10:17 --> 00:10:20
the amount of data that needs to be annotated.

00:10:20 --> 00:10:23
In the real-world operation side,

00:10:22 --> 00:10:25
the integration of the human looks like this.

00:10:24 --> 00:10:30
On the left, the machine, now trained with a learning model,

00:10:29 --> 00:10:34
makes decision and the human living in this world

00:10:34 --> 00:10:37
receives the service provided by the machine,

00:10:36 --> 00:10:39
whether that's medical diagnosis,

00:10:38 --> 00:10:41
whether that's an autonomous vehicle,

00:10:40 --> 00:10:44
whether that's a system that determines

00:10:43 --> 00:10:46
whether you get a loan or not, so on.

00:10:45 --> 00:10:51
With the human-centered version of that

00:10:50 --> 00:10:53
he machine makes a decision,

00:10:53 --> 00:10:58
but it's able to provide a degree of uncertainty

00:10:57 --> 00:11:00
is one of the big requirements,

00:10:59 --> 00:11:02
to be able to specify a degree of uncertainty

00:11:01 --> 00:11:05
of that decision such that when uncertainty

00:11:04 --> 00:11:09
is below a certain threshold, human supervision is sought.

00:11:08 --> 00:11:11
And, again, in that decision,

00:11:10 --> 00:11:14
whether that's a costly decision financially

00:11:13 --> 00:11:16
or costly decision in terms of human life,

00:11:15 --> 00:11:18
human supervision is sought.

00:11:17 --> 00:11:21
And the service is received by the human,

00:11:20 --> 00:11:24
by the very same humans that are providing the supervision

00:11:23 --> 00:11:28
or another set of humans, but ultimately the decision

00:11:27 --> 00:11:32
is oversought by human beings.

00:11:31 --> 00:11:35
This is what I believe is going

00:11:34 --> 00:11:38
to be the defining mode of operation for AI systems

00:11:37 --> 00:11:41
in the 21st century, is we won't be able to

00:11:40 --> 00:11:43
as much as we'd like to escape,

00:11:42 --> 00:11:45
to create perfect AI systems

00:11:44 --> 00:11:50
that escape the need to work together

00:11:49 --> 00:11:51
with human beings at every step.

00:11:52 --> 00:11:58
There is five areas of research, grand challenges here

00:11:58 --> 00:12:02
that define human-centered AI,

00:12:01 --> 00:12:04
I'll focus on a few today,

00:12:03 --> 00:12:07
focus on one very much so.

00:12:06 --> 00:12:12
And even with that degree of high pruning,

00:12:11 --> 00:12:15
we have 120 slides, so I'll skip around.

00:12:15 --> 00:12:21
But, on the human-centered AI during the learning phase

00:12:22 --> 00:12:26
there is the methods, the research arm of machine teaching.

00:12:25 --> 00:12:29
How do we select, how do we improve supervised learning

00:12:28 --> 00:12:34
as opposed to needing 10,000, 100,000, a million examples,

00:12:33 --> 00:12:37
how do we reduce that where the algorithm

00:12:36 --> 00:12:39
queries only the essential elements

00:12:38 --> 00:12:42
and able to learn effectively from very little information,

00:12:41 --> 00:12:44
from very little samples?

00:12:43 --> 00:12:46
Just like we do when we're students,

00:12:45 --> 00:12:49
when we learn these fundamental aspects of math,

00:12:48 --> 00:12:52
the language and so on, we just need a few examples,

00:12:51 --> 00:12:55
but those examples are critical to understanding.

00:12:55 --> 00:13:00
And the second part of that is the reward engineering,

00:12:59 --> 00:13:02
that during a learning process,

00:13:01 --> 00:13:05
injecting the human being into the definition

00:13:04 --> 00:13:08
of the loss function of what's good, what's bad.

00:13:08 --> 00:13:12
Systems that have to operate in the real world

00:13:11 --> 00:13:17
have to understand what our society deems as good and bad,

00:13:17 --> 00:13:20
and we're not always good at injecting that

00:13:19 --> 00:13:22
in the very beginning, that has to be

00:13:21 --> 00:13:26
a continuous process of adjusting the rewards,

00:13:25 --> 00:13:28
of reward re-engineering by humans

00:13:27 --> 00:13:30
o that we can encode human values

00:13:29 --> 00:13:32
into the learning process.

00:13:31 --> 00:13:35
Now, on the second part on the human-centered AI

00:13:34 --> 00:13:37
during real-world operation

00:13:36 --> 00:13:39
when the system's actually trained,

00:13:38 --> 00:13:43
that there is the interactive element

00:13:42 --> 00:13:45
of robots and humans working together.

00:13:46 --> 00:13:48
The part I'll focus on quite a bit today

00:13:47 --> 00:13:51
because there's been quite a lot of development

00:13:50 --> 00:13:55
and progress on the deep learning side is human sensing,

00:13:54 --> 00:13:59
is algorithms that understand the human being.

00:13:59 --> 00:14:03
Algorithms that from taking raw information,

00:14:02 --> 00:14:05
whether that's video, audio, text,

00:14:04 --> 00:14:10
begin to get a context, a measure of the state

00:14:09 --> 00:14:11
of the human being in the short term

00:14:10 --> 00:14:16
and the long-term over time, the temporal understanding

00:14:15 --> 00:14:18
and the instantaneous understanding.

00:14:17 --> 00:14:22
Then there is the interaction aspect,

00:14:21 --> 00:14:25
so once you understand the human is the perception problem,

00:14:24 --> 00:14:27
you have to interact with them,

00:14:26 --> 00:14:30
and interact in such a way that is continuous,

00:14:29 --> 00:14:33
collaborative, and a rich, meaningful experience.

00:14:34 --> 00:14:37
We're in the very early days of creating

00:14:36 --> 00:14:42
anything like rich, meaningful experiences with AI systems,

00:14:41 --> 00:14:44
especially learning-based AI systems.

00:14:44 --> 00:14:49
And the safety, in the real-world operation,

00:14:48 --> 00:14:53
safety, ethics, unrolling the results

00:14:52 --> 00:14:56
of the engineered rewards that were in place

00:14:55 --> 00:15:00
during the learning process now come to fruition,

00:14:59 --> 00:15:05
and we need to make sure that the trained model

00:15:05 --> 00:15:11
does not result in things that are highly judgmental,

00:15:11 --> 00:15:16
catastrophic to our safety, or highly detrimental

00:15:15 --> 00:15:19
to what we deem as good and bad in society,

00:15:18 --> 00:15:22
of discrimination, of ethical considerations

00:15:21 --> 00:15:23
and all those kinds of things.

00:15:23 --> 00:15:28
The gray area, the line we all walk as a society

00:15:27 --> 00:15:29
in the crowd intelligence.

00:15:28 --> 00:15:33
We have to provide bounds on AI systems

00:15:32 --> 00:15:35
and there's entire group of work,

00:15:34 --> 00:15:38
I'll mention what we're doing in that area.

00:15:37 --> 00:15:41
So, first, on the machine teaching side

00:15:42 --> 00:15:45
and the efficient supervised learning,

00:15:44 --> 00:15:47
I'd like to sort of do one slide on each of these

00:15:46 --> 00:15:50
to kind of give you an idea.

00:15:49 --> 00:15:54
Near-term, and do two things for each area

00:15:54 --> 00:15:58
that we will elaborate in future lectures on

00:15:57 --> 00:16:00
and some of it I'll elaborate today.

00:16:00 --> 00:16:04
First, the near-term directions of research,

00:16:03 --> 00:16:06
the things that are within our reach now

00:16:05 --> 00:16:11
and a sort of thought experiment, a grand challenge

00:16:10 --> 00:16:15
that when if we can do it, that would be damn impressive,

00:16:14 --> 00:16:18
that will be a definition of real progress in this area.

00:16:17 --> 00:16:21
So near-term directions of research

00:16:20 --> 00:16:23
for machine teaching, for improved supervised learning,

00:16:22 --> 00:16:26
integrating a human into the annotation process

00:16:25 --> 00:16:29
is instead of annotating brute-force

00:16:28 --> 00:16:31
is annotate by asking the human questions.

00:16:30 --> 00:16:35
So we have to transform the way we do annotations,

00:16:34 --> 00:16:40
where the process of annotation is not defining

00:16:39 --> 00:16:43
the data set and then you go through the entire data set,

00:16:42 --> 00:16:45
it's a machine teaching system

00:16:44 --> 00:16:49
that queries the user for questions to annotate.

00:16:49 --> 00:16:53
And on the algorithm side, active learning,

00:16:52 --> 00:16:56
these are all sort of areas of work

00:16:55 --> 00:16:59
where we could be more clever about the way we use data,

00:16:58 --> 00:17:01
select data on which to train.

00:17:00 --> 00:17:04
So active learning is actively selecting

00:17:03 --> 00:17:06
during the training process which part

00:17:05 --> 00:17:09
of the data to train on and annotate.

00:17:08 --> 00:17:12
Data augmentation is taking things

00:17:11 --> 00:17:14
that have been supervised by a human

00:17:13 --> 00:17:17
d expanding them, modifying the data,

00:17:16 --> 00:17:19
warping the data in interesting ways

00:17:18 --> 00:17:21
uch that it expands.

00:17:20 --> 00:17:24
It multiplies the human effort that was injected

00:17:23 --> 00:17:27
into helping understand what's in the data.

00:17:26 --> 00:17:30
The one shot learning, zero shot learning

00:17:29 --> 00:17:32
are all, and transfer learning, are all in that category,

00:17:31 --> 00:17:35
and self-play is in the reinforcement learning area

00:17:34 --> 00:17:40
where the system constructs a model of the world

00:17:39 --> 00:17:43
and goes along alone in a room

00:17:42 --> 00:17:45
and plays with that model to try to figure out

00:17:44 --> 00:17:47
he different constraints with the model,

00:17:46 --> 00:17:49
how do you achieve good things there.

00:17:48 --> 00:17:52
An example grand challenge here

00:17:51 --> 00:17:56
that would define serious progress in the field

00:17:55 --> 00:17:58
is if we take ImageNet or COCO,

00:17:57 --> 00:18:02
the ImageNet Challenge or COCO Object Detection Challenge

00:18:01 --> 00:18:07
and training only on a totally different kind of data

00:18:08 --> 00:18:11
be able to achieve state-of-the-art results.

00:18:10 --> 00:18:15
So training only on Wikipedia with the text

00:18:14 --> 00:18:17
and images that are there on Wikipedia

00:18:16 --> 00:18:20
be able to perform object detection

00:18:19 --> 00:18:23
the state-of-the-art benchmark of COCO.

00:18:23 --> 00:18:26
COCO's the data set of different objects

00:18:25 --> 00:18:29
with rich annotation of the localization of the objects.

00:18:28 --> 00:18:33
That, I believe, is exactly the kind of thing

00:18:32 --> 00:18:36
that all the problems in the transfer learning

00:18:35 --> 00:18:39
and efficient data annotation machine teaching

00:18:38 --> 00:18:41
have to be solved to achieve that.

00:18:41 --> 00:18:45
Another challenge you can think of,

00:18:44 --> 00:18:48
if we can even just simplify it more

00:18:47 --> 00:18:52
is achieve .3% error on MNIST,

00:18:51 --> 00:18:55
that's the handwritten recognition task

00:18:54 --> 00:18:57
that everybody always provides as an example,

00:18:56 --> 00:19:02
so achieve a very good accuracy, state-of-the-art accuracy,

00:19:02 --> 00:19:06
by training only on a single example of a digit,

00:19:06 --> 00:19:09
as opposed to training on thousands,

00:19:08 --> 00:19:10
training on one example.

00:19:09 --> 00:19:13
That's something that most of us humans can do

00:19:12 --> 00:19:18
given one example of a new language you haven't seen before

00:19:17 --> 00:19:23
for each character, after studying them for a little bit,

00:19:22 --> 00:19:26
be able to now classify future characters at high accuracy.

00:19:30 --> 00:19:34
The second part of the learning process

00:19:33 --> 00:19:35
where the human needs to be injected

00:19:34 --> 00:19:38
in the near-term directions of research there

00:19:37 --> 00:19:42
is the reward engineering and the continuous tuning

00:19:41 --> 00:19:44
of those rewards by a human being.

00:19:48 --> 00:19:51
So OpenAI's doing quite a bit of work here,

00:19:50 --> 00:19:54
here's the game played by human and AI,

00:19:53 --> 00:19:57
it's really my favorite example of this.

00:19:56 --> 00:19:59
On the left, human is controlling a boat

00:19:58 --> 00:20:00
hat's finishing a race.

00:19:59 --> 00:20:04
On the right is a RL agent, reinforcement learning agent,

00:20:03 --> 00:20:07
that's controlling a boat that's trying

00:20:06 --> 00:20:12
to not finish a race, trying to maximize their reward

00:20:12 --> 00:20:17
efined prior to, initially by a human being,

00:20:16 --> 00:20:19
and what it finds is that you can get

00:20:18 --> 00:20:23
much more reward by collecting green turbos

00:20:22 --> 00:20:26
that appear as opposed to finishing the race.

00:20:25 --> 00:20:28
It realizes that finishing the race

00:20:27 --> 00:20:30
actually gets in the way of maximizing reward,

00:20:29 --> 00:20:33
and so that's the unintended consequences

00:20:32 --> 00:20:37
of a reward function that was specified previously,

00:20:39 --> 00:20:43
and most human supervisors of this result

00:20:42 --> 00:20:48
would be able to adjust, re-engineer the reward function

00:20:47 --> 00:20:50
to be able to get the robot to,

00:20:49 --> 00:20:53
the AI system here to finish the race.

00:20:52 --> 00:20:57
And that kind of continuous monitoring, moni-deterring,

00:20:56 --> 00:20:59
of the performance of the system

00:20:58 --> 00:21:03
during the training process is a near-term direction

00:21:02 --> 00:21:06
of research that's a few, DeepMind, OpenAI,

00:21:05 --> 00:21:08
and ourselves are taking on.

00:21:08 --> 00:21:13
Example grand challenge is allowing

00:21:13 --> 00:21:17
AI system to operate in a context

00:21:16 --> 00:21:22
where there's a lot of fuzziness for us humans,

00:21:21 --> 00:21:24
there's a lot of uncertainty, there's a lot of gray area,

00:21:23 --> 00:21:26
there's a lot of challenging aspects

00:21:25 --> 00:21:29
in terms of what is right and what is wrong

00:21:28 --> 00:21:32
that we're continuing to improve on.

00:21:31 --> 00:21:36
Example I provide here is one of the least popular things

00:21:35 --> 00:21:41
in the world is the US Congress.

00:21:40 --> 00:21:45
So replacing US Congress, it's a body of representatives

00:21:44 --> 00:21:47
of the people of the United States

00:21:46 --> 00:21:50
and they make bills based on the belief of the people.

00:21:49 --> 00:21:53
That sounds a lot like what Netflix does

00:21:52 --> 00:21:57
in recommending what movie you should watch next

00:21:56 --> 00:21:59
in representing what people love to watch,

00:21:58 --> 00:22:01
so that's just a recommender system.

00:22:00 --> 00:22:04
So it makes perfect sense that an AI system

00:22:03 --> 00:22:07
should be able to take on this challenge.

00:22:06 --> 00:22:09
And I see that as a grand challenge

00:22:08 --> 00:22:14
is replacing some of the fundamental representation

00:22:13 --> 00:22:18
of large crowds of people that make ethical decisions,

00:22:17 --> 00:22:23
replaced by a human-centered AI system.

00:22:23 --> 00:22:26
Okay, in real-world operation

00:22:25 --> 00:22:30
the first thing we have to do before we have a robot

00:22:29 --> 00:22:32
and a human work together, the first thing

00:22:31 --> 00:22:35
is the robot has to be perceive the human.

00:22:34 --> 00:22:36
Question?

00:22:35 --> 00:22:39
The conventional obvious wants you,

00:22:38 --> 00:22:42
so currently there's a Congress,

00:22:41 --> 00:22:46
I do want to change the way Congress works,

00:22:45 --> 00:22:47
make it better, but do you want

00:22:46 --> 00:22:51
o just take the system that currently is and automate it?

00:22:51 --> 00:22:56
So the idea is take the system

00:22:55 --> 00:23:00
as it currently is supposed to be and automate that.

00:23:01 --> 00:23:06
So an AI system can provide a lot more transparency

00:23:05 --> 00:23:07
of the inputs.

00:23:06 --> 00:23:10
The idea of Congress is supposed, the only inputs

00:23:09 --> 00:23:11
is supposed to be the people

00:23:12 --> 00:23:16
and the beliefs of the people.

00:23:18 --> 00:23:21
And there's rich information there.

00:23:20 --> 00:23:23
So, for example,

00:23:25 --> 00:23:29
for me, not saying anything about politics,

00:23:28 --> 00:23:30
but there's certain issues that I care a lot about

00:23:29 --> 00:23:33
and certain issues that I don't care much about,

00:23:32 --> 00:23:36
and that's, put that aside,

00:23:35 --> 00:23:40
and then there's certain issues that I know a lot about

00:23:39 --> 00:23:43
and certain issues I know very little about.

00:23:42 --> 00:23:47
And those don't actually intersect that well.

00:23:46 --> 00:23:48
I'm very opinionated about things

00:23:47 --> 00:23:49
I don't know anything about,

00:23:48 --> 00:23:51
it's very common, all of us are.

00:23:50 --> 00:23:56
So being able to put that representation of me

00:23:55 --> 00:23:59
into a system that would take a lot

00:23:58 --> 00:24:02
of our entire nation together and be able

00:24:01 --> 00:24:07
to make bills that represent the people.

00:24:08 --> 00:24:12
Now, the challenge there, it can't be just the training set

00:24:11 --> 00:24:16
and then the system now operates, AI is running the country.

00:24:15 --> 00:24:19
No, there has to be that human-centered element

00:24:18 --> 00:24:20
where we're constantly supervising,

00:24:19 --> 00:24:22
just like we're in theory supposed

00:24:21 --> 00:24:26
to be supervising our congressmen and congresswomen.

00:24:25 --> 00:24:28
Human sensing, the first part

00:24:27 --> 00:24:32
in order to have an AI system that works with a human being

00:24:31 --> 00:24:34
the AI system has to perceive,

00:24:33 --> 00:24:36
understand the state of the human being

00:24:35 --> 00:24:37
at the very simplest level

00:24:36 --> 00:24:41
and the more complex, temporal, contextual over time level.

00:24:40 --> 00:24:43
So the near-term directions of research,

00:24:42 --> 00:24:46
it's purely the perception problem,

00:24:45 --> 00:24:49
where deep learning shines, of taking data,

00:24:48 --> 00:24:54
whether that comes in visual, audio, text, and so on

00:24:53 --> 00:24:58
and being able to classify the physical,

00:24:57 --> 00:25:03
mental, social state, social context of the person.

00:25:02 --> 00:25:06
Be able to, everything, and this is what I'll cover

00:25:05 --> 00:25:10
a little bit of today, everything from face detection,

00:25:09 --> 00:25:13
face recognition, emotion recognition,

00:25:12 --> 00:25:17
natural language processing, body pose estimation,

00:25:18 --> 00:25:22
those same recommender systems, speech recognition,

00:25:21 --> 00:25:26
that all of those conversions of raw data

00:25:25 --> 00:25:28
that capture something about the human being

00:25:27 --> 00:25:31
into actually meaningful, actionable information.

00:25:30 --> 00:25:36
A grand challenge there is emotion recognition.

00:25:35 --> 00:25:39
There's been a lot of companies

00:25:38 --> 00:25:42
and ideas that we've somehow cracked emotion recognition,

00:25:42 --> 00:25:47
that we are able to determine the mood of a person,

00:25:46 --> 00:25:50
but really that's, for those who were here last year

00:25:49 --> 00:25:52
with Lisa Feldman Barrett,

00:25:51 --> 00:25:55
but just if you're sort of very honest

00:25:54 --> 00:25:59
and you study emotional intelligence

00:25:58 --> 00:26:02
and emotion and the expression of emotion,

00:26:01 --> 00:26:05
it's a fascinating area and we're not even close

00:26:04 --> 00:26:07
to being able to build perception systems

00:26:06 --> 00:26:08
that detect emotion.

00:26:07 --> 00:26:11
What we're more so doing is detecting

00:26:10 --> 00:26:15
very simple facial expressions

00:26:14 --> 00:26:19
that correspond to our storybook versions of emotions,

00:26:18 --> 00:26:24
smiling, crying, like frowning in a caricatured way.

00:26:23 --> 00:26:27
So if you build a system that has a high accuracy

00:26:26 --> 00:26:30
of doing real emotion recognition

00:26:29 --> 00:26:34
you can think of it, as stated here,

00:26:33 --> 00:26:36
an AI system that classifies,

00:26:35 --> 00:26:40
binary classification problem with 95% accuracy

00:26:39 --> 00:26:42
of whether you want to be left alone or not.

00:26:41 --> 00:26:47
And being able to do that after collecting data for 30 days.

00:26:46 --> 00:26:49
That I see as a really clean formulation

00:26:48 --> 00:26:54
of exactly the kind of human understanding

00:26:53 --> 00:26:58
we need to be able to build in our learning models,

00:26:57 --> 00:27:00
and we're very far away from that,

00:26:59 --> 00:27:03
especially the long temporal aspect of that,

00:27:02 --> 00:27:07
of being able to integrate data over a long period of time.

00:27:06 --> 00:27:09
Then the second part of human-robot interaction

00:27:08 --> 00:27:13
in the real world operation is the experience.

00:27:12 --> 00:27:15
This is where knowledge is beginning

00:27:14 --> 00:27:18
to consider that interactive experience

00:27:17 --> 00:27:21
of how do we have a rich, fulfilling experience?

00:27:20 --> 00:27:25
We have autonomous vehicles, for example,

00:27:24 --> 00:27:28
semi-autonomous vehicles, whether that's Tesla, Volvo,

00:27:27 --> 00:27:30
Super Cruise with the Cadillac,

00:27:29 --> 00:27:32
there's a bunch of systems that have now

00:27:31 --> 00:27:34
greater and greater degrees of automation in the car

00:27:33 --> 00:27:38
and we get to have the human interact with that AI system

00:27:37 --> 00:27:40
and trying to figure out how do we have

00:27:39 --> 00:27:44
a rich, fulfilling experience in the,

00:27:45 --> 00:27:49
currently the Volvo system that experience

00:27:48 --> 00:27:52
is more limited, there's a little icon,

00:27:51 --> 00:27:55
it's more kind of traditional driving situation.

00:27:54 --> 00:27:58
And the Tesla, you have a much bigger display

00:27:57 --> 00:27:59
about what's going on.

00:27:58 --> 00:28:04
In the Super Cruise there's a camera looking at your eyes,

00:28:03 --> 00:28:06
in the Cadillac Super Cruise system

00:28:05 --> 00:28:08
there's a camera looking at your eyes

00:28:07 --> 00:28:11
determining if you're awake or not,

00:28:10 --> 00:28:13
paying attention or not, and there's like

00:28:12 --> 00:28:16
an experience there that we're trying to create.

00:28:15 --> 00:28:20
And in the Tesla case, the miles are racking up,

00:28:19 --> 00:28:21
we have real data.

00:28:20 --> 00:28:24
Here at MIT we're studying this exact interaction,

00:28:23 --> 00:28:27
there's now over a billion miles driven in the Tesla.

00:28:26 --> 00:28:30
And the same in the fully autonomous side

00:28:29 --> 00:28:33
with Waymo have now reached 10-plus million miles

00:28:32 --> 00:28:35
driven autonomously.

00:28:34 --> 00:28:37
And there's a lot people experimenting with this,

00:28:36 --> 00:28:40
but that's that collaborative interaction

00:28:39 --> 00:28:42
of going back and forth, of being able to,

00:28:41 --> 00:28:45
for the AI system to express the degree

00:28:44 --> 00:28:47
of uncertainty as a part of the environment,

00:28:46 --> 00:28:50
the AI system being able to express when it needs help

00:28:49 --> 00:28:53
and not be able to communicate

00:28:52 --> 00:28:56
what are its limitations and capabilities and so on,

00:28:55 --> 00:29:00
trade off control, be able to seek human supervision.

00:28:59 --> 00:29:04
There's a dance there that's takes into consideration

00:29:03 --> 00:29:08
everything from the neurobiological research

00:29:08 --> 00:29:14
to psychology, to deep learning and to the pure robotics,

00:29:14 --> 00:29:18
HRI, human-robotic interaction aspects.

00:29:17 --> 00:29:20
One grand challenge would be,

00:29:19 --> 00:29:24
Tesla's driven one billion miles now under Autopilot,

00:29:23 --> 00:29:26
under the semi-autonomous mode.

00:29:25 --> 00:29:29
The grand challenge here is when we start getting

00:29:28 --> 00:29:31
to the kind of mileage that we see

00:29:30 --> 00:29:33
in the United States every year.

00:29:32 --> 00:29:35
We start getting into the hundreds of billions

00:29:34 --> 00:29:37
of miles driven semi-autonomously.

00:29:36 --> 00:29:40
We get to see teenagers, 16, 17, 18,

00:29:39 --> 00:29:42
using these systems for the first time.

00:29:41 --> 00:29:46
We get to see older folks, folks who don't necessarily

00:29:45 --> 00:29:49
drive or use any kind of AI in their lives

00:29:48 --> 00:29:51
get to use these systems.

00:29:50 --> 00:29:54
We start to explore that aspect, that's the real challenge.

00:29:53 --> 00:29:59
And, of course, the old Turing test,

00:29:58 --> 00:30:04
now reimagined by Alexa with the Alexa Prize Challenge

00:30:04 --> 00:30:08
of Socialbot is creating, natural language

00:30:07 --> 00:30:10
is such a beautiful thing to explore

00:30:09 --> 00:30:12
human-robot interaction with

00:30:11 --> 00:30:16
is both on the audio side and just the text side

00:30:15 --> 00:30:19
is passing the Turing test.

00:30:18 --> 00:30:21
That's the true grand challenge in the real way

00:30:20 --> 00:30:24
where you want to have a conversation with a robot

00:30:23 --> 00:30:26
for prolonged periods of times,

00:30:25 --> 00:30:29
maybe more than even some of your other friends.

00:30:28 --> 00:30:34
And on the other side of friends is the risk,

00:30:33 --> 00:30:36
the catastrophic risk that's potential

00:30:35 --> 00:30:40
when you have an AI system that's learning from data.

00:30:39 --> 00:30:42
The near-term directions of research

00:30:41 --> 00:30:45
is purely the human supervision of AI decisions

00:30:44 --> 00:30:47
in terms of safety and ethics.

00:30:46 --> 00:30:49
There's a lot of systems like with cars

00:30:48 --> 00:30:52
or medical diagnosis and so on

00:30:51 --> 00:30:55
where there's some life-critical, safety-critical aspect

00:30:54 --> 00:30:58
hat we want to be able to supervise the safety of that,

00:30:57 --> 00:31:00
and there's ethical decisions in terms

00:30:59 --> 00:31:03
of who gets the loan or not,

00:31:02 --> 00:31:06
who gets a certain criminal penalty or not,

00:31:05 --> 00:31:10
any degree to which AI systems are incorporated into that

00:31:09 --> 00:31:12
you have to consider ethical questions.

00:31:11 --> 00:31:17
And even just the crude, the low-level perception systems

00:31:17 --> 00:31:20
like face recognition,

00:31:19 --> 00:31:22
you want to make sure that your face recognition systems

00:31:21 --> 00:31:24
are not discriminating based on color or gender or age

00:31:23 --> 00:31:26
and so on, you want to make sure

00:31:25 --> 00:31:31
that at that basic fundamental level of ethics

00:31:31 --> 00:31:34
the systems are trained in a way

00:31:33 --> 00:31:37
they maintain our human values

00:31:36 --> 00:31:40
or the better angels of our nature,

00:31:39 --> 00:31:43
the better sides of our values,

00:31:42 --> 00:31:45
some of the brighter aspects of our values.

00:31:46 --> 00:31:50
And the other thing is in terms of just maintaining values

00:31:49 --> 00:31:53
that's the normal, that's looking at the mean

00:31:52 --> 00:31:55
of the distribution, but we also want

00:31:54 --> 00:31:59
o control the outliers, from the AI systems

00:31:58 --> 00:32:02
not to do anything catastrophic.

00:32:01 --> 00:32:04
So the unintended consequences

00:32:03 --> 00:32:07
when something happens that you didn't anticipate,

00:32:06 --> 00:32:09
you want to be able to put boundaries on that.

00:32:08 --> 00:32:12
And the grand challenge there,

00:32:11 --> 00:32:14
really it all boils down to the ability

00:32:13 --> 00:32:18
of an AI system to say that it's uncertain about something.

00:32:17 --> 00:32:22
And that measure of uncertainty has to be good.

00:32:22 --> 00:32:25
It has to be able to make a prediction

00:32:26 --> 00:32:29
always accompanied with uncertainty,

00:32:28 --> 00:32:31
even on things he hasn't seen before,

00:32:30 --> 00:32:32
that's the real challenge.

00:32:31 --> 00:32:37
To be able to be trained on cats and dogs

00:32:36 --> 00:32:39
and then seeing a giraffe

00:32:39 --> 00:32:42
and saying I'm not sure what that is.

00:32:43 --> 00:32:46
We're quite far away from that,

00:32:45 --> 00:32:48
'cause right now it would probably confidently say

00:32:47 --> 00:32:50
it's a dog, depending on the giraffe.

00:32:51 --> 00:32:56
But we want to be able to have an extremely high accuracy

00:32:55 --> 00:32:58
in the ability of AI systems to determine

00:32:57 --> 00:33:02
their own uncertainty, to know what they don't know,

00:33:01 --> 00:33:04
because from that comes the supervision,

00:33:03 --> 00:33:07
from that comes the ability to stop

00:33:06 --> 00:33:09
under things that it's uncertain about,

00:33:08 --> 00:33:10
catastrophic events.

00:33:10 --> 00:33:13
The first aspect of real-world operation

00:33:12 --> 00:33:15
is understanding the human.

00:33:14 --> 00:33:19
One of the places where deep learning has really shined

00:33:18 --> 00:33:20
is the perception problem.

00:33:19 --> 00:33:23
It all begins at the ability to look at raw data

00:33:22 --> 00:33:26
nd convert that into meaningful information,

00:33:25 --> 00:33:29
that's really the understanding of the human comes in.

00:33:28 --> 00:33:31
Not the kind of understanding that

00:33:30 --> 00:33:32
when you're in a relationship with somebody,

00:33:31 --> 00:33:33
when you're friends with somebody,

00:33:32 --> 00:33:37
over a long period of you gain an understanding

00:33:36 --> 00:33:40
of their quirks, limitations, capabilities, so on,

00:33:39 --> 00:33:41
that's really fascinating.

00:33:40 --> 00:33:44
But the first step is just to be able to

00:33:43 --> 00:33:47
when you see them, recognize who they are,

00:33:46 --> 00:33:52
what's on their mind, what's the body language,

00:33:53 --> 00:33:56
what are they saying with their mouth?

00:33:55 --> 00:33:59
All those basic raw perception tasks,

00:33:58 --> 00:34:00
that's where deep learning really shines.

00:33:59 --> 00:34:03
I like to cover the state-of-the-art

00:34:02 --> 00:34:07
in those various perception tasks.

00:34:06 --> 00:34:08
So, first, face recognition.

00:34:09 --> 00:34:12
Now, there's a full slide presentation with this

00:34:11 --> 00:34:14
and I'm skipping around.

00:34:13 --> 00:34:16
The full slide presentation has the following structure

00:34:15 --> 00:34:18
for each of these topics.

00:34:17 --> 00:34:21
It has the motivation, description,

00:34:20 --> 00:34:24
the excitement, the worry, the future impact

00:34:23 --> 00:34:27
is the first part, and then there's five papers.

00:34:26 --> 00:34:30
One defining the quote unquote old-school seminal work

00:34:29 --> 00:34:34
that opened the field, then the early progress in the field.

00:34:33 --> 00:34:39
And paper three is the recent breakthrough,

00:34:38 --> 00:34:41
often associated with deep learning.

00:34:40 --> 00:34:43
Paper four is the current state-of-the-art.

00:34:42 --> 00:34:45
And paper five is the thing that defines

00:34:44 --> 00:34:48
the future direction, the possible set

00:34:47 --> 00:34:49
of things that define the future direction,

00:34:48 --> 00:34:53
and then the open problems in the field

00:34:52 --> 00:34:56
and where the future research is very much needed.

00:34:55 --> 00:34:59
That's kind of the structure of every topic

00:34:58 --> 00:35:01
I'll cover here as quickly as possible.

00:35:02 --> 00:35:06
Face recognition, so what is it?

00:35:05 --> 00:35:08
It's the first thing,

00:35:08 --> 00:35:13
the face contains so much rich information

00:35:12 --> 00:35:16
about the state of the human being.

00:35:15 --> 00:35:17
So understanding the human being

00:35:16 --> 00:35:19
really starts at the face.

00:35:18 --> 00:35:22
And detecting the face is the first step,

00:35:21 --> 00:35:25
detecting the body and that there's a head

00:35:24 --> 00:35:27
at the top of that body, that's the first step.

00:35:26 --> 00:35:30
And then there is the task of face recognition,

00:35:29 --> 00:35:33
being an exceptionally active area of research

00:35:32 --> 00:35:35
because it has a lot of applications,

00:35:34 --> 00:35:37
and through that research we're able

00:35:36 --> 00:35:40
to now study a lot of aspects,

00:35:39 --> 00:35:42
how we perform perception on the face.

00:35:41 --> 00:35:45
So, recognition, purely stated,

00:35:44 --> 00:35:49
is the recognizing the identity of a human face,

00:35:48 --> 00:35:50
who is this.

00:35:50 --> 00:35:55
Detection is just detecting a face.

00:35:55 --> 00:36:01
Now, recognition means there's a database of identities,

00:36:00 --> 00:36:03
what is it, seven billion of them on Earth,

00:36:03 --> 00:36:08
and you're trying to determine which of them it is,

00:36:07 --> 00:36:10
which of the seven billion it is,

00:36:09 --> 00:36:12
or whatever the database is.

00:36:11 --> 00:36:15
The face verification problem

00:36:14 --> 00:36:18
is something that your phone uses

00:36:17 --> 00:36:20
when you unlock it with your face

00:36:19 --> 00:36:22
is it's saying, is it your or not,

00:36:21 --> 00:36:24
is it Lex or somebody else?

00:36:23 --> 00:36:29
It's a database of two, one person versus everybody else.

00:36:29 --> 00:36:34
There's a lot of applications here obviously,

00:36:33 --> 00:36:38
from identification to all the security aspects

00:36:37 --> 00:36:42
of using the face as a sort of fingerprint

00:36:41 --> 00:36:45
of your identity in all the interactive elements

00:36:44 --> 00:36:49
of AI systems, software-based systems in this world.

00:36:48 --> 00:36:51
Okay, so why is it hard?

00:36:50 --> 00:36:53
So all the usual computer vision problems come in,

00:36:52 --> 00:36:56
lighting variation, pose variation,

00:36:55 --> 00:36:58
it's just computer vision's very hard,

00:36:57 --> 00:36:59
it's just you get these raw numbers

00:36:58 --> 00:37:01
and you have to infer so many things

00:37:00 --> 00:37:05
that us humans take for granted,

00:37:04 --> 00:37:07
so the basic computer vision stuff.

00:37:06 --> 00:37:09
But there is stuff on top of that.

00:37:08 --> 00:37:14
So, faces, we're trying to, it's like cats versus dogs,

00:37:13 --> 00:37:16
there's thousands of breeds of dog

00:37:15 --> 00:37:18
and thousands of breeds of cats,

00:37:17 --> 00:37:22
in that same way, faces can look very similar to each other.

00:37:21 --> 00:37:25
So these two classes that you're trying to separate,

00:37:24 --> 00:37:29
could be very, very, very close together and intermingle.

00:37:29 --> 00:37:34
Now, there is a lot of face data available now,

00:37:34 --> 00:37:36
because of the application,

00:37:35 --> 00:37:39
because of the financial benefits of such data sets,

00:37:38 --> 00:37:42
but for any one individual, unless you're Brad Pitt

00:37:41 --> 00:37:44
or Angelina Jolie or a celebrity,

00:37:43 --> 00:37:47
there's not many samples of the data available,

00:37:46 --> 00:37:50
so the individuals, based on which the classification

00:37:49 --> 00:37:53
is to be made, there's often not very much data.

00:37:52 --> 00:37:57
Then there is a lot of variation,

00:37:56 --> 00:38:00
so you have to, in making the face recognition task,

00:37:59 --> 00:38:03
you have to be invariant to all the hairstyles,

00:38:03 --> 00:38:06
that you change yourself over time,

00:38:05 --> 00:38:08
the weight gain, the weight loss,

00:38:07 --> 00:38:11
the beard you decided to grow,

00:38:12 --> 00:38:15
the glasses you wear sometimes and not others,

00:38:14 --> 00:38:17
the different styles of glasses and so on,

00:38:16 --> 00:38:19
makeup or no makeup, all of these things,

00:38:18 --> 00:38:22
it's still you, still the same identify,

00:38:21 --> 00:38:24
you have to be able to classify that.

00:38:23 --> 00:38:25
And the kind of accuracy,

00:38:24 --> 00:38:27
especially for security applications

00:38:26 --> 00:38:29
is extremely high if it's required.

00:38:29 --> 00:38:34
The reason it's an exciting area

00:38:33 --> 00:38:36
is there's a lot of possibility

00:38:35 --> 00:38:38
and there's also a lot of concern, right?

00:38:37 --> 00:38:42
So the future impact, utopia, dystopia,

00:38:41 --> 00:38:45
and the more reasonable middle path here

00:38:44 --> 00:38:50
is face provides a very user-friendly way

00:38:51 --> 00:38:56
of letting your devices recognize you and say hello.

00:38:57 --> 00:38:59
Your voice is certainly one,

00:38:58 --> 00:39:01
but one of the most powerful ones

00:39:00 --> 00:39:05
to really classify at at distance is face.

00:39:04 --> 00:39:06
So what does that mean?

00:39:05 --> 00:39:09
The utopian view, the possibility of the future,

00:39:08 --> 00:39:12
the best possible, brightest possible future,

00:39:11 --> 00:39:17
is you can use your face as a passport,

00:39:16 --> 00:39:21
you replace the license, replace all the security measures

00:39:20 --> 00:39:23
we put from the passwords in our devices

00:39:22 --> 00:39:26
to the credit card and so on, all of that,

00:39:26 --> 00:39:29
Apple Pay, it will be Face Pay.

00:39:28 --> 00:39:31
You show up, it will automatically connect

00:39:30 --> 00:39:35
o all your devices, all your banking information and so on.

00:39:34 --> 00:39:37
Obviously the flip side of that,

00:39:36 --> 00:39:38
just rephrasing that sentence

00:39:37 --> 00:39:40
is also could be dystopian,

00:39:39 --> 00:39:45
because complete violations of privacy,

00:39:44 --> 00:39:46
being watched at any time,

00:39:45 --> 00:39:49
being able to, through your Facebook

00:39:48 --> 00:39:51
and social media and all your devices,

00:39:50 --> 00:39:53
being to able to identify you,

00:39:52 --> 00:39:57
making it impossible for you to sort of hide from society.

00:39:56 --> 00:40:00
The fundamental aspects of privacy,

00:39:59 --> 00:40:03
maintaining privacy, many of us value greatly.

00:40:02 --> 00:40:06
The middle path is really just a useful way

00:40:05 --> 00:40:07
to unlock your phone.

00:40:08 --> 00:40:10
The recent breakthroughs here,

00:40:09 --> 00:40:12
it started with DeepFace.

00:40:15 --> 00:40:21
An essential idea there is applying deep neural networks

00:40:20 --> 00:40:24
to the task of face recognition.

00:40:23 --> 00:40:25
With a lot of the breakthroughs here

00:40:24 --> 00:40:29
on the perception side we're not covering

00:40:28 --> 00:40:30
the old-school papers and so on

00:40:30 --> 00:40:35
and the historical context here,

00:40:34 --> 00:40:40
biggest breakthroughs came with deep learning, 2006,

00:40:40 --> 00:40:46
'07, '08, the last 10 years.

00:40:46 --> 00:40:49
The same is true with face recognition.

00:40:48 --> 00:40:52
DeepFace was the big first application

00:40:51 --> 00:40:55
that achieved near-human performance

00:40:54 --> 00:40:58
on one of the big benchmarks of the time

00:40:57 --> 00:41:00
on the Labeled Faces in the Wild.

00:40:59 --> 00:41:02
So they're using a very large data set,

00:41:01 --> 00:41:04
being able to form a good representation.

00:41:04 --> 00:41:08
The state-of-the-art, or at least close

00:41:07 --> 00:41:11
to the state-of-the-art is FaceNet.

00:41:10 --> 00:41:14
The idea there is using those same deep architectures

00:41:13 --> 00:41:19
to now optimize for the representation itself directly.

00:41:18 --> 00:41:21
The notebook we're putting out,

00:41:20 --> 00:41:25
we shared with some of you for the assignment,

00:41:24 --> 00:41:28
describes face recognition, the challenge there,

00:41:27 --> 00:41:31
that it's not like the traditional classification problem.

00:41:34 --> 00:41:40
You have to form an embedding of the face

00:41:39 --> 00:41:43
into a small vector, compressed vector,

00:41:42 --> 00:41:45
such that in that embedding,

00:41:44 --> 00:41:47
faces that are similar to each other,

00:41:46 --> 00:41:49
so identities that are close together

00:41:48 --> 00:41:53
are close in the Euclidean sense in that embedding

00:41:52 --> 00:41:56
and people that are very different are far away.

00:41:55 --> 00:41:59
And so you use that embedding to then do the classification.

00:41:58 --> 00:42:02
That's really the only way to deal with data sets

00:42:01 --> 00:42:03
for which you have so little information

00:42:02 --> 00:42:05
any one individual person.

00:42:05 --> 00:42:10
And so FaceNet optimized that embedding

00:42:09 --> 00:42:12
in a way that directly optimizes

00:42:11 --> 00:42:17
for the Euclidean distance between non-matching identities.

00:42:16 --> 00:42:18
So there's still a lot of excitement

00:42:17 --> 00:42:19
about face recognition,

00:42:18 --> 00:42:21
there's a lot of benchmark competitions

00:42:20 --> 00:42:23
and a lot of people working in this,

00:42:22 --> 00:42:26
and really bigger, badder networks

00:42:25 --> 00:42:29
and more data is really one of the ways

00:42:28 --> 00:42:30
to crack this problem.

00:42:29 --> 00:42:35
So a public large data set with 672,000 identities

00:42:34 --> 00:42:39
and 4.7 million photos, that's in 2017,

00:42:38 --> 00:42:42
and that just keeps scaling up and up and up and up.

00:42:41 --> 00:42:44
Now, we have to also be honest here

00:42:43 --> 00:42:48
on the possible future directions of work

00:42:47 --> 00:42:51
in that even though the benchmarks are growing,

00:42:50 --> 00:42:54
that's still a tiny subset of the people in the world.

00:42:53 --> 00:42:56
We're still not quite there

00:42:55 --> 00:42:59
to be able to have the general face recognition

00:42:58 --> 00:43:02
applicable to the entirety of the population

00:43:01 --> 00:43:05
or a large swath of the population of the world.

00:43:04 --> 00:43:10
So in this topic here, brief coverage,

00:43:09 --> 00:43:14
we're not covering all of the aspects of the face,

00:43:13 --> 00:43:17
especially temporal that are useful in face recognition

00:43:16 --> 00:43:19
or useful saying a lot of things about the face,

00:43:18 --> 00:43:22
which is a face yields facts.

00:43:21 --> 00:43:24
The different kinds of facial expressions

00:43:23 --> 00:43:27
that can then be used to infer emotion and so on,

00:43:27 --> 00:43:31
you know, raised eyebrows and all those kinds of things

00:43:30 --> 00:43:34
and can provide rich information for recognizing

00:43:33 --> 00:43:35
and interpreting the face.

00:43:34 --> 00:43:37
And the different other modalities,

00:43:36 --> 00:43:40
including 3D face recognition, we're not covering.

00:43:39 --> 00:43:42
There's a lot of exciting areas there.

00:43:41 --> 00:43:44
We're just looking at the pure formulation

00:43:43 --> 00:43:46
of the face recognition problem

00:43:45 --> 00:43:50
of looking at a 2D single image.

00:43:51 --> 00:43:55
The open problems here is,

00:43:54 --> 00:44:00
first, not often stated and misinterpreted by people,

00:44:01 --> 00:44:06
is that most of these methods of face recognition

00:44:05 --> 00:44:09
start with assuming that you have

00:44:08 --> 00:44:10
a bounding box around the face.

00:44:10 --> 00:44:16
Now, oftentimes recognition can happen,

00:44:16 --> 00:44:19
so they're assuming a frontal

00:44:18 --> 00:44:21
or near-frontal view of the face.

00:44:20 --> 00:44:24
But you can do recognition of all kinds of poses,

00:44:23 --> 00:44:26
and it's very interesting to think

00:44:26 --> 00:44:30
that recognition, the way we recognize our friends

00:44:29 --> 00:44:33
and colleagues, parents and children,

00:44:32 --> 00:44:36
is often using a lot of cue context information

00:44:35 --> 00:44:38
that's beyond just the pure frontal view of the face.

00:44:37 --> 00:44:42
And you can do pretty well on profile views,

00:44:41 --> 00:44:44
taken from body language and so on.

00:44:43 --> 00:44:46
So all those things, that's open in the field

00:44:45 --> 00:44:49
how we incorporate that into face recognition.

00:44:48 --> 00:44:52
Then the black-box side is problematic

00:44:51 --> 00:44:54
for both bias and just being able

00:44:53 --> 00:44:57
to understand why incorrect decisions are made

00:44:56 --> 00:45:01
is making those face recognition systems more interpretable.

00:45:02 --> 00:45:07
And then finally privacy, the ability to collect

00:45:06 --> 00:45:10
he kind of data where the face recognition

00:45:09 --> 00:45:12
would be performing extremely well

00:45:11 --> 00:45:15
and yet not violating the fundamental aspects

00:45:14 --> 00:45:17
of privacy that we value.

00:45:20 --> 00:45:25
Activity recognition, taking the next step forward here

00:45:26 --> 00:45:31
into the richer temporal context of what people do.

00:45:30 --> 00:45:33
Again, the same structure from recent breakthroughs

00:45:32 --> 00:45:35
to the future direction of work.

00:45:35 --> 00:45:37
What is it?

00:45:37 --> 00:45:40
It's classifying human activity

00:45:39 --> 00:45:43
from images or from video.

00:45:42 --> 00:45:48
And why is it important is it provides,

00:45:47 --> 00:45:51
depending on the level of abstraction

00:45:50 --> 00:45:53
for the activity, it provides context

00:45:52 --> 00:45:55
for understanding the human.

00:45:54 --> 00:45:57
What are they doing, are they playing baseball,

00:45:56 --> 00:45:59
are they singing, are they sleeping,

00:45:58 --> 00:46:02
are they putting on makeup, knitting,

00:46:01 --> 00:46:04
so on, mixing butter?

00:46:03 --> 00:46:06
Why is it hard?

00:46:05 --> 00:46:09
Again, all the usual problems in image recognition.

00:46:08 --> 00:46:13
The kind of data we're dealing with is just much larger,

00:46:12 --> 00:46:17
the kind of video, the richness of possibilities

00:46:16 --> 00:46:20
that define what activity is is much larger,

00:46:19 --> 00:46:22
so the complexity's much larger.

00:46:21 --> 00:46:27
It's often difficult to quantify motion

00:46:27 --> 00:46:31
because the fundamental aspect of activity

00:46:30 --> 00:46:34
is the change in the world, is the motion of things,

00:46:33 --> 00:46:37
and then it's difficult to determine

00:46:36 --> 00:46:39
how the dynamics or the physics of the world,

00:46:38 --> 00:46:42
especially from a 2D view of what's background information,

00:46:41 --> 00:46:43
what's noise, and what's essential

00:46:42 --> 00:46:47
to understanding the activity.

00:46:47 --> 00:46:53
And the subjective, ambiguous elements of activity.

00:46:52 --> 00:46:58
When does a particular activity begin, when does it end?

00:47:00 --> 00:47:04
What's all the gray areas when you're partially engaging

00:47:03 --> 00:47:06
in that activity and so on?

00:47:05 --> 00:47:08
When you start to annotate these things,

00:47:07 --> 00:47:09
when you start to try to do the detection

00:47:08 --> 00:47:13
it becomes clear that sometimes the activity

00:47:13 --> 00:47:17
is partially undertaken and the beginning

00:47:16 --> 00:47:18
and the end is fuzzy.

00:47:19 --> 00:47:22
Future impact, utopia, dystopia, and middle path.

00:47:21 --> 00:47:26
So the impact here comes from being able

00:47:25 --> 00:47:29
to understand the world in time

00:47:28 --> 00:47:31
and be able to predict.

00:47:31 --> 00:47:34
The utopian possibilities

00:47:33 --> 00:47:37
is that the contextual perception

00:47:36 --> 00:47:39
that can occur from here can enrich

00:47:38 --> 00:47:41
the experience between the human and robot.

00:47:40 --> 00:47:44
The dystopian view, the flip side,

00:47:43 --> 00:47:48
is being able to understand sort of human activities

00:47:47 --> 00:47:51
can let the robots severe the relationship.

00:47:50 --> 00:47:55
So it can damage the human-robot interaction

00:47:54 --> 00:47:58
to where they just do their own thing.

00:47:57 --> 00:48:00
The middle path is just finding useful information

00:47:59 --> 00:48:02
in massive amounts of data like YouTube.

00:48:01 --> 00:48:04
Now there's a YouTube video data set,

00:48:03 --> 00:48:07
being able to identify what's going on in this video,

00:48:06 --> 00:48:11
be able to infer rich, useful semantic information.

00:48:10 --> 00:48:13
And so what do we do with video,

00:48:12 --> 00:48:15
how do we do perception in video?

00:48:14 --> 00:48:18
Now, the recent breakthrough came with deep learning

00:48:17 --> 00:48:21
and C3D, this 3D convolution of neural networks

00:48:20 --> 00:48:22
that take a sequence of images

00:48:21 --> 00:48:24
and they're able to determine the action

00:48:23 --> 00:48:27
that's going on and intent, what's going on in the video.

00:48:26 --> 00:48:30
That was a recent breakthrough.

00:48:29 --> 00:48:33
The state-of-the-art coming from a slightly,

00:48:32 --> 00:48:35
well, from a different architecture

00:48:34 --> 00:48:39
that takes in two streams, one is the image RGB data,

00:48:38 --> 00:48:41
the other is optical flow data

00:48:40 --> 00:48:43
that's really focusing on the motion in the image,

00:48:42 --> 00:48:45
those are the two that's opened the wave

00:48:44 --> 00:48:47
of two-stream networks.

00:48:46 --> 00:48:50
Here from that paper showing the different architectures.

00:48:51 --> 00:48:55
On the far right is the two-stream architecture

00:48:54 --> 00:49:00
and the C3D shown under B here,

00:48:59 --> 00:49:01
taking the sequence of images.

00:49:00 --> 00:49:03
But all these are just different architectures,

00:49:02 --> 00:49:06
and then the first one is LSTM's,

00:49:05 --> 00:49:08
there's different architectures of how do you

00:49:08 --> 00:49:11
allow a network, how do you allow a learning model

00:49:10 --> 00:49:14
to be able to capture dynamics in the data?

00:49:14 --> 00:49:17
The future possibilities, it has to do,

00:49:16 --> 00:49:19
well, literally with the future,

00:49:18 --> 00:49:21
being able to take single images

00:49:20 --> 00:49:24
or sequences of images and predicting the future.

00:49:23 --> 00:49:27
It's very interesting to think about,

00:49:26 --> 00:49:29
in our ability to hallucinate the future

00:49:28 --> 00:49:33
and generate the future from images,

00:49:32 --> 00:49:35
you start to think about what are

00:49:34 --> 00:49:37
the defining qualities of activities

00:49:36 --> 00:49:39
and in this way augment data and be able

00:49:38 --> 00:49:43
to train much more accurate action recognition systems.

00:49:42 --> 00:49:47
Topics not covered is the localization of activity in video,

00:49:46 --> 00:49:50
so action recognition purely defined

00:49:49 --> 00:49:51
is I give you a clip and you tell me

00:49:50 --> 00:49:54
what's going on on this clip.

00:49:53 --> 00:49:56
Now, if you take actually a full YouTube video,

00:49:55 --> 00:49:57
you want to be able to localize,

00:49:56 --> 00:50:01
find all the times when a particular activity is going on.

00:50:00 --> 00:50:03
It could be multi-label, multiple activities going on

00:50:02 --> 00:50:07
at the same time, beginning and ending asynchronously.

00:50:07 --> 00:50:13
And then there is more richly three-dimensional

00:50:12 --> 00:50:16
or 2D classification of activity

00:50:15 --> 00:50:17
based on human movement.

00:50:16 --> 00:50:21
So looking at like from a Kinect, from 3D sensors,

00:50:20 --> 00:50:24
looking at skeleton-based action recognition

00:50:23 --> 00:50:26
from sensors that provide you more

00:50:25 --> 00:50:31
than just the 2D image data.

00:50:30 --> 00:50:33
The open problems is that

00:50:33 --> 00:50:36
it's activity recognition is more

00:50:35 --> 00:50:40
than just the way we move our body

00:50:39 --> 00:50:43
or if it's baseball, like a ball in your hand

00:50:42 --> 00:50:46
hitting it with a baseball bat.

00:50:45 --> 00:50:48
It also has to do with context.

00:50:47 --> 00:50:51
There's sitting down or working

00:50:50 --> 00:50:54
or looking at something and picking up an item.

00:50:53 --> 00:50:57
Those sometimes can change profoundly

00:50:56 --> 00:50:59
based on the other objects in the scene,

00:50:58 --> 00:51:02
on the activity of other people in the scene.

00:51:01 --> 00:51:04
And so being able to work with that kind of context

00:51:03 --> 00:51:06
is a totally open problem.

00:51:05 --> 00:51:09
It's having to reduce a very complex

00:51:08 --> 00:51:12
real-world context into something

00:51:11 --> 00:51:15
where you can clearly identify an activity.

00:51:15 --> 00:51:19
Body pose estimation is the task

00:51:18 --> 00:51:24
of localizing the joints that form the skeleton

00:51:24 --> 00:51:27
of the human body.

00:51:26 --> 00:51:29
So infer from visual information

00:51:28 --> 00:51:31
the positions of the different joints.

00:51:31 --> 00:51:34
Along the line of complexity,

00:51:33 --> 00:51:35
it's important in being able to understand

00:51:34 --> 00:51:39
the body language, the rich information

00:51:38 --> 00:51:41
about the body of the human being.

00:51:40 --> 00:51:44
So that's from reading body language

00:51:43 --> 00:51:48
to animation to aiding activity recognition,

00:51:47 --> 00:51:50
and it is just the useful representation

00:51:50 --> 00:51:55
of the human body if you're analyzing pedestrians

00:51:54 --> 00:51:58
or interactive environments, human-robot interaction,

00:51:57 --> 00:52:00
being able to understand what the heck it is

00:51:59 --> 00:52:02
the human is trying to do,

00:52:01 --> 00:52:04
a body pose is really useful.

00:52:04 --> 00:52:08
It's hard because the body,

00:52:07 --> 00:52:12
when you look at a 2D image projection of the body

00:52:11 --> 00:52:16
there's a lot of, it's a highly dimensional

00:52:15 --> 00:52:17
optimization problem figuring out

00:52:17 --> 00:52:22
how the raw pixels match to the actual three-dimensional

00:52:21 --> 00:52:25
orientation of the human joints.

00:52:24 --> 00:52:27
And the usual computer vision challenges

00:52:26 --> 00:52:29
of pose, lighting, and so on.

00:52:28 --> 00:52:33
Future impact is it's really exciting

00:52:32 --> 00:52:35
for interactive environments

00:52:34 --> 00:52:37
for our robot to be able to know

00:52:36 --> 00:52:39
the position of the human body,

00:52:38 --> 00:52:40
whether it's just trying to interact,

00:52:39 --> 00:52:42
whether it's a robot that's trying

00:52:41 --> 00:52:45
to get their favorite human a beer

00:52:44 --> 00:52:48
or whatever your choice of, favorite choice of drink,

00:52:47 --> 00:52:50
you have to be able to find where their hand is

00:52:49 --> 00:52:51
o you can do the trade off.

00:52:50 --> 00:52:54
Same thing in the car, you have to determine

00:52:53 --> 00:52:57
if the person's hand's on the steering wheel,

00:52:56 --> 00:53:00
if their head and orientation is such

00:52:59 --> 00:53:02
that they're able to physically take control of the vehicle.

00:53:01 --> 00:53:04
That's a really exciting set of possibilities there.

00:53:03 --> 00:53:08
And there's applications in sports and CGI

00:53:07 --> 00:53:10
in video games and all aspects

00:53:09 --> 00:53:12
when the robot and human have to work together.

00:53:11 --> 00:53:14
The dystopian view, you can imagine,

00:53:13 --> 00:53:18
is, of course, being able to localize all those joints

00:53:17 --> 00:53:22
means robots that are able to more effectively hurt humans,

00:53:21 --> 00:53:25
and so that's always a huge concern

00:53:24 --> 00:53:30
and always a dark dystopian view of the world

00:53:29 --> 00:53:31
with so much AI in it.

00:53:30 --> 00:53:33
Of course, the reality is it's just more

00:53:32 --> 00:53:37
rich, fulfilling HCI that takes advantage

00:53:36 --> 00:53:40
of not just the face, stuff coming from the face,

00:53:39 --> 00:53:43
but also stuff about the body of the human

00:53:42 --> 00:53:45
that the robot is interacting with.

00:53:44 --> 00:53:49
So it started with deep learning being applied

00:53:48 --> 00:53:51
to the body pose estimation problem,

00:53:50 --> 00:53:53
2014 with DeepPose.

00:53:53 --> 00:53:55
The key ideas there is looking

00:53:54 --> 00:53:58
at the holistic human pose estimation problem

00:53:57 --> 00:54:01
of detecting all the different joints

00:54:00 --> 00:54:03
of a single person in an image.

00:54:02 --> 00:54:05
Power of deep learning is that you

00:54:04 --> 00:54:07
no longer have to do hand crafted,

00:54:06 --> 00:54:09
expert-engineered features,

00:54:08 --> 00:54:11
that it automatically determines the set of features,

00:54:10 --> 00:54:13
all the parts are being detected for you.

00:54:12 --> 00:54:17
So this highly complex problem is all solved with data.

00:54:16 --> 00:54:20
This is the state-of-the-art

00:54:19 --> 00:54:23
of the 2017 and beyond there's been

00:54:22 --> 00:54:26
a few papers from CMU along this line

00:54:25 --> 00:54:30
is doing real-time multi-person 2D pose estimation,

00:54:29 --> 00:54:33
but in a bottom-up way where you're detecting

00:54:32 --> 00:54:36
individual joints first.

00:54:35 --> 00:54:37
So all the knees in the picture,

00:54:36 --> 00:54:40
all the elbows, all the shoulders,

00:54:39 --> 00:54:42
all the wrists, and so on,

00:54:41 --> 00:54:43
and then stitching them together

00:54:42 --> 00:54:45
using parts affinity fields.

00:54:45 --> 00:54:50
So if you find 17 elbows in a picture,

00:54:49 --> 00:54:53
you then have to try to see which elbow

00:54:52 --> 00:54:55
belongs to which person.

00:54:54 --> 00:54:58
So that actually turns out to be extremely powerful

00:54:57 --> 00:55:00
way to detect, especially multi-pose,

00:54:59 --> 00:55:03
especially to deal with occlusions

00:55:02 --> 00:55:06
way of detecting body pose.

00:55:05 --> 00:55:09
It's really interesting and also is able to,

00:55:08 --> 00:55:13
because of that, because of the separation of the detections

00:55:12 --> 00:55:15
is able to run in real-time,

00:55:14 --> 00:55:17
which is also really exciting.

00:55:17 --> 00:55:23
Possible future direction is using much more information,

00:55:22 --> 00:55:26
using deformable models of the human body,

00:55:25 --> 00:55:31
so not just the skeleton, rich volumetric information

00:55:30 --> 00:55:35
to do the detection and then optimizing

00:55:34 --> 00:55:39
for what's the most likely orientation of the body.

00:55:40 --> 00:55:42
The open problems in the field

00:55:41 --> 00:55:47
is the fact that pose is not a thing

00:55:46 --> 00:55:49
that happens in a single image,

00:55:48 --> 00:55:52
pose that happens is part of human behavior

00:55:51 --> 00:55:53
and part of movement through time.

00:55:52 --> 00:55:57
So here Monty Python Ministry of Silly Walks,

00:55:56 --> 00:55:59
people walking funny ways,

00:55:58 --> 00:56:02
so we collect a lot of data on pedestrians

00:56:01 --> 00:56:04
and can tell you that people walk in different ways

00:56:03 --> 00:56:07
and people position their body in different ways.

00:56:06 --> 00:56:11
And so the temporal aspects of human emotion are

00:56:11 --> 00:56:14
for the most not incorporated

00:56:13 --> 00:56:17
in the body pose estimation problem and they should be.

00:56:16 --> 00:56:18
There's a lot of exciting possibilities

00:56:17 --> 00:56:21
of capturing the temporal dynamics.

00:56:23 --> 00:56:27
There's a lot of awesome slides here

00:56:26 --> 00:56:29
that I'm just skipping through.

00:56:28 --> 00:56:31
Speech recognition.

00:56:31 --> 00:56:35
2018 was really big for

00:56:34 --> 00:56:39
Recommender systems for Netflix,

00:56:38 --> 00:56:40
OkCupid.

00:56:42 --> 00:56:44
AI for president.

00:56:45 --> 00:56:48
Each one of the things I mentioned briefly today

00:56:47 --> 00:56:51
will have a separate mini lecture.

00:56:50 --> 00:56:53
I taught an entire course on this at CHI last year.

00:56:52 --> 00:56:55
So deep learning for understanding the human

00:56:54 --> 00:56:57
is a topic I'm really excited about,

00:56:56 --> 00:56:59
because it's really the first step

00:56:58 --> 00:57:02
for a machine to be able to interact

00:57:01 --> 00:57:04
in a rich way with a human being, is to understand it.

00:57:03 --> 00:57:06
And it's also area where the most

00:57:05 --> 00:57:08
near-term impact can happen,

00:57:07 --> 00:57:10
a system to be able to effectively detect

00:57:09 --> 00:57:12
what a human being is up to,

00:57:11 --> 00:57:14
what they're thinking about,

00:57:13 --> 00:57:19
how to best serve them and enrich the experience

00:57:19 --> 00:57:22
of interacting with that human.

00:57:21 --> 00:57:25
Let me jump to AI safety

00:57:24 --> 00:57:28
and then the interactive experience with humans and robots

00:57:27 --> 00:57:32
to just give examples of some work in that direction

00:57:31 --> 00:57:34
and some research in that direction

00:57:33 --> 00:57:36
I'm really excited about.

00:57:35 --> 00:57:40
So AI's safety, at the very basic level

00:57:39 --> 00:57:43
there is an AI system that's making decisions

00:57:42 --> 00:57:46
where we want human beings to supervise those decisions.

00:57:45 --> 00:57:50
We've done quite a bit of work here at MIT on that aspect

00:57:49 --> 00:57:53
of supervising machines with arguing machines,

00:57:52 --> 00:57:56
and OpenAI has done work with safety

00:57:56 --> 00:58:01
by having machines debate each other.

00:58:00 --> 00:58:06
So this kind of idea that you can achieve safety

00:58:05 --> 00:58:10
by not giving ultimate power to any one decision maker.

00:58:09 --> 00:58:14
And the disagreement that emerges

00:58:13 --> 00:58:18
from two AI systems or multiple AI systems,

00:58:17 --> 00:58:22
having to make decisions and agree with each other,

00:58:21 --> 00:58:26
it allows us to then produce a signal of uncertainty

00:58:25 --> 00:58:28
based on which the human supervision could be sought.

00:58:27 --> 00:58:32
Without that, when we have a state-of-the-art

00:58:31 --> 00:58:35
black box AI system that does something like drive a car,

00:58:34 --> 00:58:38
all we have is a system that just runs

00:58:37 --> 00:58:39
and we're supposed to have faith

00:58:38 --> 00:58:41
at it's always going to be right.

00:58:40 --> 00:58:43
We don't have any uncertainty signal

00:58:42 --> 00:58:44
coming from the system.

00:58:44 --> 00:58:47
So the idea of arguing machines

00:58:47 --> 00:58:50
that we've developed and been working on

00:58:49 --> 00:58:52
is to have multiple AI system,

00:58:51 --> 00:58:56
an ensemble of AI systems where the disagreement,

00:58:55 --> 00:58:57
when there's a disagreement detected

00:58:56 --> 00:58:59
human supervision is sought.

00:58:58 --> 00:59:02
And the idea there is that when you have a system

00:59:01 --> 00:59:06
like Tesla Autopilot, here we have instrumented

00:59:05 --> 00:59:07
a Tesla vehicle.

00:59:07 --> 00:59:09
When you have a system like Tesla Autopilot,

00:59:08 --> 00:59:13
it's telling you nothing about uncertain it is

00:59:12 --> 00:59:15
about the decision it's making,

00:59:14 --> 00:59:18
it just knows once the system is on

00:59:17 --> 00:59:20
it's now steering the car for you.

00:59:19 --> 00:59:23
And in very rare cases this is just disengage.

00:59:22 --> 00:59:25
But no matter what, it's not showing to you

00:59:24 --> 00:59:27
the degree of uncertainty it has

00:59:26 --> 00:59:28
about the world around it.

00:59:27 --> 00:59:31
And so the way create that signal of uncertainty

00:59:30 --> 00:59:34
is by adding another, in this case end-to-end

00:59:33 --> 00:59:37
vision system that's looking at the external environment

00:59:36 --> 00:59:38
and making steering decisions,

00:59:37 --> 00:59:39
and whenever there's a disagreement

00:59:38 --> 00:59:41
between the two detected, that's when

00:59:40 --> 00:59:43
human supervision is sought.

00:59:42 --> 00:59:46
And we can predict in this way,

00:59:46 --> 00:59:51
shown in the plot there is we can predict

00:59:50 --> 00:59:56
with high accuracy the times when the driver

00:59:55 --> 00:59:57
chose to disengage the system

00:59:56 --> 00:59:59
because they were uncomfortable.

00:59:58 --> 01:00:01
So you're detecting, you're using this mechanism

01:00:00 --> 01:00:05
to detect risky, challenging situations.

01:00:04 --> 01:00:10
It's an idea about how we supervise AI

01:00:09 --> 01:00:12
by having multiple AI systems

01:00:11 --> 01:00:15
that independent and through their disagreement

01:00:14 --> 01:00:17
emerges the uncertainty signal.

01:00:17 --> 01:00:20
And we can apply this like the AI folks

01:00:19 --> 01:00:23
in natural language would debate,

01:00:22 --> 01:00:25
we can apply in computer vision as well,

01:00:24 --> 01:00:29
taking two independently trained

01:00:28 --> 01:00:32
but on the same training set networks,

01:00:31 --> 01:00:35
ResNet and VGGNet trained on ImageNet,

01:00:34 --> 01:00:38
and we can have them argue,

01:00:37 --> 01:00:41
and in the process improve significantly the accuracy.

01:00:40 --> 01:00:45
So in the case of ResNet is an architecture,

01:00:44 --> 01:00:47
VGGNet is an architecture

01:00:46 --> 01:00:50
trained on the ImageNet training data set.

01:00:49 --> 01:00:54
They separately have a certain error,

01:00:53 --> 01:00:57
ResNet has an error of 8%,

01:00:56 --> 01:00:59
VGG-16 has an error of 10%.

01:00:58 --> 01:01:02
When we apply the arguing machines framework,

01:01:01 --> 01:01:05
when the disagreement is brought to the human,

01:01:04 --> 01:01:07
that error rate decreases to 2.8%.

01:01:07 --> 01:01:12
Now, this is just ImageNet challenge,

01:01:11 --> 01:01:15
but if that error meant the loss of human life,

01:01:14 --> 01:01:18
this kind of framework is really powerful

01:01:17 --> 01:01:22
for overseeing the operation of the AI system.

01:01:21 --> 01:01:25
Yeah, just examples where they disagree.

01:01:24 --> 01:01:28
So taking this image that's from ImageNet.

01:01:27 --> 01:01:30
The ground truth is a wine bottle

01:01:29 --> 01:01:32
and ResNet prediction is that it's a,

01:01:31 --> 01:01:35
definitely, .93, 93% confidence

01:01:34 --> 01:01:36
that it's a paper towel,

01:01:35 --> 01:01:40
and VGGNet, 25% confidence that it's a seat belt.

01:01:39 --> 01:01:42
So these disagreements are then brought in

01:01:41 --> 01:01:46
and then we, the fact that they disagree

01:01:45 --> 01:01:51
arises the uncertainty and then human supervision

01:01:50 --> 01:01:52
is brought and then humans are able

01:01:51 --> 01:01:56
to annotate correctly what's going on in this picture.

01:01:55 --> 01:01:57
Same thing here, mailbox,

01:01:56 --> 01:01:59
the ground truth is a mailbox.

01:01:59 --> 01:02:02
Again, the two architectures disagree.

01:02:01 --> 01:02:05
One says traffic light, the other one says garbage truck.

01:02:05 --> 01:02:09
For an autonomous vehicle you can imagine

01:02:08 --> 01:02:12
this being problematic, if that's a traffic light

01:02:11 --> 01:02:15
you might stop for this mailbox, that kind of thing.

01:02:14 --> 01:02:18
That's early research in the field

01:02:17 --> 01:02:21
of how do we have AI systems that are more

01:02:20 --> 01:02:26
and more powerful, we can also inject human effort

01:02:25 --> 01:02:28
o supervise when it's needed.

01:02:27 --> 01:02:30
The one that's needed part, the uncertainty signal,

01:02:29 --> 01:02:31
is the critical thing.

01:02:30 --> 01:02:33
So we have to figure out ways to create

01:02:32 --> 01:02:35
that uncertainty signal.

01:02:34 --> 01:02:39
The subarea of just creating a rich human interaction.

01:02:38 --> 01:02:41
- [Black Betty] Lex, you appear distracted,

01:02:40 --> 01:02:42
would you like me to take over?

01:02:41 --> 01:02:43
- So this is, we're doing a lot of testing

01:02:42 --> 01:02:46
with autonomous vehicles here, I'm tweeting.

01:02:45 --> 01:02:48
- [Black Betty] Great, I am taking control

01:02:47 --> 01:02:50
of steering and braking.

01:02:49 --> 01:02:53
- So we have a human-centered autonomous vehicle here

01:02:52 --> 01:02:54
at MIT that's taking control back

01:02:53 --> 01:02:57
and forth from the human based on the activity.

01:02:57 --> 01:02:59
It's now in control.

01:02:58 --> 01:03:01
That's just me explaining the video.

01:03:00 --> 01:03:05
The point is that the driving experience,

01:03:04 --> 01:03:07
the human-robot interaction experience

01:03:06 --> 01:03:12
should be fun and awesome and enriching to life,

01:03:11 --> 01:03:16
and that's why you would want to use these kinds of systems.

01:03:16 --> 01:03:18
We have a bunch of videos online,

01:03:17 --> 01:03:21
you can check 'em out, including ridiculous one

01:03:20 --> 01:03:23
of me playing guitar, and there's a paper

01:03:22 --> 01:03:25
along with this, describing different principles

01:03:24 --> 01:03:28
of how we have humans robots work together

01:03:27 --> 01:03:30
in this kind of way.

01:03:29 --> 01:03:33
There's a lot of totally untouched problems in that space.

01:03:32 --> 01:03:36
Most of the robotics community and the machine learning

01:03:35 --> 01:03:39
community approaches AI as a system

01:03:38 --> 01:03:40
that we want to make perfect.

01:03:40 --> 01:03:44
And once it's perfect, we want to then

01:03:43 --> 01:03:45
put it in the real world where us humans

01:03:44 --> 01:03:47
get to interact with it.

01:03:46 --> 01:03:52
Just like, what is it, Robin Williams in Good Will Hunting

01:03:53 --> 01:03:57
talking about relationships, that nobody's perfect.

01:03:58 --> 01:04:02
The way I foresee it, AI systems will not be perfect

01:04:01 --> 01:04:03
for the next hundred years,

01:04:02 --> 01:04:06
and so we have to have humans and AI system work together

01:04:05 --> 01:04:09
and optimize that problem, solve that problem,

01:04:08 --> 01:04:11
that both of us are flawed,

01:04:10 --> 01:04:15
but together there's something enriching to both.

01:04:14 --> 01:04:17
As I mentioned, the videos here

01:04:16 --> 01:04:18
will be available online.

01:04:17 --> 01:04:20
The lectures underlying all the deep learning

01:04:19 --> 01:04:22
for understanding the human

01:04:21 --> 01:04:24
d underlying the five principles here

01:04:23 --> 01:04:25
of human-centered AI,

01:04:24 --> 01:04:29
and it's a area of active research here at MIT

01:04:28 --> 01:04:31
and globally, and it's one that

01:04:30 --> 01:04:33
I'm extremely passionate about.

01:04:32 --> 01:04:37
And one of the analogies that I think about

01:04:36 --> 01:04:39
when I think about the success

01:04:38 --> 01:04:41
of artificial intelligence systems

01:04:40 --> 01:04:46
as an analogy of parasitism and symbiosis.

01:04:46 --> 01:04:50
A lot of the ways we're training machine learning

01:04:49 --> 01:04:55
algorithms now is we inject a lot of human labor,

01:04:54 --> 01:04:58
a lot of really costly human labor separately offline

01:04:57 --> 01:05:02
out of the loop in order to improve the learning models

01:05:01 --> 01:05:04
through brute-force annotation.

01:05:03 --> 01:05:07
And what I see is success in the future

01:05:07 --> 01:05:11
quires that the learning is done,

01:05:10 --> 01:05:15
the models improve in a symbiotic way,

01:05:14 --> 01:05:17
as a side effect of interacting with humans.

01:05:16 --> 01:05:19
This is done a lot now in reinforcement learning

01:05:18 --> 01:05:21
through game playing and so on,

01:05:20 --> 01:05:26
but the human computation, the human effort of annotation

01:05:25 --> 01:05:29
is something that happens naturally through interaction,

01:05:28 --> 01:05:31
not a costly thing you have to pay for.

01:05:30 --> 01:05:35
Because when it happens naturally in a symbiotic way

01:05:34 --> 01:05:39
we can increase scale, we can scale learning

01:05:38 --> 01:05:40
to a degree that's required to solve

01:05:39 --> 01:05:42
some of the real-world problems.

01:05:41 --> 01:05:45
And that also requires solving

01:05:44 --> 01:05:49
a lot of aspects of human-robot interaction,

01:05:48 --> 01:05:52
from understanding our own brain,

01:05:51 --> 01:05:56
from the biological to the electrical and neuroscience,

01:05:55 --> 01:05:58
to the behavioral aspects captured

01:05:57 --> 01:06:01
by cognitive science, psychology, sociology,

01:06:00 --> 01:06:04
to the mathematical formulations of behavior

01:06:03 --> 01:06:07
and game theory, to when you take

01:06:06 --> 01:06:09
that human behavior and put it in the real world

01:06:08 --> 01:06:12
with engineering systems, human factors and design.

01:06:11 --> 01:06:14
These are all giant subfields with conferences

01:06:13 --> 01:06:17
and papers, that all of them need to work together.

01:06:16 --> 01:06:19
And then on the computer science side

01:06:18 --> 01:06:21
with natural language processing,

01:06:20 --> 01:06:24
understanding language, the human-robot interaction,

01:06:23 --> 01:06:25
the human-computer interaction,

01:06:24 --> 01:06:29
and just the interfaces, how does

01:06:28 --> 01:06:33
and what does the computer, the robot show to you?

01:06:32 --> 01:06:34
Again, entire conferences.

01:06:33 --> 01:06:37
And then the exciting aspects of learning from data

01:06:36 --> 01:06:40
nd deep learning and learning to act from data

01:06:39 --> 01:06:43
nd reinforcement learning, deep reinforcement learning.

01:06:42 --> 01:06:46
And then the robotics is actually building these things,

01:06:45 --> 01:06:51
building the hardware, again, an entire area,

01:06:51 --> 01:06:53
exciting field of research.

01:06:52 --> 01:06:55
All of them have to work together

01:06:54 --> 01:06:58
to create systems here that integrate

01:06:57 --> 01:06:59
the human during the learning process

01:06:58 --> 01:07:03
and integrate the human during the operation process.

01:07:02 --> 01:07:07
So the video's on deeplearning.mit.edu,

01:07:06 --> 01:07:09
videos and slide available there,

01:07:08 --> 01:07:11
code is available there.

01:07:10 --> 01:07:14
With that, I'd like to thank you very much.

01:07:14 --> 01:07:18
(audience applauds)

<!-- YOUTUBE_TRANSCRIPT_END -->
