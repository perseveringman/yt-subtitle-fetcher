---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "nFTQ7kHQWtc"
title: "MIT 6.S094: Recurrent Neural Networks for Steering Through Time"
video_url: "https://www.youtube.com/watch?v=nFTQ7kHQWtc"
thumbnail_url: "https://i.ytimg.com/vi/nFTQ7kHQWtc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=nFTQ7kHQWtc"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2017-02-01T19:13:35.000Z"
upload_date: "2017-02-01"
duration_seconds: 4559
duration_human: "1:15:59"
view_count: 151047
like_count: 1965
has_subtitle: true
language: null
availability: "public"
fetched_at: "2026-04-23T17:22:27.184Z"
---

# MIT 6.S094: Recurrent Neural Networks for Steering Through Time

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=nFTQ7kHQWtc
- video_id: nFTQ7kHQWtc
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2017-02-01T19:13:35.000Z
- upload_date: 2017-02-01
- duration: 1:15:59
- view_count: 151047
- like_count: 1965
- has_subtitle: true
- language: _none_
- availability: public
- tags: mit, deep learning, recurrent neural networks, introduction, rnn, steering, end-to-end driving
- categories: Science & Technology

## Description

This is lecture 4 of course 6.S094: Deep Learning for Self-Driving Cars taught in Winter 2017.

INFO:
Slides: http://bit.ly/2Hc2zhf
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
All right. So, we have talked about

00:00:04 --> 00:00:07
regular neural networks,

00:00:06 --> 00:00:09
fully connected neural networks,

00:00:08 --> 00:00:12
we have talked about convolutional neural networks

00:00:11 --> 00:00:13
that work with images,

00:00:12 --> 00:00:15
we have talked about Reinforcement,

00:00:14 --> 00:00:17
Deeper Reinforcement Learning,

00:00:16 --> 00:00:19
where we plug in a neural network

00:00:18 --> 00:00:23
into a Reinforcement Learning Algorithm,

00:00:23 --> 00:00:26
when a system has to not only

00:00:25 --> 00:00:28
perceive the world but also act in it,

00:00:27 --> 00:00:30
and collect a reward.

00:00:29 --> 00:00:32
And today we will talk about,

00:00:32 --> 00:00:35
perhaps the least understood

00:00:34 --> 00:00:38
but the most exciting neural network out there,

00:00:38 --> 00:00:43
flavor of neural networks, is Recurrent Neural Networks.

00:00:44 --> 00:00:47
But first, for administrative stuff,

00:00:48 --> 00:00:51
there’s a website. I don’t know if you heard,

00:00:50 --> 00:00:53
cars.mit.edu,

00:00:52 --> 00:00:56
where you should create an account, if you’re a registered student,

00:00:55 --> 00:00:58
that’s one of the requirements.

00:00:57 --> 00:00:59
You need to have an account

00:00:58 --> 00:01:01
if you want to get credit for this,

00:01:00 --> 00:01:03
you need to submit code

00:01:02 --> 00:01:07
for DeepTrafficJS, and DeepTeslaJS,

00:01:06 --> 00:01:09
and for DeepTraffic,

00:01:08 --> 00:01:12
you have to have a neural network that drives faster than 65mph.

00:01:12 --> 00:01:15
If you need help to achieve that speed

00:01:14 --> 00:01:17
please e-mail us.

00:01:17 --> 00:01:20
We can give you some hints.

00:01:20 --> 00:01:24
For those of you who are old school SNL fans,

00:01:23 --> 00:01:26
there’s the Deep Thoughts section now,

00:01:27 --> 00:01:30
in the profile page,

00:01:29 --> 00:01:32
where we encourage you to talk about

00:01:31 --> 00:01:35
he kinds of things that you tried in DeepTraffic

00:01:34 --> 00:01:36
or any of the other

00:01:35 --> 00:01:40
DeepTesla or any of the work you've done

00:01:39 --> 00:01:43
as part of this class for DeepLearning.

00:01:43 --> 00:01:44
Okay,

00:01:45 --> 00:01:47
we have talked about

00:01:46 --> 00:01:50
he Vanilla Neural Networks on the left.

00:01:49 --> 00:01:52
The Vanilla Neural Network

00:01:51 --> 00:01:54
is the one where it's computing

00:01:54 --> 00:01:57
is approximating a function that maps from one input

00:01:57 --> 00:02:00
o one output.

00:01:59 --> 00:02:02
An example is mapping images

00:02:01 --> 00:02:04
to the number that is shown in the image.

00:02:03 --> 00:02:06
For ImageNet

00:02:05 --> 00:02:07
is mapping an image

00:02:06 --> 00:02:09
to what's the object in the image.

00:02:08 --> 00:02:11
It can be anything.

00:02:10 --> 00:02:11
In fact,

00:02:11 --> 00:02:14
Convolutional Neural Networks can operate on audio,

00:02:13 --> 00:02:18
you can give it a chunk of audio, a five second audio clip,

00:02:17 --> 00:02:20
that still counts as one input

00:02:19 --> 00:02:22
because it’s fixed-size.

00:02:21 --> 00:02:24
As long as the size of the input is fixed,

00:02:23 --> 00:02:28
that's one chunk of input

00:02:27 --> 00:02:30
and as long as you have ground truth

00:02:29 --> 00:02:33
at maps that chunk of input to some output

00:02:32 --> 00:02:34
ground truth,

00:02:33 --> 00:02:37
that’s the Vanilla Neural Network.

00:02:36 --> 00:02:39
Whether there's a fully connected neural network

00:02:38 --> 00:02:41
or convolutional neural network.

00:02:41 --> 00:02:45
Today we’ll talk about the amazing,

00:02:45 --> 00:02:48
the mysterious Recurrent Neural Networks.

00:02:47 --> 00:02:50
They compute functions

00:02:50 --> 00:02:53
from one to many,

00:02:52 --> 00:02:54
from many to one,

00:02:53 --> 00:02:56
from many to many.

00:02:59 --> 00:03:01
Also bidirectional.

00:03:01 --> 00:03:03
What does that mean?

00:03:02 --> 00:03:06
They take its input sequences,

00:03:05 --> 00:03:08
time series,

00:03:07 --> 00:03:09
audio,

00:03:09 --> 00:03:11
video,

00:03:10 --> 00:03:13
whenever there's a sequence of data,

00:03:12 --> 00:03:15
and that temporal dynamics

00:03:14 --> 00:03:16
that connects the data

00:03:16 --> 00:03:19
is more important than the spatial

00:03:20 --> 00:03:23
content of each individual frame.

00:03:22 --> 00:03:25
So, whenever there's a lot of information

00:03:24 --> 00:03:27
being conveyed in a sequence,

00:03:27 --> 00:03:29
in a temporal change

00:03:29 --> 00:03:31
of whatever that type of data is,

00:03:30 --> 00:03:34
that's when you want to use Recurrent Neural Networks

00:03:33 --> 00:03:36
like speech,

00:03:35 --> 00:03:37
natural language,

00:03:37 --> 00:03:39
audio

00:03:38 --> 00:03:41
and the power of this

00:03:40 --> 00:03:42
that for many of them,

00:03:41 --> 00:03:44
for a Recurrent Neural Network,

00:03:43 --> 00:03:45
where they really shine,

00:03:44 --> 00:03:50
is when the size of the input is variable,

00:03:49 --> 00:03:52
so you don’t have a fixed chunk of data

00:03:51 --> 00:03:54
that you're putting in is variable input.

00:03:53 --> 00:03:56
And the same goes for the output,

00:03:56 --> 00:04:01
so you can give it a sequence of speech,

00:04:01 --> 00:04:03
several seconds of speech

00:04:03 --> 00:04:06
and then the output is

00:04:06 --> 00:04:11
a single label of whether the speaker is male or female.

00:04:11 --> 00:04:14
That’s many to one.

00:04:14 --> 00:04:17
You can also do

00:04:17 --> 00:04:19
many to many.

00:04:19 --> 00:04:21
Translation.

00:04:20 --> 00:04:23
You can have natural language

00:04:22 --> 00:04:24
put into the network

00:04:25 --> 00:04:28
in Spanish

00:04:27 --> 00:04:30
and the output is in English.

00:04:30 --> 00:04:32
Machine translation.

00:04:31 --> 00:04:33
That's many to many.

00:04:33 --> 00:04:36
And that many to many doesn't have to be

00:04:35 --> 00:04:38
mapped directly

00:04:37 --> 00:04:40
into same sized sequences.

00:04:40 --> 00:04:43
For video, the sequence size might be the same

00:04:42 --> 00:04:46
you're labeling every single frame, you put in

00:04:45 --> 00:04:48
a five second clip

00:04:49 --> 00:04:51
of somebody playing basketball

00:04:50 --> 00:04:53
and you can label every single frame

00:04:52 --> 00:04:56
counting the number of people in every single frame.

00:04:55 --> 00:04:57
That's many to many

00:04:56 --> 00:05:00
when the size of the input and the size of the output is the same

00:04:59 --> 00:05:01
Yes, question?

00:05:00 --> 00:05:02
The question was,

00:05:01 --> 00:05:06
are there are any models where there's feedback from output and input?

00:05:05 --> 00:05:10
That's exactly what Recurrent Neural Networks are.

00:05:09 --> 00:05:12
It produces output,

00:05:11 --> 00:05:14
and it copies that output

00:05:13 --> 00:05:16
and loops it back in.

00:05:18 --> 00:05:22
That's almost the definition of a Recurrent Neural Network.

00:05:21 --> 00:05:25
There's a loop in there that produces the output

00:05:24 --> 00:05:28
and also takes that output as input once again.

00:05:29 --> 00:05:34
There's also many to many where the sequences don't align.

00:05:33 --> 00:05:35
Like machine translation,

00:05:34 --> 00:05:37
the size of the output sequence

00:05:36 --> 00:05:40
might be totally different than the input sequence.

00:05:39 --> 00:05:42
We will look on a lot of cool applications;

00:05:44 --> 00:05:46
you can start a song,

00:05:45 --> 00:05:49
learn the audio of a particular song

00:05:48 --> 00:05:52
have the Recurrent Neural Network

00:05:51 --> 00:05:56
to continue that song after a certain period of time.

00:05:55 --> 00:05:58
So it can learn to generate sequences

00:05:57 --> 00:06:01
of audio, of natural language, of video.

00:06:01 --> 00:06:02
Okay.

00:06:04 --> 00:06:07
I know I promised not many equations,

00:06:06 --> 00:06:08
but this is

00:06:08 --> 00:06:12
o beautifully simple

00:06:11 --> 00:06:14
that we have to cover backpropagation.

00:06:13 --> 00:06:16
It's also the thing

00:06:15 --> 00:06:19
that, if you're a little bit lazy

00:06:18 --> 00:06:20
and you go to the internet

00:06:19 --> 00:06:24
and start using the basic tutorials of TensorFlow,

00:06:23 --> 00:06:26
you ignore how backpropagation work.

00:06:25 --> 00:06:27
At you peril.

00:06:27 --> 00:06:30
You kind of assume it just works.

00:06:29 --> 00:06:32
I give it some inputs, some outputs,

00:06:31 --> 00:06:34
and it's like Lego pieces I can assemble them

00:06:33 --> 00:06:35
like you might have done with DeepTraffic

00:06:34 --> 00:06:37
A bunch of layers put in together

00:06:36 --> 00:06:40
and then just press Train.

00:06:39 --> 00:06:42
backpropagation is the mechanism

00:06:41 --> 00:06:44
that neural networks currently--

00:06:43 --> 00:06:47
The best mechanism we know of that is used for training.

00:06:46 --> 00:06:48
So you need to understand

00:06:49 --> 00:06:53
the simple power of backpropagation,

00:06:52 --> 00:06:55
but also the dangers.

00:06:57 --> 00:06:59
Summary,

00:06:59 --> 00:07:03
I put on the top of the slide, there's an input

00:07:02 --> 00:07:05
for the network that's an image,

00:07:04 --> 00:07:08
there's a bunch of neurons,

00:07:07 --> 00:07:10
all with differentiable

00:07:09 --> 00:07:13
smooth activation functions on each neuron,

00:07:12 --> 00:07:14
and then,

00:07:14 --> 00:07:19
as you pass through those activation functions,

00:07:18 --> 00:07:21
take in an input, pass it through

00:07:20 --> 00:07:26
this net of differentiable compute nodes,

