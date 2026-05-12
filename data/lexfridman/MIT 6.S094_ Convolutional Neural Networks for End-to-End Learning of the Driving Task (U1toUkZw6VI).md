---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "U1toUkZw6VI"
title: "MIT 6.S094: Convolutional Neural Networks for End-to-End Learning of the Driving Task"
video_url: "https://www.youtube.com/watch?v=U1toUkZw6VI"
thumbnail_url: "https://i.ytimg.com/vi/U1toUkZw6VI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=U1toUkZw6VI"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2017-01-25T19:00:51.000Z"
upload_date: "2017-01-25"
duration_seconds: 4792
duration_human: "1:19:52"
view_count: 244568
like_count: 2920
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:22:37.935Z"
---

# MIT 6.S094: Convolutional Neural Networks for End-to-End Learning of the Driving Task

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=U1toUkZw6VI
- video_id: U1toUkZw6VI
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2017-01-25T19:00:51.000Z
- upload_date: 2017-01-25
- duration: 1:19:52
- view_count: 244568
- like_count: 2920
- has_subtitle: true
- language: en
- availability: public
- tags: mit, deep learning, self-driving cars, convolutional neural networks, deeptesla, deepteslajs, convnetjs
- categories: Science & Technology

## Description

This is lecture 3 of course 6.S094: Deep Learning for Self-Driving Cars taught in Winter 2017. This lecture introduces computer vision, convolutional neural networks, and end-to-end learning of the driving task.

INFO:
Slides: http://bit.ly/2HdXYvf
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

00:00:04 --> 00:00:09
Alright, welcome back everyone. Sound okay? Alright.

00:00:10 --> 00:00:18
So today we will- We talked a little bit about neural networks, started to talk about neural networks yesterday.

00:00:18 --> 00:00:26
Today we'll continue to talk about neural networks that work with images, convolutional neural networks,

00:00:26 --> 00:00:38
and see how those types of networks can help us drive a car. If we have time we'll cover a simple illustrative case study

00:00:38 --> 00:00:42
of detecting traffic lights.

00:00:41 --> 00:00:50
The problem of detecting green, yellow, red. If we can't teach our neural networks to do that, we're in trouble,

00:00:49 --> 00:01:00
but it's a good, clear, illustrative case study of a three-class classification problem. Okay, next there's

00:01:00 --> 00:01:09
DeepTesla here looped over and over in a very short GIF. This is actually running live in a website right now.

00:01:08 --> 00:01:20
We'll show it towards the end of the lecture, this once again just like DeepTraffic is a neural network that learns to

00:01:19 --> 00:01:23
steer a vehicle based on the video of the forward road way.

00:01:22 --> 00:01:28
And once again, doing all of that in the browser using javascript.

00:01:28 --> 00:01:34
So you'll be able to train your own very network to drive using real world data.

00:01:34 --> 00:01:49
I'll explain how. We will also have a tutorial and code. Briefly described today at the end of the lecture,

00:01:48 --> 00:01:53
if there's time how to do the same thing in TensorFlow.

00:01:52 --> 00:02:01
So if you want to build a network that's bigger, deeper and you want to utilize GPUs to train that network,

00:02:00 --> 00:02:07
you want to not do it in your browser, you want to do it offline using TensorFlow

00:02:07 --> 00:02:15
and having a powerful GPU on your computer and we'll explain how to do that. Computer vision.

00:02:14 --> 00:02:23
So we talked about vanilla machine learning where there's no- Where the size, yesterday,

00:02:22 --> 00:02:27
where the size of the input is small for the most part.

00:02:27 --> 00:02:35
The number of neurons, in the case the neural networks, is on the order of 10, 100, 1,000.

00:02:35 --> 00:02:43
When you think of images, images are a collection of pixels, one of the most iconic images from computer vision

00:02:42 --> 00:02:45
the bottom left there is Lenna.

00:02:45 --> 00:02:54
I encourage you to Google it and figure out the story behind that image. It's quite shocking when I found out recently.

00:02:55 --> 00:03:08
So once again, computer vision is, these days, dominated by data driven approaches by machine learning

00:03:11 --> 00:03:20
where all of the same methods that are used on other types of data are used on images where the input is just

00:03:19 --> 00:03:29
a collection of pixels and pixels are numbers from 0 to 255 discrete values.

00:03:29 --> 00:03:37
So we can think exactly what we've talked about previously, you could think of images in the same exact way. It's just numbers

00:03:37 --> 00:03:42
and so we can do the same kind of thing. We could do supervised learning where you have an input image

00:03:42 --> 00:03:49
and output label. The input image here is a picture of a woman; the label might be "woman".

00:03:49 --> 00:03:58
On supervised learning, same thing. We'll look at that briefly as well as clustering images into categories.

00:03:58 --> 00:04:05
Again semi-supervised and reinforcement learning. In fact, the Atari games that talked about yesterday.

00:04:05 --> 00:04:12
do some pre-processing on the images. They're doing computer vision; they're using convolutional neural networks as we'll discuss today

00:04:13 --> 00:04:20
and the pipeline for supervised learning is again the same: there's raw data in the form of images,

00:04:19 --> 00:04:27
there's labels on those images. We perform a machine learning algorithm, performs feature extraction,

00:04:26 --> 00:04:34
it trains given the inputs and outputs on the images and the labels of those images, constructs the model

00:04:33 --> 00:04:36
and then test that model.

00:04:35 --> 00:04:42
And we get a metric and accuracy. Accuracy is the term that's used to often describe how well the model performs.

00:04:42 --> 00:04:44
The percentage.

00:04:47 --> 00:04:55
I apologise for the constant presence of cats throughout this course. I assure you this course is about driving, not cats.

00:04:56 --> 00:05:04
but images are numbers. So for us we take it for granted.

00:05:03 --> 00:05:07
We're really good at looking

00:05:06 --> 00:05:13
and converting visual perception as human beings, converting visual perception, into semantics.

00:05:13 --> 00:05:23
We see this image and we know it's a cat but a computer only sees numbers: RGB values for a color image.

00:05:22 --> 00:05:27
There's three values for every single pixel from 0 to 255.

00:05:27 --> 00:05:38
And so given that image, we can think of two problems: one is regression and the other is classification. Regression is when given an image

00:05:38 --> 00:05:44
we want to produce a real value of output put back. So if we have an image of the four roadway,

00:05:43 --> 00:05:51
we want to produce a value for the steering wheel angle and if you have an algorithm that's really smart,

00:05:50 --> 00:05:54
It can take any image of the forward roadway

00:05:53 --> 00:05:59
and produce the perfectly correct steering angle that drives the car safely across the United States.

00:05:59 --> 00:06:08
We'll talk about how to do that and where that fails. Classification is when the input again is an image

00:06:08 --> 00:06:17
and the output is a class label, a discrete class label. Underneath it though often is still a regression problem

00:06:16 --> 00:06:24
and once produced is a probability that this particular image belongs to a particular category.

00:06:24 --> 00:06:32
And we use a threshold to chop off the outputs associated with low probabilities

00:06:32 --> 00:06:38
and take the labels associated with high probabilities and convert it into a discrete classification.

00:06:40 --> 00:06:45
I mentioned this yesterday but it bears saying again, computer vision is hard.

00:06:47 --> 00:06:54
We, once again, take it for granted. As human beings, we're really good at dealing with all these problems.

00:06:53 --> 00:07:01
There's viewpoint variation: the object looks wholly different in terms of the numbers behind the images

00:07:00 --> 00:07:04
in terms of the pixels when viewed from a different angle.

00:07:04 --> 00:07:12
Viewpoint variation: objects when you're standing far away from them or up close are totally different size.

00:07:11 --> 00:07:15
We're good at detecting that there are different size.

00:07:14 --> 00:07:21
It's still the same object as human beings but that's still a really hard problem because those sizes can vary drastically.

00:07:21 --> 00:07:30
We talked about occlusions and deformations with cats; well understood problem. There's background clutter.

00:07:30 --> 00:07:39
You have to separate the object of interest from the background and given the three dimensional structure of our world.

00:07:38 --> 00:07:45
There's a lot of stuff often going on in the background: the clutter, their inter-class variation.

00:07:45 --> 00:07:52
That's often greater than inter-class variation; meaning objects of the same type often have more variation

00:07:51 --> 00:08:02
than the objects that you're trying to separate them from. There is the hard one for driving: illumination.

00:08:02 --> 00:08:07
Light is the way we perceive things; the reflection of light off the surface

