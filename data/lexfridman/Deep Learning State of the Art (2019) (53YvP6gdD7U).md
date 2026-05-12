---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "53YvP6gdD7U"
title: "Deep Learning State of the Art (2019)"
video_url: "https://www.youtube.com/watch?v=53YvP6gdD7U"
thumbnail_url: "https://i.ytimg.com/vi/53YvP6gdD7U/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=53YvP6gdD7U"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-01-17T16:50:41.000Z"
upload_date: "2019-01-17"
duration_seconds: 2785
duration_human: "46:25"
view_count: 164318
like_count: 2868
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:14:30.381Z"
---

# Deep Learning State of the Art (2019)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=53YvP6gdD7U
- video_id: 53YvP6gdD7U
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-01-17T16:50:41.000Z
- upload_date: 2019-01-17
- duration: 46:25
- view_count: 164318
- like_count: 2868
- has_subtitle: true
- language: en
- availability: public
- tags: deep learning, mit, machine learning, bert, nvidia, tesla, autopilot, gan, openai, deepmind, nlp, dawnbench, fastai, automl, augmentation, neural networks
- categories: Science & Technology

## Description

New lecture on recent developments in deep learning that are defining the state of the art in our field (algorithms, applications, and tools). This is not a complete list, but hopefully includes a good sampling of new exciting ideas. For more lecture videos visit our website or follow code tutorials on our GitHub repo.

INFO:
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Slides: http://bit.ly/2HiZyvP
Playlist: http://bit.ly/deep-learning-playlist

OUTLINE:
0:00 - Introduction
2:00 - BERT and Natural Language Processing
14:00 - Tesla Autopilot Hardware v2+: Neural Networks at Scale
16:25 - AdaNet: AutoML with Ensembles
18:32 - AutoAugment: Deep RL Data Augmentation
22:53 - Training Deep Networks with Synthetic Data
24:37 - Segmentation Annotation with Polygon-RNN++
26:39 - DAWNBench: Training Fast and Cheap
29:06 - BigGAN: State of the Art in Image Synthesis
30:14 - Video-to-Video Synthesis
32:12 - Semantic Segmentation
36:03 - AlphaZero & OpenAI Five
43:34 - Deep Learning Frameworks
44:40 - 2019 and beyond

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:03
The thing I would very much like to talk about today

00:00:02 --> 00:00:07
is the state of the art in deep learning.

00:00:06 --> 00:00:09
Here we stand in 2019

00:00:08 --> 00:00:12
really at the height of some of the great accomplishments

00:00:11 --> 00:00:15
that have happened. But also stand at the beginning.

00:00:14 --> 00:00:19
And it's up to us to define where this incredible

00:00:18 --> 00:00:21
data-driven technology takes us.

00:00:20 --> 00:00:24
And so I'd like to talk a little bit about

00:00:23 --> 00:00:27
he breakthroughs that happened in 2017 and 2018

00:00:26 --> 00:00:29
that take us to this point.

00:00:29 --> 00:00:37
So this lecture is not on the state of the art results on

00:00:36 --> 00:00:39
main machine learning benchmarks.

00:00:38 --> 00:00:44
So the various image classification and object detection

00:00:43 --> 00:00:45
or the NLP benchmarks

00:00:44 --> 00:00:48
or the GAN benchmarks.

00:00:47 --> 00:00:52
This isn't about the cutting edge algorithm

00:00:51 --> 00:00:55
that's available on github that performs

00:00:54 --> 00:00:59
best on a particular benchmark. This is about ideas

00:00:58 --> 00:01:03
and developments that are at the cutting edge

00:01:02 --> 00:01:06
of what defines this exciting field of deep learning.

00:01:05 --> 00:01:10
And so I'd like to go through a bunch of different

00:01:09 --> 00:01:12
areas that I think they're really exciting.

00:01:11 --> 00:01:15
Of course this is also not a lecture that's complete

00:01:15 --> 00:01:19
There's other things that may be totally missing that happened

00:01:18 --> 00:01:22
in 2017-18 that are particularly exciting

00:01:21 --> 00:01:24
to people here and people beyond.

00:01:24 --> 00:01:28
For example medical applications of deep learning

00:01:27 --> 00:01:30
is something I totally don't touch on.

00:01:30 --> 00:01:34
And protein folding and all kinds of applications

00:01:34 --> 00:01:37
that there has been some exciting developments

00:01:36 --> 00:01:41
from deep mind and so on that don't touch on.

00:01:40 --> 00:01:44
So forgive me if your favorite developments are missing

00:01:43 --> 00:01:46
but hopefully this encompasses

00:01:45 --> 00:01:49
ome of the really fundamental things that have happened

00:01:48 --> 00:01:52
both on the theory side and the application side

00:01:51 --> 00:01:55
and then the community side of all of us being able to work

00:01:54 --> 00:01:57
together on this and these kinds of technologies.

00:01:57 --> 00:02:02
I think 2018 in terms of deep learning is the year of

00:02:01 --> 00:02:04
natural language processing.

00:02:03 --> 00:02:09
Many have described this year as the ImageNet moment.

00:02:08 --> 00:02:13
In 2012 for computer vision when AlexNet was the first

00:02:12 --> 00:02:17
neural network that really gave that big jump in performance.

00:02:16 --> 00:02:20
And computer vision it started to inspire people what's possible

00:02:19 --> 00:02:23
with deep learning with purely learning based methods.

00:02:22 --> 00:02:27
In the same way there's been a series of developments

00:02:26 --> 00:02:33
from 2016-17 led up to 18 with a development of BERT

00:02:33 --> 00:02:41
that has made on benchmarks and in our ability to

00:02:40 --> 00:02:45
apply NLP to solve various NLP tasks,

00:02:44 --> 00:02:48
natural language processing tasks a total leap.

00:02:47 --> 00:02:51
So let's tell the story of what takes us there.

00:02:50 --> 00:02:53
There's a few developments.

00:02:52 --> 00:02:55
I've mentioned a little bit on Monday

00:02:54 --> 00:02:59
about the encoder decoder or recurrent neural networks.

00:02:58 --> 00:03:06
So this idea of recurrent neural networks encode sequences of data

00:03:06 --> 00:03:10
nd output something,

00:03:09 --> 00:03:13
output either a single prediction or another sequence.

00:03:13 --> 00:03:16
When the input sequence and the output sequence

00:03:15 --> 00:03:20
are not the same, necessarily the same size,

00:03:19 --> 00:03:22
they're like in machine translation we have to translate

00:03:21 --> 00:03:24
from one language to another

00:03:24 --> 00:03:31
the encoder decoder architecture takes the following process.

00:03:30 --> 00:03:33
It takes in the sequence of words

00:03:32 --> 00:03:36
or the sequence of samples as the input

00:03:35 --> 00:03:43
and uses the recurrent units whether LSTM, GRU and beyond

00:03:42 --> 00:03:48
and encodes that sentence into a single vector.

00:03:47 --> 00:03:51
So forms an embedding of that sentence of what it

00:03:51 --> 00:03:54
represent, representation of that sentence.

