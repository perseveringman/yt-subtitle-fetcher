---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "l-mYLq6eZPY"
title: "Pieter Abbeel: Deep Reinforcement Learning | Lex Fridman Podcast #10"
video_url: "https://www.youtube.com/watch?v=l-mYLq6eZPY"
thumbnail_url: "https://i.ytimg.com/vi/l-mYLq6eZPY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=l-mYLq6eZPY"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-12-16T19:50:11.000Z"
upload_date: "2018-12-16"
duration_seconds: 2564
duration_human: "42:44"
view_count: 80677
like_count: 1522
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:15:48.056Z"
---

# Pieter Abbeel: Deep Reinforcement Learning | Lex Fridman Podcast #10

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=l-mYLq6eZPY
- video_id: l-mYLq6eZPY
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-12-16T19:50:11.000Z
- upload_date: 2018-12-16
- duration: 42:44
- view_count: 80677
- like_count: 1522
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
the following is a conversation with

00:00:01 --> 00:00:07
Petera Beal he's a professor UC Berkeley

00:00:04 --> 00:00:09
and the director of the Berkeley

00:00:06 --> 00:00:11
robotics learning lab he's one of the

00:00:08 --> 00:00:14
top researchers in the world working on

00:00:10 --> 00:00:15
how we make robots understand and

00:00:13 --> 00:00:18
interact with the world around them

00:00:15 --> 00:00:21
especially using imitation and deeper

00:00:17 --> 00:00:24
enforcement learning this conversation

00:00:20 --> 00:00:25
is part of the MIT course and artificial

00:00:23 --> 00:00:27
general intelligence and the artificial

00:00:24 --> 00:00:31
intelligence podcast if you enjoy it

00:00:27 --> 00:00:32
please subscribe on YouTube iTunes where

00:00:30 --> 00:00:35
your podcast provider of choice or

00:00:31 --> 00:00:39
simply connect with me on Twitter at Lex

00:00:34 --> 00:00:42
Friedman spelled Fri D and now here's my

00:00:38 --> 00:00:45
conversation with Peter a Biel you've

00:00:41 --> 00:00:46
mentioned that if there was one person

00:00:44 --> 00:00:50
you could meet you'll be Roger Federer

00:00:45 --> 00:00:52
so let me ask when do you think we will

00:00:49 --> 00:00:56
have a robot that fully autonomously can

00:00:51 --> 00:00:59
beat Roger Federer at tennis Roger

00:00:55 --> 00:01:00
Federer level player at tennis huh well

00:00:58 --> 00:01:03
first if you can make it happen for me

00:00:59 --> 00:01:07
to meet Roger let me know terms of

00:01:02 --> 00:01:09
getting a robot to beat him at tennis

00:01:06 --> 00:01:13
it's kind of an interesting question

00:01:08 --> 00:01:16
because for a lot of the challenges we

00:01:12 --> 00:01:18
think about in AI the software is really

00:01:15 --> 00:01:22
the missing piece but for something like

00:01:17 --> 00:01:25
this the hardware is nowhere near either

00:01:21 --> 00:01:27
like to really have a robot that can

00:01:24 --> 00:01:29
physically run around the Boston

00:01:26 --> 00:01:31
Dynamics robots are starting to get

00:01:28 --> 00:01:35
here but still not really human level

00:01:30 --> 00:01:39
ability to to run around and then swing

00:01:34 --> 00:01:40
a racket that's a hardware problem I

00:01:38 --> 00:01:41
don't think it's a harder problem only I

00:01:39 --> 00:01:44
think it's a hardware and a software

00:01:40 --> 00:01:46
problem I think it's both and I think

00:01:43 --> 00:01:49
they'll they'll have independent

00:01:45 --> 00:01:53
progress so I'd say the the hardware

00:01:48 --> 00:01:55
maybe in 10-15 years I'm just late not

00:01:52 --> 00:01:58
grass I've dressed with a sliding yeah

00:01:54 --> 00:02:01
oh plague I'm not sure what's Carter

00:01:57 --> 00:02:04
grass or clay the clay involves sliding

00:02:00 --> 00:02:09
which might be harder to master actually

00:02:03 --> 00:02:11
eah but you're not limited to bipedal I

00:02:08 --> 00:02:13
mean I'm sure there's I can build a

00:02:10 --> 00:02:14
machine it's a whole different question

00:02:12 --> 00:02:15
of course you know

00:02:13 --> 00:02:18
you can if you can say okay this robot

00:02:14 --> 00:02:20
can be on wheels they can move around on

00:02:17 --> 00:02:23
wheels and can be designed differently

00:02:19 --> 00:02:25
then I think that that can be done

00:02:22 --> 00:02:27
sooner probably than a full humanoid

00:02:24 --> 00:02:30
type of setup what do you think is swing

00:02:26 --> 00:02:33
a racket so you've worked at basic

00:02:29 --> 00:02:35
manipulation how hard do you think is

00:02:32 --> 00:02:37
the task of swinging or racket would be

00:02:34 --> 00:02:39
able to hit a nice backhand or a

00:02:36 --> 00:02:42
forehand

00:02:38 --> 00:02:45
okay let's say let's say we just set up

00:02:41 --> 00:02:47
stationary a nice robot arm let's say

00:02:44 --> 00:02:50
ou know a standard industrial arm and

00:02:46 --> 00:02:52
it can wash the ball come and then swing

00:02:49 --> 00:02:57
the racket it's a good question I'm not

00:02:51 --> 00:02:59
sure it would be super hard to do I mean

00:02:56 --> 00:03:01
I'm sure it would require a lot if we do

00:02:58 --> 00:03:02
it breed with reinforced Maleny would

00:03:00 --> 00:03:03
require a lot of trial and error it's

00:03:01 --> 00:03:07
not gonna swing it right the first time

00:03:02 --> 00:03:10
around but yeah I don't I don't see why

00:03:06 --> 00:03:12
I couldn't see the right way I think

00:03:09 --> 00:03:14
it's learn about I think if you set up a

00:03:11 --> 00:03:17
ball machine let's say on one side and

00:03:13 --> 00:03:17
then a robot with a tennis racket on the

00:03:16 --> 00:03:21
other side

00:03:16 --> 00:03:22
I think it's learn about and maybe a

00:03:20 --> 00:03:25
little bit of pre training and

00:03:21 --> 00:03:27
simulation yeah I think that's I think

00:03:24 --> 00:03:28
that's feasible I think I think the

00:03:26 --> 00:03:29
swinging the racket is feasible I'd be

00:03:27 --> 00:03:32
very interesting to see how much

00:03:28 --> 00:03:36
precision it can get

00:03:31 --> 00:03:37
listen I mean that's that's where I mean

00:03:35 --> 00:03:39
some of the human players can hit it on

00:03:36 --> 00:03:42
the lines which is very high precision

00:03:38 --> 00:03:45
with spin this win is it is an

00:03:41 --> 00:03:47
interesting whether RL can learn to put

00:03:44 --> 00:03:48
a spin on the ball well you got me

00:03:46 --> 00:03:53
interested maybe someday we'll set this

00:03:47 --> 00:03:55
your answer is basically okay for

00:03:52 --> 00:03:57
this problem it sounds fascinating but

00:03:54 --> 00:03:58
for the general problem of a tennis

00:03:56 --> 00:04:00
player we might be a little bit farther

00:03:57 --> 00:04:02
away what's the most impressive thing

00:03:59 --> 00:04:10
you've seen a robot do in the physical

00:04:01 --> 00:04:13
world so physically for me it's the

00:04:09 --> 00:04:16
Boston Dynamics videos always just ring

00:04:12 --> 00:04:18
home and just super impressed

00:04:15 --> 00:04:20
recently the robot running up the stairs

00:04:17 --> 00:04:22
doing the parkour type thing

00:04:19 --> 00:04:24
I mean yes we don't know what's

00:04:21 --> 00:04:26
underneath they don't really write a lot

00:04:23 --> 00:04:29
of detail but even if it's hard coded

00:04:25 --> 00:04:31
underneath which you might or might not

00:04:28 --> 00:04:33
be just the physical abilities of doing

00:04:30 --> 00:04:35
that parkour that's a very impressive so

00:04:32 --> 00:04:37
a lot right there have you met spot many

00:04:34 --> 00:04:41
or any of those robots in person might

00:04:37 --> 00:04:43
spot mini last hearing in April at the

00:04:40 --> 00:04:47
Mars event that Jeff Bezos organizes

00:04:42 --> 00:04:49
they brought it out there and it was

00:04:46 --> 00:04:50
nicely falling around Jeff when Jeff

00:04:48 --> 00:04:52
left the room they had it

00:04:49 --> 00:04:55
follow him along which is pretty

00:04:51 --> 00:04:57
impressive so I think there's some

00:04:54 --> 00:04:59
confidence to know that there's no

