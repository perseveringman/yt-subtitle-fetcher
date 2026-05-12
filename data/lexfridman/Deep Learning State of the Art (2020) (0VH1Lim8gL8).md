---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "0VH1Lim8gL8"
title: "Deep Learning State of the Art (2020)"
video_url: "https://www.youtube.com/watch?v=0VH1Lim8gL8"
thumbnail_url: "https://i.ytimg.com/vi/0VH1Lim8gL8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=0VH1Lim8gL8"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-01-10T16:04:31.000Z"
upload_date: "2020-01-10"
duration_seconds: 5261
duration_human: "1:27:41"
view_count: 1362916
like_count: 27456
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:57:41.684Z"
---

# Deep Learning State of the Art (2020)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=0VH1Lim8gL8
- video_id: 0VH1Lim8gL8
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-01-10T16:04:31.000Z
- upload_date: 2020-01-10
- duration: 1:27:41
- view_count: 1362916
- like_count: 27456
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Lecture on most recent research and developments in deep learning, and hopes for 2020. This is not intended to be a list of SOTA benchmark results, but rather a set of highlights of machine learning and AI innovations and progress in academia, industry, and society in general. This lecture is part of the MIT Deep Learning Lecture Series.

Website: https://deeplearning.mit.edu
Slides: http://bit.ly/2QEfbAm
References: http://bit.ly/deeplearn-sota-2020
Playlist: http://bit.ly/deep-learning-playlist

OUTLINE:
0:00 - Introduction
0:33 - AI in the context of human history
5:47 - Deep learning celebrations, growth, and limitations
6:35 - Deep learning early key figures
9:29 - Limitations of deep learning
11:01 - Hopes for 2020: deep learning community and research
12:50 - Deep learning frameworks: TensorFlow and PyTorch
15:11 - Deep RL frameworks
16:13 - Hopes for 2020: deep learning and deep RL frameworks
17:53 - Natural language processing
19:42 - Megatron, XLNet, ALBERT
21:21 - Write with transformer examples
24:28 - GPT-2 release strategies report
26:25 - Multi-domain dialogue
27:13 - Commonsense reasoning
28:26 - Alexa prize and open-domain conversation
33:44 - Hopes for 2020: natural language processing
35:11 - Deep RL and self-play
35:30 - OpenAI Five and Dota 2
37:04 - DeepMind Quake III Arena
39:07 - DeepMind AlphaStar
41:09 - Pluribus: six-player no-limit Texas hold'em poker
43:13 - OpenAI Rubik's Cube
44:49 - Hopes for 2020: Deep RL and self-play
45:52 - Science of deep learning
46:01 - Lottery ticket hypothesis
47:29 - Disentangled representations
48:34 - Deep double descent
49:30 - Hopes for 2020: science of deep learning
50:56 - Autonomous vehicles and AI-assisted driving
51:50 - Waymo
52:42 - Tesla Autopilot
57:03 - Open question for Level 2 and Level 4 approaches
59:55 - Hopes for 2020: autonomous vehicles and AI-assisted driving
1:01:43 - Government, politics, policy
1:03:03 - Recommendation systems and policy
1:05:36 - Hopes for 2020: Politics, policy and recommendation systems
1:06:50 - Courses, Tutorials, Books
1:10:05 - General hopes for 2020
1:11:19 - Recipe for progress in AI
1:14:15 - Q&A: what made you interested in AI
1:15:21 - Q&A: Will machines ever be able to think and feel?
1:18:20 - Q&A: Is RL a good candidate for achieving AGI?
1:21:31 - Q&A: Are autonomous vehicles responsive to sound?
1:22:43 - Q&A: What does the future with AGI look like? 
1:25:50 - Q&A: Will AGI systems become our masters?

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:09
welcome to 2020 and welcome to the deep

00:00:04 --> 00:00:12
learning lecture series let's start it

00:00:08 --> 00:00:14
off today to take a quick whirlwind tour

00:00:11 --> 00:00:16
of all the exciting things that happened

00:00:13 --> 00:00:20
in seventeen eighteen and nineteen

00:00:15 --> 00:00:24
especially and the amazing things were

00:00:19 --> 00:00:25
going to see in this year in 2020 also

00:00:23 --> 00:00:30
as part of this series is going to be a

00:00:24 --> 00:00:32
few talks from some of the top people in

00:00:29 --> 00:00:35
learning in artificial intelligence

00:00:31 --> 00:00:38
after today of course start at the broad

00:00:34 --> 00:00:40
the celebrations from the Turing award

00:00:37 --> 00:00:45
to the limitations and the debates and

00:00:39 --> 00:00:47
the exciting growth first and first of

00:00:44 --> 00:00:49
course the step back to the quote I've

00:00:46 --> 00:00:53
used before I love it I'll keep reusing

00:00:48 --> 00:00:56
it AI began not with Alan Turing or

00:00:52 --> 00:00:59
McCarthy but with the ancient wish to

00:00:55 --> 00:01:02
forge the gods a quote from Pamela

00:00:58 --> 00:01:04
McCord Akande machines who think that

00:01:01 --> 00:01:07
visualization there is just three

00:01:03 --> 00:01:12
percent of the neurons in our brain of

00:01:06 --> 00:01:14
the thalamocortical system that magical

00:01:11 --> 00:01:16
thing between our ears that allows us

00:01:13 --> 00:01:20
all to see and hear and think and reason

00:01:15 --> 00:01:24
and hope and dream and fear our eventual

00:01:19 --> 00:01:26
mortality all of that is the thing we

00:01:23 --> 00:01:30
wish to understand that's the dream of

00:01:25 --> 00:01:34
artificial intelligence and recreate

00:01:29 --> 00:01:36
versions of it echoes of it in

00:01:33 --> 00:01:38
engineering of our intelligence systems

00:01:36 --> 00:01:40
that's the dream we should never forget

00:01:37 --> 00:01:43
in the details I'll talk the exciting

00:01:39 --> 00:01:46
stuff I'll talk about today that's sort

00:01:42 --> 00:01:51
of the the reason why this is exciting

00:01:45 --> 00:01:54
this mystery that's our mind the modern

00:01:50 --> 00:01:57
human brain the modern human as we know

00:01:53 --> 00:02:00
them today know and love them today it's

00:01:56 --> 00:02:02
just about 300,000 years ago and the

00:01:59 --> 00:02:06
Industrial Revolution is about 300 years

00:02:01 --> 00:02:10
ago that's point one percent of the

00:02:05 --> 00:02:13
development since the early modern human

00:02:09 --> 00:02:14
being is when we've seen a lot of the

00:02:12 --> 00:02:18
machinery

00:02:13 --> 00:02:21
Machin was born not in stories but in

00:02:17 --> 00:02:23
actuality is the machine was engineered

00:02:20 --> 00:02:25
since the Industrial Revolution and the

00:02:22 --> 00:02:27
steam engine and the mechanized factory

00:02:24 --> 00:02:29
system and the machining tools that's

00:02:26 --> 00:02:31
just point one percent in the history

00:02:28 --> 00:02:34
and that's the three hundred years now

00:02:30 --> 00:02:37
resume in to the 60 70 years since the

00:02:33 --> 00:02:39
founder the father arguably of

00:02:36 --> 00:02:41
artificial intelligence Alan Turing and

00:02:38 --> 00:02:42
the dreams you know that there's always

00:02:40 --> 00:02:44
been the dance in artificial

00:02:41 --> 00:02:47
intelligence between the dreams the

00:02:43 --> 00:02:50
mathematical foundations and the and and

00:02:46 --> 00:02:54
when the dreams meet the engineering the

00:02:49 --> 00:02:56
practice the reality so Alan Turing has

00:02:53 --> 00:02:59
poken many times it by the year 2000

00:02:55 --> 00:03:00
that he would be sure that the Turing

00:02:58 --> 00:03:02
test

00:02:59 --> 00:03:04
natural language we passed it seems

00:03:01 --> 00:03:07
probably he said that once the machine

00:03:03 --> 00:03:09
thinking method had started it would not

00:03:06 --> 00:03:12
ake long to outstrip our feeble powers

00:03:08 --> 00:03:15
they would be able to converse with each

00:03:11 --> 00:03:17
other to sharpen their wits some stage

00:03:14 --> 00:03:19
therefore we should have to expect the

00:03:16 --> 00:03:24
machines to take control a little shout

00:03:18 --> 00:03:26
to self play there so that's the

00:03:23 --> 00:03:27
dream both the father of the

00:03:25 --> 00:03:30
mathematical foundation of artificial

00:03:26 --> 00:03:32
intelligence and the father of dreams in

00:03:29 --> 00:03:34
artificial intelligence and that dream

00:03:31 --> 00:03:36
again in the early days was taking

00:03:33 --> 00:03:40
reality the practice met with the

00:03:35 --> 00:03:43
perceptron often thought of as a single

00:03:39 --> 00:03:45
layer neural network but actually was

00:03:42 --> 00:03:47
not as much known as Frank Rosenblatt

00:03:44 --> 00:03:51
was also the develop or the multi-layer

00:03:46 --> 00:03:54
perceptron and that history zooming

00:03:50 --> 00:03:56
through has amazed our civilization to

00:03:53 --> 00:03:58
me one of the most inspiring things in

00:03:55 --> 00:04:01
this in the world of games first with

00:03:57 --> 00:04:06
e great Gary Kasparov losing to IBM D

00:04:00 --> 00:04:10
blue in 1997 then Lisa Dahl losing to

00:04:05 --> 00:04:12
alphago in 2016 seminal moments and

00:04:09 --> 00:04:14
captivating the world through the

00:04:11 --> 00:04:17
ngineering of actual real-world systems

00:04:13 --> 00:04:20
robots on four wheels as we'll talk

00:04:16 --> 00:04:22
about today from Weymouth to Tesla to

00:04:19 --> 00:04:25
all the autonomous vehicle companies

00:04:21 --> 00:04:27
working in the space robots on two legs

00:04:24 --> 00:04:28
captivating the world

00:04:26 --> 00:04:30
of what

00:04:27 --> 00:04:35
actuation what kind of manipulation can

00:04:29 --> 00:04:40
be achieved the history of deep learning

00:04:34 --> 00:04:42
from 1943 the initial models from

00:04:39 --> 00:04:44
neuroscience thinking about neural

00:04:41 --> 00:04:47
networks how to model neural networks

00:04:43 --> 00:04:48
mathematically to the creation as I said

00:04:46 --> 00:04:51
of the single layer and the multi-layer

00:04:47 --> 00:04:53
perceptron by Frank Rosenblatt and so 57

00:04:50 --> 00:04:56
and 62 to the ideas of backpropagation

00:04:52 --> 00:04:59
and recurrent neural nets in the 70s and

00:04:55 --> 00:05:02
80s - convolutional neural networks and

00:04:58 --> 00:05:05
LCL is a bi-directional rnns in the 80s

00:05:01 --> 00:05:08
and 90s to the birth of the deep

00:05:04 --> 00:05:12
learning term and the new wave the

00:05:07 --> 00:05:14
revolution in in 2006 - the image net

00:05:11 --> 00:05:16
and Alix net the seminal moment that

00:05:13 --> 00:05:20
captivated the possibility the

00:05:15 --> 00:05:22
imagination of the AI community of what

00:05:19 --> 00:05:25
neural networks can do in the image and

00:05:21 --> 00:05:28
natural language space closely following

00:05:24 --> 00:05:31
years after to the to the development of

00:05:27 --> 00:05:33
the popularization of Gans generative

00:05:30 --> 00:05:36
adversarial network so the alpha going

00:05:32 --> 00:05:39
alpha zero in 2016 and seven and as

00:05:35 --> 00:05:41
we'll talk about language models of

00:05:38 --> 00:05:43
transformers in seventeen eighteen and

00:05:40 --> 00:05:45
nineteen those has been the last few

00:05:42 --> 00:05:47
years have been dominated by the ideas

00:05:44 --> 00:05:50
of deep learning in the space of natural

00:05:46 --> 00:05:53
anguage processing ok celebrations this

00:05:50 --> 00:05:55
year the Turing award was given for deep

00:05:52 --> 00:05:57
learning this is like deep learning has

00:05:54 --> 00:06:01
grown up we can finally start giving

00:05:56 --> 00:06:03
awards yawn laocoön Geoffrey Hinton

00:06:00 --> 00:06:05
yoshua bengio received the Turing award

00:06:02 --> 00:06:06
for the conceptual engineering

00:06:04 --> 00:06:09
breakthroughs that have made deep neural

00:06:05 --> 00:06:12
networks a critical component of

00:06:08 --> 00:06:14
computing I would also like to add that

00:06:11 --> 00:06:17
perhaps the popularization in the face

00:06:13 --> 00:06:19
of skepticism for those a little bit

00:06:16 --> 00:06:20
older have known the skepticism the

00:06:18 --> 00:06:22
neural networks have received throughout

00:06:19 --> 00:06:25
he 90s in the face of that skepticism

00:06:21 --> 00:06:27
continuing pushing believing and working

00:06:24 --> 00:06:30
in this field and popularizing it

00:06:26 --> 00:06:32
hrough in the face of that skepticism I

00:06:29 --> 00:06:36
think is part of the reason these three

00:06:31 --> 00:06:38
folks have received the award but of

00:06:35 --> 00:06:40
course the community that contributed to

00:06:37 --> 00:06:41
deep learning is bigger much bigger than

00:06:39 --> 00:06:44
those three

00:06:40 --> 00:06:49
many of whom might be here today at MIT

00:06:43 --> 00:06:51
broadly in academia in industry looking

00:06:48 --> 00:06:55
at the early key figures Walter Pitts

00:06:50 --> 00:06:56
and Warren McCulloch as I mentioned for

00:06:54 --> 00:06:59
the computational models of the neural

00:06:55 --> 00:07:01
nets these ideas of that of thinking

00:06:58 --> 00:07:02
that the kind of neural networks

00:07:00 --> 00:07:06
biological illness can have on our brain

00:07:01 --> 00:07:10
could be modeled mathematically and then

00:07:05 --> 00:07:11
the engineering of those models into

00:07:09 --> 00:07:14
actual physical and conceptual

00:07:10 --> 00:07:18
mathematical systems by Frank Rosenblatt

00:07:13 --> 00:07:22
57 again single layer multi-layer in

00:07:17 --> 00:07:23
1962 you could say Frank Rosenblatt is

00:07:21 --> 00:07:26
the father of deep learning the first

00:07:22 --> 00:07:28
person to really in 62 mentioned the

00:07:25 --> 00:07:30
idea of multiple hidden layers in neural

00:07:27 --> 00:07:35
networks as far as I know somebody was

00:07:29 --> 00:07:39
correct me but in 1965 shout out to the

00:07:34 --> 00:07:41
Soviet Union and Ukraine the person who

00:07:38 --> 00:07:46
is considered to be the father of deep

00:07:40 --> 00:07:48
learning Alexei even Enco + V G lapa

00:07:45 --> 00:07:50
co-author of that work is the first

00:07:47 --> 00:07:54
learning algorithms are multi-layer

00:07:49 --> 00:07:56
perceptrons multiple hidden layers the

00:07:53 --> 00:08:00
work on back propagation on automatic

00:07:55 --> 00:08:02
differentiation 1970 1979 convolutional

00:07:59 --> 00:08:05
neural networks were first introduced

00:08:01 --> 00:08:07
and john hopfield looking at recurrent

00:08:04 --> 00:08:08
neural networks what are now called

00:08:06 --> 00:08:10
hopfield networks a special kind of

00:08:07 --> 00:08:13
attorney all networks okay that's the

00:08:09 --> 00:08:15
arly birth of deep learning I want to

00:08:12 --> 00:08:18
mention this because there's been a kind

00:08:14 --> 00:08:20
of contention space now that we can

00:08:17 --> 00:08:22
celebrate the incredible consciousness

00:08:19 --> 00:08:25
deep learning much like in reinforcement

00:08:21 --> 00:08:28
learning and academia credit assignment

00:08:24 --> 00:08:33
is a big problem and the embodiment of

00:08:27 --> 00:08:36
that almost the point of meme is the the

00:08:32 --> 00:08:38
great jurgen schmidhuber I encourage for

00:08:35 --> 00:08:39
people who are interested in the amazing

00:08:37 --> 00:08:41
contribution of the different people in

00:08:38 --> 00:08:43
the deep learning field to read his work

00:08:40 --> 00:08:45
on deep learning in neural networks it's

00:08:42 --> 00:08:47
an overview of all the various people

