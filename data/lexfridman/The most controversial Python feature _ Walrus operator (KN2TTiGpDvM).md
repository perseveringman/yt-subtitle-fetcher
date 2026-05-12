---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "KN2TTiGpDvM"
title: "The most controversial Python feature | Walrus operator"
video_url: "https://www.youtube.com/watch?v=KN2TTiGpDvM"
thumbnail_url: "https://i.ytimg.com/vi/KN2TTiGpDvM/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=KN2TTiGpDvM"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-07-27T22:16:02.000Z"
upload_date: "2020-07-27"
duration_seconds: 487
duration_human: "8:07"
view_count: 401975
like_count: 14785
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:24:12.139Z"
---

# The most controversial Python feature | Walrus operator

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=KN2TTiGpDvM
- video_id: KN2TTiGpDvM
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-07-27T22:16:02.000Z
- upload_date: 2020-07-27
- duration: 8:07
- view_count: 401975
- like_count: 14785
- has_subtitle: true
- language: en
- availability: public
- tags: python 3.8, pep 572, pep 20, zen of python
- categories: Science & Technology

## Description

The walrus operator := and assignment expressions, PEP 572, was opposed by majority of Python core developers, and led Guido van Rossum to step down from BDFL role.

LINKS:
PEP 572: https://www.python.org/dev/peps/pep-0572/
Zen of Python: https://www.python.org/dev/peps/pep-0020/
Vote against PEP 572: https://www.mail-archive.com/python-committers@python.org/msg05324.html

OUTLINE:
0:00 - Walrus operator
1:26 - Use cases
3:33 - Criticisms
5:59 - Guido van Rossum

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
this is the walrus operator and this

00:00:03 --> 00:00:08
the assignment expression that it

00:00:04 --> 00:00:12
enables it's been added as a feature

00:00:07 --> 00:00:14
to python 3.8 after a whole lot of drama

00:00:11 --> 00:00:16
jority of python core developers as

00:00:13 --> 00:00:19
far as i can tell were against it

00:00:15 --> 00:00:21
and the drama and toxicity over it drove

00:00:18 --> 00:00:22
guido van rossum creator of python to

00:00:20 --> 00:00:24
step

00:00:21 --> 00:00:26
down from his leadership role of

00:00:23 --> 00:00:28
benevolent dictator for life

00:00:25 --> 00:00:29
after he accepted the walrus operator as

00:00:27 --> 00:00:33
part of the

00:00:28 --> 00:00:34
pep 572 proposal so what is it

00:00:32 --> 00:00:36
first let's talk about the assignment

00:00:34 --> 00:00:39
statement

00:00:35 --> 00:00:42
he equal sign in python we can thank

00:00:38 --> 00:00:44
fortran for this i think not very good

00:00:41 --> 00:00:47
esign decision of using

00:00:43 --> 00:00:50
the equal sign for assignment

00:00:46 --> 00:00:51
so assigning in this case 42 to the

00:00:49 --> 00:00:53
variable x

00:00:50 --> 00:00:56
most programming languages use it with a

00:00:52 --> 00:00:57
few exceptions pascal uses the walrus

00:00:55 --> 00:01:00
operator

00:00:56 --> 00:01:01
for assignment and r uses a different

00:00:59 --> 00:01:03
operator

00:01:00 --> 00:01:05
this goes against the notation of

00:01:02 --> 00:01:06
mathematics what the equal sign is used

00:01:04 --> 00:01:08
to designate

00:01:05 --> 00:01:10
quality but there's a lesson here i

00:01:07 --> 00:01:12
think that even bad design decisions

00:01:09 --> 00:01:13
once accepted and once we get used to

00:01:11 --> 00:01:16
them

00:01:12 --> 00:01:17
aren't so bad it's all about consistency

00:01:15 --> 00:01:20
so the assignment expression does a

00:01:16 --> 00:01:22
little bit more it also signs

00:01:19 --> 00:01:23
42 to x performs the assignment

00:01:21 --> 00:01:25
operation

00:01:22 --> 00:01:27
but as an expression it returns the

