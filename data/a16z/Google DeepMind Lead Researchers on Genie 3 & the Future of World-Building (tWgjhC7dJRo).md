---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "tWgjhC7dJRo"
title: "Google DeepMind Lead Researchers on Genie 3 & the Future of World-Building"
video_url: "https://www.youtube.com/watch?v=tWgjhC7dJRo"
thumbnail_url: "https://i.ytimg.com/vi/tWgjhC7dJRo/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=tWgjhC7dJRo"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-08-16T17:19:29.000Z"
upload_date: "2025-08-16"
duration_seconds: 2541
duration_human: "42:21"
view_count: 10121
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:39:45.807Z"
---

# Google DeepMind Lead Researchers on Genie 3 & the Future of World-Building

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=tWgjhC7dJRo
- video_id: tWgjhC7dJRo
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-08-16T17:19:29.000Z
- upload_date: 2025-08-16
- duration: 42:21
- view_count: 10121
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Genie 3 can generate fully interactive, persistent worlds from just text, in real time.

In this episode, Google DeepMind’s Jack Parker-Holder (Research Scientist) and Shlomi Fruchter (Research Director) join Anjney Midha, Marco Mascorro, and Justine Moore of a16z, with host Erik Torenberg, to discuss how they built it, the breakthrough “special memory” feature, and the future of AI-powered gaming, robotics, and world models.

They share:
- How Genie 3 generates interactive environments in real time
- Why its “special memory” feature is such a breakthrough
- The evolution of generative models and emergent behaviors
- Instruction following, text adherence, and model comparisons
- Potential applications in gaming, robotics, simulation, and more
- What’s next: Genie 4, Genie 5, and the future of world models

This conversation offers a first-hand look at one of the most advanced world models ever created.

Timecodes: 
0:00 Introduction
0:29 The Evolution of Generative Models
1:10 Real-Time Interactivity & User Experience
4:35 Applications and Use Cases
8:15 The Importance of Special Memory
13:12 Emergent Behaviors & Model Capabilities
19:45 Instruction Following & Text Adherence
20:48 Comparing Genie 3 and Other Models
21:56 The Future of World Models & Modalities
32:23 Robotics, Simulation, and Real-World Impact
37:58 Looking Ahead: Genie 4, 5, and Future World Models
40:41 Are We Living in a Simulation?

Resources: 
Find Shlomi on X: https://x.com/shlomifruchter
Find Jack on X: https://x.com/jparkerholder
Find Anjney on X: https://x.com/anjneymidha
Find Justine on X: https://x.com/venturetwins
Find Marco on X: https://x.com/Mascobot

Stay Updated: 
Let us know what you think: https://ratethispodcast.com/a16z 
Find a16z on Twitter: https://twitter.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Subscribe on your favorite podcast app: https://a16z.simplecast.com/ 
Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details, please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
All of the applications basically stem

00:00:01 --> 00:00:07
from the ability to generate a world

00:00:04 --> 00:00:09
that that just just from a few words.

00:00:06 --> 00:00:11
You look at it and like there's a world,

00:00:08 --> 00:00:12
you know, that's generated in front of

00:00:10 --> 00:00:14
your eyes and it's amazing that it's

00:00:11 --> 00:00:16
happening. I was very excited about how

00:00:13 --> 00:00:18
far can can can we push that

00:00:15 --> 00:00:20
>> and it's at the point where like a human

00:00:17 --> 00:00:22
who is not an expert like will watch it

00:00:20 --> 00:00:27
and think it looks real, right? And I

00:00:22 --> 00:00:27
think that's pretty incredible.

00:00:28 --> 00:00:34
Jack Schlomi, uh, GD3 has taken over the

00:00:31 --> 00:00:36
internet. Uh, we're honored to have you

00:00:33 --> 00:00:38
on the podcast today. Has the response

00:00:35 --> 00:00:40
surprised you? Reflect a little bit

00:00:37 --> 00:00:42
about, uh, the reaction.

00:00:39 --> 00:00:45
>> We weren't sure like how how big it's

00:00:41 --> 00:00:46
going to be. U, but we definitely felt I

00:00:44 --> 00:00:49
felt definitely that, uh, we have

00:00:46 --> 00:00:52
something that's was kind like for a

00:00:48 --> 00:00:54
long time coming basically being able to

00:00:51 --> 00:00:57
generate environments in real time. Uh I

00:00:53 --> 00:00:59
think a lot of work that was done in

00:00:56 --> 00:01:01
Google deep mind and outside pointed to

00:00:58 --> 00:01:03
that direction but we really wanted to

00:01:00 --> 00:01:04
make it happen and I I hope we have.

00:01:02 --> 00:01:06
>> Yeah

00:01:03 --> 00:01:07
>> team why don't we reflect internally a

00:01:05 --> 00:01:09
little bit about what we found so

00:01:06 --> 00:01:10
gamechanging about G3 and why we're so

00:01:08 --> 00:01:12
excited to have this conversation Mark.

00:01:09 --> 00:01:14
>> Yeah for sure. I mean uh first of all

00:01:11 --> 00:01:16
it's it's an amazing model. I think uh

00:01:13 --> 00:01:18
there's a lot of excitement around the

00:01:15 --> 00:01:20
special memory the consistency across

00:01:17 --> 00:01:21
all the frames. I think this is the

00:01:19 --> 00:01:23
first time I can see like you can have

00:01:20 --> 00:01:25
some sort of interactive way of of doing

00:01:22 --> 00:01:27
this stuff with videos because it used

00:01:24 --> 00:01:28
to be like you would do one prompt and

00:01:26 --> 00:01:30
you would have like 15 seconds of a

00:01:27 --> 00:01:33
video but now you can actually have some

00:01:29 --> 00:01:35
sort of interactive um kind of element

00:01:32 --> 00:01:36
o it which I think is very exciting. So

00:01:34 --> 00:01:38
uh can you elaborate a little bit more

00:01:35 --> 00:01:41
on like your insights on this? Like how

00:01:37 --> 00:01:43
as like for example figuring out what

00:01:40 --> 00:01:45
data you should collect, how do you make

00:01:42 --> 00:01:47
it very interactive and keeping the flow

00:01:44 --> 00:01:48
of the whole video which I thought was

00:01:46 --> 00:01:50
phenomenal.

00:01:47 --> 00:01:52
>> Uh sure. Yeah. So I think you kind of

00:01:49 --> 00:01:55
highlighted a few capabilities. Um sort

00:01:51 --> 00:01:58
of the length of the generation um the

00:01:54 --> 00:01:59
consistency of the world maybe diversity

00:01:57 --> 00:02:04
as well of the kind kind of things you

00:01:58 --> 00:02:06
can generate. I think um the main thing

00:02:03 --> 00:02:07
is that last year obviously we made

00:02:05 --> 00:02:10
progress in quite a few different fronts

00:02:06 --> 00:02:12
right in separate efforts right so we

00:02:09 --> 00:02:14
had this G2 project that was much more

00:02:11 --> 00:02:17
sort of like 3D environments that it

00:02:13 --> 00:02:18
could generate and it wasn't super high

00:02:16 --> 00:02:20
quality. It felt like it coming from

00:02:17 --> 00:02:23
Genie 1, but it wasn't the same quality

00:02:19 --> 00:02:25
as things like V2, which um the

00:02:22 --> 00:02:26
state-of-the-art video model at the time

00:02:24 --> 00:02:28
came out in December roughly exactly the

00:02:25 --> 00:02:30
same time. It came out a week later than

00:02:27 --> 00:02:32
Genie2. And obviously internally

00:02:29 --> 00:02:34
there was a lot of like discussion

00:02:31 --> 00:02:36
between the two projects uh about the

00:02:33 --> 00:02:39
different directions we're pursuing. And

00:02:35 --> 00:02:41
then had also worked on game and genen,

00:02:38 --> 00:02:43
right? Um, which is the doom paper as as

00:02:40 --> 00:02:46
people know it, which I think you guys

00:02:42 --> 00:02:48
also wrote a a nice piece on straight

00:02:45 --> 00:02:50
after that came out. So, uh, I think

00:02:47 --> 00:02:52
that also like attracted a lot of

00:02:49 --> 00:02:55
attention. And so that we felt that

00:02:52 --> 00:02:57
across these different like different

00:02:54 --> 00:02:59
projects, we had quite a lot of

00:02:56 --> 00:03:01
interesting things that would naturally

00:02:58 --> 00:03:04
kind of combine and we could basically

00:03:00 --> 00:03:07
take the most like ambitious version of

00:03:04 --> 00:03:09
the combined project and see if it was

00:03:06 --> 00:03:11
possible. And fortunately it was and

00:03:08 --> 00:03:12
quite quite I think the timeline is

00:03:10 --> 00:03:14
probably the bit that surprised many of

00:03:12 --> 00:03:16
us because obviously we set ourselves

00:03:13 --> 00:03:18
these goals and like we tried very hard

00:03:15 --> 00:03:20
to achieve them but you can never be

00:03:17 --> 00:03:22
totally sure how it's going to actually

00:03:19 --> 00:03:24
um feel when you when you've got to that

00:03:21 --> 00:03:26
point. I think it ended up being

00:03:23 --> 00:03:28
something that resonated with people a

00:03:25 --> 00:03:31
lot more than maybe we expected but um

00:03:27 --> 00:03:33
we were always believers.

00:03:30 --> 00:03:35
Yeah, I'll just add to this that um I

00:03:32 --> 00:03:39
think the real time so component is

00:03:34 --> 00:03:40
really important. Um and you know people

00:03:38 --> 00:03:42
you know not many people experience it

00:03:39 --> 00:03:45
firsthand but we really tried in the

00:03:41 --> 00:03:48
release to at least have a few trusted

00:03:44 --> 00:03:50
testers interact with it and also get

00:03:47 --> 00:03:51
he feel of it by adding these overlays

00:03:49 --> 00:03:54
that show what happens how people can

