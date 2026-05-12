---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "GqviWpv5t4o"
title: "Giving New Life to Unstructured Data with LLMs and Agents"
video_url: "https://www.youtube.com/watch?v=GqviWpv5t4o"
thumbnail_url: "https://i.ytimg.com/vi/GqviWpv5t4o/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=GqviWpv5t4o"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-06-10T14:00:32.000Z"
upload_date: "2025-06-10"
duration_seconds: 2036
duration_human: "33:56"
view_count: 4153
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:47:09.495Z"
---

# Giving New Life to Unstructured Data with LLMs and Agents

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=GqviWpv5t4o
- video_id: GqviWpv5t4o
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-06-10T14:00:32.000Z
- upload_date: 2025-06-10
- duration: 33:56
- view_count: 4153
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Instabase founder and CEO Anant Bhardwaj joins a16z Infra partner Guido Appenzeller to discuss the revolutionary impact of LLMs on analyzing unstructured data and documents (like letting banks verify identity and approve loans via WhatsApp) and shares his vision for how AI agents could take things even further (by automating actions based on those documents). In more detail, they discuss:

- Why legacy robotic process automation (RPA) struggles with unstructured inputs.
- How Instabase developed layout-aware models to extract insights from PDFs and complex documents.
- Why predictability, not perfection, is the key metric for generative AI in the enterprise.
- The growing role of AI agents at compile time (not runtime).
- A vision for decentralized, federated AI systems that scale automation across complex workflows.

Follow everyone on X:
- Anant Bhardwaj - https://x.com/anantpb
- Guido Appenzeller - https://x.com/appenz

Check out everything a16z is doing with artificial intelligence, including articles, projects, and more podcasts, here: https://a16z.com/ai/

Timestamps:
00:00 Introduction
00:43 What is Unstructured Data and How Can The UD Problem Be Solved?
07:26 Use Cases: How Enterprises Can Use Unstructured Data
13:07 The Shift In How Enterprise and Consumers View AI Capabilities
15:03 Documents: The Role of Humans vs AI in Unstructured Data
16:06 The Most Interesting Use Case, Lending Over WhatsApp
19:13  Main Barriers For Enterprise AI Adoption
21:25 AI Agents + Enterprise Workflow
25:23 Future Of AI As Decentralized, Federated, Execution
28:05 Technical Advances Of AI Impacted User Experience
32:35 Three Reasons Why Enterprise Adoption Of AI Is Necessary

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
So robot body process automation is

00:00:01 --> 00:00:06
literally if human had to do something

00:00:03 --> 00:00:08
you basically open some browser or

00:00:05 --> 00:00:09
whatever take some data put into some

00:00:07 --> 00:00:11
other system click some button and all

00:00:08 --> 00:00:13
that stuff. So it records that human

00:00:10 --> 00:00:16
clicks on that desktop and tries to keep

00:00:12 --> 00:00:17
repeating it. So you kind of like get

00:00:15 --> 00:00:19
hat automated and the hard part that

00:00:16 --> 00:00:21
hey had is you can't do robotic process

00:00:18 --> 00:00:23
for unstructured data because it's not

00:00:20 --> 00:00:25
fixed they change it. So anything will

00:00:22 --> 00:00:28
be very very brutal. The bet that we are

00:00:24 --> 00:00:31
taking is that AI will drive automation

00:00:27 --> 00:00:35
in a significant way. RPA would be fully

00:00:30 --> 00:00:39
eaten by AI automation and the future is

00:00:34 --> 00:00:41
likely going to be more of decentralized

00:00:38 --> 00:00:41
federated

00:00:42 --> 00:00:47
execution. I'll just give you the little

00:00:44 --> 00:00:50
bit of history when I was doing research

00:00:46 --> 00:00:53
at MIT uh and I think big data was a big

00:00:49 --> 00:00:54
thing in 2015 everybody was doing this

00:00:52 --> 00:00:56
and so first let me just define

00:00:53 --> 00:00:58
unstructured data because people have

00:00:55 --> 00:01:00
different definition of unstructured

00:00:57 --> 00:01:04
ata. So my definition is very simple.

00:01:00 --> 00:01:06
Anything that cannot be put into nice

00:01:03 --> 00:01:08
database tables where you can run SQL.

00:01:05 --> 00:01:09
Anything that is not that is

00:01:07 --> 00:01:11
unstructured data. So like a PDF

00:01:08 --> 00:01:12
document or an image or or anything.

00:01:10 --> 00:01:14
Yeah. Anything that cannot be put into a

00:01:11 --> 00:01:16
nice table that you can run query. And

00:01:13 --> 00:01:18
we already knew how to answer questions

00:01:15 --> 00:01:20
when data is nicely in structured

00:01:17 --> 00:01:22
format. So at MIT the question that they

00:01:19 --> 00:01:24
were trying to ask was how do you answer

00:01:21 --> 00:01:27
question when data is not in that

00:01:23 --> 00:01:28
format. So and that's very heterogeneous

00:01:26 --> 00:01:30
that basically they didn't have any

00:01:27 --> 00:01:33
schema. You don't even know what

00:01:29 --> 00:01:35
questions are relevant or not. So that

00:01:32 --> 00:01:36
was the key sort of hypothesis and we

00:01:34 --> 00:01:38
re building this product called data

00:01:35 --> 00:01:39
hub and this has the ability to mount

00:01:37 --> 00:01:41
different kind of things. So you could

00:01:38 --> 00:01:43
mount file systems, you could mount

00:01:40 --> 00:01:45
databases and you can mount something

00:01:42 --> 00:01:47
called application node. So because some

00:01:44 --> 00:01:50
data also lives in random applications

00:01:46 --> 00:01:52
and can you ask any question? So that

00:01:49 --> 00:01:54
was big research project. I was like

00:01:51 --> 00:01:55
this could be very valuable. So I

00:01:53 --> 00:01:57
dropped out. I didn't solve the whole

00:01:54 --> 00:01:59
problem and came here in Silicon Valley

00:01:56 --> 00:02:00
and then I started talking to a bunch of

00:01:58 --> 00:02:02
company tell me what is your

00:01:59 --> 00:02:04
unstructured data problem because we

00:02:01 --> 00:02:07
have to figure out business or the where

00:02:03 --> 00:02:08
to sell and where is the real real value

00:02:06 --> 00:02:10
for the for the organizations especially

00:02:07 --> 00:02:13
enterprises and we got pulled into this

00:02:10 --> 00:02:15
gnarly problem which is here are all my

00:02:12 --> 00:02:17
images and documents and Excel and

00:02:14 --> 00:02:20
PowerPoint and can you help me answer

00:02:16 --> 00:02:21
questions so my first question was why

00:02:19 --> 00:02:23
do you even care what question you want

00:02:20 --> 00:02:26
o answer we need to understand that and

00:02:22 --> 00:02:29
they're Like we do bunch of processes

00:02:25 --> 00:02:31
that receives a ton of unstructured data

00:02:28 --> 00:02:34
nd we have to make a decision like for

00:02:30 --> 00:02:35
example if immigration when somebody

00:02:33 --> 00:02:36
applies for immigration they submit

00:02:34 --> 00:02:37
bunch of things and they have to make a

00:02:35 --> 00:02:40
decision whether they should give you

00:02:36 --> 00:02:42
visa or not or you apply for loan you

00:02:39 --> 00:02:43
submit bunch of things and they have to

00:02:41 --> 00:02:46
make a decision whether you should get a

00:02:42 --> 00:02:48
loan or not so we were like sounds

00:02:45 --> 00:02:51
interesting so let's let's think about

00:02:47 --> 00:02:52
how to solve it and you won't believe it

00:02:50 --> 00:02:54
he the techniques at that time were

00:02:51 --> 00:02:56
very rudimentary so There were four

00:02:53 --> 00:02:57
common techniques that people used.

00:02:55 --> 00:02:59
Number one, they call this like

00:02:56 --> 00:03:01
templates where they will simply say

00:02:58 --> 00:03:03
here is a template for passport and if

00:03:00 --> 00:03:05
you want a passport number, go look 10

00:03:02 --> 00:03:07
pixel below and 10 pixel from the right

00:03:04 --> 00:03:09
and draw a 20 pixel long box and

00:03:06 --> 00:03:12
whatever you find is your passport

00:03:08 --> 00:03:13
number. Good luck with that. Yeah, it's

00:03:11 --> 00:03:14
very very brittle, right? Because as

