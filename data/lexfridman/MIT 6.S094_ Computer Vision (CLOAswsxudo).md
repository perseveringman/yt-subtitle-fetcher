---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "CLOAswsxudo"
title: "MIT 6.S094: Computer Vision"
video_url: "https://www.youtube.com/watch?v=CLOAswsxudo"
thumbnail_url: "https://i.ytimg.com/vi/CLOAswsxudo/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=CLOAswsxudo"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-01-27T21:34:10.000Z"
upload_date: "2018-01-27"
duration_seconds: 3193
duration_human: "53:13"
view_count: 124842
like_count: 1944
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:21:01.694Z"
---

# MIT 6.S094: Computer Vision

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=CLOAswsxudo
- video_id: CLOAswsxudo
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-01-27T21:34:10.000Z
- upload_date: 2018-01-27
- duration: 53:13
- view_count: 124842
- like_count: 1944
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, mit, self-driving cars, artificial intelligence, machine learning, opencourseware, free, open, 2018, computer vision, convolutional neural networks
- categories: Science & Technology

## Description

This is lecture 4 of course 6.S094: Deep Learning for Self-Driving Cars (2018 version). This class is free and open to everyone. It is an introduction to the practice of deep learning through the applied theme of building a self-driving car.

OUTLINE:
0:00 - Computer Vision and Convolutional Neural Networks
22:15 - Network Architectures for Image Classification
34:39 - Fully Convolutional Neural Networks
44:35 - Optical Flow
50:07 - SegFuse Dynamic Scene Segmentation Competition

INFO:
Slides: http://bit.ly/2HdjksA
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Playlist: https://goo.gl/SLCb1y

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- Show your support: https://www.patreon.com/lexfridman
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

00:00:00 --> 00:00:07
today we'll talk about how to make

00:00:03 --> 00:00:11
machines see computer vision and we'll

00:00:06 --> 00:00:15
present Thank You Claire said yes and

00:00:10 --> 00:00:19
today we will present a competition that

00:00:14 --> 00:00:23
unlike deep traffic which is designed to

00:00:18 --> 00:00:27
explore ideas teach you about concepts

00:00:22 --> 00:00:29
of deep reinforcement learning seg fuse

00:00:26 --> 00:00:31
the deep dynamic driving scene

00:00:28 --> 00:00:34
segmentation competition that I'll

00:00:30 --> 00:00:37
present today is at the very cutting

00:00:33 --> 00:00:40
edge whoever does well in this

00:00:36 --> 00:00:43
competition is likely to produce a

00:00:39 --> 00:00:47
publication or ideas that would lead the

00:00:42 --> 00:00:49
world in the area of perception perhaps

00:00:46 --> 00:00:52
together with the people running this

00:00:48 --> 00:00:57
class perhaps in your own and I

00:00:51 --> 00:01:02
encourage you to do so even more cats

00:00:56 --> 00:01:07
today computer vision today as it stands

00:01:01 --> 00:01:09
is deep learning majority of the

00:01:06 --> 00:01:12
successes in how we interpret form

00:01:08 --> 00:01:15
representations understand images and

00:01:11 --> 00:01:19
videos utilize to a significant degree

00:01:14 --> 00:01:21
neural networks the very ideas we've

00:01:18 --> 00:01:23
been talking about that applies for

00:01:20 --> 00:01:27
supervised unsupervised and

00:01:22 --> 00:01:30
reinforcement learning and for the

00:01:26 --> 00:01:34
supervised case is just the focus of

00:01:29 --> 00:01:37
today the process is the same the data

00:01:33 --> 00:01:39
is essential there's annotated data

00:01:36 --> 00:01:41
where the human provides the labels that

00:01:38 --> 00:01:44
serves as the ground truth in the

00:01:40 --> 00:01:48
training process then the neural network

00:01:43 --> 00:01:52
ghost's through that data learning to

00:01:47 --> 00:01:54
map from the raw sensory input to the

00:01:51 --> 00:01:58
ground truth labels and then generalize

00:01:53 --> 00:02:00
or the testing data set and the kind of

00:01:57 --> 00:02:03
raw sensors were dealing with their

00:01:59 --> 00:02:07
numbers I'll say this again and again

00:02:02 --> 00:02:09
that for human vision for us here would

00:02:06 --> 00:02:12
take for granted this particular aspect

00:02:08 --> 00:02:13
of our ability is to take in raw sensory

00:02:11 --> 00:02:14
information through our eyes and

00:02:12 --> 00:02:17
interpret

00:02:13 --> 00:02:19
but it's just numbers that's something

00:02:16 --> 00:02:22
whether you're an expert computer vision

00:02:18 --> 00:02:25
person or new to the field you have to

00:02:21 --> 00:02:29
always go back to meditate on is what

00:02:24 --> 00:02:32
kind of things the Machine is given what

00:02:28 --> 00:02:34
what is the data that is tasked to

00:02:31 --> 00:02:36
work with in order to perform the tasks

00:02:33 --> 00:02:39
you're asking it to do

00:02:35 --> 00:02:41
perhaps the data is given is highly

00:02:38 --> 00:02:42
insufficient to do what you want it to

00:02:40 --> 00:02:44
do

00:02:41 --> 00:02:47
that's the question I'll come up again

00:02:43 --> 00:02:51
and again our images enough to

00:02:46 --> 00:02:51
understand the world around you and

00:02:51 --> 00:02:57
given these numbers the set of numbers

00:02:54 --> 00:03:00
ometimes with one channel sometimes

00:02:56 --> 00:03:03
with three RGB where every single pixel

00:02:59 --> 00:03:08
have three different colors the task is

00:03:02 --> 00:03:12
to classify or regress produce a

00:03:07 --> 00:03:18
continuous variable or one of a set of

00:03:11 --> 00:03:22
class labels as before we must be

00:03:17 --> 00:03:26
careful about our intuition of what is

00:03:21 --> 00:03:26
hard and what is easy in computer vision

00:03:27 --> 00:03:35
let's take a step back to the

00:03:30 --> 00:03:39
inspiration for neural networks our own

00:03:34 --> 00:03:41
biological neural networks because the

00:03:38 --> 00:03:43
human vision system and the computer

00:03:40 --> 00:03:54
vision system is a little bit more

00:03:42 --> 00:03:57
similar in these regards this

00:03:53 --> 00:04:00
and visual cortex is in layers and as

00:03:56 --> 00:04:03
information passes from the eyes to the

00:03:59 --> 00:04:05
parts of the brain that makes

00:04:02 --> 00:04:08
ense of the raw sensor information

00:04:04 --> 00:04:11
higher and higher order representations

00:04:07 --> 00:04:14
have formed this is the inspiration the

00:04:10 --> 00:04:16
idea behind using deep neural networks

00:04:13 --> 00:04:18
for images higher and higher order

00:04:15 --> 00:04:23
epresentations of form through the

00:04:17 --> 00:04:26
layers there early layers taking in the

00:04:22 --> 00:04:29
very raw and sensory information then

00:04:25 --> 00:04:31
extracting edges connecting those edges

00:04:28 --> 00:04:34
forming those edges to form more complex

00:04:30 --> 00:04:36
features and finally into the

00:04:33 --> 00:04:39
higher-order semantic meaning that we

00:04:35 --> 00:04:42
hope to get from these images in

00:04:38 --> 00:04:44
computer vision deep learning is hard

00:04:41 --> 00:04:46
I'll say this again

00:04:43 --> 00:04:48
the illumination variability is the

00:04:45 --> 00:04:52
biggest challenge or at least one of the

00:04:47 --> 00:04:56
biggest challenges in driving

00:04:51 --> 00:05:00
for visible light cameras pose

00:04:55 --> 00:05:02
variability the objects as I'll also

00:04:59 --> 00:05:05
discuss about some of the advances geoff

00:05:01 --> 00:05:08
hinton and the capsule networks the idea

00:05:04 --> 00:05:10
with the neural networks as they're

00:05:07 --> 00:05:14
currently useful computer vision are not

00:05:09 --> 00:05:18
good with representing variable pose

00:05:13 --> 00:05:21
these objects in images and this 2d

00:05:17 --> 00:05:24
plane of color and texture look very

00:05:20 --> 00:05:28
different numerically when the object is

00:05:23 --> 00:05:30
rotated and the object is mangled and

00:05:27 --> 00:05:33
shaped in different ways the deformable

00:05:29 --> 00:05:37
will truncated cat intraclass

00:05:32 --> 00:05:39
variability the for the classification

00:05:36 --> 00:05:42
task which would be an example today

00:05:38 --> 00:05:44
throughout to introduce some of the

