---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "IT__Nrr3PNI"
title: "James Gosling: Java, JVM, Emacs, and the Early Days of Computing | Lex Fridman Podcast #126"
video_url: "https://www.youtube.com/watch?v=IT__Nrr3PNI"
thumbnail_url: "https://i.ytimg.com/vi/IT__Nrr3PNI/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=IT__Nrr3PNI"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-09-24T14:32:48.000Z"
upload_date: "2020-09-24"
duration_seconds: 6661
duration_human: "1:51:01"
view_count: 487026
like_count: 11673
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:18:54.622Z"
---

# James Gosling: Java, JVM, Emacs, and the Early Days of Computing | Lex Fridman Podcast #126

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=IT__Nrr3PNI
- video_id: IT__Nrr3PNI
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-09-24T14:32:48.000Z
- upload_date: 2020-09-24
- duration: 1:51:01
- view_count: 487026
- like_count: 11673
- has_subtitle: true
- language: en
- availability: public
- tags: james gosling, artificial intelligence, agi, ai, ai podcast, artificial intelligence podcast, lex fridman, lex podcast, lex mit, lex ai, lex jre, mit ai
- categories: Science & Technology

## Description

James Gosling is the founder and lead designer of the Java programming language. Please check out our sponsors to get a discount and to support this podcast:
- Public Goods: https://publicgoods.com/lex and use code LEX
- BetterHelp: https://betterhelp.com/lex
- ExpressVPN: https://www.expressvpn.com/lexpod

EPISODE LINKS:
James Twitter: https://twitter.com/errcraft
James Wiki: https://en.wikipedia.org/wiki/James_Gosling

PODCAST INFO:
Podcast website: https://lexfridman.com/podcast
Apple Podcasts: https://apple.co/2lwqZIr
Spotify: https://spoti.fi/2nEwCF8
RSS: https://lexfridman.com/feed/podcast/
Full episodes playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4
Clips playlist: https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

OUTLINE:
0:00 - Introduction
4:45 - Irrational numbers
8:04 - Math and programming
10:36 - Coding style
14:41 - First computer
23:54 - Lisp
27:22 - Write an Emacs implementation in C
35:15 - Early days of the Internet
45:57 - Elon Musk, Steve Jobs, Jeff Bezos
56:13 - Work hard and smart
58:48 - Open source
1:10:25 - Java
1:28:31 - Java virtual machine
1:44:05 - Android
1:47:04 - Advice

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
james gosling the founder and lead

00:00:03 --> 00:00:06
esigner behind the java programming

00:00:05 --> 00:00:09
language

00:00:06 --> 00:00:10
which in many indices is the most

00:00:08 --> 00:00:11
popular programming language in the

00:00:09 --> 00:00:14
world

00:00:10 --> 00:00:15
or is always at least in the top two or

00:00:13 --> 00:00:16
three

00:00:14 --> 00:00:18
we only had a limited time for this

00:00:15 --> 00:00:20
conversation but i'm sure we'll talk

00:00:17 --> 00:00:22
again several times in this podcast

00:00:19 --> 00:00:24
quick summary of the sponsors public

00:00:21 --> 00:00:26
goods betterhelp

00:00:23 --> 00:00:27
and expressvpn please check out these

00:00:25 --> 00:00:30
sponsors in the description to get a

00:00:26 --> 00:00:33
discount and to support this podcast

00:00:29 --> 00:00:34
as a side note let me say that java is

00:00:32 --> 00:00:36
the language

00:00:33 --> 00:00:37
with which i first learned object

00:00:35 --> 00:00:39
oriented programming

00:00:36 --> 00:00:41
and with it the art and science of

00:00:38 --> 00:00:43
software engineering

00:00:40 --> 00:00:44
also early on in my undergraduate

00:00:42 --> 00:00:47
ducation i took a

00:00:44 --> 00:00:48
course on concurrent programming with

00:00:46 --> 00:00:50
java

00:00:47 --> 00:00:52
looking back at that time before i fell

00:00:50 --> 00:00:55
in love with neural networks

00:00:51 --> 00:00:56
the art of parallel computing was both

00:00:54 --> 00:00:59
algorithmically

00:00:55 --> 00:01:01
and philosophically fascinating to me

00:00:58 --> 00:01:04
the concept of a computer in my mind

00:01:00 --> 00:01:05
before then was something that does one

00:01:03 --> 00:01:07
thing at a time

00:01:04 --> 00:01:09
the idea that we could create an

00:01:06 --> 00:01:11
abstraction of parallelism where you

00:01:08 --> 00:01:12
could do many things at the same time

00:01:10 --> 00:01:16
while still guaranteeing stability and

00:01:12 --> 00:01:18
correctness was beautiful

00:01:15 --> 00:01:19
while some folks in college took drugs

00:01:17 --> 00:01:22
to expand their mind

00:01:18 --> 00:01:24
i took concurrent programming if you

00:01:21 --> 00:01:25
enjoy this thing subscribe on youtube

00:01:23 --> 00:01:27
review it with five stars on apple

00:01:24 --> 00:01:30
podcast follow on spotify

00:01:26 --> 00:01:32
support on patreon or connect with me on

00:01:29 --> 00:01:33
twitter at lex friedman

00:01:31 --> 00:01:35
as usual i'll do a few minutes of ads

00:01:32 --> 00:01:37
now and no ads in the middle

00:01:34 --> 00:01:38
i try to make these interesting but i do

00:01:36 --> 00:01:41
give you timestamps

00:01:37 --> 00:01:42
o go ahead and skip but please do check

00:01:40 --> 00:01:44
out the sponsors

00:01:41 --> 00:01:46
by clicking the links in the description

00:01:43 --> 00:01:47
it's the best way to support this

00:01:45 --> 00:01:50
podcast

00:01:46 --> 00:01:52
his show sponsored by public goods the

00:01:49 --> 00:01:53
one-stop shop for affordable sustainable

00:01:51 --> 00:01:56
healthy

00:01:52 --> 00:01:58
household products i take their fish oil

00:01:55 --> 00:02:00
and use their toothbrush

00:01:57 --> 00:02:02
for example their products often have a

00:01:59 --> 00:02:04
minimalist black and white design that i

00:02:01 --> 00:02:06
find to be just beautiful

00:02:03 --> 00:02:08
some people ask why i wear this black

00:02:05 --> 00:02:10
suit and tie

00:02:07 --> 00:02:11
there's a simplicity to it that to me

00:02:09 --> 00:02:14
focuses my mind

00:02:10 --> 00:02:15
on the most important bits of every

00:02:13 --> 00:02:17
moment of every day

00:02:14 --> 00:02:20
pulling only at the thread of the

00:02:16 --> 00:02:21
ssential in all that life has to throw

00:02:19 --> 00:02:22
at me

00:02:20 --> 00:02:25
it's not about how i look it's about how

00:02:21 --> 00:02:27
i feel that's what design is to me

00:02:24 --> 00:02:30
creating an inner conscious experience

00:02:26 --> 00:02:33
not an external look

00:02:29 --> 00:02:34
anyway public goods plants one tree for

00:02:32 --> 00:02:36
every order placed

00:02:33 --> 00:02:37
which is kind of cool visit

00:02:35 --> 00:02:40
publicgoods.com

00:02:36 --> 00:02:43
lex or use codelex at checkout to get 15

00:02:39 --> 00:02:45
bucks off your first order

00:02:42 --> 00:02:47
this show is also sponsored by better

00:02:44 --> 00:02:51
help spelled h-e-l-p

00:02:46 --> 00:02:53
help check it out at betterhelp.com lex

00:02:50 --> 00:02:55
they figure out what you need and match

00:02:52 --> 00:02:57
you with a licensed professional

00:02:54 --> 00:02:59
therapist in under 48 hours

00:02:56 --> 00:03:00
i chat with the person on there and

00:02:58 --> 00:03:03
enjoy it

00:02:59 --> 00:03:04
of course i also regularly talk to david

00:03:02 --> 00:03:06
goggins these days

00:03:03 --> 00:03:07
who is definitely not a licensed

00:03:05 --> 00:03:11
professional therapist

00:03:06 --> 00:03:12
but he does help me meet his and my

00:03:10 --> 00:03:14
demons

00:03:11 --> 00:03:15
and become comfortable to exist in their

00:03:13 --> 00:03:18
presence

00:03:14 --> 00:03:20
veryone is different but for me i think

00:03:17 --> 00:03:22
suffering is essential for creation

00:03:19 --> 00:03:24
but you can suffer beautifully in a way

00:03:21 --> 00:03:26
that doesn't destroy you

00:03:23 --> 00:03:28
i think therapy can help in whatever

00:03:25 --> 00:03:29
form that therapy takes

00:03:27 --> 00:03:31
and i do think that better help is an

00:03:28 --> 00:03:34
option worth trying

00:03:30 --> 00:03:35
they're easy private affordable and

00:03:33 --> 00:03:38
available worldwide

00:03:34 --> 00:03:40
you can communicate by text anytime and

00:03:37 --> 00:03:44
schedule weekly audio and video sessions

00:03:39 --> 00:03:45
check it out at betterhelp.com lex

00:03:43 --> 00:03:48
this show is also sponsored by

00:03:44 --> 00:03:50
expressvpn you can use it to unlock

00:03:47 --> 00:03:52
movies and shows that are only available

00:03:49 --> 00:03:53
in other countries

00:03:51 --> 00:03:55
i did this recently with star trek

00:03:52 --> 00:03:58
discovery and uk netflix

00:03:54 --> 00:03:59
mostly because i wonder what it's like

00:03:57 --> 00:04:01
to live in london

00:03:58 --> 00:04:03
i'm thinking of moving from boston to a

00:04:00 --> 00:04:05
place where i can build the business

00:04:02 --> 00:04:07
i've always dreamed of building london

00:04:04 --> 00:04:10
is probably not in the top three

00:04:06 --> 00:04:11
but top ten for sure the number one

00:04:09 --> 00:04:13
choice currently

00:04:10 --> 00:04:15
is austin for many reasons that i'll

00:04:12 --> 00:04:18
probably speak to another time

00:04:14 --> 00:04:20
san francisco unfortunately dropped off

00:04:17 --> 00:04:21
rom the number one spot but is still in

00:04:19 --> 00:04:24
the running

00:04:20 --> 00:04:25
if you have advice let me know anyway

00:04:23 --> 00:04:27
check out expressvpn

00:04:24 --> 00:04:30
it lets you change your location to

00:04:26 --> 00:04:33
almost 100 countries and it's super fast

00:04:29 --> 00:04:36
go to expressvpn.com lexbod to get an

00:04:32 --> 00:04:36
extra three months of expressvpn for

00:04:35 --> 00:04:40
free

00:04:35 --> 00:04:43
that's expressvpn.com lex

00:04:39 --> 00:04:47
pod and now here's my conversation

00:04:42 --> 00:04:48
with james gosling i've read somewhere

00:04:46 --> 00:04:50
that the square root of two is your

00:04:47 --> 00:04:54
favorite irrational number

00:04:49 --> 00:04:56
i have no idea where that got started

00:04:53 --> 00:04:58
um is there any truth to it is there

00:04:55 --> 00:04:59
anything in mathematics or numbers that

00:04:57 --> 00:05:02
you find beautiful

00:04:58 --> 00:05:03
oh well there's lots of things in in

00:05:01 --> 00:05:07
math that's

00:05:02 --> 00:05:09
really beautiful um you know i

00:05:06 --> 00:05:11
used to consider myself really good at

00:05:08 --> 00:05:14
math and these days i consider myself

00:05:10 --> 00:05:16
really bad at math

00:05:13 --> 00:05:17
i never had really had a thing for the

00:05:15 --> 00:05:21
square root of two

00:05:16 --> 00:05:23
but when i was a teenager

00:05:20 --> 00:05:26
there was this book called the the

00:05:22 --> 00:05:28
dictionary of curious and interesting

00:05:25 --> 00:05:32
numbers

00:05:27 --> 00:05:35
which for some reason i

00:05:31 --> 00:05:38
read through and damn near memorized the

00:05:34 --> 00:05:42
whole thing

00:05:37 --> 00:05:45
and i started this weird habit

00:05:41 --> 00:05:48
of when i was like filling out

00:05:44 --> 00:05:50
checks you know or you know paying for

00:05:47 --> 00:05:53
things with credit cards

00:05:49 --> 00:05:56
i would want to make the the receipt add

00:05:52 --> 00:05:58
up to an interesting number

00:05:55 --> 00:06:00
is there some numbers that stuck with

00:05:57 --> 00:06:03
you that just kind of make you feel good

00:05:59 --> 00:06:04
they all have a story and fortunately

00:06:02 --> 00:06:08
i've actually

00:06:03 --> 00:06:11
mostly forgotten all of them

00:06:07 --> 00:06:14
um are they uh so like 42

00:06:10 --> 00:06:15
uh well yeah i mean that one 42 is

00:06:13 --> 00:06:17
pretty magical

00:06:14 --> 00:06:18
and then the irrationals i mean but is

00:06:16 --> 00:06:22
there a square root or two

00:06:17 --> 00:06:25
story in there somewhere well it's

00:06:21 --> 00:06:27
like the only number that has

00:06:24 --> 00:06:30
destroyed a religion

00:06:26 --> 00:06:33
in which way well the the

00:06:29 --> 00:06:35
pathagorians they they believed that all

00:06:32 --> 00:06:39
numbers were perfect and you could

00:06:34 --> 00:06:41
represent anything as as a as a rational

00:06:38 --> 00:06:43
number

00:06:40 --> 00:06:45
and

00:06:42 --> 00:06:49
[Music]

00:06:44 --> 00:06:52
in that in that time period

00:06:48 --> 00:06:55
um the this proof came out

00:06:51 --> 00:06:58
hat there was no

00:06:54 --> 00:07:01
you know rational fraction whose value

00:06:57 --> 00:07:04
was equal to the square root of two

00:07:00 --> 00:07:06
and that that means nothing in this

00:07:03 --> 00:07:09
world is perfect not even mathematics

00:07:05 --> 00:07:12
well it it means that your definition of

00:07:08 --> 00:07:14
perfect was imperfect

00:07:11 --> 00:07:15
well then then there's the ghetto and

00:07:13 --> 00:07:17
completeness theorems in the 20th

00:07:14 --> 00:07:20
century that ruined it once again

00:07:16 --> 00:07:20
for everybody yeah although although

00:07:19 --> 00:07:24
girdle's theorem um

00:07:24 --> 00:07:29
you know the lesson i take from girdle's

00:07:26 --> 00:07:31
theorem is not that

00:07:28 --> 00:07:32
you know there are things you can't know

00:07:30 --> 00:07:36
hich

00:07:31 --> 00:07:39
is fundamentally what it says um

00:07:35 --> 00:07:40
but you know people want black and white

00:07:38 --> 00:07:43
answers

00:07:39 --> 00:07:47
they want true or false

00:07:42 --> 00:07:48
um but if you if you allow a three-state

00:07:46 --> 00:07:52
logic

00:07:48 --> 00:07:52
that is true false or maybe

00:07:51 --> 00:07:58
then then life's good

00:07:55 --> 00:07:59
i feel like there's a parallel to uh

00:07:57 --> 00:08:00
modern political discourse in there

00:07:58 --> 00:08:03
somewhere

00:07:59 --> 00:08:07
but yeah let me let me ask

00:08:02 --> 00:08:11
um so with your kind of

00:08:06 --> 00:08:12
early love or appreciation of the beauty

00:08:10 --> 00:08:15
of mathematics

00:08:11 --> 00:08:18
do you see a parallel between that world

00:08:14 --> 00:08:20
and the world of programming you know

00:08:17 --> 00:08:24
programming is

00:08:20 --> 00:08:28
all about logical structure

00:08:23 --> 00:08:31
understanding the the patterns

00:08:27 --> 00:08:34
that um come out of

00:08:30 --> 00:08:38
computation understanding

00:08:33 --> 00:08:40
sort of i mean it's often

00:08:37 --> 00:08:42
like you know the path through the graph

00:08:39 --> 00:08:46
of possibilities

00:08:41 --> 00:08:49
to find a short a short route

00:08:45 --> 00:08:50
meaning like uh find a short program

00:08:48 --> 00:08:53
that gets the job done

00:08:49 --> 00:08:55
yeah kind of thing but uh so then on the

00:08:52 --> 00:08:59
topic of irrational numbers

00:08:54 --> 00:09:02
do you see dc programming

00:08:58 --> 00:09:03
you just painted it so cleanly uh it's a

00:09:01 --> 00:09:06
little this trajectory

00:09:02 --> 00:09:09
to find like a nice little program but

00:09:05 --> 00:09:12
do you see it as fundamentally messy

00:09:08 --> 00:09:13
maybe unlike mathematics i don't think

00:09:11 --> 00:09:15
of it as

00:09:12 --> 00:09:17
i mean i mean you know you watch

00:09:14 --> 00:09:20
somebody who's good at math do

00:09:16 --> 00:09:24
math and you know often

00:09:19 --> 00:09:25
it's it's fairly messy sometimes it's

00:09:23 --> 00:09:28
kind of

00:09:24 --> 00:09:32
magical um

00:09:27 --> 00:09:34
when i was a grad student

00:09:31 --> 00:09:36
um one of the students his name was jim

00:09:33 --> 00:09:40
sax

00:09:35 --> 00:09:45
was he had this this this

00:09:39 --> 00:09:48
reputation of being sort of a

00:09:44 --> 00:09:50
walking talking human uh theorem proving

00:09:47 --> 00:09:51
machine

00:09:49 --> 00:09:53
and if you were having a hard problem

00:09:50 --> 00:09:55
with something you could just like

00:09:52 --> 00:09:58
accost him in the hall

00:09:54 --> 00:10:00
and say jim and

00:09:57 --> 00:10:01
he would do this this this funny

00:09:59 --> 00:10:03
thing where he would

00:10:00 --> 00:10:05
stand up straight his eyes would kind of

00:10:02 --> 00:10:07
defocus he'd

00:10:04 --> 00:10:08
go uh you know just just like get you

00:10:06 --> 00:10:11
know like like

00:10:07 --> 00:10:11
something in today's movies

00:10:10 --> 00:10:16
and then you straighten up and say and

00:10:12 --> 00:10:16
log in and walk away

00:10:15 --> 00:10:22
and and and you go well okay so n log n

00:10:19 --> 00:10:24
is the answer how did he

00:10:21 --> 00:10:24
get there

00:10:24 --> 00:10:28
by which time he's you know down the

00:10:25 --> 00:10:31
hallway somewhere yeah

00:10:27 --> 00:10:32
it is just the the oracle the black box

00:10:30 --> 00:10:33
just gives you the answer

00:10:31 --> 00:10:37
yeah and then you have to figure out the

00:10:32 --> 00:10:38
path from the question to the answer

00:10:36 --> 00:10:40
i think in one of the videos i watched

00:10:38 --> 00:10:43
you mentioned

00:10:39 --> 00:10:46
uh don knuth uh well

00:10:42 --> 00:10:46
at least recommending his uh you know

00:10:45 --> 00:10:49
his his book

00:10:46 --> 00:10:51
is something people should read oh yeah

00:10:48 --> 00:10:54
but in terms of

00:10:50 --> 00:10:57
you know theoretical computer science

00:10:53 --> 00:10:58
do you do you see something beautiful in

00:10:57 --> 00:11:01
that has been inspiring to you speaking

