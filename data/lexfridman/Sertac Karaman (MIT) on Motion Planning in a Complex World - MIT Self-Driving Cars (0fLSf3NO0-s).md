---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "0fLSf3NO0-s"
title: "Sertac Karaman (MIT) on Motion Planning in a Complex World - MIT Self-Driving Cars"
video_url: "https://www.youtube.com/watch?v=0fLSf3NO0-s"
thumbnail_url: "https://i.ytimg.com/vi/0fLSf3NO0-s/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=0fLSf3NO0-s"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2017-12-13T02:33:07.000Z"
upload_date: "2017-12-13"
duration_seconds: 3744
duration_human: "1:02:24"
view_count: 43683
like_count: 802
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:21:56.156Z"
---

# Sertac Karaman (MIT) on Motion Planning in a Complex World - MIT Self-Driving Cars

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=0fLSf3NO0-s
- video_id: 0fLSf3NO0-s
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2017-12-13T02:33:07.000Z
- upload_date: 2017-12-13
- duration: 1:02:24
- view_count: 43683
- like_count: 802
- has_subtitle: true
- language: en
- availability: public
- tags: mit, deep learning, self-driving cars, driving
- categories: Science & Technology

## Description

This is a guest talk for course 6.S094: Deep Learning for Self-Driving Cars taught in Winter 2017.

Course website: https://selfdrivingcars.mit.edu
Contact: deepcars@mit.edu

Playlist: https://goo.gl/SLCb1y

Links to individual lecture videos for the course:

Lecture 1: Introduction to Deep Learning and Self-Driving Cars
https://youtu.be/1L0TKZQcUtA

Lecture 2: Deep Reinforcement Learning for Motion Planning
https://youtu.be/QDzM8r3WgBw

Lecture 3: Convolutional Neural Networks for End-to-End Learning of the Driving Task 
https://youtu.be/U1toUkZw6VI

Lecture 4: Recurrent Neural Networks for Steering through Time 
https://youtu.be/nFTQ7kHQWtc

Lecture 5: Deep Learning for Human-Centered Semi-Autonomous Vehicles 
https://youtu.be/ByZF8_-OJNI

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- AI Podcast: https://lexfridman.com/ai/
- Show your support: https://www.patreon.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
first we have shirts and we'll give

00:00:03 --> 00:00:09
those all tomorrow and Friday if you're

00:00:05 --> 00:00:12
here for the shirts if you here for the

00:00:08 --> 00:00:16
knowledge today our speaker is cert at

00:00:11 --> 00:00:19
Carmen he is a professor here at MIT in

00:00:15 --> 00:00:22
the aero-astro department he builds and

00:00:18 --> 00:00:26
studies autonomous vehicles that move on

00:00:21 --> 00:00:29
land and in the air that includes ones

00:00:25 --> 00:00:32
that have 18 wheels and two wheels and

00:00:28 --> 00:00:35
everything in between robots that move

00:00:31 --> 00:00:37
fast and aggressively and robots that

00:00:34 --> 00:00:41
move slowly and safely

00:00:36 --> 00:00:43
he takes both the formal optimization

00:00:40 --> 00:00:46
based approach and the data-driven deep

00:00:42 --> 00:00:49
learning approach to robotics he's a

00:00:45 --> 00:00:53
mentor to me and many other researchers

00:00:48 --> 00:00:55
here at MIT and Beyond and while he is

00:00:52 --> 00:00:59
one of the leading experts in the world

00:00:54 --> 00:01:02
and building autonomous vehicles for the

00:00:58 --> 00:01:04
nerds out there he still programs he

00:01:01 --> 00:01:07
programs on a Kinesis keyboard uses

00:01:03 --> 00:01:12
Emacs which is how you know he's legit

00:01:06 --> 00:01:18
so please thanks please give a warm

00:01:11 --> 00:01:19
welcome to Suresh thank ya thanks a lot

00:01:17 --> 00:01:21
like sight

00:01:18 --> 00:01:23
I really had the pleasure to work with

00:01:20 --> 00:01:27
Lex for some time and it seems like this

00:01:22 --> 00:01:28
class is him and the TAS have put

00:01:26 --> 00:01:31
ogether some amazing class I'm really

00:01:27 --> 00:01:33
happy to be here thank you so much for

00:01:30 --> 00:01:35
joining he gave me this title past

00:01:32 --> 00:01:37
present future of motion planning or

00:01:34 --> 00:01:38
something hopefully that's not quite

00:01:36 --> 00:01:39
xactly what you were expecting so I

00:01:37 --> 00:01:41
took a whole bunch of slides from

00:01:38 --> 00:01:44
different talks and put them together

00:01:40 --> 00:01:46
and I am hoping to just kind of go

00:01:43 --> 00:01:49
through all you know as much as I can

00:01:45 --> 00:01:50
d to tell you some of the interesting

00:01:48 --> 00:01:51
things I think in a domain that's

00:01:49 --> 00:01:54
happening and touch upon motion planning

00:01:51 --> 00:01:57
at some point may be a starting point

00:01:53 --> 00:02:00
would be to tell you a little bit about

00:01:56 --> 00:02:03
my background it is exactly a decade

00:01:59 --> 00:02:04
probably today that I shook John

00:02:02 --> 00:02:06
Boehner's hand who you've met before I

00:02:03 --> 00:02:08
shook John Boehner's hand as a graduate

00:02:05 --> 00:02:10
student and joined the dark urban

00:02:07 --> 00:02:13
challenge team it's been exactly a

00:02:09 --> 00:02:14
decade off of it we worked through it

00:02:12 --> 00:02:17
with a number of people

00:02:13 --> 00:02:20
some of them are in the audience I can

00:02:16 --> 00:02:23
count some and the at the time that we

00:02:19 --> 00:02:24
re doing these kind of things back in

00:02:22 --> 00:02:25
the day it was an academic project you

00:02:23 --> 00:02:28
can look at the DARPA urban challenge

00:02:24 --> 00:02:29
teams and you'll recognize they're all

00:02:27 --> 00:02:32
University teams at least all the

00:02:28 --> 00:02:35
finishers and it came from an academic

00:02:31 --> 00:02:37
project - the thing that's going to

00:02:34 --> 00:02:39
change the world in ten years so I hope

00:02:36 --> 00:02:41
to give you a bit of a history and then

00:02:38 --> 00:02:44
some some thoughts on that as well okay

00:02:41 --> 00:02:46
let me start with my background so I

00:02:43 --> 00:02:48
started graduate school with this we

00:02:45 --> 00:02:50
built these beasts that I'm going to

00:02:47 --> 00:02:52
talk to you about a little bit I wonder

00:02:49 --> 00:02:53
if John there talked at all but I'll

00:02:51 --> 00:02:55
give you some details

00:02:52 --> 00:02:58
this was our entry to the DARPA urban

00:02:54 --> 00:03:00
challenge I was a Land Rover lr3 that we

00:02:57 --> 00:03:01
made autonomous that navigated through

00:02:59 --> 00:03:04
that course and it was one of the six

00:03:00 --> 00:03:05
finishers a number of my friends you

00:03:03 --> 00:03:07
know went out and they did their own

00:03:04 --> 00:03:09
careers with a number of others we

00:03:06 --> 00:03:11
stayed here at MIT we built a number of

00:03:08 --> 00:03:15
other autonomous vehicles let me show

00:03:10 --> 00:03:17
you one thing that we have done that I

00:03:14 --> 00:03:19
was kind of doing that I was the motion

00:03:16 --> 00:03:21
planning lead for was this autonomous

00:03:18 --> 00:03:22
forklift it was a forklift that you

00:03:20 --> 00:03:24
could literally take a megaphone and

00:03:21 --> 00:03:26
speak to you could say forklift go to X

00:03:24 --> 00:03:28
Y Z and it would go to that location

00:03:25 --> 00:03:29
here is trying to go to receiving which

00:03:27 --> 00:03:31
appens to be an area where trucks pull

00:03:28 --> 00:03:33
up with pallets on it so that you can

00:03:30 --> 00:03:35
kind of pick this pallets up and and you

00:03:32 --> 00:03:36
can put a mouse back so it's going to go

00:03:34 --> 00:03:38
there it has a front camera it looks

00:03:35 --> 00:03:41
through that camera it beams that camera

00:03:37 --> 00:03:43
image to a handheld tablet device made

00:03:40 --> 00:03:45
by Nokia back in the day there was a

00:03:42 --> 00:03:47
company called Nokia they would make

00:03:44 --> 00:03:48
these phones and handheld devices so you

00:03:46 --> 00:03:50
could see what it's seeing you would

00:03:47 --> 00:03:53
circle so you didn't have tapping back

00:03:49 --> 00:03:54
then but you kept these pan gestures you

00:03:52 --> 00:03:57
could circle something and the thing

00:03:53 --> 00:04:02
would scan it and take a look at it you

00:03:56 --> 00:04:03
could so you know we don't let me just

00:04:01 --> 00:04:05
kind of go through this because it's

00:04:02 --> 00:04:07
kind of a bit slow so it'll scan through

00:04:04 --> 00:04:08
the pallet it'll pick it up but one

00:04:06 --> 00:04:11
thing I would like to show you guys is

00:04:07 --> 00:04:13
that once that's done you can you can

00:04:10 --> 00:04:15
also talk to a tablet the tablet would

00:04:12 --> 00:04:17
recognize your voice and then it would

00:04:14 --> 00:04:20
command the robot to do that kind of

00:04:16 --> 00:04:22
thing this was before autonomous cars

00:04:19 --> 00:04:26
before iPhone before

00:04:21 --> 00:04:28
Alexa before Siri and things like that

00:04:25 --> 00:04:30
so I spent like a couple years kind of

00:04:27 --> 00:04:33
doing this type of project that really

00:04:29 --> 00:04:34
shaped up my PhD thesis and later when I

00:04:32 --> 00:04:36
started as a faculty I also worked on a

00:04:33 --> 00:04:38
number of things so let me show you one

00:04:35 --> 00:04:41
we built like autonomous golf carts and

00:04:37 --> 00:04:44
in Singapore's and US National

00:04:40 --> 00:04:45
University Singapore campuses to go

00:04:43 --> 00:04:48
there and do mobility on demand and so

00:04:44 --> 00:04:50
n the one thing that I ended up doing

00:04:47 --> 00:04:52
there was throughout these projects I

00:04:49 --> 00:04:54
focus mainly on motion planning that you

00:04:51 --> 00:04:56
are expecting the one algorithm that I

00:04:53 --> 00:04:58
was working on was called rapidly

00:04:55 --> 00:05:00
exploring random tree the idea is quite

00:04:57 --> 00:05:03
simple so you're starting in the middle

00:04:59 --> 00:05:06
of off so this is the area that you're

00:05:02 --> 00:05:07
looking at there's that orange dot that

00:05:05 --> 00:05:10
you're starting from you want to go to

00:05:06 --> 00:05:12
the magenta goal region there's this red

00:05:09 --> 00:05:14
obstacles you want to find a path that

00:05:11 --> 00:05:16
starts from the initial condition goes

00:05:13 --> 00:05:17
to the goal that's the very basic motion

00:05:15 --> 00:05:18
planning problem

00:05:16 --> 00:05:19
turns out this problem is

00:05:17 --> 00:05:21
computationally pretty challenging

00:05:18 --> 00:05:23
especially as the number of dimensions

00:05:20 --> 00:05:25
of this province is two-dimensional but

00:05:22 --> 00:05:26
if you increase the number of dimensions

00:05:24 --> 00:05:28
you can prove that any complete

00:05:25 --> 00:05:30
algorithm meaning any algum that we

00:05:27 --> 00:05:33
towards a solution lamina exists and

00:05:29 --> 00:05:35
returns fail or otherwise will scale

00:05:32 --> 00:05:36
xponential it's computation time so at

00:05:34 --> 00:05:39
some point you're going to run out of

00:05:35 --> 00:05:40
memory or time to do these things the

00:05:38 --> 00:05:42
album that I was working on was called

00:05:39 --> 00:05:44
rapidly exploring random 3 the idea is

00:05:41 --> 00:05:46
imple you just land on a bunch of

00:05:43 --> 00:05:48
samples every time you put like a random

00:05:45 --> 00:05:50
sample you connect it to it the nearest

00:05:48 --> 00:05:52
node in a tree of trajectories that

00:05:49 --> 00:05:54
you're building and in this way you sort

00:05:51 --> 00:05:56
of rapidly explore the state space to

00:05:53 --> 00:05:58
find a whole bunch of paths some of

00:05:55 --> 00:05:59
these paths may reach the ball so those

00:05:57 --> 00:06:00
that's the path that you pick so it's

00:05:58 --> 00:06:03
going to run in a second

00:05:59 --> 00:06:05
as you can see it's just sampling the

00:06:02 --> 00:06:06
nvironment trying to build this set of

00:06:04 --> 00:06:08
trajectories that don't collide the

00:06:05 --> 00:06:10
obstacles if your trajectory Kleist but

00:06:07 --> 00:06:11
an obstacle you just kind of delete it

00:06:09 --> 00:06:13
and you move on with other samples and

00:06:10 --> 00:06:15
then you would build this kind of a tree

00:06:12 --> 00:06:17
ok it's an algorithm that's kind of

00:06:14 --> 00:06:19
pretty widely used and and it goes well

00:06:16 --> 00:06:22
beyond these kind of simple cases for

00:06:18 --> 00:06:25
example in our urban challenge kind of

00:06:21 --> 00:06:26
entry we were using this algorithm so

00:06:24 --> 00:06:28
here you're seeing the algorithm in

