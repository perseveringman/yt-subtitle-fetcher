---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "MGW_Qcqr9eQ"
title: "Turing Test: Can Machines Think?"
video_url: "https://www.youtube.com/watch?v=MGW_Qcqr9eQ"
thumbnail_url: "https://i.ytimg.com/vi/MGW_Qcqr9eQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=MGW_Qcqr9eQ"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-04-27T02:33:38.000Z"
upload_date: "2020-04-27"
duration_seconds: 3625
duration_human: "1:00:25"
view_count: 121955
like_count: 4367
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:11:31.136Z"
---

# Turing Test: Can Machines Think?

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=MGW_Qcqr9eQ
- video_id: MGW_Qcqr9eQ
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-04-27T02:33:38.000Z
- upload_date: 2020-04-27
- duration: 1:00:25
- view_count: 121955
- like_count: 4367
- has_subtitle: true
- language: en
- availability: public
- tags: turing test, ai, agi, chinese room, alan turing, artificial intelligence, chinese room argument, can machines think, loebner prize, alan turing imitation game, john searle, artificial intelligence podcast, lex ai, lex mit, lex podcast, ai podcast
- categories: Science & Technology

## Description

Discussion of the 1950 paper by Alan Turing that proposed what is now called the Turing Test. This is one of the most impactful papers in the history of AI and the first paper in the AI paper club on our Discord. Join here: https://discord.gg/8RwBPRs

Slides for this video: https://bit.ly/2VIAp2R
References sheet: https://bit.ly/turing-test-paper
Lex + AI Podcast Discord: https://discord.gg/8RwBPRs

OUTLINE:
0:00 - Introduction
1:02 - Paper opening lines
3:11 - Paper overview
7:39 - Loebner Prize
11:36 - Eugene Goostman
13:43 - Google's Meena
17:17 - Objections to the Turing Test
17:29 - Objection 1: Religious
18:07 - Objection 2: "Heads in the Sand"
19:18 - Objection 3: Godel Incompleteness Theorem
19:51 - Objection 4: Consciousness
20:54 - Objection 5: Machines will never do X
21:47 - Objection 6: Ada Lovelace
23:22 - Objection 7: Brain in analog
23:49 - Objection 8: Determinism
24:55 - Objection 9: Mind-reading
26:34 - Chinese Room thought experiment
27:21 - Coffee break
31:42 - Turing Test extensions and alternatives 
36:54 - Winograd Schema Challenge
38:55 - Alexa Prize
41:17 - Hutter Prize
43:18 - Francois Chollet's Abstraction and Reasoning Challenge (ARC)
49:32 - Takeaways
56:51 - Discord community
57:56 - AI Paper Reading Club

CONNECT:
- Subscribe to this YouTube channel
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
in this video I proposed to ask the

00:00:01 --> 00:00:06
question that was asked by Alan Turing

00:00:03 --> 00:00:10
almost seventy years ago in his paper

00:00:05 --> 00:00:13
Computing Machinery and intelligence can

00:00:09 --> 00:00:17
machines think this is the first paper

00:00:12 --> 00:00:19
in a paper reading club that we started

00:00:16 --> 00:00:21
focused on artificial intelligence but

00:00:18 --> 00:00:23
also including mathematics physics

00:00:20 --> 00:00:24
computer science you know science all

00:00:22 --> 00:00:26
the scientific and engineering

00:00:23 --> 00:00:29
disciplines on the surface this is a

00:00:25 --> 00:00:31
philosophical paper but really it's one

00:00:28 --> 00:00:33
of the most impactful and important

00:00:30 --> 00:00:36
first steps towards actually engineering

00:00:32 --> 00:00:39
intelligent systems but providing a test

00:00:35 --> 00:00:42
benchmark that we call today the Turing

00:00:38 --> 00:00:45
test of how we can actually know

00:00:41 --> 00:00:48
quantifiably that a system has become

00:00:44 --> 00:00:52
intelligent so I'd like to talk about an

00:00:47 --> 00:00:54
overview of ideas in the paper provide

00:00:51 --> 00:00:57
some of the objections inside the paper

00:00:53 --> 00:00:59
and external to the paper consider some

00:00:56 --> 00:01:02
alternatives to the test proposed within

00:00:58 --> 00:01:05
the paper and then finished with some

00:01:01 --> 00:01:06
takeaways like I said the title of the

00:01:04 --> 00:01:09
paper was Computing Machinery and

00:01:05 --> 00:01:14
intelligence published almost 70 years

00:01:08 --> 00:01:16
ago in 1950 author Alan Turing and to me

00:01:13 --> 00:01:17
now we can argue about this on the slide

00:01:15 --> 00:01:20
I say it's one of the most impactful

00:01:16 --> 00:01:22
papers to me it probably is the most

00:01:19 --> 00:01:24
impactful paper in the history of

00:01:21 --> 00:01:28
artificial intelligence while only being

00:01:23 --> 00:01:31
a philosophy paper I think the number of

00:01:27 --> 00:01:33
researchers from inside computer science

00:01:30 --> 00:01:37
and from outside that has inspired as

00:01:33 --> 00:01:40
may dream at a collective intelligence

00:01:36 --> 00:01:43
level of our species inspire that this

00:01:39 --> 00:01:45
possible I think is immeasurable for

00:01:42 --> 00:01:47
all the major engineering breakthroughs

00:01:44 --> 00:01:50
and computer science breakthroughs and

00:01:46 --> 00:01:54
papers stretching all the way back to

00:01:49 --> 00:01:56
the 30s and 40s with even the work by

00:01:53 --> 00:01:59
Alan Turing with the Turing machine some

00:01:55 --> 00:02:01
of the mathematical foundations of

00:01:58 --> 00:02:03
computer science to today with deep

00:02:00 --> 00:02:04
learning a sequence of papers from the

00:02:02 --> 00:02:06
very practical

00:02:03 --> 00:02:09
Alex Ned paper to the backpropagation

00:02:05 --> 00:02:11
paper so all of these papers that

00:02:08 --> 00:02:14
underlie the actual successes of the

00:02:10 --> 00:02:19
field I think the seed was plan

00:02:13 --> 00:02:23
did the dream was born with this paper

00:02:18 --> 00:02:25
and it happens to have some of my

00:02:22 --> 00:02:29
favorite opening laws of any paper I've

00:02:24 --> 00:02:32
ver read it goes I propose to consider

00:02:28 --> 00:02:34
the question can machines think this

00:02:31 --> 00:02:37
hould begin with the definitions of the

00:02:33 --> 00:02:40
meaning of the terms machine and think

00:02:36 --> 00:02:42
the definition might be framed so as to

00:02:39 --> 00:02:44
reflect so far as possible normally use

00:02:41 --> 00:02:46
of the words but this attitude is

00:02:43 --> 00:02:49
dangerous if the meaning of the words

00:02:45 --> 00:02:51
machine and think are to be found in

00:02:48 --> 00:02:52
examining how they're commonly used it

00:02:50 --> 00:02:54
is difficult to escape the conclusion

00:02:51 --> 00:02:57
that the meaning and the answer to the

00:02:53 --> 00:02:59
question can machines think is to be

00:02:56 --> 00:03:03
sought in a statistical survey such as a

00:02:58 --> 00:03:05
Gallup poll but this is absurd instead

00:03:02 --> 00:03:07
of attempting such a definition I shall

00:03:04 --> 00:03:09
replace the question by another which is

00:03:06 --> 00:03:13
closely related to it and is expressed

00:03:08 --> 00:03:15
in relatively unambiguous terms and he

00:03:12 --> 00:03:17
goes on to define the imitation game the

00:03:14 --> 00:03:20
construction that we today call the

00:03:16 --> 00:03:23
Turing test which goes like this there's

00:03:19 --> 00:03:26
a human interrogator on one side of the

00:03:22 --> 00:03:29
wall and there's two entities one a

00:03:25 --> 00:03:32
machine one a human on the other side

00:03:28 --> 00:03:34
and the human interrogator communicates

00:03:31 --> 00:03:37
with the two entities on the other side

00:03:33 --> 00:03:40
of the wall by written word by passing

00:03:36 --> 00:03:41
notes back and forth and after some time

00:03:39 --> 00:03:43
of this conversation the human

00:03:40 --> 00:03:46
interrogator is tasked with making a

00:03:42 --> 00:03:48
decision which of the other two entities

00:03:45 --> 00:03:50
is a human and which is a machine I

00:03:47 --> 00:03:53
think this is a powerful leap of

00:03:49 --> 00:03:55
engineering which is take an ambiguous

00:03:52 --> 00:03:58
but a profound question like can

00:03:54 --> 00:04:00
machines think and convert it into a

00:03:57 --> 00:04:04
concrete test that can serve as a

00:03:59 --> 00:04:06
benchmark for intelligence but there's

00:04:03 --> 00:04:07
echoes in this question to some of the

00:04:05 --> 00:04:10
other profound questions that we often

00:04:06 --> 00:04:12
ask so not only can machines think but

00:04:09 --> 00:04:15
can machines be conscious Commission's

00:04:11 --> 00:04:19
fall in love can machines create art

00:04:14 --> 00:04:20
music poetry can machines enjoy a

00:04:18 --> 00:04:23
delicious meal

00:04:19 --> 00:04:25
piece of chocolate cake I think these

00:04:22 --> 00:04:28
are really really important questions

00:04:24 --> 00:04:30
but very difficult to ask when we're

00:04:27 --> 00:04:32
trying to create a non-human system that

00:04:29 --> 00:04:35
ries to achieve human-level

00:04:31 --> 00:04:38
capabilities so that's where touring

00:04:34 --> 00:04:41
formulates this imitation game and his

00:04:37 --> 00:04:45
prediction was that by the year 2000 or

00:04:40 --> 00:04:47
in 50 years since the paper that a

00:04:44 --> 00:04:50
machine with 100 megabytes of storage

00:04:46 --> 00:04:55
will fool 30% of humans in a five-minute

00:04:49 --> 00:04:57
st of conversation another broader

00:04:54 --> 00:04:59
societal prediction he made which i

00:04:56 --> 00:05:01
think is also interesting is that people

00:04:58 --> 00:05:04
will no longer consider a phrase like

00:05:01 --> 00:05:07
thinking machine contradictory

00:05:03 --> 00:05:10
so basically artificial intelligence at

00:05:06 --> 00:05:12
a human level become so commonplace that

00:05:09 --> 00:05:14
we would just take it for granted and

00:05:11 --> 00:05:17
the other part that he goes at lengthen

00:05:13 --> 00:05:19
towards the end of the paper to describe

00:05:16 --> 00:05:22
which he believes that learning machines

00:05:18 --> 00:05:25
or machine learning will be a critical

00:05:21 --> 00:05:28
component of this success I think it's

00:05:24 --> 00:05:31
also useful to break apart to imply

00:05:27 --> 00:05:35
claims within the paper open claims open

00:05:30 --> 00:05:38
questions one is that the imitation game

00:05:34 --> 00:05:41
as throwing proposes is a good test of

00:05:37 --> 00:05:45
intelligence and the second is that

00:05:40 --> 00:05:47
machines can actually pass this test so

00:05:44 --> 00:05:51
when you say can machines think you're

00:05:46 --> 00:05:54
both proposing an engineering benchmark

00:05:50 --> 00:05:57
for the word think and raising the

