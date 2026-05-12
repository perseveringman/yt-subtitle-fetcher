---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "qrZAR0M2hos"
title: "a16z Podcast | The Dream of AI Is Alive in Go"
video_url: "https://www.youtube.com/watch?v=qrZAR0M2hos"
thumbnail_url: "https://i.ytimg.com/vi/qrZAR0M2hos/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=qrZAR0M2hos"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:33:52.000Z"
upload_date: "2019-01-02"
duration_seconds: 1761
duration_human: "29:21"
view_count: 42
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:23:41.593Z"
---

# a16z Podcast | The Dream of AI Is Alive in Go

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=qrZAR0M2hos
- video_id: qrZAR0M2hos
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:33:52.000Z
- upload_date: 2019-01-02
- duration: 29:21
- view_count: 42
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Why are people so fired up about a computer winning yet another game? Whether it's checkers, chess, Jeopardy, or the ancient Chinese game of Go, we get excited about the potential for more when we see computers beat humans. But then nothing "big" -- in terms of generalized artificial intelligence -- seems to happen after that burst of excitement.

Now, with the excitement (and other emotions) around Google DeepMind's "AlphaGo" using machine learning and other techniques to beat one of the world's top Go players, Lee Sodol, in Korea ... it's like the dream of the 1990s (and 1980s, and 1970s, and 1960s) is alive in Seoul right now. Is this time different? How do we know?

a16z's head of research and deal team Frank Chen and board partner Steven Sinofsky -- who both suffered through the last “AI winter” -- share how everything old is new again; the triumph of data over algorithms; and the evergreen battle between purist vs. "practical" approaches. Ultimately, it's about how innovation in general plays out, at a scale both grand (cycles and gestation periods) and mundane (sometimes, the only way to make a product work is to hack together the old, the new, and everything in between).

NOTE: The Super Mario World video referenced in this podcast is at www.youtube.com/watch?v=qv6UVOQ0F44

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
hi everyone welcome to the a 6nz podcast

00:00:02 --> 00:00:06
I am so Nolan today we have two partners

00:00:04 --> 00:00:08
from andreessen horowitz we were just

00:00:05 --> 00:00:10
having an informal conversation in the

00:00:07 --> 00:00:12
hallway literally around machine

00:00:09 --> 00:00:14
learning and AI I'm Steven Sinofsky a

00:00:11 --> 00:00:16
board partner phase 6 and Z gave a

00:00:13 --> 00:00:18
presentation on the evolution of machine

00:00:15 --> 00:00:21
learning and Frank Chen recently put out

00:00:17 --> 00:00:25
a tweet storm on why google's deepmind

00:00:20 --> 00:00:26
algorithm beating Lisa dull was so

00:00:24 --> 00:00:27
significant and they were sort of

00:00:25 --> 00:00:28
talking about like oh my god we've been

00:00:26 --> 00:00:29
here before

00:00:27 --> 00:00:30
but it's not gonna be all

00:00:28 --> 00:00:33
backward-looking because I think the

00:00:29 --> 00:00:35
point is that the evolution is what's

00:00:32 --> 00:00:36
why is why now right and also putting

00:00:34 --> 00:00:39
you know me I'd love to put things in in

00:00:35 --> 00:00:40
context cuz like there's always lessons

00:00:38 --> 00:00:42
to be learned and patterns to avoid a

00:00:39 --> 00:00:43
non-void in patterns that's a key word

00:00:41 --> 00:00:45
for today ok well let's start talking

00:00:42 --> 00:00:47
about those patterns well maybe let's

00:00:44 --> 00:00:49
tart with the big go victory which is

00:00:46 --> 00:00:51
it got people really fired up it

00:00:48 --> 00:00:53
dominated the press for a little while

00:00:50 --> 00:00:53
and you might be wondering what is the

00:00:52 --> 00:00:56
big deal

00:00:52 --> 00:00:58
computer program won another board game

00:00:55 --> 00:00:59
a board game like what could be less

00:00:57 --> 00:01:01
relevant to everyday life right and

00:00:58 --> 00:01:03
we've seen this before we started with

00:01:00 --> 00:01:05
tic-tac-toe and we got to checkers and

00:01:02 --> 00:01:07
we got to chess and then Watson even won

00:01:04 --> 00:01:09
jeopardy and now here we are talking

00:01:06 --> 00:01:11
about another board game so like it's

00:01:08 --> 00:01:12
kind of irrelevant to everyday life

00:01:10 --> 00:01:15
isn't it and the surprising thing is

00:01:11 --> 00:01:17
look we've had a lot of false starts

00:01:14 --> 00:01:19
with artificial intelligence and the

00:01:16 --> 00:01:21
vector has always been hey look

00:01:18 --> 00:01:23
now that we've run this very

00:01:20 --> 00:01:26
sophisticated board game chess checkers

00:01:22 --> 00:01:28
whatever now we're on the verge to do

00:01:25 --> 00:01:30
general-purpose intelligence right and

00:01:27 --> 00:01:33
that has always been the promise and the

00:01:29 --> 00:01:36
full start of AI and so the question is

00:01:32 --> 00:01:38
whether this victory with go which is an

00:01:35 --> 00:01:41
incredibly complex game you can't brute

00:01:37 --> 00:01:42
force search all of the possible moves

00:01:40 --> 00:01:43
because there's just too many right

00:01:41 --> 00:01:51
here right so people know it's like a

00:01:42 --> 00:01:52
Google times a chess game so think of so

00:01:50 --> 00:01:53
basically if you think of the number

00:01:51 --> 00:01:55
total number of chess moves and there's

00:01:52 --> 00:01:57
a lot of them writes a big board lots of

00:01:54 --> 00:01:59
pieces you multiply by a Google that's

00:01:56 --> 00:02:01
how many possible go board

00:01:58 --> 00:02:03
configurations there are so you can't

00:02:00 --> 00:02:04
actually brute force search all of the

00:02:02 --> 00:02:06
things which is what you'd expect a

00:02:03 --> 00:02:08
computer to be able to do it's got lots

00:02:05 --> 00:02:09
of processor it's got this very reliable

00:02:07 --> 00:02:11
big memory let's just search all the

00:02:08 --> 00:02:12
possible spaces and then we'll figure

00:02:10 --> 00:02:14
out how to win because we know what all

00:02:12 --> 00:02:16
the winning games look like

00:02:13 --> 00:02:18
turns out you can't do this for a go and

00:02:15 --> 00:02:21
so now hope springs eternal again which

00:02:17 --> 00:02:22
is look at the very sophisticated set of

00:02:20 --> 00:02:25
techniques they use to win this game

00:02:21 --> 00:02:27
there's deep learning and then there's

00:02:24 --> 00:02:29
decision trees and then there's

00:02:26 --> 00:02:31
upervised learning look at all of the

00:02:28 --> 00:02:34
techniques and maybe now this time it

00:02:30 --> 00:02:36
really is the dawn of the generalized

00:02:33 --> 00:02:39
intelligence this is a massive massive

00:02:35 --> 00:02:42
win in the world of computer science but

00:02:38 --> 00:02:44
I knew right away just having kind of

00:02:41 --> 00:02:47
been around the block in academia that

00:02:43 --> 00:02:49
people were gonna start to clamor and

00:02:46 --> 00:02:52
efine its victory and so try to make it

