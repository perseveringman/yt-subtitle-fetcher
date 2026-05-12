---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "b7bStIQovcY"
title: "Tuomas Sandholm: Poker and Game Theory | Lex Fridman Podcast #12"
video_url: "https://www.youtube.com/watch?v=b7bStIQovcY"
thumbnail_url: "https://i.ytimg.com/vi/b7bStIQovcY/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=b7bStIQovcY"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-12-28T21:42:43.000Z"
upload_date: "2018-12-28"
duration_seconds: 3977
duration_human: "1:06:17"
view_count: 70624
like_count: 1470
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:14:52.036Z"
---

# Tuomas Sandholm: Poker and Game Theory | Lex Fridman Podcast #12

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=b7bStIQovcY
- video_id: b7bStIQovcY
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-12-28T21:42:43.000Z
- upload_date: 2018-12-28
- duration: 1:06:17
- view_count: 70624
- like_count: 1470
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

00:00:02 --> 00:00:08
Thomas sent home he's a professor same

00:00:04 --> 00:00:10
you and co-creator of lebra's which is

00:00:07 --> 00:00:12
the first AI system to be top human

00:00:09 --> 00:00:16
players in the game of heads-up No Limit

00:00:11 --> 00:00:17
Texas Hold'em he has published over 450

00:00:15 --> 00:00:20
papers on game theory and machine

00:00:16 --> 00:00:24
learning including a best paper in 2017

00:00:19 --> 00:00:26
at nips now renamed to new reps which is

00:00:23 --> 00:00:29
where I caught up with him for this

00:00:25 --> 00:00:31
conversation his research and companies

00:00:28 --> 00:00:34
have had wide reaching impact in the

00:00:30 --> 00:00:37
real world especially because he and his

00:00:33 --> 00:00:40
group not only proposed new ideas but

00:00:36 --> 00:00:43
also build systems to prove that these

00:00:39 --> 00:00:45
ideas work in the real world this

00:00:42 --> 00:00:47
conversation is part of the MIT course

00:00:44 --> 00:00:50
on artificial general intelligence and

00:00:46 --> 00:00:53
the artificial intelligence podcast if

00:00:49 --> 00:00:55
you enjoy subscribe on youtube itunes or

00:00:52 --> 00:01:00
simply connect with me on Twitter at Lex

00:00:54 --> 00:01:04
Friedman spelled Fri D and now here's my

00:00:59 --> 00:01:07
conversation with Thomas sent home can

00:01:03 --> 00:01:09
you describe at the high level the game

00:01:06 --> 00:01:11
of poker Texas Hold'em heads-up Texas

00:01:08 --> 00:01:15
Hold'em for people who might not be

00:01:10 --> 00:01:17
familiar at this card game yeah happy to

00:01:14 --> 00:01:19
so heads up No Limit Texas Hold'em has

00:01:16 --> 00:01:22
really emerged in the AI community as a

00:01:18 --> 00:01:24
main benchmark for testing these

00:01:21 --> 00:01:27
application independent algorithms for

00:01:23 --> 00:01:31
imperfect information game solving and

00:01:26 --> 00:01:34
this is a game that's actually played by

00:01:30 --> 00:01:37
humans you don't see that much on TV or

00:01:33 --> 00:01:40
casinos because well for obvious reasons

00:01:36 --> 00:01:42
but you do see it in some expert level

00:01:39 --> 00:01:44
casinos and you see it in the best poker

00:01:41 --> 00:01:46
movies of all time it's actually an

00:01:43 --> 00:01:49
event in the World Series of Poker but

00:01:45 --> 00:01:52
mostly it's played online and typically

00:01:48 --> 00:01:55
for pretty big sums of money and this is

00:01:51 --> 00:01:58
a game that usually only experts play so

00:01:54 --> 00:02:00
if you recall to your home game on a

00:01:57 --> 00:02:02
Friday night it probably is not gonna be

00:01:59 --> 00:02:05
hits up no Limit Texas Hold'em it might

00:02:01 --> 00:02:08
be no let me it takes us Hold'em in some

00:02:04 --> 00:02:10
cases but typically for a big group and

00:02:07 --> 00:02:11
it's not as competitive well heads up

00:02:09 --> 00:02:14
means it's two-player so it's really

00:02:10 --> 00:02:14
like me against you

00:02:13 --> 00:02:17
Am I

00:02:13 --> 00:02:19
you better much like chess or or or go

00:02:16 --> 00:02:21
in that sense but an imperfect

00:02:18 --> 00:02:22
information game which makes it much

00:02:20 --> 00:02:25
arder because I have to deal with

00:02:21 --> 00:02:27
issues of you knowing things that I

00:02:24 --> 00:02:28
don't know and I know things that you

00:02:26 --> 00:02:30
don't know

00:02:27 --> 00:02:31
instead of pieces being nicely laid on

00:02:29 --> 00:02:35
the board for both of us to see

00:02:30 --> 00:02:38
so in Texas Hold'em there's a two cards

00:02:34 --> 00:02:40
that you only see the game on to you

00:02:37 --> 00:02:43
yeah there is they gradually lay out

00:02:39 --> 00:02:45
some cards that add up overall to five

00:02:42 --> 00:02:47
cards that everybody can see yeah the

00:02:44 --> 00:02:49
imperfect nature of the information is

00:02:46 --> 00:02:51
the two cards that you're holding on

00:02:48 --> 00:02:53
front yeah so as you said you know you

00:02:50 --> 00:02:56
first get two cards in private each and

00:02:52 --> 00:02:58
then you this a betting round then you

00:02:55 --> 00:03:00
get three clubs in public on the table

00:02:57 --> 00:03:02
then there's a betting round then you

00:02:59 --> 00:03:03
get the fourth card in public on the

00:03:01 --> 00:03:05
table they're spitting around then you

00:03:02 --> 00:03:07
get the five fifth card on the table

00:03:04 --> 00:03:09
there's a bending drop so there's a

00:03:06 --> 00:03:11
total of four betting rounds and four

00:03:08 --> 00:03:13
torrontés of information revelation if

00:03:10 --> 00:03:16
you will the only the first tranche is

00:03:12 --> 00:03:22
private and they omits public from there

00:03:15 --> 00:03:26
and this is probably probably by far the

00:03:21 --> 00:03:28
most popular game in AI and just the

00:03:25 --> 00:03:30
general public in terms of imperfect

00:03:27 --> 00:03:35
information so it's probably the most

00:03:29 --> 00:03:37
popular spectator game to watch right so

00:03:34 --> 00:03:40
which is why it's a super exciting game

00:03:36 --> 00:03:42
tackle so it sits on the order of chess

00:03:39 --> 00:03:45
I would say in terms of popularity in

00:03:41 --> 00:03:47
terms of AI setting it as the bar of

00:03:44 --> 00:03:50
what is intelligence

00:03:46 --> 00:03:53
so in 2017 labret does how do you

00:03:49 --> 00:03:54
pronounce it Liberato lebra das lebra

00:03:52 --> 00:03:57
does beats little laughing they're a

00:03:53 --> 00:04:02
little bit Latin LeBron is beat a few

00:03:56 --> 00:04:04
for expert human players can you

00:04:01 --> 00:04:06
describe that event what you learned

00:04:03 --> 00:04:08
from it what was it like what was the

00:04:05 --> 00:04:11
process in general for people who have

00:04:07 --> 00:04:14
not read the papers and study yeah so

00:04:10 --> 00:04:16
the event was that we invited four of

00:04:13 --> 00:04:18
the top 10 players with these are

00:04:15 --> 00:04:19
specialist players in heads-up no Limit

00:04:17 --> 00:04:21
Texas Hold'em which is very important

00:04:18 --> 00:04:23
because this game is actually quite

00:04:20 --> 00:04:26
different than the the multiplayer

00:04:22 --> 00:04:28
version we brought me in to Pittsburgh

00:04:25 --> 00:04:30
to play at the reverse casino

00:04:27 --> 00:04:32
for twenty days we wanted to get a

00:04:29 --> 00:04:35
hundred and twenty thousand hands in

00:04:31 --> 00:04:38
because we wanted to get statistical

00:04:34 --> 00:04:41
significance so it's a lot of hands for

00:04:37 --> 00:04:44
humans to play even for this top pros

00:04:40 --> 00:04:46
who play fairly quickly normally so we

00:04:43 --> 00:04:49
couldn't just have one of them play so

00:04:45 --> 00:04:52
many hands twenty days they were playing

00:04:48 --> 00:04:54
basically morning to evening and he

00:04:52 --> 00:04:57
raised two hundred thousand as a little

00:04:53 --> 00:04:59
incentive for them to play and the

00:04:56 --> 00:05:03
setting was so that they didn't all get

00:04:58 --> 00:05:05
fifty thousand we actually paid them out

00:05:02 --> 00:05:09
based on how they did against the AI

00:05:04 --> 00:05:11
each so they had an incentive to play as

00:05:08 --> 00:05:13
hard as they could whether they're way

00:05:10 --> 00:05:15
ahead the way behind or right at the

00:05:12 --> 00:05:17
mark of beating the AI and you don't

00:05:14 --> 00:05:20
make any money unfortunately right no we

00:05:16 --> 00:05:22
can't make any money so so originally a

00:05:19 --> 00:05:24
couple of years earlier I actually

00:05:21 --> 00:05:26
explored whether we could actually play

00:05:23 --> 00:05:29
for money because that would be of

00:05:25 --> 00:05:30
course interesting as well to play

00:05:28 --> 00:05:33
against the top people for money but the

00:05:29 --> 00:05:35
Pennsylvania Gaming Board said no so so

00:05:32 --> 00:05:39
if we couldn't so this is much like an

00:05:34 --> 00:05:40
exhibit like for a musician or a boxer

00:05:38 --> 00:05:42
or something like that

00:05:39 --> 00:05:46
nevertheless you're keeping track of the

00:05:41 --> 00:05:49
money and brought us one close to two

00:05:45 --> 00:05:51
million dollars I think so so if there

00:05:48 --> 00:05:53
if it was for real money if you were

00:05:50 --> 00:05:56
able to earn money that was a quite

00:05:52 --> 00:05:58
impressive and inspiring achievement

00:05:55 --> 00:06:00
just a few details what what were the

00:05:57 --> 00:06:02
players looking at I mean were they

00:05:59 --> 00:06:04
behind the computer what was the

00:06:01 --> 00:06:06
interface like yes there they were

00:06:03 --> 00:06:08
playing much like they normally do these

00:06:05 --> 00:06:10
top players when they play this game

00:06:07 --> 00:06:13
they play mostly online so they used to

00:06:09 --> 00:06:14
playing through what UI yes and they did

00:06:12 --> 00:06:17
the same thing here so there was this

00:06:13 --> 00:06:20
layout you could imagine there's a table

00:06:16 --> 00:06:22
on the screen this the the human sitting

00:06:19 --> 00:06:24
there and then there's the AI sitting

00:06:21 --> 00:06:26
there and the the screen source

00:06:23 --> 00:06:28
verything is happening the cards coming

00:06:25 --> 00:06:30
out and so the bets being made and we

00:06:27 --> 00:06:32
also had the betting history for the

00:06:29 --> 00:06:34
human so if the human for what what had

00:06:31 --> 00:06:36
happened in the ham so far they could

00:06:33 --> 00:06:38
actually reference back

00:06:35 --> 00:06:40
and and and so forth is there a reason

00:06:37 --> 00:06:45
they were given access to the betting

00:06:39 --> 00:06:47
history for well we just uh it's a it

00:06:44 --> 00:06:48
didn't really matter that they wouldn't

00:06:46 --> 00:06:51
have forgotten anyway these are top

00:06:47 --> 00:06:53
quality people but we just want to put

00:06:50 --> 00:06:55
out there so it's not a question for

00:06:52 --> 00:06:57
human for getting and the AI somehow

00:06:54 --> 00:06:59
trying to get advantage of better memory

00:06:56 --> 00:07:01
so what was that like I mean that was an

00:06:58 --> 00:07:05
incredible accomplishment so what did it

00:07:00 --> 00:07:06
feel like before the event did you have

00:07:04 --> 00:07:09
doubt hope

00:07:05 --> 00:07:12
where was your confidence at yeah that's

00:07:08 --> 00:07:14
great so a great question so eighteen

00:07:11 --> 00:07:16
months earlier I had organized the

00:07:13 --> 00:07:18
similar brains versus AI competition

00:07:15 --> 00:07:22
with our previous a I call clerical and

00:07:17 --> 00:07:24
we couldn't beat the humans so this time

00:07:21 --> 00:07:27
around it was only eighteen months later

00:07:23 --> 00:07:30
and I knew that this new AI Lovato's was

00:07:26 --> 00:07:32
way stronger but it's hard to say how

00:07:29 --> 00:07:34
you'll do against the top humans before

00:07:31 --> 00:07:37
you try so I thought we had about a

