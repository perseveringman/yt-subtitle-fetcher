---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "Ae_Ieh93K64"
title: "DeepSeek, Reasoning Models, and the Future of LLMs"
video_url: "https://www.youtube.com/watch?v=Ae_Ieh93K64"
thumbnail_url: "https://i.ytimg.com/vi/Ae_Ieh93K64/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=Ae_Ieh93K64"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-03-05T17:41:16.000Z"
upload_date: "2025-03-05"
duration_seconds: 1626
duration_human: "27:06"
view_count: 11178
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:57:40.683Z"
---

# DeepSeek, Reasoning Models, and the Future of LLMs

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=Ae_Ieh93K64
- video_id: Ae_Ieh93K64
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-03-05T17:41:16.000Z
- upload_date: 2025-03-05
- duration: 27:06
- view_count: 11178
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Beyond the speculation and hand-wringing over the Chinese AI model called DeepSeek lies a much more concrete technological reality: Reasoning models are the future of large language models. Beyond DeepSeek, other AI labs have committed to their development, and reasoning models currently top popular LLM leaderboards.

In this video, a16z partners Guido Appenzeller and Marco Mascorro demystify how DeepSeek works and explain what the era of reasoning models means for artificial intelligence.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:04 --> 00:00:10
hey everyone so deep seek Ian last Monch

00:00:07 --> 00:00:12
really captured the Z Guist it's a brand

00:00:09 --> 00:00:14
new reasoning model from China very high

00:00:11 --> 00:00:16
performant it showed up very high in the

00:00:13 --> 00:00:18
rankings but I think it also caused a

00:00:15 --> 00:00:20
lot of fear and confusion and that's not

00:00:17 --> 00:00:22
a good thing no yeah that's not ideal so

00:00:19 --> 00:00:24
ne of the good things about deeps is

00:00:21 --> 00:00:25
basically they opens for us their

00:00:23 --> 00:00:26
weights their techniques and how they

00:00:24 --> 00:00:28
build these models and they've been

00:00:25 --> 00:00:30
doing that for a while so this is a good

00:00:27 --> 00:00:33
Insight on basically how these reasoning

00:00:29 --> 00:00:34
models work and I think looking forward

00:00:32 --> 00:00:36
from now on pretty much any

00:00:33 --> 00:00:37
state-of-the-art model will use some of

00:00:35 --> 00:00:38
those techniques and we've seen this

00:00:36 --> 00:00:40
already you know from models from open

00:00:37 --> 00:00:43
Ai and models from Google that are

00:00:39 --> 00:00:44
structurally very very similar and this

00:00:42 --> 00:00:46
has huge implications on how much

00:00:43 --> 00:00:48
computer we need how much GPU power we

00:00:45 --> 00:00:51
need for inference as well as for

00:00:47 --> 00:00:52
training so here's our breakdown on

00:00:50 --> 00:00:56
deeps some of the models they've been

00:00:51 --> 00:00:58
building like deeps math B3 and B2 and

00:00:55 --> 00:01:00
now R1 all right so if you look at a

00:00:57 --> 00:01:02
slide here that shows the current

00:00:59 --> 00:01:04
ranking of one of the best AI models

00:01:01 --> 00:01:06
that we have today you'll see that

00:01:03 --> 00:01:08
pretty much the whole top of the of the

00:01:05 --> 00:01:10
rankings has been taken over by

00:01:07 --> 00:01:11
reasoning models this is super

00:01:09 --> 00:01:13
impressive right we had sort of you know

00:01:10 --> 00:01:15
classic llms all buil roughly in the

00:01:12 --> 00:01:16
same style you know occupy the to top

00:01:14 --> 00:01:19
spots for a long time and then it

00:01:15 --> 00:01:21
changed very very quickly what actually

00:01:18 --> 00:01:23
happened here right and what happened is

00:01:20 --> 00:01:25
we have a new type of model it's called

00:01:22 --> 00:01:27
a reasoning model and you know we got a

00:01:24 --> 00:01:29
little example here of how the output of

00:01:26 --> 00:01:31
a reasoning model differs on the left

00:01:28 --> 00:01:32
side we have GPT 40 Mini

00:01:30 --> 00:01:34
you know ask a question about orbital

00:01:31 --> 00:01:37
mechanics you know it's a it's a good

00:01:33 --> 00:01:39
reasoning question and uh it pretty much

00:01:36 --> 00:01:42
directly gives you the the one-hot

00:01:38 --> 00:01:44
answer of how this particular question

00:01:41 --> 00:01:46
works on the right side we have a

00:01:43 --> 00:01:48
distilled version of Deep seek R1 so

00:01:45 --> 00:01:50
this is a very very small model it can't

00:01:48 --> 00:01:51
actually answer this directly from

00:01:49 --> 00:01:53
emory but what it does it starts

00:01:51 --> 00:01:54
reasoning and if you read the text right

00:01:52 --> 00:01:56
it really starts to hustle it start to

00:01:53 --> 00:01:58
think it's trying to theorize it

00:01:55 --> 00:02:00
questions itself and you know over time

00:01:57 --> 00:02:01
hopes that it's going to arrive at the

00:01:59 --> 00:02:03
right answer which in this case it

00:02:00 --> 00:02:05
actually eventually did so it's very

00:02:02 --> 00:02:07
impressive that with these with these

00:02:04 --> 00:02:09
small models we can actually get to

00:02:06 --> 00:02:10
these very high high quality results so

00:02:08 --> 00:02:12
Michael this is how we used to do

00:02:09 --> 00:02:14
training is that right yeah that's right

00:02:11 --> 00:02:16
and that has been a very efficient way

00:02:13 --> 00:02:17
very simple in the sense of like you

00:02:15 --> 00:02:19
gather a lot of text Data from the

00:02:16 --> 00:02:21
internet and you have pairs of questions

00:02:18 --> 00:02:23
and answers and then you train the model

00:02:20 --> 00:02:24
in a very straightforward way if you

00:02:22 --> 00:02:26
look through the steps right

00:02:23 --> 00:02:27
pre-training that's typically done on

00:02:25 --> 00:02:28
very large computer infrastructure

00:02:26 --> 00:02:31
that's where you know you need the large

00:02:28 --> 00:02:32
10,000 h100s or or or more and you

00:02:30 --> 00:02:34
pretty much want to train on all the

00:02:32 --> 00:02:35
data you can possibly find which

00:02:33 --> 00:02:37
typically means you take the internet

00:02:34 --> 00:02:40
because today the largest repository of

00:02:36 --> 00:02:42
knowledge that we as mankind have is is

00:02:39 --> 00:02:44
the internet and then there's two more

00:02:41 --> 00:02:48
steps uh first one is supervised F

00:02:43 --> 00:02:50
tuning where we take examples that were

00:02:47 --> 00:02:52
generated by humans that teach the model

