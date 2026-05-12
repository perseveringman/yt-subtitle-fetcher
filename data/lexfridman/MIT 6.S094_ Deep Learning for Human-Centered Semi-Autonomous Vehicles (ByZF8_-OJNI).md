---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "ByZF8_-OJNI"
title: "MIT 6.S094: Deep Learning for Human-Centered Semi-Autonomous Vehicles"
video_url: "https://www.youtube.com/watch?v=ByZF8_-OJNI"
thumbnail_url: "https://i.ytimg.com/vi/ByZF8_-OJNI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=ByZF8_-OJNI"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2017-02-18T22:57:47.000Z"
upload_date: "2017-02-18"
duration_seconds: 2073
duration_human: "34:33"
view_count: 42295
like_count: 409
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:22:17.866Z"
---

# MIT 6.S094: Deep Learning for Human-Centered Semi-Autonomous Vehicles

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=ByZF8_-OJNI
- video_id: ByZF8_-OJNI
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2017-02-18T22:57:47.000Z
- upload_date: 2017-02-18
- duration: 34:33
- view_count: 42295
- like_count: 409
- has_subtitle: true
- language: en
- availability: public
- tags: mit, deep learning, self-driving cars, driver state, gaze classification, drowsiness detection, emotion recognition, game of life, deeptraffic
- categories: Science & Technology

## Description

This is lecture 5 of course 6.S094: Deep Learning for Self-Driving Cars taught in Winter 2017.

INFO:
Slides: http://bit.ly/2HcHq6O
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

00:00:02 --> 00:00:10
The human side of AI, how do we turn this camera

00:00:09 --> 00:00:12
back in on the human,

00:00:12 --> 00:00:15
we are talking about perception,

00:00:14 --> 00:00:21
how to detect cats and dogs, pedestrians lanes,

00:00:20 --> 00:00:25
how to steer a vehicle based on the external environment,

00:00:24 --> 00:00:30
the thing that's really fascinating and severely understudied,

00:00:30 --> 00:00:35
is the human side, we talked about the Tesla,

00:00:34 --> 00:00:40
we have cameras in 17 Tesla's driving around Cambridge

00:00:40 --> 00:00:46
because Tesla is one of the only vehicles allowing you

00:00:46 --> 00:00:53
to experience in a real way, on the road, the interaction between the human

00:00:52 --> 00:00:55
d the Machine,

00:00:55 --> 00:00:58
the thing that we don't have,

00:00:57 --> 00:01:03
that deep learning needs on the human side of

00:01:02 --> 00:01:06
semi-autonomous vehicles and fully-autonomous vehicles

00:01:05 --> 00:01:11
is video of drivers, that's what we're collecting,

00:01:10 --> 00:01:15
that's what my work is in, is looking at billions

00:01:14 --> 00:01:19
of video frames, of human beings driving

00:01:19 --> 00:01:22
60 miles an hour plus on the highway

00:01:22 --> 00:01:25
in their semi-autonomous Tesla,

00:01:25 --> 00:01:29
what are the things that we want to know about the human?

00:01:31 --> 00:01:38
If we were a deep learning therapist, we’d try to break apart

00:01:37 --> 00:01:41
he different things we can detect from this raw set of pixels,

00:01:41 --> 00:01:44
we can look here, from the green to red

00:01:43 --> 00:01:46
is a different detection problem,

00:01:45 --> 00:01:48
a different computer vision detection problem

00:01:47 --> 00:01:52
green means it's less challenging,

00:01:52 --> 00:01:57
it's feasible, even under poor lighting conditions,

00:01:56 --> 00:02:02
variable pose, noisy environment, poor resolution,

00:02:02 --> 00:02:06
red means it's really hard no matter what you do,

00:02:06 --> 00:02:10
that's starting on the left with face detection body pose,

00:02:10 --> 00:02:13
one of the best studied and one of the easier

00:02:12 --> 00:02:18
computer vision problems, we have huge datasets for these,

00:02:17 --> 00:02:22
then there is micro saccades, the slight tremors of the eye

00:02:21 --> 00:02:27
that happen at a rate of a thousand times a second.

00:02:28 --> 00:02:31
All right let's look at—

00:02:31 --> 00:02:35
First, why do we even care

00:02:35 --> 00:02:37
about the human in the car?

00:02:37 --> 00:02:43
One is trust, this trust part is a— If you think about it,

00:02:43 --> 00:02:47
to build trust the car needs to have

00:02:46 --> 00:02:52
some awareness of the biological thing

00:02:51 --> 00:02:54
it's carrying inside, the human inside,

00:02:53 --> 00:02:56
you assume the car knows about you,

00:02:55 --> 00:02:58
because you're sitting there controlling it,

00:02:57 --> 00:03:02
but if you think about it, almost every single car

00:03:01 --> 00:03:04
on the road today, has no sensors

00:03:03 --> 00:03:07
with which it's perceiving you, it knows, some cars

00:03:06 --> 00:03:10
have a pressure sensor on the steering wheel

00:03:09 --> 00:03:13
and a pressure sensor or some kind of sensor

00:03:12 --> 00:03:16
detecting that you're sitting in the seat,

00:03:15 --> 00:03:18
that's the only thing it knows about you,

00:03:17 --> 00:03:22
that's it, so how is the car supposed to—

00:03:22 --> 00:03:26
this same car is driving 70 miles an hour,