00:08:44 --> 00:08:50
who have contributed besides young

00:08:46 --> 00:08:52
laocoon Geoffrey Hinton and yoshua

00:08:49 --> 00:08:56
bengio

00:08:51 --> 00:08:59
it's a big beautiful community so full

00:08:55 --> 00:09:02
of great ideas and full of great people

00:08:58 --> 00:09:04
my hope for this community given the

00:09:01 --> 00:09:07
tension as some of you might have seen

00:09:03 --> 00:09:12
around this kind of credit assignment

00:09:06 --> 00:09:15
problem is that we have more not on this

00:09:11 --> 00:09:18
lide but love that can never be enough

00:09:14 --> 00:09:20
love in the world but general respect

00:09:17 --> 00:09:22
open - and collaboration and credit

00:09:19 --> 00:09:25
sharing in the community less derision

00:09:21 --> 00:09:27
jealousy and stubbornness and silos

00:09:24 --> 00:09:33
academic silos within institutions

00:09:26 --> 00:09:36
within disciplines also 2019 was the

00:09:32 --> 00:09:39
first time it became cool to highlight

00:09:35 --> 00:09:44
he limits of deep learning this is the

00:09:38 --> 00:09:46
interesting moment in time several books

00:09:43 --> 00:09:50
everal papers have come out in the past

00:09:45 --> 00:09:52
couple of years highlighting that deep

00:09:49 --> 00:09:54
learning is not able to do the kind of

00:09:51 --> 00:09:55
the broad spectrum of tasks that we can

00:09:53 --> 00:09:58
think of the artificial intelligence

00:09:54 --> 00:10:01
isn't being able to do like read common

00:09:57 --> 00:10:03
sense reasoning like building knowledge

00:10:00 --> 00:10:07
bases and so on

00:10:02 --> 00:10:09
rodney brooks said by 2020 the popular

00:10:06 --> 00:10:12
press starts having stories that the era

00:10:08 --> 00:10:16
of deep learning is over and certainly

00:10:11 --> 00:10:18
there has been echoes of that through

00:10:15 --> 00:10:20
the press through the Twittersphere and

00:10:17 --> 00:10:24
all that kind of world and I'd like to

00:10:19 --> 00:10:26
say that a little skepticism a little

00:10:23 --> 00:10:28
criticism is really good always for the

00:10:25 --> 00:10:33
community but not too much like a little

00:10:27 --> 00:10:39
spice in the soup of progress aside from

00:10:32 --> 00:10:43
that kind of skepticism the growth of

00:10:38 --> 00:10:45
cvpr iclear europe's all these

00:10:42 --> 00:10:48
conference submission papers has grown

00:10:44 --> 00:10:49
year over year there's been a lot of

00:10:47 --> 00:10:54
exciting research some of which I'd like

00:10:48 --> 00:10:56
to cover today my hope in this space of

00:10:53 --> 00:10:59
deep learning growth celebrations the

00:10:55 --> 00:11:03
limitations for 2020 is that there's

00:10:58 --> 00:11:07
less both less hype

00:11:02 --> 00:11:10
unless anti-hype less tweets on how

00:11:06 --> 00:11:13
there's too much hype in AI and more

00:11:09 --> 00:11:15
solid research less criticism and more

00:11:12 --> 00:11:18
doing but again a little criticism

00:11:14 --> 00:11:22
there's a little spice is always good

00:11:17 --> 00:11:24
for the recipe hybrid research less

00:11:21 --> 00:11:26
contentious counterproductive debates

00:11:23 --> 00:11:29
and more open-minded in the

00:11:25 --> 00:11:32
interdisciplinary collaboration across

00:11:28 --> 00:11:35
neuroscience cognitive science computer

00:11:31 --> 00:11:38
science robotics Mathematics Physics

00:11:34 --> 00:11:40
across all these disciplines working

00:11:37 --> 00:11:42
together and the research topics that I

00:11:39 --> 00:11:44
would love to see more contributions to

00:11:41 --> 00:11:46
as we will briefly talk about in some

00:11:43 --> 00:11:48
domains is reasoning common sense

00:11:45 --> 00:11:50
reasoning integrating that into the

00:11:47 --> 00:11:54
learning architecture active learning a

00:11:49 --> 00:11:56
lifelong learning multimodal multitask

00:11:53 --> 00:11:58
learning open domain conversation so

00:11:55 --> 00:12:01
expanding the success of natural

00:11:57 --> 00:12:04
anguage to dialog to open domain

00:12:00 --> 00:12:06
dialogue and conversation and then

00:12:03 --> 00:12:08
applications the two most exciting one

00:12:05 --> 00:12:11
of which we'll talk about is medical and

00:12:07 --> 00:12:13
autonomous vehicles then algorithmic

00:12:10 --> 00:12:16
ethics in all of its forms fairness

00:12:12 --> 00:12:18
privacy bias there's been a lot of

00:12:15 --> 00:12:20
exciting research there I hope that

00:12:17 --> 00:12:23
continues taking responsibility for the

00:12:19 --> 00:12:27
flaws in our data and the flaws and our

00:12:22 --> 00:12:29
human ethics and then robotics in terms

00:12:26 --> 00:12:31
of deep learning application robotics

00:12:28 --> 00:12:33
I'd love to see a lot of development

00:12:30 --> 00:12:34
continued development deep reinforcement

00:12:32 --> 00:12:38
learning application and robotics and

00:12:33 --> 00:12:40
robot manipulation by the way there

00:12:37 --> 00:12:42
might be a little bit time for questions

00:12:39 --> 00:12:44
at the end if you have a really pressing

00:12:41 --> 00:12:50
question you can ask it along the way

00:12:43 --> 00:12:50
two questions so far thank God okay

00:12:49 --> 00:12:58
so first the practical the deep learning

00:12:53 --> 00:13:01
and deep IRL frameworks this has really

00:12:57 --> 00:13:03
been a year where the frameworks have

00:13:00 --> 00:13:06
really matured and converge shores to

00:13:02 --> 00:13:08
popular deep learning frameworks that

00:13:05 --> 00:13:12
people have used as tensorflow and Pytor

00:13:07 --> 00:13:15
attesa float 2.0 and pi torch 1.3 is the

00:13:11 --> 00:13:17
most recent version and they've

00:13:14 --> 00:13:19
converged towards each other taking the

00:13:16 --> 00:13:21
best features removing the weaknesses

00:13:18 --> 00:13:24
from each other so that competition has

00:13:20 --> 00:13:26
been really fruitful in some sense for

00:13:23 --> 00:13:28
the development of the community

00:13:25 --> 00:13:30
so on the tensorflow side eager

00:13:27 --> 00:13:32
execution so imperative programming the

00:13:29 --> 00:13:34
kind of how you would program in python

00:13:31 --> 00:13:37
has become the default has been first

00:13:33 --> 00:13:41
integrated made easy to use and become

00:13:36 --> 00:13:43
the default and i'm the pie tour site or

00:13:40 --> 00:13:46
script allowed for now graph

00:13:43 --> 00:13:48
representation so do what you're used to

00:13:45 --> 00:13:50
be able to do and what used to be the

00:13:47 --> 00:13:52
default mode of operation intensive flow

00:13:49 --> 00:13:55
allow you to have this intermediate

00:13:51 --> 00:13:59
representation that's in graph form the

00:13:54 --> 00:14:03
unintentional flow side just the deep

00:13:58 --> 00:14:06
caris integration and and promotion is

00:14:02 --> 00:14:10
the primary citizen it's the default

00:14:05 --> 00:14:12
citizen of the api of the way you would

00:14:09 --> 00:14:14
tracker tends to flow allowing complete

00:14:11 --> 00:14:16
beginners just anybody outside of

00:14:13 --> 00:14:18
machine learning to use tensor flow with

00:14:15 --> 00:14:20
just a few lines of code to train and do

00:14:17 --> 00:14:22
inference with a model that that's

00:14:19 --> 00:14:24
really exciting they cleaned up the API

00:14:21 --> 00:14:27
the documentation and so on and of

00:14:23 --> 00:14:29
course maturing the the javascript in

00:14:26 --> 00:14:31
the browser implementation intensive

00:14:28 --> 00:14:33
flow tends to flow light being able to

00:14:30 --> 00:14:36
run toothless phone on phones mobile and

00:14:32 --> 00:14:39
serving apparently this is something

00:14:35 --> 00:14:43
industry cares a lot about of course is

00:14:38 --> 00:14:46
being able to efficiently use models in

00:14:42 --> 00:14:49
the cloud and pi torch catching up with

00:14:45 --> 00:14:51
TPU support and experimental versions of

00:14:48 --> 00:14:53
pi torch mobile so being able to ride a

00:14:50 --> 00:14:55
smartphone on their side this tense

00:14:52 --> 00:14:57
xciting competition oh and I almost

00:14:54 --> 00:15:00
forgot to mention we have to say goodbye

00:14:56 --> 00:15:02
to our favorite Python - this is the

00:14:59 --> 00:15:04
year that support finally in the January

00:15:01 --> 00:15:08
1st 2020 support for Python

00:15:03 --> 00:15:11
- and tensor flows and pythor support

00:15:07 --> 00:15:16
for python - has ended so goodbye print

00:15:10 --> 00:15:18
goodbye cruel world okay on the

00:15:15 --> 00:15:20
reinforcement learning front we're kind

00:15:17 --> 00:15:22
of in the same space as JavaScript

00:15:19 --> 00:15:24
libraries are in there's no clear

00:15:21 --> 00:15:25
winners coming out if if you're a

00:15:23 --> 00:15:29
beginner in the space the one I

00:15:24 --> 00:15:32
recommend is as a fork of open air

00:15:28 --> 00:15:34
baselines as stable baselines but

00:15:31 --> 00:15:35
here's a lot of exciting ones some of

00:15:33 --> 00:15:35
them are really closely built on

00:15:34 --> 00:15:40
tensorflow

00:15:34 --> 00:15:44
some are built on PI torch of course

00:15:39 --> 00:15:48
from Google from facebook from deep mind

00:15:43 --> 00:15:49
opamine TF agents tensile force most of

00:15:47 --> 00:15:52
these I've used if you have specific

00:15:49 --> 00:15:55
questions I can answer them so stable

00:15:51 --> 00:15:56
baselines is the open any baselines for

00:15:54 --> 00:16:00
because I said this implements a lot of

00:15:55 --> 00:16:02
the basic deep RL algorithms PPO as you

00:15:59 --> 00:16:05
see everything good documentation and

00:16:01 --> 00:16:07
just allows very simple minimal few

00:16:04 --> 00:16:09
lines of code implementation of the

00:16:06 --> 00:16:11
basic the matching of the basic

00:16:08 --> 00:16:13
algorithms of the open air gym

00:16:10 --> 00:16:16
environments that's the one I recommend

00:16:12 --> 00:16:19
ok for the framework world my hope for

00:16:15 --> 00:16:22
2020 is framework agnostic research so

00:16:18 --> 00:16:25
ne of the things that I mentioned is PI

00:16:21 --> 00:16:27
torch has really become almost

00:16:24 --> 00:16:30
overtaking tensorflow in popularity in

00:16:26 --> 00:16:33
the research world what I'd love to see

00:16:29 --> 00:16:35
is being able to develop an architecture

00:16:32 --> 00:16:37
in tensorflow or developing an PI torch

00:16:34 --> 00:16:39
which you currently can and then Trent

00:16:36 --> 00:16:41
once you train the model to be able to

00:16:38 --> 00:16:43
easily transfer it to to the other from

00:16:40 --> 00:16:46
PI to telephone from test flow to PI

00:16:42 --> 00:16:47
torch currently takes three four five

00:16:45 --> 00:16:49
hours if you know what you're doing in

00:16:46 --> 00:16:52
both languages to do that it'd be nice

00:16:48 --> 00:16:54
if if there was a very easy way to do

00:16:51 --> 00:16:57
that transfer then the maturing of the

00:16:53 --> 00:16:58
DRL frameworks I'd love it to see open

00:16:56 --> 00:17:00
AI step up

00:16:57 --> 00:17:01
deep mind to step up and really take

00:16:59 --> 00:17:04
some of these frameworks to maturity

00:17:00 --> 00:17:06
that we can all agree on much like

00:17:03 --> 00:17:09
opening idea for the environment world

00:17:05 --> 00:17:11
has done and continued work that Kerris

00:17:08 --> 00:17:14
has started and many other rappers

00:17:10 --> 00:17:16
around tensorflow started of greater and

00:17:13 --> 00:17:18
greater abstractions allowing machine

00:17:15 --> 00:17:20
learning to be used by people outside

00:17:17 --> 00:17:24
of the machine learning field I think

00:17:19 --> 00:17:26
the the powerful thing about supervised

00:17:23 --> 00:17:29
sort of basic vanilla supervised

00:17:25 --> 00:17:36
learning is that people in biology and

00:17:28 --> 00:17:40
chemistry in neuroscience in in physics

00:17:35 --> 00:17:42
in astronomy can can deal with the huge

00:17:39 --> 00:17:44
amount of data that they're working with

00:17:41 --> 00:17:48
and without needing to learn any of the

00:17:43 --> 00:17:50
details of even Python so that that I

00:17:47 --> 00:17:52
would love to see greater and greater

00:17:49 --> 00:17:55
abstractions which empower scientists

00:17:51 --> 00:18:00
outside the field ok natural language

00:17:54 --> 00:18:06
processing 2017-2018 was in the

00:17:59 --> 00:18:12
transformer was developed and its power

00:18:05 --> 00:18:12
was demonstrated most especially by burt

00:18:12 --> 00:18:18
achieving a lot of state-of-the-art

00:18:14 --> 00:18:23
results on a lot of language benchmarks

00:18:17 --> 00:18:26
from synthesis classification to tagging

00:18:22 --> 00:18:26
question answering and so on

00:18:26 --> 00:18:31
there's hundreds of data sets and

00:18:28 --> 00:18:38
benchmarks that emerged most of which

00:18:30 --> 00:18:41
Burt has dominated in 2018-2019 was sort

00:18:37 --> 00:18:43
of the year that the transformer really

00:18:40 --> 00:18:47
exploded in terms of all the different

00:18:42 --> 00:18:52
variations again starting from Burt

00:18:46 --> 00:18:54
Excel net it's very cool to use Burt in

00:18:51 --> 00:18:57
the name of your new derivative

00:18:53 --> 00:19:01
transformer Roberto distill Burt from

00:18:56 --> 00:19:04
hugging face Salesforce opening eyes GPT

00:19:00 --> 00:19:08
- of course Albert and Megatron from

00:19:03 --> 00:19:11
Nvidia huge transformer a few tools have

00:19:07 --> 00:19:14
merged so one on hugging face is a

00:19:10 --> 00:19:16
company and also a repository that has

00:19:13 --> 00:19:18
implemented in both pi torch intensive

00:19:15 --> 00:19:21
flow or a lot of these transformer based

00:19:17 --> 00:19:23
national language models so that's

00:19:20 --> 00:19:25
really exciting so most people here can

00:19:22 --> 00:19:27
just use it easily so those are already

00:19:24 --> 00:19:30
pre trained models and the other

00:19:26 --> 00:19:32
exciting stuff is Sebastian Reuter great

00:19:29 --> 00:19:33
researcher in the in the field of

00:19:31 --> 00:19:36
natural language processing has put

00:19:32 --> 00:19:38
ogether an LP progress which is all the

00:19:35 --> 00:19:39
different benchmarks for all the

00:19:37 --> 00:19:41
different natural language tasks

00:19:38 --> 00:19:44
tracking who sort of leaderboards of

00:19:40 --> 00:19:47
who's winning where okay I'll mention a

00:19:43 --> 00:19:50
few models that stand out the work from

00:19:46 --> 00:19:52
this year Megatron LM from Nvidia is

00:19:49 --> 00:19:56
basically taking I believe the GPT -

00:19:51 --> 00:20:00
transformer model and just putting it on

00:19:55 --> 00:20:04
steroids right eight point three versus

00:19:59 --> 00:20:06
one point five billion parameters and a

00:20:03 --> 00:20:08
lot of interesting stuff there as you

00:20:05 --> 00:20:10
would expect from Nvidia of course it's

00:20:07 --> 00:20:12
always brilliant research but also

00:20:09 --> 00:20:15
interesting aspects about how to train

00:20:11 --> 00:20:18
a parallel way model and data

00:20:14 --> 00:20:21
parallelism in the training the first

00:20:17 --> 00:20:24
breakthrough results in terms of

