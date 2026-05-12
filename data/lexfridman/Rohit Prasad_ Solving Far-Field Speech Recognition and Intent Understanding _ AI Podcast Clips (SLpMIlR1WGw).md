---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "SLpMIlR1WGw"
title: "Rohit Prasad: Solving Far-Field Speech Recognition and Intent Understanding | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=SLpMIlR1WGw"
thumbnail_url: "https://i.ytimg.com/vi/SLpMIlR1WGw/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=SLpMIlR1WGw"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-12-15T19:00:14.000Z"
upload_date: "2019-12-15"
duration_seconds: 1041
duration_human: "17:21"
view_count: 3293
like_count: 103
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:02:49.289Z"
---

# Rohit Prasad: Solving Far-Field Speech Recognition and Intent Understanding | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=SLpMIlR1WGw
- video_id: SLpMIlR1WGw
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-12-15T19:00:14.000Z
- upload_date: 2019-12-15
- duration: 17:21
- view_count: 3293
- like_count: 103
- has_subtitle: true
- language: en
- availability: public
- tags: speech recognition, nlp, conversation, dialogue, intent modeling, alexa, amazon alexa, google home, siri, natural language processing, deep learning, machine learning, alexa prize, amazon echo, rohit prasad, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

Full episode with Rohit Prasad (Dec 2019): https://www.youtube.com/watch?v=Ad89JYS-uZM
Clips channel (Lex Clips): https://www.youtube.com/lexclips
Main channel (Lex Fridman): https://www.youtube.com/lexfridman
(more links below)

Podcast full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4

Podcasts clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

Podcast website:
https://lexfridman.com/ai

Podcast on Apple Podcasts (iTunes):
https://apple.co/2lwqZIr

Podcast on Spotify:
https://spoti.fi/2nEwCF8

Podcast RSS:
https://lexfridman.com/category/ai/feed/

Rohit Prasad is the vice president and head scientist of Amazon Alexa and one of its original creators.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:05
the inspiration was the Star Trek

00:00:03 --> 00:00:08
computer so when you think of it that

00:00:04 --> 00:00:09
way you know everything is possible but

00:00:07 --> 00:00:13
when you launch a product you have to

00:00:08 --> 00:00:16
start with someplace and when I joined

00:00:12 --> 00:00:18
we the product was already in conception

00:00:15 --> 00:00:20
and we started working on the far field

00:00:17 --> 00:00:22
speech recognition because that was the

00:00:19 --> 00:00:23
first thing to solve by that we mean

00:00:21 --> 00:00:26
that you should be able to speak to the

00:00:22 --> 00:00:30
device from a distance and in those days

00:00:25 --> 00:00:32
that wasn't a common practice and even

00:00:29 --> 00:00:34
in the previous research world I was in

00:00:31 --> 00:00:36
was considered to an unsolvable problem

00:00:33 --> 00:00:39
then in terms of whether you can

00:00:35 --> 00:00:41
converse from a length and here I'm

00:00:38 --> 00:00:43
still talking about the first part of

00:00:40 --> 00:00:45
the problem where you say get the

00:00:42 --> 00:00:48
attention of the device as in by saying

00:00:44 --> 00:00:51
what we call the wake word which means

00:00:47 --> 00:00:54
the word Alexa has to be detected with a

00:00:50 --> 00:00:57
very high accuracy because it is a very

00:00:53 --> 00:01:00
common word it has sound units that map

00:00:56 --> 00:01:05
with words like I like you or Alec Alex

00:00:59 --> 00:01:08
right so it's a undoubtably hard problem

00:01:04 --> 00:01:12
to detect the right mentions of Alexa's

00:01:07 --> 00:01:14
address to the device versus I like

00:01:11 --> 00:01:17
Alexa you have to pick up that signal

00:01:13 --> 00:01:19
when there's a lot of noise not only

00:01:16 --> 00:01:21
North conversation they are in the house

00:01:18 --> 00:01:22
well you remember on the device you're

00:01:20 --> 00:01:25
still simply listening for the wake word