00:04:56 --> 00:05:00
learning going on in those robots the

00:04:58 --> 00:05:02
psychology of it so while knowing that

00:04:59 --> 00:05:04
while knowing there's not if there's any

00:05:01 --> 00:05:07
learning going on it's very limited

00:05:03 --> 00:05:09
I met spot Minnie earlier this year and

00:05:06 --> 00:05:12
knowing everything that's going on

00:05:08 --> 00:05:15
having one-on-one interaction so I got

00:05:11 --> 00:05:18
o spend some time alone and there's a

00:05:14 --> 00:05:20
immediately a deep connection on the

00:05:17 --> 00:05:22
psychological level even though you know

00:05:19 --> 00:05:26
the fundamentals how it works there's

00:05:21 --> 00:05:28
omething magical so do you think about

00:05:25 --> 00:05:30
he psychology of interacting with

00:05:27 --> 00:05:34
robots in the physical world even you

00:05:29 --> 00:05:36
just showed me the pr2 the the robot and

00:05:33 --> 00:05:38
there was a little bit something

00:05:35 --> 00:05:40
like a face head a little bit something

00:05:37 --> 00:05:42
like a face there's something that

00:05:39 --> 00:05:44
immediately draws you to it do you think

00:05:41 --> 00:05:46
about that aspect of

00:05:43 --> 00:05:49
the robotics problem well it's very

00:05:45 --> 00:05:52
hard with bread here we'll give him a

00:05:48 --> 00:05:53
name Berkeley robot for the elimination

00:05:51 --> 00:05:58
of tedious tasks is very hard to not

00:05:52 --> 00:06:00
hink of the robot as a person and it

00:05:57 --> 00:06:01
seems like everybody calls him a he for

00:05:59 --> 00:06:04
whatever reason but that also makes it

00:06:00 --> 00:06:07
more a person than if it was a it and

00:06:03 --> 00:06:09
it's it seems pretty natural to think of

00:06:06 --> 00:06:11
it that way this past weekend really

00:06:08 --> 00:06:15
struck me I've seen pepper many times on

00:06:10 --> 00:06:17
videos but then I was at an event

00:06:14 --> 00:06:20
organized by this was by fidelity and

00:06:16 --> 00:06:24
they had scripted pepper to help

00:06:19 --> 00:06:25
moderate some sessions and yet scripted

00:06:23 --> 00:06:28
pepper to have the personality of a

00:06:24 --> 00:06:32
child a little bit and it was very hard

00:06:27 --> 00:06:33
to not think of it as its own person in

00:06:31 --> 00:06:34
some sense because it was just kind of

00:06:32 --> 00:06:36
jumping it would just jump into

00:06:33 --> 00:06:38
conversation making it very interactive

00:06:35 --> 00:06:41
moderate will be saying pepper just jump

00:06:37 --> 00:06:42
in hold on how about me can I

00:06:40 --> 00:06:44
participate in this doing it just like I

00:06:41 --> 00:06:47
heard this is like like a person and I

00:06:43 --> 00:06:49
was 100% scripted and even then it was

00:06:46 --> 00:06:52
hard not to have that sense of somehow

00:06:48 --> 00:06:55
there is something there so as we have

00:06:51 --> 00:06:57
robots interact in this physical world

00:06:54 --> 00:06:59
is that a signal that can be used in

00:06:56 --> 00:07:00
reinforcement learning you've you've

00:06:58 --> 00:07:02
worked a little bit in this direction

00:06:59 --> 00:07:05
but do you think that's that psychology

00:07:01 --> 00:07:06
can be somehow pulled in now so that's a

00:07:04 --> 00:07:09
question

00:07:05 --> 00:07:12
I would say a lot a lot of people ask

00:07:08 --> 00:07:16
and I think part of why they ask it is

00:07:11 --> 00:07:18
they're thinking about how unique are we

00:07:15 --> 00:07:20
really still ask people like after they

00:07:17 --> 00:07:22
see some results they see a computer

00:07:19 --> 00:07:24
play go to say computer do this that

00:07:21 --> 00:07:26
hey're like ok but can it really have

00:07:23 --> 00:07:29
motion can it really interact with us

00:07:25 --> 00:07:31
in that way and then once you're around

00:07:28 --> 00:07:32
robots you already start feeling it and

00:07:30 --> 00:07:35
I think that kind of maybe

00:07:31 --> 00:07:37
mythologically the way that I think of

00:07:34 --> 00:07:39
it is if you run something like

00:07:36 --> 00:07:43
reinforce some Linux about optimizing

00:07:38 --> 00:07:48
some objective and there's no reason

00:07:42 --> 00:07:50
that D object couldn't be tied into how

00:07:47 --> 00:07:53
much there's a person like interacting

00:07:49 --> 00:07:54
with this system and why could not the

00:07:52 --> 00:07:56
reinforcement learning system optimized

00:07:53 --> 00:07:58
for their robot being fun to be around

00:07:55 --> 00:07:59
and

00:07:57 --> 00:08:01
why wouldn't it then naturally become

00:07:58 --> 00:08:04
more and more interactive and more and

00:08:00 --> 00:08:05
more maybe like a person or like a pet I

00:08:03 --> 00:08:07
don't know what it would exactly be but

00:08:04 --> 00:08:09
more more have those features and

00:08:06 --> 00:08:12
acquire them automatically as long as

00:08:08 --> 00:08:14
you can formalize an objective of what

00:08:11 --> 00:08:17
it means to like something what how you

00:08:13 --> 00:08:20
exhibit what's the ground truth how do

00:08:16 --> 00:08:21
you how do you get the reward from human

00:08:19 --> 00:08:23
cause you have to somehow collect that

00:08:20 --> 00:08:25
information within you human

00:08:22 --> 00:08:27
but you you're saying if you can

00:08:24 --> 00:08:29
formulate as an objective it can be

00:08:26 --> 00:08:31
learned there is no reason it couldn't

00:08:28 --> 00:08:32
emergent through learning and maybe one

00:08:30 --> 00:08:34
way to formulate has an objective you

00:08:31 --> 00:08:36
wouldn't have to necessarily score it

00:08:33 --> 00:08:38
explicitly so standard rewards are

00:08:35 --> 00:08:42
numbers and numbers are hard to come by

00:08:37 --> 00:08:44
this is a 1.5 or 0.7 on some scale it's

00:08:41 --> 00:08:47
very hard to do for a person but much

00:08:43 --> 00:08:49
easier is for a person to say okay what

00:08:46 --> 00:08:51
you did the last five minutes was much

00:08:48 --> 00:08:53
nicer than we did the previous five

00:08:50 --> 00:08:55
minutes and that now gives a comparison

00:08:52 --> 00:08:56
compare and in fact there have been some

00:08:54 --> 00:08:58
results in that for example Paul

00:08:55 --> 00:09:02
Christiana and collaborators at open e I

00:08:57 --> 00:09:04
had the hopper madoka Hopper one legged

00:09:01 --> 00:09:07
robot the Batman's little back flips

00:09:03 --> 00:09:08
yeah purely from feedback I like this

00:09:06 --> 00:09:11
better than that that's kind of equally

00:09:07 --> 00:09:13
good and after a bunch of interactions

00:09:10 --> 00:09:15
it figured out what it was the person

00:09:12 --> 00:09:16
was asking for it namely a back flip and

00:09:14 --> 00:09:19
so I think the same thing

00:09:15 --> 00:09:21
od wasn't trying to do a back flip it

00:09:18 --> 00:09:22
was just getting a score from the

00:09:20 --> 00:09:25
comparison score from the person based

00:09:21 --> 00:09:28
on hers and having a mind in their own

00:09:24 --> 00:09:30
mind what I wanted to do a back flip but

00:09:27 --> 00:09:32
he robot didn't know what it was

00:09:29 --> 00:09:34
upposed to be doing it just knew that

00:09:31 --> 00:09:36
sometimes the person said this is better

00:09:33 --> 00:09:37
this is worse and then the robot figure

00:09:35 --> 00:09:40
it out what the person was actually

00:09:36 --> 00:09:42
after was a back flip and I'd imagine

00:09:39 --> 00:09:45
the same would be true for things like

00:09:41 --> 00:09:46
more interactive robots that the robot

00:09:44 --> 00:09:48
would figure out over time oh this kind

00:09:45 --> 00:09:51
of thing apparently has appreciated more

00:09:47 --> 00:09:53
than this other kind of thing so when I

00:09:50 --> 00:09:56
first picked up

00:09:52 --> 00:10:00
Sutton's Richard Sutton's reinforcement

00:09:55 --> 00:10:03
learning book before sort of this deep

00:09:59 --> 00:10:05
learning before the re-emergence of

00:10:02 --> 00:10:08
neural networks is a powerful mechanism

