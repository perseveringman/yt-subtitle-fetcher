---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "yoZNR83BqZs"
title: "a16z Podcast | The Genetics Of Drug Delivery"
video_url: "https://www.youtube.com/watch?v=yoZNR83BqZs"
thumbnail_url: "https://i.ytimg.com/vi/yoZNR83BqZs/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=yoZNR83BqZs"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:38:02.000Z"
upload_date: "2019-01-02"
duration_seconds: 851
duration_human: "14:11"
view_count: 92
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:08:49.656Z"
---

# a16z Podcast | The Genetics Of Drug Delivery

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=yoZNR83BqZs
- video_id: yoZNR83BqZs
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:38:02.000Z
- upload_date: 2019-01-02
- duration: 14:11
- view_count: 92
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

In this episode of the a16z Podcast introduced by Vijay Pande (based on a presentation at our summit event), Russ Altman, Stanford professor of bioengineering -- and former chairman of their Bioengineering Department -- takes us on a short but deep tour of the possibilities of genomics in drug discovery. Including how building a large bank of human genetic variations will change our understanding and optimization of drug response.

Altman (who also hosts his own radio show, "The Future of Everything" on SiriusXM and Stanford radio) describes how in much the same way we inherit our grandmother's eyes, or our great grandfather's ears, we also inherit a response to certain drugs: whether they work or not, what side effects we'll experience, how we react to them.

But it's not just genetics information that matters here; it's also molecular, cellular, tissue, and other data about the whole organism. By applying data science and bioinformatics on a more complete data "bank" like this, for the first time, we can see the whole range of actions and side effects -- as well as possible new uses -- that specific drugs will have on specific individuals.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
hi I'm Vijay Pandey journal' partner a

00:00:02 --> 00:00:08
16z this episode of these 16 podcasts is

00:00:05 --> 00:00:10
on the genetics of drug response this

00:00:07 --> 00:00:13
was recorded as part of our a six and

00:00:09 --> 00:00:14
Zita normal summit it gives a great deep

00:00:12 --> 00:00:16
dive by Stanford professor of

00:00:13 --> 00:00:18
bioengineering genetics and medicine

00:00:15 --> 00:00:20
Russ Altman and his work especially

00:00:17 --> 00:00:22
around building farmer GK be a professor

00:00:19 --> 00:00:23
Altman gives a window into how data

00:00:21 --> 00:00:25
science and buyer from addicts will

00:00:22 --> 00:00:27
change the future of drug discovery and

00:00:24 --> 00:00:29
rug response in this case it turns out

00:00:26 --> 00:00:30
hat you know when we think about

00:00:28 --> 00:00:33
inheritance we might think about

00:00:29 --> 00:00:34
inheriting your grandmother's eyes or

00:00:32 --> 00:00:36
your grandfather's ears but it turns out

00:00:33 --> 00:00:38
here's a lot more to Jack's than just

00:00:35 --> 00:00:40
hat how you respond to drugs will be

00:00:37 --> 00:00:42
similar to your parents as well moreover

00:00:39 --> 00:00:44
we can now see how building a large Bank

00:00:41 --> 00:00:45
of human genetics variations will

00:00:43 --> 00:00:47
transform our understanding on

00:00:44 --> 00:00:49
optimizing of drug discovery in spots

00:00:46 --> 00:00:52
both for understanding side-effects and

00:00:48 --> 00:00:53
toxicity as well as making better drugs

00:00:51 --> 00:00:55
and going after new indications

00:00:52 --> 00:00:57
professor Altman gives a really

00:00:54 --> 00:00:58
fantastic overview of the space as well

00:00:56 --> 00:01:00
as a lot of his own individual

00:00:57 --> 00:01:02
contributions thanks very much and and I

00:00:59 --> 00:01:03
would be Russ Altman from Stanford

00:01:01 --> 00:01:04
University so let me just tell you

00:01:02 --> 00:01:06
quickly that I get most of my funding

00:01:03 --> 00:01:08
from the National Institutes of Health I

00:01:05 --> 00:01:12
also have collaborations with Pfizer and

00:01:07 --> 00:01:15
Genentech and Carius and second-home and

