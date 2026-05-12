---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "QDzM8r3WgBw"
title: "MIT 6.S094: Deep Reinforcement Learning for Motion Planning"
video_url: "https://www.youtube.com/watch?v=QDzM8r3WgBw"
thumbnail_url: "https://i.ytimg.com/vi/QDzM8r3WgBw/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=QDzM8r3WgBw"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2017-01-22T16:34:30.000Z"
upload_date: "2017-01-22"
duration_seconds: 5250
duration_human: "1:27:30"
view_count: 241013
like_count: 2564
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:22:48.770Z"
---

# MIT 6.S094: Deep Reinforcement Learning for Motion Planning

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=QDzM8r3WgBw
- video_id: QDzM8r3WgBw
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2017-01-22T16:34:30.000Z
- upload_date: 2017-01-22
- duration: 1:27:30
- view_count: 241013
- like_count: 2564
- has_subtitle: true
- language: en
- availability: public
- tags: mit, deep learning, self-driving cars, deep reinforcement learning, deeptraffic, q-learning, deeptrafficjs, convnetjs
- categories: Science & Technology

## Description

This is lecture 2 of course 6.S094: Deep Learning for Self-Driving Cars taught in Winter 2017. This lecture introduces types of machine learning, the neuron as a computational building block for neural nets, q-learning, deep reinforcement learning, and the DeepTraffic simulation that utilizes deep reinforcement learning for the motion planning task.

INFO:
Slides: http://bit.ly/2H8Fs7g
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

00:00:00 --> 00:00:03
All right. Hello everybody. Welcome back.

00:00:03 --> 00:00:05
Glad you came back.

00:00:05 --> 00:00:07
Today,

00:00:08 --> 00:00:13
we will unveil the first tutorial.

00:00:12 --> 00:00:18
The first project is DeepTraffic, code named "DeepTraffic,"

00:00:17 --> 00:00:20
where your task is to solve the

00:00:21 --> 00:00:24
traffic problem using Deep Reinforcement Learning.

00:00:25 --> 00:00:29
And I'll talk about what's involved in designing a network there.

00:00:29 --> 00:00:34
How you submit your own network and how you participate in the competition.

00:00:36 --> 00:00:39
As I said the winner gets a very special prize,

00:00:39 --> 00:00:41
to be announced later.

00:00:42 --> 00:00:44
What is machine learning?

00:00:44 --> 00:00:46
Several types.

00:00:46 --> 00:00:51
There's supervised learning, as I mentioned yesterday that's what it meant,

00:00:50 --> 00:00:53
usually when you discuss about,

00:00:53 --> 00:00:55
you talk about, machine learning

00:00:54 --> 00:00:56
and talk about its successes.

00:00:56 --> 00:00:59
Supervised learning requires a data set

00:00:59 --> 00:01:02
where you know the Ground Truth.

00:01:01 --> 00:01:04
You know the inputs and the outputs.

00:01:05 --> 00:01:09
And you provide that to the machine learning algorithm

00:01:08 --> 00:01:14
in order to learn the mapping between the inputs and the outputs

00:01:13 --> 00:01:19
in such a way that you can generalize to further examples in the future.

00:01:19 --> 00:01:21
On supervised learning,

00:01:21 --> 00:01:23
it's the other side,

00:01:23 --> 00:01:29
when you know absolutely nothing about the outputs.

00:01:28 --> 00:01:32
About the truth of the data that you're working with.

00:01:31 --> 00:01:38
All you get is data and you have to find underlying structure,

00:01:38 --> 00:01:42
underlying representation of the data that's meaningful

00:01:42 --> 00:01:46
for you to accomplish certain tasks, whatever that is.

00:01:46 --> 00:01:48
There is semi-supervised data,

00:01:48 --> 00:01:52
or only parts, usually a very small amount

00:01:53 --> 00:02:00
is labeled as Ground Truth of available for just a small fraction of it

00:01:59 --> 00:02:00
If you think of

00:02:01 --> 00:02:04
images that are out there on the Internet

00:02:04 --> 00:02:09
and then you think about ImageNet, a data set where every image is labeled,

00:02:09 --> 00:02:12
the size of that ImageNet data set

00:02:12 --> 00:02:19
is a tiny subset of all the images available online.

00:02:19 --> 00:02:24
But that's the task we're dealing with as human beings,

00:02:23 --> 00:02:26
as people interested in doing machine learning

00:02:26 --> 00:02:32
is how to expand the size of that,

00:02:33 --> 00:02:38
of the part of our data that we know something confidently about.

00:02:39 --> 00:02:42
And reinforcement learning sit somewhere in between.

00:02:43 --> 00:02:48
It's semi supervised learning where

00:02:50 --> 00:02:53
there's an agent that has to exist in the world.

00:02:54 --> 00:03:00
And that agent know the inputs that the world provides

00:03:00 --> 00:03:05
but knows very little about that world

00:03:04 --> 00:03:09
except through occasional time delayed rewards.

00:03:09 --> 00:03:12
This is what it's like to be human.

00:03:12 --> 00:03:14
This is what life is about.

00:03:14 --> 00:03:18
You don't know what's good and bad, you got to have to just live it

00:03:18 --> 00:03:20
and, every once in a while,

00:03:21 --> 00:03:26
you find out that all that stuff you did last week was pretty bad idea.

00:03:26 --> 00:03:28
That's reinforcement learning.

00:03:27 --> 00:03:31
That's semi-supervised,

00:03:31 --> 00:03:35
in the sense that only a small subset of the data

00:03:34 --> 00:03:37
comes with some ground truth, some certainty,

00:03:36 --> 00:03:40
you have to, then extract knowledge from.

00:03:41 --> 00:03:46
So first at the core of anything that works currently

00:03:46 --> 00:03:49
in terms of, in the practical sense,

00:03:49 --> 00:03:51
there has to be some Ground Truth.

00:03:51 --> 00:03:53
There has to be some truth

00:03:53 --> 00:03:57
at we can hold on to as we try to generalize.

00:03:58 --> 00:04:00
And that supervised learning.

00:04:00 --> 00:04:02
Even as in Reinforcement Learning,

00:04:01 --> 00:04:04
the only thing we can count on is that truth

00:04:04 --> 00:04:06
at comes in the form of a reward.

00:04:07 --> 00:04:10
So the standard supervised learning pipeline is

00:04:10 --> 00:04:12
you have some raw data,

00:04:12 --> 00:04:14
the inputs.

00:04:14 --> 00:04:17
you have Ground Truth,

00:04:16 --> 00:04:18
the labels,

00:04:18 --> 00:04:21
the outputs and matches to the inputs.

00:04:21 --> 00:04:22
You know of ground truth.

00:04:22 --> 00:04:27
Then you run any kind of algorithm, whether it's a neural network

00:04:27 --> 00:04:30
or another pre-processing algorithm

00:04:29 --> 00:04:32
that extracts the features from that data set.

00:04:32 --> 00:04:35
You can think of a picture of a face,

00:04:35 --> 00:04:38
that algorithm could extract

00:04:37 --> 00:04:42
he nose, the eyes, the corners of the eyes, the pupil

00:04:42 --> 00:04:47
or even lower level features in that image.

00:04:47 --> 00:04:51
After that we insert those features

00:04:53 --> 00:04:55
into a model.

00:04:55 --> 00:04:58
A machine learning model. We train that model.

00:05:01 --> 00:05:05
Then we, whatever that algorithm is

00:05:05 --> 00:05:09
as it passes through that training process, we then evaluate.

00:05:09 --> 00:05:13
After we've seen this one particular example,

00:05:13 --> 00:05:17
how much better are we at other tasks?

00:05:18 --> 00:05:21
And as we repeat this loop,

00:05:21 --> 00:05:24
the model learns to perform better and better

00:05:24 --> 00:05:29
at generalizing from the raw data to the labels that we have.

00:05:29 --> 00:05:34
And finally, you get to release that model into the wild

00:05:33 --> 00:05:35
to actually do prediction

00:05:35 --> 00:05:40
data as never seen before that you don't know about.

00:05:41 --> 00:05:44
And the task there

00:05:46 --> 00:05:49
is to predict the labels.

00:05:51 --> 00:05:56
Okay. So neural networks is what this class is about.

00:05:56 --> 00:06:00
It's one of the machine learning algorithms

00:05:59 --> 00:06:02
that has proven to be very successful.

00:06:04 --> 00:06:09
And the computational building block of a neural network is a neuron.

00:06:10 --> 00:06:14
A perceptron is a type of neuron.

00:06:15 --> 00:06:18
It's the original old school neuron

00:06:18 --> 00:06:22
where the output is binary, a zero or one.

00:06:22 --> 00:06:24
It's not real valued.

00:06:25 --> 00:06:30
And the process that a perceptron goes through is

00:06:30 --> 00:06:36
it has multiple inputs and a single output.

00:06:38 --> 00:06:41
Each of the inputs have weights on them.

00:06:41 --> 00:06:46
Shown here on the left is 0.7, 0.6, 1.4.

00:06:46 --> 00:06:48
Those weights are applied to the inputs.

00:06:48 --> 00:06:52
And a perceptron, the inputs are 1s or 0s -

00:06:52 --> 00:06:53
binary.

00:06:54 --> 00:06:56
When those weights are applied

00:06:58 --> 00:07:04
and then summed together a bias on each neuron

00:07:04 --> 00:07:06
is then added on top

00:07:07 --> 00:07:11
and a threshold,

00:07:12 --> 00:07:15
there's a test, whether that summed value

00:07:14 --> 00:07:18
plus the bias is below or above a threshold.

00:07:17 --> 00:07:20
If it's above a threshold, produces a 1;

00:07:20 --> 00:07:22
below a threshold produces a 0.

00:07:22 --> 00:07:23
Simple.

00:07:24 --> 00:07:29
So one of the only things we understand about neural networks confidently,

00:07:28 --> 00:07:31
we can prove a lot of things about this neuron.

00:07:35 --> 00:07:39
For example, what we know

00:07:40 --> 00:07:44
is that a neuron can approximate a NAND gate.

00:07:44 --> 00:07:52
A NAND gate is a logical operation,

00:07:51 --> 00:07:55
a logical function, that takes as input,

00:07:55 --> 00:07:58
has two inputs A and B,

00:07:57 --> 00:08:00
here on the on the diagram in the left.

00:08:01 --> 00:08:04
And the table shows what that function is

00:08:04 --> 00:08:08
when the inputs are 0s, 01,

00:08:08 --> 00:08:11
in any order, the output is a 1.

00:08:10 --> 00:08:13
Otherwise, it's a 0.

00:08:14 --> 00:08:20
The cool thing about a NAND gate is that it's a universal gate

00:08:20 --> 00:08:24
that you can build up any computer you have

00:08:24 --> 00:08:27
where you have your phone in your pocket today

00:08:26 --> 00:08:28
can be built out of just NAND gates.

00:08:28 --> 00:08:32
So it's functionally complete.

00:08:32 --> 00:08:35
You could build any logical function out of them.