00:03:25 --> 00:03:29
on the highway, autonomously, how is it supposed

00:03:28 --> 00:03:32
to build trust with you if it doesn't perceive you?

00:03:31 --> 00:03:34
That's one of the critical things here,

00:03:34 --> 00:03:37
so if I'm constantly advocating something,

00:03:36 --> 00:03:40
is that we should have a driver facing camera

00:03:39 --> 00:03:41
in every car,

00:03:40 --> 00:03:44
despite the privacy concerns,

00:03:43 --> 00:03:47
you have a camera on your phone and you don't have as much

00:03:46 --> 00:03:52
of a privacy concern there, but despite the privacy concerns,

00:03:51 --> 00:03:58
the safety benefits are huge, the trust benefits are huge.

00:03:59 --> 00:04:04
Let's start with the easy one, detecting body pose,

00:04:04 --> 00:04:06
why do we care?

00:04:05 --> 00:04:09
There is a seatbelt design,

00:04:09 --> 00:04:11
there are these dummies,

00:04:10 --> 00:04:14
crash-test dummies, which we can use

00:04:13 --> 00:04:19
to design the passive safety systems of our cars,

00:04:19 --> 00:04:22
and they make certain assumptions about body shapes,

00:04:21 --> 00:04:27
male, female, child, body shapes, but they also make assumptions

00:04:26 --> 00:04:30
about the position of your body in the seat,

00:04:29 --> 00:04:35
they have the optimal position, the position they assume you take,

00:04:34 --> 00:04:41
the reality is, in a Tesla, when the car is driving itself,

00:04:40 --> 00:04:45
the variability, if you remember the deformable [unintelligible 00:04:44]

00:04:44 --> 00:04:48
you start doing a little bit more of that, you start to

00:04:47 --> 00:04:52
reach back in the back seat, in your purse, your bag,

00:04:51 --> 00:04:55
for your cell phone, these kinds of things,

00:04:54 --> 00:04:59
that's when the crashes happen, we to know how often that happens,

00:04:58 --> 00:05:02
the car needs to know that you're in that position,

00:05:01 --> 00:05:06
that's critical for that very serious moment

00:05:05 --> 00:05:08
when the actual crash happens,

00:05:09 --> 00:05:11
how do you do?

00:05:10 --> 00:05:16
This is deep learning class, this is deep learning to the rescue,

00:05:16 --> 00:05:19
whenever you have these kinds of tasks,

00:05:18 --> 00:05:22
of detecting for example body poses,

00:05:21 --> 00:05:25
you're detecting points of the shoulders, points of the head,

00:05:24 --> 00:05:28
five-ten points along the arms, the skeleton.

00:05:29 --> 00:05:31
How do you do that?

00:05:30 --> 00:05:35
You have a CNN, convolutional neural network,

00:05:34 --> 00:05:38
that takes its input image and takes an output,

00:05:37 --> 00:05:41
it's a regressor, it gives an XY position

00:05:40 --> 00:05:44
of whatever you're looking for, the left shoulder, right shoulder,

00:05:44 --> 00:05:47
then you have a cascade of regressors

00:05:46 --> 00:05:49
they give you all of these points,

00:05:48 --> 00:05:51
they give you the shoulders, the arms and so on,

00:05:51 --> 00:05:54
then you have— through time on

00:05:53 --> 00:05:57
every single frame you make that prediction

00:05:57 --> 00:06:00
and then you optimize,

00:06:02 --> 00:06:05
you can make certain assumptions about physics,

00:06:04 --> 00:06:09
your arm can't be in this place in one frame and then the next frame

00:06:08 --> 00:06:11
be over here, it moves smoothly

00:06:10 --> 00:06:14
through space so under those constraints

00:06:13 --> 00:06:16
you can then minimize the error--

00:06:17 --> 00:06:20
the temporal error

00:06:19 --> 00:06:24
from frame to frame or you can just dump all the frames,

00:06:23 --> 00:06:27
as if there are different channels like RGB is three channels,

00:06:27 --> 00:06:30
you can think of those channels as in time,

00:06:29 --> 00:06:32
you can dump all those frames together,

00:06:31 --> 00:06:35
and that's what I call 3D convolutional neural networks,

00:06:34 --> 00:06:38
you've dumped them all together and then you estimate

00:06:37 --> 00:06:41
the body pose in all the frames at once.

00:06:42 --> 00:06:46
There are some data sets for sports

00:06:45 --> 00:06:50
and we're building our own— I don't know who that guy is—

00:06:51 --> 00:06:58
Let's fly through this a little bit, so what's called gaze classification,

00:06:57 --> 00:07:01
gaze is another word for glance,

00:07:01 --> 00:07:04
it's a classification problem,

00:07:04 --> 00:07:08
here's one of the TAs for this class,

00:07:08 --> 00:07:12
Not here because he's married, he had to be home,

00:07:12 --> 00:07:16
I know were his priorities are at, this is on camera,

00:07:15 --> 00:07:18
he should be here, [chuckles]

00:07:17 --> 00:07:19
There's five cameras,

00:07:18 --> 00:07:22
this is why we're recording in the Tesla. This is a Tesla vehicle,

00:07:22 --> 00:07:26
in the bottom right, there's a blue icon

00:07:25 --> 00:07:30
that lights up automatically detected if it's operating under autopilot,

