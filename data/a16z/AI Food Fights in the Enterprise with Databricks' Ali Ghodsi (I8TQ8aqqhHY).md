---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "I8TQ8aqqhHY"
title: "AI Food Fights in the Enterprise with Databricks' Ali Ghodsi"
video_url: "https://www.youtube.com/watch?v=I8TQ8aqqhHY"
thumbnail_url: "https://i.ytimg.com/vi/I8TQ8aqqhHY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=I8TQ8aqqhHY"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2023-09-25T14:00:18.000Z"
upload_date: "2023-09-25"
duration_seconds: 1472
duration_human: "24:32"
view_count: 7128
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T13:58:52.189Z"
---

# AI Food Fights in the Enterprise with Databricks' Ali Ghodsi

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=I8TQ8aqqhHY
- video_id: I8TQ8aqqhHY
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2023-09-25T14:00:18.000Z
- upload_date: 2023-09-25
- duration: 24:32
- view_count: 7128
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Ali Ghodsi, CEO and cofounder of Databricks, and Ben Horowitz, cofounder of a16z, explain the data wars happening inside and outside enterprises and how they could impact the evolution of LLMs. 

[0:00] Why is it so hard for enterprises to adopt AI?
[3:08] Data wars
[4:28] Big vs. small LLMs
[8:13] Finetuning
[13:52] Open source AI
[17:51] Benchmarks
[19:30] Why Ali isn't afraid of AI

This conversation is part of our AI Revolution series, recorded August 2023 at a live event in San Francisco. The series features some of the most impactful builders in the field of AI discussing and debating where we are, where we’re going, and the big open questions in AI. Find more content from our AI Revolution series on www.a16z.com/AIRevolution.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
and it's unclear is it I.T that owns an

00:00:02 --> 00:00:06
AI is it the product line is it the

00:00:03 --> 00:00:07
business line so there's like huge

00:00:05 --> 00:00:09
politics going on inside the large

00:00:06 --> 00:00:11
Enterprise They want to do it but

00:00:08 --> 00:00:37
here's all these hurdles in the way

00:00:10 --> 00:00:41
[Music]

00:00:36 --> 00:00:43
all right so going to generative AI one

00:00:40 --> 00:00:46
of the things that's been

00:00:42 --> 00:00:48
interesting for us as a VC is like

00:00:45 --> 00:00:51
we see all kinds of companies some with

00:00:47 --> 00:00:54
amazing traction but every company that

00:00:50 --> 00:00:57
has traction is in a category like

00:00:53 --> 00:01:00
selling to developers or

00:00:56 --> 00:01:03
selling to consumers or maybe selling to

00:00:59 --> 00:01:05
like small kinds of you know law firms

00:01:02 --> 00:01:06
or these kinds of things but we haven't

00:01:04 --> 00:01:08
seen anybody with any tracks in the

00:01:05 --> 00:01:12
Enterprise why is it so hard for

00:01:07 --> 00:01:14
Enterprises to adopt generative AI yeah

00:01:11 --> 00:01:16
so look Enterprises move slow yeah this

00:01:13 --> 00:01:18
one in general right which is the beauty

00:01:15 --> 00:01:19
which means if you crack the code and

00:01:17 --> 00:01:21
you get in

00:01:18 --> 00:01:21
it's harder for them to throw you out so

00:01:20 --> 00:01:23
you're going to have an awesome business

00:01:20 --> 00:01:25
if you do crack the code and you're in

00:01:22 --> 00:01:26
you know it's more robust you're not

00:01:24 --> 00:01:28
going to lose it overnight so that's one

00:01:25 --> 00:01:29
they just move slower second they're

00:01:27 --> 00:01:32
super freaked out about their data

00:01:28 --> 00:01:34
privacy security of their data but then

00:01:31 --> 00:01:36
in general also I just realized

00:01:33 --> 00:01:38
everybody's been talking about data for

00:01:35 --> 00:01:40
10 15 20 years yeah I just realized how

00:01:37 --> 00:01:43
valuable my data actually is so actually

00:01:39 --> 00:01:44
maybe I'm actually I'm sitting on a

00:01:42 --> 00:01:46
trove like Treasure Trove and I'm going

00:01:43 --> 00:01:48
to be super successful so I'm not gonna

00:01:45 --> 00:01:50
I'm gonna be very careful with this like

00:01:47 --> 00:01:52
now I finally realized how valuable this

00:01:49 --> 00:01:54
data set I have is so I definitely don't

00:01:51 --> 00:01:56
want to give it to you or you or you I

00:01:53 --> 00:01:58
should be careful about this and then

00:01:55 --> 00:01:59
there's all these reports about it

00:01:57 --> 00:02:01
leaking you know data leakage like oh

00:01:58 --> 00:02:03
you know suddenly the llm is spitting

00:02:00 --> 00:02:05
out your code or your source so they're

00:02:02 --> 00:02:06
freaked out about that as well right all

00:02:04 --> 00:02:07
of these things are slowing it down and

00:02:05 --> 00:02:09
they're kind of thinking through it

00:02:06 --> 00:02:11
hat's like just one set of challenges

00:02:09 --> 00:02:13
that enterprises have yeah second

00:02:10 --> 00:02:14
challenges Enterprises have is that hey

00:02:12 --> 00:02:16
for a lot of the use cases we need the

00:02:13 --> 00:02:18
data to be accurate we need to be exact

00:02:15 --> 00:02:20
so there's a lot of use cases are they

00:02:17 --> 00:02:22
right about that do do they really need

00:02:19 --> 00:02:24
it to be accurate I think they uh you

00:02:21 --> 00:02:26
know I think it depends on the use case

00:02:23 --> 00:02:28
they're just being cautious and they're

00:02:25 --> 00:02:30
being slow as they are in the beginner

00:02:27 --> 00:02:31
price and then there's the last aspect

00:02:29 --> 00:02:33
which people don't talk about which is

00:02:30 --> 00:02:35
there's like a food fight internally at

00:02:32 --> 00:02:39
he large Enterprise which is who's

00:02:34 --> 00:02:40
fighting I own generative AI not Ben and

00:02:38 --> 00:02:42
then you go around say hey I own

00:02:39 --> 00:02:43
generator AI it's like no no my team is

