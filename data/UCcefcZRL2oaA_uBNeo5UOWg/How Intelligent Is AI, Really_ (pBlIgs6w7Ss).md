---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "pBlIgs6w7Ss"
title: "How Intelligent Is AI, Really?"
video_url: "https://www.youtube.com/watch?v=pBlIgs6w7Ss"
thumbnail_url: "https://i.ytimg.com/vi/pBlIgs6w7Ss/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=pBlIgs6w7Ss"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2025-12-17T15:01:40.000Z"
upload_date: "2025-12-17"
duration_seconds: 719
duration_human: "11:59"
view_count: 13645
like_count: 304
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-05-12T03:28:15.756Z"
---

# How Intelligent Is AI, Really?

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=pBlIgs6w7Ss
- video_id: pBlIgs6w7Ss
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2025-12-17T15:01:40.000Z
- upload_date: 2025-12-17
- duration: 11:59
- view_count: 13645
- like_count: 304
- has_subtitle: true
- language: en-US
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

ARC-AGI is redefining how to measure progress on the path to AGI - focusing on reasoning, generalization, and adaptability instead of memorization or scale. During this month's NeurIPS 2025 conference, YC's Diana Hu sat down with ARC Prize Foundation President Greg Kamradt to find out why most AI benchmarks fail, how ARC-AGI reveals the limits of today’s models, and why measuring intelligence may be harder than building it.

Apply to Y Combinator: https://www.ycombinator.com/apply

Chapters: 
00:11 — What ARC Prize is and why it exists
00:38 — François Chollet’s definition of AGI
01:48 — What ARC-AGI Actually Tests
02:25 — When LLMs Failed the ARC Benchmark
02:44 — The Reasoning Breakthrough
03:38 — ARC-AGI Becomes the Standard
04:20 — Vanity Metrics
04:49 — False Positives in AI Progress
06:06 — The Evolution of ARC-AGI
07:05 — Inside ARC-AGI v3
08:55 — Measuring Intelligence beyond just accuracy
10:25 — What happens if a model solves ARC-AGI?

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:11 --> 00:00:17
I'm excited today to welcome Greg Camrad

00:00:14 --> 00:00:18
who is the president of the Ark Prize.

00:00:16 --> 00:00:21
>> That's right.

00:00:17 --> 00:00:22
>> Thanks for coming here at Europe's 2025

00:00:20 --> 00:00:23
in beautiful San Diego.

00:00:21 --> 00:00:25
>> Thank you, Diana.

00:00:22 --> 00:00:26
>> So, what does the Art Prize Foundation

00:00:24 --> 00:00:28
do?

00:00:25 --> 00:00:30
>> Yes. So the ARP price foundation is a

00:00:27 --> 00:00:31
nonprofit and but it's a little bit of a

00:00:29 --> 00:00:34
different nonprofit because we are very

00:00:30 --> 00:00:36
tech forward and so our mission is to

00:00:33 --> 00:00:38
pull forward open progress towards

00:00:36 --> 00:00:39
ystems that can generalize just like

00:00:37 --> 00:00:42
humans.

00:00:38 --> 00:00:44
>> So according to Franachal he defines

00:00:41 --> 00:00:47
intelligence as the ability to learn new

00:00:43 --> 00:00:49
things a lot more efficiently.

00:00:46 --> 00:00:51
What does that mean for founders as they

00:00:48 --> 00:00:53
look at all these benchmarks for all

00:00:50 --> 00:00:55
these model releases that are chasing

00:00:52 --> 00:00:57
MLU bench numbers?

00:00:54 --> 00:00:58
>> Yes, absolutely. Well, so one of the

00:00:56 --> 00:01:01
cool things about ARP prize is we have a

00:00:58 --> 00:01:02
very opinionated definition of

00:01:00 --> 00:01:05
intelligence. And this came from

00:01:01 --> 00:01:07
France's paper in 2019 on the measure of

00:01:04 --> 00:01:08
intelligence. And in there, you would

00:01:06 --> 00:01:11
normally think that intelligence would

00:01:07 --> 00:01:13
be how much can you score on the SAT

00:01:10 --> 00:01:15
test or how hard of math problems can

00:01:12 --> 00:01:16
you do? And he actually proposed an

00:01:14 --> 00:01:18
alternative theory, which is the

00:01:15 --> 00:01:21
foundation for what Arc Prize does. And

00:01:17 --> 00:01:24
he actually defined intelligence as your