00:05:41 --> 00:05:45
networks over the past decade that have

00:05:43 --> 00:05:47
received success in some of the

00:05:44 --> 00:05:51
intuition and insight that made those

00:05:46 --> 00:05:53
networks work classification there is a

00:05:50 --> 00:05:55
lot of variability inside the classes

00:05:52 --> 00:06:00
and very little variability between the

00:05:54 --> 00:06:02
classes all of these are cats on top all

00:05:59 --> 00:06:05
of those are dogs are bottom they look

00:06:01 --> 00:06:07
very different and the other I would say

00:06:04 --> 00:06:08
the second biggest problem in driving

00:06:06 --> 00:06:09
perception

00:06:07 --> 00:06:12
visible light camera perceptions

00:06:08 --> 00:06:15
occlusion when part of the object is

00:06:11 --> 00:06:19
occluded due to the three-dimensional

00:06:14 --> 00:06:22
nature of our world some objects in

00:06:18 --> 00:06:25
front of others and they occlude the

00:06:21 --> 00:06:28
background object and yet we're still

00:06:24 --> 00:06:30
tasked with identifying the object when

00:06:27 --> 00:06:34
only part of it is visible and sometimes

00:06:29 --> 00:06:36
that part told you there's cats is very

00:06:33 --> 00:06:38
hardly visible here

00:06:35 --> 00:06:46
we're tasked with classifying a cat with

00:06:37 --> 00:06:48
just an ears visible just the leg and in

00:06:45 --> 00:06:50
the philosophical level as we'll talk

00:06:47 --> 00:06:54
about the motivation for our competition

00:06:49 --> 00:06:58
here here's a cat dressed as a monkey

00:06:53 --> 00:07:03
eating a banana on a philosophical level

00:06:57 --> 00:07:08
most of us understand what's going on in

00:07:02 --> 00:07:14
the scene in fact a neural network it's

00:07:07 --> 00:07:14
to today successfully classify this

00:07:13 --> 00:07:22
image this video as a cat but the

00:07:18 --> 00:07:26
context the humour of the situation and

00:07:21 --> 00:07:30
in fact you could argue it's a monkey is

00:07:25 --> 00:07:32
missing and what else is missing is the

00:07:29 --> 00:07:36
dynamic information the temporal

00:07:31 --> 00:07:38
dynamics of the scene that's what's

00:07:35 --> 00:07:41
missing in a lot of the perception work

00:07:37 --> 00:07:44
that has been done to date in the

00:07:40 --> 00:07:46
autonomous vehicle space in terms of

00:07:43 --> 00:07:47
visible light cameras and we're looking

00:07:45 --> 00:07:50
to expand on that

00:07:46 --> 00:07:53
's what psyche fuse is all about

00:07:49 --> 00:07:55
image classification pipeline there's a

00:07:52 --> 00:08:00
bin with different categories inside

00:07:54 --> 00:08:02
ach class cat dog mug hat those bins

00:07:59 --> 00:08:05
there's a lot of examples of each and

00:08:01 --> 00:08:07
your task with when a new example comes

00:08:04 --> 00:08:10
along you never seen before to put that

00:08:06 --> 00:08:12
image in a bin it's the same as the

00:08:09 --> 00:08:16
machine learning tasks before and

00:08:11 --> 00:08:18
everything relies on the data that's

00:08:15 --> 00:08:20
been ground truth that been labeled by

00:08:17 --> 00:08:23
human beings

00:08:19 --> 00:08:27
amnesty is a toy data set of handwritten

00:08:22 --> 00:08:30
digits often used as examples and Koko

00:08:26 --> 00:08:32
safar imagenet places and a lot of other

00:08:29 --> 00:08:35
incredible datasets rich data sets of a

00:08:31 --> 00:08:38
hundred thousands millions of images out

00:08:34 --> 00:08:41
here represent scenes people's faces

00:08:37 --> 00:08:44
and different objects those are all

00:08:40 --> 00:08:48
ground truth data for testing algorithms

00:08:43 --> 00:08:51
and for competing architectures to be

00:08:47 --> 00:08:55
valuated against each other see far ten

00:08:50 --> 00:08:57
one of the simplest almost toy datasets

00:08:54 --> 00:09:00
of tiny icons with ten categories of

00:08:56 --> 00:09:02
airplane automobile bird cat deer dog

00:08:59 --> 00:09:04
for our course ship and truck is

00:09:01 --> 00:09:06
commonly used to explore some of the

00:09:03 --> 00:09:08
basic convolution neural networks we'll

00:09:05 --> 00:09:10
discuss so let's come up with a very

00:09:07 --> 00:09:13
trivial classifier to explain the

00:09:09 --> 00:09:16
concept of how we could go about it in

00:09:12 --> 00:09:18
fact this is maybe if you start to think

00:09:15 --> 00:09:20
about how to classify an image if you

00:09:17 --> 00:09:21
don't know any of these techniques this

00:09:19 --> 00:09:24
perhaps the approach you would take

00:09:20 --> 00:09:27
is you would subtract images so in order

00:09:23 --> 00:09:29
to know that an image of a cat is

00:09:26 --> 00:09:31
different than image of a dog if to

00:09:28 --> 00:09:33
compare them when given those two images

00:09:30 --> 00:09:35
what what's the what's the way you

00:09:32 --> 00:09:38
compare them one way you could do it is

00:09:34 --> 00:09:41
you just subtract it and then sum all

00:09:37 --> 00:09:43
the pixel wise differences in the image

00:09:40 --> 00:09:47
just subtract the intensity of the image

00:09:42 --> 00:09:49
pixel by pixel sum it up if that intent

00:09:46 --> 00:09:51
if that difference is really high that

00:09:48 --> 00:09:54
means the images are very different

00:09:50 --> 00:09:58
using that metric we can look at C for

00:09:53 --> 00:10:01
10 and use it as a classifier saying

00:09:57 --> 00:10:03
based on this difference function I'm

00:10:00 --> 00:10:08
going to find one of the 10 bins for a

00:10:02 --> 00:10:13
new image that that is that has the

00:10:07 --> 00:10:15
lowest difference find an image in this

00:10:12 --> 00:10:17
data set that is most like the image I

00:10:14 --> 00:10:22
have and put it in the same bin as that

00:10:16 --> 00:10:24
images in so there's 10 classes if we

00:10:21 --> 00:10:28
just flip a coin the accuracy of our

00:10:23 --> 00:10:30
classifier will be 10% using our image

00:10:27 --> 00:10:32
difference classifier we can actually do

00:10:29 --> 00:10:33
pretty good much better than random much

00:10:31 --> 00:10:37
better than 10%

00:10:32 --> 00:10:41
we can do 35 38 percent accuracy

00:10:36 --> 00:10:47
that's a classifier we have our first

00:10:40 --> 00:10:49
classifier K nearest neighbors let's

00:10:46 --> 00:10:53
take our classifier to a whole new level

00:10:48 --> 00:10:55
instead of comparing it to just fight

00:10:52 --> 00:10:58
rying to find one image that's the

00:10:54 --> 00:11:02
closest in our data set we tried to find

00:10:57 --> 00:11:04
K closest and say what is what class do

00:11:01 --> 00:11:07
the majority of them belong to and we

00:11:03 --> 00:11:10
take that k and increase it for 1 to 2

00:11:06 --> 00:11:15
to 3 to 4 to 5 and see how that changes

00:11:09 --> 00:11:17
the problem with seven years neighbors

00:11:14 --> 00:11:23
which is the optimal under this approach

00:11:16 --> 00:11:29
for CFR 10 we achieve 30% accuracy

00:11:22 --> 00:11:31
human level is 95% accuracy and with

00:11:28 --> 00:11:39
convolutional neural networks will get

00:11:30 --> 00:11:42
very close to 100% that's where you'll

00:11:38 --> 00:11:45
networks shine this very task of bending

00:11:42 --> 00:11:48
images it all starts at this basic

00:11:44 --> 00:11:53
omputational unit signal in each of the

00:11:47 --> 00:11:58
signals are weighed summed bias added

00:11:52 --> 00:12:00
and put an input into a nonlinear

00:11:57 --> 00:12:03
activation function that produces an

00:11:59 --> 00:12:07
output the nonlinear activation function

00:12:02 --> 00:12:12
is key all of these put together and

00:12:06 --> 00:12:14
more and more hidden layers form a deep

00:12:11 --> 00:12:17
neural network and that deep neural

00:12:13 --> 00:12:20
network is trained as we've discussed by

00:12:16 --> 00:12:22
taking a forward pass and examples have