00:03:54 --> 00:04:00
And then feeds that representation in the decoder

00:03:59 --> 00:04:02
ecurrent neural network

00:04:01 --> 00:04:09
that then generates the sequence of words that form

00:04:08 --> 00:04:13
the sentence in the language that's being translated to.

00:04:12 --> 00:04:16
So first you encode by taking the sequence and

00:04:16 --> 00:04:21
mapping it to a fixed size vector representation.

00:04:20 --> 00:04:26
And then you decode by taking that fixed size vector representation

00:04:25 --> 00:04:27
and unrolling it into the sentence

00:04:26 --> 00:04:29
that can be of different length than the input sentence.

00:04:28 --> 00:04:33
Okay that's the encoder-decoder structure for recurrent neural networks

00:04:33 --> 00:04:37
has been very effective for machine translation

00:04:36 --> 00:04:40
and dealing with arbitrary length input sequences,

00:04:40 --> 00:04:42
arbitrary length output sequences.

00:04:42 --> 00:04:46
Next step attention.

00:04:45 --> 00:04:48
What is attention?

00:04:47 --> 00:04:51
Well it's the next step beyond it's an improvement on the

00:04:50 --> 00:04:57
encoder-decoder architecture.

00:04:56 --> 00:05:01
It allows the, it provides a mechanism that allows

00:05:00 --> 00:05:03
to look back at the input sequence.

00:05:02 --> 00:05:07
So suppose to saying that you have a sequence

00:05:06 --> 00:05:08
that's the input sentence

00:05:09 --> 00:05:12
and that all gets collapsed into a single vector representation.

00:05:11 --> 00:05:15
You're allowed to look back at the particular samples

00:05:14 --> 00:05:16
from the input sequence

00:05:17 --> 00:05:19
as part of the decoding process.

00:05:18 --> 00:05:25
That's attention and you can also learn which aspects

00:05:24 --> 00:05:29
are important for which aspects of the decoding process,

00:05:28 --> 00:05:31
which aspects the input sequence

00:05:31 --> 00:05:36
are important to the output sequence.

00:05:35 --> 00:05:37
Visualize in another way

00:05:36 --> 00:05:41
and there's a few visualizations here.

00:05:40 --> 00:05:42
They're quite incredible

00:05:41 --> 00:05:45
that are done by Jay Alammar.

00:05:44 --> 00:05:52
I highly recommend you follow the links and look at the

00:05:51 --> 00:05:55
further details of these visualizations of attention.

00:05:54 --> 00:05:57
So if we look at neural machine translation

00:05:56 --> 00:06:01
the encoder RNN takes a sequence of words

00:06:00 --> 00:06:07
and throughout, after every sequence forms a set of

00:06:06 --> 00:06:10
hidden representations, hidden state that captures the

00:06:09 --> 00:06:12
representation of the worlds that followed.

00:06:12 --> 00:06:16
And those sets of hidden representations

00:06:15 --> 00:06:20
as opposed to being collapsed to a single fixed size vector, are then

00:06:19 --> 00:06:23
all pushed forward to the decoder.

00:06:22 --> 00:06:26
That are then used by the decoder to translate

00:06:25 --> 00:06:28
but in a selective way.

00:06:27 --> 00:06:32
Where the decoder here visualized on the y-axis

00:06:32 --> 00:06:36
the input language and on the X the output language

00:06:37 --> 00:06:44
the decoder weighs the different parts of the input sequence differently

00:06:43 --> 00:06:48
in order to determine how to best translate generate

00:06:47 --> 00:06:52
the word that forms a translation in the full output sentence.

00:06:51 --> 00:06:55
Okay that's attention,

00:06:54 --> 00:06:58
allowing expanding the encoder-decoder architecture

00:06:57 --> 00:07:06
to allow for selective attention to the input sequence

00:07:05 --> 00:07:09
as opposed to collapsing everything down into fixed representation.

00:07:08 --> 00:07:13
Okay next step self-attention.

00:07:12 --> 00:07:20
In the encoding process allowing the encoder to also

00:07:19 --> 00:07:25
selectively look informing the hidden representations

00:07:24 --> 00:07:28
at other parts of the input sequence

00:07:27 --> 00:07:30
in order to form those representations.

00:07:29 --> 00:07:36
It allows you to determine for certain words.

00:07:35 --> 00:07:40
What are the important relevant aspects of the input sequence

00:07:39 --> 00:07:43
that can help you encode that word the best?

00:07:43 --> 00:07:47
So it improves the encoder process by allowing

00:07:46 --> 00:07:48
it to look at the entirety of the context.

00:07:48 --> 00:07:51
That's self-attention.

00:07:52 --> 00:07:55
Building a transformer.

00:07:55 --> 00:08:01
It's using the self attention mechanism in the encoder

00:08:00 --> 00:08:05
to form these sets of representations on the input sequence.

00:08:04 --> 00:08:09
And then as part of the decoding process follow the same

00:08:08 --> 00:08:11
but in reverse with a bunch of self-attention

00:08:11 --> 00:08:14
that's able to look back again.

00:08:13 --> 00:08:17
So it's self attention on the encoder attention on the decoder

00:08:16 --> 00:08:22
and that's where the magic, that's where the entirety magic is.

00:08:21 --> 00:08:25
That's able to capture the rich context

00:08:24 --> 00:08:28
of the input sequence in order to generate

00:08:27 --> 00:08:31
in the contextual way the output sequence.

00:08:30 --> 00:08:32
So let's take a step back then

00:08:31 --> 00:08:37
and look at what is critical to natural language

00:08:36 --> 00:08:41
in order to be able to reason about words,

00:08:40 --> 00:08:43
construct a language model

00:08:42 --> 00:08:46
and be able to reason about the words in order to

00:08:45 --> 00:08:49
classify a sentence or translate a sentence

00:08:48 --> 00:08:52
or compare two sentences and so on.

00:08:51 --> 00:08:58
There the sentences are collections of words or characters

00:08:57 --> 00:09:02
and those characters and words have to have an efficient representation

00:09:01 --> 00:09:04
that's meaningful for that kind of understanding.

00:09:03 --> 00:09:06
And that's what the process of embedding is.

00:09:05 --> 00:09:08
We talked a little bit about it on Monday.

00:09:07 --> 00:09:12
And so the traditional Word2Vec process of

00:09:11 --> 00:09:14
embedding is you use some kind of trick

00:09:13 --> 00:09:18
in an unsupervised way to map words into

00:09:17 --> 00:09:23
a compressed representation.

00:09:22 --> 00:09:27
So language modeling is the process of determining

00:09:26 --> 00:09:30
which words follow each other usually.

00:09:29 --> 00:09:34
So one way you can use it as in a skip gram model

00:09:33 --> 00:09:37
taking a huge datasets of words

00:09:36 --> 00:09:40
you know, there's writing all over the place taking those datasets

00:09:39 --> 00:09:46
and feeding a neural network that in a supervised way looks

00:09:45 --> 00:09:50
at which words are usually follow the input.

00:09:49 --> 00:09:54
So the input is a word the output is which word are

00:09:53 --> 00:09:56
statistically likely to follow that word.