00:02:48 --> 00:02:55
narrow so like well it's not really AI

00:02:51 --> 00:02:58
because it used multiple techniques some

00:02:54 --> 00:03:00
of them which aren't AI and the funniest

00:02:57 --> 00:03:03
hing about that is that is like been

00:02:59 --> 00:03:05
the very nature of AI dialogue since it

00:03:02 --> 00:03:07
againi since the very very early and in

00:03:04 --> 00:03:08
fact like and so this is where Frank and

00:03:06 --> 00:03:11
I started talking in the hallway because

00:03:07 --> 00:03:13
we were both at AI schools um I was in

00:03:10 --> 00:03:16
graduate school in the late 80s at UMass

00:03:12 --> 00:03:18
and Frank was at Stanford and like the

00:03:15 --> 00:03:20
whole thing about AI was always if you

00:03:17 --> 00:03:22
actually could find a practical use for

00:03:19 --> 00:03:24
one of the techniques you cross it off

00:03:21 --> 00:03:27
the list of AI techniques and it's like

00:03:23 --> 00:03:29
no longer AI and so it's it's just it's

00:03:26 --> 00:03:31
part of the the world of like defining

00:03:28 --> 00:03:33
these things that makes it exciting and

00:03:30 --> 00:03:35
interesting but it also is because

00:03:32 --> 00:03:39
there's been this long history of like

00:03:34 --> 00:03:42
promises that weren't quite made you

00:03:38 --> 00:03:44
know made real and so that's what's so

00:03:41 --> 00:03:45
interesting like yeah a great example of

00:03:43 --> 00:03:47
that is so one of my summer internships

00:03:44 --> 00:03:49
when I was in college or actually right

00:03:46 --> 00:03:51
across the street from this building I

00:03:48 --> 00:03:54
was at an IBM Santa Teresa labs and I

00:03:50 --> 00:03:56
was working on an expert system

00:03:53 --> 00:03:57
development tool IBM was so convinced

00:03:55 --> 00:04:00
that there were going to be so many

00:03:56 --> 00:04:02
expert systems that we needed to improve

00:03:59 --> 00:04:04
developer productivity in creating them

00:04:01 --> 00:04:06
and what an expert system is it's a

00:04:03 --> 00:04:08
system that captures human knowledge

00:04:05 --> 00:04:09
so the overall process would be you find

00:04:07 --> 00:04:12
somebody really smart in an area a

00:04:08 --> 00:04:15
doctor an insurance adjuster an oil gas

00:04:11 --> 00:04:17
exploration expert and you ask them how

00:04:14 --> 00:04:20
do you found oil how do you diagnose a

00:04:16 --> 00:04:21
disease and you do hours and hours of

00:04:19 --> 00:04:24
interviews and you basically codify that

00:04:20 --> 00:04:25
in a decision tree which is a classic

00:04:23 --> 00:04:27
machine learning algorithm and you hope

00:04:24 --> 00:04:28
that you've asked enough questions and

00:04:26 --> 00:04:29
you captured

00:04:27 --> 00:04:31
for the decision tree that they can

00:04:28 --> 00:04:35
start emulating the expertise of that

00:04:30 --> 00:04:37
human this was 1990 and it was going to

00:04:34 --> 00:04:39
be 10 years and we basically interview

00:04:36 --> 00:04:40
every expert in every field and there it

00:04:38 --> 00:04:41
is

00:04:39 --> 00:04:43
like it's the some of those as

00:04:40 --> 00:04:45
artificial intelligence so why didn't

00:04:42 --> 00:04:47
hat reality come about then so

00:04:44 --> 00:04:50
basically they ran into a wall of it

00:04:46 --> 00:04:52
didn't work which is it couldn't capture

00:04:49 --> 00:04:54
it couldn't nearly behave as effectively

00:04:51 --> 00:04:56
as a human so there's obvious things

00:04:53 --> 00:04:58
like there's always edge cases where it

00:04:55 --> 00:04:59
didn't you know it was sort of the

00:04:57 --> 00:05:01
xception to prove the rule the other

00:04:58 --> 00:05:03
thing was that keep in mind what

00:05:00 --> 00:05:05
computational power was back then we

00:05:02 --> 00:05:06
didn't have a lot of memory we didn't

00:05:04 --> 00:05:08
have a lot of disk we didn't have a lot

00:05:05 --> 00:05:10
of CPU cycles and so the rate at which

00:05:07 --> 00:05:13
we could do these calculations and the

00:05:09 --> 00:05:14
amount of storage we had like it just

00:05:12 --> 00:05:16
never worked it's also it's super

00:05:13 --> 00:05:17
interesting though because that that

00:05:15 --> 00:05:19
like I like one that was a favorite of

00:05:16 --> 00:05:22
mine in the 80s in graduate school was

00:05:18 --> 00:05:24
an expert system for chemotherapy which

00:05:21 --> 00:05:26
was actually done here at Stanford back

00:05:23 --> 00:05:29
then and the funny thing was it turns

00:05:25 --> 00:05:31
out like there are areas where there are

00:05:28 --> 00:05:33
a lot of rules and there are just too

00:05:30 --> 00:05:35
many for one person to keep in their

00:05:32 --> 00:05:36
head so you know with medicine it's an

00:05:34 --> 00:05:38
obvious kind of thing like you go to

00:05:35 --> 00:05:40
medical school you you're a resident an

00:05:37 --> 00:05:42
intern a fellow and as long as you see

00:05:39 --> 00:05:45
like a million patients you can figure

00:05:41 --> 00:05:47
out the right rules especially if you

00:05:44 --> 00:05:48
narrow it down to like what's the

00:05:46 --> 00:05:51
chemotherapy regimen for a particular

00:05:47 --> 00:05:52
forum of cancer but the problem is no

00:05:50 --> 00:05:55
ne could remember all those things and

00:05:51 --> 00:05:57
get them right and like it's not a

00:05:54 --> 00:05:59
perfect classification because wow now

00:05:56 --> 00:06:00
you have to factor in the age of the

00:05:58 --> 00:06:02
patients if they do stop and there's

00:05:59 --> 00:06:04
always like another data point that

00:06:01 --> 00:06:06
leads to some reasoning under

00:06:03 --> 00:06:08
uncertainty need and yet there are

00:06:05 --> 00:06:11
systems that work even back then that

00:06:07 --> 00:06:12
yielded better answers and it's very

00:06:10 --> 00:06:14
easy to test two because you take all

00:06:11 --> 00:06:16
that data and then you go to Grand

00:06:13 --> 00:06:17
Rounds and present your approach and you

00:06:15 --> 00:06:19
have 50 doctors all at once saying

00:06:16 --> 00:06:21
that's a good approach not a good

00:06:18 --> 00:06:23
approach or state of the art and so

00:06:20 --> 00:06:25
immediately those systems were no longer

00:06:22 --> 00:06:27
at AI they were just like computer

00:06:24 --> 00:06:28
programs that helped you do that

00:06:26 --> 00:06:30
particular thing but it didn't stop

00:06:27 --> 00:06:32
eople from like you know let's you know

00:06:29 --> 00:06:34
e need because we don't have computing

00:06:31 --> 00:06:35
power let's create a special computer

00:06:33 --> 00:06:38
that can interpret this list program

00:06:34 --> 00:06:40
even better and charge like 90 thousand