00:10:04 --> 00:10:11
for machine learning IRL seemed to me

00:10:07 --> 00:10:14
like magic as a as beautiful so

00:10:10 --> 00:10:19
that seemed like what intelligence is RL

00:10:13 --> 00:10:21
reinforcement learning so how do you

00:10:18 --> 00:10:23
think we can possibly learn anything

00:10:20 --> 00:10:26
about the world when the reward for the

00:10:22 --> 00:10:31
actions is delayed is so sparse like

00:10:25 --> 00:10:33
where is why do you think RL works why

00:10:30 --> 00:10:36
do you think you can learn anything

00:10:32 --> 00:10:38
under such sparse awards whether it's

00:10:35 --> 00:10:39
regular reinforcement learning a deeper

00:10:37 --> 00:10:42
enforcement learning what's your

00:10:38 --> 00:10:47
intuition the kind of part of that is

00:10:41 --> 00:10:49
why is RL why does it need so many

00:10:46 --> 00:10:51
samples so many experiences to learn

00:10:48 --> 00:10:54
from because really what's happening is

00:10:50 --> 00:10:55
when you have a sparse reward you do

00:10:53 --> 00:10:57
something maybe for like I don't know

00:10:54 --> 00:10:59
you take a hundred actions and then you

00:10:56 --> 00:11:02
get a reward and maybe get like a score

00:10:58 --> 00:11:04
of three and I'm like okay three not

00:11:01 --> 00:11:07
sure what that means you go again and

00:11:03 --> 00:11:08
now I get to and now you know that that

00:11:06 --> 00:11:10
sequence of hundred actions that you did

00:11:07 --> 00:11:11
the second time around somehow was worse

00:11:09 --> 00:11:13
than the sequence of hundred actions you

00:11:10 --> 00:11:15
did the first time around but that's

00:11:12 --> 00:11:16
tough to now know which one of those

00:11:14 --> 00:11:18
were better or worse some might have

00:11:15 --> 00:11:20
been good and bad in either one and so

00:11:17 --> 00:11:22
that's why I need so many experience but

00:11:19 --> 00:11:24
once you have enough experiences

00:11:21 --> 00:11:26
effectively rlist easing that apart it's

00:11:23 --> 00:11:28
time to say okay when what is

00:11:25 --> 00:11:29
consistently there when you get a higher

00:11:27 --> 00:11:31
eward and what's consistently there

00:11:28 --> 00:11:33
when you get a lower reward and then

00:11:30 --> 00:11:35
kind of the magic of sums is the policy

00:11:32 --> 00:11:38
grant update is to say

00:11:34 --> 00:11:39
now let's update the neural network to

00:11:37 --> 00:11:42
make the actions that were kind of

00:11:38 --> 00:11:44
present when things are good more likely

00:11:41 --> 00:11:45
and make the actions that are present

00:11:43 --> 00:11:48
when things are not as good less likely

00:11:44 --> 00:11:50
so that's that is the counterpoint but

00:11:47 --> 00:11:52
it seems like you would need to run it a

00:11:49 --> 00:11:54
lot more than you do even though right

00:11:51 --> 00:11:56
now people could say that RL is very

00:11:53 --> 00:11:58
inefficient but it seems to be way more

00:11:55 --> 00:12:01
fficient than one would imagine on

00:11:57 --> 00:12:04
paper that the the simple updates to the

00:12:00 --> 00:12:06
policy the policy gradient that that's

00:12:03 --> 00:12:08
omehow you can learn is exactly users

00:12:05 --> 00:12:10
aid what are the common actions that

00:12:07 --> 00:12:14
seem to produce some good results that

00:12:09 --> 00:12:16
somehow can learn anything it seems

00:12:13 --> 00:12:20
counterintuitive at least did is there

00:12:15 --> 00:12:22
some intuition behind yeah so I think

00:12:19 --> 00:12:25
there's a few ways to think about this

00:12:21 --> 00:12:28
the way I Tennant

00:12:24 --> 00:12:29
about it mostly originally when so when

00:12:27 --> 00:12:31
we started working on deep reinforcement

00:12:28 --> 00:12:32
learning here at Berkeley which was

00:12:30 --> 00:12:34
maybe two thousand eleven twelve

00:12:31 --> 00:12:36
thirteen around that time

00:12:33 --> 00:12:38
challenge Schulman was a PhD student

00:12:35 --> 00:12:44
initially kind of driving it too forward

00:12:37 --> 00:12:45
here and did it the way we thought about

00:12:43 --> 00:12:48
it at the time was if you think about

00:12:44 --> 00:12:51
rectified linear units or kind of break

00:12:47 --> 00:12:52
the fire type neural networks what do

00:12:50 --> 00:12:56
you get you get something that's

00:12:51 --> 00:12:58
piecewise linear feedback control and if

00:12:55 --> 00:12:59
you look at the literature linear

00:12:57 --> 00:13:01
feedback control is extremely successful

00:12:58 --> 00:13:04
can solve many many problems

00:13:00 --> 00:13:05
urprisingly well

00:13:03 --> 00:13:07
I remember for example when we did

00:13:04 --> 00:13:10
helicopter flight if you're in a

00:13:06 --> 00:13:11
stationary flight regime not a non

00:13:09 --> 00:13:13
station by the stationary flight regime

00:13:10 --> 00:13:14
like hover you can use linear feedback

00:13:12 --> 00:13:16
control to stabilize a helicopter a very

00:13:13 --> 00:13:19
complex dynamical system but the

00:13:15 --> 00:13:21
controller is relatively simple and so I

00:13:18 --> 00:13:23
think that's a big part of is that if

00:13:20 --> 00:13:25
you do feedback control even though the

00:13:22 --> 00:13:28
system you control can be very very

00:13:24 --> 00:13:31
complex often relatively simple control

00:13:27 --> 00:13:33
architectures can already do a lot but

00:13:30 --> 00:13:35
hen also just linear is not good enough

00:13:32 --> 00:13:36
and so one way you can think of these

00:13:34 --> 00:13:38
neural networks is that in sometimes

00:13:35 --> 00:13:40
they tile the space which people were

00:13:37 --> 00:13:42
already trying to do more by hand or

00:13:39 --> 00:13:43
with finite state machines say this

00:13:41 --> 00:13:45
linear controller here this leaner

00:13:42 --> 00:13:47
controller here you'll network learns

00:13:44 --> 00:13:49
that alva spins a linear controller here

00:13:46 --> 00:13:51
another linear controller here but it's

00:13:48 --> 00:13:52
more subtle than that yeah and so it's

00:13:50 --> 00:13:54
benefiting from this linear control

00:13:51 --> 00:13:57
aspect is benefiting from the tiling but

00:13:53 --> 00:13:59
it's somehow tiling it one dimension at

00:13:56 --> 00:14:01
a time because if let's say you have a

00:13:58 --> 00:14:05
two layer network even the hidden layer

00:14:00 --> 00:14:07
you make a transition from active to

00:14:04 --> 00:14:10
inactive or the other way around that is

00:14:06 --> 00:14:12
essentially one axis but not acts as a

00:14:09 --> 00:14:14
line but one direction that you change

00:14:11 --> 00:14:16
and so you have this kind of very

00:14:13 --> 00:14:18
gradual tiling of the space we have a

00:14:15 --> 00:14:20
lot of sharing between the linear

00:14:17 --> 00:14:22
controllers that tile the space and that

00:14:19 --> 00:14:25
was always my intuition s of why to

00:14:21 --> 00:14:26
expect that this might work pretty well

00:14:24 --> 00:14:28
it's essentially leveraging the fact

00:14:25 --> 00:14:31
hat linear feedback control is so good

00:14:27 --> 00:14:33
but of course not enough and this is a

00:14:30 --> 00:14:35
gradual tiling of the space with linear

00:14:32 --> 00:14:38
feedback controls that share a lot of

00:14:34 --> 00:14:40
expertise across them so that that's

00:14:37 --> 00:14:42
really nice intuition do you

00:14:39 --> 00:14:44
think that scales to the more and more

00:14:41 --> 00:14:48
general problems of when you start going

00:14:43 --> 00:14:53
up the number of controllers dimensions

00:14:47 --> 00:14:55
when you start going down in terms of

00:14:52 --> 00:14:58
how often you get a clean reward signal

00:14:54 --> 00:15:01
does that intuition carry forward to

00:14:57 --> 00:15:06
those crazy or weird or worlds that we

00:15:00 --> 00:15:09
think of as the real world so I think

00:15:05 --> 00:15:10
where things get really tricky in the

00:15:08 --> 00:15:13
real world compared to the things we've

00:15:09 --> 00:15:16
looked at so far with great success in

00:15:12 --> 00:15:16
reinforcement learning is

00:15:15 --> 00:15:22
the time skills which takes us to an

00:15:18 --> 00:15:24
extreme so when you think about the real