00:09:55 --> 00:09:58
And the same with the preceding word.

00:09:57 --> 00:10:00
And doing this kind of unsupervised learning

00:10:02 --> 00:10:05
if you throw away the output and the input

00:10:04 --> 00:10:08
and just taking the hidden representation form in the middle

00:10:08 --> 00:10:11
that's how you form this compressed embedding

00:10:11 --> 00:10:15
a meaningful representation that when

00:10:14 --> 00:10:18
two words are related in a language modeling sense,

00:10:17 --> 00:10:20
two words that are related they're going to be

00:10:19 --> 00:10:22
in that representation close to each other.

00:10:21 --> 00:10:24
And when they're totally unrelated have nothing to

00:10:23 --> 00:10:25
do with each other they're far away

00:10:24 --> 00:10:34
ELMo is the approach of using bi-directional L STMs

00:10:33 --> 00:10:40
to learn that representation.

00:10:33 --> 00:10:35
And what bi-directional, bi-directionally?

00:10:34 --> 00:10:37
So looking not just the sequence that let up to the word

00:10:36 --> 00:10:40
but in both directions the sequence that

00:10:39 --> 00:10:41
following, the sequence that before.

00:10:42 --> 00:10:49
And that allows you to learn the rich full context of the word.

00:10:49 --> 00:10:52
In learning the rich full context of the word

00:10:51 --> 00:10:54
you're forming representations

00:10:53 --> 00:11:05
that are much better able to represent the statistical language model

00:11:04 --> 00:11:11
behind the kind of corpus of language that you're you're looking at.

00:11:05 --> 00:11:12
And this has taken a big leap in ability to then

00:11:11 --> 00:11:16
that for further algorithms then with the language model

00:11:15 --> 00:11:18
a reasoning about doing things like

00:11:17 --> 00:11:21
sentence classification, sentence comparison, so on.

00:11:20 --> 00:11:25
Translation that representation is much more effective

00:11:24 --> 00:11:26
for working with language.

00:11:26 --> 00:11:31
The idea of the OpenAI transformer

00:11:30 --> 00:11:35
is the next step forward is taking the

00:11:34 --> 00:11:38
same transformer that I mentioned previously.

00:11:37 --> 00:11:41
The encoder with self-attention decoder with

00:11:40 --> 00:11:43
attention looking back at the input sequence.

00:11:42 --> 00:11:50
And using, taking the language learned by the decoder

00:11:52 --> 00:11:55
and using that as a language model

00:11:54 --> 00:11:58
and then chopping off layers and training in a specific

00:11:57 --> 00:12:02
on a specific language tasks like sentence classification.

00:12:02 --> 00:12:08
Now BERT is the thing that did the big leap in performance.

00:12:07 --> 00:12:12
With the transformer formulation there is always

00:12:11 --> 00:12:14
there's no bi-directional element.

00:12:13 --> 00:12:16
There is, it's always moving forward.

00:12:15 --> 00:12:20
So the encoding step and the decoding step with BERT is

00:12:20 --> 00:12:24
it's richly bi-directional

00:12:23 --> 00:12:27
it takes in the full sequence of the sentence

00:12:29 --> 00:12:35
and masks out some percentage of the words,

00:12:34 --> 00:12:37
15% of the words.

00:12:36 --> 00:12:40
15% of the samples of tokens from the sequence.

00:12:39 --> 00:12:47
And tasks the entire encoding

00:12:46 --> 00:12:52
self-attention mechanism to predict the words that are missing.

00:12:51 --> 00:12:57
That construct and then you stack a ton of them together.

00:12:56 --> 00:13:03
A ton of those encoders self-attention feed-forward network,

00:13:02 --> 00:13:09
self attention feed forward network together.

00:13:02 --> 00:13:06
And that allows you to learn the rich context of the language

00:13:05 --> 00:13:10
to then at the end perform all kinds of tasks.

00:13:10 --> 00:13:14
You can create first of all, like Elmo

00:13:13 --> 00:13:18
and like Word2Vec, create rich contextual embeddings.

00:13:17 --> 00:13:22
Take a set of words and represent them in the space

00:13:22 --> 00:13:25
that's very efficient to reason with.

00:13:24 --> 00:13:26
You can do language classification,

00:13:25 --> 00:13:30
you can do settings pair classification,

00:13:29 --> 00:13:32
you can do the similarity of two sentences,

00:13:31 --> 00:13:34
multiple choice question answering,

00:13:33 --> 00:13:35
general question answering,

00:13:34 --> 00:13:37
tagging of sentences.

00:13:37 --> 00:13:43
okay I'll link it on that one a little bit too long.

00:13:42 --> 00:13:46
but it is also the one I'm really excited about

00:13:46 --> 00:13:49
and really if there's a breakthrough this year

00:13:48 --> 00:13:51
is been it's thanks to BERT.

00:13:50 --> 00:13:55
The other thing I'm very excited about is totally

00:13:54 --> 00:14:01
jumping away from the new rips,

00:14:00 --> 00:14:06
the theory, those kind of academic developments

00:14:05 --> 00:14:10
and deep learning and into the world of applied deep learning.

00:14:10 --> 00:14:15
So Tesla has a system called Autopilot

00:14:15 --> 00:14:19
where the hardware version 2 of that system

00:14:20 --> 00:14:29
is a newer implementation of the NVIDIA Drive PX 2 system

00:14:28 --> 00:14:32
which runs a ton of neural networks.

00:14:31 --> 00:14:37
There's 8 cameras on the car and

00:14:36 --> 00:14:46
a variant of the inception network is now taking in all a cameras

00:14:45 --> 00:14:48
at different resolutions as input

00:14:47 --> 00:14:52
and performing various tasks,

00:14:51 --> 00:14:56
like drivable area segmentation, like object detection

00:14:55 --> 00:14:59
and some basic localization tasks.

00:14:58 --> 00:15:06
So you have now a huge fleet of vehicles where it's not engineers

00:15:06 --> 00:15:10
ome I'm sure engineers but it's really regular consumers,

00:15:09 --> 00:15:14
people that have purchased the car have no understanding

00:15:13 --> 00:15:16
in many cases of what neural networks

00:15:15 --> 00:15:18
limitations the capabilities are so on.

00:15:18 --> 00:15:22
Now it has a neural network is controlling the well being

00:15:21 --> 00:15:26
has its decisions, its perceptions

00:15:25 --> 00:15:28
and the control decisions based on those perceptions

00:15:27 --> 00:15:31
are controlling the life of a human being.

00:15:30 --> 00:15:36
And that to me is one of the great breakthroughs of 17 and 18.

00:15:35 --> 00:15:40
In terms of the development of what AI

00:15:40 --> 00:15:44
can do in a practical sense in impacting the world.

00:15:44 --> 00:15:47
And so one billion miles

00:15:46 --> 00:15:50
over 1 billion miles have been driven in Autopilot.

00:15:49 --> 00:15:54
Now there's two types of systems in currently operating in Tesla's.

00:15:53 --> 00:15:57
There's hardware version 1, hardware version 2.