00:03:12 --> 00:03:16
oon as you scan differently and think

00:03:13 --> 00:03:19
things will break. Second techniques

00:03:15 --> 00:03:21
were basically people writing different

00:03:18 --> 00:03:23
kind of rules like go and look for the

00:03:20 --> 00:03:25
keyword period beginning and anything

00:03:22 --> 00:03:26
right of that age of start date or

00:03:24 --> 00:03:29
something doesn't work like it just

00:03:25 --> 00:03:31
breaks. A third technique people were

00:03:28 --> 00:03:33
trying to train these ML models by

00:03:30 --> 00:03:35
writing features for a specific document

00:03:32 --> 00:03:37
ype and what feature do you write for

00:03:34 --> 00:03:39
like base step it's just very very hard

00:03:36 --> 00:03:41
so those also didn't work. So we

00:03:38 --> 00:03:44
basically at that time started doing

00:03:40 --> 00:03:46
research which we killed in 2 years

00:03:43 --> 00:03:48
which called program synthesis which is

00:03:45 --> 00:03:50
we were basically like if I had access

00:03:47 --> 00:03:52
to amazingly intelligent people how do I

00:03:49 --> 00:03:54
solve unstructured data problem I will

00:03:51 --> 00:03:56
ask them to write code for you know on

00:03:53 --> 00:03:59
the fly so can I

00:03:55 --> 00:04:01
basically ask computer to synthesize a

00:03:58 --> 00:04:02
program on the fly it's very very hard

00:04:00 --> 00:04:04
for computer to write program at that

00:04:02 --> 00:04:07
ime LLM was in the thing but we would

00:04:04 --> 00:04:09
like most of the data can be extracted

00:04:06 --> 00:04:11
from documents and all that by writing

00:04:08 --> 00:04:13
some form of regular expression and

00:04:10 --> 00:04:14
those kind of things. So let's do the

00:04:12 --> 00:04:16
synthesis of these regular expression

00:04:13 --> 00:04:18
based on what input output combination

00:04:15 --> 00:04:20
that you give and that is the answer and

00:04:17 --> 00:04:23
that work reasonably well as long as

00:04:19 --> 00:04:24
your input is in the similar kind of

00:04:22 --> 00:04:27
structure because the problem with

00:04:23 --> 00:04:29
program is it's deterministic. So if

00:04:26 --> 00:04:31
your input changes it will break. So but

00:04:28 --> 00:04:33
it still produce reliable results but

00:04:30 --> 00:04:34
not good enough that we could solve many

00:04:32 --> 00:04:38
problems but we could solve some part of

00:04:33 --> 00:04:39
the problems. So this was 2017 and

00:04:37 --> 00:04:42
transformer paper

00:04:38 --> 00:04:43
came we and and I think with transformer

00:04:41 --> 00:04:45
paper they also released a model called

00:04:42 --> 00:04:47
Bolt at that time. So we were super

00:04:44 --> 00:04:50
excited. We were like because that was

00:04:46 --> 00:04:53
like state-of-the-art and like best sort

00:04:49 --> 00:04:55
of model to understand natural language.

00:04:52 --> 00:04:57
So we basically applied B on these

00:04:54 --> 00:04:59
unstructured documents. We took bunch of

00:04:56 --> 00:05:02
those tokens and put that and that

00:04:58 --> 00:05:04
produced really bad results. Mhm. Really

00:05:01 --> 00:05:06
really bad results. So we would like at

00:05:03 --> 00:05:08
hat time actually I sent a note which

00:05:05 --> 00:05:10
Martine would have a copy of which we

00:05:07 --> 00:05:12
re like seems like this problem is not

00:05:09 --> 00:05:13
solvable unless somebody solves AI

00:05:11 --> 00:05:17
complete problems which they call you

00:05:12 --> 00:05:19
know AGI that you can but we were like

00:05:16 --> 00:05:22
there's nothing else that is promising

00:05:18 --> 00:05:24
enough so what do we do so we basically

00:05:22 --> 00:05:26
tried to use some creative approach that

00:05:23 --> 00:05:28
if you look at the Burke language model

00:05:25 --> 00:05:30
they were encoding the token as the

00:05:27 --> 00:05:32
position of the word in the sentence and

00:05:29 --> 00:05:34
that's how the attention mechanism

00:05:31 --> 00:05:37
would work and and and and would do the

00:05:33 --> 00:05:39
fill mask problem. Yeah. So we were like

00:05:36 --> 00:05:40
what if we also start encoding in

00:05:38 --> 00:05:43
addition to the position of the word in

00:05:40 --> 00:05:46
the sentence X and Y coordinate too. So

00:05:42 --> 00:05:48
we basically took 110 million documents

00:05:45 --> 00:05:50
took every single word or the token and

00:05:47 --> 00:05:52
encoded with the position in the

00:05:49 --> 00:05:54
sentence but more importantly x and y

00:05:51 --> 00:05:56
coordinate and then tried to basically

00:05:53 --> 00:05:58
solve fill mask problem by basically

00:05:55 --> 00:06:01
blocking and see that if that box can be

00:05:57 --> 00:06:03
filled by the by the model and trained a

00:06:00 --> 00:06:04
model which is similar to bt we call

00:06:02 --> 00:06:07
this

00:06:03 --> 00:06:08
installm and that produced great results

00:06:06 --> 00:06:11
because the attention is now not just

00:06:08 --> 00:06:12
looking at the sequence of tokens but

00:06:10 --> 00:06:14
also xy coordinate in the two

00:06:11 --> 00:06:16
dimensional face which is really really

00:06:13 --> 00:06:18
cool from the perspective of the

00:06:15 --> 00:06:20
document layout understanding and I

00:06:17 --> 00:06:21
think is it fair to say that has become

00:06:19 --> 00:06:22
I mean this is much later today but

00:06:20 --> 00:06:24
oday is sort of a standard technique

00:06:22 --> 00:06:25
almost right if you're looking at two

00:06:23 --> 00:06:26
dimensional data you have some rotary

00:06:24 --> 00:06:28
encoding of x and y or something like

00:06:25 --> 00:06:29
that yeah yeah yeah so at that time that

00:06:27 --> 00:06:31
was not that was not the case so

00:06:28 --> 00:06:34
actually Rafal who was one of our ML

00:06:30 --> 00:06:35
engineers he you will see those two or

00:06:33 --> 00:06:37
three paper being in the top of the

00:06:34 --> 00:06:39
arena during during that time so we were

00:06:36 --> 00:06:40
very happy we started winning a lot of

00:06:38 --> 00:06:44
deals we triple our revenue that year

00:06:39 --> 00:06:46
2021 to 2022 But then openAI launched at

00:06:43 --> 00:06:50
GPT which is November 2022. It turns out

00:06:46 --> 00:06:52
he the bitter lesson held size matters.

00:06:49 --> 00:06:54
So and we were like oh man like there is

00:06:51 --> 00:06:56
a better basically you could actually

00:06:53 --> 00:06:57
pass the documents and at that time they

00:06:55 --> 00:06:59
didn't support documents in the in the

00:06:56 --> 00:07:00
first release but you could basically

00:06:58 --> 00:07:02
take the text with the positions like

00:06:59 --> 00:07:05
preserve and pass and it could it did a

00:07:02 --> 00:07:07
reasonably good good job and we were

00:07:04 --> 00:07:09
like is this end of infabase like like

00:07:06 --> 00:07:12
you can now seems like seems like solve

00:07:08 --> 00:07:13
this whole problem and then we

00:07:11 --> 00:07:15
realized that there is just a ton of

00:07:12 --> 00:07:17
things and I think there is a paper by

00:07:14 --> 00:07:19
data bricks which is compound AI system

00:07:16 --> 00:07:21
that are very good but you need a bunch

00:07:18 --> 00:07:23
of systems before and after this

00:07:20 --> 00:07:25
for that to be reliable and we can get

00:07:22 --> 00:07:27
into the details but that is the history

00:07:24 --> 00:07:29
of how we are where we are today. Yeah.

00:07:26 --> 00:07:31
Amazing. Very small personal anecdote. I

00:07:28 --> 00:07:33
have a lot of PDF files. Everything

00:07:30 --> 00:07:35
every piece of paper I get I just scan

00:07:32 --> 00:07:36
d dump into a folder and I recently

00:07:34 --> 00:07:39
wrote myself a little tool that

00:07:35 --> 00:07:41
basically first I asked an LLM to come

00:07:38 --> 00:07:42
up with a hierarchy of of of documents.

