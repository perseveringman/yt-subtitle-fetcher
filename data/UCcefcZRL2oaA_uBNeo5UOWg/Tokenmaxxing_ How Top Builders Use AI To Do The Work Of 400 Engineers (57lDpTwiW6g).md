---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "57lDpTwiW6g"
title: "Tokenmaxxing: How Top Builders Use AI To Do The Work Of 400 Engineers"
video_url: "https://www.youtube.com/watch?v=57lDpTwiW6g"
thumbnail_url: "https://i.ytimg.com/vi/57lDpTwiW6g/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=57lDpTwiW6g"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2026-05-08T14:30:06.000Z"
upload_date: "2026-05-08"
duration_seconds: 2489
duration_human: "41:29"
view_count: 52122
like_count: 1154
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-05-12T03:18:02.748Z"
---

# Tokenmaxxing: How Top Builders Use AI To Do The Work Of 400 Engineers

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=57lDpTwiW6g
- video_id: 57lDpTwiW6g
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2026-05-08T14:30:06.000Z
- upload_date: 2026-05-08
- duration: 41:29
- view_count: 52122
- like_count: 1154
- has_subtitle: true
- language: en-US
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

We're entering a new era of software where a single person, working with AI agents, can build products that previously required entire teams.

In this episode of Lightcone, the hosts break down the rise of AI coding agents, "tokenmaxxing", and the emerging workflows behind tools like Claude Code and OpenClaw. They discuss why AI systems today feel less like productivity tools and more like collaborators, why the future of AI should be personal and user-controlled, and how founders are starting to build software in completely new ways.

00:00 — Will you control your AI?
00:47 — Coding again after 13 years
01:56 — Rebuilding a startup with Claude Code
05:50 — Software that thinks like a journalist
07:09 — The rise of “tokenmaxxing”
10:07 — The accidental creation of GStack
14:21 — The workflow behind 400x output
20:59 — Thin Harness, Fat Skills
24:35 — AI agents are like Ferraris
27:12 — The future of personal AI
38:37 — Buying back time with tokens

Apply to Y Combinator: https://www.ycombinator.com/apply
Work at a startup: https://www.ycombinator.com/jobs

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
I think that's like the defining

00:00:02 --> 00:00:08
question like will you have control over

00:00:05 --> 00:00:10
your own tools or will your tools have

00:00:07 --> 00:00:13
control over you? Using OpenClaw these

00:00:09 --> 00:00:16
days is like driving a Ferrari and it's

00:00:12 --> 00:00:17
like exhilarating. It's insane. Like you

00:00:15 --> 00:00:19
get to do things like it figures things

00:00:16 --> 00:00:21
out you would never think a machine

00:00:18 --> 00:00:23
could figure out and it does it so

00:00:20 --> 00:00:24
quickly. But then it's also like a

00:00:22 --> 00:00:27
Ferrari and that you better be a

00:00:23 --> 00:00:29
mechanic. like it's a Ferrari that will

00:00:26 --> 00:00:31
break down on the side of the road, you

00:00:28 --> 00:00:33
know, when you most need it and you need

00:00:30 --> 00:00:35
to get out with your wrench and pop the

00:00:32 --> 00:00:36
hood and like f fix it, you know, you're

00:00:34 --> 00:00:39
gonna have to fix it yourself. And so

00:00:35 --> 00:00:43
this is a very exciting time in uh

00:00:38 --> 00:00:43
computer science and technology.

00:00:47 --> 00:00:52
Welcome back to a special episode of the

00:00:49 --> 00:00:54
light cone. In this episode, we're going

00:00:51 --> 00:00:57
to talk about how Gary Tan got back to

00:00:53 --> 00:00:59
building. If you follow us on Twitter,

00:00:56 --> 00:01:01
you'll know that after a multi-year

00:00:58 --> 00:01:04
hiatus to become an investor, Gary Tan

00:01:00 --> 00:01:05
is back to being a builder. And in the

00:01:03 --> 00:01:08
last couple months, he shipped hundreds

00:01:04 --> 00:01:10
of thousands of lines of code and built

00:01:07 --> 00:01:12
popular open- source projects that have

00:01:09 --> 00:01:14
gone from nothing to more than 100,000

00:01:11 --> 00:01:16
stars on GitHub. And he did all of this

00:01:13 --> 00:01:19
while having a very demanding job

00:01:15 --> 00:01:20
running YC full-time. A lot of people on

00:01:18 --> 00:01:22
the internet don't even think that this

00:01:19 --> 00:01:24
possible and are somewhat like in

00:01:21 --> 00:01:25
disbelief, but it actually happened. We

00:01:23 --> 00:01:27
know because we were here to see the

00:01:24 --> 00:01:28
whole thing. And so today we're going to

00:01:26 --> 00:01:31
talk about how he did it.

00:01:27 --> 00:01:34
>> Well, I'm relatively uh shocked myself.

00:01:30 --> 00:01:36
So I'm amazed as well. It was 13 years

00:01:33 --> 00:01:38
of not coding and then suddenly boom,

00:01:35 --> 00:01:40
I'm doing about 400x the amount of work

00:01:37 --> 00:01:42
that I was that year. The last time I

00:01:39 --> 00:01:45
was even sort of like twothirds of the

00:01:42 --> 00:01:46
time writing code. Maybe to start things

00:01:44 --> 00:01:48
off, how about we go back to the project

00:01:46 --> 00:01:50
hat started it all off, which was

00:01:47 --> 00:01:52
Gary's list. Oh, yeah. And just like

00:01:49 --> 00:01:54
talk about a few months ago how you

00:01:51 --> 00:01:55
powered up Cloud Code and like started

00:01:53 --> 00:01:56
to get back to coding.

00:01:54 --> 00:01:57
>> It was right after one of the Lyon

00:01:55 --> 00:02:00
episodes, right?

00:01:56 --> 00:02:02
>> Oh yeah, definitely. I realized that I

00:01:59 --> 00:02:05
wanted to bring together all the people

00:02:01 --> 00:02:07
who believed what I believed um

00:02:04 --> 00:02:12
particularly for California. And so I

00:02:06 --> 00:02:14
started a uh 501c4 and now it's a C3 and

00:02:11 --> 00:02:16
a pack which is sort of what a lot of

00:02:13 --> 00:02:18
political groups do. Um it's a very

00:02:15 --> 00:02:20
common way to bring people together. You

00:02:17 --> 00:02:22
know, everyone focuses on the money but

00:02:19 --> 00:02:24
we're trying to bring together smart

00:02:21 --> 00:02:26
people. Um you know what I learned in

00:02:23 --> 00:02:28
the years of working in San Francisco

00:02:25 --> 00:02:31
politics is that bringing together

00:02:27 --> 00:02:33
people is so powerful and uh that's what

00:02:30 --> 00:02:36
a mass social movement is. And I said,

00:02:32 --> 00:02:38
"Okay, well, why don't I just make a

00:02:35 --> 00:02:40
website where we start doing that?" And

00:02:37 --> 00:02:43
it would just start with um why don't I

00:02:40 --> 00:02:45
start writing about the issues that I'm

00:02:42 --> 00:02:47
worried about? It's like I want children

00:02:44 --> 00:02:49
in school. You know, people watching

00:02:46 --> 00:02:51
this from all around the world might

00:02:48 --> 00:02:54
find it very very strange. Like I find

00:02:50 --> 00:02:57
it strange that uh it was not possible

00:02:53 --> 00:02:59
and still very very hard for a seventh

00:02:56 --> 00:03:03
grader or eighth grader in middle school

00:02:58 --> 00:03:06
in San Francisco public schools to be

00:03:02 --> 00:03:08
able to take algebra. And that was, you

00:03:05 --> 00:03:10
know, a math education thing. like you

00:03:07 --> 00:03:11
know if I didn't get to do that when I

00:03:09 --> 00:03:14
was in public schools in the East Bay of

00:03:10 --> 00:03:16
the Bay Area there's no way I would have

00:03:13 --> 00:03:18
studied engineering at Stanford I never

00:03:15 --> 00:03:19
would have written code I never would

00:03:17 --> 00:03:20
have been able to do any of these things

00:03:18 --> 00:03:22
o it was close to my heart and I

00:03:19 --> 00:03:25
realized like hey it's time to write

00:03:21 --> 00:03:28
code and I ended up building Posterous

00:03:24 --> 00:03:29
my first YC startup from 2008

00:03:27 --> 00:03:30
>> what what was Posterous for people who

00:03:28 --> 00:03:32
don't remember it

00:03:29 --> 00:03:34
>> yeah Posterous was dead simple blogs by

00:03:31 --> 00:03:36
email it grew to be a top 200 website on

00:03:34 --> 00:03:38
the internet and then Twitter ended up

00:03:35 --> 00:03:41
buying it for about $20 million. So that

00:03:37 --> 00:03:44
was sort of like my first bag really. I

00:03:40 --> 00:03:47
actually built it again uh as Post Haven

00:03:43 --> 00:03:50
when Twitter um you know bought it for

00:03:46 --> 00:03:52
the amazing people that we had hired and

00:03:49 --> 00:03:53
uh they shut down the startup. It would

00:03:51 --> 00:03:55
have cost a couple million dollars to

00:03:52 --> 00:03:57
buy it back from Twitter and at the time

00:03:54 --> 00:03:59
I had no money in the world. So the next

00:03:56 --> 00:04:02
best thing was why don't I write it

00:03:58 --> 00:04:05
again? And then uh in January of this

00:04:01 --> 00:04:07
year I ended up writing it a third time.

00:04:04 --> 00:04:11
um only, you know, the first time it

00:04:06 --> 00:04:13
ook about, you know, $4 million and,

00:04:10 --> 00:04:15
you know, six or seven people and about

