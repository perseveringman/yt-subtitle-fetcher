---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "kHCMQJajEA8"
title: "a16z Podcast | The End (and Beginning) of Programming"
video_url: "https://www.youtube.com/watch?v=kHCMQJajEA8"
thumbnail_url: "https://i.ytimg.com/vi/kHCMQJajEA8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=kHCMQJajEA8"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:43:20.000Z"
upload_date: "2019-01-02"
duration_seconds: 1143
duration_human: "19:03"
view_count: 301
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T14:47:15.251Z"
---

# a16z Podcast | The End (and Beginning) of Programming

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=kHCMQJajEA8
- video_id: kHCMQJajEA8
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:43:20.000Z
- upload_date: 2019-01-02
- duration: 19:03
- view_count: 301
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: open source, programming, code, developers, GitHub
- categories: Science & Technology

## Description

There are over 20 million programmers out there -- and double that, if you count everyone else coding in other ways -- but where are the next 100 million developers? How do we get to a billion developers? The answer, observes a16z general partner Peter Levine in conversation with GitHub co-founder and former CEO Chris Wanstrath (based on a Q&A recorded at our last a16z Summit event) lies in changing the very definition of a "programmer" and "programming".

It might even mean the end of code, argues Levine (who apparently loves arguing the end of things!), and the beginning of a future where data isn't just "the new oil", but one where we all become our own "oil wells". With everyone is manipulating data -- the new programming, in a sense -- expertise can be scaled (especially with new tools) so everyone gets the answers and solutions they need. So what does this mean for open source developers? CIOs and organizations that have lots of different data streams, as well as domain experts? This episode of the a16z Podcast covers all this and more, including touching briefly on what's ahead...

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
hi everyone welcome to the a 6nz podcast

00:00:02 --> 00:00:08
oday's episode is all about the end and

00:00:05 --> 00:00:10
new beginning of programming featuring

00:00:07 --> 00:00:13
uests chris wanstrath co-founder and

00:00:09 --> 00:00:14
former CEO of github and a six in c

00:00:12 --> 00:00:16
general partner Peter Levine who's on

00:00:13 --> 00:00:18
the board of and led her investment in

00:00:15 --> 00:00:20
github the conversation was recorded

00:00:17 --> 00:00:22
previously at our annual ASIC since a

00:00:19 --> 00:00:24
summit event only this Q&A turns the

00:00:21 --> 00:00:26
tables with Chris asking Peter all the

00:00:23 --> 00:00:28
questions around his thesis about the

00:00:25 --> 00:00:29
nd of programming with the glimpse

00:00:27 --> 00:00:32
ahead of what comes next

00:00:28 --> 00:00:35
hi everyone hello thank you for joining

00:00:31 --> 00:00:36
us today i'm chris by the way this is

00:00:34 --> 00:00:37
Peter you weren't if you're confused

00:00:35 --> 00:00:39
about who was who

00:00:36 --> 00:00:41
I'm the github person this is the

00:00:38 --> 00:00:44
Andreessen person but we've actually

00:00:40 --> 00:00:45
known each other since 2012 we've been

00:00:43 --> 00:00:48
working together for a long time

00:00:44 --> 00:00:50
we're ten years old and we first decided

00:00:47 --> 00:00:52
to raise investment in 2012 after we

00:00:49 --> 00:00:54
re around four years old because we

00:00:51 --> 00:00:57
wanted to branch out from our own

00:00:53 --> 00:00:59
personal networks of software developers

00:00:56 --> 00:01:00
from programmers we wanted to get into

00:00:58 --> 00:01:03
the world of business we wanted -

00:00:59 --> 00:01:05
brilliant - anyone who was interested in

00:01:02 --> 00:01:06
building software and and Driessen has

00:01:04 --> 00:01:08
been a huge part of that

00:01:05 --> 00:01:10
but Peter in particular has been there

00:01:07 --> 00:01:13
since 2012 since the very first meeting

00:01:09 --> 00:01:15
that we had so I say that not to say

00:01:12 --> 00:01:16
that Peter is this great guy because he

00:01:14 --> 00:01:18
is but to tell you that he has

00:01:15 --> 00:01:20
interviewed me so many times that I'm

00:01:17 --> 00:01:23
very excited to interview him for once

00:01:19 --> 00:01:25
so this is a big moment for me I come

00:01:22 --> 00:01:29
from this world of really product