00:07:29 --> 00:07:32
that means the car is currently driving itself,

00:07:31 --> 00:07:34
there's five cameras one on the forward roadway,

00:07:33 --> 00:07:37
one on the instrument cluster, one on the center stack,

00:07:36 --> 00:07:38
steering wheel, his face,

00:07:37 --> 00:07:42
then it's a classification problem, you dump the raw pixels

00:07:41 --> 00:07:47
into a convolutional neural network, have six classes forward roadway,

00:07:46 --> 00:07:50
you're predicting where the person is looking,

00:07:49 --> 00:07:52
forward roadway, left, right,

00:07:52 --> 00:07:55
center stack, instrument cluster,

00:07:54 --> 00:07:59
rearview mirror, and you give millions of frames

00:07:58 --> 00:08:01
for every class, simple.

00:08:02 --> 00:08:07
And It does incredibly well at predicting

00:08:06 --> 00:08:12
where the driver is looking, the process is the same for majority

00:08:11 --> 00:08:15
of the driver state problems that have to do with the face,

00:08:14 --> 00:08:20
the face has so much information, where are you looking, emotion,

00:08:19 --> 00:08:24
drowsiness, different degrees of frustration,

00:08:23 --> 00:08:26
I'll fly through those as well, but the process is the same,

00:08:25 --> 00:08:30
there's some pre-processing, this is in the wild data,

00:08:29 --> 00:08:33
there's a lot of crazy light going on, there's noises,

00:08:32 --> 00:08:36
vibration from the vehicle, so first you have to—

00:08:35 --> 00:08:40
video stabilization you have to remove all that vibration,

00:08:39 --> 00:08:44
all that noise, as best as you can, there's a lot of algorithms,

00:08:43 --> 00:08:46
non-neural network algorithms,

00:08:47 --> 00:08:49
boring but they work

00:08:48 --> 00:08:52
for removing the noise, removing the effects of

00:08:52 --> 00:08:56
sudden light variations and vibrations of the vehicle,

00:08:55 --> 00:08:59
there's the automated calibration, so you have to estimate

00:08:58 --> 00:09:02
the frame of the camera, the position of the camera,

00:09:01 --> 00:09:06
and estimate the identity of the person you're looking at.

00:09:06 --> 00:09:10
The more you can specialize the network to the identity of the person

00:09:09 --> 00:09:13
and the identity of the car the person is riding in,

00:09:12 --> 00:09:17
the better the performance for the different driver state classification.

00:09:16 --> 00:09:20
So you personalize the network, you have a background model

00:09:19 --> 00:09:23
that works on everyorne and you specialize each individual,

00:09:22 --> 00:09:24
this is transfer learning,

00:09:23 --> 00:09:27
you specialize each individual network to that one individual.

00:09:27 --> 00:09:31
There is a face frontalization,

00:09:30 --> 00:09:35
fancy name for the fact that no matter where they're looking,

00:09:34 --> 00:09:37
you want to transfer that face so the eyes,

00:09:36 --> 00:09:40
nose are the exact same position in the image,

00:09:39 --> 00:09:42
that way if you want to look at the eyes

00:09:42 --> 00:09:46
and you want to study the subtle movement of the eyes

00:09:45 --> 00:09:47
the subtle blinking,

00:09:47 --> 00:09:51
the dynamics of the eyelid, the velocity of the eyelid,

00:09:50 --> 00:09:54
it's always in the same place so you can really focus in

00:09:53 --> 00:09:58
remove all effects of any other motion of the head,

00:09:58 --> 00:10:02
and then you just— it's the beauty of deep learning,

00:10:01 --> 00:10:07
there is some pre-processing, because this is real-world data,

00:10:06 --> 00:10:10
but you just dump the raw pixels in,

00:10:09 --> 00:10:13
you dump the raw pixels in and predict whatever you need.

00:10:12 --> 00:10:14
What do you need?

00:10:13 --> 00:10:20
One is emotion, You can have— I had a study where people

00:10:19 --> 00:10:25
used a crappy and a good voice based navigation system,

00:10:24 --> 00:10:27
so the crappy one got them really frustrated,

00:10:26 --> 00:10:30
and they self-reported it as the frustrating experience or not

00:10:29 --> 00:10:33
on scale one to 10, that gives us ground truth,

00:10:32 --> 00:10:35
a bunch of people to used this system,

00:10:36 --> 00:10:39
they put themselves as frustrated or not,

00:10:38 --> 00:10:40
so then we can predict,

00:10:39 --> 00:10:43
we can train a Convolutional neural network to predict

00:10:42 --> 00:10:46
is this person frustrated or not, I think we've seen a video of that,

00:10:45 --> 00:10:50
turns out smiling is a strong indication of frustration,

00:10:49 --> 00:10:53
you can also predict drowsiness in this way,

00:10:53 --> 00:10:57
gaze estimation in this way, cognitive load,

00:10:56 --> 00:11:00
I'll briefly look at that, the process is all the same,

00:10:59 --> 00:11:03
you detect the face, you find the landmark points in the face,

00:11:02 --> 00:11:06
for the face alignment, face frontalization,

00:11:06 --> 00:11:11
and then you dump the raw pixels in for classification, step five.

00:11:10 --> 00:11:12
You can use SVM's there

00:11:11 --> 00:11:14
or you can use what everyone uses now,

