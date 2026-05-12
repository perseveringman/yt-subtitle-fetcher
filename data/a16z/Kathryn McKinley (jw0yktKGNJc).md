---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "jw0yktKGNJc"
title: "Kathryn McKinley"
video_url: "https://www.youtube.com/watch?v=jw0yktKGNJc"
thumbnail_url: "https://i.ytimg.com/vi/jw0yktKGNJc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=jw0yktKGNJc"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-28T20:53:12.000Z"
upload_date: "2017-07-28"
duration_seconds: 1017
duration_human: "16:57"
view_count: 277
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:23:46.260Z"
---

# Kathryn McKinley

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=jw0yktKGNJc
- video_id: jw0yktKGNJc
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-28T20:53:12.000Z
- upload_date: 2017-07-28
- duration: 16:57
- view_count: 277
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:09 --> 00:00:20
who's this how fast is he go

00:00:15 --> 00:00:20
so fastest man on earth 24 miles per

00:00:19 --> 00:00:27
hour

00:00:19 --> 00:00:27
Jenova disses James born ho our intern

00:00:26 --> 00:00:34
he's faster how do I know my cell phone

00:00:30 --> 00:00:39
tells me that why does that happen

00:00:33 --> 00:00:42
because when we write a app that uses

00:00:38 --> 00:00:46
ensors right now we read two sensors

00:00:41 --> 00:00:51
wait five seconds compute the speed and

00:00:45 --> 00:00:54
we get trash alright and the reason we

00:00:50 --> 00:00:58
get trash is because occasionally that

00:00:53 --> 00:01:01
he GPS sensor is down occasionally your

00:00:57 --> 00:01:02
government will make the sensors bad on

00:01:00 --> 00:01:06
purpose

00:01:01 --> 00:01:08
sometimes a building is including one of

00:01:05 --> 00:01:10
the sensors and you need all the

00:01:07 --> 00:01:12
satellites to be communicating with the

00:01:09 --> 00:01:14
phone at least four or five to get

00:01:11 --> 00:01:16
really accurate readings and so the

00:01:13 --> 00:01:21
quality of the sensor reading that you

00:01:15 --> 00:01:24
get at any time is varies a lot all

00:01:20 --> 00:01:26
right so this is an example of James

00:01:23 --> 00:01:29
walking around the Microsoft campus and

00:01:25 --> 00:01:32
the different amounts of error that each

00:01:28 --> 00:01:37
of these sensors readings gave us and

00:01:31 --> 00:01:40
that's a problem for using sensors that

00:01:36 --> 00:01:42
give you estimate and other kinds of

00:01:39 --> 00:01:44
applications for example machine

00:01:41 --> 00:01:48
learning is also giving you an estimate

00:01:43 --> 00:01:50
so how you're reasoning and and image

00:01:47 --> 00:01:53
understanding and all sorts of

00:01:49 --> 00:01:55
applications we're using today aren't

00:01:52 --> 00:01:58
giving us perfect answers yet we don't

00:01:54 --> 00:02:00
have the tools to interpret those

00:01:57 --> 00:02:02
answers we don't have the programming

00:01:59 --> 00:02:06
models and that's what I'm going to talk

00:02:01 --> 00:02:08
to you about today so we've got a basic

00:02:05 --> 00:02:11
programming model called uncertainty and

00:02:07 --> 00:02:12
then I'm going to motivate that once you

00:02:10 --> 00:02:14
have an estimate it's usually not good

00:02:11 --> 00:02:16
enough you need to add some domain

00:02:13 --> 00:02:19
knowledge to get it to be correct and

00:02:15 --> 00:02:21
then you have a bunch of programs that

00:02:18 --> 00:02:23
are producing the same answer every time

00:02:20 --> 00:02:26
not aren't producing perfect answers and

00:02:22 --> 00:02:28
what the heck do those programs mean and

00:02:25 --> 00:02:30
so I'm going to talk about these three

00:02:27 --> 00:02:33
things today all right so let's go back