00:08:07 --> 00:08:14
and the source of that light changes the way that object appears and we have to be robust to all of that.

00:08:17 --> 00:08:25
So the image classification pipeline is the same as I mentioned. There are categories,

00:08:25 --> 00:08:31
It's the classification problems for those categories of cat, dog, mug, hat.

00:08:30 --> 00:08:35
You have a bunch of examples, image examples of each of those categories

00:08:34 --> 00:08:40
and so the input is just those images paired with the category.

00:08:41 --> 00:08:49
And you train to map, to estimate a function that maps from the images to the categories.

00:08:52 --> 00:08:56
For all of that you need data; a lot of it.

00:08:56 --> 00:09:04
There is, unfortunately, a growing number of data sets but there are still relatively small.

00:09:05 --> 00:09:13
We get excited. There are millions of images but they're not billions or trillions of images and these are,

00:09:13 --> 00:09:18
the data sets that you will see if you read academic literature most often.

00:09:18 --> 00:09:21
Mnist, the one that's been beaten to death.

00:09:21 --> 00:09:35
And then we use as well in this course the data set of handwritten digits where the categories are 0 to 9.

00:09:35 --> 00:09:49
ImageNet, one of the largest image data sets; fully labeled image data sets in the world has images with a hierarchy of categories from Word Net.

00:09:49 --> 00:09:57
And what you see there is a labeling of what image is associated with which words are present in the data set.

00:09:57 --> 00:10:07
CIFAR-10 and CIFAR-100 are tiny images that are used to prove in a very efficient and quick way

00:10:06 --> 00:10:13
offhand that your algorithm that you're trying to publish on, or trying to impress the world with, works well.

00:10:13 --> 00:10:19
It's small, it's a small data set: CIFAR-10 means there's 10 categories.

00:10:19 --> 00:10:28
And places is a data set of natural scenes: woods, nature, city, and so on.

00:10:27 --> 00:10:31
So let's look at CIFAR-10

00:10:30 --> 00:10:35
as a data set of 10 categories: airplane, automobile, bird, cat, and so on.

00:10:35 --> 00:10:39
They're shown there with sample images as the rose.

00:10:39 --> 00:10:48
And so let's build a classifier that's able to take images from one of these 10 categories and tell us what

00:10:48 --> 00:10:57
is shown in the image. So how do we do that? Once again, all the algorithm sees is numbers.

00:10:58 --> 00:11:07
So we have to try to have at the very core, we have to have an operator for comparing two images.

00:11:07 --> 00:11:11
So given an image and I want to save it as a cat or dog.

00:11:10 --> 00:11:17
I want to compare it to images of cats and compare it to images of dogs and see which one matches better.

00:11:16 --> 00:11:25
So there has to be a comparative operator. Okay so one way to do that is take the absolute difference between the two images

00:11:24 --> 00:11:28
pixel by pixel, take the difference between

00:11:29 --> 00:11:39
each individual pixel shown on the bottom of the slide for a 4x4 image. And then we sum that pixel-wise

00:11:38 --> 00:11:46
absolute difference into a single number. So if the image is totally different pixel-wise,

00:11:45 --> 00:11:47
that will be a high number.

00:11:47 --> 00:11:54
If it's the same image, the number will be 0. Oh, it's the absolute value too of the difference.

00:11:56 --> 00:12:06
And that's called L1 distance. It doesn't matter. When we speak of distance, we usually mean L2 distance.

00:12:07 --> 00:12:18
And so, if we try to- So we can build the classifier that just uses this operator to compare it to every single image in the data set

00:12:18 --> 00:12:24
and say I'm going to pick the, I'm going to pick the category

00:12:23 --> 00:12:31
that's the closest using this comparative operator. I'm going to find- I have a picture of a cat

00:12:30 --> 00:12:35
and I'm going to look through the dataset and find the image that's the closest to this picture

00:12:35 --> 00:12:38
and say that is the category that this picture belongs to.

00:12:38 --> 00:12:46
So if we just flip the coin and randomly pick which category an image belongs to get that accuracy,

00:12:46 --> 00:12:50
would be on average 10%. It's random.

00:12:51 --> 00:13:00
The accuracy with which our brilliant image difference algorithm that just goes through the data set

00:12:59 --> 00:13:09
and finds the closest one is 38% which is pretty good, it's way above 10%.

00:13:10 --> 00:13:14
So you can think about this operation of look into the base

00:13:13 --> 00:13:20
and finding the closest image as what's called K-Nearest Neighbors

00:13:20 --> 00:13:28
or K in that case. Meaning you find the one closest neighbor to this image that you're asking questions about

00:13:28 --> 00:13:34
and accept the label from that image. You could do the same thing increasing K.

00:13:34 --> 00:13:39
Increasing K to 2 means you take the two nearest neighbors.

00:13:39 --> 00:13:48
You find the two closest in terms of pixel-wise image difference through this particular query image

00:13:48 --> 00:13:52
and find which categories did those belong to.

00:13:52 --> 00:13:59
What's shown up top on the left is the data set we're working with: red, green, blue.

00:14:00 --> 00:14:05
What's shown in the middle is the one nearest neighbor classifier, meaning

00:14:05 --> 00:14:11
this is how you segment the entire space of different things that you can compare.

00:14:13 --> 00:14:17
And if a point falls into any of these regions,

00:14:17 --> 00:14:24
it will be immediately associated with the nearest neighbor algorithm to belong to that image, to that region.

00:14:25 --> 00:14:34
With the five nearest neighbors, there's immediately an issue. The issue is that there is white regions.

00:14:33 --> 00:14:44
There's tie breakers where your five closest neighbors are from various categories. So it's unclear where you belong to.

00:14:45 --> 00:14:53
So this is a good example of parameter tuning. You have one parameter: K.

00:14:54 --> 00:15:04
And your task as a teacher of machine learning, you have to teach this algorithm how to do your learning for you,

00:15:05 --> 00:15:07
is to figure out that parameter.

00:15:07 --> 00:15:13
That's called "parameter tuning" or "hyper-parameter tuning" as it's called in neural networks.

00:15:14 --> 00:15:26
And so on the bottom right of the slide on the x-axis is K. As we increase it from 0 to 100 and

00:15:25 --> 00:15:35
the y-axis is classification accuracy. It turns out that the best K for this data set is 7, 7 years neighbors.

00:15:34 --> 00:15:43
With that we get a performance of 30% human level performance

00:15:44 --> 00:15:52
and I should say that the way we get that number as we do with a lot of the machine learning pipeline

00:15:52 --> 00:16:01
process is you separate the data into the parts of days that you use for training

00:16:00 --> 00:16:08
and another part they use for testing. You're not allowed to touch the testing part. That's cheating.

00:16:07 --> 00:16:15
You construct your model of the world on the training data set and you use what's called cross validation

00:16:15 --> 00:16:26
where you take a small part of the training data shown "fold five" there in yellow to leave that part out from

00:16:25 --> 00:16:38
the training and then use it as part of the hyper-parameter tuning. As you train, figure out with that yellow part fold five

00:16:37 --> 00:16:43
how well you're doing and then you choose a different fold and see how well you're doing

00:16:42 --> 00:16:48
And keep playing with parameters never touching the test part. And when you're ready,

00:16:47 --> 00:16:55
you run the algorithm on a test data to see how well you really do. How will it really generalizes. Yes, question.

00:16:54 --> 00:16:57
(INAUDIBLE QUESTION)

00:16:59 --> 00:17:02
So, the question was: "is there a good way to-

00:17:02 --> 00:17:08
Is any good intuition behind what a good K is?" There are general rules for different data sets

00:17:07 --> 00:17:14
but usually you just have to run through it. Grid search, brute force. Yes, question.

00:17:13 --> 00:17:15
(INAUDIBLE QUESTION)

00:17:14 --> 00:17:16
(CHUCKLING)

00:17:15 --> 00:17:18
Good question. Yes.

00:17:17 --> 00:17:26
(INAUDIBLE QUESTION)

00:17:25 --> 00:17:29
Yes, the question was: "is each pixel 1 number or 3 numbers?"

00:17:29 --> 00:17:36
For majority of computer vision throughout its history used grayscale images so it's 1 number but RGB

00:17:35 --> 00:17:41
is 3 numbers and there's sometimes a depth value too, so it's 4 numbers. So it's-

00:17:42 --> 00:17:46
If you have a stereo vision camera that gives you the depth information of the pixels,

00:17:45 --> 00:17:53
that's a fourth and then if you stack two images together there could be 6. In general,