00:11:13 --> 00:11:16
convolutional neural networks.

00:11:18 --> 00:11:22
This is the one part where CNN's still struggle to compete,

00:11:22 --> 00:11:25
is the alignment problem,

00:11:25 --> 00:11:29
this is why I talked about the Cascade regressors,

00:11:28 --> 00:11:38
is finding the landmarks on the eyebrows, the nose,

00:11:37 --> 00:11:43
the jawline, the mouth, there are certain constraints there,

00:11:42 --> 00:11:48
so algorithms that can utilize those constraints effectively

00:11:47 --> 00:11:51
can often perform better than end-to-end regressors

00:11:50 --> 00:11:55
that just don't have any concept of what a face is shaped like.

00:11:55 --> 00:11:59
There are huge data sets and we're a part

00:11:59 --> 00:12:02
of the awesome community that's building those data sets

00:12:02 --> 00:12:04
for face alignment.

00:12:04 --> 00:12:08
This is the TA in its younger form,

00:12:10 --> 00:12:13
this is live in the car,

00:12:12 --> 00:12:17
the real time system predicting where they're looking,

00:12:18 --> 00:12:25
this is taking slow steps towards the exciting direction

00:12:24 --> 00:12:28
that machine learning is headed, which is unsupervised learning,

00:12:28 --> 00:12:32
the less you have to have humans look to the data

00:12:31 --> 00:12:34
nd annotate that data,

00:12:33 --> 00:12:38
the more power these machine learning algorithms get,

00:12:39 --> 00:12:42
currently supervised learning is what's needed,

00:12:41 --> 00:12:46
you need human beings to label a cat and label a dog,

00:12:46 --> 00:12:50
if you can only have a human being label 1%,

00:12:50 --> 00:12:55
one tenth of a percent of a data set, only the hard cases,

00:12:54 --> 00:12:57
so the machine can come to the human and be like,

00:12:56 --> 00:13:00
I don't know what I'm looking at in these pictures,

00:13:00 --> 00:13:03
because of the partial light occlusions,

00:13:02 --> 00:13:06
we're not good at dealing with occlusions,

00:13:05 --> 00:13:08
whether it's your own arm or because of light conditions,

00:13:07 --> 00:13:10
we're not good with

00:13:10 --> 00:13:13
crazy light drowning out the image,

00:13:13 --> 00:13:16
this is what Google self-driving cars struggle with

00:13:15 --> 00:13:18
when they're trying to use their vision sensors,

00:13:17 --> 00:13:19
moving out of frame,

00:13:20 --> 00:13:23
all kinds of occlusion They are really hard

00:13:23 --> 00:13:26
for computer vision algorithms,

00:13:26 --> 00:13:31
and in those cases we want a machine to step in and say--

00:13:30 --> 00:13:35
and pass that image on to the human, be like "help me out with this"

00:13:34 --> 00:13:39
and the other corner case is, in driving for example

00:13:38 --> 00:13:42
90 plus percent of the time all you're doing is

00:13:41 --> 00:13:43
taring forward at the roadway the same way,

00:13:43 --> 00:13:45
that's where the Machine shines,

00:13:44 --> 00:13:49
that's where machine automated annotation shines,

00:13:49 --> 00:13:52
because it's seen that face

00:13:51 --> 00:13:55
for hundreds of millions of frames already,

00:13:54 --> 00:13:56
in that exact position,

00:13:55 --> 00:13:59
so it can do all the hard work of annotation for you,

00:13:58 --> 00:14:01
it's in the transition away from those positions

00:14:00 --> 00:14:03
that it needs a little bit of help,

00:14:02 --> 00:14:07
just to make sure that this person just started looking away

00:14:06 --> 00:14:11
from the road to the rear view, and you bring those points up,

00:14:10 --> 00:14:14
so you're-- there's a— using optical flow,

00:14:13 --> 00:14:18
putting the optical flow in the convolutional neural network,

00:14:18 --> 00:14:22
you use that to predict when something has changed

00:14:21 --> 00:14:26
you bring that to the machine for annotation

00:14:25 --> 00:14:28
all of this is to build a giant—

00:14:28 --> 00:14:33
Billions of frames annotated data set, our ground truth,

00:14:33 --> 00:14:37
on which you train your driver state algorithms,

00:14:37 --> 00:14:41
in this way you can control, on the x-axis

00:14:40 --> 00:14:44
the fraction of frames the human has to annotate,

00:14:43 --> 00:14:48
zero percent on the Left, ten percent on the right,

00:14:47 --> 00:14:52
and then the accuracy trade-off, the more the human annotates,

00:14:51 --> 00:14:54
the higher the accuracy, you approach 100% accuracy,

00:14:54 --> 00:14:56
but you can still do pretty good,

00:14:55 --> 00:15:00
this is for the gaze classification task,

00:15:02 --> 00:15:07
With an 84-- 84 fold to almost towards

00:15:06 --> 00:15:10
the magnitude reduction in human annotation,

00:15:09 --> 00:15:12
this is the future of machine learning,

00:15:12 --> 00:15:16
and hopefully one day no human annotation,

00:15:20 --> 00:15:26
and the result is millions of images like these video frames,

00:15:26 --> 00:15:31
same thing, driver frustration, this is what I was talking about,

00:15:30 --> 00:15:34
the frustrated driver is the one that's on the bottom,