00:04:12 --> 00:04:17
a year and a half. And then the second

00:04:14 --> 00:04:19
time it, you know, took about, I don't

00:04:16 --> 00:04:22
know, a h 100red grand and two people,

00:04:18 --> 00:04:24
me and my co-founder Brett Gibson, who

00:04:21 --> 00:04:27
now runs initialized,

00:04:23 --> 00:04:30
um, and maybe like three months or so.

00:04:26 --> 00:04:33
And then in this case it took about $200

00:04:29 --> 00:04:37
which was my Claude Code Max account and

00:04:32 --> 00:04:38
probably five days fullfeatured blog

00:04:36 --> 00:04:42
platform does everything you want and

00:04:37 --> 00:04:46
then on top of that like full rag full

00:04:42 --> 00:04:48
um agentic retrieval like be able to you

00:04:45 --> 00:04:50
know sort of go out and read all of the

00:04:47 --> 00:04:53
internet like every tweet I've ever done

00:04:49 --> 00:04:55
recursive crawl deep research of any

00:04:52 --> 00:04:57
topic. The algebra thing is just one of

00:04:54 --> 00:04:59
a whole lot of different issues that we

00:04:56 --> 00:05:02
really really care about. And to be able

00:04:58 --> 00:05:04
to go ingest the internet, you know, see

00:05:01 --> 00:05:07
all the arguments for and against and

00:05:03 --> 00:05:10
then to craft incredibly detailed um

00:05:06 --> 00:05:12
reports on the back end about um what

00:05:10 --> 00:05:14
are all the quotables like I think

00:05:11 --> 00:05:16
people who are big followers of the

00:05:13 --> 00:05:20
Lyone might remember one of our first

00:05:15 --> 00:05:22
episodes about agentic uh systems with

00:05:19 --> 00:05:25
Jake Heler actually. So Jake created

00:05:22 --> 00:05:28
case text and he described exactly what

00:05:24 --> 00:05:30
I ended up building for basically

00:05:27 --> 00:05:34
journalistic uh long- form articles

00:05:30 --> 00:05:36
about any you know sort of issue or uh

00:05:33 --> 00:05:37
you know piece of news that was

00:05:35 --> 00:05:39
happening. And so you know anyone can go

00:05:36 --> 00:05:42
to gararys.org work today and you know

00:05:38 --> 00:05:45
e do about two or three relatively you

00:05:41 --> 00:05:47
know researched all fully sourced um

00:05:44 --> 00:05:49
articles about what's going on in

00:05:46 --> 00:05:50
California and San Francisco and LA and

00:05:48 --> 00:05:51
like how do we build a better

00:05:49 --> 00:05:52
government.

00:05:50 --> 00:05:54
>> This is the thing I feel like people

00:05:51 --> 00:05:56
missed about Gary's little don't fully

00:05:53 --> 00:05:58
get is that it's like the classic thing

00:05:55 --> 00:06:00
we've been talking about here which is

00:05:57 --> 00:06:01
like software was you build software to

00:05:59 --> 00:06:03
let people use it. So it's like you

00:06:00 --> 00:06:05
build a blogging platform and people

00:06:02 --> 00:06:07
like write blogs and maybe like they

00:06:04 --> 00:06:09
start their own substacks eventually or

00:06:06 --> 00:06:12
they write articles. But Gary's List is

00:06:08 --> 00:06:14
both blogging platform but it actually

00:06:11 --> 00:06:16
does the work of a highquality

00:06:13 --> 00:06:17
investigative journalist. It's not just

00:06:15 --> 00:06:18
something that a journalist uses to

00:06:16 --> 00:06:20
publish their articles.

00:06:17 --> 00:06:23
>> Yeah. I mean basically the for the

00:06:19 --> 00:06:25
quivalent of like5 or $10 of Opus

00:06:22 --> 00:06:27
calls. I mean, I would estimate that it

00:06:24 --> 00:06:30
does the work of like, you know, a real

00:06:26 --> 00:06:32
human being that would have to like go

00:06:29 --> 00:06:35
painstakingly through dozens of

00:06:31 --> 00:06:38
articles, read entire books about

00:06:34 --> 00:06:39
certain subjects, uh, annotate them. I

00:06:37 --> 00:06:41
mean, going back to the case text

00:06:38 --> 00:06:44
example, like the thing that Jake taught

00:06:40 --> 00:06:46
me was that you need to think about what

00:06:43 --> 00:06:48
a human would do with the context given.

00:06:46 --> 00:06:50
Like, what would it retrieve? Like, does

00:06:47 --> 00:06:52
it go to the library? What kind of book

00:06:49 --> 00:06:54
would it look for? what does it search

00:06:51 --> 00:06:55
on for search you know on the web I mean

00:06:53 --> 00:06:57
the great thing now is like you don't

00:06:54 --> 00:07:00
have to just do that like you can get

00:06:56 --> 00:07:02
perplexities API and you can do deep

00:06:59 --> 00:07:05
research there you have X's API you can

00:07:01 --> 00:07:07
do deep research there you know Grock's

00:07:04 --> 00:07:09
API if you need to like do research on X

00:07:06 --> 00:07:12
using the Grock API is actually very

00:07:08 --> 00:07:13
good and you can just grab all of

00:07:11 --> 00:07:16
the context this is sort of going back

00:07:12 --> 00:07:18
to the philosophy of uh boil the ocean

00:07:15 --> 00:07:19
which is one of my essays it's like

00:07:17 --> 00:07:22
particularly when building agentic

00:07:18 --> 00:07:26
software now You don't have to settle

00:07:21 --> 00:07:28
for um what we did when we were humans

00:07:25 --> 00:07:31
writing the code like and that goes for

00:07:27 --> 00:07:33
esearch as well. What if you absolutely

00:07:30 --> 00:07:35
boiled the ocean like what is you know

00:07:32 --> 00:07:37
the total completionist like if you were

00:07:34 --> 00:07:40
a human this would take you about a

00:07:36 --> 00:07:43
month to do this research you can just

00:07:39 --> 00:07:45
you know zap the rocks harder. uh you

00:07:42 --> 00:07:48
know you pay more money and you might be

00:07:44 --> 00:07:50
token maxing but you should token max

00:07:47 --> 00:07:53
like basically if there is incremental

00:07:49 --> 00:07:55
work that makes something more complete

00:07:52 --> 00:07:58
more awesome more you know in the case

00:07:54 --> 00:08:01
of um this type of writing like we want

00:07:57 --> 00:08:03
it to be more representative of reality

00:08:00 --> 00:08:06
like you know we don't just settle for

00:08:02 --> 00:08:08
one source when we can get 20 sources

00:08:05 --> 00:08:10
and we can cross reference them we can

00:08:07 --> 00:08:12
figure out like well these 13 sources

00:08:09 --> 00:08:14
ay this and the seven sources disagree

00:08:11 --> 00:08:16
with that and then you know you want to

00:08:13 --> 00:08:19
feed all of that context into like your

00:08:15 --> 00:08:21
core prompt and then you can basically

00:08:18 --> 00:08:23
make a better decision than what you

00:08:20 --> 00:08:25
would like just you know a human being

00:08:22 --> 00:08:27
clicking on a link reading a headline

00:08:24 --> 00:08:28
and that's all you understand and I

00:08:26 --> 00:08:30
think if you token max like that's

00:08:27 --> 00:08:32
actually the coolest thing you can do

00:08:29 --> 00:08:34
now and it's not just in you know

00:08:32 --> 00:08:38
generating articles it's not you know

00:08:33 --> 00:08:40
it's clearly in uh writing code right I

00:08:37 --> 00:08:42
think now it's it's going to permeate

00:08:39 --> 00:08:45
very part of society like every thing

00:08:42 --> 00:08:48
that we would call knowledge work could

00:08:44 --> 00:08:50
be token maxed and um I don't think that

00:08:47 --> 00:08:52
it means that we're going to get rid of

00:08:49 --> 00:08:55
people. I think it means that people

00:08:51 --> 00:08:56
need to still supply uh the agency like

00:08:54 --> 00:08:58
I need this like I'm the one who's

00:08:55 --> 00:09:01
itting here caring about algebra like I

00:08:57 --> 00:09:03
want kids like me who couldn't afford

00:09:00 --> 00:09:05
private school you know San Francisco is

00:09:02 --> 00:09:07
the one city in the world that has the

00:09:04 --> 00:09:10
highest rate of private school

00:09:06 --> 00:09:12
attendance um probably in the entire

00:09:09 --> 00:09:14
country actually and that's not okay

00:09:11 --> 00:09:17
like you shouldn't have to be rich to

00:09:13 --> 00:09:18
have a good education and you know I

00:09:16 --> 00:09:21
don't know why that's controversial and

00:09:17 --> 00:09:24
so for me it's like this you know mass

00:09:20 --> 00:09:28
ort of shift in technology was

00:09:23 --> 00:09:30
happening and then uh I had a need and a

00:09:27 --> 00:09:32
want and a desire and it was a burning

00:09:29 --> 00:09:35
desire like I it hurts me and pains me

00:09:31 --> 00:09:38
to think about 10 12 13year-old kids who

00:09:34 --> 00:09:41
don't know algebra and like could have

00:09:37 --> 00:09:44
but uh some bureaucrat or you know some

00:09:40 --> 00:09:46
virtue signaling person in power says

00:09:43 --> 00:09:49
like actually I don't want that kid who

00:09:45 --> 00:09:51
wants to learn algebra to learn it. So I

00:09:48 --> 00:09:54
think in this process of basically

00:09:50 --> 00:09:58
solving your own pain and need from the

00:09:53 --> 00:10:02
young Gary and building Gary's list, you

00:09:57 --> 00:10:04
sort of discover a lot of patterns on