00:08:34 --> 00:08:37
You stack them together in arbitrary ways.

00:08:37 --> 00:08:40
The problem with NAND gates and computers.

00:08:40 --> 00:08:43
is they're built from the bottom up.

00:08:43 --> 00:08:46
You have to design these circuits of NAND gates.

00:08:47 --> 00:08:50
So the cool thing here is the perceptron,

00:08:50 --> 00:08:52
we can learn.

00:08:52 --> 00:08:55
This magical NAND gate, we can learn its function.

00:08:57 --> 00:09:01
So let's go through how we can do that.

00:09:01 --> 00:09:06
How a perceptron can perform the NAND operation.

00:09:06 --> 00:09:08
There's the four examples.

00:09:07 --> 00:09:13
If you put the weights of -2 on each of the inputs

00:09:13 --> 00:09:16
and a bias of three on the neuron,

00:09:16 --> 00:09:20
snd if we perform that same operation

00:09:20 --> 00:09:23
of summing the weights times the inputs.

00:09:24 --> 00:09:29
plus the bias, in the top left we get

00:09:29 --> 00:09:35
when the inputs are 0s and there's sum to the bias, we get a 3.

00:09:35 --> 00:09:38
That's a positive number

00:09:37 --> 00:09:40
which means the output of a perceptron will be a 1.

00:09:40 --> 00:09:42
On the top right,

00:09:42 --> 00:09:45
when the input is a 0 and a 1,

00:09:45 --> 00:09:50
that sum is still a positive number, again produces a 1.

00:09:50 --> 00:09:52
And so on.

00:09:51 --> 00:09:59
When the inputs are both 1s, then the output is a -1. Less than zero.

00:10:01 --> 00:10:05
So while this is simple,

00:10:05 --> 00:10:08
it's really important to think about.

00:10:09 --> 00:10:17
It's a sort of one basic computational truth you can hold on to

00:10:16 --> 00:10:20
as we talk about some of the magical things neural networks can do

00:10:22 --> 00:10:27
because if you compare a circuit of NAND gates

00:10:28 --> 00:10:30
and a circuit of neurons

00:10:31 --> 00:10:36
the difference, while a circuit of neurons

00:10:36 --> 00:10:39
which is what we think of as a neural network,

00:10:39 --> 00:10:43
can perform the same thing as a circuit of NAND gates.

00:10:43 --> 00:10:46
What it can also do is it can learn;

00:10:46 --> 00:10:50
It can learn the arbitrary logical functions

00:10:50 --> 00:10:55
that has arbitrary circuit of NAND gates can represent

00:10:55 --> 00:10:58
but it doesn't require the human designer.

00:10:59 --> 00:11:03
We can evolve, if you will.

00:11:06 --> 00:11:12
So one of the key aspects here, one of the key drawbacks of perceptron,

00:11:12 --> 00:11:15
is it's not very smooth in it's output.

00:11:16 --> 00:11:20
As we change the weights on the inputs

00:11:19 --> 00:11:23
and we change the bias, and we tweak it a little bit,

00:11:23 --> 00:11:27
it's very likely that when you get-

00:11:28 --> 00:11:31
It it's very easy to make the neuron-

00:11:30 --> 00:11:35
I'll put a 0 instead of a 1, or 1 instead of a 0.

00:11:35 --> 00:11:39
So when we start stacking many of these together,

00:11:38 --> 00:11:44
it's hard to control the output of the thing as a whole.

00:11:45 --> 00:11:52
Now the essential step that makes the neural network work,

00:11:51 --> 00:11:55
that a circuit perceptrons doesn't,

00:11:55 --> 00:11:58
Is if the output is made smooth,

00:11:58 --> 00:12:01
it's made continuous with an activation function.

00:12:03 --> 00:12:07
And so instead of using a step function

00:12:06 --> 00:12:11
like a perceptron does shown there on the left,

00:12:10 --> 00:12:15
we use any kind of smooth function.

00:12:14 --> 00:12:25
Sigmoid, where the output can change gradually as you change the weights and the bias.

00:12:27 --> 00:12:32
And this is a basic but critical step

00:12:33 --> 00:12:42
and so learning is generally the process of adjusting those weights gradually

00:12:41 --> 00:12:46
and seeing how it has an effect on the rest of the network.

00:12:45 --> 00:12:49
You just keep tweaking weights here and there

00:12:49 --> 00:12:55
and seeing how much closer you get to the Ground Truth.

00:12:54 --> 00:12:57
And if you get farther away,

00:12:57 --> 00:13:00
you just adjust the weights in the opposite direction.

00:13:01 --> 00:13:04
That's neural networks in a nutshell.

00:13:07 --> 00:13:11
What we'll mostly talk about today is feed forward neural network.

00:13:12 --> 00:13:16
On the left, going from inputs to outputs.

00:13:16 --> 00:13:22
With no loops, there is also

00:13:23 --> 00:13:27
these amazing things called recurrent neural networks.

00:13:28 --> 00:13:31
They're amazing because they have memory.

00:13:30 --> 00:13:33
They have a memory of state;

00:13:33 --> 00:13:39
they remember the temporal dynamics of the data they went through.

00:13:41 --> 00:13:46
But the painful thing is that they're really hard to train.

00:13:48 --> 00:13:51
Today will talk about feed for neural networks.

00:13:51 --> 00:13:55
So let's look at this example,

00:13:56 --> 00:14:00
an example of stacking a few of these neurons together.

00:14:00 --> 00:14:02
Let's think of the task,

00:14:04 --> 00:14:09
the basic task now famous, using a classification of numbers.

00:14:09 --> 00:14:12
You have an image of a number in red number

00:14:12 --> 00:14:20
and your task is given that image to say what number is in that image.

00:14:21 --> 00:14:23
Now, what is an image?

00:14:22 --> 00:14:28
An image is a collection of pixels; in this case 28 X 28 pixels.

00:14:27 --> 00:14:34
That's a total of 784 numbers; those numbers are from 0 to 255.

00:14:36 --> 00:14:39
And on the left of the network,

00:14:39 --> 00:14:46
the size of that input, despite the diagram, is 784 neurons.

00:14:46 --> 00:14:48
That's the input.

00:14:48 --> 00:14:50
Then comes the hidden layer.

00:14:51 --> 00:14:55
It's called the hidden layer because

00:14:55 --> 00:15:03
it has no interaction with the input or the output.

00:15:05 --> 00:15:09
It is simply a block used

00:15:08 --> 00:15:14
at the core of the computational power of neural networks,

00:15:13 --> 00:15:15
is the hidden layer.

00:15:14 --> 00:15:20
It's tasked with forming a representation of the data

00:15:20 --> 00:15:24
in such a way that it maps from the inputs to the outputs.

00:15:24 --> 00:15:28
In this case, there is fifteen neurons in the hidden layer.

00:15:29 --> 00:15:33
There is ten values on the output.

00:15:34 --> 00:15:37
corresponding to each of the numbers.

00:15:37 --> 00:15:41
There are several ways you can build this kind of network

00:15:40 --> 00:15:45
and this is what the magic of neural networks as you can do in a lot of ways.

00:15:44 --> 00:15:49
You only really need 4 outputs to represent values 0 through 9.

00:15:50 --> 00:15:54
But in practice, it seems that having 10 outputs works better.

00:15:54 --> 00:15:56
And how do these work?

00:15:56 --> 00:16:01
Whenever the input is a 5, the output neuron

00:16:00 --> 00:16:03
in charge of the five gets really excited.

00:16:03 --> 00:16:09
And I'll put a value that's close to 1, from 0 to 1, close to 1.

00:16:09 --> 00:16:16
And then the other 1s, I'll put a value, hopefully, that is close to 0.

00:16:16 --> 00:16:22
And when they don't, we adjust the weights in such a way that they get closer to zero

00:16:21 --> 00:16:28
and closer to one depending on whether this is the correct neuron associated with a picture.

00:16:28 --> 00:16:33
We'll talk about the details of this training process more tomorrow when it's more relevant

00:16:35 --> 00:16:44
but what we've discussed just now is the forward pass through the network.

00:16:44 --> 00:16:48
It's the pass when you take the inputs, apply the weights,

00:16:48 --> 00:16:52
sum them together, add the bias, produce the output,

00:16:52 --> 00:16:56
and check which of the outputs produces the highest confidence of the number

00:16:57 --> 00:17:02
then once those probabilities for each of the numbers is is provided,

00:17:02 --> 00:17:10
we determine the gradient that's used

00:17:10 --> 00:17:13
to punish or reward the weights

00:17:13 --> 00:17:17
that resulted in either the correct or the incorrect decision.

00:17:17 --> 00:17:19
And that's called Back Propagation.

00:17:19 --> 00:17:24
We step backwards through the network applying those punishments or rewards

00:17:24 --> 00:17:28
Because of the smoothness of the activation functions,

00:17:28 --> 00:17:32
that is a mathematically efficient operation.

00:17:32 --> 00:17:35
That's where the GPU step in.

00:17:36 --> 00:17:43
So far examples of numbers the Ground Truth for number 6

00:17:43 --> 00:17:48
looks like the following in the slides.

00:17:48 --> 00:17:54
Y of X equals to 10 dimensional vector

00:17:54 --> 00:18:02
where only one of them the sixth values a 1, the rest are zero.

00:18:02 --> 00:18:07
That's the Ground Truth that comes with the image.

00:18:06 --> 00:18:12
The lost function here, the basic lost function, is the squared error.

00:18:12 --> 00:18:19
Y of X is the Ground Truth and A is the output of the neural network

00:18:19 --> 00:18:22
resulting from the forward pass.

00:18:22 --> 00:18:29
So when you input that number of a 6 and outputs, whatever it outputs

00:18:28 --> 00:18:31
that's "a", a 10 dimensional vector.

00:18:31 --> 00:18:37
And it's summed over the inputs to produce the squared error.

00:18:37 --> 00:18:42
That's our lost function. The lost function, the objective function.

00:18:41 --> 00:18:45
That's was used to determine

00:18:45 --> 00:18:51
how much to reward or punish the Back Propagated weights throughout the network.

00:18:53 --> 00:19:00
And the basic operation of optimizing that loss function, of minimizing that loss function,

00:19:00 --> 00:19:05
is done with various variants of gradient descent.

00:19:05 --> 00:19:09
It's hopefully a somewhat smooth function

00:19:10 --> 00:19:13
but it's a highly non-linear function.

00:19:12 --> 00:19:16
This is why we can't prove much about neural networks,

00:19:16 --> 00:19:23
is it's a highly, high dimensional, highly non-linear function that's hopefully smooth enough

00:19:23 --> 00:19:31
where the gradient descent can find its way to a least a good solution.

00:19:31 --> 00:19:36
And there has to be some stochastic element there that

00:19:37 --> 00:19:42
jumps around to ensure that it doesn't get stuck

00:19:41 --> 00:19:46
in a local minimum of this very complex function.

00:19:46 --> 00:19:48
Okay, that's supervised learning:

00:19:47 --> 00:19:52
there's inputs, there's outputs. Ground Truth.

