---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "u6aEYuemt0M"
title: "Deep Learning for Computer Vision (Andrej Karpathy, OpenAI)"
video_url: "https://www.youtube.com/watch?v=u6aEYuemt0M"
thumbnail_url: "https://i.ytimg.com/vi/u6aEYuemt0M/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=u6aEYuemt0M"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 5116
duration_human: "1:25:16"
view_count: 181256
like_count: 2860
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:23:22.292Z"
---

# Deep Learning for Computer Vision (Andrej Karpathy, OpenAI)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=u6aEYuemt0M
- video_id: u6aEYuemt0M
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 1:25:16
- view_count: 181256
- like_count: 2860
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning
- categories: Science & Technology

## Description

The talks at the Deep Learning School on September 24/25, 2016 were amazing. I clipped out individual talks  from the full live streams and provided links to each below in case that's useful for people who want to watch specific talks several times (like I do). Please check out the official website (http://www.bayareadlschool.org) and full live streams below.

Having read, watched, and presented deep learning material over the past few years, I have to say that this is one of the best collection of introductory deep learning talks I've yet encountered. Here are links to the individual talks and the full live streams for the two days:

1. Foundations of Deep Learning (Hugo Larochelle, Twitter) - https://youtu.be/zij_FTbJHsk
2. Deep Learning for Computer Vision (Andrej Karpathy, OpenAI) - https://youtu.be/u6aEYuemt0M
3. Deep Learning for Natural Language Processing (Richard Socher, Salesforce) - https://youtu.be/oGk1v1jQITw
4. TensorFlow Tutorial (Sherry Moore, Google Brain) - https://youtu.be/Ejec3ID_h0w
5. Foundations of Unsupervised Deep Learning (Ruslan Salakhutdinov, CMU) - https://youtu.be/rK6bchqeaN8
6. Nuts and Bolts of Applying Deep Learning (Andrew Ng) - https://youtu.be/F1ka6a13S9I
7. Deep Reinforcement Learning (John Schulman, OpenAI) - https://youtu.be/PtAIh9KSnjo
8. Theano Tutorial (Pascal Lamblin, MILA) - https://youtu.be/OU8I1oJ9HhI
9. Deep Learning for Speech Recognition (Adam Coates, Baidu) - https://youtu.be/g-sndkf7mCs
10. Torch Tutorial (Alex Wiltschko, Twitter) - https://youtu.be/L1sHcj3qDNc
11. Sequence to Sequence Deep Learning (Quoc Le, Google) - https://youtu.be/G5RY_SUJih4
12. Foundations and Challenges of Deep Learning (Yoshua Bengio) - https://youtu.be/11rsu_WwZTc

Full Day Live Streams:
Day 1: https://youtu.be/eyovmAtoUx0
Day 2: https://youtu.be/9dXiAecyJrY

Go to http://www.bayareadlschool.org for more information on the event, speaker bios, slides, etc. Huge thanks to the organizers (Shubho Sengupta et al) for making this event happen.

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- Show your support: https://www.patreon.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
Yeah. So thank you very much for the

00:00:01 --> 00:00:06
introduction. Uh so today I'll speak

00:00:04 --> 00:00:09
about uh deep learning especially in the

00:00:05 --> 00:00:10
context of computer vision. So what you

00:00:08 --> 00:00:12
saw in the previous talk is neural

00:00:09 --> 00:00:14
networks. Uh so you saw that neural

00:00:11 --> 00:00:16
networks are organized into these layers

00:00:13 --> 00:00:18
fully connected layers where neurons in

00:00:15 --> 00:00:19
one layer are not connected but they're

00:00:17 --> 00:00:21
connected fully to all the neurons in

00:00:18 --> 00:00:23
the previous layer. And we saw that

00:00:20 --> 00:00:26
basically we have this um layer-wise

00:00:22 --> 00:00:27
structure from input until output um and

00:00:25 --> 00:00:30
there are neurons and nonlinearities

00:00:26 --> 00:00:32
etc. Now, so far we have not made too

00:00:29 --> 00:00:33
many assumptions about the inputs. So,

00:00:31 --> 00:00:35
in particular here, we just assume that

00:00:32 --> 00:00:37
an input is some kind of a vector of

00:00:34 --> 00:00:41
numbers that we plug into this neural

00:00:36 --> 00:00:43
network. So, um that's both a bug and a

00:00:40 --> 00:00:45
feature to some extent. Uh because in

00:00:42 --> 00:00:46
most um in most real world applications,

00:00:44 --> 00:00:48
we actually can make some assumptions

00:00:45 --> 00:00:52
about the input that make learning much

00:00:47 --> 00:00:53
more efficient. Uh um that makes

00:00:51 --> 00:00:56
learning much more efficient. So in

00:00:52 --> 00:00:58
particular um usually we don't just want

00:00:55 --> 00:01:00
o plug in uh into neural networks

00:00:57 --> 00:01:01
vectors of numbers but they actually

00:00:59 --> 00:01:02
have some kind of a structure. So we

00:01:00 --> 00:01:05
don't have vectors of numbers but these

00:01:01 --> 00:01:07
numbers are arranged in some kind of a

00:01:04 --> 00:01:09
uh layout like an n- dimensional array

00:01:06 --> 00:01:10
of numbers. So for example spectrograms

00:01:08 --> 00:01:12
are two-dimensional arrays of numbers.

00:01:09 --> 00:01:13
Images are threedimensional arrays of

00:01:11 --> 00:01:15
numbers. Videos would be

00:01:12 --> 00:01:17
four-dimensional arrays of numbers. Text

00:01:14 --> 00:01:18
you could treat as one dimensional array

00:01:16 --> 00:01:21
of numbers. And so whenever you have

00:01:17 --> 00:01:22
this kind of local connectivity uh

00:01:20 --> 00:01:24
structure in your data then you'd like

00:01:21 --> 00:01:25
to take advantage of it and

00:01:23 --> 00:01:28
convolutional neural networks allow you

00:01:24 --> 00:01:29
to do that. So before I dive into

00:01:27 --> 00:01:31
convolutional neural networks and all

00:01:28 --> 00:01:33
the details of the architectures I'd

00:01:30 --> 00:01:34
like to uh briefly talk about a bit of

00:01:32 --> 00:01:36
the history of how this field evolved

00:01:33 --> 00:01:38
over time. So I like to start off

00:01:35 --> 00:01:40
usually with uh talking about hub and

00:01:37 --> 00:01:42
weasel and the experiments that they

00:01:39 --> 00:01:44
performed in 1960s. So what they were

00:01:41 --> 00:01:46
doing is trying to study the

00:01:43 --> 00:01:49
computations that happened in the early

00:01:45 --> 00:01:50
visual cortex areas of a cat. And so

00:01:48 --> 00:01:53
they had cat and they plugged in

00:01:49 --> 00:01:54
electrodes uh to that could record from

00:01:52 --> 00:01:56
the different uh neurons. And then they

00:01:54 --> 00:01:58
showed the cat different patterns of

00:01:55 --> 00:02:00
light and they were trying to debug

00:01:57 --> 00:02:01
neurons effectively and try to show them

00:01:59 --> 00:02:03
different patterns and see what they

00:02:00 --> 00:02:06
responded to. And a lot of these

00:02:02 --> 00:02:08
xperiments uh inspired some of the

00:02:05 --> 00:02:09
modeling that came in afterwards. So in

00:02:07 --> 00:02:11
particular, one of the early models that

00:02:08 --> 00:02:14
ried to take advantage of some of the

00:02:10 --> 00:02:16
results of these experiments where the

00:02:13 --> 00:02:19
um was the model called neurokcognitron

00:02:15 --> 00:02:20
from Fukushima in the 1980s. And so what

00:02:18 --> 00:02:22
you saw here was these uh this

00:02:19 --> 00:02:24
architecture that again is layer-wise

00:02:21 --> 00:02:25
similar to what you see in the cortex

00:02:23 --> 00:02:28
where you have these simple and complex

00:02:24 --> 00:02:30
cells where the simple cells detect

00:02:27 --> 00:02:32
small things in the visual field and

00:02:29 --> 00:02:33
then you have this local connectivity

00:02:31 --> 00:02:36
pattern and the simple and complex cells

00:02:32 --> 00:02:39
alternate in this layered architecture

00:02:35 --> 00:02:40
throughout. And so this was this looks a

00:02:38 --> 00:02:41
bit like a comnet because you have some

00:02:39 --> 00:02:43
of its features like say the local

00:02:40 --> 00:02:45
connectivity but at the time this was

00:02:42 --> 00:02:49
not trained with back propagation. These

00:02:44 --> 00:02:51
were specific heristically chosen uh u

00:02:48 --> 00:02:53
pdates that and this was unsupervised

00:02:50 --> 00:02:54
learning back then. So the first time

00:02:52 --> 00:02:56
that we've actually used back

00:02:53 --> 00:02:58
propagation to train some of these

00:02:55 --> 00:03:02
networks was an experiment of Yan Lakun

00:02:57 --> 00:03:03
in the 1990s. And so um this is an

00:03:01 --> 00:03:05
example of one of the networks that was

00:03:02 --> 00:03:07
developed back then in 1990s by Yan

00:03:04 --> 00:03:09
Lakun as Linet 5. And this is what you

00:03:06 --> 00:03:11
would recognize today as a convolutional

00:03:08 --> 00:03:13
neural network. So it has a lot of the

00:03:10 --> 00:03:15
very sim uh convolutional layers and

00:03:12 --> 00:03:17
it's alternating and it's a similar kind

00:03:14 --> 00:03:19
of design to what you would see in the

00:03:16 --> 00:03:21
Fukushima's neurocognitron but this was

00:03:18 --> 00:03:24
actually trained with back propagation

00:03:20 --> 00:03:27
end to end using supervised learning. Um

00:03:23 --> 00:03:29
now so this happened in roughly 1990s

00:03:26 --> 00:03:33
and we're here in 2016 basically about

00:03:28 --> 00:03:35
20 years later. Um now computer vision

00:03:32 --> 00:03:38
has

00:03:34 --> 00:03:40
u has for a long time kind of um worked

00:03:37 --> 00:03:42
on larger images and a lot of these

00:03:39 --> 00:03:44
models back then were applied to very

00:03:41 --> 00:03:46
small uh kind of settings like say

00:03:43 --> 00:03:48
recognizing uh digits um and zip codes

00:03:45 --> 00:03:50
and things like that and they were very

00:03:47 --> 00:03:51
successful in those domains. But back at

00:03:49 --> 00:03:54
least when I entered computer vision in

00:03:50 --> 00:03:55
roughly 2011 it was thought that a lot

00:03:53 --> 00:03:57
of people were aware of these models but

00:03:54 --> 00:04:00
it was thought that they would not scale

00:03:56 --> 00:04:02
up naively into large complex images

00:03:59 --> 00:04:04
that they would be constrained to these

00:04:01 --> 00:04:05
toy tasks for a long time or I shouldn't

00:04:03 --> 00:04:06
say toy because these were very

00:04:04 --> 00:04:09
important tasks but certainly like

00:04:06 --> 00:04:11
smaller visual recognition problems and

00:04:08 --> 00:04:13
so in computer vision in roughly 2011 it

00:04:10 --> 00:04:15
was much more common to use a kind of um

00:04:12 --> 00:04:17
these feature-based approaches at the

00:04:14 --> 00:04:19
time and they didn't work actually that

00:04:16 --> 00:04:20
well so when I entered my PhD in 200 1

00:04:18 --> 00:04:22
working on computer vision, you would

00:04:20 --> 00:04:25
run a state-of-the-art uh object

00:04:21 --> 00:04:27
detector on this image and you might get

00:04:24 --> 00:04:29
something like this uh where cars were

00:04:26 --> 00:04:30
detected in trees and you would kind of

00:04:28 --> 00:04:32
just shrug your shoulders and say,

00:04:29 --> 00:04:34
"Well, that just happens sometimes." You

00:04:31 --> 00:04:37
kind of just accept it as a as a

00:04:33 --> 00:04:38
something that would just happen. Um and

00:04:36 --> 00:04:39
of course this is a caricature. Things

00:04:37 --> 00:04:41
actually were like relatively decent. I

00:04:38 --> 00:04:42
should say, but uh definitely there

00:04:40 --> 00:04:46
were many mistakes that you would not

00:04:42 --> 00:04:48
see today about four years uh in 2016,

00:04:45 --> 00:04:50
five years later. And so a lot of uh

00:04:48 --> 00:04:51
computer vision kind of looked much more

00:04:49 --> 00:04:53
like this. When you look into a paper of

00:04:50 --> 00:04:54
trying that tried to do image

00:04:52 --> 00:04:56
classification, you would find this

00:04:54 --> 00:04:59
ection in the paper on the features

00:04:55 --> 00:05:03
that they used. So this is one page of

00:04:58 --> 00:05:06
eatures. And so they would use um yeah

00:05:02 --> 00:05:07
a gist etc. And then a second page of

00:05:05 --> 00:05:09
eatures and all their hyperparameters.

00:05:06 --> 00:05:11
So all kinds of different histograms and

00:05:08 --> 00:05:13
you would extract this kitchen sink of

00:05:10 --> 00:05:15
eatures and a third page here. And so

00:05:12 --> 00:05:17
you end up with uh this very large

00:05:14 --> 00:05:19
complex codebase because some of these

00:05:16 --> 00:05:20
feature types are implemented in MATLAB,

00:05:18 --> 00:05:21
some of them in Python, some of them in

00:05:19 --> 00:05:23
C++. And you end up with this large

00:05:20 --> 00:05:24
codebase of extracting all these

00:05:22 --> 00:05:26
features, caching them and then

00:05:23 --> 00:05:27
eventually plugging them into linear

00:05:25 --> 00:05:29
classifiers to do some kind of visual

00:05:26 --> 00:05:30
recognition task. So it was uh quite

00:05:28 --> 00:05:33
unwieldy

00:05:29 --> 00:05:34
uh but uh it worked to some extent but

00:05:32 --> 00:05:37
here were definitely room for

00:05:34 --> 00:05:39
improvement and so a lot of this changed

00:05:36 --> 00:05:42
uh in computer vision in 2012 with this

00:05:38 --> 00:05:44
paper from Alex Kepsky, Eliask and Jeff

00:05:41 --> 00:05:46
Hinton. So this is the first time that

00:05:43 --> 00:05:48
um someone took a convolutional neural

00:05:45 --> 00:05:51
network that is very similar to the one

00:05:47 --> 00:05:52
that you saw from 1998 from Yanakun and

00:05:50 --> 00:05:54
I'll go into details of how they differ

00:05:51 --> 00:05:56
exactly uh but they took that kind of

00:05:54 --> 00:05:58
network they scaled it up they made it

00:05:55 --> 00:06:00
much bigger and they trained on a much

00:05:57 --> 00:06:01
bigger data set on GPUs and things

00:05:59 --> 00:06:02
basically ended up working extremely

00:06:00 --> 00:06:04
well and this is the first time that

00:06:01 --> 00:06:06
computer vision community has really

00:06:03 --> 00:06:10
noticed these models and adopted them to

00:06:06 --> 00:06:12
work on larger images. So uh we saw that

00:06:09 --> 00:06:14
he performance uh of these models has

00:06:12 --> 00:06:18
improved drastically. Here we are

00:06:13 --> 00:06:20
looking at the imageet ILSVRC um visual

00:06:17 --> 00:06:22
recognition challenge over the years and

00:06:19 --> 00:06:24
we're looking at the top five errors. So

00:06:21 --> 00:06:26
low is good and you can see that from

00:06:23 --> 00:06:28
2010 uh in the beginning uh these were

00:06:25 --> 00:06:30
feature-based methods and then in 2012

00:06:27 --> 00:06:32
we had this huge jump in performance and

00:06:29 --> 00:06:34
that was due to um the first uh kind of

00:06:31 --> 00:06:36
convolutional neural network in 2012 and

00:06:34 --> 00:06:38
then we've managed to push that over

00:06:35 --> 00:06:40
time and now we're down to about

00:06:37 --> 00:06:43
3.57%. Uh I think the results for

00:06:39 --> 00:06:45
imageet 2000 imageet challenge 2016 are

00:06:42 --> 00:06:46
actually due to come out today but I

00:06:44 --> 00:06:49
don't think that actually they've come

00:06:45 --> 00:06:52
out yet. I have this second tab here

00:06:48 --> 00:06:53
opened.

00:06:51 --> 00:06:56
I was waiting for the result, but I I

00:06:52 --> 00:06:58
don't think this is up yet. Okay. No,

00:06:55 --> 00:07:00
nothing. All right. Well, we'll get to

00:06:57 --> 00:07:02
find out very soon what happens right

00:06:59 --> 00:07:04
here. Uh, so I'm very excited to see

00:07:01 --> 00:07:05
that. Uh, just to put this in context,

00:07:03 --> 00:07:08
by the way, because you're just looking

00:07:04 --> 00:07:10
at numbers like 3.57. How good is that?

00:07:07 --> 00:07:11
That's actually really really good. So,

00:07:09 --> 00:07:14
what something that I did about two

00:07:10 --> 00:07:16
years ago now is that I tried to measure

00:07:13 --> 00:07:18
human accuracy on this data set. And so

00:07:15 --> 00:07:20
what I did that uh for that is I

00:07:17 --> 00:07:22
developed this web interface where I

00:07:19 --> 00:07:24
would show myself imageet images from

00:07:21 --> 00:07:27
the test set. And then I had this

00:07:23 --> 00:07:28
interface here um where I would have all

00:07:26 --> 00:07:31
the different classes of imageet.

00:07:27 --> 00:07:32
There's 10,00 and some example images.

00:07:30 --> 00:07:34
And then basically you go down this list

00:07:31 --> 00:07:36
and you scroll for a long time and you

00:07:33 --> 00:07:38
find what class you think that image

00:07:35 --> 00:07:41
might be. And then I competed against

00:07:37 --> 00:07:44
he comnet uh at the time and this was

00:07:40 --> 00:07:47
Google net in 200 uh in

00:07:43 --> 00:07:49
2014. And uh so hot dog is a very simple

00:07:46 --> 00:07:51
class. You can do that quite easily. Uh

00:07:48 --> 00:07:53
but why is the accuracy not 0%. It well

00:07:50 --> 00:07:54
some of the things like hot dog seems

00:07:52 --> 00:07:56
very easy. Why isn't it trivial for

00:07:54 --> 00:07:57
humans to see? Well, it turns out that

00:07:55 --> 00:08:00
some of the images in a test set of

00:07:56 --> 00:08:02
imageet are actually mislabeled. But

00:07:59 --> 00:08:04
also some of the images are just very

00:08:01 --> 00:08:05
difficult to guess. So in particular, if

00:08:03 --> 00:08:07
you have this terrier, there's 50

00:08:04 --> 00:08:08
different types of terriers and it turns

00:08:06 --> 00:08:11
out to be very difficult task to find

00:08:07 --> 00:08:13
exactly which type of terrier that is.

00:08:10 --> 00:08:14
You can spend minutes trying to find it.

00:08:12 --> 00:08:16
Turns out that convolutional neural

00:08:14 --> 00:08:18
networks are actually extremely good at

00:08:15 --> 00:08:21
his and so this is where I would lose

00:08:17 --> 00:08:23
points compared to comnet. Um so I

00:08:20 --> 00:08:25
estimate that human accuracy based on

00:08:22 --> 00:08:27
this is roughly 2 to 5% range depending

00:08:24 --> 00:08:28
on how much time uh you have and how

00:08:26 --> 00:08:30
much expertise you have and how many

00:08:27 --> 00:08:32
people you involve and how much they

00:08:29 --> 00:08:34
really want to do this which is not too

00:08:31 --> 00:08:37
much and uh so really we're doing

00:08:33 --> 00:08:39
extremely well and so we're down to 3%

00:08:36 --> 00:08:42
and uh I think the error rate if I

00:08:38 --> 00:08:44
remember correctly was about 1.5%. So if

00:08:41 --> 00:08:46
we get below 1.5% I would be extremely

00:08:43 --> 00:08:49
suspicious on imageet. Uh that seems

00:08:45 --> 00:08:53
wrong. So to summarize basically what

00:08:48 --> 00:08:54
we've done is um before 2012 computer

00:08:52 --> 00:08:56
vision looked somewhat like this where

00:08:53 --> 00:08:58
we had these feature extractors and then

00:08:55 --> 00:09:00
we trained a small portion at the end of

00:08:57 --> 00:09:02
the feature extractor extraction step.

00:08:59 --> 00:09:03
And so we only trained this last piece

00:09:01 --> 00:09:05
on top of these features that were

00:09:02 --> 00:09:07
fixed. And we've basically replaced the

00:09:04 --> 00:09:09
feature extraction step with a single

00:09:06 --> 00:09:10
convolutional neural network. And now we

00:09:08 --> 00:09:12
train everything completely end to end.

00:09:09 --> 00:09:14
And this turns out to work uh quite

00:09:11 --> 00:09:16
nicely. So I'm going to go into details

00:09:13 --> 00:09:18
of how this works in a bit. Uh also in

00:09:15 --> 00:09:22
terms of code complexity uh we kind of

00:09:17 --> 00:09:24
went from a setup that looks whoops I'm

00:09:21 --> 00:09:26
way ahead. Okay. We went from a setup

00:09:23 --> 00:09:28
that looks something like that in papers

00:09:25 --> 00:09:30
to something like uh you know instead of

00:09:27 --> 00:09:32
extracting all these things we just say

00:09:29 --> 00:09:33
apply 20 layers with 3x3 combo or

00:09:31 --> 00:09:35
something like that and things work

00:09:32 --> 00:09:36
quite well. Uh this is of course an

