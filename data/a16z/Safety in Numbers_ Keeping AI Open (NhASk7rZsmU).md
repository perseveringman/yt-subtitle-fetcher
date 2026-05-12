---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "NhASk7rZsmU"
title: "Safety in Numbers: Keeping AI Open"
video_url: "https://www.youtube.com/watch?v=NhASk7rZsmU"
thumbnail_url: "https://i.ytimg.com/vi/NhASk7rZsmU/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=NhASk7rZsmU"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2023-12-28T15:15:01.000Z"
upload_date: "2023-12-28"
duration_seconds: 2343
duration_human: "39:03"
view_count: 7437
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T13:20:22.390Z"
---

# Safety in Numbers: Keeping AI Open

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=NhASk7rZsmU
- video_id: NhASk7rZsmU
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2023-12-28T15:15:01.000Z
- upload_date: 2023-12-28
- duration: 39:03
- view_count: 7437
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Arthur Mensch, co-founder of Mistral and co-author of Deepmind's 2022 "Chinchilla" paper, recently released Mistral-7B, a popular open-source language model.

Their latest offering, Mixtral, a mixture of experts model, is attracting attention in the AI community. Join Arthur and a16z General Partner Anjney Midha in a discussion about the nuances of open source, the comparative performance of open and closed models, and the innovations needed for scaling large language models (LLMs) effectively.

Topics covered:
00:00 - Introduction to scaling laws and their impact
02:14  - Arthur Mensch and the Founding of Mistral
07:57 - Mistral 7b and the launch of Mixtral
13:27 - Misconceptions about open source, the state of open vs. closed models, and future requirements for scaling LLMs
18:41 - Open Source in AI: Scaling laws, Industry Impact, data efficiency, and new model architectures
22:56 - Safety concerns of open source models.
25:17 - Recommendations for policymakers in regulating AI technologies.
33:17 - Predictions on how advancements in LLMs will change user interactions with technology
36:36 - Potential applications in various fields like gaming and enterprise.
38:53 - Call to action for builders, researchers, and developers

Resources: 
Find Arthur on Twitter: https://twitter.com/arthurmensch
Find Anjney on Twitter: https://twitter.com/AnjneyMidha
Learn more about Mistral: https://mistral.ai

Stay Updated: 
Find a16z on Twitter: https://twitter.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Subscribe on your favorite podcast app: https://a16z.simplecast.com/ 
Follow our host: https://twitter.com/stephsmithio 

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
scaling laws now these underpin the

00:00:02 --> 00:00:08
success of large language models today

00:00:05 --> 00:00:11
but the relationship between data sets

00:00:07 --> 00:00:14
compute and the number of parameters was

00:00:10 --> 00:00:16
not always clear in fact in 2022 a

00:00:13 --> 00:00:17
pivotal paper came out that changed the

00:00:15 --> 00:00:19
way that many people in the research

00:00:16 --> 00:00:21
Community thought about this very

00:00:18 --> 00:00:23
calculus and it demonstrated that data

00:00:20 --> 00:00:25
sets were actually more important than

00:00:22 --> 00:00:28
just the sheer size of the model one of

00:00:25 --> 00:00:31
the key authors of this paper was Arthur

00:00:27 --> 00:00:33
MCH who was working at Deep Mind at time

00:00:30 --> 00:00:35
now earlier this year Arthur banded

00:00:32 --> 00:00:38
together with two other researchers yam

00:00:34 --> 00:00:41
Lampo and timate laqua two researchers

00:00:38 --> 00:00:43
at meta who worked on llama and together

00:00:40 --> 00:00:46
the three of them founded a new company

00:00:42 --> 00:00:48
mrol that team has been hard at work

00:00:45 --> 00:00:51
releasing mrol 7B in September a

00:00:47 --> 00:00:53
state-of-the-art open source model that

00:00:50 --> 00:00:55
quickly became the go-to for developers

00:00:52 --> 00:00:59
and they just released as in in the last

00:00:55 --> 00:01:01
few days a new mixture of experts model

00:00:58 --> 00:01:03
that naturally they're calling mixt

00:01:00 --> 00:01:05
so today you'll get to hear directly

00:01:02 --> 00:01:08
from Arthur as he sits down with a16z

00:01:05 --> 00:01:10
General partner Anan maida as the

00:01:07 --> 00:01:12
Battleground for large language models

00:01:09 --> 00:01:14
heats up to say the least together they

00:01:11 --> 00:01:16
discussed the many misconceptions around

00:01:13 --> 00:01:18
open source and the war being waged on

00:01:15 --> 00:01:20
the industry plus the current

00:01:17 --> 00:01:22
performance reality of open versus

00:01:19 --> 00:01:25
closed models and whether that Gap will

00:01:21 --> 00:01:27
realistically close with time plus the

00:01:24 --> 00:01:29
kind of compute data and algorithmic

00:01:26 --> 00:01:31
Innovations required to keep scaling

00:01:28 --> 00:01:33
llms efficiently

00:01:30 --> 00:01:35
now it's really rare to have someone at

00:01:32 --> 00:01:37
he frontier of this kind of research be

00:01:34 --> 00:01:39
so candid about what they're building

00:01:36 --> 00:01:42
and why so I hope that you come out of

00:01:38 --> 00:01:44
this episode as excited about the future

00:01:41 --> 00:01:47
of Open Source as I did

00:01:43 --> 00:01:49
enjoy as a reminder the content here is

00:01:46 --> 00:01:51
for informational purposes only should

00:01:48 --> 00:01:53
not be taken as legal business tax or

00:01:50 --> 00:01:55
investment advice or be used to evaluate

00:01:52 --> 00:01:57
any investment or security and is not

00:01:54 --> 00:02:01
directed at any investors or potential

00:01:56 --> 00:02:03
investors in any a6c fund please note

00:02:00 --> 00:02:04
that a16z and its Affiliates may also

00:02:02 --> 00:02:07
maintain investments in the companies

00:02:03 --> 00:02:08
discussed in this podcast for more

00:02:06 --> 00:02:11
details including a link to our

00:02:07 --> 00:02:14
investments please see

00:02:10 --> 00:02:14
az.com

00:02:14 --> 00:02:18
disclosures you've got uh quite the

00:02:16 --> 00:02:21
founding team story you know we

00:02:17 --> 00:02:23
flashback to a few years ago labs are

00:02:20 --> 00:02:25
building Foundation models and the

00:02:22 --> 00:02:27
consensus across the research Community

00:02:24 --> 00:02:30
was that the size of these models was

00:02:26 --> 00:02:33
What mattered most you know how many

00:02:29 --> 00:02:35
million billion parameters went into the

00:02:32 --> 00:02:37
model seemed to be the primary debate

00:02:34 --> 00:02:39
that people are having but it seems like

00:02:36 --> 00:02:40
you had a hunch that data sets mattered

00:02:38 --> 00:02:42
more could you just give us the

00:02:40 --> 00:02:44
backstory on the chinchilla paper you

00:02:41 --> 00:02:46
co-wrote you know what were the key

00:02:43 --> 00:02:48
takeaways on the paper and how was it

00:02:45 --> 00:02:52
received yeah so I guess the backstory

00:02:47 --> 00:02:55
is that uh 2019 2020 people were relying

00:02:51 --> 00:02:57
a lot on um on a paper called scaling

00:02:54 --> 00:03:00
lows for large language models that was

00:02:56 --> 00:03:02
advocating for uh basically scaling

00:02:59 --> 00:03:04
infinitely the size of models and

00:03:01 --> 00:03:07
keeping so number of data points uh

00:03:03 --> 00:03:08
rather fixed so do saying that if you

00:03:06 --> 00:03:11
had like four times the amount of

00:03:07 --> 00:03:14
compute you should be mostly multiplying

00:03:10 --> 00:03:17
by 3.5 your model size and then maybe by

00:03:13 --> 00:03:19
1.2 uh and so a lot of work was actually

00:03:16 --> 00:03:22
done on top of that so in particular at

00:03:18 --> 00:03:24
Deep mine when I joined uh I I joined a

00:03:21 --> 00:03:26
project called gopher and and that's a

00:03:23 --> 00:03:29
there was a misconception there there

00:03:25 --> 00:03:32
was also a misconception on gpt3 and

00:03:28 --> 00:03:36
basically in 2021 every paper uh made

00:03:31 --> 00:03:37
this mistake and at the end of 2021 we

00:03:35 --> 00:03:39
started to realize there were some

00:03:36 --> 00:03:42
issues and as it turns out we turned