00:15:21 --> 00:15:27
world I mean I don't know maybe some

00:15:23 --> 00:15:29
student decided to do a a PhD here right

00:15:26 --> 00:15:32
okay that's that's the decision that's a

00:15:28 --> 00:15:34
very high-level decision but if you

00:15:31 --> 00:15:36
think about their lives I mean any

00:15:33 --> 00:15:39
person's life it's a sequence of muscle

00:15:35 --> 00:15:40
fiber contractions and relaxations and

00:15:38 --> 00:15:43
that's how you interact with the world

00:15:39 --> 00:15:45
and that's a very high frequency control

00:15:42 --> 00:15:47
thing but it's ultimately what you do

00:15:44 --> 00:15:49
and how you affect the world until I

00:15:46 --> 00:15:50
guess we have brain readings and you can

00:15:48 --> 00:15:52
maybe do it slightly differently but

00:15:49 --> 00:15:56
ypically that's how you affect the

00:15:51 --> 00:15:58
world and the decision of doing a PhD is

00:15:55 --> 00:16:00
like so abstract relative to what you're

00:15:57 --> 00:16:02
actually doing in the world and I think

00:15:59 --> 00:16:06
that's where credit assignment becomes

00:16:01 --> 00:16:08
just completely beyond what any current

00:16:05 --> 00:16:10
RL algorithm can do and we need

00:16:07 --> 00:16:13
hierarchical reasoning at a level that

00:16:09 --> 00:16:15
is just not available at all yet where

00:16:12 --> 00:16:18
do you think we can pick up hierarchical

00:16:14 --> 00:16:20
reasoning by which mechanisms yeah so

00:16:17 --> 00:16:24
maybe let me highlight what I think the

00:16:19 --> 00:16:27
limitations are of what already was done

00:16:23 --> 00:16:29
20-30 years ago in fact you'll find

00:16:26 --> 00:16:32
reasoning systems that reason over

00:16:28 --> 00:16:33
elatively long horizons but the

00:16:31 --> 00:16:36
problems that they were not grounded in

00:16:32 --> 00:16:42
the real world so people would have to

00:16:35 --> 00:16:44
hand design some kind of logical

00:16:41 --> 00:16:47
dynamical descriptions of the world and

00:16:43 --> 00:16:50
that didn't tie into perception and so

00:16:46 --> 00:16:52
then time to real objects and so forth

00:16:49 --> 00:16:54
and so that that was a big gap now with

00:16:51 --> 00:16:59
deep learning we start having the

00:16:53 --> 00:17:01
ability to really see with sensors

00:16:58 --> 00:17:03
process that and understand what's in

00:17:00 --> 00:17:06
the world and so it's a good time to try

00:17:02 --> 00:17:07
to bring these things together one I see

00:17:05 --> 00:17:09
a few ways of getting there one way to

00:17:06 --> 00:17:11
get there would be to say deep learning

00:17:08 --> 00:17:13
can get bolted on somehow to some of

00:17:10 --> 00:17:15
these more traditional approaches now

00:17:12 --> 00:17:16
bolted on would probably mean you need

00:17:14 --> 00:17:18
to do some kind of end-to-end training

00:17:15 --> 00:17:20
where you say my deep learning

00:17:17 --> 00:17:24
processing somehow leads to a

00:17:19 --> 00:17:27
representation that in Perm uses some

00:17:23 --> 00:17:30
kind of traditional underlying dynamical

00:17:26 --> 00:17:32
systems that can be used for planning

00:17:29 --> 00:17:34
and that's for example the direction

00:17:31 --> 00:17:35
Aviv Tamar and the North Korea touch

00:17:33 --> 00:17:37
ere have been pushing with causal info

00:17:34 --> 00:17:40
gone and of course other people to that

00:17:36 --> 00:17:42
's that's one way can we somehow

00:17:39 --> 00:17:45
force it into the form factor that is

00:17:41 --> 00:17:47
amenable to reasoning

00:17:44 --> 00:17:50
another direction we've been thinking

00:17:46 --> 00:17:52
about for a long time and they didn't

00:17:49 --> 00:17:54
make any progress on was more

00:17:51 --> 00:17:57
information theoretic approaches so the

00:17:54 --> 00:18:01
idea there was that what it means to

00:17:56 --> 00:18:03
take high-level action is to take and

00:18:00 --> 00:18:05
choose a latent variable now that tells

00:18:03 --> 00:18:06
you a lot about what's gonna be the case

00:18:04 --> 00:18:10
in the future because that's what it

00:18:06 --> 00:18:14
means to to take a high-level action I

00:18:09 --> 00:18:15
say what I decide I'm gonna navigate to

00:18:13 --> 00:18:17
the gas station because need to get gas

00:18:14 --> 00:18:19
for my car well that'll now take five

00:18:16 --> 00:18:21
minutes to get there but the fact that I

00:18:18 --> 00:18:23
get there I could already tell that from

00:18:20 --> 00:18:26
the high-level action it took much

00:18:22 --> 00:18:30
earlier that we had a very hard time

00:18:25 --> 00:18:32
getting success with not saying it's a

00:18:29 --> 00:18:34
dead-end necessarily but we had a lot of

00:18:31 --> 00:18:36
trouble getting that to work and then we

00:18:33 --> 00:18:39
start revisiting the notion of what are

00:18:35 --> 00:18:41
we really trying to achieve what we're

00:18:38 --> 00:18:42
trying to achieve is non ously hierarchy

00:18:40 --> 00:18:46
per se but you could think about what

00:18:41 --> 00:18:47
does hierarchy give us what it's we hope

00:18:45 --> 00:18:50
it would give us is better credit

00:18:46 --> 00:18:53
assignment kind of what is better credit

00:18:49 --> 00:18:58
ominous is given is giving us it gives

00:18:52 --> 00:19:00
us faster learning right and so faster

00:18:57 --> 00:19:02
learning is ultimately maybe what we're

00:18:59 --> 00:19:04
after and so that's what we ended up

00:19:01 --> 00:19:07
with the RL squared paper on learning -

00:19:03 --> 00:19:11
reinforcement learn which at a time

00:19:06 --> 00:19:12
rocky duan LED and that's exactly the

00:19:10 --> 00:19:15
meta learning approach or is say okay we

00:19:11 --> 00:19:16
don't know how to design hierarchy we

00:19:14 --> 00:19:19
know what we want to get from it let's

00:19:15 --> 00:19:21
just enter an optimize for what want to

00:19:18 --> 00:19:23
get from it and see if it might emerging

00:19:20 --> 00:19:26
we saw things emerge the maze navigation

00:19:22 --> 00:19:28
had consistent motion down hallways

00:19:25 --> 00:19:29
which is what you want a hierarchical

00:19:27 --> 00:19:31
control should say I want to go down

00:19:28 --> 00:19:33
this hallway and then when there is an

00:19:30 --> 00:19:35
option to take a turn I can this art

00:19:32 --> 00:19:37
will take a turn or not and repeat even

00:19:34 --> 00:19:39
had the notion of where have you been

00:19:36 --> 00:19:42
before or not do not revisit places

00:19:38 --> 00:19:45
you've been before it still didn't scale

00:19:41 --> 00:19:47
yet to the real world kind of scenarios

00:19:44 --> 00:19:49
I think you had in mind but it was some

00:19:46 --> 00:19:52
sign of life that maybe you can meta

00:19:48 --> 00:19:55
learn these hierarchal concepts I mean

00:19:51 --> 00:19:58
it seems like through these meta

00:19:54 --> 00:19:59
learning concepts get at the what I

00:19:57 --> 00:20:02
think is one of the

00:19:58 --> 00:20:05
hardest and most important problems of

00:20:01 --> 00:20:08
AI which is transfer learning so it's

00:20:04 --> 00:20:10
generalization how far along this

00:20:07 --> 00:20:13
journey towards building general systems

00:20:10 --> 00:20:16
are we being able to do transfer

00:20:12 --> 00:20:19
learning well so there's some signs that

00:20:15 --> 00:20:20
you can generalize a little bit but do

00:20:18 --> 00:20:23
you think we're on the right path or

00:20:19 --> 00:20:27
it's totally different breakthroughs are

00:20:22 --> 00:20:32
needed to be able to transfer knowledge

00:20:26 --> 00:20:34
between different learned models yeah

00:20:31 --> 00:20:38
I'm I'm pretty tired on this and then I

00:20:33 --> 00:20:40
think there are some very many there

00:20:37 --> 00:20:42
's just some very impressive

00:20:39 --> 00:20:47
results already right I mean yes I would

00:20:41 --> 00:20:49
say when even with the initial and a big

00:20:46 --> 00:20:51
breakthrough in 2012 with Aleks net

00:20:48 --> 00:20:54
right the initial the initial thing is