00:05:53 --> 00:06:00
questions can machines pass this

00:05:56 --> 00:06:03
benchmark one of the perhaps tragic but

00:05:59 --> 00:06:06
also exciting aspects of this whole area

00:06:02 --> 00:06:07
of work is that we still have a lot of

00:06:05 --> 00:06:09
work to do

00:06:06 --> 00:06:11
so throughout this presentation I will

00:06:08 --> 00:06:13
not only describe some of the ideas in

00:06:10 --> 00:06:15
the paper and outside of it in the year

00:06:12 --> 00:06:17
since but also some of the open

00:06:14 --> 00:06:19
questions that remain both at the

00:06:16 --> 00:06:21
philosophical the psychological and the

00:06:18 --> 00:06:23
technical levels so here the open

00:06:20 --> 00:06:26
question stands is even impossible to

00:06:22 --> 00:06:28
create a test of intelligence for

00:06:25 --> 00:06:31
artificial systems that will be

00:06:27 --> 00:06:34
convincing to us or will we always raise

00:06:30 --> 00:06:36
the bar a Korell

00:06:33 --> 00:06:38
that question is looking at the

00:06:35 --> 00:06:40
prediction that were made that people

00:06:37 --> 00:06:43
will no longer find the phrase Thinking

00:06:39 --> 00:06:47
Machines contradictory why do we still

00:06:42 --> 00:06:49
find that phrase contradictory why do we

00:06:46 --> 00:06:52
still think that computers are not at

00:06:48 --> 00:06:53
all intelligent for many people the game

00:06:51 --> 00:06:55
of chess

00:06:52 --> 00:06:58
was seen as the highest level of

00:06:54 --> 00:07:01
intelligence in these early days in fact

00:06:57 --> 00:07:04
we assign a lot of intelligence to Garry

00:07:00 --> 00:07:06
Kasparov for being one of the greatest

00:07:03 --> 00:07:09
if not the greatest chess players of all

00:07:05 --> 00:07:12
time as a human why do we not assign at

00:07:08 --> 00:07:16
least an inkling of that to IBM D blue

00:07:11 --> 00:07:17
when I beat Garry Kasparov now of course

00:07:15 --> 00:07:19
you might start saying there's a

00:07:16 --> 00:07:21
brute-force algorithm or in the case of

00:07:18 --> 00:07:23
alphago now for zero

00:07:20 --> 00:07:25
you know how the learning mechanisms

00:07:22 --> 00:07:27
behind those algorithms work when they

00:07:24 --> 00:07:29
mastered the game of go in the game of

00:07:26 --> 00:07:30
chess

00:07:28 --> 00:07:32
and we'll get to some of those

00:07:29 --> 00:07:34
objections but there's something deeply

00:07:31 --> 00:07:37
psychological within those objections

00:07:33 --> 00:07:40
that almost fear an artificial

00:07:36 --> 00:07:42
intelligence that passes the test so the

00:07:40 --> 00:07:44
drawing test is very interesting as a

00:07:41 --> 00:07:47
thought experiment as a philosophical

00:07:43 --> 00:07:49
construct but it's also interesting as a

00:07:46 --> 00:07:51
real engineering test and one of the

00:07:48 --> 00:07:54
implementations of it has been called

00:07:50 --> 00:07:58
the lobner prize which has been running

00:07:53 --> 00:08:02
since 1991 to today and the awards

00:07:57 --> 00:08:05
behind it the war structure is 25,000

00:08:01 --> 00:08:08
dollars for a system that using text

00:08:04 --> 00:08:11
alone passes the test and $100,000 that

00:08:07 --> 00:08:13
uses other modalities like visual and

00:08:10 --> 00:08:14
auditory input the rules of the

00:08:12 --> 00:08:17
competition have changed through the

00:08:13 --> 00:08:20
years but there currently are as follows

00:08:16 --> 00:08:22
it's a 25-minute conversation and in

00:08:19 --> 00:08:25
order to win to pass the test you have

00:08:21 --> 00:08:28
to fool 50 percent of the judges with

00:08:24 --> 00:08:32
which the system communicates mitsugu

00:08:27 --> 00:08:35
and rose from Steve Warwick and Bruce

00:08:31 --> 00:08:38
Wilcox have been dominating the past ten

00:08:34 --> 00:08:40
years winning all but one of the years

00:08:37 --> 00:08:43
ome details

00:08:39 --> 00:08:45
Masuka rows are both mostly scripted

00:08:42 --> 00:08:49
rule-based chatbots so they're not and

00:08:44 --> 00:08:51
to end learning systems I believe there

00:08:48 --> 00:08:54
is a little bit of machine learning but

00:08:50 --> 00:08:56
as as I understand at the core there

00:08:53 --> 00:08:57
mostly scripted and on the next slide

00:08:55 --> 00:08:59
we'll go through a transcript of a

00:08:56 --> 00:09:01
conversation with mitsuko to give you a

00:08:58 --> 00:09:04
sense of what those conversations are

00:09:00 --> 00:09:07
like but I'd like to mention sort of a

00:09:03 --> 00:09:08
tragic note really that as far as I

00:09:06 --> 00:09:11
understand the prize is no longer funded

00:09:07 --> 00:09:14
but money aside it shows that there's

00:09:10 --> 00:09:17
not a broad interest in this

00:09:13 --> 00:09:19
construction both inside and outside the

00:09:16 --> 00:09:22
research community it's really

00:09:18 --> 00:09:25
surprising to me that google deepmind

00:09:21 --> 00:09:27
facebook AI major groups major

00:09:24 --> 00:09:29
individual researchers in the field of

00:09:26 --> 00:09:32
AI have not taken on this challenge I

00:09:28 --> 00:09:34
hope to actually be a small part of

00:09:31 --> 00:09:36
changing that a little bit because I

00:09:33 --> 00:09:37
think there is a lot of value in

00:09:35 --> 00:09:39
considering the Turing test I don't

00:09:36 --> 00:09:41
hink as a distraction and I'll return

00:09:38 --> 00:09:45
to that point later on in this

00:09:41 --> 00:09:46
datian so you can pause and maybe read

00:09:44 --> 00:09:48
parts of this transcript I'll highlight

00:09:45 --> 00:09:51
on the right at the top of the right

00:09:47 --> 00:09:54
column the human says you're a robot

00:09:50 --> 00:09:58
Mitsuko answers how can a person be a

00:09:53 --> 00:10:01
robot human many people live lives akin

00:09:57 --> 00:10:05
to robots Mitsuko how many more than a

00:10:00 --> 00:10:08
million human yes Mitsuko that seems

00:10:04 --> 00:10:11
like rather a lot human do you think

00:10:07 --> 00:10:15
Southampton will be Swansea with suku I

00:10:10 --> 00:10:18
think so human why it's so good no

00:10:14 --> 00:10:20
reason it's just what I think human he

00:10:17 --> 00:10:23
must have a reason Masuka nope

00:10:19 --> 00:10:23
no real reason human which team do you

00:10:22 --> 00:10:27
support

00:10:22 --> 00:10:31
Mitsuko I support Leeds United human

00:10:26 --> 00:10:34
leads exclamation point how's the season

00:10:30 --> 00:10:36
going Masuku yes it is a city in the

00:10:33 --> 00:10:40
north of England about half a million

00:10:35 --> 00:10:45
people live there it is the same as ever

00:10:39 --> 00:10:47
so you see in this transcript it's just

00:10:44 --> 00:10:51
some little gap of in humanity that

00:10:46 --> 00:10:53
becomes apparent there's a lingering and

00:10:50 --> 00:10:57
a repeatability of points there's

00:10:53 --> 00:10:59
certain gaps in understanding and

00:10:56 --> 00:11:02
ability to follow tangents all those

00:10:58 --> 00:11:05
kinds of things but it's still not clear

00:11:01 --> 00:11:11
to me as an open question how to make

00:11:04 --> 00:11:13
xplicit where exactly the point of the

00:11:10 --> 00:11:16
failure of the test is I believe that

00:11:12 --> 00:11:17
hasn't actually been really researched

00:11:15 --> 00:11:21
that well in these constructions as

00:11:16 --> 00:11:23
opposed to decision making at the very

00:11:20 --> 00:11:25
end of a conversation is this human or

00:11:22 --> 00:11:28
not rather marking parts of a

00:11:24 --> 00:11:30
conversation is more or less human like

00:11:27 --> 00:11:32
suspicious parts that make you wonder

00:11:29 --> 00:11:33
this is not human I think they'll be

00:11:31 --> 00:11:35
really interesting to see if it's

00:11:32 --> 00:11:37
possible to make explicit what aspects

00:11:34 --> 00:11:40
of the conversation are the failure

00:11:36 --> 00:11:42
points one of the times that the claim

00:11:39 --> 00:11:44
that the Turing test was passed I think

00:11:41 --> 00:11:47
most famously was in 2014 at an

00:11:43 --> 00:11:49
exhibition event that marked the 60th

00:11:46 --> 00:11:54
anniversary of drawings death eugene

00:11:48 --> 00:11:56
goostman fooled 33% of the event judges

00:11:53 --> 00:11:59
and the method he used was to portray a

00:11:55 --> 00:12:00
13 year old Ukrainian boy that had a

00:11:58 --> 00:12:02
bunch of different personality quirks

00:11:59 --> 00:12:05
and obviously the language barrier and

00:12:01 --> 00:12:07
had some humor and a constant sort of

00:12:04 --> 00:12:10
drive towards misdirecting the

00:12:06 --> 00:12:12
conversation back to the places where it

00:12:09 --> 00:12:14
was comfortable doing so there's some

00:12:11 --> 00:12:17
criticism the committee of this event

00:12:13 --> 00:12:19
due to some sort of smoke and mirrors

00:12:16 --> 00:12:23
kind of the PR marketing side of things

00:12:18 --> 00:12:26
that that I think is always there with

00:12:22 --> 00:12:28
ese kind of exhibition events but

00:12:25 --> 00:12:31
setting that aside I think the

00:12:27 --> 00:12:33
interesting lessons here is that the

00:12:30 --> 00:12:36
parameters the rules of the actual

00:12:32 --> 00:12:39
engineering of the Turing test can

00:12:35 --> 00:12:41
determine whether it contains sort of

00:12:38 --> 00:12:46
the spirit of the Turing test which is

00:12:41 --> 00:12:48
the test that captures the ability of of

00:12:45 --> 00:12:51
an agent to have a deep meaningful

00:12:47 --> 00:12:55
conversation so in this case you can

00:12:50 --> 00:12:58
argue that a few tricks were used to

00:12:54 --> 00:13:01
circumvent the need to have a deep

00:12:57 --> 00:13:04
meaningful conversation and 30% of

00:13:00 --> 00:13:06
judges were fooled without rigorous

00:13:03 --> 00:13:09
thorough transparent open domain testing

00:13:05 --> 00:13:11
on the left is a transcript with Scott

00:13:08 --> 00:13:14
Harrison the famed computer scientist

00:13:10 --> 00:13:17
quantum computing researcher talked to

00:13:13 --> 00:13:18
him on the podcast brilliant guy he

00:13:16 --> 00:13:20
posted some of the conversation that he

00:13:17 --> 00:13:23
had with Eugene he was one of the judges

00:13:19 --> 00:13:26
on his blog that I think is really