00:02:41 --> 00:02:46
building gear so there's this you know

00:02:42 --> 00:02:47
food fight internally of who owns it and

00:02:45 --> 00:02:49
then they slow each other down so it's

00:02:46 --> 00:02:51
like hey don't just ban because he's not

00:02:48 --> 00:02:53
handling data the right way but I'm

00:02:50 --> 00:02:55
building my gen Ai and I'm going to be

00:02:52 --> 00:02:56
the companies and it's unclear is it I.T

00:02:54 --> 00:02:58
that owns Den AI is it the product line

00:02:55 --> 00:03:00
This is the business line so there's

00:02:57 --> 00:03:02
like huge politics going on inside the

00:02:59 --> 00:03:03
large Enterprise They want to do it but

00:03:01 --> 00:03:05
here's all these hurdles in the way

00:03:02 --> 00:03:07
eah and the prize is huge whoever can

00:03:04 --> 00:03:09
crack the code on that is gonna you know

00:03:06 --> 00:03:12
it's gonna create amazing company are

00:03:08 --> 00:03:15
the Enterprises right about not wanting

00:03:11 --> 00:03:17
to give their data to open AI or

00:03:14 --> 00:03:20
anthropic or Bard or whoever like is

00:03:16 --> 00:03:22
that a correct fear are they being silly

00:03:19 --> 00:03:25
and they could get so much value by

00:03:21 --> 00:03:26
putting their data in a big model they

00:03:24 --> 00:03:28
can but I think also a lot of the

00:03:25 --> 00:03:30
leaders at you know by the way I get to

00:03:27 --> 00:03:31
talk these days to the CEOs of these big

00:03:29 --> 00:03:33
companies who previously were not

00:03:30 --> 00:03:34
interested in what I'm doing yeah I

00:03:32 --> 00:03:36
would be talking to the CIO but Nelson

00:03:33 --> 00:03:38
they want to talk like hey I want the

00:03:35 --> 00:03:41
standard of AI I want to talk strategy

00:03:37 --> 00:03:42
at my company let's talk and we

00:03:40 --> 00:03:44
have this data set it's super valuable

00:03:42 --> 00:03:46
like you know we've got to do something

00:03:43 --> 00:03:46
with it and it's generative AI seems

00:03:45 --> 00:03:48
interesting what do you want to do with

00:03:45 --> 00:03:50
it and one of the things that's really

00:03:47 --> 00:03:53
interesting that's happened in the sort

00:03:49 --> 00:03:54
of brains of the CEOs and the boards is

00:03:52 --> 00:03:57
that they realize

00:03:53 --> 00:03:59
maybe I can beat my competition maybe

00:03:56 --> 00:04:01
this is the Kryptonite that will help me

00:03:58 --> 00:04:03
kill my enemy I have the data with

00:04:00 --> 00:04:05
generative AI I can actually go ahead

00:04:02 --> 00:04:07
and do that so then they're thinking

00:04:04 --> 00:04:09
well but then I have to build it myself

00:04:06 --> 00:04:10
yeah I have to own that right I have to

00:04:08 --> 00:04:13
wn the IP of that I can't just give

00:04:09 --> 00:04:15
away that IP to anthropic open AI anyone

00:04:12 --> 00:04:16
like it has to be completely provided I

00:04:14 --> 00:04:18
want to own that I want to do that

00:04:15 --> 00:04:19
myself by the way I have a whole bunch

00:04:17 --> 00:04:20
of people here that are lined out

00:04:18 --> 00:04:21
side of my office in different

00:04:19 --> 00:04:23
departments that are saying they

00:04:20 --> 00:04:24
actually will do it and they can do it

00:04:22 --> 00:04:26
right so we're trying to figure out

00:04:23 --> 00:04:27
which of them I should give it to so

00:04:25 --> 00:04:28
this is what's happening internally

00:04:26 --> 00:04:30
right now

00:04:27 --> 00:04:32
um interesting and permanent strategy

00:04:29 --> 00:04:36
standpoint when you think about it let's

00:04:31 --> 00:04:39
ay you had a big data set be it like uh

00:04:35 --> 00:04:41
Healthcare data set or yeah you know

00:04:38 --> 00:04:44
some kind of security data center or

00:04:40 --> 00:04:47
whatever it was or Nielsen's data set

00:04:43 --> 00:04:49
would you can they be can they build a

00:04:46 --> 00:04:53
better model

00:04:48 --> 00:04:54
themselves for that with their data or

00:04:52 --> 00:04:57
if they took their data and put it in

00:04:54 --> 00:04:59
one of the large models would that

00:04:56 --> 00:05:00
always beat what they're doing yeah so

00:04:58 --> 00:05:03
this is why we did the acquisition of

00:04:59 --> 00:05:04
Mosaic yes you can

00:05:02 --> 00:05:07
it's hard

00:05:03 --> 00:05:09
it requires a lot of gpus and the Mosaic

00:05:06 --> 00:05:12
guys just figure out how to do that at

00:05:08 --> 00:05:14
scale for others you want to build your

00:05:11 --> 00:05:17
own alarm from scratch come to me I know

00:05:13 --> 00:05:19
all the sort of you know landmines and

00:05:16 --> 00:05:20
so on it just will work trust me yeah

00:05:18 --> 00:05:22
and so they can do it and yeah they've

00:05:19 --> 00:05:23
done it for large customers they can do

00:05:21 --> 00:05:25
it still it's not for the faint of heart

00:05:22 --> 00:05:27
still requires a lot of gpus costs a lot

00:05:24 --> 00:05:29
of money and it depends on your data

00:05:26 --> 00:05:30
sets and your use cases but they're

00:05:28 --> 00:05:32
having a lot of success doing it for you

00:05:30 --> 00:05:33
know really large Enterprises they'll

00:05:31 --> 00:05:35
train it from scratch for them and it

00:05:32 --> 00:05:38
just works and the result that that they

00:05:34 --> 00:05:41
get with Mosaic so I'm doing it so the

00:05:37 --> 00:05:43
good news is it's all mine nobody can

00:05:40 --> 00:05:45
touch it yeah I data screw off

00:05:42 --> 00:05:47
competitor but

00:05:44 --> 00:05:51
like

