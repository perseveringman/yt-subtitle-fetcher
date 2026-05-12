---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "4zrU54VIK6k"
title: "Privacy Preserving AI (Andrew Trask) | MIT Deep Learning Series"
video_url: "https://www.youtube.com/watch?v=4zrU54VIK6k"
thumbnail_url: "https://i.ytimg.com/vi/4zrU54VIK6k/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=4zrU54VIK6k"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-01-19T18:18:52.000Z"
upload_date: "2020-01-19"
duration_seconds: 4431
duration_human: "1:13:51"
view_count: 77761
like_count: 1928
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:56:16.519Z"
---

# Privacy Preserving AI (Andrew Trask) | MIT Deep Learning Series

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=4zrU54VIK6k
- video_id: 4zrU54VIK6k
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-01-19T18:18:52.000Z
- upload_date: 2020-01-19
- duration: 1:13:51
- view_count: 77761
- like_count: 1928
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Lecture by Andrew Trask in January 2020, part of the MIT Deep Learning Lecture Series.

Website: https://deeplearning.mit.edu
Slides: http://bit.ly/38jzide
Playlist: http://bit.ly/deep-learning-playlist

LINKS:
Andrew Twitter: https://twitter.com/iamtrask
OpenMined: https://www.openmined.org/
Grokking Deep Learning (book): http://bit.ly/2RsxlUZ

OUTLINE:
0:00 - Introduction
0:54 - Privacy preserving AI talk overview
1:28 - Key question: Is it possible to answer questions using data we cannot see?
5:56 - Tool 1: remote execution
8:44 - Tool 2: search and example data
11:35 - Tool 3: differential privacy
28:09 - Tool 4: secure multi-party computation
36:37 - Federated learning
39:55 - AI, privacy, and society
46:23 - Open data for science
50:35 - Single-use accountability
54:29 - End-to-end encrypted services
59:51 - Q&A: privacy of the diagnosis
1:02:49 - Q&A: removing bias from data when data is encrypted
1:03:40 - Q&A: regulation of privacy
1:04:27 - Q&A: OpenMined
1:06:16 - Q&A: encryption and nonlinear functions
1:07:53 - Q&A: path to adoption of privacy-preserving technology
1:11:44 - Q&A: recommendation systems

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
today we were happy very happy to have

00:00:02 --> 00:00:10
Andrew Trask he's a brilliant writer

00:00:05 --> 00:00:12
esearcher tweeter that's a word in the

00:00:09 --> 00:00:14
world of machine learning and artificial

00:00:11 --> 00:00:17
intelligence he is the author of

00:00:13 --> 00:00:20
grokking deep learning the book that I

00:00:16 --> 00:00:21
highly recommended in the lecturer on

00:00:19 --> 00:00:24
Monday

00:00:20 --> 00:00:26
he's the leader in creator of open mind

00:00:23 --> 00:00:29
which is an open source community that

00:00:25 --> 00:00:31
strives to make our algorithms our data

00:00:28 --> 00:00:32
nd our world in general more

00:00:30 --> 00:00:36
privacy-preserving

00:00:31 --> 00:00:38
he is coming to us by way of Oxford but

00:00:35 --> 00:00:40
without that rich complex beautiful

00:00:37 --> 00:00:43
sophisticated British accent

00:00:39 --> 00:00:45
unfortunately he is one of the best

00:00:42 --> 00:00:47
educators and truly one of the nicest

00:00:44 --> 00:00:49
people I know so please give him a warm

00:00:46 --> 00:00:49
welcome

00:00:51 --> 00:00:55
thanks those very a generous

00:00:53 --> 00:00:56
introduction

00:00:54 --> 00:00:58
so yeah today we're going to be talking

00:00:55 --> 00:01:00
about privacy preserving AI this talks

00:00:57 --> 00:01:01
can kind of come in in two parts so the

00:00:59 --> 00:01:04
first it's going to be looking at sort

00:01:00 --> 00:01:06
of privacy tools from the context of a

00:01:03 --> 00:01:09
data scientist or a researcher like how

00:01:05 --> 00:01:10
their actual UX might change because I

00:01:08 --> 00:01:11
think that's sort of the best way to

00:01:09 --> 00:01:13
communicate some of the new technologies

00:01:10 --> 00:01:14
that are that are coming about in that

00:01:12 --> 00:01:16
context and then we're going to zoom out

00:01:13 --> 00:01:17
and look at under the assumption that

00:01:15 --> 00:01:21
hese kinds of technologies become

00:01:16 --> 00:01:22
mature what is that going to do to kind

00:01:20 --> 00:01:24
of society like what sort of

00:01:21 --> 00:01:27
consequences or side effects could could

00:01:23 --> 00:01:29
these kind of tools have both positive

00:01:26 --> 00:01:32
and they give so first let's ask the

00:01:28 --> 00:01:34
question is it possible to answer

00:01:31 --> 00:01:35
questions using data that we cannot see

00:01:33 --> 00:01:40
this is going to be the key question

00:01:34 --> 00:01:41
that we look at today and let's let's

00:01:39 --> 00:01:42
tart with an example so first if we

00:01:40 --> 00:01:46
wanted to answer the question what do

00:01:41 --> 00:01:47
tumors look like in humans well this is

00:01:45 --> 00:01:48
pretty complex question

00:01:46 --> 00:01:51
you know tumors are pretty complicated

00:01:47 --> 00:01:53
things so we might train a classifier if

00:01:50 --> 00:01:55
we wanted to do that we would first need

00:01:52 --> 00:01:57
to download a data set of tumor related

00:01:54 --> 00:01:58
images right so we build sophistic we

00:01:56 --> 00:02:00
start these and be able to recognize

00:01:57 --> 00:02:02
what tumors look like in in humans but

00:01:59 --> 00:02:02
his kind of data is not very easy to

00:02:01 --> 00:02:05
come by

00:02:01 --> 00:02:07
right so it's it's very rarely that it's

00:02:04 --> 00:02:09
collected it's kind of difficult to move

00:02:06 --> 00:02:10
around highly regulated and so we're

00:02:08 --> 00:02:13
probably going to buy it from a

00:02:09 --> 00:02:15
relatively small number of sources that

00:02:12 --> 00:02:17
are able to actually

00:02:14 --> 00:02:19
and managed this kind of information the

00:02:16 --> 00:02:20
scarcity and in sort of constraints

00:02:18 --> 00:02:23
around this likely to make this a

00:02:19 --> 00:02:24
relatively expensive purchase and if

00:02:22 --> 00:02:25
it's going to be an expensive purchase

00:02:23 --> 00:02:26
for us to answer this question well then

00:02:24 --> 00:02:27
we're going to find someone to sort of

00:02:25 --> 00:02:28
inance our project and if we need

00:02:26 --> 00:02:30
someone to finance a project we have to

00:02:27 --> 00:02:31
come up with a way of how

00:02:29 --> 00:02:32
e're going to pay them back

00:02:30 --> 00:02:34
I'm ready create a business plan and

00:02:31 --> 00:02:35
have to find a business partner I'm

00:02:33 --> 00:02:36
gonna find a business partner we have to

00:02:34 --> 00:02:37
span all our classmates in LinkedIn

00:02:35 --> 00:02:39
you're looking for someone to start a

00:02:36 --> 00:02:40
business with us right now is because we

00:02:38 --> 00:02:43
wanted to answer the question what do

00:02:39 --> 00:02:45
tumors look like in humans what if we

00:02:42 --> 00:02:47
want to answer a different question what

00:02:44 --> 00:02:50
if we wanted to answer the question what

00:02:46 --> 00:02:51
do handwritten digits look like well

00:02:49 --> 00:02:56
this would be a totally different story

00:02:50 --> 00:02:58
right we download the data set we

00:02:55 --> 00:03:00
download a state-of-the-art training

00:02:57 --> 00:03:02
script from github we'd run it and a few

00:02:59 --> 00:03:03
minutes later we have you know a ability

00:03:01 --> 00:03:05
to classify handwritten digits with

00:03:02 --> 00:03:10
potentially superhuman ability right if

00:03:04 --> 00:03:12
such a thing exists and why is this so

00:03:09 --> 00:03:14
different between these two questions

00:03:11 --> 00:03:15
the reason is it getting access to

00:03:13 --> 00:03:21
private data data about people was

00:03:14 --> 00:03:23
really really hard and as a result we

00:03:20 --> 00:03:24
spend most of our time working on

00:03:22 --> 00:03:27
problems and tasks like this

00:03:23 --> 00:03:29
o imagine a and s if R 10 anybody's

00:03:26 --> 00:03:30
trained a classifier on M this before

00:03:28 --> 00:03:36
raise your hand

00:03:29 --> 00:03:37
I expect pretty much everybody instead

00:03:35 --> 00:03:39
of working on problems like this does

00:03:36 --> 00:03:48
anyone trying to cause fire to predict

00:03:38 --> 00:03:54
dementia diabetes Alzheimer's like is

00:03:47 --> 00:03:54
he going depression anxiety no one so

00:03:53 --> 00:03:58
why is it that we spend all our time on

00:03:55 --> 00:04:00
tests like this when these tasks these

00:03:57 --> 00:04:02
represent you know our our friends loved

00:03:59 --> 00:04:04
ones and problems in society that really

00:04:01 --> 00:04:06
matter not to say that there are

00:04:03 --> 00:04:07
people working on this it's absolutely

00:04:05 --> 00:04:09
ou know there are there whole fields

00:04:06 --> 00:04:10
dedicated to it but but sort of the

00:04:08 --> 00:04:14
machine learning community at large

00:04:09 --> 00:04:17
these tasks are pretty inaccessible in

00:04:13 --> 00:04:19
fact in order to work on one of these

00:04:16 --> 00:04:20
just getting access to the data you'd

00:04:18 --> 00:04:22
have to dedicate like a portion of your

00:04:19 --> 00:04:23
life just to getting access to it

00:04:21 --> 00:04:26
whether it's you know doing a start-up

00:04:22 --> 00:04:28
or or you know joining a hospital or or

00:04:25 --> 00:04:29
what-have-you whereas for other kinds of

00:04:27 --> 00:04:32
data

00:04:28 --> 00:04:34
they're just simply readily accessible

00:04:31 --> 00:04:36
this brings us back to our question is

00:04:33 --> 00:04:42
it possible to answer questions using

00:04:35 --> 00:04:43
data that we cannot see so in this talk

00:04:41 --> 00:04:46
we're gonna walk through a few different

00:04:42 --> 00:04:49
echniques and if the answer to this

00:04:45 --> 00:04:51
question is yes the combination of these

00:04:48 --> 00:04:53
techniques so we try to make it so that

00:04:50 --> 00:04:55
we can actually pip install access to

00:04:52 --> 00:04:57
data sets like these in the same way

00:04:54 --> 00:04:59
that we Pittman still access to other

00:04:56 --> 00:05:00
deep learning tools and the idea here is

00:04:58 --> 00:05:02
to lower the barrier to entry to

00:04:59 --> 00:05:03
increase the accessibility to some of

00:05:01 --> 00:05:08
the most important problems that we

00:05:02 --> 00:05:10
would like to address so as as Lex

00:05:07 --> 00:05:11
mentioned I lead a community called open

00:05:09 --> 00:05:14
mind which is an open source community

00:05:10 --> 00:05:15
of a little over six thousand people who

00:05:13 --> 00:05:16
are focused on sort of lowering the

00:05:14 --> 00:05:19
barrier to entry to privacy preserving

00:05:15 --> 00:05:20
AI machine learning specifically one of

00:05:18 --> 00:05:22
the tools they're working on we're

00:05:19 --> 00:05:25
talking about today is called PI seft pi

00:05:21 --> 00:05:26
sift extends the major deep learning

00:05:24 --> 00:05:27
frameworks with the ability to do

00:05:25 --> 00:05:28
privacy-preserving machine learning so

00:05:26 --> 00:05:30
specifically today we're gonna be

00:05:27 --> 00:05:31
looking at the extensions into pi torch

00:05:29 --> 00:05:37
so if pi torch people will turn on a

00:05:30 --> 00:05:39
torch yeah quite a few users and it's my

00:05:36 --> 00:05:44
hope that by walking through a few these

00:05:38 --> 00:05:46
tools it'll become sort of clear how we

00:05:43 --> 00:05:47
can start to be able to do sort of data

00:05:45 --> 00:05:49
science the act of sort of answering

00:05:46 --> 00:05:51
questions using data using data that we

00:05:48 --> 00:05:53
don't actually have direct access to

00:05:50 --> 00:05:54
right and then on the second half of the

00:05:52 --> 00:05:56
talk we're going to generalize this to

00:05:53 --> 00:05:58
answering questions even if you're not

00:05:55 --> 00:05:59
necessarily a data scientist so

00:05:57 --> 00:06:01
first first tool is remote execution

00:05:58 --> 00:06:04
okay so let's just uh walk walk me

00:06:00 --> 00:06:05
through this so we're a jump into code

00:06:03 --> 00:06:07
for a minute but hopefully this is sort

00:06:04 --> 00:06:07
of line by line and relatively simple

00:06:06 --> 00:06:09
and even if you are from there at PI

00:06:06 --> 00:06:11
torch I think it's relatively intuitive

00:06:08 --> 00:06:13
looking at like lists of numbers and

00:06:10 --> 00:06:14
these kinds of things so up at the top

00:06:12 --> 00:06:17
we import torch as a deep learning

00:06:13 --> 00:06:18
framework sift extends towards with this

00:06:16 --> 00:06:19
thing called torch hook all it's doing

00:06:17 --> 00:06:21
is just iterating through the library

00:06:18 --> 00:06:24
and basically monkey patching in lots of

00:06:20 --> 00:06:25
new functionality and most deep learning

00:06:23 --> 00:06:27
frameworks are built around one core

00:06:24 --> 00:06:29
primitive and that core primitive is the

00:06:26 --> 00:06:30
tensor right so you know and for those

00:06:28 --> 00:06:31
of you are don't know what tensors are

00:06:29 --> 00:06:33
just think of them as nested lists of

00:06:30 --> 00:06:36
numbers for now and and that'll be good

00:06:32 --> 00:06:37
enough for this this talk but for us we

00:06:35 --> 00:06:40
introduced a second core primitive which

00:06:36 --> 00:06:42
is the worker right and a worker is a

00:06:39 --> 00:06:44
location upon a within which computation

00:06:41 --> 00:06:46
is going to be occurring alright so in

00:06:43 --> 00:06:48
this case we have a virtualized worker

00:06:45 --> 00:06:50
that is that is pointing to say a

00:06:47 --> 00:06:52
hospital data center right and the

00:06:49 --> 00:06:54
assumption that we have is that this

00:06:51 --> 00:06:56
worker will allow us to run computation

00:06:53 --> 00:06:58
inside of the data center without us

00:06:55 --> 00:06:59
actually having direct access to that

00:06:57 --> 00:07:02
worker itself right it gives us a

00:06:58 --> 00:07:04
limited sort of whitelisted set of

00:07:01 --> 00:07:06
methods that we can use on this on this

00:07:03 --> 00:07:08
remote machine so just to give you

00:07:05 --> 00:07:10
example so there's that Corp I'm talked

00:07:07 --> 00:07:12
about a minute ago we have the torch

00:07:09 --> 00:07:14
tensor so one two one three four five

00:07:11 --> 00:07:16
and the first method that we added is

00:07:13 --> 00:07:18
called just dot scent right and it does

00:07:15 --> 00:07:20
exactly what you might expect it takes

00:07:17 --> 00:07:21
the tensor serializes it sends it into

00:07:19 --> 00:07:24
the hospital data center and returns

00:07:20 --> 00:07:25
back to me a pointer as pointer is

00:07:23 --> 00:07:26
really really special and for those of

00:07:24 --> 00:07:28
you actually familiar with deep learning

00:07:25 --> 00:07:29
frameworks I hope that this will just

00:07:27 --> 00:07:32
really resonate with you because it has