00:09:34 --> 00:09:38
overexaggeration but I think it's a

00:09:35 --> 00:09:41
correct first order statement to make is

00:09:37 --> 00:09:42
that we've definitely seen um that we've

00:09:40 --> 00:09:43
reduced code complexity quite a lot

00:09:41 --> 00:09:46
because these architectures are so

00:09:42 --> 00:09:48
homogeneous compared to what we've done

00:09:45 --> 00:09:50
before. So it's also remarkable that so

00:09:47 --> 00:09:52
we had this reduction in complexity. We

00:09:49 --> 00:09:54
had this amazing performance on imageet.

00:09:51 --> 00:09:56
One other thing that was quite amazing

00:09:53 --> 00:09:58
about the results in 2012 that is also a

00:09:55 --> 00:10:00
separate thing that did not have to be

00:09:57 --> 00:10:02
the case is that the features that you

00:09:59 --> 00:10:04
learn by training on imageet turn out to

00:10:01 --> 00:10:06
be quite generic and you can apply them

00:10:03 --> 00:10:08
in different settings. So in other

00:10:05 --> 00:10:09
words, this transfer learning um works

00:10:07 --> 00:10:10
extremely well. And of course, I didn't

00:10:08 --> 00:10:12
go into details of convolutional

00:10:09 --> 00:10:14
networks yet, but uh we start with an

00:10:11 --> 00:10:15
image and we have a sequence of layers

00:10:13 --> 00:10:17
just like in a normal neural network.

00:10:14 --> 00:10:19
And at the end, we have a classifier.

00:10:16 --> 00:10:21
And when you pre-train this network on

00:10:18 --> 00:10:22
imageet, then it turns out that the

00:10:20 --> 00:10:24
features that you learn in the middle

00:10:21 --> 00:10:26
are actually transferable and you can

00:10:23 --> 00:10:28
use them on different data sets and that

00:10:25 --> 00:10:29
his works extremely well. And so that

00:10:27 --> 00:10:30
didn't have to be the case. You might

00:10:28 --> 00:10:32
imagine that you could have a

00:10:30 --> 00:10:33
convolutional network that works

00:10:31 --> 00:10:35
extremely well on imageet but when you

00:10:32 --> 00:10:36
try to run it on some something else

00:10:34 --> 00:10:38
like birds data set or something that it

00:10:35 --> 00:10:40
might just not work well but that is not

00:10:37 --> 00:10:42
he case and that's a very interesting

00:10:39 --> 00:10:45
finding in my opinion. So um people

00:10:41 --> 00:10:46
noticed this back in roughly 2013 after

00:10:44 --> 00:10:48
the first convolutional networks. They

00:10:46 --> 00:10:50
noticed that you can actually take many

00:10:47 --> 00:10:51
computer vision data sets and it used to

00:10:49 --> 00:10:52
be that you would compete on all of

00:10:50 --> 00:10:54
these kind of separately and design

00:10:51 --> 00:10:56
features maybe for some of these

00:10:53 --> 00:10:59
parately and you can just uh shortcut

00:10:55 --> 00:11:00
all those steps that we had designed and

00:10:58 --> 00:11:02
you can just take these pre-trained

00:10:59 --> 00:11:04
features that you get from ImageNet and

00:11:01 --> 00:11:05
you can just train a linear classifier

00:11:03 --> 00:11:07
on every single data set on top of those

00:11:04 --> 00:11:09
features and you obtain many

00:11:06 --> 00:11:10
state-of-the-art results across many

00:11:08 --> 00:11:12
different data sets. And so this was

00:11:09 --> 00:11:14
quite a remarkable finding back then I

00:11:11 --> 00:11:17
believe. So things worked very well on

00:11:13 --> 00:11:19
imageet. Things transferred very well

00:11:16 --> 00:11:21
and the code complexity of course got

00:11:18 --> 00:11:23
much uh much more manageable. So now all

00:11:20 --> 00:11:25
this power is actually available to you

00:11:22 --> 00:11:27
with very few lines of code. If you want

00:11:24 --> 00:11:29
o just use a convolutional network uh

00:11:26 --> 00:11:30
on images it turns out to be only a few

00:11:28 --> 00:11:32
lines of code. If you use for example

00:11:29 --> 00:11:33
caris is one of the deep learning

00:11:31 --> 00:11:36
libraries that I'm going to go into and

00:11:32 --> 00:11:37
I'll mention again later in the talk. Uh

00:11:35 --> 00:11:38
but basically you just load a

00:11:36 --> 00:11:40
state-of-the-art convolutional neural

00:11:37 --> 00:11:42
network. You take an image, you load it

00:11:39 --> 00:11:44
and you compute your predictions and it

00:11:42 --> 00:11:46
ells you that this is an African

00:11:43 --> 00:11:48
elephant inside that image. And this

00:11:45 --> 00:11:49
took a couple hund couple hundred or a

00:11:47 --> 00:11:51
couple 10 milliseconds if you have a

00:11:48 --> 00:11:53
GPU. And so everything got much faster,

00:11:50 --> 00:11:54
much simpler, works really well,

00:11:52 --> 00:11:56
transfers really well. So this was

00:11:53 --> 00:11:58
really a huge advance in computer

00:11:55 --> 00:12:00
vision. And so as a result of all these

00:11:57 --> 00:12:02
nice properties, uh, comnets today are

00:11:59 --> 00:12:04
verywhere. So here's a collection of

00:12:01 --> 00:12:07
some of the some of the things I I try

00:12:03 --> 00:12:08
to uh find across across different

00:12:06 --> 00:12:10
applications. So for example, you can

00:12:07 --> 00:12:12
search Google photos for different types

00:12:09 --> 00:12:15
of um categories like in this case

00:12:11 --> 00:12:18
Rubik's cubes. Um you can find house

00:12:14 --> 00:12:19
numbers very efficiently. You can of

00:12:17 --> 00:12:20
course this is very relevant in

00:12:18 --> 00:12:22
self-driving cars and we're doing

00:12:19 --> 00:12:23
perception in the cars. Convolutional

00:12:21 --> 00:12:25
networks are very relevant there.

00:12:22 --> 00:12:27
Medical image diagnosis recognizing

00:12:24 --> 00:12:30
Chinese characters uh doing all kinds of

00:12:26 --> 00:12:32
medical segmentation tasks. Uh quite

00:12:29 --> 00:12:34
random tasks like whale recognition and

00:12:31 --> 00:12:36
more generally many Kaggle challenges.

00:12:34 --> 00:12:38
uh satellite image analysis recognizing

00:12:36 --> 00:12:41
different types of galaxies. You may

00:12:37 --> 00:12:43
have seen recently that um a waveet from

00:12:40 --> 00:12:45
deep mind also a very interesting paper

00:12:42 --> 00:12:47
that they generate music and they

00:12:44 --> 00:12:49
generate speech. Uh and so this is a

00:12:46 --> 00:12:51
generative model and that's also just a

00:12:48 --> 00:12:52
comet is doing most of the heavy lifting

00:12:50 --> 00:12:56
here. So it's a convolutional network on

00:12:52 --> 00:12:58
top of sound and uh other tasks like

00:12:55 --> 00:13:00
image captioning in the context of

00:12:57 --> 00:13:01
reinforcement learning and agent in

00:12:59 --> 00:13:03
environment interactions. We've also

00:13:00 --> 00:13:04
seen a lot of advances of using comnets

00:13:02 --> 00:13:06
as the core computational building

00:13:03 --> 00:13:08
block. So when you want to play Atari

00:13:05 --> 00:13:10
games or you want to play Alph Go or

00:13:07 --> 00:13:12
Doom or Starcraft or if you want to get

00:13:10 --> 00:13:14
robots to perform interesting

00:13:11 --> 00:13:18
manipulation tasks, all of this uses

00:13:13 --> 00:13:20
comes as a core computational um block

00:13:17 --> 00:13:22
uh to do very impressive things. Uh not

00:13:19 --> 00:13:23
only are we using it for a lot of

00:13:21 --> 00:13:27
different application, we're also

00:13:22 --> 00:13:29
finding uses in art. So um so here are

00:13:26 --> 00:13:31
some examples from DeepDream. So you can

00:13:28 --> 00:13:33
basically uh simulate what it looks

00:13:30 --> 00:13:36
like, what it feels like maybe to be on

00:13:32 --> 00:13:37
some drugs. So you can take images and

00:13:35 --> 00:13:39
you can just hallucinate features using

00:13:36 --> 00:13:40
comnets or you might be familiar with

00:13:38 --> 00:13:42
neural style which allows you to take

00:13:39 --> 00:13:44
arbitrary images and transfer arbitrary

00:13:41 --> 00:13:46
styles of different paintings like Bango

00:13:43 --> 00:13:48
n top of them. And this is all using

00:13:45 --> 00:13:49
convolutional networks. The last thing

00:13:47 --> 00:13:51
I'd like to note that I find also

00:13:48 --> 00:13:54
interesting is that in the process of

00:13:50 --> 00:13:55
trying to develop better computer vision

00:13:53 --> 00:13:57
architectures and trying to basically

00:13:54 --> 00:13:59
optimize for performance on the imageet

00:13:56 --> 00:14:01
challenge, we've actually ended up

00:13:58 --> 00:14:02
converging to something that potentially

00:14:00 --> 00:14:04
might function something like your

00:14:01 --> 00:14:06
visual cortex in some ways. And so these

00:14:04 --> 00:14:08
are some of the experiments that I find

00:14:05 --> 00:14:11
interesting where they've studied macak

00:14:07 --> 00:14:14
monkeys uh and they record from a

00:14:10 --> 00:14:15
subpopul of the um of the IT cortex.

00:14:13 --> 00:14:17
This is the part that does a lot of

00:14:14 --> 00:14:19
object recognition and so they record.

00:14:16 --> 00:14:21
So basically they take a monkey and they

00:14:18 --> 00:14:22
take a comnet and they show them images

00:14:20 --> 00:14:24
and then you look at what those images

00:14:21 --> 00:14:26
are represented at the end of this

00:14:23 --> 00:14:28
network. So inside the monkeykey's brain

00:14:25 --> 00:14:29
or on top of your convolutional network.

00:14:27 --> 00:14:31
And so you look at representations of

00:14:28 --> 00:14:32
different images and then it turns out

00:14:30 --> 00:14:35
hat there's a mapping between those two

00:14:32 --> 00:14:37
spaces that actually seems to indicate

00:14:34 --> 00:14:38
to some extent that some of the things

00:14:36 --> 00:14:40
we're doing somehow ended up converging

00:14:37 --> 00:14:43
to something that the brain could be

00:14:39 --> 00:14:45
doing as well in the visual cortex. Um

00:14:42 --> 00:14:46
so that's just some intro. I'm now going

00:14:44 --> 00:14:50
to dive into convolutional networks and

00:14:45 --> 00:14:51
try to explain um the briefly how these

00:14:49 --> 00:14:53
networks work. Of course there's an

00:14:50 --> 00:14:55
entire class on this that I taught which

00:14:52 --> 00:14:57
is a convolutional networks class. And

00:14:54 --> 00:14:58
so I'm going to distill some of you know

00:14:56 --> 00:15:01
those 13 lectures into one lecture. So

00:14:58 --> 00:15:04
we'll see how that goes. I won't cover

00:15:00 --> 00:15:05
everything of course. Okay. So

00:15:03 --> 00:15:08
convolutional neural network is really

00:15:04 --> 00:15:09
just a single function. It goes from

00:15:07 --> 00:15:12
it's a function from the raw pixels of

00:15:08 --> 00:15:14
some kind of an image. So we take 224

00:15:11 --> 00:15:16
x24x3 image. So three here is for the

00:15:13 --> 00:15:18
color channels RGB. You take the raw

00:15:15 --> 00:15:19
pixels, you put it through this

00:15:17 --> 00:15:21
function, and you get 1,000 numbers at

00:15:18 --> 00:15:22
he end. In the case of image

00:15:20 --> 00:15:24
classification, if you're trying to

00:15:21 --> 00:15:27
categorize images into 1,000 different

00:15:23 --> 00:15:28
classes and really functionally all

00:15:26 --> 00:15:30
that's happening in a convolutional

00:15:27 --> 00:15:32
network is just dotproducts and max

00:15:29 --> 00:15:34
operations. That's everything. But

00:15:31 --> 00:15:35
hey're wired up together in interesting

00:15:33 --> 00:15:38
ways so that you are basically doing

00:15:34 --> 00:15:40
visual recognition. And in particular

00:15:37 --> 00:15:43
the this function f has a lot of knobs

00:15:40 --> 00:15:44
in it. So these ws here that participate

00:15:42 --> 00:15:46
in these dotproducts and in these

00:15:43 --> 00:15:48
convolutions and fully connected layers

00:15:45 --> 00:15:50
and so on these ws are all parameters of

00:15:47 --> 00:15:51
this network. So normally you might have

00:15:49 --> 00:15:53
about on the order of 10 million

00:15:50 --> 00:15:57
parameters and uh those are basically

00:15:52 --> 00:15:58
knobs that change this function. And so

00:15:56 --> 00:16:00
we'd like to change those knobs of

00:15:57 --> 00:16:02
course so that when you put images

00:15:59 --> 00:16:03
through that function you get

00:16:01 --> 00:16:05
probabilities that are consistent with

00:16:02 --> 00:16:07
your training data. And so that gives us

00:16:04 --> 00:16:09
a lot to tune and turns out that we can

00:16:06 --> 00:16:11
do that tuning automatically with back

00:16:08 --> 00:16:13
propagation uh through that search

00:16:10 --> 00:16:15
process. Now more concretely a

00:16:12 --> 00:16:17
convolutional neural network is made up

00:16:14 --> 00:16:18
of a sequence of layers just as in the

00:16:16 --> 00:16:20
case of normal neural networks. But we

00:16:17 --> 00:16:22
have different types of layers that we

00:16:19 --> 00:16:24
play with. Uh so we have convolutional

00:16:21 --> 00:16:27
ayers here I'm using rectified linear

00:16:23 --> 00:16:28
unit relu for short as a nonlinearity.

00:16:26 --> 00:16:31
Uh so I'm making that an explicit its

00:16:27 --> 00:16:34
own layer. Um pooling layers and fully

00:16:30 --> 00:16:35
connected layers. The core computational

00:16:33 --> 00:16:36
building block of a convolutional

00:16:34 --> 00:16:38
network though is this convolutional

00:16:35 --> 00:16:40
ayer and we have nonlinearities

00:16:37 --> 00:16:42
interspersed. We are probably getting

00:16:39 --> 00:16:43
rid of things like pooling layers. So

00:16:41 --> 00:16:45
you might see them slightly going away

00:16:42 --> 00:16:46
over time and fully connected layers can

00:16:44 --> 00:16:48
actually be represented. They're

00:16:45 --> 00:16:50
basically equivalent to convolutional

00:16:47 --> 00:16:52
ayers as well. And so really uh it's

00:16:49 --> 00:16:53
just a sequence of com layers in the

00:16:51 --> 00:16:55
simplest case. So let me explain

00:16:52 --> 00:16:56
convolutional layer because that's the

00:16:54 --> 00:16:59
core computational building block here

00:16:55 --> 00:17:03
that does all the heavy lifting.

00:16:59 --> 00:17:05
So the entire comnet is this collection

00:17:02 --> 00:17:06
of layers and these layers don't

00:17:04 --> 00:17:08
function over vectors. So they don't

00:17:05 --> 00:17:10
ransform vectors as a normal neural

00:17:07 --> 00:17:12
network but they function over volumes.

00:17:09 --> 00:17:13
So a layer will take a volume a

00:17:11 --> 00:17:15
threedimensional volume of numbers an

00:17:12 --> 00:17:18
array. In this case for example we have

00:17:14 --> 00:17:20
a 32x 32x3 image. So those three

00:17:17 --> 00:17:21
dimensions are the width, height and

00:17:19 --> 00:17:23
I'll refer to the third dimension as

00:17:20 --> 00:17:25
depth. We have three channels. Uh that's

00:17:22 --> 00:17:26
not to be confused with the depth of a

00:17:24 --> 00:17:28
network which is the number of layers in

00:17:25 --> 00:17:30
that network. So this is just the depth

00:17:27 --> 00:17:32
of a volume. So this convolutional layer

00:17:29 --> 00:17:34
accepts a threedimensional volume and it

00:17:31 --> 00:17:36
produces a threedimensional volume using

00:17:33 --> 00:17:37
some weights. So the way it actually

00:17:35 --> 00:17:39
produces this output volume is as

00:17:36 --> 00:17:41
follows. We're going to have these

00:17:38 --> 00:17:44
filters in a convolutional layer. So

00:17:40 --> 00:17:46
these filters are always small spatially

00:17:43 --> 00:17:49
like say for example 5x5 filter but

00:17:45 --> 00:17:52
heir depth extends always through the

00:17:48 --> 00:17:54
input depth of the uh input volume. So

00:17:51 --> 00:17:56
since the input volume has three

00:17:53 --> 00:17:58
channels, the depth is three, then our

00:17:55 --> 00:18:00
filters will always match that number.

00:17:57 --> 00:18:02
So we have depth of three in our filters

00:17:59 --> 00:18:04
as well. And then we can take those

00:18:01 --> 00:18:06
filters and we can basically convolve

00:18:03 --> 00:18:09
them with the input volume. So uh what

00:18:05 --> 00:18:11
hat amounts to is we take this filter.

00:18:08 --> 00:18:13
Um oh yeah, so that's just a point that

00:18:10 --> 00:18:15
he channels here must match. We take

00:18:12 --> 00:18:17
that filter and we slide it through all

00:18:14 --> 00:18:19
spatial positions of the input volume.

00:18:16 --> 00:18:21
And along the way as we're sliding this

00:18:18 --> 00:18:24
filter, we're computing dotproducts. So

00:18:20 --> 00:18:25
wrppose x plus b where w are the filters

00:18:23 --> 00:18:28
and x is a small piece of the input

00:18:24 --> 00:18:29
volume and b is the offset. And so this

00:18:27 --> 00:18:30
basically the convolutional

00:18:28 --> 00:18:32
operation. You're taking this filter and

00:18:29 --> 00:18:33
you're sliding it through at all spatial

00:18:31 --> 00:18:36
positions and you're computing that

00:18:32 --> 00:18:38
products. So when you do this you end up

00:18:35 --> 00:18:42
with this activation map. So in this

00:18:37 --> 00:18:44
case uh we get a 28x 28 activation map.

00:18:41 --> 00:18:46
28 comes from the fact that there are 28

00:18:43 --> 00:18:50
unique positions to place this 5x5

00:18:45 --> 00:18:52
filter into this 3 32x32 uh space. So

00:18:49 --> 00:18:53
there are 28 by 28 unique positions you

00:18:51 --> 00:18:55
can place that filter in. In every one

00:18:52 --> 00:18:58
of those you're going to get a single

00:18:54 --> 00:19:02
number of how well that filter likes

00:18:57 --> 00:19:04
that part of the input. Um so that

00:19:01 --> 00:19:05
carves out a single activation map. And

00:19:03 --> 00:19:06
now in a convolutional layer we don't

00:19:04 --> 00:19:08
just have a single filter but we're

00:19:05 --> 00:19:10
going to have an entire set of filters.

00:19:07 --> 00:19:12
So here's another filter a green filter.

00:19:09 --> 00:19:14
We're going to slide it through the

00:19:11 --> 00:19:17
input volume. It has its own parameters.

00:19:13 --> 00:19:18
So these there are 75 numbers here that

00:19:16 --> 00:19:20
basically make up a filter. there are

00:19:17 --> 00:19:22
different 75 numbers. We convolve them

00:19:19 --> 00:19:24
through get a new activation map and we

00:19:21 --> 00:19:26
continue doing this for all the filters

00:19:23 --> 00:19:28
in that convolutional layer. So for

00:19:25 --> 00:19:29
example, if we had six filters uh in

00:19:27 --> 00:19:32
this convolutional layer, then we might

00:19:28 --> 00:19:34
end up with 28x 28 activation maps six

00:19:31 --> 00:19:36
times and we stack them along the depth

00:19:33 --> 00:19:39
dimension to arrive at the output volume

00:19:35 --> 00:19:41
of 28x 28x 6. And so really what we've

00:19:38 --> 00:19:44
done is we've re-represented the

00:19:40 --> 00:19:48
original image which is 32x 32x3 into a

00:19:43 --> 00:19:50
kind of a new image that is 28x 28x 6 uh

00:19:47 --> 00:19:52
where this image basically has these six

00:19:49 --> 00:19:55
channels that tell you how well every

00:19:51 --> 00:19:56
filter matches or likes every part of

00:19:54 --> 00:19:59
the input

00:19:55 --> 00:20:01
image. So let's compare this operation

00:19:58 --> 00:20:03
to say using a fully connected layer as

00:20:00 --> 00:20:05
you would in a normal neural network.

00:20:02 --> 00:20:08
So in particular we saw that we

00:20:04 --> 00:20:11
processed a 32x 32x3 volume into 28x

00:20:07 --> 00:20:13
6 volume. And uh one question you

00:20:10 --> 00:20:15
might want to ask is how many parameters

00:20:12 --> 00:20:16
would this require if we wanted a fully

00:20:14 --> 00:20:19
connected layer of the same number of

00:20:15 --> 00:20:24
output neurons here? So we wanted 28 x

00:20:18 --> 00:20:26
28x 6 or time 28* 2 * 28 * 6 number of

00:20:23 --> 00:20:27
neurons fully connected. How many

00:20:25 --> 00:20:29
parameters would that be? Turns out that

00:20:26 --> 00:20:31
would be quite a few parameters,