00:07:33 --> 00:07:40
50/50 shot and the international betting

00:07:36 --> 00:07:43
sites put us a us as a four to one or

00:07:39 --> 00:07:45
five to one underdog so it's kind of

00:07:42 --> 00:07:49
interesting that people really believe

00:07:44 --> 00:07:50
in people and I get over AI not just

00:07:48 --> 00:07:52
people people don't just believe over

00:07:49 --> 00:07:53
believing themselves but they have

00:07:51 --> 00:07:56
overconfidence in other people as well

00:07:52 --> 00:08:01
compared to the performance of AI and

00:07:55 --> 00:08:04
yeah so we were afford to 105 to 108

00:08:00 --> 00:08:06
beating the humans in a row we were

00:08:03 --> 00:08:08
still 50/50 on the international betting

00:08:05 --> 00:08:11
sites do you think there's something

00:08:07 --> 00:08:13
special and magical about poker and in

00:08:10 --> 00:08:17
the way people think about it in a sense

00:08:12 --> 00:08:20
you have I mean even in chess there's no

00:08:16 --> 00:08:23
Hollywood movies poker is this the star

00:08:19 --> 00:08:28
of many movies and there's this feeling

00:08:22 --> 00:08:32
that certain human facial expressions

00:08:27 --> 00:08:34
and body language eye movement all these

00:08:31 --> 00:08:37
tells are critical to poker you can look

00:08:33 --> 00:08:39
into somebody's soul understand their

00:08:36 --> 00:08:42
betting strategy and so on there so

00:08:38 --> 00:08:43
that's probably why the possibly do you

00:08:41 --> 00:08:46
think that is why people have a

00:08:42 --> 00:08:48
confidence that humans will outperform

00:08:45 --> 00:08:51
because AI systems cannot in

00:08:47 --> 00:08:53
construct perceive these kinds of tells

00:08:50 --> 00:08:57
they're only looking at betting patterns

00:08:52 --> 00:09:03
and and nothing else the betting

00:08:56 --> 00:09:04
patterns and and statistics so what's

00:09:02 --> 00:09:07
more important to you if you step back

00:09:03 --> 00:09:11
and human players human versus human

00:09:06 --> 00:09:15
what's the role these tells of these

00:09:10 --> 00:09:18
ideas that we romanticize yeah so I

00:09:14 --> 00:09:22
split it into two parts so one is why do

00:09:17 --> 00:09:24
humans trust he much more than AI and

00:09:21 --> 00:09:26
all have overconfidence in humans yes I

00:09:23 --> 00:09:28
think that's that's not really related

00:09:25 --> 00:09:31
to tell a question it's just that

00:09:27 --> 00:09:32
hey've seen these top players how good

00:09:30 --> 00:09:36
they are and they're really fantastic so

00:09:31 --> 00:09:38
it's just hard to believe therefore that

00:09:35 --> 00:09:39
he Navy I could beat them yeah so I

00:09:37 --> 00:09:41
think that's where that comes from and

00:09:38 --> 00:09:43
that's actually maybe a more general

00:09:40 --> 00:09:45
esson about the AI that until you've

00:09:42 --> 00:09:48
seen it over perform a human it's hard

00:09:44 --> 00:09:52
to believe it it could but then the

00:09:47 --> 00:09:56
tails a lot of these top players they're

00:09:51 --> 00:09:58
so good at hiding tails that among the

00:09:55 --> 00:10:01
top players it's actually not really

00:09:57 --> 00:10:03
worth it for them to invest a lot of

00:10:00 --> 00:10:05
effort trying to find tails in each

00:10:02 --> 00:10:09
other because there's a so good at

00:10:04 --> 00:10:12
hiding them so yes at the kind of Friday

00:10:08 --> 00:10:14
evening game tells are gonna be a huge

00:10:11 --> 00:10:15
thing you can read other people and if

00:10:13 --> 00:10:18
you're a good reader you you'll read

00:10:14 --> 00:10:20
them like an open book but at the top

00:10:17 --> 00:10:21
levels of poker no details become a list

00:10:19 --> 00:10:24
of the much much smaller and smaller

00:10:20 --> 00:10:27
aspect of the game as you go to the top

00:10:23 --> 00:10:30
levels the the amount of strategies the

00:10:26 --> 00:10:34
amount of possible actions is is very

00:10:29 --> 00:10:38
large ten to the power of one hundred

00:10:33 --> 00:10:42
plus so there has to be some I've read a

00:10:37 --> 00:10:43
few the papers related it has it has to

00:10:41 --> 00:10:47
form some abstractions of various hands

00:10:42 --> 00:10:50
and actions so what kind of abstractions

00:10:46 --> 00:10:52
are effective for the game of poker yeah

00:10:49 --> 00:10:55
so you're exactly right so when you go

00:10:51 --> 00:10:57
from a game tree that's ten to the 161

00:10:54 --> 00:11:00
especially in an imperfect information

00:10:56 --> 00:11:02
game it's way too large to solve

00:10:59 --> 00:11:06
directly even with our fastest ik

00:11:01 --> 00:11:10
finding algorithms so you wanna abstract

00:11:05 --> 00:11:13
it first and abstraction in games is

00:11:09 --> 00:11:16
much trickier than abstraction in mdps

00:11:12 --> 00:11:18
or other single agent settings because

00:11:15 --> 00:11:19
you have these abstraction pathologies

00:11:17 --> 00:11:22
that if I have a finer grained

00:11:18 --> 00:11:24
abstraction the strategy that I can get

00:11:21 --> 00:11:26
from that for the real game might

00:11:23 --> 00:11:27
actually be worse than the strategy I

00:11:25 --> 00:11:28
can get from the coarse-grained

00:11:26 --> 00:11:30
abstraction if you have to be very

00:11:27 --> 00:11:32
careful now the the kinds of

00:11:29 --> 00:11:34
abstractions just to zoom out we're

00:11:31 --> 00:11:37
talking about there's the hands

00:11:33 --> 00:11:39
abstractions and then there's betting

00:11:36 --> 00:11:41
strategies yeah what I think actions

00:11:38 --> 00:11:43
yeah baiting access or so there's

00:11:40 --> 00:11:45
information obstruction to talk about

00:11:42 --> 00:11:48
general games information abstraction

00:11:44 --> 00:11:49
which is the abstraction of what chance

00:11:47 --> 00:11:52
does and this would be the cards in the

00:11:48 --> 00:11:55
case of poker and then there's action

00:11:51 --> 00:11:58
abstraction which is abstracting the

00:11:54 --> 00:12:00
actions of the actual players which

00:11:57 --> 00:12:02
would be bits in the case of poker

00:11:59 --> 00:12:06
yourself and the other players yes

00:12:01 --> 00:12:10
yourself and other players and for

00:12:05 --> 00:12:13
information abstraction we were

00:12:09 --> 00:12:15
completely automated so these were these

00:12:12 --> 00:12:18
are algorithms but they do what we call

00:12:14 --> 00:12:19
potential aware abstraction where we

00:12:17 --> 00:12:22
don't just look at the value of the hand

00:12:18 --> 00:12:24
but also how it might materialize in the

00:12:21 --> 00:12:26
good or bad hands over time and it's a

00:12:23 --> 00:12:28
certain kind of bottom-up process with

00:12:25 --> 00:12:30
integer programming there and clustering

00:12:27 --> 00:12:33
and various aspects how do you build

00:12:29 --> 00:12:36
this abstraction and then in the

00:12:32 --> 00:12:41
action abstraction there it's largely

00:12:35 --> 00:12:43
based on how humans other and other AIS

00:12:40 --> 00:12:45
have played this game in the past but in

00:12:42 --> 00:12:48
the beginning we actually use an

00:12:44 --> 00:12:52
automated action abstraction technology

00:12:47 --> 00:12:54
which is provably convergent that it

00:12:51 --> 00:12:56
finds the optimal combination of eight

00:12:53 --> 00:12:58
sizes but it's not very scalable so we

00:12:55 --> 00:12:59
couldn't use it for the whole game but

00:12:57 --> 00:13:01
we used it for the first couple of

00:12:58 --> 00:13:04
betting actions so what's more important

00:13:00 --> 00:13:08
he strength of the hand so the

00:13:03 --> 00:13:11
information retraction or the how you

00:13:07 --> 00:13:14
play them the actions does

00:13:10 --> 00:13:15
you know the romanticized notion again

00:13:13 --> 00:13:19
is that it doesn't matter what hands you

00:13:14 --> 00:13:21
have that the actions the betting may be

00:13:18 --> 00:13:22
the way you win no matter what hands you

00:13:20 --> 00:13:25
have yeah so that's why you have to play

00:13:21 --> 00:13:29
a lot of hands so that the role of luck

00:13:24 --> 00:13:31
gets smaller so you could otherwise get

00:13:28 --> 00:13:32
lucky and get some good hands and then

00:13:30 --> 00:13:35
you're gonna win the match even with

00:13:31 --> 00:13:38
ousands of hands you can get lucky

00:13:34 --> 00:13:40
because there's so much variance in No

00:13:37 --> 00:13:44
Limit Texas Hold'em because if we both

00:13:39 --> 00:13:47
go all-in it's a huge stack or variant

00:13:43 --> 00:13:49
so there are these massive swings in No

00:13:46 --> 00:13:52
Limit Texas Hold'em so that's why you

00:13:48 --> 00:13:54
have to play not just thousands but over

00:13:51 --> 00:13:57
a hundred thousand hands don't get

00:13:53 --> 00:13:59
statistical significance let me ask

00:13:56 --> 00:14:03
another way this question if you didn't

00:13:58 --> 00:14:05
even look at your hands but they didn't

00:14:02 --> 00:14:07
know that the your opponents didn't know

00:14:04 --> 00:14:09
that how well would you be able to do oh

00:14:06 --> 00:14:11
that's a good question there's actually

00:14:08 --> 00:14:13
I heard this story that this is

00:14:10 --> 00:14:15
Norwegian female poker player goal and

00:14:12 --> 00:14:17
at uber stud who's actually won a

00:14:14 --> 00:14:21
tournament by doing exactly that but

00:14:16 --> 00:14:27
hat would be extremely rare so so I

00:14:20 --> 00:14:29
cannot really play well the hands do

00:14:26 --> 00:14:34
have some role to play oh yes so LeBron

00:14:28 --> 00:14:37
is does not use as far as I understand a

00:14:33 --> 00:14:41
used learning methods deep learning is

00:14:36 --> 00:14:43
there room for learning in you know

00:14:40 --> 00:14:46
there's no reason why lab artist doesn't

00:14:42 --> 00:14:48
you know combined with an alphago type

00:14:45 --> 00:14:51
approach for estimating the quality for

00:14:47 --> 00:14:54
function estimator what are your

00:14:50 --> 00:14:56
thoughts on this maybe as compared to

00:14:53 --> 00:14:58
another algorithm which I'm not that

00:14:55 --> 00:15:01
familiar with deep stack the the engine

00:14:57 --> 00:15:02
that does use deep learning that it's

00:15:00 --> 00:15:04
unclear how well it does but

00:15:01 --> 00:15:06
nevertheless uses deep learning so what

00:15:03 --> 00:15:09
are your thoughts about learning methods

00:15:05 --> 00:15:11
to aid in the way that teller Broadus

00:15:08 --> 00:15:13
plays the game of poker yeah so as you

00:15:10 --> 00:15:16
said Lee barratto's did not use learning

00:15:12 --> 00:15:17
methods and played very well without

00:15:15 --> 00:15:20
hem since then we have actually

00:15:16 --> 00:15:23
here we have a couple of papers

00:15:19 --> 00:15:26
on things that do use learning technique

00:15:22 --> 00:15:30
Saxon so and deep learning in particular

00:15:25 --> 00:15:33
and the sort of the way you're talking

00:15:29 --> 00:15:37
about where it's learning an evaluation

00:15:32 --> 00:15:41
function but in imperfect information

00:15:36 --> 00:15:44
games unlike let's say in Co or now now

00:15:40 --> 00:15:47
also in chess and shogi it's not some

00:15:43 --> 00:15:52
sufficient to learn an evaluation for a

00:15:46 --> 00:15:55
state because the value of an

00:15:51 --> 00:15:58
information set depends not only on the

00:15:54 --> 00:16:01
xact state but it also depends on both

00:15:57 --> 00:16:04
players beliefs like if I have a bad

00:16:00 --> 00:16:06
hand I'm much better off if the opponent

00:16:03 --> 00:16:07
hinks I'm have a good hand and vice

00:16:05 --> 00:16:10
versa if I have a good hand I'm much

00:16:06 --> 00:16:14
better off if the opponent believes I

00:16:09 --> 00:16:16
have a bad hand so the value of a state

00:16:13 --> 00:16:19
is not just a function of the cards it

00:16:15 --> 00:16:23
depends on if you will the path of play