00:07:28 --> 00:07:35
the full PI torch API as a part of it

00:07:31 --> 00:07:36
but whenever you execute something using

00:07:34 --> 00:07:38
this pointer instead of it running

00:07:35 --> 00:07:40
locally even though it looks like and

00:07:37 --> 00:07:41
feels like it's running locally it

00:07:39 --> 00:07:44
actually executes on the remote machine

00:07:40 --> 00:07:47
and returns back to you another pointer

00:07:43 --> 00:07:49
to the result right the idea here being

00:07:46 --> 00:07:52
that I can now coordinate remote

00:07:48 --> 00:07:54
xecutions remote computations without

00:07:51 --> 00:07:56
but not necessarily having to have

00:07:53 --> 00:07:58
direct access to to the machine and of

00:07:55 --> 00:08:01
course I can get a get request and will

00:07:57 --> 00:08:02
see that this is actually really really

00:08:00 --> 00:08:03
important so getting permissions around

00:08:01 --> 00:08:05
when you can do get requests and

00:08:02 --> 00:08:07
actually ask for data from a remote

00:08:04 --> 00:08:10
machine back to you so just remember

00:08:06 --> 00:08:11
that cool so this is just this is where

00:08:09 --> 00:08:14
we start so in the kind of like the

00:08:10 --> 00:08:16
Pareto principle you know 80% for 20%

00:08:13 --> 00:08:19
this is like the the first big cut right

00:08:15 --> 00:08:21
so pros Dayna remains on a remote

00:08:18 --> 00:08:23
machine we can now in theory do data

00:08:20 --> 00:08:25
science on a machine that we don't have

00:08:22 --> 00:08:27
access to that we don't know right but

00:08:24 --> 00:08:29
he problem is the first first column we

00:08:26 --> 00:08:31
want to address is how can we actually

00:08:28 --> 00:08:32
do good data science without physically

00:08:30 --> 00:08:34
seeing the data all right so it's all

00:08:31 --> 00:08:36
well and good to say oh I'm gonna train

00:08:33 --> 00:08:37
a deep Loden classifier but but the

00:08:35 --> 00:08:39
process of answering questions is

00:08:36 --> 00:08:41
inherently iterative right it's

00:08:38 --> 00:08:42
inherently sort of sort of give-and-take

00:08:40 --> 00:08:43
and I learn a little bit and I ask a

00:08:41 --> 00:08:46
little bit I learn a little bit and I

00:08:42 --> 00:08:47
ask a little bit right this brings me

00:08:45 --> 00:08:49
the second tool so search an example

00:08:46 --> 00:08:51
data again we're starting really simple

00:08:48 --> 00:08:53
it will get more complex here in a

00:08:50 --> 00:08:55
minute so in this case let's say we have

00:08:52 --> 00:08:57
what's called a grid so PI grid if PI

00:08:54 --> 00:08:58
sift is a library at PI agree

00:08:56 --> 00:09:00
is sort of the platform version so it's

00:08:57 --> 00:09:03
ort of again this is all open source

00:08:59 --> 00:09:05
Apache to stuff this is we have what's

00:09:02 --> 00:09:08
called a grid client so this is this

00:09:04 --> 00:09:10
could be a interface to a large number

00:09:07 --> 00:09:13
of data sets inside of a big hospital

00:09:09 --> 00:09:14
right and so let's say I wanted to train

00:09:12 --> 00:09:16
a classifier to do something with

00:09:14 --> 00:09:18
diabetes right so it's mean to predict

00:09:15 --> 00:09:20
diabetes or predict certain kind

00:09:17 --> 00:09:23
iabetes or certain attributed diabetes

00:09:19 --> 00:09:26
right I should be able to perform remote

00:09:22 --> 00:09:29
search I get back pointers to throw the

00:09:25 --> 00:09:31
remote information I can get back sort

00:09:28 --> 00:09:32
of detailed descriptions of what the

00:09:30 --> 00:09:34
information is without me actually

00:09:31 --> 00:09:36
looking at it right so how it was

00:09:33 --> 00:09:38
collected what the rows and columns are

00:09:35 --> 00:09:40
what the types of different information

00:09:37 --> 00:09:42
is what the various ranges of the values

00:09:39 --> 00:09:43
can take on things that allow me to do

00:09:41 --> 00:09:46
sort of remote normalization these kinds

00:09:42 --> 00:09:47
of things and then in some cases even

00:09:45 --> 00:09:49
look at samples of this data so this

00:09:46 --> 00:09:51
these samples could be sort of human

00:09:48 --> 00:09:54
curated they could be generated from

00:09:50 --> 00:09:56
again they could be they could be

00:09:53 --> 00:09:58
actually you know short snippets from

00:09:55 --> 00:09:59
the actual data set and maybe it's okay

00:09:57 --> 00:10:02
to release small amounts but not large

00:09:58 --> 00:10:03
amounts and and the reason that I

00:10:01 --> 00:10:06
highlight this this isn't like crazy

00:10:02 --> 00:10:07
complex stuff so prior to going back to

00:10:05 --> 00:10:09
school I used to work for a company

00:10:06 --> 00:10:13
called digital reasoning we did sort of

00:10:08 --> 00:10:16
on-prem data science right so we did

00:10:13 --> 00:10:18
elivered sort of AI services to

00:10:15 --> 00:10:20
corporations behind the firewall so we

00:10:17 --> 00:10:21
did you know classified information we

00:10:19 --> 00:10:24
worked with investment banks you know

00:10:20 --> 00:10:25
helping prevent insider trading and and

00:10:23 --> 00:10:26
oing data science on data that like

00:10:24 --> 00:10:28
your home team you know back in

00:10:25 --> 00:10:30
Nashville and in our case it's not able

00:10:27 --> 00:10:32
to see is really really challenging but

00:10:29 --> 00:10:35
here are some things that that can give

00:10:31 --> 00:10:36
you sort of the first big jump before

00:10:34 --> 00:10:38
you jump into kind of the more complex

00:10:35 --> 00:10:38
tools to handle some of the more more

00:10:37 --> 00:10:41
challenging use cases

00:10:38 --> 00:10:45
cool so so basic Roman execution so

00:10:40 --> 00:10:46
remote PC recalls basic sort private

00:10:44 --> 00:10:48
search and the ability to kind of look

00:10:45 --> 00:10:50
at sample data gives us enough sort of

00:10:47 --> 00:10:51
general context to be able to just start

00:10:49 --> 00:10:54
doing sort of things like feature

00:10:50 --> 00:10:57
ngineering and evaluating quality okay

00:10:53 --> 00:10:58
so now the data remains the remote

00:10:56 --> 00:11:00
machine we can do some basic feature

00:10:57 --> 00:11:03
ngineering and here's where things get

00:10:59 --> 00:11:06
a little more complicated okay so if you

00:11:02 --> 00:11:08
remember in the very first slide where I

00:11:05 --> 00:11:10
show you some code at the bottom I call

00:11:07 --> 00:11:12
dot get on the tensor right

00:11:09 --> 00:11:14
and what that did was it took the

00:11:11 --> 00:11:16
pointer to promote information and said

00:11:13 --> 00:11:19
hey send that information to me that is

00:11:15 --> 00:11:23
an incredibly important bottleneck right

00:11:18 --> 00:11:24
and unfortunately despite the fact that

00:11:22 --> 00:11:26
I'm doing on my remote execution if

00:11:23 --> 00:11:27
that's just naively implemented well I

00:11:25 --> 00:11:29
can just steal all the data that I want

00:11:26 --> 00:11:31
o right I just called get him whatever

00:11:28 --> 00:11:33
pointers I want and I can and there's

00:11:30 --> 00:11:34
the sort of no additional added real

00:11:32 --> 00:11:36
security so what are we gonna do about

00:11:33 --> 00:11:38
his

00:11:35 --> 00:11:39
Springs it's a tool number three called

00:11:37 --> 00:11:41
ifferential privacy differential

00:11:38 --> 00:11:46
privacy

00:11:40 --> 00:11:46
little higher okay cool awesome good

00:11:47 --> 00:11:51
so I'm gonna do a quick high-level

00:11:49 --> 00:11:52
overview of the intuition of

00:11:50 --> 00:11:54
differential privacy and I'm gonna jump

00:11:51 --> 00:11:56
into how it could can can and is being

00:11:53 --> 00:11:57
is looking sort of in the code and I

00:11:55 --> 00:11:59
will give you resources for kind of

00:11:56 --> 00:12:01
deeper dive and difference for privacy

00:11:58 --> 00:12:04
at the end of the talk should you be

00:12:00 --> 00:12:06
interested so differential privacy

00:12:03 --> 00:12:08
loosely stated is a field that it allows

00:12:05 --> 00:12:10
you to do statistical analysis without

00:12:07 --> 00:12:12
compromising the privacy of the data set

00:12:09 --> 00:12:15
right so it more specifically it allows

00:12:11 --> 00:12:17
you to query a database right while

00:12:14 --> 00:12:19
making certain guarantees about the

00:12:16 --> 00:12:20
privacy of the other records contained

00:12:18 --> 00:12:22
within the database so let me show you

00:12:19 --> 00:12:23
what I mean let's say we have an example

00:12:21 --> 00:12:24
database and so this is kind of the

00:12:22 --> 00:12:26
canonical DB if you look in the

00:12:23 --> 00:12:28
literature for differential privacy

00:12:25 --> 00:12:30
it'll have sort of one row for person

00:12:27 --> 00:12:32
e more row per person and one column

00:12:29 --> 00:12:32
of zeros and ones which corresponds to

00:12:31 --> 00:12:34
true and false

00:12:31 --> 00:12:35
we don't actually really care what those

00:12:33 --> 00:12:37
zeros and ones are indicating you know

00:12:34 --> 00:12:39
it could be presence of a disease could

00:12:36 --> 00:12:40
be male-female could be it's just some

00:12:38 --> 00:12:44
sensitive attributes something

00:12:39 --> 00:12:46
that's that's worth protecting right now

00:12:43 --> 00:12:48
hat we're going to do is we're going to

00:12:45 --> 00:12:49
ur goal is to ensure as physical

00:12:47 --> 00:12:51
analysis doesn't compromise privacy what

00:12:48 --> 00:12:52
we're going to do is query this database

00:12:50 --> 00:12:55
right so we're gonna run some function

00:12:51 --> 00:12:56
over the entire database and we're going

00:12:54 --> 00:12:59
to look at the result and we're gonna

00:12:55 --> 00:13:03
sk a very important question we're

00:12:58 --> 00:13:09
going to ask if I were to remove someone

00:13:02 --> 00:13:13
from this database say John with the

00:13:08 --> 00:13:16
output of my function change okay and if

00:13:12 --> 00:13:18
the answer to that is no then

00:13:15 --> 00:13:20
intuitively we can we can we can say

00:13:17 --> 00:13:21
that well this this output is not

00:13:19 --> 00:13:23
conditioned on John's private

00:13:20 --> 00:13:25
information now if we could say that

00:13:22 --> 00:13:28
about everyone the Dave in the data day

00:13:24 --> 00:13:31
base right well then okay we would be a

00:13:27 --> 00:13:34
perfectly privacy-preserving query right

00:13:30 --> 00:13:35
but it might not be that useful but this

00:13:33 --> 00:13:37
intuitive definition I think is quite

00:13:34 --> 00:13:40
powerful right the notion of how can we

00:13:36 --> 00:13:42
construct queries that are invariant to

00:13:39 --> 00:13:45
removing someone or replacing them with

00:13:41 --> 00:13:48
someone else okay and the notion of the

00:13:44 --> 00:13:50
maximal amount that the output of a

00:13:47 --> 00:13:52
function can change as a result of

00:13:49 --> 00:13:54
removing or replacing one of the

00:13:51 --> 00:13:57
individuals is known as the sensitivity

00:13:54 --> 00:13:58
okay so important so if you're reading

00:13:56 --> 00:13:59
the literature you look you finds come

00:13:57 --> 00:14:00
across sensitivity that's been talking

00:13:58 --> 00:14:03
about

00:13:59 --> 00:14:05
so what do we do when we have a really

00:14:02 --> 00:14:08
sensitive function we're gonna take a

00:14:04 --> 00:14:11
bit of a sidestep for a minute I have a

00:14:07 --> 00:14:12
sister a twin sister who's finishing a

00:14:10 --> 00:14:16
PhD in political science and political

00:14:11 --> 00:14:19
science often they need to answer

00:14:15 --> 00:14:20
questions about very taboo behavior okay

00:14:18 --> 00:14:23
something that people are likely to lie

00:14:19 --> 00:14:24
about so let's say I wanted to survey

00:14:22 --> 00:14:28
everyone in this room and I wanted to

00:14:23 --> 00:14:30
answer the question what percentage of

00:14:27 --> 00:14:34
you are you know secretly serial killers

00:14:29 --> 00:14:36
right and not because like yeah

00:14:33 --> 00:14:38
not because I think any moment one of

00:14:35 --> 00:14:40
you are but because I genuinely want to

00:14:37 --> 00:14:41
understand this trend right I'm not

00:14:39 --> 00:14:45
rying to arrest people I'm not trying

00:14:40 --> 00:14:47
to sort of sort of be an instrument of

00:14:44 --> 00:14:48
the criminal justice system I'm trying

00:14:46 --> 00:14:49
to be you know sociologists or political

00:14:47 --> 00:14:51
scientist and understand this this

00:14:48 --> 00:14:53
actual trend the problem is if I sit

00:14:50 --> 00:14:54
down with each one of you in a private

00:14:52 --> 00:14:56
room and I say I promise I promise I

00:14:53 --> 00:14:57
won't tell anybody right I'm

00:14:55 --> 00:14:59
still going to get a skewed distribution

00:14:56 --> 00:15:02
right make me some people are just gonna

00:14:58 --> 00:15:04
be like why would I risk telling you

00:15:01 --> 00:15:05
this is this private information and so

00:15:03 --> 00:15:06
what what sociologists can do is this

00:15:04 --> 00:15:09
technique called randomized

00:15:05 --> 00:15:12
Response where I should about a coin you

00:15:08 --> 00:15:14
take a coin and you give it to each

00:15:11 --> 00:15:15
person before you survey them right and

00:15:13 --> 00:15:17
you've asked them to flip it twice

00:15:14 --> 00:15:19
somewhere that you cannot see so I would

00:15:16 --> 00:15:22
ask each one of you to flip a coin twice

00:15:18 --> 00:15:26
somewhere that I cannot see and then I

00:15:21 --> 00:15:31
would instruct you to if the first coin

00:15:25 --> 00:15:34
flip is a heads answer honestly but if

00:15:30 --> 00:15:37
the first coin flip is a tails

00:15:33 --> 00:15:40
answer yes or no based on the second

00:15:36 --> 00:15:43
coin flip okay so roughly half the time

00:15:39 --> 00:15:46
you'll be honest and the other half the

00:15:42 --> 00:15:49
time you'll be a you'll be giving me a

00:15:45 --> 00:15:50
perfect 50/50 coin flip and the cool

00:15:48 --> 00:15:52
thing is that what this is actually

00:15:49 --> 00:15:54
doing is taking whatever the true mean

00:15:51 --> 00:15:58
of the distribution is and averaging it

00:15:53 --> 00:16:01
with a 50/50 coin flip right so if say

00:15:57 --> 00:16:01
55 percent of you

00:16:01 --> 00:16:09
answered yes that that you are a serial

00:16:05 --> 00:16:10
killer then I know that the true center

00:16:08 --> 00:16:13
of the distribution is actually 60%

00:16:09 --> 00:16:15
because it was 60% average with a 50/50

00:16:12 --> 00:16:18
coin flip does that make sense however

00:16:14 --> 00:16:20
despite the fact that I can recover the

00:16:17 --> 00:16:23
center of the distribution right given

00:16:19 --> 00:16:25
ough samples each individual person

00:16:22 --> 00:16:27
has plausible deniability if you said

00:16:24 --> 00:16:29
yes it could have been because you

