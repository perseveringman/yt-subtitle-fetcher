---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "uPUEq8d73JI"
title: "David Silver: AlphaGo, AlphaZero, and Deep Reinforcement Learning | Lex Fridman Podcast #86"
video_url: "https://www.youtube.com/watch?v=uPUEq8d73JI"
thumbnail_url: "https://i.ytimg.com/vi/uPUEq8d73JI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=uPUEq8d73JI"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-04-03T21:16:46.000Z"
upload_date: "2020-04-03"
duration_seconds: 6481
duration_human: "1:48:01"
view_count: 481731
like_count: 9595
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T15:15:55.345Z"
---

# David Silver: AlphaGo, AlphaZero, and Deep Reinforcement Learning | Lex Fridman Podcast #86

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=uPUEq8d73JI
- video_id: uPUEq8d73JI
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-04-03T21:16:46.000Z
- upload_date: 2020-04-03
- duration: 1:48:01
- view_count: 481731
- like_count: 9595
- has_subtitle: true
- language: en
- availability: public
- tags: david silver, deep rl, deepmind, google, reinforcement learning, machine learning, deep learning, alphazero, muzero, artificial intelligence, agi, ai, ai podcast, artificial intelligence podcast, lex fridman, lex podcast, lex mit, lex ai, lex jre, mit ai
- categories: Science & Technology

## Description

David Silver leads the reinforcement learning research group at DeepMind and was lead researcher on AlphaGo, AlphaZero and co-lead on AlphaStar, and MuZero and lot of important work in reinforcement learning.

Support this podcast by signing up with these sponsors:
- MasterClass: https://masterclass.com/lex
- Cash App - use code "LexPodcast" and download:
- Cash App (App Store): https://apple.co/2sPrUHe
- Cash App (Google Play): https://bit.ly/2MlvP5w

EPISODE LINKS:
Reinforcement learning (book): https://amzn.to/2Jwp5zG

PODCAST INFO:
Podcast website:
https://lexfridman.com/podcast
Apple Podcasts:
https://apple.co/2lwqZIr
Spotify:
https://spoti.fi/2nEwCF8
RSS:
https://lexfridman.com/feed/podcast/
Full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

OUTLINE:
0:00 - Introduction
4:09 - First program
11:11 - AlphaGo
21:42 - Rule of the game of Go
25:37 - Reinforcement learning: personal journey
30:15 - What is reinforcement learning?
43:51 - AlphaGo (continued)
53:40 - Supervised learning and self play in AlphaGo
1:06:12 - Lee Sedol retirement from Go play
1:08:57 - Garry Kasparov
1:14:10 - Alpha Zero and self play
1:31:29 - Creativity in AlphaZero
1:35:21 - AlphaZero applications
1:37:59 - Reward functions
1:40:51 - Meaning of life

CONNECT:
- Subscribe to this YouTube channel
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/LexFridmanPage
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
the following is a conversation with

00:00:01 --> 00:00:06
David silver who leads the reinforcement

00:00:03 --> 00:00:10
learning research group a deep mind and

00:00:05 --> 00:00:13
was the lead researcher on alphago alpha

00:00:09 --> 00:00:15
0 and co led the Alpha star and Museum

00:00:12 --> 00:00:17
efforts and a lot of important work in

00:00:14 --> 00:00:21
reinforcement learning in general I

00:00:16 --> 00:00:23
believe alpha zero is one of the most

00:00:20 --> 00:00:25
important accomplishments in the history

00:00:22 --> 00:00:28
of artificial intelligence and David is

00:00:24 --> 00:00:30
one of the key humans who brought alpha

00:00:27 --> 00:00:32
zero to life together with a lot of

00:00:29 --> 00:00:36
other great researchers at deep mind

00:00:31 --> 00:00:38
he's humble kind and brilliant we were

00:00:35 --> 00:00:39
both jet lagged but didn't care and made

00:00:37 --> 00:00:42
it happen

00:00:38 --> 00:00:45
it was a pleasure and truly an honor to

00:00:41 --> 00:00:46
talk with David this conversation was

00:00:44 --> 00:00:49
recorded before the outbreak of the

00:00:45 --> 00:00:50
pandemic for everyone feeling the

00:00:48 --> 00:00:53
medical psychological and financial

00:00:49 --> 00:00:56
burden of this crisis I'm sending love

00:00:52 --> 00:00:59
your way stay strong or in this together

00:00:55 --> 00:01:01
we'll beat this thing this is the

00:00:58 --> 00:01:03
artificial intelligence podcast if you

00:01:00 --> 00:01:06
enjoy it subscribe on youtube review it

00:01:02 --> 00:01:08
with five stars an apple podcast support

00:01:05 --> 00:01:12
on patreon or simply connect with me on

00:01:07 --> 00:01:15
Twitter Alex Friedman spelled Fri DM aen

00:01:11 --> 00:01:17
as usual I'll do a few minutes of as now

00:01:14 --> 00:01:18
and never any ads in the middle they can

00:01:16 --> 00:01:21
break the flow of the conversation I

00:01:17 --> 00:01:24
hope that works for you and doesn't hurt

00:01:20 --> 00:01:27
he listening experience quick summary

00:01:23 --> 00:01:29
of the ads to sponsors masterclass and

00:01:26 --> 00:01:31
cash app please consider supporting the

00:01:28 --> 00:01:34
podcast by signing up to master class

00:01:30 --> 00:01:37
and master class comm slash flex and

00:01:33 --> 00:01:41
ownloading cash app and using code and

00:01:36 --> 00:01:43
Lex podcast this show is presented by

00:01:40 --> 00:01:45
cash app the number one finance app in

00:01:42 --> 00:01:49
the App Store when you get it use code

00:01:44 --> 00:01:51
Lex podcast cash app lets you send money

00:01:48 --> 00:01:53
to friends buy Bitcoin and invest in the

00:01:50 --> 00:01:56
stock market with as little as one

00:01:52 --> 00:01:57
dollar since cash app allows you to buy

00:01:55 --> 00:01:59
Bitcoin let me mention that

00:01:56 --> 00:02:01
cryptocurrency in the context of the

00:01:58 --> 00:02:04
history of money it's fascinating

00:02:00 --> 00:02:06
I recommend a cent of money as a great

00:02:03 --> 00:02:10
book on this history debits and credits

00:02:05 --> 00:02:12
and Ledger's started around 30,000 years

00:02:09 --> 00:02:15
ago the US dollar created over two

00:02:11 --> 00:02:17
hundred years ago and Bitcoin the first

00:02:14 --> 00:02:20
decentralized cryptocurrency at least

00:02:16 --> 00:02:22
just over ten years ago so given that

00:02:19 --> 00:02:24
history cryptocurrency is still very

00:02:21 --> 00:02:26
much in its early days of development

00:02:23 --> 00:02:31
but it's still aiming to and just might

00:02:25 --> 00:02:32
redefine the nature of money so again if

00:02:30 --> 00:02:33
you get cash out from the App Store or

00:02:31 --> 00:02:35
Google Play

00:02:32 --> 00:02:37
and use the code let's podcast you get

00:02:34 --> 00:02:39
en dollars and cash wrap will also

00:02:36 --> 00:02:41
donate ten dollars the first an

00:02:38 --> 00:02:43
organization that is helping to advance

00:02:40 --> 00:02:45
robotics and stem education for young

00:02:42 --> 00:02:47
people around the world

00:02:44 --> 00:02:50
this show is sponsored by masterclass

00:02:46 --> 00:02:53
et up a masterclass complex to get a

00:02:49 --> 00:02:54
discount and to support this podcast in

00:02:52 --> 00:02:57
fact for a limited time now if you sign

00:02:53 --> 00:03:00
up for an all-access pass for a year you

00:02:56 --> 00:03:03
get to get another all-access pass to

00:02:59 --> 00:03:05
share with a friend buy one get one free

00:03:02 --> 00:03:06
when I first heard about masterclass I

00:03:04 --> 00:03:08
thought it was too good to be true

00:03:05 --> 00:03:10
for one hundred eighty dollars a year

00:03:07 --> 00:03:13
you get an all-access pass to watch

00:03:09 --> 00:03:15
courses from to list some of my

00:03:12 --> 00:03:17
favorites Chris Hadfield on space

00:03:14 --> 00:03:19
xploration Neil deGrasse Tyson on

00:03:16 --> 00:03:22
scientific thinking communication will

00:03:18 --> 00:03:24
write the creator of SimCity and Sims on

00:03:21 --> 00:03:28
game design jane goodall on conservation

00:03:24 --> 00:03:30
Carlos Santana on guitar his song Europa

00:03:27 --> 00:03:31
could be the most beautiful guitar song

00:03:29 --> 00:03:34
ever written

00:03:30 --> 00:03:36
garry kasparov on chess daniel negreanu

00:03:33 --> 00:03:38
on poker and many many more Chris

00:03:35 --> 00:03:40
Hadfield explaining how Rockets work and

00:03:37 --> 00:03:42
the experience of being launched into

00:03:39 --> 00:03:45
space alone is worth the money for me

00:03:41 --> 00:03:47
the keys to not be overwhelmed by the

00:03:44 --> 00:03:49
abundance of choice pick three courses

00:03:46 --> 00:03:51
you want to complete watch each of them

00:03:48 --> 00:03:53
all the way through it's not that long

00:03:50 --> 00:03:56
but it's an experience that will stick

00:03:52 --> 00:03:58
with you for a long time I promise it's

00:03:55 --> 00:04:01
easily worth the money you can watch it

00:03:57 --> 00:04:03
on basically any device once again sign

00:04:00 --> 00:04:06
up a master class complex to get a

00:04:02 --> 00:04:08
discount and to support this podcast and

00:04:05 --> 00:04:10
now here's my conversation with David

00:04:07 --> 00:04:12
silver

00:04:09 --> 00:04:14
what was the first program you've ever

00:04:11 --> 00:04:16
written and what programming language

00:04:13 --> 00:04:19
do you remember I remember very clearly

00:04:15 --> 00:04:23
he have my my parents brought home this

00:04:18 --> 00:04:25
BBC modeled B microcomputer it was just

00:04:22 --> 00:04:28
his fascinating thing to me I was about

00:04:24 --> 00:04:31
seven years old and couldn't resist just

00:04:27 --> 00:04:36
playing around with it so I think first

00:04:30 --> 00:04:38
program ever was writing my name out in

00:04:35 --> 00:04:41
different colors and getting it to loop

00:04:37 --> 00:04:43
and repeat that and there was something

00:04:40 --> 00:04:46
magical about that which just led to

00:04:42 --> 00:04:48
more and more how did you think about

00:04:45 --> 00:04:49
computers back then like the magical

00:04:47 --> 00:04:52
aspect of it that you can write a

00:04:48 --> 00:04:56
program and there's this thing that you

00:04:51 --> 00:04:58
just gave birth to it's able to creative

00:04:55 --> 00:05:00
visual elements and live in its own or

00:04:57 --> 00:05:02
did you not think of it in those

00:04:59 --> 00:05:03
romantic notions was it more like oh

00:05:01 --> 00:05:06
that's cool

00:05:02 --> 00:05:08
I can I can solve some puzzles it was

00:05:05 --> 00:05:12
always more than solving puzzles it was

00:05:07 --> 00:05:14
omething where you know there was this

00:05:11 --> 00:05:16
limitless possibilities once you have a

00:05:13 --> 00:05:17
computer in front of you you can do

00:05:15 --> 00:05:19
anything with it that's um I used to

00:05:16 --> 00:05:20
play with Lego with the same feeling you

00:05:18 --> 00:05:22
can make anything you want out of Lego

00:05:19 --> 00:05:23
but even more so with a computer you

00:05:21 --> 00:05:25
know you don't you're not constrained by

00:05:22 --> 00:05:27
the amount of kit you've got and so I

00:05:24 --> 00:05:29
was fascinated by it and started pulling

00:05:26 --> 00:05:30
out there you know the user guide and

00:05:28 --> 00:05:33
the advanced user guide and then

00:05:29 --> 00:05:37
learning so I started in basic and then

00:05:32 --> 00:05:38
you know later 6502 my father was also

00:05:36 --> 00:05:40
became interested in there in this

00:05:37 --> 00:05:42
machine and gave up his career to go

00:05:39 --> 00:05:44
back to school and study for an a

00:05:41 --> 00:05:47
master's degree in in artificial

00:05:43 --> 00:05:49
intelligence funnily enough Essex

00:05:46 --> 00:05:52
University when I was when I was seven

00:05:48 --> 00:05:55
so I was exposed to those things at an

00:05:51 --> 00:05:57
early age he showed me how to program in

00:05:54 --> 00:05:59
Prolog and do things like querying your

00:05:56 --> 00:06:02
family tree and those are some of my

00:05:58 --> 00:06:03
earlier earliest memories of trying to

00:06:01 --> 00:06:06
figure things out on a

00:06:02 --> 00:06:08
computer those are the early steps in

00:06:05 --> 00:06:10
computer science programming but when

00:06:07 --> 00:06:11
did you first fall in love with

00:06:09 --> 00:06:16
artificial intelligence or were the

00:06:11 --> 00:06:18
ideas the dreams of AI I think it was

00:06:15 --> 00:06:20
really when I when I went to study at

00:06:17 --> 00:06:23
university so I was an undergrad at

00:06:19 --> 00:06:28
Cambridge and studying computer science

00:06:22 --> 00:06:30
and and I really started to question you

00:06:27 --> 00:06:31
know what what really are the goals what

00:06:29 --> 00:06:34
's the goal where do we want to go

00:06:30 --> 00:06:38
with with computer science and it seemed

00:06:33 --> 00:06:42
to me that the the only step of major

00:06:37 --> 00:06:44
significance to take was to try and

00:06:41 --> 00:06:46
recreate something akin to human

00:06:43 --> 00:06:49
intelligence if we could do that that

00:06:45 --> 00:06:51
would be a major leap forward and that

00:06:48 --> 00:06:53
idea certainly wasn't the first to have

00:06:50 --> 00:06:56
it but it you know nestled within me

00:06:52 --> 00:06:59
somewhere and and became like a bug you

00:06:55 --> 00:07:01
know I really wanted to to crack that

00:06:58 --> 00:07:02
problem so you thought it was like you

00:07:00 --> 00:07:05
had a notion that this is something that

00:07:01 --> 00:07:08
human beings can do it is possible to

00:07:04 --> 00:07:10
create an intelligent machine well I

00:07:07 --> 00:07:14
mean unless you believe in something

00:07:09 --> 00:07:16
metaphysical then what are our brains

00:07:13 --> 00:07:20
doing well at some level their

00:07:15 --> 00:07:23
information processing systems which are

00:07:19 --> 00:07:24
able to take whatever information is in

00:07:22 --> 00:07:25
there transform it through some form of

00:07:23 --> 00:07:27
program

00:07:24 --> 00:07:29
and produce some kind of output which

00:07:26 --> 00:07:30
enables that that human being to do all

00:07:28 --> 00:07:34
the amazing things that they can do in

00:07:29 --> 00:07:36
this incredible world so so then do you

00:07:33 --> 00:07:39
remember the first time you've written a

00:07:35 --> 00:07:41
program that because you also had an

00:07:38 --> 00:07:43
interesting games do you remember the

00:07:40 --> 00:07:47
first time you were in the program that

00:07:42 --> 00:07:51
beat you in a game said I won't beat you

00:07:46 --> 00:07:55
at anything sort of achieved Super David

00:07:50 --> 00:07:57
silver level performance so I used to

00:07:54 --> 00:08:01
work in the games industry so for five

00:07:56 --> 00:08:04
years I programmed games for my first

00:08:00 --> 00:08:07
job so it was a amazing opportunity to

00:08:03 --> 00:08:11
get involved in a startup company and so

00:08:06 --> 00:08:14
I I was involved in in building AI at

00:08:10 --> 00:08:19
hat time and so for sure there was a

00:08:13 --> 00:08:20
sense of building handcrafted what

00:08:18 --> 00:08:22
people used to call AI in the games

00:08:19 --> 00:08:24
industry which i think is not really

00:08:21 --> 00:08:26
what we might think of as AI and its

00:08:23 --> 00:08:30
fullest sense but something which is

00:08:25 --> 00:08:32
able to to take actions and in a way

00:08:29 --> 00:08:34
which which makes things interesting and

00:08:31 --> 00:08:37
challenging for their for the for the

00:08:33 --> 00:08:39
human player and at that time I was able

00:08:36 --> 00:08:41
to build you know these handcrafted

00:08:38 --> 00:08:44
agents which in certain limited cases

00:08:40 --> 00:08:47
could do things which which were able to

00:08:43 --> 00:08:49
do better than me but mostly in these

00:08:46 --> 00:08:50
kind of twitch like scenarios where

00:08:48 --> 00:08:52
they were able to do things faster

00:08:49 --> 00:08:56
or because they had some pattern which

00:08:51 --> 00:08:59
was able to exploit repeatedly I think

00:08:55 --> 00:09:02
if we're talking about real AI the first

00:08:58 --> 00:09:06
experience for me came after that when I

00:09:01 --> 00:09:08
realized that this path I was on

00:09:05 --> 00:09:10
wasn't taking me towards it wasn't it

00:09:07 --> 00:09:12
wasn't dealing with that bug which I

00:09:09 --> 00:09:14
still had inside me to really understand

00:09:11 --> 00:09:16
intelligence and try and and try and

00:09:13 --> 00:09:18
solve it everything people were doing in

00:09:15 --> 00:09:22
games was you know short-term fixes

00:09:17 --> 00:09:24
rather than long-term vision and so I

00:09:21 --> 00:09:26
went back to study for my PhD which was

00:09:23 --> 00:09:28
fairly enough trying to apply

00:09:25 --> 00:09:31
reinforcement learning to the game of go

00:09:27 --> 00:09:33
and I built my first go program using

00:09:30 --> 00:09:35
reinforcement learning a system which

00:09:32 --> 00:09:38
would by trial and error play against

00:09:34 --> 00:09:41
itself and was able to learn

00:09:37 --> 00:09:43
which patterns were actually helpful to

00:09:40 --> 00:09:45
predict whether it's going to win or

00:09:42 --> 00:09:47
lose the game and then choose the moves

00:09:44 --> 00:09:48
that led to the combination of patterns

00:09:46 --> 00:09:50
that would mean that you're more likely

00:09:47 --> 00:09:54
to win in that system that system beat

00:09:49 --> 00:09:57
me how did that make you feel make me

00:09:53 --> 00:10:00
feel good I was there as sort of the

00:09:56 --> 00:10:02
yeah then is the it's a mix of a sort of

00:09:59 --> 00:10:05
excitement and was there a tinge of sort

00:10:01 --> 00:10:08
of like almost like a fearful aw you

00:10:04 --> 00:10:11
know it's like in space 2001 Space

00:10:07 --> 00:10:16
Odyssey kind of realizing that you've

00:10:10 --> 00:10:19
created something that there's you know

00:10:15 --> 00:10:20
that is that's achieved human level

00:10:18 --> 00:10:23
intelligence in this one particular

00:10:19 --> 00:10:25
little task and in that case I suppose a

00:10:22 --> 00:10:26
neural networks weren't involved there

00:10:24 --> 00:10:30
were no neural networks in those days

00:10:25 --> 00:10:33
this was pre deep learning revolution

00:10:29 --> 00:10:34
but it was a principled self learning

00:10:32 --> 00:10:38
system based on a lot of the principles

00:10:33 --> 00:10:41
which which people are still using in

00:10:37 --> 00:10:42
deep reinforcement learning how did I

00:10:40 --> 00:10:46
feel

00:10:41 --> 00:10:49
I I think I found it immensely

00:10:45 --> 00:10:51
satisfying that a system which was able

00:10:48 --> 00:10:53
to learn from first principles for

00:10:50 --> 00:10:57
itself was able to reach the point that

00:10:52 --> 00:10:59
it was understanding this domain better

00:10:56 --> 00:11:02
than better than I could and able to

00:10:58 --> 00:11:05
utwit me I don't think it was a sense

00:11:01 --> 00:11:07
of or it was a sense that satisfaction

00:11:04 --> 00:11:11
that this that's something I felt should

00:11:06 --> 00:11:13
work had worked so to me alphago and I

00:11:10 --> 00:11:16
don't know how else to put it but to me

00:11:12 --> 00:11:19
alphago and alpha a girl zero mastery in

00:11:15 --> 00:11:21
the game of girl is again to me the most

00:11:18 --> 00:11:24
profound and inspiring moment in the

00:11:20 --> 00:11:26
history of artificial intelligence so

00:11:23 --> 00:11:29
you're one of the key people behind this

00:11:25 --> 00:11:31
achievement and I'm Russian so I really

00:11:28 --> 00:11:34
felt the first sort of seminal

00:11:30 --> 00:11:39
achievement one deep blue beat garry

00:11:33 --> 00:11:42
kasparov in 1987 so as far as I know the

00:11:38 --> 00:11:44
AI community at that point largely saw

00:11:41 --> 00:11:46
the game of Go was unbeatable in AI