00:01:24 --> 00:01:29
value that it assigned as well

00:01:26 --> 00:01:31
this can be useful in a lot of context

00:01:28 --> 00:01:33
let me talk about the cases where i

00:01:30 --> 00:01:35
find them particularly useful so i use

00:01:32 --> 00:01:36
regular expressions a lot as part of

00:01:34 --> 00:01:38
data science

00:01:35 --> 00:01:40
to clean up and organize data so a

00:01:37 --> 00:01:41
common piece of code you might see is

00:01:39 --> 00:01:43
you perform a

00:01:40 --> 00:01:44
regular expression match returning it to

00:01:42 --> 00:01:48
a variable like res

00:01:44 --> 00:01:50
here that contains the regular

00:01:47 --> 00:01:52
expression object if a match was found

00:01:49 --> 00:01:53
and contains none if no match was found

00:01:51 --> 00:01:55
and then you have some kind of

00:01:52 --> 00:01:57
conditional like an if statement that

00:01:54 --> 00:01:59
checks whether a match was found

00:01:56 --> 00:02:00
and if it has been found then you do

00:01:58 --> 00:02:01
something with the regular expression

00:01:59 --> 00:02:03
object

00:02:00 --> 00:02:04
in python 3.8 all that gets combined

00:02:02 --> 00:02:08
into a single line

00:02:03 --> 00:02:11
that performs the match operation

00:02:07 --> 00:02:13
assigns the result of the match to res

00:02:10 --> 00:02:15
and then check if rest contains a

00:02:12 --> 00:02:16
regular expression object a similar use

00:02:14 --> 00:02:18
case is

00:02:16 --> 00:02:20
in reading files there's a lot of ways

00:02:17 --> 00:02:22
to read a file but a lower level version

00:02:19 --> 00:02:24
there's usually a while loop then

00:02:22 --> 00:02:26
there's a read operation that's stored

00:02:23 --> 00:02:26
in the chunk variable or something like

00:02:25 --> 00:02:27
that

00:02:25 --> 00:02:30
and then there's a condition that checks

00:02:26 --> 00:02:31
whether chunk contains anything or if

00:02:29 --> 00:02:33
end of file was reached at which point

00:02:30 --> 00:02:35
you break out of the while loop

00:02:32 --> 00:02:37
if it has not been reached then you do

00:02:34 --> 00:02:39
something with the data that was fetched

00:02:36 --> 00:02:40
in python 3.8 this gets compressed into

00:02:38 --> 00:02:43
a single line

00:02:39 --> 00:02:44
that performs the read operation the

00:02:42 --> 00:02:46
assignment of the fetch data to the

00:02:43 --> 00:02:48
variable chunk and then the conditional

00:02:45 --> 00:02:50
check in the while loop

00:02:47 --> 00:02:52
of whether chunk returned any data or if

00:02:49 --> 00:02:55
the end of the file was reached

00:02:51 --> 00:02:57
to me this is elegant other use cases in

00:02:54 --> 00:02:58
list comprehensions you can share sub

00:02:56 --> 00:02:59
expressions like in the filter you can

00:02:58 --> 00:03:03
assign

00:02:58 --> 00:03:04
f of x to y and then reuse that y in the

00:03:02 --> 00:03:08
output of the comprehension

00:03:04 --> 00:03:10
you can also in a list reuse the value

00:03:07 --> 00:03:12
for example if it's expensive to compute

00:03:09 --> 00:03:14
so you can compute f of x once assign it

00:03:11 --> 00:03:15
o y and then reuse y in the rest of the

00:03:13 --> 00:03:18
list definition

00:03:14 --> 00:03:19
as a side note i don't like to use

00:03:17 --> 00:03:21
chained assignments

00:03:18 --> 00:03:22
but chain assignments have the same

00:03:20 --> 00:03:24
feature that

00:03:21 --> 00:03:26
he function f is only computed once so

00:03:23 --> 00:03:29
this particular statement here

00:03:25 --> 00:03:30
is equivalent to computing f1 assigning