00:20:50 --> 00:20:57
okay great this does better on imagenet

00:20:53 --> 00:20:59
hands image recognition but then

00:20:56 --> 00:21:02
immediately thereafter that was of

00:20:58 --> 00:21:04
course the notion that Wow

00:21:01 --> 00:21:06
hat was learned on image net and you

00:21:03 --> 00:21:09
now want to solve a new task you can

00:21:05 --> 00:21:12
fine-tune Aleks net for new tasks and

00:21:08 --> 00:21:13
that was often found to be the even

00:21:11 --> 00:21:16
bigger deal that you learned something

00:21:12 --> 00:21:17
that was reusable which was not often

00:21:15 --> 00:21:19
the case before usually machine learning

00:21:16 --> 00:21:20
you learned something for one scenario

00:21:18 --> 00:21:22
and that was it and that's really

00:21:19 --> 00:21:24
exciting I mean that's just a huge

00:21:21 --> 00:21:25
application that's probably the biggest

00:21:23 --> 00:21:29
success of transfer learning today in

00:21:24 --> 00:21:31
terms of scope and impact that was huge

00:21:28 --> 00:21:36
breakthrough and then recently I feel

00:21:30 --> 00:21:38
ike similar kind of but by scaling

00:21:35 --> 00:21:39
things up it seems like this has been

00:21:37 --> 00:21:41
expanded upon like people training even

00:21:38 --> 00:21:44
bigger networks they might transfer even

00:21:40 --> 00:21:45
better if you looked at for example some

00:21:43 --> 00:21:47
of the opening eye results on language

00:21:44 --> 00:21:50
models and some of the recent Google

00:21:46 --> 00:21:54
results on language models they are

00:21:49 --> 00:21:58
learned for just prediction and then

00:21:53 --> 00:21:59
they get reused for other tasks and so I

00:21:57 --> 00:22:01
think there is something there where

00:21:58 --> 00:22:04
somehow if you train a big enough model

00:22:00 --> 00:22:06
on enough things it seems to transfer

00:22:03 --> 00:22:09
some deepmind results I thought were

00:22:05 --> 00:22:13
very impressive unreal results where it

00:22:08 --> 00:22:13
was learned to navigate mazes in ways

00:22:12 --> 00:22:15
where it wasn't just

00:22:12 --> 00:22:17
reinforcement learning going to have

00:22:14 --> 00:22:19
other objectives was optimizing for so I

00:22:16 --> 00:22:24
think there's a lot of interesting

00:22:18 --> 00:22:26
results already I think maybe words hard

00:22:23 --> 00:22:28
to wrap my head around this to which

00:22:25 --> 00:22:31
extend or when do we call something

00:22:27 --> 00:22:33
eneralization right or the levels of

00:22:30 --> 00:22:37
generalization involved in these

00:22:32 --> 00:22:39
different tasks alright so you draw this

00:22:36 --> 00:22:42
by the way just to frame things you've

00:22:38 --> 00:22:43
heard you say somewhere it's the

00:22:41 --> 00:22:46
difference between learning to master

00:22:42 --> 00:22:49
versus learning to generalize that it's

00:22:45 --> 00:22:52
a nice line to think about and it guess

00:22:48 --> 00:22:54
you're saying that's a gray area of what

00:22:51 --> 00:22:56
learning to master and learning to

00:22:53 --> 00:22:57
generalize where once think I might have

00:22:55 --> 00:22:59
heard this I might have heard it

00:22:56 --> 00:23:01
somewhere else and I think it might have

00:22:58 --> 00:23:03
been one of one of your interviews and

00:23:00 --> 00:23:05
maybe the one with yo show Benjamin on

00:23:02 --> 00:23:09
hundred percent sure but I like the

00:23:04 --> 00:23:11
xample I'm gonna act not sure who it

00:23:08 --> 00:23:13
was but the example was essentially if

00:23:10 --> 00:23:17
you use current deep learning techniques

00:23:12 --> 00:23:21
what we're doing to predict let's say

00:23:16 --> 00:23:24
the relative motion of our planets it

00:23:20 --> 00:23:28
would do pretty well but then now if a

00:23:23 --> 00:23:31
massive new mass enters our solar system

00:23:27 --> 00:23:34
it would prompt predict what will happen

00:23:30 --> 00:23:35
right and that's a different kind of

00:23:33 --> 00:23:38
journal is a Shahnaz a generalization

00:23:34 --> 00:23:40
that relies on the ultimate simplest

00:23:37 --> 00:23:42
explanation that we have

00:23:39 --> 00:23:43
available today to explain the motion of

00:23:41 --> 00:23:45
planets where I was just pattern

00:23:42 --> 00:23:47
recognition could predict our current

00:23:44 --> 00:23:49
solar system motion pretty well no

00:23:46 --> 00:23:52
problem and so I think that's an example

00:23:48 --> 00:23:53
of a kind of generalization that is a

00:23:51 --> 00:23:57
little different from what we've

00:23:52 --> 00:24:00
achieved so far and it's not clear if

00:23:56 --> 00:24:02
just you know regularizing more I'm

00:23:59 --> 00:24:04
forcing it to come up with a simpler

00:24:01 --> 00:24:05
simple experience but it's not

00:24:03 --> 00:24:07
simple but that's what physics

00:24:04 --> 00:24:10
researchers do right to say can I make

00:24:06 --> 00:24:11
this even simpler how simple can I get

00:24:09 --> 00:24:13
his what's a simplest equation I can

00:24:10 --> 00:24:15
explain everything right yeah the master

00:24:12 --> 00:24:17
equation for the entire dynamics of the

00:24:14 --> 00:24:19
universe we haven't really pushed that

00:24:16 --> 00:24:22
direction as hard in in deep learning I

00:24:18 --> 00:24:24
would say not sure if it should be

00:24:21 --> 00:24:25
pushed but it seems a kind of

00:24:23 --> 00:24:27
generalization you get from that that

00:24:24 --> 00:24:29
you don't get in our current methods

00:24:26 --> 00:24:32
o far so I just talked to vladimir

00:24:28 --> 00:24:34
vapnik for example who was a

00:24:31 --> 00:24:37
statistician the statistical learning

00:24:33 --> 00:24:40
and he kind of dreams of creating these

00:24:36 --> 00:24:42
are the a equals e equals mc-squared for

00:24:39 --> 00:24:44
learning right the general theory of

00:24:41 --> 00:24:50
learning do you think that's a fruitless

00:24:43 --> 00:24:53
pursuit in the near term in within the

00:24:49 --> 00:24:55
next several decades I think that's a

00:24:52 --> 00:24:58
really interesting pursuit and in the

00:24:54 --> 00:25:03
following sense and that there is a lot

00:24:57 --> 00:25:05
of evidence that the brain is pretty

00:25:02 --> 00:25:07
modular and so I wouldn't maybe think of

00:25:04 --> 00:25:09
it as the theory maybe the the

00:25:06 --> 00:25:13
underlying theory but more kind of the

00:25:08 --> 00:25:16
principle where there have been findings

00:25:12 --> 00:25:18
where people who are blind will use the

00:25:16 --> 00:25:23
part of the brain usually used for

00:25:17 --> 00:25:26
vision for other functions and even

00:25:22 --> 00:25:28
after some kind of if people will get

00:25:25 --> 00:25:29
rewired in some way they might I'm able

00:25:27 --> 00:25:32
to reuse parts of their brain for other

00:25:28 --> 00:25:37
functions and so what that suggests is

00:25:31 --> 00:25:39
ome kind of modularity and I think it

00:25:36 --> 00:25:41
is a pretty natural thing to strive

00:25:38 --> 00:25:44
forward to see can we find that

00:25:40 --> 00:25:45
modularity can we find this thing of

00:25:43 --> 00:25:47
course it's not every part of the brain

00:25:44 --> 00:25:49
is not exactly the same not everything

00:25:46 --> 00:25:51
can be rewired arbitrarily but if you

00:25:48 --> 00:25:53
think of things like the neocortex which

00:25:50 --> 00:25:55
is pretty big part of the brain that

00:25:52 --> 00:25:59
seems fairly modular from what the

00:25:54 --> 00:26:01
findings so far can you design something

00:25:58 --> 00:26:03
equally modular and if you can just grow

00:26:00 --> 00:26:04
it it becomes more capable probably I

00:26:02 --> 00:26:06
think that would be the kind of

00:26:03 --> 00:26:10
interesting underlying principle to

00:26:05 --> 00:26:14
shoot for that is not unrealistic do you

00:26:09 --> 00:26:17
think you prefer math or empirical trial

00:26:13 --> 00:26:18
and error for the discovery of the

00:26:16 --> 00:26:19
ssence of what it means to do something

00:26:17 --> 00:26:21
intelligent

00:26:18 --> 00:26:24
so reinforcement learning embodies both