00:03:50 --> 00:03:56
like use the keyboard to control it and

00:03:53 --> 00:03:58
I I think there is something magical

00:03:55 --> 00:04:01
about the real time aspect. I felt it

00:03:57 --> 00:04:03
for the first time when our model like

00:04:00 --> 00:04:05
the actually game engine model started

00:04:02 --> 00:04:06
working fast enough and we were just

00:04:04 --> 00:04:08
like oh my god it's actually I can

00:04:06 --> 00:04:10
actually walk around and it was a bit of

00:04:07 --> 00:04:14
an

00:04:09 --> 00:04:15
aw moment. Um and and yeah I think there

00:04:13 --> 00:04:18
is something when it responds

00:04:14 --> 00:04:19
immediately that is really magical. Um I

00:04:17 --> 00:04:21
think that's kind like sparked the

00:04:18 --> 00:04:23
imagination of many people when when the

00:04:20 --> 00:04:25
Doom kind like simulation came out and

00:04:22 --> 00:04:26
here we really wanted to push it to

00:04:24 --> 00:04:29
somewhere we weren't sure it's going to

00:04:25 --> 00:04:31
work. So, it was definitely at the edge

00:04:28 --> 00:04:33
of possib what's possible. I think I

00:04:30 --> 00:04:35
that's how we felt. So, we just said,

00:04:32 --> 00:04:36
"Yeah, let's let's try and and see if we

00:04:34 --> 00:04:37
can make it happen."

00:04:35 --> 00:04:39
>> I think you guys like I don't know if

00:04:36 --> 00:04:41
this was on purpose or not, but you

00:04:38 --> 00:04:43
perfectly timed it uh when everyone on

00:04:40 --> 00:04:46
like X and Reddit and everywhere was

00:04:42 --> 00:04:48
making those videos of like characters

00:04:45 --> 00:04:49
walking through games, but they

00:04:47 --> 00:04:51
obviously like weren't interactive. They

00:04:48 --> 00:04:53
weren't real time. and then you guys

00:04:50 --> 00:04:55
came out with this um release that was

00:04:52 --> 00:04:58
like now now this is an actual product

00:04:54 --> 00:05:00
and and it blew folks away. I'm curious

00:04:58 --> 00:05:02
um cuz you can imagine so many different

00:05:00 --> 00:05:06
applications for this, right? Like more

00:05:01 --> 00:05:08
controllable video generation or um

00:05:05 --> 00:05:10
aking it much easier to create games,

00:05:07 --> 00:05:11
even personal gaming where someone's

00:05:09 --> 00:05:14
just kind of creating their own world

00:05:10 --> 00:05:16
they walk through like RL environments

00:05:13 --> 00:05:18
for agents, robotics, like are there any

00:05:15 --> 00:05:21
particular use cases that that you're

00:05:17 --> 00:05:22
most excited about? I think all of the

00:05:20 --> 00:05:25
applications basically stem

00:05:22 --> 00:05:28
from the ability to generate a world

00:05:24 --> 00:05:30
that that just just from a few words and

00:05:27 --> 00:05:32
I I think uh for me kind like this this

00:05:29 --> 00:05:34
potential when I started looking at

00:05:31 --> 00:05:36
video models I think it was pretty early

00:05:33 --> 00:05:38
when I think was one of the models were

00:05:35 --> 00:05:40
like imagine video which was the model

00:05:37 --> 00:05:42
by Google research but there are a lot

00:05:39 --> 00:05:43
of of models that kind like they were

00:05:41 --> 00:05:45
very basic compared to what we have

00:05:42 --> 00:05:47
today but the ability to simulate

00:05:44 --> 00:05:49
something like you look at it and like

00:05:46 --> 00:05:50
there's a world you know that's gener

00:05:48 --> 00:05:52
ated in front of your eyes and it's

00:05:49 --> 00:05:55
amazing that it's happening and I think

00:05:51 --> 00:05:57
at this point um I was very excited

00:05:54 --> 00:05:59
about how far can can can we push that

00:05:56 --> 00:06:02
right so I think via was one way to do

00:05:58 --> 00:06:04
it and and Genie is definitely another

00:06:01 --> 00:06:05
way to make it a bit more interactive uh

00:06:03 --> 00:06:07
so I think all of the applications

00:06:04 --> 00:06:10
basically stem from this core

00:06:06 --> 00:06:13
capabilities so it can be entertainment

00:06:09 --> 00:06:15
of course as you as you said it can be

00:06:12 --> 00:06:18
training agents it can be helping agents

00:06:14 --> 00:06:20
to reason about the world uh education

00:06:17 --> 00:06:23
So I don't think any particular

00:06:19 --> 00:06:26
application is more important or than

00:06:22 --> 00:06:28
others. I think it's really up to how uh

00:06:25 --> 00:06:30
you know developers in the future will

00:06:27 --> 00:06:31
build on top of that.

00:06:29 --> 00:06:32
>> Yeah, I would give basically the same

00:06:30 --> 00:06:34
answer in the end with a different

00:06:31 --> 00:06:36
journey to get there right which is like

00:06:33 --> 00:06:38
I personally myself worked in

00:06:35 --> 00:06:40
reinforcement learning for a few years

00:06:37 --> 00:06:43
before starting the GE project um in

00:06:39 --> 00:06:46
2022. Uh and the motivation originally

00:06:42 --> 00:06:48
was like that in RL at the time we had

00:06:45 --> 00:06:49
this problem where we'd say like which

00:06:47 --> 00:06:51
environment should we try and solve

00:06:48 --> 00:06:53
right because once you've already done

00:06:50 --> 00:06:55
go which people thought was years or

00:06:52 --> 00:06:57
decades away and then that was solved in

00:06:54 --> 00:06:59
2016 was solved but we reached

00:06:56 --> 00:07:02
superhuman level 11 in 2016 and then

00:06:58 --> 00:07:03
Starcraft 3 years later which is not

00:07:01 --> 00:07:07
particularly long time for something

00:07:02 --> 00:07:08
incrementally significant towards 2021

00:07:06 --> 00:07:10
time it was big question of what should

00:07:08 --> 00:07:12
we try and do with RL we know that the

00:07:09 --> 00:07:14
algorithms can learn super human

00:07:11 --> 00:07:15
capabilities if they have the right

00:07:13 --> 00:07:17
environment but we don't know what the

00:07:14 --> 00:07:20
nvironment be and so we were working on

00:07:16 --> 00:07:21
designing our own ones right with code

00:07:19 --> 00:07:23
uh but then instead it seemed like the

00:07:20 --> 00:07:25
more promising path when you had the

00:07:22 --> 00:07:27
first text to image models coming coming

00:07:24 --> 00:07:29
out was like what if we just think long

00:07:26 --> 00:07:32
term what's the way to really unlock

00:07:28 --> 00:07:34
unlimited environments um that being

00:07:31 --> 00:07:37
said over the course of the project uh

00:07:33 --> 00:07:39
and originally we started it um I guess

00:07:36 --> 00:07:41
in 2022 it was very focused on that one

00:07:38 --> 00:07:43
application but it seems quite clear now

00:07:40 --> 00:07:44
that this could have a big impact in all

00:07:42 --> 00:07:47
those other areas you mentioned. Right.

00:07:43 --> 00:07:49
So I think it's like language models in

00:07:46 --> 00:07:51
2021 maybe you probably wouldn't have

00:07:48 --> 00:07:54
guessed like an IMO gold medal a few

00:07:50 --> 00:07:56
years later would would come that fast.

00:07:53 --> 00:07:58
Um but as a direct application of that

00:07:55 --> 00:07:59
echnology, right? It was probably oh it

00:07:57 --> 00:08:02
can help me with my emails or whatever

00:07:58 --> 00:08:04
it was. Uh and I think it's really cool

00:08:01 --> 00:08:06
to build these kind of new class of

00:08:03 --> 00:08:08
oundation models and then see what

00:08:05 --> 00:08:09
people can imagine doing with it. Um,

00:08:07 --> 00:08:10
and that's one of the really exciting

00:08:08 --> 00:08:11
things about sharing the research

00:08:09 --> 00:08:15
preview, right, is we got this kind of

00:08:10 --> 00:08:17
eedback. Um, so we're hoping a lot of

00:08:14 --> 00:08:19
these things can happen. One of the

00:08:16 --> 00:08:23
things in the research preview post,

00:08:18 --> 00:08:24
Jack, that blew me away was this, and it

00:08:22 --> 00:08:26
wasn't even your first GIF, I think, in

00:08:24 --> 00:08:28
the blog post. It was either second or

00:08:25 --> 00:08:32
third. You had this visual of somebody

00:08:28 --> 00:08:33
painting the wall with the paintbrush

00:08:31 --> 00:08:35
and then the character moves.

00:08:32 --> 00:08:36
>> Yeah. The special memory,

00:08:34 --> 00:08:38
>> right? like out of to a different part

00:08:35 --> 00:08:40
of the wall, paints

00:08:37 --> 00:08:42
>> and then moves back and the original

00:08:39 --> 00:08:43
paint is still there.

00:08:41 --> 00:08:45
>> And I didn't believe it. I was there's

00:08:42 --> 00:08:46
no there's no way like and then I read

00:08:44 --> 00:08:48
and you're right is described as a

00:08:45 --> 00:08:50
special memory. So the persistence part

00:08:47 --> 00:08:52
for me I mean I I'm not I'm not taking

00:08:50 --> 00:08:53
away from all the other stuff. The

00:08:51 --> 00:08:55
interactivity is amazing you know but I

00:08:52 --> 00:08:57
think

00:08:54 --> 00:08:58
>> broadly speaking folks expected that at

00:08:56 --> 00:09:01
some point you know video generation for

00:08:57 --> 00:09:03
example would become real time. um like

00:09:00 --> 00:09:04
you know when when I saw the Genie 3

00:09:02 --> 00:09:06
post I was like okay they they actually

00:09:03 --> 00:09:08
went and did it but the special memory

