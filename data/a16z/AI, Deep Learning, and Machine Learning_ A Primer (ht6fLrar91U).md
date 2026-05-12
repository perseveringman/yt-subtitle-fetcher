---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "ht6fLrar91U"
title: "AI, Deep Learning, and Machine Learning: A Primer"
video_url: "https://www.youtube.com/watch?v=ht6fLrar91U"
thumbnail_url: "https://i.ytimg.com/vi/ht6fLrar91U/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=ht6fLrar91U"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-15T23:26:39.000Z"
upload_date: "2017-07-15"
duration_seconds: 2814
duration_human: "46:54"
view_count: 56926
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:26:52.351Z"
---

# AI, Deep Learning, and Machine Learning: A Primer

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=ht6fLrar91U
- video_id: ht6fLrar91U
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-15T23:26:39.000Z
- upload_date: 2017-07-15
- duration: 46:54
- view_count: 56926
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: #AI, #artificial intelligence, #machine learning, #GPUs, #neural nets, #machine intelligence
- categories: Science & Technology

## Description

"One person, in a literal garage, building a self-driving car." That happened in 2015. Now to put that fact in context, compare this to 2004, when DARPA sponsored the very first driverless car Grand Challenge. Of the 20 entries they received then, the winning entry went 7.2 miles; in 2007, in the Urban Challenge, the winning entries went 60 miles under city-like constraints.
Things are clearly progressing rapidly when it comes to machine intelligence. But how did we get here, after not one but multiple "A.I. winters"? What's the breakthrough? And why is Silicon Valley buzzing about artificial intelligence again?
From types of machine intelligence to a tour of algorithms, a16z Deal and Research team head Frank Chen walks us through the basics (and beyond) of AI and deep learning in this slide presentation.

***
The views expressed here are those of the individual AH Capital Management, L.L.C. (“a16z”) personnel quoted and are not the views of a16z or its affiliates. Certain information contained in here has been obtained from third-party sources, including from portfolio companies of funds managed by a16z. While taken from sources believed to be reliable, a16z has not independently verified such information and makes no representations about the enduring accuracy of the information or its appropriateness for a given situation.
 
This content is provided for informational purposes only, and should not be relied upon as legal, business, investment, or tax advice. You should consult your own advisers as to those matters. References to any securities or digital assets are for illustrative purposes only, and do not constitute an investment recommendation or offer to provide investment advisory services. Furthermore, this content is not directed at nor intended for use by any investors or prospective investors, and may not under any circumstances be relied upon when making a decision to invest in any fund managed by a16z. (An offering to invest in an a16z fund will be made only by the private placement memorandum, subscription agreement, and other relevant documentation of any such fund and should be read in their entirety.) Any investments or portfolio companies mentioned, referred to, or described are not representative of all investments in vehicles managed by a16z, and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. A list of investments made by funds managed by Andreessen Horowitz (excluding investments and certain publicly traded cryptocurrencies/ digital assets for which the issuer has not provided permission for a16z to disclose publicly) is available at https://a16z.com/investments/.

Charts and graphs provided within are for informational purposes solely and should not be relied upon when making any investment decision. Past performance is not indicative of future results. The content speaks only as of the date indicated. Any projections, estimates, forecasts, targets, prospects, and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others. Please see https://a16z.com/disclosures for additional important information.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:04 --> 00:00:08
hi my name is Frank Chen I'm a partner

00:00:05 --> 00:00:10
at Andre and Horowitz and what we want

00:00:07 --> 00:00:12
o do in the next half hour is explain

00:00:09 --> 00:00:14
one of the biggest technology shifts

00:00:11 --> 00:00:16
that's happening in our industry the

00:00:13 --> 00:00:18
firm is now coming up to its 7th year

00:00:15 --> 00:00:20
anniversary we've been busy investing

00:00:17 --> 00:00:23
into some of the biggest technology

00:00:19 --> 00:00:26
platform shifts in our time so in that

00:00:22 --> 00:00:29
short time period mobile and Cloud were

00:00:25 --> 00:00:31
two dominant technology platform shifts

00:00:28 --> 00:00:33
that have created tons of great

00:00:30 --> 00:00:35
opportunities for us we think artificial

00:00:32 --> 00:00:37
intelligence and in particular deep

00:00:34 --> 00:00:40
learning could be as profound and maybe

00:00:36 --> 00:00:42
ven bigger so we wanted to share why

00:00:39 --> 00:00:45
that is but before we can understand why

00:00:42 --> 00:00:47
that is we understand what it is what is

00:00:44 --> 00:00:50
artificial intelligence what is machine

00:00:46 --> 00:00:52
learning and what is deep learning so

00:00:49 --> 00:00:54
let's get right into it silicon valle's

00:00:51 --> 00:00:56
buzzing all of a sudden seemingly out of

00:00:53 --> 00:00:59
nowhere artificial intelligence is

00:00:55 --> 00:01:01
dominating the R&D agendas of the most

00:00:58 --> 00:01:04
important companies in Silicon Valley

00:01:00 --> 00:01:08
and outside of Silicon Valley looking at

00:01:03 --> 00:01:11
Sundar and Mark Zuckerberg at Facebook

00:01:07 --> 00:01:13
and Robin Lee the biggest CEOs have all

00:01:10 --> 00:01:15
of a sudden said machine intelligence

00:01:12 --> 00:01:17
artificial intelligence deep learning

00:01:14 --> 00:01:21
are the heart of what we're doing it's

00:01:16 --> 00:01:23
guiding my R&D agenda Sundar has said we

00:01:20 --> 00:01:25
nt from a search first company to a

00:01:22 --> 00:01:27
mobile first company now we're in AI

00:01:24 --> 00:01:29
first company how in the world did this

00:01:26 --> 00:01:32
happen and what is the shift that's

00:01:28 --> 00:01:34
happening so to understand the history

00:01:31 --> 00:01:36
we have to go back in time luckily the

00:01:33 --> 00:01:39
history of artificial intelligence has a

00:01:35 --> 00:01:41
clear birthday in the summer of

00:01:38 --> 00:01:43
1956 so it turns out people have been

00:01:40 --> 00:01:45
dreaming about creating machines that

00:01:42 --> 00:01:48
could act like humans or exhibit human

00:01:44 --> 00:01:50
intelligence so the Greeks had statues

00:01:47 --> 00:01:53
that would come to life most ancient

00:01:49 --> 00:01:56
civilizations the Chinese the Egyptians

00:01:52 --> 00:01:58
created mechanically driven automatons

00:01:55 --> 00:02:01
that would behave like humans in fiction

00:01:57 --> 00:02:04
we have Mary Shell's Frankenstein all of

00:02:00 --> 00:02:06
this feeds the human impulse that maybe

00:02:03 --> 00:02:09
as humans we can create things that

00:02:05 --> 00:02:12
behave like humans but for the purposes

00:02:08 --> 00:02:15
of artificial intelligence the birthday

00:02:11 --> 00:02:17
can be marked in the summer of 1956 when

00:02:14 --> 00:02:20
a group of researchers came together at

00:02:16 --> 00:02:23
Dartmouth to kick off a series of

00:02:19 --> 00:02:26
research projects whose explicit goal

00:02:22 --> 00:02:29
was to program computers to behave like

00:02:25 --> 00:02:32
humans so we had Marvin Minsky John

00:02:28 --> 00:02:34
McCarthy Claud Shannon Nathaniel

00:02:31 --> 00:02:37
Rochester all come together this summer

00:02:33 --> 00:02:39
in Dartmouth and say let's do research

00:02:36 --> 00:02:42
and the aim of the research is creating

00:02:38 --> 00:02:45
an artificially intelligent being so

00:02:41 --> 00:02:47
from the point of view of the academic

00:02:44 --> 00:02:49
discipline which is a subdiscipline of

00:02:46 --> 00:02:51
computer science this was the birthday

00:02:48 --> 00:02:54
of artificial intelligence summer of

00:02:50 --> 00:02:56
1956 so what did they set out to do the

00:02:53 --> 00:02:58
research agenda basically said computers

00:02:55 --> 00:02:59
are sophisticated people are

00:02:57 --> 00:03:01
sophisticated let's see if we can

00:02:58 --> 00:03:03
program computers to do the the kinds of

00:03:00 --> 00:03:06
sophisticated mental tasks that people

00:03:02 --> 00:03:08
can do so let's see if we can teach

00:03:05 --> 00:03:11
computers to reason in other words to do

00:03:07 --> 00:03:14
things like play chess or solve algebra

00:03:10 --> 00:03:17
word problems or prove geometry theorems

00:03:13 --> 00:03:19
or diagnose diseases so all of these are

00:03:16 --> 00:03:22
asoning tasks where you're presented

00:03:18 --> 00:03:25
with a problem and you reason your way

00:03:21 --> 00:03:27
to the answer here you see deep blue

00:03:24 --> 00:03:30
playing chess and this was the

00:03:26 --> 00:03:31
prototypical reasoning system that we

00:03:29 --> 00:03:33
tried to Des

00:03:30 --> 00:03:35
design another thing that we tried to

00:03:32 --> 00:03:38
teach computers to do was to represent

00:03:35 --> 00:03:41
knowledge about the real world so in

00:03:37 --> 00:03:43
order for conversations to really

00:03:40 --> 00:03:45
understand and interact with people they

00:03:42 --> 00:03:48
would need to understand and interact

00:03:44 --> 00:03:51
with the real world what are objects

00:03:47 --> 00:03:52
what are people what's language all of

00:03:50 --> 00:03:55
these things would need to be programmed

00:03:51 --> 00:03:57
into a computer and in fact specific

00:03:54 --> 00:03:59
omputer languages like lisp got

00:03:56 --> 00:04:02
invented for this exact purpose what you

00:03:58 --> 00:04:04
see here is a picture of John McCarthy

00:04:01 --> 00:04:07
inventor of lisp trying to teach

00:04:03 --> 00:04:10
computers about things in the

00:04:07 --> 00:04:13
world the third thing that we would need

00:04:09 --> 00:04:15
to teach computers to do is understand

00:04:12 --> 00:04:17
how to plan and navigate around the

00:04:14 --> 00:04:20
world that we live in so how do we get

00:04:16 --> 00:04:22
from place a to place B how do we

00:04:19 --> 00:04:24
understand where doors are and what

00:04:22 --> 00:04:26
paths are and where it's safe to go and