00:10:01 --> 00:10:06
token maxing and this new way of

00:10:03 --> 00:10:08
building that led you to the next

00:10:05 --> 00:10:11
project which was uh GStack.

00:10:07 --> 00:10:15
>> Like I actually did not plan to make

00:10:10 --> 00:10:17
GStack. All I did was like I uh realized

00:10:14 --> 00:10:20
that I was doing the same things over

00:10:16 --> 00:10:22
and over again and then I got sick of

00:10:19 --> 00:10:24
typing the same thing. So I went into my

00:10:21 --> 00:10:26
Apple notes. I typed in all the things

00:10:23 --> 00:10:28
that I found myself writing over and

00:10:25 --> 00:10:30
over again into Cloud Code and it was

00:10:27 --> 00:10:32
pretty simple stuff. It's like here's

00:10:29 --> 00:10:35
the plan review. One of the things I

00:10:31 --> 00:10:38
started doing is I really love asking

00:10:34 --> 00:10:41
Claude to make asy art diagrams. One of

00:10:38 --> 00:10:43
the things I discovered is um sometimes

00:10:40 --> 00:10:46
Claude would just get confused and like

00:10:42 --> 00:10:48
write bugs or not be complete. But once

00:10:45 --> 00:10:51
I started saying actually before you

00:10:47 --> 00:10:52
start your work make an asky diagram of

00:10:50 --> 00:10:54
all the data flows, all the inputs and

00:10:52 --> 00:10:56
outputs, what are the user flows, what

00:10:54 --> 00:10:58
are the error messages and you can see

00:10:55 --> 00:11:00
this it's like data flow, state

00:10:57 --> 00:11:02
machines, dependency graphs, processing

00:10:59 --> 00:11:05
pipelines, decision trees. Once it did

00:11:01 --> 00:11:07
that, it loaded all of the context in

00:11:04 --> 00:11:08
and then it just did the work more

00:11:06 --> 00:11:10
completely. Like it boiled the ocean

00:11:08 --> 00:11:12
better and it broke down into a bunch of

00:11:10 --> 00:11:15
different sections. Like here's

00:11:11 --> 00:11:16
architecture review, code quality, test.

00:11:14 --> 00:11:18
I mean, one of the things I learned

00:11:15 --> 00:11:20
building Gary's list was that when I was

00:11:17 --> 00:11:23
writing the code myself, I would always

00:11:19 --> 00:11:25
do the minimum amount of testing cuz it

00:11:22 --> 00:11:27
was just like not very fun. I knew I

00:11:24 --> 00:11:29
needed to have it, but I'm here to

00:11:26 --> 00:11:31
write, you know, fun new code. I, you

00:11:28 --> 00:11:33
know, did not like write to write tests.

00:11:30 --> 00:11:34
And then honestly, like I hit all the

00:11:32 --> 00:11:36
things that everyone else hits when they

00:11:33 --> 00:11:39
start vibe coding, which is like this is

00:11:35 --> 00:11:41
lop. It's not working that well. Like

00:11:38 --> 00:11:43
it works fine for the 80% case, but if

00:11:40 --> 00:11:45
any users actually touch it, it starts

00:11:42 --> 00:11:48
falling over. And then that's when I

00:11:44 --> 00:11:49
realized, oh, I can get to 100% test

00:11:47 --> 00:11:52
coverage. I've since learned that 100%

00:11:48 --> 00:11:54
is probably too much. Like hitting 80 to

00:11:51 --> 00:11:56
90% is usually the best practice at this

00:11:53 --> 00:12:00
point. Um, but yeah, this this is

00:11:55 --> 00:12:02
basically the first version of plan-ge-

00:11:59 --> 00:12:05
review. I know, uh, everyone knows the

00:12:01 --> 00:12:07
office hour skill, uh, which is, you

00:12:04 --> 00:12:08
know, what people can use and I still

00:12:06 --> 00:12:10
use when I'm trying to make a brand new

00:12:08 --> 00:12:13
product or a brand new feature. It, uh,

00:12:09 --> 00:12:15
simulates what what we do when we're

00:12:12 --> 00:12:17
working with a company. It's like, how

00:12:14 --> 00:12:19
do you know that people want this? You

00:12:16 --> 00:12:21
know, who's it for? What does it do? And

00:12:18 --> 00:12:23
what's the impact, right? But this is

00:12:20 --> 00:12:25
like the proto skill. Like, this is I

00:12:22 --> 00:12:27
didn't even know skills existed. And I

00:12:24 --> 00:12:29
posted this and it went viral. Like, you

00:12:26 --> 00:12:32
know, 200,000 people saw that. And then

00:12:28 --> 00:12:34
I made another version of it that was a

00:12:31 --> 00:12:36
much more ex uh expansive version. I

00:12:33 --> 00:12:39
called it the mega plan. And then I

00:12:35 --> 00:12:41
ended up um renaming it to the CEO plan.

00:12:38 --> 00:12:43
We've probably talked about metaring

00:12:40 --> 00:12:46
before. I used metaprompting here. I

00:12:42 --> 00:12:49
took the other review plan that we had

00:12:45 --> 00:12:51
and then uh I said, "Okay, well, let's

00:12:48 --> 00:12:53
do a version of this, but like imagine

00:12:50 --> 00:12:55
Brian Chesy sitting with you, right?"

00:12:52 --> 00:12:58
Like Brian Chesy has this great line

00:12:54 --> 00:13:00
about uh what is a 10-star experience.

00:12:57 --> 00:13:02
So and you know the point of it is

00:13:00 --> 00:13:04
everyone thinks about hotels in terms of

00:13:01 --> 00:13:05
like three this is a two three star

00:13:03 --> 00:13:07
experience this is a fourstar experience

00:13:04 --> 00:13:09
and he like goes you know through the

00:13:06 --> 00:13:11
list like five stars. It's like

00:13:08 --> 00:13:12
veryone, you know, yeah, cool. Like,

00:13:10 --> 00:13:14
but he's like, "What's a six-star and

00:13:11 --> 00:13:15
what's a sevenstar and what's an eight

00:13:13 --> 00:13:18
star?" And like he goes all through that

00:13:14 --> 00:13:20
entire list. And um that's one of my

00:13:17 --> 00:13:22
favorite like product and design

00:13:19 --> 00:13:24
exercises to go through like as a mental

00:13:21 --> 00:13:26
exercise. And then the cool thing is

00:13:23 --> 00:13:28
like you can do that every single time

00:13:25 --> 00:13:30
now. And so that's what this is. You

00:13:27 --> 00:13:34
know, this prompt basically tries to

00:13:29 --> 00:13:35
figure out what is the platonic ideal of

00:13:33 --> 00:13:37
uh what this is. These are sort of like

00:13:34 --> 00:13:40
the three the two things that are pretty

00:13:36 --> 00:13:42
awesome. one is uh what is the 10x

00:13:39 --> 00:13:46
check? What is more ambitious and

00:13:41 --> 00:13:47
elivers 10x more value uh for only 2x

00:13:45 --> 00:13:49
the effort,

00:13:46 --> 00:13:51
>> right? And so for whatever reason coming

00:13:48 --> 00:13:54
out of latent spaces helps the model

00:13:50 --> 00:13:56
ike really visualize like so I'm plan

00:13:53 --> 00:14:01
CEO skill I actually really enjoy

00:13:55 --> 00:14:03
because I'm an ADHD C CEO and I love um

00:14:00 --> 00:14:04
potential like pure potential and so

00:14:02 --> 00:14:06
this is like the one like I can't

00:14:03 --> 00:14:09
believe this is just literally two

00:14:05 --> 00:14:11
little sentences but like this unlocks

00:14:08 --> 00:14:14
an incredible amount and so that's how

00:14:10 --> 00:14:16
GStack started actually not as you know

00:14:13 --> 00:14:18
I didn't want it to be anything other

00:14:15 --> 00:14:20
than like well I need to make some

00:14:17 --> 00:14:23
skills and I had heard that people were

00:14:19 --> 00:14:25
making like skill repos. But then the

00:14:22 --> 00:14:28
third thing I did was I started um using

00:14:24 --> 00:14:31
these two skills so much that um my

00:14:27 --> 00:14:32
conductor instance was getting very

00:14:30 --> 00:14:34
backed up. So this is how I use

00:14:31 --> 00:14:36
conductor. Uh this is actually my real

00:14:33 --> 00:14:37
setup like

00:14:35 --> 00:14:38
>> so this is your like daily workflow.

00:14:36 --> 00:14:40
This is how you've been shipping

00:14:37 --> 00:14:41
hundreds of thousands of lines of code a

00:14:39 --> 00:14:43
month. It's all it's all in here.

00:14:40 --> 00:14:46
>> Yeah, that's right. So, I dropped like

00:14:42 --> 00:14:48
13 PRs in the last 48 hours and then,

00:14:45 --> 00:14:50
you know, I you just ceue them up. Like

00:14:47 --> 00:14:53
anytime I come up with a new idea, I

00:14:49 --> 00:14:56
come in and uh here it is. You know, I

00:14:52 --> 00:14:58
love using the CEO skill. I loved using

00:14:55 --> 00:15:00
the skill to like really make it super

00:14:57 --> 00:15:03
well tested. I did that all in plan

00:15:00 --> 00:15:05
mode. Uh and then I'd click approve here

00:15:02 --> 00:15:08
and then, you know, Claude would go and

00:15:04 --> 00:15:11
o all the stuff. And then I did that so

00:15:07 --> 00:15:13
much that I ended up having like 15

00:15:10 --> 00:15:15
different features that were all queued

00:15:12 --> 00:15:17
up waiting for me to manually test it.

00:15:14 --> 00:15:18
Like it passed it, you know, it passed