00:20:28 --> 00:20:32
right? because every single neuron in

00:20:30 --> 00:20:35
the opted volume would be fully

00:20:31 --> 00:20:38
connected to all of the 32x 32x3 numbers

00:20:34 --> 00:20:41
here. So basically every one of those

00:20:37 --> 00:20:44
28x 28x 6 neurons is connected to 32x

00:20:40 --> 00:20:46
3 turns out to be about 15 million

00:20:43 --> 00:20:47
parameters and also on that order of

00:20:45 --> 00:20:48
number of multiplies. So you're doing a

00:20:46 --> 00:20:50
lot of compute and you're introducing a

00:20:47 --> 00:20:52
huge amount of parameters into your

00:20:49 --> 00:20:54
network. Now since we're doing

00:20:51 --> 00:20:56
convolution instead uh you'll notice

00:20:53 --> 00:20:58
that think about the number of

00:20:55 --> 00:21:00
parameters that we've introduced with

00:20:57 --> 00:21:04
is example convolutional layer. So

00:20:59 --> 00:21:07
we've used uh we had six filters and

00:21:03 --> 00:21:09
every one of them was a 5x5x3 filter. So

00:21:06 --> 00:21:11
basically we just have 5x5x3 filters. We

00:21:08 --> 00:21:13
have six of them. If you just multiply

00:21:10 --> 00:21:15
that out we have 450 parameters. And in

00:21:12 --> 00:21:16
this I'm not counting the biases. I'm

00:21:14 --> 00:21:18
just counting the raw weights. So

00:21:15 --> 00:21:21
compared to 15 million we've only

00:21:17 --> 00:21:22
introduced very few parameters. Also,

00:21:20 --> 00:21:24
how many multiplies have we done? So,

00:21:22 --> 00:21:27
computationally, how many flops are we

00:21:23 --> 00:21:29
doing? Uh, well, we have 28 by 28 by six

00:21:26 --> 00:21:32
outputs to produce. And every one of

00:21:28 --> 00:21:34
these numbers is a function of a 5x5x3

00:21:31 --> 00:21:37
region in the original image. So,

00:21:33 --> 00:21:38
basically, we have 28 x 28 by 6 and then

00:21:36 --> 00:21:41
there's every one of them is computed by

00:21:37 --> 00:21:43
doing 5* 5* 3 multiplies. So, you end up

00:21:40 --> 00:21:46
with only on the order of 350,000

00:21:42 --> 00:21:48
um multiplies. So, we've reduced from 15

00:21:45 --> 00:21:50
million to quite a few. So we're doing

00:21:47 --> 00:21:51
less flops and we're using fewer

00:21:49 --> 00:21:53
parameters. And really what we've done

00:21:50 --> 00:21:56
here is we've made assumptions, right?

00:21:52 --> 00:21:58
So we've made the assumption that

00:21:55 --> 00:21:59
because um the fully connected layer, if

00:21:57 --> 00:22:02
this was a fully connected layer, could

00:21:58 --> 00:22:04
compute the exact same thing. Uh but it

00:22:01 --> 00:22:05
would um so a specific setting of those

00:22:03 --> 00:22:07
15 million parameters would actually

00:22:04 --> 00:22:08
produce the exact output of this

00:22:06 --> 00:22:09
convolutional layer. But we've done it

00:22:07 --> 00:22:12
much more efficiently. We've done that

00:22:08 --> 00:22:14
by introducing um these biases. So in

00:22:12 --> 00:22:16
particular, we've made assumptions.

00:22:13 --> 00:22:17
We've assumed, for example, that since

00:22:15 --> 00:22:19
we have these fixed filters that we're

00:22:16 --> 00:22:20
sliding across space, we've assumed that

00:22:18 --> 00:22:22
if there's some interesting feature that

00:22:20 --> 00:22:24
you'd like to detect in one part of the

00:22:21 --> 00:22:25
image, like say top left, then that

00:22:23 --> 00:22:27
feature will also be useful somewhere

00:22:24 --> 00:22:29
lse like on the bottom right because we

00:22:26 --> 00:22:31
fix these filters and apply them at all

00:22:28 --> 00:22:33
the spatial positions equally. You might

00:22:30 --> 00:22:34
notice that this is not always something

00:22:32 --> 00:22:36
that you might want. For example, if

00:22:33 --> 00:22:37
you're getting inputs that are centered

00:22:35 --> 00:22:39
face images and you're doing some kind

00:22:36 --> 00:22:40
of a face recognition or something like

00:22:38 --> 00:22:42
that, then you might expect that you

00:22:39 --> 00:22:43
might want different filters at

00:22:41 --> 00:22:45
different spatial positions. Like say

00:22:42 --> 00:22:47
for eye regions you might want to have

00:22:44 --> 00:22:48
some eye like filters and for mouth

00:22:46 --> 00:22:50
region you might want to have mouth

00:22:47 --> 00:22:51
specific features and so on. And so in

00:22:49 --> 00:22:52
that case you might not want to use

00:22:50 --> 00:22:54
convolutional layer because those

00:22:52 --> 00:22:57
features have to be shared across all

00:22:53 --> 00:22:58
spatial positions. And the second um

00:22:56 --> 00:23:01
assumptions that we made is that these

00:22:57 --> 00:23:02
filters are small locally and so we

00:23:00 --> 00:23:04
don't have global connectivity. We have

00:23:01 --> 00:23:05
this local connectivity but that's okay

00:23:03 --> 00:23:08
because we end up stacking up these

00:23:04 --> 00:23:10
convolutional layers in sequence. And so

00:23:07 --> 00:23:12
this the neurons at the end of the

00:23:09 --> 00:23:14
comnet will grow their receptive field

00:23:11 --> 00:23:15
as you stack these convolutional layers

00:23:13 --> 00:23:17
on top of each other. So at the end of

00:23:14 --> 00:23:18
the comnet, those neurons end up being a

00:23:16 --> 00:23:20
function of the entire image

00:23:17 --> 00:23:22
ventually. So just to give you an idea

00:23:19 --> 00:23:24
bout what these activation maps look

00:23:21 --> 00:23:26
like concretely, here's an example of an

00:23:23 --> 00:23:28
image on the top left. This is a part of

00:23:25 --> 00:23:29
a car I believe. And we have these

00:23:27 --> 00:23:32
different filters at we have 32

00:23:28 --> 00:23:33
different small filters here. And so if

00:23:31 --> 00:23:34
we were to convolve these filters with

00:23:32 --> 00:23:37
is image, we end up with these

00:23:33 --> 00:23:39
activation maps. So this filter if you

00:23:36 --> 00:23:40
convolve it you get this activation map

00:23:38 --> 00:23:42
and so on. So this one for example has

00:23:39 --> 00:23:44
ome orange stuff in it. So when we

00:23:41 --> 00:23:45
convolve with this image you see that

00:23:43 --> 00:23:47
his white here is denoting the fact

00:23:44 --> 00:23:49
hat that filter matches that part of

00:23:46 --> 00:23:51
the image quite well. And so we get

00:23:48 --> 00:23:52
hese activation maps. You stack them up

00:23:50 --> 00:23:55
and then that goes into the next

00:23:52 --> 00:23:57
convolutional layer. So the way this

00:23:54 --> 00:24:00
looks then uh looks like then is that

00:23:56 --> 00:24:02
we've processed this with some kind of a

00:23:59 --> 00:24:04
convolutional layer. We get some output.

00:24:01 --> 00:24:06
We apply a rectified linear unit, some

00:24:03 --> 00:24:07
kind of a nonlinearity as normal and

00:24:05 --> 00:24:10
then we just repeat that operation. So

00:24:06 --> 00:24:12
we keep plugging these con volumes into

00:24:09 --> 00:24:14
the next convolutional layer and so they

00:24:11 --> 00:24:16
plug into each other in sequence. Okay?

00:24:13 --> 00:24:19
And so we end up processing the image

00:24:15 --> 00:24:20
over time. So that's the convolutional

00:24:18 --> 00:24:22
ayer. Now you'll notice that there are

00:24:19 --> 00:24:24
a few more layers. So in particular the

00:24:21 --> 00:24:28
pooling layer I'll explain very briefly.

00:24:23 --> 00:24:29
Um pooling layer is quite simple. Uh if

00:24:27 --> 00:24:30
you've used Photoshop or something like

00:24:28 --> 00:24:32
that, you've taken a large image and

00:24:30 --> 00:24:34
you've resized it, you've downsampled

00:24:31 --> 00:24:36
the image. Well, pooling layers do

00:24:34 --> 00:24:38
basically something exactly like that,

00:24:35 --> 00:24:40
but they're doing it on every single

00:24:37 --> 00:24:42
channel independently. So for every one

00:24:39 --> 00:24:44
of these channels independently in a

00:24:41 --> 00:24:47
input volume, we'll pluck out that

00:24:43 --> 00:24:49
activation map. We'll down sample it and

00:24:46 --> 00:24:50
that becomes a channel in the output

00:24:48 --> 00:24:53
volume. So it's really just a

00:24:49 --> 00:24:54
downsampling operation on these volumes.

00:24:52 --> 00:24:56
Uh so for example one of the common ways

00:24:53 --> 00:24:57
of doing this in the context of neural

00:24:55 --> 00:24:59
networks especially is to use max

00:24:56 --> 00:25:00
pooling operation. So in this case it

00:24:58 --> 00:25:05
would be common to say for example use

00:24:59 --> 00:25:08
2x2 filters stride two uh so um and do a

00:25:04 --> 00:25:10
max operation. So if this is an input

00:25:07 --> 00:25:12
channel in a volume then we're basically

00:25:09 --> 00:25:14
what that amounts to is we're truncating

00:25:11 --> 00:25:16
it into these 2x two regions and we're

00:25:13 --> 00:25:19
taking a max over four numbers to

00:25:16 --> 00:25:21
produce uh one piece of the output.

00:25:18 --> 00:25:22
Okay. So this is a very cheap operation

00:25:20 --> 00:25:24
that downsamples your volumes. It's

00:25:21 --> 00:25:25
really a way to control the capacity of

00:25:23 --> 00:25:26
the network. So you don't want too many

00:25:24 --> 00:25:28
numbers. You don't want things to be too

00:25:26 --> 00:25:30
computationally expensive. It turns out

00:25:27 --> 00:25:32
hat a pooling layer allows you to down

00:25:29 --> 00:25:34
sample your volumes. You're going to end

00:25:31 --> 00:25:35
up doing less computation and it turns

00:25:33 --> 00:25:37
out to not hurt the performance too

00:25:34 --> 00:25:39
much. So we use them basically as a as a

00:25:36 --> 00:25:42
way of controlling the capacity of these

00:25:38 --> 00:25:43
networks. And the last layer that I want

00:25:41 --> 00:25:45
o briefly mention of course is the

00:25:42 --> 00:25:47
fully connected layer which is exactly

00:25:44 --> 00:25:48
as what you're familiar with. So we have

00:25:46 --> 00:25:50
these volumes throughout as we've

00:25:47 --> 00:25:51
processed the image. At the end you're

00:25:49 --> 00:25:53
left with this volume and now you'd like

00:25:50 --> 00:25:54
to predict some classes. So what we do

00:25:52 --> 00:25:56
is we just take that volume we stretch

00:25:54 --> 00:25:58
it out into a single column and then we

00:25:55 --> 00:25:59
apply a fully connected layer which is

00:25:57 --> 00:26:02
really amounts to just a matrix

00:25:58 --> 00:26:04
multiplication and then that gives us uh

00:26:01 --> 00:26:07
probabilities after applying like a soft

00:26:03 --> 00:26:09
max or something like that. So let me

00:26:06 --> 00:26:11
now show you briefly uh a demo of what

00:26:08 --> 00:26:15
he convolutional network looks like. Uh

00:26:10 --> 00:26:16
so this is comjs. uh this is um a deep

00:26:14 --> 00:26:17
learning library for training

00:26:15 --> 00:26:19
convolutional neural networks that I've

00:26:16 --> 00:26:21
that is implemented in JavaScript. I

00:26:18 --> 00:26:23
wrote this maybe uh two years ago at

00:26:20 --> 00:26:24
his point. So here what we're doing is

00:26:22 --> 00:26:27
we're training a convolutional network

00:26:23 --> 00:26:31
on the CR10 data set. CR10 is a data set

00:26:26 --> 00:26:32
of 50,000 images. Each image is 32x 32x3

00:26:30 --> 00:26:35
and there are different 10 different

00:26:31 --> 00:26:36
classes. So here we are training this

00:26:34 --> 00:26:38
network in the browser and you can see

00:26:35 --> 00:26:40
that the loss is decreasing which means

00:26:38 --> 00:26:43
that we're better classifying these

00:26:39 --> 00:26:44
inputs. And uh so here's the network

00:26:42 --> 00:26:46
specification which you can play with

00:26:44 --> 00:26:47
because this is all done in the browser.

00:26:45 --> 00:26:50
So you can just change this and play

00:26:46 --> 00:26:51
with this. Uh so this is an input image

00:26:49 --> 00:26:53
and this convolutional network I'm

00:26:50 --> 00:26:56
showing here all the intermediate

00:26:52 --> 00:26:57
activations and all the intermediate um

00:26:55 --> 00:26:59
basically activation maps that we're

00:26:56 --> 00:27:01
producing. So here we have a set of

00:26:58 --> 00:27:02
ilters. We're convoling them with the

00:27:00 --> 00:27:05
image and getting all these activation

00:27:01 --> 00:27:06
maps. Uh I'm also showing the gradients

00:27:04 --> 00:27:09
but I don't want to dwell on that too

00:27:06 --> 00:27:11
much. Venue threshold. So ReLU

00:27:08 --> 00:27:13
thresholding anything below zero gets

00:27:10 --> 00:27:15
clamped at zero and then you pull. So

00:27:12 --> 00:27:18
this is just a downsampling operation

00:27:14 --> 00:27:21
and then another convolution relu pull

00:27:17 --> 00:27:22
com pool etc until at the end we have a

00:27:20 --> 00:27:25
fully connected layer and then we have

00:27:21 --> 00:27:26
our softmax so that we get probabilities

00:27:24 --> 00:27:29
out and then we apply a loss to those

00:27:25 --> 00:27:30
probabilities and back propagate. And so

00:27:28 --> 00:27:32
here we see that I've been training in

00:27:29 --> 00:27:34
this tab for the last maybe uh 30

00:27:32 --> 00:27:37
seconds or 1 minute and we're already

00:27:33 --> 00:27:39
getting about 30% accuracy on CR10. So

00:27:36 --> 00:27:40
this these are test images from CR10 and

00:27:38 --> 00:27:41
these are the outputs of this

00:27:39 --> 00:27:43
convolutional network and you can see

00:27:40 --> 00:27:44
that it learned that this is already a

00:27:42 --> 00:27:47
car or something like that. So this

00:27:43 --> 00:27:48
trains pretty quickly in JavaScript. Uh

00:27:46 --> 00:27:49
so you can play with this and you can

00:27:47 --> 00:27:52
change the architecture and so

00:27:49 --> 00:27:54
n. Another thing I'd like to show you

00:27:51 --> 00:27:55
is uh this video because it gives you

00:27:53 --> 00:27:57
again this like very intuitive visceral

00:27:54 --> 00:27:58
feeling of exactly what this is

00:27:56 --> 00:28:01
computing is there's a very good video

00:27:57 --> 00:28:03
by Jason Yosinski uh from recent

00:28:00 --> 00:28:05
advance. I'm going to play this in a

00:28:02 --> 00:28:07
bit. This is from the deep visualization

00:28:04 --> 00:28:08
toolbox. So you can download this code

00:28:06 --> 00:28:11
and you can play with this. It's this

00:28:07 --> 00:28:12
interactive convolutional network demo

00:28:10 --> 00:28:14
and neural networks have enabled

00:28:11 --> 00:28:16
computers to better see and understand

00:28:13 --> 00:28:19
the world. They can recognize school

00:28:15 --> 00:28:21
buses and Z top left corner we show the

00:28:18 --> 00:28:23
in this popular. So what we're seeing

00:28:20 --> 00:28:26
here is these are activation maps in

00:28:22 --> 00:28:29
some particular uh shown in real time as

00:28:25 --> 00:28:31
this demo is running. Uh so these are

00:28:28 --> 00:28:32
for the com one layer of an Alex net

00:28:30 --> 00:28:33
which we're going to go into in much

00:28:31 --> 00:28:35
more detail. But these are the different

00:28:32 --> 00:28:38
activation maps that are being produced

00:28:34 --> 00:28:41
at this point. Um neural network called

00:28:37 --> 00:28:42
Alexet running in cafe. By interacting

00:28:40 --> 00:28:44
with the network, we can see what some

00:28:41 --> 00:28:47
of the neurons are

00:28:43 --> 00:28:49
doing. For example, on this first layer,

00:28:46 --> 00:28:51
a unit in the center responds strongly

00:28:48 --> 00:28:54
to light to dark

00:28:50 --> 00:28:55
edges. Its neighbor one neuron over

00:28:53 --> 00:28:59
esponds to edges in the opposite

00:28:54 --> 00:29:01
direction, dark to light.

00:28:58 --> 00:29:03
Using optimization, we can synthetically

00:29:00 --> 00:29:04
produce images that light up each neuron

00:29:02 --> 00:29:07
this layer to see what each neuron is

00:29:03 --> 00:29:08
looking for. We can scroll through every

00:29:06 --> 00:29:11
layer in the network to see what it

00:29:07 --> 00:29:14
does, including convolution, pooling,

00:29:10 --> 00:29:15
and normalization layers. We can switch

00:29:13 --> 00:29:18
back and forth between showing the

00:29:14 --> 00:29:22
actual activations and showing images

00:29:17 --> 00:29:22
ynthesized to produce high activation.

00:29:22 --> 00:29:26
By the time we get to the fifth

00:29:23 --> 00:29:29
convolutional layer, the features being

00:29:25 --> 00:29:32
computed represent abstract

00:29:28 --> 00:29:34
concepts. For example, this neuron seems

00:29:31 --> 00:29:35
to respond to faces. We can further

00:29:33 --> 00:29:38
investigate this neuron by showing a few

00:29:34 --> 00:29:39
different types of information. First,

00:29:37 --> 00:29:41
we can artificially create optimized

00:29:38 --> 00:29:42
images using new regularization

00:29:40 --> 00:29:44
techniques that are described in our

00:29:41 --> 00:29:46
paper. These synthetic images show that

00:29:43 --> 00:29:48
his neuron fires in response to a face

00:29:45 --> 00:29:49
and shoulders. We can also plot the

00:29:47 --> 00:29:52
images from the training set that

00:29:48 --> 00:29:53
activate this neuron the most as well as

00:29:51 --> 00:29:55
pixels from those images most

00:29:52 --> 00:29:56
responsible for the high activations

00:29:54 --> 00:29:59
computed via the deconvolution

00:29:55 --> 00:30:01
technique. This feature responds to

00:29:58 --> 00:30:03
multiple faces in different locations.

00:30:00 --> 00:30:05
And by looking at the

00:30:02 --> 00:30:07
decons, we can see that it would respond

00:30:04 --> 00:30:10
more strongly if we had even darker eyes

00:30:06 --> 00:30:11
and rosier lips. We can also confirm

00:30:09 --> 00:30:13
that it cares about the head and

00:30:10 --> 00:30:14
shoulders but ignores the arms and

00:30:12 --> 00:30:16
torso.

00:30:13 --> 00:30:18
We can even see that it fires to some

00:30:15 --> 00:30:21
xtent for cat

00:30:17 --> 00:30:23
faces using backrop or decon. We can see

00:30:20 --> 00:30:25
that this unit depends most strongly on

00:30:22 --> 00:30:29
a couple units in the previous layer con

00:30:24 --> 00:30:31
4 and on about a dozen or so in con 3.

00:30:28 --> 00:30:34
Now let's look at another neuron on this

00:30:30 --> 00:30:35
layer. So what's this unit doing? From

00:30:33 --> 00:30:37
the top nine images, we might conclude

00:30:34 --> 00:30:39
that it fires for different types of

00:30:36 --> 00:30:41
clothing. But examining the synthetic

00:30:38 --> 00:30:44
images shows that it may be detecting

00:30:40 --> 00:30:45
not clothing per se, but wrinkles. In

00:30:43 --> 00:30:48
the live plot, we can see that it's

00:30:44 --> 00:30:51
activated by my shirt. And smoothing out

00:30:47 --> 00:30:52
half of my shirt causes that half of the

00:30:50 --> 00:30:54
activations to

00:30:51 --> 00:30:55
decrease. Finally, here's another

00:30:53 --> 00:30:58
interesting

00:30:55 --> 00:31:00
neuron. This one has learned to look for

00:30:57 --> 00:31:01
printed text in a variety of sizes,

00:30:59 --> 00:31:04
colors, and

00:31:01 --> 00:31:05
fonts. This is pretty cool because we

00:31:03 --> 00:31:08
never ask the network to look for

00:31:04 --> 00:31:09
wrinkles or text or faces. The only

00:31:07 --> 00:31:11
labels we provided were at the very last

00:31:08 --> 00:31:13
layer. So the only reason the network

00:31:10 --> 00:31:15
learned features like text and faces in

00:31:12 --> 00:31:17
the middle was to support final

00:31:14 --> 00:31:19
decisions at that last layer. For

00:31:16 --> 00:31:21
example, the text detector may provide

00:31:18 --> 00:31:24
good evidence that a rectangle is in

00:31:20 --> 00:31:26
fact a book seen on edge. And detecting

00:31:23 --> 00:31:28
many books next to each other might be a