00:06:37 --> 00:06:42
ollars for it and hope that we can get

00:06:39 --> 00:06:44
he performance out of it

00:06:41 --> 00:06:46
let's make better editors for for

00:06:43 --> 00:06:47
prologue so that like you could have

00:06:45 --> 00:06:53
more rules and encode them even better

00:06:46 --> 00:06:55
yeah the out of the things and so

00:06:52 --> 00:06:57
that of course that what was so

00:06:54 --> 00:06:59
interesting about that is what what you

00:06:56 --> 00:07:01
know rhetorically to Frank like where'd

00:06:58 --> 00:07:03
that that ran right up against the PC

00:07:00 --> 00:07:06
revolution right exactly it's a turned

00:07:02 --> 00:07:08
out that what we didn't need was the

00:07:05 --> 00:07:09
Lisp machine which was this company

00:07:07 --> 00:07:11
called Symbolics and sort of the

00:07:08 --> 00:07:14
collapse of symbolics basically was the

00:07:10 --> 00:07:15
first nuclear winter in AI not only did

00:07:13 --> 00:07:17
venture funding completely dry out it

00:07:14 --> 00:07:19
was embarrassing to be a professor in

00:07:16 --> 00:07:20
that field for a long long time because

00:07:18 --> 00:07:22
it just didn't work just at the dawn of

00:07:19 --> 00:07:25
PCs right and so now we're on the

00:07:21 --> 00:07:26
upswing of that which is PCs have led to

00:07:24 --> 00:07:28
data centers right it's that supply

00:07:25 --> 00:07:32
chain like if you look at an x86 server

00:07:27 --> 00:07:34
in a data center exactly the the servers

00:07:31 --> 00:07:36
that Google is using to compute deep

00:07:33 --> 00:07:39
mine algorithms their pcs and so now we

00:07:35 --> 00:07:41
do have a ton of computation and a

00:07:38 --> 00:07:44
ton of bandwidth and a ton of memory and

00:07:40 --> 00:07:45
we have this innovation in algorithms so

00:07:43 --> 00:07:47
the old approach was expert systems

00:07:44 --> 00:07:49
which is interview a human expert try to

00:07:46 --> 00:07:51
codify that knowledge the exciting thing

00:07:48 --> 00:07:54
about the go game is these algorithms

00:07:50 --> 00:07:57
are the opposite of that which is the

00:07:53 --> 00:07:58
algorithms are self learning so there's

00:07:56 --> 00:08:00
these techniques called supervised

00:07:57 --> 00:08:01
learning algorithms there's these

00:07:59 --> 00:08:04
progressively learning algorithms

00:08:00 --> 00:08:05
there's either generative algorithms or

00:08:03 --> 00:08:07
there's a whole class of algorithms

00:08:04 --> 00:08:09
where the computer is teaching itself

00:08:06 --> 00:08:12
how to play a better game every game

00:08:08 --> 00:08:13
without interviewing a go expert and if

00:08:11 --> 00:08:15
you look at some of the hacker news

00:08:12 --> 00:08:18
comments you can actually see this in

00:08:14 --> 00:08:20
the game play which is sophisticated go

00:08:17 --> 00:08:23
players are looking at the style of play

00:08:19 --> 00:08:24
and going that's weird they don't teach

00:08:22 --> 00:08:26
that at go school and so you can

00:08:23 --> 00:08:28
actually see this the style of game play

00:08:25 --> 00:08:31
is kind of from an alien intelligence

00:08:27 --> 00:08:33
because it's learning how to play the

00:08:30 --> 00:08:36
game by itself by playing lots and lots

00:08:32 --> 00:08:38
of games and so I think but what that is

00:08:35 --> 00:08:40
ort of like the the really big

00:08:37 --> 00:08:42
breakthrough that's happening now is

00:08:39 --> 00:08:44
that the history of AI was first a human

00:08:41 --> 00:08:46
writing an imperative program to play a

00:08:43 --> 00:08:48
game tic-tac-toe and then everybody

00:08:45 --> 00:08:51
thought that's that's not gonna work so

00:08:47 --> 00:08:52
let's write a program that simulates the

00:08:50 --> 00:08:55
way the human brain would play the game

00:08:51 --> 00:08:56
but it turns out in hindsight that if

00:08:54 --> 00:08:57
you don't know

00:08:55 --> 00:08:59
how the human brain works you can't

00:08:56 --> 00:09:01
actually write a simulator for the human

00:08:58 --> 00:09:04
brain and that was like 20 years of work

00:09:00 --> 00:09:06
yeah and then Frank like had a very

00:09:03 --> 00:09:07
important phrase that he just mentioned

00:09:05 --> 00:09:11
which is worth diving into which is the

00:09:06 --> 00:09:13
AI winter and so often what we now know

00:09:10 --> 00:09:15
in hindsight is that in technology

00:09:12 --> 00:09:17
revolutions the things that happen very

00:09:14 --> 00:09:19
early like don't yield things right away

00:09:16 --> 00:09:22
ield results right away but that

00:09:18 --> 00:09:24
doesn't make them the bad ideas or wrong

00:09:21 --> 00:09:26
they were just early right actually

00:09:23 --> 00:09:28
Dixon calls it and recently in a post he

00:09:25 --> 00:09:30
wrote the gestation period oh yeah and

00:09:27 --> 00:09:34
also one of the other things too is that

00:09:30 --> 00:09:36
most new big advances are not just like

00:09:33 --> 00:09:38
discrete changes in everything they're

00:09:35 --> 00:09:41
new like sort of prime mortal

00:09:37 --> 00:09:43
combinations of old things and so what

00:09:40 --> 00:09:45
is so fascinating about this go

00:09:42 --> 00:09:46
innovation is that it's not like they

00:09:44 --> 00:09:48
just locked themselves in a lab and

00:09:45 --> 00:09:51
invented the way to play go using like

00:09:47 --> 00:09:52
the latest newest deep learning

00:09:50 --> 00:09:55
technique that they created it's

00:09:51 --> 00:09:57
actually a whole range of of techniques

00:09:54 --> 00:10:00
and I was watching a great video which

00:09:56 --> 00:10:02
I'm 22 and we had another one of these

00:09:59 --> 00:10:04
dogs from Geoff Hinton who is clearly

00:10:01 --> 00:10:06
the the pioneer of deep learning

00:10:03 --> 00:10:09
yeah people come the father yeah and and

00:10:05 --> 00:10:11
he he actually spent a lot of effort in

00:10:08 --> 00:10:14
this interview on Canadian television

00:10:10 --> 00:10:17
explaining why the IBM Watson jeopardy

00:10:13 --> 00:10:19
playing machine was not it was not deep

00:10:16 --> 00:10:21
learning because it used all of these

00:10:18 --> 00:10:22
other techniques and and as if like it's

00:10:20 --> 00:10:24
like pure deep learning and then I

00:10:21 --> 00:10:25
personally just start to twitch because

00:10:23 --> 00:10:27
then it's like is it purely

00:10:24 --> 00:10:31
object-oriented programming is it early

00:10:26 --> 00:10:32
client-server is it truly cloud and like

00:10:30 --> 00:10:35
all of those definitions you know do we

00:10:31 --> 00:10:36
need an N ist dance Standards definition

00:10:34 --> 00:10:39
of deep learning so we're all on the

00:10:35 --> 00:10:41
same page share those definitions as