00:06:25 --> 00:06:32
action so we're trying to park at a

00:06:27 --> 00:06:34
location during what DARPA call the

00:06:31 --> 00:06:36
nqueue event so you can see a whole

00:06:33 --> 00:06:37
bunch of cars that our vehicle is seeing

00:06:35 --> 00:06:39
enerating this map

00:06:36 --> 00:06:42
read our obstacles black is a drivable

00:06:38 --> 00:06:44
region it's going to try to park into it

00:06:41 --> 00:06:46
and then it's going to unpark you're

00:06:43 --> 00:06:48
seeing something hairy here so that's a

00:06:45 --> 00:06:51
set of trajectories that are generated

00:06:47 --> 00:06:52
by the robot by the RT algorithm so it's

00:06:50 --> 00:06:54
trying to unpark now go there so as you

00:06:51 --> 00:06:57
can see that trajectories are going back

00:06:53 --> 00:06:59
and then going towards that obstacles

00:06:56 --> 00:07:01
it's generating trajectory is picking

00:06:58 --> 00:07:03
the best one so we've used the solder

00:07:00 --> 00:07:05
and throughout the race it worked okay

00:07:02 --> 00:07:08
so you can see the performance as it's

00:07:04 --> 00:07:09
running so this is a media that video

00:07:07 --> 00:07:12
that's made about 30 times faster kind

00:07:08 --> 00:07:14
of showing you how the thing works when

00:07:11 --> 00:07:17
we switch to the forklift kind of

00:07:13 --> 00:07:20
algorithm forklift platform I started

00:07:16 --> 00:07:22
working on this and the one thing that

00:07:19 --> 00:07:24
we realized is that you know the the

00:07:21 --> 00:07:26
forklift tries to go here to park in

00:07:23 --> 00:07:28
front our truck and it finds this

00:07:25 --> 00:07:29
trajectory at some point it discovers

00:07:27 --> 00:07:31
there's an obstacle here and it finds

00:07:28 --> 00:07:34
this looping trajectory and and it never

00:07:30 --> 00:07:35
gets out of that loop you would think

00:07:33 --> 00:07:36
that it's trying to minimize the path

00:07:34 --> 00:07:38
length so you would think that it would

00:07:35 --> 00:07:40
be easier to come up with something that

00:07:37 --> 00:07:42
just kind of turns left and aligns but

00:07:39 --> 00:07:44
it turns out that once you have that

00:07:41 --> 00:07:46
loop even if you add more samples to it

00:07:43 --> 00:07:48
you're stuck with that loop and so you

00:07:45 --> 00:07:52
would never improve this type of

00:07:47 --> 00:07:54
trajectory so back in the day professor

00:07:51 --> 00:07:55
said teller who passed away

00:07:53 --> 00:07:57
unfortunately a couple of years ago but

00:07:54 --> 00:07:59
he really pushed me he was telling me

00:07:56 --> 00:08:00
this doesn't work and every time it just

00:07:58 --> 00:08:03
makes this loop right in front of the

00:08:00 --> 00:08:04
army generals who are the sponsor and it

00:08:02 --> 00:08:06
just looks ridiculous you need to fix

00:08:03 --> 00:08:08
this kind of thing and try and find the

00:08:05 --> 00:08:09
fix for it we realized that the

00:08:07 --> 00:08:11
algorithm actually has some fundamental

00:08:08 --> 00:08:13
flaws in it

00:08:10 --> 00:08:15
so specifically we were able to kind of

00:08:12 --> 00:08:17
write down a formal proof that the rrt

00:08:14 --> 00:08:18
algorithm actually fails to converge the

00:08:16 --> 00:08:20
optimal solutions is this kind of

00:08:17 --> 00:08:22
something interesting so you would think

00:08:19 --> 00:08:24
that if you add more samples you will

00:08:21 --> 00:08:26
get better and better trajectories but

00:08:23 --> 00:08:28
it turns out that the first few

00:08:25 --> 00:08:31
trajectories that you found it just

00:08:27 --> 00:08:33
constrains you so it closes the the

00:08:30 --> 00:08:35
space that you want to search and you're

00:08:32 --> 00:08:37
stuck with bad trajectories and this

00:08:34 --> 00:08:39
almost always happens sometimes you're

00:08:36 --> 00:08:41
lucky your bad trajectory is kind of

00:08:38 --> 00:08:43
good enough but most of the time it's

00:08:40 --> 00:08:45
pretty bad we were able to come up with

00:08:42 --> 00:08:47
another album that we called our arty

00:08:44 --> 00:08:50
star which just does a little bit more

00:08:46 --> 00:08:51
work but guarantees asymptotic

00:08:49 --> 00:08:53
optimality meaning

00:08:50 --> 00:08:55
it will always converge to optimum

00:08:52 --> 00:08:56
solutions and the difference

00:08:54 --> 00:08:58
computational difference between the two

00:08:55 --> 00:09:01
is very little if you were to run them

00:08:57 --> 00:09:03
side by side our artists our tree would

00:09:00 --> 00:09:05
look like this what it's doing is it's

00:09:02 --> 00:09:06
just looking at the pads locally

00:09:04 --> 00:09:08
and it's just kind of correcting I'm

00:09:05 --> 00:09:11
locally just a little bit and that

00:09:07 --> 00:09:13
little bit correction is enough to

00:09:10 --> 00:09:15
converge to below the optimal trajectory

00:09:12 --> 00:09:17
so that turned out to be my doctoral

00:09:14 --> 00:09:19
thesis back in 2011 and we applied to a

00:09:16 --> 00:09:22
number of things let me show you one

00:09:18 --> 00:09:24
simulation scenario imagine a race car

00:09:21 --> 00:09:26
coming into like a turn we also turn

00:09:23 --> 00:09:28
very quickly generates these

00:09:25 --> 00:09:30
trajectories so the right thing to do is

00:09:27 --> 00:09:32
to kind of slow down a little bit start

00:09:29 --> 00:09:34
skinning hit one end of the road now

00:09:31 --> 00:09:36
start speeding up and go as fast as

00:09:33 --> 00:09:38
possible so that you hit the other end

00:09:35 --> 00:09:39
the road and you complete the turn these

00:09:37 --> 00:09:42
kind of things would come out just

00:09:38 --> 00:09:44
naturally from the algorithm okay you

00:09:41 --> 00:09:45
don't have to program you have to do

00:09:43 --> 00:09:47
these kind of things but you just run

00:09:44 --> 00:09:49
the algorithm and these are that this is

00:09:46 --> 00:09:51
the best rejected finds it would be it'd

00:09:48 --> 00:09:54
be impossible to get something like this

00:09:50 --> 00:09:57
from an IRT we applied at a number of

00:09:53 --> 00:10:00
other robots as well I don't know like

00:09:56 --> 00:10:02
PR to type robots or this autonomous

00:09:59 --> 00:10:05
forklifts and got good results out of it

00:10:01 --> 00:10:07
so that kind of maybe gives you a bit of

00:10:04 --> 00:10:09
an idea of my background meaning like my

00:10:06 --> 00:10:11
graduate school experience a little bit

00:10:08 --> 00:10:14
and the PhD let me kind of tell you a

00:10:10 --> 00:10:18
bit quickly what my research group does

00:10:13 --> 00:10:20
o I always say sort of so we do a lot

00:10:17 --> 00:10:22
of things in a fortunate and unfortunate

00:10:19 --> 00:10:25
way so it's hard to find the focus

00:10:21 --> 00:10:26
ometimes admittedly but I usually tell

00:10:24 --> 00:10:28
people that we work on autonomous

00:10:25 --> 00:10:30
vehicles the problem is quite

00:10:27 --> 00:10:31
interesting both at the vehicle level

00:10:29 --> 00:10:33
meaning how are you going to build these

00:10:30 --> 00:10:35
autonomous vehicles individually and

00:10:32 --> 00:10:36
also interesting other systems that when

00:10:34 --> 00:10:38
you think about it most of the

00:10:36 --> 00:10:40
autonomous vehicle is most valuable if

00:10:37 --> 00:10:43
you put them into a system that they can

00:10:39 --> 00:10:45
work let me give you some examples so a

00:10:42 --> 00:10:46
system the autonomous vehicles would be

00:10:44 --> 00:10:48
for example this Kibo system scenario

00:10:45 --> 00:10:51
you know nowadays you buy something from

00:10:47 --> 00:10:53
Amazon the way it's you'd buy two books

00:10:50 --> 00:10:55
the way it's packed is that books are

00:10:52 --> 00:10:56
brought by robots to a picker and the

00:10:54 --> 00:10:58
picker just puts them into the same box

00:10:55 --> 00:11:00
and sends it to you so this is done by

00:10:57 --> 00:11:02
500 autonomous vehicles for example

00:10:59 --> 00:11:04
there would be a good example of a

00:11:01 --> 00:11:05
system another one is that there

00:11:03 --> 00:11:07
ports are on Dyer in the world you know

00:11:05 --> 00:11:09
that are working just completely with

00:11:06 --> 00:11:11
autonomous vehicles and cranes if you

00:11:08 --> 00:11:13
project a little bit forward you can

00:11:10 --> 00:11:15
think maybe you know you can have drawn

00:11:12 --> 00:11:17
delivery systems and and they maybe

00:11:14 --> 00:11:18
don't have enough battery so they have

00:11:16 --> 00:11:20
to relay packages to one another so you

00:11:17 --> 00:11:22
need to build a system or some vehicles

00:11:19 --> 00:11:25
or if you have I don't know like

00:11:21 --> 00:11:27
autonomous cars maybe it's best to use

00:11:24 --> 00:11:29
them in like an uber like scenario so

00:11:26 --> 00:11:32
you can autonomous taxis that they can

00:11:28 --> 00:11:34
work together and such so let me tell

00:11:31 --> 00:11:35
you a bit more on the vehicle level

00:11:33 --> 00:11:37
problems and the system level problems

00:11:34 --> 00:11:39
ome of the crazy things that we try to

00:11:36 --> 00:11:40
do on the vehicle level we're interested

00:11:38 --> 00:11:43
in all aspects about perception and

00:11:39 --> 00:11:45
planning usually challenges are sort of

00:11:42 --> 00:11:47
either complexity or either

00:11:44 --> 00:11:49
computational complexity so you it's

00:11:46 --> 00:11:52
very hard just computationally so you

00:11:48 --> 00:11:53
really need to know or it's just the

00:11:51 --> 00:11:55
system becomes very complex so we need

00:11:52 --> 00:11:57
to figure that out

00:11:54 --> 00:11:59
we're for example recently motivated by

00:11:56 --> 00:12:01
really fast and agile kind of vehicles

00:11:58 --> 00:12:03
how we can build that like one thing

00:12:00 --> 00:12:05
that we were motivated for example is

00:12:02 --> 00:12:09
ort of like imagine there's a drone

00:12:04 --> 00:12:10
flying and you want to you want to catch

00:12:08 --> 00:12:15
it in the fly I wonder if this is gonna

00:12:09 --> 00:12:16
play so you know turns out that

00:12:14 --> 00:12:19
Netherlands police is some people fly

00:12:15 --> 00:12:19
UAVs around and you somehow want to take

00:12:18 --> 00:12:22
it down

00:12:18 --> 00:12:24
it's not like you can shoot at it so

00:12:21 --> 00:12:25
people train Eagles and things like that

00:12:23 --> 00:12:26
so we thought it would be great to

00:12:24 --> 00:12:30
actually build these types of robots

00:12:25 --> 00:12:32
that we try to in our group so you can

00:12:29 --> 00:12:34
once you start to do these kind of

00:12:31 --> 00:12:36
things you wonder like how much I can

00:12:33 --> 00:12:39
push the boundaries of very very agile

00:12:35 --> 00:12:42
vehicles and systems so here you're

00:12:38 --> 00:12:45
going to see a falcon diving for a prey

00:12:41 --> 00:12:47
ou're going to see a goose right at the

00:12:44 --> 00:12:49
last like a split-second so if you look

00:12:46 --> 00:12:50
at the scene from a 20 Hertz camera this

00:12:48 --> 00:12:52
what you would see so they are

00:12:49 --> 00:12:54
definitely much faster they do very

00:12:51 --> 00:12:56
complicated you know planning and

00:12:53 --> 00:12:58
maneuvering to be able to do these kind

00:12:55 --> 00:12:59
of things so you know in the research

00:12:57 --> 00:13:01
group we look at a number of different

00:12:58 --> 00:13:02
perception problems where you're

00:13:00 --> 00:13:04
multi-agency have ultra high rate

00:13:01 --> 00:13:08
cameras like for example we have drones

00:13:03 --> 00:13:10
with 200 Hertz cameras on and so you're

00:13:07 --> 00:13:12
trying to understand the person that

00:13:09 --> 00:13:14
you're tracking its dynamics its

00:13:11 --> 00:13:16
intentions on the control level you're

00:13:13 --> 00:13:17
trying to pull off really complicated

00:13:15 --> 00:13:19
maneuvers like the one that you've seen

00:13:17 --> 00:13:21
the race car now you want to do it in

00:13:18 --> 00:13:23
real time at like a kilohertz probably

00:13:20 --> 00:13:26
so how can you do these types of things

00:13:22 --> 00:13:28
we use a lot high-performance computing

00:13:25 --> 00:13:30
so for example the drones that we have

00:13:27 --> 00:13:33
actually have GPUs on them they fly GPUs

00:13:29 --> 00:13:34
they fly like teraflop computers to be

00:13:32 --> 00:13:36
able to do these kind of things we also