00:01:21 --> 00:01:27
Alexa and there's a lot of words being

00:01:24 --> 00:01:32
spoken in the house how do you know it's

00:01:27 --> 00:01:35
Alexa and directed at Alexa because I

00:01:31 --> 00:01:38
could say I love my Alexa I hate my Alex

00:01:34 --> 00:01:40
I want a lecture to do this and in all

00:01:37 --> 00:01:43
these three sentences I said Alexa I

00:01:39 --> 00:01:45
didn't want it to wake up yeah so can I

00:01:42 --> 00:01:47
just pause on a second what would be

00:01:44 --> 00:01:49
your device that I should probably in

00:01:46 --> 00:01:52
the introduction of this conversation

00:01:48 --> 00:01:54
give to people in terms of with them

00:01:51 --> 00:01:57
turning off their Lux a device if

00:01:53 --> 00:02:00
they're listening to this podcast

00:01:56 --> 00:02:02
conversation out loud like what's the

00:01:59 --> 00:02:04
probability that an Alexa device will go

00:02:01 --> 00:02:07
ff because we mentioned Alexa like a

00:02:03 --> 00:02:10
million times so it will we have done a

00:02:06 --> 00:02:13
lot of different things where we can

00:02:09 --> 00:02:16
figure out that there is

00:02:12 --> 00:02:19
the device the speech is coming from a

00:02:15 --> 00:02:22
human versus over there also I mean in

00:02:18 --> 00:02:25
terms of like also it is think about ads

00:02:21 --> 00:02:26
or so we have also launched a technology

00:02:24 --> 00:02:30
for what a marketing kind of approaches

00:02:25 --> 00:02:32
in terms of filtering it out but yes if

00:02:29 --> 00:02:34
this kind of a podcast is happening it's

00:02:31 --> 00:02:37
possible your device will wake up a few

00:02:33 --> 00:02:41
times it's an unsolved problem but it is

00:02:36 --> 00:02:43
definitely something we care very much

00:02:40 --> 00:02:47
about but the idea is you want to detect

00:02:42 --> 00:02:49
Alex were meant for the device first

00:02:46 --> 00:02:51
even hearing alexa versus i like yeah

00:02:48 --> 00:02:54
something and that's the fascinating

00:02:50 --> 00:02:56
part so that was the first relief that's

00:02:53 --> 00:02:56
the first of the world's best detector

00:02:55 --> 00:02:58
of course

00:02:55 --> 00:03:00
yeah the fir world's best wait word

00:02:57 --> 00:03:02
etector yeah in the far field setting

00:02:59 --> 00:03:05
not like something where the phone is

00:03:01 --> 00:03:08
itting on the table this is like people

00:03:04 --> 00:03:10
have devices 40 feet away like in my

00:03:07 --> 00:03:13
house or 20 feet away and you still get

00:03:09 --> 00:03:15
an answer so that was the first part the

00:03:12 --> 00:03:18
next is okay you're speaking to the

00:03:14 --> 00:03:20
device of course you're gonna issue many

00:03:17 --> 00:03:22
different requests some may be simple

00:03:19 --> 00:03:24
some may be extremely hard but it's a

00:03:21 --> 00:03:26
large vocabulary speech recognition

00:03:23 --> 00:03:29
problem essentially where the audio is

00:03:25 --> 00:03:31
now not coming on to your phone or a

00:03:28 --> 00:03:34
handheld mic like this or clothes

00:03:30 --> 00:03:37
talking mic but it's from 20 feet away

00:03:33 --> 00:03:39
where if you're in a busy household your

00:03:36 --> 00:03:42
son may be listening to music your

00:03:38 --> 00:03:43
daughter may be running around with

00:03:41 --> 00:03:45
something and asking your mom something

00:03:42 --> 00:03:48
and so forth right so this is like a

00:03:44 --> 00:03:50
common household setting where the words

00:03:47 --> 00:03:52
you're speaking to Alexa

00:03:49 --> 00:03:54
need to be recognized with very high

00:03:51 --> 00:03:56
accuracy yes right now we are still just