00:10:38 --> 00:10:42
they stand now and if it's relevant sure

00:10:40 --> 00:10:44
the evolution of that definition

00:10:41 --> 00:10:46
but I actually do want us to clarify

00:10:43 --> 00:10:49
like okay you're talking about expert

00:10:45 --> 00:10:52
systems AI deep learning machine

00:10:48 --> 00:10:54
learning how do we define each of these

00:10:51 --> 00:10:56
yeah so maybe let me take a whack at the

00:10:53 --> 00:10:58
taxonomy so at the very highest level

00:10:55 --> 00:11:01
you have artificial intelligence which

00:10:57 --> 00:11:02
is the combination of all experiments

00:11:00 --> 00:11:04
that we've run to try to program

00:11:01 --> 00:11:06
intelligence some of them will be trying

00:11:03 --> 00:11:08
to imitate human intelligence some of

00:11:05 --> 00:11:10
them will be trying to do things that

00:11:07 --> 00:11:12
are mathematically just interest

00:11:09 --> 00:11:14
and reproduce interesting results but

00:11:11 --> 00:11:16
aren't modeled on the brain or human

00:11:13 --> 00:11:18
thinking in any way also our senses are

00:11:15 --> 00:11:21
good area like being able to vision or

00:11:17 --> 00:11:23
speech exactly and then so that's

00:11:20 --> 00:11:24
artificial intelligence and subsets of

00:11:22 --> 00:11:26
artificial intelligence include deep

00:11:24 --> 00:11:28
learning so deep learning is a specific

00:11:25 --> 00:11:30
algorithm and data structure that

00:11:27 --> 00:11:32
tacks a series of problems it's based

00:11:29 --> 00:11:34
on neural networks which I was studying

00:11:31 --> 00:11:35
back in the Stanford days so you did you

00:11:33 --> 00:11:37
know cs2 21 intro to artificial

00:11:34 --> 00:11:39
intelligence week 1 expert systems week

00:11:36 --> 00:11:41
2 neural networks and neural networks

00:11:38 --> 00:11:43
isn't modeled on the human brain

00:11:40 --> 00:11:44
yes it's very loosely modeled on the

00:11:42 --> 00:11:45
human brain all those sophisticated

00:11:43 --> 00:11:47
researchers will tell you there's a lot

00:11:44 --> 00:11:49
hat it's very different but you know

00:11:46 --> 00:11:51
the basic idea is that the brain is full

00:11:48 --> 00:11:54
of neurons that are connected by axons

00:11:50 --> 00:11:56
and they're signaling each other and a

00:11:53 --> 00:11:58
neural net which is deep learning is a

00:11:55 --> 00:12:00
mathematical abstraction of that we have

00:11:57 --> 00:12:02
nodes they're connected in a network the

00:11:59 --> 00:12:04
connections have strengths and we can

00:12:01 --> 00:12:06
build these very interesting behaviors

00:12:03 --> 00:12:09
by using that data structure and

00:12:05 --> 00:12:09
iterating on the strengths between the

00:12:08 --> 00:12:11
nodes

00:12:08 --> 00:12:13
o that's deep learning it is a specific

00:12:10 --> 00:12:17
algorithm and technique in data

00:12:12 --> 00:12:19
structure and it's on fire it is the

00:12:16 --> 00:12:21
art of the go algorithms although

00:12:18 --> 00:12:23
interesting to point out it's an

00:12:20 --> 00:12:25
ensemble of techniques that's working

00:12:22 --> 00:12:26
for go let me just dive in really quick

00:12:24 --> 00:12:28
because I actually think there's a

00:12:25 --> 00:12:30
important distinction happening right

00:12:27 --> 00:12:32
now in neural networks and and it's a

00:12:29 --> 00:12:34
little bit of a split in the taxonomy

00:12:31 --> 00:12:35
neural networks aren't new in fact

00:12:33 --> 00:12:38
hey're actually if you go back and read

00:12:34 --> 00:12:40
the 1956 Dartmouth summer Aoi conference

00:12:37 --> 00:12:42
they're actually mentioned in there is

00:12:39 --> 00:12:43
one of the first things that that group

00:12:41 --> 00:12:45
of people who basically invented the

00:12:42 --> 00:12:48
field this is like Marvin Minsky and

00:12:44 --> 00:12:49
those may Errol nets were in that paper

00:12:47 --> 00:12:51
because they were a theory a

00:12:48 --> 00:12:54
mathematical theory of the brain so then

00:12:50 --> 00:12:56
all for basically about 40 years it was

00:12:53 --> 00:12:57
like intro computer science you know

00:12:55 --> 00:12:59
like third-year undergraduate computer

00:12:57 --> 00:13:01
science to write your first neural net

00:12:58 --> 00:13:04
o play tic-tac-toe to guess a number

00:13:00 --> 00:13:06
between 1 and 100 like it was a very

00:13:03 --> 00:13:08
simple neural net what's happening right

00:13:05 --> 00:13:09
now and since the invent innovations of

00:13:07 --> 00:13:12
Geoff Hinton have been the ability to

00:13:08 --> 00:13:14
pile on a bunch of neural nets one on

00:13:11 --> 00:13:15
top of another and so maybe you dive in

00:13:13 --> 00:13:17
that like that because that's the big

00:13:14 --> 00:13:19
math advance and that's why you hear all

00:13:16 --> 00:13:21
about how many GPUs do you use to

00:13:18 --> 00:13:23
compute because it's this massive amount

00:13:20 --> 00:13:25
much of why GPAs are so important for

00:13:22 --> 00:13:26
so then let's break down the neural

00:13:24 --> 00:13:28
network taxonomy a bit further so

00:13:25 --> 00:13:30
recurrent neural Nets like let's define

00:13:27 --> 00:13:32
ach so basically all of these

00:13:29 --> 00:13:34
adjectives on top of neural Nets

00:13:31 --> 00:13:36
recurrent long-term memory networks

00:13:33 --> 00:13:39
they're all enhancements of the basic

00:13:35 --> 00:13:41
idea and so what a recurrent net will do

00:13:38 --> 00:13:43
is try to feed back previous learnings

00:13:40 --> 00:13:44
into your current state it's probably

00:13:42 --> 00:13:46
how the brain works when I parse

00:13:43 --> 00:13:48
ntences I'm kind of keeping track of

00:13:45 --> 00:13:50
each word as I go along as opposed to

00:13:47 --> 00:13:53
throwing away what I learned in previous

00:13:49 --> 00:13:54
time frames long short-term memories are

00:13:52 --> 00:13:56
sort of the more sophisticated version

00:13:53 --> 00:13:57
of this which is I keep track of more of

00:13:55 --> 00:13:59
the history as opposed to just recent

00:13:56 --> 00:14:01
history again probably how I parse

00:13:58 --> 00:14:02
ntences very similar to human brain

00:14:00 --> 00:14:04
works of your cognitive psychologists

00:14:01 --> 00:14:04
have long talked about short term memory

00:14:03 --> 00:14:06
long term memory you're just gonna

00:14:04 --> 00:14:07
keeping that framework for helping

00:14:05 --> 00:14:12
learning okay so that's some of the

00:14:06 --> 00:14:14
neural nets yeah so one more adversarial

00:14:11 --> 00:14:16
so one really interesting thing is if

00:14:13 --> 00:14:17
you feed pictures into a neural net and