00:19:52 --> 00:19:54
That's our comfort zone,

00:19:54 --> 00:19:57
we're pretty confident we know what's going on.

00:19:56 --> 00:20:00
All you have to do is just, you have this data set you train and,

00:20:01 --> 00:20:05
you train a network on that data set and you can evaluate it.

00:20:04 --> 00:20:08
You can write a paper and try to beat a previous paper. It's great.

00:20:08 --> 00:20:12
The problem is when you then use that neural network

00:20:12 --> 00:20:17
to create an intelligent system that you put out there in the world,

00:20:17 --> 00:20:22
and now that system is no longer is working with your data set.

00:20:22 --> 00:20:26
It has to exist in this world that's

00:20:26 --> 00:20:30
maybe very different from the Ground Truth.

00:20:30 --> 00:20:33
So the take away from supervised learning

00:20:33 --> 00:20:37
is that a neural network's a great memorization

00:20:37 --> 00:20:42
but in the sort of philosophical way they might not be great at generalizing,

00:20:42 --> 00:20:49
at reasoning beyond the specific flavor of data set that they were trained on.

00:20:49 --> 00:20:53
The hope for reinforcement learning is that

00:20:53 --> 00:20:58
we can extend the knowledge we gain in a supervised way

00:20:59 --> 00:21:05
to the huge world outside where we don't have

00:21:05 --> 00:21:13
the Ground Truth of how to act, how good a certain state is,

00:21:12 --> 00:21:17
or how barristers say it is, this is a kind of brute force reasoning.

00:21:16 --> 00:21:22
And I'll talk about, kind of what I mean there, but it feels like

00:21:21 --> 00:21:25
it's closer to reasoning as opposed to memorization.

00:21:24 --> 00:21:29
That's a good way to think of supervised learning - is memorization.

00:21:29 --> 00:21:31
You're just studying for an exam.

00:21:31 --> 00:21:33
And as many of you know,

00:21:33 --> 00:21:37
that doesn't mean you're going to be successful in life just because you get an A.

00:21:38 --> 00:21:46
And so, a reinforcement learning agent or just any agent;

00:21:46 --> 00:21:53
a human being or any machine existing in this world

00:21:54 --> 00:21:59
can operate in the following way from the perspective of the agent.

00:21:58 --> 00:22:00
You can execute an action;

00:22:00 --> 00:22:06
it can receive an observation resulting from that action

00:22:05 --> 00:22:11
in a form of a new state and it can receive a reward or punishment.

00:22:11 --> 00:22:19
You can break down our existence in this way, simplistic view,

00:22:19 --> 00:22:24
but it's a convenient one on the computational side

00:22:24 --> 00:22:26
and from the environment side,

00:22:27 --> 00:22:32
the environment receives the action amidst the observation.

00:22:31 --> 00:22:36
So your action changes the world, therefore, that world has to change

00:22:38 --> 00:22:43
and then tell you about it and give you a reward or punishment for it.

00:22:47 --> 00:22:55
So, again one of the most fascinating things

00:22:55 --> 00:22:59
I'll try to convey while this is fascinating a little bit later on,

00:23:00 --> 00:23:05
is the work of deep mind on Atari.

00:23:06 --> 00:23:14
This is Atari Breakout a game were a paddle has to move around.

00:23:14 --> 00:23:18
That's the world it's existing in, the agent is the paddle

00:23:19 --> 00:23:22
and there's a bouncing ball

00:23:22 --> 00:23:27
and you're trying to move, your actions are right: move right, move left.

00:23:27 --> 00:23:31
You are trying to move in such a way that the ball doesn't get past you.

00:23:32 --> 00:23:36
And so, here is a human level performance of that agent.

00:23:36 --> 00:23:39
And so what does this paddle have to do?

00:23:38 --> 00:23:43
That's to operate in this environment; that's to act: move left, move right.

00:23:44 --> 00:23:48
Each action changes the state of the world.

00:23:48 --> 00:23:50
It may seem obvious but

00:23:50 --> 00:23:55
moving right changes visually the state of the world.

00:23:54 --> 00:23:58
In fact what we're watching now on the slides

00:23:58 --> 00:24:01
is the world changing before your eyes for this little guy.

00:24:03 --> 00:24:07
And it get rewards or punishments.

00:24:07 --> 00:24:11
Rewards it gets in the form of points,

00:24:10 --> 00:24:15
they're racking up points in the top left of the video.

00:24:15 --> 00:24:23
And then when the ball gets past the paddle, it gets punished by "dying".

00:24:23 --> 00:24:25
And that's the number of lives there's left.

00:24:25 --> 00:24:29
Going from 5 to 4 to 3, down to 0.

00:24:30 --> 00:24:34
And so the goal is to select at any one moment

00:24:34 --> 00:24:39
he action that maximizes future reward.

00:24:39 --> 00:24:43
Without any knowledge of what a reward is

00:24:43 --> 00:24:46
in the greater sense of the word,

00:24:45 --> 00:24:49
all you have is an instantaneous reward or punishment,

00:24:49 --> 00:24:52
instantaneous response of the world to your actions

00:24:56 --> 00:25:01
and this can be model as a mark of decision process.

00:25:01 --> 00:25:07
Mark of decision process is a mathematically convenient construct.

00:25:07 --> 00:25:09
It has no memory,

00:25:09 --> 00:25:13
all you get is you have a state that you're currently in.

00:25:12 --> 00:25:16
You perform an action, you get a reward.

00:25:15 --> 00:25:19
And you find yourself in a new state. And that repeats over and over.

00:25:20 --> 00:25:24
You start from state 0, you go to state 1.

00:25:23 --> 00:25:28
You once again repeat an action, get a reward for the next state.

00:25:27 --> 00:25:31
OK that's the formulation that we're operating in.

00:25:30 --> 00:25:33
When you're in a certain state,

00:25:32 --> 00:25:36
you have no memory of what happened two states ago.

00:25:37 --> 00:25:40
Everything is operating on the instantaneous.

00:25:42 --> 00:25:44
Instantaneously.

00:25:44 --> 00:25:48
And so what are the major components of a reinforcement learning agent?

00:25:47 --> 00:25:49
There's a policy.

00:25:52 --> 00:25:58
The function broadly defined an agent's behavior.

00:25:58 --> 00:26:05
That means that includes the knowledge of how, for any given state,

00:26:05 --> 00:26:10
what is an action that I will take with some probability.

00:26:11 --> 00:26:19
Value function is how good each state and action are in any particular state.

00:26:21 --> 00:26:23
And there's a model.

00:26:23 --> 00:26:29
Now this is a subtle thing that is

00:26:28 --> 00:26:32
actually the biggest problem with everything you'll see today,

00:26:32 --> 00:26:36
is the model as how we represent the environment.

00:26:36 --> 00:26:39
And we'll see today some amazing things

00:26:38 --> 00:26:40
that neural networks can achieve

00:26:40 --> 00:26:44
on a relatively simplistic model of the world

00:26:44 --> 00:26:48
and the question whether that model can extend to the real world

00:26:47 --> 00:26:51
where human lives are at stake in the case of driving.

00:26:53 --> 00:26:59
So let's look at the simplistic world. A robot in a room.

00:27:00 --> 00:27:02
You start at the bottom left,

00:27:02 --> 00:27:05
Your goal is to get to the top right.

00:27:06 --> 00:27:11
Your possible actions are going up, down, left and right.

00:27:12 --> 00:27:15
Now this world can be deterministic

00:27:15 --> 00:27:19
which means when you go up, you actually go up.

00:27:19 --> 00:27:25
Or it could be non-deterministic as human life is is

00:27:26 --> 00:27:29
because when you go up, sometimes you go right.

00:27:29 --> 00:27:35
So in this case if you choose to go up, you move up 80% of the time.

00:27:35 --> 00:27:37
You move left 10% of the time

00:27:37 --> 00:27:39
and you move right 10% of the time.

00:27:39 --> 00:27:45
And when you get to the top right you get a reward of +1

00:27:44 --> 00:27:47
and you get to the second block from that,

00:27:46 --> 00:27:49
for two you get -1. You get punished.

00:27:49 --> 00:27:55
And every time you take a step you get a slight punishment, a -0.04.

00:27:57 --> 00:27:59
Okay. So the question is,

00:27:59 --> 00:28:04
if you start at the bottom left, is this a good solution?

00:28:03 --> 00:28:07
Is this a good policy by which you exist in the world?

00:28:08 --> 00:28:11
And it is if the world is deterministic.

00:28:11 --> 00:28:16
If whenever you choose to go up, you go.

00:28:16 --> 00:28:18
Whenever you choose to go right, you go right.

00:28:21 --> 00:28:26
But if the actions are stochastic, that's not the case.

00:28:27 --> 00:28:32
In what I described previously with point eight up

00:28:31 --> 00:28:37
and probability of .1 going left and right.

00:28:38 --> 00:28:40
This is the optimal policy.

00:28:42 --> 00:28:49
Now if we punish every single step with a -2 as opposed to a -0.04.

00:28:49 --> 00:28:53
So every time you take a step,it hurts.

00:28:54 --> 00:29:00
You're going to try to get through a positive block as quickly as possible

00:29:01 --> 00:29:04
and that's what this policy says.

00:29:03 --> 00:29:07
I'll walk through a negative one if I have to

00:29:06 --> 00:29:09
as long as I stop getting a -2.

00:29:11 --> 00:29:16
Now if the reward for each step is a -.1,

00:29:16 --> 00:29:20
you might choose to go around that -1 block,

00:29:21 --> 00:29:24
slight detour to avoid the pain.

00:29:27 --> 00:29:30
And then you might take an even longer detour

00:29:29 --> 00:29:34
as the reward for each step goes up or the punishment goes down, I guess.

00:29:46 --> 00:29:52
And then if there is an actual positive reward for every step you take

00:29:54 --> 00:29:58
you'll avoid going to the finish line.

00:29:58 --> 00:30:01
You'll just wander the world.

00:30:01 --> 00:30:07
We saw that with the Coast Racer yesterday,

00:30:06 --> 00:30:11
the boat that chose not to finish the race

00:30:10 --> 00:30:14
because it was having too much fun getting points in the middle.

00:30:16 --> 00:30:25
So let's look at the world that this agent is operating in as a value function.

00:30:25 --> 00:30:29
Now value function depends on a reward,

00:30:29 --> 00:30:32
the reward that comes from the future

00:30:32 --> 00:30:36
and that reward is discounted because the world is stochasted,

00:30:37 --> 00:30:44
we can't expect the reward to come along to us in the way that

00:30:44 --> 00:30:49
we hope it does based on the policy, based on the way we choose to act.

00:30:49 --> 00:30:53
And so there's a gamma there that over time,

00:30:53 --> 00:31:01
as the award is farther and farther into the future discounts that reward.

00:31:02 --> 00:31:06
Diminishes the impact of that future reward

00:31:05 --> 00:31:08
in your evaluation of the current state.

00:31:08 --> 00:31:13
And so your goal is to develop a strategy