00:20:20 --> 00:20:28
performance the model that replaced Bert

00:20:23 --> 00:20:33
as king of transformers is XL net from

00:20:27 --> 00:20:36
CMU of Google research they combined the

00:20:32 --> 00:20:38
directionality from Bert and the

00:20:35 --> 00:20:40
recurrence aspect of transformer

00:20:37 --> 00:20:42
excelled the relative position

00:20:39 --> 00:20:45
embeddings and the recurrence mechanism

00:20:41 --> 00:20:47
of transform excel to taking the

00:20:44 --> 00:20:49
bidirectionality and the recurrence

00:20:46 --> 00:20:52
combining it to achieve state-of-the-art

00:20:48 --> 00:20:55
performance on 20 tasks Albert is a

00:20:51 --> 00:20:59
recent addition from Google research and

00:20:54 --> 00:21:01
it reduces significantly the amount of

00:20:58 --> 00:21:03
parameters versus Bert's

00:21:00 --> 00:21:06
by doing a parameter sharing across the

00:21:02 --> 00:21:09
layers and it has achieved

00:21:05 --> 00:21:11
state-of-the-art results on 12 an LP

00:21:08 --> 00:21:14
tasks including the the difficult

00:21:10 --> 00:21:17
Stanford question answering benchmark of

00:21:13 --> 00:21:19
squad 2 and they provide that provide

00:21:16 --> 00:21:21
open source tensorflow implementation

00:21:18 --> 00:21:23
including a number of ready to use pre

00:21:20 --> 00:21:25
trained language models ok another way

00:21:22 --> 00:21:28
for people who are completely new to

00:21:24 --> 00:21:31
this field a bunch of apps right with

00:21:27 --> 00:21:33
transformer is one of them from hugging

00:21:30 --> 00:21:35
face a pop-top that allows you to

00:21:32 --> 00:21:36
explore the capabilities to these

00:21:34 --> 00:21:39
language models and I think they're

00:21:35 --> 00:21:41
quite fascinating from a philosophical

00:21:38 --> 00:21:43
point of view and this this has actually

00:21:40 --> 00:21:46
been at the core of a lot of the tension

00:21:42 --> 00:21:49
of how much do these transformers

00:21:45 --> 00:21:52
actually understand basically memorizing

00:21:48 --> 00:21:54
the statistics of the language in a self

00:21:51 --> 00:21:57
supervised way by reading a lot of text

00:21:53 --> 00:22:00
is that really understanding a lot of

00:21:56 --> 00:22:03
people say no until it impressed us and

00:21:59 --> 00:22:05
then everybody will say it's obvious but

00:22:02 --> 00:22:07
right with transformer is a really

00:22:04 --> 00:22:09
powerful way to generate text to reveal

00:22:06 --> 00:22:11
to you how much these models really

00:22:08 --> 00:22:15
learn before this yesterday actually

00:22:10 --> 00:22:17
just came up with a bunch of prompts so

00:22:14 --> 00:22:20
n the left is a prompt you give it the

00:22:16 --> 00:22:23
meaning of life here for example is not

00:22:19 --> 00:22:25
what I think it is it's what I do to

00:22:22 --> 00:22:27
make it and you can do a lot of prompts

00:22:24 --> 00:22:29
with this nature it's very profound and

00:22:26 --> 00:22:31
some of them will be just absurd

00:22:28 --> 00:22:34
you'll make sense of it statistically

00:22:30 --> 00:22:36
but it'll be absurd and reveal that the

00:22:33 --> 00:22:39
model really doesn't understand the

00:22:35 --> 00:22:41
fundamentals of the prompt is being

00:22:38 --> 00:22:43
provided but at the same time it's

00:22:40 --> 00:22:45
incredible what kind of text is able to

00:22:42 --> 00:22:45
generate

00:22:47 --> 00:22:50
the limits

00:22:47 --> 00:22:53
deep learning I was just having fun with

00:22:49 --> 00:22:55
is at this point still the are still

00:22:52 --> 00:22:59
in the process of being figured out very

00:22:54 --> 00:23:01
true had to psych this most important

00:22:58 --> 00:23:05
person in the history of deep learning

00:23:00 --> 00:23:08
is probably Andrew and I have to agree

00:23:04 --> 00:23:11
so this model knows what it's doing and

00:23:07 --> 00:23:15
I tried to get it to say something nice

00:23:10 --> 00:23:18
about me and that's a lot of attempts so

00:23:14 --> 00:23:22
this is kind of funny is finally did it

00:23:17 --> 00:23:25
did one I said likes Prima's best

00:23:21 --> 00:23:28
qualities that he's smart said finally

00:23:24 --> 00:23:30
but I said never nothing but ever

00:23:27 --> 00:23:35
happens but I think he gets more

00:23:29 --> 00:23:37
attention a very every Twitter comment

00:23:34 --> 00:23:41
ever and that's very true

00:23:36 --> 00:23:43
ok a nice way to sort of reveal through

00:23:40 --> 00:23:46
this that the models are not able to do

00:23:42 --> 00:23:49
any kind of understanding of language is

00:23:45 --> 00:23:51
just to do problems that show

00:23:48 --> 00:23:53
understanding of concepts of being able

00:23:50 --> 00:23:56
to reason with those concepts common

00:23:52 --> 00:24:01
sense reasoning trivia one is doing 2+2

00:23:55 --> 00:24:04
is a 3 5 is a six seven the result of

00:24:00 --> 00:24:06
the simple equation 4 + 2 + 3 is like

00:24:03 --> 00:24:10
you got it right and then it changed its

00:24:05 --> 00:24:12
mind okay 2 minus 2 is 7 so on you can

00:24:09 --> 00:24:14
reveal any kind of reasoning you can do

00:24:11 --> 00:24:16
with blocks you can ask it about gravity

00:24:13 --> 00:24:18
all those kinds of things it shows that

00:24:15 --> 00:24:20
it doesn't understand the fundamentals

00:24:17 --> 00:24:23
of the concepts that are being reasoned

00:24:19 --> 00:24:27
about and I'll mention of work that

00:24:22 --> 00:24:29
akes it beyond towards that reasoning

00:24:26 --> 00:24:32
world in the next few slides but I

00:24:28 --> 00:24:33
should also mentioned will this GPT 2

00:24:31 --> 00:24:37
model if you remember about a year ago

00:24:32 --> 00:24:40
there was a lot of thinking about this

00:24:36 --> 00:24:43
1.5 billion parameter model from open AI

00:24:39 --> 00:24:47
it is so the thought was it might be so

00:24:43 --> 00:24:49
powerful that it would be dangerous

00:24:46 --> 00:24:51
and so the idea from opening eyes when

00:24:48 --> 00:24:53
you have an AI system that you're about

00:24:50 --> 00:24:57
o release that might turn out to be

00:24:52 --> 00:25:01
dangerous in this case used probably by

00:24:56 --> 00:25:03
Russians fake news for misinformation

00:25:00 --> 00:25:05
that kind of death that's the kind of

00:25:02 --> 00:25:08
thinking is how do we release it and I

00:25:04 --> 00:25:10
think while it turned out that the GPG

00:25:07 --> 00:25:12
to model is not quite so dangerous that

00:25:09 --> 00:25:16
humans are in fact more dangerous than

00:25:11 --> 00:25:18
AI currently the that thought experiment

00:25:15 --> 00:25:20
is very interesting they released a

00:25:17 --> 00:25:22
report run release strategies in the

00:25:19 --> 00:25:25
social impacts of language models that

00:25:21 --> 00:25:27
almost didn't get as much intention as I

00:25:24 --> 00:25:29
think it should and it was a little bit

00:25:26 --> 00:25:33
disappointing to me how little people

00:25:28 --> 00:25:36
are worried about this kind of situation

00:25:32 --> 00:25:39
there is more of an eye-roll about oh

00:25:35 --> 00:25:44
these language models aren't as smart as

00:25:38 --> 00:25:46
as we thought they might be but the

00:25:43 --> 00:25:49
reality is once they are it's a very

00:25:45 --> 00:25:52
interesting thought experiment of how

00:25:48 --> 00:25:54
should the process go of companies and

00:25:51 --> 00:25:56
experts communicating with each other

00:25:53 --> 00:25:59
during that release the support think

00:25:55 --> 00:26:01
s through some of those details my

00:25:58 --> 00:26:03
takeaway from just reading the reporter

00:26:00 --> 00:26:06
from this whole year of that event is

00:26:02 --> 00:26:09
that conversation on this topic are

00:26:05 --> 00:26:11
difficult because we as the public seem

00:26:08 --> 00:26:14
to penalize anybody trying to have that

00:26:10 --> 00:26:17
conversation and the model of sharing

00:26:13 --> 00:26:18
privately confidentially between ml

00:26:16 --> 00:26:21
machine learning organizations and

00:26:17 --> 00:26:23
experts is not there there's no

00:26:20 --> 00:26:28
incentive or model or history or a

00:26:22 --> 00:26:31
culture of sharing okay best paper from

00:26:27 --> 00:26:35
ACL the the main conference for

00:26:30 --> 00:26:38
languages was on the difficult task of

00:26:34 --> 00:26:40
so we talked about language models now

00:26:37 --> 00:26:44
there's the task taking it a step

00:26:39 --> 00:26:47
further of dialogue multi-domain

00:26:43 --> 00:26:48
task oriented dialogue that's sort of

00:26:46 --> 00:26:53
like the next challenge for dialogue

00:26:47 --> 00:26:55
systems and they've had a few ideas on

00:26:52 --> 00:26:59
how to perform dialogues state tracking

00:26:54 --> 00:27:02
across domains achieving state of the

00:26:58 --> 00:27:05
art performance on multi laws which is a

00:27:01 --> 00:27:07
five domain challenging very difficult

00:27:04 --> 00:27:09
fide domain human to human dialogue

00:27:06 --> 00:27:11
dataset there's a few ideas there I

00:27:08 --> 00:27:14
should probably hurry up and start

00:27:10 --> 00:27:16
skipping stuff

00:27:13 --> 00:27:19
the common sense reasoning which is

00:27:15 --> 00:27:20
really interesting is the this one of

00:27:18 --> 00:27:23
the open questions for the deep learning

00:27:19 --> 00:27:25
community a community in general is how

00:27:22 --> 00:27:27
can we have hybrid systems of whether

00:27:24 --> 00:27:29
it's symbolic and deep learning or

00:27:26 --> 00:27:31
generally common sense reasoning with

00:27:28 --> 00:27:34
learning systems and there's been a few

00:27:30 --> 00:27:38
papers in this space on my favorite from

00:27:33 --> 00:27:41
Salesforce on building a data set where

00:27:37 --> 00:27:45
we can start to do question answering

00:27:40 --> 00:27:47
and figuring out the concepts that are

00:27:44 --> 00:27:50
being explored in the question and

00:27:46 --> 00:27:52
answering here the question while eating

00:27:49 --> 00:27:54
a hamburger with friends what are people

00:27:51 --> 00:27:59
trying to do multiple choice have fun

00:27:53 --> 00:28:02
tasty indigestion the idea that needs to

00:27:58 --> 00:28:05
be generated there and that's where the

00:28:01 --> 00:28:07
language model would come in is that

00:28:04 --> 00:28:09
usually a hamburger with friends

00:28:06 --> 00:28:11
indicates a good time

00:28:08 --> 00:28:15
so you basically take the question

00:28:10 --> 00:28:19
generate the common sense concept and

00:28:14 --> 00:28:21
from that be able to determine the

00:28:18 --> 00:28:24
multiple choice what's being what's

00:28:20 --> 00:28:29
happening what's the state of affairs in

00:28:23 --> 00:28:32
this particular question okay I'll let

00:28:28 --> 00:28:33
surprise again hasn't received nearly

00:28:31 --> 00:28:35
enough attention that I think you should

00:28:32 --> 00:28:38
have perhaps because there hasn't been

00:28:34 --> 00:28:41
major breakthroughs but it's open domain

00:28:37 --> 00:28:45
conversations that all of us anybody who

00:28:40 --> 00:28:52
wns an Alexa can can participate in as

00:28:44 --> 00:28:53
a provider of data but there's been a

00:28:51 --> 00:28:55
lot of amazing work from universities

00:28:52 --> 00:28:56
across the world on the elect surprised

00:28:54 --> 00:28:57
in the last couple of years and there's

00:28:55 --> 00:29:01
been a lot of interesting lessons

00:28:56 --> 00:29:03
ummarized in papers and blog posts a

00:29:00 --> 00:29:06
few lessons from Alcoa

00:29:02 --> 00:29:07
that I particularly like and this is

00:29:05 --> 00:29:10
kind of echoes the work in the IBM

00:29:07 --> 00:29:14
Watson who the Jeopardy challenge is

00:29:10 --> 00:29:17
that one of the big ones is that machine

00:29:13 --> 00:29:20
learning is not an essential tool for

00:29:16 --> 00:29:23
effective conversation yet so machine

00:29:19 --> 00:29:25
learning is useful for general chitchat

00:29:22 --> 00:29:27
when you fail at deep meaningful

00:29:24 --> 00:29:28
conversation or actually understanding

00:29:26 --> 00:29:30
what the topic or

00:29:27 --> 00:29:33
talking about so throwing in chitchat

00:29:29 --> 00:29:35
and classification sort of classifying

00:29:32 --> 00:29:37
intent finding the entities detecting

00:29:34 --> 00:29:40
the sentiment of the sentences that's

00:29:36 --> 00:29:43
ort of a an assistive tool but the

00:29:39 --> 00:29:45
fundamentals of the conversation are are

00:29:42 --> 00:29:48
the following so first you have to break

00:29:44 --> 00:29:50
it apart sort of conversation is a you

00:29:47 --> 00:29:56
can think of it as a as a long dance and

00:29:49 --> 00:29:57
the way you you have fun dancing is you

00:29:55 --> 00:30:00
break it up into a set of moves and

00:29:56 --> 00:30:01
turns and so on and focus on that sort

00:29:59 --> 00:30:03
of live in the moment kind of thing so

00:30:00 --> 00:30:06
focus on small parts of the conversation

00:30:02 --> 00:30:08
taken at a time then also have a graph

00:30:05 --> 00:30:12
sort of conversation is also all about

00:30:07 --> 00:30:14
angents so have a graph of topics and

00:30:11 --> 00:30:16
be ready to jump context from one

00:30:13 --> 00:30:18
context to the other and back if you

00:30:15 --> 00:30:20
look at some of these natural language

00:30:17 --> 00:30:23
conversations they publish it's just all

00:30:19 --> 00:30:24
over the place in terms of topics you

00:30:22 --> 00:30:27
jump back and forth and that's the

00:30:23 --> 00:30:29
beauty the humour the wit the fun of

00:30:26 --> 00:30:31
conversations you jump jump around from

00:30:28 --> 00:30:33
topic to topic and opinions one of the

00:30:30 --> 00:30:36
things that natural language systems

00:30:32 --> 00:30:39
don't seem to have much is opinions if I

00:30:35 --> 00:30:42
learned anything one of the simplest

00:30:38 --> 00:30:45
ways to convey intelligence is to be

00:30:41 --> 00:30:47
very opinionated about something and

00:30:44 --> 00:30:49
confident and that's that's a really

00:30:46 --> 00:30:51
interesting concept about constantly and

00:30:48 --> 00:30:54
in general there's just a lot of lessons

00:30:50 --> 00:30:56
oh and finally of course maximize

00:30:53 --> 00:30:58
ntertainment not information this is

00:30:55 --> 00:31:01
true for Thomas vehicles this is true

00:30:57 --> 00:31:03
for natural language conversation is fun

00:31:00 --> 00:31:06
should be part of the objective function

00:31:02 --> 00:31:08
okay lots of lessons to learn there this

00:31:05 --> 00:31:11
really the lobner prize the Turing

00:31:07 --> 00:31:13
test of our generation that's I'm

00:31:10 --> 00:31:15
excited to see if there's anybody able

00:31:12 --> 00:31:19
to solve the lexer prize again a lexer

00:31:14 --> 00:31:24
prize is your task with talking to a bot

00:31:18 --> 00:31:26
and the measure of quality is the same

00:31:23 --> 00:31:28
as the lobner prize is just measuring

00:31:25 --> 00:31:29
how good was that conversation but also

00:31:27 --> 00:31:32
the task is to try to continue the

00:31:28 --> 00:31:34
conversation for 20 minutes if you try

00:31:31 --> 00:31:37
to talk to a bot today like and you have

