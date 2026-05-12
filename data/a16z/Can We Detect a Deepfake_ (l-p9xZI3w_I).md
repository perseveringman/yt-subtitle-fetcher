---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "l-p9xZI3w_I"
title: "Can We Detect a Deepfake?"
video_url: "https://www.youtube.com/watch?v=l-p9xZI3w_I"
thumbnail_url: "https://i.ytimg.com/vi/l-p9xZI3w_I/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=l-p9xZI3w_I"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2024-10-30T19:29:01.000Z"
upload_date: "2024-10-30"
duration_seconds: 1826
duration_human: "30:26"
view_count: 3755
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T13:04:44.412Z"
---

# Can We Detect a Deepfake?

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=l-p9xZI3w_I
- video_id: l-p9xZI3w_I
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2024-10-30T19:29:01.000Z
- upload_date: 2024-10-30
- duration: 30:26
- view_count: 3755
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Deepfakes. A portmanteau of deep learning and fake, that started making their way into public consciousness in 2018. The rapidly evolving technology is now fully in the zeitgeist, impacting industries ranging from politics to commerce, and of course, social media.

At the rate that they’re appearing, deep fakes might sound like an impossible problem to tackle. But it turns out that despite the lower barrier to entry, advancements in detection tools are keeping pace.

In today’s video we’ll discuss the technology, policy, and economy behind deepfakes with someone who has been thinking about voice security long before it became popular: Vijay Balasubramaniyan, cofounder and CEO of Pindrop.

Topics Covered: 
00:00 - The Rise of Deepfakes
00:49 - The Evolution of Fake Media
02:23 - The Technology Behind Deepfakes
07:34 - AI and Deepfakes in Elections
09:50 - Statistics in Commerce and Banking Deepfakes
11:24 - Detection Challenges: Can We Spot a Deepfake?
13:09 - Watermarking and Cryptography
15:40 - The Economics of Deepfake Creation and Detection
19:15 - What Can Spam Teach Us About Deepfakes?
21:11 - What Are the Defenses?
24:30 - Policy, Platforms, and Accountability
28:54 - Preparing for a Deepfake-Proof Future

Resources: 
Find Vijay on Twitter: https://x.com/vijay_voice
Find Martin on Twitter: https://x.com/martin_casado

Let us know what you think: https://ratethispodcast.com/a16z 
Find a16z on Twitter: https://twitter.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Subscribe on your favorite podcast app: https://a16z.simplecast.com/ 
Follow our host: https://twitter.com/stephsmithio 

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
there has been a, 1400% increase in the

00:00:04 --> 00:00:09
amount of deep fakes we've seen this

00:00:06 --> 00:00:12
year in the first 6 months compared to

00:00:08 --> 00:00:13
all of last year so my dad jumps on the

00:00:11 --> 00:00:17
line and he's like I just talked to you

00:00:12 --> 00:00:20
were in prison and I'm leaving to go

00:00:16 --> 00:00:22
bring $10,000 of bail money to you I'm

00:00:19 --> 00:00:25
like what are you talking about at the

00:00:21 --> 00:00:28
nd of last year there were 120 tools

00:00:24 --> 00:00:31
with which you can clone someone's voice

00:00:27 --> 00:00:35
and by March of this year it's become

00:00:30 --> 00:00:38
350 being able to identify what is real

00:00:34 --> 00:00:40
is going to become really important

00:00:37 --> 00:00:41
especially because now you can do all of

00:00:39 --> 00:00:44
these things at

00:00:40 --> 00:00:44
[Music]

00:00:49 --> 00:00:55
scale we've been doing deep fake

00:00:51 --> 00:00:58
detection for like now 7 years even

00:00:55 --> 00:01:01
before that you have people manipulating

00:00:57 --> 00:01:04
audio and people manipulating video and

00:01:00 --> 00:01:07
you saw that Nancy Pelosi slurring in

00:01:03 --> 00:01:11
Her speech in the Rose Garden with all

00:01:06 --> 00:01:15
this um sure s visual all they did was

00:01:10 --> 00:01:16
low down the audio and you know it

00:01:14 --> 00:01:19
wasn't a deep fake it was actually a

00:01:15 --> 00:01:22
cheap fake right and so what changed is

00:01:19 --> 00:01:24
the ability to use uh what are known as

00:01:21 --> 00:01:28
generative adversarial networks to

00:01:23 --> 00:01:31
constantly improve uh things like voice

00:01:27 --> 00:01:34
cloning or video cloning or or uh

00:01:30 --> 00:01:36
essentially try to get the likeness of a

00:01:33 --> 00:01:39
person really close so it's essentially

00:01:35 --> 00:01:41
two systems competing against each other

00:01:38 --> 00:01:45
and the objective function is I'm going

00:01:40 --> 00:01:47
to get really close to Martin's voice

00:01:44 --> 00:01:49
and Martin's face and then the other

00:01:46 --> 00:01:51
system is trying to figure out okay what

00:01:48 --> 00:01:54
are the anomalies how do I you know can

00:01:50 --> 00:01:56
I still detect that it's a a a machine

00:01:53 --> 00:01:59
as opposed to a human so it's almost

00:01:55 --> 00:02:01
like a reverse touring test and so what

00:01:58 --> 00:02:03
ended up happening is once you start

00:02:00 --> 00:02:05
creating these ganss which are used in a

00:02:02 --> 00:02:08
lot of these spaces when you run them

00:02:04 --> 00:02:10
across multiple iterations the system

00:02:07 --> 00:02:13
becomes really really good cuz you train

00:02:09 --> 00:02:15
a deep learning neural network and

00:02:12 --> 00:02:17
that's where the Deep fake comes from

00:02:14 --> 00:02:20
and they became so good that lots of

00:02:16 --> 00:02:23
people have extreme difficulty

00:02:19 --> 00:02:26
differentiating between what is human

00:02:22 --> 00:02:28
d what is machine deep fakes are more

00:02:25 --> 00:02:31
talked about now than they were in the

00:02:27 --> 00:02:34
past right yeah and so clearly the seems

00:02:30 --> 00:02:36
to have coincided with a generative AI

00:02:33 --> 00:02:39
wave right and so do you think it's fair

00:02:35 --> 00:02:41
to say that there's a new type of deep

00:02:38 --> 00:02:44
fake that is drafted on the generative

