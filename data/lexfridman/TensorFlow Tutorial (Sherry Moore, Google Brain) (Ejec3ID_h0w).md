---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Ejec3ID_h0w"
title: "TensorFlow Tutorial (Sherry Moore, Google Brain)"
video_url: "https://www.youtube.com/watch?v=Ejec3ID_h0w"
thumbnail_url: "https://i.ytimg.com/vi/Ejec3ID_h0w/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Ejec3ID_h0w"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 3726
duration_human: "1:02:06"
view_count: 109382
like_count: 988
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:25:02.773Z"
---

# TensorFlow Tutorial (Sherry Moore, Google Brain)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Ejec3ID_h0w
- video_id: Ejec3ID_h0w
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 1:02:06
- view_count: 109382
- like_count: 988
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
so I'm going to take a picture so I

00:00:01 --> 00:00:08
remember how many of you are

00:00:04 --> 00:00:08
here

00:00:08 --> 00:00:16
smile um like Sami says my name is Sher

00:00:11 --> 00:00:18
Moore I work in the Google brain team um

00:00:15 --> 00:00:21
so today I'll be giving a tutorial on

00:00:17 --> 00:00:24
tensor flow first I'll talk a little bit

00:00:20 --> 00:00:28
about what tensor flow is and uh how it

00:00:23 --> 00:00:30
works how we use it at Google and then

00:00:27 --> 00:00:33
the important part is that I'm going to

00:00:29 --> 00:00:37
work with you together to build a couple

00:00:32 --> 00:00:39
models to solve the most classic machine

00:00:36 --> 00:00:42
learning problems so-called get your

00:00:38 --> 00:00:44
feet vat for those of you from New

00:00:41 --> 00:00:47
Zealand anybody from New

00:00:43 --> 00:00:50
Zealand um so hopefully at the end

00:00:46 --> 00:00:53
you'll be going home with all the tools

00:00:49 --> 00:00:55
that you have to build all the wonderful

00:00:52 --> 00:00:58
things that you have watched today like

00:00:54 --> 00:01:01
all the image recognition the training

00:00:57 --> 00:01:03
of different colors Arts making music

00:01:00 --> 00:01:08
so that's the

00:01:02 --> 00:01:11
goal so before I go any further has

00:01:07 --> 00:01:14
everybody installed

00:01:10 --> 00:01:16
tensorflow yay brilliant thank you and I

00:01:13 --> 00:01:18
would like to acknowledge uh so I know

00:01:15 --> 00:01:21
the link here says Sheran but if you

00:01:17 --> 00:01:24
have wolf G uh TF tutorial is perfectly

00:01:20 --> 00:01:26
fine wolf is actually the my colleague

00:01:23 --> 00:01:28
who spent all the time verifying

00:01:25 --> 00:01:30
installation on every single platform so

00:01:27 --> 00:01:32
I would really like to thank him thanks

00:01:29 --> 00:01:34
Wolf if you're you're are watching and

00:01:31 --> 00:01:36
also I have my wonderful product boss or

00:01:33 --> 00:01:37
product manager in the audience

00:01:35 --> 00:01:40
somewhere so if you guys have any

00:01:36 --> 00:01:43
request for tensorflow make sure that

00:01:39 --> 00:01:46
you go find him and tell him why that

00:01:42 --> 00:01:47
ensorflow must support this feature all

00:01:45 --> 00:01:50
right Zach

00:01:47 --> 00:01:54
somewhere all right so there he

00:01:49 --> 00:01:56
is so um with that we can move forward

00:01:53 --> 00:01:58
talk about

00:01:55 --> 00:02:01
ensorflow so what exactly is tensorflow

00:01:58 --> 00:02:04
is a machine learning library

00:02:00 --> 00:02:06
that we developed uh at Google and we

00:02:03 --> 00:02:09
open sourced it last

00:02:05 --> 00:02:11
November and ever since then we have

00:02:08 --> 00:02:15
become the most most popular machine

00:02:11 --> 00:02:18
learning library on GitHub how do we

00:02:14 --> 00:02:20
know because we have over

00:02:17 --> 00:02:23
32,000

00:02:19 --> 00:02:25
Stars those of you who track GitHub you

00:02:22 --> 00:02:27
know how hard it is to get one of those

00:02:24 --> 00:02:31
acknowledgement and we also have over

00:02:26 --> 00:02:35
14,000 forks and we have over 800 no

00:02:31 --> 00:02:37
8,000 contributions from 400 developers

00:02:34 --> 00:02:40
400 individual

00:02:36 --> 00:02:42
developers and we designed this

00:02:39 --> 00:02:45
pecifically for machine learning

00:02:41 --> 00:02:47
however as you'll see later because of

00:02:44 --> 00:02:50
its really flexible data flow

00:02:46 --> 00:02:52
infrastructure um it makes it really

00:02:49 --> 00:02:54
suitable for pretty much any application

00:02:51 --> 00:02:58
that can fit into that model basically

00:02:53 --> 00:03:01
if your model can be asynchronous and

00:02:57 --> 00:03:03
fire on when data is ready you can

00:03:00 --> 00:03:07
probably use tensor

00:03:02 --> 00:03:08
flow it originally we worked alongside

00:03:06 --> 00:03:10
with all the researchers as a matter of

00:03:07 --> 00:03:13
act I was really fortunate when I

00:03:09 --> 00:03:15
joined the team I sat right next to Alex

00:03:12 --> 00:03:18
the person who invented Alex net so

00:03:14 --> 00:03:20
that's how closely we work together as

00:03:17 --> 00:03:23
we develop tensor flow they would tell

00:03:19 --> 00:03:25
us no this is not how we use it yes when

00:03:22 --> 00:03:27
you do this it makes our lives a lot

00:03:24 --> 00:03:29
easier and this is why we believe that

00:03:26 --> 00:03:30
we have developed uh an infrastructure

00:03:28 --> 00:03:31
that will work really well for

00:03:29 --> 00:03:33
esearchers

00:03:30 --> 00:03:35
and also being Google we also always

00:03:32 --> 00:03:38
have in mind that we would like to take

00:03:34 --> 00:03:40
from research to prototyping to

00:03:37 --> 00:03:42
production in no time we don't want to

00:03:39 --> 00:03:44
want you to write all the code that's

00:03:41 --> 00:03:45
typically you know just throwing away we

00:03:43 --> 00:03:47
want you to write code that can

00:03:44 --> 00:03:51
literally cut and paste and saving the

00:03:46 --> 00:03:53
file and and prze it immediately so

00:03:50 --> 00:03:55
tensor flu is really designed with that

00:03:52 --> 00:03:59
in

00:03:54 --> 00:04:02
mind so we are halfway into your uh deep

00:03:58 --> 00:04:03
learning school so can anybody tell me

00:04:01 --> 00:04:08
if you want to build a

00:04:02 --> 00:04:09
neuronet what must you have what are The

00:04:07 --> 00:04:12
Primitives what are

00:04:08 --> 00:04:14
the yeah primitive I think is the word

00:04:11 --> 00:04:16
I'm looking for what must you have to

00:04:13 --> 00:04:21
build a

00:04:15 --> 00:04:21
neuronet anybody what is in the

00:04:22 --> 00:04:31
neuronet answer very good answer so in

00:04:25 --> 00:04:31
the neuronet you have neurons

00:04:31 --> 00:04:37
that's that's right so

00:04:33 --> 00:04:39
in and you need so all these neurons

00:04:36 --> 00:04:41
what do they operate on what do all

00:04:38 --> 00:04:44
these neurons

00:04:40 --> 00:04:47
do they process data data and they

00:04:44 --> 00:04:50
operate on data and they do something

00:04:46 --> 00:04:52
such as convolution matrix

00:04:49 --> 00:04:54
multiplication Max pulling average

00:04:51 --> 00:04:58
pulling Dropout whatever that is so in

00:04:53 --> 00:05:01
tensor flow all the data is held in

00:04:57 --> 00:05:03
something called a tensor

00:05:00 --> 00:05:05
is nothing more than a

00:05:02 --> 00:05:08
multi-dimensional array for those of you

00:05:04 --> 00:05:10
who are familiar with numpy arrays it's

00:05:07 --> 00:05:13
very similar to the ND

00:05:09 --> 00:05:15
array and the graph I think one of the

00:05:12 --> 00:05:17
gentle minority this morning described

00:05:14 --> 00:05:22
there's this concept of the graph which

00:05:16 --> 00:05:23
is a composition of all these um neurons

00:05:21 --> 00:05:26
that do different

00:05:22 --> 00:05:27
functions and all these neurons are

00:05:25 --> 00:05:30
connected to each other through their

00:05:27 --> 00:05:33
inputs and outputs so as data become

00:05:29 --> 00:05:35
aail available they would fire by fire

00:05:32 --> 00:05:37
amend they do what they're designed to

00:05:34 --> 00:05:39
do such as doing matrix multiplication

00:05:36 --> 00:05:41
or convolution and then they will

00:05:38 --> 00:05:43
produce output for the next uh

00:05:40 --> 00:05:48
computation node that's comp connected

00:05:42 --> 00:05:49
to the output so by doing this so I

00:05:47 --> 00:05:50
don't know how many of you can actually

00:05:48 --> 00:05:55
see

00:05:49 --> 00:05:58
this uh animation yeah so this is to

00:05:54 --> 00:06:00
really visualize how tensor flow works

00:05:57 --> 00:06:03
all these notes the oval ones are

00:05:59 --> 00:06:06
computation this rectangle ones are

00:06:02 --> 00:06:09
staple nodes so all these noes they

00:06:05 --> 00:06:11
would generate output or they take input

00:06:08 --> 00:06:14
and as soon as all the inputs for a

00:06:10 --> 00:06:19
particular node are available it would

00:06:13 --> 00:06:21
o its thing produce output and then the

00:06:18 --> 00:06:25
tensor all the data which are how

00:06:20 --> 00:06:30
intensiv will flow through your network

00:06:24 --> 00:06:30
therefore tensor blow yeah

00:06:30 --> 00:06:36
so everybody's like wow this sounds like

00:06:32 --> 00:06:40
magic how does it work so who said is it

00:06:35 --> 00:06:42
Sir Arthur Clark that says any

00:06:39 --> 00:06:44
sufficiently what's the word any

00:06:41 --> 00:06:47
sufficiently advanced technology is

00:06:43 --> 00:06:52
indistinguishable from Magic so that's

00:06:46 --> 00:06:56
what this is it's just really

00:06:51 --> 00:06:56
awesome excuse me for a

00:06:55 --> 00:07:00
second I know I want I want to get

00:06:57 --> 00:07:01
hrough this as quickly as possible so

00:06:59 --> 00:07:02
we can actually do the lab that you're

00:07:00 --> 00:07:05
all dying to

00:07:01 --> 00:07:08
do so as any good infrastructure so this

00:07:04 --> 00:07:11
I want to give you a little image of

00:07:07 --> 00:07:13
you know how we Design This in uh tensor

00:07:10 --> 00:07:16
flow just like any well-designed

00:07:12 --> 00:07:18
infrastructure has to be really modular