00:15:35 --> 00:15:37
so a lot of movement of the eyebrows

00:15:36 --> 00:15:41
and a lot of smiling, and that's true subject after the subject,

00:15:41 --> 00:15:44
And they're Happy, the satisfied, I don't want to say happy,

00:15:43 --> 00:15:48
the satisfied driver is cold and stoic,

00:15:48 --> 00:15:51
and that's true for subject after subject,

00:15:50 --> 00:15:54
because driving is a boring experience and you want it to stay that way

00:15:53 --> 00:15:55
Yes, question.

00:15:58 --> 00:16:03
Great, great question, they're not--

00:16:03 --> 00:16:06
Absolutely, that's a great question

00:16:06 --> 00:16:11
So these cars owned by MIT, there is somebody in the back—

00:16:18 --> 00:16:20
The comment was—

00:16:19 --> 00:16:24
my emotions then have nothing to do with the driving experience.

00:16:23 --> 00:16:29
Yes, let me continue that comment, your emotions are often—

00:16:29 --> 00:16:33
You're an actor on the stage for others with your emotion,

00:16:32 --> 00:16:36
when you're alone, you might not express emotion,

00:16:35 --> 00:16:40
you're really expressing emotion oftentimes for others,

00:16:39 --> 00:16:42
your frustration is like "What the heck"

00:16:41 --> 00:16:45
that's for the passenger, and that's absolutely right,

00:16:44 --> 00:16:50
so one of the cool things we're doing—

00:16:49 --> 00:16:54
As I said, we now have over a billion video frames in the Tesla,

00:16:53 --> 00:16:57
We're starting to collected huge amounts of data in the Tesla,

00:16:56 --> 00:17:00
emotion is a complex thing,

00:16:59 --> 00:17:01
in this case,

00:17:00 --> 00:17:04
we know the ground truth, how frustrated they were,

00:17:03 --> 00:17:07
in naturalistic data, when it's just people driving around,

00:17:06 --> 00:17:10
we don't know how they're really feeling at the moment,

00:17:09 --> 00:17:14
we're not asking to enter an app "how are you feeling right now?"

00:17:14 --> 00:17:19
but we do know certain things, we know that people sing a lot,

00:17:20 --> 00:17:23
that has to be on paper at some point,

00:17:22 --> 00:17:25
it's awesome, people love singing,

00:17:25 --> 00:17:29
so that doesn't happen in this kind of data,

00:17:28 --> 00:17:30
because there's somebody singing in the car,

00:17:29 --> 00:17:33
and I think the expression of frustration is also the same.

00:17:44 --> 00:17:49
Yes. The question is— or the comment is that

00:17:48 --> 00:17:53
he solo data set is probably going to be very different

00:17:52 --> 00:17:56
from a data set that's not solo, with a passenger,

00:17:55 --> 00:17:58
that's very true, the tricky thing about driving

00:17:58 --> 00:18:01
this is why it's a huge challenge for self-driving cars

00:18:00 --> 00:18:03
for the external facing sensors

00:18:02 --> 00:18:06
and for the internal facing sensors analyzing human behavior,

00:18:05 --> 00:18:12
is 99.9% of driving is the same thing, it's really boring.

00:18:11 --> 00:18:15
So finding the interesting bits is actually pretty complicated,

00:18:14 --> 00:18:19
so that has to do with emotion, that has to do with—

00:18:18 --> 00:18:23
so singing is easy to find, we can track the mouth pretty well,

00:18:22 --> 00:18:25
so when you're talking of singing we can find that,

00:18:24 --> 00:18:28
but how do you find the subtle expressions of emotion?

00:18:27 --> 00:18:32
It's hard, when you're solo.

00:18:32 --> 00:18:39
Cognitive load, that's a fascinating thing,

00:18:38 --> 00:18:43
I mean, similar emotion it's a little more concrete

00:18:43 --> 00:18:48
in a sense that there's good science and ways to measure cognitive load,

00:18:47 --> 00:18:51
cognitive workload, how occupied your mind is,

00:18:51 --> 00:18:54
mental workload is another term used,

00:18:54 --> 00:18:56
the window to the soul,

00:18:55 --> 00:19:00
the cognitive workload soul is the eyes,

00:18:59 --> 00:19:02
so pupil—

00:19:02 --> 00:19:05
first of all the eyes move in two different ways

00:19:04 --> 00:19:08
they move in a lot of ways but two major ways is saccades,

00:19:07 --> 00:19:11
these are these ballistic movements, they jump around whenever

00:19:10 --> 00:19:15
you look around the room, they're actually just jumping around,

00:19:14 --> 00:19:17
when you read the eyes are jumping around,

00:19:18 --> 00:19:22
Like if all of you just follow this bottle with your eyes,

00:19:21 --> 00:19:24
your eyes are actually going to move smoothly,

00:19:23 --> 00:19:26
a smooth pursuit.

00:19:25 --> 00:19:27
Somebody actually told me today,

00:19:26 --> 00:19:31
that probably has to do with our hunting background as animals,

00:19:33 --> 00:19:38
I don't know how that helps, like frogs track flies really well,

00:19:37 --> 00:19:42
so you have to like— Anyway, the point is

00:19:41 --> 00:19:45
there are smooth pursuit movements where the eyes move smoothly,

00:19:45 --> 00:19:49
and those are all indications of certain aspects of cognitive load,

