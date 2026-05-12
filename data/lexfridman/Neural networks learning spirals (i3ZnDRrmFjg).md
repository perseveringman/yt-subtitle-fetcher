---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "i3ZnDRrmFjg"
title: "Neural networks learning spirals"
video_url: "https://www.youtube.com/watch?v=i3ZnDRrmFjg"
thumbnail_url: "https://i.ytimg.com/vi/i3ZnDRrmFjg/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=i3ZnDRrmFjg"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-07-19T19:06:22.000Z"
upload_date: "2020-07-19"
duration_seconds: 304
duration_human: "5:04"
view_count: 78684
like_count: 3866
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:25:06.888Z"
---

# Neural networks learning spirals

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=i3ZnDRrmFjg
- video_id: i3ZnDRrmFjg
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-07-19T19:06:22.000Z
- upload_date: 2020-07-19
- duration: 5:04
- view_count: 78684
- like_count: 3866
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, tensorflow
- categories: Science & Technology

## Description

Visual illustration of connection between neural network architecture, hyperparameters, and dataset characteristics. Explore this connection yourself at: https://playground.tensorflow.org/

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
let's use tensorflow playground to see

00:00:01 --> 00:00:06
what kind of neural network

00:00:03 --> 00:00:07
can learn to partition the space for the

00:00:05 --> 00:00:10
binary classification problem

00:00:06 --> 00:00:12
between the blue and the orange dots

00:00:09 --> 00:00:13
first is an easier binary classification

00:00:11 --> 00:00:15
problem

00:00:12 --> 00:00:16
with a circle and a ring distribution

00:00:14 --> 00:00:19
around it

00:00:15 --> 00:00:20
second is a more difficult binary

00:00:18 --> 00:00:24
classification problem

00:00:19 --> 00:00:25
of two dueling spirals this little

00:00:23 --> 00:00:27
visualization tool on

00:00:24 --> 00:00:28
playground.tensorflow.org

00:00:26 --> 00:00:30
is really useful for getting an

00:00:27 --> 00:00:31
intuition about how the size of the

00:00:29 --> 00:00:33
network

00:00:30 --> 00:00:34
and the various hyper parameters affects

00:00:32 --> 00:00:36
what kind of representations that

00:00:33 --> 00:00:39
network is able to learn the input to

00:00:35 --> 00:00:40
the network is the position of the point

00:00:38 --> 00:00:41
in the 2d plane

00:00:39 --> 00:00:43
and the output of the network is the

00:00:40 --> 00:00:45
classification of whether it's an orange

00:00:42 --> 00:00:47
or a blue dot

00:00:44 --> 00:00:49
we'll hold all the hyper parameters

00:00:46 --> 00:00:50
constant for this little experiment

00:00:48 --> 00:00:52
and just vary the number of neurons and

00:00:50 --> 00:00:54
hidden layers

00:00:51 --> 00:00:56
the hyper parameters are a batch size of

00:00:53 --> 00:00:59
one learning rate of 0.03

00:00:56 --> 00:01:03
the activation function is rayleigh and

00:00:58 --> 00:01:04
l1 regularization with a rate of 0.001

00:01:02 --> 00:01:06
so let's start with one hidden layer and

00:01:03 --> 00:01:07
one neuron and gradually increase the

00:01:05 --> 00:01:09
size of the network to see what kind of

00:01:06 --> 00:01:11
representation it's able to learn

00:01:08 --> 00:01:12
keep your eye on the right side of the

00:01:10 --> 00:01:14
screen that shows the test loss and the

00:01:12 --> 00:01:15
training loss

00:01:13 --> 00:01:17
and the plot that shows sample points

00:01:14 --> 00:01:18
from the two distributions

00:01:16 --> 00:01:21
and then the shading in the background

00:01:18 --> 00:01:22
of the plot shows the partitioning

00:01:20 --> 00:01:23
function that the neural network is

00:01:21 --> 00:01:25
learning

00:01:22 --> 00:01:28
so successful function is able to

00:01:24 --> 00:01:31
separate the orange and the blue dots

00:01:27 --> 00:01:31
one hidden layer with one neuron

00:01:32 --> 00:01:35
two neurons

00:01:36 --> 00:01:44
three neurons

00:01:40 --> 00:01:44
four neurons

00:01:45 --> 00:01:49
eight neurons

00:01:49 --> 00:01:54
now let's take a look at the trickier

00:01:51 --> 00:01:56
spiral data set keeping most of the

00:01:53 --> 00:02:00
hyperparameters the same

00:01:55 --> 00:02:03
but decreasing the learning rate to 0.01

00:01:59 --> 00:02:03
and adding to the input to the neural

00:02:02 --> 00:02:06
network

00:02:02 --> 00:02:07
extra features than just the coordinate

00:02:05 --> 00:02:09
of the point

00:02:06 --> 00:02:10
but also the squares of the coordinates

00:02:08 --> 00:02:13
the multiplication

00:02:10 --> 00:02:17
and the sign of each coordinate let's

00:02:12 --> 00:02:17
tart with one hidden layer one neuron

00:02:18 --> 00:02:27
two neurons

00:02:23 --> 00:02:27
four neurons

00:02:31 --> 00:02:38
ix neurons

00:02:39 --> 00:02:43
eight neurons

00:02:49 --> 00:03:06
two hidden layers two neurons on the

00:02:51 --> 00:03:09
second layer

00:03:05 --> 00:03:09
four neurons

00:03:16 --> 00:03:20
ix neurons

00:03:34 --> 00:03:48
eight neurons

00:03:55 --> 00:04:01
there you go that's a basic illustration

00:03:56 --> 00:04:04
with the playground.tensorflow.org

00:04:00 --> 00:04:05
that i recommend you try that shows the

00:04:03 --> 00:04:06
connection between neural network

00:04:04 --> 00:04:09
architecture

00:04:05 --> 00:04:11
data set characteristics and different

00:04:08 --> 00:04:12
raining hyper parameters

00:04:10 --> 00:04:14
it's important to note that the

00:04:11 --> 00:04:15
initialization of the neural network has

00:04:13 --> 00:04:17
a big impact

00:04:14 --> 00:04:19
in many of the cases but the purpose of

00:04:16 --> 00:04:21
this video is not to show the minimal

00:04:18 --> 00:04:23
neural network architecture that's able

00:04:20 --> 00:04:26
to represent the spiral

00:04:22 --> 00:04:28
data set but rather to provide a visual

00:04:25 --> 00:04:29
intuition about which kind of networks

00:04:27 --> 00:04:31
are able to

00:04:28 --> 00:04:32
learn which kinds of data sets there you

00:04:30 --> 00:04:33
go i hope you enjoy these quick little

00:04:31 --> 00:04:35
videos

00:04:32 --> 00:04:37
whether they make you think give you a

00:04:34 --> 00:04:39
new kind of insights

00:04:36 --> 00:04:40
are just fun and inspiring see you next

00:04:38 --> 00:04:42
ime

00:04:39 --> 00:04:43
and remember try to challenge yourself

00:04:41 --> 00:04:58
and learn something new

00:04:42 --> 00:04:58
every day

00:05:03 --> 00:05:06
ou

<!-- YOUTUBE_TRANSCRIPT_END -->