00:07:25 --> 00:07:28
you produce an output.

00:07:27 --> 00:07:29
In that output

00:07:28 --> 00:07:31
you also have a ground truth,

00:07:30 --> 00:07:33
the correct, the truth

00:07:32 --> 00:07:34
at you hope

00:07:33 --> 00:07:36
or you expect the network to produce.

00:07:35 --> 00:07:39
And you can look at the differences between

00:07:38 --> 00:07:41
what the network actually produced

00:07:40 --> 00:07:43
and what you hoped it would produce,

00:07:42 --> 00:07:44
and that's an error.

00:07:43 --> 00:07:47
And then you backward propagate that error,

00:07:46 --> 00:07:48
punishing or rewarding

00:07:50 --> 00:07:55
the parameters of the network that resulted in that output

00:07:57 --> 00:08:00
Let's start with a really simple example.

00:08:03 --> 00:08:05
There's a function

00:08:04 --> 00:08:08
that takes its input

00:08:07 --> 00:08:09
up on top,

00:08:09 --> 00:08:12
three variables, X, Y and Z.

00:08:12 --> 00:08:15
The function does two things:

00:08:14 --> 00:08:16
it adds X and Y

00:08:15 --> 00:08:18
and then it multiplies

00:08:17 --> 00:08:20
that sum by Z.

00:08:20 --> 00:08:24
And then we can formulate that as a circuit,

00:08:23 --> 00:08:25
circuit of gates,

00:08:25 --> 00:08:28
where there's a Plus gate,

00:08:27 --> 00:08:30
and a Multiplication gate.

00:08:36 --> 00:08:39
Let's take some inputs,

00:08:38 --> 00:08:40
shown in blue.

00:08:39 --> 00:08:42
Let's say it's X is negative two,

00:08:41 --> 00:08:45
Y is five and Z is negative four.

00:08:45 --> 00:08:48
And let's do a forward pass

00:08:47 --> 00:08:49
through the circuit

00:08:48 --> 00:08:51
o produce the output.

00:08:52 --> 00:08:56
Negative two plus five equals three

00:08:55 --> 00:08:58
q is that intermediate value,

00:08:58 --> 00:09:00
three.

00:09:01 --> 00:09:04
This is so simple,

00:09:03 --> 00:09:06
and so important to understand

00:09:05 --> 00:09:08
that I just want to take my time for this

00:09:07 --> 00:09:12
because everything else about neural networks just builds on these concepts

00:09:13 --> 00:09:16
The add gate produces q,

00:09:15 --> 00:09:18
in this case, is three,

00:09:17 --> 00:09:20
and three times negative four is twelve.

00:09:19 --> 00:09:21
That's the output.

00:09:20 --> 00:09:25
The output of the circuit of this network,

00:09:24 --> 00:09:27
if you think of it as such,

00:09:26 --> 00:09:29
is negative twelve.

00:09:29 --> 00:09:32
The forward pass is shown in blue

00:09:31 --> 00:09:34
the backward pass will be shown in red

00:09:33 --> 00:09:35
in a second here

00:09:34 --> 00:09:37
What we want to do,

00:09:36 --> 00:09:38
what would make us happy,

00:09:37 --> 00:09:40
what would make f happy

00:09:39 --> 00:09:43
is for the output to be as high possible.

00:09:42 --> 00:09:45
Negative twelve, so-so, it could be better.

00:09:44 --> 00:09:46
How do we teach it

00:09:46 --> 00:09:49
How do we adjust X, Y and Z,

00:09:49 --> 00:09:55
to ensure it produces a higher f

00:09:55 --> 00:09:57
makes f happier.

00:09:56 --> 00:10:00
Let's start backward,

00:10:00 --> 00:10:02
The backward pass.

00:10:02 --> 00:10:06
We'll make the gradient on the output one,

00:10:05 --> 00:10:08
meaning we want this to increase.

00:10:07 --> 00:10:10
We want f to increase.

00:10:09 --> 00:10:12
That's how we encode our happiness.

00:10:12 --> 00:10:15
We want it to go up by one.

00:10:16 --> 00:10:20
In order to then propagate

00:10:21 --> 00:10:24
that fact that we want

00:10:23 --> 00:10:26
he f to go up by one,

00:10:25 --> 00:10:28
we have to look at

00:10:27 --> 00:10:31
he gradient on each one of the gates.

00:10:30 --> 00:10:33
And what's a gradient?

00:10:34 --> 00:10:36
It's a

00:10:37 --> 00:10:39
partial derivative

00:10:40 --> 00:10:43
with respect to its inputs.

00:10:42 --> 00:10:46
The partial derivative of the output of the gate

00:10:45 --> 00:10:48
with respect to its inputs,

00:10:47 --> 00:10:50
if you don't know what that means,

00:10:49 --> 00:10:51
is just

00:10:54 --> 00:10:57
how much does the output change

00:10:56 --> 00:10:59
when I change the inputs a little bit.

00:10:58 --> 00:11:03
What is the slope of that change if I increase X

00:11:02 --> 00:11:05
for the first function of addition,

00:11:04 --> 00:11:08
f of X, Y equals X plus Y.

00:11:07 --> 00:11:10
If I increase X by a little bit,

00:11:09 --> 00:11:11
what happens to f?

00:11:10 --> 00:11:14
If I increase Y by a little bit, what happens to f?

00:11:13 --> 00:11:16
Taking a partial derivative of those

00:11:15 --> 00:11:18
with respect to X and Y

00:11:17 --> 00:11:20
you just get a slope of one

00:11:19 --> 00:11:21
When you increase X,

00:11:20 --> 00:11:23
f increases linearly.

00:11:23 --> 00:11:25
Same with Y.

00:11:24 --> 00:11:27
Multiplication is a little trickier.

00:11:28 --> 00:11:31
When you increase X,

00:11:31 --> 00:11:34
f increases by Y.

00:11:34 --> 00:11:39
Do the partial derivative of f with respect to X is Y,

00:11:38 --> 00:11:42
the partial derivative of f with respect to Y is X.

00:11:44 --> 00:11:48
If you think about it, what happens is

00:11:47 --> 00:11:51
the gradients, when you change X,

00:11:51 --> 00:11:53
the gradient of change

00:11:53 --> 00:11:55
doesn't care about X.

00:11:54 --> 00:11:58
It cares about Y.

00:11:58 --> 00:12:00
It's flipped.

00:11:59 --> 00:12:02
So we can backpropagate that one,

00:12:01 --> 00:12:06
the indication of what makes X happy backward.

00:12:07 --> 00:12:10
And that's done by

00:12:09 --> 00:12:12
computing the local gradient.

00:12:15 --> 00:12:17
For q,

00:12:18 --> 00:12:22
the partial derivative of f with respect to q,

00:12:21 --> 00:12:24
that intermediate value,

00:12:24 --> 00:12:27
that gradient would be negative four.

00:12:26 --> 00:12:29
It will take the value of Z

00:12:28 --> 00:12:31
as I said it's the Multiplication gate,

00:12:30 --> 00:12:33
It'll take the value of Z

00:12:35 --> 00:12:37
and assign it to the gradient.

00:12:37 --> 00:12:39
And the same for

00:12:38 --> 00:12:42
the partial derivative of f with respect to Z,

00:12:41 --> 00:12:44
it will assign that to q.

00:12:43 --> 00:12:46
The value of the forward pass on the q.

00:12:45 --> 00:12:48
There's a three

00:12:47 --> 00:12:51
and a negative four on the forward pass in blue

00:12:50 --> 00:12:52
and that's flipped.

00:12:51 --> 00:12:53
Negative four and three

00:12:53 --> 00:12:55
on the backward pass.

00:12:54 --> 00:12:57
That's the gradient.

00:12:56 --> 00:13:00
And then we continue in the same exact process.

00:13:00 --> 00:13:02
But wait.

00:13:03 --> 00:13:07
What makes all of this work,

00:13:07 --> 00:13:10
is the Chain Rule.

00:13:09 --> 00:13:11
It's magical.

00:13:12 --> 00:13:15
What it allows us to do

00:13:14 --> 00:13:17
is to compute the gradient,

00:13:20 --> 00:13:24
the gradien of f with respect to the inputs X, Y, Z.

00:13:23 --> 00:13:26
We don't need to construct

00:13:27 --> 00:13:30
he giant function that is

00:13:31 --> 00:13:36
the partial derivative of f with respect to X, Y and Z

00:13:35 --> 00:13:38
analytically.

00:13:37 --> 00:13:39
We can do it step by step

00:13:38 --> 00:13:41
backpropagating the gradients.

00:13:40 --> 00:13:43
We can multiply the gradients together

00:13:42 --> 00:13:45
as opposed to doing the partial derivative

00:13:44 --> 00:13:47
of f with respect to X.

00:13:46 --> 00:13:49
We have just the intermediate,

00:13:48 --> 00:13:50
the local gradient

00:13:49 --> 00:13:54
of f with respect to q, and of q with respect to X,

00:13:53 --> 00:13:56
and multiply them together.

00:13:58 --> 00:14:00
So, Instead of computing

00:14:00 --> 00:14:03
radient of that

00:14:03 --> 00:14:07
giant function X plus Y times Z,

00:14:06 --> 00:14:09
in this case is not that giant,

00:14:08 --> 00:14:11
but it gets pretty giant with neural networks,

00:14:10 --> 00:14:13
we just go step by step.

00:14:12 --> 00:14:15
Look at the first function,

00:14:14 --> 00:14:18
simple addition, q equals X plus Y,

00:14:17 --> 00:14:21
and the second function, multiplication,

00:14:20 --> 00:14:23
f equals q times Z.

00:14:25 --> 00:14:29
The gradient on X and Y,

00:14:30 --> 00:14:33
the partial derivative

00:14:32 --> 00:14:36
of f with respect to X and Y

00:14:35 --> 00:14:38
is computed by multiplying

00:14:38 --> 00:14:42
the gradient on the output, negative four,

00:14:41 --> 00:14:45
times the gradient on the inputs,

00:14:44 --> 00:14:47
which as we talked about,

00:14:46 --> 00:14:49
when the operation is addition,

00:14:48 --> 00:14:51
that's just one.

00:14:50 --> 00:14:53
It's negative four times one.

00:14:56 --> 00:14:58
What does that mean?

00:14:57 --> 00:15:01
Let's interpret those numbers.

00:15:00 --> 00:15:05
You now have gradients on X, Y and Z

00:15:05 --> 00:15:09
the partial derivatives of F with respect to X, Y, Z.

00:15:08 --> 00:15:11
That means,

00:15:11 --> 00:15:15
for X and Y is negative four, for Z is three.

00:15:14 --> 00:15:18
That means, in order to make f happy,

00:15:17 --> 00:15:20
we have to decrease

00:15:22 --> 00:15:26
the inputs that have a negative gradient

00:15:25 --> 00:15:29
and increase the inputs that have a positive gradient.

00:15:28 --> 00:15:31
The negatives ones are X and Y,

00:15:30 --> 00:15:32
the positive is Z.

00:15:35 --> 00:15:37
Hopefully, I don't say

00:15:36 --> 00:15:40
the word “Beautiful” too many times in this presentation

00:15:39 --> 00:15:43
this is very simple. Beautifully simple.

00:15:44 --> 00:15:48
Because this gradient is a local worker,

00:15:48 --> 00:15:51
it propagates for you;

00:15:50 --> 00:15:54
it has no knowledge of the broader

00:15:53 --> 00:15:56
happiness of f.

00:15:58 --> 00:16:02
It computes the greater between the output and the input.

00:16:01 --> 00:16:04
And it can propagate this gradient

00:16:03 --> 00:16:06
based on,

00:16:05 --> 00:16:08
in this case f,

00:16:07 --> 00:16:10
a gradient of one but also the error.

00:16:10 --> 00:16:14
Instead of one we can have on the output the error

00:16:13 --> 00:16:15
as the measure of happiness.

00:16:14 --> 00:16:18
And then we can propagate that error backwards.

00:16:17 --> 00:16:21
These gates are important because we can break down

00:16:20 --> 00:16:23
almost every operation we can think of

00:16:22 --> 00:16:25
that we work within neural networks

00:16:24 --> 00:16:28
into one or several gates like these.

00:16:28 --> 00:16:31
The most popular are three,

00:16:30 --> 00:16:33
which is addition, multiplication

00:16:32 --> 00:16:35
and the Max operation.