00:01:24 --> 00:01:30
oriented consumer focus software

00:01:28 --> 00:01:32
developers building things for other

00:01:29 --> 00:01:35
software developers and peter has helped

00:01:31 --> 00:01:36
as a software developer himself me and

00:01:34 --> 00:01:38
the company really expand what we're

00:01:36 --> 00:01:40
thinking in terms of customers and in

00:01:37 --> 00:01:43
terms of you know our approach to

00:01:39 --> 00:01:46
business so this was an opportunity for

00:01:42 --> 00:01:48
us I feel to talk about some of the

00:01:45 --> 00:01:49
things we agree on in terms of the next

00:01:47 --> 00:01:51
en years and some of the things we

00:01:48 --> 00:01:53
don't agree on I don't think either of

00:01:50 --> 00:01:54
us knows the truth of what's gonna

00:01:52 --> 00:01:56
happen in ten years from now but I think

00:01:53 --> 00:01:58
it's somewhere in the middle I have to

00:01:55 --> 00:02:01
ask one question you know we're here to

00:01:57 --> 00:02:03
talk about the the beginning and the end

00:02:00 --> 00:02:04
of programming how many programmers are

00:02:02 --> 00:02:06
out there in the world we think there

00:02:03 --> 00:02:08
are 20 million people employed that are

00:02:05 --> 00:02:10
writing code but the idea of what a

00:02:07 --> 00:02:11
programmer is someone who writes

00:02:09 --> 00:02:13
oftware in their free time or even

00:02:10 --> 00:02:14
professionally that's not counted in a

00:02:12 --> 00:02:16
program

00:02:13 --> 00:02:18
it's way more than 20 million it's way

00:02:15 --> 00:02:20
more than 40 million it's growing every

00:02:17 --> 00:02:22
day and I think what that means

00:02:19 --> 00:02:24
isn't that the reporters are wrong or

00:02:21 --> 00:02:25
Gartner is wrong or read monk is wrong I

00:02:23 --> 00:02:28
respect this firms a lot I think really

00:02:24 --> 00:02:30
what that means is the term and the sort

00:02:27 --> 00:02:33
of definition is evolving and changing

00:02:29 --> 00:02:34
we also see our customers people that

00:02:32 --> 00:02:36
used to use JIRA people that are in the

00:02:33 --> 00:02:38
marketing team that want to update just

00:02:35 --> 00:02:39
some copy on a website they're

00:02:37 --> 00:02:41
increasingly moving to something like

00:02:38 --> 00:02:43
github and they're they're also giving

00:02:40 --> 00:02:45
us feature requests specifically for

00:02:42 --> 00:02:47
these teams of people that are not the

00:02:44 --> 00:02:50
core you know sort of code collaborate

00:02:46 --> 00:02:52
ship developer pipeline so I think the

00:02:49 --> 00:02:55
answer to question is 20 million

00:02:51 --> 00:02:58
full-time 40 hours plus developers but

00:02:54 --> 00:03:00
don't be fooled by that number there are

00:02:57 --> 00:03:02
way more people who have their fingers

00:02:59 --> 00:03:05
in development than the numbers then

00:03:01 --> 00:03:06
github can even tell and it's growing so

00:03:04 --> 00:03:07
the more you can open that up I think it

00:03:05 --> 00:03:09
he better it is for everyone so anyway

00:03:06 --> 00:03:12
what I want to talk about though is not

00:03:08 --> 00:03:14
20 million or 40 million developers we

00:03:11 --> 00:03:17
talk at github a lot about the next

00:03:13 --> 00:03:18
hundred million developers so I what do

00:03:16 --> 00:03:21
we need to do to ensure people in the

00:03:17 --> 00:03:22
future can become developers for me it's

00:03:20 --> 00:03:24
a lot more of how do we lower the

00:03:21 --> 00:03:26
barrier to entry how do we get more

00:03:23 --> 00:03:28
people on board how do we make

00:03:25 --> 00:03:30
development this thing that a billion

00:03:27 --> 00:03:32
people want to use I think for Peter he

00:03:29 --> 00:03:34
sees it almost I don't put words in his

00:03:31 --> 00:03:36
mouth sees a different route to the next

00:03:33 --> 00:03:39
billion developers and I think you see

00:03:35 --> 00:03:41
it more from data than simplifying tools

00:03:38 --> 00:03:43
making tools easier lowering the bread

