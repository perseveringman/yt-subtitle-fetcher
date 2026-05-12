---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "G5RY_SUJih4"
title: "Sequence to Sequence Deep Learning (Quoc Le, Google)"
video_url: "https://www.youtube.com/watch?v=G5RY_SUJih4"
thumbnail_url: "https://i.ytimg.com/vi/G5RY_SUJih4/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=G5RY_SUJih4"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2016-09-27T17:47:35.000Z"
upload_date: "2016-09-27"
duration_seconds: 4858
duration_human: "1:20:58"
view_count: 69244
like_count: 843
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:24:40.490Z"
---

# Sequence to Sequence Deep Learning (Quoc Le, Google)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=G5RY_SUJih4
- video_id: G5RY_SUJih4
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2016-09-27T17:47:35.000Z
- upload_date: 2016-09-27
- duration: 1:20:58
- view_count: 69244
- like_count: 843
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

00:00:00 --> 00:00:06
eating that were divided in two parts so

00:00:03 --> 00:00:08
number one and we work with you and

00:00:05 --> 00:00:11
evelop the sequence to sequence

00:00:07 --> 00:00:14
learning and then that's the second part

00:00:10 --> 00:00:16
I would I will place sequin to sequence

00:00:13 --> 00:00:23
in a broader context or a lot of

00:00:15 --> 00:00:28
exciting work in this area now so let's

00:00:22 --> 00:00:31
multiply this by a an example so a week

00:00:27 --> 00:00:34
ago I came back from vacation and my in

00:00:30 --> 00:00:38
box I have five hundred and eight

00:00:33 --> 00:00:42
emails and reply emails and a lot of

00:00:37 --> 00:00:46
emails I basically just require just yes

00:00:41 --> 00:00:48
and no answer so let's try to see

00:00:45 --> 00:00:52
whether we can do a system that can

00:00:47 --> 00:00:56
automatically reply these emails to say

00:00:51 --> 00:01:00
es and no and for example so some of

00:00:55 --> 00:01:03
the email would be you know from my my

00:00:59 --> 00:01:05
friend on she said hi in the subject and

00:01:02 --> 00:01:07
she said are you visiting Vietnam for

00:01:04 --> 00:01:10
the New Year walk that would be her

00:01:06 --> 00:01:13
content and then my probable reply would

00:01:09 --> 00:01:15
be yes so you can gather another set

00:01:12 --> 00:01:18
like this and then you know you have

00:01:14 --> 00:01:22
some inputs content so less for now

00:01:17 --> 00:01:24
let's ignore the the the on the author

00:01:21 --> 00:01:26
of the email and the subject but let's

00:01:23 --> 00:01:28
focus on the content so let's suppose

00:01:25 --> 00:01:30
that you gather some email and some

00:01:27 --> 00:01:32
input would be something like are you

00:01:29 --> 00:01:37
visited in Vietnam for the New Year Kwok

00:01:31 --> 00:01:39
and the answer will be yes and then the

00:01:36 --> 00:01:40
another email would be are you hanging

00:01:38 --> 00:01:45
out with us tonight

00:01:39 --> 00:01:45
he answer is no because I'm quite busy

00:01:45 --> 00:01:51
so the third email would be did you read

00:01:48 --> 00:01:54
the coolness paper on breast net the

00:01:50 --> 00:01:57
answer is yes because I liked it

00:01:53 --> 00:02:02
now let's let's do a little bit of

00:01:56 --> 00:02:06
processing we're basically in the in the

00:02:01 --> 00:02:09
previous slide we have gear and comma

00:02:05 --> 00:02:11
nd then kwok and then question mark and

00:02:08 --> 00:02:16
so on so let's let's do a little bit of

00:02:10 --> 00:02:18
processing and then put the the comma a

00:02:15 --> 00:02:21
space between gear and comma and then

00:02:17 --> 00:02:23
Kwok and question mark and so on so this

00:02:20 --> 00:02:26
tep a lot of people call tokenization

00:02:22 --> 00:02:31
and normalization so let's do that with

00:02:25 --> 00:02:33
our emails now so and then the second

00:02:30 --> 00:02:36
step I would do would be to do feature

00:02:32 --> 00:02:37
presentation so in this step what I'm

00:02:35 --> 00:02:40
going to do is the following I'm going

00:02:36 --> 00:02:43
to construct a 2,000 dimensional vector

00:02:39 --> 00:02:45
2,000 represent the size of English

00:02:42 --> 00:02:47
vocabulary and then I'm going to go

00:02:44 --> 00:02:50
through email I'm going to count how

00:02:46 --> 00:02:56
many times a particular word occur in my

00:02:49 --> 00:02:59
email for example for example the world

00:02:55 --> 00:03:02
are occur one in my email so I increase

00:02:58 --> 00:03:05
the counter and then you occur one so I

00:03:01 --> 00:03:08
increased another counter and s etc and

00:03:04 --> 00:03:10
then I will reserve at the end a token

00:03:07 --> 00:03:14
to reserve to just count all the words

00:03:09 --> 00:03:19
that just our vocabulary okay and then

00:03:13 --> 00:03:20
ow you now use successful you if you do

00:03:18 --> 00:03:22
this project a process you're going to

00:03:19 --> 00:03:25
convert all of you or your email from

00:03:21 --> 00:03:27
input to output pairs where the input

00:03:24 --> 00:03:30
would be fixed line representation of

00:03:26 --> 00:03:34
20,000 dimensional vector and output

00:03:29 --> 00:03:39
would be either year or one okay any

00:03:33 --> 00:03:39
questions so far okay good

00:03:38 --> 00:03:44
okay so I will get so as you said

00:03:41 --> 00:03:47
somebody in the audience that the order

00:03:43 --> 00:03:49
of the words don't matter matter

00:03:46 --> 00:03:54
and the answer is yes so I'm going to

00:03:48 --> 00:03:58
get back to that issue later now so

00:03:53 --> 00:04:02
that's x and y and now your job my job

00:03:57 --> 00:04:06
now is to try to find some W search that

00:04:01 --> 00:04:10
W time X can approximate Y Y is the

00:04:05 --> 00:04:13
output right and Y here is yes and no so

00:04:09 --> 00:04:15
because of this problem is has two

00:04:12 --> 00:04:18
categories you can think of it as a

00:04:14 --> 00:04:21
logistic regression problem now if

00:04:17 --> 00:04:24
anybody follow the gray cs2 10:29 class

00:04:20 --> 00:04:29
by andrew probably can formulate this

00:04:23 --> 00:04:31
very quickly but in a very short you the

00:04:28 --> 00:04:35
album comes as follow you kind of try to

00:04:30 --> 00:04:41
come up with a vector for every email

00:04:34 --> 00:04:43
your w is a two column matrix okay

00:04:40 --> 00:04:45
the first column will find the

00:04:42 --> 00:04:49
probability for the eat whether the

00:04:44 --> 00:04:51
mail have to be answer as yes second

00:04:48 --> 00:04:54
column will be answered as no and then

00:04:50 --> 00:04:57
you basically take the dot product

00:04:53 --> 00:05:01
between w1 at the first column now Adam

00:04:56 --> 00:05:04
is called the stochastic gwendy set so

00:05:00 --> 00:05:06
you run for iteration one to like a

00:05:03 --> 00:05:08
million you run for a long long time you

00:05:05 --> 00:05:13
sample a random email X and then some

00:05:07 --> 00:05:16
reply and then if the reply is yes then

00:05:12 --> 00:05:19
you want to update your w1 and w2 such

00:05:15 --> 00:05:22
that you increase the probability that

00:05:18 --> 00:05:26
he answer is yes so you increase the

00:05:21 --> 00:05:29
first probability now if your reply is

00:05:25 --> 00:05:32
if the correct reply is no then you're

00:05:28 --> 00:05:37
gonna update w1 and w2 so that you can

00:05:31 --> 00:05:38
increase the probability of the is email

00:05:36 --> 00:05:42
to be answered as you know

00:05:37 --> 00:05:49
so the second probability okay so let's

00:05:41 --> 00:05:52
call those a p1 and p2 now so because to

00:05:48 --> 00:05:54
update I said to update the increase

00:05:51 --> 00:05:57
what does that mean what that means is

00:05:53 --> 00:05:58
that you find the gradient of the

00:05:56 --> 00:06:01
partial gradient of the objective

00:05:57 --> 00:06:05
function with respect to some parameter

00:06:00 --> 00:06:08
so now you have to pick some alpha which

00:06:04 --> 00:06:12
is the learning rate and then you say W

00:06:07 --> 00:06:16
1 is equal to W 1 plus some alpha the

00:06:11 --> 00:06:19
partial derivative of block of P 1 with

00:06:15 --> 00:06:22
respect to D of W 1 ok

00:06:18 --> 00:06:24
now I cheated a little bit here because

00:06:21 --> 00:06:26
I used the log function it turns out

00:06:23 --> 00:06:28
because the log function is a mono is a

00:06:25 --> 00:06:30
monotonic increasing function so

00:06:27 --> 00:06:34
increasing P 1 is equivalent to increase

00:06:29 --> 00:06:35
in the log of P 1 ok and it usually with

00:06:33 --> 00:06:41
is formulation stochastic gradient

00:06:34 --> 00:06:41
descent works better any question so far

00:06:40 --> 00:06:49
and then you can also update you know W

00:06:44 --> 00:06:53
2 if the email is to be reply is yes and

00:06:48 --> 00:06:57
you can you can have different way to

00:06:52 --> 00:07:00
update and to if the reply is no so

00:06:56 --> 00:07:03
what's a and then if you have a new

00:06:59 --> 00:07:05
email coming in then you take X and then

00:07:02 --> 00:07:08
you control into the vector then

00:07:04 --> 00:07:13
you compute the first probability ok W 1

00:07:07 --> 00:07:16
time X divided by W exponential W 1 time

00:07:12 --> 00:07:19
X plus exponential or W 2 time X and if

00:07:15 --> 00:07:22
that probability is larger than 0.5 then

00:07:18 --> 00:07:26
you say yes and if that probability is

00:07:21 --> 00:07:28
less than 0.5 then you say no ok so

00:07:25 --> 00:07:30
that's how you do prediction with this

00:07:27 --> 00:07:33
now

00:07:29 --> 00:07:34
this there's a problem with this

00:07:32 --> 00:07:36
representation is that there's some

00:07:33 --> 00:07:39
information loss so somebody in the

00:07:35 --> 00:07:41
audience just said that the order of the

00:07:38 --> 00:07:45
words don't matter and that's that's

00:07:40 --> 00:07:47
true now let's let's fix this problem by

00:07:44 --> 00:07:51
using something called the recurrent

00:07:46 --> 00:07:53
Network and I think a rigid soldier

00:07:50 --> 00:07:57
already talked about recurrent networks

00:07:52 --> 00:08:00
and some part of it yesterday and Andrei

00:07:56 --> 00:08:02
as well now there the idea of a

00:07:59 --> 00:08:05
recurrent Network is basically you have

00:08:01 --> 00:08:07
also have fixed representation for your

00:08:04 --> 00:08:11
input but it actually preserves some

00:08:06 --> 00:08:14
sort of info ordering information and

00:08:10 --> 00:08:16
the way that you compute the hidden

00:08:13 --> 00:08:19
units the following

00:08:15 --> 00:08:23
so the function hash of Euro is

00:08:18 --> 00:08:29
basically hyperbolic hyperbolic tangent

00:08:22 --> 00:08:34
of some some matrix you time the work

00:08:28 --> 00:08:36
vector for the world are okay so Richard

00:08:33 --> 00:08:39
also talk about what vectors yesterday

00:08:35 --> 00:08:41
so you you can take what vectors coming

00:08:38 --> 00:08:43
out of what to back or you can just

00:08:40 --> 00:08:45
actually randomly initialize them if you

00:08:42 --> 00:08:50
want to okay so let's suppose that

00:08:44 --> 00:08:55
's H of zero now H of one would be a

00:08:49 --> 00:09:00
function of H zero and the vector for

00:08:54 --> 00:09:04
you which is a times H of zero plus u

00:08:59 --> 00:09:08
times V of vector u and then you can

00:09:03 --> 00:09:12
keep going with that to see one of my

00:09:07 --> 00:09:16
three three most complicated slides so

00:09:11 --> 00:09:19
you are you should ask questions no

00:09:15 --> 00:09:23
questions so everybody familiar with

00:09:18 --> 00:09:23
recording that sir well

00:09:22 --> 00:09:29
okay so to make predictions with this

00:09:25 --> 00:09:31
but you you tack on the label at the

00:09:28 --> 00:09:34
last step and then you say try to