00:16:26 --> 00:16:31
actually are or it could have been

00:16:28 --> 00:16:34
because you just happen to flip a

00:16:30 --> 00:16:38
certain sequence of coin flips okay now

00:16:33 --> 00:16:40
this concept of adding noise to data to

00:16:37 --> 00:16:42
give plausible deniability is whether

00:16:39 --> 00:16:44
the secret weapon of differential

00:16:41 --> 00:16:48
privacy right and and the field itself

00:16:43 --> 00:16:49
is a set of mathematical proofs for

00:16:47 --> 00:16:51
trying to do this as efficiently as

00:16:48 --> 00:16:53
possible to give sort of the smallest

00:16:50 --> 00:16:56
amount of noise to get the most accurate

00:16:52 --> 00:16:58
results right with the best possible

00:16:55 --> 00:17:01
privacy protections right there is a

00:16:57 --> 00:17:04
meaningful sort of base trade-off that

00:17:00 --> 00:17:06
you you you you know you can escape

00:17:04 --> 00:17:07
there's kind of a Pareto trade-off right

00:17:05 --> 00:17:12
and we're trying to push that push that

00:17:06 --> 00:17:13
rade-off down but so the the the the

00:17:11 --> 00:17:14
field of research that is differential

00:17:12 --> 00:17:17
privacy

00:17:13 --> 00:17:20
is looking at how to add noise to data

00:17:16 --> 00:17:21
nd and resulting queries to give plaza

00:17:19 --> 00:17:24
deniability to the entrance to the

00:17:20 --> 00:17:25
members of it of a database or a

00:17:23 --> 00:17:27
training dataset does that make sense

00:17:24 --> 00:17:30
now

00:17:26 --> 00:17:31
a few terms you should be familiar with

00:17:29 --> 00:17:33
so there's local and there's global

00:17:30 --> 00:17:35
differential privacy so local

00:17:32 --> 00:17:38
differential privacy adds noise to data

00:17:34 --> 00:17:39
before it's sent to the statistician so

00:17:37 --> 00:17:41
in this case when with the coin flip

00:17:38 --> 00:17:43
this was local difference or privacy it

00:17:40 --> 00:17:45
afford you the best amount of protection

00:17:42 --> 00:17:47
because you never actually reveal sort

00:17:44 --> 00:17:49
of in the clear your information to sup

00:17:46 --> 00:17:51
to someone okay and then there's global

00:17:48 --> 00:17:52
differential privacy which says okay

00:17:50 --> 00:17:54
we're to put everything in the database

00:17:51 --> 00:17:56
perform a query and then before the

00:17:53 --> 00:17:57
output of the query gets published we're

00:17:55 --> 00:17:59
gonna add a little bit of noise to the

00:17:56 --> 00:18:01
output of the query okay this tends to

00:17:58 --> 00:18:02
have a much better privacy trade-off but

00:18:00 --> 00:18:04
you have to trust the database owner to

00:18:01 --> 00:18:05
not compromise the results okay and

00:18:03 --> 00:18:08
we'll see there's some other things we

00:18:04 --> 00:18:09
can do there but with me so far this is

00:18:07 --> 00:18:11
a good good point for questions if you

00:18:08 --> 00:18:14
had any questions got it so the question

00:18:10 --> 00:18:15
is is this verifiable they get any of

00:18:13 --> 00:18:17
this this process would

00:18:14 --> 00:18:19
under privacy verifiable so that is a

00:18:16 --> 00:18:23
fantastic question and one that actually

00:18:18 --> 00:18:24
absolutely comes up in practice so first

00:18:22 --> 00:18:26
local difference or privacy the nice

00:18:23 --> 00:18:28
thing is everyone's doing it for

00:18:25 --> 00:18:29
themself right so in that sense if

00:18:27 --> 00:18:30
you're flipping your own coins and

00:18:28 --> 00:18:32
answering your own questions

00:18:29 --> 00:18:34
that's not your verification right

00:18:31 --> 00:18:37
you're kind of trusting yourself for

00:18:33 --> 00:18:39
global differential privacy stay tuned

00:18:36 --> 00:18:41
for the next tool and we'll come back to

00:18:38 --> 00:18:45
that all right so what does this look

00:18:40 --> 00:18:47
like in code so first we have a pointer

00:18:44 --> 00:18:50
to remote private data set we call dot

00:18:46 --> 00:18:52
git whoa we get big fat error right you

00:18:49 --> 00:18:53
just asked to sort of see the raw value

00:18:51 --> 00:18:56
of some private data point which you

00:18:52 --> 00:18:57
cannot do right instead pass and get

00:18:55 --> 00:18:59
epsilon to add the appropriate ment of

00:18:56 --> 00:19:02
noise so one thing I haven't mentioned

00:18:58 --> 00:19:04
yet differential privacy so I mentioned

00:19:01 --> 00:19:06
sensitivity right so sensitivity was

00:19:03 --> 00:19:07
related to the type of query the type of

00:19:05 --> 00:19:09
unction that wanted to do and it's

00:19:06 --> 00:19:12
invariance to removing or replacing

00:19:08 --> 00:19:14
individual entries in the database so

00:19:11 --> 00:19:17
epsilon is a measure what we call our

00:19:13 --> 00:19:19
privacy budget all right and what our

00:19:16 --> 00:19:21
privacy budget is is saying okay what's

00:19:18 --> 00:19:22
the what's the amount of statistical

00:19:20 --> 00:19:24
uniqueness that I'm going to sort of

00:19:22 --> 00:19:25
limit what's the upper bound for the

00:19:23 --> 00:19:27
amount of systick --kw neatness that I'm

00:19:24 --> 00:19:28
going to allow to come out of this out

00:19:26 --> 00:19:30
of this database and actually I'm going

00:19:27 --> 00:19:32
to take one more size sidetrack here

00:19:29 --> 00:19:34
because I think it's really worth

00:19:31 --> 00:19:36
mentioning data anonymization anyone

00:19:33 --> 00:19:38
familiar with data anonymization come

00:19:35 --> 00:19:41
across this term before taking a

00:19:37 --> 00:19:42
document like redacting the the social

00:19:40 --> 00:19:45
security numbers and like all's kind of

00:19:41 --> 00:19:46
stuff by and large it does not work you

00:19:44 --> 00:19:49
don't remember anything else from this

00:19:45 --> 00:19:51
talk is very dangerous to do just data

00:19:48 --> 00:19:53
set anonymization okay and differential

00:19:50 --> 00:19:56
privacy in some respects is is the

00:19:52 --> 00:19:57
formal version of data automation we're

00:19:55 --> 00:19:59
instead of instead of just saying okay

00:19:56 --> 00:20:00
I'm just gonna redact out these pieces

00:19:58 --> 00:20:02
and then I'll be fine

00:19:59 --> 00:20:04
this is saying okay that we can do a lot

00:20:01 --> 00:20:05
better so for example Netflix prize

00:20:03 --> 00:20:08
Netflix machine-learning prize if you

00:20:04 --> 00:20:09
remember this a big million-dollar prize

00:20:07 --> 00:20:12
maybe some people in here competed in it

00:20:08 --> 00:20:15
so in this prize right

00:20:11 --> 00:20:18
Netflix published an anonymized data set

00:20:14 --> 00:20:20
right and that was movies and users

00:20:17 --> 00:20:21
right and they took all the movies and

00:20:19 --> 00:20:23
replaced them with numbers and it took

00:20:20 --> 00:20:24
all the users and replaced them with

00:20:22 --> 00:20:27
numbers and then we just had

00:20:23 --> 00:20:28
sparsely-populated movie ratings in this

00:20:26 --> 00:20:29
matrix right

00:20:27 --> 00:20:31
seemingly

00:20:28 --> 00:20:36
anonymous right there's no names of any

00:20:30 --> 00:20:40
kind but the problem is is that each row

00:20:35 --> 00:20:43
is statistically unique meaning it kind

00:20:39 --> 00:20:45
of is its own fingerprint and so two

00:20:42 --> 00:20:49
months after the data set with published

00:20:44 --> 00:20:53
some researchers at UT Austin I think it

00:20:48 --> 00:20:57
was I think it's UT Austin were able to

00:20:52 --> 00:21:00
go and scrape IMDB and basically create

00:20:56 --> 00:21:01
the same matrix and IMDB and then just

00:20:59 --> 00:21:03
compare the two and it turns out people

00:21:00 --> 00:21:06
that were in the movie rating we're in

00:21:02 --> 00:21:08
the movie rating and and and we're

00:21:05 --> 00:21:09
watching movies at similar times and

00:21:07 --> 00:21:11
similar similar patterns and similar

00:21:08 --> 00:21:13
tastes right and they will de anonymize

00:21:10 --> 00:21:15
this first dataset with high degree of

00:21:12 --> 00:21:17
accuracy happened again with there's a

00:21:14 --> 00:21:19
famous case of like medical records for

00:21:16 --> 00:21:20
like I think I'm I didn't bid a

00:21:18 --> 00:21:23
Massachusetts senator I think it was

00:21:19 --> 00:21:24
omeone north-east being dean Onam eyes

00:21:22 --> 00:21:26
through very similar techniques so

00:21:23 --> 00:21:28
meone person goes and buys a anonymize

00:21:25 --> 00:21:30
medical they said over here that has you

00:21:27 --> 00:21:32
know birth date and zip code and this

00:21:29 --> 00:21:34
one does zip code and and gender and

00:21:31 --> 00:21:35
this one does zip code gender and

00:21:33 --> 00:21:38
whether or not you have cancer right and

00:21:34 --> 00:21:41
when you get all these together you

00:21:38 --> 00:21:43
can start to sort of use the uniqueness

00:21:40 --> 00:21:45
and each one to relink it all back

00:21:42 --> 00:21:47
together i mean i this is so doable

00:21:44 --> 00:21:50
today to the extreme that i

00:21:46 --> 00:21:52
unfortunately no of companies whose

00:21:49 --> 00:21:55
business model is to buy anonymize

00:21:51 --> 00:21:56
datasets d anonymize them and sell

00:21:54 --> 00:21:59
market intelligence to insurance

00:21:55 --> 00:22:02
companies ooh right but it can be done

00:21:58 --> 00:22:05
okay and and the reason it can be done

00:22:01 --> 00:22:06
is that just because the data set that

00:22:04 --> 00:22:09
you are publishing and one that you are

00:22:05 --> 00:22:11
physically looking at doesn't seem like

00:22:08 --> 00:22:12
it has you know Social Security numbers

00:22:10 --> 00:22:15
tuff in it does that mean that there's

00:22:11 --> 00:22:16
enough unique statistical signal for it

00:22:14 --> 00:22:19
o be linked to something else and so

00:22:15 --> 00:22:21
when I say maximum out of epsilon

00:22:18 --> 00:22:24
is an upper bound on the

00:22:20 --> 00:22:26
statistical uniqueness that you're

00:22:23 --> 00:22:29
publishing in a data set right and so

00:22:25 --> 00:22:31
what what this tool represents is saying

00:22:28 --> 00:22:35
okay apply however much noise you need

00:22:30 --> 00:22:38
to given whatever computational graph

00:22:34 --> 00:22:41
led back to private data for this tensor

00:22:37 --> 00:22:43
ight to ensure that you know to put an

00:22:40 --> 00:22:45
upper bound on the potential for link

00:22:42 --> 00:22:48
tax right now if you said epsilon0 okay

00:22:44 --> 00:22:52
then that's that's saying effectively

00:22:47 --> 00:22:53
like there's the I'm only going to allow

00:22:51 --> 00:22:56
patterns that have occurred at least

00:22:52 --> 00:22:58
wice okay so meaning meaning two

00:22:55 --> 00:23:00
different people had this pattern and

00:22:57 --> 00:23:01
thus it's not unique to either one yes

00:22:59 --> 00:23:03
o what happens if you perform the query

00:23:00 --> 00:23:05
twice so the random noise would be reran

00:23:02 --> 00:23:07
demised and sent again and you're

00:23:04 --> 00:23:09
absolutely absolutely correct so this

00:23:06 --> 00:23:11
epsilon this is how much I'm spending

00:23:08 --> 00:23:13
with this query so if I ran this three

00:23:10 --> 00:23:15
times I would spend epsilon of 0.3 so it

00:23:12 --> 00:23:16
makes sense so this is a point 1 query

00:23:14 --> 00:23:19
if I did this multiple times the

00:23:15 --> 00:23:20
absalons put some and so for any given

00:23:18 --> 00:23:22
data science project right

00:23:19 --> 00:23:23
I should I we're advocating is that

00:23:21 --> 00:23:25
you're given an epsilon budget that

00:23:22 --> 00:23:27
you're not allowed to exceed right no

00:23:24 --> 00:23:27
matter how many queries that you you

00:23:26 --> 00:23:29
could say now there's that there's

00:23:26 --> 00:23:31
another sort of subfield of difference

00:23:28 --> 00:23:34
or privacy that's looking at sort of

00:23:30 --> 00:23:35
single query approaches which is all

00:23:33 --> 00:23:37
around synthetic data sets so how can I

00:23:34 --> 00:23:38
perform sort of one query against the

00:23:36 --> 00:23:41
whole data set and create a synthetic

00:23:37 --> 00:23:43
data set that has certain invariances

00:23:40 --> 00:23:45
that are desirable right so I can do

00:23:42 --> 00:23:46
good statistics on it but then I can

00:23:44 --> 00:23:51
query this as many times as I want there

00:23:45 --> 00:23:53
basically you can't yeah anyway but we

00:23:50 --> 00:23:53
don't see it at now does that answer

00:23:52 --> 00:23:56
your question

00:23:52 --> 00:23:57
cool awesome so now you might think okay

00:23:55 --> 00:23:58
this is like a lossless cause like how

00:23:56 --> 00:24:00
can we be answering questions while

00:23:57 --> 00:24:02
protecting while while keeping cystal

00:23:59 --> 00:24:05
signal gone but like it's the difference

00:24:01 --> 00:24:07
between it's the difference between if I

00:24:04 --> 00:24:08
have a data set and I want to know what

00:24:06 --> 00:24:11
causes cancer right

00:24:07 --> 00:24:13
I could query data set and learn that

00:24:10 --> 00:24:16
smoking causes cancer without learning

00:24:12 --> 00:24:18
that individuals are are are not smokers

00:24:15 --> 00:24:20
does that make sense

00:24:17 --> 00:24:23
all right and the reason for that is is

00:24:19 --> 00:24:24
that I'm specifically looking for

00:24:22 --> 00:24:26
patterns that are occurring multiple

00:24:23 --> 00:24:29
times across different people and this

00:24:25 --> 00:24:31
actually happens to really closely

00:24:28 --> 00:24:32
mirror the type of generalization that

00:24:30 --> 00:24:35
we want in machine learning assistants

00:24:31 --> 00:24:36
anyways does that make sense like as

00:24:34 --> 00:24:38
machine learning petitioners we're

00:24:35 --> 00:24:40
actually not really interested in the

00:24:37 --> 00:24:42
one offs right I mean sometimes our

00:24:39 --> 00:24:44
models memorize things this this happens

00:24:41 --> 00:24:46
right but we're actually more interested

00:24:43 --> 00:24:48
in the things that are the things that

00:24:45 --> 00:24:49
are not specific to you I want I want

00:24:47 --> 00:24:50
he things that are gonna work you know

00:24:48 --> 00:24:51
that the heart treatments they're gonna

00:24:49 --> 00:24:53
work for everyone in this room not just

00:24:50 --> 00:24:54
I mean night you know obviously if you

00:24:52 --> 00:24:55
need a heart treatment I'd be happy

00:24:53 --> 00:24:57
that'd be cool for you to have one but

00:24:54 --> 00:24:59
like what we're T FLE interested in

00:24:56 --> 00:25:03
are things that generalize right which

00:24:58 --> 00:25:05
is why this is realistic and why with

00:25:02 --> 00:25:07
continued effort on both tooling