00:15:16 --> 00:15:21
end to end testing, it passed uh

00:15:17 --> 00:15:23
integration, it passed unit tests, but

00:15:20 --> 00:15:25
like at the end of the day, I still need

00:15:22 --> 00:15:28
to, you know, for Gary's list, it's like

00:15:24 --> 00:15:30
pop open the Rails server and like, you

00:15:27 --> 00:15:32
know, load that user and like make it

00:15:29 --> 00:15:34
into that configuration for that

00:15:31 --> 00:15:36
particular user and like manually just

00:15:33 --> 00:15:38
make sure it works. And I got sick of

00:15:35 --> 00:15:42
doing that and I was trying to use um

00:15:38 --> 00:15:44
clawed encode MCP and it was very very

00:15:41 --> 00:15:45
slow two to three seconds for every

00:15:43 --> 00:15:47
turn.

00:15:44 --> 00:15:50
>> I was like this is not usable for QA but

00:15:46 --> 00:15:51
I had heard that Microsoft had released

00:15:49 --> 00:15:54
playright which is sort of um an

00:15:50 --> 00:15:55
alternative testing framework. In

00:15:53 --> 00:15:58
retrospect it's like actually there was

00:15:54 --> 00:16:00
like agent uh there like agent harness

00:15:57 --> 00:16:01
and like all these other like tools that

00:15:59 --> 00:16:03
I could have used. But the upside and

00:16:00 --> 00:16:05
ownside of Claude Code is it's so easy

00:16:02 --> 00:16:06
to just start something that I just

00:16:04 --> 00:16:09
popped open like I literally went in

00:16:06 --> 00:16:12
here and this is probably what I did.

00:16:08 --> 00:16:17
It's like I'm so sick of using Claude

00:16:11 --> 00:16:22
in in Chrome MCP. It's too slow.

00:16:16 --> 00:16:25
Let's go ahead and wrap Microsoft's

00:16:21 --> 00:16:27
playright.

00:16:24 --> 00:16:29
Can we do that? And then I just pressed

00:16:26 --> 00:16:30
enter. And then, you know, one of the

00:16:28 --> 00:16:33
things that emerged with GStack is that

00:16:29 --> 00:16:34
like this is how I create new features.

00:16:32 --> 00:16:36
Now, of course, you know, what it's

00:16:34 --> 00:16:38
going to do now is like, "Hey, dude, you

00:16:35 --> 00:16:40
already did that." Which is hilarious.

00:16:37 --> 00:16:42
You know, I have bug fixes right next to

00:16:39 --> 00:16:45
giant features. And then, um, the way

00:16:41 --> 00:16:46
GStack works, there's a CEO, there's a

00:16:44 --> 00:16:49
designer, there's actually a developer

00:16:46 --> 00:16:52
experience person in there. There's a

00:16:48 --> 00:16:54
number of design tools, uh, and then

00:16:51 --> 00:16:56
Plange is the last one. And then I

00:16:53 --> 00:16:59
actually usually run SLCEX. And um I

00:16:55 --> 00:17:01
recently added a slashclaw in codeex.

00:16:58 --> 00:17:04
>> So one of the cool things that I

00:17:00 --> 00:17:06
actually learned from uh YC alums I came

00:17:03 --> 00:17:08
to an event and brain totally frazzled

00:17:05 --> 00:17:10
but you know went to one of our batch

00:17:07 --> 00:17:12
events and we were just you shooting the

00:17:09 --> 00:17:15
about what was going on with claude

00:17:11 --> 00:17:19
code versus codeex and at the time I was

00:17:14 --> 00:17:20
a total claude code only guy and uh I

00:17:18 --> 00:17:22
realized oh a lot of people actually

00:17:19 --> 00:17:25
prefer codecs. Why is that? And I

00:17:21 --> 00:17:28
discovered that claude code is ideal for

00:17:24 --> 00:17:29
the ADHD CEO, but once in a while

00:17:27 --> 00:17:31
there's a, you know, claude code will

00:17:28 --> 00:17:33
just BS a bunch of stuff. Like claude

00:17:30 --> 00:17:35
models are very very good, but like they

00:17:32 --> 00:17:37
are not the smartest, it turns out. And

00:17:34 --> 00:17:39
so a lot of people, you know, explained

00:17:36 --> 00:17:42
to me that if you have a problem that's

00:17:38 --> 00:17:46
much crazier. You need the 200 IQ nearly

00:17:41 --> 00:17:48
nonverbal CTO. So you can just call in a

00:17:45 --> 00:17:50
friend and then that's what like /codex

00:17:47 --> 00:17:53
is. It's a, you know, GStack skill that

00:17:50 --> 00:17:55
akes whatever plan your plan is or if

00:17:52 --> 00:17:56
you're out of plan mode and you already

00:17:54 --> 00:17:58
implement it, it'll take your repo and

00:17:56 --> 00:18:00
it'll run codeex in a command line

00:17:58 --> 00:18:02
prompt with the prompt that says find

00:17:59 --> 00:18:05
all the problems and all the bugs and it

00:18:01 --> 00:18:06
reports it back to cloud code and then

00:18:04 --> 00:18:09
you and cloud code can work through

00:18:06 --> 00:18:11
those feed that feedback. Uh, and then I

00:18:08 --> 00:18:14
have since added if you use codeex as

00:18:10 --> 00:18:16
your main coding agent, you can actually

00:18:13 --> 00:18:20
go and type slashclaude and have Claude

00:18:15 --> 00:18:22
come and be the CEO briefly if you want

00:18:19 --> 00:18:24
as well. The cool thing about GStack is

00:18:21 --> 00:18:26
when I run it through this program like

00:18:23 --> 00:18:29
I always I do I start with office hours

00:18:25 --> 00:18:32
CEO review like I do design if there's

00:18:28 --> 00:18:33
UI if um I know a developer needs to use

00:18:31 --> 00:18:35
it which is like practically all of

00:18:32 --> 00:18:38
GStack and GBrain stuff I run the

00:18:34 --> 00:18:40
developer review and then I do review

00:18:37 --> 00:18:42
and then codecs once that plan is done

00:18:39 --> 00:18:45
I've worked through all of the issues

00:18:41 --> 00:18:47
the GStack relies very heavily on ask

00:18:44 --> 00:18:49
user question so because you know and

00:18:46 --> 00:18:52
that's that to me is like really

00:18:48 --> 00:18:54
important that's where the human, you

00:18:51 --> 00:18:56
know, vibe coder, operator, agentic

00:18:53 --> 00:18:58
engineer needs to supply their

00:18:55 --> 00:19:01
understanding of what's going on, what

00:18:58 --> 00:19:03
are we building. There's not really a

00:19:00 --> 00:19:05
substitute to that. It would surprise me

00:19:02 --> 00:19:07
very much if someone really truly did

00:19:04 --> 00:19:09
manage to make a thing that could just

00:19:06 --> 00:19:10
make software without the human in the

00:19:08 --> 00:19:13
loop like that. You know, it's

00:19:09 --> 00:19:16
controversial take, I think, but um I

00:19:12 --> 00:19:18
never want to be entirely out of the

00:19:15 --> 00:19:20
loop. I just want the machine to do the

00:19:17 --> 00:19:22
stuff that I don't want to do. And so,

00:19:19 --> 00:19:23
you know, basically QA is a good

00:19:21 --> 00:19:25
examples. And, you know, I mean, that's

00:19:22 --> 00:19:27
hilarious. Coming back to the demo, it's

00:19:24 --> 00:19:29
like I type something into the modern

00:19:26 --> 00:19:31
version of GStack and it's like, dude,

00:19:28 --> 00:19:33
what are you doing? Like, we already

00:19:30 --> 00:19:36
built that. We have browse. Browse is a

00:19:32 --> 00:19:40
longived HP demon with 70 commands as a

00:19:35 --> 00:19:44
CLI. And then QA is just browse. But,

00:19:39 --> 00:19:46
um, in the prompt for QA, it says look

00:19:43 --> 00:19:49
in your context. What did we do on this

00:19:45 --> 00:19:52
branch? if there's UI or any mutation of

00:19:48 --> 00:19:54
data, go and use the browser to test

00:19:51 --> 00:19:56
hat thing, which is cool. It's like

00:19:53 --> 00:19:58
having a blackbox browser. It blew my

00:19:55 --> 00:20:00
mind when it first worked. It's like

00:19:57 --> 00:20:02
mini AGI is already here. You know, I

00:19:59 --> 00:20:05
you know, I realize this is not true

00:20:01 --> 00:20:08
AGI. True true AGI would be like I'm not

00:20:04 --> 00:20:10
even here. Um, and actually that's fine

00:20:07 --> 00:20:13
in this respect. Like as a builder, you

00:20:09 --> 00:20:15
know, selfishly, uh, I hope that we

00:20:12 --> 00:20:17
never have to stop.

00:20:14 --> 00:20:18
I hope that the machines never figure it

00:20:16 --> 00:20:20
out cuz that would be really cool. Like

00:20:17 --> 00:20:23
then, you know, humans are really

00:20:19 --> 00:20:24
important and like engineers who know

00:20:22 --> 00:20:28
how to do this, who have taste and

00:20:23 --> 00:20:30
esign and product feedback and um you

00:20:27 --> 00:20:32
know, the real customer in mind, like

00:20:29 --> 00:20:34
we're going to be like we basically have

00:20:31 --> 00:20:36
wings for as long as we do. YC Startup

00:20:33 --> 00:20:38
School is back. We're hand selecting the

00:20:35 --> 00:20:41
most promising builders in the world and

00:20:38 --> 00:20:43
flying them out to San Francisco for

00:20:40 --> 00:20:46
July 25th and 26th to discuss the