00:31:33 --> 00:31:40
a choice to talk to a bot or go do

00:31:36 --> 00:31:42
something else watch Netflix

00:31:39 --> 00:31:46
the you last but probably less than 10

00:31:41 --> 00:31:48
seconds you'd be bored the the point is

00:31:45 --> 00:31:50
to continue trapping you in the

00:31:47 --> 00:31:52
conversation because you're enjoying it

00:31:49 --> 00:31:56
so much in the 20 minutes is that's a

00:31:51 --> 00:31:58
really nice benchmark for passing the

00:31:55 --> 00:32:01
spirit of what the Tory test stood for

00:31:57 --> 00:32:04
examples here from the elect surprised

00:32:00 --> 00:32:06
than the alko's bought so the difference

00:32:03 --> 00:32:09
in two kinds of conversations so alko

00:32:05 --> 00:32:11
says have you been in Brazil the user

00:32:08 --> 00:32:14
says what is the population of Brazil

00:32:10 --> 00:32:17
Alco says it is about 20 million user

00:32:13 --> 00:32:20
says well okay this is what happens a

00:32:16 --> 00:32:22
lot with like I meant your multi domain

00:32:19 --> 00:32:25
conversation is once you jump to a new

00:32:21 --> 00:32:27
domain you stay there once you switch

00:32:24 --> 00:32:29
context you stay there the reality is

00:32:26 --> 00:32:32
you want to jump back and continue

00:32:28 --> 00:32:34
jumping around like in the second most

00:32:31 --> 00:32:36
more successful conversation have you

00:32:33 --> 00:32:40
been in Brazil what is the population of

00:32:35 --> 00:32:42
Brazil it is around 20 million anyway I

00:32:39 --> 00:32:44
was saying have you been in Brazil so

00:32:41 --> 00:32:47
they're jumping back in context that's

00:32:43 --> 00:32:50
how conversation goes change you to

00:32:46 --> 00:32:53
change in and back quickly there's been

00:32:49 --> 00:32:56
a lot of sequins to sequins kind of work

00:32:52 --> 00:32:59
using natural language to summarize a

00:32:55 --> 00:33:02
lot of applications one of the for me I

00:32:58 --> 00:33:03
cleared that I wanted to highlight from

00:33:01 --> 00:33:07
Technion that I find particularly

00:33:02 --> 00:33:11
interesting is the abstract syntax tree

00:33:06 --> 00:33:14
based summarization of code so modeling

00:33:10 --> 00:33:19
computer code in this case sadly Java

00:33:13 --> 00:33:22
nd c-sharp in in trees in syntax trees

00:33:18 --> 00:33:24
and then using operating on those trees

00:33:21 --> 00:33:28
to then do the summarization in text

00:33:23 --> 00:33:32
here an example of a basic power of to

00:33:27 --> 00:33:36
function on the bottom right in Java the

00:33:31 --> 00:33:39
code to SEC summarization says get power

00:33:35 --> 00:33:42
of two that's an exciting possibility of

00:33:38 --> 00:33:44
automated documentation of source code I

00:33:41 --> 00:33:46
thought it was particularly interesting

00:33:43 --> 00:33:47
in the future there's bright ok hopes

00:33:45 --> 00:33:50
for 2020 for natural language processing

00:33:46 --> 00:33:53
is reasoning common-sense reasoning

00:33:49 --> 00:33:55
becomes greater and greater part of the

00:33:52 --> 00:33:57
former type language model work that

00:33:54 --> 00:34:00
will be seen in the deep learning world

00:33:56 --> 00:34:03
extending the context from thousands

00:33:59 --> 00:34:05
from hundreds of thousands of words to

00:34:02 --> 00:34:08
tens of thousands of words being able to

00:34:04 --> 00:34:12
read entire stories and maintain the

00:34:07 --> 00:34:15
context which transformers again with

00:34:11 --> 00:34:16
excel net transformer Excel is starting

00:34:14 --> 00:34:18
to be able to do but we're still far

00:34:15 --> 00:34:21
away from that long-term lifelong

00:34:17 --> 00:34:24
maintenance of context dialogue open

00:34:20 --> 00:34:26
domain dialogue forever since Alan

00:34:23 --> 00:34:28
Turing - today is the dream of

00:34:25 --> 00:34:31
artificial intelligence being able to

00:34:27 --> 00:34:33
pass the Turing test and the dream of

00:34:30 --> 00:34:36
sort of natural language model

00:34:32 --> 00:34:42
transformers are self supervised

00:34:35 --> 00:34:47
learning and the dream of Yann laocoön

00:34:41 --> 00:34:49
is - for these kinds of where previously

00:34:46 --> 00:34:50
were called unsupervised but he's

00:34:48 --> 00:34:53
calling now self supervised learning

00:34:49 --> 00:34:56
systems to be able to sort of watch

00:34:52 --> 00:34:57
youtube videos and from that start to

00:34:55 --> 00:35:00
form representation based on which you

00:34:56 --> 00:35:03
can understand the world sort of the the

00:34:59 --> 00:35:06
hope for 2020 and beyond is to be able

00:35:02 --> 00:35:08
to transfer some of the success of

00:35:05 --> 00:35:11
transformers to the world of visual

00:35:07 --> 00:35:13
information the world of video for

00:35:10 --> 00:35:13
example

00:35:13 --> 00:35:19
DRL and self play this has been an

00:35:16 --> 00:35:22
exciting year continues to be an

00:35:18 --> 00:35:25
exciting time for reinforcement learning

00:35:21 --> 00:35:31
in games and robotics

00:35:24 --> 00:35:32
o first dota2 an open AI an

00:35:30 --> 00:35:36
exceptionally popular competitive game

00:35:32 --> 00:35:38
sports game that people compete when

00:35:35 --> 00:35:40
millions of dollars with so this is a

00:35:37 --> 00:35:43
lot of world-class professional players

00:35:39 --> 00:35:46
in so in 2018 open at five this is a

00:35:42 --> 00:35:50
team play tried their best at the

00:35:45 --> 00:35:51
international and lost and said that

00:35:49 --> 00:35:53
we're looking forward to pushing five to

00:35:50 --> 00:35:57
the next level which they did in april

00:35:52 --> 00:36:02
two thousand eighteen they beat the 2018

00:35:56 --> 00:36:06
world champions in five on five play so

00:36:01 --> 00:36:09
the key there was compute eight times

00:36:05 --> 00:36:11
more training compute because the the

00:36:08 --> 00:36:14
actual compute was already maxed out

00:36:10 --> 00:36:17
he way they achieved the 8x is in time

00:36:13 --> 00:36:19
simply training for longer so the

00:36:16 --> 00:36:21
current version of open ni 5 is jacob

00:36:18 --> 00:36:24
will talk about next Friday has consumed

00:36:20 --> 00:36:27
800 petaflop a second days and

00:36:23 --> 00:36:29
experienced about 45,000 years of dota

00:36:26 --> 00:36:31
self play over 10 real-time months again

00:36:28 --> 00:36:34
behind a lot of the game systems talk

00:36:30 --> 00:36:36
about the they use self play so they

00:36:33 --> 00:36:38
play against each other this is one of

00:36:35 --> 00:36:40
the most exciting concepts in deep

00:36:37 --> 00:36:43
learning systems that learn by playing

00:36:39 --> 00:36:46
each other and incrementally improving

00:36:42 --> 00:36:47
in time so starting from being terrible

00:36:45 --> 00:36:49
and getting better and better and better

00:36:46 --> 00:36:50
and you're always being

00:36:48 --> 00:36:53
challenged by a slightly better opponent

00:36:49 --> 00:36:54
because the because of the natural

00:36:52 --> 00:36:58
process of self play that's a

00:36:53 --> 00:37:00
fascinating process the 2019 version the

00:36:57 --> 00:37:05
last version of open AI 5 well has a

00:36:59 --> 00:37:08
99.9 win rate versus the 2018 version ok

00:37:04 --> 00:37:12
then deep mind also in parallel has been

00:37:07 --> 00:37:15
working and using self play to solve

00:37:11 --> 00:37:18
some of these multi agent games which is

00:37:14 --> 00:37:20
a really difficult space when people

00:37:17 --> 00:37:22
have to collaborate as part of the

00:37:19 --> 00:37:23
competition it's exceptionally difficult

00:37:21 --> 00:37:26
from the reinforcement learning

00:37:22 --> 00:37:27
perspective so this is from raw pixels

00:37:25 --> 00:37:29
o all

00:37:26 --> 00:37:32
the arena capture the flag game quake 3

00:37:28 --> 00:37:34
arena one of the things I love just as a

00:37:31 --> 00:37:37
sort of side note about both opening

00:37:33 --> 00:37:39
eyes and deep mind and general research

00:37:36 --> 00:37:40
and reinforcement learning there will

00:37:38 --> 00:37:44
always be one or two paragraphs of

00:37:39 --> 00:37:46
philosophy in this case from deep mind

00:37:43 --> 00:37:48
billions of people inhabit the planet

00:37:45 --> 00:37:50
each with their own individual goals and

00:37:47 --> 00:37:52
actions but still capable of coming

00:37:49 --> 00:37:54
together through teams organizations and

00:37:51 --> 00:37:56
societies in impressive displays of

00:37:53 --> 00:37:58
collective intelligence this is a

00:37:55 --> 00:38:00
setting we call multi agent learning

00:37:57 --> 00:38:02
many individual agents must act

00:37:59 --> 00:38:05
independently yet learn to interact and

00:38:01 --> 00:38:06
cooperate with other agent this is an

00:38:04 --> 00:38:08
immensely difficult problem because with

00:38:05 --> 00:38:11
Co adapting agent the world is

00:38:07 --> 00:38:14
constantly changing the fact that we

00:38:10 --> 00:38:17
seven billion people on earth people in

00:38:13 --> 00:38:20
this room in families in villages can

00:38:16 --> 00:38:21
collaborate while being for the most

00:38:19 --> 00:38:24
part self-interested agents is

00:38:20 --> 00:38:27
fascinating one of my hopes actually for

00:38:23 --> 00:38:28
2020 is to explore social behaviors that

00:38:26 --> 00:38:32
emerge in reinforcement learning agents

00:38:27 --> 00:38:36
and how those are echoed in in real

00:38:31 --> 00:38:38
human to humans social systems okay

00:38:35 --> 00:38:39
here's some visualizations the agents

00:38:37 --> 00:38:41
automatically figure out as you see in

00:38:38 --> 00:38:43
other games they figure out the concepts

00:38:40 --> 00:38:45
o knowing very little knowing nothing

00:38:42 --> 00:38:46
about the rules of the game about the

00:38:44 --> 00:38:48
cost of the game about the strategy and

00:38:45 --> 00:38:50
the behaviors able to figure it out

00:38:47 --> 00:38:53
here's the TC visualizations of the

00:38:49 --> 00:38:55
different states importance states and

00:38:52 --> 00:38:58
concepts in the game that this figures

00:38:54 --> 00:39:00
out and so on skipping ahead automatic

00:38:57 --> 00:39:02
discovery of different behaviors this

00:38:59 --> 00:39:05
happens in all the different games we

00:39:01 --> 00:39:08
talk about from dota to Starcraft 2 to

00:39:04 --> 00:39:10
quake the different strategies that it

00:39:07 --> 00:39:13
doesn't know about it figures out

00:39:09 --> 00:39:16
automatically and the really exciting

00:39:12 --> 00:39:18
work in terms of the multi agent RL on

00:39:15 --> 00:39:21
the deep mind side was the meeting

00:39:17 --> 00:39:23
world-class players and achieving

00:39:20 --> 00:39:26
randmaster level in a game I dunno

00:39:22 --> 00:39:29
about which is Starcraft in December

00:39:25 --> 00:39:30
2018 alpha star beat mana one of the

00:39:28 --> 00:39:31
world's strongest professional Starcraft

00:39:29 --> 00:39:34
players but that was in a very

00:39:30 --> 00:39:38
constrained environment and there's a

00:39:33 --> 00:39:42
single race I think Protoss

00:39:37 --> 00:39:44
and in 2019 alpha star Beach Grand

00:39:41 --> 00:39:48
Master level by doing what we humans do

00:39:43 --> 00:39:51
so using a camera observing the game and

00:39:47 --> 00:39:54
playing as part of against other humans

00:39:50 --> 00:39:56
o this is not an artificial side system

00:39:53 --> 00:39:58
this is doing exact same process humans

00:39:55 --> 00:40:01
will undertake and achieve Grandmaster

00:39:57 --> 00:40:03
which is the highest level ok great I

00:40:00 --> 00:40:05
encourage you to observe a lot of the

00:40:02 --> 00:40:07
interesting on their blog posts and

00:40:04 --> 00:40:10
videos of the different strategies that

00:40:06 --> 00:40:12
he there are our Allegiance are able to

00:40:09 --> 00:40:13
figure out here's a quote from the one

00:40:11 --> 00:40:16
of the professional Starcraft players

00:40:12 --> 00:40:18
and we see this with alpha zero - and

00:40:15 --> 00:40:21
chess is alpha stars and intriguing

00:40:17 --> 00:40:23
unorthodox player one with the reflexes

00:40:20 --> 00:40:25
and speed of the best pros but

00:40:22 --> 00:40:28
strategies and style they're entirely

00:40:24 --> 00:40:30
its own the way alpha star was trained

00:40:27 --> 00:40:32
with agents competing against each other

00:40:29 --> 00:40:35
in a league has resulted in gameplay

00:40:31 --> 00:40:36
that's unimaginably unusual it really

00:40:34 --> 00:40:39
makes you question how much the stock

00:40:35 --> 00:40:41
has diverse possibilities Pro players

00:40:38 --> 00:40:42
have really explored that's the really

00:40:40 --> 00:40:46
exciting thing about reinforcement

00:40:41 --> 00:40:48
learning agent in chess and go in games

00:40:45 --> 00:40:52
and hopefully simulated systems in the

00:40:47 --> 00:40:55
future that teach us teach experts that

00:40:51 --> 00:40:56
hink they understand the dynamics of a

00:40:54 --> 00:41:01
particular game a particular simulation

00:40:55 --> 00:41:04
of new strategies of new behaviors to

00:41:00 --> 00:41:06
study that's one of the exciting

00:41:03 --> 00:41:08
applications from almost a psychology

00:41:05 --> 00:41:10
perspective that I'd love to see

00:41:07 --> 00:41:14
reinforcement learning push towards and

00:41:09 --> 00:41:22
on the imperfect information game side

00:41:13 --> 00:41:26
poker in 2018 CMU no Brown I was able to

00:41:21 --> 00:41:28
beat had two head-to-head No Limit Texas

00:41:25 --> 00:41:30
Hold'em and now team six player No Limit

00:41:27 --> 00:41:34
Texas Hold'em against professional

00:41:29 --> 00:41:36
players many of the same results mania

00:41:33 --> 00:41:40
the same approaches was self play

00:41:35 --> 00:41:42
iterative Monte Carlo and there's a

00:41:39 --> 00:41:44
bunch of ideas in terms of the

00:41:41 --> 00:41:46
abstractions so there's so many

00:41:43 --> 00:41:48
possibilities under the imperfect

00:41:45 --> 00:41:51
information that you have to form these

00:41:47 --> 00:41:53
bins of abstractions in both the actions

00:41:50 --> 00:41:55
bass in order to reduce the action space

00:41:52 --> 00:41:57
and the information abstraction space so

00:41:54 --> 00:42:00
the probabilities of all the different

00:41:56 --> 00:42:01
hands that can possibly have and all the

00:41:59 --> 00:42:03
different hands that the betting

00:42:00 --> 00:42:04
strategies could possibly represent and

00:42:02 --> 00:42:07
sort of you have to do this kind of

00:42:03 --> 00:42:10
course planning so there they use self

00:42:06 --> 00:42:13
play to generate a course blueprint

00:42:09 --> 00:42:16
strategy that in real time they then use

00:42:12 --> 00:42:19
Monte Carlo search to adjust as they

00:42:15 --> 00:42:21
play again unlike the deep mind open eye

00:42:18 --> 00:42:24
approaches very few very minimal compute

00:42:20 --> 00:42:27
required and they're able to achieve to

00:42:23 --> 00:42:31
beat to beat world-class players again I

00:42:26 --> 00:42:33
like this is getting quotes from the

00:42:30 --> 00:42:36
professional players after they get

00:42:32 --> 00:42:39
beaten so Chris Ferguson famous world's

00:42:35 --> 00:42:41
he is a poker player said pluribus