00:17:52 --> 00:17:57
everything we work with will be 3 numbers for a pixel.

00:18:00 --> 00:18:03
Yes, so the question: "as to the absolute value is just one number?"

00:18:02 --> 00:18:06
Exactly right. So in that case, those are grayscale images.

00:18:06 --> 00:18:08
So it's not RGB images.

00:18:10 --> 00:18:15
So, you know, this algorithm is pretty good if we use the best.

00:18:17 --> 00:18:24
We optimize the hyper-parameters of this algorithm, choose K of 7,

00:18:23 --> 00:18:30
seems to work well for this particular CIFAR-10 data set. Okay, we get 30% accuracy.

00:18:30 --> 00:18:38
It's impressive, higher than 10%. Human beings perform at about 94, slightly above 94%

00:18:37 --> 00:18:47
accuracy for CIFAR-10. So given an image and it's a tiny image. I should clarify it, it's like a little icon.

00:18:49 --> 00:18:56
Given that image, human beings are able to determine accurately one of the 10 categories with 94% accuracy.

00:18:55 --> 00:19:01
And the currently state-of-the-art convolutional neural networks is ninety five,

00:19:00 --> 00:19:07
it's 95.4% accuracy and, believe it or not, it's a heated battle

00:19:07 --> 00:19:14
but the most important, the critical fact here, is it's recently surpassed humans.

00:19:13 --> 00:19:23
And certainly surpass the k-nearest neighbors algorithm. So,how does this work? Let's briefly look back.

00:19:23 --> 00:19:29
It all still boils down to this little guy: the neuron,

00:19:28 --> 00:19:37
that sums the weights of its inputs, adds a bias, produces an output based on an activation, a smooth activation function.

00:19:38 --> 00:19:41
Yes, question.

00:19:40 --> 00:19:45
(INAUDIBLE QUESTION)

00:19:45 --> 00:19:49
The question was: "do you take a picture of Cassie, you know it's a cat,

00:19:50 --> 00:19:57
but that's not encoded anywhere, like you have to write that down somewhere.

00:19:56 --> 00:20:00
So you have to write as a caption: "This is my cat."

00:19:59 --> 00:20:06
And then the unfortunate thing, given the internet and how woody it is, you can't trust the captions on images.

00:20:06 --> 00:20:14
because maybe you're just being clever and it's not a cat all, it's a dog dressed as a cat. Yes, question.

00:20:14 --> 00:20:16
(INAUDIBLE QUESTION)

00:20:18 --> 00:20:21
Sorry. Seen as do better than what?

00:20:26 --> 00:20:31
Yes, so the question was: "do convolutional neural networks generally do better than nearest neighbors?

00:20:31 --> 00:20:40
There's very few problems on which neural networks don't do better, yes ,they almost always do better

00:20:39 --> 00:20:51
except when you have almost no data. So you need data. And convolutional neural networks isn't some special magical thing.

00:20:50 --> 00:20:59
It's just neural networks with some cheating up front that I'll explain, some tricks to try to reduce the size

00:20:58 --> 00:21:01
and make it capable to deal with images.

00:21:01 --> 00:21:07
So again. Yes, the input is, in this case that we looked at classifying an image of a number,

00:21:07 --> 00:21:14
as opposed to doing some fancy convolutional tricks. We just take the the entire 28x28

00:21:13 --> 00:21:20
pixel image that's 784 pixels as the input.

00:21:20 --> 00:21:27
That's 784 neurons in the input, 15 neurons on the hidden layer and 10 neurons in the output.

00:21:28 --> 00:21:33
Now everything we'll talk about has the same exact structure. Nothing fancy.

00:21:34 --> 00:21:42
There is a forward pass through the network where you take an input image and produce an output classification

00:21:41 --> 00:21:48
and there's a backward pass through the network for Back Propagation where you adjust the weights

00:21:47 --> 00:21:54
when your prediction doesn't match the Ground Truth output.

00:21:54 --> 00:22:02
And learning just boils down to optimization; it's just optimizing a smooth function.

00:22:02 --> 00:22:07
Differentiable function; that's defined as the lost function.

00:22:07 --> 00:22:14
That's usually as simple as a squared error between the true output

00:22:13 --> 00:22:19
and the one you actually got. So what's the difference? What are convolutional neural networks?

00:22:20 --> 00:22:33
Convolutional neural networks take inputs that have some spatial consistency, have some meaning to the spatial-

00:22:34 --> 00:22:43
Has some spatial meaning in them like images. There's other things, you can think of the dimension of time.

00:22:43 --> 00:22:55
And you can input audio signal into a convolutional neural network. And so the input is, usually for every single layer,

00:22:54 --> 00:23:00
that's a convolutional layer, the input is a 3D volume and the output is a 3D volume.

00:23:01 --> 00:23:07
I'm simplifying because you can call it 4D too but it's 3D. There's height, width and depth.

00:23:07 --> 00:23:12
So that's an image. The height and the width is the width and the height of the image.

00:23:12 --> 00:23:20
And then the depth for grayscale image is 1; for an RGB image is 3;

00:23:20 --> 00:23:27
for a ten-frame video of greyscale images the depth is 10.

00:23:27 --> 00:23:37
It's just a volume, a three-dimensional matrix of numbers. And everything-

00:23:36 --> 00:23:44
The only thing that a convolutional layer does is take a 3D volume's input, produce a 3D volume as output

00:23:44 --> 00:23:47
and has some smooth function.

00:23:47 --> 00:23:52
Operating on the inputs, on the sum of the inputs,

00:23:52 --> 00:24:01
that may or may not be a parameter that you tune, that you try to optimize. That's it.

00:24:01 --> 00:24:06
So Lego pieces that you stack together in the same way as we talked about before.

00:24:07 --> 00:24:12
So what are the types of layers that a convolutional neural networks have? There's inputs.

00:24:11 --> 00:24:20
So for example a color image of 32x32 will be a volume of 32x32x3.

00:24:21 --> 00:24:35
A convolutional layer takes advantage of the spatial relationships of the input neurons and a convolutional layer,

00:24:35 --> 00:24:38
it's the same exact neuron

00:24:38 --> 00:24:42
as for fully connected network, the regular we talked about before.

00:24:41 --> 00:24:52
But it has a narrower receptive field, it's more focused, the inputs to a neuron on the convolutional layer

00:24:52 --> 00:24:58
come from a specific region from the previous layer. And the parameters

00:24:57 --> 00:25:03
on each filter, you can think of this as a filter, because you slide it across the entire image.

00:25:05 --> 00:25:13
And those parameters are shared. So supposed you've taken the- If you think about two layers,

00:25:12 --> 00:25:21
as opposed to connecting every single pixel in the first layer to every single neuron in the following layer.

00:25:20 --> 00:25:31
You only connect the neurons in the input layer that are close to each other, to the output layer, and then you

00:25:30 --> 00:25:38
enforce the weights to be tied together spatially.

00:25:39 --> 00:25:46
And what that results in is a filter every single layer on the output,

00:25:45 --> 00:25:50
you can think of as a filter, they get excited for example for an edge

00:25:50 --> 00:25:56
and when it sees this particular kind of edge in the image, it will get excited.

00:25:55 --> 00:26:02
And it'll get excited in the top left of the image, on the top right, bottom left, bottom right.

00:26:02 --> 00:26:09
The assumption there is that a powerful feature for detecting a cat

00:26:09 --> 00:26:13
is just as important no matter where in the image it is.

00:26:14 --> 00:26:26
And this allows you to cut away a huge number of connections between neurons but it still boils down on the right,

00:26:26 --> 00:26:31
as a neuron that sums a collection of inputs

00:26:31 --> 00:26:44
and applies weights to them. The spatial arrangement of the output volume relative to the input volume

00:26:43 --> 00:26:52
is controlled by three things. The number of filters. So for every single "filter"

00:26:51 --> 00:26:59
you get an extra layer on the output. So if the input,

00:26:58 --> 00:27:06
let's talk about the very first layer, the input is 32x32x3. It's in RGB

00:27:05 --> 00:27:14
image of 32x32. If the number of filters is 10,

00:27:14 --> 00:27:28
then the resulting depth the resulting number of stacked channels in the output will be 10. Stride is given.

00:27:27 --> 00:27:37
is the step size of the filter that you slide along the image. Often times as just 1 or 3

00:27:37 --> 00:27:45
and that directly reduces the size, the spatial size the width and the height, of the output image.

00:27:45 --> 00:27:54
and then there is a convenient thing that it's often done is padding. The image on the outside zeros.

