---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "KsZI5oXBC0k"
title: "Stuart Russell: Long-Term Future of Artificial Intelligence | Lex Fridman Podcast #9"
video_url: "https://www.youtube.com/watch?v=KsZI5oXBC0k"
thumbnail_url: "https://i.ytimg.com/vi/KsZI5oXBC0k/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=KsZI5oXBC0k"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-12-09T16:47:24.000Z"
upload_date: "2018-12-09"
duration_seconds: 5181
duration_human: "1:26:21"
view_count: 205903
like_count: 3752
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:15:59.023Z"
---

# Stuart Russell: Long-Term Future of Artificial Intelligence | Lex Fridman Podcast #9

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=KsZI5oXBC0k
- video_id: KsZI5oXBC0k
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-12-09T16:47:24.000Z
- upload_date: 2018-12-09
- duration: 1:26:21
- view_count: 205903
- like_count: 3752
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
the following is a conversation with

00:00:01 --> 00:00:07
Stuart Russell he's a professor of

00:00:03 --> 00:00:09
computer science at UC Berkeley and a

00:00:06 --> 00:00:11
co-author of a book that introduced me

00:00:08 --> 00:00:14
and millions of other people to the

00:00:10 --> 00:00:17
amazing world of AI called artificial

00:00:13 --> 00:00:19
intelligence a modern approach so it was

00:00:16 --> 00:00:22
an honor for me to have this

00:00:18 --> 00:00:24
conversation as part of MIT course and

00:00:21 --> 00:00:27
artificial general intelligence and the

00:00:23 --> 00:00:29
artificial intelligence podcast if you

00:00:26 --> 00:00:31
enjoy it please subscribe on youtube

00:00:28 --> 00:00:33
itunes or your podcast provider of

00:00:30 --> 00:00:36
choice or simply connect with me on

00:00:32 --> 00:00:39
twitter at Lex Friedman spelled Fri D

00:00:35 --> 00:00:44
and now here's my conversation with

00:00:38 --> 00:00:47
Stuart Russell so you've mentioned in

00:00:43 --> 00:00:50
1975 in high school you've created one

00:00:46 --> 00:00:54
year first AI programs that play chess

00:00:49 --> 00:00:58
were you ever able to build a program

00:00:53 --> 00:01:02
that beat you a chess or another board

00:00:57 --> 00:01:06
game so my program never beat me at

00:01:01 --> 00:01:08
chess I actually wrote the program at

00:01:05 --> 00:01:12
Imperial College so I used to take the

00:01:07 --> 00:01:15
bus every Wednesday with a box of cards

00:01:11 --> 00:01:17
this big and shove them into the card

00:01:14 --> 00:01:19
reader and they gave us eight seconds of

00:01:16 --> 00:01:22
CPU time

00:01:18 --> 00:01:24
it took about five seconds to read the

00:01:21 --> 00:01:27
cards in and compile the code so we had

00:01:23 --> 00:01:29
three seconds of CPU time which was

00:01:26 --> 00:01:32
enough to make one move you know with a

00:01:28 --> 00:01:33
not very deep search and then we would

00:01:31 --> 00:01:35
print that move out and then we'd have

00:01:32 --> 00:01:37
to go to the back of the queue and wait

00:01:34 --> 00:01:41
o feed the cards in again how do you

00:01:36 --> 00:01:44
post a search well I would talk to no I

00:01:40 --> 00:01:47
think we got we got an eight move eight

00:01:43 --> 00:01:50
you know depth eight with alpha beta and

00:01:46 --> 00:01:53
we had some tricks of our own about move

00:01:49 --> 00:01:55
ordering and some pruning of the tree

00:01:52 --> 00:01:58
and we were still able to beat that

00:01:54 --> 00:02:01
program yeah yeah I I was a reasonable

00:01:57 --> 00:02:03
chess player in my youth I did Anna

00:02:00 --> 00:02:05
fellow program and a backgammon program

00:02:02 --> 00:02:10
so when I go to Berkley I worked a lot

00:02:04 --> 00:02:12
on what we call meta reasoning which

00:02:09 --> 00:02:14
really means reasoning about reasoning

00:02:11 --> 00:02:17
and in the case of a game playing

00:02:13 --> 00:02:19
program you need to reason about what

00:02:16 --> 00:02:21
parts of the search tree you're actually

00:02:18 --> 00:02:24
going to explore because the search tree

00:02:20 --> 00:02:28
is enormous or you know bigger than the

00:02:23 --> 00:02:30
number of atoms in the universe and the

00:02:27 --> 00:02:32
way programs succeed and the way humans

00:02:29 --> 00:02:35
ucceed is by only looking at a small

00:02:31 --> 00:02:37
fraction of the search tree and if you

00:02:34 --> 00:02:38
look at the right fraction you play

00:02:36 --> 00:02:41
really well if you look at the wrong

00:02:37 --> 00:02:43
fraction if you waste your time thinking

00:02:40 --> 00:02:44
about things that are never gonna happen

00:02:42 --> 00:02:47
the moves that no one's ever gonna make

00:02:43 --> 00:02:49
then you're gonna lose because you you

00:02:46 --> 00:02:51
won't be able to figure out the right

00:02:48 --> 00:02:54
decision

00:02:50 --> 00:02:56
so that question of how machines can

00:02:53 --> 00:02:59
manage their own computation either how

00:02:55 --> 00:03:01
they decide what to think about

00:02:58 --> 00:03:03
is the meta-reasoning question we

00:03:00 --> 00:03:06
developed some methods for doing that

00:03:02 --> 00:03:09
and very simply a machine should think

00:03:05 --> 00:03:12
about whatever thoughts are going to

00:03:08 --> 00:03:14
improve its decision quality we were

00:03:11 --> 00:03:18
able to show that both for a fellow

00:03:13 --> 00:03:20
hich is a standard to play game and for

00:03:17 --> 00:03:22
backgammon which includes dice for also

00:03:19 --> 00:03:25
it's a two-player game with uncertainty

00:03:21 --> 00:03:27
for both of those cases we could come up

00:03:24 --> 00:03:30
with algorithms that were actually much

00:03:26 --> 00:03:33
more efficient than the standard alpha

00:03:29 --> 00:03:36
beta search which chess programs at the

00:03:32 --> 00:03:42
time we're using and that those programs

00:03:35 --> 00:03:44
could beat me and I think you can see

00:03:41 --> 00:03:48
same basic ideas in alphago and alpha

00:03:43 --> 00:03:52
zero today the way they explored the

00:03:47 --> 00:03:55
tree is using a former meta reasoning to

00:03:51 --> 00:03:58
select what to think about based on how

00:03:54 --> 00:04:00
useful it is to think about it is there

00:03:57 --> 00:04:04
any insights you can describe without

00:03:59 --> 00:04:07
Greek symbols of how do we select which

00:04:03 --> 00:04:09
paths to go down there's really two

00:04:06 --> 00:04:12
kinds of learning going on so as you say

00:04:08 --> 00:04:14
alphago learns to evaluate board

00:04:11 --> 00:04:18
position so it can it can look at a go

00:04:13 --> 00:04:22
board and it actually has probably a

00:04:17 --> 00:04:25
superhuman ability to instantly tell how

00:04:21 --> 00:04:29
promising that situation is to me the

00:04:24 --> 00:04:31
amazing thing about alphago is not that

00:04:28 --> 00:04:35
it can be the world champion with its

00:04:30 --> 00:04:39
hands tied behind his back but the fact

00:04:34 --> 00:04:41
hat if you stop it from searching

00:04:38 --> 00:04:43
altogether so you say okay you're not

00:04:40 --> 00:04:45
allowed to do any thinking ahead

00:04:42 --> 00:04:47
right you can just consider each of your

00:04:44 --> 00:04:50
legal moves and then look at the

00:04:46 --> 00:04:53
resulting situation and evaluate it so

00:04:49 --> 00:04:55
what we call a depth one search so just

00:04:52 --> 00:04:56
he immediate outcome of your moves and

00:04:54 --> 00:05:01
ecide if that's good or bad

00:04:55 --> 00:05:04
that version of alphago can still play

00:05:00 --> 00:05:06
at a professional level right and human

00:05:03 --> 00:05:08
professionals are sitting there for five

00:05:05 --> 00:05:12
ten minutes deciding what to do and

00:05:07 --> 00:05:15
alphago in less than a second

00:05:11 --> 00:05:16
instantly into it what is the right move

00:05:14 --> 00:05:21
to make based on its ability to evaluate

00:05:15 --> 00:05:23
positions and that is remarkable because

00:05:20 --> 00:05:25
you know we don't have that level of

00:05:22 --> 00:05:30
intuition about go we actually have to

00:05:24 --> 00:05:33
think about the situation so anyway that

00:05:29 --> 00:05:37
capability that alphago has is one big

00:05:32 --> 00:05:40
part of why it beats humans the other

00:05:36 --> 00:05:44
big part is that it's able to look ahead

00:05:39 --> 00:05:49
40 50 60 moves into the future mm-hmm

00:05:43 --> 00:05:51
and you know if it was considering all

00:05:48 --> 00:05:55
possibilities 40 or 50 or 60 moves into

00:05:50 --> 00:05:58
the future that would be you know 10 to

00:05:54 --> 00:06:00
the 200

00:05:57 --> 00:06:03
possibility so wait way more than you

00:05:59 --> 00:06:06
know atoms in the universe and and so on

00:06:02 --> 00:06:08
so it's very very selective about what

00:06:05 --> 00:06:10
it looks at

00:06:07 --> 00:06:13
so let me try to give you an intuition

00:06:09 --> 00:06:16
about how you decide what to think about

00:06:12 --> 00:06:21
it's a combination of two things one is

00:06:15 --> 00:06:22
how promising it is right so if you're

00:06:20 --> 00:06:25
already convinced that a move is

00:06:21 --> 00:06:27
terrible there's no point spending a lot

00:06:24 --> 00:06:30
more time convincing yourself that it's

00:06:26 --> 00:06:33
terrible because it's probably not gonna

00:06:29 --> 00:06:35
change your mind so the the real reason

00:06:32 --> 00:06:36
you think is because there's some

00:06:34 --> 00:06:38
possibility of changing your mind about

00:06:35 --> 00:06:40
what to do mm-hmm

00:06:37 --> 00:06:44
right and is that changing your mind

00:06:39 --> 00:06:46
that would result then in a better final

00:06:43 --> 00:06:48
action in the real world so that's the

00:06:45 --> 00:06:52
purpose of thinking is to improve the

00:06:47 --> 00:06:53
final action in the real world and so if

00:06:51 --> 00:06:56
you think about a move that is

00:06:52 --> 00:06:58
guaranteed to be terrible you can

00:06:55 --> 00:07:00
convince yourself is terrible and you're

00:06:57 --> 00:07:00
still not gonna change your mind all

00:06:59 --> 00:07:02
right

00:06:59 --> 00:07:05
but on the other hand you I suppose you

00:07:01 --> 00:07:06
had a choice between two moves one of

00:07:04 --> 00:07:09
them you've already figured out is

00:07:05 --> 00:07:11
guaranteed to be a draw let's say and

00:07:08 --> 00:07:13
then the other one looks a little bit

00:07:10 --> 00:07:14
worse like it looks fairly likely that

00:07:12 --> 00:07:18
if you make that move you're gonna lose

00:07:13 --> 00:07:20
but there's still some uncertainty about

00:07:17 --> 00:07:22
he value of that move there's still

00:07:19 --> 00:07:24
some possibility that it will turn out

00:07:21 --> 00:07:26
o be a win all right then it's worth

00:07:23 --> 00:07:29
inking about that so even though it's

00:07:25 --> 00:07:31
less promising on average than the other

00:07:28 --> 00:07:33
move which is guaranteed to be a draw

00:07:30 --> 00:07:34
there's still some purpose in thinking

00:07:32 --> 00:07:37
about it because there's a chance that

00:07:33 --> 00:07:39
you will change your mind and discover

00:07:36 --> 00:07:42
that in fact it's a better move so it's

00:07:38 --> 00:07:44
a combination of how good the move

00:07:41 --> 00:07:46
appears to be and how much I'm certainty

00:07:43 --> 00:07:48
there is about its value the more

00:07:45 --> 00:07:51
uncertainty the more it's worth thinking

00:07:47 --> 00:07:53
about because there's a higher upside if

00:07:50 --> 00:07:56
you want to think of it that way and of

00:07:52 --> 00:07:59
course in the beginning especially in

00:07:55 --> 00:08:02
the alphago 0 formulation it's

00:07:58 --> 00:08:03
everything is shrouded in uncertainty so

00:08:01 --> 00:08:07
you're really swimming in a sea of

00:08:02 --> 00:08:09
uncertainty so it benefits you too I

00:08:06 --> 00:08:11
mean actually following the same process

00:08:09 --> 00:08:14
as you described but because you're so

00:08:10 --> 00:08:15
uncertain about everything you you

00:08:13 --> 00:08:18
basically have to try a lot of different

00:08:14 --> 00:08:21
directions yeah so so the early parts of

00:08:17 --> 00:08:23
the search tree a fairly bushy

00:08:20 --> 00:08:24
that it will when looking a lot of

00:08:22 --> 00:08:27
different possibilities but fairly

00:08:24 --> 00:08:29
quickly the degree of certainty about

00:08:26 --> 00:08:31
some of the moves I mean if a movies are

00:08:28 --> 00:08:33
ally terrible you'll pretty quickly

00:08:30 --> 00:08:36
find out right you lose half your pieces

00:08:32 --> 00:08:38
or half your territory and and then

00:08:35 --> 00:08:40
you'll say okay this this is not worth

00:08:37 --> 00:08:43
inking about any more and then so a

00:08:39 --> 00:08:46
further down the tree becomes very long

00:08:42 --> 00:08:51
and narrow and you're following various

00:08:45 --> 00:08:55
lines of play you know 10 20 30 40 50

00:08:50 --> 00:08:56
moves into the future and you know

00:08:54 --> 00:08:59
that's again it's something that human

00:08:55 --> 00:09:02
beings have a very hard time doing

00:08:58 --> 00:09:04
mainly because they just lacked the

00:09:01 --> 00:09:06
short-term memory you just can't

00:09:03 --> 00:09:09
remember a sequence of moves that's 50

00:09:05 --> 00:09:12
movies long and you can't you can't

00:09:08 --> 00:09:14
imagine the board correctly for that

00:09:11 --> 00:09:18
money moves into the future of course

00:09:13 --> 00:09:19
the top players I'm much more familiar

00:09:17 --> 00:09:22
with chess but the top players probably

00:09:18 --> 00:09:25
have they have echoes of the same kind

00:09:21 --> 00:09:25
of intuition instinct that in a moment's

00:09:24 --> 00:09:29
time

00:09:24 --> 00:09:31
alphago applies when they see a board

00:09:28 --> 00:09:33
I mean they've seen those patterns human

00:09:30 --> 00:09:36
beings have seen those patterns before

00:09:32 --> 00:09:42
at the top at the Grandmaster level it

00:09:35 --> 00:09:44
seems that there is some similarities or

00:09:41 --> 00:09:46
maybe it's it's our imagination creates