00:04:23 --> 00:04:28
where it's not safe to go if there are

00:04:25 --> 00:04:30
multiple ways to get to a destination

00:04:27 --> 00:04:32
how do we choose so these are all

00:04:29 --> 00:04:34
planning and navigation tasks and we

00:04:31 --> 00:04:37
would have to teach computers how to

00:04:33 --> 00:04:40
plan and navigate here you see a picture

00:04:36 --> 00:04:44
of the first self driving robot if you

00:04:39 --> 00:04:47
will invented at SRI in Meno Park in the

00:04:43 --> 00:04:49
mid1 1960s you can see a set of cameras

00:04:46 --> 00:04:52
and wheels and this was the very dawn of

00:04:48 --> 00:04:54
trying to program computers to plan and

00:04:51 --> 00:04:56
navigate around the real

00:04:53 --> 00:04:58
world another thing that we would want

00:04:55 --> 00:05:00
o teach computers how to do is how to

00:04:57 --> 00:05:03
speak language how to understand

00:04:59 --> 00:05:06
language how to create sentences how to

00:05:02 --> 00:05:08
understand the context of sentences you

00:05:05 --> 00:05:09
and I use language every day to convey

00:05:07 --> 00:05:11
thoughts and feelings and observations

00:05:08 --> 00:05:14
around the world about the world in an

00:05:10 --> 00:05:17
incredibly subtle and Powerful way the

00:05:13 --> 00:05:19
goal is let's teach computers as much of

00:05:16 --> 00:05:21
that as we can this is a picture of one

00:05:18 --> 00:05:24
of the very first natural language

00:05:20 --> 00:05:25
processing experiments run at Georgetown

00:05:23 --> 00:05:27
and I'll have a little more to say about

00:05:24 --> 00:05:29
what's going on in this picture but it

00:05:26 --> 00:05:31
was an IBM Mainframe and we were trying

00:05:28 --> 00:05:33
to translate English Russian and Russian

00:05:30 --> 00:05:36
to English and I'll tell you a little

00:05:32 --> 00:05:38
bit more about that later in the

00:05:35 --> 00:05:40
podcast so another thing that we would

00:05:37 --> 00:05:42
need to teach computers is perception

00:05:39 --> 00:05:44
how do we see things in the world how do

00:05:41 --> 00:05:46
we hear things in the world how do we

00:05:43 --> 00:05:48
feel things in the world in order to get

00:05:45 --> 00:05:50
o human intelligence the team at

00:05:47 --> 00:05:53
Dartmouth surmised we would need to

00:05:49 --> 00:05:55
teach computers how to perceive things

00:05:52 --> 00:05:58
through Sight and Sound and touch and

00:05:54 --> 00:06:01
smell the most practical problem to

00:05:57 --> 00:06:03
solve first we thought was sight so here

00:06:00 --> 00:06:06
you see a picture of Marvin Minsky at

00:06:02 --> 00:06:08
his lab in MIT you see this robot get up

00:06:05 --> 00:06:10
with a bunch of blocks in cameras and

00:06:07 --> 00:06:12
this was the very first set of

00:06:09 --> 00:06:14
experiments that we would run to see if

00:06:11 --> 00:06:16
we could feed video input through

00:06:13 --> 00:06:18
cameras into computers and have them

00:06:15 --> 00:06:20
understand aha here are a bunch of

00:06:17 --> 00:06:22
blocks and cubes and the big block is

00:06:19 --> 00:06:25
itting on the little block and I can

00:06:21 --> 00:06:28
move a pyramid onto the top of the big

00:06:25 --> 00:06:30
block and the Hope was if we could teach

00:06:27 --> 00:06:33
computers all of these discret parts of

00:06:29 --> 00:06:35
human intelligence so representing

00:06:32 --> 00:06:39
knowledge about the real world speaking

00:06:34 --> 00:06:41
language reasoning logically that a sort

00:06:38 --> 00:06:43
of generalized intelligence would emerge

00:06:40 --> 00:06:46
from this so we would get a whole bunch

00:06:42 --> 00:06:48
of human behavior that wasn't explicitly

00:06:45 --> 00:06:52
programmed so things like emotional

00:06:47 --> 00:06:54
intelligence or Intuition or creativity

00:06:51 --> 00:06:56
and so the Hope was that eventually out

00:06:53 --> 00:06:59
of building all of these building blocks

00:06:55 --> 00:07:01
that we would get to a fully autonomous

00:06:58 --> 00:07:05
thinking interacting robot kind of like

00:07:00 --> 00:07:06
C3PO in Star Wars which is kind of

00:07:04 --> 00:07:09
indistinguishable from a human

00:07:05 --> 00:07:12
intelligence you can move he even has

00:07:08 --> 00:07:14
neurotic quirks so the Hope was that if

00:07:11 --> 00:07:16
we taught computers all the basics that

00:07:13 --> 00:07:19
generalized human intelligence would

00:07:15 --> 00:07:22
emerge so that was the goal hugely

00:07:18 --> 00:07:23
ambitious goal in the summer of 1956 you

00:07:21 --> 00:07:26
got to remember the state-of-the-art

00:07:22 --> 00:07:28
computer those days was a Mainframe

00:07:25 --> 00:07:30
using Punch Cards as the interface and

00:07:27 --> 00:07:33
so these guys who came together in 1956

00:07:29 --> 00:07:36
six were really Visionary so what

00:07:32 --> 00:07:39
happened so what happened was a series

00:07:35 --> 00:07:41
of boom and bust Cycles where people

00:07:38 --> 00:07:43
would produce this super compelling demo

00:07:40 --> 00:07:47
and it would attract a lot more research

00:07:43 --> 00:07:50
a lot more funding startups and then

00:07:46 --> 00:07:52
those things would run their course and

00:07:49 --> 00:07:55
they'd bust you'd get to some deep

00:07:51 --> 00:07:56
disillusionment about how realistic that

00:07:54 --> 00:07:58
we could make an artificial intelligence

00:07:55 --> 00:08:00
and these boom bus Cycles didn't happen

00:07:57 --> 00:08:01
just once they happened six or seven

00:07:59 --> 00:08:03
times I'm going to take you through a

00:08:00 --> 00:08:05
couple examples just to show you why

00:08:02 --> 00:08:08
people got so excited and then why

00:08:05 --> 00:08:10
people got so disillusioned and in fact

00:08:07 --> 00:08:13
his sort of Boom bus cycle has a name

00:08:09 --> 00:08:14
all of its own they're called AI Winters

00:08:12 --> 00:08:16
uh and you got to remember this happened

00:08:13 --> 00:08:19
in the 1950s started happening in the

00:08:15 --> 00:08:21
1950s and so AI Winters were explicitly

00:08:18 --> 00:08:23
a descendant of nuclear Winters which is

00:08:20 --> 00:08:25
Gee after a nuclear attack nobody can

00:08:22 --> 00:08:27
live for decades in the spot where the

00:08:24 --> 00:08:31
radiation is still strong and this was

00:08:26 --> 00:08:32
the direct analogy which is wow AI resch

00:08:30 --> 00:08:34
is so screwed up that we're never going

00:08:31 --> 00:08:36
to get any more progress so funding

00:08:33 --> 00:08:38
dries up for years and years so let me

00:08:35 --> 00:08:40
take you through some of these boom and

00:08:37 --> 00:08:42
bus Cycles so the first boom and bus

00:08:39 --> 00:08:44
cycle happened around M machine

00:08:41 --> 00:08:47
translation I showed you the picture

00:08:43 --> 00:08:48
arlier of the Mainframe let me put this

00:08:46 --> 00:08:51
in context it's

00:08:48 --> 00:08:55
1954 and we want to translate

00:08:50 --> 00:08:57
desperately from English to Russian so

00:08:54 --> 00:08:59
this is the height of the Cold War we're

00:08:56 --> 00:09:00
coming out of the Korean War we're

00:08:58 --> 00:09:03
headed straight for the Cuban Missile

00:08:59 --> 00:09:05
crisis not a lot of native Russian

00:09:02 --> 00:09:07
speakers living in the country and so

00:09:04 --> 00:09:09
wouldn't it be awesome if machines could

00:09:06 --> 00:09:11
translate from English to Russian and

00:09:08 --> 00:09:14
Russian to English and so this was

00:09:10 --> 00:09:16
exactly the experiment we ran in 1954

00:09:13 --> 00:09:18
researchers at Georgetown University and

00:09:15 --> 00:09:21
IBM demonstrated the very first system

00:09:17 --> 00:09:23
that was capable of doing this they took

00:09:20 --> 00:09:27
60 Russian sentences and they translated

00:09:22 --> 00:09:29
them into English and the demo went

00:09:26 --> 00:09:32
fantastically for the 60 sentences they

00:09:28 --> 00:09:34
chose the system did great it was

00:09:31 --> 00:09:36
literally a punch card demo so a punch

00:09:33 --> 00:09:39
card operator would punch the Russian

00:09:35 --> 00:09:40
sentences into the decks the computer

00:09:38 --> 00:09:42
would process them out would come a

00:09:39 --> 00:09:44
separate set of punch cards with the

00:09:41 --> 00:09:46
English translation and for the 60

00:09:43 --> 00:09:48
sentences they chose it was credible so

00:09:45 --> 00:09:51
this set off a whole generation of

00:09:47 --> 00:09:54
research and corporate R&D spending

00:09:50 --> 00:09:56
trying to get to generalized translation

00:09:53 --> 00:09:58
systems now it turns out this is an

00:09:55 --> 00:10:00
incredibly hard problem and let me give

00:09:57 --> 00:10:02
you the textbook example so imagine like

00:09:59 --> 00:10:04
you took a normal English sentence this

00:10:01 --> 00:10:06
one happens to come out of the New

00:10:03 --> 00:10:09
Testament the sentence is the spirit is

00:10:06 --> 00:10:11
willing but the flesh is weak a lot of

00:10:08 --> 00:10:12
these early systems you would feed that

00:10:10 --> 00:10:14
sentence into the englishrussian

00:10:11 --> 00:10:16
translator and then just to verify that

00:10:14 --> 00:10:18
you got a good translation you would do

00:10:15 --> 00:10:21
the reverse feed it into the Russian

00:10:17 --> 00:10:23
English translator out of these systems

00:10:20 --> 00:10:25
with that English sentence the spirit is

00:10:22 --> 00:10:26
willing but the flesh is weak here's a