00:10:59 --> 00:11:04
of n log n

00:11:00 --> 00:11:07
in your work on programming languages

00:11:03 --> 00:11:09
that's in the in that whole world of

00:11:06 --> 00:11:12
algorithms and complexity

00:11:08 --> 00:11:13
and you know these kinds of more formal

00:11:11 --> 00:11:16
mathematical things

00:11:12 --> 00:11:21
um or did that not really

00:11:15 --> 00:11:24
stick with you in your programming life

00:11:20 --> 00:11:26
it did stick pretty clearly for me

00:11:24 --> 00:11:28
because

00:11:25 --> 00:11:30
one of the things that i care about is

00:11:27 --> 00:11:30
being able to

00:11:32 --> 00:11:41
sort of look at a piece of code and and

00:11:35 --> 00:11:44
be able to prove to myself that it works

00:11:40 --> 00:11:47
um you know and

00:11:43 --> 00:11:49
you know so so for example i find that

00:11:46 --> 00:11:53
um

00:11:48 --> 00:11:55
i'm i'm at odds with many of the people

00:11:52 --> 00:11:59
around me

00:11:54 --> 00:12:03
over um issues about like

00:11:58 --> 00:12:07
how you lay out a piece of software

00:12:02 --> 00:12:08
right you know so so software engineers

00:12:06 --> 00:12:10
get really cranky

00:12:07 --> 00:12:12
about how they format their the

00:12:09 --> 00:12:14
documents that are the programs you know

00:12:11 --> 00:12:16
here they put new lines and where they

00:12:13 --> 00:12:18
put you know the braces

00:12:15 --> 00:12:19
and all the rest of that

00:12:17 --> 00:12:22
right

00:12:18 --> 00:12:28
and i tend to go

00:12:21 --> 00:12:28
for a style that's very dense

00:12:27 --> 00:12:36
to minimize the white space um yeah well

00:12:31 --> 00:12:39
to maximize the amount that i can see

00:12:35 --> 00:12:40
at once right so i like to be able to

00:12:38 --> 00:12:42
see

00:12:39 --> 00:12:43
a whole function and to understand what

00:12:41 --> 00:12:45
it does

00:12:42 --> 00:12:47
rather than have to go scroll scroll

00:12:44 --> 00:12:49
and remember right yeah

00:12:46 --> 00:12:53
i'm with you on that yeah that's and

00:12:48 --> 00:12:56
people don't like that

00:12:52 --> 00:12:58
yeah i've i've had i've had you know

00:12:55 --> 00:13:01
multiple times when

00:12:57 --> 00:13:07
gineering teams have uh staged

00:13:00 --> 00:13:10
what was effectively an intervention

00:13:06 --> 00:13:12
um you know where they they invite me to

00:13:09 --> 00:13:15
a meeting and everybody's arrived before

00:13:11 --> 00:13:21
me and they so all look at me and say

00:13:14 --> 00:13:24
james about your coding style

00:13:20 --> 00:13:28
i'm sort of an odd person to be

00:13:23 --> 00:13:32
programming because i don't think

00:13:27 --> 00:13:37
very well verbally um

00:13:31 --> 00:13:40
i am just naturally a slow reader

00:13:36 --> 00:13:43
um i'm what most people would call

00:13:39 --> 00:13:44
a visual thinker so when you think about

00:13:42 --> 00:13:49
a program what do you

00:13:44 --> 00:13:51
see i see pictures right so

00:13:48 --> 00:13:53
when i look at a piece of code on a

00:13:50 --> 00:13:56
piece of paper

00:13:52 --> 00:13:58
it very quickly gets transformed into a

00:13:55 --> 00:14:01
picture

00:13:57 --> 00:14:04
um and you know it's almost like a piece

00:14:00 --> 00:14:06
of machinery with

00:14:03 --> 00:14:07
you know this connected to that and like

00:14:05 --> 00:14:11
these gear

00:14:06 --> 00:14:14
knobs yeah yeah i i see them more

00:14:10 --> 00:14:17
like that than i see the the

00:14:13 --> 00:14:18
sort of verbal structure or the

00:14:16 --> 00:14:20
lexical structure of

00:14:17 --> 00:14:21
letters so then when you look at the

00:14:19 --> 00:14:23
program that's why you want to see it

00:14:20 --> 00:14:23
all in the same place then you could

00:14:22 --> 00:14:25
just map

00:14:22 --> 00:14:28
it to something visual yeah and just

00:14:24 --> 00:14:29
kind of like like it leaps off the page

00:14:27 --> 00:14:31
at me and

00:14:28 --> 00:14:32
yeah what are the inputs where the

00:14:30 --> 00:14:33
outputs what the heck is this thing

00:14:31 --> 00:14:36
doing yeah

00:14:32 --> 00:14:38
and yeah getting a whole vision of it

00:14:35 --> 00:14:41
can we uh

00:14:37 --> 00:14:44
go back into your memory memory

00:14:40 --> 00:14:44
long-term memory access what's the first

00:14:43 --> 00:14:47
program

00:14:43 --> 00:14:47
you've ever written

00:14:47 --> 00:14:56
oh i have no idea what the first one was

00:14:52 --> 00:14:59
i mean i i know the first machine that i

00:14:55 --> 00:15:00
learned that i learned to program on

00:14:58 --> 00:15:03
what is it was a

00:14:59 --> 00:15:03
pdp-8

00:15:02 --> 00:15:10
um at the university of calgary

00:15:06 --> 00:15:13
do you remember the specs oh yeah so

00:15:09 --> 00:15:17
the thing had 4k of ram

00:15:12 --> 00:15:22
nice 12-bit words

00:15:16 --> 00:15:27
the clock rate was um

00:15:21 --> 00:15:29
it was about a third of a megahertz

00:15:26 --> 00:15:31
oh so i didn't even get to the to the m

00:15:28 --> 00:15:34
okay yeah

00:15:30 --> 00:15:38
so you know we're we're like

00:15:33 --> 00:15:41
10 000 times faster these days

00:15:37 --> 00:15:42
um and was this kind of like a super

00:15:40 --> 00:15:46
computer like a serious computer

00:15:41 --> 00:15:48
for no the pdp 8i was the

00:15:45 --> 00:15:50
first thing that people were calling

00:15:47 --> 00:15:53
like mini computer

00:15:49 --> 00:15:54
got it they were sort of inexpensive

00:15:52 --> 00:15:57
nough

00:15:53 --> 00:16:00
that a university lab could maybe afford

00:15:56 --> 00:16:02
to buy one

00:15:59 --> 00:16:04
and was there time sharing all that kind

00:16:01 --> 00:16:05
of stuff um there there actually was a

00:16:03 --> 00:16:09
time sharing os

00:16:04 --> 00:16:12
for that but it wasn't

00:16:08 --> 00:16:13
used really widely the machine that i

00:16:11 --> 00:16:16
learned on

00:16:12 --> 00:16:18
was one that was kind of hidden in the

00:16:15 --> 00:16:22
back corner

00:16:17 --> 00:16:25
of the of the computer center

00:16:21 --> 00:16:29
um and it was

00:16:24 --> 00:16:34
bought as a as part of a

00:16:28 --> 00:16:37
um project to do computer networking

00:16:33 --> 00:16:39
um but

00:16:36 --> 00:16:40
you know they didn't actually use it

00:16:38 --> 00:16:43
very much it was mostly just kind of

00:16:39 --> 00:16:46
sitting there

00:16:42 --> 00:16:47
and it was kind of sitting there and i

00:16:45 --> 00:16:48
noticed it was just kind of sitting

00:16:46 --> 00:16:52
there and

00:16:47 --> 00:16:55
so i started fooling around with it and

00:16:51 --> 00:16:56
nobody seemed to mind so i just kept

00:16:54 --> 00:16:59
doing that and

00:16:55 --> 00:17:02
i had a keyboard and like a monitor

00:16:58 --> 00:17:03
oh this is way before monitors were

00:17:01 --> 00:17:06
common

00:17:02 --> 00:17:08
so it was it was literally a a model 33

00:17:05 --> 00:17:11
teletype

00:17:07 --> 00:17:11
okay with a paper tape reader

00:17:11 --> 00:17:16
okay so the user interface wasn't very

00:17:13 --> 00:17:19
good yeah

00:17:15 --> 00:17:20
it was it was the first computer

00:17:18 --> 00:17:24
ever

00:17:19 --> 00:17:26
built with integrated circuits

00:17:23 --> 00:17:27
but by integrated circuits i mean that

00:17:25 --> 00:17:30
hey would have

00:17:26 --> 00:17:33
like 10 or 12 transistors

00:17:29 --> 00:17:34
on one piece of silicon right not the 10

00:17:32 --> 00:17:39
or 12

00:17:33 --> 00:17:42
billion that machines have today

00:17:38 --> 00:17:44
so what did that i mean feel like if you

00:17:41 --> 00:17:47
remember those

00:17:43 --> 00:17:48
i mean did you have kind of inklings of

00:17:46 --> 00:17:51
the

00:17:47 --> 00:17:53
magic of exponential kind of

00:17:50 --> 00:17:56
improvement of moore's law

00:17:52 --> 00:17:58
of the potential of the future that was

00:17:55 --> 00:17:58
at your fingertips kind of thing oh it

00:17:57 --> 00:18:01
was

00:17:57 --> 00:18:03
just a cool yeah it was just a toy

00:18:00 --> 00:18:04
ou know i had always liked building

00:18:02 --> 00:18:07
stuff

00:18:04 --> 00:18:09
but one of the problems with building

00:18:06 --> 00:18:11
stuff is that you need to have

00:18:08 --> 00:18:13
parts you know you need to have pieces

00:18:10 --> 00:18:16
of wood or wire

00:18:12 --> 00:18:17
or switches or stuff like that and those

00:18:15 --> 00:18:19
all cost money

00:18:16 --> 00:18:21
and here you could build you could build

00:18:18 --> 00:18:25
arbitrarily complicated things

00:18:20 --> 00:18:28
and i didn't need any physical materials

00:18:24 --> 00:18:29
um it required no money that's right

00:18:27 --> 00:18:32
it's a good way to put

00:18:28 --> 00:18:33
programming you're right it's uh if you

00:18:31 --> 00:18:37
love building things

00:18:32 --> 00:18:38
it uh okay so it you know completely

00:18:36 --> 00:18:40
accessible

00:18:37 --> 00:18:41
you don't need anything and anybody from

00:18:39 --> 00:18:42
anywhere could just build something

00:18:40 --> 00:18:45
really cool

00:18:41 --> 00:18:46
yeah yeah if you've got access to a

00:18:44 --> 00:18:50
computer you can

00:18:45 --> 00:18:54
build all kinds of crazy stuff

00:18:50 --> 00:18:54
um and

00:18:53 --> 00:19:03
you know and when you were somebody like

00:18:57 --> 00:19:06
me who had like really no money

00:19:02 --> 00:19:09
um and i mean i

00:19:05 --> 00:19:10
remember just lusting after being able

00:19:08 --> 00:19:13
to buy like

00:19:09 --> 00:19:13
a transistor

00:19:14 --> 00:19:21
um you know and when i would do

00:19:18 --> 00:19:23
sort of electronics kind of projects

00:19:20 --> 00:19:27
they were mostly made

00:19:22 --> 00:19:30
done by like dumpster diving for trash

00:19:26 --> 00:19:32
you know and you know one of my big

00:19:29 --> 00:19:35
hauls was

00:19:31 --> 00:19:36
uh discarded relay racks from the back

00:19:34 --> 00:19:38
of a

00:19:35 --> 00:19:40
the phone company switching center oh

00:19:37 --> 00:19:42
nice

00:19:39 --> 00:19:43
that was the big memorable treasure oh

00:19:41 --> 00:19:46
yeah yeah

00:19:42 --> 00:19:50
that was what do you use that for i i

00:19:45 --> 00:19:50
built a machine that played tic-tac-toe

00:19:50 --> 00:19:55
nice out of relays of course the thing

00:19:52 --> 00:19:59
that was really hard

00:19:54 --> 00:20:01
um was that all the relays required a

00:19:58 --> 00:20:03
specific voltage

00:20:00 --> 00:20:04
but getting a power supply that will

00:20:02 --> 00:20:07
would

00:20:03 --> 00:20:08
o that voltage was pretty hard and

00:20:06 --> 00:20:13
since i had a bunch of trashed

00:20:08 --> 00:20:17
television sets i had to

00:20:12 --> 00:20:18
um sort of cobble together something

00:20:16 --> 00:20:22
that was

00:20:17 --> 00:20:24
wrong but worked um

00:20:21 --> 00:20:27
so i was actually running these relays

00:20:23 --> 00:20:27
at 300 volts

00:20:26 --> 00:20:31
and and none of the electrical

00:20:29 --> 00:20:34
connections were

00:20:30 --> 00:20:37
like properly sealed off

00:20:33 --> 00:20:39
you survived that period of your life oh

00:20:36 --> 00:20:42
for so many reasons

00:20:38 --> 00:20:43
i mean you know

00:20:41 --> 00:20:45
you're

00:20:42 --> 00:20:46
you know it's pretty common for teenage

00:20:44 --> 00:20:49
eks to

00:20:45 --> 00:20:51
discover oh thermite that's real easy to

00:20:48 --> 00:20:53
make

00:20:50 --> 00:20:55
yeah well i'm glad you did but do you

00:20:52 --> 00:20:59
remember the

00:20:54 --> 00:21:02
do you remember what program in calgary

00:20:58 --> 00:21:04
that you wrote anything that stands out

00:21:01 --> 00:21:07
and what language

00:21:03 --> 00:21:10
well so mostly the

00:21:06 --> 00:21:15
anything of any size was

00:21:10 --> 00:21:15
sembly code um

00:21:14 --> 00:21:19
and actually before i learned assembly

00:21:17 --> 00:21:21
code there was this

00:21:18 --> 00:21:23
programming language on the pdp called

00:21:20 --> 00:21:26
focal five

00:21:22 --> 00:21:26
and focal five was kind of like a really

00:21:25 --> 00:21:30
stripped down

00:21:26 --> 00:21:33
fortran and

00:21:29 --> 00:21:35
i remember playing but you know building

00:21:32 --> 00:21:38
programs that did things like

00:21:34 --> 00:21:40
um play blackjack um

00:21:37 --> 00:21:44
[Music]

00:21:39 --> 00:21:45
or solitaire or for some reason or the

00:21:43 --> 00:21:47
things that

00:21:44 --> 00:21:48
i really liked were ones where they were

00:21:46 --> 00:21:52
just like

00:21:47 --> 00:21:55
plotting graphs so something with

00:21:51 --> 00:21:56
uh like a function or a data and then

00:21:54 --> 00:21:59
you'd plot it

00:21:55 --> 00:22:00
yeah yeah i did a bunches of those

00:21:58 --> 00:22:04
things and

00:21:59 --> 00:22:06
went ooh pretty pictures um

00:22:03 --> 00:22:07
and so this would like print out again

00:22:05 --> 00:22:10
o

00:22:06 --> 00:22:14
monitors right so it was like

00:22:09 --> 00:22:17
on a teletype yeah

00:22:13 --> 00:22:21
so using something that's kind of like a

00:22:16 --> 00:22:25
typewriter and then using those

00:22:20 --> 00:22:27
to plot functions so when i apologize to

00:22:24 --> 00:22:31
romanticize things

00:22:26 --> 00:22:34
but when did you first fall in love with

00:22:30 --> 00:22:35
programming you know what was the first

00:22:33 --> 00:22:37
programming language like it's a serious

00:22:34 --> 00:22:39
maybe software engineer where you

00:22:36 --> 00:22:42
thought this is a beautiful

00:22:38 --> 00:22:45
thing i guess i never really thought of

00:22:41 --> 00:22:47
any particular language as being like

00:22:44 --> 00:22:49
beautiful because it was never really

00:22:46 --> 00:22:52
about the language for me it was about

00:22:48 --> 00:22:55
what you could do with it

00:22:51 --> 00:22:56
um and you know even today

00:22:54 --> 00:22:58
ou know people try to get me into

00:22:55 --> 00:23:01
arguments about

00:22:57 --> 00:23:02
particular forms of syntax for this or

00:23:00 --> 00:23:05
that and i'm like

00:23:01 --> 00:23:05
who cares you know it's it's about what

00:23:04 --> 00:23:09
you can do

00:23:04 --> 00:23:13
not not not how you spell the word

00:23:08 --> 00:23:17
um and you know so back in those days i

00:23:12 --> 00:23:21
learned like pl one and fortran

00:23:16 --> 00:23:21
d cobalt and and you know by the time

00:23:20 --> 00:23:24
that

00:23:20 --> 00:23:25
people were willing to hire me to do

00:23:23 --> 00:23:29
stuff

00:23:24 --> 00:23:32
you know it was mostly assembly code and

00:23:28 --> 00:23:35
you know pvp assembly code and and

00:23:31 --> 00:23:35
fortran code and

00:23:34 --> 00:23:39
control data assembly code for like the

00:23:36 --> 00:23:44
cdc 6400 which was an

00:23:38 --> 00:23:46
early i guess super computer

00:23:43 --> 00:23:48
even though that super computer has less

00:23:45 --> 00:23:52
compute power than my phone

00:23:47 --> 00:23:55
by a lot and that was mostly

00:23:51 --> 00:23:57
like said fortran yeah world

00:23:54 --> 00:24:00
that said you've also showed

00:23:56 --> 00:24:03
appreciation for the greatest language

00:23:59 --> 00:24:05
um ever that i think everyone agrees is

00:24:02 --> 00:24:08
lisp

00:24:04 --> 00:24:11
um well lisp was definitely on my list

00:24:07 --> 00:24:15
of the greatest ones that have have um

00:24:10 --> 00:24:17
existed is that number one or i mean

00:24:14 --> 00:24:19
um are you i mean you know that you know

00:24:16 --> 00:24:21
the thing is that it's it that you you

00:24:18 --> 00:24:21
know

00:24:21 --> 00:24:26
i wouldn't put it number one now is it

00:24:23 --> 00:24:30
he parentheses what uh

00:24:25 --> 00:24:32
um what do you love what do you not love

00:24:29 --> 00:24:36
about lisp

00:24:31 --> 00:24:39
um well i guess the number one thing to

00:24:35 --> 00:24:42
not love about it is so freaking many

00:24:38 --> 00:24:45
parentheses yeah um on the

00:24:41 --> 00:24:47
love thing is you know out of

00:24:44 --> 00:24:49
those

00:24:46 --> 00:24:52
tons of parentheses you actually get an

00:24:48 --> 00:24:54
interesting language structure

00:24:51 --> 00:24:55
and i've always thought that there was a

00:24:53 --> 00:24:59
friendlier version of lisp

00:24:54 --> 00:25:00
hiding out there somewhere but i've

00:24:58 --> 00:25:03
never really

00:24:59 --> 00:25:04
spent much time thinking about thinking

00:25:02 --> 00:25:08
about it but

00:25:03 --> 00:25:11
you know so like like up the food chain

00:25:07 --> 00:25:15
for me um then from lisp is

00:25:10 --> 00:25:17
imula which a very small number of

00:25:14 --> 00:25:19
people have ever used

00:25:16 --> 00:25:20
but a lot of people i think he had a

00:25:18 --> 00:25:23
huge influence right

00:25:19 --> 00:25:26
yeah the programming but in the simula

00:25:22 --> 00:25:27
i apologize if i'm wrong on this but is