00:05:46 --> 00:05:54
is the bigger model like such a bigger

00:05:50 --> 00:05:55
brain anyway that I could get a better

00:05:53 --> 00:05:59
answer if I put that same data in the

00:05:54 --> 00:06:02
big model or is a kind of Mosaic tuned

00:05:58 --> 00:06:05
Enterprise specific data set specific

00:06:01 --> 00:06:07
model gonna perform better like how do

00:06:04 --> 00:06:08
you think about that for specific use

00:06:06 --> 00:06:10
cases

00:06:07 --> 00:06:11
you don't need the big one first of all

00:06:09 --> 00:06:13
you can build the big one with Mosaic

00:06:10 --> 00:06:14
and we did it works yeah this is how

00:06:12 --> 00:06:16
much money do you have we're happy to

00:06:13 --> 00:06:17
train you 100 billion parameter model if

00:06:15 --> 00:06:19
you want

00:06:16 --> 00:06:21
but hey it's going to cost more to use

00:06:18 --> 00:06:23
it even if you have the all the money to

00:06:20 --> 00:06:24
train it will cost you a lot to use it

00:06:22 --> 00:06:26
so when you're using it then you're

00:06:23 --> 00:06:27
doing inferences it's called it's going

00:06:25 --> 00:06:30
to cost you more and how do you think

00:06:26 --> 00:06:33
about the diminishing returns on

00:06:29 --> 00:06:35
um kind of like a data set against like

00:06:32 --> 00:06:37
how many parameters you know versus how

00:06:34 --> 00:06:39
much data do you have

00:06:36 --> 00:06:41
does like a bigger model just start to

00:06:38 --> 00:06:44
be diminishing returns both in terms of

00:06:40 --> 00:06:45
latency expense everything yeah I mean

00:06:43 --> 00:06:47
there's a scaling law you need to scale

00:06:44 --> 00:06:48
if you're scaling the parameters up you

00:06:46 --> 00:06:50
kind of have to scale the data with it

00:06:47 --> 00:06:52
right you know so you just have to do

00:06:49 --> 00:06:53
that so if you don't have that then you

00:06:51 --> 00:06:54
know just scaling it it's not gonna

00:06:52 --> 00:06:56
you're not going to get the bang for the

00:06:53 --> 00:06:57
buck right you still get Improvement if

00:06:55 --> 00:06:59
you increase the parameters or if you

00:06:56 --> 00:07:01
increase gusts the data in any one of

00:06:58 --> 00:07:03
these Dimensions uh but I bet you're

00:07:00 --> 00:07:05
going to pay you're going to pay it yeah

00:07:02 --> 00:07:07
it's no longer a perito optimal so to

00:07:04 --> 00:07:09
say but look what I'm saying is this for

00:07:06 --> 00:07:10
Enterprises that have specific use cases

00:07:08 --> 00:07:13
which they all have when they come to us

00:07:09 --> 00:07:14
they don't say hey I would love to have

00:07:12 --> 00:07:17
an llm that could like kind of answer

00:07:13 --> 00:07:18
anything under the sun you know they're

00:07:16 --> 00:07:19
saying hey this is what I want to do

00:07:17 --> 00:07:22
like I want to classify this particular

00:07:18 --> 00:07:24
uh you know uh defect in the

00:07:21 --> 00:07:26
manufacturing process from these

00:07:23 --> 00:07:28
pictures really well and there the

00:07:25 --> 00:07:30
accuracy matters like every ounce of

00:07:27 --> 00:07:31
accuracy that you can give me matters

00:07:29 --> 00:07:34
and there you're better off if you have

00:07:30 --> 00:07:35
a good data set to train you can train a

00:07:33 --> 00:07:37
smaller model

00:07:34 --> 00:07:39
the latency will be faster to use it

00:07:36 --> 00:07:40
later and it will be cheaper to use it

00:07:38 --> 00:07:43
later and yes you can have absolutely

00:07:39 --> 00:07:45
accuracy that beats the really large

00:07:42 --> 00:07:47
model but that very model that you built

00:07:44 --> 00:07:49
can't also Entertain You on the weekend

00:07:46 --> 00:07:51
right and answer physics question and

00:07:48 --> 00:07:53
help your kids do their homework why do

00:07:50 --> 00:07:54
you think it's important for you data

00:07:52 --> 00:07:57
bricks to build

00:07:53 --> 00:07:58
a very large model yeah look so the

00:07:56 --> 00:08:00
bigger models if you follow the scaling

00:07:57 --> 00:08:02
laws are more intelligent assuming you

00:07:59 --> 00:08:04
paid if if you're okay with paying the

00:08:01 --> 00:08:06
price and you're okay with you know you

00:08:03 --> 00:08:08
have the gpus and if you can crack the

00:08:05 --> 00:08:10
code on how to fine-tune the bigger

00:08:07 --> 00:08:11
model which is kind of the Holy Grail

00:08:09 --> 00:08:13
right now that everybody's looking at in

00:08:10 --> 00:08:15
the research community and in the field

00:08:12 --> 00:08:16
and the companies and all that and when

00:08:14 --> 00:08:20
you say fine tune kind of get more

00:08:15 --> 00:08:21
specific yeah so take an existing really

00:08:19 --> 00:08:25
awesome model that Foundation model that

00:08:20 --> 00:08:27
exists and just modify it a little bit

00:08:24 --> 00:08:29
o be able to become really good at some

00:08:26 --> 00:08:32
other tasks and there are many different

00:08:28 --> 00:08:34
echniques to use to do that but right

00:08:31 --> 00:08:36
now nobody has really cracked the code

00:08:33 --> 00:08:39
on how you can do that without modifying

00:08:35 --> 00:08:41
the whole model itself right which is

00:08:38 --> 00:08:42
pretty costly especially when you want

00:08:40 --> 00:08:44
o serve it when you want to use it

00:08:41 --> 00:08:45
later right you know you have to go

00:08:43 --> 00:08:46
through all the yeah if you have

00:08:44 --> 00:08:48
thousands if you made a thousand

00:08:45 --> 00:08:50
versions of it that's good a thousand

00:08:47 --> 00:08:52
ifferent things if you have to load all

