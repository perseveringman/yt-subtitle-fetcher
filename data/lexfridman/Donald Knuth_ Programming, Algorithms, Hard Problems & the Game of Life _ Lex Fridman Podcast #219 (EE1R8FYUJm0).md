---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "EE1R8FYUJm0"
title: "Donald Knuth: Programming, Algorithms, Hard Problems & the Game of Life | Lex Fridman Podcast #219"
video_url: "https://www.youtube.com/watch?v=EE1R8FYUJm0"
thumbnail_url: "https://i.ytimg.com/vi/EE1R8FYUJm0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=EE1R8FYUJm0"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2021-09-09T17:06:37.000Z"
upload_date: "2021-09-09"
duration_seconds: 8487
duration_human: "2:21:27"
view_count: 276431
like_count: 6919
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T13:53:43.365Z"
---

# Donald Knuth: Programming, Algorithms, Hard Problems & the Game of Life | Lex Fridman Podcast #219

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=EE1R8FYUJm0
- video_id: EE1R8FYUJm0
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2021-09-09T17:06:37.000Z
- upload_date: 2021-09-09
- duration: 2:21:27
- view_count: 276431
- like_count: 6919
- has_subtitle: true
- language: en
- availability: public
- tags: acm turing award, agi, ai, ai podcast, algorithms, artificial intelligence, artificial intelligence podcast, computer programming, computer science, donald knuth, lex ai, lex fridman, lex jre, lex mit, lex podcast, literate programming, mathematics, mit ai, open source, stanford, tex
- categories: Science & Technology

## Description

Donald Knuth is a computer scientist, Turing Award winner, father of algorithm analysis, author of The Art of Computer Programming, and creator of TeX. Please support this podcast by checking out our sponsors:
- Coinbase: https://coinbase.com/lex to get $5 in free Bitcoin
- InsideTracker: https://insidetracker.com/lex and use code Lex25 to get 25% off
- NetSuite: http://netsuite.com/lex to get free product tour
- ExpressVPN: https://expressvpn.com/lexpod and use code LexPod to get 3 months free
- BetterHelp: https://betterhelp.com/lex to get 10% off

EPISODE LINKS:
Donald's Stanford Page: https://profiles.stanford.edu/donald-knuth
Donald's Books: https://amzn.to/3heyBsC

PODCAST INFO:
Podcast website: https://lexfridman.com/podcast
Apple Podcasts: https://apple.co/2lwqZIr
Spotify: https://spoti.fi/2nEwCF8
RSS: https://lexfridman.com/feed/podcast/
Full episodes playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

OUTLINE:
0:00 - Introduction
0:48 - First programs
24:11 - Literate programming
27:20 - Beauty in programming
33:15 - OpenAI
42:26 - Optimization 
48:31 - Consciousness
57:14 - Conway's game of life
1:10:01 - Stable marriage 
1:13:21 - Richard Feynman
1:24:15 - Knuth-Morris-Pratt Algorithm
1:33:47 - Hardest problem
1:51:26 - Open source
1:56:39 - Favorite symbols
2:06:12 - Productivity
2:13:53 - Meaning of life

SOCIAL:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Reddit: https://reddit.com/r/lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
the following is a conversation with

00:00:01 --> 00:00:06
donald knuth his second time on this

00:00:04 --> 00:00:09
podcast

00:00:05 --> 00:00:10
don is a legendary computer scientist

00:00:08 --> 00:00:13
ouring award winner

00:00:09 --> 00:00:15
father of algorithm analysis

00:00:12 --> 00:00:18
author of the art of computer

00:00:14 --> 00:00:21
programming creator of tech that led to

00:00:17 --> 00:00:23
late tech and one of the kindest and

00:00:20 --> 00:00:25
most fascinating human beings i've ever

00:00:22 --> 00:00:28
got a chance to talk to

00:00:24 --> 00:00:31
i wrote him a letter a long time ago he

00:00:27 --> 00:00:33
responded and the rest as they say is

00:00:30 --> 00:00:35
history we've interacted many times

00:00:32 --> 00:00:38
ince then and every time it's been

00:00:34 --> 00:00:40
joyful and inspiring

00:00:37 --> 00:00:42
to support this podcast please check out

00:00:39 --> 00:00:44
our sponsors in the description

00:00:41 --> 00:00:47
this is the lex friedman podcast and

00:00:44 --> 00:00:49
here is my conversation with donald

00:00:46 --> 00:00:52
knuth

00:00:48 --> 00:00:54
your first large-scale program you wrote

00:00:51 --> 00:00:57
it in ibm 650 assembler in the summer of

00:00:53 --> 00:00:59
1957. i wrote it in decimal machine

00:00:56 --> 00:01:03
language i didn't know about assembler

00:00:58 --> 00:01:05
until a year later but the year 1957 the

00:01:02 --> 00:01:07
year and the program

00:01:04 --> 00:01:08
yeah i might have learned about it

00:01:06 --> 00:01:11
assembler later that summary i probably

00:01:07 --> 00:01:12
did in 1957 hardly anybody had heard of

00:01:10 --> 00:01:14
assemblers you looked at the user

00:01:12 --> 00:01:15
manuals

00:01:13 --> 00:01:17
how did you write a program for this

00:01:14 --> 00:01:20
machine it would be it would

00:01:16 --> 00:01:22
say um

00:01:19 --> 00:01:23
you know you would say 69 which meant

00:01:21 --> 00:01:26
load the distributor and and then you

00:01:22 --> 00:01:28
would give the address of the number you

00:01:25 --> 00:01:29
wanted to load into the distributor

00:01:27 --> 00:01:31
uh yesterday

00:01:28 --> 00:01:33
uh my friend that

00:01:30 --> 00:01:35
doug spicer at the computer history

00:01:32 --> 00:01:36
museum sent me a link to

00:01:34 --> 00:01:39
something that just went on youtube it

00:01:36 --> 00:01:42
was the ibm's

00:01:38 --> 00:01:46
progress report from 1956 which is you

00:01:41 --> 00:01:50
know very contemporary with 1957 yes

00:01:45 --> 00:01:53
and in 1956 ibm had donated to stanford

00:01:49 --> 00:01:54
university on ibm 650 one of the first

00:01:52 --> 00:01:55
ones

00:01:53 --> 00:01:58
when they showed a picture of the

00:01:54 --> 00:02:00
assembly line for ibm 650s and they said

00:01:57 --> 00:02:02
you know this is number 500 or something

00:01:59 --> 00:02:03
coming off the assembly line and i had

00:02:01 --> 00:02:06
never

00:02:02 --> 00:02:09
seen so many ibm 650s i did in this

00:02:05 --> 00:02:10
movie that was a it's on youtube now

00:02:08 --> 00:02:11
um

00:02:09 --> 00:02:13
and

00:02:10 --> 00:02:15
it showed the picture from

00:02:12 --> 00:02:18
stanford

00:02:14 --> 00:02:20
uh that that you know they they said

00:02:17 --> 00:02:22
look you know we donated one of these to

00:02:19 --> 00:02:23
stanford one to mit and they mentioned

00:02:21 --> 00:02:25
one other

00:02:22 --> 00:02:28
another college

00:02:24 --> 00:02:30
and in in december of 56 they donated to

00:02:27 --> 00:02:32
my university case tech

00:02:29 --> 00:02:34
but anyway

00:02:31 --> 00:02:37
they showed a picture then

00:02:33 --> 00:02:38
a class session

00:02:36 --> 00:02:41
where a guy was teaching programming and

00:02:37 --> 00:02:44
on the blackboard it said 69

00:02:40 --> 00:02:45
8 000 i mean he

00:02:43 --> 00:02:47
it was

00:02:44 --> 00:02:48
he was teaching them how to write

00:02:46 --> 00:02:51
uh

00:02:47 --> 00:02:52
code for this ibm 650 which was in

00:02:50 --> 00:02:53
decimal

00:02:51 --> 00:02:55
numbers

00:02:52 --> 00:02:58
o so the instructions were tended ten

00:02:54 --> 00:03:00
decimal digits you had two digits that

00:02:57 --> 00:03:03
said what

00:02:59 --> 00:03:05
to do for they just say uh

00:03:02 --> 00:03:07
what to do it too

00:03:04 --> 00:03:08
and four more digits to say where to get

00:03:06 --> 00:03:10
your next instruction

00:03:07 --> 00:03:12
and there's a manual that describes what

00:03:09 --> 00:03:14
each of the numbers mean and the manual

00:03:11 --> 00:03:16
was actually one

00:03:13 --> 00:03:17
if the manual had been well written i

00:03:15 --> 00:03:19
probably never would have gone into

00:03:16 --> 00:03:21
computer science but it was so badly

00:03:18 --> 00:03:23
written i figured

00:03:20 --> 00:03:25
that i must have a talent for it because

00:03:22 --> 00:03:27
i'm only a freshman and i and i could

00:03:24 --> 00:03:27
write a better manual

00:03:26 --> 00:03:29
uh

00:03:26 --> 00:03:32
and that he did

00:03:28 --> 00:03:34
and so i i started working at the

00:03:31 --> 00:03:36
computer center um

00:03:34 --> 00:03:37
and

00:03:35 --> 00:03:40
uh

00:03:36 --> 00:03:42
wrote some manuals then but but yeah but

00:03:39 --> 00:03:43
this was uh

00:03:41 --> 00:03:47
but this was the way we did it and and

00:03:42 --> 00:03:49
my first program then was june of 1957

00:03:46 --> 00:03:51
the tic-tac-toe

00:03:48 --> 00:03:54
no that was the second program the first

00:03:50 --> 00:03:55
he third program the first program was

00:03:53 --> 00:03:58
factoring

00:03:54 --> 00:03:59
a number okay so you dial a number on

00:03:57 --> 00:04:00
the

00:03:58 --> 00:04:03
on the um

00:03:59 --> 00:04:04
uh their switches that means you sat at

00:04:02 --> 00:04:06
his big mainframe

00:04:04 --> 00:04:09
and

00:04:05 --> 00:04:11
you turn the dials and set a number

00:04:08 --> 00:04:14
and and then it would punch out uh the

00:04:10 --> 00:04:17
factors of that number on on cars so

00:04:13 --> 00:04:18
that's the input is the number the input

00:04:16 --> 00:04:20
was

00:04:17 --> 00:04:23
yeah the input what was the number yeah

00:04:19 --> 00:04:26
attended a number and

00:04:22 --> 00:04:30
uh and the output was uh its factors

00:04:25 --> 00:04:31
and and and i wrote that program

00:04:29 --> 00:04:34
uh

00:04:30 --> 00:04:36
i still have a copy of it somewhere

00:04:33 --> 00:04:38
and um how many lines of code do you

00:04:35 --> 00:04:39
remember well yeah it started out as

00:04:37 --> 00:04:41
about

00:04:38 --> 00:04:44
20 but then i kept having to debug it

00:04:40 --> 00:04:46
and i i discovered debugging of course

00:04:43 --> 00:04:48
when i wrote my first program and what

00:04:45 --> 00:04:51
does uh debugging look like

00:04:47 --> 00:04:54
on a program with just all numbers

00:04:50 --> 00:04:55
well you sit there and you uh i don't

00:04:53 --> 00:04:57
remember how i got it into the machine

00:04:54 --> 00:04:59
but i but i think there was a way to

00:04:56 --> 00:05:01
punch punch it on cards so each each

00:04:58 --> 00:05:03
instruction would would be one

00:05:00 --> 00:05:04
card or maybe i could get seven

00:05:02 --> 00:05:06
instructions on the card eight

00:05:03 --> 00:05:08
instructions i don't know but anyway

00:05:05 --> 00:05:09
so i'm sitting there at the console of

00:05:07 --> 00:05:11
the machine i mean i'm doing this at

00:05:08 --> 00:05:13
night when nobody else is around of

00:05:10 --> 00:05:15
course um and

00:05:12 --> 00:05:17
so you have one set of switches

00:05:14 --> 00:05:18
where you can dial the number i'm

00:05:16 --> 00:05:20
inputting but there's another switch

00:05:17 --> 00:05:22
that's it that you know that says okay

00:05:19 --> 00:05:24
now execute one instruction and show me

00:05:21 --> 00:05:26
what you thought what you did

00:05:23 --> 00:05:28
or or you or you

00:05:25 --> 00:05:30
there was another four switches and say

00:05:27 --> 00:05:32
stop if you get to those if if you get

00:05:30 --> 00:05:34
o that instruction

00:05:31 --> 00:05:36
so so i can say now go until you get

00:05:33 --> 00:05:37
here again and watch okay so i could

00:05:35 --> 00:05:39
watch

00:05:36 --> 00:05:41
you know it he would take that number

00:05:38 --> 00:05:42
and it would divide it by two and if

00:05:40 --> 00:05:44
it's

00:05:41 --> 00:05:46
you know there's no remainder then okay

00:05:43 --> 00:05:49
two is a factor so

00:05:45 --> 00:05:51
then i work on the but if if not

00:05:48 --> 00:05:54
divisible by two divide by three okay

00:05:50 --> 00:05:56
keep trying and you know

00:05:53 --> 00:05:59
until you know you're you're at the end

00:05:55 --> 00:06:01
and uh you would find a bug

00:05:58 --> 00:06:03
if uh if you were just surprised that

00:06:00 --> 00:06:05
something weird happened

00:06:02 --> 00:06:08
well certainly i mean

00:06:04 --> 00:06:09
first of all i might have it

00:06:07 --> 00:06:11
you know try to divide by one instead of

00:06:08 --> 00:06:13
two you off by one errors that people

00:06:10 --> 00:06:15
make all the time you know but but maybe

00:06:12 --> 00:06:17
i go to the wrong instruction maybe i

00:06:14 --> 00:06:19
you might maybe i uh

00:06:16 --> 00:06:22
i left left something in a register that

00:06:18 --> 00:06:25
i shouldn't have done but the first bugs

00:06:21 --> 00:06:27
were pretty you know i i i probably

00:06:24 --> 00:06:29
on the first night i was able to i was

00:06:26 --> 00:06:31
able to get the factors of 30 you know

00:06:28 --> 00:06:35
as equal to two three and five okay

00:06:30 --> 00:06:36
um so you're sorry to interrupt you were

00:06:34 --> 00:06:38
so you're sitting there late at night

00:06:36 --> 00:06:41
yeah so

00:06:37 --> 00:06:44
it feels like you spent many years late

00:06:40 --> 00:06:46
at night working on a computer oh yeah

00:06:43 --> 00:06:48
so like what what's that like so most

00:06:45 --> 00:06:50
he world is sleeping

00:06:47 --> 00:06:51
and you have to be there at night

00:06:49 --> 00:06:53
because that's when you get access to

00:06:50 --> 00:06:55
the computer between my freshman

00:06:52 --> 00:06:56
sophomore year i didn't need sleep you

00:06:54 --> 00:06:57
know

00:06:55 --> 00:06:59
i used to do all-nighters when i was in

00:06:56 --> 00:07:00
high school i used to

00:06:59 --> 00:07:04
do the

00:07:00 --> 00:07:05
uh the whole student newspaper every

00:07:03 --> 00:07:07
monday night i would i would you know i

00:07:04 --> 00:07:10
would just stay up all night and

00:07:06 --> 00:07:12
it would be done on tuesday morning

00:07:09 --> 00:07:14
um

00:07:11 --> 00:07:16
that was because i i didn't get ulcers

00:07:13 --> 00:07:19
and stuff like that until later you know

00:07:15 --> 00:07:21
but but but uh well the uh i don't know

00:07:18 --> 00:07:24
if you know rodney brooks rod brooks of

00:07:20 --> 00:07:25
course yeah he he he told he told me a

00:07:23 --> 00:07:27
story that

00:07:24 --> 00:07:29
he really you're you know he really

00:07:26 --> 00:07:30
looked up to you he was actually afraid

00:07:28 --> 00:07:33
of you

00:07:30 --> 00:07:35
vice versa i must say

00:07:32 --> 00:07:37
but when he tells a story when you were

00:07:34 --> 00:07:38
working on tech

00:07:36 --> 00:07:39
that they screwed up something with a

00:07:37 --> 00:07:41
machine

00:07:38 --> 00:07:42
i think this might have been mit i don't

00:07:40 --> 00:07:44
know

00:07:41 --> 00:07:46
and you were waiting for them to fix the

00:07:43 --> 00:07:48
machine so you can get back to work late

00:07:45 --> 00:07:50
at night oh oh

00:07:47 --> 00:07:52
that happened all the time

00:07:49 --> 00:07:54
he was really intimidated he's like dr

00:07:51 --> 00:07:57
newt is not happy with this

00:07:54 --> 00:08:00
that's interesting but no no the the

00:07:56 --> 00:08:02
machine at stanford ai lab was

00:07:59 --> 00:08:04
uh uh i

00:08:01 --> 00:08:06
was down

00:08:03 --> 00:08:08
an awful lot because we they had

00:08:05 --> 00:08:10
many talented programmers

00:08:07 --> 00:08:12
changing the operating system every day

00:08:09 --> 00:08:14
and so operating system was getting

00:08:11 --> 00:08:18
better every day but

00:08:13 --> 00:08:21
it was also crashing so so so i i wrote

00:08:17 --> 00:08:22
almost the entire manual for tech during

00:08:20 --> 00:08:23
down time

00:08:21 --> 00:08:25
[Music]

00:08:22 --> 00:08:27
that much but that's another story okay

00:08:24 --> 00:08:29
well he was saying they uh it's a

00:08:26 --> 00:08:31
hardware problem they they uh they tried

00:08:28 --> 00:08:34
to fix it and they reinserted something

00:08:30 --> 00:08:36
and smoke was everywhere because he was

00:08:33 --> 00:08:38
hurt well that didn't happen as often as

00:08:35 --> 00:08:40
the operation coming from but yeah

00:08:38 --> 00:08:42
and it was it's a funny story because

00:08:39 --> 00:08:43
you're saying there's this

00:08:41 --> 00:08:46
tall

00:08:42 --> 00:08:48
uh don knuth that i look up to and

00:08:45 --> 00:08:50
there was pressure to i think it's the

00:08:47 --> 00:08:52
computer well

00:08:50 --> 00:08:54
it's funny

00:08:51 --> 00:08:56
okay the kind of things we remember that

00:08:53 --> 00:08:58
stick in our memory well okay yeah well

00:08:55 --> 00:09:00
i i i could tell you a bunch of rod

00:08:57 --> 00:09:03
brooks stories too but let's

00:08:59 --> 00:09:05
let let's go back to the 650. so

00:09:02 --> 00:09:05
um

00:09:06 --> 00:09:10
so i'm debugging this my first program

00:09:08 --> 00:09:13
and and i i

00:09:10 --> 00:09:15
had more bugs in it than a number of

00:09:12 --> 00:09:17
lines of code i i mean the number of

00:09:14 --> 00:09:19
lines of code kept growing

00:09:16 --> 00:09:21
and let me explain so so i had to punch

00:09:18 --> 00:09:23
the answers on cards all right

00:09:20 --> 00:09:27
so so suppose i suppose i'm factoring

00:09:22 --> 00:09:29
the number 30 then i got then it i got a

00:09:26 --> 00:09:30
i got to put two

00:09:28 --> 00:09:32
somewhere on the card i got to put a

00:09:30 --> 00:09:34
three somewhere on the card i got to put

00:09:31 --> 00:09:36
a five somewhere on the card right and

00:09:33 --> 00:09:39
you know what my i was my first

00:09:35 --> 00:09:40
program i i probably screwed up and you

00:09:38 --> 00:09:42
know it

00:09:39 --> 00:09:44
fell off the edge of the card or

00:09:41 --> 00:09:46
something like that but but i didn't

00:09:43 --> 00:09:48
realize that there are some tentative

00:09:45 --> 00:09:52
numbers that have

00:09:47 --> 00:09:54
more than eight um factors

00:09:51 --> 00:09:56
and the card has only 80 columns and so

00:09:53 --> 00:09:58
i need 10 columns for every factor

00:09:55 --> 00:10:00
so my first program didn't take account

00:09:57 --> 00:10:02
for the fact that i would have to punch

00:09:59 --> 00:10:03
more than one card

00:10:01 --> 00:10:05
my first program you know just line the

00:10:02 --> 00:10:07
stuff up in memory and then it punched

00:10:04 --> 00:10:09
the card but but after you know so by

00:10:06 --> 00:10:13
the time i finished i had to i had to

00:10:08 --> 00:10:15
deal with lots of lots of things also i

00:10:12 --> 00:10:17
uh uh

00:10:14 --> 00:10:20
if you if you put a large prime number

00:10:16 --> 00:10:22
in there my program might have sat there

00:10:19 --> 00:10:24
for for 10 minutes the 650 was pretty

00:10:21 --> 00:10:25
slow and so it would sit there spinning

00:10:23 --> 00:10:27
its wheels and you wouldn't know if it

00:10:24 --> 00:10:28
was in a loop or whatever you said ten

00:10:26 --> 00:10:31
digit

00:10:27 --> 00:10:33
en digits yeah so i think the largest

00:10:30 --> 00:10:35
is sort of nine nine nine nine nine nine

00:10:32 --> 00:10:36
seven or something like

00:10:34 --> 00:10:37
that and

00:10:35 --> 00:10:38
that would you know that that would take

00:10:36 --> 00:10:40
me a while

00:10:37 --> 00:10:41
uh

00:10:39 --> 00:10:43
for that first one anyway that was my

00:10:40 --> 00:10:44
first program well what was your goal

00:10:42 --> 00:10:45
with that program well there's something

00:10:43 --> 00:10:46
you were

00:10:44 --> 00:10:49
hoping to

00:10:45 --> 00:10:51
find a large prime maybe or no

00:10:48 --> 00:10:53
the opposite you know my goal was to see

00:10:50 --> 00:10:56
the lights flashing and

00:10:52 --> 00:10:58
understand how how this magical machine

00:10:55 --> 00:11:00
would be able to do something that took

00:10:57 --> 00:11:03
so long by hand so what was your second

00:10:59 --> 00:11:04
program my second program was

00:11:02 --> 00:11:06
uh was

00:11:03 --> 00:11:07
a converted number

00:11:05 --> 00:11:09
from

00:11:06 --> 00:11:11
binary to decimal or something like

00:11:08 --> 00:11:13
that it was much much simpler it didn't

00:11:10 --> 00:11:15
have that many bugs in it

00:11:12 --> 00:11:17
my third program was tic-tac-toe yeah

00:11:14 --> 00:11:20
and he had some machi so the the the

00:11:16 --> 00:11:22
tic-tac-toe program

00:11:19 --> 00:11:23
is interesting on many levels but one of

00:11:21 --> 00:11:26
them is that it has some

00:11:22 --> 00:11:27
you can call machine learning in it

00:11:25 --> 00:11:29
hat's

00:11:26 --> 00:11:30
yeah that's right uh

00:11:29 --> 00:11:33
i don't know how long it's going to be

00:11:31 --> 00:11:34
fore

00:11:32 --> 00:11:36
the name of

00:11:33 --> 00:11:38
our field has changed from computer

00:11:35 --> 00:11:39
science to machine learning

00:11:37 --> 00:11:42
but

00:11:38 --> 00:11:44
anyway uh uh it it was my first

00:11:41 --> 00:11:46
experience with machine learning because

00:11:43 --> 00:11:48
okay so here we had yeah how does the

00:11:45 --> 00:11:51
program well first of all

00:11:47 --> 00:11:53
what is the problem you were solving

00:11:50 --> 00:11:56
what is tic tac toe what are we talking

00:11:52 --> 00:11:57
about and then um right

00:11:55 --> 00:11:59
how was it designed

00:11:56 --> 00:12:01
right so so

00:11:58 --> 00:12:03
you got a three by three grid and each

00:12:00 --> 00:12:05
each

00:12:02 --> 00:12:08
could be in three states it can be

00:12:04 --> 00:12:12
mpty or it can have an x or an o yeah

00:12:07 --> 00:12:14
right so three to the ninth is a

00:12:11 --> 00:12:16
uh well what is

00:12:13 --> 00:12:19
how big is it i should know

00:12:15 --> 00:12:23
um but it's 80

00:12:18 --> 00:12:25
81 times 81 times three so

00:12:22 --> 00:12:27
um

00:12:24 --> 00:12:28
anyway

00:12:26 --> 00:12:29
eight is like two to the third and so

00:12:27 --> 00:12:32
that would be

00:12:28 --> 00:12:33
uh that would be like two to the sixth

00:12:31 --> 00:12:36
um

00:12:32 --> 00:12:38
uh and then uh but that would be 64 then

00:12:35 --> 00:12:41
you have to anyway i love how you're

00:12:37 --> 00:12:41
doing the calculation

00:12:40 --> 00:12:46
anyway the three comes from the fact

00:12:42 --> 00:12:47
hat it's either empty an x or an o

00:12:45 --> 00:12:48
right

00:12:46 --> 00:12:51
and

00:12:47 --> 00:12:53
the 650 what was it was a machine that

00:12:50 --> 00:12:56
had only uh

00:12:52 --> 00:12:56
two thousand

00:12:56 --> 00:13:01
ten digit words

00:12:58 --> 00:13:04
you go from zero zero zero zero to one

00:13:00 --> 00:13:06
nine nine nine and that's it

00:13:03 --> 00:13:08
and and in each word you have a ten

00:13:05 --> 00:13:11
digit number

00:13:07 --> 00:13:13
so that's not many bits i mean i gotta

00:13:10 --> 00:13:15
have three in order to have a memory of

00:13:12 --> 00:13:19
every position i've seen

00:13:14 --> 00:13:21
i need three to the ninth bits

00:13:18 --> 00:13:24
okay but it was a decimal machine too it

00:13:20 --> 00:13:25
didn't have bits but but but it did have

00:13:23 --> 00:13:27
it it did have

00:13:24 --> 00:13:29
strange instruction

00:13:26 --> 00:13:30
where if if you had a tentative number

00:13:28 --> 00:13:32
that but all the digits were either

00:13:29 --> 00:13:33
eight or nine

00:13:31 --> 00:13:35
uh

00:13:32 --> 00:13:37
you you'd be eight nine nine eight or

00:13:34 --> 00:13:39
something like that that would

00:13:36 --> 00:13:41
uh you you could make a test whether it

00:13:38 --> 00:13:44
was eight or nine that was one of the

00:13:40 --> 00:13:48
strange things ibm engineers put into to

00:13:43 --> 00:13:50
the machine i have no idea what well um

00:13:47 --> 00:13:52
hardly ever used but anyway i i needed

00:13:50 --> 00:13:54
one digit for every

00:13:51 --> 00:13:57
position i'd seen

00:13:53 --> 00:13:59
uh zero meant it was a bad position i

00:13:56 --> 00:14:01
meant it was good position

00:13:58 --> 00:14:04
i i think i started out at five or six

00:14:00 --> 00:14:06
you know but if you if you win a game

00:14:03 --> 00:14:07
then you uh

00:14:05 --> 00:14:11
then you increase the value of that

00:14:06 --> 00:14:11
position for you but you decrease it

00:14:10 --> 00:14:17
for your opponent uh uh so but but i i i

00:14:14 --> 00:14:20
could

00:14:16 --> 00:14:22
i had that much total memory for every

00:14:19 --> 00:14:25
possible position was one digit

00:14:21 --> 00:14:27
and i had a total of 20 000 digits

00:14:24 --> 00:14:28
which had which had to also include my

00:14:26 --> 00:14:30
program

00:14:27 --> 00:14:32
yes and all the logic and everything

00:14:29 --> 00:14:33
including how to

00:14:31 --> 00:14:35
ask

00:14:32 --> 00:14:37
the user what the moves are and things

00:14:34 --> 00:14:39
like this okay so so i think i had to

00:14:36 --> 00:14:41
work it out because get every every

00:14:38 --> 00:14:43
position in tic-tac-toe

00:14:40 --> 00:14:45
it is equivalent to

00:14:42 --> 00:14:47
roughly eight others because you you you

00:14:44 --> 00:14:48
can rotate the board

00:14:46 --> 00:14:50
um

00:14:47 --> 00:14:52
which gives you factor four and you can

00:14:49 --> 00:14:54
also flip it over

00:14:51 --> 00:14:56
and that's another factor two so so i

00:14:53 --> 00:14:57
might you know so i might have needed

00:14:55 --> 00:14:59
only three to the ninth over eight

00:14:56 --> 00:15:01
positions about you know plus

00:14:58 --> 00:15:03
a little bit

00:15:00 --> 00:15:06
uh so i had but anyway that was

00:15:02 --> 00:15:08
a a part of the program to to

00:15:05 --> 00:15:10
squeeze it into this tiny

00:15:07 --> 00:15:12
so you tried to find an efficient