00:26:20 --> 00:26:27
groups right then prove that something

00:26:23 --> 00:26:29
converges prove the bounds and then at

00:26:26 --> 00:26:31
he same time a lot of those successes

00:26:28 --> 00:26:34
are well let's try this and see if it

00:26:30 --> 00:26:36
works so which do you gravitate towards

00:26:33 --> 00:26:40
how do you think of those two parts of

00:26:35 --> 00:26:40
your brain so

00:26:39 --> 00:26:47
maybe I would prefer we could make the

00:26:43 --> 00:26:48
progress with mathematics and the reason

00:26:46 --> 00:26:50
maybe I would prefer that is because

00:26:47 --> 00:26:54
often if you have something you

00:26:49 --> 00:26:56
can mathematically formalise you can

00:26:53 --> 00:26:58
leapfrog a lot of experimentation and

00:26:55 --> 00:27:01
experimentation takes a long time to get

00:26:57 --> 00:27:03
hrough and a lot of trial and error

00:27:00 --> 00:27:05
kind of reinforcement learning your

00:27:02 --> 00:27:07
esearch process but you need to do a

00:27:04 --> 00:27:09
lot of trial and error before you get to

00:27:06 --> 00:27:10
a success so if we can leapfrog doubt in

00:27:08 --> 00:27:13
my mind that's what the math is about

00:27:09 --> 00:27:15
and hopefully once you do a bunch of

00:27:12 --> 00:27:17
experiments you start seeing a pattern

00:27:14 --> 00:27:19
you can do some derivations that

00:27:16 --> 00:27:21
leapfrog some experiments but I agree

00:27:18 --> 00:27:22
with you I mean in practice a lot of the

00:27:20 --> 00:27:24
progress has been such that we have not

00:27:22 --> 00:27:27
been able to find the math that allows

00:27:23 --> 00:27:29
it to leapfrog ahead and we are kind of

00:27:26 --> 00:27:31
making gradual progress one step at a

00:27:28 --> 00:27:32
time a new experiment here a new

00:27:30 --> 00:27:35
experiment there that gives us new

00:27:31 --> 00:27:37
insights and gradually building up but

00:27:34 --> 00:27:39
not getting to something yet where we're

00:27:36 --> 00:27:41
just okay here's an equation that now

00:27:38 --> 00:27:43
explains how you know that would be have

00:27:40 --> 00:27:45
been two years of experimentation to get

00:27:42 --> 00:27:47
here but this tells us what the results

00:27:44 --> 00:27:50
going to be unfortunately not so much

00:27:46 --> 00:27:53
yes not so much yeah but your hope is

00:27:49 --> 00:27:58
there in trying to teach robots or

00:27:52 --> 00:28:01
systems to do everyday tasks or even in

00:27:57 --> 00:28:05
simulation what what do you think you're

00:28:00 --> 00:28:05
more excited about imitation learning or

00:28:04 --> 00:28:09
self play

00:28:04 --> 00:28:12
so letting robots learn from humans or

00:28:08 --> 00:28:14
letting robots plan their own to try to

00:28:11 --> 00:28:18
figure out in their own way and

00:28:13 --> 00:28:20
eventually play eventually interact with

00:28:17 --> 00:28:23
umans or to solve whatever problem is

00:28:19 --> 00:28:24
what's the more exciting to you what's

00:28:22 --> 00:28:32
more promising you think as a research

00:28:23 --> 00:28:35
direction so when we look at self play

00:28:31 --> 00:28:37
what's so beautiful about it is goes

00:28:34 --> 00:28:38
back to kind of the challenges in

00:28:36 --> 00:28:40
reinforcement learning so the challenge

00:28:37 --> 00:28:43
of reinforced learning is getting signal

00:28:39 --> 00:28:46
and if you don't never succeed you don't

00:28:42 --> 00:28:49
get any signal in self play you're on

00:28:45 --> 00:28:50
both sides so one of you succeeds and

00:28:48 --> 00:28:53
the beauty is also one of you fails and

00:28:49 --> 00:28:54
so you see the contrast you see the one

00:28:52 --> 00:28:55
version of me that it better

00:28:53 --> 00:28:58
the other version and so every time you

00:28:55 --> 00:28:59
play yourself you get signal and so

00:28:57 --> 00:29:01
whenever you can turn something into

00:28:58 --> 00:29:04
self play you're in a beautiful

00:29:00 --> 00:29:06
situation where you can naturally learn

00:29:03 --> 00:29:09
much more quickly than in most other

00:29:05 --> 00:29:12
einforced learning environments so I

00:29:08 --> 00:29:14
think I think if somehow we can turn

00:29:11 --> 00:29:16
more reinforcement learning problems

00:29:13 --> 00:29:19
into self play formulations that would

00:29:15 --> 00:29:22
go real really far so far south play has

00:29:18 --> 00:29:24
been largely around games where there is

00:29:21 --> 00:29:25
natural opponents but if we could do

00:29:23 --> 00:29:27
self play if for other things and let's

00:29:24 --> 00:29:29
ay I don't know a robot learns to build

00:29:26 --> 00:29:31
a house I mean that's a pretty advanced

00:29:28 --> 00:29:32
thing to try to do for a robot but maybe

00:29:30 --> 00:29:35
it tries to build a hut or something if

00:29:31 --> 00:29:36
that can be done through self play it

00:29:34 --> 00:29:37
would learn a lot more quickly if

00:29:35 --> 00:29:39
somebody can figure that out and I think

00:29:36 --> 00:29:41
that would be something where it goes

00:29:38 --> 00:29:43
closer to kind of the mathematical leap

00:29:40 --> 00:29:45
frogging where somebody figures out a

00:29:42 --> 00:29:47
formalism to it's okay

00:29:44 --> 00:29:49
any RL problem by playing this and this

00:29:46 --> 00:29:51
idea you can turn it into a self play

00:29:48 --> 00:29:52
problem where you get signal a lot more

00:29:50 --> 00:29:55
asily

00:29:51 --> 00:29:57
reality is many problems we don't know

00:29:54 --> 00:30:00
how to turn the self lay and so either

00:29:56 --> 00:30:01
we need to provide detailed reward that

00:29:59 --> 00:30:04
doesn't just reward for achieving a goal

00:30:00 --> 00:30:06
but rewards for making progress and that

00:30:03 --> 00:30:07
becomes time-consuming and once you're

00:30:05 --> 00:30:08
starting to do that let's say you want a

00:30:06 --> 00:30:10
robot to do something you need to give

00:30:07 --> 00:30:12
all this detailed reward well why not

00:30:09 --> 00:30:16
just give a demonstration right because

00:30:11 --> 00:30:17
why not just show the robot and now the

00:30:15 --> 00:30:19
question is how do you show the robot

00:30:16 --> 00:30:20
one way to show is to tally operate the

00:30:18 --> 00:30:22
robot and then the robot really

00:30:19 --> 00:30:23
experiences things and that's nice

00:30:21 --> 00:30:25
because that's really high

00:30:22 --> 00:30:26
signal-to-noise ratio data and we've

00:30:24 --> 00:30:29
done a lot of that and you teach your

00:30:25 --> 00:30:30
obot skills in just 10 minutes you can

00:30:28 --> 00:30:32
teach your robot a new basic skill like

00:30:29 --> 00:30:34
okay pick up the bottle place it

00:30:31 --> 00:30:35
somewhere else that's a skill no matter

00:30:33 --> 00:30:37
where the bottle starts maybe it always

00:30:34 --> 00:30:39
goes on to a target or something

00:30:36 --> 00:30:42
that's fairly is a teacher about with

00:30:38 --> 00:30:44
tally up now what's even more

00:30:41 --> 00:30:46
interesting if you can now teach robot

00:30:43 --> 00:30:48
hrough third person learning where the

00:30:45 --> 00:30:50
robot watches you do something and

00:30:47 --> 00:30:52
oesn't experience it but just watches

00:30:49 --> 00:30:54
it and says okay well if you're showing

00:30:51 --> 00:30:55
me that that means I should be doing

00:30:53 --> 00:30:57
this and I'm not gonna be using your

00:30:54 --> 00:30:59
hand because I don't get to control your

00:30:56 --> 00:31:01
hand but I'm gonna use my hand I'd do

00:30:58 --> 00:31:03
that mapping and so that's where I think

00:31:00 --> 00:31:05
one of the big breakthroughs has

00:31:02 --> 00:31:08
happened this year this was led by

00:31:04 --> 00:31:10
Chelsea Finn here it's almost like

00:31:07 --> 00:31:12
machine translation for demonstrations

00:31:09 --> 00:31:15
were you have a human demonstration and

00:31:11 --> 00:31:17
the robot learns to translated into what

00:31:14 --> 00:31:18
it means for the robot to do it and that

00:31:16 --> 00:31:22
was a meta learning for a Malaysian