00:13:22 --> 00:13:28
interesting so it shows that the judge

00:13:25 --> 00:13:31
the interrogator when they're an expert

00:13:27 --> 00:13:34
hey can drive they can truly put the

00:13:30 --> 00:13:37
bot to the test Scott did he really

00:13:34 --> 00:13:40
didn't allow the kind of misdirection

00:13:36 --> 00:13:42
the Eugene non-stop tried to to do and

00:13:39 --> 00:13:44
you could see that in the transcript

00:13:41 --> 00:13:48
Scott refuses to take the misdirection

00:13:43 --> 00:13:51
so as I mentioned despite the waning I

00:13:47 --> 00:13:54
guess popularity of the lobner prize and

00:13:50 --> 00:13:57
the Turing test idea in general Google

00:13:53 --> 00:13:58
has published the paper and proposed a

00:13:56 --> 00:14:01
system called Mena

00:13:57 --> 00:14:03
that's a chatbot that's an end-to-end

00:14:00 --> 00:14:06
eep learning system

00:14:03 --> 00:14:07
presentation of goal in the 2.6 billion

00:14:05 --> 00:14:10
parameters is to capture the

00:14:06 --> 00:14:12
conversational context well to be able

00:14:09 --> 00:14:14
to generate the text that fits the

00:14:11 --> 00:14:16
conversation context well now one

00:14:13 --> 00:14:17
interesting aspect of this besides being

00:14:15 --> 00:14:20
a serious attempt at creating a

00:14:16 --> 00:14:23
learning-based system for open domain

00:14:19 --> 00:14:26
conversational agents is that a new

00:14:22 --> 00:14:29
metric is proposed and it's a two-part

00:14:25 --> 00:14:32
metric of sensibleness and specificity

00:14:28 --> 00:14:34
now sensibleness is that a boss

00:14:31 --> 00:14:36
responses have to make sense in context

00:14:33 --> 00:14:38
hey have to fit the context just give

00:14:36 --> 00:14:41
you a sense for humans who have 97

00:14:37 --> 00:14:45
percent sensibleness so ability to match

00:14:40 --> 00:14:49
what we're saying to the to the context

00:14:44 --> 00:14:51
now the reason you need another side of

00:14:48 --> 00:14:54
that metric is because you can be

00:14:50 --> 00:14:56
sensible you can fit the context by

00:14:53 --> 00:14:58
being boring by being generic by making

00:14:55 --> 00:15:00
statements like I don't know or that's a

00:14:57 --> 00:15:02
good point so if these generic

00:14:59 --> 00:15:04
statements that fit a lot of different

00:15:01 --> 00:15:07
kinds of contexts so the other side of

00:15:03 --> 00:15:09
the metric is specificity basically the

00:15:06 --> 00:15:12
goal being there is don't be boring is

00:15:08 --> 00:15:14
to say something very specific to this

00:15:11 --> 00:15:17
context so not only does it match the

00:15:13 --> 00:15:21
context but it captures something very

00:15:16 --> 00:15:24
unique to this particular set of lines

00:15:20 --> 00:15:28
of conversation that form the context I

00:15:23 --> 00:15:30
think it's fair to say that the the

00:15:27 --> 00:15:34
beauty the music the the humor the wit

00:15:30 --> 00:15:36
of conversation comes from that ability

00:15:33 --> 00:15:38
to play with the specifics the

00:15:35 --> 00:15:39
specificity metric so both are really

00:15:37 --> 00:15:44
important

00:15:38 --> 00:15:46
humans achieve 86% sensibleness and

00:15:43 --> 00:15:49
specificity mean achieved seventy-nine

00:15:45 --> 00:15:52
percent compared to mitsugu who achieves

00:15:48 --> 00:15:54
56% now take this all with a grain of

00:15:51 --> 00:15:57
salt I want to be very careful here

00:15:53 --> 00:16:01
because there is also not to throw shade

00:15:56 --> 00:16:03
but it's close source currently and

00:16:00 --> 00:16:07
there's a little bit of a feeling of a

00:16:02 --> 00:16:10
PR marketing situation here naturally

00:16:06 --> 00:16:12
perhaps the paper is made in such a way

00:16:09 --> 00:16:15
the methodology and the results are made

00:16:11 --> 00:16:17
in such a way that benefit the way the

00:16:14 --> 00:16:18
learning framework was constructed

00:16:16 --> 00:16:20
now that's I don't want to over

00:16:17 --> 00:16:22
criticize that because I think there's

00:16:19 --> 00:16:24
till a lot of interesting ideas in this

00:16:21 --> 00:16:26
paper but in terms of looking at the

00:16:23 --> 00:16:29
actual percentages of 86 percent human

00:16:25 --> 00:16:32
performance and 79 percent meaning a

00:16:28 --> 00:16:34
performance I think we're quite away

00:16:31 --> 00:16:36
from being able to make conclusive

00:16:33 --> 00:16:38
statements about a system achieving

00:16:35 --> 00:16:40
human level conversational capabilities

00:16:37 --> 00:16:43
o those plots should be taken with a

00:16:39 --> 00:16:44
grain of salt but the actual content of

00:16:42 --> 00:16:47
the idea is I think is really

00:16:43 --> 00:16:51
interesting I think quite obviously the

00:16:46 --> 00:16:54
future long term but hopefully short

00:16:50 --> 00:16:56
erm is in learning end to end

00:16:53 --> 00:16:58
learning based approaches to open domain

00:16:55 --> 00:17:01
conversation so just like drawing

00:16:57 --> 00:17:03
described funny enough 70 years ago on

00:17:00 --> 00:17:04
this paper that machine learning it

00:17:02 --> 00:17:07
would be essential to success I I

00:17:03 --> 00:17:09
believe the same it's a lot less

00:17:06 --> 00:17:11
interesting and revolutionary to think

00:17:08 --> 00:17:14
so today but I believe that machine

00:17:10 --> 00:17:17
learning will also need to be a very

00:17:13 --> 00:17:19
central part of achieving human level

00:17:16 --> 00:17:23
conversational capabilities so let's

00:17:18 --> 00:17:25
talk through some objections nine of

00:17:22 --> 00:17:28
them are highlighted by Turing himself

00:17:24 --> 00:17:32
in his paper here provides some informal

00:17:27 --> 00:17:35
highly informal summaries the first

00:17:31 --> 00:17:38
objection is religious which connects

00:17:34 --> 00:17:43
thinking to quote unquote the soul and

00:17:37 --> 00:17:47
God presumably is the giver of the soul

00:17:42 --> 00:17:51
to humans now Tory's response to that is

00:17:46 --> 00:17:56
God is all-powerful there is no reason

00:17:50 --> 00:18:00
why he can't assign souls to anything

00:17:55 --> 00:18:02
biological or artificial so it doesn't

00:17:59 --> 00:18:05
seem that whatever mechanism by which

00:18:01 --> 00:18:07
the soul arrives in the human cannot

00:18:05 --> 00:18:10
also be repeated for artificial

00:18:06 --> 00:18:13
creatures the second objection is the

00:18:09 --> 00:18:14
quote unquote head in the sand it's a

00:18:12 --> 00:18:16
bit of a ridiculous one but I think it's

00:18:14 --> 00:18:19
an important one because it keeps coming

00:18:15 --> 00:18:21
up often even in today's context

00:18:18 --> 00:18:24
highlighted by folks like you know I

00:18:20 --> 00:18:27
musk Stuart Russell and so on the head

00:18:23 --> 00:18:29
in the sand objection is that AGI is

00:18:26 --> 00:18:31
cary so human level and super human

00:18:28 --> 00:18:34
level intelligence

00:18:30 --> 00:18:36
scary today we talk about is existential

00:18:33 --> 00:18:38
threats it seems like the world would be

00:18:35 --> 00:18:39
totally transformed if we have something

00:18:37 --> 00:18:42
like that then it could be transform in

00:18:38 --> 00:18:45
a highly negative way so let's not think

00:18:41 --> 00:18:47
about it because it kind of seems far

00:18:44 --> 00:18:50
away so it probably won't happen so

00:18:46 --> 00:18:51
let's just not think about it that's

00:18:49 --> 00:18:54
kind of the objection of the Turing test

00:18:50 --> 00:18:56
it's so far away it's not worthwhile to

00:18:53 --> 00:18:58
even think about a test for this

00:18:55 --> 00:19:00
intelligence or what human level

00:18:57 --> 00:19:02
intelligence means or what superhuman

00:18:59 --> 00:19:04
level intelligent means the response

00:19:01 --> 00:19:06
quite naturally is that it doesn't

00:19:03 --> 00:19:09
matter how you feel about something on

00:19:05 --> 00:19:11
whether it's going to happen or not so

00:19:08 --> 00:19:14
we kind of have to set our feelings

00:19:10 --> 00:19:18
aside and not allow fear or emotion to

00:19:13 --> 00:19:21
model our thinking or detract us from

00:19:17 --> 00:19:23
thinking about it at all the third

00:19:20 --> 00:19:24
objection is from Gaydos incompleteness

00:19:22 --> 00:19:26
theorem saying there's limits to

00:19:23 --> 00:19:30
computation this is the Roger Penrose

00:19:25 --> 00:19:32
line of thinking that basically if a

00:19:29 --> 00:19:34
machine is a computation system there is

00:19:31 --> 00:19:37
limited capabilities in that it can

00:19:33 --> 00:19:40
ever be a perfectly rational system

00:19:36 --> 00:19:42
Tony's response to this is that humans

00:19:39 --> 00:19:45
are not rational either they're flawed

00:19:41 --> 00:19:47
nowhere does it say that intelligence

00:19:44 --> 00:19:50
quals infallibility in fact it could

00:19:46 --> 00:19:54
probably be argued that phal ability is

00:19:49 --> 00:19:55
at the core of intelligence the fourth

00:19:53 --> 00:19:58
objection is that consciousness may be

00:19:54 --> 00:20:00
required for intelligence Touring's

00:19:57 --> 00:20:02
response to this is to separate whether

00:19:59 --> 00:20:04
something is conscious and whether

00:20:01 --> 00:20:05
something appears to be cautious so the

00:20:03 --> 00:20:08
focus of the Turing test is how

00:20:04 --> 00:20:12
something appears and so in some sense

00:20:07 --> 00:20:14
humans to us as far as we know only

00:20:11 --> 00:20:16
appear to be cautious we can't prove

00:20:13 --> 00:20:19
that they're actually conscious humans

00:20:15 --> 00:20:22
outside of ourselves and so since humans

00:20:18 --> 00:20:24
only appear to be cautious there's no

00:20:21 --> 00:20:26
reason to think that machines can't also

00:20:23 --> 00:20:27
appear to be cautious and that's at the

00:20:25 --> 00:20:30
core of the Turing test

00:20:26 --> 00:20:32
so the Turing test kind of skirts around

00:20:29 --> 00:20:34
the question of whether something is or

00:20:31 --> 00:20:36
isn't intelligence whether is or isn't

00:20:33 --> 00:20:38
conscious the fundamental question is

00:20:35 --> 00:20:40
does it appear to be intelligent does it

00:20:37 --> 00:20:42
appear to be cautious so he actually

00:20:39 --> 00:20:44
doesn't respond to the idea that

00:20:41 --> 00:20:47
consciousness is or isn't required

00:20:43 --> 00:20:50
for intelligence he just says that if it