00:25:25 --> 00:25:28
that one of the first functional

00:25:26 --> 00:25:30
anguages

00:25:27 --> 00:25:32
um or no no it was it was it was the

00:25:29 --> 00:25:33
first object-oriented programming

00:25:31 --> 00:25:36
language

00:25:32 --> 00:25:39
got it it's really where object-oriented

00:25:35 --> 00:25:43
and languages sort of came together

00:25:38 --> 00:25:46
um and it was also the

00:25:42 --> 00:25:49
language where co routines first

00:25:45 --> 00:25:52
showed up as a part of the language

00:25:48 --> 00:25:54
so you could have a programming style

00:25:51 --> 00:25:56
that was

00:25:53 --> 00:25:58
you could think of it as multiple uh

00:25:56 --> 00:26:01
sort of multi-threaded

00:25:57 --> 00:26:04
with a lot of parallel parallelism

00:26:00 --> 00:26:06
really there's ideas of parallelism in

00:26:03 --> 00:26:09
there yeah

00:26:05 --> 00:26:13
so that was that was back you know

00:26:08 --> 00:26:16
so the first stimulus spec was simula 67

00:26:12 --> 00:26:20
like 1967. yeah

00:26:15 --> 00:26:21
wow so it had it it had co-routines

00:26:19 --> 00:26:24
which are

00:26:20 --> 00:26:25
almost threads the the thing about co

00:26:23 --> 00:26:29
routines is that they don't have

00:26:24 --> 00:26:31
true concurrency so you can get away

00:26:28 --> 00:26:34
without

00:26:30 --> 00:26:38
um really complex locking you can't

00:26:33 --> 00:26:41
usably do co-routines on a

00:26:37 --> 00:26:42
on the multi-core machine or if you try

00:26:40 --> 00:26:44
to do core

00:26:41 --> 00:26:45
code routines on the multi-core mute

00:26:43 --> 00:26:47
machine you

00:26:44 --> 00:26:48
don't actually get to use the multiple

00:26:46 --> 00:26:51
cores

00:26:47 --> 00:26:52
um either that or you you know because

00:26:50 --> 00:26:56
you start

00:26:51 --> 00:26:58
hen having to get into the universe of

00:26:55 --> 00:26:59
you know semaphores and locks and things

00:26:57 --> 00:27:03
like that

00:26:58 --> 00:27:07
um but you know in terms of the

00:27:02 --> 00:27:10
style of programming you could

00:27:06 --> 00:27:10
write code and think think of it as

00:27:09 --> 00:27:14
being

00:27:09 --> 00:27:18
multi-threaded the mental model

00:27:13 --> 00:27:20
was very much a multi-threaded one and

00:27:17 --> 00:27:23
all kinds of problems you could approach

00:27:19 --> 00:27:23
very differently

00:27:22 --> 00:27:30
to to return to uh the world of lisp for

00:27:26 --> 00:27:33
a brief moment you uh at cmu you've

00:27:29 --> 00:27:35
you uh wrote a version of emacs

00:27:32 --> 00:27:36
that i think was very impactful on the

00:27:34 --> 00:27:41
history of emacs

00:27:36 --> 00:27:45
um what was your motivation

00:27:40 --> 00:27:52
for for doing so at that time

00:27:44 --> 00:27:55
so that was in like 85 or 86.

00:27:51 --> 00:27:58
um i had been using

00:27:54 --> 00:28:02
unix for a few years

00:27:57 --> 00:28:06
and um most of the editing was

00:28:01 --> 00:28:10
this this tool called edie um

00:28:05 --> 00:28:14
which was sort of an ancestor of vi

00:28:09 --> 00:28:16
and is it a pretty good editor

00:28:13 --> 00:28:17
not a good editor well if if what you're

00:28:15 --> 00:28:21
using

00:28:16 --> 00:28:24
um if your input device is a teletype

00:28:20 --> 00:28:26
it's pretty good yeah it's certainly

00:28:23 --> 00:28:29
more humane than tico

00:28:25 --> 00:28:29
which was kind of the the common thing

00:28:28 --> 00:28:33
in

00:28:28 --> 00:28:37
a lot of um the dec universe at the time

00:28:32 --> 00:28:40
tico is both tk is that the tico t-e-c-o

00:28:36 --> 00:28:41
the text editor and corrector corrector

00:28:40 --> 00:28:45
huh

00:28:40 --> 00:28:48
so many features um

00:28:44 --> 00:28:51
and the original emacs

00:28:47 --> 00:28:53
came out as so emac stands for editor

00:28:50 --> 00:28:57
macros

00:28:52 --> 00:29:00
and tico had a way of writing macros

00:28:56 --> 00:29:04
and so the original um

00:28:59 --> 00:29:08
emacs from mit sort of started out as

00:29:03 --> 00:29:10
a collection of macros for tico

00:29:07 --> 00:29:11
but then you know you know the the sort

00:29:09 --> 00:29:15
of emac

00:29:10 --> 00:29:19
style got got popular originally at

00:29:14 --> 00:29:22
mit and then people

00:29:18 --> 00:29:25
did a few other implementations of emacs

00:29:21 --> 00:29:27
that were you know the the the code base

00:29:24 --> 00:29:29
was entirely different but it was sort

00:29:26 --> 00:29:32
of the philosophical style

00:29:28 --> 00:29:34
of the original emacs what was the

00:29:31 --> 00:29:37
philosophy of emacs and by the way were

00:29:34 --> 00:29:39
all the implementations always in c

00:29:36 --> 00:29:40
and then no and how does lisp fit into

00:29:38 --> 00:29:43
the picture

00:29:39 --> 00:29:46
no so so the very first emacs was

00:29:42 --> 00:29:47
written as a bunch of macros for the

00:29:45 --> 00:29:50
tico text editor

00:29:46 --> 00:29:54
wow this is so interesting and the

00:29:49 --> 00:29:57
the macro language for tico

00:29:53 --> 00:29:58
was probably the most ridiculously

00:29:56 --> 00:30:01
obscure

00:29:57 --> 00:30:02
format you know if you just look at a

00:30:00 --> 00:30:05
tico program on a

00:30:01 --> 00:30:06
page you think it was just random

00:30:04 --> 00:30:10
characters

00:30:05 --> 00:30:13
it really looks like just line noise

00:30:09 --> 00:30:14
just kind of like latex or something oh

00:30:12 --> 00:30:16
worse

00:30:13 --> 00:30:18
way worse than the tick way way worse

00:30:15 --> 00:30:21
than latex

00:30:17 --> 00:30:25
um but you know if you use tico a lot

00:30:20 --> 00:30:28
which i did the the tico was completely

00:30:24 --> 00:30:32
optimized for touch typing

00:30:27 --> 00:30:36
at high speed um

00:30:31 --> 00:30:38
so there were no two character commands

00:30:35 --> 00:30:40
well there were a few but mostly they

00:30:37 --> 00:30:42
were just one character so every

00:30:39 --> 00:30:43
character on the keyboard was a separate

00:30:41 --> 00:30:46
command

00:30:42 --> 00:30:48
um and actually every character on the

00:30:45 --> 00:30:51
keyboard was usually two or three

00:30:47 --> 00:30:53
commands because you know you hit shift

00:30:50 --> 00:30:54
and control and all of those things you

00:30:52 --> 00:30:58
know it's just a way of

00:30:53 --> 00:31:02
very tightly encoding it and

00:30:57 --> 00:31:05
mostly what emacs did was it made that

00:31:01 --> 00:31:10
visual right so

00:31:04 --> 00:31:13
ne way to think of tico is use emax

00:31:09 --> 00:31:13
with your eyes closed

00:31:14 --> 00:31:19
where you have to maintain a mental

00:31:16 --> 00:31:20
model of

00:31:18 --> 00:31:22
you know sort of a mental image of your

00:31:19 --> 00:31:25
document you have to go

00:31:21 --> 00:31:28
kay so the the cursor is

00:31:24 --> 00:31:31
between the a and the e

00:31:27 --> 00:31:32
and i want to exchange those so i do

00:31:30 --> 00:31:35
these

00:31:31 --> 00:31:39
things right so it almost it is

00:31:34 --> 00:31:41
almost exactly the emax command set

00:31:38 --> 00:31:43
well it's roughly approximate roughly

00:31:40 --> 00:31:47
the same as emacs command set

00:31:42 --> 00:31:50
but using emacs with your eyes closed

00:31:46 --> 00:31:52
um so what

00:31:49 --> 00:31:54
emacs you know part of what emacs added

00:31:52 --> 00:31:57
to the whole thing was

00:31:53 --> 00:31:59
being able to visually see what you

00:31:56 --> 00:32:05
were editing

00:31:58 --> 00:32:08
um in a form that matched your document

00:32:04 --> 00:32:11
um and you know a lot of things

00:32:07 --> 00:32:14
changed in the in the command set it

00:32:10 --> 00:32:15
um you know because it was programmable

00:32:13 --> 00:32:17
it was

00:32:14 --> 00:32:19
really flexible you could add new

00:32:16 --> 00:32:23
commands for all kinds of things

00:32:18 --> 00:32:26
and then people rewrote emacs

00:32:22 --> 00:32:26
like multiple times in lisp there was

00:32:25 --> 00:32:29
one done at

00:32:25 --> 00:32:30
mit for the lisp machine there was one

00:32:28 --> 00:32:34
done

00:32:29 --> 00:32:38
for multix and one summer i got a

00:32:33 --> 00:32:41
summer job to work on the

00:32:37 --> 00:32:43
pascal compiler for multix

00:32:40 --> 00:32:45
and that was actually the first time i

00:32:42 --> 00:32:49
used emacs

00:32:44 --> 00:32:51
and and and so to write the compilers

00:32:48 --> 00:32:53
you've worked in compilers too it's yeah

00:32:50 --> 00:32:56
that's fascinating

00:32:52 --> 00:32:58
yeah so i did a lot of work you know

00:32:55 --> 00:33:00
i mean i spent like like a really

00:32:57 --> 00:33:04
intense three months

00:32:59 --> 00:33:07
working on this pascal compiler um

00:33:03 --> 00:33:10
basically living in emacs and it was

00:33:06 --> 00:33:12
the one written in mac list by

00:33:09 --> 00:33:15
bernie greenberg

00:33:11 --> 00:33:18
and i thought wow this is a just a way

00:33:14 --> 00:33:22
better way to do editing

00:33:17 --> 00:33:27
um and then i got back to cmu

00:33:21 --> 00:33:30
where we had kind of one of everything

00:33:26 --> 00:33:32
and two of a bunch of things and four of

00:33:29 --> 00:33:35
a few things and

00:33:31 --> 00:33:37
um since i mostly worked in the unix

00:33:34 --> 00:33:40
universe

00:33:36 --> 00:33:43
and unix didn't have an e-max i decided

00:33:39 --> 00:33:46
that i needed to fix that problem

00:33:42 --> 00:33:48
so i so i wrote this this implementation

00:33:45 --> 00:33:50
of emacs in c

00:33:47 --> 00:33:53
because at the time c was really the

00:33:49 --> 00:33:56
only language that worked on

00:33:52 --> 00:33:58
uh on unix

00:33:55 --> 00:34:00
um and you were comfortable with c as

00:33:57 --> 00:34:02
well oh yeah at that point

00:33:59 --> 00:34:05
yeah at that time i had done a lot of c

00:34:01 --> 00:34:10
oding that this was in like 86.

00:34:04 --> 00:34:10
um and

00:34:09 --> 00:34:16
you know it was running well enough to

00:34:13 --> 00:34:17
be used for me to use it to edit itself

00:34:15 --> 00:34:21
within a

00:34:16 --> 00:34:24
month or two and um then it kind of

00:34:20 --> 00:34:25
took over the university and and it

00:34:23 --> 00:34:27
spread

00:34:24 --> 00:34:29
and then it died yeah and then it went

00:34:26 --> 00:34:32
outside the

00:34:28 --> 00:34:35
and largely because unix kind of

00:34:31 --> 00:34:39
took over the research community

00:34:34 --> 00:34:42
on the on the on the arpanet

00:34:38 --> 00:34:44
hen and emacs was

00:34:41 --> 00:34:46
kind of the best editor out there it

00:34:43 --> 00:34:48
kind of took over and

00:34:45 --> 00:34:51
there was a actually a brief period

00:34:47 --> 00:34:54
where

00:34:50 --> 00:34:59
i actually had login ids on every

00:34:53 --> 00:34:59
non-military host on the on the arpanet

00:34:58 --> 00:35:04
you know because people would say oh can

00:35:00 --> 00:35:10
we install this and and i'd like

00:35:03 --> 00:35:12
well yeah but you'll need some help

00:35:09 --> 00:35:14
uh the days when security wasn't uh when

00:35:11 --> 00:35:18
obody cared nobody cared

00:35:13 --> 00:35:21
yeah we can ask briefly

00:35:17 --> 00:35:22
what were those early days of arpanet

00:35:20 --> 00:35:25
and the internet

00:35:21 --> 00:35:28
like what was uh

00:35:24 --> 00:35:29
what i mean did you uh again sorry for

00:35:27 --> 00:35:32
the silly question

00:35:28 --> 00:35:35
but could you have possibly imagined

00:35:31 --> 00:35:37
that uh the the internet would look like

00:35:34 --> 00:35:41
what it is today

00:35:36 --> 00:35:43
ou know some of it is remarkably

00:35:40 --> 00:35:46
unchanged

00:35:42 --> 00:35:48
so like one of the things that i noticed

00:35:45 --> 00:35:51
really early on

00:35:47 --> 00:35:54
um at you know when i was at

00:35:50 --> 00:35:58
carnegie mellon was that

00:35:53 --> 00:36:01
a lot of social life

00:35:57 --> 00:36:04
became centered around the arpanet

00:36:00 --> 00:36:04
so things like you know between email

00:36:03 --> 00:36:08
and

00:36:03 --> 00:36:09
text messaging because the

00:36:07 --> 00:36:12
you know text messaging was a part of

00:36:08 --> 00:36:14
the arpanet really early on

00:36:11 --> 00:36:16
there were no cell phones but you know

00:36:13 --> 00:36:17
you're sitting at a terminal and you're

00:36:15 --> 00:36:20
typing stuff

00:36:16 --> 00:36:21
and essentially email or like what what

00:36:19 --> 00:36:24
is well just like

00:36:20 --> 00:36:28
a one-line message right so so so

00:36:23 --> 00:36:30
h cool so like chat like chat yeah

00:36:27 --> 00:36:32
right so it's like like sending a

00:36:29 --> 00:36:36
one-line message to somebody right

00:36:31 --> 00:36:39
and and and so pretty much

00:36:35 --> 00:36:43
everything from you know

00:36:38 --> 00:36:44
arranging lunch to going out on dates

00:36:42 --> 00:36:49
you know

00:36:43 --> 00:36:52
it was all like driven by social media

00:36:48 --> 00:36:55
so you know right in the in the in

00:36:51 --> 00:36:59
the 80s easier than phone calls yeah

00:36:54 --> 00:37:02
you know and my life had gotten to where

00:36:58 --> 00:37:05
you know i was you know

00:37:02 --> 00:37:06
living on social media you know from

00:37:04 --> 00:37:10
like

00:37:05 --> 00:37:13
the early mid 80s

00:37:09 --> 00:37:15
um and

00:37:12 --> 00:37:17
so when when it sort of transformed

00:37:14 --> 00:37:19
into the internet

00:37:16 --> 00:37:20
and social media explodes i was kind of

00:37:18 --> 00:37:23
like

00:37:19 --> 00:37:24
what's the big deal it's just a scale

00:37:22 --> 00:37:27
thing

00:37:23 --> 00:37:27
it's it's right the the scale thing is

00:37:26 --> 00:37:31
just

00:37:26 --> 00:37:34
astonishing yeah um but the fundamentals

00:37:30 --> 00:37:37
um in some ways the fundamentals have

00:37:33 --> 00:37:40
hardly changed and

00:37:36 --> 00:37:42
you know the the technologies behind the

00:37:39 --> 00:37:44
networking have changed

00:37:41 --> 00:37:48
significantly the

00:37:43 --> 00:37:50
you know the the the watershed moment of

00:37:47 --> 00:37:52
you know going from the arpanet to the

00:37:49 --> 00:37:56
internet

00:37:51 --> 00:38:00
um and then people starting to just

00:37:55 --> 00:38:03
scale and scale and scale i mean the

00:37:59 --> 00:38:04
the the scaling that happened in the

00:38:02 --> 00:38:08
arly 90s

00:38:03 --> 00:38:11
and the way that

00:38:07 --> 00:38:13
so many vested interests fought the

00:38:10 --> 00:38:16
internet

00:38:12 --> 00:38:17
oh who oh interesting what was the oh

00:38:15 --> 00:38:20
because you can't really control the

00:38:16 --> 00:38:24
internet yeah

00:38:19 --> 00:38:27
so so so fundamentally the

00:38:23 --> 00:38:28
you know the cable tv companies and

00:38:26 --> 00:38:33
broadcasters

00:38:27 --> 00:38:36
and phone companies um

00:38:32 --> 00:38:36
you know at the deepest fibers of their

00:38:35 --> 00:38:40
being

00:38:35 --> 00:38:44
they hated the internet but

00:38:39 --> 00:38:44
it was often kind of a funny thing

00:38:44 --> 00:38:49
because um

00:38:49 --> 00:38:54
you know so so so think of a cable

00:38:51 --> 00:38:56
company

00:38:53 --> 00:38:58
right most of the employees of the cable

00:38:55 --> 00:39:02
company

00:38:57 --> 00:39:05
their job is getting

00:39:01 --> 00:39:08
tv shows movies whatever

00:39:04 --> 00:39:09
out to their customers they view their

00:39:07 --> 00:39:14
business

00:39:08 --> 00:39:18
as serving their customers

00:39:13 --> 00:39:21
um but as you climb up the hierarchy

00:39:17 --> 00:39:25
in the in the cable companies

00:39:20 --> 00:39:29
that view shifts because

00:39:24 --> 00:39:32
um really

00:39:28 --> 00:39:35
the business of the cable companies

00:39:31 --> 00:39:37
that had always been selling eyeballs to

00:39:34 --> 00:39:41
advertisers

00:39:36 --> 00:39:41
right um

00:39:40 --> 00:39:48
and you know that view of

00:39:43 --> 00:39:50
like a cable company didn't really

00:39:47 --> 00:39:51
dawn on most people who worked at the

00:39:49 --> 00:39:54
cable companies

00:39:50 --> 00:39:56
but i mean you know we you know i had

00:39:53 --> 00:39:58
various dust-ups with

00:39:56 --> 00:40:01
various cable companies where you could

00:39:57 --> 00:40:02
see you know in the stratified layers of

00:40:00 --> 00:40:06
the corporation that

00:40:02 --> 00:40:09
this this this this this view of

00:40:05 --> 00:40:09
you know the reason that you have you

00:40:08 --> 00:40:13
know

00:40:08 --> 00:40:15
cable tv is to capture eyeballs

00:40:12 --> 00:40:17
you know there they didn't see it that

00:40:14 --> 00:40:19
way well so so the people who

00:40:16 --> 00:40:20
the most the people who worked at the

00:40:18 --> 00:40:23
phone company

00:40:19 --> 00:40:25
are at the cable companies their view

00:40:22 --> 00:40:29
as that their

00:40:24 --> 00:40:30
job was getting delightful content

00:40:28 --> 00:40:32
out to their customers

