---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "F1ka6a13S9I"
title: "Nuts and Bolts of Applying Deep Learning (Andrew Ng)"
video_url: "https://www.youtube.com/watch?v=F1ka6a13S9I"
thumbnail_url: "https://i.ytimg.com/vi/F1ka6a13S9I/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=F1ka6a13S9I"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 4788
duration_human: "1:19:48"
view_count: 391564
like_count: 5677
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:24:52.186Z"
---

# Nuts and Bolts of Applying Deep Learning (Andrew Ng)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=F1ka6a13S9I
- video_id: F1ka6a13S9I
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 1:19:48
- view_count: 391564
- like_count: 5677
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
so you know when we're uh organizing

00:00:02 --> 00:00:06
this Workshop My My co-organizers

00:00:04 --> 00:00:09
initially asked me hey Andrew end of the

00:00:05 --> 00:00:11
first day go give a Visionary talk so

00:00:08 --> 00:00:15
until uh several hours ago my talk was

00:00:10 --> 00:00:17
advertised as Visionary talk um but

00:00:14 --> 00:00:19
until but but I Was preparing for this

00:00:16 --> 00:00:21
presentation over the last several days

00:00:18 --> 00:00:24
um I tried to think what what would be

00:00:20 --> 00:00:25
the most useful information to you um

00:00:23 --> 00:00:26
and what are the things that you know

00:00:24 --> 00:00:28
you could take back to work on Monday

00:00:25 --> 00:00:31
and and do something different at your

00:00:27 --> 00:00:32
job next Monday and I thought that um Mr

00:00:30 --> 00:00:35
context right now as pet mentioned I

00:00:32 --> 00:00:38
lead BYU's AI team so team about a

00:00:34 --> 00:00:40
thousand people working on Vision speech

00:00:37 --> 00:00:41
NLP you know lots of applications of

00:00:39 --> 00:00:44
machine learning and so what I thought

00:00:40 --> 00:00:46
I'd do instead is um instead of taking

00:00:43 --> 00:00:48
the shiniest pieces of deep learning

00:00:45 --> 00:00:51
that I know I want to take the lessons

00:00:47 --> 00:00:53
that I saw at BYU that are common to so

00:00:50 --> 00:00:55
many different um academic areas as well

00:00:52 --> 00:00:58
as applications and you know autonomous

00:00:54 --> 00:01:00
cause augmented reality uh advertising

00:00:57 --> 00:01:02
uh web search um medical diagnosis with

00:00:59 --> 00:01:04
take what of the common lessons the

00:01:01 --> 00:01:06
simple powerful ideas that I've seen

00:01:03 --> 00:01:08
help drive a lot of machine learning

00:01:05 --> 00:01:10
progress at BYU and I thought I will um

00:01:08 --> 00:01:12
share those ideas of you because the

00:01:09 --> 00:01:14
patterns I see across a lot of projects

00:01:11 --> 00:01:16
I thought might be the patterns that

00:01:13 --> 00:01:18
would be most useful to you as well

00:01:15 --> 00:01:21
whatever you are working on in the next

00:01:17 --> 00:01:24
several weeks or months um so one common

00:01:20 --> 00:01:27
theme that will appear in in this

00:01:23 --> 00:01:29
presentation today is that the workflow

00:01:26 --> 00:01:31
of organizing machine learning projects

00:01:28 --> 00:01:33
feels like parts of it are changing in

00:01:30 --> 00:01:34
the era of deep learning so for

00:01:32 --> 00:01:37
example one of the ideas I talk about is

00:01:33 --> 00:01:39
bias variance this is a super old idea

00:01:36 --> 00:01:40
right and then you know many of you

00:01:38 --> 00:01:42
maybe all of you have heard of buyers

00:01:39 --> 00:01:44
and variance but in the era of deep

00:01:41 --> 00:01:46
learning I feel like there have been

00:01:43 --> 00:01:47
some changes to the way we think about

00:01:45 --> 00:01:49
buyers and variance so we want to talk

00:01:46 --> 00:01:52
about some of these ideas which maybe

00:01:48 --> 00:01:54
aren't even deep learning per se but um

00:01:51 --> 00:01:56
have been slowly shifting as as we apply

00:01:53 --> 00:01:59
deep learning to more and more of our

00:01:55 --> 00:02:02
applications okay oh and um instead of

00:01:58 --> 00:02:03
holding all your questions until the end

00:02:01 --> 00:02:04
you know if you have a question in the

00:02:02 --> 00:02:06
middle feel free to raise your hand and

00:02:03 --> 00:02:08
well I'm very happy to take questions in

00:02:05 --> 00:02:10
the middle since this is a more maybe

00:02:07 --> 00:02:13
informal whiteboard talk right and also

00:02:09 --> 00:02:18
we want to say hi to all home viewers hi

00:02:12 --> 00:02:21
right so um you know one question that I

00:02:17 --> 00:02:22
still get asked sometimes is um and kind

00:02:20 --> 00:02:24
Andre alluded to this earlier a lot of

00:02:21 --> 00:02:26
the basic ideas of deep learning have

00:02:23 --> 00:02:28
been around for decades so why are they

00:02:25 --> 00:02:30
taking off just now right why is it that

00:02:27 --> 00:02:33
deep learning these neon networks have

00:02:29 --> 00:02:35
all know for maybe decades why why are

00:02:32 --> 00:02:37
they working so well now so I think that

00:02:35 --> 00:02:40
um the one biggest Trend in deep

00:02:37 --> 00:02:42
learning the the is is is scale that

00:02:39 --> 00:02:44
scale drives deep learning progress um

00:02:41 --> 00:02:46
and uh I think Andrea mentioned scale of

00:02:43 --> 00:02:49
data and scale of computation um and I'm

00:02:46 --> 00:02:51
just draw a picture that illustrates

00:02:48 --> 00:02:55
that concept maybe a little bit more

00:02:50 --> 00:02:58
right so if I plot a figure where on the

00:02:54 --> 00:03:00
horizontal axis I plot um the amount of

00:02:57 --> 00:03:03
data we have for a problem and on the

00:02:59 --> 00:03:05
vertic iCal axis we plot you know

00:03:02 --> 00:03:07
performance right so x-axis is the

00:03:04 --> 00:03:09
amount of spam data you've collected y

00:03:06 --> 00:03:13
AIS is how accurately can you classify

00:03:08 --> 00:03:16
spam um then if you apply you know

00:03:12 --> 00:03:16
traditional learning

00:03:16 --> 00:03:22
algorithms right what we found was that

00:03:19 --> 00:03:24
he performance often looks like it

00:03:21 --> 00:03:27
starts to Plateau after a while what was

00:03:23 --> 00:03:29
if the older generations of learning

00:03:26 --> 00:03:31
algorithms including you know support V

00:03:28 --> 00:03:32
what logistic regression as the

00:03:30 --> 00:03:35
was as if they didn't know what to do

00:03:31 --> 00:03:36
with all the data that we finally had

00:03:34 --> 00:03:40
and what happened kind of over the last

00:03:36 --> 00:03:42
20 years last last 10 years was with the

00:03:39 --> 00:03:44
rise of the internet rise of Mobile Rise

00:03:41 --> 00:03:46
of iot where as a society sort of

00:03:43 --> 00:03:48
marched to the right of this curve right

00:03:45 --> 00:03:52
for for for for many problems not all

00:03:47 --> 00:03:54
problems and so um with all the buzz and

00:03:51 --> 00:03:57
all the hype about deep learning in my

00:03:53 --> 00:04:00
opinion the number one reason um that

00:03:56 --> 00:04:04
deep learning algs work so well is that

00:03:59 --> 00:04:06
if you train going to call a small

00:04:03 --> 00:04:09
neuronet maybe you get slightly better

00:04:05 --> 00:04:14
performance um if you

00:04:08 --> 00:04:14
train a mediumsized

00:04:15 --> 00:04:21
neuronet right maybe get even better

00:04:17 --> 00:04:24
performance and is only if you

00:04:20 --> 00:04:26
train a large neuronet that you could

00:04:23 --> 00:04:28
train a model with the capacity to

00:04:25 --> 00:04:30
absorb all this data that we have access

00:04:27 --> 00:04:32
to that allows you to get the best as

00:04:29 --> 00:04:33
possible performance and so I feel like

00:04:31 --> 00:04:36
this is a trend that we' seen in many

00:04:32 --> 00:04:41
verticals in many application areas um

00:04:35 --> 00:04:42
couple comments one is that um this uh

00:04:40 --> 00:04:43
you know actually when I draw this

00:04:41 --> 00:04:45
picture some people ask me well does

00:04:42 --> 00:04:46
this mean a small neuronet always

00:04:44 --> 00:04:48
dominates a traditional learning

00:04:45 --> 00:04:50
algorithm and the answer is not really

00:04:47 --> 00:04:52
uh technically if you look at the small

00:04:49 --> 00:04:55
data regime if you look at the left end

00:04:51 --> 00:04:57
of this plot right um the relative

00:04:54 --> 00:04:59
ordering of these algorithms is not that

00:04:56 --> 00:05:01
well defined it depends on who's more

00:04:58 --> 00:05:03
motivated to engineer the features

00:05:00 --> 00:05:05
better right so if if you know the svm

00:05:02 --> 00:05:07
guy is more motivated to spend more time

00:05:04 --> 00:05:09
Eng doing features they might beat out

00:05:06 --> 00:05:12
he uh uh the the the neuron Network

00:05:08 --> 00:05:14
application but um uh because when you

00:05:11 --> 00:05:15
don't have much data a lot of the

00:05:13 --> 00:05:17
knowledge of the algorithm comes from

00:05:14 --> 00:05:19
hand engineering right but so but this

00:05:16 --> 00:05:21
trend is much more evident in the regime

00:05:18 --> 00:05:23
of Big Data where you just can't hand

00:05:20 --> 00:05:25
engineer enough features uh and and and

00:05:22 --> 00:05:27
the large interet combined with a lot of

00:05:24 --> 00:05:30
data tends to

00:05:26 --> 00:05:32
utperform so couple of the comments um

00:05:29 --> 00:05:34
the ification of this figure is that in

00:05:31 --> 00:05:36
order to get the best performance in

00:05:33 --> 00:05:38
order to hit that Target uh you need two

00:05:35 --> 00:05:41
things right one is you need to train a

00:05:37 --> 00:05:44
very large NE Network or reasonably

00:05:40 --> 00:05:48
large NE Network and you need um a large

00:05:43 --> 00:05:51
amount of data and so this in turn has

00:05:47 --> 00:05:54
caused pressure to train large near net

00:05:50 --> 00:05:56
Nets right build large Nets as well as

00:05:53 --> 00:05:58
get huge amounts of data so one of the

00:05:55 --> 00:06:02
other interesting Trends I've seen is

00:05:57 --> 00:06:04
that um increasingly um it I'm I'm

00:06:01 --> 00:06:07
finding that it makes sense to build an

00:06:03 --> 00:06:08
AI team as well as build a computer

00:06:06 --> 00:06:10
systems team and have the two teams kind

00:06:07 --> 00:06:14
of sit next to each other and the reason

00:06:09 --> 00:06:16
I say that is um I guess uh so let's see

00:06:13 --> 00:06:17
what so when when we started you know bu

00:06:15 --> 00:06:19
research we said our team that way other

00:06:16 --> 00:06:21
teams are also organized this way I

00:06:18 --> 00:06:23
think Peter mentioned to me that open AI

00:06:20 --> 00:06:25
also has a systems team and a and a and

00:06:22 --> 00:06:26
a machine learning team and the reason

00:06:24 --> 00:06:29
we're starting to organize our teams

00:06:25 --> 00:06:30
that way I think is that um some of the

00:06:28 --> 00:06:33
computer systems work we do right so we

00:06:29 --> 00:06:35
have an HPC team high performance team

00:06:32 --> 00:06:37
super Computing team at BYU some of the

00:06:34 --> 00:06:39
xtremely specialized knowledge in HPC

00:06:37 --> 00:06:41
is just incredibly difficult for for an

00:06:38 --> 00:06:43
AI researcher to learn right some people

00:06:40 --> 00:06:45
are super smart maybe maybe Jeff Dean is

00:06:42 --> 00:06:47
mart enough to learn everything but but

00:06:44 --> 00:06:49
it's just difficult for any one human to

00:06:46 --> 00:06:52
be sufficiently expert in HPC and

00:06:49 --> 00:06:54
sufficiently expert in um uh uh in in

00:06:52 --> 00:06:56
machine learning and so we've been

00:06:53 --> 00:06:59
finding and and shubo actually one of

00:06:55 --> 00:07:01
the co-organizers is on our HPC team

00:06:58 --> 00:07:03
we've been finding that bring Talent

00:07:00 --> 00:07:05
from that Knowledge from these multiple

00:07:02 --> 00:07:06
sources multiple communities allows us

00:07:04 --> 00:07:09
to get our best

00:07:05 --> 00:07:11
performance um I want to you know you've

00:07:08 --> 00:07:13
heard a lot of present heard a lot of

00:07:10 --> 00:07:16
antastic presentations today I want to

00:07:12 --> 00:07:18
draw one other picture which is um in my

00:07:15 --> 00:07:21
mind this is how I mentally bucket you

00:07:17 --> 00:07:23
know work in in in deep learning so this

00:07:20 --> 00:07:25
might be a useful calization right when

00:07:22 --> 00:07:27
you look at the talk you can mentally

00:07:24 --> 00:07:29
put each talk into one of these buckers

00:07:26 --> 00:07:32
I'm about to draw um but I feel like

00:07:28 --> 00:07:34
there's a lot of work on I'm G to call

00:07:31 --> 00:07:35
you know General DL General models and

00:07:33 --> 00:07:37
this would basically what the type of

00:07:34 --> 00:07:39
model that Hugo lell talked about this

00:07:36 --> 00:07:43
morning where you have you know really

00:07:38 --> 00:07:46
densely connected layers right um I

00:07:42 --> 00:07:49
guess FC right was was the so there's a

00:07:45 --> 00:07:53
huge bucket of models there um and then

00:07:48 --> 00:07:53
I think a second bucket is um sequence

00:07:53 --> 00:08:00
models so 1D sequences um and this is

00:07:57 --> 00:08:05
where I would Buck could lot the work on

00:07:59 --> 00:08:07
rnns uh you know lstms right grus um

00:08:04 --> 00:08:08
some of the attention models which I

00:08:06 --> 00:08:10
guess probably yosha r talk about

00:08:07 --> 00:08:12
omorrow or maybe maybe maybe others

00:08:09 --> 00:08:14
maybe quas I'm not sure right um but so

00:08:11 --> 00:08:17
the 1D sequence models is another huge

00:08:13 --> 00:08:20
bucket um the third bucket is the image

00:08:16 --> 00:08:22
models um this is really 2D and maybe

00:08:19 --> 00:08:26
sometimes 3D but this is where I would

00:08:21 --> 00:08:28
tend to bucket all the work of CNN

00:08:25 --> 00:08:30
convolutional Nets and then in my mental

00:08:27 --> 00:08:32
bucket then then there's a fourth one

00:08:29 --> 00:08:35
which is the other right and this

00:08:31 --> 00:08:39
includes uh unsupervised learning you

00:08:34 --> 00:08:40
know uh uh uh the reinforcement learning

00:08:38 --> 00:08:43
right as well as lots of other creative

00:08:39 --> 00:08:46
ideas um being explored L and you like

00:08:42 --> 00:08:50
what I still find slow fature analysis B

00:08:45 --> 00:08:52
coding um U uh you know a various models

00:08:49 --> 00:08:54
kind of in the other category super

00:08:51 --> 00:08:58
exciting so it turns out that if you

00:08:53 --> 00:09:02
look across industry today

00:08:57 --> 00:09:04
um almost all the value today is driven

00:09:01 --> 00:09:06
by these three bucket right so what I

00:09:03 --> 00:09:09
mean is uh those three buckers of

00:09:05 --> 00:09:11
algorithms are you know driving causing

00:09:08 --> 00:09:13
us to have much better products right or

00:09:10 --> 00:09:16
monetizing very well it's just