00:20:46 --> 00:20:52
is there's no reason why you can't fake

00:20:49 --> 00:20:57
it and that will be sufficient to

00:20:51 --> 00:21:00
achieve the display of intelligence the

00:20:56 --> 00:21:03
fifth objection is the negative Nancy

00:20:59 --> 00:21:06
objection of machines will never be able

00:21:02 --> 00:21:10
to do X whatever X is you can make it

00:21:05 --> 00:21:11
love joke humor understand to generate

00:21:09 --> 00:21:16
humor

00:21:10 --> 00:21:18
eat enjoy food create art music poetry

00:21:15 --> 00:21:20
and so on so there's a lot of things we

00:21:17 --> 00:21:23
could put in that X the machines could

00:21:19 --> 00:21:26
never do and basically highlighting our

00:21:22 --> 00:21:28
human intuition about the limitations of

00:21:25 --> 00:21:29
machines just like well the second

00:21:27 --> 00:21:32
objection

00:21:28 --> 00:21:34
aturally the response here is that the

00:21:31 --> 00:21:37
objection that machines will never do X

00:21:33 --> 00:21:43
doesn't have any actual reasoning behind

00:21:36 --> 00:21:46
it is just a vapid opinion based on the

00:21:42 --> 00:21:49
world today refusing to believe that the

00:21:45 --> 00:21:51
world of tomorrow will be different the

00:21:48 --> 00:21:54
sixth objection probably the most

00:21:50 --> 00:21:58
important one the most interesting comes

00:21:53 --> 00:22:00
by way of Ada Lovelace lady Lovelace the

00:21:57 --> 00:22:02
mother of computer science it was a

00:21:59 --> 00:22:05
basic idea that machines can only do

00:22:01 --> 00:22:07
what we program them to do now this is

00:22:04 --> 00:22:09
an objection that appears in many forms

00:22:06 --> 00:22:11
throughout before touring and after

00:22:08 --> 00:22:13
touring and I think it's a really

00:22:10 --> 00:22:16
important objection to think about so in

00:22:12 --> 00:22:19
this particular case I think Turia's

00:22:15 --> 00:22:21
response is quite shallow but it is

00:22:18 --> 00:22:24
nevertheless pretty interesting and

00:22:20 --> 00:22:27
we'll talk about it again later on his

00:22:23 --> 00:22:29
responses well if machines can only do

00:22:26 --> 00:22:31
what we programmed them to do we can

00:22:28 --> 00:22:35
rephrase that statement as saying

00:22:30 --> 00:22:37
machines can't surprise us and when you

00:22:34 --> 00:22:38
rephrase it that way it becomes clear

00:22:36 --> 00:22:40
that machines actually surprised us all

00:22:37 --> 00:22:44
the time a system that is sufficiently

00:22:39 --> 00:22:47
complex will no longer be one of which

00:22:43 --> 00:22:49
we have a solid intuition of how it

00:22:46 --> 00:22:51
behaves even if we built all the

00:22:48 --> 00:22:53
individual pieces of code for those of

00:22:50 --> 00:22:55
you have programmed things so I've

00:22:52 --> 00:22:58
written a lot of programs

00:22:54 --> 00:22:59
in the initial design stage of an

00:22:57 --> 00:23:01
intuition about how it should behave

00:22:58 --> 00:23:03
there's a design there's a plan

00:23:00 --> 00:23:06
you know what the individual functions

00:23:02 --> 00:23:10
do but as the piece of code grows your

00:23:05 --> 00:23:13
ability to intuit exactly the mapping

00:23:09 --> 00:23:16
from input to output fades with the size

00:23:13 --> 00:23:19
of the code base even if you understand

00:23:15 --> 00:23:22
everything about the code and even if

00:23:18 --> 00:23:24
you said logical and syntactic bugs

00:23:21 --> 00:23:26
aside the

00:23:23 --> 00:23:28
objection looks to the brain and looks

00:23:25 --> 00:23:31
to the continuous analog nature of that

00:23:27 --> 00:23:35
particular neural network system so

00:23:30 --> 00:23:38
Touring's response to that is sure the

00:23:34 --> 00:23:40
brain might be analog and then computer

00:23:37 --> 00:23:42
digital computers are discrete but if

00:23:39 --> 00:23:45
you have a big enough digital computer

00:23:41 --> 00:23:47
it can sufficiently approximate the

00:23:44 --> 00:23:50
analog system meaning to a sufficient

00:23:46 --> 00:23:54
degree that it would appear intelligent

00:23:49 --> 00:23:57
he eighth objection is the freewill

00:23:53 --> 00:24:00
objection right is that when you have

00:23:56 --> 00:24:04
deterministic rules laws algorithms

00:23:59 --> 00:24:08
they're going to result in predictable

00:24:03 --> 00:24:10
behavior and this kind of exactly

00:24:07 --> 00:24:15
deterministic predictable behavior

00:24:09 --> 00:24:18
doesn't quite feel like the mind that we

00:24:14 --> 00:24:20
know us humans as possessing this kind

00:24:17 --> 00:24:24
of feeling that underlies what's

00:24:19 --> 00:24:28
required for intelligence for a mind I

00:24:23 --> 00:24:30
think is behind the Chinese room thought

00:24:27 --> 00:24:33
experiment that we'll talk about next

00:24:29 --> 00:24:37
so Touring's response here is that

00:24:32 --> 00:24:39
humans very well could be a complex

00:24:36 --> 00:24:41
collection of rules there's no

00:24:38 --> 00:24:44
indication that we're not just because

00:24:40 --> 00:24:46
we don't understand or don't even have

00:24:43 --> 00:24:50
the tools to explore the kind of rules

00:24:45 --> 00:24:53
that underlie our brain doesn't mean

00:24:49 --> 00:24:56
it's not just a collection of

00:24:52 --> 00:25:00
deterministic perfectly predictable sets

00:24:55 --> 00:25:00
of rules objection number nine is kind

00:24:59 --> 00:25:03
of fun

00:24:59 --> 00:25:05
quite possibly Turing is throwing us but

00:25:02 --> 00:25:08
more likely the ideas of mind-reading

00:25:04 --> 00:25:11
extrasensory perception telepathy were a

00:25:07 --> 00:25:13
little bit more popular in his time so

00:25:10 --> 00:25:16
the objection here is what if

00:25:12 --> 00:25:18
mind-reading was used to cheat the test

00:25:15 --> 00:25:22
so basically if human to human

00:25:17 --> 00:25:25
communication through telepathy could be

00:25:21 --> 00:25:27
used then a machine can't achieve that

00:25:24 --> 00:25:30
same kind of telepathic communication

00:25:26 --> 00:25:33
and so that can be used to uh to

00:25:29 --> 00:25:34
circumvent the effectiveness of the test

00:25:32 --> 00:25:36
now

00:25:33 --> 00:25:39
join us response to this is well you

00:25:35 --> 00:25:41
just have to design our room that not

00:25:38 --> 00:25:44
only protects you from being able to see

00:25:40 --> 00:25:48
whether it's a robot or a human but also

00:25:43 --> 00:25:51
design a telepathy proof room that

00:25:47 --> 00:25:55
prevents telepathic communication again

00:25:50 --> 00:25:56
could be touring trolling us but I think

00:25:54 --> 00:25:58
more importantly I think it's a nice

00:25:55 --> 00:26:01
illustration at the time and even still

00:25:57 --> 00:26:02
today that there's a lot of mystery

00:26:00 --> 00:26:05
about how our mind works

00:26:01 --> 00:26:07
if you chuckle and completely laugh off

00:26:04 --> 00:26:09
the possibility of telepathic

00:26:06 --> 00:26:12
ommunication I think you're assuming

00:26:08 --> 00:26:15
too much about your own knowledge about

00:26:11 --> 00:26:17
how our mind works I think we know very

00:26:14 --> 00:26:19
little about how our mind works it is

00:26:16 --> 00:26:22
true we have very little scientific

00:26:18 --> 00:26:23
evidence of telepathic communication but

00:26:21 --> 00:26:26
hat shouldn't you shouldn't take the

00:26:22 --> 00:26:28
next leap and have a feeling like you

00:26:25 --> 00:26:31
nderstand that telepathic communication

00:26:27 --> 00:26:33
is impossible you should nevertheless

00:26:30 --> 00:26:36
maintain an open mind but as an

00:26:32 --> 00:26:38
objection it doesn't seem to be a very

00:26:35 --> 00:26:40
effective one I wanted to dedicate just

00:26:37 --> 00:26:42
one slide and probably the most famous

00:26:39 --> 00:26:45
objection to the Turing test proposed by

00:26:41 --> 00:26:48
John Searle in 1980 in his paper minds

00:26:44 --> 00:26:51
brains and programs commonly known as

00:26:48 --> 00:26:53
the Chinese room thought experiment and

00:26:50 --> 00:26:55
it's kind of a combination of number

00:26:52 --> 00:26:57
four number six and number eight

00:26:54 --> 00:27:00
objections in the previous slide which

00:26:56 --> 00:27:03
is the consciousness is required for

00:26:59 --> 00:27:05
intelligence the ada lovelace objection

00:27:02 --> 00:27:09
that programs can only do what we

00:27:04 --> 00:27:12
program them to do and the deterministic

00:27:08 --> 00:27:14
free will objection that deterministic

00:27:11 --> 00:27:16
rules will lead to predictable behavior

00:27:13 --> 00:27:18
and that doesn't seem to be like what

00:27:15 --> 00:27:20
he mind does so there's echoes of all

00:27:17 --> 00:27:23
those objections that toring anticipated

00:27:19 --> 00:27:28
all put together into the Chinese room

00:27:22 --> 00:27:32
as a small aside it is now 6 a.m. I did

00:27:27 --> 00:27:34
not sleep last night so this video is

00:27:31 --> 00:27:40
brought to you by this magic potion

00:27:33 --> 00:27:43
called nitro cold brew a an excessively

00:27:39 --> 00:27:45
expensive canned beverage from Starbucks

00:27:42 --> 00:27:49
that fuels

00:27:44 --> 00:27:53
me this wonderful Saturday morning

00:27:48 --> 00:27:56
here's to you dear friends okay the

00:27:52 --> 00:27:59
Chinese room involves following

00:27:55 --> 00:28:00
instructions of an algorithm so there's

00:27:58 --> 00:28:03
a human sitting inside a room that

00:27:59 --> 00:28:05
doesn't know how to speak Chinese but

00:28:02 --> 00:28:08
here's notes being passed to them

00:28:04 --> 00:28:10
inside the room from outside in Chinese

00:28:07 --> 00:28:13
and all they do is follow a set of rules

00:28:09 --> 00:28:20
in order to respond to that language so

00:28:12 --> 00:28:22
the idea is if the brain inside the

00:28:19 --> 00:28:25
system that passes the Turing test is

00:28:21 --> 00:28:28
imply following a set of rules that

00:28:24 --> 00:28:31
it's not truly understanding it is not

00:28:27 --> 00:28:33
conscious it does not have a mind the

00:28:30 --> 00:28:36
objection is philosophical so there's

00:28:32 --> 00:28:39
not for my computer science engineering

00:28:35 --> 00:28:41
self there's not enough meat in it to

00:28:38 --> 00:28:45
even make it that interesting it's very

00:28:40 --> 00:28:45
human centric but allow us to explore it