00:07:40 --> 00:07:44
You know we're a family of five. You

00:07:41 --> 00:07:45
know here's some things about our our

00:07:43 --> 00:07:47
you know about our family and then give

00:07:44 --> 00:07:48
me give me a document hierarchy. And

00:07:46 --> 00:07:50
then basically by taking taking a

00:07:47 --> 00:07:51
document and just giving taking the

00:07:49 --> 00:07:53
summary of the document giving to an LM

00:07:50 --> 00:07:54
say which which folder should this go

00:07:52 --> 00:07:56
into. That's an amazingly efficient

00:07:53 --> 00:07:58
sorting algorithm. It's it's really

00:07:55 --> 00:08:01
impressive what what LMS can do. So so

00:07:57 --> 00:08:03
today you have a solution that basically

00:08:00 --> 00:08:06
allows enterprises or or you know

00:08:02 --> 00:08:08
companies to work with with unstructured

00:08:05 --> 00:08:09
ata. Can you talk a little bit about

00:08:07 --> 00:08:11
what this does? What some of the use

00:08:08 --> 00:08:13
cases are? So the use case is pretty

00:08:10 --> 00:08:16
simple which is let's say I'll take a

00:08:12 --> 00:08:18
simple example of a bank that wants to

00:08:15 --> 00:08:20
do lending or an insurance company that

00:08:17 --> 00:08:21
wants to basically process your claims.

00:08:19 --> 00:08:23
So let's take one of one of these two

00:08:20 --> 00:08:26
use cases. So when when people apply for

00:08:22 --> 00:08:28
let's say application of home loan it's

00:08:25 --> 00:08:30
like literally a 100page long packet and

00:08:27 --> 00:08:32
you don't even know where is what. It

00:08:29 --> 00:08:35
could be that first 10 page is their

00:08:31 --> 00:08:37
bank statements a shoe box of documents

00:08:34 --> 00:08:39
and in between there might be cat's

00:08:36 --> 00:08:42
picture.

00:08:38 --> 00:08:46
random letter from the issue I think is

00:08:41 --> 00:08:49
there is no one structure what bank says

00:08:46 --> 00:08:50
I need to something that can verify your

00:08:48 --> 00:08:52
income I need something that verifies

00:08:49 --> 00:08:53
your identity so it's not that they tell

00:08:51 --> 00:08:55
you here is my passport and here is my

00:08:52 --> 00:08:57
driver license here is application

00:08:54 --> 00:08:59
packet and go go and process it you have

00:08:56 --> 00:09:02
to do this reliably because you cannot

00:08:58 --> 00:09:03
make a single error you can just think

00:09:01 --> 00:09:06
about like how do you solve this so

00:09:02 --> 00:09:08
there are two techniques and that's what

00:09:05 --> 00:09:10
you know one of the I I think paper that

00:09:07 --> 00:09:11
we wrote is LLM is not all you need

00:09:09 --> 00:09:13
because one thing that you can do is put

00:09:10 --> 00:09:15
hat into some stuff and ask LM the

00:09:12 --> 00:09:17
question but the problem is if it goes

00:09:14 --> 00:09:19
beyond the context window then that's a

00:09:16 --> 00:09:20
problem you can do rag because rag is a

00:09:18 --> 00:09:22
technique where you put that into some

00:09:19 --> 00:09:24
vector database figure out for what

00:09:21 --> 00:09:26
question what are the relevant chunks

00:09:23 --> 00:09:28
that could be useful and then produce

00:09:25 --> 00:09:30
that but how do you know something you

00:09:27 --> 00:09:31
did not miss you might get precision but

00:09:29 --> 00:09:36
if you miss something then that's a

00:09:30 --> 00:09:38
problem and LLMs are great but they make

00:09:35 --> 00:09:40
surprising errors So for example, let's

00:09:37 --> 00:09:42
ay you have 10 page long bank statement

00:09:39 --> 00:09:45
with tables. Somehow they will get a lot

00:09:42 --> 00:09:48
of things right but miss like four

00:09:44 --> 00:09:50
andom cells with the value and you

00:09:47 --> 00:09:52
don't even know that they missed it and

00:09:49 --> 00:09:53
that just changes the whole thing. So

00:09:51 --> 00:09:57
these are very surprising kind of

00:09:53 --> 00:09:59
errors. So we looked at like how do you

00:09:56 --> 00:10:01
solve this reliably because reliability

00:09:58 --> 00:10:03
part is important because these are

00:10:00 --> 00:10:06
complex decisions that banks or

00:10:02 --> 00:10:08
insurance companies or immigration make.

00:10:05 --> 00:10:10
Um so the right way to solve this is how

00:10:07 --> 00:10:12
do you know how to split this particular

00:10:09 --> 00:10:14
packet into bunch of things we care

00:10:11 --> 00:10:15
about. So you have to analyze every

00:10:13 --> 00:10:17
single thing in detail. Once you have

00:10:14 --> 00:10:19
done this then how do you get all of

00:10:16 --> 00:10:21
these structures that we care about like

00:10:18 --> 00:10:23
for example we run separate table to

00:10:20 --> 00:10:24
text algorithm rather than passing the

00:10:22 --> 00:10:25
whole thing to LM because how do you

00:10:23 --> 00:10:27
know you didn't miss four things? How do

00:10:24 --> 00:10:29
you make sure all the cells are correct?

00:10:26 --> 00:10:31
Similar thing for checkboxes and the

00:10:28 --> 00:10:32
signatures and other things that that

00:10:30 --> 00:10:35
basically matter. Once you have

00:10:31 --> 00:10:37
classified then what are the relevant

00:10:34 --> 00:10:39
schema that we need? Then you basically

00:10:36 --> 00:10:40
go and do those things. How do you

00:10:38 --> 00:10:43
validate that each of those things are

00:10:39 --> 00:10:45
correct? then write validations and then

00:10:42 --> 00:10:47
do cross valid validation because is the

00:10:44 --> 00:10:49
past saying the same thing that W2 does

00:10:46 --> 00:10:51
because if not then that so basically

00:10:48 --> 00:10:53
the what what we provide is this

00:10:50 --> 00:10:54
interface where people can build all of

00:10:52 --> 00:10:56
those things without writing a sing

00:10:53 --> 00:10:58
le line of code and then you build

00:10:55 --> 00:11:00
this application and now you can run

00:10:58 --> 00:11:02
this application as part of deployment

00:10:59 --> 00:11:04
which will integrate with your upstream

00:11:01 --> 00:11:06
and downstream so now you can do lending

00:11:03 --> 00:11:07
in like less than 5 seconds rather than

00:11:05 --> 00:11:09
earlier that would have taken several

00:11:06 --> 00:11:11
weeks. There's one very

00:11:08 --> 00:11:13
interesting use case is intelligence use

00:11:10 --> 00:11:15
case for example. So let's say and and

00:11:12 --> 00:11:17
that's where I talk about why

00:11:14 --> 00:11:19
the approaches are critically important.

00:11:16 --> 00:11:21
So let's say you are a country and you

00:11:18 --> 00:11:23
want to collect bunch of intelligence

00:11:20 --> 00:11:25
you collect bunch of intelligence data

00:11:22 --> 00:11:28
nd you want to answer if there is any

00:11:24 --> 00:11:29
threat to the country. So and you

00:11:27 --> 00:11:32
receive like let's say millions of

00:11:28 --> 00:11:34
documents per day. One way to dump that

00:11:31 --> 00:11:36
all into some rag system and ask a

00:11:33 --> 00:11:38
question. How do you know you didn't

00:11:35 --> 00:11:40
miss anything? because they care about

00:11:37 --> 00:11:43
hat. And maybe the right way to answer

00:11:39 --> 00:11:46
that question is not putting all the

00:11:42 --> 00:11:47
documents into a search rather looking

00:11:45 --> 00:11:49
at every single page of the document.

00:11:46 --> 00:11:52
Look for the things that you care about

00:11:48 --> 00:11:53
like which is terrorism threat or money

00:11:51 --> 00:11:55
laundering or whatever and then extract

00:11:52 --> 00:11:57
hat put that into database run SQL

00:11:54 --> 00:11:59
query once the things that match then go

00:11:56 --> 00:12:01
and do the deeper analysis because now

00:11:58 --> 00:12:03
you guarantee completeness. So I think

00:12:00 --> 00:12:05
that what what we have seen is that

00:12:02 --> 00:12:07
while rag is good for casual search you