00:03:38 --> 00:03:44
back to to the mathematical paper that

00:03:41 --> 00:03:46
was actually talking about scaling lows

00:03:43 --> 00:03:48
and it was a bit hard to understand and

00:03:45 --> 00:03:50
we figured out that actually if you

00:03:47 --> 00:03:52
thought about it bit more in a

00:03:49 --> 00:03:54
theoretical perspective and if you

00:03:51 --> 00:03:57
looked at like empirical evidence we had

00:03:54 --> 00:03:59
um it didn't really make sense uh to

00:03:56 --> 00:04:01
actually grow the model size faster than

00:03:58 --> 00:04:03
the data size

00:04:00 --> 00:04:06
and we did some measurement and as it

00:04:02 --> 00:04:09
urned out what was actually true was

00:04:05 --> 00:04:12
actually what we expect which is in

00:04:09 --> 00:04:14
common words if you multiply by four uh

00:04:11 --> 00:04:16
your compute capacity you should

00:04:13 --> 00:04:18
multiply by two the model size and by

00:04:15 --> 00:04:20
two the data size that's approximately

00:04:17 --> 00:04:21
what you should be doing which is good

00:04:19 --> 00:04:23
because if you move everything to

00:04:20 --> 00:04:24
Infinity everything remains consistent

00:04:22 --> 00:04:26
so you don't have a model which is

00:04:23 --> 00:04:28
infinity big or a model which is

00:04:25 --> 00:04:30
infinity small with infinite compression

00:04:27 --> 00:04:32
or like close to zero compression so it

00:04:29 --> 00:04:33
really makes sense and as it sounds out

00:04:31 --> 00:04:36
it's really what You observe if you look

00:04:32 --> 00:04:39
at uh if you do multiple runs and and so

00:04:35 --> 00:04:41
that's how we we train chinchila and and

00:04:38 --> 00:04:43
that's how we wrote the chinchila paper

00:04:40 --> 00:04:46
at the time you know you were at Deep

00:04:42 --> 00:04:48
mind and your co-founders were at meta

00:04:45 --> 00:04:50
what's the backstory around how you

00:04:47 --> 00:04:53
three end up coming together to form

00:04:49 --> 00:04:55
rol after the compute optimal skating

00:04:52 --> 00:04:56
laws work that you just described so

00:04:54 --> 00:04:58
we've known each other for a while

00:04:55 --> 00:05:00
because Gom and I were in school

00:04:57 --> 00:05:02
together and timoth and I were in master

00:04:59 --> 00:05:05
together in Paris basically we had like

00:05:01 --> 00:05:07
very parallel careers Timo and I we

00:05:04 --> 00:05:10
actually work together as well again

00:05:06 --> 00:05:12
when I was doing a post talk um in

00:05:09 --> 00:05:17
mathematics uh and then I joined deep

00:05:11 --> 00:05:20
mine as Gan timot uh went to become

00:05:16 --> 00:05:22
permanent researchers at meta uh and so

00:05:19 --> 00:05:24
we continued doing this I was doing

00:05:21 --> 00:05:27
large language models in between 2020

00:05:23 --> 00:05:31
and 2023 Gom and timote were working on

00:05:26 --> 00:05:35
um solving U mathematical uh problems

00:05:30 --> 00:05:36
with large langage models and if I

00:05:34 --> 00:05:38
understand correctly I wasn't there but

00:05:35 --> 00:05:39
hey realized they had to have stronger

00:05:37 --> 00:05:42
models and they started to do large

00:05:38 --> 00:05:45
language models at this point uh so like

00:05:41 --> 00:05:47
I guess a year after I started uh and on

00:05:45 --> 00:05:50
my side I was mostly working on a small

00:05:47 --> 00:05:53
team at uh Deep Mind so we did very

00:05:49 --> 00:05:54
interesting work on uh we retro which is

00:05:52 --> 00:05:57
a paper doing retrieval for large

00:05:53 --> 00:06:00
language models we did the chinchila

00:05:56 --> 00:06:02
then uh we I I was in the team doing

00:05:59 --> 00:06:03
Flamingo which is actually one one of

00:06:01 --> 00:06:07
the good way of doing a model that can

00:06:02 --> 00:06:09
see things I guess when chbt went out we

00:06:06 --> 00:06:11
knew I mean we knew from before that the

00:06:08 --> 00:06:14
technology was very very much

00:06:10 --> 00:06:16
gamechanging but it was kind of a signal

00:06:13 --> 00:06:19
that there was a strong opportunity for

00:06:15 --> 00:06:20
building a small team uh focusing uh on

00:06:18 --> 00:06:22
a different way of Distributing the

00:06:19 --> 00:06:25
technology so redoing things in a more

00:06:21 --> 00:06:27
open source manner uh which was not the

00:06:24 --> 00:06:29
direction what that Google at least was

00:06:26 --> 00:06:32
taking and and so we had this

00:06:28 --> 00:06:35
opportunity then we left the company uh

00:06:31 --> 00:06:37
at the beginning of last year and and

00:06:34 --> 00:06:39
created the team that started to work on

00:06:36 --> 00:06:42
the 5th of June and if I recall

00:06:38 --> 00:06:45
correctly right before they left Tim and

00:06:41 --> 00:06:47
guom had started to work on llama right

00:06:44 --> 00:06:49
over at meta could you just describe

00:06:46 --> 00:06:51
that project and how it was related to

00:06:48 --> 00:06:55
the chinchilla scaling laws work You'

00:06:50 --> 00:06:57
done so Lama was uh like a small team

00:06:54 --> 00:06:58
reproduction of chinchila at least in

00:06:56 --> 00:07:01
the in its approach of the

00:06:57 --> 00:07:03
parameterization and all of these things

00:07:00 --> 00:07:05
uh it was uh one of the first papers

00:07:02 --> 00:07:07
that established that you could go

00:07:04 --> 00:07:09
beyond the chinchila scaling lows so

00:07:06 --> 00:07:11
chinchila scaling lows tell you what you

00:07:08 --> 00:07:13
should be training if you want to have

00:07:10 --> 00:07:16
an optimal model uh for a certain

00:07:12 --> 00:07:17
compute cost at training time but if you

00:07:15 --> 00:07:19
take into account the fact that your

00:07:16 --> 00:07:21
model should also be efficient at

00:07:18 --> 00:07:24
inference time you probably want to go

00:07:20 --> 00:07:27
far beyond the chinula scaling low so it

00:07:23 --> 00:07:29
means you want to overtrain the model so

00:07:26 --> 00:07:31
train on more tokens than would be

00:07:28 --> 00:07:32
optimal for performance

00:07:30 --> 00:07:34
but the reason why you do that is that

00:07:31 --> 00:07:36
you actually compress models more and

00:07:33 --> 00:07:38
then when you do inference you end up

00:07:35 --> 00:07:40
having a model which is much more

00:07:37 --> 00:07:42
fficient uh for a certain performance

00:07:39 --> 00:07:44
so by spending more time during training

00:07:42 --> 00:07:47
you spend less time during inference and

00:07:43 --> 00:07:49
so you save cost and I think uh that was

00:07:46 --> 00:07:53
omething we well I guess we observed

00:07:48 --> 00:07:54
that at Google also but uh the Lama

00:07:52 --> 00:07:56
paper was the first to establish it in

00:07:53 --> 00:07:59
the open and it opened a lot of

00:07:55 --> 00:08:01
opportunities yep I remember you know

00:07:58 --> 00:08:04
the both the impact of the chinchilla

00:08:00 --> 00:08:06
scaling laws work on the labs on on

00:08:03 --> 00:08:10
multiple Labs realizing just how

00:08:05 --> 00:08:12
unoptimal the the compute setups were

00:08:09 --> 00:08:14
right um and then the impact of llama

00:08:11 --> 00:08:17
being dramatic on the industry and

00:08:13 --> 00:08:19
realizing how to be much more efficient

00:08:16 --> 00:08:21
about inference time so I can imagine

00:08:18 --> 00:08:23
that those were some of the the top

00:08:20 --> 00:08:25
insights on your mind and the top

00:08:22 --> 00:08:29
concerns on your mind when you guys left

00:08:24 --> 00:08:32
uh to start mistol so let's fast forward

00:08:28 --> 00:08:34
to to today you know it's December 2023

00:08:31 --> 00:08:36
we'll get to the role of Open Source in

00:08:33 --> 00:08:38
a bit but let's just level set on what

00:08:35 --> 00:08:41
you've built so far you know a couple