00:15:56 --> 00:16:01
Hardware version 1 was Intel Mobileye

00:16:00 --> 00:16:02
monocular camera perception system.

00:16:01 --> 00:16:05
As far as we know that was not using a neural network.

00:16:04 --> 00:16:06
And it was a fix system.

00:16:05 --> 00:16:09
That wasn't learning, at least online learning in the Tesla's.

00:16:08 --> 00:16:11
The other is hardware version 2

00:16:10 --> 00:16:15
and it's about half and half now in terms of the miles driven.

00:16:14 --> 00:16:18
The hardware version 2 has a neural network that's always learning.

00:16:17 --> 00:16:20
There's weekly updates.

00:16:19 --> 00:16:23
It's always improving the model shipping new weights and so on.

00:16:22 --> 00:16:25
That's the exciting set of breakthroughs

00:16:25 --> 00:16:32
in terms of AutoML, the dream of automating some aspects or

00:16:31 --> 00:16:35
all aspects or many aspects as possible of the

00:16:34 --> 00:16:36
machine learning process

00:16:35 --> 00:16:42
where you can just drop in a dataset that you're working on

00:16:42 --> 00:16:48
and the system will automatically determine all the parameters

00:16:47 --> 00:16:50
from the details of the architectures,

00:16:49 --> 00:16:55
the size are the architecture, the different modules and then architecture

00:16:54 --> 00:17:00
the hyper parameters use for training the architecture

00:16:59 --> 00:17:01
running that they're doing the inference everything.

00:17:00 --> 00:17:04
All is done for you. All you just feed it is data

00:17:03 --> 00:17:11
So that's been the success of the neural architecture search in 16 and 17.

00:17:10 --> 00:17:15
And there's been a few ideas with Google AutoML that's really trying

00:17:14 --> 00:17:17
to almost create an API we just drop in data set.

00:17:16 --> 00:17:20
And it's using reinforcement learning

00:17:19 --> 00:17:25
and recurrent neural networks to given a few modules,

00:17:24 --> 00:17:28
stitch them together in such a way where the objective function

00:17:27 --> 00:17:31
is optimizing the performance of the overall system.

00:17:30 --> 00:17:33
And they've showed a lot of exciting results.

00:17:32 --> 00:17:37
Google showed and others that outperform state of art systems

00:17:36 --> 00:17:40
both in terms of efficiency and in terms of accuracy.

00:17:39 --> 00:17:44
Now in 18 there've been a few improvements on

00:17:44 --> 00:17:48
this direction and one of them is a AdaNet

00:17:47 --> 00:17:52
where it's now using the same reinforcement

00:17:51 --> 00:17:56
learning AutoML formulation to build ensembles on your network.

00:17:55 --> 00:18:00
So in many cases state-of-the-art performance can be achieved

00:17:59 --> 00:18:03
by as opposed to taking a single architecture,

00:18:02 --> 00:18:07
is building up a multitude and ensemble a collection of architectures.

00:18:07 --> 00:18:12
And that's what is doing here is given candidate architectures,

00:18:12 --> 00:18:15
stitching them together to form an ensemble

00:18:14 --> 00:18:16
to get state-of-the-art performance.

00:18:15 --> 00:18:21
Now that state of the art performance is not a leap

00:18:20 --> 00:18:26
a breakthrough leap forward but it's nevertheless a step forward.

00:18:25 --> 00:18:29
And it's a very exciting field that's going to be

00:18:28 --> 00:18:31
receiving more and more attention.

00:18:31 --> 00:18:36
There's an area of machine learning that's heavily under studied

00:18:35 --> 00:18:39
and I think it's extremely exciting area.

00:18:39 --> 00:18:47
And if you look at 2012 with AlexNet achieving

00:18:46 --> 00:18:49
the breakthrough performance

00:18:48 --> 00:18:53
of showing what deep learning networks are capable of.

00:18:52 --> 00:18:59
From that point, from 2012 to today there's been non-stop

00:18:58 --> 00:19:01
extremely active developments of different architectures

00:19:00 --> 00:19:05
that even on just ImageNet alone on doing the image classification task

00:19:04 --> 00:19:12
have improved performance over and over and over with totally new ideas.

00:19:11 --> 00:19:15
Now on the other side on the data side

00:19:14 --> 00:19:20
there's been very few ideas about how to do data augmentation.

00:19:19 --> 00:19:28
So data augmentation is the process of, you know, it's what

00:19:27 --> 00:19:31
kids always do when you learn about an object right?

00:19:30 --> 00:19:37
You look at an object and you kind of like twist it around is

00:19:36 --> 00:19:43
taking the raw data and messing it in such a way

00:19:42 --> 00:19:45
that it can give you much richer

00:19:44 --> 00:19:49
epresentation of what this can this data can look like in other forms

00:19:48 --> 00:19:53
in other contexts in the real world.

00:19:52 --> 00:19:56
There's been very few developments I think still

00:19:55 --> 00:20:00
and there's this AutoAugment is just a step

00:19:59 --> 00:20:03
a tiny step into that direction that I hope that

00:20:03 --> 00:20:06
we as a community invest a lot of effort in.

00:20:05 --> 00:20:08
So what AutoAugment does?

00:20:07 --> 00:20:14
As it says, ok, so there's these data augmentation methods

00:20:13 --> 00:20:16
like translating the image,

00:20:15 --> 00:20:20
sharing the image, doing color manipulation like color inversion.

00:20:19 --> 00:20:23
Let's take those as basic actions you can take

00:20:22 --> 00:20:25
and then use reinforcement learning

00:20:24 --> 00:20:31
and an RNN again construct to stitch those actions

00:20:30 --> 00:20:33
together in such a way that can augment data

00:20:33 --> 00:20:41
like an ImageNet, you train on the data, it gets state-of-the-art performance.

00:20:40 --> 00:20:46
So mess with the data in a way that optimizes

00:20:45 --> 00:20:48
the way you mess with the data. So.

00:20:47 --> 00:20:53
And then they've also showed that given that the

00:20:52 --> 00:20:58
set of data augmentation policies that are learned

00:20:57 --> 00:21:03
to optimize for example for ImageNet

00:21:02 --> 00:21:09
given the some kind of architecture

00:21:02 --> 00:21:07
you can take that learn the set of policies for data augmentation

00:21:06 --> 00:21:11
and apply it to a totally different dataset.

00:21:11 --> 00:21:15
So there's the process of transfer learning.

00:21:15 --> 00:21:18
So what is transfer learning?

00:21:17 --> 00:21:20
We talked about transfer learning, you have a

00:21:19 --> 00:21:24
neural network that learns to do cat versus dog

00:21:23 --> 00:21:28
or no learns to do a thousand class classification problem on image.

00:21:27 --> 00:21:31
And then you transfer, you chop off few layers and you transfer on the task of

00:21:30 --> 00:21:33
your own dataset of cat versus dog.

00:21:32 --> 00:21:38
What you're transferring is the weights

00:21:37 --> 00:21:41
that are learned on the ImageNet classification task.

00:21:41 --> 00:21:46
And now you're then fine-tuning those weights on the