00:02:49 --> 00:02:54
how to behave so for example if I just

00:02:51 --> 00:02:56
ake a pre-training model I would ask it

00:02:53 --> 00:02:58
what's the capital of France an answer

00:02:55 --> 00:03:00
could be well if it's not fine tuned at

00:02:57 --> 00:03:02
all it would just keep going forward

00:02:59 --> 00:03:04
like with more questions like what is

00:03:01 --> 00:03:06
the capital of whatever other city right

00:03:04 --> 00:03:08
and we just keep going so so exactly the

00:03:06 --> 00:03:11
purpose of adding the supervised fine

00:03:07 --> 00:03:13
tuning data is basically making the

00:03:10 --> 00:03:15
model have answers straight into what

00:03:12 --> 00:03:16
you you the correct answer is right so

00:03:14 --> 00:03:18
these base models if you don't do

00:03:16 --> 00:03:20
this supervised fine tuning they would

00:03:17 --> 00:03:21
just keep going in an out to complete

00:03:19 --> 00:03:23
mode which is not normally what you want

00:03:20 --> 00:03:25
so so that's why you add that next step

00:03:22 --> 00:03:27
of supervised fine tuning which is kind

00:03:24 --> 00:03:29
of like this format of instructions or

00:03:26 --> 00:03:31
questions and answers and that's how you

00:03:28 --> 00:03:33
make the model being able to what is

00:03:30 --> 00:03:34
capital entally teach the model how to

00:03:32 --> 00:03:35
interface with a human right if somebody

00:03:33 --> 00:03:36
ask you a question you should give an

00:03:34 --> 00:03:39
swer you shouldn't reply with more

00:03:35 --> 00:03:41
questions that's that's not very useful

00:03:38 --> 00:03:42
and the last one is the enforcement

00:03:40 --> 00:03:44
learning with human feedback so how is

00:03:41 --> 00:03:46
that different so that's that's a really

00:03:43 --> 00:03:49
good point so so the RL part comes in

00:03:45 --> 00:03:52
after you do the sft which is basically

00:03:48 --> 00:03:53
ou have traces of answers or questions

00:03:51 --> 00:03:55
and answers and then a human evaluates

00:03:52 --> 00:03:57
them and gives the score and which

00:03:54 --> 00:03:59
answers are the best ones you try a

00:03:56 --> 00:04:02
model basically based on this preference

00:03:58 --> 00:04:04
data uh and that's how you do the rlf

00:04:01 --> 00:04:06
phase now the reality is like you can

00:04:03 --> 00:04:08
get to really good models purely with

00:04:05 --> 00:04:10
like sft data so like just having the

00:04:07 --> 00:04:13
question and answers been trained on on

00:04:09 --> 00:04:15
formats like credit or like stock

00:04:12 --> 00:04:17
overflow which already has that perfect

00:04:14 --> 00:04:19
format where you have a boting mechanism

00:04:16 --> 00:04:21
humans vote for the best answer there so

00:04:18 --> 00:04:23
it just goes up in the ranking the way R

00:04:20 --> 00:04:26
does it or the way stock overflow does

00:04:22 --> 00:04:28
it and that's kind of a way to have the

00:04:25 --> 00:04:29
data be higher quality when you

00:04:27 --> 00:04:31
train this model really to really polish

00:04:28 --> 00:04:32
the replies that's right they're not

00:04:30 --> 00:04:34
just correct but they're the best

00:04:31 --> 00:04:36
correct exactly the first one

00:04:33 --> 00:04:37
pre-training is done in a fully

00:04:35 --> 00:04:39
automated way all I need is lots and

00:04:36 --> 00:04:42
lots of data I do next token prediction

00:04:38 --> 00:04:44
the other two require humans right sft

00:04:41 --> 00:04:46
we require human generated examples and

00:04:43 --> 00:04:47
rhf there needs to be a human in the

00:04:45 --> 00:04:50
loop there you in the loop somewhere to

00:04:46 --> 00:04:52
basically get this right how are

00:04:49 --> 00:04:54
asoning models different and we look

00:04:51 --> 00:04:55
specifically here at Deep SE R1 that's

00:04:53 --> 00:04:57
not necessar because they were the first

00:04:55 --> 00:04:59
we're not sure they are but uh they

00:04:56 --> 00:05:00
currently have probably been the most

00:04:58 --> 00:05:02
open about the methodology they've

00:04:59 --> 00:05:04
published source code they published the

00:05:01 --> 00:05:06
model weights so it's the model we just

00:05:03 --> 00:05:08
know the most about so let's step

00:05:05 --> 00:05:09
through what they did right and if you

00:05:07 --> 00:05:11
look back and look at the

00:05:08 --> 00:05:13
Timeline here the first thing they did

00:05:10 --> 00:05:16
actually was they trained a math model

00:05:12 --> 00:05:18
uh deep seek math which was a very very

00:05:15 --> 00:05:21
good math model very very good

00:05:17 --> 00:05:23
reasoning for very specific tasks and so

00:05:20 --> 00:05:25
what was the Innovation yeah so so

00:05:22 --> 00:05:27
here's the thing with dips I think like

00:05:24 --> 00:05:29
uh this is this is a team that we we've

00:05:26 --> 00:05:33
seen multiple models coming from a long

00:05:28 --> 00:05:35
time right since late 23 I think where

00:05:32 --> 00:05:37
basically the way I look at it is R1 was

00:05:34 --> 00:05:38
kind of like having all these

00:05:36 --> 00:05:41
Innovations spin together in one single

00:05:37 --> 00:05:43
model going from the multi-head lat and

00:05:40 --> 00:05:46
attention that they did the MLA uh which

00:05:42 --> 00:05:47
I think was release in B2 and then dips

00:05:45 --> 00:05:51
math this is when they introduced their

00:05:46 --> 00:05:52
grpo algorithm for RL training and

00:05:50 --> 00:05:54
basically R1 was kind of like the

00:05:51 --> 00:05:55
compilation of all these techniques that

00:05:53 --> 00:05:57
hey were do working on already from

00:05:55 --> 00:06:00
other models so that's kind of like the

00:05:57 --> 00:06:02
the part that was kind of surprising

00:05:59 --> 00:06:03
is like it's not like a one single

00:06:01 --> 00:06:05
Innovation that that happened it was

00:06:02 --> 00:06:07
like just accumulation of all these very

00:06:04 --> 00:06:10
nice things that they did over the last

00:06:06 --> 00:06:12
couple of years deeps math is is really

00:06:09 --> 00:06:16
impressive and I think for the first

00:06:11 --> 00:06:19
ime they actually trained the model by

00:06:15 --> 00:06:20
learning from itself this is a new

00:06:18 --> 00:06:22
approach it can train by by

00:06:19 --> 00:06:23
experimenting by itself it basically it