00:12:04 --> 00:12:09
need a complex workflow under the hood

00:12:06 --> 00:12:11
that is explainable that is auditable

00:12:08 --> 00:12:13
that is guaranteed to be accurate and

00:12:10 --> 00:12:15
correct is important for solving many of

00:12:12 --> 00:12:16
these enterprise problems. So that's

00:12:14 --> 00:12:17
what we do. We help basically

00:12:15 --> 00:12:19
enterprises take any kind of

00:12:16 --> 00:12:23
unstructured data and make decisions

00:12:18 --> 00:12:25
from it for reliable 100% complete and

00:12:22 --> 00:12:26
accurate use case. There are cases where

00:12:24 --> 00:12:28
we can make error and in that case we

00:12:25 --> 00:12:30
have to pass to humans like hey seems

00:12:27 --> 00:12:31
like something is wrong can you go and

00:12:29 --> 00:12:33
look at it totally and look I mean I

00:12:30 --> 00:12:35
think this is the trend with current AI

00:12:32 --> 00:12:38
systems right I've not encountered an AI

00:12:34 --> 00:12:40
system yet that is perfect and and by

00:12:37 --> 00:12:42
some metric I think we never will right

00:12:39 --> 00:12:43
I think what we what you need is is

00:12:41 --> 00:12:45
finding things with reasonable error

00:12:42 --> 00:12:47
ates and then a good escalation path to

00:12:44 --> 00:12:49
humans to deal with those right exactly

00:12:46 --> 00:12:50
and even humans humans are not 100%

00:12:48 --> 00:12:52
correct right so you have to build the

00:12:49 --> 00:12:53
right processes to catch it so that's

00:12:51 --> 00:12:56
why I think sometimes when people say

00:12:52 --> 00:12:57
this AI doesn't It's just that AI is not

00:12:55 --> 00:12:59
supposed to work reliably 100% of the

00:12:56 --> 00:13:01
time. You have to build a system around

00:12:58 --> 00:13:02
it so that and and that is going to be a

00:13:00 --> 00:13:04
lot of investment that you will see

00:13:02 --> 00:13:06
across the board which is how do we

00:13:03 --> 00:13:08
build the right systems around AI and

00:13:05 --> 00:13:11
LLM that solves the problem. Is there a

00:13:07 --> 00:13:14
shift in how enterprises or or general I

00:13:10 --> 00:13:15
think consumers of AI think about

00:13:13 --> 00:13:18
reliability? I mean look look

00:13:14 --> 00:13:20
classically if I'm a chief compliance

00:13:17 --> 00:13:21
officer in a bank or so I have a new

00:13:19 --> 00:13:23
piece of software and you know my take

00:13:20 --> 00:13:25
is this software can never do X because

00:13:22 --> 00:13:27
that puts us out of compliance. I

00:13:24 --> 00:13:28
recently spoke to to a bank that

00:13:26 --> 00:13:30
basically said like, well, we tried

00:13:27 --> 00:13:32
that. It doesn't work with AI, right? So

00:13:29 --> 00:13:34
now we're saying, you know, the the a

00:13:31 --> 00:13:36
well-trained human gets us out of

00:13:33 --> 00:13:38
compliance about X times, you know,

00:13:35 --> 00:13:40
every X hours or so, right? And so the

00:13:37 --> 00:13:42
AI has to be 10x better and then we're

00:13:39 --> 00:13:44
going to sign off on it. Uh, you know,

00:13:41 --> 00:13:46
so so you you you cannot have absolute

00:13:43 --> 00:13:47
perfection. Um, so so you know, we have

00:13:45 --> 00:13:49
to sort of change the acceptance

00:13:46 --> 00:13:51
criteria. Is is that something you're

00:13:48 --> 00:13:53
seeing as well? I think more important

00:13:50 --> 00:13:55
is predictability. I think people are

00:13:52 --> 00:13:57
fine with errors as long as errors are

00:13:54 --> 00:13:58
predictable. When errors are not

00:13:56 --> 00:14:00
predictable, that's where the problem

00:13:57 --> 00:14:02
is. So when basically somebody makes an

00:13:59 --> 00:14:04
error and you don't even know the error

00:14:01 --> 00:14:06
was made, that that's when because in

00:14:03 --> 00:14:07
humans, you know, they will make 3 4%

00:14:05 --> 00:14:09
error, you know, but if you put the

00:14:06 --> 00:14:10
second human by default, the chance of

00:14:08 --> 00:14:14
that is low

00:14:09 --> 00:14:16
and with AI, the issue is that they're

00:14:13 --> 00:14:19
pretty accurate. They're very good and

00:14:15 --> 00:14:22
but they make mistakes in a surprisingly

00:14:18 --> 00:14:24
unpredictable way. Mhm. And that that is

00:14:21 --> 00:14:27
a bigger problem and that's where I

00:14:23 --> 00:14:29
think the tooling and systems around it

00:14:26 --> 00:14:32
o detect them to be able to explain

00:14:28 --> 00:14:34
when the error was made to be able to

00:14:31 --> 00:14:36
figure out how to catch them or building

00:14:33 --> 00:14:38
system that allows you to minimize that

00:14:35 --> 00:14:40
effect that is the critical part. So I

00:14:37 --> 00:14:43
think in general what we have seen is

00:14:39 --> 00:14:44
enterprises are fine using AIs as long

00:14:42 --> 00:14:46
as we show them predictability. They

00:14:43 --> 00:14:48
don't they don't care about you know 99%

00:14:45 --> 00:14:51
accuracy. You can be 90% accurate or

00:14:47 --> 00:14:53
even 80% accurate but just tell us which

00:14:50 --> 00:14:55
20% need to be reviewed or which 20%

00:14:52 --> 00:14:58
need to go somewhere and that requires a

00:14:54 --> 00:14:59
lot of systems around these tools to get

00:14:57 --> 00:15:01
here. So I think we sometime

00:14:58 --> 00:15:04
misunderstand what enterprises want.

00:15:00 --> 00:15:05
They don't want 100% accuracy. They want

00:15:03 --> 00:15:07
yeah that makes sense. Is this the

00:15:04 --> 00:15:09
future that essentially you know in the

00:15:06 --> 00:15:11
future if an organization receives a

00:15:08 --> 00:15:12
document that typically human will no

00:15:10 --> 00:15:14
longer see the document but will

00:15:11 --> 00:15:16
primarily look at an I generated summary

00:15:13 --> 00:15:19
or you know I will pre-parse it and and

00:15:15 --> 00:15:21
you know I can reason about it at a

00:15:18 --> 00:15:23
higher layer. Whenever unstructured

00:15:20 --> 00:15:25
ata like documents come in, humans will

00:15:22 --> 00:15:27
still see some kind of dashboard with

00:15:24 --> 00:15:29
like whatever stuff is and only the

00:15:26 --> 00:15:31
thing of interest they will go and

00:15:28 --> 00:15:34
ouble click on and AI will do a lot of

00:15:30 --> 00:15:36
things to minimize their time to get to

00:15:33 --> 00:15:37
that thing of interest very very quickly

00:15:35 --> 00:15:40
like Google is a great example when you

00:15:36 --> 00:15:41
search like you don't read every single

00:15:39 --> 00:15:43
thing Google gives you like here is

00:15:40 --> 00:15:44
maybe three or four things of interest

00:15:42 --> 00:15:46
hat you want to double click and do

00:15:43 --> 00:15:49
research on and I think AI will play

00:15:45 --> 00:15:51
similar important role where in many

00:15:48 --> 00:15:52
cases is gets rid of the boiler plate.

00:15:50 --> 00:15:54
It it reduces thing to the the absolute

00:15:51 --> 00:15:56
ssential essential. Yeah. Are we

00:15:53 --> 00:15:58
looking at a world where my system will

00:15:55 --> 00:16:00
take you know my my couple of key key

00:15:57 --> 00:16:01
points or key phrases and generate a PDF

00:15:59 --> 00:16:03
document then your system will take the

00:16:00 --> 00:16:04
PDF document reduce it back on the a

00:16:02 --> 00:16:06
couple of key points and phrases.

00:16:04 --> 00:16:08
Exactly.

00:16:05 --> 00:16:11
That's I guess not a bad way to operate

00:16:07 --> 00:16:13
uh in in in the future. What is the most

00:16:10 --> 00:16:15
interesting use case you you've seen for

00:16:12 --> 00:16:17
your technology? Anything sort of out of