00:10:24 --> 00:10:30
very typical example of what you would

00:10:26 --> 00:10:32
get the whiskey is strong but the meat

00:10:29 --> 00:10:35
is is rotten and if you think about it

00:10:31 --> 00:10:37
for a second it's so obvious why that

00:10:34 --> 00:10:40
ranslation happened which is that's a

00:10:36 --> 00:10:42
pretty good word byword translation and

00:10:39 --> 00:10:43
it's also obvious to a native English

00:10:41 --> 00:10:45
speaker that the translation is

00:10:42 --> 00:10:47
completely wrong it didn't capture the

00:10:44 --> 00:10:49
meaning what a computer scientist would

00:10:47 --> 00:10:51
call the semantics of the sentence at

00:10:48 --> 00:10:53
all it did more of what a computer

00:10:50 --> 00:10:55
scientist would call a syntactic

00:10:52 --> 00:10:56
translation a word for word translation

00:10:54 --> 00:10:59
and for word for word translation it's

00:10:55 --> 00:11:00
not bad but if you had enough of these

00:10:58 --> 00:11:04
rrors in sentences you would completely

00:10:59 --> 00:11:05
garble the sense of a body of text and

00:11:03 --> 00:11:07
this is what led to the first AI winter

00:11:04 --> 00:11:09
which is the disillusionment around

00:11:06 --> 00:11:11
being able to capture what you really

00:11:08 --> 00:11:13
mean as opposed to word by-word

00:11:10 --> 00:11:14
translations people were very

00:11:12 --> 00:11:16
discouraged about the prospect of

00:11:13 --> 00:11:18
computers being able to do this because

00:11:15 --> 00:11:19
you'd have to understand context you'd

00:11:17 --> 00:11:21
have to understand idioms you'd have to

00:11:18 --> 00:11:23
understand all these things that aren't

00:11:20 --> 00:11:26
in the words of the sentence and this

00:11:22 --> 00:11:28
led to the first AI winter in fact a

00:11:25 --> 00:11:31
federal committee called the automated

00:11:27 --> 00:11:33
language processing advisor committee

00:11:30 --> 00:11:35
said that machine translation progress

00:11:32 --> 00:11:36
was so slow that we really shouldn't

00:11:34 --> 00:11:39
spend more money it would be spending

00:11:35 --> 00:11:42
ood money after bad let's just stop so

00:11:38 --> 00:11:44
here was the first AI

00:11:41 --> 00:11:45
winter when that AI winter thaw

00:11:43 --> 00:11:47
researchers tried a dramatically

00:11:45 --> 00:11:50
different approach so if we couldn't

00:11:46 --> 00:11:53
ranslate any language to any language

00:11:49 --> 00:11:55
let's try to constrain the language into

00:11:52 --> 00:11:57
a very specific domain and so what

00:11:54 --> 00:12:00
people started doing research around was

00:11:56 --> 00:12:03
called microw worlds let's constrain the

00:11:59 --> 00:12:05
real world into a tiny Micro World and

00:12:02 --> 00:12:07
let's see if we can make more progress

00:12:04 --> 00:12:09
understanding language in that context

00:12:06 --> 00:12:11
so a couple examples I showed you the

00:12:08 --> 00:12:13
picture of Marvin Minsky with his

00:12:10 --> 00:12:15
pyramids uh and the camera system that

00:12:12 --> 00:12:17
would look at the blocks so that was a

00:12:14 --> 00:12:19
Micro World so in that Micro World the

00:12:17 --> 00:12:21
goal was to program the system to

00:12:18 --> 00:12:25
understand sentences like pick up a

00:12:20 --> 00:12:28
block pick up a Blue Block put the Blue

00:12:24 --> 00:12:30
Block on top of The Red Pyramid and the

00:12:27 --> 00:12:32
system would have to figure out what is

00:12:29 --> 00:12:34
that possible can you put a block on a

00:12:31 --> 00:12:36
pyramid well GE a pyramid has a pointy

00:12:33 --> 00:12:37
tip so you can't actually put the block

00:12:35 --> 00:12:39
on top of the pyramid so the system

00:12:36 --> 00:12:42
would have to respond that's not

00:12:38 --> 00:12:44
possible right so that's an example of a

00:12:41 --> 00:12:46
Micro World constrain the world into

00:12:43 --> 00:12:48
this very small world and see if we can

00:12:45 --> 00:12:50
make progress another example of one of

00:12:47 --> 00:12:53
these microworlds was Joseph weisen

00:12:49 --> 00:12:55
bomb's system called Eliza which you'll

00:12:52 --> 00:12:57
still see Tau in artificial intelligence

00:12:54 --> 00:13:00
classes around the country and its

00:12:56 --> 00:13:02
microw world was around talk therapy

00:12:59 --> 00:13:03
which is imagine you went to a talk

00:13:01 --> 00:13:05
therapist and you want to talk through a

00:13:02 --> 00:13:07
set of problems so that was the microw

00:13:04 --> 00:13:09
orld so let's invent an artificial

00:13:06 --> 00:13:12
intelligence that could have a

00:13:08 --> 00:13:14
conversation like a talk therapist would

00:13:11 --> 00:13:16
so let me give you an example of one of

00:13:13 --> 00:13:18
the systems and the output it would have

00:13:15 --> 00:13:21
so I'm going to try to do my best Nina

00:13:17 --> 00:13:25
totenberg here so I've got the computer

00:13:20 --> 00:13:26
giving output and somebody typing input

00:13:24 --> 00:13:29
all right so imagine you've come up to

00:13:25 --> 00:13:30
this computer and you type this input

00:13:28 --> 00:13:33
men are all alike

00:13:29 --> 00:13:35
computer in what way they are always

00:13:32 --> 00:13:38
bugging us about something or other

00:13:34 --> 00:13:40
computer can you think of a specific

00:13:37 --> 00:13:43
example well my boyfriend made me come

00:13:39 --> 00:13:46
here computer your boyfriend made you

00:13:42 --> 00:13:49
come here he says I'm depressed much of

00:13:45 --> 00:13:53
the time computer I'm sorry to hear you

00:13:48 --> 00:13:55
are depressed it's true I'm very unhappy

00:13:52 --> 00:13:57
computer do you think coming here will

00:13:54 --> 00:14:00
help you not to be

00:13:56 --> 00:14:03
unhappy I need some help that much seems

00:13:59 --> 00:14:06
certain computer what would it mean to

00:14:02 --> 00:14:07
you if you got some help well maybe I

00:14:05 --> 00:14:10
could learn to get along with my mother

00:14:06 --> 00:14:13
better computer tell me more about your

00:14:09 --> 00:14:15
family well my mother takes good care of

00:14:12 --> 00:14:18
me computer who else in your family

00:14:14 --> 00:14:20
takes good care of you so you see

00:14:17 --> 00:14:22
through this example that it's

00:14:19 --> 00:14:24
incredibly lifelike you can imagine a

00:14:21 --> 00:14:27
real talk therapist saying the exact

00:14:23 --> 00:14:29
same things that the computer said so

00:14:26 --> 00:14:31
people were super excited which is wow

00:14:28 --> 00:14:33
talk therapy is a very sophisticated

00:14:30 --> 00:14:36
parsing of English language it

00:14:32 --> 00:14:37
represents a nuanced understanding what

00:14:35 --> 00:14:39
people and relationships and what they

00:14:36 --> 00:14:42
go through and their troubles and you

00:14:38 --> 00:14:45
could see that the example was super

00:14:41 --> 00:14:47
compelling but here was the problem the

00:14:44 --> 00:14:49
problem was that as soon as you tried to

00:14:46 --> 00:14:50
talk to the computer about anything

00:14:48 --> 00:14:52
other than what a talk therapist might

00:14:49 --> 00:14:55
alk about the illusion completely broke

00:14:51 --> 00:14:57
down the responses were nonsensical so

00:14:54 --> 00:15:00
let me give you an example of that I

00:14:56 --> 00:15:02
wish to know about you computer why do

00:14:59 --> 00:15:05
you say I might want to know me to write

00:15:01 --> 00:15:08
my report computer what makes you

00:15:04 --> 00:15:09
believe to write your report I I don't

00:15:07 --> 00:15:12
understand your question please clarify

00:15:09 --> 00:15:15
computer earlier you said I would like

00:15:11 --> 00:15:19
to know me yes computer can you

00:15:14 --> 00:15:23
elaborate on that I wish to know Eliza

00:15:18 --> 00:15:25
computer how does it feel to want want

00:15:22 --> 00:15:28
what computer maybe your plans have

00:15:24 --> 00:15:31
something to do with this uh uh what

00:15:27 --> 00:15:34
plans computer is it because of your

00:15:30 --> 00:15:37
life that you say or what plans it's

00:15:33 --> 00:15:39
because of you I said that I would

00:15:36 --> 00:15:42
appreciate it if you would continue so

00:15:38 --> 00:15:44
you see any other context other than

00:15:41 --> 00:15:47
what Eliza was carefully programmed to

00:15:43 --> 00:15:50
understand completely broke the illusion

00:15:46 --> 00:15:52
the system's responses are not quite

00:15:49 --> 00:15:54
right they're not relevant and you can

00:15:51 --> 00:15:57
see it almost as if you're sort of

00:15:53 --> 00:15:59
playing with language and that's exactly

00:15:56 --> 00:16:00
the lesson which is you playing with the

00:15:58 --> 00:16:02
syntax

00:15:59 --> 00:16:04
of English sentences and trying to trick

00:16:01 --> 00:16:05
somebody into thinking you really

00:16:03 --> 00:16:07
understood them but really what you're

00:16:04 --> 00:16:09
just doing is rearranging the words

00:16:07 --> 00:16:12
looking for specific keywords like

00:16:08 --> 00:16:14
mother or depression and keying off

00:16:11 --> 00:16:16
those things and as soon as it falls off

00:16:13 --> 00:16:18
script as soon as you say a word that's

00:16:15 --> 00:16:20
not in the computer's programming then

00:16:17 --> 00:16:22
the illusion breaks down and this is

00:16:19 --> 00:16:24
what led to the second AI winter which

00:16:21 --> 00:16:26
is you had these very carefully

00:16:23 --> 00:16:29
constrained systems they would work

00:16:25 --> 00:16:30
great inside very specific contexts but

00:16:28 --> 00:16:33
as soon as you took one step to the

00:16:29 --> 00:16:35
right or one step to the left it just