00:16:18 --> 00:16:25
but only to the extent that is captured

00:16:22 --> 00:16:28
in the belief distributions so so that's

00:16:24 --> 00:16:30
why it's not as simple as as it is

00:16:27 --> 00:16:32
imperfect information games another one

00:16:29 --> 00:16:34
I'd say it's simple there either it's of

00:16:31 --> 00:16:36
course very complicated computationally

00:16:33 --> 00:16:38
there too but at least conceptually it's

00:16:35 --> 00:16:39
very straightforward there's a state

00:16:37 --> 00:16:42
there's an evaluation function you can

00:16:39 --> 00:16:47
try to learn it here you have to do

00:16:41 --> 00:16:49
something more and what we do is in one

00:16:46 --> 00:16:51
of these papers we're looking at

00:16:48 --> 00:16:52
allowing where we allow with the

00:16:50 --> 00:16:55
opponent to actually take different

00:16:51 --> 00:16:59
strategies at the leaf of the search

00:16:54 --> 00:17:01
tree as F if you will and and that is a

00:16:58 --> 00:17:03
different way of doing it and it doesn't

00:17:00 --> 00:17:05
assume therefore a particular way that

00:17:02 --> 00:17:08
he opponent plays but it allows

00:17:04 --> 00:17:10
opponent to choose from a set of

00:17:07 --> 00:17:13
different continuation strategies and

00:17:09 --> 00:17:16
that forces us to not be too optimistic

00:17:12 --> 00:17:18
in our local head search and that's

00:17:15 --> 00:17:21
one way you can do sound look

00:17:17 --> 00:17:23
ahead search in imperfect information

00:17:20 --> 00:17:26
games which is very different difficult

00:17:22 --> 00:17:28
and in us you were asking about deep

00:17:25 --> 00:17:30
stack what they did it was very

00:17:27 --> 00:17:32
different than what we do either in Lee

00:17:29 --> 00:17:34
brothers or in this new work

00:17:31 --> 00:17:37
they were gender and Umrah generating

00:17:33 --> 00:17:39
various situations in the game then they

00:17:36 --> 00:17:42
were doing Luca head from there to the

00:17:38 --> 00:17:44
nd of the game as if that was a start

00:17:41 --> 00:17:46
of a different game and then they were

00:17:43 --> 00:17:49
using deep learning to learn those

00:17:45 --> 00:17:51
values of those states but the states

00:17:48 --> 00:17:53
were not just the physical states they

00:17:50 --> 00:17:57
include the belief distributions when

00:17:52 --> 00:17:59
you talk about look ahead for deep stack

00:17:56 --> 00:18:02
or with libertas does it mean

00:17:58 --> 00:18:04
considering every possibility that the

00:18:01 --> 00:18:05
game can involve is that we're talking

00:18:03 --> 00:18:08
about extremely sort of like this

00:18:04 --> 00:18:11
exponentially growth of a tree yes so

00:18:07 --> 00:18:15
we're talking about exactly that

00:18:10 --> 00:18:17
much like you do in Alpha Beta search or

00:18:14 --> 00:18:18
want to crawl to research but with

00:18:16 --> 00:18:20
different techniques so there's a

00:18:17 --> 00:18:22
different search algorithm and then we

00:18:19 --> 00:18:24
have to deal with the leaves differently

00:18:21 --> 00:18:26
so if you think about what Lee brothers

00:18:23 --> 00:18:28
did we didn't have to worry about this

00:18:25 --> 00:18:32
because we only did it at the end of the

00:18:27 --> 00:18:34
game so we would always terminate into a

00:18:31 --> 00:18:36
real situation and we would know what to

00:18:33 --> 00:18:38
payout this it didn't do this

00:18:35 --> 00:18:41
depth limited loka heads but now in this

00:18:37 --> 00:18:42
new paper which is called depth limited

00:18:40 --> 00:18:44
I think it's called depth limited

00:18:41 --> 00:18:47
research for imperfect information games

00:18:43 --> 00:18:49
we can actually do sound depth limited

00:18:46 --> 00:18:49
look at it so we can actually started

00:18:48 --> 00:18:51
with a look ahead

00:18:48 --> 00:18:54
from the beginning of the game on

00:18:50 --> 00:18:55
because that's too complicated to do for

00:18:53 --> 00:18:57
this whole long game

00:18:54 --> 00:18:59
so in Lee brothers we were just doing it

00:18:56 --> 00:19:02
for the end so and then the other side

00:18:58 --> 00:19:06
this belief distribution so is it

00:19:01 --> 00:19:09
explicitly modeled what kind of beliefs

00:19:05 --> 00:19:11
that the opponent might have yeah yeah

00:19:08 --> 00:19:14
it is explicitly modeled but it's not

00:19:10 --> 00:19:18
assumed the beliefs are actually output

00:19:13 --> 00:19:20
not input of course the starting beliefs

00:19:17 --> 00:19:22
are input but they just fall from the

00:19:19 --> 00:19:25
rules of the game because we know that

00:19:21 --> 00:19:28
he dealer deals uniformly from the dick

00:19:24 --> 00:19:31
so I know that every pair of cards that

00:19:27 --> 00:19:32
you might have is equally likely I know

00:19:30 --> 00:19:33
that for a fact

00:19:31 --> 00:19:35
hat's as follows from the rules of the

00:19:32 --> 00:19:37
game of course except the two cards that

00:19:34 --> 00:19:39
I have I know you don't have those yes

00:19:36 --> 00:19:41
you have to take that into account

00:19:38 --> 00:19:43
hat's called card removal and that's

00:19:40 --> 00:19:45
very important is the dealing always

00:19:42 --> 00:19:49
coming from a single deck in the heads

00:19:44 --> 00:19:51
up so you can assume single deck know

00:19:48 --> 00:19:54
that if some if if I have the ace of

00:19:50 --> 00:19:54
spades I know you don't have an ace of

00:19:53 --> 00:19:56
spades

00:19:53 --> 00:19:58
okay so in the beginning your belief is

00:19:55 --> 00:20:01
basically the fact that it's a fair

00:19:57 --> 00:20:04
dealing of hands but how do you adjust

00:20:00 --> 00:20:06
art to adjust that belief well that's

00:20:03 --> 00:20:09
a where this beauty of games here it

00:20:05 --> 00:20:13
comes so nash equilibrium which john

00:20:08 --> 00:20:15
ash introduced in 1950 introduces what

00:20:12 --> 00:20:18
rational play is when you have more than

00:20:14 --> 00:20:20
one player and these are pairs of

00:20:17 --> 00:20:24
strategies where strategies are

00:20:19 --> 00:20:25
contingency plans one for each player so

00:20:23 --> 00:20:28
neither player wants to

00:20:24 --> 00:20:30
deviate to a different strategy given

00:20:27 --> 00:20:33
that the other doesn't deviate but as a

00:20:29 --> 00:20:36
side effect you get the beliefs from

00:20:32 --> 00:20:38
Bayes rule so Nash equilibrium really

00:20:35 --> 00:20:40
isn't just deriving in these imperfect

00:20:37 --> 00:20:43
information games Nash equilibrium

00:20:39 --> 00:20:46
doesn't just define strategies it also

00:20:42 --> 00:20:50
defines beliefs for both us and it

00:20:45 --> 00:20:53
defines beliefs for each state so at the

00:20:49 --> 00:20:55
ach state it's if they take all

00:20:52 --> 00:20:57
information sets at each information set

00:20:54 --> 00:21:00
in the game there's a set of different

00:20:56 --> 00:21:02
states that we might be in but I don't

00:20:59 --> 00:21:05
know which one we're in Nash equilibrium

00:21:01 --> 00:21:07
tells me exactly what is a probability

00:21:04 --> 00:21:10
distribution over those real world

00:21:06 --> 00:21:13
states in my mind how does naturally

00:21:09 --> 00:21:15
give you that distribution so why I'll

00:21:12 --> 00:21:19
do a simple example so you know the game

00:21:14 --> 00:21:21
rock-paper-scissors so we can draw it as

00:21:18 --> 00:21:24
player 1 moves first and then player 2

00:21:20 --> 00:21:26
moves but of course it's important that

00:21:23 --> 00:21:28
player 2 doesn't know what player 1

00:21:25 --> 00:21:30
moved otherwise player 2 would win every

00:21:27 --> 00:21:32
time so we can draw that as an

00:21:29 --> 00:21:35
information set where player 1 makes one

00:21:31 --> 00:21:37
of three moves first and then there's an

00:21:34 --> 00:21:41
information set for player 2 so player 2

00:21:36 --> 00:21:44
doesn't know which of those nodes the

00:21:40 --> 00:21:46
world is it but once we know the

00:21:43 --> 00:21:48
strategy for player 1 Nash equilibrium

00:21:45 --> 00:21:51
will say that you play 1/3 Rock 1/3

00:21:47 --> 00:21:53
paper 1/3 caesars from that I can derive

00:21:50 --> 00:21:55
my beliefs of the information set that

00:21:52 --> 00:21:59
hey wanted 1/3 wants it though so Bayes

00:21:54 --> 00:22:01
gives you that basis you but is that

00:21:58 --> 00:22:04
specific to a particular player or is it

00:22:00 --> 00:22:08
is there something you quickly update

00:22:03 --> 00:22:11
with the game theory isn't really player

00:22:07 --> 00:22:13
specific so that's what also why we

00:22:10 --> 00:22:15
don't need any data we don't need any

00:22:12 --> 00:22:17
history how these particular humans

00:22:14 --> 00:22:19
played in the past or how any AI or even

00:22:16 --> 00:22:22
had played before it's all about

00:22:18 --> 00:22:24
rationality so we just think the AI just

00:22:21 --> 00:22:27
hinks about what would a rational

00:22:23 --> 00:22:30
opponent do and what would I do if I

00:22:26 --> 00:22:32
were right I am rational and that that's

00:22:29 --> 00:22:35
the idea of game theory so it's

00:22:31 --> 00:22:38
really a data free opponent free

00:22:34 --> 00:22:40
approach sir comes from the design of

00:22:37 --> 00:22:42
the game as opposed to the design of the

00:22:39 --> 00:22:44
player exactly if there's no opponent

00:22:41 --> 00:22:46
modeling per se I mean we've done some

00:22:43 --> 00:22:48
work on combining opponent modeling with

00:22:45 --> 00:22:50
game theory so you couldn't exploit weak

00:22:47 --> 00:22:52
players even more but that's another

00:22:49 --> 00:22:54
strand and in the Lee brothers we didn't

00:22:51 --> 00:22:56
urn that on because I decided that

00:22:53 --> 00:22:59
hese players are too good and when you

00:22:55 --> 00:23:01
start to exploit an opponent you'll

00:22:58 --> 00:23:04
typically open yourself up self up to

00:23:00 --> 00:23:05
exploitation and these guys have so few

00:23:03 --> 00:23:07
holes to exploit and they're world's

00:23:04 --> 00:23:09
leading experts in counter exploitation

00:23:06 --> 00:23:11
so I decided that we're not gonna turn

00:23:08 --> 00:23:13
that stuff on actually I saw a few

00:23:10 --> 00:23:17
papers exploiting opponents it sound

00:23:12 --> 00:23:19
very interesting to explore do you think

00:23:16 --> 00:23:22
there's room for exploitation generally

00:23:18 --> 00:23:25
outside of LeBron us is is there subject

00:23:21 --> 00:23:29
or people differences that could be

00:23:24 --> 00:23:31
xploited maybe not just in poker but in

00:23:28 --> 00:23:33
general interactions negotiations all

00:23:30 --> 00:23:36
these other domains that yours

00:23:32 --> 00:23:38
considering yeah I definitely we've done

00:23:35 --> 00:23:41
some work on that and I really like

00:23:37 --> 00:23:43
their work at hybridize is the two so

00:23:40 --> 00:23:45
you figure out what would a rational

00:23:42 --> 00:23:47
opponent do and by the way that's safe

00:23:44 --> 00:23:49
in these zero-sum games two player

00:23:46 --> 00:23:51
zero-sum games because if the opponent

00:23:48 --> 00:23:55
does something irrational yes it might

00:23:50 --> 00:23:57
show throw off my beliefs but the amount

00:23:54 --> 00:24:00
hat the player can gain by throwing off

00:23:56 --> 00:24:04
my belief is always less than they lose

00:23:59 --> 00:24:07
by playing poorly so so it's safe but

00:24:03 --> 00:24:09
still if somebody's weak as a player you

00:24:06 --> 00:24:11
might want to play differently to

00:24:08 --> 00:24:13
exploit them more so that you can think

00:24:10 --> 00:24:18
about it this way a game theoretic

00:24:12 --> 00:24:21
strategies are unbeatable but it doesn't

00:24:17 --> 00:24:24
maximally beat the other opponent so the

00:24:20 --> 00:24:26
winnings per hand might be better with a