00:08:37 --> 00:08:44
months ago You released mistol 7B which

00:08:40 --> 00:08:46
was a best-in-class model um and this

00:08:43 --> 00:08:49
week you're releasing a new mixture of

00:08:45 --> 00:08:51
experts model so just tell us a little

00:08:48 --> 00:08:53
bit more about mixol I believe is what

00:08:50 --> 00:08:53
you're calling it and how it compares to

00:08:52 --> 00:08:56
ther

00:08:52 --> 00:08:58
models yeah so mix is our new model that

00:08:55 --> 00:09:00
wasn't released in Open Source before in

00:08:57 --> 00:09:02
a in a usable form uh so it's a

00:09:00 --> 00:09:04
technology called sparse mixture of

00:09:01 --> 00:09:06
experts uh which is quite simple you

00:09:03 --> 00:09:08
take all of the dense layers of your

00:09:05 --> 00:09:11
Transformer and you duplicate them you

00:09:07 --> 00:09:13
call these layers expert layers and then

00:09:10 --> 00:09:15
what you do is that for each exp for

00:09:12 --> 00:09:17
each token that you have in your

00:09:14 --> 00:09:21
sequence uh you have a router mechanism

00:09:16 --> 00:09:22
just a very simple Network that decides

00:09:20 --> 00:09:24
which expert should be looking at which

00:09:21 --> 00:09:27
token and so you send all of the tokens

00:09:23 --> 00:09:28
to their experts and then you apply the

00:09:26 --> 00:09:31
xperts and you get back the the the

00:09:27 --> 00:09:34
output and you combine them and then you

00:09:30 --> 00:09:36
go forward in the network you have eight

00:09:33 --> 00:09:38
experts per layer and you execute only

00:09:35 --> 00:09:39
two of them so what it means at the end

00:09:37 --> 00:09:43
of the day is that you have a lot of

00:09:38 --> 00:09:45
parameters on your model you have uh 46

00:09:42 --> 00:09:47
billion parameters but the thing is that

00:09:44 --> 00:09:50
he the number of parameters that ex

00:09:46 --> 00:09:51
that you execute uh is much lower than

00:09:49 --> 00:09:54
that because you only execute two

00:09:50 --> 00:09:56
branches out of eight and so at the end

00:09:53 --> 00:09:58
of the day you only execute 12 billion

00:09:55 --> 00:10:00
parameters per token and this is what

00:09:57 --> 00:10:02
counts for latency and throughput and

00:09:59 --> 00:10:03
for performance so you have a model

00:10:01 --> 00:10:07
which has the performance of a 12

00:10:02 --> 00:10:09
billion parameter Network that can uh

00:10:06 --> 00:10:11
that have performance that are much

00:10:08 --> 00:10:13
igher than what you could get even by

00:10:10 --> 00:10:16
compressing data a lot on a 12 billion

00:10:12 --> 00:10:19
dense Transformer so Spar mixure of

00:10:15 --> 00:10:20
experts is a technology uh that allows

00:10:18 --> 00:10:22
to be much more efficient at inference

00:10:19 --> 00:10:23
time and also much more efficient at

00:10:21 --> 00:10:26
raining time so that's the reason why

00:10:22 --> 00:10:29
we mates to develop it very quickly just

00:10:25 --> 00:10:31
for folks who are listening um who might

00:10:28 --> 00:10:33
not be with sort of state-of-the-art

00:10:30 --> 00:10:35
architecture and language models could

00:10:32 --> 00:10:37
you just describe the difference between

00:10:34 --> 00:10:40
you know dense models which have been

00:10:36 --> 00:10:41
the primary architecture today and

00:10:39 --> 00:10:43
mixture of experts intuitively what are

00:10:40 --> 00:10:44
the biggest differences between these

00:10:42 --> 00:10:46
two

00:10:43 --> 00:10:49
architectures so they are very similar

00:10:45 --> 00:10:52
except on the what we call the D Network

00:10:48 --> 00:10:54
so the the you know in in the dense

00:10:51 --> 00:10:55
Transformer you have you alternate

00:10:53 --> 00:10:58
between an attention layer and and a

00:10:54 --> 00:11:01
dense layer generally that's that's the

00:10:57 --> 00:11:02
idea a spar mixture of experts you you

00:11:00 --> 00:11:04
take the dense layer and you duplicate

00:11:01 --> 00:11:05
it several times and so that's where you

00:11:03 --> 00:11:07
actually increase the number of

00:11:04 --> 00:11:09
parameters so you increase the capacity

00:11:06 --> 00:11:11
of the model without increasing the cost

00:11:08 --> 00:11:13
so that's a way of decoupling the

00:11:10 --> 00:11:15
memorization and what you can remember

00:11:12 --> 00:11:18
the capacity of the network to its cost

00:11:14 --> 00:11:19
at inference time if you had to describe

00:11:17 --> 00:11:21
the biggest benefits for developers as a

00:11:18 --> 00:11:25
result of that inference efficiency it's

00:11:20 --> 00:11:27
cost and and latency so you can have uh

00:11:24 --> 00:11:28
usually that's what you look at when

00:11:26 --> 00:11:29
you're a developer you want something

00:11:27 --> 00:11:31
which is cheap and you want something

00:11:28 --> 00:11:34
which is fast generally speaking the

00:11:30 --> 00:11:36
just the trade-off uh is strictly

00:11:33 --> 00:11:39
favorable in using mix compared to using

00:11:36 --> 00:11:42
a 12 billion dense model and the other

00:11:38 --> 00:11:43
way to think about it is that if uh you

00:11:41 --> 00:11:46
want to use a model which is as good as

00:11:42 --> 00:11:50
L 270b you should be using Mixr because

00:11:45 --> 00:11:51
m is actually on par with Lama 270b

00:11:49 --> 00:11:53
while being approximately six times

00:11:50 --> 00:11:56
cheaper or six times faster for the same

00:11:52 --> 00:11:59
price could you talk just a little bit

00:11:55 --> 00:12:02
about why it's been so challenging for

00:11:58 --> 00:12:04
folks to uh for research labs and

00:12:01 --> 00:12:06
research teams to really get the mixture

00:12:03 --> 00:12:08
of experts model right it sounds like

00:12:05 --> 00:12:10
you know for a while now folks have

00:12:07 --> 00:12:11
known that the dense model architecture

00:12:09 --> 00:12:13
that all of us have been using in in

00:12:10 --> 00:12:17
sort of the most notable products or the

00:12:12 --> 00:12:20
most well-known products um are slow uh

00:12:16 --> 00:12:23
they're expensive and they're difficult

00:12:19 --> 00:12:25
o scale and so for a while people have

00:12:22 --> 00:12:27
been looking for an alternative

00:12:24 --> 00:12:29
architecture that could be like you were

00:12:26 --> 00:12:31
saying cheaper could be faster could be

00:12:28 --> 00:12:32
more efficient what were some of the

00:12:30 --> 00:12:36
biggest challenges you have to figure

00:12:31 --> 00:12:38
out to get thee model right well I guess

00:12:35 --> 00:12:39
I won't disclose all Trade Secrets but

00:12:37 --> 00:12:41
uh there's basically two challenges the

00:12:38 --> 00:12:43
first one is you need to figure out how

00:12:40 --> 00:12:45
to train it correctly from from a

00:12:42 --> 00:12:47
mathematical perspective the other

00:12:44 --> 00:12:49
challenges is to train efficiently so

00:12:46 --> 00:12:51
how to use actually a hardware uh as

00:12:48 --> 00:12:53
efficiently as possible you have like

00:12:50 --> 00:12:55
new challenges coming from the fact that

00:12:52 --> 00:12:57
you have tokens flying around from one

00:12:54 --> 00:12:59
to one expert to another uh that creates

00:12:57 --> 00:13:02
ome communication constraints and you

00:12:58 --> 00:13:04
need to figure out um uh you need to

00:13:01 --> 00:13:05
make it fast and then on top of that you

00:13:03 --> 00:13:08
also have new constraints that apply

00:13:04 --> 00:13:12
when you deploy the model uh you do need

00:13:07 --> 00:13:13
to do inferencing uh efficiently and

00:13:11 --> 00:13:15
that's also the reason why we released

00:13:12 --> 00:13:17
an open source package based on VM so

00:13:14 --> 00:13:19
that the community can can take also

00:13:16 --> 00:13:22
this code and modify it and see how that

00:13:18 --> 00:13:25
works yeah obviously we're excited to

00:13:21 --> 00:13:27
see what the community does with thee uh