00:13:33 --> 00:13:38
use them offline like the deep learning

00:13:35 --> 00:13:40
computers that you would use normally

00:13:37 --> 00:13:42
ou have access to things like DG x1 and

00:13:39 --> 00:13:46
so on that we use that to compute

00:13:41 --> 00:13:48
controllers for example here's an

00:13:45 --> 00:13:49
example of I don't know like one GPU

00:13:47 --> 00:13:51
drawn just kind of passing through a

00:13:48 --> 00:13:53
window this is from a long time ago but

00:13:50 --> 00:13:55
hese are the controllers that we would

00:13:52 --> 00:13:57
compute on supercomputers and we would

00:13:54 --> 00:13:59
eploy and on the perception side for

00:13:56 --> 00:14:01
example we're looking at things where

00:13:58 --> 00:14:03
like you can use visual Arama tree you

00:14:00 --> 00:14:04
can just have a camera and just look

00:14:02 --> 00:14:06
through the world from the camera and

00:14:03 --> 00:14:08
try to understand your own position so

00:14:05 --> 00:14:09
we have certain algorithms to pick the

00:14:07 --> 00:14:11
features just right so that you can do

00:14:08 --> 00:14:12
these things with just like 10 features

00:14:10 --> 00:14:13
or something like that

00:14:11 --> 00:14:16
so they're just computationally very

00:14:12 --> 00:14:18
efficient on the system's aspects of

00:14:15 --> 00:14:30
things and when you put them together

00:14:17 --> 00:14:32
yeah so this is maybe kind of yeah so

00:14:29 --> 00:14:33
the question was what do you mean by

00:14:31 --> 00:14:36
sort of computing the controllers would

00:14:32 --> 00:14:37
you want to find the best constants so

00:14:35 --> 00:14:40
controllers are actually pretty

00:14:36 --> 00:14:42
complicated objects so you have a drone

00:14:39 --> 00:14:43
it has suppose it has 16 there's

00:14:41 --> 00:14:45
actually 12 degrees of freedom but

00:14:42 --> 00:14:48
suppose there's six degrees of freedom

00:14:44 --> 00:14:50
it's a six dimensional space six

00:14:47 --> 00:14:53
dimensional space is very very large

00:14:49 --> 00:14:55
suppose you discretize every dimension

00:14:52 --> 00:14:59
with 200 points so six dimensional

00:14:54 --> 00:15:02
position and orientation 200 points 200

00:14:58 --> 00:15:04
to the six would be thousands of

00:15:01 --> 00:15:06
trillions if you were to write one byte

00:15:03 --> 00:15:08
for every point in the States are you

00:15:05 --> 00:15:09
looking at the state space where every

00:15:07 --> 00:15:11
point in the state space what's the

00:15:08 --> 00:15:13
action that I'm going to do if I end up

00:15:10 --> 00:15:15
at that position and orientation what

00:15:12 --> 00:15:17
action should I do if you use one byte

00:15:14 --> 00:15:21
to write it in the memory it would make

00:15:16 --> 00:15:24
2.5 petabytes of this controller it's

00:15:20 --> 00:15:26
pretty large when you think about it you

00:15:23 --> 00:15:28
don't really need it would be very

00:15:25 --> 00:15:30
surprising if that menu were really to

00:15:27 --> 00:15:31
be able to describe it like an

00:15:29 --> 00:15:33
information theoretic terms to be able

00:15:30 --> 00:15:35
describe it it'd be very surprising if

00:15:32 --> 00:15:36
it requires thousands of trillions of

00:15:34 --> 00:15:39
parameters I mean how complicated is it

00:15:35 --> 00:15:43
really so millions maybe but trillions

00:15:38 --> 00:15:44
eriously so what we do is to be able to

00:15:42 --> 00:15:47
compute these things we take very simple

00:15:43 --> 00:15:49
controllers like for example zero don't

00:15:46 --> 00:15:51
do anything we compress them like isn't

00:15:48 --> 00:15:53
data compression and then we work on the

00:15:50 --> 00:15:55
compressed versions and then that

00:15:52 --> 00:15:59
compressed version grows at to a level

00:15:54 --> 00:15:59
that comes down to something like two

00:15:58 --> 00:16:02
megabytes

00:15:58 --> 00:16:04
that's probably essentially what you

00:16:01 --> 00:16:07
would need rather than three terabytes

00:16:03 --> 00:16:09
for example we use kind of you know

00:16:06 --> 00:16:11
singular value decomposition type

00:16:08 --> 00:16:12
techniques to do compression you may

00:16:10 --> 00:16:15
have done the same thing using images

00:16:11 --> 00:16:18
for example if you compress an image

00:16:14 --> 00:16:20
JPEG you save an order-of-magnitude no

00:16:17 --> 00:16:22
surprise right if you compress video you

00:16:19 --> 00:16:24
save to three orders of magnitude

00:16:21 --> 00:16:26
because video is three-dimensional as

00:16:23 --> 00:16:29
you increase the dimensions there's more

00:16:25 --> 00:16:31
to compress so when you compress this

00:16:28 --> 00:16:32
way this saves ten orders of magnitude

00:16:30 --> 00:16:34
which honestly is no surprise when you

00:16:31 --> 00:16:36
think about a delivery so those are the

00:16:33 --> 00:16:38
control like the planning and control

00:16:35 --> 00:16:40
items that we use these viral

00:16:37 --> 00:16:42
supercomputers stole so we compute them

00:16:39 --> 00:16:45
in I don't know five minutes that gives

00:16:41 --> 00:16:46
you a lookup table that's two megabytes

00:16:44 --> 00:16:48
you put in so that you can quickly

00:16:45 --> 00:16:50
execute it then look up tables

00:16:47 --> 00:16:51
sentially do you want to kilo Hertz

00:16:49 --> 00:16:56
control you won't be able to compute a

00:16:50 --> 00:16:57
trajectory of technique okay that

00:16:55 --> 00:17:00
question came in and that's the whole

00:16:56 --> 00:17:01
talk in terms of present of motion

00:16:59 --> 00:17:04
planning and I can show you some other

00:17:00 --> 00:17:06
stuff and there's a lot to do especially

00:17:03 --> 00:17:07
in terms of agility on the systems

00:17:05 --> 00:17:09
domain as well like I don't know I

00:17:06 --> 00:17:10
pulled up this is not the kind of stuff

00:17:08 --> 00:17:12
that only stuff that we do but I pulled

00:17:09 --> 00:17:14
up the most interesting thing I think

00:17:11 --> 00:17:16
maybe the most crazy thing off of my

00:17:13 --> 00:17:17
hard disk imagine you have a whole bunch

00:17:15 --> 00:17:20
of vehicles coming to an intersection

00:17:16 --> 00:17:22
suppose they're fully autonomous how

00:17:19 --> 00:17:24
ould you make it so that they would

00:17:21 --> 00:17:26
pass through the intersection as fast as

00:17:23 --> 00:17:28
possible okay so if you were to really

00:17:25 --> 00:17:30
utilize algorithms that will do that

00:17:27 --> 00:17:32
here is what I would look like so you

00:17:29 --> 00:17:35
would have vehicles coming in and you

00:17:31 --> 00:17:36
could it looks like so you probably

00:17:34 --> 00:17:39
don't want to sit in this vehicle just

00:17:35 --> 00:17:40
sort of like just to understand the

00:17:38 --> 00:17:42
fundamental limit sort of situation just

00:17:39 --> 00:17:44
o understand how far you can push these

00:17:41 --> 00:17:45
things you can see

00:17:43 --> 00:17:47
looks like they're getting very lucky

00:17:44 --> 00:17:49
but really what's happening is that

00:17:46 --> 00:17:50
hey're just speeding and slowing down

00:17:48 --> 00:17:53
just so little so that they could avoid

00:17:49 --> 00:17:55
one another so you can actually sit down

00:17:52 --> 00:17:56
and do some math and try to understand

00:17:54 --> 00:17:59
you know given the dynamics like your

00:17:55 --> 00:18:01
acceleration deceleration limits how

00:17:58 --> 00:18:02
fast you can push these things maybe it

00:18:00 --> 00:18:04
doesn't immediately apply to

00:18:01 --> 00:18:06
self-driving cars but certainly you can

00:18:03 --> 00:18:07
use it in their houses and things like

00:18:05 --> 00:18:09
that which would actually improve

00:18:06 --> 00:18:11
operations quite a bit I wonder if any

00:18:08 --> 00:18:12
of you have seen kiba systems where

00:18:10 --> 00:18:16
houses you look at it most of the robots

00:18:11 --> 00:18:16
are stopped they're just sitting there

00:18:31 --> 00:18:37
yes so the question is is there anyone

00:18:34 --> 00:18:39
sort of working on robustness aspects of

00:18:36 --> 00:18:41
distributed control so that's a good

00:18:38 --> 00:18:43
point it's it's very right we have

00:18:40 --> 00:18:44
looked at things like from the

00:18:42 --> 00:18:47
oretical perspective it turns out

00:18:43 --> 00:18:49
hat like even in this case there's

00:18:46 --> 00:18:51
omething like a critical density of

00:18:48 --> 00:18:54
these things so below the critical

00:18:50 --> 00:18:55
density things are very simple you're

00:18:53 --> 00:18:57
going to be robust you're going to be

00:18:54 --> 00:18:59
able to find Pat's and you're going to

00:18:56 --> 00:19:01
be able to execute above the critical

00:18:58 --> 00:19:02
density things are very hard it's very

00:19:00 --> 00:19:05
fairchild like if something fails just

00:19:01 --> 00:19:08
kind of the whole system will crash into

00:19:04 --> 00:19:10
ne another and this is no surprise

00:19:07 --> 00:19:12
ither like this is kind of the physics

00:19:09 --> 00:19:14
of many you know just like you see it

00:19:11 --> 00:19:16
everywhere I mean it's the same thing as

00:19:13 --> 00:19:18
I don't know you heat this thing there's

00:19:15 --> 00:19:21
the critical temperature above it it

00:19:17 --> 00:19:24
looks different below it it looks like a

00:19:20 --> 00:19:26
liquid you can use the same kind of

00:19:23 --> 00:19:27
thinking or theoretical arguments to

00:19:25 --> 00:19:29
come up with these types of things and I

00:19:26 --> 00:19:31
know that a lot of people work on

00:19:28 --> 00:19:34
specific controllers for vehicle level

00:19:30 --> 00:19:36
to guarantee robustness and so on

00:19:33 --> 00:19:38
probably those are the kind of things

00:19:35 --> 00:19:42
that one needs to do before implementing

00:19:37 --> 00:19:44
these types of algorithms sort of like

00:19:41 --> 00:19:48
in the current existing like multi

00:19:43 --> 00:19:50
vehicle setups like Kiva systems or

00:19:47 --> 00:19:52
ports and things like that we are far

00:19:49 --> 00:19:55
away from this kind of thing

00:19:51 --> 00:19:57
the main problem some of it is control

00:19:54 --> 00:19:58
ike we don't understand the control

00:19:56 --> 00:20:00
aspects but we also don't trust our

00:19:57 --> 00:20:01
sensors and things like that so that's

00:19:59 --> 00:20:03
another big problem

00:20:00 --> 00:20:05
so probably the more of the research is

00:20:02 --> 00:20:16
only not research for implementations on

00:20:04 --> 00:20:18
the sensor side I'd say okay so yeah so

00:20:15 --> 00:20:20
we have been doing a number of other

00:20:17 --> 00:20:22
projects currently as well on autonomous

00:20:19 --> 00:20:24
vehicles if you're interested in any one

00:20:21 --> 00:20:26
of them let me know I'm not gonna show

00:20:23 --> 00:20:28
you videos but let me just kind of tell

00:20:25 --> 00:20:30
you with one slide and a few pictures

00:20:27 --> 00:20:32
this was several slides but I felt

00:20:29 --> 00:20:34
really bad so um so we have an

00:20:31 --> 00:20:37
autonomous tricycle that may sound funny

00:20:33 --> 00:20:38
but it's actually pretty hard to test

00:20:36 --> 00:20:40
with autonomous vehicles

00:20:37 --> 00:20:43
o we currently have five of these and

00:20:39 --> 00:20:45
we're hoping to build 30 so that we can

00:20:42 --> 00:20:47
put them in and they're currently in a

00:20:44 --> 00:20:48
little robotic enclosed area and Taiwan

00:20:46 --> 00:20:51
d they're just driving around

00:20:47 --> 00:20:52
collecting data so that we can for

00:20:50 --> 00:20:57
example you can pay them into deep

00:20:51 --> 00:20:59
learning algorithms we also have in a B

00:20:56 --> 00:21:02
eyes warehouses we have these we have

00:20:58 --> 00:21:04
one of these robots it's a very house

00:21:01 --> 00:21:05
robot and supposed to be kind of like

00:21:03 --> 00:21:07
you know I'm sure you know what we think

00:21:04 --> 00:21:09
robotics like they make this robot on

00:21:06 --> 00:21:11
it's supposed to be very easy you can

00:21:08 --> 00:21:13
interact with so imagine a warehouse

00:21:10 --> 00:21:14
robot that way you can just talk to it

00:21:12 --> 00:21:16
you can tell it's tough to do when it

00:21:14 --> 00:21:18
can do that you can show it you can hop

00:21:15 --> 00:21:22
on it you can do it yourself type of

00:21:17 --> 00:21:26
thing I am also a epi together with sort

00:21:21 --> 00:21:29
of I'm working with Daniella ruse on mi

00:21:25 --> 00:21:32
t--'s effort with Stanford and Toyota to

