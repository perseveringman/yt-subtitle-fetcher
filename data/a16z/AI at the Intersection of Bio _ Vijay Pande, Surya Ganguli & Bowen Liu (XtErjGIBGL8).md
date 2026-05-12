---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "XtErjGIBGL8"
title: "AI at the Intersection of Bio | Vijay Pande, Surya Ganguli & Bowen Liu"
video_url: "https://www.youtube.com/watch?v=XtErjGIBGL8"
thumbnail_url: "https://i.ytimg.com/vi/XtErjGIBGL8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=XtErjGIBGL8"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2024-10-03T13:00:40.000Z"
upload_date: "2024-10-03"
duration_seconds: 1717
duration_human: "28:37"
view_count: 3199
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T13:05:28.588Z"
---

# AI at the Intersection of Bio | Vijay Pande, Surya Ganguli & Bowen Liu

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=XtErjGIBGL8
- video_id: XtErjGIBGL8
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2024-10-03T13:00:40.000Z
- upload_date: 2024-10-03
- duration: 28:37
- view_count: 3199
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

In this episode, Vijay Pande is joined by AI experts Surya Ganguli, venture partner, and Bowen Liu, investment partner, to explore the transformational role of AI in drug discovery and biology. Together, they delve into how machine learning and self-supervised models are reshaping the foundational tasks of drug design, from protein folding to molecular synthesis. The conversation highlights cutting-edge breakthroughs like generative AI for drug discovery and the growing potential of foundation models to accelerate innovation. For biotech entrepreneurs, this episode offers an essential overview of how AI is untangling the complexity of biology, paving the way for faster, cheaper, and more effective drug development. Tune in to gain timely insights on the future of AI in healthcare and actionable takeaways that can sharpen your competitive edge in the rapidly evolving landscape of life sciences innovation.

Resources:  

Find Vijay on X: https://x.com/vijaypande  

Learn more about a16z Bio+Health: https://a16z.com/bio-health/  

Learn more about Raising Health: https://a16z.com/podcasts/raising-health/  


Stay Updated:  

Find a16z Bio+Health on LinkedIn: https://www.linkedin.com/showcase/a16z-bio-health/  

Find a16z Bio+Health on X: https://x.com/a16zBioHealth  

Subscribe on your favorite podcast app: https://a16z.com/podcasts/raising-health/


Disclosure:  

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:08
[Music]

00:00:14 --> 00:00:19
so sir Bowen thank you so much for

00:00:16 --> 00:00:21
joining me on raising Health yeah thanks

00:00:18 --> 00:00:23
for having us did E either of you have

00:00:20 --> 00:00:24
like an aha moment that like oh this is

00:00:22 --> 00:00:26
going to be big that this is going to be

00:00:23 --> 00:00:28
interesting yeah you know I've been

00:00:25 --> 00:00:30
working in AI for a while like you know

00:00:27 --> 00:00:33
for quite a while like almost a decade

00:00:29 --> 00:00:36
or more and for for me like in AI in

00:00:32 --> 00:00:38
general chat GPT was just eye openening

00:00:35 --> 00:00:40
like we i' had seen gpt2 it was kind of

00:00:37 --> 00:00:42
impressive and so forth but chatu PT was

00:00:39 --> 00:00:44
the first thing that did did things that

00:00:41 --> 00:00:47
we had no idea it could do we couldn't

00:00:43 --> 00:00:51
predict it it was it was remarkable and

00:00:46 --> 00:00:53
so forth and then go going to more of

00:00:50 --> 00:00:55
the the biology domain I was actually

00:00:52 --> 00:00:57
really impressed by esm fold this every

00:00:54 --> 00:00:58
scale modeling where you could kind of

00:00:56 --> 00:01:01
do the same thing that you do for

00:00:57 --> 00:01:03
language but do it for sequences

00:01:00 --> 00:01:06
and then you learn representations that

00:01:02 --> 00:01:08
know about the structure uh of U of of

00:01:05 --> 00:01:10
proteins and so this kind of going from

00:01:07 --> 00:01:12
one modality to another was kind of

00:01:09 --> 00:01:14
remarkable I was kind of taken back by

00:01:11 --> 00:01:16
that yeah I mean I think for me it's

00:01:13 --> 00:01:17
probably like first year old grad school

00:01:15 --> 00:01:19
right coming from like someone who

00:01:16 --> 00:01:22
worked in the in the lab and the bench

00:01:18 --> 00:01:24
um to you know in our collaboration of

00:01:21 --> 00:01:26
KLA kard um we did some like drug

00:01:23 --> 00:01:28
repurposing project trying to figure out

00:01:25 --> 00:01:31
you know adapt existing drugs for for

00:01:27 --> 00:01:33
danger infections and I remember like

00:01:30 --> 00:01:34
you know doing some of the calculations

00:01:32 --> 00:01:36
like on my laptop and then you know a

00:01:33 --> 00:01:39
month later kind of buying the compounds

00:01:35 --> 00:01:41
and having our collaborators test it and

00:01:38 --> 00:01:42
you know it actually working right so

00:01:40 --> 00:01:44
like that kind of really made me think

00:01:41 --> 00:01:46
hey you know this computational kind of

00:01:43 --> 00:01:48
chemistry computational drug design you

00:01:45 --> 00:01:51
know was really exciting where we stand

00:01:47 --> 00:01:53
today is that Ai and Drug design is I

00:01:50 --> 00:01:55
think no longer a question of if you

00:01:52 --> 00:01:57
know it's a question of how how does it

00:01:54 --> 00:01:58
get rolled out how is it useful so the

00:01:56 --> 00:02:02
if has gone away but I think it took a

00:01:58 --> 00:02:03
lot to get here like multiple decades to

00:02:01 --> 00:02:06
get here uh maybe we could start by

00:02:02 --> 00:02:08
talking about that um early sort of shi

00:02:05 --> 00:02:10
for when we we were in machine learning

00:02:07 --> 00:02:13
what could we do then and then what

00:02:09 --> 00:02:15
makes it AI now so I think even like

00:02:12 --> 00:02:17
before ml like I think computational

00:02:14 --> 00:02:19
chemistry computation biology you know

00:02:16 --> 00:02:21
they've been around for like 40 years or

00:02:18 --> 00:02:24
more right and I think the early methods

00:02:20 --> 00:02:26
we had kind of were um maybe from two

00:02:23 --> 00:02:28
camps you know one we had like the

00:02:25 --> 00:02:29
physics based methods right where you

00:02:27 --> 00:02:32
kind of start from the underlying

00:02:28 --> 00:02:35
lowlevel physics to make you know

00:02:31 --> 00:02:36
predictions about chemistry um and on

00:02:34 --> 00:02:37
the other end you have kind of these

00:02:35 --> 00:02:40
like Express systems right where like

00:02:37 --> 00:02:42
kind of humans would encode you know

00:02:39 --> 00:02:43
some like heuristics or rules to make

00:02:41 --> 00:02:46
predictions they were like pros and cons