00:07:15 --> 00:07:21
because being modular allows you to uh

00:07:17 --> 00:07:24
innovate to upgrade to improve to modify

00:07:20 --> 00:07:27
to do whatever you want with any pce as

00:07:23 --> 00:07:29
long as you keep the apis consistent

00:07:26 --> 00:07:31
everybody can work in parallel it's

00:07:28 --> 00:07:32
really empowering I think that's one of

00:07:30 --> 00:07:34
the wonderful things that's done at

00:07:31 --> 00:07:36
Google pretty much any infrastructure at

00:07:33 --> 00:07:38
Google is really modular they talk

00:07:35 --> 00:07:43
really about to each other all you need

00:07:37 --> 00:07:46
to maintain this API um what stability

00:07:42 --> 00:07:48
so in this case we have a friend end I

00:07:45 --> 00:07:50
think you you guys must have seen some

00:07:47 --> 00:07:53
xamples of how you construct a graph so

00:07:49 --> 00:07:55
we have the front end libraries written

00:07:52 --> 00:07:57
your favorite language and if C++ and

00:07:54 --> 00:07:59
python is not your favorite language

00:07:56 --> 00:08:01
feel free to contribute we always

00:07:58 --> 00:08:03
welcome contribution

00:08:00 --> 00:08:05
so you write you constru your graph in

00:08:02 --> 00:08:09
your favorite language and this graph

00:08:04 --> 00:08:12
will be sent to we call the core tens FL

00:08:08 --> 00:08:13
execution system that's your run time

00:08:11 --> 00:08:16
and that's what you all will be running

00:08:12 --> 00:08:20
today on your laptop when you open your

00:08:15 --> 00:08:23
uh your python notebook or Jupiter

00:08:19 --> 00:08:27
notebook so the execution run time

00:08:22 --> 00:08:29
depending on where you are going to run

00:08:26 --> 00:08:32
this uh application it will send the

00:08:28 --> 00:08:34
kernel to the corresponding device so it

00:08:31 --> 00:08:38
could be a CPU could be a GPU could be

00:08:33 --> 00:08:39
your phone could be TPU anybody knows

00:08:37 --> 00:08:44
what TPU

00:08:38 --> 00:08:45
is brilliant very nice I was say Strat

00:08:43 --> 00:08:48
has say anybody knows what TPU is

00:08:44 --> 00:08:52
everybody is like

00:08:47 --> 00:08:55
translation so this is good so just to

00:08:51 --> 00:08:57
highlight our portability today you'll

00:08:54 --> 00:09:00
be running tensible on your laptop we

00:08:56 --> 00:09:02
run it in our data center you everybody

00:08:59 --> 00:09:04
they can run it on your iOS on your

00:09:01 --> 00:09:07
iPhone your uh Android

00:09:03 --> 00:09:09
phone I would love to see people putting

00:09:06 --> 00:09:10
out on Raspberry Pi because can you

00:09:08 --> 00:09:11
imagine you can just write your own

00:09:09 --> 00:09:14
tensorflow

00:09:10 --> 00:09:16
application it could be your security

00:09:13 --> 00:09:18
system because you know somebody just

00:09:15 --> 00:09:19
ole my bike and my security camera

00:09:17 --> 00:09:23
capture all this grainy stuff that I

00:09:19 --> 00:09:25
cannot tell wouldn't it be nice if you

00:09:22 --> 00:09:28
do machine learning on this thing and it

00:09:24 --> 00:09:29
just start taking high resolution

00:09:27 --> 00:09:32
pictures you know when when things are

00:09:28 --> 00:09:34
moving rather than constantly capturing

00:09:31 --> 00:09:36
all the greeny images which is totally

00:09:33 --> 00:09:39
useless so I think the application

00:09:35 --> 00:09:42
literally applications are Limitless you

00:09:38 --> 00:09:45
know your imagination is the

00:09:41 --> 00:09:47
limit

00:09:44 --> 00:09:50
so uh we talked about what tensor flow

00:09:46 --> 00:09:52
is how it works how do we use it at

00:09:49 --> 00:09:55
Google we use it everywhere I think you

00:09:51 --> 00:09:57
have seen some of the examples we use it

00:09:54 --> 00:09:59
o recognize pictures this is actually

00:09:56 --> 00:10:03
done with Inception they can recognize

00:09:58 --> 00:10:05
out of the box um one of a thousand

00:10:02 --> 00:10:07
images you have to retrain it if you

00:10:04 --> 00:10:09
wanted to recognize that your all your

00:10:06 --> 00:10:12
elatives or you know your pads but it's

00:10:08 --> 00:10:13
not difficult and we I have links you

00:10:11 --> 00:10:15
know for you to actually if you want to

00:10:12 --> 00:10:17
train on your own images it's really

00:10:14 --> 00:10:19
easy that you should totally try it

00:10:16 --> 00:10:21
would it be fun if you go to your

00:10:18 --> 00:10:23
elative your 40y year reunion you just

00:10:20 --> 00:10:26
go I know you who you are I know who you

00:10:22 --> 00:10:29
are you know just show off a little it

00:10:25 --> 00:10:31
would be brilliant and we also use it to

00:10:28 --> 00:10:34
do go voice

00:10:30 --> 00:10:38
search this is one that's super awesome

00:10:33 --> 00:10:40
so how many of you use Smart reply have

00:10:37 --> 00:10:43
you ever Ed smart reply yeah yeah this

00:10:39 --> 00:10:44
awesome especially for those of you

00:10:42 --> 00:10:47
who doing what you're not supposed to do

00:10:43 --> 00:10:49
you know texting while driving you you

00:10:46 --> 00:10:52
saw an email coming in and you can just

00:10:48 --> 00:10:54
say oh yes I'll be there you know so uh

00:10:51 --> 00:10:58
based on the statistics that we

00:10:53 --> 00:10:59
collected in February over 10% of the

00:10:57 --> 00:11:02
all the responses sent on mobile is

00:10:59 --> 00:11:05
actually done by our smart reply that's

00:11:01 --> 00:11:07
a I I believe if we have um maybe Zach

00:11:04 --> 00:11:10
can collect some stats for me later and

00:11:06 --> 00:11:12
maybe by now it'll be like

00:11:09 --> 00:11:14
80% it's actually really funny at the

00:11:11 --> 00:11:18
very beginning when we train it the

00:11:13 --> 00:11:20
first answer is always I love you we're

00:11:17 --> 00:11:22
like that's probably the right not the

00:11:19 --> 00:11:22
right

00:11:22 --> 00:11:29
answer we also play games all of you I'm

00:11:25 --> 00:11:31
sure have followed this there all kinds

00:11:28 --> 00:11:33
of games that are being developed it's

00:11:30 --> 00:11:35
really fun to watch if you watch it

00:11:32 --> 00:11:38
literally come up with scenarios for you

00:11:34 --> 00:11:40
to play as well it not only learns to

00:11:37 --> 00:11:43
play the game but learns how to make a

00:11:39 --> 00:11:46
game for you it's it's fascinating and

00:11:42 --> 00:11:47
of course art and I think many of you

00:11:45 --> 00:11:49
have done this deep dream if we have

00:11:46 --> 00:11:53
time in the end of the lab we can we can

00:11:48 --> 00:11:55
try this um so if we are super fast we

00:11:52 --> 00:11:58
can all try the mix some

00:11:54 --> 00:11:59
art and all those what I just talked

00:11:57 --> 00:12:00
about of course Google being this

00:11:58 --> 00:12:03
wonderful

00:11:59 --> 00:12:05
generous company wants to share our

00:12:02 --> 00:12:08
knowledge so we have actually published

00:12:04 --> 00:12:10
our our models so if you go to that link

00:12:07 --> 00:12:13
you'll find all these

00:12:09 --> 00:12:16
Inception and captioning um language

00:12:12 --> 00:12:18
model on a billion words the latest rest

00:12:15 --> 00:12:20
net on c410 sequence to sequence which I

00:12:17 --> 00:12:23
think quac will be talking about

00:12:19 --> 00:12:26
omorrow and and there were we have many

00:12:22 --> 00:12:29
other high level libraries so today my

00:12:25 --> 00:12:32
lab the lab that we will do will be on

00:12:28 --> 00:12:35
the cour tensor flow apis but there are

00:12:31 --> 00:12:38
tons of new higher level apis such as uh

00:12:34 --> 00:12:41
some of the mention cares and we have

00:12:37 --> 00:12:43
slim we have pretty tensor we have TF

00:12:41 --> 00:12:46
learn we have many libraries that's

00:12:43 --> 00:12:48
developed on top of the core tensor flow

00:12:45 --> 00:12:50
apis that we encourage people to do so

00:12:47 --> 00:12:52
if whatever is out there does not fit

00:12:49 --> 00:12:54
your needs perfectly go for it develop

00:12:51 --> 00:12:57
your own and we welcome the contribution

00:12:54 --> 00:12:59
we published a lot of that here I might

00:12:56 --> 00:13:01
have blurred some of the boundaries but

00:12:58 --> 00:13:03
hese are basically all the models and

00:13:00 --> 00:13:05
libraries that we we have produced and

00:13:02 --> 00:13:07
we really love

00:13:04 --> 00:13:10
contribution um if you have developed a

00:13:06 --> 00:13:12
really cool model please do send to us

00:13:09 --> 00:13:15
and we would you know we would showcase

00:13:11 --> 00:13:18
your uh your

00:13:14 --> 00:13:20
work so that's the introduction of

00:13:17 --> 00:13:23
tensorflow how does everybody feel are

00:13:19 --> 00:13:27
you all ready to get

00:13:22 --> 00:13:29
started all right so okay before you

00:13:26 --> 00:13:31
bring up your python notebook I want to

00:13:28 --> 00:13:33
say what we are going to to do first

00:13:30 --> 00:13:35
okay so as I mentioned there are two

00:13:32 --> 00:13:38
classic machine learning problems that

00:13:34 --> 00:13:40
everybody does one is uh linear

00:13:37 --> 00:13:42
egression the other is classification

00:13:39 --> 00:13:43
so we're going to do two simple labs to

00:13:41 --> 00:13:45
cover

00:13:42 --> 00:13:47
those um I do have a lot of small

00:13:44 --> 00:13:48
exercises you can play with it I

00:13:46 --> 00:13:51
encourage you to play with it to be a

00:13:47 --> 00:13:52
lot more comfortable so the first one is

00:13:50 --> 00:13:54
linear

00:13:51 --> 00:13:56
egression so I'm sure it has been

00:13:53 --> 00:13:58
covered yeah in today's lectures

00:13:55 --> 00:14:02
omebody must have covered linear

00:13:57 --> 00:14:04
egression can you can anybody give me a

00:14:01 --> 00:14:05
on line summary what is the linear

00:14:03 --> 00:14:08
egression

00:14:04 --> 00:14:08
problem

00:14:08 --> 00:14:12
anybody the

00:14:13 --> 00:14:18
professors well if you don't know go

00:14:16 --> 00:14:22
Google

00:14:17 --> 00:14:25
it so I didn't know the the audience um

00:14:21 --> 00:14:28
you know when when Sami asked me to do