00:13:24 --> 00:13:29
mixol release you're putting out this

00:13:26 --> 00:13:32
week let's talk about open source and

00:13:28 --> 00:13:33
approach and a philosophy that's that's

00:13:31 --> 00:13:37
permeated all the work you've been doing

00:13:33 --> 00:13:40
so far um why choose to tackle this

00:13:36 --> 00:13:41
increasingly competitive space with an

00:13:39 --> 00:13:42
open source approach which has been

00:13:40 --> 00:13:44
which is quite different from the way

00:13:41 --> 00:13:45
everybody else is approaching it I guess

00:13:43 --> 00:13:47
it's a good question the the answer is

00:13:44 --> 00:13:52
that it's partly ideological and and

00:13:46 --> 00:13:55
partly pragmatical um we have grown with

00:13:51 --> 00:13:57
e field of AI uh that when from 2012

00:13:54 --> 00:14:00
we were detecting cat and go cats and

00:13:56 --> 00:14:02
ogs and in 2022 we were actually

00:13:59 --> 00:14:04
generating text that looked humanik so

00:14:01 --> 00:14:05
really made a lot of progress and if you

00:14:03 --> 00:14:09
look at the reason why we made all of

00:14:04 --> 00:14:10
this progress uh well most of it is

00:14:08 --> 00:14:14
explainable by the free flow of

00:14:09 --> 00:14:17
information so you had academic Labs you

00:14:13 --> 00:14:19
had very big uh industry backed Labs

00:14:16 --> 00:14:21
communicating all the time about the

00:14:18 --> 00:14:23
results and building on top of uh each

00:14:20 --> 00:14:25
other results and that's the way we went

00:14:22 --> 00:14:28
from we increased

00:14:24 --> 00:14:30
significantly uh the architecture and

00:14:27 --> 00:14:33
training uh

00:14:29 --> 00:14:36
techniques uh we we just made everything

00:14:32 --> 00:14:39
work as a community and all of a sudden

00:14:35 --> 00:14:43
in 2020 with gpt3 this tide kind of

00:14:38 --> 00:14:44
reversed and uh companies started to be

00:14:42 --> 00:14:46
more opaque about what they were doing

00:14:43 --> 00:14:48
because they they they realized there

00:14:45 --> 00:14:51
was actually a very big market and all

00:14:47 --> 00:14:55
of a sudden 2022 on the important

00:14:50 --> 00:14:57
aspects of AI and on llms we had we went

00:14:54 --> 00:14:59
and Beyond chinchila there were

00:14:56 --> 00:15:00
basically no communication at all and

00:14:58 --> 00:15:02
that's something that that I as a

00:14:59 --> 00:15:04
researcher and and timot and Gom and all

00:15:01 --> 00:15:06
of the people that joined us as well

00:15:03 --> 00:15:08
deeply regretted uh because we think

00:15:05 --> 00:15:10
that we're definitely not at the end of

00:15:07 --> 00:15:12
the story we need to invent new things

00:15:09 --> 00:15:15
there's no reason why to stop now uh

00:15:12 --> 00:15:16
because the technology is effectively uh

00:15:14 --> 00:15:19
good but not working completely well

00:15:15 --> 00:15:21
enough and so we believe that it's still

00:15:18 --> 00:15:24
the case that we should be communicating

00:15:20 --> 00:15:26
a lot about uh models we should be

00:15:23 --> 00:15:28
allowing the community to take the

00:15:25 --> 00:15:31
models and make it their own and that's

00:15:27 --> 00:15:34
a some ideological reason why we

00:15:30 --> 00:15:35
nt into that the other reason is that

00:15:33 --> 00:15:38
we are talking to

00:15:34 --> 00:15:40
developers uh developers want to modify

00:15:37 --> 00:15:43
things and and having a deep access to

00:15:39 --> 00:15:46
to very good model is is a good way

00:15:42 --> 00:15:48
of engaging with this community and uh

00:15:45 --> 00:15:50
well and I guess addressing their needs

00:15:47 --> 00:15:52
o that the platform we're building as

00:15:49 --> 00:15:55
well is going to to be used by them so

00:15:52 --> 00:15:57
that's that's also like a a business

00:15:54 --> 00:16:00
reason obviously uh as a business we we

00:15:56 --> 00:16:02
do need to have a valid Mone ization

00:15:59 --> 00:16:04
Approach at some point uh but we've seen

00:16:01 --> 00:16:07
many businesses build open core

00:16:03 --> 00:16:09
approaches uh and have a very strong

00:16:06 --> 00:16:11
open source community and also a very

00:16:08 --> 00:16:13
good offer of services and that's what

00:16:10 --> 00:16:17
we want to build that resonates I I

00:16:12 --> 00:16:20
remember a very detectable shift you're

00:16:16 --> 00:16:22
right you know the early days of of deep

00:16:19 --> 00:16:24
learning were largely driven by a bunch

00:16:21 --> 00:16:25
of open collaboration between

00:16:23 --> 00:16:27
researchers from different Labs who

00:16:24 --> 00:16:28
would often publish all their work and

00:16:26 --> 00:16:31
share them at conferences you know

00:16:27 --> 00:16:33
Transformers ly was published and and

00:16:30 --> 00:16:36
opened to the entire research Community

00:16:32 --> 00:16:38
um but that has has definitely changed

00:16:35 --> 00:16:41
yes so I think there's some level of

00:16:37 --> 00:16:43
open sourcing uh in in Ai and so we

00:16:40 --> 00:16:45
offer the open uh the weights and we

00:16:42 --> 00:16:47
offer the inference code that's like the

00:16:44 --> 00:16:50
nd product that is already super usable

00:16:46 --> 00:16:52
so uh it's already a very big step

00:16:49 --> 00:16:55
forward compared to closed apis because

00:16:52 --> 00:16:57
you can modify it and you can look at

00:16:54 --> 00:16:59
what's happening under the hood look at

00:16:56 --> 00:17:01
activations and all so you have inter

00:16:58 --> 00:17:04
pretability and the possibility of

00:17:00 --> 00:17:06
modifying the model to adapt it to some

00:17:03 --> 00:17:08
ditorial tone to adapt it to

00:17:05 --> 00:17:10
proprietary data to adapt it to some

00:17:07 --> 00:17:11
Specific Instructions which is something

00:17:09 --> 00:17:13
that is actually much harder to make if

00:17:10 --> 00:17:15
you only have access to a close Source

00:17:12 --> 00:17:17
API um and that's something that also

00:17:14 --> 00:17:20
goes with our approach of the technology

00:17:16 --> 00:17:22
which is to say pre-train model should

00:17:19 --> 00:17:26
be neutral and we should Empower our

00:17:21 --> 00:17:28
customers to take these models and just

00:17:25 --> 00:17:30
put their editorial approaches there are

00:17:27 --> 00:17:32
instruction they Constitution if you

00:17:29 --> 00:17:34
want to talk like entropic into the

00:17:31 --> 00:17:36
model so that's the that's the way we

00:17:33 --> 00:17:38
approach the technology we don't want to

00:17:35 --> 00:17:40
pour our own biases into the into the

00:17:38 --> 00:17:43
pre-train model on the other hand we

00:17:39 --> 00:17:46
want to enable the developers to control

00:17:42 --> 00:17:48
exactly how the model behaves uh and

00:17:45 --> 00:17:50
what kind of biases it has what what

00:17:47 --> 00:17:52
kind of biases it doesn't have so we we

00:17:49 --> 00:17:54
really take this modular approach and

00:17:51 --> 00:17:56
that goes very well with the fact that

00:17:53 --> 00:17:58
we release uh some very strong open we

00:17:55 --> 00:17:59
models could you just ground Us in the

00:17:57 --> 00:18:01
reality of where these models are today

00:17:58 --> 00:18:04
just to give people a sense of of where

00:18:01 --> 00:18:06
in the timeline we are is open source

00:18:03 --> 00:18:07
really a viable competitor to

00:18:05 --> 00:18:09
proprietary close models or is there a

00:18:06 --> 00:18:11
performance Gap you know what are the

00:18:08 --> 00:18:13
trade-offs or limitations that people

00:18:10 --> 00:18:16
should be aware of uh with open source

00:18:12 --> 00:18:19
so mix is as similar performance to GPT

00:18:15 --> 00:18:21
3.5 so that's the that's a good

00:18:18 --> 00:18:24
grounding internally we have SW models

00:18:20 --> 00:18:26
that are in between 3.5 and four that

00:18:23 --> 00:18:28
are basically second or third the second