00:20:42 --> 00:20:48
cutting edge of tech. Apply now for a

00:20:45 --> 00:20:50
spot. Okay, back to the video. I think

00:20:47 --> 00:20:53
you crystallize a lot of these thinking

00:20:49 --> 00:20:55
in this post on X about thin hardness

00:20:52 --> 00:20:56
and fat skills.

00:20:54 --> 00:20:58
>> Oh yes,

00:20:55 --> 00:21:00
>> which actually encompasses all of this

00:20:57 --> 00:21:02
philosophy on how to token max.

00:20:59 --> 00:21:03
>> Yeah. I mean, some of it came out of uh

00:21:01 --> 00:21:06
being trolled on the internet

00:21:02 --> 00:21:07
relentlessly about markdown and like I

00:21:05 --> 00:21:08
you know, I'm just like peddling a

00:21:06 --> 00:21:10
markdown instead of markdown and it's

00:21:07 --> 00:21:11
like, you know, I guess my lived

00:21:09 --> 00:21:13
experience at this point is that

00:21:10 --> 00:21:15
markdown is actually code. It's just

00:21:12 --> 00:21:17
like this compiled in a different way,

00:21:14 --> 00:21:19
but like you can get the computer to do

00:21:16 --> 00:21:20
really astonishing things. Like I mean

00:21:18 --> 00:21:23
even this it's like

00:21:19 --> 00:21:26
>> could we have imagined that I would be

00:21:22 --> 00:21:29
talking to something that has replaced

00:21:25 --> 00:21:30
Visual Studio for like I I don't use

00:21:28 --> 00:21:32
Visual Studio at all. Like there's no

00:21:29 --> 00:21:34
reason to like when I can talk to my

00:21:31 --> 00:21:36
agent and my agent can do this, right?

00:21:33 --> 00:21:39
The article actually the name actually

00:21:35 --> 00:21:42
came from uh our partner Pete Kumin. We

00:21:38 --> 00:21:43
have had to build an internal agent and

00:21:41 --> 00:21:46
you know we call that the harness over

00:21:42 --> 00:21:48
and over again and then at some point

00:21:45 --> 00:21:50
using cloud code all day we realized

00:21:47 --> 00:21:53
like you know why should we rewrite a

00:21:50 --> 00:21:55
version of that over and over again like

00:21:52 --> 00:21:57
you know we should just use the things

00:21:54 --> 00:21:59
that are really awesome as you know

00:21:56 --> 00:22:01
harnesses like a harness is the core

00:21:58 --> 00:22:03
loop that takes the user input gives it

00:22:00 --> 00:22:05
o the LLM runs what the LLM does like

00:22:02 --> 00:22:08
it can do tool calls and things like

00:22:04 --> 00:22:09
that I mean why would we build that like

00:22:07 --> 00:22:12
what we should spending all our time

00:22:08 --> 00:22:14
doing is thinking about what markdown

00:22:11 --> 00:22:16
should there be? And the way to think

00:22:13 --> 00:22:17
about markdown is if you were an event

00:22:15 --> 00:22:20
planner and throwing a wedding and you

00:22:16 --> 00:22:22
were trying to write down a checklist of

00:22:19 --> 00:22:24
how to throw a wedding again, like what

00:22:21 --> 00:22:26
would you what would you write in plain

00:22:23 --> 00:22:29
English to teach the next person who had

00:22:25 --> 00:22:32
to do it what to do? All of that should

00:22:28 --> 00:22:34
be in the markdown. Whereas um all the

00:22:31 --> 00:22:38
things that should you know be

00:22:33 --> 00:22:40
deterministic like um I mean or is is a

00:22:37 --> 00:22:42
real action like a a wedding planner

00:22:39 --> 00:22:44
might have to call like 20 venues right

00:22:41 --> 00:22:46
but you wouldn't use markdown for that

00:22:43 --> 00:22:48
like you would make a you know a call to

00:22:45 --> 00:22:51
Twilio for instance right there's like a

00:22:47 --> 00:22:54
you sort of all of the difficulty in

00:22:50 --> 00:22:56
enantic engineering today is when people

00:22:53 --> 00:22:58
try to do things that should be in

00:22:55 --> 00:23:00
markdown in code and it fails because

00:22:57 --> 00:23:03
code is brittle it doesn't understand

00:22:59 --> 00:23:05
special cases. It actually you know code

00:23:02 --> 00:23:08
literally doesn't understand what you

00:23:04 --> 00:23:11
want or who you are. It is like you know

00:23:07 --> 00:23:14
executing deterministic zeros and ones

00:23:10 --> 00:23:16
in a touring complete loop right like it

00:23:13 --> 00:23:18
doesn't know but then now we have LLMs

00:23:16 --> 00:23:21
that have latent space and they know who

00:23:18 --> 00:23:23
you are and uh it knows what your

00:23:20 --> 00:23:26
motivations are and it can handle

00:23:22 --> 00:23:29
generic cases and then you know a lot of

00:23:25 --> 00:23:31
the the magic right now as an engineer

00:23:28 --> 00:23:35
is like figuring out okay how much of it

00:23:30 --> 00:23:38
is over here in LLM land and how how

00:23:34 --> 00:23:40
much of it is over there in um code

00:23:37 --> 00:23:42
land. And then you know if you combine

00:23:39 --> 00:23:45
that with the other thing I learned

00:23:41 --> 00:23:47
which is like get to 80 to 90% tests

00:23:44 --> 00:23:49
like if it's not tested and you're just

00:23:46 --> 00:23:51
hrowing users in there like it's slop

00:23:48 --> 00:23:54
you know 10x worse than like human

00:23:50 --> 00:23:56
written code cuz like you just have no

00:23:53 --> 00:23:58
idea what's going to happen. Um and so

00:23:55 --> 00:24:00
that's like one of the things that

00:23:57 --> 00:24:01
people have to do. It's like all right,

00:23:59 --> 00:24:02
not only do you need to figure out

00:24:00 --> 00:24:04
what's going on in latent space and

00:24:01 --> 00:24:06
eterministic space, you also have to

00:24:03 --> 00:24:08
make sure that like it's, you know, unit

00:24:05 --> 00:24:10
individually tested and then the

00:24:07 --> 00:24:12
integration is tested. And then going

00:24:09 --> 00:24:14
back to uh boil the ocean, like the

00:24:11 --> 00:24:16
machine doesn't care, it'll just do it.

00:24:13 --> 00:24:17
It's amazing. like just zap the rocks

00:24:15 --> 00:24:20
more and you can get to 90% test

00:24:16 --> 00:24:22
coverage and then you can have a system

00:24:19 --> 00:24:24
that you know is not quite perfect like

00:24:21 --> 00:24:28
you know openclaw right now um there are

00:24:23 --> 00:24:30
lots of like failure cases but it's 95%

00:24:27 --> 00:24:33
there you know it's uh I feel like using

00:24:29 --> 00:24:36
openclaw these days is like driving a

00:24:32 --> 00:24:38
Ferrari and it's like exhilarating it's

00:24:35 --> 00:24:39
insane like you get to do things like it

00:24:37 --> 00:24:41
figures things out you would never think

00:24:38 --> 00:24:44
a machine could figure out and it does

00:24:40 --> 00:24:46
it so quickly uh but then it's also like

00:24:43 --> 00:24:49
a Ferrari and that you better be a

00:24:45 --> 00:24:51
mechanic. Like it's a Ferrari that will

00:24:48 --> 00:24:53
break down on the side of the road, you

00:24:50 --> 00:24:55
know, when you most need it and you need

00:24:52 --> 00:24:56
to get out with your wrench and pop the

00:24:54 --> 00:24:58
hood and like fix it. You know, you're

00:24:55 --> 00:25:01
going to have to fix it yourself. And so

00:24:57 --> 00:25:03
this is a very exciting time in uh

00:25:00 --> 00:25:06
computer science and technology cuz it's

00:25:02 --> 00:25:08
like this is Homebrew Computer Club. Uh,

00:25:05 --> 00:25:10
you know, the moment when the Apple 1

00:25:07 --> 00:25:12
came out, like the Apple 1 created by

00:25:09 --> 00:25:15
Steve Jobs and Steve Waznjak was a

00:25:12 --> 00:25:18
breadboard inside like literally a

00:25:14 --> 00:25:22
wooden case hammered together with like

00:25:17 --> 00:25:24
nails and duct tape, you know, and uh if

00:25:21 --> 00:25:26
you wanted a personal computer, that's

00:25:23 --> 00:25:28
what you had to do. And that's where

00:25:25 --> 00:25:30
we're at right now. like you have

00:25:27 --> 00:25:31
relatively, you know, smart technical

00:25:29 --> 00:25:34
and, you know, people who had to study

00:25:30 --> 00:25:37
computer science have to spend like two

00:25:33 --> 00:25:41
r three hours and like maybe like $500

00:25:36 --> 00:25:42
or $1,000 in both tokens and cloud to

00:25:40 --> 00:25:43
actually get something like that

00:25:41 --> 00:25:45
running. But like once you get it, it's

00:25:42 --> 00:25:47
like we're sort of in the kit car

00:25:44 --> 00:25:49
Ferrari phase. It's like then you can

00:25:46 --> 00:25:50
drive and you can go anywhere and you

00:25:48 --> 00:25:53
know you want you want to shout to the

00:25:49 --> 00:25:55
hills like, "Hey, I got a Ferrari." Even

00:25:52 --> 00:25:57
the part about fixing yourself, I feel

00:25:54 --> 00:25:59
people um it's just like one of those

00:25:56 --> 00:26:00
things until you've like pushed through,

00:25:58 --> 00:26:02
you just don't quite get if I really

00:26:00 --> 00:26:04
zoom out, it's almost like things have