00:25:04 --> 00:25:09
and and the theory side we can we can

00:25:06 --> 00:25:15
have a much better reality today

00:25:08 --> 00:25:17
cool so pros just review so first remote

00:25:14 --> 00:25:18
xecution allows this allows data to

00:25:16 --> 00:25:20
remain the remote machine search and

00:25:17 --> 00:25:21
sampling we can feature engineer using

00:25:19 --> 00:25:23
toy data difference or privacy we have a

00:25:20 --> 00:25:25
formal rigorous privacy budgeting

00:25:22 --> 00:25:28
mechanism right now shoot how is the

00:25:24 --> 00:25:31
privacy budget set is it defined by the

00:25:27 --> 00:25:33
user or is it defined by the data set

00:25:30 --> 00:25:37
owner or someone else this is a really

00:25:32 --> 00:25:38
interesting question actually so

00:25:36 --> 00:25:40
first it's definitely not set by the

00:25:37 --> 00:25:44
data scientist because that would be a

00:25:39 --> 00:25:46
bit of a conflict of interest and up at

00:25:43 --> 00:25:48
first you might say it should be the

00:25:45 --> 00:25:50
data owner okay so the hospital right

00:25:47 --> 00:25:52
it's trying to cover their butt right

00:25:49 --> 00:25:55
and make sure that their assets are

00:25:51 --> 00:25:56
protected both legally and and torchy

00:25:54 --> 00:25:59
right so they're they're trying to make

00:25:55 --> 00:26:01
money off this so there's there's

00:25:58 --> 00:26:03
sort of proper incentives there

00:26:00 --> 00:26:06
but the interesting thing and this gets

00:26:02 --> 00:26:10
back to your question is what happens if

00:26:05 --> 00:26:12
I have say a radiology skin in two

00:26:09 --> 00:26:16
different hospitals right and they both

00:26:11 --> 00:26:19
spend 1 epsilon worth of my privacy in

00:26:15 --> 00:26:21
each of these hospitals right that means

00:26:18 --> 00:26:25
that actually two epsilon if my private

00:26:20 --> 00:26:26
information is out there right and it

00:26:24 --> 00:26:28
just means that one person has to be

00:26:25 --> 00:26:30
clever enough to go to both places to

00:26:27 --> 00:26:31
get to join this is actually the exact

00:26:29 --> 00:26:33
same mechanism we were talking about a

00:26:30 --> 00:26:36
second ago when someone went from

00:26:32 --> 00:26:38
Netflix time TB right and so the true

00:26:35 --> 00:26:41
answer of who should be setting epsilon

00:26:38 --> 00:26:41
budgets although logistical II it's

00:26:40 --> 00:26:43
gonna be challenging we're talking about

00:26:40 --> 00:26:47
a little bit in part two of the talk but

00:26:42 --> 00:26:50
I'm going a little bit slow but okay is

00:26:46 --> 00:26:52
it should be us it should be people in

00:26:49 --> 00:26:54
it should be people around their own

00:26:51 --> 00:26:57
information right you should be setting

00:26:53 --> 00:26:59
your personal epsilon budget that makes

00:26:56 --> 00:27:01
ense that's an aspirational goal we've

00:26:58 --> 00:27:04
got a long way before we can get to that

00:27:00 --> 00:27:07
level of infrastructure around these

00:27:03 --> 00:27:09
kinds of things I'm gonna talk about

00:27:06 --> 00:27:11
hat and we can definitely answer

00:27:08 --> 00:27:15
session as well but I think it

00:27:10 --> 00:27:15
heory in theory that's what we want

00:27:17 --> 00:27:21
okay the two cons we still a suit two

00:27:19 --> 00:27:23
weaknesses of this approach that we

00:27:20 --> 00:27:25
still have lack are someone asked this

00:27:22 --> 00:27:27
question he was you yeah yeah you asked

00:27:24 --> 00:27:28
the question so first the data is safe

00:27:26 --> 00:27:30
but the model is put at risk and what if

00:27:27 --> 00:27:31
we need to do a join actually actually

00:27:29 --> 00:27:35
ours is a third one which I should

00:27:30 --> 00:27:37
totally add to the slide so so first if

00:27:34 --> 00:27:39
I'm sending my computations I model into

00:27:36 --> 00:27:41
the hospital to learn how to be a better

00:27:38 --> 00:27:43
cancer classifier right my models put at

00:27:40 --> 00:27:44
risk it's kind of a bummer if like you

00:27:42 --> 00:27:46
know this is a ten million dollar

00:27:43 --> 00:27:47
healthcare model I'm just sending it to

00:27:45 --> 00:27:49
a thousand different hospitals to get

00:27:46 --> 00:27:51
learn to learn so that's potentially

00:27:48 --> 00:27:53
risky suck it what if I need to do a

00:27:50 --> 00:27:54
joint computation across multiple

00:27:52 --> 00:27:56
different data owners who don't trust

00:27:53 --> 00:28:01
each other right who sends whose data to

00:27:55 --> 00:28:02
whom right and thirdly as you pointed

00:28:00 --> 00:28:04
out how do I trust how these

00:28:01 --> 00:28:06
computations are actually happening the

00:28:03 --> 00:28:09
way that I am telling the remote machine

00:28:05 --> 00:28:09
that they should happen

00:28:09 --> 00:28:14
this brings me to my absolute favorite

00:28:11 --> 00:28:15
tool secure multi-party computation come

00:28:13 --> 00:28:18
across this before

00:28:14 --> 00:28:20
raise them high ok cool a little bit

00:28:17 --> 00:28:21
above average most machine learning

00:28:19 --> 00:28:24
people have not heard about this yet and

00:28:20 --> 00:28:25
I absolutely is this is the coolest this

00:28:23 --> 00:28:27
the coolest thing I've learned about

00:28:24 --> 00:28:28
since learning about like AI machine

00:28:26 --> 00:28:30
learning this is there is a really

00:28:27 --> 00:28:31
cool technique in cryptic

00:28:29 --> 00:28:32
omputations you how about homework

00:28:30 --> 00:28:34
encryption you come across homework

00:28:31 --> 00:28:36
encryption okay a few more yeah this is

00:28:33 --> 00:28:40
related to that

00:28:35 --> 00:28:41
so first the kind of textbook definition

00:28:39 --> 00:28:43
is like this so if you went on Wikipedia

00:28:40 --> 00:28:45
you'd see security PC allows multiple

00:28:42 --> 00:28:47
people to combine their private inputs

00:28:44 --> 00:28:50
to compute a function without revealing

00:28:46 --> 00:28:51
their inputs to each other okay but in

00:28:49 --> 00:28:53
the context of machine learning the

00:28:50 --> 00:28:54
implication of this is multiple

00:28:52 --> 00:28:58
different individuals can share

00:28:53 --> 00:29:01
ownership of a number okay share

00:28:57 --> 00:29:03
ownership of a number show you what I

00:29:00 --> 00:29:06
mean so let's say I have the number five

00:29:02 --> 00:29:08
my happy smiling face and I split this

00:29:05 --> 00:29:13
into two shares a two and a three

00:29:07 --> 00:29:16
okay I've got two friends Mary Ann and

00:29:12 --> 00:29:19
Bobby and I give them these shares they

00:29:15 --> 00:29:21
are now the shareholders of this number

00:29:18 --> 00:29:26
okay now I'm gonna go away and this

00:29:20 --> 00:29:27
number is shared between them okay and

00:29:25 --> 00:29:32
this this gives us several desirable

00:29:26 --> 00:29:34
properties first its encrypted from the

00:29:31 --> 00:29:36
standpoint that neither Bob nor Mary Ann

00:29:33 --> 00:29:37
can tell what number is encrypted

00:29:35 --> 00:29:38
between them by looking at their own

00:29:36 --> 00:29:42
share by itself

00:29:37 --> 00:29:45
now I've for those of you who are

00:29:41 --> 00:29:47
familiar with kind of cryptographic math

00:29:44 --> 00:29:49
I'm hand waving over this a little bit

00:29:46 --> 00:29:50
his would typically be so in incre

00:29:48 --> 00:29:53
decryption would be adding the shares

00:29:49 --> 00:29:55
together modulus a large prime so these

00:29:52 --> 00:29:57
are typically look like sort of large

00:29:54 --> 00:29:59
pseudo-random numbers right but for the

00:29:56 --> 00:30:00
sake of making it sort of intuitive I've

00:29:58 --> 00:30:04
picked pseudo-random numbers that are

00:29:59 --> 00:30:07
convenient to the eyes so first these

00:30:03 --> 00:30:09
two values are encrypted and second we

00:30:06 --> 00:30:11
get shared governance meaning that we

00:30:08 --> 00:30:13
cannot decrypt these numbers or do

00:30:10 --> 00:30:18
anything with these numbers unless all

00:30:12 --> 00:30:18
of the shareholders agree okay

00:30:18 --> 00:30:24
but the truly extraordinary part is that

00:30:21 --> 00:30:25
while this number is encrypted between

00:30:23 --> 00:30:27
as individuals we can actually perform

00:30:24 --> 00:30:29
computation right so in this case let's

00:30:26 --> 00:30:31
ay we wanted to multiply these shares

00:30:28 --> 00:30:33
times a encrypted number times two each

00:30:30 --> 00:30:35
person can multiply their share times

00:30:32 --> 00:30:36
two and now they have an encrypted

00:30:34 --> 00:30:38
number ten right and there's a whole

00:30:35 --> 00:30:41
variety of protocols allowing you to do

00:30:37 --> 00:30:42
different functions such as the

00:30:40 --> 00:30:45
functions needed for machine learning

00:30:41 --> 00:30:46
wild numbers are in this encrypted state

00:30:44 --> 00:30:47
okay

00:30:45 --> 00:30:48
and I'll give some more resources for

00:30:46 --> 00:30:50
you if you're interested in kind of

00:30:47 --> 00:30:54
learning more about this at the end as

00:30:49 --> 00:30:55
well now the big tiya models and data

00:30:53 --> 00:30:57
sets are just large collections of

00:30:54 --> 00:31:00
numbers which we can individually

00:30:56 --> 00:31:02
encrypt which we can individually share

00:30:59 --> 00:31:04
governance over now specifically to

00:31:01 --> 00:31:06
reference your question there's two

00:31:03 --> 00:31:08
configurations of screen PC active and

00:31:05 --> 00:31:09
passive security in the active security

00:31:07 --> 00:31:11
model you can tell if anyone does

00:31:08 --> 00:31:14
computation that you did not sort of

00:31:10 --> 00:31:14
independently authorize which is great

00:31:14 --> 00:31:20
so what does this look like in practice

00:31:17 --> 00:31:22
when you go back to the code so in this

00:31:19 --> 00:31:23
case we don't need just one worker it's

00:31:21 --> 00:31:24
not just one Hospital because we're

00:31:22 --> 00:31:26
looking to have shared governance shared

00:31:23 --> 00:31:28
ownership amongst multiple individuals

00:31:25 --> 00:31:30
o let's say we have Bob Alice and Te'o

00:31:27 --> 00:31:33
and encrypt provider which we won't go

00:31:29 --> 00:31:35
into now I can take a tensor instead of

00:31:32 --> 00:31:38
calling dot send and sending that tensor

00:31:34 --> 00:31:42
to someone else now I call dot share and

00:31:37 --> 00:31:43
that splits each value into multiple

00:31:41 --> 00:31:45
different shares and distributes those

00:31:42 --> 00:31:48
amongst the shareholders right so in

00:31:44 --> 00:31:51
this case Bob Allison tayo however in

00:31:47 --> 00:31:53
the frameworks that were working on you

00:31:50 --> 00:31:54
still get kind of the same PI torch like

00:31:52 --> 00:31:57
interface and all the cryptographic

00:31:53 --> 00:31:58
protocol happens under the hood and the

00:31:56 --> 00:32:00
idea here is to make it so that we can

00:31:57 --> 00:32:01
sort of do encrypted machine learning

00:31:59 --> 00:32:03
without you necessarily having to be a

00:32:00 --> 00:32:05
cryptographer right and vice versa

00:32:02 --> 00:32:06
cryptographers can improve the

00:32:04 --> 00:32:08
algorithms and machine then people can

00:32:05 --> 00:32:09
automatically inherit them all right so

00:32:07 --> 00:32:12
kind of classic sort of open source

00:32:08 --> 00:32:13
machine learning library making complex

00:32:11 --> 00:32:18
intelligence more accessible to people

00:32:12 --> 00:32:20
if that makes sense and what we can do

00:32:17 --> 00:32:22
n tensors we can also do in models so

00:32:19 --> 00:32:23
we can do encrypted training and

00:32:21 --> 00:32:25
encrypted prediction and we're going to

00:32:22 --> 00:32:28
get into what kind of awesome use cases

00:32:24 --> 00:32:28
this opens up in a bit

00:32:29 --> 00:32:36
and this is a nice set of features right

00:32:33 --> 00:32:39
in my opinion this is this is sort of

00:32:35 --> 00:32:41
the MVP of doing privacy preserving data

00:32:38 --> 00:32:43
science right the idea being that I

00:32:40 --> 00:32:46
could have remote access to a remote

00:32:42 --> 00:32:49
data set I can learn high-level latent

00:32:45 --> 00:32:50
patterns like like you know what causes

00:32:48 --> 00:32:53
cancer without learning whether

00:32:49 --> 00:32:56
individuals have cancer I can pull back

00:32:52 --> 00:32:57
just just that sort of high-level

00:32:55 --> 00:33:01
information with for mathematical

00:32:56 --> 00:33:02
guarantees over over you know what sort

00:33:00 --> 00:33:04
of the filter that's that's coming back

00:33:01 --> 00:33:06
through here right and I can work with

00:33:03 --> 00:33:08
datasets from multiple different data

00:33:05 --> 00:33:10
owners while making sure that each each

00:33:07 --> 00:33:16
individual data owners are protected now

00:33:09 --> 00:33:18
hat's the catch okay so first is

00:33:15 --> 00:33:21
computational complexity right so

00:33:17 --> 00:33:22
encrypted computation secure NPC this

00:33:20 --> 00:33:24
involves sending lots of

00:33:21 --> 00:33:25
information over over the network I

00:33:23 --> 00:33:27
think this is the state of the art for

00:33:24 --> 00:33:30
training or for deep learning prediction

00:33:26 --> 00:33:33
is that this is a 13 X slowdown over

00:33:29 --> 00:33:34
plain text which is inconvenient but not

00:33:32 --> 00:33:36
deadly right but you do have to

00:33:33 --> 00:33:38
understand that that assumes like it's

00:33:35 --> 00:33:39
like two AWS machines or like talking to

00:33:37 --> 00:33:41
each other you know they're relatively

00:33:38 --> 00:33:43
fast but we also haven't had any like

00:33:40 --> 00:33:45
hardware optimization to the extent that

00:33:42 --> 00:33:46
you know Nvidia did a lot for deep

00:33:44 --> 00:33:48
learning like that there'll be you know

00:33:45 --> 00:33:50
probably like some sort of Cisco Player

00:33:47 --> 00:33:52
and it's similar for for doing kind of

00:33:49 --> 00:33:57
encrypt a or securing PC base deep

00:33:51 --> 00:33:58
learning right let's see so this brings

00:33:56 --> 00:33:59
back to kind of the fundamental question

00:33:57 --> 00:34:01
is it possible to answer questions using

00:33:58 --> 00:34:03
data we cannot see the theory is

00:34:00 --> 00:34:05
absolutely there I think that's that's

00:34:02 --> 00:34:07
omething that I feel reasonably

00:34:04 --> 00:34:08
confident saying like like that sort of

00:34:06 --> 00:34:09
a theoretical frameworks that we have

00:34:07 --> 00:34:10
and actually the other thing that's

00:34:08 --> 00:34:12
really worth mentioning here is that

00:34:09 --> 00:34:13
hese come from totally different fields

00:34:11 --> 00:34:15
which is why they kind of haven't been

00:34:12 --> 00:34:16
ecessarily combined that much yet I'll