00:01:20 --> 00:01:26
ability to learn new things. So, we

00:01:23 --> 00:01:27
already know that AI is really good at

00:01:25 --> 00:01:29
chess. It's superhuman. We know that AI

00:01:26 --> 00:01:30
is really good at go. It's super human.

00:01:28 --> 00:01:31
We know that it's really good at

00:01:29 --> 00:01:33
self-driving. But getting those same

00:01:30 --> 00:01:35
systems to learn something else, a

00:01:32 --> 00:01:39
different skill, that is actually the

00:01:34 --> 00:01:41
hard part. And so, um, Franis alongside

00:01:38 --> 00:01:42
that proposal of his definition of

00:01:40 --> 00:01:44
intelligence, he says, well, I don't

00:01:42 --> 00:01:47
just have a definition. I also have a

00:01:43 --> 00:01:49
benchmark or a test that tests whether

00:01:46 --> 00:01:50
or not you can learn new things. because

00:01:48 --> 00:01:52
generally people are going to learn new

00:01:49 --> 00:01:53
things over a long horizon, couple

00:01:51 --> 00:01:55
hours, couple days or maybe over a

00:01:52 --> 00:01:57
lifetime. But he proposed a test called

00:01:54 --> 00:02:00
the ARC AGI or at the time it was just

00:01:56 --> 00:02:02
called the ARC benchmark. And in it, he

00:01:59 --> 00:02:04
tests your ability to learn new things.

00:02:01 --> 00:02:07
So what's really cool is that not only

00:02:03 --> 00:02:09
humans can take this test, but also

00:02:06 --> 00:02:10
machines can take this test too. So

00:02:08 --> 00:02:13
whereas other benchmarks, they might try

00:02:09 --> 00:02:15
to do what I call PhD++ problems harder

00:02:12 --> 00:02:18
and harder. So we had MMLU, we had an

00:02:14 --> 00:02:19
MMLU plus, and now we have humanities

00:02:17 --> 00:02:22
last exam. Those are going super human,

00:02:18 --> 00:02:24
right? Arc benchmarks, normal people can

00:02:21 --> 00:02:25
do these. And so we actually test all of

00:02:23 --> 00:02:26
our benchmarks to make sure that um

00:02:24 --> 00:02:27
normal people can do them.

00:02:25 --> 00:02:31
>> And just a bit of context for the

00:02:26 --> 00:02:34
audience, this particular price was

00:02:30 --> 00:02:38
famously one that a lot of uh LLMs with

00:02:33 --> 00:02:41
just pre-training before uh ARL came in

00:02:37 --> 00:02:44
the picture before 2024.

00:02:40 --> 00:02:45
>> All these large models, language models

00:02:43 --> 00:02:47
were doing terribly, right?

00:02:44 --> 00:02:49
>> Yes. Absolutely doing terribly. You

00:02:46 --> 00:02:52
know, it's kind of weird, but nowadays

00:02:48 --> 00:02:54
it's hard to come up with problems to to

00:02:51 --> 00:02:55
stump AI. You know, back in 2012 with

00:02:53 --> 00:02:58
ImageNet, all all you needed to do was

00:02:54 --> 00:02:59
just show people an image of a cat and

00:02:57 --> 00:03:01
you could stump the computer. But when

00:02:58 --> 00:03:06
France came out with his benchmark in

00:03:00 --> 00:03:08
2019, fast forward all the way to 2024,

00:03:05 --> 00:03:09
I think at the time it was GPT4, the

00:03:07 --> 00:03:12
base model, no reasoning, I think it was

00:03:08 --> 00:03:14
getting 4%. Four or 5%. So clearly

00:03:11 --> 00:03:16
showed, hey, humans can do this, but

00:03:13 --> 00:03:17
base models are not doing anything. And

00:03:15 --> 00:03:19
what's really cool actually is right at

00:03:16 --> 00:03:21
01 I remember testing 01 and 01 preview

00:03:18 --> 00:03:23
right when that first came out I think

00:03:20 --> 00:03:25
performance jumped up to 21%. So you

00:03:22 --> 00:03:27
look at that and after 5 years those

00:03:24 --> 00:03:29
only 4% and then in such a short time it

00:03:26 --> 00:03:30
goes to 21. That tells you something

00:03:28 --> 00:03:33
really interesting is going on. So

00:03:29 --> 00:03:35
actually we used ARC to identify that

00:03:32 --> 00:03:36
reasoning paradigm was huge that was