00:16:14 --> 00:16:18
the ordinary? I think I think what we

00:16:16 --> 00:16:21
are seeing customers being a lot more

00:16:18 --> 00:16:22
creative than we had ever imagined. So

00:16:20 --> 00:16:26
just think of I was working with a bank

00:16:21 --> 00:16:29
in India and now given that AI is has

00:16:25 --> 00:16:32
become reasonably reliable they are

00:16:28 --> 00:16:34
offering entire lending over WhatsApp.

00:16:31 --> 00:16:36
So you go to WhatsApp you say like hey

00:16:33 --> 00:16:38
I'm a business and I want a loan and

00:16:35 --> 00:16:40
then on WhatsApp you get a response back

00:16:37 --> 00:16:42
saying hey can you upload these things

00:16:39 --> 00:16:44
your last 30 days of like all the you

00:16:41 --> 00:16:46
know your P&L statement and whatever

00:16:43 --> 00:16:47
those things look and you basically

00:16:45 --> 00:16:48
peacemail meal you submit these three

00:16:46 --> 00:16:51
four like oh this looks good can you

00:16:47 --> 00:16:53
also do this and I've never seen like

00:16:50 --> 00:16:55
lending being done conversationally over

00:16:52 --> 00:16:56
WhatsApp this is insane like the

00:16:54 --> 00:16:59
customer experience is like

00:16:55 --> 00:17:03
fundamentally very different and I think

00:16:58 --> 00:17:06
that I do believe that over the coming

00:17:02 --> 00:17:09
years it is going to change

00:17:05 --> 00:17:11
the user experience in a very very

00:17:08 --> 00:17:12
significant way. Currently I think a lot

00:17:10 --> 00:17:14
of people think AI is a technology and

00:17:11 --> 00:17:16
you know how we can use this inside

00:17:13 --> 00:17:20
software. I think that the biggest

00:17:15 --> 00:17:22
impact would be with the degree of

00:17:19 --> 00:17:24
affordance that it gives you you can

00:17:21 --> 00:17:26
completely build a new class of

00:17:23 --> 00:17:28
interaction with your customers that

00:17:25 --> 00:17:31
would never have been possible. uh and

00:17:27 --> 00:17:32
we are seeing more and more of those

00:17:30 --> 00:17:34
currently like all of these processes

00:17:31 --> 00:17:36
like insurance claims and all it's

00:17:33 --> 00:17:39
pretty painful process right and I think

00:17:36 --> 00:17:41
America is slightly more conservative in

00:17:38 --> 00:17:43
those things but if you go to developing

00:17:40 --> 00:17:44
world where digitization is more of a

00:17:42 --> 00:17:47
new thing and people are already using

00:17:44 --> 00:17:49
all the stuff on phone things are just

00:17:46 --> 00:17:51
moving in a way where you know AI makes

00:17:48 --> 00:17:53
you feel like you're talking to humans

00:17:50 --> 00:17:54
nobody loved chat bots before but now

00:17:52 --> 00:17:56
you feel good because they they

00:17:53 --> 00:17:59
basically are conversing with you in

00:17:55 --> 00:18:02
pretty similar to humanlike behavior and

00:17:58 --> 00:18:04
that interface coupled with all the

00:18:01 --> 00:18:05
customer interaction that they have. Of

00:18:03 --> 00:18:07
course, one of the big use case that

00:18:04 --> 00:18:09
everybody's trying to go after is a call

00:18:06 --> 00:18:11
center. But just think of every other

00:18:08 --> 00:18:13
things too like how do you create open

00:18:10 --> 00:18:15
an account, how do you do lending, how

00:18:12 --> 00:18:17
do you do processing, it will have

00:18:14 --> 00:18:19
significant impact on how the user

00:18:16 --> 00:18:20
experience is going to change in a very

00:18:18 --> 00:18:22
significant way. Yeah, totally. And

00:18:19 --> 00:18:24
I think there's even I think an

00:18:22 --> 00:18:26
opportunity here to take some processes

00:18:23 --> 00:18:28
which currently were very you know I I I

00:18:26 --> 00:18:30
take a lot of documents I throw them

00:18:27 --> 00:18:31
over a wall and back comes a response to

00:18:29 --> 00:18:32
really turn to something something more

00:18:30 --> 00:18:34
interactive right where it's like hey

00:18:32 --> 00:18:36
Guido you know tell me more about your

00:18:33 --> 00:18:37
SP use case okay then I need these

00:18:35 --> 00:18:38
documents and I send them it's like well

00:18:36 --> 00:18:40
that document is missing something and

00:18:37 --> 00:18:41
you know you can do this interactive

00:18:39 --> 00:18:43
with very very short latency everything

00:18:40 --> 00:18:44
even immigration right like you send the

00:18:42 --> 00:18:46
stuff and you don't even know you know

00:18:43 --> 00:18:47
two months later you hear like your

00:18:45 --> 00:18:49
stuff is rejected or we need something

00:18:46 --> 00:18:50
like this all of those things can

00:18:48 --> 00:18:52
fundamentally be changed I just got a

00:18:50 --> 00:18:54
letter back from the IRS. I submitted a

00:18:51 --> 00:18:55
long uh you know application with lots

00:18:53 --> 00:18:56
of supporting documents. I got a form

00:18:54 --> 00:18:58
that I read saying the documentation is

00:18:55 --> 00:19:00
not complete without any mention of what

00:18:57 --> 00:19:01
is not complete. And so you're saying

00:18:59 --> 00:19:02
like what does this mean? Right? This

00:19:00 --> 00:19:04
can be just much more interactive and

00:19:01 --> 00:19:07
because now you can do things in real

00:19:03 --> 00:19:10
time and and so I'm pretty optimistic on

00:19:06 --> 00:19:12
the impact of this on every single

00:19:09 --> 00:19:14
business uh on how they interact with

00:19:11 --> 00:19:15
eir customers. That that makes no

00:19:13 --> 00:19:17
sense. What do you see as the main

00:19:14 --> 00:19:20
barriers for for companies to adopt

00:19:16 --> 00:19:22
his? It's like, you know, I mean, I've

00:19:19 --> 00:19:24
seen I've seen many, you know, a classic

00:19:21 --> 00:19:26
enterprise adopting AI. There's

00:19:23 --> 00:19:28
discussions around, you know, compliance

00:19:25 --> 00:19:30
and legal and where does my data go and

00:19:27 --> 00:19:33
, you know, like like a long list of

00:19:29 --> 00:19:35
of um sort of concerns that are being

00:19:32 --> 00:19:37
expressed. What are the top sort of

00:19:34 --> 00:19:39
items that you've seen? The enterprises

00:19:36 --> 00:19:41
are not historically known for moving

00:19:38 --> 00:19:44
very quickly. So that's that's number

00:19:40 --> 00:19:44
one. So I think expecting that like I

00:19:43 --> 00:19:46
would say they're moving a little

00:19:43 --> 00:19:47
quicker in the AI revolution than they

00:19:45 --> 00:19:49
did previously.

00:19:46 --> 00:19:50
Exactly. In general, I think each of

00:19:48 --> 00:19:52
these large enterprises have to get

00:19:49 --> 00:19:53
approval from their compliance committee

00:19:51 --> 00:19:56
and the regulations committee, you know,

00:19:52 --> 00:19:57
and they all basically and not none of

00:19:55 --> 00:19:59
them really understand things and

00:19:56 --> 00:20:01
sometimes you get regulations that might

00:19:58 --> 00:20:03
or questions that might not even be

00:20:00 --> 00:20:06
applicable like for example tell me

00:20:02 --> 00:20:08
very time you change the feature how to

00:20:05 --> 00:20:10
LLM's like we LLM developers don't

00:20:07 --> 00:20:11
change features, right? And but but you

00:20:09 --> 00:20:13
get like all all of those things that

00:20:10 --> 00:20:16
basically is is a is a massive time

00:20:12 --> 00:20:18
sync. But I think the two key things

00:20:15 --> 00:20:22
that they care about

00:20:17 --> 00:20:24
is how do you guarantee that my data is

00:20:21 --> 00:20:27
afe and secure. So that's number one.

00:20:24 --> 00:20:29
And second is how do you give me

00:20:26 --> 00:20:32
auditability and predictability. That's

00:20:28 --> 00:20:33
the two more like if you boil down to

00:20:31 --> 00:20:35
all their questions, they eventually

00:20:32 --> 00:20:38
boil down to those two things. Like