00:14:24 --> 00:14:30
this so I wanted to I I wrote this for U

00:14:27 --> 00:14:32
one of the high schools so I think it

00:14:29 --> 00:14:33
still kind of makes sense right because

00:14:31 --> 00:14:36
all of us have done have played this

00:14:33 --> 00:14:39
game at one point of our lives like I

00:14:35 --> 00:14:42
you know if you if you tell me five or

00:14:38 --> 00:14:43
tell you 10 and you try to guess you

00:14:41 --> 00:14:45
know what the equation is we must have

00:14:42 --> 00:14:47
all done this I think my friends are

00:14:44 --> 00:14:50
still doing on Facebook saying oh you

00:14:46 --> 00:14:52
know only genius can solve this kind of

00:14:49 --> 00:14:54
equation and then they would be like

00:14:51 --> 00:14:56
yeah you know I solved it I was like my

00:14:53 --> 00:14:58
God if anybody you know I will unfriend

00:14:55 --> 00:15:01
you guys if you click on another one of

00:14:57 --> 00:15:04
those so but basically this is what we

00:15:00 --> 00:15:06
are trying to do in the first lab so we

00:15:03 --> 00:15:08
will have a mystery equation it's really

00:15:05 --> 00:15:10
simple it's just a linear you know

00:15:07 --> 00:15:13
literally a line and then I will tell

00:15:09 --> 00:15:15
you that this is you know the formula

00:15:12 --> 00:15:17
but I'm not going to give you a weight w

00:15:14 --> 00:15:20
and B you know all of you have learned

00:15:16 --> 00:15:23
by now W stands for weight and and bias

00:15:19 --> 00:15:26
b stands for bias so the idea is that if

00:15:22 --> 00:15:29
you're given enough samples if you're

00:15:25 --> 00:15:32
given enough X and Y values you should

00:15:28 --> 00:15:34
be able to make a pretty good guess what

00:15:31 --> 00:15:39
w and B is so that's what we are going

00:15:33 --> 00:15:43
to do so now you can bring up your uh

00:15:38 --> 00:15:43
Jupiter notebook if you don't have it up

00:15:43 --> 00:15:51
already yeah everybody have it

00:15:46 --> 00:15:55
up yes can I see a short of hands

00:15:50 --> 00:16:00
everybody those of yeah brilliant all

00:15:54 --> 00:16:01
right so um for pretty much any models

00:15:59 --> 00:16:04
these are going to come up over and over

00:16:01 --> 00:16:07
again and just to make sure that you're

00:16:03 --> 00:16:10
all paying attention I do have

00:16:06 --> 00:16:13
uh I asked him if I was supposed to

00:16:09 --> 00:16:14
bring Shrek and he said no but I do have

00:16:12 --> 00:16:17
a lot of tensorflow stickers and I have

00:16:14 --> 00:16:19
all kinds of little toys so later I'm

00:16:17 --> 00:16:24
going to ask this question whoever can

00:16:18 --> 00:16:26
swer will get some mystery present so

00:16:23 --> 00:16:28
really pay attention Okay so pretty much

00:16:25 --> 00:16:30
with when whenever you build any model

00:16:27 --> 00:16:33
there are I would say four things that

00:16:29 --> 00:16:35
you will need you need input you need

00:16:32 --> 00:16:37
ata so you're going to see in both Labs

00:16:34 --> 00:16:39
we're going to be defining some data

00:16:36 --> 00:16:40
you're going to be build building an

00:16:38 --> 00:16:43
inference graph I think in other

00:16:39 --> 00:16:46
lectures is also called a forward graph

00:16:43 --> 00:16:49
to the point that it produces

00:16:45 --> 00:16:52
Logics the logistic outputs and then

00:16:48 --> 00:16:54
you're going to have a training training

00:16:51 --> 00:16:57
operations which is where you would

00:16:53 --> 00:17:00
Define a loss an

00:16:56 --> 00:17:01
Optimizer and

00:16:59 --> 00:17:04
I think that's pretty much it hang on

00:17:00 --> 00:17:06
and there's the fourth

00:17:03 --> 00:17:08
ing yeah and then you will basically

00:17:05 --> 00:17:10
run the graph so the three important

00:17:07 --> 00:17:12
hings okay you'll always have your data

00:17:09 --> 00:17:15
your inference graph you always have to

00:17:11 --> 00:17:17
Define your loss and your

00:17:14 --> 00:17:19
Optimizer and the training is basically

00:17:16 --> 00:17:20
to minimize your loss so I'm going to be

00:17:18 --> 00:17:23
asking that

00:17:19 --> 00:17:25
later all right so now we know what

00:17:22 --> 00:17:27
we're going to do so you can go start go

00:17:24 --> 00:17:31
to that

00:17:26 --> 00:17:34
lab yeah everybody have it so shift

00:17:30 --> 00:17:36
return We Run the first one you say I

00:17:33 --> 00:17:39
have no idea what's Happening Here

00:17:35 --> 00:17:41
turn again still nothing however let's

00:17:38 --> 00:17:43
ee what we are producing here so you

00:17:41 --> 00:17:45
can also do the same on your laptop you

00:17:42 --> 00:17:48
can

00:17:44 --> 00:17:50
uncomment that plot you say so you know

00:17:48 --> 00:17:54
hat kind of data you're generating so

00:17:49 --> 00:17:57
in this case when he return what are we

00:17:54 --> 00:17:59
seeing this is your input data this is

00:17:56 --> 00:18:01
when you try to make a guess when your

00:17:58 --> 00:18:03
friend tell me oh you know give me

00:18:00 --> 00:18:06
your X and Y so this is that you know

00:18:02 --> 00:18:09
hen your X is 0.2 you know your Y is

00:18:05 --> 00:18:11
0.32 so this is basically your input

00:18:08 --> 00:18:14
data yeah everybody

00:18:11 --> 00:18:17
following if at any point you're kind of

00:18:13 --> 00:18:20
lost raise your hand and your buddy next

00:18:16 --> 00:18:20
o you will be able to help

00:18:21 --> 00:18:28
you so now so oh okay I want to say one

00:18:25 --> 00:18:32
more thing so today the laughs are all

00:18:27 --> 00:18:33
on really core tensorflow apis the

00:18:31 --> 00:18:35
reason I want to do that I know there

00:18:32 --> 00:18:38
are a lot of people who would use carot

00:18:34 --> 00:18:42
use uh another thing that we we heavily

00:18:37 --> 00:18:45
advertised which is contri contri learn

00:18:41 --> 00:18:48
so I feel like I'm giving you all the

00:18:44 --> 00:18:52
ingredients so even though you could go

00:18:47 --> 00:18:53
to Whole Foods and buy the package meal

00:18:51 --> 00:18:55
you know maybe one day you don't like

00:18:52 --> 00:18:59
the way they cook it so I'm giving you

00:18:54 --> 00:19:01
all your lobsters your Kobe beef Okay so

00:18:58 --> 00:19:03
that you can actually assemble whatever

00:19:00 --> 00:19:07
you want to build

00:19:02 --> 00:19:10
yourself so this um next one is very key

00:19:06 --> 00:19:13
it's a very key concept here you see

00:19:09 --> 00:19:17
variables so variable intensive flow is

00:19:12 --> 00:19:19
how is corresponding to the square any

00:19:16 --> 00:19:23
of you remember this slide okay I'm

00:19:18 --> 00:19:23
going to switch quickly don't freak

00:19:24 --> 00:19:30
out so actually I wanted you all to

00:19:26 --> 00:19:32
commit this little graph to

00:19:29 --> 00:19:34
your memory because you'll be seeing

00:19:31 --> 00:19:36
this over and over again and it makes a

00:19:33 --> 00:19:37
lot more sense when you have this visual

00:19:35 --> 00:19:40
uh

00:19:36 --> 00:19:44
representation so intensive flow the way

00:19:40 --> 00:19:47
we hold all the data the weights and the

00:19:43 --> 00:19:49
biases associate associated with your

00:19:46 --> 00:19:51
network is using something called

00:19:48 --> 00:19:54
variable it's a state fold

00:19:50 --> 00:19:57
operation I'm going to switch back

00:19:53 --> 00:20:00
okay so this is what we are doing in

00:19:56 --> 00:20:04
section 1.3 we are building

00:19:59 --> 00:20:05
those uh Square nodes in your network to

00:20:03 --> 00:20:08
hold these weights and variables and

00:20:04 --> 00:20:10
they are the ones when you train that's

00:20:07 --> 00:20:12
where the gradients will be applied to

00:20:09 --> 00:20:15
so that they will eventually

00:20:11 --> 00:20:17
resemble the target Network that you're

00:20:14 --> 00:20:20
are trying to to train

00:20:16 --> 00:20:24
for so now you have built it wonderful

00:20:19 --> 00:20:25
okay so you can shift return do you see

00:20:23 --> 00:20:28
anything

00:20:25 --> 00:20:31
no so exactly what have we built that's

00:20:27 --> 00:20:33
un commmon a

00:20:30 --> 00:20:36
look so these are called the variable

00:20:32 --> 00:20:40
objects so at the bottom of the slide

00:20:35 --> 00:20:44
for for this slab I have a link which is

00:20:39 --> 00:20:45
our Google 3 docs the API docs which is

00:20:43 --> 00:20:48
available in

00:20:44 --> 00:20:50
GitHub I think you should always have

00:20:47 --> 00:20:52
that up so whenever you want to do

00:20:49 --> 00:20:55
something you would know what kind of

00:20:51 --> 00:20:58
operations are possible with this object

00:20:54 --> 00:21:00
for example I can say here what's the

00:20:57 --> 00:21:01
name

00:20:59 --> 00:21:04
of

00:21:00 --> 00:21:06
this oh it's called variable six why is

00:21:03 --> 00:21:08
it called variable six oh it's because

00:21:05 --> 00:21:11
when I create this variable I didn't

00:21:08 --> 00:21:13
give it a name so I can say

00:21:10 --> 00:21:18
sheres

00:21:12 --> 00:21:18
Sherry wait I hope that's

00:21:17 --> 00:21:22
not but so see now my variable is called

00:21:20 --> 00:21:25
Sherry

00:21:21 --> 00:21:27
weight same thing with

00:21:24 --> 00:21:31
my so this would be a good practice

00:21:26 --> 00:21:31
because L later

00:21:42 --> 00:21:48
bi oh because I ran this so many times

00:21:45 --> 00:21:50
every single time you run if you don't

00:21:47 --> 00:21:52
restart that it's going to continue to

00:21:49 --> 00:21:56
grow your current path So to avoid that

00:21:51 --> 00:22:00
confusion let me restart

00:21:55 --> 00:22:00
it restart

00:22:05 --> 00:22:09
I had to

00:22:19 --> 00:22:25
sorry so now so we have done build our

00:22:23 --> 00:22:28
input build our inference graph now we

00:22:24 --> 00:22:30
can actually build our training graph

00:22:28 --> 00:22:34
and as you have all learned we need to

00:22:29 --> 00:22:36
define a loss function we need to Define

00:22:33 --> 00:22:39
an Optimizer I think it's also called