00:03:40 --> 00:03:47
entries so originally I was thinking

00:03:42 --> 00:03:49
about this talk as titling it the end of

00:03:46 --> 00:03:51
software development but then again

00:03:48 --> 00:03:53
maybe a little much so it's really how

00:03:50 --> 00:03:56
do we go from 20 or 30 million

00:03:52 --> 00:03:58
developers to a billion developers so in

00:03:55 --> 00:04:00
order to get to a billion developers I

00:03:57 --> 00:04:02
want to change the definition of what a

00:03:59 --> 00:04:05
developer and what a programmer is right

00:04:01 --> 00:04:08
so when we think about sort of data as

00:04:04 --> 00:04:11
the input into a system we often think

00:04:07 --> 00:04:13
about right now like you know facial

00:04:10 --> 00:04:16
recognition is easier done better done

00:04:12 --> 00:04:16
by a computer than done by a human right

00:04:15 --> 00:04:19
now

00:04:15 --> 00:04:22
and I started to think about how data as

00:04:18 --> 00:04:25
an input to a system could actually

00:04:21 --> 00:04:27
change the world of programming such

00:04:24 --> 00:04:29
that everyone becomes a programmer the

00:04:26 --> 00:04:32
reason why I think that programming ends

00:04:28 --> 00:04:34
as we currently know it is the

00:04:31 --> 00:04:37
declarative language is that we've used

00:04:33 --> 00:04:39
since the beginning of time beginning of

00:04:36 --> 00:04:42
compute time has all been based on

00:04:38 --> 00:04:43
if-then-else if this do that do this

00:04:41 --> 00:04:47
right and it gets very complicated but

00:04:42 --> 00:04:49
it's all if-then-else in basically as a

00:04:46 --> 00:04:51
programmer you have to know what you're

00:04:48 --> 00:04:54
asking for you tell the computer what

00:04:50 --> 00:04:57
you want it to do as opposed to the

00:04:53 --> 00:05:00
reverse is I want to look at data and I

00:04:56 --> 00:05:02
want to instruct the outcome as opposed

00:04:59 --> 00:05:05
to a priori knowing what the input might

00:05:01 --> 00:05:09
be so let me give you an example a

00:05:04 --> 00:05:12
football coach becomes a programmer and

00:05:08 --> 00:05:14
the one had a program a football game

00:05:11 --> 00:05:17
and said quarterback throws the ball to

00:05:13 --> 00:05:18
the receiver if this then that and these

00:05:16 --> 00:05:20
guys go do this

00:05:17 --> 00:05:23
it's an indeterminant problem there's

00:05:19 --> 00:05:27
too many moving pieces like the program

00:05:22 --> 00:05:29
would be very very complex to just run

00:05:26 --> 00:05:31
one play okay just like if you were

00:05:28 --> 00:05:33
doing facial recognition or voice

00:05:30 --> 00:05:34
recognition is very complicated to do

00:05:32 --> 00:05:39
if-then-else

00:05:33 --> 00:05:40
on facial recognition so imagine now we

00:05:38 --> 00:05:43
have all the tools to go and do this

00:05:40 --> 00:05:45
imagine that through repetitive looking

00:05:42 --> 00:05:48
at football plays the system actually

00:05:44 --> 00:05:51
learns and it learns what the right

00:05:47 --> 00:05:52
movements are and all of that and then

00:05:50 --> 00:05:55
what does the coach do the coach comes

00:05:51 --> 00:05:56
in and optimizes that model to say you

00:05:54 --> 00:05:57
know what the system got it a little

00:05:55 --> 00:05:59
wrong here

00:05:56 --> 00:06:02
the quarterback should move ten yards

00:05:58 --> 00:06:05
back whatever and the coach in

00:06:01 --> 00:06:07
conjunction with the system actually is

00:06:04 --> 00:06:11
a programmer because the coach actually

00:06:06 --> 00:06:13
informs the data and they become a in my

00:06:10 --> 00:06:15
new definition of the world a programmer

00:06:12 --> 00:06:17
and you can take this now across any

00:06:14 --> 00:06:20
field whether you're a lawyer an

00:06:16 --> 00:06:22
accountant a salesperson and we can

00:06:19 --> 00:06:25
watch the best behaviors we can watch

00:06:21 --> 00:06:27
the best behaviors and best human

00:06:24 --> 00:06:28
interactions let's say I'm trying to fix

