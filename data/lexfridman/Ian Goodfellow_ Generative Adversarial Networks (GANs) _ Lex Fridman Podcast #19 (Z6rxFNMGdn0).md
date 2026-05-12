---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Z6rxFNMGdn0"
title: "Ian Goodfellow: Generative Adversarial Networks (GANs) | Lex Fridman Podcast #19"
video_url: "https://www.youtube.com/watch?v=Z6rxFNMGdn0"
thumbnail_url: "https://i.ytimg.com/vi/Z6rxFNMGdn0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Z6rxFNMGdn0"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-04-18T16:34:19.000Z"
upload_date: "2019-04-18"
duration_seconds: 4117
duration_human: "1:08:37"
view_count: 303841
like_count: 6492
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:11:44.440Z"
---

# Ian Goodfellow: Generative Adversarial Networks (GANs) | Lex Fridman Podcast #19

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Z6rxFNMGdn0
- video_id: Z6rxFNMGdn0
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-04-18T16:34:19.000Z
- upload_date: 2019-04-18
- duration: 1:08:37
- view_count: 303841
- like_count: 6492
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
the following is a conversation with Ian

00:00:02 --> 00:00:07
good fellow he's the author of the

00:00:04 --> 00:00:10
popular textbook on deep learning simply

00:00:06 --> 00:00:12
titled deep learning he coined the term

00:00:09 --> 00:00:16
of generative adversarial networks

00:00:11 --> 00:00:19
otherwise known as Ganz and with his

00:00:15 --> 00:00:22
2014 paper is responsible for launching

00:00:18 --> 00:00:24
the incredible growth of research and

00:00:21 --> 00:00:27
innovation in this subfield of deep

00:00:23 --> 00:00:30
learning he got his BS and MS at

00:00:26 --> 00:00:32
Stanford his PhD at University of

00:00:29 --> 00:00:35
Montreal with yoshua bengio and Erin

00:00:31 --> 00:00:37
Kerrville he held several research

00:00:34 --> 00:00:40
positions including an open AI Google

00:00:36 --> 00:00:43
brain and now at Apple as the director

00:00:39 --> 00:00:45
of machine learning this recording

00:00:42 --> 00:00:47
happened while Ian was still a Google

00:00:44 --> 00:00:50
brain but we don't talk about anything

00:00:46 --> 00:00:53
specific to Google or any other

00:00:49 --> 00:00:55
organization this conversation is part

00:00:52 --> 00:00:57
of the artificial intelligence podcast

00:00:54 --> 00:00:59
if you enjoy it subscribe on YouTube

00:00:56 --> 00:01:03
iTunes or simply connect with me on

00:00:58 --> 00:01:06
Twitter at lex friedman spelled fri d

00:01:02 --> 00:01:11
and now here's my conversation with Ian

00:01:05 --> 00:01:14
good fellow you open your popular deep

00:01:10 --> 00:01:15
learning book with a Russian doll type

00:01:13 --> 00:01:18
diagram that shows deep learning is a

00:01:14 --> 00:01:20
subset of representation learning which

00:01:17 --> 00:01:24
in turn is a subset of machine learning

00:01:19 --> 00:01:26
and finally a subset of AI so this kind

00:01:23 --> 00:01:28
of implies that there may be limits to

00:01:25 --> 00:01:31
deep learning in the context of AI so

00:01:27 --> 00:01:33
what do you think is the current limits

00:01:30 --> 00:01:36
of deep learning and are those limits

00:01:32 --> 00:01:37
omething that we can overcome with time

00:01:35 --> 00:01:39
yeah I think one of the biggest

00:01:36 --> 00:01:41
limitations of deep learning is that

00:01:38 --> 00:01:45
right now it requires really a lot of

00:01:40 --> 00:01:46
data especially labeled data there's

00:01:44 --> 00:01:49
ome unsupervised and semi-supervised

00:01:45 --> 00:01:50
learning algorithms that can reduce the

00:01:48 --> 00:01:52
amount of labeled data you need but they

00:01:49 --> 00:01:54
still require a lot of unlabeled data

00:01:51 --> 00:01:55
reinforcement learning algorithms they

00:01:53 --> 00:01:59
don't need labels but they need really a

00:01:54 --> 00:02:01
lot of experiences as human beings we

00:01:58 --> 00:02:04
don't learn to play pong by failing at

00:02:00 --> 00:02:07
pong two million times so just getting

00:02:03 --> 00:02:09
the generalization ability better is one

00:02:06 --> 00:02:10
of the most important bottlenecks and

00:02:08 --> 00:02:13
the capability of the technology today

00:02:09 --> 00:02:14
and then I guess I'd also say deep

00:02:12 --> 00:02:18
learning is like a

00:02:13 --> 00:02:22
of a bigger system so far nobody is

00:02:17 --> 00:02:24
really proposing to have only what you'd

00:02:21 --> 00:02:27
call deep learning as the entire

00:02:23 --> 00:02:30
ingredient of intelligence you use deep

00:02:26 --> 00:02:33
learning as sub modules of other systems

00:02:29 --> 00:02:36
like alphago has a deep learning model

00:02:32 --> 00:02:37
that estimates the value function most

00:02:35 --> 00:02:39
reinforcement learning algorithms have a

00:02:36 --> 00:02:41
deep learning module that estimates

00:02:38 --> 00:02:44
which action to take next but you might

00:02:40 --> 00:02:47
have other components here basically as

00:02:43 --> 00:02:50
building a function estimator do you

00:02:46 --> 00:02:51
think it's possible you said nobody is

00:02:49 --> 00:02:53
kind of in thinking about this so far

00:02:50 --> 00:02:56
but do you think neural networks could

00:02:52 --> 00:02:58
be made to reason in the way symbolic

00:02:55 --> 00:03:01
systems did in the 80s and 90s to do

00:02:57 --> 00:03:03
more create more like programs as

00:03:00 --> 00:03:06
opposed to functions yeah I think we

00:03:02 --> 00:03:08
already see that a little bit I already

00:03:05 --> 00:03:11
kind of think of neural nets as a kind

00:03:07 --> 00:03:14
of program I think of deep learning as

00:03:10 --> 00:03:17
basically learning programs that have

00:03:13 --> 00:03:19
more than one step so if you draw a

00:03:16 --> 00:03:22
flowchart or or if you draw a tensor

00:03:18 --> 00:03:23
flow graph describing your machine

00:03:21 --> 00:03:25
learning model I think of the depth of

00:03:22 --> 00:03:27
that graph is describing the number of

00:03:24 --> 00:03:29
steps that run in sequence and then the

00:03:26 --> 00:03:32
width of that graph is the number of

00:03:28 --> 00:03:33
steps that run in parallel now it's been

00:03:31 --> 00:03:34
long enough that we've had deep learning

00:03:32 --> 00:03:36
working that it's a little bit silly to

00:03:33 --> 00:03:39
even discuss shallow learning anymore

00:03:35 --> 00:03:41
but back when I first got involved in AI

00:03:38 --> 00:03:42
when we used machine learning we were

00:03:40 --> 00:03:45
usually learning things like support

00:03:41 --> 00:03:46
vector machines you could have a lot of

00:03:44 --> 00:03:48
input features to the model and you

00:03:45 --> 00:03:49
could multiply each feature by a

00:03:47 --> 00:03:51
different weight but all those

00:03:48 --> 00:03:53
multiplications were done in parallel to

00:03:50 --> 00:03:54
each other there wasn't a lot done in

00:03:52 --> 00:03:57
series I think what we got with deep

00:03:54 --> 00:04:00
learning was really the ability to have

00:03:56 --> 00:04:03
steps of a program that run in sequence

00:03:59 --> 00:04:05
and I think that we've actually started

00:04:02 --> 00:04:07
to see that what's important with deep

00:04:04 --> 00:04:09
learning is more the fact that we have a

00:04:06 --> 00:04:11
multi-step program rather than the fact

00:04:08 --> 00:04:14
hat we've learned a representation if

00:04:10 --> 00:04:18
you look at things like res nuts for

00:04:13 --> 00:04:20
example they take one particular kind of

00:04:17 --> 00:04:23
representation and they update it

00:04:19 --> 00:04:25
several times back when deep learning

00:04:22 --> 00:04:28
first really took off in the academic

00:04:24 --> 00:04:29
world in 2006 when Geoff Hinton

00:04:27 --> 00:04:32
showed that you could train deep belief

00:04:28 --> 00:04:34
networks everybody who was under ested

00:04:31 --> 00:04:36
in the idea thought of it as each layer

00:04:33 --> 00:04:38
learns a different level of abstraction

00:04:35 --> 00:04:40
but the first layer trained on images

00:04:37 --> 00:04:41
learn something like edges and the

00:04:39 --> 00:04:42
second layer learns corners and

00:04:40 --> 00:04:44
eventually you get these kind of

00:04:42 --> 00:04:47
grandmother's cell units that recognize

00:04:43 --> 00:04:51
specific objects today I think most

00:04:46 --> 00:04:52
people think of it more as a computer

00:04:50 --> 00:04:54
program where as you add more layers you

00:04:51 --> 00:04:56
can do more updates before you output

00:04:53 --> 00:04:59
your final number but I don't think

00:04:55 --> 00:05:03
anybody believes the layer 150 of the

00:04:58 --> 00:05:05
resin it is a grand grandmother cell and

00:05:02 --> 00:05:08
you know layer 100 is contours or

00:05:04 --> 00:05:09
something like that okay so you think

00:05:07 --> 00:05:12
you're not thinking of it as a singular

00:05:08 --> 00:05:15
epresentation that keeps building you

00:05:11 --> 00:05:17
think of it as a program sort of almost

00:05:14 --> 00:05:20
like a state the representation is a

00:05:16 --> 00:05:21
state of understanding and yeah I think

00:05:19 --> 00:05:23
of it as a program that makes several

00:05:20 --> 00:05:26
updates and arrives it better and better

00:05:22 --> 00:05:28
understandings but it's not replacing

00:05:25 --> 00:05:31
the representation at each step its

00:05:27 --> 00:05:33
refining it and in some sense that's a

00:05:30 --> 00:05:34
little bit like reasoning it's not

00:05:32 --> 00:05:37
reasoning in the form of deduction but

00:05:33 --> 00:05:39
it's reasoning in the form of taking a

00:05:36 --> 00:05:41
thought and refining it and refining it

00:05:38 --> 00:05:44
carefully until it's good enough to use

00:05:40 --> 00:05:46
do you think and I hope you don't mind

00:05:43 --> 00:05:49
we'll jump philosophical every once in a

00:05:45 --> 00:05:51
while do you think of you know a

00:05:48 --> 00:05:55
cognition human cognition or even

00:05:50 --> 00:05:58
consciousness as simply a result of this

00:05:54 --> 00:05:59
kind of cincuenta sequential

00:05:57 --> 00:06:03
representation learning do you think

00:05:58 --> 00:06:04
that can emerge cognition yes I think so

00:06:02 --> 00:06:08
consciousness it's really hard to even

00:06:03 --> 00:06:10
define what we mean by that I guess

00:06:07 --> 00:06:13
there's consciousness is often defined

00:06:09 --> 00:06:16
as things like having self-awareness and

00:06:12 --> 00:06:17
that's relatively easy to turn into

00:06:15 --> 00:06:19
something actionable for a computer

00:06:16 --> 00:06:21
scientists the reason about people also

00:06:18 --> 00:06:23
defined consciousness in terms of having

00:06:20 --> 00:06:25
qualitative states of experience like

00:06:22 --> 00:06:26
qualia and there's all these

00:06:24 --> 00:06:29
philosophical problems like could you

00:06:25 --> 00:06:31
imagine jambe who does all the same

00:06:28 --> 00:06:33
information processing as a human but

00:06:30 --> 00:06:36
doesn't really have the qualitative

00:06:32 --> 00:06:38
xperiences that we have that sort of

00:06:35 --> 00:06:41
thing I have no idea how to formalize or

00:06:37 --> 00:06:42
turn it into a scientific question I

00:06:40 --> 00:06:44
don't know how you could run in

00:06:41 --> 00:06:45
experiment to tell whether a person is a

00:06:43 --> 00:06:47
zombie or not

00:06:44 --> 00:06:49
and similarly I don't know how you could

00:06:46 --> 00:06:52
run an experiment to tell whether an

00:06:48 --> 00:06:54
advanced AI system had become conscious

00:06:51 --> 00:06:56
in the sense of qualia or not but in the

00:06:53 --> 00:06:57
more practical sense like almost like

00:06:55 --> 00:06:58
self attention

00:06:56 --> 00:07:01
you think consciousness and cognition

00:06:57 --> 00:07:05
can in an impressive way emerge from

00:07:00 --> 00:07:08
current types of architectures though

00:07:04 --> 00:07:09
yes yeah or or if if you think of

00:07:07 --> 00:07:13
consciousness in terms of self-awareness

00:07:08 --> 00:07:16
and just making plans based on the fact

00:07:12 --> 00:07:18
hat the agent itself exists in the

00:07:15 --> 00:07:21
world reinforcement learning algorithms

00:07:17 --> 00:07:24
are already more or less forced to model

00:07:20 --> 00:07:26
the agents effect on the environment so

00:07:23 --> 00:07:29
that that more limited version of

00:07:25 --> 00:07:32
consciousness is already something that

00:07:28 --> 00:07:34
we get limited versions of with

00:07:31 --> 00:07:38
reinforcement learning algorithms if

00:07:33 --> 00:07:40
they're trained well but you say limited

00:07:37 --> 00:07:42
so the the big question really is how

00:07:39 --> 00:07:47
you jump from limited to human level

00:07:41 --> 00:07:49
yeah right and whether it's possible you

00:07:46 --> 00:07:51
know the even just building common-sense

00:07:48 --> 00:07:53
reasoning seems to be exceptionally

00:07:50 --> 00:07:55
difficult so K if we scale things up

00:07:52 --> 00:07:57
forget much better on supervised

00:07:54 --> 00:08:00
learning if we get better at labeling

00:07:56 --> 00:08:03
forget bigger datasets and the more