00:01:11 --> 00:01:17
I am a founder of Personalis which does

00:01:14 --> 00:01:19
immuno Oncology so at Stanford my

00:01:16 --> 00:01:21
laboratory focuses on informatics

00:01:18 --> 00:01:23
biomedical informatics and data science

00:01:20 --> 00:01:25
for understanding drug response and

00:01:22 --> 00:01:28
optimizing it and so I think the reason

00:01:24 --> 00:01:30
I'm talking to you to you today is maybe

00:01:27 --> 00:01:32
that maybe some of the things that we're

00:01:29 --> 00:01:35
doing is form the basis of the next

00:01:31 --> 00:01:36
generation of pharmaceutical discovery

00:01:34 --> 00:01:37
and development and I have some

00:01:35 --> 00:01:39
confidence in that because we're working

00:01:36 --> 00:01:40
with these companies that I mentioned

00:01:38 --> 00:01:43
who are thinking about how they might

00:01:39 --> 00:01:45
change their way of doing things so I

00:01:42 --> 00:01:47
got into this because we're building a

00:01:44 --> 00:01:49
database called pharmgkb

00:01:46 --> 00:01:51
pharmacogenomics knowledge base we've

00:01:48 --> 00:01:53
been doing this for 16 years and

00:01:50 --> 00:01:55
pharmgkb is a simple idea it's a

00:01:52 --> 00:01:59
database or really the knowledge base of

00:01:54 --> 00:02:02
how human genetic variation impacts drug

00:01:58 --> 00:02:04
response so you might not think about

00:02:01 --> 00:02:06
his but your response to drugs was

00:02:03 --> 00:02:07
inherited from mom and dad and Grandma

00:02:05 --> 00:02:10
nd Grandpa just like your height and

00:02:06 --> 00:02:13
your hair color and your eye color but

00:02:09 --> 00:02:14
here's usually not a family lore about

00:02:12 --> 00:02:16
drug respond

00:02:13 --> 00:02:17
we all remember grandpa's big ears but

00:02:15 --> 00:02:19
we don't remember that grandpa had

00:02:16 --> 00:02:22
terrible side effects when he took Cody

00:02:18 --> 00:02:24
so we have to depend on the genome to

00:02:21 --> 00:02:26
make measurements and over the last 15

00:02:23 --> 00:02:29
16 years we've actually accumulated

00:02:25 --> 00:02:30
quite a large knowledge base of genetic

00:02:28 --> 00:02:32
variations in humans and how they can

00:02:30 --> 00:02:35
affect the response to drugs one quick

00:02:31 --> 00:02:37
example codeine codeine is in Thailand

00:02:34 --> 00:02:39
number three any of you have had a minor

00:02:36 --> 00:02:42
procedure may have gotten tylenol number

00:02:38 --> 00:02:44
three codeine is actually biologically

00:02:41 --> 00:02:45
inactive it goes through the liver this

00:02:43 --> 00:02:46
where your liver is I should say I'm

00:02:44 --> 00:02:48
an internist as well a general

00:02:45 --> 00:02:50
practitioner codeine goes to your liver

00:02:47 --> 00:02:52
and there's an enzyme in your liver that

00:02:49 --> 00:02:55
ransforms it into morphine and morphine

00:02:51 --> 00:02:58
is active very popular 7% of people of

00:02:54 --> 00:03:00
European descent don't have a version

00:02:57 --> 00:03:03
because of genetic differences in that

00:03:00 --> 00:03:05
enzyme they can't turn codeine into

00:03:02 --> 00:03:07
morphine so codeine is a placebo for

00:03:04 --> 00:03:09
them any pain relief they experience

00:03:06 --> 00:03:10
will be because they felt good about

00:03:08 --> 00:03:11
getting a prescription from the doctor

00:03:09 --> 00:03:13
and not because it was having any

00:03:10 --> 00:03:16
activity there are other people who turn

00:03:12 --> 00:03:19
coding into morphine super rapidly so

00:03:15 --> 00:03:22
they for example get 20 great minutes of

00:03:18 --> 00:03:24
morphine and then they have three hours