00:09:30 --> 00:09:43
predict why for me how do you do that

00:09:33 --> 00:09:46
now here I I basically you you went the

00:09:42 --> 00:09:48
way you did before and basically you

00:09:45 --> 00:09:50
make update on the W matrix which is the

00:09:47 --> 00:09:55
classifier at the top like what I

00:09:49 --> 00:09:58
said earlier now but you also have to

00:09:54 --> 00:10:02
update all the relevant matrices which

00:09:57 --> 00:10:06
is the matrix you the matrix a and some

00:10:01 --> 00:10:07
work vectors right so this is basically

00:10:05 --> 00:10:10
ou have to compute the partial

00:10:06 --> 00:10:14
derivative of the last function with

00:10:09 --> 00:10:16
respect to those parameters now that's

00:10:13 --> 00:10:19
going to be very complicated and usually

00:10:15 --> 00:10:22
I when I do that I do that myself I get

00:10:18 --> 00:10:25
hat wrong but there's a lot of tools

00:10:21 --> 00:10:28
out there that you can use which is you

00:10:24 --> 00:10:32
can use auto auto differentiation in

00:10:27 --> 00:10:35
tensor flow or you can call torch or you

00:10:31 --> 00:10:37
can call piano to actually compute the

00:10:34 --> 00:10:39
derivatives and once you have the

00:10:36 --> 00:10:49
derivatives you can just make the update

00:10:38 --> 00:10:52
right yeah yes so you the matrix you are

00:10:48 --> 00:10:57
share so I'm going to go back to one

00:10:51 --> 00:11:03
side so this matrix you I share all for

00:10:56 --> 00:11:05
all vertical matrices right and the size

00:11:02 --> 00:11:09
you have to determine ahead of time for

00:11:04 --> 00:11:12
example the number of column would be

00:11:08 --> 00:11:16
the size of the work vectors but the

00:11:11 --> 00:11:18
number of rows must be like like a

00:11:15 --> 00:11:21
thousand if you want or maybe 255 you

00:11:17 --> 00:11:23
want so this is model selection and it

00:11:20 --> 00:11:26
depends on whether you under fit in over

00:11:22 --> 00:11:29
fitting to choose a bigger model or a

00:11:25 --> 00:11:31
smaller model and your compute power so

00:11:28 --> 00:11:33
that you can train a larger model a

00:11:30 --> 00:11:33
smaller model

00:11:37 --> 00:11:46
the matrix you yeah so the the work

00:11:42 --> 00:11:50
vectors the world vectors the number of

00:11:45 --> 00:11:53
work vectors that you use are the size

00:11:49 --> 00:11:56
of vocabulary right which is so you

00:11:52 --> 00:12:00
gonna tend to end up with 20,000 work

00:11:55 --> 00:12:03
vectors right but the the size of so

00:11:59 --> 00:12:06
that means you have 20,000 rows in

00:12:02 --> 00:12:08
matrix U but the number of column you

00:12:05 --> 00:12:11
can sorry the number of column is 20,000

00:12:07 --> 00:12:15
but the number of row would be you have

00:12:10 --> 00:12:24
to determine up just yourself okay any

00:12:14 --> 00:12:26
other questions now okay so what's a big

00:12:23 --> 00:12:29
picture so the big picture is I started

00:12:25 --> 00:12:33
with bag-of-words representations and

00:12:28 --> 00:12:36
then I talked about a and n as a new way

00:12:32 --> 00:12:38
to represent variable size input that

00:12:35 --> 00:12:40
can capture some sort of ordering

00:12:37 --> 00:12:43
information then I'll talk about Auto

00:12:39 --> 00:12:46
differentiation so that you can compute

00:12:42 --> 00:12:49
the partial derivatives and these you

00:12:45 --> 00:12:52
can find auto intensive flow or piano or

00:12:48 --> 00:12:56
torch now then I talked about stochastic

00:12:51 --> 00:13:02
when descent as a way to train the

00:12:55 --> 00:13:08
neural networks and the question so far

00:13:01 --> 00:13:11
okay you have a question oh that's also

00:13:07 --> 00:13:15
depends on how big your your training

00:13:10 --> 00:13:18
set and how big is your computer and so

00:13:14 --> 00:13:20
n right but usually if you use an N and

00:13:17 --> 00:13:23
if you used like a hidden state of a

00:13:19 --> 00:13:26
hundred you should take like a couple

00:13:22 --> 00:13:29
hours yeah but it depends largely

00:13:25 --> 00:13:30
depends on you know size of

00:13:28 --> 00:13:33
training data because you want to

00:13:29 --> 00:13:34
iterate for all a lot of you sample a

00:13:32 --> 00:13:37
lot of emails right you and you want

00:13:33 --> 00:13:44
your algorithm to see as many emails as

00:13:36 --> 00:13:45
possible right so okay so if you use

00:13:43 --> 00:13:47
such algorithm to just say yes no and

00:13:44 --> 00:13:49
just know then

00:13:46 --> 00:13:55
you might end up losing a lot of friends

00:13:48 --> 00:14:01
because because because we don't just

00:13:54 --> 00:14:02
say yes no because we went to say when

00:14:00 --> 00:14:04
for example my friend asked me are you

00:14:01 --> 00:14:06
visiting Vietnam for the new year walk

00:14:03 --> 00:14:08
then maybe the better answer would be

00:14:05 --> 00:14:13
yes see you soon right that's not better

00:14:07 --> 00:14:16
nicer way to approach this and then if

00:14:12 --> 00:14:17
my friends ask me are you hanging out

00:14:15 --> 00:14:19
with us tonight

00:14:16 --> 00:14:24
so instances say no I would say no I'm

00:14:18 --> 00:14:26
too busy or did you read the coop ok

00:14:23 --> 00:14:31
right so let's let's see how we're going

00:14:25 --> 00:14:33
to fix this so so before I'm gonna tell

00:14:30 --> 00:14:39
you the solution I would say this is the

00:14:33 --> 00:14:42
this problem is drew it basically

00:14:38 --> 00:14:44
requires you to map between variable

00:14:41 --> 00:14:47
size input and some variable to some

00:14:43 --> 00:14:48
variable size output right and if you

00:14:46 --> 00:14:50
can do something like this then there's

00:14:47 --> 00:14:52
a lot of applications because you can do

00:14:49 --> 00:14:55
auto reply which is what we've been

00:14:51 --> 00:14:57
working on so far but we can also work

00:14:54 --> 00:15:00
on user to do translation just like

00:14:56 --> 00:15:03
between English French you can do image

00:14:59 --> 00:15:05
captioning so input would be an a fixed

00:15:02 --> 00:15:08
like vector or representation coming

00:15:04 --> 00:15:11
from conflict and then output would be

00:15:07 --> 00:15:14
the cat sat on the mat right or you can

00:15:10 --> 00:15:16
do summarization the input will be a

00:15:13 --> 00:15:19
document and output would be some summer

00:15:15 --> 00:15:21
summary of it or you can do two speech

00:15:18 --> 00:15:24
transcription where you can have input

00:15:21 --> 00:15:28
would be speech frames and output would

00:15:23 --> 00:15:29
be words or you can do conversation so

00:15:27 --> 00:15:31
basically the input would be the

00:15:28 --> 00:15:34
conversation so far and the output could

00:15:30 --> 00:15:40
be might reply or you can do cue night

00:15:33 --> 00:15:43
etc etc so we can keep going on now so

00:15:39 --> 00:15:45
how do we solve this problem so so this

00:15:42 --> 00:15:47
this is hard so let's check out what

00:15:44 --> 00:15:51
Android capacity has to say about

00:15:46 --> 00:15:52
recurrent networks okay so so Android

00:15:50 --> 00:15:54
say that there's more than one way that

00:15:51 --> 00:15:57
you can configure your network to do

00:15:53 --> 00:16:00
things so we can do you could use your

00:15:56 --> 00:16:01
network to map recurrent networks to map

00:15:59 --> 00:16:05
one two

00:16:00 --> 00:16:08
right so the at the bottom that's an

00:16:04 --> 00:16:12
input the the green would be the hidden

00:16:07 --> 00:16:15
state and the output would be the what

00:16:11 --> 00:16:17
you want to predict now 1 1 2 1 is not

00:16:14 --> 00:16:20
what we want right because we have many

00:16:16 --> 00:16:25
too many so it's probably more like the

00:16:19 --> 00:16:28
last two to the right right but we

00:16:24 --> 00:16:31
arrived as the solution that I said in

00:16:27 --> 00:16:34
the red box and the reason why it does

00:16:30 --> 00:16:36
that's a better solution is because the

00:16:33 --> 00:16:39
the size of the input and the size

00:16:35 --> 00:16:42
of output can vary a lot sometimes you

00:16:38 --> 00:16:45
have smaller input but larger output but

00:16:42 --> 00:16:49
sometimes you have larger input and

00:16:44 --> 00:16:52
smaller output so if you do the one in

00:16:48 --> 00:16:54
the red circle you can be very flexible

00:16:51 --> 00:16:57
right if you do the one to the extreme

00:16:53 --> 00:17:01
right then maybe the output has to be

00:16:56 --> 00:17:04
smaller or at least the same with the

00:17:00 --> 00:17:05
input right which what we are

00:17:03 --> 00:17:07
that's what we don't want

00:17:04 --> 00:17:10
so let's construct a solution that look

00:17:06 --> 00:17:13
like that so okay so here's the solution

00:17:09 --> 00:17:16
so the input would be something like hi

00:17:12 --> 00:17:19
how are you right and then let's put a

00:17:15 --> 00:17:21
special token unless let's say the token

00:17:18 --> 00:17:26
is end and then you're going to predict

00:17:20 --> 00:17:28
he first token which is M and then you

00:17:25 --> 00:17:30
predict the second token fine and then

00:17:27 --> 00:17:33
you predict the throat Oken thanks and

00:17:29 --> 00:17:38
then you keep going on until you predict

00:17:32 --> 00:17:42
he world end and then you stopped now I

00:17:37 --> 00:17:45
want to mention that B in the previous

00:17:41 --> 00:17:47
et of slides I was just talking about

00:17:44 --> 00:17:50
yes and no and ingest no you have only

00:17:46 --> 00:17:53
two choices okay now you have more than

00:17:49 --> 00:17:57
two choices you have actually 20,000

00:17:52 --> 00:17:59
choices and you can actually use the

00:17:56 --> 00:18:01
algorithm that are the the logistic

00:17:58 --> 00:18:04
regression and you can expand it to

00:18:00 --> 00:18:06
cover that more than one more than two

00:18:03 --> 00:18:09
choices you can have a lot of choices

00:18:05 --> 00:18:14
okay and then the algorithm uses just

00:18:08 --> 00:18:16
follow the same way now so dizzy

00:18:13 --> 00:18:18
my first solution when I say walk - sick

00:18:15 --> 00:18:19
but it turns out it didn't work

00:18:17 --> 00:18:21
very well and the reason why I didn't

00:18:18 --> 00:18:24
work very well is the model never know

00:18:20 --> 00:18:27
hat it actually predicted in the in the

00:18:23 --> 00:18:29
last step so it keep a keep going and

00:18:26 --> 00:18:31
you keep synthesizing output but it

00:18:28 --> 00:18:33
didn't know what it said it didn't know

00:18:30 --> 00:18:35
hat decision it committed in the

00:18:32 --> 00:18:37
previous step so a better simpler

00:18:34 --> 00:18:40
solution would look like this a better

00:18:36 --> 00:18:42
solution is you back basically you feed

00:18:39 --> 00:18:47
what the model predicts in the previous

00:18:41 --> 00:18:48
tep as input to the next step alright

00:18:46 --> 00:18:51
so for example in this case I'm going to

00:18:47 --> 00:18:54
take am I'm going to feed it in to the

00:18:50 --> 00:18:57
next step so that I'm conduct completing

00:18:53 --> 00:19:00
the dance in the second world which is

00:18:56 --> 00:19:04
fine and etc so a lot of people call

00:18:59 --> 00:19:06
this concept auto regressive so you you

00:19:03 --> 00:19:10
take your you eat your own output and

00:19:05 --> 00:19:19
make it as your input any questions so

00:19:09 --> 00:19:21
far or whenever it produced end then

00:19:18 --> 00:19:22
just stop there's a special token end

00:19:20 --> 00:19:27
yeah

00:19:21 --> 00:19:30
now okay so the so relevant architecture

00:19:26 --> 00:19:34
here would be the end code people also

00:19:29 --> 00:19:36
call the encoder as the what the

00:19:33 --> 00:19:38
recurrent network in the input and the

00:19:35 --> 00:19:41
decoder would be the recurrent network