00:21:45 --> 00:21:52
specific, personal cat vs. dog dataset you have.

00:21:52 --> 00:21:56
Now you can do the same thing here.

00:21:55 --> 00:21:59
You can transfer as part of the transfer learning process,

00:21:59 --> 00:22:05
take the data augmentation policies learned on ImageNet,

00:22:04 --> 00:22:06
and transfer those.

00:22:05 --> 00:22:08
You can transfer both the weights and the policies.

00:22:07 --> 00:22:14
That's a really super exciting idea I think.

00:22:13 --> 00:22:17
It wasn't quite demonstrated extremely well here

00:22:16 --> 00:22:19
in terms of performance,

00:22:18 --> 00:22:22
so it got an improvement in performance and so on,

00:22:21 --> 00:22:26
but any kind of inspired an idea that's something

00:22:25 --> 00:22:27
that we need to really think about.

00:22:27 --> 00:22:31
How to augment data in an interesting way

00:22:30 --> 00:22:35
such that given just a few samples of data?

00:22:34 --> 00:22:40
We can generate huge data sets in a way that you can then form

00:22:39 --> 00:22:44
eaningful complex rich representations from.

00:22:43 --> 00:22:48
I think that's really exciting in one of the ways that you break

00:22:47 --> 00:22:51
open the problem of how do we learn a lot from a little.

00:22:50 --> 00:22:55
Training deep neural networks with synthetic data.

00:22:54 --> 00:23:00
This also really an exciting topic

00:22:59 --> 00:23:04
that a few groups but especially NVIDIA invested a lot in.

00:23:03 --> 00:23:09
Here's a from a CVPR2018 probably my favorite work on this topic

00:23:08 --> 00:23:15
is they really went crazy and said ok let's mess

00:23:14 --> 00:23:19
with synthetic data in every way we could possibly can.

00:23:18 --> 00:23:22
So on the left there're shown a set of backgrounds

00:23:21 --> 00:23:24
then there's also a set of artificial objects

00:23:23 --> 00:23:28
and you have a car or some kind of object that you're trying to classify.

00:23:27 --> 00:23:32
So let's take that car and mess with it with every way possible.

00:23:31 --> 00:23:36
Apply lighting variation to whatever way possible,

00:23:35 --> 00:23:40
rotate everything that is crazy so

00:23:39 --> 00:23:44
what NVIDIA is really good at is creating realistic scenes.

00:23:43 --> 00:23:47
And they said okay let's create realistic scenes

00:23:47 --> 00:23:51
but let's also go away aboveboard and not do realistic at all.

00:23:50 --> 00:23:54
Do things that can't possibly happen in reality.

00:23:53 --> 00:23:57
And so generally these huge datasets I want

00:23:56 --> 00:23:59
o train and again achieve quite interesting

00:23:59 --> 00:24:03
quite a quite good performance

00:24:03 --> 00:24:07
on image classification. Of course they're trying to

00:24:06 --> 00:24:09
apply to ImageNet and so on these kinds of tasks,

00:24:08 --> 00:24:13
you're not going to outperform networks that were trained on ImageNet.

00:24:12 --> 00:24:19
But they show that with just a small sample from from those real images

00:24:18 --> 00:24:22
they can fine tune this network train on synthetic images,

00:24:21 --> 00:24:23
totally fake images

00:24:22 --> 00:24:25
to achieve state of the art performance.

00:24:24 --> 00:24:30
Again another way to generate, to get, to learn a lot for very little

00:24:29 --> 00:24:35
by generating fake worlds synthetically.

00:24:37 --> 00:24:42
The process of annotation which for supervised learning

00:24:41 --> 00:24:46
is what you need to do in order to

00:24:45 --> 00:24:48
train the network, you need to be able to provide

00:24:47 --> 00:24:50
ground truth, you need to be able to label

00:24:49 --> 00:24:53
whatever the entity that is being learned.

00:24:52 --> 00:24:57
And so for image classification that's saying what is going on in the image.

00:24:56 --> 00:25:00
And part of that was done on ImageNet by

00:24:59 --> 00:25:03
doing a Google search for creating candidates.

00:25:02 --> 00:25:07
Now saying what's going on in the image is a pretty easy tasks.

00:25:06 --> 00:25:11
Then there is the object detection task of

00:25:10 --> 00:25:12
detecting the boundary box.

00:25:12 --> 00:25:17
And so saying drawing the actual boundary box is a little bit more difficult

00:25:16 --> 00:25:20
but it's a couple of clicks and so on.

00:25:19 --> 00:25:25
Then if we take the finals the probably one of the higher

00:25:24 --> 00:25:28
complexity tasks of perception

00:25:27 --> 00:25:32
of image understanding is segmentation.

00:25:31 --> 00:25:35
It's actually drawing either pixel level or polygons

00:25:34 --> 00:25:37
the outline of particular object.

00:25:37 --> 00:25:40
Now if you have to annotate that that's extremely costly.

00:25:39 --> 00:25:45
So the work with Polygon-RNN is to use recurrent neural networks

00:25:44 --> 00:25:47
to make suggestions for polygons.

00:25:46 --> 00:25:49
It's really interesting.

00:25:48 --> 00:25:53
There's a few tricks to form these high-resolution polygons.

00:25:52 --> 00:25:56
So the idea is it drops in a single point

00:25:56 --> 00:26:00
you draw a boundary box around an object.

00:25:59 --> 00:26:05
You use convolutional neural networks to drop the first point.

00:26:04 --> 00:26:08
And then use recurrent neural networks to draw around it.

00:26:07 --> 00:26:11
And the performance is really good

00:26:10 --> 00:26:13
There's a few tricks and this tool is available online.

00:26:13 --> 00:26:19
It's a really interesting idea again the dream with AutoML is to remove

00:26:18 --> 00:26:21
the human from the picture as much as possible.

00:26:20 --> 00:26:24
With data augmentation remove the human from the

00:26:23 --> 00:26:27
picture as much as possible for a menial data.

00:26:26 --> 00:26:29
Automate the boring stuff and in this case

00:26:28 --> 00:26:33
the act of drawing a polygon tried to automated as much as possible.

00:26:32 --> 00:26:42
The interesting other dimension along which

00:26:41 --> 00:26:46
deep learning is recently being trying to be optimized

00:26:45 --> 00:26:51
is how do we make deep learning accessible.

00:26:50 --> 00:26:54
Fast, cheap, accessible.

00:26:53 --> 00:26:57
So the DAWNBench from Stanford the benchmark

00:26:56 --> 00:27:00
the DAWNBench benchmark from Stanford

00:27:00 --> 00:27:03
asked formulated an interesting competition,

00:27:03 --> 00:27:07
which got a lot of attention and a lot of progress.

00:27:06 --> 00:27:11
It's saying if we want to achieve 93% accuracy

00:27:10 --> 00:27:15
on ImageNet and 94% on CIFAR10,

00:27:14 --> 00:27:18
let's now compete, that's like the requirement,

00:27:18 --> 00:27:22
let's now compete how you can do it in the least amount of time

00:27:22 --> 00:27:25
and for the least amount of dollars.