00:06:21 --> 00:06:25
akes does reasoning change to solve

00:06:22 --> 00:06:27
fairly hard problems and if it's a math

00:06:24 --> 00:06:29
or coding problem the nice thing is we

00:06:26 --> 00:06:30
can verify at the end if the solution is

00:06:28 --> 00:06:33
correct or not right so if I give you a

00:06:29 --> 00:06:34
very complex math equation and uh you

00:06:32 --> 00:06:35
know you you do it step by step you give

00:06:33 --> 00:06:37
me the result I can plug in the result

00:06:34 --> 00:06:38
into the equation and see if it was

00:06:36 --> 00:06:40
correct or not right and basically is to

00:06:37 --> 00:06:41
say like if that's correct then please

00:06:39 --> 00:06:43
learn from what you did if it's

00:06:40 --> 00:06:45
incorrect then don't and I think the big

00:06:42 --> 00:06:47
thing in in R1 or generally with these

00:06:44 --> 00:06:49
reasoning models is we were doing before

00:06:46 --> 00:06:50
there was a human in the loop always

00:06:48 --> 00:06:53
right like when we have this sft

00:06:49 --> 00:06:55
raining and these other techniques that

00:06:52 --> 00:06:57
we're doing after like our LF and and

00:06:54 --> 00:06:59
having R1 I think was or having this

00:06:56 --> 00:07:00
reasoning model was basically the the

00:06:58 --> 00:07:02
first time we started seeing some

00:06:59 --> 00:07:04
indications that you can improve the

00:07:01 --> 00:07:07
quality of the models by just doing RL

00:07:03 --> 00:07:10
on top of it and and the idea so so DP

00:07:06 --> 00:07:12
zip came with B3 in December and then

00:07:09 --> 00:07:16
they they released uh just a few weeks

00:07:11 --> 00:07:19
later uh R1 and basically in between

00:07:15 --> 00:07:21
there was this model that was called r10

00:07:18 --> 00:07:24
which was basically they took a V3 vase

00:07:20 --> 00:07:26
model which was the model that released

00:07:23 --> 00:07:28
in December and they apply directly

00:07:25 --> 00:07:31
refor learning on top of it on

00:07:27 --> 00:07:34
verifyable domains so that is math that

00:07:30 --> 00:07:35
is puzzles that they had code so all

00:07:33 --> 00:07:37
these domains you can verify right and

00:07:34 --> 00:07:39
you can have a what they call a rule

00:07:36 --> 00:07:42
based verifier which basically it's not

00:07:38 --> 00:07:43
an LM it's just basically looking for is

00:07:41 --> 00:07:45
the the answer correct or not like you

00:07:42 --> 00:07:47
can just basically compute that answer

00:07:44 --> 00:07:49
and no it's like this is correct nor and

00:07:46 --> 00:07:51
it gives an answer a score to the the

00:07:48 --> 00:07:53
response that the model is giving and

00:07:50 --> 00:07:57
you do that over many many samples but

00:07:52 --> 00:08:00
his was like r10 which in a way was a

00:07:56 --> 00:08:02
very interesting model because it it

00:07:59 --> 00:08:05
showed that improved in some reasoning

00:08:01 --> 00:08:07
benchmarks and math benchmarks but

00:08:04 --> 00:08:09
eventually didn't do really well on

00:08:06 --> 00:08:11
other things right like it was switching

00:08:08 --> 00:08:12
between languages I think that was one

00:08:10 --> 00:08:14
of the things that they observed the

00:08:11 --> 00:08:16
answers were not very readable for a

00:08:13 --> 00:08:19
human sometimes like it would repeat the

00:08:15 --> 00:08:22
last token many times so that's when R1

00:08:18 --> 00:08:24
comes so they tried to fix in a way R1 Z

00:08:21 --> 00:08:26
but turns out that R1 Z was actually

00:08:23 --> 00:08:28
very helpful in the process of making R1

00:08:25 --> 00:08:30
we talk about deeps math let's talk

00:08:27 --> 00:08:33
about deep seek V3 so deep seek V3 I

00:08:29 --> 00:08:35
think was a very good model came out

00:08:32 --> 00:08:36
still is it's a classic LM although I

00:08:34 --> 00:08:38
think they took a little bit of

00:08:35 --> 00:08:40
reasoning from a precursor of deeps r

00:08:37 --> 00:08:41
one and applied it back so it might have

00:08:39 --> 00:08:43
a little bit of reasoning in there but

00:08:40 --> 00:08:44
if you look at the rankings here right

00:08:42 --> 00:08:46
it's it's definitely one of the best

00:08:43 --> 00:08:47
models when it came out that was out

00:08:45 --> 00:08:49
here with thee architecture I think is

00:08:46 --> 00:08:50
a very modern architecture right it

00:08:48 --> 00:08:52
gives you very good inflence

00:08:49 --> 00:08:54
characteristics the other thing is like

00:08:51 --> 00:08:56
talking aboute so so dipu has been doing

00:08:53 --> 00:08:59
M for a long time and or a few years now

00:08:55 --> 00:09:01
but the nice thing about B3 is the

00:08:58 --> 00:09:04
number of experts right we talk about is

00:09:00 --> 00:09:06
256 experts which is a large a relative

00:09:03 --> 00:09:07
large number of experts in terms of at

00:09:05 --> 00:09:09
least open source models that we've seen

00:09:06 --> 00:09:11
out there like to mixed trial which is

00:09:08 --> 00:09:15
eight right much higher so is much

00:09:10 --> 00:09:16
igher and the ratio of the the express

00:09:14 --> 00:09:19
activate inference is also pretty high

00:09:15 --> 00:09:21
like they activate a few experts versus

00:09:18 --> 00:09:25
total number of experts which is 256 so

00:09:21 --> 00:09:27
they had this nice rate of activations

00:09:24 --> 00:09:29
versus model size which I think is it's

00:09:26 --> 00:09:31
pretty unique and the reason I say that

00:09:28 --> 00:09:32
is it's training an is not very

00:09:30 --> 00:09:34
straightforward it's it's it's a little

00:09:31 --> 00:09:36
bit more complex than just training a f

00:09:33 --> 00:09:39
dense model so I think that was some of

00:09:35 --> 00:09:41
the Innovations they did or knoow that

00:09:38 --> 00:09:44
hey had was being able to train a large

00:09:40 --> 00:09:47
xpert model and so and this deeps B3 so

00:09:43 --> 00:09:48
that was the starting point for

00:09:46 --> 00:09:52
everything else they did so let let's

00:09:48 --> 00:09:54
talk about R1 so here's a rough

00:09:51 --> 00:09:56
flowchart to see what the different

00:09:53 --> 00:09:58
steps are for for training R1 so the

00:09:55 --> 00:10:00
first thing they did was basically they

00:09:57 --> 00:10:02
trained this thing called Deep seek R1