00:20:34 --> 00:20:40
nobody wants like AI making a decision

00:20:37 --> 00:20:43
even if it is correct if they cannot

00:20:39 --> 00:20:44
explain here are the set of steps that

00:20:42 --> 00:20:46
it took.

00:20:43 --> 00:20:48
Because if if something wrong happened

00:20:45 --> 00:20:50
they have to explain because in human

00:20:47 --> 00:20:52
world you can explain something came

00:20:49 --> 00:20:54
this went to these five different teams

00:20:51 --> 00:20:56
where they did this part and this

00:20:53 --> 00:20:57
particular error was made and that's why

00:20:55 --> 00:20:59
which we will correct in future so that

00:20:56 --> 00:21:01
his kind of mistake would not happen if

00:20:58 --> 00:21:04
AI becomes a black box with no

00:21:00 --> 00:21:06
instrumentation of how things get done

00:21:03 --> 00:21:09
internally that that basically has hard

00:21:05 --> 00:21:10
time especially for customercentric use

00:21:08 --> 00:21:13
cases for simple casual search and those

00:21:09 --> 00:21:15
kind of things is fine but the runtime

00:21:12 --> 00:21:17
has to be something that is

00:21:14 --> 00:21:19
auditable and you should be able to find

00:21:16 --> 00:21:20
if something went wrong, where it went

00:21:18 --> 00:21:22
wrong and they don't tell you directly.

00:21:19 --> 00:21:23
They they ask the question that

00:21:21 --> 00:21:25
eventually boils down to this but that's

00:21:22 --> 00:21:27
what we have seen at the major

00:21:24 --> 00:21:29
equirement. Makes sense. Let me switch

00:21:26 --> 00:21:30
tax here a little bit. We we've seen you

00:21:28 --> 00:21:32
know one of the I think hotest buzzwords

00:21:29 --> 00:21:33
at the moment are agents, right? And

00:21:31 --> 00:21:35
we're sort of you know there it's an

00:21:32 --> 00:21:37
overused term. It's sometimes used as a

00:21:34 --> 00:21:39
marketing term for you know a glorified

00:21:36 --> 00:21:41
set of prompts basically right but we're

00:21:38 --> 00:21:43
also seeing it as a essentially

00:21:40 --> 00:21:46
different user interface paradigm right

00:21:42 --> 00:21:48
where where I no longer walk through a

00:21:45 --> 00:21:49
transaction step by step but basically I

00:21:47 --> 00:21:51
give a high level instruction to agent

00:21:48 --> 00:21:52
acts autonomously we're even

00:21:50 --> 00:21:54
seeing yourself as a software design

00:21:51 --> 00:21:55
paradigm where I now have multiple

00:21:53 --> 00:21:58
agents that work together and you know

00:21:54 --> 00:22:01
make decisions more autonomously h how

00:21:57 --> 00:22:03
do you think this will change with you

00:22:00 --> 00:22:05
know how enterprises process data how we

00:22:02 --> 00:22:07
work with unstructured data and then

00:22:04 --> 00:22:09
this entire space. So let's look at like

00:22:06 --> 00:22:11
what we already know that has worked

00:22:08 --> 00:22:14
well. So what we already know that has

00:22:10 --> 00:22:17
worked well is enterprises already know

00:22:13 --> 00:22:18
how to run some workflow that is created

00:22:16 --> 00:22:21
by some developer and they define bunch

00:22:17 --> 00:22:22
of steps using some workflow management

00:22:20 --> 00:22:24
ool and you can run it. So people

00:22:21 --> 00:22:25
already know how to run this argument

00:22:23 --> 00:22:27
you can make is can we just tell the

00:22:24 --> 00:22:29
agent like give me the answer and they

00:22:26 --> 00:22:30
do it. The problem with currently the

00:22:28 --> 00:22:33
agents are if you just give them same

00:22:30 --> 00:22:34
goal and same set of tools and they

00:22:32 --> 00:22:36
might choose different path two

00:22:33 --> 00:22:38
different times. So they are not

00:22:35 --> 00:22:41
guaranteed to deterministically always

00:22:37 --> 00:22:44
go in one path. So in general people

00:22:40 --> 00:22:47
don't like runtime inconsistencies. So

00:22:43 --> 00:22:50
runtime has to be consistent. So I think

00:22:46 --> 00:22:53
the where I have seen things work well

00:22:49 --> 00:22:54
within enterprises during build time

00:22:52 --> 00:22:56
when somebody has to define the control

00:22:53 --> 00:22:59
path and the logic and all of those kind

00:22:55 --> 00:23:01
of things you can maybe have agent

00:22:58 --> 00:23:02
produce the first draft or like hey this

00:23:00 --> 00:23:04
how I plan to execute this is what it

00:23:01 --> 00:23:06
look like because otherwise human might

00:23:03 --> 00:23:07
have taken like long period of time

00:23:05 --> 00:23:08
pretty similar to cursor right if want

00:23:06 --> 00:23:10
o build something they can write the

00:23:07 --> 00:23:11
first draft of the code the human can

00:23:09 --> 00:23:14
look make some minor edits but then you

00:23:10 --> 00:23:16
run that codeistically yeah exactly so

00:23:13 --> 00:23:19
my point is I think it's the same

00:23:15 --> 00:23:21
way. So I do not believe that autonomous

00:23:18 --> 00:23:23
agent would be a runtime phenomena.

00:23:20 --> 00:23:25
However, there would be a build time or

00:23:22 --> 00:23:28
compile time phenomena which basically

00:23:24 --> 00:23:30
means that during build phase they can

00:23:27 --> 00:23:32
do the 90% of the work humans make some

00:23:29 --> 00:23:34
changes and that's a huge huge huge

00:23:31 --> 00:23:36
value because the reason why things

00:23:33 --> 00:23:38
don't scale at the enterprise is because

00:23:35 --> 00:23:40
there is either lack of enough

00:23:37 --> 00:23:42
developers or skills or drive or

00:23:39 --> 00:23:44
whatever. If AI agents can do things and

00:23:41 --> 00:23:47
make it so easy that you can build those

00:23:43 --> 00:23:48
and then once it is approved then we

00:23:46 --> 00:23:50
know what is running then it is

00:23:47 --> 00:23:52
auditable and you can also add steps and

00:23:49 --> 00:23:53
checkpoints whatever that is needed like

00:23:51 --> 00:23:54
for example cursor generated code but

00:23:52 --> 00:23:56
you want more logging so you can add

00:23:54 --> 00:23:57
logs in between whatever those things

00:23:55 --> 00:24:00
could be so once you have that

00:23:56 --> 00:24:02
deterministic artifact that can run in

00:23:59 --> 00:24:03
production so that's where I think the

00:24:01 --> 00:24:05
world is going to move towards which is

00:24:02 --> 00:24:08
a compile time phenomena and the runtime

00:24:04 --> 00:24:09
phenomena runtime phenomena has to be

00:24:07 --> 00:24:11
deterministic something that is

00:24:08 --> 00:24:13
auditable debugable you exactly know

00:24:10 --> 00:24:14
hat is happening. You should be able to

00:24:12 --> 00:24:16
see the logs and all that kind of stuff.

00:24:14 --> 00:24:18
At compile time, agent can play an

00:24:16 --> 00:24:20
important role because they can help

00:24:17 --> 00:24:22
with the reasoning and create the first

00:24:19 --> 00:24:24
draft where human can participate with

00:24:22 --> 00:24:25
e agent to produce the artifact that

00:24:24 --> 00:24:28
he's going to run. It makes a lot of

00:24:24 --> 00:24:29
sense. I mean this is a super hot debate

00:24:27 --> 00:24:31
at the moment, right? I think we've

00:24:28 --> 00:24:32
verything from this AGI vision where

00:24:30 --> 00:24:34
it's like no, this is going to be a

00:24:31 --> 00:24:35
fully agentic loop and it decides when

00:24:33 --> 00:24:36
it wants to terminate, decides what

00:24:34 --> 00:24:37
ools to use and it's just, you know,

00:24:35 --> 00:24:39
you give you a credit card and let it

00:24:36 --> 00:24:41
run, right? And I I I personally agree.

00:24:38 --> 00:24:43
I don't think we're there yet. Right.

00:24:40 --> 00:24:45
The the these most free form agentic

00:24:42 --> 00:24:46
systems that we've seen, they they

00:24:44 --> 00:24:51
typically don't work yet. This approach

00:24:45 --> 00:24:52
of saying let the LLM generate the flow