00:02:40 --> 00:02:47
AI wave yeah you know generative AI has

00:02:43 --> 00:02:49
allowed for combinations of wonderful

00:02:46 --> 00:02:52
things but when we started there was

00:02:48 --> 00:02:54
just one Tool uh that you know could

00:02:51 --> 00:02:56
clone your voice right like it was

00:02:53 --> 00:02:58
called liar bird incredible tool was

00:02:55 --> 00:03:01
used for lots of great

00:02:57 --> 00:03:03
applications uh at the end of last year

00:03:00 --> 00:03:07
there were 120 tools with which you can

00:03:02 --> 00:03:09
clone someone's voice and by March of

00:03:06 --> 00:03:11
this year it's become

00:03:08 --> 00:03:15
350 uh and there's a lot of open- source

00:03:10 --> 00:03:18
tools that you can use to essentially

00:03:14 --> 00:03:21
mimic someone's Voice or to mimic

00:03:17 --> 00:03:24
someone's likeness and that's the ease

00:03:20 --> 00:03:26
with which this has happened uh

00:03:23 --> 00:03:29
essentially the cost of doing this has

00:03:25 --> 00:03:32
become close to zero because all it

00:03:28 --> 00:03:35
requires for me to clone your voice

00:03:31 --> 00:03:37
Martin now requires about 3 to 5 Seconds

00:03:34 --> 00:03:40
of your audio and if I want a really

00:03:36 --> 00:03:43
high quality deep fake it requires about

00:03:39 --> 00:03:46
15 seconds of audio compare this to

00:03:42 --> 00:03:49
before the generative AI boom where John

00:03:45 --> 00:03:53
Legend wanted to become the voice of

00:03:48 --> 00:03:55
Google home and he spent like close to

00:03:52 --> 00:03:58
20 hours recording him saying a whole

00:03:54 --> 00:04:01
bunch of things so that Google home

00:03:57 --> 00:04:04
could say in San Francisco your the is

00:04:00 --> 00:04:06
37° or whatever right like so the fact

00:04:03 --> 00:04:09
is that he had to go into a studio spend

00:04:05 --> 00:04:13
20 odd hours recording his voice in

00:04:08 --> 00:04:15
order for you to do that compared to 15

00:04:12 --> 00:04:17
seconds and 300 different tools

00:04:14 --> 00:04:20
available to do it I don't know if you

00:04:16 --> 00:04:21
remember this VJ but this wasn't too

00:04:19 --> 00:04:24
long ago when I was I was in

00:04:20 --> 00:04:27
Japan and um you know I got this call

00:04:23 --> 00:04:28
from my parents which I never do and my

00:04:26 --> 00:04:30
mom's like where are you right now and

00:04:27 --> 00:04:32
I'm like I'm in Japan and my mom was

00:04:29 --> 00:04:35
like no you're not and I'm like yes I am

00:04:31 --> 00:04:38
she says hold on let me get your father

00:04:34 --> 00:04:40
so my dad jumps on the line and he's

00:04:37 --> 00:04:41
like where are you I'm in Japan he's

00:04:39 --> 00:04:44
like I just talked to you you were in

00:04:40 --> 00:04:48
prison and I'm leaving to go bring

00:04:43 --> 00:04:49
$10,000 of bail money to you I'm like

00:04:47 --> 00:04:51
what are you talking about and he's like

00:04:48 --> 00:04:54
listen I someone called and said that

00:04:50 --> 00:04:56
you had a car accident and you know

00:04:53 --> 00:05:01
you're were a bit muffled because you

00:04:55 --> 00:05:04
know you were um you know hurt

00:05:00 --> 00:05:06
uh and that I needed to bring cash to a

00:05:03 --> 00:05:07
certain area and like your mom just

00:05:05 --> 00:05:09
hought to call you while I was heading

00:05:06 --> 00:05:11
out the door right so of course we

00:05:08 --> 00:05:14
called the police after this and they

00:05:10 --> 00:05:16
said this is a well-known scam that's

00:05:13 --> 00:05:20
been going on for a very long time and

00:05:15 --> 00:05:21
it's probably just you know someone that

00:05:19 --> 00:05:24
ried to sound like you and muffling

00:05:20 --> 00:05:28
their voice right and so it seems that

00:05:23 --> 00:05:29
calling somebody and austing the voice

00:05:27 --> 00:05:32
to trick people has been around for a

00:05:28 --> 00:05:35
very long time so so maybe just from

00:05:31 --> 00:05:38
your perspective like do we need a new

00:05:34 --> 00:05:40
term for like these generative AI fakes

00:05:37 --> 00:05:42
because they're somehow fundamentally

00:05:39 --> 00:05:44
different or is this just kind of more

00:05:41 --> 00:05:45
of the same and we shouldn't really

00:05:43 --> 00:05:47
worry too much about it because we've

00:05:44 --> 00:05:49
been dealing with it for a long time

00:05:46 --> 00:05:52
yeah so it's interesting it happened to

00:05:48 --> 00:05:55
you in Japan man because the origin of

00:05:51 --> 00:05:57
that scam this was like close to uh 8 n

00:05:54 --> 00:06:01
years back when I was talking about

00:05:56 --> 00:06:03
voice fraud the Japanese audience talked

00:06:00 --> 00:06:07
to me about oriori Sagi which is helped

00:06:02 --> 00:06:09
me grandma so it's exactly that but at

00:06:06 --> 00:06:12
hat point in time it had it had started

00:06:08 --> 00:06:15
costing Japan close to half a billion

00:06:11 --> 00:06:18
dollars in people losing their life

00:06:14 --> 00:06:21
savings to the scam what's changed is

00:06:17 --> 00:06:24
the scale and the ability to actually

00:06:20 --> 00:06:26
mimic your voice the fact is that now

00:06:23 --> 00:06:31
you have so many tools that anyone can

00:06:25 --> 00:06:33
do it super easily two before

00:06:30 --> 00:06:34
if you had some sort of an accent and

00:06:32 --> 00:06:38
things like that they couldn't quite

00:06:34 --> 00:06:41
mimic your uh your real voice but now

00:06:37 --> 00:06:44
because it's 15 seconds your grandson

00:06:40 --> 00:06:46
could have a 15-second Tik Tok video and

00:06:43 --> 00:06:48
that's all it's required not even 15

