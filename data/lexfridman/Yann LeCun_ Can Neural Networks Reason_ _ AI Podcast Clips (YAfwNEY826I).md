---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "YAfwNEY826I"
title: "Yann LeCun: Can Neural Networks Reason? | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=YAfwNEY826I"
thumbnail_url: "https://i.ytimg.com/vi/YAfwNEY826I/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=YAfwNEY826I"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-09-01T14:59:59.000Z"
upload_date: "2019-09-01"
duration_seconds: 616
duration_human: "10:16"
view_count: 18127
like_count: 589
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:05:44.174Z"
---

# Yann LeCun: Can Neural Networks Reason? | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=YAfwNEY826I
- video_id: YAfwNEY826I
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-09-01T14:59:59.000Z
- upload_date: 2019-09-01
- duration: 10:16
- view_count: 18127
- like_count: 589
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, machine learning, neural networks, facebook research, facebook ai, reasoning, expert systems, unsupervised learning, self-supervised learning, cognition, memory, agi, consciousness, yann lecun, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

This is a clip from a conversation with Yann LeCun on the Artificial Intelligence podcast. You can watch the full conversation here: http://bit.ly/2NJiCov If you enjoy these, consider subscribing, sharing, and commenting below.

Full episode: http://bit.ly/2NJiCov
Full episodes playlist: http://bit.ly/2EcbaKf
Clips playlist: http://bit.ly/2JYkbfZ
Podcast website: https://lexfridman.com/ai

Yann LeCun is one of the fathers of deep learning, the recent revolution in AI that has captivated the world with the possibility of what machines can learn from data. He is a professor at New York University, a Vice President & Chief AI Scientist at Facebook, co-recipient of the Turing Award for his work on deep learning. He is probably best known as the founder of convolutional neural networks, in particular their early application to optical character recognition.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:03 --> 00:00:07
[Music]

00:00:07 --> 00:00:12
do you think neural networks can be made

00:00:09 --> 00:00:15
to reason yes there's no question about

00:00:11 --> 00:00:18
hat again we have a good example right

00:00:14 --> 00:00:20
he question is is how so the question

00:00:17 --> 00:00:22
is how much prior structure you have to

00:00:19 --> 00:00:24
put in the neural net so that something

00:00:21 --> 00:00:27
like human reasoning will emerge from it

00:00:23 --> 00:00:31
you know from running another question

00:00:26 --> 00:00:33
is all of our kind of model of what

00:00:30 --> 00:00:36
reasoning is that are based on logic are

00:00:32 --> 00:00:37
discrete and and are therefore

00:00:35 --> 00:00:40
incompatible with gradient based

00:00:36 --> 00:00:42
learning and I was very strong believer

00:00:39 --> 00:00:45
in this idea granion baserunning I don't

00:00:41 --> 00:00:46
believe that other types of learning

00:00:44 --> 00:00:48
that don't use kind of gradient

00:00:45 --> 00:00:49
information if you want so you don't

00:00:47 --> 00:00:50
like discrete mathematics you don't like

00:00:48 --> 00:00:52
anything discrete

00:00:49 --> 00:00:54
well that's it's not that I don't like

00:00:51 --> 00:00:56
it it's just that it's it's incompatible

00:00:53 --> 00:00:58
with learning and I'm a big fan of

00:00:55 --> 00:01:02
running right so in fact that's perhaps

00:00:57 --> 00:01:03
one reason why deep learning has been

00:01:01 --> 00:01:05
kind of looked at with suspicion by a

00:01:02 --> 00:01:07
lot of computer scientists because the

00:01:04 --> 00:01:09
math is very different the math that you

00:01:06 --> 00:01:12
se for deep running you know we kind of

00:01:08 --> 00:01:14
as more to do with you know cybernetics

00:01:11 --> 00:01:16
the kind of math you do in electrical

00:01:13 --> 00:01:19
engineering than the kind of math you

00:01:15 --> 00:01:21
doing computer science and and you know

00:01:18 --> 00:01:23
nothing in in machine learning is exact

00:01:20 --> 00:01:26
right computer science is all about sort

00:01:22 --> 00:01:28
of you know obviously compulsive

00:01:25 --> 00:01:30
attention to details of like you know

00:01:27 --> 00:01:32
every index has to be right and you can

00:01:29 --> 00:01:35
prove that an algorithm is correct right