00:12:19 --> 00:12:24
garage with labels seeing how close

00:12:21 --> 00:12:27
those labels are to the real ground

00:12:23 --> 00:12:30
truth and then punishing the weights

00:12:26 --> 00:12:32
that resulted in the incorrect decisions

00:12:29 --> 00:12:35
and rewarding the weights that resulted

00:12:31 --> 00:12:40
in correct decisions for the case of 10

00:12:34 --> 00:12:45
examples the output of the network is

00:12:39 --> 00:12:49
different values the input being

00:12:44 --> 00:12:53
handwritten digits from 0 to 9 for 10 of

00:12:48 --> 00:12:55
those and we wanted our network to

00:12:52 --> 00:12:59
classify what is in this image of a

00:12:54 --> 00:13:03
handwritten digit is it 1 is 0 1 2 3

00:12:58 --> 00:13:07
through 9 the way it's often done is

00:13:02 --> 00:13:12
there's ten outputs of the network and

00:13:06 --> 00:13:14
each of the neurons on the output is

00:13:11 --> 00:13:18
responsible for getting really excited

00:13:13 --> 00:13:21
when it's number is called and everybody

00:13:17 --> 00:13:25
else is supposed to be not excited

00:13:20 --> 00:13:26
therefore the number of classes is the

00:13:24 --> 00:13:31
number of outputs that's how it's

00:13:25 --> 00:13:33
commonly done and you assign a class to

00:13:30 --> 00:13:37
the input image based on the highest the

00:13:32 --> 00:13:39
neuron which produces the highest output

00:13:36 --> 00:13:43
but that's for a fully connected network

00:13:38 --> 00:13:47
that we've discussed on Monday there is

00:13:42 --> 00:13:49
in deep learning a lot of tricks that

00:13:46 --> 00:13:54
make things work that make training much

00:13:48 --> 00:13:56
more efficient on large class problems

00:13:53 --> 00:13:59
where there's a lot of classes on large

00:13:55 --> 00:14:00
data sets when the representation that

00:13:58 --> 00:14:02
he neural network is tasked with

00:13:59 --> 00:14:04
learning is extremely complex and that's

00:14:01 --> 00:14:06
where convolutional neural neural

00:14:03 --> 00:14:09
networks step in the trick they use a

00:14:05 --> 00:14:14
spatial invariance they use the idea

00:14:08 --> 00:14:16
that a cat in the top left corner of an

00:14:13 --> 00:14:19
image is the same as a cat in the bottom

00:14:15 --> 00:14:23
right corner of an image so we can learn

00:14:18 --> 00:14:25
the same features across the image

00:14:22 --> 00:14:29
that's where the convolution operation

00:14:24 --> 00:14:32
steps in instead of the fully connected

00:14:28 --> 00:14:35
networks here there's a third dimension

00:14:31 --> 00:14:40
of depth so the blocks in this neural

00:14:34 --> 00:14:43
network as input take 3d volumes and as

00:14:39 --> 00:14:43
output produced 3d volumes

00:14:47 --> 00:14:55
a slice of the image a window and slide

00:14:51 --> 00:14:56
it across applying the same exact

00:14:54 --> 00:15:00
weights and we'll go through an example

00:14:55 --> 00:15:02
the same exact weights as in the fully

00:14:59 --> 00:15:05
connected network on the edges that are

00:15:01 --> 00:15:09
used to map the input to the output here

00:15:04 --> 00:15:11
are used to map this slice of an image

00:15:08 --> 00:15:16
this window of an image to the output

00:15:10 --> 00:15:20
and you can make several many of such

00:15:15 --> 00:15:23
convolutional filters many layers many

00:15:19 --> 00:15:25
different options of what kind of

00:15:22 --> 00:15:28
eatures you look for in an image

00:15:24 --> 00:15:31
what kind of window you slide across in

00:15:27 --> 00:15:33
order to extract all kinds of things all

00:15:30 --> 00:15:37
kinds of edges all kind of higher-order

00:15:32 --> 00:15:40
patterns in the images the very

00:15:36 --> 00:15:42
important thing is the parameters on

00:15:39 --> 00:15:46
each of these filters the subset of the

00:15:41 --> 00:15:49
image these windows are shared if the

00:15:45 --> 00:15:51
feature that defines a cat is useful in

00:15:48 --> 00:15:53
the top left corner it's useful in the

00:15:50 --> 00:15:55
top right corner it's useful in every

00:15:52 --> 00:15:57
aspect of the image this is the trick

00:15:54 --> 00:16:01
that makes convolutional neural networks

00:15:56 --> 00:16:05
ave a lot of a lot of parameters reduce

00:16:00 --> 00:16:08
parameter significantly it's the reuse

00:16:04 --> 00:16:14
the spatial sharing of features across

00:16:07 --> 00:16:16
the space of the image the depth of

00:16:13 --> 00:16:21
these 3d volumes is the number of

00:16:15 --> 00:16:24
ilters the stride is the skip of the

00:16:20 --> 00:16:27
filter the step size how many pixels you

00:16:23 --> 00:16:32
skip when you apply the filter to the

00:16:26 --> 00:16:34
input and the padding is

00:16:31 --> 00:16:37
they're padding the zero padding on the

00:16:33 --> 00:16:42
outside of the input to a convolutional

00:16:36 --> 00:16:45
ayer let's go through an example so on

00:16:41 --> 00:16:47
the left here and the slides are now

00:16:44 --> 00:16:49
available online you can follow them

00:16:46 --> 00:16:53
along and I'll step through this example

00:16:48 --> 00:16:57
on the left here is a input volume of

00:16:52 --> 00:17:00
three channels the left column is the

00:16:56 --> 00:17:03
input the three block the three squares

00:16:59 --> 00:17:08
there are the three channels and there's

00:17:02 --> 00:17:15
numbers inside those channels and then

00:17:07 --> 00:17:18
we have a filter in red two of them two

00:17:14 --> 00:17:21
channels of filters with a bias and we

00:17:17 --> 00:17:25
those filters are three by three each

00:17:20 --> 00:17:27
one of them is size three by three and

00:17:24 --> 00:17:30
what we do is we take those three by

00:17:26 --> 00:17:33
three filters that are to be learned

00:17:29 --> 00:17:35
these are our variables our weights that

00:17:32 --> 00:17:39
we have to learn and then we slide it

00:17:34 --> 00:17:42
across an image to produce the output on

00:17:38 --> 00:17:45
the right the green so by applying the

00:17:41 --> 00:17:47
filters in the red there's two of them

00:17:44 --> 00:17:50
and within each one there's one for

00:17:46 --> 00:17:54
every input channel we go from the left

00:17:49 --> 00:17:56
o the right from the input volume on

00:17:53 --> 00:18:01
the left to the output volume green on

00:17:55 --> 00:18:03
the right and you can look it you can

00:18:00 --> 00:18:05
pull up the slides yourself now if you

00:18:02 --> 00:18:10
can't see the numbers on the screen but

00:18:04 --> 00:18:14
he the operations are performed on the

00:18:09 --> 00:18:15
input to produce the single value that's

00:18:13 --> 00:18:19
highlighted there in the green and the

00:18:14 --> 00:18:24
output and we slide this convolution no

00:18:18 --> 00:18:30
filter along the image with a stride in

00:18:23 --> 00:18:35
this case of to skipping skipping along

00:18:29 --> 00:18:40
they sum to the to the right the two

00:18:34 --> 00:18:43
channel output in green that's it

00:18:39 --> 00:18:45
he convolutional operation that's

00:18:42 --> 00:18:48
what's called the convolutional layer

00:18:44 --> 00:18:52
neural networks and the parameters here

00:18:47 --> 00:18:54
besides the bias are the read values in

00:18:51 --> 00:18:57
the middle that's what we're trying to

00:18:53 --> 00:18:59
learn and there's a lot of interesting

00:18:56 --> 00:19:01
tricks we'll discuss today on top of

00:18:58 --> 00:19:04
those but this is at the core this is

00:19:00 --> 00:19:07
the spatially invariant sharing of

00:19:03 --> 00:19:10
parameters that make convolutional

00:19:06 --> 00:19:14
neural networks able to efficiently

00:19:09 --> 00:19:17
learn and find patterns and images to

00:19:13 --> 00:19:19
build your intuition a little bit more

00:19:16 --> 00:19:23
about convolution here's an input image

00:19:18 --> 00:19:26
on the left and on the right the

00:19:22 --> 00:19:27
identity filter produces the output you

00:19:25 --> 00:19:30
see on the right and then there's