00:02:29 --> 00:02:36
to our simple example and that's the

00:02:32 --> 00:02:38
original program so we want to make

00:02:35 --> 00:02:40
programming with estimates just as easy

00:02:37 --> 00:02:43
as doing this but we want to make it a

00:02:39 --> 00:02:47
lot more accurate so in this case all

00:02:42 --> 00:02:50
we're doing for adding type is is

00:02:46 --> 00:02:53
calling it an uncertain type the

00:02:49 --> 00:02:56
programmer still gets to use it as if

00:02:52 --> 00:02:59
it's an integer or a Geo coordinate in

00:02:55 --> 00:03:02
this case so that the programming model

00:02:58 --> 00:03:04
is still very intuitive and simple so

00:03:01 --> 00:03:08
lots of people can use it hopefully

00:03:03 --> 00:03:11
mostly computer scientists but maybe not

00:03:07 --> 00:03:11
and then instead of speed greater than

00:03:10 --> 00:03:14
before

00:03:10 --> 00:03:18
being a conditional it's now a

00:03:13 --> 00:03:21
hypothesis test and the what it's saying

00:03:17 --> 00:03:25
is is it more likely than not if speed

00:03:20 --> 00:03:25
is greater than 4 all right so how do we

00:03:24 --> 00:03:29
valuate that

00:03:24 --> 00:03:32
well the punchline is just doing that

00:03:28 --> 00:03:36
gives gets rid of a lot of garbage but

00:03:31 --> 00:03:39
not all the garbage all right so we have

00:03:35 --> 00:03:40
a semantics that gives you computing of

00:03:38 --> 00:03:42
a random variables

00:03:39 --> 00:03:46
although the developer is still

00:03:41 --> 00:03:48
computing over the base pipe and then

00:03:45 --> 00:03:51
we're evaluating those conditionals with

00:03:47 --> 00:03:53
a hypothesis test and we embed the

00:03:50 --> 00:03:55
statistics into your programming

00:03:52 --> 00:03:57
language so before in your compiler

00:03:54 --> 00:04:00
class or your programming class you saw

00:03:56 --> 00:04:03
a dataflow semantics for your program

00:03:59 --> 00:04:06
now we have statistical semantics baked

00:04:02 --> 00:04:09
into the runtime how does that work all

00:04:05 --> 00:04:12
right so let's say we have two gaussians

00:04:08 --> 00:04:14
that we're adding together and so we're

00:04:11 --> 00:04:19
presenting those distributions by

00:04:13 --> 00:04:22
random samples so the basic data for

00:04:18 --> 00:04:24
example that comes from the GPS has to

00:04:21 --> 00:04:27
give us an error model so we're still

00:04:23 --> 00:04:29
relying on some expertise the GPS

00:04:26 --> 00:04:33
programmers they have models of error

00:04:28 --> 00:04:35
for for when you see that little

00:04:32 --> 00:04:38
on your phone you're actually least

00:04:34 --> 00:04:40
likely to be there the GPS error is

00:04:37 --> 00:04:43
looks like a donut it's a rally

00:04:39 --> 00:04:44
distribution so you're actually likely

00:04:42 --> 00:04:48
to be in a little circle around where

00:04:43 --> 00:04:52
that dot is all right so each data

00:04:47 --> 00:04:56
provider that's producing an estimate or

00:04:51 --> 00:04:58
someone who experimentally evaluates it

00:04:55 --> 00:05:01
has to develop an error model about the

00:04:57 --> 00:05:04
data so there is some expertise required

00:05:00 --> 00:05:07
but not on the consumer of the estimate

00:05:03 --> 00:05:09
but on the provider of the estimate all

00:05:06 --> 00:05:11
right so now when you add those two

00:05:08 --> 00:05:13
things together you get another

00:05:10 --> 00:05:16
distribution and you can see the error

00:05:12 --> 00:05:18
got wider and that's another problem

00:05:15 --> 00:05:20
once you start computing with an