00:11:43 --> 00:11:48
using the the sort of the state of the

00:11:45 --> 00:11:51
art to brute force methods search

00:11:47 --> 00:11:52
methods even if you consider at least

00:11:50 --> 00:11:54
he way I saw it

00:11:51 --> 00:11:58
even if you consider arbitrary

00:11:54 --> 00:12:00
exponential ski scaling of compute go

00:11:57 --> 00:12:04
would still not be solvable hence why it

00:11:59 --> 00:12:07
was thought to be impossible so given

00:12:03 --> 00:12:10
that the game of go was impossible to to

00:12:06 --> 00:12:12
master one was the dream for you you

00:12:09 --> 00:12:15
just mentioned your PG thesis of

00:12:11 --> 00:12:16
building the system that plays go what

00:12:14 --> 00:12:18
was the dream for you that you could

00:12:15 --> 00:12:21
actually build a computer program that

00:12:17 --> 00:12:23
achieves world-class not necessarily

00:12:20 --> 00:12:26
beat the world champion but I cheesed

00:12:22 --> 00:12:28
that kind of level of playing go first

00:12:25 --> 00:12:31
of all thank you that's very kind West

00:12:27 --> 00:12:34
and funnily enough I just came from a

00:12:31 --> 00:12:36
panel where I was actually in a

00:12:34 --> 00:12:38
conversation with Garry Kasparov and

00:12:35 --> 00:12:40
Marie Campbell who was the author of

00:12:37 --> 00:12:44
deep blue and it was their first meeting

00:12:39 --> 00:12:46
together since the since the match

00:12:43 --> 00:12:50
yesterday so I'm literally fresh from

00:12:45 --> 00:12:52
that experience so these are amazing

00:12:49 --> 00:12:55
moments when they happen but where did

00:12:51 --> 00:12:57
it all start well for me it started when

00:12:54 --> 00:12:59
I became fascinated in the game of go so

00:12:56 --> 00:13:01
go for me I've grown up playing games

00:12:58 --> 00:13:04
I've always had a fascination in in in

00:13:01 --> 00:13:07
board games I played chess as a kid I

00:13:03 --> 00:13:09
played Scrabble as a kid when I was at

00:13:06 --> 00:13:11
university I discovered the game of go

00:13:08 --> 00:13:13
and and to me it just blew all of those

00:13:10 --> 00:13:15
other games out of the water it was just

00:13:12 --> 00:13:17
so deep and profound in its in its

00:13:14 --> 00:13:23
complexity with endless levels to it

00:13:16 --> 00:13:27
what I discovered was that I could

00:13:22 --> 00:13:29
evote endless hours to this game and I

00:13:26 --> 00:13:31
knew in my heart of hearts that no

00:13:28 --> 00:13:33
matter how many hours I would devote to

00:13:30 --> 00:13:36
it I would never become a you know a

00:13:32 --> 00:13:38
grandmaster or there was another path

00:13:35 --> 00:13:40
and the other path was to try and

00:13:37 --> 00:13:42
understand how you could get some other

00:13:39 --> 00:13:44
intelligence to play this this game

00:13:41 --> 00:13:46
better than I would be able to and so

00:13:43 --> 00:13:49
even in those days I had this idea that

00:13:45 --> 00:13:51
you know what if what if it was possible

00:13:48 --> 00:13:53
to build a program that could crack this

00:13:50 --> 00:13:56
and as I started to explore the domain I

00:13:52 --> 00:14:01
discovered that you know this was really

00:13:55 --> 00:14:03
the domain where people felt deeply that

00:14:00 --> 00:14:06
if progress could be made and go it

00:14:02 --> 00:14:09
really mean a giant leap forward for a

00:14:05 --> 00:14:11
I it was the the challenge where all

00:14:08 --> 00:14:14
other approaches had failed you know

00:14:10 --> 00:14:15
this is coming out of the area you

00:14:13 --> 00:14:18
mentioned which was in some sense their

00:14:14 --> 00:14:20
the golden era for further classical

00:14:17 --> 00:14:23
methods of a I like heuristic search in

00:14:19 --> 00:14:25
the 90s you know they all they all fell

00:14:22 --> 00:14:28
one after another not just chess with

00:14:24 --> 00:14:29
deep blue but checkers backgammon

00:14:27 --> 00:14:32
Othello

00:14:28 --> 00:14:36
there were numerous cases where where

00:14:31 --> 00:14:37
systems built on top of heuristic search

00:14:35 --> 00:14:39
methods with you know his

00:14:36 --> 00:14:41
high-performance systems have been able

00:14:38 --> 00:14:43
to defeat the human world champion in

00:14:40 --> 00:14:46
each of those domains and yet in that

00:14:42 --> 00:14:50
same time period there was a million

00:14:45 --> 00:14:52
dollar prize available for the game of

00:14:49 --> 00:14:54
go for the first system to be a human

00:14:51 --> 00:14:56
professional player and at the end of

00:14:53 --> 00:15:00
that time period in year 2000 when the

00:14:55 --> 00:15:01
prize expired the strongest go program

00:14:59 --> 00:15:04
in the world was defeated by a

00:15:00 --> 00:15:07
nine-year-old child when that nine year

00:15:03 --> 00:15:08
old child was giving 9 free moves to the

00:15:06 --> 00:15:11
computer at the start of the game and to

00:15:07 --> 00:15:13
try and even things up yeah and computer

00:15:10 --> 00:15:17
go X but beat that strongest same

00:15:12 --> 00:15:19
strongest program with 29 handicaps

00:15:16 --> 00:15:22
tones 29 free moves so that's what the

00:15:18 --> 00:15:24
state of affairs was when I became

00:15:21 --> 00:15:28
interested in this problem in around

00:15:23 --> 00:15:31
2000 and 2003 when I I start started

00:15:27 --> 00:15:33
working computer go there was nothing

00:15:30 --> 00:15:34
they were there was just there was very

00:15:32 --> 00:15:37
little in the way of progress

00:15:33 --> 00:15:40
towards meaningful performance again

00:15:36 --> 00:15:43
anything approaching human level and so

00:15:39 --> 00:15:44
people they it wasn't through lack of

00:15:42 --> 00:15:47
effort people have tried many many

00:15:43 --> 00:15:49
things and so there was a strong sense

00:15:46 --> 00:15:51
that that something different would be

00:15:48 --> 00:15:52
required for go than then had been

00:15:50 --> 00:15:54
eeded for all of these other domains

00:15:51 --> 00:15:57
where I had a I had been successful and

00:15:53 --> 00:15:59
maybe the single clearest example is

00:15:56 --> 00:16:03
that that go unlike those other domains

00:15:58 --> 00:16:05
had this kind of intuitive property that

00:16:02 --> 00:16:08
a go player would look at a position and

00:16:04 --> 00:16:11
say hey you know here's this mess of

00:16:07 --> 00:16:14
black and white stones but from this

00:16:10 --> 00:16:16
mess oh I can I can predict that that's

00:16:13 --> 00:16:17
this part of the board has become my

00:16:15 --> 00:16:20
territory this part of the boards become

00:16:16 --> 00:16:20
your territory and I've got this overall

00:16:19 --> 00:16:22
sense

00:16:19 --> 00:16:24
I'm going to win and this is about the

00:16:21 --> 00:16:26
right move to play and that intuitive

00:16:23 --> 00:16:28
sense of judgment of being able to

00:16:25 --> 00:16:32
evaluate what's going on in a position

00:16:27 --> 00:16:33
it was pivotal to humans being able to

00:16:31 --> 00:16:36
play this game and something that people

00:16:32 --> 00:16:38
had no idea how to put into computers so

00:16:35 --> 00:16:39
this question of how to evaluate in a

00:16:37 --> 00:16:43
position how to come up with these

00:16:38 --> 00:16:46
intuitive judgments was the key reason

00:16:42 --> 00:16:49
why go was so hard in addition to its

00:16:45 --> 00:16:52
enormous search space and the reason why

00:16:48 --> 00:16:53
methods which had succeeded so well

00:16:51 --> 00:16:55
elsewhere

00:16:52 --> 00:16:58
failed and go and so people really felt

00:16:54 --> 00:16:59
deep down that that you know in order to

00:16:57 --> 00:17:01
crack go we would need to get something

00:16:58 --> 00:17:03
akin to human intuition and if we got

00:17:00 --> 00:17:06
something akin to human intuition we'd

00:17:02 --> 00:17:08
be able to self you know much many many

00:17:05 --> 00:17:11
more problems in AI so to me that was

00:17:07 --> 00:17:12
the moment where it's like okay this is

00:17:10 --> 00:17:14
not just about playing the game of Go

00:17:11 --> 00:17:17
this is about something profound and it

00:17:13 --> 00:17:18
was back to that bug which had been

00:17:16 --> 00:17:20
itching me all those years now this is

00:17:17 --> 00:17:22
the opportunity to do something

00:17:19 --> 00:17:25
meaningful and and transformative and

00:17:21 --> 00:17:26
I guess a dream was born that's a

00:17:24 --> 00:17:29
really interesting way to put it almost

00:17:25 --> 00:17:31
his realization that you need to find

00:17:28 --> 00:17:35
formulate girls are kind of a prediction

00:17:30 --> 00:17:37
problem versus a search problem was the

00:17:34 --> 00:17:40
intuition I mean I maybe that's the

00:17:36 --> 00:17:44
wrong crude term but the to give it us

00:17:39 --> 00:17:47
the ability to kind of Intuit things

00:17:43 --> 00:17:51
about positional structure of the board

00:17:46 --> 00:17:55
well okay but what about the learning

00:17:50 --> 00:17:57
part of it did you have a sense that you

00:17:54 --> 00:17:59
have to that learning has to be part of

00:17:56 --> 00:18:02
the system again something that hasn't

00:17:58 --> 00:18:05
really as as far as I think except with

00:18:01 --> 00:18:07
TD Guerin and in the 90s was RL a little

00:18:04 --> 00:18:09
bit hasn't been part of those

00:18:06 --> 00:18:12
state-of-the-art game playing systems so

00:18:08 --> 00:18:16
I strongly felt that learning would be

00:18:11 --> 00:18:17
necessary and that's why my my PhD topic

00:18:15 --> 00:18:19
back then was trying to apply

00:18:16 --> 00:18:22
reinforcement learning to the game of CO

00:18:18 --> 00:18:26
and not just learning of any type but I

00:18:21 --> 00:18:28
felt that the only way to really have a

00:18:25 --> 00:18:31
system to progress beyond human levels

00:18:27 --> 00:18:32
of performance wouldn't just be to mimic

00:18:30 --> 00:18:34
how humans do it but to understand for

00:18:31 --> 00:18:37
themselves

00:18:33 --> 00:18:38
and how else can a machine hope to

00:18:36 --> 00:18:40
understand what's going on except

00:18:37 --> 00:18:41
hrough learning if you're not learning

00:18:39 --> 00:18:42
what else are you doing while you're

00:18:40 --> 00:18:45
putting all the knowledge into the

00:18:41 --> 00:18:49
system and that just feels like a

00:18:44 --> 00:18:51
something which decades of AI have told

00:18:48 --> 00:18:53
us is is maybe not a dead end but

00:18:50 --> 00:18:55
certainly has a ceiling to the

00:18:52 --> 00:18:56
capabilities it's known as the you know

00:18:54 --> 00:18:58
ledge acquisition bottleneck that

00:18:55 --> 00:19:00
here the more you try to put into

00:18:57 --> 00:19:03
something the more brittle the system

00:18:59 --> 00:19:04
becomes and and so you just have to have

00:19:02 --> 00:19:05
learning you have to have learning

00:19:03 --> 00:19:08
that's the only way you're going to be

00:19:04 --> 00:19:10
able to get a system which has

00:19:07 --> 00:19:12
ufficient knowledge in it you know

00:19:09 --> 00:19:15
millions and millions of pieces of

00:19:11 --> 00:19:16
knowledge billions trillions of a form

00:19:14 --> 00:19:18
that it can actually apply for itself

00:19:15 --> 00:19:20
and understand how those billions and

00:19:17 --> 00:19:22
trillions of pieces of knowledge can be

00:19:19 --> 00:19:24
leveraged in a way which will actually

00:19:21 --> 00:19:29
lead it towards its goal without

00:19:23 --> 00:19:31
conflict or or other issues yeah I mean

00:19:28 --> 00:19:33
if I put myself back in there in that

00:19:30 --> 00:19:35
ime I just wouldn't think like that

00:19:32 --> 00:19:38
without a good demonstration of RL I

00:19:34 --> 00:19:40
would I would think more in the symbolic

00:19:37 --> 00:19:44
AI like that though it would not

00:19:39 --> 00:19:47
learning but sort of a simulation of

00:19:43 --> 00:19:48
knowledge base like a growing knowledge

00:19:46 --> 00:19:52
base but it would still be sort of

00:19:47 --> 00:19:55
pattern based lot like basically have

00:19:51 --> 00:19:56
little rules that you kind of assemble

00:19:54 --> 00:19:59
together into a large knowledge base

00:19:56 --> 00:20:01
well in a sense that was the state of

00:19:58 --> 00:20:03
the art back then so if you look at the

00:20:00 --> 00:20:06
go programs which had been competing for

00:20:02 --> 00:20:09
this prize I mentioned they were an

00:20:05 --> 00:20:12
assembly of different specialized

00:20:08 --> 00:20:14
systems some of which used huge amounts

00:20:11 --> 00:20:16
of human knowledge to describe how you

00:20:13 --> 00:20:17
should play the opening how you should

00:20:15 --> 00:20:20
all the different patterns that were

00:20:16 --> 00:20:24
quired to to play well in the game of

00:20:19 --> 00:20:27
Go endgame Theory combinatorial game

00:20:23 --> 00:20:30
theory and combined with more principled

00:20:26 --> 00:20:32
search based methods which we're trying

00:20:29 --> 00:20:34
to solve for particular sub parts of the

00:20:31 --> 00:20:38
game like life and death

00:20:33 --> 00:20:40
connecting groups together all these

00:20:37 --> 00:20:42
amazing subproblems that just emerged in

00:20:39 --> 00:20:44
the game of Go there were there were

00:20:41 --> 00:20:46
different pieces all put together into

00:20:43 --> 00:20:47
this like collage which together would

00:20:45 --> 00:20:52
try and

00:20:46 --> 00:20:55
play against a human and although not

00:20:51 --> 00:20:57
all of the pieces were handcrafted the

00:20:54 --> 00:20:58
overall effect was nevertheless still

00:20:56 --> 00:21:01
brittle and it was hard to make all

00:20:57 --> 00:21:04
these pieces work well together and so

00:21:00 --> 00:21:05
really what I was pressing for and the

00:21:03 --> 00:21:07
main innovation of the approach they

00:21:04 --> 00:21:11
took was to go back to first principles

00:21:06 --> 00:21:13
and say well let's let's back off that

00:21:10 --> 00:21:17
and try and find a principled approach

00:21:12 --> 00:21:19
where the system can learn for itself it

00:21:16 --> 00:21:21
just from the outcome like you know

00:21:18 --> 00:21:22
learn for itself if you try something

00:21:20 --> 00:21:26
did that did that help or did it not

00:21:21 --> 00:21:27
help and only through that procedure can

00:21:25 --> 00:21:29
you arrive at knowledge which is which

00:21:26 --> 00:21:31
is verified the system has to verify it

00:21:28 --> 00:21:33
for itself not relying on any other

00:21:30 --> 00:21:37
third party to say this is right or this

00:21:32 --> 00:21:39
wrong so that principle was already

00:21:36 --> 00:21:42
ou know very important in those days

00:21:38 --> 00:21:45
but unfortunately we were missing some

00:21:41 --> 00:21:48
important pieces back then so before we

00:21:44 --> 00:21:50
dive into may be discussing the beauty

00:21:47 --> 00:21:52
of reinforcement learning let's think

00:21:49 --> 00:21:55
it's the back who kind of skipped

00:21:51 --> 00:22:00
it a bit but the rules of the

00:21:54 --> 00:22:03
game of go what's the the elements of it

00:21:59 --> 00:22:07
perhaps contrasting to chess that sort

00:22:02 --> 00:22:10
of you really enjoyed as a human being

00:22:06 --> 00:22:14
and also that make it really difficult

00:22:09 --> 00:22:16
as a a I machine learning problem so the

00:22:13 --> 00:22:19
game of CO was has remarkably simple

00:22:15 --> 00:22:21
rules if that's so simple that people

00:22:18 --> 00:22:23
have speculated that if we were to meet

00:22:20 --> 00:22:24
alien life at some point that we

00:22:22 --> 00:22:25
wouldn't be able to communicate with

00:22:23 --> 00:22:27
em but we would be able to play hello

00:22:24 --> 00:22:30
go with that probably have discovered

00:22:26 --> 00:22:33
the same rule set yeah so the game is

00:22:29 --> 00:22:34
played on a on a 19 by 19 grid and you

00:22:32 --> 00:22:37
play on the intersections of the grid

00:22:33 --> 00:22:38
and the players take turns and the aim

00:22:36 --> 00:22:41
of the game is very simple it's to

00:22:37 --> 00:22:43
surround as much territory as you can as

00:22:40 --> 00:22:45
many of these intersections with your

00:22:42 --> 00:22:48
stones and just around more than your

00:22:45 --> 00:22:50
opponent does and the only nuance to the

00:22:47 --> 00:22:52
game is that if you fully surround your

00:22:49 --> 00:22:53
opponent's piece then you get to capture

00:22:51 --> 00:22:55
it and remove it from the board and it

00:22:52 --> 00:22:57
counts as your own territory now from

00:22:54 --> 00:22:59
those very simple rules immense

00:22:56 --> 00:23:01
complexity arises it's kind of profound

00:22:58 --> 00:23:03
strategies in

00:23:00 --> 00:23:06
how to surround territory how to kind of

00:23:02 --> 00:23:09
trade-off between making solid territory

00:23:05 --> 00:23:10
ourself now compared to building up

00:23:08 --> 00:23:12
influence that will help you acquire

00:23:09 --> 00:23:14
territory later in the game how to

00:23:11 --> 00:23:18
connect groups together how to keep your

00:23:13 --> 00:23:21
own groups alive which which patterns of

00:23:17 --> 00:23:22
stones are most useful compared to

00:23:20 --> 00:23:25
thers

00:23:21 --> 00:23:28
there's just immense knowledge and human

00:23:24 --> 00:23:29
go players have played this game for it

00:23:27 --> 00:23:31
was discovered thousands of years ago

00:23:28 --> 00:23:33
and human go players have built up its

00:23:30 --> 00:23:36
immense knowledge base over over the

00:23:32 --> 00:23:38
years it's studied very deeply and

00:23:35 --> 00:23:40
played by something like 50 million

00:23:37 --> 00:23:43
players across the world mostly in China

00:23:39 --> 00:23:45
Japan and Korea where it's a important

00:23:42 --> 00:23:47
part of a culture so much so that it's

00:23:44 --> 00:23:51
considered one of the four ancient arts

00:23:46 --> 00:23:52
that was required by Chinese scholars so

00:23:50 --> 00:23:55
there's a deep history there but there's

00:23:51 --> 00:23:58
interesting quality so if I is it a

00:23:54 --> 00:24:00
comparative chess chess is in the same

00:23:57 --> 00:24:02
way as it is in Chinese culture of a

00:23:59 --> 00:24:05
goal in chess in Russia is also

00:24:01 --> 00:24:07
considered one of the secret arts so if

00:24:04 --> 00:24:10
we contrast sort of go with chess as

00:24:06 --> 00:24:12
interesting qualities about go maybe you

00:24:09 --> 00:24:15
can correct me if I'm wrong but the

00:24:11 --> 00:24:21
valuation of a particular static board

00:24:14 --> 00:24:22
is not as reliable like you can't in

00:24:20 --> 00:24:26
chess you can kind of assign points to

00:24:21 --> 00:24:28
the different units and it's kind of a

00:24:25 --> 00:24:31
pretty good measure of who's one who's

00:24:27 --> 00:24:32
losing it's not so clear yeah so this

00:24:30 --> 00:24:34
game of the HOH you know you find

00:24:31 --> 00:24:35
yourself in a situation where both

00:24:33 --> 00:24:38
players have played the same number of

00:24:34 --> 00:24:40
stones actually captures a strong level

00:24:37 --> 00:24:42
of play happen very rarely which means

00:24:39 --> 00:24:43
that any moment in the game you've got

00:24:41 --> 00:24:45
he same number of white stones and

00:24:42 --> 00:24:47
black stones and the only thing which

00:24:44 --> 00:24:50
differentiates how well you're doing is

00:24:46 --> 00:24:51
this intuitive sense of you know where

00:24:49 --> 00:24:54
are the territories ultimately going to

00:24:50 --> 00:24:55
form on this board and when you if you

00:24:53 --> 00:24:59
look at the complexity of a real go

00:24:54 --> 00:25:01
position you know it's it's mind

00:24:58 --> 00:25:03
boggling that kind of question of what