00:09:12 --> 00:09:18
incredibly useful for lots of things um

00:09:15 --> 00:09:20
in some ways I think this bucket might

00:09:17 --> 00:09:21
be the future of AI right so I find UNS

00:09:19 --> 00:09:24
supervised learning especially super

00:09:20 --> 00:09:26
exciting uh so so I'm I'm actually super

00:09:23 --> 00:09:28
excited about this as well um although I

00:09:25 --> 00:09:30
think that if you know on Monday you

00:09:27 --> 00:09:32
have a job and you're trying to like

00:09:29 --> 00:09:33
build a product or whatever the chance

00:09:31 --> 00:09:36
of you using something from one of these

00:09:32 --> 00:09:37
three buckets will be will be highest um

00:09:35 --> 00:09:39
but I definitely encourage you to

00:09:36 --> 00:09:43
contribute to research here as well

00:09:38 --> 00:09:46
right so um I said the trend

00:09:42 --> 00:09:49
one the the major Trends one of deep

00:09:45 --> 00:09:52
learning is scale um this is what I

00:09:48 --> 00:09:54
would say is maybe major Trend two of of

00:09:51 --> 00:09:56
two of two Trends this is not going to

00:09:53 --> 00:09:59
go on forever right um is I feel major

00:09:55 --> 00:10:02
Trend too is um the rise of endtoend

00:09:58 --> 00:10:02
eep learning

00:10:01 --> 00:10:08
uh for Rich especially for Rich outputs

00:10:05 --> 00:10:09
and so um end to end deep learning I'll

00:10:07 --> 00:10:11
say a little bit more in a second

00:10:08 --> 00:10:12
exactly what I mean by that but the

00:10:10 --> 00:10:14
xamples I'm going to talk about are all

00:10:11 --> 00:10:17
from one of these three buckets right

00:10:13 --> 00:10:20
General DL sequence models image 2D 3D

00:10:16 --> 00:10:23
models um but let's see best Illustrated

00:10:19 --> 00:10:26
a few examples um until recently a lot

00:10:22 --> 00:10:27
of machine learning used to Output just

00:10:25 --> 00:10:30
real numbers you know so I guess in

00:10:26 --> 00:10:34
Richard's uh uh example you have Ave

00:10:29 --> 00:10:35
movie review right and then actually but

00:10:33 --> 00:10:37
I prepared totally different examples I

00:10:34 --> 00:10:39
was editing the my examples earlier to

00:10:36 --> 00:10:42
to be more coherent with the speakers

00:10:38 --> 00:10:44
before me um but we have a movie review

00:10:41 --> 00:10:45
and then output the sentiment you know

00:10:43 --> 00:10:49
is this a positive or A negative movie

00:10:44 --> 00:10:51
review um or you might have an image

00:10:48 --> 00:10:53
right and then you want to do uh image

00:10:50 --> 00:10:55
nit object recognition you know so this

00:10:52 --> 00:10:58
would be a01 output this might be a

00:10:54 --> 00:10:59
integer from 1 to 1,00 but so until

00:10:57 --> 00:11:01
recently a lot of machine learning was

00:10:58 --> 00:11:04
about out putting a single number maybe

00:11:00 --> 00:11:07
a real number maybe an integer um and I

00:11:03 --> 00:11:09
think the the the number two major Trend

00:11:06 --> 00:11:10
that I'm really excited about is um

00:11:08 --> 00:11:13
enter and de learning algorithms that

00:11:09 --> 00:11:15
can output much more complex things than

00:11:12 --> 00:11:19
umbers and so one example that you've

00:11:14 --> 00:11:20
seen is a image captioning where instead

00:11:18 --> 00:11:23
of taking an image and saying this is a

00:11:19 --> 00:11:26
cat you can now take an image and output

00:11:22 --> 00:11:28
you know an entire string of texts using

00:11:25 --> 00:11:30
RNN to generate that sequence so I guess

00:11:27 --> 00:11:34
uh what um Andre

00:11:29 --> 00:11:35
who spoke just now I think Oro vendal uh

00:11:33 --> 00:11:37
shoe at BYU right a whole bunch of

00:11:34 --> 00:11:40
people have have have worked on this

00:11:36 --> 00:11:43
problem um one of the things that I

00:11:39 --> 00:11:45
guess uh my my my collaborator Adam

00:11:42 --> 00:11:47
coats will talk about tomorrow uh maybe

00:11:44 --> 00:11:49
Quark as well not sure is um speech

00:11:47 --> 00:11:52
recognition where you take as input

00:11:48 --> 00:11:54
audio and you directly output you know

00:11:51 --> 00:11:57
the text

00:11:53 --> 00:11:59
ranscript right and so um when we first

00:11:56 --> 00:12:01
propose using this kind of ENT in

00:11:58 --> 00:12:03
architecture to do speech recognition

00:12:00 --> 00:12:05
this was very controversial we're

00:12:02 --> 00:12:07
building my work of Alex Graves uh but

00:12:04 --> 00:12:08
he idea of actually putting this in the

00:12:06 --> 00:12:10
production speech system was very very

00:12:07 --> 00:12:12
controversial when we first you know

00:12:09 --> 00:12:14
said we wanted to do this but I think

00:12:11 --> 00:12:18
the whole Community is coming around to

00:12:13 --> 00:12:20
this point of view more recently um or

00:12:17 --> 00:12:24
you know machine translation say go from

00:12:19 --> 00:12:27
English to French right soas qu others

00:12:23 --> 00:12:31
uh working on there a lot of teams now

00:12:26 --> 00:12:34
um or you know given the parameters

00:12:30 --> 00:12:36
um synthesize a brand new image right

00:12:33 --> 00:12:39
and and and you saw some examples of

00:12:35 --> 00:12:41
image synthesis so I feel like the the

00:12:38 --> 00:12:44
second major trend of of of deep

00:12:40 --> 00:12:46
learning that that I find very exciting

00:12:43 --> 00:12:47
and and I mean this allowing us to build

00:12:45 --> 00:12:49
you know transformative things that we

00:12:46 --> 00:12:52
just couldn't build three or four years

00:12:48 --> 00:12:53
ago has this trend toward not just

00:12:51 --> 00:12:56
learning algorithms an output not just a

00:12:52 --> 00:12:58
number that can output very complicated

00:12:55 --> 00:13:01
things like a sentence or caption or

00:12:57 --> 00:13:02
French sentence or image or or or or or

00:13:00 --> 00:13:04
let the recent wavenet paper output

00:13:01 --> 00:13:08
audio right so I think this is a maybe

00:13:03 --> 00:13:13
the second um major

00:13:07 --> 00:13:17
Trend so um despite all

00:13:12 --> 00:13:20
the excitement um about endtoend deep

00:13:16 --> 00:13:22
learning um I think that end to end deep

00:13:19 --> 00:13:24
learning you know sadly is not the

00:13:21 --> 00:13:25
solution to everything um I want to give

00:13:23 --> 00:13:27
you some rules of thumb for deciding

00:13:24 --> 00:13:29
when to use what is exactly an learning

00:13:27 --> 00:13:31
and when to use it and when not to use

00:13:28 --> 00:13:34
it so was moving the second bullet and

00:13:30 --> 00:13:39
we'll go through

00:13:33 --> 00:13:43
these so the trend toward end to end

00:13:38 --> 00:13:45
eep learning has been um this idea that

00:13:42 --> 00:13:47
instead of engineering a lot of

00:13:44 --> 00:13:50
intermediate representations maybe you

00:13:46 --> 00:13:52
can go directly from your Ro input to

00:13:49 --> 00:13:54
whatever you want to predict right so

00:13:51 --> 00:13:57
for example actually a take I'm going to

00:13:53 --> 00:14:00
use speech as a recurring example uh so

00:13:56 --> 00:14:00
for speech recognition

00:13:59 --> 00:14:05
um previously one used to go from the

00:14:02 --> 00:14:07
audio to you know hand engineered

00:14:04 --> 00:14:10
features like mfccs or something and

00:14:06 --> 00:14:13
then maybe extract phon

00:14:09 --> 00:14:15
ames right um and then eventually you

00:14:12 --> 00:14:17
try to generate the

00:14:14 --> 00:14:20
transcript um oh for those of you that

00:14:16 --> 00:14:21
aren't sure what a phone name is so uh

00:14:19 --> 00:14:25
if you look at the word listen to the

00:14:20 --> 00:14:27
word cat and the word kick the sound

00:14:24 --> 00:14:30
right is the same sound and so pH names

00:14:26 --> 00:14:34
are this uh um basic units of sound such

00:14:29 --> 00:14:35
as c as a pH name and is um hypothesized

00:14:33 --> 00:14:38
by linguist to be the basic unit of

00:14:34 --> 00:14:41
sound so C would be the maybe the three

00:14:37 --> 00:14:43
pH names that make up the word cat right

00:14:40 --> 00:14:45
so traditional speech systems used to

00:14:42 --> 00:14:48
do this uh and I think 2011

00:14:44 --> 00:14:49
leang and Jeff Hinton um made a lot of

00:14:47 --> 00:14:51
progress in speech recognition by saying

00:14:48 --> 00:14:54
we can use deep learning to do this

00:14:51 --> 00:14:56
first step um but the end to end

00:14:53 --> 00:15:01
approach to this would be to say let's

00:14:55 --> 00:15:04
forget about phes let's just have a

00:15:00 --> 00:15:05
neuronet right input the audio and

00:15:03 --> 00:15:09
output the

00:15:04 --> 00:15:11
transcript um so it turns out that in

00:15:08 --> 00:15:13
some problems this's endtoend approach

00:15:10 --> 00:15:15
so one end is the input the other end is

00:15:12 --> 00:15:17
the output so the phrase end to end deep

00:15:14 --> 00:15:18
learning refers to uh just having a

00:15:16 --> 00:15:21
neuronet or you know like a learning

00:15:17 --> 00:15:23
algorithm directly go from input output

00:15:20 --> 00:15:26
hat's that's what n to end means um

00:15:22 --> 00:15:28
this ENT end formula uh is I think it

00:15:25 --> 00:15:31
makes for what great PR uh and and it's

00:15:28 --> 00:15:34
actually very simple but it only works

00:15:30 --> 00:15:36
ometimes um and actually maybe maybe

00:15:33 --> 00:15:38
say this interesting story you know this

00:15:35 --> 00:15:40
end to-end story we really upset a lot

00:15:37 --> 00:15:42
of people um when we were doing this

00:15:39 --> 00:15:45
work I guess I guess I used to go around

00:15:41 --> 00:15:47
and say I think PHS are a fantasy of

00:15:44 --> 00:15:49
linguists um and we should do away with

00:15:46 --> 00:15:51
em and I still remember there was a

00:15:48 --> 00:15:52
meeting at Stanford and some of you know

00:15:50 --> 00:15:55
ho it was there was a linguist kind of

00:15:51 --> 00:15:57
yelling at me in public for saying that

00:15:54 --> 00:16:01
so maybe maybe I should not H we turned

00:15:56 --> 00:16:01
out to be right yeah so

00:16:02 --> 00:16:11
all right um so let's see um but the the

00:16:08 --> 00:16:13
Ares heel of a lot of deep learning

00:16:10 --> 00:16:16
is that you need tons of label data

00:16:12 --> 00:16:18
right so if this is your X and that's

00:16:15 --> 00:16:21
your y then for endtoend deep learning

00:16:17 --> 00:16:24
to work you need a ton of label you know

00:16:20 --> 00:16:27
input output data X comma y so to take

00:16:23 --> 00:16:29
an example where um um where you know

00:16:26 --> 00:16:31
one may or may not consider ENT deep

00:16:28 --> 00:16:33
learning um this is a problem I learned

00:16:30 --> 00:16:35
about just last week from ctis langas

00:16:32 --> 00:16:38
and and Doin who's in the audience I

00:16:34 --> 00:16:40
think of uh imagine you want to use um

00:16:37 --> 00:16:42
X-ray pictures of your hand in order to

00:16:39 --> 00:16:43
predict the child's age right so this is

00:16:41 --> 00:16:46
a real thing you know doctors actually

00:16:43 --> 00:16:48
care to look at an x-ray of your of a

00:16:45 --> 00:16:51
child's hand in order to predict the the

00:16:47 --> 00:16:54
age of the child so um boy let me draw

00:16:50 --> 00:16:56
an x-ray image right so this is you know

00:16:53 --> 00:16:58
the child's hand so these are the bones

00:16:55 --> 00:17:01
right I

00:16:57 --> 00:17:03
guess this is why I'm not a doctor okay

00:17:00 --> 00:17:06
so that's a hand and and and you see the

00:17:02 --> 00:17:10
bones um and so more traditional

00:17:06 --> 00:17:13
gorithm my input an image and then

00:17:09 --> 00:17:16
first you know extract the bones so

00:17:12 --> 00:17:18
first figure out oh there's a bone here

00:17:15 --> 00:17:20
there's a bone here

00:17:17 --> 00:17:23
and then maybe measure the length of

00:17:19 --> 00:17:26
these bones right

00:17:22 --> 00:17:29
um so really I'm going to say bone

00:17:25 --> 00:17:31
lengths and then maybe has some formula

00:17:28 --> 00:17:33
like some regression average some simple

00:17:30 --> 00:17:35
thing to go from the bone length to

00:17:32 --> 00:17:37
estimate the age of the child right so

00:17:34 --> 00:17:39
this is a non-end to-end approach to

00:17:36 --> 00:17:42
trying to solve this problem an interent

00:17:38 --> 00:17:44
approach would be to take an image and

00:17:41 --> 00:17:46
then you know run a convet or whatever

00:17:43 --> 00:17:48
and just try to Output the age of a

00:17:45 --> 00:17:51
child and I think this is one example of

00:17:47 --> 00:17:54
a problem where um it's very challenging

00:17:50 --> 00:17:55
to get end to end deep learning to work

00:17:53 --> 00:17:57
because you just don't have enough data

00:17:55 --> 00:18:00
you just don't have enough X-rays of

00:17:56 --> 00:18:02
children's hands annotated with dat ages

00:17:59 --> 00:18:07
and instead where we see deep learning

00:18:01 --> 00:18:08
coming in is in this step right to use

00:18:06 --> 00:18:11
go from image to to figure out where the

00:18:07 --> 00:18:13
bones are use deep learning for that but

00:18:10 --> 00:18:15
he advantage of this non-end

00:18:12 --> 00:18:17
architecture is it allows you to hand

00:18:14 --> 00:18:20
engineer in more information about the

00:18:16 --> 00:18:21
system such as how bone lengths map age

00:18:19 --> 00:18:24
right which which you can kind of get

00:18:20 --> 00:18:26
ables about um there are a lot of

00:18:23 --> 00:18:27
examples like this and I think one of

00:18:25 --> 00:18:31
the unfortunate things about deep

00:18:26 --> 00:18:35
learning is that um let's see uh you

00:18:30 --> 00:18:37
know you can for for for suitably sexy

00:18:34 --> 00:18:40
values of X and Y you could almost

00:18:36 --> 00:18:42
always train a model and publish a paper

00:18:39 --> 00:18:45
but that doesn't always mean that you

00:18:41 --> 00:18:45
know it's actually a good idea

00:18:50 --> 00:19:00
Peter I see yeah I see yeah I see yes

00:18:56 --> 00:19:02
that's true yes Pet's poting out that in

00:18:59 --> 00:19:04
practice you could um uh if this is a

00:19:01 --> 00:19:06
fixed function f right you could back

00:19:03 --> 00:19:07
propop all the way from the age all the

00:19:05 --> 00:19:10
way back to the image yeah that's a good

00:19:07 --> 00:19:12
idea actually who was it just said you

00:19:09 --> 00:19:15
better do it

00:19:11 --> 00:19:17
quickly yeah um Let me give a couple

00:19:14 --> 00:19:18
other examples uh uh that where where it

00:19:16 --> 00:19:20
might be harder to backdrop all the way

00:19:17 --> 00:19:23
through right so here here's an example

00:19:19 --> 00:19:25
um take self-driving cars you know most

00:19:22 --> 00:19:26
eams are using an architecture where