00:08:49 --> 00:08:54
of each of those thousand into the gpus

00:08:51 --> 00:08:56
and you know serve them becomes very

00:08:53 --> 00:08:58
expensive the big I would say

00:08:55 --> 00:09:00
um Holy Grail right now that everybody's

00:08:57 --> 00:09:01
looking for is there are techniques

00:08:59 --> 00:09:04
where you can just do small

00:09:00 --> 00:09:05
modifications yeah where you can get

00:09:03 --> 00:09:08
really good results and you can just

00:09:04 --> 00:09:10
ack on a little bit of additional you

00:09:07 --> 00:09:11
know it's just that part of the brain

00:09:09 --> 00:09:13
too exactly just add this thing and

00:09:10 --> 00:09:15
there are lots of techniques there's

00:09:12 --> 00:09:17
like prefix tuning there's Laura Cube

00:09:14 --> 00:09:19
Laura so on and so forth uh juries out

00:09:16 --> 00:09:23
none of them really are slammed on it's

00:09:18 --> 00:09:26
awesome we found it but someone will

00:09:22 --> 00:09:28
once you have that then it seems in the

00:09:25 --> 00:09:29
future in a few years the ideal would be

00:09:27 --> 00:09:31
really big foundation model that's

00:09:28 --> 00:09:34
pretty smart and then you can like sort

00:09:30 --> 00:09:36
of stack on these kind of additional

00:09:33 --> 00:09:38
tuned sort of brains that are really

00:09:35 --> 00:09:40
good at this specific classification

00:09:37 --> 00:09:42
task for manufacturing errors and this

00:09:39 --> 00:09:43
other you know translation tasks and

00:09:41 --> 00:09:45
they'll be compute efficient and energy

00:09:42 --> 00:09:47
efficient for just dealing with that

00:09:44 --> 00:09:49
ask at that point exactly and then you

00:09:46 --> 00:09:52
could also you just you can load up your

00:09:48 --> 00:09:53
gpus with that one intelligent brain

00:09:51 --> 00:09:55
that one diet model and then you could

00:09:52 --> 00:09:57
specialize it yeah but to be clear no

00:09:54 --> 00:09:58
ne's really done this yet that's what I

00:09:56 --> 00:10:00
think a lot of people are hoping to do

00:09:57 --> 00:10:02
uh you know and it might not be easy to

00:09:59 --> 00:10:03
do that in the meanwhile we're having

00:10:01 --> 00:10:05
lots and lots of customers who want to

00:10:02 --> 00:10:07
have specialized models that are cheaper

00:10:04 --> 00:10:09
smaller and that have really high

00:10:06 --> 00:10:11
accuracy and performance on that task

00:10:08 --> 00:10:15
yes it's like I can just say it like at

00:10:10 --> 00:10:17
databricks so we bought Mosaic I did not

00:10:14 --> 00:10:19
unleash our sales force and go to market

00:10:16 --> 00:10:21
of 3000 people to sell the thing that we

00:10:18 --> 00:10:23
bought because we just can't satisfy the

00:10:20 --> 00:10:24
demand like there's not enough gpus so

00:10:22 --> 00:10:26
you won't even let all your guys sell it

00:10:23 --> 00:10:27
no I'm not even letting all the

00:10:25 --> 00:10:29
customers buy this thing because we

00:10:26 --> 00:10:30
don't have the gpus and we don't have if

00:10:28 --> 00:10:32
we unleash up every company wants to do

00:10:29 --> 00:10:34
this everyone wants to okay okay I have

00:10:31 --> 00:10:35
a thousand things I want to build can

00:10:33 --> 00:10:37
you help me do that in this context sort

00:10:34 --> 00:10:40
of how do you

00:10:36 --> 00:10:44
how much do you think these use cases

00:10:39 --> 00:10:46
will fragment in in that um so you

00:10:43 --> 00:10:48
talked about okay I wanted to be good at

00:10:45 --> 00:10:51
doing my kids homework I wanted to be my

00:10:47 --> 00:10:53
girlfriend so how much do you think the

00:10:50 --> 00:10:55
use cases

00:10:52 --> 00:10:57
the very specific use cases will

00:10:54 --> 00:10:59
fragment and kind of within that like

00:10:56 --> 00:11:01
one of the things that we're finding is

00:10:58 --> 00:11:04
getting the model to do what you want

00:11:00 --> 00:11:08
is kind of where the data Advantage is

00:11:03 --> 00:11:10
from the users and that if I wanted to

00:11:07 --> 00:11:13
draw me a certain kind of picture that's

00:11:09 --> 00:11:15
a lot of conversations to do that and so

00:11:12 --> 00:11:17
whoever is drawing those kinds of

00:11:14 --> 00:11:19
pictures will be good at that but then

00:11:16 --> 00:11:21
there may be another model that wants to

00:11:18 --> 00:11:24
draw memes but the thing that's drawing

00:11:21 --> 00:11:25
the pretty pictures can't draw the memes

00:11:23 --> 00:11:27
because that involves words and all this

00:11:24 --> 00:11:29
other stuff that it hasn't

00:11:26 --> 00:11:32
it just hasn't learned to get that out

00:11:28 --> 00:11:36
of the humans and map it into its model

00:11:31 --> 00:11:39
so how much do you think we're going to

00:11:35 --> 00:11:41
get tons of specialization versus no no

00:11:38 --> 00:11:44
nce the brain gets big enough and we do

00:11:40 --> 00:11:48
these fine tunings that's going to be it

00:11:43 --> 00:11:49
'll be like AWS gcp you know Azure I

00:11:47 --> 00:11:50
think the answer is closer to the latter

00:11:48 --> 00:11:52
there's going to have lots of

00:11:49 --> 00:11:54
specialization but having said that it's

00:11:51 --> 00:11:55
a little bit of it's not a dichotomy in

00:11:53 --> 00:11:57
the sense that maybe they're all using

00:11:54 --> 00:11:58
like some base models that are

00:11:56 --> 00:12:00
underneath common to many of them right

00:11:57 --> 00:12:02
you're not starting from scratch every

00:11:59 --> 00:12:04
time but you're tuning it up a certain

00:12:01 --> 00:12:06
way yeah look I think in some sense the

00:12:03 --> 00:12:07
industry like right now there's people

