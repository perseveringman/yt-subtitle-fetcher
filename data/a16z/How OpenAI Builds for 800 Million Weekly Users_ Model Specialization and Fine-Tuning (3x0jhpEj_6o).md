---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "3x0jhpEj_6o"
title: "How OpenAI Builds for 800 Million Weekly Users: Model Specialization and Fine-Tuning"
video_url: "https://www.youtube.com/watch?v=3x0jhpEj_6o"
thumbnail_url: "https://i.ytimg.com/vi/3x0jhpEj_6o/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=3x0jhpEj_6o"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-11-28T14:00:12.000Z"
upload_date: "2025-11-28"
duration_seconds: 3202
duration_human: "53:22"
view_count: 9781
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:28:01.814Z"
---

# How OpenAI Builds for 800 Million Weekly Users: Model Specialization and Fine-Tuning

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=3x0jhpEj_6o
- video_id: 3x0jhpEj_6o
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-11-28T14:00:12.000Z
- upload_date: 2025-11-28
- duration: 53:22
- view_count: 9781
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

In this episode, a16z GP Martin Casado sits down with Sherwin Wu, Head of Engineering for the OpenAI Platform, to break down how OpenAI organizes its platform across models, pricing, and infrastructure, and how it is shifting from a single general-purpose model to a portfolio of specialized systems, custom fine-tuning options, and node-based agent workflows.

They get into why developers tend to stick with a trusted model family, what builds that trust, and why the industry moved past the idea of one model that can do everything. Sherwin also explains the evolution from prompt engineering to context design and how companies use OpenAI’s fine-tuning and RFT APIs to shape model behavior with their own data.
Highlights from the conversation include: 

• How OpenAI balances a horizontal API platform with vertical products like ChatGPT
• The evolution from Codex to the Composer model
• Why usage-based pricing works and where outcome-based pricing breaks
• What the Harmonic Labs and Rockset acquisitions added to OpenAI’s agent work
• Why the new agent builder is deterministic, node based, and not free roaming

Timestamps: 
00:00  Introduction
8:36  Horizontal vs vertical OpenAI  
12:18  Why you can’t “disintermediate” the model  
15:11  People build relationships with models  
17:30  Not one AGI model, but many  
20:10  Fine-tuning, RFT, and customer data choices  
24:44  Prompt engineering isn’t the point anymore  
28:06  What an “agent” really is  
31:55  How OpenAI thinks about pricing  
36:46  Why open-weights don’t kill the API  
42:57  Different stacks for text, images, video  
45:47  How the agent builder actually works

Stay Updated:

If you enjoyed this episode, be sure to like, subscribe, and share with your friends!