00:24:23 --> 00:24:27
different strategy and the hybrid is

00:24:25 --> 00:24:29
that you start from a game theoretic

00:24:26 --> 00:24:32
approach and then as you gain data from

00:24:28 --> 00:24:34
about the opponent in certain parts of

00:24:31 --> 00:24:37
the game tree that in those parts of the

00:24:33 --> 00:24:39
game tree you start to tweak your

00:24:36 --> 00:24:41
strategy more and more towards

00:24:38 --> 00:24:43
exploitation while still staying fairly

00:24:40 --> 00:24:45
close to the game theoretic strategy so

00:24:42 --> 00:24:47
as to not open yourself up to

00:24:44 --> 00:24:52
exploitation too much

00:24:46 --> 00:24:54
ow do you do that do you try to vary up

00:24:51 --> 00:24:57
strategies make it unpredictable it's

00:24:53 --> 00:24:59
like what is it

00:24:56 --> 00:25:03
it-for-tat strategies in prisoner's

00:24:58 --> 00:25:05
dilemma or well it doesn't that that's a

00:25:02 --> 00:25:08
repeated game kind of prisoner's dilemma

00:25:04 --> 00:25:10
repeats it games but but even there

00:25:07 --> 00:25:12
's no proof that says that that's

00:25:09 --> 00:25:14
the best thing but experimentally it

00:25:11 --> 00:25:16
actually does does does well so what

00:25:13 --> 00:25:18
kind of games are there first of all I

00:25:15 --> 00:25:20
don't know if this is something that you

00:25:17 --> 00:25:21
could just summarize there's perfect

00:25:19 --> 00:25:24
information games or all the

00:25:20 --> 00:25:26
informations on the table there is

00:25:23 --> 00:25:29
imperfect information games there's

00:25:25 --> 00:25:33
repeated games you play over and over

00:25:28 --> 00:25:36
there's zero-sum games there's

00:25:32 --> 00:25:38
nonzero-sum games yeah and then there's

00:25:35 --> 00:25:41
a really important distinction you're

00:25:37 --> 00:25:45
making two-player versus more players so

00:25:40 --> 00:25:47
what are what other games out there and

00:25:44 --> 00:25:50
what's the difference for example with

00:25:46 --> 00:25:52
is two-player game versus more players

00:25:49 --> 00:25:55
yeah what are the key differences right

00:25:51 --> 00:26:00
here so let me start from the the basic

00:25:54 --> 00:26:03
so a repeated game is a game where the

00:25:59 --> 00:26:07
same exact game is played over and over

00:26:02 --> 00:26:09
in these extensive form games where

00:26:06 --> 00:26:11
think about three form maybe with these

00:26:08 --> 00:26:15
information says to represent incomplete

00:26:10 --> 00:26:17
information you can have kind of

00:26:14 --> 00:26:19
repetitive interactions even repeated

00:26:16 --> 00:26:22
games are a special case of that by the

00:26:18 --> 00:26:24
way but if the game doesn't have to be

00:26:21 --> 00:26:26
xactly the same selectively sourcing

00:26:23 --> 00:26:28
all trips yes we kind of see it the same

00:26:25 --> 00:26:30
supply base year to year but what I'm

00:26:27 --> 00:26:31
buying is a little different every time

00:26:29 --> 00:26:33
and the supply base is a little

00:26:30 --> 00:26:36
different every time and so on so it's

00:26:32 --> 00:26:38
not really repeated so to find a purely

00:26:35 --> 00:26:41
repeated game is actually very rare in

00:26:37 --> 00:26:45
the world so they're really a very

00:26:40 --> 00:26:47
coarse model of what's going on then if

00:26:44 --> 00:26:51
you move up from repeat just repeated

00:26:46 --> 00:26:52
simple repeated matrix games not all the

00:26:50 --> 00:26:53
way to extensive form games but in

00:26:51 --> 00:26:56
between

00:26:52 --> 00:27:00
they're stochastic games where you know

00:26:55 --> 00:27:01
this these think about it like these

00:26:59 --> 00:27:03
little matrix games

00:27:00 --> 00:27:06
and when you take an action and your

00:27:02 --> 00:27:09
home takes an action they determine not

00:27:05 --> 00:27:11
which next state I'm going to next game

00:27:08 --> 00:27:14
I'm going to but the distribution over

00:27:10 --> 00:27:16
next games where I might be going to so

00:27:13 --> 00:27:19
that's the stochastic game but it's

00:27:15 --> 00:27:22
like matrix games repeated stochastic

00:27:18 --> 00:27:25
games extensive form games that is from

00:27:21 --> 00:27:27
less to more general and and poker is an

00:27:24 --> 00:27:31
example of the last one so it's really

00:27:26 --> 00:27:32
the most general setting extensive form

00:27:30 --> 00:27:35
games and that's kind of what the AI

00:27:31 --> 00:27:38
community has been working on and being

00:27:34 --> 00:27:39
benched marked on with this heads-up No

00:27:37 --> 00:27:40
Limit Texas Hold'em

00:27:38 --> 00:27:43
can you describe extensive form games

00:27:39 --> 00:27:45
what was the motto here yeah so if you

00:27:42 --> 00:27:47
imagine with the tree form so it's

00:27:44 --> 00:27:49
really the tree form like in chess

00:27:46 --> 00:27:52
there's a search tree versus a matrix is

00:27:49 --> 00:27:54
a matrix yeah and that's the new matrix

00:27:51 --> 00:27:57
is called the matrix form or by matrix

00:27:53 --> 00:27:58
form or normal form game and here you

00:27:56 --> 00:28:01
have the tree form so you can actually

00:27:57 --> 00:28:03
do certain types of reasoning there that

00:28:00 --> 00:28:07
you'll lose the information when you go

00:28:02 --> 00:28:08
to normal form there's a certain form of

00:28:06 --> 00:28:10
equivalence like if you go from three

00:28:07 --> 00:28:14
form and you say it every possible

00:28:09 --> 00:28:15
contingency plan is the strategy then I

00:28:13 --> 00:28:17
can actually go back to the normal form

00:28:14 --> 00:28:19
but I lose some information from the

00:28:16 --> 00:28:21
lack of sequentiality then the

00:28:18 --> 00:28:23
multiplayer versus two-player

00:28:20 --> 00:28:29
distinction is an important one

00:28:22 --> 00:28:33
so two-player games in zero-sum are

00:28:28 --> 00:28:35
conceptually easier and computationally

00:28:32 --> 00:28:38
easier there's still huge like this one

00:28:34 --> 00:28:40
but they're conceptually easier

00:28:37 --> 00:28:42
and computationally easier in that

00:28:39 --> 00:28:45
conceptually you don't have to worry

00:28:41 --> 00:28:46
about which equilibrium is the other guy

00:28:44 --> 00:28:50
going to play when there are multiple

00:28:45 --> 00:28:51
because any equilibrium strategy is a

00:28:49 --> 00:28:53
best response to any other equilibrium

00:28:50 --> 00:28:56
strategy so I can play a different

00:28:52 --> 00:28:58
equilibrium from you and we'll still get

00:28:55 --> 00:29:00
he right values of the game that falls

00:28:57 --> 00:29:02
apart even with two players when you

00:28:59 --> 00:29:04
have general some games even without

00:29:01 --> 00:29:07
cooperation just even without

00:29:03 --> 00:29:09
cooperation so there's a big gap from

00:29:06 --> 00:29:11
two player zero-sum to two-player

00:29:08 --> 00:29:13
general sum or even to three player

00:29:10 --> 00:29:17
zero-sum that's that's a big gap

00:29:12 --> 00:29:19
at least in theory can you maybe not

00:29:16 --> 00:29:21
mathematically provide the intuition why

00:29:18 --> 00:29:24
it all falls apart with three or more

00:29:20 --> 00:29:27
players it seems like you should still

00:29:23 --> 00:29:32
be able to have a Nash equilibrium that

00:29:26 --> 00:29:37
yeah that's instructive that holds okay

00:29:31 --> 00:29:39
so it is true that all finite games have

00:29:36 --> 00:29:42
a Nash equilibrium so this is what your

00:29:38 --> 00:29:44
Nash actually proved so they do have a

00:29:41 --> 00:29:46
Nash equilibrium that's not a problem

00:29:43 --> 00:29:49
the problem is that there can be many

00:29:45 --> 00:29:52
and then there's a question of which

00:29:48 --> 00:29:53
equilibrium to select so and if you

00:29:51 --> 00:29:59
select your strategy from a different

00:29:52 --> 00:30:01
equilibrium and I select mind then did

00:29:58 --> 00:30:05
what does that mean I and in this non

00:30:00 --> 00:30:07
zero sum games we may lose some joint

00:30:04 --> 00:30:09
benefits we hope by being just simply

00:30:06 --> 00:30:11
stupid we could actually both be better

00:30:08 --> 00:30:12
off if we did something else yes and in

00:30:10 --> 00:30:15
three player you get other problems also

00:30:11 --> 00:30:19
like collusion that maybe you and I can

00:30:14 --> 00:30:21
get up on a third player and we can do

00:30:18 --> 00:30:22
radically better by colluding so that

00:30:20 --> 00:30:22
here are lots of issues that come up

00:30:21 --> 00:30:26
there

00:30:21 --> 00:30:29
so no Brown student you workers on this

00:30:25 --> 00:30:31
has mentioned I looked through the AMA

00:30:28 --> 00:30:32
and read it he mentioned that the

00:30:30 --> 00:30:35
ability of poker players to collaborate

00:30:31 --> 00:30:37
will make the game he was asked the

00:30:34 --> 00:30:39
question of how would you make the game

00:30:36 --> 00:30:41
of poker or both of you were asked the

00:30:38 --> 00:30:42
question how would you make the game of

00:30:40 --> 00:30:46
poker

00:30:41 --> 00:30:49
beyond being solvable by current AI

00:30:45 --> 00:30:53
methods and he said that there's not

00:30:48 --> 00:30:57
many ways of making poker more difficult

00:30:52 --> 00:30:59
but collaboration or cooperation between

00:30:56 --> 00:31:01
players would make it extremely

00:30:58 --> 00:31:04
difficult so can you provide the

00:31:00 --> 00:31:08
intuition behind why that is if you

00:31:03 --> 00:31:11
agree with that idea yeah so we've done

00:31:07 --> 00:31:13
a lot of work coalitional games and we

00:31:10 --> 00:31:15
actually have a paper here with my other

00:31:12 --> 00:31:17
student cappella Farina and some other

00:31:14 --> 00:31:19
collaborators on after net nips on that

00:31:16 --> 00:31:22
actually just came back from the poster

00:31:18 --> 00:31:23
session where we present life so when

00:31:21 --> 00:31:25
you have a collusion it's a it's a

00:31:22 --> 00:31:28
different problem yes and it typically

00:31:24 --> 00:31:30
gets even harder then

00:31:27 --> 00:31:32
even the game representations some of

00:31:29 --> 00:31:35
the game representations don't really

00:31:31 --> 00:31:38
allow go to computation so we actually

00:31:34 --> 00:31:40
introduced a new game representation for

00:31:37 --> 00:31:43
that is that kind of cooperation

00:31:39 --> 00:31:46
part of the model is are you do you have

00:31:42 --> 00:31:48
information about the fact

00:31:45 --> 00:31:50
hat other players are cooperating or is

00:31:47 --> 00:31:52
it just this chaos that where nothing is

00:31:49 --> 00:31:54
known so there's some something's

00:31:51 --> 00:31:57
unknown can you give an example of a

00:31:53 --> 00:32:00
collusion type game or Z you select

00:31:56 --> 00:32:02
breach that so think about bridge it's

00:31:59 --> 00:32:05
like when you and I are on a team

00:32:01 --> 00:32:08
our payoffs are the same the problem is

00:32:05 --> 00:32:10
that we can't talk so so when I get my

00:32:07 --> 00:32:13
cards I can't whisper to you what my

00:32:09 --> 00:32:16
cards are that would not be allowed so

00:32:12 --> 00:32:20
we have to somehow coordinate our

00:32:15 --> 00:32:21
strategies ahead of time and only ahead

00:32:19 --> 00:32:24
of time and then there are certain

00:32:20 --> 00:32:26
signals we can talk about but they have

00:32:23 --> 00:32:29
to be such that the other team also

00:32:25 --> 00:32:31
understands them so so that that's

00:32:28 --> 00:32:33
an example where the coordination

00:32:30 --> 00:32:35
is already built into the rules of the

00:32:32 --> 00:32:39
game but in many other situations like

00:32:34 --> 00:32:42
auctions or negotiations or diplomatic

00:32:38 --> 00:32:44
relationships poker it's not really

00:32:41 --> 00:32:47
built-in but it still can be very

00:32:43 --> 00:32:50
helpful for the coders I've read you

00:32:46 --> 00:32:53
right somewhere the negotiations you