00:09:05 --> 00:09:10
the persistence was when I kind of sat

00:09:08 --> 00:09:11
up in my chair and I was like how did

00:09:09 --> 00:09:15
that happen? Could you talk a little bit

00:09:10 --> 00:09:17
about um when did you discover that as

00:09:14 --> 00:09:19
an emergent property or was that a

00:09:16 --> 00:09:21
specific design goal? What's the

00:09:18 --> 00:09:22
backstory on that because that feels

00:09:20 --> 00:09:23
like a big unlock. Jack, uh why don't we

00:09:21 --> 00:09:26
start with you?

00:09:22 --> 00:09:30
>> Yeah, so um that's a great question. Um

00:09:26 --> 00:09:33
I'll say a few things. So it the TLDDR

00:09:29 --> 00:09:34
is it was totally planned for but still

00:09:32 --> 00:09:36
incredibly surprising when it worked

00:09:33 --> 00:09:39
that well. Right. So that specific

00:09:35 --> 00:09:40
sample when I saw it it was hard to

00:09:38 --> 00:09:41
believe. I actually wasn't sure that the

00:09:39 --> 00:09:44
model generating for a second. I was

00:09:40 --> 00:09:45
like that it took me to watch it a few

00:09:43 --> 00:09:47
times and like really check and like

00:09:44 --> 00:09:50
freeze the frames and look back and

00:09:46 --> 00:09:53
check that it was the same. Um but so

00:09:50 --> 00:09:55
from going back a few steps so obviously

00:09:52 --> 00:09:58
Genie 2 had some memory, right? So this

00:09:54 --> 00:10:00
got kind of lost because I mean G2 came

00:09:57 --> 00:10:01
at a time when there were lots of

00:09:59 --> 00:10:02
announcements, very exciting

00:10:00 --> 00:10:06
announcements. I mean V2 only a few days

00:10:01 --> 00:10:08
later. um it was a busy time of the year

00:10:05 --> 00:10:10
and the main headline act was that we

00:10:07 --> 00:10:11
could do generate new worlds at all

00:10:09 --> 00:10:14
right so that was the thing that we

00:10:10 --> 00:10:17
wanted to emphasize but it did have you

00:10:13 --> 00:10:18
know a few seconds of memory and we had

00:10:16 --> 00:10:20
a couple of examples like I created a

00:10:17 --> 00:10:22
robot near a pyramid looked away looked

00:10:19 --> 00:10:25
back and the pyramid's there but it's

00:10:21 --> 00:10:28
like kind of blurry uh it's not perfect

00:10:24 --> 00:10:30
um but some other models around the same

00:10:27 --> 00:10:32
time or more recently didn't have this

00:10:29 --> 00:10:34
feature right so people kind of index to

00:10:31 --> 00:10:37
that because they didn't notice the like

00:10:33 --> 00:10:41
arly signs of it in the Genie2 work.

00:10:36 --> 00:10:43
And then for Genie 3, we basically went

00:10:40 --> 00:10:46
um much more ambitious on the same sort

00:10:42 --> 00:10:48
of approach, right? And we um made it

00:10:45 --> 00:10:50
like a head headline goal for ourselves

00:10:47 --> 00:10:53
is like can we make the memory be what

00:10:50 --> 00:10:57
it is, right? We we said we want minute

00:10:52 --> 00:10:59
plus memory uh and real time and higher

00:10:56 --> 00:11:00
esolution all in the same model. And

00:10:58 --> 00:11:02
those are kind of conflicting

00:10:59 --> 00:11:04
objectives, right? Um, so we set

00:11:02 --> 00:11:07
ourselves this kind of technical

00:11:03 --> 00:11:10
challenge. Uh, and we said like if we

00:11:06 --> 00:11:11
target this then it's just about

00:11:09 --> 00:11:13
feasible and it'll be pretty incredible.

00:11:10 --> 00:11:14
And then um you still don't know

00:11:12 --> 00:11:16
obviously it's going to pan out. So then

00:11:13 --> 00:11:20
when you get to the end of the research

00:11:15 --> 00:11:22
one you know seven months later um to

00:11:19 --> 00:11:25
see the samples it still is quite

00:11:21 --> 00:11:28
mind-blowing to be honest. Uh so yeah uh

00:11:24 --> 00:11:29
it's kind of planned for but still

00:11:27 --> 00:11:31
pretty cool and exciting when you see it

00:11:28 --> 00:11:33
because it's like at the end of the day

00:11:30 --> 00:11:34
research projects aren't sure things are

00:11:32 --> 00:11:36
they?

00:11:33 --> 00:11:38
one thing that we didn't want to do and

00:11:35 --> 00:11:40
we didn't want to build an explicit

00:11:37 --> 00:11:42
representation right so there are

00:11:39 --> 00:11:45
definitely methods that are able to to

00:11:41 --> 00:11:47
achieve consistency and they did that

00:11:44 --> 00:11:49
hrough an explicit some 3D you know

00:11:46 --> 00:11:52
there nerfs goshion splatting and other

00:11:48 --> 00:11:53
methods that basically say okay if we

00:11:51 --> 00:11:57
know how the world looks like we use

00:11:52 --> 00:11:59
this kind like prior assumptions on how

00:11:56 --> 00:12:01
the world remains static pretty much

00:11:58 --> 00:12:04
then we can build representation then

00:12:00 --> 00:12:06
what you're looking at So that's that's

00:12:03 --> 00:12:08
great I think for some applications but

00:12:05 --> 00:12:10
we didn't want to go down this path

00:12:07 --> 00:12:12
because we felt it's somewhat limiting

00:12:09 --> 00:12:15
and and I think um so we can definitely

00:12:11 --> 00:12:17
say that the model doesn't do that um

00:12:14 --> 00:12:19
and it does generate like frame by frame

00:12:16 --> 00:12:22
and we think this was this is really key

00:12:18 --> 00:12:24
for the generalization to actually work.

00:12:21 --> 00:12:25
>> Every time someone interacts with it for

00:12:23 --> 00:12:27
the first time and they like test they

00:12:24 --> 00:12:29
look away and then look back I'm always

00:12:26 --> 00:12:30
like holding my breath and then and then

00:12:28 --> 00:12:31
it looks back and it's the same. I'm

00:12:29 --> 00:12:33
like whoa.

00:12:30 --> 00:12:34
It's still really It's really cool.

00:12:32 --> 00:12:36
>> Um,

00:12:33 --> 00:12:37
>> and and how long is this special memory?

00:12:35 --> 00:12:39
I don't know if you can talk about it.

00:12:36 --> 00:12:41
You mentioned a minute plus, but like is

00:12:38 --> 00:12:43
there some sort of like measure that you

00:12:40 --> 00:12:45
have? Is it like can you keep it for

00:12:42 --> 00:12:47
half an hour or what is the what is the

00:12:44 --> 00:12:48
limit on that?

00:12:46 --> 00:12:51
>> There was no like there's no like

00:12:47 --> 00:12:53
fundamental limitation but currently the

00:12:50 --> 00:12:55
current design we're limited to one

00:12:52 --> 00:12:58
minute of of this type of memories.

00:12:54 --> 00:13:00
>> Yeah, it's also a real time um trade-off

00:12:57 --> 00:13:03
or the guests as well. We we felt that

00:12:59 --> 00:13:04
because of the breadth and the other

00:13:02 --> 00:13:08
capabilities that like a minute was

00:13:03 --> 00:13:11
ufficient for for this version like

00:13:07 --> 00:13:14
it's quite a significant leap but um

00:13:10 --> 00:13:17
obviously eventually you'd want to

00:13:13 --> 00:13:19
>> one more question related on the between

00:13:16 --> 00:13:22
Genie one to like you know like in for

00:13:18 --> 00:13:24
example NLMs like you have like DeepCar

00:13:21 --> 00:13:25
one like they saw in this paper like the

00:13:23 --> 00:13:28
longer they keep it running they

00:13:24 --> 00:13:29
suddenly will see like these interesting

00:13:27 --> 00:13:31
behaviors like the model will start like

00:13:28 --> 00:13:33
reasoning or like would give like a like

00:13:30 --> 00:13:36
a oh I'm wrong on this I should

00:13:32 --> 00:13:38
self-correct. Do you see anything in

00:13:35 --> 00:13:40
kind of like this scaling from two to

00:13:37 --> 00:13:42
three? Do you see any sort of like

00:13:39 --> 00:13:44
interesting behavior that you were not

00:13:41 --> 00:13:45
expecting that suddenly just appear by

00:13:43 --> 00:13:46
increasing the amount of data and the

00:13:44 --> 00:13:48
amount of compute?

00:13:45 --> 00:13:51
>> Yeah, I was just say I think there is a

00:13:47 --> 00:13:53
bit of like um like overall definitely

00:13:50 --> 00:13:55
uh like many generative models we see

00:13:52 --> 00:14:00
that improvements happen with scale. So

00:13:54 --> 00:14:01
I think that's not not secret and um I

00:13:59 --> 00:14:02
don't know if we can you know I don't

00:14:00 --> 00:14:05
hink it's not the same type of

00:14:02 --> 00:14:07
intelligence I would say like an LLM has

00:14:04 --> 00:14:10
like I'm not sure if reasoning is is the

00:14:06 --> 00:14:13
right term um but we do see that some

00:14:09 --> 00:14:16
definitely things like it can infer from

00:14:12 --> 00:14:18
if you approach like a door it's and it

00:14:15 --> 00:14:19
makes sense for for the agents to maybe

00:14:17 --> 00:14:22
open it. So you might see that it's

00:14:18 --> 00:14:23
tarting to do that for example or

00:14:21 --> 00:14:25
there's some like better word

00:14:22 --> 00:14:28
understanding that happens over time and

00:14:24 --> 00:14:30
it just like things look better and more

00:14:27 --> 00:14:32
alistic. So I think these are the

00:14:29 --> 00:14:34
trends that we've we've observed.

00:14:31 --> 00:14:36
>> Yeah. And from G2 to three it's like I