00:18:25 --> 00:18:31
or third best model in the world so

00:18:27 --> 00:18:32
really we think that the Gap is closing

00:18:30 --> 00:18:34
uh the Gap is approximately six months

00:18:32 --> 00:18:36
at that point and the reason why it's

00:18:34 --> 00:18:37
six months is that it actually goes

00:18:35 --> 00:18:40
faster if you do open source things

00:18:36 --> 00:18:42
because you get the community uh modify

00:18:39 --> 00:18:45
the model toest very good ideas that can

00:18:41 --> 00:18:47
then be Consolidated by us for instance

00:18:44 --> 00:18:50
and and we just go faster because of

00:18:46 --> 00:18:53
that so it has always been the case that

00:18:49 --> 00:18:55
open source at the end well ends up

00:18:52 --> 00:18:58
being going faster and that's the reason

00:18:54 --> 00:19:00
why uh the entire inet rends on Linux I

00:18:57 --> 00:19:02
don't see why it would be any different

00:18:59 --> 00:19:03
for AI uh obviously there's some

00:19:01 --> 00:19:05
constraint that are slightly different

00:19:02 --> 00:19:07
because the infrastructure cost is quite

00:19:04 --> 00:19:11
High uh to train a model it cost a lot

00:19:06 --> 00:19:13
of money but uh but I really think that

00:19:10 --> 00:19:14
we'll converge to a setting where you

00:19:12 --> 00:19:16
have propri ey models and the open

00:19:13 --> 00:19:17
source model are just as good and I

00:19:15 --> 00:19:19
think eventually the field will be much

00:19:16 --> 00:19:21
more open because if you want to go

00:19:18 --> 00:19:23
beyond the the biggest model today you

00:19:21 --> 00:19:25
do need to find new paradigms and so

00:19:22 --> 00:19:27
that means that we also need to do

00:19:24 --> 00:19:29
research H and that's we're very excited

00:19:26 --> 00:19:31
by this perspective because we like

00:19:28 --> 00:19:32
competitive environment and research

00:19:30 --> 00:19:35
yeah so let's talk about that a little

00:19:31 --> 00:19:37
bit more how are you seeing people use

00:19:34 --> 00:19:40
and innovate on the open source models

00:19:37 --> 00:19:42
and are there any use cases that diverge

00:19:39 --> 00:19:44
from proprietary close models at all I

00:19:41 --> 00:19:47
think we've seen several categories of

00:19:43 --> 00:19:48
usage um you had there's a few companies

00:19:46 --> 00:19:50
that know how to strongly find you

00:19:47 --> 00:19:53
models to their needs so they took

00:19:49 --> 00:19:55
mistal 7B had a lot of human annotations

00:19:52 --> 00:19:58
had a lot of proprietary data just

00:19:55 --> 00:20:01
modify mral 7B so that it solve their

00:19:57 --> 00:20:03
task just as as well as gbt 3.5 but only

00:20:00 --> 00:20:05
for a lower cost and a higher level of

00:20:02 --> 00:20:07
control we've also seen I think very

00:20:04 --> 00:20:11
interesting Community efforts in adding

00:20:06 --> 00:20:13
capabilities to mral 7B so we saw like a

00:20:10 --> 00:20:15
context length extension to 128k that

00:20:12 --> 00:20:17
worked very well again was done in the

00:20:14 --> 00:20:19
open so like the recipe was available

00:20:16 --> 00:20:21
and this is something that we were able

00:20:18 --> 00:20:24
to consolidate we've seen imag en coders

00:20:20 --> 00:20:26
to make it a visual visual language

00:20:23 --> 00:20:29
Model A very actionable thing that we

00:20:25 --> 00:20:31
saw is uh I think the hugging face folks

00:20:28 --> 00:20:34
first did the direct preference

00:20:30 --> 00:20:36
optimization on top of M 7B and made a

00:20:33 --> 00:20:38
very strong much stronger model than the

00:20:35 --> 00:20:40
instructed model we proposed at the

00:20:37 --> 00:20:42
arly release and it turned out it's

00:20:39 --> 00:20:43
actually a very good idea to do it and

00:20:41 --> 00:20:46
so that's something that we've

00:20:42 --> 00:20:49
Consolidated as well uh so generally

00:20:45 --> 00:20:51
speaking uh just the community is super

00:20:48 --> 00:20:54
eager to just take the model and add new

00:20:50 --> 00:20:57
capabilities put it on the laptop put it

00:20:53 --> 00:21:00
on on an iPhone I saw m 7B on an iPhone

00:20:56 --> 00:21:03
I saw Mr 7B on the stuffed parot as well

00:20:59 --> 00:21:05
so fun things useful things uh but

00:21:02 --> 00:21:07
generally speaking it's been super

00:21:04 --> 00:21:10
exciting to see the research Community

00:21:06 --> 00:21:12
take a hold of of our technology and

00:21:09 --> 00:21:13
with mix which is a new architecture I

00:21:11 --> 00:21:15
think we're are also going to see much

00:21:12 --> 00:21:17
more interesting things because on the

00:21:14 --> 00:21:19
interpretability field also on the

00:21:16 --> 00:21:21
safety field as it turns out you have a

00:21:18 --> 00:21:23
lot of things to do when you have deep

00:21:20 --> 00:21:26
access to an open model and so we're

00:21:22 --> 00:21:27
ally eager to to help that uh and to

00:21:25 --> 00:21:29
engage with the community safety you

00:21:27 --> 00:21:31
know this an important

00:21:28 --> 00:21:34
I think piece to talk about the

00:21:31 --> 00:21:37
immediate reaction of a lot of folks is

00:21:33 --> 00:21:40
to deem open source less safe than

00:21:36 --> 00:21:43
closed models how would you respond to

00:21:39 --> 00:21:44
that so I think we believe that it's

00:21:42 --> 00:21:46
actually not the case for the current

00:21:43 --> 00:21:50
generation of model uh models that we

00:21:46 --> 00:21:52
are using today are not that much are

00:21:49 --> 00:21:54
not much more than just a compression of

00:21:51 --> 00:21:56
whatever is available on the internet so

00:21:54 --> 00:21:59
it does make access to knowledge more

00:21:55 --> 00:22:02
food uh but this this is the story of

00:21:58 --> 00:22:04
humanity making knowledge uh access more

00:22:01 --> 00:22:06
fre it so it's no different than uh

00:22:03 --> 00:22:07
inventing the printing machine where we

00:22:05 --> 00:22:10
had apparently similar debate it wasn't

00:22:07 --> 00:22:13
here but that was the debate we had uh

00:22:09 --> 00:22:16
so we are not making the world any time

00:22:12 --> 00:22:17
uh any less safer by providing more

00:22:15 --> 00:22:19
interactive access to knowledge so

00:22:16 --> 00:22:21
that's the first thing now the other

00:22:18 --> 00:22:24
thing is that you do have immediate risk

00:22:20 --> 00:22:26
of misusage of large language models and

00:22:23 --> 00:22:28
uh you do have them for open source

00:22:25 --> 00:22:32
models but also for closed models and so

00:22:27 --> 00:22:33
the the way you do address these

00:22:31 --> 00:22:36
problems and come up with counter

00:22:32 --> 00:22:39
measures is to know about them uh so you

00:22:35 --> 00:22:40
need to know about uh about bridges

00:22:38 --> 00:22:42
basically and that's the same way in

00:22:39 --> 00:22:44
which you need to know about bridges on

00:22:41 --> 00:22:47
operating systems and on uh on

00:22:43 --> 00:22:50
etworks and so it's no no different for

00:22:46 --> 00:22:51
AI uh putting uh models under the

00:22:49 --> 00:22:53
highest level of scrutiny is a way of

00:22:50 --> 00:22:56
knowing how they can be misused and it's

00:22:52 --> 00:22:57
a way of coming up with conter measures

00:22:55 --> 00:22:59
and I think a good example of that is

00:22:56 --> 00:23:01
that it's actually super easy to exploit

00:22:58 --> 00:23:04
an API uh it's super easy especially if

00:23:00 --> 00:23:09
you have fine tuning access to make gp4

00:23:03 --> 00:23:10
behave uh in a very bad way and it's um

00:23:08 --> 00:23:12
since it's the case and it's always

00:23:10 --> 00:23:14
going to be the case it's super hard to

00:23:11 --> 00:23:17
be adversarially robust it means that

00:23:13 --> 00:23:19
we're only trusting the team uh of large

00:23:16 --> 00:23:22
companies to figure out ways of