00:19:37 --> 00:19:44
in the output okay okay so how do you

00:19:40 --> 00:19:46
train this so again so you basically you

00:19:43 --> 00:19:49
run for a million steps you see all your

00:19:45 --> 00:19:52
emails and then you say you sample and

00:19:48 --> 00:19:56
for each iteration you sample an email X

00:19:51 --> 00:19:59
and a reply why why would be you know

00:19:55 --> 00:20:03
I'm fine thanks right and then the

00:19:58 --> 00:20:05
sample random work YT in Y and then you

00:20:02 --> 00:20:08
pdate the iron and encoder and decoder

00:20:04 --> 00:20:13
parameters so that you can increase the

00:20:07 --> 00:20:17
probability that Y of T is correct given

00:20:12 --> 00:20:20
all what you seen before which is your

00:20:16 --> 00:20:24
YT minus 1 YT minus 2 etc and also all

00:20:19 --> 00:20:25
the axes right and then you have to

00:20:23 --> 00:20:28
compute the partial derivatives to make

00:20:24 --> 00:20:30
it work so the computing part partial

00:20:27 --> 00:20:32
this is very difficult so again I

00:20:29 --> 00:20:35
recommend you to use something like Auto

00:20:31 --> 00:20:43
differentiation intensive flow or torch

00:20:34 --> 00:20:46
or Tiano okay you have a question yeah

00:20:42 --> 00:20:48
but the recurrent Network the number of

00:20:45 --> 00:20:54
parameters didn't change because you

00:20:47 --> 00:20:57
have U and V a UV and I are fixed right

00:20:53 --> 00:21:02
okay so the question in the in the

00:20:56 --> 00:21:04
audience is that there's um if the iron

00:21:01 --> 00:21:07
and are different in four different

00:21:03 --> 00:21:12
example and the answer is yes so the

00:21:06 --> 00:21:21
number of steps and are different I have

00:21:11 --> 00:21:23
a question there okay yeah I'm gonna get

00:21:20 --> 00:21:30
o that in the next slide

00:21:22 --> 00:21:32
yeah okay all right so the question is a

00:21:29 --> 00:21:37
in practice how long would I go to for

00:21:31 --> 00:21:39
the RN I would say if you usually stop

00:21:36 --> 00:21:41
at like 400 steps or something like that

00:21:38 --> 00:21:45
because outside of that it's going to be

00:21:40 --> 00:21:50
too long to make the update and compute

00:21:44 --> 00:21:55
it's very expensive to compute but you

00:21:50 --> 00:21:58
can go more if you want to yeah I have a

00:21:54 --> 00:21:58
question yeah

00:22:02 --> 00:22:09
yeah yeah so that's a problem so if

00:22:06 --> 00:22:11
I'm going to talk about the prediction

00:22:08 --> 00:22:13
ext so let me go to the prediction and

00:22:10 --> 00:22:15
then you can ask questions so okay so

00:22:12 --> 00:22:17
how do you do prediction so this the

00:22:14 --> 00:22:20
first algorithm that can we can you can

00:22:16 --> 00:22:25
do is go greedy decoding okay in greedy

00:22:19 --> 00:22:27
decoding is for any incoming email X I'm

00:22:24 --> 00:22:29
going to find I'm going to predict the

00:22:26 --> 00:22:32
first word okay and then you find the

00:22:28 --> 00:22:35
most likely word and then you feed back

00:22:31 --> 00:22:37
in and then you find the next most

00:22:34 --> 00:22:40
likely word and then then you feed back

00:22:36 --> 00:22:42
in and etc so if you keep going you keep

00:22:39 --> 00:22:45
going until you see the world end and

00:22:41 --> 00:22:46
then stop all it is exceed a certain

00:22:44 --> 00:22:50
length you stop okay

00:22:45 --> 00:22:52
now that's just do greedy okay so let's

00:22:49 --> 00:22:55
do a little bit less greedy so it

00:22:51 --> 00:22:57
urns out that so given X you can

00:22:54 --> 00:22:59
predict more than one candidate so let's

00:22:56 --> 00:23:01
ay you can predict a candidate's let's

00:22:58 --> 00:23:04
ay three okay so you take three

00:23:00 --> 00:23:06
candidates and then for each candidate

00:23:03 --> 00:23:08
you're going to feed in the next step

00:23:05 --> 00:23:09
and then you arrive at three so the next

00:23:07 --> 00:23:12
step you're going to be have nine

00:23:08 --> 00:23:14
candidates right and then you're going

00:23:11 --> 00:23:17
to end up going that way so here's a

00:23:13 --> 00:23:20
picture so given input X I'm going to

00:23:16 --> 00:23:23
predict the first token there would be

00:23:19 --> 00:23:24
hi yes and please and given every first

00:23:22 --> 00:23:26
oken like this I'm going to feed back

00:23:23 --> 00:23:28
into the network and the network will

00:23:25 --> 00:23:30
produce another three and etc so you're

00:23:27 --> 00:23:32
going to end up with a lot of a lot of

00:23:29 --> 00:23:34
candidates so how did you select the

00:23:31 --> 00:23:37
best candidate well you can traverse

00:23:33 --> 00:23:40
ach beam and then you compute the John

00:23:36 --> 00:23:42
probability at each step and then you

00:23:39 --> 00:23:48
find the sequence I have the highest

00:23:41 --> 00:23:54
probability to be the sequence of choice

00:23:47 --> 00:23:57
what is your reply any question to see

00:23:53 --> 00:24:11
the most complicated slide in my talk

00:23:56 --> 00:24:13
oh yeah yes so the question is what do

00:24:10 --> 00:24:14
you do with our vocabulary works now it

00:24:12 --> 00:24:17
urns out in this algorithm what you do

00:24:13 --> 00:24:19
is that for any word that is our

00:24:16 --> 00:24:22
vocabulary you create a token call

00:24:18 --> 00:24:25
unknown and you map everything to

00:24:21 --> 00:24:28
unknown or anything that our vocal every

00:24:24 --> 00:24:30
vocabulary to be unknown so it doesn't

00:24:27 --> 00:24:33
seem very nicely but usually it works

00:24:29 --> 00:24:35
well there's a bunch of algorithms to

00:24:32 --> 00:24:38
address these issues for example they

00:24:34 --> 00:24:38
break it into like characters and things

00:24:37 --> 00:24:40
like that

00:24:37 --> 00:24:50
and then it you could fix this problem

00:24:39 --> 00:24:53
yeah yeah the cost function is that so I

00:24:49 --> 00:24:57
go back one slide so the cost function

00:24:52 --> 00:25:02
e more slide so the cost function is

00:24:56 --> 00:25:05
that you sample a random were YT here

00:25:01 --> 00:25:08
let's suppose that here I this is my

00:25:04 --> 00:25:12
input sofa or an input and I'm sample YT

00:25:07 --> 00:25:15
let's say T is equal to 2 so which means

00:25:11 --> 00:25:18
the work fine okay I'm at the work fine

00:25:14 --> 00:25:20
I want to increase the probability of

00:25:17 --> 00:25:23
the model to predict whoa fine

00:25:19 --> 00:25:26
so the every time the model will make a

00:25:22 --> 00:25:28
lot of predictions some a lot of them

00:25:25 --> 00:25:29
will be incorrect right so you have a

00:25:27 --> 00:25:31
lot of probabilities

00:25:28 --> 00:25:34
you have probability for the water and

00:25:30 --> 00:25:37
the probably a and etc and then probably

00:25:33 --> 00:25:41
for zzzzz right and you have a lot of

00:25:36 --> 00:25:43
probabilities you want the probability

00:25:40 --> 00:25:46
probabilities for the worst for the work

00:25:42 --> 00:25:49
fine to be as high as possible you

00:25:45 --> 00:25:51
increase the probability does that make

00:25:48 --> 00:25:51
sense

00:25:52 --> 00:26:03
or you condition on IIM so you condition

00:25:58 --> 00:26:09
so when I'm at fine my input would be hi

00:26:02 --> 00:26:11
how are you and and um okay that's

00:26:08 --> 00:26:12
all I see and then I need to make

00:26:10 --> 00:26:15
a prediction and I have to make that

00:26:11 --> 00:26:17
prediction right right and you know if

00:26:14 --> 00:26:21
I'm at the world thanks my input would

00:26:16 --> 00:26:24
be hi how are you and I'm fine and I

00:26:20 --> 00:26:29
gotta get my thanks for probability

00:26:23 --> 00:26:38
right okay yeah I have a question here

00:26:28 --> 00:26:40
oh I haven't thought about it yet so the

00:26:37 --> 00:26:43
question is how do you personalize so

00:26:39 --> 00:26:45
well one way to do it is basically embed

00:26:42 --> 00:26:47
a user as a vector so let's suppose that

00:26:44 --> 00:26:49
you have a lot of users and you embed a

00:26:46 --> 00:26:55
user as a vector that's one way to do it

00:26:48 --> 00:26:55
yeah I have a question here

00:27:02 --> 00:27:12
yeah yeah so the question is that let's

00:27:07 --> 00:27:15
uppose that my beam search is 10 then

00:27:11 --> 00:27:17
you go to from 10 like a hundred and

00:27:14 --> 00:27:20
then a thousand and suddenly it grows

00:27:16 --> 00:27:22
very quickly right it go to rule a if

00:27:19 --> 00:27:24
you if your sequence is long then you

00:27:21 --> 00:27:26
end up with K to the N or something like

00:27:23 --> 00:27:28
that well one way to do it is basically

00:27:25 --> 00:27:31
ou do truncate that beam search where

00:27:27 --> 00:27:33
any any sequence with very low

00:27:30 --> 00:27:35
probability you just pick it up you

00:27:32 --> 00:27:40
don't use it anymore so you go so you

00:27:34 --> 00:27:42
can do this you can do 3 9 and then you

00:27:39 --> 00:27:46
ten to seven and then you go back up to

00:27:41 --> 00:27:48
9 right and then you keep going so that

00:27:45 --> 00:27:52
way you don't end up with a huge beam

00:27:47 --> 00:27:54
and usually in practice using like a

00:27:51 --> 00:27:57
beam size of three or ten would work

00:27:53 --> 00:28:05
just fine and whoops wait yeah yeah I

00:27:56 --> 00:28:08
have a question okay so for because it's

00:28:04 --> 00:28:11
a 9n we don't have to Pat the input now

00:28:07 --> 00:28:14
to be fast sometimes we have to Pat the

00:28:10 --> 00:28:16
input because we want to make use make

00:28:13 --> 00:28:19
sure that batch processing what's very

00:28:15 --> 00:28:23
well so you'd be bad but we paired with

00:28:18 --> 00:28:30
only like zero tokens

00:28:22 --> 00:28:32
okay yeah so let's suppose that you have

00:28:29 --> 00:28:34
a sequence of ten then you have a graph

00:28:31 --> 00:28:37
of ten when you have a sequence a batch

00:28:33 --> 00:28:40
of all twenty you haven't made a graph

00:28:36 --> 00:28:46
for twenty and etc yeah that will make

00:28:39 --> 00:28:48
the GPU very happy I have a question

00:28:45 --> 00:28:48
that

00:28:47 --> 00:29:09
oh so so you are you asking sort of so

00:29:06 --> 00:29:12
my interpretation of your question is

00:29:08 --> 00:29:15
how do you insert the world embedding

00:29:11 --> 00:29:17
into the model is that correct our user

00:29:14 --> 00:29:19
embed an old if you want to personalize

00:29:16 --> 00:29:22
the thing then at the beginning you have

00:29:18 --> 00:29:25
a vector and that's a vector for quoc

00:29:21 --> 00:29:28
with a ID one two three four five and

00:29:24 --> 00:29:37
then if is Peter then the vector would

00:29:27 --> 00:29:38
be five six seven eight yeah yeah that's

00:29:36 --> 00:29:40
one way to do it

00:29:37 --> 00:29:42
yeah well there's more than one way you

00:29:39 --> 00:29:45
can do it at the end or you can do it at

00:29:41 --> 00:29:47
he beginning or you can insert a tab at

00:29:44 --> 00:29:49
every prediction steps but my proposal

00:29:46 --> 00:29:52
is just predict put it at the beginning

00:29:48 --> 00:29:56
the simpler okay I have a question there

00:29:51 --> 00:29:56
yeah you

00:30:00 --> 00:30:04
yeah

00:30:07 --> 00:30:14
that's a very good question the question

00:30:09 --> 00:30:16
is what if the model details right if we

00:30:13 --> 00:30:18
make a prediction and then that's a bad

00:30:15 --> 00:30:20
prediction and your model never see and

00:30:17 --> 00:30:22
then it keeps detailing and it will