00:14:33 --> 00:14:38
think the real world capabilities really

00:14:35 --> 00:14:41
increased. Right. So on the physics

00:14:37 --> 00:14:44
ide, um some of the water um

00:14:40 --> 00:14:45
simulations you can see some of the

00:14:43 --> 00:14:47
lighting as well like are really

00:14:44 --> 00:14:50
breathtaking. Like I I think we have

00:14:46 --> 00:14:52
this example of the storm on the on the

00:14:49 --> 00:14:55
blog and that one I think is super cool.

00:14:51 --> 00:14:57
Um and it's at the point where like a

00:14:54 --> 00:15:00
human who is not an expert like will

00:14:56 --> 00:15:02
watch it and think it looks real, right?

00:14:59 --> 00:15:04
And I think that's pretty incredible.

00:15:01 --> 00:15:05
Whereas with Genie 2, it was like it

00:15:03 --> 00:15:07
kind of understands roughly what these

00:15:04 --> 00:15:08
things should do, but you know it's not

00:15:06 --> 00:15:12
real, right? You can look at it and you

00:15:07 --> 00:15:13
can clearly see that it's sort of um not

00:15:11 --> 00:15:15
completely photorealistic. So I think

00:15:12 --> 00:15:17
that's quite a big leap on the quality

00:15:14 --> 00:15:18
in that side.

00:15:16 --> 00:15:21
>> Yeah. One of the things that was really

00:15:17 --> 00:15:22
cool in all the examples was the water

00:15:20 --> 00:15:24
is sort of a great way to see like does

00:15:22 --> 00:15:27
it understand like what the world is and

00:15:24 --> 00:15:29
how objects interact and um that example

00:15:26 --> 00:15:31
someone posted of like the the feet

00:15:28 --> 00:15:34
going in the puddle was amazing. But

00:15:30 --> 00:15:36
hen there was also that example of like

00:15:33 --> 00:15:38
a cartoon character. It was more of like

00:15:35 --> 00:15:40
an animated style who was like running

00:15:37 --> 00:15:43
across this kind of green patch of land

00:15:40 --> 00:15:45
then ran into this blue kind of wavy

00:15:42 --> 00:15:47
thing that looked like water and he

00:15:44 --> 00:15:49
started swimming which I thought was was

00:15:46 --> 00:15:51
really interesting. Like were there

00:15:48 --> 00:15:53
particular things you had to do around

00:15:50 --> 00:15:55
that to for the model to be able to

00:15:52 --> 00:15:56
understand like how characters should

00:15:54 --> 00:15:59
interact in different environments and

00:15:55 --> 00:16:02
ifferent styles? What you're basically

00:15:58 --> 00:16:04
describing is like the real breadth of

00:16:01 --> 00:16:06
different kind of environment terrains

00:16:03 --> 00:16:09
and worlds and things like that like

00:16:05 --> 00:16:12
water or walking on sand versus going

00:16:08 --> 00:16:14
downhill and snow and how the agents

00:16:11 --> 00:16:16
ort of interactions should differ given

00:16:13 --> 00:16:17
the the like terrain that they're in.

00:16:15 --> 00:16:20
And I think that that really is a

00:16:16 --> 00:16:23
property of of scale and breadth of of

00:16:19 --> 00:16:24
training. So um this is very much like

00:16:22 --> 00:16:27
an emergent thing. And I don't think

00:16:24 --> 00:16:30
there's anything like really specific we

00:16:26 --> 00:16:32
do for this, right? Um you again like

00:16:30 --> 00:16:34
you hope the model has learned this

00:16:31 --> 00:16:37
because it should have like a general

00:16:33 --> 00:16:38
world knowledge. Um doesn't always work

00:16:36 --> 00:16:40
perfectly but in general it's pretty

00:16:37 --> 00:16:42
good. Like so for the skiing examples

00:16:39 --> 00:16:43
you do go fast when you go downhill and

00:16:41 --> 00:16:45
then when you turn try and go back

00:16:42 --> 00:16:48
uphill it's very slow if not at all

00:16:44 --> 00:16:50
possible. Um when you go into water

00:16:47 --> 00:16:52
obviously you hope as you said that the

00:16:49 --> 00:16:55
agent will start swimming and splashing

00:16:51 --> 00:16:56
and this does typically happen. um when

00:16:54 --> 00:16:59
you look down near a puddle. Hopefully

00:16:55 --> 00:17:01
ou're wearing Wellington boots. Um like

00:16:58 --> 00:17:02
this kind of stuff does just kind of

00:17:00 --> 00:17:04
make sense and I think it feels pretty

00:17:02 --> 00:17:06
magical because it very much aligns with

00:17:04 --> 00:17:09
what you were thinking about the world

00:17:06 --> 00:17:11
and the models just generated it all. So

00:17:08 --> 00:17:13
yeah, that's that's also one of the

00:17:10 --> 00:17:16
really exciting things for sure.

00:17:12 --> 00:17:18
>> Yeah. And on top of that I I one kind

00:17:15 --> 00:17:20
like trade-off that typically we have is

00:17:17 --> 00:17:22
that we want the model to do two things.

00:17:19 --> 00:17:24
We want the model to create the world in

00:17:22 --> 00:17:27
a way that looks consistent. So Jack

00:17:23 --> 00:17:30
said like if you if you walk in rain or

00:17:26 --> 00:17:32
in PS then probably wearing boots. But

00:17:29 --> 00:17:34
if we provide it with a different

00:17:31 --> 00:17:36
description or like the prompt is saying

00:17:33 --> 00:17:37
something else, we want it to still

00:17:35 --> 00:17:39
follow the prompt. And there is some

00:17:36 --> 00:17:41
tension here because some things are

00:17:38 --> 00:17:44
very unlikely right you might say I want

00:17:40 --> 00:17:47
o wear flip flops and I know jump in

00:17:43 --> 00:17:49
the rain or whatever. um um then then

00:17:46 --> 00:17:52
the model still has to try and create

00:17:48 --> 00:17:54
something that is very unlikely and

00:17:51 --> 00:17:56
that's where typically you know video

00:17:53 --> 00:17:58
models maybe find it more challenging

00:17:55 --> 00:17:59
and that's where you know our models

00:17:57 --> 00:18:01
might might find it more challenging but

00:17:58 --> 00:18:04
still it's still successful to a

00:18:00 --> 00:18:05
surprising degree to go into this kind

00:18:03 --> 00:18:07
of like low probability areas and I

00:18:04 --> 00:18:09
think that's really uh in a way that's

00:18:06 --> 00:18:10
what we want right like many people they

00:18:08 --> 00:18:13
don't want to just look at the video

00:18:10 --> 00:18:16
that looks like their their own no maybe

00:18:12 --> 00:18:19
this room um uh but but more something a

00:18:16 --> 00:18:20
bit more exciting and that's where like

00:18:18 --> 00:18:22
we I think this is the magic of the of

00:18:20 --> 00:18:25
the models that they can take you to

00:18:21 --> 00:18:27
places that maybe are not so likely uh

00:18:24 --> 00:18:29
to be in reality.

00:18:26 --> 00:18:31
>> The text following is really amazing in

00:18:28 --> 00:18:33
this model. Um and that does feel really

00:18:30 --> 00:18:35
magical. I think this something that

00:18:32 --> 00:18:38
VO does really well as well, right?

00:18:34 --> 00:18:41
Like pretty much what you ask for. Um

00:18:37 --> 00:18:43
it's really well aligned with text and

00:18:40 --> 00:18:45
so and and we've have that with Genie 3.

00:18:42 --> 00:18:48
So you could describe very specific

00:18:44 --> 00:18:51
worlds and really kind of like arbitrary

00:18:47 --> 00:18:54
silly things and it pretty much works.

00:18:50 --> 00:18:56
Um like we actually had this this

00:18:53 --> 00:18:58
discussion because um people were very

00:18:55 --> 00:19:00
disappointed to find out that the the

00:18:57 --> 00:19:02
video I made of my dog actually was not

00:18:59 --> 00:19:03
my dog's photograph. I just described

00:19:01 --> 00:19:06
her in text.

00:19:02 --> 00:19:08
>> Uh and um yeah, I don't know if that's a

00:19:06 --> 00:19:11
big a big secret, but it looked exactly

00:19:08 --> 00:19:13
like her. Um and the model just kind of

00:19:10 --> 00:19:16
knows, right? Um, and I think that's

00:19:12 --> 00:19:18
pretty amazing. Um, so I think that

00:19:15 --> 00:19:19
's actually a really important

00:19:17 --> 00:19:21
capability that we didn't have with

00:19:18 --> 00:19:23
Genie2 as well, right? Because we relied

00:19:20 --> 00:19:26
on image prompting. And so there was

00:19:22 --> 00:19:28
ome transfer issue like where you you

00:19:25 --> 00:19:29
rely on imagine to generate the image

00:19:27 --> 00:19:30
and that often does look really good,

00:19:28 --> 00:19:33
but it's not necessarily a good imi

00:19:29 --> 00:19:35
mage for starting the world. Um,

00:19:32 --> 00:19:37
whereas like going directly from text,

00:19:34 --> 00:19:40
you get the controllability of pretty

00:19:36 --> 00:19:41
much anything you want. Um, plus it just

00:19:39 --> 00:19:43
kind of naturally works because it's in

00:19:40 --> 00:19:45
the like correct space for the model to

00:19:42 --> 00:19:45
do its thing. Uh, and that's something

00:19:44 --> 00:19:47
really powerful.

00:19:44 --> 00:19:49
>> And why is that, Jack? What do you think

00:19:46 --> 00:19:50
led to such a massive instruction

00:19:48 --> 00:19:52
following or text adurance gain? Because

00:19:50 --> 00:19:54
it's pretty hard thing to do.

00:19:51 --> 00:19:56
>> Well, I mean, our team had never really

00:19:53 --> 00:19:59
worked on this. Um, so Genie one and two