00:03:34 --> 00:03:38
actually transformational for for what

00:03:36 --> 00:03:41
was contributing towards towards AI at

00:03:37 --> 00:03:44
he time. So much so that now all the

00:03:40 --> 00:03:47
big labs XAI, OpenAI are actually now

00:03:43 --> 00:03:49
using ArcGI as part of their model

00:03:46 --> 00:03:51
releases and the numbers that they're

00:03:48 --> 00:03:52
hitting. So it's become the standard

00:03:50 --> 00:03:54
now.

00:03:51 --> 00:03:55
>> Yeah. Well, I I tell you what um we're

00:03:53 --> 00:03:57
xcited that the community is

00:03:54 --> 00:03:58
recognizing that ArcJI can tell you

00:03:56 --> 00:04:00
something. That's that's what we're

00:03:57 --> 00:04:02
xcited about. And when public labs or

00:03:59 --> 00:04:04
Frontier Labs like to use us in terms of

00:04:01 --> 00:04:06
reporting their performance, it's really

00:04:03 --> 00:04:07
awesome that they too say, "Yes, we just

00:04:05 --> 00:04:08
came out with this Frontier model. This

00:04:06 --> 00:04:09
how we choose to measure our

00:04:07 --> 00:04:11
performance." And so in the past 12

00:04:08 --> 00:04:13
months, you're right, we've had OpenAI,

00:04:10 --> 00:04:15
we've had XAI with Gro 4, we've had

00:04:12 --> 00:04:17
Gemini with Gemini 3 Pro and Deepthink,

00:04:14 --> 00:04:18
and then just recently Anthropic with um

00:04:16 --> 00:04:20
Opus 45.

00:04:17 --> 00:04:21
>> That's cool. So what's going well with

00:04:19 --> 00:04:22
all these releases?

00:04:20 --> 00:04:25
>> So it's it's going really well that

00:04:21 --> 00:04:27
hey're adopting it. Um, however, we're

00:04:24 --> 00:04:29
mindful of vanity metrics that come from

00:04:26 --> 00:04:31
there, too. So just because they use us

00:04:28 --> 00:04:33
doesn't necessarily um mean that our

00:04:30 --> 00:04:34
mission is done or our job is done or

00:04:32 --> 00:04:35
what we're trying to do here. Because

00:04:33 --> 00:04:38
again if we go back to the mission of

00:04:34 --> 00:04:39
ARP prize is to pull forward open AGI

00:04:37 --> 00:04:41
progress. So we want to inspire

00:04:38 --> 00:04:45
searchers, small teams, individual

00:04:40 --> 00:04:47
researchers and having big labs um give

00:04:44 --> 00:04:48
an endorsement more or less is really

00:04:46 --> 00:04:50
good for that mission but it's it's also

00:04:47 --> 00:04:52
secondary to the overall mission. So now

00:04:49 --> 00:04:57
that you've seen also lots of teams

00:04:51 --> 00:04:59
trying to ship AI products, what are

00:04:56 --> 00:05:02
most common false positives that you

00:04:58 --> 00:05:03
observe? Things that feel like progress

00:05:01 --> 00:05:06
but aren't quite progress because it's

00:05:02 --> 00:05:07
easy to perhaps just hit a benchmark

00:05:05 --> 00:05:08
somewhere and call it done.

00:05:06 --> 00:05:09
>> Sure.

00:05:07 --> 00:05:11
>> But it doesn't quite work.

00:05:08 --> 00:05:14
>> Yeah. So when I answer that question, I

00:05:10 --> 00:05:15
put on my almost researcher hat because

00:05:13 --> 00:05:16
there's two hats that are very prominent

00:05:14 --> 00:05:18
within AI right now. There's

00:05:16 --> 00:05:20
economically valuable like you know

00:05:17 --> 00:05:22
e're going to go monetize this product

00:05:19 --> 00:05:25
hat and then there's going to be the um

00:05:22 --> 00:05:26
call it romantic pursuit of general

00:05:24 --> 00:05:28
intelligence hat and I I'm wearing the

00:05:25 --> 00:05:29
latter hat. So one thing that stands out

00:05:27 --> 00:05:31
o me is of course is everybody talks

00:05:28 --> 00:05:33
about it but all all the RL environments

00:05:30 --> 00:05:34
and there's been famous AI researchers

00:05:32 --> 00:05:37
that have said hey as long as we can

00:05:34 --> 00:05:39
make an RL environment we can score well

00:05:36 --> 00:05:41
on this benchmark or this domain or