00:19:24 --> 00:19:29
you input an image what's in front of

00:19:25 --> 00:19:31
the car let's say and then you you know

00:19:28 --> 00:19:35
detect other cars right uh and then and

00:19:30 --> 00:19:37
maybe use the image detect

00:19:34 --> 00:19:39
pedestrians right self-driving cars are

00:19:36 --> 00:19:40
obviously more complex than this right

00:19:38 --> 00:19:41
uh but then now that you know where the

00:19:39 --> 00:19:44
other cars and where the posss are

00:19:41 --> 00:19:45
lative to your car you then have a

00:19:43 --> 00:19:47
planning

00:19:44 --> 00:19:50
algorithm uh uh to then you know come up

00:19:46 --> 00:19:50
with a

00:19:49 --> 00:19:55
trajectory right and then now that you

00:19:51 --> 00:19:59
know um what's the trajectory that you

00:19:54 --> 00:20:02
want your car to drive through um you

00:19:58 --> 00:20:06
could then you know compute the steering

00:20:01 --> 00:20:06
direction right let's

00:20:06 --> 00:20:11
ay and so um this is actually the

00:20:09 --> 00:20:14
architecture that most self-driving car

00:20:10 --> 00:20:17
teams are using um and you know that

00:20:13 --> 00:20:20
have been interesting approaches to to

00:20:16 --> 00:20:21
say well I'm going to input an image and

00:20:19 --> 00:20:23
I'll put a steering

00:20:20 --> 00:20:27
direction right and I think this is an

00:20:22 --> 00:20:29
example of where um at least with

00:20:26 --> 00:20:32
today's data technology I'd be very is

00:20:28 --> 00:20:35
about the second approach and I think if

00:20:31 --> 00:20:36
you have enough data the second approach

00:20:34 --> 00:20:37
will work and you could even prove a

00:20:35 --> 00:20:40
theorem you know showing that it will

00:20:36 --> 00:20:42
work I think but um I don't know that

00:20:39 --> 00:20:44
anyone today has enough data to make the

00:20:41 --> 00:20:46
second approach really really work well

00:20:43 --> 00:20:48
right and and I think kind of Peter made

00:20:45 --> 00:20:50
a great comment just now and I think you

00:20:47 --> 00:20:52
know some of these components will be

00:20:49 --> 00:20:54
incredibly complicated you know like

00:20:51 --> 00:20:56
this could be a pop Planet ex explicit

00:20:53 --> 00:20:57
search and you could actually design a

00:20:55 --> 00:21:00
really complicated powerp plan and

00:20:56 --> 00:21:02
generic the trajectory and your ability

00:20:59 --> 00:21:04
to hand code that still has a lot of

00:21:01 --> 00:21:07
value right so this is one thing to

00:21:03 --> 00:21:10
watch out for um I have seen project

00:21:06 --> 00:21:12
eams say I can get X I can get y I'm G

00:21:09 --> 00:21:14
to train deep learning um but unless you

00:21:11 --> 00:21:16
actually have the data you know some of

00:21:13 --> 00:21:18
these things make for great demos if if

00:21:15 --> 00:21:21
you cherry pick the examples but but it

00:21:17 --> 00:21:23
can be challenging to um get to work at

00:21:20 --> 00:21:24
scale I I should say for self-driving CS

00:21:22 --> 00:21:26
this debate is still open I'm I'm

00:21:24 --> 00:21:28
cautious about this I don't think is

00:21:25 --> 00:21:30
this I don't think this will necessarily

00:21:27 --> 00:21:33
fail I just think the data needed to do

00:21:29 --> 00:21:35
this will be will be really immense so I

00:21:32 --> 00:21:37
'd be very cautious about and and right

00:21:35 --> 00:21:43
now but it might work if you have enough

00:21:36 --> 00:21:45
data um so you know one of the themes

00:21:42 --> 00:21:47
that comes up in machine learning really

00:21:44 --> 00:21:49
if you're work on a machine learning

00:21:46 --> 00:21:53
project one thing that'll often come up

00:21:48 --> 00:21:56
is um you will you know develop a

00:21:52 --> 00:21:57
learning system uh train it maybe

00:21:55 --> 00:22:00
doesn't work as well as you're hoping

00:21:56 --> 00:22:02
yet and the question is is what do you

00:21:59 --> 00:22:04
do next right this is a very common part

00:22:01 --> 00:22:05
of a machine learning you know research

00:22:03 --> 00:22:07
or a machine learning engineer's life

00:22:04 --> 00:22:09
which is you know you you train a model

00:22:07 --> 00:22:11
doesn't do what you want it to yet so

00:22:08 --> 00:22:13
what do you do next right this happens

00:22:10 --> 00:22:15
us all the time um and you face a lot of

00:22:12 --> 00:22:16
choices you could collect more data

00:22:14 --> 00:22:18
maybe you want to train it longer maybe

00:22:15 --> 00:22:19
you want a different neuron Network

00:22:17 --> 00:22:21
architecture maybe you want to try

00:22:18 --> 00:22:23
regularization maybe you know bigger

00:22:20 --> 00:22:26
model for some more gpus so you have a

00:22:22 --> 00:22:27
lot of decisions and I think that um a

00:22:25 --> 00:22:29
lot of the skill of a machine learning

00:22:26 --> 00:22:31
researcher machine learning engineer is

00:22:28 --> 00:22:33
knowing how to make these decisions

00:22:30 --> 00:22:34
right and and and the difference in

00:22:32 --> 00:22:36
performance and whether you you know do

00:22:33 --> 00:22:38
you train a bigger model or do you try

00:22:36 --> 00:22:40
regularization your skill at picking

00:22:37 --> 00:22:43
these decisions will have a huge impact

00:22:39 --> 00:22:45
on how rapidly um uh you can make

00:22:42 --> 00:22:48
progress on actual machine learning

00:22:44 --> 00:22:50
problem so um I want to talk a bit about

00:22:47 --> 00:22:52
bias and variance since that's one of

00:22:49 --> 00:22:54
the most basic you know Concepts in

00:22:51 --> 00:22:56
machine learning and I feel like it's

00:22:53 --> 00:22:59
evolving slightly in the era of of of

00:22:55 --> 00:23:00
deep learning so to use a as a motiving

00:22:58 --> 00:23:03
example

00:22:59 --> 00:23:05
um let's say the goal is to build a

00:23:02 --> 00:23:05
human

00:23:05 --> 00:23:12
level right uh Speech

00:23:08 --> 00:23:16
system right speech recognition system

00:23:11 --> 00:23:18
okay so um what we would typically do

00:23:15 --> 00:23:20
especially in Academia is we'll get a

00:23:17 --> 00:23:22
data set you know here's my data set a

00:23:20 --> 00:23:25
lot of examples and then we Shuffle it

00:23:21 --> 00:23:29
and we randomly split it into 7030 train

00:23:24 --> 00:23:33
tests or maybe or maybe 70% train you

00:23:28 --> 00:23:35
know 15% Dev and uh 15% test right we oh

00:23:32 --> 00:23:38
and uh some people use the term

00:23:34 --> 00:23:40
validation set but I'm I'm just use the

00:23:37 --> 00:23:42
dep set or stand for development set

00:23:39 --> 00:23:45
means the same thing as validation set

00:23:41 --> 00:23:47
okay so it's pretty common um and so

00:23:44 --> 00:23:51
what we would what what what I encourage

00:23:47 --> 00:23:54
you to do if you aren't already is to

00:23:50 --> 00:23:56
measure the following things um human

00:23:53 --> 00:23:58
level

00:23:55 --> 00:24:01
error so let actually let me illustrate

00:23:57 --> 00:24:04
an example let's say that on your deel

00:24:00 --> 00:24:08
uh uh let's say that um on your death

00:24:03 --> 00:24:10
set you know human level error is uh 1%

00:24:07 --> 00:24:13
error

00:24:09 --> 00:24:18
um let's say that your training set

00:24:12 --> 00:24:21
error is um use 5% and let's say that

00:24:17 --> 00:24:21
your def set

00:24:20 --> 00:24:25
error really very de set is appr proxy

00:24:23 --> 00:24:30
for test set except you tune to the dev

00:24:24 --> 00:24:33
set right is um you know 6% d

00:24:29 --> 00:24:35
okay so this is one of the most basic

00:24:32 --> 00:24:36
this this is really a a step in

00:24:34 --> 00:24:38
developing a learning Al that I

00:24:35 --> 00:24:39
encourage you to do if you aren't

00:24:37 --> 00:24:41
already to figure out what are these

00:24:38 --> 00:24:44
three numbers because these three

00:24:40 --> 00:24:46
numbers um really helps in terms of

00:24:43 --> 00:24:48
telling you what to do next so in this

00:24:45 --> 00:24:50
example um you see that you're doing

00:24:47 --> 00:24:52
much worse than human level performance

00:24:49 --> 00:24:55
um and so you see that there's a huge

00:24:51 --> 00:24:58
gap here from 1% to 5% and I'm going to

00:24:54 --> 00:24:59
call this you know right the bias of

00:24:57 --> 00:25:01
your learning algorithm

00:24:58 --> 00:25:03
um and for the statisticians in the room

00:25:00 --> 00:25:04
I'm using the terms buys and variance

00:25:02 --> 00:25:06
informally and doesn't correspond

00:25:04 --> 00:25:08
exactly to the way they're defined in

00:25:05 --> 00:25:10
textbooks but I find these useful

00:25:07 --> 00:25:13
concepts for for for deciding how to

00:25:09 --> 00:25:15
make progress on your problem um and so

00:25:12 --> 00:25:17
I would say that you know in this

00:25:14 --> 00:25:19
example you have a high bias class by

00:25:16 --> 00:25:20
try training a bigger model maybe try

00:25:18 --> 00:25:24
training longer we come back to this in

00:25:19 --> 00:25:26
a second um for a different example you

00:25:23 --> 00:25:29
know so this is one example uh for a

00:25:25 --> 00:25:33
different example if human level error

00:25:28 --> 00:25:37
is 1% and uh training set error with

00:25:32 --> 00:25:39
2% right and death set error was 6% then

00:25:36 --> 00:25:41
you know you really have a high what

00:25:38 --> 00:25:44
variance problem right like an

00:25:40 --> 00:25:45
overfitting problem and this tells you

00:25:43 --> 00:25:48
this really tells you what to do what to

00:25:44 --> 00:25:52
try right try adding regularization or

00:25:47 --> 00:25:54
try um uh uh or try early stopping or um

00:25:51 --> 00:25:58
or or or even better we get more

00:25:53 --> 00:26:00
data um and then there's also really a

00:25:57 --> 00:26:05
third case which is if you have

00:26:00 --> 00:26:09
a 1% human level error um I'm going to

00:26:04 --> 00:26:12
say 6% death set error oh actually let

00:26:08 --> 00:26:15
me say 5% death set error and

00:26:11 --> 00:26:18
10% um excuse me 5% training error and

00:26:14 --> 00:26:21
10% death set error and in this case you

00:26:17 --> 00:26:23
have high bias and high variance right

00:26:20 --> 00:26:25
um

00:26:22 --> 00:26:29
so so I guess yeah High buys and high

00:26:24 --> 00:26:31
VAR you know like sucks for you right um

00:26:28 --> 00:26:34
so I feel like that when I talk to

00:26:31 --> 00:26:37
applied machine learning teams there's

00:26:33 --> 00:26:41
one really simple

00:26:36 --> 00:26:43
workflow um that is enough to help you

00:26:40 --> 00:26:45
make a lot of decisions about what you

00:26:42 --> 00:26:48
should be doing on your machine learning

00:26:44 --> 00:26:50
application um and by if if you're

00:26:47 --> 00:26:51
wondering why I'm talking about this and

00:26:49 --> 00:26:52
what this has to do with deepy I'll come

00:26:50 --> 00:26:55
back to this in a second right does this

00:26:51 --> 00:26:57
change in Era deep learning but uh uh I

00:26:54 --> 00:26:59
feel like this is you know almost a

00:26:56 --> 00:27:02
workflow like almost a a flow chart

00:26:58 --> 00:27:07
right right which is first ask yourself

00:27:01 --> 00:27:07
um is your training error

00:27:06 --> 00:27:11
high oh and I hope I'm writing big

00:27:09 --> 00:27:13
enough that people can see if if you

00:27:10 --> 00:27:15
have a trouble reading let me know and

00:27:12 --> 00:27:17
I'll and I'll read it back out right but

00:27:14 --> 00:27:20
first I ask you know are you even doing

00:27:16 --> 00:27:22
well in your training set um and and and

00:27:19 --> 00:27:24
if your training error is high then you

00:27:21 --> 00:27:26
know you have high bias and so your

00:27:23 --> 00:27:29
standard tactics like train a bigger

00:27:25 --> 00:27:32
model just train a bigger NE Network

00:27:28 --> 00:27:34
um or maybe try training longer you know

00:27:31 --> 00:27:36
make sure that your optimization

00:27:33 --> 00:27:37
algorithm is is doing a good enough job

00:27:35 --> 00:27:39
um and then there's also this magical

00:27:36 --> 00:27:43
one which is a new model architecture

00:27:39 --> 00:27:45
which is a hard one right um come back

00:27:42 --> 00:27:48
to that in a second okay and then you

00:27:44 --> 00:27:50
kind of keep doing that until you're

00:27:47 --> 00:27:52
doing well at least on your training set

00:27:49 --> 00:27:53
once you're at least doing well on your

00:27:51 --> 00:27:55
training set so your training error is

00:27:52 --> 00:27:58
no longer high so no training error is

00:27:54 --> 00:28:00
not unacceptably High um we then ask you

00:27:58 --> 00:28:02
know is your death

00:27:59 --> 00:28:08
error

00:28:01 --> 00:28:11
high right and if the answer is yes then

00:28:07 --> 00:28:13
um well if your dep set error is high

00:28:10 --> 00:28:15
then you have a high variance problem

00:28:12 --> 00:28:18
you have an overfitting problem and so

00:28:15 --> 00:28:20
you know the solutions are try to get

00:28:17 --> 00:28:23
more

00:28:19 --> 00:28:23
data right or add

00:28:24 --> 00:28:30
regularization or try a new model

00:28:26 --> 00:28:30
architecture

00:28:32 --> 00:28:40
right and then until and and you kind of

00:28:35 --> 00:28:44
keep doing this until your uh dep set

00:28:39 --> 00:28:45
error is is is is no is I guess until

00:28:43 --> 00:28:47
both you're doing well on your training

00:28:44 --> 00:28:51
set and on your death set and then you

00:28:46 --> 00:28:54
know hopefully right you're done so I

00:28:50 --> 00:28:57
think one of the um one of the nice

00:28:53 --> 00:28:59
things about this era of deep learning

00:28:56 --> 00:29:01
is that no matter it's kind of no the

00:28:58 --> 00:29:04
way you're stuck with modern deep

00:29:00 --> 00:29:05
learning tools we have a clear path for

00:29:03 --> 00:29:07
making progress in a way that was not

00:29:04 --> 00:29:10
rue or at least was much less true in

00:29:06 --> 00:29:12
the era before deep learning which is in

00:29:09 --> 00:29:14
particular no matter what your problem

00:29:11 --> 00:29:16
is overfitting or underfitting uh really

00:29:13 --> 00:29:18
high buys or high Varian or maybe both

00:29:15 --> 00:29:20
right you always have at least one

00:29:17 --> 00:29:23
action you can take which is bigger

00:29:19 --> 00:29:25
model or more data so you could so so so

00:29:22 --> 00:29:28
in the Deep learning era relative to say

00:29:24 --> 00:29:30
the logistic regession era the svm era

00:29:27 --> 00:29:33
it feels like we more often have a way

00:29:29 --> 00:29:34
out of whatever problem we're stuck in

00:29:32 --> 00:29:36
um and so I feel like these days people

00:29:33 --> 00:29:37
talk less about buyers variance

00:29:35 --> 00:29:39
trade-off you might have heard that term

00:29:36 --> 00:29:41
buyers variance trade-off underfitting

00:29:38 --> 00:29:43
versus overfitting and the reason we

