---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "oGk1v1jQITw"
title: "Deep Learning for Natural Language Processing (Richard Socher, Salesforce)"
video_url: "https://www.youtube.com/watch?v=oGk1v1jQITw"
thumbnail_url: "https://i.ytimg.com/vi/oGk1v1jQITw/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=oGk1v1jQITw"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 5343
duration_human: "1:29:03"
view_count: 39908
like_count: 438
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:23:45.920Z"
---

# Deep Learning for Natural Language Processing (Richard Socher, Salesforce)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=oGk1v1jQITw
- video_id: oGk1v1jQITw
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 1:29:03
- view_count: 39908
- like_count: 438
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

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
thank you everybody thanks for coming

00:00:02 --> 00:00:08
back very soon after lunch I'll try to

00:00:04 --> 00:00:11
make it entertaining to avoid some post

00:00:07 --> 00:00:15
food coma so I actually have a lot - OH

00:00:10 --> 00:00:17
- being here - Andrew and Chris and my

00:00:14 --> 00:00:20
PhD at Stanford here it's it's really

00:00:16 --> 00:00:22
it's always fun to be back I figured

00:00:19 --> 00:00:26
there's a going to be a broad range of

00:00:21 --> 00:00:29
capabilities in the room so I'm sorry I

00:00:25 --> 00:00:31
will probably bore some of you for the

00:00:28 --> 00:00:34
first two-thirds of the talk because

00:00:30 --> 00:00:36
I'll go over the basics of what's NLP

00:00:33 --> 00:00:38
when natural language processing what's

00:00:35 --> 00:00:40
deep learning and what's really at the

00:00:37 --> 00:00:42
intersection of the two and then the

00:00:39 --> 00:00:44
last third I will talk a little bit

00:00:41 --> 00:00:47
about some exciting new research that's

00:00:43 --> 00:00:49
happening right now so let's get started

00:00:46 --> 00:00:52
with what is natural language processing

00:00:48 --> 00:00:54
it's really a feel at the intersection

00:00:51 --> 00:00:57
of computer science AI and linguistics

00:00:53 --> 00:00:58
and you could define a lot of goals and

00:00:56 --> 00:01:01
a lot of these statements here we could

00:00:57 --> 00:01:02
really talk and philosophize a lot about

00:01:00 --> 00:01:06
but I'll move through them pretty

00:01:01 --> 00:01:07
quickly for me the goal of natural

00:01:05 --> 00:01:10
anguage processing is for computers to

00:01:06 --> 00:01:12
process or scare quotes understand

00:01:09 --> 00:01:13
natural language in order to perform

00:01:11 --> 00:01:17
tasks that are actually useful for

00:01:12 --> 00:01:19
people such as question answering the

00:01:16 --> 00:01:21
caveat here is that really fully

00:01:18 --> 00:01:24
understanding and representing the

00:01:20 --> 00:01:27
meaning of language or even defining it

00:01:23 --> 00:01:30
is quite an elusive goal so whenever I

00:01:26 --> 00:01:31
say the model understands I'm sorry I

00:01:29 --> 00:01:33
shouldn't say that

00:01:30 --> 00:01:35
really these models don't understand in

00:01:32 --> 00:01:37
the sense that we understand language

00:01:34 --> 00:01:40
anything so whenever somebody says they

00:01:36 --> 00:01:42
can read or represent the full meaning

00:01:39 --> 00:01:46
and its entire glory it's it's usually

00:01:41 --> 00:01:47
not quite true really perfect language

00:01:45 --> 00:01:49
understanding is in some sense AI

00:01:46 --> 00:01:52
complete in the sense that you need to

00:01:48 --> 00:01:54
understand all of visual inputs and

00:01:51 --> 00:01:58
thought and and a lot of other complex

00:01:53 --> 00:02:00
things so a little more concretely as we

00:01:57 --> 00:02:02
try to tackle this overall problem of

00:01:59 --> 00:02:04
understanding language what are sort of

00:02:01 --> 00:02:07
the different levels that we often look

00:02:03 --> 00:02:09
at it often and for many people starts

00:02:06 --> 00:02:11
at speech and then once you have speech

00:02:08 --> 00:02:13
you might say alright now I know what

00:02:10 --> 00:02:14
phonemes are smaller parts of words I

00:02:12 --> 00:02:16
understand

00:02:13 --> 00:02:18
words form Nets morphology or

00:02:15 --> 00:02:21
morphological analysis once I know what

00:02:17 --> 00:02:23
he meaning of words are I might try to

00:02:20 --> 00:02:26
understand how they're put together in

00:02:22 --> 00:02:28
grammatical ways such that the sentences

00:02:25 --> 00:02:30
are understandable or at least

00:02:27 --> 00:02:33
grammatically correct too a lot of

00:02:29 --> 00:02:35
speakers of the language once we go and

00:02:32 --> 00:02:36
we understand the structure we actually

00:02:34 --> 00:02:38
want to get to the meaning and that's

00:02:35 --> 00:02:41
really where I think most of the

00:02:37 --> 00:02:43
interesting most of my interests lies

00:02:40 --> 00:02:45
and semantic interpretation actually

00:02:42 --> 00:02:47
trying to get to the meaning in some

00:02:44 --> 00:02:49
useful capacity and then after that we

00:02:46 --> 00:02:51
might say well if we understand now the

00:02:48 --> 00:02:52
meaning of the whole sentence what's how

00:02:50 --> 00:02:54
do we actually interact

00:02:51 --> 00:02:55
what's the discourse how do we have you

00:02:53 --> 00:02:59
know spoken dialogue system and things

00:02:54 --> 00:03:01
like that where deep learning has really

00:02:58 --> 00:03:03
improved the state of the art

00:03:00 --> 00:03:06
significantly is really in speech

00:03:02 --> 00:03:08
recognition and syntax and semantics and

00:03:05 --> 00:03:10
the interesting thing is that we're kind

00:03:07 --> 00:03:12
of actually skipping some of these

00:03:09 --> 00:03:14
levels deep learning doesn't require

00:03:11 --> 00:03:17
often morphological analysis to create

00:03:13 --> 00:03:19
very useful systems and in some cases

00:03:16 --> 00:03:21
actually skips syntactic analysis

00:03:18 --> 00:03:22
entirely as well it doesn't have to know

00:03:20 --> 00:03:24
about the grammar it doesn't have to be

00:03:21 --> 00:03:26
taught about what mound phrases are

00:03:23 --> 00:03:29
prepositional phrases it can actually

00:03:25 --> 00:03:32
get straight to some semantically useful

00:03:28 --> 00:03:34
tasks right away and that's going to be

00:03:31 --> 00:03:37
one of the sort of advantages that we

00:03:33 --> 00:03:38
don't have to actually be as inspired by

00:03:36 --> 00:03:41
linguistics as traditional natural

00:03:37 --> 00:03:44
anguage processing had to be so why is

00:03:40 --> 00:03:46
NLP hard well there's a lot of

00:03:43 --> 00:03:49
complexity in representing and learning

00:03:45 --> 00:03:50
and especially using linguistics

00:03:48 --> 00:03:52
ituational world and visual knowledge

00:03:49 --> 00:03:54
really all of these are connected when

00:03:51 --> 00:03:56
it gets to the meaning of language to

00:03:53 --> 00:03:59
really understand what red means can you

00:03:55 --> 00:04:01
do that without visual understanding for

00:03:58 --> 00:04:04
instance if you have for instance this

00:04:00 --> 00:04:08
entence here Jane hit June and then she

00:04:03 --> 00:04:12
fell or and then she ran depending on

00:04:07 --> 00:04:14
which verb comes after she the

00:04:11 --> 00:04:16
definition the meaning of she actually

00:04:13 --> 00:04:19
changes and this is one subtask

00:04:15 --> 00:04:20
you might look at so called an F or a

00:04:18 --> 00:04:22
resolution or cor efference resolution

00:04:19 --> 00:04:24
in general where you try to understand

00:04:21 --> 00:04:26
who does she actually refer to and it

00:04:23 --> 00:04:28
really depends on the meaning again

00:04:25 --> 00:04:34
somewhat scare quotes here

00:04:27 --> 00:04:36
of the verb that follows this pronoun

00:04:33 --> 00:04:39
similarly there's a lot of ambiguity so

00:04:35 --> 00:04:39
here we have a very simple sentence for

00:04:38 --> 00:04:43
words

00:04:38 --> 00:04:45
I made her duck now that simple sentence

00:04:42 --> 00:04:47
can actually have at least four

00:04:44 --> 00:04:49
different meanings if you can think

00:04:46 --> 00:04:51
about it for a little bit right you made

00:04:48 --> 00:04:53
her a duck that she loves for Christmas

00:04:50 --> 00:04:56
for dinner

00:04:52 --> 00:04:58
you made her dock like me just now and

00:04:55 --> 00:05:00
so on there are actually four different

00:04:57 --> 00:05:03
meanings and to know which one requires

00:04:59 --> 00:05:06
in some sense situational awareness or

00:05:02 --> 00:05:09
knowledge to really disambiguate what

00:05:05 --> 00:05:12
is meant here so that's sort of the

00:05:08 --> 00:05:14
high level of NLP now where does it

00:05:11 --> 00:05:16
actually become useful in terms of

00:05:13 --> 00:05:18
applications well they actually range

00:05:15 --> 00:05:19
from very simple things that we kind of

00:05:17 --> 00:05:21
assume or you're given now we use them

00:05:18 --> 00:05:24
all the time every day to more and more

00:05:20 --> 00:05:26
complex and then also more in the realm

00:05:23 --> 00:05:28
of research the simple ones are things

00:05:25 --> 00:05:31
like spell checking or key word search

00:05:27 --> 00:05:34
and finding synonyms and ophisaurus then

00:05:30 --> 00:05:37
the meaty medium sort of difficulty ones

00:05:33 --> 00:05:39
are the extract information from

00:05:36 --> 00:05:40
websites trying to extract sort of

00:05:38 --> 00:05:42
product prices or dates and locations

00:05:39 --> 00:05:45
people or company names are called named

00:05:41 --> 00:05:48
entity recognition you can go a little

00:05:44 --> 00:05:50
bit above that and try to classify sort

00:05:47 --> 00:05:52
of reading levels for school text for

00:05:49 --> 00:05:54
instance or do sentiment analysis that

00:05:51 --> 00:05:56
can be helpful if you have a lot of

00:05:53 --> 00:05:58
customer emails that come in and you

00:05:55 --> 00:06:01
want to prioritize highly the ones of

00:05:57 --> 00:06:03
customers for really really review right

00:06:00 --> 00:06:05
now and then the really hard ones and I

00:06:02 --> 00:06:08
think in some sense the most interesting

00:06:04 --> 00:06:10
ones are machine translation trying to

00:06:07 --> 00:06:11
actually be able to translate between

00:06:09 --> 00:06:14
all the different languages in the world

00:06:10 --> 00:06:18
question answering clearly something

00:06:13 --> 00:06:21
that is a very exciting and useful piece

00:06:17 --> 00:06:24
of technology especially over very large

00:06:20 --> 00:06:25
complex domains can be used to automated

00:06:23 --> 00:06:27
for automated email replies I know

00:06:25 --> 00:06:30
pretty much everybody here would love to

00:06:26 --> 00:06:33
have some simple automated email reply

00:06:29 --> 00:06:35
system and then spoken dialogue systems

00:06:32 --> 00:06:36
bots are very hip right now these are

00:06:34 --> 00:06:38
all sort of complex things that are

00:06:35 --> 00:06:40
still in the realm of research to do

00:06:37 --> 00:06:41
them really well we're making huge

00:06:39 --> 00:06:43
progress

00:06:40 --> 00:06:45
with deep learning on these three but

00:06:42 --> 00:06:52
here's still nowhere near human

00:06:44 --> 00:06:53
accuracy so let's look at the

00:06:51 --> 00:06:57
representations I mention you know we

00:06:52 --> 00:07:00
have morphology and words and syntax and

00:06:56 --> 00:07:03
semantics and so on we can look at one

00:06:59 --> 00:07:07
xample a namely machine translation and

00:07:02 --> 00:07:09
look at how did people try to solve this

00:07:06 --> 00:07:11
problem of machine translation well it

00:07:08 --> 00:07:13
urns out they actually tried all these

00:07:10 --> 00:07:15
different levels with varying degrees of

00:07:12 --> 00:07:17
success you can try to have a direct

00:07:14 --> 00:07:19
ranslation of words to other words the

00:07:16 --> 00:07:21
problem is that is often a very tricky

00:07:18 --> 00:07:23
mapping one the meaning of one word in

00:07:20 --> 00:07:25
English might have three different words

00:07:22 --> 00:07:27
in German and vice versa

00:07:24 --> 00:07:30
you can have three of the same words in

00:07:26 --> 00:07:31
English meaning all this single same

00:07:29 --> 00:07:33
word in German for instance so then

00:07:30 --> 00:07:35
people said well let's try to maybe do

00:07:32 --> 00:07:37
some tactic transfer where we have whole

00:07:34 --> 00:07:39
phrases like to kick the bucket just

00:07:36 --> 00:07:42
means stab them in German okay not a fun

00:07:38 --> 00:07:43
example and then semantic transfer might

00:07:41 --> 00:07:45
be well let's try to find a logical

00:07:42 --> 00:07:48
representation of the whole sentence the

00:07:44 --> 00:07:49
actual meaning in some human

00:07:47 --> 00:07:51
understandable form and and try to just

00:07:48 --> 00:07:54
find another surface representation of

00:07:50 --> 00:07:56
that now of course that will also get

00:07:53 --> 00:07:59
rid of a lot of the subtleties of

00:07:55 --> 00:08:01
language and so they're tricky problems

00:07:58 --> 00:08:03
in all these kinds of representations

00:08:00 --> 00:08:06
now the question is what does deep

00:08:02 --> 00:08:08
learning do you've already saw at least

00:08:05 --> 00:08:11
wo methods standard neural networks

00:08:07 --> 00:08:14
before and convolutional neural networks

00:08:10 --> 00:08:17
for vision and in some sense there's

00:08:13 --> 00:08:20
going to be a huge similarity here to

00:08:16 --> 00:08:23
these methods because just like images

00:08:19 --> 00:08:26
that are essentially a long list of

00:08:22 --> 00:08:28
numbers the vector and standard neural

00:08:25 --> 00:08:31
networks where the hidden state is also

00:08:28 --> 00:08:33
just a vector or a list of numbers that

00:08:30 --> 00:08:34
is also going to be the main

00:08:32 --> 00:08:38
representation that we will use

00:08:34 --> 00:08:40
throughout for characters for words for

00:08:37 --> 00:08:43
short phrases for sentences and in some

00:08:39 --> 00:08:47
cases for entire documents they will all

00:08:42 --> 00:08:50
be vectors and with that we are sort of

00:08:46 --> 00:08:51
inishing up the whirlwind of what's NLP

00:08:49 --> 00:08:54
of course you could give an entire

00:08:50 --> 00:08:55
lecture on all like almost every single

00:08:53 --> 00:08:59
slide I just gave

00:08:54 --> 00:09:01
we're very a very high level but we'll

00:08:58 --> 00:09:04
continue at that speed to try to squeeze

00:09:00 --> 00:09:06
this complex deep learning for NLP

00:09:03 --> 00:09:08
subject area into an hour and a half I

00:09:05 --> 00:09:11
think there are two most two of the most

00:09:07 --> 00:09:13
important basic Lego blocks that you

00:09:10 --> 00:09:15
nowadays want to know in order to be

00:09:12 --> 00:09:17
able to sort of creatively play around

00:09:14 --> 00:09:21
with more complex models and those are

00:09:16 --> 00:09:23
going to be word vectors and sequence

00:09:20 --> 00:09:27
models namely recurrent neural networks

00:09:22 --> 00:09:29
and I kind of split this into words

00:09:26 --> 00:09:31
entences and multiple sentences but

00:09:28 --> 00:09:34
really you could use recurrent neural

00:09:30 --> 00:09:36
networks for shorter phrases as well as

00:09:33 --> 00:09:37
multiple sentences but in many cases

00:09:35 --> 00:09:39
we'll see that they have some

00:09:36 --> 00:09:41
limitations as you move to longer and

00:09:38 --> 00:09:44
longer sequences and just use the

00:09:40 --> 00:09:48
default neural network sequence models

00:09:43 --> 00:09:51
alright so let's start with words and

00:09:47 --> 00:09:54
maybe one last blast from the past here

00:09:50 --> 00:09:56
to represent the meaning of words we

00:09:53 --> 00:09:59
actually used to use a taxonomy like

00:09:55 --> 00:10:02
word net that kind of defines each word

00:09:58 --> 00:10:04
in relationship to lots of other ones so

00:10:01 --> 00:10:07
you can for instance define hyper names

00:10:03 --> 00:10:09
and is a relationships you might say the

00:10:06 --> 00:10:12
word Panda for instance in its first

00:10:08 --> 00:10:16
meaning as a noun basically goes through

00:10:11 --> 00:10:19
this complex tags directed acyclic graph

00:10:15 --> 00:10:20
most of it is roughly just a tree and in