00:40:29 --> 00:40:34
and their customers would pay for them

00:40:31 --> 00:40:37
would pay for that

00:40:33 --> 00:40:38
higher up they viewed this as as a way

00:40:36 --> 00:40:42
of

00:40:38 --> 00:40:46
attracting eyeballs to them

00:40:42 --> 00:40:48
and and then what they were really doing

00:40:45 --> 00:40:51
was selling

00:40:47 --> 00:40:52
the eyeballs that were glued to their

00:40:50 --> 00:40:54
content

00:40:51 --> 00:40:55
o the advertising to the advertisers

00:40:53 --> 00:40:57
yeah

00:40:54 --> 00:40:58
and so the internet was a competition in

00:40:56 --> 00:41:02
that sense right

00:40:57 --> 00:41:05
and and and and they were right well

00:41:01 --> 00:41:08
yeah um i mean there was one

00:41:04 --> 00:41:11
proposal that we sent the

00:41:07 --> 00:41:12
we one detailed proposal that that

00:41:10 --> 00:41:16
we

00:41:11 --> 00:41:18
um wrote up you know back at that sun

00:41:15 --> 00:41:20
in the in the early 90s that was

00:41:17 --> 00:41:22
essentially like

00:41:19 --> 00:41:23
look anybody you know with it with

00:41:21 --> 00:41:26
internet technologies

00:41:22 --> 00:41:29
anybody can become provider

00:41:25 --> 00:41:34
of of content so you know

00:41:28 --> 00:41:37
you could be distributing home movies to

00:41:33 --> 00:41:39
your parents

00:41:36 --> 00:41:40
or your cousins or your who are anywhere

00:41:38 --> 00:41:42
lse right so

00:41:39 --> 00:41:44
anybody can become a publisher wow you

00:41:41 --> 00:41:47
were thinking about that already yeah

00:41:43 --> 00:41:49
that was like yeah that was

00:41:46 --> 00:41:50
that that was like in the in the early

00:41:48 --> 00:41:53
90s yeah

00:41:49 --> 00:41:56
and we thought this would be great

00:41:52 --> 00:41:58
you could you know and the kind of

00:41:55 --> 00:41:58
content we were thinking about at the

00:41:57 --> 00:42:03
time was

00:41:57 --> 00:42:07
like you know home movies kids essays

00:42:02 --> 00:42:10
um you know stuff from

00:42:06 --> 00:42:11
like grocery stores or you know you know

00:42:09 --> 00:42:13
that

00:42:10 --> 00:42:14
or or a restaurant that they could

00:42:12 --> 00:42:18
actually

00:42:13 --> 00:42:21
like start sending information about

00:42:17 --> 00:42:24
and um

00:42:20 --> 00:42:26
that's brilliant and and the the the the

00:42:23 --> 00:42:31
reaction of the cable companies was

00:42:25 --> 00:42:35
like no because

00:42:30 --> 00:42:38
then we're out of business

00:42:34 --> 00:42:39
what is it about companies that because

00:42:37 --> 00:42:40
they could have just

00:42:38 --> 00:42:42
hey could have been ahead of that wave

00:42:40 --> 00:42:44
they could have listened to that

00:42:41 --> 00:42:46
and they could have they they didn't see

00:42:43 --> 00:42:48
a path to revenue

00:42:45 --> 00:42:50
you know there's there's somewhere in

00:42:47 --> 00:42:53
there there's a lesson for like

00:42:49 --> 00:42:56
big companies right like to to listen

00:42:52 --> 00:42:59
to to try to anticipate the the renegade

00:42:56 --> 00:43:01
the out there out of the box

00:42:58 --> 00:43:02
people like yourself in the early days

00:43:00 --> 00:43:05
writing proposals about

00:43:02 --> 00:43:07
what this could possibly be well and

00:43:04 --> 00:43:09
that you know that you know it wasn't

00:43:06 --> 00:43:12
you know if you're in a in a position

00:43:08 --> 00:43:15
where you're making

00:43:11 --> 00:43:17
truckloads of money off of a particular

00:43:14 --> 00:43:21
business model

00:43:16 --> 00:43:24
um you you know the

00:43:20 --> 00:43:26
the the the whole um

00:43:23 --> 00:43:28
thought of like you know leaping the

00:43:25 --> 00:43:30
chasm

00:43:27 --> 00:43:32
right you know you know you can see oh

00:43:29 --> 00:43:36
new models

00:43:31 --> 00:43:39
that are more effective are emerging

00:43:35 --> 00:43:42
right so like digital cameras versus

00:43:38 --> 00:43:46
film cameras

00:43:41 --> 00:43:48
um you know i mean why take the leap

00:43:45 --> 00:43:49
because you're making

00:43:47 --> 00:43:53
so much money

00:43:48 --> 00:43:58
off of film and

00:43:52 --> 00:44:00
um you know in my past at sun

00:43:57 --> 00:44:01
one of our big customers was kodak and i

00:43:59 --> 00:44:03
ended up

00:44:00 --> 00:44:05
interacting with folks from kodak quite

00:44:02 --> 00:44:08
a lot and they actually had a

00:44:04 --> 00:44:11
big um

00:44:07 --> 00:44:13
digital camera research and you know

00:44:10 --> 00:44:16
digital imaging business

00:44:12 --> 00:44:20
or b development group

00:44:15 --> 00:44:22
and they knew

00:44:19 --> 00:44:24
that that you know you you know you just

00:44:22 --> 00:44:27
look at the

00:44:23 --> 00:44:31
trend lines and you look at um

00:44:26 --> 00:44:34
you know the emerging quality of

00:44:30 --> 00:44:37
of these you know digital cameras

00:44:33 --> 00:44:38
and you know you can just plot it on the

00:44:36 --> 00:44:41
graph

00:44:37 --> 00:44:44
you know and it's like you know sure

00:44:40 --> 00:44:44
film is better today

00:44:44 --> 00:44:52
but you know

00:44:47 --> 00:44:55
digital is is is is improving like this

00:44:51 --> 00:44:57
the lines are going to cross and and you

00:44:54 --> 00:44:59
know the point at which the lines cross

00:44:56 --> 00:45:01
is going to be a collapse in their

00:44:58 --> 00:45:05
business

00:45:00 --> 00:45:08
and they could see that

00:45:04 --> 00:45:10
right they absolutely knew that the

00:45:07 --> 00:45:13
problem is that you know

00:45:09 --> 00:45:15
up to the point where they hit the wall

00:45:12 --> 00:45:16
they were making truckloads of money

00:45:14 --> 00:45:22
eah

00:45:15 --> 00:45:22
right and when they did the math

00:45:22 --> 00:45:27
um it never started to make sense for

00:45:25 --> 00:45:31
them to

00:45:26 --> 00:45:32
kind of lead the charge and

00:45:30 --> 00:45:35
part of the issues for a lot of

00:45:31 --> 00:45:38
companies for this kind of stuff

00:45:34 --> 00:45:40
is that um you know if you're going to

00:45:37 --> 00:45:41
leap over a chasm like that like like

00:45:39 --> 00:45:46
with

00:45:40 --> 00:45:48
kodak going from from film to digital

00:45:45 --> 00:45:50
that's a transition that's going to take

00:45:47 --> 00:45:52
a while

00:45:49 --> 00:45:54
right we have we had fights like this

00:45:51 --> 00:45:56
with people over like smart carts

00:45:53 --> 00:45:58
the smart cards fights were just

00:45:56 --> 00:46:00
ludicrous

00:45:57 --> 00:46:01
but that's where visionary leadership

00:45:59 --> 00:46:03
comes in right yeah somebody needs to

00:46:00 --> 00:46:06
roll in and say

00:46:02 --> 00:46:08
then take to take the leap well it's

00:46:05 --> 00:46:10
partly take the leap but it's also

00:46:07 --> 00:46:14
partly take the hit

00:46:09 --> 00:46:17
right so so so so you can

00:46:13 --> 00:46:19
draw all the graphs you want that show

00:46:16 --> 00:46:20
that you know if we leap from here

00:46:18 --> 00:46:22
you know you know the you know on our

00:46:19 --> 00:46:23
present trajectory we're doing this and

00:46:21 --> 00:46:27
there's a cliff

00:46:22 --> 00:46:30
if we um force ourselves into it into a

00:46:26 --> 00:46:34
transition and we proactively do that

00:46:29 --> 00:46:37
we can be on the next wave

00:46:33 --> 00:46:39
but there will be a period when we're in

00:46:36 --> 00:46:39
a trough

00:46:39 --> 00:46:47
and pretty much always there ends up

00:46:42 --> 00:46:51
being a trough as you leave the chasm

00:46:46 --> 00:46:55
but the way that public companies work

00:46:50 --> 00:46:58
on this planet they're reporting

00:46:54 --> 00:46:59
every quarter and the one thing that a

00:46:57 --> 00:47:02
ceo

00:46:58 --> 00:47:05
must never do

00:47:01 --> 00:47:07
is take a big hit take a big hit

00:47:04 --> 00:47:10
you know over some some quarter and and

00:47:06 --> 00:47:13
many of these transitions

00:47:09 --> 00:47:17
involve a big hit for a

00:47:12 --> 00:47:18
period of time you know one two three

00:47:16 --> 00:47:21
quarters

00:47:17 --> 00:47:25
and so you get

00:47:20 --> 00:47:28
some companies and you know like

00:47:24 --> 00:47:29
tesla and amazon are are really good

00:47:27 --> 00:47:33
examples

00:47:28 --> 00:47:35
of companies that take huge hits

00:47:32 --> 00:47:37
but they have the luxury of being able

00:47:34 --> 00:47:39
to ignore the stock market for a little

00:47:36 --> 00:47:42
while

00:47:38 --> 00:47:46
and that's not so true today

00:47:41 --> 00:47:49
really but you know in the early days of

00:47:45 --> 00:47:52
both of those companies um

00:47:48 --> 00:47:54
you know like like like like like they

00:47:51 --> 00:47:57
both did this thing of

00:47:53 --> 00:47:58
you know i don't care about the

00:47:56 --> 00:48:00
quarterly reports

00:47:57 --> 00:48:02
i care about how many how many happy

00:47:59 --> 00:48:05
customers we have

00:48:01 --> 00:48:07
yeah right and having as many happy

00:48:04 --> 00:48:10
customers as possible can

00:48:06 --> 00:48:12
often be um

00:48:09 --> 00:48:14
an enemy of the bottom line yeah so how

00:48:11 --> 00:48:15
do they make that work i mean

00:48:13 --> 00:48:17
amazon operated in the negative for a

00:48:14 --> 00:48:18
long time it's like investing into the

00:48:16 --> 00:48:21
future

00:48:17 --> 00:48:24
right but you know you know so

00:48:20 --> 00:48:26
amazon and google and tesla and facebook

00:48:23 --> 00:48:30
a lot of those had

00:48:25 --> 00:48:33
what it what amounted to patient money

00:48:29 --> 00:48:35
um often because the there's there's

00:48:32 --> 00:48:39
like a charismatic

00:48:34 --> 00:48:42
entral figure who has a really large

00:48:38 --> 00:48:46
block of stock

00:48:41 --> 00:48:49
and they can just make it so

00:48:45 --> 00:48:51
what uh on that topic just maybe it's

00:48:48 --> 00:48:52
a little small tangent but uh

00:48:50 --> 00:48:54
you've gotten the chance to work with

00:48:51 --> 00:48:56
some pretty big leaders

00:48:53 --> 00:48:57
what are your thoughts about on tesla

00:48:55 --> 00:49:01
side elon musk

00:48:56 --> 00:49:03
leadership on the amazon side jeff bezos

00:49:00 --> 00:49:04
all of these folks with large amounts of

00:49:02 --> 00:49:07
stock and vision

00:49:03 --> 00:49:09
in their company i mean they're founders

00:49:06 --> 00:49:11
yeah either

00:49:08 --> 00:49:12
the complete founders are like early on

00:49:10 --> 00:49:15
folks

00:49:11 --> 00:49:18
and uh they're they amazon have taken

00:49:14 --> 00:49:21
leave a lot of leaps uh and

00:49:17 --> 00:49:22
you know uh that probably at the time

00:49:20 --> 00:49:25
people would criticize

00:49:21 --> 00:49:29
as like what is this bookstore thing

00:49:24 --> 00:49:33
why yeah and and

00:49:28 --> 00:49:37
you know bezos had a vision and

00:49:32 --> 00:49:40
he had the ability to just follow it

00:49:36 --> 00:49:42
lots of people have visions and you know

00:49:39 --> 00:49:44
the average vision is completely idiotic

00:49:41 --> 00:49:48
and you crash and burn

00:49:43 --> 00:49:52
um you know the the silicon valley

00:49:47 --> 00:49:54
um crash and burn rate is pretty high

00:49:51 --> 00:49:55
um and they're not they don't

00:49:53 --> 00:49:57
necessarily crash and burn because they

00:49:54 --> 00:50:00
were dumb ideas but

00:49:56 --> 00:50:03
you know often it's it's just timing um

00:49:59 --> 00:50:04
timing and luck and you know you take

00:50:02 --> 00:50:08
companies like

00:50:04 --> 00:50:11
like tesla um

00:50:07 --> 00:50:13
and and and and and really you know the

00:50:10 --> 00:50:16
original tesla

00:50:12 --> 00:50:20
um you know sort of pre

00:50:15 --> 00:50:23
um elon

00:50:19 --> 00:50:27
was kind of doing sort of okay

00:50:22 --> 00:50:30
but but but he just drove them

00:50:26 --> 00:50:33
and because he had a

00:50:29 --> 00:50:35
really strong vision you know he would

00:50:32 --> 00:50:38
make calls

00:50:34 --> 00:50:42
that were always you know or

00:50:37 --> 00:50:45
well mostly pretty good i mean the model

00:50:41 --> 00:50:47
x was kind of a goofball thing to do

00:50:44 --> 00:50:49
but he did it boldly anyway like there's

00:50:46 --> 00:50:51
o many people

00:50:48 --> 00:50:53
that just said like there's so many

00:50:50 --> 00:50:55
people that oppose them on

00:50:52 --> 00:50:56
the falcon one door like the doors yeah

00:50:54 --> 00:50:59
from the engineering perspective

00:50:55 --> 00:51:00
those doors are ridiculous it's like

00:50:58 --> 00:51:01
yeah they're they are a complete

00:50:59 --> 00:51:04
travesty

00:51:00 --> 00:51:05
but but they're but they're exactly the

00:51:03 --> 00:51:07
symbol

00:51:04 --> 00:51:09
of what great leadership is which is

00:51:06 --> 00:51:09
like you have a vision and you just go

00:51:08 --> 00:51:11
like

00:51:08 --> 00:51:14
if you're gonna do something stupid make

00:51:10 --> 00:51:17
it really stupid yeah and go all in

00:51:13 --> 00:51:21
yeah yeah and and

00:51:16 --> 00:51:24
you know to to must credit he's a

00:51:20 --> 00:51:26
really sharp guy so

00:51:23 --> 00:51:27
going back in time a little bit to steve

00:51:25 --> 00:51:29
jobs

00:51:26 --> 00:51:31
you know steve jobs was a similar sort

00:51:28 --> 00:51:33
of character who had

00:51:30 --> 00:51:35
a strong vision and was really really

00:51:32 --> 00:51:36
smart

00:51:34 --> 00:51:40
and you you know and he wasn't smart

00:51:35 --> 00:51:42
about the technology parts of things

00:51:39 --> 00:51:43
but but sort of he he was really sharp

00:51:41 --> 00:51:46
about

00:51:42 --> 00:51:50
he the the sort of

00:51:45 --> 00:51:53
human relationship between you know the

00:51:49 --> 00:51:57
relationship between humans and objects

00:51:52 --> 00:52:01
um and but

00:51:56 --> 00:52:03
he was a jerk you know

00:52:00 --> 00:52:06
right can we just linger on that a

00:52:02 --> 00:52:09
little bit like people say he's a jerk

00:52:05 --> 00:52:12
um is that a feature or a bug well

00:52:08 --> 00:52:14
that's that's that's the question right

00:52:11 --> 00:52:17
so you take people like

00:52:13 --> 00:52:20
steve um who was

00:52:16 --> 00:52:24
really hard on people and and the

00:52:19 --> 00:52:26
and so the question is was he really was

00:52:23 --> 00:52:29
he needlessly hard on people

00:52:25 --> 00:52:33
or was he just making people

00:52:28 --> 00:52:37
reach to

00:52:32 --> 00:52:40
meet his vision and

00:52:36 --> 00:52:44
you could kind of spin it either way

00:52:39 --> 00:52:47
um well the results tell a story

00:52:43 --> 00:52:48
ou know he's uh he through whatever

00:52:46 --> 00:52:50
jerk ways he had

00:52:47 --> 00:52:52
he made people often do the best work of

00:52:49 --> 00:52:55
their life

00:52:51 --> 00:52:57
yeah yeah and that was absolutely true

00:52:54 --> 00:52:59
and you know i interviewed with him

00:52:56 --> 00:53:03
several times

00:52:58 --> 00:53:07
um i did you know various

00:53:02 --> 00:53:09
negotiations with him and

00:53:06 --> 00:53:09
um

00:53:09 --> 00:53:17
even though kind of

00:53:13 --> 00:53:19
personally i liked him i could never

00:53:16 --> 00:53:23
work for him

00:53:18 --> 00:53:25
why do you think uh it that what

00:53:22 --> 00:53:28
can you put into words the kind of

00:53:24 --> 00:53:30
tension that you feel would be

00:53:28 --> 00:53:33
um destructive as opposed to

00:53:29 --> 00:53:33
constructive

00:53:32 --> 00:53:40
oh he he he'd yell at people he'd call

00:53:36 --> 00:53:43
them names

00:53:39 --> 00:53:45
and you don't like that no no i don't i

00:53:42 --> 00:53:49
don't think you need to do that

00:53:44 --> 00:53:49
yeah um and

00:53:50 --> 00:53:55
you know he you know i think you know

00:53:53 --> 00:53:59
there's there's

00:53:54 --> 00:53:59
pushing people to excel

00:53:58 --> 00:54:05
and then there's too far and i think he

00:54:02 --> 00:54:08
was on the wrong side of the line

00:54:04 --> 00:54:11
and i've never worked for musk i know a

00:54:07 --> 00:54:13
number of people who have

00:54:10 --> 00:54:16
many of them that have said and it's you

00:54:12 --> 00:54:20
know shows up in the press a lot that

00:54:15 --> 00:54:22
musk is kind of that way and

00:54:19 --> 00:54:25
one of the things that i sort of loathe

00:54:21 --> 00:54:29
about silicon valley these days

00:54:24 --> 00:54:31
is that um a lot of the high-flying

00:54:28 --> 00:54:33
successes are run by people who are

00:54:30 --> 00:54:36
complete jerks

00:54:32 --> 00:54:39
um but it seems like there's been

00:54:35 --> 00:54:40
become this there's come this this sort

00:54:38 --> 00:54:43
of mythology

00:54:39 --> 00:54:45
out of steve jobs that the reason that

00:54:42 --> 00:54:51
he succeeded

00:54:44 --> 00:54:55
was because he was super hard on people

00:54:50 --> 00:54:58
and and and and and and and in

00:54:54 --> 00:54:59
a number of corners people start going

00:54:57 --> 00:55:03
oh if i want to succeed

00:54:58 --> 00:55:05
i need to be a real jerk yeah right