00:29:40 --> 00:29:45
talked a lot about that in the past was

00:29:42 --> 00:29:48
because a lot of the moves available to

00:29:44 --> 00:29:50
us like tuning regularization that

00:29:47 --> 00:29:51
really traded off buyers and variance so

00:29:49 --> 00:29:54
it was like a you know zero something

00:29:50 --> 00:29:56
right you you could improve one but that

00:29:53 --> 00:29:57
makes the other one worse but in the era

00:29:55 --> 00:29:58
of deep learning really one of the

00:29:56 --> 00:29:59
reasons I think deep learning has been

00:29:57 --> 00:30:01
so powerful

00:29:58 --> 00:30:04
is that the coupling between buyers and

00:30:00 --> 00:30:06
variance can be weaker and we now have

00:30:03 --> 00:30:08
tools we now have better tools to you

00:30:05 --> 00:30:09
know reduce buyers without increasing

00:30:07 --> 00:30:11
variance or reduce variance without

00:30:08 --> 00:30:12
increasing buyers and really the bigger

00:30:10 --> 00:30:14
the the the big one is really you can

00:30:11 --> 00:30:16
always train a bigger model bigger

00:30:13 --> 00:30:18
neuron Network in a way that was harder

00:30:15 --> 00:30:19
to do when you're training logistic

00:30:17 --> 00:30:21
regression is to come up with more and

00:30:18 --> 00:30:23
more features right that was just harder

00:30:20 --> 00:30:25
to do

00:30:22 --> 00:30:30
um

00:30:24 --> 00:30:31
so let's see one of the um and I'm I'm

00:30:29 --> 00:30:35
going to add more to this diagram at the

00:30:30 --> 00:30:37
bottom in a second okay um one of

00:30:34 --> 00:30:41
the

00:30:36 --> 00:30:42
ffects of uh this maybe this and and

00:30:40 --> 00:30:46
by the way I've been surprised I

00:30:41 --> 00:30:47
mean honestly um this new model

00:30:45 --> 00:30:49
architecture that's really hard right it

00:30:46 --> 00:30:51
akes a lot of experience but but even

00:30:48 --> 00:30:53
if you aren't super experienced with you

00:30:50 --> 00:30:55
know a variety of deep learning models

00:30:52 --> 00:30:56
the things in the blue boxes you can

00:30:54 --> 00:30:58
often do those and that would drive a

00:30:55 --> 00:31:00
lot of progress right but if you have

00:30:57 --> 00:31:03
xperience with you know how to tune a

00:30:59 --> 00:31:04
confet versus a resonet versus Whatever

00:31:02 --> 00:31:05
by all means try those things as well

00:31:03 --> 00:31:07
definitely encourage you to keep

00:31:04 --> 00:31:10
mastering those as well but this dumb

00:31:06 --> 00:31:13
formula of more data bigger bigger model

00:31:09 --> 00:31:14
more data is enough to do very well on a

00:31:12 --> 00:31:18
lot of

00:31:13 --> 00:31:23
problems so um let's

00:31:17 --> 00:31:25
ee uh so bigger model puts pressure on

00:31:22 --> 00:31:27
you know systems which is why we we have

00:31:24 --> 00:31:31
high performance Computing team um more

00:31:27 --> 00:31:34
data has has led to another interesting

00:31:30 --> 00:31:36
um set of Investments so uh with you

00:31:33 --> 00:31:38
know I guess a lot of us have always

00:31:35 --> 00:31:40
what needed that had this insatiable

00:31:37 --> 00:31:43
hunger for data we use you know trout

00:31:39 --> 00:31:44
sourcing for labeling um uh we try to

00:31:42 --> 00:31:48
come with all sorts of clever ways to

00:31:44 --> 00:31:50
come to to to get data um one one area

00:31:47 --> 00:31:52
that that I'm seeing more and more

00:31:49 --> 00:31:54
activity in right it feels a little bit

00:31:51 --> 00:31:58
nent but I'm seeing a lot of activity in

00:31:53 --> 00:32:00
is um automatic data synthesis right um

00:31:57 --> 00:32:01
let's see

00:31:59 --> 00:32:04
and so here's what I

00:32:00 --> 00:32:06
mean you know once upon a time people

00:32:03 --> 00:32:07
used the hand engineer features and

00:32:05 --> 00:32:08
there was a lot of skill in hand

00:32:06 --> 00:32:11
engineering the features of you know

00:32:08 --> 00:32:14
like the CIF or the hog or whatever to

00:32:10 --> 00:32:17
feed into svm um automatic data

00:32:13 --> 00:32:19
synthesis is this little area that is

00:32:16 --> 00:32:21
mall but feels like it's growing where

00:32:18 --> 00:32:23
there is some hand engineering needed

00:32:20 --> 00:32:25
but I'm seeing quite a lot of progress

00:32:22 --> 00:32:28
in multiple problems is enabl by hand

00:32:24 --> 00:32:30
engineering uh synthetic data in order

00:32:27 --> 00:32:32
to feed into the giant mole of your

00:32:29 --> 00:32:35
neuron Network right so let me best

00:32:31 --> 00:32:37
Illustrated a couple examples um one of

00:32:34 --> 00:32:39
the easy ones is OCR so so let's say you

00:32:37 --> 00:32:41
want to train a um optical character

00:32:38 --> 00:32:43
ecognition system and actually I've

00:32:40 --> 00:32:44
been surprised that by do this has tons

00:32:42 --> 00:32:48
of users actually this is one of my most

00:32:43 --> 00:32:51
useful apis that I you right um if you

00:32:47 --> 00:32:53
imagine firing up Microsoft Word um and

00:32:50 --> 00:32:55
uh downloading a random picture off the

00:32:52 --> 00:32:58
Internet then choose a random Microsoft

00:32:54 --> 00:32:59
Word font choose a random word in

00:32:57 --> 00:33:01
English dictionary

00:32:58 --> 00:33:03
and just type the English word into

00:33:00 --> 00:33:05
Microsoft Word in a random font and

00:33:02 --> 00:33:07
paste that on top you know like a

00:33:04 --> 00:33:08
transparent background on top of a

00:33:06 --> 00:33:10
random image off the internet then you

00:33:07 --> 00:33:13
just synthesize a training example for

00:33:09 --> 00:33:15
OCR right um and so this gives you

00:33:12 --> 00:33:17
access to essentially unlimited amounts

00:33:14 --> 00:33:19
of data it turns out that the simple

00:33:16 --> 00:33:21
idea I just described won't work in its

00:33:18 --> 00:33:24
natural form you actually need to do a

00:33:20 --> 00:33:25
lot of tuning to blur the synthesize

00:33:23 --> 00:33:27
text with the background to make sure

00:33:24 --> 00:33:29
the color contrast matches your training

00:33:26 --> 00:33:31
distribution so found it in practice can

00:33:28 --> 00:33:34
be a lot of work to find you and how you

00:33:30 --> 00:33:37
synthesize data but I've seen in many

00:33:33 --> 00:33:39
verticals um I'll give a few examples if

00:33:36 --> 00:33:40
you do that engineering work and sadly

00:33:38 --> 00:33:42
it's painful engineering you could

00:33:39 --> 00:33:44
actually get a lot of progress actually

00:33:41 --> 00:33:47
ta Wang uh who was a a student

00:33:43 --> 00:33:50
here at Stanford um uh the effect I saw

00:33:46 --> 00:33:52
as he engineered this for months with

00:33:49 --> 00:33:54
very little progress and then suddenly

00:33:51 --> 00:33:56
he got the parameters right and he had

00:33:53 --> 00:33:58
huge amounts of data and was able to

00:33:55 --> 00:33:59
build one of the best OCR systems in the

00:33:57 --> 00:34:03
world at that time

00:33:58 --> 00:34:03
right um other examples speech

00:34:03 --> 00:34:09
recognition right uh one of the most

00:34:05 --> 00:34:11
powerful ideas uh for building a

00:34:08 --> 00:34:14
effective speech system is if you take

00:34:10 --> 00:34:17
clean audio you know a clean relatively

00:34:13 --> 00:34:20
noises audio and take random background

00:34:16 --> 00:34:22
sounds and just synthesize what that

00:34:19 --> 00:34:24
person's voice would sound like in the

00:34:21 --> 00:34:26
presence of that background noise right

00:34:23 --> 00:34:27
and this turns out to work remarkably

00:34:25 --> 00:34:29
well so if you recall a lot of car noise

00:34:26 --> 00:34:31
what the inside of your car sounds like

00:34:28 --> 00:34:33
and record a lot of clean audio of

00:34:30 --> 00:34:35
someone speaking in a quiet environment

00:34:32 --> 00:34:36
um the mathematical operation is

00:34:34 --> 00:34:38
actually addition it's superposition of

00:34:36 --> 00:34:40
sound but you basically add the two

00:34:37 --> 00:34:42
waveforms together and then you get an

00:34:39 --> 00:34:43
audio clip that sounds like that person

00:34:41 --> 00:34:45
talking in the car and you feed this

00:34:42 --> 00:34:47
your learning algorithm and so this has

00:34:44 --> 00:34:49
a dramatic effect in in terms of

00:34:46 --> 00:34:51
amplifying the training set for speech

00:34:48 --> 00:34:54
recognition and has a huge effect can

00:34:50 --> 00:34:56
have a we found a huge effect on um

00:34:53 --> 00:34:58
performance um and then also NLP you

00:34:55 --> 00:35:00
know here here's here's one example

00:34:57 --> 00:35:02
actually done by some Stanford students

00:34:59 --> 00:35:05
which is um using entend deep learning

00:35:01 --> 00:35:07
to do grammar correction so input a

00:35:04 --> 00:35:09
ungrammatical English sentence you know

00:35:06 --> 00:35:11
maybe written by non-native speaker

00:35:08 --> 00:35:14
ight and can you automatically have a

00:35:10 --> 00:35:15
I guess attention RNN input an

00:35:13 --> 00:35:18
ungrammatical sentence and correct the

00:35:14 --> 00:35:19
grammar just edit the sentence for me um

00:35:17 --> 00:35:21
and it turns out that you can synthesize

00:35:18 --> 00:35:23
huge amounts of this type of data

00:35:20 --> 00:35:25
utomatically and so that'll be another

00:35:22 --> 00:35:26
example where data synthesis um works

00:35:24 --> 00:35:29
very

00:35:25 --> 00:35:33
well um and oh and I think uh uh video

00:35:28 --> 00:35:35
games in RL right really one of the um

00:35:32 --> 00:35:38
well let me just games broadly right one

00:35:34 --> 00:35:40
of the most powerful um uh applications

00:35:37 --> 00:35:42
of RL deep RL these days is video games

00:35:39 --> 00:35:44
and I think if you think supervised

00:35:41 --> 00:35:46
learning has an insatable hunger for

00:35:43 --> 00:35:47
data wait till you work on AO algorithms

00:35:45 --> 00:35:49
right I think the the hunger for data is

00:35:46 --> 00:35:51
even greater but when you play video

00:35:48 --> 00:35:53
games the advantage of that is you can

00:35:50 --> 00:35:55
synthesize almost infinite amounts of

00:35:52 --> 00:35:58
data to to feed this even greater more

00:35:54 --> 00:35:59
right even greater need that our ARS

00:35:57 --> 00:36:03
have

00:35:58 --> 00:36:05
um so just one note of caution data

00:36:02 --> 00:36:07
synthesis has a lot of limits um I'll

00:36:04 --> 00:36:09
tell you one other story um you know

00:36:06 --> 00:36:11
let's say you want to recognize cars

00:36:08 --> 00:36:13
right uh there are a lot of video games

00:36:10 --> 00:36:14
um I need to play more video games

00:36:12 --> 00:36:16
what's a video game with cause in it oh

00:36:13 --> 00:36:18
GTA Grand Theft Auto right so there a

00:36:15 --> 00:36:19
bunch of cars in Grand Theft Auto why we

00:36:17 --> 00:36:21
just take pictures of cars from Grand

00:36:18 --> 00:36:24
Theft Auto and you can synthesize lots

00:36:20 --> 00:36:26
of cars lots of orientations there and

00:36:23 --> 00:36:28
paste that give that as training data um

00:36:25 --> 00:36:29
it turns out that's difficult to do

00:36:27 --> 00:36:31
because

00:36:28 --> 00:36:33
from the human perceptual system there

00:36:30 --> 00:36:35
might be 20 cars in a game but it looks

00:36:32 --> 00:36:37
great to you because you can't tell if

00:36:34 --> 00:36:39
there 20 cars in the game or a thousand

00:36:36 --> 00:36:41
cars in a game right and so there are

00:36:38 --> 00:36:43
situations where the synthetic data set

00:36:40 --> 00:36:45
looks great to you because 20 cars in a

00:36:42 --> 00:36:47
video game is plenty it turns out uh you

00:36:44 --> 00:36:49
don't need a 100 different calls for the

00:36:46 --> 00:36:50
human to think it looks realistic but

00:36:48 --> 00:36:52
from perspective of learning algorithm

00:36:49 --> 00:36:55
this is very impoverished very very poor

00:36:51 --> 00:36:58
data set so so I think so so so a lot to

00:36:54 --> 00:36:59
be to be sorted out for data synthesis

00:36:57 --> 00:37:01
um

00:36:58 --> 00:37:03
for those you that work in companies one

00:37:00 --> 00:37:05
practice I would strongly recommend

00:37:02 --> 00:37:08
is to have a unified data

00:37:04 --> 00:37:08
warehouse

00:37:07 --> 00:37:14
right um so what I mean is that if your

00:37:11 --> 00:37:15
teams if your you know engineer teams

00:37:13 --> 00:37:17
your research teams are going around

00:37:14 --> 00:37:18
trying to accumulate the data from lots

00:37:16 --> 00:37:20
of different organizations in your

00:37:17 --> 00:37:23
company that's just going to be a pain

00:37:19 --> 00:37:26
it's going to be slow so um at buo you

00:37:22 --> 00:37:28
know our our policy is um it's not your

00:37:25 --> 00:37:30
data is a company's data and if it's

00:37:27 --> 00:37:32
user data it goes into my user data

00:37:29 --> 00:37:34
warehouse uh we we we should have a

00:37:31 --> 00:37:37
discussion about user access rights

00:37:33 --> 00:37:39
privacy and who can access what data but

00:37:36 --> 00:37:41
at BYU I felt very strongly so we we

00:37:38 --> 00:37:43
mandate this data needs to come into one

00:37:40 --> 00:37:45
loog it's a logical warehous right so

00:37:42 --> 00:37:46
it's physically distributed across loss

00:37:44 --> 00:37:49
of data censes but they should be in one

00:37:46 --> 00:37:50
system and what we should discuss is

00:37:48 --> 00:37:52
access rights but what we should not

00:37:49 --> 00:37:55
discuss is whether or not to bring

00:37:51 --> 00:37:57
together data into as unified a data

00:37:54 --> 00:37:58
warehouse as possible and so this is

00:37:56 --> 00:38:01
another practice that I found

00:37:57 --> 00:38:03
um makes uh access the data just much

00:38:00 --> 00:38:06
smoother and allows you know teams to to

00:38:02 --> 00:38:08
drive performance so really if if

00:38:05 --> 00:38:12
your boss ask you tell them that I

00:38:07 --> 00:38:12
said like build a unified data warehouse

00:38:12 --> 00:38:20
right so um I want to take the

00:38:16 --> 00:38:23
uh train test you know bias variance

00:38:19 --> 00:38:26
picture and refine it it turns out that

00:38:22 --> 00:38:28
his idea of a 7030 split right train

00:38:25 --> 00:38:31
test or whatever this was common

00:38:28 --> 00:38:33
in um machine learning kind of in the

00:38:30 --> 00:38:35
past when you know frankly most of us an

00:38:32 --> 00:38:37
Academia were working on relatively

00:38:34 --> 00:38:39
small data sets right and so I know

00:38:36 --> 00:38:40
there used to be this thing called the

00:38:38 --> 00:38:43
UC Irvine repository for machine

00:38:40 --> 00:38:45
learning data sets you know by today's

00:38:42 --> 00:38:47
this amazing results at the time but by