00:10:18 --> 00:10:22
the end like everything it is an entity

00:10:19 --> 00:10:24
but it's actually a physical entity a

00:10:21 --> 00:10:26
type of object it's a whole object it's

00:10:23 --> 00:10:28
a living thing it's an organism animal

00:10:25 --> 00:10:31
and so on so you basically can define a

00:10:27 --> 00:10:33
word like this and another way at each

00:10:30 --> 00:10:35
node of this tree you actually have so

00:10:32 --> 00:10:38
called sunset so synonym sets here's an

00:10:34 --> 00:10:41
example for the synonym set of the word

00:10:37 --> 00:10:43
good good can have a lot of different

00:10:40 --> 00:10:46
meanings can actually be both an

00:10:42 --> 00:10:50
adjective and as well as an adverb as

00:10:45 --> 00:10:51
well as a noun now what are the problems

00:10:49 --> 00:10:55
with this kind of discrete

00:10:50 --> 00:10:56
representation well they can be great as

00:10:54 --> 00:11:00
a resource of your human you want to

00:10:55 --> 00:11:03
find synonyms but they're ever they're

00:10:59 --> 00:11:05
never going to be quite sufficient to

00:11:02 --> 00:11:08
capture all the nuances that we have in

00:11:04 --> 00:11:09
language so for instance the synonyms

00:11:07 --> 00:11:12
here for

00:11:08 --> 00:11:14
good were adapt Axford practice

00:11:11 --> 00:11:16
proficient and skillful but of course

00:11:13 --> 00:11:21
you would use these words in slightly

00:11:15 --> 00:11:23
different contexts you would not use the

00:11:20 --> 00:11:25
word expert in exactly this all the same

00:11:22 --> 00:11:29
context as you would use the meaning of

00:11:24 --> 00:11:30
good or the word good likewise it will

00:11:28 --> 00:11:33
be missing a lot of new words language

00:11:29 --> 00:11:34
is this interesting living organism we

00:11:32 --> 00:11:36
change it all the time you might have

00:11:33 --> 00:11:38
some kids they say Yolo and all of a

00:11:35 --> 00:11:41
sudden you know you need to update your

00:11:37 --> 00:11:44
dictionary likewise maybe in Silicon

00:11:40 --> 00:11:45
Valley you might see ninja a lot and now

00:11:43 --> 00:11:47
you need to update your dictionary again

00:11:44 --> 00:11:49
and that is basically going to be a

00:11:46 --> 00:11:51
Sisyphus job right nobody will ever be

00:11:48 --> 00:11:54
able to really capture all the meanings

00:11:50 --> 00:11:57
and and this living breathing organism

00:11:53 --> 00:12:00
that languages so it's also very

00:11:56 --> 00:12:01
subjective some people might think ninja

00:11:59 --> 00:12:03
should just be deleted from the

00:12:00 --> 00:12:06
dictionary and I don't want to include

00:12:02 --> 00:12:07
it I'll just think nifty or badass is

00:12:05 --> 00:12:09
kind of a silly word and should not be

00:12:06 --> 00:12:11
included in a proper dictionary but it's

00:12:08 --> 00:12:13
being used in real language and so on it

00:12:10 --> 00:12:15
requires human labor as soon as you

00:12:12 --> 00:12:18
change your domain you have to ask

00:12:14 --> 00:12:19
people to update it and it's also hard

00:12:17 --> 00:12:21
to compute accurate word similarities

00:12:18 --> 00:12:23
ome of these words are subtly different

00:12:20 --> 00:12:26
and it's really a continuum in which we

00:12:22 --> 00:12:29
can measure their similarities so

00:12:25 --> 00:12:32
instead what we're going to use and what

00:12:28 --> 00:12:34
is also the first step for deep learning

00:12:31 --> 00:12:36
will actually realize it's not quite

00:12:33 --> 00:12:37
deep learning in many cases but it is

00:12:35 --> 00:12:39
ort of the first step to use deep

00:12:37 --> 00:12:42
learning and NLP is we will use

00:12:38 --> 00:12:44
distributional similarities so what does

00:12:41 --> 00:12:47
that mean basically the idea is that

00:12:43 --> 00:12:50
we'll use the neighbors of a word to

00:12:46 --> 00:12:53
represent that word itself it's a pretty

00:12:49 --> 00:12:55
old concept and here's an example for

00:12:52 --> 00:12:57
instance for the word banking we might

00:12:54 --> 00:13:01
actually represent banking in terms of

00:12:56 --> 00:13:04
all these other words that are around it

00:13:00 --> 00:13:07
so let's do a very simple example where

00:13:03 --> 00:13:10
we look at a window around each word and

00:13:06 --> 00:13:12
so here the window length that's just

00:13:09 --> 00:13:14
for simplicity say it's one we represent

00:13:11 --> 00:13:16
each word only with the words one to

00:13:13 --> 00:13:18
left and one to the right of it we'll

00:13:15 --> 00:13:21
just use the symmetric context around

00:13:17 --> 00:13:23
each word and here's a simple example

00:13:20 --> 00:13:25
corpus

00:13:22 --> 00:13:26
o if the three sentences in my corpus

00:13:24 --> 00:13:28
of course we would always want to use

00:13:25 --> 00:13:31
corpora with billions of words instead

00:13:27 --> 00:13:32
of just a couple but just to give you an

00:13:30 --> 00:13:35
idea of what's being captured in these

00:13:31 --> 00:13:39
word vectors is I like people earning I

00:13:34 --> 00:13:41
like NLP and I enjoy flying and now this

00:13:38 --> 00:13:44
it's very simple so-called corcoran

00:13:40 --> 00:13:48
statistic you'll just simply see here I

00:13:43 --> 00:13:50
for instance appears twice in its window

00:13:47 --> 00:13:53
size of one here the word like isn't its

00:13:49 --> 00:13:55
window and its context and the word

00:13:52 --> 00:14:00
enjoy is once in its context and for

00:13:55 --> 00:14:04
like you have twice to its left I and

00:13:59 --> 00:14:07
once deep and once NLP it turns out if

00:14:03 --> 00:14:08
you just take those vectors now this

00:14:06 --> 00:14:10
could be a vector of presentation just

00:14:07 --> 00:14:12
each row could be a vector

00:14:09 --> 00:14:14
epresentation for words unfortunately

00:14:11 --> 00:14:16
as soon as your vocabulary increases

00:14:13 --> 00:14:18
that vector dimensionality would change

00:14:15 --> 00:14:22
and hence you have to retrain your whole

00:14:17 --> 00:14:24
model it's also very sparse and really

00:14:21 --> 00:14:27
it's going to be somewhat noisy if you

00:14:23 --> 00:14:30
se that vector now another better thing

00:14:26 --> 00:14:31
to do might be to run SVD or something

00:14:29 --> 00:14:34
simple like say dimensionality reduction

00:14:30 --> 00:14:37
such a co-occurrence matrix and that

00:14:34 --> 00:14:39
actually gives you a reasonable first

00:14:36 --> 00:14:42
approximation to word vectors very old

00:14:38 --> 00:14:45
method works reasonably well now what

00:14:41 --> 00:14:47
works even better than simple PCA is

00:14:44 --> 00:14:50
actually a model introduced by Thomas

00:14:46 --> 00:14:53
McAuliffe in 2013 called word Tyvek so

00:14:49 --> 00:14:55
instead of capturing Corcoran's counts

00:14:52 --> 00:14:57
directly out of a matrix like that

00:14:54 --> 00:14:59
you'll actually go through each window

00:14:56 --> 00:15:02
in a large corpus and try to predict a

00:14:58 --> 00:15:04
word that's in the center of each window

00:15:01 --> 00:15:07
and use that to predict the words around

00:15:03 --> 00:15:10
it that way you can very quickly train

00:15:06 --> 00:15:13
you can train almost on line though few

00:15:09 --> 00:15:16
people do this and and add words to

00:15:12 --> 00:15:19
vocabulary very quickly in this zooming

00:15:15 --> 00:15:21
fashion so now let's look a little bit

00:15:18 --> 00:15:26
at this model where Tyvek because it's

00:15:20 --> 00:15:29
first very simple NLP model and to sort

00:15:25 --> 00:15:31
of is very instructive we won't go into

00:15:28 --> 00:15:33
o many details but at least look at a

00:15:30 --> 00:15:36
couple of equations so again

00:15:32 --> 00:15:37
main goal is to breeding words in a

00:15:35 --> 00:15:39
window

00:15:36 --> 00:15:41
of some length that we define em type or

00:15:38 --> 00:15:43
parameter of every word now the

00:15:40 --> 00:15:45
objective function will essentially try

00:15:42 --> 00:15:47
to maximize here the log probability of

00:15:44 --> 00:15:49
any of these contacts words given the

00:15:46 --> 00:15:53
Center word so we go through our entire

00:15:48 --> 00:15:56
corpus T very long sequence and at each

00:15:52 --> 00:16:00
time step J we will basically look at

00:15:55 --> 00:16:04
all the words in the context of the

00:15:59 --> 00:16:07
current word T and basically try to

00:16:03 --> 00:16:09
maximize here this probability of trying

00:16:07 --> 00:16:14
to be able to predict that word that is

00:16:08 --> 00:16:16
around the current word T and theta are

00:16:13 --> 00:16:18
all the parameters namely all the word

00:16:15 --> 00:16:20
vectors that we'd want to optimize so

00:16:17 --> 00:16:23
now how do we actually define this

00:16:19 --> 00:16:26
probability P here the simplest way to

00:16:22 --> 00:16:27
do this and this is not the actual way

00:16:25 --> 00:16:31
but it's the simplest and first to

00:16:26 --> 00:16:33
understand and derive this model is with

00:16:30 --> 00:16:35
is very simple inner product here and

00:16:32 --> 00:16:38
that's why we can't quite call a deep

00:16:34 --> 00:16:39
there's not going to be many layers of

00:16:37 --> 00:16:41
nonlinearities like we see in deep

00:16:38 --> 00:16:43
neural networks to be just a simple

00:16:40 --> 00:16:45
inner product and the higher debt in a

00:16:42 --> 00:16:50
product is the more likely these two

00:16:44 --> 00:16:53
will be predicting one another so here

00:16:49 --> 00:16:55
see the context is the dissenter word

00:16:52 --> 00:16:58
sorry oh is the outside word and

00:16:54 --> 00:17:00
basically this inner product the larger

00:16:57 --> 00:17:02
it is the more likely we were going to

00:16:59 --> 00:17:05
predict this and these are both just

00:17:01 --> 00:17:07
andard and dimensional vectors and now

00:17:04 --> 00:17:10
in order to get a real probability we'll

00:17:06 --> 00:17:12
essentially apply softmax to all the

00:17:09 --> 00:17:14
potential inner products that you might

00:17:11 --> 00:17:17
have in your vocabulary and one thing

00:17:13 --> 00:17:19
you will notice here is well this

00:17:16 --> 00:17:22
denominator is actually going to be a

00:17:18 --> 00:17:23
very large sum I will want to sum here

00:17:21 --> 00:17:25
overall potential inner products for

00:17:22 --> 00:17:28
every single window that would be true

00:17:24 --> 00:17:30
slow so now the real methods that we

00:17:27 --> 00:17:33
would use we're going to are going to

00:17:29 --> 00:17:36
approximate the sum in a variety of

00:17:32 --> 00:17:38
clever ways now I could literally talk

00:17:35 --> 00:17:39
to next hour and a half just about how

00:17:37 --> 00:17:42
to optimize the details of this equation

00:17:38 --> 00:17:44
but then we'll all deplete our mental

00:17:41 --> 00:17:46
energy for the rest of the day and so

00:17:43 --> 00:17:50
I'm just going to point you to the class

00:17:45 --> 00:17:53
I taught earlier this year so yes 24d we

00:17:49 --> 00:17:55
have lots of different slides that go

00:17:52 --> 00:17:56
into all the details of this equation

00:17:54 --> 00:17:58
how to approximate it and then how to

00:17:55 --> 00:18:00
ptimize it it's going to be very

00:17:57 --> 00:18:02
similar to the way we optimize any other

00:17:59 --> 00:18:04
neural network we're going to use

00:18:01 --> 00:18:06
stochastic gradient descent we're going

00:18:03 --> 00:18:09
to look at mini batches of a couple of

00:18:05 --> 00:18:10
hundred windows at a time and an update

00:18:08 --> 00:18:13
those word vectors and we're just going

00:18:09 --> 00:18:16
to take simple gradients of each of

00:18:12 --> 00:18:20
these vectors as we go through windows

00:18:15 --> 00:18:23
in a large corpus all right now we

00:18:19 --> 00:18:26
briefly mentioned PCA like methods and

00:18:22 --> 00:18:29
based on senior Lu decomposition often

00:18:25 --> 00:18:32
or standard a simple PCA now we also had

00:18:28 --> 00:18:34
this word Tyvek model there's actually

00:18:31 --> 00:18:37
one model that combines the best of both

00:18:33 --> 00:18:39
worlds namely glove or global vectors

00:18:36 --> 00:18:43
introduced by Geoffrey Pennington in

00:18:38 --> 00:18:44
2014 and it has a very similar idea and

00:18:42 --> 00:18:46
you'll notice here there's some

00:18:43 --> 00:18:49
similarity you have this inner product

00:18:45 --> 00:18:51
again for different pairs but this model

00:18:48 --> 00:18:53
will actually go over the Corcoran's

00:18:50 --> 00:18:54
matrix once you have this Corcoran's

00:18:52 --> 00:18:56
matrix it's much more efficient to try

00:18:53 --> 00:18:59
to predict once how often two words

00:18:55 --> 00:19:03
appear next to each other rather than do

00:18:58 --> 00:19:06
it 50 times each time that that pair

00:19:02 --> 00:19:07
appears in an actual corpus so in some

00:19:05 --> 00:19:10
sense you can be more efficiently going

00:19:06 --> 00:19:11
through all the current statistics and

00:19:09 --> 00:19:17
you're going to basically try to

00:19:10 --> 00:19:19
minimize the this this subtraction here

00:19:16 --> 00:19:21
and what that basically means is that

00:19:18 --> 00:19:23
each inner product will try to

00:19:20 --> 00:19:27
approximate the log probability of these

00:19:22 --> 00:19:30
two words actually co-occurring now you

00:19:26 --> 00:19:33
have this function here which

00:19:29 --> 00:19:36
essentially will allow us to not overly

00:19:32 --> 00:19:38
weight certain pairs that occur very

00:19:35 --> 00:19:40
frequently the for instance

00:19:37 --> 00:19:42
co-occurs with lots of different words

00:19:39 --> 00:19:45
and you want to basically lower the

00:19:41 --> 00:19:48
importance of all the words that Corker

00:19:44 --> 00:19:51
with that so you can train this very

00:19:47 --> 00:19:55
fast it scales to gigantic corpora in

00:19:50 --> 00:19:58
fact we train this on common crawl which

00:19:54 --> 00:20:00
is a really great data set of most of

00:19:57 --> 00:20:03
the internet it's many billions of

00:19:59 --> 00:20:03
tokens and it gets also very good

00:20:02 --> 00:20:05
performance

00:20:02 --> 00:20:08
on small corpora because it makes use

00:20:04 --> 00:20:09
very efficiently of these Corcoran

00:20:07 --> 00:20:12
statistics and that's essentially what

00:20:08 --> 00:20:14
words well word vectors are always

00:20:11 --> 00:20:17
capturing so if in one sentence you just

00:20:13 --> 00:20:19
want to remember every time you hear

00:20:16 --> 00:20:21
word vectors in deep learning one

00:20:18 --> 00:20:22
they're not quite deep even though we

00:20:20 --> 00:20:24
call them sort of step one of deep

00:20:21 --> 00:20:26
learning and to it they're really just

00:20:23 --> 00:20:28
capturing Corcoran's counts how often

00:20:25 --> 00:20:33
does a word appear in the context of

00:20:27 --> 00:20:35
other words so let's look at the some

00:20:32 --> 00:20:37
interesting results of these glove

00:20:34 --> 00:20:39
ctors here the first thing we do is

00:20:36 --> 00:20:42
look at nearest neighbors so now that we

00:20:38 --> 00:20:46
have these n dimensional vectors usually

00:20:41 --> 00:20:49
ou say n between 50 to at most 500 good

00:20:45 --> 00:20:51
general numbers 100 or 200 dimensional

00:20:48 --> 00:20:54
each of these each word is now

00:20:50 --> 00:20:56
represented as a single vector and so we

00:20:53 --> 00:20:59
can look in this vector space for words

00:20:55 --> 00:21:01
that appear close by we started and

00:20:58 --> 00:21:04
looked for the nearest neighbors of frog

00:21:00 --> 00:21:07
and well turned out

00:21:03 --> 00:21:08
hese are the nearest neighbors which

00:21:06 --> 00:21:10
was a little confusing since we're not

00:21:07 --> 00:21:12
biologists but fortunately when you

00:21:09 --> 00:21:15
actually look up in Google what what

00:21:11 --> 00:21:17
hose mean you'll see that they are

00:21:14 --> 00:21:19
actually all indeed different kinds of

00:21:16 --> 00:21:23
rogs some appear very rarely in the