00:21:28 --> 00:21:35
build safer vehicles and finally I'm

00:21:31 --> 00:21:37
still API on the MIT Singapore

00:21:34 --> 00:21:39
partnership right now from golf carts

00:21:36 --> 00:21:42
we've moved into doing these electric

00:21:38 --> 00:21:44
vehicles and and we're working on

00:21:41 --> 00:21:47
basically integrating a lot of electric

00:21:43 --> 00:21:49
vehicles together to make them kind of

00:21:46 --> 00:21:52
work nicer we've also kind of not

00:21:48 --> 00:21:54
looking into an autonomous kind of

00:21:51 --> 00:21:56
wheelchair that's also in that project

00:21:53 --> 00:21:57
hat I didn't show him so my group works

00:21:55 --> 00:22:00
on like a number of other projects in

00:21:56 --> 00:22:02
this domain admittedly my group is a bit

00:21:59 --> 00:22:04
more on the theory side as well so maybe

00:22:01 --> 00:22:06
like half the group is a bit your theory

00:22:03 --> 00:22:09
oriented the other half is more

00:22:05 --> 00:22:11
xperimental I usually say we have quite

00:22:08 --> 00:22:13
a spectrum in the group so we would have

00:22:10 --> 00:22:15
mathematicians like I would have people

00:22:12 --> 00:22:17
who don't have any engineering degrees

00:22:14 --> 00:22:20
like for example we have one post type

00:22:16 --> 00:22:22
who is a mathematician by training is a

00:22:19 --> 00:22:25
post doctoral scholar here we have

00:22:21 --> 00:22:27
undergrad to undergraduates to graduate

00:22:24 --> 00:22:29
students whose undergraduate degrees are

00:22:26 --> 00:22:31
from mathematics on the other hand we

00:22:28 --> 00:22:32
have sort of mechanical engineers and so

00:22:30 --> 00:22:34
n who would actually build these things

00:22:31 --> 00:22:39
throughout the group and we were funded

00:22:33 --> 00:22:41
by a number of people throughout so okay

00:22:38 --> 00:22:44
um there was supposed to be like a quick

00:22:41 --> 00:22:46
summary and entrance into what I was

00:22:43 --> 00:22:48
going to talk about so let me kind of

00:22:45 --> 00:22:50
tell you maybe our DARPA urban challenge

00:22:47 --> 00:22:52
ffort so that I can tell you a little

00:22:49 --> 00:22:54
bit more about how we implemented

00:22:51 --> 00:22:56
his motion planning algorithms if time

00:22:53 --> 00:22:58
allows I could talk more broadly about

00:22:55 --> 00:23:01
motion planning algorithms but I don't

00:22:57 --> 00:23:03
hink we'll get a chance to okay so I'm

00:23:00 --> 00:23:05
going to start with this effort the

00:23:02 --> 00:23:08
darpur every challenge I'm sure many of

00:23:04 --> 00:23:10
you have heard people usually believe

00:23:07 --> 00:23:14
that it kind of just kick-started of all

00:23:09 --> 00:23:16
these autonomous vehicles type what

00:23:13 --> 00:23:17
answer that's been going on let me

00:23:15 --> 00:23:21
introduce to you a little bit so this is

00:23:16 --> 00:23:22
was DARPA did things called DARPA Grand

00:23:20 --> 00:23:24
Challenge one and two I'll tell you in a

00:23:21 --> 00:23:26
second what they are but this is the

00:23:23 --> 00:23:28
third one essentially the idea is that

00:23:25 --> 00:23:30
you would take a street-legal vehicle

00:23:27 --> 00:23:32
you would instrument it with sensors and

00:23:29 --> 00:23:35
computers and you would enter this race

00:23:31 --> 00:23:37
to drive 60 miles in under six hours in

00:23:34 --> 00:23:39
an urban traffic right there's other

00:23:36 --> 00:23:42
vehicles driving around as well so the I

00:23:38 --> 00:23:46
proposed is back in 2006 stated that

00:23:41 --> 00:23:48
race in November 2007 the it was pretty

00:23:45 --> 00:23:49
hard you know you would have to do a lot

00:23:47 --> 00:23:51
of different things like u-turn skate

00:23:48 --> 00:23:53
pointers you'd have to be careful with

00:23:50 --> 00:23:54
stop signs and so on it's pretty

00:23:52 --> 00:23:56
complicated but if you win it they would

00:23:53 --> 00:23:59
give you two million dollars there's

00:23:55 --> 00:24:02
good incentive 89 teams entered the race

00:23:58 --> 00:24:04
we usually say it's a mighty spur Series

00:24:01 --> 00:24:07
entry but MIT is non serious entry was I

00:24:03 --> 00:24:11
guess the team that later turned into

00:24:06 --> 00:24:12
cruise automation which GM ended up

00:24:10 --> 00:24:15
buying for a billion dollars

00:24:11 --> 00:24:18
o this is the serious one of our

00:24:14 --> 00:24:20
entries they just want there to have fun

00:24:17 --> 00:24:22
I think and then later they continued

00:24:19 --> 00:24:24
their interest into autonomous cars and

00:24:21 --> 00:24:27
built cruise automation did a great

00:24:23 --> 00:24:30
job we went after we were not directly

00:24:26 --> 00:24:32
connected to it that team our team had

00:24:29 --> 00:24:34
mainly MIT faculty postdocs and students

00:24:31 --> 00:24:36
o we had eight full-time graduate

00:24:33 --> 00:24:39
students kind of roughly I was one of

00:24:35 --> 00:24:43
them you can see me right here I looked

00:24:38 --> 00:24:45
ifferent back then and we had a lot of

00:24:42 --> 00:24:46
support from Draper laboratory mainly on

00:24:44 --> 00:24:49
the sort of system integration vehicle

00:24:45 --> 00:24:52
integration and support some of them are

00:24:48 --> 00:24:54
in the audience and we also had some

00:24:51 --> 00:24:56
vehicle engineering support from Olin

00:24:53 --> 00:24:58
College we had a first version of the

00:24:55 --> 00:25:00
vehicle where cables were coming out and

00:24:57 --> 00:25:01
then Olin College came in and they

00:24:59 --> 00:25:04
packaged it nicely

00:25:00 --> 00:25:06
we built a vehicle it looked like this

00:25:03 --> 00:25:09
we took a Land Rover lr3 line

00:25:05 --> 00:25:14
one of the sponsors but also it was nice

00:25:08 --> 00:25:17
that the vehicle was pretty big we put

00:25:13 --> 00:25:18
an EMC driver wire system to it so this

00:25:16 --> 00:25:20
kind of a driver wire system for

00:25:17 --> 00:25:22
people who are disabled like for example

00:25:19 --> 00:25:23
if you can't use your legs they would

00:25:21 --> 00:25:25
give you like a little joystick type

00:25:22 --> 00:25:28
device so that you can actuate you know

00:25:24 --> 00:25:30
gas and brake so it came very handy we

00:25:27 --> 00:25:33
used it to make our vehicle driver wire

00:25:29 --> 00:25:35
we needed to put a lot of sensors on it

00:25:32 --> 00:25:39
so I'm going to say as I wish this

00:25:34 --> 00:25:41
wasn't recorded but hey so I think our

00:25:38 --> 00:25:42
situation was the following there was a

00:25:40 --> 00:25:44
lot of other teams out there and they

00:25:41 --> 00:25:46
were very experienced they had done the

00:25:43 --> 00:25:49
other other Grand Challenges before and

00:25:45 --> 00:25:52
so on we were not as experienced I would

00:25:48 --> 00:25:54
say that our team was talented but not

00:25:51 --> 00:25:57
experienced and we had a lot of sponsors

00:25:53 --> 00:25:59
o we had a lot of money so our strategy

00:25:56 --> 00:26:01
turned into if it fits on the vehicle

00:25:58 --> 00:26:03
t's put it on the vehicle and we'll

00:26:00 --> 00:26:05
figure out a way to use it if we don't

00:26:03 --> 00:26:08
use it it's dead weight we'll just kind

00:26:04 --> 00:26:10
of carry it so with that mindset we

00:26:07 --> 00:26:13
nded up with five cameras sixteen

00:26:09 --> 00:26:16
radars twelve planar laser scanners one

00:26:12 --> 00:26:19
3d laser scanner and one GPS a new unit

00:26:15 --> 00:26:21
his was a lot of sensors they generated

00:26:18 --> 00:26:24
a lot of data you had to process it so

00:26:20 --> 00:26:26
we had to buy a 40 CPU 40 gigs of ram

00:26:23 --> 00:26:28
quanta computer that normally at that

00:26:25 --> 00:26:31
ime would run on like a Google server

00:26:27 --> 00:26:34
type thing it was a server rack 10

00:26:30 --> 00:26:38
computers essentially that we had to put

00:26:33 --> 00:26:39
in so yeah we used to joke that this was

00:26:37 --> 00:26:41
like the fastest mobile computer on

00:26:38 --> 00:26:44
campus or something like both in terms

00:26:40 --> 00:26:46
of speed and compute power now this

00:26:43 --> 00:26:48
requires a lot of energy so we put on an

00:26:45 --> 00:26:50
internal amount of generator now if this

00:26:47 --> 00:26:52
generates a lot of heat so we put an air

00:26:49 --> 00:26:54
conditioner on top you can kind of see

00:26:51 --> 00:26:56
it here so that became our vehicle one

00:26:53 --> 00:26:58
thing to note though is that we just had

00:26:55 --> 00:27:00
the number of sensors was or a number of

00:26:57 --> 00:27:02
computers was large but but the sensor

00:26:59 --> 00:27:04
suit was very similar to the other

00:27:01 --> 00:27:06
people who have finished one important

00:27:03 --> 00:27:09
sensor was this 3d laser scanner that

00:27:05 --> 00:27:10
I'm going to show you in a second so

00:27:08 --> 00:27:12
this is the thing that sits on top of

00:27:09 --> 00:27:14
the vehicle looks like that Kentucky

00:27:11 --> 00:27:17
Fried Chicken type of bucket and

00:27:13 --> 00:27:19
essentially what it has is that probably

00:27:16 --> 00:27:19
a lot of people here are familiar but it

00:27:18 --> 00:27:23
has

00:27:18 --> 00:27:24
for lasers that measure range and those

00:27:22 --> 00:27:26
sixty-four lasers are stacked up on a

00:27:23 --> 00:27:29
vertical plane and that plane will turn

00:27:25 --> 00:27:32
and 15 Hertz so it will give you a 3d

00:27:28 --> 00:27:34
point cloud if you drive with it in

00:27:31 --> 00:27:37
Harvard Square here is what the raw data

00:27:33 --> 00:27:39
will look like this is colored by height

00:27:36 --> 00:27:41
you're just looking at raw data and you

00:27:38 --> 00:27:43
can you know easily pick up I don't know

00:27:40 --> 00:27:46
bus here another building may be a

00:27:42 --> 00:27:48
person a bunch of others so that gives

00:27:45 --> 00:27:52
you a great data already like you could

00:27:47 --> 00:27:55
work with this right so be taught so

00:27:51 --> 00:27:58
ther teams thought this sensor is made

00:27:54 --> 00:28:01
by a company called Melodyne it came

00:27:57 --> 00:28:03
pretty much just in time for the urban

00:28:00 --> 00:28:05
challenge my guess is that if you didn't

00:28:02 --> 00:28:07
have this 3d point cloud it would be

00:28:04 --> 00:28:09
pretty hard to complete that challenge

00:28:06 --> 00:28:11
there was only one team that didn't have

00:28:08 --> 00:28:12
it and complete it and they had a 2d

00:28:10 --> 00:28:13
laser scanner that was kind of turning

00:28:11 --> 00:28:18
like they essentially build their own

00:28:12 --> 00:28:21
Melodyne okay so we had also this sort

00:28:17 --> 00:28:22
of 12 planar laser scanners you would

00:28:20 --> 00:28:24
need these kind of things to cover the

00:28:21 --> 00:28:26
blind spots of the vehicle the thing is

00:28:23 --> 00:28:29
on top so you're not seeing kind of area

00:28:25 --> 00:28:31
nearby we had five from the push rooms

00:28:28 --> 00:28:32
looking down and seven on the skirts so

00:28:30 --> 00:28:34
this is kind of what it would look like

00:28:31 --> 00:28:36
so you're seeing the curves here and you

00:28:33 --> 00:28:37
know a bunch of other things and the

00:28:35 --> 00:28:40
vehicles are when the vehicles are very

00:28:36 --> 00:28:43
close to you can still see them we had

00:28:39 --> 00:28:45
16 radars radars are great they can see

00:28:42 --> 00:28:47
very far like laser scanners would see

00:28:44 --> 00:28:49
70 meters radars would see twice as much

00:28:46 --> 00:28:52
the problem is that they have a very

00:28:48 --> 00:28:54
narrow field of view so we needed 16 of

00:28:51 --> 00:28:57
them to cover 27 degrees around the

00:28:53 --> 00:29:00
vehicle 207 degrees around the vehicle

00:28:56 --> 00:29:01
270 degrees so you know you can park

00:28:59 --> 00:29:03
somewhere and you can see this is meters

00:29:00 --> 00:29:04
per second you can see a whole bunch of

00:29:02 --> 00:29:07
other vehicles kind of coming through

00:29:03 --> 00:29:09
elps quite a bit and finally we had

00:29:06 --> 00:29:11
five cameras in this configuration we

00:29:08 --> 00:29:13
re using cameras to actually look at

00:29:10 --> 00:29:15
lane markings I think actually you are