00:23:18 --> 00:23:24
addressing these problems whereas if you

00:23:21 --> 00:23:27
do open sourcing you trust the community

00:23:23 --> 00:23:28
and the community is much larger um and

00:23:26 --> 00:23:31
so if you look at the history of

00:23:27 --> 00:23:33
software in cyber security in operating

00:23:30 --> 00:23:35
systems that's the way we made the

00:23:32 --> 00:23:37
system safe and so if we want to make

00:23:34 --> 00:23:39
the current AI system safe and then move

00:23:36 --> 00:23:42
on to a Next Generation that potentially

00:23:38 --> 00:23:44
will be even stronger and then we can re

00:23:41 --> 00:23:46
have this we can have this discussion

00:23:43 --> 00:23:48
again well you do need to do open

00:23:45 --> 00:23:51
sourcing so today we think that open

00:23:47 --> 00:23:54
sourcing is the safe way yeah I think

00:23:50 --> 00:23:58
this is this is not understood right

00:23:53 --> 00:23:59
widely that um when you have thousands

00:23:57 --> 00:24:02
or hundreds of thousands of people able

00:23:58 --> 00:24:04
to Red Team models because it's open

00:24:01 --> 00:24:08
source the likelihood that you'll detect

00:24:03 --> 00:24:12
biases and um built-in breaches and

00:24:07 --> 00:24:14
risks are just dramatically higher um

00:24:11 --> 00:24:17
and I think if you were talking to

00:24:13 --> 00:24:19
policymakers how would you help advise

00:24:16 --> 00:24:20
them how do you think they should be

00:24:18 --> 00:24:23
thinking about regulating open source

00:24:19 --> 00:24:26
models given that you know the safest

00:24:22 --> 00:24:28
way often to battle Harden software and

00:24:25 --> 00:24:30
tools is to put them out in the open

00:24:27 --> 00:24:35
well we've been saying that precisely

00:24:29 --> 00:24:37
this that um that the current technology

00:24:34 --> 00:24:40
is not dangerous on the other end the

00:24:36 --> 00:24:41
fact that we we are effectively making

00:24:39 --> 00:24:43
them stronger means that we need to

00:24:40 --> 00:24:45
monitor what's happening empirically

00:24:42 --> 00:24:48
monitor performances the best way of

00:24:44 --> 00:24:50
empirically monitoring software

00:24:47 --> 00:24:54
performances is is through open source

00:24:49 --> 00:24:56
so that's what we've been saying um

00:24:53 --> 00:24:57
there's been some effort to try to come

00:24:55 --> 00:25:00
up with very complex governance

00:24:56 --> 00:25:02
structure where where uh you would have

00:24:59 --> 00:25:03
like several companies talking together

00:25:01 --> 00:25:07
having some safe space some safe

00:25:02 --> 00:25:09
soundbox uh for uh red teer that would

00:25:06 --> 00:25:12
be potentially independent so things

00:25:08 --> 00:25:13
that are super complex uh but as it

00:25:11 --> 00:25:15
urns out if you look at the history of

00:25:12 --> 00:25:17
software the only way we did software

00:25:14 --> 00:25:20
collaboratively is through open source

00:25:16 --> 00:25:22
so why change the recipe today where uh

00:25:19 --> 00:25:24
the the technology we're looking at is

00:25:21 --> 00:25:26
actually nothing else than the

00:25:23 --> 00:25:27
compression of the internet so that's

00:25:25 --> 00:25:29
the that's what we've been saying to The

00:25:26 --> 00:25:30
Regulators uh J

00:25:28 --> 00:25:33
another thing we've added to the

00:25:29 --> 00:25:36
regulator is that if they want to

00:25:32 --> 00:25:38
enforce that AI products that needs to

00:25:35 --> 00:25:40
be safe like like if you if you want to

00:25:38 --> 00:25:43
have a diagnosis assistant you want it

00:25:39 --> 00:25:45
o be safe right well in order to

00:25:42 --> 00:25:47
Monitor and to evaluate whether it's

00:25:44 --> 00:25:49
actually safe you need to have some very

00:25:46 --> 00:25:52
good tooling and the the tooling

00:25:48 --> 00:25:55
requires to have access to llms and if

00:25:51 --> 00:25:59
you access close Source apis llms where

00:25:55 --> 00:26:00
you're bit in a in a in trouble water

00:25:58 --> 00:26:02
because it's hard to be independent in

00:25:59 --> 00:26:05
that setting so we think that

00:26:01 --> 00:26:07
independent controller of product safety

00:26:04 --> 00:26:08
should have access to very strong open

00:26:06 --> 00:26:13
source models and should own the

00:26:07 --> 00:26:16
technology and if open source llms were

00:26:12 --> 00:26:18
to fail relative to close Source models

00:26:15 --> 00:26:21
why would that

00:26:17 --> 00:26:24
be well I guess the the regulation

00:26:20 --> 00:26:27
burden is is uh potentially one thing

00:26:23 --> 00:26:29
that that could uh make it harder to uh

00:26:26 --> 00:26:31
to release open source models it's also

00:26:28 --> 00:26:34
generally speaking it's a very

00:26:30 --> 00:26:35
competitive market and I think in order

00:26:33 --> 00:26:38
for open source models to be widely

00:26:34 --> 00:26:41
adopted they need to be as strong as

00:26:37 --> 00:26:43
open as a close Source model they have a

00:26:40 --> 00:26:45
little Advantage because you do have

00:26:42 --> 00:26:47
more control and so you can do heavier

00:26:44 --> 00:26:49
fing and so you can make performance

00:26:46 --> 00:26:52
jump a lot on a specific task because

00:26:48 --> 00:26:55
you have deep access uh but really at

00:26:51 --> 00:26:58
he end of the day um developers look at

00:26:54 --> 00:27:00
performance and and latency and so

00:26:57 --> 00:27:01
that's why why we think that as a

00:26:59 --> 00:27:04
company we need to be very much on the

00:27:00 --> 00:27:07
frontier if we want to be relevant given

00:27:03 --> 00:27:09
the complexity of uh Frontier models and

00:27:06 --> 00:27:12
Foundation models in these systems there

00:27:08 --> 00:27:14
are just tons of misconceptions that

00:27:11 --> 00:27:17
folks have about these models and so if

00:27:13 --> 00:27:21
you step back and we look at the Battle

00:27:16 --> 00:27:24
that's raging between folks um uh

00:27:20 --> 00:27:26
pushing for closed Source systems and

00:27:23 --> 00:27:27
versus the open source system what do

00:27:25 --> 00:27:30
you think is at stake here what do you

00:27:26 --> 00:27:32
think the battle is for well I think the

00:27:29 --> 00:27:35
battle is for the neutrality of the

00:27:31 --> 00:27:37
technology like a technology by ense is

00:27:34 --> 00:27:38
omething neutral you can use it for bad

00:27:36 --> 00:27:40
purposes you can use it for good

00:27:37 --> 00:27:43
purposes if you look at what the llm

00:27:39 --> 00:27:45
does it's not really different from

00:27:42 --> 00:27:46
programming language it's actually used

00:27:44 --> 00:27:50
very much as a programming language by

00:27:45 --> 00:27:52
the application makers there's a strong

00:27:49 --> 00:27:55
um confusion made between what we call a

00:27:51 --> 00:27:57
model and what we call an application

00:27:54 --> 00:28:00
and so a model is really the programming

00:27:56 --> 00:28:02
language of a application so if you talk

00:27:59 --> 00:28:04
to all of the startups doing amazing

00:28:01 --> 00:28:08
products with generative AI they're

00:28:03 --> 00:28:09
using llms just as um as a function and

00:28:07 --> 00:28:12
on top of that you have a very big

00:28:08 --> 00:28:14
systems with filters with decision

00:28:11 --> 00:28:16
making with control flow and all of this

00:28:13 --> 00:28:18
things and what you want to regulate if

00:28:15 --> 00:28:21
you want to regulate something is the

00:28:17 --> 00:28:24
system the system is it's the product so

00:28:20 --> 00:28:27
for instance um a healthcare diagnosis

00:28:23 --> 00:28:31
assistant is is an application you want

00:28:26 --> 00:28:33
it to be non-biased you want it to take

00:28:30 --> 00:28:35
good decisions uh even under high

00:28:32 --> 00:28:37
pressure so you want its statistical

00:28:34 --> 00:28:40
accuracy to be very high and so you want

00:28:36 --> 00:28:43
o measure that and it doesn't matter if

00:28:39 --> 00:28:45
it uses a large language Mo