00:30:19 --> 00:30:24
pretty produce garbage yeah that's a

00:30:21 --> 00:30:31
good question so I'm going to

00:30:23 --> 00:30:33
get to that so well so this is sly so

00:30:30 --> 00:30:35
there's an algorithm for scheduled

00:30:32 --> 00:30:39
sampling so in scheduled sampling what

00:30:34 --> 00:30:42
you do is you you instead of feeding the

00:30:38 --> 00:30:45
truth during training you can fee feet

00:30:41 --> 00:30:47
what sample from the sub max so what

00:30:44 --> 00:30:50
generated by the model and then feed in

00:30:46 --> 00:30:53
as input so that the model understands

00:30:49 --> 00:30:55
that if it produce something bad it

00:30:52 --> 00:31:00
would suck actually can recover from it

00:30:54 --> 00:31:05
right so that's that's one way to

00:30:59 --> 00:31:11
address this issue is that make sense

00:31:04 --> 00:31:20
yeah any question there's a question

00:31:10 --> 00:31:23
here okay yeah yeah yeah so in this

00:31:19 --> 00:31:27
algorithm yeah the question is how large

00:31:22 --> 00:31:29
is the the size of the Dakota well my

00:31:26 --> 00:31:32
answer is that try to be as large as

00:31:28 --> 00:31:34
possible but it's going to be very slow

00:31:31 --> 00:31:39
and in this algorithm what happens is

00:31:33 --> 00:31:42
that you you use the same you use like

00:31:38 --> 00:31:45
fixed length embedding for like to

00:31:41 --> 00:31:48
represent the very very much the long

00:31:44 --> 00:31:50
term dependency like a huge input right

00:31:47 --> 00:31:53
and that's going to be a problem so I'm

00:31:49 --> 00:31:56
going to come back to that issue with

00:31:52 --> 00:32:00
e attention model in a second okay

00:31:55 --> 00:32:00
any question okay here's a question

00:32:02 --> 00:32:14
ah so does the model learn synonyms is

00:32:11 --> 00:32:28
that a question or what's the question

00:32:13 --> 00:32:30
oh I see well yeah it turns out that if

00:32:27 --> 00:32:33
you learn it turns out that it mapped

00:32:29 --> 00:32:36
good and if you visualize embedding the

00:32:32 --> 00:32:39
good and fine and so on I'm not very

00:32:35 --> 00:32:44
closely to the to the embedding space

00:32:38 --> 00:32:46
but in the output there's we don't know

00:32:43 --> 00:32:48
hat else to do the other approach is

00:32:45 --> 00:32:51
basically to train the world embeddings

00:32:47 --> 00:32:53
using water vac and then try to ask the

00:32:50 --> 00:32:56
model to regress to the world imbalance

00:32:52 --> 00:32:58
right so that's one way to address this

00:32:55 --> 00:33:00
sue we tried something like that did

00:32:57 --> 00:33:04
not work very well so whatever we have

00:32:59 --> 00:33:06
in here was pretty good okay I have to

00:33:03 --> 00:33:09
keep going but like any way the

00:33:05 --> 00:33:12
algorithm that you've seen so far turns

00:33:08 --> 00:33:15
out actually answer some emails so if

00:33:11 --> 00:33:20
you use the smart reply feature in inbox

00:33:14 --> 00:33:22
it's already used this system in

00:33:19 --> 00:33:24
production now for example in the indc

00:33:21 --> 00:33:28
me email my colleague Ricardo got an

00:33:23 --> 00:33:31
email from his friend saying that hey we

00:33:27 --> 00:33:33
wanted to invite you to join us from the

00:33:30 --> 00:33:36
arly Thanksgiving on November 22nd

00:33:32 --> 00:33:38
beginning around 2:00 p.m. please bring

00:33:35 --> 00:33:41
your favorite dish and reserve by next

00:33:37 --> 00:33:43
week and then it would propose three

00:33:40 --> 00:33:46
answers for example the first answer

00:33:42 --> 00:33:48
would be telecine second answer would be

00:33:45 --> 00:33:51
will be there and the third answer is

00:33:47 --> 00:33:53
orry we won't be able to make it now

00:33:50 --> 00:33:55
this where do these three answer come

00:33:52 --> 00:33:58
from those those are the beams now

00:33:54 --> 00:33:59
there's an algorithm to actually figure

00:33:57 --> 00:34:01
out the diversity as well of the beams

00:33:58 --> 00:34:04
o that you don't end up with very

00:34:00 --> 00:34:07
similar answers so there's an algorithm

00:34:03 --> 00:34:09
that like a heuristic that make these

00:34:06 --> 00:34:12
beams a little bit more diverse and then

00:34:08 --> 00:34:14
they pick the best three to present to

00:34:11 --> 00:34:14
you

00:34:14 --> 00:34:20
okay any question yeah I have a question

00:34:17 --> 00:34:20
here

00:34:22 --> 00:34:28
yeah there's no guarantees so the

00:34:24 --> 00:34:30
question is how do I guarantee that the

00:34:27 --> 00:34:34
beam would terminate an end now

00:34:29 --> 00:34:35
there's no guarantee it can go on

00:34:33 --> 00:34:37
forever the indeed there are certain

00:34:34 --> 00:34:39
cases like that if you don't train the

00:34:36 --> 00:34:41
model very well now but if you train the

00:34:38 --> 00:34:45
model well with with very good accuracy

00:34:40 --> 00:34:48
then the model usually terminates highly

00:34:44 --> 00:34:51
see any cases that it don't terminate it

00:34:47 --> 00:34:54
doesn't terminate yeah but there are

00:34:50 --> 00:34:58
some corner cases that it will do funny

00:34:53 --> 00:35:00
things but you you can stop the model

00:34:57 --> 00:35:01
after like a thousand or hundred or

00:34:59 --> 00:35:04
something like that so that you make

00:35:00 --> 00:35:07
sure that the model doesn't do that

00:35:03 --> 00:35:10
doesn't go on crazy right I have a

00:35:06 --> 00:35:10
question here

00:35:17 --> 00:35:22
that's very interesting yeah it just

00:35:19 --> 00:35:24
comes out because there's a lot of

00:35:21 --> 00:35:25
emails and if you invite someone there's

00:35:23 --> 00:35:27
more than one person and it might be it

00:35:24 --> 00:35:29
learns about Thanksgiving it just mean

00:35:26 --> 00:35:30
inviting the whole family things like

00:35:28 --> 00:35:35
that yeah

00:35:29 --> 00:35:38
it just learned from statistics yeah or

00:35:34 --> 00:35:48
maybe that something like that yeah okay

00:35:37 --> 00:35:51
oh in industry algorithm so the

00:35:47 --> 00:35:53
question is do I do any post processing

00:35:50 --> 00:35:56
to correct the grammar of the beams in

00:35:52 --> 00:36:03
this algorithm we did not have to do it

00:35:55 --> 00:36:03
yeah okay I have another question

00:36:12 --> 00:36:18
so okay so the question how contextual

00:36:15 --> 00:36:21
so I would say we don't have any user

00:36:17 --> 00:36:23
embedding in this so it's pretty general

00:36:20 --> 00:36:28
the input would be the previous emails

00:36:22 --> 00:36:32
and the output would be the prediction

00:36:27 --> 00:36:37
the reply that's all we have so it sees

00:36:31 --> 00:36:43
a context which is the threat sofa okay

00:36:36 --> 00:36:46
did I answer your question okay yeah we

00:36:42 --> 00:36:55
you can catch me up after the talk yeah

00:36:45 --> 00:37:04
oh yeah it ran down too so yeah slow

00:36:54 --> 00:37:06
question oh oh I see

00:37:03 --> 00:37:08
so the question is there's some some

00:37:05 --> 00:37:10
mails are not relevant for a smart

00:37:07 --> 00:37:12
apply maybe they've too long or you

00:37:09 --> 00:37:15
should not reply or something like that

00:37:11 --> 00:37:17
so in fact we have two algorithms so one

00:37:14 --> 00:37:22
hour with them this is to say yes or no

00:37:16 --> 00:37:24
to reply right and then after it passes

00:37:21 --> 00:37:26
the threshold there's an algorithm to

00:37:23 --> 00:37:28
run to produce the threshold so it's a

00:37:25 --> 00:37:33
combine of two our rhythms that are

00:37:27 --> 00:37:36
actually I presented earlier yeah I have

00:37:32 --> 00:37:37
to get going but you can get back to the

00:37:35 --> 00:37:39
question so there's a lot of a more

00:37:36 --> 00:37:41
interesting stuff coming along okay so

00:37:38 --> 00:37:44
what's a big picture so far so the

00:37:40 --> 00:37:47
big picture is that we have an i NN

00:37:43 --> 00:37:50
encoder that it's all the input and then

00:37:46 --> 00:37:52
we have an iron and decoder the trying

00:37:49 --> 00:37:56
to predict one token at a time in the

00:37:51 --> 00:37:58
output now everything else force is the

00:37:55 --> 00:38:02
same way so you can use stochastic when

00:37:57 --> 00:38:05
you sent to train the algorithm and then

00:38:01 --> 00:38:08
you you do beam search decoding usually

00:38:04 --> 00:38:10
ou do app in search of up 3 and then

00:38:07 --> 00:38:12
you should be able to find good food

00:38:09 --> 00:38:17
good beam with the highest probability

00:38:11 --> 00:38:20
now someone in the audience brought up

00:38:16 --> 00:38:22
the issue that we use fixed length

00:38:19 --> 00:38:23
representation so just before you you

00:38:21 --> 00:38:24
make a prediction

00:38:22 --> 00:38:27
the

00:38:23 --> 00:38:29
Japan the hm and the white thing right

00:38:26 --> 00:38:32
before you go to the Dakota okay

00:38:28 --> 00:38:34
that is the fixed-line representation

00:38:31 --> 00:38:37
and you can think of it as like it's a

00:38:33 --> 00:38:40
vector that capture all everything in

00:38:36 --> 00:38:43
the in the input right it could be a

00:38:39 --> 00:38:45
thousand words or could be five words

00:38:42 --> 00:38:46
and you use a fixed length

00:38:44 --> 00:38:51
representation for a variable length

00:38:45 --> 00:38:54
input which is kind of not so nice so we

00:38:50 --> 00:38:56
want to to fix that issue so there's an

00:38:53 --> 00:39:01
algorithm coming along and it's actually

00:38:55 --> 00:39:05
invented at a at University of Montreal

00:39:00 --> 00:39:08
you're sure he's here so the idea is to

00:39:04 --> 00:39:10
use an attention so how does an

00:39:07 --> 00:39:12
attention work so in principle what you

00:39:09 --> 00:39:14
want is something like this every time

00:39:11 --> 00:39:17
before you make a prediction let's say

00:39:13 --> 00:39:20
ou predict the world am you kind of won

00:39:16 --> 00:39:23
a loop again at all the hidden state so

00:39:19 --> 00:39:28
far you want to look at all what you see

00:39:22 --> 00:39:30
in the input software okay now say when

00:39:27 --> 00:39:32
you do fine you also want to see all the

00:39:29 --> 00:39:37
hidden state of the input sofa

00:39:31 --> 00:39:39
nd and on now how do you do that in as

00:39:36 --> 00:39:43
a program so well you can do this so you

00:39:38 --> 00:39:46
H of M you predict a vector C let's say

00:39:42 --> 00:39:48
that vector is the same dimension with

00:39:45 --> 00:39:51
all the H okay

00:39:47 --> 00:39:53
so if the your H of one each dimension

00:39:50 --> 00:39:56
of 100 then C also have a dimension of

00:39:52 --> 00:39:58
100 okay and then you take C and then

00:39:55 --> 00:40:00
you do dot product dot product with all

00:39:57 --> 00:40:06
the H okay and then you have

00:39:59 --> 00:40:11
coefficients a 0 a 1 blah blah blah to a

00:40:05 --> 00:40:13
to the N okay and those are scalars okay

00:40:10 --> 00:40:15
and then after you have those scalars

00:40:12 --> 00:40:19
you compute something called the beta

00:40:14 --> 00:40:22
which is basically I stop max of all the

00:40:18 --> 00:40:26
Alpha right so 2q compute that you take

00:40:21 --> 00:40:30
the exponent bi is an exponential our AI

00:40:25 --> 00:40:35
divided by the sum of Exponential's okay

00:40:29 --> 00:40:37
and then you take those bi and then

00:40:34 --> 00:40:39
multiply by H by

00:40:36 --> 00:40:42
and then you take the weighted average

00:40:38 --> 00:40:45
and then you take the sum and then you

00:40:41 --> 00:40:48
send it to add additional signal to