00:29:12 --> 00:29:19
the only finishing team that was using

00:29:14 --> 00:29:20
cameras for any purpose of any kind the

00:29:18 --> 00:29:22
other vehicles were just kind of working

00:29:19 --> 00:29:24
with the laser scanner and we were

00:29:21 --> 00:29:26
mainly working with laser scanner but we

00:29:23 --> 00:29:29
re picking up lane markings with this

00:29:25 --> 00:29:31
and we bought this GPS em unit there was

00:29:28 --> 00:29:33
an expensive thing but it would give you

00:29:30 --> 00:29:36
r position you

00:29:32 --> 00:29:38
the algorithmic stack it gets pretty

00:29:35 --> 00:29:41
complicated I think by the end of the

00:29:37 --> 00:29:44
race we would probably have like the

00:29:40 --> 00:29:46
active code that was running could be

00:29:43 --> 00:29:48
order hundreds of thousands of lines of

00:29:45 --> 00:29:49
C code so maybe like two hundred

00:29:47 --> 00:29:51
thousand good

00:29:48 --> 00:29:53
I remember the forklift and there was

00:29:50 --> 00:29:56
about half a million lines of code I

00:29:52 --> 00:29:57
think this was a bit less we head around

00:29:55 --> 00:29:59
like a hundred processes that are

00:29:56 --> 00:30:04
running sending messages to one another

00:29:58 --> 00:30:06
on that forty core system that you've

00:30:03 --> 00:30:09
seen so that would generate a huge

00:30:05 --> 00:30:12
software diagram so I simplified it for

00:30:08 --> 00:30:15
you it turned into this you have some

00:30:11 --> 00:30:16
sensors you get that data you process it

00:30:14 --> 00:30:19
hrough perception algorithms you

00:30:15 --> 00:30:22
generate a map of the environment close

00:30:18 --> 00:30:24
to the robot and you have this

00:30:21 --> 00:30:27
three-tier stack you have a navigator

00:30:23 --> 00:30:29
much like your Google Maps it would

00:30:26 --> 00:30:31
compute a map to get to your next goal

00:30:28 --> 00:30:33
which may be kilometres away and it

00:30:30 --> 00:30:35
would also give you the right the next

00:30:32 --> 00:30:37
Waypoint that you should hit that would

00:30:34 --> 00:30:39
hopefully be within your grid map and

00:30:36 --> 00:30:41
there's a motion planner that looks at

00:30:38 --> 00:30:43
he map sees all the obstacles and

00:30:40 --> 00:30:45
everything sees the goal point and finds

00:30:42 --> 00:30:48
that path to get to the goal point using

00:30:44 --> 00:30:49
the RT and then once that trajectory is

00:30:47 --> 00:30:51
computer it was passed to a controller

00:30:48 --> 00:30:54
that actually steers the vehicle that

00:30:50 --> 00:30:55
way so I've already shown you how the

00:30:53 --> 00:30:57
motion planner works it just kind of

00:30:54 --> 00:30:59
computes these things so here's the goal

00:30:56 --> 00:31:02
point our car finds the path to get

00:30:58 --> 00:31:05
here and you can run these things

00:31:01 --> 00:31:07
together to get like a good behavior it

00:31:04 --> 00:31:11
doesn't always go well let me show you

00:31:06 --> 00:31:11
what doesn't work in the sky rakia

00:31:25 --> 00:31:31
yes so we have like um honestly so so

00:31:28 --> 00:31:32
here are a couple of things so we had

00:31:30 --> 00:31:35
one thing is that we had a pretty good

00:31:31 --> 00:31:36
simulation system going for motion

00:31:34 --> 00:31:39
planning and things like that it helped

00:31:35 --> 00:31:41
a lot like on the day of the on the sort

00:31:38 --> 00:31:44
of like that was the day before the race

00:31:40 --> 00:31:47
my 24/7 job was to keep simulating our

00:31:43 --> 00:31:49
algorithms like I had two computers kind

00:31:46 --> 00:31:51
of start simulation here start look at

00:31:48 --> 00:31:54
it if one fails log it and and send it

00:31:50 --> 00:31:57
out so simulation really helped we had

00:31:53 --> 00:31:59
one some testing but I don't think we

00:31:56 --> 00:32:01
actually I think the race itself was the

00:31:58 --> 00:32:04
farthest that we had driven without any

00:32:00 --> 00:32:06
human intervention like before then we

00:32:03 --> 00:32:07
hadn't done that much I think this was

00:32:05 --> 00:32:09
like 60 miles if I remember this

00:32:06 --> 00:32:10
correctly we had done like a 20 mile

00:32:08 --> 00:32:15
stretch or something like that but we

00:32:09 --> 00:32:17
hadn't done as many so admittedly we

00:32:14 --> 00:32:20
didn't have too much on the testing from

00:32:16 --> 00:32:22
going the only reason why was because

00:32:19 --> 00:32:25
it's just we didn't have time to do this

00:32:21 --> 00:32:28
kind of thing we so I mean we started

00:32:24 --> 00:32:30
maybe a year before that we put together

00:32:27 --> 00:32:33
some of the infrastructure like this

00:32:29 --> 00:32:36
message sending and things like that but

00:32:32 --> 00:32:37
he vehicle itself to test it in reality

00:32:35 --> 00:32:40
the vehicle I think the race was in

00:32:36 --> 00:32:42
November we probably got this vehicle I

00:32:39 --> 00:32:44
mean here another vehicle before but we

00:32:41 --> 00:32:47
got this one clean I think it was April

00:32:43 --> 00:32:49
and then we put the sensors on or

00:32:46 --> 00:32:51
something like that so really it was

00:32:48 --> 00:32:54
just the summer time that we had to test

00:32:50 --> 00:32:56
and admittedly we couldn't test much and

00:32:53 --> 00:32:58
Draper laboratory helped out a lot with

00:32:55 --> 00:33:00
e testing if we didn't have them you

00:32:57 --> 00:33:01
probably wouldn't test any so we're

00:32:59 --> 00:33:04
probably just kind of failed outright or

00:33:00 --> 00:33:05
something in this kind of thing testing

00:33:03 --> 00:33:07
is very important it'll be very

00:33:04 --> 00:33:08
important for future as well

00:33:06 --> 00:33:10
simulation will be very important

00:33:07 --> 00:33:12
simulation has come a long way actually

00:33:09 --> 00:33:13
like nowadays you can I mean you guys

00:33:11 --> 00:33:15
are working with simulator as you can

00:33:12 --> 00:33:17
see but there's a lot of other things

00:33:14 --> 00:33:20
that people are going to put out in the

00:33:16 --> 00:33:22
next year or two and and you know like

00:33:19 --> 00:33:24
we can nowadays ran there things that

00:33:21 --> 00:33:25
you can show it to people and it's very

00:33:23 --> 00:33:45
hard to like people don't

00:33:24 --> 00:33:46
cigarette surrendering uh always wasn't

00:33:44 --> 00:33:49
back then I think that would be probably

00:33:45 --> 00:33:51
the right thing to do right now but back

00:33:48 --> 00:33:52
then we had this one platform that you

00:33:50 --> 00:33:54
know you could just run the whole

00:33:51 --> 00:33:57
software stack but if you start up a

00:33:53 --> 00:34:00
simulator it would actually simulate all

00:33:56 --> 00:34:01
the sensor data and everything if you

00:33:59 --> 00:34:03
don't start a simulator then the

00:34:00 --> 00:34:04
processes will be waiting for the data

00:34:02 --> 00:34:06
to come in so you could put it on a real

00:34:03 --> 00:34:07
vehicle or something so back then we

00:34:05 --> 00:34:13
thought that would be the best thing to

00:34:06 --> 00:34:15
do the question was was your simulated

00:34:12 --> 00:34:18
environment and your development

00:34:14 --> 00:34:20
environment separate or integrate they

00:34:17 --> 00:34:23
were very integrated right now I think

00:34:19 --> 00:34:23
you would do things differently

00:34:23 --> 00:34:28
eah there's kind of a lot to talk about

00:34:25 --> 00:34:30
so I thought that it would be just kind

00:34:27 --> 00:34:32
of great to give you guys some ideas

00:34:29 --> 00:34:37
given the the courses on autonomous

00:34:31 --> 00:34:40
vehicles so here's an example of a case

00:34:36 --> 00:34:42
that we got into so what's happening

00:34:39 --> 00:34:45
here is we arrive at an intersection and

00:34:41 --> 00:34:46
there's another car it's Cornell's car

00:34:44 --> 00:34:48
and they're just sitting right in the

00:34:45 --> 00:34:49
middle of the intersection and they

00:34:47 --> 00:34:51
don't seem to be moving I think they've

00:34:48 --> 00:34:53
been sitting there for a few minutes

00:34:50 --> 00:34:55
before we even arrived so DARPA decided

00:34:52 --> 00:34:56
that they should let us go and we're

00:34:54 --> 00:34:58
probably going to take over and we'll do

00:34:55 --> 00:35:01
great and it's going to be an important

00:34:57 --> 00:35:03
moment in robotics history that for the

00:35:00 --> 00:35:05
first time you know a robot takes or

00:35:02 --> 00:35:08
another robot while the other robot is

00:35:04 --> 00:35:10
tuck and it's going to be great so they

00:35:07 --> 00:35:12
decide to go forward with this so here's

00:35:09 --> 00:35:14
how we're seeing things from inside our

00:35:11 --> 00:35:16
car our car is right here wants to go

00:35:13 --> 00:35:17
there or our T generates trajectories

00:35:15 --> 00:35:19
there's an object here that's the car

00:35:16 --> 00:35:21
that we're seeing we're not seeing all

00:35:18 --> 00:35:23
of it but we're seeing in a fraction of

00:35:20 --> 00:35:26
it so we're going to play it a little

00:35:22 --> 00:35:28
bit so you know like we were actually

00:35:25 --> 00:35:30
able to turn around it so I think I need

00:35:27 --> 00:35:33
to stop it somewhere but now let's look

00:35:29 --> 00:35:36
at here so we seen the whole car the new

00:35:33 --> 00:35:37
goal point is further away regenerating

00:35:35 --> 00:35:38
this trajectories looks great

00:35:36 --> 00:35:40
it turns

00:35:38 --> 00:35:42
that this car is just somehow stuck for

00:35:39 --> 00:35:44
some reason so we wrote a paper together

00:35:41 --> 00:35:46
with them it's not I'm clear to them

00:35:43 --> 00:35:48
either but my understanding is that they

00:35:45 --> 00:35:51
think that the obstacle is on top of the

00:35:47 --> 00:35:52
car and the way the algorithm is written

00:35:50 --> 00:35:54
is it just kind of generates a

00:35:51 --> 00:35:56
trajectory and asks if the trajectory is

00:35:53 --> 00:35:59
collision-free or not right the

00:35:55 --> 00:36:01
collision checker doesn't say this part

00:35:58 --> 00:36:02
of the trajectory is in collision it's

00:36:00 --> 00:36:04
just every time it passes a trajectory

00:36:01 --> 00:36:06
because the route is in collision it

00:36:03 --> 00:36:08
just says you know there's nothing that

00:36:05 --> 00:36:11
hey have another little piece where it

00:36:07 --> 00:36:13
just updates the map every time there's

00:36:10 --> 00:36:14
no information from the sensors if

00:36:12 --> 00:36:17
there's no new information there's no

00:36:13 --> 00:36:19
need to update so they ended up getting

00:36:16 --> 00:36:20
stuck on this obstacle and they're not

00:36:18 --> 00:36:23
refreshing their map because nothing is

00:36:19 --> 00:36:25
moving up until we move right next to

00:36:22 --> 00:36:27
them they refresh again and they say oh

00:36:24 --> 00:36:29
I'm actually not sitting around obstacle

00:36:26 --> 00:36:31
that was an error so next time the path

00:36:28 --> 00:36:33
comes going forward it says this is a

00:36:30 --> 00:36:35
great path go forward with it

00:36:32 --> 00:36:38
hat happens right when we're passing so

00:36:34 --> 00:36:42
if you look at this blob right now as I

00:36:37 --> 00:36:44
play it the blob starts to move so they

00:36:41 --> 00:36:47
are going in a direction that we are

00:36:43 --> 00:36:51
going a quick thing will happen so if

00:36:46 --> 00:36:53
our car if our car at some point

00:36:50 --> 00:36:56
realizes that there's no paths a

00:36:52 --> 00:36:57
collision is imminent and there's

00:36:55 --> 00:37:02
nothing to do about it it generates

00:36:56 --> 00:37:05
hows that wide circle around it and

00:37:01 --> 00:37:06
that basically means that we are headed

00:37:04 --> 00:37:08
to a crash there's nothing we can do

00:37:05 --> 00:37:11
about it we're just going to slam the

00:37:07 --> 00:37:14
brakes and hope not to bad things happen

00:37:10 --> 00:37:16
so it starts to do that I think at this

00:37:13 --> 00:37:18
time this camera is more fun to look at

00:37:15 --> 00:37:21
you can kind of take a look at it and

00:37:17 --> 00:37:23
sort of see what happened and so this

00:37:20 --> 00:37:26
kind of like collision happens we

00:37:22 --> 00:37:29
collide with the car DARPA what they did

00:37:25 --> 00:37:31
is that they actually pulled the Cornell

00:37:28 --> 00:37:33
car back they started us we finished

00:37:30 --> 00:37:35
they finished as well so both of the

00:37:32 --> 00:37:36
teams finished well you can see some of

00:37:34 --> 00:37:38
the things that are a little bit hard