00:15:09 --> 00:15:14
representation that took account for

00:15:11 --> 00:15:16
that kind of rotation i had to otherwise

00:15:13 --> 00:15:20
i couldn't do the learning

00:15:15 --> 00:15:22
uh wow so so but but i had three

00:15:19 --> 00:15:25
parts to my tic-tac-toe program

00:15:21 --> 00:15:28
uh and i called it brain one brain two

00:15:24 --> 00:15:30
and brain three so brain one

00:15:28 --> 00:15:33
just played

00:15:29 --> 00:15:33
a um

00:15:32 --> 00:15:37
let's see

00:15:34 --> 00:15:38
at random

00:15:36 --> 00:15:39
okay

00:15:37 --> 00:15:42
it's your turn okay you gotta put an x

00:15:38 --> 00:15:44
somewhere he has to go in an empty space

00:15:41 --> 00:15:45
but that's that's it okay

00:15:43 --> 00:15:48
choose

00:15:44 --> 00:15:50
to choose one and and play it uh

00:15:48 --> 00:15:52
brain two

00:15:49 --> 00:15:54
uh

00:15:51 --> 00:15:56
ad a canned routine

00:15:53 --> 00:15:58
and i think it was it also

00:15:55 --> 00:15:59
maybe it had

00:15:57 --> 00:16:02
maybe it assumed you were the first

00:15:58 --> 00:16:03
player or maybe it allowed you to be

00:16:01 --> 00:16:05
first i think you were odd to be either

00:16:02 --> 00:16:07
first of a second but had a canned

00:16:04 --> 00:16:09
built-in strategy known to be optimum

00:16:06 --> 00:16:10
for tic-tac-toe

00:16:08 --> 00:16:11
[Music]

00:16:09 --> 00:16:13
before i forget by the way

00:16:10 --> 00:16:15
i learned uh many years later that

00:16:12 --> 00:16:18
charles babbage

00:16:14 --> 00:16:19
had had planned to

00:16:17 --> 00:16:21
had thought about programming

00:16:18 --> 00:16:23
tic-tac-toe for his

00:16:20 --> 00:16:25
dream machine that he that he

00:16:22 --> 00:16:27
was never able to finish wow so that was

00:16:24 --> 00:16:31
the program he thought about more than a

00:16:26 --> 00:16:32
hundred years ago yeah yeah he had he

00:16:30 --> 00:16:36
did that okay

00:16:32 --> 00:16:38
and i had but and and i had however been

00:16:35 --> 00:16:40
influenced by a

00:16:37 --> 00:16:42
demonstration at the at the museum of

00:16:39 --> 00:16:44
science and industry in chicago it's

00:16:41 --> 00:16:47
like it's like boston's science museum i

00:16:43 --> 00:16:50
think bell labs had had prepared a

00:16:46 --> 00:16:52
special exhibit about

00:16:49 --> 00:16:54
elephones and relay technology and they

00:16:51 --> 00:16:56
had a tic-tac-toe playing

00:16:53 --> 00:16:58
uh

00:16:55 --> 00:17:00
machine as part of that exhibit so that

00:16:57 --> 00:17:02
had been one of my

00:16:59 --> 00:17:04
uh you know something i'd seen

00:17:01 --> 00:17:06
before i was a freshman in college and

00:17:03 --> 00:17:07
inspired me to see if i could write

00:17:05 --> 00:17:10
a program for

00:17:06 --> 00:17:11
okay so so anyway i had brain one

00:17:09 --> 00:17:13
random

00:17:10 --> 00:17:15
you know uh

00:17:12 --> 00:17:16
knowing nothing brain two knowing

00:17:14 --> 00:17:18
everything

00:17:15 --> 00:17:20
then brain three was the learning one

00:17:17 --> 00:17:22
and and i could

00:17:19 --> 00:17:23
i i could play

00:17:21 --> 00:17:28
brain one against brain one brain one

00:17:22 --> 00:17:29
against brain two and so on and so uh

00:17:27 --> 00:17:31
you could also play against the user

00:17:28 --> 00:17:34
against the live members but

00:17:30 --> 00:17:36
uh so so i started going the the

00:17:33 --> 00:17:38
learning thing and i said okay you know

00:17:35 --> 00:17:41
take two random

00:17:37 --> 00:17:45
people uh just playing uh uh

00:17:40 --> 00:17:46
tic-tac-toe uh uh knowing nothing

00:17:44 --> 00:17:49
um and

00:17:45 --> 00:17:52
after about i i forget the number now

00:17:48 --> 00:17:52
but but it converged after about 600

00:17:51 --> 00:17:55
games

00:17:51 --> 00:17:56
uh uh to a safe draw

00:17:54 --> 00:17:58
the way

00:17:55 --> 00:18:00
my program learned was actually it

00:17:57 --> 00:18:03
learned how not to make mistakes because

00:17:59 --> 00:18:05
you know how to

00:18:02 --> 00:18:07
it didn't try to do anything

00:18:04 --> 00:18:09
for winning it just tried to yeah drop

00:18:06 --> 00:18:11
losing and not lose so that was probably

00:18:08 --> 00:18:13
because of the way i did i designed the

00:18:10 --> 00:18:15
learning thing i could have you know

00:18:12 --> 00:18:17
had a different

00:18:14 --> 00:18:17
uh reinforcement function that that

00:18:16 --> 00:18:19
would

00:18:16 --> 00:18:20
that would reward brilliant play but

00:18:18 --> 00:18:24
anyway it didn't

00:18:19 --> 00:18:25
and uh and and if if i took a novice

00:18:23 --> 00:18:28
against the uh

00:18:24 --> 00:18:31
you know the skilled player uh it it was

00:18:27 --> 00:18:34
able to learn uh how to play a good game

00:18:30 --> 00:18:35
so that was that and that was really

00:18:33 --> 00:18:38
mike

00:18:34 --> 00:18:40
but after i finished that i i felt i i

00:18:37 --> 00:18:42
understood programming

00:18:39 --> 00:18:44
was there um

00:18:41 --> 00:18:47
did you

00:18:43 --> 00:18:49
did a curiosity and interest in learning

00:18:46 --> 00:18:51
systems persist for you

00:18:48 --> 00:18:53
so

00:18:50 --> 00:18:55
why why did you want brain three to

00:18:52 --> 00:18:58
learn

00:18:54 --> 00:19:01
yeah i i think naturally it's

00:18:57 --> 00:19:03
we're talking about rod brooks like

00:19:00 --> 00:19:05
he he was teaching all kinds of

00:19:02 --> 00:19:07
very small devices

00:19:04 --> 00:19:12
to to learn stuff

00:19:06 --> 00:19:14
um if a leaf drops off of a tree uh uh

00:19:11 --> 00:19:15
you know it

00:19:13 --> 00:19:17
he was saying something well it learns

00:19:14 --> 00:19:19
if there's wind or not

00:19:16 --> 00:19:21
but but i i mean he pushed that a little

00:19:18 --> 00:19:22
bit too far but

00:19:20 --> 00:19:25
he said he could probably train some

00:19:21 --> 00:19:27
little mini bugs to to scour out dishes

00:19:24 --> 00:19:29
if he had enough

00:19:26 --> 00:19:33
financial support i don't know

00:19:28 --> 00:19:33
can i can i ask you about that because

00:19:32 --> 00:19:38
he he also mentioned that during

00:19:36 --> 00:19:40
those years

00:19:37 --> 00:19:44
there was discussion about

00:19:39 --> 00:19:47
inspired by touring about computation

00:19:43 --> 00:19:48
you know of what is computation

00:19:46 --> 00:19:49
yeah

00:19:47 --> 00:19:51
and

00:19:48 --> 00:19:53
yeah i never thought about any stuff

00:19:50 --> 00:19:56
like that that was

00:19:52 --> 00:19:57
way

00:19:55 --> 00:19:59
too philosophical i mean

00:19:56 --> 00:20:01
i i was a

00:19:58 --> 00:20:02
freshman

00:20:00 --> 00:20:04
after all i mean

00:20:02 --> 00:20:08
i i didn't

00:20:03 --> 00:20:09
i was pretty much a machine

00:20:07 --> 00:20:11
so it's almost like yeah i got you it's

00:20:08 --> 00:20:14
a tinkering mindset

00:20:10 --> 00:20:17
uh not a philosophical mindset

00:20:13 --> 00:20:19
it was just exciting to me to

00:20:16 --> 00:20:20
be able to control something but not

00:20:19 --> 00:20:25
to say hmm am i solving a big

00:20:22 --> 00:20:27
problem or something like that or is is

00:20:24 --> 00:20:29
this a step for humankind right no no

00:20:26 --> 00:20:31
way

00:20:28 --> 00:20:34
when did you first start thinking about

00:20:30 --> 00:20:36
computation in the big sense

00:20:33 --> 00:20:38
you know like the universal turing

00:20:35 --> 00:20:40
machine well

00:20:37 --> 00:20:43
i mean i had to pass an ex i

00:20:39 --> 00:20:44
had to take i had to take uh

00:20:42 --> 00:20:47
classes on

00:20:43 --> 00:20:48
computability when i was a senior

00:20:46 --> 00:20:50
so you know we read this book by martin

00:20:47 --> 00:20:52
davis and

00:20:49 --> 00:20:54
yeah this is cool stuff but you know i i

00:20:51 --> 00:20:56
learned about it because i you know i

00:20:53 --> 00:20:58
needed to pass the exams but i didn't

00:20:55 --> 00:21:01
invent any of that before stuff

00:20:58 --> 00:21:04
but but i i had great fun playing with

00:21:00 --> 00:21:06
e machine you know i um i wrote

00:21:03 --> 00:21:07
program because it was fun to write

00:21:05 --> 00:21:09
programs and and

00:21:06 --> 00:21:11
get

00:21:08 --> 00:21:14
his

00:21:10 --> 00:21:16
i i mean it was like watching miracles

00:21:13 --> 00:21:20
happen

00:21:15 --> 00:21:22
you mentioned in in an interview that

00:21:19 --> 00:21:24
when reading a program you can tell when

00:21:21 --> 00:21:27
the author of the program changed

00:21:23 --> 00:21:29
oh okay uh

00:21:26 --> 00:21:32
ow the heck can you do that like what

00:21:28 --> 00:21:34
makes a distinct style for a programmer

00:21:31 --> 00:21:36
do you think

00:21:33 --> 00:21:38
you know there's different hemingway

00:21:35 --> 00:21:41
has a style of writing

00:21:37 --> 00:21:43
versus james joyce or something

00:21:40 --> 00:21:45
well those are pretty yeah those are

00:21:42 --> 00:21:46
pretty easy to imitate but

00:21:44 --> 00:21:48
it's the same with music and whatever

00:21:45 --> 00:21:51
you can

00:21:47 --> 00:21:53
i i i i found uh

00:21:50 --> 00:21:54
well during the pandemic i

00:21:52 --> 00:21:58
spent a lot more time playing the piano

00:21:53 --> 00:21:59
and i i found something that i'd had

00:21:57 --> 00:22:01
i i had it right when i was taking

00:21:58 --> 00:22:02
lessons uh

00:22:00 --> 00:22:04
you know

00:22:01 --> 00:22:05
before i was a teenager and uh

00:22:03 --> 00:22:07
it was

00:22:04 --> 00:22:10
yankee doodle

00:22:06 --> 00:22:12
uh played in the style of

00:22:09 --> 00:22:14
you know and

00:22:11 --> 00:22:17
i you had you had beethoven and you had

00:22:13 --> 00:22:19
wc and chopin and you know and the last

00:22:16 --> 00:22:20
one was gershwin

00:22:18 --> 00:22:20
and

00:22:19 --> 00:22:25
i played over and over again i thought

00:22:22 --> 00:22:27
it was so brilliant because but

00:22:24 --> 00:22:29
it was so easy but also to

00:22:26 --> 00:22:31
appreciate how

00:22:28 --> 00:22:34
this uh this

00:22:30 --> 00:22:37
author mario somebody or other had

00:22:33 --> 00:22:40
been able to uh reverse engineer

00:22:36 --> 00:22:43
the styles of of those components so but

00:22:39 --> 00:22:45
now specifically uh to your question i

00:22:42 --> 00:22:48
mean there would be

00:22:44 --> 00:22:50
there it was

00:22:47 --> 00:22:53
pretty obvious in this program i

00:22:49 --> 00:22:56
was reading it was it was a compiler

00:22:52 --> 00:22:58
uh and it had been written by a team

00:22:55 --> 00:23:01
at at carnegie mellon

00:22:57 --> 00:23:02
and uh i have no idea

00:23:00 --> 00:23:04
which program

00:23:01 --> 00:23:06
was responsible for but but it you would

00:23:03 --> 00:23:09
get to a part where the guy would just

00:23:05 --> 00:23:11
not know how he how to move things

00:23:08 --> 00:23:12
between registers very efficiently and

00:23:10 --> 00:23:13
so

00:23:11 --> 00:23:15
and so everything that

00:23:12 --> 00:23:17
could be done in one instruction

00:23:14 --> 00:23:19
would take three or something like that

00:23:16 --> 00:23:22
would be a pretty obvious uh

00:23:18 --> 00:23:24
change in style but there were but then

00:23:21 --> 00:23:25
there were also you know flashes of

00:23:23 --> 00:23:28
brilliance where you could do in one

00:23:24 --> 00:23:30
instruction normally i used two because

00:23:27 --> 00:23:32
you knew enough about the way

00:23:29 --> 00:23:34
the machine worked that you could

00:23:31 --> 00:23:36
that that you could accomplish two goals

00:23:33 --> 00:23:38
in one step

00:23:35 --> 00:23:40
so it was mostly the the brilliance of

00:23:37 --> 00:23:43
the concept more than the

00:23:39 --> 00:23:45
uh semicolons and uh or the

00:23:42 --> 00:23:46
you know the use of short sentences

00:23:44 --> 00:23:49
versus long sentences something like

00:23:46 --> 00:23:51
that so you would see the idea in the

00:23:48 --> 00:23:53
code and you can see the the different

00:23:50 --> 00:23:56
style of thinking experience right it

00:23:52 --> 00:23:58
was yeah so it was stylistic

00:23:55 --> 00:24:00
i mean like i could identify authors by

00:23:57 --> 00:24:02
their

00:23:59 --> 00:24:04
by the amount of technical aptitude they

00:24:01 --> 00:24:07
had but not by

00:24:03 --> 00:24:07
styling the sense of

00:24:07 --> 00:24:12
rhythm or something like that so if you

00:24:09 --> 00:24:16
think about mozart beethoven bach if

00:24:12 --> 00:24:18
somebody looked at don knuth code would

00:24:16 --> 00:24:20
they be able to tell

00:24:17 --> 00:24:23
that this

00:24:19 --> 00:24:26
a distinct style of thinking going on

00:24:22 --> 00:24:26
here what do you think

00:24:26 --> 00:24:32
and what what would be the defining uh

00:24:28 --> 00:24:33
characteristic of the style

00:24:31 --> 00:24:36
well

00:24:32 --> 00:24:38
my code now is it

00:24:35 --> 00:24:41
is literate programming so i'm it's a

00:24:37 --> 00:24:43
combination of english and c mostly but

00:24:40 --> 00:24:45
but if you just looked at the c part

00:24:42 --> 00:24:47
of it you would also probably notice

00:24:44 --> 00:24:48
that i don't

00:24:46 --> 00:24:50
got it

00:24:47 --> 00:24:52
you know that i use a lot of global

00:24:49 --> 00:24:55
variables that other people don't and

00:24:51 --> 00:24:57
and i expand things inline more than

00:24:54 --> 00:24:59
instead of calling

00:24:56 --> 00:25:01
anyway i have different

00:24:58 --> 00:25:04
subset of c that i use okay but this

00:25:00 --> 00:25:05
that's a little bit stylistic yeah

00:25:03 --> 00:25:08
but but with literate programming you

00:25:04 --> 00:25:10
alternate between english and

00:25:07 --> 00:25:11
c or whatever

00:25:09 --> 00:25:13
and

00:25:10 --> 00:25:15
um and by the way people listening to

00:25:12 --> 00:25:17
this should look up literate programming

00:25:14 --> 00:25:19
it's very interesting uh concept that

00:25:16 --> 00:25:20
you

00:25:18 --> 00:25:22
h you proposed and developed over the

00:25:20 --> 00:25:23
years

00:25:21 --> 00:25:24
yeah yeah

00:25:22 --> 00:25:27
i'm

00:25:23 --> 00:25:27
that's the most

00:25:27 --> 00:25:32
significant thing

00:25:29 --> 00:25:32
i think to come out of the tech project

00:25:31 --> 00:25:35
is

00:25:31 --> 00:25:38
it is that i uh

00:25:34 --> 00:25:38
i i realized that

00:25:37 --> 00:25:40
uh

00:25:37 --> 00:25:43
my programs

00:25:39 --> 00:25:44
were to be read by people and not not

00:25:42 --> 00:25:46
just by computers and

00:25:44 --> 00:25:49
that typography could

00:25:45 --> 00:25:51
massively enhance that and

00:25:48 --> 00:25:52
and so uh

00:25:50 --> 00:25:54
i mean it

00:25:52 --> 00:25:56
hey're just wonderful if they're gonna

00:25:53 --> 00:25:58
look it up that they should also look up

00:25:55 --> 00:26:01
this book by

00:25:57 --> 00:26:04
called physically based rendering

00:26:00 --> 00:26:05
by matt farr and

00:26:03 --> 00:26:06
anyway it

00:26:04 --> 00:26:09
got an academy award

00:26:05 --> 00:26:12
but it's but but but all the if

00:26:08 --> 00:26:12
on the graphic effects you see in movies

00:26:11 --> 00:26:14
uh

00:26:12 --> 00:26:15
like

00:26:13 --> 00:26:18
you know are accomplished by algorithms

00:26:14 --> 00:26:20
and this book it is the whole book is a

00:26:17 --> 00:26:23
literate program it tells you not only

00:26:19 --> 00:26:25
how you do all the shading and

00:26:22 --> 00:26:27
uh

00:26:24 --> 00:26:30
bringing images in that you need for

00:26:26 --> 00:26:33
animation and textures and so on but it

00:26:29 --> 00:26:33
also uh you can run the code

00:26:32 --> 00:26:35
uh

00:26:32 --> 00:26:37
so uh and

00:26:34 --> 00:26:41
so uh

00:26:36 --> 00:26:44
i find it uh an extension of the way i

00:26:40 --> 00:26:45
uh of of how to teach programming is it

00:26:43 --> 00:26:47
is but by

00:26:44 --> 00:26:50
telling a story

00:26:46 --> 00:26:52
as part of the program so it's uh it

00:26:49 --> 00:26:54
works as a program but it's also

00:26:51 --> 00:26:57
readable by humans

00:26:54 --> 00:26:59
yes and especially by me

00:26:56 --> 00:27:02
yeah a week later or a year later that's

00:26:58 --> 00:27:03
a good test if you yourself understand

00:27:01 --> 00:27:07
the code yeah

00:27:02 --> 00:27:08
easily a week or more or a year later

00:27:06 --> 00:27:10
yeah

00:27:07 --> 00:27:12
so it it it's uh

00:27:09 --> 00:27:13
what's this piece it's the greatest

00:27:11 --> 00:27:14
hing since sliced bread

00:27:12 --> 00:27:18
programming

00:27:14 --> 00:27:19
or literate literate program okay

00:27:17 --> 00:27:22
uh

00:27:18 --> 00:27:24
you heard it here first okay you uh

00:27:21 --> 00:27:25
dodged this question in an interview i

00:27:23 --> 00:27:28
listened to

00:27:24 --> 00:27:31
uh so let me ask you again here

00:27:27 --> 00:27:33
uh what makes for a beautiful program

00:27:30 --> 00:27:35
yeah

00:27:32 --> 00:27:37
what are the characteristics you see

00:27:34 --> 00:27:39
like you just said literate programming

00:27:36 --> 00:27:42
what are the characteristics you see in

00:27:38 --> 00:27:44
a program that make you sit back and say

00:27:41 --> 00:27:46
that's pretty good

00:27:43 --> 00:27:47
well the reason i didn't answer is

00:27:45 --> 00:27:49
because there are there are dozens and

00:27:46 --> 00:27:51
ozens of answers to that because

00:27:50 --> 00:27:55
ach you can define beauty

00:27:52 --> 00:27:57
the same personal defined beauty a

00:27:54 --> 00:27:59
different way from hour to hour i mean

00:27:56 --> 00:28:00
it depends on what

00:27:58 --> 00:28:03
and what you're looking for

00:27:59 --> 00:28:05
at one level you it's it's beautiful

00:28:02 --> 00:28:07
just if it works at all

00:28:04 --> 00:28:09
another level it's beautiful if it's

00:28:06 --> 00:28:10
if it uh

00:28:10 --> 00:28:17
it can be understood easily

00:28:12 --> 00:28:17
it's beautiful if it

00:28:17 --> 00:28:22
's illiterate programming it's

00:28:19 --> 00:28:24
beautiful it makes you laugh i mean

00:28:21 --> 00:28:26
yeah i'm actually so i'm with you i

00:28:23 --> 00:28:28
think beauty

00:28:25 --> 00:28:30
if it's readable

00:28:27 --> 00:28:33
yeah if you understand what's

00:28:29 --> 00:28:37
going on and also understand

00:28:32 --> 00:28:38
the elegance of thought behind it

00:28:36 --> 00:28:41
and then

00:28:37 --> 00:28:43
also as you said wit and humor i was

00:28:40 --> 00:28:44
always uh i remember having this

00:28:42 --> 00:28:47
conversation i had this conversation on

00:28:43 --> 00:28:50
stack overflow

00:28:46 --> 00:28:53
hether humor is good in comments

00:28:50 --> 00:28:55
and i think it is whether huma is good

00:28:52 --> 00:28:57
in comments like uh when you add

00:28:54 --> 00:28:59
comments in code yeah

00:28:56 --> 00:29:00
i always thought a little bit of humor

00:28:58 --> 00:29:03
is good

00:29:00 --> 00:29:06
it shows personality

00:29:02 --> 00:29:07
it shows character shows wit and fun and

00:29:05 --> 00:29:09
all those kinds of things

00:29:06 --> 00:29:11
of the personality of the programmers

00:29:08 --> 00:29:15
yeah okay so

00:29:10 --> 00:29:17
uh a couple days ago i received

00:29:14 --> 00:29:19
a wonderful present from my former

00:29:16 --> 00:29:22
editor at aston wesley he

00:29:18 --> 00:29:23
's downsizing his house and he found

00:29:22 --> 00:29:24
uh

00:29:22 --> 00:29:27
that

00:29:23 --> 00:29:29
somebody at the company had

00:29:26 --> 00:29:31
found all that all of their internal

00:29:28 --> 00:29:33
files about the art of computer

00:29:30 --> 00:29:35
programming from the 1960s and they gave

00:29:32 --> 00:29:36
it to him

00:29:34 --> 00:29:38
uh and then

00:29:35 --> 00:29:39
you know before throwing string in the

00:29:37 --> 00:29:42
garbage

00:29:38 --> 00:29:43
and then so he said oh yeah he

00:29:41 --> 00:29:46
planned to keep it for posterity but

00:29:42 --> 00:29:48
now he realized that posterity is a

00:29:45 --> 00:29:50
bit too much for him to handle so he

00:29:47 --> 00:29:51
sent it to me

00:29:49 --> 00:29:53
and so

00:29:50 --> 00:29:56
i just received uh

00:29:52 --> 00:29:58
this big big stack of

00:29:55 --> 00:30:00
letters uh

00:29:57 --> 00:30:02
some of which i had written to them but

00:29:59 --> 00:30:05
many of which they had written to

00:30:02 --> 00:30:06
early guinea pigs who were

00:30:04 --> 00:30:08
telling them whether they should publish

00:30:06 --> 00:30:09
or not you know

00:30:07 --> 00:30:10
and one of the things

00:30:08 --> 00:30:11
was uh

00:30:10 --> 00:30:16
in in the uh in the comments to volume

00:30:13 --> 00:30:17
one uh

00:30:16 --> 00:30:21
the the major the major reader was was

00:30:19 --> 00:30:23
bob floyd

00:30:20 --> 00:30:25
uh

00:30:22 --> 00:30:28
who is my great

00:30:24 --> 00:30:31
uh co-worker in the 60s um died early

00:30:27 --> 00:30:33
unfortunately but but uh

00:30:30 --> 00:30:36
and and he

00:30:32 --> 00:30:36
commented about the humor

00:30:36 --> 00:30:40
so we had you know he ran it by me you

00:30:38 --> 00:30:42
know says

00:30:39 --> 00:30:44
you know keep this joke in or not you

00:30:41 --> 00:30:47
know um

00:30:43 --> 00:30:49
they also sent it out to focus groups

00:30:46 --> 00:30:51
what do you think about humor in

00:30:48 --> 00:30:53
a book about computer programming what's

00:30:50 --> 00:30:55
the conclusion and i stated my

00:30:52 --> 00:30:56
philosophy is it said you know the ideal

00:30:54 --> 00:30:58
thing

00:30:55 --> 00:31:01
is uh

00:30:57 --> 00:31:03
that it's it's it's something where

00:31:00 --> 00:31:05
the reader knows that there's probably a

00:31:02 --> 00:31:07
joke here if you only understood it and

00:31:04 --> 00:31:09
this is a motivation

00:31:06 --> 00:31:12
to understand

00:31:08 --> 00:31:14
to think about it a little bit um but

00:31:11 --> 00:31:17
anyway it it it's a very delicate humor

00:31:14 --> 00:31:19
i mean it's it's it's really uh

00:31:16 --> 00:31:21
each each century invents a different

00:31:18 --> 00:31:22
kind of humor too i mean

00:31:20 --> 00:31:24
d

00:31:21 --> 00:31:26
ifferent cultures have different

00:31:23 --> 00:31:28
kinds of humor um yeah like uh

00:31:25 --> 00:31:30
we met we talked about russia a little

00:31:27 --> 00:31:32
bit offline uh you know there's dark

00:31:29 --> 00:31:33
humor

00:31:31 --> 00:31:34
and

00:31:32 --> 00:31:35
you know what

00:31:33 --> 00:31:37
when a country goes to something

00:31:34 --> 00:31:39
different right any of that life and

00:31:36 --> 00:31:42
stuff like this

00:31:38 --> 00:31:42
yo and jack benny i mean

00:31:41 --> 00:31:46
steve allen wrote this book about

00:31:43 --> 00:31:50
humor and it was the most boring book

00:31:46 --> 00:31:51
but he was one of my idols but

00:31:49 --> 00:31:52
uh

00:31:50 --> 00:31:53
yeah

00:31:51 --> 00:31:56
it's called the funny men or something

00:31:52 --> 00:31:58
like that but yeah okay so anyway i i

00:31:55 --> 00:32:01
think it's important to know that

00:31:57 --> 00:32:03
this is part of life and and it

00:32:00 --> 00:32:05
should be fun and not yeah and and so

00:32:02 --> 00:32:08
you know i wrote this

00:32:04 --> 00:32:10
organ composition which uh uh is

00:32:07 --> 00:32:13
based on the bible but i didn't refrain

00:32:10 --> 00:32:16
from putting little jokes in it

00:32:12 --> 00:32:19
also in the music it's hidden in the

00:32:15 --> 00:32:21
music it's it's it's there yeah

00:32:18 --> 00:32:23
a little humor is okay yeah i mean

00:32:20 --> 00:32:25
ot egregious humor

00:32:22 --> 00:32:27
so in in this correspondence you know

00:32:24 --> 00:32:29
there were

00:32:26 --> 00:32:31
things i said yeah i really

00:32:28 --> 00:32:32
shouldn't have i i really shouldn't have

00:32:30 --> 00:32:35
done that

00:32:32 --> 00:32:37
but uh but other ones i could you know i

00:32:34 --> 00:32:38
nsisted on and i've got

00:32:36 --> 00:32:40
jokes in there

00:32:37 --> 00:32:42
that no that

00:32:39 --> 00:32:44
nobody has figured out you in fact

00:32:41 --> 00:32:45
in volume 2

00:32:43 --> 00:32:47
i've got a

00:32:44 --> 00:32:48
cryptogram a message

00:32:46 --> 00:32:50
in cypher

00:32:47 --> 00:32:52
and in order to decipher it you're going

00:32:49 --> 00:32:55
to have to

00:32:51 --> 00:32:58
break an rsa key which is

00:32:54 --> 00:32:59
larger than people know how to break

00:32:57 --> 00:33:00
uh and so

00:32:58 --> 00:33:03
you know if computers keep getting

00:32:59 --> 00:33:04
faster and faster then you know might be