00:40:44 --> 00:40:50
predict the war and and then you keep

00:40:47 --> 00:40:52
going with that right so in the next

00:40:49 --> 00:40:53
step you also predict another C and then

00:40:51 --> 00:40:56
you take that C to compute the dot

00:40:52 --> 00:40:58
product you compute the B the a and then

00:40:55 --> 00:41:00
you can compute the B you can take the B

00:40:57 --> 00:41:03
you do the weighted average and then you

00:40:59 --> 00:41:05
send it to the next time to send it to

00:41:02 --> 00:41:06
the prediction and then you use

00:41:04 --> 00:41:10
stochastic when you send to Train

00:41:05 --> 00:41:12
everything okay

00:41:09 --> 00:41:18
and this autumn is implemented in

00:41:11 --> 00:41:19
tensorflow okay so how how into table

00:41:17 --> 00:41:21
what is going on here so let's suppose

00:41:18 --> 00:41:26
that you want to use this for

00:41:20 --> 00:41:28
translation so in translation you wanna

00:41:25 --> 00:41:33
for example the input would be hi how

00:41:27 --> 00:41:35
are you and the output is Ola combos

00:41:32 --> 00:41:38
paths or something like that okay and

00:41:34 --> 00:41:42
then when you put it the first word you

00:41:37 --> 00:41:45
want Ola to correspond to the world hi

00:41:41 --> 00:41:48
okay because there's an one-to-one

00:41:44 --> 00:41:50
mapping between the word high and Ola so

00:41:47 --> 00:41:53
if you use the attention model the

00:41:49 --> 00:41:56
beta's that you learn will put a strong

00:41:52 --> 00:41:59
wait for the words Ola for the world

00:41:55 --> 00:42:00
high and then it has a smaller wait for

00:41:58 --> 00:42:03
all the stuff and then if you keep going

00:41:59 --> 00:42:07
then when you say Como's then it will

00:42:02 --> 00:42:10
focus on how and etc okay so it moves

00:42:06 --> 00:42:12
that coefficient it put a strong

00:42:09 --> 00:42:14
emphasis on the relevant world and

00:42:11 --> 00:42:16
especially for translation it's

00:42:13 --> 00:42:18
extremely useful because you know the

00:42:15 --> 00:42:22
one-to-one mapping between the input and

00:42:17 --> 00:42:26
output any question so far this is

00:42:21 --> 00:42:29
definitely very complicated yeah I have

00:42:25 --> 00:42:29
a question

00:42:30 --> 00:42:38
all right now the beta other day and be

00:42:35 --> 00:42:40
alone so I don't I don't

00:42:37 --> 00:42:42
and so the question is how do I deal

00:42:39 --> 00:42:44
with languages where the order them like

00:42:41 --> 00:42:47
reverse for example English to Chinese

00:42:44 --> 00:42:49
Japanese right so some of the verbs get

00:42:46 --> 00:42:54
moved and things like that well I didn't

00:42:48 --> 00:42:57
I did not have cold air be they are

00:42:53 --> 00:43:01
learned so by virtue of learning they

00:42:56 --> 00:43:05
will figure out what beta to put right

00:43:00 --> 00:43:07
o wait the input and those are computer

00:43:04 --> 00:43:12
basically computed migrated set right so

00:43:06 --> 00:43:20
they just keep on learning okay I have a

00:43:11 --> 00:43:21
questionnaire okay yeah so the question

00:43:19 --> 00:43:24
is are they any work on putting

00:43:20 --> 00:43:27
attention in the output yeah I think I

00:43:23 --> 00:43:29
think you can do that I'm not too

00:43:26 --> 00:43:31
familiar with any work in here but I

00:43:28 --> 00:43:33
think it's possible to do it I think

00:43:30 --> 00:43:36
some people explore something like that

00:43:32 --> 00:43:42
yeah any question

00:43:35 --> 00:43:42
oh I have a question another question

00:43:44 --> 00:43:48
yeah

00:43:48 --> 00:43:56
yeah yeah yeah so so the question

00:43:53 --> 00:44:00
is less about because right now the

00:43:55 --> 00:44:03
world hi is capitalized at the first

00:43:59 --> 00:44:06
character it doesn't mean I'm using two

00:44:02 --> 00:44:08
n or n vocabulary size so in practice

00:44:05 --> 00:44:10
you we should do some normalization if

00:44:07 --> 00:44:12
you have a small data set what you

00:44:09 --> 00:44:16
should do is you normalize the tax so

00:44:11 --> 00:44:17
high will be like lowercase and etc now

00:44:15 --> 00:44:21
if you have a huge data set doesn't

00:44:16 --> 00:44:29
matter we just learn okay yeah

00:44:20 --> 00:44:31
I have a question there right yeah so it

00:44:28 --> 00:44:33
so the question is in a sense it's

00:44:30 --> 00:44:39
capture the the positional information

00:44:32 --> 00:44:45
in the import yeah I agree I have a

00:44:38 --> 00:44:48
question there a pattern punctuation ah

00:44:44 --> 00:44:51
so the question is what do I do with

00:44:47 --> 00:44:54
punctuation well they are in right now

00:44:50 --> 00:44:58
I just present the algorithm as if it's

00:44:53 --> 00:45:00
a very simple implementation like the

00:44:57 --> 00:45:04
very basic but one thing that you can do

00:44:59 --> 00:45:07
is you you before you train the

00:45:03 --> 00:45:10
algorithm you put a space between the

00:45:06 --> 00:45:12
world and the punctuation so that you do

00:45:09 --> 00:45:14
some that is that step is called

00:45:11 --> 00:45:17
tokenization or normalization in

00:45:13 --> 00:45:20
language processing so you can use any

00:45:16 --> 00:45:22
like a stanford NLP package or something

00:45:19 --> 00:45:24
like that to normalize your text so that

00:45:21 --> 00:45:26
is easy to train now if you have

00:45:23 --> 00:45:32
infinite data then if you just learn

00:45:25 --> 00:45:33
itself okay so I should get going

00:45:31 --> 00:45:36
because there's a lot of other

00:45:32 --> 00:45:39
interesting stuff okay so it turns out

00:45:35 --> 00:45:41
hat the the basic implementation but if

00:45:38 --> 00:45:44
you want to get good results and if you

00:45:40 --> 00:45:45
have big data sets so one thing that you

00:45:43 --> 00:45:48
can do is to make the network deep and

00:45:44 --> 00:45:49
one way to make deep is is in the

00:45:47 --> 00:45:52
following way

00:45:48 --> 00:45:54
so you stack your your recurrent network

00:45:51 --> 00:45:56
on top of each other right so you know

00:45:53 --> 00:45:59
like in the first sequence of sequence

00:45:55 --> 00:46:00
paper we use a network of four but

00:45:58 --> 00:46:01
people are gradually increasing to like

00:45:59 --> 00:46:04
six

00:46:00 --> 00:46:06
I and so on right now and they getting

00:46:03 --> 00:46:08
better and better result like in image

00:46:05 --> 00:46:13
net if you make a network people you

00:46:07 --> 00:46:15
also get better results okay so i if you

00:46:12 --> 00:46:20
wanna train sequin to sequins with

00:46:14 --> 00:46:23
attention then do a couple years ago

00:46:19 --> 00:46:26
when we like many laps working on this

00:46:22 --> 00:46:29
problem were behind the state-of-the-art

00:46:25 --> 00:46:35
but right now in translation many

00:46:28 --> 00:46:36
translation tasks basically this model

00:46:34 --> 00:46:38
our audio already achieved

00:46:35 --> 00:46:41
state-of-the-art without in a lot of

00:46:37 --> 00:46:45
these the pomt datasets so to train this

00:46:40 --> 00:46:48
model so number one is that as i said

00:46:44 --> 00:46:53
you might end up with a lot of

00:46:47 --> 00:46:55
vocabulary our vocal vocabulary issues

00:46:52 --> 00:46:58
o what Barack Obama will be this an

00:46:55 --> 00:47:01
unknown right Hillary Clinton and season

00:46:57 --> 00:47:04
unknown now you you might use something

00:47:00 --> 00:47:06
like what segments right so you segment

00:47:03 --> 00:47:12
he words out for example Barack Obama

00:47:05 --> 00:47:13
would be bar and drag and etc or you can

00:47:11 --> 00:47:17
use all the smart algorithms for example

00:47:12 --> 00:47:19
word character split you can split words

00:47:16 --> 00:47:20
that have unknown to be in two

00:47:18 --> 00:47:22
characters and then you treat the meta

00:47:19 --> 00:47:23
character there's some work at Stanford

00:47:21 --> 00:47:26
and they prove that it works very well

00:47:22 --> 00:47:30
so that's one way to do it you know tip

00:47:25 --> 00:47:31
number two is that you you when you

00:47:29 --> 00:47:33
train this algorithm because you when

00:47:30 --> 00:47:36
you do back propagation or forward

00:47:32 --> 00:47:38
propagation you multiply you essentially

00:47:35 --> 00:47:44
multiply a matrix many many times so you

00:47:37 --> 00:47:48
have explosion of function value or or

00:47:43 --> 00:47:50
the gradient or implosion as well now

00:47:47 --> 00:47:52
one thing that you can do is you click

00:47:49 --> 00:47:55
the grade in a certain value right so

00:47:51 --> 00:47:58
you say that if the gradient magnitude

00:47:54 --> 00:48:01
of the gradient is larger than 10 set it

00:47:57 --> 00:48:06
o ten okay then tip number three is to

00:48:01 --> 00:48:08
use giu or in our work we use a long

00:48:05 --> 00:48:10
short term memory okay so I want to

00:48:07 --> 00:48:12
revisit this long short-term memory

00:48:09 --> 00:48:14
business a little bit okay so what's the

00:48:11 --> 00:48:17
long short-term memory so in

00:48:13 --> 00:48:21
use an iron cell basically you can

00:48:16 --> 00:48:24
catenate your input and your the the

00:48:20 --> 00:48:26
hidden state and then you multiply by

00:48:23 --> 00:48:29
some theta and then you apply with some

00:48:25 --> 00:48:32
activation function let's say that's a

00:48:28 --> 00:48:38
hyperbolic tangent okay now that's the

00:48:31 --> 00:48:41
simple function for n n now in lsdm you

00:48:37 --> 00:48:45
basically you multiply the input and

00:48:40 --> 00:48:48
hash by a huge big matrix let's call

00:48:44 --> 00:48:51
that theta that theta is four times

00:48:47 --> 00:48:54
bigger than the theta I said in the iron

00:48:50 --> 00:48:57
and cell and then you're going to take

00:48:53 --> 00:49:00
that Z okay that coming out you split it

00:48:56 --> 00:49:04
into four blocks its block you can

00:48:59 --> 00:49:06
compute the gates and then you you use

00:49:03 --> 00:49:09
the the value of a something called like

00:49:05 --> 00:49:11
the cell and then you keep adding the

00:49:08 --> 00:49:14
newly computed computed values to the

00:49:10 --> 00:49:17
cell so there's this apart here that I

00:49:13 --> 00:49:19
say that the integral of C is that what

00:49:16 --> 00:49:21
it does is basically it keep a hidden

00:49:18 --> 00:49:24
state where it keep adding information

00:49:20 --> 00:49:26
to it so it doesn't multiply information

00:49:23 --> 00:49:27
but it's keep adding information you

00:49:25 --> 00:49:30
don't need to know a lot of this if you

00:49:26 --> 00:49:35
want to just apply a SDM because it's

00:49:29 --> 00:49:38
already implemented intensive law any

00:49:34 --> 00:49:38
questions so far

00:49:37 --> 00:49:44
okay so in terms of applications you can

00:49:42 --> 00:49:46
use this thing to do

00:49:43 --> 00:49:48
summarization so I've seen I started

00:49:45 --> 00:49:51
seeing work in some radiation pretty

00:49:47 --> 00:49:54
exciting you can do image captioning so

00:49:50 --> 00:49:58
and the input in that case would just be

00:49:53 --> 00:50:01
a representation of an image coming out

00:49:58 --> 00:50:04
from vgg or coming out for google net

00:50:00 --> 00:50:06
and etc and then you send it to the I

00:50:03 --> 00:50:10
end and and we do the decoding for you

00:50:05 --> 00:50:13
can use it for speech recognition

00:50:09 --> 00:50:18
or transcription or you can use it for

00:50:12 --> 00:50:20
QA so to the next part of the project

00:50:17 --> 00:50:21
he top and we'll talk a little bit

00:50:19 --> 00:50:27
about speech recognition

00:50:20 --> 00:50:28
okay so well in speech recognition the