00:03:53 --> 00:03:58
in the recognition problem you haven't

00:03:55 --> 00:04:00
yet come to the understanding one right

00:03:57 --> 00:04:03
in if you pause I'm sorry once again

00:03:59 --> 00:04:07
what year was this is this before

00:04:02 --> 00:04:10
neural networks began to start to

00:04:06 --> 00:04:14
seriously prove themselves in audio

00:04:09 --> 00:04:17
space yeah this is around so I joined in

00:04:13 --> 00:04:19
2013 in April right so the early

00:04:16 --> 00:04:22
research in neural networks coming back

00:04:18 --> 00:04:24
and showing some promising results in

00:04:21 --> 00:04:27
speech recognition space had started

00:04:23 --> 00:04:30
happening but it was very early but we

00:04:26 --> 00:04:33
to build on that on the very first thing

00:04:29 --> 00:04:35
we did when when I join and we with the

00:04:32 --> 00:04:37
team and remember it was a very smudge

00:04:34 --> 00:04:41
of a start-up environment which is great

00:04:36 --> 00:04:45
about Amazon and we double down on deep

00:04:40 --> 00:04:47
learning right away and we we knew will

00:04:44 --> 00:04:50
have to improve accuracy fast and

00:04:46 --> 00:04:52
because of that we worked on and the

00:04:49 --> 00:04:54
scale of data once you have a device

00:04:51 --> 00:04:56
like this if it is successful will

00:04:53 --> 00:04:59
improve big time like you'll suddenly

00:04:55 --> 00:05:01
have large volumes of data to learn from

00:04:58 --> 00:05:03
to make the customer experience better

00:05:00 --> 00:05:06
so how do you scale deep learning so we

00:05:02 --> 00:05:09
did our one of the first works in in

00:05:05 --> 00:05:11
training with distributed GPUs and where

00:05:08 --> 00:05:14
the training time was you know was

00:05:10 --> 00:05:16
linear in terms of like in the amount of

00:05:13 --> 00:05:18
data so that was quite important work

00:05:15 --> 00:05:20
where it was algorithmic improvements as

00:05:17 --> 00:05:21
well as a lot of engineering

00:05:19 --> 00:05:23
improvements to be able to train on

00:05:20 --> 00:05:26
thousands and thousands oliver of speech

00:05:23 --> 00:05:29
and that was an important factor so the

00:05:25 --> 00:05:33
if you ask me like in back in 2013 and

00:05:28 --> 00:05:36
2014 when we launched echo the

00:05:32 --> 00:05:40
combination of large scale data deep

00:05:35 --> 00:05:44
learning progress near infinite GPX we

00:05:39 --> 00:05:47
had available on AWS even then was all

00:05:43 --> 00:05:49
came together for us to be able to solve

00:05:46 --> 00:05:50
the far field speech recognition to the

00:05:48 --> 00:05:52
xtent it could be useful to the

00:05:49 --> 00:05:54
customers it's still not solved like I

00:05:51 --> 00:05:56
mean it's not that we are perfect at

00:05:53 --> 00:05:58
recognizing speech but we are great at

00:05:55 --> 00:06:00
in terms of the settings that are in

00:05:57 --> 00:06:02
homes right so and that was important

00:05:59 --> 00:06:05
even in the early stages the first even

00:06:01 --> 00:06:09
I'm trying to look back at that time if

00:06:04 --> 00:06:11
I remember correctly that it was it

00:06:08 --> 00:06:14
seems like the task would be pretty

00:06:10 --> 00:06:18
daunting so like so we kind of take it

00:06:13 --> 00:06:21
for granted that it works now yes right

00:06:17 --> 00:06:22
so let me like how first time you

00:06:20 --> 00:06:24
mentioned startup I wasn't familiar how

00:06:21 --> 00:06:26
big the team was I kind of because I

00:06:23 --> 00:06:27
know there's a lot of really smart

00:06:25 --> 00:06:31
people working on looks and I was very

00:06:26 --> 00:06:34
large team how big was the team how

00:06:30 --> 00:06:39
likely were you to fail in the highs of