00:07:59 --> 00:08:05
compute do you think we'll start to see

00:08:02 --> 00:08:09
really impressive things that go from

00:08:04 --> 00:08:12
limited to you know something echoes of

00:08:08 --> 00:08:14
human level cognition I think so yeah

00:08:11 --> 00:08:16
I'm optimistic about what can happen

00:08:13 --> 00:08:18
just with more computation and more data

00:08:15 --> 00:08:21
I do think it'll be important to get the

00:08:17 --> 00:08:23
right kind of data today most of the

00:08:20 --> 00:08:26
machine learning systems we train our

00:08:22 --> 00:08:30
mostly trained on one type of data for

00:08:25 --> 00:08:32
each model but the human brain we get

00:08:29 --> 00:08:35
all of our different senses and we have

00:08:31 --> 00:08:37
many different experiences like you know

00:08:34 --> 00:08:40
riding a bike driving a car talking to

00:08:36 --> 00:08:44
people reading I think when you get that

00:08:40 --> 00:08:45
kind of integrated data set working with

00:08:43 --> 00:08:48
a machine learning model that can

00:08:44 --> 00:08:51
actually close the loop and interact we

00:08:47 --> 00:08:53
may find that algorithms not so

00:08:50 --> 00:08:54
different from what we have today learn

00:08:52 --> 00:08:55
really interesting things when you scale

00:08:53 --> 00:08:59
them up a lot and

00:08:54 --> 00:09:00
a large amount of multimodal data so

00:08:58 --> 00:09:03
multimodal is really interesting but

00:08:59 --> 00:09:07
within like you're working adversarial

00:09:02 --> 00:09:12
examples so selecting within modal

00:09:06 --> 00:09:14
within up one mode of data selecting

00:09:11 --> 00:09:16
better at what are the difficult cases

00:09:13 --> 00:09:19
from which are most useful to learn from

00:09:15 --> 00:09:22
oh yeah like could we could you get a

00:09:18 --> 00:09:23
whole lot of mileage out of designing a

00:09:21 --> 00:09:25
model that's resistant to adverse fare

00:09:22 --> 00:09:27
xamples or something like that right

00:09:24 --> 00:09:29
yeah question but my thinking on that

00:09:26 --> 00:09:31
has evolved a lot over the last few

00:09:28 --> 00:09:32
years one nice thing when I first

00:09:30 --> 00:09:34
arted to really invest in studying

00:09:31 --> 00:09:36
adversarial examples I was thinking of

00:09:33 --> 00:09:38
it mostly as that versus aryl examples

00:09:35 --> 00:09:41
reveal a big problem with machine

00:09:37 --> 00:09:44
learning and we would like to close the

00:09:40 --> 00:09:46
gap between how machine learning models

00:09:43 --> 00:09:49
respond to adversarial examples and how

00:09:45 --> 00:09:50
humans respond after studying the

00:09:48 --> 00:09:52
problem more I still think that

00:09:49 --> 00:09:54
adversarial examples are important I

00:09:51 --> 00:09:57
think of them now more of as a security

00:09:53 --> 00:09:59
liability then as an issue that

00:09:56 --> 00:10:02
necessarily shows there something

00:09:58 --> 00:10:04
uniquely wrong with machine learning as

00:10:01 --> 00:10:06
opposed to humans also do you see them

00:10:03 --> 00:10:09
as a tool to improve the performance of

00:10:05 --> 00:10:12
the system not not on the security side

00:10:08 --> 00:10:14
but literally just accuracy I do see

00:10:11 --> 00:10:16
them as a kind of tool on that side but

00:10:13 --> 00:10:18
maybe not quite as much as I used to

00:10:15 --> 00:10:20
think we've started to find that there's

00:10:17 --> 00:10:23
a trade-off between accuracy on

00:10:19 --> 00:10:26
adversarial examples and accuracy on

00:10:22 --> 00:10:29
clean examples back in 2014 when I did

00:10:25 --> 00:10:32
the first adversary trained classifier

00:10:28 --> 00:10:34
that showed resistance to some kinds of

00:10:31 --> 00:10:37
adversarial examples it also got better

00:10:33 --> 00:10:38
at the clean data on M NIST and that's

00:10:36 --> 00:10:40
omething we've replicated several times

00:10:37 --> 00:10:42
an M NIST that when we train against

00:10:39 --> 00:10:45
weak adversarial examples Emnes

00:10:41 --> 00:10:47
classifiers get more accurate so far

00:10:44 --> 00:10:49
that hasn't really held up on other data

00:10:46 --> 00:10:52
sets and hasn't held up when we train

00:10:48 --> 00:10:54
against stronger adversaries it seems

00:10:51 --> 00:10:57
like when you confront a really strong

00:10:53 --> 00:11:00
adversary you tend to have to give

00:10:56 --> 00:11:03
something up interesting this is such a

00:10:59 --> 00:11:04
compelling idea because it feels it

00:11:02 --> 00:11:07
feels like that's how us humans learn

00:11:03 --> 00:11:09
yeah the difficult cases we we try to

00:11:06 --> 00:11:11
think of what would we screw up

00:11:08 --> 00:11:13
and then we make sure we fix that yeah

00:11:10 --> 00:11:16
it's also in a lot of branches of

00:11:12 --> 00:11:18
engineering you do a worst case analysis

00:11:15 --> 00:11:20
and make sure that your system will work

00:11:17 --> 00:11:22
in the worst case and then that

00:11:19 --> 00:11:26
guarantees that it'll work in all of the

00:11:21 --> 00:11:27
messy average cases that happen when you

00:11:25 --> 00:11:29
go out into a really randomized world

00:11:26 --> 00:11:31
you know with driving with autonomous

00:11:28 --> 00:11:36
vehicles there seems to be a desire to

00:11:30 --> 00:11:37
just look for think I'd viscerally tried

00:11:35 --> 00:11:40
to figure out how to mess up the system

00:11:36 --> 00:11:43
and if you can be robust to all those

00:11:39 --> 00:11:45
difficult cases then you can it's a hand

00:11:42 --> 00:11:47
waving empirical way to show that your

00:11:44 --> 00:11:49
system is yeah yes

00:11:46 --> 00:11:51
today most adverse early example

00:11:48 --> 00:11:53
research isn't really focused on a

00:11:50 --> 00:11:55
particular use case but there are a lot

00:11:52 --> 00:11:58
of different use cases where you'd like

00:11:54 --> 00:11:59
to make sure that the adversary can't

00:11:57 --> 00:12:02
interfere with the operation of your

00:11:58 --> 00:12:04
system like in finance if you have an

00:12:01 --> 00:12:06
algorithm making trades for you people

00:12:03 --> 00:12:08
go to a lot of an effort to obfuscate

00:12:05 --> 00:12:10
their algorithm that's both to protect

00:12:07 --> 00:12:13
heir IP because you don't want to

00:12:09 --> 00:12:15
research and develop a profitable

00:12:12 --> 00:12:17
trading algorithm then have somebody

00:12:14 --> 00:12:19
else capture the gains but it's at least

00:12:16 --> 00:12:21
partly because you don't want people to

00:12:18 --> 00:12:24
make adversarial examples that fool you

00:12:20 --> 00:12:27
r algorithm into making bad trades

00:12:23 --> 00:12:29
or I guess one area that's been popular

00:12:26 --> 00:12:31
in the academic literature is speech

00:12:28 --> 00:12:35
recognition if you use speech

00:12:30 --> 00:12:38
recognition to hear an audio waveform

00:12:34 --> 00:12:41
and then in turn that into a command

00:12:37 --> 00:12:43
that a phone executes for you you don't

00:12:40 --> 00:12:44
want and a malicious adversary to be

00:12:42 --> 00:12:46
able to produce audio that gets

00:12:43 --> 00:12:48
interpreted as malicious commands

00:12:45 --> 00:12:50
especially if a human in the room

00:12:47 --> 00:12:53
doesn't realize that something like that

00:12:49 --> 00:12:56
is happening in speech recognition has

00:12:52 --> 00:12:59
there been much success in in being able

00:12:55 --> 00:13:02
to create adversarial examples that fool

00:12:58 --> 00:13:03
the system yeah actually I guess the

00:13:01 --> 00:13:06
first work that I'm aware of is a paper

00:13:02 --> 00:13:09
called hidden voice commands that came

00:13:05 --> 00:13:12
out in 2016 I believe and they were able

00:13:08 --> 00:13:16
to show that they could make sounds that

00:13:11 --> 00:13:19
are not understandable by a human but

00:13:15 --> 00:13:20
are recognized as the target phrase that

00:13:18 --> 00:13:23
he attacker wants the phone to

00:13:19 --> 00:13:25
recognize it as since then things have

00:13:22 --> 00:13:27
gotten a little bit better on the

00:13:24 --> 00:13:34
attacker side when worse on the defender

00:13:27 --> 00:13:36
side it's become possible to make sounds

00:13:33 --> 00:13:39
that sound like normal speech but are

00:13:36 --> 00:13:42
actually interpreted as a different

00:13:38 --> 00:13:44
sentence than the human here's the level

00:13:41 --> 00:13:47
of perceptibility of the adversarial

00:13:43 --> 00:13:49
perturbation is still kind of high the

00:13:46 --> 00:13:51
when you listen to the recording it

00:13:48 --> 00:13:54
sounds like there's some noise in the

00:13:50 --> 00:13:55
background just like rustling sounds but

00:13:53 --> 00:13:57
hose rustling sounds are actually the

00:13:54 --> 00:13:58
adversarial perturbation that makes the

00:13:56 --> 00:14:00
phone hear a completely different

00:13:57 --> 00:14:02
sentence yeah that's so fascinating

00:13:59 --> 00:14:04
Peter Norvig mention that you're writing

00:14:01 --> 00:14:06
the deep learning chapter for the fourth

00:14:03 --> 00:14:09
edition of the artificial intelligence

00:14:05 --> 00:14:12
the modern approach book so how do you

00:14:08 --> 00:14:16
even begin summarizing the field of deep

00:14:11 --> 00:14:18
learning in a chapter well in my case I

00:14:15 --> 00:14:21
waited like a year before I actually

00:14:17 --> 00:14:22
read anything is it

00:14:20 --> 00:14:25
even having written a full length

00:14:21 --> 00:14:27
textbook before it's still pretty

00:14:24 --> 00:14:31
intimidating to try to start writing

00:14:26 --> 00:14:34
just one chapter that covers everything

00:14:30 --> 00:14:35
one thing that helped me make that plan

00:14:33 --> 00:14:38
was actually the experience of having

00:14:34 --> 00:14:40
ridden the full book before and then

00:14:37 --> 00:14:42
watching how the field changed after the

00:14:39 --> 00:14:44
book came out I realized there's a lot

00:14:41 --> 00:14:47
of topics that were maybe extraneous in

00:14:43 --> 00:14:49
the first book and just seeing what

00:14:46 --> 00:14:52
stood the test of a few years of being

00:14:48 --> 00:14:53
published and what seems a little bit

00:14:51 --> 00:14:55
less important to have included now

00:14:52 --> 00:14:58
helped me pare down the topics I wanted

00:14:54 --> 00:15:00
to cover for the book it's also really

00:14:57 --> 00:15:02
nice now that the field is kind of

00:14:59 --> 00:15:04
stabilized to the point where some core

00:15:01 --> 00:15:06
ideas from the 1980s are still used

00:15:03 --> 00:15:08
today when I first started studying

00:15:05 --> 00:15:11
machine learning almost everything from

00:15:07 --> 00:15:13
the 1980s had been rejected and now some

00:15:10 --> 00:15:15
of it has come back so that stuff that's

00:15:12 --> 00:15:18
really stood the test of time is what I

00:15:14 --> 00:15:22
focused on putting into the book there's

00:15:17 --> 00:15:24
also I guess two different philosophies

00:15:21 --> 00:15:25
about how you might write a book one

00:15:23 --> 00:15:27
philosophy is you try to write a

00:15:24 --> 00:15:28
reference that covers everything and the

00:15:26 --> 00:15:31
other philosophy is you try to provide a

00:15:27 --> 00:15:33
high level summary that gives people the

00:15:30 --> 00:15:35
language to understand a field and tells

00:15:32 --> 00:15:37
them what the most important concepts

00:15:34 --> 00:15:39
are the first deep learning book that I

00:15:36 --> 00:15:41
wrote with Yahshua and Aaron was

00:15:38 --> 00:15:43
omewhere between the the two

00:15:40 --> 00:15:46
philosophies that it's trying to be both

00:15:42 --> 00:15:48
a reference and an introductory guide

00:15:45 --> 00:15:51
writing this chapter for Russell and

00:15:47 --> 00:15:54
Norvig book I was able to focus more on

00:15:50 --> 00:15:55
just a concise introduction of the key

00:15:53 --> 00:15:57
concepts and the language you need to

00:15:54 --> 00:15:58
read about them more and a lot of cases

00:15:56 --> 00:16:01
actually just wrote paragraphs that said

00:15:57 --> 00:16:03
here's a rapidly evolving area that you

00:16:00 --> 00:16:04
should pay attention to it's it's

00:16:02 --> 00:16:08
pointless to try to tell you what the

00:16:03 --> 00:16:12
latest and best version of a you know

00:16:07 --> 00:16:13
learn to learn model is right you know I

00:16:11 --> 00:16:15
can I can point you to a paper that's

00:16:12 --> 00:16:18
recent right now but there isn't a whole

00:16:14 --> 00:16:21
lot of a reason to delve into exactly

00:16:17 --> 00:16:23
what's going on with the latest learning

00:16:20 --> 00:16:25
to learn approach or the latest module

00:16:22 --> 00:16:27
produced by learning to learn algorithm

00:16:24 --> 00:16:29
you should know that learning to learn

00:16:26 --> 00:16:31
is a thing and that it may very well be

00:16:28 --> 00:16:34
the source of the latest and greatest

00:16:30 --> 00:16:35
convolutional net or recurrent net

00:16:33 --> 00:16:37
module that you would want to use in

00:16:34 --> 00:16:38
your latest project but there isn't a

00:16:36 --> 00:16:42
lot of point in trying to summarize