00:42:38 --> 00:42:43
that's the name of the agent is a very

00:42:40 --> 00:42:45
hard opponent to play against it's

00:42:42 --> 00:42:48
really hard to pin him down on any kind

00:42:44 --> 00:42:51
of hand he's also very good at making

00:42:47 --> 00:42:53
thin value bets on the river he's very

00:42:50 --> 00:42:57
good at extracting value out of his good

00:42:52 --> 00:43:00
hands sort of making bets without

00:42:56 --> 00:43:02
scaring off the opponent Darren Elias

00:42:59 --> 00:43:05
aid it's major strength is its ability

00:43:01 --> 00:43:07
to use mixed strategies that's the same

00:43:04 --> 00:43:09
thing that humans try to do it's a

00:43:06 --> 00:43:11
matter of execution for humans to do

00:43:08 --> 00:43:14
this in a perfectly random way and to do

00:43:10 --> 00:43:17
so consistently most people just can't

00:43:13 --> 00:43:18
hen in the robotic space there's been a

00:43:16 --> 00:43:21
lot of applications reinforcement

00:43:17 --> 00:43:24
learning one of the most exciting is the

00:43:20 --> 00:43:27
manipulation sufficient manipulation to

00:43:23 --> 00:43:30
be able to solve the Rubik's Cube again

00:43:26 --> 00:43:32
this is learned through reinforcement

00:43:29 --> 00:43:34
learning again because self plays in

00:43:31 --> 00:43:37
this context is not possible they use

00:43:33 --> 00:43:38
automatic domain randomization ADR so

00:43:36 --> 00:43:40
they generate progressively more

00:43:37 --> 00:43:42
difficult environments for the hand

00:43:39 --> 00:43:44
there's a giraffe head there you see

00:43:41 --> 00:43:46
there's a lot of perturbations to the

00:43:43 --> 00:43:48
system so they mess with it a lot and

00:43:45 --> 00:43:50
then a lot of noise injected into the

00:43:47 --> 00:43:53
system to be able to teach the hand to

00:43:49 --> 00:43:56
manipulate the cube in order to then

00:43:52 --> 00:43:59
solve the actual solution of figuring

00:43:55 --> 00:44:02
out how to go from this particular face

00:43:58 --> 00:44:05
to the solved cube is an obvious problem

00:44:01 --> 00:44:08
the the

00:44:04 --> 00:44:10
paper in this work is focused on the the

00:44:07 --> 00:44:13
much more difficult learning to

00:44:09 --> 00:44:15
manipulate the cube it's really exciting

00:44:12 --> 00:44:17
again a little philosophy as you would

00:44:14 --> 00:44:21
expect from open AI is they have this

00:44:16 --> 00:44:24
idea of emergent meta learning this idea

00:44:20 --> 00:44:26
that the capacity of the neural network

00:44:23 --> 00:44:30
that's learning this manipulation is

00:44:25 --> 00:44:32
constrained while the ADR the automatic

00:44:29 --> 00:44:33
domain randomization it's progressively

00:44:31 --> 00:44:35
making harder and harder environment so

00:44:32 --> 00:44:38
the capacity of the environment to be

00:44:34 --> 00:44:41
difficult is unconstrained and because

00:44:37 --> 00:44:43
of that the there's a an emergent self

00:44:40 --> 00:44:46
optimization of the neural network to

00:44:42 --> 00:44:51
learn general concepts as opposed to

00:44:45 --> 00:44:54
memorize particular manipulations the

00:44:50 --> 00:45:00
hope for me in the deep reinforcement

00:44:53 --> 00:45:04
learning space I mean for 2020 is the

00:44:59 --> 00:45:07
continued application robotics even sort

00:45:03 --> 00:45:10
of legged robotics but also robotic

00:45:06 --> 00:45:12
manipulation human behavior it's the use

00:45:09 --> 00:45:14
of multi agent self plays I've mentioned

00:45:11 --> 00:45:16
to explore naturally emerging social

00:45:13 --> 00:45:19
behaviors constructing simulations of

00:45:15 --> 00:45:23
social behavior and seeing what kind of

00:45:18 --> 00:45:25
multi human behavior emerges in soft

00:45:22 --> 00:45:29
play context I think that's one of the

00:45:24 --> 00:45:31
nice there are always I hope there'll be

00:45:28 --> 00:45:33
like a reinforcement learning self play

00:45:30 --> 00:45:36
psychology department one day like where

00:45:32 --> 00:45:38
you use reinforcement learning to study

00:45:35 --> 00:45:41
to reverse-engineer human behavior and

00:45:37 --> 00:45:43
study it through that way and again in

00:45:40 --> 00:45:45
games I'm not sure with the big

00:45:42 --> 00:45:47
challenges that it remained but I would

00:45:44 --> 00:45:51
love to see to me at least it's exciting

00:45:46 --> 00:45:53
to see learned solution to games to self

00:45:50 --> 00:45:53
play

00:45:53 --> 00:45:57
instead deep learning I would say

00:45:54 --> 00:45:59
there's been a lot of really exciting

00:45:56 --> 00:46:02
developments here that deserve their own

00:45:58 --> 00:46:06
lecture I'll mention just a few here

00:46:01 --> 00:46:09
from MIT in early 2018 but it sparked a

00:46:05 --> 00:46:10
lot of interest in 2019 follow-on work

00:46:08 --> 00:46:15
is the idea of the lottery ticket

00:46:09 --> 00:46:19
hypothesis so this work showed that

00:46:14 --> 00:46:21
sub-networks small sub-networks within

00:46:18 --> 00:46:24
the larger network are the ones that are

00:46:20 --> 00:46:27
doing all the thinking the same results

00:46:23 --> 00:46:29
in accuracy can be achieved from a small

00:46:26 --> 00:46:31
sub Network from within a neural network

00:46:28 --> 00:46:34
and they have a very simple process of

00:46:30 --> 00:46:38
arriving at a sub network of randomly

00:46:33 --> 00:46:40
initializing in your network that's I

00:46:37 --> 00:46:42
guess the lottery ticket train the

00:46:39 --> 00:46:44
network controller converges this is an

00:46:41 --> 00:46:47
iterative process prune the fraction of

00:46:43 --> 00:46:49
the network with low weights reset the

00:46:46 --> 00:46:52
waste of the remaining network with the

00:46:48 --> 00:46:54
original initialization these same

00:46:51 --> 00:46:57
lottery ticket and then train again the

00:46:53 --> 00:47:02
pre the pruned on train Network and

00:46:56 --> 00:47:05
continue this iteratively continuously

00:47:01 --> 00:47:08
to arrive at a network that's much

00:47:04 --> 00:47:11
smaller using the same original

00:47:07 --> 00:47:13
initializations this is fascinating that

00:47:10 --> 00:47:15
within these big networks there's often

00:47:12 --> 00:47:17
a much smaller network that can achieve

00:47:14 --> 00:47:20
the same kind of accuracy now

00:47:16 --> 00:47:22
practically speaking it's unclear with

00:47:19 --> 00:47:24
at what are the big takeaways there

00:47:21 --> 00:47:25
xcept the inspiring takeaway that there

00:47:23 --> 00:47:28
xist architectures that are much more

00:47:24 --> 00:47:31
fficient so there is value in investing

00:47:27 --> 00:47:35
time in finding such networks then there

00:47:30 --> 00:47:38
is disentangle representations which

00:47:34 --> 00:47:42
again to serve its own lecture but here

00:47:37 --> 00:47:44
showing a 10 vector representation and

00:47:41 --> 00:47:46
the goal is where each part of the

00:47:43 --> 00:47:48
vector can learn one particular concept

00:47:45 --> 00:47:51
about a data set so the dream of

00:47:47 --> 00:47:53
unsupervised learning is you can learn

00:47:50 --> 00:47:55
compress representations where every one

00:47:52 --> 00:47:57
thing is disentangled and you can learn

00:47:54 --> 00:48:00
some fundamental concept about the

00:47:56 --> 00:48:02
underlying data that can carry from data

00:47:59 --> 00:48:04
saturdays that it is that there's the

00:48:01 --> 00:48:07
best disentangle representation

00:48:03 --> 00:48:12
there's theoretical work best ICML paper

00:48:06 --> 00:48:14
in 2019 showing that that's impossible

00:48:11 --> 00:48:17
so disentangled representation is

00:48:13 --> 00:48:18
impossible without some without

00:48:16 --> 00:48:22
inductive biases and so the suggestion

00:48:17 --> 00:48:26
there is that the biases that you use

00:48:21 --> 00:48:28
should be made explicit as much as

00:48:25 --> 00:48:30
possible the open problem is finding

00:48:27 --> 00:48:32
ood inductive biases funster provides

00:48:29 --> 00:48:34
model selection that work across

00:48:31 --> 00:48:37
multiple data set that we're actually

00:48:33 --> 00:48:38
interested in a lot more papers but one

00:48:36 --> 00:48:43
of the exciting is the double dissent

00:48:37 --> 00:48:46
idea that's been extended and to the

00:48:42 --> 00:48:49
deep you know network context by open AI

00:48:45 --> 00:48:51
to explore the the phenomena that as we

00:48:48 --> 00:48:53
increase the number of parameters in a

00:48:50 --> 00:48:55
neural network the test error initially

00:48:52 --> 00:48:56
decreases increases and just as the

00:48:54 --> 00:48:59
model is able to fit the training set

00:48:55 --> 00:49:02
undergoes the second descent so decrease

00:48:58 --> 00:49:07
increase decrease so there's this

00:49:01 --> 00:49:10
critical moment of time when the the

00:49:06 --> 00:49:13
training set is just fit perfectly okay

00:49:09 --> 00:49:15
and this is the open air shows that it's

00:49:12 --> 00:49:16
applicable not just the model size but

00:49:14 --> 00:49:19
also the training time and data set time

00:49:15 --> 00:49:21
this is more like an open problem of why

00:49:18 --> 00:49:25
this is trying to understand this and

00:49:20 --> 00:49:26
how to leverage it in optimizing

00:49:24 --> 00:49:29
training dynamics and your networks

00:49:25 --> 00:49:30
that's a there's a lot of really

00:49:28 --> 00:49:33
interesting theoretical questions there

00:49:29 --> 00:49:35
so my hope there for the science that

00:49:32 --> 00:49:36
deep learning in 2020 is to continue

00:49:34 --> 00:49:40
xploring the fundamentals of model

00:49:35 --> 00:49:41
selection training dynamics the folks

00:49:39 --> 00:49:43
focused on the performance of the

00:49:40 --> 00:49:45
training in terms of memory and speed

00:49:42 --> 00:49:47
has worked on and the representation

00:49:44 --> 00:49:49
characteristics with respect to

00:49:46 --> 00:49:50
architecture characteristics so a lot of

00:49:48 --> 00:49:53
the fundamental work there in the

00:49:49 --> 00:49:56
understanding neural networks two areas

00:49:52 --> 00:50:00
that I had hold two sections on and

00:49:55 --> 00:50:02
papers which is super exciting my first

00:49:59 --> 00:50:05
love is grass so graph neural networks

00:50:01 --> 00:50:08
is a really exciting area of deep deep

00:50:04 --> 00:50:10
learning graph convolution neural

00:50:07 --> 00:50:11
networks as well for solving

00:50:09 --> 00:50:13
combinatorial problems and

00:50:10 --> 00:50:15
recommendation systems are really useful

00:50:12 --> 00:50:17
in any kind of problem that is

00:50:14 --> 00:50:21
fundamentally can be modeled as a graph

00:50:16 --> 00:50:23
can be then solved or

00:50:20 --> 00:50:24
least aided in buying y'all know there's

00:50:22 --> 00:50:28
a lot of exciting area there and

00:50:23 --> 00:50:30
Bayesian deep learning using Bayesian

00:50:27 --> 00:50:33
eural networks that's been for several

00:50:29 --> 00:50:34
years and exciting possibility it's very

00:50:32 --> 00:50:37
difficult to Train large Bayesian

00:50:33 --> 00:50:40
etworks but in in the context that you

00:50:36 --> 00:50:43
can and it's useful small datasets

00:50:39 --> 00:50:45
providing uncertainty measurements in

00:50:42 --> 00:50:48
the predictions it's extremely powerful

00:50:44 --> 00:50:51
capability of Bayesian Nets a Bayesian

00:50:47 --> 00:50:52
your networks and online incremental

00:50:50 --> 00:50:54
earning these new levels releases

00:50:51 --> 00:50:56
there's a lot of really good papers

00:50:53 --> 00:51:00
there it's exciting okay autonomous

00:50:55 --> 00:51:03
vehicles oh boy let me try to use this

00:50:59 --> 00:51:05
few sentences as possible to describe

00:51:02 --> 00:51:08
this section of a few slides it is one

00:51:04 --> 00:51:12
of the most exciting areas of

00:51:07 --> 00:51:15
applications of AI and learning in the

00:51:11 --> 00:51:17
real world today and I think it's the

00:51:14 --> 00:51:19
way that artificial intelligence it is

00:51:16 --> 00:51:22
the place where artificial intelligence

00:51:18 --> 00:51:23
systems touch human beings that don't

00:51:21 --> 00:51:25
know anything about artificial

00:51:22 --> 00:51:28
intelligence the most hundreds of

00:51:24 --> 00:51:30
thousands soon millions of cars will be

00:51:27 --> 00:51:32
interacting with human beings robots

00:51:29 --> 00:51:34
really so this is a really exciting area

00:51:31 --> 00:51:36
nd a really difficult problem and

00:51:33 --> 00:51:38
there's two approaches one is level two

00:51:35 --> 00:51:40
where the human is fundamentally

00:51:37 --> 00:51:43
responsible for the supervision of the

00:51:39 --> 00:51:45
AI system and level four or at least the

00:51:42 --> 00:51:48
dream is where the AI system is

00:51:44 --> 00:51:50
responsible for the actions and the

00:51:47 --> 00:51:54
human does not need to be a supervisor

00:51:49 --> 00:51:55
okay two companies represent each of

00:51:53 --> 00:51:59
these approaches that are sort of

00:51:54 --> 00:52:03
leading the way way mo in October 2018

00:51:58 --> 00:52:05
ten million miles on road today this

00:52:02 --> 00:52:08
year they've done twenty million miles

00:52:04 --> 00:52:11
in simulation ten billion miles and a

00:52:07 --> 00:52:12
lot I've gotten a chance to visit them

00:52:10 --> 00:52:14
out in Arizona they're doing a lot of

00:52:11 --> 00:52:16
really exciting work and they're

00:52:13 --> 00:52:18
obsessed with testing so the kind of

00:52:15 --> 00:52:20
testing they're doing is incredible

00:52:17 --> 00:52:23
twenty thousand classes of structured

00:52:19 --> 00:52:25
tests of putting the system through all

00:52:22 --> 00:52:27
kinds of tests that these years can

00:52:24 --> 00:52:30
think through and that appear in the

00:52:26 --> 00:52:34
real world and they've initiated testing

00:52:29 --> 00:52:37
on road with real consumers

00:52:33 --> 00:52:40
without a safety driver which if you

00:52:36 --> 00:52:43
don't know that is that means the car is

00:52:39 --> 00:52:46
truly responsible there's no human catch

00:52:42 --> 00:52:48
the exciting thing is that there is

00:52:45 --> 00:52:54
even hundred thousand eight hundred

00:52:47 --> 00:52:56
thousand Tesla autopilot systems that

00:52:53 --> 00:52:58
means there's these systems that are

00:52:55 --> 00:53:02
human supervised they're using fun a

00:52:57 --> 00:53:06
multi-headed neural network multitask

00:53:01 --> 00:53:10
neural network to perceive predict and

00:53:05 --> 00:53:13
act in this world so that's a really

00:53:10 --> 00:53:16
exciting real-world deployment

00:53:12 --> 00:53:18
large-scale of neural networks as a

00:53:15 --> 00:53:21
fundamentally deep learning system

00:53:17 --> 00:53:25
unlike way mo which is deep learning is

00:53:20 --> 00:53:28
the icing on the cake for for Tesla deep

00:53:24 --> 00:53:32
learning is the cake okay it's at the

00:53:27 --> 00:53:34
core of of the perception and the action

00:53:31 --> 00:53:36
of the system performs they have to de

00:53:33 --> 00:53:40
done over two billion miles estimated

00:53:35 --> 00:53:43
and that continues to quickly grow I'll

00:53:39 --> 00:53:46
briefly mention which i think is a super

00:53:42 --> 00:53:48
exciting idea in all applications of