00:09:59 --> 00:10:04
zero which is great at reasoning but has

00:10:01 --> 00:10:08
a lot of other problems that a fair

00:10:03 --> 00:10:10
statement and honestly everything else

00:10:07 --> 00:10:12
is just them going back to deeps V V3 so

00:10:09 --> 00:10:14
their classic Model and figuring out

00:10:11 --> 00:10:17
ways how they can Leverage The the

00:10:14 --> 00:10:19
better reasoning capabilities in D R1 Z

00:10:16 --> 00:10:21
but at the same time make that model

00:10:18 --> 00:10:23
better behaved and easier for humans to

00:10:20 --> 00:10:25
consume right is that is that the right

00:10:22 --> 00:10:27
over right that's right so let's talk

00:10:24 --> 00:10:29
about how deeps i1 was actually trained

00:10:27 --> 00:10:30
and and this diagram here may look a

00:10:28 --> 00:10:31
little bit intimidating but this this

00:10:29 --> 00:10:33
gives you an overview of the training

00:10:31 --> 00:10:36
process so on the left side we have DC

00:10:32 --> 00:10:38
V3 which is their classically trained

00:10:35 --> 00:10:39
llm so this is not a reasoning model

00:10:37 --> 00:10:41
only with a little bit of little bit of

00:10:38 --> 00:10:43
reasoning but it looks more like the the

00:10:40 --> 00:10:45
models before reasoning models so aware

00:10:42 --> 00:10:47
thing and then basically they took that

00:10:44 --> 00:10:49
and trained using the same approach they

00:10:47 --> 00:10:51
had previously done the math model they

00:10:48 --> 00:10:53
used that to train the first deep seek

00:10:50 --> 00:10:56
r10 and we'll go in details of how

00:10:52 --> 00:10:57
exactly that was done uh and DC I10 is

00:10:55 --> 00:10:59
actually very very good reasoning model

00:10:56 --> 00:11:03
it's arguably better in reasoning than

00:10:58 --> 00:11:05
the the final SE R1 um unfortunately it

00:11:02 --> 00:11:07
is not very nice to work with because it

00:11:04 --> 00:11:08
switches languages uh you know randomly

00:11:06 --> 00:11:10
it may start in Chinese and then talk in

00:11:07 --> 00:11:12
English and then switch back to Chinese

00:11:09 --> 00:11:13
it you know may have gibberish in its

00:11:11 --> 00:11:15
answer and so at the end it produces the

00:11:12 --> 00:11:17
right answer but it's not something that

00:11:14 --> 00:11:19
a human would normally want to use and

00:11:16 --> 00:11:20
so I think it's fair to say the entire

00:11:18 --> 00:11:22
st of the training process is just

00:11:20 --> 00:11:24
rying to get this really badly behaved

00:11:21 --> 00:11:26
model to become a nicely behaved model

00:11:23 --> 00:11:27
that humans like to use that's right so

00:11:25 --> 00:11:29
basically the way they did that trying

00:11:26 --> 00:11:31
to fix R1 Z is it added a couple more

00:11:28 --> 00:11:33
faces in the post running um that

00:11:30 --> 00:11:34
included two supervised fine-tuning

00:11:32 --> 00:11:36
phases and two reinforcement learning

00:11:33 --> 00:11:38
phases and these reinforcement learning

00:11:35 --> 00:11:40
phases that were a large scale

00:11:37 --> 00:11:41
reinforcement learning phases super and

00:11:39 --> 00:11:43
then every time basically they took

00:11:40 --> 00:11:45
outputs of that and went back to the B3

00:11:42 --> 00:11:48
Bas and start training again the net

00:11:44 --> 00:11:49
result of that is steep C i1 all right

00:11:47 --> 00:11:52
let's jump to that into with a little

00:11:48 --> 00:11:54
bit more detail so what we got here is a

00:11:51 --> 00:11:55
prompt that they used for training right

00:11:53 --> 00:11:58
which basically instructs the model

00:11:54 --> 00:11:59
specifically to show it reasoning step

00:11:57 --> 00:12:01
by step right and then they have an

00:11:58 --> 00:12:02
evaluation function which actually makes

00:12:00 --> 00:12:04
ure that that the model actually does

00:12:02 --> 00:12:05
that so it doesn't get any brownie

00:12:03 --> 00:12:07
points so it doesn't get reinforced on

00:12:04 --> 00:12:10
things where it does not show reasoning

00:12:06 --> 00:12:12
or the result is incorrect right and and

00:12:09 --> 00:12:14
as they were running this I mean this is

00:12:11 --> 00:12:17
to me is an amazing graph right this is

00:12:13 --> 00:12:19
plots the the length of the response

00:12:16 --> 00:12:21
over the training steps and you can see

00:12:18 --> 00:12:22
that very quickly the answers get longer

00:12:20 --> 00:12:23
and longer and longer right and not just

00:12:21 --> 00:12:25
by a little bit but you know we're

00:12:22 --> 00:12:27
starting out here with something that's

00:12:24 --> 00:12:28
like maybe a thousand or so um tokens a

00:12:26 --> 00:12:29
little under a thousand tokens or a

00:12:27 --> 00:12:30
little under a th words so that would be

00:12:28 --> 00:12:32
two

00:12:29 --> 00:12:34
that's already pretty good reasoning for

00:12:31 --> 00:12:37
a complex problem but the end there

00:12:33 --> 00:12:40
something like 10,000 tokens 10,000 so

00:12:36 --> 00:12:42
that's was it 20 Pages yeah there's an

00:12:39 --> 00:12:43
amazing amount of reasoning right that's

00:12:41 --> 00:12:45
right so and the very interesting thing

00:12:42 --> 00:12:47
too is when you see these reasoning

00:12:44 --> 00:12:48
models there there's these new tokens

00:12:46 --> 00:12:50
that appear right like the thinking

00:12:47 --> 00:12:52
tokens and it's basically just a token

00:12:49 --> 00:12:54
that appears when the model is doing its

00:12:51 --> 00:12:56
reasoning steps or reasoning tokens and

00:12:53 --> 00:12:58
then it when it finishes re reasoning it

00:12:55 --> 00:13:00
has like a end of token thinking

00:12:57 --> 00:13:02
token basically and it you what he

00:12:59 --> 00:13:04
thinks is the right response by the end

00:13:01 --> 00:13:07
so basically they appli this Pipeline

00:13:03 --> 00:13:09
and they saw these few things that were

00:13:06 --> 00:13:12
interesting in R1 zero right so they

00:13:08 --> 00:13:15
kind of used some of these traces

00:13:11 --> 00:13:17
actually in R1 when they decided to

00:13:14 --> 00:13:20
basically fix these r10 models like how

00:13:16 --> 00:13:21
do we improve now or how do we make it

00:13:19 --> 00:13:23
usable for humans right like it's great