00:31:25 --> 00:31:29
good way of detecting a bookcase, which

00:31:27 --> 00:31:31
was one of the categories we trained the

00:31:28 --> 00:31:33
net to

00:31:30 --> 00:31:35
recognize. In this video, we've shown

00:31:32 --> 00:31:36
some of the features of the deep viz

00:31:34 --> 00:31:38
toolbox. Okay, so I encourage you to

00:31:35 --> 00:31:39
play with that. It's it's really fun.

00:31:37 --> 00:31:41
So, I hope that gives you an idea about

00:31:38 --> 00:31:42
exactly what's going on. There's these

00:31:40 --> 00:31:44
convolutional layers. We downsample them

00:31:41 --> 00:31:46
from from time to time. There's usually

00:31:43 --> 00:31:47
some fully connected layers at the end,

00:31:45 --> 00:31:50
but mostly it's just these convolutional

00:31:46 --> 00:31:51
operations stacked on top of each other.

00:31:49 --> 00:31:53
So, what I'd like to do now is I'll dive

00:31:50 --> 00:31:55
into some details of how these

00:31:52 --> 00:31:56
architectures are actually put together.

00:31:54 --> 00:31:58
The way I'll do this is I'll go over all

00:31:55 --> 00:31:59
the winners of the imageet challenges

00:31:57 --> 00:32:00
and I'll tell you about the

00:31:58 --> 00:32:02
architectures, how they came about, how

00:31:59 --> 00:32:03
they differ, and so you'll get a

00:32:01 --> 00:32:05
concrete idea about what these

00:32:02 --> 00:32:07
architectures look like in practice. So

00:32:04 --> 00:32:10
we'll start off with the Alex net in

00:32:06 --> 00:32:13
2012. Um so the Alex net just to give

00:32:09 --> 00:32:14
you an idea about the uh the sizes of

00:32:12 --> 00:32:18
these networks and the images that they

00:32:13 --> 00:32:20
process it took 227 x27 by3 images. And

00:32:17 --> 00:32:22
the first layer of an Alex net for

00:32:19 --> 00:32:25
example was a convolutional layer that

00:32:21 --> 00:32:28
had 11 by11 filters applied with a

00:32:24 --> 00:32:29
stride of four and there are 96 of them.

00:32:27 --> 00:32:32
stride of four I didn't fully explain

00:32:28 --> 00:32:33
because I wanted to save some time but

00:32:31 --> 00:32:35
intuitively it just means that as you're

00:32:32 --> 00:32:36
sliding this filter across the input you

00:32:34 --> 00:32:38
don't have to slide it one pixel at a

00:32:36 --> 00:32:40
time but you can actually jump a few

00:32:37 --> 00:32:43
pixels at a time so we have 11 by11

00:32:39 --> 00:32:45
filters with a stride a skip of four and

00:32:42 --> 00:32:46
we have 96 of them you can try to

00:32:44 --> 00:32:50
compute for example what is the output

00:32:45 --> 00:32:51
volume if you apply this uh this um this

00:32:49 --> 00:32:53
ort of convolutional layer on top of

00:32:50 --> 00:32:55
this volume and I didn't go into details

00:32:52 --> 00:32:56
of how you compute that but basically

00:32:54 --> 00:33:00
there are formulas for this and you can

00:32:55 --> 00:33:03
look into details uh in the class but um

00:32:59 --> 00:33:05
you arrive at 55 x 55 by 96 volume as

00:33:02 --> 00:33:08
output. The total number of parameters

00:33:04 --> 00:33:11
in this layer we have 96 filters every

00:33:07 --> 00:33:14
one of them is 11 by 11 by3 because

00:33:10 --> 00:33:17
that's the input uh depth of these

00:33:13 --> 00:33:19
images. So basically just amounts to 11

00:33:16 --> 00:33:21
* 11 * 3 and then you have 96 filters.

00:33:18 --> 00:33:24
So about 35,000 parameters in this very

00:33:20 --> 00:33:27
first layer. Uh then the second layer of

00:33:23 --> 00:33:29
an Alex net is a pooling layer. So we

00:33:26 --> 00:33:31
apply 3x3 filters at stride of two and

00:33:28 --> 00:33:34
they do max pooling. So you can again

00:33:30 --> 00:33:36
compute the output volume size of that

00:33:33 --> 00:33:38
after applying this to that volume and

00:33:35 --> 00:33:40
you arrive if you do some uh very simple

00:33:37 --> 00:33:42
arithmetic there you arrive at 27 by 27

00:33:39 --> 00:33:44
by 96. So this is the down sampling

00:33:41 --> 00:33:45
operation. You can think about what is

00:33:43 --> 00:33:49
the number of parameters in this pooling

00:33:45 --> 00:33:51
layer. Um and of course it's zero. So

00:33:48 --> 00:33:53
pooling layers compute a fixed function

00:33:50 --> 00:33:54
a fixed down sampling operation. There

00:33:52 --> 00:33:56
are no parameters involved in the

00:33:53 --> 00:33:57
pooling layer. All the parameters are in

00:33:55 --> 00:33:59
convolutional layers and the fully

00:33:56 --> 00:34:01
connected layers which are in some

00:33:58 --> 00:34:04
xtent equivalent to convolutional

00:34:00 --> 00:34:05
ayers. So you can go ahead and just

00:34:03 --> 00:34:07
basically based on the description in

00:34:04 --> 00:34:08
the paper although it's non-trivial I

00:34:06 --> 00:34:09
think based on the description of this

00:34:07 --> 00:34:12
particular paper but you can go ahead

00:34:08 --> 00:34:14
and decipher what uh the volumes are

00:34:11 --> 00:34:15
throughout you can look at the uh kind

00:34:13 --> 00:34:17
of patterns that emerge in terms of how

00:34:14 --> 00:34:19
you actually um increase number of

00:34:16 --> 00:34:21
ilters in higher convolutional layers.

00:34:18 --> 00:34:25
So we started off with 96 then we go to

00:34:20 --> 00:34:28
256 filters then to 384 and eventually

00:34:24 --> 00:34:30
4,96 units fully connected layers.

00:34:27 --> 00:34:32
You'll see also normalization layers

00:34:29 --> 00:34:33
here which have since become slightly

00:34:31 --> 00:34:36
deprecated. It's not very common to use

00:34:32 --> 00:34:37
the normalization layers that were used

00:34:35 --> 00:34:39
uh at the time for the Alexent

00:34:36 --> 00:34:41
architecture. What's interesting to note

00:34:38 --> 00:34:44
is how this differs from the 1998 yan

00:34:40 --> 00:34:45
lakun network. So in particular I

00:34:43 --> 00:34:48
usually like to think about four things

00:34:44 --> 00:34:51
that hold back progress. So uh at least

00:34:47 --> 00:34:54
in deep learning so the data as a

00:34:50 --> 00:34:55
constraint compute uh and then I like to

00:34:53 --> 00:34:57
differenti differentiate between

00:34:54 --> 00:34:59
algorithms and infrastructure algorithms

00:34:56 --> 00:35:00
being something that feels like research

00:34:58 --> 00:35:01
and infrastructure being something that

00:34:59 --> 00:35:03
feels like a lot of engineering has to

00:35:00 --> 00:35:05
happen and so in particular we've had

00:35:02 --> 00:35:08
progress in all those four fronts. So we

00:35:04 --> 00:35:09
see that in 1998 uh the data you could

00:35:07 --> 00:35:11
get a hold of maybe would be on the

00:35:08 --> 00:35:12
order of a few thousand whereas now we

00:35:10 --> 00:35:14
have a few million. So we had three

00:35:11 --> 00:35:17
orders of magnitude of increase in

00:35:13 --> 00:35:18
umber of data. Compute uh GPUs have

00:35:16 --> 00:35:20
become available and we use them to

00:35:17 --> 00:35:24
train these networks. They are about say

00:35:19 --> 00:35:25
roughly 20 times faster than CPUs. And

00:35:23 --> 00:35:27
then of course CPUs we have today are

00:35:24 --> 00:35:29
much much faster than CPUs that they had

00:35:26 --> 00:35:30
back in 1998. So I don't know exactly to

00:35:28 --> 00:35:32
what that works out to but I wouldn't be

00:35:30 --> 00:35:33
surprised if it's again on the order of

00:35:31 --> 00:35:35
three orders of magnitude of

00:35:32 --> 00:35:37
improvement. Again uh I'd like to

00:35:34 --> 00:35:38
actually skip over algorithm and talk

00:35:36 --> 00:35:41
about infrastructure. So in this case

00:35:37 --> 00:35:43
we're talking about uh Nvidia releasing

00:35:40 --> 00:35:44
the CUDA library that allows you to

00:35:42 --> 00:35:46
efficiently create all these matrix

00:35:43 --> 00:35:49
vector operations and apply them on

00:35:45 --> 00:35:51
arrays of numbers. So um that's a piece

00:35:48 --> 00:35:52
of software that you we rely on and that

00:35:50 --> 00:35:54
we take advantage of that wasn't

00:35:51 --> 00:35:56
available before. And finally algorithms

00:35:54 --> 00:35:58
is kind of an interesting one because

00:35:55 --> 00:36:00
there's been uh in those 20 years

00:35:57 --> 00:36:02
there's been much less improvement in uh

00:35:59 --> 00:36:04
in algorithms than all these other three

00:36:01 --> 00:36:06
pieces. So in particular what we've done

00:36:03 --> 00:36:08
with the 1998 network is we've made it

00:36:05 --> 00:36:10
bigger. So you have more channels, you

00:36:07 --> 00:36:12
have more layers by a bit. Uh and the

00:36:09 --> 00:36:16
two really new things algorithmically

00:36:12 --> 00:36:19
are uh dropout and rectified linear

00:36:15 --> 00:36:21
units. So uh dropout is a regularization

00:36:18 --> 00:36:23
technique uh developed by Jeff Hinton

00:36:20 --> 00:36:25
and colleagues. And rectified linear

00:36:22 --> 00:36:27
units are these nonlinearities that

00:36:24 --> 00:36:30
rain much faster than sigmoids and

00:36:26 --> 00:36:32
10H's. And this paper actually had a

00:36:29 --> 00:36:34
plot u that showed that the rectified

00:36:31 --> 00:36:35
linear units trained a bit faster than

00:36:33 --> 00:36:37
sigmoids. And that's intuitively because

00:36:34 --> 00:36:38
of the vanishing gradient problems. And

00:36:36 --> 00:36:41
when you have very deep networks with

00:36:37 --> 00:36:44
sigmoids, um those gradients vanish as

00:36:40 --> 00:36:45
Hugo was talking about in last lecture.

00:36:43 --> 00:36:48
Uh so what's interesting also to note by

00:36:44 --> 00:36:50
the way is that both dropout and relu

00:36:47 --> 00:36:52
are basically like one line or two lines

00:36:49 --> 00:36:55
of code change. So it's about two line

00:36:51 --> 00:36:56
diff total in those 20 years. And both

00:36:54 --> 00:36:59
of them consist of setting things to

00:36:55 --> 00:37:00
zero. So with the ReLU, you set things

00:36:58 --> 00:37:02
to zero when they're lower than zero.

00:36:59 --> 00:37:05
And with Dropout, you set things to zero

00:37:01 --> 00:37:06
at random. So, it's a good idea to set

00:37:04 --> 00:37:08
hings to zero. Apparently, that's what

00:37:05 --> 00:37:10
we've learned. So, if you try to find a

00:37:07 --> 00:37:12
new cool algorithm, look for oneline

00:37:09 --> 00:37:14
diffs that set something to zero.

00:37:11 --> 00:37:17
Probably will work better and we could

00:37:13 --> 00:37:19
add you here to this list. Uh, now some

00:37:16 --> 00:37:21
of the newest things that happened uh

00:37:18 --> 00:37:22
some of the comparing it again and

00:37:20 --> 00:37:24
giving you an idea about the

00:37:21 --> 00:37:26
hyperparameters that uh were in this

00:37:23 --> 00:37:28
architecture. Um, it was the first use

00:37:25 --> 00:37:30
of rectified linear units. We haven't

00:37:27 --> 00:37:31
seen that as much before. uh this

00:37:29 --> 00:37:33
network used the normalization layers

00:37:30 --> 00:37:35
which are not used anymore at least in

00:37:32 --> 00:37:37
the specific way that they use them in

00:37:34 --> 00:37:40
this paper. Uh they used heavy data

00:37:36 --> 00:37:42
ugmentation. So you don't only put in

00:37:39 --> 00:37:43
you don't only pipe these images into

00:37:41 --> 00:37:45
the networks exactly as they come from

00:37:42 --> 00:37:46
the data set but you jitter them

00:37:44 --> 00:37:48
spatially around a bit and you warp them

00:37:46 --> 00:37:50
and you change the colors a bit and you

00:37:47 --> 00:37:51
just do this randomly because you're

00:37:49 --> 00:37:53
trying to build in some invarianes to

00:37:50 --> 00:37:55
these small perturbations and you're

00:37:52 --> 00:37:59
basically hallucinating additional data.

00:37:54 --> 00:38:01
Uh it was the um the first real um use

00:37:58 --> 00:38:03
of dropout. Um and roughly you see

00:38:00 --> 00:38:06
standard hyperparameters like say batch

00:38:02 --> 00:38:08
sizes of roughly 128 u using stocastic

00:38:05 --> 00:38:11
gradient descent with momentum usually

00:38:07 --> 00:38:14
0.9 um in the momentum learning rates of

00:38:10 --> 00:38:16
1 -2 you reduce them in normal ways. So

00:38:13 --> 00:38:18
you reduce roughly by factor of 10

00:38:15 --> 00:38:22
whenever validation stops improving and

00:38:18 --> 00:38:25
weight decay of just a bit 5 negative4

00:38:21 --> 00:38:27
and uh ensembling always helps. So you

00:38:24 --> 00:38:29
train seven independent convolutional

00:38:26 --> 00:38:30
networks separately and then you just

00:38:28 --> 00:38:33
average their predictions always gives

00:38:29 --> 00:38:36
you additional 2% improvement. So this

00:38:32 --> 00:38:38
AlexNet the winner of 2012. In 2013

00:38:35 --> 00:38:40
the winner was the ZFNET. This was

00:38:37 --> 00:38:42
developed by uh Matthew Zyler and Rob

00:38:39 --> 00:38:45
Fergus in

00:38:41 --> 00:38:47
2013 and this was an improvement on top

00:38:44 --> 00:38:49
of Alexet architecture. In particular,

00:38:46 --> 00:38:50
one of the the bigger differences here

00:38:48 --> 00:38:52
were that the convolutional layer, the

00:38:50 --> 00:38:55
first convolutional layer, they went

00:38:51 --> 00:38:56
from 11 by11 stride 4 to 7 by7 stride 2.

00:38:54 --> 00:38:58
So you have slightly smaller filters and

00:38:55 --> 00:38:59
you apply them more densely. And then

00:38:57 --> 00:39:01
also they noticed that these

00:38:58 --> 00:39:03
convolutional layers in the middle if

00:39:00 --> 00:39:05
you make them larger if you scale them

00:39:02 --> 00:39:07
up then you actually gain performance.

00:39:04 --> 00:39:10
So they managed to improve a tiny bit.

00:39:06 --> 00:39:13
Matthew Zyler then went uh he um became

00:39:09 --> 00:39:14
the founder of clarify uh and uh he

00:39:12 --> 00:39:16
worked on this a bit more inside clarify

00:39:13 --> 00:39:18
and he managed to push the performance

00:39:15 --> 00:39:20
to 11% which was the winning entry at

00:39:17 --> 00:39:22
he time but we don't actually know what

00:39:19 --> 00:39:24
get gets you from 14% to 11% because

00:39:21 --> 00:39:26
Matthew never disclosed the full details

00:39:23 --> 00:39:27
of what happened there but uh he did say

00:39:25 --> 00:39:29
that it was more tweaking of these

00:39:26 --> 00:39:33
hyperparameters and optimizing that a

00:39:28 --> 00:39:35
bit so that was 2013 winner in 2014 we

00:39:32 --> 00:39:36
saw a slightly bigger diff to this um so

00:39:34 --> 00:39:38
ne of the networks that was introduced

00:39:35 --> 00:39:40
then was a VGNet from Karen Simmonian

00:39:37 --> 00:39:42
d Andrew Zerman. What's beautiful

00:39:39 --> 00:39:43
about VGNet and they explored a few

00:39:41 --> 00:39:44
architectures here and the one that

00:39:42 --> 00:39:46
ended up working best was this D column

00:39:43 --> 00:39:48
which is why I'm highlighting it. What's

00:39:45 --> 00:39:50
beautiful about the VGNet is that it's

00:39:47 --> 00:39:52
o simple. So you might have noticed in

00:39:49 --> 00:39:54
these previous uh um in these previous

00:39:51 --> 00:39:56
networks you have these different filter

00:39:53 --> 00:39:57
sizes, different layers and you do

00:39:55 --> 00:39:58
different amount of strides and

00:39:56 --> 00:39:59
everything kind of looks a bit hairy and

00:39:57 --> 00:40:01
you're not sure where these

00:39:58 --> 00:40:04
hyperparameters are coming from. VGET is

00:40:00 --> 00:40:06
extremely uniform. All you do is 3x3

00:40:03 --> 00:40:08
convolutions with stride one pad one and

00:40:05 --> 00:40:10
you do two x2 max poolings with stride

00:40:07 --> 00:40:12
two and you do this throughout

00:40:09 --> 00:40:14
completely homogeneous architecture and

00:40:11 --> 00:40:16
you just alternate a few comp and a few

00:40:13 --> 00:40:18
pool layers and you get a top top

00:40:15 --> 00:40:22
erformance. So they managed to reduce

00:40:17 --> 00:40:24
the error down to 7.3% in the VGNet um

00:40:21 --> 00:40:26
just with a very simple and homogeneous

00:40:23 --> 00:40:29
architecture. So it's I've also here

00:40:25 --> 00:40:30
written out this D architecture just so

00:40:28 --> 00:40:32
you can see I'm not I'm not sure how

00:40:29 --> 00:40:34
instructive this is because it's kind of

00:40:31 --> 00:40:36
dense but you can definitely see and you

00:40:33 --> 00:40:38
can look at this offline perhaps but you

00:40:35 --> 00:40:40
can see how these volumes develop and

00:40:37 --> 00:40:43
you can see the kinds of sizes of these

00:40:39 --> 00:40:45
filters. Um so they're always 3x3 but

00:40:42 --> 00:40:46
he number of filters again grows. So we

00:40:44 --> 00:40:49
started off with 64 and then we go to

00:40:45 --> 00:40:51
128 256 512. So we're just doubling it

00:40:48 --> 00:40:53
over time.

00:40:50 --> 00:40:55
Um I also have a few numbers here just

00:40:52 --> 00:40:57
o give you an idea of the scale at

00:40:54 --> 00:40:58
which these networks normally operate.

00:40:56 --> 00:41:00
So we have on the order of 140 million

00:40:57 --> 00:41:02
parameters. This is actually quite a

00:40:59 --> 00:41:03
lot. I'll show you in a bit that this

00:41:01 --> 00:41:05
can be about five or 10 million

00:41:02 --> 00:41:08
parameters and it works just as well. Um

00:41:04 --> 00:41:10
and it's about 100 megabytes for image

00:41:07 --> 00:41:12
in terms of memory in the forward pass

00:41:09 --> 00:41:13
and then the backward pass also needs

00:41:11 --> 00:41:15
roughly on that order. So that's roughly

00:41:12 --> 00:41:18
the numbers that we're uh we're working

00:41:14 --> 00:41:20
with here. Uh also you can note that

00:41:17 --> 00:41:21
most of the and this is true mostly in

00:41:19 --> 00:41:23
convolutional networks is that most of

00:41:20 --> 00:41:25
the memory is in the early convolutional

00:41:22 --> 00:41:26
ayers. Most of the parameters at least

00:41:24 --> 00:41:28
in the case where you use these giant

00:41:26 --> 00:41:31
fully connected layers at the top would

00:41:27 --> 00:41:33
be here. Um so the winner actually in

00:41:30 --> 00:41:35
2014 was not the VGET I only presented

00:41:32 --> 00:41:36
because it's such a simple architecture

00:41:34 --> 00:41:39
but the winner was actually Google net

00:41:35 --> 00:41:41
with a slightly um hairier architecture

00:41:38 --> 00:41:43
we should say. So it's still a sequence

00:41:40 --> 00:41:45
of things but in this case they've uh

00:41:42 --> 00:41:47
put inception modules in sequence and

00:41:44 --> 00:41:49
this is an example inception module. I

00:41:46 --> 00:41:50
don't have too much time to go into the

00:41:48 --> 00:41:52
details but you can see that it consists

00:41:49 --> 00:41:55
basically of convolutions and different

00:41:51 --> 00:41:59
kinds of strides and so on. Um so the

00:41:54 --> 00:42:01
Google net um is looks slightly uh

00:41:58 --> 00:42:03
airier but it turns out to be more

00:42:00 --> 00:42:05
fficient in several respects. So for

00:42:02 --> 00:42:08
example it works a bit better than VGNET

00:42:04 --> 00:42:10
at least at the time. um it only has

00:42:07 --> 00:42:12
five million parameters compared to VGE

00:42:09 --> 00:42:14
that's 140 million parameters. So a huge

00:42:11 --> 00:42:15
reduction and you do that by the way by

00:42:13 --> 00:42:17
just throwing away fully connected

00:42:14 --> 00:42:18
layers. So you'll notice in this

00:42:16 --> 00:42:20
breakdown I did these fully connected

00:42:17 --> 00:42:22
layers here have 100 million parameters