00:09:43 --> 00:09:49
a vision of those similarities but it

00:09:45 --> 00:09:51
feels like this kind of pattern

00:09:48 --> 00:09:54
recognition that the alphago approaches

00:09:51 --> 00:09:57
are using is similar to what human

00:09:53 --> 00:10:02
beings at the top level or using I think

00:09:56 --> 00:10:05
there's there's some truth to that but

00:10:01 --> 00:10:09
not entirely yeah I mean I think the the

00:10:04 --> 00:10:12
xtent to which a human Grandmaster can

00:10:08 --> 00:10:14
reliably wreak instantly recognize the

00:10:11 --> 00:10:16
right move instantly recognize the value

00:10:13 --> 00:10:19
of a position I think that's a little

00:10:15 --> 00:10:20
bit overrated but if you sacrifice a

00:10:18 --> 00:10:23
queen for exam I mean there's these

00:10:19 --> 00:10:25
beautiful games of chess

00:10:22 --> 00:10:30
with Bobby Fischer somebody where it's

00:10:24 --> 00:10:31
eeming to make a bad move and I'm not

00:10:29 --> 00:10:34
sure there's a

00:10:30 --> 00:10:36
perfect degree of calculation involved

00:10:33 --> 00:10:38
were they've calculated all the possible

00:10:35 --> 00:10:40
things that happen but there's an

00:10:37 --> 00:10:44
instinct there right that somehow adds

00:10:39 --> 00:10:47
up to the yeah so I think what happens

00:10:43 --> 00:10:50
is you you you get a sense that there's

00:10:46 --> 00:10:52
ome possibility in the position even if

00:10:49 --> 00:10:58
you make a weird-looking move that it

00:10:51 --> 00:11:00
opens up some some lines of of

00:10:57 --> 00:11:05
calculation that otherwise would be

00:10:59 --> 00:11:09
definitely bad and and is that intuition

00:11:05 --> 00:11:13
that there's something here in this

00:11:08 --> 00:11:15
position that might might yield a win

00:11:12 --> 00:11:18
down the side and then you follow that

00:11:14 --> 00:11:20
right and and in some sense when when a

00:11:17 --> 00:11:24
chess player is following a line and in

00:11:20 --> 00:11:27
his or her mind they're they mentally

00:11:23 --> 00:11:28
simulating what the other person is

00:11:26 --> 00:11:31
gonna do while the opponent is gonna do

00:11:27 --> 00:11:34
and they can do that as long as the

00:11:30 --> 00:11:36
moves are kind of forced right as long

00:11:33 --> 00:11:38
as there's a you know there's a fourth

00:11:35 --> 00:11:39
we call a forcing variation where the

00:11:37 --> 00:11:42
opponent doesn't really have much choice

00:11:38 --> 00:11:43
how to respond and then you see if you

00:11:41 --> 00:11:46
can force them into a situation where

00:11:42 --> 00:11:50
you win you know we see plenty of

00:11:45 --> 00:11:53
mistakes even even in Grandmaster games

00:11:49 --> 00:11:57
where they just miss some simple three

00:11:52 --> 00:11:59
four five move combination that you know

00:11:56 --> 00:12:02
asn't particularly apparent in in the

00:11:58 --> 00:12:03
position but we're still there that's

00:12:01 --> 00:12:07
the thing that makes us human

00:12:02 --> 00:12:10
yeah so when you mentioned that in a

00:12:06 --> 00:12:12
fellow those games were after some meta

00:12:09 --> 00:12:14
reasoning improvements and research I

00:12:11 --> 00:12:16
was able to beat you how did that make

00:12:13 --> 00:12:20
you feel part of the meta reasoning

00:12:15 --> 00:12:25
capability that it had was based on

00:12:19 --> 00:12:27
learning and and you could sit down the

00:12:24 --> 00:12:30
next day and you could just feel that it

00:12:26 --> 00:12:32
had got a lot smarter boom you know and

00:12:29 --> 00:12:35
all the sudden you really felt like you

00:12:31 --> 00:12:38
sort of pressed against

00:12:34 --> 00:12:41
he wall because it was it was much more

00:12:37 --> 00:12:43
aggressive and was totally unforgiving

00:12:40 --> 00:12:46
of any minor mistake that you might make

00:12:42 --> 00:12:49
and and actually it seemed understood

00:12:45 --> 00:12:52
the game better than I did and you know

00:12:48 --> 00:12:55
Gary Kasparov has this quote weary

00:12:51 --> 00:12:57
during his match against deep blue he

00:12:54 --> 00:12:58
said he suddenly felt that there was a

00:12:56 --> 00:13:02
new kind of intelligence across the

00:12:57 --> 00:13:06
board do you think that's a scary or an

00:13:01 --> 00:13:09
exciting possibility that's prevent for

00:13:05 --> 00:13:13
yourself in in the context of chess

00:13:08 --> 00:13:16
purely sort of in this like that feeling

00:13:12 --> 00:13:19
whatever that is I think it's definitely

00:13:15 --> 00:13:23
an exciting feeling you know this is

00:13:18 --> 00:13:24
what made me work on AI in the first

00:13:22 --> 00:13:26
place was as soon as I really understood

00:13:23 --> 00:13:30
what a computer was I wanted to make it

00:13:25 --> 00:13:31
smart you know I started out with the

00:13:29 --> 00:13:35
first program I wrote was for the

00:13:30 --> 00:13:38
sinclair programmable calculator and i

00:13:34 --> 00:13:41
think you could write a 21 step

00:13:37 --> 00:13:43
algorithm that was the biggest program

00:13:40 --> 00:13:46
you could write something like that and

00:13:42 --> 00:13:47
o little arithmetic calculations so I

00:13:45 --> 00:13:50
say think I implemented Newton's method

00:13:46 --> 00:13:50
for square roots and a few other things

00:13:49 --> 00:13:54
like that

00:13:49 --> 00:13:57
um but then you know I thought okay if I

00:13:53 --> 00:13:59
just had more space I could make this

00:13:56 --> 00:14:05
thing intelligent

00:13:58 --> 00:14:05
and so I started thinking about AI and

00:14:04 --> 00:14:14
I think the the the thing that's

00:14:07 --> 00:14:16
cary is not is not the chess program

00:14:13 --> 00:14:18
because you know chess programs they're

00:14:15 --> 00:14:26
not in they're taking over the world

00:14:17 --> 00:14:28
business but if you extrapolate

00:14:25 --> 00:14:31
you know there are things about chess

00:14:27 --> 00:14:35
that don't resemble the real world right

00:14:30 --> 00:14:35
we know we know the rules of chess

00:14:35 --> 00:14:41
board is completely visible to the

00:14:38 --> 00:14:43
programmer of course the real world is

00:14:40 --> 00:14:46
not most you most the real world is not

00:14:42 --> 00:14:47
visible from wherever you're sitting so

00:14:45 --> 00:14:53
to speak

00:14:47 --> 00:14:55
and to overcome those kinds of problems

00:14:52 --> 00:14:58
you need qualitatively different

00:14:54 --> 00:15:02
algorithms another thing about the real

00:14:57 --> 00:15:06
world is that you know we we regularly

00:15:01 --> 00:15:10
plan ahead on the timescales involving

00:15:05 --> 00:15:13
billions or trillions of steps now we

00:15:09 --> 00:15:15
don't plan that was in detail but you

00:15:12 --> 00:15:16
know when you choose to do a PhD at

00:15:14 --> 00:15:19
Berkeley

00:15:15 --> 00:15:21
that's a five-year commitment and that

00:15:18 --> 00:15:23
amounts to about a trillion motor

00:15:20 --> 00:15:26
control steps that you will eventually

00:15:22 --> 00:15:30
be committed to including going up the

00:15:25 --> 00:15:32
stairs opening doors drinking water type

00:15:29 --> 00:15:34
yeah I mean every every finger movement

00:15:31 --> 00:15:35
while you're typing every character of

00:15:33 --> 00:15:37
every paper and the thesis and

00:15:34 --> 00:15:38
everything else so you're not commuting

00:15:36 --> 00:15:40
in advance to the specific motor control

00:15:37 --> 00:15:44
steps but you're still reasoning on a

00:15:39 --> 00:15:48
timescale that will eventually reduce to

00:15:43 --> 00:15:52
trillions of motor control actions and

00:15:47 --> 00:15:55
so for all these reasons

00:15:51 --> 00:15:58
you know alphago and and deep blue and

00:15:54 --> 00:16:01
so on don't represent any kind of threat

00:15:57 --> 00:16:05
o humanity but they are a step towards

00:16:00 --> 00:16:08
it right near that and progress in AI

00:16:04 --> 00:16:12
occurs by essentially removing one by

00:16:07 --> 00:16:14
one these assumptions that make problems

00:16:11 --> 00:16:17
easy like the assumption of complete

00:16:13 --> 00:16:19
observability of the situation right we

00:16:16 --> 00:16:22
remove that assumption you need a much

00:16:18 --> 00:16:24
more complicated kind of a computing

00:16:21 --> 00:16:26
design and you need something that

00:16:23 --> 00:16:27
actually keeps track of all the things

00:16:25 --> 00:16:30
you can't see and tries to estimate

00:16:26 --> 00:16:33
what's going on and there's inevitable

00:16:29 --> 00:16:36
uncertainty in that so it becomes a much

00:16:32 --> 00:16:38
more complicated problem but you know we

00:16:35 --> 00:16:40
are removing those assumptions we are

00:16:37 --> 00:16:42
starting to have algorithms that can

00:16:39 --> 00:16:45
cope with much longer timescales

00:16:42 --> 00:16:48
they can cope with uncertainty they can

00:16:44 --> 00:16:51
cope with partial observability

00:16:47 --> 00:16:54
and so each of those steps sort of

00:16:50 --> 00:16:57
magnifies by a thousand the range of

00:16:53 --> 00:16:58
things that we can do with AI systems so

00:16:56 --> 00:17:00
the way I started me I wanted to be a

00:16:57 --> 00:17:02
psychiatrist for long time to understand

00:16:59 --> 00:17:05
the mind in high school and of course

00:17:01 --> 00:17:09
program and so on and then I showed up

00:17:04 --> 00:17:11
University of Illinois to an AI lab and

00:17:08 --> 00:17:14
they said okay I don't have time for you

00:17:10 --> 00:17:16
but here's a book AI a modern approach I

00:17:13 --> 00:17:19
think was the first edition at the time

00:17:15 --> 00:17:22
mmm here go go learn this and I remember

00:17:18 --> 00:17:24
the lay of the land was well it's

00:17:21 --> 00:17:26
incredible that we solve chess but we'll

00:17:23 --> 00:17:29
never solve go I mean it was pretty

00:17:25 --> 00:17:33
certain that go in the way we thought

00:17:28 --> 00:17:35
about systems that reason was impossible

00:17:32 --> 00:17:38
to solve and now we've solved this as a

00:17:34 --> 00:17:41
very I think I would have said that it's

00:17:37 --> 00:17:43
unlikely we could take the kind of

00:17:40 --> 00:17:47
algorithm that was used for chess and

00:17:42 --> 00:17:49
just get it to scale up and work well

00:17:46 --> 00:17:54
for go

00:17:48 --> 00:17:58
and at the time what we thought was that

00:17:53 --> 00:18:01
in order to solve go we would have to do

00:17:57 --> 00:18:03
something similar to the way humans

00:18:00 --> 00:18:06
manage the complexity of go which is to

00:18:02 --> 00:18:08
break it down into kind of sub games so

00:18:05 --> 00:18:09
when a human thinks about a go board

00:18:07 --> 00:18:12
they think about different parts of the

00:18:08 --> 00:18:14
board as sort of weakly connected to

00:18:11 --> 00:18:16
each other and they think about okay

00:18:13 --> 00:18:18
within this part of the board here's how

00:18:15 --> 00:18:20
things could go and that part about his

00:18:17 --> 00:18:22
how things could go and now you try to

00:18:19 --> 00:18:25
sort of couple those two analyses

00:18:21 --> 00:18:27
together and deal with the interactions

00:18:24 --> 00:18:28
and maybe revise your views of how

00:18:26 --> 00:18:31
things are going to go in each part and

00:18:27 --> 00:18:35
then you've got maybe five six seven ten

00:18:30 --> 00:18:39
parts of the board and that actually

00:18:34 --> 00:18:42
resembles the real world much more than

00:18:38 --> 00:18:45
chess does because in the real world you

00:18:41 --> 00:18:48
know we have work we have home life we

00:18:44 --> 00:18:51
have sport you know whatever different

00:18:47 --> 00:18:54
kinds of activities you know shopping

00:18:50 --> 00:18:56
these all are connected to each other

00:18:53 --> 00:19:00
but they're weakly connected so when I'm

00:18:55 --> 00:19:02
typing a paper you know I don't simul

00:18:59 --> 00:19:04
taneous Li have to decide which order

00:19:01 --> 00:19:06
I'm gonna get the you know the milk and

00:19:03 --> 00:19:10
the butter you know that doesn't affect

00:19:05 --> 00:19:12
he typing but I do need to realize okay

00:19:09 --> 00:19:13
better finish this before the shops

00:19:11 --> 00:19:14
closed because I don't have anything you

00:19:12 --> 00:19:16
don't have any food at home all right

00:19:13 --> 00:19:20
so there's some weak connection

00:19:15 --> 00:19:22
but not in the way that chess works

00:19:19 --> 00:19:25
where everything is tied into a single

00:19:21 --> 00:19:28
stream of thought so the thought was

00:19:24 --> 00:19:29
that go just sort of go we'd have to

00:19:27 --> 00:19:30
make progress on stuff that would be

00:19:28 --> 00:19:32
useful for the real world and in a way

00:19:29 --> 00:19:36
alphago is a little bit disappointing

00:19:31 --> 00:19:37
right because the the program designed

00:19:35 --> 00:19:43
for alphago was actually not that

00:19:36 --> 00:19:45
different from from deep blue or even

00:19:42 --> 00:19:48
from Arthur Samuels checker playing

00:19:44 --> 00:19:48
program from the 1950s

00:19:48 --> 00:19:53
and in fact the so the two things that

00:19:50 --> 00:19:55
make alphago work is one one is is

00:19:52 --> 00:19:57
amazing ability ability to evaluate the

00:19:54 --> 00:19:59
positions and the other is the

00:19:56 --> 00:20:03
meta-reasoning capability which which

00:19:58 --> 00:20:05
allows it to to explore some paths in

00:20:02 --> 00:20:08
the tree very deeply and to abandon

00:20:04 --> 00:20:12
other paths very quickly so this word

00:20:07 --> 00:20:17
meta-reasoning while technically correct

00:20:11 --> 00:20:19
inspires perhaps the the wrong degree of

00:20:16 --> 00:20:22
power that alphago has for example the

00:20:18 --> 00:20:25
word reasonings as a powerful word let

00:20:21 --> 00:20:29
me ask you sort of so you were part of

00:20:24 --> 00:20:31
the symbolic AI world for a while like

00:20:28 --> 00:20:33
whatever the AI was there's a lot of