00:24:50 --> 00:24:53
but then freeze the flow once it works.

00:24:51 --> 00:24:55
I think at least in the short term, it's

00:24:52 --> 00:24:56
a much much more programmatic vision.

00:24:54 --> 00:24:58
Also, basically, I think we can take a

00:24:55 --> 00:24:59
lot of lessons from what works in the

00:24:57 --> 00:25:01
human world. Let's assume every human is

00:24:58 --> 00:25:02
an agent. You don't allow every single

00:25:00 --> 00:25:05
mployee in your company make autonomous

00:25:02 --> 00:25:07
decision. No, some person at the top

00:25:04 --> 00:25:09
says here is the set of things that we

00:25:06 --> 00:25:11
are going to do. you can only do these

00:25:08 --> 00:25:14
t of things and then so basically the

00:25:10 --> 00:25:16
runtime is pretty deterministic

00:25:13 --> 00:25:18
that most of the reasoning and agency

00:25:15 --> 00:25:21
and all that cool stuff is used so LLM

00:25:17 --> 00:25:24
process re-engineering is a thing now

00:25:20 --> 00:25:26
I guess that's that's fantastic so what

00:25:23 --> 00:25:28
are you excite looking forward what are

00:25:25 --> 00:25:30
you excited about in in your space you

00:25:27 --> 00:25:31
know where I mean AI at the moment it's

00:25:29 --> 00:25:33
hard to predict what's happening in six

00:25:30 --> 00:25:34
months right but if you you know try to

00:25:32 --> 00:25:37
stretch your crystal ball to the

00:25:33 --> 00:25:39
absolute limits here what what things do

00:25:36 --> 00:25:41
you think you'll we'll see our 12 months

00:25:38 --> 00:25:43
out, 2 years out uh in in your space. So

00:25:40 --> 00:25:46
we have been we have been um we have

00:25:42 --> 00:25:47
been debating and reasoning on this for

00:25:45 --> 00:25:49
quite a period of time and maybe my

00:25:46 --> 00:25:51
answer would be slightly controversial

00:25:48 --> 00:25:53
uh because you know different people

00:25:50 --> 00:25:57
have different view of what would be the

00:25:52 --> 00:25:59
future. So I do believe that AI will

00:25:56 --> 00:26:00
continue to improve and the capabilities

00:25:58 --> 00:26:02
and I think they will play an important

00:25:59 --> 00:26:04
role in compile time, building things,

00:26:02 --> 00:26:06
reasoning and all that although runtime

00:26:03 --> 00:26:07
is going to be much more deterministic

00:26:05 --> 00:26:09
and predictable and

00:26:06 --> 00:26:11
controllable. Now the question is what

00:26:08 --> 00:26:14
is going to be execution pattern? There

00:26:10 --> 00:26:17
are two different view of the world. One

00:26:13 --> 00:26:19
is that does it make my data management

00:26:16 --> 00:26:21
problem easier that it allows compile

00:26:18 --> 00:26:25
time move all the things into one place

00:26:20 --> 00:26:27
and be able to answer and do things or

00:26:24 --> 00:26:30
you basically keep the tooling and the

00:26:26 --> 00:26:33
world the way it is siloed everywhere

00:26:29 --> 00:26:35
and AI would become smart enough to have

00:26:32 --> 00:26:37
multi- aent communication where each

00:26:34 --> 00:26:39
agent can do things and figure out how

00:26:36 --> 00:26:42
to how to you know if one makes an error

00:26:38 --> 00:26:44
and affects how to do the communication.

00:26:41 --> 00:26:48
So uh we we have been working on this

00:26:43 --> 00:26:50
idea of federated AI execution where how

00:26:48 --> 00:26:53
you can as an organization you can

00:26:49 --> 00:26:56
define these thousands of agents in a

00:26:52 --> 00:27:00
very federated way

00:26:55 --> 00:27:02
but dynamically are able to discover

00:26:59 --> 00:27:04
other agents or through some platform or

00:27:01 --> 00:27:07
whatever that that could be and then

00:27:03 --> 00:27:10
able to communicate. So if you give a

00:27:06 --> 00:27:11
bigger goal somehow they basically you

00:27:09 --> 00:27:13
don't need a one central person to

00:27:10 --> 00:27:15
decide everything dynamically all the

00:27:12 --> 00:27:16
agents can discover they all can share

00:27:14 --> 00:27:18
the capabilities then you can figure out

00:27:15 --> 00:27:19
he control path they can then you can

00:27:17 --> 00:27:22
figure out how to run so we are trying

00:27:18 --> 00:27:24
to build federated decentralized

00:27:21 --> 00:27:27
automation framework which basically

00:27:23 --> 00:27:29
means that can I take any process in any

00:27:26 --> 00:27:32
organization and figure out the

00:27:28 --> 00:27:34
federated decentralized execution

00:27:31 --> 00:27:36
framework and that can run and and

00:27:33 --> 00:27:38
that's where where I I believe that

00:27:35 --> 00:27:40
automation world would move. There are

00:27:37 --> 00:27:43
still a lot of open questions, a lot of

00:27:39 --> 00:27:46
unknowns, a lot of work to do. Yeah. Uh

00:27:42 --> 00:27:48
but the bet that we are taking is that

00:27:45 --> 00:27:50
AI will drive automation in a

00:27:47 --> 00:27:54
significant way. RPA would be fully

00:27:49 --> 00:27:59
eaten by AI automation and the future is

00:27:53 --> 00:28:02
likely going to be more of decentralized

00:27:58 --> 00:28:04
federated execution. Mhm. Yeah. And so

00:28:01 --> 00:28:05
that's that's that's that's one hell of

00:28:03 --> 00:28:08
a vision there. I'm uh I'm excited about

00:28:04 --> 00:28:10
it. So AI AI is progressing very

00:28:07 --> 00:28:12
rapidly. How have sort of the technical

00:28:09 --> 00:28:15
advances of AI

00:28:11 --> 00:28:17
impacted what you can deliver to your

00:28:14 --> 00:28:18
end customers? I mean there must be

00:28:16 --> 00:28:20
changing basically constantly. Is that

00:28:17 --> 00:28:23
right? Yeah. Yeah. So I think the

00:28:20 --> 00:28:25
arlier we focused primarily on the

00:28:22 --> 00:28:26
unstructured data problem as part of the

00:28:24 --> 00:28:28
automation because that's one of the

00:28:25 --> 00:28:29
long tent in the poll is how do you even

00:28:27 --> 00:28:30
understand them because once you get

00:28:28 --> 00:28:32
data in the structured format you know

00:28:29 --> 00:28:35
how to do next steps. So we primarily

00:28:32 --> 00:28:36
focused until now which is if you get

00:28:34 --> 00:28:38
bunch of unstructured data how to get

00:28:36 --> 00:28:40
you the things that you need to make the

00:28:37 --> 00:28:42
next step of the decision. We did not

00:28:40 --> 00:28:44
ouch the next step of the decision.

00:28:41 --> 00:28:46
Like let's say you are a lending company

00:28:43 --> 00:28:48
or you are an insurance company. Once

00:28:45 --> 00:28:50
you get all the data, you might have to,

00:28:47 --> 00:28:53
you know, trigger some other tool like

00:28:49 --> 00:28:56
their lending system or some sort of

00:28:52 --> 00:28:58
raud system or whatever the risk system

00:28:55 --> 00:29:00
and and things like that because that

00:28:57 --> 00:29:02
requires knowing about those systems,

00:28:59 --> 00:29:04
how to interpret the results and all

00:29:01 --> 00:29:06
that kind of stuff. So we are like data

00:29:03 --> 00:29:08
in we will do everything give you

00:29:05 --> 00:29:10
valuable data out and after that you are

00:29:07 --> 00:29:12
sponsible for all the other

00:29:09 --> 00:29:15
integrations. And the way these guys

00:29:11 --> 00:29:17
olved those problems was by using this

00:29:14 --> 00:29:19
technology called RPA. You might have

00:29:16 --> 00:29:21
heard robotic process automation. So

00:29:18 --> 00:29:23
robotic process automation is literally

00:29:20 --> 00:29:26
if human had to do something, you

00:29:22 --> 00:29:27
basically open some stuff, browser or

00:29:25 --> 00:29:29
whatever, take some data, put into some

00:29:26 --> 00:29:30
other system, click some button and all

00:29:28 --> 00:29:33
that stuff. So it records that human