00:31:17 --> 00:31:23
learn from one to get the other and that

00:31:21 --> 00:31:26
I think opens up a lot of opportunities

00:31:22 --> 00:31:27
to learn a lot more quickly so my focus

00:31:25 --> 00:31:30
is on autonomous vehicles do you think

00:31:26 --> 00:31:32
this approach of third-person watching

00:31:29 --> 00:31:35
is about the autonomous driving is

00:31:31 --> 00:31:40
amenable to this a kind of approach so

00:31:34 --> 00:31:42
for autonomous driving I would say it's

00:31:39 --> 00:31:44
third-person is slightly easier and the

00:31:41 --> 00:31:48
reason I'm gonna say slightly easier to

00:31:43 --> 00:31:51
do a third-person is because the hard

00:31:47 --> 00:31:55
ynamics are very well understood so the

00:31:50 --> 00:31:57
asier than of first-person you mean or

00:31:54 --> 00:31:59
easier so I think the distinction

00:31:56 --> 00:32:01
between third-person and first-person is

00:31:58 --> 00:32:03
not a very important distinction for

00:32:00 --> 00:32:06
autonomous driving they're very similar

00:32:02 --> 00:32:09
because the distinction is really about

00:32:05 --> 00:32:13
who turns the steering wheel and or

00:32:08 --> 00:32:15
maybe I'll let me put it differently how

00:32:12 --> 00:32:17
to get from a point where you are now to

00:32:14 --> 00:32:19
a point let's say a couple meters in

00:32:16 --> 00:32:20
front of you and that's a problem that's

00:32:18 --> 00:32:22
very well understood and that's the only

00:32:19 --> 00:32:23
distinction being third and first-person

00:32:21 --> 00:32:25
there whereas with the robot

00:32:22 --> 00:32:27
manipulation interaction forces are very

00:32:24 --> 00:32:31
complex and it's still a very different

00:32:26 --> 00:32:33
hing for autonomous driving I think

00:32:30 --> 00:32:36
there is still the question imitation

00:32:32 --> 00:32:38
versus RL so imitation gives you a lot

00:32:35 --> 00:32:42
more signal I think where imitation is

00:32:37 --> 00:32:46
lacking and needs some extra machinery

00:32:41 --> 00:32:47
is it doesn't in its normal format

00:32:45 --> 00:32:51
doesn't think about goals or objectives

00:32:46 --> 00:32:52
and of course there are versions of

00:32:50 --> 00:32:54
imitation learning inverse reinforce

00:32:51 --> 00:32:56
learning type imitation which also

00:32:53 --> 00:32:58
thinks about goals I think then we're

00:32:55 --> 00:33:01
getting much closer but I think it's

00:32:57 --> 00:33:05
very hard to think of a fully reactive

00:33:00 --> 00:33:06
car generalizing well if it really

00:33:04 --> 00:33:09
doesn't have a notion of objectives to

00:33:05 --> 00:33:11
generalize well to the kind of general

00:33:08 --> 00:33:13
that you would want you'd want more than

00:33:10 --> 00:33:15
just that reactivity that you get from

00:33:12 --> 00:33:20
just behavioral cloning / supervised

00:33:14 --> 00:33:21
learning so a lot of the work whether

00:33:19 --> 00:33:23
its self play

00:33:20 --> 00:33:25
imitation learning would benefit

00:33:22 --> 00:33:28
significantly from simulation from

00:33:24 --> 00:33:29
effective simulation and you're doing a

00:33:27 --> 00:33:31
lot of stuff in the physical world and

00:33:28 --> 00:33:35
in simulation do you have hope for

00:33:30 --> 00:33:39
greater and greater power of simulation

00:33:34 --> 00:33:41
loop being boundless eventually to where

00:33:38 --> 00:33:43
most of what we need to operate in the

00:33:40 --> 00:33:47
physical world would could be simulated

00:33:42 --> 00:33:49
to a degree that's directly transferable

00:33:46 --> 00:33:57
to the physical world are we still very

00:33:48 --> 00:33:59
far away from that so I think we could

00:33:56 --> 00:34:04
even rephrase that question in some

00:33:58 --> 00:34:07
sense please so the power of simulation

00:34:03 --> 00:34:10
right simulators get better and better

00:34:06 --> 00:34:12
of course become stronger and we can

00:34:09 --> 00:34:13
learn more in simulation but there's

00:34:11 --> 00:34:15
also another version which is where you

00:34:12 --> 00:34:18
said the simulator doesn't even have to

00:34:14 --> 00:34:20
be that precise as long as is somewhat

00:34:17 --> 00:34:22
representative and instead of trying to

00:34:19 --> 00:34:25
get one simulator that is sufficiently

00:34:21 --> 00:34:25
precise to learn in and transfer really

00:34:24 --> 00:34:28
well to the real world

00:34:24 --> 00:34:31
I'm gonna build many simulators ensemble

00:34:27 --> 00:34:33
of simulators ensemble of simulators not

00:34:30 --> 00:34:35
any single one of them is sufficiently

00:34:32 --> 00:34:38
representative of the real world such

00:34:34 --> 00:34:41
that it would work if you train in there

00:34:37 --> 00:34:43
but if you train in all of them then

00:34:40 --> 00:34:46
there is something that's good in all of

00:34:42 --> 00:34:49
them the real world will just be you

00:34:45 --> 00:34:50
know another one that's you know cannot

00:34:48 --> 00:34:52
identical to any one of them but just

00:34:49 --> 00:34:54
another one of them another sample from

00:34:51 --> 00:34:56
the distribution of simulators exact we

00:34:53 --> 00:34:59
do live in a simulation so this is just

00:34:55 --> 00:35:03
like oh one other one I'm not sure about

00:34:58 --> 00:35:05
hat video it's definitely a very

00:35:02 --> 00:35:07
advanced simulator if it is yeah it's

00:35:04 --> 00:35:09
pretty good one I've talked to this to

00:35:06 --> 00:35:11
Russell is something you think about a

00:35:08 --> 00:35:13
little bit too of course you're like

00:35:10 --> 00:35:14
really trying to build these systems but

00:35:12 --> 00:35:16
do you think about the future of AI a

00:35:13 --> 00:35:19
lot of people have concerned about

00:35:15 --> 00:35:21
safety how do you think about AI safety

00:35:18 --> 00:35:23
as you build robots that are operating

00:35:20 --> 00:35:26
in the physical world what what is uh

00:35:22 --> 00:35:27
yeah how do you approach this problem in

00:35:25 --> 00:35:33
an engineering kind of way in a

00:35:26 --> 00:35:33
systematic way so what a robot is doing

00:35:32 --> 00:35:36
things you

00:35:32 --> 00:35:39
kind of have a few notions of safety to

00:35:35 --> 00:35:41
worry about one is that Throwbot is

00:35:38 --> 00:35:44
physically strong and of course could do

00:35:40 --> 00:35:46
a lot of damage same for cars which we

00:35:43 --> 00:35:48
can think of as robots do in some way

00:35:45 --> 00:35:50
and this could be completely

00:35:47 --> 00:35:52
unintentional so it could be not the

00:35:49 --> 00:35:54
kind of long-term AI safety concerns

00:35:51 --> 00:35:56
that okay a is smarter than us and now

00:35:53 --> 00:35:58
hat do we do but it could be just very

00:35:55 --> 00:35:59
practical okay this robot if it makes a

00:35:57 --> 00:36:01
mistake

00:35:58 --> 00:36:03
whether the results going to be of

00:36:00 --> 00:36:07
course simulation comes in a lot there

00:36:02 --> 00:36:09
too to test in simulation it's a

00:36:06 --> 00:36:12
difficult question and I'm always

00:36:08 --> 00:36:13
wondering like I was wondering at let's

00:36:11 --> 00:36:17
go back to drivings a lot of people know

00:36:12 --> 00:36:20
driving well of course what do we do to

00:36:16 --> 00:36:22
test somebody for driving right to get a

00:36:19 --> 00:36:26
driver's license what do they really do

00:36:21 --> 00:36:29
I mean you fill out some test and then

00:36:25 --> 00:36:32
you drive and I mean perfume in suburban

00:36:28 --> 00:36:35
California the driving test is just you

00:36:31 --> 00:36:38
drive around the block pull over you do

00:36:34 --> 00:36:39
a stop sign successfully and then you

00:36:37 --> 00:36:42
know you pull over again and you pretty

00:36:38 --> 00:36:46
much done and you're like okay if a

00:36:41 --> 00:36:48
self-driving car did dad would you trust

00:36:45 --> 00:36:50
it that it can drive and be like no

00:36:47 --> 00:36:52
that's not enough for me to trust but

00:36:49 --> 00:36:54
somehow for humans we've figured out

00:36:51 --> 00:36:57
hat somebody being able to do that it's