00:02:42 --> 00:02:49
for each you know for the physics um

00:02:45 --> 00:02:50
approach like very generalizable but

00:02:48 --> 00:02:52
hen a lot of methods are very

00:02:49 --> 00:02:53
computationally expensive especially for

00:02:51 --> 00:02:56
the kind of the systems that were're

00:02:52 --> 00:02:58
interested in drug Discovery the biology

00:02:55 --> 00:03:00
whereas kind of the expert systems very

00:02:57 --> 00:03:03
efficient once you had it all coded up

00:02:59 --> 00:03:06
but you know weren't super generalizable

00:03:02 --> 00:03:07
right we kind of had machine learning

00:03:05 --> 00:03:11
methods that kind of fell in between

00:03:07 --> 00:03:14
these two EXs where you would kind of

00:03:10 --> 00:03:16
learn from the data sets that you had

00:03:13 --> 00:03:18
right so that you know ideally that

00:03:15 --> 00:03:20
would generalize a bit better than just

00:03:17 --> 00:03:22
like the human encoded rules but way

00:03:19 --> 00:03:24
more computationally efficient but these

00:03:21 --> 00:03:26
ml approaches you still had to Define

00:03:24 --> 00:03:28
you know like the the input features

00:03:25 --> 00:03:30
right like like a scientist where have

00:03:28 --> 00:03:32
to Define know how to best represent a

00:03:29 --> 00:03:34
molecule but then kind of deep learning

00:03:31 --> 00:03:36
came around right where the whole

00:03:33 --> 00:03:39
philosophy was you would take probably

00:03:35 --> 00:03:42
the most raw representation right and

00:03:38 --> 00:03:44
then also have the the algorithm learn

00:03:41 --> 00:03:46
what the best representations are to to

00:03:43 --> 00:03:47
solve the particular task yeah actually

00:03:45 --> 00:03:49
one of my favorite examples for

00:03:46 --> 00:03:51
epresentation for people that don't

00:03:48 --> 00:03:53
hink about this a lot is like you know

00:03:50 --> 00:03:55
if I asked you like 25 plus 17 that's

00:03:52 --> 00:03:57
really easy to do if I gave you that

00:03:54 --> 00:03:59
same problem in Roman numerals you'd

00:03:56 --> 00:04:01
probably have to think about that back

00:03:58 --> 00:04:03
into Arabic and then do the compet put

00:04:00 --> 00:04:05
back into Roman some representations

00:04:02 --> 00:04:07
make computation natural so then what

00:04:04 --> 00:04:09
happens from there where where does the

00:04:06 --> 00:04:10
story go the Deep learning Revolution

00:04:08 --> 00:04:13
kind of revolutionized everything right

00:04:09 --> 00:04:15
and is really a Confluence of sort of a

00:04:12 --> 00:04:19
large amounts of data that's key that

00:04:14 --> 00:04:21
allows us to train larger models but

00:04:18 --> 00:04:22
also a key thing was self-supervised

00:04:20 --> 00:04:26
learning so that you can learn from

00:04:21 --> 00:04:27
unlabeled data using a very simple task

00:04:25 --> 00:04:29
right so like if we go through the list

00:04:26 --> 00:04:30
of things right and place things in

00:04:28 --> 00:04:31
context and think about how much data is

00:04:29 --> 00:04:33
required

00:04:30 --> 00:04:35
right GPT 4 it's it's it's thought that

00:04:32 --> 00:04:38
it's it's trained in about about 5

00:04:34 --> 00:04:40
trillion unique token sequences you can

00:04:37 --> 00:04:42
think of tokens is like subwords right

00:04:39 --> 00:04:43
hat's a huge amount of data and all

00:04:41 --> 00:04:46
it's trained to do is to predict the

00:04:42 --> 00:04:47
next word right so but then it learns

00:04:45 --> 00:04:49
representations that can solve all sorts

00:04:46 --> 00:04:52
of other problems to get a sense of how

00:04:48 --> 00:04:54
massive that data set is it would take

00:04:51 --> 00:04:56
humans about 20,000 years to read that

00:04:53 --> 00:04:59
amount of text right so now if we go

00:04:55 --> 00:05:00
from language to like genomic sequences

00:04:58 --> 00:05:04
like or or amino acid sequences

00:04:59 --> 00:05:06
underlying proteins right esm3 with

00:05:03 --> 00:05:08
evolutionary scale modeling did the same

00:05:05 --> 00:05:11
language modeling but now an amino acid

00:05:07 --> 00:05:14
sequences of about 2.8 billion sequences

00:05:10 --> 00:05:16
right so at a rough estimate of say 300

00:05:13 --> 00:05:17
amino acids per Protein that's just

00:05:15 --> 00:05:19
under a trillion tokens which is about

00:05:16 --> 00:05:21
he same order of magnitude as gbt 4

00:05:18 --> 00:05:24
like 1/5th as much right so that's kind

00:05:20 --> 00:05:26
of cool like like Evolution left

00:05:23 --> 00:05:28
actually less protein text on our planet

00:05:25 --> 00:05:31
han humans left on the internet right

00:05:27 --> 00:05:33
but well some is what what we see so far

00:05:30 --> 00:05:36
too right exactly we haven't sequenced

00:05:32 --> 00:05:37
everything yet right so um but now you

00:05:35 --> 00:05:40
can start to see that going from

00:05:36 --> 00:05:43
language to proteins we have a lot less

00:05:39 --> 00:05:45
data right for comparison for 3D

00:05:42 --> 00:05:48
structure we have even less data we have

00:05:44 --> 00:05:50
about 200,000 or so solved protein

00:05:47 --> 00:05:52
structures in the protein Data Bank um

00:05:50 --> 00:05:54
small molecule Discovery is another one

00:05:51 --> 00:05:56
where deep learning had a huge

00:05:53 --> 00:05:58
Revolution and stable chemicals is like

00:05:55 --> 00:06:00
about 10 to the 180 right that's a huge

00:05:58 --> 00:06:02
space of molecules right but the the

00:05:59 --> 00:06:05
space of drug-like compounds that are

00:06:01 --> 00:06:08
like you know soluble bind with with

00:06:04 --> 00:06:10
biological um uh proteins and stuff

00:06:07 --> 00:06:12
that's an infinite decimal fraction it's

00:06:09 --> 00:06:13
like 10 the 40 right just as a

00:06:11 --> 00:06:17
comparison the number of stars in the

00:06:12 --> 00:06:20
universe about 10 24 right so how do we

00:06:16 --> 00:06:22
xplore this small fraction of but still

00:06:19 --> 00:06:23
huge fraction of space and people are

00:06:21 --> 00:06:26
able to use language models to do that

00:06:22 --> 00:06:27
as well right so so and then like single

00:06:25 --> 00:06:29
cell gene expression you can create

00:06:26 --> 00:06:31
Foundation mod cell biology with 36

00:06:28 --> 00:06:33
million cells