00:06:45 --> 00:06:49
seconds with 5 Seconds and if depending

00:06:47 --> 00:06:52
upon the demographic you can get a

00:06:48 --> 00:06:55
pretty good clone so what's changed is

00:06:51 --> 00:06:58
the ability to scale this and then these

00:06:54 --> 00:07:00
fraudsters are combining uh these

00:06:57 --> 00:07:04
systems these text to speech systems

00:06:59 --> 00:07:05
with llm models so now you have a system

00:07:03 --> 00:07:09
that you're saying okay when the person

00:07:04 --> 00:07:12
says something give me respond back in a

00:07:08 --> 00:07:15
particular way crafted by the llm and

00:07:11 --> 00:07:17
here is the crazy thing right like in

00:07:14 --> 00:07:19
llms Hallucination is a problem so the

00:07:16 --> 00:07:21
fact that you're making up is a bad

00:07:18 --> 00:07:23
idea yeah yeah but if you have to make

00:07:20 --> 00:07:26
up to convince

00:07:22 --> 00:07:29
someone great perfect that's right yeah

00:07:25 --> 00:07:33
and it's crazy we see fraud where the

00:07:28 --> 00:07:35
llm is coming up with crazy crazy ways

00:07:32 --> 00:07:37
to convince you that something bad is

00:07:34 --> 00:07:39
happening you probably are the world's

00:07:36 --> 00:07:41
expert on voice fraud you've probably

00:07:38 --> 00:07:43
seen more types of voice fraud than you

00:07:40 --> 00:07:45
know any single person on the planet so

00:07:42 --> 00:07:47
I'm just wondering if you could like we

00:07:44 --> 00:07:49
know of the odod Sagi which is basically

00:07:46 --> 00:07:53
what I got hit with can you maybe talk

00:07:48 --> 00:07:55
through some other kind of use cases for

00:07:52 --> 00:07:57
uses of deep fakes that are prevalent

00:07:54 --> 00:07:59
oday deep fakes right now you can see

00:07:56 --> 00:08:01
right in the political Spectrum they're

00:07:58 --> 00:08:04
there right like so election

00:08:00 --> 00:08:06
misinformation with uh President Biden's

00:08:03 --> 00:08:07
campaign happened we were the ones who

00:08:05 --> 00:08:10
caught it and identified it and things

00:08:06 --> 00:08:11
like that what was the the specifics are

00:08:09 --> 00:08:14
you allowed to talk about yeah yeah no

00:08:11 --> 00:08:16
for sure right so what happened is

00:08:13 --> 00:08:18
early on this year and you know if you

00:08:15 --> 00:08:22
think about deep fakes they affect three

00:08:17 --> 00:08:24
big areas Commerce uh media uh and

00:08:21 --> 00:08:27
communication right and so this is news

00:08:23 --> 00:08:30
media social media so what happened is

00:08:26 --> 00:08:31
uh at the beginning of an election year

00:08:29 --> 00:08:34
you had the first case of election

00:08:30 --> 00:08:37
interference with everyone during the

00:08:33 --> 00:08:40
Republican primary in New Hampshire got

00:08:36 --> 00:08:42
a phone call that said what a bunch of

00:08:39 --> 00:08:44
Maly we know the value of voting

00:08:41 --> 00:08:46
Democratic when our votes count it's

00:08:43 --> 00:08:49
important that you save your vote for

00:08:45 --> 00:08:51
the November election and this was made

00:08:49 --> 00:08:53
in the voice of the president of the

00:08:50 --> 00:08:55
Free World right President Biden right

00:08:52 --> 00:08:58
like that's the craziness they went for

00:08:54 --> 00:09:00
the highest profile Target that came out

00:08:57 --> 00:09:02
and you know and people people were like

00:09:00 --> 00:09:04
okay is this really President Biden so

00:09:01 --> 00:09:07
not only did we come in and say this was

00:09:03 --> 00:09:09
a deep fake but we identified the we

00:09:06 --> 00:09:11
have something called Source tracing

00:09:08 --> 00:09:13
which tells us which AI application was

00:09:10 --> 00:09:15
used to create this deep fake so we

00:09:12 --> 00:09:17
identified the Deep fake and then we

00:09:14 --> 00:09:19
worked with that AI application they're

00:09:16 --> 00:09:21
an incredible company we worked with

00:09:18 --> 00:09:24
em and they immediately found the

00:09:21 --> 00:09:25
person who used that script and shut

00:09:23 --> 00:09:28
hem down so they couldn't create any

00:09:25 --> 00:09:31
other problem and then the later on

00:09:27 --> 00:09:33
regulation kicked in and they find the

00:09:30 --> 00:09:37
Telco providers who distributed these

00:09:32 --> 00:09:40
calls they find the political analyst

00:09:36 --> 00:09:42
who uh intentionally created these deep

00:09:39 --> 00:09:44
fakes but that was you know the first

00:09:41 --> 00:09:46
case of you know political uh

00:09:43 --> 00:09:49
misinformation you see this a lot was

00:09:46 --> 00:09:50
that this year yeah it was this year it

00:09:48 --> 00:09:52
was in January of this year that's

00:09:49 --> 00:09:55
amazing okay we've got a we've got a

00:09:51 --> 00:09:57
politics we've got builing old people

00:09:54 --> 00:09:59
yeah what are what maybe maybe one more

00:09:56 --> 00:10:01
good anecdote before we get into you

00:09:58 --> 00:10:02
know whether we can detect these things

00:10:00 --> 00:10:05
the one thing that's really close home

00:10:02 --> 00:10:08
is in Commerce right like you financial

00:10:04 --> 00:10:12
institutions generative AI came out in

00:10:07 --> 00:10:16
2022 in 2023 we were seeing essentially

00:10:11 --> 00:10:17
one deep fake a month in some customer

00:10:15 --> 00:10:20
ight so it was just one deep fake a

00:10:17 --> 00:10:22
month and some customer would face it it

00:10:19 --> 00:10:26
wasn't a widespread problem but this

00:10:21 --> 00:10:31
year we've now seen one deep fake per

00:10:25 --> 00:10:34
customer per day so it is rapidly

00:10:30 --> 00:10:36
exploded and we have certain customers

00:10:33 --> 00:10:41
like really big Banks who are getting a