00:19:49 --> 00:19:52
and then there are these very subtle movements,

00:19:51 --> 00:19:54
which are almost imperceptible for computer vision

00:19:53 --> 00:19:59
and these are micro saccades, these are tremors of the eye,

00:20:00 --> 00:20:03
a work from here, from Bill Freeman,

00:20:02 --> 00:20:09
magnifying those subtle movements, these are taken at 500 frames a second.

00:20:12 --> 00:20:15
So cognitive load—

00:20:16 --> 00:20:18
when the pupil,

00:20:17 --> 00:20:19
that black dot in the middle,

00:20:18 --> 00:20:21
in case you don't know what a pupil is,

00:20:20 --> 00:20:23
in the middle of the eye,

00:20:22 --> 00:20:26
when it gets larger that's an indicative of high cognitive load,

00:20:25 --> 00:20:30
but it also gets larger when the light is dim.

00:20:29 --> 00:20:32
So there's this complex interplay,

00:20:31 --> 00:20:34
so we can't rely in the wild outside,

00:20:33 --> 00:20:37
in the car, or just in general outdoors,

00:20:37 --> 00:20:39
using the pupil size,

00:20:38 --> 00:20:41
even though pupil size has been used effectively

00:20:40 --> 00:20:45
in a lab to measure cognitive load, it can't be reliably used in the car,

00:20:45 --> 00:20:50
the same with blinks, when there's a high cognitive load,

00:20:49 --> 00:20:54
your blink rate decreases and your blink duration shortens,

00:20:55 --> 00:20:59
I think I'm just repeating the same thing over and over,

00:20:58 --> 00:21:03
but you can imagine how we can predict cognitive load,

00:21:03 --> 00:21:06
We extract a video of the eye.

00:21:07 --> 00:21:14
Here is the primary eye of the person the system is observing,

00:21:14 --> 00:21:17
happens to be the same TA once again.

00:21:22 --> 00:21:28
We take the sequence of 100-- it's 90 images, that's six seconds,

00:21:27 --> 00:21:31
16 frames a second, 15 frames a second,

00:21:30 --> 00:21:35
we dump that into a 3D convolutional neural network,

00:21:35 --> 00:21:43
that means it's 90 channels, it's 90 frames, grayscale,

00:21:42 --> 00:21:48
and then the prediction is one of three classes of cognitive load,

00:21:47 --> 00:21:52
low cognitive load, medium cognitive load and high cognitive load,

00:21:51 --> 00:21:54
there's ground truth for that, because we have people--

00:21:53 --> 00:21:58
over 500 different people do different tasks

00:21:57 --> 00:22:02
of various cognitive load, and after some frontalization again,

00:22:01 --> 00:22:07
where you see the eyes are traced no matter where the person looking,

00:22:06 --> 00:22:10
the image of the face is transposed in such a way that

00:22:09 --> 00:22:14
he corner of the eyes remain always in the same position,

00:22:13 --> 00:22:19
after the frontalization, we find the eye,

00:22:18 --> 00:22:29
active appearance models, find 39 points of the eyelids, the iris,

00:22:28 --> 00:22:30
and four points on the pupil.

00:22:33 --> 00:22:36
Putting all of that into a 3D CNN model,

00:22:36 --> 00:22:42
they're positioned,eye sequence on the left, 3D CNN model in the middle,

00:22:41 --> 00:22:44
cognitive load prediction on the right.

00:22:43 --> 00:22:49
This code by the way is freely available online.

00:22:50 --> 00:22:53
All you have to do, dump a web-cam

00:22:54 --> 00:22:59
from the video stream, CNN runs faster than real-time,

00:22:58 --> 00:23:01
predicts cognitive load.

00:23:01 --> 00:23:05
Same process as detecting the identity of the face,

00:23:04 --> 00:23:07
same process as detecting where the driver is looking,

00:23:06 --> 00:23:10
same process as detecting emotion

00:23:09 --> 00:23:12
and all of those require very little

00:23:11 --> 00:23:15
hyper parameter tuning on the convolutional neural networks,

00:23:15 --> 00:23:20
they only require huge amounts of data.

00:23:20 --> 00:23:25
Why do we care about detecting what the drivers doing?

00:23:24 --> 00:23:30
I think Eric has mentioned this is--

00:23:30 --> 00:23:35
On the-- Oh man, this is the comeback of the slide,

00:23:35 --> 00:23:37
[laughter]

00:23:39 --> 00:23:43
I was criticized for this being a very cheesy slide,

00:23:43 --> 00:23:51
in the past towards full automation,

00:23:52 --> 00:23:57
we're likely to take gradual steps towards that.

00:23:57 --> 00:24:01
I can't, it's enough of that, this is better—

00:24:02 --> 00:24:10
Especially given that— This is given today,

00:24:09 --> 00:24:15
our new president, this is a pickup truck country,

00:24:18 --> 00:24:21
this is a manually controlled vehicle country,

00:24:20 --> 00:24:24
for quite a little while, we like control

00:24:24 --> 00:24:29
and control being given to somebody else,

00:24:29 --> 00:24:32
to the machine, will be a gradual process,

00:24:31 --> 00:24:35
it's a gradual process of that machine earning trust,

00:24:35 --> 00:24:38
and through that process, the machine,

00:24:38 --> 00:24:41
like the Tesla, like the BMW,

00:24:40 --> 00:24:44
like the Mercedes, the Volvo,