00:21:18 --> 00:21:26
corpus and others like toad or much more

00:21:22 --> 00:21:28
frequent now one of the most exciting

00:21:25 --> 00:21:32
results that came out of word vectors

00:21:27 --> 00:21:36
actually these word analogies so the

00:21:31 --> 00:21:38
idea here is can linearly can there be

00:21:35 --> 00:21:40
relationships between different word

00:21:37 --> 00:21:42
vectors that simply fall out of very

00:21:39 --> 00:21:46
linear and simple addition and

00:21:41 --> 00:21:49
subtraction so the idea here is what is

00:21:45 --> 00:21:52
meant a woman equal to king to something

00:21:48 --> 00:21:59
else as in what is the right analogy

00:21:51 --> 00:22:01
when I try to basically fill in here the

00:21:58 --> 00:22:03
last missing word now the way we're

00:22:00 --> 00:22:07
going to do this is very very simple

00:22:02 --> 00:22:11
cosine similarity or basically just take

00:22:06 --> 00:22:15
let's take an example here the vector of

00:22:10 --> 00:22:17
woman we subtract the word vector we

00:22:14 --> 00:22:19
learned of man and we add

00:22:16 --> 00:22:23
the word vector of king and the

00:22:18 --> 00:22:26
resulting vector I the art max for this

00:22:22 --> 00:22:28
turns out to going to be Queen for a lot

00:22:25 --> 00:22:30
of these different models and that was

00:22:27 --> 00:22:33
very surprising again we're capturing

00:22:29 --> 00:22:35
core current statistics so man might in

00:22:32 --> 00:22:38
its context often have things like

00:22:34 --> 00:22:42
running and fighting other silly things

00:22:37 --> 00:22:44
that men do and then you subtract those

00:22:41 --> 00:22:46
kinds of words from the context and you

00:22:43 --> 00:22:48
add them again and in some sense it's

00:22:45 --> 00:22:50
intuitive though surprising that it

00:22:47 --> 00:22:54
works out that well for so many

00:22:49 --> 00:22:57
different examples so here are some some

00:22:53 --> 00:22:59
other examples similar to the king and

00:22:56 --> 00:23:01
queen example where we basically took

00:22:58 --> 00:23:02
these two hundred dimensional vectors

00:23:00 --> 00:23:04
and we projected them down to two

00:23:01 --> 00:23:08
dimensions again with a very simple

00:23:03 --> 00:23:10
method like PCA and what we find is

00:23:07 --> 00:23:12
actually quite interestingly even in

00:23:09 --> 00:23:14
just the two first principal components

00:23:11 --> 00:23:16
of this space we have some very

00:23:13 --> 00:23:19
interesting sort of female male

00:23:15 --> 00:23:22
relationships so men to women is similar

00:23:18 --> 00:23:26
to uncle and aunt brother and sister sir

00:23:21 --> 00:23:28
and madam and so on so this is an

00:23:25 --> 00:23:31
interesting semantic relationship that

00:23:27 --> 00:23:34
falls out of essentially Corcoran's

00:23:30 --> 00:23:37
counts in specific windows around each

00:23:33 --> 00:23:39
word and a large corpus here's another

00:23:36 --> 00:23:41
one that's more of a syntactic

00:23:38 --> 00:23:44
relationship we actually have here

00:23:40 --> 00:23:47
superlatives like slow slower slowest is

00:23:43 --> 00:23:50
in a similar vector relationship to

00:23:46 --> 00:23:53
short shorter and shortest or strong

00:23:49 --> 00:23:55
er and strongest so this was very

00:23:52 --> 00:23:58
exciting and of course when you see an

00:23:54 --> 00:24:01
interesting qualitative result you want

00:23:57 --> 00:24:03
o try to quantify who can do better in

00:24:00 --> 00:24:05
trying to understand these analogies and

00:24:02 --> 00:24:08
what are the different modes and hyper

00:24:04 --> 00:24:10
parameters that modify the performance

00:24:07 --> 00:24:12
now this is something that you will

00:24:09 --> 00:24:14
notice in pretty much every deep

00:24:11 --> 00:24:16
learning project ever which is more data

00:24:13 --> 00:24:18
will give you better performance it's

00:24:15 --> 00:24:19
probably the single most useful thing

00:24:17 --> 00:24:21
you can do to machine learning or deep

00:24:18 --> 00:24:24
learning system is to train it with more

00:24:20 --> 00:24:26
data and we found that too now they're

00:24:23 --> 00:24:28
different vector sizes too which is a

00:24:25 --> 00:24:30
common hyper parameter like I said

00:24:27 --> 00:24:32
usually between 52 and

00:24:29 --> 00:24:35
so I wondered here we have 300

00:24:31 --> 00:24:37
dimensional that essentially gave us the

00:24:34 --> 00:24:39
best performance for these different

00:24:36 --> 00:24:43
kinds of semantics and tactic

00:24:38 --> 00:24:45
relationships now in many ways having a

00:24:42 --> 00:24:47
single vector for words can be

00:24:44 --> 00:24:49
oversimplifying right some words have

00:24:46 --> 00:24:52
multiple meanings maybe they should have

00:24:48 --> 00:24:57
multiple vectors sometimes the word

00:24:51 --> 00:24:59
meaning changes overtime and so on so

00:24:56 --> 00:25:02
there's a lot of simplifying assumptions

00:24:58 --> 00:25:04
here but again our final goal for deep

00:25:01 --> 00:25:07
NLP is going to be to create useful

00:25:03 --> 00:25:09
systems and it turns out this is a

00:25:06 --> 00:25:13
useful first step to create such systems

00:25:08 --> 00:25:17
that mimic some human language behavior

00:25:12 --> 00:25:19
in order to create useful applications

00:25:16 --> 00:25:21
for us all right but words word vectors

00:25:18 --> 00:25:23
are very useful but words of course

00:25:20 --> 00:25:25
never appear in isolation and what we

00:25:22 --> 00:25:27
really want to do is understand words in

00:25:24 --> 00:25:30
their context and so this leads us to

00:25:26 --> 00:25:34
the second section here on recurrent

00:25:29 --> 00:25:37
neural networks so we already went over

00:25:33 --> 00:25:40
the basic definition of standard neural

00:25:36 --> 00:25:42
networks really the main difference

00:25:39 --> 00:25:44
between a standard neural network and a

00:25:41 --> 00:25:46
recurrent neural network which I'll

00:25:43 --> 00:25:49
abbreviate as RN and now is that we will

00:25:45 --> 00:25:51
tie the weights at each time step and

00:25:48 --> 00:25:53
that will allow us to essentially

00:25:50 --> 00:25:55
condition the neural network on all the

00:25:52 --> 00:25:57
previous words in theory and practice

00:25:54 --> 00:25:59
how we can optimize it it won't be

00:25:56 --> 00:26:02
really all the previous words we've more

00:25:58 --> 00:26:05
like at most the last 30 words but in

00:26:01 --> 00:26:08
theory this is what a powerful model can

00:26:04 --> 00:26:09
do so let's look at the definition of a

00:26:07 --> 00:26:11
recurrent neural network and this is

00:26:08 --> 00:26:13
going to be a very important definition

00:26:10 --> 00:26:16
so we'll go into a little bit of details

00:26:12 --> 00:26:18
here so let's assume for now we have our

00:26:15 --> 00:26:20
word vectors as given and we'll

00:26:17 --> 00:26:23
represent each sequence in the beginning

00:26:19 --> 00:26:25
it's just a list of these word vectors

00:26:22 --> 00:26:28
now what we're going to do is we're

00:26:24 --> 00:26:30
computing a hidden state HT at each time

00:26:27 --> 00:26:32
step and the way we're going to do this

00:26:29 --> 00:26:36
with a simple neural network

00:26:32 --> 00:26:39
architecture in fact you can think of

00:26:35 --> 00:26:42
this summation here is really just a

00:26:38 --> 00:26:44
single layer neural network if you were

00:26:41 --> 00:26:44
to concatenate the two matrices in these

00:26:43 --> 00:26:48
two that

00:26:43 --> 00:26:50
but intuitively we basically will map

00:26:47 --> 00:26:53
our current word vector at that time

00:26:49 --> 00:26:55
step T sometimes I use these square

00:26:52 --> 00:26:59
brackets to denote that we're taking the

00:26:54 --> 00:27:01
word vector from that time step in there

00:26:58 --> 00:27:05
we map that with a linear layer a simple

00:27:00 --> 00:27:07
matrix vector product and we sum up some

00:27:04 --> 00:27:09
that matrix vector product to another

00:27:06 --> 00:27:11
matrix vector product of the previous

00:27:08 --> 00:27:15
hidden state at the previous time step

00:27:10 --> 00:27:18
we sum those two and reapply in one case

00:27:14 --> 00:27:21
a simple sigmoid function to define this

00:27:17 --> 00:27:23
tandard neural network layer that will

00:27:20 --> 00:27:25
be HT and now at each time step we want

00:27:22 --> 00:27:29
o predict some kind of class

00:27:24 --> 00:27:31
probability over a set of potential

00:27:28 --> 00:27:34
events classes words and so on and we

00:27:30 --> 00:27:35
use the standard softmax classifier some

00:27:33 --> 00:27:42
other communities called logistic

00:27:34 --> 00:27:47
regression classifier so here we have a

00:27:41 --> 00:27:50
simple matrix WS for the softmax weights

00:27:46 --> 00:27:51
we have basically a number of rows are

00:27:49 --> 00:27:54
going to be a number of classes that we

00:27:50 --> 00:27:59
have and the number of columns is the

00:27:53 --> 00:28:01
same as the hidden dimension sometimes

00:27:58 --> 00:28:04
we want to predict the next word in a

00:28:00 --> 00:28:07
sequence in order to be able to identify

00:28:03 --> 00:28:09
the most likely sequence so for instance

00:28:06 --> 00:28:12
if I asked for a speech recognition

00:28:08 --> 00:28:15
system what is the price of wood now in

00:28:11 --> 00:28:18
isolation if you hear wood you would

00:28:14 --> 00:28:20
probably assume it's the wo uld

00:28:17 --> 00:28:22
auxiliary verb wood but in this

00:28:19 --> 00:28:23
particular context the price of it

00:28:21 --> 00:28:25
wouldn't make sense to have a verb

00:28:22 --> 00:28:29
following that and so it's more like the

00:28:25 --> 00:28:32
wo D to find the price of wood so

00:28:28 --> 00:28:34
language modeling is very useful task

00:28:31 --> 00:28:37
and it's also very instructive to use as

00:28:33 --> 00:28:41
an example for where recurrent neural

00:28:36 --> 00:28:43
networks refine so in our case here this

00:28:40 --> 00:28:44
oftmax is going to be quite a large

00:28:42 --> 00:28:47
matrix that goes over the entire

00:28:43 --> 00:28:50
vocabulary of all the possible words

00:28:46 --> 00:28:53
that we have so each word is going to be

00:28:49 --> 00:28:55
our class the classes for language

00:28:52 --> 00:28:58
models are the words in our vocabulary

00:28:54 --> 00:29:02
and so we can define here

00:28:57 --> 00:29:05
this y hat T the jf1 is basically

00:29:01 --> 00:29:08
denoting here the probability that the J

00:29:04 --> 00:29:11
word at the J index will come next after

00:29:07 --> 00:29:13
all the previous words very useful model

00:29:10 --> 00:29:16
again for speech recognition for machine

00:29:12 --> 00:29:20
translation for just finding a prior for

00:29:15 --> 00:29:23
language in general alright

00:29:19 --> 00:29:24
again main difference the standard

00:29:22 --> 00:29:26
neural networks we just have the same

00:29:23 --> 00:29:29
set of W weights at all the different

00:29:25 --> 00:29:32
ime steps everything else is pretty

00:29:28 --> 00:29:37
much a standard neural network we often

00:29:31 --> 00:29:41
initialize the first h0 here just either

00:29:36 --> 00:29:44
andomly or all zeroes and again in

00:29:40 --> 00:29:47
language modeling in particular the next

00:29:43 --> 00:29:50
word is our class of the softmax now we

00:29:46 --> 00:29:53
can measure basically the performance of

00:29:49 --> 00:29:56
language models with terms are called

00:29:52 --> 00:29:59
perplexity which really is here the

00:29:55 --> 00:30:01
average log likelihood of the basically

00:29:58 --> 00:30:04
the probabilities of being able to

00:30:00 --> 00:30:06
predict the next word so you want to

00:30:03 --> 00:30:07
really give the highest probability to

00:30:05 --> 00:30:11
the word that actually will appear next

00:30:06 --> 00:30:14
in a long sequence and then the higher

00:30:10 --> 00:30:15
that probability is the lower your

00:30:13 --> 00:30:19
perplexity in hence the models less

00:30:14 --> 00:30:21
perplexed to see the next word in some

00:30:18 --> 00:30:24
sense you can think of language modeling

00:30:20 --> 00:30:28
as almost NLP complete and some silly

00:30:23 --> 00:30:29
sense that you just if you can actually

00:30:27 --> 00:30:32
predict every single word that follows

00:30:28 --> 00:30:35
after any arbitrary sequence of words in

00:30:31 --> 00:30:37
a perfect way you would have

00:30:34 --> 00:30:39
disambiguated a lot of things you can

00:30:36 --> 00:30:41
say for instance what is the

00:30:38 --> 00:30:43
answer to the following question ask the

00:30:40 --> 00:30:44
question and then the next couple of

00:30:42 --> 00:30:46
words would be the predicted answer so

00:30:43 --> 00:30:49
there's no way we can actually ever do

00:30:45 --> 00:30:51
perfect job in language modeling but

00:30:48 --> 00:30:53
here's certain contexts where we can

00:30:50 --> 00:30:57
give a very high probability to the

00:30:52 --> 00:30:58
right next couple of words now this is

00:30:56 --> 00:31:01
the standard recurrent neural network

00:30:58 --> 00:31:03
and one problem with this is that we

00:31:00 --> 00:31:06
will modify the hidden state here at

00:31:02 --> 00:31:09
every time set so even if I have words

00:31:05 --> 00:31:11
like the and a and sentence period and

00:31:08 --> 00:31:15
things like that it will stick

00:31:10 --> 00:31:17
frequently modify in my hidden state now

00:31:14 --> 00:31:19
that can be problematic let's say for

00:31:16 --> 00:31:22
instance I want to train a sentiment

00:31:18 --> 00:31:24
analysis algorithm and I talk about

00:31:21 --> 00:31:27
movies and I talk about the plot for a

00:31:23 --> 00:31:29
very long time then I say oh man this

00:31:26 --> 00:31:31
movie was really wonderful it's great to

00:31:28 --> 00:31:33
watch and then especially the ending and

00:31:30 --> 00:31:35
you talk again for like fifty timesteps

00:31:32 --> 00:31:36
or 50 words or hundred words about the

00:31:34 --> 00:31:38
plot

00:31:35 --> 00:31:40
now all these plot words will

00:31:37 --> 00:31:42
essentially modify my hidden states if

00:31:39 --> 00:31:43
at the end of that whole sequence I want

00:31:41 --> 00:31:45
o classify the sentiment the word

00:31:42 --> 00:31:46
wonderful and great that I mentioned

00:31:44 --> 00:31:49
somewhere in the middle might be

00:31:45 --> 00:31:52
completely gone because I keep updating

00:31:48 --> 00:31:56
my hidden state with all these content

00:31:51 --> 00:31:59
words to talk about the plot now the way

00:31:55 --> 00:32:02
to improve this is by use better kinds

00:31:58 --> 00:32:06
of recurrent units and I'll introduce

00:32:01 --> 00:32:09
here a particular kind so called gated

00:32:05 --> 00:32:11
recurrent units introduced by Cho in

00:32:08 --> 00:32:15
some sense and we'll learn more about

00:32:10 --> 00:32:17
he LS TM tomorrow when Kwok gives his

00:32:14 --> 00:32:20
lecture but G R user in some sense a

00:32:16 --> 00:32:22
special case of LS DMS and the main idea

00:32:19 --> 00:32:25
is that we want to have the ability to

00:32:21 --> 00:32:28
keep certain memories around without

00:32:24 --> 00:32:30
having the current input modify modify

00:32:27 --> 00:32:32
them at all so again this example of

00:32:29 --> 00:32:34
sentiment analysis I say something's

00:32:31 --> 00:32:36
great that should somehow be captured in

00:32:33 --> 00:32:37
my hidden state and I don't want all the

00:32:35 --> 00:32:40
content words to talk about the plot in

00:32:37 --> 00:32:42
a movie review to modify that is

00:32:39 --> 00:32:45
actually overall I was a great movie and

00:32:41 --> 00:32:47
then we also want to allow error

00:32:44 --> 00:32:49
messages to flow at different strengths

00:32:46 --> 00:32:52
depending on the input so if I say great

00:32:48 --> 00:32:56
I want that to modify a lot of things in

00:32:51 --> 00:32:58
the past so let's define a giryu

00:32:55 --> 00:33:00
fortunately since you already know the

00:32:57 --> 00:33:02
basic Lego block of a standard neural

00:32:59 --> 00:33:06
network there's only really one or two