00:29:29 --> 00:29:35
clicks on that desktop and tries to keep

00:29:32 --> 00:29:37
repeating it. So you kind of like get

00:29:34 --> 00:29:39
hat automated. And the hard part that

00:29:36 --> 00:29:41
hey had is you can't do robotic process

00:29:38 --> 00:29:43
for unstructured data because it's not

00:29:40 --> 00:29:45
fixed they changes so anything

00:29:42 --> 00:29:46
will be very very brittle but if the

00:29:44 --> 00:29:49
things are exactly the same after that

00:29:45 --> 00:29:51
you can actually like record the screen

00:29:48 --> 00:29:53
and and and replay it it has been very

00:29:50 --> 00:29:55
brittle like the problem with the

00:29:52 --> 00:29:57
RP even though they add value uh I think

00:29:54 --> 00:29:58
there are some big players there UiPath

00:29:56 --> 00:30:01
automation anywhere and many of them

00:29:57 --> 00:30:03
have reasonable you know massive market

00:30:00 --> 00:30:06
cap now with

00:30:02 --> 00:30:10
AI the argument that we make and we

00:30:05 --> 00:30:11
might be wrong uh is once the data comes

00:30:09 --> 00:30:14
out which we are very very good at at

00:30:10 --> 00:30:17
hat until that point can we also start

00:30:13 --> 00:30:20
operating those other systems now this

00:30:16 --> 00:30:23
makes a massive assumption which is AI

00:30:19 --> 00:30:24
will help us operate those systems and

00:30:22 --> 00:30:26
uh there are some interesting protocols

00:30:23 --> 00:30:27
that has come which is model context

00:30:25 --> 00:30:28
protocol that allows you to dynamically

00:30:26 --> 00:30:30
discover capabilities call those

00:30:27 --> 00:30:33
functions it has a ton of problems still

00:30:29 --> 00:30:35
which is does all the system even

00:30:32 --> 00:30:37
support MCP what if they don't and they

00:30:34 --> 00:30:39
They sort of punted on authentication

00:30:36 --> 00:30:41
but but we'll figure that out over time

00:30:38 --> 00:30:43
then authentication then how do you know

00:30:40 --> 00:30:46
if something breaks one of the arguments

00:30:42 --> 00:30:49
that we're making is that maybe in

00:30:45 --> 00:30:51
future as we basically go broader can we

00:30:48 --> 00:30:54
do entire end to-end workflow so once

00:30:50 --> 00:30:55
data comes out do we have a way to plan

00:30:53 --> 00:30:58
d region during the compile time which

00:30:54 --> 00:31:00
AI agent can do how to operate those

00:30:57 --> 00:31:01
systems how to call them how to get the

00:30:59 --> 00:31:02
data then call some other system if

00:31:00 --> 00:31:04
something gets wrong how to involve

00:31:02 --> 00:31:07
humans so create all that stuff during

00:31:03 --> 00:31:09
with AI agent during compile time and

00:31:06 --> 00:31:12
then extend our offering to do this

00:31:08 --> 00:31:15
entire thing end to end like can RPA be

00:31:11 --> 00:31:17
fully replaced with AI automation. RPA

00:31:14 --> 00:31:20
had some you know stuff that is easier

00:31:16 --> 00:31:21
to solve because some user logs in so it

00:31:19 --> 00:31:22
always runs in the context of the user

00:31:20 --> 00:31:24
if you're clicking on desktop and all

00:31:21 --> 00:31:26
that. One of the hacks that we believe

00:31:23 --> 00:31:29
might work is called identity pass

00:31:25 --> 00:31:31
through. Can we assume the user identity

00:31:28 --> 00:31:34
that can be provided during runtime and

00:31:30 --> 00:31:36
then let that user identity get passed

00:31:33 --> 00:31:38
to all of the MCP? Although I mean do do

00:31:35 --> 00:31:41
I always want an agent to have the same

00:31:38 --> 00:31:43
capabilities that I have? You know,

00:31:40 --> 00:31:45
like an agent is like um today like a

00:31:42 --> 00:31:47
good intern, right? So I I I trust the

00:31:44 --> 00:31:49
intern up to a point. I don't

00:31:46 --> 00:31:50
necessarily want unlimited spending on

00:31:48 --> 00:31:52
my credit card. Maybe want to cap that

00:31:50 --> 00:31:54
$50 or something like that. And you

00:31:51 --> 00:31:56
can decide that during compile time. So

00:31:53 --> 00:32:00
basically you can say that like hey even

00:31:55 --> 00:32:01
if like let's say this this user context

00:31:59 --> 00:32:04
is with this but as soon as it gets to

00:32:00 --> 00:32:08
this operating tool maybe like we create

00:32:04 --> 00:32:10
some like user divided by half ident

00:32:07 --> 00:32:12
fake identity that will have less

00:32:09 --> 00:32:13
permissions or things like that. So the

00:32:11 --> 00:32:15
good thing is and that's why I said the

00:32:12 --> 00:32:17
AI agent should only be used during

00:32:14 --> 00:32:18
compile time so that it gives humans all

00:32:16 --> 00:32:20
the control that what the runtime

00:32:17 --> 00:32:22
behavior should be. Yeah makes sense.

00:32:19 --> 00:32:23
This problems come when AI agent is

00:32:21 --> 00:32:25
making runtime decisions because then

00:32:22 --> 00:32:26
you have no control where things are

00:32:24 --> 00:32:28
going. Uh so the separation is

00:32:25 --> 00:32:30
critically important. So during the

00:32:27 --> 00:32:32
initial build you can choose like if you

00:32:29 --> 00:32:33
want to curb what agency they have and

00:32:31 --> 00:32:35
what limits and constraint that they

00:32:32 --> 00:32:37
have and that's what it will it will go

00:32:34 --> 00:32:38
and do during the runtime. All right,

00:32:36 --> 00:32:40
thanks for being here today. That was

00:32:37 --> 00:32:43
absolutely amazing. I think we're we're

00:32:39 --> 00:32:45
on a very exciting journey, you know,

00:32:42 --> 00:32:47
with with AI and, you know, looking

00:32:44 --> 00:32:49
back, I think the last big wave that I

00:32:46 --> 00:32:50
was a part of, uh, you know, was was

00:32:48 --> 00:32:52
probably the boom. And I think if

00:32:49 --> 00:32:53
there's one lesson learned for

00:32:51 --> 00:32:55
enterprises in general back in that

00:32:52 --> 00:32:57
hose days is that these big

00:32:54 --> 00:32:59
technological shifts happen, you have to

00:32:56 --> 00:33:01
jump on the wave early. It may be

00:32:58 --> 00:33:03
complicated, maybe, you know, still a

00:33:00 --> 00:33:04
little a little weird, a little little,

00:33:02 --> 00:33:05
you know, your compliance, your legal

00:33:03 --> 00:33:08
folks, they don't know how to deal with

00:33:04 --> 00:33:09
it. But you know if you don't you may

00:33:07 --> 00:33:12
end up like Barnes & Noble right the the

00:33:08 --> 00:33:16
downside is is substantial and I

00:33:11 --> 00:33:17
think it's it is clear today that that

00:33:15 --> 00:33:20
here's a huge opportunity for

00:33:16 --> 00:33:22
enterprises here to both have more

00:33:19 --> 00:33:24
fficient workflows for themselves but

00:33:21 --> 00:33:25
also to have a a much much better end

00:33:23 --> 00:33:28
customer experience and and partner

00:33:24 --> 00:33:29
experience and in addition it does three

00:33:27 --> 00:33:32
things which is it saves you a lot of

00:33:28 --> 00:33:34
cost. It does. It allows you to do

00:33:31 --> 00:33:35
things much much faster. And the third

00:33:33 --> 00:33:37
one is fundamentally changes customer

00:33:34 --> 00:33:39
experience in a very significant way. So

00:33:36 --> 00:33:41
I think I think there there are all the

00:33:38 --> 00:33:43
business reasons for enterprises to

00:33:40 --> 00:33:44
adopt these things. Now it's just about

00:33:42 --> 00:33:46
how to make this work. I don't think I

00:33:43 --> 00:33:48
have any question on whether this you

00:33:45 --> 00:33:49
know whether this will work or is this

00:33:47 --> 00:33:51
the right decision. It's about how to

00:33:48 --> 00:33:54
make it work. That that is the bigger

00:33:50 --> 00:33:54
question I think.

<!-- YOUTUBE_TRANSCRIPT_END -->