00:31:12 --> 00:31:17
that maximizes the discounted future reward.

00:31:16 --> 00:31:23
The sum, the discounted sum, and reinforcement learning

00:31:25 --> 00:31:31
there is a lot of approaches for coming up with a good policy,

00:31:31 --> 00:31:34
a near optimal, an optimal policy.

00:31:36 --> 00:31:38
There's a lot of fun math there.

00:31:39 --> 00:31:43
You could try to construct a model

00:31:43 --> 00:31:46
that optimizes some estimate of this world.

00:31:46 --> 00:31:50
You can try in the Monte Carlo way

00:31:50 --> 00:31:55
through just simulate that world and see how it unrolls.

00:31:56 --> 00:32:00
And as it unrolls you try to compute the optimal policy.

00:32:01 --> 00:32:05
Or what we'll talk about today is Q learning.

00:32:05 --> 00:32:09
It's an off policy approach,

00:32:10 --> 00:32:16
where the policy is estimated as we go along.

00:32:17 --> 00:32:22
The policy is represented as a Q-Function.

00:32:22 --> 00:32:28
The Q-Function shown there on the left is,

00:32:28 --> 00:32:30
I apologize for the equations,

00:32:30 --> 00:32:34
I lied. There'll be some equations.

00:32:37 --> 00:32:43
The input to the Q-Function is a state at time t, "st".

00:32:43 --> 00:32:48
An action they choose to take and that state "at".

00:32:48 --> 00:32:52
and your goal is in that state

00:32:51 --> 00:32:56
to choose an action which maximizes the reward in the next step.

00:32:57 --> 00:33:02
And what Q-Learning does, and I'll describe the process,

00:33:02 --> 00:33:09
is it's able to approximate through experience the optimal Q-Function,

00:33:09 --> 00:33:15
the optimal function that tells you how to act in any state of the world.

00:33:16 --> 00:33:20
You just have to live it.

00:33:20 --> 00:33:22
You have to simulate this world.

00:33:22 --> 00:33:24
You have to move about it.

00:33:23 --> 00:33:29
You have to explore in order to see every possible state,

00:33:28 --> 00:33:32
try every different action, get rewarded, get punished,

00:33:34 --> 00:33:37
and figure out what is the optimal thing to do.

00:33:37 --> 00:33:42
That's done using this Bellman equation.

00:33:43 --> 00:33:47
On the left, the output, is the new state.

00:33:47 --> 00:33:53
The estimate, the Q-Function estimate of the new state, for new action.

00:33:54 --> 00:33:59
And this is the update rule at the core of Q Learning.

00:33:59 --> 00:34:05
You take the estimate, the old estimate, and add

00:34:05 --> 00:34:11
based on the learning rate alpha from 0 to 1,

00:34:11 --> 00:34:16
they update the evaluation of that state

00:34:16 --> 00:34:22
based on your new reward that you received at that time.

00:34:22 --> 00:34:26
So you've arrived in this certain state as "t".

00:34:26 --> 00:34:29
You tried to do an action

00:34:29 --> 00:34:32
and then you got a certain reward

00:34:31 --> 00:34:34
and you update your estimate of that state

00:34:34 --> 00:34:37
and action pair based on this rule.

00:34:37 --> 00:34:44
When the learning rate is 0, you don't learn when alpha is 0.

00:34:44 --> 00:34:48
You never change your world view

00:34:47 --> 00:34:51
based on the new incoming evidence.

00:34:52 --> 00:35:03
When alpha is 1, every time change your world evaluation based on the new evidence.

00:35:04 --> 00:35:09
And that's the key ingredient to Reinforcement Learning.

00:35:08 --> 00:35:12
First you explore, then you exploit.

00:35:12 --> 00:35:16
First, you explore in a non-greedy way and then you get greedy.

00:35:15 --> 00:35:19
You figure out what's good for you and you keep doing it.

00:35:19 --> 00:35:23
So if you wanted to learn an Atari game,

00:35:22 --> 00:35:26
First you try every single action, every state, you screw up,

00:35:25 --> 00:35:29
get punished, get rewarded and, eventually, you figure out

00:35:28 --> 00:35:31
what's actually the right thing to do and you just keep doing it.

00:35:30 --> 00:35:37
And that's how you win against the greatest human players in the world

00:35:36 --> 00:35:40
in a game of "Go" for example, as we'll talk about.

00:35:41 --> 00:35:45
And the way you do that is you have an "Epsilon Greedy Policy"

00:35:45 --> 00:35:51
that over time with a probability of 1 - Epsilon,

00:35:51 --> 00:35:54
you perform an optimal Greedy action.

00:35:53 --> 00:35:56
With a probability of Epsilon, you perform a random action.

00:35:56 --> 00:35:59
Random action being explore.

00:36:00 --> 00:36:06
And so, as epsilon goes down from 1 to 0 you explore less and less.

00:36:09 --> 00:36:11
So the algorithm here is really simple.

00:36:12 --> 00:36:16
On the bottom of the slide there is the algorithm version,

00:36:16 --> 00:36:20
the pseudo code version of the equation.

00:36:20 --> 00:36:23
The Bellman equation update.

00:36:23 --> 00:36:30
You initialize your estimate of state action pairs arbitrarily,

00:36:29 --> 00:36:33
a random number. This is an important point.

00:36:33 --> 00:36:39
When you start playing or living or doing whatever you're doing

00:36:38 --> 00:36:42
in whatever you're doing with Reinforcement Learning or driving,

00:36:42 --> 00:36:49
you have no preconceived notion of what's good and bad, it's random.

00:36:49 --> 00:36:52
Or however you choose to initialize it.

00:36:51 --> 00:36:55
And the fact that it learns anything is amazing.

00:36:57 --> 00:36:59
I want you to remember that.

00:36:58 --> 00:37:06
That's one of the amazing things about Q-Learning at all

00:37:05 --> 00:37:10
and then the Deep neural network version of Q-Learning.

00:37:12 --> 00:37:15
The algorithm repeats the following step.

00:37:15 --> 00:37:23
You step into the world, observe an initial state, you select an action "a"

00:37:22 --> 00:37:26
so that action, if you're exploring, will be a random action;

00:37:26 --> 00:37:29
if you're greedily pursuing the best, actually you can,

00:37:29 --> 00:37:32
it will be the action that maximizes the Q-Function.

00:37:32 --> 00:37:35
You observe a reward after you take the action,

00:37:35 --> 00:37:38
and a new state that you find yourself in.

00:37:38 --> 00:37:42
And then you update your estimate of the previous day you are in

00:37:41 --> 00:37:46
having taken that action using that Bellman Equation Update.

00:37:47 --> 00:37:50
And repeat this over and over.

00:37:52 --> 00:38:00
And so there on the bottom of the slide is a summary of life.

00:38:04 --> 00:38:06
Yes.

00:38:06 --> 00:38:08
(CHUCKLING)

00:38:09 --> 00:38:17
Q-Function? Yes, yes. Yeah, it's a single- The question was

00:38:17 --> 00:38:20
is the Q-Function a single value?

00:38:19 --> 00:38:24
And yes, it's just a single continuous value.

00:38:35 --> 00:38:38
So the question was: "how do you model the world?"

00:38:40 --> 00:38:49
So the way you model, so let's start, is very simplistic world of Atari paddle.

00:38:48 --> 00:38:51
You think you model it as a paddle that

00:38:50 --> 00:38:53
can move left and right and there's some blocks

00:38:52 --> 00:38:57
and you model the physics of the ball.

00:38:57 --> 00:39:02
That requires a lot of expert knowledge in that particular game.

00:39:02 --> 00:39:05
So you sit there hand crafting this model.

00:39:05 --> 00:39:08
That's hard to do even for a simplistic game.

00:39:08 --> 00:39:11
The other model you could take

00:39:11 --> 00:39:17
is looking at this world in the way the humans do visually.

00:39:16 --> 00:39:20
So take the model in as a set of pixels.

00:39:21 --> 00:39:26
Just the model is all the pixels of the world.

00:39:25 --> 00:39:30
You know nothing about paddles or balls or physics

00:39:29 --> 00:39:33
or colors and points, they're just pixels coming in.

00:39:34 --> 00:39:37
That seems like a ridiculous model of the world

00:39:36 --> 00:39:39
but it seems to work for Atari.

00:39:38 --> 00:39:41
It seems to work for human beings.

00:39:40 --> 00:39:45
When you're born, you see there's light coming into your eyes

00:39:46 --> 00:39:53
and you don't have any, as far as we know,

00:39:52 --> 00:39:56
you don't come with an instruction when you're born.

00:39:56 --> 00:39:58
You know there's people in the world

00:39:57 --> 00:40:02
then there is good guys and bad guys,

00:40:01 --> 00:40:03
and there's this is how you walk.

00:40:02 --> 00:40:08
No, all you get is light, sound and the other sensors.

00:40:12 --> 00:40:18
And you get to learn about every single thing you think of as

00:40:18 --> 00:40:22
the way you model the world is a learned representation

00:40:21 --> 00:40:24
and we will talk about how a neural network does that.

00:40:23 --> 00:40:31
It learns to represent the world but if we have to hand model the world,

00:40:31 --> 00:40:34
it's an impossible task.

00:40:34 --> 00:40:39
That's the question and if we have to hand model the world,

00:40:39 --> 00:40:42
then that world better be a simplistic one.

00:40:42 --> 00:40:43
Yeah.

00:40:44 --> 00:40:46
That's a great question.

00:40:45 --> 00:40:49
And so the question was: "what is the robustness of this model

00:40:49 --> 00:40:54
if the way you represent the world is at all, even slightly different,

00:40:53 --> 00:40:56
from the way you thought that world is.

00:40:56 --> 00:41:01
That's not that well studied as far as I'm aware.

00:41:00 --> 00:41:04
I mean, it's already amazing that you keep constructing,

00:41:03 --> 00:41:06
if you have a certain import of the world,

00:41:05 --> 00:41:08
If you have a certain model of the world that you can learn anything

00:41:07 --> 00:41:09
is already amazing.

00:41:09 --> 00:41:12
The question is, and it's an important one,

00:41:12 --> 00:41:15
is we'll talk a little bit about it,

00:41:15 --> 00:41:18
not about the world model but the reward function.

00:41:17 --> 00:41:20
If the reward function is slightly different.

00:41:20 --> 00:41:26
the real reward function of life or driving or of coast runner

00:41:26 --> 00:41:29
is different than what you expected it to be.

00:41:29 --> 00:41:32
What's the negative there?

00:41:31 --> 00:41:34
Yes, it could be huge.

00:41:33 --> 00:41:35
(CHUCKLING)

00:41:36 --> 00:41:38
There's another question or no?

00:41:38 --> 00:41:40
Oh, no. Yes.

00:41:41 --> 00:41:43
Sorry, can you ask that again?

00:41:45 --> 00:41:49
Yes, you can change it over. So the question was:

00:41:48 --> 00:41:51
"do you change alpha value over time?"

00:41:50 --> 00:41:55
You certainly should change alpha value over time, yes.