00:16:34 --> 00:16:36
For addition,

00:16:39 --> 00:16:41
the process is

00:16:40 --> 00:16:43
you take a forward pass through the network,

00:16:43 --> 00:16:46
so we have a value on every single gate,

00:16:47 --> 00:16:50
and then you take the backward pass.

00:16:49 --> 00:16:53
And through the backward pass you compute those gradients.

00:16:53 --> 00:16:56
For an add gate,

00:16:55 --> 00:16:58
you equally distribute the gradients

00:16:57 --> 00:16:59
on the output to the input,

00:16:58 --> 00:17:02
when the gradient on the output is negative four,

00:17:01 --> 00:17:04
you equally distribute it tonegative four.

00:17:06 --> 00:17:10
And you ignore the forward pass value.

00:17:09 --> 00:17:13
That three is ignored when you backpropagate it.

00:17:15 --> 00:17:18
On the Multiply gate,

00:17:18 --> 00:17:20
it's trickier.

00:17:19 --> 00:17:23
You switch the forward pass values,

00:17:23 --> 00:17:28
if you look at f, that's a Multiply gate,

00:17:29 --> 00:17:32
the forward pass values are switched

00:17:32 --> 00:17:37
and multiplied by the value of the gradient in the output.

00:17:37 --> 00:17:42
If it's confusing, go through the slides slowly.

00:17:41 --> 00:17:44
It'll make a lot more sense.

00:17:44 --> 00:17:46
Hopefully.

00:17:45 --> 00:17:48
One more gate. There's the Max gate,

00:17:47 --> 00:17:51
which takes the inputs

00:17:50 --> 00:17:53
and produces as output

00:17:53 --> 00:17:56
he value that is larger.

00:17:56 --> 00:18:00
When computing the gradient of the Max gate,

00:18:01 --> 00:18:04
it distributes the gradient

00:18:04 --> 00:18:14
similarly to the Add gate, but to only one, to only one of the inputs;

00:18:13 --> 00:18:15
the largest one.

00:18:16 --> 00:18:20
unlike the Add gate, pays attention to the input

00:18:19 --> 00:18:23
values on the forward pass.

00:18:22 --> 00:18:24
All right.

00:18:24 --> 00:18:30
Lots of numbers but the whole point here is,

00:18:29 --> 00:18:31
it's really simple;

00:18:33 --> 00:18:37
a neural network is just a simple collection of these gates.

00:18:37 --> 00:18:40
You take a forward pass,

00:18:40 --> 00:18:42
you calculate some kind of function

00:18:41 --> 00:18:44
in the end, the gradient in the very end,

00:18:43 --> 00:18:46
and you propagate that back.

00:18:45 --> 00:18:50
Usually, for neural networks, that's an Error function.

00:18:49 --> 00:18:52
A Loss function, Objective function,

00:18:52 --> 00:18:56
a Cost function. All the same word.

00:18:57 --> 00:19:01
That's the Sigmoid function there

00:19:00 --> 00:19:02
When you have three weights

00:19:01 --> 00:19:05
W zero, W one, W two

00:19:04 --> 00:19:10
and X, two inputs, X0, X1,

00:19:09 --> 00:19:12
that's going to be the Sigmoid function.

00:19:11 --> 00:19:14
That's how you compute the output

00:19:18 --> 00:19:20
of the neuron.

00:19:19 --> 00:19:23
But then you can decompose that neuron

00:19:22 --> 00:19:25
you can separate it all into

00:19:24 --> 00:19:27
just a set of gates like this

00:19:26 --> 00:19:29
Addition, multiplication,

00:19:28 --> 00:19:32
there's an exponential in there and division

00:19:31 --> 00:19:33
but all very similar.

00:19:32 --> 00:19:36
And you repeat the exact same process.

00:19:38 --> 00:19:41
there's five inputs,

00:19:40 --> 00:19:42
there's three weights

00:19:41 --> 00:19:45
and two inputs. X zero, X one.

00:19:46 --> 00:19:51
You take a forward pass through this circuit,

00:19:52 --> 00:19:54
in this case again,

00:19:54 --> 00:19:59
you want it to increase so that the gradient of the output is one

00:19:58 --> 00:20:02
and you backpropagate that gradient

00:20:01 --> 00:20:04
of one, to the inputs.

00:20:04 --> 00:20:06
Now in neural networks,

00:20:05 --> 00:20:08
there's a bunch of parameters

00:20:07 --> 00:20:10
that you're trying through this process, modify.

00:20:09 --> 00:20:13
And you don't get to modify the inputs

00:20:12 --> 00:20:16
You get to modify the weights along the way,

00:20:15 --> 00:20:17
and the biases.

00:20:16 --> 00:20:18
The inputs are fixed,

00:20:17 --> 00:20:19
the outputs are fixed,

00:20:18 --> 00:20:21
the outputs that you hope

00:20:21 --> 00:20:24
the network will produce.

00:20:23 --> 00:20:26
What you're modifying is the weights.

00:20:25 --> 00:20:29
So I get to try to adjust those weights

00:20:29 --> 00:20:32
in the direction of the gradient.

00:20:34 --> 00:20:38
That's the task of backpropagation.

00:20:37 --> 00:20:42
The main way that neural networks learn.

00:20:41 --> 00:20:45
As we update the weights and the biases

00:20:44 --> 00:20:47
to decrease the loss function.

00:20:47 --> 00:20:50
The lower the loss function the better.

00:20:50 --> 00:20:53
In this case, you have

00:20:52 --> 00:20:56
three inputs on the top left.

00:20:55 --> 00:20:58
A simple network, three inputs.

00:20:58 --> 00:21:01
Three weights on each of the inputs.

00:21:00 --> 00:21:04
There's a bias on the node,

00:21:03 --> 00:21:07
b and produces an output

00:21:06 --> 00:21:14
a, and that little symbol is indicating a Sigmoid function.

00:21:15 --> 00:21:18
And the loss

00:21:17 --> 00:21:22
is computed as Y minus A squared,

00:21:22 --> 00:21:25
divided by two,

00:21:25 --> 00:21:28
where Y is the ground truth,

00:21:27 --> 00:21:32
the output that you want the network to produce.

00:21:32 --> 00:21:35
And that loss function is backpropagating

00:21:34 --> 00:21:38
in exactly the same way that we described before.

00:21:37 --> 00:21:40
The subtasks

00:21:39 --> 00:21:43
involved in this update of weights and biases

00:21:42 --> 00:21:45
is that the forward pass computes

00:21:44 --> 00:21:48
the network output at every neuron,

00:21:47 --> 00:21:50
and finally, the output layer,

00:21:50 --> 00:21:54
computes the error, the difference between a and b,

00:21:54 --> 00:21:56
and then

00:21:55 --> 00:21:58
backward propagates the gradients.

00:21:58 --> 00:22:01
Instead of one on the output,

00:22:00 --> 00:22:04
it will be the error on the output and you backpropagated.

00:22:03 --> 00:22:06
And then, once you know the gradient,

00:22:05 --> 00:22:08
you adjust the weights and the biases

00:22:07 --> 00:22:10
in the direction of the gradient.

00:22:09 --> 00:22:13
Actually, the opposite of the direction of the gradient,

00:22:12 --> 00:22:15
because you want the loss to decrease.

00:22:14 --> 00:22:19
And the amount by which you make that adjustment

00:22:18 --> 00:22:21
is called the Learning Rate.

00:22:20 --> 00:22:24
The learning rate can be the same across the entire network

00:22:23 --> 00:22:26
or can be individual through every weight.

00:22:32 --> 00:22:35
And the process

00:22:34 --> 00:22:37
of adjusting the weights and biases

00:22:36 --> 00:22:39
is just optimization.

00:22:39 --> 00:22:42
Learning is an Optimization problem.

00:22:41 --> 00:22:45
You have an objective function, and you're trying to minimize it.

00:22:44 --> 00:22:49
And your variables are the parameters, the weights and biases.

00:22:49 --> 00:22:52
Neural networks just happen to have

00:22:51 --> 00:22:55
tens, hundreds of thousands, millions

00:22:54 --> 00:22:57
of those parameters.

00:22:57 --> 00:23:01
So the function that you're trying to minimize is highly non-linear.

00:23:00 --> 00:23:04
But it boils down to something like this, you have

00:23:03 --> 00:23:10
two weights, two plots-- or actually one weight

00:23:09 --> 00:23:12
and as you adjust it, the cost

00:23:14 --> 00:23:19
you adjust in such a way that minimizes the output cost.

00:23:20 --> 00:23:25
And there's a bunch of optimization methods for doing this.

00:23:25 --> 00:23:29
this is a convex function,

00:23:28 --> 00:23:31
You can find the local minimum.

00:23:31 --> 00:23:34
If you know about these kinds of terminologies,

00:23:33 --> 00:23:37
the local minimum is the same as the global minimum,

00:23:36 --> 00:23:40
it's not a weirdly hilly terrain

00:23:39 --> 00:23:42
where you can get stuck in.

00:23:41 --> 00:23:45
Your goal is to get to the bottom of this thing

00:23:44 --> 00:23:47
and if it's really complex terrain,

00:23:46 --> 00:23:49
it will be hard to get to the bottom of it.

00:23:52 --> 00:23:56
This general approach is gradient descent,

00:23:55 --> 00:24:00
and there's a lot of different ways to do a gradient descent.

00:24:00 --> 00:24:04
Various ways of adding randomness into the process,

00:24:03 --> 00:24:07
so you don't get stuck into the weird

00:24:06 --> 00:24:10
crevices of the terrain.

00:24:10 --> 00:24:12
But it's messy.

00:24:11 --> 00:24:14
You have to be really careful.

00:24:13 --> 00:24:16
This is the part you have to be aware of,

00:24:15 --> 00:24:19
when you design a network for DeepTraffic

00:24:18 --> 00:24:21
and nothing is happening

00:24:20 --> 00:24:23
this might be what's happening:

00:24:24 --> 00:24:26
vanishing gradients

00:24:25 --> 00:24:28
or exploding gradients.

00:24:29 --> 00:24:32
When the partial derivatives

00:24:31 --> 00:24:35
are small, so you take the Sigmoid function,

00:24:35 --> 00:24:37
the most popular

00:24:37 --> 00:24:41
for a while, activation function,

00:24:40 --> 00:24:44
the derivative is zero at the tails.

00:24:43 --> 00:24:46
When the input to

00:24:45 --> 00:24:49
the Sigmoid functions is really high or really low,

00:24:48 --> 00:24:52
that derivative is going to be zero.

00:24:55 --> 00:24:58
Gradient tells on how much I want to adjust the weights.

00:24:57 --> 00:25:01
The gradient might be zero,

00:25:00 --> 00:25:03
and so you backpropagate that zero,

00:25:02 --> 00:25:05
a very low number,

00:25:04 --> 00:25:07
and it gets less and less

00:25:06 --> 00:25:09
as you backpropagate

00:25:08 --> 00:25:11
and so the result is that

00:25:12 --> 00:25:16
you think you don't need to adjust the weights at all.

00:25:15 --> 00:25:18
And when a large fraction of the network

00:25:17 --> 00:25:20
weights don't need to be adjusted,

00:25:19 --> 00:25:22
they don't adjust the weights.

00:25:21 --> 00:25:24
And you are not doing any learning

00:25:23 --> 00:25:26
So the learning is slow.

00:25:28 --> 00:25:31
There are some fixes to this,

00:25:31 --> 00:25:34
there are different types of functions.

00:25:33 --> 00:25:36
There's a piece,

00:25:35 --> 00:25:40
the ReLUs function which is the most popular activation function.

00:25:40 --> 00:25:43
But again,

00:25:43 --> 00:25:47
if the neurons are initialized poorly,

00:25:49 --> 00:25:52
this function might not fire.

00:25:51 --> 00:25:55
it might be zero gradient

00:25:54 --> 00:25:57
for the entire data set.

00:25:57 --> 00:26:01
Nothing that you produce as input,

00:26:01 --> 00:26:05
you run all your thousands of images of cats,

00:26:04 --> 00:26:07
and none of them fire at all.

00:26:06 --> 00:26:09
That's the danger here.

00:26:10 --> 00:26:13
So you have to pick

00:26:13 --> 00:26:18
both the optimization engine,

00:26:17 --> 00:26:20
the solver that you use

00:26:19 --> 00:26:22
and the activation functions carefully.