00:25:00 --> 00:25:05
will happen in in 300 moves from now

00:25:02 --> 00:25:06
hen you when you see just a scattering

00:25:04 --> 00:25:10
of twenty white and black stones

00:25:05 --> 00:25:14
intermingled and and so that that

00:25:09 --> 00:25:15
challenge is the reason why position of

00:25:13 --> 00:25:17
value

00:25:14 --> 00:25:19
is so hard in go compared to two other

00:25:16 --> 00:25:21
games in addition to that has an

00:25:18 --> 00:25:24
enormous search space so there's around

00:25:20 --> 00:25:25
ten to one hundred and seventy positions

00:25:23 --> 00:25:29
in the game of go that's an astronomical

00:25:24 --> 00:25:30
number and that search spaces is so

00:25:28 --> 00:25:32
great that traditional heuristic search

00:25:29 --> 00:25:34
methods that were so successful and

00:25:31 --> 00:25:36
things like deep blue and and chess

00:25:33 --> 00:25:40
programs just kind of fall over and go

00:25:35 --> 00:25:43
so a which pointed reinforcement

00:25:39 --> 00:25:45
learning enter your life your research

00:25:42 --> 00:25:47
life your way of thinking we just talked

00:25:44 --> 00:25:49
about learning but reinforcement

00:25:46 --> 00:25:52
learning is very particular kind of

00:25:48 --> 00:25:54
learning one that's both philosophically

00:25:51 --> 00:25:56
sort of profound yeah but also one

00:25:53 --> 00:25:58
that's pretty difficult to get to work

00:25:55 --> 00:26:00
as if we look back in the earth at least

00:25:57 --> 00:26:02
he early days so when did that enter

00:25:59 --> 00:26:06
your life and how did that work progress

00:26:01 --> 00:26:08
o I had just finished working in the

00:26:05 --> 00:26:13
games industry this startup company and

00:26:07 --> 00:26:15
I took I took a year out to discover for

00:26:12 --> 00:26:17
myself exactly which path I wanted to

00:26:14 --> 00:26:19
take I knew I wanted to study

00:26:16 --> 00:26:21
intelligence but I wasn't sure what that

00:26:18 --> 00:26:23
meant at that stage I really didn't feel

00:26:20 --> 00:26:26
had the tools to decide on exactly which

00:26:22 --> 00:26:29
path I wants to follow so during that

00:26:25 --> 00:26:32
year I I read a lot and one of the

00:26:28 --> 00:26:34
things I read was Saturn Umberto the

00:26:31 --> 00:26:36
sort of seminal tech spec are an

00:26:33 --> 00:26:42
introduction to reinforcement learning

00:26:35 --> 00:26:45
and when I read that textbook I I just

00:26:41 --> 00:26:48
had this resonating feeling that this is

00:26:44 --> 00:26:51
what I understood intelligence to be and

00:26:47 --> 00:26:54
this was the path that I felt would be

00:26:50 --> 00:27:00
necessary to go down to make progress in

00:26:53 --> 00:27:03
AI so I got in touch with rich Saturn

00:26:59 --> 00:27:07
and asked him if he would be interested

00:27:02 --> 00:27:12
in supervising me on a PhD thesis in in

00:27:06 --> 00:27:16
computer go and he he basically said

00:27:11 --> 00:27:20
that if he's still alive he'd be happy

00:27:15 --> 00:27:22
to but unfortunately he'd been you know

00:27:19 --> 00:27:23
struggling with very serious cancer for

00:27:21 --> 00:27:25
some years and he really wasn't

00:27:22 --> 00:27:27
confident at that stage that he'd even

00:27:24 --> 00:27:28
be around to see the end event but

00:27:26 --> 00:27:30
fortunately

00:27:27 --> 00:27:33
that part of the story worked out very

00:27:29 --> 00:27:35
happily and I found myself out there in

00:27:32 --> 00:27:36
Alberta they've got a great games group

00:27:34 --> 00:27:40
out there with a history of fantastic

00:27:36 --> 00:27:42
working in board games as well as rich

00:27:39 --> 00:27:44
that in the father of RL so it was the

00:27:41 --> 00:27:48
natural place for me to go in some

00:27:43 --> 00:27:50
sense to study this question and the

00:27:47 --> 00:27:51
more I looked into it the more the more

00:27:49 --> 00:27:55
strongly ie

00:27:50 --> 00:27:58
I felt that this wasn't just the path to

00:27:54 --> 00:27:59
progress in computer go but really you

00:27:57 --> 00:28:05
know this this was the thing I'd been

00:27:58 --> 00:28:07
looking for this was really an

00:28:04 --> 00:28:10
opportunity to to frame what

00:28:06 --> 00:28:13
intelligence means like what does what

00:28:09 --> 00:28:15
are the goals of AI in a clear single

00:28:12 --> 00:28:17
clear problem definition such that if

00:28:14 --> 00:28:20
we're able to solve that play a single

00:28:16 --> 00:28:23
problem definition in some sense we've

00:28:19 --> 00:28:26
cracked the problem of AI so to you

00:28:22 --> 00:28:28
reinforcement learning ideas at least

00:28:25 --> 00:28:31
sort of echoes of it would be at the

00:28:27 --> 00:28:33
core of intelligence it is as a core of

00:28:30 --> 00:28:36
intelligence and if we ever create in a

00:28:32 --> 00:28:37
human level intelligence system it would

00:28:35 --> 00:28:39
be at the core of that kind of system

00:28:36 --> 00:28:41
let me say it this way that I think I

00:28:38 --> 00:28:44
think it's helpful to separate out the

00:28:40 --> 00:28:47
problem from the solution so I see the

00:28:43 --> 00:28:50
problem of intelligence I would say it

00:28:46 --> 00:28:52
can be formalized as the reinforcement

00:28:49 --> 00:28:56
learning problem and that that

00:28:51 --> 00:28:57
formalization is enough to capture most

00:28:55 --> 00:29:00
if not all of the things that we mean by

00:28:56 --> 00:29:01
intelligence that that they can all be

00:28:59 --> 00:29:03
brought within this this this framework

00:29:00 --> 00:29:06
and gives us a way to access them in a

00:29:02 --> 00:29:09
meaningful way that allows us as as

00:29:05 --> 00:29:11
cientists to understand intelligence

00:29:08 --> 00:29:15
and us as computer scientists to to

00:29:10 --> 00:29:17
build them and so in that sense I feel

00:29:14 --> 00:29:22
that it gives us a path maybe not the

00:29:16 --> 00:29:25
only path but a path towards AI and so

00:29:21 --> 00:29:28
do I think that any system in the future

00:29:24 --> 00:29:30
that that's you know sold AI would would

00:29:27 --> 00:29:32
have to have RL within it well I think

00:29:30 --> 00:29:35
if you ask that you're asking about the

00:29:31 --> 00:29:37
solution methods I would say that if we

00:29:34 --> 00:29:39
have such a thing it would be a solution

00:29:36 --> 00:29:42
to the RL problem now what particular

00:29:38 --> 00:29:43
methods have been used to get there

00:29:41 --> 00:29:45
well we should keep an open mind about

00:29:42 --> 00:29:48
he best approaches to actually solve

00:29:44 --> 00:29:50
any problem and you know the things we

00:29:47 --> 00:29:52
have right now for reinforcement

00:29:49 --> 00:29:54
learning maybe maybe then maybe I

00:29:51 --> 00:29:56
believe they've got a lot of legs but

00:29:53 --> 00:29:57
maybe we're missing some things maybe

00:29:55 --> 00:29:59
there's gonna be better ideas I think we

00:29:56 --> 00:30:02
should keep her you know let's remain

00:29:58 --> 00:30:04
modest and we're at the early days of

00:30:01 --> 00:30:06
this field and and there are many

00:30:03 --> 00:30:08
amazing discoveries ahead of us for sure

00:30:05 --> 00:30:10
the specifics especially of the

00:30:07 --> 00:30:11
different kinds of our ell approaches

00:30:09 --> 00:30:13
currently there could be other things

00:30:10 --> 00:30:16
there followed is a very large umbrella

00:30:12 --> 00:30:19
of our ell but if it's if it's okay can

00:30:15 --> 00:30:21
we take a step back and kind of ask the

00:30:18 --> 00:30:24
basic question of what is to you

00:30:20 --> 00:30:28
reinforcement learning so reinforcement

00:30:23 --> 00:30:32
learning is the study and the science

00:30:27 --> 00:30:35
and the problem of intelligence in the

00:30:31 --> 00:30:37
form of an agent that interacts with an

00:30:34 --> 00:30:39
environment so the problem is trying to

00:30:36 --> 00:30:40
self is represented by some environment

00:30:38 --> 00:30:43
like the world in which that agent is

00:30:39 --> 00:30:45
ituated and the goal of RL is clear

00:30:42 --> 00:30:47
that the agent gets to take actions

00:30:44 --> 00:30:49
those actions have some effects on the

00:30:46 --> 00:30:51
nvironment and the environment gives

00:30:48 --> 00:30:52
back an observation to the agent saying

00:30:50 --> 00:30:55
you know this is what you see your sense

00:30:51 --> 00:30:57
and one special thing which it gives

00:30:54 --> 00:30:58
back is it's called the raw signal how

00:30:56 --> 00:31:01
ell it's doing in the environment and

00:30:57 --> 00:31:05
the reinforcement learning problem is to

00:31:00 --> 00:31:09
simply take actions over time so as to

00:31:04 --> 00:31:13
maximize that reward signal so a couple

00:31:08 --> 00:31:16
of basic questions what types of RL

00:31:12 --> 00:31:18
approaches are there so I don't know if

00:31:15 --> 00:31:22
there's a nice brief in words way to

00:31:17 --> 00:31:25
paint the picture of sort of value based

00:31:21 --> 00:31:28
model based policy based reinforcement

00:31:24 --> 00:31:31
learning yeah so now if we think about

00:31:27 --> 00:31:33
okay so there's this ambitious problem

00:31:30 --> 00:31:34
definition of RL it's really you know

00:31:32 --> 00:31:36
it's truly ambitious it's trying to

00:31:33 --> 00:31:38
capture and encircle all of the things

00:31:35 --> 00:31:39
in which an agent interacts with an

00:31:37 --> 00:31:41
environment and say well how can we

00:31:38 --> 00:31:43
formalize and understand what it means

00:31:40 --> 00:31:45
to to crack that now let's think about

00:31:42 --> 00:31:46
he solution method well how do you

00:31:44 --> 00:31:49
solve a really hard problem like that

00:31:45 --> 00:31:52
well one approach you can take is is to

00:31:48 --> 00:31:54
decompose that that very hard problem

00:31:51 --> 00:31:55
into into pieces that work together to

00:31:53 --> 00:31:58
solve that hard problem

00:31:54 --> 00:32:00
and and so you can kind of look at the

00:31:57 --> 00:32:03
decomposition that's inside the agents

00:31:59 --> 00:32:05
head if you like and ask well what form

00:32:02 --> 00:32:07
does that decomposition take and some of

00:32:04 --> 00:32:08
the most common pieces that people use

00:32:06 --> 00:32:10
when they're kind of putting this system

00:32:07 --> 00:32:12
the solution method together some of the

00:32:09 --> 00:32:15
most common pieces that people use are

00:32:11 --> 00:32:16
whether or not that solution has a value

00:32:14 --> 00:32:19
function that means is it trying to

00:32:15 --> 00:32:20
predict explicitly trying to predict how

00:32:18 --> 00:32:22
much reward it will get in the future

00:32:19 --> 00:32:25
does it have a representation of a

00:32:22 --> 00:32:27
policy that means something which is

00:32:24 --> 00:32:28
deciding how to pick actions is is that

00:32:26 --> 00:32:32
decision-making process explicitly

00:32:27 --> 00:32:33
represented and is there a model in the

00:32:31 --> 00:32:35
system is there something which is

00:32:32 --> 00:32:38
explicitly trying to predict what will

00:32:34 --> 00:32:42
happen in the environment and so those

00:32:37 --> 00:32:45
three pieces are to me some of the most

00:32:41 --> 00:32:49
common building blocks and I understand

00:32:44 --> 00:32:50
the different choices in RL as choices

00:32:48 --> 00:32:51
of whether or not to use those building

00:32:49 --> 00:32:54
blocks when you're trying to decompose

00:32:50 --> 00:32:55
the solution you know should I have a

00:32:53 --> 00:32:58
value function represented so they have

00:32:54 --> 00:32:59
a policy represented should I have a

00:32:57 --> 00:33:01
model represented and there are

00:32:58 --> 00:33:02
combinations of those pieces and of

00:33:00 --> 00:33:04
course other things that you could add

00:33:01 --> 00:33:05
to add into the picture as well but

00:33:03 --> 00:33:07
hose those three fundamental choices

00:33:04 --> 00:33:09
give rise to some of the branches of RL

00:33:06 --> 00:33:12
with which we're very familiar and so

00:33:08 --> 00:33:16
those as you mentioned there is the

00:33:11 --> 00:33:21
choice of what's specified or modeled

00:33:15 --> 00:33:23
explicitly and the idea is that all of

00:33:20 --> 00:33:25
these are somehow implicitly learned

00:33:22 --> 00:33:29
within the system so it's almost a

00:33:24 --> 00:33:31
choice of how you approach a problem do

00:33:28 --> 00:33:36
you see those as fundamental differences

00:33:30 --> 00:33:38
or these almost like small specifics

00:33:35 --> 00:33:39
like the details of how you saw the

00:33:37 --> 00:33:42
problem but they're not fundamentally

00:33:38 --> 00:33:46
different from each other I think the

00:33:41 --> 00:33:49
fundamental idea is is maybe at the

00:33:45 --> 00:33:50
higher level the fundamental idea is the

00:33:48 --> 00:33:53
first step of the decomposition is

00:33:49 --> 00:33:56
really to say well how are we really

00:33:52 --> 00:33:57
going to solve any kind of problem where

00:33:55 --> 00:33:59
you're trying to figure out how to take

00:33:56 --> 00:34:01
actions and just from a stream of

00:33:58 --> 00:34:02
observations you know you've got some

00:34:00 --> 00:34:04
agents situated it's sensory motor

00:34:01 --> 00:34:05
stream and getting all these

00:34:03 --> 00:34:07
observations here and getting to take

00:34:04 --> 00:34:08
these actions and and what should it do

00:34:06 --> 00:34:09
how can even broach that problem you

00:34:07 --> 00:34:10
know me

00:34:08 --> 00:34:13
the complexity of the world is so great

00:34:09 --> 00:34:14
hat you can't even imagine how to build

00:34:12 --> 00:34:17
a system that would that would

00:34:13 --> 00:34:18
understand how to deal with that and so

00:34:16 --> 00:34:20
the first step of this decomposition is

00:34:17 --> 00:34:23
to say well you have to learn the system

00:34:19 --> 00:34:25
has to learn for itself and so note that

00:34:22 --> 00:34:27
he reinforcement learning problem

00:34:24 --> 00:34:29
doesn't actually stipulate that you have

00:34:26 --> 00:34:30
to learn but you could maximize your

00:34:28 --> 00:34:32
awards without learning it would just

00:34:29 --> 00:34:35
say wouldn't do a very good job event

00:34:31 --> 00:34:37
yes so learning is required because it's

00:34:34 --> 00:34:39
the only way to achieve good performance

00:34:36 --> 00:34:42
in any sufficiently large and complex

00:34:38 --> 00:34:45
environment so so that's the first step

00:34:41 --> 00:34:46
so that step give commonality to all of

00:34:44 --> 00:34:49
the other pieces because now you might

00:34:45 --> 00:34:51
ask well what should you be learning

00:34:48 --> 00:34:53
what is learning even mean you know in

00:34:50 --> 00:34:55
this sense you know learning might mean

00:34:52 --> 00:34:59
well you're trying to update the

00:34:54 --> 00:35:00
parameters of some system which is then

00:34:58 --> 00:35:03
the thing that actually picks the

00:34:59 --> 00:35:04
actions and and those parameters could

00:35:02 --> 00:35:06
be representing anything they could be

00:35:03 --> 00:35:10
parameterizing a value function or a

00:35:05 --> 00:35:12
model or a policy and so in that sense

00:35:09 --> 00:35:13
there's a lot of commonality in that

00:35:11 --> 00:35:14
whatever is being represented there is

00:35:12 --> 00:35:16
the thing which is being learned and

00:35:13 --> 00:35:19
it's being learned with the ultimate

00:35:15 --> 00:35:21
goal of maximizing rewards but but the

00:35:18 --> 00:35:23
way in which you decompose the problem

00:35:20 --> 00:35:24
is is is really what gives the semantics

00:35:22 --> 00:35:28
to the whole system like are you trying

00:35:23 --> 00:35:29
to learn something to predict well like

00:35:27 --> 00:35:31
a value function or a model are you

00:35:28 --> 00:35:33
learning something to perform well like

00:35:30 --> 00:35:35
a policy and and the form of that

00:35:32 --> 00:35:38
objective like it's kind of giving the

00:35:34 --> 00:35:40
semantics to the system and so it really

00:35:37 --> 00:35:42
is at the next level down a fundamental

00:35:39 --> 00:35:44
choice and we have to make those

00:35:41 --> 00:35:47
fundamental choices a system designers

00:35:43 --> 00:35:49
or enable are our algorithms to be able

00:35:46 --> 00:35:51
to learn how to make those choices for

00:35:48 --> 00:35:55
themselves so then the next step you

00:35:50 --> 00:35:57
mentioned the very for the very first

00:35:54 --> 00:36:00
hing you have to deal with is can you

00:35:56 --> 00:36:02
even take in this huge stream of

00:35:59 --> 00:36:06
observations and do anything with it so

00:36:01 --> 00:36:08
the natural next basic question is what

00:36:05 --> 00:36:10
is the what is deep reinforcement

00:36:07 --> 00:36:13
learning and what is this idea of using

00:36:09 --> 00:36:16
neural networks to deal with this huge

00:36:12 --> 00:36:18
incoming stream so amongst all the

00:36:15 --> 00:36:21
approaches for reinforcement learning

00:36:17 --> 00:36:23
deep reinforcement learning is one

00:36:20 --> 00:36:29
family of solution

00:36:22 --> 00:36:31
feds that tries to utilize powerful

00:36:28 --> 00:36:34
representations that are offered by

00:36:30 --> 00:36:37
neural networks to represent any of

00:36:33 --> 00:36:39
these different components of the

00:36:36 --> 00:36:41
solution of the agent like whether it's

00:36:38 --> 00:36:43
the value function or the model or the

00:36:40 --> 00:36:46
policy the idea of deep learning is to

00:36:42 --> 00:36:48
say well here's a powerful tool kit

00:36:45 --> 00:36:50
hat's so powerful that it's Universal

00:36:47 --> 00:36:52
in the sense that it can represent any

00:36:49 --> 00:36:54
function and it can learn any function

00:36:51 --> 00:36:57
and so if we can leverage that

00:36:53 --> 00:36:59
universality that means that whatever

00:36:56 --> 00:37:00
we need to represent for our

00:36:58 --> 00:37:03
policy or offer a value function or for

00:36:59 --> 00:37:05
a model deep learning can do it so that

00:37:02 --> 00:37:09
deep learning is is one approach that

00:37:04 --> 00:37:11
offers us a toolkit that is has no

00:37:08 --> 00:37:13
ceiling to its performance that as we

00:37:10 --> 00:37:14
start to put more resources into the

00:37:12 --> 00:37:18
system or more memory and more

00:37:13 --> 00:37:20
computation and more more data more

00:37:17 --> 00:37:22
xperience of more interactions with the

00:37:19 --> 00:37:23
nvironment that these are systems that

00:37:21 --> 00:37:25
can just get better and better and

00:37:22 --> 00:37:26
better at doing whatever the job is

00:37:24 --> 00:37:30
they've asked them to do whatever we've

00:37:25 --> 00:37:32
asked that function to represent it can

00:37:29 --> 00:37:34
learn a function that does a better and

00:37:31 --> 00:37:36
better job of representing that that

00:37:33 --> 00:37:38
knowledge whether that knowledge be

00:37:35 --> 00:37:39
stimating how well you're going to do

00:37:37 --> 00:37:42
in the world the value function whether

00:37:38 --> 00:37:44
it's going to be choosing what to do in

00:37:41 --> 00:37:46
the world a policy or it's understanding

00:37:43 --> 00:37:50
the world itself what's going to happen

00:37:45 --> 00:37:51
ext the model nevertheless the the the

00:37:49 --> 00:37:55
fact that neural networks are able to

00:37:50 --> 00:37:57
learn incredibly complex representations

00:37:54 --> 00:38:02
that allow you to do the policy the

00:37:56 --> 00:38:04
model or the value function is at least

00:38:01 --> 00:38:07
o my mind exceptionally beautiful and

00:38:03 --> 00:38:09
surprising like what was it is it

00:38:06 --> 00:38:12
surprising was it surprising to you can

00:38:08 --> 00:38:13
you still believe it works as well as it

00:38:11 --> 00:38:17
does do you have good intuition about