00:22:35 --> 00:22:41
something else reg regularizer maybe

00:22:38 --> 00:22:44
some other terms and your ultimate goal

00:22:40 --> 00:22:46
is to minimize your loss so I'm not

00:22:43 --> 00:22:48
going to do it here but you can do it at

00:22:45 --> 00:22:52
your at your leisure you can you know

00:22:47 --> 00:22:54
uncommon all the these things that you

00:22:51 --> 00:22:55
have created and see what they are and I

00:22:53 --> 00:22:58
can tell you these are different

00:22:54 --> 00:23:00
operations so that's how you actually

00:22:57 --> 00:23:02
get to learn about the network that you

00:22:59 --> 00:23:04
have built really well in the next line

00:23:01 --> 00:23:08
I'm also not going to uncommon but you

00:23:03 --> 00:23:10
should at one point this is how you can

00:23:07 --> 00:23:11
see what you have built so

00:23:09 --> 00:23:14
actually why don't I do that because

00:23:11 --> 00:23:17
this is really critical and as you debug

00:23:13 --> 00:23:17
this will

00:23:17 --> 00:23:23
become so this is the network that you

00:23:20 --> 00:23:25
have built they have names different

00:23:22 --> 00:23:28
names they have inputs and outputs they

00:23:24 --> 00:23:31
have attributes and this is how we

00:23:27 --> 00:23:33
connect all these nose together this is

00:23:30 --> 00:23:35
your neuronet so what you have what

00:23:32 --> 00:23:39
you're seeing right now is your neuronet

00:23:34 --> 00:23:41
hat you have just built yeah everybody

00:23:38 --> 00:23:44
following so now the next step now

00:23:40 --> 00:23:46
you're done right you build your network

00:23:43 --> 00:23:47
you build all your training now you can

00:23:45 --> 00:23:50
let's do some

00:23:46 --> 00:23:52
training so in tensorflow do you

00:23:49 --> 00:23:54
remember in the architecture that I

00:23:51 --> 00:23:56
showed you have the front end C++ and

00:23:53 --> 00:23:58
python front end you use that to build

00:23:55 --> 00:24:01
your graphs and then you send the graph

00:23:58 --> 00:24:02
to your runtime and this is exactly what

00:24:00 --> 00:24:04
we're doing here whenever you this is

00:24:01 --> 00:24:06
how we talk to the runtime we create

00:24:03 --> 00:24:08
something called a session you get a

00:24:05 --> 00:24:11
handle to the session and then when you

00:24:08 --> 00:24:14
say run you're basically sending this

00:24:10 --> 00:24:16
ession your graph so this is different

00:24:13 --> 00:24:19
from the other uh machine learning

00:24:15 --> 00:24:21
libraries I forgot which one those are

00:24:18 --> 00:24:23
So-Cal imperative your happens as your

00:24:20 --> 00:24:25
type tensorflow is different you have to

00:24:22 --> 00:24:27
construct your graph and then you'll

00:24:24 --> 00:24:29
create a session to talk to your runtime

00:24:26 --> 00:24:33
so that it knows how to run different

00:24:28 --> 00:24:36
devices that's a very important concept

00:24:32 --> 00:24:37
because people constantly compare and

00:24:35 --> 00:24:41
it's just

00:24:36 --> 00:24:43
different okay so

00:24:40 --> 00:24:46
now you can also accon that to see what

00:24:42 --> 00:24:48
he initial values are but we're not

00:24:45 --> 00:24:52
going to do that we're just going to run

00:24:47 --> 00:24:52
it and now we're going to

00:24:53 --> 00:24:59
train the data is not so what do you

00:24:56 --> 00:25:03
think of the data

00:24:58 --> 00:25:03
did we succeed in

00:25:02 --> 00:25:08
guessing is everybody following what we

00:25:05 --> 00:25:12
are trying to

00:25:07 --> 00:25:15
do yeah yes

00:25:11 --> 00:25:16
no so what was our object objective

00:25:14 --> 00:25:19
before I started the lab what did I say

00:25:15 --> 00:25:22
my our objective

00:25:19 --> 00:25:24
was yes to guess the mystery function so

00:25:21 --> 00:25:27
have we

00:25:23 --> 00:25:29
suceeded it's really hard to tell all

00:25:26 --> 00:25:32
right so now all of you can go go to the

00:25:28 --> 00:25:35
nd and un comment this part let's see

00:25:31 --> 00:25:35
how successful we

00:25:40 --> 00:25:49
are so the green line was what we have

00:25:44 --> 00:25:53
initialized our weight and bias

00:25:48 --> 00:25:55
to yeah the blue dots were the initial

00:25:52 --> 00:25:59
value the target

00:25:55 --> 00:26:03
values and the red dots is is our

00:25:58 --> 00:26:07
trained value make sense so how

00:26:02 --> 00:26:11
successful are we great big success yeah

00:26:06 --> 00:26:13
I would say so so any

00:26:10 --> 00:26:15
questions any questions so far so what

00:26:13 --> 00:26:17
are the things so everybody should play

00:26:14 --> 00:26:19
with this you're not going to break it

00:26:16 --> 00:26:21
his is a notebook python notebook the

00:26:18 --> 00:26:23
worst you that happens is they just say

00:26:20 --> 00:26:25
Okay clear all like what I just did and

00:26:22 --> 00:26:27
change it so what can you play with

00:26:24 --> 00:26:29
since today you learn all this Concepts

00:26:26 --> 00:26:31
about different loss functions different

00:26:28 --> 00:26:34
op optimizers all this crazy different

00:26:30 --> 00:26:37
inputs different data so now you can

00:26:33 --> 00:26:41
play with it how about instead of um

00:26:36 --> 00:26:42
let's pick one um so instead

00:26:40 --> 00:26:47
[Music]

00:26:42 --> 00:26:49
of gradient descent what are the other

00:26:46 --> 00:26:51
optimizers how can you find out I guess

00:26:48 --> 00:26:53
that's a better question if I want to

00:26:50 --> 00:26:55
know what other optimizers are available

00:26:52 --> 00:26:59
in tensor Flor how can I find

00:26:54 --> 00:27:03
out very good yes the GitHub good go

00:26:58 --> 00:27:06
Google 3 the G3 dog link with the

00:27:02 --> 00:27:09
apis I'm going to switch one more tab

00:27:05 --> 00:27:11
ear with me so this is when you go

00:27:08 --> 00:27:15
there this is what you can find you can

00:27:11 --> 00:27:18
find all the let me make it

00:27:14 --> 00:27:21
bigger so you can find all the different

00:27:17 --> 00:27:23
optimizers so you can play with that so

00:27:20 --> 00:27:25
maybe uh gradient descent is not the

00:27:22 --> 00:27:27
best Optimizer you can use so you go

00:27:24 --> 00:27:29
there and say why are the other

00:27:26 --> 00:27:30
optimizers

00:27:28 --> 00:27:32
and then you can literally come here and

00:27:29 --> 00:27:35
search

00:27:31 --> 00:27:40
Optimizer or you can say wow you know I

00:27:34 --> 00:27:43
have add the Delta ADR Adam I'm sure

00:27:39 --> 00:27:45
there are more a momentum so we also

00:27:42 --> 00:27:47
welcome contribution if you don't like

00:27:44 --> 00:27:50
any of these please do you know go

00:27:46 --> 00:27:52
contribute write a new Optimizer send a

00:27:49 --> 00:27:54
pool request would love to have it so I

00:27:51 --> 00:27:56
would like to say this over and over

00:27:53 --> 00:27:58
again we love contribution it's an open

00:27:55 --> 00:28:00
source project so keep that in mind we

00:27:57 --> 00:28:03
would love to see your code or your

00:27:59 --> 00:28:05
models on

00:28:02 --> 00:28:07
GitHub

00:28:04 --> 00:28:09
so

00:28:06 --> 00:28:12
um back to this

00:28:08 --> 00:28:17
one how is everybody feeling this is too

00:28:11 --> 00:28:17
simple yeah should we go W just

00:28:22 --> 00:28:28
yes can I say that one

00:28:37 --> 00:28:44
oh is that right heit tap to see all the

00:28:40 --> 00:28:46
other optimizers you man oh brilliant

00:28:43 --> 00:28:49
see I didn't even know that learn

00:28:45 --> 00:28:51
something new every day let me go

00:28:48 --> 00:28:53
there

00:28:50 --> 00:28:56
tap

00:28:52 --> 00:29:00
here oh

00:28:55 --> 00:29:03
yay so this is even easier thank you

00:28:59 --> 00:29:06
clearly I don't program in Notebook as

00:29:02 --> 00:29:08
often as I should have so this is where

00:29:05 --> 00:29:11
you can all the wonderful things that

00:29:07 --> 00:29:11
you can do thank

00:29:11 --> 00:29:17
you this is probably a little too low

00:29:14 --> 00:29:19
level I think it has

00:29:16 --> 00:29:20
everything but that's a very good tip

00:29:18 --> 00:29:23
thank

00:29:19 --> 00:29:25
you so anything else you would like to

00:29:22 --> 00:29:27
see with linear regression is too simple

00:29:24 --> 00:29:29
you guys all want to re recognize some

00:29:26 --> 00:29:32
digits

00:29:28 --> 00:29:36
all right so that sounds like a

00:29:31 --> 00:29:38
consensus to me so let's move if you

00:29:35 --> 00:29:41
just go to the bottom you can say click

00:29:37 --> 00:29:41
on this

00:29:50 --> 00:29:56
one so this is our M this

00:29:52 --> 00:29:59
model so before we start the lab so once

00:29:55 --> 00:30:01
again what are we trying to do

00:29:58 --> 00:30:03
so we have all these handwritten digits

00:30:00 --> 00:30:07
what does amness stand for does anybody

00:30:02 --> 00:30:07
know what does amness stand

00:30:11 --> 00:30:19
for very good see some of they can

00:30:14 --> 00:30:22
Google very good so it has it's St I

00:30:18 --> 00:30:24
think makes National Institute of

00:30:21 --> 00:30:26
Standards and Technology something like

00:30:23 --> 00:30:29
that so they have this giant collection

00:30:25 --> 00:30:31
of digits so you know if you go to the

00:30:29 --> 00:30:33
Post Office you already know that it's a

00:30:30 --> 00:30:35
trivial it's a solved problem but I

00:30:32 --> 00:30:38
don't know if they actually use machine

00:30:34 --> 00:30:40
learning but our goal today is to build

00:30:37 --> 00:30:44
a little network using tensor

00:30:39 --> 00:30:47
flow that can recognize these

00:30:43 --> 00:30:50
digits once again we will not have all

00:30:46 --> 00:30:53
the answers right so all we know is that

00:30:49 --> 00:30:54
he network the input will give us one

00:30:52 --> 00:30:58
and then we'll say it's a

00:30:54 --> 00:31:00
nine and then the uh the in and then we

00:30:57 --> 00:31:02
have the so-call ground truth and then

00:31:00 --> 00:31:04
they will look at it and say no you're

00:31:01 --> 00:31:05
wrong and then we'll have to say okay

00:31:03 --> 00:31:08
fine this is the difference we're going