00:05:38 --> 00:05:42
whatever it may be. Um to me that's kind

00:05:40 --> 00:05:43
of like whack-a-ole. You know you're not

00:05:41 --> 00:05:44
going to be able to make RL environments

00:05:42 --> 00:05:47
for every single thing you're going to

00:05:43 --> 00:05:49
end up wanting to do. And core to RGI is

00:05:46 --> 00:05:50
novelty and novel problems that end up

00:05:48 --> 00:05:52
coming in the future, which is one of

00:05:49 --> 00:05:54
the reasons why we have a hidden test

00:05:51 --> 00:05:55
set by the way. So I think while that's

00:05:53 --> 00:05:57
cool and while you're going to get

00:05:54 --> 00:05:58
short-term gains from it, I would rather

00:05:56 --> 00:06:00
see investment into systems that are

00:05:58 --> 00:06:02
actually generalizing and you don't need

00:05:59 --> 00:06:04
the environment for it because if you

00:06:01 --> 00:06:05
see or if you um compare it to humans,

00:06:03 --> 00:06:07
humans don't need the environment to go

00:06:04 --> 00:06:08
and train on that.

00:06:06 --> 00:06:11
>> Perhaps walk us through a bit of the

00:06:07 --> 00:06:14
history of uh ArcGI version. So it was

00:06:10 --> 00:06:14
Argia 1, two, and three is coming up

00:06:13 --> 00:06:17
soon.

00:06:13 --> 00:06:19
>> Yes. which is a whole new thing with

00:06:16 --> 00:06:20
gamelike environments and interactive.

00:06:18 --> 00:06:21
So walk us through the history and then

00:06:19 --> 00:06:22
tell us what

00:06:20 --> 00:06:25
>> three is all about.

00:06:21 --> 00:06:28
>> Yes, absolutely. So RKGI1 came out in

00:06:24 --> 00:06:30
2019. That was France proposed it. I

00:06:27 --> 00:06:32
think he made all 800 tasks himself

00:06:29 --> 00:06:34
within it which is a huge feat in in and

00:06:31 --> 00:06:35
of itself. Um and that came with this

00:06:33 --> 00:06:37
paper on the measure of intelligence.

00:06:34 --> 00:06:39
Now in 2025

00:06:36 --> 00:06:41
just this year earlier in March of this

00:06:38 --> 00:06:43
year we came with ARC AGI 2. And so

00:06:40 --> 00:06:46
think of that as a deeper version or an

00:06:42 --> 00:06:47
upgraded version of RKGI1. Now what's

00:06:45 --> 00:06:49
interesting is those two are both static

00:06:46 --> 00:06:51
benchmarks or you know call it

00:06:48 --> 00:06:54
metastatic benchmarks. We're coming out

00:06:50 --> 00:06:56
with RGI 3 next year. And the big

00:06:53 --> 00:06:58
difference with RKGI3 is it's going to

00:06:55 --> 00:07:00
be interactive. So if you think about

00:06:57 --> 00:07:02
reality and the in the world that we all

00:06:59 --> 00:07:04
ive in, we are constantly making an

00:07:01 --> 00:07:05
action, getting feedback and kind of um

00:07:03 --> 00:07:07
going back and forth with our

00:07:04 --> 00:07:09
environment. And it is in my belief that

00:07:06 --> 00:07:11
future AGI will be declared with an

00:07:08 --> 00:07:14
interactive benchmark because that is

00:07:10 --> 00:07:17
really what reality is. And so um V3 is

00:07:13 --> 00:07:19
going to be about 150 video game

00:07:16 --> 00:07:20
nvironments. Now we say video game

00:07:18 --> 00:07:21
because that's an easy way to

00:07:19 --> 00:07:24
communicate it, but really it's an

00:07:20 --> 00:07:26
environment where you give an action and

00:07:23 --> 00:07:27
then you get some response. Now, the

00:07:25 --> 00:07:30
really cool part and one of the thing

00:07:26 --> 00:07:32
that jazzes me up about V3 the most is

00:07:29 --> 00:07:35
we're not going to give any instructions

00:07:31 --> 00:07:37
to the test taker on how to complete the

00:07:34 --> 00:07:38
nvironment. So, there's no English,

00:07:36 --> 00:07:40
there's no words, there's no symbols or

00:07:37 --> 00:07:42
anything like that. And in order to beat

00:07:39 --> 00:07:44
he benchmark, you need to go in, you