00:03:28 --> 00:03:31
it to attempt variable and then

00:03:29 --> 00:03:34
assigning that temp

00:03:30 --> 00:03:36
variable to both x and y there are quite

00:03:33 --> 00:03:38
a few criticisms that are both objective

00:03:36 --> 00:03:41
and subjective

00:03:37 --> 00:03:42
that talk about the complexities of

00:03:40 --> 00:03:45
programming language design

00:03:41 --> 00:03:46
and human nature in general so first is

00:03:44 --> 00:03:48
the idea

00:03:45 --> 00:03:50
that both the equal sign and the walrus

00:03:47 --> 00:03:52
operator perform an assignment so it

00:03:49 --> 00:03:54
might be confusing to beginners

00:03:51 --> 00:03:56
i'm not sure about the history of pep

00:03:53 --> 00:03:58
572

00:03:55 --> 00:04:00
but my guess is that this criticism was

00:03:57 --> 00:04:01
more prevalent before the exception was

00:03:59 --> 00:04:02
added that assignment expressions can't

00:04:00 --> 00:04:04
be

00:04:01 --> 00:04:06
aligned stand alone by themselves

00:04:03 --> 00:04:08
without using parentheses

00:04:05 --> 00:04:10
i think this clarifies to beginners that

00:04:07 --> 00:04:12
assignment expression should not be used

00:04:09 --> 00:04:13
as an assignment statement there's a set

00:04:11 --> 00:04:15
of principles

00:04:12 --> 00:04:17
defined in pap 20 otherwise called zen

00:04:14 --> 00:04:18
of python

00:04:16 --> 00:04:20
that has some ideas to aspire to in the

00:04:18 --> 00:04:22
design of python

00:04:19 --> 00:04:23
just like guido said some of these are

00:04:21 --> 00:04:26
subjective

00:04:22 --> 00:04:28
and i think they are ideas to aspire to

00:04:25 --> 00:04:30
as opposed to perfectly implement

00:04:27 --> 00:04:32
because they're overlapping and there's

00:04:29 --> 00:04:33
a natural tension between them

00:04:31 --> 00:04:35
so first principle that's been brought

00:04:32 --> 00:04:37
up is there should be only one

00:04:34 --> 00:04:40
obvious way to do it and some people

00:04:36 --> 00:04:42
argue that the walrus operator

00:04:39 --> 00:04:44
performs an operation that already had

00:04:41 --> 00:04:45
another way to do the same exact thing

00:04:43 --> 00:04:48
i've also heard a funny kind of

00:04:44 --> 00:04:50
criticism that the equals operator

00:04:47 --> 00:04:52
worked like an assignment expression in

00:04:49 --> 00:04:54
c and it kind of sucked and see

00:04:51 --> 00:04:56
or at least was error prone so there you

00:04:54 --> 00:04:57
go you have a

00:04:55 --> 00:04:59
case study in the real world where this

00:04:56 --> 00:05:01
kind of operator being used to designate

00:04:58 --> 00:05:03
an assignment expression was

00:05:00 --> 00:05:05
error prone another then a python

00:05:02 --> 00:05:08
principle that people brought up

00:05:04 --> 00:05:08
is that simple is better than complex

00:05:07 --> 00:05:10
and

00:05:07 --> 00:05:11
while it seems that the assignment

00:05:09 --> 00:05:14
expression makes the code

00:05:10 --> 00:05:16
simpler in fact it was argued that it

00:05:13 --> 00:05:18
was only reducing white space and was in

00:05:15 --> 00:05:21
fact adding complexity or at least

00:05:17 --> 00:05:23
moving the complexity finally the

00:05:20 --> 00:05:25
criticism that applies

00:05:22 --> 00:05:27
often in programming language design is

00:05:24 --> 00:05:29
that not enough testing was done on how

00:05:26 --> 00:05:30
actual developers will use it

00:05:28 --> 00:05:33
i think that's probably the biggest

00:05:29 --> 00:05:35
challenge of programming language design

00:05:32 --> 00:05:37
and design in general is you don't know

00:05:34 --> 00:05:39
how people how thousands or millions of