00:16:37 --> 00:16:44
xactly which architecture in which

00:16:41 --> 00:16:44
learning approach got to which level of

00:16:43 --> 00:16:48
performance

00:16:43 --> 00:16:51
so you maybe focus more on the basics of

00:16:47 --> 00:16:54
the methodology so from back propagation

00:16:51 --> 00:16:55
to feed-forward to recur in your

00:16:53 --> 00:16:58
networks convolutional that kind of

00:16:54 --> 00:17:01
thing yeah yeah so if I were to ask you

00:16:57 --> 00:17:03
I remember I took algorithms and data

00:17:00 --> 00:17:08
structures algorithm there of course

00:17:02 --> 00:17:12
remember the professor asked what is an

00:17:07 --> 00:17:14
algorithm and yelled at everybody in a

00:17:11 --> 00:17:16
good way that nobody was answering it

00:17:13 --> 00:17:17
correctly everybody knew what the alkyl

00:17:15 --> 00:17:19
it was graduate course everybody knew

00:17:16 --> 00:17:22
hat an algorithm was but they weren't

00:17:18 --> 00:17:24
able to answer it well let me ask you in

00:17:21 --> 00:17:29
that same spirit what is deep learning I

00:17:23 --> 00:17:32
would say deep learning is any kind of

00:17:28 --> 00:17:36
machine learning that involves learning

00:17:31 --> 00:17:40
parameters of more than one consecutive

00:17:35 --> 00:17:42
step so that I mean shallow learning is

00:17:39 --> 00:17:44
things where you learn a lot of

00:17:41 --> 00:17:46
operations that happen in parallel you

00:17:43 --> 00:17:49
might have a system that makes multiple

00:17:45 --> 00:17:52
steps like you might have had designed

00:17:48 --> 00:17:54
feature extractors but really only one

00:17:51 --> 00:17:56
step is learned deep learning is

00:17:53 --> 00:17:59
anything where you have multiple

00:17:55 --> 00:18:00
operations in sequence and that includes

00:17:58 --> 00:18:02
the things that are really popular today

00:17:59 --> 00:18:05
like convolutional networks and

00:18:01 --> 00:18:06
recurrent networks but it also includes

00:18:04 --> 00:18:10
ome of the things that have died out

00:18:05 --> 00:18:13
like Bolton machines where we weren't

00:18:09 --> 00:18:15
using back propagation today I hear a

00:18:12 --> 00:18:20
lot of people define deep learning as

00:18:14 --> 00:18:24
gradient descent applied to these

00:18:19 --> 00:18:25
differentiable functions and I think

00:18:23 --> 00:18:27
that's a legitimate usage of the term

00:18:24 --> 00:18:29
it's just different from the way that I

00:18:26 --> 00:18:33
use the term myself so what's an example

00:18:28 --> 00:18:36
of deep learning that is not gradient

00:18:32 --> 00:18:38
descent on differentiable functions in

00:18:35 --> 00:18:41
your I mean not specifically perhaps but

00:18:37 --> 00:18:44
more even looking into the future what's

00:18:40 --> 00:18:46
your thought about that space of

00:18:43 --> 00:18:47
approaches yeah so I tend to think of

00:18:45 --> 00:18:49
machine learning algorithms as

00:18:46 --> 00:18:52
decomposed into really three different

00:18:48 --> 00:18:54
pieces there's the model which can be

00:18:51 --> 00:18:57
something like a neural nut or a Bolton

00:18:53 --> 00:18:58
machine or a recurrent model and I

00:18:57 --> 00:19:01
basically just described

00:18:57 --> 00:19:04
how do you take data and how do you take

00:19:00 --> 00:19:05
parameters and you know what function do

00:19:03 --> 00:19:08
you use to make a prediction given the

00:19:04 --> 00:19:11
data and the parameters another piece of

00:19:07 --> 00:19:14
the learning algorithm is the

00:19:10 --> 00:19:15
optimization algorithm or not every

00:19:13 --> 00:19:17
algorithm can be really described in

00:19:14 --> 00:19:19
terms of optimization but what's the

00:19:16 --> 00:19:21
algorithm for updating the parameters or

00:19:18 --> 00:19:26
updating whatever the state of the

00:19:20 --> 00:19:27
network is and then the the last part is

00:19:25 --> 00:19:30
the the data set like how do you

00:19:26 --> 00:19:34
actually represent the world as it comes

00:19:29 --> 00:19:36
into your machine learning system so I

00:19:33 --> 00:19:38
think of deep learning as telling us

00:19:35 --> 00:19:42
omething about what does the model look

00:19:37 --> 00:19:44
like and basically to qualify as deep I

00:19:41 --> 00:19:47
say that it just has to have multiple

00:19:43 --> 00:19:49
layers that can be multiple steps in a

00:19:46 --> 00:19:51
feed-forward differentiable computation

00:19:48 --> 00:19:53
that can be multiple layers in a

00:19:50 --> 00:19:55
graphical model there's a lot of ways

00:19:52 --> 00:19:57
that you could satisfy me that something

00:19:54 --> 00:19:59
has multiple steps that are each

00:19:56 --> 00:20:01
parameterised separately

00:19:58 --> 00:20:03
I think of gradient descent as being all

00:20:00 --> 00:20:05
about that other piece the how do you

00:20:02 --> 00:20:07
actually update the parameters piece so

00:20:04 --> 00:20:09
you can imagine having a deep model like

00:20:06 --> 00:20:11
a convolutional net and training it with

00:20:08 --> 00:20:13
something like evolution or a genetic

00:20:10 --> 00:20:16
algorithm and I would say that still

00:20:12 --> 00:20:17
qualifies as deep learning and then in

00:20:15 --> 00:20:19
terms of models that aren't necessarily

00:20:16 --> 00:20:21
differentiable

00:20:18 --> 00:20:25
I guess Boltzmann machines are probably

00:20:20 --> 00:20:26
the main example of something where you

00:20:24 --> 00:20:29
can't really take a derivative and use

00:20:25 --> 00:20:31
that for the learning process but you

00:20:28 --> 00:20:34
can still argue that the model has

00:20:30 --> 00:20:36
many steps of processing that it applies

00:20:33 --> 00:20:38
when you run inference in the model so

00:20:35 --> 00:20:41
that's the steps of processing that's

00:20:37 --> 00:20:43
key so geoff hinton suggests that we

00:20:40 --> 00:20:46
need to throw away back prop back

00:20:42 --> 00:20:48
propagation and start all over what do

00:20:45 --> 00:20:50
you think about that what could an

00:20:47 --> 00:20:52
alternative direction of training nil

00:20:49 --> 00:20:54
networks look like I don't know that

00:20:51 --> 00:20:57
back propagation is going to go away

00:20:53 --> 00:20:59
entirely most of this time when we

00:20:56 --> 00:21:02
decide that a machine learning algorithm

00:20:58 --> 00:21:05
isn't on the critical path to research

00:21:01 --> 00:21:07
for improving AI the algorithm doesn't

00:21:04 --> 00:21:09
die it just becomes used for some

00:21:06 --> 00:21:10
specialized set of things

00:21:08 --> 00:21:13
a lot of algorithms like logistic

00:21:09 --> 00:21:15
regression don't seem that exciting to

00:21:12 --> 00:21:18
AI researchers who are working on things

00:21:14 --> 00:21:20
like speech recognition or autonomous

00:21:17 --> 00:21:22
cars today but there's still a lot of

00:21:19 --> 00:21:24
use for logistic regression and things

00:21:21 --> 00:21:28
like analyzing really noisy data and

00:21:23 --> 00:21:30
medicine and finance or making really

00:21:27 --> 00:21:33
rapid predictions in really time-limited

00:21:29 --> 00:21:34
contexts so I think I think back

00:21:32 --> 00:21:37
propagation and gradient descent are

00:21:33 --> 00:21:40
around to stay but they may not end up

00:21:36 --> 00:21:43
being everything that we need to get to

00:21:39 --> 00:21:46
real human level or superhuman AI are

00:21:42 --> 00:21:49
you optimistic about us discovering

00:21:45 --> 00:21:50
you know back propagation has been

00:21:48 --> 00:21:54
around for a few decades

00:21:49 --> 00:21:56
o I optimistic bus about us as a

00:21:53 --> 00:21:59
community being able to discover

00:21:55 --> 00:22:01
something better yeah I am I think I

00:21:58 --> 00:22:03
think we likely will find something that

00:22:00 --> 00:22:07
works better you could imagine things

00:22:02 --> 00:22:08
like having stacks of models where some

00:22:06 --> 00:22:10
of the lower level models predict

00:22:07 --> 00:22:13
parameters of the higher level models

00:22:09 --> 00:22:14
and so at the top level you're not

00:22:12 --> 00:22:15
learning in terms of literally

00:22:13 --> 00:22:17
calculating gradients but just

00:22:14 --> 00:22:19
predicting how different values will

00:22:16 --> 00:22:21
perform you can kind of see that already

00:22:18 --> 00:22:24
in some areas like Bayesian optimization

00:22:20 --> 00:22:25
where you have a Gaussian process that

00:22:23 --> 00:22:27
predicts how well different parameter

00:22:24 --> 00:22:29
values will perform we already used

00:22:26 --> 00:22:31
those kinds of algorithms for things

00:22:28 --> 00:22:32
like hyper parameter optimization and in

00:22:30 --> 00:22:34
general we know a lot of things other

00:22:31 --> 00:22:36
than back prep that work really well for

00:22:33 --> 00:22:39
specific problems the main thing we

00:22:35 --> 00:22:41
haven't found is a way of taking one of

00:22:38 --> 00:22:43
these other non back based algorithms

00:22:40 --> 00:22:44
and having it really advanced the

00:22:42 --> 00:22:48
state-of-the-art

00:22:43 --> 00:22:50
on an AI level problem right but I

00:22:47 --> 00:22:51
wouldn't be surprised if eventually we

00:22:49 --> 00:22:53
find that some of these algorithms that

00:22:50 --> 00:22:55
even the ones that already exists not

00:22:52 --> 00:22:59
even necessarily a new one we might find

00:22:54 --> 00:23:00
some way of customizing one of these

00:22:58 --> 00:23:03
algorithms to do something really

00:22:59 --> 00:23:08
interesting at the level of cognition or

00:23:02 --> 00:23:09
the the level of I think one system

00:23:07 --> 00:23:14
that we really don't have working quite

00:23:08 --> 00:23:15
right yet is like short-term memory we

00:23:13 --> 00:23:17
have things like LST M's they're called

00:23:14 --> 00:23:20
long short-term memory

00:23:16 --> 00:23:23
they still don't do quite what a human

00:23:19 --> 00:23:26
does with short-term memory

00:23:22 --> 00:23:29
like gradient descent to learn a

00:23:25 --> 00:23:32
specific fact has to do multiple steps

00:23:28 --> 00:23:35
on that fact like if I I tell you the

00:23:31 --> 00:23:36
meeting today is at 3 p.m. I don't need

00:23:34 --> 00:23:38
to say over and over again it's at 3

00:23:35 --> 00:23:40
p.m. it's not 3 p.m. it's at 3 p.m. it's

00:23:37 --> 00:23:42
a 3 p.m. right for you to do a gradient

00:23:39 --> 00:23:44
step on each one you just hear it once

00:23:41 --> 00:23:48
and you remember it there's been some

00:23:43 --> 00:23:49
work on things like self attention and

00:23:47 --> 00:23:52
attention like mechanisms like the

00:23:48 --> 00:23:54
neural Turing machine that can write to

00:23:51 --> 00:23:56
memory cells and update themselves with

00:23:53 --> 00:23:57
facts like that right away but I don't

00:23:55 --> 00:24:01
hink we've really nailed it yet and

00:23:56 --> 00:24:03
that's one area where I'd imagine that

00:24:00 --> 00:24:04
new optimization algorithms are

00:24:02 --> 00:24:08
different ways of applying existing

00:24:03 --> 00:24:10
optimization algorithms could give us a

00:24:07 --> 00:24:12
way of just lightning-fast updating the

00:24:09 --> 00:24:14
state of a machine learning system to

00:24:11 --> 00:24:16
contain a specific fact like that

00:24:14 --> 00:24:18
without needing to have it presented

00:24:15 --> 00:24:21
over and over and over again so some of

00:24:17 --> 00:24:24
the success of symbolic systems in the

00:24:20 --> 00:24:28
80s is they were able to assemble these

00:24:23 --> 00:24:30
kinds of facts better but dude there's a

00:24:27 --> 00:24:32
lot of expert input required and it's

00:24:29 --> 00:24:35
very limited in that sense do you ever

00:24:31 --> 00:24:37
look back to that as something that will

00:24:35 --> 00:24:39
have to return to eventually sort of

00:24:36 --> 00:24:42
dust off the book from the shelf and

00:24:38 --> 00:24:44
think about how we build knowledge

00:24:41 --> 00:24:46
representation knowledge place well we

00:24:43 --> 00:24:48
have to use graph searches searches

00:24:45 --> 00:24:49
right and like first-order logic and

00:24:47 --> 00:24:50
entailment and things like that a thing

00:24:48 --> 00:24:52
yeah exactly

00:24:49 --> 00:24:54
in my particular line of work which has

00:24:51 --> 00:24:57
mostly been machine learning security

00:24:53 --> 00:25:00
and and also generative modeling I

00:24:56 --> 00:25:02
haven't usually found myself moving in

00:24:59 --> 00:25:04
that direction for generative models I

00:25:01 --> 00:25:07
could see a little bit of it could be

00:25:03 --> 00:25:10
useful if you had something like a

00:25:06 --> 00:25:12
differentiable knowledge base or some

00:25:09 --> 00:25:15
other kind of knowledge base where it's

00:25:11 --> 00:25:16
possible for some of our fuzzier machine

00:25:14 --> 00:25:19
learning algorithms to interact with the

00:25:15 --> 00:25:20
knowledge base immanuel Network is kind

00:25:18 --> 00:25:25
of like that it's a differentiable

00:25:19 --> 00:25:27
knowledge base of sorts yeah but if if