00:01:31 --> 00:01:39
machine learning is the science of

00:01:34 --> 00:01:43
sloppiness really that's beautiful so

00:01:38 --> 00:01:46
kay maybe let's feel around in the dark

00:01:42 --> 00:01:51
of what is a neural network that reasons

00:01:45 --> 00:01:55
or a system that is works with

00:01:50 --> 00:01:58
continuous functions that's able to do

00:01:54 --> 00:02:01
build knowledge however we think about

00:01:57 --> 00:02:04
reasoning builds on previous knowledge

00:02:00 --> 00:02:06
build on extra knowledge create new

00:02:03 --> 00:02:08
knowledge generalize outside of any

00:02:05 --> 00:02:12
training set ever built what does that

00:02:07 --> 00:02:14
look like if yeah they may be do you

00:02:12 --> 00:02:17
have Inklings of thoughts of what that

00:02:13 --> 00:02:19
look like well yeah I mean yes or no if

00:02:16 --> 00:02:22
I had precise ideas about this I think

00:02:18 --> 00:02:24
you know we'd be building it right now

00:02:21 --> 00:02:26
but and there are people working on this

00:02:23 --> 00:02:29
or whose main research interest is

00:02:25 --> 00:02:31
actually exactly that right so what you

00:02:28 --> 00:02:34
need to have is a working memory so you

00:02:30 --> 00:02:38
need to have some device if you want

00:02:33 --> 00:02:41
some subsystem they can store a

00:02:37 --> 00:02:44
relatively large number of factual

00:02:40 --> 00:02:47
episodic information for you know a

00:02:43 --> 00:02:49
reasonable amount of time so you you

00:02:46 --> 00:02:51
know in the in the brain for example it

00:02:48 --> 00:02:57
kind of three main types of memory one

00:02:50 --> 00:03:00
is the sort of memory of the the state

00:02:56 --> 00:03:01
of your cortex and that sort of

00:02:59 --> 00:03:03
disappears within 20 seconds you can't

00:03:00 --> 00:03:06
remember things for more than about 20

00:03:02 --> 00:03:08
seconds or a minute if you don't have

00:03:05 --> 00:03:10
any other form of memory the second type

00:03:07 --> 00:03:12
of memory which is longer-term is a

00:03:09 --> 00:03:14
short-term is the hippocampus so you can

00:03:11 --> 00:03:16
you know you came into this building you

00:03:13 --> 00:03:20
remember whether where the the exit is

00:03:15 --> 00:03:21
where the elevators are you have some

00:03:19 --> 00:03:23
map of that building that's stored in

00:03:20 --> 00:03:26
your hippocampus you might remember

00:03:22 --> 00:03:27
something about what I said you know a

00:03:25 --> 00:03:30
few minutes ago and forgot all right if

00:03:26 --> 00:03:31
it starts being raised but you know but

00:03:29 --> 00:03:34
hat there's a marker in your

00:03:30 --> 00:03:36
hippocampus and then the the longer term

00:03:33 --> 00:03:39
emory is in the synapse the synapses

00:03:35 --> 00:03:41
right so what you need if you want for a

00:03:38 --> 00:03:43
system that's capable of reasoning is

00:03:40 --> 00:03:47
that you want the hippocampus like thing

00:03:42 --> 00:03:49
right and that's what people have tried

00:03:46 --> 00:03:50
to do with memory networks and you know

00:03:48 --> 00:03:52
in altering machines and stuff like that

00:03:49 --> 00:03:55
right and and now with transformers

00:03:51 --> 00:03:57
which have sort of a memory in they're

00:03:54 --> 00:04:01
kind of self attention system you can

00:03:56 --> 00:04:02
think of it this way so so

00:04:00 --> 00:04:05
that's one element you need another

00:04:01 --> 00:04:10
thing you need is some sort of network

00:04:04 --> 00:04:10
that can access this memory

00:04:09 --> 00:04:15
get an information back and then kind of

00:04:12 --> 00:04:16
crunch on it and then do this

00:04:14 --> 00:04:21
iteratively multiple times because a

00:04:15 --> 00:04:24
chain of reasoning is a process by which

00:04:20 --> 00:04:25
you you you can you update your

00:04:23 --> 00:04:28
knowledge about the state of the world

00:04:24 --> 00:04:30
about you know it's gonna happen etc and