00:32:49 --> 00:32:56
come to the table with prior like a

00:32:52 --> 00:32:58
strategy that like that you're willing

00:32:55 --> 00:33:01
to do and not willing to do those kinds

00:32:57 --> 00:33:03
of things so how do you start to now

00:33:00 --> 00:33:05
moving away from poker movie beyond

00:33:02 --> 00:33:07
poker into other applications like

00:33:04 --> 00:33:10
negotiations how do you start applying

00:33:06 --> 00:33:12
this to other and to other domains

00:33:09 --> 00:33:14
yeah even real world domains that you've

00:33:11 --> 00:33:16
worked on yeah I actually have two

00:33:13 --> 00:33:18
start-up companies doing exactly that

00:33:15 --> 00:33:20
one is called strategic machine and

00:33:17 --> 00:33:23
that's for kind of build applications

00:33:19 --> 00:33:26
gaming sports all sorts of things like

00:33:22 --> 00:33:31
that any applications of this to

00:33:25 --> 00:33:33
business and to sports and to gaming to

00:33:30 --> 00:33:35
various types of things for in finance

00:33:32 --> 00:33:37
lectricity markets and so on and the

00:33:34 --> 00:33:41
other is called strategy robot where we

00:33:36 --> 00:33:42
are taking this to military secure

00:33:40 --> 00:33:45
the cyber security and intelligence

00:33:41 --> 00:33:52
applications I think you worked a little

00:33:44 --> 00:33:55
bit in how he put it advertisement sort

00:33:51 --> 00:33:56
of suggesting ad kind of thing yeah

00:33:54 --> 00:33:59
auction that's another component

00:33:56 --> 00:34:01
optimized markets optimized but that's

00:33:58 --> 00:34:04
much more about a combinatorial market

00:34:00 --> 00:34:06
and optimization based technology that's

00:34:03 --> 00:34:11
not using these game theoretic reasoning

00:34:05 --> 00:34:14
technologies I think okay so what sort

00:34:10 --> 00:34:17
of high level do you think about our

00:34:13 --> 00:34:20
ability to use game theoretic concepts

00:34:16 --> 00:34:22
to model human behavior do you think do

00:34:19 --> 00:34:24
you think human behavior is amenable to

00:34:21 --> 00:34:26
this kind of modeling so outside of the

00:34:23 --> 00:34:28
poker games and where have you seen it

00:34:25 --> 00:34:33
done successfully in your work I'm not

00:34:27 --> 00:34:36
sure the goal really is modeling humans

00:34:32 --> 00:34:38
like for example if I'm playing a

00:34:35 --> 00:34:41
zero-sum game yes I don't really care

00:34:37 --> 00:34:44
that the opponent is actually following

00:34:40 --> 00:34:46
my model of rational behavior because if

00:34:43 --> 00:34:50
they're not that's even better for me

00:34:45 --> 00:34:53
right so so they see with the opponents

00:34:49 --> 00:34:58
and games there's a the prerequisite is

00:34:52 --> 00:35:00
that you've formalized the interaction

00:34:57 --> 00:35:03
in some way that can be amenable to

00:34:59 --> 00:35:05
analysis and you've done this amazing

00:35:02 --> 00:35:11
work with mechanism design designing

00:35:04 --> 00:35:14
ames that have certain outcomes but so

00:35:10 --> 00:35:16
I'll tell you an example for my for my

00:35:13 --> 00:35:19
world of autonomous vehicles right we're

00:35:15 --> 00:35:21
studying pedestrians and pedestrians and

00:35:18 --> 00:35:24
cars negotiating this nonverbal

00:35:20 --> 00:35:27
communication there's this weird and

00:35:23 --> 00:35:29
game dance of tension where pedestrians

00:35:26 --> 00:35:31
are basically saying I trusted you won't

00:35:28 --> 00:35:33
kill me and so as a jaywalker I will

00:35:30 --> 00:35:34
step onto the road even though I'm

00:35:32 --> 00:35:37
breaking the law and there's this

00:35:33 --> 00:35:39
tension and the question is we really

00:35:36 --> 00:35:42
don't know how to model that well in

00:35:38 --> 00:35:44
trying to model intent and so people

00:35:41 --> 00:35:47
sometimes bring up ideas of game theory

00:35:43 --> 00:35:51
and so on do you think that aspect of

00:35:46 --> 00:35:53
human behavior can use these kinds of

00:35:50 --> 00:35:54
imperfect information approaches

00:35:52 --> 00:35:57
modeling

00:35:53 --> 00:35:59
how do we how do you start to attack a

00:35:56 --> 00:36:02
problem like that when you don't even

00:35:58 --> 00:36:04
know how the game design the game to

00:36:01 --> 00:36:06
describe the situation in order to solve

00:36:03 --> 00:36:09
it okay so I haven't really thought

00:36:05 --> 00:36:11
about jaywalking but one thing that I

00:36:08 --> 00:36:14
think could be a good application in an

00:36:10 --> 00:36:16
autonomous vehicles is the following so

00:36:13 --> 00:36:18
let's say that you have fleets of

00:36:15 --> 00:36:20
autonomous cars operated by different

00:36:17 --> 00:36:23
companies so maybe here's the way more

00:36:19 --> 00:36:25
fleet and here's the uber fleet if you

00:36:22 --> 00:36:27
think about the rules of the road they

00:36:24 --> 00:36:30
define certain little rules but that

00:36:26 --> 00:36:32
still leaves a huge strategy space open

00:36:29 --> 00:36:35
like as a simple example when cars merge

00:36:31 --> 00:36:38
you know how he must merge you know they

00:36:34 --> 00:36:40
slow down and look at each other and try

00:36:37 --> 00:36:42
to I try to merge wouldn't it be better

00:36:39 --> 00:36:45
if these situations would all repeat

00:36:41 --> 00:36:47
pre-negotiated so we can actually merge

00:36:44 --> 00:36:49
at full speed and we know that this is

00:36:46 --> 00:36:51
the situation this is how we do it and

00:36:48 --> 00:36:53
it's all gonna be faster but there are

00:36:50 --> 00:36:56
way too many situations to negotiate

00:36:53 --> 00:36:58
manually so you could do use automated

00:36:55 --> 00:37:00
negotiation this is the idea at least

00:36:57 --> 00:37:03
you could use automated negotiation to

00:36:59 --> 00:37:05
negotiate all of these situations or

00:37:02 --> 00:37:08
many of them in advance and of course it

00:37:04 --> 00:37:09
might be that hey maybe you're not gonna

00:37:07 --> 00:37:11
lways let me go first

00:37:08 --> 00:37:13
maybe you said okay well in these

00:37:10 --> 00:37:15
situations all let you go first but in

00:37:12 --> 00:37:17
exchange you're gonna give me - how much

00:37:14 --> 00:37:18
you're gonna let me go first in this

00:37:16 --> 00:37:20
ituation yes

00:37:17 --> 00:37:23
o it's this huge combinatorial

00:37:19 --> 00:37:25
negotiation and do you think there's

00:37:22 --> 00:37:27
room in that example of merging to model

00:37:24 --> 00:37:29
this whole situation is an imperfect

00:37:26 --> 00:37:31
information game or do you really want

00:37:28 --> 00:37:33
o consider it to be a perfect no that's

00:37:30 --> 00:37:37
a good question yeah that's a good

00:37:32 --> 00:37:41
question I'm paid the price of assuming

00:37:36 --> 00:37:42
that you don't know everything yeah I

00:37:40 --> 00:37:44
don't know it's certainly much easier

00:37:41 --> 00:37:48
games with perfect information are much

00:37:43 --> 00:37:51
easier so if you can get away with it

00:37:47 --> 00:37:53
you should but if the real situation is

00:37:50 --> 00:37:54
of imperfect information then you're

00:37:52 --> 00:37:57
going to have to deal with in for

00:37:53 --> 00:37:59
imperfect information great so what

00:37:56 --> 00:38:02
lessons have you learned the annual

00:37:58 --> 00:38:04
computer poker competition an incredible

00:38:01 --> 00:38:07
accomplishment of AI you know you look

00:38:03 --> 00:38:11
at the history of deep blue

00:38:06 --> 00:38:13
go these kind of moments when I stepped

00:38:10 --> 00:38:16
up in an engineering effort and a

00:38:12 --> 00:38:18
scientific effort combined to beat the

00:38:15 --> 00:38:20
best human players so what do you take

00:38:17 --> 00:38:22
away from this whole experience what

00:38:19 --> 00:38:24
have you learned about designing it has

00:38:21 --> 00:38:28
ystems that play these kinds of games

00:38:23 --> 00:38:30
and what does that mean for sort of AI

00:38:27 --> 00:38:32
in general for the future of IAI

00:38:29 --> 00:38:34
development yeah so that's a good

00:38:31 --> 00:38:37
question so there's so much to say about

00:38:33 --> 00:38:40
it I do like this type of performance

00:38:36 --> 00:38:43
oriented research although in my group

00:38:39 --> 00:38:45
we go all the way from like idea to

00:38:42 --> 00:38:47
theory to experiments to big system

00:38:44 --> 00:38:49
fielding the commercialization so we

00:38:46 --> 00:38:52
spend that spectrum but I think that in

00:38:48 --> 00:38:54
a lot of situations in AI you really

00:38:51 --> 00:38:57
have to build the big systems and

00:38:53 --> 00:38:59
evaluate them at a scale before you know

00:38:56 --> 00:39:01
hat works and doesn't and we've seen

00:38:58 --> 00:39:03
that in the computational game theory

00:39:00 --> 00:39:05
community that there are a lot of

00:39:02 --> 00:39:07
techniques that look good in the small

00:39:04 --> 00:39:09
but then they cease to look good in the

00:39:06 --> 00:39:12
large and we've also seen that there are

00:39:08 --> 00:39:15
a lot of techniques that look superior

00:39:11 --> 00:39:17
in theory and I really mean in terms of

00:39:14 --> 00:39:18
convergence rates better like

00:39:16 --> 00:39:20
first-order methods better convergence

00:39:17 --> 00:39:23
rates like the CFR based based

00:39:19 --> 00:39:25
algorithms yet the CFR pay based

00:39:22 --> 00:39:27
algorithms are the fastest in practice

00:39:24 --> 00:39:29
so it really tells me that you have to

00:39:26 --> 00:39:32
test this in reality the theory isn't

00:39:28 --> 00:39:34
ight enough if you will to tell you

00:39:31 --> 00:39:38
which algorithms are better than the

00:39:33 --> 00:39:40
others and you have to look at these

00:39:37 --> 00:39:41
things that in the large because any

00:39:39 --> 00:39:43
sort of projections you do from the

00:39:40 --> 00:39:45
small and at least in this domain be

00:39:42 --> 00:39:47
very misleading so that that's kind of

00:39:44 --> 00:39:49
rom from a kind of science and

00:39:46 --> 00:39:51
engineering perspective from personal

00:39:48 --> 00:39:54
perspective it's been just a wild

00:39:50 --> 00:39:57
experience in that with the first poker

00:39:53 --> 00:39:59
competition the first or first brains

00:39:56 --> 00:40:01
versus AI man-machine poker competition

00:39:58 --> 00:40:03
that we organized there had been by the

00:40:00 --> 00:40:05
way for other poker games there had been

00:40:02 --> 00:40:07
previous competitions but this was for

00:40:04 --> 00:40:10
heads up No Limit this was the first and

00:40:06 --> 00:40:12
I probably became the most hated person

00:40:09 --> 00:40:15
in the world of Poker and I didn't mean

00:40:11 --> 00:40:19
to III size that they cracked in the

00:40:14 --> 00:40:20
game for yeah it was a lot of people

00:40:18 --> 00:40:22
felt that it was a real

00:40:19 --> 00:40:25
threat to the whole game the whole

00:40:21 --> 00:40:27
xistence of the game if AI becomes

00:40:24 --> 00:40:30
better than humans people would be

00:40:26 --> 00:40:31
scared to play poker because there are

00:40:29 --> 00:40:33
the superhuman AI is running around

00:40:30 --> 00:40:35
taking their money and you know all of

00:40:32 --> 00:40:38
that so so I just it's just really

00:40:34 --> 00:40:39
aggressive just in the comments were

00:40:37 --> 00:40:43
super aggressive I got everything

00:40:38 --> 00:40:44
it's just short of death threats do you

00:40:42 --> 00:40:46
think the same was true for chess

00:40:43 --> 00:40:48
because right now they just completed

00:40:45 --> 00:40:50
the World Championships and chess and

00:40:47 --> 00:40:52
humans just started ignoring the fact

00:40:49 --> 00:40:54
hat there's AI systems now that I'll

00:40:51 --> 00:40:56
perform humans and they still enjoy the

00:40:53 --> 00:40:58
game is still a beautiful game that's

00:40:55 --> 00:41:00
what I think yeah and I think the same

00:40:57 --> 00:41:02
thing happens in poker and so I didn't