00:42:00 --> 00:42:04
So the question was: "what is the complex interplay

00:42:04 --> 00:42:07
of the Epsilon Function with the Q-Learning Update?"

00:42:07 --> 00:42:13
That's 100% fine-tuned to the particular learning problem.

00:42:12 --> 00:42:18
So you certainly wanted-

00:42:19 --> 00:42:25
The more complex, the larger the number of states in the world

00:42:25 --> 00:42:27
and the larger the number of actions,

00:42:27 --> 00:42:31
the longer you have to wait

00:42:30 --> 00:42:35
before you decrease the Epsilon to 0 but you have to play with it.

00:42:35 --> 00:42:38
And it's one of the parameters you have to play with, unfortunately,

00:42:37 --> 00:42:39
and there's quite a few of them

00:42:39 --> 00:42:43
which is why you can't just drop a Reinforcement Learning agent into the world.

00:42:47 --> 00:42:51
Oh, the effect in that sense? No, no. It's just a coin flip.

00:42:51 --> 00:42:55
And if that Epsilon is 0.5,

00:42:54 --> 00:42:57
half the time you're going to take a random action.

00:42:56 --> 00:42:59
So there's no specific-

00:42:59 --> 00:43:03
It's not like you'll take the best action

00:43:02 --> 00:43:06
and then with some probability take the second best, and so on.

00:43:05 --> 00:43:07
I mean you can certainly do that

00:43:06 --> 00:43:12
but in the simple formulation that works if you just take a random action

00:43:11 --> 00:43:14
because you don't wanted to have a preconceived notion of

00:43:13 --> 00:43:17
what's a good action to try when you're exploring.

00:43:16 --> 00:43:21
The wjhole point is you try crazy stuff, if it's a simulation.

00:43:23 --> 00:43:29
So, good question. So representation matters.

00:43:29 --> 00:43:33
This is the question about how we represent the world.

00:43:32 --> 00:43:38
So we can think of this world of break up, for example,

00:43:38 --> 00:43:44
of this Atari game as a paddle the moves left and right.

00:43:44 --> 00:43:48
and the exact position of the different things you can hit

00:43:47 --> 00:43:50
o construct this complex model,

00:43:49 --> 00:43:55
this expert driven model that has to fine tune it to this particular problem.

00:43:56 --> 00:44:03
But in practice the more complex this model gets,

00:44:03 --> 00:44:06
the worse that Bellman Equation Update,

00:44:05 --> 00:44:09
that value that's trying to construct a Q-Function

00:44:09 --> 00:44:12
for every single combination of state and actions

00:44:12 --> 00:44:17
becomes too difficult because that function is too sparse and huge

00:44:17 --> 00:44:23
so if you think of looking at this world in a general way,

00:44:23 --> 00:44:27
in the way human beings would is a collection of pixels visually.

00:44:27 --> 00:44:30
If you just take in a pixel,

00:44:29 --> 00:44:36
this game as a collection of 84 by 84 pixels, an image, an RGB image,

00:44:38 --> 00:44:41
And then you look at not just the current image,

00:44:41 --> 00:44:47
but look at the temporal trajectory of those images

00:44:46 --> 00:44:50
o like if there's a ball moving you want to know about that movement.

00:44:49 --> 00:44:55
So you look at 4 images; so, current image and 3 images back

00:44:55 --> 00:45:04
and say, they're gray scale with 256 gray levels that size of the Q-Table

00:45:03 --> 00:45:10
that the Q value function has to learn is

00:45:10 --> 00:45:15
whatever that number is, but it's certainly larger than

00:45:14 --> 00:45:20
the number of atoms in the universe. That's a large number.

00:45:19 --> 00:45:24
So you have to run the simulation long enough

00:45:23 --> 00:45:31
to touch at least a few times the most of the states in that Q-Table.

00:45:31 --> 00:45:37
So as Elon Musk says you may need to run,

00:45:36 --> 00:45:39
you know, we live in a simulation,

00:45:39 --> 00:45:42
and you may have to run a universe

00:45:41 --> 00:45:47
just to compute the Q-Function in this case.

00:45:49 --> 00:45:52
So that's where deep learning steps in

00:45:52 --> 00:45:59
as instead of modeling the world as a Q-Table

00:46:00 --> 00:46:05
you estimate, you try to learn that function.

00:46:06 --> 00:46:10
And so, the takeaway from supervised learning, if you remember,

00:46:10 --> 00:46:13
that it's good at memorizing or good at memorizing data.

00:46:13 --> 00:46:16
The hope for reinforcement learning

00:46:16 --> 00:46:22
With a Q-Learning is that we can extend

00:46:22 --> 00:46:28
the occasional rewards we get to generalize over the operation,

00:46:27 --> 00:46:31
the actions you take in that world leading up to the rewards.

00:46:31 --> 00:46:36
And the hope for deep learning is that we can move this

00:46:35 --> 00:46:40
Reinforcement learning system into a world

00:46:39 --> 00:46:44
that doesn't need to be, they can be defined arbitrarily.

00:46:44 --> 00:46:49
It can include all the pixels of an Atari game,

00:46:48 --> 00:46:53
can include all the pixels sense by a drone, a robot or car

00:46:56 --> 00:47:00
but still needs a formalized definition of that world

00:46:59 --> 00:47:06
which is much easier to do when you're able to take in sensors like an image

00:47:07 --> 00:47:10
So Deep Q-Learning, deep version.

00:47:12 --> 00:47:16
So instead of learning a Q-Table, a Q-Function,

00:47:16 --> 00:47:21
we try in estimating that Q-Prime.

00:47:21 --> 00:47:25
We try to learn it using machine learning.

00:47:25 --> 00:47:32
It tries to learn some parameters, this huge complex function.

00:47:32 --> 00:47:40
We try to learn it and the way we do that as we have a neural network

00:47:39 --> 00:47:42
the same kind that showed that learned the numbers

00:47:41 --> 00:47:43
to map from an image

00:47:43 --> 00:47:48
to a classification of that image into a number.

00:47:47 --> 00:47:52
The same kind of network is used to take in a state,

00:47:52 --> 00:47:55
an action and produce a Q-Value.

00:47:56 --> 00:47:59
Now here's the amazing thing:

00:48:01 --> 00:48:07
that without knowing anything in the beginning,

00:48:08 --> 00:48:12
as I said, with a Q-Table it's initialized randomly.

00:48:12 --> 00:48:18
The Q-Function. this deep network, knows nothing in the beginning.

00:48:18 --> 00:48:25
All it knows is, in the simulated world, their words you get

00:48:24 --> 00:48:29
for a particular game, so you have to play time and time again

00:48:29 --> 00:48:36
and see the rewards you get for every single iteration of the game.

00:48:36 --> 00:48:38
But in the beginning it knows nothing.

00:48:40 --> 00:48:45
And it's able to learn to play better than human beings.

00:48:45 --> 00:48:48
This is a deep mind paper

00:48:48 --> 00:48:53
playing Atary with deep reinforcement learning from 2013.

00:48:53 --> 00:48:57
There's one other key things that got everybody excited

00:48:56 --> 00:49:00
about the role of deep learning in artificial intelligence

00:49:01 --> 00:49:06
is that using a convolutional neural work,

00:49:05 --> 00:49:07
which I'll talk about tomorrow,

00:49:07 --> 00:49:10
but it's a vanilla network, like any other

00:49:09 --> 00:49:13
like I talk about earlier today, just a regular network

00:49:13 --> 00:49:19
That takes the raw pixels, as I said, and estimates that Q-Function

00:49:18 --> 00:49:22
from the raw pixels as able to play on many of those games

00:49:21 --> 00:49:23
better than a human being.

00:49:25 --> 00:49:28
And the lost function that I mentioned previously,

00:49:28 --> 00:49:35
so, again, very vanilla lost function,

00:49:34 --> 00:49:37
very simple objective function.

00:49:36 --> 00:49:39
The first one you'll probably implement.

00:49:39 --> 00:49:41
We have a tutorial on TensorFlow.

00:49:42 --> 00:49:46
Squared Error. So we take this Bellman Equation

00:49:47 --> 00:49:49
where the estimate is Q-

00:49:49 --> 00:49:53
The Q-Function Estimate of state and action

00:49:53 --> 00:49:59
is the maximum reward you get for taking any of the actions

00:49:59 --> 00:50:02
that take you to any of the future states.

00:50:03 --> 00:50:10
And you try to take that action, observe the result of that action,

00:50:10 --> 00:50:16
and if the target is different that your learn target,

00:50:16 --> 00:50:20
what the function is learned is the expected reward in that case,

00:50:20 --> 00:50:24
is different than what you actually got you adjust it.

00:50:24 --> 00:50:26
You adjust the weights of the network.

00:50:28 --> 00:50:34
And this is exactly the process by which we learn

00:50:33 --> 00:50:36
how to exist in this pixel world.

00:50:36 --> 00:50:43
So your mapping states and actions to a Q-Value,

00:50:44 --> 00:50:47
the algorithm is as follows.

00:50:47 --> 00:50:49
This is how we train it.

00:50:48 --> 00:50:55
We're given a transition as current state action taken in that state

00:50:55 --> 00:50:58
are the rewards you get, an S-Prime,

00:50:57 --> 00:51:00
as what the state you find yourself in.

00:51:02 --> 00:51:05
And so we replace the basic of their rule,

00:51:04 --> 00:51:07
in the previous pseudo code,

00:51:08 --> 00:51:15
by taking a forward pass through the network given that S-state.

00:51:16 --> 00:51:21
We'll look at what the predicted Q-value is of that action.

00:51:21 --> 00:51:25
We then do another forward pass through that network

00:51:25 --> 00:51:27
and see what we actually get.

00:51:29 --> 00:51:35
And then if we're totally off, we punish,

00:51:35 --> 00:51:39
we Back Propagate the weights in a way that.

00:51:39 --> 00:51:45
next time we'll make less of that mistake. And you repeat this process.

00:51:49 --> 00:51:52
This is a simulation.

00:51:52 --> 00:51:55
You're learning against yourself.

00:51:57 --> 00:52:03
And again, the same rule applies here. exploration versus exploitation.

00:52:04 --> 00:52:15
You start out with an Epsilon of 0 or 1, you are mostly exploring.

00:52:14 --> 00:52:18
And then you move towards an Epsilon of 0.

00:52:19 --> 00:52:24
And with Atari Breakout. this is the deep mind paper result

00:52:24 --> 00:52:27
is Training Epochs on the x-axis,

00:52:26 --> 00:52:30
on the y-axis is the average action value

00:52:29 --> 00:52:32
and the average reward per episode.

00:52:33 --> 00:52:39
I'll show why it's kind of a an amazing result but it's messy

00:52:38 --> 00:52:41
because there's a lot of tricks involved.

00:52:41 --> 00:52:45
So it's not just putting in a bunch of pixels of a game

00:52:44 --> 00:52:49
and getting an agent that knows how to win at that game.

00:52:48 --> 00:52:53
there's a lot of pre-processing and playing with the data required.