00:26:21 --> 00:26:26
You can't just plug and play like they're Lego's

00:26:25 --> 00:26:29
You have to be aware of the function.

00:26:29 --> 00:26:33
SGD, Stochastic Gradient Descent,

00:26:38 --> 00:26:43
that's the Vanilla optimization algorithm

00:26:42 --> 00:26:44
for gradient descent.

00:26:44 --> 00:26:49
For optimizing the loss function over the gradients

00:26:48 --> 00:26:51
And what's visualized here is,

00:26:50 --> 00:26:55
again, if you have done any numerical optimization,

00:26:54 --> 00:26:57
and non-linear optimization,

00:26:56 --> 00:26:59
there's the famous saddle point,

00:26:59 --> 00:27:03
that's tricky for these algorithms to deal with.

00:27:02 --> 00:27:07
What happens is, it's easy for them to oscillate,

00:27:06 --> 00:27:10
get stuck in that saddle and oscillating back and forth

00:27:09 --> 00:27:13
as opposed to what they want to do which is

00:27:12 --> 00:27:15
go down into--

00:27:14 --> 00:27:18
You get so happy that you found this

00:27:18 --> 00:27:20
low point

00:27:20 --> 00:27:23
hat you forget there's a much lower point.

00:27:22 --> 00:27:26
So you get stuck with the gradient.

00:27:25 --> 00:27:27
The momentum of the gradient

00:27:26 --> 00:27:30
keeps rocking it back and forth without you going

00:27:29 --> 00:27:33
to a much greater global minimum.

00:27:32 --> 00:27:35
And there's a lot of clever ways to solving that,

00:27:34 --> 00:27:39
the Atom optimizer is one of those.

00:27:40 --> 00:27:46
But in this case, as long as the gradients don't vanish

00:27:46 --> 00:27:49
SGD, the Stochastic Gradient Descent,

00:27:48 --> 00:27:51
one of these algorithms will get you there

00:27:50 --> 00:27:54
It might take a little while, but it will get you there

00:27:54 --> 00:27:56
Yes, question.

00:27:57 --> 00:28:00
The question was,

00:28:00 --> 00:28:04
you're dealing with a function that is not convex,

00:28:03 --> 00:28:06
how do we ensure anything about

00:28:06 --> 00:28:08
converging to anything that's

00:28:07 --> 00:28:10
reasonably good,

00:28:09 --> 00:28:13
the local optimum converges to--

00:28:12 --> 00:28:15
The answer is, you can't.

00:28:16 --> 00:28:20
This isn't only a non-linear function

00:28:19 --> 00:28:23
it's a highly non-function

00:28:22 --> 00:28:25
The power and the beauty of neural networks

00:28:25 --> 00:28:33
is that it can represent these arbitrarily complex functions.

00:28:32 --> 00:28:34
It's incredible.

00:28:33 --> 00:28:38
And it can learn these functions from data

00:28:38 --> 00:28:43
But the reason people are referring to neural networks training as art

00:28:43 --> 00:28:47
is you're trying to play with parameters

00:28:46 --> 00:28:49
that don't get stuck in these local optimal.

00:28:48 --> 00:28:51
For stupid reasons and for clever reasons.

00:28:50 --> 00:28:52
Yes, question.

00:28:53 --> 00:28:58
The Question continues on the same thread.

00:29:00 --> 00:29:04
The thing is, we're dealing with functions

00:29:03 --> 00:29:07
where we don't know what the global optimal is.

00:29:06 --> 00:29:09
That's the crocs of it.

00:29:10 --> 00:29:13
Everything we talked about,

00:29:13 --> 00:29:15
interpreting text,

00:29:14 --> 00:29:17
interpreting video,

00:29:17 --> 00:29:19
even driving.

00:29:18 --> 00:29:21
What's the optimal for driving?

00:29:21 --> 00:29:23
Never crashing?

00:29:25 --> 00:29:28
It sounds easy to say that,

00:29:27 --> 00:29:30
you actually have to formulate the world

00:29:29 --> 00:29:34
under which it defines all of those things and it becomes a really

00:29:33 --> 00:29:35
non-linear objective function

00:29:34 --> 00:29:38
for which you don't know what the optimal is.

00:29:41 --> 00:29:43
That's why you keep trying

00:29:42 --> 00:29:46
and get impressed every time it gets better.

00:29:45 --> 00:29:48
It is essentially the process.

00:29:47 --> 00:29:50
And you can also compare,

00:29:49 --> 00:29:53
you can compare with human-level performance.

00:29:52 --> 00:29:54
For ImageNet,

00:29:53 --> 00:29:57
who can tell the difference between cats and dogs,

00:29:56 --> 00:29:59
and top five categories,

00:30:00 --> 00:30:04
96% of the time accuracy,

00:30:03 --> 00:30:05
and then you get impressed when

00:30:04 --> 00:30:07
a machine can do better than that.

00:30:06 --> 00:30:09
But you don't know what the best is.

00:30:15 --> 00:30:18
These videos can be watched for hours,

00:30:17 --> 00:30:20
I won't play it until I explain this slide.

00:30:21 --> 00:30:24
Let's pause to reflect on backpropagation

00:30:23 --> 00:30:27
before I go on to Recurrent Neural Networks. Yes, question.

00:30:26 --> 00:30:30
In this practical manner, how can you tell when

00:30:29 --> 00:30:32
you're actually creating a net whether you're

00:30:31 --> 00:30:35
facing the management gradient problem

00:30:34 --> 00:30:38
or you need to change your optimizer

00:30:39 --> 00:30:43
or you've reached a local minimum?

00:30:43 --> 00:30:46
The question was,

00:30:45 --> 00:30:47
how do you practically know

00:30:47 --> 00:30:52
hen you hit the vanishing gradient problem?

00:30:51 --> 00:30:54
The vanishing gradient could be--

00:31:00 --> 00:31:04
The derivative being zero on the gradient,

00:31:03 --> 00:31:08
happens when the activation is exploding,

00:31:07 --> 00:31:10
like really high values

00:31:09 --> 00:31:11
and really low values.

00:31:10 --> 00:31:13
To really high values is easy.

00:31:12 --> 00:31:15
Your network has just gone crazy.

00:31:14 --> 00:31:18
It produces very large values.

00:31:17 --> 00:31:24
And you can fix a lot of those things by just capping the activations.

00:31:25 --> 00:31:29
The values being really low,

00:31:28 --> 00:31:33
resulting in a vanishing gradient, are really hard to detect

00:31:34 --> 00:31:38
There's a lot of research in trying to figure out

00:31:37 --> 00:31:40
how to detect these things.

00:31:40 --> 00:31:44
If you're not careful, often times

00:31:43 --> 00:31:47
you can find that,

00:31:48 --> 00:31:51
and this isn't hard to do,

00:31:50 --> 00:31:54
we're like 40 or 50 percent of the network,

00:31:53 --> 00:31:55
of the neurons,

00:31:55 --> 00:31:58
are dead.

00:31:57 --> 00:32:00
We will call it, for ReLU,

00:31:59 --> 00:32:01
they're dead ReLU

00:32:00 --> 00:32:03
They're not firing at all.

00:32:03 --> 00:32:05
How do you detect that?

00:32:05 --> 00:32:07
That's part of learning

00:32:06 --> 00:32:09
If they never fire you can detect that

00:32:08 --> 00:32:12
by running it through the entire training set.

00:32:11 --> 00:32:15
There are a lot of tricks. But that's the problem.

00:32:14 --> 00:32:16
You try to learn

00:32:15 --> 00:32:20
and then you look at the loss function

00:32:19 --> 00:32:21
and it's not

00:32:20 --> 00:32:23
converging to anything reasonable.

00:32:22 --> 00:32:27
They are going all over the place, or just converging very slowly.

00:32:26 --> 00:32:29
And that's an indication that something is wrong

00:32:28 --> 00:32:32
That something could be the loss function is bad,

00:32:31 --> 00:32:34
that something could be you already found the optimal,

00:32:33 --> 00:32:37
or that something could be the vanishing gradient.

00:32:36 --> 00:32:38
And again, that's why it's an art.

00:32:41 --> 00:32:43
Certainly,

00:32:44 --> 00:32:48
at least some fraction of the neurons needs to be firing.

00:32:49 --> 00:32:53
Otherwise, initialization is really poorly done.

00:32:52 --> 00:32:55
Okay, to reflect on the

00:32:55 --> 00:32:58
simplicity of backpropagation

00:32:58 --> 00:33:01
and the power of it,

00:33:02 --> 00:33:04
this kind of step of

00:33:03 --> 00:33:07
backpropagating the loss function to the gradients locally,

00:33:08 --> 00:33:11
is the way neural networks learn.

00:33:11 --> 00:33:14
It's really the only way

00:33:13 --> 00:33:17
that we have effectively been able to

00:33:16 --> 00:33:20
train a neural network

00:33:19 --> 00:33:22
to learn a function.

00:33:21 --> 00:33:24
To adjusting the weights and biases,

00:33:23 --> 00:33:27
the huge number of weights and biases, the parameters

00:33:26 --> 00:33:29
It's just through this optimization.

00:33:28 --> 00:33:31
It's backpropagating the error,

00:33:31 --> 00:33:35
where you have the supervised ground truth.

00:33:34 --> 00:33:36
the question is

00:33:36 --> 00:33:39
whether this process, of fitting,

00:33:41 --> 00:33:45
adjusting the parameters

00:33:45 --> 00:33:50
of a highly non-linear function to minimize a single objective,

00:33:49 --> 00:33:56
is the way you achieve intelligence.

00:33:55 --> 00:33:57
Human-level intelligence.

00:33:56 --> 00:33:59
That's something to think about.

00:33:58 --> 00:34:01
You have to think about, for driving purposes,

00:34:00 --> 00:34:04
what is the limitation of this approach?

00:34:04 --> 00:34:06
What's not happening?

00:34:05 --> 00:34:09
The neural network designed, the architecture

00:34:08 --> 00:34:11
is not being adjusted.

00:34:12 --> 00:34:17
any of the edges, the layers, nothing is being evolved

00:34:18 --> 00:34:22
There are other optimization approaches

00:34:22 --> 00:34:25
that I think are more

00:34:27 --> 00:34:31
interesting and inspiring than effective.

00:34:30 --> 00:34:33
For example, this is

00:34:33 --> 00:34:37
using soft cubes to--

00:34:36 --> 00:34:40
This is falling out of the field

00:34:40 --> 00:34:43
of evolutionary robotics.

00:34:43 --> 00:34:46
Where you evolve

00:34:45 --> 00:34:48
the dynamics of a robot

00:34:47 --> 00:34:50
using genetic algorithms

00:34:49 --> 00:34:51
and that's

00:35:00 --> 00:35:03
These robots have been taught to,

00:35:03 --> 00:35:05
in simulation, obviously,

00:35:05 --> 00:35:08
to walk and to swim.

00:35:07 --> 00:35:10
That one is swimming.

00:35:14 --> 00:35:18
The nice thing here is that dynamics

00:35:17 --> 00:35:20
that highly non- linear space as well,

00:35:19 --> 00:35:24
that controls the dynamics of this weird shaped robot

00:35:24 --> 00:35:26
with a lot of degrees of freedom,

00:35:25 --> 00:35:29
it's the same kind of thing as the neural network.

00:35:28 --> 00:35:32
In fact, people have applied generic algorithms,

00:35:32 --> 00:35:37
ant colony optimization, all kinds of sort of nature inspire algorithms

00:35:36 --> 00:35:39
for automatizing the weights and the biases

00:35:38 --> 00:35:42
but they don't seem to currently work that well.

00:35:41 --> 00:35:44
It's a cool idea to be using

00:35:43 --> 00:35:47
nature-type evolutionary algorithms to evolve

00:35:46 --> 00:35:50
something that's already nature inspired which is neural networks.

00:35:50 --> 00:35:52
But, something to think about

00:35:54 --> 00:35:58
he backpropagation, while really simple

00:35:57 --> 00:36:01
it's kind of dumb and the question is whether

00:36:00 --> 00:36:05
general intelligence reasoning can be achieved with this process.

00:36:04 --> 00:36:07
All right, Recurrent Neural Networks,

00:36:07 --> 00:36:11
on the left there's an input X

00:36:10 --> 00:36:14
with weights on the input, U,

00:36:13 --> 00:36:16
there's a hidden state,