00:37:35 --> 00:37:40
for example if you yourself were

00:37:37 --> 00:37:42
deriving our intersection that there's a

00:37:39 --> 00:37:44
car that's sitting there you probably

00:37:41 --> 00:37:46
would stop your car take out go and ask

00:37:43 --> 00:37:48
if there's anything wrong even if you

00:37:45 --> 00:37:49
don't do that suppose you're not very

00:37:47 --> 00:37:52
decent of a human being you don't decide

00:37:48 --> 00:37:53
not to do that you would still steer

00:37:51 --> 00:37:56
away from the car you probably wouldn't

00:37:52 --> 00:37:58
get as close to this car as we do so

00:37:55 --> 00:37:59
there are some problems that are at the

00:37:57 --> 00:38:02
inference level that we do without even

00:37:58 --> 00:38:05
thinking and it's actually kind of hard

00:38:01 --> 00:38:07
things for these types of cars to do

00:38:04 --> 00:38:08
especially if you're going fast you're

00:38:06 --> 00:38:11
in a complicated environment you're not

00:38:07 --> 00:38:14
expecting things and you might collide

00:38:10 --> 00:38:15
into things we do different kinds of

00:38:13 --> 00:38:17
inference that we can't do a name but

00:38:14 --> 00:38:20
you know you look at the way a person

00:38:16 --> 00:38:22
walks on the sidewalk and you can say

00:38:19 --> 00:38:24
well this person is kind of dangerous or

00:38:21 --> 00:38:26
maybe we will walk into the street or

00:38:23 --> 00:38:27
not you know you make that decision and

00:38:25 --> 00:38:32
it's actually pretty complicated thing

00:38:26 --> 00:38:34
for a robot to do okay so you know this

00:38:31 --> 00:38:35
kind of like the results of the race

00:38:33 --> 00:38:38
I'm not gonna go too much into it

00:38:34 --> 00:38:40
basically the idea is that 89 people

00:38:37 --> 00:38:42
started six finished we were one of the

00:38:39 --> 00:38:44
finishers CMU came first so they got the

00:38:41 --> 00:38:46
2 million dollar check I believe

00:38:43 --> 00:38:48
Stanford came second they got a 1

00:38:45 --> 00:38:50
million dollar check Virginia Tech came

00:38:47 --> 00:38:52
third they got half a million we came

00:38:49 --> 00:38:54
fourth we didn't get anybody but you

00:38:51 --> 00:38:56
know we got a lot of experience it was

00:38:53 --> 00:38:58
great to be a part of it I think one

00:38:55 --> 00:39:01
note is that the Google car that you may

00:38:57 --> 00:39:04
have heard a lot was essentially sort of

00:39:00 --> 00:39:05
like a spinoff from this race so if you

00:39:03 --> 00:39:07
look at the Google color you will see

00:39:04 --> 00:39:10
that the sensing package is very similar

00:39:06 --> 00:39:13
it's very laser scanner oriented has a

00:39:09 --> 00:39:15
couple of radars on it that it could

00:39:12 --> 00:39:18
utilize and is working somewhat with the

00:39:14 --> 00:39:20
cameras but not so much essentially

00:39:17 --> 00:39:21
Google engineered this thing that we

00:39:19 --> 00:39:24
built or all the other teams built

00:39:20 --> 00:39:25
independently they engineered it for ten

00:39:23 --> 00:39:28
years and that's the kind of thing that

00:39:24 --> 00:39:31
hey utilize nowadays there's also like

00:39:27 --> 00:39:32
this whole Tesla brand of camera based

00:39:30 --> 00:39:35
cars or deep learning and so on that's

00:39:31 --> 00:39:37
coming in and just very recently back

00:39:34 --> 00:39:40
ten years ago you know we knew about

00:39:36 --> 00:39:42
people learning and so on but it just it

00:39:39 --> 00:39:44
just didn't work the moment somebody

00:39:41 --> 00:39:48
figured out doing it on a GPU it started

00:39:43 --> 00:39:49
working pretty well okay so there's a

00:39:47 --> 00:39:53
lot I can tell you about path planning

00:39:48 --> 00:39:55
but I think here is kind of maybe what I

00:39:52 --> 00:39:57
should do if you if you do not mind

00:39:54 --> 00:39:59
rather than I'm telling you about our

00:39:56 --> 00:40:01
RTS and making this into a lecture that

00:39:58 --> 00:40:03
I'm not sure if you're going to like it

00:40:00 --> 00:40:05
let me talk maybe a little bit more

00:40:02 --> 00:40:07
about south driving vehicles and I think

00:40:04 --> 00:40:09
that's something that you might enjoy

00:40:06 --> 00:40:09
better

00:40:27 --> 00:40:33
so the question is sort of building it

00:40:30 --> 00:40:36
from scratch what was the biggest

00:40:32 --> 00:40:38
challenge so I'm going to say admittedly

00:40:35 --> 00:40:40
I was a junior student back time so my

00:40:37 --> 00:40:43
challenge was to get these controllers

00:40:39 --> 00:40:44
and some parts of the rrt working and I

00:40:42 --> 00:40:47
had simulation systems and things like

00:40:43 --> 00:40:48
that and life was good for me I would

00:40:46 --> 00:40:50
think that I mean we ended up building

00:40:47 --> 00:40:54
pretty complicated hardware so that was

00:40:49 --> 00:40:56
one of the challenges and that probably

00:40:53 --> 00:40:57
all in college Draper you know they did

00:40:55 --> 00:40:59
all of that that was great

00:40:56 --> 00:41:01
he other challenge that we had is that

00:40:58 --> 00:41:03
nowadays there's like maybe you guys use

00:41:00 --> 00:41:06
it like robot operating system and so on

00:41:02 --> 00:41:08
that infrastructure software we had none

00:41:05 --> 00:41:09
of that so we ended up building our own

00:41:07 --> 00:41:11
I don't know if anybody uses but there

00:41:08 --> 00:41:14
is this thing called lightweight

00:41:10 --> 00:41:16
communications and marshalling LCN so

00:41:13 --> 00:41:20
that ended up being built for this and

00:41:15 --> 00:41:21
it just kind of got spun out there was

00:41:19 --> 00:41:24
another big challenge that we actually

00:41:20 --> 00:41:25
faced so LCM nowadays is utilized

00:41:23 --> 00:41:27
throughout the industry like for example

00:41:24 --> 00:41:31
for autonomous cars we'll use it

00:41:26 --> 00:41:34
Toyota will use it no Donna mean uses it

00:41:30 --> 00:41:36
so it ended up coming out of this this

00:41:33 --> 00:41:38
challenge and it was probably like the

00:41:35 --> 00:41:42
first you know I would say the first six

00:41:37 --> 00:41:44
seven months was devoted to it and and

00:41:41 --> 00:41:45
for necessity I mean we just we wanted

00:41:43 --> 00:41:46
to do other things but we just couldn't

00:41:44 --> 00:41:48
because you needed something like this

00:41:45 --> 00:41:52
there was another big challenge I would

00:41:47 --> 00:41:54
say testing was a big challenge things

00:41:51 --> 00:41:54
like that

00:41:58 --> 00:42:06
pretty collaborative as far as where I

00:42:02 --> 00:42:10
was because probably papers published

00:42:05 --> 00:42:12
paper with other team things like that

00:42:09 --> 00:42:16
and I've seen like my aren't people

00:42:11 --> 00:42:16
founded becoming much more isolated like

00:42:19 --> 00:42:26
yeah wrong I guess it's good and bad

00:42:23 --> 00:42:29
it's kinda hard to assess so competition

00:42:25 --> 00:42:32
is always good so the the the question

00:42:28 --> 00:42:34
was that you know back in the day we

00:42:31 --> 00:42:35
re really collaborative like it's very

00:42:33 --> 00:42:38
interesting that we actually wrote a

00:42:34 --> 00:42:40
paper with Cornell about our collision

00:42:37 --> 00:42:41
just to teach the whole community why

00:42:39 --> 00:42:43
these kind of things happen but nowadays

00:42:40 --> 00:42:46
like everybody is just kind of doing

00:42:42 --> 00:42:48
their own thing and there's no kind of

00:42:45 --> 00:42:49
going out so there's there's a quick

00:42:47 --> 00:42:51
question is a quick answer for that and

00:42:48 --> 00:42:54
there's a kind of broader answer so the

00:42:50 --> 00:42:55
quick answer is that yeah I mean it

00:42:53 --> 00:42:57
became important there's a lot of you

00:42:54 --> 00:42:59
know sort of people invested a lot of

00:42:56 --> 00:43:00
money and they are expecting returns and

00:42:58 --> 00:43:03
things like that and that affects the

00:42:59 --> 00:43:05
nvironment that definitely drove it I

00:43:02 --> 00:43:07
think we're still you know trying to

00:43:04 --> 00:43:09
work on it in academia and trying to

00:43:06 --> 00:43:11
publish papers but a lot of people are

00:43:08 --> 00:43:14
you know worried about competing with

00:43:10 --> 00:43:16
ese huge companies and things like

00:43:13 --> 00:43:18
that which I think it's not a big war

00:43:15 --> 00:43:20
because there's a lot to do still

00:43:17 --> 00:43:23
sobani when you look at the industry

00:43:19 --> 00:43:24
there's little competition but that for

00:43:22 --> 00:43:28
some reason the broader answer is that

00:43:23 --> 00:43:30
became a norm so back 50 years ago

00:43:27 --> 00:43:33
you would look at the top company of the

00:43:29 --> 00:43:35
day this is like starting from a century

00:43:32 --> 00:43:37
ago like with bowel for example they

00:43:34 --> 00:43:38
would form labs and they will publish in

00:43:36 --> 00:43:40
there to science and things like that

00:43:37 --> 00:43:42
will be very open and novel day is the

00:43:39 --> 00:43:45
big companies of the day they kind of

00:43:41 --> 00:43:49
rather prefer secretive labs and things

00:43:44 --> 00:43:52
like that so that I think Microsoft was

00:43:48 --> 00:43:55
the last big company of the day to do

00:43:51 --> 00:43:56
that nowadays googles and apples and

00:43:54 --> 00:43:56
things like that they don't do that

00:43:55 --> 00:43:59
anymore

00:43:55 --> 00:44:03
there's a bit of that as well good or

00:43:58 --> 00:44:05
bad but it became that way and sometimes

00:44:02 --> 00:44:09
competition is good honestly it's a good

00:44:04 --> 00:44:12
thing that people feel like you don't

00:44:08 --> 00:44:14
know what the others are doing and you

00:44:11 --> 00:44:16
want to compete so that makes you better

00:44:13 --> 00:44:22
and better even though the others maybe

00:44:15 --> 00:44:22
I don't know ok any other questions yeah

00:44:31 --> 00:44:40
maybe a vision only a challenge or or

00:44:36 --> 00:44:40
something that races

00:44:43 --> 00:44:48
I'm not sure I don't think it's purely

00:44:45 --> 00:44:49
an industry problem because it's it's

00:44:47 --> 00:44:53
till kind of it's it's quite

00:44:48 --> 00:44:56
complicated honestly so there may be

00:44:52 --> 00:44:58
things that people can do but i i i am

00:44:55 --> 00:45:01
wondering if DARPA would be interested

00:44:57 --> 00:45:03
in doing a challenge so let's set DARPA

00:45:00 --> 00:45:05
aside differently and research otherwise

00:45:02 --> 00:45:08
like when you think about DARPA dark

00:45:04 --> 00:45:10
ways a defense agency and when they talk

00:45:07 --> 00:45:12
about the challenge they had honestly

00:45:09 --> 00:45:14
defense problems in mind so for example

00:45:11 --> 00:45:16
they didn't allow you to go around and

00:45:13 --> 00:45:18
rive in the area with your sensors the

00:45:15 --> 00:45:21
idea was that they would give you a map

00:45:17 --> 00:45:24
of the environment 24 hours in advance

00:45:20 --> 00:45:25
and then five minutes before they would

00:45:23 --> 00:45:27
give you a mission like hit this

00:45:24 --> 00:45:29
waypoint hit that way point and so on so

00:45:26 --> 00:45:31
that's a military setting they were

00:45:28 --> 00:45:34
ally it really the whole thing started

00:45:30 --> 00:45:36
with the US Congress mandate to get you

00:45:33 --> 00:45:38
know one third of combat vehicles

00:45:35 --> 00:45:42
autonomous by 2015 which didn't happen

00:45:37 --> 00:45:44
but it was a war military setting so

00:45:41 --> 00:45:48
DARPA is usually sort of that minded and

00:45:43 --> 00:45:48
they did the DARPA Robotics

00:45:48 --> 00:45:54
o the idea is to build a quadcopter

00:45:50 --> 00:45:56
that can fly here 20 meters a second

00:45:53 --> 00:45:58
like 40 miles an hour in indoor

00:45:55 --> 00:45:59
environments type of thing I think

00:45:57 --> 00:46:01
they'll do that but there may be other

00:45:58 --> 00:46:03
things like there may be other you know

00:46:00 --> 00:46:05
people kind of coming in pushing the

00:46:02 --> 00:46:07
boundary of research like something for

00:46:04 --> 00:46:10
example just with cameras would be very

00:46:06 --> 00:46:12
interesting and I think we are just in

00:46:09 --> 00:46:16
it may be a couple years away from doing

00:46:11 --> 00:46:20
that very well and probably neat

00:46:15 --> 00:46:22
learning would be a lot of it ok so I

00:46:19 --> 00:46:26
don't know much time and I don't want to

00:46:21 --> 00:46:27
hold you here but sort of you know let