00:38:12 --> 00:38:23
why it works at all and works as well as

00:38:16 --> 00:38:27
it does I think let me take two parts to

00:38:22 --> 00:38:29
that question I think it's not

00:38:26 --> 00:38:32
surprising to me that the idea of

00:38:28 --> 00:38:36
reinforcement learning works because in

00:38:31 --> 00:38:36
some sense I think it's the I feel it's

00:38:35 --> 00:38:39
the only

00:38:35 --> 00:38:41
which can ultimately and so I feel we

00:38:38 --> 00:38:43
have to we have to address it and there

00:38:40 --> 00:38:46
must be success is possible because we

00:38:42 --> 00:38:49
have examples of intelligence and it

00:38:45 --> 00:38:51
must at some level be able to possible

00:38:48 --> 00:38:53
to acquire experience and use that

00:38:50 --> 00:38:56
experience to to do better in a way

00:38:52 --> 00:38:58
which is meaningful to environments of

00:38:55 --> 00:39:01
the complexity that humans can deal with

00:38:57 --> 00:39:02
it must be am I surprised that our

00:39:00 --> 00:39:06
current systems can do as well as they

00:39:01 --> 00:39:10
can do I think one of the big surprises

00:39:05 --> 00:39:15
for me and a lot of the community it's

00:39:09 --> 00:39:21
really the fact that deep learning can

00:39:14 --> 00:39:23
continue to perform so well despite than

00:39:20 --> 00:39:25
the fact that these neural networks that

00:39:22 --> 00:39:27
hey're representing have these

00:39:24 --> 00:39:30
incredibly nonlinear kind of bumpy

00:39:26 --> 00:39:32
surfaces which two are kind of low

00:39:29 --> 00:39:34
dimensional intuitions make it feel like

00:39:31 --> 00:39:37
surely you're just going to get stuck

00:39:33 --> 00:39:38
and learning will get stuck because you

00:39:36 --> 00:39:42
won't be able to make any further

00:39:37 --> 00:39:45
progress and yet the big surprise is

00:39:41 --> 00:39:47
that learning continues and and these

00:39:44 --> 00:39:49
what appear to be local Optima turned

00:39:46 --> 00:39:50
out not to be because in high dimensions

00:39:48 --> 00:39:53
when we make really big neural nets

00:39:49 --> 00:39:56
there's always a way out and there's a

00:39:52 --> 00:39:57
way to go even lower and then he's still

00:39:55 --> 00:39:59
not another local Optima because there's

00:39:56 --> 00:40:01
ome other pathway that will take you

00:39:58 --> 00:40:03
t and take you lower still and so no

00:40:00 --> 00:40:04
matter where you are learning can

00:40:02 --> 00:40:09
proceed and do better and better and

00:40:03 --> 00:40:12
breath better without bound and so that

00:40:08 --> 00:40:17
is a surprising and beautiful property

00:40:11 --> 00:40:20
of neural nets which I find elegant and

00:40:16 --> 00:40:22
beautiful and and somewhat shocking that

00:40:19 --> 00:40:24
it turns out to be the case as you said

00:40:21 --> 00:40:28
which I really like to our low

00:40:23 --> 00:40:32
dimensional intuitions that's surprising

00:40:27 --> 00:40:34
yeah yeah we're very we're very tuned to

00:40:31 --> 00:40:37
working within a three-dimensional

00:40:33 --> 00:40:39
environment and so to start to visualize

00:40:36 --> 00:40:43
what a billion dimensional neural

00:40:38 --> 00:40:45
network um surface that you're trying to

00:40:42 --> 00:40:47
ptimize over what that even looks like

00:40:44 --> 00:40:50
is very hard for us and so I think that

00:40:46 --> 00:40:55
really if you try to account for

00:40:49 --> 00:40:57
the essentially the AI winter where

00:40:54 --> 00:40:59
people gave up on Yule networks I

00:40:56 --> 00:41:02
think it's really down to that that lack

00:40:58 --> 00:41:04
of ability to generalize from from low

00:41:01 --> 00:41:06
dimensions to high dimensions because

00:41:03 --> 00:41:08
back then we were in the low dimensional

00:41:05 --> 00:41:11
case people could only build neural nets

00:41:07 --> 00:41:14
with you know 50 nodes in them or

00:41:10 --> 00:41:15
something and to to imagine that it

00:41:13 --> 00:41:17
might be possible to build a billion

00:41:15 --> 00:41:19
dimension on your net and it might have

00:41:16 --> 00:41:21
a completely different qualitatively

00:41:18 --> 00:41:23
different property was very hard to

00:41:20 --> 00:41:25
anticipate and I think even now we're

00:41:22 --> 00:41:28
starting to build the the theory to

00:41:24 --> 00:41:30
support that and and it's incomplete at

00:41:27 --> 00:41:32
he moment but all of the theory seems

00:41:29 --> 00:41:34
to be pointing in the direction that

00:41:31 --> 00:41:36
indeed this is an approach which which

00:41:33 --> 00:41:37
truly is universal both in its

00:41:35 --> 00:41:39
representational capacity which was

00:41:36 --> 00:41:42
known but also in its learning ability

00:41:38 --> 00:41:44
which is which is surprising and it

00:41:41 --> 00:41:48
makes one wonder what else were missing

00:41:43 --> 00:41:51
yes for a low demand intuitions yet

00:41:47 --> 00:41:54
here will seem obvious once it's

00:41:50 --> 00:41:59
discovered I often wonder you know when

00:41:53 --> 00:42:02
we one day do have a eyes which are

00:41:58 --> 00:42:06
superhuman in their abilities to to

00:42:01 --> 00:42:08
understand the world what will they

00:42:05 --> 00:42:10
think of the algorithms that we

00:42:07 --> 00:42:13
developed back now will it be you know

00:42:09 --> 00:42:17
looking back at these these days and you

00:42:12 --> 00:42:18
know and and and thinking that well will

00:42:16 --> 00:42:20
we look back and feel that these

00:42:17 --> 00:42:21
algorithms were were naive faire steps

00:42:19 --> 00:42:24
or will they still be the fundamental

00:42:20 --> 00:42:28
ideas which are used even in 100

00:42:23 --> 00:42:30
thousand 10,000 years yeah Nels and I

00:42:27 --> 00:42:34
they'll they'll watch back to this

00:42:29 --> 00:42:37
conversation and I would the smile maybe

00:42:33 --> 00:42:41
a little bit of a laugh I mean my senses

00:42:36 --> 00:42:43
I think it just like on we used to think

00:42:40 --> 00:42:46
that

00:42:42 --> 00:42:49
he Sun revolved around the earth

00:42:45 --> 00:42:51
ey'll see our systems of today in

00:42:48 --> 00:42:53
reinforcement learning as too

00:42:50 --> 00:42:57
complicated that the answer was simple

00:42:52 --> 00:42:59
all along there's something I just just

00:42:56 --> 00:43:01
hink you said in a game of Go I mean I

00:42:58 --> 00:43:04
love those systems of like cellular

00:43:00 --> 00:43:07
automata that there's simple rules from

00:43:03 --> 00:43:09
which incredible complexity emerges so

00:43:06 --> 00:43:12
it feels like there might be some very

00:43:08 --> 00:43:17
simple approaches just like where Sutton

00:43:11 --> 00:43:20
says right these simple methods or with

00:43:16 --> 00:43:23
compute over time seem to prove to be

00:43:19 --> 00:43:29
the most effective I 100% agree I think

00:43:22 --> 00:43:31
that if we try to anticipate what will

00:43:28 --> 00:43:34
generalize well into the future I think

00:43:30 --> 00:43:37
it's likely to be the case that it's the

00:43:33 --> 00:43:38
simple clear ideas which will have the

00:43:36 --> 00:43:40
longest legs and walked or carry us

00:43:37 --> 00:43:42
farthest into the future nevertheless

00:43:39 --> 00:43:44
we're in a situation where we need to

00:43:41 --> 00:43:45
make things work day and today and

00:43:43 --> 00:43:48
sometimes that requires putting together

00:43:44 --> 00:43:50
more complex systems where we don't have

00:43:47 --> 00:43:52
the the full answers yet as to what

00:43:49 --> 00:43:54
hose minimal ingredients might be so

00:43:51 --> 00:43:59
speaking of which if we could take us

00:43:53 --> 00:44:01
their bag to go what was Mogo and what

00:43:58 --> 00:44:05
was the key idea behind this system so

00:44:00 --> 00:44:08
back during my PhD on computer go around

00:44:04 --> 00:44:10
about that time there was a major new

00:44:07 --> 00:44:13
development in in which actually

00:44:09 --> 00:44:17
happened in the context of computer go

00:44:12 --> 00:44:19
and and it was really a revolution in

00:44:16 --> 00:44:22
the way that heuristic search was was

00:44:18 --> 00:44:26
done and and the idea was essentially

00:44:21 --> 00:44:29
that a position could be evaluated or a

00:44:25 --> 00:44:33
state in general could be evaluated not

00:44:28 --> 00:44:35
by humans saying whether that position

00:44:32 --> 00:44:37
is good or not or even humans providing

00:44:34 --> 00:44:41
rules as to how you might evaluate it

00:44:36 --> 00:44:44
but instead by allowing the system to

00:44:40 --> 00:44:47
randomly play out the game until the end

00:44:43 --> 00:44:50
multiple times and taking the average of

00:44:46 --> 00:44:53
those outcomes as the prediction of what

00:44:49 --> 00:44:55
will happen so for example if you're in

00:44:52 --> 00:44:56
the game of go the intuition is that you

00:44:54 --> 00:44:58
take a position

00:44:55 --> 00:45:00
and you get the system to kind of play

00:44:57 --> 00:45:01
random moves against itself all the way

00:44:59 --> 00:45:04
to the end of the game and you see who

00:45:00 --> 00:45:06
wins and if black ends up winning more

00:45:03 --> 00:45:07
of those random games than white well

00:45:05 --> 00:45:09
you say hey this is a position that

00:45:06 --> 00:45:10
favors white and if white ends up

00:45:08 --> 00:45:15
winning more of those random games than

00:45:09 --> 00:45:21
black then it favors white so that idea

00:45:14 --> 00:45:23
was known as Monte Carlo search and a

00:45:20 --> 00:45:25
particular form of Monte Carlo search

00:45:22 --> 00:45:27
that became very effective and was

00:45:24 --> 00:45:30
developed in computer go first by Remy

00:45:26 --> 00:45:32
Coulomb in 2006 and then taken further

00:45:29 --> 00:45:35
by others was something called Monte

00:45:31 --> 00:45:38
Carlo tree search which basically takes

00:45:34 --> 00:45:41
that same idea and uses that that

00:45:37 --> 00:45:43
insight to evaluate every node of a

00:45:40 --> 00:45:45
search tree is evaluated by the average

00:45:42 --> 00:45:49
of the random play outs from that from

00:45:44 --> 00:45:52
that node onwards and this idea was very

00:45:48 --> 00:45:53
powerful and suddenly led to huge leaps

00:45:51 --> 00:45:57
forward in the strength of computer go

00:45:52 --> 00:45:59
playing programs and among those the the

00:45:56 --> 00:46:01
strongest of the go playing programs in

00:45:58 --> 00:46:04
those days was a program called Mogo

00:46:00 --> 00:46:06
which was the first program to actually

00:46:03 --> 00:46:09
reach human master level on small boards

00:46:05 --> 00:46:11
nine by nine boards and so this was a

00:46:08 --> 00:46:14
program by someone called Sylvan jelly

00:46:10 --> 00:46:16
he was a good colleague of mine but I

00:46:13 --> 00:46:21
worked with him a little bit in those

00:46:15 --> 00:46:24
days of my PhD thesis and Mogo was a a

00:46:20 --> 00:46:26
first step towards the latest successes

00:46:23 --> 00:46:28
we saw and computer go but it was still

00:46:25 --> 00:46:32
missing a key ingredient

00:46:27 --> 00:46:35
Mogo was evaluating purely by random

00:46:31 --> 00:46:37
rollouts against itself and in a way

00:46:34 --> 00:46:40
it's it's truly remarkable that random

00:46:36 --> 00:46:42
play gives you anything at all yeah like

00:46:39 --> 00:46:44
how why why in this perfectly

00:46:41 --> 00:46:47
deterministic game that's very precise

00:46:43 --> 00:46:51
and involves these very exact sequences

00:46:46 --> 00:46:54
why is it that that random randomization

00:46:50 --> 00:46:56
is helpful and so the intuition is that

00:46:53 --> 00:46:59
randomization captures something about

00:46:55 --> 00:47:01
he the nature of the of the search tree

00:46:58 --> 00:47:03
that from a position that you're you're

00:47:00 --> 00:47:06
understanding the nature of the search

00:47:02 --> 00:47:08
tree from that node onwards by by by

00:47:05 --> 00:47:09
using randomization and this was a very

00:47:07 --> 00:47:13
powerful idea

00:47:08 --> 00:47:15
nd I've seen this in other spaces talk

00:47:12 --> 00:47:17
to the virtual carpet and so on

00:47:14 --> 00:47:20
randomized algorithms somehow magically

00:47:16 --> 00:47:23
are able to do exceptionally well and

00:47:19 --> 00:47:26
simplifying the problem somehow

00:47:22 --> 00:47:28
makes you wonder about the fundamental

00:47:25 --> 00:47:31
nature of randomness in our universe it

00:47:27 --> 00:47:34
seems to be a useful thing but so from

00:47:30 --> 00:47:36
that moment can you maybe tell the

00:47:33 --> 00:47:39
origin story in the journey of alphago

00:47:35 --> 00:47:42
yeah so programs based on Monty College

00:47:38 --> 00:47:45
research were a first revolution in the

00:47:41 --> 00:47:47
sense that they led to suddenly programs

00:47:44 --> 00:47:50
that could play the game to any

00:47:46 --> 00:47:52
reasonable level but they they plateaued

00:47:49 --> 00:47:54
it seemed that no matter how much effort

00:47:51 --> 00:47:57
people put into these techniques they

00:47:53 --> 00:48:00
couldn't exceed the level of amateur Dan

00:47:56 --> 00:48:02
level go players so strong players but

00:47:59 --> 00:48:04
not not anywhere near the level of

00:48:01 --> 00:48:08
professionals never mind the world

00:48:03 --> 00:48:10
champion and so that brings us to the

00:48:07 --> 00:48:13
birth of alphago which happened in the

00:48:09 --> 00:48:18
context of a startup company known as

00:48:12 --> 00:48:21
deep mind or where them where a project

00:48:17 --> 00:48:26
was born and the project was really a

00:48:20 --> 00:48:30
scientific investigation where myself

00:48:25 --> 00:48:33
and a jipang and an intern Chris Madison

00:48:29 --> 00:48:37
were exploring a scientific question and

00:48:32 --> 00:48:40
that scientific question was really

00:48:36 --> 00:48:43
is there another fundamentally different

00:48:39 --> 00:48:45
approach to to this key question of Goa

00:48:42 --> 00:48:48
the key challenge of how can you build

00:48:44 --> 00:48:49
that intuition and how can you just have

00:48:47 --> 00:48:52
a system that could look at a position

00:48:48 --> 00:48:54
and understand what moved to play or or

00:48:51 --> 00:48:57
how well you're doing in that position

00:48:53 --> 00:49:00
who's going to win and so the deep

00:48:56 --> 00:49:04
learning Revolution had just begun their

00:48:59 --> 00:49:05
systems like imagenet had suddenly been

00:49:03 --> 00:49:09
won by deep learning techniques back in

00:49:04 --> 00:49:11
2012 and following that it was natural

00:49:08 --> 00:49:13
to ask well you know if if deep learning

00:49:10 --> 00:49:15
is able to scale up so effectively with

00:49:12 --> 00:49:19
images to to understand them enough to

00:49:14 --> 00:49:22
classify them well why not go why why

00:49:18 --> 00:49:24
not take a the black and white stones of

00:49:21 --> 00:49:26
the NGO board and build some a system

00:49:23 --> 00:49:28
which can understand for itself what

00:49:25 --> 00:49:29
hat means in terms of what moved to

00:49:27 --> 00:49:32
pick or who's going to win the game

00:49:28 --> 00:49:34
black or white and so that was our

00:49:31 --> 00:49:37
scientific question which we we were

00:49:33 --> 00:49:39
probing and trying to understand and as

00:49:36 --> 00:49:42
we started to look at it we discovered

00:49:38 --> 00:49:44
that we could build a a system so in

00:49:41 --> 00:49:47
fact our very first paper on alphago was

00:49:43 --> 00:49:49
actually a pure deep learning system

00:49:46 --> 00:49:52
which was trying to answer this question

00:49:48 --> 00:49:54
and we showed that actually a pure deep

00:49:51 --> 00:49:57
learning system with no search at all

00:49:53 --> 00:50:00
was actually able to reach human van

00:49:56 --> 00:50:03
level master level at the full game of

00:49:59 --> 00:50:05
go 19 by 19 boards and so without any

00:50:02 --> 00:50:07
search at all suddenly we had systems

00:50:05 --> 00:50:11
which were playing at the level of the

00:50:06 --> 00:50:13
best Monte Carlo tree search systems the

00:50:10 --> 00:50:15
ones with randomized rollouts so first

00:50:12 --> 00:50:17
I'm sorry to interrupt but there's kind

00:50:14 --> 00:50:20
of a groundbreaking notion let's say

00:50:16 --> 00:50:23
that's like basically a definitive step

00:50:20 --> 00:50:27
away from the a couple of decades of

00:50:22 --> 00:50:29
essentially search dominating AI yeah so

00:50:26 --> 00:50:31
what how do them make you feel would you

00:50:28 --> 00:50:34
that was a surprising from a scientific

00:50:30 --> 00:50:36
perspective in general how to make you

00:50:33 --> 00:50:39
feel I I found this to be profoundly

00:50:35 --> 00:50:42
surprising in fact it was so surprising

00:50:38 --> 00:50:44
that that we had a bet back then and

00:50:41 --> 00:50:46
like many good projects you know bets

00:50:43 --> 00:50:49
are quite motivating and Anna bet was

00:50:45 --> 00:50:51
you know whether it was possible for a

00:50:48 --> 00:50:53
system

00:50:50 --> 00:50:57
purely on on deep learning no search at

00:50:52 --> 00:51:00
all to beat a Dan level human player and

00:50:56 --> 00:51:02
so we had someone who joined our team

00:50:59 --> 00:51:06
who was a damn level player he came in

00:51:01 --> 00:51:08
and and we had this first match against

00:51:05 --> 00:51:11
him and we turned the bit where you want

00:51:07 --> 00:51:13
by the way do you handle losing and they

00:51:10 --> 00:51:17
were in except I tend to be an optimist

00:51:12 --> 00:51:19
with the with the power of of deep

00:51:16 --> 00:51:22
learning and reinforcement learning so

00:51:19 --> 00:51:25
the system won and we were able to beat

00:51:21 --> 00:51:27
his human Dan level player and for me

00:51:24 --> 00:51:29
that was the moment where where it's

00:51:26 --> 00:51:31
like okay something something special is

00:51:28 --> 00:51:35
afoot here we have a system which

00:51:30 --> 00:51:37
without search is able to to already

00:51:34 --> 00:51:39
just look at this position and

00:51:36 --> 00:51:41
understand things as well as a strong

00:51:38 --> 00:51:46
human player and from that point onwards

00:51:40 --> 00:51:49
I really felt that reaching that

00:51:45 --> 00:51:51
reaching the top levels of human play

00:51:48 --> 00:51:52
ou know professional level world

00:51:50 --> 00:51:58
champion level I felt it was actually an

00:51:51 --> 00:52:00
inevitability and and if it was an

00:51:57 --> 00:52:02
inevitable outcome

00:51:59 --> 00:52:06
I was rather keen it would be us that

00:52:01 --> 00:52:09
achieve it so we scaled up this was

00:52:05 --> 00:52:11
omething where you know so I had lots

00:52:08 --> 00:52:15
of conversations back then with demo so

00:52:10 --> 00:52:19
service that the head of deepmind who

00:52:14 --> 00:52:22
was extremely excited and we we made the

00:52:18 --> 00:52:25
decision to to scale up the project

00:52:21 --> 00:52:29
brought more people on board and and so

00:52:24 --> 00:52:31
alphago became something where where we

00:52:28 --> 00:52:34
had a clear goal which was to try and

00:52:30 --> 00:52:37
crack this outstanding challenge of AI

00:52:33 --> 00:52:41
to see if we could beat the world's best

00:52:36 --> 00:52:44
players and this led within the space of

00:52:40 --> 00:52:47
not so many months to playing against

00:52:43 --> 00:52:49
he European champion fan way in a match

00:52:46 --> 00:52:51
which became you know memorable in

00:52:48 --> 00:52:53
history is the first time a go program

00:52:50 --> 00:52:56
would ever beated a a professional

00:52:52 --> 00:52:59
player and at that time we had to make a

00:52:55 --> 00:53:01
judgment as to whether when and and

00:52:58 --> 00:53:03
whether we should go and challenge the