00:52:54 --> 00:53:01
So which is unfortunate because the truth is messier than the hope

00:53:02 --> 00:53:07
but one of the critical tricks needed is called experience replay.

00:53:08 --> 00:53:12
So as opposed to letting an agent,

00:53:11 --> 00:53:15
So you're learning this big network that tries

00:53:14 --> 00:53:19
to build a model of what's good to do in the world and what's not.

00:53:19 --> 00:53:22
And you're learning as you go.

00:53:22 --> 00:53:27
With experience replay you're keeping a track

00:53:26 --> 00:53:28
of all the things you did.

00:53:27 --> 00:53:31
And every once in a while, you look back into your memory

00:53:30 --> 00:53:34
and pull out some of those old experiences.

00:53:33 --> 00:53:36
the good old times and trying on those again.

00:53:37 --> 00:53:44
As opposed to letting the agent run itself into some local optima

00:53:43 --> 00:53:46
where it tries to learn a very subtle aspect of the game

00:53:46 --> 00:53:48
that actually in the global sense

00:53:48 --> 00:53:51
doesn't get you farther to winning the game.

00:53:51 --> 00:53:53
Very much like life.

00:53:53 --> 00:53:57
So here's the algorithm, deep Q learning algorithm pseudo code.

00:54:00 --> 00:54:02
We initialize the replay memory,

00:54:02 --> 00:54:06
again there's this little trick that's required.

00:54:06 --> 00:54:09
Is keeping a track of stuff that's happened in the past,

00:54:09 --> 00:54:14
we initialize the action value function Q with random weights

00:54:14 --> 00:54:17
and observe initial state, again same thing.

00:54:17 --> 00:54:21
Select an action with the probability Epsilon

00:54:21 --> 00:54:25
explore, otherwise choose the best one

00:54:25 --> 00:54:28
based on the estimate provided by the neural network.

00:54:28 --> 00:54:32
And then carry out the action, observe the reward

00:54:31 --> 00:54:35
and store that experience in the replay memory

00:54:36 --> 00:54:41
and then sample random transition from replay memory.

00:54:41 --> 00:54:48
So with a certain probability, you bring those old times back

00:54:47 --> 00:54:50
to get yourself out of the local minima

00:54:50 --> 00:54:54
nd then you train the Q-network

00:54:53 --> 00:55:01
using the difference between what you actually got

00:55:00 --> 00:55:05
and your estimate and you repeat this process over and over.

00:55:07 --> 00:55:10
So here's what you can do after ten minutes of training

00:55:10 --> 00:55:18
on the left, so that's very little training, what you get is

00:55:17 --> 00:55:23
a paddle that learns hardly anything and it just keeps dying.

00:55:23 --> 00:55:27
It goes from 5 to 4 to 2 to 2 to 1, Those are the number of lives left.

00:55:28 --> 00:55:33
Then after two hours of training in a single GPU,

00:55:33 --> 00:55:41
it learns to win, you know, not die. Rack up points

00:55:40 --> 00:55:49
and learns to avoid the ball from passing the paddle which is great.

00:55:48 --> 00:55:54
That's human level performance really, better than some humans,

00:55:53 --> 00:55:58
you know, but it still dies sometimes so it's very human level.

00:55:58 --> 00:56:04
And then after four hours it does something really amazing.

00:56:05 --> 00:56:10
It figures out how to win the game in a very lazy way

00:56:10 --> 00:56:16
which is drill a hole through the blocks up to the top

00:56:15 --> 00:56:18
and get the ball stuck up there.

00:56:18 --> 00:56:21
And it does all the hard work for you.

00:56:20 --> 00:56:24
That minimizes the probability of the ball getting pas your paddle

00:56:23 --> 00:56:28
because it's just stuck in the in the blocks up top.

00:56:28 --> 00:56:31
So that might be something

00:56:30 --> 00:56:33
that you wouldn't even figure out to do yourself.

00:56:33 --> 00:56:37
And that's- I need to sort to pause here

00:56:37 --> 00:56:41
to clearly explain what's happening.

00:56:41 --> 00:56:47
The input to this algorithm is just the pixels of the game.

00:56:47 --> 00:56:50
It's the same thing that human beings take in

00:56:50 --> 00:56:55
when they take visual perception and it's able to learn

00:56:55 --> 00:57:01
under this constrained definition of what is a reward and a punishment.

00:57:00 --> 00:57:04
It's able to learn to get a high reward.

00:57:07 --> 00:57:10
That's general artificial intelligence.

00:57:10 --> 00:57:14
A very small example of it but its general.

00:57:14 --> 00:57:18
It's general purpose, it knows nothing about games

00:57:17 --> 00:57:21
and knows nothing about paddles or physics.

00:57:20 --> 00:57:24
It's just take answer input of the game

00:57:23 --> 00:57:28
and they've did the same thing for a bunch of different games in Atari

00:57:29 --> 00:57:35
And what's shown here in this plot on the x-axis

00:57:34 --> 00:57:39
a bunch of different games from Atari

00:57:38 --> 00:57:42
and on the y-axis is a percentile

00:57:41 --> 00:57:47
where 100% is about the best that human beings can do.

00:57:46 --> 00:57:49
Meaning it's the score that human beings who get

00:57:49 --> 00:57:53
so everything about there in the middle, everything to the left of that

00:57:52 --> 00:57:55
is far exceeding human low performance

00:57:55 --> 00:58:00
and below that is on par or worse than human performance.

00:58:00 --> 00:58:05
So it can learn so many- Boxing, Pinball,

00:58:05 --> 00:58:09
all of these games, and it doesn't know anything

00:58:08 --> 00:58:12
about any of the individual games, it's just taking in pixels.

00:58:11 --> 00:58:14
It's just as if you put a human being.

00:58:14 --> 00:58:18
behind any of these games and

00:58:18 --> 00:58:24
ask them to learn to be beat the game.

00:58:25 --> 00:58:29
and there's been a lot of improvements in this algorithm recently.

00:58:28 --> 00:58:30
Yes, question.

00:58:32 --> 00:58:38
No. So the question was: "do they customize the model for game,

00:58:37 --> 00:58:39
for a particular game?

00:58:38 --> 00:58:43
And no, the point- You could, of course, but the point is

00:58:42 --> 00:58:46
it doesn't need to be customized for the game but

00:58:48 --> 00:58:54
he important thing is that it's still only on Atari games.

00:58:55 --> 00:58:59
Alright, so the question whether this is transferable to driving,

00:58:58 --> 00:59:00
Perhaps not.

00:59:10 --> 00:59:13
Right, you play the game where you do.

00:59:12 --> 00:59:16
No, you don't have the- Well, yeah you play one step of the game.

00:59:17 --> 00:59:25
So you take action in a state and then you observe that.

00:59:24 --> 00:59:27
So you have that simulation.

00:59:26 --> 00:59:32
I mean, really that's one of the biggest problems here

00:59:31 --> 00:59:37
is you require the simulation in order to get the Ground Truth.

00:59:42 --> 00:59:46
So that's a great question or comment.

00:59:46 --> 00:59:50
The comment was that for a lot of these situations,

00:59:50 --> 00:59:55
the reward function might not change at all depending on your actions.

00:59:54 --> 01:00:00
The rewards are really, most of the time, delayed

01:00:00 --> 01:00:05
10, 20, 30 steps down the line which is why

01:00:05 --> 01:00:12
It is amazing that this works at all. That it's learning locally.

01:00:13 --> 01:00:16
and through that process of simulation

01:00:15 --> 01:00:19
of hundreds a thousand times runs through the game,

01:00:18 --> 01:00:25
It's able to learn what to do now such that I get a reward later.

01:00:26 --> 01:00:32
It's if you just pause, look at the math of it.

01:00:31 --> 01:00:35
It's very simple math and look at the result, it's incredible.

01:00:38 --> 01:00:40
So there's a lot of improvements,

01:00:39 --> 01:00:46
this one called the general reinforcement learning architecture Gorila.

01:00:47 --> 01:00:51
The cool thing about this in the simulated world at least

01:00:51 --> 01:00:57
is that you can run deep reinforcement learning in a distributed way.

01:00:56 --> 01:00:59
You could do both the simulation in a distributed way,

01:00:58 --> 01:01:02
you can do the learning in the distributed way,

01:01:02 --> 01:01:08
you can generate experiences which is what this kind of diagram shows,

01:01:07 --> 01:01:13
you can, either from human beings or from simulation.

01:01:12 --> 01:01:21
So for example, the way that Alpha Go the deep mind team

01:01:20 --> 01:01:22
is beat the game of Go

01:01:21 --> 01:01:27
is they learn from both expert games and by playing itself.

01:01:27 --> 01:01:30
So, you can do this in a distributed way and

01:01:29 --> 01:01:33
you could do the learning in a distributor way so you can scale.

01:01:33 --> 01:01:39
And in this particular case, the Gorila has achieved

01:01:38 --> 01:01:42
the better result than the DQN network

01:01:43 --> 01:01:46
and that's part of the their nature paper.

01:01:46 --> 01:01:54
Okay, so let me now get to driving for a second here

01:01:53 --> 01:01:57
where words of reinforcement learning,

01:01:59 --> 01:02:04
where reinforcement learning can step in and help.

01:02:04 --> 01:02:08
So this is back to the open question they asked yesterday:

01:02:07 --> 01:02:12
is driving closer to chess or to everyday conversation?

01:02:12 --> 01:02:17
Chess, meaning it can be formalized in a simplistic way

01:02:17 --> 01:02:21
and if you could think about it as an obstacle avoidance problem

01:02:20 --> 01:02:23
and once the obstacle avoidance is solved,

01:02:23 --> 01:02:27
you just navigate that constrained space

01:02:27 --> 01:02:31
you choose to move left, you choose to move right in a lane

01:02:31 --> 01:02:33
you choose to speed up or slow down.

01:02:34 --> 01:02:39
Well, if it's a game like chess which we'll assume for today.

01:02:39 --> 01:02:46
as opposed to for tomorrow, for today we're going to go with the one on the left

01:02:47 --> 01:02:50
and we're going to look at DeepTraffic.

01:02:51 --> 01:02:57
Here is this game of simulation

01:02:57 --> 01:03:02
where the goal is to achieve the highest average speed you can

01:03:02 --> 01:03:07
on this seven lane highway full of cars.

01:03:09 --> 01:03:13
And so, as a side note for students, the requirement is

01:03:12 --> 01:03:16
they have to follow the tutorial that I'll present a link for

01:03:15 --> 01:03:17
at the end of this presentation.

01:03:18 --> 01:03:22
And what they have to do is achieve a speed,

01:03:22 --> 01:03:27
build a network that achieves a speed of 65 miles an hour or higher.

01:03:27 --> 01:03:33
There is a leaderboard and you get to submit

01:03:32 --> 01:03:36
he model you come up with with a simple click of a button.

01:03:35 --> 01:03:37
So all of this runs in the browser

01:03:37 --> 01:03:39
which is also another amazing thing.

01:03:40 --> 01:03:44
And then you immediately or relatively so,