00:19:55 --> 00:20:02
both worked with image prompting. Um,

00:19:58 --> 00:20:05
and so obviously like um for this next

00:20:01 --> 00:20:07
phase, we um we leverage a lot of the

00:20:04 --> 00:20:10
research done internally on other

00:20:06 --> 00:20:11
projects. Um and um personnel wise, I

00:20:09 --> 00:20:14
mean, show me obviously work been

00:20:10 --> 00:20:16
co-leading the VO project and so we were

00:20:13 --> 00:20:20
able to kind of build on a lot of other

00:20:16 --> 00:20:21
work and ideas internally and that

00:20:19 --> 00:20:24
basically like allowed us to kind of

00:20:20 --> 00:20:27
like turbocharge progress, right? So if

00:20:23 --> 00:20:30
we' done this sort of by incrementally

00:20:26 --> 00:20:32
building like ourselves in a in in on an

00:20:29 --> 00:20:33
island it would have taken I think a lot

00:20:31 --> 00:20:35
longer than being part of Google deep

00:20:32 --> 00:20:37
mind where we have these teams that have

00:20:34 --> 00:20:39
a lot of knowledge in different areas

00:20:36 --> 00:20:42
that we can sort of lean and build on.

00:20:38 --> 00:20:43
Uh which I think is super exciting about

00:20:41 --> 00:20:45
being in this company right now is that

00:20:42 --> 00:20:48
we have so many experts in different

00:20:44 --> 00:20:50
areas that we can like seek out advice

00:20:47 --> 00:20:52
and help from. And Shomi, a question for

00:20:49 --> 00:20:55
you on that is, you know, having led the

00:20:51 --> 00:20:58
V3 work, which is kind of mind-blowing,

00:20:54 --> 00:21:02
is is there a reason why this is Genie 3

00:20:57 --> 00:21:05
and not like V3 real time? So, I I think

00:21:01 --> 00:21:08
it's definitely a bit different, right?

00:21:04 --> 00:21:10
Like, oh, Genie allows you to navigate

00:21:07 --> 00:21:12
the environment and then maybe take

00:21:09 --> 00:21:15
actions, right? And that's not something

00:21:11 --> 00:21:17
that veil at this point can do. Um, but

00:21:14 --> 00:21:19
here are other aspects that are diff

00:21:16 --> 00:21:20
that that Jenny doesn't have, right?

00:21:18 --> 00:21:22
doesn't generally doesn't have audio for

00:21:19 --> 00:21:25
example, right? So we we just think it's

00:21:21 --> 00:21:27
um while definitely there are

00:21:24 --> 00:21:30
potential similarities, it's

00:21:26 --> 00:21:32
ufficiently different. Um also another

00:21:29 --> 00:21:34
thing is that at this point uni free is

00:21:31 --> 00:21:36
not available you know as a product and

00:21:33 --> 00:21:38
we do think about it as like a product

00:21:35 --> 00:21:42
hat is kind like makes main mainstream

00:21:37 --> 00:21:44
and became very um very popular and and

00:21:41 --> 00:21:45
you know what the future holds I don't

00:21:43 --> 00:21:47
know but I mean at this point we just

00:21:44 --> 00:21:50
felt it's sufficiently different in

00:21:46 --> 00:21:52
terms of of what capabilities and how

00:21:49 --> 00:21:54
kind like we think about this. So,

00:21:51 --> 00:21:56
Geneifree is pretty much a research

00:21:53 --> 00:21:58
preview, right? It's not something we

00:21:55 --> 00:22:00
are releasing at this point.

00:21:57 --> 00:22:02
>> You know, something we think about a lot

00:21:59 --> 00:22:04
is there what are the edges of a

00:22:01 --> 00:22:05
modality? We're talking about this all

00:22:03 --> 00:22:07
the time, which is, you know, the the

00:22:04 --> 00:22:10
lines start blurring pretty quickly

00:22:06 --> 00:22:12
between real-time image and video and

00:22:09 --> 00:22:14
then real-time video and interactive

00:22:11 --> 00:22:15
whatever world generation world model. I

00:22:13 --> 00:22:17
don't think we have a good word for

00:22:14 --> 00:22:20
what Genie 3 is yet, but you guys called

00:22:16 --> 00:22:22
it world model, which is I think a great

00:22:19 --> 00:22:26
erm, but in your mind like where does

00:22:21 --> 00:22:30
the video generation modalities stop and

00:22:25 --> 00:22:32
real time worlds take you know start and

00:22:29 --> 00:22:34
o you think in the future are these

00:22:31 --> 00:22:36
converging into basically one modality

00:22:33 --> 00:22:37
or if you had to predict over the next

00:22:35 --> 00:22:39
few years do you guys think actually

00:22:36 --> 00:22:41
eah these these will these will diverge

00:22:38 --> 00:22:45
into completely different disciplines?

00:22:40 --> 00:22:46
Um it seems like they share kind of one

00:22:44 --> 00:22:48
parent today which is you know video

00:22:46 --> 00:22:49
generation but where is the world going

00:22:47 --> 00:22:52
do you think are these two completely

00:22:48 --> 00:22:53
different fields? From my perspective um

00:22:51 --> 00:22:56
there are different so I would say

00:22:52 --> 00:22:58
modalities modality is one thing right

00:22:55 --> 00:23:00
we have text we have audio even without

00:22:57 --> 00:23:02
within audio there are different type of

00:22:59 --> 00:23:04
subodalities speech is not the same as

00:23:01 --> 00:23:06
music we have different products for for

00:23:04 --> 00:23:09
music generation and we have other

00:23:05 --> 00:23:11
models for for speech generation speech

00:23:08 --> 00:23:13
understanding so um even within one

00:23:10 --> 00:23:15
modality you can have different flavors

00:23:12 --> 00:23:19
um and then of course you have video and

00:23:14 --> 00:23:21
other things so um I I think

00:23:18 --> 00:23:23
basically I would say The modality is

00:23:20 --> 00:23:26
one one dimension and another is how

00:23:22 --> 00:23:29
fast or uh how quickly we can create we

00:23:26 --> 00:23:33
can create like new samples and

00:23:28 --> 00:23:36
completely orthogonal maybe the

00:23:32 --> 00:23:39
direction is or dimension is how much

00:23:35 --> 00:23:42
control we have right so I think we we

00:23:38 --> 00:23:45
kind of picked a specific direction or a

00:23:41 --> 00:23:47
specific vector in the space for G3 um I

00:23:44 --> 00:23:49
think different products different

00:23:46 --> 00:23:51
models can can try and go in different

00:23:48 --> 00:23:53
direction. I think the space

00:23:50 --> 00:23:56
is pretty big and there are a lot of

00:23:52 --> 00:23:58
trade-offs to be made. So, um yeah, I

00:23:55 --> 00:23:59
don't know. I think it's really depends.

00:23:57 --> 00:24:02
Uh some people believe there is, you

00:23:58 --> 00:24:04
know, one model that will do everything

00:24:01 --> 00:24:06
or I think there is still still

00:24:03 --> 00:24:08
open-ended um what's the best way like

00:24:05 --> 00:24:10
we we're in a place where engineering is

00:24:07 --> 00:24:11
a big part of our research, right? And

00:24:09 --> 00:24:13
actually making those like it's not a

00:24:10 --> 00:24:15
paper, right? Where we want to build

00:24:12 --> 00:24:18
something that people can actually use.

00:24:14 --> 00:24:21
Um, so I think this really makes it like

00:24:17 --> 00:24:22
um abstract ideas go to some to some to

00:24:20 --> 00:24:24
get you to some point, but to actually

00:24:21 --> 00:24:25
build things, you have to make some some

00:24:23 --> 00:24:27
concrete decisions. And I think it kind

00:24:24 --> 00:24:30
like forces you to decide what you want

00:24:26 --> 00:24:31
o do and what you're going to

00:24:29 --> 00:24:34
>> Yeah, I think this is a really

00:24:30 --> 00:24:36
interesting point, mate. And ultimately

00:24:33 --> 00:24:39
it has to be driven by like technical

00:24:35 --> 00:24:43
decisions um and also like the the

00:24:38 --> 00:24:45
goals, right? So we if you look at the

00:24:42 --> 00:24:48
models right now, we obviously made

00:24:44 --> 00:24:50
a choice that we want V3 and G3 to be

00:24:47 --> 00:24:53
separate projects this year, right? And

00:24:50 --> 00:24:55
if you look at look at them both as they

00:24:52 --> 00:24:57
are right now, they have very different

00:24:54 --> 00:24:59
capabilities that the other model does

00:24:56 --> 00:25:01
not have. Um and technically to combine

00:24:58 --> 00:25:03
all of that already into one model,

00:25:00 --> 00:25:04
right, would be I think very challenging

00:25:02 --> 00:25:06
to

00:25:03 --> 00:25:09
>> to I mean V3 is clearly a higher quality

00:25:05 --> 00:25:11
threshold than um than G3, right?

00:25:08 --> 00:25:15
um and it has very different different

00:25:10 --> 00:25:16
priorities, right? So um then then the

00:25:14 --> 00:25:18
natural thing is you could say oh well

00:25:15 --> 00:25:20
you know what if we just took these

00:25:17 --> 00:25:22
together and combined them but that may

00:25:19 --> 00:25:25
not be the best next step for either of

00:25:21 --> 00:25:27
those two um two models right so um it

00:25:24 --> 00:25:28
may not be the case that the thing that

00:25:26 --> 00:25:30
he other one has is actually the most

00:25:27 --> 00:25:33
compelling thing for a completely

00:25:29 --> 00:25:36
different experience um and I think that

00:25:32 --> 00:25:39
given the the breadth of of interest in

00:25:35 --> 00:25:41
both models right there's actually quite

00:25:38 --> 00:25:43
a small set of people that are like

00:25:40 --> 00:25:45
really actively using both and they tend

00:25:42 --> 00:25:46
to be more folks like yourselves who are