00:42:19 --> 00:42:24
and 16 million parameters. Turns out you

00:42:21 --> 00:42:25
don't actually need that. So if you took

00:42:23 --> 00:42:28
take them away that actually doesn't

00:42:24 --> 00:42:29
hurt the performance too much. So uh you

00:42:27 --> 00:42:34
can get a huge reduction of parameters.

00:42:28 --> 00:42:36
Um and it was um it was slightly we can

00:42:33 --> 00:42:37
also compare to the original AlexNet. So

00:42:35 --> 00:42:39
compared to the original Alex net, we

00:42:36 --> 00:42:41
have fewer parameters, a bit more

00:42:38 --> 00:42:42
compute and a much better performance.

00:42:40 --> 00:42:45
So Google Net was really optimized to

00:42:41 --> 00:42:46
have a low footprint both memory wise uh

00:42:44 --> 00:42:48
both computation wise and both

00:42:45 --> 00:42:51
parameter- wise but it looks a bit

00:42:47 --> 00:42:52
uglier and VGNet is a very beautiful

00:42:50 --> 00:42:55
homogeneous architecture but there are

00:42:51 --> 00:42:59
some inefficiencies in it. Okay, so

00:42:54 --> 00:43:00
that's uh 2014. Now in 2015 we had a a

00:42:58 --> 00:43:02
slightly bigger delta on top of the

00:42:59 --> 00:43:03
architectures. So right now these

00:43:01 --> 00:43:04
architectures if Yan Lakun looked at

00:43:02 --> 00:43:06
hem maybe in 1998 he would still

00:43:04 --> 00:43:08
recognize everything. So everything

00:43:05 --> 00:43:09
looks very like simple. You've just

00:43:07 --> 00:43:11
played with hyperparameters. So one of

00:43:08 --> 00:43:12
the first kind of bigger departures I

00:43:10 --> 00:43:15
would argue was in 2015 with the

00:43:11 --> 00:43:17
introduction of residual networks. Uh

00:43:14 --> 00:43:19
and so this is work from Kaming Hi and

00:43:16 --> 00:43:22
colleagues in Microsoft Research Asia.

00:43:18 --> 00:43:24
And so they did not only win the imageet

00:43:21 --> 00:43:25
challenge in 2015 but they won a whole

00:43:23 --> 00:43:27
bunch of challenges. And this was all

00:43:24 --> 00:43:29
just by applying these residual networks

00:43:26 --> 00:43:31
that were trained on imageet and then

00:43:28 --> 00:43:32
fine-tuned on all these different tasks

00:43:30 --> 00:43:34
and you basically can crush lots of

00:43:31 --> 00:43:39
different tasks whenever you get a new

00:43:33 --> 00:43:42
awesome comnet. Um so at this time the

00:43:38 --> 00:43:43
performance was basically 3.57% from

00:43:41 --> 00:43:46
these residual networks. So this is

00:43:42 --> 00:43:48
2015. Also uh this paper tried to argue

00:43:45 --> 00:43:50
that if you look at the number of layers

00:43:47 --> 00:43:52
it goes up and then it uh they made the

00:43:49 --> 00:43:54
point that uh with residual networks as

00:43:51 --> 00:43:56
we'll see in a bit you can introduce

00:43:53 --> 00:43:57
many more layers and they uh and that

00:43:55 --> 00:43:59
correlates strongly with

00:43:56 --> 00:44:00
performance. We've since found that in

00:43:58 --> 00:44:02
fact you can make these residual

00:43:59 --> 00:44:04
networks quite sh quite a lot shallower

00:44:01 --> 00:44:06
like say on the order of 20 or 30 layers

00:44:03 --> 00:44:08
and they work just as fine just as well.

00:44:05 --> 00:44:10
So it's not necessarily the depth here

00:44:07 --> 00:44:12
but I'll go into that in a bit but you

00:44:09 --> 00:44:13
get a much better performance. What's

00:44:11 --> 00:44:16
interesting about this paper is this

00:44:12 --> 00:44:17
plot here where they compare these

00:44:15 --> 00:44:19
residual networks and I'll go into

00:44:16 --> 00:44:20
details of how they work in a bit and

00:44:18 --> 00:44:22
these what they call plane networks

00:44:19 --> 00:44:24
which is everything I've explained until

00:44:21 --> 00:44:26
now and the problem with plane networks

00:44:23 --> 00:44:28
is that when you try to scale them up

00:44:25 --> 00:44:30
and introduce additional layers they

00:44:27 --> 00:44:33
don't get monotonically better. So if

00:44:29 --> 00:44:35
you take a 20 layer model and uh on this

00:44:32 --> 00:44:37
on C10 experiments if you take a 20

00:44:34 --> 00:44:39
layer model and you run it and then you

00:44:36 --> 00:44:42
take a 56 layer model you'll see that

00:44:38 --> 00:44:44
he 56 layer model performs worse and

00:44:41 --> 00:44:46
this is not just on the test data. So

00:44:43 --> 00:44:48
it's not just an overfitting issue. This

00:44:45 --> 00:44:49
on the training data. The 56 layer

00:44:47 --> 00:44:51
model performs worse on the training

00:44:48 --> 00:44:54
data than the 20 layer model even though

00:44:50 --> 00:44:56
the 56 layer model can imitate 20 layer

00:44:53 --> 00:44:58
model by setting 36 layers to compute

00:44:55 --> 00:45:00
identities. So basically it's an

00:44:57 --> 00:45:03
optimization problem that you can't find

00:44:59 --> 00:45:05
the solution once your problem size

00:45:02 --> 00:45:07
grows that much bigger in this plain net

00:45:04 --> 00:45:09
uh architecture. So in the residual

00:45:06 --> 00:45:10
networks that they've proposed they

00:45:08 --> 00:45:12
found that when you wire them up in a

00:45:09 --> 00:45:14
slightly different way you monotonically

00:45:11 --> 00:45:17
get a better performance as you add more

00:45:13 --> 00:45:18
layers. So more layers always strictly

00:45:16 --> 00:45:21
better and you don't run into these

00:45:17 --> 00:45:23
optimization issues. So comparing

00:45:20 --> 00:45:25
residual networks to plane networks in

00:45:22 --> 00:45:26
plain networks as I've explained already

00:45:24 --> 00:45:28
ou have this sequence of convolutional

00:45:25 --> 00:45:30
ayers uh where every convolutional

00:45:27 --> 00:45:32
ayer operates over volume before and

00:45:29 --> 00:45:34
produces volume. In residual networks we

00:45:31 --> 00:45:36
have this first convolutional layer on

00:45:33 --> 00:45:38
top of the raw image. Then there's a

00:45:35 --> 00:45:41
pooling layer. Um so at this point we've

00:45:37 --> 00:45:43
reduced to 56 x 56x 64 the original

00:45:40 --> 00:45:45
image and then from here on they have

00:45:42 --> 00:45:47
these residual blocks with these funny

00:45:44 --> 00:45:49
skip connections and this turns out to

00:45:46 --> 00:45:51
be quite important.

00:45:48 --> 00:45:54
Um so let me show you what these look

00:45:50 --> 00:45:57
like. Um so the original climbing paper

00:45:53 --> 00:45:58
had this architecture here shown under

00:45:56 --> 00:46:01
original. So on the left you see

00:45:57 --> 00:46:03
original residual networks design. Since

00:46:00 --> 00:46:04
then they had an additional paper that

00:46:02 --> 00:46:05
uh played with the architecture and

00:46:03 --> 00:46:08
found that there's a better arrangement

00:46:04 --> 00:46:10
of u layers inside this block that works

00:46:07 --> 00:46:12
better empirically. And so the way this

00:46:09 --> 00:46:13
works, so concentrate on the proposed

00:46:11 --> 00:46:17
one in the middle since that works so

00:46:12 --> 00:46:18
well, is you have this pathway uh where

00:46:16 --> 00:46:20
you have this representation of the

00:46:17 --> 00:46:22
image X and then instead of transforming

00:46:19 --> 00:46:25
that representation X to get a new X to

00:46:22 --> 00:46:27
plug in later, we end up uh having this

00:46:24 --> 00:46:29
X, we go off and we do some compute on

00:46:26 --> 00:46:32
the side. So that's that residual block

00:46:28 --> 00:46:35
doing some computation and then you add

00:46:31 --> 00:46:36
your result on top of X. So you have

00:46:34 --> 00:46:38
this addition operation here going to

00:46:35 --> 00:46:40
the next residual block. So you have

00:46:37 --> 00:46:43
this X and you always compute deltas to

00:46:39 --> 00:46:45
it. And I think this it's not intuitive

00:46:42 --> 00:46:46
that this should work much better or why

00:46:44 --> 00:46:48
that works much better. I think it

00:46:45 --> 00:46:49
becomes a bit more intuitively clear if

00:46:47 --> 00:46:51
you actually understand the back

00:46:48 --> 00:46:52
propagation dynamics and how backrop

00:46:50 --> 00:46:54
works. And this is why I always urge

00:46:51 --> 00:46:56
people also to implement backdrop

00:46:53 --> 00:46:58
themselves to get an intuition for how

00:46:55 --> 00:46:59
it works, what it's computing and so on.

00:46:57 --> 00:47:01
Because if you understand backdrop,

00:46:58 --> 00:47:04
you'll see that addition operation is a

00:47:00 --> 00:47:05
gradient distributor. So um you you get

00:47:03 --> 00:47:07
a gradient from the top and this

00:47:04 --> 00:47:08
gradient will flow equally to all the

00:47:06 --> 00:47:10
children that participated in that

00:47:07 --> 00:47:11
addition. So you have gradient flowing

00:47:09 --> 00:47:13
here from the supervision. So you have

00:47:10 --> 00:47:14
supervision at the very bottom here in

00:47:12 --> 00:47:16
this diagram and it kind of flows

00:47:13 --> 00:47:18
upwards and it flows through these

00:47:15 --> 00:47:20
residual blocks and then gets added to

00:47:17 --> 00:47:22
this stream. And so you end up with but

00:47:19 --> 00:47:24
his addition distributes that gradient

00:47:21 --> 00:47:26
always ident identically through. So

00:47:23 --> 00:47:27
what you end up with is this kind of a

00:47:25 --> 00:47:29
gradient superighway as I like to call

00:47:26 --> 00:47:30
it where these gradients from your

00:47:28 --> 00:47:32
supervision go directly to the original

00:47:30 --> 00:47:34
convolutional layer and then on top of

00:47:31 --> 00:47:35
that you get these deltas from all the

00:47:33 --> 00:47:39
residual blocks. So these blocks can

00:47:34 --> 00:47:41
come on online and can help out that

00:47:38 --> 00:47:44
original stream of information. This is

00:47:40 --> 00:47:46
also related to I think why LSTMs long

00:47:43 --> 00:47:47
short-term memory uh networks uh work

00:47:45 --> 00:47:49
better than recurrent neural networks

00:47:46 --> 00:47:51
because they also have these kind of

00:47:48 --> 00:47:53
additional addition operations in the

00:47:50 --> 00:47:55
LSTM and it just makes the gradients

00:47:52 --> 00:47:57
flow significantly

00:47:54 --> 00:47:58
better. Then there were some results on

00:47:56 --> 00:48:00
top of residual networks that I thought

00:47:57 --> 00:48:02
were quite amusing. So uh recently for

00:47:59 --> 00:48:04
example we had this result on deep

00:48:01 --> 00:48:06
networks with stoastic depth. Uh the

00:48:03 --> 00:48:08
idea here was that uh the authors of

00:48:05 --> 00:48:10
this paper noticed that you have these

00:48:07 --> 00:48:12
residual blocks that compute deltas on

00:48:09 --> 00:48:15
top of your stream and you can basically

00:48:11 --> 00:48:17
randomly throw out layers. So you have

00:48:14 --> 00:48:19
these say 100 blocks 100 residual blocks

00:48:16 --> 00:48:21
and you can randomly drop them out and

00:48:18 --> 00:48:23
uh at test time similar to dropout you

00:48:20 --> 00:48:24
introduce all of them and they all work

00:48:22 --> 00:48:27
at the same time but you have to scale

00:48:24 --> 00:48:29
things a bit just like with dropout. Uh

00:48:26 --> 00:48:30
but basically it's kind of a unintuitive

00:48:28 --> 00:48:32
result because you can throw out layers

00:48:29 --> 00:48:34
at random and I think it breaks the

00:48:31 --> 00:48:36
original notion of what we had of

00:48:33 --> 00:48:39
comnets of as like these feature

00:48:36 --> 00:48:40
transformers that that they compute more

00:48:38 --> 00:48:42
and more complex features over time or

00:48:39 --> 00:48:44
something like that. And I think it

00:48:41 --> 00:48:46
seems much more intuitive to think about

00:48:43 --> 00:48:49
hese residual networks, at least to me,

00:48:45 --> 00:48:51
as some kinds of dynamical systems where

00:48:48 --> 00:48:52
you have this original representation of

00:48:50 --> 00:48:54
the image X and then every single

00:48:51 --> 00:48:56
residual block is kind of like a vector

00:48:53 --> 00:48:58
field that because it computes an a

00:48:55 --> 00:49:00
delta on top of your signal. And so

00:48:57 --> 00:49:02
these vector fields nudge your original

00:48:59 --> 00:49:05
representation X towards a space where

00:49:02 --> 00:49:08
you can decode the answer Y of like the

00:49:04 --> 00:49:09
class of that X. And so if you drop off

00:49:07 --> 00:49:11
some of these residual blocks at random,

00:49:08 --> 00:49:12
then if you haven't applied one of these

00:49:10 --> 00:49:14
vector fields, then the other vector

00:49:11 --> 00:49:16
fields that come later can kind of make

00:49:13 --> 00:49:19
up for it and they nudge they basically

00:49:15 --> 00:49:21
nudge the um they pick up the slack and

00:49:18 --> 00:49:24
they nudge it along. Anyways, and so

00:49:20 --> 00:49:25
that's possibly why this the image I

00:49:23 --> 00:49:27
currently have in mind of how these

00:49:24 --> 00:49:29
things work. Um so much more like

00:49:26 --> 00:49:30
dynamical systems. In fact, another

00:49:28 --> 00:49:32
experiments that people are playing with

00:49:29 --> 00:49:34
at I also find interesting is you

00:49:31 --> 00:49:35
don't have you can share these residual

00:49:33 --> 00:49:37
blocks. So it starts to look more like a

00:49:34 --> 00:49:39
recurrent neural network. So these

00:49:36 --> 00:49:40
residual blocks would have shared

00:49:38 --> 00:49:42
connectivity and then you have this

00:49:39 --> 00:49:44
dynamical system really where you're

00:49:41 --> 00:49:45
just running a single RNN, a single

00:49:43 --> 00:49:47
vector field that you keep iterating

00:49:44 --> 00:49:48
over and over and then your fixed point

00:49:46 --> 00:49:51
gives you the answer. So it's kind of

00:49:47 --> 00:49:54
interesting what's happening. Uh it

00:49:50 --> 00:49:56
looks very funny. Okay, we've had many

00:49:53 --> 00:49:57
more interesting results that so people

00:49:55 --> 00:49:59
are playing a lot with these residual

00:49:56 --> 00:50:01
networks and uh improving on them in

00:49:58 --> 00:50:02
various ways. So, as I mentioned

00:50:00 --> 00:50:05
already, it turns out that you can make

00:50:02 --> 00:50:07
these residual networks much shallower

00:50:04 --> 00:50:08
and make them wider. So, you introduce

00:50:06 --> 00:50:10
more channels and that can work just as

00:50:07 --> 00:50:11
well, if not better. So, it's not

00:50:09 --> 00:50:14
necessarily the depth that is giving you

00:50:10 --> 00:50:16
a lot of the performance. It's um um you

00:50:13 --> 00:50:17
can scale down the depth and if you

00:50:15 --> 00:50:20
increase the width, that can actually

00:50:16 --> 00:50:22
work better. And um they're also more

00:50:19 --> 00:50:24
fficient if you do it that way. There's

00:50:21 --> 00:50:26
more uh funny regularization techniques

00:50:23 --> 00:50:28
here. Swap out is a funny regularization

00:50:25 --> 00:50:31
technique that actually interpolates

00:50:27 --> 00:50:33
between plain nets, resets and dropout.

00:50:30 --> 00:50:35
So that's also a funny paper. Uh we have

00:50:32 --> 00:50:37
fractal nets. We actually have many more

00:50:34 --> 00:50:38
different types of nets. And so people

00:50:36 --> 00:50:39
have really experimented with this a

00:50:37 --> 00:50:41
lot. I'm really eager to see what the

00:50:38 --> 00:50:43
winning architecture will be in 2016 as

00:50:40 --> 00:50:44
a result of a lot of this. One of the

00:50:42 --> 00:50:46
things that has really enabled this

00:50:43 --> 00:50:48
rapid experimentation in the community

00:50:45 --> 00:50:50
is that somehow we've developed luckily

00:50:47 --> 00:50:53
this culture of sharing a lot of code

00:50:50 --> 00:50:55
among ourselves. So for example um

00:50:52 --> 00:50:56
Facebook has released um just as an

00:50:54 --> 00:50:58
example Facebook has released residual

00:50:55 --> 00:50:59
networks code and torch that is really

00:50:57 --> 00:51:01
good that a lot of these papers I

00:50:58 --> 00:51:02
believe have adopted and worked on top

00:51:00 --> 00:51:05
of and that allowed them to actually

00:51:01 --> 00:51:06
really um scale up their experiments and

00:51:05 --> 00:51:10
uh explore different architectures. So

00:51:08 --> 00:51:11
it's great that this has happened.

00:51:09 --> 00:51:13
Unfortunately a lot of these papers are

00:51:10 --> 00:51:15
coming kind of on archive and it's kind

00:51:12 --> 00:51:16
of a chaos as these are being uploaded.

00:51:14 --> 00:51:19
So at this point I think this is a

00:51:15 --> 00:51:21
natural point to plug very briefly my

00:51:18 --> 00:51:24
archivesity.com. So this is the best

00:51:20 --> 00:51:26
website ever and what it does is it

00:51:23 --> 00:51:29
crawls archive and uh it takes all the

00:51:25 --> 00:51:30
papers and it analyzes all the papers

00:51:28 --> 00:51:32
the full text of the papers and it

00:51:29 --> 00:51:34
creates TF bag of words features for all

00:51:31 --> 00:51:35
the papers and then you can do things

00:51:33 --> 00:51:37
like you can search a particular paper

00:51:34 --> 00:51:38
like residual networks paper here and

00:51:36 --> 00:51:40
you can look for similar papers on

00:51:37 --> 00:51:42
archive and so this is a sorted list of

00:51:39 --> 00:51:43
basically all the residual networks

00:51:41 --> 00:51:45
papers that are most related to that

00:51:42 --> 00:51:47
paper. uh or you can also create user

00:51:44 --> 00:51:48
accounts and you can create a library of

00:51:46 --> 00:51:50
papers that you like and then archive

00:51:47 --> 00:51:52
sanity will train a support vector

00:51:49 --> 00:51:54
machine for you and basically you can

00:51:51 --> 00:51:56
look at what are archive papers over the

00:51:53 --> 00:51:57
last month that I would enjoy the most

00:51:55 --> 00:51:59
and that's just computed by archive

00:51:56 --> 00:52:01
sanity and so it's like a curated feed

00:51:58 --> 00:52:03
specifically for you. So I use this

00:52:00 --> 00:52:07
quite a bit and I find it uh useful so I

00:52:02 --> 00:52:09
hope that other people do as well. Okay,

00:52:06 --> 00:52:10
so we saw convolutional neural networks.

00:52:08 --> 00:52:12
I explained how they work. I explained

00:52:09 --> 00:52:14
some of the background context. given

00:52:11 --> 00:52:15
you an idea of what they look like in

00:52:13 --> 00:52:16
practice and we went through case

00:52:14 --> 00:52:18
studies of the winning architectures

00:52:15 --> 00:52:20
over time, but so far we've only looked

00:52:18 --> 00:52:22
at image classification specifically. So

00:52:19 --> 00:52:24
we're categorizing images into some

00:52:21 --> 00:52:26
number of bins. So I'd like to briefly

00:52:23 --> 00:52:27
talk about addressing other tasks in

00:52:25 --> 00:52:30
computer vision and how you might go

00:52:26 --> 00:52:32
about doing that. So the way to think

00:52:29 --> 00:52:34
about uh doing other tasks in computer

00:52:31 --> 00:52:35
vision is that really what we have is

00:52:33 --> 00:52:37
you can think of this comput

00:52:34 --> 00:52:39
convolutional neural network as this

00:52:36 --> 00:52:41
block of compute that has a few million

00:52:38 --> 00:52:43
parameters in it and it can do basically

00:52:40 --> 00:52:46
arbitrary functions that are very nice

00:52:42 --> 00:52:48
over images and um so takes an image

00:52:45 --> 00:52:50
gives you some kind of features and now

00:52:47 --> 00:52:52
different tasks uh will basically look

00:52:50 --> 00:52:54
as follows. You want to predict some

00:52:51 --> 00:52:55
kind of a thing in different tasks that

00:52:53 --> 00:52:57
will be different things and you always

00:52:54 --> 00:52:59
have a desired thing and then you want

00:52:56 --> 00:53:01
o make the predicted thing much more

00:52:58 --> 00:53:03
closer to the desired thing and you back

00:53:00 --> 00:53:04
propagate. So this is the only part

00:53:02 --> 00:53:06
usually that changes from task to task.

00:53:04 --> 00:53:07
You'll see that these comnets don't

00:53:05 --> 00:53:09
change too much. what changes is your

00:53:06 --> 00:53:11
loss function at the very end and that's