01:03:44 --> 01:03:46
make your way up the leaderboard.

01:03:49 --> 01:03:51
So let's look, let's zoom in.

01:03:52 --> 01:03:57
What is this world, two-dimensional world of traffic is,

01:03:56 --> 01:04:02
what does it look like for the intelligent system?

01:04:02 --> 01:04:07
We descritize that world into a grid shown here on the left.

01:04:07 --> 01:04:09
That's the representation of the state.

01:04:08 --> 01:04:10
There are seven lanes

01:04:10 --> 01:04:14
and every single lane is broken up into blocks spatially.

01:04:14 --> 01:04:19
And if there is a car in that block, the length of a car is about 3 blocks,

01:04:19 --> 01:04:26
3 of those grid blocks, then that grid is seen as occupied.

01:04:28 --> 01:04:31
and then the red car is you.

01:04:31 --> 01:04:34
That's the thing that's running in the intelligent agent.

01:04:36 --> 01:04:40
There is on the left, is the current speed of the red car,

01:04:40 --> 01:04:43
actually says MIT on top.

01:04:45 --> 01:04:48
And then you also have a count of how many cars you passed

01:04:49 --> 01:04:55
and if your network sucks then that number is going to get to be negative.

01:04:57 --> 01:05:02
You can also change with a drop down the simulation speed

01:05:01 --> 01:05:05
from normal on the left to fast on the right.

01:05:10 --> 01:05:17
So, you know, the fast speads up the replay of the simulation.

01:05:16 --> 01:05:21
The one on the left, normal, it feels a little more like real driving.

01:05:26 --> 01:05:29
There is a drop down for different display options.

01:05:29 --> 01:05:33
The default is non, in terms of stuff you show on the road.

01:05:33 --> 01:05:38
Then there is the learning input which is the,

01:05:37 --> 01:05:40
while that whole space is descritized,

01:05:40 --> 01:05:45
you can choose what your car sees

01:05:46 --> 01:05:50
and that's you could choose how far ahead it sees behind,

01:05:50 --> 01:05:53
how far to the left and right It sees.

01:05:53 --> 01:05:57
And so by choosing the learning input, to visualize learning input,

01:05:56 --> 01:06:00
you get to see what you set that input to be.

01:06:00 --> 01:06:04
Then there is the safety system.

01:06:04 --> 01:06:08
This is a system that protects you from yourself.

01:06:09 --> 01:06:13
The way we've made this game is

01:06:13 --> 01:06:16
they operates under something similar

01:06:16 --> 01:06:19
if you have some intelligence in

01:06:18 --> 01:06:24
if you're driving you have adaptive cruise control in your car.

01:06:23 --> 01:06:28
It operates in the same way. When he gets close to the car in front,

01:06:27 --> 01:06:28
It slows down for you It operates in the same way. When he gets close to the car in front,

01:06:27 --> 01:06:29
It slows down for you

01:06:29 --> 01:06:34
and it doesn't let you run the car to the left of you,

01:06:33 --> 01:06:36
to the right of you, off the road.

01:06:36 --> 01:06:43
So constrains the movement capabilities of your car

01:06:42 --> 01:06:46
in such a way that you don't hit anybody because

01:06:45 --> 01:06:49
then it would have to simulate collisions and that would just be a mess.

01:06:49 --> 01:06:54
So, it protects you from that and so you can

01:06:53 --> 01:06:59
choose to visualize that "safety system" with a visualization box.

01:06:58 --> 01:07:02
And then you can also choose to visualize the full map.

01:07:02 --> 01:07:06
This is the full occupancy map that you get

01:07:05 --> 01:07:10
if you would like to provide as input to the network.

01:07:11 --> 01:07:15
Now that input for every single grid that it's a number.

01:07:15 --> 01:07:18
It's not just a 0, 1 whether there's a car in there.

01:07:18 --> 01:07:25
It's the maximum speed limit which is 80 miles per hour.

01:07:24 --> 01:07:29
Don't get crazy eighty miles an hour is the speed limit.

01:07:29 --> 01:07:35
That block when it's empty is set to the 85 miles eighty miles an hour.

01:07:35 --> 01:07:42
And when it's occupied, it's set to the number that is the speed of the car.

01:07:42 --> 01:07:47
And then, the blocks that the red car is occupying

01:07:46 --> 01:07:50
is set to the number, to a very large number

01:07:49 --> 01:07:51
much higher than the speed limit.

01:07:57 --> 01:08:01
So safety system, here shown in red,

01:08:02 --> 01:08:08
are the parts of the grid that your car can't move into.

01:08:08 --> 01:08:09
Question.

01:08:12 --> 01:08:13
What's that?

01:08:18 --> 01:08:22
Yes. Yes. The question was:

01:08:22 --> 01:08:26
"what was the third option I just mentioned and

01:08:25 --> 01:08:30
t's you the red car itself, you yourself,

01:08:29 --> 01:08:33
the blocks underneath that car I set to really high number.

01:08:33 --> 01:08:35
It's a way for the algorithm to know,

01:08:35 --> 01:08:40
for the learning algorithm to know that these blocks are special.

01:08:42 --> 01:08:48
So safety system, shows read here, if

01:08:47 --> 01:08:51
the car can't move into those blocks.

01:08:52 --> 01:09:00
So ,in terms of when it lights up red, it means

01:08:59 --> 01:09:02
the car can't speed up anymore in front of it

01:09:01 --> 01:09:05
and when the blocks to the left or to the right light up as red

01:09:04 --> 01:09:07
that means you can't change lanes to the left or right.

01:09:08 --> 01:09:13
On the right of the slide, you're free to go,

01:09:12 --> 01:09:14
free to do whatever you want.

01:09:13 --> 01:09:18
That's what that indicates is all the blocks are yellow.

01:09:18 --> 01:09:23
Safety system says you're free to choose any of the five actions.

01:09:23 --> 01:09:28
In the five actions are move left, move right,

01:09:28 --> 01:09:32
same place, accelerate or slow down.

01:09:33 --> 01:09:36
And those actions are given as input.

01:09:36 --> 01:09:42
That action was produced by the what's called here, the brain.

01:09:43 --> 01:09:48
The brain takes in the current state as input, the last reward,

01:09:47 --> 01:09:52
and produces and learns and uses that reward

01:09:52 --> 01:09:59
to train the network through backward function there,

01:09:58 --> 01:10:05
back propagation, and then ask the brain given the current state,

01:10:04 --> 01:10:10
to give it the next action with the forward pass, the forward function.

01:10:09 --> 01:10:14
You don't need to know the operation of this function in particular,

01:10:13 --> 01:10:17
this is not something you need to worry about,

01:10:16 --> 01:10:20
but you can if you want, you can customize this learning step.

01:10:23 --> 01:10:27
There's, by the way, what I'm describing now

01:10:26 --> 01:10:30
there's just a few lines of code right there in the browser

01:10:29 --> 01:10:35
that you can change immediately with the press of a button

01:10:35 --> 01:10:38
changes the simulation or the design of the network.

01:10:37 --> 01:10:40
You don't need to have any special hardware,

01:10:40 --> 01:10:42
you dont' need to do anything special.

01:10:41 --> 01:10:46
And the tutorial cleanly outlines exactly all of these steps

01:10:46 --> 01:10:51
but it's kind of amazing that you can design a deep neural network

01:10:50 --> 01:10:53
that's part of the reinforcement learning agent.

01:10:53 --> 01:10:58
So it's a deep Q learning agent right there in the browser.

01:10:59 --> 01:11:04
So you can choose the lane side variable

01:11:03 --> 01:11:09
which controls how many lanes to the side you see.

01:11:08 --> 01:11:11
So in that value zero you only look forward.

01:11:11 --> 01:11:15
When their values 1, you have one lane to the left, one valid to the right.

01:11:15 --> 01:11:19
It's really the lane the radius of your perception system.

01:11:19 --> 01:11:22
Patches ahead is how far ahead you look;

01:11:21 --> 01:11:24
patches behind is how far behind you look.

01:11:26 --> 01:11:31
And so for example here, the lane side equals 2 that means

01:11:30 --> 01:11:38
it looks to the left, to the right; obviously, if to the right, is off road.

01:11:38 --> 01:11:42
It provides a value of 0 in those blocks.

01:11:45 --> 01:11:49
If we set the patches behind to be 10, it looks 10 patches back

01:11:48 --> 01:11:54
behind starting at the 1 patch back is starting from the front of the car.

01:11:56 --> 01:12:01
The scoring for the evaluation of the competition

01:12:01 --> 01:12:06
is your average speed over a predefined period of time.

01:12:06 --> 01:12:11
And so the method we do we use to collect that speed

01:12:10 --> 01:12:16
is we we run the agent 10 runs, about 30 simulated minutes of game each.

01:12:16 --> 01:12:21
And take the median speed of the 10 runs. That's the score.

01:12:22 --> 01:12:31
This is done server side and so given that we've gotten some

01:12:31 --> 01:12:36
for this code recently gotten some publicity online unfortunately.

01:12:37 --> 01:12:41
This might be a dangerous thing to say there's no cheating possible.

01:12:40 --> 01:12:46
But because it's done server side and this is javascript

01:12:45 --> 01:12:49
and runs in the browser, it's hopefully a sandbox.

01:12:49 --> 01:12:53
So we can't do anything tricky but we dare you to try.

01:12:57 --> 01:13:02
You can try it locally to get an estimate, you know,

01:13:02 --> 01:13:07
and there's a button that says evaluate and it gives you a score right back

01:13:06 --> 01:13:09
of how well you're doing with the current network.

01:13:12 --> 01:13:18
That button is: Start Evaluation Run; you press the button.

01:13:18 --> 01:13:22
It does a progress bar and gives you the average speed

01:13:25 --> 01:13:31
There's a code box where you modify all the variables I mentioned

01:13:30 --> 01:13:34
and the tutorial describe this in detail.

01:13:33 --> 01:13:37
And then once you're ready, you modify a few things

01:13:36 --> 01:13:44
you can press apply code it restarts, it kills all the training

01:13:43 --> 01:13:48
that you've done up to this point or resets it and start the training again.

01:13:49 --> 01:13:53
So save often and there's a save button.

01:13:53 --> 01:13:59
So the training is done a separate thread in Web Workers

01:14:01 --> 01:14:07
which are exciting things that allow javascript to run

01:14:06 --> 01:14:15
amazingly on multiple CPU Cores in a parallel way.

01:14:16 --> 01:14:22
So the simulation that scores this or, sorry, the training is done

01:14:21 --> 01:14:26
a lot faster than real time, a thousand frames a second.

01:14:25 --> 01:14:32
That's a thousand movement steps a second. This is all in javascript.

01:14:33 --> 01:14:37
And the next they get shipped to the main simulation

01:14:36 --> 01:14:40
from time to time as the training goes on.

01:14:40 --> 01:14:44
So all you have to do is press run training.

01:14:44 --> 01:14:48
And it trains and the car behaves better over time.

01:14:48 --> 01:14:52
Maybe like I should show it in the browser.