00:19:26 --> 00:19:34
different ways you can different kinds

00:19:29 --> 00:19:36
of edges you can extract with the

00:19:33 --> 00:19:39
activate or the resulting activation map

00:19:35 --> 00:19:41
seen on the right so when applying the

00:19:38 --> 00:19:45
filters with those edge detection

00:19:40 --> 00:19:47
filters to the image on the left you

00:19:44 --> 00:19:51
produce in white are the parts that

00:19:46 --> 00:19:57
activate the convolution the results of

00:19:50 --> 00:19:58
these filters and so you can do any kind

00:19:56 --> 00:20:03
of filter that's what we're trying to

00:19:57 --> 00:20:06
learn any kind of edge any kind of any

00:20:02 --> 00:20:07
kind of pattern you can move along in

00:20:05 --> 00:20:09
this window and this way that's shown

00:20:06 --> 00:20:12
here you slide along the image and you

00:20:08 --> 00:20:14
produce the output you see on the right

00:20:11 --> 00:20:16
and depending on how many filters you

00:20:13 --> 00:20:19
have in every level you have many of

00:20:15 --> 00:20:22
such slices VC on the right the input on

00:20:18 --> 00:20:25
the left the output on the right if you

00:20:21 --> 00:20:27
have dozens of filters you have dozens

00:20:24 --> 00:20:32
of images on the right each with

00:20:26 --> 00:20:33
different results that show where each

00:20:31 --> 00:20:37
of the individual filter patterns were

00:20:32 --> 00:20:39
found and we learned what patterns are

00:20:36 --> 00:20:42
useful to look for in order to perform

00:20:38 --> 00:20:44
the classification task that's the task

00:20:41 --> 00:20:46
for the neural network to learn these

00:20:43 --> 00:20:49
filters

00:20:45 --> 00:20:55
and the filters have higher and higher

00:20:48 --> 00:20:58
order of representation going from the

00:20:54 --> 00:21:03
very basic edges to the high semantics

00:20:57 --> 00:21:06
meaning that spans entire images and the

00:21:02 --> 00:21:08
ability to spend images can be done in

00:21:05 --> 00:21:10
several ways but traditionally has been

00:21:07 --> 00:21:16
successfully done through max pooling

00:21:09 --> 00:21:20
through pooling of taking the output of

00:21:15 --> 00:21:24
convolutional operation and reducing the

00:21:19 --> 00:21:26
resolution of that byte by condensing

00:21:23 --> 00:21:28
that information by for example taking

00:21:25 --> 00:21:34
the maximum values the maximum

00:21:27 --> 00:21:37
activations therefore reducing the

00:21:33 --> 00:21:39
spatial resolution which has detrimental

00:21:36 --> 00:21:42
effects as we'll talk about in the scene

00:21:38 --> 00:21:44
segmentation but it's beneficial for

00:21:41 --> 00:21:46
finding higher order representations and

00:21:43 --> 00:21:50
the images that bring images together

00:21:45 --> 00:21:51
that bring features together to form an

00:21:49 --> 00:21:57
entity that we're trying to identify and

00:21:50 --> 00:21:58
classify okay so that forms a

00:21:56 --> 00:22:00
convolution Yool network such

00:21:57 --> 00:22:02
convolutional layers stacked on top of

00:21:59 --> 00:22:04
each other is the only addition to a

00:22:01 --> 00:22:07
neural network that makes for a

00:22:03 --> 00:22:09
convolutional neural network and then at

00:22:06 --> 00:22:13
he end the fully connected layers or

00:22:08 --> 00:22:15
any kind of other architectures allow us

00:22:12 --> 00:22:21
to apply particular domains

00:22:15 --> 00:22:26
let's take image net as a case study an

00:22:20 --> 00:22:27
image net the data set an image net the

00:22:25 --> 00:22:31
challenge

00:22:27 --> 00:22:33
the task is classification as I

00:22:30 --> 00:22:36
mentioned the first lecture image net is

00:22:32 --> 00:22:40
a data set one of the largest in the

00:22:35 --> 00:22:45
world of images with 14 million images

00:22:39 --> 00:22:48
21,000 categories and a lot of depth to

00:22:44 --> 00:22:51
many of the categories as I mentioned

00:22:47 --> 00:22:51
1200 granny smith apples

00:22:52 --> 00:22:59
these allow - these allow the newer

00:22:55 --> 00:23:01
networks to learn the rich

00:22:58 --> 00:23:03
representations in both pose lighting

00:23:00 --> 00:23:04
variability and intraclass class

00:23:02 --> 00:23:08
variation for the particular things

00:23:03 --> 00:23:11
particular classes like granny smith

00:23:07 --> 00:23:14
apples so let's look through the various

00:23:10 --> 00:23:14
networks let's discuss them let's see

00:23:13 --> 00:23:17
the insights

00:23:13 --> 00:23:20
it started with Alex net the first

00:23:16 --> 00:23:22
really big successful GPU trained neural

00:23:19 --> 00:23:24
network on image net that's achieved a

00:23:21 --> 00:23:32
significant boost over the previous year

00:23:23 --> 00:23:36
and moved on to vgg net Google net ague

00:23:31 --> 00:23:43
Lynnette ResNet see you image and as

00:23:35 --> 00:23:45
Annette in 2017 again the numbers will

00:23:42 --> 00:23:49
show for the accuracy are based on the

00:23:44 --> 00:23:52
top five error rate we get five guesses

00:23:48 --> 00:23:53
and it's a one or zero if you get guess

00:23:51 --> 00:23:56
if one of the five is correct you get a

00:23:52 --> 00:24:04
one for that particular guess otherwise

00:23:55 --> 00:24:06
it's a zero and human error is five

00:24:03 --> 00:24:09
point one when a human tries to achieve

00:24:05 --> 00:24:12
the same tries to perform the same task

00:24:08 --> 00:24:14
as the machinist task of doing the air

00:24:11 --> 00:24:16
is five point one the human annotation

00:24:13 --> 00:24:19
is performed on the images based on

00:24:15 --> 00:24:23
binary classification Granny Smith apple

00:24:18 --> 00:24:25
or not cat or not the actual tasks that

00:24:22 --> 00:24:28
he machine has to perform and that the

00:24:24 --> 00:24:30
human competing has to perform is given

00:24:27 --> 00:24:34
an image is provide one of the many

00:24:29 --> 00:24:39
classes under that human errors 5.1%

00:24:33 --> 00:24:45
which was surpassed in 2015 by ResNet to

00:24:38 --> 00:24:48
achieve four percent error so let's

00:24:44 --> 00:24:50
with Alex net I'll zoom in on the later

00:24:47 --> 00:24:54
networks they have some interesting

00:24:49 --> 00:24:57
insights but Alex net and vgg net both

00:24:53 --> 00:25:03
fall at a very similar architecture very

00:24:56 --> 00:25:09
uniform throughout its depth vgg net in

00:25:02 --> 00:25:11
2014 is convolution convolution pooling

00:25:08 --> 00:25:14
convolution pooling

00:25:10 --> 00:25:16
and fully connected layers at the end

00:25:13 --> 00:25:18
there's a certain kind of beautiful

00:25:15 --> 00:25:20
simplicity uniformity to these

00:25:17 --> 00:25:22
architectures because you can just make

00:25:19 --> 00:25:25
it deeper and deeper and makes it very

00:25:21 --> 00:25:28
amenable to implementation in a layer

00:25:24 --> 00:25:30
stack kind of way and in any of the deep

00:25:27 --> 00:25:33
learning frameworks it's clean and

00:25:29 --> 00:25:36
beautiful to understand in the case of

00:25:32 --> 00:25:38
eg gina was 16 or 19 layers with 138

00:25:35 --> 00:25:39
million parameters not many

00:25:37 --> 00:25:41
optimizations and these parameters

00:25:38 --> 00:25:43
therefore the number of parameters is

00:25:40 --> 00:25:45
much higher than the networks that

00:25:42 --> 00:25:50
followed it despite the layers not being

00:25:44 --> 00:25:53
that large Google Net introduced the

00:25:49 --> 00:25:56
inception module starting to do some

00:25:52 --> 00:25:59
interesting things with the small

00:25:55 --> 00:26:00
modules within these networks which

00:25:58 --> 00:26:05
allow for the training to be more

00:25:59 --> 00:26:08
fficient and effective the idea behind

00:26:04 --> 00:26:12
the inception module shown here with the

00:26:07 --> 00:26:15
previous layer on bottom and the

00:26:11 --> 00:26:19
convolutional layer here with the

00:26:14 --> 00:26:25
inception module on top produced on top