00:38:44 --> 00:38:48
today standards is quite small and so

00:38:46 --> 00:38:51
you download the data set shuffle the

00:38:47 --> 00:38:54
data set and you have you know train Dev

00:38:50 --> 00:38:57
test and whatever um in today in

00:38:53 --> 00:38:58
production machine learning today is

00:38:56 --> 00:39:00
much more common

00:38:58 --> 00:39:02
for your train and your test

00:38:59 --> 00:39:04
distributions to come from different

00:39:01 --> 00:39:05
distributions right and and and this

00:39:03 --> 00:39:08
creates new problems and new ways of

00:39:04 --> 00:39:10
thinking about bu and VAR so let me sure

00:39:07 --> 00:39:11
talk about that um so actually here's a

00:39:09 --> 00:39:13
concrete example and this is a real

00:39:10 --> 00:39:15
example from Buu right what builds a

00:39:12 --> 00:39:17
very effective speech recognition system

00:39:15 --> 00:39:19
and then recently actually actually

00:39:16 --> 00:39:21
quite some time back now we wanted to

00:39:18 --> 00:39:23
launch a new product that uses speech

00:39:20 --> 00:39:25
recognition um we wanted a speech

00:39:22 --> 00:39:26
enabled rear viiew mirror right so you

00:39:24 --> 00:39:30
know if you have a car that doesn't have

00:39:25 --> 00:39:31
a built-in GPS unit right uh we wanted

00:39:29 --> 00:39:34
this is a real product in China we want

00:39:31 --> 00:39:37
o let you take out your rearview mirror

00:39:33 --> 00:39:39
and put a new you know AI power speech

00:39:36 --> 00:39:41
part rearview mirror because it's an

00:39:38 --> 00:39:43
easier uh uh like a off the market

00:39:40 --> 00:39:45
installation so you can speak to

00:39:42 --> 00:39:47
rearview mirror and say dear Rew mirror

00:39:44 --> 00:39:50
you know navigate me to whatever right

00:39:46 --> 00:39:52
so this is a real product um so so so

00:39:49 --> 00:39:54
how do you build a speech recognition

00:39:51 --> 00:39:59
system for this incar speech enable rear

00:39:53 --> 00:40:01
view mirror um so this is our status

00:39:58 --> 00:40:05
right we have you know let's call it

00:40:00 --> 00:40:07
50,000 hours of data from of speech

00:40:04 --> 00:40:08
recognition data from all sorts of

00:40:06 --> 00:40:11
places right a lot of data we bought

00:40:07 --> 00:40:13
some user data that that that we have

00:40:10 --> 00:40:15
permission to use but a lot of data

00:40:12 --> 00:40:17
collected from all sorts of places but

00:40:14 --> 00:40:20
not your incar rear viiew mirror

00:40:16 --> 00:40:22
scenario right and then our product

00:40:19 --> 00:40:23
managers can go around and you know

00:40:21 --> 00:40:25
through quite a lot of work for this

00:40:22 --> 00:40:28
example I'm going to say let's say they

00:40:24 --> 00:40:30
collect 10 hours more of data from

00:40:27 --> 00:40:33
exactly the rear view

00:40:29 --> 00:40:35
mirror scenario right so you know

00:40:32 --> 00:40:36
install this thing in the car get drive

00:40:34 --> 00:40:39
around talk to it you collect 10 hours

00:40:35 --> 00:40:41
of data from exactly the distribution

00:40:38 --> 00:40:43
that you want to test on so the question

00:40:40 --> 00:40:45
is what do you do now right do you throw

00:40:42 --> 00:40:47
this 50,000 hours of data away because

00:40:44 --> 00:40:50
it's not from the distribution one or or

00:40:46 --> 00:40:53
can you use it in some way um in the

00:40:49 --> 00:40:54
older pre deep learning days people used

00:40:52 --> 00:40:56
to build very separate models it was

00:40:53 --> 00:40:58
more common to build one speech model

00:40:55 --> 00:41:00
for rearview mirrror one model model for

00:40:57 --> 00:41:03
the maps voice query one model for

00:40:59 --> 00:41:04
search one model and in the era of deep

00:41:02 --> 00:41:05
learning it's becoming more and more

00:41:03 --> 00:41:07
common to just power all the data into

00:41:04 --> 00:41:09
ne model and let the model sorted out

00:41:06 --> 00:41:11
and so long as your model is big enough

00:41:08 --> 00:41:13
you could usually do this um and if you

00:41:10 --> 00:41:15
do little Tech if you get the features

00:41:12 --> 00:41:18
right you could usually pile all the

00:41:14 --> 00:41:21
data into one model uh and often see

00:41:17 --> 00:41:24
gains butly usually not see any losses

00:41:20 --> 00:41:25
but the question is given this data set

00:41:23 --> 00:41:28
you know how do you split this into

00:41:24 --> 00:41:30
train dep test right so here's one thing

00:41:27 --> 00:41:34
you could do which is call this your

00:41:29 --> 00:41:37
training set call this your dep set and

00:41:33 --> 00:41:39
call this your test set right um turns

00:41:36 --> 00:41:41
out this is a bad idea I would not do

00:41:38 --> 00:41:45
this and so one of the best practices

00:41:40 --> 00:41:50
with with' derived is um make

00:41:44 --> 00:41:52
sure your development set and test sets

00:41:49 --> 00:41:52
are from the same

00:41:53 --> 00:41:58
distribution right I've been finding

00:41:56 --> 00:42:00
that this is one of the tips that really

00:41:57 --> 00:42:03
boost the effectiveness of a machine

00:41:59 --> 00:42:06
learning team um so in particular I

00:42:02 --> 00:42:08
would make this the training set and

00:42:05 --> 00:42:10
then of my 10 hours let me expand this a

00:42:07 --> 00:42:14
little bit right much smaller data set

00:42:09 --> 00:42:17
maybe five hours def five hours of tests

00:42:13 --> 00:42:19
and the reason for this is um uh your

00:42:16 --> 00:42:22
team will be working to tune things on

00:42:18 --> 00:42:24
the death set right and the last thing

00:42:21 --> 00:42:26
you want is if they spend three months

00:42:23 --> 00:42:27
working on the death set and then

00:42:25 --> 00:42:29
realize when they finally tested that

00:42:26 --> 00:42:31
he test is totally different a lot of

00:42:28 --> 00:42:34
work is wasted so I think to make an

00:42:30 --> 00:42:36
alogy you know having different dep

00:42:33 --> 00:42:38
and test set distributions is a bit like

00:42:35 --> 00:42:41
if I tell you hey everyone let's go

00:42:37 --> 00:42:43
north right and then a few hours later

00:42:40 --> 00:42:45
when when all of you are in Oakland I

00:42:42 --> 00:42:46
say where are you wait I want you to be

00:42:44 --> 00:42:47
in San Francisco and you go what why'

00:42:45 --> 00:42:49
you tell me to go north tell me to go to

00:42:47 --> 00:42:52
San Francisco right and so I think

00:42:48 --> 00:42:55
having depth and test set be from the

00:42:51 --> 00:42:57
same distribution is one of the ideas

00:42:54 --> 00:42:59
that I found really optimizes the team's

00:42:56 --> 00:43:01
efficiency because it you know the

00:42:58 --> 00:43:03
development set which is what your team

00:43:00 --> 00:43:05
is going to be tuning as algorithms to

00:43:02 --> 00:43:07
that is really the problem specification

00:43:04 --> 00:43:08
right and you problem specification

00:43:06 --> 00:43:09
tells them to go here but you actually

00:43:07 --> 00:43:12
want them to go there you're going to

00:43:08 --> 00:43:14
waste a lot of effort um and so when

00:43:11 --> 00:43:16
possible having Deen tests from the same

00:43:13 --> 00:43:18
distribution which it isn't always there

00:43:16 --> 00:43:20
there's some cavas but when is

00:43:17 --> 00:43:24
reason well to do so um this really

00:43:19 --> 00:43:27
improves the the the the um the team's

00:43:23 --> 00:43:29
efficiency um and another thing is once

00:43:26 --> 00:43:31
you specify the de set that's like your

00:43:28 --> 00:43:33
problem specification right uh once you

00:43:30 --> 00:43:35
start the test set that's your problem

00:43:32 --> 00:43:37
specification your team might go and

00:43:34 --> 00:43:38
collect more training data or change the

00:43:36 --> 00:43:40
training set or synthesize more training

00:43:37 --> 00:43:42
set but but you know you shouldn't

00:43:39 --> 00:43:45
change the test set if the test set is

00:43:41 --> 00:43:48
is your problem specification right

00:43:44 --> 00:43:50
so um so in practice what I actually

00:43:47 --> 00:43:53
recommend is splitting a training set as

00:43:49 --> 00:43:54
follows um your training set cover a

00:43:52 --> 00:43:57
small part of this let me just say 20

00:43:53 --> 00:43:59
hours of data to form I'm going to call

00:43:56 --> 00:44:03
this the um

00:43:58 --> 00:44:04
training def set train dasde set but

00:44:02 --> 00:44:05
hat's basically a development set

00:44:03 --> 00:44:08
hat's from the same distribution as

00:44:04 --> 00:44:09
your training Set uh and then you have

00:44:07 --> 00:44:11
your depth set and your test set right

00:44:08 --> 00:44:13
so these are what you actually from the

00:44:10 --> 00:44:15
distribution you actually care about and

00:44:12 --> 00:44:17
these you have your training set $50,000

00:44:14 --> 00:44:19
of all sorts of data and maybe we aren't

00:44:16 --> 00:44:21
even entirely sure what data this is uh

00:44:18 --> 00:44:24
but split off just a small part of this

00:44:20 --> 00:44:28
o I guess this is now what

00:44:23 --> 00:44:31
49980 hours and 20 hours um and then

00:44:28 --> 00:44:35
here's the generalization of the bias

00:44:30 --> 00:44:37
variance concept um actually let me use

00:44:34 --> 00:44:37
this

00:44:39 --> 00:44:46
board and and but has say the the um the

00:44:43 --> 00:44:48
fact that training and test sets don't

00:44:45 --> 00:44:50
match is one of the problems that um

00:44:47 --> 00:44:52
Academia doesn't study much there's some

00:44:49 --> 00:44:54
work on domain adaptation there is some

00:44:51 --> 00:44:55
literature on it but it turns out that

00:44:53 --> 00:44:57
when you train and test on different

00:44:54 --> 00:44:59
distributions you know it it sometimes

00:44:56 --> 00:45:01
it's just random is a little bit luck

00:44:58 --> 00:45:03
whether you generalize well to a totally

00:45:00 --> 00:45:05
different test set so that's made it

00:45:02 --> 00:45:08
hard to study systematically which is

00:45:04 --> 00:45:11
why I think um Academia has not studied

00:45:07 --> 00:45:13
this particular problem as much as I

00:45:10 --> 00:45:14
feel it is important for to to those of

00:45:12 --> 00:45:17
us building production systems um but

00:45:13 --> 00:45:19
here is some work but but not no no no

00:45:16 --> 00:45:21
very widely deployed Solutions yet would

00:45:18 --> 00:45:23
be would my sense um but so I think our

00:45:20 --> 00:45:25
best practice is if if you now

00:45:22 --> 00:45:28
generalize what I was describing just

00:45:24 --> 00:45:30
now to the following which is um measure

00:45:27 --> 00:45:33
human level performance measure your

00:45:29 --> 00:45:33
training set

00:45:32 --> 00:45:38
performance measure your training death

00:45:37 --> 00:45:42
performance measure your death set

00:45:39 --> 00:45:44
performance and measure your test set

00:45:41 --> 00:45:47
performance right so now you have kind

00:45:43 --> 00:45:51
of five numbers so to take an example

00:45:46 --> 00:45:52
t's say human level is 1% error um and

00:45:50 --> 00:45:54
I'm going to use very obvious examples

00:45:51 --> 00:45:57
for illustration if your training set

00:45:53 --> 00:45:58
performance is 10% you know and this is

00:45:56 --> 00:45:59
10.1%

00:45:57 --> 00:46:02
right uh

00:45:58 --> 00:46:04
10.1% you know

00:46:01 --> 00:46:06
10.2% right in this example then it's

00:46:03 --> 00:46:07
quite clear that you have a huge gap

00:46:05 --> 00:46:09
between human level performance and

00:46:06 --> 00:46:11
training set performance and so you have

00:46:08 --> 00:46:14
a huge

00:46:10 --> 00:46:17
bias right uh and and and so kind of use

00:46:13 --> 00:46:22
the the the bias fixing types of um uh

00:46:16 --> 00:46:26
Solutions um and then um there just

00:46:21 --> 00:46:28
one example I want to well and so I find

00:46:25 --> 00:46:31
that the machine learning one of the

00:46:27 --> 00:46:33
most useful things is to look at the

00:46:30 --> 00:46:35
aggregate error of your system which in

00:46:32 --> 00:46:37
this case you know is your depth set

00:46:34 --> 00:46:39
your tested era and then to break down

00:46:36 --> 00:46:41
the components to to figure out how much

00:46:38 --> 00:46:43
of what eror comes from where so you

00:46:40 --> 00:46:45
know where to focus your attention so

00:46:42 --> 00:46:47
this accumulation of errors this

00:46:45 --> 00:46:49
difference here this is maybe 9% bias

00:46:47 --> 00:46:52
which is a lot so I would work on the

00:46:48 --> 00:46:56
bias reduction techniques uh this Gap

00:46:51 --> 00:47:00
here right this is kind of um really the

00:46:55 --> 00:47:05
variance this Gap here is due to your

00:46:59 --> 00:47:05
train test distribution

00:47:04 --> 00:47:10
mismatch um and this is overfitting of

00:47:13 --> 00:47:21
Dev okay right um so just to be really

00:47:17 --> 00:47:23
concrete um here's an example where you

00:47:20 --> 00:47:26
have high train

00:47:22 --> 00:47:28
test error mismatch right which is if

00:47:25 --> 00:47:31
human level performance is 1% % your

00:47:27 --> 00:47:33
training error is you know 2% uh your

00:47:30 --> 00:47:36
training death is

00:47:32 --> 00:47:39
2.1% and then on your death Set uh the

00:47:35 --> 00:47:42
rror suddenly jumps to 10% right so

00:47:38 --> 00:47:44
this would sorry my my my my x-axis

00:47:41 --> 00:47:46
doesn't perfectly line up but if there's

00:47:43 --> 00:47:48
a huge gap here then I would say you

00:47:45 --> 00:47:51
have a huge train test set mismatch

00:47:47 --> 00:47:55
problem okay um and so at this basic

00:47:50 --> 00:47:58
level of analysis what you know this

00:47:54 --> 00:48:03
formula for machine learning

00:47:57 --> 00:48:08
instead of Dev I would replace this with

00:48:02 --> 00:48:11
train Dev right and then in the rest of

00:48:08 --> 00:48:14
this uh really recipe for machine

00:48:10 --> 00:48:19
learning um I would then

00:48:13 --> 00:48:19
ask um is your death error

00:48:19 --> 00:48:26
high if yes then you have a train test

00:48:22 --> 00:48:29
mismatch problem and there the solution

00:48:25 --> 00:48:32
would be to try to get more data

00:48:28 --> 00:48:32
uh that's similar to test

00:48:32 --> 00:48:40
set right or maybe a data

00:48:36 --> 00:48:42
synthesis or data augmentation you know

00:48:39 --> 00:48:44
try to tweak your training set to make

00:48:41 --> 00:48:47
it look more like your test set um and

00:48:43 --> 00:48:50
then there's always this kind of a uh

00:48:46 --> 00:48:53
Hail Mary I guess which is you know new

00:48:49 --> 00:48:53
architecture

00:48:52 --> 00:48:57
right um and then finally just to finish

00:48:55 --> 00:49:01
this up you know that that that's not

00:48:57 --> 00:49:02
hat much more uh finally uh uh there's

00:49:00 --> 00:49:05
this yeah well and then hopefully if

00:49:01 --> 00:49:07
you're done uh uh hopefully your test

00:49:04 --> 00:49:09
set error will be will be good and if if