00:03:21 --> 00:03:27
until their next dose of continued pain

00:03:23 --> 00:03:29
so coding is a great example one of

00:03:26 --> 00:03:30
hundreds where knowing a little bit

00:03:28 --> 00:03:32
about your genetics will allow us in the

00:03:29 --> 00:03:34
future to implement this vision of an

00:03:31 --> 00:03:37
information system with knowledge of

00:03:33 --> 00:03:39
your genomes securely which can then

00:03:36 --> 00:03:41
help your your prescriber make decisions

00:03:38 --> 00:03:43
about the drugs that are most likely to

00:03:40 --> 00:03:45
work and a least likely to cause side

00:03:42 --> 00:03:46
ffects but that's not what I came to

00:03:44 --> 00:03:48
talk about what I came to talk about is

00:03:45 --> 00:03:50
because we're building the pharmgkb

00:03:47 --> 00:03:52
which is the genetics of drug response

00:03:49 --> 00:03:54
it's really critical that we understand

00:03:51 --> 00:03:56
rug response and actually even for

00:03:53 --> 00:03:58
drugs that are on the market and have

00:03:55 --> 00:04:01
been used for many years our ability to

00:03:57 --> 00:04:02
really describe what they actually do is

00:04:00 --> 00:04:05
very limited and it's not because

00:04:01 --> 00:04:07
anybody is is doing anything wrong per

00:04:04 --> 00:04:10
se but the companies when they develop

00:04:06 --> 00:04:11
these drugs have a very focused view of

00:04:09 --> 00:04:13
what they're hoping the drug will do and

00:04:10 --> 00:04:15
they design their trials to prove that

00:04:12 --> 00:04:17
it does or doesn't do that that if the

00:04:14 --> 00:04:18
tribe if the drug is on the market it

00:04:16 --> 00:04:21
means the trial was relatively

00:04:17 --> 00:04:23
successful and so they'll say this drug

00:04:20 --> 00:04:25
does X it treats hypertension it treats

00:04:22 --> 00:04:27
diabetes and that is true but they

00:04:24 --> 00:04:28
because of their focus they sometimes

00:04:26 --> 00:04:30
have

00:04:27 --> 00:04:31
winders to the other things that the

00:04:29 --> 00:04:34
drug might be doing which we might put

00:04:30 --> 00:04:36
into the bin of side-effects or other of

00:04:33 --> 00:04:38
idiosyncratic effects that are not

00:04:35 --> 00:04:39
understood but if I'm in charge of

00:04:37 --> 00:04:41
understanding the genetics of drug

00:04:38 --> 00:04:43
response I need a full picture of the

00:04:40 --> 00:04:45
drug despond so this project over the

00:04:42 --> 00:04:47
last 16 years has given me the excuse

00:04:44 --> 00:04:49
with my lab to really look at drug

00:04:46 --> 00:04:51
response at many levels to try to fully

00:04:48 --> 00:04:53
understand what drugs do and I'll try to

00:04:50 --> 00:04:54
argue with you that this is what the

00:04:52 --> 00:04:56
pharmaceutical companies of the future

00:04:53 --> 00:04:59
are going to have to do in order to

00:04:55 --> 00:05:00
ptimize their production and use of

00:04:58 --> 00:05:02
drugs so when I talk about drug

00:04:59 --> 00:05:04
responses they happen one of the things

00:05:01 --> 00:05:06
that makes this I wouldn't say easy but

00:05:03 --> 00:05:08
one of the fortunate situations is

00:05:05 --> 00:05:10
because it's a biological phenomenon

00:05:07 --> 00:05:12
drug response can be characterized at

00:05:09 --> 00:05:14
multiple levels I can talk about the

00:05:11 --> 00:05:16
molecular level how does this small

00:05:13 --> 00:05:19
molecule drug interact with its target

00:05:15 --> 00:05:21
physically it forms all kinds of

00:05:18 --> 00:05:23
chemical connections and if there's

00:05:20 --> 00:05:25
changes in this protein because of

00:05:22 --> 00:05:27
differences and genetics it might change