00:36:15 --> 00:36:18
hidden layer S,

00:36:18 --> 00:36:22
with weights on

00:36:25 --> 00:36:27
the edge connecting

00:36:26 --> 00:36:29
the hidden states to each other

00:36:28 --> 00:36:33
and then more weights, V, the on the output O.

00:36:33 --> 00:36:37
It's a really simple network, there's inputs,

00:36:36 --> 00:36:39
there's hidden states,

00:36:39 --> 00:36:42
the memory of this network

00:36:42 --> 00:36:44
and there's outputs.

00:36:46 --> 00:36:48
But the fact that there's

00:36:48 --> 00:36:51
this loop

00:36:50 --> 00:36:54
where the hidden states are connected to each other

00:36:53 --> 00:36:58
means that as opposed to producing a single input,

00:36:57 --> 00:37:01
the network takes arbitrary numbers of inputs,

00:37:00 --> 00:37:04
it just keeps taking X, one at a time

00:37:03 --> 00:37:07
and produces a sequence of Xs

00:37:06 --> 00:37:08
through time.

00:37:10 --> 00:37:12
Depending on

00:37:11 --> 00:37:15
the duration of the sequence you're interested in,

00:37:14 --> 00:37:17
you can think of this network

00:37:16 --> 00:37:18
in its unrolled state.

00:37:18 --> 00:37:21
You can unroll this neural network

00:37:20 --> 00:37:26
where the inputs are in the bottom, Xt-1, Xt, Xt+1,

00:37:25 --> 00:37:28
and same with the outputs,

00:37:28 --> 00:37:32
Ot-1, Ot, Ot+1,

00:37:32 --> 00:37:35
and it becomes like a regular neural network,

00:37:34 --> 00:37:39
unrolled some arbitrary number of times.

00:37:40 --> 00:37:43
The parameters, again,

00:37:42 --> 00:37:45
there's weights, there's biases,

00:37:44 --> 00:37:47
similar to CNNs,

00:37:46 --> 00:37:49
convolutional neural networks

00:37:48 --> 00:37:52
and just like convolutional neural networks

00:37:51 --> 00:37:56
make certain spatial consistency assumptions,

00:37:55 --> 00:37:59
the recurrent neural network assume

00:37:58 --> 00:38:01
temporal consistency amongst the parameters,

00:38:00 --> 00:38:03
shares the parameters.

00:38:03 --> 00:38:06
That W, that U, that V,

00:38:05 --> 00:38:09
is the same for every single time step.

00:38:08 --> 00:38:10
You're learning

00:38:09 --> 00:38:12
the same parameter,

00:38:11 --> 00:38:14
no matter the duration of the sequence

00:38:14 --> 00:38:16
and that allows you to

00:38:15 --> 00:38:20
look at arbitrary long sequences

00:38:19 --> 00:38:23
without having an explosion of parameters.

00:38:29 --> 00:38:33
This process is the same exact process that's repeated

00:38:32 --> 00:38:36
base on the different variants that we talk about before,

00:38:35 --> 00:38:37
in terms of inputs and outputs,

00:38:36 --> 00:38:40
one to many, many to one, many to many.

00:38:40 --> 00:38:43
The backpropagation process

00:38:42 --> 00:38:46
is exactly the same as for regular neural networks.

00:38:45 --> 00:38:49
It's a fancy name of backpropagation through time,

00:38:49 --> 00:38:51
BPTT,

00:38:51 --> 00:38:55
but it's just backpropagation through an unrolled

00:38:58 --> 00:39:01
recurrent neural network,

00:39:00 --> 00:39:04
where the errors are on the computed on the outputs,

00:39:04 --> 00:39:07
the gradients are computed,

00:39:07 --> 00:39:10
backpropagated

00:39:10 --> 00:39:13
and computed on the inputs,

00:39:12 --> 00:39:16
again, suffering for the same exact problem

00:39:16 --> 00:39:19
of vanishing gradients.

00:39:18 --> 00:39:20
The problem is

00:39:19 --> 00:39:24
that the depth of these networks can be arbitrary long

00:39:23 --> 00:39:27
if at any point the gradients hits

00:39:26 --> 00:39:29
a lower number, zero,

00:39:29 --> 00:39:33
becomes, that neural becomes saturated.

00:39:32 --> 00:39:35
That gradient, let's call it saturated,

00:39:34 --> 00:39:36
that gradient gets--

00:39:37 --> 00:39:41
drives all the earlier layer to zero,

00:39:41 --> 00:39:43
so is easy to run to a problem

00:39:42 --> 00:39:47
where you're really ignoring the majority of the sequence.

00:39:47 --> 00:39:51
This is just another Python weight,

00:39:51 --> 00:39:54
sudo-called weight to look at it.

00:39:54 --> 00:39:56
Is you have the same w,

00:39:55 --> 00:39:59
remember you're sharing the weights

00:39:58 --> 00:40:01
and all the parameters from time to time,

00:40:01 --> 00:40:05
so if the weights are such

00:40:05 --> 00:40:08
WHH,

00:40:07 --> 00:40:11
if the weights are such that they produce

00:40:10 --> 00:40:12
[unintelligible]

00:40:14 --> 00:40:19
they have a negative value that results

00:40:18 --> 00:40:22
in the gradient that goes to zero,

00:40:22 --> 00:40:25
that propagates through the rest.

00:40:24 --> 00:40:28
That's the sudo-call for backpropagation,

00:40:27 --> 00:40:30
pass to the RNN,

00:40:29 --> 00:40:32
that WHH

00:40:31 --> 00:40:34
propagates back.

00:40:35 --> 00:40:37
You get this things

00:40:36 --> 00:40:40
with exploding and vanishing gradients

00:40:40 --> 00:40:46
for example, error surfaces for a single hidden unit RNN,

00:40:45 --> 00:40:48
this is visualizing the gradient,

00:40:47 --> 00:40:52
the value of the weight, the value of the bias

00:40:51 --> 00:40:53
and the error,

00:40:52 --> 00:40:56
the error could be really flat or could explode,

00:40:56 --> 00:40:59
both are going to lead

00:40:59 --> 00:41:03
to you not making--

00:41:02 --> 00:41:05
either making steps that are too gradual

00:41:04 --> 00:41:06
or too big.

00:41:06 --> 00:41:09
It's the geometric interpretation.

00:41:08 --> 00:41:12
Okay. What other variants that we look at, a little bit?

00:41:11 --> 00:41:14
are they [unintelligible 00:41:13]?

00:41:13 --> 00:41:16
It doesn't have to be only one way,

00:41:15 --> 00:41:17
it can be bi-directional,

00:41:16 --> 00:41:21
that could be edges going forward and edges going back

00:41:21 --> 00:41:23
What that's needed for

00:41:22 --> 00:41:26
is things like

00:41:25 --> 00:41:28
filling in missing, whatever the data is,

00:41:27 --> 00:41:30
filling in missing elements of that data,

00:41:29 --> 00:41:34
whether that's images, or words, or audio.

00:41:34 --> 00:41:38
Generally, as always is the case in neural network,

00:41:37 --> 00:41:40
the deeper it goes, the better.

00:41:40 --> 00:41:46
That deep referring to the number of layers

00:41:45 --> 00:41:49
in a single temporal instance.

00:41:48 --> 00:41:51
On the right of the slide

00:41:50 --> 00:41:53
we're stacking

00:41:54 --> 00:41:57
node in the temporal domain.

00:41:58 --> 00:42:03
Each of those layers has its own set of weights,

00:42:02 --> 00:42:05
its own set of biases.

00:42:05 --> 00:42:07
These things are awesome

00:42:07 --> 00:42:09
but they need a lot of data

00:42:12 --> 00:42:16
when you add extra layers in this way.

00:42:17 --> 00:42:21
The problem is, while recurrent neural network,

00:42:20 --> 00:42:22
in theory,

00:42:21 --> 00:42:25
is supposed to be able to learn any kind of sequence,

00:42:25 --> 00:42:29
the reality is they're not really good at remembering

00:42:28 --> 00:42:31
what happened a while ago,

00:42:30 --> 00:42:32
the long-term dependency.

00:42:31 --> 00:42:35
Here's a silly example,

00:42:35 --> 00:42:39
let's think of a story

00:42:38 --> 00:42:40
about Bob,

00:42:40 --> 00:42:42
Bob is eating an apple.

00:42:42 --> 00:42:45
The apple part

00:42:44 --> 00:42:48
is generated by the recurrent neural network.

00:42:50 --> 00:42:54
Your recurrent neural networks can learn to generate "apple"

00:42:53 --> 00:42:57
because it's seen in a lot of sentences, with "Bob" and "eating"

00:42:56 --> 00:42:59
and it can generate the word apple.

00:42:59 --> 00:43:02
For a longer sentence, like

00:43:01 --> 00:43:04
"Bob likes apples,

00:43:03 --> 00:43:06
he's hungry and decided to have a snack,

00:43:05 --> 00:43:07
so now he's eating an apple",

00:43:07 --> 00:43:10
you have to maintain the state

00:43:09 --> 00:43:12
that we're talking about Bob

00:43:11 --> 00:43:14
and we're talking about apples,

00:43:13 --> 00:43:15
through several

00:43:14 --> 00:43:18
discreet semantic

00:43:18 --> 00:43:20
sentences.

00:43:20 --> 00:43:24
That kind of long-term memory

00:43:23 --> 00:43:25
is not--

00:43:25 --> 00:43:28
because of different effects,

00:43:27 --> 00:43:30
but vanishing gradients,

00:43:30 --> 00:43:33
it's difficult to propagate

00:43:32 --> 00:43:36
the important stuff that happened a while ago

00:43:35 --> 00:43:38
in order to maintain that context

00:43:37 --> 00:43:40
in generating "apple",

00:43:39 --> 00:43:42
or classifying some concept that happened

00:43:41 --> 00:43:43
way down the line.

00:43:45 --> 00:43:48
When people talk about

00:43:49 --> 00:43:52
recurrent neural networks

00:43:51 --> 00:43:56
these days, they're talking about LSTMs,

00:43:55 --> 00:44:00
long-short-term memory networks

00:44:00 --> 00:44:02
o all the impressive results

00:44:02 --> 00:44:05
on time series and audio and video

00:44:04 --> 00:44:08
and all that, that requires LSTMs.

00:44:07 --> 00:44:10
Again, vanilla RNNs

00:44:09 --> 00:44:12
are on top of the slide,

00:44:13 --> 00:44:16
each cell is simple,

00:44:16 --> 00:44:18
there are some hidden units,

00:44:18 --> 00:44:21
there's an input, and there's an output.

00:44:21 --> 00:44:26
Here, we used TANH as activation function,

00:44:28 --> 00:44:33
it's just another popular Sigmoid type activation function.

00:44:35 --> 00:44:38
LSTMs are more complicated,

00:44:38 --> 00:44:41
or they look more complicated but

00:44:42 --> 00:44:46
in some ways, they're more intuitive for us to understand.

00:44:45 --> 00:44:49
There's a bunch of gates in each cell,

00:44:49 --> 00:44:51
we'll go through those.

00:44:50 --> 00:44:55
In yellow are different neural network layers,

00:44:54 --> 00:44:57
Sigmoid and TANH,

00:44:56 --> 00:45:01
are just different types of activation functions.

00:45:00 --> 00:45:04
TANH is an activation function that

00:45:03 --> 00:45:08
squishes the input into the range of negative one to one.

00:45:08 --> 00:45:11
Sigmoid function

00:45:10 --> 00:45:14
squishes it between zero and one

00:45:13 --> 00:45:16
and that serve different purposes.

00:45:15 --> 00:45:19
There's some pointwise operations,

00:45:18 --> 00:45:22
addition, multiplication,

00:45:21 --> 00:45:25
and there's connections,

00:45:25 --> 00:45:29
data being passed from layer to layer,

00:45:28 --> 00:45:31
shown by the arrows.

00:45:31 --> 00:45:36
There's concatenation and there's a copy operation on the output

00:45:35 --> 00:45:37
We copy,

00:45:37 --> 00:45:41
the output of each cell it's copied to the next cell

00:45:40 --> 00:45:42
and to the output.

00:45:43 --> 00:45:46
Let me try to make it, clarified,

00:45:50 --> 00:45:52
clarify a little bit.

00:45:54 --> 00:45:57
There's this conveyer belt

00:45:57 --> 00:46:01
going through inside of each individual cell