00:07:41 --> 00:07:45
need to take a few actions and see how

00:07:43 --> 00:07:47
your environment responds and try to

00:07:44 --> 00:07:47
figure out what the ultimate goal is in

00:07:46 --> 00:07:49
the first place.

00:07:46 --> 00:07:50
>> I tried a bunch of those uh games. They

00:07:48 --> 00:07:52
were actually fun.

00:07:49 --> 00:07:53
>> Yeah, they're cool. And much like Ark 1

00:07:51 --> 00:07:57
and Ark 2, we're testing humans on every

00:07:52 --> 00:07:59
single V3 game. So, we will recruit

00:07:56 --> 00:08:01
members of the general public, so

00:07:58 --> 00:08:02
accountants, Uber drivers, you know,

00:08:00 --> 00:08:04
that type of thing. We'll put 10 people

00:08:01 --> 00:08:06
in front of each game, and if each game

00:08:03 --> 00:08:09
does not pass a minimum solvability

00:08:05 --> 00:08:11
threshold by regular humans, then we're

00:08:08 --> 00:08:12
going to exclude it. Now, again, I just

00:08:10 --> 00:08:14
have to emphasize, but that's in

00:08:11 --> 00:08:15
contrast to other benchmarks where you

00:08:13 --> 00:08:18
try to go harder and harder and harder

00:08:14 --> 00:08:20
questions. But the fact that ARK 3 will

00:08:17 --> 00:08:24
be out there and regular people can do

00:08:19 --> 00:08:25
it but AI cannot do it tells you well

00:08:23 --> 00:08:26
there's something missing still. There's

00:08:24 --> 00:08:29
omething clearly missing that we need

00:08:25 --> 00:08:31
to um need new ideas for research on.

00:08:28 --> 00:08:33
>> So there's this big theme in terms of

00:08:30 --> 00:08:34
measuring intelligence with human

00:08:32 --> 00:08:35
capabilities.

00:08:33 --> 00:08:38
>> Yes.

00:08:34 --> 00:08:40
>> So there's this growing idea that

00:08:37 --> 00:08:41
accuracy is not the only metric that

00:08:39 --> 00:08:44
matters to models.

00:08:40 --> 00:08:46
>> Yes. but also the time and amount of

00:08:43 --> 00:08:49
data that it takes to acquire new skills

00:08:45 --> 00:08:50
which is what this whole spirit of our

00:08:48 --> 00:08:50
AGI is.

00:08:49 --> 00:08:52
>> Yes.

00:08:49 --> 00:08:56
>> So I guess the question is how close are

00:08:52 --> 00:08:59
we to evaluating models in human time?

00:08:55 --> 00:09:01
>> Yes. So with regards to human time, we

00:08:58 --> 00:09:02
actually see time as a little bit

00:09:00 --> 00:09:03
arbitrary because if you throw more

00:09:01 --> 00:09:05
compute at something, you're going to

00:09:02 --> 00:09:06
reduce the time no matter what. So it

00:09:04 --> 00:09:07
's it's almost just a decision on how

00:09:05 --> 00:09:08
much compute do you want, which is how

00:09:06 --> 00:09:11
much time it's going to take, which

00:09:08 --> 00:09:12
tells you that wall clock may not be the

00:09:10 --> 00:09:14
important part for what we have

00:09:11 --> 00:09:16
intelligence here. But there's two other

00:09:13 --> 00:09:18
factors that go into the equation of

00:09:15 --> 00:09:19
intelligence. Number one is going to be

00:09:17 --> 00:09:20
the amount of training data that you

00:09:18 --> 00:09:22
need, which is exactly what you said.

00:09:19 --> 00:09:24
And then number two is actually the

00:09:21 --> 00:09:26
amount of energy that you need in order

00:09:23 --> 00:09:28
to execute upon that intelligence. And

00:09:25 --> 00:09:30
the reason why those are so fascinating

00:09:27 --> 00:09:32
is because we have benchmarks for humans

00:09:29 --> 00:09:33
on both of those. So we know how many

00:09:31 --> 00:09:36
data points a human needs in order to

00:09:32 --> 00:09:38
execute a task and we know how much

00:09:35 --> 00:09:41
energy the human brain consumes to

00:09:37 --> 00:09:42
execute a task. So with RKGI3, the way

00:09:40 --> 00:09:44
that we're actually going to be

00:09:41 --> 00:09:45
measuring efficiency, not just by

00:09:43 --> 00:09:47
accuracy,