00:24:43 --> 00:24:46
that's now playing with these ideas,

00:24:46 --> 00:24:50
it's going to need to see what the human is doing,

00:24:53 --> 00:24:59
and for that, to see what the human is doing,

00:24:58 --> 00:25:06
we have billions of miles of forward-facing data, what we need,

00:25:05 --> 00:25:10
is billions of miles of driver facing data as well.

00:25:09 --> 00:25:13
We're in the process of collecting that,

00:25:12 --> 00:25:20
this is a pitch for automakers and everybody to buy cars

00:25:19 --> 00:25:23
that have a driver facing camera.

00:25:24 --> 00:25:29
And let me close--

00:25:28 --> 00:25:35
I said we need a lot of data but I think this class has been—

00:25:36 --> 00:25:42
through your own research you'll find that we're in the very early stages

00:25:43 --> 00:25:48
of discovering the power of deep learning,

00:25:49 --> 00:25:55
for example, recently, Jean [?] said

00:25:56 --> 00:26:01
that it seems that the deeper the network,

00:26:01 --> 00:26:07
the better the results in a lot of really important cases,

00:26:07 --> 00:26:11
even though the data is not increasing,

00:26:10 --> 00:26:15
why does the deeper network give better results?

00:26:14 --> 00:26:18
This is a mysterious thing we don't understand,

00:26:17 --> 00:26:21
there's these hundreds of millions of parameters,

00:26:20 --> 00:26:26
from them is emerging some kind of structure,

00:26:25 --> 00:26:29
some kind of representation of the knowledge that we're giving it.

00:26:29 --> 00:26:34
One of my favorite examples of this emergent concept

00:26:33 --> 00:26:36
is the Conway's Game of Life.

00:26:38 --> 00:26:42
For those of you who knows what this is,

00:26:41 --> 00:26:45
will probably criticize me for being as cheesy

00:26:44 --> 00:26:50
as the stairway slide, but I think it's such a simple

00:26:49 --> 00:26:53
and brilliant example of how--

00:26:53 --> 00:26:56
Like a neuron in a neural network

00:26:55 --> 00:26:58
is a really simple computational unit,

00:26:57 --> 00:27:02
and then incredible power emerges when you combine a lot of them

00:27:01 --> 00:27:04
in a network, in the same way,

00:27:04 --> 00:27:08
this is called the cellular automata,

00:27:07 --> 00:27:10
that's a weird pronunciation,

00:27:12 --> 00:27:16
every single cells is operating under a simple rule,

00:27:15 --> 00:27:19
you can think of it as a cell living and dying,

00:27:19 --> 00:27:23
it's filled in black when it's alive

00:27:22 --> 00:27:27
and white when it's dead, if it's alive

00:27:27 --> 00:27:32
and it has two or three neighbors, it survives to the next time,

00:27:32 --> 00:27:35
otherwise it dies,

00:27:35 --> 00:27:42
and if it has exactly three neighbors, and it's dead,

00:27:41 --> 00:27:44
it comes back to life, if it has exactly three neighbors,

00:27:43 --> 00:27:47
that's a simple rule, whatever,

00:27:46 --> 00:27:48
you can just imagine, it's just simple—

00:27:47 --> 00:27:52
All is doing, is operating under this very local process,

00:27:52 --> 00:27:54
same as a neuron.

00:27:55 --> 00:27:57
It's a— or in the way

00:27:56 --> 00:27:59
we're currently training neural networks

00:27:59 --> 00:28:02
and there's this local gradient,

00:28:01 --> 00:28:06
we're optimizing over a local gradient, the same local rules,

00:28:06 --> 00:28:10
and what happens if you run this system,

00:28:10 --> 00:28:15
operating under really local rules, what you get on the right,

00:28:15 --> 00:28:19
it's not— Again, you have to go home,

00:28:19 --> 00:28:24
hopefully no drugs involved, but you have to open up your mind

00:28:24 --> 00:28:26
[chuckles]

00:28:25 --> 00:28:28
and see how amazing that is,

00:28:27 --> 00:28:33
because what happens is, it's a local computational unit,

00:28:32 --> 00:28:36
that knows very little about the world,

00:28:35 --> 00:28:40
but somehow really complex patterns emerge

00:28:39 --> 00:28:45
and we don't understand why, in fact under different rules,

00:28:44 --> 00:28:47
incredible patterns emerge, and it feels like

00:28:46 --> 00:28:52
it's living creatures communicating, when you just watch it,

00:28:51 --> 00:28:56
not these examples, this is the original,

00:28:55 --> 00:28:59
they get complex and interesting, but even in these examples,

00:28:58 --> 00:29:02
these complex geometric patterns that emerge,

00:29:01 --> 00:29:04
it's incredible, we don't understand why,

00:29:03 --> 00:29:06
same with neural networks, we don't understand why,

00:29:05 --> 00:29:10
and we need to in order to see how these networks will be able to reason.

00:29:10 --> 00:29:13
What's next?

00:29:12 --> 00:29:18
I encourage you to read the deep learning book,

00:29:18 --> 00:29:22
it's available online, deeplearningbook.org.

00:29:21 --> 00:29:25
As I mentioned to a few people, you should--

00:29:24 --> 00:29:27
Well, first there's a ton of amazing papers

00:29:26 --> 00:29:29
every day coming out on archive,