00:06:30 --> 00:06:35
and in Neuroscience we can do like ecog

00:06:32 --> 00:06:37
arrays and try to decode speech from the

00:06:34 --> 00:06:39
brain so the the the availability of

00:06:36 --> 00:06:41
data compute and algorithms is like what

00:06:38 --> 00:06:42
really changed everything well one of

00:06:40 --> 00:06:44
the things that I think it's interesting

00:06:41 --> 00:06:46
to emphasize is that with deep learning

00:06:43 --> 00:06:48
you have something that's a pretty rich

00:06:45 --> 00:06:49
model exactly that can learn the

00:06:47 --> 00:06:51
representations that b was talking about

00:06:48 --> 00:06:53
because it's a neural net into another

00:06:50 --> 00:06:55
neural net and

00:06:52 --> 00:06:57
then it almost becomes like a complex

00:06:54 --> 00:06:58
physics problem itself right with all

00:06:56 --> 00:07:00
these parameters part of the

00:06:57 --> 00:07:02
self-supervised stuff is like low shot

00:06:59 --> 00:07:04
learning like how do you think about

00:07:01 --> 00:07:06
his um low shot where you don't have a

00:07:03 --> 00:07:08
lot of labels like how does that sort of

00:07:05 --> 00:07:10
come to be how does that work especially

00:07:07 --> 00:07:11
like in the drug design context yeah I

00:07:09 --> 00:07:14
think you touched on like probably the

00:07:10 --> 00:07:16
core problem of like you know ml applied

00:07:13 --> 00:07:18
to science while we have a lot of like

00:07:15 --> 00:07:21
unlabeled data like there's just not

00:07:17 --> 00:07:23
hat much label data out there um and a

00:07:20 --> 00:07:24
lot of is because like it's very

00:07:22 --> 00:07:27
experimentally expensive to like

00:07:23 --> 00:07:29
generate data both in times both in

00:07:26 --> 00:07:32
terms of time and cost um and so you're

00:07:28 --> 00:07:33
right so like usually in a drug

00:07:31 --> 00:07:35
Discovery project you know if you have

00:07:32 --> 00:07:37
100 actives you should be close to a

00:07:34 --> 00:07:39
drug but 100 data points is like tiny

00:07:36 --> 00:07:41
for machine learning right so then the

00:07:38 --> 00:07:43
idea is can your model learn some you

00:07:40 --> 00:07:46
know information from like other sources

00:07:42 --> 00:07:49
of data um to either learn better

00:07:45 --> 00:07:51
epresentations um such that you know

00:07:48 --> 00:07:53
you can kind of almost like fine-tune it

00:07:50 --> 00:07:55
with the small amount of dat you have to

00:07:52 --> 00:07:57
perform better in your actual

00:07:54 --> 00:07:59
application interested in what are the

00:07:56 --> 00:08:00
recent breakthroughs that are worth

00:07:58 --> 00:08:03
pointing to especially for people want

00:07:59 --> 00:08:05
o sort of understand where we are today

00:08:02 --> 00:08:07
in terms of AI for drug design the past

00:08:04 --> 00:08:09
few years we've had like a lot of

00:08:06 --> 00:08:11
impactful work on you know the problem

00:08:08 --> 00:08:13
of protein structure prediction right

00:08:10 --> 00:08:15
with like Alpha fold you know Rosetta

00:08:12 --> 00:08:17
fold of like given a you know protein

00:08:14 --> 00:08:19
sequence can you predict a 3D structure

00:08:16 --> 00:08:22
which is what defines a lot of protein

00:08:18 --> 00:08:25
kind of function um and so in some ways

00:08:21 --> 00:08:26
in the past like four or five years this

00:08:24 --> 00:08:29
problem of protein structure prediction

00:08:26 --> 00:08:31
went from you know suddenly I was you

00:08:28 --> 00:08:34
know quite far away from being solved to

00:08:30 --> 00:08:35
now you could argue that it's pretty

00:08:33 --> 00:08:37
much being solved for a lot of like

00:08:34 --> 00:08:39
common kind of proteins right so I think

00:08:37 --> 00:08:42
that's an area where really like you

00:08:38 --> 00:08:43
know recent deep learning advances have

00:08:41 --> 00:08:45
you know completely transformed the

00:08:42 --> 00:08:47
field you know there's also like a

00:08:44 --> 00:08:49
related area of like you know these

00:08:46 --> 00:08:52
large language models applied to protein

00:08:48 --> 00:08:54
sequences and biological SE sequences

00:08:51 --> 00:08:56
these kind of models are able to learn

00:08:53 --> 00:08:59
like interesting biology useful biology

00:08:55 --> 00:09:01
for scientists and they also have you

00:08:58 --> 00:09:03
know very promising application the

00:09:00 --> 00:09:04
actual drug Discovery as well well

00:09:02 --> 00:09:08
that's something I want to double click

00:09:04 --> 00:09:09
on is because for actual drug Discovery

00:09:07 --> 00:09:11
like maybe we should talk about what the

00:09:08 --> 00:09:13
stages are but usually you know you find

00:09:10 --> 00:09:16
a hit you get a lead you optimize the

00:09:12 --> 00:09:19
lead you have some sense of adme you go

00:09:15 --> 00:09:21
through animals you go through clinical

00:09:18 --> 00:09:25
trial phases and eventually you're in in

00:09:20 --> 00:09:26
patients um uh let me push back on

00:09:24 --> 00:09:28
like for structure prediction like what

00:09:25 --> 00:09:30
does structure prediction get you for

00:09:27 --> 00:09:32
drug design like what's the there what's

00:09:29 --> 00:09:34
theity let's say small molecule drug

00:09:32 --> 00:09:37
design right like you're truly really

00:09:33 --> 00:09:39
trying to find molecules that bind to

00:09:36 --> 00:09:41
particular proteins or interested in

00:09:38 --> 00:09:43
right that we think modulate Downstream

00:09:40 --> 00:09:45
disease right and so like a part of that

00:09:42 --> 00:09:47
is you know given a protein can you

00:09:44 --> 00:09:51
design you know very strong binders for

00:09:46 --> 00:09:52
it and so um having the idea like

00:09:50 --> 00:09:55
knowing what the 3D structure of a

00:09:51 --> 00:09:57
protein looks like uh you know is a very

00:09:54 --> 00:10:00
useful starting point to to be able to

00:09:56 --> 00:10:01
design these small loal binders it's

00:09:59 --> 00:10:02
also multi-objective optimization

00:10:00 --> 00:10:04
problem right because you you don't just

00:10:01 --> 00:10:06
want a good binder you want you don't

00:10:03 --> 00:10:09
want of Target effects you want it to be

00:10:05 --> 00:10:11
soluble you want it to be not be toxic

00:10:08 --> 00:10:13
you want it to be easily synthesizable

00:10:11 --> 00:10:15
so this machine learning aspects of all

00:10:12 --> 00:10:18
of these that are in play right there's