00:16:32 --> 00:16:38
completely broke and this led to the

00:16:34 --> 00:16:40
second AI winter in fact there was a UK

00:16:37 --> 00:16:42
government report published by a guy

00:16:39 --> 00:16:45
named James Li Hill which basically

00:16:41 --> 00:16:47
concluded that AI has utterly failed to

00:16:44 --> 00:16:50
achieve any of its grandiose objectives

00:16:46 --> 00:16:52
o here it was the second nuclear winter

00:16:49 --> 00:16:54
no more funding no more

00:16:51 --> 00:16:57
startups all right I got one more for

00:16:53 --> 00:17:00
you and this is the 1980s era of expert

00:16:56 --> 00:17:02
systems it actually began in the 60s but

00:16:59 --> 00:17:04
startups started seriously forming

00:17:01 --> 00:17:07
around this in the late 70s and early '

00:17:03 --> 00:17:09
80s and here was the intuition so we

00:17:06 --> 00:17:11
failed at General machine translation we

00:17:08 --> 00:17:12
couldn't take any arbitrary text and

00:17:10 --> 00:17:14
turn it from English to Russian and

00:17:11 --> 00:17:16
Russian to English and then we kind of

00:17:13 --> 00:17:18
ailed at these micro worlds where we

00:17:15 --> 00:17:21
re trying to mimic very basic

00:17:17 --> 00:17:23
onstrained worlds from the bottom up

00:17:20 --> 00:17:25
right either the block world or a talk

00:17:22 --> 00:17:26
therapist world so here was the

00:17:24 --> 00:17:28
intuition which is look if we can't

00:17:25 --> 00:17:31
each computers from the bottoms up it's

00:17:27 --> 00:17:33
kind of like the way teach our kids

00:17:30 --> 00:17:34
maybe we should go the opposite way why

00:17:32 --> 00:17:36
don't we take something that's widely

00:17:33 --> 00:17:39
acknowledged as incredibly sophisticated

00:17:35 --> 00:17:43
mental Behavior like diagnosing diseases

00:17:38 --> 00:17:46
or acting as a chemist or uh doing what

00:17:42 --> 00:17:47
a computer systems analyst would do

00:17:45 --> 00:17:50
let's see if we can get into these very

00:17:46 --> 00:17:52
sophisticated domains and program them

00:17:49 --> 00:17:55
so-called expert systems right so the

00:17:51 --> 00:17:58
intuition was we'd find an expert we'd

00:17:54 --> 00:18:01
interview them we' try to understand

00:17:57 --> 00:18:03
their world and C ify their knowledge

00:18:00 --> 00:18:06
into expert systems and then computers

00:18:02 --> 00:18:09
could try to mimic this expert Behavior

00:18:05 --> 00:18:12
good examples of this in 1965 Edward

00:18:08 --> 00:18:13
fenom and Carl jari uh by the way Carl

00:18:11 --> 00:18:15
yes that Carl the guy who invented the

00:18:12 --> 00:18:19
pill wrote a system called dendral which

00:18:15 --> 00:18:22
would take the output from a mass

00:18:18 --> 00:18:24
pectrometer and identify the molecules

00:18:21 --> 00:18:26
that represented the data coming out of

00:18:23 --> 00:18:28
the max spectrometer and it got pretty

00:18:25 --> 00:18:30
good results that inspired in 1972

00:18:28 --> 00:18:33
Edward shortliffe also at Stanford to

00:18:29 --> 00:18:36
write a program called M whose goal was

00:18:32 --> 00:18:38
to diagnose infectious blood diseases so

00:18:35 --> 00:18:40
you would feed it a bunch of symptoms

00:18:37 --> 00:18:43
and data about blood and out would come

00:18:39 --> 00:18:46
a diagnosis and it actually got to sort

00:18:42 --> 00:18:48
of 50 to 60% accuracy which compared

00:18:45 --> 00:18:50
pretty favorably with human doctors

00:18:47 --> 00:18:52
performing the same diagnosis and so

00:18:49 --> 00:18:54
people got pretty excited about this

00:18:51 --> 00:18:56
which is hey if we can take this highly

00:18:53 --> 00:18:58
expert behavior and turn it into a set

00:18:55 --> 00:19:00
of rules that the computer could process

00:18:57 --> 00:19:02
maybe we could just write a couple

00:18:59 --> 00:19:03
hundred expert systems and this is

00:19:01 --> 00:19:06
actually where my own personal story

00:19:02 --> 00:19:08
interacts with this Arc which is in the

00:19:05 --> 00:19:12
late 1980s I was at IBM my friend Reed

00:19:08 --> 00:19:13
Hoffman and we were writing at IBM this

00:19:11 --> 00:19:15
thing called the integrated reasoning

00:19:12 --> 00:19:17
system and the integrated reasoning

00:19:14 --> 00:19:19
system was an expert system development

00:19:16 --> 00:19:22
ool so it really represented the

00:19:18 --> 00:19:23
nthusiasm of the time which was this is

00:19:21 --> 00:19:24
going to be the path forward for AI

00:19:22 --> 00:19:27
we're going to take these very

00:19:23 --> 00:19:28
constrained highly expert behaviors and

00:19:26 --> 00:19:30
we're going to build an expert system

00:19:27 --> 00:19:32
around it and then presumably the next

00:19:29 --> 00:19:33
expert system would be a little easier

00:19:31 --> 00:19:35
to build and let's just keep on

00:19:32 --> 00:19:37
iterating if we write a thousand of

00:19:34 --> 00:19:39
these we'll get to full artificial

00:19:36 --> 00:19:41
intelligence right let's bottle up the

00:19:38 --> 00:19:44
xpertise of a chemist and a doctor and

00:19:40 --> 00:19:46
a school teacher and a math teacher and

00:19:43 --> 00:19:49
away we go and IBM's investment at the

00:19:45 --> 00:19:50
time where Reed and I were interns was

00:19:48 --> 00:19:51
this is absolutely going to happen and

00:19:49 --> 00:19:54
so what we're going to need is an expert

00:19:50 --> 00:19:56
system development tool in other words

00:19:53 --> 00:19:57
oftware for developers building expert

00:19:55 --> 00:19:59
systems so that we could stamp these out

00:19:57 --> 00:20:01
very quickly and we'd get to the

00:19:58 --> 00:20:03
promised land on this approach one

00:20:00 --> 00:20:04
xpert system at a time there were a

00:20:02 --> 00:20:07
bunch of startups that got created at

00:20:03 --> 00:20:09
his time most notably symbolics which

00:20:06 --> 00:20:11
was a lisp machine remember John

00:20:08 --> 00:20:14
McCarthy invented a programming language

00:20:10 --> 00:20:17
so that we could codify language and

00:20:13 --> 00:20:19
expertise and symbolics was native

00:20:16 --> 00:20:21
design from the ground op to run lisp

00:20:18 --> 00:20:23
the community was super excited that

00:20:20 --> 00:20:26
his was absolutely the path forward

00:20:22 --> 00:20:28
unfortunately what happened was that

00:20:25 --> 00:20:29
building one expert system didn't really

00:20:27 --> 00:20:32
give you a leg up in building the next

00:20:29 --> 00:20:33
expert system you'd still have to go

00:20:31 --> 00:20:35
through this very long process of

00:20:33 --> 00:20:39
inding an expert understanding what

00:20:35 --> 00:20:41
hey do programming the set of rules and

00:20:38 --> 00:20:43
you didn't get a lot of Leverage when

00:20:40 --> 00:20:46
you try to do that for the next expert

00:20:42 --> 00:20:48
and this led to the collapse of expert

00:20:45 --> 00:20:51
systems most dramatically with the class

00:20:47 --> 00:20:53
the company symbolics in 1987 and the

00:20:51 --> 00:20:56
third AI

00:20:52 --> 00:20:58
winter so we've had these three boom and

00:20:55 --> 00:20:59
bus Cycles if you read the Wikipedia

00:20:57 --> 00:21:01
entry there's actually more but I just

00:20:58 --> 00:21:03
wanted to give you a taste for the boom

00:21:00 --> 00:21:06
and bus cycles that have happened but

00:21:02 --> 00:21:08
very recently we hit a breakthrough and

00:21:05 --> 00:21:11
I want to describe this breakthrough to

00:21:07 --> 00:21:13
you so what is this breakthrough the

00:21:10 --> 00:21:15
Breakthrough is called Deep learning and

00:21:12 --> 00:21:18
it's one of a class of machine learning

00:21:14 --> 00:21:20
algorithms let me just set this up so a

00:21:17 --> 00:21:22
lot of the previous techniques that I

00:21:19 --> 00:21:25
talked about were attempts to program

00:21:21 --> 00:21:27
the computer by trying to figure out how

00:21:24 --> 00:21:30
to experts behave or how to humans

00:21:26 --> 00:21:31
behave codifying those as rules

00:21:29 --> 00:21:34
and then basically just inputting them

00:21:30 --> 00:21:36
into the computer by contrast these deep

00:21:33 --> 00:21:38
learning techniques feed data structures

00:21:35 --> 00:21:41
modeled on the human brain a bunch of

00:21:37 --> 00:21:43
data and then there are algorithms that

00:21:40 --> 00:21:45
help the computer learn based on that

00:21:42 --> 00:21:47
data so it's the complete opposite

00:21:44 --> 00:21:51
approach to the approaches that had been

00:21:46 --> 00:21:53
taken the ideas originated in the 1940s

00:21:50 --> 00:21:56
with two researchers named Mulla and

00:21:52 --> 00:21:58
pittz who proposed this idea of modeling

00:21:55 --> 00:22:00
data structures and algorithms on the

00:21:57 --> 00:22:03
human brain well we'd call a neural

00:21:59 --> 00:22:05
network today based on those ideas many

00:22:02 --> 00:22:09
researchers elaborated improved on those

00:22:04 --> 00:22:11
ideas to make the algorithms faster to

00:22:08 --> 00:22:13
make them learn better to make them more

00:22:10 --> 00:22:15
accurate and to make them make better

00:22:12 --> 00:22:18
predictions so since I'm not trying to

00:22:14 --> 00:22:20
do a comprehensive history here let me

00:22:17 --> 00:22:21
just refer you to a couple good

00:22:19 --> 00:22:23
historical sources if you're curious

00:22:20 --> 00:22:25
about the list of researchers that

00:22:23 --> 00:22:27
contributed to these ideas and we'll