00:04:27 --> 00:04:32
that there has to be this sort of

00:04:29 --> 00:04:35
recurrent operation basically and you

00:04:31 --> 00:04:37
think that kind of if we think about a

00:04:34 --> 00:04:39
transformer so that seems to be too

00:04:36 --> 00:04:42
small to contain the knowledge that's

00:04:38 --> 00:04:44
to represent the knowledge as

00:04:41 --> 00:04:46
containing Wikipedia for example well

00:04:43 --> 00:04:48
transformer doesn't have this idea of

00:04:45 --> 00:04:49
recurrence it's got a fixed number of

00:04:47 --> 00:04:51
layers and that's the number of steps

00:04:48 --> 00:04:53
that you know limits basically it's a

00:04:50 --> 00:04:57
representation but recurrence would

00:04:52 --> 00:05:00
build on the knowledge somehow I mean

00:04:56 --> 00:05:03
yeah it would evolve the knowledge and

00:04:59 --> 00:05:04
expand the amount of information perhaps

00:05:02 --> 00:05:07
or useful information within that

00:05:03 --> 00:05:10
knowledge yeah but is is this something

00:05:06 --> 00:05:11
that just can emerge with size because

00:05:09 --> 00:05:14
it seems like everything we have now is

00:05:10 --> 00:05:17
just no it's not it's not it's not clear

00:05:13 --> 00:05:19
how you access and write into an

00:05:16 --> 00:05:20
associative memory in efficient way I

00:05:18 --> 00:05:22
mean sort of the original memory network

00:05:19 --> 00:05:25
maybe had something like the right

00:05:21 --> 00:05:27
architecture but if you try to scale up

00:05:24 --> 00:05:29
a memory network so that the memory

00:05:26 --> 00:05:32
contains all Wikipedia it doesn't quite

00:05:28 --> 00:05:34
work right so so this is a need for new

00:05:31 --> 00:05:36
ideas there okay but it's not the only

00:05:33 --> 00:05:38
form of reasoning so there's another

00:05:35 --> 00:05:41
form of reasoning which is true which is

00:05:37 --> 00:05:45
very classical so in some types of AI

00:05:40 --> 00:05:49
and it's based on let's call it energy

00:05:44 --> 00:05:51
minimization okay so you have some sort

00:05:48 --> 00:05:56
of objective some energy function that

00:05:50 --> 00:05:59
represents the the the quality or the

00:05:55 --> 00:06:00
negative quality okay energy goes up

00:05:58 --> 00:06:03
when things get bad and they get low

00:06:00 --> 00:06:06
hen things get good so let's say you

00:06:02 --> 00:06:10
want to figure out you know what

00:06:05 --> 00:06:14
gestures do I need to to do to grab an

00:06:09 --> 00:06:16
object or walk out the door if you have

00:06:13 --> 00:06:18
a good model of your own body a good

00:06:15 --> 00:06:20
model of the environment using this kind

00:06:17 --> 00:06:22
of energy minimization you can make a

00:06:19 --> 00:06:23
you can make you can do planning and

00:06:21 --> 00:06:26
it's

00:06:22 --> 00:06:27
in optimum control is called it's called

00:06:25 --> 00:06:29
market model predictive control you have

00:06:26 --> 00:06:30
a model of what's gonna happen in the

00:06:28 --> 00:06:33
world as consequence of your actions and

00:06:29 --> 00:06:35
that allows you to buy energy

00:06:32 --> 00:06:36
minimization figure out a sequence of

00:06:34 --> 00:06:38
action that optimizes a particular

00:06:35 --> 00:06:39
objective function which measures you

00:06:37 --> 00:06:41
know minimize the number of times you're

00:06:38 --> 00:06:46
gonna hit something and the energy gonna

00:06:40 --> 00:06:48
spend doing the gesture and etc so so

00:06:45 --> 00:06:50
that's performer reasoning planning is a

00:06:47 --> 00:06:53
form of reasoning and perhaps what led

00:06:49 --> 00:06:57
to the ability of humans to reason is

00:06:52 --> 00:06:59
the fact that or you know species you

00:06:56 --> 00:07:01
know that appear before us had to do

00:06:58 --> 00:07:04
some sort of planning to be able to hunt

00:07:00 --> 00:07:06
and survive and survive the winter in

00:07:03 --> 00:07:09
particular and so you know it's the same