00:05:24 --> 00:05:29
how tightly it binds and other molecular

00:05:26 --> 00:05:32
properties so we have a big interest in

00:05:28 --> 00:05:34
looking at the low level molecular

00:05:31 --> 00:05:36
interactions to get the full set for

00:05:33 --> 00:05:39
example of molecules that might interact

00:05:35 --> 00:05:42
with our drug even some of the molecules

00:05:38 --> 00:05:43
or targets that were not anticipated by

00:05:41 --> 00:05:45
the people who develop the drug the

00:05:42 --> 00:05:47
second level we can think of is the

00:05:44 --> 00:05:49
cellular response whatever's happening

00:05:46 --> 00:05:51
at the molecular level it will lead to a

00:05:48 --> 00:05:52
sequence of signals that has the cell

00:05:50 --> 00:05:54
change its physiology the reason we're

00:05:51 --> 00:05:57
giving the drug is we want to shift the

00:05:53 --> 00:05:58
cells kind of if you think of it as a

00:05:56 --> 00:06:01
network you want to get it into a new

00:05:57 --> 00:06:03
basin of interactions that's more

00:06:00 --> 00:06:05
healthy than wherever it was before and

00:06:02 --> 00:06:07
so we're very interested in a fully

00:06:04 --> 00:06:10
understanding how a small molecule or

00:06:06 --> 00:06:12
large molecule drug changes the cellular

00:06:09 --> 00:06:14
milieu the expression of the genes which

00:06:11 --> 00:06:16
genes are turned on which genes are

00:06:13 --> 00:06:17
turned off how that cell is working but

00:06:15 --> 00:06:19
we're informatics people in data

00:06:16 --> 00:06:22
scientists so we're not limited to scale

00:06:18 --> 00:06:23
this is the one I should say this is the

00:06:21 --> 00:06:26
one advantage we have over experimental

00:06:22 --> 00:06:28
colleagues they're awesome but they tend

00:06:25 --> 00:06:30
to be I'm a cell person or I'm a

00:06:27 --> 00:06:33
molecule person we can go over all

00:06:29 --> 00:06:34
magnitudes of scale and just integrate

00:06:32 --> 00:06:36
the data and this is I think the

00:06:33 --> 00:06:38
important theme so the next level after

00:06:35 --> 00:06:41
cell is tissues and complete organisms

00:06:37 --> 00:06:41
like humans and so the electronic

00:06:40 --> 00:06:43
medical

00:06:40 --> 00:06:45
Eckerd and other and wearables which

00:06:42 --> 00:06:47
you're going to hear a lot about in in

00:06:44 --> 00:06:50
seven minutes and 50 seconds these are

00:06:47 --> 00:06:51
all unbelievably useful sources that we

00:06:49 --> 00:06:53
can use to characterize drug response

00:06:50 --> 00:06:54
fully and then we can get to the

00:06:52 --> 00:06:56
population level we can look at

00:06:53 --> 00:06:59
population level databases and say when

00:06:55 --> 00:07:00
we give a drug to a million people yes

00:06:58 --> 00:07:02
it does what we thought it would do

00:06:59 --> 00:07:04
based on the approval but it probably

00:07:01 --> 00:07:07
does lots of other things as well and we

00:07:03 --> 00:07:10
can mine public databases to figure out

00:07:06 --> 00:07:11
what's going on and so the themes in our

00:07:09 --> 00:07:13
lab everybody in the lab works at a

00:07:10 --> 00:07:15
different scale but the best projects

00:07:12 --> 00:07:16
are the ones that integrate these scales

00:07:14 --> 00:07:19
because a signal that you get at the

00:07:15 --> 00:07:21
molecular level may or may not be true

00:07:18 --> 00:07:22
there's noise in all data sets however

00:07:20 --> 00:07:25
if you're seeing a signal at the

00:07:21 --> 00:07:27
molecular level and at the electronic

00:07:24 --> 00:07:29
medical record level that gives you

00:07:26 --> 00:07:31
doodles more confidence that this might

00:07:28 --> 00:07:34
be a real signal and not just a weird

00:07:30 --> 00:07:37
artifact of the data and so this these