00:12:05 --> 00:12:09
are looking at the wrong thing

00:12:06 --> 00:12:12
right now it's a little bit like 2000

00:12:08 --> 00:12:13
and the internet is about to take over

00:12:11 --> 00:12:15
everything and everybody's super excited

00:12:12 --> 00:12:17
and there is one company called Cisco

00:12:14 --> 00:12:18
they build these routers yeah obviously

00:12:16 --> 00:12:19
that's like the biggest thing and the

00:12:17 --> 00:12:21
most important thing is whoever can

00:12:18 --> 00:12:23
build the best routers is going to

00:12:21 --> 00:12:25
dominate all of Internet forever yeah

00:12:22 --> 00:12:26
right it's like that's the thing the

00:12:24 --> 00:12:27
future of mankind is going to be

00:12:25 --> 00:12:29
determined by who builds the best

00:12:26 --> 00:12:31
routers and right now this company Cisco

00:12:28 --> 00:12:33
is the best one by far it's obvious what

00:12:30 --> 00:12:35
I'm saying Cisco in 2000 I think was

00:12:33 --> 00:12:37
worth one you know half a trillion

00:12:34 --> 00:12:38
dollars yeah at its peak and people were

00:12:36 --> 00:12:39
talking about it's going to be a

00:12:37 --> 00:12:41
trillion dollar company it was worth

00:12:38 --> 00:12:43
more than Microsoft so I think it's a

00:12:40 --> 00:12:45
little bit like right now like that who

00:12:42 --> 00:12:47
has the largest llm obviously whoever

00:12:44 --> 00:12:49
can build the largest one that can turn

00:12:46 --> 00:12:51
it the most obviously will own all of AI

00:12:48 --> 00:12:53
and all of future of humanity but just

00:12:50 --> 00:12:55
like the internet someone will show up

00:12:52 --> 00:12:56
later and think about Uber rides and cab

00:12:54 --> 00:12:58
driving and someone else showed up and

00:12:55 --> 00:13:01
thought about hey I want to check out my

00:12:57 --> 00:13:03
friends on you know on the Facebook and

00:13:00 --> 00:13:06
so on and those end up being huge

00:13:02 --> 00:13:08
businesses so there's these applications

00:13:05 --> 00:13:10
which many of them are obvious yes like

00:13:07 --> 00:13:12
you know Mark talked about it in his you

00:13:09 --> 00:13:14
know AI will save the world you know the

00:13:11 --> 00:13:16
lawyer uh you know the teacher they're

00:13:13 --> 00:13:17
like there's lots of use everybody knows

00:13:15 --> 00:13:18
uh

00:13:16 --> 00:13:20
probably there's going to be a lot of

00:13:17 --> 00:13:22
value in those yeah and no it's not just

00:13:19 --> 00:13:24
going to be one model that openai or

00:13:21 --> 00:13:26
databricks or anthropic or someone

00:13:23 --> 00:13:28
builds and that model will dominate all

00:13:25 --> 00:13:31
these use cases no it's the a lot of

00:13:27 --> 00:13:33
things will need to go into building

00:13:30 --> 00:13:35
the doctor that you trust that will be

00:13:32 --> 00:13:38
able to tell you you know how to cure

00:13:34 --> 00:13:39
you and your loved ones so I think that

00:13:37 --> 00:13:41
hose those are the companies that we

00:13:38 --> 00:13:42
will build in the future and I think

00:13:40 --> 00:13:43
there's going to be a lot of value in

00:13:41 --> 00:13:44
those obviously

00:13:42 --> 00:13:47
um and yeah there's a place for the

00:13:43 --> 00:13:48
Cisco router still for the llm and so on

00:13:46 --> 00:13:51
and Cisco still is a pretty valuable

00:13:48 --> 00:13:53
company yeah it's not bad uh but that's

00:13:50 --> 00:13:55
I think this is over Focus right now

00:13:52 --> 00:13:57
yeah interesting so then how do you

00:13:54 --> 00:13:59
think about

00:13:56 --> 00:14:01
um open source because a lot of the

00:13:58 --> 00:14:04
large model providers are literally

00:14:00 --> 00:14:06
going in and saying Stop open source now

00:14:03 --> 00:14:08
you've got to Outlaw it so how do you

00:14:05 --> 00:14:11
think about that why are they saying

00:14:07 --> 00:14:13
that do they have a legitimate gripe and

00:14:10 --> 00:14:15
then you know coming from data bricks

00:14:12 --> 00:14:17
perspective how are you how are you all

00:14:14 --> 00:14:19
thinking about open source with respect

00:14:16 --> 00:14:21
o Mosaic and then with the other you

00:14:18 --> 00:14:24
know things like llama if the original

00:14:20 --> 00:14:26
lama was never released what would the

00:14:23 --> 00:14:28
state of the world and our view of aib

00:14:25 --> 00:14:31
right now we would be way further behind

00:14:27 --> 00:14:33
right and a it was a big model uh you

00:14:30 --> 00:14:37
know by what what existed in open source

00:14:32 --> 00:14:38
and it was open sourced and both of

00:14:36 --> 00:14:40
those things completely changed

00:14:37 --> 00:14:42
everything that's happening in AI right

00:14:39 --> 00:14:43
now science kind of mattered and the

00:14:41 --> 00:14:46
fact that it was open source also kind

00:14:42 --> 00:14:47
of mattered this is going to continue it

00:14:45 --> 00:14:49
doesn't stop there it's going to

00:14:46 --> 00:14:51
continue it's also really hard to block

00:14:48 --> 00:14:53
any of this because like if you just

00:14:50 --> 00:14:55
check out the source code for llama it's

00:14:52 --> 00:14:57
like a couple Pages yeah but you have to

00:14:54 --> 00:14:59
have the weights too yeah but you know

00:14:56 --> 00:15:01
the weights leaked and people will lift

00:14:58 --> 00:15:02
he weights and they will get out and

00:15:00 --> 00:15:04
people will keep tuning them and there's

00:15:01 --> 00:15:05
ways to also you know distillation

00:15:03 --> 00:15:07
techniques where you can take the

00:15:04 --> 00:15:09
weights from a Candlestick output of a