00:27:24 --> 00:27:28
Do the training in the least amount of time

00:27:27 --> 00:27:30
and the training in the least amount of dollars

00:27:29 --> 00:27:34
like literally dollars you are allowed to spend to do this.

00:27:33 --> 00:27:38
And fast AI you know it's a renegade

00:27:37 --> 00:27:41
awesome renegade group of deep learning researchers

00:27:41 --> 00:27:45
have been able to train on ImageNet in 3 hours.

00:27:44 --> 00:27:49
So this is for training process for 25 bucks.

00:27:49 --> 00:27:56
So training a network that achieves 93% accuracy for 25 bucks,

00:27:55 --> 00:28:01
and 94% accuracy for 26 cents on CIFAR10.

00:28:00 --> 00:28:06
So the key idea that they were playing with is quite simple.

00:28:05 --> 00:28:10
But really boils down to messing with the learning rate

00:28:09 --> 00:28:12
throughout the process of training.

00:28:11 --> 00:28:16
So the learning rate is how much you based on the loss function

00:28:15 --> 00:28:18
based on the error the neural network observes,

00:28:17 --> 00:28:20
how much do you adjust the weights.

00:28:20 --> 00:28:28
So they found that if they crank up the learning rate

00:28:27 --> 00:28:31
while decreasing the momentum,

00:28:30 --> 00:28:34
which is a parameter of the optimization process,

00:28:33 --> 00:28:39
and they do it that jointly they're able to make the network learn really fast.

00:28:38 --> 00:28:44
That's really exciting and the benchmark itself is also really exciting

00:28:43 --> 00:28:46
because that's exactly for people sitting in this room

00:28:45 --> 00:28:53
that opens up the door to doing all kinds of fundamental deep learning

00:28:52 --> 00:28:57
problems without the resources of Google DeepMind

00:28:56 --> 00:29:01
or OpenAI or Facebook or so on, without computational resources.

00:29:00 --> 00:29:05
That's important for academia that's important for independent researchers and so on.

00:29:04 --> 00:29:10
So GANs. There's been a lot of work on

00:29:09 --> 00:29:12
generative adversarial neural networks.

00:29:11 --> 00:29:17
And in some ways there has not been breakthrough

00:29:16 --> 00:29:23
ideas in GANs for quite a bit.

00:29:22 --> 00:29:30
And I think began from Google DeepMind an ability to generate

00:29:29 --> 00:29:33
incredibly high-resolution images.

00:29:33 --> 00:29:37
And it's the same GAN technique,

00:29:36 --> 00:29:41
so in terms of breakthroughs and innovations but scaled.

00:29:40 --> 00:29:45
So the increase the model capacity and increase the the batch size

00:29:44 --> 00:29:47
the number of images that are fed

00:29:46 --> 00:29:53
to the network. It produces incredible images

00:29:52 --> 00:29:56
I encourage you to go online and and look at them

00:29:55 --> 00:29:58
It's hard to believe that they're generated.

00:29:59 --> 00:30:09
So that was 2018 for GANs was a year of scaling and parameter tuning

00:30:09 --> 00:30:13
as opposed to breakthrough new ideas.

00:30:13 --> 00:30:19
Video-to-Video Synthesis. This work is from NVIDIA

00:30:18 --> 00:30:23
is looking at the problem so there's been a lot of work

00:30:22 --> 00:30:26
on general going from image to image.

00:30:25 --> 00:30:30
So from a particular image generating another image.

00:30:29 --> 00:30:35
So whether it's colorizing an image or just to traditionally define GANs.

00:30:36 --> 00:30:40
The idea with video to video synthesis that a few

00:30:39 --> 00:30:41
people have been working on but

00:30:40 --> 00:30:49
NVIDIA took a good step forward is to make the video

00:30:49 --> 00:30:53
to make the temporal consistency the temporal dynamics

00:30:52 --> 00:30:54
part of the optimization process.

00:30:53 --> 00:30:56
So make it look not jumpy.

00:30:56 --> 00:31:01
So if you look here at the comparison the for this particular.

00:31:01 --> 00:31:06
So the input is the labels on the top left and the output of the

00:31:06 --> 00:31:13
NVIDIA approach is on the bottom right.

00:31:12 --> 00:31:15
See it's temper it's very temporarily consistent.

00:31:15 --> 00:31:19
If you look at the image to image mapping that's

00:31:18 --> 00:31:22
that state the pix2pixHD.

00:31:21 --> 00:31:26
It's very jumpy, it's not temporally consistent at all.

00:31:26 --> 00:31:32
And there's some naive approaches for trying to maintain temporal consistency.

00:31:31 --> 00:31:34
That's in the bottom left.

00:31:33 --> 00:31:39
So you can apply this to all kinds of tasks all kinds of video to video mapping.

00:31:38 --> 00:31:41
Here is mapping it to face edges.

00:31:40 --> 00:31:46
Edge detection on faces mapping it to faces.

00:31:45 --> 00:31:49
Generating faces from just edges.

00:31:50 --> 00:31:55
You can look at body pose to actual images.

00:31:55 --> 00:32:00
As an input to the network you can take the pose of the person

00:31:59 --> 00:32:04
and generate the video of the person.

00:32:11 --> 00:32:15
Okay semantic segmentation.

00:32:14 --> 00:32:20
The problem of perception, so if began with AlexNet and ImageNet

00:32:19 --> 00:32:22
has been further and further developments

00:32:21 --> 00:32:25
where the input, the problem is of basic image classification,

00:32:24 --> 00:32:26
where the input is an image

00:32:26 --> 00:32:29
and the output is a classification was going on in that image

00:32:28 --> 00:32:31
and the fundamental architecture can be reused

00:32:31 --> 00:32:34
for more complex tasks like detection

00:32:33 --> 00:32:38
like segmentation and so on, interpreting what's going on in the image.

00:32:37 --> 00:32:42
So these large networks from VGGNet, GoogLeNet,

00:32:41 --> 00:32:46
ResNet, SENet, DenseNet

00:32:45 --> 00:32:49
all these networks are forming rich representations

00:32:48 --> 00:32:51
that can then be used for all kinds of tasks

00:32:50 --> 00:32:53
whether that task is object detection.

00:32:52 --> 00:32:56
This here shown is the region based methods

00:32:55 --> 00:32:59
where the neural network is tasked the

00:32:58 --> 00:33:04
convolutional layers make region proposals.

00:33:03 --> 00:33:06
So much of candidates to be considered.

00:33:05 --> 00:33:11
And then there's a step that's determining what's in those different regions

00:33:10 --> 00:33:14
and forming boundary boxes around them in a for-loop way.

00:33:13 --> 00:33:19
And then there is the one-shot method single-shot method where in a single pass

00:33:18 --> 00:33:23
all of the boundary boxes in their classes generated.

00:33:22 --> 00:33:26
And there has been a tremendous amount of work

00:33:25 --> 00:33:28
in the space of object detection.

00:33:27 --> 00:33:35
Some are single shot method, some are region based methods.

00:33:34 --> 00:33:38
And there's been a lot of exciting work