00:05:17 --> 00:05:23
estimate and adding it together adding

00:05:19 --> 00:05:26
more stuff to it you get increases in

00:05:22 --> 00:05:30
errors and that's why we got a James

00:05:25 --> 00:05:33
walking at 89 miles per hour all right

00:05:29 --> 00:05:38
so when the program you write down to

00:05:32 --> 00:05:42
equals a plus B instead of evaluating

00:05:37 --> 00:05:46
that immediately the runtime builds a

00:05:41 --> 00:05:49
Bayesian network all right and then once

00:05:45 --> 00:05:52
you get to a conditional that's when the

00:05:49 --> 00:05:54
network evaluates that page or that's

00:05:51 --> 00:05:56
when the programming language

00:05:53 --> 00:05:59
implementation evaluates the expressions

00:05:55 --> 00:06:02
that you build up okay and the reason

00:05:58 --> 00:06:04
for that is only when you see that

00:06:01 --> 00:06:08
conditional do you need to know how

00:06:03 --> 00:06:11
precise this computation needs to be so

00:06:07 --> 00:06:13
in traditional programming probabilistic

00:06:10 --> 00:06:16
programming languages that aren't widely

00:06:12 --> 00:06:18
used right now what happens is you

00:06:15 --> 00:06:20
pretend it needs to be incredibly

00:06:17 --> 00:06:23
accurate but it depends on how you're

00:06:19 --> 00:06:26
using that value until we use that to

00:06:22 --> 00:06:30
improve the efficiency of our runtime so

00:06:25 --> 00:06:32
for example if we go back to our simple

00:06:29 --> 00:06:36
computation is speed greater than four

00:06:31 --> 00:06:38
keep it up but all we have to do is take

00:06:35 --> 00:06:40
a few samples that say in this

00:06:37 --> 00:06:42
probability distribution it's very

00:06:39 --> 00:06:43
likely you're grading going greater than

00:06:41 --> 00:06:45
four miles per hour

00:06:42 --> 00:06:47
so we're going to give you kudos keep

00:06:44 --> 00:06:49
running and we're not going to say

00:06:46 --> 00:06:53
anything to you if you stop to get water

00:06:48 --> 00:06:57
alright and that's the probability of

00:06:52 --> 00:07:00
the speed greater than four and now we

00:06:56 --> 00:07:04
also let you control false positives and

00:06:59 --> 00:07:06
false negatives so if you want to be

00:07:03 --> 00:07:10
very confident going greater than four

00:07:05 --> 00:07:14
you can increase it but you can specify

00:07:09 --> 00:07:17
that in the conditional so this gives

00:07:13 --> 00:07:18
you the power to say I don't care if I

00:07:16 --> 00:07:20
have lost positives or negatives so I

00:07:17 --> 00:07:24
can have very low confidence or I could

00:07:19 --> 00:07:28
say I want to be really sure if I'm if

00:07:23 --> 00:07:30
I'm going to give out money for example

00:07:27 --> 00:07:32
that it's highly probable that somebody

00:07:29 --> 00:07:34
did what they said they did what we're

00:07:31 --> 00:07:39
going to do all right

00:07:33 --> 00:07:42
so this lets you we go back to our

00:07:38 --> 00:07:46
example in our naive implementation we

00:07:41 --> 00:07:50
had 30 false positives for a data set of

00:07:45 --> 00:07:53
several hundred points and then just by

00:07:49 --> 00:07:56
putting the uncertainty type system in

00:07:52 --> 00:07:59
there and having a probability of

00:07:55 --> 00:08:01
greater than 50 that brought us down to

00:07:58 --> 00:08:03
four false positives and then if we

00:08:00 --> 00:08:06
wanted to be highly confident in this

00:08:02 --> 00:08:11
imple example we can increase the

00:08:05 --> 00:08:13
confidence to 90% and whoops and my

00:08:10 --> 00:08:16
animations didn't work perfectly here

00:08:12 --> 00:08:19
and we get no no false positives in this