00:33:01 --> 00:33:08
subtleties here that are different there

00:33:05 --> 00:33:11
are a couple of different steps that

00:33:07 --> 00:33:13
we'll need to compute at every time step

00:33:10 --> 00:33:15
so in the standard RNN

00:33:12 --> 00:33:17
what we did was just have this one

00:33:14 --> 00:33:18
single neural network that we hope would

00:33:16 --> 00:33:21
capture all this complexity of the

00:33:17 --> 00:33:24
sequence instead now we'll first compute

00:33:20 --> 00:33:25
a couple of gates at that time step so

00:33:23 --> 00:33:27
the first thing will

00:33:24 --> 00:33:29
compute is the so called update gate

00:33:26 --> 00:33:31
it's just yet another neural network

00:33:28 --> 00:33:33
layer based on the current input word

00:33:30 --> 00:33:36
vector and again the past hidden state

00:33:32 --> 00:33:38
so these look quite familiar but this

00:33:35 --> 00:33:40
will just be an intermediate value and

00:33:37 --> 00:33:43
we'll call it the update gate then we'll

00:33:39 --> 00:33:46
also compute a reset gate is yet another

00:33:42 --> 00:33:48
standard neural network layer again just

00:33:45 --> 00:33:50
matrix vector product summation matrix

00:33:47 --> 00:33:52
vector product some kind of

00:33:49 --> 00:33:54
non-linearity here namely Sigma it's

00:33:51 --> 00:33:57
actually important in this case that it

00:33:53 --> 00:33:59
is a sigmoid just just basically both of

00:33:56 --> 00:34:03
these will be vectors with numbers that

00:33:58 --> 00:34:06
are between 0 and 1 now we'll compute a

00:34:02 --> 00:34:09
new memory content an intermediate age

00:34:05 --> 00:34:12
tilt here with yet another neural

00:34:08 --> 00:34:14
network but then we have this little

00:34:11 --> 00:34:18
funky symbol in here basically this will

00:34:13 --> 00:34:20
be an element-wise multiplication so

00:34:17 --> 00:34:23
basically what this will allow us to do

00:34:19 --> 00:34:25
is if that reset gate is 0 we can

00:34:22 --> 00:34:30
essentially ignore all the previous

00:34:24 --> 00:34:32
memory elements and only store the new

00:34:29 --> 00:34:36
ord information so for instance if I

00:34:31 --> 00:34:38
talked for a long time about the plot

00:34:35 --> 00:34:40
now I say this was an awesome movie now

00:34:37 --> 00:34:43
you want to basically be able to ignore

00:34:39 --> 00:34:44
if your whole goal of this sequence

00:34:42 --> 00:34:46
classification model is to capture

00:34:43 --> 00:34:49
sentiment I'm going to be able to ignore

00:34:45 --> 00:34:52
past content this is of course if this

00:34:48 --> 00:34:54
was a 0 entirely a 0 vector now this

00:34:51 --> 00:34:55
will be more subtle this is a long

00:34:53 --> 00:34:58
vector if you know maybe a hundred or

00:34:54 --> 00:35:00
200 dimensions so maybe some dimensions

00:34:57 --> 00:35:04
hould be reset but others maybe not

00:34:59 --> 00:35:06
and then here we'll have our finally

00:35:03 --> 00:35:09
final memory and that essentially

00:35:05 --> 00:35:12
combines these two states the previous

00:35:08 --> 00:35:14
hidden state and this intermediate one

00:35:11 --> 00:35:16
at our current time step and what this

00:35:13 --> 00:35:17
will allow us to do is essentially also

00:35:15 --> 00:35:18
say well maybe we want to ignore

00:35:16 --> 00:35:23
verything that's currently happening

00:35:17 --> 00:35:25
and only update the last time step we

00:35:22 --> 00:35:27
basically copy over the previous time

00:35:24 --> 00:35:30
step in the hidden state of that and

00:35:26 --> 00:35:32
ignore the current thing again simple

00:35:29 --> 00:35:34
xample in sentiment maybe there's a lot

00:35:31 --> 00:35:36
of talk about the plot when a movie was

00:35:33 --> 00:35:37
released if you want to basically have

00:35:35 --> 00:35:39
the ability to ignore that and just copy

00:35:36 --> 00:35:41
that in the beginning

00:35:38 --> 00:35:42
may have said it was an awesome movie so

00:35:40 --> 00:35:44
here's an attempt at a clean

00:35:41 --> 00:35:46
illustration I have to say personally I

00:35:43 --> 00:35:48
in the end find the equations a little

00:35:45 --> 00:35:51
more intuitive than the visualizations

00:35:47 --> 00:35:53
that we try to do but some people are

00:35:50 --> 00:35:56
more visual here so this is in some

00:35:52 --> 00:35:58
ways basically here we have our word

00:35:55 --> 00:35:59
vector and it goes through different

00:35:57 --> 00:36:04
layers and then some of these layers

00:35:58 --> 00:36:08
will essentially modify other outputs of

00:36:03 --> 00:36:11
previous time steps so this is a pretty

00:36:07 --> 00:36:15
nifty model and it's read the second

00:36:10 --> 00:36:19
most important basic Lego block that

00:36:14 --> 00:36:21
we're going to learn about today and so

00:36:18 --> 00:36:23
just want to make sure we take a little

00:36:20 --> 00:36:27
bit of time I'll repeat this here again

00:36:22 --> 00:36:30
if the reset gate this R value is close

00:36:26 --> 00:36:34
to zero those kinds of hidden dimensions

00:36:29 --> 00:36:39
are basically allowed to be dropped and

00:36:33 --> 00:36:42
if the update gates Z basically is one

00:36:38 --> 00:36:44
then we can copy information in of that

00:36:41 --> 00:36:46
unit through many many different time

00:36:43 --> 00:36:49
steps and if you think about

00:36:45 --> 00:36:50
optimization a lot what this will also

00:36:48 --> 00:36:52
mean is that the gradient can flow

00:36:49 --> 00:36:55
through the recurrent wheel network

00:36:51 --> 00:36:56
through multiple time steps until it

00:36:54 --> 00:36:59
actually matters and you want to update

00:36:55 --> 00:37:01
a specific word for instance and go all

00:36:58 --> 00:37:03
the way through many different time

00:37:00 --> 00:37:03
steps

00:37:03 --> 00:37:09
o then what this also allows us is to

00:37:05 --> 00:37:13
actually have some units that have

00:37:08 --> 00:37:15
different update frequencies some you

00:37:12 --> 00:37:17
might want to reset every other word

00:37:14 --> 00:37:19
other ones you might really cap like

00:37:16 --> 00:37:21
they have some long-term context and

00:37:18 --> 00:37:26
they stay around for much longer

00:37:20 --> 00:37:28
all right this is the geo you it's the

00:37:25 --> 00:37:30
second most important building block for

00:37:27 --> 00:37:33
today there are like I said a lot of

00:37:29 --> 00:37:36
other variants of recurrent neural

00:37:32 --> 00:37:38
networks lots of amazing work in that

00:37:35 --> 00:37:40
space right now and tomorrow quoc will

00:37:37 --> 00:37:43
we'll talk a lot about some more

00:37:39 --> 00:37:48
advanced methods so now that you've

00:37:43 --> 00:37:50
understand word vectors and neural

00:37:47 --> 00:37:52
network sequence models you really have

00:37:49 --> 00:37:53
the two most important concepts for deep

00:37:51 --> 00:37:57
NLP

00:37:52 --> 00:38:00
and that's pretty awesome so congrats we

00:37:56 --> 00:38:02
can now in some ways really play around

00:37:59 --> 00:38:04
with those two Lego blocks plus some

00:38:01 --> 00:38:07
slight modifications of them very

00:38:03 --> 00:38:08
creatively and build a lot of really

00:38:06 --> 00:38:10
cool models a lot of the models that

00:38:07 --> 00:38:13
I'll show you and that you can read and

00:38:09 --> 00:38:14
see and read the latest papers that are

00:38:12 --> 00:38:18
now coming out almost every week on

00:38:13 --> 00:38:19
archive will have some kind of component

00:38:17 --> 00:38:23
of these will use really these two

00:38:18 --> 00:38:26
components in a major way now this is

00:38:22 --> 00:38:30
one of the few slides now with something

00:38:25 --> 00:38:31
really new because I want to keep it

00:38:29 --> 00:38:32
exciting for the people who already knew

00:38:30 --> 00:38:33
all this stuff and took the class and

00:38:31 --> 00:38:37
everything

00:38:32 --> 00:38:39
this is tackling a important problem

00:38:36 --> 00:38:42
which is and all these models that

00:38:38 --> 00:38:45
you'll see in pretty much most of these

00:38:41 --> 00:38:48
papers we have in the end one final

00:38:44 --> 00:38:51
softmax here right and that softmax is

00:38:47 --> 00:38:53
basically our default way of classifying

00:38:50 --> 00:38:56
what we can see next what kinds of

00:38:52 --> 00:38:57
classes we can predict the problem with

00:38:55 --> 00:38:59
at is of course that that will only

00:38:56 --> 00:39:02
ever predict accurately frequently seen

00:38:58 --> 00:39:04
classes that we had at training time but

00:39:01 --> 00:39:06
in the case of language modeling for

00:39:03 --> 00:39:09
instance where our classes are the words

00:39:05 --> 00:39:10
we may see a test time some completely

00:39:08 --> 00:39:14
new words maybe I'm just going to

00:39:10 --> 00:39:18
introduce to you a new name srini for

00:39:13 --> 00:39:20
instance and nobody may have like seen

00:39:17 --> 00:39:22
that word at training time but now that

00:39:19 --> 00:39:25
I mentioned him and I will introduce him

00:39:21 --> 00:39:28
to you you should be able to predict the

00:39:24 --> 00:39:30
word trini and that person in a new

00:39:27 --> 00:39:32
context and so the solution that we're

00:39:29 --> 00:39:32
literally going to release only next

00:39:31 --> 00:39:35
week

00:39:31 --> 00:39:37
and in a new paper is to essentially

00:39:34 --> 00:39:40
combine the standard softmax that we can

00:39:36 --> 00:39:42
train with a pointer component and that

00:39:39 --> 00:39:45
pointer component will allow us to point

00:39:41 --> 00:39:48
o previous contexts and then predict

00:39:44 --> 00:39:49
based on that to see that word so let's

00:39:47 --> 00:39:52
for instance take the example you have

00:39:48 --> 00:39:55
language modeling again we may read a

00:39:51 --> 00:39:58
long article about the Fed chair Janet

00:39:54 --> 00:40:01
Yellen and maybe the word Yellen had not

00:39:58 --> 00:40:03
appeared in training time before so we

00:40:00 --> 00:40:04
couldn't ever predict it even though we

00:40:02 --> 00:40:07
just learned about it and now a couple

00:40:04 --> 00:40:09
of sentences later interest rates were

00:40:06 --> 00:40:12
based and then missus and now we want to

00:40:08 --> 00:40:15
predict that next word now if that

00:40:11 --> 00:40:17
hadn't appeared in our softmax standard

00:40:14 --> 00:40:20
training procedure at training time we

00:40:16 --> 00:40:21
would never be able to predict it what

00:40:19 --> 00:40:23
his model will do and we're kind of

00:40:20 --> 00:40:25
calling it a pointer sentinel mixture

00:40:22 --> 00:40:28
model is it will essentially first try

00:40:24 --> 00:40:31
to see what any of these previous words

00:40:27 --> 00:40:32
maybe be the right candidate so we can

00:40:30 --> 00:40:34
really take into consideration the

00:40:31 --> 00:40:36
previous context of say the last hundred

00:40:33 --> 00:40:38
words and if we see that word and that

00:40:35 --> 00:40:41
word makes sense after you know we train

00:40:37 --> 00:40:43
it of course then we might give a lot of

00:40:40 --> 00:40:45
probability mass to just that word at

00:40:42 --> 00:40:50
his current position in our previous

00:40:44 --> 00:40:51
immediate context at test time and then

00:40:49 --> 00:40:53
we have also the sentinel which is

00:40:50 --> 00:40:56
basically going to be the rest of the

00:40:52 --> 00:40:59
probability if we cannot refer to the

00:40:55 --> 00:41:01
some of the words that we just saw and

00:40:58 --> 00:41:04
that one will go directly to our

00:41:00 --> 00:41:06
standard softmax and then what we'll

00:41:03 --> 00:41:10
essentially have is a mixture model that

00:41:05 --> 00:41:11
allows us to say either we have or we

00:41:09 --> 00:41:13
have a combination of both of

00:41:10 --> 00:41:15
essentially words that just appeared in

00:41:12 --> 00:41:18
this context and words that we saw in

00:41:14 --> 00:41:21
our standard softmax language modeling

00:41:17 --> 00:41:23
system so I think this is a pretty

00:41:20 --> 00:41:25
important next step because it will

00:41:22 --> 00:41:27
allow us to predict things we've never

00:41:24 --> 00:41:28
seen a training time and that's

00:41:26 --> 00:41:31
omething that's clearly a human

00:41:27 --> 00:41:33
capability that most or pretty much none

00:41:30 --> 00:41:36
of these language models had before and

00:41:32 --> 00:41:38
so to look at how much it actually helps

00:41:35 --> 00:41:41
it'll be interesting to look at some of

00:41:37 --> 00:41:43
the performance before so again what

00:41:40 --> 00:41:45
we're measuring here is perplexity and

00:41:42 --> 00:41:49
the lower the better because it's

00:41:44 --> 00:41:51
essentially inverse here of the actual

00:41:48 --> 00:41:55
probability that we assigned to the

00:41:50 --> 00:41:58
correct next word and in just 2010 so

00:41:54 --> 00:42:00
six years ago there this was some great

00:41:57 --> 00:42:03
work early work by Thomas McAuliffe

00:41:59 --> 00:42:05
where he compared to a lot of standard

00:42:02 --> 00:42:09
natural language processing methods

00:42:04 --> 00:42:11
yntactic neural net syntactic models

00:42:08 --> 00:42:13
that essentially tried to predict the

00:42:10 --> 00:42:16
next word and had a perplexity of 107

00:42:13 --> 00:42:19
and he was able to use the standard

00:42:15 --> 00:42:20
recurrent neural networks and actually

00:42:18 --> 00:42:23
an ensemble of eight of them

00:42:19 --> 00:42:24
to really significantly push down the

00:42:22 --> 00:42:28
perplexity especially when you combine

00:42:23 --> 00:42:32
it with standard count based methods for

00:42:27 --> 00:42:35
language modeling so in 2010 he made

00:42:31 --> 00:42:37
great progress by pushing it down to 87

00:42:34 --> 00:42:40
and now this is one of the great

00:42:36 --> 00:42:41
examples of how much progress is being

00:42:39 --> 00:42:45
made in the field thanks to deep

00:42:40 --> 00:42:48
learning we're two years ago white

00:42:44 --> 00:42:50
chicks are memba and and his

00:42:47 --> 00:42:53
collaborators were able to push that

00:42:49 --> 00:42:56
down even further to 78 with a very

00:42:52 --> 00:42:59
large lsdm similar to a GRU like model

00:42:55 --> 00:43:02
but even more advanced quark will will

00:42:58 --> 00:43:05
teach you the basics of LS CMS tomorrow

00:43:01 --> 00:43:07
then last year we pushed the the

00:43:04 --> 00:43:11
performance was pushed down even further

00:43:06 --> 00:43:14
by yarn gull and then this one actually

00:43:10 --> 00:43:16
came out just a couple of weeks ago

00:43:13 --> 00:43:18
variational recurrent highway networks

00:43:15 --> 00:43:20
pushed it down even further but this

00:43:17 --> 00:43:23
pointer sentiment model is able to get

00:43:19 --> 00:43:26
it down to 70 so in just a short amount

00:43:22 --> 00:43:29
of time we pushed it down by more than

00:43:25 --> 00:43:33
10 perplexity points and in two years

00:43:28 --> 00:43:34
and that is really an increased speed in

00:43:32 --> 00:43:36
performance that we're seeing now that

00:43:33 --> 00:43:40
deep learning so if changing a lot of

00:43:35 --> 00:43:43
areas of natural language processing

00:43:39 --> 00:43:46
alright now we have sort of our basic

00:43:42 --> 00:43:49
Lego blocks the word vectors and the GRU

00:43:45 --> 00:43:51
sequence models and now we can talk a

00:43:48 --> 00:43:55
little bit about some of the ongoing

00:43:50 --> 00:43:57
research that we're working on and I'll

00:43:54 --> 00:44:00
start that with maybe a controversial

00:43:56 --> 00:44:04
question which is could we possibly

00:43:59 --> 00:44:06
reduce all NLP tasks to essentially

00:44:03 --> 00:44:08
question answering tasks over some kind

00:44:05 --> 00:44:11
of input and in some ways that's a

00:44:07 --> 00:44:13
trivial observation that you could do

00:44:10 --> 00:44:16
that but it actually might help us to

00:44:12 --> 00:44:19
think of models that could take any kind

00:44:15 --> 00:44:23
of input a question about that input and

00:44:18 --> 00:44:25
try to produce an output sequence so let