00:36:53 --> 00:36:59
representative of them being able to do

00:36:56 --> 00:37:01
a lot of other things and so I think

00:36:58 --> 00:37:04
somehow for you must we figured out

00:37:00 --> 00:37:06
representative tests of what it means if

00:37:03 --> 00:37:08
you can do this what you can really do

00:37:05 --> 00:37:09
f course testing you must you must all

00:37:07 --> 00:37:11
want to be tested at all times

00:37:08 --> 00:37:13
elf-driving cars the robots can be

00:37:10 --> 00:37:14
tested more often probably you can have

00:37:12 --> 00:37:16
replicas that get testament are known to

00:37:13 --> 00:37:19
be identical because they use the same

00:37:15 --> 00:37:21
neural net and so forth but still I feel

00:37:18 --> 00:37:25
ike we don't have this kind of unit

00:37:20 --> 00:37:26
ests or proper tests for for robots and

00:37:24 --> 00:37:27
I think there's something very

00:37:25 --> 00:37:29
interesting to be thought about there

00:37:26 --> 00:37:31
specially as you update things your

00:37:28 --> 00:37:33
software improves you have a better self

00:37:30 --> 00:37:36
driving car suite you updated how do you

00:37:32 --> 00:37:38
know it's indeed more capable on

00:37:35 --> 00:37:41
everything than what you had before that

00:37:37 --> 00:37:43
you didn't have any bad things creep

00:37:40 --> 00:37:44
into it so I think that's a very

00:37:42 --> 00:37:46
interesting direction of research that

00:37:43 --> 00:37:48
here is no real solution yet

00:37:45 --> 00:37:50
except that's somehow for you must we do

00:37:47 --> 00:37:52
because we say okay you have a driving

00:37:49 --> 00:37:55
test you passed you can go on the road

00:37:51 --> 00:37:56
now and you must have accents every like

00:37:54 --> 00:37:59
a million or ten million miles something

00:37:55 --> 00:38:02
pretty phenomenal compared to

00:37:58 --> 00:38:04
that short test yeah that is being done

00:38:01 --> 00:38:06
so let me ask you've mentioned

00:38:03 --> 00:38:09
you mentioned that Andrew Aang by

00:38:05 --> 00:38:14
example showed you the value of kindness

00:38:08 --> 00:38:17
and to do you think the space of

00:38:13 --> 00:38:21
policies good policies for humans and

00:38:16 --> 00:38:26
for AI is populated by policies that

00:38:20 --> 00:38:29
with kindness or ones that are the

00:38:25 --> 00:38:31
opposite exploitation even evil so if

00:38:28 --> 00:38:34
you just look at the sea of policies we

00:38:30 --> 00:38:35
operate under as human beings or if AI

00:38:33 --> 00:38:37
system had to operate in this real world

00:38:34 --> 00:38:40
o you think it's really easy to find

00:38:36 --> 00:38:42
policies that are full of kindness like

00:38:39 --> 00:38:47
we naturally fall into them or is it

00:38:41 --> 00:38:47
like a very hard optimization problem I

00:38:47 --> 00:38:53
mean there is kind of two optimizations

00:38:50 --> 00:38:54
happening for humans right so for you

00:38:52 --> 00:38:57
most was kinda the very long-term

00:38:53 --> 00:38:59
optimization which evolution has done

00:38:56 --> 00:39:02
for us and we're kind of predisposed to

00:38:58 --> 00:39:03
like certain things and that's in

00:39:01 --> 00:39:05
sometimes what makes our learning easier

00:39:02 --> 00:39:09
because I mean we know things like pain

00:39:04 --> 00:39:11
and hunger and thirst and the fact that

00:39:08 --> 00:39:13
we know about those is not something

00:39:10 --> 00:39:14
that we were taught that's kind of

00:39:12 --> 00:39:17
innate when we're hungry were unhappy

00:39:13 --> 00:39:20
when we're thirsty were unhappy when we

00:39:16 --> 00:39:23
have pain we're unhappy and ultimately

00:39:19 --> 00:39:24
evolution built that into us to think

00:39:22 --> 00:39:26
about this thing so so I think there is

00:39:23 --> 00:39:31
a notion that it seems somehow humans

00:39:25 --> 00:39:34
evolved in general to prefer to get

00:39:30 --> 00:39:38
along in some ways but at the same time

00:39:33 --> 00:39:43
also to be very territorial and kind of

00:39:38 --> 00:39:44
centric to their own tribe is it like it

00:39:42 --> 00:39:46
seems like that's the kind of space we

00:39:43 --> 00:39:48
converge down to it I mean I'm not an

00:39:45 --> 00:39:50
expert in anthropology but it seems like

00:39:47 --> 00:39:54
we're very kind of good within our own

00:39:49 --> 00:39:56
tribe but need to be taught but to be

00:39:53 --> 00:39:58
nice to other tribes well if you look at

00:39:55 --> 00:40:00
Steven Pinker he highlights is pretty

00:39:57 --> 00:40:03
nicely in

00:39:59 --> 00:40:05
better better angels of our nature where

00:40:02 --> 00:40:07
he talks about violence decreasing over

00:40:04 --> 00:40:10
time consistently so whatever attention

00:40:06 --> 00:40:12
whatever teams we pick it seems that the

00:40:09 --> 00:40:16
long arc of history goes towards us

00:40:11 --> 00:40:21
getting along more and more so I hope so

00:40:15 --> 00:40:24
do you think that do you think it's

00:40:20 --> 00:40:27
possible to cheat teach RL bass robots

00:40:23 --> 00:40:29
the this kind of kindness this kind of

00:40:26 --> 00:40:32
ability to interact with humans this

00:40:28 --> 00:40:34
kind of policy even - let me ask let me

00:40:31 --> 00:40:36
ask a fun one do you think it's possible

00:40:33 --> 00:40:39
to teach RL based robot to love a human

00:40:35 --> 00:40:43
being and to inspire that human to love

00:40:38 --> 00:40:47
the robot back so - like RL based

00:40:42 --> 00:40:50
algorithm that leads to a happy marriage

00:40:46 --> 00:40:52
that's interesting question maybe I'll

00:40:49 --> 00:40:57
oh I'll answer it with with another

00:40:51 --> 00:40:58
question right I mean it's it but I'll

00:40:56 --> 00:40:59
come back to it so another question you

00:40:57 --> 00:41:02
can have is okay

00:40:58 --> 00:41:06
I mean how close does some people's

00:41:01 --> 00:41:09
happiness get from interacting with just

00:41:05 --> 00:41:11
a really nice dog like I mean dogs you

00:41:08 --> 00:41:14
come home that's what dogs did they

00:41:10 --> 00:41:15
greet you they're excited it makes you

00:41:13 --> 00:41:17
happy when you're coming home to your

00:41:14 --> 00:41:19
dog just like okay this is exciting

00:41:16 --> 00:41:21
they're always happy when I'm here and

00:41:18 --> 00:41:23
if they don't greet you because maybe

00:41:20 --> 00:41:25
whatever your partner took them on a

00:41:22 --> 00:41:26
trip or something you might not be

00:41:24 --> 00:41:30
nearly as happy when you get home right

00:41:25 --> 00:41:32
and so the kind of it seems like the

00:41:29 --> 00:41:33
level of reasoning a dog houses is

00:41:31 --> 00:41:36
pretty sophisticated but then it's still

00:41:32 --> 00:41:38
not yet at the level of human reasoning

00:41:35 --> 00:41:40
and so it seems like we don't even need

00:41:37 --> 00:41:43
to achieve human love reason to get like

00:41:39 --> 00:41:45
very strong affection with humans and so

00:41:42 --> 00:41:47
my thinking is why not right why

00:41:44 --> 00:41:50
couldn't with an AI couldn't we achieve

00:41:46 --> 00:41:54
the kind of level of affection that

00:41:49 --> 00:41:58
humans feel among each other or with

00:41:53 --> 00:42:00
friendly animals and so forth it's a

00:41:57 --> 00:42:02
question is it a good thing for us or

00:41:59 --> 00:42:04
not that misses another going right

00:42:01 --> 00:42:08
because I mean

00:42:03 --> 00:42:10
but I don't see why not why not yeah so

00:42:07 --> 00:42:12
he almost says love was the answer maybe

00:42:09 --> 00:42:17
he should say love is the objective

00:42:11 --> 00:42:19
function and then RL is the answer maybe

00:42:16 --> 00:42:21
I'll Peter thank you so much I don't

00:42:19 --> 00:42:23
want to take up more of your time thank

00:42:20 --> 00:42:25
you so much for talking today well

00:42:22 --> 00:42:27
thanks for coming by great to have you

00:42:24 --> 00:42:27
visit

00:42:32 --> 00:42:35
you

<!-- YOUTUBE_TRANSCRIPT_END -->