00:27:54 --> 00:28:06
So that the input and the output have the same height and width. So this is a visualization of convolution.

00:28:06 --> 00:28:11
I encourage you to, kind of maybe offline, think about what's happening.

00:28:11 --> 00:28:20
It's similar to the way human vision works, crudely so, if there's any experts in the audience.

00:28:20 --> 00:28:31
So the input here on the left is a collection of numbers: 0, 1, 2. And a filter

00:28:36 --> 00:28:42
or there are two filters shown as W1-

00:28:41 --> 00:28:50
W0 and W1. Those filters shown in red, are the different weights applied in those filters.

00:28:50 --> 00:28:56
And each of the filters have a certain depth; just like the input a depth of 3.

00:28:56 --> 00:29:03
So there are three of them in each column and so,

00:29:04 --> 00:29:10
so you slide death filter along the image keeping the weights the same.

00:29:09 --> 00:29:12
this is the sharing of the weights

00:29:12 --> 00:29:20
and so your first filter you pick the weights, this is an optimization problem. you pick the weights in such a way

00:29:19 --> 00:29:25
that it fires, it gets excited, for useful features and doesn't fire for not useful features.

00:29:25 --> 00:29:29
And then there's a second filter that fires for useful features and not.

00:29:29 --> 00:29:41
And produces a signal on the output depending on a positive number, meaning there's a strong feature in that region,

00:29:40 --> 00:29:45
and negative number if there isn't but the filter is the same.

00:29:44 --> 00:29:50
This allows for a drastic reduction in the parameters and so you can deal with

00:29:50 --> 00:30:00
inputs. There are a thousand by thousand pixel image, for example, or video. There's a really powerful concept there.

00:30:02 --> 00:30:05
The spatial sharing of weights.

00:30:04 --> 00:30:12
That means there's a spatial invariance to the features you're detecting. It allows you to learn from arbitrary images

00:30:11 --> 00:30:18
o you don't have to be concerned about pre-processing the images in some clever way,

00:30:17 --> 00:30:24
you just give the raw image. There is another operation: pooling.

00:30:24 --> 00:30:31
It's a way to reduce the size of the layers by, for example in this case,

00:30:30 --> 00:30:36
it's max pooling for taking a collection of outputs and choose x1

00:30:35 --> 00:30:49
and summarizing those collection of pixels such that the output of the pooling operation is much smaller than the input.

00:30:49 --> 00:31:00
Because the justification there is that you don't need a high resolution.

00:31:00 --> 00:31:09
Localization of which pixel is important in the image or according to, you know,

00:31:08 --> 00:31:15
you don't need to know exactly which pixel is associated with the cat ear or a cat face.

00:31:15 --> 00:31:19
As long as you, kind of, know it's around that part

00:31:18 --> 00:31:23
and that reduces a lot of complexity in the operations. Yes, question.

00:31:27 --> 00:31:33
The question was: "when is too much pooling, when do you stop pooling?"

00:31:35 --> 00:31:47
So pooling is a very crude operation that doesn't have any, one thing you need to know, is it doesn't have any

00:31:46 --> 00:31:50
parameters that are learnable.

00:31:49 --> 00:31:57
So you can't learn anything clever about pooling. You're just picking, in this case

00:31:56 --> 00:32:05
max pool, so you're picking the largest number. So you're reducing the resolution, you're losing a lot of information.

00:32:05 --> 00:32:11
There's an argument that you're not, you know, losing that much information as long as you're not pooling the entire

00:32:10 --> 00:32:13
image into a single value

00:32:12 --> 00:32:23
but you're gaining training efficiency, you're gaining the memory size, reducing the size of the network.

00:32:22 --> 00:32:31
So, it's definitely a thing that people debate and it's a parameter that you play with to see what works for you.

00:32:33 --> 00:32:41
Okay, so how does this thing look like as a whole, a convolutional neural network, the input is an image

00:32:41 --> 00:32:53
there's usually a convolutional layer, there is a pooling operation, another convolutional layer, another pooling operation and so on.

00:32:54 --> 00:33:02
At the very end, if the task is classification you have a stack of convolutional layers and pooling layers.

00:33:02 --> 00:33:05
There are several fully connected layers.

00:33:05 --> 00:33:15
So, you go from those spatial convolutional operations to fully connecting every single neuron in a layer to the

00:33:14 --> 00:33:16
following layer.

00:33:15 --> 00:33:23
And you do this so that by the end, you have a collection of neurons each one is associated with a particular class.

00:33:23 --> 00:33:31
So in what we looked at yesterday is the input, is an image of a number 0 through 9.

00:33:31 --> 00:33:42
The output here would be 10 neurons. So you blow down that image with a collection of convolutional layers,

00:33:41 --> 00:33:48
with 1 or 2 or 3 fully connected layers at the end that all lead to 10 neurons

00:33:48 --> 00:33:54
and each of those neuron's job is to get fired up

00:33:54 --> 00:34:03
when it sees a particular number and for the other ones to produce a low probability. And so this kind of process

00:34:02 --> 00:34:11
is how you have the 95 percentile accuracy on the CIFAR-10 problem.

00:34:10 --> 00:34:20
This here is ImageNet data set that I mentioned. It's how you take this image of a leopard, of a container ship,

00:34:20 --> 00:34:25
and produce a probability that that is a container ship or a leopard.

00:34:25 --> 00:34:33
Also shown there are the outputs of the other nearest neurons in terms of their confidence.

00:34:37 --> 00:34:45
Now you can use the same exact operation by chopping off the fully connected layer at the end

00:34:44 --> 00:34:54
and as opposed to mapping from image to a prediction of what's contained in the image, you map from the image to another image.

00:34:54 --> 00:35:01
And you can train that image to be one that gets excited

00:35:01 --> 00:35:12
spatially, meaning it gives you a high, close to one value, for areas of the image that contain the object of interest

00:35:13 --> 00:35:20
and then a low number for areas of the image that are unlikely to contain that image.

00:35:20 --> 00:35:24
And so from this you can go on the left,

00:35:23 --> 00:35:32
an original image of a woman on a horse, to a segmented image of knowing where the woman is and where the horse is

00:35:31 --> 00:35:39
and where the background is. The same process can be done for detecting the object.

00:35:39 --> 00:35:43
So you can segment the scene into a bunch of

00:35:42 --> 00:35:54
interesting objects, candidates for interesting objects and then go through those candidates one by one

00:35:53 --> 00:36:01
and perform the same kind of classification as in the previous step where it's just an input as an image and the output as a classification.

00:36:01 --> 00:36:10
And through this process of hopping around an image, you can figure out exactly where is the best way to segment the cow

00:36:09 --> 00:36:18
out of the image. That's called object detection. Okay, so

00:36:18 --> 00:36:29
how can these magical convolutional neural networks help us in driving? This is a video of the forward road way from a

00:36:28 --> 00:36:36
data set that we'll look at, that we've collected from a Tesla. But first let me look at driving.

00:36:35 --> 00:36:48
Briefly, the general driving task from the human perspective. On average an American driver in the United States

00:36:47 --> 00:36:59
drives 10,000 miles a year. A little more for rural, a little less for urban. There is about 30,000

00:36:58 --> 00:37:07
fatal crashes and >32,000 sometimes as high as 38,000 fatalities a year.

00:37:06 --> 00:37:15
This includes car occupants, pedestrians, bicyclists and motorcycle riders.

00:37:16 --> 00:37:26
This may be a surprising fact but in a class on self-driving cars we should remember that.

00:37:25 --> 00:37:35
So ignore the 59.9%, that's other. The most popular cars in the United States are pickup trucks: Ford F-1 Series,

00:37:34 --> 00:37:45
Chevy Silverado, Ram. It's an important point that we're still married to our,

00:37:46 --> 00:37:57
to wanting to be in control and so one of the interesting cars that we look at

00:37:56 --> 00:38:03
and the car that is the days that we provide to the class is collected from is a Tesla.

00:38:03 --> 00:38:08
It's the one that comes at the intersection of the Ford F-150

00:38:08 --> 00:38:18
and the cute, little Google self-driving car on the right. It's fast, it allows you to have a feeling of control

00:38:17 --> 00:38:23
but it can also drive itself for hundreds of miles on the highway, if need be.

00:38:24 --> 00:38:28
It allows you to press a button and the car takes over.

00:38:28 --> 00:38:34
It's a fascinating trade-off, of transferring control from the human to the car.