00:25:44 --> 00:25:48
just more broadly interested in AI,

00:25:45 --> 00:25:51
right? Rather than like really

00:25:47 --> 00:25:54
downstream um use cases. So like you

00:25:50 --> 00:25:56
mentioned agent training um for one uh

00:25:53 --> 00:25:59
which is like very sort of like high

00:25:55 --> 00:26:02
action frequency requires more ecoentric

00:25:58 --> 00:26:04
sort of I guess more like worlds where

00:26:02 --> 00:26:07
tasks can be achieved but doesn't

00:26:03 --> 00:26:09
require you know the like high quality

00:26:06 --> 00:26:11
cinema style videos you could generate

00:26:08 --> 00:26:12
with a bio model right it's quite

00:26:10 --> 00:26:15
different and then on the film making

00:26:12 --> 00:26:18
element I mean I'm not so sure that

00:26:14 --> 00:26:20
genie 3 is really there at this point um

00:26:17 --> 00:26:22
and that would be necessarily the goal.

00:26:19 --> 00:26:24
>> I I don't know. On film making, Justine

00:26:22 --> 00:26:26
can do some pretty incredible things

00:26:23 --> 00:26:27
with the with the film making tools

00:26:25 --> 00:26:29
today. You'd be surprised.

00:26:26 --> 00:26:32
>> Give me access. I will make amazing

00:26:28 --> 00:26:33
films with with Genie 3. Um I I guess

00:26:31 --> 00:26:35
that did kind of get to my one of my

00:26:32 --> 00:26:37
questions though, which is the work you

00:26:34 --> 00:26:39
guys are doing is incredible and you

00:26:36 --> 00:26:41
clearly probably have so much going on

00:26:38 --> 00:26:43
in your brains just to coordinate

00:26:40 --> 00:26:45
training these models and managing these

00:26:42 --> 00:26:47
teams. How much do you also have to

00:26:44 --> 00:26:49
think about like what are the downstream

00:26:46 --> 00:26:51
use cases of the model when you're

00:26:48 --> 00:26:53
training it? Because you could imagine a

00:26:50 --> 00:26:54
world in which you're just like we don't

00:26:52 --> 00:26:55
really know or care what people are

00:26:53 --> 00:26:57
going to do with it yet. We're just

00:26:54 --> 00:27:00
going to go in the research direction we

00:26:56 --> 00:27:01
think we should go and see what happens.

00:26:59 --> 00:27:03
But but based on how you guys are

00:27:00 --> 00:27:05
talking about it, it sounds like you've

00:27:02 --> 00:27:07
also been pretty thoughtful around what

00:27:04 --> 00:27:09
are the different capabilities or

00:27:06 --> 00:27:12
features needed for different potential

00:27:08 --> 00:27:15
use cases at least of different models.

00:27:11 --> 00:27:17
Yeah, I'll say that basically uh we we

00:27:14 --> 00:27:19
have some applications in mind but

00:27:16 --> 00:27:23
hat's not what's driving the research.

00:27:18 --> 00:27:25
Um it's more about can we how far can we

00:27:22 --> 00:27:28
push in this particular direction can we

00:27:24 --> 00:27:30
make all of that work like really great

00:27:27 --> 00:27:32
quality really f really fast generation

00:27:29 --> 00:27:34
real time very controllable I think we

00:27:32 --> 00:27:38
that's kind like what drive us I think

00:27:33 --> 00:27:40
third to to to have to develop G3 and

00:27:37 --> 00:27:42
the applications kind of like follow and

00:27:39 --> 00:27:43
I don't think you know to be honest I

00:27:41 --> 00:27:45
don't know what would be the

00:27:42 --> 00:27:47
applications for like I think we're very

00:27:44 --> 00:27:50
surprised um you know I'd like to

00:27:46 --> 00:27:53
mention like free we like people find

00:27:49 --> 00:27:55
new new ways how in in how it can be

00:27:52 --> 00:27:57
useful and to prompt it to have like

00:27:54 --> 00:27:58
visual stuff you know people just

00:27:56 --> 00:28:00
discover it right we didn't even think

00:27:58 --> 00:28:02
about it initially so I I expect kind of

00:28:00 --> 00:28:04
the same thing and I think that's why

00:28:01 --> 00:28:06
I'm excited for more people to be to be

00:28:03 --> 00:28:09
able to access in the future and in

00:28:05 --> 00:28:13
general our approach is to um to make

00:28:08 --> 00:28:16
sure that that uh over time um there is

00:28:12 --> 00:28:18
more access to to um to the models we

00:28:15 --> 00:28:19
build um and and I think that's the only

00:28:17 --> 00:28:20
way to discover what's the real

00:28:18 --> 00:28:22
potentials.

00:28:19 --> 00:28:24
>> I guess one one somewhere related to

00:28:21 --> 00:28:27
that like how do you think going forward

00:28:23 --> 00:28:29
like Genie 4 5 or any other models like

00:28:26 --> 00:28:32
what is like top of mind right now like

00:28:28 --> 00:28:33
if you wanted for example to focus on I

00:28:31 --> 00:28:34
don't know like seems like gaming could

00:28:32 --> 00:28:36
be one of the applications having

00:28:33 --> 00:28:40
multiplayer type of games where you have

00:28:35 --> 00:28:42
two special memories or uh two different

00:28:39 --> 00:28:44
uh completely views but that some point

00:28:41 --> 00:28:46
hey merge. How are you thinking on like

00:28:43 --> 00:28:48
going forward like what's next? So is it

00:28:45 --> 00:28:50
like scaling these models just on more

00:28:47 --> 00:28:52
data, more compute? Is it creating this

00:28:49 --> 00:28:54
ort of like multi-universe type of

00:28:51 --> 00:28:55
things where you're you have multiple

00:28:53 --> 00:28:57
players, multiple people looking at the

00:28:54 --> 00:28:58
same model, putting different views?

00:28:56 --> 00:29:01
What's top of mind for you guys?

00:28:58 --> 00:29:05
>> Uh top of mind I think for the next few

00:29:00 --> 00:29:07
days might be a vacation. Uh after that

00:29:04 --> 00:29:11
um maybe walking my dog in the real

00:29:06 --> 00:29:12
world. Uh and then I think you mentioned

00:29:10 --> 00:29:16
a bunch of really interesting things to

00:29:11 --> 00:29:17
be honest and like uh I think we are

00:29:15 --> 00:29:20
we're still collecting a lot of feedback

00:29:16 --> 00:29:23
on this current model, right? Um and I

00:29:19 --> 00:29:24
think that in general we are most

00:29:22 --> 00:29:27
interested in building just the most

00:29:23 --> 00:29:30
capable models, right? And so we would

00:29:26 --> 00:29:33
hope to have even broader impact in

00:29:29 --> 00:29:35
future uh and really enable other teams

00:29:32 --> 00:29:38
to do cool things with it, right? Both

00:29:34 --> 00:29:42
internally and externally. Um, and for

00:29:38 --> 00:29:44
me it's like I started this with like a

00:29:41 --> 00:29:46
very very focused vision about AGI. And

00:29:43 --> 00:29:48
I still think honestly for my what I'm

00:29:45 --> 00:29:51
excited about for for AGI and which is

00:29:47 --> 00:29:53
more embodied agents. Um, I really

00:29:50 --> 00:29:55
believe this is the the fastest path to

00:29:52 --> 00:29:57
getting these agents like in the real

00:29:54 --> 00:29:59
world. Um, and I think we made a big

00:29:56 --> 00:30:01
step towards that. But and still like

00:29:58 --> 00:30:03
I'm sometimes even more excited about

00:30:00 --> 00:30:05
applications I never thought of that

00:30:02 --> 00:30:07
come up from other people seeing the

00:30:04 --> 00:30:09
model. Right. So, I think it's kind of

00:30:06 --> 00:30:10
this like trade-off of, you know,

00:30:08 --> 00:30:12
obviously you want to focus on some

00:30:09 --> 00:30:14
applications, but then um you want to be

00:30:11 --> 00:30:16
open-minded about others. And I think

00:30:13 --> 00:30:17
that's the real joy of building models

00:30:15 --> 00:30:20
like this, right? Is you get to see all

00:30:16 --> 00:30:21
of these people who can be way more

00:30:19 --> 00:30:23
creative than than me with it. So, I

00:30:20 --> 00:30:24
think that there's like all these really

00:30:22 --> 00:30:26
cool things that we can do. And I

00:30:23 --> 00:30:28
honestly don't really can't really tell

00:30:25 --> 00:30:30
you in one year what the biggest

00:30:27 --> 00:30:32
application will be. Um but we'll

00:30:29 --> 00:30:35
definitely be trying to build better

00:30:31 --> 00:30:37
models. Yeah, I'm I'm really excited,

00:30:34 --> 00:30:39
but I I think we're only um as

00:30:36 --> 00:30:41
impressive, you know, maybe the model

00:30:38 --> 00:30:43
is, I think they're very far from

00:30:40 --> 00:30:45
actually simulating the world accurately

00:30:42 --> 00:30:47
and being able to do to kind of put a

00:30:44 --> 00:30:50
person in there and then do whatever

00:30:46 --> 00:30:52
they want. Um and and I mean when I say

00:30:49 --> 00:30:54
far, it doesn't mean it's far in terms

00:30:51 --> 00:30:56
of, you know, calendar time because we

00:30:54 --> 00:30:59
are we live in an accelerated timeline,

00:30:55 --> 00:31:02
but it it feels like there is more work

00:30:58 --> 00:31:04
to do to get there. Um and and I think I

00:31:01 --> 00:31:08
just imagine like when once we can

00:31:03 --> 00:31:10
actually you know whatever the the uh

00:31:07 --> 00:31:13
form factor would be but step into this

00:31:09 --> 00:31:14
world and just kind of like maybe tell

00:31:12 --> 00:31:16
it how you want to to what you want to

00:31:14 --> 00:31:18
experience. There's so many