00:22:24 --> 00:22:28
eave you the link in our text but a

00:22:26 --> 00:22:31
couple stories along the way just to

00:22:28 --> 00:22:33
give you the intuition so Yan laon who

00:22:30 --> 00:22:35
now runs Facebook's AI lab used these

00:22:32 --> 00:22:38
neural networks to try to recognize

00:22:34 --> 00:22:40
handwriting of zip codes so think about

00:22:37 --> 00:22:42
how useful it'd be for any Postal

00:22:39 --> 00:22:44
Service if you could take a handwritten

00:22:41 --> 00:22:46
address including a zip code and

00:22:43 --> 00:22:48
automatically extract the numbers in the

00:22:45 --> 00:22:51
zip code Yan did this work in the late

00:22:47 --> 00:22:54
80s picking up from that Jeffrey Hinton

00:22:50 --> 00:22:57
and yosua Benjo Jeff now is part of

00:22:53 --> 00:23:00
Google's AI research team yosua is with

00:22:56 --> 00:23:02
e University of Montreal worked on

00:22:59 --> 00:23:04
elaboration of these neural networks

00:23:01 --> 00:23:07
called Deep belief networks and their

00:23:03 --> 00:23:09
esearch led directly to what you use

00:23:06 --> 00:23:12
veryday in Android if you talk to

00:23:08 --> 00:23:13
Android so the speech to text algorithms

00:23:11 --> 00:23:16
that are in Android are direct

00:23:13 --> 00:23:19
descendants of some of Jeffrey hinton's

00:23:15 --> 00:23:22
and yosua benio's work another very

00:23:18 --> 00:23:23
important figure who made significant

00:23:21 --> 00:23:26
contributions in this area of neural

00:23:23 --> 00:23:28
networks is a German researcher named

00:23:25 --> 00:23:31
Jurgen Schmid Huber who contributed this

00:23:27 --> 00:23:33
idea of this funnily named data

00:23:30 --> 00:23:35
structure called recurrent long

00:23:32 --> 00:23:37
short-term memories with deep feed

00:23:34 --> 00:23:40
forward neural networks right so these

00:23:36 --> 00:23:42
are funny researchy names but these are

00:23:39 --> 00:23:44
all essential elaborations and

00:23:41 --> 00:23:47
improvements on this basic idea that

00:23:43 --> 00:23:49
says look your human brain is organized

00:23:46 --> 00:23:51
in a particular way there's neurons

00:23:48 --> 00:23:53
connected to other neurons so why don't

00:23:50 --> 00:23:55
we write our data structures and our

00:23:52 --> 00:23:58
algorithms to try to mimic the structure

00:23:54 --> 00:24:01
of the brain so continuing down the path

00:23:57 --> 00:24:03
of the history of neural network so the

00:24:00 --> 00:24:05
basic idea again is let's have computer

00:24:02 --> 00:24:07
algorithms and data structures that

00:24:04 --> 00:24:09
mimic the human brain and Google decided

00:24:06 --> 00:24:11
to run an experiment and as you might

00:24:08 --> 00:24:13
expect when Google gets into the game

00:24:10 --> 00:24:15
the contribution they bring to the table

00:24:12 --> 00:24:18
is scale and there's two dimensions of

00:24:14 --> 00:24:21
scale here in the experiment that Google

00:24:17 --> 00:24:22
Gran one dimension is around data and so

00:24:20 --> 00:24:25
if you're Google and you want to feed

00:24:21 --> 00:24:27
some neural networks data you have a lot

00:24:24 --> 00:24:29
of assets you have people's emails you

00:24:26 --> 00:24:31
have search results and search queries

00:24:28 --> 00:24:34
but what Andrew in at the time he was a

00:24:30 --> 00:24:37
Stanford Professor who worked on this

00:24:33 --> 00:24:40
research used as data was YouTube videos

00:24:36 --> 00:24:42
o he got 10 million YouTube videos he

00:24:39 --> 00:24:44
took 200 by 200 stills from those videos

00:24:41 --> 00:24:46
and that's the training set and then the

00:24:43 --> 00:24:48
other dimension that Google brought to

00:24:45 --> 00:24:50
the table was scale so computational

00:24:47 --> 00:24:53
resources Google loves nothing more than

00:24:49 --> 00:24:55
distributed computing lots of computers

00:24:52 --> 00:24:57
with lots of cores crunching data and so

00:24:54 --> 00:25:01
for this experiment he brought a th000

00:24:56 --> 00:25:04
computers with 16 cores so 16,000 cores

00:25:00 --> 00:25:07
and he would let them run for a week on

00:25:03 --> 00:25:10
these 10 million YouTube videos so again

00:25:06 --> 00:25:11
using the basic neural network structure

00:25:09 --> 00:25:15
feeding it 10 million YouTube videos

00:25:11 --> 00:25:18
into a th000 servers 16,000 cores for a

00:25:14 --> 00:25:20
week so guess what they found guess what

00:25:17 --> 00:25:22
he researchers found well if you set

00:25:19 --> 00:25:24
his neural network up and feed a 10

00:25:21 --> 00:25:27
million YouTube videos you'll find

00:25:23 --> 00:25:29
exactly what are in YouTube videos and

00:25:26 --> 00:25:32
the first thing you find is CS cuz

00:25:28 --> 00:25:34
people love uploading videos of cats to

00:25:31 --> 00:25:37
YouTube but of course you find more than

00:25:33 --> 00:25:41
cats you find hundreds and thousands of

00:25:36 --> 00:25:43
objects and in fact on a 20,000 object

00:25:40 --> 00:25:46
database they recognize 16% of the

00:25:42 --> 00:25:49
objects in them so thousands of objects

00:25:45 --> 00:25:51
got recognized by this neural network so

00:25:48 --> 00:25:54
here's the fascinating thing we didn't

00:25:50 --> 00:25:57
have an expert say here's how you find a

00:25:53 --> 00:25:58
cat with nose and Paws and Whiskers and

00:25:56 --> 00:26:00
this shaped eyes and these funny shaped

00:25:57 --> 00:26:03
ears we basically just fed the network a

00:25:59 --> 00:26:05
bunch of data and the data learned to

00:26:02 --> 00:26:07
categorize the inputs without any

00:26:04 --> 00:26:09
guidance from an expert or without any

00:26:06 --> 00:26:12
rules so this is the heart of the

00:26:08 --> 00:26:15
Revolution this is the big breakthrough

00:26:11 --> 00:26:17
in artificial intelligence so instead of

00:26:14 --> 00:26:19
interviewing humans trying to extract

00:26:16 --> 00:26:22
expertise programming the computers with

00:26:18 --> 00:26:24
at expertise it's a data up approach

00:26:21 --> 00:26:27
just feed it a bunch of data and the

00:26:24 --> 00:26:30
computer will learn how to classify by

00:26:27 --> 00:26:32
itself and so if you ask the question G

00:26:29 --> 00:26:34
why are people so excited about neural

00:26:31 --> 00:26:38
networks when we've been working on this

00:26:33 --> 00:26:40
ince the 1940s the answer is scale

00:26:37 --> 00:26:42
comparing Andrew's experiment with Yan

00:26:39 --> 00:26:45
Lou's experiment recognizing handwritten

00:26:41 --> 00:26:48
zip codes Andrew had a million times

00:26:44 --> 00:26:50
more compute Cycles he's got 33,000

00:26:47 --> 00:26:52
times more pixel data he's got more

00:26:49 --> 00:26:54
sophisticated algorithms if you look at

00:26:52 --> 00:26:56
what's happened with deep learning

00:26:53 --> 00:26:59
research since then since this seminal

00:26:55 --> 00:27:01
moment in 2012 he's got a whole ton of

00:26:58 --> 00:27:03
unding Government funding University

00:27:00 --> 00:27:07
Research startup money and so what they

00:27:02 --> 00:27:09
started in Motion in 2012 was a lot of

00:27:06 --> 00:27:11
enthusiasm around this particular type

00:27:08 --> 00:27:13
of artificial intelligence research

00:27:10 --> 00:27:15
called Deep

00:27:12 --> 00:27:17
learning so let me give you a sense of

00:27:14 --> 00:27:19
how these neural networks work by

00:27:16 --> 00:27:21
showing you a demonstration of Google's

00:27:18 --> 00:27:24
tensorflow which is a deep learning

00:27:20 --> 00:27:27
library so what you see in your screen

00:27:23 --> 00:27:29
is a classic deep learning problem on

00:27:26 --> 00:27:32
the right side you see these orang

00:27:28 --> 00:27:34
e and blue dots think of them as

00:27:31 --> 00:27:36
data set it's a data set with data

00:27:33 --> 00:27:39
points a data point might be an orange

00:27:35 --> 00:27:42
dot is Spam and a blue dot is not spam

00:27:38 --> 00:27:44
or an orange dot is an offensive Forum

00:27:41 --> 00:27:47
post or a blue dot is a non-offensive

00:27:43 --> 00:27:49
forum post or an orange dot is a cat in

00:27:46 --> 00:27:51
a YouTube video and a blue dot is a dog

00:27:48 --> 00:27:54
in a YouTube video so all of these

00:27:50 --> 00:27:57
categories are represented by these dots

00:27:53 --> 00:28:00
the job of the neural network is to draw

00:27:56 --> 00:28:02
a boundary around these dots you can

00:27:59 --> 00:28:05
sort of see that in the blue and orange

00:28:01 --> 00:28:08
shaded portions using a neural network

00:28:04 --> 00:28:10
so let's get started on the left side we

00:28:07 --> 00:28:13
have inputs where we're going to feed it

00:28:09 --> 00:28:15
ons of data examples of these either

00:28:12 --> 00:28:17
email messages or pictures that we're

00:28:14 --> 00:28:19
trying to categorize and then what we're

00:28:16 --> 00:28:21
going to do is build a neural

00:28:18 --> 00:28:23
network neural network has multiple

00:28:20 --> 00:28:25
layers by the way this is why we call it

00:28:22 --> 00:28:27
deep learning deep refers to the fact

00:28:24 --> 00:28:30
hat there are multiple layers inside

00:28:26 --> 00:28:32
this neural network so so for example

00:28:29 --> 00:28:34
I've just created a six layer neural

00:28:31 --> 00:28:37
network here and I'm going to give each

00:28:33 --> 00:28:38
layer of the network a bunch of neurons

00:28:36 --> 00:28:40
and you'll see as I add all of these