00:28:42 --> 00:28:48
uh under the hood what you want to

00:28:44 --> 00:28:50
regulate the application and the issue

00:28:47 --> 00:28:51
we had and the issue we're still having

00:28:49 --> 00:28:54
now

00:28:50 --> 00:28:56
is we hear a lot of people saying we

00:28:53 --> 00:28:57
should regulate the tech so we should

00:28:55 --> 00:28:59
regulate the function the mathematics

00:28:57 --> 00:29:00
behind it

00:28:58 --> 00:29:02
but really you never use a large

00:28:59 --> 00:29:04
language model itself you only always

00:29:01 --> 00:29:08
use it in an application in a in a in a

00:29:03 --> 00:29:10
way with a user interface and so that's

00:29:07 --> 00:29:12
the one thing you want to regulate and

00:29:09 --> 00:29:14
what it means is that companies like us

00:29:11 --> 00:29:16
like foundational model companies will

00:29:13 --> 00:29:18
obviously make the model as controllable

00:29:15 --> 00:29:21
as possible so that the applications on

00:29:17 --> 00:29:23
top of it can be compliant can be safe

00:29:20 --> 00:29:27
uh we'll also build the tools that allow

00:29:22 --> 00:29:29
to measure the compliance and the safety

00:29:26 --> 00:29:31
of the application because that's super

00:29:28 --> 00:29:32
useful for the application makers it's

00:29:30 --> 00:29:34
actually

00:29:31 --> 00:29:37
needed but there's no point in

00:29:33 --> 00:29:39
regulating something that is neutral in

00:29:36 --> 00:29:41
itself that is just a mathematical tool

00:29:38 --> 00:29:43
so I think that's the one thing that

00:29:40 --> 00:29:46
we've been hammering a lot uh I think

00:29:42 --> 00:29:49
we've been which is good uh but there's

00:29:45 --> 00:29:50
till a lot of effort uh in uh I guess

00:29:48 --> 00:29:52
in making this strong distinction which

00:29:49 --> 00:29:57
is super important to understand what's

00:29:51 --> 00:29:59
going on so to regulate apps not math

00:29:56 --> 00:30:02
seems like you know the right direction

00:29:58 --> 00:30:03
that a lot of folks who are who

00:30:01 --> 00:30:04
understand the inner workings of these

00:30:02 --> 00:30:07
models and how they're actually

00:30:03 --> 00:30:08
implemented in in reality um are

00:30:06 --> 00:30:12
advocating

00:30:07 --> 00:30:15
for what do you think um is the best way

00:30:11 --> 00:30:16
to clear up the this misconception for

00:30:14 --> 00:30:18
folks who don't maybe don't have

00:30:15 --> 00:30:21
technical backgrounds don't actually

00:30:17 --> 00:30:23
understand how Foundation models work

00:30:20 --> 00:30:25
and how the scaling laws work so I've

00:30:22 --> 00:30:27
been using a lot of metaphors I guess to

00:30:24 --> 00:30:29
to make it understood large language

00:30:26 --> 00:30:32
models are like programming languages uh

00:30:28 --> 00:30:34
and so you don't regulate uh programming

00:30:31 --> 00:30:39
languages you regulate malwares you you

00:30:33 --> 00:30:42
ban malwares we've also been actively uh

00:30:38 --> 00:30:44
vocal about the fact that pre-market

00:30:41 --> 00:30:46
conditions like flops the number of of

00:30:43 --> 00:30:49
lops that you do to create a model is

00:30:45 --> 00:30:51
definitely not the right way of doing uh

00:30:48 --> 00:30:54
of measuring the performance of a model

00:30:50 --> 00:30:56
right we um we're very much in favor of

00:30:53 --> 00:30:58
having very strong evaluations that's as

00:30:55 --> 00:31:00
I've said uh this this is something that

00:30:57 --> 00:31:04
we want to provide to our customers the

00:30:59 --> 00:31:06
ability to evaluate our models in their

00:31:03 --> 00:31:09
application uh and so I think this is a

00:31:05 --> 00:31:12
very strong thing um to well that we've

00:31:08 --> 00:31:14
been stressing we want to provide the

00:31:11 --> 00:31:16
tools for application makers to be

00:31:13 --> 00:31:18
compliant that's the that's something we

00:31:15 --> 00:31:21
have we've been saying and so we find it

00:31:17 --> 00:31:23
a bit unfortunate that uh we haven't we

00:31:20 --> 00:31:26
haven't been heard everywhere and that

00:31:22 --> 00:31:28
here's still a big focus on the tech uh

00:31:25 --> 00:31:29
probably because things are not

00:31:27 --> 00:31:31
completely well understood because it's

00:31:28 --> 00:31:33
a very complex field and it's also a

00:31:30 --> 00:31:36
very fast moving field uh but eventually

00:31:32 --> 00:31:38
I think I'm I'm very optimistic that

00:31:35 --> 00:31:41
we'll find a way to uh continue

00:31:37 --> 00:31:45
innovating uh while having safe products

00:31:40 --> 00:31:48
but also uh high level of competition on

00:31:44 --> 00:31:50
the foundational mod uh layer well

00:31:47 --> 00:31:51
et's let's Channel your optimism a

00:31:49 --> 00:31:54
little bit you know there's there's very

00:31:50 --> 00:31:57
few people who have the ground level

00:31:53 --> 00:32:00
understanding of scaling laws um like

00:31:56 --> 00:32:01
you gam and Tim and your team when you

00:31:59 --> 00:32:03
step back and you look at the entire

00:32:00 --> 00:32:05
space of language modeling in addition

00:32:02 --> 00:32:07
to open source what are the key

00:32:04 --> 00:32:10
differentiators that you see in the next

00:32:06 --> 00:32:13
wave of Cutting Edge models um things

00:32:09 --> 00:32:15
like you know uh self-play you have

00:32:12 --> 00:32:18
process reward models um the uses of

00:32:14 --> 00:32:19
synthetic data uh if you had to

00:32:17 --> 00:32:22
conjecture what do you think some of the

00:32:18 --> 00:32:25
most exciting or important breakthroughs

00:32:21 --> 00:32:27
will be in the field going forward so I

00:32:24 --> 00:32:29
guess it's good to start with diagnosis

00:32:26 --> 00:32:31
o what is uh what is not working that

00:32:28 --> 00:32:33
well so reasoning is not working that

00:32:30 --> 00:32:35
well and it's super inefficient to train

00:32:32 --> 00:32:37
a model uh if you compare like the

00:32:34 --> 00:32:40
training process of of a large language

00:32:36 --> 00:32:44
mobel to the brain you have like a

00:32:39 --> 00:32:46
factor I think 100,000 so really there's

00:32:43 --> 00:32:49
ome progress to be made in term of data

00:32:45 --> 00:32:51
efficiency so I think the the frontier

00:32:48 --> 00:32:53
is increasing data efficiency increasing

00:32:50 --> 00:32:56
reasoning capabilities so adaptive

00:32:52 --> 00:32:58
comput is one way uh and when to

00:32:55 --> 00:33:00
increase data efficiency you do you need

00:32:57 --> 00:33:03
to work on coming up with very high

00:32:59 --> 00:33:05
quality data filtering things uh many

00:33:02 --> 00:33:07
new techniques that needs to be invented

00:33:04 --> 00:33:11
still but that's really where the lock

00:33:06 --> 00:33:14
is uh data is the one important thing

00:33:10 --> 00:33:15
and the ability of the model to decide

00:33:13 --> 00:33:18
how much computed want to allocate to

00:33:14 --> 00:33:20
certain problem uh is definitely on the

00:33:17 --> 00:33:23
frontier as well so these are things

00:33:19 --> 00:33:25
that we're actively looking at you know

00:33:22 --> 00:33:27
this is a raging debate right we've and

00:33:24 --> 00:33:30
we've talked about this a few times

00:33:26 --> 00:33:32
before which is um Can models actually

00:33:29 --> 00:33:35
reason today do they actually generalize

00:33:31 --> 00:33:38
out of distribution what's your take on

00:33:34 --> 00:33:41
it and what do you think is required to

00:33:37 --> 00:33:42
exhibit what what would convince you

00:33:40 --> 00:33:44
that models are actually capable of

00:33:41 --> 00:33:46
multi-step complex reasoning yeah it's

00:33:43 --> 00:33:48
very hard because you train on the

00:33:45 --> 00:33:51
ntire human knowledge and so you have a

00:33:47 --> 00:33:53
lot of reasoning places so it's uh it's