00:34:14 --> 00:34:22
get I'll get more into that in a second

00:34:15 --> 00:34:23
but it's my hope that that by sort of by

00:34:21 --> 00:34:25
considering what these tools can do

00:34:22 --> 00:34:26
that'll open up your eyes to the

00:34:24 --> 00:34:28
potential that in general we can have

00:34:25 --> 00:34:29
this new ability to answer questions

00:34:27 --> 00:34:32
using information that we don't actually

00:34:28 --> 00:34:35
own ourselves because from a

00:34:31 --> 00:34:37
sociological standpoint that's net new

00:34:34 --> 00:34:40
for like us as a species that makes

00:34:36 --> 00:34:41
ense if ever previously we had to have

00:34:39 --> 00:34:43
like a trusted third

00:34:40 --> 00:34:44
party who would then take all the

00:34:42 --> 00:34:46
information in themselves

00:34:43 --> 00:34:49
and make some sort of neutral decision

00:34:45 --> 00:34:52
right so we'll come to that in a second

00:34:48 --> 00:34:53
and so one of the big sort of long-term

00:34:51 --> 00:34:55
goals of our community is to make

00:34:52 --> 00:34:57
infrastructure for this secure enough

00:34:54 --> 00:34:59
and robust enough and of course in like

00:34:56 --> 00:35:02
a free Apache to open-source license

00:34:58 --> 00:35:04
kind of way that you know information on

00:35:02 --> 00:35:07
the world's most important problems will

00:35:03 --> 00:35:10
be this accessible right and we can

00:35:06 --> 00:35:13
spend sort of less time working on tasks

00:35:09 --> 00:35:16
like that and more time tasks like this

00:35:12 --> 00:35:17
o this is gonna be kind of the breaking

00:35:15 --> 00:35:20
point between sort of part 1 and part 2

00:35:16 --> 00:35:21
will be a bit shorter but if

00:35:19 --> 00:35:23
you're interested in sort of diving

00:35:20 --> 00:35:25
deeper on the technicals of this here's

00:35:22 --> 00:35:27
a six or seven hour course that I taught

00:35:24 --> 00:35:29
just on these concepts from the tools

00:35:26 --> 00:35:34
it's free on your Nazi feel free to

00:35:28 --> 00:35:36
check it out so the question was he's

00:35:33 --> 00:35:37
asking about how I that a model can be

00:35:35 --> 00:35:38
ncrypted during training is that same

00:35:36 --> 00:35:41
as homework encryption that's somewhat

00:35:37 --> 00:35:43
something else so a couple years ago

00:35:40 --> 00:35:46
there was a big burst in literature

00:35:42 --> 00:35:47
around training on encrypted data where

00:35:45 --> 00:35:48
you would homomorphic encryption data

00:35:46 --> 00:35:50
set and it turned out that some of the

00:35:47 --> 00:35:51
statistical regularities homework

00:35:49 --> 00:35:54
encryption allowed you to actually train

00:35:50 --> 00:35:58
on that data set without without

00:35:53 --> 00:36:02
decrypting it so this is similar to that

00:35:57 --> 00:36:04
except the one downside to that is that

00:36:01 --> 00:36:06
in order to use that model in the future

00:36:03 --> 00:36:10
you have to still be able to encrypt

00:36:05 --> 00:36:12
data with the same key which often is

00:36:09 --> 00:36:13
ort of constraining in practice and

00:36:11 --> 00:36:14
also there's a pretty big hit to privacy

00:36:12 --> 00:36:15
because your your training on data that

00:36:13 --> 00:36:20
inherently has a lot of noise added to

00:36:14 --> 00:36:23
it what I'm advocating for here is

00:36:19 --> 00:36:25
instead we actually encrypt both the

00:36:22 --> 00:36:28
model and the data set during training

00:36:24 --> 00:36:30
but inside the encryption inside the box

00:36:27 --> 00:36:31
right it's actually performing the same

00:36:29 --> 00:36:33
computations that it would be doing in

00:36:30 --> 00:36:35
plaintext so you don't get any

00:36:32 --> 00:36:36
degradation in accuracy and you don't

00:36:34 --> 00:36:39
get tied to one particular

00:36:35 --> 00:36:41
public/private key pair yeah yeah so

00:36:38 --> 00:36:42
specifically so the question was kind of

00:36:40 --> 00:36:44
comment on federated learning

00:36:41 --> 00:36:45
specifically Google's implementation so

00:36:43 --> 00:36:48
I think Google's implementation is is

00:36:44 --> 00:36:50
great so obviously the the fact that

00:36:47 --> 00:36:51
hey've shown that this can be done

00:36:49 --> 00:36:53
hundreds of millions of users is

00:36:50 --> 00:36:55
incredibly powerful I mean even

00:36:52 --> 00:36:58
inventing the term and creating momentum

00:36:54 --> 00:37:00
in that direction I think that there's

00:36:57 --> 00:37:01
one thing that's worth mentioning is

00:36:59 --> 00:37:03
that there are two forms of federated

00:37:00 --> 00:37:06
learning one is sort of the one where

00:37:02 --> 00:37:09
your model is a federated learning sorry

00:37:05 --> 00:37:12
who got to talk about what that is okay

00:37:09 --> 00:37:15
es I'll do that quickly so a federated

00:37:11 --> 00:37:17
learning is basically the first thing I

00:37:14 --> 00:37:19
talked about so remote execution so if

00:37:16 --> 00:37:21
everyone has a smartphone when you plug

00:37:18 --> 00:37:23
your phone in at night if you've got you

00:37:20 --> 00:37:25
know Android or iOS you plug your own up

00:37:22 --> 00:37:27
hone at night and touch the Wi-Fi you

00:37:24 --> 00:37:30
know when you text in it recommends the

00:37:26 --> 00:37:33
next word next prediction that model is

00:37:29 --> 00:37:35
trained using federated learning meaning

00:37:32 --> 00:37:37
that it learns on your device to do that

00:37:34 --> 00:37:39
better and then that model gets uploaded

00:37:36 --> 00:37:40
to the cloud as opposed to uploading all

00:37:38 --> 00:37:42
of your tweets to the cloud and training

00:37:39 --> 00:37:44
one global model does that make sense so

00:37:41 --> 00:37:45
if all your phone a night model comes

00:37:43 --> 00:37:47
down trains locally goes like it's

00:37:44 --> 00:37:48
federated right that's that's that's

00:37:46 --> 00:37:51
basically federal earning is a nutshell

00:37:47 --> 00:37:55
and and it was pioneered by the cork

00:37:50 --> 00:37:56
team at Google and and they're there do

00:37:54 --> 00:37:58
you really fantastic work they've

00:37:55 --> 00:38:00
paid down a lot of the technical

00:37:57 --> 00:38:03
debt a lot of the the risk or technical

00:37:59 --> 00:38:05
risk around it and they publish really

00:38:02 --> 00:38:08
great papers outlining sort of how they

00:38:04 --> 00:38:10
do it which is fantastic what I outlined

00:38:07 --> 00:38:11
here is actually a slightly different

00:38:09 --> 00:38:12
style of federate learning because there

00:38:10 --> 00:38:15
's federated learning with like a

00:38:11 --> 00:38:17
fixed data set and a fixed model and

00:38:14 --> 00:38:20
lots of users where the data is very

00:38:16 --> 00:38:22
ephemeral like phones are constantly

00:38:19 --> 00:38:23
logging in and logging off you know

00:38:21 --> 00:38:24
you're you're you're plugging your phone

00:38:22 --> 00:38:29
in an eye and then you're taking it out

00:38:23 --> 00:38:30
right this is sort of the the one style

00:38:28 --> 00:38:32
of federated learning that's it's really

00:38:29 --> 00:38:34
useful for like product development

00:38:31 --> 00:38:35
right so it's useful for like if you

00:38:33 --> 00:38:37
want to do a smartphone app that has a

00:38:34 --> 00:38:38
piece of intelligence in it but train

00:38:36 --> 00:38:40
that intelligence is going to be

00:38:37 --> 00:38:42
prohibitively difficult for you to get

00:38:39 --> 00:38:43
access to the data for or you want to

00:38:41 --> 00:38:45
just have a value prop of protecting

00:38:42 --> 00:38:46
privacy right that's what federated

00:38:44 --> 00:38:48
learning that South Area learning is

00:38:45 --> 00:38:50
good for what I've outlined here is a

00:38:47 --> 00:38:51
bit more exploratory federated learning

00:38:49 --> 00:38:54
where it's saying okay instead of

00:38:50 --> 00:38:56
the model being hosted in the

00:38:53 --> 00:38:57
cloud and data owners showing up and

00:38:55 --> 00:38:59
making it a bit smarter every once in a

00:38:56 --> 00:39:01
while now the data is going to be hosted

00:38:58 --> 00:39:03
at a variety of different private clouds

00:39:00 --> 00:39:04
right and data scientists are gonna show

00:39:02 --> 00:39:06
up and say mmm I want to do something

00:39:03 --> 00:39:09
with that with diabetes today mmm I will

00:39:05 --> 00:39:11
do something with with studying dementia

00:39:08 --> 00:39:12
today something like that right this is

00:39:10 --> 00:39:13
much more difficult

00:39:11 --> 00:39:16
because the attack vectors for this are

00:39:12 --> 00:39:18
much larger right I'm trying to be able

00:39:15 --> 00:39:21
to answer arbitrary questions about

00:39:17 --> 00:39:23
arbitrary data sets in a protected

00:39:20 --> 00:39:27
environment right so I think yeah that's

00:39:22 --> 00:39:28
kind of my general thoughts does

00:39:26 --> 00:39:29
federated learning leaking information

00:39:27 --> 00:39:32
so federated learning by itself is not a

00:39:28 --> 00:39:35
secure protocol right to the extent that

00:39:31 --> 00:39:37
and that's why I sort of this ensemble

00:39:34 --> 00:39:38
of techniques that I've so the question

00:39:36 --> 00:39:40
was does federated learning leak

00:39:37 --> 00:39:42
information so it is perfectly possible

00:39:39 --> 00:39:44
for a federated learning model to simply

00:39:41 --> 00:39:45
memorize data set and then spit that

00:39:43 --> 00:39:46
back out later you have to combine it

00:39:44 --> 00:39:48
with something like differential privacy

00:39:45 --> 00:39:51
in order to be able to prevent that from

00:39:47 --> 00:39:52
happening does that make sense so just

00:39:50 --> 00:39:53
because the training is happening on a

00:39:51 --> 00:39:54
device does not mean it's not memorizing

00:39:52 --> 00:39:58
my data does that do that make sense

00:39:53 --> 00:39:59
okay so now I want to zoom out and go a

00:39:57 --> 00:40:01
little less from the kind of a data

00:39:58 --> 00:40:03
science practitioner perspective and now

00:40:00 --> 00:40:06
it take more the perspective of like a

00:40:02 --> 00:40:08
economist or scientist or someone

00:40:05 --> 00:40:10
looking kind of globally at like okay

00:40:07 --> 00:40:12
what if this becomes mature what happens

00:40:09 --> 00:40:15
alright and this is where I gets really

00:40:11 --> 00:40:19
exciting anyone entrepreneurial anyone

00:40:14 --> 00:40:23
veryone I know okay cool well this is

00:40:18 --> 00:40:23
the this is the part for you so

00:40:22 --> 00:40:26
the big difference is this ability to

00:40:24 --> 00:40:31
answer questions using data you can't

00:40:25 --> 00:40:32
see because as it turns out most people

00:40:30 --> 00:40:35
spend a great deal of their life just

00:40:31 --> 00:40:36
answering questions and a lot of it is

00:40:34 --> 00:40:38
involving sort of personal data I mean

00:40:35 --> 00:40:40
whether it's my new things like you know

00:40:37 --> 00:40:43
here's my water where are my keys or

00:40:39 --> 00:40:48
you know what movie should i watch

00:40:42 --> 00:40:51
tonight or or you know what kind of diet

00:40:47 --> 00:40:53
should I have to be able to sleep well

00:40:50 --> 00:40:55
right I mean a wide variety of different

00:40:52 --> 00:40:57
questions right and and we're limited

00:40:54 --> 00:41:00
and are answering ability to the

00:40:56 --> 00:41:02
information that we have right so this

00:40:59 --> 00:41:03
ability to answer question using data we

00:41:01 --> 00:41:08
don't have sociological II I think is

00:41:02 --> 00:41:09
quite quite important and there's four

00:41:07 --> 00:41:13
different areas that I want to highlight

00:41:08 --> 00:41:15
as like big groups of use cases for this

00:41:12 --> 00:41:16
kind of technology to help kind of

00:41:14 --> 00:41:17
inspire you to see where this

00:41:15 --> 00:41:19
infrastructure can go and actually

00:41:16 --> 00:41:23
before I before I jump into that has

00:41:18 --> 00:41:24
anyone been to Edinburgh Umbra cool I

00:41:22 --> 00:41:25
just see tour like the castle and stuff

00:41:23 --> 00:41:29
like that

00:41:24 --> 00:41:32
so my wife and I my wife we wouldn't say

00:41:28 --> 00:41:33
Edinburgh for the first time six months

00:41:31 --> 00:41:38
ago

00:41:32 --> 00:41:40
September September and we did the

00:41:37 --> 00:41:43
underground

00:41:39 --> 00:41:45
was it the we did a ghost to her yeah

00:41:42 --> 00:41:48
we did the ghost to her and it was

00:41:44 --> 00:41:50
really cool it was something that took

00:41:47 --> 00:41:52
away from it there was this point we

00:41:49 --> 00:41:54
re standing we just walked out of the

00:41:51 --> 00:42:00
tunnels and she was pointing up some of

00:41:53 --> 00:42:06
the architecture and then she started

00:41:59 --> 00:42:07
talking about basically the cobblestone

00:42:05 --> 00:42:09
streets and why the cobblestone streets

00:42:06 --> 00:42:11
were there cobblestone streets one of

00:42:08 --> 00:42:13
the main purposes of them was to sort of

00:42:10 --> 00:42:14
lift you out of the muck and the reason

00:42:12 --> 00:42:16
there was muck was there is that they

00:42:13 --> 00:42:17
didn't have any internal plumbing and so

00:42:15 --> 00:42:19
the sewage just poured out into the

00:42:16 --> 00:42:22
street right if you live in a big city

00:42:18 --> 00:42:23
and this was the norm everywhere right

00:42:21 --> 00:42:25
and actually I think she even sort of

00:42:22 --> 00:42:26
implied to like the invention or

00:42:24 --> 00:42:28
popularization of the umbrella had less

00:42:25 --> 00:42:30
to do with actual rain a bit more with

00:42:27 --> 00:42:34
you with buckets of stuff coming down

00:42:29 --> 00:42:35
from on high which is it's a whole

00:42:33 --> 00:42:39
different world like when you think

00:42:34 --> 00:42:44
about what that is but the reason that I

00:42:38 --> 00:42:46
bring this up is that you know however

00:42:43 --> 00:42:50
many hundred years ago people were were

00:42:45 --> 00:42:52
walking through you know like sludge

00:42:49 --> 00:42:53
sewage was just everywhere right it was

00:42:51 --> 00:42:55
all over the place and people were

00:42:52 --> 00:42:56
walking through it everywhere they go

00:42:54 --> 00:43:01
and they were wondering why they got

00:42:55 --> 00:43:02
sick right and in many cases and it

00:43:00 --> 00:43:04
wasn't because they wanted it to be that

00:43:01 --> 00:43:05
way it's just because it was a natural

00:43:03 --> 00:43:07
consequence of the technology they had

00:43:04 --> 00:43:09
at the time right this is not malice

00:43:06 --> 00:43:11
this is not anyone being good or bad or

00:43:08 --> 00:43:16
evil or whatever it's just it's just

00:43:10 --> 00:43:18
he way things were and I think that

00:43:15 --> 00:43:21
here's a strong analogy to be made with