00:55:02 --> 00:55:06
and and and that for me just does not

00:55:04 --> 00:55:08
compute

00:55:05 --> 00:55:10
i mean i know a lot of successful people

00:55:07 --> 00:55:14
who are not jerks

00:55:10 --> 00:55:18
who are perfectly fine people

00:55:13 --> 00:55:22
um you know they they tend to

00:55:18 --> 00:55:25
not be in the public eye the the

00:55:21 --> 00:55:27
general public somehow lifts the

00:55:24 --> 00:55:30
jerks up into the

00:55:26 --> 00:55:31
hero status right well they

00:55:29 --> 00:55:33
because they're they do things that get

00:55:30 --> 00:55:38
hem in the press

00:55:32 --> 00:55:41
yeah and you know the people who

00:55:37 --> 00:55:45
um you know

00:55:40 --> 00:55:47
don't do the kind of things that spill

00:55:44 --> 00:55:51
into the press

00:55:46 --> 00:55:55
um yeah i just uh talked to chris ladner

00:55:50 --> 00:55:58
um for the second time

00:55:54 --> 00:56:00
he's a super nice guy just an example of

00:55:57 --> 00:56:01
this kind of kind individual that's in

00:55:59 --> 00:56:03
the background

00:56:00 --> 00:56:05
i feel like he's behind like a million

00:56:02 --> 00:56:08
technologies but he also talked about

00:56:04 --> 00:56:09
he jerkiness of some of the folks yeah

00:56:08 --> 00:56:14
and the fact that being a jerk has

00:56:10 --> 00:56:16
become your required style

00:56:13 --> 00:56:18
but one thing i'd maybe want to ask on

00:56:15 --> 00:56:18
that is and maybe to push back a little

00:56:17 --> 00:56:20
bit

00:56:17 --> 00:56:22
so there's the jerk side but there's

00:56:19 --> 00:56:23
also

00:56:21 --> 00:56:25
if i were to criticize what i've seen in

00:56:22 --> 00:56:26
silicon valley

00:56:24 --> 00:56:29
which is almost the resistance to

00:56:26 --> 00:56:34
working hard

00:56:28 --> 00:56:34
so on the jerkiness side is um

00:56:34 --> 00:56:39
it's it's so posted jobs and elon kind

00:56:37 --> 00:56:42
of push people

00:56:38 --> 00:56:44
to work really hard to do

00:56:41 --> 00:56:46
and there's a question whether it's

00:56:43 --> 00:56:48
possible to do that nicely

00:56:45 --> 00:56:49
but one of the things that bothers me

00:56:47 --> 00:56:52
maybe i'm just

00:56:48 --> 00:56:54
rushing and just kind of you know

00:56:51 --> 00:56:57
romanticize the whole suffering thing

00:56:53 --> 00:56:59
but i think working hard is essential

00:56:56 --> 00:57:02
for accomplishing anything interesting

00:56:58 --> 00:57:05
like really hard and in the parlance of

00:57:01 --> 00:57:07
silicon valley it's probably too hard

00:57:04 --> 00:57:08
this idea that you should work smart not

00:57:06 --> 00:57:12
hard

00:57:07 --> 00:57:13
often to me it sounds like you should be

00:57:11 --> 00:57:15
lazy

00:57:12 --> 00:57:17
because of course you want to be to work

00:57:14 --> 00:57:19
smart of course you want to be

00:57:16 --> 00:57:21
maximally efficient but in order to

00:57:18 --> 00:57:22
discover the efficient path like we're

00:57:20 --> 00:57:27
talking about with the short programs

00:57:22 --> 00:57:29
yeah well you know the the the smart

00:57:26 --> 00:57:30
hard thing yeah isn't an either or it's

00:57:28 --> 00:57:33
an and

00:57:29 --> 00:57:36
as an and yeah right and

00:57:32 --> 00:57:40
um you know the the the

00:57:35 --> 00:57:41
people who say you should work

00:57:39 --> 00:57:45
smart

00:57:40 --> 00:57:48
not hard they pretty much always fail

00:57:44 --> 00:57:50
yeah thank you right i mean that's

00:57:47 --> 00:57:51
that's just just a recipe for

00:57:49 --> 00:57:54
disaster i mean there

00:57:50 --> 00:57:57
are there are counter examples

00:57:53 --> 00:57:57
but they're more people who benefited

00:57:56 --> 00:58:01
from

00:57:56 --> 00:58:03
luck and you're yeah exactly

00:58:00 --> 00:58:04
luck and timing like you said is often

00:58:02 --> 00:58:06
uh

00:58:03 --> 00:58:08
an essential thing but you're saying you

00:58:05 --> 00:58:09
know you can be you can push people to

00:58:07 --> 00:58:12
work hard

00:58:08 --> 00:58:15
and do incredible work without without

00:58:11 --> 00:58:15
uh without being nasty yeah without

00:58:14 --> 00:58:19
being nasty

00:58:14 --> 00:58:22
i think uh um

00:58:18 --> 00:58:23
google is a good example of the

00:58:21 --> 00:58:25
leadership of google

00:58:22 --> 00:58:27
throughout his history has been a pretty

00:58:24 --> 00:58:30
good example of uh

00:58:26 --> 00:58:35
not being nasty i mean the

00:58:30 --> 00:58:38
the the twins larry and sergey

00:58:34 --> 00:58:39
um are both pretty nice people sandra

00:58:37 --> 00:58:43
paches

00:58:38 --> 00:58:46
very nice yeah yeah yeah and

00:58:42 --> 00:58:47
you know it's it's a culture of people

00:58:45 --> 00:58:51
who

00:58:46 --> 00:58:52
work really really hard let me ask a

00:58:50 --> 00:58:55
maybe a little bit of a

00:58:52 --> 00:58:57
tense question uh we're talking about

00:58:54 --> 00:58:59
emacs

00:58:56 --> 00:59:01
it seems like you've done some

00:58:58 --> 00:59:02
incredible work so outside of java

00:59:00 --> 00:59:05
you've done some incredible work that

00:59:01 --> 00:59:05
didn't become as popular as it could

00:59:04 --> 00:59:08
have

00:59:04 --> 00:59:09
because of like licensing issues and

00:59:07 --> 00:59:13
open sourcing

00:59:08 --> 00:59:13
like issues um

00:59:13 --> 00:59:21
uh what are your thoughts about the the

00:59:17 --> 00:59:24
entire mess like what's about open

00:59:20 --> 00:59:27
source now in retrospect looking back

00:59:23 --> 00:59:31
uh about licensing about open sourcing

00:59:26 --> 00:59:32
do you think uh open source is a good

00:59:30 --> 00:59:36
thing

00:59:31 --> 00:59:38
a bad thing do you have regrets

00:59:35 --> 00:59:40
do you have wisdom that you've learned

00:59:37 --> 00:59:44
from that whole experience

00:59:39 --> 00:59:46
so in general i'm a big fan of of open

00:59:43 --> 00:59:49
source

00:59:45 --> 00:59:50
the way that it it can be used to build

00:59:48 --> 00:59:52
communities

00:59:49 --> 00:59:54
and promote the development of things

00:59:51 --> 00:59:58
and promote collaboration

00:59:53 --> 01:00:02
and all of that is really pretty grand

00:59:57 --> 01:00:04
um when

01:00:01 --> 01:00:06
open source turns into a religion that

01:00:03 --> 01:00:07
says all things must be open source

01:00:05 --> 01:00:10
right

01:00:06 --> 01:00:12
um i get kind of

01:00:09 --> 01:00:14
weird about that because it's it's sort

01:00:11 --> 01:00:18
of like saying

01:00:13 --> 01:00:22
you know some some versions of that um

01:00:17 --> 01:00:23
end up saying that that that all

01:00:21 --> 01:00:25
software engineers must take a vow

01:00:22 --> 01:00:28
of poverty

01:00:24 --> 01:00:32
right right as though um

01:00:28 --> 01:00:35
it's unethical to have money yeah

01:00:31 --> 01:00:38
to build a company to uh right

01:00:34 --> 01:00:38
and you know there's a there's a there's

01:00:37 --> 01:00:40
a

01:00:37 --> 01:00:42
slice of me that actually kind of buys

01:00:39 --> 01:00:46
into that right

01:00:41 --> 01:00:51
because you know people who make

01:00:45 --> 01:00:54
billions of dollars off of like a patent

01:00:50 --> 01:00:55
and the the patent came from like you

01:00:53 --> 01:00:59
know literally a

01:00:54 --> 01:01:03
stroke of lightning that that

01:00:58 --> 01:01:06
hits you as you lie half a week in bed

01:01:02 --> 01:01:09
yeah that's lucky good for you

01:01:06 --> 01:01:11
the way that that sometimes sort of

01:01:08 --> 01:01:13
explodes into

01:01:10 --> 01:01:14
something that looks to me a lot like

01:01:12 --> 01:01:17
xploitation

01:01:14 --> 01:01:18
you know you see a lot of that in in in

01:01:16 --> 01:01:22
like the

01:01:17 --> 01:01:26
drug industry um

01:01:21 --> 01:01:29
you know when you know when you've got a

01:01:25 --> 01:01:31
got got medications that cost

01:01:28 --> 01:01:32
you know cost you like a hundred dollars

01:01:30 --> 01:01:37
a day

01:01:31 --> 01:01:40
and it's like no

01:01:36 --> 01:01:40
yeah so the the interesting thing about

01:01:39 --> 01:01:45
he sort of

01:01:39 --> 01:01:48
open source uh what bothers me is when

01:01:44 --> 01:01:49
something is not open source and because

01:01:47 --> 01:01:52
of that

01:01:48 --> 01:01:55
it's a worse product yeah

01:01:51 --> 01:01:57
so like i mean if i look at your just

01:01:54 --> 01:01:59
implementation of emacs

01:01:56 --> 01:02:01
like that could have been the dominant

01:01:58 --> 01:02:02
implementation like i use emacs that's

01:02:00 --> 01:02:03
my main id

01:02:01 --> 01:02:05
i apologize to the world but i still

01:02:02 --> 01:02:10
ove it uh

01:02:04 --> 01:02:13
and you know i could have been using um

01:02:09 --> 01:02:14
your implementation of emacs and why

01:02:12 --> 01:02:17
aren't i

01:02:13 --> 01:02:19
so are you using the gnu max i guess the

01:02:16 --> 01:02:23
default on linux is that new yeah

01:02:18 --> 01:02:25
and and that through a strange passage

01:02:22 --> 01:02:28
started out as the one that i wrote

01:02:24 --> 01:02:30
xactly so it's it still has uh

01:02:27 --> 01:02:31
right yeah right well and and part of

01:02:29 --> 01:02:35
that was

01:02:30 --> 01:02:40
because you know in you know the last

01:02:34 --> 01:02:43
couple of years of grad school

01:02:39 --> 01:02:47
it it became really clear to me

01:02:42 --> 01:02:48
that i was either going to be mr emax

01:02:46 --> 01:02:52
forever

01:02:48 --> 01:02:52
or i was going to graduate

01:02:52 --> 01:02:59
i couldn't actually do both

01:02:56 --> 01:03:00
was that a hard decision that's so

01:02:58 --> 01:03:02
interesting to think about

01:02:59 --> 01:03:03
you as the pub like it's a different

01:03:01 --> 01:03:06
rajectory that could have happened

01:03:02 --> 01:03:09
yeah that's fascinating um

01:03:06 --> 01:03:12
you know and maybe you know i could be

01:03:08 --> 01:03:15
fabulously wealthy today if i had become

01:03:11 --> 01:03:19
mr emax and emacs had mushroomed into

01:03:14 --> 01:03:22
a series of text processing

01:03:18 --> 01:03:24
applications and all kinds of stuff and

01:03:21 --> 01:03:27
you know i would have

01:03:23 --> 01:03:27
you know but

01:03:26 --> 01:03:34
i have a long history of financially

01:03:29 --> 01:03:38
suboptimal decisions because

01:03:33 --> 01:03:43
i didn't want that life

01:03:37 --> 01:03:47
right and you know i went to grad school

01:03:42 --> 01:03:50
because i wanted to graduate

01:03:46 --> 01:03:50
um and

01:03:51 --> 01:03:57
you know you know being mr emax for a

01:03:55 --> 01:04:00
while

01:03:56 --> 01:04:00
was kind of fun and then it kind of

01:03:59 --> 01:04:04
became

01:03:59 --> 01:04:08
not fun not fun um

01:04:03 --> 01:04:11
and you know when it was not fun

01:04:07 --> 01:04:14
and i was you know

01:04:10 --> 01:04:16
there was no way i could you know pay my

01:04:13 --> 01:04:20
rent

01:04:15 --> 01:04:22
right yeah and and i was like

01:04:19 --> 01:04:23
okay do i carry on as a grad student as

01:04:21 --> 01:04:25
a

01:04:22 --> 01:04:27
you know i you know i had a research

01:04:24 --> 01:04:28
assistantship and i was sort of living

01:04:26 --> 01:04:31
off of that

01:04:27 --> 01:04:32
and i was trying to do my uh you know i

01:04:30 --> 01:04:35
was doing all my

01:04:31 --> 01:04:36
ra where all of my r.a you know being

01:04:34 --> 01:04:39
rad student work

01:04:35 --> 01:04:43
and being mr emacs all at the same time

01:04:38 --> 01:04:46
um and and i

01:04:42 --> 01:04:48
decided to pick one

01:04:45 --> 01:04:49
and one of the things that i did at the

01:04:47 --> 01:04:52
time was

01:04:48 --> 01:04:53
i went around you know all the people i

01:04:51 --> 01:04:56
knew on the

01:04:52 --> 01:04:59
arpanet who might be able to

01:04:55 --> 01:05:04
to take over looking after emacs

01:04:58 --> 01:05:09
and um pretty much everybody said

01:05:03 --> 01:05:12
i got a day job so so i actually found

01:05:08 --> 01:05:14
you know two folks and a

01:05:12 --> 01:05:16
couple of folks in a garage in new

01:05:13 --> 01:05:19
jersey

01:05:15 --> 01:05:23
um complete with a dog

01:05:18 --> 01:05:25
um who are willing to take it over

01:05:22 --> 01:05:27
but they were going to have to charge

01:05:24 --> 01:05:28
money um

01:05:26 --> 01:05:31
but my deal with them was that they

01:05:28 --> 01:05:33
would um

01:05:30 --> 01:05:35
only that they would make it free for

01:05:32 --> 01:05:39
universities and schools and stuff

01:05:34 --> 01:05:42
and they said sure and

01:05:38 --> 01:05:43
you know that upset some people so you

01:05:41 --> 01:05:44
have some

01:05:42 --> 01:05:46
now i don't know the full history of

01:05:43 --> 01:05:49
this but i think it's kind of uh

01:05:45 --> 01:05:53
interesting you have some

01:05:48 --> 01:05:56
tension with me mr richard stallman

01:05:52 --> 01:05:57
um over the and he kind of represents

01:05:55 --> 01:06:01
this kind of like

01:05:56 --> 01:06:03
you mentioned free software

01:06:00 --> 01:06:03
uh

01:06:03 --> 01:06:11
sort of a dogmatic focus on

01:06:06 --> 01:06:14
yeah all all information must be free

01:06:10 --> 01:06:17
so what is there an

01:06:13 --> 01:06:19
interesting way to uh paint a picture of

01:06:16 --> 01:06:20
the disagreement you have with richard

01:06:18 --> 01:06:25
through the years

01:06:20 --> 01:06:27
my my basic opposition is

01:06:24 --> 01:06:29
that you know when you say information

01:06:26 --> 01:06:33
must be free

01:06:28 --> 01:06:34
uh to a really extreme form that turns

01:06:32 --> 01:06:38
into

01:06:33 --> 01:06:41
you know all people

01:06:37 --> 01:06:43
whose job is the production

01:06:40 --> 01:06:43
of

01:06:44 --> 01:06:53
everything from movies to software

01:06:48 --> 01:06:57
um they must all take a vow of poverty

01:06:52 --> 01:07:00
because information must be free

01:06:56 --> 01:07:04
and that doesn't work for me right

01:07:00 --> 01:07:07
and and i and i don't

01:07:03 --> 01:07:08
want to be wildly rich i am not

01:07:06 --> 01:07:13
wildly rich

01:07:07 --> 01:07:13
um i do okay

01:07:12 --> 01:07:19
um

01:07:14 --> 01:07:22
but i do actually you know you know i've

01:07:18 --> 01:07:23
you know i can feed my children yeah i

01:07:21 --> 01:07:26
totally agree with you i

01:07:22 --> 01:07:28
t does just make me sad that sometimes

01:07:25 --> 01:07:31
the closing of the source

01:07:27 --> 01:07:34
for some reason the people that

01:07:30 --> 01:07:37
like a bureaucracy begins to build and

01:07:34 --> 01:07:38
sometimes it doesn't it hurts the

01:07:36 --> 01:07:41
product oh

01:07:37 --> 01:07:42
absolutely absolutely it's always sad

01:07:40 --> 01:07:45
and there's

01:07:41 --> 01:07:45
and there is a there is a balance in

01:07:44 --> 01:07:49
there

01:07:44 --> 01:07:52
that's a balance um and

01:07:48 --> 01:07:57
you know it's it's not hard

01:07:51 --> 01:08:00
over you know rapacious capitalism

01:07:56 --> 01:08:02
and and it's and it's not hard over in

01:07:59 --> 01:08:06
the other direction

01:08:01 --> 01:08:09
um and you know a lot of

01:08:05 --> 01:08:13
the the open source movement they

01:08:08 --> 01:08:17
have been magic to find a path to

01:08:12 --> 01:08:19
um actually making money right so

01:08:16 --> 01:08:21
doing things like service and support

01:08:18 --> 01:08:24
works for

01:08:20 --> 01:08:27
a lot of people um

01:08:23 --> 01:08:27
you know and there are some some ways

01:08:26 --> 01:08:32
where

01:08:26 --> 01:08:32
it's it's kind of um

01:08:32 --> 01:08:38
some of them are are a little a little

01:08:34 --> 01:08:42
perverse right so

01:08:37 --> 01:08:45
as you know a part of things like this

01:08:41 --> 01:08:47
arbanes-oxley act and various people's

01:08:44 --> 01:08:49
interpretations of all kinds of

01:08:46 --> 01:08:52
accounting principles

01:08:48 --> 01:08:52
um and this is kind of a worldwide thing

01:08:51 --> 01:08:56
but

01:08:52 --> 01:08:57
if you've got a a corporation

01:08:55 --> 01:08:59
that is depending on some piece of

01:08:56 --> 01:09:03
software

01:08:58 --> 01:09:04
um you know the often

01:09:02 --> 01:09:06
you know various accounting and

01:09:03 --> 01:09:08
reporting standards say if you don't

01:09:05 --> 01:09:11
have a support contract

01:09:07 --> 01:09:12
on this thing that that your business is

01:09:10 --> 01:09:16
depending on

01:09:11 --> 01:09:18
then that's bad

01:09:15 --> 01:09:21
you know so so so you know if you've got

01:09:17 --> 01:09:25
a if you've got a database you need to

01:09:20 --> 01:09:28
pay for support and and so

01:09:24 --> 01:09:30
but there's a difference between

01:09:27 --> 01:09:32
you know the the sort of support

01:09:29 --> 01:09:33
contracts that

01:09:31 --> 01:09:35
you know the average open source