00:49:07 --> 00:49:10
you're doing well your death set but not

00:49:08 --> 00:49:12
your test set it means you've overit

00:49:09 --> 00:49:14
your death set so just get some more

00:49:11 --> 00:49:19
death set data right actually I'll just

00:49:13 --> 00:49:22
write this I guess test set error

00:49:18 --> 00:49:25
y right and if yes then just get more

00:49:21 --> 00:49:25
depth data

00:49:27 --> 00:49:32
okay and then

00:49:29 --> 00:49:36
done sorry if this is not too legible

00:49:31 --> 00:49:39
what I wrote here is uh if your dep set

00:49:35 --> 00:49:41
error is not high but your test set

00:49:38 --> 00:49:43
error is high it means you've overfit

00:49:40 --> 00:49:46
your dep set so just get more test set

00:49:43 --> 00:49:48
get more depth set data

00:49:45 --> 00:49:53
okay

00:49:47 --> 00:49:57
um so one of the um effects I've seen is

00:49:52 --> 00:49:58
bias and variance is it sounds so simple

00:49:56 --> 00:50:00
but it's actually much diffic much more

00:49:57 --> 00:50:02
difficult to apply in practice than it

00:49:59 --> 00:50:04
sounds when I talk about it or or on

00:50:01 --> 00:50:07
text right so some tips for a lot of

00:50:03 --> 00:50:09
problems just calculate these numbers

00:50:06 --> 00:50:13
and this can help drive your analysis in

00:50:08 --> 00:50:18
terms of deciding what to do

00:50:12 --> 00:50:20
um yeah and and I find that it takes

00:50:17 --> 00:50:22
urprisingly long to really Gro to

00:50:19 --> 00:50:24
really understand bu and variance deeply

00:50:21 --> 00:50:26
but I find that people that understand

00:50:23 --> 00:50:29
buys and variance deeply are often able

00:50:25 --> 00:50:31
to drive very rapid progress in in in

00:50:28 --> 00:50:33
machine learning applications right and

00:50:30 --> 00:50:36
I know it's much sexier to show you

00:50:32 --> 00:50:38
some cool new network architecture and I

00:50:35 --> 00:50:40
don't know and and and and just this

00:50:37 --> 00:50:42
really helps our teams make rapid

00:50:39 --> 00:50:45
progress on

00:50:41 --> 00:50:45
things

00:50:44 --> 00:50:51
um so you know there's one thing I I I

00:50:48 --> 00:50:54
kind of snuck in here without making it

00:50:50 --> 00:50:57
explicit which is that in this whole

00:50:53 --> 00:51:00
analysis we were benchmarking against

00:50:56 --> 00:51:03
human level performance right so there

00:50:59 --> 00:51:05
another Trend another thing that that

00:51:02 --> 00:51:07
has been differenced uh again you

00:51:05 --> 00:51:08
know I'm looking across a lot of

00:51:06 --> 00:51:11
projects I've seen in many areas and

00:51:07 --> 00:51:12
trying to pull out the common Trends but

00:51:10 --> 00:51:14
I find that comparing to human level

00:51:11 --> 00:51:17
performance is a much more common theme

00:51:13 --> 00:51:19
now than several years ago right with

00:51:16 --> 00:51:21
I guess Andre being the uh the the

00:51:18 --> 00:51:23
human level Benchmark for image net uh

00:51:20 --> 00:51:24
um and and and really by do we compare

00:51:22 --> 00:51:26
our speech system to human level

00:51:23 --> 00:51:30
performance and try to exceed it and so

00:51:25 --> 00:51:32
n so why is that um it turns out that

00:51:29 --> 00:51:36
so why why why is human level

00:51:31 --> 00:51:39
performance right such a such a common

00:51:35 --> 00:51:43
theme in in applied deep learning um it

00:51:38 --> 00:51:45
urns out that if um this the x-axis is

00:51:42 --> 00:51:48
time as in you know how long you've been

00:51:44 --> 00:51:51
working on a project and the y- axis is

00:51:47 --> 00:51:53
accuracy right if this is human level

00:51:50 --> 00:51:56
performance you know like human level

00:51:52 --> 00:51:58
accuracy or human level performance on

00:51:55 --> 00:52:00
some task you find that for a lot of

00:51:57 --> 00:52:02
projects your teams will make rapid

00:51:59 --> 00:52:05
progress you

00:52:01 --> 00:52:08
know up until they get to human level

00:52:04 --> 00:52:10
performance and then often it will maybe

00:52:07 --> 00:52:12
surpass human level performance a bit

00:52:09 --> 00:52:15
and then progress often gets much harder

00:52:11 --> 00:52:18
after that right but this is a common

00:52:14 --> 00:52:19
pattern I see in a lot of problems um so

00:52:17 --> 00:52:21
there multiple reasons why this is the

00:52:18 --> 00:52:23
case I'm I'm curious like why why why

00:52:21 --> 00:52:25
do you think this is the case any

00:52:22 --> 00:52:27
guesses

00:52:24 --> 00:52:30
yeah cool labels are coming from humans

00:52:26 --> 00:52:33
the labs are oh cool yep labels coming

00:52:29 --> 00:52:37
from humans anything

00:52:32 --> 00:52:37
else all right cool anything

00:52:36 --> 00:52:42
else oh interesting Ox small out the

00:52:39 --> 00:52:43
human brain yeah I don't know maybe I I

00:52:41 --> 00:52:46
think the the the the distance from

00:52:42 --> 00:52:49
neuronet to human brains is very far so

00:52:45 --> 00:52:49
that one I would

00:52:53 --> 00:53:00
uh I see human capacity this from

00:52:55 --> 00:53:05
similar yeah kind of yeah all close yeah

00:52:59 --> 00:53:08
just okay board I see see right cool

00:53:04 --> 00:53:10
that's one more and then I'll

00:53:07 --> 00:53:12
just oh be satisfied okay cool you're

00:53:09 --> 00:53:14
satisfied and bought I guess on two

00:53:11 --> 00:53:18
sides of the coin I

00:53:13 --> 00:53:21
guess all right

00:53:17 --> 00:53:23
so oh defens human man yeah yeah cool so

00:53:20 --> 00:53:25
let let me let me let me uh I think

00:53:22 --> 00:53:27
there there all all all you know lots of

00:53:24 --> 00:53:29
great answers um I think that there

00:53:26 --> 00:53:32
there are several good reasons for

00:53:28 --> 00:53:36
this type of effect um one of them is

00:53:31 --> 00:53:39
that um there is for a lot of problems

00:53:35 --> 00:53:41
there is some theoretical limit of

00:53:38 --> 00:53:43
performance right if if you know some

00:53:40 --> 00:53:45
fraction of data is just noisy in speech

00:53:43 --> 00:53:48
recognition a lot of audio CPS are just

00:53:44 --> 00:53:50
noisy uh someone picked up a phone and

00:53:47 --> 00:53:51
you know they're in a rock console or

00:53:49 --> 00:53:52
something and it's just impossible to

00:53:50 --> 00:53:54
figure out what on Earth they were

00:53:51 --> 00:53:56
saying right or some images you know are

00:53:53 --> 00:54:00
just so blurry just impossible to figure

00:53:55 --> 00:54:03
out what dis is so there is some upper

00:53:59 --> 00:54:07
limit theoretical limits of performance

00:54:02 --> 00:54:10
um called the optimal error rate

00:54:06 --> 00:54:12
right and and the basian will will call

00:54:09 --> 00:54:15
this the base rate right but really

00:54:11 --> 00:54:16
there is some theoretical Optimum where

00:54:14 --> 00:54:18
ven if you had the best possible

00:54:15 --> 00:54:20
function you know with best possible

00:54:17 --> 00:54:22
parameters it cannot do better than that

00:54:19 --> 00:54:23
because the input is just noisy and

00:54:21 --> 00:54:27
sometimes impossible to

00:54:22 --> 00:54:29
label so it turns out that um humans are

00:54:26 --> 00:54:31
pretty good at a lot of the tasks we do

00:54:28 --> 00:54:32
not all but humans actually pretty good

00:54:30 --> 00:54:35
at speech recognition pretty good at

00:54:31 --> 00:54:37
computer vision and so you know by the

00:54:34 --> 00:54:39
time you surpass human level accuracy

00:54:36 --> 00:54:41
there might not be a lot of room right

00:54:38 --> 00:54:42
o go to go further up so that's kind of

00:54:40 --> 00:54:45
one reason as just humans are pretty

00:54:42 --> 00:54:47
good um other reasons I think a couple

00:54:44 --> 00:54:49
people said right um and and it turns

00:54:46 --> 00:54:54
out that um so long as you're still

00:54:49 --> 00:54:58
worse than humans uh you have better

00:54:53 --> 00:55:01
levs to make progress

00:54:57 --> 00:55:03
right um so you know while while worse

00:55:00 --> 00:55:03
than

00:55:05 --> 00:55:10
humans um right have good

00:55:11 --> 00:55:17
ways uh to make

00:55:13 --> 00:55:19
progress and so some of those ways are

00:55:16 --> 00:55:23
right a couple of you mentioned this you

00:55:18 --> 00:55:23
can get labels from humans

00:55:26 --> 00:55:32
right um You can also carry out error

00:55:32 --> 00:55:37
analysis and error analysis just means

00:55:35 --> 00:55:39
look your death set look the examples

00:55:36 --> 00:55:41
your Al got wrong and see you know see

00:55:38 --> 00:55:43
if the humans have any insight into why

00:55:40 --> 00:55:45
a human thought this is a c AR thought

00:55:42 --> 00:55:47
it was a dog or why a human you know

00:55:44 --> 00:55:51
recognized this utterance correctly but

00:55:47 --> 00:55:54
your system just mistr transcribed this

00:55:50 --> 00:55:55
um and then I think another reason is

00:55:53 --> 00:55:58
that it's

00:55:54 --> 00:56:02
easier to

00:55:57 --> 00:56:02
estimate um buas variance

00:56:03 --> 00:56:12
ffects right and here's what I

00:56:06 --> 00:56:15
mean um so let's see to take another

00:56:11 --> 00:56:16
confute example let's say that uh you

00:56:14 --> 00:56:19
let's say that you're working on some

00:56:15 --> 00:56:19
image recognition

00:56:18 --> 00:56:28
task right if I tell you that um uh your

00:56:23 --> 00:56:28
training error

00:56:30 --> 00:56:36
is

00:56:31 --> 00:56:36
8% um and your death

00:56:35 --> 00:56:42
error is

00:56:37 --> 00:56:43
10% right well should you work on you

00:56:41 --> 00:56:44
know bias reduction techniques that you

00:56:42 --> 00:56:47
should work on variance reduction

00:56:43 --> 00:56:51
techniques is actually very unclear

00:56:46 --> 00:56:54
ight if I tell you that

00:56:50 --> 00:56:56
humans get

00:56:53 --> 00:56:58
7.5% then you're pretty close on the

00:56:55 --> 00:56:59
trading being said to human and you

00:56:57 --> 00:57:04
would think you have more of a variance

00:56:58 --> 00:57:07
problem if I tell you humans can get

00:57:03 --> 00:57:09
1% 1% error then you know that even on

00:57:07 --> 00:57:11
the training side you're doing way worse

00:57:08 --> 00:57:13
than humans and so well you should build

00:57:10 --> 00:57:15
a bigger Network or something right so

00:57:12 --> 00:57:17
this piece of information about where

00:57:14 --> 00:57:20
humans are and and I think of humans as

00:57:16 --> 00:57:21
a proxy as an approximation for the Bas

00:57:19 --> 00:57:23
error rate for the optimal error rate

00:57:20 --> 00:57:24
this piece of information really tells

00:57:22 --> 00:57:26
you where you should focus your effort

00:57:23 --> 00:57:28
and therefore increases the efficiency

00:57:25 --> 00:57:30
of your team but once you surpass human

00:57:27 --> 00:57:35
level efficiency I mean if if if even

00:57:29 --> 00:57:37
humans you know got um a 30% error right

00:57:34 --> 00:57:39
hen then is is it's just slightly

00:57:36 --> 00:57:41
tougher so that's is another thing that

00:57:38 --> 00:57:43
that becomes harder to do that you

00:57:40 --> 00:57:46
no longer have a proxy for estimating

00:57:42 --> 00:57:49
the base error rate to decide how to

00:57:45 --> 00:57:50
improve performance right um so you know

00:57:48 --> 00:57:52
there definitely lots of problems where

00:57:49 --> 00:57:54
surpass human level performance and keep

00:57:51 --> 00:57:57
getting better and better but I find

00:57:53 --> 00:57:59
that uh uh a lot of the I find that my

00:57:56 --> 00:58:02
life building deep learning applications

00:57:58 --> 00:58:03
is often easier until we surpass human

00:58:01 --> 00:58:05
level performance which is much better

00:58:02 --> 00:58:07
tools and after we surpass human level

00:58:04 --> 00:58:10
performance um well actually you one the

00:58:06 --> 00:58:12
details what we usually try to do is try

00:58:09 --> 00:58:14
to find subsets of data where we still

00:58:11 --> 00:58:15
do worse than humans so find let's say

00:58:13 --> 00:58:17
so for example right now we surpass

00:58:15 --> 00:58:19
human level performance for speech

00:58:16 --> 00:58:21
accuracy of for short audio clips taken

00:58:18 --> 00:58:23
out of context but we find for example

00:58:20 --> 00:58:26
we're still way worse than humans on one

00:58:22 --> 00:58:27
particular type of accented speech then

00:58:25 --> 00:58:29
even if we are much better than humans

00:58:26 --> 00:58:31
in the aggregate if we find what much

00:58:28 --> 00:58:32
worse than humans on the subset of data

00:58:30 --> 00:58:35
then all these levers still can apply

00:58:31 --> 00:58:37
but this kind of an advanced topic maybe

00:58:34 --> 00:58:39
where you segment the training center

00:58:36 --> 00:58:42
and analyze sub separate subsets of

00:58:38 --> 00:58:42
training Cent

00:58:45 --> 00:58:51
yeah yeah I see actually you know that's

00:58:49 --> 00:58:53
a wonderful question I want to ask a

00:58:50 --> 00:58:55
related Qui question to everyone in the

00:58:52 --> 00:58:57
audience and we going come back to to to

00:58:54 --> 00:59:01
what Alex just said right so

00:58:56 --> 00:59:04
um given everything we just said um I

00:59:00 --> 00:59:06
have another quiz for you right um I'm

00:59:03 --> 00:59:08
going to pose a question uh write down

00:59:05 --> 00:59:10
four choices and then ask you to raise

00:59:07 --> 00:59:14
your hand to to to to vote what you

00:59:09 --> 00:59:16
think is the right answer okay so um I

00:59:13 --> 00:59:18
talked about you know how the concept of

00:59:15 --> 00:59:21
human level accuracy is useful for

00:59:17 --> 00:59:25
driving machine learning progress right

00:59:20 --> 00:59:28
so um how do you define human level

00:59:24 --> 00:59:29
performance right so here's good example

00:59:27 --> 00:59:31
um I'm spend a lot of time working on AI

00:59:28 --> 00:59:32
Healthcare so a lot of medical examples

00:59:30 --> 00:59:34
in my head right now but let's say that

00:59:31 --> 00:59:35
you want to do medical imaging for

00:59:33 --> 00:59:37
medical diagnosis you know so read

00:59:34 --> 00:59:41
medical images tell your patient a

00:59:36 --> 00:59:43
certain disease or not right so um so

00:59:40 --> 00:59:46
medical

00:59:42 --> 00:59:48
example so my question to you is how do

00:59:45 --> 00:59:53
you define human level performance um

00:59:47 --> 00:59:55
Choice a is um you know a typical human

00:59:52 --> 00:59:57
so non-doctor right let's say that the

00:59:54 --> 00:59:59
rror rate at Reading a certain type of

00:59:56 --> 01:00:01
medical image is

00:59:58 --> 01:00:06
3%

01:00:00 --> 01:00:06
right choice B is a typical

01:00:07 --> 01:00:12
doctor let's say a typical doctor makes

01:00:10 --> 01:00:18
1%