00:25:24 --> 00:25:30
we had a really easy way of giving

00:25:26 --> 00:25:32
feedback to machine learning models that

00:25:29 --> 00:25:33
would clearly helped a lot with with

00:25:31 --> 00:25:34
generative models and so you could

00:25:32 --> 00:25:36
imagine one way of getting there would

00:25:33 --> 00:25:38
be get a lot better at natural

00:25:35 --> 00:25:40
anguage processing but another way of

00:25:37 --> 00:25:41
getting there would be take some kind of

00:25:39 --> 00:25:44
knowledge base and figure out a way for

00:25:40 --> 00:25:46
it to actually interact with a neural

00:25:43 --> 00:25:49
network being able to have a chat within

00:25:45 --> 00:25:51
y'all network yes so like one thing in

00:25:48 --> 00:25:53
generative models we see a lot today is

00:25:50 --> 00:25:56
you'll get things like faces that are

00:25:52 --> 00:25:58
not symmetrical like like people that

00:25:55 --> 00:26:00
have two eyes that are different colors

00:25:57 --> 00:26:01
and I mean there are people with eyes

00:25:59 --> 00:26:03
that are different colors in real life

00:26:00 --> 00:26:05
but not nearly as many of them as you

00:26:02 --> 00:26:08
tend to see in the machine learning

00:26:04 --> 00:26:09
enerated data so if if you had either a

00:26:07 --> 00:26:12
knowledge base that could contain the

00:26:08 --> 00:26:16
fact people's faces are generally

00:26:11 --> 00:26:17
approximately symmetric and eye color is

00:26:15 --> 00:26:20
especially likely to be the same on both

00:26:16 --> 00:26:23
sides being able to just inject that

00:26:19 --> 00:26:24
hint into the machine learning model

00:26:22 --> 00:26:26
without it having to discover that

00:26:23 --> 00:26:30
itself after studying a lot of data it

00:26:25 --> 00:26:31
would be a really useful feature I could

00:26:29 --> 00:26:32
see a lot of ways of getting there

00:26:30 --> 00:26:34
without bringing back some of the 1980s

00:26:31 --> 00:26:37
technology but I also see some ways that

00:26:33 --> 00:26:39
you could imagine extending the 1980s

00:26:36 --> 00:26:40
technology to play nice with neural nets

00:26:38 --> 00:26:43
and have it help get there

00:26:39 --> 00:26:46
awesome so you talked about the story of

00:26:42 --> 00:26:49
you coming up with idea of Gans at a bar

00:26:45 --> 00:26:52
with some friends you were arguing that

00:26:48 --> 00:26:54
his you know Gans would work Jenner of

00:26:51 --> 00:26:57
adversarial networks and the others

00:26:53 --> 00:27:00
didn't think so then he went home at

00:26:56 --> 00:27:02
midnight coated up and it worked so if I

00:26:59 --> 00:27:04
was a friend of yours at the bar I would

00:27:01 --> 00:27:07
also have doubts it's a really nice idea

00:27:03 --> 00:27:08
but I'm very skeptical that it would

00:27:06 --> 00:27:11
work what was the basis of their

00:27:07 --> 00:27:15
skepticism what was the basis of your

00:27:10 --> 00:27:16
intuition why he should work I don't

00:27:14 --> 00:27:20
want to be someone who goes around

00:27:15 --> 00:27:22
promoting alcohol for the science in

00:27:19 --> 00:27:23
this case I do actually think that

00:27:21 --> 00:27:26
drinking helped a little bit mm-hmm

00:27:22 --> 00:27:28
when your inhibitions are lowered you're

00:27:25 --> 00:27:32
more willing to try out things that you

00:27:27 --> 00:27:33
wouldn't try out otherwise so I I have

00:27:31 --> 00:27:35
noticed it in general that I'm less

00:27:32 --> 00:27:37
prone to shooting down some of my own

00:27:34 --> 00:27:40
ideas when I'm when I have had a little

00:27:36 --> 00:27:42
bit to drink I think if I had had that

00:27:39 --> 00:27:44
idea at lunch time yeah I probably would

00:27:41 --> 00:27:45
have thought it it's hard enough I mean

00:27:43 --> 00:27:46
one neural net you can't train a second

00:27:44 --> 00:27:49
neuron that in the inner loop of the

00:27:45 --> 00:27:50
outer neural net that was basically my

00:27:48 --> 00:27:51
friends

00:27:49 --> 00:27:54
action was that trying to train two

00:27:50 --> 00:27:56
neural nets at the same time would be

00:27:53 --> 00:27:58
too hard so it was more about the

00:27:55 --> 00:28:01
training process unless so my skepticism

00:27:57 --> 00:28:04
would be you know I'm sure you could

00:28:00 --> 00:28:05
train it but the thing would converge to

00:28:03 --> 00:28:08
would not be able to generate anything

00:28:04 --> 00:28:11
reasonable and any kind of reasonable

00:28:07 --> 00:28:12
realism yeah so so part of what all of

00:28:10 --> 00:28:15
us were thinking about when we had this

00:28:11 --> 00:28:17
conversation was deep Bolton machines

00:28:14 --> 00:28:19
which a lot of us in the lab including

00:28:16 --> 00:28:22
me were a big fan of deep bolts and

00:28:18 --> 00:28:24
machines at the time they involved two

00:28:21 --> 00:28:28
separate processes running at the same

00:28:23 --> 00:28:31
time one of them is called the positive

00:28:27 --> 00:28:33
phase where you load data into the model

00:28:30 --> 00:28:35
and tell the model to make the data more

00:28:32 --> 00:28:37
likely the owners called the negative

00:28:34 --> 00:28:39
phase where you draw samples from the

00:28:36 --> 00:28:42
model and tell the model to make those

00:28:38 --> 00:28:44
samples less likely in a deep Bolton

00:28:41 --> 00:28:46
machine it's not trivial to generate a

00:28:43 --> 00:28:48
sample you have to actually run an

00:28:45 --> 00:28:49
iterative process that gets better and

00:28:47 --> 00:28:51
better

00:28:48 --> 00:28:53
samples coming closer and closer to the

00:28:50 --> 00:28:54
distribution the model represents so

00:28:52 --> 00:28:56
during the training process you're

00:28:53 --> 00:28:59
always running these two systems at the

00:28:55 --> 00:29:00
same time one that's updating the

00:28:58 --> 00:29:01
parameters of the model and another one

00:28:59 --> 00:29:04
that's trying to generate samples from

00:29:00 --> 00:29:05
the model and they worked really well on

00:29:03 --> 00:29:07
things like Amnesty a lot of us in the

00:29:04 --> 00:29:10
lab including me had tried to get the

00:29:06 --> 00:29:10
Boltzmann machines to scale past em

00:29:09 --> 00:29:12
inist

00:29:09 --> 00:29:14
o things like generating color photos

00:29:11 --> 00:29:18
and we just couldn't get the two

00:29:13 --> 00:29:20
processes to stay synchronized so when I

00:29:17 --> 00:29:21
had the idea for Gans a lot of people

00:29:19 --> 00:29:23
thought that the discriminator would

00:29:20 --> 00:29:25
have more or less the same problem as

00:29:22 --> 00:29:27
the negative phase in the Boltzmann

00:29:24 --> 00:29:29
machine that trying to train the

00:29:26 --> 00:29:31
discriminator in the inner loop you just

00:29:28 --> 00:29:32
couldn't get it to keep up with the

00:29:30 --> 00:29:34
generator and the outer loop and that

00:29:31 --> 00:29:37
would prevent it from converging to

00:29:33 --> 00:29:41
anything useful yeah I share that

00:29:36 --> 00:29:44
intuition yeah what turns out to not be

00:29:40 --> 00:29:45
the case a lot of the time with machine

00:29:43 --> 00:29:46
learning algorithms it's really hard to

00:29:44 --> 00:29:48
predict ahead of time how well they'll

00:29:45 --> 00:29:50
actually perform you have to just run

00:29:47 --> 00:29:52
the experiment and see what happens

00:29:49 --> 00:29:55
and I would say I still today don't have

00:29:51 --> 00:29:58
like one factor I can put my finger on

00:29:54 --> 00:30:00
it say this is why ganz worked for photo

00:29:57 --> 00:30:02
generation and deep Boltzmann machines

00:29:59 --> 00:30:04
don't

00:30:01 --> 00:30:07
here are a lot of theory papers showing

00:30:03 --> 00:30:10
that under some theoretical settings the

00:30:06 --> 00:30:14
gun algorithm does actually converge

00:30:09 --> 00:30:17
but those settings are restricted enough

00:30:13 --> 00:30:19
that they don't necessarily explain the

00:30:16 --> 00:30:21
whole picture in terms of all the

00:30:18 --> 00:30:24
results that we see in practice so

00:30:20 --> 00:30:26
taking a step back can you in the same

00:30:23 --> 00:30:28
way as we talked about deep learning can

00:30:25 --> 00:30:31
you tell me what generative adversarial

00:30:27 --> 00:30:33
networks are yeah so generative

00:30:30 --> 00:30:35
adversarial networks are a particular

00:30:32 --> 00:30:37
kind of generative model a generative

00:30:34 --> 00:30:40
model is a machine learning model that

00:30:36 --> 00:30:41
can train on some set of data like so

00:30:39 --> 00:30:44
you have a collection of photos of cats

00:30:40 --> 00:30:46
and you want to generate more photos of

00:30:43 --> 00:30:48
cats or you want to estimate a

00:30:45 --> 00:30:51
probability distribution over cats so

00:30:47 --> 00:30:54
you can ask how likely it is that some

00:30:50 --> 00:30:56
new image is a photo of a cat ganzar one

00:30:53 --> 00:30:58
way of doing this

00:30:55 --> 00:31:00
ome generative models are good at

00:30:57 --> 00:31:02
creating new data other generative

00:30:59 --> 00:31:04
models are good at estimating that

00:31:01 --> 00:31:07
density function and telling you how

00:31:03 --> 00:31:09
likely particular pieces of data are to

00:31:06 --> 00:31:11
come from the same distribution as a

00:31:08 --> 00:31:14
training data gans are more focused on

00:31:10 --> 00:31:16
generating samples rather than

00:31:13 --> 00:31:18
estimating the density function there

00:31:15 --> 00:31:20
are some kinds of games like flow gun

00:31:17 --> 00:31:23
that can do both but mostly guns are

00:31:19 --> 00:31:25
about generating samples of generating

00:31:22 --> 00:31:29
new photos of cats that look realistic

00:31:24 --> 00:31:33
and they do that completely from scratch

00:31:28 --> 00:31:36
it's analogous to human imagination when

00:31:32 --> 00:31:40
again creates a new image of a cat it's

00:31:35 --> 00:31:42
using a neural network to produce a cat

00:31:39 --> 00:31:44
hat has not existed before it isn't

00:31:41 --> 00:31:46
doing something like compositing photos

00:31:43 --> 00:31:48
together you're not you're not literally

00:31:45 --> 00:31:50
taking the eye off of one cat on the ear

00:31:47 --> 00:31:53
off of another cat it's it's more of

00:31:49 --> 00:31:54
this digestive process where the the

00:31:52 --> 00:31:57
neural net trains on a lot of data and

00:31:54 --> 00:31:58
comes up with some representation of the

00:31:56 --> 00:32:01
probability distribution and generates

00:31:57 --> 00:32:02
entirely new cats there are a lot of

00:32:00 --> 00:32:04
different ways of building a generative

00:32:01 --> 00:32:07
model what's specific against is that we

00:32:03 --> 00:32:09
have a two-player game in the game

00:32:06 --> 00:32:11
theoretic sense and as the players in

00:32:08 --> 00:32:13
this game compete

00:32:10 --> 00:32:15
one of them becomes able to generate

00:32:12 --> 00:32:18
realistic data the first player is

00:32:14 --> 00:32:21
called the generator it produces output

00:32:17 --> 00:32:23
data such as just images for example and

00:32:20 --> 00:32:24
at the start of the learning process

00:32:22 --> 00:32:27
it'll just produce completely random

00:32:23 --> 00:32:29
images the other player is called the

00:32:26 --> 00:32:31
discriminator the discriminator takes

00:32:28 --> 00:32:34
images as input and guesses whether

00:32:30 --> 00:32:36
they're real or fake you train it both

00:32:33 --> 00:32:38
on real data so photos that come from

00:32:35 --> 00:32:40
your training set actual photos of cats

00:32:37 --> 00:32:43
and you try to say that those are real

00:32:39 --> 00:32:45
you also train it on images that come

00:32:42 --> 00:32:48
from the generator network and you train

00:32:44 --> 00:32:50
it to say that those are fake as the two

00:32:47 --> 00:32:51
players compete in this game the

00:32:49 --> 00:32:53
discriminator tries to become better at

00:32:50 --> 00:32:55
recognizing where their images are real

00:32:52 --> 00:32:57
or fake and the generator becomes better

00:32:54 --> 00:33:00
at fooling the discriminator into

00:32:56 --> 00:33:03
thinking that its outputs are are real

00:32:59 --> 00:33:05
and you can analyze this through the

00:33:02 --> 00:33:08
language of game theory and find that

00:33:04 --> 00:33:10
here's a Nash equilibrium where the

00:33:07 --> 00:33:12
generator has captured the correct

00:33:09 --> 00:33:14
probability distribution so in the cat

00:33:11 --> 00:33:17
example it makes perfectly realistic cat

00:33:13 --> 00:33:19
photos and the discriminator is unable

00:33:16 --> 00:33:21
to do better than random guessing

00:33:18 --> 00:33:23
because all the all the samples coming

00:33:20 --> 00:33:25
from both the data and the generator

00:33:22 --> 00:33:29
look equally likely to have come from

00:33:24 --> 00:33:31
either source so do you ever do sit back

00:33:28 --> 00:33:34
and does it just blow your mind that

00:33:30 --> 00:33:36
his thing works so from very so it's

00:33:33 --> 00:33:39
able to estimate that density function

00:33:35 --> 00:33:42
enough to generate generate realistic

00:33:38 --> 00:33:45
images I mean does it yeah do you ever