00:15:06 --> 00:15:11
model and train smaller ones and train

00:15:08 --> 00:15:13
other ones and so on so people are going

00:15:10 --> 00:15:15
to continue pushing the boundary of this

00:15:12 --> 00:15:17
o I think open source will continue to

00:15:14 --> 00:15:18
do better and better and better and I

00:15:16 --> 00:15:20
think more and more techniques because

00:15:17 --> 00:15:21
they're scarcity they don't have gpus

00:15:19 --> 00:15:23
they'll come up with techniques in which

00:15:20 --> 00:15:26
they can do things more efficiently like

00:15:22 --> 00:15:28
the fast Transformer and so on uh at the

00:15:25 --> 00:15:30
same time I also think that anyone that

00:15:27 --> 00:15:32
rains a really gigantic model that's

00:15:29 --> 00:15:34
really really good

00:15:31 --> 00:15:36
typically will not have the incentive to

00:15:33 --> 00:15:38
release it so it's the usual thing we

00:15:35 --> 00:15:39
see that open source kind of lags the

00:15:37 --> 00:15:41
proprietary ones and the proprietary

00:15:38 --> 00:15:44
thing is way ahead and it's way better

00:15:40 --> 00:15:47
and in some rare cases like Linux and so

00:15:43 --> 00:15:48
n it bypasses you know and in that case

00:15:46 --> 00:15:51
that would be game changing and will

00:15:47 --> 00:15:52
that happen uh it's hard to predict that

00:15:50 --> 00:15:54
right now it just seems that you need a

00:15:51 --> 00:15:56
lot of gpus to do this and how about

00:15:53 --> 00:15:58
when gpus become abundant yeah GPS

00:15:55 --> 00:16:02
that's going to happen I mean

00:15:57 --> 00:16:05
gpus become abundant or certain tweaks

00:16:01 --> 00:16:06
to the Transformer that lets you train

00:16:04 --> 00:16:08
that Higher Learning rate and you know

00:16:05 --> 00:16:09
have less issues with it so like you

00:16:07 --> 00:16:11
know that's right because they're super

00:16:08 --> 00:16:13
inefficient now like it could be more

00:16:10 --> 00:16:14
inefficient yes and so then there will

00:16:12 --> 00:16:16
be some engineering they will be

00:16:13 --> 00:16:17
released and the universities are just

00:16:15 --> 00:16:19
chomping at the bit right because what

00:16:16 --> 00:16:20
has happened right now is that the

00:16:18 --> 00:16:22
universities kind of feel a little bit

00:16:19 --> 00:16:23
hat they're aced out they're not really

00:16:21 --> 00:16:25
even in the game anymore right look this

00:16:22 --> 00:16:27
was my game I was playing it I was

00:16:24 --> 00:16:28
imagine and now you threw me out yeah

00:16:26 --> 00:16:30
and I can't even participate because I

00:16:27 --> 00:16:32
don't have gpus I don't have the funding

00:16:29 --> 00:16:34
the universities are having a huge sort

00:16:31 --> 00:16:36
of Crisis internally with the research

00:16:33 --> 00:16:37
it's like I see you hired all my guys

00:16:35 --> 00:16:39
yeah I don't think so I know but their

00:16:36 --> 00:16:41
guys are leaving and the girls are

00:16:38 --> 00:16:42
leaving because yeah they want to work

00:16:40 --> 00:16:43
close where they can train the models

00:16:41 --> 00:16:45
and do this kind of stuff and where the

00:16:42 --> 00:16:46
data is and at the University there's

00:16:44 --> 00:16:47
none of this so then what are the

00:16:45 --> 00:16:49
universities doing they're of course

00:16:46 --> 00:16:50
looking at okay how could we crack the

00:16:48 --> 00:16:53
code on this how could we make it much

00:16:49 --> 00:16:54
easier cheaper and how can we release it

00:16:52 --> 00:16:57
so there's going to be Innovation there

00:16:53 --> 00:16:59
so I think this this sort of uh race

00:16:56 --> 00:17:01
will continue between open source and

00:16:58 --> 00:17:03
proprietary and eventually open source

00:17:00 --> 00:17:04
kind of catches up so you know I think

00:17:02 --> 00:17:05
it's going to be diminishing returns I

00:17:03 --> 00:17:07
think we're going to hit walls with

00:17:04 --> 00:17:09
scaling balls and you just move down

00:17:06 --> 00:17:12
those go you know you go to the right on

00:17:08 --> 00:17:13
the x-axis and you know and you you move

00:17:11 --> 00:17:15
the pair to curve to the right and

00:17:12 --> 00:17:17
eventually you get the AGI yeah and it's

00:17:14 --> 00:17:19
just happening it's guaranteed you know

00:17:16 --> 00:17:21
it's gonna happen uh I think we're going

00:17:18 --> 00:17:23
to hit the machine Returns on walls that

00:17:20 --> 00:17:26
kind of So You Think You you think we'll

00:17:22 --> 00:17:27
get stuck before we get to AGI in a

00:17:25 --> 00:17:28
fundamental we'll need an actual

00:17:26 --> 00:17:31
breakthrough as opposed to just more

00:17:27 --> 00:17:32
size that and I also think that almost

00:17:30 --> 00:17:35
in all the use cases where you seriously

00:17:31 --> 00:17:36
try to use this like for medicine or for

00:17:34 --> 00:17:39
like anything where you really for

00:17:35 --> 00:17:41
lawyers and so on it quickly becomes

00:17:38 --> 00:17:43
clear that you didn't you need a human

00:17:40 --> 00:17:44
in the loop you need to augment it with

00:17:42 --> 00:17:45
e human lip there's no way you can

00:17:43 --> 00:17:48
just let this thing loose right now it's

00:17:44 --> 00:17:49
tupid it does mistakes and so on and

00:17:47 --> 00:17:51
maybe that can get better and better and

00:17:48 --> 00:17:53
better but it does better on the medical

00:17:50 --> 00:17:54
exams than like doctors do this is a

00:17:52 --> 00:17:57
funny thing I kind of think all the

00:17:53 --> 00:18:00
benchmarks are and so all these

00:17:56 --> 00:18:01
so all the llm benchmarks here's how it

00:17:59 --> 00:18:03
works yeah imagine in all our