00:10:35 --> 00:10:43
deep fake every 3 hours like it's insane

00:10:40 --> 00:10:47
the speed with so there there has been

00:10:42 --> 00:10:49
a, 1400% increase in the amount of deep

00:10:46 --> 00:10:52
fakes we've seen this year in the first

00:10:48 --> 00:10:54
6 months compared to all of last year

00:10:51 --> 00:10:55
and the year is not even over can you

00:10:53 --> 00:10:58
talk to like whether these things are

00:10:54 --> 00:11:01
detectable at all like is is this you

00:10:57 --> 00:11:03
know is this the beginning of the end or

00:11:00 --> 00:11:05
where are we uh Martin you've you've

00:11:02 --> 00:11:07
lived through many such Cycles where

00:11:04 --> 00:11:10
initially it feels like the sky is

00:11:06 --> 00:11:13
falling uh you know online fraud email

00:11:09 --> 00:11:15
spam there's a whole bunch of them uh

00:11:12 --> 00:11:17
but the situation is the same they're

00:11:14 --> 00:11:20
completely detectable right now we're

00:11:16 --> 00:11:22
detecting them with 99% detection rate

00:11:19 --> 00:11:25
with a 1% false positive rate so

00:11:21 --> 00:11:26
extremely high accuracy on being able to

00:11:24 --> 00:11:28
detect them just to put this in context

00:11:25 --> 00:11:31
what are numbers for like detecting like

00:11:27 --> 00:11:33
identifying voice not not fraud just

00:11:30 --> 00:11:35
like whether it's my voice so it's

00:11:32 --> 00:11:38
roughly about one in every 100,000 to

00:11:34 --> 00:11:40
ne in every million right like that's

00:11:37 --> 00:11:43
the ratio it's it's a it's much

00:11:39 --> 00:11:46
igher Precision for sure uh and M much

00:11:42 --> 00:11:48
igher specificity but yeah the Deep fix

00:11:45 --> 00:11:50
you're you're detecting with a 99%

00:11:47 --> 00:11:54
accuracy because when you think about

00:11:49 --> 00:11:57
even something like voice you have 8,000

00:11:53 --> 00:11:59
samples of your voice every single

00:11:56 --> 00:12:02
second even in the lowest Fidelity

00:11:58 --> 00:12:05
Channel which is the contact center and

00:12:01 --> 00:12:09
so you can actually see how the voice

00:12:04 --> 00:12:12
changes over time 8,000 times a second

00:12:08 --> 00:12:15
and what we find is these deep fix

00:12:11 --> 00:12:19
systems either on the frequency domain

00:12:14 --> 00:12:22
Su spectrally or on the time domain make

00:12:18 --> 00:12:23
mistakes and they make a lot of mistakes

00:12:21 --> 00:12:25
and the reason they make mistakes and

00:12:22 --> 00:12:29
still it's very clear is because think

00:12:24 --> 00:12:31
about it your human year can't look at

00:12:28 --> 00:12:34
anomalies 8,000 times a second if it did

00:12:30 --> 00:12:36
you'd go mad right like you'd have some

00:12:33 --> 00:12:38
serious problems so that's the reason

00:12:35 --> 00:12:40
you don't I mean like it's beautiful to

00:12:37 --> 00:12:44
your year you think it's Martin speaking

00:12:39 --> 00:12:47
on the other end but that's where you

00:12:43 --> 00:12:50
can use good AI which can actually look

00:12:46 --> 00:12:52
at things 8,000 times a second or in

00:12:49 --> 00:12:55
this like when we're doing most online

00:12:51 --> 00:12:57
conferencing like this podcast it's

00:12:54 --> 00:12:59
usually 16,000 so then you have 16,000

00:12:56 --> 00:13:02
samples of your voice and if you're

00:12:58 --> 00:13:04
doing music you have 44,000 samples of

00:13:01 --> 00:13:07
the musician's voice every single second

00:13:03 --> 00:13:09
so there's so much data and so many

00:13:06 --> 00:13:10
anomalies that you can actually detect

00:13:08 --> 00:13:13
hese pretty

00:13:09 --> 00:13:17
comfortably I I see a lot of proposals

00:13:12 --> 00:13:20
particularly from policy Circles of um

00:13:16 --> 00:13:22
using things like watermarking or

00:13:20 --> 00:13:24
cryptography you know which has always

00:13:21 --> 00:13:26
eemed kind of a strange idea to me

00:13:23 --> 00:13:29
because you're kind of

00:13:25 --> 00:13:33
asking criminals to comply by something

00:13:28 --> 00:13:36
or you know uh and so you know so I

00:13:32 --> 00:13:40
don't know like H how do you how do you

00:13:35 --> 00:13:42
view more active measures to like

00:13:39 --> 00:13:45
self-identify either legit or

00:13:41 --> 00:13:47
illegitimate traffic yeah see this is

00:13:44 --> 00:13:49
why you're in security Martin almost

00:13:46 --> 00:13:52
immediately you realize that most

00:13:48 --> 00:13:55
attackers will not comply to you putting

00:13:52 --> 00:13:57
in a watermark but even without putting

00:13:54 --> 00:13:59
in a watermark right like even if you

00:13:56 --> 00:14:01
didn't have an active adversary like the

00:13:58 --> 00:14:05
president Biden robocall that I

00:14:00 --> 00:14:08
referenced before when it finally showed

00:14:04 --> 00:14:10
up the system that actually generated it

00:14:07 --> 00:14:13
had a watermark in it but when they

00:14:09 --> 00:14:15
tested it again against that Watermark

00:14:12 --> 00:14:16
they only were able to extract 2% oh

00:14:14 --> 00:14:19
interesting so you mean the original

00:14:15 --> 00:14:22
Biden call had a watermark because it

00:14:18 --> 00:14:25
was generated by an AI app that included

00:14:21 --> 00:14:28
a watermark and then they and then they

00:14:24 --> 00:14:31
copy and 98% of that Watermark went away

00:14:27 --> 00:14:34
largely because when take that audio

00:14:30 --> 00:14:36
play it across air play it across teleph

00:14:33 --> 00:14:38
channels they're bits and bites they get

00:14:35 --> 00:14:40
stripped away and so once they get

00:14:37 --> 00:14:43
stripped away and audio is a very sparse

00:14:39 --> 00:14:45
channel so even if you add it over and