00:28:37 --> 00:28:42
neurons connections between all the

00:28:39 --> 00:28:44
neurons are being added and that's the

00:28:42 --> 00:28:46
art of the system what's going to

00:28:43 --> 00:28:49
happen is the neural network is going to

00:28:45 --> 00:28:51
train itself given all of the input data

00:28:48 --> 00:28:54
to set connection strengths between each

00:28:51 --> 00:28:57
of the nodes and so you'll see that as I

00:28:53 --> 00:28:59
feeded data that the blue and orange

00:28:56 --> 00:29:01
lines connecting all of the noes in the

00:28:58 --> 00:29:03
network will get darker or lighter

00:29:00 --> 00:29:05
depending on the connection strength so

00:29:02 --> 00:29:06
what fundamentally these neural networks

00:29:04 --> 00:29:09
are doing and I'm going to hit the go

00:29:05 --> 00:29:11
button to start feeding it data and what

00:29:08 --> 00:29:13
you'll see is the connection strengths

00:29:10 --> 00:29:16
between all of the nodes in the network

00:29:12 --> 00:29:19
are going to be adjusted and then the

00:29:15 --> 00:29:22
output that's a result will uh appear as

00:29:18 --> 00:29:24
haded portions and the goal is for the

00:29:21 --> 00:29:27
network to draw a boundary around the

00:29:23 --> 00:29:30
blue dots in the middle and then orange

00:29:26 --> 00:29:33
dots separately so I'm feeding at lots

00:29:29 --> 00:29:35
more data and you can see that the

00:29:32 --> 00:29:37
network quickly trains itself to

00:29:34 --> 00:29:39
distinguish the blue dots from the

00:29:36 --> 00:29:41
orange dots and in fact in this case I

00:29:38 --> 00:29:44
needed to defeat it no more than 50 or

00:29:40 --> 00:29:45
60 iterations or or data sets for it to

00:29:43 --> 00:29:48
draw that

00:29:44 --> 00:29:49
boundary so that gives you an intuition

00:29:47 --> 00:29:51
what these things are doing which is I

00:29:48 --> 00:29:53
haven't told the system anything about

00:29:50 --> 00:29:56
what I'm trying to accomplish all I have

00:29:52 --> 00:29:58
done is FedEd a bunch of data into this

00:29:55 --> 00:30:00
pecific data structure and the computer

00:29:57 --> 00:30:02
has has itself learned how to set the

00:29:59 --> 00:30:04
connection weights between all of these

00:30:01 --> 00:30:06
nodes in the network so that it can

00:30:03 --> 00:30:09
mathematically draw the boundary between

00:30:05 --> 00:30:11
the blue dots and the orange dots so

00:30:08 --> 00:30:13
hopefully that gives you an intuition

00:30:10 --> 00:30:15
about how these things work so this

00:30:12 --> 00:30:16
browser based demo does a great job of

00:30:14 --> 00:30:19
giving you a sense of what these

00:30:15 --> 00:30:21
algorithms and data structures are doing

00:30:18 --> 00:30:23
to give you a sense of the scale we had

00:30:20 --> 00:30:25
a couple hundred connections up on the

00:30:22 --> 00:30:27
screen between the layers of our the

00:30:24 --> 00:30:30
nodes in our network if you were to buy

00:30:26 --> 00:30:32
an Nvidia Drive PX car computer it would

00:30:29 --> 00:30:35
have 27 million connections if you

00:30:31 --> 00:30:37
looked at Andrew ing's catfinder it had

00:30:34 --> 00:30:39
tens of millions of connections and then

00:30:36 --> 00:30:41
oh by the way if you're feeling a little

00:30:38 --> 00:30:43
intimidated you'll be glad to know that

00:30:40 --> 00:30:45
your brain's visual cortex which is its

00:30:42 --> 00:30:48
visual processing systems has 10 to the

00:30:44 --> 00:30:50
six times more neurons than that or more

00:30:47 --> 00:30:52
connections than that so we've got a

00:30:49 --> 00:30:54
while before deep Learning Systems will

00:30:51 --> 00:30:56
get nearly as complicated as our human

00:30:53 --> 00:30:58
brains but it's an exciting thing to

00:30:55 --> 00:31:00
think about that we're on that path to

00:30:57 --> 00:31:03
increasing sophistication through bigger

00:30:59 --> 00:31:05
data and bigger neural networks and so I

00:31:02 --> 00:31:07
wanted to put that in context with

00:31:04 --> 00:31:10
artificial intelligence machine learning

00:31:06 --> 00:31:12
General and deep learning a lot of

00:31:09 --> 00:31:14
people treat those terms synonymously

00:31:11 --> 00:31:16
but they're not really synonyms so the

00:31:13 --> 00:31:18
way I think about it is machine learning

00:31:15 --> 00:31:20
is this whole set of techniques where

00:31:17 --> 00:31:22
we're trying to program computers to

00:31:19 --> 00:31:24
exhibit human intelligence and we talked

00:31:21 --> 00:31:26
about a bunch of those so there's

00:31:23 --> 00:31:29
natural language processing syntax

00:31:25 --> 00:31:30
parsing there's search optimization so

00:31:28 --> 00:31:32
there's a whole set of techniques

00:31:29 --> 00:31:34
there's expert systems where we're

00:31:31 --> 00:31:37
trying to get computers to behave like

00:31:33 --> 00:31:39
humans now machine learning is one of

00:31:36 --> 00:31:41
those set of techniques and it's a peer

00:31:38 --> 00:31:42
to search techniques constraint

00:31:40 --> 00:31:44
satisfaction techniques logical

00:31:41 --> 00:31:46
reasoning techniques and then if you

00:31:43 --> 00:31:48
double click on machine learning what

00:31:45 --> 00:31:51
you'll get is a whole set of techniques

00:31:47 --> 00:31:54
there deep learning rule learning

00:31:50 --> 00:31:57
decision trees random Forest support

00:31:53 --> 00:31:58
Vector machines so there's a whole set

00:31:56 --> 00:32:01
of techniques where we're trying to have

00:31:57 --> 00:32:03
machines learn from data and it turns

00:32:00 --> 00:32:05
out deep learning has been the most

00:32:02 --> 00:32:08
productive and accurate of these machine

00:32:04 --> 00:32:10
Learning Systems so hopefully that gives

00:32:07 --> 00:32:13
you the taxonomy artificial intelligence

00:32:09 --> 00:32:16
is a set of algorithms and techniques to

00:32:12 --> 00:32:18
try to mimic human intelligence machine

00:32:15 --> 00:32:19
learning is one of them and deep

00:32:17 --> 00:32:21
learning is one of those machine

00:32:18 --> 00:32:23
learning techniques now I want to

00:32:20 --> 00:32:26
contrast that with the things that you

00:32:22 --> 00:32:28
see in movies where people are behaving

00:32:25 --> 00:32:31
like people so if you saw her or if you

00:32:27 --> 00:32:33
saw chappie or if you saw the Terminator

00:32:30 --> 00:32:34
movies with Skynet those are science

00:32:32 --> 00:32:36
fiction that's not artificial

00:32:33 --> 00:32:38
intelligence what artificial

00:32:35 --> 00:32:41
intelligence is is a branch of computer

00:32:37 --> 00:32:42
science and deep learning happens to be

00:32:40 --> 00:32:44
the most productive technique that we've

00:32:41 --> 00:32:46
come across in the last couple of

00:32:43 --> 00:32:48
decades to try to get computers to

00:32:45 --> 00:32:51
behave like

00:32:47 --> 00:32:54
humans okay so how useful is that in

00:32:50 --> 00:32:56
everyday life well you happen to be

00:32:53 --> 00:33:00
using machine learning in the products

00:32:55 --> 00:33:02
that you use every day

00:32:59 --> 00:33:05
so if you followed a buzzfeed headline

00:33:01 --> 00:33:07
to go to a buzzfeed article that

00:33:04 --> 00:33:10
headline was tuned using deep learning

00:33:06 --> 00:33:12
if you're an Airbnb host and you saw a

00:33:09 --> 00:33:14
price that the system recommended that

00:33:11 --> 00:33:17
you list your property at that

00:33:13 --> 00:33:21
recommendation is a product of machine

00:33:16 --> 00:33:24
learning if you use Google's photo app

00:33:20 --> 00:33:27
and you see that it's grouped the photos

00:33:23 --> 00:33:29
by a set of people the face recognition

00:33:26 --> 00:33:32
algorithms in those Google photos apps

00:33:28 --> 00:33:35
are powered by Deep learning if you go

00:33:31 --> 00:33:37
to Pinterest and do visual search in

00:33:34 --> 00:33:39
other words I love this purse or I love

00:33:36 --> 00:33:41
this lamp find me one just like it the

00:33:38 --> 00:33:44
visual recognition algorithms used to

00:33:40 --> 00:33:46
find you a close match are powered by

00:33:43 --> 00:33:50
Deep learning and if you go to Facebook

00:33:45 --> 00:33:52
and start having chats with the m app

00:33:49 --> 00:33:53
their messenger app a lot of the natural

00:33:51 --> 00:33:55
anguage processing that happens in

00:33:52 --> 00:33:57
there so that you get a reasonable

00:33:54 --> 00:33:59
response powered by Deep learning so

00:33:56 --> 00:34:02
you're using deep learning every day

00:33:58 --> 00:34:05
already because deep learning has been

00:34:01 --> 00:34:08
so productive at making applications

00:34:04 --> 00:34:10
better we have a set of Investments

00:34:07 --> 00:34:12
where the companies can help anybody who

00:34:09 --> 00:34:15
needs to put deep learning into their

00:34:11 --> 00:34:18
app even better and faster so we have

00:34:14 --> 00:34:21
companies like data bricks and Aro and

00:34:17 --> 00:34:23
sigopt all of which will help you bring

00:34:20 --> 00:34:25
deep learning deep learning techniques

00:34:22 --> 00:34:27
into your own application so that you

00:34:24 --> 00:34:31
can make your application smarter more

00:34:26 --> 00:34:33
predictive and ultimately more user

00:34:30 --> 00:34:36
friendly so where are we going with deep

00:34:32 --> 00:34:39
learning how far can we get and can we

00:34:35 --> 00:34:40
get to the dream of fully generalized

00:34:38 --> 00:34:42
human

00:34:39 --> 00:34:45
intelligence well let's go back and