00:53:00 --> 00:53:04
world champion and and this was a

00:53:02 --> 00:53:06
difficult

00:53:03 --> 00:53:09
o make again we were basing our

00:53:05 --> 00:53:12
predictions on on our own progress and

00:53:08 --> 00:53:13
had to estimate based on the rapidity of

00:53:11 --> 00:53:17
our own progress when we thought we

00:53:12 --> 00:53:19
would exceeds the level of the human

00:53:16 --> 00:53:21
world champion and and we tried to make

00:53:18 --> 00:53:24
an estimate and set up a match and that

00:53:20 --> 00:53:30
became the the alphago versus Lisa dolls

00:53:23 --> 00:53:33
match in 2016 and we should say spoiler

00:53:29 --> 00:53:37
alert that alphago was able to defeat

00:53:32 --> 00:53:40
Lisa doll that's right yeah so maybe a

00:53:36 --> 00:53:44
could take even a broader view

00:53:39 --> 00:53:50
alphago involves both learning from

00:53:43 --> 00:53:52
expert games and as far as I remember a

00:53:49 --> 00:53:56
self play component - where he learns by

00:53:51 --> 00:53:58
playing guess himself but in your sense

00:53:55 --> 00:54:01
what was the role of learning from

00:53:57 --> 00:54:03
experts there and in terms of your self

00:54:00 --> 00:54:06
evaluation whether you can take on the

00:54:02 --> 00:54:08
world champion what was the thing that

00:54:05 --> 00:54:10
hey're trying to do more of sort of

00:54:07 --> 00:54:14
train more on expert games or was

00:54:09 --> 00:54:19
there's now another I'm asking so many

00:54:13 --> 00:54:20
poorly faced questions but did you have

00:54:18 --> 00:54:25
a hope a dream that self play would be

00:54:19 --> 00:54:28
the key component at that moment yet so

00:54:24 --> 00:54:30
in the early days of alphago we we used

00:54:27 --> 00:54:32
human data to explore the science of

00:54:29 --> 00:54:34
what deep learning can achieve and so

00:54:31 --> 00:54:38
when we had our first paper that showed

00:54:33 --> 00:54:39
that it was possible to predict the

00:54:37 --> 00:54:41
winner of the game that it was possible

00:54:38 --> 00:54:43
to suggest moves that was done using

00:54:40 --> 00:54:45
human data of solely human did yes and

00:54:42 --> 00:54:47
and and so the reason that we did it

00:54:44 --> 00:54:47
hat way was at that time we were

00:54:46 --> 00:54:50
xploring

00:54:46 --> 00:54:52
separately the deep learning aspect from

00:54:49 --> 00:54:54
the reinforcement learning aspect that

00:54:51 --> 00:54:57
was the part which was which was new and

00:54:53 --> 00:55:00
unknown to me at that time was how far

00:54:56 --> 00:55:02
could that be stretched once we had that

00:54:59 --> 00:55:04
it then became natural to try and use

00:55:01 --> 00:55:06
that same representation and see if we

00:55:03 --> 00:55:08
could learn for ourselves using that

00:55:05 --> 00:55:11
same representation and so right from

00:55:07 --> 00:55:15
the beginning actually our goal had been

00:55:10 --> 00:55:17
to build a system using self play and to

00:55:14 --> 00:55:18
us the human data right from the

00:55:16 --> 00:55:20
beginning was

00:55:17 --> 00:55:23
an expedient step to help us for

00:55:19 --> 00:55:25
pragmatic reasons to go faster towards

00:55:22 --> 00:55:27
the goals of the project then we might

00:55:24 --> 00:55:30
be able to starting solely from self

00:55:26 --> 00:55:33
play and so in those days we were very

00:55:29 --> 00:55:34
aware that we were choosing to to use

00:55:32 --> 00:55:39
human data and that might not be the

00:55:33 --> 00:55:41
long-term holy grail of AI but that it

00:55:38 --> 00:55:42
was something which was extremely useful

00:55:40 --> 00:55:44
to us it helped us to understand the

00:55:41 --> 00:55:46
system helped us to build deep learning

00:55:43 --> 00:55:49
representations which were clear and

00:55:45 --> 00:55:53
simple and easy to use and so really I

00:55:49 --> 00:55:54
would say it's it served a purpose not

00:55:52 --> 00:55:56
just as part of the algorithm but

00:55:53 --> 00:55:58
something which I continued to use in

00:55:55 --> 00:56:01
our research today which is trying to

00:55:57 --> 00:56:02
break down a very hard challenge into

00:56:00 --> 00:56:05
pieces which are easier to understand

00:56:01 --> 00:56:07
for us as researchers and develop so if

00:56:04 --> 00:56:09
you if you use a component based on

00:56:06 --> 00:56:12
human data it can help you to understand

00:56:08 --> 00:56:13
the system such that then you can build

00:56:11 --> 00:56:18
the more principled version later that

00:56:12 --> 00:56:21
does it for itself so as I said the

00:56:17 --> 00:56:24
alphago victory and I don't think I'm

00:56:20 --> 00:56:26
being sort of romanticizing this notion

00:56:23 --> 00:56:27
I think is one of the greatest moments

00:56:25 --> 00:56:30
in the history of AI

00:56:26 --> 00:56:33
so were you cognizant of this magnitude

00:56:29 --> 00:56:36
of the accomplishment at the time I mean

00:56:32 --> 00:56:38
we are you cognizant of it even now

00:56:35 --> 00:56:41
because to me I feel like it's something

00:56:37 --> 00:56:43
that would we mentioned what the AGI

00:56:40 --> 00:56:45
systems of the future will look back I

00:56:42 --> 00:56:49
think they'll look back at the alphago

00:56:44 --> 00:56:51
tree as like holy crap they figured it

00:56:48 --> 00:56:54
out this is where this is where the

00:56:50 --> 00:56:56
started well thank you again I mean it's

00:56:53 --> 00:56:58
funny because I guess I've been working

00:56:55 --> 00:56:59
on I've been working on computer go for

00:56:57 --> 00:57:02
a long time so I've been working at the

00:56:58 --> 00:57:04
time at the alphago match on computer go

00:57:01 --> 00:57:07
for more than a decade and throughout

00:57:03 --> 00:57:09
hat decade I'd had this dream of what

00:57:06 --> 00:57:12
would it be like - what would it be like

00:57:08 --> 00:57:14
really - to actually be able to build a

00:57:11 --> 00:57:17
system that could play against the world

00:57:13 --> 00:57:18
champion and and I imagined that that

00:57:16 --> 00:57:20
would be an interesting moment that

00:57:17 --> 00:57:22
maybe you know some people might care

00:57:19 --> 00:57:26
about that and that this might be you

00:57:21 --> 00:57:30
know a nice achievement but I think when

00:57:25 --> 00:57:32
I arrived in in Seoul and discovered the

00:57:29 --> 00:57:34
legions of

00:57:31 --> 00:57:35
that were following us around and 100

00:57:33 --> 00:57:39
million people that were watching the

00:57:34 --> 00:57:41
match online life I realized that I had

00:57:38 --> 00:57:43
been off in my estimation of how

00:57:40 --> 00:57:46
significant this moment was by several

00:57:42 --> 00:57:50
orders of magnitude and so there was

00:57:45 --> 00:57:53
definitely an adjustment process to to

00:57:49 --> 00:57:56
realize that this this was something

00:57:52 --> 00:57:59
which the world really cared about and

00:57:55 --> 00:58:02
which was a watershed moment and I think

00:57:58 --> 00:58:04
there was that moment of realization it

00:58:01 --> 00:58:06
was also a little bit scary because you

00:58:03 --> 00:58:09
know if you go into something thinking

00:58:05 --> 00:58:11
it's going to be may be of interest and

00:58:08 --> 00:58:12
then discover that 100 million people

00:58:10 --> 00:58:14
are watching it suddenly makes you worry

00:58:11 --> 00:58:15
about whether some of the decisions

00:58:13 --> 00:58:17
you've made where really they're the

00:58:14 --> 00:58:19
best ones or the wisest or we're going

00:58:16 --> 00:58:20
to lead to the best outcome and we knew

00:58:18 --> 00:58:22
for sure that there were still

00:58:19 --> 00:58:24
imperfections in alphago which were

00:58:21 --> 00:58:27
going to be exposed to the whole world

00:58:23 --> 00:58:31
watching and so yeah it was a it was I

00:58:26 --> 00:58:32
think a great experience and I I feel

00:58:30 --> 00:58:35
privileged to have been part of it

00:58:31 --> 00:58:39
privileged to have led that amazing team

00:58:34 --> 00:58:42
I feel privileged to have been in a

00:58:38 --> 00:58:44
moment of history like you say but also

00:58:41 --> 00:58:47
lucky that you know in a sense I was

00:58:43 --> 00:58:48
insulated from from the knowledge of I

00:58:46 --> 00:58:50
think it would have been harder to focus

00:58:47 --> 00:58:52
on the research if the full kind of

00:58:49 --> 00:58:55
reality of what was going to come to

00:58:51 --> 00:58:57
pass her had been known to me and the

00:58:54 --> 00:58:59
team I think it was you know we were we

00:58:56 --> 00:59:00
re in our bubble and we were working

00:58:58 --> 00:59:02
on research and we were trying to answer

00:58:59 --> 00:59:06
the scientific questions and then BAM

00:59:01 --> 00:59:07
you know the public sees it and and I

00:59:05 --> 00:59:09
think it was it was it was better that

00:59:06 --> 00:59:12
way in retrospect were you confident did

00:59:08 --> 00:59:17
I guess what were the chances that you

00:59:11 --> 00:59:20
could get the win so just like you said

00:59:16 --> 00:59:21
I'm a little bit more familiar with

00:59:19 --> 00:59:23
another accomplishment that we may not

00:59:20 --> 00:59:25
even get a chance to talk to I talked to

00:59:22 --> 00:59:29
us about Alpha star which is another

00:59:24 --> 00:59:31
incredible accomplishment but here you

00:59:28 --> 00:59:33
know with alpha star and beating the

00:59:30 --> 00:59:35
Starcraft there was like already a track

00:59:32 --> 00:59:38
record with alphago there this is like

00:59:34 --> 00:59:40
the really first time you get to see

00:59:37 --> 00:59:42
reinforcement learning

00:59:39 --> 00:59:44
face the best humour in the world so

00:59:41 --> 00:59:45
what was your confidence like what was

00:59:43 --> 00:59:48
the odds

00:59:44 --> 00:59:51
well we actually was there a bit but

00:59:47 --> 00:59:52
funnily enough there was so so just

00:59:50 --> 00:59:54
before the match

00:59:51 --> 00:59:58
we weren't betting on anything concrete

00:59:53 --> 00:59:59
but we all held out a hand everyone in

00:59:57 --> 01:00:01
the team held out her hand at beginning

00:59:58 --> 01:00:02
of the match and the number of fingers

01:00:00 --> 01:00:04
that they had out on the hand was

01:00:01 --> 01:00:05
upposed to represent how many games

01:00:03 --> 01:00:07
they thought we would win

01:00:04 --> 01:00:09
I guess Lisa doll and there was an

01:00:06 --> 01:00:12
amazing spread in there in the team's

01:00:08 --> 01:00:17
predictions but I have to say I

01:00:11 --> 01:00:20
predicted four one and and the reason

01:00:16 --> 01:00:22
was based purely on on data so I'm a

01:00:19 --> 01:00:24
scientist first and foremost and one of

01:00:21 --> 01:00:24
the things which we had established was

01:00:23 --> 01:00:28
that

01:00:23 --> 01:00:30
alphago in around 1 in 5 games would

01:00:27 --> 01:00:31
evelop something which we called a

01:00:29 --> 01:00:33
delusion which was a kind of inner hole

01:00:30 --> 01:00:36
in its in its knowledge where it wasn't

01:00:32 --> 01:00:37
able to fully understand everything

01:00:35 --> 01:00:39
about the position and that that hole

01:00:36 --> 01:00:43
and its knowledge would persist for tens

01:00:38 --> 01:00:44
of moves throughout the game and we knew

01:00:42 --> 01:00:46
two things we knew that if there were no

01:00:43 --> 01:00:48
delusions that alphago seemed to be

01:00:45 --> 01:00:51
playing at a level that was far beyond

01:00:47 --> 01:00:53
any human capabilities but we also knew

01:00:50 --> 01:00:57
that if there were delusions the office

01:00:52 --> 01:00:59
it was true and and and in fact you know

01:00:56 --> 01:01:01
that's that's what came to pass we saw

01:00:58 --> 01:01:04
all of those outcomes and Lisa

01:01:00 --> 01:01:07
doll in in one of the games played a

01:01:03 --> 01:01:09
really beautiful sequence that that that

01:01:06 --> 01:01:12
alphago just hadn't predicted and after

01:01:08 --> 01:01:15
that it it led it into this situation

01:01:11 --> 01:01:17
where it was unable to really understand

01:01:14 --> 01:01:18
the position fully and and and found

01:01:16 --> 01:01:21
itself in one of these these delusions

01:01:17 --> 01:01:23
o so indeed yeah for one was the

01:01:20 --> 01:01:25
outcome so yeah and can you maybe speak

01:01:22 --> 01:01:27
to it a little bit more what were the

01:01:24 --> 01:01:30
five games like what what happened is

01:01:26 --> 01:01:32
there interesting things that they come

01:01:29 --> 01:01:36
to memory in terms of the play of the

01:01:31 --> 01:01:38
human machine so I remember all of these

01:01:35 --> 01:01:40
games vividly of course you know moments

01:01:37 --> 01:01:46
like these don't come too often in the

01:01:39 --> 01:01:48
lifetime of her of her scientist and the

01:01:45 --> 01:01:53
first game was was magical because

01:01:47 --> 01:01:55
it was the first time that a computer

01:01:52 --> 01:01:58
program had defeated a world champion in

01:01:54 --> 01:02:04
this Grand Challenge of go and and there

01:01:57 --> 01:02:05
was a moment where where alphago invaded

01:02:03 --> 01:02:07
Lisa dolls

01:02:04 --> 01:02:10
territory towards the end of the game

01:02:06 --> 01:02:12
and and that's quite an audacious thing

01:02:09 --> 01:02:13
to do it's like saying hey you thought

01:02:11 --> 01:02:14
his was gonna be your territory in the

01:02:12 --> 01:02:16
game but I'm going to stick a stone

01:02:13 --> 01:02:19
right in the middle of it and and and

01:02:15 --> 01:02:21
prove to you that I can break it up and

01:02:18 --> 01:02:23
Lisa dolls face just dropped he wasn't

01:02:20 --> 01:02:29
expecting a computer to to do something

01:02:22 --> 01:02:31
that audacious the second game became

01:02:28 --> 01:02:34
famous for a move known as move 37 this

01:02:30 --> 01:02:38
was a move that was played by alphago

01:02:33 --> 01:02:40
that was broke all of the conventions of

01:02:37 --> 01:02:42
go that the go players were so shocked

01:02:39 --> 01:02:45
by this they they they thought that

01:02:41 --> 01:02:47
maybe the operator had made a mistake

01:02:44 --> 01:02:50
they they thought that there's something

01:02:46 --> 01:02:51
crazy going on and and it just broke

01:02:49 --> 01:02:54
very rule that go players are taught

01:02:50 --> 01:02:55
from a very young age they just taught

01:02:53 --> 01:02:57
you know you this kind of move called

01:02:54 --> 01:02:59
the shoulder hit you you you can only

01:02:56 --> 01:03:01
play it on the third line or the fourth

01:02:58 --> 01:03:03
line and alphago played out in the fifth

01:03:00 --> 01:03:05
line and and it turned out to be a

01:03:02 --> 01:03:06
brilliant move and made this beautiful

01:03:04 --> 01:03:11
pattern in the middle of the board that

01:03:05 --> 01:03:13
ended up winning the game and so this

01:03:10 --> 01:03:16
really was a clear instance where we

01:03:12 --> 01:03:18
could say computers exhibited creativity

01:03:15 --> 01:03:21
that this was really a move that was

01:03:17 --> 01:03:24
omething humans hadn't known about

01:03:20 --> 01:03:26
hadn't anticipated and computers

01:03:23 --> 01:03:28
discovered this idea they they were the

01:03:25 --> 01:03:30
ones to say actually you know here's a

01:03:27 --> 01:03:33
new idea something new not not in the

01:03:29 --> 01:03:38
domains of human knowledge of the game

01:03:32 --> 01:03:39
and and and now the humans think this is

01:03:37 --> 01:03:43
a reasonable thing to do and and it's

01:03:38 --> 01:03:45
part of go knowledge now the third game

01:03:42 --> 01:03:47
something special happens when you play

01:03:44 --> 01:03:49
against a human world champion which

01:03:46 --> 01:03:52
again I hadn't anticipated before going

01:03:48 --> 01:03:55
there which is you know these these

01:03:51 --> 01:03:56
players are amazing Lisa Dahl was a true

01:03:54 --> 01:04:00
champion eighteen time world champion

01:03:55 --> 01:04:03
and had this amazing ability to to probe

01:03:59 --> 01:04:07
alphago fer for weaknesses of any kind

01:04:02 --> 01:04:09
and in the third game he was losing

01:04:06 --> 01:04:12
and we felt we were sailing comfortably

01:04:08 --> 01:04:16
to victory but he managed to from

01:04:11 --> 01:04:18
nothing stir up this fight and build

01:04:15 --> 01:04:22
what's called a double ko these kind of

01:04:17 --> 01:04:24
repetitive positions and he knew that

01:04:21 --> 01:04:26
historically no no computer go program

01:04:23 --> 01:04:27
had ever been able to deal correctly

01:04:25 --> 01:04:29
with double code positions and he

01:04:26 --> 01:04:32
managed to summon one out of out of

01:04:28 --> 01:04:34
nothing and so for us you know this was

01:04:31 --> 01:04:36
a real challenge like would

01:04:33 --> 01:04:37
alphago be able to deal with this or

01:04:35 --> 01:04:40
would it just kind of crumble in the

01:04:36 --> 01:04:42
face of this situation and fortunately

01:04:39 --> 01:04:46
it dealt with it perfectly the force

01:04:41 --> 01:04:49
game was was amazing in that Lisa doll

01:04:45 --> 01:04:52
appeared to be losing this game alphago

01:04:48 --> 01:04:54
thought it was winning and then Lisa

01:04:51 --> 01:04:57
doll did something which I think only a

01:04:53 --> 01:04:59
true world champion can do which is he

01:04:56 --> 01:05:01
found a brilliant sequence in the middle

01:04:58 --> 01:05:05
of the game a brilliant sequence that

01:05:00 --> 01:05:09
led him to really just transform the

01:05:04 --> 01:05:11
position it kind of it it he found it's

01:05:08 --> 01:05:14
just a piece of genius really

01:05:10 --> 01:05:17
and after that alphago

01:05:13 --> 01:05:18
it's it's evaluation just tumbled it

01:05:16 --> 01:05:21
hought it was winning this game and all

01:05:17 --> 01:05:22
of a sudden it tumbled and said oh now

01:05:20 --> 01:05:25
I've got no chance and it starts to

01:05:21 --> 01:05:28
behave rather oddly at that point in the

01:05:24 --> 01:05:30
final game for some reason we as a team

01:05:27 --> 01:05:32
were convinced having seen alphago in

01:05:29 --> 01:05:35
the previous game suffer from delusions

01:05:31 --> 01:05:37
we as a team were convinced that it was

01:05:34 --> 01:05:38
uffering from another delusion we were

01:05:36 --> 01:05:40
convinced that it was miss evaluating

01:05:37 --> 01:05:43
the position and that something was

01:05:39 --> 01:05:44
going terribly wrong and it was only in

01:05:42 --> 01:05:47
the last few moves of the game that we

01:05:43 --> 01:05:49
realized that actually although it had

01:05:46 --> 01:05:52
been predicting it was going to win all

01:05:48 --> 01:05:54
the way through it really was and and so

01:05:51 --> 01:05:56
mehow you know it just taught us yet

01:05:53 --> 01:05:58
again that you have to have faith in in

01:05:55 --> 01:05:59
your systems when they when they exceed

01:05:57 --> 01:06:02
your own level of ability in your own

01:05:58 --> 01:06:04
judgment you have to trust in them too

01:06:01 --> 01:06:08
to know better than the new the designer

01:06:03 --> 01:06:10
once you've you've stowed in them the

01:06:07 --> 01:06:14
ability to to judge better than you can

01:06:09 --> 01:06:16
then trust the system to do so so just

01:06:13 --> 01:06:19
looking in case of deep blue beating

01:06:15 --> 01:06:22
Garry Kasparov

01:06:18 --> 01:06:26
so get garrus is I think the first time

01:06:21 --> 01:06:28
he's ever lost actually to anybody and I

01:06:25 --> 01:06:32
mean there's a similar situation loose

01:06:27 --> 01:06:36
at all it's uh it's a tragic it's a

01:06:31 --> 01:06:40
tragic loss for humans but a beautiful