00:07:33 --> 00:07:39
levels of abstraction that we have in

00:07:36 --> 00:07:42
biology and therefore medicine are

00:07:38 --> 00:07:44
incredibly useful for rectifying the

00:07:41 --> 00:07:46
signals and this is what is not done

00:07:43 --> 00:07:48
typically again drug companies have been

00:07:45 --> 00:07:50
very successful they developed a lot of

00:07:47 --> 00:07:52
drugs and usually it's a fragmented look

00:07:50 --> 00:07:54
at the data where one unit will look at

00:07:51 --> 00:07:55
it from a molecular perspective and they

00:07:53 --> 00:07:58
of course they have of course they have

00:07:54 --> 00:07:59
mechanisms to try to integrate this but

00:07:57 --> 00:08:00
our argument would be you could do this

00:07:58 --> 00:08:02
very early so I just want to end by

00:07:59 --> 00:08:04
giving you some examples of some of the

00:08:01 --> 00:08:05
things we're doing to kind of make this

00:08:03 --> 00:08:07
real so three things that we'd like to

00:08:04 --> 00:08:09
do we want to fully understand what

00:08:06 --> 00:08:12
drugs do we want to understand drug

00:08:08 --> 00:08:14
interactions and we want to understand

00:08:11 --> 00:08:16
new uses for old drugs and I just want

00:08:13 --> 00:08:18
o tell you a couple of stories so

00:08:15 --> 00:08:20
understanding the full effects of drugs

00:08:17 --> 00:08:22
we have published a couple of papers

00:08:19 --> 00:08:24
where we looked at FDA databases of

00:08:21 --> 00:08:27
adverse events reported by patients and

00:08:23 --> 00:08:29
physicians and companies and we were

00:08:26 --> 00:08:30
able to replicate most of the side

00:08:28 --> 00:08:31
ffects that were listed in the drug

00:08:29 --> 00:08:34
label you know the drug label that

00:08:30 --> 00:08:36
little piece of paper that seems to be

00:08:33 --> 00:08:38
like infinitely expandable and it's

00:08:35 --> 00:08:40
actually a puzzle and how many times you

00:08:37 --> 00:08:43
can fold a piece of paper it's the world

00:08:39 --> 00:08:45
record holder typically we were able to

00:08:42 --> 00:08:47
find replicate what was on the drug

00:08:44 --> 00:08:50
label but using the exact same methods

00:08:46 --> 00:08:53
we were able to find tens or hundreds of

00:08:49 --> 00:08:54
extra side effects per drug with very

00:08:52 --> 00:08:56
high confidence from

00:08:53 --> 00:08:59
looking at a combination of FDA records

00:08:55 --> 00:09:00
and electronic medical records that was

00:08:58 --> 00:09:02
great for us because now we have a much

00:08:59 --> 00:09:05
expanded view of what a drug actually

00:09:01 --> 00:09:07
does and drugs in that family we can

00:09:05 --> 00:09:09
tell if it's a class effect all the

00:09:06 --> 00:09:11
drugs in this family have the same set

00:09:08 --> 00:09:13
of side effects versus a drug specific

00:09:10 --> 00:09:15
effect which is critical for

00:09:12 --> 00:09:17
differentiating in a market and things

00:09:14 --> 00:09:19
like that so that's a little story about

00:09:16 --> 00:09:21
how we look at getting a better sense of

00:09:18 --> 00:09:23
all the side effects of drugs drug

00:09:20 --> 00:09:25
interactions are incredibly important

00:09:22 --> 00:09:27
he average person who's above 70 and

00:09:24 --> 00:09:30
who's on any medications is often on

00:09:26 --> 00:09:32
seven to ten medications and whereas all

00:09:29 --> 00:09:34
the drugs are approved based on their

00:09:31 --> 00:09:37
individual action there's typically not

00:09:33 --> 00:09:40
a careful look at what happens when you

00:09:36 --> 00:09:42
have pairs triplets quadruplets of drugs

00:09:39 --> 00:09:44
all potentially hitting the same

00:09:41 --> 00:09:47
pathways at the molecular cellular etc