00:26:01 --> 00:26:06
moved so quickly. Like if you think way

00:26:03 --> 00:26:07
back, just having Stack Overflow as a

00:26:05 --> 00:26:09
website that you could consult when you

00:26:06 --> 00:26:11
got stuck on a programming problem felt

00:26:08 --> 00:26:12
like amazing. And then it's like like

00:26:10 --> 00:26:14
chat GBT launches like oh now I've got

00:26:11 --> 00:26:15
his like interactive thing that's way

00:26:13 --> 00:26:17
better than Stack Overflow. But you're

00:26:14 --> 00:26:18
still sort of doing the same thing. and

00:26:16 --> 00:26:19
you're like asking questions and you're

00:26:17 --> 00:26:20
copy and pasting code and you're running

00:26:18 --> 00:26:22
the code and seeing what happens and

00:26:19 --> 00:26:24
copy and pasting it back and then you

00:26:21 --> 00:26:25
sort of with clawed code you sort of

00:26:23 --> 00:26:28
push through and you realize you don't

00:26:24 --> 00:26:29
need to do the copy and pasting anymore.

00:26:27 --> 00:26:31
It just like actually like executes and

00:26:28 --> 00:26:32
runs the code and even with open core I

00:26:30 --> 00:26:34
found out when I set it up yeah it's

00:26:32 --> 00:26:36
annoying because it can like effectively

00:26:33 --> 00:26:37
brick itself and it does a bunch of

00:26:35 --> 00:26:40
annoying things. But if you actually

00:26:36 --> 00:26:42
have like clawed code like it'll fix it.

00:26:39 --> 00:26:43
>> Yeah. I just have clawed code running it

00:26:41 --> 00:26:45
will just like fix it and it's clearly

00:26:42 --> 00:26:47
not the way things will be long term.

00:26:44 --> 00:26:48
But there's this like mentality shift of

00:26:46 --> 00:26:50
it doesn't actually matter if it's

00:26:47 --> 00:26:51
brittle and requires fixing because you

00:26:49 --> 00:26:54
can actually just have another agent

00:26:50 --> 00:26:54
like sat there like fixing it all the

00:26:53 --> 00:26:56
time.

00:26:53 --> 00:26:59
>> Yeah, I feel like this evolution I was

00:26:55 --> 00:27:02
like completely clawed code pill uh and

00:26:58 --> 00:27:06
still am but like probably only like 50%

00:27:01 --> 00:27:09
or 60% of my time like building product

00:27:05 --> 00:27:11
um or agentic engineering is in cloud

00:27:08 --> 00:27:13
code now at some point basically

00:27:10 --> 00:27:13
>> almost half of it is through opencloud

00:27:12 --> 00:27:15
now.

00:27:12 --> 00:27:16
>> Yeah. Which is very interesting. I mean

00:27:14 --> 00:27:19
then again I'm also spending a lot most

00:27:16 --> 00:27:22
of my time working on Gbrain itself. So

00:27:18 --> 00:27:25
GBrain came about because I met you

00:27:21 --> 00:27:27
obviously we had Peter on the show. Um

00:27:24 --> 00:27:28
and then I finally got around to it. It

00:27:26 --> 00:27:30
was like one weekend I said I got to

00:27:27 --> 00:27:32
check this out like what's going on with

00:27:29 --> 00:27:34
OpenClaw. Let's get it going. And um

00:27:31 --> 00:27:38
this was about the time Karpathy wrote

00:27:33 --> 00:27:39
his expost about knowledge LLM wikis.

00:27:37 --> 00:27:42
And so I was like, okay, well, I have a

00:27:38 --> 00:27:44
repo full of markdown. All my, you know,

00:27:41 --> 00:27:46
I should put all of my context into that

00:27:43 --> 00:27:49
markdown. And then at some point I

00:27:45 --> 00:27:51
realized, oh shoot, it's just using GP.

00:27:48 --> 00:27:54
>> And GP is not that good. Like it's, you

00:27:50 --> 00:27:56
know, wasting context. It's loading a

00:27:53 --> 00:27:57
lot more into context than it needs to.

00:27:55 --> 00:28:00
And then I sort of fell into a rabbit

00:27:56 --> 00:28:03
hole. I just went into conductor, click

00:27:59 --> 00:28:05
quick start, and then I had GStack built

00:28:02 --> 00:28:07
into conductor already. And you know,

00:28:04 --> 00:28:09
basically this was how I started. I you

00:28:06 --> 00:28:12
know it was actually much more

00:28:08 --> 00:28:14
interesting than that. So uh I didn't

00:28:12 --> 00:28:17
start off from nothing. One of the

00:28:13 --> 00:28:19
things I've learned as you write like a

00:28:16 --> 00:28:20
larger and larger corpus of code is like

00:28:18 --> 00:28:23
you have it loaded in your brain. You're

00:28:19 --> 00:28:27
like oh well in order to build an

00:28:22 --> 00:28:29
agentic newsroom for um Gary's list I

00:28:26 --> 00:28:32
actually had to learn about uh vector

00:28:28 --> 00:28:33
embedding and hybrid RRF and chunking.

00:28:31 --> 00:28:37
like when you're in there trying to make

00:28:32 --> 00:28:39
it work, you're just like very applied.

00:28:36 --> 00:28:41
It's like I have an output that I want.

00:28:38 --> 00:28:43
I want the article to look like this. It

00:28:40 --> 00:28:44
needs to be of this quality. It needs to

00:28:42 --> 00:28:47
have these citations. Like you start

00:28:44 --> 00:28:49
building up uh your you know your tests

00:28:46 --> 00:28:51
and integration tests and like you end

00:28:48 --> 00:28:53
up with like a product that's like

00:28:50 --> 00:28:56
battle tested from like the output that

00:28:52 --> 00:28:57
you want. And so I sort of put two and

00:28:55 --> 00:28:59
two together. And I you know and this is

00:28:56 --> 00:29:00
omething that you know anyone can do

00:28:58 --> 00:29:02
actually. It's like this. This is why I

00:29:00 --> 00:29:06
think we're entering the golden age of

00:29:01 --> 00:29:08
open source. Uh I could just open you

00:29:05 --> 00:29:10
know this project in conductor and then

00:29:07 --> 00:29:13
the first thing I write is like you know

00:29:09 --> 00:29:16
go look at you know tilda/garry's

00:29:12 --> 00:29:20
list like look at how we do chunking

00:29:15 --> 00:29:22
embedding uh you know hybrid RF rag like

00:29:19 --> 00:29:24
all of this and then just like extract

00:29:21 --> 00:29:28
it and then I want to use Postgress with

00:29:24 --> 00:29:32
PG vector and like I want a a you know

00:29:27 --> 00:29:34
full rag system for my open claw and

00:29:31 --> 00:29:36
then sort of like one thing led to

00:29:33 --> 00:29:38
another. It's like then I have, you

00:29:35 --> 00:29:40
know, 10 windows and Gbrain and I'm just

00:29:37 --> 00:29:41
like at it. What's cool about OpenClaw,

00:29:39 --> 00:29:43
I mean, maybe this is a good example.

00:29:40 --> 00:29:46
This is actually my open claw. I did go

00:29:42 --> 00:29:48
ahead and ask it's um how, you know, how

00:29:45 --> 00:29:49
did I actually get into it? January

00:29:47 --> 00:29:50
23rd.

00:29:48 --> 00:29:52
>> Also, all your emails.

00:29:49 --> 00:29:54
>> I had a tweet that was like, Claude Code

00:29:51 --> 00:29:55
this week has awakened my 25-year-old

00:29:53 --> 00:29:57
self, the one that checked Red Bulls and

00:29:54 --> 00:29:59
stayed up till dawn coding. We're so

00:29:56 --> 00:30:01
back.

00:29:58 --> 00:30:03
>> The builder identity resurfaces.

00:30:00 --> 00:30:05
>> Yeah. And you know, I'm basically back

00:30:02 --> 00:30:08
to, you know, sleeping 4 hours and, you

00:30:04 --> 00:30:09
know, coding 20 hours a day. You know,

00:30:07 --> 00:30:10
this is also when I started getting

00:30:08 --> 00:30:12
myself into trouble like talking about

00:30:10 --> 00:30:13
lines of code. I still believe this, by

00:30:11 --> 00:30:14
the way.

00:30:12 --> 00:30:16
>> Yeah, this might be like a good quick

00:30:13 --> 00:30:19
aside to talk about like this this idea

00:30:15 --> 00:30:21
of like lines of code being important

00:30:18 --> 00:30:22
measure has been like controversial on

00:30:20 --> 00:30:24
the internet. There's obviously the

00:30:21 --> 00:30:26
counterargument like, oh, lines of code

00:30:23 --> 00:30:28
doesn't like measure developer

00:30:25 --> 00:30:30
productivity, but

00:30:27 --> 00:30:32
>> it doesn't, right? But it also does. So,

00:30:29 --> 00:30:34
It also kind of does, right?

00:30:31 --> 00:30:35
>> Yeah. Like it does. It's clearly And you

00:30:33 --> 00:30:37
know what's interesting is you can

00:30:34 --> 00:30:40
actually um there's wellpublished git

00:30:36 --> 00:30:42
repos out there that you can run to uh

00:30:39 --> 00:30:45
strip away and like standardize what is

00:30:41 --> 00:30:47
actual logical lines of code. And so I

00:30:44 --> 00:30:49
actually did go ahead and do that. Um

00:30:46 --> 00:30:51
you know, and I got into trouble for

00:30:48 --> 00:30:55
saying like, oh, I'm coding at like a

00:30:50 --> 00:30:57
100x uh the rate that I was in 2013. And

00:30:54 --> 00:31:00
then after I did the logical lines of