00:33:37 --> 00:33:43
but not more not I would say breakthrough ideas.

00:33:42 --> 00:33:47
And then we take it to the highest level of perception

00:33:46 --> 00:33:48
which is semantic segmentation.

00:33:48 --> 00:33:54
There's also been a lot of work there the state of the art performance

00:33:53 --> 00:33:56
is at least for the open source systems

00:33:55 --> 00:34:03
is DeepLabv3+ on the PASCAL VOC challenge.

00:34:03 --> 00:34:08
So semantic segmentation and catch it all up started 2014

00:34:07 --> 00:34:10
with fully convolution neural networks.

00:34:09 --> 00:34:14
Chopping off the fully connected layers and then

00:34:13 --> 00:34:22
outputting the heatmap very grainy very low resolution.

00:34:21 --> 00:34:26
Then improving that was SegNet performing maxpooling

00:34:25 --> 00:34:31
with a breakthrough idea that's reused in a lot of cases is

00:34:30 --> 00:34:33
Dilated Convolution, Atrous convolutions

00:34:33 --> 00:34:37
having some spacing which increases the

00:34:36 --> 00:34:41
field of view of the convolutional filter.

00:34:40 --> 00:34:46
The key idea behind DeepLabv3 that

00:34:45 --> 00:34:50
is the state of the art is the multi-scale processing.

00:34:51 --> 00:34:55
Without increasing the parameters the multi scale

00:34:54 --> 00:34:58
is achieved by the "atrous rate"

00:34:58 --> 00:35:02
So taking those atrous convolutions and increasing the spacing.

00:35:01 --> 00:35:06
And you can think of the increasing that spacing

00:35:05 --> 00:35:09
by enlarging the model's field of view.

00:35:08 --> 00:35:15
And so you can consider all these different scales of processing and looking at the

00:35:14 --> 00:35:18
layers of features.

00:35:19 --> 00:35:25
So allowing you to be able to grasp the greater context

00:35:24 --> 00:35:28
as part of the upsampling deconvolutional step.

00:35:28 --> 00:35:30
And that's what's produced in the state of art performances

00:35:29 --> 00:35:35
and that's where we have the tutorial

00:35:34 --> 00:35:41
on github showing this DeepLab

00:35:41 --> 00:35:45
architecture trained on CityScapes.

00:35:44 --> 00:35:50
CityScapes is a driving segmentation data set

00:35:50 --> 00:36:01
hat is one of the most commonly used for the task of driving scene segmentation.

00:36:01 --> 00:36:05
Okay on the deep reinforcement learning for.

00:36:08 --> 00:36:14
So this is touching a bit a bit on the 2017.

00:36:13 --> 00:36:18
But i think the excitement really settled in 2018

00:36:17 --> 00:36:23
as the work from Google and from OpenAI, DeepMind.

00:36:22 --> 00:36:28
So it started in DQN paper from Google DeepMind where they beat a bunch of

00:36:29 --> 00:36:34
Atari games achieving superhuman performance

00:36:33 --> 00:36:37
with deep reinforcement learning methods.

00:36:36 --> 00:36:39
That are taking in just the raw pixels of the game,

00:36:38 --> 00:36:43
so the same kind of architecture is able to learn how to beat these,

00:36:42 --> 00:36:48
how to beat these games. Super exciting idea that kind of has echoes

00:36:47 --> 00:36:51
of what general intelligence is. Taking in the raw

00:36:50 --> 00:36:55
information and being able to understand

00:36:54 --> 00:36:59
the game, the sort of physics of the game sufficient to be able to beat it.

00:36:58 --> 00:37:06
Then in 2016 AlphaGo with some supervision and some playing against itself,

00:37:06 --> 00:37:12
self play, some supervised learning on expert world champ players

00:37:11 --> 00:37:15
and some self play where it plays against itself

00:37:14 --> 00:37:20
was able to beat the top of the world champion at Go.

00:37:19 --> 00:37:26
And then 2017 AlphaGo Zero a specialized version of Alpha Zero

00:37:25 --> 00:37:31
was able to beat the AlphaGo

00:37:30 --> 00:37:33
with just a few days of training.

00:37:32 --> 00:37:36
and zero supervision from expert games.

00:37:36 --> 00:37:40
So through the process of self play again this is kind of

00:37:39 --> 00:37:45
getting the human out of the picture more and more and more

00:37:44 --> 00:37:48
which is why Alpha Zero is probably or this

00:37:47 --> 00:37:53
AlphaGo Zero was the demonstration of

00:37:52 --> 00:37:57
the cleanest demonstration of all the nice progress

00:37:56 --> 00:37:58
in deep reinforcement learning.

00:37:57 --> 00:38:00
I think if we look at the history of AI

00:37:59 --> 00:38:04
when you're sitting on a porch hundred years from now

00:38:03 --> 00:38:11
sort of reminiscing back Alpha Zero will be a thing that people will

00:38:10 --> 00:38:13
remember as an interesting moment in time,

00:38:13 --> 00:38:16
as a key moment in time.

00:38:15 --> 00:38:23
And Alpha Zero was applied in 2017 to beat.

00:38:22 --> 00:38:27
Alpha Zero paper was in 2017 and it was this year

00:38:26 --> 00:38:33
played StockFish in chess which is the best engine, chess playing engines

00:38:32 --> 00:38:36
is able to beat it with just four hours of training

00:38:36 --> 00:38:40
of course the four hours this caveat.

00:38:39 --> 00:38:43
Because four hours for Google DeepMind is highly distributed training.

00:38:42 --> 00:38:49
So it's not four hours for an undergraduate student sitting in their dorm room.

00:38:49 --> 00:38:55
But meaning it was able to self play to very quickly

00:38:54 --> 00:38:57
learn to beat the state of the art chess engine.

00:38:56 --> 00:39:02
And learned to beat the state of the art Shogi engine Elmo.

00:39:02 --> 00:39:09
And the interesting thing here is you know with perfect information games like chess

00:39:08 --> 00:39:13
you have a tree and you have all the decisions you could possibly make

00:39:12 --> 00:39:18
and so the farther along you look at along that tree presumably the better you do.

00:39:17 --> 00:39:23
That's how DeepBlue beat Kasparov in the 90s

00:39:22 --> 00:39:26
is you just look as far as possible in a down the tree

00:39:26 --> 00:39:28
to determine which is the action is the most optimal.

00:39:27 --> 00:39:34
If you look at the way human grandmasters think

00:39:33 --> 00:39:37
it certainly doesn't feel like they're like looking down a tree.

00:39:36 --> 00:39:40
There's something like creative intuition there's something like

00:39:39 --> 00:39:41
you can see the patterns in the board,

00:39:40 --> 00:39:46
you can do a few calculations but really it's an order of hundreds.

00:39:45 --> 00:39:51
It's not on the order of millions or billions which is kind of the

00:39:50 --> 00:39:57
StockFish the state of the art chess engine approach.

00:39:56 --> 00:39:59
And Alpha Zero is moving closer and closer closer towards

00:39:59 --> 00:40:03
the human grandmaster concerning very few future moves.