00:33:41 --> 00:33:47
sit back yeah how does this even why

00:33:44 --> 00:33:49
this is quite incredible especially

00:33:46 --> 00:33:51
where Gant's have gone in terms of

00:33:48 --> 00:33:55
realism yeah and and not just to flatter

00:33:50 --> 00:33:57
my own work but generative models all of

00:33:54 --> 00:33:59
them have this property that if they

00:33:56 --> 00:34:01
really did what we asked them to do they

00:33:58 --> 00:34:04
would do nothing but memorize the

00:34:00 --> 00:34:06
training data right some models that are

00:34:03 --> 00:34:08
based on maximizing the likelihood the

00:34:05 --> 00:34:10
way that you obtain the maximum

00:34:07 --> 00:34:13
likelihood for a specific training set

00:34:09 --> 00:34:14
is you assign all of your probability

00:34:12 --> 00:34:15
mass to the training examples and

00:34:13 --> 00:34:18
nowhere else

00:34:14 --> 00:34:20
forgets the game is played using a

00:34:17 --> 00:34:22
training set so the way that you become

00:34:19 --> 00:34:25
unbeatable in the game is you literally

00:34:21 --> 00:34:29
memorize training examples

00:34:24 --> 00:34:32
one of my former interns wrote a paper

00:34:28 --> 00:34:34
his name is a Vaishnav nagarajan and he

00:34:31 --> 00:34:36
showed that it's actually hard for the

00:34:33 --> 00:34:39
generator to memorize the training data

00:34:35 --> 00:34:41
hard in a statistical learning theory

00:34:38 --> 00:34:47
sense that you can actually create

00:34:40 --> 00:34:50
reasons for why it would require quite a

00:34:46 --> 00:34:52
lot of learning steps and and a lot of

00:34:49 --> 00:34:54
observations of of different latent

00:34:51 --> 00:34:56
variables before you could memorize the

00:34:53 --> 00:34:58
training data that still doesn't really

00:34:55 --> 00:35:00
explain why when you produce samples

00:34:57 --> 00:35:02
that are new why do you get compelling

00:34:59 --> 00:35:04
images rather than you know just garbage

00:35:01 --> 00:35:06
that's different from the training set

00:35:03 --> 00:35:08
and I don't think we really have a good

00:35:05 --> 00:35:10
answer for that especially if you think

00:35:07 --> 00:35:14
about how many possible images are out

00:35:09 --> 00:35:17
here and how few images the generative

00:35:13 --> 00:35:19
model sees during training it seems just

00:35:16 --> 00:35:21
unreasonable that generative models

00:35:18 --> 00:35:23
create new images as well as they do

00:35:20 --> 00:35:24
especially considering that we're

00:35:22 --> 00:35:28
basically training them to memorize

00:35:23 --> 00:35:30
rather than generalize I think part of

00:35:27 --> 00:35:32
the answer is there's a paper called

00:35:29 --> 00:35:34
eep image prior where they show that

00:35:31 --> 00:35:35
you can take a convolutional net and you

00:35:33 --> 00:35:35
don't even need to learn the parameters

00:35:34 --> 00:35:37
of it at all

00:35:34 --> 00:35:40
you just use the model architecture and

00:35:36 --> 00:35:43
it's already useful for things like in

00:35:39 --> 00:35:44
painting images I think that shows us

00:35:42 --> 00:35:46
that the convolutional network

00:35:43 --> 00:35:48
architecture captures something really

00:35:45 --> 00:35:51
important about the structure of images

00:35:47 --> 00:35:52
and we don't need to actually use

00:35:50 --> 00:35:56
learning to capture all the information

00:35:51 --> 00:35:58
coming out of the convolutional net that

00:35:55 --> 00:36:00
would that would imply that it would be

00:35:57 --> 00:36:03
much harder to make generative models in

00:35:59 --> 00:36:05
other domains so far we're able to make

00:36:02 --> 00:36:07
reasonable speech models and things like

00:36:04 --> 00:36:08
that but to be honest we haven't

00:36:06 --> 00:36:10
actually explored a whole lot of

00:36:07 --> 00:36:13
different data sets all that much we

00:36:09 --> 00:36:18
don't for example see a lot of deep

00:36:13 --> 00:36:20
learning models of like biology datasets

00:36:17 --> 00:36:22
where you have lots of microarrays

00:36:19 --> 00:36:24
measuring the amount of different

00:36:21 --> 00:36:26
enzymes and things like that so we may

00:36:23 --> 00:36:28
find that some of the progress that

00:36:25 --> 00:36:29
we've seen for images and speech turns

00:36:27 --> 00:36:33
out to really rely heavily on the model

00:36:28 --> 00:36:35
architecture and we were able to do what

00:36:32 --> 00:36:36
we did for vision by trying to

00:36:34 --> 00:36:38
reverse-engineer the human visual system

00:36:35 --> 00:36:39
and

00:36:37 --> 00:36:42
maybe it'll turn out that we can't just

00:36:38 --> 00:36:45
use that same trick for arbitrary kinds

00:36:41 --> 00:36:47
of data all right so there's aspects of

00:36:44 --> 00:36:50
the human vision system the hardware of

00:36:46 --> 00:36:52
it that makes it without learning

00:36:49 --> 00:36:54
without cognition just makes it really

00:36:51 --> 00:36:56
effective at detecting the patterns

00:36:53 --> 00:37:01
we've seen the visual world yeah that's

00:36:55 --> 00:37:05
really interesting what in a

00:37:00 --> 00:37:07
big quick overview in your view in your

00:37:04 --> 00:37:09
view what types of Gans are there and

00:37:06 --> 00:37:13
what other generative models besides

00:37:08 --> 00:37:14
games are there yeah so it's maybe a

00:37:12 --> 00:37:15
little bit easier to start with what

00:37:13 --> 00:37:17
kinds of generative models are there

00:37:14 --> 00:37:20
other than Gans

00:37:16 --> 00:37:24
o most generative models are likelihood

00:37:19 --> 00:37:27
based where to train them you have a

00:37:23 --> 00:37:28
model that tells you how how much

00:37:26 --> 00:37:31
probability it assigns to a particular

00:37:28 --> 00:37:33
example and you just maximize the

00:37:30 --> 00:37:35
probability assigned to all the training

00:37:32 --> 00:37:39
examples it turns out that it's hard to

00:37:34 --> 00:37:41
design a model that can create really

00:37:38 --> 00:37:44
complicated images or really complicated

00:37:40 --> 00:37:48
audio waveforms and still have it be

00:37:43 --> 00:37:52
possible to estimate the the likelihood

00:37:47 --> 00:37:54
function from a computational point of

00:37:51 --> 00:37:55
view most interesting models that you

00:37:53 --> 00:37:58
would just write down intuitively it

00:37:54 --> 00:38:00
urns out that it's almost impossible to

00:37:57 --> 00:38:02
calculate the amount of probability they

00:37:59 --> 00:38:05
assign to a particular point so there's

00:38:01 --> 00:38:08
a few different schools of generative

00:38:04 --> 00:38:10
models in the likelyhood family one

00:38:07 --> 00:38:12
approach is to very carefully design the

00:38:09 --> 00:38:14
model so that it is computationally

00:38:11 --> 00:38:16
tractable to measure the density it

00:38:13 --> 00:38:19
assigns to a particular point so there

00:38:15 --> 00:38:24
are things like auto regressive models

00:38:18 --> 00:38:27
like pixel CN n those basically break

00:38:23 --> 00:38:30
down the probability distribution into a

00:38:26 --> 00:38:32
product over every single feature so for

00:38:29 --> 00:38:34
an image you estimate the probability of

00:38:31 --> 00:38:37
each pixel given all of the pixels that

00:38:34 --> 00:38:38
came before it hmm there's tricks where

00:38:36 --> 00:38:41
if you want to measure the density

00:38:37 --> 00:38:43
function you can actually calculate the

00:38:40 --> 00:38:46
density for all these pixels more or

00:38:42 --> 00:38:48
less in parallel generating the image

00:38:45 --> 00:38:50
still tends to require you to go one

00:38:47 --> 00:38:51
pixel at a time and that can be very

00:38:49 --> 00:38:54
slow

00:38:50 --> 00:38:55
but there again tricks for doing this in

00:38:53 --> 00:38:57
a hierarchical pattern where you can

00:38:54 --> 00:38:59
keep the runtime under control or the

00:38:56 --> 00:39:02
quality of the images it generates

00:38:58 --> 00:39:05
putting runtime aside pretty good

00:39:01 --> 00:39:09
they're reasonable yeah the I would say

00:39:04 --> 00:39:11
a lot of the best results are from Gans

00:39:08 --> 00:39:15
these days but it can be hard to tell

00:39:10 --> 00:39:17
how much of that is based on who's

00:39:14 --> 00:39:19
tudying which type of algorithm if that

00:39:16 --> 00:39:21
makes sense the amount of effort invest

00:39:18 --> 00:39:23
in it but yeah or like the kind of

00:39:20 --> 00:39:24
expertise so a lot of people who've

00:39:22 --> 00:39:25
traditionally been excited about

00:39:23 --> 00:39:28
graphics or art and things like that

00:39:24 --> 00:39:30
have gotten interested in Gans and to

00:39:27 --> 00:39:32
some extent it's hard to tell our Gans

00:39:29 --> 00:39:35
doing better because they have a lot of

00:39:31 --> 00:39:37
graphics and art experts behind them or

00:39:34 --> 00:39:40
our Gans doing better because they're

00:39:36 --> 00:39:41
more computationally efficient or our

00:39:39 --> 00:39:44
Gans doing better because they

00:39:40 --> 00:39:46
prioritize the realism of samples over

00:39:43 --> 00:39:47
the accuracy of the density function I

00:39:45 --> 00:39:49
think I think all of those are

00:39:46 --> 00:39:52
potentially valid explanations and it's

00:39:48 --> 00:39:59
hard to tell so can you give a

00:39:51 --> 00:40:02
brief history of Gans from 2014 we paid

00:39:58 --> 00:40:04
for 13 yeah so a few highlights in the

00:40:01 --> 00:40:06
first paper we just showed that Gans

00:40:03 --> 00:40:08
basically work if you look back at the

00:40:05 --> 00:40:11
samples we had now they looked terrible

00:40:07 --> 00:40:14
on the CFR 10 dataset you can't even

00:40:10 --> 00:40:17
recognize objects in them your papers I

00:40:13 --> 00:40:19
will use CFR 10 we use em NIST which is

00:40:16 --> 00:40:21
little handwritten digits we used the

00:40:18 --> 00:40:23
Toronto face database which is small

00:40:20 --> 00:40:25
grayscale photos of faces

00:40:22 --> 00:40:26
we did have recognizable faces my

00:40:24 --> 00:40:31
colleague Bing Xu put together the first

00:40:25 --> 00:40:34
again face model for that paper we also

00:40:30 --> 00:40:39
had the CFR 10 dataset which is things

00:40:33 --> 00:40:42
like very small 32 by 32 pixels of cars

00:40:38 --> 00:40:45
and cats and dogs for that we didn't get

00:40:41 --> 00:40:47
recognizable objects but all the deep

00:40:44 --> 00:40:49
learning people back then we're really

00:40:46 --> 00:40:50
used to looking at these failed samples

00:40:48 --> 00:40:53
and kind of reading them like tea leaves

00:40:49 --> 00:40:55
right and people who are used to reading

00:40:52 --> 00:40:57
the tea leaves recognize that our tea

00:40:54 --> 00:40:59
leaves at least look different right

00:40:56 --> 00:41:01
maybe not necessarily better but there

00:40:58 --> 00:41:04
was something unusual about them

00:41:00 --> 00:41:06
and that got a lot of us excited one of

00:41:03 --> 00:41:09
the next really big steps was lap gown

00:41:05 --> 00:41:12
by Emily Denton and seemeth chintala at

00:41:08 --> 00:41:15
Facebook AI research where they actually

00:41:11 --> 00:41:16
got really good high-resolution photos

00:41:14 --> 00:41:19
working with gans for the first time

00:41:15 --> 00:41:20
they had a complicated system where they

00:41:18 --> 00:41:24
generated the image starting at low res

00:41:19 --> 00:41:28
and then scaling up to high res but they

00:41:23 --> 00:41:32
were able to get it to work and then in

00:41:27 --> 00:41:35
2015 I believe later that same year

00:41:31 --> 00:41:39
palek Radford and sumh intelli and Luke

00:41:34 --> 00:41:42
Metz published the DC gain paper which

00:41:38 --> 00:41:45
it stands for deep convolutional again

00:41:41 --> 00:41:47
it's kind of a non unique name because

00:41:44 --> 00:41:48
these days basically all gans and even

00:41:46 --> 00:41:50
some before that were deep in

00:41:47 --> 00:41:52
convolutional but they just kind of

00:41:49 --> 00:41:55
picked a name for a really great recipe

00:41:51 --> 00:41:57
where they were able to actually using

00:41:54 --> 00:41:59
only one model instead of a multi-step

00:41:56 --> 00:42:02
rocess actually generate realistic

00:41:58 --> 00:42:06
images of faces and things like that

00:42:01 --> 00:42:08
was sort of like the beginning of

00:42:05 --> 00:42:10
the Cambrian explosion of gans like you

00:42:07 --> 00:42:11
know once once you got animals that had

00:42:09 --> 00:42:13
a backbone you suddenly got lots of

00:42:10 --> 00:42:15
different versions of you know like fish

00:42:12 --> 00:42:17
and right they have four-legged animals

00:42:14 --> 00:42:19
and things like that so so DC Gann

00:42:16 --> 00:42:20
became kind of the backbone for many

00:42:18 --> 00:42:25
different models that came out used as a

00:42:19 --> 00:42:26
baseline even still yeah yeah and so

00:42:24 --> 00:42:29
from there I would say some interesting

00:42:25 --> 00:42:31
things we've seen are there's a lot you

00:42:28 --> 00:42:33
can say about how just the quality of

00:42:30 --> 00:42:35
standard image generation ganz has

00:42:32 --> 00:42:37
increased but what's also maybe more