00:10:14 --> 00:10:19
all sorts of interesting llms that can

00:10:17 --> 00:10:21
that can discover synthesis Pathways

00:10:18 --> 00:10:23
for drugs and things like that so I

00:10:20 --> 00:10:25
think it's really putting it all all of

00:10:22 --> 00:10:27
it together um which which I think is

00:10:24 --> 00:10:28
exciting and there's a lot of exciting

00:10:26 --> 00:10:30
work going on there just to throw out

00:10:27 --> 00:10:31
some numbers where there's a huge

00:10:29 --> 00:10:33
opportunity for AI to make drug

00:10:30 --> 00:10:35
Discovery much more efficient and less

00:10:32 --> 00:10:36
costly right like the cost of drug

00:10:34 --> 00:10:38
design I mean I know in the industry

00:10:36 --> 00:10:41
this is well known but it's worth with

00:10:37 --> 00:10:44
emphasizing it's $2.5 billion for drug

00:10:40 --> 00:10:46
in 10 to 15 years right it's highly

00:10:43 --> 00:10:49
inefficient 90% of drug candidates don't

00:10:45 --> 00:10:50
get don't get FDA approval uh there's

00:10:48 --> 00:10:53
this law that the number of drugs

00:10:50 --> 00:10:55
brought to Market uh per billion dollar

00:10:52 --> 00:10:57
spend is going down by half every 9

00:10:54 --> 00:10:59
years right part of the problem is like

00:10:56 --> 00:11:00
we're we're setting the bar higher

00:10:58 --> 00:11:03
because new drugs have to perform

00:10:59 --> 00:11:06
existing drugs and you know FDA approved

00:11:02 --> 00:11:08
rugs um they target only 800 of the

00:11:05 --> 00:11:10
20,000 known genes that we have 20 to

00:11:07 --> 00:11:12
25,000 known genes that we have so

00:11:09 --> 00:11:15
there's a huge space of opportunities

00:11:12 --> 00:11:16
and so I really think like AI for drug

00:11:14 --> 00:11:18
Discovery can hit at all the

00:11:15 --> 00:11:20
inefficiencies in every step of the drug

00:11:17 --> 00:11:22
design process and and we're kind of

00:11:19 --> 00:11:23
just getting started there a lot of the

00:11:21 --> 00:11:26
xcitement these days is about

00:11:23 --> 00:11:28
generative AI where you can not just

00:11:25 --> 00:11:31
understand some latent space but go back

00:11:27 --> 00:11:33
up and generate something from that

00:11:30 --> 00:11:35
uh so where is that playing drug design

00:11:32 --> 00:11:37
yeah so that's the inverse design

00:11:34 --> 00:11:40
problem right can you design a molecule

00:11:36 --> 00:11:42
with a pre-specified set of properties

00:11:39 --> 00:11:44
and so there ideas for using diffusion

00:11:41 --> 00:11:47
model say with cl with classifier

00:11:43 --> 00:11:49
guidance to like Drive the design in

00:11:46 --> 00:11:50
sequence bace to get get these certain

00:11:48 --> 00:11:52
properties and things like that so

00:11:50 --> 00:11:53
there's a whole bunch of work uh you

00:11:51 --> 00:11:56
know going on in that space that I think

00:11:52 --> 00:11:57
is quite exciting as usual like in this

00:11:55 --> 00:11:59
deep learning field there's tons of

00:11:56 --> 00:12:02
people tinkering around it's more of an

00:11:58 --> 00:12:04
art science and that's where the success

00:12:01 --> 00:12:06
comes right with many many people

00:12:03 --> 00:12:08
tinkering around right now the number of

00:12:05 --> 00:12:10
molecules can you know right now buy

00:12:07 --> 00:12:13
commercially is probably like 10 to 12

00:12:09 --> 00:12:15
right like tens of millions right so you

00:12:12 --> 00:12:17
know what what we have available right

00:12:14 --> 00:12:20
now is like a very tiny percentage of

00:12:16 --> 00:12:22
like what's possible right and so you

00:12:19 --> 00:12:25
know chances are like future medicines

00:12:21 --> 00:12:26
and future kind of materials um are

00:12:24 --> 00:12:28
going to be stuff that we haven't seen

00:12:25 --> 00:12:31
before right and so just like looking at

00:12:27 --> 00:12:32
what we have right now and screening

00:12:30 --> 00:12:35
those is probably not enough right you

00:12:31 --> 00:12:38
have to be a like generate new ideas um

00:12:34 --> 00:12:40
I would say the challenge here is that

00:12:37 --> 00:12:42
like you know unlike you know gen for

00:12:39 --> 00:12:44
like computer vision or natural language

00:12:41 --> 00:12:46
processing it's very easy to figure out

00:12:43 --> 00:12:48
like to kind of validate how good the

00:12:45 --> 00:12:49
generated ideas are right like we

00:12:47 --> 00:12:51
could look at an image or look at a

00:12:48 --> 00:12:54
piece of text and be like hey you know

00:12:50 --> 00:12:56
this is good or not in science you know

00:12:53 --> 00:12:58
it's actually the inverse like it's

00:12:56 --> 00:12:59
actually it's probably easier to

00:12:57 --> 00:13:01
generate ideas but way harder to

00:12:58 --> 00:13:04
validate let me push back on that you

00:13:00 --> 00:13:07
could for sure like test something like

00:13:03 --> 00:13:08
a to some Benchmark and compare methods

00:13:06 --> 00:13:11
and so on so presumably there's been

00:13:07 --> 00:13:13
progress there yeah so definitely like

00:13:10 --> 00:13:15
on like in silic you know like Benchmark

00:13:12 --> 00:13:17
basis you know we've seen like better

00:13:14 --> 00:13:20
improvements you know improvements in

00:13:16 --> 00:13:22
these methods recently but I think at

00:13:19 --> 00:13:24
he end of the day like we're still in a

00:13:21 --> 00:13:27
regime where we're going to have to

00:13:23 --> 00:13:29
make the things that the models you know

00:13:26 --> 00:13:31
generate and then test in a lab right

00:13:28 --> 00:13:33
and and that's the kind of I feel like

00:13:30 --> 00:13:35
big biggest bottleneck for a lot of this

00:13:32 --> 00:13:37
um you know drug design and like

00:13:34 --> 00:13:39
generative modeling yeah and I think

00:13:36 --> 00:13:42
part of it too is going to be like if

00:13:38 --> 00:13:45
you're basically using ml AI design

00:13:41 --> 00:13:47
libraries and you screen a million and

00:13:44 --> 00:13:49
for one active that's going to take a

00:13:46 --> 00:13:51
long time but if it gets to the point

00:13:48 --> 00:13:54
where you design five you screen five

00:13:51 --> 00:13:55
and five are active or maybe four are

00:13:53 --> 00:13:58
active then we're in a very different

00:13:54 --> 00:14:01
regime yeah we've seen examples from the

00:13:57 --> 00:14:03
industry where you know you can generate