00:20:30 --> 00:20:39
excellent interesting ideas there that

00:20:32 --> 00:20:42
unfortunately met a winter and so it do

00:20:38 --> 00:20:45
you think it really emerges well I would

00:20:41 --> 00:20:51
say yeah it's not quite as simple as

00:20:44 --> 00:20:53
that so the the AI winter so for the

00:20:50 --> 00:20:57
first window that was actually named as

00:20:52 --> 00:20:57
uch was the one in the late 80s

00:20:56 --> 00:21:05
and that came about because in the mid

00:21:00 --> 00:21:08
80s there was a really a concerted

00:21:04 --> 00:21:11
attempt to push AI out into the real

00:21:07 --> 00:21:15
world using what was called expert

00:21:10 --> 00:21:18
system technology and for the most part

00:21:14 --> 00:21:18
hat technology was just not ready for

00:21:17 --> 00:21:23
primetime

00:21:17 --> 00:21:26
they were trying in many cases to do a

00:21:22 --> 00:21:28
form of uncertain reasoning judge you

00:21:25 --> 00:21:31
know judgment combinations of evidence

00:21:27 --> 00:21:34
diagnosis those kinds of things which

00:21:30 --> 00:21:37
was simply invalid and when you try to

00:21:33 --> 00:21:40
apply invalid reasoning methods to real

00:21:37 --> 00:21:42
problems you can fudge it for small

00:21:39 --> 00:21:44
versions of the problem but when it

00:21:41 --> 00:21:49
starts to get larger the thing just

00:21:43 --> 00:21:51
falls apart so many companies found that

00:21:48 --> 00:21:53
he stuff just didn't work and they were

00:21:50 --> 00:21:56
spending tons of money on consultants to

00:21:52 --> 00:21:58
try to make it work and

00:21:55 --> 00:22:00
there were you know other practical

00:21:57 --> 00:22:02
reasons like you know they they were

00:21:59 --> 00:22:07
asking the companies to buy incredibly

00:22:01 --> 00:22:10
expensive lisp machine workstations

00:22:06 --> 00:22:12
which were literally between fifty and a

00:22:09 --> 00:22:15
hundred thousand dollars in you know in

00:22:11 --> 00:22:17
1980s money which was would be like

00:22:14 --> 00:22:19
between a hundred and fifty and three

00:22:16 --> 00:22:22
hundred thousand dollars per workstation

00:22:18 --> 00:22:24
in current prices so then the bottom

00:22:21 --> 00:22:25
line they weren't seeing a profit from

00:22:23 --> 00:22:28
it yeah

00:22:24 --> 00:22:30
they in many cases I think there were

00:22:27 --> 00:22:33
some successes there's no doubt about

00:22:29 --> 00:22:37
hat but people I would say over

00:22:32 --> 00:22:40
invested every major company was

00:22:36 --> 00:22:40
tarting an AI department just like now

00:22:40 --> 00:22:46
and I worry a bit that we might see

00:22:42 --> 00:22:50
similar disappointments not because the

00:22:45 --> 00:22:56
technology is invalid but it's limited

00:22:49 --> 00:22:59
in its scope and it's almost the the

00:22:55 --> 00:23:02
dual of the you know the scope problems

00:22:58 --> 00:23:04
that expert systems had so what have you

00:23:02 --> 00:23:06
learned from that hype cycle and what

00:23:03 --> 00:23:10
can we do to prevent another winter for

00:23:05 --> 00:23:12
example yeah so when I'm giving talks

00:23:09 --> 00:23:17
these days that's one of the warnings

00:23:11 --> 00:23:20
that I give to to pot warning slide one

00:23:16 --> 00:23:22
is that you know rather than data being

00:23:19 --> 00:23:27
the new oil data is the new snake oil

00:23:21 --> 00:23:33
that's a good line and then and then the

00:23:26 --> 00:23:35
other is that we might see a kind of

00:23:32 --> 00:23:36
very visible failure in some of the

00:23:34 --> 00:23:41
major application areas and I think

00:23:35 --> 00:23:46
self-driving cars would be the flagship

00:23:40 --> 00:23:49
and I think when you look at the history

00:23:45 --> 00:23:53
so the first self-driving car was on the

00:23:48 --> 00:24:00
freeway driving itself changing lanes

00:23:52 --> 00:24:04
overtaking in 1987 and so it's more than

00:23:59 --> 00:24:05
30 years and that kind of looks like

00:24:03 --> 00:24:08
where we are today right you know

00:24:04 --> 00:24:13
prototypes on the freeway changing lanes

00:24:07 --> 00:24:15
and overtaking now I think significant

00:24:12 --> 00:24:18
progress has been made particularly on

00:24:14 --> 00:24:21
the perception side so we worked a lot

00:24:17 --> 00:24:23
on autonomous vehicles in the early mid

00:24:20 --> 00:24:26
90s at Berkley you know and we had our

00:24:22 --> 00:24:28
own big demonstrations you know we we

00:24:25 --> 00:24:31
put congressmen into yourself driving

00:24:27 --> 00:24:33
cars and and had them zooming along the

00:24:30 --> 00:24:37
freeway

00:24:32 --> 00:24:40
and the problem was clearly perception

00:24:36 --> 00:24:43
at the time the problem that perception

00:24:39 --> 00:24:45
yeah so in simulation with perfect

00:24:42 --> 00:24:47
perception you could actually show that

00:24:44 --> 00:24:48
you can drive safely for a long time

00:24:46 --> 00:24:52
ven if the other cars are misbehaving

00:24:47 --> 00:24:55
and and so on but simultaneously we

00:24:51 --> 00:24:58
worked on machine vision for detecting

00:24:54 --> 00:25:02
cars and tracking pedestrians and so on

00:24:57 --> 00:25:04
and we couldn't get the reliability of

00:25:01 --> 00:25:07
detection and tracking up to a high

00:25:03 --> 00:25:11
enough particular level particularly in

00:25:06 --> 00:25:13
bad weather conditions nighttime

00:25:10 --> 00:25:15
rainfall good enough for demos but

00:25:12 --> 00:25:17
perhaps not good enough to cover the

00:25:14 --> 00:25:19
general the general yeah the thing about

00:25:16 --> 00:25:21
driving is you know suppose you're a

00:25:18 --> 00:25:23
taxi driver you know and you drive every

00:25:20 --> 00:25:26
day eight hours a day for ten years

00:25:22 --> 00:25:28
right that's a hundred million seconds

00:25:25 --> 00:25:30
of driving you know and any one of those

00:25:27 --> 00:25:33
conds you can make a fatal mistake so

00:25:29 --> 00:25:36
you're talking about eight nines of

00:25:32 --> 00:25:40
reliability right now if your vision

00:25:35 --> 00:25:43
system only detects ninety eight point

00:25:39 --> 00:25:45
hree percent of the vehicles right and

00:25:42 --> 00:25:47
that's sort of you know one on a bit

00:25:44 --> 00:25:50
nines and reliability so you have

00:25:46 --> 00:25:54
another seven orders of magnitude to go

00:25:49 --> 00:25:56
and and this is what people don't

00:25:53 --> 00:26:00
understand they think oh because I had a

00:25:55 --> 00:26:02
successful demo I'm pretty much done but

00:25:59 --> 00:26:06
you know you're not even within seven

00:26:01 --> 00:26:09
orders of magnitude of being done and

00:26:05 --> 00:26:12
that's the difficulty and it's it's not

00:26:08 --> 00:26:14
here can I follow a white line that's

00:26:11 --> 00:26:17
not the problem right we follow a white

00:26:13 --> 00:26:20
line all the way across the country

00:26:16 --> 00:26:23
but it's the it's the weird stuff that

00:26:19 --> 00:26:25
happens it's some of the edge cases yeah

00:26:22 --> 00:26:28
the edge case other drivers doing weird

00:26:24 --> 00:26:32
things you know so if you talk to Google

00:26:27 --> 00:26:35
right so they had actually very

00:26:31 --> 00:26:36
classical architecture where you know

00:26:34 --> 00:26:39
you had machine vision which would

00:26:35 --> 00:26:41
etect all the other cars and

00:26:38 --> 00:26:43
pedestrians and the white lines and the

00:26:40 --> 00:26:46
road signs and then basically that was

00:26:42 --> 00:26:50
fed into a logical database and then you

00:26:45 --> 00:26:54
had a classical 1970s rule-based expert

00:26:49 --> 00:26:56
system telling you okay if you're in the

00:26:53 --> 00:26:57
middle lane and there's a bicyclist in

00:26:55 --> 00:26:59
the right lane who is signaling this

00:26:56 --> 00:27:02
then then then don't need to do that

00:26:58 --> 00:27:04
yeah right and what they found was that

00:27:01 --> 00:27:06
every day they go out and there'd be

00:27:03 --> 00:27:08
another situation that the rules didn't

00:27:05 --> 00:27:10
cover you know so they they come to a

00:27:07 --> 00:27:12
traffic circle and there's a little girl

00:27:09 --> 00:27:13
riding a bicycle the wrong way around a

00:27:11 --> 00:27:17
traffic circle okay what do you do we

00:27:12 --> 00:27:18
don't have a rule oh my god okay stop

00:27:16 --> 00:27:20
and then you know they come back and had

00:27:17 --> 00:27:23
more rules and they just found that this

00:27:19 --> 00:27:25
was not really converging

00:27:22 --> 00:27:28
and and if you think about it right how

00:27:24 --> 00:27:31
do you deal with an unexpected

00:27:27 --> 00:27:33
situation meaning one that you've never

00:27:30 --> 00:27:37
previously encountered and the sort of

00:27:32 --> 00:27:38
the the reasoning required to figure out

00:27:36 --> 00:27:41
he solution for that situation has

00:27:37 --> 00:27:43
never been done it doesn't match any

00:27:40 --> 00:27:46
previous situation in terms of the kind

00:27:42 --> 00:27:48
of reasoning you have to do well you

00:27:45 --> 00:27:48
know in chess programs this happens all

00:27:47 --> 00:27:51
the time

00:27:47 --> 00:27:54
you're constantly coming up with

00:27:50 --> 00:27:55
situations you haven't seen before and

00:27:53 --> 00:27:57
you have to reason about them you have

00:27:54 --> 00:27:59
to think about okay here are the

00:27:56 --> 00:28:01
possible things I could do here the

00:27:58 --> 00:28:03
outcomes here's how desirable the

00:28:00 --> 00:28:05
outcomes are and then pick the right one

00:28:02 --> 00:28:06
you know in the 90s we were saying okay

00:28:04 --> 00:28:08
this is how you're gonna have to do

00:28:05 --> 00:28:11
automated vehicles they're gonna have to

00:28:07 --> 00:28:13
have a look ahead capability but the

00:28:10 --> 00:28:16
look ahead for driving is more difficult

00:28:12 --> 00:28:18
han it is for chess because Huysmans

00:28:15 --> 00:28:20
the other right there's humans and

00:28:17 --> 00:28:22
they're less predictable than just a

00:28:19 --> 00:28:24
standard well then will you have an

00:28:21 --> 00:28:29
opponent in chess who's also somewhat

00:28:23 --> 00:28:30
unpredictable but for example in chess

00:28:28 --> 00:28:33
you always know the opponent's intention

00:28:29 --> 00:28:35
they're trying to beat you right whereas

00:28:32 --> 00:28:37
in driving you don't know is this guy

00:28:34 --> 00:28:39
trying to turn left or has he just

00:28:36 --> 00:28:43
forgotten to turn off his tone signal or

00:28:38 --> 00:28:45
is he drunk or is he you know changing

00:28:42 --> 00:28:47
the channel on his radio or whatever it

00:28:44 --> 00:28:50
might be you got to try and figure out

00:28:46 --> 00:28:53
he mental state the intent of the other

00:28:49 --> 00:28:55
drivers to forecast the possible

00:28:52 --> 00:28:57
volutions of their trajectories and

00:28:54 --> 00:28:59
then you've got to figure out okay which

00:28:56 --> 00:29:02
is the directory for me that's going to

00:28:58 --> 00:29:04
be safest and those all interact with

00:29:01 --> 00:29:07
each other because the other drivers

00:29:03 --> 00:29:09
going to react to your trajectory and so

00:29:06 --> 00:29:11
n so you know they've got the classic

00:29:08 --> 00:29:14
merging onto the freeway a problem where

00:29:10 --> 00:29:15
you're kind of racing a vehicle that's

00:29:13 --> 00:29:17
already on the freeway and you are you

00:29:14 --> 00:29:19
gonna pull ahead of them or you're gonna

00:29:16 --> 00:29:21
let them go first and pull in behind and

00:29:18 --> 00:29:22
you get this sort of uncertainty about

00:29:20 --> 00:29:26
who's going first

00:29:21 --> 00:29:30
so all those kinds of things

00:29:25 --> 00:29:34
mean that you need decision-making

00:29:29 --> 00:29:37
architecture that's very different from

00:29:33 --> 00:29:39
either a rule-based system or it seems

00:29:36 --> 00:29:41
to me a kind of an end-to-end neural

00:29:38 --> 00:29:44
network system you know so just as

00:29:40 --> 00:29:46
alphago is pretty good when it doesn't

00:29:43 --> 00:29:50
do any look ahead but it's way way way

00:29:45 --> 00:29:51
better when it does I think the same

00:29:49 --> 00:29:54
is going to be true for driving you can

00:29:50 --> 00:29:56
have a driving system that's pretty good

00:29:53 --> 00:29:59
when it doesn't do any look ahead but

00:29:55 --> 00:30:01
hat's not good enough you know and

00:29:58 --> 00:30:06
we've already seen multiple deaths

00:30:00 --> 00:30:08
caused by poorly designed machine

00:30:05 --> 00:30:11
learning algorithms that don't really

00:30:07 --> 00:30:13
understand what they're doing yeah and

00:30:10 --> 00:30:16
on several levels I think it's on the

00:30:12 --> 00:30:18
perception side there's mistakes being

00:30:15 --> 00:30:20
made by those algorithms were the

00:30:17 --> 00:30:22
perception is very shallow on the

00:30:19 --> 00:30:25
planning side to look ahead like you

00:30:21 --> 00:30:30
said and the thing that we come come up

00:30:24 --> 00:30:32
against that's really interesting when

00:30:29 --> 00:30:35
you try to deploy systems in the real

00:30:31 --> 00:30:36
world is you can't think of an

00:30:34 --> 00:30:38
artificial intelligence system as a

00:30:35 --> 00:30:41
thing that responds to the world always

00:30:37 --> 00:30:43
you have to realize that it's an agent

00:30:40 --> 00:30:45
hat others will respond to as well so

00:30:42 --> 00:30:49
in order to drive successfully you can't

00:30:44 --> 00:30:50
just try to do obstacle avoidance you

00:30:48 --> 00:30:52
can't pretend that you're invisible

00:30:49 --> 00:30:55
thank you right you're the invisible car

00:30:51 --> 00:30:57
ight just look that way I mean but you

00:30:54 --> 00:30:59
have to assert yet others have to be

00:30:56 --> 00:31:03
scared of you just we're all there's

00:30:58 --> 00:31:04
this tension there's this game so if we