00:33:02 --> 00:33:07
100 years but somebody will figure out

00:33:04 --> 00:33:10
what this message is and they will laugh

00:33:06 --> 00:33:12
i mean i've got a joke in there

00:33:09 --> 00:33:14
so that one you really have to work for

00:33:11 --> 00:33:16
uh i i don't know if you've heard about

00:33:14 --> 00:33:19
his

00:33:15 --> 00:33:20
let me explain it maybe you'll find it

00:33:18 --> 00:33:23
interesting

00:33:19 --> 00:33:26
so open ai is a company that

00:33:22 --> 00:33:28
does uh ai work and they have this

00:33:25 --> 00:33:30
language model it's a neural network

00:33:27 --> 00:33:32
that can generate

00:33:29 --> 00:33:34
language pretty well

00:33:31 --> 00:33:36
but they also

00:33:33 --> 00:33:37
f on top of that develop something

00:33:35 --> 00:33:39
called

00:33:36 --> 00:33:41
openai codex

00:33:38 --> 00:33:44
and together with github they developed

00:33:40 --> 00:33:47
a system called openai copilot

00:33:43 --> 00:33:49
let me explain what it does

00:33:46 --> 00:33:50
there's echoes of literate programming

00:33:48 --> 00:33:54
in it

00:33:49 --> 00:33:56
so what you do is you start writing code

00:33:53 --> 00:33:59
and it completes the code for you

00:33:55 --> 00:34:01
so for example you start let's go to

00:33:58 --> 00:34:04
your factoring program you start you

00:34:00 --> 00:34:05
write in javascript and python in any

00:34:03 --> 00:34:08
language

00:34:04 --> 00:34:10
that it trained on uh you start

00:34:07 --> 00:34:13
you write the first line and some

00:34:09 --> 00:34:15
comments like what this code does and it

00:34:12 --> 00:34:18
generates the function for you

00:34:14 --> 00:34:21
and it does an incredibly good job like

00:34:17 --> 00:34:23
it's not provably right but it often

00:34:20 --> 00:34:25
does a really good job of completing the

00:34:22 --> 00:34:27
code for you i see whether

00:34:24 --> 00:34:28
but how do you know whether it did a

00:34:26 --> 00:34:30
good job or not

00:34:27 --> 00:34:32
you could see a lot of examples where he

00:34:29 --> 00:34:34
did a good job

00:34:31 --> 00:34:37
and so you it it's not a thing that

00:34:34 --> 00:34:39
generates the code for you it starts

00:34:36 --> 00:34:42
it gives you uh

00:34:38 --> 00:34:43
so it puts the human in the seat of

00:34:41 --> 00:34:46
ixing

00:34:42 --> 00:34:48
issues versus writing from scratch do

00:34:45 --> 00:34:49
you find that kind of idea at all

00:34:47 --> 00:34:51
interesting

00:34:48 --> 00:34:52
every year we're going to be losing more

00:34:50 --> 00:34:55
and more

00:34:51 --> 00:34:57
control over what machines are doing and

00:34:54 --> 00:35:00
people are saying well it seemed to like

00:34:56 --> 00:35:04
when i was a professor at caltech

00:34:59 --> 00:35:06
uh in this in the 60s we had this

00:35:03 --> 00:35:09
guy who

00:35:05 --> 00:35:10
talked a good game

00:35:08 --> 00:35:13
he could give inspiring lectures and

00:35:10 --> 00:35:13
you'd think well

00:35:13 --> 00:35:18
certainly things he was talking about an

00:35:14 --> 00:35:19
hour later you said well what did he say

00:35:17 --> 00:35:20
um

00:35:18 --> 00:35:22
but what but

00:35:19 --> 00:35:24
he really felt that it didn't matter

00:35:21 --> 00:35:25
whether computers got the right answer

00:35:23 --> 00:35:27
or not it just mattered whether it made

00:35:24 --> 00:35:28
you happy or not in other words if you

00:35:26 --> 00:35:31
know if

00:35:27 --> 00:35:33
if your boss paid for it uh he

00:35:30 --> 00:35:35
you know then you had a job you could

00:35:32 --> 00:35:36
you know you could

00:35:34 --> 00:35:38
take care of your wife

00:35:35 --> 00:35:40
happiness is more important than truth

00:35:38 --> 00:35:42
exactly he didn't believe in truth but

00:35:39 --> 00:35:43
he was a philosopher

00:35:41 --> 00:35:48
i like

00:35:42 --> 00:35:50
it and somehow you you see uh

00:35:47 --> 00:35:52
we're going that way i mean

00:35:49 --> 00:35:54
so many more things are are taken over

00:35:51 --> 00:35:56
by saying well this seems to work

00:35:53 --> 00:35:58
and so and when there's

00:35:55 --> 00:36:01
when there is uh competing interests

00:35:57 --> 00:36:05
involved neither side understands

00:36:00 --> 00:36:05
why the decision is being made

00:36:05 --> 00:36:10
you know we realize now that it's that

00:36:07 --> 00:36:14
is bad but but consider what happens

00:36:10 --> 00:36:16
five private ten year year down the line

00:36:13 --> 00:36:18
when things get even more

00:36:15 --> 00:36:18
further detached and each thing is based

00:36:17 --> 00:36:19
on

00:36:17 --> 00:36:22
something

00:36:18 --> 00:36:24
from the previous year yeah so you start

00:36:21 --> 00:36:27
o lose the more you automate the more

00:36:23 --> 00:36:29
you start to lose track of uh some deep

00:36:26 --> 00:36:32
experimentally

00:36:28 --> 00:36:35
exponentially but so that's the dark

00:36:31 --> 00:36:38
side the positive side is

00:36:34 --> 00:36:40
the more you automate the more you let

00:36:37 --> 00:36:41
humans do what humans do best

00:36:39 --> 00:36:43
so

00:36:40 --> 00:36:45
maybe programming

00:36:42 --> 00:36:47
this you know maybe

00:36:44 --> 00:36:49
humans should focus on a small part of

00:36:46 --> 00:36:52
programming that requires that genius

00:36:48 --> 00:36:54
the magic of the human mind

00:36:51 --> 00:36:57
and the mess you let the machine

00:36:53 --> 00:36:58
generate yeah i mean they're that's the

00:36:56 --> 00:37:00
positive but of course it

00:36:57 --> 00:37:02
does come with the darkness like

00:36:59 --> 00:37:04
automation

00:37:01 --> 00:37:07
what what's better correct i'm never

00:37:03 --> 00:37:09
going to try to write a book about that

00:37:06 --> 00:37:12
uh i'm never going to recommend to any

00:37:08 --> 00:37:12
of my students to work for them

00:37:11 --> 00:37:16
so you you're on the side of i'm on the

00:37:13 --> 00:37:19
side i'm on the side of honor happiness

00:37:15 --> 00:37:21
understanding i understand

00:37:18 --> 00:37:23
i i think these things are really

00:37:20 --> 00:37:25
marvelous if they if

00:37:22 --> 00:37:27
what they do is you know

00:37:24 --> 00:37:30
all of a sudden we have a better medical

00:37:26 --> 00:37:32
diagnosis or or or you know it will help

00:37:29 --> 00:37:34
guide some scientific experiment or

00:37:31 --> 00:37:36
something like this uh

00:37:33 --> 00:37:38
you know you know curing diseases or

00:37:35 --> 00:37:40
what whatever but

00:37:37 --> 00:37:41
when it

00:37:39 --> 00:37:44
affects people's lives in a

00:37:40 --> 00:37:45
serious way uh uh

00:37:43 --> 00:37:48
so if you're writing if you're writing

00:37:44 --> 00:37:49
code for geeky oh yeah here this is

00:37:47 --> 00:37:53
great

00:37:48 --> 00:37:55
his will make a slaughter bot okay

00:37:52 --> 00:37:58
so i see so

00:37:54 --> 00:37:59
you have to be very careful

00:37:57 --> 00:38:01
ike right now it seems like fun and

00:37:58 --> 00:38:04
games it's useful to write a little

00:38:00 --> 00:38:05
javascript program that helps you with

00:38:03 --> 00:38:08
e website

00:38:04 --> 00:38:10
but like you said one year passes two

00:38:07 --> 00:38:13
years passes five years and you forget

00:38:10 --> 00:38:14
you start building on top of it and then

00:38:12 --> 00:38:16
all of a sudden you have autonomous

00:38:13 --> 00:38:17
weapon systems

00:38:15 --> 00:38:20
based

00:38:16 --> 00:38:22
well we're all dead it doesn't matter in

00:38:19 --> 00:38:24
that sense

00:38:21 --> 00:38:27
well in the end

00:38:23 --> 00:38:29
the this whole thing ends anyway so

00:38:26 --> 00:38:33
um but it it

00:38:28 --> 00:38:35
here is a heat death of the universe

00:38:32 --> 00:38:36
predicted but i i'm trying to postpone

00:38:34 --> 00:38:39
that for

00:38:35 --> 00:38:41
a little bit

00:38:38 --> 00:38:43
well it'd be nice that at the end

00:38:40 --> 00:38:44
as we approach the heat death of the

00:38:42 --> 00:38:47
universe there's

00:38:43 --> 00:38:47
till some kind of consciousness there

00:38:46 --> 00:38:50
to

00:38:46 --> 00:38:52
to to appreciate it

00:38:49 --> 00:38:54
hopefully human consciousness i'll

00:38:52 --> 00:38:57
settle for 10 to the 10 to the 10 to the

00:38:53 --> 00:38:58
10th year some finite number but

00:38:57 --> 00:39:02
hings like this might be the reason we

00:38:59 --> 00:39:04
don't pick up any

00:39:01 --> 00:39:05
signals from

00:39:03 --> 00:39:07
extraterrestrial

00:39:04 --> 00:39:10
they don't want anything to do with us

00:39:06 --> 00:39:14
oh because they because they

00:39:09 --> 00:39:14
invented it too and

00:39:14 --> 00:39:19
so you you do have a little bit of worry

00:39:17 --> 00:39:21
on the

00:39:18 --> 00:39:24
xistential threats of

00:39:20 --> 00:39:26
ai and automation

00:39:23 --> 00:39:29
so like like removing the human from the

00:39:25 --> 00:39:31
picture et cetera yeah people have more

00:39:28 --> 00:39:33
potential to

00:39:30 --> 00:39:37
do harm now than

00:39:32 --> 00:39:40
by far than they did a 100 years ago

00:39:36 --> 00:39:42
but are you optimistic about so the

00:39:39 --> 00:39:44
humans are good at creating destructive

00:39:41 --> 00:39:46
things but also humans are good at

00:39:43 --> 00:39:48
solving problems yeah i mean there's

00:39:45 --> 00:39:49
half empty and have full you know that

00:39:47 --> 00:39:52
so

00:39:48 --> 00:39:54
how yeah we have full or what i can go

00:39:51 --> 00:39:56
yeah so so let me let me put it this way

00:39:53 --> 00:39:57
because

00:39:55 --> 00:39:59
it's the only way i can be

00:39:56 --> 00:40:01
optimistic but but

00:40:00 --> 00:40:05
hink of um

00:40:02 --> 00:40:05
of

00:40:05 --> 00:40:10
things that have changed because of

00:40:06 --> 00:40:12
civilization

00:40:09 --> 00:40:14
you know they don't occur just in nature

00:40:11 --> 00:40:16
so just

00:40:13 --> 00:40:18
uh just imagine that the room we're in

00:40:15 --> 00:40:19
for example

00:40:17 --> 00:40:20
okay some

00:40:18 --> 00:40:22
you know we've got

00:40:19 --> 00:40:24
pencils we've got books we've got tables

00:40:21 --> 00:40:26
we've got microphones

00:40:23 --> 00:40:28
clothing food

00:40:25 --> 00:40:32
all these things were added

00:40:27 --> 00:40:34
somebody invented them one by one and

00:40:31 --> 00:40:37
millions of things

00:40:33 --> 00:40:38
uh that we inherit okay

00:40:36 --> 00:40:41
and

00:40:37 --> 00:40:42
it's inconceivable that that so many

00:40:40 --> 00:40:46
millions of billions of things uh

00:40:41 --> 00:40:46
wouldn't have problems and

00:40:45 --> 00:40:50
we we get it all right

00:40:47 --> 00:40:51
um and and each one

00:40:49 --> 00:40:53
would have no

00:40:50 --> 00:40:56
negative

00:40:52 --> 00:41:00
ffects and so on so it it's very

00:40:56 --> 00:41:01
amazing that it much works as does work

00:40:59 --> 00:41:03
it's

00:41:00 --> 00:41:05
incredibly amazing

00:41:02 --> 00:41:07
and actually that's the source of my

00:41:04 --> 00:41:10
optimism as well

00:41:06 --> 00:41:11
including for artificial intelligence

00:41:09 --> 00:41:14
so

00:41:10 --> 00:41:17
we we drive over bridges

00:41:13 --> 00:41:19
we we use all kinds of technology we

00:41:16 --> 00:41:21
don't know how it works and there's

00:41:18 --> 00:41:23
millions of brilliant people involved in

00:41:20 --> 00:41:25
building a small part of that and it

00:41:22 --> 00:41:26
doesn't go wrong and it works and i mean

00:41:24 --> 00:41:28
that

00:41:25 --> 00:41:30
it it works

00:41:27 --> 00:41:33
and it doesn't go go wrong

00:41:29 --> 00:41:36
often enough to suffer and we can

00:41:32 --> 00:41:38
identify things that aren't working and

00:41:35 --> 00:41:39
try to

00:41:37 --> 00:41:42
improve on them

00:41:38 --> 00:41:44
in a sub often suboptimal way oh

00:41:41 --> 00:41:46
absolutely but it's

00:41:43 --> 00:41:48
but but the

00:41:45 --> 00:41:49
kind of things that

00:41:47 --> 00:41:50
i know how to

00:41:48 --> 00:41:52
improve

00:41:49 --> 00:41:54
require human beings to be rational and

00:41:51 --> 00:41:56
i i'm losing my confidence that human

00:41:53 --> 00:41:57
beings are rational

00:41:56 --> 00:41:59
yeah

00:41:56 --> 00:42:03
now here you go again with the

00:41:58 --> 00:42:07
worst case uh worst case analysis

00:42:02 --> 00:42:09
they may not be rational but they're um

00:42:06 --> 00:42:11
they're they're

00:42:08 --> 00:42:12
clever and uh

00:42:10 --> 00:42:15
beautiful in their own kind of way yeah

00:42:12 --> 00:42:19
i tend to think that most people

00:42:14 --> 00:42:20
um have the desire and the capacity to

00:42:18 --> 00:42:23
be good to each other

00:42:19 --> 00:42:25
and love will ultimately win out like if

00:42:22 --> 00:42:27
they're given the opportunity that's

00:42:24 --> 00:42:29
where they lean

00:42:26 --> 00:42:31
in the art of computer programming you

00:42:28 --> 00:42:34
wrote the real problem is that

00:42:30 --> 00:42:36
programmers have spent far too much time

00:42:33 --> 00:42:38
worrying about efficiency in the wrong

00:42:35 --> 00:42:41
places and at the wrong times

00:42:37 --> 00:42:43
premature optimization is the root of

00:42:40 --> 00:42:46
all evil

00:42:42 --> 00:42:47
in parentheses or at least most of it in

00:42:45 --> 00:42:50
programming

00:42:46 --> 00:42:53
can you uh explain this idea

00:42:49 --> 00:42:56
uh what's the wrong time what is the

00:42:52 --> 00:42:59
wrong place for our optimization so

00:42:55 --> 00:43:03
first of all the word optimization i i

00:42:58 --> 00:43:06
started out writing software uh and

00:43:02 --> 00:43:10
optimization was i was a compiler writer

00:43:05 --> 00:43:11
so optimization meant uh making the

00:43:09 --> 00:43:13
uh

00:43:10 --> 00:43:15
making a better translation it it so

00:43:12 --> 00:43:18
that it would run faster on it on a

00:43:14 --> 00:43:19
machine instead of an optimized program

00:43:17 --> 00:43:22
it's just like you know you you you run

00:43:18 --> 00:43:24
a program and you set the optimization

00:43:21 --> 00:43:26
level uh for

00:43:23 --> 00:43:28
the compiler so that's one

00:43:25 --> 00:43:30
word for optimization

00:43:27 --> 00:43:32
um and at that time i

00:43:29 --> 00:43:34
happened to be looking in an

00:43:31 --> 00:43:36
unabridged dictionary

00:43:33 --> 00:43:38
uh for some reason or other and i came

00:43:35 --> 00:43:40
to work optimizing

00:43:37 --> 00:43:45
what's the meaning of the word optimized

00:43:39 --> 00:43:45
and it says to view with optimism

00:43:44 --> 00:43:51
and you look in webster's dictionary of

00:43:47 --> 00:43:55
english language in 1960 early 1960s

00:43:50 --> 00:43:55
that's what optimized me meant okay

00:43:55 --> 00:43:59
so people

00:43:56 --> 00:44:01
started doing cost optimization other

00:43:58 --> 00:44:04
kinds of things uh

00:44:00 --> 00:44:06
you know whole subfields of

00:44:05 --> 00:44:10
algorithms and economics and whatever

00:44:07 --> 00:44:12
are are based on what they call

00:44:09 --> 00:44:13
optimization now but

00:44:12 --> 00:44:16
o me optimization when i was saying

00:44:14 --> 00:44:19
that

00:44:15 --> 00:44:21
was saying uh uh changing a program to

00:44:18 --> 00:44:22
make it more

00:44:20 --> 00:44:26
tuned to the machine

00:44:21 --> 00:44:29
and i found out that uh

00:44:25 --> 00:44:30
when a person writes a program

00:44:28 --> 00:44:31
uh

00:44:29 --> 00:44:32
e

00:44:30 --> 00:44:34
or she

00:44:31 --> 00:44:36
tends to think that

00:44:33 --> 00:44:37
he parts that were hardest to write are

00:44:35 --> 00:44:39
going to be hardest for the computer to

00:44:36 --> 00:44:41
execute

00:44:38 --> 00:44:43
so

00:44:40 --> 00:44:46
maybe i have 10 pages of code but

00:44:42 --> 00:44:49
i i had to work a week writing this page

00:44:46 --> 00:44:51
i i mentally think that when the

00:44:48 --> 00:44:52
computer gets to that page it's going to

00:44:50 --> 00:44:54
slow down

00:44:51 --> 00:44:56
right uh it's chris oh i don't

00:44:53 --> 00:44:59
understand what i'm doing i better

00:44:55 --> 00:45:01
be more anyway this is of course

00:44:58 --> 00:45:02
silly but it's it's something that we

00:45:01 --> 00:45:06
don't know when we write a piece

00:45:03 --> 00:45:08
of code we don't know what

00:45:05 --> 00:45:10
whether the computer is actually

00:45:07 --> 00:45:11
going to be executing that code very

00:45:09 --> 00:45:14
much

00:45:10 --> 00:45:16
so so people had had a very

00:45:13 --> 00:45:17
poor understanding of

00:45:16 --> 00:45:22
what the computer was actually doing

00:45:18 --> 00:45:25
i i made one test where

00:45:21 --> 00:45:27
we studied a fortran compiler

00:45:24 --> 00:45:30
and it was spending more than 80 of its

00:45:26 --> 00:45:31
time reading the comments card

00:45:29 --> 00:45:33
[Music]

00:45:30 --> 00:45:35
but as a programmer we were really

00:45:32 --> 00:45:37
concerned about how fast it could take a

00:45:34 --> 00:45:39
complicated expression that had lots of

00:45:36 --> 00:45:42
levels of parenthesis and

00:45:38 --> 00:45:44
and and convert that in

00:45:41 --> 00:45:47
to something but that was just you

00:45:43 --> 00:45:50
know less than one percent of the uh

00:45:46 --> 00:45:51
so if we optimized that

00:45:49 --> 00:45:52
uh

00:45:50 --> 00:45:54
we didn't know what we were doing but

00:45:51 --> 00:45:55
but if if we knew that it was

00:45:53 --> 00:45:56
pending eighty percent of his time on

00:45:54 --> 00:45:58
the comments

00:45:55 --> 00:46:00
card you know in ten minutes we could we

00:45:57 --> 00:46:02
could make the the compiler run more

00:45:59 --> 00:46:04
than twice as fast and you can only do

00:46:01 --> 00:46:06
that once you've completed the program

00:46:03 --> 00:46:09
and then you empirically study where i

00:46:05 --> 00:46:12
had some kind of profiling that i knew

00:46:08 --> 00:46:13
hat was important yeah so

00:46:11 --> 00:46:15
you don't think the supplies generally i

00:46:12 --> 00:46:17
mean there's something that rings true

00:46:14 --> 00:46:19
to this across the board i'm glad that

00:46:16 --> 00:46:21
it applied generally but but it was it

00:46:18 --> 00:46:23
was only my good luck

00:46:20 --> 00:46:26
i said it but you know but but i did but

00:46:22 --> 00:46:28
i said it in limited context and not and

00:46:25 --> 00:46:30
i'm glad if it

00:46:27 --> 00:46:31
makes people think about stuff because i

00:46:30 --> 00:46:33
but

00:46:31 --> 00:46:37
it applies

00:46:32 --> 00:46:40
in another sense too that is

00:46:36 --> 00:46:40
ometimes i will

00:46:39 --> 00:46:44
do optimization in a way that does help

00:46:42 --> 00:46:46
the

00:46:43 --> 00:46:49
actual running time

00:46:45 --> 00:46:51
but makes the program impossible to

00:46:48 --> 00:46:53
change next week

00:46:50 --> 00:46:54
because i've changed my data structure

00:46:52 --> 00:46:57
of something that

00:46:53 --> 00:46:59
made it less adaptable so one of

00:46:56 --> 00:47:02
the great uh

00:46:58 --> 00:47:03
principles of computer science is

00:47:02 --> 00:47:05
it is laziness or whatever you call it

00:47:04 --> 00:47:08
he

00:47:04 --> 00:47:11
late binding uh you know don't

00:47:07 --> 00:47:12
hold off decisions when you can

00:47:10 --> 00:47:13
um

00:47:11 --> 00:47:17
and

00:47:12 --> 00:47:20
and you know and we understand now

00:47:16 --> 00:47:22
quantitatively how valuable that is

00:47:19 --> 00:47:24
what do you mean we understand so you

00:47:21 --> 00:47:26
mean people

00:47:23 --> 00:47:29
have written thesis about how you

00:47:25 --> 00:47:31
can how late binding will

00:47:28 --> 00:47:34
it will improve the i mean you know just

00:47:30 --> 00:47:37
in time manufacturing or whatever

00:47:33 --> 00:47:38
you can make you can defer a decision

00:47:36 --> 00:47:40
instead of doing your advanced planning

00:47:37 --> 00:47:42
and say i'm gonna allocate thirty

00:47:39 --> 00:47:44
percent to this and fifty percent so in

00:47:41 --> 00:47:46
all kinds of domains there's an

00:47:43 --> 00:47:49
optimality to laziness in many cases

00:47:46 --> 00:47:51
decision is not made in advance so

00:47:48 --> 00:47:54
instead you you design

00:47:50 --> 00:47:56
in order to be flexible uh uh to to

00:47:53 --> 00:47:58
change with the uh uh

00:47:55 --> 00:48:01
with the way the wind is blowing yeah

00:47:57 --> 00:48:02
but so the reason that line resonated

00:48:00 --> 00:48:04
with a lot of people

00:48:01 --> 00:48:05
is because

00:48:03 --> 00:48:07
uh there's something about the

00:48:04 --> 00:48:10
programmer's mind

00:48:06 --> 00:48:12
that wants that enjoys optimization so

00:48:09 --> 00:48:13
it's a constant struggle

00:48:11 --> 00:48:14
to

00:48:12 --> 00:48:16
balance

00:48:13 --> 00:48:18
laziness

00:48:15 --> 00:48:21
and lay binding with

00:48:17 --> 00:48:25
e desire to optimize

00:48:20 --> 00:48:26
the elegance of a well-optimized code is

00:48:24 --> 00:48:27
omething that's compelling to

00:48:25 --> 00:48:28
programming

00:48:26 --> 00:48:29
yeah

00:48:27 --> 00:48:32
it's a

00:48:28 --> 00:48:34
nother concept of beauty

00:48:31 --> 00:48:37
let me ask you a weird question

00:48:33 --> 00:48:41
so roger penrose

00:48:36 --> 00:48:43
has talked about computation computers

00:48:40 --> 00:48:46
and

00:48:42 --> 00:48:47
he proposed that

00:48:45 --> 00:48:50
he way the human mind discovers

00:48:46 --> 00:48:51
mathematical ideas is something more

00:48:49 --> 00:48:54
than a computer

00:48:50 --> 00:48:56
that that a universal turing machine

00:48:53 --> 00:48:59
cannot

00:48:55 --> 00:49:01
do everything that a human mind can do

00:48:58 --> 00:49:04
now this includes

00:49:00 --> 00:49:05
discovering mathematical ideas and it

00:49:03 --> 00:49:06
also includes

00:49:04 --> 00:49:07
he's written a book about it

00:49:05 --> 00:49:10
consciousness

00:49:06 --> 00:49:11
o i don't know if you know roger but

00:49:09 --> 00:49:13
yeah

00:49:10 --> 00:49:15
my uh my daughter's kids played with his

00:49:12 --> 00:49:16
kids in oxford

00:49:14 --> 00:49:19
nice

00:49:15 --> 00:49:22
so do you think there is such a limit to

00:49:18 --> 00:49:24
the computer do you think consciousness

00:49:21 --> 00:49:27
is more than a computation do you think

00:49:23 --> 00:49:29
the human mind the way it thinks is more

00:49:26 --> 00:49:32
than a computation

00:49:28 --> 00:49:36
i i mean like i i can say yes or no but

00:49:31 --> 00:49:37
but i don't i have no reason

00:49:35 --> 00:49:38
i mean

00:49:36 --> 00:49:41
so you don't find it useful to have an

00:49:37 --> 00:49:43
intuition in one way or the other like

00:49:40 --> 00:49:46
when you think about algorithms do you

00:49:42 --> 00:49:48
isn't it

00:49:45 --> 00:49:50
unanswerable question in my opinion is

00:49:47 --> 00:49:52
no better than anybody else you think

00:49:49 --> 00:49:53
it's unanswerable so you don't think

00:49:51 --> 00:49:55
eventually science

00:49:52 --> 00:49:56
angels can dance on the head i mean i

00:49:54 --> 00:49:59
don't know

00:49:55 --> 00:50:01
but angels

00:49:58 --> 00:50:03
anyway there are lots of things that are

00:50:00 --> 00:50:04
beyond that that we can speculate about

00:50:02 --> 00:50:06
but

00:50:03 --> 00:50:08
i don't want somebody to say oh yeah

00:50:05 --> 00:50:11
canoe said this and and so he's he's

00:50:07 --> 00:50:14
smart and so he so that must be

00:50:10 --> 00:50:17
i mean i say it's something that uh

00:50:13 --> 00:50:18
we'll never know

00:50:16 --> 00:50:21
interesting

00:50:17 --> 00:50:22
okay that's a strong statement i i don't

00:50:20 --> 00:50:25
i personally think it's something we

00:50:22 --> 00:50:28
will know eventually like there's no

00:50:24 --> 00:50:29
reason to me why the the workings of the

00:50:27 --> 00:50:32
human mind

00:50:28 --> 00:50:34
are not within the reach of science

00:50:31 --> 00:50:35
that's absolutely possible and i'm not

00:50:33 --> 00:50:37
denying it yeah

00:50:34 --> 00:50:39
uh but right now you don't have a good

00:50:36 --> 00:50:41
intuition i mean that's also possible

00:50:38 --> 00:50:44
you know that and ai

00:50:40 --> 00:50:45
you know created the universe you know

00:50:43 --> 00:50:48
intelligent design

00:50:44 --> 00:50:50
has all been done by an ai yes

00:50:47 --> 00:50:53
this is i mean all these things are but

00:50:49 --> 00:50:55
but but you're asking me to

00:50:52 --> 00:50:59
pronounce on it and and i don't have

00:50:54 --> 00:51:01
any expertise i i i i'm a teacher that

00:50:58 --> 00:51:03
passes on knowledge but i don't

00:51:00 --> 00:51:04
know

00:51:02 --> 00:51:07
the fact that i

00:51:03 --> 00:51:10
vote yes or no on

00:51:06 --> 00:51:12
well you do have expertise as a human

00:51:09 --> 00:51:15
ot as a not as a teacher

00:51:11 --> 00:51:17
or a scholar of computer science

00:51:14 --> 00:51:19
i mean that's ultimately the realm of

00:51:16 --> 00:51:23
where the discussion of human thought