00:14:42 --> 00:14:48
over again it's it's not possible to do

00:14:45 --> 00:14:49
it so these watermarking

00:14:47 --> 00:14:51
techniques I mean they're a great

00:14:48 --> 00:14:54
echnique you always think about defense

00:14:50 --> 00:14:56
in depth where they're present you'll be

00:14:53 --> 00:14:59
able to identify a whole lot more

00:14:55 --> 00:15:01
genuine stuff with as a result of these

00:14:58 --> 00:15:03
watermarks but attackers are not going

00:15:00 --> 00:15:05
to comply it when you get videos like

00:15:02 --> 00:15:06
you know we are now working with news

00:15:04 --> 00:15:09
media

00:15:05 --> 00:15:11
organizations and 90% of the videos and

00:15:08 --> 00:15:17
audios they get from for example the

00:15:10 --> 00:15:20
Israel Hamas War are fake so we are how

00:15:16 --> 00:15:22
many how many 90% of them are fake what

00:15:19 --> 00:15:24
yeah like I guess I should be so

00:15:21 --> 00:15:26
surprised but they're all made up

00:15:23 --> 00:15:28
they're a different War some of them are

00:15:25 --> 00:15:31
cheap fakes some of them are actually

00:15:27 --> 00:15:34
deep fakes some of them are cluded

00:15:30 --> 00:15:38
together stuff uh and so uh being able

00:15:33 --> 00:15:40
to identify what is real is going to

00:15:37 --> 00:15:42
become really important especially

00:15:39 --> 00:15:44
because now you can do all of these

00:15:41 --> 00:15:48
things at scale can you draw how the

00:15:43 --> 00:15:51
Metra in AI technology impacts this

00:15:47 --> 00:15:53
because clearly something happened in

00:15:50 --> 00:15:56
the last year to make this economic for

00:15:52 --> 00:15:58
attackers which we seeing a rise and

00:15:55 --> 00:16:00
clearly it's going to keep getting

00:15:57 --> 00:16:03
better yeah you know so one of the

00:15:59 --> 00:16:06
things that we uh uh uh talk about is

00:16:02 --> 00:16:08
any deep fake system should have strong

00:16:05 --> 00:16:11
resilience built in it so it should not

00:16:08 --> 00:16:13
just be good about detecting deep fakes

00:16:10 --> 00:16:16
right now it should be able to detect

00:16:12 --> 00:16:18
what we call zero day deep fakes new

00:16:15 --> 00:16:20
system gets created how do you detect

00:16:17 --> 00:16:23
hat deep fake and there is essentially

00:16:19 --> 00:16:26
the mental model is the following one

00:16:22 --> 00:16:28
deep fake architectures are not simple

00:16:25 --> 00:16:31
monolithic systems they have like

00:16:27 --> 00:16:32
several components with within them and

00:16:30 --> 00:16:34
what ends up happening is each of these

00:16:31 --> 00:16:37
components tend to leave behind

00:16:33 --> 00:16:39
artifacts we call this a fake print so

00:16:36 --> 00:16:42
they all leave behind things that they

00:16:38 --> 00:16:44
do poorly right and so when you actually

00:16:41 --> 00:16:46
create a new system you often find

00:16:43 --> 00:16:48
they've pulled together pieces of other

00:16:45 --> 00:16:50
systems and those leave behind their

00:16:47 --> 00:16:53
older fake prints and so you can

00:16:49 --> 00:16:56
actually detect newer systems because

00:16:52 --> 00:17:00
they usually only uh improvise on one

00:16:55 --> 00:17:02
component the second is we actually run

00:16:59 --> 00:17:04
Gans so you get these Gans to compete

00:17:01 --> 00:17:05
like we create our own deep fake

00:17:03 --> 00:17:07
detection system now we say how do you

00:17:04 --> 00:17:09
beat that and we have multiple

00:17:06 --> 00:17:10
iterations of them running and we're

00:17:08 --> 00:17:11
constantly running them oh wait wait

00:17:09 --> 00:17:14
I say sorry I just want to make

00:17:10 --> 00:17:16
sure that I understand here so so you're

00:17:13 --> 00:17:18
creating your own deep fake system using

00:17:15 --> 00:17:19
the approach you talked about before

00:17:17 --> 00:17:21
which is these General adversarial

00:17:18 --> 00:17:23
Network so then you can then you can

00:17:20 --> 00:17:25
create a good deep fake and then you can

00:17:22 --> 00:17:27
create a detection for that is that

00:17:24 --> 00:17:29
right exactly and then you beat that

00:17:26 --> 00:17:32
detection system and you run that it

00:17:28 --> 00:17:34
ation iteration iteration and then

00:17:31 --> 00:17:38
what you find is actually something

00:17:33 --> 00:17:42
really interesting which is if a deep

00:17:37 --> 00:17:44
fake system has to serve two masters

00:17:41 --> 00:17:47
that is one I need to make the speech

00:17:43 --> 00:17:49
legible and sound as much like Martin

00:17:46 --> 00:17:52
and two I need

00:17:48 --> 00:17:55
to uh deceive a deep fake detection

00:17:52 --> 00:17:58
system those two objective functions

00:17:54 --> 00:18:01
tart diverging so for example I could

00:17:57 --> 00:18:03
start adding noise and noise is a great

00:18:00 --> 00:18:05
way to avoid you from understanding my

00:18:02 --> 00:18:09
limitations but if I start adding too

00:18:04 --> 00:18:11
much noise it stops I can't hear it so

00:18:08 --> 00:18:13
for example you know we were called into

00:18:10 --> 00:18:16
ne of these deep fakes where LeBron

00:18:12 --> 00:18:18
James apparently was saying bad things

00:18:15 --> 00:18:21
about the coach during the Paris

00:18:17 --> 00:18:23
Olympics it wasn't LeBron James it was a

00:18:20 --> 00:18:26
deep fake we actually provided his uh

00:18:22 --> 00:18:30
organ his management team the necessary

00:18:25 --> 00:18:32
detail so that in X it could be labeled

00:18:29 --> 00:18:35
as AI generated content but if you look

00:18:31 --> 00:18:37
at the audio there was a lot of noise

00:18:34 --> 00:18:40
introduced into it right to try and

00:18:36 --> 00:18:40
avoid