00:08:15 --> 00:08:24
imple example all right

00:08:18 --> 00:08:28
so now let's think about once you have a

00:08:23 --> 00:08:32
GPS reading or a machine learning result

00:08:27 --> 00:08:36
for example a list of search results

00:08:31 --> 00:08:40
from being or array or a speech

00:08:35 --> 00:08:43
recognition of a phrase you do something

00:08:39 --> 00:08:46
with it and usually what you do is you

00:08:42 --> 00:08:49
add context and so I'm going to talk

00:08:45 --> 00:08:51
about context for GPS because hopefully

00:08:48 --> 00:08:54
it's built up a little intuition for you

00:08:50 --> 00:08:56
all about GPS so GPS is used in all

00:08:53 --> 00:08:57
sorts of settings right now so on the

00:08:55 --> 00:08:59
band we

00:08:56 --> 00:09:01
can do fitness tracking how long have

00:08:58 --> 00:09:03
you been running did you go uphill

00:09:00 --> 00:09:06
what was your heart rate we have

00:09:02 --> 00:09:10
pressure so the GPS reading can tell us

00:09:05 --> 00:09:15
how fast you're going and or I can use

00:09:09 --> 00:09:17
GPS in in a navigation system and then

00:09:14 --> 00:09:21
you're probably in a car especially that

00:09:16 --> 00:09:22
that GPS is definitely in a car

00:09:20 --> 00:09:26
because it's attached to the dashboard

00:09:21 --> 00:09:30
so you're most likely on a road or if

00:09:25 --> 00:09:33
you have a GPS reading that for Austin

00:09:29 --> 00:09:35
earby Austin restaurants you're going

00:09:32 --> 00:09:38
to use the context of where you are in

00:09:34 --> 00:09:40
very different ways and so right now

00:09:37 --> 00:09:42
most applications once they get an

00:09:39 --> 00:09:43
estimate from somewhere they add

00:09:41 --> 00:09:46
information to it

00:09:42 --> 00:09:48
hey combine sensors so for example when

00:09:45 --> 00:09:51
we're doing fitness applications on the

00:09:47 --> 00:09:55
band we combine pressure which is your

00:09:50 --> 00:09:58
heartrate is is a is on a sensor and we

00:09:54 --> 00:10:01
can combine acceleration altitude and

00:09:57 --> 00:10:03
istance that you go and that's how we

00:10:00 --> 00:10:07
compute how fast you're going all right

00:10:02 --> 00:10:09
so in order to use most estimates and

00:10:06 --> 00:10:12
machine learning you're adding context

00:10:08 --> 00:10:15
alright so what do you do when you add

00:10:11 --> 00:10:18
context well it's a Bayesian of

00:10:14 --> 00:10:20
reasoning you want to say here's my GPS

00:10:17 --> 00:10:23
that green line so that's my GPS

00:10:19 --> 00:10:26
likelihood that I get from it and then

00:10:22 --> 00:10:28
I've got that red road that says where

00:10:25 --> 00:10:32
the road is and then I'm going to put

00:10:27 --> 00:10:34
ogether I want to say that most likely

00:10:31 --> 00:10:37
I'm on a road and we call this road

00:10:33 --> 00:10:42
snapping and right now you can write

00:10:36 --> 00:10:44
this code but if you've looked at the

00:10:41 --> 00:10:46
GPS code it's a mess because there's no

00:10:43 --> 00:10:49
programming language help to you there's

00:10:45 --> 00:10:51
no inference that people are using it's

00:10:48 --> 00:10:54
a bunch of ad hoc heuristics and it's a

00:10:50 --> 00:10:57
mess so in our programming language we

00:10:53 --> 00:11:00
add two simple Bayesian constructs one

00:10:56 --> 00:11:02
that lets you build up probability

00:10:59 --> 00:11:04
distributions so for example saying

00:11:01 --> 00:11:07
you're highly likely on a road ninety

00:11:03 --> 00:11:10
nine percent and then then we have