00:14:15 --> 00:14:19
you tune it you can defeat the

00:14:16 --> 00:14:22
categorization fairly trivially by

00:14:18 --> 00:14:23
introducing noise in the data and the

00:14:21 --> 00:14:25
really interesting thing is you

00:14:22 --> 00:14:26
introduce the noise you look at the

00:14:24 --> 00:14:28
resulting pictures humans still

00:14:25 --> 00:14:30
recognize the picture that's a dog

00:14:27 --> 00:14:32
that's a car that's a tree but the

00:14:29 --> 00:14:34
neural networks completely fail so

00:14:31 --> 00:14:37
trying to figure out exactly how I

00:14:33 --> 00:14:39
introduced noise and why they defeated

00:14:36 --> 00:14:40
the categorization algorithms is a super

00:14:38 --> 00:14:42
active area of research right they

00:14:39 --> 00:14:44
called adversarial networks here's a

00:14:41 --> 00:14:45
funny image that makes this round on

00:14:43 --> 00:14:46
Twitter every so often about like can

00:14:44 --> 00:14:48
you tell the difference between this dog

00:14:45 --> 00:14:50
and the bagel have you guys seen that

00:14:47 --> 00:14:51
yeah it's like and I think it'd be

00:14:49 --> 00:14:53
really funny like try to like make a

00:14:50 --> 00:14:55
neural net figure that out because they

00:14:52 --> 00:14:57
look yeah because they look very similar

00:14:54 --> 00:14:58
I just suddenly saw that yesterday I

00:14:56 --> 00:15:01
think the biggest innovation in computer

00:14:58 --> 00:15:02
science for me in the past 20 years has

00:15:00 --> 00:15:03
been the ability to look at all the

00:15:01 --> 00:15:06
pictures on the internet and find the

00:15:02 --> 00:15:08
cute kittens personally believe that

00:15:05 --> 00:15:09
is a very high priority to brighten

00:15:07 --> 00:15:10
your day

00:15:08 --> 00:15:12
by not having to search for cute kittens

00:15:09 --> 00:15:14
is super helpful but when I was in

00:15:11 --> 00:15:16
graduate school it was the Cold War and

00:15:13 --> 00:15:19
like we had a giant lab at UMass that

00:15:15 --> 00:15:20
was all about like computer vision and

00:15:18 --> 00:15:22
it was about trying to pick the tank out

00:15:19 --> 00:15:24
of the desert and like figure out what

00:15:21 --> 00:15:27
ank and they had a literally a hallway

00:15:23 --> 00:15:29
like 30 feet long filled with micro VAX

00:15:26 --> 00:15:31
mini computers that you know that would

00:15:28 --> 00:15:34
grind away day and night literally our

00:15:30 --> 00:15:36
hallway was hot all of this it was like

00:15:33 --> 00:15:37
you feed the picture and then like 12

00:15:35 --> 00:15:40
hours later

00:15:36 --> 00:15:42
you know yes there's a tank and and like

00:15:39 --> 00:15:44
that was the one and and it didn't know

00:15:41 --> 00:15:46
hat it was doing was this like it was

00:15:43 --> 00:15:48
looking for the edges and doing this

00:15:45 --> 00:15:50
math to compare like you know because is

00:15:47 --> 00:15:52
it and then like you go you just go well

00:15:49 --> 00:15:54
here's a book with a picture of a tank

00:15:51 --> 00:15:55
take a picture of that and then it would

00:15:53 --> 00:15:58
go oh look a tank in the desert and it

00:15:54 --> 00:16:01
was just this massive undertaking and so

00:15:57 --> 00:16:03
now you've got the the ability to just

00:16:00 --> 00:16:06
like you can use every photo filter

00:16:02 --> 00:16:07
every infrared every sensor and overlay

00:16:05 --> 00:16:09
all of these different ways which turn

00:16:06 --> 00:16:11
out to actually be closer to how you

00:16:08 --> 00:16:12
might go and recognize something like

00:16:10 --> 00:16:14
your ability to tell the difference

00:16:11 --> 00:16:16
between a kitten and a picture of a

00:16:13 --> 00:16:18
kitten and an image on a computer of a

00:16:15 --> 00:16:20
kitten is important and that's why you

00:16:17 --> 00:16:23
can't fake out face recognition anymore

00:16:19 --> 00:16:24
and things like that so I wait computer

00:16:22 --> 00:16:27
visions might be the most advanced of

00:16:23 --> 00:16:28
all those sensory yeah illustrates one

00:16:26 --> 00:16:30
of the sort of this big trend so the big

00:16:27 --> 00:16:32
trend is the triumph of data over

00:16:29 --> 00:16:33
algorithms which is you try to make more

00:16:31 --> 00:16:35
and more sophisticated edge detection

00:16:32 --> 00:16:37
algorithms feature recognition now there

00:16:34 --> 00:16:39
isn't the big advance with deep learning

00:16:36 --> 00:16:43
was screw all that I'm not gonna try to

00:16:38 --> 00:16:44
figure out what Katniss is four legs and

00:16:42 --> 00:16:46
furry right I'm just gonna feed you a

00:16:43 --> 00:16:48
million pictures of cats and so that's

00:16:45 --> 00:16:50
ort of the triumph if you will of deep

00:16:47 --> 00:16:52
learning it's the triumph of data over

00:16:49 --> 00:16:54
algorithms right and it's and what's

00:16:51 --> 00:16:56
interesting is it's not it's not data in

00:16:53 --> 00:16:57
the way that we had about twenty years

00:16:55 --> 00:17:00
of like if you have a big enough

00:16:56 --> 00:17:02
database you then just use better query

00:16:59 --> 00:17:04
languages and better things to look it

00:17:01 --> 00:17:06
up in the database this is using the

00:17:03 --> 00:17:09
data to sort of build out a model of

00:17:05 --> 00:17:10
what the answer would be right right

00:17:08 --> 00:17:13
which makes for a super interesting

00:17:09 --> 00:17:15
challenge which is just sort of like how

00:17:12 --> 00:17:16
do you debug all of this stuff and for

00:17:14 --> 00:17:19
me that's like the most fascinating

00:17:15 --> 00:17:21
thing because you're you're you know

00:17:18 --> 00:17:23
like people get all like all the hoopla

00:17:20 --> 00:17:25
over self-driving cars can't replace

00:17:22 --> 00:17:26
because you never know and the thing it

00:17:24 --> 00:17:28
like if they're gonna be safer or not

00:17:25 --> 00:17:30
and the interesting thing is it's a very

00:17:27 --> 00:17:32
odd comparison because basically the

00:17:29 --> 00:17:33
self-driving car is going to use a bunch

00:17:31 --> 00:17:36
of machine learning techniques and other

00:17:32 --> 00:17:38
kinds of algorithms to essentially learn

00:17:35 --> 00:17:41
how to drive and make the best guesses

00:17:37 --> 00:17:44
at any given point and that's exactly

00:17:40 --> 00:17:47
what we do every day when we drive

00:17:43 --> 00:17:49
somewhere and and so it isn't gonna be

00:17:46 --> 00:17:50
this Wow we've now figured out the

00:17:48 --> 00:17:51
specifics and we have to paint the stree

00:17:49 --> 00:17:53
with different lines for the car to

00:17:50 --> 00:17:55
follow which is how they thought