00:50:26 --> 00:50:30
input could be maybe

00:50:27 --> 00:50:35
waveforms right and then an output could

00:50:29 --> 00:50:38
be some words you know hi how's it well

00:50:34 --> 00:50:41
one thing that you can do is you drop

00:50:37 --> 00:50:43
your input into Windows that's the green

00:50:40 --> 00:50:45
box is there and then you crop a lot of

00:50:42 --> 00:50:48
them and then you send a lot of them to

00:50:44 --> 00:50:51
an iron and then you convert it into MFC

00:50:47 --> 00:50:53
see before you send to Ana MFC see or

00:50:50 --> 00:50:57
spectrogram or something like that okay

00:50:52 --> 00:51:01
and then you use the algorithm that I

00:50:56 --> 00:51:04
said earlier and then with attention and

00:51:00 --> 00:51:06
then you do the transcription you

00:51:03 --> 00:51:10
predict one word at a time in the output

00:51:05 --> 00:51:13
now the problem with this algorithm is

00:51:09 --> 00:51:16
that in turn when it comes to speech you

00:51:12 --> 00:51:18
end up with a lot of input right you can

00:51:15 --> 00:51:20
end up with thousands and thousand steps

00:51:17 --> 00:51:23
o back propagating in time even with

00:51:19 --> 00:51:26
attention can be difficult now one thing

00:51:22 --> 00:51:29
that you can do is basically you do some

00:51:25 --> 00:51:32
kind of a pyramid to map the input so

00:51:28 --> 00:51:35
you if you do enough layers you can

00:51:31 --> 00:51:40
divide your input into a factor of eight

00:51:34 --> 00:51:46
or sixteen if you do enough layers right

00:51:39 --> 00:51:48
and then you produce the output so we we

00:51:45 --> 00:51:52
work in on an implementation where the

00:51:47 --> 00:51:53
output is actually characters like like

00:51:51 --> 00:51:58
the in the by - squawk where they have

00:51:52 --> 00:52:00
the ctc now I have to say that the

00:51:57 --> 00:52:02
strength of this algorithm is that you

00:51:59 --> 00:52:05
actually have an implicit language model

00:52:01 --> 00:52:08
in the output so when I say I when I

00:52:04 --> 00:52:09
have the word how is actually

00:52:07 --> 00:52:12
conditioned on hi

00:52:08 --> 00:52:14
and stop before right and including the

00:52:11 --> 00:52:19
input so there's an implicit language

00:52:13 --> 00:52:22
model already but the problem with this

00:52:18 --> 00:52:25
that actually you have to wait until

00:52:21 --> 00:52:28
the end of the input to do the coding so

00:52:24 --> 00:52:30
the decoding has to be done offline okay

00:52:27 --> 00:52:34
so if you use this for voice search it

00:52:29 --> 00:52:36
might not be too nice because people

00:52:33 --> 00:52:40
want to see the some some output right

00:52:35 --> 00:52:41
away okay so in that case there's an

00:52:39 --> 00:52:43
algorithm that can use it

00:52:40 --> 00:52:48
do it in an online fashion

00:52:42 --> 00:52:51
block-by-block now also I have to

00:52:47 --> 00:52:53
mention that in translation this hour

00:52:50 --> 00:52:54
the sequence sequence a wit attention

00:52:52 --> 00:52:57
works great

00:52:53 --> 00:52:59
it's a among the stay of the art but

00:52:56 --> 00:53:03
when it comes to speech it doesn't work

00:52:58 --> 00:53:06
as well as the CDC at least in published

00:53:02 --> 00:53:08
results we're not as good as CDC which

00:53:05 --> 00:53:13
is whatever what Adam talked earlier or

00:53:07 --> 00:53:17
some of the hmm DNN hybrid which is

00:53:12 --> 00:53:21
the most Wylie speech system

00:53:16 --> 00:53:24
currently so I want to pause there and

00:53:20 --> 00:53:31
then I can take questions any questions

00:53:23 --> 00:53:31
I have a question at the back yeah yeah

00:53:53 --> 00:54:03
Oh so how does the book in translation

00:54:00 --> 00:54:07
well in translation what we do is

00:54:02 --> 00:54:11
basically we have pairs of sentences so

00:54:06 --> 00:54:14
for example hi how are you and then hola

00:54:10 --> 00:54:16
como estas right and then we have pairs

00:54:13 --> 00:54:19
of sentences like this and then we just

00:54:15 --> 00:54:21
feed it into the turns out into the

00:54:18 --> 00:54:23
sequence two sequences attention at

00:54:20 --> 00:54:25
every step we again we're going to

00:54:22 --> 00:54:27
predict one word at a time but before we

00:54:24 --> 00:54:30
make a prediction the model has the

00:54:26 --> 00:54:33
attention so it actually see the the

00:54:29 --> 00:54:34
input once more before it makes a

00:54:32 --> 00:54:37
prediction that's how it works

00:54:33 --> 00:54:41
now what is can you repeat okay what is

00:54:36 --> 00:54:41
the issue with with a model again please

00:54:43 --> 00:54:47
yeah

00:54:59 --> 00:55:06
I see well I I can't quite follow the

00:55:04 --> 00:55:08
question but let's take it offline

00:55:05 --> 00:55:12
is that okay yeah yeah and then we can

00:55:07 --> 00:55:12
do some paper okay together

00:55:13 --> 00:55:34
I have a question yeah yeah yeah okay so

00:55:31 --> 00:55:37
the model I did the inbox thing that I

00:55:33 --> 00:55:39
presented it was on in English but

00:55:36 --> 00:55:40
here's no limitation in the model in

00:55:38 --> 00:55:44
terms of language so let's suppose that

00:55:39 --> 00:55:46
you in your inbox that you sometimes you

00:55:43 --> 00:55:48
write in English and sometimes you you

00:55:45 --> 00:55:51
write in in Vietnamese or sometimes you

00:55:47 --> 00:55:53
write it in Spanish whatever and you

00:55:50 --> 00:55:54
personalize by user embedding that I

00:55:52 --> 00:55:57
would say that it will just learn your

00:55:53 --> 00:55:59
behavior and then we will basically

00:55:56 --> 00:56:01
predict the world that you want you make

00:55:58 --> 00:56:04
you but make sure that your your output

00:56:00 --> 00:56:06
bank vocabulary is large enough so that

00:56:03 --> 00:56:10
it covers not only the English words but

00:56:05 --> 00:56:11
also the Spanish word and etc like

00:56:09 --> 00:56:14
Vietnamese and so on so your vocabulary

00:56:10 --> 00:56:15
gonna be not going to be 20,000 it's

00:56:13 --> 00:56:18
going to be like a hundred thousand

00:56:14 --> 00:56:20
because you have more choices and then

00:56:17 --> 00:56:25
you have to change your model on on

00:56:19 --> 00:56:27
those examples yeah it's a matter of the

00:56:24 --> 00:56:36
training data that's all okay I have a

00:56:26 --> 00:56:36
questionnaire yeah

00:56:38 --> 00:56:43
yeah I saw the question is that in

00:56:41 --> 00:56:45
the case of voice search right now you

00:56:42 --> 00:56:47
have to wait at the end to make a

00:56:44 --> 00:56:49
prediction is there any otherwise yeah

00:56:46 --> 00:56:51
the answer yes you can make a

00:56:48 --> 00:56:53
prediction block by block so you can

00:56:50 --> 00:56:55
actually figure out like an algorithm a

00:56:52 --> 00:56:57
simple algorithm to actually segment the

00:56:54 --> 00:56:59
speech and then make a prediction and

00:56:56 --> 00:57:01
then take the prediction and feed it it

00:56:58 --> 00:57:03
as input at the next block so you can

00:57:00 --> 00:57:06
keep going like that so you in theory

00:57:02 --> 00:57:10
ou can actually do online decoding but

00:57:05 --> 00:57:12
I'm saying that the work on you can

00:57:09 --> 00:57:15
do online decoding but that work is

00:57:11 --> 00:57:25
currently work in progress how about

00:57:14 --> 00:57:25
hat okay I have a question there yeah

00:57:31 --> 00:57:38
over here so we have some input email

00:57:35 --> 00:57:41
and then some output email where export

00:57:37 --> 00:57:50
written emails reply and then you can

00:57:40 --> 00:57:53
just strain it that way yeah yeah okay I

00:57:49 --> 00:57:53
have a couple questions

00:58:01 --> 00:58:14
yeah yeah the question is that in speech

00:58:11 --> 00:58:17
recognition the CDC seems to be a very

00:58:13 --> 00:58:19
nice framework because it match it laser

00:58:16 --> 00:58:22
like a monotonic increase Minh in the

00:58:18 --> 00:58:24
output and the input but let CTC make

00:58:21 --> 00:58:25
this independent assumption it doesn't

00:58:23 --> 00:58:27
have a language model in it

00:58:24 --> 00:58:31
maybe that's the the sequence of

00:58:26 --> 00:58:32
sequence I can address this oh yeah I

00:58:30 --> 00:58:35
think that's a great idea

00:58:31 --> 00:58:39
maybe we should write a paper together

00:58:34 --> 00:58:41
okay I think I think I haven't seen it

00:58:38 --> 00:58:44
but I think that's a very good idea

00:58:40 --> 00:58:44
question

00:58:51 --> 00:58:59
I say okay great so so the question is

00:58:55 --> 00:59:01
that is there because right now we

00:58:58 --> 00:59:04
predict one step at a time is there any

00:59:00 --> 00:59:05
way to actually look globally at the

00:59:03 --> 00:59:07
output and maybe use some kind of

00:59:04 --> 00:59:10
reinforcement learning to adjust the

00:59:06 --> 00:59:12
output and the answer is yes so there's

00:59:09 --> 00:59:15
a recently a recent paper at Facebook

00:59:11 --> 00:59:17
who I think sequence level training or

00:59:14 --> 00:59:20
something like that where they don't

00:59:16 --> 00:59:22
optimize for one step at time but they

00:59:19 --> 00:59:25
predict they look at the globally and

00:59:21 --> 00:59:29
then they try to improve world at a rate

00:59:24 --> 00:59:31
or they try to improve blue score or

00:59:28 --> 00:59:34
things like that for translation and it

00:59:30 --> 00:59:38
seems to be making some improvement in

00:59:33 --> 00:59:41
the metrics that they care about now if

00:59:37 --> 00:59:44
you show it to humans though people

00:59:40 --> 00:59:47
still prefer the output from this model

00:59:43 --> 00:59:50
so some of the metrics that we use in

00:59:46 --> 00:59:52
translation and so on might not be what

00:59:49 --> 00:59:54
he metrics that we optimize and the

00:59:51 --> 01:00:01
next step prediction seem to be what

00:59:53 --> 01:00:03
people like a lot in translation yeah so

01:00:00 --> 01:00:05
the question is can we add the GaN

01:00:02 --> 01:00:08
loss like it again lost yeah I think

01:00:04 --> 01:00:16
that's a great idea yeah I have a

01:00:07 --> 01:00:16
question here yeah yeah

01:00:18 --> 01:00:32
change yeah yeah

01:00:29 --> 01:00:35
so let's suppose that you type the first

01:00:31 --> 01:00:37
ha hola then you can actually start the

01:00:34 --> 01:00:40
beam from there so the question is is

01:00:36 --> 01:00:42
there any way to incorporate user input

01:00:39 --> 01:00:45
so I say yeah it let's suppose that you

01:00:41 --> 01:00:48
wanna you say hola sorry

01:00:44 --> 01:00:50
hi how are you right and then as soon as

01:00:47 --> 01:00:53
the person type hola

01:00:49 --> 01:00:55
that actually restrict your beam so you

01:00:52 --> 01:00:58
can actually condition your beam on the

01:00:54 --> 01:00:59
first world Ola and your beam will be

01:00:57 --> 01:01:10
tter yeah I think that's a good idea

01:00:58 --> 01:01:13
I have a question oh so how much data

01:01:09 --> 01:01:17
did we use so in translation for example

01:01:12 --> 01:01:20
we use the several several WMT coppices

01:01:16 --> 01:01:24
Cobra and the W empty copper I usually

01:01:19 --> 01:01:26
have tens of millions of seven pairs of

01:01:23 --> 01:01:30
tendencies something like that and every

01:01:25 --> 01:01:32
sentence have like 20 words on

01:01:29 --> 01:01:34
average twenty thirty words on average I

01:01:31 --> 01:01:35
can't remember but that's something like

01:01:33 --> 01:01:39
that order of magnitude

01:01:34 --> 01:01:39
yeah yeah I have a question there I

01:01:41 --> 01:01:51
can't really hear also how's it compared