00:18:42 --> 00:18:50
[Music]

00:18:47 --> 00:18:53
detection lots of people couldn't even

00:18:49 --> 00:18:55
hear the audio they were like is this

00:18:52 --> 00:18:58
really and so that's where you start

00:18:54 --> 00:19:00
seeing these systems diverge and this is

00:18:57 --> 00:19:03
where I have confidence in our to detect

00:18:59 --> 00:19:05
it right like which is you run these

00:19:02 --> 00:19:07
ganss you know the architectures that

00:19:04 --> 00:19:09
hese deep fig generation systems are

00:19:06 --> 00:19:11
created and ultimately you start seeing

00:19:08 --> 00:19:13
divergences in one of the objective

00:19:10 --> 00:19:15
functions so either you as a human will

00:19:12 --> 00:19:16
be able to detect something's off or we

00:19:14 --> 00:19:18
as a system will be able to detect

00:19:15 --> 00:19:22
something's off I mean one of the

00:19:17 --> 00:19:25
reasons that spam works and and um deep

00:19:21 --> 00:19:28
fakes work is just the marginal cost of

00:19:24 --> 00:19:30
the next call is so low that you can do

00:19:27 --> 00:19:33
these things in Mass right like marginal

00:19:29 --> 00:19:35
cost of the next spam email or whatever

00:19:32 --> 00:19:38
if it takes me a a dollar to generate

00:19:34 --> 00:19:40
nd deep fakes yeah how much does it

00:19:37 --> 00:19:43
cost to detect and deep fakes is it one

00:19:39 --> 00:19:47
to one is it 10 to one is it 100 to one

00:19:42 --> 00:19:49
yeah it's way cheaper to detect deep fix

00:19:46 --> 00:19:51
right because if you think about it the

00:19:48 --> 00:19:55
closest example is Apple released its

00:19:50 --> 00:19:58
model you know that could run on device

00:19:54 --> 00:20:01
and even that model which is a small

00:19:57 --> 00:20:04
model in order to do lots of things like

00:20:00 --> 00:20:06
voice uh to text and things like that

00:20:03 --> 00:20:09
our model is about 100 times smaller

00:20:05 --> 00:20:12
than that so it's so much faster in

00:20:08 --> 00:20:15
detecting deep fix so the the ratio is

00:20:11 --> 00:20:18
about 100th right now and we're

00:20:14 --> 00:20:21
constantly figuring out ways to make it

00:20:17 --> 00:20:25
even cheaper but it's 100th that of

00:20:20 --> 00:20:28
generation wow I see so detect it is two

00:20:24 --> 00:20:30
rders of magnitude cheaper than

00:20:27 --> 00:20:34
creation which means in order for

00:20:29 --> 00:20:35
anybody to you know to economically get

00:20:33 --> 00:20:36
you know listen if there is no defense

00:20:34 --> 00:20:39
there's no defense but if there is a

00:20:35 --> 00:20:41
defense it requires the bad guys to have

00:20:38 --> 00:20:44
you know two orders of magnitude more

00:20:40 --> 00:20:46
sources which yeah is actually pretty

00:20:43 --> 00:20:47
dramatic given normally you go for

00:20:45 --> 00:20:49
parody on these things because there

00:20:46 --> 00:20:52
tends to be a lot more good people than

00:20:48 --> 00:20:54
bad people yeah yeah and that's the

00:20:51 --> 00:20:55
thing you have two orders of magnitude

00:20:53 --> 00:20:57
and then the fact is that once you know

00:20:54 --> 00:20:59
hat a deep fake looks like unless they

00:20:56 --> 00:21:02
rearchitecturing

00:20:58 --> 00:21:04
the only companies that re architect

00:21:01 --> 00:21:07
full pipelines and the last time this

00:21:03 --> 00:21:10
was done is back when Google released

00:21:06 --> 00:21:11
tatron where they re architected several

00:21:09 --> 00:21:14
pieces of the pipeline it's a very

00:21:11 --> 00:21:15
expensive proposition is the intuitive

00:21:13 --> 00:21:17
reason that the cost is so much cheaper

00:21:14 --> 00:21:19
to detect is this you just have to do

00:21:16 --> 00:21:21
less stuff like the the person generated

00:21:18 --> 00:21:24
the Deep fake has to like sound like a

00:21:20 --> 00:21:26
human be passable to a human and evade

00:21:23 --> 00:21:27
this and so like that's just more things

00:21:25 --> 00:21:29
than detecting it which just can be much

00:21:26 --> 00:21:31
more narrow Focus so it'll always be

00:21:28 --> 00:21:34
cheap ER to detect and then you don't

00:21:30 --> 00:21:37
see you don't see a period in time where

00:21:33 --> 00:21:39
the AI is so good no deep fake mechanism

00:21:36 --> 00:21:41
can detected you don't see that uh we

00:21:38 --> 00:21:43
don't see that because either you're

00:21:40 --> 00:21:47
become so good at avoiding detection

00:21:42 --> 00:21:50
that you actually start becoming worse

00:21:46 --> 00:21:53
at producing human generated speech or

00:21:49 --> 00:21:56
you're producing human generated speech

00:21:52 --> 00:21:59
and unless you know you actually create

00:21:55 --> 00:22:01
a physical representation of a human

00:21:58 --> 00:22:03
because we've had 10,000 years of

00:22:00 --> 00:22:06
evolution and the way we produce speech

00:22:02 --> 00:22:08
as vocal cords has the diaphragm has

00:22:05 --> 00:22:11
your lips and your mouth and your nasal

00:22:07 --> 00:22:13
cavity all of that physical attributes

00:22:10 --> 00:22:16
it's really hard for these systems to

00:22:12 --> 00:22:18
replicate all of that they have generic

00:22:15 --> 00:22:20
models and those generic models are good

00:22:17 --> 00:22:23
you can also think about the more we

00:22:19 --> 00:22:26
learn about your voice Martin the better

00:22:22 --> 00:22:28
we can get at knowing where your voice

00:22:25 --> 00:22:30
is deviating and I have an incentive as

00:22:27 --> 00:22:31
a good guy to work with you on that

00:22:29 --> 00:22:32
right so like you'll have access to data

00:22:30 --> 00:22:34
where like the bad people may not have

00:22:31 --> 00:22:36
access to data and it totally makes