01:09:32 --> 01:09:39
database

01:09:34 --> 01:09:43
uh producer charges and

01:09:38 --> 01:09:46
what somebody who is truly rapacious

01:09:42 --> 01:09:47
like oracle charges it's a it's a it's a

01:09:45 --> 01:09:52
balance

01:09:46 --> 01:09:55
it is it is absolutely a balance and

01:09:51 --> 01:09:59
you know there are there are a lot of

01:09:54 --> 01:10:02
different ways to make

01:09:58 --> 01:10:06
you know the math work workout

01:10:02 --> 01:10:09
for everybody um

01:10:05 --> 01:10:12
and you know the

01:10:08 --> 01:10:16
very you know

01:10:11 --> 01:10:18
uh un unbalanced sort of

01:10:15 --> 01:10:21
you know like like the winner takes all

01:10:17 --> 01:10:24
thing that that happens in so much of

01:10:20 --> 01:10:27
modern commerce um

01:10:23 --> 01:10:30
that just doesn't work for me either

01:10:26 --> 01:10:33
i know you've talked about this

01:10:29 --> 01:10:34
in quite a few places but you have

01:10:32 --> 01:10:37
created

01:10:33 --> 01:10:40
one of the most popular programming

01:10:36 --> 01:10:41
languages in the world

01:10:39 --> 01:10:43
this is the programming language that i

01:10:40 --> 01:10:47
first learned

01:10:42 --> 01:10:49
about object-oriented programming with

01:10:46 --> 01:10:50
you know i think it's a programming

01:10:48 --> 01:10:52
language that

01:10:49 --> 01:10:54
a lot of people use in a lot of

01:10:51 --> 01:10:55
different places and millions of devices

01:10:53 --> 01:10:59
today

01:10:54 --> 01:11:02
java so the absurd

01:10:58 --> 01:11:04
question but can you tell the origin

01:11:01 --> 01:11:08
story of java

01:11:03 --> 01:11:08
so long time ago at sun in about 1990

01:11:07 --> 01:11:12
there was a

01:11:08 --> 01:11:15
group of us who

01:11:11 --> 01:11:16
were kind of worried that there was

01:11:14 --> 01:11:19
tuff going on

01:11:16 --> 01:11:23
in the universe of computing that the

01:11:18 --> 01:11:23
computing industry was missing out on

01:11:25 --> 01:11:32
and so a a few of us

01:11:28 --> 01:11:34
tarted this project at sun that really

01:11:31 --> 01:11:36
got going i mean we started talking

01:11:33 --> 01:11:39
about it in 1990 and it really got going

01:11:35 --> 01:11:39
in 91

01:11:38 --> 01:11:43
and it was all about

01:11:42 --> 01:11:48
you know what was happening in terms of

01:11:46 --> 01:11:50
you know computing hardware you know

01:11:48 --> 01:11:53
processors and

01:11:49 --> 01:11:55
networking and all of that that was

01:11:52 --> 01:11:55
outside of the computer industry and

01:11:54 --> 01:11:59
that was

01:11:54 --> 01:12:01
everything from the the

01:11:58 --> 01:12:03
sort of early glimmers of cell

01:12:00 --> 01:12:06
phones that were happening

01:12:02 --> 01:12:07
then to you know you look at elevators

01:12:06 --> 01:12:10
and

01:12:06 --> 01:12:15
locomotives and

01:12:09 --> 01:12:18
process control systems in factories and

01:12:14 --> 01:12:21
all kinds of audio audio

01:12:17 --> 01:12:23
equipment and video equipment

01:12:20 --> 01:12:25
hey all had processors in them and they

01:12:22 --> 01:12:29
were all doing stuff with them

01:12:24 --> 01:12:31
and and it and it sort of felt like

01:12:28 --> 01:12:35
there was something going on there that

01:12:30 --> 01:12:35
we needed to understand

01:12:34 --> 01:12:39
so c c and c plus plus was in the

01:12:37 --> 01:12:41
air

01:12:38 --> 01:12:43
already oh no c and c plus plus

01:12:40 --> 01:12:44
absolutely owned the universe at that

01:12:42 --> 01:12:45
ime

01:12:43 --> 01:12:47
verything was written in c and z plus

01:12:44 --> 01:12:49
so where was the hunch that there

01:12:46 --> 01:12:51
was a need for a revolution

01:12:48 --> 01:12:52
well so the the need for a revolution

01:12:50 --> 01:12:57
was not about

01:12:51 --> 01:13:00
he a language it was about

01:12:56 --> 01:13:04
it was just as simple and vague as

01:12:59 --> 01:13:06
there are things happening out there

01:13:03 --> 01:13:08
and we understand them we need to

01:13:05 --> 01:13:11
understand them

01:13:07 --> 01:13:15
and and so um

01:13:10 --> 01:13:19
a few of us went on several

01:13:14 --> 01:13:22
um somewhat epic road trips

01:13:18 --> 01:13:24
um literal road trips literal road trips

01:13:21 --> 01:13:28
it's like get on an airplane

01:13:23 --> 01:13:32
go to japan visit you know

01:13:27 --> 01:13:35
toshiba and sharp and mitsubishi and

01:13:31 --> 01:13:37
sony and all of these folks and

01:13:34 --> 01:13:39
you know because we worked for sun we

01:13:36 --> 01:13:42
had you know

01:13:38 --> 01:13:44
folks who were willing to like give us

01:13:41 --> 01:13:45
introductions you know we we visited you

01:13:44 --> 01:13:49
know

01:13:44 --> 01:13:51
samsung and um

01:13:48 --> 01:13:52
you know a bunch of korean companies and

01:13:50 --> 01:13:54
we went all over europe we went to you

01:13:51 --> 01:13:56
know

01:13:53 --> 01:13:57
places like like phillips and siemens

01:13:55 --> 01:14:00
and thompson

01:13:56 --> 01:14:02
and what did you see there

01:13:59 --> 01:14:04
you know for me the one of the things

01:14:01 --> 01:14:06
that sort of left out

01:14:03 --> 01:14:07
was that they were doing all the usual

01:14:05 --> 01:14:09
computer

01:14:06 --> 01:14:11
things that people had been

01:14:08 --> 01:14:14
doing like 20 years before

01:14:10 --> 01:14:16
the thing that really left out to me was

01:14:13 --> 01:14:19
that they were

01:14:15 --> 01:14:22
sort of reinventing computer networking

01:14:18 --> 01:14:26
and they were making

01:14:21 --> 01:14:27
all the mistakes that people in the

01:14:25 --> 01:14:30
computer industry

01:14:26 --> 01:14:32
had had made and since i had been doing

01:14:30 --> 01:14:35
a lot of work in

01:14:31 --> 01:14:35
the networking area you know you know

01:14:34 --> 01:14:38
e'd go and

01:14:34 --> 01:14:40
you know visit you know company x they'd

01:14:37 --> 01:14:41
escribe this networking thing that they

01:14:39 --> 01:14:43
were doing

01:14:40 --> 01:14:46
and just without any thought i could i

01:14:42 --> 01:14:47
could tell them like the 25 things

01:14:45 --> 01:14:50
there were going to be complete

01:14:46 --> 01:14:51
disasters with that thing that they were

01:14:49 --> 01:14:55
doing

01:14:50 --> 01:14:57
um and i don't know whether that had any

01:14:54 --> 01:15:00
impact on any of them but but

01:14:56 --> 01:15:04
that particular story of you know

01:14:59 --> 01:15:07
sort of repeating the disasters

01:15:03 --> 01:15:09
of the computer science industry um

01:15:06 --> 01:15:12
was there and we and one of the things

01:15:08 --> 01:15:13
we thought was

01:15:11 --> 01:15:15
well maybe we could do something useful

01:15:12 --> 01:15:18
here with like

01:15:14 --> 01:15:19
bringing them forward somewhat but but

01:15:17 --> 01:15:23
also

01:15:18 --> 01:15:25
at the same time we learned a bunch of

01:15:22 --> 01:15:28
things

01:15:24 --> 01:15:32
from from these you know mostly consumer

01:15:27 --> 01:15:32
electronics companies

01:15:32 --> 01:15:41
and you know high on the list was

01:15:36 --> 01:15:43
that they viewed their

01:15:40 --> 01:15:45
like relationship with the customer as

01:15:42 --> 01:15:48
acred

01:15:44 --> 01:15:51
um they they were never

01:15:47 --> 01:15:55
willing to make

01:15:50 --> 01:15:55
trade-offs between

01:15:54 --> 01:16:00
for safety right so one of the things

01:15:58 --> 01:16:03
that

01:15:59 --> 01:16:05
had always made me nervous in the

01:16:02 --> 01:16:08
computer industry

01:16:04 --> 01:16:11
was that um

01:16:08 --> 01:16:13
people were willing to make trade-offs

01:16:10 --> 01:16:16
in reliability

01:16:12 --> 01:16:18
to get performance um

01:16:15 --> 01:16:20
you know the the you know they want

01:16:17 --> 01:16:20
faster faster it breaks a little more

01:16:19 --> 01:16:22
often

01:16:20 --> 01:16:24
because it's fast you know you maybe you

01:16:21 --> 01:16:28
run it a little hotter than you should

01:16:23 --> 01:16:30
or like like the one that always blew my

01:16:27 --> 01:16:35
mind was the way that

01:16:29 --> 01:16:39
um the folks at at cray super computers

01:16:34 --> 01:16:42
got their division to be really fast

01:16:38 --> 01:16:45
was that they did newton-raphson

01:16:41 --> 01:16:49
approximations

01:16:44 --> 01:16:53
and so you know the bottom several bits

01:16:48 --> 01:16:55
of you know a over b we're essentially

01:16:52 --> 01:16:58
random numbers

01:16:54 --> 01:16:59
um what could possibly go wrong what

01:16:57 --> 01:17:04
could go wrong

01:16:58 --> 01:17:07
right and you know

01:17:03 --> 01:17:09
just figuring out how to nail the bottom

01:17:06 --> 01:17:12
bit

01:17:08 --> 01:17:15
um how to make sure that you know

01:17:11 --> 01:17:19
if you put a piece of toast in a toaster

01:17:14 --> 01:17:21
it's not going to kill the customer

01:17:18 --> 01:17:23
it's not going to burst into flames and

01:17:20 --> 01:17:25
burn the house down

01:17:22 --> 01:17:27
so those are i guess those are the the

01:17:24 --> 01:17:31
principles that were inspiring

01:17:26 --> 01:17:34
but how did from the days of

01:17:30 --> 01:17:36
uh java is called oak because of a tree

01:17:33 --> 01:17:39
outside the window story that

01:17:35 --> 01:17:40
people know how did it become this

01:17:38 --> 01:17:45
incredible

01:17:39 --> 01:17:48
like powerful language well

01:17:44 --> 01:17:48
so it was a bunch of things so we you

01:17:47 --> 01:17:51
know

01:17:48 --> 01:17:53
after all that we started you know the

01:17:50 --> 01:17:56
way that we decided that we could

01:17:52 --> 01:17:59
understand things better was by

01:17:55 --> 01:17:59
building a demo building a prototype of

01:17:58 --> 01:18:03
something

01:17:58 --> 01:18:05
okay so um kind of because it was easy

01:18:02 --> 01:18:08
and fun we decided to build

01:18:04 --> 01:18:09
a control system for some home

01:18:07 --> 01:18:13
lectronics you know tv

01:18:08 --> 01:18:16
cr that kind of stuff and

01:18:12 --> 01:18:16
as we were building it we you know we we

01:18:15 --> 01:18:19
sort of

01:18:15 --> 01:18:20
discovered that there were some things

01:18:18 --> 01:18:25
about standard practice in c

01:18:20 --> 01:18:28
programming that um

01:18:24 --> 01:18:29
were really getting in the way and it

01:18:27 --> 01:18:31
wasn't

01:18:28 --> 01:18:32
it wasn't exactly you know because we

01:18:30 --> 01:18:36
re writing this

01:18:31 --> 01:18:38
all the c code and c plus plus code that

01:18:35 --> 01:18:40
we couldn't write it to do the

01:18:37 --> 01:18:42
right thing but that

01:18:39 --> 01:18:45
um one of the things that was weird in

01:18:41 --> 01:18:48
the group was that we had

01:18:44 --> 01:18:51
um a guy who's who's

01:18:47 --> 01:18:53
you know his sort of top level job

01:18:50 --> 01:18:56
was he was a business guy

01:18:52 --> 01:18:58
ou know he was sort of an mba kind of

01:18:55 --> 01:18:59
person you know think about business

01:18:57 --> 01:19:02
plans and all of that

01:18:58 --> 01:19:02
and

01:19:01 --> 01:19:05
you know there were a bunch of things

01:19:03 --> 01:19:07
that were kind of

01:19:04 --> 01:19:09
you know and we would talk about things

01:19:06 --> 01:19:11
that were going wrong and

01:19:08 --> 01:19:13
um or things were going wrong things

01:19:10 --> 01:19:15
were going right and

01:19:12 --> 01:19:17
you know as we thought about you know

01:19:14 --> 01:19:21
things like like the requirements for

01:19:16 --> 01:19:23
security and safety um

01:19:20 --> 01:19:25
some low-level details and see like

01:19:22 --> 01:19:28
naked pointers

01:19:24 --> 01:19:31
yeah and you know

01:19:27 --> 01:19:36
so so back in the early 90s

01:19:30 --> 01:19:40
um it was well understood

01:19:35 --> 01:19:42
that you know the number one source of

01:19:39 --> 01:19:45
like security vulnerabilities is

01:19:41 --> 01:19:48
pointers was just pointers was just bugs

01:19:44 --> 01:19:52
yeah right and it was like you know

01:19:48 --> 01:19:54
50 60 70 of all security

01:19:51 --> 01:19:56
vulnerabilities were bugs and the vast

01:19:53 --> 01:19:59
majority of them were like

01:19:55 --> 01:20:01
buffer overflows yeah so you're like

01:19:58 --> 01:20:02
we have to fix this we we have to make

01:20:00 --> 01:20:06
sure that this

01:20:02 --> 01:20:07
cannot happen and that was kind of the

01:20:05 --> 01:20:10
original

01:20:06 --> 01:20:12
thing for me was this cannot this cannot

01:20:09 --> 01:20:16
continue

01:20:11 --> 01:20:19
and one of the things i find really

01:20:15 --> 01:20:23
entertaining this year was um

01:20:18 --> 01:20:25
i forget which rag published it but

01:20:22 --> 01:20:29
here was this article that came out

01:20:24 --> 01:20:31
hat was um an examination

01:20:28 --> 01:20:33
it was sort of the result of of an

01:20:30 --> 01:20:36
examination of all the security

01:20:32 --> 01:20:40
vulnerabilities in chrome and chrome is

01:20:35 --> 01:20:43
like a giant piece of c-plus plus code

01:20:39 --> 01:20:47
and 60 or 70 percent of all the security

01:20:42 --> 01:20:49
vulnerabilities were stupid pointer

01:20:46 --> 01:20:53
tricks

01:20:48 --> 01:20:56
and i thought it's 30 years later

01:20:52 --> 01:20:57
and we're still there still there and

01:20:55 --> 01:20:59
we're still there

01:20:56 --> 01:21:03
and you know i you know that's one of

01:20:58 --> 01:21:06
those you know slap your forehead and

01:21:02 --> 01:21:07
and just just just want to cry would

01:21:05 --> 01:21:09
you attribute

01:21:06 --> 01:21:11
uh or is that too much of a

01:21:08 --> 01:21:12
simplification but would you attribute

01:21:10 --> 01:21:14
the creation of java to uh

01:21:11 --> 01:21:17
[Laughter]

01:21:13 --> 01:21:18
to see borders obvious problems well

01:21:16 --> 01:21:22
that i mean that was

01:21:17 --> 01:21:24
one of the the trigger points

01:21:21 --> 01:21:26
and currency you've mentioned

01:21:23 --> 01:21:29
concurrency was a big deal

01:21:25 --> 01:21:32
um and you know because when you're

01:21:28 --> 01:21:33
interacting with people you know the

01:21:31 --> 01:21:37
last thing you ever want to see is

01:21:32 --> 01:21:40
the thing like waiting and

01:21:36 --> 01:21:42
you know issues about the software

01:21:39 --> 01:21:44
development process

01:21:41 --> 01:21:46
you know when faults happen can you

01:21:43 --> 01:21:50
recover from them

01:21:45 --> 01:21:51
what can you do to make it easier to

01:21:49 --> 01:21:55
create and

01:21:50 --> 01:21:58
eliminate complex data structures

01:21:54 --> 01:21:59
what can you do to fix you know the one

01:21:57 --> 01:22:03
of the most common

01:21:58 --> 01:22:07
sea problems which is storage leaks

01:22:02 --> 01:22:10
um and it's it's evil twin the

01:22:06 --> 01:22:14
um the the freed

01:22:10 --> 01:22:16
but still being used piece of

01:22:13 --> 01:22:18
memory you know you you free

01:22:15 --> 01:22:21
something and then you keep using it

01:22:17 --> 01:22:22
oh yeah you know so so when i was

01:22:20 --> 01:22:25
originally thinking about that i was

01:22:21 --> 01:22:27
thinking about it in terms of

01:22:24 --> 01:22:28
sort of safety and security issues

01:22:26 --> 01:22:29
and one of the things i sort of came to

01:22:28 --> 01:22:32
believe

01:22:28 --> 01:22:34
came to understand was that it wasn't

01:22:31 --> 01:22:37
just about safety and security but it

01:22:33 --> 01:22:37
was about

01:22:36 --> 01:22:44
developer velocity right so

01:22:40 --> 01:22:46
and i got really religious about this

01:22:43 --> 01:22:50
because at that point i had spent

01:22:45 --> 01:22:50
an ungodly amount of my life

01:22:49 --> 01:22:59
hunting down mystery pointer bugs

01:22:54 --> 01:23:00
and you know like like two-thirds of my

01:22:58 --> 01:23:02
time

01:22:59 --> 01:23:04
as a software developer was you know

01:23:01 --> 01:23:05
because the mystery pointer bugs tend to

01:23:04 --> 01:23:08
be

01:23:04 --> 01:23:10
the hardest to find because they tend to

01:23:08 --> 01:23:13
be

01:23:09 --> 01:23:15
very very statistical the ones that hurt

01:23:12 --> 01:23:18
you know they're you know they're like a

01:23:14 --> 01:23:21
one in a million chance

01:23:17 --> 01:23:23
um and

01:23:20 --> 01:23:25
but nevertheless create an infinite

01:23:22 --> 01:23:27
amount of suffering right

01:23:24 --> 01:23:28
because when you're doing a billion

01:23:26 --> 01:23:31
operations a second

01:23:27 --> 01:23:32
yeah you know one in a million chance

01:23:30 --> 01:23:36
means

01:23:31 --> 01:23:38
it's going to happen um

01:23:35 --> 01:23:39
and and so i got really religious about

01:23:37 --> 01:23:41
his thing about

01:23:38 --> 01:23:44
you know making it so that if something

01:23:40 --> 01:23:47
fails it fails immediately and

01:23:43 --> 01:23:50
visibly and

01:23:46 --> 01:23:51
you know one of the the the things that

01:23:49 --> 01:23:54
was a

01:23:50 --> 01:23:56
real attraction of java to

01:23:53 --> 01:23:57
lots of development shops was that you

01:23:55 --> 01:24:01
know we get our code

01:23:56 --> 01:24:03
up and running twice as fast