00:44:22 --> 00:44:29
me give you a couple of examples of what

00:44:24 --> 00:44:31
I mean by this so here we have the first

00:44:28 --> 00:44:33
one is a task that we would standardly

00:44:30 --> 00:44:34
associate with

00:44:32 --> 00:44:36
answering I'll give you a couple of

00:44:33 --> 00:44:38
acts Mary walk to the bathroom

00:44:35 --> 00:44:40
send her went to the garden Daniel went

00:44:37 --> 00:44:43
back to the garden Sandra took the milk

00:44:39 --> 00:44:45
there where's the milk and now you might

00:44:42 --> 00:44:49
have to logically reason so I try to

00:44:44 --> 00:44:52
find the sentence about milk

00:44:48 --> 00:44:53
maybe Sandra took the milk there and I

00:44:51 --> 00:44:56
would have to maybe do an F for a

00:44:52 --> 00:44:59
resolution find out what does there

00:44:55 --> 00:45:00
fer to and then you try to find you

00:44:58 --> 00:45:03
know the previous sentence that

00:44:59 --> 00:45:05
mentioned Sandra see that it's garden

00:45:02 --> 00:45:07
and then give an answer garden so this

00:45:04 --> 00:45:10
a simple logical reasoning question

00:45:06 --> 00:45:12
answering task and that's what most

00:45:09 --> 00:45:14
people in the QA field sort of

00:45:11 --> 00:45:17
associated with some kinds of question

00:45:13 --> 00:45:19
answers but we can also say everybody's

00:45:16 --> 00:45:22
happy and the question is what's the

00:45:18 --> 00:45:24
sentiment and the answer is positive all

00:45:21 --> 00:45:27
right so this is a different subfield of

00:45:23 --> 00:45:30
NLP that tackles sentiment analysis we

00:45:26 --> 00:45:32
can go further and ask what are the

00:45:29 --> 00:45:34
named entities of a sentence like Jane

00:45:31 --> 00:45:35
has a baby in Dresden and you want to

00:45:33 --> 00:45:37
find out that Jane is a person in

00:45:34 --> 00:45:41
Dresden as a location this is an example

00:45:36 --> 00:45:43
of sequence tagging you can even go as

00:45:40 --> 00:45:45
far and say you know I think the smile

00:45:42 --> 00:45:49
is incredible and the question is what's

00:45:44 --> 00:45:51
the translation into French and you get

00:45:48 --> 00:45:55
you know Japan's kusuma del a on clay

00:45:50 --> 00:45:58
habla and dad in some ways would be

00:45:54 --> 00:46:01
phenomenal if we're able to actually

00:45:57 --> 00:46:04
tackle all these different kinds of

00:46:00 --> 00:46:06
tasks with the same kind of model so

00:46:03 --> 00:46:11
maybe it would be an interesting new

00:46:05 --> 00:46:13
goal for NLP to try to develop a single

00:46:10 --> 00:46:17
joint model for general question

00:46:12 --> 00:46:20
answering I think it would push us to

00:46:16 --> 00:46:23
think about new kinds of sequence models

00:46:19 --> 00:46:25
and new kinds of reasoning capabilities

00:46:22 --> 00:46:27
in an interesting way now there are two

00:46:24 --> 00:46:30
major obstacles to actually achieving

00:46:26 --> 00:46:32
the single joint model for arbitrary QA

00:46:29 --> 00:46:34
tests the first one is that we don't

00:46:31 --> 00:46:36
even have a single model architecture

00:46:33 --> 00:46:39
that gets consistent state-of-the-art

00:46:35 --> 00:46:41
results across a variety of different

00:46:38 --> 00:46:44
asks so for instance for question

00:46:40 --> 00:46:46
answering and this is a data set called

00:46:43 --> 00:46:48
Bobby did face book published

00:46:45 --> 00:46:50
last year strongly supervised memory

00:46:47 --> 00:46:54
networks get the state of the art for

00:46:49 --> 00:46:58
sentiment analysis you had tree lsdm

00:46:53 --> 00:47:01
odels developed by cashing ty here at

00:46:57 --> 00:47:02
Stanford last year and for part of

00:47:00 --> 00:47:04
speech tagging you might have

00:47:01 --> 00:47:07
bi-directional lsdm conditional random

00:47:03 --> 00:47:09
fields one thing you do notice is all

00:47:06 --> 00:47:11
the current state-of-the-art methods are

00:47:08 --> 00:47:14
deep learning sometimes they still

00:47:10 --> 00:47:16
connect to other traditional methods

00:47:13 --> 00:47:18
like conditional random fields and

00:47:15 --> 00:47:20
undirected graphical models but there's

00:47:17 --> 00:47:24
always some some kind of deep learning

00:47:19 --> 00:47:28
component in them so that is the first

00:47:23 --> 00:47:30
obstacle the second one is that really

00:47:27 --> 00:47:34
fully joint multitask learning is very

00:47:29 --> 00:47:36
hard usually when we do do it we

00:47:33 --> 00:47:38
restrict it to lower layers so for

00:47:35 --> 00:47:40
instance in natural language processing

00:47:37 --> 00:47:43
all we're currently able to share in

00:47:39 --> 00:47:45
some principled way our word vectors we

00:47:42 --> 00:47:46
take the same word vectors we trained

00:47:44 --> 00:47:49
for instance with glove or work avec and

00:47:45 --> 00:47:51
we initialize our deep neural network

00:47:48 --> 00:47:55
sequence models with those word vectors

00:47:50 --> 00:47:57
in computer vision and we're actually a

00:47:54 --> 00:48:00
little further ahead and you're able to

00:47:56 --> 00:48:03
use multiple of the different layers and

00:47:59 --> 00:48:05
you initialize a lot of your CNN models

00:48:02 --> 00:48:07
with first pre trained

00:48:04 --> 00:48:11
CNN that was pre trained on imagenet for

00:48:06 --> 00:48:13
instance now usually people evaluate

00:48:10 --> 00:48:15
multitask learning with only two tasks

00:48:12 --> 00:48:18
they trained on for a first task and

00:48:14 --> 00:48:19
then they evaluate the model that they

00:48:17 --> 00:48:22
initialize from the first on the second

00:48:18 --> 00:48:24
task but they often ignore how much the

00:48:21 --> 00:48:26
performance degrades on the original

00:48:23 --> 00:48:29
task so when somebody takes an image net

00:48:25 --> 00:48:30
CNN and applies it to a new problem they

00:48:28 --> 00:48:32
rarely ever go back and say how much did

00:48:29 --> 00:48:36
my accuracy actually decrease on the

00:48:31 --> 00:48:38
original data set and furthermore we

00:48:35 --> 00:48:39
usually only look at tasks that are

00:48:37 --> 00:48:41
actually related and then we find out

00:48:38 --> 00:48:44
look there's some amazing transfer

00:48:40 --> 00:48:46
learning capability going on what we

00:48:43 --> 00:48:48
don't look a look at often in the

00:48:45 --> 00:48:50
literature and in most people's work is

00:48:47 --> 00:48:51
that when the tasks aren't related to

00:48:49 --> 00:48:54
ne another they actually hurt each

00:48:50 --> 00:48:57
other and this is a so called

00:48:53 --> 00:48:59
catastrophic forgetting it's not there's

00:48:56 --> 00:49:04
not too much work

00:48:58 --> 00:49:06
that right now now I also would like to

00:49:03 --> 00:49:10
say that right now almost nobody uses

00:49:05 --> 00:49:13
the exact same decoder or classifier for

00:49:09 --> 00:49:16
a variety of different kinds of outputs

00:49:12 --> 00:49:17
right we at least replace the softmax to

00:49:15 --> 00:49:21
try to predict different kinds of

00:49:16 --> 00:49:24
problems all right so this is the second

00:49:20 --> 00:49:26
obstacle now for now we'll only tackle

00:49:23 --> 00:49:28
the first obstacle and this is basically

00:49:25 --> 00:49:30
what motivated us to come up with

00:49:27 --> 00:49:32
dynamic memory networks they are

00:49:29 --> 00:49:34
ssentially an architecture to try to

00:49:31 --> 00:49:37
tackle arbitrary question-answering

00:49:33 --> 00:49:39
paths when I'll talk about dynamic

00:49:36 --> 00:49:41
memory networks is important to note

00:49:38 --> 00:49:42
here that for each of the different

00:49:40 --> 00:49:45
asks I'll talk about it'll be a

00:49:41 --> 00:49:47
different dynamic memory network it

00:49:44 --> 00:49:51
won't have the exact same weights will

00:49:46 --> 00:49:55
just be the same general architecture so

00:49:50 --> 00:49:57
the high-level idea for DM ends is as

00:49:54 --> 00:50:00
follows imagine you had to read a bunch

00:49:56 --> 00:50:03
of facts like these here they're all

00:49:59 --> 00:50:06
very simple in and of themselves but if

00:50:02 --> 00:50:09
I now ask you a question I showed you

00:50:05 --> 00:50:10
these and I asked where Sandra you know

00:50:08 --> 00:50:12
it'd be very hard even if you read them

00:50:09 --> 00:50:16
all of them and be kind of hard to

00:50:11 --> 00:50:17
remember and so the idea here is that

00:50:15 --> 00:50:20
for complex questions we might actually

00:50:16 --> 00:50:26
want to allow you to have multiple

00:50:19 --> 00:50:28
glances at just at the input and just

00:50:25 --> 00:50:30
like I promised our one of our most

00:50:27 --> 00:50:32
important basic Lego blocks will be this

00:50:29 --> 00:50:36
GRU we just introduced in the previous

00:50:31 --> 00:50:39
ection now here's this whole model in

00:50:35 --> 00:50:41
all its gory details and we'll dive into

00:50:38 --> 00:50:45
all of that in the next couple of slides

00:50:40 --> 00:50:46
o don't worry it's it's a big model a

00:50:44 --> 00:50:48
couple of observations so the first one

00:50:45 --> 00:50:52
is I think we're moving in deep learning

00:50:47 --> 00:50:55
now to try to use more proper software

00:50:51 --> 00:50:57
ngineering principles basically to

00:50:54 --> 00:50:59
modularize encapsulate certain

00:50:56 --> 00:51:01
capabilities and then take those as

00:50:58 --> 00:51:05
basic Lego blocks and build more complex

00:51:00 --> 00:51:07
models on top of them a lot of times

00:51:04 --> 00:51:09
nowadays you just have a CNN that's like

00:51:06 --> 00:51:11
one little block in a complex paper and

00:51:08 --> 00:51:12
then other things happen on top here

00:51:10 --> 00:51:16
we'll have the

00:51:11 --> 00:51:18
gru or word vectors basically has you

00:51:15 --> 00:51:20
know one module a sub module in these

00:51:17 --> 00:51:22
different ones here and I'm not even

00:51:19 --> 00:51:24
mentioning word vectors anymore but word

00:51:21 --> 00:51:26
vectors still play a crucial role and

00:51:23 --> 00:51:28
each of these words is essentially

00:51:25 --> 00:51:29
represented as this word vector but we

00:51:27 --> 00:51:32
just kind of assume that it's there

00:51:28 --> 00:51:34
okay so let's walk on a very high level

00:51:31 --> 00:51:36
through this model they're essentially

00:51:33 --> 00:51:39
four different modules there's the input

00:51:35 --> 00:51:41
module which will be a neural network

00:51:38 --> 00:51:44
sequence model and giryu and there's a

00:51:40 --> 00:51:46
question module an episodic memory

00:51:43 --> 00:51:48
module and an answering module and

00:51:45 --> 00:51:50
sometimes we also have these semantic

00:51:47 --> 00:51:53
memory modules here but for now these

00:51:49 --> 00:51:55
are Ray just our word vectors and we'll

00:51:52 --> 00:51:57
ignore that for now so let's go through

00:51:54 --> 00:52:01
this here is our corpus and our question

00:51:56 --> 00:52:02
is where is the football and this is our

00:52:00 --> 00:52:05
input that should allow us to answer

00:52:02 --> 00:52:08
this question now if I ask this question

00:52:04 --> 00:52:11
I will essentially use the final

00:52:07 --> 00:52:13
representation of this question to learn

00:52:10 --> 00:52:16
to pay attention to the right kinds of

00:52:12 --> 00:52:18
inputs that seem relevant for given what

00:52:15 --> 00:52:20
I know to answer this question so

00:52:17 --> 00:52:22
whereas the football well it would make

00:52:19 --> 00:52:25
sense to basically pay attention to all

00:52:21 --> 00:52:26
the sentences that mention football and

00:52:24 --> 00:52:27
maybe especially the last ones if the

00:52:25 --> 00:52:30
football moves around a lot

00:52:26 --> 00:52:32
so what we'll observe here is that this

00:52:29 --> 00:52:34
last sentence will get a lot of

00:52:31 --> 00:52:37
attention so John put down the football

00:52:33 --> 00:52:40
and now what we'll basically do is that

00:52:36 --> 00:52:43
his hidden state of this recurrent

00:52:39 --> 00:52:45
neural network model will be given as

00:52:42 --> 00:52:47
input to another recurrent neural

00:52:44 --> 00:52:51
network because it seemed relevant to

00:52:47 --> 00:52:53
answer this current question at hand now

00:52:50 --> 00:52:55
e'll basically agglomerate all these

00:52:52 --> 00:52:58
different facts that seem relevant at

00:52:54 --> 00:53:00
he time and is now the gru in this

00:52:57 --> 00:53:02
final vector m and now this vector M

00:52:59 --> 00:53:05
together with the question will be used

00:53:01 --> 00:53:06
to go over the inputs again if the model

00:53:04 --> 00:53:08
deems that doesn't have enough

00:53:05 --> 00:53:10
information yet to answer the question

00:53:07 --> 00:53:11
so if I ask you where's the football and

00:53:09 --> 00:53:14
it's so far only found that John put

00:53:11 --> 00:53:15
down the football you don't know enough

00:53:13 --> 00:53:17
you still don't know where it is but you

00:53:14 --> 00:53:19
now have a new fact namely John seems

00:53:16 --> 00:53:22
relevant to answer the question and that

00:53:18 --> 00:53:24
fact is now represented in this vector M

00:53:21 --> 00:53:25
which is also just the last in the state

00:53:23 --> 00:53:28
of another

00:53:24 --> 00:53:30
Network now we'll go over the inputs

00:53:27 --> 00:53:33
again now that we know that John and the

00:53:29 --> 00:53:35
football irrelevant will be learned to

00:53:32 --> 00:53:39
pay attention to John move to the

00:53:34 --> 00:53:42
bedroom and John went to the hallway

00:53:38 --> 00:53:44
again those are going to get

00:53:41 --> 00:53:47
agglomerated here in this recurrent

00:53:43 --> 00:53:49
neural network and now the model seems

00:53:46 --> 00:53:52
thinks that it actually knows enough

00:53:48 --> 00:53:56
because it basically intrinsically

00:53:51 --> 00:53:58
captured things about the football John

00:53:55 --> 00:53:59
found a location and so on of course we

00:53:57 --> 00:54:02
didn't have to tell it anybody anything

00:53:58 --> 00:54:04
about their people their locations if X

00:54:01 --> 00:54:06
moves to Y and y is in the set of

00:54:03 --> 00:54:07
locations then this happens

00:54:05 --> 00:54:09
none of that you just give it a lot of

00:54:06 --> 00:54:11
stories like that and in its hidden

00:54:08 --> 00:54:15
states it will capture these kinds of

00:54:10 --> 00:54:17
patterns so then we have the final

00:54:14 --> 00:54:18
vector M and we'll give that to an

00:54:16 --> 00:54:22
swer module which produces in our

00:54:17 --> 00:54:24
standard softmax way the answer all

00:54:21 --> 00:54:28
right now let's zoom into the different

00:54:23 --> 00:54:30
modules of this overall dynamic memory

00:54:27 --> 00:54:32
network architecture the input

00:54:29 --> 00:54:36
fortunately is just a standard GRU the

00:54:31 --> 00:54:40
way we defined it before so simple word

00:54:35 --> 00:54:45
vectors hidden states reset gates update

00:54:39 --> 00:54:47
gates and so on the question module is

00:54:44 --> 00:54:51
also just the GRU a separate one with

00:54:46 --> 00:54:53
its own weights and the final vector q

00:54:50 --> 00:54:55
here is just going to be the last hidden

00:54:52 --> 00:54:58
state of that recurrent neural networks

00:54:54 --> 00:54:59
you can't model now the interesting

00:54:57 --> 00:55:03
stuff happens in the episodic memory

00:54:58 --> 00:55:09
module which is essentially a sort of

00:55:02 --> 00:55:13
meta gated GRU where this gate will

00:55:08 --> 00:55:15
basically define is defined computed by

00:55:12 --> 00:55:17
the attention mechanism and will

00:55:14 --> 00:55:21
basically say this current state

00:55:16 --> 00:55:24
sentence si here seems to matter and the

00:55:20 --> 00:55:26
superscript T is the episode that we

00:55:23 --> 00:55:29
have so each episode basically means

00:55:25 --> 00:55:34
we're going over the input entirely one

00:55:28 --> 00:55:36
time so it starts at g1 here and what