00:14:00 --> 00:14:06
maybe 10 or so and and they have a false

00:14:03 --> 00:14:08
positive rate of active of like say 20

00:14:05 --> 00:14:09
to 30% right cuz that's a very different

00:14:07 --> 00:14:11
regime because then we're not spending

00:14:09 --> 00:14:14
all this time making it and then there's

00:14:10 --> 00:14:17
ome reasonable um reasonable hope for

00:14:13 --> 00:14:20
success and also frankly from a cultural

00:14:16 --> 00:14:23
point of view if you make 20 things as a

00:14:19 --> 00:14:24
AI engineer and one works I think your

00:14:22 --> 00:14:26
experimental collaborators are not going

00:14:23 --> 00:14:28
to be loving you and and probably not

00:14:25 --> 00:14:30
rusting you you make 20 and like 15

00:14:28 --> 00:14:31
work yeah exactly that's getting

00:14:29 --> 00:14:33
actually kind interesting there's

00:14:30 --> 00:14:35
everal companies that are trying to you

00:14:32 --> 00:14:37
know that are basically getting starting

00:14:34 --> 00:14:38
to get to that level which which makes

00:14:36 --> 00:14:40
the competitional approach quite

00:14:37 --> 00:14:41
xciting modern AI really offers

00:14:39 --> 00:14:42
opportunity for foundation models we

00:14:40 --> 00:14:45
might have like one model I mean the

00:14:42 --> 00:14:47
fantasy it's one model that designs all

00:14:44 --> 00:14:50
of our drugs right and so where are we

00:14:47 --> 00:14:51
today in terms of that aspect of AI

00:14:49 --> 00:14:53
because that's a huge shift that's

00:14:50 --> 00:14:55
probably one of the bigger philosophical

00:14:52 --> 00:14:57
shifts yeah from M it's interesting

00:14:54 --> 00:14:59
question so so I maintain this going to

00:14:56 --> 00:15:02
be controversial that's good we should

00:14:58 --> 00:15:03
that the best model is the one that has

00:15:01 --> 00:15:06
your test example of interest in the

00:15:02 --> 00:15:08
training set the next best model is

00:15:05 --> 00:15:09
where like you have many many training

00:15:07 --> 00:15:11
examples that are close to your test

00:15:08 --> 00:15:15
example so that you can interpolate

00:15:10 --> 00:15:17
right um so so like why am I saying that

00:15:14 --> 00:15:19
right like the biggest failure mode of

00:15:16 --> 00:15:21
ml is that it can't really do out of

00:15:18 --> 00:15:23
distribution generalization so take

00:15:20 --> 00:15:25
Alpha fold 3 right it was Herald was a

00:15:22 --> 00:15:26
big success um although they didn't

00:15:24 --> 00:15:28
release their code so the academic

00:15:25 --> 00:15:31
Community can't can't really knock the

00:15:27 --> 00:15:32
tires on it yet but but uh folks that

00:15:30 --> 00:15:34
say inductive bio one of our portfolio

00:15:31 --> 00:15:37
companies they they they actually

00:15:33 --> 00:15:40
created a a stronger physics-based

00:15:36 --> 00:15:42
um docking algorithm to predict protein

00:15:39 --> 00:15:44
Lan binding and they compared it to

00:15:41 --> 00:15:47
Alpha fold and it didn't do as well as

00:15:43 --> 00:15:48
Alpha fold on the 50 most common lians

00:15:46 --> 00:15:50
and it's not surprising that Alpha did

00:15:47 --> 00:15:52
well on that because those 50 most

00:15:49 --> 00:15:54
common lians appear like more than 100

00:15:51 --> 00:15:56
times in the protein Data Bank but if

00:15:53 --> 00:15:59
you take out those 50 most common lians

00:15:55 --> 00:16:01
and look at the rest of them their basic

00:15:58 --> 00:16:03
physic space docking did way better than

00:16:00 --> 00:16:06
Alpha like 8% better accuracy than Alpha

00:16:02 --> 00:16:08
fold so physics beats ml when the

00:16:05 --> 00:16:11
training data is not like the test data

00:16:07 --> 00:16:13
right and so that's a key lesson I think

00:16:10 --> 00:16:16
so going back to the kind of the fous

00:16:12 --> 00:16:18
tatements I made you really I I think

00:16:15 --> 00:16:19
you're best off with a specialized model

00:16:17 --> 00:16:21
trained on the data that's very relevant

00:16:18 --> 00:16:23
o the thing the task you want to solve

00:16:20 --> 00:16:24
your second best bet is to start with a

00:16:22 --> 00:16:27
foundation model that understands the

00:16:23 --> 00:16:28
broad space and fine-tune it again on

00:16:26 --> 00:16:30
data that specialize to what you want to

00:16:27 --> 00:16:32
sell well I'm I'm curious just double

00:16:29 --> 00:16:33
click on this because like what's

00:16:31 --> 00:16:35
extrapolation what's interpolation is

00:16:32 --> 00:16:37
interesting we're both trained as physic

00:16:34 --> 00:16:39
so classic examples of physics is like

00:16:36 --> 00:16:43
Newton studies an apple falling from the

00:16:38 --> 00:16:45
tree yeah apocryphally perhaps and then

00:16:42 --> 00:16:47
from that you get FAL Ma and you get

00:16:44 --> 00:16:48
planets orbiting the Sun yes exactly and

00:16:46 --> 00:16:51
like you might say oh this is huge

00:16:47 --> 00:16:52
xtrapolation from apples to planets

00:16:50 --> 00:16:54
yeah but actually it's the same latent

00:16:51 --> 00:16:56
space of f go ma and all this stuff is

00:16:53 --> 00:16:58
that an extrapolation or is that an

00:16:55 --> 00:17:00
interpolation it's finding it's finding

00:16:57 --> 00:17:02
the right Laten space and interpolating

00:16:59 --> 00:17:04
in the correct Laten space so so that's

00:17:01 --> 00:17:06
the thing is if if you have the right

00:17:03 --> 00:17:08
latent space what might seem like an

00:17:05 --> 00:17:10
extrapolation from the outs like apples

00:17:07 --> 00:17:12
to planets may actually be no

00:17:09 --> 00:17:13
extrapolation whatsoever so there are

00:17:11 --> 00:17:15
theories about this in the ml world

00:17:12 --> 00:17:16
where like like these language models

00:17:14 --> 00:17:18
eem to be able to solve endless amounts

00:17:15 --> 00:17:20
of tasks so the theory for how this is

00:17:17 --> 00:17:22
possible is that maybe the space of

00:17:19 --> 00:17:24
tasks isn't that complicated maybe

00:17:21 --> 00:17:26
there's an underlying set of a finite

00:17:23 --> 00:17:28
number of skills you need to solve and

00:17:25 --> 00:17:30
then any new task is a combinatorial

00:17:27 --> 00:17:33
combination of this finite number of

00:17:29 --> 00:17:34
skills so in drug Discovery it's like