01:00:11 --> 01:00:18
error um or I can find an expert

01:00:17 --> 01:00:27
doctor and let's say an expert doctor

01:00:19 --> 01:00:30
Mak 0.7% error or I can find a team

01:00:26 --> 01:00:30
of expert

01:00:30 --> 01:00:36
doctors and what I mean is if I find a

01:00:33 --> 01:00:37
team of expert doctors and have a team

01:00:35 --> 01:00:39
look at every image and debate and

01:00:36 --> 01:00:41
iscuss and have them come to you know

01:00:38 --> 01:00:43
the team's best guess of what's

01:00:40 --> 01:00:46
happening to this patient let's say I

01:00:42 --> 01:00:48
can get 0.5% error so think for a few

01:00:45 --> 01:00:51
seconds I'll ask you to vote by by by

01:00:47 --> 01:00:53
raising your hands which of these is the

01:00:50 --> 01:00:55
most useful definition of human level

01:00:53 --> 01:00:58
error if you want to use this to drive

01:00:54 --> 01:00:58
the performance of your oper

01:00:58 --> 01:01:05
okay so who thinks Choice a raise your

01:01:01 --> 01:01:05
hand oh

01:01:05 --> 01:01:12
sure uh uh uh yeah don't worry about

01:01:08 --> 01:01:13
ease of obtaining this data yeah right

01:01:11 --> 01:01:15
so which is the most useful definition

01:01:12 --> 01:01:18
Choice a who

01:01:14 --> 01:01:22
anyone just a couple people choice B who

01:01:17 --> 01:01:26
thinks uses Cool like a fifth Choice C

01:01:21 --> 01:01:31
exper doctus another fifth Choice D oh

01:01:26 --> 01:01:32
cool wow interesting all right so so

01:01:30 --> 01:01:35
I'll tell you that um I think that for

01:01:31 --> 01:01:37
the purpose of driving machine learning

01:01:34 --> 01:01:39
progress I think uh ignoring the cost of

01:01:36 --> 01:01:42
collecting data was a great question um

01:01:38 --> 01:01:46
I would find this definition the most

01:01:41 --> 01:01:48
useful um because I think that um a lot

01:01:45 --> 01:01:50
of what we're trying to use human level

01:01:47 --> 01:01:52
performance as a proxy for is the base

01:01:49 --> 01:01:54
rate is really the optimal error rate

01:01:52 --> 01:01:57
right and and really to measure the

01:01:53 --> 01:01:59
Baseline level of noise in your data um

01:01:56 --> 01:02:01
and so you know if a team of human

01:01:58 --> 01:02:03
doctors can get 0.5% then you know that

01:02:00 --> 01:02:05
he mathematic optimal error rate has

01:02:02 --> 01:02:08
got to be 0.5% or maybe even a little

01:02:04 --> 01:02:10
bit better um and so for the purpose of

01:02:07 --> 01:02:13
using this number to drive all these

01:02:09 --> 01:02:16
decisions such as um estimate bias and

01:02:12 --> 01:02:18
variance right uh uh that definition

01:02:15 --> 01:02:21
gives you the best you know estimate of

01:02:17 --> 01:02:24
bias right um uh because you know that

01:02:20 --> 01:02:27
he base error rate is is 0.5 or lower

01:02:23 --> 01:02:29
um in practice because of the cost of

01:02:26 --> 01:02:31
you know getting labels and so on in

01:02:28 --> 01:02:35
practice you know I would fully expect

01:02:30 --> 01:02:36
eams to use this definition uh and and

01:02:34 --> 01:02:38
by the way publishing papers is

01:02:35 --> 01:02:40
different than um the goal of publishing

01:02:37 --> 01:02:41
papers is different than the goal of

01:02:39 --> 01:02:42
actually you know building the best

01:02:40 --> 01:02:44
possible product right so for the

01:02:41 --> 01:02:45
purpose of publishing papers people like

01:02:43 --> 01:02:47
to say oh we're better than the human

01:02:44 --> 01:02:50
level so for that I guess using this

01:02:46 --> 01:02:52
definition would be what many people do

01:02:49 --> 01:02:54
um uh and and and if you actually trying

01:02:51 --> 01:02:56
to collect data you know there'll be

01:02:53 --> 01:02:58
some tearing where right get a typical

01:02:55 --> 01:02:59
doctor to label example if they arure

01:02:57 --> 01:03:02
hire an expert doctor if they still

01:02:58 --> 01:03:03
unsure then find you know so so for the

01:03:01 --> 01:03:05
purpose of data collection you you other

01:03:02 --> 01:03:08
processes but for the mathematical

01:03:04 --> 01:03:11
analysis I would tend to use 0.5 as as

01:03:07 --> 01:03:13
my definition for that number

01:03:10 --> 01:03:13
question the

01:03:17 --> 01:03:22
back oh is it possible that team of

01:03:19 --> 01:03:24
expert doctors does worse than a single

01:03:21 --> 01:03:28
doctor I don't know I I I had to ask the

01:03:23 --> 01:03:28
doctors in the audience know

01:03:27 --> 01:03:35
all right um all right just just I just

01:03:31 --> 01:03:36
wo more pages and wrap up um so you

01:03:34 --> 01:03:38
know one of the reasons I think in the

01:03:35 --> 01:03:40
ra of deep learning we uh refer to

01:03:38 --> 01:03:42
human level performance much more

01:03:39 --> 01:03:44
frankly is because um for a lot of these

01:03:41 --> 01:03:46
toss we are approaching human level

01:03:43 --> 01:03:49
performance right so when computer

01:03:45 --> 01:03:51
vision accuracy you know when when I

01:03:48 --> 01:03:54
guess maybe to continue this example

01:03:50 --> 01:03:56
right um if you know when your training

01:03:53 --> 01:04:00
set accuracy in computer vision was you

01:03:55 --> 01:04:02
know 30% and your death error was like

01:03:59 --> 01:04:04
35% then it didn't really matter if

01:04:01 --> 01:04:07
human level performance was 1% or 2% or

01:04:03 --> 01:04:09
3% it didn't affect your decision that

01:04:06 --> 01:04:12
much because you're just so clearly far

01:04:08 --> 01:04:14
so far from base rate but now as really

01:04:11 --> 01:04:15
more and more deep learning systems are

01:04:13 --> 01:04:17
approaching human levels performance on

01:04:14 --> 01:04:19
lot these TS measuring human level

01:04:16 --> 01:04:21
performance uh actually gives you very

01:04:18 --> 01:04:23
useful information to to to drive

01:04:20 --> 01:04:24
decision making and so honestly for a

01:04:22 --> 01:04:26
lot of the teams I work with when I meet

01:04:23 --> 01:04:28
with them a very common piece of advice

01:04:25 --> 01:04:29
is he's going to figure out what is

01:04:27 --> 01:04:31
human level performance and and they

01:04:28 --> 01:04:33
didn't spend some time to have humans

01:04:30 --> 01:04:35
labor and get that number because that

01:04:32 --> 01:04:37
number is useful for for for for driving

01:04:34 --> 01:04:41
some of these

01:04:36 --> 01:04:43
decisions so um just two last things and

01:04:40 --> 01:04:46
then we'll finish

01:04:42 --> 01:04:49
um you know one question I get asked a

01:04:45 --> 01:04:55
lot is um what can AI do really what can

01:04:48 --> 01:04:55
deep learning do right um and

01:04:57 --> 01:05:04
I guess maybe passion a company you

01:05:00 --> 01:05:07
often you know with the rise of AI I

01:05:03 --> 01:05:09
feel like um uh maybe this is again a

01:05:06 --> 01:05:11
company thing um in silic Valley we've

01:05:09 --> 01:05:14
developed pretty good workflows for

01:05:10 --> 01:05:16
Designing products in the desktop era

01:05:13 --> 01:05:18
nd in the mobile era right so with

01:05:15 --> 01:05:20
processes like draw a wireframe the

01:05:17 --> 01:05:21
designer draws a wireframe excuse me the

01:05:19 --> 01:05:23
the product manager draws a

01:05:20 --> 01:05:25
wireframe the designer does the visual

01:05:22 --> 01:05:26
design or something or they work

01:05:24 --> 01:05:29
together and then the program implements

01:05:25 --> 01:05:32
o we have well-defined workflows for

01:05:28 --> 01:05:33
how to design you know typical apps like

01:05:31 --> 01:05:35
the Facebook app or the Snapchat app or

01:05:32 --> 01:05:37
whatever we sort of know how to design

01:05:34 --> 01:05:39
we have workflows established and

01:05:36 --> 01:05:43
companies to design stuff like that in

01:05:38 --> 01:05:46
the era of AI um I feel like we don't

01:05:42 --> 01:05:48
have good processes yet for Designing AI

01:05:45 --> 01:05:50
products so for example how should a

01:05:47 --> 01:05:52
product manager specify you know I don't

01:05:49 --> 01:05:54
know a self-driving C how do you specify

01:05:51 --> 01:05:56
the product definition how does a

01:05:53 --> 01:05:58
product manager specify what level of

01:05:55 --> 01:06:00
accuracy is needed for my cat detector

01:05:57 --> 01:06:03
is like how how how so today in Silicon

01:05:59 --> 01:06:06
Valley with AI working better and better

01:06:02 --> 01:06:08
um I find us inventing new processes in

01:06:05 --> 01:06:10
order to design AI product right

01:06:07 --> 01:06:11
processes that really didn't exist

01:06:09 --> 01:06:13
before but one of the questions I often

01:06:10 --> 01:06:15
get asked partially sometimes at product

01:06:12 --> 01:06:17
people some business people is what can

01:06:14 --> 01:06:20
AI do because when a product manager is

01:06:16 --> 01:06:21
trying to design a new thing you know

01:06:19 --> 01:06:23
it's nice we can help them know what

01:06:20 --> 01:06:25
hey can design and what they can design

01:06:22 --> 01:06:28
there's no way we can build right so so

01:06:24 --> 01:06:30
when I so so I want to give you

01:06:27 --> 01:06:32
some rules of thumb that are far from

01:06:29 --> 01:06:34
perfect but that I found useful for

01:06:31 --> 01:06:37
thinking about what AI can do oh oh

01:06:33 --> 01:06:38
before I tell you the rules I use um

01:06:36 --> 01:06:40
here's one of the rules of thumb that a

01:06:37 --> 01:06:43
product manager I know was using which

01:06:39 --> 01:06:46
is he says assume that AI can do

01:06:42 --> 01:06:48
absolutely anything right and and and

01:06:45 --> 01:06:50
this actually wasn't terrible it

01:06:47 --> 01:06:52
actually led to some good results but

01:06:49 --> 01:06:55
I want I want to but I want to give

01:06:52 --> 01:06:57
you some some some more Nuance uh uh

01:06:54 --> 01:06:59
ways of communicating about modern deep

01:06:56 --> 01:07:02
learning um in in in in in these sorts

01:06:58 --> 01:07:05
of organizations you know one is um

01:07:02 --> 01:07:09
anything that a

01:07:04 --> 01:07:09
person a typical

01:07:08 --> 01:07:15
person can do in less than one seconds

01:07:13 --> 01:07:17
right and I know this rule is far from

01:07:14 --> 01:07:18
perfect there a lot of counter examples

01:07:16 --> 01:07:20
of this but this is one of the rules I

01:07:17 --> 01:07:22
found useful which is that if it's a

01:07:19 --> 01:07:23
task that a normal person can do with

01:07:21 --> 01:07:25
less than one second of thinking there's

01:07:22 --> 01:07:27
a very good chance we can automate it

01:07:24 --> 01:07:29
with deep learning so so you know given

01:07:26 --> 01:07:31
a piece of given a picture tell me if

01:07:28 --> 01:07:33
the face in this picture is smiling or

01:07:30 --> 01:07:35
frowning you don't need to think for

01:07:32 --> 01:07:36
more than a second so yes we can build

01:07:34 --> 01:07:39
eep loading systems and do that really

01:07:35 --> 01:07:41
well right um or speech recognition you

01:07:38 --> 01:07:42
know like uh listen to this audio clip

01:07:40 --> 01:07:44
what did they say you don't need to

01:07:41 --> 01:07:45
think for that long less than a second

01:07:43 --> 01:07:48
so this is really a lot of the

01:07:44 --> 01:07:50
perception work uh uh in computer vision

01:07:47 --> 01:07:52
speech um that uh deep learning is

01:07:49 --> 01:07:54
working on this rule of thumb works less

01:07:51 --> 01:07:57
well NLP I think because humans just

01:07:53 --> 01:07:58
ake time to vext bit but we found

01:07:56 --> 01:08:00
um right now at BYU we're a bunch of

01:07:57 --> 01:08:01
product managers looking around for

01:07:59 --> 01:08:03
tasks that humans can do in less than

01:08:00 --> 01:08:05
one second uh to try to automate them so

01:08:02 --> 01:08:09
this been highly thought but but still

01:08:04 --> 01:08:09
useful R of thumb um

01:08:16 --> 01:08:23
question I see

01:08:20 --> 01:08:25
yeah yeah actually great question I feel

01:08:22 --> 01:08:27
ike a lot of the value of deep learning

01:08:24 --> 01:08:29
a lot a lot of the the the concrete

01:08:26 --> 01:08:31
short-term applications um a lot of them

01:08:28 --> 01:08:33
have been um trying to automate things

01:08:30 --> 01:08:35
that people can do uh really especially

01:08:32 --> 01:08:38
people can do in a very short time and

01:08:34 --> 01:08:39
this feeds into all the advantages

01:08:37 --> 01:08:41
you know when when you're trying to

01:08:38 --> 01:08:45
automate something that the human can

01:08:40 --> 01:08:45
already do

01:08:47 --> 01:08:52
um oh I see oh that's inter observation

01:08:50 --> 01:08:53
oh if a human can label in less than a

01:08:51 --> 01:08:57
second you can get a lot of data yeah

01:08:52 --> 01:08:59
that's observation cool yeah right um

01:08:56 --> 01:09:01
and then I think another one the the

01:08:58 --> 01:09:02
other huge bucket of deep learning

01:09:00 --> 01:09:07
applications that I've seen create tons

01:09:01 --> 01:09:07
of value is um uh predicting

01:09:08 --> 01:09:16
outcome of the

01:09:11 --> 01:09:16
next uh in sequence of

01:09:15 --> 01:09:20
events right um but so you know if

01:09:18 --> 01:09:23
there's something that happens over and

01:09:19 --> 01:09:24
over such as you know maybe not super

01:09:22 --> 01:09:27
inspiring we show a user an act right

01:09:23 --> 01:09:28
hat happens a lot uh uh and and the

01:09:26 --> 01:09:30
user clicks on it or doesn't click on it

01:09:27 --> 01:09:31
with tons of data to predict if the user

01:09:29 --> 01:09:34
will click on the next app probably most

01:09:31 --> 01:09:37
lucrative application AI de leading

01:09:33 --> 01:09:38
today or you know by do we run a food

01:09:36 --> 01:09:40
elivery service so we're seen a lot of

01:09:37 --> 01:09:42
data of if you order food from this

01:09:39 --> 01:09:43
restaurant to go to this destination at

01:09:41 --> 01:09:45
his time of day how long does it take

01:09:42 --> 01:09:47
we've seen that a ton of times very good

01:09:44 --> 01:09:49
at predicting if you order food how long

01:09:46 --> 01:09:51
will take to to to to send this food to

01:09:48 --> 01:09:53
you so I feel like I don't know I you

01:09:50 --> 01:09:55
know deep learning does so much stuff so

01:09:52 --> 01:09:56
I've struggled a bit to come up with

01:09:54 --> 01:09:58
simple rules explained

01:09:55 --> 01:10:00
to to Really to product managers right

01:09:57 --> 01:10:03
how to design around it I found these

01:09:59 --> 01:10:04
two rules useful even though I know

01:10:02 --> 01:10:07
these are clearly highly FAA and there

01:10:03 --> 01:10:10
are many many counter examples right um

01:10:06 --> 01:10:12
so I think let's see um say it's

01:10:10 --> 01:10:14
exciting find for deep learning because