00:28:44 --> 00:28:49
further

00:28:44 --> 00:28:54
so the key argument is that programs

00:28:48 --> 00:28:55
computational systems are formal and so

00:28:53 --> 00:29:01
they can capture syntactic structure

00:28:54 --> 00:29:04
minds our brains have mental content so

00:29:00 --> 00:29:06
they can capture semantics and so the

00:29:03 --> 00:29:09
claim that I think is the most important

00:29:05 --> 00:29:12
he clearest in the paper is that syntax

00:29:08 --> 00:29:15
by itself is neither constitutive of nor

00:29:11 --> 00:29:17
sufficient for semantics so just because

00:29:14 --> 00:29:19
you can replicate the syntax of the

00:29:16 --> 00:29:21
language doesn't mean you can truly

00:29:18 --> 00:29:23
understand it and this is the same kind

00:29:20 --> 00:29:26
of criticism we hear of language models

00:29:22 --> 00:29:28
of today with transformers that opening

00:29:25 --> 00:29:29
is gp2 really doesn't understand the

00:29:27 --> 00:29:32
language

00:29:28 --> 00:29:34
it's just mimicking the statistics of it

00:29:31 --> 00:29:37
so well that it can generate

00:29:33 --> 00:29:40
syntactically correct and even like have

00:29:36 --> 00:29:42
choes of semantic structure that

00:29:39 --> 00:29:45
indicates some kind of understanding but

00:29:41 --> 00:29:47
it doesn't to me that argument is not

00:29:44 --> 00:29:48
very interesting from an engineering

00:29:46 --> 00:29:51
perspective because it just sounds like

00:29:47 --> 00:29:53
saying humans can understand things

00:29:50 --> 00:29:56
humans are special

00:29:52 --> 00:29:57
therefore machines cannot understand

00:29:55 --> 00:29:59
things

00:29:56 --> 00:30:02
it's a very human centric argument

00:29:58 --> 00:30:06
hat's not allowing us to rigorously

00:30:01 --> 00:30:09
explore what exactly this understanding

00:30:05 --> 00:30:12
mean from a computational perspective or

00:30:08 --> 00:30:14
put in other words if understanding

00:30:11 --> 00:30:17
intelligence consciousness either one of

00:30:13 --> 00:30:21
those is not achievable through

00:30:16 --> 00:30:24
computation then where is the point that

00:30:20 --> 00:30:26
computation hits the wall the most

00:30:23 --> 00:30:28
interesting open questions to me here

00:30:25 --> 00:30:29
are on the point of faking things or

00:30:27 --> 00:30:32
mimicking or the appearance of things

00:30:28 --> 00:30:34
does the mimicking of thinking equal

00:30:31 --> 00:30:36
thinking does the mimicking of

00:30:33 --> 00:30:39
consciousness equal consciousness does

00:30:35 --> 00:30:41
the mimicking of love equal love this is

00:30:38 --> 00:30:43
omething that I think a lot about and

00:30:40 --> 00:30:45
epending on the day go back and forth

00:30:42 --> 00:30:47
but I tend to believe from an

00:30:44 --> 00:30:49
engineering perspective I tend to agree

00:30:46 --> 00:30:52
with the spirit and the work of Alan

00:30:48 --> 00:30:55
Turing in that at this time as engineers

00:30:51 --> 00:30:57
we can only focus on building the

00:30:54 --> 00:30:59
appearance of thinking the appearance of

00:30:56 --> 00:31:02
consciousness the appearance of love I

00:30:58 --> 00:31:04
think as we work towards creating that

00:31:01 --> 00:31:08
appearance will actually begin to

00:31:03 --> 00:31:10
understand the fundamentals of what it

00:31:07 --> 00:31:14
means to be conscious what it means to

00:31:09 --> 00:31:16
love what it means to think you may have

00:31:13 --> 00:31:18
ven heard me say sometimes that the

00:31:15 --> 00:31:21
appearance of consciousness is

00:31:17 --> 00:31:23
consciousness I think that's me being a

00:31:20 --> 00:31:25
little bit poetic but I think from our

00:31:22 --> 00:31:30
perspective from our exceptionally

00:31:24 --> 00:31:33
limited understanding both problems are

00:31:29 --> 00:31:34
in the same direction so it's not like

00:31:32 --> 00:31:36
if we focus on creating the appearance

00:31:33 --> 00:31:39
of consciousness that's going to lead us

00:31:35 --> 00:31:40
astray in my personal view is going to

00:31:38 --> 00:31:42
lead us very far down the road of

00:31:39 --> 00:31:45
actually understanding and maybe one day

00:31:41 --> 00:31:47
engineering consciousness and now I'd

00:31:44 --> 00:31:49
like to talk about some alternatives and

00:31:46 --> 00:31:51
variations the Turing test that I find

00:31:48 --> 00:31:53
quite interesting so there's a lot of

00:31:50 --> 00:31:56
kind of natural variations and

00:31:52 --> 00:32:01
extensions to the Turing test first the

00:31:55 --> 00:32:04
total Turing test proposed in 1989 it

00:32:00 --> 00:32:05
extends the Turing test in the natural

00:32:03 --> 00:32:08
anguage conversation domain to

00:32:04 --> 00:32:10
perception computer vision and obviously

00:32:07 --> 00:32:11
manipulation of robotics so it takes it

00:32:09 --> 00:32:14
into the

00:32:10 --> 00:32:18
world the interesting question here to

00:32:13 --> 00:32:23
me is whether adding extra modalities

00:32:17 --> 00:32:25
like audio visual manipulation makes the

00:32:22 --> 00:32:29
test harder or easier to me is very

00:32:24 --> 00:32:33
possible that a test with a narrow

00:32:28 --> 00:32:34
bandwidth of communication such as the

00:32:32 --> 00:32:37
natural language communication the

00:32:33 --> 00:32:38
Turing test is actually harder to pass

00:32:36 --> 00:32:41
than the one that includes other

00:32:37 --> 00:32:44
modalities but anyway one of the

00:32:40 --> 00:32:46
powerful things about the original

00:32:43 --> 00:32:51
Turing test is that is so simple the

00:32:45 --> 00:32:54
Lovelace test proposed in 2001 builds on

00:32:50 --> 00:32:56
the Ada Lovelace objection to form the

00:32:53 --> 00:33:00
test that says the machine has to do

00:32:55 --> 00:33:03
something surprising that the creator or

00:32:59 --> 00:33:06
the person who's aware how the program

00:33:02 --> 00:33:10
was created cannot explain so it should

00:33:05 --> 00:33:14
be truly surprised there is also in 2014

00:33:09 --> 00:33:16
was proposed Lovelace 2.0 test which

00:33:13 --> 00:33:18
emphasizes a more constrained definition

00:33:15 --> 00:33:21
of what surprising is because it's very

00:33:17 --> 00:33:25
difficult to pin down to formalize the

00:33:20 --> 00:33:27
idea of surprise and explain right in in

00:33:24 --> 00:33:30
the original formulation of the Lovelace

00:33:26 --> 00:33:34
test but with Lovelace 2.0 it emphasizes

00:33:29 --> 00:33:36
ort of creativity art so on so it's

00:33:33 --> 00:33:40
more concrete than surprise especially

00:33:35 --> 00:33:42
if you define constraints to which

00:33:39 --> 00:33:45
creative medium we're operating in you

00:33:41 --> 00:33:49
basically have to create an impressive

00:33:44 --> 00:33:51
piece of artistic work I think that's an

00:33:48 --> 00:33:54
interesting conception but it takes us

00:33:50 --> 00:33:58
in the land that's much more not less

00:33:54 --> 00:34:02
ubjective than the original Turing test

00:33:57 --> 00:34:03
but this brings us to the open and the

00:34:01 --> 00:34:07
very interesting question of surprise

00:34:02 --> 00:34:10
which i think is really at the core of

00:34:06 --> 00:34:14
our conception of intelligence I think

00:34:09 --> 00:34:16
it is true that our idea of what makes

00:34:13 --> 00:34:18
an intelligent machine is one that

00:34:15 --> 00:34:21
really surprised us so when we one day

00:34:17 --> 00:34:23
finally create a system of human level

00:34:20 --> 00:34:27
or superhuman level intelligence

00:34:22 --> 00:34:30
we will surely be surprised so we have

00:34:26 --> 00:34:31
to think what kind of behavior is one

00:34:29 --> 00:34:35
that will surprise this to the core to

00:34:30 --> 00:34:38
me I have many examples in mind that

00:34:34 --> 00:34:40
I'll cover in future videos but one

00:34:37 --> 00:34:44
certainly one of the hardest ones is

00:34:39 --> 00:34:47
humor and finally the truly total Turing

00:34:43 --> 00:34:50
test proposed in 1998 proposes an

00:34:46 --> 00:34:53
interesting philosophical idea that we

00:34:49 --> 00:34:56
should not judge the performance of an

00:34:52 --> 00:34:59
individual agent in an isolated context

00:34:55 --> 00:35:01
but instead look at the body of work

00:34:58 --> 00:35:04
produced by a collection of intelligent

00:35:00 --> 00:35:07
agents throughout their evolution with

00:35:03 --> 00:35:09
some constraints on the consistency

00:35:06 --> 00:35:13
underlying you know the evolutionary

00:35:08 --> 00:35:16
process it's interesting to suggest that

00:35:12 --> 00:35:20
he way we conceive of intelligence

00:35:15 --> 00:35:22
amongst us humans is grounded in the

00:35:19 --> 00:35:24
long arc of history of the body of work

00:35:21 --> 00:35:27
we've created together I don't find that

00:35:23 --> 00:35:30
argument convincing but I do find the

00:35:26 --> 00:35:34
interesting question and the open

00:35:29 --> 00:35:38
question the idea that we should measure

00:35:33 --> 00:35:40
systems not in the moment or a

00:35:37 --> 00:35:42
particular five-minute period or 20

00:35:39 --> 00:35:45
minute period but over a period of

00:35:41 --> 00:35:48
months and years perhaps condensed in a

00:35:44 --> 00:35:52
simulated context so really increase the

00:35:47 --> 00:35:55
scale at which we judge interactions by

00:35:51 --> 00:36:00
several orders of magnitude that to me

00:35:54 --> 00:36:03
is a really interesting idea you know to

00:35:59 --> 00:36:05
judge alpha zero performance not on a

00:36:02 --> 00:36:09
single game of chess but looking at

00:36:04 --> 00:36:11
millions of games and not looking at a

00:36:08 --> 00:36:14
million games for a static set of

00:36:10 --> 00:36:16
parameters but looking at the millions

00:36:13 --> 00:36:19
of games played as the system was

00:36:15 --> 00:36:21
trained from scratch and became better

00:36:18 --> 00:36:25
and better and better there's something

00:36:20 --> 00:36:28
about that full journey that may capture

00:36:24 --> 00:36:31
intelligence so intelligence very well

00:36:27 --> 00:36:33
could be the journey not the destination

00:36:30 --> 00:36:37
I think there's something there it's

00:36:32 --> 00:36:39
very imprecise in this construction but

00:36:36 --> 00:36:42
it struck me as a as a very novel idea

00:36:38 --> 00:36:45
for benchmark not to measure

00:36:41 --> 00:36:46
instantaneous performance but

00:36:44 --> 00:36:49
performance over time in the improvement