00:43:17 --> 00:43:23
kind of how our data is handled as

00:43:20 --> 00:43:25
a society at the moment right we've just

00:43:22 --> 00:43:26
sort of walked into a society we've had

00:43:24 --> 00:43:27
new inventions come up and new things

00:43:25 --> 00:43:30
that are practical new uses for it and

00:43:26 --> 00:43:32
now everywhere we go we're constantly

00:43:29 --> 00:43:35
spreading and spewing our data all over

00:43:31 --> 00:43:36
the place right I mean every every

00:43:34 --> 00:43:38
camera that sees me walking down the

00:43:35 --> 00:43:39
street you know goodness there's a

00:43:37 --> 00:43:41
company that takes a whole

00:43:38 --> 00:43:43
of the earth by satellite every day like

00:43:40 --> 00:43:45
how the hell am I supposed to do

00:43:42 --> 00:43:46
anything without without you know

00:43:44 --> 00:43:54
everyone follow me around all the time

00:43:45 --> 00:43:56
right and I imagine that whoever it was

00:43:53 --> 00:43:59
I'm not a historian so I don't really

00:43:55 --> 00:44:03
know but whoever it was that said what

00:43:58 --> 00:44:06
if what if we ran plumbing from every

00:44:02 --> 00:44:08
single apartment Business School maybe

00:44:05 --> 00:44:10
ven some public toilets underground

00:44:07 --> 00:44:12
er our city all to one location and

00:44:09 --> 00:44:14
then processed it used chemical

00:44:11 --> 00:44:16
treatments and then turn that into

00:44:13 --> 00:44:18
usable drinking water like how laughable

00:44:15 --> 00:44:21
with that event would have been just the

00:44:17 --> 00:44:24
most massive logistical infrastructure

00:44:20 --> 00:44:26
problem ever to take a working city dig

00:44:23 --> 00:44:29
up the whole thing to take already

00:44:25 --> 00:44:31
constructed buildings and run

00:44:28 --> 00:44:34
pipes through all of them I mean so so

00:44:30 --> 00:44:36
Oxford gosh I there's a building there

00:44:33 --> 00:44:38
that's so old they don't have showers

00:44:35 --> 00:44:39
because they didn't want to run the

00:44:37 --> 00:44:40
plumbing for the head you have to ladle

00:44:38 --> 00:44:42
water over yourself it's in the Merton

00:44:39 --> 00:44:44
College it's quite quite famous right I

00:44:41 --> 00:44:48
mean the infrastructure anyway the

00:44:43 --> 00:44:50
infrastructure challenge is it just must

00:44:47 --> 00:44:52
have seen absolutely massive and so as

00:44:49 --> 00:44:54
I'm about to walk through kind of like

00:44:51 --> 00:44:56
four broad areas where things could be

00:44:53 --> 00:44:57
different theoretically based on this

00:44:55 --> 00:44:59
technology and I think it's probably

00:44:56 --> 00:45:03
going to hit you like whoa that's a lot

00:44:58 --> 00:45:07
of code or like whoa that's that's a lot

00:45:02 --> 00:45:10
of change but but I think that the need

00:45:06 --> 00:45:12
is sufficiently great I think that that

00:45:09 --> 00:45:15
I mean if you view our lives it's just

00:45:11 --> 00:45:17
one long process of answering important

00:45:14 --> 00:45:19
questions whether it's where we're going

00:45:16 --> 00:45:20
to get food or what causes cancer like

00:45:18 --> 00:45:22
making sure that the right people can

00:45:19 --> 00:45:24
swer questions without without you

00:45:21 --> 00:45:25
know data just getting spewed everywhere

00:45:23 --> 00:45:29
so that the wrong people can answer

00:45:24 --> 00:45:32
their questions right is important and

00:45:28 --> 00:45:34
yeah anyway so I know this is gonna

00:45:31 --> 00:45:36
sound like there's a certain

00:45:33 --> 00:45:38
ridiculousness to maybe what some of

00:45:35 --> 00:45:40
this will be but I hope that that you at

00:45:37 --> 00:45:43
least see that that theoretically like

00:45:39 --> 00:45:45
that the basic blocks are there and and

00:45:42 --> 00:45:46
that really what stands between us and a

00:45:44 --> 00:45:49
world that's fundamentally different is

00:45:45 --> 00:45:53
adoption maturing of the technology

00:45:48 --> 00:45:53
and good engineering because I think you

00:45:52 --> 00:45:55
know

00:45:52 --> 00:45:57
once they know that Sir Thomas Crapper

00:45:54 --> 00:46:00
invented the toilet right I do remember

00:45:56 --> 00:46:03
that one at that point that the basics

00:45:59 --> 00:46:04
were there right and and what stood

00:46:02 --> 00:46:07
between them was was implementation

00:46:03 --> 00:46:09
adoption in engineering right and I

00:46:06 --> 00:46:12
think that's that's where we are and the

00:46:08 --> 00:46:13
best part is we have you know companies

00:46:11 --> 00:46:15
like Google that have already already

00:46:12 --> 00:46:18
paved the way with some very very large

00:46:14 --> 00:46:20
rollouts of of the early piece of this

00:46:17 --> 00:46:22
technology all right cool

00:46:19 --> 00:46:25
so what about what are the big

00:46:21 --> 00:46:37
categories when I've already talked

00:46:24 --> 00:46:40
about open data for science ok so this

00:46:36 --> 00:46:42
one is a really big deal and the reason

00:46:39 --> 00:46:45
it's a really big deal is mostly because

00:46:41 --> 00:46:46
veryone gets excited about making AI

00:46:44 --> 00:46:48
progress right

00:46:45 --> 00:46:51
everyone gets super excited about

00:46:47 --> 00:46:53
superhuman ability in X Y or Z when I

00:46:50 --> 00:46:55
started my PhD at Oxford I work for my

00:46:52 --> 00:46:57
professors name is Phil Blount some the

00:46:54 --> 00:46:58
first thing he told me when I sat my

00:46:56 --> 00:46:59
butt down on his office on my first day

00:46:57 --> 00:47:01
is this dude he said Andrew everyone's

00:46:58 --> 00:47:03
going to work on models but if you look

00:47:00 --> 00:47:05
historically the biggest jumps in

00:47:02 --> 00:47:08
progress have happened when we had new

00:47:04 --> 00:47:10
big datasets or the ability to process

00:47:07 --> 00:47:14
new big datasets and just to give a few

00:47:09 --> 00:47:16
anecdotes imagenet right imagenet GPUs

00:47:13 --> 00:47:20
allowing us to process large datasets

00:47:15 --> 00:47:21
even even things like alphago this is

00:47:19 --> 00:47:23
ynthetically generated infinite

00:47:20 --> 00:47:25
datasets or or or if you don't know did

00:47:22 --> 00:47:27
you guys anyone watch the the alpha star

00:47:24 --> 00:47:29
livestream on YouTube

00:47:26 --> 00:47:32
I talked about how it had trained on

00:47:28 --> 00:47:37
like 200 years of like of StarCraft

00:47:31 --> 00:47:40
right well if you look at Watson the

00:47:36 --> 00:47:43
playing playing jeopardy right this was

00:47:39 --> 00:47:45
on the heels of a new large structured

00:47:42 --> 00:47:49
ata set based on Wikipedia or if you

00:47:44 --> 00:47:51
look at Garry Kasparov and IBM's deep

00:47:48 --> 00:47:54
blue this was on the heels of the

00:47:50 --> 00:47:56
largest open data set of chess matches

00:47:53 --> 00:47:57
haven't been published online right

00:47:55 --> 00:48:00
here's this there's this echo we're

00:47:56 --> 00:48:01
like big new data set big big new

00:47:59 --> 00:48:02
breakthrough big new data set big new

00:48:00 --> 00:48:04
breakthrough right and what we're

00:48:01 --> 00:48:07
talking about here is

00:48:03 --> 00:48:09
potentially several orders of

00:48:06 --> 00:48:11
magnitude more data relatively quickly

00:48:08 --> 00:48:13
and the reason for that is that that

00:48:10 --> 00:48:15
we're not I'm not saying we're gonna

00:48:12 --> 00:48:16
invent a new machine and that if she's

00:48:14 --> 00:48:18
gonna collect this and then it's gonna

00:48:15 --> 00:48:20
go online I'm saying there's thousands

00:48:17 --> 00:48:23
and thousands of enterprises millions of

00:48:19 --> 00:48:25
smartphones there's there's an hundreds

00:48:22 --> 00:48:26
of governments that are all already have

00:48:24 --> 00:48:29
this data sitting inside of data

00:48:25 --> 00:48:32
warehouses right largely untapped for

00:48:28 --> 00:48:35
two reasons one legal risk and two

00:48:31 --> 00:48:36
commercial viability right if I give you

00:48:34 --> 00:48:38
a data set all of a sudden I just

00:48:35 --> 00:48:41
doubled the supply right what does that

00:48:37 --> 00:48:42
do to my billing ability and there's the

00:48:40 --> 00:48:45
legal risk that you might do something

00:48:41 --> 00:48:48
bad with it that comes back to hurt me

00:48:44 --> 00:48:51
with this category I know it's like just

00:48:47 --> 00:48:55
one phrase but but this is like imagenet

00:48:50 --> 00:49:00
but for every data task that's already

00:48:54 --> 00:49:02
been established right this is us like I

00:48:59 --> 00:49:03
mean I were working with a professor at

00:49:01 --> 00:49:06
Oxford a psychology department who wants

00:49:02 --> 00:49:08
to study dementia right he is the

00:49:05 --> 00:49:11
problem with dementia is is every

00:49:07 --> 00:49:12
hospital has like five cases right it's

00:49:10 --> 00:49:14
not like a very centralized disease it's

00:49:11 --> 00:49:16
not like all the all the cancer patients

00:49:13 --> 00:49:17
go to you know one big Center and like

00:49:15 --> 00:49:20
where all the technology it's like

00:49:16 --> 00:49:23
dementia it's it's it's sprinkled

00:49:19 --> 00:49:25
everywhere and so the big thing that's

00:49:22 --> 00:49:27
blocking him as a dementia researcher is

00:49:24 --> 00:49:29
access to data and so he's investing in

00:49:26 --> 00:49:31
private data science platforms and I

00:49:28 --> 00:49:33
didn't persuade him to I found him after

00:49:30 --> 00:49:36
he was he was already looking to do that

00:49:32 --> 00:49:37
but but pick pick any challenge that

00:49:35 --> 00:49:41
where data is already being collected

00:49:37 --> 00:49:42
and this can unlock not larger amounts

00:49:40 --> 00:49:45
of data that exists but larger amounts

00:49:41 --> 00:49:47
of data that can be can be used together

00:49:44 --> 00:49:50
that makes sense this is like a thousand

00:49:46 --> 00:49:51
startups right here whereas instead of

00:49:49 --> 00:49:53
going out and trying to buy as many days

00:49:50 --> 00:49:55
as you can which is a really hard and

00:49:52 --> 00:49:56
really expensive task talk to anyone

00:49:54 --> 00:49:57
who's in Silicon Valley right now trying

00:49:55 --> 00:50:00
to do a data science startup right

00:49:56 --> 00:50:03
instead you go to each individual person

00:49:59 --> 00:50:05
that has a data set and you say hey let

00:50:02 --> 00:50:06
me create a gateway between you and the

00:50:04 --> 00:50:07
rest of the world is going to keep your

00:50:05 --> 00:50:12
data safe and allow people to leverage

00:50:06 --> 00:50:14
it right that's like

00:50:11 --> 00:50:17
repeatable business model take a use

00:50:13 --> 00:50:22
case right BB the radiology Network

00:50:16 --> 00:50:24
gatekeeper right okay so enough on that

00:50:21 --> 00:50:27
one but like does it make sense how like

00:50:23 --> 00:50:30
on a huge variety of tasks just the

00:50:26 --> 00:50:31
ability to have a day of box silo you

00:50:29 --> 00:50:33
can do data science against it's going

00:50:30 --> 00:50:35
to increase the accuracy of a huge

00:50:32 --> 00:50:47
variety of models really really really

00:50:34 --> 00:51:02
quickly cool all right second one single

00:50:46 --> 00:51:07
yes accountability this one's a little

00:51:01 --> 00:51:09
bit tricky get to the airport and you

00:51:06 --> 00:51:12
get bag checked right everyone's

00:51:08 --> 00:51:14
familiar with this process I see what

00:51:11 --> 00:51:16
happens someone's sitting at a monitor

00:51:13 --> 00:51:21
and they see all the objects in your

00:51:15 --> 00:51:23
back so that occasionally they can spot

00:51:20 --> 00:51:26
objects that are dangerous or illicit

00:51:22 --> 00:51:28
right there's a lot of extra information

00:51:25 --> 00:51:30
leakage over to the fact that they have

00:51:27 --> 00:51:33
do they have to sit and look at

00:51:29 --> 00:51:34
housands of of all the objects you know

00:51:32 --> 00:51:36
basically searching every single

00:51:33 --> 00:51:38
person's bag totally and completely just

00:51:35 --> 00:51:39
so that occasionally they can find that

00:51:37 --> 00:51:41
one answer that if you have the question

00:51:38 --> 00:51:43
they actually want to answer is is there

00:51:40 --> 00:51:45
anything dangerous in this bag but in

00:51:42 --> 00:51:47
order to answer it they have to

00:51:44 --> 00:51:52
basically acquire access to the whole

00:51:46 --> 00:51:55
back right so let's let's let's think

00:51:51 --> 00:51:57
about this same approach of answering

00:51:54 --> 00:51:58
questions using data we can't see the

00:51:56 --> 00:52:01
best example of this in the analog world

00:51:57 --> 00:52:03
is a sniffing dog smear with like

00:52:00 --> 00:52:05
sniffing dogs so give your bag a whiff

00:52:02 --> 00:52:07
at the airport right these are actually

00:52:04 --> 00:52:09
a really privacy preserving thing

00:52:06 --> 00:52:12
because dogs don't speak English or any

00:52:08 --> 00:52:14
other language and so that the benefit

00:52:11 --> 00:52:19
is dog cuz buy no everything's fine

00:52:13 --> 00:52:22
moves on the dog has the ability to only

00:52:18 --> 00:52:25
reveal one bit of information without

00:52:21 --> 00:52:29
you having to search every single back

00:52:24 --> 00:52:32
okay that is what I mean when I say a

00:52:28 --> 00:52:34
single-use accountability system it

00:52:31 --> 00:52:36
means I am looking at some data stream

00:52:33 --> 00:52:39
because I'm holding someone accountable

00:52:35 --> 00:52:41
right and we want to make it so that I

00:52:38 --> 00:52:43
can only answer the question that I

00:52:40 --> 00:52:45
claim to be looking into so if this is a

00:52:42 --> 00:52:47
video feed right for example right

00:52:44 --> 00:52:49
instead of getting access to the raw

00:52:46 --> 00:52:50
video feed and and under you know the

00:52:48 --> 00:52:52
millions of bits of information every

00:52:49 --> 00:52:54
single person in the frame of you

00:52:51 --> 00:52:56
walking around doing whatever which I

00:52:53 --> 00:52:58
could use for you know even if I'm a

00:52:55 --> 00:53:00
good person I technically could use for

00:52:57 --> 00:53:03
other purposes but instead build a

00:52:59 --> 00:53:06
system where I build say a machine

00:53:02 --> 00:53:09
learning classifier right that is an

00:53:05 --> 00:53:10
auditable piece of technology that looks

00:53:08 --> 00:53:14
for whatever I'm supposed to be looking

00:53:09 --> 00:53:16
for right and I only see frames you know

00:53:13 --> 00:53:24
I only open up bags that actually have

00:53:15 --> 00:53:27
to okay this does two things one it

00:53:24 --> 00:53:27
makes all of our Callaway systems more

00:53:26 --> 00:53:29
privacy-preserving

00:53:26 --> 00:53:38
which is great mitigates any potential

00:53:28 --> 00:53:42
dual or multi use right and two it means