00:51:18 --> 00:51:23
yeah well i know we're in consciousness

00:51:26 --> 00:51:32
he might even thought he proved it but

00:51:28 --> 00:51:34
no he doesn't he doesn't prove it he is

00:51:31 --> 00:51:36
following intuition but

00:51:33 --> 00:51:38
i mean you have to ask john mccarthy

00:51:38 --> 00:51:42
i think

00:51:39 --> 00:51:44
uh we're totally unimpressed by these

00:51:41 --> 00:51:46
statements

00:51:43 --> 00:51:48
o you don't think so even like the

00:51:45 --> 00:51:51
touring paper on

00:51:48 --> 00:51:52
uh on the touring test

00:51:50 --> 00:51:54
hat

00:51:51 --> 00:51:57
you know starts by asking can machines

00:51:53 --> 00:51:58
think oh um you don't think these kind

00:51:56 --> 00:52:01
of um

00:51:57 --> 00:52:03
touring doesn't like that question yeah

00:52:00 --> 00:52:05
i don't consider it important let's put

00:52:02 --> 00:52:07
it that way

00:52:04 --> 00:52:09
because it it's in the category of

00:52:06 --> 00:52:11
things that

00:52:08 --> 00:52:12
it it it would be nice you know but i

00:52:10 --> 00:52:14
think it's beyond knowledge and so i

00:52:12 --> 00:52:17
don't

00:52:13 --> 00:52:18
i'm not i'm more interested in knowing

00:52:16 --> 00:52:21
about

00:52:17 --> 00:52:23
he riemann hypothesis or something

00:52:20 --> 00:52:25
so when you say it's an interesting

00:52:22 --> 00:52:27
statement beyond knowledge

00:52:24 --> 00:52:30
yeah i think what you mean

00:52:26 --> 00:52:32
is it's not sufficiently well

00:52:29 --> 00:52:34
it's not even known well enough to be

00:52:31 --> 00:52:37
able to formalize it

00:52:33 --> 00:52:38
in order to ask a clear question yeah

00:52:36 --> 00:52:40
and so that's why it's beyond knowledge

00:52:37 --> 00:52:43
but that doesn't mean it's not

00:52:40 --> 00:52:44
eventually going to be formalized yeah

00:52:42 --> 00:52:47
maybe consciousness will be

00:52:43 --> 00:52:49
understood some some day but uh the last

00:52:46 --> 00:52:50
ime i checked

00:52:48 --> 00:52:53
uh

00:52:49 --> 00:52:55
it it was still 200 years away

00:52:52 --> 00:52:57
i haven't been specializing in this by

00:52:54 --> 00:53:00
any means but but but i went to lectures

00:52:56 --> 00:53:02
about it 20 years ago when i was

00:52:59 --> 00:53:05
uh there was there was a symposium at

00:53:01 --> 00:53:08
he american academy in in cambridge and

00:53:04 --> 00:53:09
it started out by saying essentially

00:53:07 --> 00:53:11
everything that's been written about

00:53:08 --> 00:53:13
consciousness is

00:53:10 --> 00:53:16
hogwash

00:53:12 --> 00:53:16
i tend to

00:53:16 --> 00:53:20
disagree with that a little

00:53:18 --> 00:53:23
bit so well it's

00:53:20 --> 00:53:24
o consciousness for the longest time

00:53:22 --> 00:53:25
still

00:53:23 --> 00:53:28
is in the realm of philosophy so it's

00:53:24 --> 00:53:29
just conversations without any basis and

00:53:27 --> 00:53:31
yeah understanding

00:53:28 --> 00:53:32
still

00:53:30 --> 00:53:34
i think

00:53:31 --> 00:53:36
once you start creating artificial

00:53:33 --> 00:53:39
intelligence systems that interact with

00:53:35 --> 00:53:39
umans

00:53:38 --> 00:53:44
and they have personality

00:53:40 --> 00:53:46
they have identity you start flirting

00:53:43 --> 00:53:49
with the question of consciousness not

00:53:46 --> 00:53:51
from a philosophical perspective but

00:53:48 --> 00:53:53
from an engineering perspective

00:53:50 --> 00:53:55
and then starts becoming much more

00:53:52 --> 00:53:57
like i feel like yeah yeah don't

00:53:54 --> 00:53:59
misunderstand me i

00:53:56 --> 00:54:01
i i i certainly don't disagree with

00:53:58 --> 00:54:02
at at all um

00:54:00 --> 00:54:04
and

00:54:01 --> 00:54:06
even at these lectures that we had

00:54:03 --> 00:54:07
you know 20 years ago there were

00:54:05 --> 00:54:09
neurologists

00:54:06 --> 00:54:12
pointing out that

00:54:08 --> 00:54:14
human beings had actually decided

00:54:11 --> 00:54:17
to do something before they were

00:54:13 --> 00:54:18
conscious of making that decision yeah

00:54:16 --> 00:54:20
uh

00:54:17 --> 00:54:22
i mean they could tell that

00:54:19 --> 00:54:25
you know that signals were being sent to

00:54:21 --> 00:54:26
their arms before they before their they

00:54:24 --> 00:54:28
knew that they were

00:54:25 --> 00:54:30
anything like this

00:54:27 --> 00:54:32
are true and and uh

00:54:29 --> 00:54:34
my uh you know less valiant has

00:54:31 --> 00:54:36
an architecture for the brain and more

00:54:34 --> 00:54:37
cently uh

00:54:36 --> 00:54:42
christus papadomitrio uh

00:54:39 --> 00:54:44
in the academy

00:54:41 --> 00:54:46
science proceedings a year ago uh with

00:54:43 --> 00:54:48
two other people but i know chris

00:54:45 --> 00:54:50
does very well

00:54:47 --> 00:54:53
uh and and he's got this uh

00:54:50 --> 00:54:54
this model of uh

00:54:52 --> 00:54:57
this architecture

00:54:53 --> 00:54:59
by which you could uh create a

00:54:56 --> 00:55:01
uh things that

00:54:58 --> 00:55:03
correlate well with the uh with

00:55:00 --> 00:55:05
experiments that are done on

00:55:02 --> 00:55:08
consciousness uh

00:55:04 --> 00:55:10
and and and and he

00:55:07 --> 00:55:13
actually you know has a

00:55:09 --> 00:55:14
machine language that in which you can

00:55:12 --> 00:55:16
write

00:55:13 --> 00:55:18
code and

00:55:15 --> 00:55:20
test hypotheses

00:55:17 --> 00:55:22
uh

00:55:19 --> 00:55:24
and so it it might you know we might

00:55:21 --> 00:55:26
have a big breakthrough my personal

00:55:23 --> 00:55:27
feeling is that

00:55:25 --> 00:55:29
consciousness

00:55:26 --> 00:55:30
the the best model

00:55:28 --> 00:55:33
i

00:55:29 --> 00:55:36
've heard of uh to explain the the

00:55:32 --> 00:55:38
miracle of consciousness uh is

00:55:35 --> 00:55:39
that that

00:55:37 --> 00:55:41
somehow

00:55:38 --> 00:55:43
inside of our

00:55:40 --> 00:55:44
brains

00:55:42 --> 00:55:46
we're having a

00:55:45 --> 00:55:50
continual survival for the fittest

00:55:48 --> 00:55:52
competition

00:55:49 --> 00:55:54
as i'm speaking to you

00:55:51 --> 00:55:55
h all the possible things i might be

00:55:53 --> 00:55:57
wanting to say

00:55:54 --> 00:55:58
are all in there

00:55:56 --> 00:56:00
and there's like a voting going on yeah

00:55:58 --> 00:56:02
right and

00:55:59 --> 00:56:05
one of them is is winning

00:56:01 --> 00:56:08
and and that's affecting the you know

00:56:04 --> 00:56:09
the next sentence and so on yeah uh and

00:56:07 --> 00:56:11
uh

00:56:08 --> 00:56:13
there was this book

00:56:10 --> 00:56:15
machine intelligence or unintelligent on

00:56:12 --> 00:56:18
intelligence yeah bill

00:56:14 --> 00:56:20
atkinson uh was what was it what was a

00:56:17 --> 00:56:23
total

00:56:19 --> 00:56:26
devotee of that book well i like

00:56:22 --> 00:56:28
whether it's consciousness or something

00:56:25 --> 00:56:32
else i like the storytelling part that

00:56:27 --> 00:56:35
we it feels like uh for us

00:56:31 --> 00:56:37
humans it feels like there's a concrete

00:56:34 --> 00:56:39
it's almost like literary programming i

00:56:36 --> 00:56:40
don't know what the programming going on

00:56:38 --> 00:56:41
the inside but i'm getting a nice

00:56:39 --> 00:56:44
story here about

00:56:40 --> 00:56:46
what happened and it feels like i'm in

00:56:43 --> 00:56:48
control and i'm getting a nice clear

00:56:45 --> 00:56:50
story so but it's also possible there's

00:56:47 --> 00:56:52
a computation going on

00:56:49 --> 00:56:54
that's really messy there's a bunch of

00:56:51 --> 00:56:56
different competing ideas

00:56:53 --> 00:56:58
and in the end it just kind of generates

00:56:55 --> 00:57:01
a story for you to uh

00:56:57 --> 00:57:04
a consistent story for you to believe

00:57:00 --> 00:57:06
and that makes it all nice yeah and so

00:57:04 --> 00:57:09
i prefer to talk about things that i

00:57:05 --> 00:57:11
have some expertise and then things for

00:57:08 --> 00:57:13
which i which i'm only a

00:57:10 --> 00:57:15
uh you know

00:57:12 --> 00:57:17
on the sideline

00:57:14 --> 00:57:19
so there's a tricky thing i don't know

00:57:16 --> 00:57:21
if you have any expertise in this you

00:57:18 --> 00:57:22
might be a little bit on the sideline

00:57:20 --> 00:57:24
it'd be interesting to ask though

00:57:21 --> 00:57:26
what are your thoughts on cellular

00:57:23 --> 00:57:28
automata and the game of life

00:57:25 --> 00:57:31
have you ever played with those kind of

00:57:27 --> 00:57:33
little uh games i think uh the game of

00:57:30 --> 00:57:36
life uh it is

00:57:32 --> 00:57:37
wonderful and uh

00:57:36 --> 00:57:42
and

00:57:37 --> 00:57:43
shows all kind of stuff about how

00:57:41 --> 00:57:45
things

00:57:42 --> 00:57:47
can evolve without the creator

00:57:44 --> 00:57:48
understanding

00:57:46 --> 00:57:50
anything more than

00:57:47 --> 00:57:52
the power of

00:57:49 --> 00:57:54
learning things in a way but to me the

00:57:51 --> 00:57:55
most

00:57:53 --> 00:57:59
important thing about the game of life

00:57:54 --> 00:58:01
is that is is how it

00:57:58 --> 00:58:03
focused for me

00:58:00 --> 00:58:05
what what it meant to have free will or

00:58:02 --> 00:58:05
not

00:58:05 --> 00:58:12
because the game of life is obviously

00:58:07 --> 00:58:14
totally deterministic yes and i i i find

00:58:11 --> 00:58:15
it hard to believe that anybody who's

00:58:13 --> 00:58:17
ever had children

00:58:14 --> 00:58:20
cannot believe in free will

00:58:16 --> 00:58:23
right on the other hand

00:58:19 --> 00:58:26
this makes it crystal clear

00:58:22 --> 00:58:26
john conway said

00:58:27 --> 00:58:32
he wondered whether it was

00:58:29 --> 00:58:34
immoral to shut the computer off after

00:58:31 --> 00:58:38
he got into a particularly interesting

00:58:33 --> 00:58:40
play of the game of life um wow yeah so

00:58:37 --> 00:58:42
there is

00:58:39 --> 00:58:44
to me the reason i love the game of life

00:58:41 --> 00:58:47
is exactly as you said a clear

00:58:43 --> 00:58:49
illustration that from

00:58:46 --> 00:58:51
simple initial conditions with simple

00:58:48 --> 00:58:52
rules you know exactly

00:58:50 --> 00:58:54
how the system is operating is

00:58:52 --> 00:58:57
deterministic

00:58:53 --> 00:58:59
and yet if you let yourself

00:58:56 --> 00:59:02
if if you allow yourself to

00:58:58 --> 00:59:06
lose that knowledge a little bit

00:59:01 --> 00:59:08
enough to see the bigger organisms

00:59:05 --> 00:59:10
that emerge and then all of a sudden

00:59:07 --> 00:59:12
they seem conscious they seem

00:59:09 --> 00:59:15
not conscious but living if if the

00:59:11 --> 00:59:17
universe is finite

00:59:14 --> 00:59:19
we're all living in the game of life to

00:59:16 --> 00:59:22
slow down i mean

00:59:18 --> 00:59:24
it's sped up a lot

00:59:21 --> 00:59:27
but do you think technically

00:59:23 --> 00:59:29
some of the ideas that you used for

00:59:26 --> 00:59:31
analysis of algorithms can be used to

00:59:28 --> 00:59:33
analyze the game of life

00:59:30 --> 00:59:35
can we make sense of it or is it too

00:59:32 --> 00:59:37
weird yeah i mean i i

00:59:34 --> 00:59:39
've got i've got a dozen exercises in

00:59:36 --> 00:59:40
volume

00:59:38 --> 00:59:42
for

00:59:39 --> 00:59:43
fascicle six uh

00:59:41 --> 00:59:45
that

00:59:42 --> 00:59:47
actually worked rather well for that

00:59:44 --> 00:59:47
purpose

00:59:46 --> 00:59:49
but

00:59:46 --> 00:59:51
bill gospers

00:59:48 --> 00:59:54
came up with the

00:59:50 --> 00:59:56
algorithm that that allows

00:59:53 --> 00:59:57
that allowed golly to

00:59:55 --> 00:59:58
uh to

00:59:56 --> 01:00:01
you know to run thousands and thousands

00:59:57 --> 01:00:04
of times faster to

01:00:00 --> 01:00:06
you know the website called golly

01:00:03 --> 01:00:09
g-o-l-l-y it simulates the cellular

01:00:05 --> 01:00:11
automata like game of life yeah you got

01:00:08 --> 01:00:13
to check it out yeah

01:00:10 --> 01:00:17
can i ask about john conway

01:00:12 --> 01:00:19
es in fact i i i'm just reading now the

01:00:16 --> 01:00:22
issue of mathematical intelligence

01:00:18 --> 01:00:24
or that came in last last week it's a

01:00:21 --> 01:00:25
whole issue devoted to to

01:00:23 --> 01:00:26
uh

01:00:24 --> 01:00:31
you know

01:00:26 --> 01:00:32
remembrance of of him did you know him

01:00:30 --> 01:00:34
i

01:00:31 --> 01:00:36
slept overnight in his house several

01:00:33 --> 01:00:39
times i

01:00:35 --> 01:00:44
yeah he recently passed away

01:00:38 --> 01:00:45
eah he got he died a year ago

01:00:43 --> 01:00:49
may

01:00:44 --> 01:00:49
i think it was i've covered

01:00:48 --> 01:00:55
what are you what are some memories of

01:00:50 --> 01:00:55
him of his work that stand out for you

01:00:54 --> 01:00:57
is

01:00:54 --> 01:01:00
did uh

01:00:56 --> 01:01:03
on a technical level did any of his work

01:00:59 --> 01:01:07
inspire you on a personal level that

01:01:02 --> 01:01:08
did he himself inspire you in some way

01:01:06 --> 01:01:09
ou know absolutely to all of those

01:01:07 --> 01:01:11
things but

01:01:08 --> 01:01:14
let's see when did i first meet him i

01:01:10 --> 01:01:16
guess i first met him at oxford in like

01:01:13 --> 01:01:19
1967 when i was wow

01:01:15 --> 01:01:20
okay that's a long time ago yeah yeah

01:01:18 --> 01:01:22
you were minus

01:01:19 --> 01:01:23
20 years old or something i don't know

01:01:21 --> 01:01:25
1967.

01:01:22 --> 01:01:28
but but uh

01:01:24 --> 01:01:29
there was a conference where

01:01:27 --> 01:01:31
uh

01:01:28 --> 01:01:33
and i think i spoke

01:01:30 --> 01:01:34
i was speaking about

01:01:32 --> 01:01:36
something that

01:01:33 --> 01:01:37
known as the canoes bendix algorithm now

01:01:35 --> 01:01:41
but but he

01:01:36 --> 01:01:44
gave it famous talk about knots

01:01:40 --> 01:01:45
and and at the end i didn't know at the

01:01:43 --> 01:01:48
time but but

01:01:44 --> 01:01:50
anyway that talk had now

01:01:47 --> 01:01:51
the source of thousands and thousands of

01:01:49 --> 01:01:52
papers

01:01:50 --> 01:01:53
ince then

01:01:51 --> 01:01:55
uh and

01:01:52 --> 01:01:56
it was he was reported on something that

01:01:54 --> 01:01:59
he had done

01:01:55 --> 01:02:01
in high school uh

01:01:58 --> 01:02:03
you know almost ten years earlier

01:02:00 --> 01:02:04
[Music]

01:02:02 --> 01:02:07
before this conference but he never

01:02:03 --> 01:02:09
published it and and he climaxed his

01:02:06 --> 01:02:11
tock by

01:02:08 --> 01:02:13
building some nozzle

01:02:10 --> 01:02:15
you have these lit these little plastic

01:02:12 --> 01:02:16
things that you that you could stick

01:02:14 --> 01:02:18
together

01:02:15 --> 01:02:22
uh it's it's it's

01:02:17 --> 01:02:24
something like lego but easier

01:02:21 --> 01:02:25
and so he made a whole bunch of knots in

01:02:23 --> 01:02:27
front of the audience and so on and then

01:02:24 --> 01:02:29
disassembled it

01:02:26 --> 01:02:31
so it was

01:02:28 --> 01:02:33
a dramatic lecture

01:02:30 --> 01:02:35
before he had learned how to give even

01:02:32 --> 01:02:36
more dramatic lectures later

01:02:34 --> 01:02:37
so

01:02:35 --> 01:02:39
all right and

01:02:36 --> 01:02:41
were you at that lecture and i was there

01:02:38 --> 01:02:43
yeah because i had to i was at the same

01:02:40 --> 01:02:44
conference

01:02:42 --> 01:02:46
um

01:02:43 --> 01:02:48
for some reason i was i i happened to be

01:02:45 --> 01:02:49
in in calgary

01:02:47 --> 01:02:51
uh

01:02:48 --> 01:02:53
at the same day that he was visiting

01:02:50 --> 01:02:53
calgary

01:02:52 --> 01:02:58
and it was a spring of of 72

01:02:55 --> 01:02:59
i'm pretty sure

01:02:57 --> 01:03:01
and

01:02:58 --> 01:03:02
we had lunch together

01:03:00 --> 01:03:04
and

01:03:01 --> 01:03:05
he wrote down during the lunch on a

01:03:03 --> 01:03:07
napkin

01:03:04 --> 01:03:09
uh all of the

01:03:06 --> 01:03:11
facts about

01:03:08 --> 01:03:13
what he called numbers

01:03:10 --> 01:03:14
um and i

01:03:12 --> 01:03:16
and

01:03:13 --> 01:03:18
he covered the napkin with with the

01:03:15 --> 01:03:20
orems

01:03:17 --> 01:03:20
about his

01:03:19 --> 01:03:25
idea of numbers

01:03:21 --> 01:03:26
and i thought which was incredibly

01:03:24 --> 01:03:27
beautiful

01:03:25 --> 01:03:28
um

01:03:26 --> 01:03:31
and

01:03:27 --> 01:03:33
later in 1972

01:03:30 --> 01:03:34
my sabbatical year began and i went to

01:03:32 --> 01:03:35
norway

01:03:33 --> 01:03:37
and

01:03:34 --> 01:03:40
in december of that year

01:03:36 --> 01:03:41
uh in the middle of the night

01:03:39 --> 01:03:44
he thought came to me

01:03:40 --> 01:03:46
you know conway's theory about numbers

01:03:43 --> 01:03:49
would be a great

01:03:45 --> 01:03:50
hing to teach students how to invent

01:03:48 --> 01:03:52
research and what the joys are of

01:03:50 --> 01:03:53
research

01:03:51 --> 01:03:56
and

01:03:52 --> 01:03:57
i and so i said

01:03:55 --> 01:04:00
and i had also

01:03:56 --> 01:04:02
read a book in dialogue

01:03:59 --> 01:04:03
by by alfred rennie

01:04:01 --> 01:04:05
uh

01:04:02 --> 01:04:07
where he was kind of a socratic thing

01:04:04 --> 01:04:10
where the two characters were talking to

01:04:06 --> 01:04:12
each other about mathematics and so i

01:04:09 --> 01:04:13
and so

01:04:11 --> 01:04:15
at the end

01:04:12 --> 01:04:17
in the morning i i

01:04:14 --> 01:04:18
woke up my wife and said

01:04:16 --> 01:04:20
jill

01:04:17 --> 01:04:22
i think i want to write a book about

01:04:19 --> 01:04:23
conway's theory

01:04:21 --> 01:04:26
and

01:04:22 --> 01:04:27
um

01:04:25 --> 01:04:28
you know

01:04:26 --> 01:04:30
i'm supposed to be writing the

01:04:28 --> 01:04:32
art of computer programming doing all

01:04:29 --> 01:04:32
this other stuff but i got

01:04:31 --> 01:04:35
but

01:04:31 --> 01:04:36
i really want to write this other book

01:04:34 --> 01:04:38
and

01:04:35 --> 01:04:40
so we made this plan

01:04:37 --> 01:04:41
but i said i thought i could write it in

01:04:39 --> 01:04:42
a week

01:04:40 --> 01:04:45
and

01:04:41 --> 01:04:48
we made the plan then so in january

01:04:44 --> 01:04:50
i i rented a room in a hotel in downtown

01:04:47 --> 01:04:51
austin we were in sabbatical in norway

01:04:49 --> 01:04:53
uh

01:04:50 --> 01:04:56
and i ran at the hotel in in downtown

01:04:52 --> 01:04:57
oslo and um

01:04:55 --> 01:04:59
did nothing else

01:04:56 --> 01:05:01
xcept write

01:04:58 --> 01:05:04
up conway's theory and and i i changed

01:05:00 --> 01:05:07
the name to surreal numbers that so this

01:05:03 --> 01:05:10
book is now published as surreal number

01:05:06 --> 01:05:11
and um and

01:05:09 --> 01:05:13
you know we figured out we'd always

01:05:10 --> 01:05:15
wonder what what what would he like to

01:05:12 --> 01:05:17
have an affair in a hotel room so so we

01:05:14 --> 01:05:19
figured out that she would visit me

01:05:16 --> 01:05:21
twice during the week

01:05:18 --> 01:05:22
things like this you know we would

01:05:20 --> 01:05:25
you know

01:05:21 --> 01:05:27
try to sneak in this was hotel was was

01:05:24 --> 01:05:29
run by a mission organization these

01:05:26 --> 01:05:32
ladies were

01:05:28 --> 01:05:35
probably very strict but anyway so yeah

01:05:31 --> 01:05:37
so uh and the wild week

01:05:34 --> 01:05:40
in every way but the thing is i had lost

01:05:36 --> 01:05:42
hat i had lost that napkin in which you

01:05:39 --> 01:05:44
wrote the theory but but i i

01:05:41 --> 01:05:46
looked for it but i couldn't find it

01:05:43 --> 01:05:48
so i

01:05:45 --> 01:05:51
tried to recreate from memory what he

01:05:47 --> 01:05:55
told me at that luncheon uh in calgary

01:05:50 --> 01:05:57
and and as i as i wrote the book i i was

01:05:54 --> 01:05:58
going through exactly what i what the

01:05:56 --> 01:06:01
characters in the book were supposed to

01:05:57 --> 01:06:02
be doing so i start with the

01:06:00 --> 01:06:05
two axioms that start out the

01:06:02 --> 01:06:06
whole thing and everything is defined it

01:06:04 --> 01:06:07
flows from that but you have to discover

01:06:06 --> 01:06:10
why

01:06:06 --> 01:06:12
and and as a every mistake that i make

01:06:09 --> 01:06:15
as i'm trying to discover it i uh my

01:06:11 --> 01:06:18
characters make two right you know and

01:06:14 --> 01:06:20
and so it was it's a long long story

01:06:17 --> 01:06:21
and i but but i worked through this week

01:06:19 --> 01:06:23
uh

01:06:20 --> 01:06:26
and and it and it was

01:06:22 --> 01:06:28
it it was one of the most exciting

01:06:25 --> 01:06:30
intense weeks of my life and and

01:06:28 --> 01:06:33
i

01:06:30 --> 01:06:35
described it in other places but but

01:06:32 --> 01:06:37
anyway uh

01:06:34 --> 01:06:39
after six days i i finished it and on

01:06:36 --> 01:06:43
the seventh day i rested and

01:06:38 --> 01:06:44
i sent the right to my secretary to

01:06:42 --> 01:06:47
type it

01:06:43 --> 01:06:50
was flowing as i was writing it uh

01:06:46 --> 01:06:53
faster than i could think almost

01:06:49 --> 01:06:55
but but but after i finished it uh

01:06:52 --> 01:06:56
and tried to write a letter to my

01:06:54 --> 01:06:57
secretary

01:06:55 --> 01:06:59
telling her how to type it i couldn't

01:06:56 --> 01:07:01
write it anymore

01:06:58 --> 01:07:02
he gave it the muse had left me

01:07:00 --> 01:07:04
completely

01:07:02 --> 01:07:06
can you explain how that week could have

01:07:04 --> 01:07:09
happened like why is that seems like

01:07:05 --> 01:07:10
such a magical week i have no idea but

01:07:08 --> 01:07:14
anyway there was some

01:07:09 --> 01:07:15
it it was almost as if i was channeling

01:07:13 --> 01:07:16
so so

01:07:14 --> 01:07:18
the book

01:07:15 --> 01:07:20
was typed they sent it to conway

01:07:17 --> 01:07:24
and and he said well don you got the

01:07:19 --> 01:07:24
axiom the one axiom wrong

01:07:23 --> 01:07:28
there is a difference between

01:07:26 --> 01:07:30
um

01:07:27 --> 01:07:32
less than or equal and not greater than

01:07:29 --> 01:07:35
i don't know

01:07:31 --> 01:07:37
the opposite of being greater than yeah

01:07:34 --> 01:07:39
and less than or equal but anyway

01:07:36 --> 01:07:41
technically it can make a difference

01:07:38 --> 01:07:44
when you're developing a

01:07:40 --> 01:07:45
logical theory and the way i had chosen

01:07:43 --> 01:07:47
was harder

01:07:44 --> 01:07:50
to do than john's original

01:07:46 --> 01:07:52
so um and we visited him at his house in

01:07:49 --> 01:07:53
cambridge

01:07:51 --> 01:07:54
in april we took a boat actually from

01:07:52 --> 01:07:57
norway

01:07:53 --> 01:08:00
over to across the channel and and so on

01:07:56 --> 01:08:02
and stayed with him for some days and

01:07:59 --> 01:08:04
uh oh he told he talked

01:08:01 --> 01:08:07
we talked about all kinds of

01:08:03 --> 01:08:09
uh of of things he has

01:08:06 --> 01:08:11
he had

01:08:08 --> 01:08:13
puzzles that i'd never heard of before

01:08:10 --> 01:08:15
he had a great way to

01:08:12 --> 01:08:16
solve the game of solitaire

01:08:14 --> 01:08:18
many of the

01:08:15 --> 01:08:20
common interests that we you know he'd

01:08:17 --> 01:08:21
never written up and

01:08:19 --> 01:08:24
but but anyway

01:08:20 --> 01:08:27
uh then in the summer time i took

01:08:23 --> 01:08:29
another week off and went to a

01:08:26 --> 01:08:31
place in in in

01:08:28 --> 01:08:32
the mountains of norway and and rewrote

01:08:30 --> 01:08:34
the book

01:08:31 --> 01:08:36
using the correct axiom

01:08:33 --> 01:08:38
and so so that was the most intensive

01:08:35 --> 01:08:41
connection with

01:08:37 --> 01:08:43
conway uh after that uh it started

01:08:40 --> 01:08:44
with a napkin it started with an app

01:08:42 --> 01:08:46
connect

01:08:43 --> 01:08:48
but but but we would

01:08:46 --> 01:08:50
run into each other

01:08:47 --> 01:08:52
all that well yeah

01:08:49 --> 01:08:55
the next really impo

01:08:51 --> 01:08:57
i was giving lectures in montreal

01:08:54 --> 01:09:01
uh

01:08:56 --> 01:09:03
i i was giving a series of um

01:09:00 --> 01:09:05
of of seven lectures about the topic