00:40:59 --> 00:41:04
hink of myself as somebody was gonna

00:41:01 --> 00:41:06
kill the game and I don't think I did

00:41:03 --> 00:41:08
yeah I've really learned to love this

00:41:05 --> 00:41:10
game I wasn't a poker player before but

00:41:07 --> 00:41:12
learn so many new ones is about it from

00:41:09 --> 00:41:14
these AIS and they've really changed how

00:41:11 --> 00:41:16
the game is played by the way so they

00:41:13 --> 00:41:18
have these very Martian ways of playing

00:41:15 --> 00:41:20
poker and the top humans are now

00:41:17 --> 00:41:23
incorporating those types of strategies

00:41:19 --> 00:41:28
into their own play so if anything to me

00:41:22 --> 00:41:31
our work has made poker a richer more

00:41:27 --> 00:41:33
interesting game for humans to play not

00:41:30 --> 00:41:35
something that is gonna steer him as

00:41:32 --> 00:41:37
away from it entirely just a quick

00:41:34 --> 00:41:41
comment and something you said which is

00:41:36 --> 00:41:45
if I may say so in academia is a little

00:41:40 --> 00:41:46
bit rare sometimes it's pretty brave to

00:41:44 --> 00:41:47
put your ideas to the test in the way

00:41:45 --> 00:41:49
ou described

00:41:46 --> 00:41:52
saying that sometimes good ideas don't

00:41:48 --> 00:41:54
work when you actually try to apply them

00:41:51 --> 00:41:57
at scale and so where does that come

00:41:53 --> 00:42:01
from I mean what if you could do a

00:41:56 --> 00:42:03
dvice for people what what drives you

00:42:00 --> 00:42:05
in that sense were you always this way I

00:42:02 --> 00:42:07
mean it takes a brave person I guess is

00:42:04 --> 00:42:09
what I'm saying to test their ideas and

00:42:06 --> 00:42:12
to see if this thing actually works

00:42:08 --> 00:42:14
against human top human players and so

00:42:11 --> 00:42:16
n yeah I don't know about brave but it

00:42:13 --> 00:42:20
akes a lot of work it takes a lot of

00:42:15 --> 00:42:22
work and a lot of time to organize do

00:42:19 --> 00:42:24
make something big and to organize an

00:42:21 --> 00:42:26
event and stuff like that and what

00:42:23 --> 00:42:28
drives you in that effort because you

00:42:25 --> 00:42:31
could still I would argue get a best

00:42:27 --> 00:42:33
paper award and nips as you did in 17

00:42:30 --> 00:42:37
without doing this that's right yes

00:42:32 --> 00:42:40
and so so in general I believe it's very

00:42:36 --> 00:42:43
important to do things in in the real

00:42:39 --> 00:42:47
world and at scale and that's really

00:42:42 --> 00:42:48
where the the the pudding if you will

00:42:46 --> 00:42:50
proof is in the pudding that's what

00:42:47 --> 00:42:53
hat's where it is in this particular

00:42:49 --> 00:42:56
case it was kind of a competition

00:42:52 --> 00:42:59
between different groups and for many

00:42:55 --> 00:43:01
ears as to who can be the first one to

00:42:58 --> 00:43:04
beat the top humans that heads up No

00:43:00 --> 00:43:09
Limit Texas Hold'em so it became it

00:43:03 --> 00:43:12
became kind of a like a competition who

00:43:08 --> 00:43:14
can get there yeah so a little friendly

00:43:11 --> 00:43:18
competition could be I can do wonders

00:43:13 --> 00:43:20
for progress yes so the topic of

00:43:17 --> 00:43:22
mechanism design which is really

00:43:19 --> 00:43:24
interesting also kind of new to me

00:43:21 --> 00:43:27
xcept as an observer if I don't know

00:43:23 --> 00:43:30
politics and any I'm an observer of

00:43:26 --> 00:43:33
mechanisms but you write in your paper

00:43:29 --> 00:43:36
an automated mechanism design that I

00:43:32 --> 00:43:39
quickly read so mechanism design is

00:43:35 --> 00:43:41
designing the rules of the game so you

00:43:38 --> 00:43:44
get a certain desirable outcome and you

00:43:40 --> 00:43:46
have this work on doing so in an

00:43:43 --> 00:43:48
automatic fashion as opposed to

00:43:45 --> 00:43:52
fine-tuning it so what have you learned

00:43:47 --> 00:43:55
from those efforts if you look say I

00:43:51 --> 00:43:57
don't know at complex it's like our

00:43:54 --> 00:44:01
political system can we design our

00:43:56 --> 00:44:04
political system to have in an automated

00:44:00 --> 00:44:07
fashion to have outcomes that we want

00:44:03 --> 00:44:10
can we design something like traffic

00:44:06 --> 00:44:13
lights to be smart where it gets

00:44:09 --> 00:44:16
outcomes that we want so what are the

00:44:12 --> 00:44:18
lessons you draw from that work yeah so

00:44:15 --> 00:44:20
I still very much believe in the

00:44:17 --> 00:44:23
automated mechanism design direction yes

00:44:19 --> 00:44:26
but it's not a panacea

00:44:22 --> 00:44:28
there are impossibility results in

00:44:25 --> 00:44:32
mechanism design saying that there is no

00:44:27 --> 00:44:36
mechanism that accomplishes objective X

00:44:31 --> 00:44:39
in Class C so so they it's not gonna

00:44:35 --> 00:44:42
there's no way using any mechanism

00:44:38 --> 00:44:43
design tools manual or automated

00:44:41 --> 00:44:45
to do certain things in mechanism design

00:44:42 --> 00:44:48
he can't describe that again so meaning

00:44:44 --> 00:44:52
there it's impossible to achieve that

00:44:47 --> 00:44:54
yeah yes it was likely impossible so so

00:44:51 --> 00:44:56
these are these are not statements

00:44:53 --> 00:44:58
about human ingenuity who might come up

00:44:55 --> 00:45:01
with something smart these are proofs

00:44:57 --> 00:45:04
that if you wanna accomplish properties

00:45:00 --> 00:45:06
X in Class C that is not to oppose with

00:45:03 --> 00:45:08
any mechanism the good thing about

00:45:05 --> 00:45:11
automated mechanism design is that we're

00:45:07 --> 00:45:14
not really designing for a class we're

00:45:10 --> 00:45:17
designing for specific settings at the

00:45:13 --> 00:45:19
time so even if there's an impossibility

00:45:16 --> 00:45:22
result for the whole class it just

00:45:18 --> 00:45:24
doesn't mean that all of the cases in

00:45:21 --> 00:45:26
the class are impossible it just means

00:45:23 --> 00:45:28
that some of the cases are impossible so

00:45:25 --> 00:45:30
we can actually carve these islands of

00:45:27 --> 00:45:32
possibility within these known

00:45:29 --> 00:45:34
impossible classes and we've actually

00:45:31 --> 00:45:36
done that so what one of the famous

00:45:33 --> 00:45:38
results in mechanism design is a Meyer

00:45:35 --> 00:45:41
sham set its weight theorem for pi Roger

00:45:37 --> 00:45:43
Myerson and Mark Satterthwaite from 1983

00:45:40 --> 00:45:46
so it's an impossibility of efficient

00:45:42 --> 00:45:49
rade under imperfect information we

00:45:45 --> 00:45:51
show that you can in many settings avoid

00:45:48 --> 00:45:54
that and get the efficient trade anyway

00:45:50 --> 00:45:56
depending on how they design the game

00:45:53 --> 00:45:58
okay so depending how you design the

00:45:55 --> 00:46:01
game and of course it's not it doesn't

00:45:57 --> 00:46:03
in any way any way contradict to

00:46:00 --> 00:46:06
impossibility result or impossibility

00:46:02 --> 00:46:10
results is still there but it just finds

00:46:05 --> 00:46:12
pots within this impossible class where

00:46:09 --> 00:46:14
in those spots you don't have time

00:46:11 --> 00:46:17
possibility sorry if I'm going a bit

00:46:13 --> 00:46:19
philosophical but what lessons you draw

00:46:16 --> 00:46:22
towards like I mentioned politics or

00:46:18 --> 00:46:26
human interaction and designing

00:46:21 --> 00:46:32
mechanisms for outside of just these

00:46:25 --> 00:46:34
kinds of trading or auctioning or purely

00:46:31 --> 00:46:37
formal games our human interaction like

00:46:33 --> 00:46:42
a political system what how do you think

00:46:36 --> 00:46:46
it's applicable to yeah politics or to

00:46:41 --> 00:46:47
business to negotiations these kinds of

00:46:45 --> 00:46:49
things

00:46:46 --> 00:46:52
designing rules that have certain

00:46:48 --> 00:46:55
outcomes yeah yeah I do think so have

00:46:51 --> 00:46:57
you seen success that successfully done

00:46:54 --> 00:46:58
yes and really oh you mean mechanism

00:46:56 --> 00:47:00
design or automated make automated

00:46:57 --> 00:47:05
mechanism design but so so mechanism

00:46:59 --> 00:47:08
design itself has had fairly limited

00:47:04 --> 00:47:10
success so far there are certain cases

00:47:07 --> 00:47:14
but most of the real-world situations

00:47:09 --> 00:47:16
are actually not sound from a mechanism

00:47:13 --> 00:47:18
design perspective even in those cases

00:47:15 --> 00:47:20
where they've been designed by very

00:47:17 --> 00:47:22
knowledgeable mechanism design people

00:47:19 --> 00:47:24
the people are typically just taking

00:47:21 --> 00:47:26
some insights from the theory and

00:47:23 --> 00:47:28
applying those insights into the real

00:47:25 --> 00:47:30
world rather than applying the

00:47:27 --> 00:47:33
mechanisms directly so one famous

00:47:29 --> 00:47:37
example of is the FCC spectrum auctions

00:47:32 --> 00:47:41
o I've also had a small role in that

00:47:36 --> 00:47:43
and very good economists have been where

00:47:40 --> 00:47:45
xcellent economists have been working

00:47:42 --> 00:47:47
on that with no game theory yet the

00:47:44 --> 00:47:50
rules that are designed in practice

00:47:46 --> 00:47:51
they're they're such that bidding

00:47:49 --> 00:47:55
truthfully is not the best strategy

00:47:50 --> 00:47:57
usually mechanism design we try to make

00:47:54 --> 00:47:58
things easy for the participants so

00:47:56 --> 00:48:01
telling the truth is the best strategy

00:47:57 --> 00:48:03
but but even in those very high stakes

00:48:00 --> 00:48:05
auctions where you have tens of billions

00:48:02 --> 00:48:08
of dollars worth of expect from being

00:48:04 --> 00:48:11
auctioned truth-telling is not the best

00:48:07 --> 00:48:13
rategy and by the way nobody knows

00:48:10 --> 00:48:15
even a single optimal bidding strategy

00:48:12 --> 00:48:17
for those auctions what's the challenge

00:48:14 --> 00:48:19
of coming up with an optimum because

00:48:16 --> 00:48:22
there's a lot of players and there's a

00:48:18 --> 00:48:25
lot of players but many items for sale

00:48:21 --> 00:48:27
and the these mechanisms are such that

00:48:24 --> 00:48:30
even with just two items or one item

00:48:26 --> 00:48:34
bidding truthfully wouldn't be the best

00:48:29 --> 00:48:37
rategy if you look at the history of

00:48:33 --> 00:48:40
AI it's marked by seminal events and

00:48:36 --> 00:48:42
alphago being a world champion human go

00:48:39 --> 00:48:44
player I would put librettist winning

00:48:41 --> 00:48:48
the heads of no-limit hold'em as one of

00:48:43 --> 00:48:50
such event thank you and what do you

00:48:47 --> 00:48:54
think

00:48:49 --> 00:48:57
is the next such event whether it's in

00:48:53 --> 00:49:00
your life or in the broadly AI community

00:48:56 --> 00:49:03
that you think might be out there that

00:48:59 --> 00:49:04
would surprise the world so that's a

00:49:02 --> 00:49:08
great question and I don't really know

00:49:03 --> 00:49:11
the answer in terms of game solving hits

00:49:07 --> 00:49:13
up No Limit Texas Hold'em really was the

00:49:10 --> 00:49:16
one remaining widely agreed-upon

00:49:12 --> 00:49:19
benchmark so that was the big milestone

00:49:15 --> 00:49:21
now are there other things yes certainly

00:49:18 --> 00:49:23
there are but there there is not one

00:49:20 --> 00:49:26
that the community has kind of focused

00:49:22 --> 00:49:28
on so what could be other things there

00:49:25 --> 00:49:31
are groups working on StarCraft there

00:49:27 --> 00:49:34
are groups working on dota2 these are

00:49:30 --> 00:49:37
video games yes or you could have like

00:49:33 --> 00:49:39
diplomacy or Hanavi you know things like