00:31:02 --> 00:31:08
studied a lot of work with pedestrians

00:31:03 --> 00:31:10
if you approach pedestrians as purely an

00:31:07 --> 00:31:11
obstacle avoidance so you either doing

00:31:09 --> 00:31:14
look ahead isn't modeling the intent

00:31:11 --> 00:31:16
hat you're you they're not going to

00:31:13 --> 00:31:17
they're going to take advantage of you

00:31:15 --> 00:31:20
they're not going to respect you at all

00:31:16 --> 00:31:23
there has to be a tension a fear some

00:31:19 --> 00:31:26
amount of uncertainty that's how we have

00:31:22 --> 00:31:29
create we or at least just a kind of a

00:31:25 --> 00:31:30
resoluteness right so you have you have

00:31:28 --> 00:31:32
to display a certain amount of

00:31:29 --> 00:31:34
resoluteness you can't you can't be too

00:31:31 --> 00:31:39
tentative

00:31:33 --> 00:31:41
and yeah so the right the the solutions

00:31:38 --> 00:31:44
then become pretty complicated right you

00:31:40 --> 00:31:47
get into game theoretic yes analyses and

00:31:43 --> 00:31:50
so we're you know Berkeley now we're

00:31:46 --> 00:31:52
working a lot on this kind of

00:31:49 --> 00:31:56
interaction between machines and humans

00:31:51 --> 00:32:01
and that's exciting yeah and so my

00:31:55 --> 00:32:04
colleague and could drag an actually you

00:32:00 --> 00:32:06
know if you if you formulate the problem

00:32:03 --> 00:32:08
game theoretically and you just let the

00:32:05 --> 00:32:10
system figure out the solution you know

00:32:07 --> 00:32:12
it does interesting unexpected things

00:32:09 --> 00:32:17
like sometimes at a stop sign

00:32:11 --> 00:32:19
if no one is going first right the car

00:32:16 --> 00:32:22
will actually back up a little all right

00:32:18 --> 00:32:24
and just to indicate to the other cars

00:32:21 --> 00:32:26
that they should go and that's something

00:32:23 --> 00:32:28
it invented entirely by itself that's

00:32:25 --> 00:32:30
interesting you know we didn't say this

00:32:27 --> 00:32:33
the language of communication at stop

00:32:29 --> 00:32:34
signs it figured it out that's really

00:32:32 --> 00:32:38
interesting

00:32:33 --> 00:32:40
so let me one just step back for a

00:32:37 --> 00:32:44
second just this beautiful philosophical

00:32:39 --> 00:32:48
notion so Pamela I'm a quartic in 1979

00:32:43 --> 00:32:50
wrote AI began with the ancient wish to

00:32:47 --> 00:32:54
forge the gods so when you think about

00:32:49 --> 00:32:57
he history of our civilization do you

00:32:53 --> 00:33:01
think that there is an inherent desire

00:32:56 --> 00:33:04
to create let's not say gods but to

00:33:00 --> 00:33:07
create super intelligence is it inherent

00:33:03 --> 00:33:10
o us is it in our genes that the

00:33:06 --> 00:33:14
natural arc of human civilization is to

00:33:09 --> 00:33:18
create things that are of greater and

00:33:13 --> 00:33:21
greater power and perhaps no echoes of

00:33:17 --> 00:33:24
ourselves so to create the gods as

00:33:20 --> 00:33:24
Pamela said

00:33:24 --> 00:33:32
if the maybe I mean you know we're all

00:33:28 --> 00:33:32
individuals

00:33:31 --> 00:33:38
certainly we see over and over again in

00:33:33 --> 00:33:41
history individuals who thought about

00:33:37 --> 00:33:43
his possibility hopefully when I'm not

00:33:40 --> 00:33:47
being too philosophical here but if you

00:33:42 --> 00:33:49
look at the arc of this you know where

00:33:46 --> 00:33:50
this is going and we'll talk about AI

00:33:48 --> 00:33:54
safety we'll talk about greater and

00:33:49 --> 00:33:56
greater intelligence do you see that

00:33:53 --> 00:33:58
here in when you created the earth

00:33:55 --> 00:33:59
Allah program and you felt this

00:33:57 --> 00:34:01
excitement

00:33:58 --> 00:34:03
what was that excitement was it

00:34:00 --> 00:34:06
excitement of a tinkerer who created

00:34:02 --> 00:34:10
something cool like a clock or was there

00:34:05 --> 00:34:12
a magic or was it more like a child

00:34:09 --> 00:34:14
being born that yeah you know yeah so I

00:34:11 --> 00:34:18
mean I certainly understand that

00:34:13 --> 00:34:22
viewpoint and if you look at the light

00:34:17 --> 00:34:24
he'll report which was commit so in the

00:34:21 --> 00:34:27
70s there was a lot of controversy in

00:34:23 --> 00:34:29
the UK about AI and you know whether it

00:34:26 --> 00:34:33
was for real and how much the money

00:34:28 --> 00:34:33
the government should invest and

00:34:33 --> 00:34:39
there was a lot long story but the

00:34:34 --> 00:34:43
government commissioned a report by

00:34:38 --> 00:34:45
light Hill who was a physicist and he

00:34:42 --> 00:34:50
wrote a very damning report about AI

00:34:44 --> 00:34:54
which I think was the point and he said

00:34:49 --> 00:34:56
that that these are you know frustrated

00:34:53 --> 00:35:01
men who unable to have children would

00:34:55 --> 00:35:04
like to create and you know create life

00:35:00 --> 00:35:08
you know as a kind of replacement you

00:35:03 --> 00:35:11
know which I which I think is really

00:35:07 --> 00:35:11
pretty unfair

00:35:12 --> 00:35:21
but there is I mean there there is a

00:35:16 --> 00:35:24
kind of magic I would say you when you

00:35:20 --> 00:35:24
build something

00:35:25 --> 00:35:29
and what you're building in is really

00:35:27 --> 00:35:31
just you're building in some

00:35:28 --> 00:35:36
understanding of the principles of

00:35:30 --> 00:35:39
learning and decision-making and to see

00:35:35 --> 00:35:44
those principles actually then turn into

00:35:38 --> 00:35:49
intelligent behavior in in specific

00:35:43 --> 00:35:49
situations it's an incredible thing and

00:35:48 --> 00:36:00
you know that is naturally going to make

00:35:55 --> 00:36:04
you think okay where does this end and

00:35:59 --> 00:36:08
so there's a there's magical optimistic

00:36:03 --> 00:36:10
views of word and whatever your view of

00:36:07 --> 00:36:12
optimism is whatever your view of utopia

00:36:09 --> 00:36:15
is it's probably different for everybody

00:36:11 --> 00:36:18
eah but you've often talked about

00:36:14 --> 00:36:26
concerns you have of how things might go

00:36:17 --> 00:36:28
wrong so I've talked to max tegmark

00:36:25 --> 00:36:32
there's a lot of interesting ways to

00:36:27 --> 00:36:34
think about AI safety you're one of the

00:36:31 --> 00:36:36
seminal people thinking about this

00:36:33 --> 00:36:40
problem among sort of being in the weeds

00:36:35 --> 00:36:41
of actually solving specific AI problems

00:36:39 --> 00:36:44
you also think about the big picture of

00:36:40 --> 00:36:46
where we're going so can you talk about

00:36:43 --> 00:36:49
several elements of it let's just talk

00:36:45 --> 00:36:54
about maybe the control problem so this

00:36:48 --> 00:36:58
idea of losing ability to control the

00:36:53 --> 00:37:00
behavior and of a AI system so how do

00:36:57 --> 00:37:05
you see that how do you see that coming

00:36:59 --> 00:37:09
about what do you think we can do to

00:37:04 --> 00:37:11
manage it well so it doesn't take a

00:37:08 --> 00:37:12
genius to realize that if you make

00:37:10 --> 00:37:16
something that's smarter than you you

00:37:11 --> 00:37:20
might have a problem you know in Turing

00:37:15 --> 00:37:22
Alan Turing you know wrote about the

00:37:19 --> 00:37:28
gave lectures about this you know 19

00:37:21 --> 00:37:31
51 painted a lecture on the radio and

00:37:27 --> 00:37:35
he basically says you know once the

00:37:30 --> 00:37:38
machine thinking method stops you know

00:37:34 --> 00:37:42
very quickly they'll outstrip humanity

00:37:37 --> 00:37:45
and you know if we're lucky we might be

00:37:41 --> 00:37:47
able to I think he says if we may be

00:37:44 --> 00:37:50
able to turn off the power at strategic

00:37:46 --> 00:37:53
moments but even so a species would be

00:37:49 --> 00:37:54
humbled yeah you can actually I think

00:37:52 --> 00:37:56
was wrong about that right here is you

00:37:53 --> 00:37:57
know if it's a sufficiently

00:37:55 --> 00:38:00
intelligent machine is not gonna let you

00:37:56 --> 00:38:01
switch it off so it's actually in

00:37:59 --> 00:38:04
competition with you so what do you

00:38:00 --> 00:38:07
think is meant just for a quick tangent

00:38:03 --> 00:38:11
if we shut off this super intelligent

00:38:06 --> 00:38:11
machine that our species will be humbled

00:38:11 --> 00:38:20
I think he means that we would realize

00:38:15 --> 00:38:21
that we are inferior right that we we

00:38:19 --> 00:38:23
only survive by the skin of our teeth

00:38:20 --> 00:38:27
because we happen to get to the off

00:38:22 --> 00:38:29
switch just in time

00:38:26 --> 00:38:31
you know and if we hadn't then we would

00:38:28 --> 00:38:35
have lost control over the earth

00:38:30 --> 00:38:36
so do you are you more worried when you

00:38:34 --> 00:38:38
think about this stuff about super

00:38:35 --> 00:38:42
intelligent AI or are you more worried

00:38:37 --> 00:38:45
about super powerful AI that's not

00:38:41 --> 00:38:50
aligned with our values so the paperclip

00:38:44 --> 00:38:53
scenario is kind of I think so the main

00:38:49 --> 00:38:56
problem I'm working on is is the control

00:38:52 --> 00:39:00
problem the the problem of machines

00:38:55 --> 00:39:02
pursuing objectives that are as you say

00:38:59 --> 00:39:06
not aligned with human objectives and

00:39:01 --> 00:39:08
this has been it has been the way

00:39:05 --> 00:39:13
we've thought about I eyes since the

00:39:07 --> 00:39:15
beginning you you build a machine for

00:39:12 --> 00:39:18
optimizing and then you put in some

00:39:14 --> 00:39:22
objective and it optimizes right and and

00:39:17 --> 00:39:25
you know we we can think of this as the

00:39:21 --> 00:39:28
King Midas problem right because if

00:39:24 --> 00:39:30
you know so King Midas put in this

00:39:27 --> 00:39:32
objective right everything I touch you

00:39:29 --> 00:39:34
turned to gold and the gods you know

00:39:31 --> 00:39:36
that's like the machine they said okay

00:39:33 --> 00:39:39
done you know you now have this power

00:39:35 --> 00:39:41
and of course his food and his drink and

00:39:38 --> 00:39:44
his family all turned to gold and then

00:39:40 --> 00:39:48
he's sighs misery and starvation and

00:39:43 --> 00:39:51
this is you know it's it's a warning

00:39:47 --> 00:39:54
it's it's a failure mode that pretty

00:39:50 --> 00:39:56
much every culture in history has had

00:39:53 --> 00:39:58
some story along the same lines you know

00:39:55 --> 00:40:00
there's the the genie that gives you

00:39:57 --> 00:40:02
three wishes and you know third wish is

00:39:59 --> 00:40:05
always you know please undo the first

00:40:01 --> 00:40:09
wo wishes because I messed up

00:40:04 --> 00:40:11
and you know and when author Samuel

00:40:08 --> 00:40:13
wrote his chest his checkup laying

00:40:10 --> 00:40:15
program which learned to play checkers

00:40:12 --> 00:40:16
considerably better than Martha Samuel

00:40:14 --> 00:40:20
could play and actually reached a pretty

00:40:15 --> 00:40:20
decent standard

00:40:19 --> 00:40:25
Norbert Wiener who was a one of the

00:40:22 --> 00:40:28
major mathematicians of the 20th century

00:40:24 --> 00:40:30
sort of a father of modern automation

00:40:27 --> 00:40:32
control systems

00:40:29 --> 00:40:35
you know he saw this and he basically

00:40:31 --> 00:40:38
extrapolated you know as Turing did and

00:40:34 --> 00:40:47
said okay this is how we could lose

00:40:37 --> 00:40:49
control and specifically that we have to

00:40:46 --> 00:40:51
be certain that the purpose we put into

00:40:49 --> 00:40:55
the machine as the purpose which we

00:40:50 --> 00:40:59
really desire and the problem is we

00:40:54 --> 00:41:02
can't do that right you mean we're not

00:40:58 --> 00:41:03
it's a very difficult to encode so to

00:41:01 --> 00:41:05
put our values on paper is really

00:41:02 --> 00:41:11
difficult or you're just saying it's

00:41:04 --> 00:41:14
impossible your line is writing this so

00:41:10 --> 00:41:18
it's it theoretically it's possible but

00:41:13 --> 00:41:21
in practice it's extremely unlikely that

00:41:17 --> 00:41:25
we could specify correctly in advance

00:41:20 --> 00:41:27
the full range of concerns of humanity

00:41:24 --> 00:41:29
that you talked about cultural

00:41:26 --> 00:41:31
transmission of values I think is how

00:41:28 --> 00:41:34
humans to human transmission of values

00:41:30 --> 00:41:37
happens right what we learned yeah I

00:41:33 --> 00:41:40
mean as we grow up we learn about the

00:41:36 --> 00:41:43
values that matter how things how things

00:41:39 --> 00:41:45
hould go what is reasonable to pursue

00:41:42 --> 00:41:47
and what isn't reasonable to pursue

00:41:44 --> 00:41:50
machines can learn in the same kind of

00:41:46 --> 00:41:52
way yeah so I think that what we need to

00:41:49 --> 00:41:55
do is to get away from this idea that

00:41:51 --> 00:41:57
you build an optimizing machine and you

00:41:54 --> 00:42:02
put the objective into it

00:41:56 --> 00:42:04
because if it's possible that you might

00:42:01 --> 00:42:05
put in a wrong objective and we already

00:42:03 --> 00:42:07
know this is possible because it's

00:42:04 --> 00:42:11
happened lots of times alright that

00:42:06 --> 00:42:14
means that the machine should never take

00:42:10 --> 00:42:15
an objective that's given as gospel

00:42:13 --> 00:42:18
truth

00:42:14 --> 00:42:22
because once it takes them the the

00:42:17 --> 00:42:25
objective is gospel truth alright then

00:42:21 --> 00:42:27
it's the leaves that whatever actions

00:42:24 --> 00:42:29
it's taking in pursuit of that objective

00:42:26 --> 00:42:31
are the correct things to do so you

00:42:28 --> 00:42:32
could be jumping up and down and saying

00:42:30 --> 00:42:35
no you know no no no you're gonna

00:42:31 --> 00:42:37
destroy the world but the machine knows