00:31:15 --> 00:31:20
applications. Imagine for example

00:31:17 --> 00:31:22
someone is afraid of I don't know

00:31:19 --> 00:31:24
talking to people on a stage or in a

00:31:21 --> 00:31:26
podcast right they can simulate that

00:31:23 --> 00:31:29
right or you can have someone who is

00:31:25 --> 00:31:31
like afraid of spiders they can maybe

00:31:28 --> 00:31:33
actually see themselves getting over

00:31:30 --> 00:31:35
that so that's like you know just just

00:31:32 --> 00:31:37
one example of something that's actually

00:31:34 --> 00:31:40
my wife thought about it it's not my

00:31:36 --> 00:31:42
idea so uh I think it's really like

00:31:39 --> 00:31:45
there's so many things right so so um I

00:31:41 --> 00:31:47
think this is just it's uh it's all it

00:31:44 --> 00:31:49
all hinges on the ability to simulate

00:31:46 --> 00:31:52
the world and maybe put ourselves in it,

00:31:48 --> 00:31:54
maybe seeing ourel from from the side um

00:31:51 --> 00:31:56
and potentially having agents

00:31:53 --> 00:31:58
interacting with things and and yeah,

00:31:55 --> 00:32:00
the realism and and really making it

00:31:57 --> 00:32:01
work in the way that is similar to our

00:31:59 --> 00:32:02
world, I think is really key.

00:32:00 --> 00:32:04
>> I'm actually personally petrified of

00:32:02 --> 00:32:06
skiing and the models are already quite

00:32:03 --> 00:32:09
good at that. So, I might when things

00:32:05 --> 00:32:11
quieten down, spend some time cuz I

00:32:08 --> 00:32:13
promised my my wife that our children

00:32:10 --> 00:32:14
would grow up knowing how to ski and

00:32:12 --> 00:32:16
we're getting close to the age where I

00:32:13 --> 00:32:17
have to live up to my promise and I'm

00:32:15 --> 00:32:19
not sure if I want to do it yet.

00:32:16 --> 00:32:21
>> So, we have to improve the model for

00:32:18 --> 00:32:22
you, Jack. So, you can actually

00:32:20 --> 00:32:23
get that in distribution.

00:32:21 --> 00:32:25
>> I hope so.

00:32:22 --> 00:32:28
>> We were just talking about before the we

00:32:24 --> 00:32:29
started that uh we might see

00:32:27 --> 00:32:31
applications like in robotics. I mean,

00:32:28 --> 00:32:34
Jack, you were talking about embodied AI

00:32:30 --> 00:32:35
and like now like limitation in robotics

00:32:33 --> 00:32:36
is the data, right? like how much data

00:32:34 --> 00:32:38
you can collect and now probably you can

00:32:35 --> 00:32:40
just generate a lot of different scenes

00:32:38 --> 00:32:44
that you were not able to do before

00:32:40 --> 00:32:45
purely from like just recording videos

00:32:43 --> 00:32:48
or so. So I think that's another thing

00:32:44 --> 00:32:49
that is pretty exciting and uh I mean

00:32:47 --> 00:32:50
congrats on the on on the model. It's

00:32:48 --> 00:32:54
it's phenomenal

00:32:50 --> 00:32:56
>> on the robotics application. There was a

00:32:53 --> 00:32:57
uh conversation that I was listening to

00:32:55 --> 00:33:00
from Demis yesterday where he was

00:32:56 --> 00:33:02
talking about your guys' work on Genie 3

00:32:59 --> 00:33:04
and he mentioned that there's a there's

00:33:01 --> 00:33:06
an agent I think you guys call it SIMA,

00:33:03 --> 00:33:09
>> right? Which can then interact with the

00:33:06 --> 00:33:11
Genie agent. And as I was hearing him

00:33:08 --> 00:33:13
describe it, which which was kind of

00:33:10 --> 00:33:16
breaking my mind, which is that you had

00:33:12 --> 00:33:18
one simulation agent asking the world

00:33:15 --> 00:33:20
asking the genie agent to essentially

00:33:17 --> 00:33:23
create a real-time environment for it to

00:33:19 --> 00:33:26
interact in, right? Um, which was when I

00:33:22 --> 00:33:27
realized, oh, the the way you guys have

00:33:25 --> 00:33:29
built it, it's it's composable with

00:33:26 --> 00:33:30
other agents. Can you talk a little bit

00:33:28 --> 00:33:33
about why that's so important for

00:33:29 --> 00:33:35
obotics like Marco was saying and what

00:33:32 --> 00:33:36
are the majora limit limitations

00:33:34 --> 00:33:40
today that you think we'd have to

00:33:35 --> 00:33:42
vercome as a space to make the robotics

00:33:39 --> 00:33:44
um sort of progress the rate of progress

00:33:41 --> 00:33:46
in robotics much faster than it is now

00:33:43 --> 00:33:48
>> so um we designed it to be an envir

00:33:45 --> 00:33:51
onment rather than an agent right

00:33:47 --> 00:33:52
so so Genie 3 is very much like an

00:33:50 --> 00:33:54
environment model like we don't see it

00:33:51 --> 00:33:57
as like an agent itself that can like

00:33:53 --> 00:33:58
think and act in the world it's more

00:33:56 --> 00:34:00
just a general purpose

00:33:57 --> 00:34:02
sort of simulator in a sense, right?

00:34:00 --> 00:34:05
That can actually simulate experiences

00:34:01 --> 00:34:07
for agents. And we know that like

00:34:04 --> 00:34:09
learning from experience is a really

00:34:06 --> 00:34:11
important paradigm for agents, right?

00:34:08 --> 00:34:14
That's how we got Alph Go because the

00:34:10 --> 00:34:16
agent uh Alph Go learned by playing Go

00:34:13 --> 00:34:18
by itself, trying new things, right? And

00:34:15 --> 00:34:20
then learning from feedback um with

00:34:17 --> 00:34:22
reinforcement learning, learning to

00:34:19 --> 00:34:24
improve itself and and actually discover

00:34:21 --> 00:34:26
new things like it discovered new moves

00:34:23 --> 00:34:28
at move 37 that humans didn't think was

00:34:25 --> 00:34:30
a worthwhile move, right? But but

00:34:27 --> 00:34:32
actually AlphaGo learned that it was

00:34:29 --> 00:34:34
because it could experience and try

00:34:31 --> 00:34:36
things for itself. And in robotics, we

00:34:33 --> 00:34:38
have this paradigm right now where

00:34:35 --> 00:34:41
there's some datadriven approaches,

00:34:37 --> 00:34:44
right, where you can collect uh data in

00:34:40 --> 00:34:46
a quite a laborious way. Um but it

00:34:43 --> 00:34:48
looks like the downstream task. So it

00:34:45 --> 00:34:51
looks real and there's not so much of a

00:34:47 --> 00:34:52
mismatch between the the two domains or

00:34:50 --> 00:34:55
you can you can learn in simulation

00:34:52 --> 00:34:56
right but the robotic simulations are

00:34:54 --> 00:34:58
ven the best ones and we have some of

00:34:55 --> 00:35:01
the best ones at deep mind we have

00:34:57 --> 00:35:02
Majoko right which we work with um

00:35:00 --> 00:35:04
they're still quite far away from the

00:35:02 --> 00:35:07
real world right and so you have the sim

00:35:03 --> 00:35:11
tore gap um but even the sim tore gap

00:35:06 --> 00:35:13
itself uh I think is kind of like poorly

00:35:10 --> 00:35:15
named because what people consider to be

00:35:12 --> 00:35:17
real in robotics is typically still a

00:35:14 --> 00:35:18
lab or some very constrained environment

00:35:16 --> 00:35:21
where you've got a bunch of spotlights

00:35:17 --> 00:35:23
on a robot and then tons of researchers

00:35:20 --> 00:35:26
crowding around watching, you know. Um

00:35:22 --> 00:35:28
whereas really re real for me is make

00:35:25 --> 00:35:31
any reference to this. It's the ability

00:35:27 --> 00:35:34
to walk my dog when I'm too busy uh to

00:35:30 --> 00:35:35
to hold the lead, cross the street,

00:35:33 --> 00:35:37
you know, see someone who's scared of

00:35:34 --> 00:35:39
dogs, know to go around them, see

00:35:36 --> 00:35:41
someone with a ball, change directions,

00:35:38 --> 00:35:43
like all these challenging situations in

00:35:40 --> 00:35:44
the real world, right? And of course,

00:35:42 --> 00:35:46
you still have gripping. You still have

00:35:43 --> 00:35:48
these other other tasks. But you need to

00:35:45 --> 00:35:50
really discover your own behaviors from

00:35:47 --> 00:35:52
your own experience, right? And that's

00:35:49 --> 00:35:54
that doing that in physical embodied

00:35:51 --> 00:35:55
worlds is super challenging because

00:35:53 --> 00:35:57
there's so many reasons why firstly that

00:35:54 --> 00:35:59
could be expensive to collect data in

00:35:56 --> 00:36:01
those in those settings. You'd have to

00:35:58 --> 00:36:02
keep moving the robot back to where it

00:36:00 --> 00:36:04
started every time it like doesn't do

00:36:01 --> 00:36:07
something right. And also it could be

00:36:03 --> 00:36:09
unsafe, right? Um, so there's many

00:36:06 --> 00:36:12
reasons why we can't really do learning

00:36:08 --> 00:36:14
from experience in the physical world,

00:36:11 --> 00:36:16
right? So we do it in simulation, but

00:36:13 --> 00:36:17
really what we think with with Gen3 is

00:36:15 --> 00:36:20
it's the best of both, right? Because

00:36:16 --> 00:36:22
you're taking a real world datadriven

00:36:19 --> 00:36:24
approach, right? But then you've got the

00:36:21 --> 00:36:26
ability to learn in simulation. So it

00:36:23 --> 00:36:28
kind of combines the the good parts of

00:36:25 --> 00:36:30
each of those. Uh, and so that's why I