00:09:43 --> 00:09:49
level so we've done some work looking at

00:09:46 --> 00:09:51
his and in one story that I'll just

00:09:48 --> 00:09:54
summarize very briefly we looked for

00:09:50 --> 00:09:56
drugs that might cause glucose in combat

00:09:53 --> 00:10:00
glucose increases diabetes if you will

00:09:55 --> 00:10:02
in combination where individually they

00:09:59 --> 00:10:04
did nothing so we had very strong signal

00:10:01 --> 00:10:06
that the drugs when taken alone had no

00:10:03 --> 00:10:09
effect on glucose in the blood but when

00:10:05 --> 00:10:11
people took them together we saw a huge

00:10:08 --> 00:10:13
bump and in fact in diabetics and even

00:10:10 --> 00:10:15
huger bump in the serum glucose this was

00:10:12 --> 00:10:17
not reported it wasn't on the drug

00:10:14 --> 00:10:20
labels at all and it was because we took

00:10:16 --> 00:10:21
data sets from multiple levels in fact

00:10:19 --> 00:10:23
in this case we looked at population

00:10:20 --> 00:10:25
data we looked at electronic medical

00:10:22 --> 00:10:28
record data and we looked at organism

00:10:24 --> 00:10:31
level data in in mice combined these all

00:10:27 --> 00:10:32
and we found a very strong signal with

00:10:30 --> 00:10:35
associated with the use of the two drugs

00:10:31 --> 00:10:37
together this is paroxetine paxil an

00:10:34 --> 00:10:40
tidepressant and pravastatin a

00:10:36 --> 00:10:43
cholesterol medication not associated

00:10:39 --> 00:10:45
typically with glucose changes but with

00:10:42 --> 00:10:47
a very clear signal we actually took

00:10:44 --> 00:10:50
that information and went to search logs

00:10:46 --> 00:10:52
in a collaboration with Microsoft we

00:10:49 --> 00:10:53
looked at what people who were on well

00:10:51 --> 00:10:54
we don't know if they were on these

00:10:52 --> 00:10:58
drugs we just looked at search logs and

00:10:53 --> 00:11:00
said how often do people type in these

00:10:57 --> 00:11:01
two drugs and words that might be

00:10:59 --> 00:11:04
associated with the symptoms of

00:11:00 --> 00:11:06
hyperglycemia or high glucose and we

00:11:03 --> 00:11:07
compared that to people who just typed

00:11:05 --> 00:11:10
in one drug and some words

00:11:06 --> 00:11:11
or the other drug and some words and in

00:11:09 --> 00:11:14
a paper that we published we showed a

00:11:10 --> 00:11:17
remarkable increase in the occurrence of

00:11:13 --> 00:11:19
words associated with hyperglycemia when

00:11:16 --> 00:11:22
they had also typed in the two drugs

00:11:18 --> 00:11:25
together so this opens the the obvious

00:11:21 --> 00:11:28
in retrospect opportunity of doing

00:11:24 --> 00:11:31
direct surveillance of people patients

00:11:27 --> 00:11:33
by looking at social media and so this

00:11:30 --> 00:11:35
was web searches but I have colleagues

00:11:32 --> 00:11:37
who are looking at Twitter feeds turns

00:11:34 --> 00:11:38
out people tweet their drug response I

00:11:36 --> 00:11:41
don't know why they tweet their drug

00:11:37 --> 00:11:42
response but they do and you can get

00:11:40 --> 00:11:44
ens of thousands of tweets from the

00:11:41 --> 00:11:46
Twitter firehose and you can

00:11:44 --> 00:11:48
start to put together a list of side

00:11:45 --> 00:11:51
ffects it's a huge challenge the big

00:11:47 --> 00:11:53
issue there is taking the words that are

00:11:50 --> 00:11:55
used in texting and mapping them to

00:11:52 --> 00:11:57
medical concepts because as you could

00:11:54 --> 00:11:59
imagine with 140 characters there's a

00:11:56 --> 00:12:00
lot of abbreviations and there's a lot

00:11:58 --> 00:12:02
of slang there were also people by the

00:11:59 --> 00:12:04
way looking at Facebook and there are