00:26:18 --> 00:26:27
is it used the idea that different size

00:26:24 --> 00:26:30
convolutions provide different value for

00:26:26 --> 00:26:34
the network smaller convolutions are

00:26:29 --> 00:26:38
able to capture or propagate forward

00:26:33 --> 00:26:42
features that are very local a high

00:26:37 --> 00:26:45
resolution in in in texture larger

00:26:41 --> 00:26:49
convolutions are better able to

00:26:44 --> 00:26:51
represent and capture and catch highly

00:26:48 --> 00:26:53
abstracted features higher-order

00:26:50 --> 00:26:56
features so the idea behind the

00:26:52 --> 00:26:59
inception module is to say well as

00:26:55 --> 00:26:59
opposed to choosing and high in a high

00:26:58 --> 00:27:02
pair

00:26:58 --> 00:27:04
tuning process or architecture design

00:27:01 --> 00:27:07
process choosing which convolution size

00:27:03 --> 00:27:09
we want to go with why not do all of

00:27:06 --> 00:27:12
them together while several together in

00:27:08 --> 00:27:15
the case of the Google net model there's

00:27:11 --> 00:27:18
the one by one three by three and five

00:27:14 --> 00:27:20
by five convolutions with the old trusty

00:27:17 --> 00:27:24
friend of max pooling still left in

00:27:19 --> 00:27:25
there as well which has lost favor more

00:27:23 --> 00:27:29
and more over time for the image

00:27:24 --> 00:27:32
classification task and the results is

00:27:28 --> 00:27:36
there's fewer parameters are required if

00:27:31 --> 00:27:38
you pick the placing of these inception

00:27:35 --> 00:27:41
modules correctly the number of

00:27:37 --> 00:27:49
parameters required to achieve a higher

00:27:40 --> 00:27:52
performance is much lower res net one of

00:27:48 --> 00:27:52
the most popular still to date

00:27:53 --> 00:28:02
architectures that we'll discuss in

00:27:56 --> 00:28:06
scene segmentation as well came up and

00:28:01 --> 00:28:09
use the idea of a residual block the

00:28:05 --> 00:28:11
initial inspiring observation which

00:28:08 --> 00:28:15
doesn't necessarily hold true as it

00:28:10 --> 00:28:18
urns out but that network depth

00:28:14 --> 00:28:21
increases representation power so these

00:28:17 --> 00:28:24
residual blocks allow you to have much

00:28:20 --> 00:28:28
deeper networks and I'll explain why in

00:28:23 --> 00:28:29
a second here but the thought was they

00:28:27 --> 00:28:33
work so well because the network's so

00:28:28 --> 00:28:36
much deeper the key thing that makes

00:28:32 --> 00:28:39
these blocks so effective is the same

00:28:35 --> 00:28:41
idea that's that reminiscent of

00:28:38 --> 00:28:44
recurrent neural networks that I hope

00:28:40 --> 00:28:49
would get a chance to talk about the

00:28:43 --> 00:28:52
training of them is much easier they

00:28:48 --> 00:28:55
take a simple block repeated over and

00:28:51 --> 00:28:58
they pass the input along

00:28:54 --> 00:29:01
without transformation along with the

00:28:57 --> 00:29:05
ability to transform it to learn to

00:29:00 --> 00:29:09
learn the filters learn the weights

00:29:04 --> 00:29:13
o you're allowed to you're allow every

00:29:08 --> 00:29:15
layer to not only take on the processing

00:29:12 --> 00:29:18
of previous layers but to take in the

00:29:14 --> 00:29:22
wrong transform data and learn something

00:29:17 --> 00:29:25
new the ability to learn something new

00:29:21 --> 00:29:28
allows you to have much deeper networks

00:29:24 --> 00:29:35
and the simplicity of this block allows

00:29:27 --> 00:29:37
for more effective training the state of

00:29:34 --> 00:29:41
the art in 2017 the winner is squeezed

00:29:36 --> 00:29:43
and excitation networks that unlike the

00:29:40 --> 00:29:45
previous year will see you image which

00:29:42 --> 00:29:47
simply took ensemble methods and

00:29:44 --> 00:29:52
combined a lot of successful approaches

00:29:46 --> 00:29:56
to take a marginal improvement se net

00:29:51 --> 00:29:58
got a significant improvement at least

00:29:55 --> 00:30:03
in percentages I think there's a 25%

00:29:57 --> 00:30:08
reduction in error from 4 percent to 3

00:30:02 --> 00:30:10
percent something like that by using a

00:30:07 --> 00:30:13
very simple idea that I think is

00:30:09 --> 00:30:17
important to mention a simple insight

00:30:12 --> 00:30:20
it added a parameter to each channel and

00:30:16 --> 00:30:23
the convolutional layer in the

00:30:19 --> 00:30:26
convolutional block so the network can

00:30:22 --> 00:30:30
ow adjust the weighting on each channel

00:30:25 --> 00:30:32
based for for each feature map based on

00:30:29 --> 00:30:35
the content based on the input to the

00:30:31 --> 00:30:37
network this is kind of a take away to

00:30:34 --> 00:30:39
think about about any of the networks

00:30:36 --> 00:30:43
who talk about any of the architectures

00:30:38 --> 00:30:45
is a lot of times your recurrent neural

00:30:42 --> 00:30:48
networks and convolutional neural

00:30:44 --> 00:30:51
networks have tricks that significantly

00:30:47 --> 00:30:54
reduce the number of parameters the bulk

00:30:50 --> 00:30:56
the sort of low-hanging fruit they use

00:30:53 --> 00:30:58
spatial invariants a temporal invariants

00:30:55 --> 00:31:01
to reduce the number of parameters to

00:30:57 --> 00:31:04
represent the input data but they also

00:31:00 --> 00:31:06
leave certain things not parameterize

00:31:03 --> 00:31:08
they don't allow the network to learn it

00:31:05 --> 00:31:11
allow in this case the network to learn

00:31:07 --> 00:31:12
the weighting on each of the individual

00:31:10 --> 00:31:15
channels so each of the individual

00:31:11 --> 00:31:18
filters is something that you learn as

00:31:14 --> 00:31:19
along with the filters takes it makes a

00:31:17 --> 00:31:21
huge boost

00:31:18 --> 00:31:23
he cool thing about this is it's

00:31:20 --> 00:31:25
applicable to any architecture this kind

00:31:22 --> 00:31:27
of block that's kind of what the the

00:31:24 --> 00:31:32
squeeze and excitation block is

00:31:26 --> 00:31:36
applicable to any architecture and

00:31:31 --> 00:31:38
because obviously it it just simply

00:31:35 --> 00:31:40
permit Rises the ability to choose which

00:31:37 --> 00:31:43
filter you go with based on the content

00:31:39 --> 00:31:46
it's a subtle but crucial thing I think

00:31:42 --> 00:31:49
it's pretty cool and for future research

00:31:45 --> 00:31:50
it inspires to think about what else can

00:31:48 --> 00:31:53
be parameterize in your own networks

00:31:49 --> 00:31:55
what else can be controlled as part of

00:31:52 --> 00:31:58
the learning process including hiring

00:31:54 --> 00:32:01
higher-order hyper parameters which

00:31:57 --> 00:32:03
aspects of the training and the

00:32:00 --> 00:32:05
architecture of the network can be part

00:32:02 --> 00:32:15
of the learning this is what this

00:32:04 --> 00:32:18
network inspires another network has

00:32:14 --> 00:32:20
been in development since the 90s ideas

00:32:17 --> 00:32:22
with geoff hinton but really received

00:32:19 --> 00:32:25
has been published on received

00:32:21 --> 00:32:29
significant attention 2017 that i won't

00:32:24 --> 00:32:32
go into detail here we are going to

00:32:28 --> 00:32:36
release an online-only

00:32:31 --> 00:32:38
video about capsule networks it's a

00:32:35 --> 00:32:42
little bit too technical but they

00:32:37 --> 00:32:44
inspire a very important point that we

00:32:41 --> 00:32:47
should always think about with deep

00:32:43 --> 00:32:49
learning whenever it's successful is to

00:32:46 --> 00:32:53
think about what as I mentioned with the

00:32:48 --> 00:32:55
cat eating a banana on a philosophical

00:32:52 --> 00:32:58
and the mathematical level you have to

00:32:54 --> 00:33:01
consider what assumptions these networks

00:32:57 --> 00:33:04
make and what through those assumptions

00:33:00 --> 00:33:06
they throw away so neural networks due

00:33:03 --> 00:33:09
to the spatial with convolutional neural

00:33:05 --> 00:33:11
networks due to their spatial invariants