00:42:34 --> 00:42:40
interesting on an intellectual level is

00:42:36 --> 00:42:42
how the things you can use guns for has

00:42:39 --> 00:42:45
also changed one thing is that you can

00:42:41 --> 00:42:47
use them to learn classifiers without

00:42:44 --> 00:42:49
having to have class labels for every

00:42:46 --> 00:42:51
example in your your training set so

00:42:48 --> 00:42:54
that's called semi-supervised learning

00:42:50 --> 00:42:57
my colleague at open AI Tim Solomon's

00:42:53 --> 00:42:59
who's at at brain now wrote a paper

00:42:56 --> 00:43:01
called improved techniques for training

00:42:58 --> 00:43:03
uns I'm a co-author on this paper but I

00:43:01 --> 00:43:05
can't claim any credit for this

00:43:02 --> 00:43:07
particular part one thing he showed in

00:43:04 --> 00:43:10
the paper is that you can take the gun

00:43:07 --> 00:43:12
discriminator and use it as a classifier

00:43:09 --> 00:43:14
that actually tells you you know this

00:43:11 --> 00:43:15
image is a cat this image is a dog this

00:43:13 --> 00:43:17
image is a car

00:43:14 --> 00:43:19
this image is a truck and so and not

00:43:16 --> 00:43:20
just to say whether the image is real or

00:43:18 --> 00:43:22
fake but if it is real to say

00:43:19 --> 00:43:25
specifically what kind of object it is

00:43:21 --> 00:43:28
and he found that you can train these

00:43:24 --> 00:43:30
classifiers with far fewer labeled

00:43:27 --> 00:43:34
examples learn traditional classifiers

00:43:29 --> 00:43:36
o a few supervised based on also not

00:43:33 --> 00:43:38
just your discrimination ability but

00:43:35 --> 00:43:40
your ability to classify you're going to

00:43:37 --> 00:43:43
do much you're going to convert much

00:43:39 --> 00:43:46
faster to being effective at being a

00:43:42 --> 00:43:48
discriminator yeah so for example for

00:43:45 --> 00:43:50
the emne status set you want to look at

00:43:47 --> 00:43:54
an image of a handwritten digit and say

00:43:49 --> 00:43:57
whether it's a 0 a 1 or 2 and so on

00:43:53 --> 00:44:01
to get down to less than 1% accuracy

00:43:56 --> 00:44:05
required around 60,000 examples until

00:44:00 --> 00:44:08
maybe about 2014 or so in 2016 with this

00:44:04 --> 00:44:12
emi-supervised degan project tim was

00:44:07 --> 00:44:15
able to get below 1% error using only a

00:44:11 --> 00:44:17
hundred labeled examples so that was

00:44:14 --> 00:44:20
about a 600 X decrease in the amount of

00:44:16 --> 00:44:22
labels that he needed he's still using

00:44:19 --> 00:44:24
more images in that but he doesn't need

00:44:21 --> 00:44:26
to have each of them labeled as you know

00:44:23 --> 00:44:29
this one's a 1 this one's a 2 this one's

00:44:25 --> 00:44:31
a 0 and so on then to be able to for

00:44:28 --> 00:44:33
Ganz to be able to generate recognizable

00:44:30 --> 00:44:38
objects so object for a particular class

00:44:32 --> 00:44:40
you still need labelled data because you

00:44:37 --> 00:44:43
need to know what it means to be a

00:44:39 --> 00:44:45
particular class cat dog how do you

00:44:42 --> 00:44:47
think we can move away from that yeah

00:44:44 --> 00:44:48
some researchers at brain Zurich

00:44:46 --> 00:44:52
actually just released a really great

00:44:47 --> 00:44:55
paper on semi-supervised de Gans whether

00:44:52 --> 00:44:57
their goal isn't to classify its to make

00:44:54 --> 00:45:00
recognizable objects despite not having

00:44:56 --> 00:45:03
a lot of label data they were working

00:44:59 --> 00:45:05
off of deep minds big gun project and

00:45:02 --> 00:45:09
they showed that they can match the

00:45:04 --> 00:45:12
performance of began using only 10% I

00:45:08 --> 00:45:13
believe of the of the labels big gun was

00:45:11 --> 00:45:15
trained on the image net dataset which

00:45:12 --> 00:45:19
is about 1.2 million images and had all

00:45:14 --> 00:45:20
of them labelled this latest project

00:45:18 --> 00:45:22
from brain Zurich shows that they're

00:45:19 --> 00:45:26
able to get away with only having about

00:45:21 --> 00:45:28
10% of the of the images labeled

00:45:25 --> 00:45:31
and they do that essentially using a

00:45:27 --> 00:45:33
clustering algorithm where the

00:45:30 --> 00:45:36
discriminator learns to assign the

00:45:32 --> 00:45:37
objects to groups and then this

00:45:35 --> 00:45:40
understanding that objects can be

00:45:36 --> 00:45:44
grouped into you know similar types

00:45:39 --> 00:45:46
helps it to form more realistic ideas of

00:45:43 --> 00:45:48
what should be appearing in the image

00:45:45 --> 00:45:49
because it knows that every image it

00:45:47 --> 00:45:51
creates has to come from one of these

00:45:48 --> 00:45:54
archetypal groups rather than just being

00:45:50 --> 00:45:56
some arbitrary image if you train again

00:45:53 --> 00:45:58
with no class labels you tend to get

00:45:55 --> 00:46:03
hings that look sort of like grass or

00:45:57 --> 00:46:05
water or brick or dirt but but without

00:46:02 --> 00:46:07
necessarily a lot going on in them and I

00:46:04 --> 00:46:09
think that's partly because if you look

00:46:06 --> 00:46:11
at a large image net image the object

00:46:08 --> 00:46:14
doesn't necessarily occupy the whole

00:46:10 --> 00:46:16
image and so you learn to create

00:46:13 --> 00:46:19
realistic sets of pixels but you don't

00:46:15 --> 00:46:21
necessarily learn that the object is the

00:46:18 --> 00:46:23
star of the show and you want it to be

00:46:20 --> 00:46:26
in every image you make yeah you've

00:46:22 --> 00:46:29
heard you talk about the the horse the

00:46:25 --> 00:46:33
zebra cycle Gann mapping and how it

00:46:28 --> 00:46:35
urns out again thought provoking that

00:46:32 --> 00:46:37
horses are usually on grass and zebras

00:46:34 --> 00:46:38
are usually on drier terrain so when

00:46:36 --> 00:46:41
you're doing that kind of generation

00:46:37 --> 00:46:45
you're going to end up generating

00:46:40 --> 00:46:47
reener horses or whatever so those are

00:46:44 --> 00:46:49
connected together it's not just yeah

00:46:46 --> 00:46:50
be able to you're not able to

00:46:48 --> 00:46:52
segment

00:46:49 --> 00:46:55
yeah it's generating the segments away

00:46:51 --> 00:46:59
so there are other types of games you

00:46:54 --> 00:47:03
come across in your mind that neural

00:46:58 --> 00:47:06
networks can play with each other to to

00:47:02 --> 00:47:08
be able to solve problems yeah the

00:47:05 --> 00:47:12
one that I spend most of my time on

00:47:07 --> 00:47:14
is insecurity you can model most

00:47:11 --> 00:47:16
interactions as a game where there's

00:47:13 --> 00:47:18
attackers trying to break your system

00:47:15 --> 00:47:21
and you order the defender trying to

00:47:17 --> 00:47:25
build a resilient system there's also

00:47:20 --> 00:47:26
domain adversarial learning which is an

00:47:24 --> 00:47:30
approach to domain adaptation that looks

00:47:25 --> 00:47:31
really a lot like Ganz the the author's

00:47:29 --> 00:47:33
had the idea before the game paper came

00:47:30 --> 00:47:37
out their paper came out a little bit

00:47:32 --> 00:47:39
later and you know they they're very

00:47:36 --> 00:47:41
nice and sighted again paper but

00:47:38 --> 00:47:44
I know that they actually had the idea

00:47:40 --> 00:47:45
before I came out domain adaptation is

00:47:43 --> 00:47:48
when you want to train a machine

00:47:44 --> 00:47:50
learning model in 1:1 setting called a

00:47:47 --> 00:47:52
domain and then deploy it in another

00:47:49 --> 00:47:53
domain later and he would like it to

00:47:51 --> 00:47:55
perform well in the new domain even

00:47:52 --> 00:47:58
though the new domain is different from

00:47:54 --> 00:48:00
how it was trained so for example you

00:47:57 --> 00:48:02
might want to train on a really clean

00:47:59 --> 00:48:04
image data set like image net but then

00:48:01 --> 00:48:07
deploy on users phones where the user is

00:48:03 --> 00:48:09
taking you know pictures in the dark or

00:48:06 --> 00:48:11
pictures while moving quickly and just

00:48:08 --> 00:48:13
pictures that aren't really centered or

00:48:10 --> 00:48:13
composed all that well

00:48:13 --> 00:48:18
when you take a normal machine learning

00:48:15 --> 00:48:20
model it often degrades really badly

00:48:17 --> 00:48:21
when you move to the new domain because

00:48:19 --> 00:48:23
it looks so different from what the

00:48:20 --> 00:48:25
model was trained on domain adaptation

00:48:22 --> 00:48:28
algorithms try to smooth out that gap

00:48:24 --> 00:48:30
and the domain adverse oral approach is

00:48:27 --> 00:48:32
based on training a feature extractor

00:48:29 --> 00:48:34
where the features have the same

00:48:31 --> 00:48:36
statistics regardless of which domain

00:48:33 --> 00:48:38
you extracted them on so in the domain

00:48:35 --> 00:48:40
adversarial game you have one player

00:48:37 --> 00:48:42
that's a feature extractor and another

00:48:39 --> 00:48:44
player that's a domain recognizer

00:48:41 --> 00:48:46
the domain recognizer wants to look at

00:48:43 --> 00:48:49
he output of the feature extractor and

00:48:45 --> 00:48:50
guess which of the two domains oh the

00:48:48 --> 00:48:52
features came from so it's a lot like

00:48:49 --> 00:48:56
the real versus fake discriminator and

00:48:51 --> 00:48:58
ends and then the feature extractor you

00:48:55 --> 00:48:59
can think of as loosely analogous to the

00:48:57 --> 00:49:02
generator in games except what's trying

00:48:58 --> 00:49:04
to do here is both fool the domain

00:49:01 --> 00:49:06
recognizer and two not knowing which

00:49:03 --> 00:49:08
domain the data came from and also

00:49:05 --> 00:49:11
extract features that are good for

00:49:07 --> 00:49:14
classification so at the end of the day

00:49:10 --> 00:49:18
ou can in in the cases where it works

00:49:13 --> 00:49:21
out you can actually get features that

00:49:17 --> 00:49:23
work about the same in both domains

00:49:20 --> 00:49:25
ometimes this has a drawback where in

00:49:22 --> 00:49:26
order to make things work the same in

00:49:24 --> 00:49:28
both domains it just gets worse at the

00:49:25 --> 00:49:31
first one but there are a lot of cases

00:49:27 --> 00:49:34
where it actually works out well on both

00:49:30 --> 00:49:37
do you think gas being useful in the

00:49:33 --> 00:49:39
context of data augmentation yeah one

00:49:36 --> 00:49:41
thing you could hope for with Kenz is

00:49:38 --> 00:49:44
you could imagine I've got a limited

00:49:40 --> 00:49:45
training set and I'd like to make more

00:49:43 --> 00:49:49
training data to train something else

00:49:44 --> 00:49:52
like a classifier you could train Magan

00:49:48 --> 00:49:55
on the training set and then create more

00:49:51 --> 00:49:57
data and then maybe the classifier would

00:49:54 --> 00:49:58
perform better on the test set after

00:49:56 --> 00:50:01
training on those big ERG and generated

00:49:57 --> 00:50:03
ata set so that's the simplest version

00:50:00 --> 00:50:05
of of something you might hope would

00:50:02 --> 00:50:07
work I've never heard of that particular

00:50:04 --> 00:50:09
approach working but I think there's

00:50:06 --> 00:50:12
ome there's some closely related things

00:50:08 --> 00:50:13
that that I think could work in the

00:50:11 --> 00:50:15
future and some that actually already

00:50:12 --> 00:50:17
have worked so if you think a little bit

00:50:14 --> 00:50:19
about what we'd be hoping for if we use

00:50:16 --> 00:50:21
the gun to make more training data we're

00:50:18 --> 00:50:24
hoping that again we'll generalize to

00:50:20 --> 00:50:25
new examples better than the classifier

00:50:23 --> 00:50:26
would have generalized if it was trained

00:50:24 --> 00:50:28
on the same buddy at us

00:50:25 --> 00:50:29
and I don't know of any reason to

00:50:27 --> 00:50:32
believe that the Gann would generalize

00:50:28 --> 00:50:34
better than the classifier would but

00:50:31 --> 00:50:36
what we might hope for is that the Gann

00:50:33 --> 00:50:39
could generalize differently from a

00:50:35 --> 00:50:40
specific classifier so one thing I think

00:50:38 --> 00:50:41
is worth trying that I haven't

00:50:39 --> 00:50:44
personally tried but someone could try

00:50:40 --> 00:50:46
is what have you trained a whole lot of

00:50:43 --> 00:50:48
different generative models on the same

00:50:45 --> 00:50:50
training set create samples from all of

00:50:47 --> 00:50:53
them and then train a classifier on that

00:50:49 --> 00:50:54
because each of the generative models

00:50:52 --> 00:50:57
might generalize in a slightly different

00:50:53 --> 00:50:58
way they might capture many different

00:50:56 --> 00:51:00
axes of variation that one individual

00:50:57 --> 00:51:03
model wouldn't and then the classifier

00:50:59 --> 00:51:04
can capture all of those ideas by

00:51:02 --> 00:51:06
training in all of their data so we'd be

00:51:03 --> 00:51:08
a little bit like making an ensemble of

00:51:05 --> 00:51:10
classifiers and I say oh of gans

00:51:07 --> 00:51:11
yeah in a way I think that could