00:42:34 --> 00:42:38
what the true objective is and it's

00:42:36 --> 00:42:42
pursuing it and tough luck to you you

00:42:37 --> 00:42:44
know and this is not restricted to AI

00:42:41 --> 00:42:47
right this is you know I think many of

00:42:43 --> 00:42:49
the 20th century technologies right so

00:42:46 --> 00:42:50
in statistics you you minimize a loss

00:42:48 --> 00:42:53
function the loss function is

00:42:49 --> 00:42:55
exogenously specified in control theory

00:42:52 --> 00:42:57
ou minimize a cost function in

00:42:54 --> 00:43:00
operations research you maximize a

00:42:56 --> 00:43:02
reward function and so on so in all

00:42:59 --> 00:43:05
these disciplines this is how we

00:43:01 --> 00:43:09
conceive of the problem and it's the

00:43:04 --> 00:43:12
wrong problem because we cannot specify

00:43:08 --> 00:43:15
with certainty the correct objective

00:43:11 --> 00:43:18
right we need uncertainty we the machine

00:43:14 --> 00:43:20
to be uncertain about a subjective what

00:43:17 --> 00:43:23
it is that it's post it's my favorite

00:43:19 --> 00:43:25
idea of yours I've heard you say

00:43:22 --> 00:43:27
somewhere well I shouldn't pick

00:43:24 --> 00:43:31
favorites but it just sounds beautiful

00:43:26 --> 00:43:33
we need to teach machines humility yeah

00:43:30 --> 00:43:34
I mean it's a beautiful way to put it I

00:43:32 --> 00:43:39
love it

00:43:33 --> 00:43:41
hat they humble oh yeah they know that

00:43:38 --> 00:43:42
hey don't know what it is they're

00:43:40 --> 00:43:46
supposed to be doing and that those

00:43:41 --> 00:43:49
objectives I mean they exist they

00:43:45 --> 00:43:55
are within us but we may not be able to

00:43:48 --> 00:43:58
explicate them we may not even know you

00:43:54 --> 00:44:00
know how we want our future to go so

00:43:57 --> 00:44:04
exactly and the Machine you know a

00:43:59 --> 00:44:08
machine that's uncertain he's going to

00:44:03 --> 00:44:10
be deferential to us so if we say don't

00:44:07 --> 00:44:12
do that well now the machines learn

00:44:09 --> 00:44:14
something a bit more about our true

00:44:11 --> 00:44:17
objectives because something that it

00:44:13 --> 00:44:18
hought was reasonable in pursuit of our

00:44:16 --> 00:44:20
objectives turns out not to be so now

00:44:17 --> 00:44:23
it's learn something so it's going to

00:44:19 --> 00:44:24
defer because it wants to be doing what

00:44:22 --> 00:44:29
we really want

00:44:23 --> 00:44:32
and you know that that point I think is

00:44:28 --> 00:44:34
absolutely central to solving the

00:44:31 --> 00:44:38
control problem and it's a different

00:44:33 --> 00:44:40
kind of AI when you when you take away

00:44:37 --> 00:44:44
this idea that the objective is known

00:44:39 --> 00:44:48
then in fact a lot of the theoretical

00:44:43 --> 00:44:52
frameworks that we're so familiar with

00:44:47 --> 00:44:55
you know Markov decision processes goal

00:44:51 --> 00:44:58
based planning you know standard games

00:44:54 --> 00:45:02
research all of these techniques

00:44:57 --> 00:45:05
actually become inapplicable and you get

00:45:01 --> 00:45:10
a more complicated problem because

00:45:04 --> 00:45:14
now the interaction with the

00:45:09 --> 00:45:19
human becomes part of the problem

00:45:13 --> 00:45:22
because the human by making choices is

00:45:18 --> 00:45:24
giving you more information about the

00:45:21 --> 00:45:26
'true objective and that information

00:45:23 --> 00:45:30
helps you achieve the objective better

00:45:25 --> 00:45:31
and so that really means that you're

00:45:29 --> 00:45:33
mostly dealing with game theoretic

00:45:30 --> 00:45:35
problems where you've got the machine

00:45:32 --> 00:45:38
and the human and they're coupled

00:45:34 --> 00:45:41
together rather than a machine going off

00:45:37 --> 00:45:43
by itself with a fixed objective which

00:45:40 --> 00:45:47
is fascinating on the machine and the

00:45:42 --> 00:45:50
human level that we when you don't have

00:45:46 --> 00:45:52
an objective means you're together

00:45:49 --> 00:45:54
coming up with an objective I mean

00:45:51 --> 00:45:56
there's a lot of philosophy that you

00:45:53 --> 00:45:59
know you could argue that life doesn't

00:45:55 --> 00:46:01
really have meaning we we together agree

00:45:58 --> 00:46:05
on what gives it meaning and we kind of

00:46:00 --> 00:46:08
culturally create things that give why

00:46:04 --> 00:46:09
the heck we are in this earth anyway we

00:46:07 --> 00:46:10
together as a society create that

00:46:08 --> 00:46:13
meaning and you have to learn that

00:46:09 --> 00:46:15
objective and one of the biggest I

00:46:12 --> 00:46:16
thought that's what you were gonna go

00:46:14 --> 00:46:18
for a second

00:46:15 --> 00:46:20
one of the biggest troubles we've run

00:46:17 --> 00:46:22
into outside of statistics and machine

00:46:19 --> 00:46:26
learning and AI and just human

00:46:21 --> 00:46:28
civilization is when you look at I came

00:46:25 --> 00:46:30
from the south was born in the Soviet

00:46:27 --> 00:46:33
Union and the history of the 20th

00:46:29 --> 00:46:38
century we ran into the most trouble us

00:46:32 --> 00:46:40
humans when there was a certainty about

00:46:37 --> 00:46:42
he objective and you do whatever it

00:46:39 --> 00:46:43
akes to achieve that objective whether

00:46:41 --> 00:46:47
you talking about in Germany or

00:46:42 --> 00:46:49
communist Russia oh yeah I get the

00:46:46 --> 00:46:51
trouble I would say with you know

00:46:48 --> 00:46:54
corporations in fact some people argue

00:46:50 --> 00:46:56
that you know we don't have to look

00:46:53 --> 00:46:58
forward to a time when AI systems take

00:46:55 --> 00:47:00
over the world they already have and

00:46:57 --> 00:47:04
they call corporations right that

00:46:59 --> 00:47:07
corporations happen to be using people

00:47:03 --> 00:47:10
as components right now but they are

00:47:06 --> 00:47:12
ffectively algorithmic machines and

00:47:09 --> 00:47:16
they're optimizing an objective which is

00:47:11 --> 00:47:18
quarterly profit that isn't aligned with

00:47:15 --> 00:47:20
overall well-being of the human race and

00:47:17 --> 00:47:23
they are destroying the world they are

00:47:19 --> 00:47:26
primarily responsible for our inability

00:47:22 --> 00:47:28
to tackle climate change right so I

00:47:25 --> 00:47:30
think that's one way

00:47:27 --> 00:47:33
of thinking about what's going on with

00:47:29 --> 00:47:36
cooperations but I think the point

00:47:32 --> 00:47:39
you're making you is valid that there

00:47:35 --> 00:47:42
are there are many systems in the real

00:47:38 --> 00:47:44
world where we've sort of prematurely

00:47:41 --> 00:47:49
fixed on the objective and then

00:47:43 --> 00:47:52
decoupled the the machine from those

00:47:48 --> 00:47:54
that's supposed to be serving and I

00:47:51 --> 00:47:57
think you see this with government right

00:47:53 --> 00:47:59
government is supposed to be a machine

00:47:56 --> 00:48:03
that serves people but instead it tends

00:47:58 --> 00:48:06
to be taken over by people who have

00:48:02 --> 00:48:08
their own objective and use government

00:48:05 --> 00:48:11
o optimize that objective regardless of

00:48:07 --> 00:48:14
what people want do you have do you find

00:48:10 --> 00:48:16
appealing the idea of almost arguing

00:48:13 --> 00:48:19
machines where you have multiple I

00:48:15 --> 00:48:21
systems with a clear fixed objective we

00:48:18 --> 00:48:23
have in government the red team and the

00:48:20 --> 00:48:26
blue team that are very fixed on their

00:48:22 --> 00:48:28
objectives and they argue and it kind of

00:48:25 --> 00:48:34
maybe it would disagree but it kind of

00:48:27 --> 00:48:38
seems to make it work somewhat that the

00:48:33 --> 00:48:40
duality of it okay let's go a

00:48:37 --> 00:48:42
hundred years back when there was still

00:48:39 --> 00:48:44
was going on or at the founding of this

00:48:41 --> 00:48:48
country there was disagreement and that

00:48:43 --> 00:48:50
disagreement is where so there's a

00:48:47 --> 00:48:52
balance between certainty and forced

00:48:49 --> 00:48:57
humility because the power was

00:48:51 --> 00:49:00
distributed yeah I think that the the

00:48:56 --> 00:49:06
nature of debate and disagreement

00:48:59 --> 00:49:08
argument takes as a premise the idea

00:49:05 --> 00:49:11
that you could be wrong right which

00:49:07 --> 00:49:14
means that you're not necessarily

00:49:10 --> 00:49:18
absolutely convinced that your objective

00:49:13 --> 00:49:20
is the correct one right if you were

00:49:17 --> 00:49:21
absolutely Guiness there'll be no point

00:49:19 --> 00:49:23
in having any discussion or argument

00:49:20 --> 00:49:27
because you would never change your mind

00:49:22 --> 00:49:29
and there wouldn't be any any sort of

00:49:26 --> 00:49:31
synthesis or or anything like that so so

00:49:28 --> 00:49:35
I think you can think of argumentation

00:49:30 --> 00:49:37
as a as an implementation of a form of

00:49:34 --> 00:49:43
uncertain reasoning

00:49:36 --> 00:49:45
and you know I I've been reading

00:49:42 --> 00:49:50
recently about utilitarianism in the

00:49:44 --> 00:49:53
history of efforts to define in a sort

00:49:49 --> 00:49:53
of clear mathematical way a

00:49:53 --> 00:50:00
I feel like a formula for moral or

00:49:56 --> 00:50:02
political decision-making and it's

00:49:59 --> 00:50:04
really interesting that the parallels

00:50:01 --> 00:50:07
between the philosophical discussions

00:50:03 --> 00:50:10
going back 200 years and what you see

00:50:06 --> 00:50:14
now in discussions about existential

00:50:09 --> 00:50:16
risk because you it's almost exactly the

00:50:13 --> 00:50:18
same so someone would say okay well

00:50:15 --> 00:50:20
here's a formula for how we should make

00:50:17 --> 00:50:23
decisions right so utilitarianism

00:50:19 --> 00:50:25
you know each person has a utility

00:50:22 --> 00:50:28
function and then we make decisions to

00:50:24 --> 00:50:32
maximize the sum of everybody's utility

00:50:27 --> 00:50:34
mm-hmm right and then people point out

00:50:31 --> 00:50:38
well you know in that case the best

00:50:34 --> 00:50:41
policy is one that leads to the enormous

00:50:37 --> 00:50:43
lis vast population all of whom are

00:50:40 --> 00:50:46
living a life that's barely worth living

00:50:42 --> 00:50:49
right and this is called the repugnant

00:50:45 --> 00:50:51
conclusion and you know another version

00:50:48 --> 00:50:53
is you know that we we should maximize

00:50:50 --> 00:50:57
pleasure and that's what we mean by

00:50:52 --> 00:50:59
utility and then you'll get people

00:50:56 --> 00:51:00
ffectively saying well in that case you

00:50:58 --> 00:51:03
know we might as well just have everyone

00:50:59 --> 00:51:05
hooked up to a heroin drip yeah you know

00:51:02 --> 00:51:07
and they didn't use those words but that

00:51:04 --> 00:51:11
debate you know what's happening in the

00:51:06 --> 00:51:14
19th century as it is now about AI that

00:51:10 --> 00:51:17
if we get the formula wrong you know

00:51:13 --> 00:51:20
e're going to have AI systems working

00:51:16 --> 00:51:23
towards an outcome that in retrospect

00:51:19 --> 00:51:25
would be exactly wrong do you think

00:51:22 --> 00:51:28
there's it has beautifully put so the

00:51:24 --> 00:51:31
echoes are there but do you think I

00:51:27 --> 00:51:34
mean if you look at sam Harris is our

00:51:30 --> 00:51:40
imagination worries about the AI version

00:51:33 --> 00:51:43
of that because of the speed at which

00:51:39 --> 00:51:46
the things going wrong in the

00:51:42 --> 00:51:49
utilitarian context could happen yeah is

00:51:45 --> 00:51:50
that is that a worry for you yeah I I

00:51:48 --> 00:51:53
think that

00:51:49 --> 00:51:55
you know it in most cases not in all but

00:51:52 --> 00:51:58
you know if we if we have a wrong

00:51:54 --> 00:51:59
political idea you know we see it

00:51:57 --> 00:52:01
starting to go wrong and we're you know

00:51:58 --> 00:52:03
e're not completely stupid and so we

00:52:00 --> 00:52:05
said okay that was maybe that was a

00:52:02 --> 00:52:09
mistake

00:52:04 --> 00:52:11
let's try something different and and

00:52:08 --> 00:52:13
also we're very slow and inefficient

00:52:10 --> 00:52:15
about implementing these things and so

00:52:12 --> 00:52:17
n so you have to worry when you have

00:52:14 --> 00:52:20
corporations or political systems that

00:52:16 --> 00:52:23
are extremely efficient

00:52:19 --> 00:52:25
but when we look at AI systems or even

00:52:22 --> 00:52:29
just computers in general right they

00:52:24 --> 00:52:32
have this different characteristic from

00:52:28 --> 00:52:35
ordinary human activity in the past so

00:52:31 --> 00:52:37
let's say you were a surgeon you had

00:52:34 --> 00:52:40
some idea about how to do some operation

00:52:36 --> 00:52:41
right well and let's say you were wrong

00:52:39 --> 00:52:44
all right that that way of doing the

00:52:40 --> 00:52:47
operation would mostly kill the patient

00:52:43 --> 00:52:50
well you'd find out pretty quickly like

00:52:46 --> 00:52:52
after three maybe three or four tries

00:52:49 --> 00:52:54
right

00:52:51 --> 00:52:57
but

00:52:53 --> 00:53:01
hat isn't true for pharmaceutical

00:52:56 --> 00:53:03
companies because they don't do three or

00:53:00 --> 00:53:05
four operations they they manufacture

00:53:02 --> 00:53:07
three or four billion pills and they

00:53:04 --> 00:53:09
sell them and then they find out maybe

00:53:06 --> 00:53:11
six months or a year later that oh

00:53:08 --> 00:53:14
people are dying of heart attacks or

00:53:10 --> 00:53:17
getting cancer from this drug and so

00:53:13 --> 00:53:19
that's why we have the FDA right because

00:53:16 --> 00:53:22
of the scalability of pharmaceutical

00:53:18 --> 00:53:28
production and you know and there have

00:53:21 --> 00:53:31
been some unbelievably bad episodes in