00:06:33 --> 00:06:42
everyone else so like what I'll give you

00:06:38 --> 00:06:45
very interesting anecdote on that when I

00:06:41 --> 00:06:49
joined the team the speech recognition

00:06:44 --> 00:06:51
team was six people my first meeting and

00:06:48 --> 00:06:55
we had hired a few more people it was 10

00:06:50 --> 00:07:01
people 9 out of 10 people thought it

00:06:54 --> 00:07:04
can't be done who was the one the one

00:07:00 --> 00:07:08
was me actually I should say and one was

00:07:03 --> 00:07:10
ay my optimistic yeah and and 8th we're

00:07:07 --> 00:07:13
trying to convince let's go to the

00:07:09 --> 00:07:15
management and say let's not work on

00:07:12 --> 00:07:18
this problem let's work on some other

00:07:14 --> 00:07:20
problem like either telephony speech for

00:07:17 --> 00:07:22
customer service calls and so forth but

00:07:19 --> 00:07:24
his was the kind of belief you must

00:07:21 --> 00:07:26
have and I had experience with far-field

00:07:23 --> 00:07:28
speech recognition and I my eyes lit up

00:07:25 --> 00:07:31
when I saw a problem like that saying

00:07:27 --> 00:07:33
okay we have been in speech recognition

00:07:30 --> 00:07:37
always looking for that killer app yeah

00:07:32 --> 00:07:39
and this was a killer use case to bring

00:07:36 --> 00:07:41
something delightful in the hands of

00:07:38 --> 00:07:42
customers you mentioned you the way you

00:07:40 --> 00:07:45
kind of think of in a product way in the

00:07:41 --> 00:07:46
future have a press release and an FAQ

00:07:44 --> 00:07:51
and you think backwards that's did you

00:07:45 --> 00:07:53
have that the team have the echo in mind

00:07:50 --> 00:07:55
so this far field speech recognition

00:07:52 --> 00:07:57
actually putting a thing in the home

00:07:54 --> 00:07:59
that works that is able to interact with

00:07:56 --> 00:08:02
was that the press release what was the

00:07:58 --> 00:08:04
way close I would say in terms of the as

00:08:01 --> 00:08:08
I said the vision was started computer

00:08:03 --> 00:08:10
ight or the inspiration and from there

00:08:07 --> 00:08:13
I can't divulge all the exact

00:08:09 --> 00:08:18
specifications but one of the first

00:08:12 --> 00:08:21
hings that was magical on a lecture was

00:08:17 --> 00:08:23
music it brought me to back to music

00:08:20 --> 00:08:25
because my taste is still and when I was

00:08:22 --> 00:08:29
an undergrad so I still listen to those

00:08:24 --> 00:08:32
songs and I it was too hard for me to be

00:08:28 --> 00:08:35
a music fan with a phone right so I and

00:08:31 --> 00:08:39
I don't I hate things in my ear so from

00:08:34 --> 00:08:42
that perspective it was quite hard and

00:08:38 --> 00:08:45
and music was part of the at least

00:08:41 --> 00:08:47
he documents I have seen right so so

00:08:44 --> 00:08:50
from that perspective I think yes in

00:08:46 --> 00:08:52
terms of our how far are we from the

00:08:49 --> 00:08:53
original vision I can't reveal that but

00:08:51 --> 00:08:55
it's that

00:08:52 --> 00:08:57
why I have done a fun at work because

00:08:54 --> 00:08:59
very day we go in and thinking like

00:08:56 --> 00:09:02
these are the new set of challenges to

00:08:58 --> 00:09:03
solve that's a great way to do great

00:09:01 --> 00:09:05
engineering is you think of the product

00:09:02 --> 00:09:07
press really I like that idea actually

00:09:04 --> 00:09:09
maybe we'll talk about it a bit later

00:09:06 --> 00:09:10
was just a super nice way to have

00:09:08 --> 00:09:13
focused I'll tell you this you're a

00:09:09 --> 00:09:15
scientist and a lot of my scientists

00:09:12 --> 00:09:18
have adopted that they they have now