00:06:26 --> 00:06:29
a transmission well I can wear goggles

00:06:27 --> 00:06:31
and I can work

00:06:28 --> 00:06:34
toward it and I have the best expert

00:06:30 --> 00:06:36
going and fixing a transmission and that

00:06:33 --> 00:06:38
person would then go back to that data

00:06:35 --> 00:06:40
nd of course we need the right tools so

00:06:37 --> 00:06:42
what are the tools for us to go

00:06:39 --> 00:06:45
manipulate this data won't be a

00:06:41 --> 00:06:48
spreadsheet it will be some visual

00:06:44 --> 00:06:51
interface where I as an auto mechanic

00:06:47 --> 00:06:53
an go in and modify the output of what

00:06:50 --> 00:06:56
he system is doing and in effect we

00:06:52 --> 00:06:58
create a set of expert rules based on

00:06:55 --> 00:07:00
what the human does and then imagine

00:06:57 --> 00:07:02
that we go roll out those rules to

00:06:59 --> 00:07:04
everyone else who has to go fix

00:07:01 --> 00:07:06
transmissions or become a salesperson or

00:07:03 --> 00:07:09
a lawyer or an accountant or football

00:07:05 --> 00:07:12
coaches and in my mind by using data and

00:07:08 --> 00:07:15
having folks optimize the data they

00:07:11 --> 00:07:17
actually become the next generation of

00:07:14 --> 00:07:19
programmers not trained as programmers

00:07:16 --> 00:07:21
they won't even know the program really

00:07:18 --> 00:07:24
is they're all manipulating data in the

00:07:20 --> 00:07:27
context by which they are familiar with

00:07:23 --> 00:07:29
eir own expertise so that's what I

00:07:26 --> 00:07:31
think happens well so I guess my

00:07:28 --> 00:07:33
question there is my father is not a

00:07:30 --> 00:07:36
computer guy but very much a car guy my

00:07:32 --> 00:07:39
father too he loved cars he works on

00:07:35 --> 00:07:41
them and if I can give him all the

00:07:38 --> 00:07:43
information at his fingertips to fix the

00:07:40 --> 00:07:45
car I think it makes his journey much

00:07:42 --> 00:07:47
better but if I were to give him all the

00:07:44 --> 00:07:49
information available to fix the

00:07:46 --> 00:07:50
diagnostic program that was running on

00:07:48 --> 00:07:52
his car

00:07:49 --> 00:07:54
you know let's say he has all the data

00:07:51 --> 00:07:57
vailable to him is he able to actually

00:07:53 --> 00:07:58
make those changes so one side of it is

00:07:56 --> 00:08:00
yes I have all this data available to me

00:07:57 --> 00:08:02
the other side of it I think is do I

00:07:59 --> 00:08:03
have the tools to make these changes yes

00:08:01 --> 00:08:06
I can understand but can I actually

00:08:02 --> 00:08:09
affect the world is there a second sort

00:08:05 --> 00:08:11
of industry or a second tier of you know

00:08:08 --> 00:08:13
data becomes the most important thing

00:08:10 --> 00:08:15
that says yes now everyone has access to

00:08:12 --> 00:08:16
what's going on but how do we actually

00:08:14 --> 00:08:17
affect that or do you see those things

00:08:15 --> 00:08:19
being intertwined

00:08:16 --> 00:08:20
I mean I think it's very intertwined you

00:08:18 --> 00:08:23
know your father I've actually met your

00:08:19 --> 00:08:26
father he brought ice cream to a party

00:08:22 --> 00:08:27
he didn't eat her ice cream one time if

00:08:25 --> 00:08:29
you ever from Cincinnati please go to

00:08:26 --> 00:08:30
Graeter's ice cream it's the world's

00:08:28 --> 00:08:34
best ice cream it's worth bringing to

00:08:29 --> 00:08:37
California I mean imagine your dad is

00:08:33 --> 00:08:39
fixing some part of the car and that has

00:08:36 --> 00:08:41
been done by someone else and imagine if

00:08:38 --> 00:08:44
somebody else has optimized effectively

00:08:40 --> 00:08:46
created the exact precise user manual

00:08:43 --> 00:08:48
for how to fix a particular part of the

00:08:45 --> 00:08:50
car imagine if your dad now was wearing

00:08:47 --> 00:08:55
oggles and it looked at what he was

00:08:49 --> 00:08:57
doing and the system was helping him to