01:24:00 --> 01:24:05
you mean like the entirety of the

01:24:02 --> 01:24:06
development process the blocking all

01:24:04 --> 01:24:08
that kind of stuff yeah

01:24:05 --> 01:24:09
if you you know so so if you measure

01:24:07 --> 01:24:12
time

01:24:08 --> 01:24:15
from you know you you first

01:24:11 --> 01:24:16
ouch fingers to keyboard until you get

01:24:14 --> 01:24:20
your first demo

01:24:15 --> 01:24:20
ut uh

01:24:19 --> 01:24:25
not much different but if you look from

01:24:22 --> 01:24:28
fingers touching keyboard to

01:24:24 --> 01:24:30
solid piece of software that you could

01:24:27 --> 01:24:33
release in production

01:24:29 --> 01:24:35
it would be way faster and i think what

01:24:32 --> 01:24:37
people don't often realize there's

01:24:34 --> 01:24:38
yeah there's things that really slow you

01:24:36 --> 01:24:42
down like

01:24:37 --> 01:24:44
hard to catch bugs probably is

01:24:41 --> 01:24:46
the thing that really slows down that

01:24:43 --> 01:24:48
is it really slows things down but

01:24:45 --> 01:24:50
also there were you know one of the

01:24:47 --> 01:24:53
things that you get out of

01:24:49 --> 01:24:54
object-oriented programming is a strict

01:24:52 --> 01:24:56
methodology about you know what are the

01:24:53 --> 01:25:00
interfaces between things

01:24:55 --> 01:25:02
and being really clear about how parts

01:24:59 --> 01:25:05
relate to each other

01:25:01 --> 01:25:09
um and what that helps with

01:25:04 --> 01:25:12
is so many times what people do

01:25:08 --> 01:25:13
um is they kind of like sneak around the

01:25:11 --> 01:25:15
side

01:25:12 --> 01:25:17
so if you've built something and people

01:25:14 --> 01:25:20
are using it

01:25:16 --> 01:25:22
and then and you say and you say well

01:25:19 --> 01:25:25
okay you know i built this thing

01:25:21 --> 01:25:26
you use it this way and then you change

01:25:24 --> 01:25:28
it

01:25:25 --> 01:25:30
in such a way that that it still does

01:25:27 --> 01:25:31
what you said it does it just does it a

01:25:29 --> 01:25:33
little bit different

01:25:30 --> 01:25:34
but then you find out that somebody out

01:25:32 --> 01:25:36
here

01:25:33 --> 01:25:39
was sneaking around the side they sort

01:25:36 --> 01:25:42
of tunneled in a back door

01:25:38 --> 01:25:46
and this person their code broke

01:25:41 --> 01:25:48
and because they were sneaking through a

01:25:45 --> 01:25:51
side door

01:25:47 --> 01:25:55
and and

01:25:50 --> 01:25:59
normally the attitude is

01:25:54 --> 01:26:03
dummy um but a lot of times

01:25:58 --> 01:26:05
um you know you can't get away you can't

01:26:02 --> 01:26:07
just slap their hand and tell

01:26:04 --> 01:26:10
them to not do that

01:26:06 --> 01:26:13
right because you know it's

01:26:09 --> 01:26:13
you know somebody's

01:26:12 --> 01:26:18
you know some banks you know account

01:26:15 --> 01:26:21
reconciliation system

01:26:17 --> 01:26:23
that that you know some developer

01:26:20 --> 01:26:25
decided oh i'm lazy

01:26:22 --> 01:26:27
ou know i'll just sneak through the

01:26:24 --> 01:26:29
back door because the language allows it

01:26:26 --> 01:26:31
i mean you can't even right mad at them

01:26:28 --> 01:26:32
and and so one of the things i did that

01:26:31 --> 01:26:37
on the one hand upset a bunch of people

01:26:33 --> 01:26:38
is that i made it so that you really

01:26:36 --> 01:26:39
couldn't

01:26:37 --> 01:26:41
go through back doors right so so the

01:26:38 --> 01:26:44
whole point of that

01:26:40 --> 01:26:46
was to say if

01:26:43 --> 01:26:48
you need you know if the interface here

01:26:45 --> 01:26:50
isn't right

01:26:47 --> 01:26:52
he wrong way to deal with that is is to

01:26:49 --> 01:26:54
go through a back door yeah

01:26:51 --> 01:26:55
the right way to deal with it is to walk

01:26:53 --> 01:26:56
up to the developer of this thing and

01:26:54 --> 01:26:59
say

01:26:55 --> 01:27:01
uh change the interface fix it yep

01:26:58 --> 01:27:02
right and so it was kind of like a

01:27:00 --> 01:27:06
social engineering thing

01:27:01 --> 01:27:08
yeah and um it's brilliant

01:27:05 --> 01:27:09
and people ended up discovering that

01:27:08 --> 01:27:14
really made a difference um in terms

01:27:11 --> 01:27:16
of you know and and and a bunch of this

01:27:13 --> 01:27:17
tuff you know if you're just like

01:27:15 --> 01:27:21
screwing around writing your own

01:27:16 --> 01:27:24
like you know class project scale stuff

01:27:20 --> 01:27:28
a lot of stuff doesn't isn't quite so

01:27:23 --> 01:27:32
important because you know you're

01:27:27 --> 01:27:34
you know both sides of the interface um

01:27:31 --> 01:27:36
but you know when you're building you

01:27:33 --> 01:27:38
know sort of

01:27:35 --> 01:27:40
larger more complex pieces of software

01:27:37 --> 01:27:40
that have a lot of people working on

01:27:39 --> 01:27:42
them

01:27:39 --> 01:27:45
and especially when they like span

01:27:41 --> 01:27:45
organizations

01:27:44 --> 01:27:51
um you know having

01:27:46 --> 01:27:52
really clear having clarity about

01:27:50 --> 01:27:56
how that stuff

01:27:51 --> 01:27:59
gets structured um saves your life yeah

01:27:55 --> 01:28:01
um and you know especially

01:27:58 --> 01:28:03
ou know there's so much software that

01:28:00 --> 01:28:07
is fundamentally untestable

01:28:02 --> 01:28:09
you know and you know until you do the

01:28:06 --> 01:28:11
real thing

01:28:08 --> 01:28:12
it's better to write good code in the

01:28:10 --> 01:28:14
beginning

01:28:11 --> 01:28:16
as opposed to writing crappy code and

01:28:13 --> 01:28:18
then trying to fix it and

01:28:15 --> 01:28:20
yeah trying to scramble and figure out

01:28:17 --> 01:28:21
and through testing figure out where the

01:28:19 --> 01:28:24
bugs are

01:28:20 --> 01:28:28
yeah it's just like it's like it's like

01:28:23 --> 01:28:31
which shortcut caused that

01:28:27 --> 01:28:32
rocket to not get where it was needed to

01:28:30 --> 01:28:36
go

01:28:31 --> 01:28:37
so i think one of the most beautiful

01:28:35 --> 01:28:41
ideas

01:28:36 --> 01:28:43
uh philosophically and technically is uh

01:28:40 --> 01:28:45
of a virtual machine the java virtual

01:28:42 --> 01:28:48
machine

01:28:44 --> 01:28:50
well again apologize to romanticize

01:28:47 --> 01:28:50
things but uh

01:28:49 --> 01:28:57
ow did the idea of the jvm come to be

01:28:53 --> 01:29:00
how to you radical of an idea it is

01:28:56 --> 01:29:02
because it seems to me to be just

01:28:59 --> 01:29:04
a really interesting idea in the history

01:29:02 --> 01:29:07
of programming

01:29:03 --> 01:29:09
so and what is it so the java virtual

01:29:06 --> 01:29:13
machine

01:29:08 --> 01:29:17
you can think of it in different ways

01:29:12 --> 01:29:18
um because it was

01:29:16 --> 01:29:20
carefully designed to have different

01:29:18 --> 01:29:23
ways of viewing it

01:29:19 --> 01:29:26
so one view of it that most people don't

01:29:22 --> 01:29:29
really realize is there

01:29:25 --> 01:29:29
is that you can

01:29:29 --> 01:29:36
view it as sort of an encoding of

01:29:33 --> 01:29:40
the abstract syntax tree in reverse

01:29:35 --> 01:29:41
polish notation

01:29:39 --> 01:29:43
i don't know if that makes any sense at

01:29:40 --> 01:29:45
all i could explain it and that would

01:29:42 --> 01:29:47
blow all of our time

01:29:44 --> 01:29:48
yeah um but the other way to think of it

01:29:46 --> 01:29:49
um

01:29:47 --> 01:29:52
and the way that it ends up being

01:29:48 --> 01:29:55
explained is that

01:29:51 --> 01:29:56
it's it's like the the instruction set

01:29:54 --> 01:29:59
of an

01:29:55 --> 01:30:00
abstract machine that's designed such

01:29:58 --> 01:30:02
that you can

01:29:59 --> 01:30:04
translate that abstract machine to a

01:30:01 --> 01:30:08
physical machine

01:30:03 --> 01:30:11
and the reason that that's important

01:30:07 --> 01:30:13
so if you wind back to the early 90s

01:30:10 --> 01:30:16
when we were talking to all of these

01:30:12 --> 01:30:19
companies doing consumer

01:30:15 --> 01:30:23
electronics

01:30:18 --> 01:30:23
and you talked to the purchasing people

01:30:22 --> 01:30:27
there were interesting conversations

01:30:24 --> 01:30:30
with purchasing

01:30:26 --> 01:30:32
um so if you look at how you know these

01:30:29 --> 01:30:36
devices come together

01:30:31 --> 01:30:38
they're sheet metal and gears and

01:30:35 --> 01:30:39
circuit boards and capacitors and

01:30:37 --> 01:30:43
resistors and

01:30:38 --> 01:30:46
stuff and

01:30:42 --> 01:30:50
everything you buy has multiple sources

01:30:45 --> 01:30:52
right so you can buy a capacitor

01:30:49 --> 01:30:53
from here you can buy a capacitor from

01:30:51 --> 01:30:56
there

01:30:52 --> 01:30:57
and you've got kind of a market so you

01:30:55 --> 01:30:59
know so that the

01:30:56 --> 01:31:02
you can actually get a decent price for

01:30:58 --> 01:31:06
a capacitor

01:31:01 --> 01:31:12
um but

01:31:05 --> 01:31:12
cpus and particularly in the early 90s

01:31:13 --> 01:31:18
cpus were all different and all

01:31:15 --> 01:31:23
proprietary

01:31:17 --> 01:31:23
so if you use the chip from intel

01:31:22 --> 01:31:28
you had to be an intel customer for the

01:31:25 --> 01:31:32
nd of till the end of time

01:31:28 --> 01:31:35
because if you wrote a bunch of software

01:31:31 --> 01:31:38
you know when you wrote software using

01:31:34 --> 01:31:39
whatever technique you wanted and c was

01:31:37 --> 01:31:44
particularly bad

01:31:38 --> 01:31:47
about this because there was a lot of

01:31:43 --> 01:31:50
properties of the underlying machine

01:31:46 --> 01:31:51
that came through so if you're stuck so

01:31:49 --> 01:31:53
the code you wrote you were stuck to

01:31:50 --> 01:31:55
that particular machine you were stuck

01:31:52 --> 01:31:57
to that particular machine

01:31:54 --> 01:31:58
which meant that they couldn't decide

01:31:56 --> 01:32:02
you know

01:31:57 --> 01:32:05
intel is screwing us um

01:32:01 --> 01:32:09
i'll start buying chips from

01:32:04 --> 01:32:12
you know bob's better chips

01:32:08 --> 01:32:12
this drove the like the purchasing

01:32:11 --> 01:32:16
people

01:32:12 --> 01:32:16
absolutely insane

01:32:15 --> 01:32:21
that that they would they were welded

01:32:17 --> 01:32:22
into this decision

01:32:20 --> 01:32:25
and it would have they would have to

01:32:21 --> 01:32:26
make this decision before the first line

01:32:24 --> 01:32:28
of software was written

01:32:25 --> 01:32:29
it's funny that you're talking about the

01:32:27 --> 01:32:30
purchasing people so that's one

01:32:28 --> 01:32:32
perspective right

01:32:29 --> 01:32:34
it's a you could there's a lot of other

01:32:32 --> 01:32:36
perspectives that all probably hated

01:32:33 --> 01:32:38
this idea

01:32:35 --> 01:32:39
right but from a technical aspect just

01:32:37 --> 01:32:42
like

01:32:38 --> 01:32:45
the creation of an abstraction layer

01:32:41 --> 01:32:47
that's uh agnostic to the underlying

01:32:44 --> 01:32:49
machine

01:32:46 --> 01:32:50
from the perspective of the developer i

01:32:48 --> 01:32:54
mean it's brilliant

01:32:49 --> 01:32:56
right well and and and and

01:32:53 --> 01:32:57
you know you know so that's like across

01:32:55 --> 01:33:00
the spectrum of of

01:32:56 --> 01:33:01
providers of chips but then there's also

01:32:59 --> 01:33:04
the the time

01:33:00 --> 01:33:06
thing because um you know as you went

01:33:03 --> 01:33:07
from one generation to the next

01:33:05 --> 01:33:08
generation they

01:33:06 --> 01:33:10
were all different

01:33:07 --> 01:33:11
and you would often have to rewrite your

01:33:09 --> 01:33:14
software i mean

01:33:10 --> 01:33:15
generations of uh cp of machines of

01:33:13 --> 01:33:18
different kinds

01:33:14 --> 01:33:20
yeah so so like like like one of the

01:33:18 --> 01:33:22
things that sucked about a year out of

01:33:19 --> 01:33:26
my life was when

01:33:21 --> 01:33:29
sun went from the the motorola

01:33:25 --> 01:33:33
68010 processor to the

01:33:29 --> 01:33:34
68020 processor then they had a number

01:33:32 --> 01:33:38
of differences

01:33:33 --> 01:33:39
and one of them hit us really hard and i

01:33:37 --> 01:33:44
ended up being

01:33:38 --> 01:33:45
the the point guy on the worst case of

01:33:43 --> 01:33:48
where

01:33:44 --> 01:33:50
the new instruction cache architecture

01:33:47 --> 01:33:53
heard us

01:33:49 --> 01:33:55
well okay so i mean so when did this

01:33:52 --> 01:33:57
idea i mean okay so yeah you you

01:33:54 --> 01:34:00
articulate a really clear

01:33:56 --> 01:34:00
fundamental problem in all of computing

01:33:59 --> 01:34:04
but

01:33:59 --> 01:34:06
how where do you get the guts to think

01:34:03 --> 01:34:08
we can actually solve this you know in

01:34:05 --> 01:34:10
our conversations with

01:34:07 --> 01:34:12
you know all these vendors you know

01:34:09 --> 01:34:17
these these problems started to

01:34:11 --> 01:34:17
show up and

01:34:17 --> 01:34:22
i kind of had this epiphany

01:34:21 --> 01:34:29
because it reminded me of

01:34:25 --> 01:34:32
a summer job that i had had in grad

01:34:28 --> 01:34:32
school

01:34:31 --> 01:34:34
so

01:34:34 --> 01:34:41
back in grad school my my thesis advisor

01:34:37 --> 01:34:44
well i had two thesis advisors

01:34:40 --> 01:34:46
for bizarre reasons um one of them was a

01:34:43 --> 01:34:48
guy named raj reddy the other one was

01:34:45 --> 01:34:51
bob sproul

01:34:47 --> 01:34:51
um and

01:34:50 --> 01:34:59
raj i love ra i really love both of them

01:34:54 --> 01:34:59
but right amazing so

01:34:58 --> 01:35:07
the the department had bought

01:35:01 --> 01:35:09
a bunch of like early workstations

01:35:06 --> 01:35:12
from a company called three rivers

01:35:08 --> 01:35:14
computer company

01:35:11 --> 01:35:16
and three rivers computer company was a

01:35:13 --> 01:35:20
bunch of electrical engineers who wanted

01:35:15 --> 01:35:22
to do as little software as possible

01:35:19 --> 01:35:25
so um they knew that they'd need to have

01:35:22 --> 01:35:26
like compilers and os and stuff like

01:35:24 --> 01:35:27
that and they didn't want to do any of

01:35:25 --> 01:35:29
that

01:35:26 --> 01:35:32
and they wanted to do that for as close

01:35:28 --> 01:35:35
to zero money as possible

01:35:31 --> 01:35:35
so um

01:35:35 --> 01:35:40
what they did was they they built a

01:35:37 --> 01:35:44
machine whose instruction set

01:35:39 --> 01:35:47
was um the

01:35:43 --> 01:35:48
was literally the byte code for ucsd

01:35:46 --> 01:35:51
pascal

01:35:47 --> 01:35:57
the p code

01:35:50 --> 01:35:57
and so we had a bunch of software

01:35:56 --> 01:36:02
that was that was written for this

01:35:59 --> 01:36:02
machine

01:36:02 --> 01:36:09
and for various reasons you know the

01:36:06 --> 01:36:10
company wasn't doing terrifically well

01:36:08 --> 01:36:12
we had all the software on these

01:36:09 --> 01:36:13
machines and we wanted it to run on

01:36:11 --> 01:36:17
other machines

01:36:12 --> 01:36:19
principally the backs and

01:36:16 --> 01:36:19
um

01:36:19 --> 01:36:25
and so raj asked me if i could come up

01:36:23 --> 01:36:28
with a way

01:36:24 --> 01:36:29
to port all of this software and

01:36:27 --> 01:36:32
translate from the

01:36:28 --> 01:36:33
from from from the the the the perk

01:36:31 --> 01:36:36
machines

01:36:32 --> 01:36:40
to vax's and

01:36:35 --> 01:36:42
i think he you know what he had in

01:36:39 --> 01:36:46
mind was something

01:36:41 --> 01:36:51
that would translate from like pascal

01:36:45 --> 01:36:52
to c or pascal to

01:36:50 --> 01:36:55
actually at those times pretty much it

01:36:51 --> 01:36:57
was you could translate to c

01:36:54 --> 01:36:58
or c and if you didn't like translating

01:36:56 --> 01:37:01
to c you could

01:36:57 --> 01:37:03
translate to c um

01:37:00 --> 01:37:05
there was you know it's you know it's

01:37:02 --> 01:37:07
like the the henry ford

01:37:04 --> 01:37:08
you know any color you wanted just as

01:37:06 --> 01:37:13
long as it's black

01:37:07 --> 01:37:17
um and and i went

01:37:12 --> 01:37:19
hat's really hard um

01:37:16 --> 01:37:20
and and i and i noticed that you know

01:37:18 --> 01:37:24
and i was like

01:37:19 --> 01:37:25
looking at stuff and i went oh i bet i

01:37:23 --> 01:37:30
could rewrite

01:37:24 --> 01:37:30
the p code into vax assembly code

01:37:29 --> 01:37:36
and and then i started to realize that

01:37:33 --> 01:37:39
you know there were some properties of p

01:37:35 --> 01:37:41
code that made that really easy some

01:37:38 --> 01:37:43
properties that made it really hard

01:37:40 --> 01:37:45
so i ended up writing this thing that

01:37:42 --> 01:37:48
ranslated

01:37:44 --> 01:37:52
from from p code on the three

01:37:48 --> 01:37:54
rivers perks into assembly code on the

01:37:51 --> 01:37:58
backs

01:37:53 --> 01:38:01
and i actually got higher quality