01:06:35 --> 01:06:44
one I think that's kind of from the

01:06:39 --> 01:06:49
tragedy sort of emerges over time

01:06:43 --> 01:06:51
merges the kind of inspiring story but

01:06:48 --> 01:06:55
Lisa Dahl recently announced his

01:06:50 --> 01:06:58
retirement I don't know if we can look

01:06:54 --> 01:07:00
too deeply into it but he did say that

01:06:57 --> 01:07:04
even if I become number one there's an

01:06:59 --> 01:07:06
entity that cannot be defeated so what

01:07:03 --> 01:07:08
do you think about these words what do

01:07:05 --> 01:07:10
you think about his retirement from the

01:07:07 --> 01:07:12
game ago well let me take you back first

01:07:09 --> 01:07:14
of all to the first part of your comment

01:07:11 --> 01:07:17
about Garry Kasparov because actually at

01:07:13 --> 01:07:20
he panel yesterday he specifically said

01:07:16 --> 01:07:23
that when he first lost a deep-blue

01:07:19 --> 01:07:25
he he viewed it as a failure he viewed

01:07:22 --> 01:07:28
that this this had been a failure of his

01:07:24 --> 01:07:30
but later on in his career he said he'd

01:07:27 --> 01:07:32
come to realize that actually it was a

01:07:29 --> 01:07:35
success it was a success for everyone

01:07:31 --> 01:07:39
because this marked a transformational

01:07:34 --> 01:07:41
moment for AI and so even for Kip Garry

01:07:38 --> 01:07:43
Kasparov he came to realize at that

01:07:40 --> 01:07:47
moment was was was pivotal and actually

01:07:42 --> 01:07:50
meant something much more than then you

01:07:46 --> 01:07:53
know his personal loss in that moment

01:07:49 --> 01:07:56
Lisa doll I think was a much more

01:07:52 --> 01:07:59
cognizant of that even at the time so in

01:07:55 --> 01:08:02
his closing remarks to the match he

01:07:58 --> 01:08:04
really felt very strongly that what had

01:08:01 --> 01:08:07
happened and the alphago match was not

01:08:03 --> 01:08:09
only meaningful for AI but for humans as

01:08:06 --> 01:08:11
well and he felt as a go player that it

01:08:08 --> 01:08:13
had opened his horizons and meant that

01:08:10 --> 01:08:15
he could start exploring new things it

01:08:12 --> 01:08:18
brought his joy back for the game of go

01:08:14 --> 01:08:20
because it broken all of the conventions

01:08:17 --> 01:08:22
and barriers and meant that you know

01:08:19 --> 01:08:26
suddenly suddenly anything was possible

01:08:21 --> 01:08:27
again and so you know I was sad to hear

01:08:25 --> 01:08:31
that he'd retired but you know he's been

01:08:26 --> 01:08:32
a great a great world champion over many

01:08:30 --> 01:08:35
years

01:08:31 --> 01:08:37
and I think you know that he'll be he'll

01:08:34 --> 01:08:39
be remembered for that evermore he'll be

01:08:36 --> 01:08:42
remembered as the last person to to beat

01:08:38 --> 01:08:44
alphago I mean after after that we

01:08:41 --> 01:08:47
increased the power of the system and

01:08:43 --> 01:08:51
the next version of alphago beats

01:08:46 --> 01:08:55
the the other strong human players 60

01:08:50 --> 01:08:56
games to nil so you know what a great

01:08:54 --> 01:08:58
moment for him and something to be

01:08:55 --> 01:09:00
remembered for

01:08:57 --> 01:09:05
it's interestingly you spent time at

01:08:59 --> 01:09:09
riple AI on a panel with Garry Kasparov

01:09:04 --> 01:09:13
what I mean it's almost just curious to

01:09:08 --> 01:09:16
learn the conversations you've had with

01:09:12 --> 01:09:17
Garry and the because he's also now he's

01:09:15 --> 01:09:20
written a book about artificial

01:09:16 --> 01:09:22
intelligence he's thinking about AI he

01:09:19 --> 01:09:26
has kind of a view of it and he talks

01:09:21 --> 01:09:29
about alphago a lot what what's your

01:09:25 --> 01:09:31
sense be arguably I'm not just being

01:09:28 --> 01:09:33
Russian but I think Gary is the greatest

01:09:30 --> 01:09:36
chess player of all time the probably

01:09:32 --> 01:09:42
one of the greatest game players of all

01:09:35 --> 01:09:44
time and you sort of at the center of

01:09:41 --> 01:09:46
creating a system that beats one of the

01:09:43 --> 01:09:47
greatest players of all time

01:09:45 --> 01:09:50
so what's that conversation like is

01:09:46 --> 01:09:52
there anything yeah any interesting digs

01:09:49 --> 01:09:55
any bets and you come and you find new

01:09:51 --> 01:10:00
things and you profound things so Gary

01:09:54 --> 01:10:02
Kasparov has an incredible respect for

01:09:59 --> 01:10:06
what we did with alphago and you know

01:10:01 --> 01:10:09
it's it's an amazing tribute coming from

01:10:05 --> 01:10:11
him of all people that he really

01:10:08 --> 01:10:12
appreciates and respects what what we've

01:10:10 --> 01:10:15
done and

01:10:11 --> 01:10:18
I think he feels that the progress which

01:10:14 --> 01:10:21
was happened in in computer chess which

01:10:17 --> 01:10:25
later after alphago we we built the

01:10:20 --> 01:10:28
alpha zero system which defeated the the

01:10:24 --> 01:10:30
world's strongest chess programs and to

01:10:27 --> 01:10:32
Garry Kasparov that moment in computer

01:10:29 --> 01:10:35
chess was more profound than than than

01:10:31 --> 01:10:37
deep blue and the reason he believes it

01:10:34 --> 01:10:39
mattered more was because it was done

01:10:36 --> 01:10:41
with with learning and a system which

01:10:38 --> 01:10:43
was able to discover for itself new

01:10:40 --> 01:10:46
principles new ideas which were able to

01:10:42 --> 01:10:50
play the game in a in a in a way which

01:10:45 --> 01:10:52
e hadn't always known about or anyone

01:10:49 --> 01:10:55
and in fact one of the things I

01:10:51 --> 01:10:57
discovered at this panel was that the

01:10:54 --> 01:11:00
current world champion Magnus Carlsen

01:10:56 --> 01:11:03
apparently recently commented on his

01:10:59 --> 01:11:05
improvement in performance and he

01:11:02 --> 01:11:06
attributes it to alpha zero that he's

01:11:04 --> 01:11:08
been studying the games of alpha zero

01:11:05 --> 01:11:10
and he's changed his style play more

01:11:07 --> 01:11:14
like alpha zero and it's led to him

01:11:09 --> 01:11:18
actually increasing his his his rating

01:11:13 --> 01:11:21
to a new peak yeah I guess to me just

01:11:17 --> 01:11:22
like to Gary the inspiring thing is that

01:11:20 --> 01:11:25
and just like you said with

01:11:21 --> 01:11:27
reinforcement learning reinforcement

01:11:24 --> 01:11:29
learning and deep learning machine

01:11:26 --> 01:11:33
learning feels like what intelligence is

01:11:28 --> 01:11:37
yeah and you know you could attribute it

01:11:32 --> 01:11:39
o sort of a bitter viewpoint from

01:11:36 --> 01:11:42
Gary's perspective from us humans

01:11:38 --> 01:11:45
perspective saying that sir pure search

01:11:41 --> 01:11:47
that IBM do Blue was doing is not really

01:11:44 --> 01:11:50
intelligence but somehow it didn't feel

01:11:46 --> 01:11:51
ike it and so that's the magical I'm

01:11:49 --> 01:11:54
not sure what it is about learning that

01:11:50 --> 01:11:58
feels like intelligence but it but it

01:11:53 --> 01:11:59
does so I think we should not demean the

01:11:57 --> 01:12:01
achievements of what was done in

01:11:58 --> 01:12:03
previous eras of AI I think that deep

01:12:00 --> 01:12:07
blue was an amazing achievement in

01:12:02 --> 01:12:10
itself and that heuristic search of the

01:12:06 --> 01:12:12
kind that was used by deep blue had some

01:12:09 --> 01:12:14
powerful ideas that were in there but it

01:12:11 --> 01:12:17
also missed some things so so the fact

01:12:13 --> 01:12:18
hat the that the evaluation function

01:12:16 --> 01:12:21
the way that the chess position was

01:12:17 --> 01:12:25
understood was created by humans and not

01:12:20 --> 01:12:28
by the machine is a limitation which

01:12:24 --> 01:12:31
means that there's a ceiling on how well

01:12:27 --> 01:12:31
it can do but maybe more importantly it

01:12:30 --> 01:12:34
means

01:12:30 --> 01:12:36
the same idea cannot be applied in other

01:12:33 --> 01:12:39
domains where we don't have access to

01:12:35 --> 01:12:41
the kind of human Grand Master's and

01:12:38 --> 01:12:43
that ability to kind of encode exactly

01:12:40 --> 01:12:45
their knowledge into an evaluation

01:12:42 --> 01:12:47
function and the reality is that the

01:12:44 --> 01:12:49
story of AI is that you know most

01:12:46 --> 01:12:51
domains turn out to be of the second

01:12:48 --> 01:12:53
type where when knowledge is messy it's

01:12:50 --> 01:12:57
hard to extract from experts or it isn't

01:12:52 --> 01:13:00
even available and so so we need to

01:12:56 --> 01:13:03
solve problems in a different way and I

01:13:00 --> 01:13:05
think alphago is a step towards solving

01:13:02 --> 01:13:09
things in a way which which puts

01:13:04 --> 01:13:11
learning as first-class citizen and says

01:13:08 --> 01:13:14
ystems need to understand for

01:13:10 --> 01:13:20
themselves how to understand the world

01:13:13 --> 01:13:21
how to judge their the value of any

01:13:19 --> 01:13:22
action that they might take within that

01:13:20 --> 01:13:28
world in any state they might find

01:13:21 --> 01:13:30
themselves in and in order to do that we

01:13:27 --> 01:13:33
make progress towards AI yeah so one

01:13:29 --> 01:13:35
of the nice things about this about

01:13:32 --> 01:13:38
aking a learning approach to the game

01:13:34 --> 01:13:40
of Go game playing is that the things

01:13:37 --> 01:13:42
you learn the things you figure out are

01:13:39 --> 01:13:44
actually going to be applicable to other

01:13:41 --> 01:13:47
problems there are real-world problems

01:13:43 --> 01:13:49
that's so that's ultimately I mean

01:13:46 --> 01:13:51
there's two really interesting things

01:13:48 --> 01:13:53
about alphago one is the science of it

01:13:50 --> 01:13:56
just the science of learning the science

01:13:52 --> 01:13:59
of intelligence and then the other is

01:13:55 --> 01:14:01
all you're actually learning to figuring

01:13:58 --> 01:14:03
out how to build systems that would be

01:14:00 --> 01:14:06
potentially applicable in in other

01:14:03 --> 01:14:08
applications medical autonomous vehicles

01:14:05 --> 01:14:12
robotics all I mean it's just open the

01:14:07 --> 01:14:16
door to all kinds of applications so the

01:14:11 --> 01:14:19
next incredible step right really the

01:14:15 --> 01:14:22
profound step is probably alphago zero I

01:14:18 --> 01:14:24
mean it's arguable I kind of see them

01:14:21 --> 01:14:25
all as the same place but really in

01:14:23 --> 01:14:28
perhaps you were already thinking that

01:14:24 --> 01:14:30
alphago zeros the natural it was always

01:14:27 --> 01:14:32
going to be the next step

01:14:29 --> 01:14:35
but it's removing the reliance on human

01:14:31 --> 01:14:38
expert games for pre-training as you

01:14:34 --> 01:14:43
mentioned so how big of an intellectual

01:14:37 --> 01:14:45
eap was this that that self play could

01:14:42 --> 01:14:47
achieve superhuman level performance

01:14:44 --> 01:14:50
it's on and maybe could you also say

01:14:46 --> 01:14:55
what is self play we kind of mentioned a

01:14:49 --> 01:14:58
few times but so let me start with self

01:14:54 --> 01:15:02
play so the idea of self play is

01:14:57 --> 01:15:03
omething which is really about systems

01:15:01 --> 01:15:05
learning for themselves but in the

01:15:02 --> 01:15:09
situation where there's more than one

01:15:04 --> 01:15:10
agent and so if you're in a game and a

01:15:08 --> 01:15:12
game is a played between two players

01:15:09 --> 01:15:17
then self play is really about

01:15:11 --> 01:15:18
understanding that game just by playing

01:15:16 --> 01:15:21
ames against yourself rather than

01:15:17 --> 01:15:24
against any actual real opponent and so

01:15:20 --> 01:15:25
it's a way to kind of um discover

01:15:23 --> 01:15:31
strategies without having to actually

01:15:24 --> 01:15:37
need to go out and play against any

01:15:30 --> 01:15:40
particular human player for example the

01:15:36 --> 01:15:45
main idea of alpha zero was really to

01:15:39 --> 01:15:46
you know try and step back from any of

01:15:44 --> 01:15:49
the knowledge that we'd put into the

01:15:45 --> 01:15:52
system and ask the question is it

01:15:48 --> 01:15:55
possible to come up with a single

01:15:51 --> 01:15:58
legant principle by which a system can

01:15:54 --> 01:16:00
learn for itself all of the knowledge

01:15:57 --> 01:16:03
which it requires to play to play a game

01:15:59 --> 01:16:06
such as go importantly by taking

01:16:02 --> 01:16:09
knowledge out you not only make the

01:16:05 --> 01:16:11
system less brittle in the sense that

01:16:08 --> 01:16:12
perhaps the knowledge you were putting

01:16:10 --> 01:16:15
in was was just getting in the way and

01:16:11 --> 01:16:17
maybe stopping the system learning for

01:16:14 --> 01:16:21
itself but also you make it more general

01:16:16 --> 01:16:23
the more knowledge you put in the harder

01:16:20 --> 01:16:25
it is for a system to actually be placed

01:16:22 --> 01:16:29
taken out of the system in which it's

01:16:24 --> 01:16:30
kind of been designed and placed in some

01:16:28 --> 01:16:31
other system that maybe would need a

01:16:29 --> 01:16:34
completely different knowledge base to

01:16:30 --> 01:16:37
understand and perform well and so

01:16:33 --> 01:16:39
the real goal here is to strip out all

01:16:36 --> 01:16:40
of the knowledge that we put in to the

01:16:38 --> 01:16:43
point that we can just plug it into

01:16:39 --> 01:16:45
something totally different and that to

01:16:42 --> 01:16:47
me is really you know the the promise of

01:16:44 --> 01:16:49
AI is that we can have systems such as

01:16:46 --> 01:16:52
that which you know no matter what the

01:16:48 --> 01:16:56
goal is no matter what goal we set to

01:16:51 --> 01:16:57
the system we can come up with we have

01:16:55 --> 01:16:59
an algorithm which can be placed into

01:16:56 --> 01:17:01
that world into that and

01:16:58 --> 01:17:06
can succeed in achieving that goal

01:17:00 --> 01:17:07
and then that that's to me is almost the

01:17:05 --> 01:17:10
essence of intelligence if we can

01:17:06 --> 01:17:13
achieve that and so alpha zero is a step

01:17:09 --> 01:17:15
towards that and it's a step that was

01:17:12 --> 01:17:18
taken in the context of two-player

01:17:14 --> 01:17:21
perfect information games like go and

01:17:17 --> 01:17:24
chess we also applied it to Japanese

01:17:20 --> 01:17:27
chess so just to clarify the first step

01:17:23 --> 01:17:30
was alphago zero the first step was to

01:17:26 --> 01:17:33
try and take all of the knowledge out of

01:17:29 --> 01:17:38
alphago in such a way that it could play

01:17:32 --> 01:17:41
in a in a fully self discovered way

01:17:37 --> 01:17:43
purely from self play and to me the the

01:17:40 --> 01:17:45
motivation for that was always that we

01:17:42 --> 01:17:49
could then plug it into other domains

01:17:44 --> 01:17:54
but we saved that bat until later well

01:17:48 --> 01:17:55
in in fact I mean just for fun I could

01:17:53 --> 01:17:57
tell you exactly the moment where where

01:17:54 --> 01:17:59
the idea for alpha zero occurred to me

01:17:56 --> 01:18:01
because I think there's maybe a lesson

01:17:58 --> 01:18:03
there for for researchers who kind of

01:18:00 --> 01:18:06
too deeply embedded in their in their

01:18:02 --> 01:18:09
esearch and you know working 24/7 to

01:18:05 --> 01:18:14
try and come up with the next idea which

01:18:08 --> 01:18:17
is actually occurred to me on honeymoon

01:18:13 --> 01:18:21
like it's my most fully relaxed state

01:18:16 --> 01:18:25
really enjoying myself and and just

01:18:20 --> 01:18:29
being this like the algorithm for alpha

01:18:24 --> 01:18:31
zero just appeared I come and in in its

01:18:28 --> 01:18:35
full form and this was actually before

01:18:30 --> 01:18:38
we played against Lisa doll but we we

01:18:34 --> 01:18:41
just didn't I think we were so busy

01:18:37 --> 01:18:44
trying to make sure we could beat the

01:18:40 --> 01:18:47
world champion that it was only

01:18:43 --> 01:18:49
later that we had the the opportunity to

01:18:46 --> 01:18:51
step back and start examining that that

01:18:48 --> 01:18:54
sort of deeper scientific question of

01:18:50 --> 01:18:57
whether this could really work so

01:18:53 --> 01:19:01
nevertheless so soft play is probably

01:18:56 --> 01:19:04
one of the most profound ideas that

01:19:00 --> 01:19:08
represents to me at least artificial

01:19:03 --> 01:19:12
intelligence but the fact that you could

01:19:07 --> 01:19:13
use that kind of mechanism to again be

01:19:11 --> 01:19:15
more

01:19:12 --> 01:19:19
glass players that's very surprising so

01:19:14 --> 01:19:21
we kind of to be it feels like you have

01:19:18 --> 01:19:23
to train in a large number of expert

01:19:20 --> 01:19:25
gamer so was it surprising to you what

01:19:22 --> 01:19:27
was the intuition can you sort of think

01:19:24 --> 01:19:29
not necessarily at that time even now

01:19:26 --> 01:19:31
hat's your intuition why this thing

01:19:28 --> 01:19:33
works so well why I was able to learn

01:19:30 --> 01:19:36
from scratch well let me first say why

01:19:32 --> 01:19:39
we tried it so we tried it both because

01:19:35 --> 01:19:41
I feel that it was the deeper scientific

01:19:38 --> 01:19:43
question to to be asking to make

01:19:40 --> 01:19:46
progress towards AI and also because in

01:19:42 --> 01:19:49
general in my research I don't like to

01:19:45 --> 01:19:52
do research on questions for which we

01:19:48 --> 01:19:53
already know the likely outcome I don't

01:19:51 --> 01:19:56
see much value in running an experiment

01:19:52 --> 01:19:59
where you're 95% confident that that you

01:19:55 --> 01:20:03
will succeed and so we could have tried

01:19:58 --> 01:20:04
you know maybe to to take alphago and do

01:20:02 --> 01:20:06
something which we we knew for sure it

01:20:03 --> 01:20:08
would succeed on but much more

01:20:05 --> 01:20:09
interesting to me was to try try it on

01:20:07 --> 01:20:13
the things which we weren't sure about

01:20:08 --> 01:20:15
and one of the big questions on our

01:20:12 --> 01:20:17
minds back then was you know could you

01:20:14 --> 01:20:19
really do this with self play alone how

01:20:16 --> 01:20:23
far could that go would it be as strong

01:20:18 --> 01:20:26
and honestly we weren't sure yeah it was

01:20:22 --> 01:20:28
50/50 I think you know we I really if

01:20:25 --> 01:20:31
you'd asked me I wasn't confident that

01:20:27 --> 01:20:32
it could reach the same level as these

01:20:30 --> 01:20:36
systems but it felt like the right

01:20:31 --> 01:20:38
question to ask and even if even if it

01:20:35 --> 01:20:42
had not achieved the same level I felt

01:20:37 --> 01:20:48
hat that was an important direction to

01:20:41 --> 01:20:51
be studying and so then lo and behold it

01:20:47 --> 01:20:53
actually ended up outperforming the

01:20:50 --> 01:20:55
previous version of of alphago and

01:20:52 --> 01:20:58
indeed was able to beat it by 100 games

01:20:54 --> 01:21:02
to zero so what's the intuition as to as

01:20:57 --> 01:21:06
to why I think that the intuition to me

01:21:01 --> 01:21:10
is clear that whenever you have errors

01:21:05 --> 01:21:12
in a in a system as we did in alphago

01:21:09 --> 01:21:14
suffered from these delusions

01:21:11 --> 01:21:15
occasionally it would misunderstand what

01:21:13 --> 01:21:18
was going on in a position and miss

01:21:14 --> 01:21:21
evaluate it how can how can you remove