01:01:46 --> 01:01:53
to Google search auto-completion I

01:01:50 --> 01:01:55
honestly I don't know what to use

01:01:52 --> 01:01:57
underneath a Google search

01:01:54 --> 01:01:59
auto-completion but if I were if they

01:01:57 --> 01:02:06
ou if I think they should use something

01:01:58 --> 01:02:08
like this because it's okay I have still

01:02:05 --> 01:02:13
ots of interesting stuff coming along

01:02:07 --> 01:02:16
so okay okay so what's a big picture so

01:02:12 --> 01:02:19
the big picture is so far I talked about

01:02:15 --> 01:02:24
sequin to sequence learning and

01:02:18 --> 01:02:26
yesterday Andrew was talking about most

01:02:23 --> 01:02:27
of the big trends in deep learning and

01:02:25 --> 01:02:28
it

01:02:26 --> 01:02:30
alking about the second trend was

01:02:27 --> 01:02:33
basically doing end-to-end deep learning

01:02:29 --> 01:02:35
so you can characterize sequence of

01:02:32 --> 01:02:38
sequence learning as an 2n deep learning

01:02:34 --> 01:02:42
as well now so the framework is very

01:02:37 --> 01:02:45
general so it should work from a lot of

01:02:41 --> 01:02:48
NLP related tasks because a lot of them

01:02:44 --> 01:02:50
you would have input sequence and output

01:02:47 --> 01:02:52
sequence in our NLP it could be input

01:02:49 --> 01:02:54
would be some text and output would be

01:02:51 --> 01:02:59
some you know passing trees that's also

01:02:53 --> 01:03:01
possible but it works great when you

01:02:58 --> 01:03:03
have a lot of data now when you don't

01:03:00 --> 01:03:05
have enough data then maybe you want to

01:03:02 --> 01:03:07
consider dividing your problems into

01:03:04 --> 01:03:09
smaller components and then creating

01:03:06 --> 01:03:11
your sequin to sequence in the sub

01:03:08 --> 01:03:14
components and then merge them okay now

01:03:10 --> 01:03:18
if you don't have a lot of data but you

01:03:13 --> 01:03:20
have a lot of related tasks then it's

01:03:17 --> 01:03:22
also possible to actually merge all

01:03:19 --> 01:03:25
these tasks by combining the data and

01:03:21 --> 01:03:27
then have an indicator bit to say this

01:03:24 --> 01:03:31
translation this is summarization

01:03:26 --> 01:03:35
this is email reply and then change only

01:03:30 --> 01:03:41
and that should improve your your output

01:03:34 --> 01:03:43
o now this basically conclude the parts

01:03:40 --> 01:03:45
about sequence sequence and then the

01:03:42 --> 01:03:49
next part I'm going to apply sequence to

01:03:44 --> 01:03:57
sequence in a big picture of the active

01:03:48 --> 01:03:59
on ongoing work in neural nets for NLP

01:03:56 --> 01:04:01
so if you have any questions you you can

01:03:58 --> 01:04:04
ask now I take maybe two questions

01:04:00 --> 01:04:07
because I think I running out of time so

01:04:03 --> 01:04:07
I have a question yeah

01:04:11 --> 01:04:19
also the question is does the modem

01:04:13 --> 01:04:21
handle emoji I don't know but it's emoji

01:04:18 --> 01:04:23
s like a piece of text to write so you

01:04:20 --> 01:04:25
can just like feed it into as another

01:04:22 --> 01:04:29
extra token if you make them if you make

01:04:24 --> 01:04:34
your vocabulary 200,000 then you should

01:04:28 --> 01:04:43
be able to cover emoji as well yeah I

01:04:33 --> 01:04:46
have a question also if you have new

01:04:42 --> 01:04:51
data coming in so should I return the

01:04:45 --> 01:04:53
model where you I think towards the end

01:04:50 --> 01:04:56
we lower the learning rate so if you add

01:04:52 --> 01:04:58
new data it just it will not make a lot

01:04:55 --> 01:05:00
of good updates so usually we make you

01:04:57 --> 01:05:04
can add new data increase the

01:04:59 --> 01:05:04
learning rate and then continue to Train

01:05:03 --> 01:05:10
yeah that should work okay so I already

01:05:06 --> 01:05:13
took two questions let's keep going so

01:05:09 --> 01:05:16
this is an active area that actually

01:05:12 --> 01:05:19
is a very exciting which is in the area

01:05:15 --> 01:05:23
of automatic unite so you can think that

01:05:18 --> 01:05:26
maybe the set up would be can you read a

01:05:22 --> 01:05:27
Wikipedia page and then answer a

01:05:25 --> 01:05:31
question or can you read a book and

01:05:26 --> 01:05:33
answer your question now you in theory

01:05:30 --> 01:05:37
ou can use sequin to sequence with

01:05:32 --> 01:05:39
attention and then to do this task so

01:05:36 --> 01:05:42
it's going to look like this you're

01:05:38 --> 01:05:44
going to read the book right one token a

01:05:41 --> 01:05:47
time and with the book then treat a

01:05:43 --> 01:05:50
question and then you're going to use

01:05:46 --> 01:05:53
the attention to look at all the pages

01:05:49 --> 01:05:58
and then you make a prediction of the

01:05:52 --> 01:06:00
tokens right so so that cut up that's

01:05:57 --> 01:06:02
kind of sometimes you do we do answer

01:05:59 --> 01:06:04
this question that way sometimes we

01:06:01 --> 01:06:07
don't have knowledge about the fact so

01:06:03 --> 01:06:08
we actually read the book again to

01:06:06 --> 01:06:12
answer the fact but a lot of the time if

01:06:07 --> 01:06:14
you ask me is Barack Obama the president

01:06:11 --> 01:06:18
of the United States I would say yes

01:06:13 --> 01:06:21
because it's already in my memory so

01:06:17 --> 01:06:23
maybe it's better to actually akhmet the

01:06:20 --> 01:06:27
iron with some kind of memory

01:06:22 --> 01:06:29
okay so that it will not to do this look

01:06:26 --> 01:06:31
back again right it's kind of annoying

01:06:28 --> 01:06:32
look back again so there's an active

01:06:30 --> 01:06:36
area of this research

01:06:31 --> 01:06:38
I'm not a definite expert but I'm very

01:06:35 --> 01:06:41
aware so I can place you in the right

01:06:37 --> 01:06:44
context here so work in this area would

01:06:40 --> 01:06:45
be memory networks by Western and folks

01:06:43 --> 01:06:47
at Facebook

01:06:44 --> 01:06:49
there will be new rotating machines that

01:06:46 --> 01:06:52
deepmind dynamic memory networks would

01:06:49 --> 01:06:55
be a richer soldier presented yesterday

01:06:51 --> 01:06:59
and then stuck augmented iron ends by

01:06:54 --> 01:07:02
Facebook again and etc now well let's

01:06:58 --> 01:07:05
list so I want to show you a like

01:07:01 --> 01:07:09
high-level what is this augmented memory

01:07:04 --> 01:07:11
means okay so let's think about the

01:07:08 --> 01:07:11
attention so the attention looked like

01:07:10 --> 01:07:13
this

01:07:10 --> 01:07:16
o you and in the end coder you're going

01:07:12 --> 01:07:17
to look at at some input okay and then

01:07:15 --> 01:07:20
you have a controller which is your H

01:07:16 --> 01:07:22
variable and then you keep updating very

01:07:19 --> 01:07:25
high variable but along the side you're

01:07:21 --> 01:07:28
gonna write down into memory your h1 h2

01:07:24 --> 01:07:28
h3 and etc right you store it into a

01:07:27 --> 01:07:31
memory

01:07:27 --> 01:07:35
clear-rite and in the decoder what

01:07:30 --> 01:07:39
you're going to do is you gonna continue

01:07:34 --> 01:07:40
producing some output right are

01:07:38 --> 01:07:42
you going to update your controller G

01:07:39 --> 01:07:48
but you're going to read from memory

01:07:41 --> 01:07:52
our H okay right so that so so again so

01:07:47 --> 01:07:54
in the import you write to memory in and

01:07:51 --> 01:07:57
then in the output you read from memory

01:07:53 --> 01:08:00
now now let's let's try to be a little

01:07:56 --> 01:08:02
bit more general and the general would

01:07:59 --> 01:08:05
be at any point in time you can read and

01:08:01 --> 01:08:06
write right you have a controller and

01:08:04 --> 01:08:10
you can read and write read and write

01:08:05 --> 01:08:11
all the time now to do that you you have

01:08:09 --> 01:08:15
to follow in architectures you have some

01:08:10 --> 01:08:20
mory bank big memory back ok and then

01:08:14 --> 01:08:23
you you can use the right you can decide

01:08:19 --> 01:08:27
to write some information into it from

01:08:22 --> 01:08:29
by a combination of the memory bank in

01:08:26 --> 01:08:31
the previous step and the hidden

01:08:28 --> 01:08:35
variable in the previous step and then

01:08:30 --> 01:08:36
you also read into the hidden state to

01:08:34 --> 01:08:37
and then you could make an amount update

01:08:35 --> 01:08:39
and then

01:08:36 --> 01:08:41
you can keep going forever like that so

01:08:38 --> 01:08:46
this concept is called an N with

01:08:40 --> 01:08:53
augmented memory okay is that is that

01:08:45 --> 01:09:01
somewhat clear any question you have a

01:08:52 --> 01:09:04
question the question is when you read

01:09:00 --> 01:09:06
o you read the entire memory bank a lot

01:09:03 --> 01:09:10
of these algorithms are actually soft

01:09:05 --> 01:09:13
attention so yes it will look the entire

01:09:09 --> 01:09:16
memory you can actually predict where to

01:09:12 --> 01:09:18
look right and then read that only that

01:09:15 --> 01:09:21
block now with the problem with that is

01:09:17 --> 01:09:23
you end up with very it's not

01:09:20 --> 01:09:25
differentiable anymore

01:09:22 --> 01:09:27
right because this the thing that you

01:09:24 --> 01:09:29
don't read don't contribute to the

01:09:26 --> 01:09:31
gradient so it's going to be hard to

01:09:28 --> 01:09:33
train but you can use to reinforce and

01:09:30 --> 01:09:36
so on to train it so there's a reason

01:09:32 --> 01:09:39
our paper reinforcement learning new row

01:09:35 --> 01:09:41
Turing machines but actually so there's

01:09:38 --> 01:09:44
omething like this right not exactly

01:09:40 --> 01:09:53
but it will deal with discrete actions

01:09:43 --> 01:09:56
okay any question no question Wow okay

01:09:52 --> 01:10:00
so the another extension that a lot of

01:09:55 --> 01:10:02
people talk about is using an N with

01:09:59 --> 01:10:05
augmented operations so you want to

01:10:01 --> 01:10:07
augment the neural network with some

01:10:04 --> 01:10:11
kind of operations like addition

01:10:06 --> 01:10:15
subtraction multiplication the sine

01:10:10 --> 01:10:17
function etc lot of love functions so to

01:10:14 --> 01:10:19
motivate you you can think about Q and I

01:10:16 --> 01:10:22
can fall into this for example histor

01:10:18 --> 01:10:27
context the building was constructed in

01:10:21 --> 01:10:29
the year 2000 and then it was in later

01:10:26 --> 01:10:32
all people say oh it was then destroyed

01:10:28 --> 01:10:35
in the year 2010 and then the question

01:10:31 --> 01:10:37
would be how long it the building

01:10:34 --> 01:10:40
survived and the answer would be ten

01:10:36 --> 01:10:43
years now how would you answer this

01:10:39 --> 01:10:46
question where you say 2010 subtract two

01:10:42 --> 01:10:49
thousand ten years now neural nets if

01:10:45 --> 01:10:50
you can train with a lot example it can

01:10:48 --> 01:10:52
do that too you can learn too

01:10:49 --> 01:10:56
subtract numbers and things like that it

01:10:51 --> 01:10:58
requires a lot of data to do so all

01:10:55 --> 01:11:01
right so maybe is better to augment them

01:10:57 --> 01:11:04
with functions like addition and

01:11:00 --> 01:11:08
subtraction right so the way you can do

01:11:03 --> 01:11:10
it is that the neural network will read

01:11:07 --> 01:11:14
all the token so far and we'll push the

01:11:09 --> 01:11:16
numbers into a stack and then you get

01:11:13 --> 01:11:20
he more the neural net is augmented by

01:11:15 --> 01:11:23
a subtraction and a addition function

01:11:19 --> 01:11:25
and these two phone and then you assign

01:11:22 --> 01:11:30
these a probability for these two

01:11:24 --> 01:11:32
functions so green the more duck does