00:11:06 --> 00:11:12
composition with the Bayesian inference

00:11:09 --> 00:11:14
we use pound and we're still where we're

00:11:11 --> 00:11:17
not as good as Chris you can't go

00:11:13 --> 00:11:18
download this code today but we're

00:11:16 --> 00:11:20
working through the open source stuff at

00:11:17 --> 00:11:22
Microsoft and hopefully you'll be able

00:11:19 --> 00:11:24
to download it soon if you have better

00:11:21 --> 00:11:26
suggestions for syntax I'm happy to take

00:11:23 --> 00:11:29
them all right and then what's then I

00:11:25 --> 00:11:32
miss one point so so now our

00:11:28 --> 00:11:36
implementation because it has more

00:11:31 --> 00:11:39
Bayesian logic in it it has to do higher

00:11:35 --> 00:11:43
order inference and but we've restricted

00:11:38 --> 00:11:45
the programming model quite a bit and by

00:11:42 --> 00:11:47
restricting the programming model we

00:11:44 --> 00:11:50
make it easier for many developers to

00:11:46 --> 00:11:52
use but we also get a big advantage in

00:11:49 --> 00:11:54
terms of what statistics we implement in

00:11:51 --> 00:11:57
the runtime and so we have a new

00:11:53 --> 00:11:59
algorithm called sequential likelihood

00:11:56 --> 00:12:02
re weighting that lets us have an

00:11:58 --> 00:12:05
efficient runtime I'd be happy to talk

00:12:01 --> 00:12:09
about that more later so now in this

00:12:04 --> 00:12:11
case you can write essentially in two

00:12:08 --> 00:12:14
slides of code and I'm just showing you

00:12:10 --> 00:12:16
one of the slides something that samples

00:12:13 --> 00:12:20
from the nearby roads and then you can

00:12:15 --> 00:12:23
say my new location is my GPS likelihood

00:12:19 --> 00:12:27
smashed together with my road prior and

00:12:22 --> 00:12:32
now that pops me back on the road so for

00:12:26 --> 00:12:37
our data we show the original blue dots

00:12:31 --> 00:12:40
which is on a bus nearer actually on the

00:12:36 --> 00:12:42
road and in two lines of code we've

00:12:39 --> 00:12:44
mostly gotten you on the road because

00:12:41 --> 00:12:46
the GPS evidence was very strong we

00:12:43 --> 00:12:48
didn't always have you on the road now

00:12:45 --> 00:12:51
depending on how you want to program

00:12:47 --> 00:12:54
this application you can weight the road

00:12:50 --> 00:12:57
evidence more highly or not depends on

00:12:53 --> 00:13:00
the application but what used to take

00:12:56 --> 00:13:02
thousands of lines of code now takes two

00:12:59 --> 00:13:06
and that's the point of what we're

00:13:01 --> 00:13:08
talking about today all right now what's

00:13:05 --> 00:13:12
it mean that we have all these programs

00:13:07 --> 00:13:14
that aren't aren't precise so in a

00:13:11 --> 00:13:16
precise program you might say I'm going

00:13:13 --> 00:13:19
to assert that this file is not no and

00:13:16 --> 00:13:21
on every execution had better not be no

00:13:18 --> 00:13:23
and you're good to go and you can prove

00:13:20 --> 00:13:25
a lot of things there's a lot

00:13:22 --> 00:13:27
programming language theorists including

00:13:24 --> 00:13:31
some here today they can tell you how to

00:13:26 --> 00:13:35
prove this all right and you test verify

00:13:30 --> 00:13:38
and check at run time now we don't have

00:13:34 --> 00:13:40
that anymore in in for example

00:13:37 --> 00:13:43
approximate computing we're going to

00:13:39 --> 00:13:46
degrade results on purpose in in these

00:13:42 --> 00:13:49
stimates we don't have perfectly

00:13:45 --> 00:13:53
accurate mostly on the road is all we

00:13:48 --> 00:13:55
can say and in another realm which I