00:53:08 --> 00:53:12
what actually helps you uh really

00:53:10 --> 00:53:14
transfer a lot of these winning

00:53:11 --> 00:53:15
architectures you usually use for these

00:53:13 --> 00:53:16
pre-trained networks and you don't worry

00:53:14 --> 00:53:18
too much about the details of that

00:53:15 --> 00:53:19
architecture because you're only worried

00:53:17 --> 00:53:21
about you know adding a small piece at

00:53:18 --> 00:53:23
he top or changing the loss function or

00:53:20 --> 00:53:24
substituting a new data set and so on.

00:53:22 --> 00:53:26
So just to make this slightly more

00:53:23 --> 00:53:29
concrete, in image classification, we

00:53:25 --> 00:53:30
apply this compute block. We get these

00:53:28 --> 00:53:31
features and then if I want to do

00:53:29 --> 00:53:33
classification, I would basically

00:53:30 --> 00:53:35
predict 10,00 numbers that give me the

00:53:32 --> 00:53:37
lock probabilities of different classes.

00:53:34 --> 00:53:39
And then I have a predicted thing, a

00:53:36 --> 00:53:41
desired thing, particular class, and I

00:53:38 --> 00:53:43
can back prop. If I'm doing image

00:53:40 --> 00:53:45
captioning, the it also looks very

00:53:42 --> 00:53:47
similar. Instead of predicting just a

00:53:44 --> 00:53:49
vector of 10,000 numbers, I now have,

00:53:46 --> 00:53:51
for example, a 10,000 num uh 10,000

00:53:48 --> 00:53:53
words in some kind of vocabulary. and

00:53:50 --> 00:53:55
I'd be predicting 10,000 numbers and a

00:53:52 --> 00:53:56
sequence of them. And so I can use a

00:53:54 --> 00:53:58
recurrent neural network which you will

00:53:55 --> 00:54:01
hear much more about I think in

00:53:57 --> 00:54:02
Richard's uh lecture just after this.

00:54:00 --> 00:54:04
And so I produce a sequence of 10,000

00:54:01 --> 00:54:05
dimensional vectors and that's just a

00:54:03 --> 00:54:06
description and they indicate the

00:54:04 --> 00:54:09
probabilities of different words to be

00:54:05 --> 00:54:10
mitted at different time steps. Or for

00:54:08 --> 00:54:13
example if you want to do localization

00:54:09 --> 00:54:15
again most of the block stays unchanged

00:54:12 --> 00:54:18
but now we also want some kind of a

00:54:14 --> 00:54:20
extent in the image. So suppose we want

00:54:17 --> 00:54:21
o classify we don't only just want to

00:54:19 --> 00:54:23
classify this as an airplane but we want

00:54:20 --> 00:54:25
o localize it with XY width height

00:54:22 --> 00:54:27
bounding box coordinates and if we make

00:54:24 --> 00:54:29
the specific assumption as well that

00:54:26 --> 00:54:30
here's always a single one thing in the

00:54:28 --> 00:54:32
image like a single airplane in every

00:54:29 --> 00:54:34
image then you can just afford to just

00:54:31 --> 00:54:36
predict that. So we predict these uh

00:54:34 --> 00:54:38
softmax scores just like before and

00:54:35 --> 00:54:40
apply the cross entropy loss and then we

00:54:37 --> 00:54:42
can predict XY with height on top of

00:54:39 --> 00:54:44
that and we use like an L2 loss or a

00:54:41 --> 00:54:46
Huber loss or something like that. So

00:54:43 --> 00:54:48
you just have a predicted thing, a

00:54:45 --> 00:54:50
desired thing and you just backdrop. If

00:54:48 --> 00:54:51
you want to do reinforcement learning

00:54:49 --> 00:54:53
because you want to play different

00:54:50 --> 00:54:55
games, then again the setup is you just

00:54:52 --> 00:54:56
predict some different thing and it has

00:54:54 --> 00:54:58
ome different semantics. So in this

00:54:55 --> 00:54:59
case we would be for example predicting

00:54:57 --> 00:55:00
eight numbers that give us the

00:54:58 --> 00:55:02
probabilities of taking different

00:55:00 --> 00:55:04
actions. For example, there are eight

00:55:01 --> 00:55:06
discrete actions in Atari. Then we just

00:55:03 --> 00:55:08
predict eight numbers and then we train

00:55:05 --> 00:55:09
this with slightly different manner

00:55:07 --> 00:55:11
because in the case of reinforcement

00:55:08 --> 00:55:13
learning you don't actually have a you

00:55:10 --> 00:55:15
don't actually know what the correct

00:55:12 --> 00:55:16
action is to take at any point in time

00:55:14 --> 00:55:18
but you can still get a desired thing

00:55:16 --> 00:55:21
eventually because you just run these

00:55:17 --> 00:55:24
rollouts over time and you just see uh

00:55:20 --> 00:55:26
what what happens and then um that helps

00:55:23 --> 00:55:27
you that helps inform exactly what the

00:55:25 --> 00:55:29
correct answer should have been or what

00:55:26 --> 00:55:30
he desired thing should have been in

00:55:28 --> 00:55:32
any one of those rollouts in any point

00:55:29 --> 00:55:33
in time. I don't want to dwell on this

00:55:31 --> 00:55:35
too much in this lecture though it's

00:55:32 --> 00:55:37
outside of the scope. You'll hear much

00:55:34 --> 00:55:37
more about reinforcement learning in in

00:55:36 --> 00:55:40
a later

00:55:37 --> 00:55:42
lecture. Uh if you wanted to do

00:55:39 --> 00:55:44
segmentation for example uh then you

00:55:41 --> 00:55:46
don't want to predict a single vector of

00:55:43 --> 00:55:48
numbers for a single uh for a single

00:55:45 --> 00:55:49
image but every single pixel has its own

00:55:47 --> 00:55:51
category that you'd like to predict. So

00:55:48 --> 00:55:52
a data set will actually be colored like

00:55:50 --> 00:55:55
this and you have different classes

00:55:51 --> 00:55:57
different areas and then instead of

00:55:54 --> 00:56:00
predicting a single vector of classes

00:55:56 --> 00:56:01
you predict an entire array of 224 x24

00:55:59 --> 00:56:03
since that's the extent of the original

00:56:00 --> 00:56:05
image for example times 20 if you have

00:56:02 --> 00:56:08
20 different classes and then you

00:56:04 --> 00:56:10
basically have uh 224 x24 independent

00:56:07 --> 00:56:12
softaxis here that's one way you could

00:56:09 --> 00:56:14
pose this and then you back propagate

00:56:11 --> 00:56:16
this would here would be slightly more

00:56:13 --> 00:56:18
difficult because you see here I have

00:56:15 --> 00:56:20
decom layers mentioned here and I didn't

00:56:17 --> 00:56:22
explain deconvolution layers. They're

00:56:19 --> 00:56:24
lated to convolutional layers. They do

00:56:21 --> 00:56:25
a very similar operation but kind of uh

00:56:23 --> 00:56:27
backwards in some way. So a

00:56:24 --> 00:56:29
convolutional layer kind of does these

00:56:26 --> 00:56:30
downsampling operations as it computes.

00:56:28 --> 00:56:32
A decom layer does these kind of

00:56:29 --> 00:56:34
upsampling operations as it computes

00:56:31 --> 00:56:36
these convolutions. But in fact you can

00:56:33 --> 00:56:38
implement a decom layer using a com

00:56:35 --> 00:56:40
layer. So what you do is you a decom

00:56:37 --> 00:56:42
forward pass is the com layer backward

00:56:39 --> 00:56:44
pass and the decom backward pass is the

00:56:41 --> 00:56:46
com layer forward pass basically. So

00:56:43 --> 00:56:48
they're basically an identical operation

00:56:45 --> 00:56:50
but it just are you upsampling or

00:56:47 --> 00:56:52
downsampling kind of. So uh you can use

00:56:49 --> 00:56:53
decon layers or you can use hyper

00:56:51 --> 00:56:55
columns and there are different things

00:56:52 --> 00:56:57
that people do in segmentation

00:56:54 --> 00:56:58
literature but that's just a rough idea

00:56:56 --> 00:57:00
s you're just changing the loss

00:56:57 --> 00:57:01
function at the end. If you wanted to do

00:56:59 --> 00:57:02
autoenccoders so you want to do some

00:57:00 --> 00:57:04
unsurprised learning or something like

00:57:02 --> 00:57:06
that. Well you're just trying to predict

00:57:03 --> 00:57:07
he original image. So you're trying to

00:57:05 --> 00:57:10
get the convolutional network to

00:57:06 --> 00:57:11
implement the identity transformation.

00:57:09 --> 00:57:13
And the trick of course that makes it

00:57:10 --> 00:57:14
non-trivial is that you're forcing the

00:57:12 --> 00:57:16
representation to go through this

00:57:13 --> 00:57:18
representational bottleneck of 7 by7 x

00:57:15 --> 00:57:19
512. So the network must find an

00:57:17 --> 00:57:22
efficient representation of the original

00:57:18 --> 00:57:24
image so that it can decode it later. So

00:57:21 --> 00:57:25
that would be a autoenccoder you again

00:57:23 --> 00:57:27
have an L2 loss at the end and you back

00:57:24 --> 00:57:29
prop or if you want to do variational

00:57:26 --> 00:57:30
autoenccoders you have to introduce a

00:57:28 --> 00:57:32
reparameterization layer and you have to

00:57:30 --> 00:57:34
append an additional small loss that

00:57:31 --> 00:57:36
makes your posterior be your prior but

00:57:33 --> 00:57:37
it's just like an additional layer and

00:57:35 --> 00:57:39
then you have an entire generative model

00:57:36 --> 00:57:42
and you can actually like sample images

00:57:38 --> 00:57:44
as well. If you wanted to do detection

00:57:41 --> 00:57:45
things get a little more hairy perhaps

00:57:43 --> 00:57:47
compared to localization or something

00:57:44 --> 00:57:48
like that. So one of my favorite

00:57:46 --> 00:57:50
detectors perhaps to explain is the

00:57:47 --> 00:57:52
yellow detector because it's perhaps the

00:57:49 --> 00:57:53
simplest one. It doesn't work the best

00:57:51 --> 00:57:55
but it's the simplest one to explain and

00:57:52 --> 00:57:58
it has the core idea of how people do

00:57:54 --> 00:58:01
detection in uh computer vision. And so

00:57:57 --> 00:58:04
the way this works is we reduced the

00:58:00 --> 00:58:06
original image to a 7x7 x 512 feature.

00:58:03 --> 00:58:10
So really there are these 49 discrete

00:58:05 --> 00:58:12
locations that we have and um at every

00:58:09 --> 00:58:14
single one of these 49 locations we're

00:58:11 --> 00:58:16
going to predict in yellow we're going

00:58:13 --> 00:58:17
to predict a class. So that's shown here

00:58:15 --> 00:58:20
on the top right. So every single one of

00:58:16 --> 00:58:22
these 49 will be some kind of a softmax.

00:58:20 --> 00:58:24
And then additionally at every single

00:58:21 --> 00:58:26
position we're going to predict some

00:58:23 --> 00:58:28
number of bounding boxes. And so there's

00:58:25 --> 00:58:30
going to be a b number of bounding

00:58:27 --> 00:58:33
boxes. Say b is 10. So we're going to be

00:58:29 --> 00:58:34
predicting uh 50 numbers. And the the

00:58:32 --> 00:58:35
five comes from the fact that every

00:58:33 --> 00:58:37
bounding box will have five numbers

00:58:34 --> 00:58:38
associated with it. So you have to

00:58:36 --> 00:58:41
describe the x y the width and the

00:58:38 --> 00:58:42
ight. And you have to also indicate

00:58:40 --> 00:58:45
some kind of a confidence of that

00:58:41 --> 00:58:46
bounding box. Um so that's the fifth

00:58:44 --> 00:58:48
number is some kind of a confidence

00:58:45 --> 00:58:49
measure. So you basically end up

00:58:47 --> 00:58:51
redicting these bounding boxes. They

00:58:48 --> 00:58:53
have positions, they have class, they

00:58:50 --> 00:58:55
have confidence and then you have some

00:58:52 --> 00:58:57
true bounding boxes in the image. So you

00:58:54 --> 00:59:00
know that there are certain true boxes

00:58:56 --> 00:59:02
and they have certain class and what you

00:58:59 --> 00:59:05
do then is you match up the desired

00:59:01 --> 00:59:07
thing with the predicted thing and

00:59:04 --> 00:59:09
whatever. So say for example you had one

00:59:06 --> 00:59:11
um bounding box of a cat then you would

00:59:08 --> 00:59:13
find the closest predicted bounding box

00:59:10 --> 00:59:15
and you would mark it as a positive and

00:59:12 --> 00:59:17
you would try to make that associated

00:59:14 --> 00:59:19
grit cell predict cat and you would

00:59:16 --> 00:59:22
nudge the prediction to be slightly more

00:59:18 --> 00:59:23
towards the cat uh box and so all of

00:59:21 --> 00:59:24
this can be done with simple losses and

00:59:22 --> 00:59:26
you just back propagate that and then

00:59:23 --> 00:59:28
you have a detector or if you want to

00:59:26 --> 00:59:30
get much more fancy you could do uh

00:59:27 --> 00:59:32
dense image captioning so in this case

00:59:29 --> 00:59:34
this is a combination of detection and

00:59:31 --> 00:59:36
image captioning this is a paper with my

00:59:33 --> 00:59:38
equal co-author Justin Johnson and FA

00:59:35 --> 00:59:39
Lee from last year. And so what we did

00:59:37 --> 00:59:41
here is image comes in and it becomes

00:59:38 --> 00:59:43
much more complex. I don't maybe want to

00:59:40 --> 00:59:45
go into it as much but the first order

00:59:42 --> 00:59:46
approximation is that instead it's

00:59:44 --> 00:59:48
basically detection but instead of

00:59:45 --> 00:59:51
predicting fixed classes we instead

00:59:48 --> 00:59:53
predict a sequence of words. So we use a

00:59:50 --> 00:59:54
recurrent neural network there. Uh but

00:59:52 --> 00:59:56
basically you can take an image then and

00:59:53 --> 00:59:57
you can predict you can both detect and

00:59:55 --> 01:00:00
predict and describe everything in a

00:59:56 --> 01:00:01
complex visual scene. So that's just

00:59:59 --> 01:00:03
some overview of different tasks that

01:00:00 --> 01:00:06
people care about. Most of them consist

01:00:02 --> 01:00:07
of just changing this top part. You put

01:00:05 --> 01:00:08
different loss function in a different

01:00:06 --> 01:00:10
data set. But you'll see that this

01:00:08 --> 01:00:12
computational block stays relatively

01:00:09 --> 01:00:14
unchanged from time to time. And that's

01:00:11 --> 01:00:15
why as I mentioned when you do transfer

01:00:13 --> 01:00:17
learning um you just want to kind of

01:00:14 --> 01:00:19
take these pre-trained networks and you

01:00:16 --> 01:00:20
mostly want to use whatever works well

01:00:18 --> 01:00:21
on imageet because a lot of that does

01:00:19 --> 01:00:24
not change too

01:00:20 --> 01:00:26
much. Okay. So in the last part of the

01:00:23 --> 01:00:28
talk I'd like to let me just make sure

01:00:25 --> 01:00:29
we're good on time. Okay, we're good. So

01:00:27 --> 01:00:31
in the last part of the talk I just

01:00:28 --> 01:00:33
wanted to give some um hints of some

01:00:30 --> 01:00:34
practical considerations when you want

01:00:32 --> 01:00:36
o apply convolutional networks in

01:00:33 --> 01:00:38
practice. So first consideration you

01:00:36 --> 01:00:41
might have if you want to run these

01:00:37 --> 01:00:43
networks is what hardware do I use? Um

01:00:40 --> 01:00:45
so some of the options that um I think

01:00:42 --> 01:00:47
are available to you well first of all

01:00:44 --> 01:00:49
you can just buy a machine. So for

01:00:46 --> 01:00:51
example Nvidia uh has these digits dev

01:00:48 --> 01:00:54
boxes that you can buy. They have Titan

01:00:50 --> 01:00:56
X GPUs which are strong GPUs. You can

01:00:53 --> 01:00:58
also, if you're much more ambitious, you

01:00:55 --> 01:01:00
can buy DGX1, which has the newest

01:00:57 --> 01:01:02
Pascal P100 GPUs. Unfortunately, the

01:00:59 --> 01:01:04
DGX1 is about

01:01:01 --> 01:01:07
$130,000. So, this is kind of an

01:01:03 --> 01:01:08
expensive supercomputer. Uh, but the dig

01:01:06 --> 01:01:11
box, I think, is a more accessible. And

01:01:08 --> 01:01:13
so, that's one option you can go with.

01:01:10 --> 01:01:16
Alternatively, you can look at the specs

01:01:12 --> 01:01:17
of a dev box and those specs are they're

01:01:15 --> 01:01:19
good specs, and then you can buy all the

01:01:16 --> 01:01:22
components yourself and assemble it like

01:01:18 --> 01:01:24
Lego. Unfortunately u you that's prone

01:01:21 --> 01:01:25
to mistakes of course but you can

01:01:23 --> 01:01:28
definitely reduce the price maybe by a

01:01:24 --> 01:01:30
factor of like two um if compared to the

01:01:27 --> 01:01:31
Nvidia machine but of course Nvidia

01:01:29 --> 01:01:32
machine would just come with all the

01:01:30 --> 01:01:35
software installed all the hardware is

01:01:32 --> 01:01:36
ready and you can just do work there are

01:01:34 --> 01:01:38
a few GPU offerings in the cloud but

01:01:35 --> 01:01:40
unfortunately it's actually not at a

01:01:37 --> 01:01:41
good place right now uh it's actually

01:01:39 --> 01:01:44
quite difficult to get GPUs in the cloud

01:01:40 --> 01:01:47
good GPUs at least. So, Amazon AWS has

01:01:43 --> 01:01:49
these grid K5 520s. They're not very

01:01:46 --> 01:01:50
good GPUs. They're not fast. They don't

01:01:48 --> 01:01:53
have too much memory. It's actually kind

01:01:49 --> 01:01:54
of a problem. Um, Microsoft Azure is

01:01:52 --> 01:01:57
coming up, Azure is coming up with its

01:01:53 --> 01:01:58
own offering soon. Uh, so I think uh

01:01:56 --> 01:02:00
they've announced it and it's in some

01:01:57 --> 01:02:01
kind of a beta stage if I remember

01:01:59 --> 01:02:03
correctly. And so those are powerful

01:02:00 --> 01:02:05
GPUs K80s that would be available to

01:02:02 --> 01:02:07
you. At OpenAI for example, you use

01:02:04 --> 01:02:09
Cirrus Scale. So Serale is much more a

01:02:06 --> 01:02:11
slightly different model. You can't spin

01:02:08 --> 01:02:13
up GPUs on demand, but they allow you to

01:02:10 --> 01:02:14
rent a box in the cloud. So what that

01:02:12 --> 01:02:17
amounts to is that we have these boxes

01:02:13 --> 01:02:20
omewhere in the cloud. I have just the

01:02:16 --> 01:02:22
DNS. I just have the URL. I SSH to

01:02:19 --> 01:02:24
it. It's a it's a TitanX boxes in the

01:02:21 --> 01:02:27
machine. And so you can just do work

01:02:23 --> 01:02:30
that way. So these options are available

01:02:26 --> 01:02:31
to hardware wise. In terms of software,

01:02:29 --> 01:02:32
there are many different frameworks of

01:02:30 --> 01:02:34
course that you could use for deep

01:02:31 --> 01:02:36
learning. Uh so these are some of the

01:02:33 --> 01:02:38
more um common ones that you might see

01:02:35 --> 01:02:40
in practice. Um so different people have

01:02:37 --> 01:02:42
different um recommendations on this. I

01:02:39 --> 01:02:43
would my personal recommendation right

01:02:41 --> 01:02:46
now to most people if you just want to

01:02:42 --> 01:02:48
apply this in uh practical settings 90%

01:02:45 --> 01:02:50
of the use cases are probably

01:02:47 --> 01:02:53
addressable with things like KAS. So KAS

01:02:49 --> 01:02:56
would be my go-to number one uh thing to

01:02:52 --> 01:02:59
look at. Keras is a layer over

01:02:55 --> 01:03:01
TensorFlow or Theano. Uh and basically

01:02:58 --> 01:03:02
it's just a higher level API over either

01:03:00 --> 01:03:05
of those. So for example I usually use

01:03:02 --> 01:03:08
Keras on top of TensorFlow and uh it's a

01:03:04 --> 01:03:09
much more um higher level language than

01:03:07 --> 01:03:11
raw tensorflow. So you can also work in

01:03:08 --> 01:03:13
raw tensorflow but you'll have to do a

01:03:10 --> 01:03:15
lot of low-level stuff. If you need all

01:03:12 --> 01:03:16
that freedom, then that's great because

01:03:14 --> 01:03:17
that allows you to have much more

01:03:15 --> 01:03:20
freedom in terms of how you design

01:03:16 --> 01:03:21
everything. But um it can be slightly

01:03:19 --> 01:03:22
more wordy. For example, you have to

01:03:20 --> 01:03:25
assign every single weight. You have to

01:03:21 --> 01:03:26
assign a name, stuff like that. And so

01:03:24 --> 01:03:28
it's just much more wordy, but you can

01:03:26 --> 01:03:30
work at that level. Or for most

01:03:27 --> 01:03:31
applications, I think KAS would be

01:03:29 --> 01:03:33
sufficient. And I've used Torch for a