00:46:00 --> 00:46:06
and they all have, there's really three steps in the conveyer belt.

00:46:05 --> 00:46:07
The first is,

00:46:07 --> 00:46:11
there is a Sigmoid function

00:46:10 --> 00:46:14
that's responsible for deciding

00:46:15 --> 00:46:19
what to forget and what to ignore,

00:46:18 --> 00:46:22
it's responsible for

00:46:22 --> 00:46:27
taking in the input, the new input, x(t),

00:46:26 --> 00:46:31
taking in the state of the previous,

00:46:31 --> 00:46:36
the output of the previous cell, previous time step

00:46:36 --> 00:46:40
and deciding "do I want to keep that in my memory or not?"

00:46:40 --> 00:46:42
and "do I want to integrate

00:46:41 --> 00:46:45
the new input into my memory or not?"

00:46:44 --> 00:46:46
This allows you to

00:46:45 --> 00:46:50
selective about the information which you learn.

00:46:49 --> 00:46:51
For example,

00:46:50 --> 00:46:54
there's that sentence "Bob and Alice are having lunch,

00:46:53 --> 00:46:55
Bob likes apples,

00:46:55 --> 00:46:58
Alice like oranges,

00:46:57 --> 00:46:59
she is eating an orange".

00:47:02 --> 00:47:06
Bob and Alice are having lunch,

00:47:05 --> 00:47:07
Bob likes apples,

00:47:06 --> 00:47:11
right now, if you had said you have a hidden state,

00:47:10 --> 00:47:14
keeping track of the gender of the person we're talking about

00:47:16 --> 00:47:20
you might say that there's both genders on the first sentence,

00:47:19 --> 00:47:22
there's male in the second sentence,

00:47:21 --> 00:47:24
female in the third sentence,

00:47:23 --> 00:47:25
and that way

00:47:24 --> 00:47:28
when you have to generate a sentence about who's eating what,

00:47:27 --> 00:47:30
you'll know-

00:47:29 --> 00:47:32
you keep the gender information

00:47:32 --> 00:47:37
in order to make an accurate generation of text

00:47:36 --> 00:47:38
corresponding to

00:47:38 --> 00:47:40
the proper person.

00:47:39 --> 00:47:42
You have to forget certain things,

00:47:41 --> 00:47:45
like forget that Bob existed at that moment,

00:47:45 --> 00:47:50
you have to forget Bob likes apples

00:47:49 --> 00:47:51
but you have to remember

00:47:51 --> 00:47:55
that Alice likes oranges

00:47:54 --> 00:47:58
o you have to selectively remember and forget certain things

00:47:57 --> 00:48:00
that's LSTM in a nutshell.

00:47:59 --> 00:48:04
You decided what to forget, decided what to remember

00:48:03 --> 00:48:07
and decided what to output in that cell.

00:48:11 --> 00:48:15
Zoom in a little bit, because this is pretty cool

00:48:15 --> 00:48:20
There's a state running through the cell,

00:48:20 --> 00:48:22
this conveyer belt,

00:48:22 --> 00:48:26
previous state like the gender

00:48:25 --> 00:48:29
that we're currently talking about,

00:48:28 --> 00:48:32
that's the state that you're keeping track of

00:48:31 --> 00:48:34
and that's running through the cell.

00:48:34 --> 00:48:37
Then there's three Sigmoid layers

00:48:37 --> 00:48:41
outputting one,

00:48:40 --> 00:48:43
a number between the zero and one,

00:48:42 --> 00:48:46
one when you want that information to go through

00:48:46 --> 00:48:50
and zero when you don't want it to go through,

00:48:51 --> 00:48:55
the conveyer belt that maintains the state.

00:48:56 --> 00:48:59
First, Sigmoid function is,

00:48:58 --> 00:49:03
we decided what to forget and what to ignore,

00:49:02 --> 00:49:04
that's the first one,

00:49:03 --> 00:49:07
we take the input from the previous time step,

00:49:06 --> 00:49:10
the input to the network

00:49:09 --> 00:49:11
on the current time step

00:49:10 --> 00:49:15
and decided, do I want to forget or do I want to ignore those?

00:49:15 --> 00:49:19
Then we decided

00:49:18 --> 00:49:21
which part of the state to update,

00:49:21 --> 00:49:25
what part of our memory do we have to update with this information

00:49:24 --> 00:49:29
and what values to insert in that update.

00:49:30 --> 00:49:34
Third step is, we perform the actual update

00:49:34 --> 00:49:37
and perform the actual forgetting,

00:49:36 --> 00:49:40
that's why you have the Sigmoid function,

00:49:39 --> 00:49:42
you just multiply it,

00:49:42 --> 00:49:45
when is zero is forgetting,

00:49:44 --> 00:49:48
when is one that information passes through.

00:49:49 --> 00:49:51
Finally,

00:49:50 --> 00:49:54
we produce an output from the cell,

00:49:55 --> 00:49:59
if its translation

00:49:58 --> 00:50:02
is producing an output in the English language

00:50:01 --> 00:50:04
where the input was in Spanish language

00:50:03 --> 00:50:07
and then that same output

00:50:06 --> 00:50:09
it's copied to the next cell.

00:50:14 --> 00:50:18
What can we get done with this kind of approach?

00:50:18 --> 00:50:21
We can look at machine translation.

00:50:20 --> 00:50:22
I guess what I'm trying to--

00:50:23 --> 00:50:25
question.

00:50:25 --> 00:50:28
what is your representation of this state?

00:50:27 --> 00:50:30
Is it like a floating point

00:50:29 --> 00:50:31
or is it like a vector

00:50:30 --> 00:50:33
what is it, exactly?

00:50:33 --> 00:50:36
The state

00:50:35 --> 00:50:39
is the activation

00:50:40 --> 00:50:42
multiplied by the weight,

00:50:41 --> 00:50:46
it's the output of the Sigmoid or the TANH activations.

00:50:47 --> 00:50:51
There's a bunch of neurons and they're firing a number

00:50:50 --> 00:50:53
between negative one or one, or between zero and one,

00:50:53 --> 00:50:55
that whole's a state.

00:50:55 --> 00:50:59
It just that calling it a state it's sort of simplifying,

00:50:58 --> 00:51:00
but the point is that there's

00:50:59 --> 00:51:03
a bunch of numbers been constantly modified by the weights

00:51:03 --> 00:51:05
and the biases,

00:51:05 --> 00:51:08
those numbers hold the state

00:51:09 --> 00:51:12
and the modification of those numbers

00:51:11 --> 00:51:14
is controlled by the weights

00:51:14 --> 00:51:17
and then once all of that is done,

00:51:16 --> 00:51:19
the resulting output

00:51:18 --> 00:51:21
of the recurrent neural network

00:51:20 --> 00:51:23
it's compared to the desired output

00:51:22 --> 00:51:26
and the errors are backpropagated to the weights.

00:51:27 --> 00:51:30
Hopefully, that makes sense.

00:51:30 --> 00:51:35
So, machine translation is one popular application

00:51:37 --> 00:51:40
all of it is the same,

00:51:40 --> 00:51:43
all of these networks that I've talked about,

00:51:42 --> 00:51:46
they're really similar constructs.

00:51:46 --> 00:51:49
You have some inputs,

00:51:48 --> 00:51:52
whatever language that is again,

00:51:51 --> 00:51:56
German maybe, I think everything is German,

00:51:58 --> 00:52:00
and the output.

00:52:00 --> 00:52:04
The inputs are in one language,

00:52:03 --> 00:52:06
a set of characters

00:52:05 --> 00:52:09
composed a word in one language,

00:52:08 --> 00:52:10
there's a state being propagated

00:52:10 --> 00:52:13
and once that sentence is over,

00:52:12 --> 00:52:15
you start, as opposed to collecting inputs,

00:52:14 --> 00:52:17
start producing outputs

00:52:16 --> 00:52:19
and you can output in the English language.

00:52:19 --> 00:52:24
There's a ton of great work on machine translations.

00:52:23 --> 00:52:27
It's what Google is supposedly using for their translator,

00:52:26 --> 00:52:28
same thing.

00:52:28 --> 00:52:31
I've show this previously

00:52:30 --> 00:52:33
but now you all know how it works,

00:52:32 --> 00:52:35
same exact thing, LSTMs

00:52:35 --> 00:52:38
generating handwritten characters,

00:52:37 --> 00:52:41
handwriting in arbitrary styles,

00:52:40 --> 00:52:43
controlling the drawing,

00:52:43 --> 00:52:48
where the input is text and the output is handwriting.

00:52:47 --> 00:52:50
Is again, the same kind of

00:52:50 --> 00:52:54
network with some depths here,

00:52:53 --> 00:52:56
the input is the text,

00:52:55 --> 00:52:59
the output is the control of the writing.

00:53:00 --> 00:53:02
Character-level text generation,

00:53:02 --> 00:53:05
this is

00:53:05 --> 00:53:07
the thing that taught us about life,

00:53:07 --> 00:53:10
the meaning of life,

00:53:09 --> 00:53:14
literary recognition and the tradition of ancient human reproduction.

00:53:13 --> 00:53:17
That's again, the same process,

00:53:16 --> 00:53:20
input one character at the time,

00:53:19 --> 00:53:24
what we see there is the encoding of the characters on the input layer,

00:53:23 --> 00:53:26
there's a hidden state,

00:53:25 --> 00:53:29
hidden layer that is keeping track of those activations,

00:53:29 --> 00:53:31
the outputs

00:53:31 --> 00:53:36
of the activation functions and every single

00:53:37 --> 00:53:41
time it's outputting

00:53:40 --> 00:53:43
its best prediction

00:53:42 --> 00:53:45
of the next character that follows.

00:53:45 --> 00:53:48
Now, on a lot of these applications

00:53:47 --> 00:53:50
you want to ignore the output

00:53:49 --> 00:53:53
until the input sentence is over

00:53:53 --> 00:53:56
and then you start listening to the output,

00:53:55 --> 00:53:59
but the point is that it just keeps generating text,

00:53:58 --> 00:54:01
whether is given an input or not,

00:54:00 --> 00:54:03
so you producing input

00:54:02 --> 00:54:05
is just adding, steering

00:54:04 --> 00:54:07
the recurrent neural network.

00:54:07 --> 00:54:09
You can answer questions

00:54:11 --> 00:54:13
about an image,

00:54:13 --> 00:54:16
the input you get there,

00:54:15 --> 00:54:19
you could almost arbitrary stack things together,

00:54:18 --> 00:54:22
you take an image as your input, bottom left there,

00:54:21 --> 00:54:25
put it in your convolutional neural network,

00:54:26 --> 00:54:30
and take the question.

00:54:31 --> 00:54:34
There's something call word embeddings,

00:54:33 --> 00:54:36
it's to broaden

00:54:35 --> 00:54:38
the representative meaning of the words.

00:54:37 --> 00:54:41
"How many books?" is the question.

00:54:40 --> 00:54:43
You want to take the word embeddings

00:54:42 --> 00:54:44
and the image

00:54:43 --> 00:54:45
and produce

00:54:45 --> 00:54:47
your best estimate of the answer.

00:54:46 --> 00:54:48
For question of

00:54:48 --> 00:54:50
"what color is the cat?"

00:54:50 --> 00:54:52
it could be gray or black,

00:54:51 --> 00:54:55
it's the different LSTM flavors

00:54:54 --> 00:54:56
producing that answer.

00:54:56 --> 00:54:58
Same with counting chairs

00:54:58 --> 00:55:01
you can give an image of a chair

00:55:00 --> 00:55:04
and as the question "how many chairs are there?"

00:55:03 --> 00:55:07
And it can produce an answer of "three".

00:55:08 --> 00:55:12
I should say this is really hard,

00:55:11 --> 00:55:13
arbitrary question

00:55:12 --> 00:55:15
asks an arbitrary image,

00:55:14 --> 00:55:16
you are both interpreting--

00:55:15 --> 00:55:18
you are doing natural languages processing

00:55:17 --> 00:55:21
and you're doing computer vision, all in one network.

00:55:22 --> 00:55:26
Same thing with the image capture generation,

00:55:26 --> 00:55:29
you can detect

00:55:28 --> 00:55:31
he different objects in the scene,

00:55:31 --> 00:55:33
generate those words,

00:55:33 --> 00:55:38
stitch them together in syntactically correct sentences