00:33:08 --> 00:33:16
throw away information about the

00:33:10 --> 00:33:18
relationship between the the hierarchies

00:33:15 --> 00:33:20
between the simple and the complex

00:33:17 --> 00:33:22
objects so the face on the left and the

00:33:19 --> 00:33:25
face on the right looks the same to

00:33:21 --> 00:33:28
accomplish a neural network the presence

00:33:24 --> 00:33:33
of eyes and nose and mouth is the

00:33:27 --> 00:33:34
central aspect of what makes

00:33:32 --> 00:33:37
classification tasks work for

00:33:33 --> 00:33:40
convolution Network where it will fire

00:33:36 --> 00:33:43
and say this is definitely a face but

00:33:39 --> 00:33:44
he spatial relationship is lost is

00:33:42 --> 00:33:46
ignored

00:33:43 --> 00:33:50
which means there's a lot of

00:33:45 --> 00:33:54
implications to this but for things like

00:33:49 --> 00:33:56
pose variation that information is lost

00:33:53 --> 00:34:00
we're throwing away that away completely

00:33:55 --> 00:34:03
and hoping that the pooling operation

00:33:59 --> 00:34:05
that's performing these networks is able

00:34:02 --> 00:34:07
to sort of mesh everything together to

00:34:04 --> 00:34:09
come up with the features that are

00:34:06 --> 00:34:11
firing of the different parts of the

00:34:08 --> 00:34:13
face that then come up with the total

00:34:10 --> 00:34:15
classification that it's a face without

00:34:12 --> 00:34:17
representing really the relationship

00:34:14 --> 00:34:20
between these features at the low level

00:34:16 --> 00:34:22
and and the high level at the low level

00:34:19 --> 00:34:25
of the hierarchy at the simple and the

00:34:21 --> 00:34:28
complex level this is a super exciting

00:34:24 --> 00:34:30
field now that's hopefully will spark

00:34:27 --> 00:34:33
developments of how we design your own

00:34:29 --> 00:34:38
etworks that are able to learn this the

00:34:32 --> 00:34:45
rotational the orientation invariance as

00:34:37 --> 00:34:47
well ok so as I mentioned you take these

00:34:44 --> 00:34:50
combos in your networks chop off the

00:34:46 --> 00:34:53
final layer in order to apply to a

00:34:49 --> 00:34:54
particular domain and that is what we'll

00:34:52 --> 00:34:56
do with fully convolutional neural

00:34:53 --> 00:35:02
networks the ones that we task to

00:34:55 --> 00:35:04
segment the image at a pixel level as a

00:35:01 --> 00:35:08
reminder these networks through the

00:35:03 --> 00:35:12
convolutional process are really

00:35:07 --> 00:35:14
producing a heat map different parts of

00:35:11 --> 00:35:16
the network are getting excited based on

00:35:13 --> 00:35:18
the different aspects of the image and

00:35:15 --> 00:35:20
so it can be used to do the localization

00:35:17 --> 00:35:24
of detecting not just classifying the

00:35:19 --> 00:35:28
image but localizing the object and they

00:35:23 --> 00:35:30
could do so at a pixel level so the

00:35:27 --> 00:35:33
convolutional layers are doing the

00:35:29 --> 00:35:37
ncoding process they're taking the rich

00:35:32 --> 00:35:40
raw sensory information in the image and

00:35:36 --> 00:35:43
encoding them into an interpretable set

00:35:39 --> 00:35:45
of features representation that can then

00:35:42 --> 00:35:46
be used for classification but we can

00:35:44 --> 00:35:49
also then use it

00:35:45 --> 00:35:52
kotor up sample that information and

00:35:48 --> 00:35:53
produce a map like this fully

00:35:51 --> 00:35:56
convolutional neural network

00:35:52 --> 00:35:59
segmentation semantic scene segmentation

00:35:55 --> 00:36:01
image segmentation the goal is to as

00:35:58 --> 00:36:04
opposed to classify the entire image you

00:36:00 --> 00:36:06
classify every single pixel its pixel

00:36:03 --> 00:36:09
evel segmentation you color every

00:36:05 --> 00:36:11
single pixel with what that pixel what

00:36:08 --> 00:36:16
object that pixel belongs to in this 2d

00:36:10 --> 00:36:20
space of the image the 2d projection the

00:36:15 --> 00:36:22
in the image of a 3-dimensional world so

00:36:19 --> 00:36:28
the thing is there's been a lot of

00:36:21 --> 00:36:29
advancement in the last three years but

00:36:27 --> 00:36:32
it's still an incredibly difficult

00:36:28 --> 00:36:37
problem if you if you think if you think

00:36:31 --> 00:36:41
about the amount of data that's used for

00:36:36 --> 00:36:44
training and the task of pixel level of

00:36:40 --> 00:36:47
megapixels here of millions of pixels

00:36:43 --> 00:36:48
that are tasked with having a scientist

00:36:46 --> 00:36:53
single label it's an extremely difficult

00:36:47 --> 00:36:55
problem why is this interesting

00:36:52 --> 00:36:58
important problem to try to solve as

00:36:54 --> 00:37:01
opposed to bounding boxes around cats

00:36:57 --> 00:37:04
well it's whenever precise boundaries of

00:37:00 --> 00:37:06
objects are important certainly medical

00:37:03 --> 00:37:08
applications when looking at imaging and

00:37:05 --> 00:37:14
etecting in particular for example

00:37:07 --> 00:37:16
detecting tumors in the in in medical

00:37:13 --> 00:37:23
imaging of different different organs

00:37:15 --> 00:37:25
and in driving in robotics when objects

00:37:22 --> 00:37:27
are involved it's a done scene of all

00:37:24 --> 00:37:30
those vehicles pedestrians cyclists we

00:37:26 --> 00:37:32
need to be able to not just have a loose

00:37:29 --> 00:37:34
stimate of where objects are we need to

00:37:31 --> 00:37:38
be able to have the exact boundaries and

00:37:33 --> 00:37:40
then potentially through data fusion

00:37:37 --> 00:37:42
fusing sensors together

00:37:39 --> 00:37:45
fusing this rich textural information

00:37:41 --> 00:37:47
about pedestrians cyclists and vehicles

00:37:44 --> 00:37:49
to lidar data that's providing us the

00:37:46 --> 00:37:51
three-dimensional map of the world or

00:37:48 --> 00:37:53
have both the semantic meaning of the

00:37:50 --> 00:37:56
different objects and their exact

00:37:52 --> 00:37:56
hree-dimensional location

00:37:58 --> 00:38:06
a lot of this work successfully a lot of

00:38:03 --> 00:38:08
the work in the semantic segmentation

00:38:05 --> 00:38:11
started with fully convolutional

00:38:07 --> 00:38:13
networks for semantic segmentation paper

00:38:10 --> 00:38:15
FCN that's where the name of FCN came

00:38:12 --> 00:38:18
from in november 2014

00:38:14 --> 00:38:20
now go through a few papers here to give

00:38:17 --> 00:38:24
you some intuition where the field is

00:38:19 --> 00:38:28
gone and how that takes us to seg fuse

00:38:23 --> 00:38:30
the segmentation competition so FCM

00:38:27 --> 00:38:32
repurposed the image net pre-trained

00:38:29 --> 00:38:35
nets the nets that were trained to

00:38:31 --> 00:38:38
classify what's in an image the entire

00:38:34 --> 00:38:42
image and chopped off the fully

00:38:37 --> 00:38:44
connected layers and then added decoder

00:38:41 --> 00:38:50
parts that that up sample there the

00:38:43 --> 00:38:53
image to produce a heat map here shown

00:38:49 --> 00:38:56
with a tabby cat a heat map of where the

00:38:52 --> 00:38:59
cat is in the image it's a much slower

00:38:55 --> 00:39:03
much coarser resolution than the input

00:38:58 --> 00:39:06
image 1/8 at best

00:39:02 --> 00:39:11
skip connections to improve coarseness

00:39:05 --> 00:39:13
of up sampling there's a few tricks if

00:39:10 --> 00:39:15
you do the most naive approach the up

00:39:12 --> 00:39:17
sampling is going to be extremely coarse

00:39:14 --> 00:39:20
because that's the whole point of the

00:39:16 --> 00:39:23
neural network the encoding part is you

00:39:19 --> 00:39:26
throw away all the useless data the

00:39:22 --> 00:39:28
YouTube the most essential aspects that

00:39:25 --> 00:39:29
represent that image so you're throwing

00:39:27 --> 00:39:32
away a lot of information that's