00:34:41 --> 00:34:47
revisit the original design goals for

00:34:44 --> 00:34:50
artificial intelligence on human

00:34:46 --> 00:34:53
reasoning deep learning has already made

00:34:49 --> 00:34:55
incredible strides relative to previous

00:34:52 --> 00:34:58
techniques you probably saw the Press

00:34:54 --> 00:35:00
coverage around alago which defeated the

00:34:57 --> 00:35:02
human Grand master in go and you might

00:34:59 --> 00:35:04
be wondering gee it's just a board game

00:35:01 --> 00:35:07
how complicated could that thing Be Well

00:35:03 --> 00:35:10
turns out on a 19 by9 regulation go

00:35:06 --> 00:35:10
board there are more possible moves 10

00:35:09 --> 00:35:13
to the

00:35:09 --> 00:35:15
170th than there are atoms in the

00:35:12 --> 00:35:18
universe which most people put it 10 to

00:35:14 --> 00:35:21
80 or 10 to the 82 power it's a Google

00:35:17 --> 00:35:23
times more complicated than chess and

00:35:20 --> 00:35:25
because of the complexity there's no way

00:35:22 --> 00:35:26
that you can use a traditional

00:35:24 --> 00:35:29
artificial intelligence technique like

00:35:25 --> 00:35:31
search to Brute Force search all the

00:35:28 --> 00:35:33
possibilities we just don't have enough

00:35:30 --> 00:35:35
compute power to search through all the

00:35:32 --> 00:35:37
possible moves and so you need to bring

00:35:34 --> 00:35:40
deep learning techniques to figure out

00:35:36 --> 00:35:43
which branches of the search tree am I

00:35:39 --> 00:35:45
going to actually explore and so deep

00:35:42 --> 00:35:48
learning became the organizer of

00:35:44 --> 00:35:51
multiple techniques used to figure out

00:35:47 --> 00:35:53
which moves should I evaluate when I'm

00:35:50 --> 00:35:55
playing this board game and in fact what

00:35:52 --> 00:35:57
artificial intelligence researchers call

00:35:54 --> 00:36:00
using multiple techniques led by Deep

00:35:56 --> 00:36:02
learning is Ensemble learning or

00:35:59 --> 00:36:04
Ensemble problem solving in other words

00:36:01 --> 00:36:07
we're going to take a set of techniques

00:36:03 --> 00:36:09
and use them to try to solve problems

00:36:06 --> 00:36:11
like the reasoning problem that would go

00:36:08 --> 00:36:14
with being a human Grandmaster at chess

00:36:10 --> 00:36:16
or Checkers or go one of the fascinating

00:36:13 --> 00:36:18
things that's come out of this is that

00:36:15 --> 00:36:20
go games were live broadcast and

00:36:17 --> 00:36:21
professional go players amateur go

00:36:19 --> 00:36:24
players around the world were watching

00:36:20 --> 00:36:26
these games and if you asked them what

00:36:24 --> 00:36:29
heir reactions were to the moves they

00:36:25 --> 00:36:31
would say wow watching that thing has

00:36:28 --> 00:36:34
really rekindled my passion for playing

00:36:30 --> 00:36:37
o because the way Alpha Go played go is

00:36:34 --> 00:36:39
not like the way human players played at

00:36:36 --> 00:36:41
all it made moves that were completely

00:36:38 --> 00:36:44
unexpected and look like terrible moves

00:36:40 --> 00:36:45
but turned out to be great moves and so

00:36:43 --> 00:36:47
what's happening is there's this

00:36:44 --> 00:36:49
feedback loop that comes back with

00:36:46 --> 00:36:51
watching artificial intelligence work so

00:36:48 --> 00:36:54
humans watch artificial intelligence do

00:36:50 --> 00:36:56
its thing in this play play a go game

00:36:53 --> 00:36:58
and it in turn influences how the go

00:36:55 --> 00:37:00
players play their future games because

00:36:57 --> 00:37:03
they're learning new strategies and

00:36:59 --> 00:37:05
techniques from it in fact Lee sadal the

00:37:02 --> 00:37:08
human grandmas who got beat said I have

00:37:04 --> 00:37:09
improved already it's given me new ideas

00:37:07 --> 00:37:11
and I think this is a super important

00:37:08 --> 00:37:13
observation of how artificial

00:37:10 --> 00:37:15
intelligence systems will actually

00:37:12 --> 00:37:17
interact with humans in the real world

00:37:14 --> 00:37:20
so there's a lot of talk about how AI is

00:37:16 --> 00:37:22
going to completely replace humans I

00:37:19 --> 00:37:24
like to think about how AI is actually

00:37:21 --> 00:37:26
going to make humans better at what they

00:37:23 --> 00:37:29
do and we've already seen this with the

00:37:25 --> 00:37:31
go players so it turns out that using

00:37:28 --> 00:37:34
deep learning techniques we've already

00:37:30 --> 00:37:36
gotten to better than human performance

00:37:33 --> 00:37:39
on a set of tasks that you think we

00:37:35 --> 00:37:42
would need to understand the world on so

00:37:38 --> 00:37:44
these tasks include diagnosing diseases

00:37:41 --> 00:37:47
looking at x-rays to figure out if there

00:37:44 --> 00:37:50
are tumors in them figuring out if

00:37:46 --> 00:37:52
there's cancer in Blood and all of these

00:37:49 --> 00:37:54
complex tasks that used to take highly

00:37:51 --> 00:37:58
trained individuals these are

00:37:53 --> 00:38:00
perfect examples of how deep learning

00:37:57 --> 00:38:01
can get to better performance and Human

00:37:59 --> 00:38:03
Performance because they're just taking

00:38:00 --> 00:38:06
data and they're making categorization

00:38:02 --> 00:38:09
decisions does this blood sample have

00:38:05 --> 00:38:10
cancer in it or not we're going to see

00:38:08 --> 00:38:12
hundreds and hundreds of startups over

00:38:09 --> 00:38:14
time getting to better than human

00:38:11 --> 00:38:17
performance on things that we used to

00:38:13 --> 00:38:21
think only the most trained humans could

00:38:16 --> 00:38:22
o what about planning and navigation

00:38:20 --> 00:38:24
well I want to tell this story about

00:38:21 --> 00:38:27
George who is the guy sitting in the car

00:38:23 --> 00:38:29
here George is the CEO of a company

00:38:26 --> 00:38:32
called comma. which happens to be an

00:38:28 --> 00:38:35
a16z investment and he built a

00:38:31 --> 00:38:37
self-driving car all by himself one

00:38:34 --> 00:38:39
person in a literal garage building a

00:38:36 --> 00:38:42
self-driving car and let me put this in

00:38:38 --> 00:38:45
context in 2004 DARPA sponsored the very

00:38:42 --> 00:38:47
first Grand Challenge in the mavi desert

00:38:44 --> 00:38:49
hey got 20 entries from the leading

00:38:46 --> 00:38:51
universities and startups of the time

00:38:48 --> 00:38:54
and they set up 150 M course in the

00:38:50 --> 00:38:57
desert and the leading entry which was

00:38:53 --> 00:39:00
uh car melon's self-driving car called

00:38:56 --> 00:39:05
sandstorm went a total of 7.32 mil out

00:38:59 --> 00:39:07
of the 150 M route so that was in 2004

00:39:04 --> 00:39:10
in 2007 DARPA sponsored the urban

00:39:06 --> 00:39:13
challenge which was a 60m city course

00:39:09 --> 00:39:15
t at George air for base and many

00:39:12 --> 00:39:17
universities finished CMU and Stanford

00:39:14 --> 00:39:18
took the top two Sparks you could see

00:39:16 --> 00:39:21
the rapid Improvement in just three

00:39:17 --> 00:39:23
years they went from I couldn't go

00:39:20 --> 00:39:25
further than seven miles in a desert to

00:39:22 --> 00:39:27
I can complete a 60m city course and

00:39:24 --> 00:39:29
that set off an arms race for autonomous

00:39:26 --> 00:39:32
car prog

00:39:28 --> 00:39:34
and so every major car manufacturer now

00:39:31 --> 00:39:37
has a huge autonomous driving program

00:39:33 --> 00:39:40
with thousands of Engineers so GM and

00:39:36 --> 00:39:43
Ford and Tesla and Google and Toyota and

00:39:39 --> 00:39:44
Lyft and Uber and Bosch and VW on and on

00:39:42 --> 00:39:47
all of these companies have huge numbers

00:39:43 --> 00:39:50
of Engineers working on autonomous car

00:39:46 --> 00:39:52
systems and are George George figured

00:39:49 --> 00:39:54
out how to build a self-driving car all

00:39:51 --> 00:39:56
by himself using deep learning

00:39:53 --> 00:39:58
techniques and that tells you how

00:39:55 --> 00:39:59
sophisticated the systems have gotten so

00:39:57 --> 00:40:01
n the one hand you have thousands of

00:39:58 --> 00:40:03
Engineers working at the best R&D

00:40:00 --> 00:40:05
corporate facilities there are and on

00:40:02 --> 00:40:07
the other hand you have George riding on

00:40:04 --> 00:40:09
top of Open Source and George was able

00:40:06 --> 00:40:11
to build an autonomous car that

00:40:08 --> 00:40:12
completely Works in fact one of the

00:40:10 --> 00:40:14
people on my team named Kyle got into

00:40:11 --> 00:40:16
the car with them and drove straight

00:40:13 --> 00:40:19
down 101 No Hands on the Wheel with

00:40:15 --> 00:40:21
George's autonomous driving system so

00:40:18 --> 00:40:23
that tells you about the great promise

00:40:20 --> 00:40:25
of the sophistication of this deep

00:40:22 --> 00:40:27
Learning System where one guy can build

00:40:24 --> 00:40:28
a self-driving car on top of the

00:40:26 --> 00:40:30
algorithms that are now in the open

00:40:27 --> 00:40:31
source

00:40:29 --> 00:40:34
Community let's talk about natural

00:40:30 --> 00:40:35
anguage processing you'll remember that

00:40:33 --> 00:40:37
his was one of the very first AI

00:40:34 --> 00:40:39
experiments that got run trying to

00:40:36 --> 00:40:41
translate English to Russian and Russian

00:40:38 --> 00:40:44
to English the community has made huge

00:40:40 --> 00:40:47
rdes uh since then it remains a very

00:40:43 --> 00:40:49
difficult problem but deep learning