00:49:36 --> 00:49:42
that these are like recreational games

00:49:38 --> 00:49:45
but none of them are really acknowledged

00:49:41 --> 00:49:49
that's kind of the main next challenge

00:49:44 --> 00:49:51
problem like chess or go or heads-up No

00:49:48 --> 00:49:53
Limit Texas Hold'em was so I don't

00:49:50 --> 00:49:55
really know in the game solving space

00:49:52 --> 00:49:56
what is or what will will be the next

00:49:54 --> 00:49:57
benchmark

00:49:55 --> 00:49:59
I hope kind of hope that there will be a

00:49:56 --> 00:50:01
next benchmark because really the

00:49:58 --> 00:50:04
different groups working on the same

00:50:00 --> 00:50:06
problem really drove these application

00:50:03 --> 00:50:08
independent techniques for put very

00:50:05 --> 00:50:10
quickly over ten years do you think

00:50:07 --> 00:50:12
there's an open problem that excites you

00:50:09 --> 00:50:16
that you start moving away from games

00:50:11 --> 00:50:19
into real world games like say the stock

00:50:15 --> 00:50:22
market trading yeah that's that's kind

00:50:18 --> 00:50:27
of how I am so I am probably not going

00:50:21 --> 00:50:30
to work as hard on these recreational

00:50:26 --> 00:50:32
benchmarks I'm doing to startups on game

00:50:29 --> 00:50:34
solving technology strategic machine and

00:50:31 --> 00:50:36
strategy robot and we're really

00:50:33 --> 00:50:39
interested in pushing this stuff into

00:50:35 --> 00:50:45
practice what do you think would be

00:50:38 --> 00:50:50
really you know a powerful result that

00:50:44 --> 00:50:53
would be surprising that would be if you

00:50:49 --> 00:50:56
can say I mean you know five years ten

00:50:52 --> 00:50:58
years from now something that

00:50:55 --> 00:51:01
statistically you would say is not very

00:50:57 --> 00:51:03
likely but if there's a breakthrough

00:51:00 --> 00:51:06
what achieve yeah so I think that

00:51:02 --> 00:51:10
overall we're in a very different

00:51:05 --> 00:51:12
situation in game theory than we are in

00:51:09 --> 00:51:14
let's say machine learning yes

00:51:11 --> 00:51:16
o in machine learning it's a fairly

00:51:13 --> 00:51:19
mature technology and it's very broadly

00:51:15 --> 00:51:21
applied and proven success in the real

00:51:18 --> 00:51:24
world in game solving there are almost

00:51:20 --> 00:51:27
no applications yet

00:51:23 --> 00:51:28
we have just become superhuman which

00:51:26 --> 00:51:32
machine learning you could argue

00:51:27 --> 00:51:34
happened in the 90s if not earlier and

00:51:31 --> 00:51:35
at least some supervised learning at

00:51:33 --> 00:51:38
certain complex supervised learning

00:51:34 --> 00:51:40
applications

00:51:37 --> 00:51:42
now I think a next challenge problem I

00:51:39 --> 00:51:43
know you're not asking about this way

00:51:41 --> 00:51:44
ou're you're asking about the

00:51:42 --> 00:51:46
technology breakthrough but I think the

00:51:43 --> 00:51:49
big big breakthrough is to be able to

00:51:45 --> 00:51:51
show it hey maybe most of let's say

00:51:48 --> 00:51:52
military planning or most of business

00:51:50 --> 00:51:55
trategy will actually be done

00:51:51 --> 00:51:56
strategically using computational game

00:51:54 --> 00:51:58
theory that that's what I would like to

00:51:55 --> 00:52:00
see as a next five or ten year goal

00:51:57 --> 00:52:02
maybe you can explain to me again

00:51:59 --> 00:52:04
forgive me if this is an obvious

00:52:01 --> 00:52:07
question but you know machine learning

00:52:03 --> 00:52:09
methods neural networks are suffer from

00:52:06 --> 00:52:12
not being transparent not being

00:52:08 --> 00:52:14
explainable a game theoretic methods you

00:52:11 --> 00:52:16
know Nash equilibria do they generally

00:52:13 --> 00:52:19
when you see the different solutions are

00:52:15 --> 00:52:22
they when you talk about military

00:52:18 --> 00:52:24
operations are they once you see the

00:52:21 --> 00:52:26
strategies do they make sense that they

00:52:23 --> 00:52:28
explainable or do they suffer from the

00:52:25 --> 00:52:30
same problems as neural networks do so

00:52:27 --> 00:52:33
that's that's a good question I would

00:52:29 --> 00:52:36
say a little bit yes and no and what I

00:52:32 --> 00:52:38
mean by that is that these games are

00:52:35 --> 00:52:41
thic strategies let's say Nash

00:52:37 --> 00:52:43
equilibrium it has provable properties

00:52:40 --> 00:52:45
o it's unlike let's say deep learning

00:52:42 --> 00:52:47
where you kind of cross your fingers

00:52:44 --> 00:52:49
hopefully it'll work and then after the

00:52:46 --> 00:52:50
fact when you have the weights you're

00:52:48 --> 00:52:55
still crossing your fingers and I hope

00:52:49 --> 00:52:57
it will work here you know that the

00:52:54 --> 00:52:59
solution quality is there this provable

00:52:56 --> 00:53:02
or Souls from quality guarantees now

00:52:58 --> 00:53:04
that doesn't necessarily mean that the

00:53:01 --> 00:53:06
strategies are human understandable

00:53:03 --> 00:53:07
that's a whole other problem so that's

00:53:05 --> 00:53:10
also I think it deep learning and

00:53:07 --> 00:53:12
computational game theory are in the

00:53:09 --> 00:53:15
same boat in that sense that both are

00:53:11 --> 00:53:18
difficult to understand but at least the

00:53:14 --> 00:53:21
game theoretic techniques they have this

00:53:17 --> 00:53:22
guarantees of guarantee quality so did

00:53:20 --> 00:53:24
you see business operations to achieve

00:53:21 --> 00:53:28
your corporations or even military in

00:53:23 --> 00:53:32
the future being at least the strong

00:53:27 --> 00:53:35
candidates being proposed by automated

00:53:31 --> 00:53:37
systems do you see that yeah I do I do

00:53:34 --> 00:53:41
but that's more of a really belief than

00:53:36 --> 00:53:42
a substantiated fact depending on where

00:53:40 --> 00:53:45
you land and optimism or pessimism

00:53:41 --> 00:53:49
that's a relief to me that's an exciting

00:53:44 --> 00:53:50
future especially if they're provable

00:53:48 --> 00:53:53
things

00:53:49 --> 00:53:57
in terms of optimality so looking into

00:53:52 --> 00:54:01
the future there's a a few folks worried

00:53:56 --> 00:54:03
about the especially you look at the

00:54:00 --> 00:54:05
game of poker which is probably one of

00:54:02 --> 00:54:08
the last benchmarks in terms of games

00:54:04 --> 00:54:10
being solved they they worry about the

00:54:07 --> 00:54:12
future and the existential threats of

00:54:09 --> 00:54:14
artificial intelligence so the negative

00:54:11 --> 00:54:18
impact in whatever form on society is

00:54:13 --> 00:54:20
that something that concerns you as much

00:54:17 --> 00:54:23
are you more optimistic about the

00:54:19 --> 00:54:25
positive impacts of AI oh I am much more

00:54:22 --> 00:54:27
optimistic about the positive impacts so

00:54:24 --> 00:54:29
just in my own work what we've done so

00:54:26 --> 00:54:32
far we run the nationwide kidney

00:54:28 --> 00:54:34
exchange hundreds of people are walking

00:54:31 --> 00:54:37
around alive today who would it be and

00:54:33 --> 00:54:40
it's increased employment you had you

00:54:36 --> 00:54:42
have a lot of people now running kidney

00:54:39 --> 00:54:46
changes and at the transplant centers

00:54:41 --> 00:54:48
interacting with the kidney exchange you

00:54:45 --> 00:54:51
have extra surgeons nurses

00:54:47 --> 00:54:54
anesthesiologists hospitals all of that

00:54:50 --> 00:54:55
as so so employment is increasing from

00:54:53 --> 00:54:56
that and the world is becoming a better

00:54:54 --> 00:54:58
place

00:54:55 --> 00:55:03
another example is combinatorial

00:54:57 --> 00:55:05
sourcing auctions we did 800 large-scale

00:55:02 --> 00:55:08
combinatorial sourcing auctions from

00:55:04 --> 00:55:12
2001 to 2010 in a previous startup of

00:55:07 --> 00:55:14
mine called combine it and we increased

00:55:11 --> 00:55:16
the supply chain efficiency on that

00:55:13 --> 00:55:20
sixty billion dollars of spend by twelve

00:55:15 --> 00:55:21
point six percent so that's over six

00:55:19 --> 00:55:23
billion dollars of efficiency

00:55:20 --> 00:55:25
improvement in the world and this is

00:55:22 --> 00:55:27
also like shifting value from somebody

00:55:24 --> 00:55:29
to somebody else just efficiency

00:55:26 --> 00:55:32
improvement like in trucking less empty

00:55:28 --> 00:55:35
driving so there's less waste less

00:55:31 --> 00:55:38
carbon footprint and so on it's a huge

00:55:34 --> 00:55:41
positive impact in the near term but

00:55:37 --> 00:55:43
sort of to stay in it for a little

00:55:40 --> 00:55:44
longer because I think game theory is a

00:55:42 --> 00:55:46
role to play here well let me actually

00:55:43 --> 00:55:48
come back and tell you this is one thing

00:55:45 --> 00:55:52
I think Asia is also going to make the

00:55:47 --> 00:55:55
world much safer so so so that's another

00:55:51 --> 00:55:56
aspect that often gets overlooked well

00:55:54 --> 00:55:58
et me ask this question maybe you can

00:55:55 --> 00:56:01
speak to the the safer so I talked to

00:55:57 --> 00:56:02
max tegmark is do a Russell who are very

00:56:00 --> 00:56:04
concerned about

00:56:01 --> 00:56:09
he resume yeah and often the concern is

00:56:03 --> 00:56:13
about value misalignment so AI systems

00:56:08 --> 00:56:16
basically working operating towards

00:56:12 --> 00:56:19
goals that are not the same as human

00:56:15 --> 00:56:21
civilization human beings so it seems

00:56:18 --> 00:56:26
like game theory has a role to play

00:56:20 --> 00:56:29
there to to make sure the values are

00:56:25 --> 00:56:31
aligned with human beings I don't know

00:56:28 --> 00:56:35
if that's how you think about it if not

00:56:30 --> 00:56:38
how do you think AI might help with this

00:56:34 --> 00:56:42
problem how do you think a i'ma make the

00:56:37 --> 00:56:45
world safer yeah I think this value

00:56:41 --> 00:56:51
misalignment is a fairly theoretical

00:56:44 --> 00:56:52
worry and I haven't really seen it in it

00:56:50 --> 00:56:54
because I do a lot of real applications

00:56:51 --> 00:56:56
I don't see it anywhere

00:56:53 --> 00:56:58
the closest I've seen it was the

00:56:55 --> 00:57:01
following type of mental exercise really

00:56:57 --> 00:57:02
where I had this argument in the late

00:57:00 --> 00:57:04
80s when we were building these

00:57:01 --> 00:57:06
transportation optimization systems and

00:57:03 --> 00:57:09
somebody had heard that it's a good idea

00:57:05 --> 00:57:10
to have high utilization of assets so

00:57:08 --> 00:57:13
they told me that hey why don't you put

00:57:09 --> 00:57:16
hat as objective and we didn't even

00:57:12 --> 00:57:18
pull it as an objective because I just

00:57:15 --> 00:57:20
showed him it you know if you had that

00:57:17 --> 00:57:22
as your objective the solution would be

00:57:19 --> 00:57:24
to load your trucks full and driving

00:57:21 --> 00:57:25
circles nothing would ever get delivered

00:57:23 --> 00:57:28
you'd have a hundred percent utilization

00:57:24 --> 00:57:31
so yeah I know this phenomenon I've

00:57:27 --> 00:57:32
known this for over 30 years in but I've

00:57:30 --> 00:57:35
never seen it actually be a problem

00:57:31 --> 00:57:37
reality in reality and yes if you have

00:57:34 --> 00:57:40
the wrong objective the AI will optimize

00:57:36 --> 00:57:42
that to the hilt and it's gonna fit more

00:57:39 --> 00:57:45
than some human who's kind of trying to

00:57:41 --> 00:57:48
so within a half-baked way with some

00:57:44 --> 00:57:50
human insight to but I just haven't seen

00:57:47 --> 00:57:52
that materialize in practice there's

00:57:49 --> 00:57:56
this gap that you actually put your

00:57:51 --> 00:57:58
finger on very clearly just now between

00:57:55 --> 00:58:01
theory and reality that's very difficult