00:13:20 --> 00:13:25
on reasoning how how do we improve it so

00:13:22 --> 00:13:27
that people can use it and this is where

00:13:24 --> 00:13:29
the interesting things came later this

00:13:26 --> 00:13:30
obviously a house SL where we see what

00:13:28 --> 00:13:32
hey're doing not makes the answers

00:13:29 --> 00:13:35
longer but it actually works right so

00:13:31 --> 00:13:37
we're suddenly seeing replies that you

00:13:34 --> 00:13:39
know like if you look at the score here

00:13:36 --> 00:13:40
they can solve much much more complex

00:13:38 --> 00:13:42
problems that previously weren't solved

00:13:40 --> 00:13:45
this I think is really impressive so

00:13:41 --> 00:13:46
basically r10 that was the Quantum Leap

00:13:44 --> 00:13:49
in in model

00:13:45 --> 00:13:50
performance yeah that's right here this

00:13:48 --> 00:13:52
super interesting example this is an

00:13:49 --> 00:13:54
AA moment and have you ever seen this a

00:13:51 --> 00:13:56
model before yeah this is this is AA

00:13:53 --> 00:13:58
moment and the deeps team just called it

00:13:55 --> 00:13:59
he the a in in the model but also the H

00:13:57 --> 00:14:01
moment for them at least when they saw

00:13:58 --> 00:14:02
like those tokens basically the

00:14:00 --> 00:14:04
reasoning was like hey I'm making a

00:14:01 --> 00:14:06
mistake here maybe let me fix this right

00:14:03 --> 00:14:08
so it's kind of like its own reflection

00:14:05 --> 00:14:10
and this is very clearly very important

00:14:07 --> 00:14:12
during the RL training process so yeah

00:14:09 --> 00:14:13
this a little bit how humans learn right

00:14:11 --> 00:14:14
it's like here's a problem you try to

00:14:12 --> 00:14:16
solve it and you learn from how you

00:14:13 --> 00:14:18
solve it right right turns out that we

00:14:15 --> 00:14:20
can now do a similar thing with models

00:14:17 --> 00:14:23
o the net result of this I have now

00:14:19 --> 00:14:24
deeps r10 it's very good at reasoning

00:14:22 --> 00:14:25
it's sometimes in the middle of the

00:14:23 --> 00:14:27
sentence switches the language from

00:14:24 --> 00:14:29
English to Chinese or even something

00:14:26 --> 00:14:31
else it's you know it generates very

00:14:28 --> 00:14:33
strange answers that are hard for humans

00:14:30 --> 00:14:36
to read so how did they get from there

00:14:32 --> 00:14:37
to an actual fully working model that is

00:14:35 --> 00:14:40
easily consumable by humans yeah

00:14:36 --> 00:14:42
so so that was uh one of the beauties

00:14:39 --> 00:14:44
that they did was basically they wanted

00:14:41 --> 00:14:47
to fix r10 and the way they did it is

00:14:43 --> 00:14:49
they took B3 again the base model uh but

00:14:46 --> 00:14:51
instead of going straight into RL the

00:14:48 --> 00:14:53
way they did it with r10 is they decided

00:14:50 --> 00:14:55
to step in between yeah and they call

00:14:52 --> 00:14:57
that the cold start data yeah and this

00:14:54 --> 00:14:58
cold data was a few thousand I don't we

00:14:56 --> 00:15:01
don't say the specific number of how

00:14:58 --> 00:15:02
many traces they use but but basically

00:15:00 --> 00:15:05
the use and amount of data that was

00:15:01 --> 00:15:07
coming out of R1 Z these were traces

00:15:04 --> 00:15:10
that were coming out of one Z but these

00:15:06 --> 00:15:11
were basically selected just making sure

00:15:09 --> 00:15:14
they're in the right language they were

00:15:10 --> 00:15:17
correct they selected some of those and

00:15:13 --> 00:15:19
they basically train the model B3 in a

00:15:16 --> 00:15:21
normal sft way using those traces that

00:15:18 --> 00:15:23
were coming from r10 they they call this

00:15:21 --> 00:15:25
the call start data which was that

00:15:22 --> 00:15:27
process and it's basically to align the

00:15:25 --> 00:15:29
model in a few ways like so that it

00:15:26 --> 00:15:31
gives responses in a consistent way

00:15:28 --> 00:15:33
maybe more like a longer with more chain

00:15:30 --> 00:15:35
of thought that was kind of like the

00:15:32 --> 00:15:36
initial kind of like the idea of why

00:15:34 --> 00:15:39
they wanted to add this cold start data

00:15:35 --> 00:15:41
in that and then they added RL after

00:15:38 --> 00:15:42
that they they generate the coldstar

00:15:40 --> 00:15:44
data they you know they use it to

00:15:42 --> 00:15:46
initialize the model and then s they did

00:15:43 --> 00:15:48
the same trick that they did before

00:15:45 --> 00:15:50
which is basically you train a model

00:15:47 --> 00:15:51
that gives you feedback uh on what you

00:15:49 --> 00:15:53
do and and use that to

00:15:50 --> 00:15:54
basically rank answers that are

00:15:52 --> 00:15:56
generated by the model to basically

00:15:53 --> 00:15:58
improve what comes out of the model

00:15:55 --> 00:16:00
right so all of this again we're using

00:15:57 --> 00:16:02
the the data that they came this r10

00:15:59 --> 00:16:04
model but now s of apply it back to the

00:16:01 --> 00:16:05
original model to get a model that's

00:16:03 --> 00:16:07
better behaved it turns out they still

00:16:04 --> 00:16:09
weren't happy with that so they use that

00:16:06 --> 00:16:10
again to generate tracers or to generate

00:16:08 --> 00:16:13
you know reasoning reasoning chains I

00:16:09 --> 00:16:15
think it was 600,000 600,000 that's a

00:16:12 --> 00:16:17
lot that's a lot if you think about it

00:16:14 --> 00:16:19
let's assume I want to generate 600,000

00:16:16 --> 00:16:21
traces of complex reasoning things with

00:16:18 --> 00:16:22
umans yeah you know for some of the

00:16:20 --> 00:16:24
math problems you definitely want

00:16:21 --> 00:16:26
somebody with a graduate degree if I

00:16:23 --> 00:16:29
mean we saw that the average answer was

00:16:26 --> 00:16:31
20 Pages how much do I have to pay a

00:16:28 --> 00:16:34
math p PhD to to generate 20 pages of

00:16:30 --> 00:16:35
text right if this is a I don't know

00:16:33 --> 00:16:37
$100 is probably not enough assume it

00:16:34 --> 00:16:40
was $100,000 and this would be $60

00:16:36 --> 00:16:41
Million worth of results right but now I

00:16:39 --> 00:16:43
don't need the humans anymore but