00:40:46 --> 00:40:51
and tons of data right think about all

00:40:48 --> 00:40:53
the data that's on the internet today

00:40:50 --> 00:40:55
that wasn't in the 1950s Twitter streams

00:40:52 --> 00:40:57
and Facebook feeds and blog posts and so

00:40:54 --> 00:40:58
n we have this massive data source that

00:40:56 --> 00:41:00
we can feed into these system sys to

00:40:58 --> 00:41:03
perform the complicated natural language

00:40:59 --> 00:41:05
processing tasks that we need to perform

00:41:02 --> 00:41:07
and it's a hard problem so as an example

00:41:04 --> 00:41:10
of that this is a perfectly valid

00:41:06 --> 00:41:13
English sentence Paris Hilton was in

00:41:09 --> 00:41:16
Paris at the Paris Hilton listening to

00:41:12 --> 00:41:18
Paris now you might need to spend a

00:41:15 --> 00:41:19
second or two to try to parse that

00:41:17 --> 00:41:22
sentence to figure out oh Paris Hilton

00:41:18 --> 00:41:26
the celebrity is in Paris France the

00:41:21 --> 00:41:29
city in Paris Hilton the hotel listening

00:41:25 --> 00:41:31
to Paris the album and now computers are

00:41:28 --> 00:41:32
getting very very good at parsing that

00:41:30 --> 00:41:35
sentence in exactly the way you did

00:41:31 --> 00:41:38
which is what is Paris Hilton in this

00:41:34 --> 00:41:40
context here is another perfectly valid

00:41:37 --> 00:41:42
English sentence and look this up on

00:41:39 --> 00:41:45
Wikipedia because it has its own very

00:41:41 --> 00:41:49
own Wikipedia page buffalo buffalo

00:41:44 --> 00:41:51
buffalo buffalo buffalo

00:41:48 --> 00:41:53
it is actually a valid English

00:41:50 --> 00:41:56
sentence that one's tough to parse but

00:41:52 --> 00:41:57
go look up the Wikipedia page so

00:41:55 --> 00:42:00
understanding natural language and the

00:41:56 --> 00:42:03
content text and what parts of speech

00:41:59 --> 00:42:05
words are and what the sense of a

00:42:02 --> 00:42:07
sentence is is very hard and deep

00:42:04 --> 00:42:11
learning is making huge rdes in helping

00:42:06 --> 00:42:13
us do that in fact Google just released

00:42:10 --> 00:42:16
an open- source project to do exactly

00:42:12 --> 00:42:18
this which is to identify the parts of a

00:42:15 --> 00:42:19
sentence and break it down into nouns

00:42:17 --> 00:42:21
and verbs and subjects and direct

00:42:19 --> 00:42:24
objects and so on and go find that

00:42:20 --> 00:42:28
yourself it's uh Google's famously named

00:42:23 --> 00:42:30
parcy mcars face open source project on

00:42:27 --> 00:42:33
perception we are also making huge

00:42:29 --> 00:42:36
strides with deep learning so what you

00:42:32 --> 00:42:38
see in this slide is the view of what

00:42:35 --> 00:42:40
you want your autonomous car to have

00:42:37 --> 00:42:43
which is looking out in the street it's

00:42:39 --> 00:42:45
identified the objects in that scene on

00:42:42 --> 00:42:47
the left side here's a sedan probably

00:42:44 --> 00:42:49
moving 30 m an hour on the right side we

00:42:46 --> 00:42:52
got a biker probably moving 10 to 15

00:42:49 --> 00:42:54
miles an hour out of them we have

00:42:51 --> 00:42:55
another car then we've got a bunch of

00:42:53 --> 00:42:58
stationary things like trees and

00:42:55 --> 00:43:00
sidewalks and so you want a system that

00:42:57 --> 00:43:02
look out into a scene like this and in

00:42:59 --> 00:43:04
real time categorize all the objects in

00:43:01 --> 00:43:05
it and make predictions about where

00:43:03 --> 00:43:08
those objects are going to be so that

00:43:04 --> 00:43:10
you can plan a route that's safe and

00:43:07 --> 00:43:13
effective deep learning is playing huge

00:43:09 --> 00:43:16
roles in an autonomous car's ability to

00:43:12 --> 00:43:19
understand and parse a scene in fact uh

00:43:15 --> 00:43:22
Nvidia attributes a lot of its recent

00:43:18 --> 00:43:24
growth and success as a business to this

00:43:21 --> 00:43:25
new line of business which is providing

00:43:23 --> 00:43:29
deep learning systems for autonomous

00:43:24 --> 00:43:31
cars Jensen Juan Le CEO and co-founder

00:43:28 --> 00:43:33
said accelerating our business growth is

00:43:30 --> 00:43:35
deep learning a new Computing model that

00:43:32 --> 00:43:37
uses the gpu's massive computing power

00:43:34 --> 00:43:40
to learn artificial intelligence

00:43:36 --> 00:43:42
algorithms its adoption is sweeping one

00:43:39 --> 00:43:44
industry after another driving demand

00:43:41 --> 00:43:47
for our gpus so as you can see this is

00:43:44 --> 00:43:48
touching many many different parts of

00:43:46 --> 00:43:51
Silicon Valley from the Silicon

00:43:47 --> 00:43:53
literally this the chips that we use on

00:43:50 --> 00:43:55
up and we're just getting

00:43:52 --> 00:43:57
started another great example of the

00:43:54 --> 00:43:59
strides that we're making in perception

00:43:56 --> 00:44:01
comes at out of research from Cornell

00:43:58 --> 00:44:04
University where they also fed the

00:44:00 --> 00:44:06
learning algorithms YouTube videos in

00:44:03 --> 00:44:09
this case they fed videos of people

00:44:05 --> 00:44:11
doing food preparation tutorials it's

00:44:08 --> 00:44:13
one of the most popular genres on

00:44:10 --> 00:44:15
YouTube and what the researchers were

00:44:12 --> 00:44:17
able to do given all of this input

00:44:14 --> 00:44:20
people preparing food is basically break

00:44:16 --> 00:44:22
down the steps of the recipe into

00:44:19 --> 00:44:24
discrete chunks so they recognized when

00:44:21 --> 00:44:26
somebody was chopping onions

00:44:23 --> 00:44:28
distinguished from when they were mixing

00:44:25 --> 00:44:29
distinguished from when they were

00:44:27 --> 00:44:33
running the blender and so you could

00:44:28 --> 00:44:35
take a 10-minute video tutorial on how

00:44:32 --> 00:44:38
to make chicken tortilla soup break it

00:44:34 --> 00:44:39
into the discrete chunks and deep

00:44:37 --> 00:44:41
learning algorithms have gotten to

00:44:38 --> 00:44:43
incredible accuracy being able to

00:44:40 --> 00:44:46
accurately label the discrete steps of

00:44:43 --> 00:44:48
preparing food now all we need to do is

00:44:45 --> 00:44:52
marry that up to a robot that will

00:44:47 --> 00:44:54
prepare the food and we're golden and so

00:44:51 --> 00:44:56
here's the tantalizing Prospect deep

00:44:53 --> 00:44:57
learning is helping us make fundamental

00:44:55 --> 00:44:59
progress on all of the original design

00:44:56 --> 00:45:01
goals of artificial intelligence which

00:44:58 --> 00:45:04
was to mimic the many many different

00:45:00 --> 00:45:05
facets of human behavior and so maybe

00:45:03 --> 00:45:08
this is it maybe this is the path

00:45:04 --> 00:45:10
forward to generalized intelligence to

00:45:08 --> 00:45:12
things like emotional intelligence to

00:45:09 --> 00:45:15
things like creativity to things like

00:45:11 --> 00:45:17
intuition and in fact you'll see a whole

00:45:14 --> 00:45:20
genre of AI uh deep learning research

00:45:16 --> 00:45:23
that is around creativity an example of

00:45:19 --> 00:45:26
that is deep Jazz which can actually

00:45:22 --> 00:45:29
compose original new Jazz

00:45:25 --> 00:45:30
compositions and so it's working this

00:45:28 --> 00:45:33
looks like the start of a fundamental

00:45:30 --> 00:45:36
breakthrough in AI research the way I

00:45:32 --> 00:45:38
think about it now is that all the

00:45:35 --> 00:45:42
sirious applications from here on out

00:45:37 --> 00:45:43
need to have deep learning and AI inside

00:45:41 --> 00:45:45
in exactly the same way that all sirious

00:45:43 --> 00:45:48
Computing systems needed to have Intel

00:45:44 --> 00:45:50
chips inside them and Intel famously did

00:45:47 --> 00:45:54
their Intel Inside advertising campaign

00:45:49 --> 00:45:56
to drive this home I think now about the

00:45:53 --> 00:45:58
startups that we see and the systems

00:45:55 --> 00:45:59
that are getting built that deep

00:45:57 --> 00:46:01
learning needs to be inside these

00:45:58 --> 00:46:04
systems to make them better faster more

00:46:00 --> 00:46:06
sponsive easier to use and it's just

00:46:03 --> 00:46:08
going to be a fundamental technique that

00:46:05 --> 00:46:11
we expect to see in all serious

00:46:07 --> 00:46:14
applications moving

00:46:10 --> 00:46:17
forward so we're in an AI spring only

00:46:13 --> 00:46:19
time will tell if this leads to the

00:46:16 --> 00:46:21
promise of generalized intelligence but

00:46:18 --> 00:46:23
what is absolutely non-controversial is

00:46:20 --> 00:46:25
that deep learning is the most

00:46:22 --> 00:46:27
fundamental advance in artificial

00:46:24 --> 00:46:28
intelligence research since we started

00:46:26 --> 00:46:31
since that summer of

00:46:27 --> 00:46:32
1956 it's going to make every

00:46:30 --> 00:46:35
application better and smarter and

00:46:31 --> 00:46:37
faster more responsive to our needs and

00:46:34 --> 00:46:39
I can't wait to see the startups that

00:46:36 --> 00:46:41
lead us there so this is a super

00:46:38 --> 00:46:43
exciting time in why we think that Ai

00:46:40 --> 00:46:45
and deep learning could be as

00:46:42 --> 00:46:48
fundamental platform shifts technology

00:46:44 --> 00:46:52
shifts as mobile and Cloud were in the

00:46:47 --> 00:46:52
last 5 to 10 years

<!-- YOUTUBE_TRANSCRIPT_END -->