00:39:28 --> 00:39:36
necessary to then form a high resolution

00:39:31 --> 00:39:40
image so there's a few tricks where you

00:39:35 --> 00:39:43
skip a few of the final pooling

00:39:39 --> 00:39:46
operations to go in similar way and this

00:39:42 --> 00:39:47
a residual block to go to go to the

00:39:45 --> 00:39:52
output produce higher and higher

00:39:46 --> 00:39:56
esolution heat map at the end segment

00:39:51 --> 00:39:59
in 2015 applied this to the driving

00:39:55 --> 00:40:02
context and really taking it to kitty

00:39:58 --> 00:40:04
data set and have have shown a lot of

00:40:01 --> 00:40:07
interesting results and really explored

00:40:03 --> 00:40:09
the encoder decoder or formulation of

00:40:06 --> 00:40:09
the problem

00:40:09 --> 00:40:15
really solidifying this the place of the

00:40:12 --> 00:40:19
ncoder/decoder framework for the

00:40:14 --> 00:40:21
segmentation task dilated convolution

00:40:18 --> 00:40:23
I'm taking you through a few components

00:40:20 --> 00:40:28
which are critical here to the state of

00:40:22 --> 00:40:31
the art dilated convolutions so the

00:40:27 --> 00:40:34
convolution operation as the pooling

00:40:30 --> 00:40:39
operation reduces resolution

00:40:33 --> 00:40:41
significantly and dilated convolution

00:40:38 --> 00:40:46
has a certain kind of gritting as

00:40:40 --> 00:40:51
visualized there that maintains the

00:40:45 --> 00:40:55
local high resolution textures while

00:40:50 --> 00:40:56
still capturing the spatial window

00:40:54 --> 00:41:00
necessary

00:40:55 --> 00:41:05
it's called dilated convolutional layer

00:40:59 --> 00:41:08
and that's in a 2015 paper proved to be

00:41:04 --> 00:41:16
much better at up sampling a high

00:41:07 --> 00:41:20
resolution image deep lab with a be v1

00:41:15 --> 00:41:24
v2 Navi 3 added conditional random

00:41:19 --> 00:41:26
fields which is the final piece of the

00:41:23 --> 00:41:29
state-of-the-art puzzle here a

00:41:25 --> 00:41:34
lot of the successful networks today

00:41:28 --> 00:41:38
that do segmentation not all do post

00:41:33 --> 00:41:40
process using CRFs conditional random

00:41:37 --> 00:41:42
fields and what they do is they smooth

00:41:39 --> 00:41:44
e segmentation the up sample

00:41:41 --> 00:41:47
segmentation that results from the FCN

00:41:43 --> 00:41:53
by looking at the underlying image

00:41:46 --> 00:41:56
intensities so that's the key aspects of

00:41:52 --> 00:41:57
the successful approaches today you have

00:41:55 --> 00:42:00
the encoder decoder framework of a fully

00:41:56 --> 00:42:01
accomplished in your network it replaces

00:41:59 --> 00:42:04
the fully connected layers with the

00:42:00 --> 00:42:08
convolutional layers deconvolution

00:42:03 --> 00:42:13
layers and as the years progress from

00:42:07 --> 00:42:18
2014 to today as usual than underlying

00:42:12 --> 00:42:21
networks from alex net to vgg net and to

00:42:17 --> 00:42:23
now ResNet have been one of the big

00:42:20 --> 00:42:25
reasons for the improvements of these

00:42:22 --> 00:42:28
to be able to perform the segmentation

00:42:24 --> 00:42:31
so naturally they mirrored the imagenet

00:42:27 --> 00:42:33
challenge performance in adapting these

00:42:30 --> 00:42:35
networks so the state-of-the-art uses

00:42:32 --> 00:42:39
ResNet or similar networks conditional

00:42:34 --> 00:42:43
random fields for smoothing based on the

00:42:38 --> 00:42:46
input image intensities and the dilated

00:42:42 --> 00:42:48
convolution that maintains the

00:42:45 --> 00:42:51
computational cost but increases the

00:42:47 --> 00:42:55
resolution of the up sampling throughout

00:42:50 --> 00:42:58
he intermediate feature Maps and that

00:42:54 --> 00:43:04
akes us to the state of the art that we

00:42:57 --> 00:43:08
used to produce the images to produce

00:43:03 --> 00:43:10
the images for the competition present

00:43:07 --> 00:43:13
hat do you see for dance up sampling

00:43:09 --> 00:43:16
convolution instead of bilinear up

00:43:12 --> 00:43:21
sampling you make the up sampling learn

00:43:15 --> 00:43:24
about you learn the upscaling filters

00:43:20 --> 00:43:27
that's on the bottom that's really the

00:43:23 --> 00:43:29
key part that made it work there should

00:43:26 --> 00:43:32
be a theme here sometimes the the

00:43:28 --> 00:43:34
biggest addition they can be done this

00:43:31 --> 00:43:35
parameter izing one of the aspects of

00:43:33 --> 00:43:38
the network they've taken for granted

00:43:34 --> 00:43:42
letting the network learn that aspect

00:43:37 --> 00:43:44
and the other I'm not sure how important

00:43:41 --> 00:43:47
it is to the success but it's a it's a

00:43:43 --> 00:43:50
cool little addition is a hybrid dilated

00:43:46 --> 00:43:52
convolution as I showed that

00:43:49 --> 00:43:56
visualization where the convolution is

00:43:52 --> 00:43:58
pread apart a little bit in the input

00:43:55 --> 00:44:01
from the input to the output the steps

00:43:57 --> 00:44:03
of that dilated convolution filter when

00:44:00 --> 00:44:07
they're changed it produces a smoother

00:44:02 --> 00:44:10
esult because when it's kept the same

00:44:06 --> 00:44:13
there certain input pixels get a lot

00:44:09 --> 00:44:16
more attention than others so losing

00:44:12 --> 00:44:20
that favoritism is what's achieved by

00:44:15 --> 00:44:22
using a variable different dilation rate

00:44:19 --> 00:44:25
those are the two tricks but really the

00:44:21 --> 00:44:29
biggest one is the parameterization of

00:44:24 --> 00:44:30
the upscaling filters okay so that's

00:44:28 --> 00:44:32
what we're that's what we used to

00:44:29 --> 00:44:34
generate that data and that's what we

00:44:31 --> 00:44:36
provides you the code with if you're

00:44:33 --> 00:44:39
interested in competing in psyche views

00:44:35 --> 00:44:40
the other aspect here that everything

00:44:38 --> 00:44:44
we've talked about from the

00:44:39 --> 00:44:47
classification to the segmentation to

00:44:43 --> 00:44:50
making sense of images is it there the

00:44:46 --> 00:44:54
information about time the temporal

00:44:49 --> 00:44:57
dynamics of the scene is thrown away and

00:44:53 --> 00:44:59
for the driving context of the robotics

00:44:56 --> 00:45:01
contest and what we'd like to do with

00:44:58 --> 00:45:03
psyche fuse for the segmentation

00:45:00 --> 00:45:05
dynamics scene segmentation context of

00:45:02 --> 00:45:07
when you try to interpret what's going

00:45:04 --> 00:45:13
on in the scene over time and use that

00:45:06 --> 00:45:15
information time is essential thus the

00:45:12 --> 00:45:19
movement of pixels is essential through

00:45:14 --> 00:45:24
time that that understanding how those

00:45:18 --> 00:45:26
objects move in a 3d space through the

00:45:23 --> 00:45:29
2d projection of an image it's

00:45:25 --> 00:45:33
fascinating and us there's a lot of set

00:45:28 --> 00:45:38
of open problems there so flow is what's

00:45:32 --> 00:45:40
very helpful to as a starting point to

00:45:37 --> 00:45:45
help us understand how these pixels move

00:45:39 --> 00:45:50
flow optical flow dense optical flow is

00:45:44 --> 00:45:52
the computation that our best of a best

00:45:49 --> 00:45:58
approximation of where each pixel in

00:45:51 --> 00:46:01
image one and moved in the in

00:45:57 --> 00:46:04
temporarily following image after that

00:46:00 --> 00:46:07
here's two images in 30 frames a second

00:46:03 --> 00:46:10
there's one image at time zero the other

00:46:06 --> 00:46:12
is 33.3 milliseconds later and the

00:46:09 --> 00:46:15
idents optical flow is our best estimate

00:46:11 --> 00:46:18
of how each pixel in the input image

00:46:14 --> 00:46:21
moved to in the output image the optical

00:46:17 --> 00:46:23
flow for every pixel produces a

00:46:20 --> 00:46:25
direction of where we think that pixel