00:31:04 --> 00:31:09
to train the network that way so that's

00:31:07 --> 00:31:12
our

00:31:09 --> 00:31:17
goal yeah do everybody see the network

00:31:11 --> 00:31:17
on the side so now we can go to the

00:31:19 --> 00:31:24
lab so can anybody tell me why are the

00:31:21 --> 00:31:26
three or four things that's really

00:31:23 --> 00:31:29
important whenever you build a network

00:31:25 --> 00:31:31
what's the first one

00:31:28 --> 00:31:35
your data second

00:31:30 --> 00:31:38
one inference graph third

00:31:34 --> 00:31:41
one your train graph and with this lab

00:31:37 --> 00:31:43
I'm going to teach you a little bit more

00:31:40 --> 00:31:45
they are like the the rock you know like

00:31:42 --> 00:31:47
when you go to restaurant I not only

00:31:44 --> 00:31:48
give you your Lobster your your Kobe

00:31:46 --> 00:31:51
ef I'm also going to give you a little

00:31:47 --> 00:31:54
rock so you can cook it okay so in this

00:31:50 --> 00:31:55
lab I've also teach some absolute

00:31:53 --> 00:31:58
ly critical additional

00:31:55 --> 00:32:01
infrastructure pieces such as how to

00:31:57 --> 00:32:03
save a checkpoint how to load from a

00:32:00 --> 00:32:05
checkpoint and how do you evaluate your

00:32:02 --> 00:32:07
network I think somebody at one point

00:32:04 --> 00:32:09
asked how do you know the network is

00:32:06 --> 00:32:11
enough you evaluate it to see if it's

00:32:08 --> 00:32:13
good enough so those are the three new

00:32:10 --> 00:32:17
pieces of information that I'll be

00:32:12 --> 00:32:20
teaching you and also I'll teach you a

00:32:16 --> 00:32:23
really really useful concept it's called

00:32:19 --> 00:32:24
placeholder that was requested by all

00:32:22 --> 00:32:27
the researchers we didn't used to have

00:32:23 --> 00:32:29
it but they they all came to us and say

00:32:26 --> 00:32:31
when I train I want to be able the feed

00:32:28 --> 00:32:34
my network any Daya we want so that's a

00:32:30 --> 00:32:36
really key concept that's really useful

00:32:33 --> 00:32:38
for any practical training whenever you

00:32:35 --> 00:32:40
start writing real training code I think

00:32:37 --> 00:32:43
you that will come in handy so those are

00:32:39 --> 00:32:45
the I think four Concepts now that I

00:32:42 --> 00:32:46
will introduce in this lab that's

00:32:44 --> 00:32:49
lightly U different from the previous

00:32:46 --> 00:32:51
one how to save checkpoint how to load

00:32:48 --> 00:32:53
from checkpoint how to run evaluation

00:32:50 --> 00:32:54
and how to use placeholders I think the

00:32:52 --> 00:32:56
placeholder is actually going to be the

00:32:53 --> 00:32:59
first one so once again we have our

00:32:55 --> 00:33:02
typical border play stuff so so that you

00:32:58 --> 00:33:06
hi return you import a bunch of uh

00:33:01 --> 00:33:10
libraries the second one this is just

00:33:05 --> 00:33:12
for um convenience I Define a set of

00:33:09 --> 00:33:14
constants some of them you can play with

00:33:11 --> 00:33:17
such as the maximum number of steps

00:33:13 --> 00:33:19
where you're going to save all your data

00:33:16 --> 00:33:21
how big the batch sizes are but some

00:33:18 --> 00:33:23
other things that you cannot change

00:33:20 --> 00:33:26
because of the data that I'm providing

00:33:22 --> 00:33:30
you for example the mless

00:33:25 --> 00:33:30
pictures any questions so far

00:33:32 --> 00:33:40
so now we'll read some data is everybody

00:33:35 --> 00:33:43
there in 2.3 I'm at 2.3 right now so now

00:33:39 --> 00:33:45
I use if you don't have slash Tamp it

00:33:42 --> 00:33:48
might be an issue but hopefully you

00:33:44 --> 00:33:49
do if you if don't have SL slam change

00:33:47 --> 00:33:53
the

00:33:48 --> 00:33:55
directory um directory name so the next

00:33:52 --> 00:33:57
one is where we build inference so can

00:33:55 --> 00:33:59
ybody just glance and and tell me what

00:33:56 --> 00:34:01
we're building

00:33:58 --> 00:34:03
what kind of network how many layers am

00:34:00 --> 00:34:03
I

00:34:04 --> 00:34:12
building I have two hidden layers you

00:34:07 --> 00:34:16
have all learned hidden layers yeah

00:34:11 --> 00:34:18
today and I also have a linear layer

00:34:15 --> 00:34:21
which will

00:34:17 --> 00:34:24
produce Logics that's correct so that's

00:34:20 --> 00:34:26
what all the inference graphs will

00:34:23 --> 00:34:29
always do they always construct your

00:34:25 --> 00:34:31
graph and they produce logistic output

00:34:28 --> 00:34:34
so once again here you can uncommon it

00:34:30 --> 00:34:37
and see what kind of graph you have

00:34:33 --> 00:34:38
built uh once you have done the whole

00:34:36 --> 00:34:41
tutorial by

00:34:37 --> 00:34:44
ourself you can actually run tensor

00:34:40 --> 00:34:46
board and you can actually load this

00:34:43 --> 00:34:48
cph that you have saved and you can

00:34:45 --> 00:34:51
visualize it like what I have shown in

00:34:47 --> 00:34:53
the slide I didn't draw that slide by

00:34:50 --> 00:34:56
hand it's actually produced by tensor

00:34:52 --> 00:34:58
board so you can see the connection of

00:34:55 --> 00:35:00
all your notes so I feel that that

00:34:57 --> 00:35:02
visual representation is really

00:34:59 --> 00:35:03
important also it's very easy for you to

00:35:01 --> 00:35:06
validate that you have indeed build a

00:35:02 --> 00:35:07
graph that you thought sometimes people

00:35:05 --> 00:35:09
call something repeatedly and they have

00:35:06 --> 00:35:11
generated this gigantic graph they were

00:35:08 --> 00:35:14
like oh that wasn't what I meant so

00:35:10 --> 00:35:18
being able to visualize is really

00:35:13 --> 00:35:20
important any questions so far see here

00:35:17 --> 00:35:22
I have good habits I actually gave all

00:35:19 --> 00:35:24
my variables names once again the hidden

00:35:21 --> 00:35:27
layer one hidden Layer Two they all have

00:35:23 --> 00:35:30
weights and biases weights and biases

00:35:26 --> 00:35:33
Etc so now we're going to build our

00:35:29 --> 00:35:33
train graph so here

00:35:33 --> 00:35:39
is actually here there's no New Concept

00:35:35 --> 00:35:41
once again you define the loss function

00:35:38 --> 00:35:45
we once again pick gradient descent as

00:35:40 --> 00:35:47
our Optimizer we added a global uh sta

00:35:44 --> 00:35:49
variable that's what we will use later

00:35:46 --> 00:35:52
when we save our checkpoints so you

00:35:48 --> 00:35:54
actually know at which point what

00:35:51 --> 00:35:56
checkpoint this corresponds to otherwise

00:35:53 --> 00:35:59
if you always save it to the same name

00:35:55 --> 00:36:02
then later you know you said wow this

00:35:58 --> 00:36:05
this um result is so wonderful but

00:36:02 --> 00:36:08
how long did it take you have no idea so

00:36:04 --> 00:36:09
that's a a training concept that we

00:36:07 --> 00:36:11
introduce it's called Global step

00:36:08 --> 00:36:14
basically how long you have trained and

00:36:10 --> 00:36:15
we usually save that with the checkpoint

00:36:13 --> 00:36:18
so you know which checkpoint has the

00:36:14 --> 00:36:20
best

00:36:17 --> 00:36:23
information yeah everybody is good at

00:36:20 --> 00:36:26
2.5 so now the next one is the

00:36:22 --> 00:36:28
additional stuff that I just

00:36:25 --> 00:36:31
mentioned oh that piece of Rock that I'm

00:36:27 --> 00:36:34
giving you now to cook your stuff so one

00:36:30 --> 00:36:37
is the placeholder so we are going to

00:36:33 --> 00:36:40
Define two one to hold your image and

00:36:36 --> 00:36:42
the other to hold your labels the we

00:36:39 --> 00:36:45
build it this way so that we only need

00:36:41 --> 00:36:48
to build a graph once and we will be

00:36:44 --> 00:36:51
able to use it for both training

00:36:47 --> 00:36:53
inference and evaluation later it's very

00:36:50 --> 00:36:55
handy you don't have to do it this way

00:36:52 --> 00:36:58
and one of the exercises I put in my

00:36:54 --> 00:37:00
slide is to try to do it differently but

00:36:57 --> 00:37:04
his is a very handy way and get you

00:36:59 --> 00:37:08
very far with minimum work so as I said

00:37:03 --> 00:37:11
in the slid I know I don't have any

00:37:07 --> 00:37:14
highlighters beams but you see there

00:37:10 --> 00:37:17
says after you created your placeholders

00:37:13 --> 00:37:19
I said add to collection and remember

00:37:16 --> 00:37:21
this op and later we'll see how we're

00:37:18 --> 00:37:22
going to recall this op and how we're

00:37:20 --> 00:37:25
going to use

00:37:22 --> 00:37:30
it in the next one we're going to call

00:37:24 --> 00:37:33
our inference build our inference

00:37:29 --> 00:37:36
is everybody following this part okay

00:37:32 --> 00:37:39
and once again we remember our

00:37:35 --> 00:37:43
Logics and then we create our train op

00:37:38 --> 00:37:43
and our loss up just like with linear

00:37:43 --> 00:37:47
egression just like with the linear

00:37:44 --> 00:37:51
egression we're going to initialize all

00:37:46 --> 00:37:55
our variables and now at the bottom of

00:37:50 --> 00:37:57
this cell that's the second New Concept

00:37:54 --> 00:38:00
hat I'm introducing which is the saver

00:37:56 --> 00:38:02
this is what you will use to do

00:37:59 --> 00:38:04
checkpoints to save the states of your

00:38:01 --> 00:38:07
network so that later you can evaluate

00:38:03 --> 00:38:09
it or if your training was interrupted

00:38:06 --> 00:38:11
you can load from a previous checkpoint

00:38:08 --> 00:38:13
and continue training from there rather

00:38:10 --> 00:38:16
than always reinitialize all your

00:38:12 --> 00:38:17
variables and start from scratch when

00:38:15 --> 00:38:20
you're training really big networks such

00:38:16 --> 00:38:23
as Inception is absolutely critical

00:38:19 --> 00:38:26
because when I I think when I first

00:38:22 --> 00:38:28
rain Inception it took probably six

00:38:25 --> 00:38:30
days and then later when we have

00:38:27 --> 00:38:32
replicas it took still like stay of the

00:38:29 --> 00:38:34
hour is still two and a half days you

00:38:31 --> 00:38:36
don't want to have to start from scratch