00:30:56 --> 00:31:02
code strip down um it actually went up.

00:30:59 --> 00:31:05
>> It actually went up. So it turns out

00:31:01 --> 00:31:07
hat I was actually doing 400x the

00:31:04 --> 00:31:09
amount of code. But you know obviously I

00:31:06 --> 00:31:12
wasn't writing it. I was directing you

00:31:08 --> 00:31:15
know 15 agents at a time to do so. And

00:31:11 --> 00:31:17
then by the numbers like it was not that

00:31:14 --> 00:31:20
it did like knock down my lines of code

00:31:16 --> 00:31:22
from cloud code a little bit but uh the

00:31:19 --> 00:31:24
surprising thing to me was that it

00:31:21 --> 00:31:28
knocked down the amount of lines of code

00:31:23 --> 00:31:30
that I was writing in 2013 by like 70%.

00:31:27 --> 00:31:31
>> And so I think that that's sort of the

00:31:29 --> 00:31:36
mismatch here. Like people get very

00:31:30 --> 00:31:38
upset because it's easy to like pad the

00:31:35 --> 00:31:42
lines of code if you're a human writing

00:31:37 --> 00:31:45
code. Whereas like unless you direct

00:31:41 --> 00:31:47
claude code to literally like pad the

00:31:44 --> 00:31:49
lines of code, it doesn't necessarily do

00:31:46 --> 00:31:51
that. Like it'll maybe build the wrong

00:31:48 --> 00:31:54
thing. Like you might not steer it very

00:31:50 --> 00:31:56
well. It might not do the right thing.

00:31:53 --> 00:31:58
But like it's not trying to optimize for

00:31:55 --> 00:32:00
lines of code the way a human working a

00:31:57 --> 00:32:03
job would, right? which is you know

00:31:59 --> 00:32:04
that's just life and then I guess the

00:32:02 --> 00:32:06
really surprising thing is if you look

00:32:03 --> 00:32:09
at the literature about software

00:32:05 --> 00:32:12
ngineering going back to like 2000 1990

00:32:08 --> 00:32:14
I mean it's pretty clear that the

00:32:11 --> 00:32:16
average number of lines of code that a

00:32:13 --> 00:32:18
professional software engineer that's

00:32:15 --> 00:32:21
like tested and production ready it's

00:32:17 --> 00:32:23
not like a hundred lines of code it's

00:32:20 --> 00:32:24
like 50 it's like 30 like

00:32:22 --> 00:32:26
>> a day

00:32:23 --> 00:32:28
>> yeah a day right like for me it was like

00:32:25 --> 00:32:29
14 but I was like part-time I don't know

00:32:27 --> 00:32:31
it's

00:32:28 --> 00:32:33
So that's where the 400x actually came

00:32:30 --> 00:32:34
from. You know, the other thing I know

00:32:32 --> 00:32:36
is like I should have said that instead

00:32:34 --> 00:32:38
of just trolling people more on the

00:32:35 --> 00:32:39
lines of code. So I, you know, if I

00:32:37 --> 00:32:41
trolled you on the internet, I'm very

00:32:38 --> 00:32:43
sorry for that. Like there, you know,

00:32:40 --> 00:32:45
there is a deeper understanding of this.

00:32:42 --> 00:32:48
And I did end up releasing a blog post

00:32:44 --> 00:32:50
about it that um explains this quite a

00:32:47 --> 00:32:52
bit more. I mean, and I think it's not a

00:32:49 --> 00:32:54
little bit significant. It's very

00:32:51 --> 00:32:57
significant for people who are technical

00:32:53 --> 00:32:59
because it actually raises the bar on

00:32:56 --> 00:33:00
like what you're capable of doing. Like

00:32:58 --> 00:33:03
all the people who are attacking me

00:32:59 --> 00:33:05
about lines of code, they particularly

00:33:02 --> 00:33:08
are the people who are most likely to

00:33:04 --> 00:33:10
get wings if you like let it rip and

00:33:07 --> 00:33:12
token max. This is sort of like the

00:33:09 --> 00:33:15
classic problem. It's like if you have

00:33:11 --> 00:33:17
taste and you understand technology, you

00:33:14 --> 00:33:19
are particularly the people who should

00:33:16 --> 00:33:22
would benefit the most from getting

00:33:18 --> 00:33:25
this. all someone has to do is, you

00:33:21 --> 00:33:27
know, believe, right? So, stop fighting,

00:33:24 --> 00:33:28
just open cloud code and try it. You

00:33:26 --> 00:33:29
know,

00:33:27 --> 00:33:31
>> I think another thing that's potentially

00:33:28 --> 00:33:33
going on is just like the experiences

00:33:30 --> 00:33:35
vary dramatically depending on like the

00:33:32 --> 00:33:38
models and the harnesses. Um, like

00:33:34 --> 00:33:41
certainly something I've noticed is any

00:33:38 --> 00:33:44
sort of like semi complicated

00:33:40 --> 00:33:48
programming task I try and do through my

00:33:43 --> 00:33:49
openclaw agent just like kind of fails.

00:33:47 --> 00:33:52
like it's exactly the same model and so

00:33:48 --> 00:33:56
like Opus 4.7 as clawed code but it just

00:33:51 --> 00:33:58
like like anything above like a simple

00:33:55 --> 00:34:00
script I just find like it's not like

00:33:57 --> 00:34:01
that great at so I'll go back into like

00:33:59 --> 00:34:03
clawed code and then

00:34:00 --> 00:34:05
>> it was sort of a moment for me where I

00:34:02 --> 00:34:07
realized oh like this is how it used to

00:34:04 --> 00:34:10
feel like this is how like even 6 months

00:34:06 --> 00:34:11
ago it used to feel like oh like you try

00:34:09 --> 00:34:12
and like these things yeah these things

00:34:10 --> 00:34:15
aren't quite there yet and then claude

00:34:12 --> 00:34:17
code with like opus 4.5 was like oh like

00:34:14 --> 00:34:19
it's actually like here

00:34:16 --> 00:34:21
>> it's about to recur. Like right now,

00:34:18 --> 00:34:24
people sort of are feeling like OpenClaw

00:34:20 --> 00:34:26
or Hermes is like not quite there or

00:34:23 --> 00:34:28
it's like a lot of work. And then I

00:34:25 --> 00:34:30
guarantee you like this time next year

00:34:27 --> 00:34:33
like everyone's going to be saying what

00:34:29 --> 00:34:34
you heard here first, which is like

00:34:32 --> 00:34:36
very single person on the planet will

00:34:33 --> 00:34:38
have their own personal AI. We could

00:34:35 --> 00:34:42
either live in a world where we have our

00:34:37 --> 00:34:44
own AI, where we have our own data, our

00:34:41 --> 00:34:47
own integrations, like we see what's

00:34:43 --> 00:34:50
happening, we write our own prompts, and

00:34:46 --> 00:34:52
we have control over what we see. Uh, or

00:34:50 --> 00:34:54
it's corporate controlled. It's

00:34:51 --> 00:34:56
omething, you know, you go to a host,

00:34:53 --> 00:34:58
it's kind of like your Facebook feed,

00:34:56 --> 00:35:00
and like you don't know what that, you

00:34:57 --> 00:35:02
know, who wrote that algorithm and who

00:34:59 --> 00:35:04
does it benefit and like what business

00:35:01 --> 00:35:08
model is behind it. Like nobody knows.

00:35:03 --> 00:35:09
the most powerful idea that like was a

00:35:07 --> 00:35:11
gift was the personal computer

00:35:08 --> 00:35:14
evolution and we're about to go through

00:35:10 --> 00:35:16
exactly that same shift with personal AI

00:35:13 --> 00:35:17
and it's going to be a choice like you

00:35:15 --> 00:35:20
know people are going to have to figure

00:35:16 --> 00:35:22
out am I willing to write my own prompts

00:35:19 --> 00:35:24
and you know I think I wish Pete Khan

00:35:21 --> 00:35:27
were here like that's one of the things

00:35:23 --> 00:35:29
we learned from him too it's like unless

00:35:26 --> 00:35:33
you have your own prompts and you can

00:35:28 --> 00:35:36
write it for yourself like you are you

00:35:32 --> 00:35:39
know below the API guideline for some PM

00:35:35 --> 00:35:40
or developer that is not you who like

00:35:38 --> 00:35:42
will not understand you will not

00:35:39 --> 00:35:44
understand your needs will not

00:35:41 --> 00:35:47
understand what you uniquely care about

00:35:43 --> 00:35:50
and I think that's like the defining

00:35:46 --> 00:35:52
question like will you have control over

00:35:49 --> 00:35:54
your own tools or will your tool your

00:35:51 --> 00:35:56
tools have control over you

00:35:53 --> 00:35:59
>> and I think this is the one of the

00:35:55 --> 00:36:01
disconnects that the public has I think

00:35:58 --> 00:36:03
is a lot of uh these capabilities you

00:36:00 --> 00:36:04
have to be on the latest and greatest

00:36:02 --> 00:36:07
models

00:36:03 --> 00:36:10
And it's actually quite expensive to use

00:36:06 --> 00:36:11
them and burn all the tokens for now.

00:36:09 --> 00:36:12
>> It's coming down,

00:36:10 --> 00:36:15
>> but I think maybe people are just trying

00:36:11 --> 00:36:19
like set or the free model or having the

00:36:14 --> 00:36:19
basic claw pro subscription only.

00:36:18 --> 00:36:22
>> Yeah.

00:36:18 --> 00:36:25
>> And part of is maybe we have to address

00:36:21 --> 00:36:28
that this new way of really getting all

00:36:24 --> 00:36:30
this almost ASI AGI moment for for

00:36:27 --> 00:36:32
building is you have to be burning lots