00:53:45 --> 00:53:52
machine learning in the real world which

00:53:47 --> 00:53:55
is online so iterative learning active

00:53:51 --> 00:53:56
learning Andrey Carpathia was the head

00:53:54 --> 00:53:59
of autopilot calls is this the data

00:53:55 --> 00:54:00
engine it's this iterative process of

00:53:58 --> 00:54:02
having a neural network performing the

00:53:59 --> 00:54:04
task discovering the edge cases

00:54:01 --> 00:54:07
earching for other edge cases they're

00:54:03 --> 00:54:08
similar and then we're training the

00:54:06 --> 00:54:10
network annotating the education time we

00:54:07 --> 00:54:12
train them and continuously doing this

00:54:09 --> 00:54:13
loop this is what every single company

00:54:11 --> 00:54:16
that's using machine learning seriously

00:54:12 --> 00:54:17
is doing very little publications on

00:54:15 --> 00:54:19
this space and active learning but this

00:54:16 --> 00:54:21
the fundamental problem machine

00:54:18 --> 00:54:23
learning it's not to create a brilliant

00:54:20 --> 00:54:25
neural network is to create a dumb

00:54:22 --> 00:54:29
neural network that continuously learns

00:54:24 --> 00:54:32
to improve until it's brilliant and that

00:54:28 --> 00:54:33
process is specially interesting when

00:54:31 --> 00:54:35
you take it outside of single task

00:54:32 --> 00:54:37
learning so most papers are written on

00:54:34 --> 00:54:39
single task learning you take whatever

00:54:36 --> 00:54:41
benchmark here in the case of driving

00:54:38 --> 00:54:45
this object detection landmark detection

00:54:40 --> 00:54:48
driving buleria trajectory generation

00:54:44 --> 00:54:50
right that all those have benchmarks

00:54:47 --> 00:54:51
and you can have some separate neural

00:54:49 --> 00:54:54
networks for them that's a single task

00:54:50 --> 00:54:55
with combining to use a single neural

00:54:53 --> 00:54:57
networks that performs all those tests

00:54:54 --> 00:54:59
together that's the fascinating

00:54:56 --> 00:55:01
challenge where you're reusing parts of

00:54:58 --> 00:55:02
the neural network to learn things that

00:55:00 --> 00:55:04
are coupled and then to learn things

00:55:01 --> 00:55:06
that are completely independent and

00:55:03 --> 00:55:12
oing the continuous active learning

00:55:05 --> 00:55:14
loop they're inside companies in case

00:55:11 --> 00:55:16
the test that way mode in general it's

00:55:13 --> 00:55:18
exciting to have people these are actual

00:55:15 --> 00:55:19
human beings that are responsible for

00:55:17 --> 00:55:22
these particular tasks they've become

00:55:18 --> 00:55:24
xperts of particular perception tasks

00:55:21 --> 00:55:27
expert as a particular planning task and

00:55:23 --> 00:55:29
so on and so the job of that expert is

00:55:26 --> 00:55:31
both to train the neural network and to

00:55:28 --> 00:55:32
discover the edge cases which maximize

00:55:30 --> 00:55:34
the improvement of the network that's

00:55:31 --> 00:55:38
where the human expertise comes in a lot

00:55:33 --> 00:55:41
ok and there's a lot of debate it's an

00:55:37 --> 00:55:43
open question about which kind of system

00:55:40 --> 00:55:45
will be which kind of approach would be

00:55:42 --> 00:55:47
successful a fundamentally learning

00:55:44 --> 00:55:50
based approach as is with the level two

00:55:46 --> 00:55:53
with the Tesla autopilot system that's

00:55:49 --> 00:55:56
learning all the different tasks that I

00:55:52 --> 00:55:57
invited in involved with driving and as

00:55:55 --> 00:55:58
it gets better and better and better

00:55:56 --> 00:56:02
less and less human supervision is

00:55:57 --> 00:56:04
required the pro of that approach is the

00:56:01 --> 00:56:06
camera based systems have the highest

00:56:03 --> 00:56:08
resolution so that it's very amenable to

00:56:05 --> 00:56:11
learning but the con is that it requires

00:56:07 --> 00:56:15
a lot of data a huge amount of data and

00:56:10 --> 00:56:17
when nobody knows how much data yet the

00:56:14 --> 00:56:19
other con is human psychology is the

00:56:16 --> 00:56:22
driver behavior that the human must

00:56:18 --> 00:56:26
continue continue mean remain vigilant

00:56:21 --> 00:56:29
on the level for approach that leverages

00:56:25 --> 00:56:33
besides cameras and radar and so on also

00:56:28 --> 00:56:35
leverages lidar map the pros that it's

00:56:32 --> 00:56:39
much more consistent reliable

00:56:34 --> 00:56:41
xplainable system so the detection the

00:56:38 --> 00:56:43
accuracy of the detection the the depth

00:56:40 --> 00:56:46
estimation of the detection of different

00:56:42 --> 00:56:49
objects is much higher accurate with

00:56:45 --> 00:56:51
less data the cons is it's expensive at

00:56:48 --> 00:56:53
least for now it's less amenable to

00:56:50 --> 00:56:56
learning methods because much fewer data

00:56:52 --> 00:57:00
low resolution data

00:56:55 --> 00:57:02
nd must require at least for now

00:56:59 --> 00:57:05
some fallback whether that's the safety

00:57:01 --> 00:57:08
driver or teleoperation the open

00:57:04 --> 00:57:10
questions for the deep learning level to

00:57:07 --> 00:57:12
Tesla autopilot approach is how hard is

00:57:09 --> 00:57:14
driving this is actually the open

00:57:11 --> 00:57:15
question for most disciplines in

00:57:13 --> 00:57:17
artificial intelligence

00:57:14 --> 00:57:20
how difficult is driving how many

00:57:16 --> 00:57:22
education is driving have can that can

00:57:19 --> 00:57:24
we learn to generalize over those edge

00:57:21 --> 00:57:26
cases without solving the common sense

00:57:23 --> 00:57:28
reasoning problem it's kind of its kind

00:57:25 --> 00:57:30
of task without solving the human level

00:57:27 --> 00:57:32
artificial intelligence problem and that

00:57:29 --> 00:57:35
means perception how hard is perception

00:57:31 --> 00:57:38
detection intentional modeling human

00:57:34 --> 00:57:41
mental model modeling the trajectory

00:57:37 --> 00:57:44
prediction then the action side the game

00:57:40 --> 00:57:45
theoretic action side of balancing like

00:57:43 --> 00:57:49
I mentioned fun and enjoy ability with

00:57:44 --> 00:57:52
e safety of the systems because these

00:57:48 --> 00:57:54
are life critical systems and human

00:57:51 --> 00:57:56
supervision the vigilance side how good

00:57:53 --> 00:57:58
can auto Poli get before visuals

00:57:55 --> 00:58:00
decrement significantly and so people

00:57:57 --> 00:58:01
fall asleep becomes distracted stop

00:57:59 --> 00:58:03
watching movies so on and so on the

00:58:00 --> 00:58:05
things that people naturally do the open

00:58:02 --> 00:58:07
question is how good can auto pilot get

00:58:04 --> 00:58:11
before that becomes a serious problem

00:58:06 --> 00:58:13
and if that decrement nullifies the

00:58:10 --> 00:58:17
safety benefit of the use of autopilot

00:58:12 --> 00:58:20
which is autopilot AI system when the

00:58:16 --> 00:58:24
sensors are working well is perfectly

00:58:19 --> 00:58:29
vigilant they have AI is always paying

00:58:23 --> 00:58:32
attention the open questions for the

00:58:28 --> 00:58:34
light are based the level for the way mo

00:58:31 --> 00:58:38
approach is when we have maps lidar and

00:58:33 --> 00:58:40
geo-fenced routes that are taken how

00:58:37 --> 00:58:42
difficult is driving the traditional

00:58:39 --> 00:58:44
approach to robotics the from the DARPA

00:58:41 --> 00:58:49
challenge to today for most autonomous

00:58:43 --> 00:58:51
vehicle companies is to do HTML to use

00:58:48 --> 00:58:53
lidar for a really accurate localization

00:58:50 --> 00:58:55
together with GPS and then the

00:58:52 --> 00:58:57
perception problem becomes the icing on

00:58:54 --> 00:58:58
the cake because you already have a

00:58:56 --> 00:59:00
really good sense of where you are with

00:58:57 --> 00:59:02
obstacles in the scene and the

00:58:59 --> 00:59:04
perception is not a safety critical task

00:59:01 --> 00:59:08
but a task of understand interpreting

00:59:03 --> 00:59:13
the environment further so you have more

00:59:07 --> 00:59:15
yeah it's it's naturally by nature

00:59:12 --> 00:59:16
already safer but how difficult is

00:59:14 --> 00:59:19
nevertheless is that problem if

00:59:15 --> 00:59:22
perception is the hard problem then the

00:59:18 --> 00:59:24
lighter based approaches is nice if

00:59:21 --> 00:59:26
action is the hard problem

00:59:23 --> 00:59:28
then both Tesla and William will have to

00:59:25 --> 00:59:31
solve the action problem without the

00:59:27 --> 00:59:34
sensors don't matter there it's the the

00:59:30 --> 00:59:37
difficult problem the planning the game

00:59:33 --> 00:59:39
theoretic the human the modeling of

00:59:36 --> 00:59:41
mental models and the intentions of

00:59:38 --> 00:59:42
other human beings the pedestrians and

00:59:40 --> 00:59:45
the cyclists is the hard problem and

00:59:41 --> 00:59:47
then the other side the ten billion

00:59:44 --> 00:59:48
miles of simulation the open problem

00:59:46 --> 00:59:50
from reinforcement learning deep

00:59:47 --> 00:59:52
learning in general is how much can we

00:59:49 --> 00:59:55
learn from simulation how much of that

00:59:51 --> 00:59:57
knowledge can we transfer to to then

00:59:54 --> 00:59:59
with the real world systems my hope in

00:59:56 --> 01:00:03
the autonomous vehicle space may I

00:59:58 --> 01:00:05
assist a driving space is to see more

01:00:02 --> 01:00:06
applied deep learning innovation like I

01:00:04 --> 01:00:08
mentioned these are really exciting

01:00:05 --> 01:00:11
areas at least to me of active learning

01:00:07 --> 01:00:13
multitask learning and lifelong learning

01:00:10 --> 01:00:15
online learning iterative learning

01:00:12 --> 01:00:18
there's a million terms for it but

01:00:14 --> 01:00:20
basically continually learning and then

01:00:17 --> 01:00:24
the multitask learning to solve multiple

01:00:19 --> 01:00:25
problems over-the-air updates I would

01:00:23 --> 01:00:28
love to see in terms of the autonomous

01:00:24 --> 01:00:32
vehicle space this is common for this is

01:00:27 --> 01:00:33
a prerequisite for online learning if

01:00:31 --> 01:00:34
you want a system that continuously

01:00:32 --> 01:00:37
improves from data you want to be able

01:00:33 --> 01:00:39
to deploy new versions of that system

01:00:36 --> 01:00:41
test is one of the only vehicles that

01:00:38 --> 01:00:43
I'm aware of in the level two space

01:00:40 --> 01:00:46
that's deploying software updates

01:00:42 --> 01:00:47
regularly and built an infrastructure to

01:00:45 --> 01:00:50
deploy those updates

01:00:46 --> 01:00:52
o the updating your networks that to me

01:00:49 --> 01:00:55
seems like a prerequisite for our for

01:00:52 --> 01:00:58
solving the problem of autonomy in the

01:00:54 --> 01:01:02
level 2 space any space is deploy

01:00:57 --> 01:01:04
updates and for research purposes public

01:01:01 --> 01:01:06
datasets continue there's really a few

01:01:03 --> 01:01:08
public datasets of edge cases I'd love

01:01:05 --> 01:01:10
to continue seeing that from automotive

01:01:07 --> 01:01:13
companies and autonomous vehicle

01:01:09 --> 01:01:15
companies and simulators Carla and video

01:01:12 --> 01:01:17
draft constellation voyage deep drive

01:01:14 --> 01:01:20
there's a bunch of simulators coming out

01:01:16 --> 01:01:21
hat are allowing people to experiment

01:01:19 --> 01:01:23
with perception

01:01:20 --> 01:01:25
with planning with reinforcement

01:01:22 --> 01:01:27
learning algorithms I'd love to see more

01:01:24 --> 01:01:30
of that and less hype of course less

01:01:26 --> 01:01:32
hype one of the most overhyped spaces

01:01:29 --> 01:01:34
besides sort of AI generally is

01:01:31 --> 01:01:39
autonomous vehicles and I'd love to see

01:01:33 --> 01:01:40
real balanced nuanced in-depth reporting

01:01:38 --> 01:01:42
by journalists and companies on

01:01:39 --> 01:01:46
successes and challenges of autonomous

01:01:41 --> 01:01:48
driving if we skip any section it would

01:01:45 --> 01:01:54
be politics but me may be briefly

01:01:47 --> 01:01:58
mentioned somebody said Andrew yang Yang

01:01:53 --> 01:02:02
so it's exciting for me to see exciting

01:01:57 --> 01:02:04
and funny and awkward to see artificial

01:02:01 --> 01:02:05
intelligence discussed in politics so

01:02:03 --> 01:02:07
ne of the presidential candidates

01:02:04 --> 01:02:09
discussing artificial intelligence

01:02:06 --> 01:02:10
awkwardly so there's interesting ideas

01:02:08 --> 01:02:12
but there's still a lack of

01:02:09 --> 01:02:13
understanding of fundamentals artificial

01:02:11 --> 01:02:16
intelligence there's a lot of important

01:02:12 --> 01:02:17
issues but he's bringing artificial

01:02:15 --> 01:02:22
intelligence to the public discourse

01:02:16 --> 01:02:24
that's nice to see but is the early days

01:02:21 --> 01:02:26
and so as a community that informs me

01:02:23 --> 01:02:27
that we need to communicate better about

01:02:25 --> 01:02:29
he limitation capabilities of

01:02:26 --> 01:02:32
artificial intelligence Automation

01:02:28 --> 01:02:34
broadly the American initiative AI

01:02:31 --> 01:02:35
initiative was launched this year which

01:02:33 --> 01:02:38
is our government's best attempt to

01:02:34 --> 01:02:40
provide ideas and regulations about what

01:02:37 --> 01:02:42
does the future of artificial

01:02:39 --> 01:02:44
intelligence look like in our country

01:02:41 --> 01:02:47
again awkward but important to have

01:02:43 --> 01:02:51
these early developments early ideas

01:02:46 --> 01:02:55
from the from the federal government

01:02:50 --> 01:02:58
about what what are the dangers and what

01:02:54 --> 01:03:00
are the hopes the the funding and the

01:02:57 --> 01:03:01
ducation required to build a successful

01:02:59 --> 01:03:04
infrastructure for artificial

01:03:00 --> 01:03:04
intelligence

01:03:03 --> 01:03:08
the the fun part there's a lot of tech

01:03:06 --> 01:03:11
companies being brought before

01:03:07 --> 01:03:14
government it's really interesting in

01:03:10 --> 01:03:16
terms of power some of the most powerful

01:03:13 --> 01:03:18
people in our world today are the

01:03:15 --> 01:03:21
leaders of tech companies and the

01:03:17 --> 01:03:24
fundamentals of what the tech companies

01:03:20 --> 01:03:28
work on is artificial intelligence

01:03:23 --> 01:03:30
systems really recommendation systems

01:03:27 --> 01:03:33
advertisement

01:03:29 --> 01:03:35
discovery from Twitter to Facebook to

01:03:32 --> 01:03:38
YouTube use the recommendation systems

01:03:34 --> 01:03:40
and all of them are now fundamentally

01:03:37 --> 01:03:42
based on deep learning algorithms so you

01:03:39 --> 01:03:44
have these incredibly rich powerful

01:03:41 --> 01:03:46
companies they're using deep learning

01:03:43 --> 01:03:49
coming before government that's trying

01:03:45 --> 01:03:52
to see awkwardly trying to see how can

01:03:48 --> 01:03:55
we regulate and it's I think the role of

01:03:51 --> 01:03:58
the AG community broadly to inform the

01:03:54 --> 01:04:00
public and inform government of how we

01:03:57 --> 01:04:04
talk about how we think about these

01:03:59 --> 01:04:06
ideas and also I believe it's the the

01:04:03 --> 01:04:09
role of companies to publish more

01:04:05 --> 01:04:11
has been very little published on the