00:38:35 --> 00:38:38
It's a transfer of trust

00:38:38 --> 00:38:49
and it's a chance for us to study the psychology of human beings as they relate to machines at >60 miles an hour.

00:38:51 --> 00:39:03
In case you're not aware a little summary of human beings, where distracted things: would like to text, use the smartphone,

00:39:03 --> 00:39:11
watch videos, groom, talk to passengers, eat, drink, texting.

00:39:12 --> 00:39:19
169 billion texts were sent in the US every single month in 2014.

00:39:20 --> 00:39:28
On average, 5 seconds our eyes spent off the road while texting - 5 seconds.

00:39:30 --> 00:39:42
That's the opportunity for automation to step in. More than that, there's what NHTSA refers to as the 4 D's: drunk, drugged,

00:39:41 --> 00:39:43
distracted and drowsy.

00:39:43 --> 00:39:54
Each one of those opportunity is for automation to step in. Drunk driving stands to benefit significantly

00:39:53 --> 00:40:07
from automation, perhaps. So the miles, let's look at the miles. The data. There's 3 trillion (3 million million)

00:40:06 --> 00:40:15
3 million million miles driven every year and TESLA autopilot, our case study for this class,

00:40:15 --> 00:40:21
and as human beings is driven on full auto-pilot mode.

00:40:20 --> 00:40:28
So it's driving by itself 300 million miles as of December 2016

00:40:28 --> 00:40:37
and the fatalities for human control vehicles is 1:90,000,000.

00:40:36 --> 00:40:47
It's about >30,000 fatalities a year and currently under TESLA auto-pilot there's one fatality.

00:40:47 --> 00:40:56
There's a lot of ways you could tear that statistic apart but it's one to think about. Already, perhaps automation

00:40:55 --> 00:41:03
results in safer driving. The thing is, we don't understand automation,

00:41:03 --> 00:41:13
because we don't have the data: we don't have the data on the forward roadway video, we don't have the data on the driver

00:41:13 --> 00:41:21
and we just don't have that many cars on the road today that drive themselves. So we need a lot of data.

00:41:21 --> 00:41:30
We'll provide some of it to you in the class and as part of our research at MIT were collecting huge amounts of it,

00:41:30 --> 00:41:39
of cars driving themselves, and collecting that data is how we get to understanding.

00:41:38 --> 00:41:52
So talking about the data and what we'll be doing training our algorithms on, here is a Tesla Model S, Model X

00:41:51 --> 00:41:59
we've instrumented 17 of them, have collected over 5,000 hours and 70,000 miles.

00:41:58 --> 00:42:09
And I'll talk about the cameras that we've put in them. We're collecting video of the forward road way.

00:42:08 --> 00:42:20
This is a highlight of a trip from Boston to Florida of one of the people driving a Tesla. What's also shown in blue is the

00:42:19 --> 00:42:27
amount of time that autopilot was engaged: currently 0 minutes and then it grows and grows.

00:42:28 --> 00:42:35
For prolonged periods of time, so hundreds of miles, people engage autopilot. Out of 1.3 billion

00:42:34 --> 00:42:42
miles driven a Tesla, 300,000,000 are on autopilot. You do the math whatever that is, 25%.

00:42:44 --> 00:42:51
So we are collecting data of the forward roadway, of the driver. We have 2 cameras on the driver.

00:42:51 --> 00:43:06
What we're providing with the class is epics of time of the forward roadway, for privacy considerations. Cameras used

00:43:05 --> 00:43:14
to record are your regular Webcam, the work horse of the computer vision community. The C920,

00:43:14 --> 00:43:17
and we have some special lenses on top of it.

00:43:17 --> 00:43:24
Now what's special about these webcams? Nothing that costs $70 can be that good, right?

00:43:24 --> 00:43:35
What's special about them is that they do onboard compression and allow you to collect huge amounts of data

00:43:34 --> 00:43:43
nd use reasonably sized storage capacity to store that data and train your algorithms on.

00:43:46 --> 00:43:55
So what on the self-driving side do we have to work with? How do we build a self-driving car?

00:43:55 --> 00:44:01
There is these sensors: radar, lidar, vision,

00:44:01 --> 00:44:10
audio - all looking outside helping you detect the objects in the external environment to localize yourself and so on.

00:44:10 --> 00:44:16
And there's the sensors facing inside: visible light camera, audio again,

00:44:15 --> 00:44:19
and infrared camera to help detect peoples.

00:44:19 --> 00:44:31
So we can decompose the self-driving car task into 4 steps: localization, answering where am I; scene understanding,

00:44:30 --> 00:44:39
using the texture of the information of the scene around, to interpret the identity of the different objects in the

00:44:38 --> 00:44:46
scene and the semantic meaning of those objects, of their movement.

00:44:46 --> 00:44:54
There's movement planning - once you figured all that out, found all the pedestrians, found all the other cars,

00:44:53 --> 00:45:05
how do I navigate through this maze, a clutter of objects in a safe and legal way. And there's driver state,

00:45:05 --> 00:45:09
how do I detect using video or other information.

00:45:10 --> 00:45:17
The video of the driver detect information about their emotional state or their distraction level. Yes, question.

00:45:17 --> 00:45:22
(INAUDIBLE QUESTION)

00:45:22 --> 00:45:31
Yes, that's the real-time figure from lidar. Lidars are sensors that provides you the 3D point cloud

00:45:31 --> 00:45:38
of the external scene. So lidar is the technology used by

00:45:39 --> 00:45:50
most folks working with self-driving cars to give you a strong Ground Truth of the objects. It's probably the best sensor we have

00:45:49 --> 00:46:00
for getting 3D information, the least noisy 3D information about the external environment. Question.

00:46:07 --> 00:46:17
So autopilot is always changing. One of the most amazing things about this vehicle is that the updates to autopilot come in

00:46:17 --> 00:46:19
the form of software.

00:46:18 --> 00:46:25
So the amount of time it's available to changes has become more conservative with time.

00:46:25 --> 00:46:28
But in this, this one of the earlier versions,

00:46:28 --> 00:46:38
and it shows, the second line in yellow, shows how often autopilot was available but not turned on.

00:46:37 --> 00:46:45
So the total driving time was 10 hours, autopilot was available 7 hours and was engaged an hour.

00:46:44 --> 00:46:50
This particular person is a responsible driver because what you see or

00:46:50 --> 00:46:57
is a more cautious driver. What you see is it's raining, autopilot is still available

00:46:56 --> 00:46:57
but-

00:46:57 --> 00:47:01
(INAUDIBLE QUESTION)

00:47:00 --> 00:47:08
the comment was that you shouldn't trust that one fatality number as an indication of safety because the drivers

00:47:07 --> 00:47:16
elect to only engage the system when it's safe to do so. It's a totally open,

00:47:16 --> 00:47:28
there's a lot bigger arguments for that number than just that one, the question is whether that's a bad

00:47:27 --> 00:47:33
thing so maybe we can trust human beings to engage, you know,

00:47:34 --> 00:47:43
despite the poorly filmed YouTube videos, despite the hype in the media, you're still a human being.

00:47:42 --> 00:47:47
riding 60 miles an hour in a metal box with your life on the line.

00:47:46 --> 00:47:55
You won't engage the system unless you know it's completely safe unless you've built up a relationship with it.

00:47:54 --> 00:48:00
It's not all the stuff you see where a person gets in the back of a Tesla and start sleeping or is playing chess,

00:48:00 --> 00:48:06
or whatever. That's all for YouTube, the reality is when it's just you in the car

00:48:05 --> 00:48:10
it's still your life on the line and so you're going to do the responsible thing unless perhaps you're a teenager

00:48:09 --> 00:48:14
and so on but that never changes no matter what you're in.

00:48:14 --> 00:48:16
Question.

00:48:15 --> 00:48:18
(INAUDIBLE QUESTION)

00:48:17 --> 00:48:20
The question was: "what do you need to see

00:48:19 --> 00:48:27
or sense about the external environment to be able to successfully drive? Do you need lane markings? Do you need other-

00:48:26 --> 00:48:30
what are the landmarks based on which you do the localization and navigation?"

00:48:29 --> 00:48:38
And that depends on the sensors. So with the Google self-driving car in sunny California,

00:48:37 --> 00:48:46
it depends on lidar in a high-resolution way, map the environment in order to be able to localize itself

00:48:46 --> 00:48:55
based on lidar. And lidar, now I don't know the details of exactly where lidar fails,

00:48:54 --> 00:49:00
but it's not good with rain, it's not good with snow, it's not good