00:08:54 --> 00:08:59
do a better job in fixing certain parts

00:08:56 --> 00:09:02
of the car you take the experts who are

00:08:58 --> 00:09:04
the programmers in their field and they

00:09:01 --> 00:09:06
then push that knowledge off to everyone

00:09:03 --> 00:09:07
lse and maybe your dad's an expert in

00:09:05 --> 00:09:09
certain parts of this and he can

00:09:06 --> 00:09:11
participate in it it's the open source

00:09:08 --> 00:09:13
of data right everybody manipulating

00:09:10 --> 00:09:15
this to get better solutions so then for

00:09:12 --> 00:09:18
the current open source developers

00:09:14 --> 00:09:21
people that today spend their time

00:09:17 --> 00:09:23
fixing bugs sort of trying to make this

00:09:20 --> 00:09:25
piece of software better not because

00:09:22 --> 00:09:26
they're making money off of it because

00:09:24 --> 00:09:28
they want to become a developer who has

00:09:25 --> 00:09:30
this name what does this do for them

00:09:27 --> 00:09:33
does this make them become data

00:09:29 --> 00:09:35
scientists the current crop of

00:09:32 --> 00:09:37
open-source developers or do they now

00:09:34 --> 00:09:39
partner more with data scientists in the

00:09:36 --> 00:09:41
future you know I think that data

00:09:38 --> 00:09:44
science will become the new academic

00:09:40 --> 00:09:46
approach in computer science it'll be

00:09:43 --> 00:09:49
less coding and more about data science

00:09:45 --> 00:09:51
new algorithms for data science new

00:09:48 --> 00:09:54
approaches to understand the world

00:09:50 --> 00:09:57
around us so you know we can call this

00:09:53 --> 00:10:00
oftware 2.0 which is moving from code

00:09:56 --> 00:10:02
to data and I think many people will

00:09:59 --> 00:10:05
need to literally upgrade their skill

00:10:01 --> 00:10:07
sets to know much more about data than

00:10:04 --> 00:10:10
they will about code my opinion don't

00:10:06 --> 00:10:12
people just suck at interpreting data so

00:10:09 --> 00:10:14
like I think about fake news I think

00:10:11 --> 00:10:16
about like the lies that we all see

00:10:13 --> 00:10:17
going to the internet and I think about

00:10:15 --> 00:10:19
programming like if we're trying to get

00:10:16 --> 00:10:20
a billion developers don't we feel like

00:10:18 --> 00:10:23
people in general including myself are

00:10:20 --> 00:10:25
bad at data but okay at like telling

00:10:22 --> 00:10:27
people and machines what we want

00:10:24 --> 00:10:28
so let me parse the question in a couple

00:10:26 --> 00:10:31
of ways when we know what we're looking

00:10:27 --> 00:10:34
for we're actually very good at that I

00:10:30 --> 00:10:36
can write a query and say look for you

00:10:33 --> 00:10:38
know all numbers you know greater than

00:10:35 --> 00:10:40
10 when you know what you're looking for

00:10:37 --> 00:10:43
we're actually very good at that what

00:10:39 --> 00:10:44
we're not good at is looking for things

00:10:42 --> 00:10:48
that we don't know that we're not

00:10:43 --> 00:10:49
looking for right and so I think what's

00:10:47 --> 00:10:51
going to happen and we're already

00:10:48 --> 00:10:53
starting to see this is

00:10:50 --> 00:10:58
ystems in the future will actually help

00:10:52 --> 00:11:00
us see data in ways that we can't see it

00:10:57 --> 00:11:02
right now so let me give you an example

00:10:59 --> 00:11:04
a real example there's a company that

00:11:01 --> 00:11:07
select data off at traffic signals and

00:11:03 --> 00:11:10
to see how many red and green lights

00:11:06 --> 00:11:13
that occur in a traffic environment and

00:11:09 --> 00:11:14
the flow of traffic that's the input so

00:11:12 --> 00:11:18
that I would argue we could code that

00:11:13 --> 00:11:20
but the system actually uncovered the

00:11:17 --> 00:11:23
fact that there's a correlation between

00:11:19 --> 00:11:24
the lights not working and the

00:11:22 --> 00:11:27
maintenance schedule for the light

00:11:23 --> 00:11:31
itself that was something that the human

00:11:26 --> 00:11:32
in your sense right terrible at finding