01:03:30 --> 01:03:35
long time. I still really like Torch.

01:03:32 --> 01:03:37
It's very lightweight, interpretable. It

01:03:34 --> 01:03:39
works just just fine. So those are the

01:03:36 --> 01:03:41
options that I would uh currently

01:03:38 --> 01:03:43
consider at least.

01:03:40 --> 01:03:45
Um, another practical consideration you

01:03:42 --> 01:03:46
might be wondering what architecture

01:03:44 --> 01:03:48
do I use in my

01:03:46 --> 01:03:51
problem. So my answer here and I've

01:03:47 --> 01:03:53
already hinted at this is don't be a

01:03:50 --> 01:03:55
hero. Don't go crazy. Don't design your

01:03:52 --> 01:03:57
own neural networks and convolutional

01:03:54 --> 01:03:59
ayers and don't probably don't you

01:03:56 --> 01:04:01
don't want want to do that probably. So

01:03:58 --> 01:04:04
the algorithm is actually very simple.

01:04:00 --> 01:04:05
Look at whatever is currently the latest

01:04:03 --> 01:04:08
released thing that works really well in

01:04:04 --> 01:04:10
ILSVRC. you download that pre-trained

01:04:07 --> 01:04:11
model and then you potentially add or

01:04:09 --> 01:04:13
delete some layers on top because you

01:04:10 --> 01:04:14
want to do some other task. So that

01:04:12 --> 01:04:16
usually requires some tinkering at the

01:04:14 --> 01:04:18
top or something like that and then you

01:04:15 --> 01:04:20
fine-tune it on your application. So

01:04:17 --> 01:04:22
actually a very straightforward process.

01:04:19 --> 01:04:23
Uh the first degree I think to most

01:04:21 --> 01:04:26
applications would be don't tinker with

01:04:22 --> 01:04:28
it too much you're going to break it.

01:04:25 --> 01:04:29
But of course you can also take 231N and

01:04:27 --> 01:04:31
then you might become much better at u

01:04:28 --> 01:04:35
at tinkering with with these

01:04:30 --> 01:04:37
architectures. Second uh is uh how do I

01:04:34 --> 01:04:40
choose the parameters? And my answer

01:04:36 --> 01:04:41
here again would be don't be a hero. Uh

01:04:39 --> 01:04:42
look into papers, look what

01:04:40 --> 01:04:44
hyperarameters they use. For the most

01:04:41 --> 01:04:45
part, you'll see that all papers use the

01:04:43 --> 01:04:48
same hyperparameters. They look very

01:04:44 --> 01:04:49
similar. So Adam, when you use Adam for

01:04:47 --> 01:04:52
optimization, it's always learning rate

01:04:48 --> 01:04:55
1G3 or 1G4.

01:04:51 --> 01:04:57
Uh so for you can also use SGD momentum,

01:04:54 --> 01:04:58
it's always the similar kinds of

01:04:56 --> 01:05:00
learning rates. So don't go too crazy

01:04:57 --> 01:05:01
designing this. One of the things you

01:04:59 --> 01:05:03
probably want to play with the most is

01:05:00 --> 01:05:05
the regularization. So uh and in

01:05:02 --> 01:05:07
particular not the L2 regularization but

01:05:04 --> 01:05:09
he dropout rates is something I would

01:05:06 --> 01:05:11
advise instead and

01:05:08 --> 01:05:13
um so uh because you might have a

01:05:10 --> 01:05:14
smaller or a much larger data set. If

01:05:12 --> 01:05:15
you have a much smaller data set then

01:05:13 --> 01:05:17
overfitting is a concern. So you want to

01:05:14 --> 01:05:19
make sure that you uh regularize

01:05:16 --> 01:05:21
properly with dropout and then you might

01:05:18 --> 01:05:23
want to as a second degree consideration

01:05:20 --> 01:05:24
uh maybe learning rate you want to tune

01:05:22 --> 01:05:27
that a tiny bit but that that's usually

01:05:23 --> 01:05:28
doesn't have as much of an effect. Um so

01:05:26 --> 01:05:30
really there's like two hyperparameters

01:05:27 --> 01:05:31
and you take a pre-trained network and

01:05:29 --> 01:05:33
this is 90% of the use cases I would

01:05:30 --> 01:05:36
say.

01:05:32 --> 01:05:37
Um yeah so compared to when computer

01:05:35 --> 01:05:42
vision 2011 where you might have

01:05:36 --> 01:05:44
hundreds of hyperparameters so uh yeah

01:05:41 --> 01:05:46
okay and uh in terms of uh distributed

01:05:43 --> 01:05:48
training so if you want to work at scale

01:05:45 --> 01:05:50
because uh if you want to train imageet

01:05:47 --> 01:05:52
or some large scale data sets you might

01:05:49 --> 01:05:53
want to train across multiple GPUs. So,

01:05:51 --> 01:05:55
just to give you an idea, most of these

01:05:52 --> 01:05:56
state-of-the-art networks are trained on

01:05:54 --> 01:05:59
the order of a few weeks across multiple

01:05:55 --> 01:06:01
GPUs, usually four or eight GPUs. And

01:05:58 --> 01:06:03
these GPUs are roughly on the order of

01:06:00 --> 01:06:04
$1,000 each, but then you also have to

01:06:02 --> 01:06:06
house them. So, of course, that adds

01:06:03 --> 01:06:07
additional price. But you almost always

01:06:05 --> 01:06:10
want to train on multiple GPUs if

01:06:06 --> 01:06:11
possible. Um, usually you don't end up

01:06:09 --> 01:06:13
training across machines. That's much

01:06:10 --> 01:06:14
more rare, I think, to train across

01:06:12 --> 01:06:16
machines. What's much more common is you

01:06:13 --> 01:06:18
have a single machine and it has eight

01:06:15 --> 01:06:19
Titan X's or something like that and you

01:06:17 --> 01:06:21
do distributed training on those eight

01:06:18 --> 01:06:22
Titan X's. There are different ways to

01:06:20 --> 01:06:24
do distributed training. So if you're

01:06:22 --> 01:06:26
very if you're feeling fancy, you can

01:06:23 --> 01:06:28
try to do some uh model parallelism

01:06:25 --> 01:06:31
where you split your network across

01:06:27 --> 01:06:32
multiple GPUs. Um I would instead advise

01:06:30 --> 01:06:34
some kind of a data parallelism

01:06:31 --> 01:06:36
architecture. So usually what you see in

01:06:33 --> 01:06:39
practice is you have eight GPUs. So I

01:06:35 --> 01:06:41
take my batch of 256 images or something

01:06:38 --> 01:06:43
like that. I split it and I split it

01:06:40 --> 01:06:45
equally across the GPUs. I do forward

01:06:42 --> 01:06:47
pass in those GPUs and then I u I

01:06:44 --> 01:06:49
basically just add up all the gradients

01:06:46 --> 01:06:50
and I propagate that through. So you're

01:06:48 --> 01:06:52
just distributing this batch and you're

01:06:49 --> 01:06:54
doing um mathematically you're doing the

01:06:51 --> 01:06:56
xact same thing as if you had a giant

01:06:53 --> 01:06:58
GPU but you're just splitting up that

01:06:55 --> 01:06:59
batch across different GPUs. Uh but

01:06:57 --> 01:07:01
you're still doing synchronous training

01:06:58 --> 01:07:02
with SGD as normal. So that's what

01:07:00 --> 01:07:04
you'll see most in practice which I

01:07:01 --> 01:07:07
think is uh the best thing to do right

01:07:03 --> 01:07:09
now for most normal

01:07:06 --> 01:07:10
applications. And other kind of

01:07:08 --> 01:07:12
considerations that sometimes enter that

01:07:10 --> 01:07:14
uh you could maybe worry about is that

01:07:11 --> 01:07:16
here are these bottlenecks to be aware

01:07:13 --> 01:07:17
of. So in particular CPU to disk

01:07:15 --> 01:07:19
bottleneck. This means that you have a

01:07:16 --> 01:07:21
giant data set. It's somewhere on some

01:07:18 --> 01:07:23
disk. You want that disk to probably be

01:07:20 --> 01:07:25
an SSD because you want this loading to

01:07:22 --> 01:07:26
be quick because these GPUs process data

01:07:24 --> 01:07:27
very quickly and that might actually be

01:07:25 --> 01:07:29
a bottleneck. Like loading the data

01:07:26 --> 01:07:30
could be a bottleneck. So in many

01:07:28 --> 01:07:32
applications, you might want to

01:07:29 --> 01:07:34
pre-process your data. Make sure that

01:07:31 --> 01:07:36
it's read out contiguously in very raw

01:07:33 --> 01:07:39
form from something like an HDFI file or

01:07:35 --> 01:07:41
some kind of other binary format. And um

01:07:38 --> 01:07:43
another bottleneck to be aware of is the

01:07:40 --> 01:07:44
CPU GPU bottleneck. So the GPU is doing

01:07:42 --> 01:07:46
a lot of heavy lifting of the neural

01:07:43 --> 01:07:48
network and the CPU is loading the data

01:07:46 --> 01:07:50
nd you might want to use things like

01:07:47 --> 01:07:52
pre-fetching threads where the CPU while

01:07:49 --> 01:07:54
the networks are doing forward backward

01:07:51 --> 01:07:56
on the GPU. Your CPU is busy loading the

01:07:53 --> 01:07:58
data from the disk and maybe doing some

01:07:55 --> 01:08:00
pre-processing and making sure that it

01:07:57 --> 01:08:02
can um ship it off to the GPU at the

01:07:59 --> 01:08:04
next time step. So those are some of the

01:08:01 --> 01:08:05
practical considerations I I could come

01:08:03 --> 01:08:06
up with for this lecture. Uh if you

01:08:04 --> 01:08:08
wanted to learn much more about

01:08:05 --> 01:08:09
convolutional neural networks and a lot

01:08:07 --> 01:08:12
of what I've been talking about, then I

01:08:08 --> 01:08:14
encourage you to check out CS231N. Uh we

01:08:11 --> 01:08:15
have lecture videos available. We have

01:08:13 --> 01:08:18
notes, slides, and assignments.

01:08:14 --> 01:08:20
Everything is uh up uh and available. So

01:08:17 --> 01:08:23
uh you're welcome to check it out. And

01:08:19 --> 01:08:31
that's it. Thank you.

01:08:22 --> 01:08:33
[Applause]

01:08:30 --> 01:08:36
So I guess I can take some questions.

01:08:32 --> 01:08:36
Yeah.

01:08:53 --> 01:09:00
Hello. Hello.

01:08:56 --> 01:09:01
Hi. I'm Kyle Far from Lumna. Um, I'm

01:08:59 --> 01:09:03
using a lot of convolutional nets for

01:09:00 --> 01:09:05
genomics. One of the problems that we

01:09:02 --> 01:09:08
see is that our genomic sequence tends

01:09:04 --> 01:09:09
to be arbitrary length. Uh so right now

01:09:07 --> 01:09:11
e're pattern with a lot of zeros, but

01:09:08 --> 01:09:14
we're curious as to what your thoughts

01:09:10 --> 01:09:16
are on using CNN's for uh things of

01:09:13 --> 01:09:19
arbitrary size or we can't just down

01:09:15 --> 01:09:21
sample to 277 by 277. Yep. So is this

01:09:18 --> 01:09:22
like a genomic sequence of like ATCG

01:09:20 --> 01:09:24
like that kind of sequence? Yeah,

01:09:22 --> 01:09:26
exactly. Yeah. So some of the options

01:09:23 --> 01:09:27
would be uh so recurren networks might

01:09:25 --> 01:09:30
be a good fit because they allow

01:09:26 --> 01:09:31
arbitrarily sized contacts. Uh another

01:09:29 --> 01:09:34
option I would say is if you look at the

01:09:30 --> 01:09:35
waveet paper uh from deep mind they have

01:09:33 --> 01:09:36
uh audio and they're using convolutional

01:09:34 --> 01:09:37
networks for processing it and I would

01:09:36 --> 01:09:39
basically adopt that kind of an

01:09:36 --> 01:09:41
architecture. they have this clever way

01:09:38 --> 01:09:43
of doing uh what's called atros or

01:09:40 --> 01:09:45
dilated convolutions and so that allows

01:09:42 --> 01:09:47
you to capture a lot of context with few

01:09:44 --> 01:09:49
layers and so that's called dilated

01:09:46 --> 01:09:50
convolutions and the waveet paper has

01:09:48 --> 01:09:51
ome details and there's an efficient

01:09:49 --> 01:09:53
implementation of it that you should be

01:09:50 --> 01:09:54
aware of on GitHub and so you might be

01:09:52 --> 01:09:57
able to just drag and drop the fast

01:09:53 --> 01:09:58
WaveNet code into that application and

01:09:56 --> 01:10:00
so you have much larger context but it's

01:09:57 --> 01:10:01
of course not infinite context as you

01:09:59 --> 01:10:03
might have with a recurrent network yeah

01:10:00 --> 01:10:05
we're definitely checking those out uh

01:10:02 --> 01:10:07
we also tried RNN's they're quite slow

01:10:04 --> 01:10:09
for these things uh our main problem is

01:10:06 --> 01:10:11
that the genes can be very short or very

01:10:08 --> 01:10:13
long, but the whole sequence matters.

01:10:10 --> 01:10:15
Um, so I I think that's one of the

01:10:12 --> 01:10:18
challenges that we're looking at with

01:10:14 --> 01:10:19
is type of problem. Interesting. Um,

01:10:17 --> 01:10:20
yeah. So those would be the two options

01:10:18 --> 01:10:21
that I would play with basically. I

01:10:19 --> 01:10:26
think those are the two that I'm aware

01:10:20 --> 01:10:26
of. Yeah, thank you.

01:10:27 --> 01:10:32
Thanks for a great lecture. So my

01:10:29 --> 01:10:34
question is that is there a clear

01:10:31 --> 01:10:36
mathematical or conceptual understanding

01:10:33 --> 01:10:37
when people decide how many hidden

01:10:35 --> 01:10:41
layers have to be part of their

01:10:36 --> 01:10:42
architecture? Yeah. So um the answer

01:10:40 --> 01:10:44
with a lot of this is there a

01:10:41 --> 01:10:46
mathematical understanding will likely

01:10:43 --> 01:10:47
be no because we are in very early

01:10:45 --> 01:10:50
phases of just doing a lot of empirical

01:10:46 --> 01:10:52
anal like guess and check kind of work.

01:10:49 --> 01:10:54
Um and so theory is in some some ways

01:10:51 --> 01:10:56
like lagging behind a bit. Uh I would

01:10:53 --> 01:10:58
say that with residual networks uh you

01:10:55 --> 01:11:00
want to have more layers usually works

01:10:57 --> 01:11:02
better and so you can take these layers

01:10:59 --> 01:11:04
out or you can put them in and it's just

01:11:01 --> 01:11:06
mostly a computational consideration of

01:11:03 --> 01:11:08
how much can you fit in. So our

01:11:05 --> 01:11:10
considerations usually is you have a GPU

01:11:07 --> 01:11:12
it has maybe 16 gigs of RAM or 12 gigs

01:11:09 --> 01:11:14
of RAM or something. I want certain

01:11:11 --> 01:11:15
batch size and I have these

01:11:13 --> 01:11:17
considerations and that upper bounds the

01:11:14 --> 01:11:19
amount of like layers or how big they

01:11:16 --> 01:11:21
could be. And so I use the biggest thing

01:11:18 --> 01:11:24
that fits in my GPU. And that's mostly

01:11:20 --> 01:11:25
what uh the way you choose this. And

01:11:23 --> 01:11:27
then you regularize it very strongly. So

01:11:24 --> 01:11:28
if you have a very small data set uh

01:11:26 --> 01:11:29
then you might end up with a pretty big

01:11:27 --> 01:11:31
network for your data set. So you might

01:11:28 --> 01:11:32
want to make sure that you are tuning

01:11:30 --> 01:11:36
those dropout rates properly and so

01:11:31 --> 01:11:36
you're not overfitting.

01:11:38 --> 01:11:43
So I have question uh my understanding

01:11:39 --> 01:11:45
is that uh uh the recent uh convolution

01:11:42 --> 01:11:48
doesn't use pooling layers right. So the

01:11:44 --> 01:11:51
question is why uh you know why don't

01:11:47 --> 01:11:54
hey use pulling layers? So you know is

01:11:50 --> 01:11:55
there still a place for pulling? Yeah.

01:11:53 --> 01:11:58
Uh yeah. So certainly so if you saw for

01:11:54 --> 01:11:59
example the residual network um at the

01:11:57 --> 01:12:01
nd there was a single pooling layer at

01:11:58 --> 01:12:03
he very beginning but mostly they went

01:12:00 --> 01:12:05
away. You're right. So it took uh I

01:12:02 --> 01:12:06
wonder if I can find the slide. I wonder

01:12:04 --> 01:12:08
if this is a good idea to try to find

01:12:05 --> 01:12:08
the

01:12:08 --> 01:12:12
slide. That's probably okay. Let me just

01:12:10 --> 01:12:15
find

01:12:11 --> 01:12:17
this. Oh okay. So this was the residual

01:12:14 --> 01:12:19
network architecture. So you see that

01:12:16 --> 01:12:21
hey do a first com and then there's a

01:12:18 --> 01:12:22
single pool right there. But certainly

01:12:20 --> 01:12:24
the trend has been to throw them away

01:12:21 --> 01:12:26
over time and there's a paper also uh

01:12:23 --> 01:12:29
it's called striving for simplicity the

01:12:25 --> 01:12:30
all convolutional neural network and uh

01:12:28 --> 01:12:32
the point in that paper is look you can

01:12:29 --> 01:12:33
actually do strided convolutions you can

01:12:31 --> 01:12:35
throw away pooling layers altogether

01:12:32 --> 01:12:37
works just as well. So pulling layers

01:12:34 --> 01:12:39
are kind of I would say this kind of a

01:12:36 --> 01:12:40
bit of a historical vestage of they

01:12:38 --> 01:12:41
needed things to be efficient and they

01:12:39 --> 01:12:44
need to control the capacity and down

01:12:40 --> 01:12:45
sample things uh quite a lot and so

01:12:43 --> 01:12:47
we're kind of throwing them away over

01:12:44 --> 01:12:49
time and uh yeah they're not doing

01:12:46 --> 01:12:51
anything like super useful. They're

01:12:48 --> 01:12:53
doing this fixed operation and uh you

01:12:50 --> 01:12:54
want to learn as much as possible so

01:12:52 --> 01:12:57
maybe you don't actually want to get rid

01:12:53 --> 01:12:59
of that information. Uh so it's always

01:12:56 --> 01:13:00
more appealing to um it's probably more

01:12:58 --> 01:13:03
appealing I would say to throw them

01:12:59 --> 01:13:06
away. uh you mentioned there is a sort

01:13:02 --> 01:13:08
of cognitive uh or brain analogy that

01:13:05 --> 01:13:10
he brain is doing pulling so uh yeah so

01:13:07 --> 01:13:11
I think that analogy is stretched by a

01:13:09 --> 01:13:12
lot so the brain I'm not sure if the

01:13:10 --> 01:13:14
brain is doing

01:13:11 --> 01:13:17
[Laughter]

01:13:13 --> 01:13:20
pooling yeah

01:13:16 --> 01:13:22
about image compression not for just

01:13:19 --> 01:13:24
classification but the usage of uh

01:13:21 --> 01:13:25
neural networks for image compression do

01:13:23 --> 01:13:27
we have any examples sorry I couldn't

01:13:24 --> 01:13:29
hear the question uh instead of

01:13:26 --> 01:13:31
classification for images uh can we use

01:13:28 --> 01:13:34
the neural networks for uh image

01:13:30 --> 01:13:35
compression. Image compression. Uh yeah,

01:13:33 --> 01:13:37
I think there's actually really exciting

01:13:34 --> 01:13:39
work in this area. So um one that I'm

01:13:36 --> 01:13:41
aware of for example is recent work from

01:13:38 --> 01:13:42
Google where they're using convolutional

01:13:40 --> 01:13:45
networks and recurrent networks to come

01:13:41 --> 01:13:46
up with variably sized codes for images.

01:13:44 --> 01:13:48
Um so certainly a lot of these

01:13:45 --> 01:13:50
generative models I mean they are very

01:13:47 --> 01:13:52
related to compression. Uh so definitely

01:13:50 --> 01:13:54
a lot of work in that area that uh that

01:13:52 --> 01:13:56
I'm excited about. Also for example

01:13:53 --> 01:13:58
super resolution networks. So you saw

01:13:55 --> 01:14:01
the recent acquisition uh of um magic

01:13:57 --> 01:14:02
pony by Twitter. So they were also doing

01:14:00 --> 01:14:04
something that basically allows you to

01:14:01 --> 01:14:06
compress, you can send low resolution

01:14:03 --> 01:14:08
streams because you can upsample it on

01:14:05 --> 01:14:11
the client. Uh and so a lot of work in

01:14:07 --> 01:14:12
that area. Yeah,

01:14:10 --> 01:14:14
I had one question. One more but maybe

01:14:11 --> 01:14:17
after you

01:14:14 --> 01:14:19
can you please comment on scalability

01:14:16 --> 01:14:22
regarding number of classes? So what

01:14:18 --> 01:14:25
does it take if we go up to 10,000 or

01:14:21 --> 01:14:26
100,000 classes? Mhm. Yes. Yeah. So if

01:14:24 --> 01:14:28
you have a lot of classes then of course

01:14:25 --> 01:14:29
you can grow your softmax but that

01:14:27 --> 01:14:31
becomes inefficient at some point

01:14:28 --> 01:14:32
because you're doing a giant matrix