00:38:33 --> 00:38:40
every single

00:38:35 --> 00:38:42
time so yeah everybody got that the

00:38:39 --> 00:38:46
placeholder and the

00:38:41 --> 00:38:48
saver so now it's 2.7 we're going to go

00:38:45 --> 00:38:48
to

00:38:50 --> 00:38:58
2.7 lot of code can anybody tell me

00:38:53 --> 00:38:58
what's trying to do

00:39:05 --> 00:39:10
so this is an yes so it's trying to

00:39:08 --> 00:39:14
minimize

00:39:09 --> 00:39:19
loss we can actually see

00:39:13 --> 00:39:19
this so we'll run it once

00:39:20 --> 00:39:29
okay where did I go

00:39:23 --> 00:39:31
kay very fast it's done

00:39:28 --> 00:39:32
but what if I really want to see what

00:39:30 --> 00:39:35
it's

00:39:31 --> 00:39:38
doing so python is

00:39:34 --> 00:39:40
wonderful so I would like to actually

00:39:37 --> 00:39:42
see did somebody show like how you know

00:39:40 --> 00:39:45
your training is going well they show

00:39:41 --> 00:39:47
the LW going down going down oh I think

00:39:44 --> 00:39:49
my training is going really well so

00:39:46 --> 00:39:53
we're going to do something similar

00:39:48 --> 00:39:56
sorry so I'm going to create a variable

00:39:52 --> 00:39:59
what do you call

00:39:55 --> 00:40:02
osses which is just

00:39:58 --> 00:40:05
uh an array so

00:40:01 --> 00:40:09
here I'm actually going

00:40:04 --> 00:40:09
to remember

00:40:11 --> 00:40:15
it

00:40:15 --> 00:40:19
pinned so what am I

00:40:24 --> 00:40:31
collecting M plot

00:40:28 --> 00:40:31
PL

00:40:31 --> 00:40:38
lip anybody remember

00:40:34 --> 00:40:42
this this a

00:40:37 --> 00:40:42
plot let's try

00:40:45 --> 00:40:52
this o look at

00:40:48 --> 00:40:55
hat now do you see your loss going down

00:40:51 --> 00:40:59
so as you train your loss actually goes

00:40:54 --> 00:41:01
down so this is how when you do large

00:40:58 --> 00:41:04
scale training this is what we typically

00:41:00 --> 00:41:06
do we have a gazillion of this javs

00:41:03 --> 00:41:08
running in the morning we would just

00:41:05 --> 00:41:11
glance at it and we know oh which one is

00:41:07 --> 00:41:12
doing really really well so of course

00:41:10 --> 00:41:14
you know that that's just when you're

00:41:11 --> 00:41:16
are prototyping that's a really really

00:41:13 --> 00:41:17
handy tool but I'm going to show you

00:41:15 --> 00:41:21
something even

00:41:16 --> 00:41:24
better oh that's part of the exercise

00:41:20 --> 00:41:27
man I don't have it so as one of the

00:41:23 --> 00:41:29
xercise I also put the answers in the

00:41:26 --> 00:41:32
backup slides that you guys are welcome

00:41:28 --> 00:41:35
to cut and paste into a cell then you

00:41:31 --> 00:41:38
can actually run all all the evaluation

00:41:34 --> 00:41:40
sets against your checkpoint so that you

00:41:37 --> 00:41:43
know how well you're performing so you

00:41:39 --> 00:41:45
don't have to rely on your eyes you know

00:41:42 --> 00:41:48
glancing oh you my loss is going down or

00:41:44 --> 00:41:51
elying on validating a single

00:41:47 --> 00:41:53
image but see this is how easy it is

00:41:50 --> 00:41:56
this is how easy the Prototype and you

00:41:52 --> 00:41:59
can lar it very often our researchers

00:41:55 --> 00:42:02
would cut and paste their Cod code and

00:41:58 --> 00:42:04
put in a file and and that's basically

00:42:01 --> 00:42:07
their algorithm and they will publish

00:42:03 --> 00:42:10
that with their paper they would uh send

00:42:06 --> 00:42:12
it to our data scientists or production

00:42:09 --> 00:42:15
people we would actually postize some of

00:42:11 --> 00:42:17
their research this this is how easy

00:42:14 --> 00:42:19
literally from research to prototyping

00:42:16 --> 00:42:22
to production really streamlined and you

00:42:18 --> 00:42:25
can do it in no

00:42:21 --> 00:42:28
time so for those of you who have run

00:42:24 --> 00:42:31
this step can you do an LS in your data

00:42:27 --> 00:42:34
path wherever you you saved that where

00:42:30 --> 00:42:37
ver you declare your trainer to be

00:42:33 --> 00:42:37
what do you see in

00:42:36 --> 00:42:42
there

00:42:38 --> 00:42:44
checkpoints that's right that's the

00:42:41 --> 00:42:47
money that's after all this

00:42:43 --> 00:42:49
work all the all the rning all this

00:42:46 --> 00:42:51
training on all this gazillion machines

00:42:48 --> 00:42:55
that's where all your weights your

00:42:50 --> 00:42:57
biases are stored so that later you can

00:42:54 --> 00:43:00
you know load this network up and do

00:42:56 --> 00:43:06
your uh Inception to recognize images to

00:42:59 --> 00:43:09
Res reply to email to do art etc etc so

00:43:05 --> 00:43:12
that's really critical but how do we use

00:43:08 --> 00:43:16
it have no fear all right let's move on

00:43:11 --> 00:43:17
to 2.8 if you are not already there so

00:43:15 --> 00:43:20
can somebody tell me what we're trying

00:43:16 --> 00:43:20
to do

00:43:21 --> 00:43:26
first that's right first we load the

00:43:23 --> 00:43:29
checkpoint and you remember all the

00:43:25 --> 00:43:30
things that we told the told our program

00:43:28 --> 00:43:33
to

00:43:29 --> 00:43:35
remember the Logics and the image

00:43:32 --> 00:43:38
placeholder and the label placeholder

00:43:34 --> 00:43:40
how are we going to use it now we're

00:43:37 --> 00:43:43
going to feed it some images from our

00:43:39 --> 00:43:45
evaluation and see what it thinks so now

00:43:42 --> 00:43:45
if you hit

00:43:46 --> 00:43:54
return what's the ground

00:43:49 --> 00:43:54
truth five what's our

00:43:53 --> 00:44:00
prediction three what's the actual image

00:43:59 --> 00:44:05
could be three could be five you know

00:44:02 --> 00:44:07
but so the machine is getting pretty

00:44:04 --> 00:44:09
close right I wouldn't I would say

00:44:06 --> 00:44:09
that's a

00:44:09 --> 00:44:15
three okay let's try a different

00:44:12 --> 00:44:17
one so you can hear return

00:44:14 --> 00:44:19
again in the same cell oh I need to

00:44:16 --> 00:44:21
somehow move this so what's the ground

00:44:18 --> 00:44:24
truth this

00:44:20 --> 00:44:26
time yeah I got it right so you can keep

00:44:23 --> 00:44:29
hitting you know you can keep hitting

00:44:25 --> 00:44:32
return and see you know how well is

00:44:28 --> 00:44:34
doing but instead of validating you know

00:44:31 --> 00:44:36
instead of hitting return 100 times and

00:44:33 --> 00:44:39
count how many times I has gotten it

00:44:35 --> 00:44:42
wrong as I said in one of the exercises

00:44:38 --> 00:44:43
and I also put the answer in the slid

00:44:41 --> 00:44:47
that you can cut and paste and actually

00:44:42 --> 00:44:51
do a complete validation on the whole U

00:44:46 --> 00:44:53
validation set but what do you think I

00:44:50 --> 00:44:56
really so you can actually uh handw

00:44:53 --> 00:44:57
rite a different digit but the trick is

00:44:55 --> 00:45:00
that a lot of people actually try that

00:44:56 --> 00:45:02
and told me me it doesn't seem to work

00:44:59 --> 00:45:04
so you remember in on the slide I said

00:45:01 --> 00:45:06
this is what the machine sees this is

00:45:03 --> 00:45:09
where I sees and this is what the

00:45:05 --> 00:45:11
machine sees so in the amness data set

00:45:08 --> 00:45:11
all the numbers are between zero and one

00:45:10 --> 00:45:14
I

00:45:10 --> 00:45:16
believe I could be wrong but I believe

00:45:13 --> 00:45:18
it's between zero and one so if you just

00:45:15 --> 00:45:20
use a random tool like your phone you

00:45:17 --> 00:45:22
write the number and you upload it

00:45:19 --> 00:45:26
number one the the picture might be too

00:45:21 --> 00:45:28
big and need to scale it down um number

00:45:25 --> 00:45:30
two it might have a different

00:45:27 --> 00:45:33
representation sometimes is from 0 to

00:45:29 --> 00:45:36
255 and you need to scale it you know to

00:45:32 --> 00:45:38
the range that amnest that how you have

00:45:35 --> 00:45:39
trained your network if you train your

00:45:37 --> 00:45:41
network with those data and then you

00:45:38 --> 00:45:44
should be able to recognize the same set

00:45:40 --> 00:45:46
of data just like when we teach a baby

00:45:43 --> 00:45:48
right if if you have never been exposed

00:45:45 --> 00:45:51
to something you're are not going to be

00:45:47 --> 00:45:53
able to recognize it just like with the

00:45:50 --> 00:45:56
Oro one of our uh

00:45:52 --> 00:45:59
colleagues um

00:45:55 --> 00:46:01
caption uh what was that that program a

00:45:58 --> 00:46:03
while ago anytime when it sees something

00:46:00 --> 00:46:06
that it doesn't recognize have anybody

00:46:02 --> 00:46:09
played with that captioning software

00:46:05 --> 00:46:12
it's super fun so you can take a picture

00:46:08 --> 00:46:16
and say you know two people eating pizza

00:46:11 --> 00:46:18
or you know dog surfing but anytime it

00:46:15 --> 00:46:21
sees something that it has never been

00:46:17 --> 00:46:24
trained on it would say men talking on a

00:46:20 --> 00:46:25
cell phone so for a while we had a lot

00:46:23 --> 00:46:27
of fun with it we would put a watermelon

00:46:24 --> 00:46:29
on a post and they was say men

00:46:26 --> 00:46:31
talking talking on the cell phone you

00:46:28 --> 00:46:32
put a bunch of furniture in the room you

00:46:30 --> 00:46:34
know with nothing and it was say men

00:46:31 --> 00:46:36
talking on the cell phone so it was

00:46:33 --> 00:46:39
really fun but just like with your

00:46:35 --> 00:46:41
numbers if you have never trained it

00:46:38 --> 00:46:43
with um that style like if I write

00:46:40 --> 00:46:45
Chinese characters here it's never going

00:46:42 --> 00:46:48
to recognize it but this is pretty fun

00:46:45 --> 00:46:51
so you can play with it you know you can

00:46:47 --> 00:46:53
see how well see every time see so far

00:46:50 --> 00:46:54
it's 100% other than the first one which

00:46:52 --> 00:46:57
I cannot tell

00:46:53 --> 00:46:59
either so what are some of the exercises