00:36:45 --> 00:36:50
of performance over time it appears that

00:36:48 --> 00:36:52
here's something to that but I can't

00:36:49 --> 00:36:54
quite make it concrete and I'm not sure

00:36:51 --> 00:36:56
as possible to formalize in the way that

00:36:53 --> 00:36:59
he original Turing test is formalized

00:36:55 --> 00:37:02
another kind of test is the Winograd

00:36:58 --> 00:37:04
schema challenge which i think is really

00:37:01 --> 00:37:07
compelling and in many ways so first to

00:37:03 --> 00:37:10
explain it with an example there's a

00:37:06 --> 00:37:12
sentence really two sentences let's say

00:37:09 --> 00:37:14
the trophy doesn't fit into the brown

00:37:11 --> 00:37:16
suitcase because it's too small and the

00:37:13 --> 00:37:18
trophy doesn't fit into the brown

00:37:15 --> 00:37:21
suitcase because it is too large and the

00:37:17 --> 00:37:24
question is what is too small what is

00:37:20 --> 00:37:27
too large the answer for the small what

00:37:23 --> 00:37:29
is too small is the suitcase is too

00:37:26 --> 00:37:31
small the trophy doesn't fit into the

00:37:28 --> 00:37:33
brown suitcase because it is too small

00:37:30 --> 00:37:36
and then the second question is what is

00:37:32 --> 00:37:38
too large the answer there is the trophy

00:37:35 --> 00:37:41
that trophy doesn't fit into the brown

00:37:37 --> 00:37:44
suitcase because it is too large the

00:37:40 --> 00:37:47
basic idea behind this challenge is the

00:37:43 --> 00:37:49
ambiguity and the sentence can only be

00:37:46 --> 00:37:53
resolved with common-sense reasoning

00:37:48 --> 00:37:55
about ideas in this world and so the

00:37:52 --> 00:38:00
strength of this test is it's quite

00:37:54 --> 00:38:03
clear quite simple and yet requires the

00:37:59 --> 00:38:07
least in theory this this deep thing

00:38:02 --> 00:38:09
that we think makes us human which is

00:38:06 --> 00:38:12
the ability to reason at the very basic

00:38:08 --> 00:38:15
level of common sense reasoning the

00:38:11 --> 00:38:17
other nice thing is it can be a

00:38:14 --> 00:38:19
benchmark like we're used to in the

00:38:16 --> 00:38:22
machine learning world that doesn't

00:38:18 --> 00:38:25
require subjective human judges there's

00:38:21 --> 00:38:28
literally a right answer the weakness

00:38:24 --> 00:38:31
here that's holds for other similar

00:38:27 --> 00:38:33
challenges in the space is that it's

00:38:30 --> 00:38:35
very difficult to come up with a large

00:38:32 --> 00:38:39
amount of questions I mean each one is

00:38:34 --> 00:38:42
handcrafted and so that means you can't

00:38:38 --> 00:38:45
build a benchmark of millions or

00:38:41 --> 00:38:49
billions of questions it has to be on a

00:38:44 --> 00:38:50
small scale variations of the Winograd

00:38:48 --> 00:38:55
scheme are included

00:38:50 --> 00:38:57
and some natural language benchmarks of

00:38:54 --> 00:38:59
today that people use in the machine

00:38:56 --> 00:39:00
learning context the Amazon elect

00:38:58 --> 00:39:04
surprise

00:38:59 --> 00:39:05
I think captures nicely the spirit of

00:39:03 --> 00:39:07
the Turing test I think it's actually

00:39:04 --> 00:39:10
quite an amazing challenge and

00:39:06 --> 00:39:12
competition that uses voice conversation

00:39:09 --> 00:39:15
in the wild so with real people and they

00:39:11 --> 00:39:18
can use a I think it's called a social

00:39:14 --> 00:39:20
bot skill on there Alexa devices and I

00:39:17 --> 00:39:22
don't want to wake up my own Alexa

00:39:19 --> 00:39:25
devices but basically say her name and

00:39:21 --> 00:39:27
say let's chat and that brings up one of

00:39:24 --> 00:39:29
the bots involved in the challenge and

00:39:26 --> 00:39:33
then you can have a conversation and

00:39:28 --> 00:39:35
then the bar that's to be reached is for

00:39:32 --> 00:39:38
you to have a twenty minute or longer

00:39:34 --> 00:39:40
conversation with the bot and for

00:39:37 --> 00:39:44
two-thirds or more of the interactions

00:39:39 --> 00:39:46
to be that long so the basic metric of

00:39:43 --> 00:39:49
successful interaction is the duration

00:39:45 --> 00:39:51
of the interaction and as of today we're

00:39:48 --> 00:39:53
still really really far away from that

00:39:50 --> 00:39:56
so why is this a good metric and I do

00:39:52 --> 00:39:58
think it's a really powerful metric as

00:39:55 --> 00:40:00
opposed to us judging the quality of

00:39:57 --> 00:40:03
conversation in retrospect we speak with

00:39:59 --> 00:40:06
our actions so a deep meaningful

00:40:02 --> 00:40:09
conversation is one we don't want to

00:40:05 --> 00:40:11
leave when we have other things

00:40:08 --> 00:40:13
contending for our time when we make the

00:40:10 --> 00:40:16
choice to stay in that conversation

00:40:12 --> 00:40:19
that's as powerful a signal as any to

00:40:15 --> 00:40:23
show that that conversation has content

00:40:18 --> 00:40:26
has meaning is enjoyable I think that

00:40:22 --> 00:40:29
it's what passing the Turing test in its

00:40:25 --> 00:40:32
original spirit actually is and I should

00:40:28 --> 00:40:35
mention that as of today no team has

00:40:31 --> 00:40:37
even come close to passing the Turing

00:40:34 --> 00:40:39
test as it is constructed by the Alexa

00:40:36 --> 00:40:41
prize there are several things that are

00:40:38 --> 00:40:43
ally surprising about this challenge

00:40:40 --> 00:40:47
one is that it's not a lot more popular

00:40:42 --> 00:40:50
and two that Amazon chose to limit it to

00:40:46 --> 00:40:53
students only I mean almost making it an

00:40:49 --> 00:40:56
educational exercise as opposed to a

00:40:53 --> 00:40:59
moonshot challenge for our entire

00:40:55 --> 00:41:01
generation of researchers I mentioned

00:40:58 --> 00:41:03
before but I'll say it again here that

00:41:00 --> 00:41:04
it's surprising to me that the biggest

00:41:02 --> 00:41:07
research lab

00:41:03 --> 00:41:10
industry and academia have not focused

00:41:06 --> 00:41:13
on this problem have not found the magic

00:41:09 --> 00:41:15
within the Turing test problem and the

00:41:12 --> 00:41:19
lect surprise as it formulates I

00:41:14 --> 00:41:22
believe the spirit of the Turing tests

00:41:18 --> 00:41:24
quite well a very different kind of test

00:41:21 --> 00:41:26
is the hotter price that I buy markers

00:41:23 --> 00:41:29
hotter which I think is really

00:41:25 --> 00:41:32
fascinating on both a philosophical

00:41:28 --> 00:41:36
mathematical angle underlying it is the

00:41:31 --> 00:41:39
idea that compression is strongly

00:41:35 --> 00:41:42
correlated with intelligence put another

00:41:38 --> 00:41:45
way the ability to compress knowledge

00:41:41 --> 00:41:47
well requires intelligence and the

00:41:44 --> 00:41:49
better you compress that knowledge the

00:41:46 --> 00:41:52
more intelligent you are I think this is

00:41:48 --> 00:41:56
a really compelling notion because then

00:41:51 --> 00:41:58
we can make explicit we can quantify how

00:41:55 --> 00:42:02
intelligent you are by how well you're

00:41:57 --> 00:42:04
able to compress knowledge as the prize

00:42:01 --> 00:42:06
webpage puts it being able to compress

00:42:03 --> 00:42:09
well is closely related to acting

00:42:05 --> 00:42:11
intelligently thus reducing the slippery

00:42:08 --> 00:42:16
concept of intelligence to hard file

00:42:10 --> 00:42:20
size numbers so the task is to take one

00:42:15 --> 00:42:22
gigabyte of Wikipedia data and compress

00:42:19 --> 00:42:25
it down as much as possible the current

00:42:21 --> 00:42:28
best is a eight point five eight

00:42:24 --> 00:42:30
compression factor so down from one

00:42:27 --> 00:42:32
gigabyte to one hundred seventeen

00:42:29 --> 00:42:34
megabytes and the awards for each one

00:42:31 --> 00:42:37
percent improvement you win five

00:42:33 --> 00:42:40
thousand euros I find this competition

00:42:36 --> 00:42:42
just amazing and fascinating on many

00:42:39 --> 00:42:46
levels I think it's a really good

00:42:41 --> 00:42:49
formulation of an intelligence challenge

00:42:45 --> 00:42:52
but it's not a test that's one of his

00:42:48 --> 00:42:54
kind of limitations at least in the

00:42:51 --> 00:42:57
poetic sense that it doesn't set a bar

00:42:53 --> 00:43:00
beyond which we're really damn impressed

00:42:56 --> 00:43:01
meaning it's harder to set a bar like

00:42:59 --> 00:43:04
the one formulated by the Turing test

00:43:00 --> 00:43:06
beyond which we feel it would be human

00:43:03 --> 00:43:08
level intelligence now the bar that's

00:43:05 --> 00:43:11
et by the Turing Alan Turing and others

00:43:07 --> 00:43:13
the lobna prize alexa prize are also

00:43:10 --> 00:43:15
arbitrary but it feels like we're able

00:43:12 --> 00:43:17
to intuit a good bar in that context

00:43:14 --> 00:43:19
better

00:43:16 --> 00:43:20
being able to intuit the kind of bar we

00:43:18 --> 00:43:23
need to set for the compression

00:43:19 --> 00:43:25
challenge another fascinating challenge

00:43:22 --> 00:43:27
is the abstraction and reasoning

00:43:24 --> 00:43:29
challenge put forth by francois charlet

00:43:26 --> 00:43:31
just a few months ago so this is very

00:43:28 --> 00:43:34
exciting it's actually ongoing is a

00:43:30 --> 00:43:36
competition on Kegel I think with the

00:43:33 --> 00:43:39
deadline in May it's a really really

00:43:35 --> 00:43:41
interesting idea I haven't internalized

00:43:38 --> 00:43:44
it fully yet and perhaps we'll do a

00:43:40 --> 00:43:46
separate video on just this paper alone

00:43:43 --> 00:43:48
and I'll talk to Francois I'm sure on

00:43:45 --> 00:43:48
the podcast and other contacts in the

00:43:47 --> 00:43:50
future about it

00:43:47 --> 00:43:54
I think there's a lot of brilliant ideas

00:43:49 --> 00:43:56
here that I still have to kind of digest

00:43:53 --> 00:43:59
a little bit but let me describe the

00:43:55 --> 00:44:03
high level ideas behind this benchmark

00:43:58 --> 00:44:06
so first of all the name is abstraction

00:44:02 --> 00:44:09
reason in corpus or challenge arc the

00:44:05 --> 00:44:12
domain is in a grid world of patterns

00:44:08 --> 00:44:15
not limited in size but the grid world

00:44:11 --> 00:44:18
is filled with cells that can be of

00:44:14 --> 00:44:20
different colors and the spirit of the