00:36:29 --> 00:36:33
of tokens. the whole token maxing

00:36:31 --> 00:36:34
paradigm.

00:36:32 --> 00:36:37
>> It actually reminds me of rent. San

00:36:34 --> 00:36:40
Francisco rents. Like one of the things

00:36:36 --> 00:36:42
that I feel like we always have to do um

00:36:39 --> 00:36:43
with YC founders is that it's like a

00:36:41 --> 00:36:44
general thing. I was like, "Oh, like I

00:36:42 --> 00:36:46
don't want to move to San Francisco

00:36:43 --> 00:36:46
because it's like so expensive to live

00:36:45 --> 00:36:48
there, but it's like

00:36:46 --> 00:36:49
>> it's so expensive to not live there."

00:36:47 --> 00:36:52
>> Yeah, exactly. That's the whole point,

00:36:48 --> 00:36:54
right? Like early on in a YC batch, like

00:36:51 --> 00:36:56
I'm used to like a fan of being like

00:36:53 --> 00:36:57
this like this apartment is like

00:36:55 --> 00:36:59
thousands of dollars a month in rent.

00:36:56 --> 00:37:01
Like seems ridiculous. Like should I

00:36:58 --> 00:37:02
like pay it or not? And it's like, no,

00:37:00 --> 00:37:04
you should absolutely pay. And if

00:37:01 --> 00:37:06
anything, you should pay more to not

00:37:03 --> 00:37:08
just be in San Francisco, but be in like

00:37:05 --> 00:37:09
the dog patch and just like be in like

00:37:07 --> 00:37:11
neighborhoods where you create this

00:37:08 --> 00:37:12
erendipity. Like token maxing is going

00:37:10 --> 00:37:14
to be one of those things for founders

00:37:11 --> 00:37:15
that we sort of have to teach them where

00:37:13 --> 00:37:17
it's not immediately obvious that you

00:37:14 --> 00:37:18
shouldn't. This is actually like rent.

00:37:16 --> 00:37:21
Like this is one of the things where you

00:37:17 --> 00:37:24
should like spend as much as you can to

00:37:20 --> 00:37:27
like get the like most utility out of it

00:37:24 --> 00:37:28
versus treating it like the office desk

00:37:26 --> 00:37:30
or something. Like sure you can

00:37:27 --> 00:37:32
economize on that or you don't need like

00:37:29 --> 00:37:34
a super expensive like couch, but like

00:37:32 --> 00:37:36
when it comes to like actually using the

00:37:33 --> 00:37:38
models and your token spend, you should

00:37:35 --> 00:37:38
probably be like pushing pretty hard on

00:37:37 --> 00:37:41
that.

00:37:37 --> 00:37:43
>> Yeah. One of the key maxims for YC is,

00:37:40 --> 00:37:45
you know, how do you find good startup

00:37:42 --> 00:37:47
ideas, live in the future, and build

00:37:44 --> 00:37:49
what's missing, right? And so this is a

00:37:46 --> 00:37:52
profound version of that where all you

00:37:48 --> 00:37:56
have to do is commit your brain to look

00:37:51 --> 00:38:00
at, you know, spending $500 in a single

00:37:55 --> 00:38:01
day on tokens and say actually like, you

00:37:59 --> 00:38:04
know, as long as I'm building something

00:38:00 --> 00:38:05
that's actually of great value to me,

00:38:03 --> 00:38:07
you know, and I'm building the right

00:38:04 --> 00:38:09
hing, uh, I'm going to do that.

00:38:06 --> 00:38:10
>> Gary, I have a weird question. Do you

00:38:08 --> 00:38:13
think that in some ways the fact that

00:38:10 --> 00:38:15
you tried to build all of this while

00:38:12 --> 00:38:17
also being the CEO of Y Cominator

00:38:14 --> 00:38:20
actually helped you because like your

00:38:16 --> 00:38:21
time is so scarce you had to like try to

00:38:19 --> 00:38:22
figure out how to write hundreds of

00:38:20 --> 00:38:24
thousands of lines of code with just

00:38:21 --> 00:38:27
like spare minutes in between meetings

00:38:23 --> 00:38:28
unlike a a full-time software engineer

00:38:26 --> 00:38:30
that could you know just take the time

00:38:27 --> 00:38:32
to like open the website and like click

00:38:29 --> 00:38:34
around to like test it. like those

00:38:31 --> 00:38:36
minutes were like insanely scarce for

00:38:33 --> 00:38:37
you and so you were constantly pushing

00:38:35 --> 00:38:38
yourself to figure out how to like

00:38:36 --> 00:38:41
automate everything.

00:38:37 --> 00:38:43
>> Yeah, I I envy time billionaires, you

00:38:40 --> 00:38:44
know, sometimes look at I mean I'm look

00:38:42 --> 00:38:46
at my kids and it's like these kids are

00:38:43 --> 00:38:48
time billionaires right now, man. Like

00:38:45 --> 00:38:49
you know, you could just like do you

00:38:47 --> 00:38:51
know you we run across people at startup

00:38:48 --> 00:38:53
school all the time and it's like you're

00:38:50 --> 00:38:54
a time billionaire right now. Like this

00:38:52 --> 00:38:56
incredible. Like you could just do

00:38:53 --> 00:38:57
any you like learn about anything. This

00:38:55 --> 00:39:00
so great. So yeah, you know,

00:38:56 --> 00:39:02
personally like I think my philosophy is

00:38:59 --> 00:39:04
I am in a crazy rush in my brain. I'm

00:39:01 --> 00:39:06
like probably live 10 billion lifetimes

00:39:03 --> 00:39:08
to live in this body right now and I

00:39:05 --> 00:39:10
need every single moment to count. Uh

00:39:07 --> 00:39:13
and then if you can token max it's like

00:39:09 --> 00:39:16
I mean you could buy millions of years

00:39:12 --> 00:39:18
of consciousness of machine

00:39:15 --> 00:39:20
consciousness. Now I can be a time

00:39:17 --> 00:39:23
billionaire. It's not you know my own

00:39:19 --> 00:39:27
time. It's the time of a machine like

00:39:22 --> 00:39:29
doing work for me and like the human

00:39:26 --> 00:39:31
entities that I care about working on

00:39:28 --> 00:39:33
the causes that I care about, right? I

00:39:30 --> 00:39:35
care about YC. I care about builders

00:39:32 --> 00:39:37
being able to build. Even in a lot of

00:39:34 --> 00:39:39
our internal meetings last year,

00:39:36 --> 00:39:42
remember in our offsites, we would talk

00:39:38 --> 00:39:44
about like how do we teach the next

00:39:41 --> 00:39:47
generation how to use these tools? And

00:39:43 --> 00:39:48
so, you know, I'd like to I wish that I

00:39:46 --> 00:39:49
could say like that was all a part of

00:39:47 --> 00:39:51
the grand plan and that's how it

00:39:48 --> 00:39:53
started. It's not like but you know

00:39:50 --> 00:39:56
subconsciously I actually think it was

00:39:52 --> 00:39:58
like I think subconsciously from doing

00:39:55 --> 00:39:59
Lite Cone and like talking about this

00:39:57 --> 00:40:03
tuff like sitting side by side with uh

00:39:58 --> 00:40:05
Boris Churnney right here was a very

00:40:02 --> 00:40:07
powerful moment for me because I

00:40:04 --> 00:40:09
realized like he's he started saying

00:40:06 --> 00:40:11
things that like I could do myself. It's

00:40:08 --> 00:40:14
like he said our team doesn't write a

00:40:10 --> 00:40:15
single line of code. I'm like oh

00:40:13 --> 00:40:17
actually like I can do that and like the

00:40:14 --> 00:40:19
people who are watching right now it's

00:40:16 --> 00:40:21
like you and I are not different right?

00:40:18 --> 00:40:23
We're the same. Like we started in the

00:40:20 --> 00:40:26
same place. I don't think of myself as

00:40:22 --> 00:40:28
like, you know, in the sky yet. Even

00:40:25 --> 00:40:30
though people seem to talk like I am,

00:40:27 --> 00:40:32
you know, like I'm just a person trying

00:40:29 --> 00:40:34
to do a thing and if I sit next to

00:40:31 --> 00:40:37
Boris, I'm like, you know, this guy is

00:40:34 --> 00:40:39
one of the best engineers I've ever met.

00:40:36 --> 00:40:41
But also like if I just open a prompt,

00:40:38 --> 00:40:44
we have the same prompt. We have the

00:40:40 --> 00:40:47
same MacBook Pro. And you know, there's

00:40:43 --> 00:40:50
nothing that stands between like me or

00:40:46 --> 00:40:54
you or any of us from like drawing on

00:40:49 --> 00:40:56
millions of years potentially of like

00:40:53 --> 00:40:59
tokens to like serve humanity.

00:40:55 --> 00:41:01
>> Well, Gary, I think that was a beautiful

00:40:58 --> 00:41:02
quote that should be retweetable. It's

00:41:00 --> 00:41:04
just

00:41:01 --> 00:41:05
>> got to get it on X right away.

00:41:03 --> 00:41:07
>> You could have infinite time by

00:41:04 --> 00:41:09
borrowing the time from the machines.

00:41:06 --> 00:41:11
>> Yeah, what a time to be alive.

00:41:08 --> 00:41:13
>> That's a beautiful thought to end on.

00:41:10 --> 00:41:13
Thanks Gary for showing us the future.

00:41:12 --> 00:41:14
>> Thanks guys.

00:41:12 --> 00:41:16
>> Thanks Gary.

00:41:13 --> 00:41:19
>> All right, thanks for watching and we'll

00:41:15 --> 00:41:19
see you on the next episode of Lyone.

<!-- YOUTUBE_TRANSCRIPT_END -->