01:10:11 --> 01:10:16
I think it's letting us do a lot of

01:10:13 --> 01:10:18
interesting things it's also causing us

01:10:15 --> 01:10:19
to rethink how we organize a companies

01:10:17 --> 01:10:21
like build a systems team next an AI

01:10:18 --> 01:10:23
team how we the work for for process for

01:10:20 --> 01:10:26
for for a product so I think there's

01:10:22 --> 01:10:29
a lot of excitement going on um the last

01:10:25 --> 01:10:32
hing I want to do is um you know I

01:10:28 --> 01:10:34
found that the number one question I get

01:10:31 --> 01:10:37
asked is

01:10:33 --> 01:10:41
um uh how do you build a career in

01:10:37 --> 01:10:43
machine learning right and I think um

01:10:40 --> 01:10:46
you know when I when I did a Reddit ask

01:10:42 --> 01:10:48
me anything a Reddit AMA that was one of

01:10:45 --> 01:10:50
the questions that was asked even today

01:10:47 --> 01:10:51
a few people came up to me and said you

01:10:49 --> 01:10:53
know taking a machine learning course

01:10:50 --> 01:10:55
the machine learning cero or something

01:10:52 --> 01:10:57
else um what advice do you have for

01:10:54 --> 01:10:59
building a career in machine learning I

01:10:56 --> 01:11:01
have to admit I I don't have an amazing

01:10:58 --> 01:11:03
answer to that but since I get asked

01:11:00 --> 01:11:05
that so often and because I really want

01:11:02 --> 01:11:07
o think what would be the most useful

01:11:04 --> 01:11:09
content to you I I I thought I'll at

01:11:06 --> 01:11:11
least attempt an answer even though it

01:11:08 --> 01:11:13
is maybe not a great one right so this

01:11:10 --> 01:11:16
the last thing I had uh at the start

01:11:12 --> 01:11:19
which is the kind of personal advice um

01:11:15 --> 01:11:22
you know I think that um I was asking

01:11:18 --> 01:11:23
myself this same question uh uh uh like

01:11:21 --> 01:11:25
a couple months ago right which is you

01:11:22 --> 01:11:26
know after you've taken a machine

01:11:24 --> 01:11:29
learning course

01:11:25 --> 01:11:32
um what's the next step for um

01:11:28 --> 01:11:35
developing your machine learning career

01:11:31 --> 01:11:37
and at that time I thought um the best

01:11:34 --> 01:11:38
hing would be if you attend deep

01:11:36 --> 01:11:41
learning

01:11:37 --> 01:11:44
school so so so Sammy Peter and I got

01:11:40 --> 01:11:46
ogether to do this I hope um this is

01:11:43 --> 01:11:48
really part of motivation um and then

01:11:45 --> 01:11:50
beyond that right what what are

01:11:47 --> 01:11:53
the things that that that really help um

01:11:49 --> 01:11:54
so I do have had actually I think all of

01:11:52 --> 01:11:56
our organizations we've had quite a lot

01:11:53 --> 01:11:58
of people want to move from non-machine

01:11:55 --> 01:12:01
learning into machine learning and when

01:11:57 --> 01:12:03
I look at the career paths um you know

01:12:00 --> 01:12:06
one common thing is after taking these

01:12:02 --> 01:12:07
courses to work on a project by yourself

01:12:05 --> 01:12:09
right I've seen I have a lot of respect

01:12:06 --> 01:12:11
for kago a lot of people actually pass

01:12:08 --> 01:12:12
in kago and learn from the blogs there

01:12:10 --> 01:12:14
and then and then become better and

01:12:11 --> 01:12:15
better at it um but I want to share with

01:12:13 --> 01:12:17
you one other thing I haven't really

01:12:14 --> 01:12:18
shared oh by the way almost everything I

01:12:16 --> 01:12:20
talked about today is is is new content

01:12:17 --> 01:12:23
hat I've never presented before right

01:12:19 --> 01:12:27
so so I I don't know as I hope it worked

01:12:22 --> 01:12:27
okay thank you

01:12:26 --> 01:12:32
thank

01:12:27 --> 01:12:34
you so I want to share of you really the

01:12:31 --> 01:12:38
I want to think of is a PhD student

01:12:33 --> 01:12:41
process right which is you know a lot of

01:12:37 --> 01:12:42
um uh uh people really when I was

01:12:40 --> 01:12:44
teaching full-time at Stanford a lot of

01:12:41 --> 01:12:46
people joined Stanford and ask me you

01:12:43 --> 01:12:48
know how do I become a machine learning

01:12:45 --> 01:12:50
researcher how do I have my own ideas on

01:12:47 --> 01:12:53
how to push the bleeding edge of machine

01:12:49 --> 01:12:55
learning and um whether you know you're

01:12:52 --> 01:12:58
working robotics or machine learning or

01:12:54 --> 01:13:00
something else right there's one PhD

01:12:57 --> 01:13:04
student process that I find has been

01:12:59 --> 01:13:06
incredibly reliable um and um and and

01:13:03 --> 01:13:08
I'm going to say it and you may or may

01:13:05 --> 01:13:10
not trust it but I've seen this work so

01:13:07 --> 01:13:12
Rel livly so many times that I hope you

01:13:09 --> 01:13:14
take my word for it that this process

01:13:11 --> 01:13:17
reliably turns non-machine learning

01:13:13 --> 01:13:19
researchers into you know I very good

01:13:16 --> 01:13:21
machine learning researchers which is um

01:13:18 --> 01:13:22
and there's no magic really read a lot

01:13:20 --> 01:13:27
of

01:13:21 --> 01:13:30
papers and work on replicating results

01:13:26 --> 01:13:33
right and I think that the human brain

01:13:29 --> 01:13:35
is a remarkable device you know people

01:13:32 --> 01:13:37
often ask me how do you have new ideas

01:13:34 --> 01:13:39
and I find that um if you read enough

01:13:36 --> 01:13:41
papers and replicate enough results you

01:13:38 --> 01:13:43
will have new ideas on how to push for

01:13:40 --> 01:13:44
this daily art right I I I don't know

01:13:42 --> 01:13:47
how the I don't really I don't know how

01:13:44 --> 01:13:49
the human brain works but I've seen this

01:13:46 --> 01:13:52
be an incredibly reliable process read

01:13:48 --> 01:13:54
enough papers and you know between 20

01:13:51 --> 01:13:56
and 50 papers later and it's not one or

01:13:53 --> 01:13:57
two it's more like 20 or maybe 50 you

01:13:55 --> 01:13:59
will start to have your own ideas and

01:13:56 --> 01:14:01
this has been see see sami's nodding his

01:13:58 --> 01:14:03
head this is an incredibly reliable

01:14:00 --> 01:14:07
process right and then my other piece of

01:14:02 --> 01:14:11
advice is um so sometimes people ask me

01:14:06 --> 01:14:12
what work in AI is like and I think some

01:14:10 --> 01:14:15
people have this picture that when we

01:14:11 --> 01:14:17
work on AI you know at BYU or Google

01:14:14 --> 01:14:19
open AI or whatever I think some people

01:14:16 --> 01:14:24
have this picture of us hanging out in

01:14:18 --> 01:14:26
these um Airy you know well-lit rooms

01:14:23 --> 01:14:28
with natural plant in the background and

01:14:25 --> 01:14:30
we're all standing in front of a

01:14:27 --> 01:14:32
whiteboard discussing the future of

01:14:29 --> 01:14:36
humanity

01:14:32 --> 01:14:38
right and all of you know working on AI

01:14:35 --> 01:14:42
is not like that frankly almost all we

01:14:37 --> 01:14:42
do is Dirty Work

01:14:41 --> 01:14:47
right so one place that I've seen people

01:14:44 --> 01:14:50
get tripped up is when they think

01:14:46 --> 01:14:53
working on AI is that future of humanity

01:14:49 --> 01:14:55
stuff and shy away from the dirty work

01:14:52 --> 01:14:56
um and Dirty Work means anything from

01:14:54 --> 01:14:59
going on The Intern internet and

01:14:55 --> 01:15:01
ownloading data and cleaning data or

01:14:58 --> 01:15:02
downloading a piece of code and tuning

01:15:00 --> 01:15:04
parameters to see what happens or

01:15:01 --> 01:15:06
debugging your stack Trace to figure out

01:15:03 --> 01:15:08
why this silly thing you know overflowed

01:15:05 --> 01:15:11
or optimizing the database or hacking a

01:15:07 --> 01:15:12
GPU kernel to make it faster um or

01:15:10 --> 01:15:14
eading a paper and struggling to

01:15:11 --> 01:15:17
replicate the result um at the end a lot

01:15:13 --> 01:15:19
of what we do comes down to Dirty Work

01:15:16 --> 01:15:22
and yes there are moments of inspiration

01:15:18 --> 01:15:24
but I've seen people really stall if

01:15:21 --> 01:15:26
they refuse to get into the dirty work

01:15:23 --> 01:15:28
so my advice to you is

01:15:25 --> 01:15:30
um and and actually another another

01:15:27 --> 01:15:32
place I've seen people stall is if they

01:15:29 --> 01:15:34
only do dirty work then then you can

01:15:31 --> 01:15:37
become great at data cleaning but but

01:15:33 --> 01:15:39
not also not become better and better at

01:15:36 --> 01:15:41
having your own moments of inspiration

01:15:38 --> 01:15:43
so one of the most reliable formulas

01:15:40 --> 01:15:45
I've seen is really if you do both of

01:15:42 --> 01:15:46
these you know dig into the Dirty Work

01:15:44 --> 01:15:48
like if if your if your if your team

01:15:45 --> 01:15:50
needs you to do some dirty work just go

01:15:47 --> 01:15:53
and do it but in parallel read a lot of

01:15:49 --> 01:15:54
papers and I think the combination of

01:15:52 --> 01:15:57
these two is the most reliable formula

01:15:54 --> 01:16:00
I've seen for producing great

01:15:56 --> 01:16:00
researches

01:15:59 --> 01:16:08
right so um I want to close with uh uh

01:16:03 --> 01:16:10
uh uh just one more story about

01:16:07 --> 01:16:12
his and I guess some of you may have

01:16:09 --> 01:16:15
heard me talk about the the the the

01:16:11 --> 01:16:16
Saturday story right but um for those of

01:16:14 --> 01:16:18
you that want to advance your career and

01:16:15 --> 01:16:21
machine learning um you know next

01:16:17 --> 01:16:23
weekend you have a choice right um next

01:16:20 --> 01:16:27
weekend you can either stay at home and

01:16:22 --> 01:16:30
watch TV uh or or or or or or you could

01:16:26 --> 01:16:31
o this right and it turns out this is

01:16:29 --> 01:16:33
much harder and then no short-term

01:16:30 --> 01:16:35
rewards are doing this right if next

01:16:32 --> 01:16:37
weekend I think this weekend you guys

01:16:34 --> 01:16:41
are all doing great

01:16:36 --> 01:16:43
um um but next weekend if you spend next

01:16:40 --> 01:16:45
weekend studying reading papers refering

01:16:42 --> 01:16:46
results there are no short-term rewards

01:16:44 --> 01:16:48
if you go to work the following Monday

01:16:45 --> 01:16:49
our boss doesn't know what you did your

01:16:47 --> 01:16:51
peers didn't know what you did no one's

01:16:49 --> 01:16:53
going to patch you on the back and say

01:16:50 --> 01:16:55
good job you spend all weekend studying

01:16:52 --> 01:16:57
um and realistically after working

01:16:54 --> 01:16:59
really really hard next weekend you're

01:16:56 --> 01:17:01
not actually that much better you're

01:16:58 --> 01:17:03
barely any better at your job so there's

01:17:00 --> 01:17:06
pretty much no reward for working really

01:17:02 --> 01:17:08
hot all the next weekend um but I

01:17:05 --> 01:17:10
think the secret to to to to advancing

01:17:07 --> 01:17:12
your career is this if you do this not

01:17:09 --> 01:17:14
just for one weekend but do this for

01:17:11 --> 01:17:17
weekend after weekend for a year you

01:17:13 --> 01:17:18
will become really good at this in fact

01:17:16 --> 01:17:21
almost every well everyone I've worked

01:17:17 --> 01:17:23
with at Stanford that that that that was

01:17:20 --> 01:17:25
close and became great at at at this you

01:17:22 --> 01:17:27
know everyone actually including me on a

01:17:24 --> 01:17:29
gr we all spent late nights you know

01:17:26 --> 01:17:31
hunched over like a neuronet tuning

01:17:28 --> 01:17:33
hyper parameters trying to figure out

01:17:30 --> 01:17:34
why it wasn't working and it was that

01:17:32 --> 01:17:37
process of doing this not just one

01:17:33 --> 01:17:40
weekend but weekend after weekend that

01:17:36 --> 01:17:42
um that that allow all of us really to

01:17:39 --> 01:17:44
to our brains neuron networks to

01:17:41 --> 01:17:46
learn the patterns that that that taught

01:17:43 --> 01:17:48
us how to do this um so I hope that you

01:17:45 --> 01:17:50
know even after this weekend you keep on

01:17:47 --> 01:17:51
uh spending the time to keep learning

01:17:49 --> 01:17:53
because I promise that if you do this

01:17:50 --> 01:17:56
for long enough you will become really

01:17:52 --> 01:17:58
good at Deep learning um so just

01:17:55 --> 01:18:00
o wrap up you know I'm super excited

01:17:57 --> 01:18:03
about AI uh been making this analogy

01:17:59 --> 01:18:05
that AI is the new electricity right and

01:18:02 --> 01:18:08
what I mean is that just as a 100

01:18:04 --> 01:18:09
years ago um electricity transformed

01:18:07 --> 01:18:12
industry after industry right

01:18:08 --> 01:18:13
electricity transformed your agriculture

01:18:11 --> 01:18:16
manufacturing Transportation

01:18:12 --> 01:18:18
Communications um I feel like those of

01:18:15 --> 01:18:21
you that are familiar with AI are now in

01:18:17 --> 01:18:22
a amazing position to guard and

01:18:20 --> 01:18:26
transform not just one industry but

01:18:21 --> 01:18:29
potentially a ton of Industries so um I

01:18:25 --> 01:18:31
guess at at at at BYU I have a fun job

01:18:28 --> 01:18:34
trying to transform not just one

01:18:30 --> 01:18:38
industry but multiple Industries but um

01:18:33 --> 01:18:40
I see that uh you know it's very rare in

01:18:37 --> 01:18:43
the history of in in in human history

01:18:39 --> 01:18:46
where one person where someone like you

01:18:42 --> 01:18:48
can gain the skills and do the work to

01:18:45 --> 01:18:50
have such a huge impact on society um I

01:18:47 --> 01:18:52
think in Silicon value the phrase change

01:18:49 --> 01:18:54
the world is overused right you know

01:18:51 --> 01:18:55
every every stand fit undergrass says I

01:18:53 --> 01:18:57
want to change the world but for those

01:18:54 --> 01:18:59
of you that work in AI I think that the

01:18:56 --> 01:19:01
path from what you do to actually having

01:18:58 --> 01:19:02
a big impact on a lot of people and

01:19:00 --> 01:19:04
helping a lot of people in

01:19:01 --> 01:19:06
transportation and healthare and

01:19:03 --> 01:19:09
Logistics and whatever is actually

01:19:05 --> 01:19:12
becoming clearer and clearer so so I

01:19:08 --> 01:19:13
hope that all of you will you know uh uh

01:19:11 --> 01:19:16
keep working hard even after this

01:19:13 --> 01:19:20
weekend and and go do a bunch of cool

01:19:15 --> 01:19:34
stuff for Humanity thank you

01:19:19 --> 01:19:34
[Applause]

01:19:33 --> 01:19:39
thank

01:19:35 --> 01:19:41
you thank

01:19:38 --> 01:19:43
you do we make any announcement Sho

01:19:40 --> 01:19:45
we're running super late so I'll be

01:19:42 --> 01:19:46
around later in F okay so let's break

01:19:44 --> 01:19:50
for today and look forward to seeing

01:19:45 --> 01:19:50
everyone tomorrow thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