01:21:17 --> 01:21:23
all of these these errors errors arise

01:21:20 --> 01:21:25
from many sources for us they were

01:21:22 --> 01:21:26
arising both from you know it started

01:21:24 --> 01:21:28
from the human data but also

01:21:25 --> 01:21:30
from there from the nature of the search

01:21:27 --> 01:21:32
and the nature of the algorithm itself

01:21:29 --> 01:21:36
but the only way to address them in any

01:21:31 --> 01:21:39
complex system is to give the system the

01:21:35 --> 01:21:41
ability to correct its own errors it

01:21:38 --> 01:21:42
must be able to correct them it must be

01:21:40 --> 01:21:45
able to learn for itself when it's doing

01:21:41 --> 01:21:47
something wrong and correct for it and

01:21:44 --> 01:21:50
so it seemed to me that the way to

01:21:46 --> 01:21:52
correct delusions was indeed to have

01:21:49 --> 01:21:54
more iterations of reinforcement

01:21:51 --> 01:21:55
learning that you know no matter where

01:21:53 --> 01:21:58
you start you should be able to correct

01:21:54 --> 01:22:00
hose errors until it gets to play that

01:21:57 --> 01:22:01
out and understand oh well I thought

01:21:59 --> 01:22:03
hat I was going to win in this

01:22:00 --> 01:22:06
ituation but then I ended up losing

01:22:02 --> 01:22:07
that suggests that I was miss evaluating

01:22:05 --> 01:22:09
something there's a hole in my knowledge

01:22:06 --> 01:22:10
and now now the system can correct for

01:22:08 --> 01:22:13
itself and and understand how to do

01:22:09 --> 01:22:16
better now if you take that same idea

01:22:12 --> 01:22:18
nd trace it back all the way to the

01:22:15 --> 01:22:21
beginning it should be able to take you

01:22:17 --> 01:22:24
from no knowledge from completely random

01:22:20 --> 01:22:25
starting point all the way to the

01:22:23 --> 01:22:28
highest levels of knowledge that you can

01:22:24 --> 01:22:30
achieve in in a domain and the principle

01:22:27 --> 01:22:32
is the same that if you give if you

01:22:29 --> 01:22:35
bestow a system with the ability to

01:22:31 --> 01:22:37
correct its own errors then it can take

01:22:34 --> 01:22:39
you from random to something slightly

01:22:36 --> 01:22:41
better than random because it sees the

01:22:38 --> 01:22:43
stupid things that the random is doing

01:22:40 --> 01:22:44
and it can correct them and then it can

01:22:42 --> 01:22:46
take you from that slightly better

01:22:43 --> 01:22:47
system and understand what what's that

01:22:45 --> 01:22:50
doing wrong and it takes you on to the

01:22:46 --> 01:22:53
next level and the next level and and

01:22:49 --> 01:22:56
this progress it can go on indefinitely

01:22:52 --> 01:22:57
and indeed you know what would have

01:22:55 --> 01:23:01
happened if we'd carried on training

01:22:56 --> 01:23:04
alphago zero for longer we saw no sign

01:23:00 --> 01:23:05
of it slowing down it's in improvements

01:23:03 --> 01:23:10
or at least it was certainly carrying on

01:23:04 --> 01:23:13
to improve and presumably if you had the

01:23:09 --> 01:23:15
computational resources this this could

01:23:12 --> 01:23:17
lead to better and better systems that

01:23:14 --> 01:23:20
discover more and more so your intuition

01:23:16 --> 01:23:21
is fundamentally there's not a ceiling

01:23:19 --> 01:23:24
to this process

01:23:21 --> 01:23:27
the one of the surprising things just

01:23:23 --> 01:23:30
like you said is the process of patching

01:23:26 --> 01:23:33
errors it's intuitively makes sense they

01:23:29 --> 01:23:35
this is a reinforcement learning should

01:23:32 --> 01:23:37
be part of that process but what is

01:23:34 --> 01:23:40
urprising is in the process of patching

01:23:36 --> 01:23:43
your own lack of knowledge you don't

01:23:39 --> 01:23:47
open up other patches you go you keep

01:23:42 --> 01:23:49
sort of cool like there's a monotonic

01:23:46 --> 01:23:51
decrease of your weaknesses well let me

01:23:48 --> 01:23:53
back this up you know I think

01:23:50 --> 01:23:55
science always should make falsifiable

01:23:52 --> 01:23:57
hypotheses yes so let me let me back out

01:23:54 --> 01:24:00
his claim with a falsifiable hypothesis

01:23:56 --> 01:24:02
which is that if someone was to in the

01:23:59 --> 01:24:07
future take alpha zero as an algorithm

01:24:01 --> 01:24:11
and run it on with greater computational

01:24:06 --> 01:24:13
resources that we had available today

01:24:10 --> 01:24:15
then I predict that they would be able

01:24:12 --> 01:24:17
to beat the previous system 100 games to

01:24:14 --> 01:24:18
zero and that if they were then to do

01:24:16 --> 01:24:21
the same thing a couple of years later

01:24:17 --> 01:24:23
that that would be that previous system

01:24:20 --> 01:24:25
hundred games to zero and that that

01:24:22 --> 01:24:28
process would continue indefinitely

01:24:24 --> 01:24:30
throughout at least my human lifetime

01:24:27 --> 01:24:33
presumably the game of girl would set

01:24:29 --> 01:24:35
he ceiling I mean the game of go would

01:24:32 --> 01:24:36
set the ceiling but the game of go has

01:24:34 --> 01:24:39
ten to the hundred and seventy states in

01:24:35 --> 01:24:41
it so so the ceiling is unreachable by

01:24:38 --> 01:24:45
any computational device that can be

01:24:40 --> 01:24:48
built out of the you know 10 to the 80

01:24:44 --> 01:24:50
atoms in the universe you asked a really

01:24:47 --> 01:24:52
good question which is you know do you

01:24:49 --> 01:24:54
not open up other errors when you when

01:24:51 --> 01:24:58
you correct your previous ones and the

01:24:53 --> 01:25:01
answer is is yes you do and so so it's a

01:24:57 --> 01:25:03
remarkable fact about about this class

01:25:00 --> 01:25:09
of two-player game and also true of

01:25:02 --> 01:25:13
single agent games that essentially

01:25:08 --> 01:25:15
progress will always lead you to if you

01:25:12 --> 01:25:17
have sufficient representational

01:25:14 --> 01:25:19
resource like imagine you had could

01:25:16 --> 01:25:23
represent every state in a big table of

01:25:18 --> 01:25:25
the game then we we know for sure that a

01:25:22 --> 01:25:28
progress of self-improvement will lead

01:25:24 --> 01:25:30
all the way in the single agent case to

01:25:27 --> 01:25:32
the optimal possible behavior and in the

01:25:29 --> 01:25:34
two-player case to the minimax optimal

01:25:31 --> 01:25:36
behavior and that is that the best way

01:25:33 --> 01:25:40
that I can play knowing that you're

01:25:35 --> 01:25:42
playing perfectly against me and so so

01:25:39 --> 01:25:46
for those cases we know that even if you

01:25:41 --> 01:25:48
do open up some new error that in some

01:25:45 --> 01:25:50
sense you've made progress you've you're

01:25:47 --> 01:25:53
progressing towards the the best that

01:25:49 --> 01:25:54
can be done so alphago was initially

01:25:52 --> 01:25:57
trained

01:25:53 --> 01:26:00
expert games with some self play alphago

01:25:56 --> 01:26:03
zero removed the need to be trained on

01:25:59 --> 01:26:06
expert games and then another incredible

01:26:02 --> 01:26:09
step for me because I just love chess is

01:26:05 --> 01:26:11
to generalize that further to be in

01:26:08 --> 01:26:15
alpha zero to be able to play the game

01:26:10 --> 01:26:17
of go beating alphago zero and alphago

01:26:14 --> 01:26:20
and then also being able to play the

01:26:16 --> 01:26:22
check the game of chess and others so

01:26:19 --> 01:26:25
what was that step like what's the

01:26:21 --> 01:26:26
interesting aspects there that required

01:26:24 --> 01:26:31
to make that happen

01:26:25 --> 01:26:33
I think the remarkable observation which

01:26:30 --> 01:26:36
we saw with alpha zero was that actually

01:26:32 --> 01:26:39
without modifying the algorithm at all

01:26:35 --> 01:26:42
it was able to play and crack some of a

01:26:38 --> 01:26:44
i's greatest previous challenges in

01:26:41 --> 01:26:47
particular we dropped it into the game

01:26:43 --> 01:26:49
of chess and unlike the previous systems

01:26:46 --> 01:26:52
like deep blue which had been worked on

01:26:48 --> 01:26:54
for you know years and years and we were

01:26:51 --> 01:26:57
able to beat the world's strongest

01:26:53 --> 01:27:01
computer chess program convincingly

01:26:56 --> 01:27:04
using a system that was fully discovered

01:27:00 --> 01:27:07
by its own from from scratch with its

01:27:03 --> 01:27:09
own principles and in fact one of the

01:27:06 --> 01:27:12
nice things that that we found was that

01:27:08 --> 01:27:14
in fact we also achieved the same result

01:27:11 --> 01:27:16
in in Japanese chess a variant of chess

01:27:13 --> 01:27:17
where where you get to capture pieces

01:27:15 --> 01:27:20
and then place them back down on your on

01:27:16 --> 01:27:23
your own side as an extra piece so much

01:27:19 --> 01:27:24
more complicated variant of chess and we

01:27:22 --> 01:27:27
also beat the world's strongest programs

01:27:23 --> 01:27:28
and reach superhuman performance in that

01:27:26 --> 01:27:31
game too

01:27:27 --> 01:27:34
and it was the very first time that we'd

01:27:30 --> 01:27:36
ever run the system on that particular

01:27:33 --> 01:27:39
game was the version that we published

01:27:35 --> 01:27:42
in the paper on on alpha zero it just

01:27:38 --> 01:27:43
works out of the box literally no no no

01:27:41 --> 01:27:45
touching it we didn't have to do

01:27:42 --> 01:27:47
anything and and there it was superhuman

01:27:44 --> 01:27:50
performance no tweaking no no twiddling

01:27:46 --> 01:27:52
and so I think there's something

01:27:49 --> 01:27:54
beautiful about that principle that you

01:27:51 --> 01:27:57
can take and algorithm and without

01:27:53 --> 01:28:02
widdling anything it just it just works

01:27:56 --> 01:28:05
now to go beyond alpha zero what's

01:28:01 --> 01:28:07
required alpha zero is is just a step

01:28:04 --> 01:28:11
and there's a long way to go beyond that

01:28:06 --> 01:28:13
o really crack the deep problems of AI

01:28:10 --> 01:28:15
but one of the important steps is to

01:28:12 --> 01:28:17
acknowledge that the world is a really

01:28:14 --> 01:28:21
messy place you know it's this rich

01:28:16 --> 01:28:23
complex beautiful but messy environment

01:28:20 --> 01:28:26
hat we live in and no one gives us the

01:28:22 --> 01:28:28
rules like no one knows the rules of the

01:28:25 --> 01:28:30
world at least maybe we understand that

01:28:27 --> 01:28:33
it operates according to Newtonian or

01:28:29 --> 01:28:35
quantum mechanics at the micro level all

01:28:32 --> 01:28:37
according to relativity at the macro

01:28:34 --> 01:28:40
level but that's not a model that's used

01:28:36 --> 01:28:42
to useful for us as people to to operate

01:28:39 --> 01:28:45
in it somehow the agent needs to

01:28:41 --> 01:28:46
understand the world for itself in a way

01:28:44 --> 01:28:48
where no one tells it the rules of the

01:28:45 --> 01:28:52
game and yet it can still figure out

01:28:47 --> 01:28:54
what to do in that world deal with this

01:28:51 --> 01:28:57
tream of observations coming in rich

01:28:53 --> 01:28:59
sensory input coming in actions going

01:28:56 --> 01:29:01
out in a way that allows it to reason in

01:28:58 --> 01:29:03
the way that alphago or alpha zero can

01:29:00 --> 01:29:06
reason in the way that these go and

01:29:02 --> 01:29:08
chess-playing programs can reason but in

01:29:05 --> 01:29:11
a way that allows it to take actions in

01:29:07 --> 01:29:16
that messy world to to achieve its goals

01:29:10 --> 01:29:18
and so this led us to the most recent

01:29:15 --> 01:29:21
step in the story of alphago

01:29:17 --> 01:29:24
which was a system called mu 0 and mu

01:29:20 --> 01:29:26
zero is a system which learns for itself

01:29:23 --> 01:29:28
even when the rules are not given to it

01:29:25 --> 01:29:31
actually can be dropped into a system

01:29:27 --> 01:29:35
with messy perceptual inputs we actually

01:29:30 --> 01:29:37
tried it in the in some Atari games the

01:29:34 --> 01:29:39
canonical domains of Atari that have

01:29:36 --> 01:29:43
been used for reinforcement learning and

01:29:38 --> 01:29:45
this system learned to build a model

01:29:42 --> 01:29:49
of these Atari games they were

01:29:44 --> 01:29:52
sufficiently rich and useful enough for

01:29:48 --> 01:29:54
it to be able to plan successfully and

01:29:51 --> 01:29:57
in fact that system not only went on to

01:29:53 --> 01:29:59
beat the state of the art in Atari

01:29:56 --> 01:30:02
but the same system without modification

01:29:58 --> 01:30:05
was able to reach the same level of

01:30:01 --> 01:30:07
superhuman performance in go chess and

01:30:04 --> 01:30:09
shogi that we'd seen in alpha zero

01:30:06 --> 01:30:11
showing that even without the rules the

01:30:08 --> 01:30:13
system can learn for itself just by

01:30:10 --> 01:30:15
trial and error just by playing this

01:30:12 --> 01:30:17
game of go and no one tells you what the

01:30:14 --> 01:30:18
rules are but you just get to the end

01:30:16 --> 01:30:21
and and someone says you know win or

01:30:17 --> 01:30:23
loss you play this game

01:30:20 --> 01:30:26
and someone says win or lost so you play

01:30:22 --> 01:30:28
a game of breakout in Atari and someone

01:30:25 --> 01:30:30
just tells you you know your score at

01:30:27 --> 01:30:32
he end and the system for itself

01:30:29 --> 01:30:34
igures out essentially the rules of the

01:30:31 --> 01:30:38
system the dynamics of the world how the

01:30:33 --> 01:30:40
world works and that not in any explicit

01:30:37 --> 01:30:42
way but just implicitly enough

01:30:39 --> 01:30:45
understanding for it to be able to plan

01:30:41 --> 01:30:47
in that in that system in order to

01:30:44 --> 01:30:49
achieve its goals and that's the you

01:30:46 --> 01:30:50
know that's the fundamental process

01:30:48 --> 01:30:52
there to go through when you're facing

01:30:49 --> 01:30:54
any uncertain kind of environment they

01:30:51 --> 01:30:56
would in the real world it's figuring

01:30:53 --> 01:30:58
out the sort of the rules the basic

01:30:55 --> 01:31:00
rules of the game that's right so

01:30:57 --> 01:31:02
there's a lot I mean the ad that that

01:30:59 --> 01:31:06
allows it to be applicable to basically

01:31:01 --> 01:31:09
any domain that could be digitized in

01:31:05 --> 01:31:11
the way that it needs to in order to be

01:31:08 --> 01:31:13
consumable sort of in order for the

01:31:10 --> 01:31:14
reinforcement learning framework to be

01:31:12 --> 01:31:16
able to sense the environment to be able

01:31:13 --> 01:31:18
to act anywhere and so on the full

01:31:15 --> 01:31:20
reinforcement learning problem needs to

01:31:17 --> 01:31:23
deal with with worlds that are unknown

01:31:19 --> 01:31:25
and and complex and and the agent needs

01:31:22 --> 01:31:28
to learn for itself how to deal with

01:31:24 --> 01:31:31
at so museu I was as a step I felt a

01:31:27 --> 01:31:32
step in that direction one of the things

01:31:30 --> 01:31:34
that inspired the general public

01:31:31 --> 01:31:37
interesting conversations I have like

01:31:33 --> 01:31:40
with my parents or something my mom that

01:31:36 --> 01:31:41
just loves what was done is kind of at

01:31:39 --> 01:31:43
least the notion that there was some

01:31:40 --> 01:31:46
display of creativity some new

01:31:42 --> 01:31:49
strategies new behaviors that were

01:31:45 --> 01:31:50
created that that again has echoes of

01:31:48 --> 01:31:52
intelligence so is there something that

01:31:49 --> 01:31:55
stands up do you see it the same way

01:31:51 --> 01:31:58
that there's creativity and there's some

01:31:54 --> 01:32:00
behaviors patterns you saw that alpha

01:31:57 --> 01:32:06
zero was able to display their truly

01:31:59 --> 01:32:07
creative so let me start by I think

01:32:05 --> 01:32:09
saying that I think we should ask what

01:32:06 --> 01:32:13
creativity really means so to me

01:32:08 --> 01:32:17
creativity means discovering something

01:32:12 --> 01:32:19
which wasn't known before something

01:32:16 --> 01:32:24
unexpected something out outside of our

01:32:18 --> 01:32:26
norms and so in that sense the process

01:32:23 --> 01:32:29
of reinforcement learning or

01:32:25 --> 01:32:32
the self play approach that was used by

01:32:28 --> 01:32:34
alpha zero is it's the essence of

01:32:31 --> 01:32:35
creativity it's really saying at every

01:32:33 --> 01:32:36
stage

01:32:34 --> 01:32:40
you're playing according to your current

01:32:35 --> 01:32:43
norms and you try something and if it

01:32:39 --> 01:32:45
works out you say hey here's something

01:32:42 --> 01:32:47
reat I'm gonna start using that and

01:32:44 --> 01:32:49
then that process it's like a micro

01:32:46 --> 01:32:51
discovery that happens millions and

01:32:48 --> 01:32:54
millions of times over the course of the

01:32:50 --> 01:32:56
algorithms life where it just discovers

01:32:53 --> 01:32:57
ome new idea oh this pattern this

01:32:55 --> 01:32:59
patterns working really well for me I'm

01:32:56 --> 01:33:01
gonna I'm gonna start using that oh now

01:32:58 --> 01:33:03
oh here's this other thing I can do I

01:33:00 --> 01:33:05
can start to to connect these stones

01:33:02 --> 01:33:08
together in this way or I can start to

01:33:04 --> 01:33:11
you know sacrifice stones or give up on

01:33:07 --> 01:33:13
on pieces or play shoulder hits on

01:33:10 --> 01:33:14
the fifth line or whatever it is the

01:33:12 --> 01:33:16
system is discovering things like this

01:33:13 --> 01:33:19
for itself continually repeatedly all

01:33:15 --> 01:33:21
the time and so it should come as no

01:33:18 --> 01:33:23
surprise to us then when if you leave

01:33:20 --> 01:33:27
these systems going that they discover

01:33:22 --> 01:33:30
things that are not known to humans to

01:33:26 --> 01:33:33
the human norms are considered creative

01:33:30 --> 01:33:37
and we've seen this several times in

01:33:33 --> 01:33:41
fact in alphago zero we saw this

01:33:36 --> 01:33:44
beautiful timeline of discovery where

01:33:40 --> 01:33:45
what we saw was that there are these

01:33:43 --> 01:33:47
opening patterns that humans play called

01:33:44 --> 01:33:49
joseki these are like the patterns that

01:33:46 --> 01:33:51
humans learn to play in the corners and

01:33:48 --> 01:33:53
they've been developed and refined over

01:33:50 --> 01:33:55
literally thousands of years in the

01:33:52 --> 01:33:57
game of go and what we saw was in the

01:33:54 --> 01:34:01
course of the training

01:33:56 --> 01:34:03
alphago 0 over the course of the 40 days

01:34:00 --> 01:34:06
that we trained this system it's just to

01:34:02 --> 01:34:09
discover exactly these patterns that

01:34:05 --> 01:34:11
human players play and over time we

01:34:08 --> 01:34:13
found that all of the joseki that humans

01:34:10 --> 01:34:16
played were were discovered by the

01:34:12 --> 01:34:19
system through this process of self play

01:34:15 --> 01:34:21
and a sort of essential notion of

01:34:18 --> 01:34:23
creativity well what was really

01:34:20 --> 01:34:26
interesting was that over time it then

01:34:22 --> 01:34:28
started to discard some of these maybe

01:34:25 --> 01:34:30
own joseki that humans didn't know about

01:34:27 --> 01:34:33
yeah and it starts to say oh well you

01:34:29 --> 01:34:36
thought that the Knights move pincer

01:34:32 --> 01:34:37
joseki was a great idea but here's

01:34:35 --> 01:34:40
omething you different you can do there

01:34:36 --> 01:34:41
which make some new variation that the

01:34:39 --> 01:34:44
humans didn't know about and actually

01:34:40 --> 01:34:46
now the human go player study the joseki

01:34:43 --> 01:34:49
their alphago played and they become the

01:34:45 --> 01:34:52
new norms that are used in today