00:11:30 --> 00:11:34
things that we don't know that we're not

00:11:31 --> 00:11:37
looking for because you don't know but a

00:11:33 --> 00:11:39
computer through looking at data and

00:11:36 --> 00:11:42
looking at patterns actually help to

00:11:38 --> 00:11:44
determine in that situation a new thing

00:11:41 --> 00:11:45
that the human wasn't looking for it to

00:11:43 --> 00:11:48
begin with and that's where I would

00:11:44 --> 00:11:50
argue that code breaks down code will

00:11:47 --> 00:11:52
say the number of times that you know

00:11:49 --> 00:11:55
the current code if light goes on

00:11:51 --> 00:11:56
counter goes up by one right but if

00:11:54 --> 00:11:58
you're not looking at a maintenance

00:11:55 --> 00:11:59
schedule there or whatever how would you

00:11:57 --> 00:12:01
ever know to look at a maintenance

00:11:58 --> 00:12:04
schedule right so that's an example of

00:12:00 --> 00:12:07
kind of taking correlated data and using

00:12:03 --> 00:12:10
that through a machine that I believe

00:12:06 --> 00:12:13
will start to really you know move us

00:12:09 --> 00:12:15
again from this notion of intent you

00:12:12 --> 00:12:18
know find something to this notion of

00:12:14 --> 00:12:19
using data to find correlations that

00:12:17 --> 00:12:22
actually we may not have been looking

00:12:18 --> 00:12:24
for I mean to some people the fake news

00:12:21 --> 00:12:26
is real news yeah that's right a more

00:12:23 --> 00:12:27
arbitrary but certainly you know the

00:12:25 --> 00:12:30
input of data I believe is going to be a

00:12:26 --> 00:12:32
super big deal so then I guess part of

00:12:29 --> 00:12:33
that is one of the things that we first

00:12:31 --> 00:12:35
alked about ever when we met was that

00:12:32 --> 00:12:37
you worked on x11

00:12:34 --> 00:12:39
the X Window System yes the UNIX

00:12:36 --> 00:12:41
windowing system X Windows so I've used

00:12:38 --> 00:12:44
that for a long time it came out of the

00:12:40 --> 00:12:46
80s one of the big first in my opinion

00:12:43 --> 00:12:49
successful free software projects that

00:12:45 --> 00:12:51
brought sort of this idea of open source

00:12:48 --> 00:12:52
and free software to consumers and it

00:12:50 --> 00:12:54
wasn't the best but it was there and it

00:12:51 --> 00:12:57
was an option and it was great so I

00:12:53 --> 00:12:58
think that is all to say that there was

00:12:56 --> 00:13:01
once a period of time where everyone

00:12:57 --> 00:13:03
believed that codes intrinsic

00:13:00 --> 00:13:05
data was in being kept private and there

00:13:02 --> 00:13:07
was there was value in

00:13:04 --> 00:13:09
and like if I add this piece of code and

00:13:06 --> 00:13:12
you didn't I had something that was

00:13:08 --> 00:13:14
worth something and maybe you were in a

00:13:11 --> 00:13:16
position where while the industry felt

00:13:13 --> 00:13:18
hat way you know some of the hippies

00:13:15 --> 00:13:19
that you're not wearing sandals today

00:13:17 --> 00:13:22
but some of the hippies you either went

00:13:18 --> 00:13:24
o war are you were t-shirt yeah shoes

00:13:21 --> 00:13:26
in the 80s where you were hanging out

00:13:23 --> 00:13:27
hey were really into free software

00:13:25 --> 00:13:29
before a lot of us I think realized that

00:13:26 --> 00:13:30
here's something real there it's not

00:13:28 --> 00:13:32
just about hippies it's about there's a

00:13:29 --> 00:13:34
practical value do you feel like data's

00:13:31 --> 00:13:36
in a similar spot it's our valuable

00:13:33 --> 00:13:38
asset there's intrinsic value into

00:13:35 --> 00:13:40
keeping data secret right we once felt

00:13:37 --> 00:13:42
hat about code I don't know if I think

00:13:39 --> 00:13:45
that data being open is going to be

00:13:41 --> 00:13:46
something that works but I think the lie

00:13:44 --> 00:13:48
people once felt that about code yeah do

00:13:45 --> 00:13:50
you think that we're gonna want to pay

00:13:47 --> 00:13:52
tomorrow pin yes I think we do you know