00:51:09 --> 00:51:16
generalize better the other thing that

00:51:10 --> 00:51:18
gans are really good for is not

00:51:15 --> 00:51:20
necessarily generating new data that's

00:51:17 --> 00:51:22
exactly like what you already have but

00:51:19 --> 00:51:25
by generating new data that has

00:51:21 --> 00:51:27
different properties from the data you

00:51:24 --> 00:51:29
already had one thing that you can do is

00:51:26 --> 00:51:31
you can create differentially private

00:51:28 --> 00:51:33
data so suppose that you have something

00:51:30 --> 00:51:35
like medical records and you don't want

00:51:32 --> 00:51:36
o train a classifier on the medical

00:51:34 --> 00:51:38
records and then publish the classifier

00:51:35 --> 00:51:39
because someone might be able to

00:51:37 --> 00:51:42
reverse-engineer some of the medical

00:51:38 --> 00:51:44
records you trained on there's a paper

00:51:41 --> 00:51:46
from Casey greens lab that shows how you

00:51:43 --> 00:51:49
can train again using differential

00:51:45 --> 00:51:51
privacy and then the samples one again

00:51:48 --> 00:51:53
still have the same differential privacy

00:51:50 --> 00:51:56
guarantees as the parameters that again

00:51:52 --> 00:51:58
so you can make fake patient data for

00:51:55 --> 00:52:00
other researchers to use and they can do

00:51:57 --> 00:52:02
almost anything they want with that data

00:51:59 --> 00:52:04
because it doesn't come from real people

00:52:01 --> 00:52:07
and the differential privacy mechanism

00:52:03 --> 00:52:09
gives you clear guarantees on how much

00:52:06 --> 00:52:11
the original people's data has been

00:52:08 --> 00:52:13
protected that's really interesting

00:52:10 --> 00:52:16
actually I haven't heard you talk about

00:52:12 --> 00:52:19
hat before in terms of fairness I've

00:52:15 --> 00:52:22
seen from triple AI your talk

00:52:18 --> 00:52:24
how can an adversarial machine learning

00:52:21 --> 00:52:27
help models be more fair with respect to

00:52:23 --> 00:52:30
sensitive variables yeah there was a

00:52:26 --> 00:52:32
paper from Amos Torquay's lab about how

00:52:29 --> 00:52:34
to learn machine learning models that

00:52:31 --> 00:52:36
are incapable of using specific

00:52:33 --> 00:52:38
variables so to say for example you

00:52:35 --> 00:52:40
wanted to make predictions that are not

00:52:37 --> 00:52:42
affected by gender

00:52:39 --> 00:52:44
it isn't enough to just leave gender out

00:52:41 --> 00:52:45
of the input to the model you can often

00:52:43 --> 00:52:47
infer gender from a lot of other

00:52:44 --> 00:52:49
characteristics like say that you have

00:52:46 --> 00:52:51
the person's name but you're not told

00:52:48 --> 00:52:53
their gender well right if if their name

00:52:50 --> 00:52:55
is Ian they're kind of obviously a man

00:52:52 --> 00:52:57
so what you'd like to do is make a

00:52:54 --> 00:52:58
machine learning model that can still

00:52:56 --> 00:53:02
take in a lot of different attributes

00:52:57 --> 00:53:04
and make a really accurate informed

00:53:01 --> 00:53:06
prediction but be confident that it

00:53:03 --> 00:53:08
isn't reverse engineering gender or

00:53:05 --> 00:53:10
another sensitive variable internally

00:53:07 --> 00:53:12
ou can do that using something very

00:53:09 --> 00:53:15
similar to the domain adversarial

00:53:11 --> 00:53:17
approach where you have one player

00:53:14 --> 00:53:20
that's a feature extractor and another

00:53:16 --> 00:53:21
player that's a feature analyzer and you

00:53:19 --> 00:53:24
want to make sure that the feature

00:53:20 --> 00:53:25
analyzer is not able to guess the value

00:53:23 --> 00:53:28
of the sensitive variable that you're

00:53:24 --> 00:53:30
trying to keep private right that's yeah

00:53:27 --> 00:53:34
I love this approach so we'll yeah with

00:53:29 --> 00:53:36
e with the feature you're not able to

00:53:33 --> 00:53:38
infer right this sensitive variables

00:53:35 --> 00:53:40
yeah brilliant it's quite quite

00:53:37 --> 00:53:43
brilliant and simple actually another

00:53:39 --> 00:53:45
way I think that Ganz in particular

00:53:42 --> 00:53:47
could be used for fairness would be to

00:53:44 --> 00:53:50
make something like a cycle again where

00:53:46 --> 00:53:53
you can take data from one domain and

00:53:49 --> 00:53:55
convert it into another we've seen cycle

00:53:52 --> 00:53:58
again turning horses into zebras we've

00:53:54 --> 00:54:01
seen other unsupervised gains made by

00:53:57 --> 00:54:05
Ming Yue Lu doing things like turning

00:54:00 --> 00:54:07
day photos into night photos I think for

00:54:04 --> 00:54:09
fairness you could imagine taking

00:54:06 --> 00:54:11
records for people in one group and

00:54:08 --> 00:54:13
transforming them into analogous people

00:54:10 --> 00:54:16
in another group and testing to see if

00:54:12 --> 00:54:18
they're they're treated equitably across

00:54:15 --> 00:54:19
those two groups there's a lot of things

00:54:17 --> 00:54:21
that be hard to get right to make sure

00:54:18 --> 00:54:24
that the conversion process itself is

00:54:20 --> 00:54:25
fair and I don't think it's anywhere

00:54:23 --> 00:54:27
near something that we could actually

00:54:24 --> 00:54:29
use yet but if you could design that

00:54:26 --> 00:54:30
conversion process very carefully it

00:54:28 --> 00:54:32
might give you a way of doing audits

00:54:29 --> 00:54:34
where you say what if we took people

00:54:31 --> 00:54:36
from this group converted them into

00:54:33 --> 00:54:39
equivalent people in another group does

00:54:35 --> 00:54:42
the system actually treat them how it

00:54:38 --> 00:54:46
ought to that's also really interesting

00:54:41 --> 00:54:49
you know in a popular in popular press

00:54:45 --> 00:54:52
and in general in our imagination you

00:54:48 --> 00:54:53
think well gangs are able to generate

00:54:51 --> 00:54:56
data and use

00:54:52 --> 00:54:58
to think about deep fakes or being able

00:54:55 --> 00:55:01
to sort of maliciously generate data

00:54:57 --> 00:55:04
that fakes the identity of other people

00:55:00 --> 00:55:06
is this something of a concern to you is

00:55:03 --> 00:55:09
this something if you look 10 20 years

00:55:05 --> 00:55:11
into the future is that something that

00:55:08 --> 00:55:13
pops up in your work in the work of the

00:55:11 --> 00:55:16
community that's working on generating

00:55:12 --> 00:55:18
models I'm a lot less concerned about 20

00:55:15 --> 00:55:20
years from now than the next few years I

00:55:17 --> 00:55:23
think there will be a kind of bumpy

00:55:19 --> 00:55:24
cultural transition as people encounter

00:55:22 --> 00:55:26
this idea that there can be very

00:55:23 --> 00:55:29
realistic videos and audio that aren't

00:55:25 --> 00:55:31
real I think 20 years from now people

00:55:28 --> 00:55:33
will mostly understand that you

00:55:30 --> 00:55:35
shouldn't believe something is real just

00:55:32 --> 00:55:36
because you saw a video of it people

00:55:34 --> 00:55:40
will expect to see that it's been

00:55:35 --> 00:55:43
cryptographically signed or or have some

00:55:39 --> 00:55:45
other mechanism to make them believe the

00:55:42 --> 00:55:47
content is real there's already

00:55:44 --> 00:55:49
people working on this like there's a

00:55:46 --> 00:55:51
startup called true pic that provides a

00:55:48 --> 00:55:54
lot of mechanisms for authenticating

00:55:50 --> 00:55:56
that an image is real there they're

00:55:53 --> 00:55:59
maybe not quite up to having a state

00:55:55 --> 00:56:02
actor try to to evade their their

00:55:58 --> 00:56:03
verification techniques but it's

00:56:01 --> 00:56:04
omething people are already working on

00:56:02 --> 00:56:07
and I think we'll get right eventually

00:56:03 --> 00:56:09
so you think authentication will will

00:56:06 --> 00:56:11
eventually went out so being able to

00:56:08 --> 00:56:15
authenticate that this is real and this

00:56:10 --> 00:56:17
not yeah as opposed to gas just

00:56:14 --> 00:56:18
getting better and better or generative

00:56:16 --> 00:56:21
models being able to get better and

00:56:17 --> 00:56:23
better to where the nature of what is

00:56:20 --> 00:56:26
real I don't think we'll ever be able to

00:56:22 --> 00:56:28
look at the pixels of a photo and tell

00:56:25 --> 00:56:32
you for sure that it's real or not real

00:56:27 --> 00:56:34
and I think it would actually be

00:56:31 --> 00:56:36
somewhat dangerous to rely on that

00:56:33 --> 00:56:38
approach too much if you make a really

00:56:35 --> 00:56:40
good fake detector and then someone's

00:56:37 --> 00:56:42
able to fool your fake detector and your

00:56:39 --> 00:56:44
fake detector says this image is not

00:56:41 --> 00:56:46
fake then it's even more credible than

00:56:43 --> 00:56:46
if you've never made a fake detector in

00:56:45 --> 00:56:51
the first place

00:56:45 --> 00:56:53
what I do think we'll get to is systems

00:56:50 --> 00:56:56
that we can kind of use behind the

00:56:52 --> 00:56:58
scenes for to make estimates of what's

00:56:55 --> 00:57:00
going on and maybe not like use them in

00:56:57 --> 00:57:03
court for a definitive analysis I also

00:56:59 --> 00:57:06
think we will likely get better

00:57:02 --> 00:57:07
authentication systems where you know if

00:57:05 --> 00:57:09
a match

00:57:06 --> 00:57:11
every phone cryptographically signs

00:57:08 --> 00:57:14
everything that comes out of it you

00:57:10 --> 00:57:16
wouldn't go to conclusively tell that an

00:57:13 --> 00:57:19
image was real but you would be able to

00:57:15 --> 00:57:23
tell somebody who knew the appropriate

00:57:18 --> 00:57:26
private key for this phone was actually

00:57:22 --> 00:57:30
able to sign this image and upload it to

00:57:25 --> 00:57:32
this server at this timestamp so you

00:57:29 --> 00:57:34
could imagine maybe you make phones that

00:57:31 --> 00:57:38
have the private keys Hardware embedded

00:57:33 --> 00:57:40
in them if like a State Security Agency

00:57:37 --> 00:57:42
really wants to infiltrate the company

00:57:39 --> 00:57:44
they could probably you know plant a

00:57:41 --> 00:57:45
private key of their choice or break

00:57:43 --> 00:57:47
open the chip and learn the private key

00:57:44 --> 00:57:50
or something like that but it would make

00:57:46 --> 00:57:52
it a lot harder for an adversary with

00:57:49 --> 00:57:55
fewer resources to fake things most of

00:57:51 --> 00:57:59
us yeah okay okay so you mentioned the

00:57:54 --> 00:58:01
beer and the bar and the new ideas you

00:57:58 --> 00:58:03
were able to implement this or come up

00:58:00 --> 00:58:05
with this new idea pretty quickly and

00:58:02 --> 00:58:08
implement it pretty quickly do you think

00:58:04 --> 00:58:09
there are still many such groundbreaking

00:58:07 --> 00:58:12
ideas and deep learning that could be

00:58:08 --> 00:58:14
developed so quickly yeah I do think

00:58:11 --> 00:58:17
that there are a lot of ideas that can

00:58:13 --> 00:58:18
be developed really quickly guns were

00:58:16 --> 00:58:20
probably a little bit of an outlier on

00:58:17 --> 00:58:24
the whole like one-hour timescale right

00:58:19 --> 00:58:25
but just in terms of a like low resource

00:58:23 --> 00:58:27
ideas where you do something really

00:58:24 --> 00:58:32
different on the algorithm scale and get

00:58:26 --> 00:58:34
a big payback I think it's not as likely

00:58:31 --> 00:58:35
that you'll see that in terms of things

00:58:33 --> 00:58:37
like core machine learning technologies

00:58:34 --> 00:58:39
like a better classifier or a better

00:58:36 --> 00:58:42
einforcement learning algorithm or a

00:58:38 --> 00:58:44
better generative model if I had the gun

00:58:41 --> 00:58:46
idea today it would be a lot harder to

00:58:43 --> 00:58:50
prove that it was useful than it was

00:58:45 --> 00:58:52
back in 2014 because I would need to get

00:58:49 --> 00:58:55
it running on something like image net

00:58:51 --> 00:58:56
or celibate high resolution you know

00:58:54 --> 00:58:58
those take a while to train you couldn't

00:58:55 --> 00:59:00
train it in an hour and

00:58:57 --> 00:59:03
know that it was something really new

00:58:59 --> 00:59:06
and exciting back in 2014 shredding an

00:59:02 --> 00:59:08
amnesty was enough but there are other

00:59:05 --> 00:59:12
areas of machine learning where I think

00:59:07 --> 00:59:14
a new idea could actually be developed

00:59:11 --> 00:59:16
really quickly with low resources what's

00:59:13 --> 00:59:18
your intuition about what areas of

00:59:15 --> 00:59:20
machine learning are ripe for this yeah

00:59:17 --> 00:59:23
so I think

00:59:19 --> 00:59:27
fairness and interpretability

00:59:22 --> 00:59:28
our areas where we just really don't

00:59:26 --> 00:59:29
have any idea how anything should be

00:59:27 --> 00:59:31
done yet

00:59:28 --> 00:59:33
like for interpretability I don't think

00:59:30 --> 00:59:35
we even have the right definitions and

00:59:32 --> 00:59:37
even just defining a really useful

00:59:34 --> 00:59:40
concept you don't even need to run any

00:59:36 --> 00:59:42
experiments could have a huge impact on

00:59:39 --> 00:59:44
the field we've seen that for example in