01:09:02 --> 01:09:06
alled stable marriages

01:09:04 --> 01:09:09
and

01:09:05 --> 01:09:10
and he arrived in montreal uh

01:09:09 --> 01:09:15
between my sixth and seventh lecture

01:09:12 --> 01:09:17
and and we met at a party

01:09:14 --> 01:09:19
and uh i i

01:09:16 --> 01:09:22
started telling him about the topic i

01:09:18 --> 01:09:24
was doing and uh he sat and thought

01:09:21 --> 01:09:25
about it he came up with a beautiful

01:09:23 --> 01:09:28
theory

01:09:24 --> 01:09:30
to show that the uh i mean in technical

01:09:27 --> 01:09:32
terms it's it's that the

01:09:29 --> 01:09:34
set of all stable marriages it

01:09:31 --> 01:09:36
forms a lattice

01:09:33 --> 01:09:38
and and there was a simple way to find

01:09:35 --> 01:09:40
the greatest lower bound

01:09:37 --> 01:09:41
of of two stable

01:09:39 --> 01:09:42
pairings and

01:09:40 --> 01:09:44
least upper bound of two stable

01:09:41 --> 01:09:46
married and so i could use it in my

01:09:43 --> 01:09:50
lecture the next day and he came up with

01:09:45 --> 01:09:51
is theorem you know during the party

01:09:49 --> 01:09:52
uh and it it

01:09:50 --> 01:09:55
's a brilliant yeah it's a

01:09:51 --> 01:09:56
distributive lesson i mean it

01:09:54 --> 01:10:00
's uh you know

01:09:55 --> 01:10:02
uh it it added greatly to the theory of

01:09:59 --> 01:10:04
stable matching

01:10:01 --> 01:10:07
so you mentioned your wife jill

01:10:03 --> 01:10:08
you mentioned stable marriage

01:10:06 --> 01:10:09
can you tell the story of how you two

01:10:07 --> 01:10:12
met

01:10:08 --> 01:10:12
so we celebrated 60 years of wedded

01:10:11 --> 01:10:15
bliss

01:10:11 --> 01:10:18
uh last month

01:10:14 --> 01:10:20
and and we met because uh uh i was

01:10:17 --> 01:10:22
dating her roommate

01:10:19 --> 01:10:24
this this was my sophomore year her

01:10:21 --> 01:10:26
freshman year i i was dating her

01:10:23 --> 01:10:27
oommate and

01:10:25 --> 01:10:29
i wanted

01:10:26 --> 01:10:31
her advice on

01:10:28 --> 01:10:32
strategy or something like this and

01:10:30 --> 01:10:35
anyway i

01:10:31 --> 01:10:37
found i enjoyed her advice better than

01:10:34 --> 01:10:40
i enjoyed a roommate

01:10:36 --> 01:10:42
you guys were majoring the same thing no

01:10:39 --> 01:10:43
no because because i read something

01:10:41 --> 01:10:47
about

01:10:42 --> 01:10:48
working on a computer in grad school

01:10:46 --> 01:10:50
on a difficult

01:10:47 --> 01:10:54
computer science topic

01:10:50 --> 01:10:55
so so she's an artist and i'm okay

01:10:53 --> 01:10:57
and i'm a

01:10:54 --> 01:10:59
you know geek and what was she doing

01:10:56 --> 01:11:02
with a computer science book all right i

01:10:58 --> 01:11:04
read the was it the manual that she was

01:11:01 --> 01:11:06
reading what was she reading i wrote the

01:11:03 --> 01:11:09
manual that she had had she had to take

01:11:05 --> 01:11:12
a class in computer science okay

01:11:08 --> 01:11:15
and and uh you're the tutor no no yeah

01:11:11 --> 01:11:18
no we yeah we

01:11:14 --> 01:11:19
there were tearful times uh

01:11:17 --> 01:11:22
you know

01:11:18 --> 01:11:24
trying to learn certain concepts but i

01:11:21 --> 01:11:27
learned art from her

01:11:23 --> 01:11:29
and so we we worked together

01:11:26 --> 01:11:30
you know occasionally in design

01:11:28 --> 01:11:33
projects but

01:11:29 --> 01:11:36
every year we write a christmas card

01:11:32 --> 01:11:38
and and we each have to

01:11:35 --> 01:11:39
compromise our

01:11:37 --> 01:11:41
own

01:11:38 --> 01:11:43
otions of beauty yes

01:11:40 --> 01:11:45
uh when did you

01:11:42 --> 01:11:47
fall in love with her

01:11:44 --> 01:11:50
that day that i

01:11:46 --> 01:11:52
asked her about her her roommate

01:11:49 --> 01:11:53
okay i mean

01:11:51 --> 01:11:55
o i i

01:11:52 --> 01:11:58
okay so

01:11:54 --> 01:12:00
i i don't mind telling these things

01:11:57 --> 01:12:00
depending on how you for how far you go

01:11:59 --> 01:12:03
but

01:11:59 --> 01:12:06
[Laughter]

01:12:02 --> 01:12:08
but let me promise

01:12:05 --> 01:12:10
let me tell you this that i

01:12:07 --> 01:12:12
never really enjoyed kissing

01:12:09 --> 01:12:13
uh

01:12:11 --> 01:12:16
until i

01:12:12 --> 01:12:16
found how she did it

01:12:16 --> 01:12:23
and 60 years yeah

01:12:20 --> 01:12:26
is there a secret you can uh you can say

01:12:22 --> 01:12:28
in terms of stable marriages of how you

01:12:25 --> 01:12:30
stayed together so long

01:12:27 --> 01:12:31
the topic stable marriage by the way is

01:12:29 --> 01:12:32
not

01:12:30 --> 01:12:35
it is

01:12:31 --> 01:12:37
the technical term uh yes

01:12:34 --> 01:12:37
it's

01:12:38 --> 01:12:43
[Music]

01:12:40 --> 01:12:45
different people will have to

01:12:42 --> 01:12:46
learn how to compromise and

01:12:44 --> 01:12:48
and

01:12:45 --> 01:12:50
work together and and

01:12:48 --> 01:12:52
you're going to have ups and downs

01:12:49 --> 01:12:54
and and

01:12:51 --> 01:12:56
crises and so on um

01:12:53 --> 01:12:59
and so as long as you don't

01:12:55 --> 01:13:02
set your expectation on

01:12:58 --> 01:13:02
having 24 hours of bliss

01:13:02 --> 01:13:06
then there's a lot of hope for stability

01:13:04 --> 01:13:08
but if you if

01:13:05 --> 01:13:10
you decide that it's

01:13:07 --> 01:13:11
that that there's going to be no

01:13:09 --> 01:13:14
frustration

01:13:10 --> 01:13:16
[Music]

01:13:13 --> 01:13:18
so you're going to have to compromise on

01:13:15 --> 01:13:20
your notions of beauty when you write

01:13:17 --> 01:13:22
christmas cards that's it

01:13:19 --> 01:13:24
uh

01:13:21 --> 01:13:26
you uh you mentioned that richard

01:13:23 --> 01:13:29
feynman was someone you looked up to

01:13:25 --> 01:13:30
yep um probably you've met him in

01:13:28 --> 01:13:33
caltech

01:13:29 --> 01:13:36
well we knew each other

01:13:32 --> 01:13:38
yeah at cal tech for sure yeah

01:13:35 --> 01:13:40
uh you are

01:13:37 --> 01:13:43
one of the seminal personalities

01:13:39 --> 01:13:44
of computer science he's one for physics

01:13:42 --> 01:13:46
have you ever

01:13:43 --> 01:13:47
is there specific things you picked up

01:13:45 --> 01:13:50
from him

01:13:46 --> 01:13:52
by way of inspiration or uh

01:13:49 --> 01:13:54
so we used to go to each other's

01:13:51 --> 01:13:55
lectures and

01:13:53 --> 01:13:57
uh

01:13:54 --> 01:13:59
but but if i saw him sitting in the

01:13:56 --> 01:14:01
front row

01:13:58 --> 01:14:05
i would throw me for a loop actually and

01:14:00 --> 01:14:07
i i i would i would miss a few

01:14:04 --> 01:14:09
sentences

01:14:06 --> 01:14:10
what unique story do i have about i mean

01:14:08 --> 01:14:14
i

01:14:10 --> 01:14:17
i i often refer to his

01:14:13 --> 01:14:19
time in brazil

01:14:16 --> 01:14:20
where he uh

01:14:18 --> 01:14:22
essentially

01:14:19 --> 01:14:24
said they were teaching all the physics

01:14:21 --> 01:14:25
tudents the wrong way they were just

01:14:23 --> 01:14:27
learning how to pass

01:14:24 --> 01:14:29
exams and not learning any physics

01:14:26 --> 01:14:32
and he said

01:14:28 --> 01:14:33
you know if you want me to prove it

01:14:31 --> 01:14:34
you know

01:14:32 --> 01:14:36
here i'll turn to any page of this

01:14:33 --> 01:14:37
textbook and

01:14:35 --> 01:14:39
i'll tell you what's wrong with this

01:14:36 --> 01:14:41
page and and he did so and

01:14:38 --> 01:14:45
the textbook had been written by his

01:14:40 --> 01:14:47
host and and it was a big embarrassing

01:14:44 --> 01:14:49
incident but he had previously asked his

01:14:46 --> 01:14:50
host if if he was supposed to tell the

01:14:48 --> 01:14:51
truth

01:14:49 --> 01:14:53
um

01:14:50 --> 01:14:55
but but anyway it

01:14:52 --> 01:14:58
epitomizes the way

01:14:54 --> 01:14:59
education goes wrong uh in all kinds of

01:14:57 --> 01:15:02
ields

01:14:58 --> 01:15:03
uh and has to periodically

01:15:01 --> 01:15:04
be brought

01:15:02 --> 01:15:06
back

01:15:04 --> 01:15:09
from from

01:15:06 --> 01:15:11
a process of giving credentials to

01:15:08 --> 01:15:13
a process of giving knowledge

01:15:10 --> 01:15:16
that's probably a story that continues

01:15:12 --> 01:15:19
to this day in a bunch of places where

01:15:15 --> 01:15:19
it's too easy for

01:15:19 --> 01:15:26
educational institutions to fall into

01:15:22 --> 01:15:28
credentialism versus uh

01:15:25 --> 01:15:30
inspirationalism

01:15:27 --> 01:15:33
i don't know if those are words but

01:15:29 --> 01:15:36
sort of uh yeah understanding versus

01:15:32 --> 01:15:38
just giving a little um

01:15:35 --> 01:15:41
it would be plaque

01:15:37 --> 01:15:42
and you know it's it's very much like

01:15:40 --> 01:15:44
what we were talking about if you want

01:15:41 --> 01:15:46
he computer to

01:15:43 --> 01:15:49
if you want to be able to believe the

01:15:45 --> 01:15:50
answer computer is sure it's doing that

01:15:48 --> 01:15:52
one of the things

01:15:49 --> 01:15:54
bob floyd showed me in the 60s there was

01:15:51 --> 01:15:57
a

01:15:53 --> 01:15:58
uh he loved this cartoon there was a

01:15:56 --> 01:16:00
there were two

01:15:57 --> 01:16:01
guys standing in front of

01:15:59 --> 01:16:02
in those days the computer was a big

01:16:00 --> 01:16:04
thing you know

01:16:01 --> 01:16:05
and and the first guy says to the other

01:16:03 --> 01:16:06
guy he said

01:16:04 --> 01:16:09
this machine

01:16:05 --> 01:16:12
can do in one second what it would take

01:16:08 --> 01:16:13
uh a million people to do in a hundred

01:16:11 --> 01:16:14
years

01:16:12 --> 01:16:16
and the other guy says oh so how do you

01:16:14 --> 01:16:18
know it's right

01:16:15 --> 01:16:22
[Laughter]

01:16:17 --> 01:16:24
that's a good line uh

01:16:21 --> 01:16:27
is there some interesting distinction

01:16:23 --> 01:16:29
between physics and math to you

01:16:26 --> 01:16:31
have you looked at physics much to like

01:16:28 --> 01:16:32
speak university feynman

01:16:30 --> 01:16:33
so

01:16:31 --> 01:16:35
the difference between the physics

01:16:32 --> 01:16:37
community the physics way of thinking

01:16:34 --> 01:16:39
the physics intuition versus

01:16:36 --> 01:16:41
the computer science the theoretical

01:16:38 --> 01:16:42
computer science the mathematical

01:16:40 --> 01:16:44
sciences

01:16:41 --> 01:16:46
do you see that as a gap are they

01:16:43 --> 01:16:47
strongly overlapping

01:16:45 --> 01:16:50
it's quite different

01:16:46 --> 01:16:53
in my opinion i um i started as a

01:16:49 --> 01:16:55
physics major and i switched into math

01:16:52 --> 01:16:57
and

01:16:54 --> 01:16:59
probably the reason was that i could i

01:16:56 --> 01:17:02
could get a plus on the physics exam but

01:16:58 --> 01:17:04
i like i never had any idea why i would

01:17:01 --> 01:17:05
have been able to

01:17:03 --> 01:17:07
come up with the problems that were on

01:17:04 --> 01:17:09
those exams

01:17:06 --> 01:17:12
but but in math

01:17:08 --> 01:17:14
i i i knew

01:17:11 --> 01:17:15
you know why the teacher set those

01:17:13 --> 01:17:17
problems and i thought of other problems

01:17:14 --> 01:17:19
that i could set too

01:17:16 --> 01:17:22
and i believe it's quite a different

01:17:18 --> 01:17:22
mentality

01:17:21 --> 01:17:28
is it it has to do with your philosophy

01:17:24 --> 01:17:28
of geek geekdom

01:17:27 --> 01:17:31
i mean

01:17:28 --> 01:17:33
some of my computer scientist friends

01:17:30 --> 01:17:36
are really good at physics and others

01:17:32 --> 01:17:38
are not and and i i'm

01:17:35 --> 01:17:40
uh you know i'm really good at algebra

01:17:37 --> 01:17:41
but not at geometry you

01:17:39 --> 01:17:44
talk about different parts of

01:17:40 --> 01:17:45
mathematics you know i just it's

01:17:43 --> 01:17:47
o they're different kind of physical

01:17:44 --> 01:17:48
but physicists think of things in terms

01:17:46 --> 01:17:49
of waves

01:17:47 --> 01:17:51
and

01:17:48 --> 01:17:53
i can think of

01:17:50 --> 01:17:55
things in terms of waves but it's like a

01:17:52 --> 01:17:57
dog walking on hind legs if i'm thinking

01:17:54 --> 01:18:00
about it so you basically you like to

01:17:56 --> 01:18:02
see the world in in uh

01:17:59 --> 01:18:05
in discrete ways and then this is more

01:18:02 --> 01:18:09
continuous yeah i i i'm not sure

01:18:04 --> 01:18:11
if turing would been a great physicist i

01:18:08 --> 01:18:13
think it was a pretty good

01:18:10 --> 01:18:15
chemist

01:18:12 --> 01:18:16
i don't know but but uh but anyway i see

01:18:14 --> 01:18:20
things

01:18:15 --> 01:18:22
i i i believe that computer science is

01:18:19 --> 01:18:26
largely

01:18:21 --> 01:18:28
driven by uh a people who have

01:18:25 --> 01:18:29
brains who work

01:18:27 --> 01:18:31
who are good at

01:18:28 --> 01:18:33
resonating with

01:18:30 --> 01:18:35
certain kind of

01:18:32 --> 01:18:37
of concepts

01:18:34 --> 01:18:38
and like quantum computers it takes a

01:18:36 --> 01:18:40
different kind of brain yeah that's

01:18:37 --> 01:18:41
interesting yeah

01:18:39 --> 01:18:44
it's it's well quantum computers is

01:18:40 --> 01:18:45
almost like at the intersection in terms

01:18:43 --> 01:18:48
of brain

01:18:44 --> 01:18:50
uh between computer science and physics

01:18:48 --> 01:18:54
because they it involves both at least

01:18:49 --> 01:18:56
at this at this time

01:18:53 --> 01:18:57
but there is like the physicists i've

01:18:55 --> 01:19:00
known

01:18:56 --> 01:19:02
they have incredibly powerful intuition

01:18:59 --> 01:19:05
and and there's a lot i mean statistical

01:19:01 --> 01:19:07
mechanics so i i study

01:19:04 --> 01:19:09
uh statistical mechanics and

01:19:06 --> 01:19:12
you know

01:19:08 --> 01:19:14
i mean random processes uh uh are

01:19:11 --> 01:19:16
lated to algorithms in a lot of a lot

01:19:13 --> 01:19:18
of ways and so but there's lots of

01:19:15 --> 01:19:19
different flavors of flavors of physics

01:19:17 --> 01:19:21
as there are different flavors of

01:19:18 --> 01:19:24
mathematics as well

01:19:20 --> 01:19:26
um but but the thing is that i i don't

01:19:23 --> 01:19:27
see

01:19:25 --> 01:19:30
well

01:19:26 --> 01:19:31
actually when they talk to physicists

01:19:29 --> 01:19:34
use a completely different language than

01:19:30 --> 01:19:36
when they're talking to

01:19:33 --> 01:19:38
when they're writing expository papers

01:19:35 --> 01:19:39
o i didn't understand quantum mechanics

01:19:37 --> 01:19:41
at all from reading about it in

01:19:38 --> 01:19:43
scientific american

01:19:40 --> 01:19:44
but but when i read

01:19:42 --> 01:19:46
you know how they described it to each

01:19:43 --> 01:19:48
other talking about eigen eigenvalues

01:19:45 --> 01:19:50
and

01:19:47 --> 01:19:51
various mathematical

01:19:49 --> 01:19:53
terms that

01:19:50 --> 01:19:55
made sense

01:19:52 --> 01:19:58
then it made sense to me

01:19:54 --> 01:20:00
but but hawking said that

01:19:57 --> 01:20:01
every formula you put in a book you lose

01:19:59 --> 01:20:03
half of your readers and so he didn't

01:20:00 --> 01:20:06
put any formulas into the book so i

01:20:02 --> 01:20:08
couldn't understand his book at all

01:20:05 --> 01:20:09
you could say you understood it but

01:20:07 --> 01:20:11
i really

01:20:08 --> 01:20:13
didn't

01:20:10 --> 01:20:16
um well feynman

01:20:12 --> 01:20:18
also spoke in this way so feynman

01:20:15 --> 01:20:20
i think prided himself on a really

01:20:17 --> 01:20:23
strong intuition but at the same time he

01:20:19 --> 01:20:25
was hiding all the the really good the

01:20:22 --> 01:20:28
deep computation he was doing so so

01:20:24 --> 01:20:31
there was one thing that that uh

01:20:27 --> 01:20:33
that i i was never able to uh yeah i

01:20:30 --> 01:20:34
wish i had more time to to work out with

01:20:32 --> 01:20:35
im but

01:20:33 --> 01:20:37
i guess i could describe it for you

01:20:34 --> 01:20:39
there's

01:20:36 --> 01:20:40
something that got my name

01:20:38 --> 01:20:43
attached to it

01:20:39 --> 01:20:45
called knuth arrow notation but

01:20:42 --> 01:20:49
it's a notation for very large numbers

01:20:44 --> 01:20:53
and so uh it i find out that that

01:20:48 --> 01:20:55
somebody invented it in in 1830s

01:20:52 --> 01:20:58
it's fairly easy to

01:20:54 --> 01:20:59
understand anyway so you start with

01:20:57 --> 01:21:02
x

01:20:58 --> 01:21:03
plus x plus x plus x

01:21:01 --> 01:21:07
n times

01:21:02 --> 01:21:10
and and you can call that x n

01:21:06 --> 01:21:11
so x n is multiplication then you take x

01:21:09 --> 01:21:13
times x

01:21:10 --> 01:21:18
times x and n time that gives

01:21:12 --> 01:21:21
you exponentiation x to the nth power

01:21:17 --> 01:21:23
so that's one arrow x

01:21:20 --> 01:21:24
so x n with no arrows is multiplication

01:21:22 --> 01:21:27
x

01:21:23 --> 01:21:29
arrow n is x to the nth power yes just

01:21:26 --> 01:21:30
o clarify for the

01:21:28 --> 01:21:34
uh

01:21:30 --> 01:21:36
so x times x times x n times is

01:21:33 --> 01:21:37
obviously x n

01:21:35 --> 01:21:40
and x

01:21:36 --> 01:21:43
plus x plus x n times

01:21:39 --> 01:21:46
oh yeah okay and then uh xn

01:21:42 --> 01:21:48
multiplication is x to the n uh and then

01:21:45 --> 01:21:50
here the arrow is when you're

01:21:47 --> 01:21:52
doing the same kind of repetitive

01:21:49 --> 01:21:55
operation for the exponential so i so i

01:21:52 --> 01:21:57
put in one arrow and i get x to the nth

01:21:54 --> 01:22:00
power now i put in two arrows and that

01:21:56 --> 01:22:01
makes takes x to the x to the x to the x

01:22:00 --> 01:22:04
n times pi

01:22:01 --> 01:22:06
so in other words if

01:22:03 --> 01:22:07
if it's two

01:22:05 --> 01:22:08
uh

01:22:06 --> 01:22:11
double arrow

01:22:07 --> 01:22:14
uh three that would be

01:22:10 --> 01:22:15
2 to the 2 to the 2

01:22:13 --> 01:22:19
so that would be 2 to the fourth power

01:22:14 --> 01:22:20
that'd be 16 okay okay so so so that's

01:22:18 --> 01:22:22
the double arrow

01:22:19 --> 01:22:23
and now you can

01:22:21 --> 01:22:24
do a

01:22:22 --> 01:22:27
triple arrow

01:22:23 --> 01:22:29
uh of course uh and

01:22:26 --> 01:22:29
so on

01:22:28 --> 01:22:33
and

01:22:28 --> 01:22:33
i i had this this paper called

01:22:32 --> 01:22:35
uh

01:22:32 --> 01:22:36
well

01:22:34 --> 01:22:37
essentially big numbers

01:22:36 --> 01:22:39
uh

01:22:36 --> 01:22:41
you know you yeah you try to impress

01:22:38 --> 01:22:43
your friend but by saying a number

01:22:40 --> 01:22:44
they've never thought of before yeah and

01:22:43 --> 01:22:47
i i gave a special name

01:22:45 --> 01:22:48
for it

01:22:46 --> 01:22:50
we

01:22:47 --> 01:22:54
designed a font for it that has script k

01:22:49 --> 01:22:55
and so on but it but it really is 10

01:22:53 --> 01:22:58
i think like 10

01:22:54 --> 01:23:00
quadruple aero 3 or something like that

01:22:57 --> 01:23:02
and i claim that that number if it

01:22:59 --> 01:23:04
is so mind-boggling that you can't

01:23:01 --> 01:23:06
comprehend how large it is

01:23:03 --> 01:23:08
but anyway fine

01:23:05 --> 01:23:10
i talked to feynman about this and he

01:23:07 --> 01:23:12
said oh

01:23:09 --> 01:23:15
let's just let's just use double arrow

01:23:12 --> 01:23:16
but instead of taking integers let's

01:23:14 --> 01:23:18
consider

01:23:15 --> 01:23:21
complex numbers right so

01:23:17 --> 01:23:21
you know you have

01:23:22 --> 01:23:28
that means x to the x

01:23:25 --> 01:23:30
but what about x

01:23:27 --> 01:23:33
double arrow two

01:23:29 --> 01:23:36
2.5 well that's not too hard to figure

01:23:32 --> 01:23:37
out that's interpolate between those but

01:23:35 --> 01:23:40
what what what

01:23:36 --> 01:23:43
x double arrow

01:23:39 --> 01:23:43
i or one plus i or some complex number

01:23:42 --> 01:23:45
uh

01:23:42 --> 01:23:48
and

01:23:44 --> 01:23:51
uh so he claimed that

01:23:47 --> 01:23:52
that there was no analytic

01:23:50 --> 01:23:55
function that would

01:23:51 --> 01:23:58
do that would do the job uh

01:23:54 --> 01:24:03
but i i i i didn't know how he could

01:23:57 --> 01:24:05
claim that that was that wasn't true

01:24:02 --> 01:24:07
and his next question was did then have

01:24:04 --> 01:24:10
a complex number of arrows

01:24:06 --> 01:24:13
[Laughter]

01:24:09 --> 01:24:15
yeah okay wow okay okay so so that's

01:24:12 --> 01:24:18
fine uh that's

01:24:14 --> 01:24:19
fine can you describe what the

01:24:17 --> 01:24:20
[Music]

01:24:18 --> 01:24:23
uh

01:24:19 --> 01:24:25
new morris pratt algorithm does

01:24:22 --> 01:24:28
and how did you come to develop it one

01:24:24 --> 01:24:30
of the many things that you're known for

01:24:27 --> 01:24:32
and has your name attached to it yeah

01:24:29 --> 01:24:35
all right so

01:24:31 --> 01:24:38
it should be actually morris pratt knuth

01:24:34 --> 01:24:40
but we decided to use alphabetical order

01:24:37 --> 01:24:41
when we published the paper

01:24:39 --> 01:24:44
the problem is

01:24:40 --> 01:24:47
uh something that everybody knows now if

01:24:43 --> 01:24:49
they're if they're using a search engine

01:24:46 --> 01:24:50
uh

01:24:48 --> 01:24:53
you have a

01:24:49 --> 01:24:54
large collection of text

01:24:52 --> 01:24:56
and you want to know if

01:24:53 --> 01:24:58
the word

01:24:55 --> 01:25:01
canoeist appears anywhere in the text to

01:24:57 --> 01:25:02
say or or some

01:25:00 --> 01:25:03
other word that's less interesting

01:25:01 --> 01:25:05
than

01:25:02 --> 01:25:06
but anyway that's the most interesting

01:25:04 --> 01:25:08
thing

01:25:05 --> 01:25:10
or something mega morris right

01:25:07 --> 01:25:14
so we have we have

01:25:09 --> 01:25:17
a large piece of text and it it's all

01:25:13 --> 01:25:18
one long one-dimensional thing you know

01:25:16 --> 01:25:22
first or second letter

01:25:18 --> 01:25:24
et cetera et cetera et cetera and so uh

01:25:21 --> 01:25:26
the question you would like to be able

01:25:23 --> 01:25:28
to do this

01:25:25 --> 01:25:30
um

01:25:27 --> 01:25:32
and the obvious way is that let's say

01:25:29 --> 01:25:35
we're looking for morris they don't know

01:25:31 --> 01:25:37
that so we would we would go through and

01:25:34 --> 01:25:39
wait till we get to letter m then we

01:25:36 --> 01:25:43
look at the next word and sure enough

01:25:38 --> 01:25:44
it's an o and then an r but then that oh

01:25:42 --> 01:25:45
too bad

01:25:43 --> 01:25:48
um

01:25:44 --> 01:25:51
yeah the next letter is is e

01:25:47 --> 01:25:53
so we missed we missed out on morris

01:25:50 --> 01:25:56
and so

01:25:52 --> 01:25:57
we go back and start looking for another

01:25:55 --> 01:25:59
okay all over again so that's the

01:25:56 --> 01:26:00
obvious way to do it

01:25:58 --> 01:26:01
all right

01:25:59 --> 01:26:04
um

01:26:00 --> 01:26:06
and and jim morris noticed

01:26:03 --> 01:26:08
there was a more clever way

01:26:05 --> 01:26:10
to do it

01:26:07 --> 01:26:11
he obvious way would have started

01:26:09 --> 01:26:13
let's say

01:26:10 --> 01:26:15
ou know we found that let letter m at

01:26:12 --> 01:26:17
character position one thousand

01:26:14 --> 01:26:19
so it was started next at character

01:26:16 --> 01:26:20
position 1001

01:26:18 --> 01:26:21
[Music]

01:26:19 --> 01:26:24
but

01:26:20 --> 01:26:26
he but he said no look we we already

01:26:23 --> 01:26:28
read the o and the r

01:26:25 --> 01:26:31
and we know that they aren't m's

01:26:27 --> 01:26:34
o we could we could start

01:26:30 --> 01:26:36
we don't have to read those over again

01:26:33 --> 01:26:38
all right so uh

01:26:35 --> 01:26:40
and this gets pretty tricky when

01:26:37 --> 01:26:42
the word isn't morris but it's more

01:26:40 --> 01:26:44
like

01:26:41 --> 01:26:46
abracadabra where you have patterns that

01:26:43 --> 01:26:48
are occurring uh

01:26:45 --> 01:26:50
like repeating patterns

01:26:47 --> 01:26:53
at the beginning at the middle right

01:26:49 --> 01:26:55
so so um

01:26:52 --> 01:26:57
he worked it out

01:26:54 --> 01:26:59
and he put it into the system software