00:05:36 --> 00:05:41
developers are going to use this feature

00:05:38 --> 00:05:43
once it's in the wild

00:05:40 --> 00:05:44
and how other features will interact

00:05:42 --> 00:05:47
with it when it's in the wild

00:05:43 --> 00:05:49
so this criticism is certainly true but

00:05:46 --> 00:05:51
i think it is always true

00:05:48 --> 00:05:54
my own feelings about the walrus

00:05:50 --> 00:05:57
operator is i think when used properly

00:05:53 --> 00:06:00
it's quite elegant and even beautiful

00:05:56 --> 00:06:01
but it also represents more than that to

00:05:59 --> 00:06:03
me it represents the importance of

00:06:00 --> 00:06:04
leadership in a community of smart

00:06:02 --> 00:06:07
people that disagree

00:06:03 --> 00:06:08
so this is the feature that led guido to

00:06:06 --> 00:06:10
resign

00:06:07 --> 00:06:12
and i spoke with him on the podcast that

00:06:09 --> 00:06:14
i host and i'll speak to him again

00:06:11 --> 00:06:16
i think he's one of the most brilliant

00:06:13 --> 00:06:16
language designers and programmers we

00:06:15 --> 00:06:18
have

00:06:15 --> 00:06:20
also a great leader in the software

00:06:17 --> 00:06:22
ngineer community so this is a little

00:06:19 --> 00:06:26
xcerpt from a post he made

00:06:21 --> 00:06:28
it reads now that pep 572 is done

00:06:25 --> 00:06:30
i don't ever want to have to fight so

00:06:27 --> 00:06:32
hard for a pep and find that so many

00:06:29 --> 00:06:34
people despise my decisions

00:06:31 --> 00:06:36
i would like to remove myself entirely

00:06:33 --> 00:06:38
from the decision process

00:06:35 --> 00:06:40
i'm basically giving myself a permanent

00:06:37 --> 00:06:44
vacation from being bdfl

00:06:39 --> 00:06:46
and you all will be on your own so what

00:06:43 --> 00:06:48
are you all going to do

00:06:45 --> 00:06:49
create a democracy anarchy a

00:06:47 --> 00:06:53
dictatorship

00:06:48 --> 00:06:54
a federation so to me the walrus

00:06:52 --> 00:06:56
operator represents more than just

00:06:53 --> 00:07:00
assignment expressions it

00:06:55 --> 00:07:03
represents the power of leadership to uh

00:06:59 --> 00:07:06
break through a toxic stalemate i think

00:07:02 --> 00:07:07
leaders have to make difficult decisions

00:07:05 --> 00:07:10
ometimes

00:07:06 --> 00:07:12
unpopular decisions and sometimes

00:07:09 --> 00:07:14
ones if you look at the long arc of

00:07:11 --> 00:07:18
history prove out to be

00:07:13 --> 00:07:20
bad decisions but without leadership i

00:07:17 --> 00:07:24
think we can't make progress so

00:07:19 --> 00:07:26
the messiness the chaos of democracy

00:07:23 --> 00:07:28
is that the divisiveness can be

00:07:25 --> 00:07:31
paralyzing

00:07:27 --> 00:07:32
and we need leaders to inspire us to

00:07:30 --> 00:07:36
guide us

00:07:31 --> 00:07:39
and to make difficult risky decisions

00:07:35 --> 00:07:40
o to me the walrus operator be useful

00:07:38 --> 00:07:42
for regular expressions

00:07:39 --> 00:07:44
but it will also be a reminder of the

00:07:41 --> 00:07:46
importance of leadership

00:07:43 --> 00:07:48
in the programming world and in our

00:07:45 --> 00:07:50
world in general

00:07:47 --> 00:07:51
if you enjoy these short little videos

00:07:49 --> 00:07:53
ubscribe

00:07:50 --> 00:08:00
and remember try to learn something new

00:07:52 --> 00:08:00
every day

00:08:07 --> 00:08:10
ou

<!-- YOUTUBE_TRANSCRIPT_END -->