00:55:33 --> 00:55:40
his basically will allow us to do is to

00:55:35 --> 00:55:40
say well if G is

00:55:39 --> 00:55:46
zero then what we'll do is basically

00:55:42 --> 00:55:48
just copy over the past states from the

00:55:45 --> 00:55:51
input nothing will happen and unlike

00:55:47 --> 00:55:54
before in all these GRU equations this G

00:55:50 --> 00:55:57
is just a single scalar number it will

00:55:53 --> 00:56:00
basically say if G is zero then this

00:55:56 --> 00:56:01
entence is completely irrelevant to my

00:55:59 --> 00:56:02
current question at hand I can

00:56:00 --> 00:56:05
completely skip it

00:56:01 --> 00:56:07
all right and there are lots of examples

00:56:04 --> 00:56:09
like mary mary traveled to the hallway

00:56:06 --> 00:56:11
that are just completely irrelevant to

00:56:08 --> 00:56:15
answering the current question in those

00:56:10 --> 00:56:16
cases this g will be zero and we're just

00:56:14 --> 00:56:19
copying the previous hidden state of

00:56:16 --> 00:56:22
this recurrent neural network over

00:56:18 --> 00:56:25
otherwise we'll have a standard giryu

00:56:21 --> 00:56:28
model so now of course the big question

00:56:24 --> 00:56:30
is how do we compute this G and this

00:56:27 --> 00:56:32
might look a little ugly but it's quite

00:56:29 --> 00:56:35
simple basically we're going to compute

00:56:31 --> 00:56:38
two vector similarities multiplicative

00:56:34 --> 00:56:42
an edit of one with absolute values of

00:56:37 --> 00:56:43
all the single values of the sentence

00:56:41 --> 00:56:46
vector that we currently have and the

00:56:42 --> 00:56:48
question vector and the first the memory

00:56:45 --> 00:56:52
state of the previous pass of the input

00:56:47 --> 00:56:53
and the first pass over the input the

00:56:51 --> 00:56:55
memory state is initialized to be just a

00:56:52 --> 00:56:58
question and then afterwards at

00:56:54 --> 00:57:01
agglomerated relevant facts so

00:56:57 --> 00:57:03
intuitively here if the sentence

00:57:00 --> 00:57:05
mentions John for instance and the

00:57:02 --> 00:57:06
question is or mentions football and the

00:57:04 --> 00:57:08
question is where is the football

00:57:05 --> 00:57:11
then you'd hope that the question vector

00:57:07 --> 00:57:13
Q mentions has some units that are more

00:57:10 --> 00:57:15
active because football was mentioned

00:57:12 --> 00:57:17
and the sentence vector mentions

00:57:14 --> 00:57:18
football so there's some units that are

00:57:16 --> 00:57:20
more active because football is

00:57:17 --> 00:57:22
mentioned and hence some of these inner

00:57:19 --> 00:57:25
products or absolute values of

00:57:21 --> 00:57:27
subtractions are going to be large and

00:57:24 --> 00:57:30
then what we're going to do is just plug

00:57:26 --> 00:57:31
that into a standard through standard

00:57:29 --> 00:57:34
single layer neural network and in a

00:57:30 --> 00:57:37
standard linear layer here and then we

00:57:33 --> 00:57:39
apply a soft max to essentially weight

00:57:36 --> 00:57:41
all of these different potential

00:57:38 --> 00:57:44
sentences that we might have to compute

00:57:40 --> 00:57:46
the final gate so this will basically a

00:57:43 --> 00:57:49
soft attention mechanism that sums to

00:57:45 --> 00:57:52
ne and we'll pay most attention to the

00:57:48 --> 00:57:52
facts that seem most relevant given what

00:57:51 --> 00:57:57
I

00:57:52 --> 00:57:58
no so far and the question then when the

00:57:56 --> 00:58:01
nd of the input has reached all these

00:57:57 --> 00:58:04
relevant facts here are summarized in

00:58:00 --> 00:58:08
another GRU that basically moves up here

00:58:03 --> 00:58:09
and you can train a classifier also if

00:58:07 --> 00:58:13
you have the right kind of supervision

00:58:08 --> 00:58:14
to basically train that the model knows

00:58:12 --> 00:58:18
enough to actually answer the question

00:58:13 --> 00:58:19
and stop iterating over the inputs if

00:58:17 --> 00:58:21
you don't have that kind of supervision

00:58:18 --> 00:58:24
you can also just say I will go over the

00:58:20 --> 00:58:28
inputs a fixed number of times and that

00:58:23 --> 00:58:30
works reasonably well to all right

00:58:27 --> 00:58:33
here's a lot to sink in so I'll give

00:58:29 --> 00:58:36
you a couple seconds basically we pay

00:58:32 --> 00:58:37
attention to different facts given a

00:58:35 --> 00:58:41
certain question we iterate over the

00:58:37 --> 00:58:44
input multiple times and we agglomerate

00:58:40 --> 00:58:46
the facts that seem relevant given the

00:58:43 --> 00:58:47
current knowledge and the question now I

00:58:45 --> 00:58:50
don't usually talk about neuroscience

00:58:46 --> 00:58:52
I'm not a neuroscientist but there is a

00:58:49 --> 00:58:54
very interesting relationship here that

00:58:51 --> 00:58:57
a friend of mine Sam Gershman pointed

00:58:53 --> 00:59:00
out which is that the episodic memory in

00:58:56 --> 00:59:02
general for humans is actually the

00:58:59 --> 00:59:04
memory of autobiographical events so

00:59:01 --> 00:59:06
it's the time when we remember the first

00:59:03 --> 00:59:08
ime I went to school or something like

00:59:05 --> 00:59:10
that and essentially a collection of our

00:59:07 --> 00:59:11
past personal experiences that occurred

00:59:09 --> 00:59:16
at a particular time in a particular

00:59:10 --> 00:59:17
place and just like our episodic memory

00:59:15 --> 00:59:20
that can be triggered with a variety of

00:59:16 --> 00:59:22
different inputs this is also this

00:59:19 --> 00:59:25
episodic memory is also triggered with a

00:59:21 --> 00:59:27
specific question at hand and what's

00:59:24 --> 00:59:28
also interesting is the hippocampus

00:59:26 --> 00:59:30
which is a seat of the episodic memory

00:59:27 --> 00:59:32
in humans is actually active during

00:59:29 --> 00:59:34
transitive inference so transitive

00:59:31 --> 00:59:36
inference is you know going from A to B

00:59:33 --> 00:59:39
to C to have some connection from A to C

00:59:35 --> 00:59:41
or in this case here with this football

00:59:38 --> 00:59:43
for instance you first had to find facts

00:59:40 --> 00:59:45
about John into football and then

00:59:42 --> 00:59:47
finding where John was and then find the

00:59:44 --> 00:59:49
location of John so those are examples

00:59:46 --> 00:59:54
of transitive inference and it turns out

00:59:48 --> 00:59:57
hat you also need in the dmn these

00:59:53 --> 01:00:02
multiple passes to enable the capability

00:59:56 --> 01:00:04
to do transitive inference now the final

01:00:01 --> 01:00:07
module again is very simple G or UN

01:00:03 --> 01:00:09
softmax to produce the final

01:00:06 --> 01:00:12
answers the main difference here is that

01:00:08 --> 01:00:14
instead of just having the current the

01:00:11 --> 01:00:17
previous hidden state 18 minus 1 as

01:00:13 --> 01:00:20
input will also include the question at

01:00:16 --> 01:00:22
every time and we will include the

01:00:19 --> 01:00:24
answer that was generated at the

01:00:21 --> 01:00:26
previous time step but rather than that

01:00:23 --> 01:00:27
it's our standard softmax from your

01:00:25 --> 01:00:30
standard cross-entropy errors to

01:00:26 --> 01:00:31
minimize it and now beautiful thing of

01:00:29 --> 01:00:33
this whole model is that it's end-to-end

01:00:30 --> 01:00:37
trainable these four different modules

01:00:32 --> 01:00:39
will actually all train based on the

01:00:36 --> 01:00:41
cross entropy of that final softmax all

01:00:38 --> 01:00:44
these different modules communicate with

01:00:40 --> 01:00:47
vectors and we'll just have Delta

01:00:43 --> 01:00:50
messages and back propagation to train

01:00:46 --> 01:00:52
them now there's been a lot of work in

01:00:49 --> 01:00:56
the last two years on models like this

01:00:51 --> 01:00:58
in fact quoc will cover a lot of these

01:00:55 --> 01:01:00
really interesting models tomorrow

01:00:57 --> 01:01:02
different types of memory structures and

01:00:59 --> 01:01:06
so on and the dynamic memory network is

01:01:01 --> 01:01:09
in some sense one of those models one

01:01:05 --> 01:01:11
particular model is a proper

01:01:08 --> 01:01:14
comparison because it's there a lot of

01:01:10 --> 01:01:18
similarities namely memory networks from

01:01:13 --> 01:01:20
jason weston those basically also have

01:01:17 --> 01:01:23
inputs and scoring and attention

01:01:19 --> 01:01:26
response mechanisms the main difference

01:01:22 --> 01:01:28
is that they use different kinds of

01:01:25 --> 01:01:31
basic Lego blocks for these different

01:01:27 --> 01:01:33
kinds of mechanisms for input they use

01:01:30 --> 01:01:37
bag of words representation z' or

01:01:32 --> 01:01:39
non-linear on linear embeddings for the

01:01:36 --> 01:01:40
attention and responses they have

01:01:38 --> 01:01:43
different kinds of iteratively to run

01:01:39 --> 01:01:46
functions the main interesting sort of

01:01:42 --> 01:01:49
difference to the dmn is that the dmn

01:01:45 --> 01:01:51
really use this recurrent neural network

01:01:48 --> 01:01:54
type sequence models for all of these

01:01:50 --> 01:01:57
different modules and capabilities and

01:01:53 --> 01:01:58
in some sense that helps us to have a

01:01:56 --> 01:02:00
broader range of applications that

01:01:57 --> 01:02:04
include things like sequence tagging and

01:01:59 --> 01:02:07
so let me go over a couple of results

01:02:03 --> 01:02:10
and experiments of this model so the

01:02:06 --> 01:02:15
first one is on this Bobbie dataset did

01:02:09 --> 01:02:17
Facebook publish it basically has a lot

01:02:14 --> 01:02:20
of these kinds of simple logical

01:02:16 --> 01:02:21
reasoning type questions in fact all

01:02:19 --> 01:02:23
these like where's the

01:02:20 --> 01:02:25
Paul those were examples from the

01:02:22 --> 01:02:28
Facebook Bobby data set and it also

01:02:24 --> 01:02:31
includes things like yes/no questions

01:02:27 --> 01:02:33
imple counting negation some indefinite

01:02:30 --> 01:02:37
knowledge where the answer might be may

01:02:32 --> 01:02:38
be basic coreference where you have to

01:02:36 --> 01:02:41
realize what does she

01:02:37 --> 01:02:43
who does she refer to or he reasoning

01:02:40 --> 01:02:47
over time if this happened before that

01:02:42 --> 01:02:49
and so on and basically this dynamic

01:02:46 --> 01:02:52
memory network I think is currently the

01:02:48 --> 01:02:55
state of the art on this data set of the

01:02:51 --> 01:02:57
simple simple logical reasoning now the

01:02:54 --> 01:03:00
problem with this data set is that it's

01:02:56 --> 01:03:04
a synthetic data set and so it had only

01:02:59 --> 01:03:07
a certain set of generating like human

01:03:03 --> 01:03:09
general human defined generative

01:03:06 --> 01:03:12
functions that created certain patterns

01:03:08 --> 01:03:14
and in that sense it's only necessary

01:03:11 --> 01:03:16
and not a sufficient condition of

01:03:13 --> 01:03:18
solving it with sometimes a hundred

01:03:15 --> 01:03:20
percent accuracy to real question

01:03:17 --> 01:03:23
answering so there's still a lot of

01:03:19 --> 01:03:25
complexity the main interesting bit to

01:03:22 --> 01:03:28
point out here is that there are

01:03:24 --> 01:03:31
different numbers of training examples

01:03:27 --> 01:03:32
for each of these different subtasks and

01:03:30 --> 01:03:35
so you have basically a thousand

01:03:31 --> 01:03:37
examples of simple negation for instance

01:03:34 --> 01:03:39
and it's always a similar kind of

01:03:36 --> 01:03:41
pattern and hence you're able to

01:03:38 --> 01:03:43
classify it very well now real language

01:03:40 --> 01:03:45
you will never have that many examples

01:03:42 --> 01:03:47
for each type of pattern you want to

01:03:44 --> 01:03:49
learn and so it's still general question

01:03:46 --> 01:03:52
answering is still an open problem and

01:03:48 --> 01:03:55
non-trivial now what's cool is this same

01:03:51 --> 01:03:57
architecture of allowing the model to go

01:03:54 --> 01:03:59
ver inputs multiple times also got

01:03:56 --> 01:04:04
state of the art and sentiment analysis

01:03:58 --> 01:04:06
very different kind of task and we

01:04:03 --> 01:04:09
actually analyzed whether it's really

01:04:05 --> 01:04:11
helpful to have multiple passes over the

01:04:08 --> 01:04:14
input and it turns out it is so there's

01:04:10 --> 01:04:16
certain things like reasoning over three

01:04:13 --> 01:04:19
facts or Counting where you really have

01:04:15 --> 01:04:22
to have this dynamic this episodic

01:04:18 --> 01:04:25
memory module and it goes over the input

01:04:21 --> 01:04:28
maybe five times for sentiment it

01:04:24 --> 01:04:30
actually turns out it hurts after going

01:04:27 --> 01:04:32
over the input more than two times and

01:04:29 --> 01:04:34
that's actually one of the things we're

01:04:31 --> 01:04:36
now working on is can we find

01:04:33 --> 01:04:39
model that does the same thing for every

01:04:35 --> 01:04:42
single input with the same weights to

01:04:38 --> 01:04:44
try to learn this different tasks we can

01:04:41 --> 01:04:49
actually look at a couple of fun

01:04:43 --> 01:04:51
examples of this model and what happens

01:04:48 --> 01:04:54
with tough sentiment sentences generally

01:04:50 --> 01:04:55
to be honest sentiment you can probably

01:04:53 --> 01:04:59
get to like seventy five percent

01:04:54 --> 01:05:00
accuracy with some very simple models

01:04:58 --> 01:05:02
that just basically find like great

01:04:59 --> 01:05:04
words like great and wonderful and

01:05:01 --> 01:05:06
awesome and you'll get to something

01:05:03 --> 01:05:09
that's roughly right here some of the

01:05:05 --> 01:05:11
xamples that those are the kinds of

01:05:08 --> 01:05:12
examples that you now need to get right

01:05:10 --> 01:05:15
o retry to push the state-of-the-art

01:05:11 --> 01:05:18
further in sentiment analysis so here

01:05:14 --> 01:05:21
the sentences in its ragged cheap and

01:05:17 --> 01:05:23
unassuming way the movie works so this

01:05:20 --> 01:05:25
entence is incorrect even if you allow

01:05:22 --> 01:05:28
the dmn but I have this whole

01:05:24 --> 01:05:30
architecture but only allow one pass

01:05:27 --> 01:05:32
over the input once you have two passes

01:05:29 --> 01:05:36
over the input it actually learns to pay

01:05:31 --> 01:05:40
attention not just to these very strong

01:05:35 --> 01:05:45
adjectives but in the end actually to

01:05:39 --> 01:05:47
the movie working so here these fields

01:05:44 --> 01:05:50
are essentially the gating function G

01:05:46 --> 01:05:53
that we defined that pays attention to

01:05:49 --> 01:05:56
specific words and the darker it is the

01:05:52 --> 01:06:00
larger that gate is and the more open it

01:05:55 --> 01:06:04
is amor that word effects the hidden

01:05:59 --> 01:06:06
state in the episodic memory module so

01:06:03 --> 01:06:09
it goes over the input the first time

01:06:05 --> 01:06:11
pays attention to cheap and unassuming

01:06:08 --> 01:06:14
and way and a little bit of works too

01:06:10 --> 01:06:15
but the second time it basically figured

01:06:13 --> 01:06:18
out it agglomerate it's sort of the

01:06:14 --> 01:06:21
facts of that sentence and then learn to

01:06:17 --> 01:06:25
pay attention more to specific words

01:06:20 --> 01:06:28
that seem more important just one more

01:06:24 --> 01:06:32
xample here my response to the film is

01:06:27 --> 01:06:33
best described as lukewarm so in general

01:06:31 --> 01:06:38
sentiment analysis when you look at

01:06:33 --> 01:06:41
unique an scores like the word best is

01:06:37 --> 01:06:42
basically some of the most one of the

01:06:40 --> 01:06:45
most positive words you could possibly

01:06:41 --> 01:06:47
use in a sentence and the first time the

01:06:44 --> 01:06:48
model passes over the sentence that also

01:06:46 --> 01:06:50
pays most attention

01:06:47 --> 01:06:53
took this incredibly positive word maybe

01:06:49 --> 01:06:55
st but then this site once it

01:06:52 --> 01:06:59
agglomerate at the context actually