00:13:49 --> 00:13:54
there's this phrase out there data is

00:13:51 --> 00:13:57
the new oil right and I have this vision

00:13:53 --> 00:14:01
that we all become our own oil well and

00:13:56 --> 00:14:04
we are going to dispense data and there

00:14:00 --> 00:14:06
are now ways where people can get paid

00:14:03 --> 00:14:09
for producing data right so instead of

00:14:05 --> 00:14:12
contributing my data to some centralized

00:14:08 --> 00:14:15
place I can actually monetize that data

00:14:11 --> 00:14:17
my data to the extent that I want to or

00:14:14 --> 00:14:19
I can contribute it examples might be if

00:14:16 --> 00:14:21
I have a camera on the front of my car

00:14:18 --> 00:14:24
and I'm going through streets and I'm

00:14:20 --> 00:14:28
recording visual information I can

00:14:23 --> 00:14:29
choose to maybe offer that to some

00:14:27 --> 00:14:32
service that's going to make maps better

00:14:28 --> 00:14:34
but maybe I get paid for that or if I

00:14:31 --> 00:14:37
have let's say our talk here if somebody

00:14:33 --> 00:14:39
finds it valuable maybe we get paid for

00:14:36 --> 00:14:42
it right and so I think there will be a

00:14:38 --> 00:14:45
lot of cases where data becomes the

00:14:41 --> 00:14:47
purview of each individual and we will

00:14:44 --> 00:14:49
choose how we want to go dispense it and

00:14:46 --> 00:14:52
I think in certain cases our data and

00:14:48 --> 00:14:54
what we produce will become valuable to

00:14:51 --> 00:14:57
consumers and there'll be a market for

00:14:53 --> 00:15:00
data and rather than all our data going

00:14:57 --> 00:15:03
to centralized companies that are you

00:14:59 --> 00:15:05
know hidden inside of organizations we

00:15:02 --> 00:15:07
all will have control over our data and

00:15:04 --> 00:15:09
I think to have a market and to have

00:15:06 --> 00:15:11
conomics around that data is really

00:15:08 --> 00:15:13
interesting so I think that's kind of

00:15:10 --> 00:15:14
the way it takes shape in terms of what

00:15:12 --> 00:15:16
happens today

00:15:13 --> 00:15:19
and how people own it and control it

00:15:15 --> 00:15:21
yeah that definitely resonates with me

00:15:18 --> 00:15:24
I've seen a lot of history repeats

00:15:20 --> 00:15:26
itself but the timescale is always what

00:15:23 --> 00:15:28
you know is the most different to me you

00:15:25 --> 00:15:32
know free software really started in

00:15:27 --> 00:15:33
80's j-dub came out in 2007 and for me

00:15:31 --> 00:15:34
github was very much influenced by the

00:15:32 --> 00:15:37
open source movement but I think a lot

00:15:33 --> 00:15:38
of people open-source didn't become part

00:15:36 --> 00:15:41
of their vocabulary until maybe later

00:15:37 --> 00:15:43
thirty years after free software so with

00:15:40 --> 00:15:45
data do you see a similar timeline I

00:15:42 --> 00:15:47
mean in some ways it's already happening

00:15:44 --> 00:15:50
there are companies out there who look

00:15:46 --> 00:15:52
at salesforce productivity looking at

00:15:49 --> 00:15:55
he most productive salespeople in an

00:15:51 --> 00:15:57
organization learn what they do modify

00:15:54 --> 00:16:00
that and then go give that information

00:15:56 --> 00:16:03
to so where everyone gets assisted by

00:15:59 --> 00:16:05
this new technology a lot of that stuff

00:16:02 --> 00:16:09
is starting to happen we may not think

00:16:04 --> 00:16:12
about it as the data economy or this

00:16:08 --> 00:16:14
change in programming but it is starting

00:16:11 --> 00:16:17
to happen as we have these new models

00:16:13 --> 00:16:19
where we can process massive amounts of

00:16:16 --> 00:16:22
information and to where the outcomes

00:16:18 --> 00:16:26
really become I'd say digital assistance

00:16:21 --> 00:16:27
to humans to actually make them better

00:16:25 --> 00:16:29
whether it's the football player the

00:16:26 --> 00:16:32
auto mechanic the accountant the lawyer

00:16:28 --> 00:16:35
or the salesperson each of those can be

00:16:31 --> 00:16:37
tter based on observing the experts in