00:55:37 --> 00:55:40
and rearrange the sentences.

00:55:40 --> 00:55:42
All of those are LSTMs,

00:55:41 --> 00:55:44
the second and the third step,

00:55:43 --> 00:55:47
the first is computer vision detecting the objects,

00:55:46 --> 00:55:49
segmenting the image and detecting the objects,

00:55:48 --> 00:55:52
that way you can generate a caption that says

00:55:51 --> 00:55:55
"a man is sitting in a chair with a dog in his lap".

00:55:56 --> 00:56:00
Again, LSTMs for video.

00:56:00 --> 00:56:03
Caption generation for video,

00:56:03 --> 00:56:08
the input, and every frame it's an image

00:56:07 --> 00:56:09
that goes into the LSTM,

00:56:08 --> 00:56:10
the input is an image

00:56:11 --> 00:56:14
and the output is a set of characters.

00:56:13 --> 00:56:16
First, you load in the video,

00:56:15 --> 00:56:18
in this case the output is on top,

00:56:18 --> 00:56:20
you encode

00:56:19 --> 00:56:21
the video

00:56:21 --> 00:56:25
into a representation inside the network

00:56:24 --> 00:56:27
and then you start generating words

00:56:26 --> 00:56:28
about that video.

00:56:28 --> 00:56:32
First comes the input, the encoding stage, then the decoding stage.

00:56:32 --> 00:56:34
Take in the video,

00:56:33 --> 00:56:36
say a man is taking,

00:56:35 --> 00:56:38
talking, whatever

00:56:38 --> 00:56:42
and because the input and the output are arbitrary,

00:56:41 --> 00:56:45
there also has to be indicators of the beginnings and

00:56:44 --> 00:56:47
the ends of a sentence,

00:56:46 --> 00:56:48
in this case, end of sentences.

00:56:48 --> 00:56:51
You want to know when you stop

00:56:51 --> 00:56:55
in order to generate syntactically correct sentences.

00:56:54 --> 00:56:58
that indicates the end of a sentence. You want also to be able to generate a period

00:57:01 --> 00:57:05
You can also, again, recurrent neural networks,

00:57:04 --> 00:57:07
LSTMs here,

00:57:06 --> 00:57:08
controlling

00:57:07 --> 00:57:10
the steering

00:57:11 --> 00:57:15
of a sliding window on an image

00:57:15 --> 00:57:20
that is used to classify what is contained in that image.

00:57:19 --> 00:57:24
Here, a CNN being steered by a recurrent neural network

00:57:25 --> 00:57:29
in order to convert this imagen

00:57:28 --> 00:57:32
into the number that's associated with a house number,

00:57:33 --> 00:57:35
it's called visual attention.

00:57:35 --> 00:57:39
That visual attention can be used to steer

00:57:38 --> 00:57:40
for the perception side

00:57:39 --> 00:57:44
and it can be used to steer a network for the generation.

00:57:43 --> 00:57:44
On the right,

00:57:44 --> 00:57:48
we can generate an image as--

00:57:50 --> 00:57:53
So the output of the network--

00:57:52 --> 00:57:54
it's a LSTM

00:57:54 --> 00:57:57
where the output on every time step

00:57:57 --> 00:57:59
is visual,

00:57:59 --> 00:58:03
and this way you can draw numbers.

00:58:06 --> 00:58:08
Here,

00:58:09 --> 00:58:12
I mention this before,

00:58:12 --> 00:58:16
is taking in as input silent video,

00:58:15 --> 00:58:18
sequence of images

00:58:19 --> 00:58:22
and producing audio.

00:58:22 --> 00:58:24
This is

00:58:25 --> 00:58:27
an LSTM

00:58:28 --> 00:58:32
that has convolutional layers for every single frame,

00:58:32 --> 00:58:35
takes images as input

00:58:35 --> 00:58:37
and produces

00:58:37 --> 00:58:41
a spectrogram, audio as output.

00:58:45 --> 00:58:50
The training set is a person hitting an object with a drumstick

00:58:49 --> 00:58:54
and your task is to generate, given a silent video,

00:58:53 --> 00:58:58
generate the sound that the drumstick will make

00:58:57 --> 00:59:01
when in contact with that object.

00:59:03 --> 00:59:05
Medical diagnosis,

00:59:06 --> 00:59:08
that's actually--

00:59:07 --> 00:59:11
I've listed some places where it has been really successful

00:59:10 --> 00:59:12
and pretty cool,

00:59:11 --> 00:59:14
but it's also beginning to be applied

00:59:13 --> 00:59:16
in places where

00:59:16 --> 00:59:19
can actually

00:59:19 --> 00:59:21
really help

00:59:22 --> 00:59:26
civilization, in medical applications.

00:59:25 --> 00:59:28
For medical diagnosis

00:59:28 --> 00:59:31
there's

00:59:31 --> 00:59:34
the highly spars and

00:59:35 --> 00:59:38
variable lengths

00:59:38 --> 00:59:42
equence of information in the form of,

00:59:41 --> 00:59:44
for example, patient electronic health records.

00:59:43 --> 00:59:46
So, Every time you visit a doctor,

00:59:45 --> 00:59:49
there's a test being done, that information is there

00:59:48 --> 00:59:52
and you can look it as a sequence over a period of time

00:59:51 --> 00:59:55
and then given that data, that's the input,

00:59:55 --> 00:59:58
the output is the diagnosis,

00:59:58 --> 01:00:01
a medical diagnosis,

01:00:00 --> 01:00:04
in this case, we can look at predicting diabetes,

01:00:04 --> 01:00:08
scoliosis, asthma and so on,

01:00:09 --> 01:00:11
with pretty good accuracy.

01:00:13 --> 01:00:15
There's something that

01:00:15 --> 01:00:18
all of us wish we could do,

01:00:20 --> 01:00:23
is stock market prediction.

01:00:25 --> 01:00:28
You can input,

01:00:27 --> 01:00:31
for example, well first of all, you can input the raw stock data,

01:00:30 --> 01:00:34
[unintelligible 01:00:30] books and so on, financial data,

01:00:33 --> 01:00:38
but you can also look at news articles from all over the web

01:00:38 --> 01:00:41
and take those as input as shown here,

01:00:40 --> 01:00:43
on the X axis is time,

01:00:42 --> 01:00:45
articles from different days,

01:00:45 --> 01:00:48
LSTM, once again,

01:00:48 --> 01:00:52
and produce an output of your prediction,

01:00:52 --> 01:00:56
binary prediction, whether the stock would go up or down.

01:00:56 --> 01:01:00
Nobody has been able to really successfully do this

01:00:59 --> 01:01:03
but there is a bunch of results

01:01:02 --> 01:01:05
and trying to perform above random

01:01:06 --> 01:01:10
which is how you make money,

01:01:10 --> 01:01:13
significantly above random

01:01:12 --> 01:01:15
on the prediction of it's going up or down?

01:01:14 --> 01:01:16
So you could buy or sell

01:01:16 --> 01:01:19
and especially

01:01:18 --> 01:01:20
when there is--

01:01:19 --> 01:01:23
in the cases when there was crashes it's easier to predict,

01:01:23 --> 01:01:26
so you can predict an encroaching crash.

01:01:26 --> 01:01:28
These are shown in the table,

01:01:27 --> 01:01:31
the error rates from different stocks,

01:01:31 --> 01:01:34
automotive stocks.

01:01:35 --> 01:01:39
You can also generate audio,

01:01:38 --> 01:01:42
is the exact same process as it generates language,

01:01:41 --> 01:01:43
you generate audio.

01:01:42 --> 01:01:45
Here's trained on

01:01:45 --> 01:01:48
a single speaker,

01:01:47 --> 01:01:51
a few hours epics

01:01:50 --> 01:01:53
of them speaking

01:01:52 --> 01:01:58
and you just learn, that's raw audio of the speaker

01:01:58 --> 01:02:04
and it's learning slowly to generate

01:02:03 --> 01:02:08
[audio]

01:02:19 --> 01:02:23
Obviously, they were reading numbers.

01:02:26 --> 01:02:29
this is incredible, this is trained

01:02:28 --> 01:02:35
on a compress spectrogram of the audio, raw audio

01:02:35 --> 01:02:39
and is producing something that

01:02:38 --> 01:02:44
over just a few epics is producing something that sounds like words,

01:02:43 --> 01:02:46
it could do this lecture for me, I wish.

01:02:59 --> 01:03:01
This is amazing,

01:03:02 --> 01:03:04
this is raw input,

01:03:04 --> 01:03:06
raw output,

01:03:06 --> 01:03:08
all again, LSTMs,

01:03:10 --> 01:03:14
and there's a lot of work in voice recognition,

01:03:13 --> 01:03:16
audio recognition. You're mapping--

01:03:20 --> 01:03:23
let me turn it up.

01:03:22 --> 01:03:26
You are mapping any kind of audio to a classification,

01:03:29 --> 01:03:33
you can take the audio of the road

01:03:35 --> 01:03:40
and that's the spectrogram on the bottom there, being shown

01:03:39 --> 01:03:43
you could detect whether the road is wet

01:03:42 --> 01:03:45
or the road is dry.

01:03:47 --> 01:03:51
you could do the same thing for

01:03:51 --> 01:03:55
ecognizing the gender of the speaker

01:03:54 --> 01:03:59
or recognizing many to many map

01:03:58 --> 01:04:00
of the actual words being spoken,

01:04:00 --> 01:04:02
speech recognition.

01:04:02 --> 01:04:05
This is about driving,

01:04:04 --> 01:04:08
so let's see where recurrent neural| networks apply in driving.

01:04:08 --> 01:04:12
We talked about the NVIDIA approach,

01:04:12 --> 01:04:17
the thing that actually powers DeepTeslaJS,

01:04:16 --> 01:04:19
it is a simple convolutional neural network,

01:04:19 --> 01:04:22
there's five convolutional layers

01:04:21 --> 01:04:25
in their approach, three fully connected layers,

01:04:25 --> 01:04:29
you can add as many layers as you want in DeepTesla,

01:04:29 --> 01:04:33
that's a quarter of million

01:04:32 --> 01:04:35
parameters to optimize

01:04:35 --> 01:04:37
all you are taking is a single image,

01:04:36 --> 01:04:40
no temporal information, single image

01:04:39 --> 01:04:43
and producing the steering angle, that's the approach,

01:04:42 --> 01:04:45
that's the DeepTesla way,

01:04:47 --> 01:04:50
taking a single imagen

01:04:50 --> 01:04:54
image and learning a regression of the steering angle.

01:04:55 --> 01:04:57
One of the

01:04:57 --> 01:05:02
prizes for the competition is the Udacity, self-driving

01:05:01 --> 01:05:04
car engineer nanodegree

01:05:04 --> 01:05:06
for free,

01:05:06 --> 01:05:08
this thing is awesome,

01:05:07 --> 01:05:10
I encourage everyone to check it out,

01:05:09 --> 01:05:12
but they did a competition

01:05:15 --> 01:05:18
that's very similar to ours,

01:05:18 --> 01:05:23
but a very large group of obsessed people,

01:05:23 --> 01:05:27
they were very clever, they went beyond

01:05:26 --> 01:05:29
convolutional neural networks of predicting steering,

01:05:28 --> 01:05:32
taking a sequence of images and predicting steering,

01:05:31 --> 01:05:35
what they did is, the winners,

01:05:34 --> 01:05:40
at least the first and I'll talk about the second place winner tomorrow,

01:05:39 --> 01:05:44
on 3D convolutional neural networks,

01:05:43 --> 01:05:47
the first and the third place winners used RNNs,

01:05:46 --> 01:05:51
used LSTMs, recurrent neural networks

01:05:50 --> 01:05:54
and map a sequence of images

01:05:53 --> 01:05:56
to a sequence of steering angles.

01:05:55 --> 01:05:58
For anyone,

01:05:58 --> 01:06:01
statistically speaking,

01:06:00 --> 01:06:04
anybody here who is not a computer vision person,

01:06:03 --> 01:06:07
most likely what'd you want to use, for whatever application

01:06:06 --> 01:06:09
you're interested in,

01:06:08 --> 01:06:10
is RNNs,

01:06:09 --> 01:06:13
the world is full of time series data,

01:06:13 --> 01:06:16
very few of us are working on

01:06:16 --> 01:06:19
data that is no time series data,

01:06:18 --> 01:06:22
in fact, whenever it's just snapshots,