00:48:59 --> 00:49:07
when the environment is changing. So what snow does is it changes the visual, the appearance, the reflective texture

00:49:06 --> 00:49:12
of the surfaces around. Us human beings are still able to figure stuff out

00:49:11 --> 00:49:19
but a car that's relying heavily on lidar won't be able to localize itself using the landmarks

00:49:18 --> 00:49:21
it previously has detected because they look different

00:49:20 --> 00:49:27
now with the snow. Computer vision can help us with lanes

00:49:27 --> 00:49:36
or following a car. The two landmarks that we used in a lane is following the car in front of you

00:49:35 --> 00:49:42
or staying between two lanes. That's the nice thing about our roadways it's they're designed for human eyes.

00:49:42 --> 00:49:50
So you can use computer vision for lanes and for cars in front to follow them. And there is radar.

00:49:49 --> 00:49:59
That's a crude but a reliable source of distance information that allows you to not collide with metal objects.

00:49:58 --> 00:50:05
So all that together depending on what you want to rely on more gives you a lot of information.

00:50:04 --> 00:50:14
The question is when its messy complexity of real life occurs,

00:50:13 --> 00:50:27
how reliable it would be in the urban environment and so on. So localization- How can deep learning help?

00:50:26 --> 00:50:41
So first, just a quick summary of visual odometry. It's using a monocular or stereo input of video images

00:50:41 --> 00:50:52
to determine your orientation in the world. The orientation, in this case, of a vehicle in the frame of the world

00:50:52 --> 00:50:56
and all you have to work with is a video of the forward roadway

00:50:57 --> 00:51:04
and with stereo you get a little extra information of how far away different objects are.

00:51:06 --> 00:51:15
And so this is where one of our speakers on Friday will talk about his expertise (SLAM) Simultaneous Localization and Mapping.

00:51:14 --> 00:51:25
This is a very well-studied and understood problem of detecting unique features in the external scene

00:51:25 --> 00:51:32
and localizing yourself based on the trajectory of those unique features.

00:51:32 --> 00:51:37
When the number of features is high enough it becomes an optimization problem.

00:51:37 --> 00:51:42
You know this particular lane moved a little bit from frame to frame you can track that information.

00:51:43 --> 00:51:50
And fuse everything together in order to be able to estimate your trajectory through the three dimensional space.

00:51:50 --> 00:52:00
You also have other sensors to help you out. You have GPS which is pretty accurate, not perfect but pretty accurate.

00:51:59 --> 00:52:02
It's another signal to help you localize yourself.

00:52:02 --> 00:52:06
You also have IMU. Accelerometer

00:52:05 --> 00:52:16
tells you your acceleration, from the gyroscope, the accelerometer, you have the six degree of freedom

00:52:15 --> 00:52:25
of movement information about how the moving object, the car, is navigating through space.

00:52:25 --> 00:52:35
So you can do that using the old school way of optimization.

00:52:36 --> 00:52:47
Given a unique set of features, like sift features, and that step involves with stereo input understorting and

00:52:46 --> 00:52:54
rectifying the images. You have two images, from the two images compute the depth map but for every single pixel

00:52:53 --> 00:52:55
computing the

00:52:54 --> 00:53:07
best estimate of the depth of that pixel, the three dimensional position, relative to the camera then you

00:53:06 --> 00:53:14
compute, that's where you compute the disparity map, that's what that's called, from which you get the distance

00:53:14 --> 00:53:20
then you detect unique, interesting features in the scene. Sift is a popular one.

00:53:20 --> 00:53:26
It's a popular algorithm for detecting unique features and you, over time, track those features.

00:53:26 --> 00:53:34
And that tracking is what allows you through the vision alone to get information about your trajectory

00:53:33 --> 00:53:41
through three-dimensional space. You estimate that trajectory. There's a lot of assumptions, assumptions that bodies are rigid.

00:53:42 --> 00:53:50
So you have to figure out if a large object passes right in front of you, you have to figure out what that was.

00:53:52 --> 00:54:00
You have to figure out mobile objects in the scene. And those are the stationary.

00:54:00 --> 00:54:09
Or you can cheat or we'll talk about and do it using neural networks end-to-end.

00:54:09 --> 00:54:16
Now what does end-to-end mean? And this will come up a bunch of times throughout this class and today. End-to-end means,

00:54:17 --> 00:54:29
and I refer to it as cheating because it takes away a lot of the hard work of panageneric features. You take the raw input

00:54:28 --> 00:54:38
of whatever sensors. In this case, it's taking stereo input from a stereo vision cameras so two images, a sequence of two

00:54:37 --> 00:54:47
images coming from a stereo vision camera, and the output is a estimate of your trajectory through space.

00:54:47 --> 00:54:54
So it's supposed to be doing the hard work of SLAM, of detecting unique features, of localizing yourself, of tracking those

00:54:53 --> 00:54:59
features and figuring out where your trajectory is. You simply train the network.

00:54:59 --> 00:55:04
With some Ground Truth, you have form a more accurate sensor like lidar,

00:55:04 --> 00:55:09
and you train it on a set of inputs, the stereo vision inputs,

00:55:09 --> 00:55:18
and outputs is the trajectory through space. You have a separate convolutional neural networks for the velocity

00:55:18 --> 00:55:25
and for the orientation. And this works pretty well. Unfortunately, not quite well

00:55:25 --> 00:55:36
and John Leonard will talk about that. SLAM is one of the places were deep learning is not being able to outperform the

00:55:35 --> 00:55:37
previous approaches.

00:55:37 --> 00:55:45
Where deep learning really helps is the scene understanding part. It's interpreting the objects in the scene.

00:55:45 --> 00:55:51
It's detecting the various parts of the scene, segmenting them

00:55:51 --> 00:55:59
and with optical flow determining their movement. So previous approaches for detecting objects

00:56:00 --> 00:56:09
like the traffic signal, the classification of detection that we have the TensorFlow tutorial for

00:56:09 --> 00:56:18
to use car-like features or other types of features that are hard-engineered from the images.

00:56:18 --> 00:56:25
Now we can use convolutional neural networks to replace the extraction of those features.

00:56:30 --> 00:56:35
And there's TensorFlow implementation of SegNet

00:56:35 --> 00:56:44
which is taking the exact same neural network that I talked about. It's the same thing, the beauty is you just apply

00:56:44 --> 00:56:48
similar types of networks to different problems

00:56:47 --> 00:56:56
and depending on the complexity of the problem, can get quite amazing performance. In this case, we convolutionize

00:56:55 --> 00:57:02
network, meaning the output is an image, input is an image, a single monocular image. The output is a

00:57:03 --> 00:57:11
segmented image where the colors indicate your best pixel-by-pixel estimate of what object is in that part.

00:57:10 --> 00:57:16
This is not using any spatial information, it's not using any temporal information.

00:57:16 --> 00:57:25
So it's processing every single frame separately and it's able to separate the road from the trees,

00:57:25 --> 00:57:30
from the pedestrians, other cars, and so on.

00:57:30 --> 00:57:40
This is intended to lie on top of a radar / lidar type of technology that's giving you the three dimensional

00:57:39 --> 00:57:46
or stereo vision three-dimensional information about the scene. You're, sort of, painting that scene with the identity of

00:57:45 --> 00:57:50
the objects that are in it, your best estimate of it.

00:57:50 --> 00:57:57
This is something I'll talk about tomorrow is recurring neural networks

00:57:56 --> 00:58:03
and we can use recurring neural networks that work with temporal data to process video

00:58:02 --> 00:58:12
and also process audio. In this case, we can process what's shown on the bottom is

00:58:11 --> 00:58:16
a spectrogram of audio for a wet road and a dry road.

00:58:16 --> 00:58:21
You can look at that spectrogram as an image

00:58:22 --> 00:58:31
and process it in a temporal way using recurring neural networks. Just slide it across and keep feeding it to a network.

00:58:31 --> 00:58:40
And it does incredibly well on the simple tasks, certainly of dry road versus wet road. This is important,

00:58:39 --> 00:58:50
a subtle, but very important task and there's many like it to know the road, the texture, the quality.,

00:58:50 --> 00:58:54
the characteristics of the road, wetness being a critical one.

00:58:53 --> 00:58:58
When it's not raining but the road is still wet, that information is very important.

00:59:00 --> 00:59:14
Okay, so for movement planning. The same kind of approach. On the right is work from one of our other speakers

00:59:13 --> 00:59:23
Sertec Karaman. The same approach we're using to solve traffic through friendly competition