00:18:00 --> 00:18:05
universities we said we're going to give

00:18:02 --> 00:18:07
you the exam the night before

00:18:04 --> 00:18:08
okay and you can look at the answers and

00:18:06 --> 00:18:10
then the next day we're going to bring

00:18:07 --> 00:18:12
you in and you answer them and then

00:18:09 --> 00:18:14
we'll score you know how you did yeah

00:18:11 --> 00:18:16
suddenly everybody would like be acing

00:18:13 --> 00:18:19
their exams too right yeah like for

00:18:15 --> 00:18:22
instance mmlu is what a lot of people uh

00:18:18 --> 00:18:24
you know benchmark these models on mmlu

00:18:21 --> 00:18:25
is just a multi-choice question that's

00:18:23 --> 00:18:28
on the web

00:18:24 --> 00:18:29
ask a question here's is the answer ABCD

00:18:27 --> 00:18:31
and then it says what the right answer

00:18:28 --> 00:18:33
is yeah and it's on the web you can

00:18:30 --> 00:18:35
deliberately train on it and create an

00:18:32 --> 00:18:38
llm that crushes it on that all right

00:18:34 --> 00:18:40
okay or you can inadvertently by mistake

00:18:37 --> 00:18:42
in the pile or whatever you used to

00:18:39 --> 00:18:43
train your model happen to see some of

00:18:41 --> 00:18:45
those questions that happen to be

00:18:42 --> 00:18:48
lsewhere so the benchmarks are a little

00:18:44 --> 00:18:49
bit BS uh well there there are

00:18:47 --> 00:18:51
benchmarks for taking the tests but

00:18:48 --> 00:18:54
presumably the test correlates with

00:18:50 --> 00:18:56
being able to make a medical diagnosis a

00:18:53 --> 00:18:59
decision uh yeah but they memorized all

00:18:55 --> 00:19:01
these you know the memories yes yes you

00:18:58 --> 00:19:03
know so but like that there's not

00:19:00 --> 00:19:05
here's no transfer learning from the

00:19:02 --> 00:19:06
memorizing the exam to actually

00:19:04 --> 00:19:08
diagnosing no one really knows the

00:19:05 --> 00:19:10
answer for this everybody's playing the

00:19:07 --> 00:19:12
benchmarking game this way right now uh

00:19:09 --> 00:19:13
yeah I would love it if you know a whole

00:19:11 --> 00:19:15
bunch of researchers that's like the old

00:19:12 --> 00:19:17
fake database benchmarks when it's like

00:19:14 --> 00:19:19
look how fast their database is but it's

00:19:16 --> 00:19:20
only good at the actual Benchmark yeah I

00:19:18 --> 00:19:21
would love it if there was like a bunch

00:19:19 --> 00:19:22
of doctors that get together and come up

00:19:20 --> 00:19:24
with a benchmark that's super secretive

00:19:21 --> 00:19:25
and they don't show it to you and you

00:19:23 --> 00:19:27
give their model your model to them and

00:19:24 --> 00:19:28
they'll run their questions on that

00:19:26 --> 00:19:29
and then they'll come back and tell you

00:19:27 --> 00:19:31
how you scored but that's not how it

00:19:28 --> 00:19:33
works right now so then let me go to the

00:19:30 --> 00:19:36
question that you dodged which is okay

00:19:33 --> 00:19:41
what are the ethics of

00:19:35 --> 00:19:45
the large models versus open source

00:19:40 --> 00:19:48
um or just in general like what is the

00:19:44 --> 00:19:51
responsibility how big is the threat

00:19:47 --> 00:19:52
is open source an ethical threat yeah

00:19:50 --> 00:19:53
look I don't have all the answers

00:19:51 --> 00:19:55
there's like different categories

00:19:52 --> 00:19:57
there's like the jobs are going to go

00:19:54 --> 00:19:59
away kind of category we've been doing

00:19:56 --> 00:20:01
that for 300 years and the Nations that

00:19:58 --> 00:20:03
are doing the best highest GDP they're

00:20:00 --> 00:20:04
the ones that automated the most and the

00:20:02 --> 00:20:05
ones that weren't able and they have the

00:20:03 --> 00:20:07
most jobs and the highest so that's

00:20:04 --> 00:20:09
happening anyway there are ways to deal

00:20:06 --> 00:20:10
with that problem yeah uh and the ways

00:20:08 --> 00:20:13
to deal with it is not to just stop all

00:20:09 --> 00:20:14
progress that's stupid uh you know the

00:20:12 --> 00:20:16
Nations that win are the ones that are

00:20:13 --> 00:20:19
doing well on automation not just AI in

00:20:15 --> 00:20:20
general efficiency improvements right

00:20:18 --> 00:20:23
just like

00:20:19 --> 00:20:25
conomics is about efficiency so anyway

00:20:22 --> 00:20:27
so that's like that category then

00:20:24 --> 00:20:28
there's like bad things that humans can

00:20:26 --> 00:20:29
do deliberately because they're

00:20:27 --> 00:20:31
malicious which is the one I think Mark

00:20:28 --> 00:20:34
was the most worried about but I would

00:20:30 --> 00:20:36
just say look ever since like the

00:20:33 --> 00:20:38
invention of the hammer yeah we started

00:20:35 --> 00:20:41
misusing technology that you know in a

00:20:37 --> 00:20:42
bad way yeah you know like so that's

00:20:40 --> 00:20:45
good yeah when you have a hammer your

00:20:41 --> 00:20:48
head looks like a nail exactly

00:20:44 --> 00:20:50
right so that's that's happening all the

00:20:47 --> 00:20:52
time with every technological

00:20:49 --> 00:20:53
Improvement especially internet so the

00:20:51 --> 00:20:55
really big question that I think kind of

00:20:52 --> 00:20:57
like Mark a little bit maybe dodged in

00:20:54 --> 00:20:58
his essay which is are we going to get

00:20:56 --> 00:21:02
his

00:20:57 --> 00:21:04
uper AGI that decides to destroy us

00:21:01 --> 00:21:06
and I don't know the side part is the

00:21:03 --> 00:21:08
part where I get a little lost right

00:21:05 --> 00:21:11
because