00:53:27 --> 00:53:34
the history of pharmaceuticals and and

00:53:30 --> 00:53:36
adulteration of of products and so on

00:53:33 --> 00:53:38
that that have killed tens of thousands

00:53:35 --> 00:53:42
or paralysed hundreds of thousands of

00:53:37 --> 00:53:44
people now with computers we have that

00:53:41 --> 00:53:48
same scalability problem that you can

00:53:43 --> 00:53:50
sit there and type for I equals 1 to 5

00:53:47 --> 00:53:52
billion do right and all of a sudden

00:53:49 --> 00:53:55
you're having an impact on a global

00:53:51 --> 00:53:57
scale and yet we have no FDA right

00:53:54 --> 00:54:01
here's absolutely no controls at all

00:53:56 --> 00:54:03
it's over what a bunch of undergraduates

00:54:00 --> 00:54:06
with too much caffeine can do to the

00:54:02 --> 00:54:09
world and you know we look at what

00:54:05 --> 00:54:11
happened with Facebook well social media

00:54:08 --> 00:54:14
in general and click-through

00:54:10 --> 00:54:18
optimization so you have a simple

00:54:13 --> 00:54:21
feedback algorithm that's trying to just

00:54:17 --> 00:54:23
optimize click-through that sounds

00:54:20 --> 00:54:25
reasonable right because you don't want

00:54:22 --> 00:54:29
o be feeding people ads that they don't

00:54:24 --> 00:54:33
care about I'm not interested in

00:54:28 --> 00:54:38
and you might even think of that process

00:54:32 --> 00:54:41
as simply adjusting the the feeding of

00:54:37 --> 00:54:44
ads or news articles or whatever it

00:54:40 --> 00:54:48
might be to match people's preferences

00:54:43 --> 00:54:51
right which sounds like a good idea but

00:54:47 --> 00:54:55
in fact that isn't how the algorithm

00:54:50 --> 00:54:59
works right you make more money the

00:54:54 --> 00:55:01
algorithm makes more money if it could

00:54:58 --> 00:55:03
better predict what people are going to

00:55:00 --> 00:55:07
click on because then it can feed them

00:55:02 --> 00:55:09
exactly that right so the way to

00:55:06 --> 00:55:12
maximize click-through is actually to

00:55:08 --> 00:55:16
modify the people to make them more

00:55:11 --> 00:55:19
predictable and one way to do that is to

00:55:15 --> 00:55:23
feed them information which will change

00:55:18 --> 00:55:26
their behavior and preferences towards

00:55:22 --> 00:55:27
extremes that make them predictable now

00:55:25 --> 00:55:30
hatever is the nearest extreme or the

00:55:26 --> 00:55:33
nearest predictable point that's where

00:55:29 --> 00:55:35
you're going to end up

00:55:32 --> 00:55:38
the machines will force you there now

00:55:34 --> 00:55:40
and then I think there's a reasonable

00:55:37 --> 00:55:42
argument to say that this among other

00:55:39 --> 00:55:46
things is contributing to the

00:55:41 --> 00:55:46
destruction of democracy in the world

00:55:45 --> 00:55:53
and where was the oversight of this

00:55:50 --> 00:55:55
process where were the people saying

00:55:52 --> 00:55:58
okay you would like to apply this

00:55:54 --> 00:56:01
algorithm to five billion people on the

00:55:57 --> 00:56:02
face of the earth can you show me that

00:56:00 --> 00:56:05
it's safe can you show me that it won't

00:56:01 --> 00:56:07
have various kinds of negative effects

00:56:04 --> 00:56:11
no there was no one asking that question

00:56:06 --> 00:56:14
there was no one placed between you know

00:56:10 --> 00:56:17
the undergrads were too much caffeine

00:56:13 --> 00:56:20
and the human race well it's just they

00:56:16 --> 00:56:22
just did it and but some way outside the

00:56:19 --> 00:56:24
scope of my knowledge so economists

00:56:21 --> 00:56:27
would argue that the what is it the

00:56:23 --> 00:56:27
invisible hand so the the capitalist

00:56:26 --> 00:56:30
system

00:56:26 --> 00:56:32
it was the oversight so if you're going

00:56:29 --> 00:56:33
to corrupt society with whatever

00:56:31 --> 00:56:35
decision you make is a company then

00:56:32 --> 00:56:37
that's going to be reflected in people

00:56:34 --> 00:56:40
not using your product sort of one

00:56:36 --> 00:56:42
that's one model of oversight so we

00:56:39 --> 00:56:44
shall see but you know in the meantime

00:56:41 --> 00:56:49
you know that but you you might even

00:56:43 --> 00:56:51
have broken the political system that

00:56:48 --> 00:56:55
enables capitalism to function well

00:56:50 --> 00:56:57
you've changed it and so we should see

00:56:54 --> 00:57:00
yeah change changes often painful so my

00:56:56 --> 00:57:01
question is uh absolutely it's

00:56:59 --> 00:57:03
fascinating

00:57:00 --> 00:57:05
you're absolutely right that there is

00:57:02 --> 00:57:09
ZERO oversight on algorithms that can

00:57:04 --> 00:57:13
have a profound civilization changing

00:57:08 --> 00:57:16
effect so do you think it's possible I

00:57:12 --> 00:57:19
mean I haven't have you seen government

00:57:15 --> 00:57:23
so do you think it's possible to create

00:57:18 --> 00:57:25
regulatory bodies oversight over AI

00:57:22 --> 00:57:28
algorithms which are inherently such

00:57:24 --> 00:57:33
cutting edge set of ideas and

00:57:27 --> 00:57:34
technologies yeah but I think it takes

00:57:32 --> 00:57:37
time

00:57:33 --> 00:57:39
to figure out what kind of oversight

00:57:36 --> 00:57:42
what kinds of controls I mean took time

00:57:38 --> 00:57:43
to design the FDA regime you know and

00:57:41 --> 00:57:44
some people still don't like it and they

00:57:42 --> 00:57:48
want to fix it

00:57:43 --> 00:57:51
and I think there are clear ways that it

00:57:47 --> 00:57:53
could be improved but the whole notion

00:57:50 --> 00:57:56
that you have stage 1 stage 2 stage 3

00:57:52 --> 00:57:59
and here are the criteria for what you

00:57:55 --> 00:58:01
have to do to pass a stage 1 trial right

00:57:58 --> 00:58:02
we haven't even thought about what those

00:58:00 --> 00:58:04
would be

00:58:01 --> 00:58:07
for algorithms so I mean I think there

00:58:03 --> 00:58:11
are there are things we could do right

00:58:06 --> 00:58:14
now with regard to bias for example we

00:58:10 --> 00:58:18
have a pretty good technical handle

00:58:13 --> 00:58:21
on how to detect algorithms that are

00:58:17 --> 00:58:26
propagating bias that exists in data

00:58:20 --> 00:58:27
sets how to D by us those algorithms and

00:58:25 --> 00:58:31
even what it's going to cost you to

00:58:26 --> 00:58:34
do that so I think we could start having

00:58:30 --> 00:58:37
some standards on that I think there are

00:58:33 --> 00:58:40
things to do with

00:58:36 --> 00:58:44
impersonation of falsification that we

00:58:39 --> 00:58:46
could we could work on so I thanks ya or

00:58:43 --> 00:58:50
you know in a very simple point so

00:58:45 --> 00:58:54
impersonation ISM is a machine acting as

00:58:49 --> 00:58:57
if it was a person I can't see a real

00:58:53 --> 00:58:59
justification for why we shouldn't

00:58:56 --> 00:59:04
insist that machines self-identify as

00:58:58 --> 00:59:07
machines you know where is the social

00:59:03 --> 00:59:09
benefit in in fooling people into

00:59:06 --> 00:59:12
thinking that this is really a person

00:59:08 --> 00:59:15
when it isn't you know I I don't mind if

00:59:11 --> 00:59:16
it uses a human-like voice that's easy

00:59:14 --> 00:59:18
to understand that's fine

00:59:15 --> 00:59:21
but it should just say I'm a machine in

00:59:17 --> 00:59:21
some some form

00:59:20 --> 00:59:26
people are speaking to that I would

00:59:23 --> 00:59:28
think relatively obvious factors I think

00:59:25 --> 00:59:31
mostly yeah I mean there is actually a

00:59:27 --> 00:59:33
law in California that bans

00:59:30 --> 00:59:37
impersonation but only in certain

00:59:32 --> 00:59:40
restricted circumstances so for the

00:59:36 --> 00:59:43
purpose of engaging in a for Geling

00:59:39 --> 00:59:47
transaction and for the purpose of

00:59:42 --> 00:59:48
modifying someone's voting behavior so

00:59:46 --> 00:59:53
those are those are the circumstances

00:59:47 --> 00:59:55
where machines have to self-identify but

00:59:52 --> 00:59:58
I think this is you know arguably it

00:59:54 --> 01:00:01
should be in all circumstances and then

00:59:57 --> 01:00:04
when you talk about deep fakes you know

01:00:00 --> 01:00:07
e're just beginning but already it's

01:00:03 --> 01:00:10
possible to make a movie of anybody

01:00:06 --> 01:00:13
saying anything in ways that are pretty

01:00:09 --> 01:00:14
hard to detect including yourself

01:00:12 --> 01:00:16
because you're on camera now and your

01:00:13 --> 01:00:18
voice is coming through with high

01:00:15 --> 01:00:20
resolution so you could take what I'm

01:00:17 --> 01:00:21
saying and replaces it with it pretty

01:00:19 --> 01:00:23
much anything else you wanted me to be

01:00:20 --> 01:00:27
saying yeah and even it will change my

01:00:22 --> 01:00:27
lips and expression expressions to fit

01:00:26 --> 01:00:36
and there's actually not much in the way

01:00:31 --> 01:00:38
of real legal protection against that I

01:00:35 --> 01:00:42
think in the commercial area you could

01:00:38 --> 01:00:43
say yeah that's you're using my brand

01:00:41 --> 01:00:46
so on that there there are rules

01:00:42 --> 01:00:50
about that but in the political sphere I

01:00:45 --> 01:00:52
think it's at the moment it's you know

01:00:49 --> 01:00:56
anything goes so like that could be

01:00:51 --> 01:00:59
really really damaging and let me just

01:00:55 --> 01:01:03
ry to make not an argument but try to

01:00:58 --> 01:01:07
look back at history and say something

01:01:02 --> 01:01:10
dark in essence is while regulation

01:01:06 --> 01:01:11
seems to be oversight seems to be

01:01:09 --> 01:01:13
xactly the right thing to do here

01:01:10 --> 01:01:16
it seems that human beings what they

01:01:12 --> 01:01:17
naturally do is they wait for something

01:01:15 --> 01:01:18
to go wrong if you're talking about

01:01:16 --> 01:01:21
nuclear weapons

01:01:17 --> 01:01:24
you can't talk about nuclear weapons

01:01:20 --> 01:01:26
being dangerous until somebody actually

01:01:23 --> 01:01:30
like the United States drops the bomb or

01:01:26 --> 01:01:35
Chernobyl melting do you think we will

01:01:29 --> 01:01:37
have to wait for things going wrong in a

01:01:34 --> 01:01:40
way that's obviously damaging to society

01:01:36 --> 01:01:44
not an existential risk but obviously

01:01:39 --> 01:01:48
damaging or do you have faith that I I

01:01:43 --> 01:01:52
hope not but I mean I think we do have

01:01:47 --> 01:01:54
to look at history and when you know so

01:01:51 --> 01:01:57
the two examples you gave nuclear

01:01:53 --> 01:02:00
weapons and nuclear power are very very

01:01:56 --> 01:02:05
interesting because you know in nuclear

01:01:59 --> 01:02:08
weapons we knew in the early years of

01:02:04 --> 01:02:10
the 20th century that atoms contained a

01:02:07 --> 01:02:12
huge amount of energy right we had e

01:02:09 --> 01:02:14
quals mc-squared we knew the the mass

01:02:11 --> 01:02:18
differences between the different atoms

01:02:13 --> 01:02:18
and their components and we knew that

01:02:17 --> 01:02:23
you might be able to make an incredibly

01:02:20 --> 01:02:27
powerful explosive so HG Wells wrote

01:02:22 --> 01:02:29
science fiction book I think in 1912

01:02:26 --> 01:02:32
Frederick Soddy who was the guy who

01:02:28 --> 01:02:35
discovered isotopes so Nobel Prize

01:02:31 --> 01:02:38
winner he gave a speech in 1915 saying

01:02:34 --> 01:02:38
that

01:02:38 --> 01:02:43
his new explosive would be the

01:02:40 --> 01:02:47
quivalent of 150 tons of dynamite which

01:02:42 --> 01:02:49
turns out to be about right and you know

01:02:46 --> 01:02:52
Kenton this was in World War one right

01:02:48 --> 01:02:56
so he was imagining how much worse the

01:02:51 --> 01:02:57
world would be if we were using that

01:02:55 --> 01:03:00
kind of explosive but the physics

01:02:56 --> 01:03:04
establishment simply refused to believe

01:02:59 --> 01:03:06
that these things could be made

01:03:03 --> 01:03:09
including the people who are making it

01:03:05 --> 01:03:11
well so they were doing the nuclear

01:03:08 --> 01:03:13
physics I mean eventually were the ones

01:03:10 --> 01:03:17
who made it and Rockwell for me or

01:03:12 --> 01:03:21
whoever well so up to the the

01:03:16 --> 01:03:23
development was was mostly theoretical

01:03:20 --> 01:03:26
so it was people using sort of primitive

01:03:22 --> 01:03:29
kinds of particle acceleration and doing

01:03:25 --> 01:03:31
experiments at the at the level of

01:03:28 --> 01:03:34
single particles or collections of

01:03:30 --> 01:03:34
particles they they they want

01:03:33 --> 01:03:39
yet thinking about how to actually make

01:03:36 --> 01:03:40
a bomb or anything like that they but

01:03:38 --> 01:03:43
hey knew the energy was there and they

01:03:39 --> 01:03:44
figured if they understood it better it

01:03:42 --> 01:03:47
might be possible but the physics

01:03:43 --> 01:03:50
establishment their view and I think

01:03:46 --> 01:03:52
because they did not want it to be true

01:03:49 --> 01:03:57
their view was that it could not be true

01:03:51 --> 01:04:00
that this could not provide a way to

01:03:56 --> 01:04:03
make a super weapon and you know there

01:03:59 --> 01:04:05
was this famous speech given by

01:04:02 --> 01:04:09
Rutherford who was the sort of leader of

01:04:04 --> 01:04:13
nuclear physics and I was on September

01:04:08 --> 01:04:15
11th 1933 and he he said you know anyone

01:04:12 --> 01:04:18
who talks about the possibility of

01:04:14 --> 01:04:21
obtaining energy from transformation of

01:04:17 --> 01:04:25
atoms is talking complete moonshine and

01:04:20 --> 01:04:28
the next the next morning Leo Szilard

01:04:24 --> 01:04:30
read about that speech and then invented

01:04:27 --> 01:04:33
the nuclear chain reaction and so as

01:04:29 --> 01:04:36
oon as he invented he soon as he had