00:16:40 --> 00:16:46
instead I can generate those 600,000

00:16:42 --> 00:16:49
with a computer right that is amazing

00:16:45 --> 00:16:51
right so 600,000 verifiable kind of like

00:16:48 --> 00:16:54
domain math puzzles code and then they

00:16:50 --> 00:16:56
took 200,000 that were more in the side

00:16:53 --> 00:16:58
of creative thinking creative writing

00:16:55 --> 00:17:00
storytelling there were from humans and

00:16:57 --> 00:17:03
those those came from humans basically

00:16:59 --> 00:17:06
uh they came from some of them came from

00:17:02 --> 00:17:07
B3 it's St like out of the model B3 and

00:17:05 --> 00:17:09
then some of them came seems like from

00:17:06 --> 00:17:12
the data set that they they use for

00:17:08 --> 00:17:16
training B3 by itself so they selected

00:17:11 --> 00:17:19
these 200,000 traces then they applied

00:17:15 --> 00:17:21
another sft run so basically our one was

00:17:18 --> 00:17:24
multi-stage training we included two

00:17:20 --> 00:17:26
phases of supervised fine tuning and two

00:17:23 --> 00:17:28
phases of reinforcement learning being

00:17:25 --> 00:17:30
the first phase that they use in sft was

00:17:27 --> 00:17:32
a callar data that we talked about

00:17:29 --> 00:17:34
Second Step was the RL phase on

00:17:31 --> 00:17:37
verifyable domains based on rule base

00:17:33 --> 00:17:40
math and so on the third step was

00:17:36 --> 00:17:43
basically the sft on these 800,000

00:17:39 --> 00:17:46
samples so 600 from math and code and

00:17:42 --> 00:17:48
then the 200,000 from creative thinking

00:17:45 --> 00:17:50
and and other other fields that are more

00:17:47 --> 00:17:52
on the human preference rather than like

00:17:49 --> 00:17:54
verifiable domains and then the final

00:17:51 --> 00:17:55
stage was the reinforcement learning

00:17:53 --> 00:17:57
again basically in all domains yeah that

00:17:55 --> 00:17:59
makes sense and but it's interesting

00:17:56 --> 00:18:01
they said they spent I think 5 a half

00:17:58 --> 00:18:03
million dollars on on on training V3

00:18:00 --> 00:18:05
right so going from V3 to R1 is probably

00:18:02 --> 00:18:07
pretty cheap is my guess right I mean

00:18:04 --> 00:18:09
it's mostly inference what you're doing

00:18:06 --> 00:18:10
there little sft right that's right I

00:18:08 --> 00:18:12
mean in terms of number of operations

00:18:09 --> 00:18:14
eems to be two orders of magnitude

00:18:11 --> 00:18:17
smaller or so than than I think what the

00:18:13 --> 00:18:19
pre-training is but but the V3 um they

00:18:16 --> 00:18:21
quoted $5.5 million I think you know at

00:18:18 --> 00:18:23
Market rates uh to train it does that

00:18:21 --> 00:18:24
sound sound reasonable that sounds

00:18:22 --> 00:18:26
reasonable I mean we we've seen other

00:18:23 --> 00:18:29
models from other U companies on labs

00:18:26 --> 00:18:31
and what they disclose is is is not

00:18:28 --> 00:18:33
something crazy so so I think it's we

00:18:30 --> 00:18:34
ran the cost for some llama models last

00:18:32 --> 00:18:36
year and I think we ended up with you

00:18:33 --> 00:18:38
know a little over $3 million right and

00:18:35 --> 00:18:40
mean all of these numbers are

00:18:37 --> 00:18:41
probably we can only we can only reverse

00:18:39 --> 00:18:43
ngineer them with them a factor of two

00:18:40 --> 00:18:45
r so well these AR precise numbers but

00:18:42 --> 00:18:47
hey they roughly make sense right

00:18:44 --> 00:18:50
here's one big caveat here which is the

00:18:46 --> 00:18:52
final test run is often not the majority

00:18:49 --> 00:18:54
of the money that you spend right you

00:18:51 --> 00:18:56
need many test runs that don't work well

00:18:53 --> 00:18:58
your highly paid phds that that that do

00:18:56 --> 00:19:00
the uh do the training um probably

00:18:58 --> 00:19:02
highly paid they need sort of

00:18:59 --> 00:19:05
infrastructure to experiment on for dat

00:19:01 --> 00:19:07
rust and so so of your total compute

00:19:04 --> 00:19:09
budget that final run it's probably very

00:19:06 --> 00:19:11
small faction yeah that's right I think

00:19:08 --> 00:19:13
a lot of comes from experimentation I

00:19:10 --> 00:19:15
mean coming up with this composition of

00:19:12 --> 00:19:19
having this multi-stage training going

00:19:14 --> 00:19:21
from B3 to sft and then RL and sft and

00:19:18 --> 00:19:23
then RL again this obviously going

00:19:20 --> 00:19:25
coming up to that process probably

00:19:22 --> 00:19:27
require a lot of experimentation yeah um

00:19:24 --> 00:19:28
also there's a lot of fail runs all the

00:19:26 --> 00:19:31
time right I mean we're just calculating

00:19:28 --> 00:19:32
the final run but like at the same time

00:19:30 --> 00:19:34
it's like how many fail runs do you have

00:19:31 --> 00:19:35
like how many fail experiments you have

00:19:33 --> 00:19:37
so I think that's where a lot of the

00:19:34 --> 00:19:39
cost comes the cost of an aircraft is

00:19:36 --> 00:19:41
not the final assembly it's all the test

00:19:38 --> 00:19:43
FL that's correct so so there's a lot of

00:19:40 --> 00:19:45
cost that comes into that selecting the

00:19:42 --> 00:19:47
right traces maybe there was a lot of

00:19:44 --> 00:19:49
data set uh shuffling to figure out what

00:19:46 --> 00:19:51
is the best data set and which one shows

00:19:48 --> 00:19:53
you the best results so there's a lot of

00:19:50 --> 00:19:54
experimentation that obviously we don't

00:19:52 --> 00:19:56
see in terms of the cost but obviously

00:19:53 --> 00:19:58
that requires uh so deeps also did a

00:19:55 --> 00:20:00
number of other interesting Innovations

00:19:57 --> 00:20:01
as part of how they built the model

00:19:59 --> 00:20:04
there was some some change in attention

00:20:00 --> 00:20:06
mechanism right well they they so they

00:20:03 --> 00:20:07
we've used in the past multi-ad

00:20:05 --> 00:20:09
attention yeah but they didn't

00:20:06 --> 00:20:12
implementation MLA multi-head latent

00:20:08 --> 00:20:14
attention which basically it's it's a me

00:20:11 --> 00:20:16
it's an optimization on on on the

00:20:13 --> 00:20:18
multihead attention with the KV vectors