00:46:56 --> 00:47:02
that we can do here what do you want to

00:46:58 --> 00:47:04
do with this lab it's too easy huh

00:47:01 --> 00:47:05
because I made it so easy because I

00:47:03 --> 00:47:07
didn't know that you guys are all

00:47:04 --> 00:47:09
experts by now otherwise I would have

00:47:06 --> 00:47:14
done a much harder

00:47:08 --> 00:47:17
La uh let me see what things we can

00:47:13 --> 00:47:19
do so you can uncommon

00:47:16 --> 00:47:22
[Music]

00:47:18 --> 00:47:25
autographs oh so here's one actually you

00:47:21 --> 00:47:28
already see it so try this can you guys

00:47:24 --> 00:47:31
try saving the checkpoint say

00:47:27 --> 00:47:31
car 100

00:47:32 --> 00:47:37
steps and you're going to have a

00:47:34 --> 00:47:39
gazillion but a tiny tiny checkpoints so

00:47:36 --> 00:47:42
it's okay and try to run evaluation with

00:47:38 --> 00:47:45
a different checkpoint and see what you

00:47:42 --> 00:47:48
get do you know how to do that yeah

00:47:44 --> 00:47:48
everybody know how to do

00:47:51 --> 00:47:58
that so the idea is that when you run

00:47:55 --> 00:48:01
evaluation is in a it's very very

00:47:57 --> 00:48:03
similar so we typically run training in

00:48:00 --> 00:48:07
evaluation in parallel or

00:48:02 --> 00:48:10
validation so us it trains every so

00:48:06 --> 00:48:12
ften say every half an hour depending

00:48:09 --> 00:48:15
on the the depending on your problem so

00:48:11 --> 00:48:17
with the Inception every 10 minutes we

00:48:14 --> 00:48:19
will also run evaluation to see how well

00:48:16 --> 00:48:22
our model is doing so if our model gets

00:48:18 --> 00:48:24
to say 78.6% which I believe is the

00:48:21 --> 00:48:27
stateof thee art you'll be like oh my

00:48:23 --> 00:48:29
mother's done training so that's how

00:48:26 --> 00:48:33
that's why you want to save checkpoints

00:48:28 --> 00:48:35
often and then you know validate them

00:48:32 --> 00:48:37
often if you're done with that already

00:48:34 --> 00:48:39
did you notice anything if you try to

00:48:36 --> 00:48:42
load from a really early

00:48:38 --> 00:48:46
checkpoint how is your uh how how how

00:48:41 --> 00:48:48
good is it when it tries to identify the

00:48:47 --> 00:48:55
digits just take a while

00:48:51 --> 00:48:58
guess yeah very bad maybe every every

00:48:54 --> 00:48:59
other one is wrong but this m this is

00:48:57 --> 00:49:02
uch a small data set it's very easy to

00:48:58 --> 00:49:03
train and we have such a you know deep

00:49:01 --> 00:49:06
network if you only have one layer maybe

00:49:02 --> 00:49:10
it won't get it

00:49:05 --> 00:49:13
right um so another exercise I think all

00:49:09 --> 00:49:16
these you can you can do after the lect

00:49:12 --> 00:49:19
after this session is that really try to

00:49:15 --> 00:49:22
learn to run EV um evaluation from

00:49:18 --> 00:49:24
scratch rather than actually another

00:49:21 --> 00:49:27
that part but run evaluation on the

00:49:23 --> 00:49:29
complete validation set that's a that's

00:49:26 --> 00:49:31
a really necessary skill to develop as

00:49:28 --> 00:49:33
you build bigger models and you need to

00:49:30 --> 00:49:33
run

00:49:35 --> 00:49:42
validation so I think this is the end of

00:49:38 --> 00:49:45
my my lab I do have bonus

00:49:41 --> 00:49:47
Labs uh but I want to cover this first

00:49:44 --> 00:49:50
he bottom line is that tensorflow is

00:49:46 --> 00:49:52
really is for machine learning is really

00:49:49 --> 00:49:54
from research to prototyping to

00:49:51 --> 00:49:56
production it's really designed for that

00:49:53 --> 00:49:59
and I really hope everybody in the

00:49:55 --> 00:50:01
audience can I give it a try and if

00:49:58 --> 00:50:05
there are any features that you find it

00:50:00 --> 00:50:07
lacking that you would like to see in

00:50:04 --> 00:50:10
implemented either send us pool requests

00:50:06 --> 00:50:12
we always welcome contribution or talk

00:50:09 --> 00:50:14
to my wonderful product manager Zach

00:50:11 --> 00:50:16
sitting over there he's taking requests

00:50:13 --> 00:50:20
for

00:50:15 --> 00:50:23
features so with that um yeah thanks and

00:50:19 --> 00:50:23
have fun

00:50:24 --> 00:50:30
[Applause]

00:50:26 --> 00:50:34
thank you Sher we have time for

00:50:29 --> 00:50:36
questions for those who actually tried

00:50:33 --> 00:50:38
it see a so well done everybody feel

00:50:35 --> 00:50:41
ike they're experts they're all ready

00:50:37 --> 00:50:43
to go make arts now right right go deep

00:50:40 --> 00:50:45
dream you

00:50:42 --> 00:50:50
know

00:50:44 --> 00:50:51
cool if there are no questions uh I oh

00:50:49 --> 00:50:54
there's one question I think someone

00:50:50 --> 00:50:54
who's trying

00:50:55 --> 00:51:01
desperately hi uh my name is pichin and

00:50:58 --> 00:51:03
first of all thank you for the for

00:51:00 --> 00:51:07
introducing tensor flow and for

00:51:02 --> 00:51:09
Designing it I have two questions so the

00:51:06 --> 00:51:13
first questions is I know the tensor

00:51:08 --> 00:51:16
Flor have C++ API right so let's say if

00:51:12 --> 00:51:20
I use kiras or any of the Python front

00:51:15 --> 00:51:22
end I train a model can I does tensor

00:51:19 --> 00:51:22
flow support that just I can pull out

00:51:21 --> 00:51:27
he

00:51:22 --> 00:51:29
C++ model of it and then just use that

00:51:26 --> 00:51:32
yeah yes you can so even if I use for

00:51:28 --> 00:51:34
example Kira's custom layer that I code

00:51:31 --> 00:51:36
using python I still can get those

00:51:33 --> 00:51:37
things that's correct oh is co it's just

00:51:35 --> 00:51:41
he front end that's different how you

00:51:36 --> 00:51:44
construct the graph ah nice but I we we

00:51:40 --> 00:51:46
are not as complete on our C+ plus API

00:51:43 --> 00:51:49
design for example a lot of the training

00:51:45 --> 00:51:52
libraries are are not complete yet so

00:51:48 --> 00:51:54
but for the simple models yes you can

00:51:51 --> 00:51:56
so well let's say not the

00:51:53 --> 00:51:58
training but let's say if I just want

00:51:55 --> 00:51:59
he testing part because I don't need to

00:51:57 --> 00:52:02
do I mean the training I can always do

00:51:58 --> 00:52:04
in Python yes we we do have that already

00:52:01 --> 00:52:07
actually if you go to our website

00:52:03 --> 00:52:08
there's a label images. CC I think

00:52:06 --> 00:52:12
that's literally just loading from

00:52:07 --> 00:52:14
checkpoint and run the inference in C

00:52:11 --> 00:52:17
that's all written in C++ so that's a

00:52:13 --> 00:52:20
good example to follow cool uh a second

00:52:16 --> 00:52:23
one so another thing that I noticed that

00:52:19 --> 00:52:26
you support almost everything except

00:52:22 --> 00:52:29
Windows everything except what I mean

00:52:25 --> 00:52:32
iOS Android have no fear actually we

00:52:28 --> 00:52:33
're actively doing that but when I

00:52:31 --> 00:52:36
first joined the team I think there were

00:52:32 --> 00:52:38
10 of us and we have to do everything

00:52:35 --> 00:52:41
like before open sourcing all of us were

00:52:37 --> 00:52:43
in the in the in the conference room

00:52:40 --> 00:52:45
together we're all riding dog we're

00:52:42 --> 00:52:48
fixing everything so now we have more

00:52:44 --> 00:52:50
people um that's like top of our list we

00:52:47 --> 00:52:52
would love to support it so so so I'm

00:52:49 --> 00:52:54
just curious because I I mean when I

00:52:51 --> 00:52:57
look at the road map I didn't see a

00:52:53 --> 00:52:58
clear timeline for Windows but uh thing

00:52:56 --> 00:53:00
I know that just like the reason why you

00:52:58 --> 00:53:04
cannot support Windows is because of

00:52:59 --> 00:53:06
basil basil doesn't support Windows so

00:53:03 --> 00:53:08
let's say theoretically or I mean what

00:53:05 --> 00:53:11
you think just like I know basil that

00:53:07 --> 00:53:13
just like it will get window five at

00:53:10 --> 00:53:16
some somewhere November that is what

00:53:12 --> 00:53:18
hey say so once B can run in Windows

00:53:15 --> 00:53:20
can I expect like just I can immediately

00:53:17 --> 00:53:23
do tensor Flor or do you fores some

00:53:19 --> 00:53:25
other problem maybe Zach would like to

00:53:22 --> 00:53:25
take that

00:53:25 --> 00:53:30
question okay

00:53:27 --> 00:53:33
that's so yeah let's talk offline

00:53:29 --> 00:53:36
yeah sure thank you very much sorry hi

00:53:32 --> 00:53:37
uh great presentation and session uh my

00:53:35 --> 00:53:39
name is Yuri I have a question about

00:53:36 --> 00:53:45
pus uh are they available right now for

00:53:39 --> 00:53:45
testing and playing uh for non-google

00:53:44 --> 00:53:50
mployes

00:53:46 --> 00:53:54
uh are we

00:53:49 --> 00:53:56
TPU available I don't think so at the

00:53:53 --> 00:53:58
moment and do do you know when it might

00:53:55 --> 00:54:01
be available in the Google CL would you

00:53:58 --> 00:54:01
like to take that

00:54:03 --> 00:54:12
one I'm so glad we have a product boss

00:54:06 --> 00:54:14
here so that he can sorry okay thank

00:54:11 --> 00:54:18
you nice tutor I have a question are

00:54:13 --> 00:54:21
there any like plans to integrate uh

00:54:17 --> 00:54:26
tensorflow uh with the like open source

00:54:20 --> 00:54:27
framework like myos and hdfs to make the

00:54:25 --> 00:54:31
distribute tensor flow

00:54:26 --> 00:54:33
EAS so there are definitely plans we are

00:54:30 --> 00:54:37
Al always actively working on new

00:54:32 --> 00:54:40
features but we cannot provide a solid

00:54:36 --> 00:54:43
timeline right now so that we do have

00:54:39 --> 00:54:46
like like this you know we do have plans

00:54:42 --> 00:54:49
we do have projects in progress but we

00:54:45 --> 00:54:51
cannot commit on the

00:54:48 --> 00:54:53
timeline so I cannot give you a time

00:54:50 --> 00:54:57
saying yes by November you have what you

00:54:52 --> 00:54:59
know so thank you but uh if you have