00:07:05 --> 00:07:14
capacity that you need to have so in

00:07:08 --> 00:07:17
your intuition is if you look at expert

00:07:13 --> 00:07:21
systems in encoding knowledge as logic

00:07:16 --> 00:07:24
systems as graphs in this kind of way is

00:07:20 --> 00:07:27
not a useful way to think about

00:07:23 --> 00:07:30
knowledge graphs are your brittle or

00:07:26 --> 00:07:33
logic representation so basically you

00:07:29 --> 00:07:35
know variables that have values and

00:07:32 --> 00:07:37
constraint between them that are

00:07:34 --> 00:07:39
presented by rules is real too rigid

00:07:36 --> 00:07:41
and too brittle right so one of the you

00:07:38 --> 00:07:46
know some of the early efforts in that

00:07:40 --> 00:07:48
respect were were to put probabilities

00:07:45 --> 00:07:50
on them so a rule you know you know if

00:07:47 --> 00:07:52
you have this in that symptom you know

00:07:49 --> 00:07:53
you have this disease with that

00:07:51 --> 00:07:55
probability and you should prescribe

00:07:52 --> 00:07:58
that antibiotic with that probability

00:07:54 --> 00:08:02
right this mice in system from the 70s

00:07:57 --> 00:08:04
and that that's what that branch of AI

00:08:01 --> 00:08:07
led to you know Bayesian networks in

00:08:03 --> 00:08:11
graphical models and causal inference

00:08:06 --> 00:08:15
and viral you know yeah method so so

00:08:10 --> 00:08:16
there there is I mean certainly a lot of

00:08:14 --> 00:08:18
interesting work going on in this area

00:08:15 --> 00:08:23
the main issue with this is is knowledge

00:08:17 --> 00:08:25
acquisition how do you reduce a bunch of

00:08:22 --> 00:08:28
data to a graph of this type near relies

00:08:24 --> 00:08:31
on the expert on a human being to encode

00:08:27 --> 00:08:36
at add knowledge and that's especially

00:08:30 --> 00:08:37
in practical question the second

00:08:35 --> 00:08:40
question is do you

00:08:36 --> 00:08:42
to represent knowledge symbols and you

00:08:39 --> 00:08:44
want to manipulate them with logic and

00:08:41 --> 00:08:48
again that's incomparable we're learning

00:08:43 --> 00:08:50
so one suggestion with geoff hinton has

00:08:47 --> 00:08:55
been advocating for many decades is

00:08:49 --> 00:08:57
replace symbols by vectors think of it

00:08:54 --> 00:08:59
as pattern of activities in a bunch of

00:08:56 --> 00:09:02
neurons or units or whatever you wanna

00:08:58 --> 00:09:05
call them and replace logic by

00:09:01 --> 00:09:07
continuous functions okay

00:09:04 --> 00:09:12
and that becomes now compatible there's

00:09:06 --> 00:09:14
a very good set of ideas by written in a

00:09:11 --> 00:09:19
paper about 10 years ago by Leon go-to

00:09:13 --> 00:09:20
n who is here at Facebook the title of

00:09:18 --> 00:09:22
the paper is for machine learning to

00:09:19 --> 00:09:25
machine reasoning and his idea is that

00:09:22 --> 00:09:27
learning learning systems should be able

00:09:24 --> 00:09:29
to manipulate objects that are in the

00:09:26 --> 00:09:30
sense fit in a space and then put the

00:09:28 --> 00:09:33
result back in the same space so is this

00:09:29 --> 00:09:36
idea of working memory basically and

00:09:32 --> 00:09:39
it's a very enlightening and in the

00:09:35 --> 00:09:42
sense that might learn something like

00:09:38 --> 00:09:45
the simple expert systems

00:09:41 --> 00:09:48
I mean it's with you can learn basic

00:09:44 --> 00:09:49
logic operations there yeah quite

00:09:47 --> 00:09:52
possibly yeah this is a big debate on

00:09:48 --> 00:09:53
sort of how much prior structure you

00:09:51 --> 00:09:55
have to put in for this kind of stuff to

00:09:52 --> 00:09:58
emerge that's the debate I have with

00:09:54 --> 00:09:58
Gary Marcus and people like that

00:10:03 --> 00:10:06
you

<!-- YOUTUBE_TRANSCRIPT_END -->