00:29:29 --> 00:29:32
I'll put these links up,

00:29:31 --> 00:29:35
but there's a lot of good collections of strong papers,

00:29:34 --> 00:29:39
lists of papers, there is the literally awesome list,

00:29:38 --> 00:29:42
the awesome deep learning papers on GitHub,

00:29:41 --> 00:29:46
it's calling itself awesome, but it happens to be awesome,

00:29:45 --> 00:29:51
there is a lot of blogs, it's just amazing,

00:29:50 --> 00:29:54
that's how I recommend you learn machine learning,

00:29:53 --> 00:29:58
on blogs, and if you're interested

00:29:58 --> 00:30:01
in the application of deep learning in the automotive space,

00:30:01 --> 00:30:04
you can come and do research in our group,

00:30:04 --> 00:30:06
just email me.

00:30:07 --> 00:30:10
Anyway, we have three winners,

00:30:13 --> 00:30:16
Jeffrey Hu, Michael Gump

00:30:17 --> 00:30:21
how do you-- Are you here?

00:30:21 --> 00:30:24
How do you say your name?

00:30:24 --> 00:30:30
No, that's not my name [laughter]

00:30:29 --> 00:30:35
My name is Purna [?]

00:30:36 --> 00:30:38
Oh, I see. [?]

00:30:43 --> 00:30:46
Well, anyway here--

00:30:48 --> 00:30:56
[applause]

00:30:56 --> 00:31:05
He achieved the stunning speed of-- So this is kind of incredible,

00:31:04 --> 00:31:06
I didn't know what kind of speed

00:31:05 --> 00:31:09
we were going to be able to achieve, I thought 73 was unbeatable,

00:31:08 --> 00:31:10
because we played with it for a while

00:31:09 --> 00:31:14
and we couldn't achieve 73, we design a deterministic algorithm

00:31:13 --> 00:31:16
that was able to achieve 74 I believe,

00:31:16 --> 00:31:20
meaning like it's cheating, with the cheating algorithm

00:31:19 --> 00:31:24
that got 74, folks have come up

00:31:24 --> 00:31:28
with algorithms that have done— that had beaten 73

00:31:27 --> 00:31:31
and then 74, so this is really incredible,

00:31:30 --> 00:31:34
and the other two guys— all three of you

00:31:33 --> 00:31:39
get a free term at the Udacity self-driving car engineering degree,

00:31:38 --> 00:31:43
Thanks to those guys for giving that award

00:31:42 --> 00:31:45
and bringing their army of brilliant—

00:31:45 --> 00:31:48
So they have people who are obsessed about

00:31:47 --> 00:31:51
self-driving cars, and we've received

00:31:50 --> 00:31:55
over 2,000 submissions for this competition,

00:31:54 --> 00:31:59
a lot of them from those guys, they're just brilliant,

00:31:58 --> 00:32:04
it's really exciting to have such a big community

00:32:03 --> 00:32:07
of deep learning folks working in this field,

00:32:06 --> 00:32:11
this is for the rest of eternity, we're going to

00:32:10 --> 00:32:13
change this up a little bit, but this is actually

00:32:12 --> 00:32:19
the three neural networks, the three winning neural networks

00:32:18 --> 00:32:21
running side by side, you can see

00:32:20 --> 00:32:25
the number of cars passed there, the first place is on the left,

00:32:25 --> 00:32:29
second place, and third place, and in fact,

00:32:28 --> 00:32:30
the third place it's almost--

00:32:29 --> 00:32:33
right now, second place is winning currently,

00:32:33 --> 00:32:41
but that just tells you the random nature of competition,

00:32:40 --> 00:32:44
sometimes you win, sometimes loose.

00:32:47 --> 00:32:53
The actual evaluation process runs through a lot of iterations

00:32:52 --> 00:32:55
and takes the medium evaluation.

00:32:56 --> 00:33:00
With that, let me thank you guys so much for—

00:32:59 --> 00:33:02
Wait, we have a question—

00:33:01 --> 00:33:05
are the winning networks online?

00:33:05 --> 00:33:07
Yes.

00:33:07 --> 00:33:12
All three guys wrote me a note

00:33:11 --> 00:33:16
about how their networks work, I did not read that note,

00:33:15 --> 00:33:18
[chuckles]

00:33:17 --> 00:33:21
I'll post—This tells you how crazy this has been,

00:33:21 --> 00:33:28
I'll post the winning networks online,

00:33:28 --> 00:33:31
and I encourage you to continue competing

00:33:30 --> 00:33:33
and continue submitting networks.

00:33:32 --> 00:33:37
This will run for a while we're working on a journal paper

00:33:36 --> 00:33:41
for this game.

00:33:41 --> 00:33:44
We're trying to find the optimal solutions.

00:33:44 --> 00:33:49
Okay. This is the first time I've ever taught a class,

00:33:48 --> 00:33:52
and the first time obviously teaching this class,

00:33:51 --> 00:33:56
so thank you so much for being a part of it.

00:33:55 --> 00:34:02
[Applause] Thank you to Eric,

00:34:04 --> 00:34:08
if you didn't get a shirt please come back,

00:34:07 --> 00:34:12
please come down and get a shirt, just write your email on the note,

00:34:11 --> 00:34:16
on the on the index note. Thank you.

<!-- YOUTUBE_TRANSCRIPT_END -->