01:26:56 --> 01:27:02
at berkeley i think it was where he was

01:26:58 --> 01:27:04
writing some berkeley unix i

01:27:01 --> 01:27:06
think was some routine i was supposed to

01:27:03 --> 01:27:09
find occurrences of patterns in texas

01:27:05 --> 01:27:09
and

01:27:10 --> 01:27:15
we didn't explain it

01:27:12 --> 01:27:17
and and so he found out that several

01:27:14 --> 01:27:19
months later somebody had

01:27:16 --> 01:27:21
looked at it didn't look right and

01:27:18 --> 01:27:23
so they ripped it out

01:27:20 --> 01:27:25
so he had this this algorithm but it

01:27:22 --> 01:27:26
didn't make it through

01:27:24 --> 01:27:28
you know because he what wasn't

01:27:26 --> 01:27:31
understood

01:27:27 --> 01:27:35
nobody knew about this particularly

01:27:30 --> 01:27:39
von pratt also had independently

01:27:34 --> 01:27:41
discovered it a year or two later

01:27:38 --> 01:27:42
i forget why

01:27:40 --> 01:27:44
i think

01:27:41 --> 01:27:45
vaughn was studying some

01:27:43 --> 01:27:47
technical

01:27:44 --> 01:27:49
problem

01:27:46 --> 01:27:52
about palindromes or something like that

01:27:48 --> 01:27:53
he wasn't really it juan wasn't working

01:27:51 --> 01:27:56
on

01:27:52 --> 01:27:58
text searching but he was working on

01:27:55 --> 01:28:02
an abstract problem that

01:27:57 --> 01:28:05
was related well at that time steve

01:28:01 --> 01:28:06
cook was a professor at berkeley uh

01:28:04 --> 01:28:07
and uh

01:28:06 --> 01:28:10
it was the

01:28:07 --> 01:28:12
greatest mistake that

01:28:09 --> 01:28:13
berkeley cs department made was not to

01:28:11 --> 01:28:15
give him tenure

01:28:12 --> 01:28:19
and so steve went to

01:28:14 --> 01:28:21
toronto but um but i but i knew

01:28:18 --> 01:28:23
steve while he was at berkeley

01:28:20 --> 01:28:26
and he had come up with a

01:28:22 --> 01:28:27
very peculiar theorem

01:28:25 --> 01:28:29
uh

01:28:26 --> 01:28:31
about a technical concept called a stack

01:28:28 --> 01:28:33
automaton

01:28:30 --> 01:28:34
and a stack automaton it is a machine

01:28:32 --> 01:28:37
that

01:28:33 --> 01:28:38
it can't do everything a turing

01:28:36 --> 01:28:40
machine can do but it

01:28:37 --> 01:28:41
can only look at

01:28:39 --> 01:28:43
something on

01:28:40 --> 01:28:45
at the top of a stack or it can put more

01:28:42 --> 01:28:47
things on the stack or or it can take

01:28:44 --> 01:28:50
things off the stack

01:28:46 --> 01:28:52
like it can't remember a long string of

01:28:49 --> 01:28:55
symbols but but it can remember them in

01:28:51 --> 01:28:57
reverse order so so if you tell a stack

01:28:54 --> 01:28:57
of thomas on

01:28:58 --> 01:29:04
it can tell you afterwards edcba

01:29:02 --> 01:29:05
you know it doesn't have any other

01:29:03 --> 01:29:08
memory except

01:29:04 --> 01:29:10
this one thing that it can see

01:29:07 --> 01:29:11
and steve cook proved this amazing thing

01:29:09 --> 01:29:14
that says

01:29:10 --> 01:29:17
if a stack automaton can recognize a

01:29:13 --> 01:29:18
language

01:29:16 --> 01:29:19
where the strings of the language are

01:29:17 --> 01:29:21
length n

01:29:18 --> 01:29:24
in any um

01:29:20 --> 01:29:26
amount of time whatsoever so the stack

01:29:23 --> 01:29:29
automaton you might use a zillion steps

01:29:25 --> 01:29:31
a regular computer can recognize that

01:29:28 --> 01:29:34
same language in time n log n

01:29:30 --> 01:29:36
so steve had a way of transforming

01:29:33 --> 01:29:39
a a computation that goes on and on and

01:29:35 --> 01:29:42
on

01:29:38 --> 01:29:43
into using different data structures

01:29:41 --> 01:29:46
into something that you can do on a

01:29:42 --> 01:29:50
regular computer uh fast

01:29:45 --> 01:29:53
he stack of timezone goes slow but

01:29:49 --> 01:29:54
but but somehow the fact that it can

01:29:52 --> 01:29:56
do it at all

01:29:53 --> 01:29:58
means that there has to be a fast way

01:29:55 --> 01:30:00
so i thought this was a pretty

01:29:57 --> 01:30:02
ou know cool theorem

01:29:59 --> 01:30:04
and so i tried it out on

01:30:02 --> 01:30:06
a problem

01:30:03 --> 01:30:09
where i knew

01:30:05 --> 01:30:11
a stack automaton could do it

01:30:08 --> 01:30:13
but i couldn't figure out a fast way to

01:30:10 --> 01:30:15
do it on a regular computer i thought i

01:30:12 --> 01:30:16
was a pretty good programmer

01:30:14 --> 01:30:17
but

01:30:15 --> 01:30:19
by golly

01:30:16 --> 01:30:22
i couldn't think of any way to recognize

01:30:18 --> 01:30:23
this language

01:30:21 --> 01:30:25
fficiently

01:30:22 --> 01:30:27
so i went through steve cook's

01:30:24 --> 01:30:28
construction

01:30:26 --> 01:30:30
i filled my blackboard

01:30:27 --> 01:30:33
with all the

01:30:29 --> 01:30:36
verything that stack thomas undone

01:30:32 --> 01:30:37
did you know i i i wrote down and and

01:30:35 --> 01:30:39
then i tried to

01:30:36 --> 01:30:41
see patterns in that

01:30:38 --> 01:30:42
and

01:30:40 --> 01:30:45
how did he convert that into a

01:30:41 --> 01:30:47
computer program on a regular machine

01:30:44 --> 01:30:50
um and

01:30:46 --> 01:30:51
finally i psyched it out

01:30:49 --> 01:30:53
what was what was the thing i was

01:30:50 --> 01:30:55
missing so that i could

01:30:52 --> 01:30:56
say oh yeah this is what i should do in

01:30:54 --> 01:30:57
my program

01:30:55 --> 01:30:59
uh

01:30:56 --> 01:31:01
and now i have an efficient program

01:30:58 --> 01:31:05
and and so i

01:31:00 --> 01:31:06
uh i i would never have thought about

01:31:04 --> 01:31:08
like

01:31:05 --> 01:31:10
that if i hadn't had his theorem which

01:31:07 --> 01:31:12
was purely abstract thing

01:31:10 --> 01:31:14
actually

01:31:12 --> 01:31:17
to try to intuit how to use the stack

01:31:14 --> 01:31:21
automaton for the the string matching

01:31:16 --> 01:31:22
problem yeah so so so the problem i

01:31:20 --> 01:31:24
had

01:31:21 --> 01:31:26
started with was not the string matching

01:31:23 --> 01:31:27
part but then i realized that the string

01:31:25 --> 01:31:29
matching problem was another thing which

01:31:26 --> 01:31:31
would also be

01:31:28 --> 01:31:33
could be done by a stack of automatons

01:31:30 --> 01:31:36
and and so when when i looked at what

01:31:32 --> 01:31:37
hat told me then i had a nice algorithm

01:31:35 --> 01:31:39
for this

01:31:36 --> 01:31:42
tring matching problem uh

01:31:38 --> 01:31:44
and and it told me

01:31:41 --> 01:31:46
xactly what i should remember as i'm as

01:31:43 --> 01:31:48
i'm going through the string

01:31:45 --> 01:31:50
and i worked it out and and i wrote this

01:31:47 --> 01:31:53
little paper called

01:31:49 --> 01:31:55
automata theory can be useful

01:31:52 --> 01:31:57
and and the reason was that it was first

01:31:54 --> 01:32:00
i mean i had been reading all kinds of

01:31:56 --> 01:32:02
papers about automated theory

01:31:59 --> 01:32:05
but it never taught me it never improved

01:32:01 --> 01:32:07
my programming for for everyday problems

01:32:04 --> 01:32:09
uh it was something that you published

01:32:06 --> 01:32:12
in journals and and and you know it was

01:32:08 --> 01:32:14
interesting stuff but it but here

01:32:11 --> 01:32:16
was a case where i couldn't figure out

01:32:13 --> 01:32:18
how to write the program i had a theorem

01:32:15 --> 01:32:21
from automated theory then i knew how to

01:32:17 --> 01:32:22
write the program so this was

01:32:20 --> 01:32:23
for me

01:32:21 --> 01:32:25
uh

01:32:22 --> 01:32:27
you know a change in life i started to

01:32:24 --> 01:32:29
say maybe i should

01:32:26 --> 01:32:30
learn more about thomas

01:32:28 --> 01:32:32
and

01:32:29 --> 01:32:34
and and i i showed this note to

01:32:31 --> 01:32:35
vaughn pratt and he said

01:32:33 --> 01:32:38
that's

01:32:34 --> 01:32:40
imilar to something i was working on

01:32:37 --> 01:32:43
um and then uh

01:32:39 --> 01:32:44
and jim morris was at berkeley too at

01:32:42 --> 01:32:46
he time

01:32:43 --> 01:32:48
anyway he

01:32:45 --> 01:32:49
he's had an illustrious career but i

01:32:47 --> 01:32:51
haven't kept

01:32:48 --> 01:32:52
rack of jim but one is my colleague at

01:32:50 --> 01:32:54
stanford

01:32:51 --> 01:32:58
and my student

01:32:53 --> 01:33:00
uh later but but this was before vaughn

01:32:57 --> 01:33:02
ron was still a graduate student and

01:32:59 --> 01:33:03
hadn't come to stanford yet so we found

01:33:01 --> 01:33:05
out that we'd all been working on the

01:33:02 --> 01:33:07
same thing so so it was our algorithm we

01:33:04 --> 01:33:10
ach discovered it independently but

01:33:06 --> 01:33:13
each of us had discovered a different

01:33:09 --> 01:33:14
part of the elephant

01:33:12 --> 01:33:17
you know a different

01:33:13 --> 01:33:18
aspect of it and so we could put our

01:33:17 --> 01:33:21
things together it was my job to

01:33:19 --> 01:33:24
write the paper

01:33:20 --> 01:33:27
how did the elephants bring to life

01:33:23 --> 01:33:29
spring to life was because i

01:33:26 --> 01:33:31
had drafted this paper

01:33:28 --> 01:33:33
autonomous theory

01:33:30 --> 01:33:36
oh it can be useful which was seen by

01:33:32 --> 01:33:37
vaughn and then by jim and then then

01:33:35 --> 01:33:39
we combined

01:33:36 --> 01:33:41
because maybe they had also

01:33:38 --> 01:33:44
been thinking of writing something up

01:33:40 --> 01:33:47
about it about specifically history

01:33:44 --> 01:33:47
problem

01:33:48 --> 01:33:54
let me ask a ridiculous question

01:33:51 --> 01:33:56
uh last time we talked you told me what

01:33:53 --> 01:33:57
he most beautiful algorithm is

01:33:55 --> 01:34:00
actually

01:33:56 --> 01:34:03
uh for strongly connected graphs

01:33:59 --> 01:34:04
what is the hardest problem

01:34:02 --> 01:34:06
puzzle

01:34:03 --> 01:34:09
idea in computer science for you

01:34:05 --> 01:34:11
personally that you had to work through

01:34:08 --> 01:34:13
just something that was just the

01:34:10 --> 01:34:15
hardest thing that i've ever

01:34:12 --> 01:34:17
been involved with yeah

01:34:14 --> 01:34:20
okay well yeah that's i don't

01:34:16 --> 01:34:24
know how to answer questions like that

01:34:19 --> 01:34:24
but in this case uh it's pretty clear

01:34:23 --> 01:34:28
okay because

01:34:25 --> 01:34:29
it's uh

01:34:27 --> 01:34:32
called the

01:34:28 --> 01:34:34
birth of the giant component okay so

01:34:31 --> 01:34:35
now let me explain that because this is

01:34:33 --> 01:34:37
actually gets

01:34:34 --> 01:34:39
into physics too

01:34:36 --> 01:34:40
and it gets into something called bose

01:34:38 --> 01:34:42
instein statistics

01:34:39 --> 01:34:43
but but

01:34:41 --> 01:34:44
anyway

01:34:42 --> 01:34:46
it's got

01:34:43 --> 01:34:49
some interesting stories and it

01:34:45 --> 01:34:49
connected with berkeley again

01:34:49 --> 01:34:53
so

01:34:50 --> 01:34:56
start with the idea of a random graph

01:34:52 --> 01:34:56
now this is

01:34:55 --> 01:35:01
here we we just say we have n points

01:34:58 --> 01:35:02
that are totally unconnected

01:35:00 --> 01:35:04
and

01:35:01 --> 01:35:07
there's no geometry involved there's

01:35:03 --> 01:35:10
no saying some points are further apart

01:35:06 --> 01:35:12
han others all points are exactly

01:35:09 --> 01:35:15
alike and

01:35:11 --> 01:35:17
let's say we have 100 points and

01:35:14 --> 01:35:18
we number them from zero zero to

01:35:16 --> 01:35:20
nine nine

01:35:17 --> 01:35:23
all right

01:35:19 --> 01:35:26
now let's let's take pi

01:35:22 --> 01:35:31
uh the digits of pi so

01:35:25 --> 01:35:34
two at a time so so we had 31 41 59 26

01:35:30 --> 01:35:35
we we can look go go through pi

01:35:33 --> 01:35:38
and so

01:35:34 --> 01:35:40
we take the first two 31

01:35:37 --> 01:35:43
41 and let's

01:35:39 --> 01:35:45
put a connection between point 31

01:35:42 --> 01:35:49
and point 41

01:35:44 --> 01:35:50
that's an edge in the graph so

01:35:48 --> 01:35:52
then we take

01:35:49 --> 01:35:54
5 9 2 6

01:35:51 --> 01:35:57
and make another edge

01:35:53 --> 01:35:58
and the graph gets bigger it gets more

01:35:56 --> 01:35:59
and more

01:35:57 --> 01:36:02
connected

01:35:58 --> 01:36:04
as we add these things one at a time

01:36:01 --> 01:36:07
okay so we start out with end points

01:36:03 --> 01:36:08
and and we add uh

01:36:06 --> 01:36:11
m edges

01:36:07 --> 01:36:13
okay now each edge is completely

01:36:10 --> 01:36:15
we forgot about

01:36:12 --> 01:36:18
edges we had before we make an edge

01:36:14 --> 01:36:20
twice we might get an edge from a point

01:36:17 --> 01:36:22
o its selfie but

01:36:19 --> 01:36:25
um you know maybe pi is going to

01:36:21 --> 01:36:26
have a run of four digits in there

01:36:24 --> 01:36:28
so we're gonna

01:36:25 --> 01:36:31
but anyway

01:36:27 --> 01:36:33
we're evolving a graph at random

01:36:30 --> 01:36:35
um and

01:36:32 --> 01:36:37
a magical thing happens

01:36:34 --> 01:36:38
when the number of edges

01:36:36 --> 01:36:41
is

01:36:37 --> 01:36:42
like point four nine and

01:36:40 --> 01:36:45
uh

01:36:42 --> 01:36:46
so maybe n is a million

01:36:44 --> 01:36:47
and i have

01:36:45 --> 01:36:50
uh you know

01:36:46 --> 01:36:51
490 000 edges

01:36:49 --> 01:36:52
uh

01:36:50 --> 01:36:54
then

01:36:51 --> 01:36:59
it almost all the time

01:36:53 --> 01:36:59
it it consists of isolated trees

01:36:58 --> 01:37:04
not even any loops right

01:37:01 --> 01:37:05
it's a very small number of veggies so

01:37:03 --> 01:37:08
far

01:37:04 --> 01:37:11
a little less than half n and right but

01:37:07 --> 01:37:12
if i had point five one inches so a

01:37:10 --> 01:37:15
little more than half in

01:37:12 --> 01:37:19
so it's you know million points

01:37:14 --> 01:37:22
510 000 edges

01:37:18 --> 01:37:22
now it probably has

01:37:22 --> 01:37:26
a

01:37:24 --> 01:37:29
one component that's much bigger than

01:37:25 --> 01:37:29
the others

01:37:28 --> 01:37:35
um and we call that the giant component

01:37:32 --> 01:37:36
is that can you clap so can you clarify

01:37:34 --> 01:37:38
so

01:37:35 --> 01:37:42
is there a name for this kind of random

01:37:37 --> 01:37:44
super cool pie random graph

01:37:41 --> 01:37:47
well i i call it

01:37:43 --> 01:37:49
part the pie graph no no i

01:37:46 --> 01:37:52
the pie graph is actually

01:37:48 --> 01:37:54
my pie graph is based on

01:37:51 --> 01:37:57
binary representation of pi not the

01:37:53 --> 01:37:59
decimal representation of pi but but but

01:37:56 --> 01:38:02
anyway

01:37:58 --> 01:38:04
let's suppose i was rolling dice instead

01:38:01 --> 01:38:06
what's that so sorry so it doesn't it

01:38:03 --> 01:38:08
doesn't have to be pi

01:38:05 --> 01:38:10
any source

01:38:07 --> 01:38:12
the point is every step

01:38:09 --> 01:38:13
choose totally at random one of those

01:38:11 --> 01:38:15
ndpoints

01:38:12 --> 01:38:18
and choose totally at random another one

01:38:14 --> 01:38:20
of the end points

01:38:17 --> 01:38:22
make that an edge

01:38:19 --> 01:38:24
that's the process yeah

01:38:21 --> 01:38:27
so there's there's nothing magical about

01:38:23 --> 01:38:29
pi they you're no no i was using pi to

01:38:26 --> 01:38:31
sort of saying pi is sort of random that

01:38:28 --> 01:38:34
nobody knows a pattern in exactly got it

01:38:30 --> 01:38:36
i got it but it's not

01:38:33 --> 01:38:39
yeah i i could have just as well drawn

01:38:36 --> 01:38:42
straws or something um this was a

01:38:38 --> 01:38:44
concept invented by erdogan rainey and

01:38:41 --> 01:38:47
they called evolution of random graphs

01:38:43 --> 01:38:48
and if you start out with with a large

01:38:46 --> 01:38:50
number n

01:38:47 --> 01:38:53
and you and you repeat this process all

01:38:49 --> 01:38:55
of a sudden a big bang happens at one

01:38:52 --> 01:38:57
half n there'll be two points together

01:38:54 --> 01:38:59
then maybe we'll have half have

01:38:56 --> 01:39:00
three uh

01:38:58 --> 01:39:01
and then

01:38:59 --> 01:39:02
you know

01:39:00 --> 01:39:04
then they maybe branch out a little bit

01:39:01 --> 01:39:06
but but they'll all be separate until we

01:39:04 --> 01:39:09
get to one half end

01:39:05 --> 01:39:11
and we pass one half in and all of a

01:39:08 --> 01:39:13
sudden

01:39:10 --> 01:39:15
there's substance to it that

01:39:12 --> 01:39:16
here are there's a big

01:39:14 --> 01:39:18
clump of stuff that's all joined

01:39:15 --> 01:39:21
together so it's almost like a phase

01:39:17 --> 01:39:23
transition of some kind it's exactly it

01:39:20 --> 01:39:25
's a phase transition but it's

01:39:22 --> 01:39:28
actually it's a double phase transition

01:39:24 --> 01:39:30
and turns out it it it happens

01:39:27 --> 01:39:31
there's actually two things going on at

01:39:29 --> 01:39:33
once

01:39:30 --> 01:39:36
at this phase transition which

01:39:32 --> 01:39:38
uh which is very remarkable about okay

01:39:35 --> 01:39:40
so so um

01:39:37 --> 01:39:42
a lot of the most important algorithms

01:39:39 --> 01:39:44
are based on random processes and so i

01:39:41 --> 01:39:46
wanted to you know i want to understand

01:39:43 --> 01:39:47
random processes now

01:39:45 --> 01:39:49
so there are data structures that sort

01:39:46 --> 01:39:50
of grow this way

01:39:48 --> 01:39:53
okay so

01:39:49 --> 01:39:55
dick carp one of the leading

01:39:52 --> 01:39:56
experts on on random randomized

01:39:54 --> 01:39:59
algorithms

01:39:56 --> 01:40:00
had his students working looking at this

01:39:58 --> 01:40:02
at berkeley

01:39:59 --> 01:40:03
and we heard a rumor that the students

01:40:01 --> 01:40:06
had

01:40:02 --> 01:40:08
found something interesting happening

01:40:05 --> 01:40:09
the students are

01:40:07 --> 01:40:12
generating this

01:40:08 --> 01:40:13
or simulating this random evolution of

01:40:11 --> 01:40:17
graphs and

01:40:12 --> 01:40:18
under taking stat snapshots

01:40:16 --> 01:40:20
every so often

01:40:17 --> 01:40:23
take a look at what the graph is

01:40:19 --> 01:40:24
and the rumor was that every time they

01:40:22 --> 01:40:26
looked

01:40:23 --> 01:40:28
that there was only one component that

01:40:25 --> 01:40:30
had loops in it almost always they do a

01:40:27 --> 01:40:31
million experience

01:40:29 --> 01:40:32
and

01:40:30 --> 01:40:34
only

01:40:31 --> 01:40:38
three or four times did they ever ever

01:40:33 --> 01:40:38
happen to see a loop at at this point

01:40:37 --> 01:40:44
no more than one component with the loop

01:40:41 --> 01:40:44
so they want you to keep till the graph

01:40:43 --> 01:40:46
gets

01:40:43 --> 01:40:46
completely full

01:40:45 --> 01:40:49
uh

01:40:46 --> 01:40:50
so it starts out totally empty and gets

01:40:48 --> 01:40:53
more and more

01:40:49 --> 01:40:54
edges all the time uh and

01:40:52 --> 01:40:56
so okay

01:40:53 --> 01:40:58
certainly a loop comes along once but

01:40:55 --> 01:41:02
now all the loops

01:40:57 --> 01:41:02
tay somehow joined to that one

01:41:02 --> 01:41:08
they're

01:41:03 --> 01:41:11
there never were two guys with loops wow

01:41:07 --> 01:41:13
okay in this experiment okay so anyway

01:41:10 --> 01:41:15
this one almost always

01:41:12 --> 01:41:17
certainly not always yeah

01:41:14 --> 01:41:20
but but but with high very high

01:41:16 --> 01:41:22
probability that seemed to be true so

01:41:19 --> 01:41:23
we heard about this rumor at stanford

01:41:21 --> 01:41:26
and we said

01:41:22 --> 01:41:28
if if that's true then must you know

01:41:25 --> 01:41:30
a lot more must also be true so there's

01:41:27 --> 01:41:31
a whole bunch there's a whole theory out

01:41:29 --> 01:41:33
here waiting to be discovered that we

01:41:30 --> 01:41:35
haven't ever thought about so so let's

01:41:32 --> 01:41:36
take a look at it

01:41:34 --> 01:41:39
and so we look closer and we find out no

01:41:36 --> 01:41:40
it actually it's not true

01:41:38 --> 01:41:43
but

01:41:39 --> 01:41:44
in fact it's almost true

01:41:42 --> 01:41:47
namely

01:41:44 --> 01:41:49
there's a very short interval of time

01:41:46 --> 01:41:50
when it's true

01:41:48 --> 01:41:51
and and if you don't happen to look at

01:41:49 --> 01:41:53
it

01:41:50 --> 01:41:55
during that short interval of time

01:41:52 --> 01:41:56
then you miss it

01:41:54 --> 01:41:58
so

01:41:55 --> 01:42:01
that in other words there'll be a period

01:41:57 --> 01:42:03
where they're two or three components

01:42:00 --> 01:42:04
have loops

01:42:02 --> 01:42:08
but

01:42:04 --> 01:42:10
hey join together pretty soon okay

01:42:07 --> 01:42:12
so so

01:42:09 --> 01:42:14
if you don't have

01:42:11 --> 01:42:15
a real fast shutter speed you're going

01:42:13 --> 01:42:17
to miss

01:42:14 --> 01:42:19
you're going to miss that instant so

01:42:16 --> 01:42:21
separate loops don't exist for long

01:42:18 --> 01:42:23
that's that's it yeah you know i started

01:42:20 --> 01:42:25
looking at this to make it quantitative

01:42:22 --> 01:42:27
and uh

01:42:24 --> 01:42:30
basic problem was to slow down the big

01:42:26 --> 01:42:33
bang so that i could watch it happening

01:42:29 --> 01:42:36
yeah i i think i can explain it actually

01:42:32 --> 01:42:38
in fairly elementary terms deep

01:42:35 --> 01:42:41
even without writing a formula that's

01:42:37 --> 01:42:43
right like hawking would do uh and and

01:42:40 --> 01:42:46
so uh

01:42:42 --> 01:42:49
let's let's watch the evolution and and

01:42:45 --> 01:42:50
at first uh these edges are coming along

01:42:48 --> 01:42:52
and they're just making

01:42:49 --> 01:42:54
things without loops

01:42:51 --> 01:42:56
which we call trees okay so then all of

01:42:53 --> 01:42:58
a sudden the loop first appears so at

01:42:55 --> 01:42:59
hat point i have one component that has

01:42:57 --> 01:43:01
a loop

01:42:58 --> 01:43:03
all right now

01:43:00 --> 01:43:04
i say that the complexity of a

01:43:02 --> 01:43:07
component

01:43:04 --> 01:43:09
is the number of edges minus the number

01:43:06 --> 01:43:12
of vertices

01:43:08 --> 01:43:16
o if i have a loop i have like a loop

01:43:11 --> 01:43:18
of length five it has five edges and

01:43:15 --> 01:43:21
five vertices

01:43:17 --> 01:43:22
um or or i could put a tail on that

01:43:20 --> 01:43:26
and that would be another edge another

01:43:21 --> 01:43:28
vertex like a zero one two complexity

01:43:25 --> 01:43:30
kind of thing so so if the if the

01:43:27 --> 01:43:33
complexity is zero we have one

01:43:29 --> 01:43:36
loop i call it a cycle or i call a

01:43:32 --> 01:43:37
cyclic component so so cyclic component

01:43:35 --> 01:43:39
looks like

01:43:36 --> 01:43:40
a

01:43:38 --> 01:43:42
wheel

01:43:40 --> 01:43:44
to which you attach

01:43:41 --> 01:43:46
fibers

01:43:43 --> 01:43:48
or trees

01:43:45 --> 01:43:49
they go branching but there's no more

01:43:47 --> 01:43:51
loops there's only one loop and

01:43:48 --> 01:43:53
everything else

01:43:50 --> 01:43:55
feeds into that loop okay and that has

01:43:52 --> 01:43:57
complexity zero

01:43:54 --> 01:43:59
but but a tree itself has complexity

01:43:56 --> 01:44:01
minus one because it has

01:43:58 --> 01:44:02
uh uh you know

01:44:00 --> 01:44:04
like

01:44:01 --> 01:44:06
it might have ten vertices and nine

01:44:03 --> 01:44:08
dges to tie the time together so nine

01:44:05 --> 01:44:10
minus ten is minus one so

01:44:07 --> 01:44:12
complexity

01:44:09 --> 01:44:14
minus one is a tree

01:44:12 --> 01:44:15
it's gotta be connected that's what i

01:44:13 --> 01:44:18
mean by a component it's gotta be

01:44:14 --> 01:44:20
connected so so so if if i have ten

01:44:17 --> 01:44:22
things connected i have to have nine

01:44:19 --> 01:44:23
dges

01:44:21 --> 01:44:27
can you clarify

01:44:22 --> 01:44:29
why when complexity goes uh you can go

01:44:26 --> 01:44:31
above zero i'm a little yes

01:44:28 --> 01:44:33
right so

01:44:30 --> 01:44:34
the complexity plus one is the number of

01:44:32 --> 01:44:37
loops

01:44:33 --> 01:44:40
o if complexity is zero i have one loop

01:44:36 --> 01:44:42
if if if complexity is one

01:44:39 --> 01:44:44
that means i have one more edge then i

01:44:41 --> 01:44:46
have vertex

01:44:43 --> 01:44:47
so i might have like

01:44:45 --> 01:44:49
11

01:44:46 --> 01:44:51
edges and 10 vertices

01:44:48 --> 01:44:54
it's so it turns we call that a bicycle

01:44:50 --> 01:44:57
because it it it's got two loops and