01:11:29 --> 01:11:35
mean the higher probability okay so you

01:11:31 --> 01:11:37
aside to probability and these two you

01:11:34 --> 01:11:39
compute the weighted average of the

01:11:36 --> 01:11:42
values coming out of these two function

01:11:38 --> 01:11:43
and then you take that and then you pop

01:11:41 --> 01:11:45
it and you push it into the stack in the

01:11:42 --> 01:11:48
next step and then in the next step you

01:11:44 --> 01:11:51
will call the addition and subtraction

01:11:47 --> 01:11:52
again and etc that's the principle of

01:11:50 --> 01:11:56
something called neural programmers or

01:11:51 --> 01:11:57
new neural programmer interpreters so

01:11:55 --> 01:11:59
there are two papers last year from

01:11:56 --> 01:12:03
Google brain and nygma was talking about

01:11:58 --> 01:12:05
his so so that's that's some of the

01:12:02 --> 01:12:08
related work in the area of augmenting

01:12:04 --> 01:12:11
recurrent networks with with operations

01:12:07 --> 01:12:13
with memory etc now what's a big picture

01:12:10 --> 01:12:19
ok so the big picture I want to revisit

01:12:12 --> 01:12:23
and I say so what I've talked to today

01:12:18 --> 01:12:25
is sequin to sequence learning and it's

01:12:22 --> 01:12:29
an end-to-end deep learning task so it's

01:12:24 --> 01:12:32
one of the big trends happening in

01:12:28 --> 01:12:34
atural language it's very general so

01:12:31 --> 01:12:36
you can use if you have a lot and a lot

01:12:33 --> 01:12:38
of supervised data it's a very

01:12:35 --> 01:12:41
supervised learning algorithm so if you

01:12:37 --> 01:12:43
have a lot of data it should work well

01:12:40 --> 01:12:45
but if you don't have enough supervised

01:12:42 --> 01:12:47
ata then you consider dividing your

01:12:44 --> 01:12:49
problem and then training different in

01:12:46 --> 01:12:52
different components or you can train

01:12:48 --> 01:12:55
jointly in an multitask settings and

01:12:51 --> 01:12:57
people also train it jointly with auto

01:12:54 --> 01:12:59
encoder namely to read the input

01:12:56 --> 01:13:02
sentence and then predict the output

01:12:58 --> 01:13:04
sentence again and that's also and then

01:13:01 --> 01:13:09
you train jointly with all the tasks and

01:13:03 --> 01:13:11
works as well if you if you go home and

01:13:08 --> 01:13:14
then you want to make impact at your

01:13:10 --> 01:13:15
work tomorrow then so far that that's so

01:13:13 --> 01:13:17
far so good that that can make some

01:13:14 --> 01:13:19
impact now if you want to do some

01:13:16 --> 01:13:22
research and I think like things with

01:13:18 --> 01:13:26
memory operation operation augmentation

01:13:21 --> 01:13:29
are some of the exciting areas but but

01:13:25 --> 01:13:32
it seems like still work in progress but

01:13:28 --> 01:13:37
I would expect a lot of advances in this

01:13:31 --> 01:13:40
area in the near future so so you if you

01:13:36 --> 01:13:42
want to know more you can take a look at

01:13:39 --> 01:13:45
pre-solar block you talk about attention

01:13:41 --> 01:13:48
and of my augmented recurrent networks I

01:13:44 --> 01:13:51
also wrote some tutorials pretty simple

01:13:47 --> 01:13:54
this the sequin to sequence with

01:13:50 --> 01:13:56
attention for translation is implemented

01:13:53 --> 01:13:58
intensive flow so you can download and

01:13:55 --> 01:14:01
you can use you can actually download

01:13:57 --> 01:14:02
tensor flow and train it what I said

01:14:00 --> 01:14:06
today

01:14:01 --> 01:14:09
now this there's a lot of work going on

01:14:05 --> 01:14:12
in this area not on many of these are

01:14:08 --> 01:14:14
not mine so I so as you can see you can

01:14:11 --> 01:14:19
even read the world just means how many

01:14:13 --> 01:14:22
papers come along in this this area so I

01:14:18 --> 01:14:28
can pause there and I have five minutes

01:14:21 --> 01:14:30
to answer questions I have a question

01:14:27 --> 01:14:30
there yeah

01:14:49 --> 01:15:01
I see okay can you speak to the

01:14:58 --> 01:15:03
microphone because I can't hear very

01:15:00 --> 01:15:09
well add a microphone and then I think

01:15:02 --> 01:15:12
people can hear that as well when you're

01:15:08 --> 01:15:14
treating a Q&A network so you're taking

01:15:11 --> 01:15:17
the example of training from a book to

01:15:13 --> 01:15:20
answer questions yeah so if let's say

01:15:16 --> 01:15:22
Harry Potter who was Harry Potter's

01:15:19 --> 01:15:24
father now there could be many books

01:15:21 --> 01:15:26
that have a character Harry so he has a

01:15:23 --> 01:15:28
context resolution issue which is which

01:15:25 --> 01:15:31
Harry should I answer the question for

01:15:27 --> 01:15:32
ya how do you solve the context context

01:15:30 --> 01:15:35
problem in your training this kind of

01:15:31 --> 01:15:41
Q&A type Network I think that's a great

01:15:34 --> 01:15:43
question so I think one thing is that

01:15:40 --> 01:15:45
you can always personalize for example

01:15:42 --> 01:15:48
you know that the guy when I talk about

01:15:44 --> 01:15:50
you can have a representation for the

01:15:47 --> 01:15:53
user and then you know that when he say

01:15:49 --> 01:15:54
Harry his because he actually been

01:15:52 --> 01:15:57
reading a lot of books about Harry

01:15:53 --> 01:16:00
Potter so it's more likely to be Harry

01:15:56 --> 01:16:01
Potter but I think with the hour time I

01:15:59 --> 01:16:04
said I just want to make sure that it's

01:16:00 --> 01:16:07
as simple as possible so the father if

01:16:03 --> 01:16:08
you do the juicer has to ask the

01:16:06 --> 01:16:12
question Harry Potter

01:16:07 --> 01:16:15
ather than Harry but I'm saying if you

01:16:11 --> 01:16:17
represent user vectors and then you

01:16:14 --> 01:16:21
inject more additional knowledge about

01:16:16 --> 01:16:25
he users about the context into as

01:16:20 --> 01:16:29
additional token in the input of the net

01:16:24 --> 01:16:33
can figure it out by itself yes

01:16:28 --> 01:16:35
o that's one way to do it yeah okay I

01:16:32 --> 01:16:38
have a question yeah you did some work

01:16:34 --> 01:16:40
on Doc to Vic yeah do you have an idea

01:16:37 --> 01:16:42
what the state of the art in

01:16:39 --> 01:16:45
generalizing were two veggies to more

01:16:41 --> 01:16:52
than one word oh I see

01:16:44 --> 01:16:56
I think skip thoughts are interested in

01:16:51 --> 01:16:58
directions here so dr. that is one way

01:16:55 --> 01:16:59
but skip thought so that the idea of

01:16:57 --> 01:17:03
skip thoughts was

01:16:58 --> 01:17:05
Ruslan salakhutdinov with author on this

01:17:02 --> 01:17:08
a his idea is basically using sequence

01:17:04 --> 01:17:11
to sequence to predict the next sentence

01:17:07 --> 01:17:14
so the input would be the current

01:17:10 --> 01:17:16
sentence the output we would be the the

01:17:13 --> 01:17:18
previous sentence all connect

01:17:15 --> 01:17:20
sentence and then you can train a model

01:17:17 --> 01:17:22
ike that if the model is called skip

01:17:19 --> 01:17:24
four and I have heard a lot of good

01:17:21 --> 01:17:26
things about skip thoughts where you can

01:17:23 --> 01:17:30
take the embedding at the end and then

01:17:25 --> 01:17:31
you can do document classification and

01:17:29 --> 01:17:33
things like that and it works very well

01:17:30 --> 01:17:35
so that's that's probably one place that

01:17:32 --> 01:17:37
you can you know can go my colleague at

01:17:34 --> 01:17:40
Google is also working on something

01:17:36 --> 01:17:41
called auto encoder so he instead of

01:17:39 --> 01:17:44
predicting the next sentence he predict

01:17:40 --> 01:17:46
he current sentence so trying to repeat

01:17:43 --> 01:17:52
he current sentence and and that's kind

01:17:45 --> 01:17:54
of work well too yeah yeah see what was

01:17:51 --> 01:17:57
your thoughts on how to solve the common

01:17:53 --> 01:17:59
sense reasoning problem Oh common sense

01:17:56 --> 01:18:03
I'm deeply interested in common sense

01:17:58 --> 01:18:06
but I gotta say I have no idea I think

01:18:02 --> 01:18:09
maybe you can do something like I think

01:18:05 --> 01:18:11
common sense is about a lot of first of

01:18:08 --> 01:18:15
all there's a lot of knowledge about the

01:18:10 --> 01:18:18
world that is not captured in text right

01:18:14 --> 01:18:20
for example gravity and things like that

01:18:17 --> 01:18:23
so maybe you really need to actually

01:18:19 --> 01:18:25
combine a lot of morality that's that's

01:18:22 --> 01:18:27
one way to think about it all the way

01:18:24 --> 01:18:30
all the thing is do you make sure that

01:18:26 --> 01:18:33
unsupervised learning work that's

01:18:29 --> 01:18:37
another approach but I think this

01:18:32 --> 01:18:40
digital research area I think I'm just

01:18:36 --> 01:18:43
making guesses right now is there a good

01:18:39 --> 01:18:48
way to have sent all these rules and you

01:18:42 --> 01:18:50
know using some soft yes yes so the

01:18:47 --> 01:18:53
question is how do you represent

01:18:49 --> 01:18:54
Dru's so so if you think about this

01:18:52 --> 01:18:57
network the neural programmer network

01:18:53 --> 01:19:02
that it actually augmented by addition

01:18:56 --> 01:19:06
and and subtraction then these are rules

01:19:01 --> 01:19:08
right you can augment it with a table of

01:19:05 --> 01:19:11
proofs and then ask the network to

01:19:07 --> 01:19:13
actually attend into the truth table

01:19:10 --> 01:19:15
people have looked

01:19:12 --> 01:19:18
to this direction so that's one way to

01:19:14 --> 01:19:21
do it okay saying basically argument is

01:19:17 --> 01:19:25
to do some logical reasoning yeah yeah

01:19:20 --> 01:19:28
hey okay great talk yeah thank you

01:19:24 --> 01:19:30
m are is there like a practical rule of

01:19:27 --> 01:19:32
thumb for how many sequence pairs you

01:19:29 --> 01:19:36
need to train such a model successfully

01:19:31 --> 01:19:39
es a is there are there any tips to

01:19:35 --> 01:19:44
reduce how many pairs you need if you

01:19:38 --> 01:19:46
don't I said okay so usually the bigger

01:19:43 --> 01:19:48
data set the better but like the corpus

01:19:45 --> 01:19:51
that people train this on translation

01:19:47 --> 01:19:53
for example English to German it's only

01:19:50 --> 01:19:54
about about 3 5 million pairs of

01:19:52 --> 01:19:57
sentences or something like that so

01:19:53 --> 01:20:00
that's kind of small 3 million right and

01:19:56 --> 01:20:02
still people are able to make it to the

01:19:59 --> 01:20:04
state of the art so that's that's pretty

01:20:01 --> 01:20:06
encouraging now if you don't even don't

01:20:03 --> 01:20:08
have a lot of data that I would say

01:20:05 --> 01:20:13
things like pre-trained your work

01:20:07 --> 01:20:15
vectors with language models or a word

01:20:12 --> 01:20:20
to vac right that's that's one area that

01:20:14 --> 01:20:22
you have a lot of parameters you can pre

01:20:19 --> 01:20:24
train your model with some kind of

01:20:21 --> 01:20:26
language model and then you reduce the

01:20:23 --> 01:20:28
sub max that's another area that you

01:20:25 --> 01:20:31
have a lot of parameters or use drop out

01:20:27 --> 01:20:33
in the input embed in or drop out some

01:20:30 --> 01:20:35
random word in the input sentence so

01:20:32 --> 01:20:37
those things can improve the regular

01:20:34 --> 01:20:47
adiation when you don't have a lot of

01:20:36 --> 01:20:47
data okay yeah thank you okay yeah

01:20:51 --> 01:20:58
thank you all so we'll reconvene at 6

01:20:55 --> 01:21:00
o'clock for yoshua bengio

01:20:57 --> 01:21:00
closing keynote

<!-- YOUTUBE_TRANSCRIPT_END -->