00:17:32 --> 00:17:37
the latent space like to

00:17:33 --> 00:17:39
predict properties of a protein what are

00:17:36 --> 00:17:40
the subs you really need to solve and

00:17:38 --> 00:17:42
how do you combine them just in

00:17:39 --> 00:17:44
different ways for different proteins

00:17:41 --> 00:17:45
and so I think that part of that is is

00:17:43 --> 00:17:47
really important to really

00:17:44 --> 00:17:49
understanding why things succeed or fail

00:17:46 --> 00:17:52
proteins evolved right so they're

00:17:48 --> 00:17:54
modular and so forth small molecules are

00:17:51 --> 00:17:56
the outcome of of complicated synthesis

00:17:53 --> 00:17:57
Pathways that were partially evolved

00:17:55 --> 00:18:00
through metabolism but there's all sorts

00:17:56 --> 00:18:03
of other aspects of chemistry that

00:17:59 --> 00:18:05
hrough through modular protein syis

00:18:02 --> 00:18:06
machinery and Catalyst and so forth yeah

00:18:04 --> 00:18:08
exactly so it's a complicated which is a

00:18:05 --> 00:18:09
challenge right because like with

00:18:07 --> 00:18:12
protein sequences and biological

00:18:08 --> 00:18:13
sequences like you can actually do self-

00:18:11 --> 00:18:16
survis learning right because there is

00:18:12 --> 00:18:17
this like complicated generative process

00:18:15 --> 00:18:19
with like evolutionary pressure that you

00:18:16 --> 00:18:21
can learn from there's no equivalent for

00:18:18 --> 00:18:23
small molecules right now unless you're

00:18:20 --> 00:18:24
kind of looking like metabolites we're

00:18:22 --> 00:18:25
trying to understand the biology of

00:18:23 --> 00:18:28
proteins we're trying to find the right

00:18:24 --> 00:18:31
arget uh you know what is it like 80%

00:18:27 --> 00:18:33
of drugs fail uh phase two or three in

00:18:30 --> 00:18:35
trials and that's not because it's toxic

00:18:32 --> 00:18:37
it's because we screwed up the biology

00:18:34 --> 00:18:39
so understanding the biology is a big

00:18:36 --> 00:18:42
deal so how about where are we for AI

00:18:38 --> 00:18:43
for for for understanding biology for

00:18:41 --> 00:18:45
targets and so on you can both kind of

00:18:42 --> 00:18:47
look at it from the level of a cell or

00:18:44 --> 00:18:49
the level of like a human uh right and

00:18:46 --> 00:18:51
so from level of cell I think quite a

00:18:48 --> 00:18:53
few folks are looking at using like

00:18:50 --> 00:18:55
perational studies right so taking a

00:18:52 --> 00:18:58
cell that ideally represents you know

00:18:54 --> 00:19:00
captur some aspect of disease um and

00:18:57 --> 00:19:01
perturbing it you know genetically and

00:18:59 --> 00:19:03
seeing like if you can kind of like

00:19:00 --> 00:19:06
change the state of the cell right to

00:19:02 --> 00:19:09
help us learn if this particular um

00:19:05 --> 00:19:11
protein or Gene actually affects your

00:19:08 --> 00:19:13
disease or like phenotype right

00:19:10 --> 00:19:16
well and so the key idea there is that

00:19:12 --> 00:19:18
he cellular phenotype could recapitate

00:19:15 --> 00:19:21
disease phenotype sufficiently to

00:19:17 --> 00:19:24
predict therapeutic inent exactly and

00:19:20 --> 00:19:27
then and then using methods of like you

00:19:23 --> 00:19:29
know um microscopy to capture like high

00:19:26 --> 00:19:31
content Imaging right and then you know

00:19:28 --> 00:19:33
training ml mods on that but why would

00:19:30 --> 00:19:35
we think the cellular phenotype would be

00:19:32 --> 00:19:38
nough obviously a cell is not a human

00:19:34 --> 00:19:41
right but I think for certain um for a

00:19:37 --> 00:19:44
lot of biology if you kind of design the

00:19:40 --> 00:19:46
Metro cell model you know um in a

00:19:43 --> 00:19:48
good enough way I think you can

00:19:45 --> 00:19:49
recapitulate a lot of key aspects of I

00:19:47 --> 00:19:51
guess that's what we're seeing in the

00:19:48 --> 00:19:55
Laten spaces that come out of these

00:19:50 --> 00:19:56
models yeah yeah for example like uh

00:19:54 --> 00:19:58
there's this Foundation model for Sal

00:19:55 --> 00:20:03
biology where they take sort of 36

00:19:57 --> 00:20:05
million s cell rnac uh expression gen

00:20:02 --> 00:20:06
e expression patterns and then they

00:20:04 --> 00:20:09
learn an auto encode again

00:20:05 --> 00:20:10
self-supervised learning right they can

00:20:08 --> 00:20:12
get create an embedding space for all of

00:20:09 --> 00:20:14
Cell Biology and they could even have

00:20:11 --> 00:20:16
held out species and they put them into

00:20:13 --> 00:20:18
the embedding and they make sense right

00:20:15 --> 00:20:21
so I and then you can ask how how do

00:20:18 --> 00:20:23
drugs move you in the latent space how

00:20:20 --> 00:20:25
do different diseases change you in the

00:20:22 --> 00:20:27
latent space can you try to control the

00:20:24 --> 00:20:29
latent space and design drugs that

00:20:26 --> 00:20:30
control it like I think it's incredibly

00:20:28 --> 00:20:32
exciting

00:20:29 --> 00:20:33
I mean and to some degree that is

00:20:31 --> 00:20:35
understanding biology right exactly I

00:20:32 --> 00:20:37
mean if you have the right lanting space

00:20:34 --> 00:20:39
you basically have understood it exactly

00:20:36 --> 00:20:41
and and and the whole thing

00:20:38 --> 00:20:43
about latent spaces is is they enable

00:20:40 --> 00:20:44
transparency and control right what do

00:20:42 --> 00:20:47
you mean by transparency what do you

00:20:43 --> 00:20:49
mean by control so there's a beautiful

00:20:46 --> 00:20:50
thing about uh say variational honor

00:20:48 --> 00:20:53
encode or we actually have some theory

00:20:50 --> 00:20:55
on why they do this called disentangling

00:20:52 --> 00:20:57
right like in in a more familiar setting

00:20:54 --> 00:21:00
like faces right a face can be happy or

00:20:56 --> 00:21:01
sad have glasses or not and and you can

00:20:59 --> 00:21:03
learn an auto encoder that put

00:21:00 --> 00:21:05
faces into a latent space and you can

00:21:02 --> 00:21:06
find interpretable directions like if I

00:21:04 --> 00:21:09
move in this way I can turn a for frown

00:21:05 --> 00:21:10
upside down right and make you smile or

00:21:08 --> 00:21:12
I can if I move in another Direction I

00:21:09 --> 00:21:14
can put on glasses right so if we can