00:09:14 --> 00:09:20
they love it as a process because it was

00:09:17 --> 00:09:22
very a scientist you're trained to write

00:09:19 --> 00:09:24
great papers but they are all after

00:09:21 --> 00:09:27
you've done the research or your probe

00:09:23 --> 00:09:29
and I and your PhD dissertation proposal

00:09:26 --> 00:09:32
is something that comes closest or a

00:09:28 --> 00:09:34
DARPA proposal or NSF proposal is the

00:09:31 --> 00:09:37
closest that comes to a press release

00:09:33 --> 00:09:39
but that process is now ingrained in our

00:09:36 --> 00:09:43
scientists which is like delightful for

00:09:38 --> 00:09:45
me to see you write the paper first then

00:09:42 --> 00:09:47
make it happen that's right that's not

00:09:44 --> 00:09:49
state-of-the-art results or you leave

00:09:46 --> 00:09:52
the results section open well you have a

00:09:48 --> 00:09:55
thesis about here's what I expect right

00:09:51 --> 00:09:57
and here's what it will change right so

00:09:54 --> 00:10:00
I think it is a great thing it works for

00:09:56 --> 00:10:04
esearchers as well just so far field

00:09:59 --> 00:10:06
recognition yeah what was the big leap

00:10:03 --> 00:10:08
what what were the breakthroughs and

00:10:05 --> 00:10:10
yeah what was that journey liked it

00:10:07 --> 00:10:12
oday yeah I think the as you said first

00:10:09 --> 00:10:14
here was a lot of skepticism on whether

00:10:11 --> 00:10:17
far field speech recognition will ever

00:10:13 --> 00:10:20
work to be good enough right and what we

00:10:16 --> 00:10:23
first did was got a lot of training data

00:10:19 --> 00:10:25
in a far field setting and that was

00:10:22 --> 00:10:28
extremely hard to get because none of it

00:10:24 --> 00:10:31
existed so how do you collect data in

00:10:27 --> 00:10:33
far field set up right with no customer

00:10:30 --> 00:10:36
bases there's no customer base right so

00:10:32 --> 00:10:38
that was first innovation and once we

00:10:35 --> 00:10:41
had that the next thing was okay you if

00:10:37 --> 00:10:44
you have the data first of all we didn't

00:10:40 --> 00:10:46
alk about like what would magical mean

00:10:43 --> 00:10:48
in this kind of a setting what is good

00:10:45 --> 00:10:51
enough for customers right that's always

00:10:47 --> 00:10:54
ince you've never done this before what

00:10:50 --> 00:10:57
would be magical so so it wasn't just a

00:10:53 --> 00:10:59
research problem you had to put some in

00:10:56 --> 00:11:01
terms of accuracy and customer

00:10:58 --> 00:11:02
experience features some stakes on the

00:11:00 --> 00:11:05
ground saying here's where I think

00:11:01 --> 00:11:07
should it should get to so you

00:11:04 --> 00:11:08
established a bar and then how

00:11:06 --> 00:11:11
you measure progress to word is given

00:11:07 --> 00:11:15
you have no customer right now

00:11:10 --> 00:11:17
so from that perspective we went so

00:11:14 --> 00:11:20
first was the data without customers

00:11:16 --> 00:11:24
econd was doubling down on deep

00:11:19 --> 00:11:25
learning as a way to learn and I can

00:11:23 --> 00:11:28
just tell you that the combination of

00:11:24 --> 00:11:31
the two caught our error rates by a

00:11:27 --> 00:11:34
factor of five from where we were when I

00:11:30 --> 00:11:38
started to within six months of having

00:11:33 --> 00:11:40
that data we at that point and I got the

00:11:37 --> 00:11:42
conviction that this will work right so

00:11:39 --> 00:11:45
because that was magical in terms of

00:11:41 --> 00:11:48
when it started working and that reached

00:11:44 --> 00:11:51
the who came close to the magical bar

00:11:47 --> 00:11:55
back to the bar right that we felt would

00:11:50 --> 00:11:57
be where people will use it but it was