00:22:33 --> 00:22:39
ense yeah so it's interesting so it

00:22:35 --> 00:22:41
seems to me like almost like the spam

00:22:38 --> 00:22:43
Lessons Learned apply here

00:22:40 --> 00:22:47
which is Spam can be very effective for

00:22:42 --> 00:22:49
attackers very effective um defenses can

00:22:46 --> 00:22:51
also be incredibly effective however you

00:22:48 --> 00:22:52
have to put them in place and so is it

00:22:50 --> 00:22:54
his the same situation here which is

00:22:51 --> 00:22:56
like be sure you have a strategy for

00:22:53 --> 00:22:58
deep fake detection but if you do you'll

00:22:55 --> 00:23:00
be okay that's exactly right and I think

00:22:57 --> 00:23:01
you know it has has to be in each of the

00:22:59 --> 00:23:04
areas right like when you think about

00:23:00 --> 00:23:06
deep fix you know you have incredible AI

00:23:04 --> 00:23:08
applications that are doing wonderful

00:23:05 --> 00:23:10
things in each of these PES like you

00:23:07 --> 00:23:12
know the voice cloning apps they've

00:23:09 --> 00:23:15
actually given voices to people who who

00:23:12 --> 00:23:17
have uh throat cancer and things like

00:23:14 --> 00:23:19
that right but in each of those

00:23:16 --> 00:23:23
situations it was with the consent of

00:23:18 --> 00:23:27
the user who you know who wanted their

00:23:22 --> 00:23:30
voice recreated right and so that notion

00:23:26 --> 00:23:32
that the source AI applications need to

00:23:29 --> 00:23:34
make sure that the people using their

00:23:31 --> 00:23:37
platform actually are the people who

00:23:33 --> 00:23:39
want to use their platform that's part A

00:23:36 --> 00:23:41
and this this is where the Partnerships

00:23:38 --> 00:23:43
that you talked about with the actual

00:23:40 --> 00:23:44
generation companies comes in so that

00:23:42 --> 00:23:46
you can help them for like the

00:23:43 --> 00:23:48
legitimate use cases as well as sniffing

00:23:46 --> 00:23:52
out the illegitimate one is that right

00:23:47 --> 00:23:55
yeah absolutely 11 Labs incredible the

00:23:51 --> 00:23:58
amount of work they're doing to uh

00:23:54 --> 00:24:01
create voices ethically and safely and

00:23:57 --> 00:24:03
carefully is incredible they're trying

00:24:00 --> 00:24:05
to get lots of great tools out there

00:24:02 --> 00:24:08
we're partnering with them they're

00:24:04 --> 00:24:09
making their data sets accessible to us

00:24:07 --> 00:24:12
there are companies like that right

00:24:08 --> 00:24:14
here's another company called uh reeeer

00:24:11 --> 00:24:16
that's doing uh that did a lot of the

00:24:13 --> 00:24:18
Hollywood movies so all of these

00:24:15 --> 00:24:21
companies are starting to partner in

00:24:17 --> 00:24:24
order to be able to do this in in the

00:24:20 --> 00:24:27
right way uh and it's similar to uh you

00:24:23 --> 00:24:30
know a lot of what happened in the you

00:24:26 --> 00:24:32
know fraud situation back in the 2000s

00:24:29 --> 00:24:35
or the email spam situation back in the

00:24:31 --> 00:24:38
2000s I want to shift over to policy um

00:24:34 --> 00:24:41
so I I've been in a lot of policy

00:24:37 --> 00:24:43
discussions lately at you know in the

00:24:40 --> 00:24:45
California in California as well as at

00:24:42 --> 00:24:48
he federal level and so have you given

00:24:44 --> 00:24:49
thought to what guidance you would give

00:24:47 --> 00:24:52
to policy makers many of who listen to

00:24:49 --> 00:24:55
this podcast and how they should think

00:24:51 --> 00:24:57
about you know any regulations or rules

00:24:54 --> 00:24:58
around this and maybe how it intersects

00:24:56 --> 00:25:00
with things like Innovation and Free

00:24:57 --> 00:25:04
Speech Etc I it's a complicated topic I

00:24:59 --> 00:25:06
think the the simple oneliner answer

00:25:03 --> 00:25:09
is they should make it really difficult

00:25:06 --> 00:25:11
for thread actors and really flexible

00:25:08 --> 00:25:14
for creators right like that's the

00:25:11 --> 00:25:17
ultimate difference and so and and you

00:25:14 --> 00:25:19
know history is rif with a lot of great

00:25:16 --> 00:25:22
ways right like you live through the

00:25:18 --> 00:25:25
mail days where the can spam act uh was

00:25:21 --> 00:25:28
a great way but it came in combination

00:25:24 --> 00:25:30
with better ml Technologies right maybe

00:25:27 --> 00:25:33
you just walk through how can spam works

00:25:29 --> 00:25:36
I think it's a good analog the can spam

00:25:32 --> 00:25:39
Act is one where you know anyone who's

00:25:35 --> 00:25:41
providing unsolicited marketing have to

00:25:38 --> 00:25:44
has to be clear on its headers has to

00:25:40 --> 00:25:46
allow you to opt out all of those things

00:25:43 --> 00:25:51
and if you don't follow this very strict

00:25:46 --> 00:25:53
set of policies you can be fined and you

00:25:50 --> 00:25:55
also have great detection technologies

00:25:52 --> 00:25:56
that allow you to detect these spams

00:25:54 --> 00:25:58
right like now that you follow a

00:25:55 --> 00:25:59
particular standard especially when

00:25:57 --> 00:26:01
you're doing unsolved solicited

00:25:58 --> 00:26:03
marketing or you're trying to do you

00:26:00 --> 00:26:06
know bad things like pornography or

00:26:02 --> 00:26:08
things like that you have detection AIML

00:26:05 --> 00:26:10
technologies that can detect you well

00:26:07 --> 00:26:13
the same thing happened when you know

00:26:09 --> 00:26:16
lots of uh when Banks went online right

00:26:12 --> 00:26:18
like you had a lot of online fraud or

00:26:15 --> 00:26:20
e-commerce right you had a lot of online

00:26:17 --> 00:26:23
fraud and if you remember the know your

00:26:20 --> 00:26:26
customer Act and the anti anti-m

00:26:22 --> 00:26:30
laundering acts came in there so the