00:36:27 --> 00:36:34
think it could be super powerful. Um,

00:36:30 --> 00:36:36
not just for for robot example, but I

00:36:33 --> 00:36:38
really love this idea of having when it

00:36:35 --> 00:36:40
rains in London a lot. Uh, not having to

00:36:37 --> 00:36:41
take my dog for the second walk would be

00:36:39 --> 00:36:44
great.

00:36:40 --> 00:36:46
>> And as you can see, we build a model

00:36:43 --> 00:36:48
basically for Jack personal

00:36:45 --> 00:36:49
>> applications. That's what driving the

00:36:47 --> 00:36:52
project is. Yeah.

00:36:48 --> 00:36:52
>> Well, clearly dog owners out there.

00:36:51 --> 00:36:54
>> Yeah.

00:36:51 --> 00:36:55
>> I just saying clearly Jack, it's time to

00:36:53 --> 00:36:56
move to California.

00:36:54 --> 00:36:59
>> Yeah.

00:36:55 --> 00:37:01
That's solution. Less rain,

00:36:58 --> 00:37:03
>> less lag.

00:37:00 --> 00:37:04
>> I mean, I personally love California,

00:37:02 --> 00:37:06
but my wife's not my wife's not

00:37:04 --> 00:37:07
convinced. Sorry.

00:37:05 --> 00:37:09
>> We're convinced here.

00:37:06 --> 00:37:11
>> Yeah. Just just to touch on, you know,

00:37:08 --> 00:37:12
maybe a final point on the robots kind

00:37:10 --> 00:37:14
like robotics part. I think there like

00:37:12 --> 00:37:17
it's definitely, you know, robotics

00:37:13 --> 00:37:18
means is more than visual, right? Like

00:37:16 --> 00:37:22
we need to be able to I think this is an

00:37:17 --> 00:37:24
important point. um we want we can drive

00:37:21 --> 00:37:26
the decisions of the robot by looking

00:37:23 --> 00:37:28
around but still it has to to kind of

00:37:25 --> 00:37:30
you know do actuations decide where to

00:37:27 --> 00:37:31
move how to respond to the environment.

00:37:29 --> 00:37:34
So I think there there are definitely

00:37:30 --> 00:37:36
some gaps but still at the core of the

00:37:33 --> 00:37:38
problem being able to reason about the

00:37:35 --> 00:37:40
nvironment. uh we think this is

00:37:37 --> 00:37:43
omething that that's the you know word

00:37:39 --> 00:37:45
models uh general purpose world models

00:37:42 --> 00:37:48
uch as Genie free can really help with

00:37:44 --> 00:37:50
and and maybe with future research we

00:37:47 --> 00:37:53
can actually bridge those gaps of

00:37:49 --> 00:37:56
physical um kind of like understanding

00:37:52 --> 00:37:58
and actually getting responses physical

00:37:55 --> 00:37:59
responses from the world which is a very

00:37:57 --> 00:38:02
interesting direction to explore

00:37:58 --> 00:38:03
>> one last question from my side the and I

00:38:01 --> 00:38:05
don't know if you can answer this but

00:38:02 --> 00:38:06
like is it going to become public like

00:38:04 --> 00:38:09
can developers access it at some point

00:38:05 --> 00:38:09
or is there like some sort of idea on

00:38:08 --> 00:38:11
this?

00:38:08 --> 00:38:13
>> So, as you can see, we are very excited

00:38:10 --> 00:38:15
about having more people accessing it.

00:38:12 --> 00:38:18
So, we're we're definitely want to make

00:38:14 --> 00:38:20
it happen. Um, there is no kind like a

00:38:17 --> 00:38:23
concrete timeline at the moment. Uh,

00:38:19 --> 00:38:26
but, you know, I'm sure once we have

00:38:22 --> 00:38:27
more to share, we will do. Awesome. One

00:38:25 --> 00:38:29
of the things I've been thinking about a

00:38:26 --> 00:38:31
lot is we see sort of with every like

00:38:28 --> 00:38:34
modality like you know maybe first LLMs

00:38:30 --> 00:38:35
and then image and video and audio.

00:38:33 --> 00:38:37
There's like early kind of glimmers of

00:38:34 --> 00:38:39
something really exciting in a project

00:38:36 --> 00:38:41
or a research preview and then there's

00:38:38 --> 00:38:42
like a ton of data and compute and

00:38:40 --> 00:38:44
researchers kind of poured at the

00:38:42 --> 00:38:46
problem and and you hopefully see this

00:38:43 --> 00:38:48
ort of like exponential progress till

00:38:45 --> 00:38:50
you eventually get to the point where

00:38:47 --> 00:38:52
like you're out of data or or the

00:38:49 --> 00:38:54
improvements don't come as easily. I'm

00:38:51 --> 00:38:57
wondering for your thoughts like where

00:38:53 --> 00:38:58
we are on sort of that curve for world

00:38:56 --> 00:39:01
models.

00:38:57 --> 00:39:03
>> That's a really good question. Um I

00:39:00 --> 00:39:06
actually have a super handwavy somewhat

00:39:02 --> 00:39:08
swerving answer, right? Uh and I think

00:39:05 --> 00:39:10
it's actually both. So I think the

00:39:08 --> 00:39:13
current capabilities are actually

00:39:09 --> 00:39:15
already quite compelling. And so you

00:39:12 --> 00:39:18
could make the case that like if what

00:39:14 --> 00:39:20
you wanted was a a minutes of

00:39:17 --> 00:39:22
photorealistic any world generation with

00:39:19 --> 00:39:24
memory that could actually be the end

00:39:21 --> 00:39:26
goal, right? And two or three years ago

00:39:23 --> 00:39:30
I probably would have said that was a

00:39:25 --> 00:39:32
5year goal. Um and so at that point if

00:39:29 --> 00:39:34
you just wanted to improve that I think

00:39:31 --> 00:39:36
you probably end up with this maybe like

00:39:33 --> 00:39:39
I think the jump from Genie 2 to Genie 3

00:39:35 --> 00:39:41
was was absolutely massive. um and went

00:39:38 --> 00:39:43
from being like kind of a cool bit of

00:39:40 --> 00:39:45
research that was like showing signs of

00:39:42 --> 00:39:47
life something that could already be

00:39:44 --> 00:39:48
very compelling but I think there's a

00:39:46 --> 00:39:50
lot more that you can do with this and

00:39:48 --> 00:39:52
Shomi kind of referenc this to

00:39:49 --> 00:39:53
himself right like it's not the case

00:39:51 --> 00:39:55
that you're dropping yourself in the

00:39:52 --> 00:39:58
world right and like it's like the real

00:39:54 --> 00:39:59
being in the real world for example it's

00:39:57 --> 00:40:01
actually quite different to that when

00:39:58 --> 00:40:03
you do you know take a minute to look

00:40:00 --> 00:40:06
away from computer screen it's quite a

00:40:02 --> 00:40:08
bit richer out there um and that's just

00:40:05 --> 00:40:09
for the real world we also want this

00:40:07 --> 00:40:13
ability to generate completely new

00:40:08 --> 00:40:16
things, right? So, um I think we've got

00:40:12 --> 00:40:17
a huge gap to to close, right, with um

00:40:15 --> 00:40:20
the new capabilities that we want to

00:40:16 --> 00:40:21
add, but I think it's maybe a bit

00:40:19 --> 00:40:22
different to language models or actually

00:40:20 --> 00:40:24
maybe it is similar to language models,

00:40:22 --> 00:40:26
but with language models, there's been

00:40:23 --> 00:40:28
like lots of new steps that have

00:40:25 --> 00:40:29
actually come on top, right, that that

00:40:27 --> 00:40:30
maybe we didn't think were

00:40:28 --> 00:40:33
possible. We thought things were

00:40:30 --> 00:40:36
plateauing and then a new idea came that

00:40:32 --> 00:40:38
made a significant change. Uh and that

00:40:35 --> 00:40:40
has happened a couple of times um in the

00:40:37 --> 00:40:42
past few years. So I think that there's

00:40:39 --> 00:40:44
a few more of those left for sure.

00:40:41 --> 00:40:46
>> My my final question for you guys is are

00:40:43 --> 00:40:50
we living in a simulation?

00:40:45 --> 00:40:50
Oh yeah, that's every every

00:40:50 --> 00:40:57
my thinking about that is actually yeah

00:40:52 --> 00:40:59
I thought about a bit um I think the the

00:40:56 --> 00:41:02
if we live in a simulation my take is

00:40:58 --> 00:41:05
that it doesn't run on our current

00:41:01 --> 00:41:07
hardware because uh because it's it's

00:41:04 --> 00:41:09
analog and not like you know it's

00:41:06 --> 00:41:11
continuous all of the observations are

00:41:08 --> 00:41:14
continuous and there is nothing like but

00:41:10 --> 00:41:16
maybe uh the quantum level is is you

00:41:13 --> 00:41:19
know some limitation of for you wanted

00:41:15 --> 00:41:21
to go philosophical. So you go uh it's

00:41:18 --> 00:41:24
ome kind of like a hardware limitation

00:41:20 --> 00:41:27
of the the simulation we run on. So

00:41:23 --> 00:41:29
yeah, take it or leave it. But

00:41:26 --> 00:41:31
>> it's great answer. Clearly a lot of work

00:41:28 --> 00:41:34
for the TPU team to do.

00:41:30 --> 00:41:36
>> Yeah, maybe quantum computing will be

00:41:33 --> 00:41:38
actually will be running our actual

00:41:36 --> 00:41:40
simulation. So yeah. Yeah,

00:41:37 --> 00:41:41
>> that's a great place to wrap. Schlomi

00:41:39 --> 00:41:42
Jack, thank you so much for coming on

00:41:40 --> 00:41:47
the podcast.

00:41:41 --> 00:41:47
>> Thank you guys for having us. Right.

00:42:11 --> 00:42:15
Come on.

<!-- YOUTUBE_TRANSCRIPT_END -->