01:04:32 --> 01:04:38
that idea that you could make a chain

01:04:35 --> 01:04:40
reaction with neutrons because neutrons

01:04:37 --> 01:04:41
were not repelled by the nucleus so they

01:04:39 --> 01:04:45
could enter the nucleus and then

01:04:40 --> 01:04:49
continue the reaction as soon as he has

01:04:44 --> 01:04:53
that idea he instantly realized that the

01:04:48 --> 01:04:56
world was in deep doo-doo because this

01:04:52 --> 01:04:59
1933 right you know Hitler had

01:04:55 --> 01:05:02
recently come to power in Germany

01:04:58 --> 01:05:06
Zil odd was in London and eventually

01:05:01 --> 01:05:11
became a refugee and and came to the US

01:05:05 --> 01:05:14
and the in the process of having the

01:05:10 --> 01:05:16
idea about the chain reaction he figured

01:05:13 --> 01:05:19
out basically how to make a bomb and

01:05:15 --> 01:05:21
also how to make a reactor and he

01:05:18 --> 01:05:26
patented the reactor

01:05:20 --> 01:05:28
2:34 but because of the situation the

01:05:25 --> 01:05:30
great power conflict situation that he

01:05:27 --> 01:05:37
could see happening he kept that a

01:05:29 --> 01:05:41
secret and so between then and the

01:05:36 --> 01:05:46
beginning of World War two people were

01:05:40 --> 01:05:49
working including the Germans on how to

01:05:45 --> 01:05:52
actually create Neutron sources right

01:05:48 --> 01:05:55
what specific fission reactions would

01:05:51 --> 01:05:59
produce neutrons of the right energy to

01:05:54 --> 01:06:01
continue the reaction and and that was

01:05:58 --> 01:06:04
demonstrated in Germany I think in 1938

01:06:00 --> 01:06:09
if I remember correctly the first

01:06:03 --> 01:06:13
nuclear weapon patent was 1939 by the

01:06:08 --> 01:06:15
French so this was actually you know

01:06:12 --> 01:06:17
this was actually

01:06:14 --> 01:06:20
going on you know well before World War

01:06:16 --> 01:06:22
two really got going and then you know

01:06:19 --> 01:06:25
the British probably had the most

01:06:21 --> 01:06:27
advanced capability in this area but for

01:06:24 --> 01:06:29
safety reasons among others and blush

01:06:26 --> 01:06:32
which is sort of just resources they

01:06:28 --> 01:06:34
moved the program from Britain to the US

01:06:31 --> 01:06:40
and then that became Manhattan Project

01:06:33 --> 01:06:44
so the the the reason why we couldn't

01:06:39 --> 01:06:47
have any kind of oversight of nuclear

01:06:43 --> 01:06:50
weapons and nuclear technology was

01:06:46 --> 01:06:55
because we were basically already in an

01:06:49 --> 01:06:57
arms race in a war and but you you've

01:06:54 --> 01:07:01
mentioned then in the 20s and 30s so

01:06:56 --> 01:07:03
what are the echoes yeah the way you've

01:07:00 --> 01:07:05
described this story I mean there's

01:07:02 --> 01:07:07
clearly echoes why do you think most a I

01:07:04 --> 01:07:09
researchers

01:07:06 --> 01:07:12
folks who are really close to the metal

01:07:08 --> 01:07:13
they really are not concerned about it

01:07:11 --> 01:07:15
and they don't think about it

01:07:12 --> 01:07:18
whether they don't want to think about

01:07:14 --> 01:07:22
it it's but what are the yeah why do you

01:07:17 --> 01:07:24
think that is what are the echoes of the

01:07:21 --> 01:07:28
nuclear situation to the current

01:07:23 --> 01:07:32
situation and what can we do about it I

01:07:27 --> 01:07:35
think there is a you know a kinda modak

01:07:31 --> 01:07:38
motivated cognition which is a term in

01:07:34 --> 01:07:40
psychology means that you believe what

01:07:37 --> 01:07:45
you would like to be true rather than

01:07:39 --> 01:07:48
what is true and you know it's it's

01:07:44 --> 01:07:51
unsettling to think that what you're

01:07:47 --> 01:07:54
working on might be the end of the human

01:07:50 --> 01:07:56
race obviously so you would rather

01:07:53 --> 01:07:58
instantly deny it

01:07:55 --> 01:08:02
and come up with some reason why it

01:07:57 --> 01:08:05
couldn't be true and the you know I have

01:08:01 --> 01:08:07
I collected a long list of reasons that

01:08:04 --> 01:08:10
extremely intelligent competent AI

01:08:06 --> 01:08:14
scientists have come up with for why we

01:08:09 --> 01:08:17
shouldn't worry about this you know for

01:08:13 --> 01:08:19
example calculators are super human at

01:08:16 --> 01:08:20
arithmetic and they haven't taken over

01:08:18 --> 01:08:23
the world so there's nothing to worry

01:08:19 --> 01:08:26
about well okay my five-year-old you

01:08:22 --> 01:08:29
know could have figured out why that was

01:08:25 --> 01:08:34
an unreasonable and and really quite

01:08:28 --> 01:08:38
weak argument you know another one was

01:08:33 --> 01:08:41
you know you while it's theoretically

01:08:37 --> 01:08:44
possible that you could have superhuman

01:08:40 --> 01:08:46
AI destroy the world you know it's also

01:08:43 --> 01:08:48
theoretically possible that a black hole

01:08:45 --> 01:08:51
could materialize right next to the

01:08:47 --> 01:08:53
arth and destroy humanity I mean yes

01:08:50 --> 01:08:56
it's theoretically possible quantum

01:08:52 --> 01:08:59
theoretically extremely unlikely that it

01:08:55 --> 01:09:01
would just materialize right there but

01:08:58 --> 01:09:04
hat's a completely bogus analogy

01:09:00 --> 01:09:06
because you know if the whole physics

01:09:03 --> 01:09:07
community on earth was working to

01:09:05 --> 01:09:11
materialize a black hole in near Earth

01:09:06 --> 01:09:13
orbit right wouldn't you ask them is

01:09:10 --> 01:09:15
that a good idea is that gonna be safe

01:09:12 --> 01:09:19
you know what if you succeed all right

01:09:14 --> 01:09:22
and that's the thing right the AI

01:09:18 --> 01:09:26
is sort of refused to ask itself what if

01:09:21 --> 01:09:28
you succeed and initially I think that

01:09:25 --> 01:09:32
was because it was too hard but you know

01:09:27 --> 01:09:35
Alan Turing asked himself that and he

01:09:31 --> 01:09:37
said we'd be toast right if we were

01:09:34 --> 01:09:39
lucky we might be able to switch off the

01:09:36 --> 01:09:43
power but probably we'd be toast but

01:09:38 --> 01:09:46
here's also an aspect that because

01:09:42 --> 01:09:50
we're not exactly sure what the future

01:09:45 --> 01:09:52
holds it's not clear exactly so

01:09:49 --> 01:09:57
technically what to worry about sort of

01:09:51 --> 01:09:59
how things go wrong and so there is

01:09:56 --> 01:10:01
omething it feels like maybe you can

01:09:58 --> 01:10:04
correct me if I'm wrong but there's

01:10:00 --> 01:10:07
omething paralyzing about worrying

01:10:03 --> 01:10:09
about something that logically is

01:10:06 --> 01:10:12
inevitable but you don't really know

01:10:08 --> 01:10:14
hat that will look like yeah I think

01:10:11 --> 01:10:18
that's that's it's a reasonable point

01:10:13 --> 01:10:20
and you know the you know it's certainly

01:10:17 --> 01:10:22
in terms of existential risks it's

01:10:19 --> 01:10:24
different from you know asteroid

01:10:21 --> 01:10:27
collides with the earth right right

01:10:23 --> 01:10:29
which again is quite possible you know

01:10:26 --> 01:10:31
it's happened in the past it'll probably

01:10:28 --> 01:10:34
happen again we don't right we don't

01:10:30 --> 01:10:35
know right now but if we did detect an

01:10:33 --> 01:10:39
asteroid that was going to hit the earth

01:10:34 --> 01:10:41
in 75 years time we'd certainly be doing

01:10:38 --> 01:10:43
something about it well it's clear

01:10:40 --> 01:10:45
there's got big rocks we'll probably

01:10:42 --> 01:10:46
have a meeting you see what do we do

01:10:44 --> 01:10:48
about the big rock

01:10:45 --> 01:10:50
will they I write with a I I mean the

01:10:47 --> 01:10:53
very few people who think it's not gonna

01:10:49 --> 01:10:54
happen within the next 75 years

01:10:52 --> 01:10:57
I know rod Brooks doesn't think it's

01:10:53 --> 01:10:59
gonna happen maybe and ruing doesn't

01:10:56 --> 01:11:03
hink it's happened but you know a lot

01:10:58 --> 01:11:05
of the people who work day-to-day you

01:11:02 --> 01:11:07
know as you say at the rock face

01:11:04 --> 01:11:11
they think it's gonna happen I think the

01:11:06 --> 01:11:13
median estimate from AI researchers is

01:11:10 --> 01:11:15
omewhere in forty to fifty years from

01:11:12 --> 01:11:17
now or maybe a little you know I

01:11:14 --> 01:11:20
think in Asia they think it's gonna be

01:11:16 --> 01:11:24
ven faster than that I am I'm a little

01:11:19 --> 01:11:26
bit more conservative I think probably

01:11:23 --> 01:11:28
take longer than that but I think it's

01:11:25 --> 01:11:30
you know as happened with nuclear

01:11:27 --> 01:11:31
weapons

01:11:29 --> 01:11:32
well I went overnight it can happen

01:11:30 --> 01:11:34
overnight that you have these

01:11:31 --> 01:11:37
breakthroughs and we need more than one

01:11:33 --> 01:11:40
breakthrough but you know the it's on

01:11:36 --> 01:11:42
the order of half a dozen this is a very

01:11:39 --> 01:11:47
rough scale but so half a dozen

01:11:41 --> 01:11:49
breakthroughs of that nature it would

01:11:46 --> 01:11:53
have to happen for us to reach the

01:11:48 --> 01:11:55
superhuman AI but the you know the AI

01:11:52 --> 01:11:58
research community is vast now the

01:11:54 --> 01:12:01
massive investments from governments

01:11:57 --> 01:12:03
from corporations tons of really really

01:12:00 --> 01:12:05
smart people you know you just have to

01:12:02 --> 01:12:07
look at the rate of progress in

01:12:04 --> 01:12:10
different areas of AI to see that things

01:12:06 --> 01:12:13
are moving pretty fast so to say oh it's

01:12:09 --> 01:12:16
just gonna be thousands of years I don't

01:12:12 --> 01:12:21
see any basis for that you know I see

01:12:15 --> 01:12:25
you know for example the the Stanford

01:12:20 --> 01:12:27
hundred year AI project right which is

01:12:24 --> 01:12:31
upposed to be sort of you know the

01:12:26 --> 01:12:32
serious establishment view their most

01:12:30 --> 01:12:34
recent report actually said it's

01:12:31 --> 01:12:38
probably not even possible

01:12:33 --> 01:12:41
Wow right which if you want a perfect

01:12:37 --> 01:12:44
example of people in denial

01:12:40 --> 01:12:48
that's it because you know for the whole

01:12:43 --> 01:12:50
history of AI we've been saying to

01:12:47 --> 01:12:51
philosophers who said it wasn't possible

01:12:49 --> 01:12:52
well you have no idea what you're

01:12:50 --> 01:12:55
talking about of course it's possible

01:12:51 --> 01:12:57
right give me an give me an argument for

01:12:54 --> 01:13:00
why it couldn't happen and there isn't

01:12:56 --> 01:13:02
one all right and now because people are

01:12:59 --> 01:13:04
worried that maybe a oh it might get a

01:13:01 --> 01:13:07
bad name or or I just don't want to

01:13:03 --> 01:13:08
think about this they're saying okay

01:13:06 --> 01:13:10
well of course it's not really possible

01:13:07 --> 01:13:13
you know and we imagine right imagine if

01:13:09 --> 01:13:16
you know the the leaders of the cancer

01:13:12 --> 01:13:18
biology community got up and said well

01:13:15 --> 01:13:23
you know of course curing cancer it's

01:13:17 --> 01:13:29
not really possible complete outrage and

01:13:22 --> 01:13:35
ismay and you know I I find this really

01:13:28 --> 01:13:36
a strange phenomenon so okay so if you

01:13:34 --> 01:13:38
accept it as possible

01:13:35 --> 01:13:41
and if you accept that it's probably

01:13:37 --> 01:13:44
going to happen

01:13:40 --> 01:13:47
the point that you're making that you

01:13:43 --> 01:13:50
know how does it go wrong a valid

01:13:46 --> 01:13:52
question without that without an answer

01:13:49 --> 01:13:54
to that question then you stuck with

01:13:51 --> 01:13:55
what I call the gorilla problem which is

01:13:53 --> 01:13:58
you know the problem that the gorillas

01:13:54 --> 01:14:01
face right they made something more

01:13:57 --> 01:14:03
intelligent than them namely us a few

01:14:00 --> 01:14:06
million years ago and now now they're in

01:14:02 --> 01:14:09
deep doo-doo yeah so there's really

01:14:05 --> 01:14:10
nothing they can do they've lost the

01:14:08 --> 01:14:12
control theater they failed to solve the

01:14:09 --> 01:14:16
control problem of controlling humans

01:14:11 --> 01:14:19
and so they've lost so we don't want to

01:14:15 --> 01:14:21
be in that situation and if the gorillas

01:14:18 --> 01:14:24
problem is is the only formulation you

01:14:20 --> 01:14:26
have there's not a lot you can do right

01:14:23 --> 01:14:28
other than to say okay we should try to

01:14:25 --> 01:14:31
stop you know we should just not make

01:14:27 --> 01:14:33
the humans or right in this case not

01:14:30 --> 01:14:35
make the AI and I think that's really

01:14:32 --> 01:14:39
hard to do

01:14:34 --> 01:14:43
- I'm not actually proposing that that's

01:14:38 --> 01:14:45
a feasible course of action I also think

01:14:42 --> 01:14:49
that you know if properly control a I

01:14:44 --> 01:14:53
could be incredibly beneficial so the

01:14:48 --> 01:14:55
but it seems to me that there's a

01:14:52 --> 01:14:58
consensus that one of the

01:14:54 --> 01:15:01
major failure modes is this loss of

01:14:57 --> 01:15:04
control that we create AI systems that

01:15:00 --> 01:15:09
are pursuing incorrect objectives and

01:15:03 --> 01:15:11
because the AI system believes it knows

01:15:08 --> 01:15:13
what the objective is it has no

01:15:10 --> 01:15:16
incentive to listen to us anymore

01:15:12 --> 01:15:20
so to speak right it it's just carrying

01:15:15 --> 01:15:24
out the the strategy that it it has

01:15:19 --> 01:15:27
computed as being the optimal solution

01:15:23 --> 01:15:30
and you know it may be that in the

01:15:26 --> 01:15:33
process it needs to acquire more