00:40:03 --> 00:40:05
It's able through the neural network estimator

00:40:04 --> 00:40:07
that's estimating the quality of the move

00:40:06 --> 00:40:11
and the quality of the different, the current quality of the board and

00:40:10 --> 00:40:14
the quality of the moves that follow.

00:40:13 --> 00:40:17
It's able to do much much less look ahead.

00:40:16 --> 00:40:20
So the neural network learns the fundamental information

00:40:19 --> 00:40:22
just like when a grandmaster looks

00:40:21 --> 00:40:25
at a board they can tell how good that is.

00:40:25 --> 00:40:29
So that's again interesting, it's a step towards

00:40:30 --> 00:40:35
at least echoes of what human intelligence is in this very structured

00:40:34 --> 00:40:37
formal constrained world of chess

00:40:36 --> 00:40:38
and go and shogi.

00:40:38 --> 00:40:43
And then there's the other side of the world that's messy.

00:40:42 --> 00:40:46
It's still games. It's still constrained in that way

00:40:47 --> 00:40:51
but OpenAI has taken on the challenge of playing games

00:40:50 --> 00:40:57
that are much messier to have this resemblance

00:40:56 --> 00:41:00
of the real world and the fact that you have to do teamwork,

00:40:59 --> 00:41:02
you have to look at long time horizons

00:41:01 --> 00:41:05
with huge amounts of imperfect information,

00:41:04 --> 00:41:08
hidden information, uncertainty.

00:41:07 --> 00:41:13
So within that world they've taken on the challenge of a popular game Dota 2.

00:41:13 --> 00:41:20
On the human side of that

00:41:19 --> 00:41:20
here's the competition the international hosted every year

00:41:19 --> 00:41:24
where you know in 2018 the winning team gets 11 million dollars.

00:41:23 --> 00:41:26
So it's a very popular very active competition has been

00:41:25 --> 00:41:30
going on for a few years.

00:41:30 --> 00:41:36
They've been improving and it achieved a lot of interesting milestones in 2017.

00:41:35 --> 00:41:40
Their 1v1 bot beat the top professional Dota 2 player.

00:41:39 --> 00:41:45
The way you achieve great things is as you try.

00:41:44 --> 00:41:52
And in 2018 they tried to go 5v5. The OpenAI team lost two games

00:41:51 --> 00:41:58
a go against the top Dota 2 players at the 2018 international.

00:41:57 --> 00:42:03
And of course their ranking here the MMR ranking in Dota 2

00:42:02 --> 00:42:06
has been increasing over and over but there's a lot of challenges

00:42:05 --> 00:42:08
here that make it extremely difficult.

00:42:08 --> 00:42:16
To beat the human players and this is, you know, in every story rocky

00:42:15 --> 00:42:19
or whatever you think about losing is essential element

00:42:18 --> 00:42:22
of a story that leads to then

00:42:21 --> 00:42:24
a movie in a book and the greatness.

00:42:23 --> 00:42:27
So you better believe that they're coming back next year.

00:42:26 --> 00:42:30
And there's going to be a lot of exciting developments there.

00:42:29 --> 00:42:35
It also, Dota 2 and this particular video game makes it currently

00:42:34 --> 00:42:40
this really two games that have the public eye

00:42:39 --> 00:42:43
in terms of AI taking on his benchmarks.

00:42:42 --> 00:42:45
So we saw go incredible accomplishment

00:42:44 --> 00:42:46
What's next?

00:42:45 --> 00:42:53
So last year the associate were the best paper in Europe's.

00:42:52 --> 00:42:58
There was the heads up Texas No Limit Hold'em

00:42:57 --> 00:43:03
AI was able to beat the top level players was completely current

00:43:02 --> 00:43:05
well not completely but currently out of reach

00:43:04 --> 00:43:10
is the general not heads up one versus one but the general team

00:43:09 --> 00:43:14
Texas No Limit Hold'em here you go.

00:43:13 --> 00:43:18
And on the gaming side this dream of Dota 2 now

00:43:17 --> 00:43:20
that's the benchmark that everybody's targeting.

00:43:19 --> 00:43:22
And it's actually incredibly difficult one and some people think

00:43:21 --> 00:43:25
would be a long time before we can win.

00:43:24 --> 00:43:31
And on the more practical side of things the

00:43:30 --> 00:43:37
2018, start in 2017 has been a year of

00:43:36 --> 00:43:43
the frameworks growing up of maturing

00:43:42 --> 00:43:45
and creating ecosystems around them.

00:43:44 --> 00:43:51
With TensorFlow with the history there dating back a few years

00:43:50 --> 00:43:56
has really with TensorFlow 1.0 as come

00:43:55 --> 00:44:04
to be sort of a mature framework PyTorch 1.0 came out 2018 is matured as well.

00:44:03 --> 00:44:07
And now the really exciting developments in the

00:44:06 --> 00:44:10
TensorFlow with the eager execution and beyond

00:44:09 --> 00:44:14
that's coming out TensorFlow 2.0 in in 2019.

00:44:13 --> 00:44:25
So really those two players have made incredible leaps in standardizing deep learning.

00:44:24 --> 00:44:29
In the fact that a lot of the ideas I talked about today

00:44:28 --> 00:44:31
and Monday and we'll keep talking about

00:44:30 --> 00:44:34
are all have a github repository

00:44:33 --> 00:44:37
with implementations in TensorFlow and PyTorch.

00:44:36 --> 00:44:40
Making extremely accessible and that's really exciting.

00:44:39 --> 00:44:47
it's probably best to quote Geoff Hinton the "Godfather" of deep learning,

00:44:46 --> 00:44:51
one of the key people behind backpropagation said recently

00:44:51 --> 00:44:56
on backpropagation is "My view is throw it all away and start again"

00:44:55 --> 00:45:01
His believes backpropagation is totally broken and an idea that has ancient

00:45:00 --> 00:45:04
and it needs to be completely revolutionized

00:45:03 --> 00:45:09
and the practical protocol for doing that is he said the future

00:45:08 --> 00:45:13
depends on some graduate student who's deeply suspicious of everything I've said

00:45:12 --> 00:45:17
that's probably a good way to end

00:45:16 --> 00:45:21
the discussion about what the state of the art

00:45:20 --> 00:45:26
in deep learning holds because everything we're doing is fundamentally based on

00:45:25 --> 00:45:31
ideas from the 60s and the 80s and really in terms of

00:45:30 --> 00:45:35
new ideas, there has not been many new ideas

00:45:34 --> 00:45:38
especially the state of the art results that I've mentioned

00:45:37 --> 00:45:41
are all based on fundamentally,

00:45:41 --> 00:45:46
on stochastic gradient descent and backpropagation.

00:45:45 --> 00:45:52
It's ripe for totally new ideas. So it's up to us to define

00:45:51 --> 00:45:56
the real breakthroughs and the real state of the art 2019

00:45:55 --> 00:46:01
and beyond. So that I'd like to thank you and

00:46:00 --> 00:46:05
the stuff is on the website deeplearning.mit.edu.

<!-- YOUTUBE_TRANSCRIPT_END -->