01:37:57 --> 01:38:03
code than the c compiler

01:38:00 --> 01:38:05
and so so everything just went got

01:38:02 --> 01:38:06
really fast it was really easy it was

01:38:04 --> 01:38:09
like

01:38:05 --> 01:38:13
wow i thought that was a sleazy hack

01:38:08 --> 01:38:15
because i was lazy and in actual fact it

01:38:12 --> 01:38:17
worked really well

01:38:14 --> 01:38:20
and and i and i tried to convince people

01:38:16 --> 01:38:24
that that was maybe a good thesis topic

01:38:19 --> 01:38:27
yeah um and nobody was

01:38:23 --> 01:38:28
it was you know it was like nah really

01:38:26 --> 01:38:30
that's

01:38:27 --> 01:38:31
i mean yeah it's really it's kind of a

01:38:29 --> 01:38:35
brilliant idea

01:38:30 --> 01:38:37
right maybe you didn't have the

01:38:34 --> 01:38:38
you weren't able to articulate the big

01:38:36 --> 01:38:41
picture of it

01:38:37 --> 01:38:45
yeah and and i think you know that was a

01:38:40 --> 01:38:48
um a key part but so then you know

01:38:44 --> 01:38:49
clock comes forward a few years and it's

01:38:47 --> 01:38:51
like

01:38:48 --> 01:38:52
we've got to be able to you know that

01:38:50 --> 01:38:53
you know the you know if they want to be

01:38:51 --> 01:38:56
able to switch

01:38:52 --> 01:38:57
from you know this weird microprocessor

01:38:55 --> 01:38:59
to that

01:38:56 --> 01:39:01
weird and totally different

01:38:58 --> 01:39:05
microprocessor how do you do that

01:39:00 --> 01:39:08
and i kind of went oh

01:39:04 --> 01:39:10
maybe by doing something kind of in the

01:39:07 --> 01:39:13
space of

01:39:09 --> 01:39:13
you know pascal p code you know i could

01:39:12 --> 01:39:16
o

01:39:12 --> 01:39:18
like multiple translators and i spent

01:39:15 --> 01:39:19
some time thinking about that and

01:39:17 --> 01:39:21
thinking about you know what worked and

01:39:18 --> 01:39:26
what didn't work when i

01:39:20 --> 01:39:30
did the the the p code to vax translator

01:39:25 --> 01:39:31
and um i talked to some of the folks who

01:39:29 --> 01:39:35
were involved in small talk because

01:39:30 --> 01:39:35
small talk also did about code

01:39:34 --> 01:39:42
and and and then i kind of went

01:39:38 --> 01:39:42
yeah let's that i want to do that yeah

01:39:41 --> 01:39:45
because that act

01:39:41 --> 01:39:46
you know and and it had the the other

01:39:44 --> 01:39:49
advantage that

01:39:45 --> 01:39:50
you could either interpret it or compile

01:39:48 --> 01:39:55
it

01:39:50 --> 01:39:58
and um interpreters are usually

01:39:54 --> 01:40:02
easier to do but not as fast

01:39:57 --> 01:40:06
as a compiler so i figured

01:40:01 --> 01:40:08
good i can be lazy again um

01:40:06 --> 01:40:10
you know you know sometimes i think that

01:40:07 --> 01:40:14
most of my good ideas are

01:40:09 --> 01:40:15
um driven by laziness and often i find

01:40:13 --> 01:40:17
that people some of the people's

01:40:14 --> 01:40:20
tupidest ideas are because they're

01:40:16 --> 01:40:20
insufficiently lazy

01:40:21 --> 01:40:25
eah they just want to build something

01:40:22 --> 01:40:27
really complicated it's like it doesn't

01:40:24 --> 01:40:30
need to be that complicated

01:40:26 --> 01:40:32
yeah and so and so that's how that came

01:40:29 --> 01:40:35
out

01:40:31 --> 01:40:39
and um you know but that also

01:40:34 --> 01:40:41
turned into kind of a you know almost a

01:40:38 --> 01:40:45
religious position on my part which was

01:40:40 --> 01:40:47
which got me in in several other fights

01:40:44 --> 01:40:49
o like like one of the things that was

01:40:46 --> 01:40:51
a real

01:40:48 --> 01:40:53
difference was the way that arithmetic

01:40:50 --> 01:40:56
worked

01:40:52 --> 01:40:59
um you know

01:40:55 --> 01:41:01
once upon a time there were you know it

01:40:58 --> 01:41:02
wasn't always just two's complement

01:41:00 --> 01:41:03
arithmetic

01:41:01 --> 01:41:05
there were some machines that had one's

01:41:02 --> 01:41:09
complement arithmetic which was like

01:41:04 --> 01:41:11
almost anything built by cdc um

01:41:08 --> 01:41:14
and occasionally there were machines

01:41:10 --> 01:41:18
that were decimal arithmetic

01:41:13 --> 01:41:21
and and i was like this is crazy

01:41:17 --> 01:41:23
ou know pretty much two's complement

01:41:20 --> 01:41:26
integer arithmetic has one

01:41:22 --> 01:41:30
so just let's just do that

01:41:26 --> 01:41:32
just to do that one of the other places

01:41:29 --> 01:41:36
where there was a lot of variability was

01:41:31 --> 01:41:36
in the way that floating point behaved

01:41:36 --> 01:41:41
and that was causing people throughout

01:41:39 --> 01:41:44
he

01:41:40 --> 01:41:45
software industry much pain because you

01:41:43 --> 01:41:48
couldn't

01:41:44 --> 01:41:48
do a numerical computing library that

01:41:47 --> 01:41:50
would

01:41:47 --> 01:41:52
work on cdc and then have it work on an

01:41:49 --> 01:41:55
ibm machine and

01:41:51 --> 01:41:58
work on it on a deck machine um

01:41:54 --> 01:42:00
and as a as a part of that whole

01:41:57 --> 01:42:03
struggle there had been this

01:41:59 --> 01:42:06
big body of work on

01:42:02 --> 01:42:08
floating point standards

01:42:05 --> 01:42:12
and this thing emerged that came to be

01:42:08 --> 01:42:14
called ieee 754

01:42:11 --> 01:42:16
which is the floating point standard

01:42:13 --> 01:42:21
that pretty much has take

01:42:15 --> 01:42:22
n over the entire universe um

01:42:20 --> 01:42:24
and and at the time i was doing java it

01:42:22 --> 01:42:26
had pretty much completed taking over

01:42:23 --> 01:42:28
the universe

01:42:25 --> 01:42:30
there were still a few pockets of

01:42:27 --> 01:42:32
holdouts but

01:42:29 --> 01:42:36
i was like you know it's important to be

01:42:32 --> 01:42:41
able to say what two plus two means

01:42:35 --> 01:42:44
um yeah and and so i went

01:42:40 --> 01:42:46
hat um and

01:42:43 --> 01:42:48
one of the ways that i got into fights

01:42:45 --> 01:42:51
with people was that

01:42:47 --> 01:42:52
here were a few machines that did not

01:42:50 --> 01:42:56
implement

01:42:51 --> 01:42:57
ieee 754 correctly

01:42:55 --> 01:42:59
well of course that's that's all

01:42:56 --> 01:43:01
short-term kind of fights

01:42:58 --> 01:43:02
i think in the in the long term i think

01:43:00 --> 01:43:05
this vision is

01:43:02 --> 01:43:07
won out yeah and and i think it's you

01:43:04 --> 01:43:08
know and it worked out over time i mean

01:43:06 --> 01:43:11
the

01:43:07 --> 01:43:14
biggest fights were with intel

01:43:10 --> 01:43:16
because they had done some strange

01:43:13 --> 01:43:17
things with rounding

01:43:15 --> 01:43:20
they'd done some strange things with

01:43:16 --> 01:43:23
eir transcendental functions

01:43:19 --> 01:43:24
which might turned into a mushroom cloud

01:43:22 --> 01:43:27
of

01:43:23 --> 01:43:28
you know weirdness and the name in the

01:43:26 --> 01:43:30
name of optimization

01:43:27 --> 01:43:31
but from the perspective of the

01:43:29 --> 01:43:33
developer

01:43:30 --> 01:43:35
that's not that's not good well their

01:43:32 --> 01:43:36
issues with transcendental functions

01:43:34 --> 01:43:39
were just stupid

01:43:35 --> 01:43:41
okay so that that's that's not even a

01:43:38 --> 01:43:43
trade-off that's just absolutely

01:43:40 --> 01:43:46
eah they were they were doing range

01:43:42 --> 01:43:49
reduction in of first sign and cosine

01:43:45 --> 01:43:50
using a slightly wrong value for pi i

01:43:48 --> 01:43:52
got it

01:43:49 --> 01:43:53
go ahead ten minutes so in the interest

01:43:51 --> 01:43:55
of time

01:43:52 --> 01:43:57
two questions so one about android and

01:43:54 --> 01:44:01
one about life

01:43:56 --> 01:44:04
uh so one i mean we could talk for

01:44:00 --> 01:44:05
many more hours i hope uh eventually we

01:44:03 --> 01:44:08
might talk again

01:44:04 --> 01:44:09
but i gotta ask you about android and

01:44:07 --> 01:44:12
the use

01:44:08 --> 01:44:14
of java there because it's one of the

01:44:11 --> 01:44:17
many places where java

01:44:13 --> 01:44:18
just has a huge impact on this world

01:44:16 --> 01:44:22
just on your opinion

01:44:18 --> 01:44:25
is there things that make you happy

01:44:21 --> 01:44:27
uh about the way andro uh java is used

01:44:24 --> 01:44:28
in the android world and are there

01:44:26 --> 01:44:31
things that

01:44:27 --> 01:44:32
you wish were different i i don't know

01:44:30 --> 01:44:35
how to do a short answer to that

01:44:31 --> 01:44:36
um but i have to do a short answer to

01:44:34 --> 01:44:39
that so

01:44:35 --> 01:44:42
you know i'm happy that they did it um

01:44:38 --> 01:44:43
java had been running on cell phones at

01:44:41 --> 01:44:45
hat time for quite a few years and it

01:44:42 --> 01:44:49
worked really really well

01:44:44 --> 01:44:50
um there were things about how they did

01:44:48 --> 01:44:54
it

01:44:49 --> 01:44:59
and and in particular um

01:44:53 --> 01:45:01
various ways that they kind of

01:44:58 --> 01:45:02
you know violated all kinds of contracts

01:45:00 --> 01:45:05
the guy who

01:45:01 --> 01:45:07
led it andy rubin

01:45:04 --> 01:45:08
he crossed a lot of lines there's some

01:45:06 --> 01:45:11
lines crossed

01:45:07 --> 01:45:12
yeah lines were crossed that have since

01:45:10 --> 01:45:15
you know

01:45:11 --> 01:45:20
mushroomed into giant court cases

01:45:14 --> 01:45:20
um and you know they didn't need to do

01:45:19 --> 01:45:23
that

01:45:19 --> 01:45:26
and in fact it would have been so much

01:45:22 --> 01:45:29
eaper for them to not cross lines

01:45:25 --> 01:45:32
i mean i suppose they didn't anticipate

01:45:28 --> 01:45:35
the the success uh

01:45:31 --> 01:45:36
of this whole endeavor um

01:45:34 --> 01:45:38
or do you think at that time it was

01:45:35 --> 01:45:39
already clear that this is uh it's gonna

01:45:37 --> 01:45:42
blow up

01:45:38 --> 01:45:44
i guess i i i i sort of came to believe

01:45:41 --> 01:45:48
that it didn't matter what

01:45:43 --> 01:45:48
andy did it was going to blow up

01:45:47 --> 01:45:52
okay he's he's he you know i kind of

01:45:50 --> 01:45:54
started

01:45:51 --> 01:45:59
to think of him as as as like a

01:45:53 --> 01:46:02
manufacturer of bombs

01:45:58 --> 01:46:03
yeah uh some of the best things in this

01:46:01 --> 01:46:04
world come about through a little bit of

01:46:02 --> 01:46:07
uh

01:46:04 --> 01:46:09
explosive well and some of the worst

01:46:08 --> 01:46:13
beautifully put but is there um and and

01:46:11 --> 01:46:16
like you said i mean

01:46:12 --> 01:46:17
does that make you proud that the java

01:46:15 --> 01:46:20
is in

01:46:16 --> 01:46:22
yeah is in millions i mean it could be

01:46:19 --> 01:46:24
billions of devices

01:46:21 --> 01:46:26
and yeah well i mean it was in in

01:46:23 --> 01:46:28
billions of phones before android came

01:46:25 --> 01:46:31
along

01:46:27 --> 01:46:33
um and

01:46:30 --> 01:46:35
you know i'm i'm just as proud as you

01:46:32 --> 01:46:39
know of the way that like

01:46:34 --> 01:46:40
the the smart card standards adopted

01:46:38 --> 01:46:42
java

01:46:39 --> 01:46:44
nd they did it they you know everybody

01:46:41 --> 01:46:46
involved in that did a really good job

01:46:43 --> 01:46:48
and that's you know billions and

01:46:45 --> 01:46:52
billions

01:46:47 --> 01:46:54
um that's crazy the sim cards

01:46:51 --> 01:46:55
you know the sim cards in your pocket

01:46:53 --> 01:46:58
yeah i mean it's

01:46:54 --> 01:47:00
outside of that world for a decade so i

01:46:57 --> 01:47:01
don't know how that has it has evolved

01:47:00 --> 01:47:05
but

01:47:00 --> 01:47:08
um you know it's just been crazy

01:47:04 --> 01:47:10
so on that topic let me ask uh

01:47:07 --> 01:47:12
again there's a million technical things

01:47:09 --> 01:47:14
uh

01:47:11 --> 01:47:15
we could talk about but let me ask the

01:47:13 --> 01:47:20
absurd the old uh

01:47:14 --> 01:47:20
philosophical question about life

01:47:20 --> 01:47:24
what do you hope when you look back at

01:47:22 --> 01:47:27
your life

01:47:23 --> 01:47:28
and the people talk about you right

01:47:26 --> 01:47:31
about you

01:47:27 --> 01:47:33
500 years from now uh what do you hope

01:47:30 --> 01:47:33
your legacy is

01:47:34 --> 01:47:40
people not being afraid to take a leap

01:47:37 --> 01:47:43
of faith

01:47:39 --> 01:47:45
um i mean i you know i've got this

01:47:42 --> 01:47:47
kind of weird history of doing

01:47:44 --> 01:47:50
weird stuff and

01:47:46 --> 01:47:51
um it worked out pretty damn it worked

01:47:49 --> 01:47:53
out

01:47:50 --> 01:47:55
right and i think some of the weirder

01:47:52 --> 01:47:59
stuff that i've done

01:47:54 --> 01:48:02
um has been the coolest and some of it

01:47:58 --> 01:48:05
crashed and burned and

01:48:01 --> 01:48:07
um yeah you know i think well over half

01:48:04 --> 01:48:08
of the stuff that i've done has crashed

01:48:06 --> 01:48:10
and burned

01:48:07 --> 01:48:12
um which has occasionally been really

01:48:10 --> 01:48:16
annoying

01:48:12 --> 01:48:18
but still you kept doing it but yeah

01:48:15 --> 01:48:20
yeah and you know they're you know

01:48:17 --> 01:48:23
you even when things crash and burn you

01:48:19 --> 01:48:24
at least learn something from it by

01:48:22 --> 01:48:28
way of advice

01:48:23 --> 01:48:31
you know people developers engineers

01:48:27 --> 01:48:33
cientists are just people who are young

01:48:30 --> 01:48:35
uh to look up to you what advice would

01:48:32 --> 01:48:38
you give them

01:48:34 --> 01:48:41
how to uh how to approach their life

01:48:37 --> 01:48:42
don't be afraid of risk it's okay to do

01:48:40 --> 01:48:46
stupid things once

01:48:41 --> 01:48:48
[Laughter]

01:48:45 --> 01:48:49
maybe even a couple times you know you

01:48:47 --> 01:48:51
get

01:48:48 --> 01:48:53
a pass on the the first time or

01:48:50 --> 01:48:55
two that you do something stupid

01:48:52 --> 01:48:57
you know the third or fourth time yeah

01:48:54 --> 01:48:59
not so much

01:48:56 --> 01:48:59
um

01:48:59 --> 01:49:08
but also you know

01:49:03 --> 01:49:11
i don't know why but really early on

01:49:07 --> 01:49:15
i started to think about um

01:49:10 --> 01:49:19
ethical choices in my life

01:49:14 --> 01:49:24
and because i a big science fiction fan

01:49:18 --> 01:49:26
um i i i got to thinking about

01:49:23 --> 01:49:28
like just about every technical decision

01:49:25 --> 01:49:30
i make

01:49:27 --> 01:49:34
in terms of how do you want you know are

01:49:29 --> 01:49:36
you building blade runner or star trek

01:49:33 --> 01:49:39
which one's better which which future

01:49:35 --> 01:49:40
would you rather live in

01:49:38 --> 01:49:42
you know so what's the what's the answer

01:49:39 --> 01:49:44
to that well i would just

01:49:41 --> 01:49:46
i would sure rather live in the universe

01:49:43 --> 01:49:49
of star trek soundtrack yeah

01:49:46 --> 01:49:50
that opens up a whole topic about ai but

01:49:48 --> 01:49:53
hat's a really interesting

01:49:49 --> 01:49:55
yeah yeah yeah it's a really interesting

01:49:52 --> 01:49:57
idea so your favorite ai system would be

01:49:54 --> 01:49:59
data

01:49:56 --> 01:50:00
uh from uh from star trek my least

01:49:58 --> 01:50:04
favorite would

01:49:59 --> 01:50:05
easily be skynet yeah beautifully put i

01:50:03 --> 01:50:05
don't think there's a better way to end

01:50:04 --> 01:50:08
it

01:50:04 --> 01:50:10
james i can't say enough how much of an

01:50:07 --> 01:50:11
honor it is to meet you to talk to you

01:50:09 --> 01:50:13
thanks so much

01:50:10 --> 01:50:14
for wasting your time with me today not

01:50:12 --> 01:50:17
a waste at all

01:50:13 --> 01:50:19
thanks james all right thanks thanks for

01:50:16 --> 01:50:20
listening to this conversation with

01:50:18 --> 01:50:22
james gosling

01:50:19 --> 01:50:23
and thank you to our sponsors public

01:50:21 --> 01:50:26
goods betterhelp

01:50:22 --> 01:50:27
and expressvpn please check out these

01:50:25 --> 01:50:28
sponsors in the description to get a

01:50:26 --> 01:50:31
discount and

01:50:28 --> 01:50:32
to support this podcast if you enjoy

01:50:30 --> 01:50:34
this thing

01:50:31 --> 01:50:35
subscribe on youtube review it with 5

01:50:33 --> 01:50:38
stars on apple podcast

01:50:34 --> 01:50:40
follow on spotify support on patreon or

01:50:37 --> 01:50:41
connect with me on twitter at lex

01:50:39 --> 01:50:43
friedman

01:50:40 --> 01:50:45
d now let me leave you with some words

01:50:42 --> 01:50:47
from james gosling

01:50:44 --> 01:50:48
one of the toughest things about life is

01:50:46 --> 01:50:51
making

01:50:47 --> 01:50:52
choices thank you for listening and hope

01:50:50 --> 01:51:03
to see you

01:50:51 --> 01:51:03
next time

<!-- YOUTUBE_TRANSCRIPT_END -->