01:06:54 --> 01:07:02
realizes well best actually here is not

01:06:58 --> 01:07:04
used in its adjective way but it's

01:07:01 --> 01:07:06
actually an adverb that best describes

01:07:03 --> 01:07:08
omething and what it describes is

01:07:05 --> 01:07:10
actually lukewarm and hence it's

01:07:07 --> 01:07:12
actually a negative sentence so those

01:07:09 --> 01:07:14
are the kinds of examples that you need

01:07:11 --> 01:07:17
to get to now to appreciate improvements

01:07:13 --> 01:07:20
in sentiment analysis where we basically

01:07:16 --> 01:07:23
also went from on this particular data

01:07:19 --> 01:07:26
set these are all neural network type

01:07:22 --> 01:07:28
models that started 82 until then that

01:07:25 --> 01:07:31
same data set existed for around 8 years

01:07:27 --> 01:07:34
and none of the standard NLP models had

01:07:30 --> 01:07:37
reached above 80% accuracy and now we're

01:07:33 --> 01:07:39
basically in the high high 80s and and

01:07:36 --> 01:07:41
those are the kinds of improvements that

01:07:38 --> 01:07:43
you see across a variety of

01:07:40 --> 01:07:48
different NLP tasks now that deep

01:07:42 --> 01:07:50
learning has come and deep learning

01:07:47 --> 01:07:53
techniques are being used in NLP and now

01:07:49 --> 01:07:54
the last task in NLP that this model

01:07:52 --> 01:07:56
turn out are also working for Ivy Wallen

01:07:53 --> 01:07:57
as part of speech tagging now part of

01:07:55 --> 01:08:00
speech tagging is less exciting of a

01:07:56 --> 01:08:02
task it's more of an intermediate task

01:07:59 --> 01:08:05
but it's still fascinating to see that

01:08:01 --> 01:08:06
after this data set has been around for

01:08:04 --> 01:08:09
over 20 years

01:08:05 --> 01:08:10
you can still improve the state of the

01:08:08 --> 01:08:12
art was the same kind of architecture

01:08:09 --> 01:08:14
that also did well and fuzzy reasoning

01:08:11 --> 01:08:18
of sentiment and discrete logical

01:08:13 --> 01:08:20
reasoning for for question answering now

01:08:17 --> 01:08:25
e had a new person joined a group

01:08:19 --> 01:08:25
Zhiming and he he thought well that's

01:08:24 --> 01:08:28
cool

01:08:24 --> 01:08:30
but he was more of a computer vision

01:08:27 --> 01:08:32
researcher and so he thought well could

01:08:29 --> 01:08:34
I use this create question-answering

01:08:31 --> 01:08:37
module now to do visual

01:08:33 --> 01:08:39
question-answering so combine sort of

01:08:36 --> 01:08:41
some stat was going on in the group and

01:08:38 --> 01:08:45
NLP and apply it to a computer vision

01:08:40 --> 01:08:49
and he did not have to know all of the

01:08:44 --> 01:08:51
different aspects of the code all he had

01:08:48 --> 01:08:53
to do was change the input module from

01:08:50 --> 01:08:58
one that gives you hidden states at each

01:08:52 --> 01:09:01
word over a long sequence of you know

01:08:57 --> 01:09:02
ords and sentences to an input module

01:09:00 --> 01:09:04
that would give him vector

01:09:01 --> 01:09:07
years four sequences of regions in an

01:09:03 --> 01:09:10
image and he literally did not touch

01:09:06 --> 01:09:14
some of the other parts of the code I

01:09:09 --> 01:09:16
did have to look carefully at this input

01:09:13 --> 01:09:20
module aware again here our basic Lego

01:09:15 --> 01:09:22
block that Andre introduced really well

01:09:19 --> 01:09:24
of our convolutional neural network and

01:09:21 --> 01:09:27
then each the convolutional networks

01:09:23 --> 01:09:31
will essentially give us 14 by 14 many

01:09:26 --> 01:09:33
vectors one for each and it's one of its

01:09:30 --> 01:09:36
top states one representing each region

01:09:32 --> 01:09:38
of an image and then what we'll do is

01:09:35 --> 01:09:40
basically take those vectors and now

01:09:37 --> 01:09:43
replace the word vectors we used to have

01:09:39 --> 01:09:46
with CNN vectors and then plug them into

01:09:42 --> 01:09:49
GRU now again the GRU we know as our

01:09:45 --> 01:09:51
basic Lego block we already defined it

01:09:48 --> 01:09:55
one addition here is that it'll actually

01:09:50 --> 01:09:57
be a bi-directional GRU will go once

01:09:54 --> 01:10:00
from left to right in this snake-like

01:09:56 --> 01:10:03
fashion and another one goes from right

01:09:59 --> 01:10:05
o left backwards now both of these will

01:10:02 --> 01:10:07
basically have hidden state and you can

01:10:04 --> 01:10:08
just concatenate the hidden states of

01:10:06 --> 01:10:12
both of these to compute the final

01:10:07 --> 01:10:15
hidden state at each for each block of

01:10:11 --> 01:10:20
the image and that model to actually

01:10:14 --> 01:10:22
achieve state-of-the-art results this

01:10:19 --> 01:10:24
data set has been only released last

01:10:21 --> 01:10:26
year so everybody now works on deep

01:10:23 --> 01:10:29
learning techniques to try to solve it

01:10:25 --> 01:10:31
and I was at first a little skeptical it

01:10:28 --> 01:10:33
was just too good to be true that this

01:10:30 --> 01:10:36
model we developed for NLP would work so

01:10:32 --> 01:10:40
well so we really dug in to looking at

01:10:35 --> 01:10:45
he attention so what I showed you here

01:10:39 --> 01:10:49
these G values again that we computed

01:10:44 --> 01:10:52
with this equation now instead of paying

01:10:48 --> 01:10:56
attention to words it paid attention to

01:10:51 --> 01:10:58
different regions in the image and we

01:10:55 --> 01:11:00
started basically analyzing going

01:10:57 --> 01:11:02
through a bunch of those on the Deaf set

01:10:59 --> 01:11:04
and analyzing what is it actually paying

01:11:01 --> 01:11:08
attention to again it's being trained

01:11:03 --> 01:11:10
only with the image the question and the

01:11:07 --> 01:11:13
final answer that's what you get a

01:11:09 --> 01:11:15
training time you do not get this sort

01:11:12 --> 01:11:15
of latent representation of where you

01:11:14 --> 01:11:17
should actually pay it

01:11:14 --> 01:11:20
attention to in the image in order to

01:11:16 --> 01:11:21
answer that question correctly so when

01:11:19 --> 01:11:24
the question was what is the main color

01:11:20 --> 01:11:27
on the bus and learned to actually pay

01:11:23 --> 01:11:29
attention here to that bus mic well okay

01:11:26 --> 01:11:30
maybe that's not that impressive it's

01:11:28 --> 01:11:34
just the main object in the center of

01:11:29 --> 01:11:36
the image and you know what it types the

01:11:33 --> 01:11:38
type of trees are in the background well

01:11:35 --> 01:11:40
maybe it just you know connects tree

01:11:37 --> 01:11:43
with anything that's green and pays

01:11:39 --> 01:11:47
attention to that so I was neat but you

01:11:42 --> 01:11:48
know not not super impressive yet so is

01:11:46 --> 01:11:49
this in the wild kind of more

01:11:47 --> 01:11:51
interesting and actually pays attention

01:11:48 --> 01:11:55
to a man-made structure in the

01:11:50 --> 01:11:58
background and correctly answer's no

01:11:54 --> 01:12:02
then this one is kind of interesting who

01:11:57 --> 01:12:04
is on both photos the answers girl now

01:12:01 --> 01:12:07
to be honest I don't think the model

01:12:03 --> 01:12:09
actually knows that there are two people

01:12:06 --> 01:12:12
tries to match them and so on it just

01:12:08 --> 01:12:15
finds the main person or main object in

01:12:11 --> 01:12:19
this in the scene the main object is

01:12:14 --> 01:12:21
a little baby girl so it says girl this

01:12:18 --> 01:12:23
one's also relatively trivial what time

01:12:20 --> 01:12:24
of day was this picture taken the

01:12:22 --> 01:12:28
answers night because it's very dark

01:12:23 --> 01:12:29
picture at least in the sky now this one

01:12:27 --> 01:12:31
is getting a little more interesting

01:12:28 --> 01:12:33
what is the boy holding the answer a

01:12:30 --> 01:12:36
surfboard and it actually does pay

01:12:32 --> 01:12:38
attention to both of the arms and then

01:12:35 --> 01:12:40
what's just below that arm so that's a

01:12:37 --> 01:12:43
little more interesting kind of

01:12:39 --> 01:12:45
attention visualization and then for a

01:12:42 --> 01:12:47
while we're also worried well what if in

01:12:44 --> 01:12:49
the data set it just learns really well

01:12:46 --> 01:12:51
from language alone yes it pays

01:12:48 --> 01:12:53
attention to things but maybe it'll just

01:12:50 --> 01:12:55
say things that it often sees in the

01:12:52 --> 01:12:57
text so if I asked you what or what

01:12:54 --> 01:13:00
color are the bananas you don't really

01:12:56 --> 01:13:01
have to look at an image in 95% of the

01:12:59 --> 01:13:04
cases you're right just saying yellow

01:13:00 --> 01:13:06
ithout seeing an image so it was really

01:13:03 --> 01:13:09
this one I was kind of excited about

01:13:05 --> 01:13:10
because it actually paid attention to

01:13:08 --> 01:13:12
the bananas in the middle and then did

01:13:09 --> 01:13:16
say green and kind of overruled the

01:13:11 --> 01:13:19
prior that it would get from from

01:13:15 --> 01:13:21
language alone what's the pattern on the

01:13:18 --> 01:13:25
cat's fur on its tail pays attention

01:13:20 --> 01:13:27
mostly to the tail and says stripes now

01:13:24 --> 01:13:29
this one here was interesting and fit

01:13:26 --> 01:13:32
he player hit the ball the answer

01:13:28 --> 01:13:36
yes though I have to say that we later

01:13:31 --> 01:13:40
had a journalist want to do his own

01:13:35 --> 01:13:42
question he he asked John marker from

01:13:39 --> 01:13:46
New York Times and we just put together

01:13:41 --> 01:13:47
this demo and the night before and he's

01:13:45 --> 01:13:51
like well I want to ask my own question

01:13:46 --> 01:13:53
and I am like okay and he asked is the

01:13:50 --> 01:13:54
girl wearing a hat and you know it

01:13:52 --> 01:13:57
wasn't made for production so it's kind

01:13:53 --> 01:13:59
of slow and the system was cranking it

01:13:56 --> 01:14:00
like well you know like trying to come

01:13:58 --> 01:14:02
up with excuses it's kind of black

01:13:59 --> 01:14:04
background and the plaque hat and it

01:14:01 --> 01:14:06
might be kind of hard to see and

01:14:03 --> 01:14:09
unfortunately I got it right and said

01:14:05 --> 01:14:11
yes and then after the interview I said

01:14:08 --> 01:14:14
well maybe let's look and see if like

01:14:10 --> 01:14:16
what I imma just asked it myself less

01:14:13 --> 01:14:18
tressful situation a bunch of questions

01:14:15 --> 01:14:20
on my own and these are all the

01:14:17 --> 01:14:22
questions like the first eight questions

01:14:19 --> 01:14:24
that I could come up with and somewhat

01:14:21 --> 01:14:26
o my surprise it actually got them all

01:14:23 --> 01:14:28
right so what is the girl holding a

01:14:25 --> 01:14:31
tennis racket what's she playing playing

01:14:27 --> 01:14:33
tennis or what's she doing I was to go

01:14:30 --> 01:14:34
wearing shorts what is the color of the

01:14:32 --> 01:14:36
ground brown then I was like well okay

01:14:33 --> 01:14:38
let's try to break it by asking just

01:14:35 --> 01:14:40
like what's the color of like the sound

01:14:37 --> 01:14:42
of this the smallest object the ball

01:14:39 --> 01:14:44
actually got that right to because her

01:14:41 --> 01:14:46
skirt white also kind of interesting

01:14:43 --> 01:14:47
like when you asked him all what she's

01:14:45 --> 01:14:50
wearing shorts but in you asked about

01:14:46 --> 01:14:53
he skirt and it still sort of is you

01:14:49 --> 01:14:54
know sort of capturing that you might

01:14:52 --> 01:14:56
call this different things

01:14:53 --> 01:14:59
what and then this one was interesting

01:14:55 --> 01:15:02
what did the girl just hit tennis ball

01:14:58 --> 01:15:04
and then as like well what if I asked is

01:15:01 --> 01:15:07
the girl about to hit the tennis ball

01:15:03 --> 01:15:08
and said yes and then did the girl just

01:15:06 --> 01:15:10
hit the tennis ball and it said yes

01:15:07 --> 01:15:12
again so then I finally found a way to

01:15:09 --> 01:15:14
break it so it doesn't have enough the

01:15:11 --> 01:15:16
Corcoran statistics to understand and

01:15:13 --> 01:15:19
again spare quote understand sort of

01:15:15 --> 01:15:20
which angles does the arm have to be in

01:15:18 --> 01:15:22
order to assume that the ball was just

01:15:19 --> 01:15:27
adores about it but what it basically

01:15:21 --> 01:15:29
does show us is that once it saw a lot

01:15:26 --> 01:15:32
of examples on a specific domain it

01:15:28 --> 01:15:35
really can capture quite a lot of

01:15:31 --> 01:15:39
different things now see if we can get

01:15:34 --> 01:15:43
he demo up I have to be a VPN to make

01:15:38 --> 01:15:45
it work but so here's here's one

01:15:42 --> 01:15:47
example the best way to hope for any

01:15:44 --> 01:15:49
chance of enjoying this film is by

01:15:46 --> 01:15:52
lowering your expectations again one of

01:15:48 --> 01:15:57
those kinds of sentences that you have

01:15:51 --> 01:15:59
to now get correct in order to get

01:15:56 --> 01:16:02
improved performance on sentiment and

01:15:58 --> 01:16:07
actually correctly says that this is

01:16:01 --> 01:16:09
negative now we can also

01:16:06 --> 01:16:12
actually ask that question in Chinese

01:16:09 --> 01:16:17
this is one of the beautiful things off

01:16:11 --> 01:16:18
of the dmn and in general really of most

01:16:16 --> 01:16:20
deep learning techniques we don't have

01:16:17 --> 01:16:22
to be experts in a domain or even in a

01:16:19 --> 01:16:25
language to create a very very accurate

01:16:21 --> 01:16:28
model for for that language or that

01:16:24 --> 01:16:29
domain there's no more future

01:16:27 --> 01:16:31
ngineering I'm not going to make a fool

01:16:28 --> 01:16:35
of myself trying to read that one out

01:16:30 --> 01:16:35
loud but that's an interesting example

01:16:34 --> 01:16:39
you can also this is the what parts of

01:16:37 --> 01:16:42
speech are there you can have other

01:16:38 --> 01:16:45
things like you know named entities and

01:16:41 --> 01:16:47
other sequence problems I can also ask

01:16:44 --> 01:16:51
what are the men wearing on the head

01:16:46 --> 01:16:52
answers helmets and then maybe a

01:16:50 --> 01:16:56
slightly more interesting question why

01:16:51 --> 01:16:59
are the men wearing helmets and the

01:16:55 --> 01:17:00
answer is safety so especially we're

01:16:58 --> 01:17:03
close to the circle of death here at

01:16:59 --> 01:17:07
Stanford where a lot of bikes crash and

01:17:02 --> 01:17:10
it's a good answer all right with that

01:17:06 --> 01:17:12
I'll leave a couple of minutes for for

01:17:09 --> 01:17:14
questions so basically the summary is

01:17:11 --> 01:17:17
word vectors and recurrent neural

01:17:13 --> 01:17:19
networks are super useful building

01:17:16 --> 01:17:21
blocks once you really appreciate and

01:17:18 --> 01:17:23
understand those two building blocks

01:17:20 --> 01:17:26
you're kind of ready to have some fun

01:17:22 --> 01:17:28
and build more complex models really in

01:17:25 --> 01:17:30
the end this dmn is a way to combine

01:17:27 --> 01:17:32
that in just a variety of new ways to a

01:17:29 --> 01:17:35
larger more complex model and that's

01:17:31 --> 01:17:36
also where the state I think of deep

01:17:34 --> 01:17:38
learning is for natural language

01:17:35 --> 01:17:41
processing we've tackled a lot of these

01:17:37 --> 01:17:43
smaller sub-problems intermediate tasks

01:17:40 --> 01:17:46
and now we can work on more interesting

01:17:42 --> 01:17:48
complex problems like dialogue and

01:17:45 --> 01:17:50
question answering machine translation

01:17:47 --> 01:17:52
and things like that all right

01:17:49 --> 01:17:52
hank you

01:17:56 --> 01:18:05
I mean all right cool yeah a quick

01:18:02 --> 01:18:09
question in the dynamic memory Network

01:18:04 --> 01:18:12
you have the the RN and you also

01:18:08 --> 01:18:15
mentioned that if you have better