01:15:29 --> 01:15:36
sources to increase the possibility of

01:15:32 --> 01:15:38
success or prevent various failure modes

01:15:35 --> 01:15:42
by defending itself against interference

01:15:37 --> 01:15:45
and so that collection of problems I

01:15:41 --> 01:15:51
think is something we can address yes

01:15:44 --> 01:15:55
that the other problems are roughly

01:15:50 --> 01:15:57
speaking you know misuse right so even

01:15:54 --> 01:15:59
if we solve the control problem we make

01:15:56 --> 01:16:02
perfectly safe controllable AI systems

01:15:58 --> 01:16:03
well why you know why does dr. evil

01:16:01 --> 01:16:05
going to use those right he wants to

01:16:02 --> 01:16:07
just take over the world and he'll make

01:16:04 --> 01:16:10
unsafe AI system said but then get out

01:16:06 --> 01:16:12
of control so that's one problem which

01:16:09 --> 01:16:14
is sort of a you know a partly a

01:16:11 --> 01:16:19
policing problem

01:16:13 --> 01:16:21
partly a-- a sort of a cultural problem

01:16:18 --> 01:16:24
for the profession of how we teach

01:16:20 --> 01:16:26
people what kinds of AI systems are safe

01:16:23 --> 01:16:28
you talk about autonomous weapon system

01:16:25 --> 01:16:30
and how pretty much everybody agrees

01:16:27 --> 01:16:33
there's too many ways that that can go

01:16:29 --> 01:16:35
horribly wrong if this great slaughter

01:16:32 --> 01:16:37
BOTS movie that kind of illustrates that

01:16:34 --> 01:16:40
beautifully I want to talk that's

01:16:36 --> 01:16:41
another there's another topic I I'm

01:16:39 --> 01:16:43
happy talking about the I just want to

01:16:40 --> 01:16:47
mention that what I see is the third

01:16:42 --> 01:16:50
major failure mode which is overuse not

01:16:46 --> 01:16:53
so much misuse but overuse of AI

01:16:49 --> 01:16:55
that we become overly dependent so I

01:16:52 --> 01:16:57
call this the wooly problems if you seen

01:16:54 --> 01:17:00
wall-e the movie all right all the

01:16:56 --> 01:17:02
humans are on the spaceship and the

01:16:59 --> 01:17:05
machines look after everything for them

01:17:01 --> 01:17:08
and they just watch TV and drink big

01:17:04 --> 01:17:11
ulps and they're all sort of obese and

01:17:07 --> 01:17:14
stupid and they sort of totally lost any

01:17:10 --> 01:17:14
notion of human autonomy and

01:17:14 --> 01:17:22
you know so a in effect right this would

01:17:18 --> 01:17:25
happen like the slow boiling frog right

01:17:21 --> 01:17:27
we would gradually turn over more and

01:17:24 --> 01:17:28
more of the management of our

01:17:26 --> 01:17:31
civilization to machines as we are

01:17:27 --> 01:17:34
already doing in this you know this if

01:17:30 --> 01:17:37
this process continues you know we sort

01:17:33 --> 01:17:40
of gradually switch from sort of being

01:17:36 --> 01:17:44
the Masters of Technology to just being

01:17:39 --> 01:17:45
the guests right so so we become guests

01:17:43 --> 01:17:48
on a cruise ship you know which is fine

01:17:44 --> 01:17:51
for a week but not not further the rest

01:17:47 --> 01:17:55
of eternity right you know and it's

01:17:50 --> 01:17:58
almost irreversible right once you once

01:17:54 --> 01:18:00
you lose the incentive to for example

01:17:57 --> 01:18:04
you know learn to be an engineer or a

01:17:59 --> 01:18:07
doctor or a sanitation operative or or

01:18:03 --> 01:18:10
any other of the the infinitely many

01:18:06 --> 01:18:11
ways that we maintain and propagate our

01:18:09 --> 01:18:14
civilization

01:18:10 --> 01:18:16
you know if you if you don't have the

01:18:13 --> 01:18:19
incentive to do any of that you won't

01:18:15 --> 01:18:21
and then it's really hard to recover and

01:18:18 --> 01:18:22
of course there's just one of the

01:18:20 --> 01:18:24
technologies that could that third

01:18:21 --> 01:18:27
failure mode result in that there's

01:18:23 --> 01:18:30
probably other technology in general

01:18:26 --> 01:18:32
detaches us from it does a bit but the

01:18:29 --> 01:18:36
the difference is that in terms of

01:18:31 --> 01:18:38
the knowledge to to run our civilization

01:18:35 --> 01:18:40
you know up to now we've had no

01:18:37 --> 01:18:43
alternative but to put it into people's

01:18:39 --> 01:18:45
heads right and if you oh it's not we're

01:18:42 --> 01:18:47
with Google I mean so software in

01:18:44 --> 01:18:50
general so I probably if computers in

01:18:46 --> 01:18:52
general but but the you know the

01:18:49 --> 01:18:54
knowledge of how you know how a

01:18:51 --> 01:18:57
sanitation system works you know that's

01:18:53 --> 01:18:59
an the AI has to understand that it's no

01:18:56 --> 01:19:01
good putting it into Google so I mean we

01:18:58 --> 01:19:04
've always put knowledge in on paper

01:19:00 --> 01:19:06
but paper doesn't run our civilization

01:19:03 --> 01:19:08
it only runs when it goes from the paper

01:19:05 --> 01:19:11
into people's heads again right so we've

01:19:07 --> 01:19:14
always propagated civilization through

01:19:10 --> 01:19:16
uman minds and we've spent about a

01:19:13 --> 01:19:19
trillion person years doing that

01:19:15 --> 01:19:21
literature right you you can work it out

01:19:18 --> 01:19:22
yeah but right is about just over a

01:19:20 --> 01:19:26
hundred billion people who've ever lived

01:19:21 --> 01:19:28
and each of them has spent about ten

01:19:25 --> 01:19:30
years learning stuff and to keep their

01:19:27 --> 01:19:32
civilization going and so that's a

01:19:29 --> 01:19:34
trillion person years we put into this

01:19:31 --> 01:19:36
effort beautiful way to describe all of

01:19:33 --> 01:19:38
civilization and now we're you know

01:19:35 --> 01:19:40
e're danger of throwing that away so

01:19:37 --> 01:19:43
this is a problem that AI console it's

01:19:39 --> 01:19:46
not a technical problem it's a you know

01:19:42 --> 01:19:49
if we do our job right the AI systems

01:19:45 --> 01:19:51
will say you know the human race doesn't

01:19:48 --> 01:19:54
in the long run want to be passengers in

01:19:50 --> 01:19:56
a cruise ship the human race wants

01:19:53 --> 01:20:00
autonomy this is part of human

01:19:55 --> 01:20:02
preferences so we the AI systems are not

01:19:59 --> 01:20:04
going to do this stuff for you you've

01:20:01 --> 01:20:06
got to do it for yourself right I'm not

01:20:03 --> 01:20:09
going to carry you to the top of Everest

01:20:05 --> 01:20:11
in an autonomous helicopter you have to

01:20:08 --> 01:20:14
climb it if you want to get the benefit

01:20:10 --> 01:20:16
and so on so

01:20:13 --> 01:20:19
but I'm afraid that because we are

01:20:15 --> 01:20:23
short-sighted and lazy we're gonna

01:20:18 --> 01:20:25
override the AI systems and and there's

01:20:22 --> 01:20:28
an amazing short story that I recommend

01:20:24 --> 01:20:31
to everyone that I talk to about this

01:20:27 --> 01:20:35
called the machine stops

01:20:30 --> 01:20:37
written in 1909 by Ian Foster who you

01:20:34 --> 01:20:39
know wrote novels about the British

01:20:36 --> 01:20:41
Empire and sort of things that became

01:20:38 --> 01:20:44
costume dramas on the BBC but he wrote

01:20:40 --> 01:20:48
this one science fiction story which is

01:20:43 --> 01:20:52
an amazing vision of the future it has

01:20:47 --> 01:20:54
basically iPads it has video

01:20:51 --> 01:20:57
conferencing it has MOOCs

01:20:53 --> 01:21:00
it has computer and computer induced

01:20:56 --> 01:21:01
obesity I mean literally the whole thing

01:20:59 --> 01:21:04
it's what people spend their time doing

01:21:00 --> 01:21:06
is giving online courses or listening to

01:21:03 --> 01:21:08
nline courses and talking about ideas

01:21:05 --> 01:21:11
but they never get out there in the real

01:21:07 --> 01:21:13
world that they don't really have a lot

01:21:10 --> 01:21:14
of face-to-face contact everything is

01:21:12 --> 01:21:16
done online

01:21:13 --> 01:21:19
you know so all the things we're

01:21:15 --> 01:21:21
worrying about now were described in

01:21:18 --> 01:21:23
this story and and then the human race

01:21:20 --> 01:21:26
becomes more and more dependent on the

01:21:22 --> 01:21:30
Machine loses knowledge of how things

01:21:25 --> 01:21:34
really run and then becomes vulnerable

01:21:29 --> 01:21:37
to collapse and so it's a it's a pretty

01:21:33 --> 01:21:40
unbelievably amazing story for someone

01:21:36 --> 01:21:42
writing in 1909 to imagine all this loss

01:21:39 --> 01:21:45
yeah so there's very few people that

01:21:41 --> 01:21:53
represent artificial intelligence more

01:21:44 --> 01:21:53
than you Russell so it's all my fault

01:21:52 --> 01:22:02
right you're often brought up as the

01:21:57 --> 01:22:04
person well Stuart Russell like the AI

01:22:01 --> 01:22:07
person is worried about this that's why

01:22:03 --> 01:22:09
ou should be worried about it do you

01:22:06 --> 01:22:12
feel the burden of that I don't know if

01:22:08 --> 01:22:14
you feel that at all but when I talk to

01:22:11 --> 01:22:17
people like from you talk about set

01:22:13 --> 01:22:20
people outside of computer science when

01:22:16 --> 01:22:21
they think about this still Russell is

01:22:19 --> 01:22:23
worried about AI safety you should be

01:22:20 --> 01:22:27
worried too do you feel the burden of

01:22:22 --> 01:22:31
that I mean in a practical sense yeah

01:22:26 --> 01:22:35
because I'd yet you know a dozen

01:22:30 --> 01:22:38
sometimes 25 invitations a day

01:22:34 --> 01:22:41
to talk about it to give interviews to

01:22:37 --> 01:22:45
write press articles and so on so in

01:22:40 --> 01:22:47
that very practical sense I'm seeing

01:22:44 --> 01:22:50
that people are concerned and really

01:22:46 --> 01:22:52
interested about this are you worried

01:22:49 --> 01:22:54
that you could be wrong as all good

01:22:51 --> 01:22:56
scientists are of course I worry about

01:22:53 --> 01:22:59
hat all the time I mean that's that's

01:22:55 --> 01:23:02
always been the way that I I've worked

01:22:58 --> 01:23:04
you know is like I have an argument in

01:23:01 --> 01:23:08
my head with myself right so I have some

01:23:03 --> 01:23:11
idea and then I think okay how could

01:23:07 --> 01:23:12
that be wrong or did someone else

01:23:10 --> 01:23:15
already have that idea so I'll go and

01:23:11 --> 01:23:17
you know search and as much literature

01:23:14 --> 01:23:19
as I can't to see whether someone else

01:23:16 --> 01:23:23
already thought of that or or even

01:23:18 --> 01:23:27
refuted it so you know I right now I'm

01:23:22 --> 01:23:30
reading a lot of philosophy because

01:23:26 --> 01:23:35
you know in in the form of the debate so

01:23:29 --> 01:23:41
V over utilitarianism and other kinds of

01:23:34 --> 01:23:44
moral moral formulas shall we say people

01:23:40 --> 01:23:46
have already thought through some of

01:23:43 --> 01:23:48
these issues but you know what one of

01:23:45 --> 01:23:51
the things I'm I'm not seeing in a lot

01:23:47 --> 01:23:55
of these debates is this specific idea

01:23:50 --> 01:23:59
bout the importance of uncertainty in

01:23:54 --> 01:24:00
the objective that this is the way we

01:23:58 --> 01:24:03
should think about machines that are

01:23:59 --> 01:24:07
beneficial to humans so this idea of

01:24:02 --> 01:24:10
provably beneficial machines based on

01:24:06 --> 01:24:15
explicit uncertainty in the objective

01:24:09 --> 01:24:18
you know it seems to be you know my gut

01:24:14 --> 01:24:20
feeling is this is the core of it it's

01:24:17 --> 01:24:22
gonna have to be elaborated in a lot of

01:24:19 --> 01:24:25
different directions and there are a lot

01:24:21 --> 01:24:28
of lis beneficial yeah but they're I

01:24:24 --> 01:24:30
mean it has to be right we can't afford

01:24:27 --> 01:24:32
you know hand-wavy beneficial yeah

01:24:29 --> 01:24:34
because there are you know whenever we

01:24:31 --> 01:24:36
do hand wavy stuff there are loopholes

01:24:33 --> 01:24:39
and the thing about super intelligent

01:24:35 --> 01:24:43
machines is they find the loopholes you

01:24:38 --> 01:24:44
know just like you know tax evaders if

01:24:42 --> 01:24:47
you don't write your tax law properly

01:24:43 --> 01:24:48
that people will find loopholes and end

01:24:46 --> 01:24:51
up paying no taxes and

01:24:47 --> 01:24:56
so you should think of it this way

01:24:50 --> 01:25:03
and in getting those definitions right

01:24:55 --> 01:25:04
you know it is really a long process you

01:25:02 --> 01:25:06
know so you can you can define

01:25:03 --> 01:25:07
mathematical frameworks and within that

01:25:05 --> 01:25:09
framework you can prove mathematical

01:25:06 --> 01:25:12
theorems that yes this will you know

01:25:08 --> 01:25:13
this this theoretical entity will be

01:25:11 --> 01:25:17
proven beneficial to that theoretical

01:25:12 --> 01:25:20
entity but that framework may not match

01:25:16 --> 01:25:22
the real world in some crucial way so

01:25:19 --> 01:25:23
long process thinking through it of

01:25:21 --> 01:25:27
iterating and so on the last question

01:25:22 --> 01:25:30
yep you have ten seconds to answer it

01:25:26 --> 01:25:34
what is your favorite sci-fi movie about

01:25:29 --> 01:25:37
AI I would say interstellar has my

01:25:33 --> 01:25:41
favorite robots or beat it Space Odyssey

01:25:36 --> 01:25:43
eah yeah yeah so so tars the robots one

01:25:40 --> 01:25:46
of the robots in interstellar is the way

01:25:42 --> 01:25:46
a robot should behave

01:25:45 --> 01:25:54
and I would say ex machina is in some

01:25:50 --> 01:25:58
ways the one like the one that makes you

01:25:53 --> 01:25:59
think in a nervous kind of way about a

01:25:57 --> 01:26:03
lot where we're going well Stuart thank

01:25:58 --> 01:26:03
you so much for talking today pleasure

01:26:08 --> 01:26:11
you

<!-- YOUTUBE_TRANSCRIPT_END -->