00:59:23 --> 00:59:33
is the same that we can use for what Chris Gerdes does with his race cars for planning trajectories in high speed movement

00:59:33 --> 00:59:38
along complex curve.

00:59:40 --> 00:59:47
So we can solve that problem using optimization, solve the control problem using optimization,

00:59:46 --> 00:59:51
or we can use it with reinforcement learning by running

00:59:51 --> 00:59:57
tens of millions, hundreds of millions of times through that simulation of taking that curve

00:59:56 --> 01:00:00
and learning which trajectory doesn't both optimizes

00:59:59 --> 01:00:04
the speed at which you take the turn

01:00:03 --> 01:00:11
and the safety of the vehicle. Exactly the same thing that you're using for traffic.

01:00:12 --> 01:00:20
And for driver state, this is what will talk about next week. It's all the fun face stuff: eyes, face, emotion.

01:00:21 --> 01:00:30
This is with video of the driver, video of the driver's body, video the driver's face. On the left is one of the TAs

01:00:30 --> 01:00:43
in his younger days. Still looks the same. There he is. So in that particular case,

01:00:43 --> 01:00:52
you're doing one of the easier problems which is one of detecting where the head and the eyes are positioned.

01:00:51 --> 01:00:55
The head and eye pose. You know it determine what's called

01:00:55 --> 01:01:02
he gaze of the driver, where the driver's looking, glance. And so,

01:01:01 --> 01:01:10
we'll talk about these problems. From the left to the right: on the left in green are the easier problems; on the red

01:01:09 --> 01:01:13
are the harder from the computer vision aspect.

01:01:13 --> 01:01:19
So on the left is body pose, head pose. The larger the object the easier it is the detect

01:01:18 --> 01:01:21
and the orientation of it is easier to detect.

01:01:20 --> 01:01:29
And then there is pupil diameter. Detecting the pupil, the characteristics, the position, the size of the pupil.

01:01:29 --> 01:01:32
And there's micro saccade, things that happen

01:01:31 --> 01:01:42
at one millisecond frequency, the tremors of the eye. All important information to determine the state of the driver.

01:01:41 --> 01:01:52
Some are possible computer vision, some are not. This is something that we'll talk about, I think, on Thursday.

01:01:52 --> 01:01:59
Is the detection of where the driver's looking. So, this is a bunch of the cameras that we have in the Tesla. This is

01:01:58 --> 01:02:06
Dan driving a Tesla and detecting exactly where of one of six regions

01:02:05 --> 01:02:13
We've converted into a classification problem of left, right, rear view mirror instrument cluster center stack

01:02:12 --> 01:02:16
or forward roadway. So we have to determine out of those six categories

01:02:15 --> 01:02:24
which direction is the driver looking at. This is important for driving. We don't care exactly the X, Y, Z

01:02:23 --> 01:02:28
position of where the driver is looking at. We care that they're looking at the road or not.

01:02:27 --> 01:02:32
Are they looking at their cell phone in their lap or are they looking at the forward roadway?

01:02:31 --> 01:02:36
And we'll be able to answer that pretty effectively using convolutional neural networks.

01:02:45 --> 01:02:52
You can also look at emotion using CNNs to extract,

01:02:52 --> 01:03:01
again converting emotion, the complex world of emotion, into a binary problem of frustrated versus satisfied.

01:03:02 --> 01:03:09
This is the video of drivers interacting with a voice navigation system. If you've ever used one,

01:03:08 --> 01:03:11
you know that may be a source of frustration from folks.

01:03:12 --> 01:03:17
And so this is self reported, this is one of the hard, you know, driver

01:03:16 --> 01:03:24
emotion if you're in what's called "Effective Computing." It's the field of studying emotion from the computational side.

01:03:25 --> 01:03:29
If you work in that field,

01:03:28 --> 01:03:33
you know that the annotation side of emotion is really challenging one.

01:03:32 --> 01:03:37
So getting the Ground Truth of, well okay since this guy's smiling

01:03:37 --> 01:03:46
so can I label that as happy or he's frowning because that mean he's sad. Most effective computing folks do just that.

01:03:46 --> 01:03:53
In this case we self report ask people how frustrated they're were in a scale of 1 to 10.

01:03:53 --> 01:04:01
Dan up top reported a "1" for not frustrated, he's satisfied with the interaction,

01:04:00 --> 01:04:07
and the other driver reported as a "9" he was very frustrated with the interaction. And what you notice

01:04:06 --> 01:04:12
is there is a very cold, stoic look on Dan's face which is an indication of happiness.

01:04:12 --> 01:04:18
And in the case of frustration, the driver is smiling.

01:04:18 --> 01:04:25
So this is a sort of a good reminder that we can't trust our own human instincts.

01:04:24 --> 01:04:35
It's an engineering feature. Engineering the ground truth. We have to trust the data, trust the Ground Truth

01:04:34 --> 01:04:40
at we believe is the closest reflection of the actual semantics of what's going on in the scene.

01:04:44 --> 01:04:50
Okay, so end-to-end driving. Getting to the the project and the tutorial.

01:04:49 --> 01:05:05
So if driving is like a conversation and, thank you for someone to clarifying, that this is the Arch of Triumph

01:05:04 --> 01:05:08
in Paris in this video.

01:05:08 --> 01:05:19
If driving is like a natural language conversation, then we can think of end-to-end driving as skipping the entire Turing Test

01:05:18 --> 01:05:24
components and treating it as an end-to-end natural language generation.

01:05:24 --> 01:05:30
So what we do is we take as input the external sensors

01:05:29 --> 01:05:37
and output, the control of the vehicle. And the magic happens in the middle.

01:05:38 --> 01:05:42
We replace that entire step with a neural network.

01:05:43 --> 01:05:54
TAs told me to not include this image because it's the cheesiest we've ever seen. I apologize. Thank you, thank you.

01:05:56 --> 01:05:59
I regret nothing.

01:06:00 --> 01:06:07
So this is to show our path to self-driving cars

01:06:06 --> 01:06:13
but it still explain a point that we have a large data set of Ground Truth.

01:06:13 --> 01:06:18
If we were to formulate the driving task to simply taking external images

01:06:18 --> 01:06:25
and producing steering commands, acceleration of braking commands, then we have a lot of Ground Truth.

01:06:25 --> 01:06:32
We have a large number of drivers on the road every day driving

01:06:31 --> 01:06:39
and, therefore, collecting our Ground Truth for us because they're an interested party in producing the steering commands

01:06:38 --> 01:06:45
that keep them alive and, therefore, if we were to record that data it becomes Ground Truth.

01:06:44 --> 01:06:47
So if it's possible to learn this,

01:06:46 --> 01:06:51
what we can do is we can collect data for the manually controlled vehicles

01:06:50 --> 01:06:59
and use that data to train an algorithm to control a self-driving vehicle.

01:07:01 --> 01:07:10
Okay, so one of the first folks who did this is Nvidia where they actually train in an external image, the image of the forward roadway.

01:07:10 --> 01:07:18
and a neural network, a convolutional network, a simple vanilla convolutional neural network I'll briefly outline:

01:07:18 --> 01:07:23
take an image in, produce a steering command out

01:07:23 --> 01:07:34
and they're able to successfully, to some degree, learn to navigate basic turns, curves and even stop

01:07:33 --> 01:07:43
or make sharp turns at a keener section. So this this now work is simple.

01:07:43 --> 01:07:52
There is input on the bottom, output up top. The input is a 66x200 pixel image, RGB.

01:07:54 --> 01:07:59
Shown on the left is the raw input and then you crop it a little bit and resize it down

01:07:59 --> 01:08:08
66x200. That's what we have in the code as well in the two versions of the code we'll provide to you.

01:08:07 --> 01:08:20
Both that runs in the browser and in TensorFlow. It has a few layers. A few convolutional layers, a few fully connected layers.

01:08:20 --> 01:08:24
And an output. This is a regression network.

01:08:24 --> 01:08:30
It's producing not a classification of cat versus dog, it's producing a steering command.

01:08:29 --> 01:08:40
How do I turn the steering wheel? That's it. The rest is magic and we train it on a human input.

01:08:44 --> 01:08:54
What we have here is a project, is an implementation of the system in ConvNetJS that runs in your browser.

01:08:54 --> 01:09:08
This is the tutorial to follow and the project to take on. So unlike the DeepTraffic game, this is reality.

01:09:07 --> 01:09:11
This is a real input from real vehicles.