00:20:15 --> 00:20:20
are just in latent space so they're more

00:20:18 --> 00:20:23
fficient during training and inference

00:20:19 --> 00:20:25
and they came up with this in dipic B2

00:20:22 --> 00:20:27
and that been said they to this had a

00:20:24 --> 00:20:30
few imp implications which was if you

00:20:26 --> 00:20:33
wanted to now to make the context long

00:20:29 --> 00:20:35
say they starting from 8 to 32 or 128k

00:20:32 --> 00:20:37
so the normally there's this thing

00:20:34 --> 00:20:40
called rope embeddings rotationally po

00:20:36 --> 00:20:42
sitional embeddings which basically uh

00:20:39 --> 00:20:44
what you do you you add an additional

00:20:41 --> 00:20:46
Vector that has additional positions

00:20:43 --> 00:20:49
going forward like if you want extend it

00:20:45 --> 00:20:50
he problem is with MLA it kind of loses

00:20:48 --> 00:20:53
that Vector in position so they needed

00:20:49 --> 00:20:55
to reimplement rope and they came up

00:20:52 --> 00:20:57
with this thing called the couple rope

00:20:54 --> 00:20:59
um which they also created in in one of

00:20:56 --> 00:21:01
the previous models they did then they

00:20:58 --> 00:21:04
also implemented grpo which is

00:21:00 --> 00:21:06
basically an improvement of Po uh which

00:21:03 --> 00:21:08
is this R RL Al algorithm for training

00:21:05 --> 00:21:10
and they implemented that in deeps math

00:21:07 --> 00:21:12
I mean overall I think it's fair to say

00:21:09 --> 00:21:14
they they combined really a whole string

00:21:11 --> 00:21:16
of best of PR techniques here right very

00:21:13 --> 00:21:18
well built I think really really amazing

00:21:15 --> 00:21:19
job and and it's very interesting to see

00:21:17 --> 00:21:21
that a lot of the optimizations are

00:21:18 --> 00:21:24
mostly in the compute efficiency side so

00:21:21 --> 00:21:26
it's like how do we make the kvq vectors

00:21:23 --> 00:21:29
more efficient how do we train in mixed

00:21:25 --> 00:21:31
Precision so they train in fp8 but

00:21:28 --> 00:21:33
basically optimizations they're doing um

00:21:30 --> 00:21:34
even in the r grpo is basically a more

00:21:32 --> 00:21:36
fficient way of sampling I think it's

00:21:34 --> 00:21:39
the classic story of AI right computer

00:21:35 --> 00:21:40
efficiency really matters if you can and

00:21:38 --> 00:21:42
if you're you know in China it probably

00:21:39 --> 00:21:44
matters even a little bit more so we

00:21:41 --> 00:21:47
have this new set of reasoning models

00:21:43 --> 00:21:49
what what are the consequences of right

00:21:46 --> 00:21:51
so I mean if I look back if you would

00:21:48 --> 00:21:53
have asked me in Q3 last year I would

00:21:50 --> 00:21:55
have said look we're seeing model

00:21:52 --> 00:21:57
Performance top out right I mean so if I

00:21:54 --> 00:22:00
look at the the the big you know top

00:21:56 --> 00:22:02
tier llms from you know the all the all

00:21:59 --> 00:22:04
of the the model providers uh we're

00:22:01 --> 00:22:06
seeing their their test scores

00:22:03 --> 00:22:07
compressed into a narrower narrower band

00:22:05 --> 00:22:09
uh you know we're seeing open source

00:22:06 --> 00:22:11
catching up right everybody is now

00:22:08 --> 00:22:12
densely clustered where you know 18

00:22:10 --> 00:22:14
months ago 18 months earlier you know

00:22:11 --> 00:22:17
gbd4 was pretty much alone at the the

00:22:13 --> 00:22:19
very top tier so how does this change

00:22:16 --> 00:22:21
things a lot of the compu is probably

00:22:18 --> 00:22:23
going to go into test time inference or

00:22:21 --> 00:22:25
test time computers as people okay so

00:22:22 --> 00:22:27
that's the so so now that we basically

00:22:24 --> 00:22:29
generate what was it 10,000 word

00:22:26 --> 00:22:31
reasoning chains we need a lot more

00:22:28 --> 00:22:33
inference we need more we've gotten 20

00:22:30 --> 00:22:35
times longer than our answer so so very

00:22:32 --> 00:22:36
roughly if we all if everybody would

00:22:34 --> 00:22:38
switch tomorrow from whatever they have

00:22:35 --> 00:22:40
today to reasoning model we would need

00:22:37 --> 00:22:41
20 times more inference that's

00:22:39 --> 00:22:43
crazy that's great yeah yeah that's

00:22:40 --> 00:22:45
crazy and and that has an implication

00:22:42 --> 00:22:46
obviously like like how do we build the

00:22:44 --> 00:22:48
systems because normally we've been

00:22:45 --> 00:22:50
optimizing for a lot of training but now

00:22:48 --> 00:22:52
also like we we're adding this test time

00:22:49 --> 00:22:54
compute that is very important right so

00:22:51 --> 00:22:55
a lot of that work Lo is going into

00:22:53 --> 00:22:57
that space now what does it mean on the

00:22:54 --> 00:22:59
training side I mean we were sort of

00:22:56 --> 00:23:01
Tapped Out on training because you know

00:22:58 --> 00:23:03
e can overtrain but but nevertheless

00:23:00 --> 00:23:06
with Trilla we know that there's s of a

00:23:02 --> 00:23:07
ratio of the amount of training data we

00:23:05 --> 00:23:09
have and the model size the amount of

00:23:06 --> 00:23:11
training data in the past was all human

00:23:08 --> 00:23:12
generated data there's only so much on

00:23:10 --> 00:23:14
the planet and you know I mean the

00:23:11 --> 00:23:16
internet is the largest repository so I

00:23:13 --> 00:23:17
think just what we saw is everyone was

00:23:15 --> 00:23:18
training on the internet this is the

00:23:16 --> 00:23:20
same data set everyone was using

00:23:17 --> 00:23:21
enerative Transformer so everyone was

00:23:19 --> 00:23:23
roughly getting a model of the same

00:23:20 --> 00:23:25
quality right and throwing more computer

00:23:22 --> 00:23:27
it did not help that much because if you

00:23:25 --> 00:23:29
don't find more data then then their

00:23:27 --> 00:23:31
computer isn't worth a whole lot right

00:23:28 --> 00:23:32
and but that's different now that's

00:23:30 --> 00:23:34
different and also the the quality of

00:23:31 --> 00:23:35
data matters right I think the believe

00:23:33 --> 00:23:38
the pre-training is like if you keep

00:23:34 --> 00:23:39
scaling data on compute you would get

00:23:37 --> 00:23:42
huge improvements but we definitely saw