00:17:52 --> 00:17:57
self-driving car was gonna be nor is it

00:17:54 --> 00:17:58
gonna be I have a database of all the

00:17:56 --> 00:17:59
highways and all of the cars on the

00:17:57 --> 00:18:01
highways

00:17:58 --> 00:18:03
o let me now look up when to change

00:18:00 --> 00:18:04
lanes how fast to go or anything it's

00:18:02 --> 00:18:06
not like this forest thing nor this

00:18:03 --> 00:18:08
brute force thing it's now this sort of

00:18:05 --> 00:18:09
emergent learning thing which is the

00:18:07 --> 00:18:11
whole deep learning model in the first

00:18:08 --> 00:18:12
book right right it's sort of inherently

00:18:10 --> 00:18:14
unda Bugaboo bee cuz you don't

00:18:11 --> 00:18:16
understand how it is exactly that it's

00:18:13 --> 00:18:18
making those decisions so contrast that

00:18:15 --> 00:18:19
with another well-known machine learning

00:18:17 --> 00:18:21
data structure which is decision trees

00:18:18 --> 00:18:23
in a decision tree you can actually

00:18:20 --> 00:18:26
examine the decision tree and understand

00:18:22 --> 00:18:29
why a system made any single decision

00:18:25 --> 00:18:30
very very easy to debug the bummer is

00:18:28 --> 00:18:32
decision trees don't catch you very good

00:18:29 --> 00:18:34
results and so these deep networks get

00:18:31 --> 00:18:36
you much better results but they're

00:18:33 --> 00:18:38
undable you don't really know all you

00:18:35 --> 00:18:40
can do is kind of feed it more data and

00:18:37 --> 00:18:42
run the models and say statistically how

00:18:39 --> 00:18:43
likely are you to drive correctly one of

00:18:41 --> 00:18:46
the areas that i'm super-interested

00:18:42 --> 00:18:48
always has been in in text like I worked

00:18:45 --> 00:18:51
on a word processor for a long time

00:18:47 --> 00:18:53
typing typing and grammar and things are

00:18:50 --> 00:18:55
all super important and that's a

00:18:52 --> 00:18:56
microcosm of the evolution of AI it

00:18:54 --> 00:18:58
urns out even if you just look at like

00:18:55 --> 00:19:01
autocorrect in word there's a whole

00:18:57 --> 00:19:04
history of AI even though it's like

00:19:00 --> 00:19:07
ultimately 20 lines of code that we

00:19:03 --> 00:19:09
write but what's interesting is it also

00:19:06 --> 00:19:11
points out almost this chasm in the

00:19:08 --> 00:19:13
academic world about how to describe a

00:19:10 --> 00:19:15
solution because there are there's a

00:19:12 --> 00:19:17
very long history in algorithmic

00:19:14 --> 00:19:20
decision tree like history in the world

00:19:16 --> 00:19:22
of natural language processing where you

00:19:19 --> 00:19:24
look at a block of text you know we know

00:19:21 --> 00:19:26
how to diagram sentences to find parts

00:19:23 --> 00:19:28
of speech and so probably since about

00:19:25 --> 00:19:31
1956 like people have been working on

00:19:27 --> 00:19:33
the ability to algorithmically figure

00:19:30 --> 00:19:35
out text and they all thought it would

00:19:32 --> 00:19:37
just be a couple extra years of work to

00:19:34 --> 00:19:38
then take the diagram sentence the data

00:19:36 --> 00:19:41
structure and turn it from English into

00:19:37 --> 00:19:44
French you know or to turn it into from

00:19:40 --> 00:19:46
English into a concept right and it

00:19:43 --> 00:19:48
urns out it knowing the structure of a

00:19:45 --> 00:19:51
sentence doesn't help you do either of

00:19:47 --> 00:19:53
those things it doesn't and so along

00:19:50 --> 00:19:56
comes deep learning and the idea is oh

00:19:52 --> 00:19:58
well if you have enough text in French

00:19:55 --> 00:20:01
you can basically find a way to turn it

00:19:57 --> 00:20:03
into English without knowing French or

00:20:00 --> 00:20:05
algorithmic lis diagramming exactly

00:20:02 --> 00:20:07
takes over the algorithm so it actually

00:20:04 --> 00:20:09
works but debugging it is

00:20:06 --> 00:20:11
really hard which sort of freaks out the

00:20:08 --> 00:20:13
algorithmic people because wait what if

00:20:10 --> 00:20:14
there's a mistake oh well then just go

00:20:12 --> 00:20:16
get more french text and start over

00:20:13 --> 00:20:19
again and but then it turns out you can

00:20:15 --> 00:20:22
probably do a better job if you apply

00:20:18 --> 00:20:23
some of the linguistics to it and think

00:20:21 --> 00:20:26
about it in advance because you're

00:20:22 --> 00:20:28
always gonna get like a probability you

00:20:25 --> 00:20:30
know 80% choice well exactly and I would

00:20:27 --> 00:20:31
think that in case of natural language

00:20:29 --> 00:20:34
in particular that is the only way to

00:20:30 --> 00:20:35
resolve the ambiguity problem in an

00:20:33 --> 00:20:37
efficient way like you have to have some

00:20:34 --> 00:20:40
sort of approach that isn't just purely

00:20:36 --> 00:20:41
one or the other to get people an output

00:20:39 --> 00:20:42
hat makes sense to them cuz that is the

00:20:40 --> 00:20:44
whole point of natural language let's be

00:20:41 --> 00:20:45
natural yeah and I think this is where

00:20:43 --> 00:20:46
we're gonna see the next big

00:20:44 --> 00:20:49
breakthroughs it won't be one technique

00:20:45 --> 00:20:51
in isolation just like the go algorithms

00:20:48 --> 00:20:52
one on a combination of techniques the

00:20:50 --> 00:20:54
other techniques by the way you

00:20:51 --> 00:20:55
mentioned briefly something so for

00:20:53 --> 00:20:58
natural language processing a very

00:20:54 --> 00:20:59
natural thing to do would be to do parts

00:20:57 --> 00:21:02
of speech tagging entity resolution

00:20:58 --> 00:21:04
is when I see sono

00:21:01 --> 00:21:06
talk she in a email is that a person is

00:21:03 --> 00:21:08
that a place name is that a store name

00:21:05 --> 00:21:09
is that like what is that more precisely

00:21:07 --> 00:21:11
I think entity resolution also is when

00:21:08 --> 00:21:17
you have variations of that name like

00:21:10 --> 00:21:18
sown just exact right did all that right

00:21:16 --> 00:21:21
we can sort of figure out what is the

00:21:17 --> 00:21:23
root verb is was B are they all stem and

00:21:20 --> 00:21:26
so let's use those techniques in

00:21:22 --> 00:21:27
combination with deep learning and I

00:21:25 --> 00:21:28
think that's where we'll see the next

00:21:26 --> 00:21:30
big wins and that's an important point

00:21:27 --> 00:21:33
about just innovation in general which

00:21:29 --> 00:21:35
is there will be massive innovation and

00:21:32 --> 00:21:38
in fact I I fully expect to see pure

00:21:34 --> 00:21:40
deep learning approaches to translation

00:21:37 --> 00:21:42
to image recognition which is you know a

00:21:39 --> 00:21:44
Jeanette already is that but all of them

00:21:41 --> 00:21:46
the computer scientists will continue to