00:46:25 --> 00:46:29
me tell you a few things about

00:46:26 --> 00:46:31
autonomous cars in general and let's see

00:46:28 --> 00:46:34
if we can you know in like 10 minutes we

00:46:30 --> 00:46:36
can fit something interesting

00:46:33 --> 00:46:39
transportations is a very interesting

00:46:35 --> 00:46:41
thing it actually defines how you live

00:46:38 --> 00:46:44
quite a bit so if you look at for

00:46:40 --> 00:46:46
example the kind of cities that you know

00:46:43 --> 00:46:48
you may be living in today they

00:46:45 --> 00:46:50
look like this and they are produced

00:46:47 --> 00:46:53
thanks to one invention that was the

00:46:49 --> 00:46:55
affordable car which was about as

00:46:52 --> 00:46:56
you go if you look at it you know

00:46:54 --> 00:46:59
throughout the last century like in

00:46:55 --> 00:47:01
1950s cars were big and and you would

00:46:58 --> 00:47:03
find you know that everywhere these kind

00:47:00 --> 00:47:04
of subways were being constructed for

00:47:02 --> 00:47:06
the first time

00:47:03 --> 00:47:08
the reason was cities were dirty they

00:47:05 --> 00:47:11
were deemed diseased prone so now he had

00:47:07 --> 00:47:13
the car you could move way into a better

00:47:10 --> 00:47:15
living lifestyle and it would improve it

00:47:12 --> 00:47:18
and that was the 20th century invention

00:47:14 --> 00:47:19
that you had it also changed the cities

00:47:17 --> 00:47:22
quite a bit I mean like for example this

00:47:18 --> 00:47:25
Boston's sort of central artery that

00:47:21 --> 00:47:27
was built in you know 50s that around

00:47:24 --> 00:47:32
that time to kind of service the colors

00:47:26 --> 00:47:33
coming in and out of the city the cars

00:47:31 --> 00:47:35
kind of generated this kind of thing you

00:47:32 --> 00:47:37
know in some places at the extreme like

00:47:34 --> 00:47:38
if you go to places like Los Angeles in

00:47:36 --> 00:47:41
the United States you will see the

00:47:37 --> 00:47:43
suburban sprawl it's very different in

00:47:40 --> 00:47:46
other places so places that didn't have

00:47:42 --> 00:47:47
the time to expand that didn't have the

00:47:45 --> 00:47:50
resources to expand or just didn't have

00:47:46 --> 00:47:53
the place to expand it caused many

00:47:49 --> 00:47:55
problems like here's the suburbia and in

00:47:52 --> 00:47:58
Mexico City you can see the dirt that it

00:47:54 --> 00:48:00
generates in the distance even if you're

00:47:57 --> 00:48:02
rich it doesn't really matter you know

00:47:59 --> 00:48:04
even in in rich countries this quick

00:48:01 --> 00:48:06
expansion it just doesn't work and it

00:48:03 --> 00:48:10
creates if anything just ugly

00:48:05 --> 00:48:12
environments and in some places it

00:48:09 --> 00:48:14
creates like you need to be dense and

00:48:11 --> 00:48:17
you need to be big and so you have the

00:48:13 --> 00:48:18
cars but you just have to build you know

00:48:16 --> 00:48:19
big buildings that you cannot even serve

00:48:17 --> 00:48:21
with cars

00:48:18 --> 00:48:23
o you generates these type of things

00:48:20 --> 00:48:26
where you know like there's a I think

00:48:22 --> 00:48:27
it's probably my just I was just gonna

00:48:25 --> 00:48:28
say only let the congestion and

00:48:26 --> 00:48:30
pollution in the rest of the world but

00:48:27 --> 00:48:32
it generated these kind of things where

00:48:29 --> 00:48:34
I don't know if you heard there was a

00:48:31 --> 00:48:37
traffic jam in China it lasted like nine

00:48:33 --> 00:48:38
days and it was a hundred miles long so

00:48:36 --> 00:48:40
it generated this kind of thing is just

00:48:37 --> 00:48:42
a quick introduction of the affordable

00:48:39 --> 00:48:45
car sort of what it did to the

00:48:41 --> 00:48:47
nvironment in the cities there so

00:48:44 --> 00:48:50
pollution is one problem and so on but

00:48:46 --> 00:48:52
if you look through it it's actually

00:48:49 --> 00:48:54
pollution and energy consumption wise a

00:48:51 --> 00:48:59
lot of it comes from the cars especially

00:48:53 --> 00:49:01
inside the cities an interesting point

00:48:58 --> 00:49:04
is that if you look through the cars the

00:49:00 --> 00:49:07
cars are actually pretty inefficient the

00:49:03 --> 00:49:09
way they sort of sit currently

00:49:06 --> 00:49:11
if you look true for example BMWs over

00:49:08 --> 00:49:13
the years you would see that they get

00:49:10 --> 00:49:15
heavier and they get faster this is very

00:49:12 --> 00:49:16
correlated if you get faster you have to

00:49:14 --> 00:49:18
become heavier because you have to pass

00:49:15 --> 00:49:20
crash tests and things like that so you

00:49:17 --> 00:49:24
know you're you know just to be faster

00:49:19 --> 00:49:25
so in order to pasture has two crash

00:49:23 --> 00:49:26
tests you build structure and things

00:49:24 --> 00:49:30
like that and that makes the vehicle

00:49:25 --> 00:49:31
heavier ultimately so like a BMW that

00:49:29 --> 00:49:33
you would buy in the 70s would weigh

00:49:30 --> 00:49:35
something like you know twenty five

00:49:32 --> 00:49:38
hundred pounds nowadays it's like you

00:49:34 --> 00:49:40
know like four thousand pounds roughly

00:49:37 --> 00:49:42
so it would you know if you look at the

00:49:39 --> 00:49:45
average passenger weight that it's

00:49:41 --> 00:49:47
carrying it's about 25 times the weight

00:49:44 --> 00:49:49
of the passengers and the size as well

00:49:46 --> 00:49:52
you know it's about ten times the size

00:49:48 --> 00:49:53
of the passengers that it carries in

00:49:51 --> 00:49:56
terms of parking spots if you look

00:49:52 --> 00:49:58
through the cities there are places in

00:49:55 --> 00:49:59
the you know usually what we have in the

00:49:57 --> 00:50:01
United States is that for every car we

00:49:58 --> 00:50:04
have two parking spots so roughly that's

00:50:00 --> 00:50:05
the number in some places parking spots

00:50:03 --> 00:50:08
take up like half to sea

00:50:04 --> 00:50:11
so for example in a way on average it's

00:50:07 --> 00:50:13
about one third so you might ask the

00:50:10 --> 00:50:15
question like this is the kind of thing

00:50:12 --> 00:50:16
this is the kind of environment that

00:50:14 --> 00:50:18
city is created and do you really want

00:50:15 --> 00:50:20
o live in this type of environment and

00:50:17 --> 00:50:22
it's to kind of give you the idea I mean

00:50:19 --> 00:50:24
if you if you walk out a lot of the

00:50:21 --> 00:50:26
infrastructure a lot of the things that

00:50:23 --> 00:50:28
you see are made by cars like for

00:50:25 --> 00:50:30
instance and it really kind of

00:50:27 --> 00:50:33
interferes with your thinking as well so

00:50:29 --> 00:50:35
for instance we never walk on the street

00:50:32 --> 00:50:37
nowadays like nobody jaywalks

00:50:34 --> 00:50:40
treets are for cars my cars go on the

00:50:36 --> 00:50:41
streets and we go on the sidewalk it

00:50:39 --> 00:50:43
wasn't like that a hundred years ago you

00:50:40 --> 00:50:44
could walk on the streets however you

00:50:42 --> 00:50:46
wanted cars came in and they took it

00:50:43 --> 00:50:49
over and so they changed the urban

00:50:45 --> 00:50:52
landscape quite a bit the point is that

00:50:48 --> 00:50:56
it seems like there's a there's an

00:50:51 --> 00:50:59
opportunity today to actually kind of

00:50:55 --> 00:51:00
use 21st century technologies this could

00:50:58 --> 00:51:02
be robotics but a number of other things

00:50:59 --> 00:51:05
like online services new business models

00:51:01 --> 00:51:06
and things like that and so on maybe

00:51:04 --> 00:51:09
high-performance computer whatever and

00:51:05 --> 00:51:11
to kind of service the needs of people

00:51:08 --> 00:51:11
in the cities

00:51:15 --> 00:51:21
I'm not sure I don't think that the kind

00:51:17 --> 00:51:23
of the service aspects of it goes away

00:51:20 --> 00:51:25
so you know you will need to prop my

00:51:22 --> 00:51:28
guess what would happen is that I think

00:51:24 --> 00:51:30
people could be more mobile so I think

00:51:27 --> 00:51:32
they want to be more mobile but they're

00:51:29 --> 00:51:35
just not if it was very accessible very

00:51:31 --> 00:51:38
easy I think they would be so there be

00:51:34 --> 00:51:40
increase in being mobile but at the same

00:51:37 --> 00:51:42
time that's a you know resources are

00:51:39 --> 00:51:46
spent on it you need to pay for it

00:51:41 --> 00:51:49
somehow so you would still generate

00:51:45 --> 00:51:51
conomic activity off of that in fact

00:51:48 --> 00:51:53
you would probably generate more

00:51:50 --> 00:51:55
conomic activity for example if the

00:51:52 --> 00:51:57
moment you change people's behavior this

00:51:54 --> 00:51:59
the way that you generate like a new

00:51:56 --> 00:52:02
economic activity so if there's a way

00:51:58 --> 00:52:04
for example transportation is more

00:52:01 --> 00:52:06
available more affordable and it changes

00:52:03 --> 00:52:08
their behavior it makes you more mobile

00:52:05 --> 00:52:11
like for example you're fine with having

00:52:07 --> 00:52:13
a class here and then 20 minutes later

00:52:10 --> 00:52:14
having a class at Harvard nobody would

00:52:12 --> 00:52:16
o that nowadays but if it was that easy

00:52:13 --> 00:52:18
to get there you would probably do it

00:52:15 --> 00:52:19
and so that would make you more mobile

00:52:17 --> 00:52:21
and that's the way ultimately would

00:52:18 --> 00:52:24
generate more economic activity rather

00:52:20 --> 00:52:29
than buying cars we the service is still

00:52:23 --> 00:52:31
there you need to pay for it somehow any

00:52:28 --> 00:52:32
other questions yes what the point is

00:52:30 --> 00:52:34
that you know you can use these type of

00:52:31 --> 00:52:35
technologies to do for example like

00:52:33 --> 00:52:37
ither maybe like mobility on the man

00:52:34 --> 00:52:39
you know whenever you need to be mobile

00:52:36 --> 00:52:43
you can be mobile or deliver things and

00:52:38 --> 00:52:48
so on and I think that let me just kind

00:52:42 --> 00:52:50
of I was gonna tell you a bit the

00:52:47 --> 00:52:53
history but I think that I'm just going

00:52:49 --> 00:52:55
to pass it in and tell you a few things

00:52:52 --> 00:52:58
o autonomous vehicles are sort of one

00:52:54 --> 00:53:00
thing that you can utilize and you can

00:52:57 --> 00:53:02
actually do these types of things I

00:52:59 --> 00:53:04
think you can make this even better like

00:53:01 --> 00:53:05
for example you can integrate a few

00:53:03 --> 00:53:07
things into it one thing you can

00:53:04 --> 00:53:10
integrate sharing like so you can make

00:53:06 --> 00:53:12
Internet user type scenario you can use

00:53:09 --> 00:53:14
autonomy as well and finally like

00:53:11 --> 00:53:16
lectrification especially if you're

00:53:13 --> 00:53:18
going a little bit slower so you don't

00:53:15 --> 00:53:20
have to pass - crash crash tests and

00:53:17 --> 00:53:22
things like that you could really reduce

00:53:19 --> 00:53:24
the cost of transportation like to the

00:53:21 --> 00:53:26
point where you could imagine things

00:53:23 --> 00:53:28
like like you could go for

00:53:25 --> 00:53:31
anywhere to anywhere else for $0.99 in

00:53:27 --> 00:53:33
Boston with like five-minute wait time

00:53:30 --> 00:53:37
if you want to share your ride it could

00:53:32 --> 00:53:40
be 50 cents if you want to admit to like

00:53:36 --> 00:53:41
one stop a lot of us do one stop you

00:53:39 --> 00:53:44
know you can take a subway and then take

00:53:40 --> 00:53:46
a bus one stop makes your transportation

00:53:43 --> 00:53:49
much cheaper if you were to take an

00:53:45 --> 00:53:51
airplane suppose if you wanted to take

00:53:48 --> 00:53:52
one stop you could pay 30 cents and you

00:53:50 --> 00:53:55
could go anywhere to anywhere else in

00:53:51 --> 00:53:57
Boston I think there's a good

00:53:54 --> 00:54:00
opportunity to kind of you know push for

00:53:56 --> 00:54:02
things and utilize technology to bring

00:53:59 --> 00:54:04
the cost of transportation to a point or

00:54:01 --> 00:54:07
availability of transportation to a

00:54:03 --> 00:54:11
point to like really just change a lot

00:54:06 --> 00:54:12
of things it's not very easy the way I

00:54:10 --> 00:54:15
usually look at the technological

00:54:11 --> 00:54:17
andscape is that you can imagine sort

00:54:14 --> 00:54:18
of speed versus complexity speed is the

00:54:16 --> 00:54:20
speed of the vehicle that's being