01:14:54 --> 01:15:00
Let's see if will work well, is this going to mess up? We're good.

01:15:12 --> 01:15:14
What can possibly go wrong?

01:15:26 --> 01:15:34
So there's the game. When it starts, this is running live in the browser.

01:15:35 --> 01:15:41
Artificial intelligence, ladies and gentleman in the browser. a neural network.

01:15:41 --> 01:15:45
So currently it's not very good, it's driving at 2 miles an hour

01:15:45 --> 01:15:48
and watching everybody pass.

01:15:48 --> 01:15:57
So what's being shown live is the lost function which is pretty poor.

01:15:57 --> 01:16:02
So in order to train, like I said, a thousand frames a second

01:16:02 --> 01:16:08
you just press the "Run Training" button and pretty quickly it learns

01:16:07 --> 01:16:13
based on the network you specify in the code box, how to-

01:16:12 --> 01:16:17
and based on the input and all the things that I mentioned,

01:16:17 --> 01:16:23
training finished. It learns how to do a little better.

01:16:23 --> 01:16:26
We, on purpose. put in a network that's not very good in there.

01:16:26 --> 01:16:30
So right now I won't, on the average, be doing that well

01:16:30 --> 01:16:33
but it does better than standing there in place

01:16:33 --> 01:16:36
and then you could do the start Evaluation Run

01:16:37 --> 01:16:42
to simulate the network much faster than real time,

01:16:42 --> 01:16:44
to see how well it does

01:16:44 --> 01:16:47
This is a similar evaluation step that we take

01:16:48 --> 01:16:52
when determining where you stand on the leaderboard

01:16:51 --> 01:16:54
at the current current average speed.

01:16:54 --> 01:17:02
In that 10 run simulation is 56.56 miles per hour.

01:17:02 --> 01:17:07
Now, I may be logged in, maybe not.

01:17:06 --> 01:17:12
If you're logged in, you click "Submit your code."

01:17:11 --> 01:17:16
If you're not logged in, it says: "You're not logged in. Please log in to submit your code."

01:17:18 --> 01:17:22
And then all you have to do is log in.

01:17:23 --> 01:17:26
This is the most flawless demo of my life.

01:17:27 --> 01:17:33
And then you press "Submit Model" again and success. Oh man.

01:17:35 --> 01:17:42
"Thank you for your submission." And so now my submission is entered as "Lex" in the leaderboard

01:17:42 --> 01:17:45
and my 56.56, or whatever it was.

01:17:45 --> 01:17:48
So I dare all of you to try to beat that. So too.

01:17:52 --> 01:17:56
As as you play around with stuff if you want to save the code

01:17:57 --> 01:18:01
you could do so by pressing the "Save Code" button.

01:18:00 --> 01:18:05
That saves the various javascript configurations

01:18:04 --> 01:18:09
and that saves the network layout to file.

01:18:09 --> 01:18:16
And you can load from files as well. the danger it overrides the code for you.

01:18:17 --> 01:18:21
And you press the "Submit" button to submit the model to the competition.

01:18:21 --> 01:18:25
Make sure that you train the network, we don't train it for you.

01:18:25 --> 01:18:29
You submit a model and you have to press "Train".

01:18:30 --> 01:18:35
And he gets evaluated the time it enters a queue to get evaluated.

01:18:36 --> 01:18:39
This is public phasing so the queue can grow pretty big

01:18:39 --> 01:18:44
and it goes to that queue, evaluates it and then depending on where you stand

01:18:43 --> 01:18:47
you get added to the leaderboard showing the top ten entries.

01:18:48 --> 01:18:54
You can resubmit often and only the highest score counts.

01:18:55 --> 01:18:59
Okay, we're using code-

01:19:00 --> 01:19:07
Now implementation of neural networks done in just javascript

01:19:08 --> 01:19:12
by Andrej Karpathy from Stanford now OpenAI.

01:19:12 --> 01:19:19
ConvNet.JS is a library and what's being visualized there

01:19:18 --> 01:19:22
is also being visualized in the game is the inputs to the network.

01:19:22 --> 01:19:28
In this case it's 135 inputs. You can also specify not just the

01:19:30 --> 01:19:34
how far ahead behind you're seeing to the left and to the right,

01:19:33 --> 01:19:37
you can specify how far back in time you look as well.

01:19:40 --> 01:19:48
And so what's visualize there is the input to the network 135 neurons

01:19:47 --> 01:19:52
and then the output, a regression, similar to the kind of

01:19:51 --> 01:19:56
opo we saw with numbers where there's 10 outputs saying

01:19:55 --> 01:20:01
if it's a 0, 1 through 9, here the output is one of the five actions:

01:20:00 --> 01:20:04
left, right, stay in place, speed up or slow down.

01:20:04 --> 01:20:10
The ConvNet.JS settings is you can select a number of inputs

01:20:10 --> 01:20:14
if you want to mess with this stuff, this is all stuff you don't need to mess with

01:20:14 --> 01:20:18
because we already gave you the variables of lane side and patches ahead and so on.

01:20:18 --> 01:20:25
You can select a number of actions, the temporal window and the network size.

01:20:29 --> 01:20:35
So the network definition here is the-

01:20:36 --> 01:20:39
This is the input, the size of the input.

01:20:39 --> 01:20:43
Again all this is in the tutorial just to give you a little outline.

01:20:42 --> 01:20:48
There is the first fully connected layer has 10 neurons

01:20:48 --> 01:20:54
with relu activation functions, same kind of smooth

01:20:54 --> 01:21:00
function that we talked about before and the regression layer for the output.

01:21:02 --> 01:21:08
And there's a bunch of other messy options you play with if you dare.

01:21:08 --> 01:21:12
But those aren't, the ones I mentioned before is really the important ones.

01:21:11 --> 01:21:15
Selecting the number of layers, the size of those layers,

01:21:15 --> 01:21:18
you get to build your own very neural network that drives.

01:21:19 --> 01:21:23
And the actual learning is done with a backward propagation

01:21:22 --> 01:21:28
and then that returns the action by doing a forward pass to the network.

01:21:28 --> 01:21:36
In case you're interested in this kind of stuff, there is an amazingly cool code editor.

01:21:36 --> 01:21:44
That's the Monaco Editor. It just works, it does some auto-completions

01:21:43 --> 01:21:48
o you get to play with it makes everything very convenient in terms of coding editing.

01:21:48 --> 01:21:58
A lot of this visualization of the game and the simulation we'll talk about tomorrow

01:21:57 --> 01:22:02
is done in the browser using HTML5 canvas.

01:22:02 --> 01:22:06
So here is a simple specification of a blue box with canvas

01:22:06 --> 01:22:10
and this is very efficient and easy to work with.

01:22:12 --> 01:22:21
And the thing that a lot of us are excited about, a very subtle one, but there you can, not just run.

01:22:22 --> 01:22:27
So with the V8 Engine javascript has become super fast.

01:22:26 --> 01:22:31
You could train neural networks in the browser that's already amazing.

01:22:30 --> 01:22:36
And then with Web Workers as long as you have Chrome, a modern browser.

01:22:37 --> 01:22:42
You can run multiple processes in separate threads

01:22:43 --> 01:22:47
o you could do a lot of stuff you can do visualization separately

01:22:46 --> 01:22:50
and you can train separate threads, very cool.

01:22:50 --> 01:22:55
Okay. so the tutorial is cars.mit,edu/deeptraffic.

01:22:55 --> 01:22:59
We won't put these links on the website for a little bit because.

01:23:02 --> 01:23:05
We got put on the front page of Hacker News

01:23:06 --> 01:23:10
which we don't want those to leak out

01:23:09 --> 01:23:13
especially with the claims the you can't cheat.

01:23:14 --> 01:23:21
And while it's pretty efficient in terms of running everything on your machine, client side,

01:23:21 --> 01:23:25
it's still. you have to pull some images here and pull some of the code.

01:23:25 --> 01:23:32
So the tutorials on cars.mit,edu/deeptraffic and the simulation is deeptrafficjs

01:23:32 --> 01:23:40
So cars.mit,edu/deeptrafficjs I encourage you to go there play with the network submit your code.

01:23:40 --> 01:23:46
and win the very special prize and it is pretty cool one but we're still working on it.

01:23:46 --> 01:23:58
There is a prize I swear. All right so let's take a pause and think about what we talked about today.

01:23:59 --> 01:24:08
So the very best of deep reinforcement learning is the most exciting accomplishment,

01:24:08 --> 01:24:19
I think, is when the game- When I first started as a freshman, took "Intro to Artificial Intelligence"

01:24:21 --> 01:24:29
it was said that it's a game that's impossible for machines to beat because of the combinatorial complexity they just

01:24:28 --> 01:24:31
he sheer number of options.

01:24:30 --> 01:24:40
it's so much more complex than chess and so the most amazing accomplishment of deep reinforcement learning

01:24:39 --> 01:24:47
to me is the design of AlphaGo when for the first time the world champion in Go was beaten

01:24:47 --> 01:24:53
by DeepMind AlphaGo and the way they did it

01:24:52 --> 01:25:03
and this is, I think very relevant to driving is you start by creating first in a supervised way training a policy network.

01:25:04 --> 01:25:16
So you take expert games to construct a network first so you look you don't play against yourself.

01:25:16 --> 01:25:25
They agent doesn't play against itself but they learn from expert games, so there is some human Ground Truth.

01:25:24 --> 01:25:30
This Human Ground Truth represents reality, so for driving this is important

01:25:29 --> 01:25:35
We have a- Well we're starting to get a lot of data were video of drivers is being recorded.

01:25:35 --> 01:25:43
So we can learn on that data before would then run the agents through a simulation where it learns much larger magnitudes

01:25:43 --> 01:26:00
of data sets through simulation. And they did just that. Now as a reminder that when you let an agent drive itself.

01:26:01 --> 01:26:07
This is probably one of the favorite videos of all time but I just recently saw a cyclist and just watch this for hours.

01:26:07 --> 01:26:23
but it's a reminder that you can't trust your first estimates of a reward function to be those that are safe

01:26:22 --> 01:26:30
and productive for our society when you're talking about an intelligence system that gets to operate in the real world.

01:26:29 --> 01:26:40
This is just as clear of a reminder of that as there is. So again all the references are available online.

01:26:40 --> 01:26:42
For these slides. we'll put up the slides.

01:26:42 --> 01:26:49
I imagine you might have, if you want to come down and talk to us for questions for the either Docker

01:26:48 --> 01:27:01
or javascript. Question. The question was: "What is the visualization you're seeing in deep traffic?"

01:27:00 --> 01:27:04
You're seeing a car move about. Why is it moving?

01:27:04 --> 01:27:11
It's moving based on the latest snapshot of the network you trained, so it's just visualizing; for you, just for fun.

01:27:10 --> 01:27:14
The network you train most recently.

01:27:14 --> 01:27:29
Okay so if people have questions, stick around afterwards. Just details on Docker and [CHUCKLING]- Yes. Do you want to do it offline?

<!-- YOUTUBE_TRANSCRIPT_END -->