00:11:54 --> 00:12:00
critical because you you really have one

00:11:56 --> 00:12:02
chance at this if we had launched in

00:11:59 --> 00:12:04
November 2014 years when we launched and

00:12:01 --> 00:12:07
if it was below the bar I don't think

00:12:03 --> 00:12:08
this category exists if you don't need

00:12:06 --> 00:12:11
the bar

00:12:07 --> 00:12:14
yeah and just having looked at voice

00:12:10 --> 00:12:17
based interactions like in the car or

00:12:13 --> 00:12:19
earlier systems it's a source of huge

00:12:16 --> 00:12:21
frustration for people in fact we use

00:12:18 --> 00:12:24
voice based interaction for collecting

00:12:20 --> 00:12:26
data on subjects to measure frustration

00:12:23 --> 00:12:30
so as a training set for computer vision

00:12:25 --> 00:12:32
for face data so we can get a data set

00:12:29 --> 00:12:33
of frustrated people that's the best way

00:12:31 --> 00:12:35
to get frustrated people is having them

00:12:32 --> 00:12:38
interact with a voice based system in

00:12:34 --> 00:12:40
the car so this is that bar I imagine is

00:12:37 --> 00:12:42
pretty high it was very high and we

00:12:39 --> 00:12:45
talked about how also errors are

00:12:41 --> 00:12:48
perceived from a eyes versus errors by

00:12:44 --> 00:12:51
humans but we are not done with the

00:12:47 --> 00:12:52
problems that ended up we had to solve

00:12:50 --> 00:12:59
to get it to launch so do you want the

00:12:51 --> 00:13:01
next one so the next one was what I

00:12:58 --> 00:13:03
think of as multi-domain

00:13:00 --> 00:13:07
atural language understanding it's very

00:13:02 --> 00:13:11
I wouldn't say easy but it is during

00:13:06 --> 00:13:15
those days solving it understanding in

00:13:10 --> 00:13:18
one domain and narrow domain was doable

00:13:14 --> 00:13:20
but for these multiple domains like

00:13:17 --> 00:13:23
music like information

00:13:19 --> 00:13:24
other kinds of household productivity

00:13:22 --> 00:13:26
alarms timers

00:13:23 --> 00:13:28
even though it wasn't as big as it is in

00:13:25 --> 00:13:29
terms of the number of skills Alexa has

00:13:27 --> 00:13:33
and the confusion space has like grown

00:13:28 --> 00:13:35
by three orders of magnitude it was

00:13:32 --> 00:13:38
till daunting even those days and again

00:13:34 --> 00:13:40
o customer base here again no customer

00:13:37 --> 00:13:41
base so now you're looking at meaning

00:13:39 --> 00:13:43
understanding and intent understanding

00:13:40 --> 00:13:45
and taking actions on behalf of

00:13:42 --> 00:13:49
customers based on their request and

00:13:44 --> 00:13:52
that is the next hard problem even if

00:13:48 --> 00:13:56
you have gotten the words recognized how

00:13:51 --> 00:13:59
do you make sense of them in those days

00:13:55 --> 00:14:02
there was still a lot of emphasis on

00:13:58 --> 00:14:04
rule-based systems for writing grammar

00:14:01 --> 00:14:06
patterns to understand the intent but we

00:14:03 --> 00:14:09
had a statistical first offer which even

00:14:05 --> 00:14:11
then where foreign language

00:14:08 --> 00:14:14
understanding we had in even those

00:14:10 --> 00:14:16
starting days and an entity recognizer

00:14:13 --> 00:14:20
and an intent classifier which was all

00:14:15 --> 00:14:22
trained statistically in fact we had to

00:14:19 --> 00:14:26
build the deterministic matching as

00:14:21 --> 00:14:27
fall-off to fix bugs that statistical

00:14:25 --> 00:14:30
models have right so it was just a

00:14:26 --> 00:14:32
different mindset where we focused on

00:14:29 --> 00:14:34
data-driven statistical understanding

00:14:31 --> 00:14:37
wins in the end if you have a huge a