00:44:17 --> 00:44:23
set of tests that Francois proposes is

00:44:19 --> 00:44:26
to stay close to IQ test so psychometric

00:44:22 --> 00:44:29
intelligent tests that we use to measure

00:44:25 --> 00:44:32
the intelligence of human beings

00:44:28 --> 00:44:36
now the Turing test is kind of at a

00:44:31 --> 00:44:41
higher level of natural language in this

00:44:35 --> 00:44:44
construction of Arc it goes as close as

00:44:40 --> 00:44:47
possible to the very basic elements of

00:44:43 --> 00:44:52
reasoning just like an attic you test of

00:44:46 --> 00:44:55
patterns it gets to the very core such

00:44:51 --> 00:44:58
that we can then make explicit the

00:44:54 --> 00:45:00
priors the concepts that we bring to the

00:44:57 --> 00:45:03
table of those tests and if we can make

00:44:59 --> 00:45:06
them explicit it reduces the test as

00:45:02 --> 00:45:09
close as possible to the measure of the

00:45:05 --> 00:45:11
system's ability to reason now the

00:45:08 --> 00:45:13
concepts that are brought to this grid

00:45:10 --> 00:45:16
world here's just a couple of example of

00:45:12 --> 00:45:18
priors that Francois shows in his paper

00:45:15 --> 00:45:20
I recommend highly it called on the

00:45:17 --> 00:45:22
measure of intelligence here prior

00:45:19 --> 00:45:26
concept is not referring to a previous

00:45:21 --> 00:45:28
concept is referring to a prior set of

00:45:25 --> 00:45:30
knowledge that you bring to the table so

00:45:27 --> 00:45:31
this first row of illustrations of the

00:45:29 --> 00:45:33
two

00:45:30 --> 00:45:37
rld's illustrates the idea of object

00:45:32 --> 00:45:41
persistence with noise so we're able to

00:45:36 --> 00:45:46
understand that large objects when there

00:45:40 --> 00:45:49
is some visual noise occluding our

00:45:45 --> 00:45:51
ability to see them that they still

00:45:48 --> 00:45:54
exist in the world and if that noise

00:45:50 --> 00:45:58
changes the object is still unchanged so

00:45:53 --> 00:46:01
that that idea of object persistence in

00:45:57 --> 00:46:03
the world is as a prior that we bring to

00:46:00 --> 00:46:06
the table of understanding this grid

00:46:02 --> 00:46:11
world another prior is on the left at

00:46:05 --> 00:46:15
he bottom is objects are defined by

00:46:10 --> 00:46:18
spatial contiguity so so objects in this

00:46:14 --> 00:46:20
grid world when the cells are the same

00:46:17 --> 00:46:22
color and they're touching each other

00:46:19 --> 00:46:25
they're probably part of the same object

00:46:21 --> 00:46:28
and if there's black cells that separate

00:46:24 --> 00:46:30
the those groupings of cells that means

00:46:27 --> 00:46:34
there's multiple objects so this kind of

00:46:29 --> 00:46:39
spatial contiguity of colored cells

00:46:33 --> 00:46:42
defined the entity of the object and on

00:46:38 --> 00:46:44
the right at the bottom is the color

00:46:41 --> 00:46:46
based contiguity which means that even

00:46:43 --> 00:46:49
if the cells of different colors are

00:46:45 --> 00:46:50
touching if their colors are different

00:46:48 --> 00:46:53
hat means it likely belongs to a

00:46:49 --> 00:46:56
different object that's the basic prior

00:46:52 --> 00:46:59
and there's a few others by the way just

00:46:55 --> 00:47:02
beautiful pictures in that paper that

00:46:58 --> 00:47:05
make you really think about the core

00:47:01 --> 00:47:07
lements of intelligence I love that

00:47:04 --> 00:47:09
paper worth worth looking at there's a

00:47:06 --> 00:47:12
lot of interesting insights in there

00:47:08 --> 00:47:15
just to give you some examples of what

00:47:11 --> 00:47:17
he actual task for the machine in this

00:47:14 --> 00:47:20
test looks like it's similar to the kind

00:47:16 --> 00:47:24
of task we've seen in an IQ test so here

00:47:19 --> 00:47:26
there's three pairings and the task is

00:47:23 --> 00:47:31
for the fourth pairing of images to

00:47:25 --> 00:47:34
generate the grid world that fits the

00:47:30 --> 00:47:36
other three that fits the generating

00:47:33 --> 00:47:39
pattern of the other three so in this

00:47:35 --> 00:47:41
case figure four from the paper a task

00:47:38 --> 00:47:43
where the implicit goal is to complete a

00:47:40 --> 00:47:44
symmetrical pattern the nature of the

00:47:42 --> 00:47:46
task is specified

00:47:43 --> 00:47:48
by the three input-output examples the

00:47:45 --> 00:47:51
test-taker must generate the output grid

00:47:47 --> 00:47:54
corresponding to the input grid of the

00:47:50 --> 00:47:56
test input bottom right so here will

00:47:53 --> 00:48:00
your task with understanding in the

00:47:55 --> 00:48:06
first three pairings is that the input

00:47:59 --> 00:48:10
has a perfect global symmetry to it and

00:48:05 --> 00:48:12
also that there's parts of the image

00:48:09 --> 00:48:14
that are missing that can be filled in

00:48:11 --> 00:48:17
order to complete that perfect symmetry

00:48:13 --> 00:48:20
now that's relying on another prior

00:48:16 --> 00:48:22
another basic concept of symmetry which

00:48:19 --> 00:48:25
I think underlies a lot of our

00:48:21 --> 00:48:28
understanding of visual patterns again

00:48:24 --> 00:48:31
so the intelligent system has to have a

00:48:27 --> 00:48:35
good representation of symmetry in

00:48:31 --> 00:48:38
various contexts this is fascinating and

00:48:34 --> 00:48:41
beautiful beautiful images okay another

00:48:37 --> 00:48:42
example figure 10 from the paper a task

00:48:40 --> 00:48:45
where the implicit goal is to count

00:48:41 --> 00:48:47
unique objects and select the objects

00:48:44 --> 00:48:49
that appears the most times the actual

00:48:46 --> 00:48:52
task has more demonstration pairs in

00:48:48 --> 00:48:54
these three so figure 10 here from the

00:48:51 --> 00:48:56
paper a task where the implicit goal is

00:48:53 --> 00:48:59
to count unique objects and select the

00:48:55 --> 00:49:02
objects that appear the most times so

00:48:58 --> 00:49:04
again there's three pairings you see in

00:49:01 --> 00:49:07
the first one there's three blue objects

00:49:03 --> 00:49:09
and the second one is four yellow

00:49:06 --> 00:49:10
objects and the third one there's three

00:49:08 --> 00:49:14
red objects so you have to figure that

00:49:09 --> 00:49:16
out and then the output is the grid

00:49:13 --> 00:49:20
cells capturing that object that appears

00:49:15 --> 00:49:23
the most times and so apply that kind of

00:49:19 --> 00:49:26
reasoning to complete the output of the

00:49:22 --> 00:49:28
fourth pairing one of the challenges for

00:49:25 --> 00:49:30
this kind of test is it's difficult to

00:49:27 --> 00:49:31
generate but just like I said I think

00:49:29 --> 00:49:34
there's a lot of really interesting

00:49:30 --> 00:49:36
technical and philosophical ideas here

00:49:33 --> 00:49:40
that are worth exploring so let's

00:49:35 --> 00:49:41
quickly talk through a few takeaways so

00:49:39 --> 00:49:43
zooming

00:49:40 --> 00:49:46
is the Turing test a good measure of

00:49:42 --> 00:49:49
intelligence and can it serve as an

00:49:45 --> 00:49:51
swer to the big ambiguous but profound

00:49:48 --> 00:49:55
philosophical questions of chem machines

00:49:50 --> 00:49:58
think so first some notes on the

00:49:54 --> 00:50:02
underlying challenges of the Turing test

00:49:57 --> 00:50:05
let's talk about intelligence so if we

00:50:01 --> 00:50:08
compare human behavior and intelligent

00:50:04 --> 00:50:12
behavior it's clear that the Turing test

00:50:07 --> 00:50:15
hopes to capture the intelligent parts

00:50:11 --> 00:50:18
of human behavior but if we're trying to

00:50:14 --> 00:50:22
really capture human level intelligence

00:50:17 --> 00:50:24
it's also possible that we want to

00:50:21 --> 00:50:27
capture the unintelligent irrational

00:50:23 --> 00:50:29
parts human behavior so it's an open

00:50:26 --> 00:50:34
question or the natural conversation is

00:50:28 --> 00:50:36
a test of intelligence or humaneness

00:50:33 --> 00:50:40
because if it's a test of intelligence

00:50:35 --> 00:50:42
it's focusing only on kind of rational

00:50:39 --> 00:50:44
systematic thinking if it's a test of

00:50:41 --> 00:50:47
humaneness then you have to capture the

00:50:43 --> 00:50:50
full range of emotion the mess the

00:50:46 --> 00:50:52
irrationality the laziness the boredom

00:50:49 --> 00:50:55
all the things that make us human and

00:50:51 --> 00:50:57
all the things that then project

00:50:54 --> 00:50:59
hemselves into the way we carry out

00:50:56 --> 00:51:01
hrough conversation as I mentioned in

00:50:58 --> 00:51:04
the previous objectives the Turing test

00:51:00 --> 00:51:06
really focuses on the external

00:51:03 --> 00:51:09
appearances not the internal processes

00:51:05 --> 00:51:11
o like I said from an engineering

00:51:08 --> 00:51:14
perspective I think it's very difficult

00:51:10 --> 00:51:16
o create a test for internal processes

00:51:13 --> 00:51:18
for some of these concepts that we have

00:51:15 --> 00:51:21
a very poor understanding of like

00:51:17 --> 00:51:24
intelligence like consciousness I think

00:51:20 --> 00:51:27
the best we can do right now in terms of

00:51:23 --> 00:51:29
quantifying and having a measure of

00:51:26 --> 00:51:32
something we have to look at the

00:51:28 --> 00:51:34
xternal performance of the system as

00:51:31 --> 00:51:38
opposed to some properties of the

00:51:33 --> 00:51:40
internal processes another challenge for

00:51:37 --> 00:51:42
the Turing test as Scott our instance

00:51:39 --> 00:51:46
conversation we gene Guzman indicates is

00:51:41 --> 00:51:49
that the skill of the interrogator is

00:51:45 --> 00:51:52
really important here that's both on the

00:51:48 --> 00:51:54
just the conversational skill of how

00:51:51 --> 00:51:55
much you can stretch and challenge the

00:51:53 --> 00:51:59
conversation with

00:51:54 --> 00:52:01
and to on the human side of it the

00:51:58 --> 00:52:03
ability of the interrogator identified

00:52:00 --> 00:52:06
the humaneness of both the human and the

00:52:02 --> 00:52:10
machine so the ability to have a

00:52:05 --> 00:52:12
conversation that challenges the bot and

00:52:09 --> 00:52:14
the ability to make the actual

00:52:11 --> 00:52:17
identification of human or machine

00:52:13 --> 00:52:22
those are both skills that are essential

00:52:16 --> 00:52:24
to the Turing test also to me is really

00:52:21 --> 00:52:29
interesting the anthropomorphize a ssin