01:09:11 --> 01:09:22
So you can go to this link. Demo went wonderfully yesterday so let's see, maybe two for two.

01:09:32 --> 01:09:40
There's the tutorial and then the actual game, the actual simulation is on DeepTesla.JS, I apologize.

01:09:46 --> 01:09:54
Everyone is going there now, aren't they? Does it work on a phone? It does, great.

01:09:57 --> 01:10:07
Again similar structure up top is the visualization of the lost function as the network is learning

01:10:06 --> 01:10:09
and it's always training.

01:10:12 --> 01:10:22
Next is the input for the layout of the network, there's the specification of the input 200x66.

01:10:22 --> 01:10:31
There's a convolutional layer. There's a pooling layer and the output is a regression layer. A single neuron.

01:10:31 --> 01:10:39
This is a tiny version, DeepTiny, right? It's a tiny version of

01:10:40 --> 01:10:50
the Nvidia architecture and then you can visualize the operation of this network on real video.

01:10:53 --> 01:11:00
The actual wheel value that produced by the driver, by the autopilot system,

01:11:00 --> 01:11:05
is in blue and the output of the network is in white.

01:11:08 --> 01:11:19
And what's indicated by green is the cropping of the image that is then resized to produce the 66x200

01:11:18 --> 01:11:30
input to the network. So once again, amazingly, this is running in your browser, training on real world video.

01:11:29 --> 01:11:36
So you can get in your car today input it and maybe teach a neural network to drive like you.

01:11:36 --> 01:11:38
We have the code in ConvNetJS

01:11:38 --> 01:11:50
and TensorFlow to do that and the tutorial. Well, let me briefly describe some of the work here.

01:11:50 --> 01:11:55
So the input to the network as a single image.

01:11:54 --> 01:12:02
This is for DeepTesla.JS, single image and the output is a steering wheel value between -20 and 20.

01:12:02 --> 01:12:08
That's in degrees. We record,

01:12:08 --> 01:12:17
like I said, thousands of hours but we provide publicly 10 video clips of highway driving from a Tesla.

01:12:17 --> 01:12:28
Half are driven by autopilot, half are driven by human. The wheel values extracted from a perfectly synchronized

01:12:29 --> 01:12:34
CAN, we are collecting all of the messages from CAN,

01:12:33 --> 01:12:41
which contains steering wheel value and that's synchronized to the video. We crop, extract the window. The green one I mentioned.

01:12:42 --> 01:12:45
And then provide that as input to the network.

01:12:46 --> 01:12:54
So this is a slight difference from DeepTraffic with the red car weaving through traffic because there is the messy

01:12:53 --> 01:12:57
reality of real world lighting conditions.

01:12:57 --> 01:13:05
And your task for the most part, in this simple steering task, is to stay inside the lane,

01:13:05 --> 01:13:15
inside the lane markings. In an end-to-end way, learn to do just that. So ConvNetJS

01:13:14 --> 01:13:26
is a javascript implementation of CNNs, of convolutional neural networks. It supports really arbitrary networks.

01:13:26 --> 01:13:33
I mean all neural networks are simple but because it runs in javascript it's not utilizing GPU.

01:13:33 --> 01:13:40
The larger the network the more it's going to be weighed down computationally.

01:13:40 --> 01:13:45
Now unlike DeepTraffic, this isn't a competition

01:13:45 --> 01:13:51
but if you are a student registered for the course you still do have to submit the code, you still have to submit your own

01:13:50 --> 01:14:02
car as part of the class. Question. So the question was the amount of data that's needed.

01:14:03 --> 01:14:11
Is there a general rules of thumb for the amount of data needed for a particular task in driving for example?

01:14:11 --> 01:14:13
It's a good question.

01:14:13 --> 01:14:24
You generally have to, like I said, neural networks are good memorizers so you have to just have every case represented in the

01:14:23 --> 01:14:33
training said that you're interested in. As much as possible, so that means, in general if you want a picture, if you want to

01:14:32 --> 01:14:38
classify the difference between cats and dogs, you want to have at least a thousand cats and a thousand dogs

01:14:37 --> 01:14:47
and they do really well. The problem with driving is twofold: one, is that most of the time driving looks the same.

01:14:47 --> 01:14:52
And the stuff you really care about is when driving looks different. It's all the edge cases.

01:14:52 --> 01:15:00
So we're not good with neural networks is generalizing from the common case to the edge cases, to the outliers.

01:15:00 --> 01:15:03
So avoiding a crash

01:15:02 --> 01:15:08
just because you can stand the highway for thousands of hours successfully doesn't mean you can avoid a crash with

01:15:07 --> 01:15:10
somebody runs in front of you on the road

01:15:10 --> 01:15:21
and the other part with driving is the accuracy you have to achieve is really high. So for cat versus dog,

01:15:20 --> 01:15:29
No, life doesn't depend on your error. On your ability to steer a car inside of the lane.

01:15:28 --> 01:15:37
You better be very close to 100% accurate. There's a box for designing the network.

01:15:36 --> 01:15:42
There's a visualization of the metrics measuring the performance of the network as it trains.

01:15:42 --> 01:15:51
There is a visualization, layer visualization, of what features the network is extracting at every convolutional layer

01:15:51 --> 01:15:59
and every fully connected layer. There is ability to restart the training.

01:15:59 --> 01:16:16
Visualize the network performing on real video. There is the input layer, the convolutional layers.

01:16:19 --> 01:16:34
The video visualization, an interesting tidbit on the bottom right is a barcode that Will has ingeniously designed.

01:16:36 --> 01:16:40
How do I clearly explain why this is so cool?

01:16:40 --> 01:16:48
It's a way to through video synchronized multiple streams of data together,

01:16:47 --> 01:16:54
so it's very easy for those who have worked with multi-modal data where there are several streams of data

01:16:53 --> 01:17:02
for them to become unsynchronized especially when a big component of training a neural network is shuffling the data.

01:17:02 --> 01:17:05
So you have to shuffle the data in clever ways

01:17:05 --> 01:17:11
o you're not overfitting any one little aspect of the video and yet maintain the data perfectly synchronized.

01:17:11 --> 01:17:17
So what he did instead doing the hard work of connecting the steering wheel

01:17:16 --> 01:17:24
and in the video is actually putting the steering on top of the video as a barcode.

01:17:25 --> 01:17:37
The final result is you can watch the network operate and over time it learns more and more to steer correctly.

01:17:37 --> 01:17:42
I'll fly through this a little bit in the interest of time just kind of summarize some of the things that you can play

01:17:41 --> 01:17:50
with in terms of tutorials and let you guys go. This is the same kind of process end-to-end driving with

01:17:49 --> 01:17:58
So we have code available on GetHub. You just put up on my GetHub and the DeepTesla.

01:17:57 --> 01:18:04
That takes in a single video or an arbitrary number of videos trains on them

01:18:03 --> 01:18:10
and produces a visualization that compares the steering wheel, the actual steering wheel and the predicted steering wheel.

01:18:11 --> 01:18:17
The steering wheel, when it agrees with the human driver or the autopilot system lighting up as green

01:18:16 --> 01:18:21
and when it disagrees, lighting up as red. Hopefully not too often.

01:18:21 --> 01:18:27
Again, this is some of the details of how that's exactly done in TensorFlow.

01:18:26 --> 01:18:29
This is vanilla convolution neural networks.

01:18:29 --> 01:18:40
Specifying a bunch of layers, convolutional layers, a fully connected layer, train the model, so you iterate over the batches of images.

01:18:42 --> 01:18:54
Run the model over a test set of images and get this result. We have a tutorial

01:18:55 --> 01:19:00
on iPython Notebook into the tutorial up on this.

01:18:59 --> 01:19:07
This is perhaps the best way to get started with convolutional neural networks in terms of our class. It's looking at the

01:19:06 --> 01:19:15
simplest image classification problem, of traffic light classification. So we have these images of traffic lights.

01:19:14 --> 01:19:18
We did the hard work of detecting them for you.

01:19:17 --> 01:19:23
So now you have to figure out, you have to build the convolutional network that gets

01:19:24 --> 01:19:34
figures out the concept of color and gets excited when it sees red, yellow or green. If anyone has questions,

01:19:34 --> 01:19:40
I'll welcome those. You can stay after class if you have any concerns with Docker,

01:19:39 --> 01:19:51
with TensorFlow, with how to win DeepTraffic. Just stay after class or come by Friday, 5 to 7. See you guys tomorrow.

<!-- YOUTUBE_TRANSCRIPT_END -->