00:23:38 --> 00:23:44
that Plateau at some point right and we

00:23:41 --> 00:23:46
need to come up with a different way of

00:23:43 --> 00:23:48
doing this reasoning on these models

00:23:45 --> 00:23:49
and this is where RL comes in and the

00:23:47 --> 00:23:51
chain of thoughts and so basically

00:23:48 --> 00:23:53
that's kind of like one of the changes I

00:23:50 --> 00:23:56
think the other one is well it's these

00:23:52 --> 00:23:58
models are up Source now I think I'm

00:23:55 --> 00:24:00
seeing a lot of innovation in the space

00:23:57 --> 00:24:02
where people are taking this model

00:23:59 --> 00:24:04
that's great for is great for the AI

00:24:01 --> 00:24:06
industry so I think that's another thing

00:24:03 --> 00:24:08
where you have now a reasoning model

00:24:05 --> 00:24:10
that is basically a pretty good quality

00:24:07 --> 00:24:13
model on per with some of the Open Eye

00:24:09 --> 00:24:15
models so that is being a big change in

00:24:12 --> 00:24:17
the industry as well yeah that's that

00:24:14 --> 00:24:20
makes sense so I think here's a slide

00:24:16 --> 00:24:22
from J CE of Nvidia where I think the

00:24:19 --> 00:24:25
way he he framed it was to say like look

00:24:21 --> 00:24:27
we've we've had our first sort of curve

00:24:24 --> 00:24:28
of model performance right where we're

00:24:26 --> 00:24:29
starting to top out a little B now we

00:24:27 --> 00:24:32
have new ones on top right so I think

00:24:28 --> 00:24:34
overall this means we we can probably

00:24:31 --> 00:24:35
Now train better models we need more

00:24:33 --> 00:24:37
gpus for training because like for the

00:24:34 --> 00:24:40
self- reasoning and and self-improvement

00:24:36 --> 00:24:41
here's no clear Peak with human like we

00:24:39 --> 00:24:43
had before with where we need human

00:24:40 --> 00:24:45
generated data right so we don't know

00:24:42 --> 00:24:47
yet where this is going to going to top

00:24:44 --> 00:24:49
out yet we need more for for inference

00:24:46 --> 00:24:50
and and overall we'll we'll have much

00:24:48 --> 00:24:52
better models right this is really

00:24:49 --> 00:24:54
exciting right I think overall this this

00:24:51 --> 00:24:55
probably means that the AI is going to

00:24:53 --> 00:24:57
accelerate a little bit for a while

00:24:54 --> 00:24:59
again definitely purely infrastructure

00:24:56 --> 00:25:00
level and then the applications on top

00:24:58 --> 00:25:01
that really verticalized this and and

00:24:59 --> 00:25:03
you know create more interesting use

00:25:00 --> 00:25:05
case they'll accelerate it further so I

00:25:02 --> 00:25:07
think it's this bolts very well for for

00:25:04 --> 00:25:10
AI overall definitely another another

00:25:06 --> 00:25:12
interesting thing that that came out of

00:25:09 --> 00:25:16
the paper from R1 was for these model

00:25:11 --> 00:25:19
s the llamas the 70 BS the 7bs

00:25:15 --> 00:25:21
13bs what is it better is it better to

00:25:18 --> 00:25:24
use RL the same

00:25:20 --> 00:25:26
RL on the 7 models or can you do some

00:25:23 --> 00:25:28
sort of distillation from a bigger model

00:25:25 --> 00:25:30
so turn out in their experiments they

00:25:27 --> 00:25:33
took Lama and some of these other q1

00:25:30 --> 00:25:35
models uh and they basically apply RL

00:25:32 --> 00:25:38
straight the same way they did with R1

00:25:35 --> 00:25:39
on these base models and it turns out

00:25:37 --> 00:25:41
hat it improved in some Fields but it

00:25:38 --> 00:25:43
was not a significant Improvement so

00:25:40 --> 00:25:46
where they saw a significant Improvement

00:25:42 --> 00:25:48
was doing distillation from R1 so

00:25:45 --> 00:25:50
basically generating a lot of question

00:25:47 --> 00:25:51
and answers and long chain of thoughts

00:25:49 --> 00:25:54
and basically they just train on these

00:25:50 --> 00:25:56
phases and that was more efficient that

00:25:53 --> 00:25:57
show much improvement in these models

00:25:55 --> 00:25:59
and I thought it was quite interesting

00:25:56 --> 00:26:01
so so it turns how the distillation

00:25:58 --> 00:26:03
actually ended up being very effective

00:26:00 --> 00:26:05
uh for these model models rather than

00:26:02 --> 00:26:07
applying the RL one the RL reinforcement

00:26:04 --> 00:26:09
learning pipeline in these models they

00:26:06 --> 00:26:11
actually run great on your laptop and of

00:26:08 --> 00:26:13
course we mean downloading the distilled

00:26:10 --> 00:26:15
models know there's a sort of a lot of

00:26:12 --> 00:26:16
controversy around you know deep seek do

00:26:14 --> 00:26:17
you want to send your data to China and

00:26:15 --> 00:26:19
it probably depends a little what you

00:26:16 --> 00:26:21
want to do how how comfortable you feel

00:26:18 --> 00:26:24
with that but but uh independently of

00:26:20 --> 00:26:25
that the model weights are are open so

00:26:23 --> 00:26:26
you can just download them on your

00:26:24 --> 00:26:28
laptop run them with some open source

00:26:25 --> 00:26:30
package like ol Lama for example on the

00:26:27 --> 00:26:31
MacBook works great and now we have a

00:26:29 --> 00:26:33
fairly powerful reasoning model you know

00:26:30 --> 00:26:34
running locally on your laptop it's

00:26:32 --> 00:26:35
actually pretty amazing it is pretty

00:26:33 --> 00:26:37
amazing like you you can do all these

00:26:34 --> 00:26:38
sort of Innovations where quantizing the

00:26:36 --> 00:26:41
model to run it on a very small device

00:26:37 --> 00:26:45
yeah exactly um or maybe you use you use

00:26:40 --> 00:26:47
a a a 7B model but you have from a very

00:26:44 --> 00:26:49
good distillation from from R1 which

00:26:46 --> 00:26:51
suddenly turn to be much better and more

00:26:48 --> 00:26:52
fficient probably for a smaller device

00:26:50 --> 00:26:53
yeah so you have these sort of new

00:26:51 --> 00:26:55
innovations that are pretty exciting

00:26:52 --> 00:26:57
super well I hope this was interesting

00:26:54 --> 00:27:00
uh you know I think this is a big step

00:26:56 --> 00:27:02
forward for for AI again and some some

00:26:59 --> 00:27:05
more exciting developments to come

00:27:01 --> 00:27:05
thanks

<!-- YOUTUBE_TRANSCRIPT_END -->