00:21:11 --> 00:21:16
learn these disentangled Laten spaces

00:21:13 --> 00:21:17
for biology we can find interpretable

00:21:15 --> 00:21:20
directions that move you in desirable

00:21:16 --> 00:21:22
directions or undesirable directions and

00:21:19 --> 00:21:24
then we can design drugs to move you in

00:21:21 --> 00:21:26
that space right so I I think this

00:21:23 --> 00:21:28
disentangling of biology would be

00:21:25 --> 00:21:30
fantastic what we loved about physics is

00:21:27 --> 00:21:32
that math was such a natural sort of

00:21:29 --> 00:21:34
language and and sort of latent space

00:21:31 --> 00:21:36
for these complex systems it was highly

00:21:33 --> 00:21:38
interpretable right very interpretable

00:21:35 --> 00:21:41
but I think biology is so complicated

00:21:37 --> 00:21:43
those Laten spaces might not be quite so

00:21:40 --> 00:21:44
elegant from a you know in a

00:21:42 --> 00:21:46
mathematical point of view but still

00:21:43 --> 00:21:48
could be learned and could still exist

00:21:45 --> 00:21:50
yes and still have the similar

00:21:47 --> 00:21:51
predictive value that we'd expect from

00:21:49 --> 00:21:53
something more that would normally

00:21:50 --> 00:21:55
associate with something like physics

00:21:52 --> 00:21:57
exactly and there's a deep reason they

00:21:54 --> 00:22:00
have to exist I think because you know

00:21:56 --> 00:22:02
biological systems have have survived

00:21:59 --> 00:22:04
for almost 4 billion years of evolution

00:22:01 --> 00:22:05
they've tolerated all sorts of insults

00:22:03 --> 00:22:08
competition and so forth so they're

00:22:04 --> 00:22:09
xtremely robust because they're robust

00:22:07 --> 00:22:11
heir function can't depend on all of

00:22:09 --> 00:22:13
the details that means there must be

00:22:10 --> 00:22:16
low-dimensional structure that controls

00:22:12 --> 00:22:18
their function right and so I I think

00:22:16 --> 00:22:20
studying systems that have a function

00:22:17 --> 00:22:22
which doesn't exist in physics gives you

00:22:19 --> 00:22:24
another handle on underlying Simplicity

00:22:21 --> 00:22:26
that can be exploitable and I think the

00:22:23 --> 00:22:29
second aspect is that life on Earth is

00:22:26 --> 00:22:31
evolvable yes so that evolvability

00:22:28 --> 00:22:33
which is where the modularity and other

00:22:30 --> 00:22:35
and robust comes in I think that's going

00:22:32 --> 00:22:37
to go hand in hand with those lat spaces

00:22:35 --> 00:22:40
absolutely okay so let's say we we

00:22:36 --> 00:22:42
figured out our Target um AI has

00:22:39 --> 00:22:44
accelerated or made the undruggable

00:22:41 --> 00:22:46
drugable we're heading into the clinic

00:22:43 --> 00:22:49
um how does AI help that what's the role

00:22:46 --> 00:22:51
there yeah you know in clinical trials

00:22:48 --> 00:22:54
for example the numbers are quite dismal

00:22:50 --> 00:22:57
ike 80% of clinical trials just fail to

00:22:53 --> 00:23:00
meet enrollment targets right so the

00:22:56 --> 00:23:03
main problems are sort of um poor

00:22:59 --> 00:23:05
patient Recruitment and Retention right

00:23:02 --> 00:23:07
so for example you can start to use AI

00:23:04 --> 00:23:09
to select patients and a key issue there

00:23:06 --> 00:23:12
will be to limit patient heterogeneity

00:23:08 --> 00:23:13
right a lot of drugs work differently in

00:23:11 --> 00:23:15
different patients with different

00:23:12 --> 00:23:16
genetic backgrounds with different

00:23:14 --> 00:23:19
biomarkers and so forth so you could

00:23:16 --> 00:23:21
imagine for example AI systems that

00:23:18 --> 00:23:24
search EMR records that search

00:23:20 --> 00:23:25
biomarkers and match them to clinical

00:23:23 --> 00:23:28
trial databases to find the optimal

00:23:24 --> 00:23:30
patient population for each clinical

00:23:27 --> 00:23:32
trial right and that will improve uh

00:23:29 --> 00:23:35
success rates for the clinical trial of

00:23:31 --> 00:23:36
course um you want interpretability of

00:23:34 --> 00:23:38
these AI systems because you're going to

00:23:35 --> 00:23:40
have to explain to FDA Regulators why

00:23:37 --> 00:23:41
ou chose the patients you're choosing

00:23:39 --> 00:23:43
and you'll have to use the same

00:23:40 --> 00:23:44
selection process when you decide am I

00:23:42 --> 00:23:46
going to assign a drug to a certain

00:23:43 --> 00:23:48
patient or not and then in terms of

00:23:45 --> 00:23:50
retention you can imagine wearable

00:23:47 --> 00:23:53
devices or other things to make

00:23:49 --> 00:23:55
adherence easier and automatic and so

00:23:52 --> 00:23:57
forth so I think there's a lot of work

00:23:54 --> 00:24:00
uh on on trying to make these clinical

00:23:56 --> 00:24:01
trials less inefficient in that way yeah

00:23:59 --> 00:24:03
I mean one of the things for me that's

00:24:00 --> 00:24:06
always been a fantasy too is to be able

00:24:02 --> 00:24:08
to predict the outcomes of Trials yes

00:24:05 --> 00:24:11
yeah and so if hopefully we're

00:24:07 --> 00:24:13
unraveling the biology we'll be able to

00:24:10 --> 00:24:15
predict which trials may have challenges

00:24:12 --> 00:24:17
or not yeah and thing about trials are

00:24:14 --> 00:24:20
so expensive and 80% fail yeah if we

00:24:16 --> 00:24:23
could even just go from 20% succeeding

00:24:19 --> 00:24:27
to 30% succeeding exactly I mean that's

00:24:22 --> 00:24:28
uh an enormous 50% in increase in drugs

00:24:26 --> 00:24:30
yeah that's a dramatic change and that

00:24:27 --> 00:24:32
can attack the inverse Moors law or

00:24:29 --> 00:24:34
arum's law of like exponential decay and

00:24:31 --> 00:24:36
successful drugs per dollar spend right

00:24:34 --> 00:24:38
cuz the worst case is like you fail like

00:24:35 --> 00:24:41
post phase three right like if you could

00:24:37 --> 00:24:44
like fail even fail early why that's

00:24:40 --> 00:24:46
yeah yeah or and prioritize yeah yeah

00:24:43 --> 00:24:47
well then also I mean then after that

00:24:45 --> 00:24:49
we're basically into real world evidence

00:24:47 --> 00:24:51
and personalized medicine and in

00:24:49 --> 00:24:53
principle the same models could be used

00:24:50 --> 00:24:55
for that or I mean how do you see that