00:13:52 --> 00:14:00
like to dabble a little bit in privacy

00:13:54 --> 00:14:06
we we want to obfuscate data so that we

00:13:59 --> 00:14:08
can say for example that that all of you

00:14:05 --> 00:14:10
give the salary information and we can

00:14:07 --> 00:14:12
compute an average salary but I can't

00:14:09 --> 00:14:17
ell what any one of your salaries is

00:14:11 --> 00:14:18
based on this average and there's a but

00:14:16 --> 00:14:21
we can't can we prove our

00:14:17 --> 00:14:25
implementations actually do this well

00:14:20 --> 00:14:29
now we have a traditional assertions

00:14:24 --> 00:14:32
can't do that and so we have a new way

00:14:28 --> 00:14:37
to do this with a probabilistic assert

00:14:31 --> 00:14:39
ion trying to speed up here and so

00:14:36 --> 00:14:42
instead of saying assert e we're going

00:14:38 --> 00:14:45
to have a probabilistic insertion with

00:14:42 --> 00:14:49
probability P knee how strong you want

00:14:44 --> 00:14:55
it to be and and rich I love you you

00:14:48 --> 00:14:58
just keep nodding it's fantastic I'm so

00:14:54 --> 00:15:01
glad I'm making you happy and then we

00:14:57 --> 00:15:03
have good confidence all right I tell my

00:15:00 --> 00:15:09
students always look at the happy person

00:15:02 --> 00:15:11
who's nodding and so now we can say now

00:15:08 --> 00:15:14
this isn't exactly what you want to

00:15:10 --> 00:15:18
prove about a probabilistic program ok

00:15:13 --> 00:15:20
for privacy this says that the average

00:15:17 --> 00:15:22
is close to the real average but we also

00:15:19 --> 00:15:25
want to prove that your data wasn't

00:15:21 --> 00:15:27
revealed by computing the average all

00:15:24 --> 00:15:30
right and so we can't we've taken some

00:15:26 --> 00:15:32
good steps in this direction but we

00:15:29 --> 00:15:35
haven't done the very hardest step which

00:15:31 --> 00:15:36
is to prove in the implementation of

00:15:34 --> 00:15:39
differential privacy

00:15:35 --> 00:15:42
ou actually get it so I'd be happy to

00:15:38 --> 00:15:45
collaborate with people on that so what

00:15:41 --> 00:15:48
we what I've done today hopefully is

00:15:44 --> 00:15:51
used a simple example to motivate a

00:15:47 --> 00:15:55
general area that all of us in this room

00:15:50 --> 00:15:58
have to deal with because data is just

00:15:54 --> 00:16:00
not good all the time and it varies a

00:15:57 --> 00:16:02
lot as to how good it is today versus

00:15:59 --> 00:16:05
how good it is tomorrow and how you

00:16:01 --> 00:16:07
reason about that in programs really

00:16:04 --> 00:16:09
matters how we make decisions in crisis

00:16:06 --> 00:16:11
if we have a bunch of bad data versus a

00:16:08 --> 00:16:13
bunch of good data it shouldn't matter

00:16:10 --> 00:16:15
and we should have programming language

00:16:12 --> 00:16:17
support that does that and we're going

00:16:14 --> 00:16:20
to see more and more of this with

00:16:16 --> 00:16:26
estimates coming from things like farms

00:16:19 --> 00:16:28
from for example the the applications

00:16:25 --> 00:16:31
that Chris described earlier those

00:16:27 --> 00:16:33
models have errors in them are the

00:16:30 --> 00:16:35
models reasoning about how good or bad

00:16:32 --> 00:16:37
they think the data is is this a

00:16:34 --> 00:16:40
trustworthy Journal versus is this

00:16:36 --> 00:16:42
omebody's blog that just made made

00:16:39 --> 00:16:45
something up for this day as we saw in

00:16:41 --> 00:16:48
the presidential debates recently so

00:16:44 --> 00:16:52
thank you for your attention

00:16:47 --> 00:16:52
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