01:44:53 --> 01:44:57
it's got to have two loops in it

01:44:57 --> 01:45:02
why can't it be trees just going off of

01:45:00 --> 01:45:05
the loop

01:45:01 --> 01:45:06
that i would need more edges than

01:45:04 --> 01:45:08
all right

01:45:05 --> 01:45:10
okay so so every time i get

01:45:07 --> 01:45:12
another loop i i get

01:45:09 --> 01:45:14
another excess of edges over vertices i

01:45:11 --> 01:45:16
got you okay

01:45:13 --> 01:45:19
so in other words uh

01:45:15 --> 01:45:20
we start out and

01:45:18 --> 01:45:22
after i have one loop i have one

01:45:19 --> 01:45:26
component that has

01:45:21 --> 01:45:29
a cycle in it not now the the next step

01:45:25 --> 01:45:31
uh according to the rumor would be that

01:45:28 --> 01:45:34
the next step i would have

01:45:30 --> 01:45:34
a bicycle

01:45:33 --> 01:45:39
in the evolution of almost all graphs it

01:45:36 --> 01:45:41
would go from cycle to a bicycle but in

01:45:38 --> 01:45:42
fact there's a certain probability it

01:45:40 --> 01:45:46
goes

01:45:41 --> 01:45:49
from cycle to two you know

01:45:45 --> 01:45:51
to two different cycles all right

01:45:48 --> 01:45:52
um and i worked out the probability it

01:45:50 --> 01:45:53
was something like five out of twenty

01:45:51 --> 01:45:55
four

01:45:52 --> 01:45:57
that was pretty high

01:45:54 --> 01:45:59
it was substantial yeah

01:45:56 --> 01:46:01
uh but still

01:45:58 --> 01:46:03
soon they're going to merge together

01:46:00 --> 01:46:05
almost okay so

01:46:02 --> 01:46:06
that's so cool but but then it splits

01:46:04 --> 01:46:09
again

01:46:05 --> 01:46:12
after you have either either two or one

01:46:08 --> 01:46:15
uh the next step is you either have

01:46:11 --> 01:46:16
three or you have two one or you have

01:46:14 --> 01:46:20
one on one okay

01:46:15 --> 01:46:22
and so i worked out the probability

01:46:19 --> 01:46:23
for for those transitions

01:46:21 --> 01:46:24
and

01:46:22 --> 01:46:27
i worked it out up to

01:46:24 --> 01:46:29
the first five transitions

01:46:26 --> 01:46:32
and i had these so i had these strange

01:46:28 --> 01:46:34
numbers five twenty fours and i stayed

01:46:31 --> 01:46:37
up all night and about three a.m

01:46:33 --> 01:46:39
i i had the numbers computed and i

01:46:36 --> 01:46:43
looked at them and here were

01:46:38 --> 01:46:43
the denominator was something like

01:46:43 --> 01:46:49
20 2 3 0 2 3.

01:46:48 --> 01:46:51
so

01:46:48 --> 01:46:52
the probability was something over 2 3 0

01:46:50 --> 01:46:54
2 3.

01:46:51 --> 01:46:56
i don't know how you worked that out but

01:46:53 --> 01:46:58
i had a formula of that you know i could

01:46:55 --> 01:47:00
calculate the probability yeah and and i

01:46:57 --> 01:47:02
could find the limiting probability as n

01:46:59 --> 01:47:04
goes to infinity and and it turned out

01:47:01 --> 01:47:06
o be this number but the denominator

01:47:04 --> 01:47:09
was 2 0 and i and i looked at the

01:47:06 --> 01:47:12
denominator and i said wait a minute

01:47:08 --> 01:47:15
this number factors because

01:47:11 --> 01:47:17
1001 is equal to 7 times 11 times 13. i

01:47:14 --> 01:47:19
had learned that in my first computer

01:47:16 --> 01:47:21
program so

01:47:18 --> 01:47:23
so

01:47:20 --> 01:47:25
23023

01:47:22 --> 01:47:29
yeah is 7 times 11 times

01:47:24 --> 01:47:31
13 times 23.

01:47:28 --> 01:47:32
that's not a random number there has to

01:47:30 --> 01:47:33
be a reason

01:47:31 --> 01:47:35
why

01:47:32 --> 01:47:38
those small primes appear in the

01:47:34 --> 01:47:40
denominator but my think

01:47:37 --> 01:47:42
so all of a sudden that suggested

01:47:39 --> 01:47:44
um

01:47:41 --> 01:47:46
another way of looking at the problem

01:47:43 --> 01:47:47
where small prime factors

01:47:45 --> 01:47:48
would occur

01:47:46 --> 01:47:51
so

01:47:47 --> 01:47:53
what would that be so that said oh yeah

01:47:50 --> 01:47:56
let me take the logarithm of this

01:47:52 --> 01:47:57
formula and and sure enough it's going

01:47:55 --> 01:47:59
to simplify

01:47:56 --> 01:48:00
and and it happened

01:47:58 --> 01:48:02
so

01:47:59 --> 01:48:04
and i wouldn't have noticed it except

01:48:01 --> 01:48:07
for this factorization

01:48:03 --> 01:48:08
okay so i go to bed and i say okay this

01:48:06 --> 01:48:10
this looks like i'm slowing down the

01:48:07 --> 01:48:11
big bang i can figure out what's going

01:48:09 --> 01:48:13
on here

01:48:10 --> 01:48:14
and

01:48:12 --> 01:48:17
the next day it turned out bill gates

01:48:14 --> 01:48:19
comes to stanford to visit uh they're

01:48:16 --> 01:48:21
trying to sell him on donating money to

01:48:18 --> 01:48:22
uh for a new computer science building

01:48:20 --> 01:48:23
sure

01:48:21 --> 01:48:25
and

01:48:22 --> 01:48:28
they and uh so they gave me an

01:48:24 --> 01:48:31
appointment to talk to bill and i

01:48:27 --> 01:48:33
wrote down on the blackboard this

01:48:30 --> 01:48:35
evolutionary diagram you're going

01:48:32 --> 01:48:36
from one to two five twenty fourths in

01:48:34 --> 01:48:39
all this business yeah

01:48:35 --> 01:48:40
and i wrote it down and anyway at the

01:48:38 --> 01:48:43
nd of the day the

01:48:39 --> 01:48:46
uh he was discussing people with the

01:48:42 --> 01:48:48
uh development office and he

01:48:45 --> 01:48:50
said boy i was really impressed with

01:48:47 --> 01:48:52
what professor knuth said

01:48:50 --> 01:48:54
about this

01:48:51 --> 01:48:57
giant component

01:48:53 --> 01:48:59
and uh and so uh you know i i love this

01:48:56 --> 01:49:01
tory because it shows that

01:48:58 --> 01:49:03
heoretical computer science has is

01:49:00 --> 01:49:04
really worthwhile you know

01:49:02 --> 01:49:07
does bill have you ever talked to bill

01:49:03 --> 01:49:08
gates about it uh since then

01:49:06 --> 01:49:10
yeah

01:49:07 --> 01:49:13
that's a cool yeah that's a cool little

01:49:09 --> 01:49:15
moment in history yeah but but anyway

01:49:12 --> 01:49:16
he happened to visit on exactly the day

01:49:14 --> 01:49:19
after i had

01:49:16 --> 01:49:21
i i had found this pattern and

01:49:18 --> 01:49:25
that allowed me to to crack the problem

01:49:20 --> 01:49:28
so you know so that i could develop the

01:49:24 --> 01:49:30
uh the theory some more and understand

01:49:27 --> 01:49:30
what's happening in the big but

01:49:29 --> 01:49:33
uh

01:49:30 --> 01:49:36
because i could i could now write down

01:49:32 --> 01:49:37
explicit formulas for stuff right and so

01:49:35 --> 01:49:38
it would you know

01:49:36 --> 01:49:41
it would work not only the first few

01:49:37 --> 01:49:43
steps but also they'll study the whole

01:49:40 --> 01:49:44
process and and i worked further and

01:49:42 --> 01:49:46
i

01:49:43 --> 01:49:48
with two authors co-authors and we

01:49:45 --> 01:49:50
finally figured out

01:49:47 --> 01:49:51
hat the probability

01:49:49 --> 01:49:53
that

01:49:50 --> 01:49:54
he rumor

01:49:52 --> 01:49:58
was true in other words look at the

01:49:54 --> 01:50:02
volution of a of a random graph going

01:49:57 --> 01:50:04
from zero zero to to complete

01:50:01 --> 01:50:06
and say what's the probability that at

01:50:03 --> 01:50:09
every point in time there was only one

01:50:05 --> 01:50:10
component with a cycle

01:50:08 --> 01:50:12
we started with this rumor saying

01:50:09 --> 01:50:15
there's only one site there's only one

01:50:11 --> 01:50:16
component with the cycle and and

01:50:14 --> 01:50:17
uh

01:50:15 --> 01:50:19
so

01:50:16 --> 01:50:21
it's a hundred percent

01:50:18 --> 01:50:23
he rumor was that was 100

01:50:20 --> 01:50:24
it turned out the actual numbers was

01:50:22 --> 01:50:26
like

01:50:23 --> 01:50:28
percent or i i don't know i should

01:50:25 --> 01:50:30
remember the number but i do but i don't

01:50:27 --> 01:50:34
have it with me but but anyway

01:50:30 --> 01:50:36
but but the but the number

01:50:33 --> 01:50:37
it it turned out to be like 12 over pi

01:50:35 --> 01:50:39
squared or

01:50:36 --> 01:50:39
anything

01:50:39 --> 01:50:45
it was a nice

01:50:40 --> 01:50:46
it related to pi yeah um and we could

01:50:44 --> 01:50:47
never have

01:50:45 --> 01:50:49
done that with

01:50:46 --> 01:50:51
but so that's the hardest problem i ever

01:50:48 --> 01:50:54
saw in my life was to prove that this

01:50:50 --> 01:50:57
probability is is it was proven

01:50:54 --> 01:50:59
the probability was proven yeah i was

01:50:56 --> 01:51:01
able to prove this that this

01:50:58 --> 01:51:03
and and and this should shed light on a

01:51:00 --> 01:51:06
whole bunch of other things about random

01:51:02 --> 01:51:07
graphs that that was sort of the

01:51:05 --> 01:51:09
major

01:51:06 --> 01:51:09
thing we were asked after that's super

01:51:08 --> 01:51:11
cool

01:51:08 --> 01:51:12
what was the connection to physics that

01:51:10 --> 01:51:14
you mentioned

01:51:11 --> 01:51:16
well bose einstein statistics is the

01:51:14 --> 01:51:19
study of how

01:51:15 --> 01:51:22
molecules uh

01:51:18 --> 01:51:22
bond together

01:51:21 --> 01:51:27
without geometry

01:51:23 --> 01:51:27
without distance

01:51:26 --> 01:51:34
you created the tech type setting system

01:51:30 --> 01:51:36
and released it as open source

01:51:33 --> 01:51:39
just on that little aspect

01:51:35 --> 01:51:42
why did you release it as open source

01:51:38 --> 01:51:45
what is your vision for open source

01:51:41 --> 01:51:47
no okay well that the word open source

01:51:44 --> 01:51:51
didn't exist at that time but we but i i

01:51:46 --> 01:51:53
didn't want proprietary rights over it

01:51:50 --> 01:51:54
because i saw

01:51:52 --> 01:51:56
how

01:51:53 --> 01:51:57
proprietary rights were holding things

01:51:56 --> 01:51:59
back

01:51:56 --> 01:52:01
in the late 50s

01:51:58 --> 01:52:04
people at ibm developed the language

01:52:00 --> 01:52:06
called fortran they could have

01:52:03 --> 01:52:09
kept it proprietary they could have said

01:52:05 --> 01:52:12
only ibm can use this language everybody

01:52:08 --> 01:52:15
else has to but but they didn't

01:52:11 --> 01:52:16
hey said anybody who can write who can

01:52:14 --> 01:52:18
translate fortran

01:52:16 --> 01:52:20
into the

01:52:17 --> 01:52:21
language of their machines uh

01:52:19 --> 01:52:24
is allowed to

01:52:20 --> 01:52:26
make fortran compilers too

01:52:23 --> 01:52:28
um

01:52:25 --> 01:52:29
on the other hand in the typography

01:52:27 --> 01:52:32
industry i had

01:52:28 --> 01:52:34
seen a lot of languages that were

01:52:31 --> 01:52:36
developed for

01:52:33 --> 01:52:38
composing pages

01:52:35 --> 01:52:41
and each manufacturer had his own

01:52:37 --> 01:52:44
language for composing pages

01:52:40 --> 01:52:46
and that was holding everything back

01:52:43 --> 01:52:48
because people

01:52:45 --> 01:52:50
were tied to a particular manufacturer

01:52:47 --> 01:52:52
and and then a new equipment is invented

01:52:49 --> 01:52:54
a year later but printing printing

01:52:51 --> 01:52:56
machines they have to

01:52:53 --> 01:52:57
expect to amortize the cost over 20 30

01:52:55 --> 01:52:59
years

01:52:56 --> 01:53:03
o you didn't want that for tech

01:52:58 --> 01:53:06
i didn't need the income

01:53:02 --> 01:53:07
okay i already i i already had

01:53:05 --> 01:53:09
uh

01:53:06 --> 01:53:10
a good job

01:53:08 --> 01:53:12
and

01:53:09 --> 01:53:14
you know

01:53:11 --> 01:53:14
my books were

01:53:14 --> 01:53:18
people were buying enough books that i

01:53:16 --> 01:53:22
that

01:53:17 --> 01:53:24
it would bring me

01:53:21 --> 01:53:26
plenty of supplemental income for

01:53:23 --> 01:53:27
everything my kids needed for education

01:53:25 --> 01:53:29
whatever

01:53:26 --> 01:53:32
so there was no reason for me to try to

01:53:28 --> 01:53:35
maximize income any further

01:53:31 --> 01:53:36
income is sort of a threshold function

01:53:34 --> 01:53:38
if you don't have

01:53:35 --> 01:53:41
enough you're starving

01:53:38 --> 01:53:42
but if if you get over the threshold

01:53:40 --> 01:53:45
then you start thinking about

01:53:41 --> 01:53:48
philanthropy or else or you're trying to

01:53:44 --> 01:53:51
take it with you but uh

01:53:47 --> 01:53:53
but anyway there's a i had

01:53:50 --> 01:53:55
my income was over the threshold so

01:53:52 --> 01:53:58
that i i didn't need

01:53:54 --> 01:54:00
to keep it and so i specifically could

01:53:57 --> 01:54:03
see the advantage of

01:53:59 --> 01:54:05
of making it open for everybody

01:54:02 --> 01:54:07
do you think uh most software should be

01:54:04 --> 01:54:09
open

01:54:06 --> 01:54:11
so i think that

01:54:08 --> 01:54:14
people should charge for non-trivial

01:54:10 --> 01:54:17
software but not for trivial software

01:54:13 --> 01:54:20
yeah you give an example of i think

01:54:16 --> 01:54:24
adobe photoshop versus on linux

01:54:19 --> 01:54:27
as photoshop has value which so

01:54:23 --> 01:54:29
it's definitely worth paying

01:54:26 --> 01:54:31
for all the stuff i mean

01:54:28 --> 01:54:34
d i mean

01:54:30 --> 01:54:36
well they keep adding

01:54:33 --> 01:54:38
stuff that just

01:54:35 --> 01:54:39
hat my wife and i don't

01:54:37 --> 01:54:42
care about but

01:54:38 --> 01:54:44
somebody does but i mean but they have

01:54:42 --> 01:54:48
built in a

01:54:43 --> 01:54:49
fantastic uh uh undo feature for example

01:54:47 --> 01:54:52
in photoshop

01:54:48 --> 01:54:55
where you you you can go through a

01:54:52 --> 01:54:56
sequence of a thousand complicated steps

01:54:54 --> 01:54:57
on graphics and

01:54:55 --> 01:54:59
it can

01:54:56 --> 01:55:01
take you back anywhere in that sequence

01:54:58 --> 01:55:03
yeah

01:55:00 --> 01:55:05
with really beautiful algorithms i mean

01:55:02 --> 01:55:07
yeah it's it's oh that's interesting i

01:55:04 --> 01:55:08
didn't think about what algorithm it

01:55:06 --> 01:55:11
must be some kind of efficient

01:55:07 --> 01:55:14
representation really yeah i know i mean

01:55:10 --> 01:55:16
there's a lot of really subtle

01:55:13 --> 01:55:19
nobel prize class like

01:55:15 --> 01:55:21
creation of intellectual property in in

01:55:18 --> 01:55:23
there

01:55:20 --> 01:55:23
and uh

01:55:23 --> 01:55:27
and

01:55:24 --> 01:55:29
with patents uh you've got a limited

01:55:26 --> 01:55:32
time to

01:55:28 --> 01:55:33
uh i mean eventually the idea of patents

01:55:31 --> 01:55:35
is that you publish

01:55:32 --> 01:55:37
so that it's not secret it's not a trade

01:55:34 --> 01:55:37
secret

01:55:37 --> 01:55:42
hat said

01:55:39 --> 01:55:45
you you've said that i currently use

01:55:41 --> 01:55:47
ubuntu linux on a standalone laptop

01:55:44 --> 01:55:50
it has no internet connection

01:55:46 --> 01:55:52
i occasionally carry flash memory drives

01:55:49 --> 01:55:55
between the machine and the macs that i

01:55:51 --> 01:55:58
use for network surfing and graphics

01:55:54 --> 01:55:59
but i trust my family jewels only to

01:55:57 --> 01:56:01
linux

01:55:58 --> 01:56:03
why do you love linux

01:56:00 --> 01:56:06
the version of linux that i use is

01:56:02 --> 01:56:08
table i i i

01:56:05 --> 01:56:09
actually i i'm gonna have to upgrade one

01:56:07 --> 01:56:11
of these days but

01:56:08 --> 01:56:13
o a newer version of ubuntu yeah i'll

01:56:10 --> 01:56:16
stick with ubuntu but

01:56:12 --> 01:56:19
uh right now i'm running

01:56:15 --> 01:56:21
something that doesn't support a lot of

01:56:18 --> 01:56:22
the new

01:56:20 --> 01:56:25
software

01:56:21 --> 01:56:26
the last stability i don't remember the

01:56:24 --> 01:56:29
number

01:56:25 --> 01:56:33
like 14 anyway it's it's quite

01:56:28 --> 01:56:36
and i'm going to get a new computer um

01:56:32 --> 01:56:36
i'm getting new um solid-state memory

01:56:35 --> 01:56:39
instead of

01:56:36 --> 01:56:41
kind of a hard disk and the basics

01:56:38 --> 01:56:42
well let me ask you

01:56:40 --> 01:56:45
m

01:56:41 --> 01:56:47
sticking on the topic of tech

01:56:44 --> 01:56:50
um

01:56:46 --> 01:56:53
when thinking about beautiful typography

01:56:49 --> 01:56:55
what is your favorite letter number or

01:56:52 --> 01:56:55
symbol

01:56:55 --> 01:56:59
i know i know ridiculous question but is

01:56:57 --> 01:57:02
there some

01:56:58 --> 01:57:02
let me show you there

01:57:02 --> 01:57:05
or

01:57:05 --> 01:57:10
look at the last page

01:57:11 --> 01:57:15
at the very end of the index

01:57:15 --> 01:57:20
what is that

01:57:17 --> 01:57:23
here's a book by dr seuss called on

01:57:19 --> 01:57:25
beyond zebra and he gave a name to that

01:57:22 --> 01:57:29
did you say dr seuss gave a name to that

01:57:24 --> 01:57:32
dr seuss this is uh s-e-u-s-s he he

01:57:28 --> 01:57:33
wrote children's books

01:57:31 --> 01:57:35
in the 50s

01:57:32 --> 01:57:37
40s and 50s

01:57:34 --> 01:57:38
wait are you talking about cat in the

01:57:36 --> 01:57:40
hat doctor

01:57:37 --> 01:57:41
yeah

01:57:39 --> 01:57:45
that's it yeah i like how you hit this

01:57:40 --> 01:57:46
on on beyond zebra did he did did it get

01:57:44 --> 01:57:47
o

01:57:45 --> 01:57:50
soviet union

01:57:46 --> 01:57:52
[Laughter]

01:57:49 --> 01:57:53
yeah doctors no we did

01:57:51 --> 01:57:55
r seuss did not come to the soviet

01:57:52 --> 01:57:57
union but

01:57:54 --> 01:57:59
since you oh actually i think he did

01:57:56 --> 01:58:01
actually a little bit when we were

01:57:58 --> 01:58:04
um

01:58:00 --> 01:58:07
that that was a uh

01:58:03 --> 01:58:10
is maybe cat in the hat or or green

01:58:06 --> 01:58:13
eggs and ham i think was used to learn

01:58:09 --> 01:58:15
english oh okay so i think it made it

01:58:12 --> 01:58:18
hat way my my

01:58:14 --> 01:58:21
okay i i didn't like those as much

01:58:17 --> 01:58:22
as bartholomew cubbins but but i used to

01:58:20 --> 01:58:24
know

01:58:21 --> 01:58:25
bartholomew covens by heart when i was

01:58:23 --> 01:58:27
young

01:58:24 --> 01:58:28
so what the heck is this symbol we're

01:58:26 --> 01:58:30
looking at

01:58:27 --> 01:58:32
here's so much going on he has a name

01:58:29 --> 01:58:33
for it at the end of his book on beyond

01:58:31 --> 01:58:37
zebra

01:58:32 --> 01:58:38
who made it he did he did

01:58:36 --> 01:58:41
so there's

01:58:37 --> 01:58:44
it looks like a bunch of vines

01:58:40 --> 01:58:46
uh well is that symbol of existence

01:58:43 --> 01:58:49
by the way he

01:58:45 --> 01:58:51
made a movie in the early 50s

01:58:48 --> 01:58:53
um i don't remember the name of the

01:58:50 --> 01:58:54
movie now you can probably find it on

01:58:52 --> 01:58:56
easily enough but

01:58:53 --> 01:58:58
it it features uh

01:58:55 --> 01:59:00
dozens and dozens of pianos all playing

01:58:57 --> 01:59:04
together at the same time and

01:58:59 --> 01:59:06
but but the all the scenery is sort of

01:59:03 --> 01:59:08
based on the kind of artwork that was in

01:59:05 --> 01:59:10
his books and uh

01:59:07 --> 01:59:12
the fantasy big

01:59:09 --> 01:59:15
you know

01:59:11 --> 01:59:17
based of zeus land or so

01:59:14 --> 01:59:18
and i saw the movie only once or twice

01:59:16 --> 01:59:20
but it's

01:59:17 --> 01:59:23
quite

01:59:19 --> 01:59:25
i'd like to see it again

01:59:22 --> 01:59:26
that's that's really fascinating that

01:59:24 --> 01:59:28
you gave him

01:59:25 --> 01:59:29
they gave him shout out here

01:59:27 --> 01:59:32
okay

01:59:28 --> 01:59:34
is there some elegant basic symbol that

01:59:31 --> 01:59:35
you're attracted to some

01:59:33 --> 01:59:36
uh

01:59:34 --> 01:59:39
give something that gives you pleasure

01:59:35 --> 01:59:40
something used a lot

01:59:38 --> 01:59:42
pi

01:59:39 --> 01:59:44
of course

01:59:41 --> 01:59:48
uh i try to use pi

01:59:43 --> 01:59:49
as often as i can when i need a random

01:59:47 --> 01:59:51
example

01:59:48 --> 01:59:54
[Music]

01:59:50 --> 01:59:56
because it doesn't have any

01:59:53 --> 01:59:58
known characters so for

01:59:55 --> 02:00:02
instance

01:59:57 --> 02:00:04
i i don't have it here to show you but

02:00:01 --> 02:00:08
do you do you know the put the uh the

02:00:03 --> 02:00:10
game called masu m-a-s-y-u

02:00:07 --> 02:00:11
no it's it

02:00:09 --> 02:00:13
's a great

02:00:10 --> 02:00:15
recreation i mean

02:00:12 --> 02:00:20
sudoku is easier to understand but

02:00:14 --> 02:00:22
matthew is it it is more addictive uh uh

02:00:19 --> 02:00:24
you you have black and white stones like

02:00:21 --> 02:00:27
on a go board

02:00:23 --> 02:00:29
and you have to draw a path that

02:00:26 --> 02:00:31
goes straight through a white stone and

02:00:28 --> 02:00:32
makes a right angle turn at the black

02:00:30 --> 02:00:34
stone

02:00:31 --> 02:00:36
um and

02:00:33 --> 02:00:38
it turns out to be really

02:00:35 --> 02:00:41
nice puzzle because it

02:00:37 --> 02:00:43
doesn't involve numbers but with this

02:00:40 --> 02:00:45
visual but it's

02:00:42 --> 02:00:48
3d pleasant to to play with

02:00:44 --> 02:00:50
so so i wanted to

02:00:47 --> 02:00:52
use it as example in art of computer

02:00:49 --> 02:00:55
programming and i have

02:00:51 --> 02:00:57
exercise on how to design cool

02:00:54 --> 02:00:59
massive puzzles

02:00:56 --> 02:01:00
and uh you can find that on wikipedia

02:00:58 --> 02:01:02
certainly uh

02:01:00 --> 02:01:04
as an example

02:01:01 --> 02:01:07
m-a-s-y-u

02:01:03 --> 02:01:08
m and and so i and so i decided i would

02:01:06 --> 02:01:10
take pi

02:01:07 --> 02:01:12
the actual

02:01:09 --> 02:01:16
image of it and it

02:01:11 --> 02:01:17
had pixels and i i would put a stone

02:01:15 --> 02:01:19
wherever

02:01:16 --> 02:01:20
it belongs in the letter pi in the greek

02:01:18 --> 02:01:22
letter pi

02:01:19 --> 02:01:23
and and but

02:01:21 --> 02:01:25
he problem was

02:01:22 --> 02:01:27
find a way to make some of the stones

02:01:24 --> 02:01:29
white some of the stones black so that

02:01:26 --> 02:01:31
here's a unique solution to the

02:01:28 --> 02:01:31
mossview puzzle

02:01:31 --> 02:01:34
that was

02:01:31 --> 02:01:37
a good test case for my algorithm on how

02:01:34 --> 02:01:39
to design master puzzles because i i

02:01:36 --> 02:01:41
nsisted in advance

02:01:38 --> 02:01:42
that the stones had to be placed in

02:01:40 --> 02:01:45
exactly the positions that make the

02:01:41 --> 02:01:48
letter pie make a juice letter okay

02:01:44 --> 02:01:49
all right that's cool and and

02:01:47 --> 02:01:52
i saw you know

02:01:48 --> 02:01:54
and it turned out there was a a

02:01:51 --> 02:01:55
unique way to do that

02:01:53 --> 02:01:57
um and so

02:01:54 --> 02:01:59
pi is a

02:01:56 --> 02:02:01
source of

02:01:58 --> 02:02:02
examples where i can

02:02:00 --> 02:02:05
prove that i'm starting with

02:02:01 --> 02:02:08
something that isn't canned

02:02:04 --> 02:02:10
and most most recently i was

02:02:07 --> 02:02:11
writing about something called graceful

02:02:09 --> 02:02:14
graphs

02:02:10 --> 02:02:16
uh graceful graphs

02:02:13 --> 02:02:19
is the following

02:02:15 --> 02:02:21
you have a graph that has

02:02:18 --> 02:02:23
m edges to it

02:02:20 --> 02:02:26
all right and

02:02:22 --> 02:02:28
you attach numbers to every vertex

02:02:25 --> 02:02:30
in the following way so every time you

02:02:27 --> 02:02:32
have an edge between vertices

02:02:29 --> 02:02:34
you take the difference between those

02:02:31 --> 02:02:36
numbers

02:02:33 --> 02:02:37
and and that difference is it's got to

02:02:35 --> 02:02:39
be

02:02:36 --> 02:02:42
tell you what edge it is so so

02:02:38 --> 02:02:43
ne edge two numbers will be one apart

02:02:41 --> 02:02:47
here'll be another edge where the

02:02:42 --> 02:02:50
numbers are two apart and so uh great

02:02:46 --> 02:02:52
computer problem can you find a graceful

02:02:49 --> 02:02:55
way to label a graph

02:02:52 --> 02:02:57
so i started with a so i started with a

02:02:54 --> 02:03:00
graph that i use for

02:02:56 --> 02:03:01
an organic graph not

02:02:59 --> 02:03:03
a

02:03:00 --> 02:03:05
mathematically symmetric graph or

02:03:02 --> 02:03:07
anything and i take this i take the 49

02:03:04 --> 02:03:09
states of the united states

02:03:06 --> 02:03:11
uh