00:26:26 --> 00:26:32
onus was you as a organization have to

00:26:29 --> 00:26:35
know your customer you have to put in

00:26:31 --> 00:26:37
technology that knows your customer

00:26:34 --> 00:26:39
that's the guarantee and so you need

00:26:36 --> 00:26:42
technology after that you can do what

00:26:38 --> 00:26:45
you want and so I think what was really

00:26:41 --> 00:26:48
good about both of those cases is they

00:26:44 --> 00:26:50
got really specific on one what can the

00:26:47 --> 00:26:52
technology detect because if the

00:26:49 --> 00:26:54
technology can't detect it you can't

00:26:51 --> 00:26:56
litigate you can't like find the people

00:26:53 --> 00:26:58
who are misusing it and so on so what

00:26:55 --> 00:27:01
can the technology detect and two how do

00:26:58 --> 00:27:04
I make it really specific on what you

00:27:00 --> 00:27:07
can and cannot do in order to be able to

00:27:03 --> 00:27:09
do this and so I think those two were

00:27:06 --> 00:27:12
great examples of how we should think

00:27:09 --> 00:27:14
about litigation and in deep fake there

00:27:11 --> 00:27:16
is these this very clear thing right

00:27:13 --> 00:27:19
like you have Free Speech but for the

00:27:15 --> 00:27:21
longest time anytime you used free

00:27:18 --> 00:27:24
speech for fraud or you were trying to

00:27:20 --> 00:27:27
incite violence or you were trying to do

00:27:23 --> 00:27:29
bscene things these are clear places

00:27:26 --> 00:27:32
where the Free Speech Free Speech G go

00:27:28 --> 00:27:35
away so as long as you're not doing that

00:27:31 --> 00:27:38
right like I think if you're doing that

00:27:34 --> 00:27:40
you should be fined right and that's and

00:27:37 --> 00:27:42
you should have laws that protect you

00:27:39 --> 00:27:44
against that and that's where that's

00:27:41 --> 00:27:46
the model I like to think of but

00:27:43 --> 00:27:49
hen there's this kind of gray area of

00:27:45 --> 00:27:51
unwanted stuff right and The Unwanted

00:27:48 --> 00:27:54
stuff is like you know you didn't ask

00:27:50 --> 00:27:56
for it it may not be illegal but it's

00:27:53 --> 00:27:58
uper annoying and it's unwanted and it

00:27:55 --> 00:27:59
can fill your inbox and it can fill your

00:27:57 --> 00:28:02
whatever

00:27:58 --> 00:28:03
and for those you can put in rules

00:28:01 --> 00:28:06
because if somebody crosses those rules

00:28:02 --> 00:28:08
you can litigate them or you can opt out

00:28:05 --> 00:28:09
of it and so it kind of un regulates The

00:28:07 --> 00:28:10
Unwanted I could see that definitely

00:28:08 --> 00:28:12
happening here and then of course

00:28:09 --> 00:28:14
there's The Wanted stuff which you know

00:28:11 --> 00:28:15
like doesn't require any regulation and

00:28:13 --> 00:28:17
the only other thing that I'll say is

00:28:14 --> 00:28:19
right now because we consume things

00:28:16 --> 00:28:21
through a lot of

00:28:18 --> 00:28:24
platforms platforms should be held

00:28:20 --> 00:28:25
accountable at some level to you know

00:28:23 --> 00:28:28
clearly

00:28:25 --> 00:28:30
demarketing what is real and what is not

00:28:27 --> 00:28:33
right because otherwise it's going to be

00:28:29 --> 00:28:36
really hard for the average consumer to

00:28:32 --> 00:28:37
know that this is AI generated versus

00:28:35 --> 00:28:39
this is not so I think you know there's

00:28:36 --> 00:28:41
a certain amount of

00:28:38 --> 00:28:43
accountability there because the

00:28:40 --> 00:28:45
technology is where it is putting on the

00:28:42 --> 00:28:47
onus on the platforms to do best

00:28:44 --> 00:28:50
practices just like we did for spam

00:28:46 --> 00:28:52
right like I rely on Microsoft and

00:28:49 --> 00:28:53
Google for for the spam detection doing

00:28:51 --> 00:28:56
the same type of thing for the plat it

00:28:52 --> 00:28:58
sounds like a very very sensible

00:28:55 --> 00:29:00
recommendation so um key Point number

00:28:57 --> 00:29:02
one is you know deep fakes have been

00:28:59 --> 00:29:05
around for a long time we probably need

00:29:01 --> 00:29:07
a new name for this new generation and

00:29:04 --> 00:29:09
this isn't just like some hypothetical

00:29:06 --> 00:29:11
thing but you're seeing a massive

00:29:08 --> 00:29:14
increase you said as much as as as one

00:29:10 --> 00:29:19
per day and the cost to generate has

00:29:13 --> 00:29:21
gone way down um good news is that these

00:29:18 --> 00:29:23
things are imminently detectable and in

00:29:20 --> 00:29:26
your opinion will always be detectable

00:29:22 --> 00:29:28
if you have a solution in place yep and

00:29:25 --> 00:29:31
then as a result I think you know any

00:29:27 --> 00:29:33
policy should provide the guidance and

00:29:30 --> 00:29:35
maybe accountability for the platforms

00:29:32 --> 00:29:37
to detect it because we can actually

00:29:34 --> 00:29:40
detect it and so like listen it's

00:29:36 --> 00:29:41
omething for people to know about but

00:29:39 --> 00:29:43
you know it's not the end of the world

00:29:40 --> 00:29:45
and and you know policy makers don't

00:29:42 --> 00:29:47
have to regulate all of AI for this one

00:29:44 --> 00:29:49
specific use case is this a fair

00:29:46 --> 00:29:51
synopsis this is a beautiful synopsis

00:29:48 --> 00:29:54
Martin you've captured it really really

00:29:50 --> 00:29:57
well thank you so much for listening to

00:29:53 --> 00:29:59
the a16z podcast if You' made it this

00:29:56 --> 00:30:01
far don't forget to subscribe so that

00:29:58 --> 00:30:04
you are the first to get our exclusive

00:30:00 --> 00:30:09
video content or you can check out this

00:30:03 --> 00:30:09
video that we've hand selected for you

00:30:22 --> 00:30:27
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