00:57:57 --> 00:58:04
o put into words I think it's what you

00:58:00 --> 00:58:07
can theoretically imagine the worst

00:58:03 --> 00:58:10
possible case or even yeah I mean bad

00:58:06 --> 00:58:13
cases and what usually happens in

00:58:09 --> 00:58:16
reality so for example to me maybe it's

00:58:12 --> 00:58:17
omething you can comment on

00:58:15 --> 00:58:20
having grown up and I had grew up in the

00:58:16 --> 00:58:22
Soviet Union you know there's currently

00:58:19 --> 00:58:27
10,000 nuclear weapons in the world and

00:58:21 --> 00:58:30
for many decades it's theoretically

00:58:26 --> 00:58:34
surprising to me that the nuclear war is

00:58:29 --> 00:58:35
not broken out do you think about this

00:58:33 --> 00:58:40
aspect from a game theoretic perspective

00:58:34 --> 00:58:42
in general why is that true why in

00:58:39 --> 00:58:44
theory you could see how things would go

00:58:41 --> 00:58:47
terribly wrong and somehow yet they have

00:58:43 --> 00:58:48
not yeah how do you think so so I do

00:58:46 --> 00:58:50
think that about that a lot I think the

00:58:47 --> 00:58:53
biggest two threats that we're facing as

00:58:49 --> 00:58:55
mankind one is climate change and the

00:58:52 --> 00:58:57
other is nuclear war so I saw so those

00:58:54 --> 00:58:59
are my main two worries that they're

00:58:56 --> 00:59:01
worried about and I've tried to do

00:58:58 --> 00:59:02
something about climate I thought about

00:59:00 --> 00:59:05
rying to do something for climate

00:59:01 --> 00:59:07
change twice actually before two of my

00:59:04 --> 00:59:10
startups had actually commissioned

00:59:06 --> 00:59:11
studies of what we could do on those

00:59:09 --> 00:59:13
things and we didn't really find a sweet

00:59:10 --> 00:59:15
spot but I'm still keeping an eye out on

00:59:12 --> 00:59:17
that if there's something where we could

00:59:14 --> 00:59:19
actually provide a market solution or

00:59:16 --> 00:59:22
optimization solution or some other

00:59:18 --> 00:59:23
technology solution to problems right

00:59:21 --> 00:59:25
now

00:59:22 --> 00:59:27
like for example pollution critic

00:59:24 --> 00:59:29
markets was what we were looking at then

00:59:26 --> 00:59:32
and it was much more the lack of

00:59:28 --> 00:59:35
political will by those markets were not

00:59:31 --> 00:59:36
so successful rather than bad market

00:59:34 --> 00:59:38
design so I could go in and make a

00:59:35 --> 00:59:40
better market design but that wouldn't

00:59:37 --> 00:59:42
really move the needle on the world very

00:59:39 --> 00:59:45
much if there's no political will and in

00:59:41 --> 00:59:47
the u.s. you know the market at least

00:59:44 --> 00:59:49
he Chicago market was just shut down

00:59:46 --> 00:59:51
and and so on so it and then it doesn't

00:59:48 --> 00:59:54
really help create your market design

00:59:50 --> 00:59:59
was there any nuclear side it's more so

00:59:53 --> 00:59:59
global warming is more encroaching

00:59:59 --> 01:00:05
problem you know nuclear weapons have

01:00:02 --> 01:00:07
been here it's an obvious problem has

01:00:04 --> 01:00:09
just been sitting there so how do you

01:00:06 --> 01:00:12
think about what is the mechanism design

01:00:08 --> 01:00:15
there that just made everything seem

01:00:11 --> 01:00:17
stable and are you still extremely

01:00:14 --> 01:00:20
worried I am still extremely worried so

01:00:16 --> 01:00:23
you probably know the simple game theory

01:00:19 --> 01:00:25
of mad so solar so this was a mutually

01:00:22 --> 01:00:27
assured destruction and it's like it

01:00:24 --> 01:00:29
doesn't require any computation with

01:00:26 --> 01:00:30
small matrices you can actually convince

01:00:28 --> 01:00:33
yourself that the game is such that

01:00:29 --> 01:00:36
nobody wants to initiate yeah that's a

01:00:32 --> 01:00:38
very coarse-grained analysis and it

01:00:35 --> 01:00:40
really works in a situation where you

01:00:37 --> 01:00:42
have two superpowers or small number of

01:00:39 --> 01:00:44
superpowers now things are very

01:00:41 --> 01:00:48
different you have a smaller nuke so the

01:00:43 --> 01:00:51
threshold of initiating is smaller and

01:00:47 --> 01:00:54
you have smaller countries and non non

01:00:50 --> 01:00:56
ation actors who make it Nokes and so

01:00:53 --> 01:01:02
n so it's I think it's riskier now than

01:00:55 --> 01:01:05
it was maybe ever before and what idea

01:01:01 --> 01:01:07
pplication by I you've talked about a

01:01:04 --> 01:01:08
little bit but what is the most exciting

01:01:06 --> 01:01:11
to you right now

01:01:07 --> 01:01:15
I mean you you're here at nips europe's

01:01:10 --> 01:01:17
now you have a few excellent pieces of

01:01:14 --> 01:01:18
work but what are you thinking into the

01:01:16 --> 01:01:20
future with several companies you're

01:01:17 --> 01:01:22
doing what's the most exciting thing or

01:01:19 --> 01:01:25
one of the exciting things the number

01:01:21 --> 01:01:27
one thing but for me right now is coming

01:01:24 --> 01:01:30
up with these scalable techniques for

01:01:26 --> 01:01:33
game solving and applying them into the

01:01:29 --> 01:01:34
real world they're still very interested

01:01:32 --> 01:01:36
in market design as well and we're doing

01:01:33 --> 01:01:38
that in the optimized markets but I'm

01:01:35 --> 01:01:41
ost interested if number one right now

01:01:37 --> 01:01:42
is strategic machine strategy robots

01:01:40 --> 01:01:45
getting that technology out there and

01:01:41 --> 01:01:47
seeing as you were in the trenches doing

01:01:44 --> 01:01:49
applications what needs to be actually

01:01:46 --> 01:01:52
filled what technology gap still need to

01:01:48 --> 01:01:53
be filled so it's so hard to just put

01:01:51 --> 01:01:55
your feet on the table and imagine what

01:01:52 --> 01:01:57
needs to be done but when you're

01:01:54 --> 01:01:59
actually doing real applications the

01:01:56 --> 01:02:01
applications tell you what needs to be

01:01:58 --> 01:02:05
done and I really enjoy that interaction

01:02:00 --> 01:02:07
is it a challenging process to apply

01:02:04 --> 01:02:10
some of the stay the are techniques

01:02:06 --> 01:02:15
you're working on and and having the

01:02:09 --> 01:02:17
various players in industry or the

01:02:14 --> 01:02:20
military or people who could really

01:02:16 --> 01:02:22
benefit from it actually use it what's

01:02:19 --> 01:02:23
that process like of you know in

01:02:21 --> 01:02:27
autonomous vehicles will work with

01:02:22 --> 01:02:28
automotive companies and they're in in

01:02:26 --> 01:02:30
many ways they're a little bit

01:02:27 --> 01:02:33
old-fashioned it's difficult they really

01:02:29 --> 01:02:35
want to use this technology there's

01:02:32 --> 01:02:38
clearly will have a significant benefit

01:02:34 --> 01:02:41
but the systems aren't quite in place to

01:02:37 --> 01:02:43
easily have them integrated in terms of

01:02:40 --> 01:02:46
data in terms of compute in terms of all

01:02:43 --> 01:02:48
these kinds of things so deuce is that

01:02:45 --> 01:02:50
one of the bigger challenges that you're

01:02:47 --> 01:02:52
facing and how do you tackle that

01:02:49 --> 01:02:54
challenge yeah I think that's always a

01:02:51 --> 01:02:57
challenge that that's gonna slowness and

01:02:53 --> 01:02:59
inertia really of let's do things the

01:02:56 --> 01:03:01
way we've always done it you just have

01:02:58 --> 01:03:03
to find the internal champions that the

01:03:00 --> 01:03:05
customer who understand that hey things

01:03:02 --> 01:03:07
can't be the same way in the future

01:03:04 --> 01:03:09
otherwise bad things are going to happen

01:03:06 --> 01:03:11
and it's in order most vehicles it's

01:03:08 --> 01:03:12
actually very interesting that the car

01:03:10 --> 01:03:14
makers are doing that then they're very

01:03:11 --> 01:03:15
traditional but at the same time you

01:03:13 --> 01:03:18
have tech companies who have nothing to

01:03:14 --> 01:03:21
do with cars or transportation like

01:03:17 --> 01:03:23
Google and Baidu really pushing on

01:03:20 --> 01:03:26
autonomous cars I find it fascinating

01:03:22 --> 01:03:29
clearly you're super excited about

01:03:25 --> 01:03:31
actually these ideas having an impact in

01:03:28 --> 01:03:33
the world in terms of the technology in

01:03:30 --> 01:03:36
terms of ideas and research their

01:03:32 --> 01:03:40
directions that you're also excited

01:03:35 --> 01:03:42
about whether that's on the some of the

01:03:39 --> 01:03:44
approaches you talked about for the

01:03:41 --> 01:03:45
imperfect information games whether it's

01:03:43 --> 01:03:46
applying deep learning just some of

01:03:44 --> 01:03:49
these problems is there something that

01:03:45 --> 01:03:51
you're excited in in the research side

01:03:48 --> 01:03:54
of things yeah yeah lots of different

01:03:50 --> 01:03:58
hings in the game solving so solving

01:03:53 --> 01:04:01
even bigger games games will you have

01:03:57 --> 01:04:03
more hidden action of the play your

01:04:00 --> 01:04:07
actions as well poker is a game where

01:04:02 --> 01:04:08
ally the chance actions are hidden or

01:04:06 --> 01:04:11
some of them are hidden but the player

01:04:07 --> 01:04:11
actions are public

01:04:10 --> 01:04:19
the multiplayer games of various sorts

01:04:13 --> 01:04:22
collusion opponent exploitation all and

01:04:18 --> 01:04:24
even longer games some games that

01:04:21 --> 01:04:27
basically go forever but they're not

01:04:23 --> 01:04:29
repeated so seek extensive phone games

01:04:26 --> 01:04:31
that go forever whoa what what would

01:04:29 --> 01:04:33
that even look like how do you represent

01:04:30 --> 01:04:35
hat how do you solve that what's an

01:04:32 --> 01:04:36
example of a game like that or is this

01:04:34 --> 01:04:39
ome of the stochastic games the imagine

01:04:35 --> 01:04:40
let's say business strategy so it's and

01:04:38 --> 01:04:43
not just modeling like a particular

01:04:39 --> 01:04:44
interaction but thinking about the

01:04:42 --> 01:04:49
business from here to eternity

01:04:43 --> 01:04:51
or I think or let's let's say military

01:04:48 --> 01:04:54
strategy so it's not like war is going

01:04:50 --> 01:04:55
to go away how do you think about

01:04:53 --> 01:04:59
military strategy that's going to go

01:04:54 --> 01:05:02
forever how do you even model that how

01:04:58 --> 01:05:06
do you know whether a move was good that

01:05:01 --> 01:05:08
you somebody made and and and so on so

01:05:05 --> 01:05:11
that that's kind of one direction I'm

01:05:07 --> 01:05:13
also very interested in learning much

01:05:10 --> 01:05:16
more scalable techniques for integer

01:05:12 --> 01:05:18
programming so we had a nice email paper

01:05:15 --> 01:05:20
this summer on that for the first

01:05:17 --> 01:05:23
automated algorithm configuration paper

01:05:19 --> 01:05:25
that has theoretical generalization

01:05:22 --> 01:05:27
guarantees so if I see these many

01:05:24 --> 01:05:30
training examples and I told my

01:05:26 --> 01:05:32
algorithm in this way it's going to have

01:05:29 --> 01:05:34
good performance on the real

01:05:31 --> 01:05:36
distribution which have not seen so

01:05:33 --> 01:05:37
which is kind of interesting that you

01:05:35 --> 01:05:40
know algorithm configuration has been

01:05:36 --> 01:05:44
going on now for at least 17 years

01:05:39 --> 01:05:47
eriously and there has not been any

01:05:43 --> 01:05:49
generalization theory before well this

01:05:46 --> 01:05:51
really exciting and it's been it's a

01:05:48 --> 01:05:52
huge honor to talk to you thank you so

01:05:50 --> 01:05:54
much to us thank you for bringing

01:05:51 --> 01:05:55
livadas to the world and all the great

01:05:53 --> 01:05:59
work you're done well thank you very

01:05:54 --> 01:05:59
much it's been fun good questions

01:06:04 --> 01:06:07
you

<!-- YOUTUBE_TRANSCRIPT_END -->