02:03:08 --> 02:03:14
the edges that go from one state to the

02:03:10 --> 02:03:15
next state so for example california be

02:03:13 --> 02:03:16
next to oregon

02:03:14 --> 02:03:18
evada

02:03:15 --> 02:03:20
rizona okay

02:03:17 --> 02:03:23
and and

02:03:19 --> 02:03:27
i include this district of columbia

02:03:22 --> 02:03:29
uh so i have 49 i can't get at la alaska

02:03:26 --> 02:03:31
nd hawaii in there because they don't

02:03:28 --> 02:03:34
ouch you have to be able to drive from

02:03:30 --> 02:03:37
one to the other so is there a graceful

02:03:33 --> 02:03:39
abeling of of the united states

02:03:36 --> 02:03:42
each state gets a number

02:03:38 --> 02:03:44
and then if california is number 30 and

02:03:41 --> 02:03:46
oregon is number 11.

02:03:43 --> 02:03:48
that edge is going to be number

02:03:45 --> 02:03:49
19. the difference between those right

02:03:47 --> 02:03:51
okay

02:03:48 --> 02:03:52
so is there a way to do this for for all

02:03:50 --> 02:03:55
the states

02:03:52 --> 02:03:58
and at that and so i was i was thinking

02:03:54 --> 02:04:00
of having a contest uh

02:03:57 --> 02:04:01
for people to to get it as graceful as

02:03:59 --> 02:04:04
they could

02:04:00 --> 02:04:07
uh but my friend tamara kiki

02:04:04 --> 02:04:09
actually solved the problem by proving

02:04:06 --> 02:04:11
that i mean i was able i was able to get

02:04:08 --> 02:04:13
it down

02:04:10 --> 02:04:15
within seven or something like that he

02:04:12 --> 02:04:17
was able to get a perfect solution

02:04:14 --> 02:04:18
the actual solution or to prove that a

02:04:16 --> 02:04:21
solution exists

02:04:17 --> 02:04:23
more precisely i i had figured out a way

02:04:20 --> 02:04:26
to put labels on so that

02:04:22 --> 02:04:29
all the all the uh all the edges were

02:04:25 --> 02:04:30
labeled somewhere between one and 117

02:04:28 --> 02:04:32
but but there were some some get some

02:04:29 --> 02:04:34
gaps in there because

02:04:31 --> 02:04:36
i should really have gone from one to

02:04:33 --> 02:04:37
105 or what the whatever the number is

02:04:36 --> 02:04:39
o

02:04:36 --> 02:04:41
i gave myself too much

02:04:38 --> 02:04:43
you know a lot of slack

02:04:40 --> 02:04:45
he did it without any slack whatsoever a

02:04:42 --> 02:04:48
perfect grace for labeling

02:04:44 --> 02:04:50
and and so i you know i

02:04:47 --> 02:04:52
call out the contest uh because the

02:04:49 --> 02:04:54
problem is already solid and too easy in

02:04:51 --> 02:04:55
a sense because tom was able to do it in

02:04:53 --> 02:04:58
an afternoon

02:04:54 --> 02:05:01
um he sorry he did the algorithm or for

02:04:57 --> 02:05:02
this particular uh for the stick united

02:05:00 --> 02:05:03
states for the united states this

02:05:01 --> 02:05:06
problem is

02:05:02 --> 02:05:07
this problem is incredibly hard i mean

02:05:05 --> 02:05:09
for the general generally okay

02:05:06 --> 02:05:11
but it's like it's like coloring but it

02:05:08 --> 02:05:14
was very lucky that we worked for the

02:05:10 --> 02:05:16
united states sure um i think but but i

02:05:13 --> 02:05:19
mean the theory is still very uncomplete

02:05:15 --> 02:05:21
but but but anyway then tom came back a

02:05:18 --> 02:05:23
couple days later and he had been able

02:05:20 --> 02:05:24
to not only find a graceful labeling but

02:05:22 --> 02:05:25
he

02:05:23 --> 02:05:28
but

02:05:24 --> 02:05:30
he label of washington was 31.

02:05:27 --> 02:05:31
the label of

02:05:29 --> 02:05:36
idaho

02:05:30 --> 02:05:37
was 41 following the digits of pi

02:05:35 --> 02:05:38
yeah

02:05:36 --> 02:05:40
going across

02:05:37 --> 02:05:42
the topic of the united states he has

02:05:40 --> 02:05:44
the digits of pipeline did he do it on

02:05:41 --> 02:05:46
purpose

02:05:43 --> 02:05:49
he was able to still get a graceful

02:05:45 --> 02:05:49
abeling with that with

02:05:52 --> 02:05:58
it's a miracle okay but yeah but um i

02:05:56 --> 02:06:01
i

02:05:57 --> 02:06:03
like to use pie in my book you see and

02:06:00 --> 02:06:07
this is

02:06:02 --> 02:06:09
all roads lead to pie yeah somehow um

02:06:06 --> 02:06:11
somehow often hidden

02:06:08 --> 02:06:13
uh in the middle of like the the most

02:06:10 --> 02:06:15
difficult problems

02:06:12 --> 02:06:17
can i ask you about uh

02:06:14 --> 02:06:20
productivity

02:06:16 --> 02:06:22
yeah you said that quote my

02:06:19 --> 02:06:25
scheduling principle

02:06:21 --> 02:06:27
is to do the thing i hate most

02:06:24 --> 02:06:30
uh on my to-do list

02:06:26 --> 02:06:32
by week's end i'm very happy

02:06:29 --> 02:06:34
can you explain this process to a

02:06:31 --> 02:06:36
productive life

02:06:33 --> 02:06:37
oh i see well

02:06:35 --> 02:06:40
but all the time i'm working out and

02:06:36 --> 02:06:42
what i want i what i don't want to do

02:06:39 --> 02:06:44
but still i'm glad to have all those

02:06:41 --> 02:06:46
unpleasant tasks finished yes is that

02:06:44 --> 02:06:50
something you would advise to others

02:06:46 --> 02:06:52
well i yeah i i i don't know how to say

02:06:49 --> 02:06:54
it

02:06:51 --> 02:06:57
during the pandemic i feel my

02:06:53 --> 02:06:58
productivity actually went down by half

02:06:56 --> 02:07:00
um

02:06:57 --> 02:07:02
because i have to

02:06:59 --> 02:07:04
um

02:07:01 --> 02:07:07
i have to communicate by

02:07:03 --> 02:07:09
writing which is slow i have to

02:07:06 --> 02:07:11
i mean i i don't like to send out a bad

02:07:08 --> 02:07:12
sentence so i

02:07:10 --> 02:07:15
you know i go through and reread what

02:07:11 --> 02:07:16
i've written and edit and fix it so so

02:07:14 --> 02:07:17
everything takes a long a lot longer

02:07:15 --> 02:07:20
when i'm

02:07:16 --> 02:07:22
communicating by

02:07:19 --> 02:07:24
text messages um

02:07:21 --> 02:07:25
instead of just

02:07:23 --> 02:07:27
you know

02:07:24 --> 02:07:29
together with somebody in the room and

02:07:26 --> 02:07:31
it's also

02:07:28 --> 02:07:32
slower because the libraries are closed

02:07:30 --> 02:07:34
and stuff

02:07:31 --> 02:07:35
but there's another thing about

02:07:33 --> 02:07:37
scheduling that i learned from my mother

02:07:34 --> 02:07:39
that i should probably tell you and that

02:07:36 --> 02:07:41
is

02:07:38 --> 02:07:43
um it's different from what people in

02:07:40 --> 02:07:45
robotics field do which is called

02:07:42 --> 02:07:48
planning

02:07:44 --> 02:07:50
so she had this principle

02:07:47 --> 02:07:52
that was

02:07:49 --> 02:07:54
ee something that needs to be done and

02:07:51 --> 02:07:54
o it

02:07:53 --> 02:07:57
you know i would just

02:07:54 --> 02:07:59
instead of saying i'm going to do this

02:07:56 --> 02:08:00
first and do this first

02:07:58 --> 02:08:02
just

02:07:59 --> 02:08:02
you know

02:08:02 --> 02:08:08
just do it oh yeah pick this up you know

02:08:04 --> 02:08:10
but you're at any one moment there's a

02:08:07 --> 02:08:13
set of tasks that you can do and you're

02:08:09 --> 02:08:15
saying a good heuristic

02:08:12 --> 02:08:16
is to do the the one you want to do

02:08:14 --> 02:08:17
least

02:08:15 --> 02:08:20
right

02:08:16 --> 02:08:21
he one i haven't got any good reason

02:08:19 --> 02:08:23
i think

02:08:20 --> 02:08:27
that i'll never be

02:08:22 --> 02:08:29
able to do it any better than i am now

02:08:26 --> 02:08:30
i mean there are some things that that i

02:08:28 --> 02:08:31
know

02:08:29 --> 02:08:33
if i do

02:08:30 --> 02:08:35
something else first i'll be able to do

02:08:32 --> 02:08:37
that one better yeah but but but there's

02:08:34 --> 02:08:38
ome that are going to be harder because

02:08:36 --> 02:08:41
you know

02:08:37 --> 02:08:42
i i i i've forgotten some of the

02:08:40 --> 02:08:44
groundwork that went into it or

02:08:41 --> 02:08:46
something like that

02:08:43 --> 02:08:48
so so i just finished uh a pretty tough

02:08:45 --> 02:08:49
part of the book and

02:08:47 --> 02:08:52
uh

02:08:48 --> 02:08:53
and so and so now i'm

02:08:51 --> 02:08:54
you know doing the parts that are more

02:08:52 --> 02:08:57
fun

02:08:53 --> 02:09:00
but but but the the other thing is as

02:08:56 --> 02:09:02
i'm writing the book of course i want

02:08:59 --> 02:09:04
he reader to think that i'm happy all

02:09:01 --> 02:09:07
the time i'm writing the book i i'm you

02:09:03 --> 02:09:09
know that it's upbeat i i i can have

02:09:06 --> 02:09:11
humor i can you know i can i can say

02:09:08 --> 02:09:12
this is cool you know

02:09:10 --> 02:09:15
ow

02:09:11 --> 02:09:16
this uh i have to i have to disguise the

02:09:14 --> 02:09:19
fact that

02:09:15 --> 02:09:22
it was painful in any way to come up the

02:09:18 --> 02:09:23
road to that excitement is painful yeah

02:09:21 --> 02:09:26
it's laden with pain

02:09:22 --> 02:09:28
okay is is there um you've given some

02:09:25 --> 02:09:31
advice to people before

02:09:27 --> 02:09:33
but can you um

02:09:30 --> 02:09:36
can you you give me too too much credit

02:09:32 --> 02:09:39
but anyway this is my this is my turn to

02:09:35 --> 02:09:40
just not to say things that that that i

02:09:38 --> 02:09:44
believe but

02:09:39 --> 02:09:46
i want to preface it by saying um

02:09:43 --> 02:09:49
i also believe that

02:09:45 --> 02:09:51
other people do a lot of these things

02:09:48 --> 02:09:52
much better than i do so i can only tell

02:09:50 --> 02:09:54
you

02:09:51 --> 02:09:56
my side of it

02:09:53 --> 02:09:56
so

02:09:55 --> 02:10:01
can i ask you to give advice

02:09:57 --> 02:10:03
to young people today to high school

02:10:00 --> 02:10:05
students to college students whether

02:10:02 --> 02:10:06
they're geeks

02:10:04 --> 02:10:07
or

02:10:05 --> 02:10:10
the other kind

02:10:06 --> 02:10:12
about how to live a life that they can

02:10:09 --> 02:10:16
be proud of how to have a successful

02:10:11 --> 02:10:16
career how to have a successful life

02:10:16 --> 02:10:21
it's always the same as i've said before

02:10:18 --> 02:10:23
i guess

02:10:20 --> 02:10:25
not to

02:10:22 --> 02:10:26
do something because you

02:10:24 --> 02:10:28
because it's trendy

02:10:26 --> 02:10:30
but

02:10:27 --> 02:10:32
it's something that you personally

02:10:29 --> 02:10:34
feel that you were called to do

02:10:31 --> 02:10:35
right rather than somebody else expects

02:10:33 --> 02:10:37
you to do

02:10:34 --> 02:10:39
how do you know

02:10:36 --> 02:10:41
you're called to do something

02:10:38 --> 02:10:43
you try it and it works or you or it

02:10:40 --> 02:10:45
ook or it doesn't work i mean you you

02:10:42 --> 02:10:47
learn about yourself

02:10:44 --> 02:10:49
life is a binary search you try

02:10:46 --> 02:10:50
something and you find out oh yeah i

02:10:48 --> 02:10:51
have a background that helped me with

02:10:50 --> 02:10:52
is

02:10:50 --> 02:10:53
or

02:10:51 --> 02:10:54
or

02:10:52 --> 02:10:55
maybe

02:10:53 --> 02:10:57
i

02:10:54 --> 02:10:59
could do this if i worked a little bit

02:10:56 --> 02:11:01
harder but you try something else and

02:10:58 --> 02:11:03
you say wait i have really no intuition

02:11:00 --> 02:11:05
for this and it looks like

02:11:02 --> 02:11:06
uh

02:11:04 --> 02:11:08
you know it looks like it doesn't have

02:11:05 --> 02:11:10
my name on it

02:11:07 --> 02:11:12
was there advice along the way that

02:11:09 --> 02:11:14
you got

02:11:11 --> 02:11:16
about what you should and shouldn't work

02:11:13 --> 02:11:18
on or do you just try to listen to

02:11:15 --> 02:11:20
yourself yeah

02:11:17 --> 02:11:23
i probably overreacted another way

02:11:19 --> 02:11:26
when something when i see everybody else

02:11:22 --> 02:11:28
do going some way i probably

02:11:25 --> 02:11:31
i i'd probably say not too much

02:11:27 --> 02:11:31
competition

02:11:30 --> 02:11:36
but yeah but but uh

02:11:33 --> 02:11:37
but mostly i i

02:11:35 --> 02:11:40
played with things that were interesting

02:11:36 --> 02:11:43
to me and then later on i found

02:11:39 --> 02:11:44
oh actually the most important thing i

02:11:42 --> 02:11:47
learned was how to be interested in

02:11:43 --> 02:11:47
almost anything yeah i mean not to be

02:11:46 --> 02:11:50
bored

02:11:46 --> 02:11:52
it hurts it makes me

02:11:49 --> 02:11:56
very sad when i when i see kids talking

02:11:51 --> 02:11:56
to each other and they say

02:11:55 --> 02:12:00
that was boring

02:11:58 --> 02:12:02
and

02:11:59 --> 02:12:05
to me

02:12:01 --> 02:12:06
a person should feel

02:12:04 --> 02:12:08
upset if he would help

02:12:06 --> 02:12:11
if he had to admit that he wasn't able

02:12:07 --> 02:12:12
to find something interesting

02:12:10 --> 02:12:14
so uh uh

02:12:11 --> 02:12:17
you know the skill they

02:12:13 --> 02:12:19
say i haven't learned how to

02:12:16 --> 02:12:22
enjoy life i have to have

02:12:18 --> 02:12:24
somebody entertain me instead of right

02:12:21 --> 02:12:26
hat's really interesting it is a skill

02:12:23 --> 02:12:28
uh david foster wallace

02:12:25 --> 02:12:30
i really like

02:12:27 --> 02:12:33
the thing he says about this which is

02:12:29 --> 02:12:36
the key to life is to be unborable

02:12:32 --> 02:12:37
and i do really like you saying that

02:12:35 --> 02:12:39
it's a skill

02:12:36 --> 02:12:41
because i think that's a really good

02:12:38 --> 02:12:43
that's really good advice which is if

02:12:40 --> 02:12:46
you find something boring

02:12:42 --> 02:12:48
that's not

02:12:45 --> 02:12:51
i don't believe it's because

02:12:47 --> 02:12:53
it's boring it's because you haven't

02:12:50 --> 02:12:55
developed i have learned how to how to

02:12:52 --> 02:12:56
find the beauty and how to find the fun

02:12:54 --> 02:12:57
in it

02:12:55 --> 02:12:58
yeah that's a that's a really really

02:12:56 --> 02:13:00
good point

02:12:57 --> 02:13:02
you know sometimes it's

02:12:59 --> 02:13:04
more difficult than others

02:13:02 --> 02:13:06
to do this but

02:13:03 --> 02:13:09
i mean during the covet

02:13:06 --> 02:13:12
lots of days when i did when i never saw

02:13:08 --> 02:13:13
another human being but um

02:13:11 --> 02:13:17
but

02:13:12 --> 02:13:20
i i i still find other ways to

02:13:16 --> 02:13:22
it still was a pretty fun time yeah yeah

02:13:19 --> 02:13:23
i came earlier i came a few minutes

02:13:22 --> 02:13:25
early

02:13:22 --> 02:13:27
today and i

02:13:24 --> 02:13:29
walked around foster city

02:13:26 --> 02:13:30
i didn't want you know i didn't know

02:13:28 --> 02:13:31
hat was going on in foster city i saw a

02:13:30 --> 02:13:33
beautiful

02:13:30 --> 02:13:37
some beautiful flowers at the nursery at

02:13:32 --> 02:13:37
home depot a few blocks away

02:13:37 --> 02:13:42
life is amazing it's full of amazing

02:13:39 --> 02:13:44
things like this yeah i just sometimes

02:13:42 --> 02:13:46
i'll i'll sit there and just stare at a

02:13:43 --> 02:13:48
tree

02:13:45 --> 02:13:49
nature is beautiful

02:13:47 --> 02:13:51
uh let me ask you the big ridiculous

02:13:48 --> 02:13:53
question i don't think i asked you last

02:13:50 --> 02:13:54
ime i have to ask this time in case you

02:13:52 --> 02:13:58
have a good answer

02:13:53 --> 02:14:00
what is the meaning of life

02:13:57 --> 02:14:02
our existence here on earth

02:13:59 --> 02:14:07
e whole thing

02:14:01 --> 02:14:09
[Laughter]

02:14:06 --> 02:14:11
no no you can't you can't i will not

02:14:08 --> 02:14:13
allow you to uh to try to escape

02:14:10 --> 02:14:15
answering this question you have to

02:14:12 --> 02:14:18
answer definitively

02:14:14 --> 02:14:20
uh because they're they're surely

02:14:17 --> 02:14:23
don knuth there must be an answer

02:14:19 --> 02:14:24
what is the answer is it 42 or wherever

02:14:22 --> 02:14:28
yeah well i don't think it's the

02:14:23 --> 02:14:28
numerical that's that's

02:14:28 --> 02:14:36
okay but all right so so anyway um

02:14:32 --> 02:14:37
it's only for me and

02:14:35 --> 02:14:39
but i

02:14:36 --> 02:14:43
personally

02:14:38 --> 02:14:47
think of my belief that

02:14:42 --> 02:14:48
god exists although i have no idea

02:14:46 --> 02:14:52
what that means

02:14:47 --> 02:14:52
but i believe that there is

02:14:51 --> 02:14:55
ome

02:14:53 --> 02:14:57
thing

02:14:54 --> 02:14:58
beyond human

02:14:56 --> 02:14:59
uh

02:14:57 --> 02:15:01
capabilities

02:14:58 --> 02:15:05
um and it might be uh

02:15:00 --> 02:15:07
it might be some ai

02:15:04 --> 02:15:10
but but whatever it is but but whatever

02:15:06 --> 02:15:12
i but i do believe that

02:15:09 --> 02:15:13
there is

02:15:12 --> 02:15:15
omething

02:15:12 --> 02:15:18
that goes beyond

02:15:14 --> 02:15:21
the realm of human understanding

02:15:17 --> 02:15:24
but but that that i can

02:15:20 --> 02:15:25
try to

02:15:23 --> 02:15:29
learn more about

02:15:24 --> 02:15:32
how to resonate with whatever that

02:15:28 --> 02:15:33
being would like me to do

02:15:31 --> 02:15:36
so do you think you can

02:15:32 --> 02:15:39
have occasional glimpses of that being i

02:15:36 --> 02:15:42
strive for that

02:15:38 --> 02:15:44
not that i

02:15:41 --> 02:15:46
ever think i'm going to get close to it

02:15:43 --> 02:15:48
but but it's not

02:15:45 --> 02:15:49
for me it's it's saying what

02:15:47 --> 02:15:52
should i do

02:15:48 --> 02:15:55
that that big being wants me to do

02:15:51 --> 02:15:58
that's that's you know i i'm trying to

02:15:54 --> 02:15:58
ask

02:15:59 --> 02:16:03
what that

02:16:00 --> 02:16:05
i mean does that being want me to to be

02:16:02 --> 02:16:10
talking to lex friedman right now you

02:16:04 --> 02:16:13
know and i said yes okay but thank you

02:16:09 --> 02:16:14
well thank you

02:16:12 --> 02:16:16
but

02:16:13 --> 02:16:17
yeah what i'm trying to say is

02:16:15 --> 02:16:19
i'm not trying to say what

02:16:16 --> 02:16:20
of all the

02:16:18 --> 02:16:23
strategies i could choose or something

02:16:19 --> 02:16:26
which one

02:16:22 --> 02:16:29
i i try to do it not not strategically

02:16:25 --> 02:16:29
but i try to

02:16:29 --> 02:16:34
imagine

02:16:30 --> 02:16:35
that i'm following somebody's wishes

02:16:33 --> 02:16:37
even though

02:16:34 --> 02:16:39
you're not smart enough to to know what

02:16:36 --> 02:16:42
hey are yeah

02:16:38 --> 02:16:45
but that funny little dance well i i i

02:16:41 --> 02:16:45
mean this ai or whatever is it probably

02:16:44 --> 02:16:48
is

02:16:44 --> 02:16:50
it is smart enough to help to give me

02:16:47 --> 02:16:50
clues

02:16:51 --> 02:16:55
and uh

02:16:52 --> 02:16:56
to make the whole journey from clue to

02:16:54 --> 02:16:59
clue

02:16:55 --> 02:17:00
a fun one yeah i mean it's as so many

02:16:58 --> 02:17:02
people have said it's the journey not

02:17:00 --> 02:17:03
he destination

02:17:01 --> 02:17:04
and

02:17:02 --> 02:17:07
people live

02:17:03 --> 02:17:10
through crises help each other all

02:17:06 --> 02:17:13
these things come up

02:17:09 --> 02:17:17
history repeats itself

02:17:12 --> 02:17:19
you try to say in the world today

02:17:16 --> 02:17:24
is there any government that's working i

02:17:18 --> 02:17:24
read history i i know that things were

02:17:23 --> 02:17:28
they they were they were

02:17:25 --> 02:17:30
there were a lot worse

02:17:27 --> 02:17:32
in many ways there's a lot of bad things

02:17:29 --> 02:17:34
all the time

02:17:31 --> 02:17:36
and i read about

02:17:33 --> 02:17:37
you know i i look at

02:17:35 --> 02:17:38
hings and people had good ideas and

02:17:36 --> 02:17:41
they were working

02:17:37 --> 02:17:44
on great projects and then i know that

02:17:40 --> 02:17:46
it didn't succeed though in the end

02:17:43 --> 02:17:47
uh but but the new insight i've gotten

02:17:45 --> 02:17:50
him actually

02:17:46 --> 02:17:52
in that way was i i was reading

02:17:49 --> 02:17:54
uh what what book was i reading now

02:17:51 --> 02:17:56
recently it was

02:17:53 --> 02:17:59
by ken follett and it was called

02:17:55 --> 02:18:02
the man from saint petersburg but it but

02:17:58 --> 02:18:03
it was talking about the prequel to

02:18:01 --> 02:18:06
world war one

02:18:02 --> 02:18:09
and winston churchill

02:18:05 --> 02:18:11
according to this book uh sees that

02:18:08 --> 02:18:13
germany has been spending all its

02:18:10 --> 02:18:15
gold reserves uh building up a huge

02:18:12 --> 02:18:17
military

02:18:14 --> 02:18:19
and there's no question that

02:18:16 --> 02:18:21
if germany would attack england that

02:18:18 --> 02:18:22
england would be wiped out

02:18:20 --> 02:18:25
um

02:18:21 --> 02:18:26
so he wants russia to help

02:18:24 --> 02:18:28
uh

02:18:25 --> 02:18:29
to attack germany from the other side

02:18:27 --> 02:18:31
because germany doesn't have enough of

02:18:28 --> 02:18:34
an army to

02:18:30 --> 02:18:35
be fighting two wars at one

02:18:33 --> 02:18:39
okay now

02:18:34 --> 02:18:40
then there's an anarchist in russia

02:18:38 --> 02:18:43
who sees

02:18:39 --> 02:18:43
that

02:18:42 --> 02:18:47
wars are

02:18:44 --> 02:18:50
something that leaders start but

02:18:46 --> 02:18:51
actually people get killed

02:18:49 --> 02:18:55
and so he

02:18:50 --> 02:18:58
wants to stop

02:18:54 --> 02:19:00
any alliance between england and russia

02:18:57 --> 02:19:02
because that would mean that

02:18:59 --> 02:19:05
a thousand thousand people of russia

02:19:01 --> 02:19:07
would would be killed that wouldn't be

02:19:04 --> 02:19:09
otherwise killed

02:19:06 --> 02:19:11
all right and so

02:19:08 --> 02:19:13
his his life's goal

02:19:10 --> 02:19:16
is to assassinate

02:19:12 --> 02:19:19
a russian prince who's visiting england

02:19:15 --> 02:19:20
because that will make will mean the

02:19:18 --> 02:19:21
czar will not form the alliance all

02:19:20 --> 02:19:24
right

02:19:20 --> 02:19:26
so we have this

02:19:23 --> 02:19:28
question

02:19:25 --> 02:19:29
about what should the government do

02:19:27 --> 02:19:31
should it actually

02:19:28 --> 02:19:34
do something that will lead to

02:19:30 --> 02:19:36
you know is is the war inevitable or is

02:19:33 --> 02:19:40
there a way to have peace and and this

02:19:35 --> 02:19:42
just did and it struck me that if i were

02:19:39 --> 02:19:44
in a position of responsibility work for

02:19:41 --> 02:19:47
people's lives

02:19:43 --> 02:19:49
in most cases i wouldn't have i wouldn't

02:19:46 --> 02:19:50
have any confidence that any of my

02:19:48 --> 02:19:53
decisions were good

02:19:49 --> 02:19:54
that that that these these questions are

02:19:52 --> 02:19:55
too

02:19:53 --> 02:19:56
hard

02:19:54 --> 02:19:58
probably for any human being but

02:19:55 --> 02:20:01
certainly for me

02:19:57 --> 02:20:03
well i think

02:20:00 --> 02:20:04
coupling the

02:20:02 --> 02:20:07
not being sure

02:20:04 --> 02:20:10
that the decisions are right so that

02:20:06 --> 02:20:12
's actually a really good thing

02:20:09 --> 02:20:13
coupled with the fact that you do have

02:20:11 --> 02:20:17
to make a decision

02:20:12 --> 02:20:21
and carry the burden of that and

02:20:16 --> 02:20:24
ultimately i have faith in human beings

02:20:20 --> 02:20:27
and the great leaders to arise

02:20:23 --> 02:20:29
uh and help build a better world i mean

02:20:26 --> 02:20:31
that's the hope of democracy that's done

02:20:28 --> 02:20:31
yeah

02:20:31 --> 02:20:36
enhance their abilities with uh

02:20:34 --> 02:20:40
with algorithms

02:20:36 --> 02:20:42
[Laughter]

02:20:39 --> 02:20:45
uh well put done

02:20:42 --> 02:20:47
it's such a huge honor i've you've been

02:20:44 --> 02:20:50
an inspiration to me and to millions for

02:20:46 --> 02:20:52
such a long time um thank you

02:20:49 --> 02:20:53
for spending your really valuable time

02:20:51 --> 02:20:55
with me once again

02:20:52 --> 02:20:56
it's a huge honor i really enjoyed this

02:20:54 --> 02:20:57
conversation

02:20:55 --> 02:20:59
thanks for listening to this

02:20:56 --> 02:21:01
conversation with donald knuth to

02:20:58 --> 02:21:03
support this podcast please check out

02:21:00 --> 02:21:05
our sponsors in the description

02:21:02 --> 02:21:08
and now let me leave you with some words

02:21:04 --> 02:21:10
from don knuth himself

02:21:07 --> 02:21:13
science is what we understand well

02:21:09 --> 02:21:15
enough to explain to a computer art is

02:21:12 --> 02:21:17
everything else we do

02:21:14 --> 02:21:21
thank you for listening i hope to see

02:21:16 --> 02:21:21
you next time

02:21:26 --> 02:21:29
you

<!-- YOUTUBE_TRANSCRIPT_END -->