Find a16z on X: [https://x.com/a16z](https://x.com/a16z)

Find a16z on LinkedIn: [https://www.linkedin.com/company/a16z](https://www.linkedin.com/company/a16z)

Listen to the a16z Podcast on Spotify: [https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX](https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX)

Listen to the a16z Podcast on Apple Podcasts: [https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711](https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711)

Follow our host: [https://x.com/eriktorenberg](https://x.com/eriktorenberg)

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details, please see [a16z.com/disclosures](http://a16z.com/disclosures).

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
We want chat GBT as a first party app.

00:00:02 --> 00:00:07
First party app is a really great way to

00:00:04 --> 00:00:09
get 800 million wows or whatever now.

00:00:06 --> 00:00:10
>> Tenth of the globe, right? [laughter]

00:00:08 --> 00:00:11
>> Yeah. Yeah. 10% of the globe uses it

00:00:10 --> 00:00:13
>> every week. Every week.

00:00:10 --> 00:00:14
>> Yeah. Even within OpenAI, the the

00:00:12 --> 00:00:15
thinking was that there would be like

00:00:13 --> 00:00:16
one model that rose them all. It's like

00:00:14 --> 00:00:18
definitely completely changed. It's

00:00:15 --> 00:00:20
becoming increasingly clear that there

00:00:17 --> 00:00:21
will be room for a bunch of specialized

00:00:19 --> 00:00:22
models. There will likely be a

00:00:20 --> 00:00:24
proliferation of other types of model.

00:00:21 --> 00:00:26
Companies just have giant treasure

00:00:23 --> 00:00:27
troves of data that they are sitting on.

00:00:25 --> 00:00:29
The big unlock that has happened

00:00:26 --> 00:00:31
recently is with the reinforcement

00:00:28 --> 00:00:32
finetuning. With that setup, we're now

00:00:30 --> 00:00:34
letting you actually run RL, which

00:00:31 --> 00:00:37
allows you to leverage your data way

00:00:33 --> 00:00:37
more.

00:00:40 --> 00:00:44
Sherman, thanks very much for joining.

00:00:41 --> 00:00:45
So, we're being joined by Sherman Woo.

00:00:43 --> 00:00:47
Um, it'd be great actually if you

00:00:44 --> 00:00:48
provided the long form of your

00:00:46 --> 00:00:50
background as we get into this, just for

00:00:47 --> 00:00:51
those that that may not know you. I

00:00:49 --> 00:00:53
mean, I I view Sherman as one of the the

00:00:50 --> 00:00:54
top AI thought leaders, so I'm really

00:00:52 --> 00:00:55
looking forward to this.

00:00:53 --> 00:00:57
>> Yeah. Yeah. Thanks for having me. I'm

00:00:54 --> 00:00:58
really excited to be be on the

00:00:56 --> 00:01:00
podcast. Um, yeah. Yeah, a little bit

00:00:57 --> 00:01:01
more of my my background. So, uh maybe

00:00:59 --> 00:01:04
we can start from present day and go

00:01:00 --> 00:01:06
backwards. So, I I currently lead um the

00:01:03 --> 00:01:07
ngineering team for the for OpenAI's

00:01:05 --> 00:01:09
developer platform. So, the biggest

00:01:06 --> 00:01:10
product in there of course is the the

00:01:08 --> 00:01:12
API. Um

00:01:09 --> 00:01:14
>> is there more for the developer platform

00:01:11 --> 00:01:14
than the API? Um I just kind of assume

00:01:13 --> 00:01:16
there was synonymous.

00:01:13 --> 00:01:18
>> Well, so I I also think about uh other

00:01:15 --> 00:01:19
things that we put into our platform

00:01:17 --> 00:01:21
side. So, like technically our

00:01:18 --> 00:01:23
government work uh is is also like

00:01:20 --> 00:01:24
offering deploying this different areas.

00:01:22 --> 00:01:26
Yeah. Like I've talked about

00:01:24 --> 00:01:27
>> Oh, so you have like a local deployment

00:01:25 --> 00:01:28
like

00:01:26 --> 00:01:30
>> Yeah. Yeah. So, we actually do have a

00:01:27 --> 00:01:32
local deployment Atlas Alamos National

00:01:30 --> 00:01:34
Labs. It's super cool. I went to visit

00:01:31 --> 00:01:36
. It's like very different than what

00:01:33 --> 00:01:39
I'm used to. Um, but yeah, in a like,

00:01:35 --> 00:01:40
you know, classified supercomput with

00:01:38 --> 00:01:41
our with our model running there.

00:01:40 --> 00:01:44
That's cool.

00:01:40 --> 00:01:45
>> Um, so there's that. Um, but like mostly

00:01:43 --> 00:01:46
the the API. Um, cuz

00:01:44 --> 00:01:48
>> Did you go to Los Alamos?

00:01:45 --> 00:01:49
>> We did. Yeah, I did go to Los Alamos. It

00:01:47 --> 00:01:51
was great. They showed us around. They

00:01:48 --> 00:01:52
showed us some of the historic sites.

00:01:50 --> 00:01:53
Real history. Um, yeah.

00:01:51 --> 00:01:54
>> I used to work at Livermore, man. So,

00:01:52 --> 00:01:55
I've got like an

00:01:53 --> 00:01:56
>> Oh, yeah. Yeah. My first job out of

00:01:54 --> 00:01:57
college. So,

00:01:55 --> 00:01:58
>> Right. Right. Right. You sounded that

00:01:56 --> 00:02:00
next.

00:01:57 --> 00:02:02
>> Yeah. Yeah. Yeah. Well, we we hope to we

00:01:59 --> 00:02:04
hope to. Um but uh yeah, so I work on

00:02:02 --> 00:02:06
the developer platform. I've been

00:02:03 --> 00:02:08
working on it for around uh 3 years uh

00:02:05 --> 00:02:10
now. So I joined in 2022. Uh was

00:02:07 --> 00:02:12
basically hired to work on the the API

00:02:09 --> 00:02:14
product which at the time was the only

00:02:11 --> 00:02:15
product that that opening I had.

00:02:13 --> 00:02:17
>> Um and I've basically just worked on it

00:02:14 --> 00:02:18
he uh the entire time. Um I've always

00:02:16 --> 00:02:20
been super interested in the developer

00:02:17 --> 00:02:21
side and kind of like the startup story

00:02:19 --> 00:02:23
of this technology. And so it's been

00:02:20 --> 00:02:25
really really cool to kind of see see

00:02:22 --> 00:02:28
this evolve. And so um that's my time in

00:02:24 --> 00:02:30
OpenAI. Before OpenAI um I was at uh

00:02:27 --> 00:02:32
Open Door uh for around 6 years. I was

00:02:29 --> 00:02:33
working on the pricing side. My my

00:02:31 --> 00:02:34
general background before

00:02:32 --> 00:02:35
>> I think it's such a dissonant like you

00:02:33 --> 00:02:37
know [laughter]

00:02:34 --> 00:02:38
>> pricing at open door to like running API

00:02:36 --> 00:02:39
and

00:02:37 --> 00:02:41
>> it's such a different uh it's been

00:02:38 --> 00:02:42
fascinating actually for me to see the

00:02:40 --> 00:02:44
differences between the companies like

00:02:41 --> 00:02:45
they're run so differently. Um they both

00:02:43 --> 00:02:47
ave open in the name so there's some

00:02:44 --> 00:02:48
overlap but like that's bas that's

00:02:46 --> 00:02:49
pretty much it. Um

00:02:47 --> 00:02:51
>> but yeah I was there for around six

00:02:48 --> 00:02:53
years uh working on the pricing team. So

00:02:50 --> 00:02:55
ur team basically would run the ML

00:02:52 --> 00:02:58
models. This isn't actually pricing the

00:02:54 --> 00:03:00
assets on Open Door like the inventory.

00:02:57 --> 00:03:02
>> Exactly. So open so yeah, Open Door

00:02:59 --> 00:03:03
would buy and sell homes and their main

00:03:01 --> 00:03:05
project was buying homes directly from

00:03:02 --> 00:03:07
people selling them for with all cash

00:03:04 --> 00:03:09
offers and so my team was responsible

00:03:06 --> 00:03:11
for how much we would pay for them. Uh

00:03:08 --> 00:03:13
and so it was a really fun like ML

00:03:10 --> 00:03:14
challenge. Uh it had a huge operational

00:03:12 --> 00:03:16
element to it as well cuz not everything

00:03:14 --> 00:03:17
was automated obviously

00:03:15 --> 00:03:19
>> but it was a really fascinating

00:03:16 --> 00:03:20
technical challenge and um

00:03:18 --> 00:03:23
>> is there any sense of that on the API

00:03:19 --> 00:03:24
side like like GPU capacity buying or is

00:03:22 --> 00:03:26
it just totally unrelated?

00:03:23 --> 00:03:29
>> Oh on the on the API side um there's is

00:03:26 --> 00:03:31
a small bit of like how we price the the

00:03:28 --> 00:03:35
models but uh I don't think we do

00:03:30 --> 00:03:36
anything as sophisticated as uh uh as

00:03:34 --> 00:03:38
open door. Open door is just like such a

00:03:36 --> 00:03:41
hard problem. It's like such a like

00:03:37 --> 00:03:43
xpensive asset. It's like like the the

00:03:40 --> 00:03:44
holding costs are very expensive. You're

00:03:42 --> 00:03:46
like holding on to it for like months at

00:03:43 --> 00:03:46
a time. There's like a variability in

00:03:45 --> 00:03:49
like the holding time.

00:03:45 --> 00:03:49
>> A massive long tail of like potential

00:03:48 --> 00:03:51
things that could

00:03:48 --> 00:03:52
>> long tail. Yes. And like you know you

00:03:50 --> 00:03:54
have the you try to think about it from

00:03:51 --> 00:03:55
a portfolio perspective and like if one

00:03:53 --> 00:03:57
of them just like you're holding on it

00:03:54 --> 00:03:58
for two years it blows everything.

00:03:56 --> 00:04:01
>> Everything like goes negative. So it's

00:03:58 --> 00:04:03
uh it's a very very different different

00:04:00 --> 00:04:05
challenge. Yeah. Yeah. Six years there.

00:04:02 --> 00:04:07
>> Uh lots of up and downs. uh saw a lot of

00:04:04 --> 00:04:10
the booms, saw a lot of the struggles

00:04:06 --> 00:04:10
and then we IPOed uh before I before I

00:04:09 --> 00:04:12
left.

00:04:09 --> 00:04:14
>> Um but yeah, just in general it was a

00:04:12 --> 00:04:16
very great experience. I think uh for me

00:04:14 --> 00:04:20
it was uh it was also just like had such

00:04:16 --> 00:04:22
a very like business operations and like

00:04:19 --> 00:04:23
>> like a very like by the book type of

00:04:21 --> 00:04:24
culture whereas open is like very

00:04:22 --> 00:04:25
different.

00:04:23 --> 00:04:26
>> What's so interesting I was just

00:04:24 --> 00:04:27
hinking about it now is like even for a

00:04:25 --> 00:04:29
company like that like you don't think

00:04:26 --> 00:04:31
about it as a tech company but if there

00:04:28 --> 00:04:32
is a deep technology problem it actually

00:04:30 --> 00:04:33
is the pricing right. It's actually an

00:04:31 --> 00:04:35
ML problem. It's not what it drives.

00:04:32 --> 00:04:37
like the website, it's not the, you

00:04:34 --> 00:04:39
know, it's not the platform, it's like,

00:04:36 --> 00:04:40
it's not the API, it's literally that.

00:04:38 --> 00:04:41
>> Yep. Yep. Yep. And that's what attracted

00:04:39 --> 00:04:42
me to it. I think that's was

00:04:40 --> 00:04:44
interesting.

00:04:41 --> 00:04:46
>> Um, uh, it's also a way like lower

00:04:43 --> 00:04:48
margin business than, uh, OpenAI. Uh,

00:04:45 --> 00:04:50
cuz you're like making a tiny spread on

00:04:47 --> 00:04:52
these homes. Uh, they talk about like

00:04:49 --> 00:04:54
basis points like eating bits for

00:04:51 --> 00:04:55
breakfast and all that. So, um, anyways,

00:04:53 --> 00:04:58
I was at Open uh, Open Doorf around 6

00:04:54 --> 00:04:59
years. Um, and then before that, uh, was

00:04:57 --> 00:05:02
my first job out of college which was at

00:04:58 --> 00:05:03
Kora um, with Adam Dans from group

00:05:01 --> 00:05:04
there. Yeah. So I was working on the

00:05:02 --> 00:05:05
newsfeed. Oh yeah.

00:05:03 --> 00:05:07
>> Uh so worked on newsfeed ranking for a

00:05:04 --> 00:05:10
bit. Worked on the product side.

00:05:06 --> 00:05:12
>> Um but was uh that was actually my first

00:05:09 --> 00:05:15
exposure to like actual ML and industry

00:05:11 --> 00:05:17
and uh learned a lot from uh uh from

00:05:14 --> 00:05:18
the engineers at core. We basically

00:05:16 --> 00:05:19
hired a lot of the the early like feed

00:05:17 --> 00:05:20
engineers.

00:05:18 --> 00:05:20
>> Was Charlie still there when you were

00:05:19 --> 00:05:23
there?

00:05:20 --> 00:05:25
>> Charlie was not there when I when I

00:05:22 --> 00:05:28
right after that was a really legendary

00:05:24 --> 00:05:30
team, you know. I was still known to be

00:05:27 --> 00:05:32
kind of this super iconic founding team.

00:05:29 --> 00:05:33
>> Yeah. Yeah. the the the early founding

00:05:31 --> 00:05:35
team was really solid. I still think

00:05:32 --> 00:05:36
that even while I was there, I was I I

00:05:34 --> 00:05:38
still like am amazed at the quality of

00:05:35 --> 00:05:40
the talent that we had. Um I think

00:05:37 --> 00:05:42
there's like one company's like 50 to

00:05:39 --> 00:05:44
100 people, but like

00:05:41 --> 00:05:45
>> yeah, like a bunch of the perplexity

00:05:43 --> 00:05:50
team was there. Dennis Dennis was on the

00:05:44 --> 00:05:50
feed team with me. Uh uh uh Johnny Ho,

00:05:49 --> 00:05:53
Jerry Ma,

00:05:49 --> 00:05:56
>> that's right. And then Alexander the

00:05:52 --> 00:05:58
scale now, you know, like was there he

00:05:55 --> 00:06:00
was he was he was there between high

00:05:57 --> 00:06:01
school and college. Um it was an

00:05:59 --> 00:06:02
incredible team. I I don't think I I

00:06:00 --> 00:06:04
think I kind of took it for granted

00:06:01 --> 00:06:05
while I was there. It was a good group.

00:06:03 --> 00:06:07
But um

00:06:04 --> 00:06:09
>> uh and how did you how did you get to

00:06:06 --> 00:06:11
Kora? What did you study in undergrad?

00:06:08 --> 00:06:13
>> Yeah, so before that I was at MIT for

00:06:10 --> 00:06:14
undergrad. I studied computer science.

00:06:12 --> 00:06:16
Um uh did like one of those like

00:06:13 --> 00:06:17
computer science and the master's degree

00:06:15 --> 00:06:19
kind of like crammed it in.

00:06:16 --> 00:06:21
>> Um

00:06:18 --> 00:06:23
>> uh I ended up at CORE because I got an

00:06:20 --> 00:06:25
uh what we call an externship there. So

00:06:22 --> 00:06:27
like uh at MIT uh you actually get

00:06:24 --> 00:06:29
January off. So there's like the fall

00:06:26 --> 00:06:31
semester and then January's off and then

00:06:28 --> 00:06:32
you have uh the spring semester. And so

00:06:30 --> 00:06:34
it's kind of this it's called

00:06:31 --> 00:06:35
independent activities period. So some

00:06:33 --> 00:06:36
people just like take classes, some

00:06:34 --> 00:06:38
people just do nothing,

00:06:35 --> 00:06:40
>> but it's uh some people will do like

00:06:37 --> 00:06:41
month-long internships and some crazy

00:06:39 --> 00:06:43
companies will like offer a month-long

00:06:40 --> 00:06:45
internship to a college student. And it

00:06:42 --> 00:06:45
really is just kind of like a way to get

00:06:44 --> 00:06:48
uh people into

00:06:44 --> 00:06:52
>> Did you come out here from Boston or

00:06:47 --> 00:06:55
Yeah, it was crazy. So um so so so uh

00:06:51 --> 00:06:58
you had to apply. I remember uh yeah

00:06:54 --> 00:06:59
this is like I think 2013 uh January or

00:06:57 --> 00:07:00
something um you had apply and I

00:06:58 --> 00:07:02
remember the core internship was the one

00:06:59 --> 00:07:03
that just paid the most. They paid I

00:07:01 --> 00:07:04
think it was like $8,000 $9,000

00:07:02 --> 00:07:05
[laughter] and I was like wow that's

00:07:03 --> 00:07:07
like for a month and you're kind of

00:07:04 --> 00:07:08
ramping up like half the time

00:07:06 --> 00:07:09
>> I can eat for a year.

00:07:07 --> 00:07:11
>> Yeah. Yeah. As a college student like

00:07:08 --> 00:07:12
this like great and you get a and yeah

00:07:10 --> 00:07:14
they would they would kind of like fly

00:07:11 --> 00:07:16
out fly you out here and so I did the

00:07:13 --> 00:07:19
interviews and then luckily got an offer

00:07:15 --> 00:07:20
and so yeah I came out for a January. Um

00:07:18 --> 00:07:21
that was right when they moved into

00:07:19 --> 00:07:23
their new Mountain View office and I

00:07:20 --> 00:07:25
basically uh yeah honestly just ramped

00:07:22 --> 00:07:27
up for like 2 weeks and then had like

00:07:24 --> 00:07:28
two weeks of good productivity working

00:07:26 --> 00:07:30
on the feed team.

00:07:27 --> 00:07:33
>> So was that on the was that like userf

00:07:29 --> 00:07:34
acing like userf facing product? Yeah.

00:07:32 --> 00:07:36
>> Yeah. I I distinctly remember my

00:07:33 --> 00:07:37
externship project for those two weeks

00:07:35 --> 00:07:39
was just to like add a couple features

00:07:36 --> 00:07:40
to our feature store

00:07:38 --> 00:07:42
>> and like that would make its way into

00:07:39 --> 00:07:45
the model. Um I was just going to say my

00:07:41 --> 00:07:47
I remember my mentor there um was is

00:07:44 --> 00:07:50
tutor uh who's now running I think it's

00:07:46 --> 00:07:50
called harmonic labs. Yeah. Crazy team.

00:07:49 --> 00:07:52
Crazy.

00:07:49 --> 00:07:53
>> This is un I mean by the way I think

00:07:51 --> 00:07:55
it's one of the untold stories of

00:07:52 --> 00:07:56
Silicon Valley is like how good that

00:07:54 --> 00:07:58
original team ended is. I mean a lot of

00:07:55 --> 00:08:00
them are still you know there and still

00:07:57 --> 00:08:01
good but like like the diaspora from

00:07:59 --> 00:08:03
Kora is everywhere.

00:08:00 --> 00:08:04
>> Yeah. Yeah. Um that's actually how I

00:08:02 --> 00:08:06
ended up at OpenAI too. Kind of like you

00:08:03 --> 00:08:08
know fast forwarding from there cuz I

00:08:05 --> 00:08:10
open kind of kept a quiet profileish.

00:08:07 --> 00:08:13
Uh, but I'd always kind of kept tabs on

00:08:09 --> 00:08:14
them because a bunch of the Corora core

00:08:12 --> 00:08:15
people I knew kind of like ended up

00:08:13 --> 00:08:17
there just kind of like checking in on

00:08:14 --> 00:08:18
it and they were like, "Yeah,

00:08:16 --> 00:08:19
something crazy is happening here. You

00:08:17 --> 00:08:21
know, you should definitely check it

00:08:18 --> 00:08:23
out." Um, so yeah, I definitely owe a

00:08:20 --> 00:08:25
lot to to Kora. Um, but yeah, part of

00:08:22 --> 00:08:26
the reason why I went there versus other

00:08:24 --> 00:08:28
options as a new grad was the team was

00:08:25 --> 00:08:30
just so incredible and I just felt like

00:08:27 --> 00:08:32
I could learn a ton from them. I didn't

00:08:29 --> 00:08:32
hink about everything afterwards. I was

00:08:31 --> 00:08:34
just like, man, if I could just like

00:08:32 --> 00:08:36
absorb some knowledge from this like,

00:08:33 --> 00:08:36
you know, group of people, it' be it'd

00:08:35 --> 00:08:37
be great.

00:08:35 --> 00:08:39
>> Awesome.

00:08:36 --> 00:08:41
>> Yeah. So, one place I wanted to start um

00:08:38 --> 00:08:46
is uh something that I find very unique

00:08:40 --> 00:08:48
about um OpenAI uh is it's both a pretty

00:08:45 --> 00:08:51
horizontal company like it's got an API

00:08:47 --> 00:08:53
like I would say we've got this massive

00:08:50 --> 00:08:56
portfolio of companies right and I would

00:08:52 --> 00:08:58
say a good fraction of them use the the

00:08:55 --> 00:09:00
API and then it's also a vertical

00:08:57 --> 00:09:03
company in that you've got full-on apps

00:09:00 --> 00:09:06
right um you know like everybody uses

00:09:02 --> 00:09:08
chat GPT for example and so you know

00:09:05 --> 00:09:10
you're responsible for like the API and

00:09:07 --> 00:09:12
kind of the dev tools side. So maybe

00:09:09 --> 00:09:15
just to begin with like is there an

00:09:11 --> 00:09:18
internal tension between the two like is

00:09:14 --> 00:09:21
that a discussion like you know like

00:09:17 --> 00:09:24
the API may whatever it may help a

00:09:20 --> 00:09:26
competitor to like the vertical version

00:09:23 --> 00:09:27
or is it not things are just growing so

00:09:25 --> 00:09:29
fast it's not an issue. I would just

00:09:26 --> 00:09:30
love to how you think about that. By the

00:09:28 --> 00:09:31
way, it's very unusual for companies to

00:09:29 --> 00:09:32
have both of that these two things this

00:09:30 --> 00:09:34
early. It's very unusual.

00:09:31 --> 00:09:36
>> Yeah. Yeah. I completely agree. Uh I

00:09:33 --> 00:09:38
think there is there's there's some

00:09:35 --> 00:09:40
amount of tension. I uh I would say it's

00:09:37 --> 00:09:42
I think one thing that really helps here

00:09:39 --> 00:09:45
is uh Sam and Greg just from a like

00:09:41 --> 00:09:46
founder you know perspective have since

00:09:44 --> 00:09:48
day one just been very principled in in

00:09:46 --> 00:09:50
the way in which we approach this.

00:09:47 --> 00:09:52
They've always you know have kind of

00:09:49 --> 00:09:54
told us you know we want chatgbt as a

00:09:51 --> 00:09:56
first party app. uh we also want want

00:09:53 --> 00:09:58
he API and then and the nice thing is I

00:09:55 --> 00:09:59
think they're able to do this because uh

00:09:57 --> 00:10:00
at the end of the day it kind of comes

00:09:58 --> 00:10:02
back to the the mission of OpenAI which

00:10:00 --> 00:10:04
is uh to create AI and then to

00:10:01 --> 00:10:05
distribute the benefits as broadly as

00:10:03 --> 00:10:07
possible and so if you interpret this

00:10:04 --> 00:10:09
you want it in as many surfaces as as

00:10:06 --> 00:10:10
you want you and the first party app is

00:10:08 --> 00:10:12
a really great way to get you know I

00:10:09 --> 00:10:15
don't know it's like 800 million uh wows

00:10:11 --> 00:10:16
or whatever now and um uh but

00:10:14 --> 00:10:18
>> 100 million wows

00:10:15 --> 00:10:19
>> uh yeah it's pretty it's actually

00:10:17 --> 00:10:21
mindboggling to think about I don't

00:10:18 --> 00:10:24
hink many people listening to this

00:10:20 --> 00:10:24
don't understand how big that is That is

00:10:23 --> 00:10:25
crazy. Yeah,

00:10:23 --> 00:10:27
>> that's going to be like actually

00:10:24 --> 00:10:28
historic for the for the the time it's

00:10:26 --> 00:10:31
taken to get to 800 million.

00:10:28 --> 00:10:32
>> It's historic. It's um also just like

00:10:30 --> 00:10:33
Yeah. the amount of time and just like

00:10:31 --> 00:10:35
how much we've had to scale up

00:10:32 --> 00:10:36
>> like tenth of the globe, right?

00:10:34 --> 00:10:37
[laughter]

00:10:35 --> 00:10:38
>> Yeah. Yeah. 10% of the globe uses it

00:10:36 --> 00:10:40
>> every week. Every week.

00:10:37 --> 00:10:40
>> Yeah. And it's growing. And it's

00:10:39 --> 00:10:42
growing. So like at some point, you

00:10:39 --> 00:10:44
know, it'll hit like, you know, it'll go

00:10:41 --> 00:10:45
even higher than that. And so, um so

00:10:43 --> 00:10:47
yeah, obviously the reach there is is

00:10:44 --> 00:10:49
unmatched. But then also just like uh

00:10:46 --> 00:10:51
being able to have a platform where we

00:10:48 --> 00:10:52
can reach even more than just that. Like

00:10:50 --> 00:10:54
one thing we we talk about internally

00:10:51 --> 00:10:55
sometimes is like what does our end user

00:10:53 --> 00:10:57
each from the API like it's actually

00:10:54 --> 00:10:58
it's like really really it's really

00:10:56 --> 00:11:00
broad. It might might even it's hard

00:10:58 --> 00:11:02
because chat GB is growing so quickly

00:10:59 --> 00:11:04
but like it like at some points it was

00:11:01 --> 00:11:05
definitely larger than than chat GBT and

00:11:03 --> 00:11:07
the fact that we're able to get tap in

00:11:04 --> 00:11:08
all this and and and get the reach that

00:11:06 --> 00:11:09
we want I think is really good.

00:11:07 --> 00:11:12
>> Um but yeah I mean there's definitely

00:11:08 --> 00:11:13
some tension sometimes. I think the um I

00:11:11 --> 00:11:15
think it's come up in a couple places. I

00:11:12 --> 00:11:16
think uh one of them is is on the

00:11:14 --> 00:11:17
product side. So as you mentioned you

00:11:15 --> 00:11:20
know sometimes there are competitors

00:11:16 --> 00:11:22
kind of like building on our on our um

00:11:19 --> 00:11:24
>> platform um who you know might not be

00:11:21 --> 00:11:25
happy if chatbt launches something that

00:11:23 --> 00:11:25
competes with them.

00:11:24 --> 00:11:25
>> Yeah.

00:11:24 --> 00:11:27
>> Um

00:11:24 --> 00:11:28
>> I mean that you know that's the tale of

00:11:26 --> 00:11:30
the old is the cloud or operating

00:11:27 --> 00:11:33
systems or whatever. So like that's you

00:11:29 --> 00:11:36
know I think it's more like

00:11:32 --> 00:11:36
>> does chatbt worry about the competitor.

00:11:35 --> 00:11:38
Yeah.

00:11:35 --> 00:11:39
>> You know type thing like you know you

00:11:37 --> 00:11:41
enabling a competitor.

00:11:38 --> 00:11:43
>> Yeah. Yeah. So I mean uh the interesting

00:11:40 --> 00:11:44
thing is like I would say not

00:11:42 --> 00:11:46
particularly mostly just because we've

00:11:43 --> 00:11:48
been growing so quickly that I get it's

00:11:45 --> 00:11:50
just such a you know force right now.

00:11:48 --> 00:11:52
>> Yeah. Yeah. Growth solves so many so

00:11:49 --> 00:11:53
many different things and like and and

00:11:51 --> 00:11:54
the other way we think about is like

00:11:52 --> 00:11:56
veryone's kind of building building

00:11:53 --> 00:11:58
around AGI building towards AGI. Of

00:11:55 --> 00:12:00
course there's going to be some overlap

00:11:57 --> 00:12:02
um here. Um so yeah I mean but but I

00:11:59 --> 00:12:03
would say like at least in my position I

00:12:01 --> 00:12:04
feel more of this tension from the

00:12:02 --> 00:12:05
customer like the API customers

00:12:03 --> 00:12:07
themselves right like oh my gosh you

00:12:04 --> 00:12:08
know you're like are you going to build

00:12:06 --> 00:12:10
this thing that I'm working on? Yeah,

00:12:07 --> 00:12:12
that that story is as old as computer

00:12:09 --> 00:12:13
system. There's never not been a

00:12:11 --> 00:12:14
computer platform that didn't have that

00:12:12 --> 00:12:16
problem. So

00:12:13 --> 00:12:17
>> So, okay. So, I I I kind of go back and

00:12:15 --> 00:12:19
forth on this one. I want to try one out

00:12:16 --> 00:12:20
on you. Um

00:12:18 --> 00:12:24
>> which is the the the problem

00:12:19 --> 00:12:27
historically with, you know, offering um

00:12:24 --> 00:12:28
a core services and APIs, you can get

00:12:26 --> 00:12:30
disintermediated, right? And so I can

00:12:27 --> 00:12:33
build on top of it, but then you know

00:12:29 --> 00:12:34
the user doesn't know like whatever I

00:12:32 --> 00:12:36
build on top of the cloud, but I just

00:12:33 --> 00:12:38
remediate from the cloud and then I can

00:12:35 --> 00:12:39
switch to another cloud or whatever.

00:12:37 --> 00:12:42
>> And it occurs to me that that's kind of

00:12:38 --> 00:12:44
hard to do with these models because the

00:12:41 --> 00:12:46
models are so hard to abstract away.

00:12:44 --> 00:12:48
Like they're just they're just unruly,

00:12:45 --> 00:12:50
right? If you try to like have

00:12:47 --> 00:12:52
traditional software drive them, they

00:12:49 --> 00:12:54
just don't kind of manage very well. So

00:12:51 --> 00:12:55
part of me thinks that it's almost like

00:12:53 --> 00:12:57
this

00:12:54 --> 00:12:59
>> like anti-isintermediation

00:12:56 --> 00:13:02
technology that you kind of have to

00:12:58 --> 00:13:03
expose it to the to the user directly.

00:13:01 --> 00:13:05
Does that make sense? And so I'm

00:13:02 --> 00:13:06
wondering if like so even if I think

00:13:04 --> 00:13:08
chat GPT is really just trying to expose

00:13:05 --> 00:13:09
the model to the user, the API is kind

00:13:07 --> 00:13:10
of just trying to expose the model to

00:13:08 --> 00:13:13
the user. So I think there's almost this

00:13:09 --> 00:13:15
argument that's like if the real value

00:13:12 --> 00:13:16
is in the models, it doesn't really

00:13:14 --> 00:13:17
matter how you get it to them cuz it's

00:13:16 --> 00:13:19
going to be very tough for someone's

00:13:16 --> 00:13:21
going to to abstract it away in in in

00:13:18 --> 00:13:22
the classic sense of computer science of

00:13:20 --> 00:13:23
like they don't know that they're using

00:13:21 --> 00:13:25
the model like you always know you're

00:13:22 --> 00:13:26
using GBD5.

00:13:24 --> 00:13:28
>> Yeah. And and the interesting thing is I

00:13:25 --> 00:13:29
think like the entire industry kind of

00:13:27 --> 00:13:30
has slowly changed their mind around

00:13:28 --> 00:13:31
this too. I think like in the beginning

00:13:29 --> 00:13:32
we kind of thought like oh these are all

00:13:30 --> 00:13:33
going to be interchangeable.

00:13:31 --> 00:13:35
>> It's just like software.

00:13:32 --> 00:13:37
>> Yeah. Yeah. Exactly. A piece of infra

00:13:34 --> 00:13:38
swap out. Yeah. But I think we're

00:13:36 --> 00:13:40
learning this on the product side with

00:13:37 --> 00:13:42
like, you know, the GBD5 launch and like

00:13:39 --> 00:13:44
40 and like how so many people liked 03

00:13:41 --> 00:13:45
and 40 and and all of that. We're also

00:13:43 --> 00:13:47
>> I felt that I felt that when it changed.

00:13:44 --> 00:13:49
[laughter] I'm like I'm like you're not

00:13:46 --> 00:13:51
as nice to me. I'm like I like the

00:13:48 --> 00:13:53
validation. So

00:13:50 --> 00:13:54
>> it's actually fun cuz I I really loved

00:13:52 --> 00:13:56
GPD5's personality, but I think it's

00:13:53 --> 00:13:58
like the way I used, you know, chat GPT

00:13:55 --> 00:13:59
was very utilitarian. Like it's like,

00:13:57 --> 00:14:00
you know, mostly for work or just like

00:13:58 --> 00:14:01
information.

00:13:59 --> 00:14:02
>> Yeah, I've definitely come around just,

00:14:00 --> 00:14:04
you know, but like I actually felt a

00:14:02 --> 00:14:05
dissonance when it changed. It's like

00:14:03 --> 00:14:07
it's like like there's this emotional

00:14:04 --> 00:14:09
thing that goes on but it's almost like

00:14:06 --> 00:14:11
it's an anti-

00:14:08 --> 00:14:12
>> you know dissident mediation technology

00:14:10 --> 00:14:13
like you kind of have to show this to

00:14:11 --> 00:14:14
the user.

00:14:12 --> 00:14:15
>> Yeah. Yeah. And and then you see a lot

00:14:13 --> 00:14:17
of like you know more successful

00:14:14 --> 00:14:18
products like cursor like do this

00:14:16 --> 00:14:20
directly especially the coding products

00:14:17 --> 00:14:22
where users want more control. Um we've

00:14:19 --> 00:14:23
ven seen some like you know like more

00:14:21 --> 00:14:25
general consumer products do this and so

00:14:22 --> 00:14:26
it's definitely been true on the on the

00:14:24 --> 00:14:27
consumer side. Um the interesting thing

00:14:25 --> 00:14:29
is I think it's also been true on the

00:14:26 --> 00:14:29
API side. Uh and that's also something

00:14:28 --> 00:14:30
that I think

00:14:28 --> 00:14:31
>> no exactly no that's exactly what I'm

00:14:29 --> 00:14:33
saying.

00:14:30 --> 00:14:34
The argument could be that I could use

00:14:32 --> 00:14:36
the API

00:14:33 --> 00:14:38
>> to disintermediate you, but like you

00:14:35 --> 00:14:40
don't see that happening because it's so

00:14:37 --> 00:14:42
hard to put a layer of software between

00:14:39 --> 00:14:43
a model and and a person. You almost

00:14:41 --> 00:14:46
have to expose the model.

00:14:42 --> 00:14:48
>> Yes. Yes. And I think um if anything, I

00:14:45 --> 00:14:49
think the models are like

00:14:47 --> 00:14:50
>> almost like diverging in terms of like

00:14:48 --> 00:14:52
their what they're good at and like

00:14:49 --> 00:14:53
their specific use case. And I think

00:14:51 --> 00:14:55
there's going to be more and more of

00:14:52 --> 00:14:58
this. But yeah, basically it's been

00:14:54 --> 00:15:00
surprisingly hard for uh or like the the

00:14:57 --> 00:15:01
retention of people building on our API

00:14:59 --> 00:15:02
is like surprisingly high, especially

00:15:00 --> 00:15:04
when people thought you could just kind

00:15:02 --> 00:15:06
of swap things around. You might have,

00:15:03 --> 00:15:08
you know, like uh even tools that help

00:15:05 --> 00:15:10
you uh swap things around. Uh but yeah,

00:15:07 --> 00:15:11
the the stickiness of the of the of the

00:15:09 --> 00:15:12
model itself has been has been

00:15:10 --> 00:15:14
surprising. And then do you think that

00:15:11 --> 00:15:16
is because of a relationship between the

00:15:13 --> 00:15:19
user and the model or do you think it's

00:15:15 --> 00:15:23
more of a technical thing which is like

00:15:18 --> 00:15:25
my eval work for like open AAI and it's

00:15:22 --> 00:15:26
you know and like the correctness

00:15:24 --> 00:15:28
maintains.

00:15:25 --> 00:15:29
>> Yeah. Yeah. I think it's both. Um, so I

00:15:27 --> 00:15:30
think there's there's definitely an end

00:15:28 --> 00:15:31
user piece here, which is what we've

00:15:29 --> 00:15:33
heard from from some of our customers,

00:15:30 --> 00:15:34
like they just get familiar with with

00:15:32 --> 00:15:36
e model itself. But I also think

00:15:33 --> 00:15:38
there's a technical piece, which is like

00:15:35 --> 00:15:40
the also as a developer, especially with

00:15:37 --> 00:15:42
startups, you're like really going deep

00:15:39 --> 00:15:44
with these models and like really like

00:15:41 --> 00:15:45
iterating on it, trying to get get it

00:15:43 --> 00:15:46
really good within your particular

00:15:44 --> 00:15:48
harness. You're iterating on your

00:15:45 --> 00:15:50
harness itself. You're giving it

00:15:47 --> 00:15:52
different tools here and there. Uh, and

00:15:49 --> 00:15:53
so you really do end up like building a

00:15:51 --> 00:15:55
product around the model. And so there

00:15:52 --> 00:15:56
is a technical piece where you know as

00:15:54 --> 00:15:59
you kind of keep building with a

00:15:55 --> 00:16:01
particular uh uh product like GPD5 um

00:15:58 --> 00:16:03
you're actually like building more

00:16:00 --> 00:16:06
around it so that your product works

00:16:02 --> 00:16:10
uniquely well with that with that model.

00:16:05 --> 00:16:11
>> So so I I use I use cursor and um a lot

00:16:09 --> 00:16:12
just for like a lot of stuff like like

00:16:10 --> 00:16:14
writing blogs and like yeah you know

00:16:11 --> 00:16:16
e're investors and I use it for

00:16:13 --> 00:16:18
sometimes for coding and

00:16:15 --> 00:16:20
>> it's remarkable how many models I use in

00:16:17 --> 00:16:22
cursor. So like literally my go-to model

00:16:19 --> 00:16:25
is GP5. I love GPD5. I think is a

00:16:21 --> 00:16:27
phenomenal like you know and then like I

00:16:24 --> 00:16:29
use like max mode with GBT5 for planning

00:16:26 --> 00:16:30
and then but you know like I mean I like

00:16:28 --> 00:16:32
the tab complete model that's in cursor

00:16:30 --> 00:16:34
and like you know the new model they

00:16:31 --> 00:16:36
just dropped is for like some basic you

00:16:33 --> 00:16:38
know some stuff like yeah the composer

00:16:35 --> 00:16:41
one's good

00:16:37 --> 00:16:43
>> um and so like you know and I think that

00:16:40 --> 00:16:44
like kind of reflects this too cuz it's

00:16:42 --> 00:16:46
like there's a particular model for each

00:16:43 --> 00:16:47
particular use case like I've talked to

00:16:45 --> 00:16:48
a bunch of people who've used the new

00:16:46 --> 00:16:52
composer model and it's just really good

00:16:47 --> 00:16:53
for like fast like first pass like keep

00:16:51 --> 00:16:55
you in flow kind of thing and then you

00:16:52 --> 00:16:56
kind of like bubble out to another model

00:16:54 --> 00:16:57
if you want like you know deeper things.

00:16:55 --> 00:17:00
I literally sit down I literally sit

00:16:56 --> 00:17:01
down GP5 to help me plan something out

00:16:59 --> 00:17:03
and it's really good at that and then

00:17:00 --> 00:17:04
you know like when I'm coding you know

00:17:02 --> 00:17:05
I'm doing like the quick chat thing then

00:17:03 --> 00:17:07
I'll use composer and then if there's

00:17:04 --> 00:17:09
like whatever there's like some crazy

00:17:06 --> 00:17:12
bug or something like that like

00:17:08 --> 00:17:13
>> so you know do you remember like in the

00:17:11 --> 00:17:15
arly days of all of this we're like

00:17:12 --> 00:17:16
there's going to be one model and like I

00:17:14 --> 00:17:18
mean like like

00:17:15 --> 00:17:20
>> even like investors like we will never

00:17:17 --> 00:17:22
invest in a model company because like

00:17:19 --> 00:17:23
there will only be one model and it's

00:17:21 --> 00:17:24
going to be AGI but like the reality it

00:17:22 --> 00:17:26
feels like there's this massive

00:17:24 --> 00:17:27
proliferation of models Like you said

00:17:25 --> 00:17:30
before, they're doing many things. And

00:17:26 --> 00:17:31
so maybe two questions, maybe too blunt

00:17:29 --> 00:17:33
or too crass, but the first one is what

00:17:30 --> 00:17:34
does that mean to a for AGI? [laughter]

00:17:32 --> 00:17:37
And the second is what does that mean

00:17:34 --> 00:17:40
for OpenAI? Like does that mean that

00:17:36 --> 00:17:42
like you end up with a model portfolio?

00:17:39 --> 00:17:44
Do you select a subset? Do you think

00:17:41 --> 00:17:45
this all gets superseded by some god

00:17:43 --> 00:17:47
model in the future? Like how does that

00:17:44 --> 00:17:48
play out? Because it's against what most

00:17:46 --> 00:17:49
people thought. Most people thought this

00:17:47 --> 00:17:50
all going towards one large model

00:17:48 --> 00:17:51
that does everything.

00:17:49 --> 00:17:52
>> Yeah. I think the the crazy thing about

00:17:50 --> 00:17:54
all this is just like how everyone's

00:17:52 --> 00:17:56
thinking has just changed over time.

00:17:53 --> 00:17:57
Totally. like the I I distinctly

00:17:55 --> 00:17:59
remember this like and and and the crazy

00:17:56 --> 00:18:01
thing is not that long ago. It's just

00:17:58 --> 00:18:02
like three like two or three years ago.

00:18:00 --> 00:18:03
>> I remember like even within OpenAI the

00:18:02 --> 00:18:05
thinking was that there would be

00:18:02 --> 00:18:06
like one model that rules them all and

00:18:04 --> 00:18:08
it's like why would you I mean like this

00:18:06 --> 00:18:09
kind of goes to the fine tetuning API

00:18:07 --> 00:18:10
product. It's like why would you even

00:18:08 --> 00:18:12
have a fine tuning product? Why would

00:18:09 --> 00:18:13
you even want to like iterate on it? Um

00:18:11 --> 00:18:15
there's going to be this one model that

00:18:12 --> 00:18:16
just subsumes everything and that was

00:18:14 --> 00:18:18
also kind of the that is also like the

00:18:15 --> 00:18:20
most simplistic like view of what the

00:18:17 --> 00:18:22
AGI will look like.

00:18:19 --> 00:18:24
>> Um and and yeah, it's like definitely

00:18:21 --> 00:18:27
completely changed since then. I think

00:18:23 --> 00:18:28
one uh and and but then the other thing

00:18:26 --> 00:18:29
to keep in mind is like it might

00:18:27 --> 00:18:31
continue to change like even from where

00:18:28 --> 00:18:34
we are today but it's like becoming

00:18:30 --> 00:18:35
increasingly clear I think that um uh

00:18:33 --> 00:18:37
there will be room for a bunch of

00:18:34 --> 00:18:38
specialized models. There will likely be

00:18:36 --> 00:18:39
a proliferation of other types of

00:18:37 --> 00:18:41
models. I mean you see us do this with

00:18:38 --> 00:18:44
like the codeex model totally uh uh

00:18:40 --> 00:18:47
itself we have like you like GPD4 and

00:18:43 --> 00:18:49
like 40 and like five and and and and

00:18:46 --> 00:18:50
all of this. Um and so I I definitely

00:18:48 --> 00:18:52
think there's there's room for all for

00:18:49 --> 00:18:54
all this. I I I don't think that's bad

00:18:51 --> 00:18:56
for what it's worth. like um if anything

00:18:53 --> 00:18:58
I think you know as we've tried to move

00:18:55 --> 00:18:59
towards AGI things have just been very

00:18:57 --> 00:19:00
unexpected and I think the market just

00:18:58 --> 00:19:02
evolved and the product portfolio

00:18:59 --> 00:19:04
evolves because of that. Um so I don't

00:19:01 --> 00:19:04
hink it's a bad thing at all. on what I

00:19:03 --> 00:19:06
do

00:19:04 --> 00:19:08
>> you could easily argue it's very good

00:19:05 --> 00:19:10
for open AI and very good for like the

00:19:07 --> 00:19:12
model companies to like yeah because not

00:19:09 --> 00:19:14
have like you know winner take all

00:19:11 --> 00:19:15
consolidated dynamics right I mean you

00:19:13 --> 00:19:17
just have a healthier ecosystem a lot

00:19:14 --> 00:19:19
more solutions you can provide a lot

00:19:16 --> 00:19:21
yeah you know yeah and as as the

00:19:18 --> 00:19:22
cosystem grows it generally is helpful

00:19:20 --> 00:19:24
ike this is one thing we actually think

00:19:21 --> 00:19:25
about a lot too is is as the general

00:19:23 --> 00:19:27
ike AI ecosystem grows like open just

00:19:24 --> 00:19:30
ands to benefit a lot from this and

00:19:26 --> 00:19:31
um this is also why we've uh like

00:19:29 --> 00:19:32
some of our products we've even started

00:19:30 --> 00:19:34
opening up to other models right like

00:19:31 --> 00:19:36
our ethals uh product now allows you to

00:19:33 --> 00:19:38
bring in other models to all this. We

00:19:35 --> 00:19:40
think it's like any any rising tide

00:19:37 --> 00:19:41
generally helps us here. Um but yeah, I

00:19:39 --> 00:19:43
think as we move into a world where

00:19:40 --> 00:19:44
there will be a bunch more models, this

00:19:42 --> 00:19:45
why we've kind of invested in our

00:19:43 --> 00:19:47
model customization product with

00:19:44 --> 00:19:49
fine-tuning API with the reinforcement

00:19:46 --> 00:19:51
fine-tuning opening that up as well. Uh

00:19:48 --> 00:19:53
it's also why part of why we open

00:19:50 --> 00:19:55
sourced uh uh GPOSS as well because we

00:19:52 --> 00:19:55
want to be able to you know facilitate

00:19:54 --> 00:19:56
that.

00:19:54 --> 00:19:58
>> I want to super I want to talk about

00:19:55 --> 00:19:59
hat in in in just a bit cuz the open

00:19:57 --> 00:20:01
source is actually very interesting and

00:19:58 --> 00:20:02
I I mean actually I thought the open

00:20:00 --> 00:20:03
source model was great. Yeah. Um but

00:20:01 --> 00:20:05
clearly it's something that companies

00:20:02 --> 00:20:06
have to be careful with.

00:20:04 --> 00:20:10
>> But before that I want to talk a little

00:20:05 --> 00:20:13
bit about the fine-tuning um uh API. So

00:20:09 --> 00:20:14
so so I I've noticed that you are moving

00:20:12 --> 00:20:16
towards kind of more sophisticated use

00:20:13 --> 00:20:18
of things like you know like fine-tuning

00:20:15 --> 00:20:20
um which you know in a way you could

00:20:17 --> 00:20:22
read that as a bit of a capitulation

00:20:19 --> 00:20:25
that like

00:20:21 --> 00:20:26
you know there is product specific data

00:20:24 --> 00:20:28
nd there's product specific use cases

00:20:25 --> 00:20:29
that a general model won't do to your

00:20:27 --> 00:20:32
point. Right. So like as opposed to

00:20:28 --> 00:20:33
proliferation model you do that. Um it

00:20:31 --> 00:20:35
seems like a lot of that data is

00:20:32 --> 00:20:40
actually very very valuable, right? And

00:20:34 --> 00:20:42
so you know to what extent is there like

00:20:39 --> 00:20:45
interest in almost a tit fortat where

00:20:41 --> 00:20:47
you can like expose

00:20:44 --> 00:20:50
you know the ability to get product data

00:20:46 --> 00:20:52
into fine-tuning and then you also

00:20:49 --> 00:20:55
benefit from that data because

00:20:51 --> 00:20:58
>> the uh the the vendors provide it to

00:20:54 --> 00:21:00
you. um versus like this is 100%, you

00:20:57 --> 00:21:01
know, like they keep their own data and

00:20:59 --> 00:21:03
there's kind of no interest in that

00:21:00 --> 00:21:04
>> cuz it feels to me like the next level

00:21:02 --> 00:21:06
of scaling. This is kind of where we're

00:21:03 --> 00:21:07
at. And so

00:21:05 --> 00:21:09
>> just kind of curious how

00:21:06 --> 00:21:11
>> Yeah. So I mean maybe even like taking a

00:21:08 --> 00:21:13
step back the the main reason why we

00:21:10 --> 00:21:15
ven invested in a fine-tuning API in

00:21:12 --> 00:21:18
the very beginning is uh one there's

00:21:14 --> 00:21:19
been huge demand from people to be able

00:21:17 --> 00:21:20
to customize the models a bit more. It

00:21:18 --> 00:21:21
kind of goes into like prompt

00:21:19 --> 00:21:22
engineering and also like I think the

00:21:20 --> 00:21:24
industry's changed their mind on that as

00:21:21 --> 00:21:26
well like it's evolved. But the second

00:21:23 --> 00:21:28
thing is exactly what you said which is

00:21:25 --> 00:21:30
the companies just have giant treasure

00:21:27 --> 00:21:32
troves of data that they are sitting on

00:21:29 --> 00:21:35
that they would like to utilize in some

00:21:31 --> 00:21:36
fashion in this AI wave and you can you

00:21:34 --> 00:21:38
know the simple thing is to put it in

00:21:35 --> 00:21:40
like you know some like vector like do

00:21:37 --> 00:21:40
rag with it or something but there's

00:21:39 --> 00:21:42
also you know if they have more

00:21:40 --> 00:21:44
technical team they do want to see how

00:21:41 --> 00:21:46
they can use it to customize the models

00:21:43 --> 00:21:48
>> and uh and so that is actually the main

00:21:45 --> 00:21:50
reason why we've invested in in this the

00:21:47 --> 00:21:53
interesting thing was uh way back kind

00:21:50 --> 00:21:55
of back in like 22 23 our finetuning

00:21:52 --> 00:21:57
offering was I' I'd say like too limited

00:21:54 --> 00:21:59
so that it was very difficult for people

00:21:56 --> 00:22:00
to to tap into and use this data. So it

00:21:58 --> 00:22:03
was just like an SF like a supervised

00:21:59 --> 00:22:04
fine-tuning API and like we're like oh

00:22:02 --> 00:22:06
you can kind of use it but in practice

00:22:03 --> 00:22:08
it really is only useful for like

00:22:05 --> 00:22:10
>> like it's honestly just like instruction

00:22:07 --> 00:22:11
following plus+ you like kind of change

00:22:09 --> 00:22:13
the tone and you're really like

00:22:10 --> 00:22:14
instructing it. Um, but I think the the

00:22:12 --> 00:22:16
big unlock that has happened

00:22:13 --> 00:22:18
recently is with the reinforcement

00:22:15 --> 00:22:20
fine-tuning model because with that

00:22:17 --> 00:22:21
setup, we're now letting you actual run

00:22:19 --> 00:22:23
actually run RL, which is more finicky

00:22:20 --> 00:22:24
and it's like harder and and you know

00:22:22 --> 00:22:26
like you need to invest more in it, but

00:22:23 --> 00:22:29
it allows you to leverage your data way

00:22:25 --> 00:22:30
more. This is this is just a naive

00:22:28 --> 00:22:33
question for me which is

00:22:29 --> 00:22:34
>> it feels from from just my understanding

00:22:32 --> 00:22:36
from my own portfolio it feels like

00:22:33 --> 00:22:37
there's two modalities of use. One of

00:22:35 --> 00:22:39
them is I've got a treasure trove of

00:22:36 --> 00:22:41
data that I've had for a long time and I

00:22:38 --> 00:22:42
create my model on that treasure trove

00:22:40 --> 00:22:43
of data and all that happens offline and

00:22:41 --> 00:22:45
then I deploy that. Y

00:22:42 --> 00:22:46
>> there's another one which is like I

00:22:44 --> 00:22:48
actually have the product being used in

00:22:45 --> 00:22:48
real time. I've got a bunch of users.

00:22:47 --> 00:22:50
>> Yeah.

00:22:47 --> 00:22:52
>> And like I can actually get much closer

00:22:49 --> 00:22:54
to the user. I can kind of AB test and

00:22:51 --> 00:22:57
ecide which data and like it's kind of

00:22:53 --> 00:23:00
more of a near real time thing. is is is

00:22:56 --> 00:23:02
like is this focus on like more product

00:23:00 --> 00:23:04
stuff or more treasure trove or

00:23:01 --> 00:23:05
>> so the dream with the fine tuning API

00:23:03 --> 00:23:06
was that we should be able to handle

00:23:04 --> 00:23:07
both right it's like it's like we

00:23:05 --> 00:23:08
actually had this dream and and we have

00:23:06 --> 00:23:10
this whole like Laura setup with the

00:23:08 --> 00:23:11
fine-tuning inference where we should

00:23:09 --> 00:23:13
just be able to scale to like millions

00:23:10 --> 00:23:14
and millions of of these fine tuned

00:23:12 --> 00:23:15
models which would is usually what would

00:23:13 --> 00:23:18
happen if you have like this online

00:23:14 --> 00:23:19
learning thing in practice it's mostly

00:23:17 --> 00:23:21
been the the format in practice mostly

00:23:18 --> 00:23:22
been like the offline data that they've

00:23:20 --> 00:23:24
like already created or they are

00:23:21 --> 00:23:26
creating with experts or something and

00:23:23 --> 00:23:27
like using their product that they're

00:23:25 --> 00:23:29
able to use here. Um but

00:23:26 --> 00:23:30
he main thing I was trying to uh say

00:23:28 --> 00:23:33
around the reinforcement fine tuning API

00:23:29 --> 00:23:35
is it kind of changes the uh paradigm

00:23:32 --> 00:23:36
away from just like small incremental

00:23:34 --> 00:23:39
improve like tone improvements which is

00:23:36 --> 00:23:42
what SFT did to actually improving the

00:23:38 --> 00:23:43
model to potentially soda level on a

00:23:41 --> 00:23:45
particular use case that you you know

00:23:42 --> 00:23:46
about like that's where people have

00:23:44 --> 00:23:48
really started using the reinforcement

00:23:45 --> 00:23:51
fine tuning API and that's why it's it's

00:23:47 --> 00:23:53
gotten more more um uh more uptake

00:23:50 --> 00:23:55
because if if the discussion is less

00:23:52 --> 00:23:57
like hey I can make this model you know

00:23:54 --> 00:24:00
not like speak in a certain way less

00:23:56 --> 00:24:00
compentic

00:24:02 --> 00:24:06
planning or something you can create the

00:24:03 --> 00:24:08
world's best model using your data set

00:24:05 --> 00:24:10
with RFT then it becomes a lot more

00:24:07 --> 00:24:13
>> and will you will you ever like or maybe

00:24:10 --> 00:24:15
do you will you ever like find ways to

00:24:12 --> 00:24:16
get access to that data like you know

00:24:14 --> 00:24:18
listen if I if I had the data and I

00:24:15 --> 00:24:19
wanted cheap GPUs I'd trade you for it

00:24:17 --> 00:24:21
like I don't know like

00:24:18 --> 00:24:22
>> yeah we I mean we we we've talked about

00:24:20 --> 00:24:25
his and uh we've actually been piloting

00:24:21 --> 00:24:27
some pricing here too where it's like um

00:24:24 --> 00:24:29
because this data is like really helpful

00:24:26 --> 00:24:30
uh and and it's kind of hard to get and

00:24:28 --> 00:24:32
um uh if you actually build with the

00:24:29 --> 00:24:34
reinforcement fine tuning API, you can

00:24:31 --> 00:24:36
actually get discounted inference and uh

00:24:33 --> 00:24:37
potentially free training too if you're

00:24:35 --> 00:24:38
willing to share the data. It's always

00:24:36 --> 00:24:41
kind of you know it's up to the the

00:24:37 --> 00:24:42
customer there but uh if they do um it

00:24:40 --> 00:24:43
is helpful for us and and there there

00:24:41 --> 00:24:44
will be benefits for the for the

00:24:42 --> 00:24:45
customer as well.

00:24:43 --> 00:24:47
>> That's awesome.

00:24:44 --> 00:24:48
>> Okay, you you said that views on prompt

00:24:46 --> 00:24:49
engineering have changed.

00:24:47 --> 00:24:51
>> Yeah, I wasn't actually I wasn't aware

00:24:48 --> 00:24:52
of that. All the other things I was

00:24:50 --> 00:24:54
aware of this one I wasn't. How

00:24:51 --> 00:24:56
>> I mean I think the prevailing view this

00:24:53 --> 00:24:57
back in 2022. I remember I was

00:24:55 --> 00:24:58
talking to so many people and they're

00:24:56 --> 00:25:01
basically I mean this is similar to like

00:24:57 --> 00:25:02
the single model AGI view as well which

00:25:00 --> 00:25:03
is like

00:25:01 --> 00:25:04
>> like prompt engineering is just not

00:25:02 --> 00:25:06
going to be a thing and you're just not

00:25:04 --> 00:25:07
going to have to think about what you're

00:25:05 --> 00:25:09
putting in the in the context window in

00:25:06 --> 00:25:10
the future like the model will just be

00:25:08 --> 00:25:12
good enough and it'll just like know

00:25:09 --> 00:25:14
it'll know what what what you need to do

00:25:11 --> 00:25:15
and that's not a thing. [laughter]

00:25:13 --> 00:25:16
>> Yeah. Yeah. But like that that like I

00:25:14 --> 00:25:18
don't know maybe people forget it but

00:25:15 --> 00:25:19
like that was like a very common belief

00:25:17 --> 00:25:21
back then cuz like the scaling laws or

00:25:18 --> 00:25:22
whatever something with scaling laws and

00:25:20 --> 00:25:24
like you'll just mind mel with the model

00:25:21 --> 00:25:25
and like you just like

00:25:23 --> 00:25:26
>> like prompting and like instruction

00:25:24 --> 00:25:28
following will will be so good that you

00:25:26 --> 00:25:29
won't really need to do it and if

00:25:27 --> 00:25:32
anything like yeah it's like clearly

00:25:28 --> 00:25:33
been wrong and um uh but it is

00:25:31 --> 00:25:34
interesting because I think it's a

00:25:32 --> 00:25:36
slightly different world that we're in

00:25:33 --> 00:25:38
ow where the models have gotten really

00:25:35 --> 00:25:40
good at instruction following

00:25:37 --> 00:25:40
relative to the you know like GBD35 or

00:25:39 --> 00:25:42
something

00:25:39 --> 00:25:44
>> but I think the name of the game now is

00:25:41 --> 00:25:45
less on like prompt engineering. as

00:25:43 --> 00:25:47
we had thought about it two years ago.

00:25:44 --> 00:25:48
It's more of like it's like the context

00:25:46 --> 00:25:50
engineering side where it's like what

00:25:47 --> 00:25:51
are the tools you give it? What is like

00:25:49 --> 00:25:52
the data that it pulls in? When does it

00:25:50 --> 00:25:53
pull in the right data?

00:25:51 --> 00:25:55
>> Well, this is very interesting. I mean I

00:25:52 --> 00:25:57
mean to reduce it to like an almost

00:25:54 --> 00:26:00
absurdly simplistic level. Like the

00:25:56 --> 00:26:02
weird thing about rag for example, the

00:25:59 --> 00:26:04
classic use of rag is like you're using

00:26:01 --> 00:26:06
like cosine similarity

00:26:03 --> 00:26:07
to choose something that you're going to

00:26:05 --> 00:26:08
feed into a super intelligence.

00:26:06 --> 00:26:09
>> [laughter]

00:26:07 --> 00:26:11
>> you know, you're like, I'm going to

00:26:08 --> 00:26:13
random. I'm going to like randomly grab

00:26:10 --> 00:26:15
this thing based on like [ __ ]

00:26:12 --> 00:26:16
embedding space. It doesn't really, you

00:26:14 --> 00:26:17
know, and like and then I'm, you know,

00:26:15 --> 00:26:19
when you want the super intelligence

00:26:16 --> 00:26:22
decide the thing to do. And so it's like

00:26:18 --> 00:26:23
pushing intelligence in that retrieval

00:26:21 --> 00:26:25
clearly is something that makes a lot of

00:26:22 --> 00:26:26
sense like the pushing the intelligence

00:26:24 --> 00:26:28
out in a way.

00:26:25 --> 00:26:30
>> Exactly. And and and to be fair, I think

00:26:27 --> 00:26:30
like rag was kind of introduced when the

00:26:29 --> 00:26:32
models were like it's like

00:26:30 --> 00:26:33
pre-ereasoning models. It was like you

00:26:31 --> 00:26:35
only had kind of like one shot to like

00:26:32 --> 00:26:37
do this and it wasn't that smart. Um but

00:26:34 --> 00:26:39
now that we do have the reasoning models

00:26:36 --> 00:26:40
now that we have I mean if you like one

00:26:38 --> 00:26:42
of my favorite models is actually 03

00:26:40 --> 00:26:44
because it was like one of the most

00:26:41 --> 00:26:45
diligent models you kind

00:26:43 --> 00:26:46
>> it would just like do all these tool

00:26:44 --> 00:26:48
calls and it's like really the

00:26:45 --> 00:26:50
intelligence itself trying to like do

00:26:47 --> 00:26:51
the you know tool calls or rag or

00:26:49 --> 00:26:54
anything like that

00:26:50 --> 00:26:55
>> um or write the code to execute um and

00:26:53 --> 00:26:57
so the the paradigm has shifted there

00:26:54 --> 00:26:58
but yeah because of that I think like

00:26:56 --> 00:27:00
condex engineering prompt engineering

00:26:57 --> 00:27:01
what you put what you give the model is

00:26:59 --> 00:27:02
like extra important now

00:27:00 --> 00:27:04
>> y

00:27:01 --> 00:27:06
>> okay so you have API so you the API

00:27:03 --> 00:27:07
which is horizontal You've got chat GBT

00:27:05 --> 00:27:08
and other products which are vertical.

00:27:06 --> 00:27:11
We haven't even talked about pixels.

00:27:07 --> 00:27:14
It's all just just language. Are agents

00:27:10 --> 00:27:16
a new modality? Is that something else?

00:27:13 --> 00:27:17
Like you know like um

00:27:15 --> 00:27:19
>> codeex or

00:27:16 --> 00:27:22
>> what do you mean by modality there?

00:27:18 --> 00:27:24
>> Like um and they feel both vertical and

00:27:21 --> 00:27:26
horizontal to me in a way like to me

00:27:23 --> 00:27:28
chat GBT is a product

00:27:25 --> 00:27:29
>> right? It's like it's a product and like

00:27:27 --> 00:27:29
my mom uses it, right?

00:27:28 --> 00:27:32
>> Y

00:27:28 --> 00:27:34
>> and an API is a dev thing. you kind of

00:27:31 --> 00:27:36
give it to a developer and like a CLI is

00:27:33 --> 00:27:38
kind of somewhere in between to me. It's

00:27:35 --> 00:27:39
like is it a product? Is it like it is

00:27:37 --> 00:27:41
horizontal? Like

00:27:38 --> 00:27:43
>> you know how is it handled internally?

00:27:40 --> 00:27:47
Is it a totally separate team that does

00:27:42 --> 00:27:49
agents or No. So it's um uh

00:27:46 --> 00:27:51
yeah it's interesting because like I I

00:27:48 --> 00:27:52
think the way that I I the way that you

00:27:50 --> 00:27:54
framed it just now almost seemed like

00:27:51 --> 00:27:56
agents was like this like singular

00:27:53 --> 00:27:57
concept that like you know might or like

00:27:55 --> 00:27:58
might have its own particular

00:27:56 --> 00:27:59
>> maybe a better question is what is an

00:27:57 --> 00:28:01
agent to you?

00:27:58 --> 00:28:02
>> Yeah. Yeah. Yeah. like even

00:28:00 --> 00:28:03
[clears throat] getting a language

00:28:01 --> 00:28:04
[laughter] is like important for this

00:28:02 --> 00:28:04
conversation.

00:28:03 --> 00:28:06
>> Yeah.

00:28:03 --> 00:28:07
>> So, I I actually don't even know if it'

00:28:05 --> 00:28:09
be helpful for me to share, but my my

00:28:06 --> 00:28:10
general take on agents is it's it's a

00:28:08 --> 00:28:12
n it's an AI that will take

00:28:09 --> 00:28:14
actions on your behalf that can work

00:28:11 --> 00:28:16
over long time horizons. And I think

00:28:13 --> 00:28:18
that's the that's the pretty general

00:28:15 --> 00:28:19
>> utilitarian definition. But like if you

00:28:17 --> 00:28:20
think about it that way, yeah, I mean

00:28:18 --> 00:28:24
maybe this is what you mean by modality,

00:28:19 --> 00:28:26
but it is just a like way of like using

00:28:23 --> 00:28:28
AI and it is a I guess it could be

00:28:25 --> 00:28:30
viewed as a modality, but we don't view

00:28:27 --> 00:28:31
it as like a separate thing separate

00:28:29 --> 00:28:33
from

00:28:30 --> 00:28:35
API and let me just let me just try and

00:28:32 --> 00:28:36
kind of uh you know give you a sense of

00:28:34 --> 00:28:38
where this question is coming from. Like

00:28:35 --> 00:28:39
I know how to build a product like and

00:28:37 --> 00:28:42
we know how to do go to market for

00:28:38 --> 00:28:43
products. We know how to do like, you

00:28:41 --> 00:28:45
know, we know the implications of

00:28:42 --> 00:28:46
turning them into platforms. Like it's

00:28:44 --> 00:28:48
just we've been doing this for a very

00:28:45 --> 00:28:49
long time, right? We know how to do the

00:28:47 --> 00:28:51
same thing for APIs, right? We know how

00:28:48 --> 00:28:53
to do billing. We know like the tension

00:28:50 --> 00:28:54
of like people build on top of it and

00:28:52 --> 00:28:57
all of that stuff. And like what I've

00:28:53 --> 00:28:59
been trying to and this is just maybe a

00:28:56 --> 00:29:03
personal inquiry. It's just not clear

00:28:58 --> 00:29:04
for me for an agent if you if it if it

00:29:02 --> 00:29:06
sits in one of those two camps. Is it

00:29:03 --> 00:29:08
more like the product camp? Is it more

00:29:05 --> 00:29:10
like the [laughter]

00:29:07 --> 00:29:12
>> or cuz it's kind of both. Like I could

00:29:09 --> 00:29:12
like literally give you code.

00:29:11 --> 00:29:14
>> Yeah. Yeah.

00:29:11 --> 00:29:17
>> And like as a user and then you just

00:29:14 --> 00:29:20
alk to it or I could like build in a

00:29:16 --> 00:29:23
way kind of embed it in like my app and

00:29:20 --> 00:29:24
so like but then that means something to

00:29:22 --> 00:29:26
you as far as like you know how do you

00:29:23 --> 00:29:27
price it and what does it mean for

00:29:25 --> 00:29:29
ecosystem like like for example like

00:29:26 --> 00:29:31
would you be fine if I started a company

00:29:28 --> 00:29:32
and just like built it around codecs? Is

00:29:30 --> 00:29:33
that a thing?

00:29:31 --> 00:29:35
>> Starting a company and building it

00:29:32 --> 00:29:37
around. I actually think that would be

00:29:34 --> 00:29:38
great. Like it's a we we like released

00:29:36 --> 00:29:40
like the Codex SDK and we like want

00:29:37 --> 00:29:42
people to be able to build it and hack

00:29:39 --> 00:29:43
on it. Yeah. Actually, I think this

00:29:41 --> 00:29:44
might be what you're getting at which is

00:29:42 --> 00:29:46
um

00:29:43 --> 00:29:47
>> uh and this is like a kind of a unique

00:29:45 --> 00:29:49
thing about OpenAI and kind of reflects

00:29:46 --> 00:29:51
on how how it's run which is at the end

00:29:48 --> 00:29:53
like at the end of the day OpenAI is

00:29:50 --> 00:29:54
like a an AGI company. It's like an

00:29:52 --> 00:29:56
intelligence company.

00:29:53 --> 00:29:57
>> And so agents are just like one way in

00:29:55 --> 00:30:00
which this intelligence kind of be

00:29:56 --> 00:30:01
manifested. And so the way that I'd say

00:29:59 --> 00:30:03
we actually think about internally is

00:30:00 --> 00:30:05
all of our different product lines. Sora

00:30:02 --> 00:30:07
codeex API chatbt are just different

00:30:04 --> 00:30:08
interfaces and different ways of

00:30:06 --> 00:30:09
deploying this. you don't really need.

00:30:07 --> 00:30:10
>> So there's no like single teams like

00:30:08 --> 00:30:12
this is you know like thinking about

00:30:10 --> 00:30:14
agents. I would say the way that it it

00:30:11 --> 00:30:16
manifests itself more is like each

00:30:13 --> 00:30:18
product area thinks about like what is

00:30:15 --> 00:30:19
you know this intelligence is actually

00:30:17 --> 00:30:20
turning into a form where like it can

00:30:18 --> 00:30:22
actually agentic behavior is more

00:30:20 --> 00:30:24
possible. What would that look like in a

00:30:21 --> 00:30:25
first party product like chat GBT? What

00:30:23 --> 00:30:27
would that look like? This is this is

00:30:24 --> 00:30:28
actually why Codex ended up becoming its

00:30:26 --> 00:30:29
own product. It's like what would it

00:30:27 --> 00:30:31
look like in a coding style product?

00:30:28 --> 00:30:32
>> Like we explored it and chat GBT like

00:30:30 --> 00:30:34
kind of worked there but like actually

00:30:32 --> 00:30:36
the CLI interface actually makes a lot

00:30:33 --> 00:30:37
more sense. That's another interface to

00:30:35 --> 00:30:39
deploy it. And then if you look about

00:30:36 --> 00:30:40
he API itself, it's like this is

00:30:38 --> 00:30:42
another interface to deploy it. It's

00:30:40 --> 00:30:43
it's you're thinking about it in a

00:30:41 --> 00:30:44
slightly different way because it's a

00:30:42 --> 00:30:46
developer first mindset. We're helping

00:30:43 --> 00:30:47
other people build it. The pricing is

00:30:45 --> 00:30:48
lightly different, but it's all these

00:30:46 --> 00:30:51
like different manifestations of this

00:30:48 --> 00:30:52
core like um intelligence that is the

00:30:50 --> 00:30:54
the Asian behavior. Yeah,

00:30:52 --> 00:30:56
>> it is so remarkable how much of this

00:30:53 --> 00:30:57
entire economy is basically just token

00:30:55 --> 00:30:59
laundering. It's like [laughter] a

00:30:56 --> 00:31:01
sense, right? It's literally like

00:30:58 --> 00:31:03
anything I can do to get like [gasps]

00:31:00 --> 00:31:05
like English in or like a natural

00:31:02 --> 00:31:07
anguage in and then like you know the

00:31:04 --> 00:31:09
intelligence out and uh I mean and and

00:31:06 --> 00:31:11
it's because things are so resistant

00:31:08 --> 00:31:13
o layering. It's so hard to layer a

00:31:10 --> 00:31:15
language out like you know like

00:31:12 --> 00:31:16
>> I could even do it easily with like

00:31:14 --> 00:31:19
codecs. I could just like use it you

00:31:15 --> 00:31:21
know as as a component of a of a program

00:31:18 --> 00:31:22
and just you know basically launder

00:31:20 --> 00:31:23
intelligence through it. I mean of

00:31:21 --> 00:31:26
course you know I'd be charged to do

00:31:22 --> 00:31:27
that. So I I I actually my my my view of

00:31:25 --> 00:31:29
this and having seen now so many kind of

00:31:26 --> 00:31:30
launches of different products. I've

00:31:28 --> 00:31:32
seen agent launches and the definition

00:31:29 --> 00:31:34
that you have. I've definitely seen APIs

00:31:32 --> 00:31:35
>> um and I've seen products on these is

00:31:33 --> 00:31:39
like

00:31:34 --> 00:31:41
>> um they're actually quite different than

00:31:38 --> 00:31:43
like what we're used to. Like the cogs

00:31:40 --> 00:31:45
is different, the defensibility is

00:31:42 --> 00:31:46
different like all so we're kind of

00:31:44 --> 00:31:48
rewriting it.

00:31:45 --> 00:31:50
>> Um and so it's kind of like you know you

00:31:47 --> 00:31:51
came from a kind of pricing background.

00:31:49 --> 00:31:53
I mean you were working on a demo model

00:31:50 --> 00:31:56
for pricing. Now you have the API. So I

00:31:52 --> 00:31:58
just love your thoughts on like I mean

00:31:55 --> 00:32:00
how h how h how have you evolved your

00:31:57 --> 00:32:04
thinking and how do you price these you

00:31:59 --> 00:32:05
know access to intelligence where you

00:32:03 --> 00:32:07
know you don't know how many people

00:32:04 --> 00:32:09
going to use it almost certainly usage

00:32:06 --> 00:32:11
based billing not something else like

00:32:08 --> 00:32:12
can you can you talk just a bit about

00:32:10 --> 00:32:13
like philosophy around pricing on these

00:32:11 --> 00:32:14
things is it different for product

00:32:12 --> 00:32:18
versus API like

00:32:14 --> 00:32:20
>> yeah I think um the the the honest truth

00:32:17 --> 00:32:21
ere is like it's evolved over time as

00:32:19 --> 00:32:23
well and and like I actually think the

00:32:20 --> 00:32:24
simplest like the reason why we've and

00:32:22 --> 00:32:27
uh usage based pricing on the API

00:32:23 --> 00:32:28
honestly is because it's been like it's

00:32:26 --> 00:32:30
closest to how it's actually being used.

00:32:27 --> 00:32:31
And so that's kind of how we how we

00:32:29 --> 00:32:34
started. I actually think usage based

00:32:30 --> 00:32:36
pricing on the API has has has like

00:32:33 --> 00:32:37
surprisingly held strong and like I

00:32:35 --> 00:32:38
actually think this might be something

00:32:36 --> 00:32:41
that we'll keep doing for for quite a

00:32:38 --> 00:32:42
long time. Mostly because um

00:32:40 --> 00:32:44
>> the so I don't know how you don't do

00:32:41 --> 00:32:45
usage base.

00:32:43 --> 00:32:46
>> I just don't know how that

00:32:44 --> 00:32:48
>> Yeah. And then and then and then there's

00:32:45 --> 00:32:50
also the strategy of like how we price

00:32:47 --> 00:32:52
it and and and internally one thing we

00:32:49 --> 00:32:54
do is is uh we always make sure that we

00:32:51 --> 00:32:55
actually price our our our usage based

00:32:53 --> 00:32:56
pricing from a like cost plus

00:32:54 --> 00:32:58
perspective like we're we're actually

00:32:55 --> 00:33:00
just like trying to make sure that we're

00:32:57 --> 00:33:01
being responsible from a from a margin

00:32:59 --> 00:33:03
perspective. Uh by the way this is a

00:33:00 --> 00:33:04
huge shift in the industry in general

00:33:02 --> 00:33:06
just because like I remember the shift

00:33:03 --> 00:33:08
from onrem to uh to recurring.

00:33:05 --> 00:33:10
>> Yeah that was a big big deal like that

00:33:07 --> 00:33:12
created Zora like it like created whole

00:33:09 --> 00:33:13
companies like their whole books on like

00:33:11 --> 00:33:15
a bunch of consultants on how you do

00:33:12 --> 00:33:16
this. to change like

00:33:14 --> 00:33:19
>> you know and like I think the shift to

00:33:15 --> 00:33:21
usage is is as bigger bigger and it's

00:33:18 --> 00:33:24
also even a really hard technical

00:33:20 --> 00:33:26
problem like [laughter]

00:33:23 --> 00:33:27
>> I can't even imagine 800 million wow

00:33:25 --> 00:33:29
like how do you build

00:33:26 --> 00:33:31
>> yeah well well well 800 million WOW is a

00:33:28 --> 00:33:32
little easier because it's it's not user

00:33:30 --> 00:33:35
based pricing it's subscription so it's

00:33:31 --> 00:33:38
like that way but I mean there's still

00:33:34 --> 00:33:39
ike uh like a lot of users on the API

00:33:37 --> 00:33:40
that we need to like you know manage all

00:33:38 --> 00:33:41
the building side

00:33:39 --> 00:33:42
>> there's some like overages or stuff

00:33:40 --> 00:33:44
you've got to deal with on that or

00:33:41 --> 00:33:45
>> uh what do you mean by overages like

00:33:43 --> 00:33:46
>> I don't know. I guess

00:33:44 --> 00:33:49
>> most people have quotas and then we'll

00:33:45 --> 00:33:50
kind of like max that we don't let

00:33:48 --> 00:33:52
people go over but like in practice

00:33:49 --> 00:33:52
these quotas are like pretty pretty

00:33:51 --> 00:33:53
massive

00:33:51 --> 00:33:55
>> and that would literally be like one of

00:33:52 --> 00:33:57
the most complex systems somebody's ever

00:33:54 --> 00:33:58
built if you would do usage base at like

00:33:56 --> 00:33:59
that scale. I mean these are very very

00:33:57 --> 00:34:01
and like you have to be correct

00:33:58 --> 00:34:01
like these are very hard systems to

00:34:00 --> 00:34:03
scale.

00:34:00 --> 00:34:04
>> Yep. Yep. Yep. Yeah. Yeah. I mean we

00:34:02 --> 00:34:06
have a whole team thinking about this

00:34:03 --> 00:34:08
now internally. Um yeah I mean usage

00:34:05 --> 00:34:11
pricing is also interesting. So there's

00:34:07 --> 00:34:13
um uh we acquired this company um uh

00:34:10 --> 00:34:15
called Roxet a while ago. a founder. His

00:34:12 --> 00:34:17
name is Venot. He's right here. Awesome.

00:34:14 --> 00:34:17
Venot's Vanc's incredible. I He's one of

00:34:16 --> 00:34:19
the best. Like

00:34:16 --> 00:34:20
>> Ven Cott, if you're listening, we're

00:34:18 --> 00:34:22
huge fans. I'm I'm a huge fan.

00:34:19 --> 00:34:24
>> He's he's going to love this. Um

00:34:21 --> 00:34:25
>> No, he's great, man. He's a legend.

00:34:23 --> 00:34:28
>> Anyways, I was talking to him uh about

00:34:24 --> 00:34:30
pricing uh as well. And his his his take

00:34:27 --> 00:34:32
is is uh that pricing is kind of like a

00:34:29 --> 00:34:33
one-way ratchet. And like basically once

00:34:31 --> 00:34:34
you get a taste of usage based pricing,

00:34:32 --> 00:34:37
you're never going to go back to like

00:34:33 --> 00:34:38
the per the like per deployment uh type

00:34:36 --> 00:34:40
pricing. And I think that's definitely

00:34:38 --> 00:34:41
true. And I think it's just cuz it's

00:34:39 --> 00:34:43
getting it gets closer and closer to

00:34:40 --> 00:34:44
like your true utility. You're getting

00:34:42 --> 00:34:46
all this thing. The main pain point is

00:34:43 --> 00:34:48
like you have to maintain all infra.

00:34:45 --> 00:34:49
Yeah. To like get it to work well. But

00:34:47 --> 00:34:50
if you do have it, he he thinks it's

00:34:48 --> 00:34:52
like a one-way ratchet where like

00:34:49 --> 00:34:53
there's just like no no going back.

00:34:51 --> 00:34:55
>> And then and I think the hot new thing

00:34:52 --> 00:34:57
now is like oh with AI you can now kind

00:34:54 --> 00:34:58
of measure like outcomes. And so that's

00:34:56 --> 00:34:59
like another, you know, like step

00:34:57 --> 00:35:01
forward. And if that works like maybe

00:34:58 --> 00:35:02
it's a oneway ratchet.

00:35:00 --> 00:35:03
>> Um so we we thought about that is like

00:35:01 --> 00:35:05
you know is there some type of like

00:35:02 --> 00:35:06
outcome based pricing. This is more on

00:35:04 --> 00:35:09
the first party side on an API. It's

00:35:05 --> 00:35:12
kind of hard to measure. very hard. I

00:35:08 --> 00:35:15
mean, that's hard because you end up

00:35:11 --> 00:35:16
having to price and value non-computer

00:35:14 --> 00:35:17
science infrastructure, right? Like,

00:35:15 --> 00:35:19
you're literally going into

00:35:16 --> 00:35:21
verticalization now. Like, you're like,

00:35:18 --> 00:35:23
>> I mean, listen, if it's like porting a

00:35:20 --> 00:35:24
codebase, maybe you'd have some

00:35:22 --> 00:35:27
xpertise, but if it's like whatever,

00:35:24 --> 00:35:29
like increasing crop yield, [laughter]

00:35:26 --> 00:35:30
>> at some level, you need to like

00:35:28 --> 00:35:32
>> but but there could be a world where

00:35:29 --> 00:35:33
like the AI is like good enough where it

00:35:31 --> 00:35:34
can like actually, you know, make

00:35:32 --> 00:35:35
judgments of these and do it in an

00:35:33 --> 00:35:37
accurate enough way where we can tie it

00:35:34 --> 00:35:38
o to billing. I think this is a problem

00:35:36 --> 00:35:40
with AI conversations because like at

00:35:38 --> 00:35:42
any point in time you're like but it

00:35:39 --> 00:35:43
could get good enough. [laughter]

00:35:41 --> 00:35:45
>> It's not a problem anymore.

00:35:42 --> 00:35:47
>> Yeah. At some point it'll be solved.

00:35:44 --> 00:35:49
>> It's so much like the prompt engineering

00:35:46 --> 00:35:50
and the single age I think from before.

00:35:48 --> 00:35:52
Yeah. Yeah. It's like when you when you

00:35:49 --> 00:35:54
reach that level of of when you push it

00:35:51 --> 00:35:56
hat far everything's kind of solved on

00:35:53 --> 00:35:58
uh outcome based pricing. Um it sounds

00:35:55 --> 00:36:00
very appealing like if it can work it

00:35:57 --> 00:36:02
can work. But one uh thing that uh we've

00:35:59 --> 00:36:04
started realizing is

00:36:01 --> 00:36:05
>> um it actually ends up correlating quite

00:36:03 --> 00:36:06
a bit with usage based pricing

00:36:04 --> 00:36:08
especially with test time compute like

00:36:05 --> 00:36:10
if the thing is just like thinking quite

00:36:07 --> 00:36:12
a bit like actually you know if you

00:36:09 --> 00:36:14
charge just by usage race usage based

00:36:11 --> 00:36:15
and not outcome based you're like

00:36:13 --> 00:36:16
basically approximating outcome based at

00:36:14 --> 00:36:18
his point.

00:36:15 --> 00:36:19
>> Um if the thing is like thinking for

00:36:17 --> 00:36:20
like so long it's like highly correlated

00:36:18 --> 00:36:21
with with with what it's doing

00:36:19 --> 00:36:23
>> just adding more value.

00:36:20 --> 00:36:24
>> Yeah. Yeah. Exactly. And so like maybe

00:36:22 --> 00:36:25
at the end of the day like usage based

00:36:23 --> 00:36:27
pricing is all you need and it's like

00:36:24 --> 00:36:30
we're just going to like you know live

00:36:26 --> 00:36:31
in this in this world forever. Um but uh

00:36:29 --> 00:36:33
yeah I don't know it's it's constantly

00:36:30 --> 00:36:35
evolving. I think our change our

00:36:32 --> 00:36:37
thinking has evolved here as well. Um I

00:36:34 --> 00:36:40
I personally am like keeping track of

00:36:36 --> 00:36:41
if um the outcome based pricing setups

00:36:39 --> 00:36:43
can actually work here but at least on

00:36:40 --> 00:36:45
the API side I think you know it's it's

00:36:42 --> 00:36:46
uch a usage based setup we have to get

00:36:44 --> 00:36:47
infrastructure around this and so I

00:36:45 --> 00:36:47
think we'll probably stay with that for

00:36:46 --> 00:36:49
a while.

00:36:46 --> 00:36:52
>> So how do you think about open source? I

00:36:48 --> 00:36:54
mean, you know, I think you're the only

00:36:51 --> 00:36:54
big lab that's releasing open source. Is

00:36:53 --> 00:36:57
that

00:36:53 --> 00:36:58
>> No, Google has uh some of theirs. Yeah.

00:36:56 --> 00:37:00
Mostly smaller models on their

00:36:57 --> 00:37:02
>> side. That's right. Yeah. So, how do you

00:36:59 --> 00:37:05
think about open source visav,

00:37:01 --> 00:37:07
>> you know, competition, cannibalization,

00:37:04 --> 00:37:08
you know, like what's what's the

00:37:06 --> 00:37:10
strategical

00:37:07 --> 00:37:14
what's the complexity?

00:37:09 --> 00:37:16
>> Yeah. Yeah. Um, so, uh, I personally

00:37:13 --> 00:37:16
love open source. Like I I think I think

00:37:15 --> 00:37:18
it's great that there's a

00:37:15 --> 00:37:19
>> All of us grew up with it, right?

00:37:17 --> 00:37:20
>> Yeah. grew up with it like the internet

00:37:18 --> 00:37:22
wouldn't exist without it like you know

00:37:19 --> 00:37:22
so much of the world world is built

00:37:21 --> 00:37:24
on top of it

00:37:22 --> 00:37:26
>> cloud wouldn't exist without of it

00:37:23 --> 00:37:27
nothing would exist without of it except

00:37:25 --> 00:37:28
for maybe windows

00:37:26 --> 00:37:30
>> and so it was interesting cuz like I

00:37:27 --> 00:37:31
felt like over the last before we

00:37:29 --> 00:37:33
launched the open source model I know

00:37:30 --> 00:37:36
Sam feels this way as well it's like

00:37:32 --> 00:37:38
there's this like weird like you know uh

00:37:35 --> 00:37:39
mindset where because openi hadn't

00:37:37 --> 00:37:41
launched anything it just seemed like it

00:37:38 --> 00:37:43
was super like anti like open was like

00:37:40 --> 00:37:45
super anti open source

00:37:42 --> 00:37:46
>> um but I'd actually been having

00:37:44 --> 00:37:48
conversations with Sam ever since I

00:37:45 --> 00:37:49
joined about open sourcing a We were

00:37:47 --> 00:37:51
trying to think about like how can we

00:37:48 --> 00:37:52
sequence it? What comput is always a

00:37:50 --> 00:37:53
hard thing. It's like do we have the

00:37:51 --> 00:37:55
compute to kind of like train train this

00:37:52 --> 00:37:57
thing? So we've always wanted to kind of

00:37:54 --> 00:37:58
do this. I'm really glad that we were

00:37:56 --> 00:38:00
able to finally do it.

00:37:57 --> 00:38:02
>> I think it was ear was it earlier this

00:37:59 --> 00:38:03
year? I like lost sense of time.

00:38:01 --> 00:38:05
>> AI time is so good.

00:38:02 --> 00:38:07
>> Yeah. Was it last year? No, it was this

00:38:04 --> 00:38:09
year. Yeah. When GPOSS came out. Um and

00:38:06 --> 00:38:11
so I was just really glad that that that

00:38:08 --> 00:38:14
we did that. The way that I generally

00:38:10 --> 00:38:16
think about it is one um I think as a um

00:38:13 --> 00:38:18
this is also particularly true for um

00:38:15 --> 00:38:20
for OpenAI because as you said we are

00:38:17 --> 00:38:21
vertical and a horizontal company is

00:38:19 --> 00:38:23
like we want to continue investing in

00:38:20 --> 00:38:25
the ecosystem and just from a like brand

00:38:22 --> 00:38:26
perspective I think it's good but then

00:38:24 --> 00:38:28
also

00:38:25 --> 00:38:31
>> I think from OpenAI's perspective um

00:38:27 --> 00:38:34
>> uh if uh the AI ecosystem grows more and

00:38:30 --> 00:38:35
more it's like a rising tide and like

00:38:33 --> 00:38:38
yeah this is all like really helpful for

00:38:34 --> 00:38:39
us uh and if if we can launch an open

00:38:37 --> 00:38:40
source model and it helps like unlock a

00:38:38 --> 00:38:42
whole bunch other use cases in the other

00:38:39 --> 00:38:44
industries. I think that's, you know,

00:38:41 --> 00:38:46
that's that's actually not good for us.

00:38:43 --> 00:38:48
>> I'll say what what what people don't

00:38:45 --> 00:38:51
alk about a lot is like how well these

00:38:47 --> 00:38:53
open source AI business models actually

00:38:50 --> 00:38:55
work because like this is very like like

00:38:52 --> 00:38:55
the cannibalization risk is actually

00:38:54 --> 00:38:56
very low.

00:38:54 --> 00:38:58
>> Yeah.

00:38:55 --> 00:39:00
>> Um and like you don't really enable

00:38:57 --> 00:39:01
competitors a lot because I mean when we

00:38:59 --> 00:39:02
say open source you really mean open

00:39:00 --> 00:39:04
weights, right? It's not like they could

00:39:01 --> 00:39:06
recreate it, right? you know, and like

00:39:03 --> 00:39:07
if I can distill your API as well as I

00:39:05 --> 00:39:09
can distill like you giving me the

00:39:06 --> 00:39:10
weights in some way like so like it

00:39:08 --> 00:39:10
doesn't really change that dynamic a

00:39:09 --> 00:39:12
lot.

00:39:10 --> 00:39:13
>> Um but

00:39:11 --> 00:39:15
>> yeah I mean to be to be clear like we

00:39:12 --> 00:39:17
have not seen cannibalization at all

00:39:14 --> 00:39:19
from models and it's like it's like

00:39:16 --> 00:39:21
seems like a very different set of use

00:39:18 --> 00:39:22
cases. Um the customers tend to be like

00:39:20 --> 00:39:23
slightly different. The use cases are

00:39:21 --> 00:39:23
very different.

00:39:22 --> 00:39:25
>> Um

00:39:22 --> 00:39:27
>> and by the way it turns out inference is

00:39:24 --> 00:39:29
uper hard like to actually have like

00:39:26 --> 00:39:30
scalable fast performant that's a hard

00:39:28 --> 00:39:31
problem.

00:39:29 --> 00:39:32
>> Yeah. So, so like I'd say the way that I

00:39:30 --> 00:39:34
personally think about open source in

00:39:32 --> 00:39:36
relation to the API business in

00:39:33 --> 00:39:38
particular is uh well one it hasn't

00:39:35 --> 00:39:39
shown cannibalization risks. So, you

00:39:37 --> 00:39:41
know, I'm not particularly worried about

00:39:38 --> 00:39:42
hat. But also like especially for all

00:39:40 --> 00:39:44
these major labs, like there are usually

00:39:41 --> 00:39:45
like two or three models where like that

00:39:43 --> 00:39:47
is where you're making all of your

00:39:44 --> 00:39:48
impact, all of your revenue and those

00:39:46 --> 00:39:50
are the ones where we're throwing a

00:39:47 --> 00:39:51
bunch of resources into improving the

00:39:49 --> 00:39:53
model and these tend to be the larger

00:39:50 --> 00:39:55
ones that are like extremely hard to

00:39:52 --> 00:39:57
inference. um we have a really cracked

00:39:54 --> 00:39:59
inference team at at OpenAI and my sense

00:39:56 --> 00:40:00
is like even if we just like you know

00:39:58 --> 00:40:03
open source them like if we just

00:39:59 --> 00:40:04
literally open sourced GBD5 or something

00:40:02 --> 00:40:05
it would be really really hard to

00:40:03 --> 00:40:08
inference it at the level that we were

00:40:04 --> 00:40:09
able to to get it um to do. There's also

00:40:07 --> 00:40:11
by the way like feedback loop between

00:40:08 --> 00:40:12
the inference team and like the training

00:40:10 --> 00:40:12
team too. So like we can kind of like

00:40:11 --> 00:40:14
optimize.

00:40:11 --> 00:40:17
>> Can you can you like is it possible to

00:40:13 --> 00:40:18
verticalize models for products?

00:40:16 --> 00:40:19
>> I have you like train models

00:40:17 --> 00:40:22
pecifically for products?

00:40:18 --> 00:40:23
>> Yeah, I mean to actually Yeah. Uh I I

00:40:21 --> 00:40:25
think I mean we've kind of done this

00:40:22 --> 00:40:27
with GPD5 codecs, right? Or do you mean

00:40:24 --> 00:40:28
like even more verticalization like

00:40:26 --> 00:40:29
verticalization

00:40:27 --> 00:40:31
>> like like deep deep deep verticalization

00:40:28 --> 00:40:34
where like you know like the like like

00:40:30 --> 00:40:37
the the released model wouldn't you know

00:40:33 --> 00:40:40
it's like actually part of a product.

00:40:36 --> 00:40:42
>> I think we're like basically starting to

00:40:39 --> 00:40:43
move in that direction. Um I think

00:40:41 --> 00:40:46
there's a question of how deeply you

00:40:42 --> 00:40:47
verticalize it. I think most of what

00:40:45 --> 00:40:49
we've done is mostly at like the post-

00:40:46 --> 00:40:51
trainining like the tool use level like

00:40:48 --> 00:40:53
codex is particularly good at using the

00:40:50 --> 00:40:56
sorry GB5 code is particularly good at

00:40:52 --> 00:40:57
using the codeex harness. Um but uh

00:40:55 --> 00:40:59
there's like even deeper verticalization

00:40:56 --> 00:41:00
you can do like that and that one I

00:40:58 --> 00:41:01
think is more of an open question.

00:40:59 --> 00:41:03
>> Yeah. Well, like a lot a lot of my I

00:41:00 --> 00:41:06
mean a lot of my mental model this comes

00:41:02 --> 00:41:10
from the pixel space which is like you

00:41:05 --> 00:41:12
know um you can lura

00:41:09 --> 00:41:13
bunch of image models right and you

00:41:11 --> 00:41:15
can you can do a bunch of stuff to make

00:41:12 --> 00:41:18
it better and more suitable for some

00:41:14 --> 00:41:19
products for example um but like these

00:41:17 --> 00:41:22
open- source

00:41:18 --> 00:41:24
models are really really good and like I

00:41:21 --> 00:41:26
you would believe that you could like

00:41:23 --> 00:41:28
verticalize a model for like editing or

00:41:25 --> 00:41:29
cut and paste or this or that you know

00:41:27 --> 00:41:32
like that's actually part of this but

00:41:28 --> 00:41:34
you actually don't see Did that happen?

00:41:31 --> 00:41:36
>> Yeah, it it's almost always like you're

00:41:33 --> 00:41:37
just kind of exposing like a a model,

00:41:35 --> 00:41:38
not something like specific to a

00:41:36 --> 00:41:39
product.

00:41:37 --> 00:41:40
>> Yeah, I think I think so. I think

00:41:38 --> 00:41:42
there's a distinction to be made between

00:41:39 --> 00:41:44
the like the the image model space and

00:41:41 --> 00:41:46
the text model space also because the

00:41:43 --> 00:41:47
image models tend to be way smaller and

00:41:45 --> 00:41:49
like you can iterate on it a lot faster.

00:41:46 --> 00:41:51
Like that's why you get that crazy cool

00:41:48 --> 00:41:53
proliferation of like the image model

00:41:50 --> 00:41:54
side whereas like I don't know for the

00:41:52 --> 00:41:56
text models there's always going to be

00:41:53 --> 00:41:57
this like really big fat pre-training

00:41:55 --> 00:41:58
step that like you have to invest in

00:41:56 --> 00:41:59
here and then even the post training

00:41:57 --> 00:42:00
side is like

00:41:58 --> 00:42:03
>> you know it's not the it's not like the

00:42:00 --> 00:42:05
asiest thing like it's you know uh we

00:42:02 --> 00:42:06
like just from a compute perspective

00:42:04 --> 00:42:07
obviously it's much smaller but like

00:42:05 --> 00:42:09
it's still pretty heavy to do like a

00:42:06 --> 00:42:09
full mid train or like a post- training

00:42:08 --> 00:42:11
run

00:42:08 --> 00:42:13
>> uh and so I I actually think like that's

00:42:10 --> 00:42:15
one of the big bigger bottlenecks um

00:42:12 --> 00:42:17
because I think you're you're you are

00:42:14 --> 00:42:18
right that like on the image side yeah

00:42:16 --> 00:42:20
you can like fine tune a like image

00:42:17 --> 00:42:22
diffusion model to be like extremely

00:42:19 --> 00:42:23
good at like editing faces something

00:42:21 --> 00:42:25
very specific and build a product around

00:42:22 --> 00:42:26
that and it's like yeah you can just

00:42:24 --> 00:42:28
kind of put all these resources into and

00:42:25 --> 00:42:29
iterate on that one specific model

00:42:27 --> 00:42:31
whereas it's much it's a much heavier

00:42:28 --> 00:42:33
motion it seems like on the tech side

00:42:30 --> 00:42:36
>> I I got to say I it is a bit of an

00:42:32 --> 00:42:38
ti-attern to do both languages like

00:42:35 --> 00:42:41
language based models and diffusion like

00:42:37 --> 00:42:44
pixel models in the same company like

00:42:40 --> 00:42:46
>> um most that have tried like it found it

00:42:43 --> 00:42:48
very clunky to do it but

00:42:45 --> 00:42:50
>> I mean you and Google are the two kind

00:42:47 --> 00:42:51
of counter examples for this. And so

00:42:49 --> 00:42:53
like

00:42:50 --> 00:42:55
>> is it possible to even like converge the

00:42:52 --> 00:42:57
infrastructures on these things? Like I

00:42:54 --> 00:42:59
mean is it totally different orgs? Is it

00:42:56 --> 00:43:00
shared infrastructure? Like how do you

00:42:58 --> 00:43:02
operationalize?

00:42:59 --> 00:43:03
>> Yeah, I think uh I think you're totally

00:43:01 --> 00:43:05
right. It's an anti pattern. It's pretty

00:43:02 --> 00:43:08
tough to pull off. Um

00:43:04 --> 00:43:09
>> uh I think honestly like props to Mark

00:43:07 --> 00:43:11
on our research team for like you know

00:43:08 --> 00:43:13
structuring things in a way we're we're

00:43:10 --> 00:43:14
able to do it. Um for from my

00:43:12 --> 00:43:16
perspective, I think the biggest thing

00:43:13 --> 00:43:18
is I think our like image uh like our

00:43:15 --> 00:43:20
um I think call like the world

00:43:17 --> 00:43:22
simulation team or like the team that

00:43:19 --> 00:43:24
builds Sora and all that under Aditia uh

00:43:21 --> 00:43:27
is just extremely solid like they are

00:43:23 --> 00:43:29
pro it's like the highest concentration

00:43:26 --> 00:43:29
of like talent that I've seen in a

00:43:28 --> 00:43:31
while.

00:43:28 --> 00:43:32
>> But is it the same like is it the is it

00:43:30 --> 00:43:33
like are they like totally separate

00:43:31 --> 00:43:35
infrastructure? Do they use the same

00:43:32 --> 00:43:36
>> infra? Yeah. Yeah. So it's it's it's

00:43:34 --> 00:43:37
actually like pretty separate. So and I

00:43:35 --> 00:43:39
think that's part of the the reason why

00:43:36 --> 00:43:40
we're able to kind of do this. Well,

00:43:38 --> 00:43:41
it's like one is like the team needs to

00:43:39 --> 00:43:43
be extremely strong, which which which

00:43:40 --> 00:43:44
they are. And then two is um they're

00:43:42 --> 00:43:45
they're run very separately.

00:43:43 --> 00:43:47
They're kind of like thinking about

00:43:44 --> 00:43:49
heir own uh particular road map. They

00:43:46 --> 00:43:50
think about productization very

00:43:48 --> 00:43:53
separately as well, right? Which is how

00:43:49 --> 00:43:54
like the Sora app kind of came came out

00:43:52 --> 00:43:56
of that as well.

00:43:53 --> 00:43:57
>> Um and then uh yeah, even like the

00:43:55 --> 00:43:58
inference stacks are are slightly

00:43:56 --> 00:44:01
different are are kind of like

00:43:58 --> 00:44:02
different. Um they they they own a lot

00:44:00 --> 00:44:03
more around their inference stack and

00:44:01 --> 00:44:06
they optimize their inference stack

00:44:02 --> 00:44:07
pretty pretty uh separately. And so um I

00:44:05 --> 00:44:10
think that that contributes to to

00:44:06 --> 00:44:11
helping us run things in parallel but uh

00:44:09 --> 00:44:12
it's pretty hard to pull off for

00:44:10 --> 00:44:14
sure.

00:44:11 --> 00:44:16
>> May May maybe you can educate this on me

00:44:13 --> 00:44:17
like so I think about APIs as mostly

00:44:15 --> 00:44:19
text based from Open AI. Do you guys do

00:44:16 --> 00:44:20
actual do you do actual pixel based

00:44:18 --> 00:44:21
stuff?

00:44:19 --> 00:44:26
>> Yeah. Yeah, we do. We have a bunch uh so

00:44:20 --> 00:44:28
Dolly Dolly in the API the OG uh OG

00:44:25 --> 00:44:29
model. Uh Dolly 2 is in the API.

00:44:27 --> 00:44:30
>> That was like the first real text image

00:44:28 --> 00:44:31
model, right?

00:44:29 --> 00:44:33
>> Yeah. Yeah. Yeah. Yeah. That that was

00:44:30 --> 00:44:35
actually the model that got me to go to

00:44:32 --> 00:44:36
OpenAI because it was it was this summer

00:44:34 --> 00:44:37
when I was looking for I was thinking

00:44:35 --> 00:44:40
about something new. It's when Dolly 2

00:44:36 --> 00:44:41
came out and it just completely blew my

00:44:39 --> 00:44:43
mind. Wow.

00:44:40 --> 00:44:44
>> Uh and I distinctly remember I was like

00:44:42 --> 00:44:45
asking it to do the simplest thing like

00:44:43 --> 00:44:46
draw a picture of a duck or something.

00:44:44 --> 00:44:48
[laughter] It was like the simplest

00:44:45 --> 00:44:50
hing now and it just like it it

00:44:47 --> 00:44:52
generated a picture of a you know like a

00:44:49 --> 00:44:53
white duck and so uh uh that that was

00:44:51 --> 00:44:55
actually the thing that that kind of got

00:44:52 --> 00:44:57
me to to open in the first place. But

00:44:54 --> 00:44:59
yeah, we have a bunch in our uh in our

00:44:56 --> 00:45:01
API. Uh the image gen model uh as well

00:44:58 --> 00:45:02
is in our API and then Sora 2 is in our

00:45:00 --> 00:45:04
API. We launched it at dev day. It's

00:45:02 --> 00:45:06
actually been a huge hit. I've been very

00:45:03 --> 00:45:09
surprised. Um need more GPUs for

00:45:05 --> 00:45:10
that. Um but uh the amount of use cases

00:45:08 --> 00:45:12
>> and then from your standpoint like you

00:45:09 --> 00:45:14
can converge that like the API

00:45:11 --> 00:45:16
infrastructure probably like that.

00:45:13 --> 00:45:17
>> Uh yeah. So so there's yeah I'd say on

00:45:15 --> 00:45:19
the API side a lot of the infrastructure

00:45:16 --> 00:45:20
is shared for those but once you reach

00:45:18 --> 00:45:21
the inference level they're they're

00:45:19 --> 00:45:23
separate right because you got to

00:45:20 --> 00:45:24
inference them differently. Um, and it

00:45:22 --> 00:45:26
is that team that has just like been

00:45:23 --> 00:45:29
really laser focused on making that side

00:45:25 --> 00:45:31
particularly efficient and and uh uh uh

00:45:28 --> 00:45:32
yeah and and work well uh separate from

00:45:30 --> 00:45:34
the from the text models. Um but yeah,

00:45:31 --> 00:45:37
we have image gen, we have video

00:45:33 --> 00:45:38
gen um and we'll continue adding more uh

00:45:36 --> 00:45:41
to the API there. So it's it it feels

00:45:37 --> 00:45:43
like uh we've been evolving our our our

00:45:40 --> 00:45:44
thinking as an industry on a bunch

00:45:42 --> 00:45:46
of stuff, right? Like one of them for

00:45:43 --> 00:45:47
sure is like the models like we've

00:45:45 --> 00:45:49
talked about. The other one is like

00:45:46 --> 00:45:51
context engineering. It seems to me that

00:45:48 --> 00:45:52
like actually how you build agents and

00:45:50 --> 00:45:54
expose them has evolved too. So maybe

00:45:51 --> 00:45:57
you can talk a bit about that.

00:45:53 --> 00:45:58
>> Yeah. Yeah. I think um so at dev day

00:45:56 --> 00:45:59
this year when we launched our agent

00:45:57 --> 00:46:01
builder I got a bunch of questions

00:45:58 --> 00:46:02
around this because agent builder was

00:46:00 --> 00:46:04
like the bunch of different nodes and

00:46:01 --> 00:46:05
it's like the deterministic thing and I

00:46:03 --> 00:46:06
was like oh is this really like the

00:46:04 --> 00:46:07
future

00:46:05 --> 00:46:09
>> future of agents and

00:46:06 --> 00:46:10
>> um we obviously put a lot of thought

00:46:08 --> 00:46:11
into this when we were thinking about

00:46:09 --> 00:46:12
building that product. But the way I

00:46:10 --> 00:46:13
think about it is

00:46:11 --> 00:46:14
>> do you think they came from a point of

00:46:12 --> 00:46:15
being constrained by the way? They're

00:46:13 --> 00:46:16
like, "Oh, this is too constraining."

00:46:14 --> 00:46:17
And like,

00:46:15 --> 00:46:19
>> yeah, I think people are like, "It's too

00:46:16 --> 00:46:20
constraining. It's not like AGI forward,

00:46:18 --> 00:46:22
you know, like at the end of again at

00:46:19 --> 00:46:22
he end of the day, the AGI will do

00:46:21 --> 00:46:25
everything." And so, like, [laughter]

00:46:21 --> 00:46:25
why not why have nodes in this like node

00:46:24 --> 00:46:26
builder thing?

00:46:24 --> 00:46:28
>> Just tell it what to do.

00:46:25 --> 00:46:30
>> Yeah. And so, I think there's like two

00:46:27 --> 00:46:32
things at play here. One of them is like

00:46:29 --> 00:46:33
there is a like practicality component.

00:46:31 --> 00:46:34
And then the other thing is I think

00:46:32 --> 00:46:36
there are actually like different types

00:46:34 --> 00:46:38
of work that exist out there that could

00:46:35 --> 00:46:40
be automated into agents. And so on the

00:46:37 --> 00:46:42
practicality side is yeah like the

00:46:39 --> 00:46:43
models today just like maybe in some

00:46:41 --> 00:46:45
future world instruction following would

00:46:42 --> 00:46:47
be so good that you just like ask it to

00:46:44 --> 00:46:48
do this fourstep process and it like

00:46:46 --> 00:46:51
always does the fourstep process.

00:46:48 --> 00:46:53
Exactly. Um we're still not there yet

00:46:50 --> 00:46:54
and in the meantime you know this entire

00:46:52 --> 00:46:56
industry being born and a lot of you

00:46:53 --> 00:46:57
know people still want to use these

00:46:55 --> 00:46:59
models like what what can you build for

00:46:56 --> 00:46:59
them? So there's a practicality

00:46:58 --> 00:47:01
component of it.

00:46:58 --> 00:47:04
>> When when when did you launch that

00:47:00 --> 00:47:06
>> uh dev day? So feels like forever ago.

00:47:04 --> 00:47:08
earlier this month. Uh October

00:47:05 --> 00:47:09
[laughter] uh it was like October 6th or

00:47:07 --> 00:47:10
something. Yeah. Yeah. Yeah. So, less

00:47:08 --> 00:47:11
than a month ago, actually.

00:47:10 --> 00:47:14
>> Okay.

00:47:10 --> 00:47:16
>> Um uh it's been it's it's been crazy

00:47:13 --> 00:47:19
seeing the the uh uh reception to it. By

00:47:16 --> 00:47:20
the way, like it's uh the I think the

00:47:18 --> 00:47:22
video where Christina on my team demos

00:47:20 --> 00:47:23
agent builder is like one of the most

00:47:21 --> 00:47:24
viewed videos on our YouTube channel.

00:47:22 --> 00:47:25
Now,

00:47:23 --> 00:47:27
>> I will say I will say just anecdotally

00:47:24 --> 00:47:28
from kind of my perspective, people love

00:47:26 --> 00:47:29
it and

00:47:27 --> 00:47:31
>> but I also saw the dissonance too. Like

00:47:28 --> 00:47:32
I saw when it came out, people were

00:47:30 --> 00:47:33
like, "Wait, what is this? Is this no

00:47:31 --> 00:47:35
code? Low code?" [laughter]

00:47:32 --> 00:47:36
>> Yeah, exactly. It's another low code

00:47:34 --> 00:47:37
thing. Um

00:47:35 --> 00:47:38
>> I know people love it. Yeah. Yeah.

00:47:36 --> 00:47:40
>> Yeah. So there's a practicality piece.

00:47:37 --> 00:47:41
There's another piece which is like when

00:47:39 --> 00:47:43
we were talking to our customers, we've

00:47:40 --> 00:47:45
realized that there's like cuz at the

00:47:42 --> 00:47:46
nd of the day, a lot of this um the

00:47:44 --> 00:47:48
agent work is just trying to automate

00:47:45 --> 00:47:49
work and like what people do in their

00:47:47 --> 00:47:51
day-to-day jobs. There's like actually

00:47:48 --> 00:47:52
like two different types of work.

00:47:50 --> 00:47:53
There's the work that we think about

00:47:51 --> 00:47:54
which is like maybe what like software

00:47:52 --> 00:47:56
ngineers do which like it's very

00:47:54 --> 00:47:58
undirected. there's like a high level

00:47:55 --> 00:47:59
goal and and then you have like you know

00:47:57 --> 00:48:02
you have your cursor and you're just

00:47:58 --> 00:48:03
like writing writing code and and you

00:48:01 --> 00:48:05
're kind of like exploring things and

00:48:02 --> 00:48:06
going towards an objective that's like I

00:48:04 --> 00:48:08
don't know more like knowledge based

00:48:05 --> 00:48:09
work like data analysis maybe like that

00:48:07 --> 00:48:11
like coding is kind of like this

00:48:08 --> 00:48:12
>> um but then there's another type of work

00:48:10 --> 00:48:14
which is actually what we realize is

00:48:11 --> 00:48:16
like maybe even more prevalent in

00:48:13 --> 00:48:17
dustry than than than software we're

00:48:15 --> 00:48:19
just we're just not aware of it which is

00:48:16 --> 00:48:22
work tends to be very procedural very

00:48:18 --> 00:48:23
like SOP oriented like customer support

00:48:21 --> 00:48:25
is a good example of this like customer

00:48:22 --> 00:48:26
support there's like very clear policy

00:48:24 --> 00:48:28
that these agents and people have to

00:48:25 --> 00:48:30
follow and uh it is actually not great

00:48:27 --> 00:48:32
for them to deviate from this and like

00:48:29 --> 00:48:33
try something else. It's like the the

00:48:31 --> 00:48:35
team really the the the people running

00:48:32 --> 00:48:36
these teams just really want the the

00:48:34 --> 00:48:39
SOPs to be followed.

00:48:35 --> 00:48:39
>> Uh and this pattern actually generalizes

00:48:38 --> 00:48:41
a different work

00:48:38 --> 00:48:43
>> a standard operating procedure. Yeah.

00:48:40 --> 00:48:46
Sorry. Uh so it's like uh the way in

00:48:42 --> 00:48:48
which uh you need to operate the the um

00:48:45 --> 00:48:49
the support team. But like this

00:48:47 --> 00:48:51
extends to like marketing, this extends

00:48:48 --> 00:48:53
to like sales, extends to like a bunch

00:48:50 --> 00:48:55
way more than it has any right to. And

00:48:52 --> 00:48:58
what we realiz

00:48:54 --> 00:49:00
on that side to have determinism here of

00:48:57 --> 00:49:01
an agent builder with nodes that kind of

00:48:59 --> 00:49:03
like helps enforce this thing ends up

00:49:00 --> 00:49:04
being very helpful. But I think a lot of

00:49:02 --> 00:49:05
us especially in Silicon Valley don't

00:49:03 --> 00:49:07
really appreciate that there's like a

00:49:04 --> 00:49:07
ton of work that actually falls into

00:49:06 --> 00:49:09
this camp.

00:49:06 --> 00:49:10
>> I got to say like there's a pattern

00:49:08 --> 00:49:12
that's similar to this. I'm wondering if

00:49:09 --> 00:49:14
you've seen it that I've seen where um

00:49:11 --> 00:49:16
some regulated industries actually can't

00:49:13 --> 00:49:17
let any generated content go to a user.

00:49:15 --> 00:49:19
Yeah. Right.

00:49:16 --> 00:49:21
>> And so what they do is think it's so

00:49:18 --> 00:49:24
interesting. They'll like either pass in

00:49:20 --> 00:49:26
like like a a a conversation tree and

00:49:24 --> 00:49:28
like you can choose something from here.

00:49:25 --> 00:49:29
>> Yeah. So there's some human element uh

00:49:27 --> 00:49:30
to it.

00:49:28 --> 00:49:33
>> So so as part of the prompt they're like

00:49:30 --> 00:49:34
here are the viable things you can say

00:49:32 --> 00:49:36
choose which one to say. So the language

00:49:33 --> 00:49:37
reasoning is happening by the model but

00:49:35 --> 00:49:38
nothing generated comes out.

00:49:36 --> 00:49:38
>> Interesting. Interesting.

00:49:37 --> 00:49:39
>> Does that make sense?

00:49:37 --> 00:49:40
>> Yeah. Yeah. Yeah. Yeah.

00:49:38 --> 00:49:42
>> And then another one I've seen is like

00:49:39 --> 00:49:43
actual pseudo code. I'll pass in like a

00:49:41 --> 00:49:45
Python function

00:49:42 --> 00:49:47
>> and then it'll ask a human to like write

00:49:44 --> 00:49:49
like uh use the pseudo code to write

00:49:46 --> 00:49:51
actual code that that makes it in or

00:49:48 --> 00:49:54
>> the it actually has a response catalog

00:49:50 --> 00:49:56
as part of it and it has like the logic

00:49:53 --> 00:49:58
to apply and then interesting

00:49:55 --> 00:50:00
>> and so like the model takes the language

00:49:57 --> 00:50:02
in from the it takes the language in

00:49:59 --> 00:50:04
from the human user

00:50:01 --> 00:50:06
>> and then well like you know the logic of

00:50:03 --> 00:50:08
how to respond is I can Python code

00:50:05 --> 00:50:09
because it just turns out that like

00:50:07 --> 00:50:11
there's been a lot of code written for

00:50:08 --> 00:50:13
these types of things and then it

00:50:10 --> 00:50:14
includes the responses that you would

00:50:12 --> 00:50:16
send out. Does that make sense?

00:50:13 --> 00:50:18
Actually, a lot of NPCs are done this

00:50:15 --> 00:50:19
way, like actually video game NPC. So,

00:50:17 --> 00:50:21
so cuz cuz the way that I think about it

00:50:18 --> 00:50:23
is like

00:50:20 --> 00:50:25
>> So, so that way the with the NPCs, it's

00:50:22 --> 00:50:26
the the the actual code being generated

00:50:24 --> 00:50:28
by the model is not what ends up making

00:50:25 --> 00:50:30
it to the to the end user to the

00:50:27 --> 00:50:31
>> that's it's not the the code is not

00:50:29 --> 00:50:33
being generated by the model. It's the

00:50:30 --> 00:50:35
prompt has the code. So, like, so let's

00:50:32 --> 00:50:37
ay let's say that I have an NPC and I

00:50:34 --> 00:50:38
want the NPC

00:50:36 --> 00:50:40
>> like let's say you're you're you're the

00:50:37 --> 00:50:42
gamer and um so you're you're coming in

00:50:39 --> 00:50:44
and you're talking to my NPC, but my NPC

00:50:41 --> 00:50:45
has some logic that it needs to do like

00:50:43 --> 00:50:47
if you say a certain thing, I'll give

00:50:44 --> 00:50:49
you a key or maybe I'll barter

00:50:46 --> 00:50:51
>> like describing the game logic in

00:50:48 --> 00:50:53
English just doesn't work actually if

00:50:50 --> 00:50:54
you try and do it. And then and then

00:50:52 --> 00:50:56
like actually scripting the output

00:50:53 --> 00:50:57
doesn't work either if you needed to use

00:50:55 --> 00:50:59
it in a game context like you would have

00:50:56 --> 00:51:02
to know like give like a specific

00:50:58 --> 00:51:03
direction or a specific this or that. So

00:51:01 --> 00:51:05
how do you make these things behave in a

00:51:02 --> 00:51:08
more constrained way?

00:51:04 --> 00:51:10
>> People will pass in functions like

00:51:07 --> 00:51:12
they'll actually describe the logic in

00:51:09 --> 00:51:14
Python. So like my prompt will be like

00:51:11 --> 00:51:16
you're an NPC in a video game. The user

00:51:13 --> 00:51:18
just asked you a question. Here's the

00:51:15 --> 00:51:19
logic you should go through. If the user

00:51:17 --> 00:51:22
says this then do this. It's like the

00:51:18 --> 00:51:23
pseudo code like if the user has this

00:51:21 --> 00:51:25
you know in the belt do this like

00:51:22 --> 00:51:26
whatever whatever whatever and then here

00:51:24 --> 00:51:28
are the set of valid responses. And so

00:51:26 --> 00:51:30
you're almost constraining.

00:51:27 --> 00:51:31
>> Oh I see. I see. And then when it

00:51:29 --> 00:51:33
actually does do a response, you can you

00:51:30 --> 00:51:33
can validate that it's one of those

00:51:32 --> 00:51:34
responses.

00:51:32 --> 00:51:36
>> I see. So it's like highly structured.

00:51:34 --> 00:51:38
Yeah. Okay. So the NPC still only exists

00:51:35 --> 00:51:39
in that like the space that it can act

00:51:37 --> 00:51:40
in is still only within the space of the

00:51:38 --> 00:51:43
program that you gave

00:51:39 --> 00:51:44
>> the the the Yeah. Well, the logic is in

00:51:42 --> 00:51:46
there. So it can have a normal

00:51:43 --> 00:51:47
conversation, but like in as much as

00:51:45 --> 00:51:50
you're trying to guide the logic for

00:51:46 --> 00:51:52
like like like game design or game

00:51:49 --> 00:51:53
logic. So, so you see this with NPCs,

00:51:51 --> 00:51:54
but you also see this with regulated

00:51:52 --> 00:51:55
industries where like I literally can't

00:51:53 --> 00:51:56
have it like

00:51:54 --> 00:51:57
>> Yeah, I was going to say what you

00:51:55 --> 00:51:59
described kind of sounds like, you know,

00:51:56 --> 00:52:02
giving the the SOPs to like your set of

00:51:58 --> 00:52:03
human operators to like have to stick to

00:52:01 --> 00:52:04
it, please.

00:52:02 --> 00:52:05
>> Yeah. You must say these three things

00:52:03 --> 00:52:07
and here's like the

00:52:04 --> 00:52:08
>> you cannot give a refund if it's like

00:52:06 --> 00:52:10
less than this amount. Yeah. Yeah. Yeah.

00:52:07 --> 00:52:11
Very interesting. Yeah. I mean I

00:52:09 --> 00:52:12
mean Yeah. I don't want to equate them

00:52:10 --> 00:52:15
to NPCs, but like this is [laughter]

00:52:11 --> 00:52:17
very similar to similar. I'm just saying

00:52:14 --> 00:52:19
it's actually like if you want if you

00:52:16 --> 00:52:21
want to really guarantee what happens,

00:52:18 --> 00:52:22
you have there's like a set of

00:52:20 --> 00:52:23
techniques that you do and like

00:52:21 --> 00:52:25
>> there's some situations where you want

00:52:22 --> 00:52:26
o constrain what they do. It could be

00:52:24 --> 00:52:27
from a regulatory standpoint. It could

00:52:25 --> 00:52:28
be because you want it to run for a long

00:52:26 --> 00:52:30
time. And it also could be because I

00:52:28 --> 00:52:32
actually have game logic and my game

00:52:29 --> 00:52:34
logic is a traditional program like I

00:52:31 --> 00:52:36
have like a monetary system. I have an

00:52:33 --> 00:52:38
item system. I have a battle system.

00:52:35 --> 00:52:39
Like you can't describe that in English.

00:52:37 --> 00:52:40
Like you have to kind of give it to them

00:52:38 --> 00:52:42
so it can behave within that.

00:52:39 --> 00:52:43
>> Yes. And that is that is exactly the

00:52:41 --> 00:52:45
problem I think we're trying to solve

00:52:42 --> 00:52:46
here, right? like if you do not give it

00:52:44 --> 00:52:47
any of this like it can just kind of go

00:52:45 --> 00:52:49
ff and do do whatever and yeah there

00:52:46 --> 00:52:51
are like regular regulatory concerns

00:52:48 --> 00:52:52
around this um and that is the exact use

00:52:50 --> 00:52:53
case that I think we're trying to target

00:52:52 --> 00:52:55
with Asian builder.

00:52:52 --> 00:52:56
>> That's awesome. Well listen well we're

00:52:54 --> 00:52:57
running out of time and there's a

00:52:55 --> 00:52:58
million more things I want to ask you

00:52:56 --> 00:53:00
but I listen I really appreciate your

00:52:57 --> 00:53:02
time to come in. It was great kind of

00:52:59 --> 00:53:04
surveying like what's going on um and

00:53:01 --> 00:53:06
particularly like teasing apart

00:53:03 --> 00:53:07
horizontal versus vertical in the space

00:53:05 --> 00:53:08
which I really want to do. So thank you

00:53:06 --> 00:53:11
so much.

00:53:07 --> 00:53:13
>> Yeah, thank you.

00:53:10 --> 00:53:13
>> [music]

<!-- YOUTUBE_TRANSCRIPT_END -->