00:09:44 --> 00:09:48
I I told you they're video games and

00:09:46 --> 00:09:50
they're turn-based video games. And so

00:09:47 --> 00:09:52
you click, you might click up, left,

00:09:49 --> 00:09:53
right, down, or something like that. And

00:09:51 --> 00:09:56
we're going to count the number of

00:09:52 --> 00:09:58
actions that it takes a human to beat

00:09:55 --> 00:09:59
he game. and we're going to compare

00:09:57 --> 00:10:02
that to the number of actions that it

00:09:58 --> 00:10:05
akes in AI to beat the game. So, back

00:10:01 --> 00:10:06
in the old um Atari days in 2016 when

00:10:04 --> 00:10:08
they were making a run at video games,

00:10:06 --> 00:10:10
then they would use brute force

00:10:07 --> 00:10:11
solutions and they would need millions

00:10:09 --> 00:10:13
and billions of frames of video game and

00:10:10 --> 00:10:14
they would need millions of actions to

00:10:12 --> 00:10:16
basically spam and brute force the

00:10:13 --> 00:10:18
space. Um, we're not going to let you do

00:10:15 --> 00:10:21
that on ARI 3 and so we're basically

00:10:17 --> 00:10:23
going to normalize AI performance to the

00:10:20 --> 00:10:24
average human performance that we see.

00:10:22 --> 00:10:24
>> That's very cool.

00:10:23 --> 00:10:25
>> Yes.

00:10:23 --> 00:10:29
>> My last question.

00:10:24 --> 00:10:32
>> Yes. Let's um wave a magic wand and then

00:10:28 --> 00:10:35
there's a super amazing team that

00:10:31 --> 00:10:39
suddenly tomorrow res launches a model

00:10:34 --> 00:10:41
that scores 100% in the arc AGI

00:10:38 --> 00:10:42
>> benchmarks.

00:10:40 --> 00:10:44
What should the world update about the

00:10:41 --> 00:10:45
priors of what AGI is?

00:10:43 --> 00:10:46
>> Yeah,

00:10:44 --> 00:10:48
>> how would the world change?

00:10:45 --> 00:10:50
>> Well, it's it's funny you ask that. Um

00:10:47 --> 00:10:53
the what AGI is question is such a deep

00:10:49 --> 00:10:54
topic that we can go much deeper on. So

00:10:52 --> 00:10:57
um from the beginning Franuis has always

00:10:53 --> 00:10:59
aid that the thing that solves arc AGI

00:10:56 --> 00:11:02
is necessary for AGI it's not

00:10:58 --> 00:11:05
sufficient. So what that means is um it

00:11:01 --> 00:11:07
he thing that solves arc AGI 1 and two

00:11:04 --> 00:11:09
will not be AGI but will it will be an

00:11:06 --> 00:11:12
authoritative source of generalization.

00:11:08 --> 00:11:15
Now our claim for V3 is that it no the

00:11:11 --> 00:11:17
thing that beats it won't be AGI however

00:11:14 --> 00:11:19
it will be the most authoritative

00:11:16 --> 00:11:21
vidence that we have to date about a

00:11:18 --> 00:11:22
system that can generalize. If a team

00:11:20 --> 00:11:24
were to come out and be at it tomorrow,

00:11:22 --> 00:11:26
we would of course want to analyze that

00:11:23 --> 00:11:28
system, figure out where still are the

00:11:25 --> 00:11:29
failure points that come from that. And

00:11:27 --> 00:11:31
like any good benchmark creator, we want

00:11:28 --> 00:11:32
o continue to guide um the world

00:11:30 --> 00:11:35
towards what we believe to be proper

00:11:31 --> 00:11:37
AGI. But ultimately um ARP, we want to

00:11:34 --> 00:11:39
put ourselves in a position when we can

00:11:36 --> 00:11:41
fully understand and be ready to declare

00:11:38 --> 00:11:42
when we do actually have AGI. So if that

00:11:40 --> 00:11:44
eam were to do it tomorrow, we'd want

00:11:41 --> 00:11:45
o have a conversation with them. We'll

00:11:43 --> 00:11:46
put it that way.

00:11:44 --> 00:11:47
>> That's a good way to wrap. Thank you so

00:11:45 --> 00:11:47
much for coming and chatting with us,

00:11:46 --> 00:11:51
Greg.

00:11:46 --> 00:11:51
>> Thank you, Diana.

<!-- YOUTUBE_TRANSCRIPT_END -->