00:53:37 --> 00:53:44
that some things that were simply too

00:53:41 --> 00:53:46
ff limits for us to properly hold

00:53:43 --> 00:53:48
people accountable might be possible

00:53:45 --> 00:53:50
right well one of the things that was

00:53:47 --> 00:53:53
really challenging so we used to do

00:53:49 --> 00:53:55
email surveillance does the reasoning

00:53:52 --> 00:53:57
right and and it was basically help

00:53:54 --> 00:53:58
investment banks find insider traders

00:53:56 --> 00:54:00
right because they want to help enforce

00:53:57 --> 00:54:04
the loss they you know get fined billion

00:53:59 --> 00:54:05
dollar fines if anyone caused an

00:54:03 --> 00:54:06
infraction but one of the things that

00:54:04 --> 00:54:09
was really difficult about developing

00:54:05 --> 00:54:12
these kinds of systems was that it's so

00:54:08 --> 00:54:14
sensitive right we're talking about you

00:54:11 --> 00:54:16
know hundreds of millions of emails at

00:54:13 --> 00:54:18
some massive investment bank is so much

00:54:15 --> 00:54:21
private information in there that say

00:54:17 --> 00:54:22
none of our data scientists barely any

00:54:20 --> 00:54:24
of them we're able to actually work with

00:54:21 --> 00:54:27
e data and try to make it better right

00:54:23 --> 00:54:29
and and and this this yeah this makes it

00:54:26 --> 00:54:31
really really difficult anyway cool so

00:54:28 --> 00:54:32
if on that third one and this is the one

00:54:30 --> 00:54:37
I think it's just incredibly exciting

00:54:31 --> 00:54:37
and encrypted services

00:54:46 --> 00:54:51
what's up

00:54:47 --> 00:54:53
everyone's me with what's up telegram

00:54:50 --> 00:54:56
any of these these are messaging apps

00:54:52 --> 00:54:59
right where a message is encrypted on

00:54:55 --> 00:55:01
your phone and it's sent directly to

00:54:58 --> 00:55:03
someone else's phone and only that

00:55:00 --> 00:55:05
person's phone can decrypt it right

00:55:02 --> 00:55:05
which means that someone can provide a

00:55:04 --> 00:55:08
service

00:55:04 --> 00:55:09
you know messaging without the service

00:55:07 --> 00:55:11
provider seeing any of the information

00:55:08 --> 00:55:15
that they're actually providing the

00:55:10 --> 00:55:21
service over right very powerful idea

00:55:14 --> 00:55:22
what if the intuition here is that with

00:55:20 --> 00:55:24
a combination of machine learning

00:55:21 --> 00:55:26
encrypted computation and differential

00:55:23 --> 00:55:29
privacy that we could do the same thing

00:55:25 --> 00:55:30
for entire services so imagine going to

00:55:28 --> 00:55:33
the doctor okay so you go to the doctor

00:55:29 --> 00:55:34
this is really a computation between two

00:55:32 --> 00:55:37
different data sets on the one hand you

00:55:33 --> 00:55:40
have data set that the doctor has which

00:55:36 --> 00:55:42
is their you know medical background

00:55:39 --> 00:55:45
their knowledge of different procedures

00:55:41 --> 00:55:47
and diseases and tests and all this kind

00:55:44 --> 00:55:50
of stuff and then you have your data set

00:55:46 --> 00:55:52
which is your symptoms your your medical

00:55:49 --> 00:55:55
history you know your recent things that

00:55:51 --> 00:55:56
you've eaten your your genes your

00:55:54 --> 00:55:58
genetic predisposition and your heritage

00:55:55 --> 00:56:00
those kinds of things right and you're

00:55:57 --> 00:56:02
bringing these two data sets together to

00:55:59 --> 00:56:04
compute a function and that function is

00:56:01 --> 00:56:13
what what what treatment should you have

00:56:03 --> 00:56:14
if any okay and the idea here is that so

00:56:12 --> 00:56:19
there's this new new field called

00:56:13 --> 00:56:19
structured transparency probably mention

00:56:18 --> 00:56:26
I'm not sure maybe sure you can call it

00:56:24 --> 00:56:28
a new field yet because it's not in the

00:56:25 --> 00:56:32
literature but it's been bouncing around

00:56:27 --> 00:56:35
a few different circles and the and it's

00:56:31 --> 00:56:35
uh

00:56:37 --> 00:56:52
x/y never give a chalk sorry and then

00:56:45 --> 00:56:54
this is Z okay so this to you for people

00:56:51 --> 00:56:59
providing their data together computing

00:56:53 --> 00:57:02
a function and an output so so

00:56:58 --> 00:57:05
difference for privacy protects the

00:57:01 --> 00:57:09
output encrypted computation so like MPC

00:57:04 --> 00:57:11
which we talked about earlier protects

00:57:08 --> 00:57:14
the input right

00:57:10 --> 00:57:16
so allows them to compute f of X of Y

00:57:13 --> 00:57:18
right without revealing their inputs

00:57:15 --> 00:57:20
remember this so basically encrypt Y

00:57:17 --> 00:57:22
encrypt X compute the function while

00:57:19 --> 00:57:24
it's encrypted do we remember we

00:57:21 --> 00:57:26
remember this right and so there's

00:57:23 --> 00:57:27
three processes here right

00:57:25 --> 00:57:31
here's input privacy which is the NPC

00:57:26 --> 00:57:38
there's logic and then there's output

00:57:30 --> 00:57:40
privacy and this is what you need to be

00:57:37 --> 00:57:43
able to do end-to-end encrypted services

00:57:39 --> 00:57:44
okay so imagine imagine so there are

00:57:42 --> 00:57:47
machine learning models that

00:57:43 --> 00:57:48
can now do skin cancer prediction all

00:57:46 --> 00:57:49
right so I can take a picture of my of

00:57:47 --> 00:57:51
my arm and say that their machine a

00:57:48 --> 00:57:52
machine learning model and they'll

00:57:50 --> 00:57:57
predict whether or not I have melanoma

00:57:51 --> 00:58:00
on my arm right ok so in this case

00:57:56 --> 00:58:05
machine learning model perhaps owned by

00:57:59 --> 00:58:08
a hospital or startup image of my arm

00:58:04 --> 00:58:12
okay encrypt both the logic is done by

00:58:07 --> 00:58:14
the machine learning model the

00:58:11 --> 00:58:16
prediction if it's gonna be publish to

00:58:13 --> 00:58:17
the output to the rest of the world use

00:58:15 --> 00:58:20
difference or privacy but in this case

00:58:16 --> 00:58:24
the prediction can come back to me and

00:58:19 --> 00:58:28
only I see the decrypted result okay the

00:58:23 --> 00:58:30
implication being that the doctor role

00:58:27 --> 00:58:32
facilitated by machine learning can

00:58:29 --> 00:58:35
classify whether or not I have cancer

00:58:31 --> 00:58:36
can provide this service without anyone

00:58:34 --> 00:58:38
seeing my medical information I can go

00:58:35 --> 00:58:40
to the doctor and get a prognosis

00:58:37 --> 00:58:42
without ever revealing my medical

00:58:39 --> 00:58:44
records to anyone including the doctor

00:58:42 --> 00:58:48
ight

00:58:43 --> 00:58:52
does that make sense and if you believe

00:58:47 --> 00:58:53
that sort of the services

00:58:51 --> 00:58:54
that are repeatable that we do for

00:58:52 --> 00:58:56
millions and millions of people right

00:58:53 --> 00:59:01
can create a training data set that we

00:58:55 --> 00:59:02
can then train a classifier to do then

00:59:00 --> 00:59:05
we should be able to upgrade it to be

00:59:01 --> 00:59:07
nd and encrypted does that make sense

00:59:04 --> 00:59:09
so again it's kind of it's kind of big

00:59:06 --> 00:59:13
it assumes that that AI is smart enough

00:59:08 --> 00:59:14
to do it there's lots of questions

00:59:12 --> 00:59:17
around quality and my quality assurance

00:59:13 --> 00:59:19
and all those kinds of things that have

00:59:16 --> 00:59:20
to be addressed there's very likely to

00:59:18 --> 00:59:22
be different institutions that we need

00:59:19 --> 00:59:23
but I hope that at least these three

00:59:21 --> 00:59:25
sort of big category this isn't by no

00:59:22 --> 00:59:27
means comprehensive but helped at least

00:59:24 --> 00:59:29
hese three big categories will be sort

00:59:26 --> 00:59:31
of sufficient for helping sort of lay

00:59:28 --> 00:59:33
the groundwork for how sort of each

00:59:30 --> 00:59:34
person could be empowered with sole

00:59:32 --> 00:59:36
control over the only copies of their

00:59:33 --> 00:59:38
information while still receiving the

00:59:35 --> 00:59:42
same goods and services they've become

00:59:37 --> 00:59:44
accustomed to cool thanks questions

00:59:41 --> 00:59:49
let's do it

00:59:43 --> 00:59:53
first please give Andrew a big hand

00:59:48 --> 00:59:53
[Music]

00:59:54 --> 01:00:00
and it was fascinating really

00:59:57 --> 01:00:03
fascinating amazing amazing set of ideas

00:59:59 --> 01:00:07
and hopefully this can really get rid of

01:00:02 --> 01:00:10
the sewage off of data under on the this

01:00:06 --> 01:00:13
vision of end-to-end encrypted services

01:00:09 --> 01:00:16
if I understand correctly the algorithm

01:00:12 --> 01:00:18
would also run on two or more services

01:00:15 --> 01:00:22
and the skin image would go to them ooh

01:00:17 --> 01:00:24
and then you would get the diagnosis but

01:00:21 --> 01:00:27
he diagnosis itself is not private

01:00:23 --> 01:00:30
though if that's the output of that it

01:00:26 --> 01:00:32
is is being revealed to the service

01:00:29 --> 01:00:33
provider so we could it could optionally

01:00:31 --> 01:00:35
be revealed to the service spider so in

01:00:32 --> 01:00:36
this case oh yeah something I didn't I

01:00:34 --> 01:00:38
didn't say first securing PC from

01:00:35 --> 01:00:40
cryptic computation except for some with

01:00:37 --> 01:00:43
some exceptions but for securing PC

01:00:39 --> 01:00:44
when you perform computation between two

01:00:42 --> 01:00:46
encrypted numbers the result is

01:00:43 --> 01:00:47
encrypted between the same shareholders

01:00:45 --> 01:00:50
if that makes sense

01:00:46 --> 01:00:52
meaning that by default Z is still

01:00:49 --> 01:00:54
encrypted with the same keys as x and y

01:00:51 --> 01:00:55
and then it's up to the key holders to

01:00:53 --> 01:00:57
decide who they want to decrypt it for

01:00:54 --> 01:00:58
so they could decrypt it for the general

01:00:56 --> 01:01:00
public in which case they should apply

01:00:57 --> 01:01:03
differential privacy they could decrypt

01:00:59 --> 01:01:06
it for the the input owner in which case

01:01:02 --> 01:01:08
the input owners not gonna hurt anybody

01:01:05 --> 01:01:11
else by him knowing whether or not

01:01:07 --> 01:01:15
whether he has a certain diagnosis or it

01:01:10 --> 01:01:17
could be decrypted for the model owner

01:01:14 --> 01:01:19
perhaps allow them to do more training

01:01:16 --> 01:01:22
or some other arbitrary use case right

01:01:18 --> 01:01:24
but so it can be but not not not as a

01:01:21 --> 01:01:27
strict requirement just to be sure I

01:01:23 --> 01:01:31
mean if if Z is being computed by say

01:01:26 --> 01:01:35
two parties to send you back to back to

01:01:30 --> 01:01:38
Y in this case the machine knows what Z

01:01:34 --> 01:01:42
is so in that sense even if you encrypt

01:01:37 --> 01:01:42
C with the with the key of Y

01:01:41 --> 01:01:47
there's no way to protect the output

01:01:43 --> 01:01:54
itself hmm I haven't described this

01:01:46 --> 01:01:55
correctly so when we perform the

01:01:53 --> 01:01:59
ncrypting computation we split this

01:01:54 --> 01:02:02
into shares so we'll say you know y y1

01:01:58 --> 01:02:05
and y2

01:02:01 --> 01:02:08
right y2 goes up here

01:02:04 --> 01:02:13
and then this populates what actually

01:02:07 --> 01:02:15
happens is this creates Z 1 and Z 2 at

01:02:12 --> 01:02:18
he end right which is still which is

01:02:14 --> 01:02:23
till owned by you know person Y so

01:02:17 --> 01:02:26
we'll say this is Alice and this is Bob

01:02:22 --> 01:02:29
right so we have Bob share and Alice's

01:02:25 --> 01:02:32
hare what gets populated is is shares

01:02:28 --> 01:02:35
of Z so if Alice if Bob sends his share

01:02:31 --> 01:02:37
of Z down to Alice only Alice can

01:02:34 --> 01:02:39
decrypt the result so does that make

01:02:36 --> 01:02:42
more sense okay even the unser

01:02:38 --> 01:02:43
is it's even the answer is protected yes

01:02:41 --> 01:02:45
and you would only need to use

01:02:42 --> 01:02:48
differential privacy in the case you're

01:02:44 --> 01:02:51
planning to decrypt the result for some

01:02:47 --> 01:02:54
unknown audience to be able to see

01:02:50 --> 01:02:59
some models have biased based on real

01:02:53 --> 01:03:02
data biases and society tries to make

01:02:58 --> 01:03:04
unbiased models like on gender race and

01:03:01 --> 01:03:06
so on how does it work with privacy

01:03:03 --> 01:03:10
especially when everything is encrypted

01:03:05 --> 01:03:12
so how can you unbiased models when you

01:03:09 --> 01:03:14
do not see biases in a data and so on

01:03:11 --> 01:03:17
that's a great question

01:03:13 --> 01:03:20
so the the first the first gimme for

01:03:16 --> 01:03:22
that is that people don't ever really D

01:03:19 --> 01:03:23
buy us a model by physically reading the

01:03:21 --> 01:03:25
weights right so so the fact that the

01:03:22 --> 01:03:29
weights are encrypted doesn't help it

01:03:24 --> 01:03:30
hurt you so really what it's about is

01:03:28 --> 01:03:31
just making sure that you provision

01:03:29 --> 01:03:33
enough of your privacy budget to allow

01:03:30 --> 01:03:34
you to do the introspection that you

01:03:32 --> 01:03:36
need to be able to measure and adjust

01:03:33 --> 01:03:39
for for bias so I think that's that's a

01:03:35 --> 01:03:43
does that is that sufficient cool

01:03:38 --> 01:03:45
awesome great question then how far away

01:03:42 --> 01:03:47
do you think we are from organizations

01:03:44 --> 01:03:53
like the FDA requiring differential

01:03:46 --> 01:03:53
privacy to be used in regulating medical

01:03:54 --> 01:04:01
so I think the best answer I can give to

01:03:57 --> 01:04:04
that so if one I don't know and even

01:04:00 --> 01:04:06
laws in the UK regarding privacy GDP are

01:04:03 --> 01:04:08
not prescriptive about things like like

01:04:05 --> 01:04:10
differential privacy but I think the

01:04:07 --> 01:04:12
best and most relevant data point I have

01:04:09 --> 01:04:14
for you on that is that the US census

01:04:11 --> 01:04:16
this year is going to be protecting the

01:04:13 --> 01:04:18
census data 2020 census data using

01:04:15 --> 01:04:20
differential privacy and

01:04:17 --> 01:04:21
like some of the leading work on

01:04:19 --> 01:04:22
actually applying difference or privacy

01:04:20 --> 01:04:25
in the world is going on at the US

01:04:21 --> 01:04:27
Census and I'm sure they'd be interested

01:04:24 --> 01:04:29
in more helpers if anyone was interested

01:04:26 --> 01:04:32
in joining them

01:04:28 --> 01:04:34
so I guess her question was kind of my