01:18:11 --> 01:18:19
assumption of the input right so you

01:18:14 --> 01:18:22
sed to work on the tray LST M right so

01:18:18 --> 01:18:24
if you change they are in into a tree

01:18:21 --> 01:18:27
structure would that help it's a good

01:18:23 --> 01:18:30
question I I actually loved researchers

01:18:26 --> 01:18:33
at in my whole PhD about tree structures

01:18:29 --> 01:18:34
and somewhat surprising in the last

01:18:32 --> 01:18:38
couple of weeks to actually some new

01:18:33 --> 01:18:41
results on SNL I understand for natural

01:18:37 --> 01:18:42
anguage inference data said where tree

01:18:40 --> 01:18:47
structures are again the state of the

01:18:41 --> 01:18:50
art and I have to say that I think the

01:18:46 --> 01:18:52
dynamic memory Network by having

01:18:49 --> 01:18:55
this ability in the episodic memory to

01:18:51 --> 01:18:57
keep track of different sub phrases and

01:18:54 --> 01:18:59
pay attention to those and then combine

01:18:56 --> 01:19:01
them over multiple passes I think you

01:18:58 --> 01:19:04
can kind of get away with not having a

01:19:00 --> 01:19:07
tree structures so yes you might have a

01:19:03 --> 01:19:10
slight improvement representing

01:19:06 --> 01:19:12
sentences as trees in your input module

01:19:09 --> 01:19:14
but I think they're only going to be

01:19:11 --> 01:19:15
slight and I think the episodic memory

01:19:13 --> 01:19:17
module that has this capability to go

01:19:14 --> 01:19:18
ver the input multiple times pay

01:19:16 --> 01:19:20
attention to certain sub phrases will

01:19:17 --> 01:19:22
capture a lot of the kinds of

01:19:19 --> 01:19:23
complexities that you might want to

01:19:21 --> 01:19:25
capture in tree structures so I don't my

01:19:22 --> 01:19:28
short answer is I don't think you

01:19:24 --> 01:19:30
necessarily need it have you tried it we

01:19:27 --> 01:19:35
have not no thanks

01:19:29 --> 01:19:38
hi a question is about question

01:19:34 --> 01:19:40
answering say if we want to apply

01:19:37 --> 01:19:42
questions into some specific domains

01:19:39 --> 01:19:44
that health healthcare but we don't

01:19:41 --> 01:19:47
really have the data we don't have

01:19:43 --> 01:19:50
questions appears and what sure we'll do

01:19:46 --> 01:19:52
are there any general principles here

01:19:49 --> 01:19:53
it's a great question what do you do if

01:19:51 --> 01:19:56
you want to question answering on a

01:19:53 --> 01:19:58
complex domain you don't have the data I

01:19:55 --> 01:20:01
think and this feels maybe like a

01:19:57 --> 01:20:03
cop-out but I think it's very true both

01:20:00 --> 01:20:05
in practice and in theory create the

01:20:02 --> 01:20:07
data like if you cannot possibly create

01:20:04 --> 01:20:09
more than a thousand examples of

01:20:06 --> 01:20:10
anything then maybe automating that

01:20:08 --> 01:20:12
process

01:20:09 --> 01:20:13
is not that important so clearly you

01:20:11 --> 01:20:15
should be able to create some data and

01:20:12 --> 01:20:17
in many cases that is the best use of

01:20:14 --> 01:20:19
your time is just to sit down or ask the

01:20:16 --> 01:20:21
domain expert to create a lot of

01:20:18 --> 01:20:24
questions and then have people find the

01:20:20 --> 01:20:26
answers and then measure how they

01:20:23 --> 01:20:27
actually get to those answers try to

01:20:25 --> 01:20:30
have them in a constrained environment

01:20:26 --> 01:20:31
and so on I think most companies for

01:20:29 --> 01:20:34
instance when you try to do automated

01:20:30 --> 01:20:35
email replies which is in some ways a

01:20:33 --> 01:20:39
little bit similar to question answering

01:20:34 --> 01:20:41
well there's a nice nice nice domain

01:20:38 --> 01:20:43
because everybody had already emailed

01:20:40 --> 01:20:45
there were already answered before so

01:20:42 --> 01:20:47
you can use sort of past behavior now if

01:20:44 --> 01:20:49
you had a search engine where people

01:20:46 --> 01:20:51
asked a lot of questions then you can

01:20:48 --> 01:20:53
also use that too in bootstrap and see

01:20:50 --> 01:20:55
where did they actually fail and then

01:20:52 --> 01:20:57
take all those really tough queries

01:20:54 --> 01:20:58
where they failed have some humans sit

01:20:56 --> 01:21:01
here and collect the data so that's

01:20:57 --> 01:21:03
the simplest answer now the other

01:21:00 --> 01:21:05
answer is let's work together for the

01:21:02 --> 01:21:08
Mexican like many years on research for

01:21:04 --> 01:21:11
smaller training data set sizes and

01:21:07 --> 01:21:13
complex reasoning the the fact of the

01:21:10 --> 01:21:15
matter for that line of research will

01:21:12 --> 01:21:18
still be if you if a system has never

01:21:14 --> 01:21:20
seen a certain type of reasoning I'll be

01:21:17 --> 01:21:23
hard for the systems to pick up that

01:21:19 --> 01:21:25
ype of reasoning I think we're going to

01:21:22 --> 01:21:26
get with these kinds of architectures to

01:21:24 --> 01:21:29
the space where at least if it has seen

01:21:25 --> 01:21:31
this type of reasoning a specific type

01:21:28 --> 01:21:34
of transitive reasoning or temporal

01:21:30 --> 01:21:36
reasoning or sort of cause and effect

01:21:33 --> 01:21:38
ype reasoning at least like a couple

01:21:35 --> 01:21:40
hundred times then you should be able to

01:21:37 --> 01:21:46
train a system with these kinds of

01:21:39 --> 01:21:49
models to do it are these QA systems

01:21:45 --> 01:21:51
currently robust to false input our

01:21:48 --> 01:21:54
questions for the woman playing tennis

01:21:50 --> 01:21:57
if you asked what's the man holding

01:21:53 --> 01:22:00
would it replied there is no man it

01:21:56 --> 01:22:02
would not and largely because at

01:21:59 --> 01:22:04
raining time you never try to mess with

01:22:01 --> 01:22:06
it like that I'm pretty sure if you

01:22:03 --> 01:22:08
added a lot of training examples where

01:22:05 --> 01:22:10
you had those it would probably

01:22:07 --> 01:22:11
eventually pick it up those would be

01:22:09 --> 01:22:14
important for like real-world

01:22:10 --> 01:22:17
implementations and so real-world

01:22:13 --> 01:22:18
implementations of this in security are

01:22:16 --> 01:22:20
actually kind of tricky I think

01:22:17 --> 01:22:22
whenever you train a system we know we

01:22:19 --> 01:22:24
can for instance both steal certain

01:22:21 --> 01:22:26
classifiers by using them a lot

01:22:23 --> 01:22:28
we know we can fool them into

01:22:25 --> 01:22:30
classifying certain images for instance

01:22:27 --> 01:22:33
as others we have folks in the audience

01:22:29 --> 01:22:36
who worked on that exact line of work so

01:22:32 --> 01:22:40
I would be careful using it in security

01:22:35 --> 01:22:43
environments right now yeah I have a

01:22:39 --> 01:22:46
question oh wow

01:22:42 --> 01:22:48
up there yeah I have a question actually

01:22:45 --> 01:22:50
uh there was a slide where you had the

01:22:47 --> 01:22:53
input module and and there were a bunch

01:22:49 --> 01:22:55
of sentences so what those sentences

01:22:52 --> 01:22:57
themselves are n ends because you know

01:22:54 --> 01:23:01
sequence is basically made up of those

01:22:56 --> 01:23:03
individual words in sake love you know

01:23:00 --> 01:23:05
representation so what those you know

01:23:02 --> 01:23:07
also when are n ends that word you know

01:23:04 --> 01:23:09
stitch together or so the answer there

01:23:06 --> 01:23:12
is a little complex because we have two

01:23:08 --> 01:23:15
papers with the dmn and the answer

01:23:11 --> 01:23:17
is different for each the simplest in

01:23:14 --> 01:23:18
the simplest form of that there it is

01:23:16 --> 01:23:20
actually a single

01:23:17 --> 01:23:22
gru that goes from the first word

01:23:19 --> 01:23:24
through all the sentences as if there

01:23:21 --> 01:23:27
are one gigantic sequence and but it has

01:23:23 --> 01:23:29
access to each sentence period at the

01:23:26 --> 01:23:32
nd to pay a special attention to the

01:23:28 --> 01:23:34
nd of sentences and so yes in the

01:23:31 --> 01:23:37
simplest form it is just a giryu that

01:23:33 --> 01:23:38
goes over all the words this is a normal

01:23:36 --> 01:23:42
process to basically just concatenate

01:23:37 --> 01:23:45
all the sentences into one gigantic you

01:23:41 --> 01:23:47
know so the answer there and this is

01:23:44 --> 01:23:49
kind of why I split the the talk into

01:23:46 --> 01:23:51
three different ones from like words

01:23:48 --> 01:23:53
ingle sentences and in multiple

01:23:50 --> 01:23:55
sentences I think if you just had a

01:23:52 --> 01:23:57
single gru that goes over everything and

01:23:54 --> 01:23:58
now you try to reason over that entire

01:23:56 --> 01:24:00
sequence it would not work very well

01:23:57 --> 01:24:03
your read to have an additional

01:23:59 --> 01:24:05
structure such as an intention mechanism

01:24:02 --> 01:24:06
or a pointer mechanism that has the

01:24:04 --> 01:24:09
ability to pay attention to specific

01:24:05 --> 01:24:11
parts of your input to do that very

01:24:08 --> 01:24:12
accurately but yeah in general that's

01:24:10 --> 01:24:15
fine as long as you have this additional

01:24:11 --> 01:24:18
mechanism thank you thank you great

01:24:14 --> 01:24:20
question so in the recurrent neural Nets

01:24:17 --> 01:24:24
you're using sigmoids

01:24:19 --> 01:24:26
in visual recognition I guess are

01:24:23 --> 01:24:29
ctified linear units for the more

01:24:25 --> 01:24:31
popular non-linearity that's right so

01:24:28 --> 01:24:34
rail users are great now when you look

01:24:30 --> 01:24:36
at the GRU equations here and you have

01:24:33 --> 01:24:37
these reset gates and so these reset

01:24:35 --> 01:24:38
gates here

01:24:36 --> 01:24:40
you want them to essentially be be

01:24:37 --> 01:24:42
tween zero and one so that it can

01:24:39 --> 01:24:45
either ignore this input entirely or you

01:24:41 --> 01:24:47
have it normally be part of the

01:24:44 --> 01:24:51
computation of H tilt so in some cases

01:24:46 --> 01:24:55
you really do want to have Sigma lights

01:24:50 --> 01:24:56
there but other ones for instance some

01:24:54 --> 01:24:58
like simpler things where you actually

01:24:55 --> 01:25:00
don't have that much recurrence such as

01:24:57 --> 01:25:02
going from one member state to another

01:24:59 --> 01:25:04
in the second iteration of this model

01:25:01 --> 01:25:09
actually rail used were we're good mom

01:25:03 --> 01:25:12
good like activation functions to did

01:25:08 --> 01:25:14
you guys try to after training this

01:25:11 --> 01:25:17
network try to take these weights for

01:25:13 --> 01:25:19
the images and do object detection again

01:25:16 --> 01:25:24
so these weights would be augmented with

01:25:18 --> 01:25:25
e text victors did you try to use that

01:25:23 --> 01:25:30
is a very cool idea that we did not

01:25:24 --> 01:25:31
explore no there you go you got to do it

01:25:29 --> 01:25:34
fast

01:25:30 --> 01:25:42
yeah feel this feel is moving fast you

01:25:33 --> 01:25:43
just let the cat out of the box so so

01:25:41 --> 01:25:45
those attention models are pretty

01:25:42 --> 01:25:47
powerful when you have an opportunity

01:25:44 --> 01:25:52
data and then you can learn you know to

01:25:46 --> 01:25:54
make make yourself with data but even

01:25:51 --> 01:25:56
though those are some of the tasks are

01:25:53 --> 01:26:00
pretty gets a trivial to human but it's

01:25:55 --> 01:26:02
hard for model tuner so what do you

01:25:59 --> 01:26:04
think of a casinos right now even right

01:26:01 --> 01:26:08
now we have not a non G base on the web

01:26:03 --> 01:26:10
right no inequity pedia we not we know a

01:26:07 --> 01:26:12
lot about you know common sense but how

01:26:09 --> 01:26:16
hat do you think about you cover those

01:26:11 --> 01:26:19
knowledge base into those models I

01:26:15 --> 01:26:21
actually love that line of research too

01:26:18 --> 01:26:23
and that was kind of what we start out

01:26:20 --> 01:26:25
with this semantic memory module in the

01:26:22 --> 01:26:26
simplest form is just word vectors I

01:26:24 --> 01:26:28
think in one next iteration would

01:26:25 --> 01:26:31
activity to have knowledge bases also

01:26:27 --> 01:26:35
influence the reasoning there's very

01:26:30 --> 01:26:37
little work on combining text and

01:26:34 --> 01:26:39
knowledge bases to do overall complex

01:26:36 --> 01:26:41
question answering that requires

01:26:38 --> 01:26:44
reasoning thing is a phenomenally

01:26:40 --> 01:26:46
interesting area of research so where

01:26:43 --> 01:26:48
any night hints or any starting point

01:26:45 --> 01:26:50
about it so there are some photos there

01:26:47 --> 01:26:53
are some papers that

01:26:49 --> 01:26:56
reasoning over knowledge bases alone so

01:26:52 --> 01:26:58
we had a paper on recursive no tensor

01:26:55 --> 01:27:01
networks that basically takes a triplet

01:26:57 --> 01:27:05
a word vector for an entity might be in

01:27:00 --> 01:27:08
freebase might be in word net a relation

01:27:04 --> 01:27:10
a vector for a relationship and a vector

01:27:07 --> 01:27:12
for another entity and then basically

01:27:09 --> 01:27:13
pipe them into a neural network and say

01:27:11 --> 01:27:16
es no are these two entities actually

01:27:12 --> 01:27:18
in that relationship and you can have a

01:27:15 --> 01:27:20
variety of different architectures I

01:27:17 --> 01:27:22
think semi work done on that as well

01:27:19 --> 01:27:25
wait that's a different brother

01:27:21 --> 01:27:29
different Benjy oh I think over there

01:27:24 --> 01:27:31
all right and it's true that's true yeah

01:27:28 --> 01:27:35
if antoine board right that's right

01:27:30 --> 01:27:38
so so i think you can also

01:27:34 --> 01:27:39
reason over knowledge graphs and you

01:27:37 --> 01:27:42
could then try to combine that with

01:27:38 --> 01:27:44
reasoning over fuzzy text it has been a

01:27:41 --> 01:27:46
boat it all has been done i think nobody

01:27:43 --> 01:27:47
has yet really combined it in a

01:27:45 --> 01:27:50
principled way

01:27:46 --> 01:27:53
great question yeah one last question

01:27:49 --> 01:27:56
a whole question so so what the model

01:27:52 --> 01:27:59
answer my questions correctly so how do

01:27:55 --> 01:28:01
i check the model actually understand

01:27:58 --> 01:28:03
understood my question and the woods

01:28:00 --> 01:28:06
which are logic was a models logic

01:28:02 --> 01:28:09
behind that it's a good question in some

01:28:05 --> 01:28:11
ways it's a common question for for

01:28:08 --> 01:28:14
neural network interpretability so

01:28:10 --> 01:28:16
income division at the sometimes we can

01:28:13 --> 01:28:19
at least the visualizes the features

01:28:15 --> 01:28:21
right so how about the right and so i

01:28:18 --> 01:28:23
think the best thing that we could do

01:28:20 --> 01:28:26
right now is to show these attention

01:28:22 --> 01:28:27
scores where you know for sentiment

01:28:25 --> 01:28:29
we're like oh how did it come up the

01:28:26 --> 01:28:31
sentiment oh it paid attention to the

01:28:28 --> 01:28:34
movie working and likewise for question

01:28:30 --> 01:28:35
answering we can see like which facts at

01:28:33 --> 01:28:37
which sentences that actually pay

01:28:34 --> 01:28:40
attention to in order to answer that

01:28:36 --> 01:28:41
overall question so that is I think the

01:28:39 --> 01:28:44
best answer that we could come up with

01:28:40 --> 01:28:46
right now but how yeah there's certain

01:28:43 --> 01:28:48
other complexities that there's still an

01:28:45 --> 01:28:51
area of open resources thank you all

01:28:47 --> 01:28:51
right thank you everybody

01:28:54 --> 01:29:00
so thank you Richard we'll take another

01:28:57 --> 01:29:02
coffee break for 30 minutes so please

01:28:59 --> 01:29:05
come back at 2:45 but for a presentation

01:29:01 --> 01:29:05
by sherry more

<!-- YOUTUBE_TRANSCRIPT_END -->