00:52:23 --> 00:52:32
of human to inanimate object interaction

00:52:28 --> 00:52:34
I think is really fascinating and it's

00:52:31 --> 00:52:36
an open question whether in some

00:52:33 --> 00:52:38
construction of the Turing test whether

00:52:35 --> 00:52:40
anthropomorphism is leveraged to

00:52:37 --> 00:52:42
convince the human whether that's

00:52:39 --> 00:52:45
cheating the Turing test or in fact

00:52:41 --> 00:52:47
hat's an essential element to

00:52:44 --> 00:52:50
convincing us humans that something is

00:52:46 --> 00:52:52
intelligent perhaps as a starting point

00:52:49 --> 00:52:56
we have to anthropomorphize something

00:52:51 --> 00:52:59
before we allow to be intelligent in our

00:52:55 --> 00:53:02
subjective judgment of its intelligence

00:52:58 --> 00:53:04
and finally another limitation of the

00:53:01 --> 00:53:08
Turing test that could be narrowly

00:53:03 --> 00:53:10
stated as why do we expect a bot to talk

00:53:07 --> 00:53:13
what is it why what if it doesn't feel

00:53:09 --> 00:53:16
ike talking does it still fail I think

00:53:12 --> 00:53:19
a more general way to phrase that is why

00:53:15 --> 00:53:23
do we judge the performance of a system

00:53:18 --> 00:53:24
on such a narrow window of time I think

00:53:22 --> 00:53:28
as I mentioned before this there could

00:53:23 --> 00:53:32
be something interesting on expanding

00:53:27 --> 00:53:35
the window of time over which we analyze

00:53:31 --> 00:53:38
the intelligence of the system looking

00:53:34 --> 00:53:39
not just at the average performance but

00:53:37 --> 00:53:42
he growth of its performance as it

00:53:38 --> 00:53:45
interacts with you as the individual I

00:53:41 --> 00:53:50
think one key aspect of intelligence is

00:53:44 --> 00:53:54
a social aspect and a social connection

00:53:49 --> 00:53:56
I think in part may require getting to

00:53:53 --> 00:53:58
know the person and there's something to

00:53:55 --> 00:54:00
rethink in the Turing test that relies

00:53:57 --> 00:54:03
on us building a relationship with a

00:53:59 --> 00:54:06
person as part of the test so you could

00:54:02 --> 00:54:08
think of it as kind of the ex machina

00:54:05 --> 00:54:11
Turing test where they

00:54:07 --> 00:54:14
spent a series of conversations together

00:54:10 --> 00:54:16
several days together all those kinds of

00:54:13 --> 00:54:19
things that feels like an interesting

00:54:16 --> 00:54:22
extension of the Turing test which could

00:54:18 --> 00:54:23
reveal the significant limitation of the

00:54:21 --> 00:54:26
current construction of the Turing test

00:54:22 --> 00:54:29
which is a limited window of time one

00:54:25 --> 00:54:33
time at the end interrogator judgment of

00:54:28 --> 00:54:35
whether it's human or machine now my

00:54:32 --> 00:54:39
view overall on the Turing test is that

00:54:34 --> 00:54:42
yes something like the Turing test as

00:54:38 --> 00:54:46
originally constructed so the natural

00:54:41 --> 00:54:48
anguage conversation is close to the

00:54:45 --> 00:54:50
ultimate test of intelligence and

00:54:47 --> 00:54:52
moreover this is where I disagree I

00:54:49 --> 00:54:56
think I disagree with Francois shalay

00:54:51 --> 00:54:58
and other world-class researchers in the

00:54:55 --> 00:55:00
areas through it Russell and so on that

00:54:57 --> 00:55:02
I think the Turing test is not a

00:54:59 --> 00:55:05
distraction for us to think about it

00:55:01 --> 00:55:08
doesn't pull us away from actually

00:55:04 --> 00:55:11
making progress in the field I think it

00:55:07 --> 00:55:14
keeps us honest I think truly analyzing

00:55:10 --> 00:55:16
where we stand in natural language

00:55:13 --> 00:55:20
conversation will help us understand how

00:55:15 --> 00:55:22
far away we are and more than that I

00:55:19 --> 00:55:24
think there should be active research on

00:55:21 --> 00:55:25
this field I think the love the prize

00:55:23 --> 00:55:28
type of formulations the elect surprise

00:55:24 --> 00:55:30
formulations should be more popular than

00:55:27 --> 00:55:33
they are and I think researchers should

00:55:29 --> 00:55:36
take them very seriously now that

00:55:32 --> 00:55:39
doesn't mean that the the work of the

00:55:35 --> 00:55:42
arc benchmark with the IQ test type

00:55:38 --> 00:55:45
of intelligent tests is not also going

00:55:41 --> 00:55:49
to be fruitful potentially very fruitful

00:55:44 --> 00:55:52
but I think ultimately the real and test

00:55:48 --> 00:55:55
of human level intelligence will occur

00:55:51 --> 00:55:57
in something like the construction of

00:55:54 --> 00:56:00
the Turing test with natural language

00:55:56 --> 00:56:03
open domain conversation the results in

00:55:59 --> 00:56:07
deep meaningful connection between human

00:56:02 --> 00:56:10
d machine zooming out a little bit I

00:56:06 --> 00:56:13
think in general I think AI researchers

00:56:09 --> 00:56:17
don't like and try to avoid the

00:56:12 --> 00:56:19
messiness of human beings as is captured

00:56:16 --> 00:56:22
by the human robot interaction field and

00:56:18 --> 00:56:24
set of problems I think

00:56:21 --> 00:56:27
more than just embracing the Turing test

00:56:23 --> 00:56:30
I think we should embrace the messiness

00:56:26 --> 00:56:33
of the human being in all the different

00:56:29 --> 00:56:36
domains of computer vision of natural

00:56:32 --> 00:56:40
anguage of robotics autonomous vehicles

00:56:35 --> 00:56:42
I've been a longtime advocate that semi

00:56:39 --> 00:56:43
autonomous vehicles are here to stay for

00:56:41 --> 00:56:45
a long time we're going to have to

00:56:42 --> 00:56:49
figure out the human robot interaction

00:56:44 --> 00:56:51
problem and for that we have to embrace

00:56:48 --> 00:56:53
perceiving everything about the human

00:56:50 --> 00:56:56
inside the car perceiving everything

00:56:52 --> 00:56:58
about the humans outside the car as I

00:56:55 --> 00:57:01
mentioned this presentation of the paper

00:56:57 --> 00:57:04
is actually part of our paper reading

00:57:00 --> 00:57:07
club focused on artificial intelligence

00:57:03 --> 00:57:09
where we discuss a couple of times a

00:57:06 --> 00:57:12
week on the discord server called Lex

00:57:08 --> 00:57:14
plus AI podcast they you're welcome to

00:57:11 --> 00:57:16
join we have an amazing community of

00:57:13 --> 00:57:18
brilliant people there that discuss all

00:57:15 --> 00:57:20
kinds of topics in artificial

00:57:17 --> 00:57:23
intelligence and beyond this particular

00:57:19 --> 00:57:26
illustration that I just love is from

00:57:22 --> 00:57:29
will Scobie who's an illustrator from

00:57:25 --> 00:57:31
United Kingdom who is part of this

00:57:28 --> 00:57:34
discord community so he contributed it

00:57:30 --> 00:57:36
and in general aside from the amazing

00:57:33 --> 00:57:38
conversations I encourage and hope to

00:57:35 --> 00:57:42
see other members of the community

00:57:37 --> 00:57:45
contribute art code visualizations

00:57:41 --> 00:57:48
lides ideas for these kinds of videos

00:57:44 --> 00:57:50
I'm really excited by the kind of

00:57:47 --> 00:57:52
conversations I've seen if you're

00:57:49 --> 00:57:53
watching this video I want to join in

00:57:51 --> 00:57:56
click on a discord link in the

00:57:52 --> 00:57:58
description on the slide

00:57:55 --> 00:58:01
join the conversation new paper every

00:57:57 --> 00:58:04
week it's fun just to give you a little

00:58:00 --> 00:58:06
sense of the ideas behind this AI paper

00:58:03 --> 00:58:10
eading Club like what the goals are so

00:58:05 --> 00:58:12
what is it I think the goal is to take a

00:58:09 --> 00:58:15
seminal paper in the field that doesn't

00:58:11 --> 00:58:17
just focus in on the specific sort of

00:58:14 --> 00:58:19
paragraph to paragraph section of

00:58:16 --> 00:58:21
section analysis what the papers saying

00:58:18 --> 00:58:24
but actually use the paper to discuss

00:58:20 --> 00:58:26
the history the big-picture development

00:58:23 --> 00:58:29
of the field within the context of that

00:58:25 --> 00:58:31
paper now that could be philosophical

00:58:28 --> 00:58:33
papers like the storm-tossed paper or it

00:58:30 --> 00:58:36
could be very specific papers in the

00:58:32 --> 00:58:38
field again physics mathematics compete

00:58:35 --> 00:58:42
science and probably quite a bit of deep

00:58:37 --> 00:58:45
learning so the hope is to prioritize

00:58:41 --> 00:58:48
beautiful powerful impactful insights as

00:58:44 --> 00:58:51
opposed to full coverage of all the

00:58:47 --> 00:58:54
contents of the paper and the actual

00:58:50 --> 00:58:57
meanings on this chord hopefully are

00:58:53 --> 00:58:59
less one person presenting and more

00:58:56 --> 00:59:02
discussion there's a lot of brilliant

00:58:58 --> 00:59:05
people there civil so you can have 300

00:59:01 --> 00:59:07
400 people on voice chat which is a

00:59:04 --> 00:59:09
really intimate setting and yet people

00:59:06 --> 00:59:12
aren't interrupting each other it's not

00:59:08 --> 00:59:15
chaos it's quite an amazing community

00:59:11 --> 00:59:17
the other goal I'd love to see is even

00:59:14 --> 00:59:19
if we cover technical papers the goal is

00:59:16 --> 00:59:23
for it to be accessible to everyone

00:59:18 --> 00:59:24
so both high school students people

00:59:22 --> 00:59:28
outside of all of these fields in

00:59:23 --> 00:59:31
general but also I'd love to make it be

00:59:27 --> 00:59:34
useful to experts in the field expert

00:59:30 --> 00:59:37
researchers so avoid using technical

00:59:33 --> 00:59:39
jargon but still try to discover

00:59:36 --> 00:59:41
insights that are new that are

00:59:38 --> 00:59:43
interesting that are important for the

00:59:40 --> 00:59:45
researchers in the field that's what I

00:59:42 --> 00:59:47
would love to achieve here with this

00:59:44 --> 00:59:50
paper Reading Club if you're interested

00:59:46 --> 00:59:53
join in listening or contribute to the

00:59:49 --> 00:59:56
conversation suggest papers suggest

00:59:52 --> 00:59:58
content visualizations code always

00:59:55 --> 01:00:00
welcome it's an amazing community thanks

00:59:57 --> 01:00:03
for watching this excessively long

00:59:59 --> 01:00:05
presentation if you have suggestions let

01:00:02 --> 01:00:07
me know otherwise hope to see you next

01:00:04 --> 01:00:07
ime

01:00:12 --> 01:00:15
you

<!-- YOUTUBE_TRANSCRIPT_END -->