01:14:30 --> 01:14:34
multiply. So some of the ways that

01:14:31 --> 01:14:36
people are addressing this in practice I

01:14:33 --> 01:14:39
believe is use of like hierarchical

01:14:35 --> 01:14:41
softmax and things like that. Uh so you

01:14:38 --> 01:14:43
m you decompose your classes into

01:14:40 --> 01:14:45
groups and then uh you kind of predict

01:14:42 --> 01:14:49
one group at a time and you kind of

01:14:44 --> 01:14:50
converge uh that way. Um so I'm not I I

01:14:48 --> 01:14:52
see these papers but I don't uh I'm not

01:14:50 --> 01:14:54
an expert on exactly how this works but

01:14:51 --> 01:14:54
I do know that hierarchical softmax is

01:14:53 --> 01:14:56
omething that people use in this

01:14:53 --> 01:14:57
etting especially for example in

01:14:55 --> 01:14:59
language models this is often used

01:14:56 --> 01:15:01
because you have huge amount of words

01:14:58 --> 01:15:02
and you still need to predict them

01:15:00 --> 01:15:03
somehow and so I believe Thomas Mikolof

01:15:01 --> 01:15:07
or example he has some papers on using

01:15:02 --> 01:15:09
hierarchical softmax in this context

01:15:06 --> 01:15:12
could you uh could you talk a little bit

01:15:08 --> 01:15:14
about the u the convolutional functions

01:15:11 --> 01:15:15
like what uh what considerations you

01:15:13 --> 01:15:17
should make in u uh selecting the

01:15:14 --> 01:15:19
functions they're used in any

01:15:16 --> 01:15:20
convolutional filters selecting the

01:15:18 --> 01:15:22
functions that are used in the

01:15:19 --> 01:15:24
convolutional filters. Uh so these

01:15:21 --> 01:15:26
filters are just parameters, right? So

01:15:23 --> 01:15:28
we train those filters. They're just

01:15:25 --> 01:15:30
numbers that we train with back

01:15:27 --> 01:15:32
propagation. Okay. Are you talking about

01:15:29 --> 01:15:35
he nonlinearities perhaps or Yeah, I'm

01:15:32 --> 01:15:37
just wondering about uh when you're

01:15:34 --> 01:15:38
selecting those uh the features or when

01:15:36 --> 01:15:40
you're getting the uh when you're trying

01:15:37 --> 01:15:42
to train to to uh understand different

01:15:39 --> 01:15:45
features within an image, what uh what

01:15:41 --> 01:15:46
are those uh filters actually doing? Oh,

01:15:44 --> 01:15:47
I see you're talking about understanding

01:15:45 --> 01:15:49
exactly what those filters are looking

01:15:46 --> 01:15:52
for in so a lot of interesting work

01:15:48 --> 01:15:54
especially for example so Jason Yosinski

01:15:51 --> 01:15:55
uh he has this deepest toolbox and I've

01:15:53 --> 01:15:57
shown you that you can kind of debug it

01:15:54 --> 01:15:59
hat way a bit. Uh there's an entire

01:15:56 --> 01:16:02
lecture that I encourage you to watch in

01:15:58 --> 01:16:03
CS231N on visualizing understanding uh

01:16:01 --> 01:16:06
convolutional networks. So people use

01:16:02 --> 01:16:08
things like a decom or guided or guided

01:16:05 --> 01:16:10
back propagation or you back propagate

01:16:07 --> 01:16:12
to image and you try to find a stimulus

01:16:09 --> 01:16:14
that maximally activates any arbitrary

01:16:11 --> 01:16:16
neuron. So different ways of probing it

01:16:13 --> 01:16:17
uh and different ways have been

01:16:15 --> 01:16:19
developed and there's a lecture about

01:16:16 --> 01:16:21
it. So I would I would check that out.

01:16:18 --> 01:16:24
Great. Thanks.

01:16:20 --> 01:16:26
Uh I had a question regarding the size

01:16:23 --> 01:16:29
of fine-tuning data set. For example, is

01:16:25 --> 01:16:32
there a ballpark uh number if if you are

01:16:28 --> 01:16:35
trying to do classification? Uh how many

01:16:31 --> 01:16:38
do would you need for fine-tuning it to

01:16:34 --> 01:16:39
your sample set? Uh so how many uh how

01:16:37 --> 01:16:43
many data points do you need to to get

01:16:38 --> 01:16:45
good performance is the question.

01:16:42 --> 01:16:47
Okay. So, so, okay. So, this is like the

01:16:44 --> 01:16:50
most boring answer I think because the

01:16:46 --> 01:16:52
more the better always and uh it's

01:16:49 --> 01:16:54
really hard to say actually the um how

01:16:51 --> 01:16:56
many you need. Um so, usually one way

01:16:53 --> 01:16:58
to look at it is um one heristic

01:16:55 --> 01:17:00
that people sometimes follow is you look

01:16:57 --> 01:17:01
at number of parameters and you want the

01:16:59 --> 01:17:03
number of examples to be on the order of

01:17:00 --> 01:17:05
number of parameters. That's one way

01:17:02 --> 01:17:06
people sometimes break it down even for

01:17:04 --> 01:17:10
fine-tuning. Uh because we'll have a

01:17:06 --> 01:17:11
imageet model. So I was hoping that most

01:17:09 --> 01:17:12
of the things would be taken care over

01:17:10 --> 01:17:15
there and then you're just fine-tuning.

01:17:12 --> 01:17:16
So you you might need a lower order. I

01:17:14 --> 01:17:17
see. So when you're saying fine-tuning,

01:17:15 --> 01:17:19
are you fine the whole network or you're

01:17:16 --> 01:17:21
freezing some of it or just the top

01:17:18 --> 01:17:22
classifier? Just the top classifier.

01:17:20 --> 01:17:23
Yeah. So one another way to look at it

01:17:21 --> 01:17:25
is you have some number of parameters

01:17:22 --> 01:17:28
and you can estimate the number of bits

01:17:24 --> 01:17:29
that you you think every parameter has

01:17:27 --> 01:17:30
and then you count the number of bits in

01:17:28 --> 01:17:33
your data. So that's the kind of like

01:17:30 --> 01:17:35
comparisons you would do. Uh but really

01:17:32 --> 01:17:36
uh yeah I have no good answer. So the

01:17:34 --> 01:17:38
more the better and you have to try and

01:17:35 --> 01:17:39
you have to regularize and you have to

01:17:37 --> 01:17:41
cross validate that and you have to see

01:17:38 --> 01:17:43
what performance you get over time

01:17:40 --> 01:17:45
because it's too task dependent for me

01:17:42 --> 01:17:47
to say something

01:17:44 --> 01:17:49
stronger. Uh hi I would like to know how

01:17:46 --> 01:17:52
do you think the covenant will work in

01:17:48 --> 01:17:55
the 3D case? Uh like is it just a simple

01:17:51 --> 01:17:57
xtension of the 2D case or do we need

01:17:54 --> 01:17:59
some extra tweak about it in 3D case? So

01:17:56 --> 01:18:01
you're talking specifically about say

01:17:58 --> 01:18:03
videos or some uh 3D uh actually I'm

01:18:00 --> 01:18:06
talking about the the the image has the

01:18:02 --> 01:18:08
depth information. Oh I see. So uh say

01:18:05 --> 01:18:10
ou have like RGBD input and things like

01:18:07 --> 01:18:12
that. Yes. So I'm not too familiar what

01:18:09 --> 01:18:15
people do but um uh I do know for

01:18:11 --> 01:18:16
example that uh people try to have for

01:18:14 --> 01:18:18
example one thing you can do is just

01:18:15 --> 01:18:20
reat it as a fourth channel or maybe

01:18:17 --> 01:18:22
you want a separate comnet on top of the

01:18:19 --> 01:18:23
depth channel and do some fusion later.

01:18:21 --> 01:18:24
Uh so I don't know exactly what the

01:18:22 --> 01:18:27
state-of-the-art in treating that depth

01:18:23 --> 01:18:29
channel is right now.

01:18:26 --> 01:18:31
Um, so I don't know exactly how they do

01:18:28 --> 01:18:33
it right now. Oh, so maybe

01:18:30 --> 01:18:37
just one more question just uh how do

01:18:32 --> 01:18:39
you think the 3D object recognition

01:18:36 --> 01:18:41
3D object? Yeah. Recognition. So what is

01:18:38 --> 01:18:43
the output that you'd like? Uh the

01:18:40 --> 01:18:45
output is still the the class

01:18:42 --> 01:18:48
probability but we are not treating the

01:18:44 --> 01:18:49
a 2D image but the the 3D representation

01:18:47 --> 01:18:51
of the object. I see. So do you have a

01:18:48 --> 01:18:54
mesh or a point cloud? Yeah. I see.

01:18:50 --> 01:18:56
Yeah. Uh so also not not exactly my area

01:18:53 --> 01:18:58
unfortunately but so the problem with

01:18:55 --> 01:18:59
ese uh meshes and so on is that

01:18:57 --> 01:19:01
here's this like rotational degree of

01:18:58 --> 01:19:05
reedom that I'm not sure what people do

01:19:00 --> 01:19:06
about honestly. So uh the yeah so I'm

01:19:04 --> 01:19:07
actually not an expert on this so I

01:19:05 --> 01:19:08
don't want to comment. There are some

01:19:06 --> 01:19:10
obvious things you might want to try

01:19:07 --> 01:19:12
like you might want to plug in all the

01:19:09 --> 01:19:14
possible ways you could orient this and

01:19:11 --> 01:19:15
then at test time average over them. So

01:19:13 --> 01:19:16
that would be some of the obvious things

01:19:14 --> 01:19:17
to play with but I don't I'm not

01:19:15 --> 01:19:20
actually sure what the state of the art

01:19:16 --> 01:19:22
is. Okay. Thank you. I have one more

01:19:19 --> 01:19:24
question.

01:19:21 --> 01:19:26
Okay. So coming back to distributed

01:19:23 --> 01:19:28
training, is it possible to do even the

01:19:25 --> 01:19:31
classification in a distributed way or

01:19:27 --> 01:19:33
my question in future can I imagine my

01:19:30 --> 01:19:37
um our cell phones do these things

01:19:32 --> 01:19:39
together for one inquiry?

01:19:36 --> 01:19:41
Uh our cell phones Oh, I see you. You're

01:19:38 --> 01:19:43
trying to get cell phones distributed

01:19:40 --> 01:19:46
training. Yes. Yes. A train and also a

01:19:42 --> 01:19:49
radical idea for one cell phone user.

01:19:45 --> 01:19:50
Very radical idea. So related thoughts I

01:19:48 --> 01:19:53
had recently was so I had comejs in the

01:19:50 --> 01:19:55
browser and I was thinking of um

01:19:52 --> 01:19:56
basically this trains networks and I was

01:19:54 --> 01:19:58
thinking about similar questions because

01:19:55 --> 01:20:00
you could imagine shipping this off as

01:19:57 --> 01:20:01
an ad equivalent like the people just

01:19:59 --> 01:20:03
include this in the JavaScript and then

01:20:00 --> 01:20:06
everyone's browsers are kind of like

01:20:02 --> 01:20:07
training a small network uh so I think

01:20:05 --> 01:20:08
that's a related question but do you

01:20:06 --> 01:20:10
think there's like too much

01:20:07 --> 01:20:12
communication overhead or it could be

01:20:09 --> 01:20:14
actually really distributed in a uh

01:20:11 --> 01:20:16
efficient way? Yes. So the problem with

01:20:13 --> 01:20:18
distributing it a lot is actually um the

01:20:15 --> 01:20:19
stale gradients problem. So when you

01:20:17 --> 01:20:21
look at some of the uh papers that

01:20:18 --> 01:20:23
Google has put out about distributed

01:20:20 --> 01:20:25
training as you look at the number of

01:20:22 --> 01:20:27
workers when you do asynchronous SGD

01:20:24 --> 01:20:28
number of workers and the the

01:20:26 --> 01:20:30
performance improvement you get it kind

01:20:27 --> 01:20:31
of like plateaus quite quickly after

01:20:29 --> 01:20:34
like eight workers or something quite

01:20:30 --> 01:20:36
small. So I'm not sure if there are ways

01:20:33 --> 01:20:37
of dealing with thousands of workers.

01:20:35 --> 01:20:40
The issue is that you have a distributed

01:20:36 --> 01:20:42
you every worker has this like specific

01:20:39 --> 01:20:45
snapshot of the weights that are

01:20:41 --> 01:20:47
currently um at from the pull you pull

01:20:44 --> 01:20:49
from the master and now you have a set

01:20:46 --> 01:20:50
of weights that you're using and you do

01:20:48 --> 01:20:52
forward backward and then you send an

01:20:49 --> 01:20:53
update but by the time you send an

01:20:51 --> 01:20:55
update and you've done your forward

01:20:52 --> 01:20:56
backward the parameter server has now

01:20:54 --> 01:20:59
done like lots of updates from like

01:20:56 --> 01:21:01
thousands of other things and so your

01:20:58 --> 01:21:04
gradient is stale you've evaluated it at

01:21:00 --> 01:21:06
a wrong an old location and so it's an

01:21:03 --> 01:21:08
incorrect direction now and everything

01:21:05 --> 01:21:09
breaks. So that's the challenge and I'm

01:21:07 --> 01:21:13
not sure what people are doing about

01:21:08 --> 01:21:16
his. Yeah. Uh I was wondering about uh

01:21:12 --> 01:21:18
applications of convolutional uh nets to

01:21:15 --> 01:21:20
uh two inputs at a time. So let's say

01:21:17 --> 01:21:23
ou have two pictures of jigs of

01:21:19 --> 01:21:24
puzzles, puzzles, jigs of pieces and

01:21:22 --> 01:21:26
trying to figure out if they fit

01:21:23 --> 01:21:28
ogether or uh whether one object

01:21:25 --> 01:21:30
compares to the other in a specific way.

01:21:27 --> 01:21:31
Have you heard of any implementation of

01:21:29 --> 01:21:33
this kind? Uh yes. So you have two

01:21:30 --> 01:21:35
inputs instead of one. Yeah. So the

01:21:32 --> 01:21:36
common ways of dealing with that is you

01:21:34 --> 01:21:38
put a comet on each and then you do some

01:21:35 --> 01:21:41
kind of a fusion eventually to to merge

01:21:37 --> 01:21:43
the information. Right. I see. And uh

01:21:40 --> 01:21:46
same for um recurrent neural networks if

01:21:42 --> 01:21:47
you had like variable input. Uh so for

01:21:45 --> 01:21:49
example in the context of videos where

01:21:46 --> 01:21:50
you have frames coming in. Yeah. Then

01:21:48 --> 01:21:51
yeah so some of the approaches are you

01:21:49 --> 01:21:53
have a convolutional network on the

01:21:50 --> 01:21:55
frame and then at the top you tie it in

01:21:52 --> 01:21:57
with the recurren neural network. Mhm.

01:21:54 --> 01:21:59
So you have these you reduce the image

01:21:56 --> 01:22:00
to some kind of a lower dimensional

01:21:58 --> 01:22:02
representation and then that get that's

01:21:59 --> 01:22:04
an input to a recurrent neural network

01:22:01 --> 01:22:05
at the top. Uh there are other ways to

01:22:03 --> 01:22:07
play with this. For example, you can

01:22:04 --> 01:22:08
actually make the recurrent you can make

01:22:06 --> 01:22:11
very single neuron in the comnet

01:22:07 --> 01:22:11
recurrent. That's also one funny way of

01:22:10 --> 01:22:11
deal doing deal doing deal doing deal

01:22:10 --> 01:22:11
doing

01:22:10 --> 01:22:13
deal

01:22:10 --> 01:22:15
doing this. So right now when a neuron

01:22:12 --> 01:22:18
computes its output it's only a function

01:22:14 --> 01:22:20
of a local neighborhood uh in below it.

01:22:17 --> 01:22:23
But you can also make it in addition a

01:22:19 --> 01:22:24
function of that same local neighborhood

01:22:22 --> 01:22:27
or like its own activation perhaps at

01:22:23 --> 01:22:30
he previous time step if that makes

01:22:26 --> 01:22:31
ense. So so this so this neuron is not

01:22:29 --> 01:22:32
just computing a dot product with the

01:22:30 --> 01:22:35
current patch but it's also

01:22:32 --> 01:22:37
incorporating a dotproduct of its own

01:22:34 --> 01:22:38
and maybe its neighborhoods uh

01:22:36 --> 01:22:40
activations at the previous time step of

01:22:38 --> 01:22:41
the frame. So that's kind of like a

01:22:39 --> 01:22:43
small RNN update hidden inside every

01:22:40 --> 01:22:44
single neuron. So those are the things

01:22:42 --> 01:22:45
that I think people play with when I'm

01:22:43 --> 01:22:47
not familiar with what currently is

01:22:44 --> 01:22:49
working best in this area. Pretty

01:22:46 --> 01:22:51
awesome. Thank you. Yeah. Yeah. Hi uh

01:22:48 --> 01:22:54
thanks for the great talk. I have a

01:22:50 --> 01:22:55
question uh regarding uh the latency for

01:22:53 --> 01:22:58
the models that are trained using

01:22:54 --> 01:23:00
multiple layers. So especially at the

01:22:57 --> 01:23:02
prediction time you know as we add more

01:22:59 --> 01:23:04
layers for the forward pass it will

01:23:01 --> 01:23:05
take some time you know it'll increase

01:23:03 --> 01:23:07
in the latency right for the prediction.

01:23:04 --> 01:23:10
So what are the numbers that we have

01:23:06 --> 01:23:13
seen uh you know you know presently that

01:23:09 --> 01:23:14
you know that you know if you can share

01:23:12 --> 01:23:17
that you know the the prediction time or

01:23:13 --> 01:23:19
that you know the latency uh at the at

01:23:16 --> 01:23:21
he forward pass. So you're worried for

01:23:18 --> 01:23:22
example uh you have some you want to run

01:23:20 --> 01:23:24
prediction very quickly would it be on

01:23:21 --> 01:23:26
an embedded device or is this in the

01:23:23 --> 01:23:28
cloud? Uh yes suppose you know it's a

01:23:25 --> 01:23:30
cell phone you know you have you're

01:23:27 --> 01:23:32
identifying the objects or you

01:23:29 --> 01:23:35
know you're you're doing some uh you

01:23:31 --> 01:23:36
know image analysis or something. Yeah.

01:23:34 --> 01:23:37
So there's definitely a lot of work on

01:23:35 --> 01:23:39
this. So one way you would approach this

01:23:36 --> 01:23:41
actually is you have this uh network

01:23:38 --> 01:23:43
that you've trained using floatingpoint

01:23:40 --> 01:23:46
arithmetic 32 bits say and so there's a

01:23:42 --> 01:23:48
lot of work on uh taking that network

01:23:45 --> 01:23:50
and uh discretizing all the weights into

01:23:47 --> 01:23:53
like ins and making it much smaller and

01:23:49 --> 01:23:54
pruning connections. So one of the works

01:23:52 --> 01:23:57
I'm um related to this for example is

01:23:53 --> 01:23:59
onhan here at Stanford has a few papers

01:23:56 --> 01:24:00
on getting rid of spurious connections

01:23:58 --> 01:24:02
and reducing the network as much as

01:23:59 --> 01:24:04
possible and then making everything very

01:24:01 --> 01:24:06
efficient with integer arithmetic. Uh so

01:24:04 --> 01:24:08
basically you achieve this by um

01:24:06 --> 01:24:12
discretizing all the weights and all the

01:24:07 --> 01:24:13
activations and uh throwing away and

01:24:11 --> 01:24:16
pruning the network. So there are some

01:24:12 --> 01:24:17
tricks like that that people play. Um

01:24:15 --> 01:24:20
that's mostly what you would do on an

01:24:16 --> 01:24:21
embedded device. And then the challenge

01:24:19 --> 01:24:22
of course is you've changed the network

01:24:20 --> 01:24:24
and now you just kind of are crossing

01:24:22 --> 01:24:26
your fingers that it works well. And so

01:24:23 --> 01:24:28
I think what's uh interesting for uh re

01:24:25 --> 01:24:30
from research standpoint is you'd like

01:24:27 --> 01:24:32
to do you'd like your test time to

01:24:29 --> 01:24:33
exactly match your training time, right?

01:24:31 --> 01:24:35
So then you get the best performance and

01:24:32 --> 01:24:37
so the question is how do we train with

01:24:34 --> 01:24:38
low precision arithmetic and there's a

01:24:36 --> 01:24:42
lot of work on this as well. So say from

01:24:37 --> 01:24:43
Yoshua Benjio's lab as well and um uh so

01:24:41 --> 01:24:46
that's exciting directions of how you

01:24:42 --> 01:24:47
train in low precision regime. Do do you

01:24:45 --> 01:24:50
have any numbers I mean that you can

01:24:46 --> 01:24:52
share for the you know state-of-the-art

01:24:49 --> 01:24:53
how much time does it take? Um yes so I

01:24:51 --> 01:24:55
see the papers but I'm not sure if I

01:24:52 --> 01:24:57
remember the the exact reductions. It's

01:24:54 --> 01:24:59
on the order of okay I don't want to say

01:24:56 --> 01:25:01
because basically I don't know. Thanks a

01:24:58 --> 01:25:03
I don't want to try to guess this. All

01:25:00 --> 01:25:06
right. Thank you. All right. We're out

01:25:02 --> 01:25:06
of time. Let's thank

01:25:11 --> 01:25:18
Andre. Lunch is outside and we'll

01:25:13 --> 01:25:18
restart at 12:45.

<!-- YOUTUBE_TRANSCRIPT_END -->