01:04:08 --> 01:04:16
details of recommendation systems behind

01:04:10 --> 01:04:18
Twitter Facebook YouTube Google so all

01:04:15 --> 01:04:20
those systems is very little as

01:04:17 --> 01:04:23
published perhaps it's understandable

01:04:19 --> 01:04:25
why but nevertheless as we consider the

01:04:22 --> 01:04:27
thical implications of these algorithms

01:04:24 --> 01:04:31
there needs to be more publication so

01:04:26 --> 01:04:33
here's just a harmless example from deep

01:04:30 --> 01:04:34
mind talking about the recommendation

01:04:32 --> 01:04:37
system behind the Play Store app

01:04:33 --> 01:04:40
discovery so there there's a bunch of

01:04:36 --> 01:04:43
discussion about the kind of neural net

01:04:39 --> 01:04:45
hat's being used to propose the

01:04:42 --> 01:04:47
candidate generation so this is after

01:04:44 --> 01:04:50
you install a few apps the generation of

01:04:46 --> 01:04:52
the candidate it shows you ranked the

01:04:49 --> 01:04:55
next app that you're likely to enjoy

01:04:51 --> 01:04:57
installing and so there they tried lsdm

01:04:54 --> 01:05:00
and transformers and then narrowed it

01:04:56 --> 01:05:03
down to a more efficient model that's

01:04:59 --> 01:05:06
being able to run fast that's a that's a

01:05:02 --> 01:05:09
n attention model and then

01:05:05 --> 01:05:12
there's some again harmless D biasing

01:05:08 --> 01:05:14
harmless in terms of topics the the

01:05:11 --> 01:05:18
model learns to bias in favor the apps

01:05:13 --> 01:05:20
that are shown and then thus installed

01:05:17 --> 01:05:23
more often as opposed to the ones you

01:05:19 --> 01:05:24
want so there's some waiting to adjust

01:05:22 --> 01:05:27
for the biasing towards the apps that

01:05:23 --> 01:05:29
are popular to allow the possibility of

01:05:26 --> 01:05:31
you installing apps that are less

01:05:28 --> 01:05:33
popular so that kind of process and

01:05:30 --> 01:05:35
publishing and discussing in public I

01:05:32 --> 01:05:38
think is really important and I would

01:05:34 --> 01:05:39
love to see more of that so my hope in

01:05:37 --> 01:05:42
this

01:05:38 --> 01:05:45
in the politic space in the public

01:05:41 --> 01:05:50
discourse space for 2020 is less fear of

01:05:44 --> 01:05:53
AI and more discourse between government

01:05:49 --> 01:05:54
and experts on topics of privacy

01:05:52 --> 01:05:56
bersecurity and so on and then

01:05:53 --> 01:05:58
transparency and recommender systems I

01:05:55 --> 01:06:01
think the most exciting the most

01:05:57 --> 01:06:04
powerful artificial intelligent system

01:06:00 --> 01:06:06
space for the next couple of decades is

01:06:03 --> 01:06:08
recommendation systems very little

01:06:05 --> 01:06:10
talked about it seems like but they're

01:06:07 --> 01:06:13
going to have the biggest impact on our

01:06:09 --> 01:06:16
society because they affect how the

01:06:12 --> 01:06:19
information we see how we learn what we

01:06:15 --> 01:06:27
think how we communicate these

01:06:18 --> 01:06:29
algorithms are controlling us and we

01:06:26 --> 01:06:33
have to really think deeply as engineers

01:06:28 --> 01:06:37
of how to speak up and think about their

01:06:32 --> 01:06:39
societal implications not just in

01:06:36 --> 01:06:40
terms of bias and so on which are sort

01:06:38 --> 01:06:43
of ethical considerations are really

01:06:39 --> 01:06:45
important but stuff that's like the

01:06:42 --> 01:06:48
lephant in the room that's hidden which

01:06:44 --> 01:06:50
is controlling how we think how we see

01:06:47 --> 01:06:52
the world the moral system under which

01:06:49 --> 01:06:56
we operate

01:06:51 --> 01:06:58
quickly to mention and wrapping up with

01:06:55 --> 01:07:03
a few minutes of questions if there are

01:06:57 --> 01:07:06
any is the deep learning courses this

01:07:02 --> 01:07:08
year before the last few years has been

01:07:05 --> 01:07:10
a lot of incredible courses on deep

01:07:07 --> 01:07:13
learning on reinforcement learning what

01:07:09 --> 01:07:17
I would very much recommend for people

01:07:12 --> 01:07:20
is the fast day I course I'm Jeremy

01:07:16 --> 01:07:22
Howard which uses their wraparound PI

01:07:19 --> 01:07:24
torch it's to me the best introduction

01:07:21 --> 01:07:26
to deep learning for people who are here

01:07:23 --> 01:07:28
or might be listening elsewhere are

01:07:25 --> 01:07:31
thinking about learning more about deep

01:07:27 --> 01:07:36
learning that's that that is the to me

01:07:30 --> 01:07:39
the best course also paid but enjoying

01:07:35 --> 01:07:40
everybody loves enjoying is the deep

01:07:38 --> 01:07:43
learning AI Coursera course on deep

01:07:39 --> 01:07:45
learning is excellent for especially for

01:07:42 --> 01:07:51
complete beginner for sort of beginners

01:07:44 --> 01:07:53
and then Stanford has two excellent

01:07:50 --> 01:07:55
courses on visual recognition so

01:07:52 --> 01:07:58
convolutional nets originally taught by

01:07:54 --> 01:07:59
andrew karpati and natural language

01:07:57 --> 01:08:01
processing excellent courses and of

01:07:58 --> 01:08:04
course here at MIT there's a bunch of

01:08:00 --> 01:08:07
courses especially on the fundamental

01:08:03 --> 01:08:09
the mathematics non linear algebra

01:08:06 --> 01:08:12
statistics and I have a few lectures up

01:08:08 --> 01:08:14
online that you should never watch then

01:08:11 --> 01:08:17
on the reinforcement learning side David

01:08:13 --> 01:08:18
silver is one of the greatest people in

01:08:16 --> 01:08:20
understanding reinforcement learning

01:08:17 --> 01:08:21
from deep mind he has a great course

01:08:19 --> 01:08:23
introduction to reinforcement learning

01:08:20 --> 01:08:25
spinning up and deeper enforce

01:08:22 --> 01:08:28
millennium opening I highly recommend

01:08:24 --> 01:08:30
here just for the slides that I'll share

01:08:27 --> 01:08:32
online there's been there's a lot of

01:08:29 --> 01:08:34
tutorials one of my favorite list of

01:08:31 --> 01:08:35
tutorials which is I believe the best

01:08:33 --> 01:08:37
way to learn machine learning deep

01:08:34 --> 01:08:40
learning natural language processing in

01:08:36 --> 01:08:41
general is is just code just just build

01:08:39 --> 01:08:43
it yourself build the models oftentimes

01:08:40 --> 01:08:46
from scratch here's a list of tutorials

01:08:42 --> 01:08:50
with that link over 200 tutorials on

01:08:45 --> 01:08:53
topics from deep RL to optimization to

01:08:49 --> 01:08:57
backprop l STM's commotion over Kurnool

01:08:52 --> 01:08:58
networks everything over 200 of the best

01:08:56 --> 01:09:00
machine learning NLP and Python

01:08:57 --> 01:09:03
tutorials by Robbie Allen you can google

01:08:59 --> 01:09:04
that or you can click the link I love it

01:09:02 --> 01:09:06
highly recommend the three books I

01:09:03 --> 01:09:10
recommend of course

01:09:05 --> 01:09:12
learning book by yoshua bengio and good

01:09:09 --> 01:09:15
fellow

01:09:11 --> 01:09:18
and erinkoval that's more sort of the

01:09:14 --> 01:09:20
fundamental thinking about from

01:09:17 --> 01:09:22
philosophy of the specific techniques of

01:09:19 --> 01:09:25
the deep learning and the practical

01:09:21 --> 01:09:27
grokking deep learning which Andrew

01:09:24 --> 01:09:29
Trask will be here Wednesday his book

01:09:26 --> 01:09:30
grokken deep learning I think is the

01:09:28 --> 01:09:32
best for beginners book on deep learning

01:09:29 --> 01:09:36
I love it he implements everything from

01:09:31 --> 01:09:39
scratch it's extremely accessible 2019 I

01:09:35 --> 01:09:42
think was published maybe 18 but I loved

01:09:38 --> 01:09:46
it and then Francois Sholay the best

01:09:41 --> 01:09:48
book on Keros in tensorflow

01:09:45 --> 01:09:50
and really deep learning as well as as

01:09:47 --> 01:09:52
deep learning with python although you

01:09:49 --> 01:09:54
shouldn't buy it I think because he is

01:09:51 --> 01:09:55
upposed to come up with version 2 which

01:09:53 --> 01:09:58
I think will cover tensorflow

01:09:54 --> 01:10:00
2.0 you know being excellent book and

01:09:57 --> 01:10:02
when he's here Monday you should torture

01:09:59 --> 01:10:04
him and tell him to finish writing he

01:10:01 --> 01:10:07
was supposed to finish writing in 2018

01:10:03 --> 01:10:10
ok my journal hopes as I mentioned for

01:10:06 --> 01:10:14
2020 is I love to see common-sense

01:10:09 --> 01:10:16
reasoning and to not necessarily enter

01:10:13 --> 01:10:17
the world of deep learning but be a part

01:10:15 --> 01:10:19
of artificial intelligence and the

01:10:16 --> 01:10:22
problems that people tell you tackle as

01:10:18 --> 01:10:24
I've been harboring active learning is

01:10:21 --> 01:10:26
to me is the most important aspect of

01:10:23 --> 01:10:28
real-world application of deep learning

01:10:25 --> 01:10:29
there's not enough research there should

01:10:27 --> 01:10:32
be way more research I'd love to see

01:10:28 --> 01:10:33
active learning lifelong learning that's

01:10:31 --> 01:10:35
what we all do as human beings

01:10:32 --> 01:10:37
that's what AI systems need to do

01:10:34 --> 01:10:40
continually learn from their mistakes

01:10:36 --> 01:10:42
over time start out dumb become

01:10:39 --> 01:10:46
brilliant over time open domain

01:10:41 --> 01:10:48
conversation with the elect surprise I

01:10:45 --> 01:10:51
would love to see breakthroughs there

01:10:47 --> 01:10:54
Alexa folks thinks were still two or

01:10:50 --> 01:10:55
three decades away but that's what

01:10:53 --> 01:10:58
everybody says before the breakthrough

01:10:54 --> 01:11:00
so I'm excited to see if there's any

01:10:57 --> 01:11:02
brilliant grad students that come up

01:10:59 --> 01:11:04
with something their applications in

01:11:01 --> 01:11:06
autonomous vehicles the medical space

01:11:03 --> 01:11:09
algorithmic ethics of course ethics has

01:11:05 --> 01:11:13
been a lot of excellent work

01:11:08 --> 01:11:16
in fairness privacy and so on robotics

01:11:12 --> 01:11:19
and as I said recommendation systems the

01:11:15 --> 01:11:20
most important in terms of impact part

01:11:18 --> 01:11:23
of artificial intelligence systems I

01:11:19 --> 01:11:26
mentioned soup in terms of progress

01:11:22 --> 01:11:29
there's been a little bit of tension a

01:11:25 --> 01:11:31
little bit of love online in terms of

01:11:28 --> 01:11:34
deep learnings I just wanted to say that

01:11:30 --> 01:11:36
he kind of criticism and skepticism

01:11:33 --> 01:11:40
about the limitations of deep learning

01:11:35 --> 01:11:43
are really healthy in moderation

01:11:39 --> 01:11:45
Jeff hidden one of the three people to

01:11:42 --> 01:11:47
receive the Turing award as as many

01:11:44 --> 01:11:49
people know is said that the future

01:11:46 --> 01:11:51
depends on some graduate student who is

01:11:48 --> 01:11:54
deeply suspicious of everything I have

01:11:50 --> 01:11:57
said so that suspicion skepticism is

01:11:53 --> 01:12:00
essential but in moderation just a

01:11:56 --> 01:12:03
little bit the more important thing is

01:11:59 --> 01:12:05
perseverance which is what Geoffrey

01:12:02 --> 01:12:07
Hinton and the others have had through

01:12:04 --> 01:12:11
the winters of believing in neural nets

01:12:06 --> 01:12:14
and an open - for returning to the world

01:12:10 --> 01:12:17
of symbolic AI of expert systems of

01:12:13 --> 01:12:19
complexity and cellular automata of old

01:12:16 --> 01:12:21
ideas in AI and bringing them back and

01:12:18 --> 01:12:23
see if there's ideas there and of course

01:12:20 --> 01:12:25
you have to have a little bit of crazy

01:12:22 --> 01:12:27
nobody ever achieved something brilliant

01:12:24 --> 01:12:29
without being a little bit of crazy and

01:12:26 --> 01:12:31
the most important thing is a lot of

01:12:28 --> 01:12:34
hard work

01:12:30 --> 01:12:37
it's not the cool thing these days but

01:12:33 --> 01:12:41
hard work is everything I like what JFK

01:12:36 --> 01:12:43
said how about us going to the moon us I

01:12:40 --> 01:12:48
was born in the Soviet Union

01:12:42 --> 01:12:48
see how I conveniently just said us

01:12:47 --> 01:12:53
going to the moon is we do these things

01:12:51 --> 01:12:57
not because they are easy but because

01:12:52 --> 01:12:59
they're hard and I think that artificial

01:12:56 --> 01:13:01
intelligence is one of the hardest the

01:12:58 --> 01:13:05
most exciting problems there before us

01:13:00 --> 01:13:12
o with that like to thank you and see

01:13:04 --> 01:13:15
if there's any questions back in the

01:13:11 --> 01:13:16
1980s perilous distributing processing

01:13:14 --> 01:13:18
books came out they had most of the

01:13:15 --> 01:13:21
stuff in it back then what's your take

01:13:17 --> 01:13:23
on the roadblocks the most important

01:13:20 --> 01:13:25
roadblocks apart from maybe funding I

01:13:22 --> 01:13:29
think fundamentally I mean they're

01:13:24 --> 01:13:33
well known as limitations is

01:13:28 --> 01:13:38
that they're really inefficient at

01:13:32 --> 01:13:39
learning and they're not so they're

01:13:37 --> 01:13:42
ally good at extracting

01:13:38 --> 01:13:46
representations from raw data but not

01:13:41 --> 01:13:50
good at learning knowledge bases of like

01:13:45 --> 01:13:52
accumulating knowledge over time that

01:13:49 --> 01:13:54
's the fundamental limitation I

01:13:51 --> 01:13:58
export systems are really good at

01:13:53 --> 01:14:00
accumulating knowledge but very bad at

01:13:57 --> 01:14:05
doing that and automated the way

01:13:59 --> 01:14:06
symbolic AI so I don't know how to

01:14:04 --> 01:14:09
vercome a lot of people say there's

01:14:05 --> 01:14:13
hybrid approaches I believe more data

01:14:08 --> 01:14:17
bigger networks and better selection of

01:14:12 --> 01:14:20
data will take us a lot farther hello

01:14:16 --> 01:14:23
Lex I'm wondering if you recall what was

01:14:19 --> 01:14:25
the initial spark or inspiration that

01:14:22 --> 01:14:28
drove you towards work in AI was it when

01:14:24 --> 01:14:31
you were pretty young or was it in more

01:14:27 --> 01:14:33
cent years so I want to become a

01:14:30 --> 01:14:35
psychiatrist I wanted to

01:14:32 --> 01:14:38
I thought of it as kind of engineering

01:14:34 --> 01:14:40
the human mind by sort of manipulating

01:14:37 --> 01:14:45
it I thought that's what I thought of

01:14:39 --> 01:14:47
psychiatry is by using words to sort of

01:14:44 --> 01:14:48
explore the depths of the mind and be

01:14:46 --> 01:14:51
able to adjust it but then I realized

01:14:47 --> 01:14:53
that psychiatry can't actually do that

01:14:50 --> 01:14:56
and modern psychiatry is more about sort

01:14:52 --> 01:14:59
of bioengineering as drugs and so or

01:14:55 --> 01:15:02
sort of I thought that the way to really

01:14:58 --> 01:15:04
explore the engineering of the mind as

01:15:01 --> 01:15:09
the other side is to build it sort of

01:15:03 --> 01:15:12
and that's also when C++ really became

01:15:08 --> 01:15:14
the cool hot thing so I learned to