00:12:01 --> 00:12:05
the patient portals where patients get

00:12:03 --> 00:12:08
ogether because they're part of a

00:12:04 --> 00:12:10
disease group to share experiences all

00:12:07 --> 00:12:12
of these also it's clear I think to most

00:12:09 --> 00:12:15
pharmaceuticals have to be sources of

00:12:11 --> 00:12:16
data both for understanding the actions

00:12:14 --> 00:12:17
of these drugs but also understanding

00:12:15 --> 00:12:19
the patient preferences about which

00:12:17 --> 00:12:21
symptoms of these diseases they're

00:12:18 --> 00:12:23
ally most interested in getting and

00:12:20 --> 00:12:26
getting treated and then finally the

00:12:22 --> 00:12:28
third thing is getting new uses for old

00:12:25 --> 00:12:29
rugs this is a very exciting idea maybe

00:12:27 --> 00:12:31
many of you have heard about it's called

00:12:28 --> 00:12:34
repurposing if you're gonna repurpose

00:12:30 --> 00:12:35
her drug though all the information in

00:12:33 --> 00:12:37
the drug label that was focused on

00:12:34 --> 00:12:39
getting you approved for one indication

00:12:36 --> 00:12:42
is not going to be where you're going to

00:12:38 --> 00:12:43
get the insight about the new uses

00:12:41 --> 00:12:45
you're gonna get the insight about the

00:12:42 --> 00:12:47
new uses from the side-effects which

00:12:44 --> 00:12:49
I've already discussed from the

00:12:46 --> 00:12:52
interactions with other drugs those are

00:12:48 --> 00:12:54
the huge clues that tell you in addition

00:12:51 --> 00:12:56
to this one approved pathway and and

00:12:53 --> 00:12:58
effect there are these other parts of

00:12:55 --> 00:13:00
the biology that are being tickled if

00:12:57 --> 00:13:02
you will by the drug and there's an

00:12:59 --> 00:13:03
opportunity to chase that down and so in

00:13:01 --> 00:13:06
the setting of cancer we've published

00:13:02 --> 00:13:09
some papers about cancer drugs that are

00:13:05 --> 00:13:10
approved for cancer X but when we look

00:13:08 --> 00:13:12
at the genome and when we look at the

00:13:09 --> 00:13:14
binding patterns of that those molecules

00:13:11 --> 00:13:17
we have very strong predictions that

00:13:13 --> 00:13:20
hey will also be useful in cancer why

00:13:16 --> 00:13:21
not not an approved use of the drug but

00:13:19 --> 00:13:23
we can come up with

00:13:20 --> 00:13:25
pretty compelling evidence that it would

00:13:22 --> 00:13:26
at least be enough to start a trial and

00:13:24 --> 00:13:29
to evaluate if this might really work

00:13:25 --> 00:13:31
and in some cases might be enough for a

00:13:28 --> 00:13:33
physician to do an off-label use based

00:13:30 --> 00:13:34
on their judgment and their assessment

00:13:32 --> 00:13:37
hat this is going to be safe and worth

00:13:33 --> 00:13:39
a try so so in the end I think I'm very

00:13:36 --> 00:13:41
optimistic that the discovery and

00:13:38 --> 00:13:44
optimization of drug use in the future

00:13:40 --> 00:13:45
is going to benefit from data science

00:13:43 --> 00:13:47
because of the integration of these

00:13:44 --> 00:13:50
streams I already had that theme where

00:13:46 --> 00:13:52
multiple sources of data when they can

00:13:49 --> 00:13:55
cut when they have a confluence and when

00:13:51 --> 00:13:57
they agree are incredibly powerful and I

00:13:54 --> 00:13:58
think this is the future of how we're

00:13:56 --> 00:14:01
going to think about drug discovery and

00:13:57 --> 00:14:03
how we're going to follow over time the

00:14:00 --> 00:14:04
actions of drugs as we exposed patients

00:14:02 --> 00:14:07
to them and figure out what works and

00:14:03 --> 00:14:12
what doesn't so thanks very much

00:14:06 --> 00:14:12
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