00:21:43 --> 00:21:48
push sort of this pure-play approach to

00:21:45 --> 00:21:49
in innovating and there'll be new neural

00:21:47 --> 00:21:51
net algorithms that do and they'll keep

00:21:48 --> 00:21:54
doing and and actually systems will

00:21:50 --> 00:21:55
arise that are pure deep learning to

00:21:53 --> 00:21:57
solve all these things because this is

00:21:54 --> 00:22:00
how you win a PhD right but if you're a

00:21:56 --> 00:22:03
product manager and an engineer building

00:21:59 --> 00:22:05
a product you actually don't care if you

00:22:02 --> 00:22:07
win an award for the purely the most

00:22:04 --> 00:22:09
pure algorithm and that's actually been

00:22:06 --> 00:22:11
the history of all innovation in

00:22:08 --> 00:22:14
computer science has been the products

00:22:10 --> 00:22:16
always represent a little bit of a

00:22:13 --> 00:22:19
combination of some known things

00:22:15 --> 00:22:20
breaking those rules of the new thing

00:22:18 --> 00:22:22
and then the new things and if you think

00:22:19 --> 00:22:24
about to make it work the Internet

00:22:21 --> 00:22:26
itself is not like the purest form of

00:22:23 --> 00:22:28
networking it's actually kind of like a

00:22:25 --> 00:22:30
giant series of hacks and the way I

00:22:27 --> 00:22:33
always think of it is in a perfect world

00:22:29 --> 00:22:35
there are no caches and so therefore

00:22:32 --> 00:22:36
verything is so well architected that

00:22:34 --> 00:22:38
you don't have a cache of anything

00:22:35 --> 00:22:40
anywhere because caches are just hacks

00:22:37 --> 00:22:42
and then you realize well the Internet

00:22:39 --> 00:22:44
is one giant cache of everything create

00:22:41 --> 00:22:46
a couple multi-billion dollar companies

00:22:43 --> 00:22:48
right right then you come along and you

00:22:45 --> 00:22:49
say like wow to really make the internet

00:22:47 --> 00:22:51
work we actually need cash companies and

00:22:48 --> 00:22:54
I think that everything is gonna have

00:22:50 --> 00:22:56
like elements of deep learning and and

00:22:53 --> 00:22:58
then people building products that have

00:22:55 --> 00:23:00
to solve problems are not gonna be shy

00:22:57 --> 00:23:02
about hacking deep learning taking

00:22:59 --> 00:23:05
there's like even my favorite one was

00:23:01 --> 00:23:07
just the the Google inbox did this email

00:23:04 --> 00:23:08
reply and I remember the cynical

00:23:06 --> 00:23:09
comments about it like what it does is

00:23:07 --> 00:23:12
it machine learns you're a bunch of mail

00:23:08 --> 00:23:14
and then it basically suggests what to

00:23:11 --> 00:23:15
use as a reply to a mail message which

00:23:13 --> 00:23:18
is kind of a cool stupid computer trick

00:23:14 --> 00:23:20
but it doesn't just reply it gives you a

00:23:17 --> 00:23:21
choice of two and the obvious cynical

00:23:19 --> 00:23:24
comment is well that's dumb why doesn't

00:23:20 --> 00:23:26
it just pick the right choice and it's

00:23:23 --> 00:23:28
like well because a it doesn't know and

00:23:25 --> 00:23:30
be like why not show you a couple

00:23:27 --> 00:23:32
choices if you're just being practical

00:23:29 --> 00:23:33
about it there's just an opportunity to

00:23:31 --> 00:23:35
do a better job so you guys have

00:23:32 --> 00:23:37
definitely convinced me about why the

00:23:34 --> 00:23:39
product-driven approach to some of these

00:23:36 --> 00:23:41
solutions is so practical for lack of a

00:23:38 --> 00:23:43
better phrase but I'm still not

00:23:40 --> 00:23:44
convinced about why this time is

00:23:42 --> 00:23:46
different because we started off talking

00:23:43 --> 00:23:49
about how Oh people talked about you get

00:23:45 --> 00:23:51
o this point some algorithm beats like

00:23:48 --> 00:23:53
a game of some sort and then next the

00:23:50 --> 00:23:55
next wave of AI is about to happen how

00:23:52 --> 00:23:57
do we know that this time it truly is

00:23:54 --> 00:23:57
different and how is that gonna actually

00:23:56 --> 00:23:59
happen

00:23:56 --> 00:24:00
look we don't we don't know but here's

00:23:58 --> 00:24:03
ome reasons that people are excited

00:23:59 --> 00:24:05
about the go victory so one as I pointed

00:24:02 --> 00:24:07
out the search space is so big that

00:24:04 --> 00:24:09
raditional techniques just couldn't

00:24:06 --> 00:24:10
work so they break through in terms of

00:24:08 --> 00:24:12
how to search that space they use

00:24:09 --> 00:24:14
xisting techniques like Monte Carlo

00:24:11 --> 00:24:16
tree search to prune sort of the

00:24:13 --> 00:24:17
candidate sub trees that they weren't

00:24:15 --> 00:24:19
going to explore right and to be clear

00:24:16 --> 00:24:20
mine and Carlo tree search is not any

00:24:18 --> 00:24:22
kind of deep learning technique that's

00:24:19 --> 00:24:24
right it's not a deep learning cat right

00:24:21 --> 00:24:26
it's a traditional AI technique many

00:24:23 --> 00:24:28
understand is a hero in this yeah I

00:24:25 --> 00:24:30
think that's right so one you couldn't

00:24:27 --> 00:24:30
brute-force a search space two you've

00:24:29 --> 00:24:32
had all these six

00:24:29 --> 00:24:33
in deep learning that are frankly

00:24:31 --> 00:24:35
unanticipated and just search the

00:24:32 --> 00:24:38
internet for deep learning systems there

00:24:34 --> 00:24:40
are systems where robots are learning to

00:24:37 --> 00:24:41
cook food by watching YouTube videos of

00:24:39 --> 00:24:44
people cooking food

00:24:40 --> 00:24:46
there's systems that can take photos and

00:24:43 --> 00:24:48
paint them in the style of Renoir or van

00:24:45 --> 00:24:49
Gogh there's algorithms that can create

00:24:47 --> 00:24:51
paintings that are indistinguishable

00:24:48 --> 00:24:53
from human created paintings the

00:24:50 --> 00:24:55
successes are many and varied and

00:24:52 --> 00:24:57
involve things that you would think

00:24:54 --> 00:24:59
require creativity a uniquely human

00:24:56 --> 00:25:01
thing I'll be clear the existence of

00:24:58 --> 00:25:02
those successes is not the reason alone

00:25:00 --> 00:25:03
it's a fact that there's occurred

00:25:01 --> 00:25:06
because of the ubiquity of data

00:25:02 --> 00:25:07
yeah actually I think that that that is

00:25:05 --> 00:25:09
like in a sense the ultimate reason why

00:25:06 --> 00:25:12
all these things are working is

00:25:08 --> 00:25:14
basically because of cloud computing the

00:25:11 --> 00:25:16
scale of the architecture of cloud

00:25:13 --> 00:25:18
computing and the internet that brings

00:25:15 --> 00:25:20
all that data like when I was in college

00:25:17 --> 00:25:23
I my adviser was sort of the father of