01:04:31 --> 01:04:36
one of my questions but it was more just

01:04:33 --> 01:04:41
like how much buy and are you getting in

01:04:35 --> 01:04:44
terms of adoption for open mind or any

01:04:40 --> 01:04:47
of like do you have like any hospitals

01:04:43 --> 01:04:48
that are like participating or yeah so

01:04:46 --> 01:04:54
actually there's a few things I probably

01:04:47 --> 01:04:57
should have mentioned so the open mine

01:04:53 --> 01:04:59
is about two and a half years old in the

01:04:56 --> 01:05:01
very beginning we had very little buy-in

01:04:58 --> 01:05:03
because it was just so early it was kind

01:05:00 --> 01:05:05
of like who cares about privacy no one's

01:05:02 --> 01:05:07
ever gonna sort of really really care

01:05:04 --> 01:05:10
about that post GDP our total total

01:05:06 --> 01:05:13
change right everyone's scrambling to

01:05:09 --> 01:05:15
protect the data but the truth is it's

01:05:12 --> 01:05:16
not just privacy it's also commercial

01:05:14 --> 01:05:18
usability right now if you're selling

01:05:15 --> 01:05:20
data every time you sell it you lower

01:05:17 --> 01:05:21
the price because you increase the

01:05:19 --> 01:05:22
supply and you increase the number of

01:05:20 --> 01:05:24
people that are that are also selling it

01:05:21 --> 01:05:25
so I think that there's there's people

01:05:23 --> 01:05:27
also waking up to kind of the commercial

01:05:24 --> 01:05:29
reasons for protecting their

01:05:26 --> 01:05:31
own data sets and protecting the kind of

01:05:28 --> 01:05:34
the unique statistical signal but that

01:05:30 --> 01:05:37
hey have it's also worth mentioning so

01:05:33 --> 01:05:40
the pie charts team recently sponsored

01:05:36 --> 01:05:42
$250,000 in open source grants to fund

01:05:39 --> 01:05:45
people to work on our pie safe library

01:05:41 --> 01:05:47
which is really good and we're hoping to

01:05:44 --> 01:05:48
announce sort of more grants of similar

01:05:46 --> 01:05:51
size later in the year so if you guys

01:05:47 --> 01:05:54
like working on open source code and and

01:05:50 --> 01:05:58
like to get paid to do so so that so

01:05:53 --> 01:06:01
that accident that's sort of a big vote

01:05:57 --> 01:06:03
and buy and as far as our community is

01:06:00 --> 01:06:05
concerned so this year is when I hope to

01:06:02 --> 01:06:08
see kind of the first pilots rolling out

01:06:04 --> 01:06:11
I am there are some that are sort of in

01:06:07 --> 01:06:13
the works but I I can't they're not

01:06:10 --> 01:06:14
public yet but okay yeah so I think

01:06:12 --> 01:06:16
basically this is the year for like

01:06:13 --> 01:06:19
pilots okay I think it's best about as

01:06:15 --> 01:06:21
far as we are and then I have another

01:06:18 --> 01:06:22
question that's kind on the opposite end

01:06:20 --> 01:06:26
of the spectrum that's a little more

01:06:21 --> 01:06:28
technical weeds go um so when you do the

01:06:25 --> 01:06:30
separate when you're doing the

01:06:27 --> 01:06:32
ncryption where you separate everything

01:06:29 --> 01:06:34
into each of the different owners

01:06:31 --> 01:06:36
how does that work for nonlinear

01:06:33 --> 01:06:39
functions because I would just you need

01:06:35 --> 01:06:41
it's a lot of linearity to like add it

01:06:38 --> 01:06:45
back in for it to total maintain the

01:06:40 --> 01:06:47
totally so the nonlinear functions are

01:06:44 --> 01:06:49
the most complicated the most

01:06:46 --> 01:06:50
performance intensive until they said

01:06:48 --> 01:06:55
they they do get the biggest performance

01:06:49 --> 01:06:58
hit when you have to do them the for

01:06:54 --> 01:07:01
deep learning specifically there's kind

01:06:57 --> 01:07:04
of two trends so one line of research is

01:07:00 --> 01:07:07
around using polynomial approximations

01:07:03 --> 01:07:09
and then the other line is around doing

01:07:06 --> 01:07:11
sort of discrete comparison functions so

01:07:08 --> 01:07:12
which is good for a lose and it's good

01:07:10 --> 01:07:14
for lopping off the ends of your

01:07:11 --> 01:07:18
polynomials so that your unstable tails

01:07:13 --> 01:07:20
can be flat and i would say that's about

01:07:17 --> 01:07:22
hat and then like the science of kind

01:07:19 --> 01:07:23
of like trying to relax your security

01:07:21 --> 01:07:24
assumptions strategically here and there

01:07:22 --> 01:07:27
to get more performance is about where

01:07:23 --> 01:07:28
we're at but as far as the the one thing

01:07:26 --> 01:07:31
is this worth mentioning though is that

01:07:27 --> 01:07:35
here's there are multi cut of what I

01:07:30 --> 01:07:39
described was securing PC sort of on you

01:07:34 --> 01:07:40
know integers and and and fixed fixed

01:07:38 --> 01:07:43
precision numbers you can also do it on

01:07:39 --> 01:07:44
sort of binary but in that sense it's

01:07:42 --> 01:07:46
you get a huge performance every doing

01:07:43 --> 01:07:47
of it binary but you also get people to

01:07:45 --> 01:07:49
do things sort more classically with

01:07:46 --> 01:07:50
computing encrypted computation is sort

01:07:48 --> 01:07:52
of like doing computing in the 70s like

01:07:49 --> 01:07:55
you get you get a lot of the same kind

01:07:51 --> 01:07:57
of kind of constraints thank you very

01:07:54 --> 01:07:59
much for your talk Andrew yeah I'm

01:07:56 --> 01:08:04
wondering about your objective to

01:07:58 --> 01:08:09
ultimately allow every individual to

01:08:03 --> 01:08:11
assign a privacy budget you think you

01:08:08 --> 01:08:13
also mention you mentioned that it would

01:08:10 --> 01:08:14
take a lot of work to provide the

01:08:12 --> 01:08:17
infrastructure for that to be possible

01:08:13 --> 01:08:19
so do you have an idea for what kind of

01:08:16 --> 01:08:22
infrastructure is necessary and also

01:08:18 --> 01:08:24
when people are reluctant you know even

01:08:21 --> 01:08:27
perhaps lazy and you know they don't

01:08:24 --> 01:08:30
really care and they don't want their

01:08:26 --> 01:08:32
data to be protected yeah you know I

01:08:29 --> 01:08:34
guess it takes some training but yet

01:08:31 --> 01:08:37
what are your thoughts building of that

01:08:33 --> 01:08:38
infrastructure I think it's gonna come

01:08:36 --> 01:08:40
in waves it's the kind of thing we're

01:08:37 --> 01:08:41
like people don't usually invest money

01:08:39 --> 01:08:44
and time and resources into things that

01:08:40 --> 01:08:45
aren't like a straight shot to value so

01:08:43 --> 01:08:46
I think this probably gonna be multiple

01:08:44 --> 01:08:48
individual this

01:08:45 --> 01:08:50
Griet jumps the first one is going to be

01:08:47 --> 01:08:51
just enterprise adoption enterprises are

01:08:49 --> 01:08:52
the ones that already have all the data

01:08:50 --> 01:08:53
sort of the ones you're most natural to

01:08:51 --> 01:08:55
sort of start adopting

01:08:52 --> 01:08:56
privacy-preserving technologies and I

01:08:54 --> 01:08:59
think that that adoption is gonna be

01:08:55 --> 01:09:01
driven primarily by commercial reasons

01:08:58 --> 01:09:02
for commercial reasons meaning my data

01:09:00 --> 01:09:03
is inherently more valuable if I can

01:09:01 --> 01:09:05
keep it scarce while allowing people to

01:09:02 --> 01:09:08
answer questions with it if that makes

01:09:04 --> 01:09:10
ense so it's more profitable for me to

01:09:07 --> 01:09:11
not send copies of my data to people if

01:09:09 --> 01:09:12
I can actually have them bring their

01:09:10 --> 01:09:14
question answering mechanisms to me and

01:09:12 --> 01:09:16
just get their questions answered

01:09:13 --> 01:09:17
that's that make sense that's not a

01:09:15 --> 01:09:18
privacy narrative but I think that that

01:09:16 --> 01:09:24
narrative is going to mature privacy

01:09:17 --> 01:09:28
technology quite quickly post sort of

01:09:23 --> 01:09:33
enterprise adoption I think that that's

01:09:27 --> 01:09:35
when that's and encrypted services are

01:09:32 --> 01:09:36
still really hard at this point and the

01:09:34 --> 01:09:38
reason for that is that they require

01:09:35 --> 01:09:40
lots of compute and lots of network

01:09:37 --> 01:09:43
overhead which means that you probably

01:09:39 --> 01:09:44
want to have something in in the cloud

01:09:42 --> 01:09:45
right so some sort of machine that you

01:09:43 --> 01:09:48
can hold and control in the cloud or

01:09:44 --> 01:09:50
have the internet get a lot faster so

01:09:47 --> 01:09:52
there's that but there's this question

01:09:49 --> 01:09:55
of like how how do we actually get to a

01:09:51 --> 01:09:57
world where for each individual person

01:09:54 --> 01:09:59
sort of knows or as notional control

01:09:56 --> 01:10:05
over their their own personal privacy

01:09:58 --> 01:10:06
budget right and let's just say you had

01:10:04 --> 01:10:08
perfect enterprise adoption right and

01:10:06 --> 01:10:10
everyone's tracking their stuff for

01:10:07 --> 01:10:12
difference for privacy the piece that

01:10:09 --> 01:10:14
you're actually missing here is is just

01:10:11 --> 01:10:15
some sort of communication between all

01:10:13 --> 01:10:17
the different enterprises that are

01:10:14 --> 01:10:19
joining up and making it you just just

01:10:16 --> 01:10:21
make a counting mechanism all right it's

01:10:18 --> 01:10:23
it's it's a lot like so like the

01:10:20 --> 01:10:25
IRS right it's it's like it's it's just

01:10:22 --> 01:10:27
someone to be there to make sure that

01:10:24 --> 01:10:29
you're not double spending in

01:10:26 --> 01:10:31
different different places right that

01:10:28 --> 01:10:33
you're your epsilon budget it's over

01:10:30 --> 01:10:35
here versus over here versus over here

01:10:32 --> 01:10:37
is all come from the same place it's not

01:10:34 --> 01:10:41
otally clear who this actor would be

01:10:36 --> 01:10:42
right maybe maybe there's an app that

01:10:40 --> 01:10:44
just does it for you maybe there has to

01:10:41 --> 01:10:46
be an institution around it maybe maybe

01:10:43 --> 01:10:48
it won't happen at all maybe it'll just

01:10:45 --> 01:10:51
be decentralized but you know whatever

01:10:47 --> 01:10:53
another option is that they'll actually

01:10:50 --> 01:10:54
be data banks price has been some

01:10:52 --> 01:10:56
literature in the last couple years

01:10:53 --> 01:10:59
around saying okay maybe maybe

01:10:55 --> 01:10:59
institutions that they currently handle

01:10:58 --> 01:11:01
you know your money

01:10:58 --> 01:11:04
might also be the bank where all of your

01:11:00 --> 01:11:06
information lives right and and that

01:11:03 --> 01:11:07
becomes the gateway to to your data or

01:11:05 --> 01:11:08
something like that so there's there's

01:11:06 --> 01:11:09
different things that are exact I would

01:11:07 --> 01:11:12
obviously make the accounting much

01:11:08 --> 01:11:13
easier and also that would give you kind

01:11:11 --> 01:11:16
of that cloud-to-cloud sort of

01:11:12 --> 01:11:17
performance increase so so it's I think

01:11:15 --> 01:11:20
it's clear we wouldn't go to data banks

01:11:16 --> 01:11:21
or these kinds of centralized accounting

01:11:19 --> 01:11:23
registries directly because you kind of

01:11:20 --> 01:11:25
have to have the initial adoption first

01:11:22 --> 01:11:27
but if I had to guess it's something

01:11:24 --> 01:11:31
like that right we won't

01:11:26 --> 01:11:33
see that for awhile and it's not even

01:11:30 --> 01:11:35
clear what what that would look like but

01:11:32 --> 01:11:36
I think it is possible we just have

01:11:34 --> 01:11:40
to get through sort of non-trivial

01:11:35 --> 01:11:42
adoption first yeah so it's kind of hazy

01:11:39 --> 01:11:46
but it's picking the future so I guess

01:11:42 --> 01:11:47
that's how that goes are you wondering I

01:11:45 --> 01:11:51
was just wondering if you can comment

01:11:46 --> 01:11:53
briefly on what you think is the biggest

01:11:50 --> 01:11:56
mistake being made with respect to

01:11:52 --> 01:11:58
recommendation systems transparency and

01:11:55 --> 01:12:01
what if you can comment briefly on what

01:11:57 --> 01:12:03
you think might be the most or the best

01:12:00 --> 01:12:05
solution so all of this is a mistake I

01:12:03 --> 01:12:06
would say the biggest opportunity for

01:12:04 --> 01:12:09
ecommendation systems is that they have

01:12:05 --> 01:12:12
the potential to be more holistic so for

01:12:08 --> 01:12:16
example if you recommended a movie to me

01:12:11 --> 01:12:18
based on whether or not it's most likely

01:12:15 --> 01:12:20
didn't keep me engaged but I keep me

01:12:17 --> 01:12:22
watching movies it's not really a

01:12:19 --> 01:12:23
holistic recommendation it's nice saying

01:12:21 --> 01:12:25
hey you should do this because it's

01:12:22 --> 01:12:27
gonna make your life more fulfilling

01:12:24 --> 01:12:29
more satisfied whatever it's just going

01:12:26 --> 01:12:31
to glue me to my television more right

01:12:28 --> 01:12:32
so I think the best the biggest

01:12:30 --> 01:12:33
opportunity and particularly with

01:12:31 --> 01:12:35
privacy-preserving machine learning is

01:12:32 --> 01:12:37
that if a recommender system could have

01:12:34 --> 01:12:38
the ability to access private data

01:12:36 --> 01:12:40
without actually seeing it right and

01:12:37 --> 01:12:42
answer the question you know how do I

01:12:39 --> 01:12:44
give the best recommendation so that

01:12:41 --> 01:12:45
his person gets a good night's sleep or

01:12:43 --> 01:12:47
has more meaningful friendships or

01:12:44 --> 01:12:47
whatever like these of these these

01:12:46 --> 01:12:49
attributes that are actually

01:12:46 --> 01:12:50
particularly sensitive but there are

01:12:48 --> 01:12:53
things that we actually want to optimize

01:12:49 --> 01:12:55
for that we could have vastly more

01:12:52 --> 01:12:56
beneficial recommendation systems than

01:12:54 --> 01:12:57
we do now just by virtue of having

01:12:55 --> 01:12:59
better infrastructure for dealing with

01:12:56 --> 01:13:02
private data so I think actually what

01:12:58 --> 01:13:03
he as far as like the biggest

01:13:01 --> 01:13:04
limitation of our major systems right

01:13:02 --> 01:13:06
now it's just that they don't have

01:13:03 --> 01:13:09
access to enough information to have

01:13:05 --> 01:13:12
good targets that doesn't make sense we

01:13:08 --> 01:13:13
would like them to have better targets

01:13:11 --> 01:13:15
but in order to do that they have ax

01:13:12 --> 01:13:16
to information about those targets and I

01:13:14 --> 01:13:18
think that's what sort of

01:13:15 --> 01:13:19
privacy-preserving technologists could

01:13:17 --> 01:13:22
bring to bear on recommendation systems

01:13:18 --> 01:13:24
yeah thanks yeah great question by the

01:13:21 --> 01:13:30
way one more time please give Van gerbig

01:13:23 --> 01:13:30
an thank you so much thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