00:33:50 --> 00:33:54
hard to say whether they reason or not

00:33:52 --> 00:33:56
or whether they do retrieval of

00:33:53 --> 00:33:58
reasoning and it looks like reasoning

00:33:55 --> 00:34:00
right uh I guess at the end of the day

00:33:57 --> 00:34:02
what matters is whether it works or not

00:33:59 --> 00:34:05
and on many simple reasoning task it

00:34:01 --> 00:34:06
does so we can call it reasoning it

00:34:04 --> 00:34:08
doesn't really matter if they reason

00:34:05 --> 00:34:10
like we do we don't even know how we

00:34:07 --> 00:34:12
reason so right so we are not going to

00:34:09 --> 00:34:16
know about how machines reason anytime

00:34:11 --> 00:34:18
soon yeah um so yeah it's a it's a

00:34:15 --> 00:34:21
raging debate uh the reason the the way

00:34:17 --> 00:34:25
ou do evaluate that is to try to be as

00:34:20 --> 00:34:27
out of distribution as possible uh like

00:34:24 --> 00:34:29
working on on mathematics uh is not

00:34:26 --> 00:34:32
something I've ever done but that

00:34:28 --> 00:34:34
something that Timo and Gom have are

00:34:31 --> 00:34:36
very sensitive to because they've been

00:34:33 --> 00:34:38
doing it for a while uh when they were

00:34:35 --> 00:34:39
at meta that's probably one way of

00:34:37 --> 00:34:42
measuring whether you have a very good

00:34:38 --> 00:34:45
model or not and actually if you look at

00:34:41 --> 00:34:47
um we're starting to see some very good

00:34:44 --> 00:34:50
mathematicians uh I'm thinking of Teran

00:34:46 --> 00:34:53
St right that are using large language

00:34:49 --> 00:34:54
models for some things uh obviously not

00:34:52 --> 00:34:56
he high level reasoning but for some

00:34:53 --> 00:35:00
part of their proofs and so I think we

00:34:55 --> 00:35:02
will move up in the abstraction uh and

00:34:59 --> 00:35:05
the question where does that stop we do

00:35:01 --> 00:35:08
need to find new new paradigms to uh to

00:35:04 --> 00:35:10
go one step forward and and we we will

00:35:07 --> 00:35:12
be actively looking for them we've

00:35:09 --> 00:35:14
talked a lot about developers so far if

00:35:11 --> 00:35:16
you had to sort of Channel your product

00:35:13 --> 00:35:19
View and and sort of just conjecture on

00:35:15 --> 00:35:22
what these advances in scaling laws in

00:35:18 --> 00:35:25
in representation learning in get

00:35:21 --> 00:35:26
eaching the models to to reason faster

00:35:24 --> 00:35:29
better cheaper what will these advances

00:35:25 --> 00:35:30
mean for end users in terms of how they

00:35:28 --> 00:35:32
consume how they program and they

00:35:29 --> 00:35:35
generally work with models what we think

00:35:31 --> 00:35:37
is that uh fast forward five years uh

00:35:34 --> 00:35:40
everybody will be using their

00:35:36 --> 00:35:42
specialized uh models Within part of

00:35:39 --> 00:35:45
complex applications and systems

00:35:41 --> 00:35:47
developers will be very um looking at

00:35:44 --> 00:35:50
latency so they will want to have for

00:35:46 --> 00:35:53
any specific task of the system they

00:35:50 --> 00:35:55
will want to have the lowest cost and

00:35:52 --> 00:35:58
lowest latency and the way you make that

00:35:54 --> 00:36:01
happen is that uh you will ask for the

00:35:57 --> 00:36:02
task ask for user preferences ask for

00:36:00 --> 00:36:05
what you want the model to do and you

00:36:01 --> 00:36:06
try to make the M as small as possible

00:36:04 --> 00:36:08
and as suitable to the task as possible

00:36:05 --> 00:36:11
and so I think that's the way we'll be

00:36:07 --> 00:36:14
volving on the developer space I also

00:36:10 --> 00:36:16
think that U generally speaking the fact

00:36:13 --> 00:36:18
hat we have access to large language

00:36:15 --> 00:36:20
models is going to reform completely the

00:36:17 --> 00:36:22
way we interact with machines and the

00:36:19 --> 00:36:23
internet of five years five years from

00:36:21 --> 00:36:26
now is going to be much different so

00:36:22 --> 00:36:28
much more interactive uh because I think

00:36:25 --> 00:36:30
this is already unlocked I mean it's

00:36:27 --> 00:36:32
just about making very good applications

00:36:29 --> 00:36:35
with very fast systems uh with very fast

00:36:31 --> 00:36:36
models so yeah very exciting times ahead

00:36:34 --> 00:36:39
so what would those interaction

00:36:35 --> 00:36:41
modalities look like yeah so that's very

00:36:38 --> 00:36:43
interesting and I think in in games for

00:36:40 --> 00:36:45
instance it's going to be fascinating uh

00:36:42 --> 00:36:47
we've seen some very good applications

00:36:44 --> 00:36:49
you do need to have small models because

00:36:46 --> 00:36:50
you want to have swarms of it and it

00:36:48 --> 00:36:53
start to be bit costly if you if it's

00:36:49 --> 00:36:55
too big uh but having them interact is

00:36:52 --> 00:36:57
just going to make pretty complex

00:36:54 --> 00:37:01
systems and interesting systems to

00:36:56 --> 00:37:04
bserve and to use uh so uh so we have a

00:37:00 --> 00:37:06
few friends making applications in the

00:37:03 --> 00:37:08
Enterprise space space with different

00:37:05 --> 00:37:09
Persona playing different roles relying

00:37:07 --> 00:37:12
on the same language model but with

00:37:09 --> 00:37:14
different prompts and different uh

00:37:11 --> 00:37:17
functioning um and I think that's going

00:37:13 --> 00:37:18
to be quite interesting as well to uh to

00:37:16 --> 00:37:20
look at as I've said complex

00:37:17 --> 00:37:22
applications in in in three years time

00:37:19 --> 00:37:25
are just going to use different parts

00:37:22 --> 00:37:27
different llms for different parts and

00:37:24 --> 00:37:29
that's going to be quite exciting well

00:37:26 --> 00:37:31
what's your call action to builders

00:37:28 --> 00:37:34
researchers folks who are excited about

00:37:30 --> 00:37:37
he space what would you ask them to do

00:37:33 --> 00:37:40
I I would take uh mistal models and try

00:37:36 --> 00:37:43
to build amazing applications uh the way

00:37:39 --> 00:37:45
many developers had uh it's not that

00:37:42 --> 00:37:48
hard uh it's the stack is starting to be

00:37:44 --> 00:37:50
pretty clear pretty efficient uh you

00:37:47 --> 00:37:52
only need a couple of gpus you canot

00:37:49 --> 00:37:54
even do it on your MacBook Pro if you

00:37:51 --> 00:37:57
want it's going to to be a bit hot but

00:37:53 --> 00:37:58
uh uh but it's good enough to to do

00:37:56 --> 00:38:00
interesting

00:37:57 --> 00:38:01
applications uh really the way we do

00:37:59 --> 00:38:04
software today is very different from

00:38:00 --> 00:38:06
the way we did it from last year and so

00:38:03 --> 00:38:10
I'm really calling application makers to

00:38:05 --> 00:38:12
action because we we are going to to try

00:38:09 --> 00:38:14
to enable them to to build as fast as

00:38:11 --> 00:38:16
possible thank you so much for listening

00:38:13 --> 00:38:19
to the a6c podcast what we're trying to

00:38:15 --> 00:38:22
do here is provide an informed cleared

00:38:18 --> 00:38:24
but also optimistic view of technology

00:38:21 --> 00:38:26
and its future and we're trying to do

00:38:23 --> 00:38:28
that by featuring some of the most

00:38:25 --> 00:38:32
inspiring people and the things they're

00:38:28 --> 00:38:33
building and so if you believe in that

00:38:31 --> 00:38:36
and you'd like to join us on this

00:38:32 --> 00:38:38
journey make sure to click subscribe but

00:38:35 --> 00:38:40
also let us know in the comments below

00:38:37 --> 00:38:42
hat you'd like to see us cover next

00:38:39 --> 00:38:44
hank you so much for listening and we

00:38:41 --> 00:38:44
will see you next

00:38:44 --> 00:38:48
[Music]

00:38:55 --> 00:38:59
time

<!-- YOUTUBE_TRANSCRIPT_END -->