00:24:52 --> 00:24:56
space playing out yeah personalized

00:24:54 --> 00:24:58
medicine is a is a field that has been

00:24:55 --> 00:25:00
coming every decade for the last like

00:24:57 --> 00:25:03
four decades or so almost here it's

00:24:59 --> 00:25:05
almost here yeah exactly I mean you know

00:25:02 --> 00:25:08
I find very interesting sort of academic

00:25:04 --> 00:25:10
work on uh ipsc technology induce plur

00:25:07 --> 00:25:12
poent stem cells where you can say for

00:25:09 --> 00:25:14
example take a person's skin skin cell

00:25:11 --> 00:25:16
turn them back into say heart cells and

00:25:13 --> 00:25:18
and get like heart tissue and so if

00:25:15 --> 00:25:21
you want to figure out say like will a

00:25:17 --> 00:25:23
drug be cardiotoxic you can apply it to

00:25:20 --> 00:25:24
human heart tissue and look at different

00:25:22 --> 00:25:25
patient populations and see how it

00:25:23 --> 00:25:27
differentially affects different patent

00:25:24 --> 00:25:30
populations and so forth I think this is

00:25:27 --> 00:25:31
a a little bit on the academic side like

00:25:29 --> 00:25:34
uh I don't know if it's ready for prime

00:25:31 --> 00:25:35
time in industry but as usual

00:25:33 --> 00:25:37
personalized medicine is extremely

00:25:34 --> 00:25:40
seductive it's seductive to me I think

00:25:36 --> 00:25:42
it's exciting we have unprecedented

00:25:39 --> 00:25:44
input into human phenotypes now uh

00:25:41 --> 00:25:47
partially because ipsc just gene

00:25:43 --> 00:25:49
xpression assay um other biomarkers and

00:25:46 --> 00:25:50
so forth so I'm quite excited about it I

00:25:48 --> 00:25:52
mean for me when I think about this if

00:25:49 --> 00:25:55
we put all the things we just talked

00:25:51 --> 00:25:58
about together is the Mega Foundation

00:25:54 --> 00:26:00
model that unravels biology that lets us

00:25:57 --> 00:26:02
understand targets let do trials better

00:25:59 --> 00:26:05
let's us do evidence better into

00:26:02 --> 00:26:09
personalized medicine that it's both the

00:26:04 --> 00:26:11
AI biologist and the AI doctor of sorts

00:26:08 --> 00:26:13
I think it feels very science fictiony

00:26:10 --> 00:26:16
but yet you can also see how we are on

00:26:13 --> 00:26:17
this trajectory yeah that that where

00:26:15 --> 00:26:19
those things are coming together yeah

00:26:16 --> 00:26:20
basically the dream would be can you

00:26:18 --> 00:26:23
come up with a foundation model for

00:26:19 --> 00:26:25
Human Society from a health perspective

00:26:22 --> 00:26:28
like can you embed humans in a latent

00:26:24 --> 00:26:29
space and really understand the space of

00:26:27 --> 00:26:31
possible actions how drugs move

00:26:28 --> 00:26:33
different humans in different directions

00:26:30 --> 00:26:35
in the laden space I I think that's the

00:26:32 --> 00:26:37
prize yes I think you could start with

00:26:34 --> 00:26:40
uman biology but then you probably have

00:26:36 --> 00:26:42
to put in behavior all these other

00:26:39 --> 00:26:43
things AB that's part of the foundation

00:26:41 --> 00:26:46
model yeah yeah in time but you could

00:26:42 --> 00:26:48
just start with merely like a digital

00:26:45 --> 00:26:51
human that would predict a clinical

00:26:47 --> 00:26:53
trial and that would be enough for also

00:26:50 --> 00:26:54
how it does in real world and so on yeah

00:26:52 --> 00:26:56
that doesn't sound that far off

00:26:53 --> 00:26:58
considering the Arc of what we've just

00:26:55 --> 00:26:59
been talking about uh but uh there's

00:26:57 --> 00:27:01
till a lot to build for sure the data

00:26:58 --> 00:27:03
exists out there right now to like kind

00:27:00 --> 00:27:05
of build this model right like we are

00:27:02 --> 00:27:07
capturing a lot of modalities both you

00:27:04 --> 00:27:09
know vertically and horizontally right

00:27:06 --> 00:27:11
so like vertically you know we can

00:27:08 --> 00:27:13
collect a lot of data about like all way

00:27:10 --> 00:27:15
from our cells to like our tissues all

00:27:12 --> 00:27:17
the way to like you know our human level

00:27:14 --> 00:27:19
kind of data right from variables

00:27:16 --> 00:27:21
horizontally like for each particular

00:27:18 --> 00:27:22
level in this kind of biological

00:27:20 --> 00:27:25
hierarchy we're collecting like all

00:27:22 --> 00:27:27
these different modalities right from

00:27:24 --> 00:27:29
you know like proteomic you know for

00:27:26 --> 00:27:31
cells like proteomics you know

00:27:28 --> 00:27:33
expression data all that kind of stuff

00:27:30 --> 00:27:35
the subductive idea is like you know

00:27:32 --> 00:27:37
maybe an LM with some other Foundation

00:27:34 --> 00:27:41
model can can take all these different

00:27:36 --> 00:27:43
views of of biology and combine them

00:27:40 --> 00:27:44
together to hopefully give us additional

00:27:42 --> 00:27:47
insights yeah I mean that feels like the

00:27:43 --> 00:27:49
holy gril it's going to be AI human AI

00:27:46 --> 00:27:51
into human into another AI into another

00:27:48 --> 00:27:53
human for a while because of all the

00:27:50 --> 00:27:55
different stages we've talked about but

00:27:52 --> 00:27:58
yeah gradually be less and less human

00:27:54 --> 00:28:00
d more and more Ai and this could

00:27:57 --> 00:28:03
easily take 10 years before we start

00:27:59 --> 00:28:05
putting these things to the clinic but I

00:28:02 --> 00:28:07
think it will happen 10 years A lot can

00:28:04 --> 00:28:09
happen in 10 years and in that arc when

00:28:06 --> 00:28:11
we're on the other side of it I think

00:28:08 --> 00:28:13
the the dramatic thing is just all the

00:28:10 --> 00:28:15
kind of new worlds that we can explore

00:28:12 --> 00:28:16
and there's a proverbial moving gold

00:28:14 --> 00:28:19
post things of AI right now that we have

00:28:15 --> 00:28:21
gp4 We complain about how dumb it is

00:28:18 --> 00:28:22
right whereas two years ago we never

00:28:20 --> 00:28:24
would have predicted would have existed

00:28:21 --> 00:28:25
right so so these are high class

00:28:23 --> 00:28:27
problems yeah these are high class

00:28:24 --> 00:28:29
problems yeah San Bowen thank you so

00:28:26 --> 00:28:32
much for joining us yeah thanks for

00:28:28 --> 00:28:32
having us thanks for having us

00:28:33 --> 00:28:37
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