01:34:48 --> 01:34:56
um top-level guy competitions that never

01:34:51 --> 01:34:58
gets old even just the first to me maybe

01:34:55 --> 01:35:01
just makes me feel good as a human being

01:34:57 --> 01:35:04
that a self play mechanism knows nothing

01:35:00 --> 01:35:06
about us humans discovers patterns that

01:35:03 --> 01:35:08
we humans do it's just I get an

01:35:05 --> 01:35:12
affirmation that we're doing we're doing

01:35:07 --> 01:35:14
okay as humans yeah in this domain in

01:35:11 --> 01:35:16
other domains we do we figure it out

01:35:13 --> 01:35:18
it's like the Churchill quote about

01:35:15 --> 01:35:20
democracy it's the you know it's the but

01:35:17 --> 01:35:24
it sucks but it's the best song we've

01:35:19 --> 01:35:27
tried so in general taking a step

01:35:23 --> 01:35:29
outside of go and I take a million

01:35:26 --> 01:35:32
accomplishment to have no time to talk

01:35:28 --> 01:35:35
about that with alpha star and so on and

01:35:31 --> 01:35:37
and the current work but in general

01:35:34 --> 01:35:40
this self play mechanism that you've

01:35:36 --> 01:35:43
inspired the world with by beating the

01:35:39 --> 01:35:47
world champion goal player do you see

01:35:42 --> 01:35:51
that as DC being applied in other

01:35:46 --> 01:35:52
domains do you have sort of dreams and

01:35:50 --> 01:35:55
hopes that is applied in both the

01:35:51 --> 01:35:58
simulated environments in a constrained

01:35:54 --> 01:35:59
environments of games constrained

01:35:57 --> 01:36:00
I mean alpha star really demonstrates

01:35:58 --> 01:36:03
that you can remove a lot of the

01:36:00 --> 01:36:05
constraints but nevertheless it's in a

01:36:02 --> 01:36:07
digital simulated environment do you

01:36:04 --> 01:36:10
have a hope a dream that it starts being

01:36:06 --> 01:36:12
applied in the robotics environment and

01:36:09 --> 01:36:15
maybe even in domains that are a little

01:36:11 --> 01:36:17
safety critical and so on and have you

01:36:14 --> 01:36:18
know have a real impact in the real

01:36:16 --> 01:36:20
world like autonomous vehicles for

01:36:17 --> 01:36:24
example it seems like a very far-out

01:36:19 --> 01:36:27
dream at this point so I absolutely do

01:36:23 --> 01:36:29
hope and and imagine that we will we

01:36:26 --> 01:36:30
will get to the point where ideas just

01:36:28 --> 01:36:32
like these are used in all kinds of

01:36:29 --> 01:36:34
different domains in fact one of the

01:36:31 --> 01:36:36
most satisfying things as a researcher

01:36:33 --> 01:36:38
as when you start to see other people

01:36:35 --> 01:36:41
use your your algorithms in unexpected

01:36:37 --> 01:36:42
ways so in the last couple of years

01:36:40 --> 01:36:46
there have been you know a couple of

01:36:41 --> 01:36:49
nature papers where different teams

01:36:45 --> 01:36:52
unbeknownst to to us took alpha zero and

01:36:48 --> 01:36:57
applied exactly those same algorithms

01:36:51 --> 01:36:59
and ideas to real-world problems of huge

01:36:56 --> 01:37:01
meaning to to society so one of them was

01:36:58 --> 01:37:02
the problem of chemical synthesis and

01:37:00 --> 01:37:06
they were able to beat the

01:37:01 --> 01:37:09
state-of-the-art in finding pathways of

01:37:05 --> 01:37:13
how to actually synthesize chemicals

01:37:08 --> 01:37:14
retro retro chemical synthesis and the

01:37:12 --> 01:37:16
second paper actually actually just came

01:37:13 --> 01:37:20
out a couple of weeks ago in nature

01:37:15 --> 01:37:21
showed that in quantum computation you

01:37:19 --> 01:37:24
know one of the big questions is how to

01:37:20 --> 01:37:29
understand the nature of the the

01:37:23 --> 01:37:30
function in quantum computation and a

01:37:28 --> 01:37:32
system based on alpha zero beat the

01:37:29 --> 01:37:34
state of the art by quite some distance

01:37:31 --> 01:37:36
there again so so these are just

01:37:33 --> 01:37:39
examples and I think you know the lesson

01:37:35 --> 01:37:40
which we've seen elsewhere in machine

01:37:38 --> 01:37:43
learning time and time again is that if

01:37:39 --> 01:37:45
you make something general it will be

01:37:42 --> 01:37:47
used in all kinds of ways you know you

01:37:44 --> 01:37:49
provide a really powerful tools to

01:37:46 --> 01:37:53
society and and those tools can be used

01:37:48 --> 01:37:56
in in amazing ways and so I think we're

01:37:52 --> 01:37:57
just at the beginning and and for sure I

01:37:55 --> 01:38:01
hope that we we see all kinds of

01:37:56 --> 01:38:04
outcomes so the the in the the other

01:38:00 --> 01:38:06
side of the question of a reinforcement

01:38:03 --> 01:38:07
learning framework is you know you

01:38:05 --> 01:38:12
sually want to specify a reward

01:38:06 --> 01:38:13
function and an objective function what

01:38:11 --> 01:38:16
do you think about sort of ideas of

01:38:12 --> 01:38:22
intrinsic rewards if we're not really

01:38:15 --> 01:38:24
sure about you know of if we take you

01:38:21 --> 01:38:27
know human beings existence proof that

01:38:23 --> 01:38:30
we don't seem to be operating according

01:38:26 --> 01:38:33
to a single reward do you think that

01:38:29 --> 01:38:35
here's interesting ideas for when you

01:38:32 --> 01:38:38
don't know how to truly specify the

01:38:34 --> 01:38:39
reward you know that there's some

01:38:37 --> 01:38:41
flexibility for discovering it

01:38:38 --> 01:38:43
intrinsically or so on

01:38:40 --> 01:38:45
in the context of reinforcement learning

01:38:42 --> 01:38:47
so I think you know when we think about

01:38:44 --> 01:38:49
intelligence it's really important to be

01:38:46 --> 01:38:51
clear about the problem of intelligence

01:38:48 --> 01:38:53
and I think it's clearest to understand

01:38:50 --> 01:38:55
that problem in terms of some ultimate

01:38:52 --> 01:38:57
goal that we want the system to to try

01:38:54 --> 01:38:59
and solve for and after all if we don't

01:38:56 --> 01:39:02
understand the ultimate purpose of the

01:38:58 --> 01:39:03
system do we really even have a clearly

01:39:01 --> 01:39:08
defined defined problem that we are

01:39:02 --> 01:39:11
solving at all now within that as with

01:39:07 --> 01:39:15
your example for humans the system may

01:39:10 --> 01:39:16
choose to create its own motivations and

01:39:14 --> 01:39:17
sub goals

01:39:15 --> 01:39:21
that helped the system to achieve its

01:39:16 --> 01:39:23
ultimate goal and that may indeed be a

01:39:20 --> 01:39:25
hugely important mechanism to achieve

01:39:22 --> 01:39:27
those altima goals but there is still

01:39:24 --> 01:39:29
some ultimate goal I think the system

01:39:26 --> 01:39:31
needs to be measurable and and evaluated

01:39:28 --> 01:39:33
against and even for humans I mean

01:39:30 --> 01:39:35
humans were incredibly flexible we feel

01:39:32 --> 01:39:38
that we we can you know any goal that

01:39:34 --> 01:39:41
we're given we feel we can we can master

01:39:37 --> 01:39:44
to some degree but if we think of those

01:39:40 --> 01:39:46
goals really you know like the goal of

01:39:43 --> 01:39:47
being able to pick up an object or the

01:39:45 --> 01:39:50
goal of being able to communicate

01:39:46 --> 01:39:54
although influence people to do things

01:39:49 --> 01:39:57
in a particular way or whatever those

01:39:53 --> 01:39:58
goals are really they are that they're

01:39:56 --> 01:40:01
sub goals really that we set ourselves

01:39:57 --> 01:40:05
you know we choose to pick up the object

01:40:00 --> 01:40:06
we choose to communicate we choose to to

01:40:04 --> 01:40:08
influence someone else and we choose

01:40:05 --> 01:40:11
those because we think it will lead us

01:40:07 --> 01:40:13
to something in our in later art and we

01:40:10 --> 01:40:16
think that that's helpful to us to

01:40:12 --> 01:40:18
achieve some ultimate goal now I don't

01:40:15 --> 01:40:21
want to speculate whether or not humans

01:40:17 --> 01:40:23
as a system necessarily have a singular

01:40:20 --> 01:40:25
overall goal of survival or whatever it

01:40:22 --> 01:40:27
is but I think the principle for

01:40:24 --> 01:40:29
understanding and implementing

01:40:26 --> 01:40:31
intelligences has to be that if we're

01:40:28 --> 01:40:32
trying to understand intelligence or

01:40:30 --> 01:40:36
implement our own there has to be a

01:40:31 --> 01:40:38
well-defined problem otherwise if it's

01:40:35 --> 01:40:41
not I think it's it's like an admission

01:40:37 --> 01:40:43
of defeat that forget to be hope for

01:40:40 --> 01:40:44
understanding or implementing

01:40:42 --> 01:40:45
intelligence we have to know what we're

01:40:43 --> 01:40:48
doing we have to know what we're asking

01:40:44 --> 01:40:49
the system to do otherwise if you if you

01:40:47 --> 01:40:50
don't have a clearly defined purpose

01:40:48 --> 01:40:54
you're not going to get a clearly

01:40:49 --> 01:40:56
defined answer the the ridiculous

01:40:53 --> 01:40:59
big question that has to naturally

01:40:55 --> 01:41:02
follow because they have to pin you down

01:40:58 --> 01:41:05
on this on this thing that nevertheless

01:41:01 --> 01:41:07
one of the big silly or big real

01:41:04 --> 01:41:10
questions before humans is the meaning

01:41:06 --> 01:41:12
of life is us trying to figure out our

01:41:09 --> 01:41:14
own reward function yeah and you just

01:41:11 --> 01:41:16
kind of mentioned that if you want to

01:41:13 --> 01:41:17
build the intelligence systems and you

01:41:15 --> 01:41:19
know what you're doing you should be at

01:41:16 --> 01:41:21
least cognizant to some degree of what

01:41:18 --> 01:41:25
he reward function is so the natural

01:41:20 --> 01:41:27
question is what do you think is the

01:41:24 --> 01:41:30
reward function of human life the

01:41:26 --> 01:41:34
meaning of life for us humans

01:41:29 --> 01:41:36
the meaning of our existence I think you

01:41:33 --> 01:41:38
know I'd be speculating beyond my own

01:41:35 --> 01:41:41
expertise but but just for fun let me do

01:41:37 --> 01:41:42
that yes please and say I think that

01:41:40 --> 01:41:44
here are many levels at which you can

01:41:41 --> 01:41:47
understand a system and and you can

01:41:43 --> 01:41:51
understand something as as optimizing

01:41:46 --> 01:41:53
for a goal at many levels and so so you

01:41:50 --> 01:41:55
can understand the the you know let's

01:41:52 --> 01:41:57
tart with the universe like um does the

01:41:54 --> 01:42:00
universe have a purpose well it feels

01:41:56 --> 01:42:03
like it's just one level just following

01:41:59 --> 01:42:04
certain mechanical laws of physics and

01:42:02 --> 01:42:06
that that's led to the development of

01:42:03 --> 01:42:09
the universe but at another level you

01:42:05 --> 01:42:11
can view it as actually there's the

01:42:08 --> 01:42:13
second law of thermodynamics that says

01:42:10 --> 01:42:15
that this is increasing in entropy over

01:42:12 --> 01:42:17
time forever and now there's a view

01:42:14 --> 01:42:19
that's been developed by certain people

01:42:16 --> 01:42:21
at MIT that this you can think of this

01:42:18 --> 01:42:23
as as almost like a goal of the universe

01:42:20 --> 01:42:26
that the purpose of the universe is to

01:42:22 --> 01:42:27
maximize entropy so there's multiple

01:42:25 --> 01:42:31
vels at which you can understand a

01:42:26 --> 01:42:34
system the next level down you might say

01:42:30 --> 01:42:39
well if the goal is to is to maximize

01:42:33 --> 01:42:41
ntropy well how do how does how can

01:42:38 --> 01:42:43
that be done by a particular system and

01:42:40 --> 01:42:45
maybe evolution is something that the

01:42:42 --> 01:42:47
universe discovered in order in order to

01:42:44 --> 01:42:49
kind of dissipate energy as efficiently

01:42:46 --> 01:42:51
as possible and by the way I'm borrowing

01:42:48 --> 01:42:54
from Max tegmark for some of these

01:42:50 --> 01:42:56
metaphors yes the physicist

01:42:53 --> 01:43:00
but if you can think of evolution as a

01:42:55 --> 01:43:04
mechanism for dispersing energy then

01:42:59 --> 01:43:06
evolution you you might say as then

01:43:03 --> 01:43:08
becomes a goal which is if if evolution

01:43:05 --> 01:43:10
disperses energy by reproducing as

01:43:07 --> 01:43:13
efficiently as possible

01:43:09 --> 01:43:16
what's evolution then well it's now got

01:43:12 --> 01:43:19
its own goal within that which is to

01:43:15 --> 01:43:22
actually reproduce as effectively as

01:43:18 --> 01:43:24
possible and now how does reproduction

01:43:21 --> 01:43:28
how is that made as effective as

01:43:23 --> 01:43:29
possible well you need entities within

01:43:27 --> 01:43:31
that that can survive and reproduce as

01:43:28 --> 01:43:32
effectively as possible and so it's

01:43:30 --> 01:43:34
natural in order to achieve that high

01:43:31 --> 01:43:38
level goal those individual organisms

01:43:33 --> 01:43:42
discover brains intelligences which

01:43:37 --> 01:43:43
enable them to support the goals of

01:43:41 --> 01:43:46
evolution

01:43:42 --> 01:43:49
and those brains what do they do well

01:43:45 --> 01:43:51
perhaps the early brains maybe they were

01:43:48 --> 01:43:53
controlling things at some direct level

01:43:50 --> 01:43:55
you know maybe they were the equivalent

01:43:52 --> 01:43:57
of pre-programmed systems which were

01:43:54 --> 01:44:00
directly controlling what was going on

01:43:56 --> 01:44:01
and setting certain you know things in

01:43:59 --> 01:44:04
order to achieve these particular

01:44:00 --> 01:44:07
goals but that led to a

01:44:03 --> 01:44:08
nother level of discovery which was

01:44:06 --> 01:44:10
learning systems you know parts of the

01:44:07 --> 01:44:12
brain which were able to learn from

01:44:09 --> 01:44:14
themselves and learn how to to program

01:44:11 --> 01:44:15
themselves to achieve any goal and

01:44:13 --> 01:44:19
presumably there are parts of the game

01:44:14 --> 01:44:21
of the brain where goals are set to to

01:44:18 --> 01:44:23
parts of that that system and provides

01:44:20 --> 01:44:24
this very flexible notion of

01:44:22 --> 01:44:26
intelligence that we as humans

01:44:23 --> 01:44:28
presumably have which is the ability to

01:44:25 --> 01:44:31
kind of wipe the reason we feel that we

01:44:27 --> 01:44:33
can we can we can achieve any goal so so

01:44:30 --> 01:44:34
it's a very long-winded answer to say

01:44:32 --> 01:44:36
that you know I think there are many

01:44:33 --> 01:44:40
perspectives and many levels at which

01:44:35 --> 01:44:41
intelligence can be understood and and

01:44:39 --> 01:44:43
each of those levels you can take

01:44:40 --> 01:44:45
multiple perspectives that you know you

01:44:42 --> 01:44:46
can view the system as something which

01:44:44 --> 01:44:49
is optimizing for a goal which is

01:44:45 --> 01:44:51
understanding it at a level by which we

01:44:48 --> 01:44:53
can maybe implement it and understand it

01:44:50 --> 01:44:55
as AI researchers or computer scientists

01:44:52 --> 01:44:57
or you can understand it at the level of

01:44:54 --> 01:44:58
the mechanistic thing which is going on

01:44:56 --> 01:45:00
that there are these you know atoms

01:44:57 --> 01:45:01
bouncing around in the brain and they

01:44:59 --> 01:45:03
lead to the the outcome of that system

01:45:00 --> 01:45:07
is not in contradiction with the fact

01:45:02 --> 01:45:09
hat it's it's also a a decision-making

01:45:06 --> 01:45:12
system that's optimizing for some goal

01:45:08 --> 01:45:14
and and purpose I've never heard the

01:45:11 --> 01:45:17
description of the meaning of life

01:45:13 --> 01:45:20
structured so beautifully in layers but

01:45:16 --> 01:45:22
you did miss one layer which is the next

01:45:19 --> 01:45:25
step which you're responsible for which

01:45:21 --> 01:45:28
is creating the the artificial

01:45:24 --> 01:45:31
intelligence and data layer on top of

01:45:27 --> 01:45:34
that and I can't wait to see well I may

01:45:30 --> 01:45:37
not be around but they can't wait to see

01:45:33 --> 01:45:39
what the next layer beyond that well we

01:45:36 --> 01:45:41
ll let's just take that that argument

01:45:38 --> 01:45:43
you know and pursue it to a central

01:45:40 --> 01:45:46
conclusion so the next level indeed is

01:45:42 --> 01:45:49
for for how can our how can our learning

01:45:45 --> 01:45:53
brain achieve its goals most effectively

01:45:48 --> 01:45:59
well maybe it does so by by us as

01:45:52 --> 01:46:01
learning beings building a system which

01:45:58 --> 01:46:03
is able to solve for those goals more

01:46:00 --> 01:46:05
ffectively than we can and so when we

01:46:02 --> 01:46:07
build a system to play the game of go

01:46:04 --> 01:46:08
you know when I said that I wanted to

01:46:06 --> 01:46:10
build a system that can play go better

01:46:07 --> 01:46:13
than I can I've enabled myself to

01:46:09 --> 01:46:15
achieve that goal of playing go better

01:46:12 --> 01:46:18
than I could buy buy directly playing it

01:46:14 --> 01:46:20
and learning it myself and so now a new

01:46:17 --> 01:46:22
layer has been created which is systems

01:46:19 --> 01:46:22
which are able to achieve goals for

01:46:21 --> 01:46:25
themselves

01:46:21 --> 01:46:27
and ultimately there may be layers

01:46:24 --> 01:46:31
beyond that where they set sub goals to

01:46:26 --> 01:46:34
parts of their own system in order to to

01:46:30 --> 01:46:37
achieve those and so forth so incredible

01:46:33 --> 01:46:38
so the story of intelligence I think I

01:46:36 --> 01:46:41
think is is a multi-layered one and a

01:46:37 --> 01:46:43
multi perspective one we live in an

01:46:40 --> 01:46:46
incredible universe David thank you so

01:46:42 --> 01:46:49
much first of all for dreaming of using

01:46:45 --> 01:46:51
learning to solve go and building

01:46:48 --> 01:46:54
intelligent systems and for actually

01:46:50 --> 01:46:57
making it happen and for inspiring

01:46:53 --> 01:46:58
millions of people in the process it's

01:46:56 --> 01:47:01
truly an honor thank you so much for

01:46:57 --> 01:47:02
talking today okay thank you thanks for

01:47:00 --> 01:47:04
listening to this conversation with

01:47:01 --> 01:47:07
David silver and thank you to our

01:47:03 --> 01:47:08
sponsors masterclass and cash app please

01:47:06 --> 01:47:10
consider supporting the podcast by

01:47:07 --> 01:47:13
signing up to master class at

01:47:09 --> 01:47:16
masterclass complex and downloading cash

01:47:12 --> 01:47:18
app and using code lex podcast if you

01:47:15 --> 01:47:20
enjoy this podcast subscribe on youtube

01:47:17 --> 01:47:22
review it with five stars an apple

01:47:19 --> 01:47:24
podcast supported on patreon or simply

01:47:21 --> 01:47:27
connect with me on Twitter at lex

01:47:23 --> 01:47:30
friedman and now let me leave you with

01:47:26 --> 01:47:32
some words from david silver my personal

01:47:29 --> 01:47:34
belief is that we've seen something of a

01:47:31 --> 01:47:36
turning point where we're starting to

01:47:33 --> 01:47:39
understand that many abilities like

01:47:35 --> 01:47:41
intuition and creativity that we've

01:47:38 --> 01:47:43
previously thought or in the domain only

01:47:40 --> 01:47:45
of the human mind are actually

01:47:42 --> 01:47:47
accessible to machine intelligence as

01:47:44 --> 01:47:50
well and I think that's a really

01:47:46 --> 01:47:54
exciting moment in history thank you for

01:47:49 --> 01:47:54
listening and hope to see you next time

01:47:58 --> 01:48:01
you

<!-- YOUTUBE_TRANSCRIPT_END -->