00:54:17 --> 00:54:23
involved it's involved in this and and

00:54:19 --> 00:54:24
maybe complexity is the complexity of

00:54:22 --> 00:54:27
the environment that you're dealing with

00:54:23 --> 00:54:28
like you can have high speed low

00:54:26 --> 00:54:30
complexity environments like highways

00:54:27 --> 00:54:32
they're actually easy to work with

00:54:29 --> 00:54:33
we might actually conquer them like in

00:54:31 --> 00:54:36
the next I don't know three years or

00:54:32 --> 00:54:38
something like that another thing would

00:54:35 --> 00:54:40
be like for example parks or university

00:54:37 --> 00:54:42
campus or something much slower but much

00:54:39 --> 00:54:45
more complex like people walking around

00:54:41 --> 00:54:46
and and things like that fully

00:54:44 --> 00:54:48
autonomous driving is probably pretty

00:54:45 --> 00:54:51
far but there is some opportunity to do

00:54:47 --> 00:54:56
some interesting things elsewhere very

00:54:50 --> 00:54:59
quickly the one of the problems is that

00:54:55 --> 00:55:01
his is not just an technology problem

00:54:58 --> 00:55:04
to be honest as you have seen earlier

00:55:00 --> 00:55:05
there's a lot of enrollment in like for

00:55:03 --> 00:55:07
example architecture like how do you

00:55:04 --> 00:55:09
actually utilize the city the best and

00:55:06 --> 00:55:12
so on but one of the biggest problems

00:55:08 --> 00:55:15
ends up being this law and insurance and

00:55:11 --> 00:55:17
regulations aspects there are good or

00:55:14 --> 00:55:19
bad things like for example sometimes

00:55:16 --> 00:55:22
you allow by the law to be able to do

00:55:18 --> 00:55:24
certain things but then is it really

00:55:21 --> 00:55:26
like is it a safety hazard is it of an

00:55:23 --> 00:55:28
ethical the kind of a lot of people to

00:55:25 --> 00:55:30
just kind of test stuff around so it's a

00:55:27 --> 00:55:32
bit of a question like whether or not

00:55:29 --> 00:55:34
his is the kind of thing I think sort

00:55:31 --> 00:55:36
of going forward if I could say one

00:55:33 --> 00:55:38
thing to you guys is that this is this

00:55:35 --> 00:55:39
just not like a just a problem in

00:55:37 --> 00:55:42
sort of

00:55:38 --> 00:55:45
technology but it's also like a problem

00:55:41 --> 00:55:47
and technology sort of society policy

00:55:44 --> 00:55:49
architecture law insurance and business

00:55:46 --> 00:55:50
as well like you may need new business

00:55:48 --> 00:55:53
models and so on

00:55:49 --> 00:55:56
so I personally think that the it's it's

00:55:52 --> 00:55:58
right out there but I think that we

00:55:55 --> 00:56:01
still need just a bit of more like a

00:55:57 --> 00:56:04
better thinking to do to be able to

00:56:00 --> 00:56:07
attack this problem and to really kind

00:56:03 --> 00:56:08
of enable it so that you can kind of do

00:56:06 --> 00:56:11
good and interesting things with it I

00:56:07 --> 00:56:13
might I could close with a couple things

00:56:10 --> 00:56:16
one thing is that I was going to talk a

00:56:12 --> 00:56:19
little bit more but maybe I'll just kind

00:56:15 --> 00:56:21
of pass with one slide I am a part of a

00:56:18 --> 00:56:23
new company I've got a few companies

00:56:20 --> 00:56:24
outside so this is the latest thing that

00:56:22 --> 00:56:26
we've been working on

00:56:23 --> 00:56:28
it's called optimist right it's working

00:56:25 --> 00:56:31
on autonomous vehicles it's currently in

00:56:27 --> 00:56:33
stock no it just raised like a little

00:56:30 --> 00:56:36
more than five million dollars in seed

00:56:32 --> 00:56:41
round to kind of start to see operations

00:56:35 --> 00:56:43
I am joined the founding team includes a

00:56:40 --> 00:56:44
number of sort of friends Ryan chin for

00:56:42 --> 00:56:47
example I don't know if you guys have

00:56:43 --> 00:56:50
heard of the MIT city car the Spalding

00:56:46 --> 00:56:53
car that was his doctoral thesis he's

00:56:49 --> 00:56:55
been an MIT PI for a while he joined

00:56:52 --> 00:56:57
Optimus Albert Wong is a friend of mine

00:56:54 --> 00:57:00
who we worked together in the urban

00:56:56 --> 00:57:02
challenge he was later a sort of a chief

00:56:59 --> 00:57:03
architect Software Architect at rethink

00:57:01 --> 00:57:05
robotics

00:57:02 --> 00:57:07
then the lead perception engineer at

00:57:04 --> 00:57:11
Google X were project wing and then he

00:57:06 --> 00:57:14
joined Optimus ramiro Romania is a sort

00:57:10 --> 00:57:16
of a designer so he's a layup fellow

00:57:13 --> 00:57:19
from the Harvard Graduate School of

00:57:15 --> 00:57:21
Design as his fellowship they would

00:57:18 --> 00:57:23
invite eight mid-career you know best

00:57:20 --> 00:57:25
mid-career designers so he has that kind

00:57:22 --> 00:57:27
of a background he also built Kito's

00:57:24 --> 00:57:30
ubway system raised two billion dollars

00:57:26 --> 00:57:34
for it Jaynee Larios Berlin is also a

00:57:29 --> 00:57:35
joint MBA and an urban planning master's

00:57:33 --> 00:57:38
from MIT

00:57:34 --> 00:57:41
she was the managing director of

00:57:37 --> 00:57:43
university campus operations of Zipcar

00:57:40 --> 00:57:44
so we kind of started this kind of thing

00:57:42 --> 00:57:46
and thinking about these types of

00:57:43 --> 00:57:48
problems if you're interested send me an

00:57:45 --> 00:57:50
email would be happy to talk to you more

00:57:47 --> 00:57:53
about it I also will tell you one more

00:57:49 --> 00:57:55
thing I am advising a team

00:57:52 --> 00:57:57
it's trying to do Formula SAE

00:57:54 --> 00:57:59
autonomously they're doing it for the

00:57:56 --> 00:58:01
first time this year they're actually

00:57:58 --> 00:58:04
using a lot of deep learning type

00:58:00 --> 00:58:05
algorithm so we're not I was telling

00:58:03 --> 00:58:07
them I'm not really sure if we're deep

00:58:04 --> 00:58:08
learning you're gonna write a little

00:58:06 --> 00:58:09
wave in it because people might come

00:58:07 --> 00:58:11
with all the heuristics and things like

00:58:08 --> 00:58:14
that but I think you know you may VIN it

00:58:10 --> 00:58:15
at people's hearts just say that you're

00:58:13 --> 00:58:16
on the algorithm is deep learning or

00:58:14 --> 00:58:18
something like that so they're doing

00:58:15 --> 00:58:21
that if you're interested please send an

00:58:17 --> 00:58:24
email to autonomous dash F Formula SAE

00:58:20 --> 00:58:25
FSA that I might tell you and they're

00:58:23 --> 00:58:28
working on a number of things you're

00:58:24 --> 00:58:29
more than welcome to join them thank you

00:58:27 --> 00:58:39
so much that's all I have it's exactly

00:58:28 --> 00:58:41
one hour yeah I'm here yep so maybe a

00:58:38 --> 00:58:43
few questions if anybody has questions

00:58:40 --> 00:58:47
o that a lot of this classes of bought

00:58:42 --> 00:58:49
deep learning and in terms of autonomous

00:58:46 --> 00:58:53
vehicles deep learning is mostly focused

00:58:48 --> 00:58:57
on the vision sensor or cameras so how

00:58:52 --> 00:58:59
far away away from a car that safely

00:58:56 --> 00:59:03
navigates the streets of Boston without

00:58:58 --> 00:59:05
lidar and without any mapping so purely

00:59:02 --> 00:59:09
on the sensors using the sensors and

00:59:04 --> 00:59:12
perception so it's a bit of a guess game

00:59:08 --> 00:59:13
to be honest I it wasn't some what the

00:59:11 --> 00:59:17
slides that I kind of passed through but

00:59:12 --> 00:59:20
I am a big believer in computer vision

00:59:16 --> 00:59:23
and I I do not think it's too far away

00:59:19 --> 00:59:27
it just ends up being a bit of a guest

00:59:22 --> 00:59:30
game but it's not like I don't know how

00:59:26 --> 00:59:32
many of you have worked with cameras but

00:59:29 --> 00:59:34
deep learning is one approach you can

00:59:31 --> 00:59:36
also use geometric approaches like you

00:59:33 --> 00:59:39
can use a single camera and the motion

00:59:35 --> 00:59:41
of the car to build a 3d map of an

00:59:38 --> 00:59:43
environment these are not too far away

00:59:40 --> 00:59:46
cameras are actually pretty good sensors

00:59:42 --> 00:59:48
the only problem with cameras is that

00:59:45 --> 00:59:50
hey is just a lot of data and there's

00:59:47 --> 00:59:51
little information and if you need to

00:59:49 --> 00:59:54
fish it out so you need computers to

00:59:50 --> 00:59:57
accompany it it seems like the computers

00:59:53 --> 00:59:59
are coming out so it's still hard to

00:59:56 --> 01:00:01
know but I like I would be surprised if

00:59:58 --> 01:00:03
in ten years you can't build a car that

01:00:00 --> 01:00:05
just has a bunch of cameras and

01:00:02 --> 01:00:06
navigates with cameras period they will

01:00:04 --> 01:00:08
be very surprising to me

01:00:05 --> 01:00:11
it'd be also surprising if it happens

01:00:07 --> 01:00:15
next year like some people are saying

01:00:10 --> 01:00:17
but in between these I you know I would

01:00:14 --> 01:00:19
think you would be able to so once you

01:00:16 --> 01:00:20
like what I would suggest is if any of

01:00:18 --> 01:00:22
you is working with cameras

01:00:19 --> 01:00:24
I would suggest deep learning is an

01:00:21 --> 01:00:26
excellent technique so whilst you I

01:00:23 --> 01:00:28
think you're kind of using it here and

01:00:25 --> 01:00:29
I'm sure you're being surprised as as as

01:00:27 --> 01:00:31
it gives you the kind of information

01:00:28 --> 01:00:33
that you need try out model-based

01:00:30 --> 01:00:36
techniques as well they're also coming

01:00:32 --> 01:00:38
along pretty well so probably a solution

01:00:35 --> 01:00:41
that just integrates them as best as

01:00:37 --> 01:00:43
possible would be viable

01:00:40 --> 01:00:46
I would guess in three to five years I'd

01:00:42 --> 01:00:51
be surprised otherwise it's optimistic

01:00:45 --> 01:00:53
okay anybody have questions this is the

01:00:50 --> 01:00:55
question was an autonomous intersections

01:00:52 --> 01:00:57
what role the communication plays if you

01:00:54 --> 01:00:59
wanted to do crazy things that like I've

01:00:56 --> 01:01:00
shown you you need to make sure

01:00:58 --> 01:01:03
verything communicates but everything

01:00:59 --> 01:01:05
else that would break pretty badly if

01:01:02 --> 01:01:08
you don't do it I would actually imagine

01:01:04 --> 01:01:10
that like one interesting things to

01:01:07 --> 01:01:12
quickly do would be to have cars

01:01:09 --> 01:01:14
communicate with each other to do some

01:01:11 --> 01:01:15
interesting things like not just maybe

01:01:13 --> 01:01:17
intersection but lane following and

01:01:14 --> 01:01:18
things like that like there are a few

01:01:16 --> 01:01:20
things that you may see pretty quickly

01:01:17 --> 01:01:24
with autonomous cars back curriculum in

01:01:19 --> 01:01:26
25 years so this could be either read to

01:01:23 --> 01:01:28
be related so communicate with other

01:01:26 --> 01:01:31
vehicles vehicle to infrastructure

01:01:27 --> 01:01:32
lated I mean you could like the deep

01:01:30 --> 01:01:34
learning and things like that you could

01:01:31 --> 01:01:36
put up a camera on our infrastructure

01:01:33 --> 01:01:38
and people could tune into it the

01:01:35 --> 01:01:40
biggest problems are cybersecurity to be

01:01:37 --> 01:01:41
honest to deploy these things and on the

01:01:39 --> 01:01:43
autonomous vehicles and you could see

01:01:40 --> 01:01:44
things like maybe not with the

01:01:42 --> 01:01:46
communication you could see either

01:01:43 --> 01:01:49
sharing like you know you have a button

01:01:45 --> 01:01:53
you press your timeshare or you can have

01:01:48 --> 01:01:55
sharing with you know like for example

01:01:52 --> 01:01:56
you can use autonomy technology for

01:01:54 --> 01:01:58
safety so that's a different type of

01:01:55 --> 01:02:01
sharing or you can find autonomous

01:01:57 --> 01:02:02
vehicles in isolated environments so

01:02:00 --> 01:02:03
this stuff that you can do with

01:02:01 --> 01:02:06
communication I think you can quickly

01:02:02 --> 01:02:07
see Lane following and maybe at

01:02:05 --> 01:02:09
intersections but things like that and

01:02:06 --> 01:02:11
with autonomy there are certain things

01:02:08 --> 01:02:13
that we might see but they don't involve

01:02:10 --> 01:02:13
communication at all

01:02:13 --> 01:02:22
right let's get start to ask one

01:02:16 --> 01:02:26
more time thank you

01:02:21 --> 01:02:26
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