00:59:41 --> 00:59:46
differential privacy that uh Cynthia

00:59:43 --> 00:59:49
Dworkin her collaborators made this

00:59:45 --> 00:59:50
technical definition of privacy where

00:59:48 --> 00:59:52
before a lot of things are really mushy

00:59:49 --> 00:59:55
and then with that definition you could

00:59:51 --> 00:59:57
actually design randomized algorithms

00:59:54 --> 00:59:59
for accessing databases and guarantee

00:59:56 --> 01:00:01
that they preserved individual people's

00:59:58 --> 01:00:05
privacy in a in like a mathematical

01:00:00 --> 01:00:07
quantitative sense right now we all talk

01:00:04 --> 01:00:09
a lot about how interpretable different

01:00:06 --> 01:00:10
machine learning algorithms are but it's

01:00:08 --> 01:00:12
really just people's opinion and

01:00:09 --> 01:00:14
everybody probably has a different idea

01:00:11 --> 01:00:16
of what interpretability means in their

01:00:13 --> 01:00:18
head if we could define some concept

01:00:15 --> 01:00:20
related to interpretability that's

01:00:17 --> 01:00:22
actually measurable that would be a huge

01:00:19 --> 01:00:24
leap forward even without a new

01:00:21 --> 01:00:28
algorithm that increases that quantity

01:00:23 --> 01:00:30
and also once once we had the definition

01:00:27 --> 01:00:32
of differential privacy it was fast to

01:00:29 --> 01:00:33
get the algorithms that guaranteed it so

01:00:31 --> 01:00:35
you could imagine once we have

01:00:32 --> 01:00:36
definitions of good concepts and

01:00:34 --> 01:00:37
interpretability

01:00:35 --> 01:00:39
we might be able to provide the

01:00:36 --> 01:00:42
algorithms that have the

01:00:38 --> 01:00:47
interpretability guarantees quickly to

01:00:41 --> 01:00:49
what do you think it takes to build a

01:00:46 --> 01:00:51
system with human level intelligence as

01:00:48 --> 01:00:54
we quickly venture into the

01:00:50 --> 01:00:58
philosophical so artificial general

01:00:53 --> 01:01:01
intelligence what do you think I I think

01:00:57 --> 01:01:03
that it definitely takes better

01:01:00 --> 01:01:05
environments than we currently have for

01:01:02 --> 01:01:07
training agents that we want them to

01:01:04 --> 01:01:10
have a really wide diversity of

01:01:06 --> 01:01:12
experiences I also think it's going to

01:01:09 --> 01:01:14
take really a lot of computation it's

01:01:11 --> 01:01:16
hard to imagine exactly how much so

01:01:13 --> 01:01:19
you're optimistic about simulation

01:01:15 --> 01:01:21
simulating a variety of environments is

01:01:18 --> 01:01:24
the path forward I think it's a

01:01:20 --> 01:01:27
necessary ingredient yeah I don't think

01:01:23 --> 01:01:29
that we're going to get to artificial

01:01:26 --> 01:01:32
general intelligence by training on

01:01:28 --> 01:01:33
fixed datasets or by thinking really

01:01:31 --> 01:01:36
hard about the problem I think

01:01:32 --> 01:01:37
that the the agent really needs to

01:01:35 --> 01:01:42
interact and have a variety of

01:01:36 --> 01:01:45
experiences within the same lifespan and

01:01:41 --> 01:01:47
today we have many different models that

01:01:44 --> 01:01:49
can each do one thing and we tend to

01:01:46 --> 01:01:51
train them on one data set or one RL

01:01:48 --> 01:01:54
environment sometimes they're actually

01:01:50 --> 01:01:56
papers about getting one set of

01:01:53 --> 01:01:58
parameters to perform well in many

01:01:55 --> 01:02:00
different RL environments but we don't

01:01:57 --> 01:02:02
really have anything like an agent that

01:01:59 --> 01:02:04
goes seamlessly from one type of

01:02:01 --> 01:02:06
experience to another and and really

01:02:03 --> 01:02:09
integrates all the different things that

01:02:05 --> 01:02:11
it does over the course of its life when

01:02:08 --> 01:02:14
we do see multi agent environments they

01:02:10 --> 01:02:16
tend to be there are so many multi

01:02:13 --> 01:02:18
environment agents they tend to be

01:02:15 --> 01:02:20
similar environments like all of them

01:02:17 --> 01:02:22
are playing like an action based video

01:02:19 --> 01:02:24
game we don't really have an agent that

01:02:21 --> 01:02:27
goes from you know playing a video game

01:02:23 --> 01:02:31
to like reading The Wall Street Journal

01:02:26 --> 01:02:33
to predicting how effective a molecule

01:02:30 --> 01:02:35
will be as a drug or something like that

01:02:32 --> 01:02:38
what do you think is a good test for

01:02:34 --> 01:02:41
intelligence in you view it's been a lot

01:02:37 --> 01:02:44
of benchmarks started with the with Alan

01:02:40 --> 01:02:46
Turing a natural conversation being good

01:02:43 --> 01:02:51
being a good benchmark for intelligence

01:02:45 --> 01:02:53
what what are what would you and good

01:02:50 --> 01:02:55
fellows sit back and be really damn

01:02:52 --> 01:02:58
impressed if a system was able to

01:02:54 --> 01:03:01
accomplish something that doesn't take a

01:02:57 --> 01:03:04
lot of glue from human engineers so

01:03:00 --> 01:03:08
imagine that instead of having to go to

01:03:03 --> 01:03:11
the CFR website and download CFR 10 and

01:03:07 --> 01:03:13
then write a Python script to parse it

01:03:10 --> 01:03:17
and all that you could just point an

01:03:12 --> 01:03:20
agent at the CFR 10 problem and it

01:03:16 --> 01:03:21
downloads and extracts the data and

01:03:19 --> 01:03:24
trains a model and starts giving you

01:03:20 --> 01:03:27
predictions I feel like something that

01:03:23 --> 01:03:30
doesn't need to have every step of the

01:03:26 --> 01:03:32
pipeline assembled for it it definitely

01:03:29 --> 01:03:33
understands what it's doing is Auto ml

01:03:31 --> 01:03:36
moving into that direction are you

01:03:32 --> 01:03:39
thinking wave and bigger autosomal has

01:03:35 --> 01:03:41
mostly been moving toward once we've

01:03:38 --> 01:03:43
built all the glue can the machine

01:03:40 --> 01:03:46
learning system to design the

01:03:42 --> 01:03:47
architecture really well so I'm we're

01:03:45 --> 01:03:49
saying like

01:03:46 --> 01:03:51
if something knows how to pre-process

01:03:48 --> 01:03:53
the data so that it successfully

01:03:50 --> 01:03:55
accomplishes the task then it would be

01:03:52 --> 01:03:57
very hard to argue that it doesn't truly

01:03:54 --> 01:03:58
understand the task in some fundamental

01:03:56 --> 01:04:00
sense

01:03:57 --> 01:04:02
and I don't necessarily know that that's

01:03:59 --> 01:04:03
like the philosophical definition of

01:04:01 --> 01:04:04
intelligence but that's something that

01:04:02 --> 01:04:06
would be really cool to build that would

01:04:03 --> 01:04:08
be really useful and would impress me

01:04:05 --> 01:04:10
and would convince me that we've made a

01:04:07 --> 01:04:16
step forward in real AI so you give it

01:04:09 --> 01:04:19
like the URL for Wikipedia and then next

01:04:15 --> 01:04:21
day expected to be able to solve CFR 10

01:04:18 --> 01:04:23
or like you type in a paragraph

01:04:20 --> 01:04:25
explaining what you want it to do and it

01:04:22 --> 01:04:27
figures out what web searches it should

01:04:24 --> 01:04:32
run and downloads all the whole

01:04:26 --> 01:04:36
unnecessary ingredients so you have a

01:04:31 --> 01:04:39
very clear calm way of speaking no arms

01:04:35 --> 01:04:43
easy to edit I've seen comments for both

01:04:38 --> 01:04:45
you and I have been identified as both

01:04:42 --> 01:04:47
potentially being robots if you have to

01:04:44 --> 01:04:52
prove to the world that you are indeed

01:04:46 --> 01:04:55
human how would you do it but I can

01:04:51 --> 01:04:58
understand thinking that I'm a robot

01:04:54 --> 01:05:00
it's the flipside yeah touring test I

01:04:57 --> 01:05:04
think yeah yeah the proof prove your

01:04:59 --> 01:05:06
human test I mean I lecture so you have

01:05:03 --> 01:05:10
to is there something that's truly

01:05:05 --> 01:05:12
unique in your mind I suppose it doesn't

01:05:09 --> 01:05:15
go back to just natural language again

01:05:11 --> 01:05:16
just being able to so proving proving

01:05:14 --> 01:05:17
that I'm not a robot with today's

01:05:15 --> 01:05:19
technology

01:05:16 --> 01:05:21
eah that's pretty straightforward too

01:05:18 --> 01:05:24
like my conversation today hasn't veered

01:05:20 --> 01:05:25
off into you know talking about the

01:05:23 --> 01:05:28
stock market or something because in my

01:05:24 --> 01:05:29
training data but I think it's more

01:05:27 --> 01:05:31
generally trying to prove that something

01:05:28 --> 01:05:32
is real from the content alone it was

01:05:30 --> 01:05:33
incredibly hard that's one of the main

01:05:31 --> 01:05:38
things I've gotten out of my can

01:05:32 --> 01:05:39
research that you can simulate almost

01:05:37 --> 01:05:42
anything and so you have to really step

01:05:38 --> 01:05:44
back to a separate channel to prove that

01:05:41 --> 01:05:46
slang is real so like I guess I should

01:05:43 --> 01:05:48
have had myself stamped on a blockchain

01:05:45 --> 01:05:50
when I was born or something but I

01:05:47 --> 01:05:52
didn't do that so according to my own

01:05:49 --> 01:05:54
research methodology there's just no way

01:05:51 --> 01:05:56
to know at this point so what

01:05:53 --> 01:05:58
last question problem stands all for you

01:05:55 --> 01:06:01
that you're really excited about

01:05:57 --> 01:06:03
challenging in the near future so I

01:06:00 --> 01:06:05
think resistance to adversarial examples

01:06:02 --> 01:06:07
figuring out how to make machine

01:06:04 --> 01:06:09
learning secure against an adversary who

01:06:06 --> 01:06:11
wants to interfere it in control with it

01:06:08 --> 01:06:13
is one of the most important things

01:06:10 --> 01:06:18
researchers today could solve in all

01:06:12 --> 01:06:20
domains in image language driving in I

01:06:17 --> 01:06:23
guess I'm most concerned about domains

01:06:19 --> 01:06:25
we haven't really encountered yet like

01:06:22 --> 01:06:27
imagine twenty years from now when

01:06:24 --> 01:06:29
we're using advanced day eyes to do

01:06:26 --> 01:06:31
things we haven't even thought of yet

01:06:28 --> 01:06:35
like if you ask people what are the

01:06:31 --> 01:06:39
important problems in security of phones

01:06:34 --> 01:06:40
in in like 2002 I don't think we would

01:06:38 --> 01:06:43
have anticipated that we're using them

01:06:39 --> 01:06:44
for you know nearly as many things as

01:06:42 --> 01:06:46
we're using them for today I think it's

01:06:43 --> 01:06:48
going to be like that with AI that you

01:06:45 --> 01:06:49
can kind of try to speculate about where

01:06:47 --> 01:06:51
it's going but really the business

01:06:48 --> 01:06:54
opportunities that end up taking off

01:06:50 --> 01:06:56
would be hard to predict ahead of time

01:06:53 --> 01:06:58
well you can predict ahead of time is

01:06:55 --> 01:07:00
that almost anything you can do with

01:06:57 --> 01:07:03
machine learning you would like to make

01:06:59 --> 01:07:05
sure that people can't get it to do what

01:07:02 --> 01:07:07
hey want rather than what you want just

01:07:04 --> 01:07:10
by showing it a funny QR code or

01:07:06 --> 01:07:12
a funny input pattern and you think that

01:07:09 --> 01:07:14
he set of methodology to do that can be

01:07:11 --> 01:07:17
bigger than you want domain and that's I

01:07:13 --> 01:07:21
think so yeah yeah like one methodology

01:07:16 --> 01:07:22
that I think is not not a specific

01:07:20 --> 01:07:24
methodology but like a category of

01:07:21 --> 01:07:27
solutions that I'm excited about today

01:07:23 --> 01:07:29
is making dynamic models that change

01:07:26 --> 01:07:32
very time they make a prediction so

01:07:28 --> 01:07:33
right now we tend to train models and

01:07:31 --> 01:07:36
then after they're trained we freeze

01:07:32 --> 01:07:37
them and we just use the same rule to

01:07:35 --> 01:07:40
classify everything that comes in from

01:07:36 --> 01:07:43
then on that's really a sitting duck

01:07:39 --> 01:07:44
from a security point of view if you

01:07:42 --> 01:07:48
always output the same answer for the

01:07:43 --> 01:07:50
same input then people can just run

01:07:47 --> 01:07:51
inputs through until they find a mistake

01:07:49 --> 01:07:53
that benefits them and then they use the

01:07:50 --> 01:07:56
same mistake over and over and over

01:07:52 --> 01:07:58
again I think having a model that

01:07:55 --> 01:08:01
updates its predictions so that it's

01:07:57 --> 01:08:03
harder to predict what you're going to

01:08:00 --> 01:08:05
get will make it harder for the for an

01:08:02 --> 01:08:06
adversary to really take control of the

01:08:04 --> 01:08:09
system and make it do what they want it

01:08:05 --> 01:08:11
o do yeah models that maintain a bit of

01:08:08 --> 01:08:13
a sense of mystery and bought them

01:08:10 --> 01:08:15
because they always keep changing yeah

01:08:12 --> 01:08:16
and thanks so much for talking today it

01:08:14 --> 01:08:19
was awesome thank you for coming in

01:08:15 --> 01:08:19
that's great to see you

<!-- YOUTUBE_TRANSCRIPT_END -->