01:15:11 --> 01:15:16
program at 12 and then never look back

01:15:13 --> 01:15:18
hundreds of thousands of lines later

01:15:15 --> 01:15:20
just I love program I love building and

01:15:17 --> 01:15:23
that's to me is the best way to

01:15:20 --> 01:15:26
understand the - to build it speaking of

01:15:22 --> 01:15:28
building mind do you personally think

01:15:25 --> 01:15:31
that machines will ever be able to think

01:15:27 --> 01:15:35
and the second question will they ever

01:15:30 --> 01:15:38
be able to feel emotions a hundred

01:15:34 --> 01:15:39
percent yes 100 percent they'll be able

01:15:37 --> 01:15:43
to think and they'll be able to feel

01:15:38 --> 01:15:48
emotions because so those concepts of

01:15:42 --> 01:15:57
thought and feeling are human concepts

01:15:47 --> 01:16:01
and to me they'll be able to fake it

01:15:56 --> 01:16:07
hey're therefore they'll be able to do

01:16:00 --> 01:16:09
it like I've made I've been playing with

01:16:06 --> 01:16:13
Roombas a lot recently Roomba vacuum

01:16:08 --> 01:16:16
cleaners and so I've now started having

01:16:12 --> 01:16:20
Roombas Scream something like like

01:16:15 --> 01:16:23
there's like moaning in pain and they

01:16:19 --> 01:16:26
became I feel like they're having

01:16:22 --> 01:16:31
emotions so like the faking creates the

01:16:25 --> 01:16:34
motion yeah so that the display of

01:16:30 --> 01:16:36
emotion is emotion to me and then the

01:16:33 --> 01:16:42
display of thought is thought I guess

01:16:35 --> 01:16:42
that's the sort of everything else is

01:16:44 --> 01:16:51
impossible to pin

01:16:46 --> 01:16:53
down I'm asking so what about the

01:16:50 --> 01:16:55
thical aspects of it I'm asking because

01:16:52 --> 01:16:58
I was born in the Soviet Union as well

01:16:54 --> 01:17:00
and one of my favorite recent books is

01:16:57 --> 01:17:03
Victor Phil Evans I and it's about

01:16:59 --> 01:17:06
AI feel emotions and suffering from it

01:17:02 --> 01:17:09
so I don't know if you've read that book

01:17:05 --> 01:17:12
what do you think about like AI feeling

01:17:08 --> 01:17:15
emotions in that context or in general

01:17:11 --> 01:17:17
ethical aspects yeah it's a it's a

01:17:14 --> 01:17:19
really difficult question answer yes I

01:17:16 --> 01:17:22
believe AI will suffer and it's

01:17:18 --> 01:17:24
unethical to torture I act but I believe

01:17:21 --> 01:17:29
suffering exists in the eye of the

01:17:23 --> 01:17:34
observer sort of like if a tree falls

01:17:28 --> 01:17:38
and nobody's around to see it it never

01:17:33 --> 01:17:40
suffered it's us humans that see the

01:17:37 --> 01:17:43
suffering in the tree in the animal and

01:17:39 --> 01:17:46
our fellow humans and sort of in that

01:17:42 --> 01:17:49
sense the first time a programmer with a

01:17:45 --> 01:17:53
straight face delivers a product that

01:17:48 --> 01:17:55
says it's suffering is the first time it

01:17:52 --> 01:17:59
becomes unethical to torture AI systems

01:17:54 --> 01:18:01
and I can do we can do that today like I

01:17:58 --> 01:18:05
already built the Roombas I they won't

01:18:00 --> 01:18:08
sell currently but I think the first

01:18:04 --> 01:18:12
ime a Roomba says please don't hurt me

01:18:07 --> 01:18:14
that's when we start to have serious

01:18:11 --> 01:18:16
conversations about the ethics and it's

01:18:13 --> 01:18:17
it sounds ridiculous I'm glad that's

01:18:15 --> 01:18:21
being recorded because it won't be

01:18:16 --> 01:18:24
ridiculous in just a few years yeah

01:18:20 --> 01:18:26
is the enforcement learning a good

01:18:23 --> 01:18:29
candidate for achieving general

01:18:25 --> 01:18:31
artificial intelligence at the and are

01:18:28 --> 01:18:34
any other are there any other good

01:18:30 --> 01:18:37
candidates around so they're to me the

01:18:33 --> 01:18:40
answer's no but it can teach us some

01:18:36 --> 01:18:44
valuable gaps that can be filled by

01:18:39 --> 01:18:46
other methods so I believe that

01:18:43 --> 01:18:48
simulation is different than the real

01:18:45 --> 01:18:53
world so if you could simulate the real

01:18:47 --> 01:18:54
world then DRL so any kind of

01:18:52 --> 01:18:55
reinforcement learning with deep

01:18:53 --> 01:18:56
representations would be able to achieve

01:18:54 --> 01:18:58
something incredible

01:18:55 --> 01:18:59
but to me simulation is very different

01:18:57 --> 01:19:01
han the real wall so you have to

01:18:58 --> 01:19:02
interact in the real world and there you

01:19:00 --> 01:19:04
have to be much more efficient with

01:19:01 --> 01:19:06
learning and to be more efficient

01:19:03 --> 01:19:09
learning you have to have ability to

01:19:05 --> 01:19:13
automatically construct common sense

01:19:08 --> 01:19:16
like common sense reasoning seems to

01:19:12 --> 01:19:19
include like a huge amount of

01:19:15 --> 01:19:25
information that's accumulated over time

01:19:18 --> 01:19:26
and that feels more like programs than

01:19:24 --> 01:19:28
functions

01:19:25 --> 01:19:30
I like how like Ilya sutskever talks

01:19:27 --> 01:19:33
about deep learning learns functions

01:19:29 --> 01:19:36
approximator z' deep RL learns an

01:19:32 --> 01:19:39
approximator for policy or whatever but

01:19:35 --> 01:19:42
not programs it's not learning a thing

01:19:38 --> 01:19:44
that's able to sort of that's

01:19:41 --> 01:19:49
essentially what reasoning is a program

01:19:43 --> 01:19:51
it's not a function so I think I think

01:19:48 --> 01:19:54
no but it'll continue to one inspires

01:19:50 --> 01:19:58
and to inform us about what the true

01:19:53 --> 01:19:59
gaps are I think the ability to but I'm

01:19:57 --> 01:20:01
so human centric but I think the

01:19:58 --> 01:20:05
approach of being able to take knowledge

01:20:00 --> 01:20:08
and put it together sort of building

01:20:04 --> 01:20:10
into more and more complicated pieces of

01:20:07 --> 01:20:12
information concepts being able to

01:20:09 --> 01:20:14
reason in that way there's there's a lot

01:20:11 --> 01:20:17
of methodologies that old-school sort of

01:20:13 --> 01:20:19
that's the falls under the ideas of

01:20:16 --> 01:20:21
symbolic AI of doing that kind of logic

01:20:18 --> 01:20:24
reasoning accumulating knowledge bases

01:20:20 --> 01:20:26
that's going to be an essential part of

01:20:23 --> 01:20:27
general intelligence but also the

01:20:25 --> 01:20:31
ssential part of general intelligence

01:20:26 --> 01:20:35
is the roomba that says I'm intelligence

01:20:30 --> 01:20:38
if you if you don't believe me like a

01:20:34 --> 01:20:41
very confident like because right now

01:20:37 --> 01:20:44
like Alexa is very nervous like oh what

01:20:40 --> 01:20:49
can I do for you but once the Lexus says

01:20:43 --> 01:20:54
like you know is is upset that you would

01:20:48 --> 01:20:59
like turn her off or treat her like a

01:20:53 --> 01:21:01
servant or or say that she's not

01:20:58 --> 01:21:02
intelligent that's that that's what

01:21:00 --> 01:21:05
intelligence that's emerging because

01:21:01 --> 01:21:08
they think he was a pretty dumb and what

01:21:04 --> 01:21:10
general we're all like intelligence is a

01:21:07 --> 01:21:12
very kind of relative

01:21:09 --> 01:21:17
human construct that we've kind of

01:21:11 --> 01:21:20
convinced each others of and and once a

01:21:16 --> 01:21:23
I systems are also playing that game of

01:21:19 --> 01:21:24
creating constructs and that human

01:21:22 --> 01:21:25
communication that's going to be

01:21:23 --> 01:21:28
important but of course for that you

01:21:24 --> 01:21:30
still need to be have pretty good witty

01:21:27 --> 01:21:33
conversation and for that you need to do

01:21:29 --> 01:21:34
the symbology I think I'm wondering

01:21:32 --> 01:21:36
about the autonomous vehicles whether

01:21:33 --> 01:21:39
they are responsive to environmental

01:21:35 --> 01:21:41
sounds I mean like notice in her cart

01:21:38 --> 01:21:44
autonomous vehicle driving erratically

01:21:40 --> 01:21:46
won't respond to my beep that's a really

01:21:43 --> 01:21:48
interesting question as far as I know no

01:21:45 --> 01:21:49
I think way mo hinted that they look at

01:21:47 --> 01:21:52
sound a little bit

01:21:48 --> 01:21:53
I think they should so there's a lot of

01:21:51 --> 01:21:56
stuff that comes from audio that's

01:21:52 --> 01:21:59
really interesting the sort of way Moe

01:21:55 --> 01:22:03
have said that they use audio for sirens

01:21:58 --> 01:22:05
o detecting sirens from far away yeah I

01:22:02 --> 01:22:09
think audio is a lot of interesting

01:22:04 --> 01:22:12
information like the sound that the car

01:22:08 --> 01:22:15
that tires make on different kinds of

01:22:11 --> 01:22:18
roads is very interesting we kind of we

01:22:14 --> 01:22:20
use that information ourselves too

01:22:17 --> 01:22:22
depending on kind of like off-road wet

01:22:19 --> 01:22:25
road when it's not raining sounds

01:22:21 --> 01:22:28
different than dry Road there's a lot of

01:22:24 --> 01:22:29
little subtle information pedestrians

01:22:27 --> 01:22:32
yelling and that kind of stuff it's

01:22:28 --> 01:22:35
actually very difficult to know how much

01:22:31 --> 01:22:38
we get from audio most robotics folks

01:22:34 --> 01:22:40
think that audio is useless I'm a little

01:22:37 --> 01:22:42
skeptical yeah

01:22:39 --> 01:22:45
but nobody's been able to identify why

01:22:41 --> 01:22:46
audio might be useful so I have two

01:22:44 --> 01:22:50
questions

01:22:45 --> 01:22:54
my first is what do you think is the

01:22:49 --> 01:22:56
ultimate sort of end point for super

01:22:53 --> 01:22:59
machine intelligence like will we sort

01:22:55 --> 01:23:01
of be relegated to some obscure part of

01:22:58 --> 01:23:02
the earth like we've done some next

01:23:00 --> 01:23:06
primates and next intelligent primates

01:23:01 --> 01:23:09
and my second question is should there

01:23:05 --> 01:23:11
be should we have equal rights for

01:23:08 --> 01:23:15
beings made out of silicon versus carbon

01:23:10 --> 01:23:18
for example like robots for you know

01:23:14 --> 01:23:23
separate rights or say might equal

01:23:17 --> 01:23:24
rights with humans yeah so the future of

01:23:22 --> 01:23:27
super intelligent

01:23:23 --> 01:23:31
I think I have much less work I see very

01:23:26 --> 01:23:34
much fewer paths to a AGI systems

01:23:30 --> 01:23:37
killing humans than I do for a jazz

01:23:33 --> 01:23:41
systems living among us so I think I see

01:23:36 --> 01:23:46
xciting exciting or not so exciting but

01:23:40 --> 01:23:48
not harmful futures I think it's very

01:23:45 --> 01:23:53
difficult to create AI systems that will

01:23:47 --> 01:23:56
kill people that aren't like literally

01:23:52 --> 01:23:59
weapons of war they're like it'll always

01:23:55 --> 01:24:00
be people killing people like the things

01:23:58 --> 01:24:03
we should be worried about as other

01:23:59 --> 01:24:04
people that's the that's the fun of us

01:24:02 --> 01:24:05
o there's a lot of ways you know

01:24:03 --> 01:24:08
nuclear weapons there's a lot of

01:24:04 --> 01:24:10
existential threats to our society that

01:24:07 --> 01:24:13
are fundamentally human at the core and

01:24:09 --> 01:24:15
AI will be might be tools of that but

01:24:12 --> 01:24:19
here'll be also tools to defend against

01:24:14 --> 01:24:20
hat I also see AI proliferating as

01:24:18 --> 01:24:22
companions

01:24:19 --> 01:24:26
I think companionship will be a really

01:24:21 --> 01:24:27
interesting like we will more and more

01:24:25 --> 01:24:29
live as we already do in the digital

01:24:26 --> 01:24:31
world like you have an identity on a

01:24:28 --> 01:24:34
Twitter and Instagram especially if it's

01:24:30 --> 01:24:35
anonymous or something you have the this

01:24:33 --> 01:24:36
identity you've created and that will

01:24:34 --> 01:24:39
continue growing more and more

01:24:35 --> 01:24:42
specially for people born now that it's

01:24:38 --> 01:24:44
kind of this artificial identity that we

01:24:41 --> 01:24:46
live much more in the digital space and

01:24:43 --> 01:24:48
in that digital space as opposed to

01:24:45 --> 01:24:50
physical space is where AI can thrive

01:24:47 --> 01:24:53
much more currently you you'll thrive

01:24:49 --> 01:24:55
there first and so that will live in the

01:24:52 --> 01:24:57
world with a lot of intelligent first

01:24:54 --> 01:25:02
assistants but also just intelligent

01:24:56 --> 01:25:08
agents and I do believe they should have

01:25:01 --> 01:25:10
rights and in this contentious time of

01:25:07 --> 01:25:14
people groups fighting for rights

01:25:09 --> 01:25:19
I feel really bad saying they should

01:25:13 --> 01:25:23
have equal rights but I believe that

01:25:18 --> 01:25:27
I've talked to if you read the work of

01:25:22 --> 01:25:30
Peter Singer of looking I like my

01:25:26 --> 01:25:34
favorite food is steak I love meat but I

01:25:29 --> 01:25:37
also feel horrible about the torture of

01:25:33 --> 01:25:40
animals and that's

01:25:36 --> 01:25:42
the same kind of to me the way

01:25:39 --> 01:25:44
our society thinks about animals is a

01:25:41 --> 01:25:46
very similar way we should be thinking

01:25:43 --> 01:25:49
about robots well we will be thinking

01:25:45 --> 01:25:54
about robots and I would say about 20

01:25:48 --> 01:26:01
years what one final class yeah will

01:25:53 --> 01:26:03
they become our masters no it will not

01:26:00 --> 01:26:06
be our masters what I'm really worried

01:26:02 --> 01:26:10
about is well who will become our

01:26:05 --> 01:26:14
masters are owners of large tech

01:26:09 --> 01:26:16
companies who use these tools to to

01:26:13 --> 01:26:19
control human beings first

01:26:15 --> 01:26:22
unintentionally and then intentionally

01:26:18 --> 01:26:27
so we need to make sure that we

01:26:21 --> 01:26:29
democratized AI it's the same kind of

01:26:26 --> 01:26:32
thing that we did with

01:26:28 --> 01:26:35
government we make sure that we at the

01:26:31 --> 01:26:37
ads of tech companies if maybe people

01:26:34 --> 01:26:41
in the store will be heads of tech

01:26:36 --> 01:26:43
companies one day we have people like

01:26:40 --> 01:26:45
George Washington who relinquished power

01:26:42 --> 01:26:47
at the finding this country forget

01:26:44 --> 01:26:50
all the other horrible things he

01:26:46 --> 01:26:54
did but the he relinquished power as

01:26:49 --> 01:26:58
opposed to Stalin and all the other

01:26:53 --> 01:27:01
horrible human beings who have sought

01:26:57 --> 01:27:05
instead absolute power which will be the

01:27:00 --> 01:27:09
21st century AI will be the tools of

01:27:04 --> 01:27:12
power in the hands of 25 year old nerds

01:27:08 --> 01:27:13
it should be very careful about that

01:27:11 --> 01:27:18
future so the humans will become our

01:27:12 --> 01:27:19
masters not the AI AI will save us so on

01:27:17 --> 01:27:24
that no thank you very much

01:27:18 --> 01:27:24
[Applause]

01:27:28 --> 01:27:32
you

<!-- YOUTUBE_TRANSCRIPT_END -->