00:21:07 --> 00:21:15
like Free Will is not something we're on

00:21:10 --> 00:21:18
the path for yeah for machines yeah like

00:21:14 --> 00:21:20
well a machine doing many many many

00:21:17 --> 00:21:21
computations yeah which you know we

00:21:19 --> 00:21:24
never have machines do this many

00:21:20 --> 00:21:26
computations in the history of humanity

00:21:23 --> 00:21:30
like that

00:21:25 --> 00:21:32
is amazing but it's very different than

00:21:29 --> 00:21:34
like no llm has ever decided to do

00:21:31 --> 00:21:35
anything yeah like that's not what they

00:21:33 --> 00:21:38
do

00:21:34 --> 00:21:41
um and so it does seem like

00:21:37 --> 00:21:43
okay now they've got free will maybe

00:21:40 --> 00:21:44
they don't have free will yeah you know

00:21:42 --> 00:21:45
maybe you're just in my way and I need

00:21:43 --> 00:21:46
to kill you all right it's like and

00:21:44 --> 00:21:48
that's just what I'm gonna do

00:21:45 --> 00:21:49
unemotionally without any I don't even

00:21:47 --> 00:21:51
reason I don't have Consciousness or

00:21:48 --> 00:21:54
anything it's just I'm just doing the

00:21:50 --> 00:21:56
paper clip yeah kind of so I I do think

00:21:53 --> 00:21:59
like those hypotheticals if you had

00:21:55 --> 00:22:00
something this is a big if yeah if you

00:21:58 --> 00:22:02
have that thing that has that level of

00:21:59 --> 00:22:04
intelligence and can control things and

00:22:01 --> 00:22:05
so on then I do think that's a big risk

00:22:03 --> 00:22:08
I just don't think that's going to

00:22:04 --> 00:22:10
happen very soon here's why uh there's

00:22:07 --> 00:22:12
everal things that people are kind of

00:22:09 --> 00:22:13
not looking at so I don't agree with

00:22:11 --> 00:22:15
like Mark when he said oh it's just like

00:22:12 --> 00:22:17
a toaster it's just like your toaster

00:22:14 --> 00:22:18
will not decide to kill you nor that I

00:22:16 --> 00:22:20
don't believe that that's not true if

00:22:17 --> 00:22:22
this this thing is pretty smart it has

00:22:19 --> 00:22:25
reasoning capability if you connect it

00:22:21 --> 00:22:27
o robots and give it a bunch of like it

00:22:24 --> 00:22:29
can start doing and let it run free with

00:22:26 --> 00:22:31
no safeties Run free and say go do it

00:22:28 --> 00:22:32
hen it can do a lot of damage the

00:22:30 --> 00:22:34
reason I'm not too worried about the

00:22:31 --> 00:22:39
scenario is the following one is it's

00:22:33 --> 00:22:41
very costly and very expensive and hard

00:22:38 --> 00:22:43
to get your hands on you know gpus and

00:22:40 --> 00:22:45
have the money to train a new model if

00:22:42 --> 00:22:47
that comes down and that takes like 10

00:22:44 --> 00:22:49
minutes to train a new model that's as

00:22:46 --> 00:22:50
good as the largest best models that we

00:22:48 --> 00:22:52
have

00:22:49 --> 00:22:55
then we're kind of right because

00:22:51 --> 00:22:57
then some will say Auto GPT

00:22:54 --> 00:22:59
connected write a bunch of versions of

00:22:56 --> 00:23:00
yourself just try it out in parallel do

00:22:58 --> 00:23:01
a million of these in parallel and then

00:22:59 --> 00:23:03
figure out if you get smarter and

00:23:00 --> 00:23:05
smarter and just do this

00:23:02 --> 00:23:07
and then before you know it after maybe

00:23:04 --> 00:23:08
let's call it 12 months we find a

00:23:06 --> 00:23:10
slightly better version of the

00:23:07 --> 00:23:12
Transformer that is a little bit more

00:23:09 --> 00:23:14
fficient now that 10 minutes goes to

00:23:11 --> 00:23:15
like two minutes and then you're like on

00:23:13 --> 00:23:18
this race and then eventually you'll get

00:23:14 --> 00:23:20
into this Loop working Creator itself

00:23:17 --> 00:23:22
but right now it's extremely expensive

00:23:19 --> 00:23:24
and really hard to train a new large

00:23:21 --> 00:23:26
giant model much harder than actually

00:23:23 --> 00:23:27
just asking questions from it unlike the

00:23:25 --> 00:23:30
human brain where I can memorize new

00:23:26 --> 00:23:31
things and update my brain quickly and I

00:23:29 --> 00:23:33
can also so just read things from my

00:23:30 --> 00:23:36
memory and tell you things right now

00:23:32 --> 00:23:38
it's huge asymmetry secondly we really

00:23:35 --> 00:23:40
haven't cracked the code on machines

00:23:37 --> 00:23:42
reproducing themselves biologically kind

00:23:39 --> 00:23:44
of like humans they're like so

00:23:41 --> 00:23:47
reproduction is not in the in the game

00:23:43 --> 00:23:49
yet so once you have reproduction and

00:23:46 --> 00:23:52
you know the building of new ones

00:23:48 --> 00:23:53
automatically once you crack the code on

00:23:51 --> 00:23:56
that Loop yes then I think we're

00:23:52 --> 00:23:58
but we're very far away from that like

00:23:55 --> 00:24:00
nobody's really doing that right

00:23:57 --> 00:24:01
you're just moving the scaling laws and

00:23:59 --> 00:24:03
getting these things to be better and

00:24:00 --> 00:24:06
better at reasoning yeah doesn't solve

00:24:02 --> 00:24:08
the problems that I mentioned uh so

00:24:05 --> 00:24:10
that's I think what's kind of uh saving

00:24:07 --> 00:24:12
us right now uh you know that's that's

00:24:09 --> 00:24:13
my belief all right well on that happy

00:24:11 --> 00:24:16
note

00:24:12 --> 00:24:17
well conclude I'd like to thank Ali for

00:24:15 --> 00:24:19
joining us today

00:24:16 --> 00:24:22
[Applause]

00:24:18 --> 00:24:22
foreign

00:24:21 --> 00:24:28
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