01:06:21 --> 01:06:25
you're really just reducing the problem to

01:06:24 --> 01:06:27
the size that you can handle

01:06:26 --> 01:06:28
but most data

01:06:27 --> 01:06:30
in the world is time series data.

01:06:29 --> 01:06:33
This is the approach you end up using

01:06:32 --> 01:06:36
if you want to apply it in your own research,

01:06:41 --> 01:06:44
RNNs is the way to go.

01:06:46 --> 01:06:50
Again, what are they doing?

01:06:49 --> 01:06:54
How do you put images

01:06:53 --> 01:06:57
into a recurrent neural network?

01:06:56 --> 01:06:59
it's the same thing,

01:06:58 --> 01:07:00
you take,

01:07:00 --> 01:07:03
you have to convert an image into numbers

01:07:02 --> 01:07:05
in some kind of way,

01:07:04 --> 01:07:08
a powerful way of doing that is convolutional neural networks,

01:07:08 --> 01:07:10
so you can take

01:07:10 --> 01:07:14
ither 3D convolutional neural networks

01:07:13 --> 01:07:16
or 2D convolutional neural networks

01:07:15 --> 01:07:19
once it takes time into consideration and whatnot,

01:07:18 --> 01:07:21
process that image

01:07:20 --> 01:07:23
to extract a representation of that image

01:07:23 --> 01:07:27
and that becomes the input to the LSTM

01:07:27 --> 01:07:29
and the output

01:07:28 --> 01:07:32
at every single cell, at every single timestep,

01:07:31 --> 01:07:34
is a predicted steering angle,

01:07:33 --> 01:07:35
the speed of the vehicle and the torque

01:07:35 --> 01:07:38
that's what the first place winner did,

01:07:37 --> 01:07:39
they didn't just do the steering angle,

01:07:39 --> 01:07:42
also did the speed and torque

01:07:42 --> 01:07:45
and the sequence length that they were using

01:07:45 --> 01:07:48
for training and for testing,

01:07:48 --> 01:07:50
for the input and the output,

01:07:49 --> 01:07:52
is a sequence length of 10

01:07:52 --> 01:07:56
did they used supervised learning

01:07:55 --> 01:07:58
or did they used reinforcement learning?

01:07:57 --> 01:08:01
The question was, did they used supervised learning?

01:08:00 --> 01:08:04
Yes, they were given the same thing as in DeepTesla,

01:08:03 --> 01:08:07
a sequence of frames where the have a sequence of

01:08:06 --> 01:08:09
steering angles, speed and torque,

01:08:08 --> 01:08:12
I think there's other information too available,

01:08:12 --> 01:08:16
there's no reinforcement learning here.

01:08:15 --> 01:08:16
Question.

01:08:15 --> 01:08:19
Do you have a sense of how much information

01:08:19 --> 01:08:22
is being passed, how many LSTM gates are there

01:08:21 --> 01:08:24
in this problem?

01:08:27 --> 01:08:29
The question was,

01:08:28 --> 01:08:32
how many LSTM gates are in this problem?

01:08:33 --> 01:08:37
This network,

01:08:41 --> 01:08:43
it's true

01:08:43 --> 01:08:46
that this diagrams kind of hide

01:08:45 --> 01:08:49
the number of parameters here, but it's arbitrary

01:08:48 --> 01:08:52
just like convolutional neural networks are arbitrary,

01:08:52 --> 01:08:56
the size of the input is arbitrary,

01:08:55 --> 01:08:58
the size of Sigmoid function,

01:08:57 --> 01:09:00
TANH is arbitrary,

01:08:59 --> 01:09:03
so you can make it as large as you want, as deep as you want

01:09:02 --> 01:09:05
and the deeper and larger, the better.

01:09:05 --> 01:09:08
What these folks actually used--

01:09:08 --> 01:09:11
the way these competitions work

01:09:10 --> 01:09:15
and I encourage you, if you're interested in machine learning

01:09:14 --> 01:09:16
to participate in Kaggle,

01:09:15 --> 01:09:20
I don't know how to pronounce it, competitions

01:09:19 --> 01:09:23
where basically everyone is doing the same thing,

01:09:22 --> 01:09:25
you're using LSTMs

01:09:24 --> 01:09:26
or if it's one- on-one mapping,

01:09:25 --> 01:09:29
using convolutional neural network fully connecting networks

01:09:28 --> 01:09:31
with some clever pre-processing

01:09:30 --> 01:09:33
and the whole job is that takes months

01:09:32 --> 01:09:35
and you probably, if you're a researcher,

01:09:34 --> 01:09:37
that's what you'd be doing your own research,

01:09:36 --> 01:09:38
playing with parameters,

01:09:37 --> 01:09:40
playing with pre-processing of the data,

01:09:40 --> 01:09:44
playing with the different parameter that controls the size of the network

01:09:43 --> 01:09:45
the learning rate,

01:09:44 --> 01:09:48
I've mentioned, this type of optimizer,

01:09:47 --> 01:09:50
all these kinds of things, that's what you're playing with,

01:09:49 --> 01:09:52
using your own human intuition

01:09:51 --> 01:09:54
and you're using your--

01:09:56 --> 01:09:59
whatever probing you can do

01:09:58 --> 01:10:02
in monitoring the performansce of the network

01:10:01 --> 01:10:03
through time.

01:10:03 --> 01:10:05
Yes?

01:10:17 --> 01:10:19
The question was,

01:10:20 --> 01:10:24
you said that there's a

01:10:23 --> 01:10:27
memory of tenth in this LCM,

01:10:26 --> 01:10:31
and I thought RNNs are supposed to be arbitrary.

01:10:32 --> 01:10:35
It has to do

01:10:35 --> 01:10:37
with the training,

01:10:37 --> 01:10:40
how the network is trained.

01:10:39 --> 01:10:42
It's trained with sequences of 10.

01:10:41 --> 01:10:45
The structure is still the same, you only have one

01:10:44 --> 01:10:47
cell that's looping onto each other.

01:10:46 --> 01:10:48
But the question is,

01:10:48 --> 01:10:50
in what chunks,

01:10:51 --> 01:10:54
what is the size of the sequence

01:10:53 --> 01:10:57
that we should do in the training and then the testing.

01:10:57 --> 01:11:00
It can be arbitrary length.

01:10:59 --> 01:11:02
It's just usually better to be consistent

01:11:02 --> 01:11:04
and have a fixed length.

01:11:07 --> 01:11:11
You're not stacking 10 cells together.

01:11:10 --> 01:11:13
It's just a single cell still.

01:11:16 --> 01:11:19
The third-place winner,

01:11:19 --> 01:11:21
Team Chauffeur,

01:11:21 --> 01:11:25
used something called transfer learning

01:11:24 --> 01:11:27
and it's something I don't think I mentioned

01:11:27 --> 01:11:30
but it's kind of implied,

01:11:31 --> 01:11:35
the amazing power of neural networks.

01:11:35 --> 01:11:38
First, you need a lot of data to do anything.

01:11:37 --> 01:11:41
That's the cost, that's the limitation in neural networks.

01:11:40 --> 01:11:44
But what you could do is,

01:11:43 --> 01:11:46
there's

01:11:46 --> 01:11:50
neural networks that have been trained on very large data sets.

01:11:49 --> 01:11:51
ImageNet,

01:11:51 --> 01:11:57
Vdg Net, AlexNet, ResNet,

01:11:56 --> 01:12:00
all these networks are trained on a huge amount of data.

01:12:01 --> 01:12:04
Those networks are trained to tell

01:12:03 --> 01:12:08
the differences between a cat and dog Specific optical recognition

01:12:07 --> 01:12:09
of single images.

01:12:09 --> 01:12:12
How do I then take that network

01:12:11 --> 01:12:13
and apply it to my problem,

01:12:12 --> 01:12:15
say of driving or length detection,

01:12:14 --> 01:12:19
or medical diagnosis, or cancer or not?

01:12:19 --> 01:12:22
The beauty of neural networks,

01:12:26 --> 01:12:29
the promise of transfer learning,

01:12:28 --> 01:12:31
is that you can just take that network,

01:12:30 --> 01:12:33
chop off the final layer,

01:12:33 --> 01:12:35
the fully connected layer

01:12:34 --> 01:12:37
that maps from all those cool

01:12:37 --> 01:12:41
high-dimensional features that you have learned about visual space,

01:12:41 --> 01:12:45
and as opposed to predicting cat vs. dog,

01:12:44 --> 01:12:48
you teach it to predict cancer or no cancer.

01:12:47 --> 01:12:53
You teach it to predict lane or no lane, truck or no truck.

01:12:53 --> 01:12:55
As long as the visual space

01:12:55 --> 01:12:57
under which that network operates

01:12:56 --> 01:13:01
is similar or the data like if it's audio or whatever

01:13:00 --> 01:13:04
if it's similar, if the features are useful then you learn,

01:13:04 --> 01:13:08
in studying the problem of cat vs dog deeply,

01:13:07 --> 01:13:11
you have learned actually how to see the world.

01:13:10 --> 01:13:14
As you're going to apply that visual knowledge,

01:13:13 --> 01:13:16
you can transfer that learning

01:13:15 --> 01:13:18
to another domain.

01:13:17 --> 01:13:21
That's the beautiful power of neural networks

01:13:20 --> 01:13:23
it's that they're transferable.

01:13:23 --> 01:13:26
What they did here is--

01:13:27 --> 01:13:32
I didn't spend enough time looking through the code

01:13:31 --> 01:13:35
I'm not sure which of the giant nework they took

01:13:34 --> 01:13:38
but they took a giant convolutional neural network,

01:13:39 --> 01:13:42
they chopped off

01:13:41 --> 01:13:43
the end layer,

01:13:43 --> 01:13:46
which produced 3000 features,

01:13:45 --> 01:13:48
and they took those 3000 features

01:13:47 --> 01:13:50
to every single image frame,

01:13:49 --> 01:13:51
and that's the Xt.

01:13:51 --> 01:13:55
They gave that as the input to LSTM.

01:13:54 --> 01:13:57
And the sequence length, in that case, was 50.

01:13:57 --> 01:14:01
This process is pretty

01:14:04 --> 01:14:07
similar across domains. That's the beauty of it.

01:14:07 --> 01:14:12
The art of neural networks is in the--

01:14:13 --> 01:14:15
Well that's a good sign

01:14:14 --> 01:14:16
[chuckles],

01:14:15 --> 01:14:18
I guess I should warp it up--

01:14:27 --> 01:14:32
The art of the neural networks is in the proper parameter tuning.

01:14:31 --> 01:14:33
That's the tricky part,

01:14:32 --> 01:14:35
and that's the part you can't be taught.

01:14:34 --> 01:14:36
That's experience,

01:14:37 --> 01:14:39
sadly enough.

01:14:38 --> 01:14:41
That's why they talk about

01:14:41 --> 01:14:45
Stochastic Gradient Descent SGD,

01:14:44 --> 01:14:48
That's what Geoffrey Hinton

01:14:47 --> 01:14:50
refers to as

01:14:49 --> 01:14:52
Stochastic Graduate Student Descent,

01:14:53 --> 01:14:56
meaning you just keep hiring graduate students

01:14:55 --> 01:14:58
to play with the hyperparameters

01:14:57 --> 01:15:00
until the problem is solved

01:14:59 --> 01:15:03
[laughter].

01:15:06 --> 01:15:08
I have about

01:15:07 --> 01:15:12
100+ slides on driver state,

01:15:11 --> 01:15:16
which is the thing that I'm most passionate about,

01:15:15 --> 01:15:20
and I think will save the best for last.

01:15:19 --> 01:15:24
I'll talk about that tomorrow. We have a guest speaker

01:15:24 --> 01:15:26
from the White House,

01:15:25 --> 01:15:29
will talk about the future of Artificial Intelligence

01:15:28 --> 01:15:31
from the perspective of policy,

01:15:32 --> 01:15:37
and what I would like you to do first off you registered students is submit

01:15:36 --> 01:15:38
he two tutorial assignments,

01:15:37 --> 01:15:39
and pick up

01:15:40 --> 01:15:43
can we just set the boxes right here or something?

01:15:42 --> 01:15:45
Just stop by and pick up a shirt.

01:15:46 --> 01:15:49
And give us a card on the way.

01:15:48 --> 01:15:51
Thanks guys.

01:15:52 --> 01:15:57
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