00:16:34 --> 00:16:38
that field and I would argue with

00:16:36 --> 00:16:41
starting to happen and sure it'll take a

00:16:37 --> 00:16:43
long time and all that but I definitely

00:16:40 --> 00:16:45
see it so my final question is hopefully

00:16:42 --> 00:16:47
relevant of people here it seems like

00:16:44 --> 00:16:49
this is starting to happen like your

00:16:46 --> 00:16:52
blog post I think from a year ago on

00:16:48 --> 00:16:54
edge computing yeah you felt it was

00:16:51 --> 00:16:56
tarting to happen so maybe to you a lot

00:16:53 --> 00:16:58
of what's occurring in this conversation

00:16:55 --> 00:17:00
feels obvious but to others it's very

00:16:57 --> 00:17:02
new what should I think about if I'm

00:16:59 --> 00:17:03
like a CIO or any executive at a company

00:17:01 --> 00:17:04
and I'm hearing this is anything I

00:17:02 --> 00:17:06
should do differently in the next years

00:17:03 --> 00:17:08
I think I should think about or is it

00:17:05 --> 00:17:11
just like trust my team because this is

00:17:07 --> 00:17:13
happy you know in all of these sort of

00:17:10 --> 00:17:15
my end of things that I've been thinking

00:17:12 --> 00:17:17
about whether it was the end of cloud

00:17:14 --> 00:17:18
computing last year the end of

00:17:16 --> 00:17:21
programming you know want to hear

00:17:17 --> 00:17:23
everything right yeah but it starts a

00:17:20 --> 00:17:26
new thing and what has been interesting

00:17:22 --> 00:17:28
is when you start out with these I like

00:17:25 --> 00:17:30
when I start to talk about this

00:17:27 --> 00:17:32
literally everyone looks at me because

00:17:29 --> 00:17:34
I've been through this now like I'm

00:17:31 --> 00:17:37
crazy like are you nuts program is gonna

00:17:33 --> 00:17:39
be around forever and and that and as I

00:17:36 --> 00:17:41
start to think about it in my own mind

00:17:38 --> 00:17:44
and put some concrete examples and bring

00:17:40 --> 00:17:46
things together it actually starts to

00:17:43 --> 00:17:48
make sense even to me I mean I thought

00:17:45 --> 00:17:50
about this I couldn't really describe it

00:17:47 --> 00:17:51
now you know kind of over time you get

00:17:49 --> 00:17:53
better at sort of thinking about the

00:17:50 --> 00:17:57
xamples in that so what I would leave

00:17:52 --> 00:18:00
for all of you is what does it mean in

00:17:56 --> 00:18:02
your organization to utilize data I mean

00:17:59 --> 00:18:05
I gave the Salesforce example that's a

00:18:01 --> 00:18:08
very real example so where else can we

00:18:04 --> 00:18:11
model the experts in your environment

00:18:07 --> 00:18:14
where can we take those you know kind of

00:18:10 --> 00:18:17
that data and then how do we provide you

00:18:13 --> 00:18:20
know what framework and what rules would

00:18:16 --> 00:18:22
you go and look at as CIOs on where you

00:18:19 --> 00:18:24
might optimize things based on people

00:18:21 --> 00:18:26
doing expert work in your environment

00:18:23 --> 00:18:28
and I will bet you if you start just

00:18:25 --> 00:18:31
hinking about this because I did I went

00:18:27 --> 00:18:33
hrough this exact exercise you will

00:18:30 --> 00:18:36
realize that every function within your

00:18:33 --> 00:18:39
company has the opportunity to be

00:18:35 --> 00:18:41
data-driven has the opportunity to be

00:18:38 --> 00:18:43
iterative and cognitive based on the

00:18:40 --> 00:18:46
work that we're all doing to try to

00:18:42 --> 00:18:47
ptimize things and once you start

00:18:45 --> 00:18:50
hinking about this then it becomes

00:18:46 --> 00:18:52
reality and so I'll leave you with that

00:18:49 --> 00:18:55
and next year we can revisit this I

00:18:51 --> 00:18:57
guarantee you it will start to

00:18:54 --> 00:18:59
proliferate through the industry in the

00:18:56 --> 00:19:00
same way that some of the other things

00:18:58 --> 00:19:01
are awesome well thank you so much

00:18:59 --> 00:19:05
computer thanks everyone

00:19:00 --> 00:19:05
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