00:14:33 --> 00:14:38
said yes it is contingent on that and

00:14:36 --> 00:14:42
that's why it came back to how do you

00:14:37 --> 00:14:45
get the data before customers the fact

00:14:41 --> 00:14:48
hat this is why data becomes crucial to

00:14:44 --> 00:14:50
get at the point that you have the

00:14:47 --> 00:14:53
understanding system built in build up

00:14:49 --> 00:14:55
and notice that for here we were talking

00:14:52 --> 00:14:58
about human machine dialogue even those

00:14:54 --> 00:15:01
arly days even it was very much

00:14:57 --> 00:15:03
transactional do one thing one shot a

00:15:00 --> 00:15:05
trances in great way there was a lot of

00:15:02 --> 00:15:07
debate on how much should Alex our talk

00:15:04 --> 00:15:12
back in terms of if you misunderstood

00:15:06 --> 00:15:14
you or you said play songs by the stones

00:15:11 --> 00:15:17
and let's say it doesn't know you know

00:15:14 --> 00:15:20
early days knowledge can be sparse or

00:15:16 --> 00:15:24
the stones right I the Rolling Stones

00:15:19 --> 00:15:27
right so our and you don't want them

00:15:23 --> 00:15:28
atch to be Stone Temple Pilots or

00:15:26 --> 00:15:31
Rolling Stones right so you don't know

00:15:27 --> 00:15:32
hich one it is so these kind of other

00:15:30 --> 00:15:35
signals to

00:15:31 --> 00:15:38
and now there we had great assets right

00:15:34 --> 00:15:40
from Amazon in terms of new acts like

00:15:37 --> 00:15:42
what is it what kind of yeah how do you

00:15:39 --> 00:15:44
solve that problem in terms of what we

00:15:41 --> 00:15:47
think of it as an entity resolution

00:15:43 --> 00:15:49
problem right so one is it right I mean

00:15:46 --> 00:15:51
the even if you figured out the stones

00:15:48 --> 00:15:54
is an entity you have to resolve it to

00:15:50 --> 00:15:55
whether it's the stones or the temple

00:15:53 --> 00:15:58
violence or some other stones maybe I

00:15:54 --> 00:16:01
misunderstood is the resolution the job

00:15:57 --> 00:16:02
of the algorithm or is the job of UX

00:16:00 --> 00:16:05
communicating with the human to help

00:16:01 --> 00:16:09
there as well there is both right it is

00:16:04 --> 00:16:11
lot you want 90% or high 90s to be done

00:16:08 --> 00:16:14
without any further questioning or UX

00:16:10 --> 00:16:17
right so but that it's absolutely okay

00:16:13 --> 00:16:18
just like as humans we asked the

00:16:16 --> 00:16:21
question I didn't understand your likes

00:16:17 --> 00:16:22
yeah it's fine for a lecture location

00:16:20 --> 00:16:25
you say I did not understand you right

00:16:21 --> 00:16:26
and and that's a important way to learn

00:16:24 --> 00:16:28
and I'll talk about where we have come

00:16:25 --> 00:16:31
with more self learning with these kind

00:16:27 --> 00:16:34
of feedback signals but in those days

00:16:30 --> 00:16:36
just solving the ability of

00:16:33 --> 00:16:38
understanding the intent and resolving

00:16:35 --> 00:16:40
to an action where action could be play

00:16:37 --> 00:16:44
a particular artist or a particular song

00:16:39 --> 00:16:46
was Superhawk again to the bar was high

00:16:43 --> 00:16:50
as you're talking about right so while

00:16:45 --> 00:16:53
we launched it in sort of 13 big domains

00:16:49 --> 00:16:55
I would say in terms of or thing we

00:16:52 --> 00:16:58
think of it as 30 in the big skills we

00:16:54 --> 00:17:00
had like music is a massive one when we

00:16:57 --> 00:17:03
launched it and now we have 90,000 plus

00:16:59 --> 00:17:03
kills on Alexa

00:17:08 --> 00:17:11
you

<!-- YOUTUBE_TRANSCRIPT_END -->