00:25:19 --> 00:25:25
information retrieval in order to do

00:25:22 --> 00:25:27
research on search you basically got a

00:25:24 --> 00:25:30
box of tapes from the New York Times

00:25:26 --> 00:25:31
that had the contents of you know 150

00:25:29 --> 00:25:34
years of New York Times articles and

00:25:30 --> 00:25:37
probably 25 people did PhDs out of that

00:25:33 --> 00:25:38
one lab searching that one corpus and

00:25:36 --> 00:25:40
you think about that and you're like

00:25:37 --> 00:25:41
well that's just stupid well there were

00:25:39 --> 00:25:43
two problems one you there most the

00:25:40 --> 00:25:45
other data in the world wasn't on tapes

00:25:42 --> 00:25:47
like that that you could get two and two

00:25:44 --> 00:25:50
even if you could you know lab could

00:25:46 --> 00:25:52
afford like the storage to put it all on

00:25:49 --> 00:25:54
for each student to be able to do their

00:25:51 --> 00:25:56
experiment and now like anyone learning

00:25:53 --> 00:25:58
to do anything in computer science has

00:25:55 --> 00:26:01
access to all of the world's information

00:25:57 --> 00:26:04
even if they just used Wikipedia yes as

00:26:00 --> 00:26:07
their sole source more for that's

00:26:03 --> 00:26:09
that is a 10,000 times what the average

00:26:06 --> 00:26:12
student had back then and you have the

00:26:08 --> 00:26:14
compute power that's essentially free to

00:26:11 --> 00:26:15
do all of the work that you you could

00:26:13 --> 00:26:18
keep retrying deep learning keep doing

00:26:14 --> 00:26:20
different things and iterate all in some

00:26:17 --> 00:26:22
finite practical amount of time that

00:26:19 --> 00:26:25
makes this all like it's it's happening

00:26:21 --> 00:26:28
it's here it's now it's real it's not a

00:26:24 --> 00:26:31
theory by one lab that can identify one

00:26:27 --> 00:26:33
tank in one picture just on looking at

00:26:30 --> 00:26:35
Wikipedia to do entity resolution you

00:26:32 --> 00:26:37
can disambiguate this torture sentence I

00:26:34 --> 00:26:38
can't remember what entrepreneurship it

00:26:36 --> 00:26:40
with me but it's a beautiful sentence if

00:26:37 --> 00:26:42
you're trying to figure out like what

00:26:39 --> 00:26:44
are all these elements Paris Hilton was

00:26:41 --> 00:26:46
in Paris Hilton

00:26:43 --> 00:26:48
the Paris Hilton listening to Paris

00:26:45 --> 00:26:50
Hilton that's hilarious so there's a

00:26:47 --> 00:26:53
person there's a city state there is a

00:26:49 --> 00:26:55
hotel and then there's an album all of

00:26:52 --> 00:26:57
those are perfectly disambiguated in

00:26:54 --> 00:26:59
Wikipedia there are entries where every

00:26:56 --> 00:27:00
single one of those so think of the leg

00:26:58 --> 00:27:02
up

00:26:59 --> 00:27:05
we've now have compared to when poor

00:27:01 --> 00:27:08
Steven was transcribing from tape so

00:27:04 --> 00:27:10
huge enablers data the way the cloud

00:27:07 --> 00:27:11
computing the scale micro services

00:27:09 --> 00:27:13
architecture you know the way

00:27:10 --> 00:27:14
applications are being built there's so

00:27:12 --> 00:27:16
many different things on that so then

00:27:13 --> 00:27:18
one last question how is it gonna leave

00:27:15 --> 00:27:19
the province of purely logical things

00:27:17 --> 00:27:23
because at the end of the day go is a

00:27:18 --> 00:27:25
logical game and it's very codify about

00:27:22 --> 00:27:28
how you then go to the next leap to

00:27:24 --> 00:27:30
intuitive decision making and decision

00:27:27 --> 00:27:32
making under uncertainty in general so

00:27:29 --> 00:27:34
let's go back to go because this is how

00:27:31 --> 00:27:36
e all started so read google's blog

00:27:33 --> 00:27:38
post on the go algorithm and the blog

00:27:36 --> 00:27:41
post basically starts with why did we

00:27:37 --> 00:27:43
pick go so one it was a huge search

00:27:40 --> 00:27:45
space but to the best masters that go

00:27:42 --> 00:27:47
have always been because you can't

00:27:44 --> 00:27:51
exhaustively search the space driven by

00:27:46 --> 00:27:52
intuition leaps of intuition and so part

00:27:50 --> 00:27:54
of the promise of go why people are so

00:27:51 --> 00:27:56
excited about this victory is maybe this

00:27:53 --> 00:27:59
an example of that which is because

00:27:55 --> 00:28:01
it wasn't mathematically searchable that

00:27:58 --> 00:28:04
you needed to develop strategies that

00:28:00 --> 00:28:06
were based on intuition that algorithm

00:28:03 --> 00:28:08
is playing go in a way that is

00:28:05 --> 00:28:10
unrecognizable to humans it feels like

00:28:07 --> 00:28:12
alien intelligence

00:28:09 --> 00:28:13
so I think maybe this is the vector

00:28:11 --> 00:28:15
which is these deep learning techniques

00:28:12 --> 00:28:18
which we can't completely characterize

00:28:14 --> 00:28:20
and describe much less debug are leading

00:28:17 --> 00:28:22
to these flashes of insight and they

00:28:19 --> 00:28:24
might not be human insight it might be

00:28:21 --> 00:28:26
like artificial intelligence new kind of

00:28:23 --> 00:28:27
intelligence yeah yeah but just be

00:28:25 --> 00:28:29
careful like this Christmas don't buy

00:28:26 --> 00:28:32
like a fluffy cute thing that shows up

00:28:28 --> 00:28:32
and says it can fix things in your house

00:28:34 --> 00:28:44
really cool present that everybody wants

00:28:36 --> 00:28:46
to get for all their friends funniest

00:28:43 --> 00:28:48
hing I was someone was making a joke

00:28:45 --> 00:28:49
that no it's kinda it's gonna get start

00:28:47 --> 00:28:51
because they were pissed but I'm gonna

00:28:48 --> 00:28:52
watch super play Super Mario Brothers

00:28:50 --> 00:28:54
all day because Frank share this awesome

00:28:51 --> 00:28:56
video yeah this is part of my tweet

00:28:53 --> 00:28:57
storm if you haven't seen it so go watch

00:28:55 --> 00:28:59
this awesome YouTube video of how

00:28:56 --> 00:29:02
ughter algorithm learned to play and

00:28:58 --> 00:29:04
then completely Ace Super Mario Brothers

00:29:01 --> 00:29:06
what's find it so we'll put it up on the

00:29:03 --> 00:29:08
link with this podcast okay alright guys

00:29:05 --> 00:29:10
well thank you and that's first of many

00:29:07 --> 00:29:13
conversations cuz I still do not quite

00:29:09 --> 00:29:14
understand the full taxonomy but I think

00:29:12 --> 00:29:16
that's part of the point here is that we

00:29:13 --> 00:29:18
have history crashing in with the

00:29:15 --> 00:29:20
present and trying to figure out what's

00:29:17 --> 00:29:23
coming next yes thank you thank you

<!-- YOUTUBE_TRANSCRIPT_END -->