00:46:22 --> 00:46:28
moved and the magnitude of how far moved

00:46:24 --> 00:46:31
that allows us to take information that

00:46:27 --> 00:46:35
we detected about the first frame and

00:46:30 --> 00:46:38
try to propagate it forward this is the

00:46:34 --> 00:46:40
competition it's to try to segment an

00:46:37 --> 00:46:47
image and propagate that information

00:46:39 --> 00:46:49
forward for manual annotation of a

00:46:46 --> 00:46:51
image so this kind of coloring book

00:46:48 --> 00:46:54
annotation where you color every single

00:46:50 --> 00:47:00
pixel in the state-of-the-art dataset

00:46:53 --> 00:47:03
for driving cityscapes that it takes 1.5

00:46:59 --> 00:47:05
ninth and 1.5 hours 90 minutes to do

00:47:02 --> 00:47:09
that coloring that's 90 minutes per

00:47:04 --> 00:47:12
image that's extremely long time that's

00:47:08 --> 00:47:14
why there doesn't exist today dataset

00:47:11 --> 00:47:18
and in this class we're going to create

00:47:13 --> 00:47:23
one of segmentation of these images

00:47:17 --> 00:47:26
through time through video so long

00:47:22 --> 00:47:29
videos where every single frame is fully

00:47:25 --> 00:47:33
segmented that's still an open problem

00:47:28 --> 00:47:38
that we need to solve flows a piece of

00:47:32 --> 00:47:40
that and we also provide you the this

00:47:37 --> 00:47:47
computer state-of-the-art flow using

00:47:39 --> 00:47:51
flow net 2.0 so flow net 1.0 in May 2015

00:47:46 --> 00:47:54
used neural networks to learn the

00:47:50 --> 00:47:56
optical flow the dense optical flow and

00:47:53 --> 00:47:59
it did so with two kinds of

00:47:55 --> 00:48:01
architectures flow net s flowing that

00:47:58 --> 00:48:04
simple and flow net core flow net see

00:48:00 --> 00:48:07
the simple one is simply taking the two

00:48:03 --> 00:48:09
images so what's what's the task here

00:48:06 --> 00:48:11
there's two images and you you want to

00:48:08 --> 00:48:13
produce from those two images they

00:48:10 --> 00:48:16
follow each other in time thirty-three

00:48:12 --> 00:48:18
point three milliseconds apart and your

00:48:15 --> 00:48:20
task is the output to produce the dense

00:48:17 --> 00:48:22
optical flow so for the simple

00:48:19 --> 00:48:25
architecture you just stack them

00:48:21 --> 00:48:27
together each are RGB so it produces a

00:48:24 --> 00:48:29
six channel input to the network there's

00:48:26 --> 00:48:32
a lot of convolution and finally it's

00:48:28 --> 00:48:34
the the same kind of process as the

00:48:31 --> 00:48:36
fully convolution your networks to

00:48:33 --> 00:48:40
produce the optical flow then there is

00:48:35 --> 00:48:43
flow net correlation architecture where

00:48:39 --> 00:48:45
you perform some convolution separately

00:48:42 --> 00:48:50
before using a correlation layer to

00:48:44 --> 00:48:54
combine the feature Maps both

00:48:49 --> 00:48:57
effective in different data sets and

00:48:53 --> 00:49:02
ifferent applications so flow net 2.0

00:48:56 --> 00:49:05
in December 2016 is one of the

00:49:01 --> 00:49:07
state-of-the-art frameworks code bases

00:49:04 --> 00:49:10
that we used to generate the data all

00:49:06 --> 00:49:13
show combines the flow net Assam flow

00:49:09 --> 00:49:16
net C and improves over the initial flow

00:49:12 --> 00:49:19
net producing a smoother flow field

00:49:15 --> 00:49:22
preserves the fine motion detail along

00:49:18 --> 00:49:25
the edges of the objects and it runs

00:49:21 --> 00:49:27
extremely efficiently depending on the

00:49:24 --> 00:49:30
architecture there's a few variants

00:49:26 --> 00:49:34
either eight to a hundred forty frames a

00:49:29 --> 00:49:36
second and the process there is

00:49:33 --> 00:49:38
essentially one that's common across

00:49:35 --> 00:49:41
various applications deep learning is

00:49:37 --> 00:49:46
tacking these networks together the

00:49:40 --> 00:49:49
very interesting aspect here that we're

00:49:46 --> 00:49:52
still exploring and again applicable in

00:49:48 --> 00:49:54
all of deep learning in this case it

00:49:51 --> 00:49:58
seemed that there was a strong effect in

00:49:53 --> 00:49:59
taking sparse small multiple data set

00:49:57 --> 00:50:02
and doing the training the order of

00:49:58 --> 00:50:05
which those data sets were used for the

00:50:01 --> 00:50:07
training process mattered a lot that's

00:50:04 --> 00:50:07
very interesting

00:50:07 --> 00:50:14
so using flow net 2.0 here's the data

00:50:11 --> 00:50:17
set we're making available for psych

00:50:13 --> 00:50:20
fuse the competition cars that mit.edu

00:50:16 --> 00:50:25
slash psych fuse first the original

00:50:19 --> 00:50:33
video us driving in high-definition

00:50:24 --> 00:50:38
1080p and a 8k 360 video original video

00:50:32 --> 00:50:38
driving around Cambridge

00:50:37 --> 00:50:46
we're providing the ground truth for a

00:50:41 --> 00:50:49
training set for that training set for

00:50:45 --> 00:50:51
every single frame 30 frames a second

00:50:48 --> 00:50:54
we're providing the segmentation frame

00:50:50 --> 00:50:58
to frame to frame segmented on

00:50:53 --> 00:51:02
Mechanical Turk we're also providing the

00:50:57 --> 00:51:03
output of the network that I mentioned

00:51:01 --> 00:51:06
the state of their our segmentation

00:51:02 --> 00:51:11
etwork that's pretty damn close to the

00:51:05 --> 00:51:16
ground truth but still not and our task

00:51:10 --> 00:51:18
is this is the interesting thing is our

00:51:15 --> 00:51:21
task is to take the output of this

00:51:17 --> 00:51:24
network well there's two options one is

00:51:20 --> 00:51:28
to take the output of this network and

00:51:23 --> 00:51:31
use use other networks to help you

00:51:27 --> 00:51:34
propagate the information better so what

00:51:30 --> 00:51:38
his segmentation the output of this

00:51:33 --> 00:51:40
network does is it only takes a frame by

00:51:37 --> 00:51:42
frame it's not using the

00:51:39 --> 00:51:44
temporal information at all so the

00:51:41 --> 00:51:47
question is can we figure out a way can

00:51:43 --> 00:51:49
we figure out tricks to use temporal

00:51:46 --> 00:51:54
information to improve this segmentation

00:51:48 --> 00:51:54
so it looks more like this segmentation

00:51:54 --> 00:51:58
and we're also

00:51:56 --> 00:52:01
providing the optical flow from frame to

00:51:57 --> 00:52:04
frame so the optical flow based

00:52:00 --> 00:52:11
on flowing at 2.00 of how each of the

00:52:03 --> 00:52:15
pixels moved okay and that forms a seg

00:52:10 --> 00:52:19
fuse competition 10,000 images and the

00:52:14 --> 00:52:24
task is to submit code we have starter

00:52:18 --> 00:52:27
code in Python and on github to take in

00:52:23 --> 00:52:29
the original video take in for the

00:52:26 --> 00:52:31
training set the ground truth the

00:52:28 --> 00:52:33
segmentation from the state-of-the-art

00:52:30 --> 00:52:35
segmentation Network the optical flow

00:52:32 --> 00:52:39
from the state-of-the-art optical flow

00:52:34 --> 00:52:41
Network and taking that together to

00:52:38 --> 00:52:43
improve the the stuff on the bottom left

00:52:40 --> 00:52:48
he segmentation to try to achieve the

00:52:43 --> 00:52:51
ground truth and on the top right okay

00:52:47 --> 00:52:57
with that I'd like to thank you tomorrow

00:52:50 --> 00:53:00
at 1 p.m. is way mo in Stata 32 one two

00:52:56 --> 00:53:02
three the next lecture next week will be

00:52:59 --> 00:53:04
on deep learning for a sense in the

00:53:01 --> 00:53:06
human understanding the human and we

00:53:03 --> 00:53:09
will release online only lecture on

00:53:05 --> 00:53:12
capsule networks and Gans general

00:53:08 --> 00:53:15
adversarial networks thank you very much

00:53:11 --> 00:53:15
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