00:54:56 --> 00:55:02
this type of question I think Zach is

00:54:58 --> 00:55:02
the best person to answer

00:55:02 --> 00:55:08
to oh

00:55:04 --> 00:55:11
i I was wondering um does sensor flow

00:55:07 --> 00:55:14
have any examples to load your own data

00:55:10 --> 00:55:17
of what which data um so the current

00:55:13 --> 00:55:19
example has a mest um data set are there

00:55:16 --> 00:55:21
xamples out there to load your own data

00:55:18 --> 00:55:24
set yes yes definitely uh I think we

00:55:20 --> 00:55:27
have two one's called The tensorflow

00:55:23 --> 00:55:29
Poet I think that one that example shows

00:55:26 --> 00:55:31
you how you can L your own data

00:55:28 --> 00:55:33
set

00:55:30 --> 00:55:36
um I

00:55:32 --> 00:55:38
think is there another one uh Zach are

00:55:35 --> 00:55:40
you aware of another one that might be

00:55:37 --> 00:55:42
loading your own data set I know we have

00:55:39 --> 00:55:45
retraining model you know if you go to

00:55:41 --> 00:55:47
tensor flow we have an example to do

00:55:44 --> 00:55:49
retraining those you can download from

00:55:46 --> 00:55:50
anywhere so in our example we just

00:55:48 --> 00:55:53
downloaded a bunch of

00:55:49 --> 00:55:56
lowers so you can definitely download

00:55:52 --> 00:55:59
whatever pictures that you want to

00:55:55 --> 00:55:59
retrain and

00:55:58 --> 00:56:05
go hello thank you for your presentation

00:56:02 --> 00:56:07
uh I have a question concerning the the

00:56:04 --> 00:56:10
training you can't you can train using

00:56:06 --> 00:56:15
thr tensor for in any uh virtually in

00:56:09 --> 00:56:18
any system like Android uh and uh what

00:56:14 --> 00:56:20
about the model is do you provide

00:56:17 --> 00:56:23
anything to move the model to Android is

00:56:20 --> 00:56:25
the because um we generally you program

00:56:22 --> 00:56:27
in Java there and yes so that's a

00:56:24 --> 00:56:30
beautiful thing you remember the ecture

00:56:26 --> 00:56:31
that I showed you build a model and then

00:56:29 --> 00:56:34
just send it to the runtime it's the

00:56:30 --> 00:56:36
same model running on any of the

00:56:33 --> 00:56:39
different platforms it it can be a

00:56:35 --> 00:56:42
laptop Android do you have your your own

00:56:38 --> 00:56:45
specific format for the model or it's

00:56:41 --> 00:56:48
just you you build the same because the

00:56:44 --> 00:56:51
model is just bunch of Matrix Matrix and

00:56:47 --> 00:56:54
values is there any special special

00:56:50 --> 00:56:57
format for your model because I

00:56:53 --> 00:56:59
sometimes it will it is bigger

00:56:56 --> 00:57:01
so I would not recommend training C

00:56:58 --> 00:57:02
Inception on your phone because all the

00:57:00 --> 00:57:07
convolution in the back problem will

00:57:01 --> 00:57:09
probably kill it 10 times over so

00:57:06 --> 00:57:11
definitely so there will be that type of

00:57:08 --> 00:57:13
limitation like U I think you guys

00:57:10 --> 00:57:15
talked about the number of parameters if

00:57:12 --> 00:57:18
it blows the memory footprint on your

00:57:14 --> 00:57:20
phone it's just not going to work and if

00:57:17 --> 00:57:22
the compu like especially for

00:57:19 --> 00:57:24
convolution it uses a lot of computers

00:57:21 --> 00:57:26
yes that's for training but but for

00:57:23 --> 00:57:28
inference you can run it anywhere okay

00:57:26 --> 00:57:31
thank yeah it's the same model you just

00:57:27 --> 00:57:34
restore actually are examples like um

00:57:30 --> 00:57:35
label image that's the C++ version I

00:57:33 --> 00:57:37
think I also wrote one it's called

00:57:34 --> 00:57:40
classify image it's in Python that's

00:57:37 --> 00:57:43
also you can run it on your phone so any

00:57:39 --> 00:57:45
of these you can write your own and load

00:57:42 --> 00:57:48
the checkpoint and run it on your phone

00:57:44 --> 00:57:51
as well so definitely I encourage you to

00:57:47 --> 00:57:53
do that thank you

00:57:50 --> 00:57:56
cool yeah hi I have a question related

00:57:52 --> 00:57:59
to tensorflow serving so uh I went

00:57:55 --> 00:58:01
hrough the the online documentation and

00:57:58 --> 00:58:04
um currently I think it requires some

00:58:00 --> 00:58:06
coding in C++ and then combined with

00:58:03 --> 00:58:08
python uh is there only going to be you

00:58:05 --> 00:58:10
know only python Solution that's going

00:58:07 --> 00:58:12
to be provided or is it always going to

00:58:09 --> 00:58:14
be you know I think you need to do some

00:58:11 --> 00:58:17
First Step you know to create a module

00:58:13 --> 00:58:20
and then you know just import it into

00:58:16 --> 00:58:22
python I am actually surprised to hear

00:58:19 --> 00:58:25
that because I'm pretty sure that you

00:58:21 --> 00:58:28
can write the model in just python or

00:58:24 --> 00:58:29
just C++ you don't have have to write it

00:58:27 --> 00:58:32
in one way or the other they might have

00:58:28 --> 00:58:34
a special exporter tool at one point

00:58:31 --> 00:58:37
hat was the case they wrote their

00:58:33 --> 00:58:39
exporter in C++ I think that's what

00:58:36 --> 00:58:42
probably what you were talking about but

00:58:38 --> 00:58:45
you don't have to build it in any uh

00:58:41 --> 00:58:46
specific way the model is just you can

00:58:44 --> 00:58:50
write in whatever language you like as

00:58:45 --> 00:58:51
long as it produces that graph uhuh and

00:58:49 --> 00:58:55
that's all it

00:58:50 --> 00:58:57
needs so so tensor flow surveying the

00:58:54 --> 00:59:00
tutorial actually if you go on the side

00:58:56 --> 00:59:02
it had those steps actually okay so I

00:58:59 --> 00:59:04
will look into that so maybe you can

00:59:01 --> 00:59:06
come find me later and I I'll see what

00:59:03 --> 00:59:08
he situation I do know that at one

00:59:05 --> 00:59:11
point they were writing the exporter in

00:59:07 --> 00:59:13
C++ only but that should have changed by

00:59:10 --> 00:59:17
now because we are we're doing another

00:59:12 --> 00:59:20
version of uh serving tensor serving and

00:59:16 --> 00:59:23
is there any plan to you know provide uh

00:59:19 --> 00:59:25
um apis for other uh languages like you

00:59:22 --> 00:59:28
know like mxnet has something called

00:59:24 --> 00:59:30
mxnet JS and you you know um you mean at

00:59:27 --> 00:59:33
he front end front end yeah yeah we

00:59:30 --> 00:59:35
have go I think we have go we have some

00:59:32 --> 00:59:38
other languages maybe Zach can speak

00:59:34 --> 00:59:41
more to it and once again if those

00:59:37 --> 00:59:42
languages are not our favorite please do

00:59:40 --> 00:59:45
contribute and if you would like us to

00:59:41 --> 00:59:47
do it talk to Zach and maybe he can put

00:59:44 --> 00:59:49
hat you know maybe I don't know because

00:59:46 --> 00:59:52
as somebody asked for the Android you

00:59:49 --> 00:59:54
need Java FR so I think that's going to

00:59:51 --> 00:59:56
help out in integrating these models

00:59:53 --> 00:59:59
with that's yeah that's great great

00:59:55 --> 01:00:02
feedback will definitely take note thank

00:59:58 --> 01:00:05
you thank you hi I have a question uh

01:00:01 --> 01:00:08
I'm having a embedded GPU board tx1

01:00:04 --> 01:00:10
which is a arm processor and I really

01:00:07 --> 01:00:12
wanted to work with the tensor flow but

01:00:09 --> 01:00:17
I got to know that it can only run on

01:00:11 --> 01:00:20
x86 boards okay so when can we expect

01:00:16 --> 01:00:23
he tensor flow can support arm

01:00:19 --> 01:00:25
processors uh we will have to get back

01:00:22 --> 01:00:29
to you after I have consulted with my uh

01:00:24 --> 01:00:32
prodct boss say when we can add that

01:00:28 --> 01:00:35
support thank you sorry one last

01:00:31 --> 01:00:38
question um thanks for the presentation

01:00:34 --> 01:00:40
Sher I have a question regarding the um

01:00:37 --> 01:00:43
when you have the uh model and you want

01:00:39 --> 01:00:45
o run inference is it is it possible to

01:00:43 --> 01:00:49
make an executable out of it so you can

01:00:44 --> 01:00:51
drop it into a a container or run it

01:00:48 --> 01:00:53
separately from serving is that is that

01:00:50 --> 01:00:56
something that you guys are looking into

01:00:52 --> 01:00:58
just run the inference yeah just have it

01:00:55 --> 01:01:01
as an as a binary yeah yeah you can

01:00:57 --> 01:01:03
definitely do that right now you can

01:01:00 --> 01:01:06
yeah you can all you you you are always

01:01:02 --> 01:01:08
able to do that you mean just save you

01:01:05 --> 01:01:11
meant just save

01:01:07 --> 01:01:14
the you want to what I mean is that if

01:01:10 --> 01:01:16
you can um package it into a single uh

01:01:13 --> 01:01:18
binary source that you can just pass

01:01:15 --> 01:01:21
around yes yes we actually do that today

01:01:17 --> 01:01:24
that's how the label image works it's

01:01:20 --> 01:01:25
just its own individual binary okay

01:01:23 --> 01:01:28
actually converted all the checkpoints

01:01:24 --> 01:01:31
into constants so it doesn't even need

01:01:27 --> 01:01:33
to do the slow Etc it just RS a bunch of

01:01:30 --> 01:01:37
constants and runs it so it's super

01:01:32 --> 01:01:39
fast you cool okay let's uh thank Sher

01:01:37 --> 01:01:41
[Applause]

01:01:38 --> 01:01:43
[Music]

01:01:40 --> 01:01:45
again we're going to take a short break

01:01:42 --> 01:01:48
of 10 minutes let me remind you for

01:01:44 --> 01:01:49
those who haven't noticed yet but all

01:01:47 --> 01:01:52
the slides of all the talks will be

01:01:48 --> 01:01:53
available on the website so do not worry

01:01:51 --> 01:01:56
they will be available at some point as

01:01:52 --> 01:01:58
oon as we get them from the speakers oh

01:01:55 --> 01:02:00
I forgot to ask my bonus question but in

01:01:57 --> 01:02:01
any case I have a lot of tensor flow

01:01:59 --> 01:02:04
stickers up here if you would like one

01:02:00 --> 01:02:07
to put proudly display on your laptop

01:02:03 --> 01:02:07
come get it

<!-- YOUTUBE_TRANSCRIPT_END -->
