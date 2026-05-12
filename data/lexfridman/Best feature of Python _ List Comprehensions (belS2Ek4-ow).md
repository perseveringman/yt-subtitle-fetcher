---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "belS2Ek4-ow"
title: "Best feature of Python | List Comprehensions"
video_url: "https://www.youtube.com/watch?v=belS2Ek4-ow"
thumbnail_url: "https://i.ytimg.com/vi/belS2Ek4-ow/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=belS2Ek4-ow"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-08-07T15:54:46.000Z"
upload_date: "2020-08-07"
duration_seconds: 319
duration_human: "5:19"
view_count: 108105
like_count: 5917
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:23:22.094Z"
---

# Best feature of Python | List Comprehensions

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=belS2Ek4-ow
- video_id: belS2Ek4-ow
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-08-07T15:54:46.000Z
- upload_date: 2020-08-07
- duration: 5:19
- view_count: 108105
- like_count: 5917
- has_subtitle: true
- language: en
- availability: public
- tags: python, python 2, python 3, python tutorial, python beginner, python tips, python lex
- categories: Science & Technology

## Description

Python has lots of amazing features, but to me, list comprehensions are #1.

Support this channel by supporting our sponsors.
Click links, get discount, buy stuff:
Eight Sleep: https://eightsleep.com/lex

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
this is a list comprehension that allows

00:00:02 --> 00:00:06
you to define one list in terms of

00:00:04 --> 00:00:09
another list

00:00:05 --> 00:00:10
and is reminiscent of set notation from

00:00:08 --> 00:00:12
athematics

00:00:09 --> 00:00:13
the elegance simplicity and power of

00:00:11 --> 00:00:16
this notation

00:00:12 --> 00:00:17
makes it in my opinion the best feature

00:00:15 --> 00:00:18
of python

00:00:16 --> 00:00:20
ow what does it mean to be a best

00:00:17 --> 00:00:22
feature of a programming language

00:00:19 --> 00:00:23
to me it's a feature that makes you fall

00:00:21 --> 00:00:26
in love with the language

00:00:22 --> 00:00:27
and the feature that makes you enjoy

00:00:25 --> 00:00:28
programming in the language for many

00:00:26 --> 00:00:31
ears

00:00:27 --> 00:00:35
o the basic notation is a for loop over

00:00:30 --> 00:00:37
some input list nums and a function like

00:00:34 --> 00:00:40
f of x that computes something

00:00:36 --> 00:00:41
for each element x in nums in addition

00:00:39 --> 00:00:45
there's a

00:00:40 --> 00:00:47
filter conditional like if g of x

00:00:44 --> 00:00:49
some function some expression that

00:00:46 --> 00:00:51
filters the elements of nums

00:00:48 --> 00:00:52
and only keeps the ones that pass this

00:00:50 --> 00:00:54
conditional

00:00:51 --> 00:00:55
et's look at an example input list nums

00:00:54 --> 00:00:58
one two three

00:00:54 --> 00:00:59
four the list comprehension squares each

00:00:57 --> 00:01:02
element of nums

00:00:58 --> 00:01:04
o x times x for x in nums and so that

00:01:01 --> 00:01:07
creates a list that contains 1 4

00:01:03 --> 00:01:09
9 and 16. simple beautiful

00:01:06 --> 00:01:12
and now to add a filter to keep just the

00:01:08 --> 00:01:14
ven numbers we can add into the

00:01:11 --> 00:01:17
filter conditional the list

00:01:13 --> 00:01:18
comprehension x modulo two equals zero

00:01:16 --> 00:01:20
and then the result is the squaring of

00:01:17 --> 00:01:23
the elements that pass the filter

00:01:19 --> 00:01:25
which is four and sixteen now some would

00:01:22 --> 00:01:27
argue that you can achieve the same kind

00:01:24 --> 00:01:29
of results with for loops

00:01:26 --> 00:01:31
or more direct comparison is the map and

00:01:28 --> 00:01:33
filter functions which are

00:01:30 --> 00:01:34
also available in python so what would

00:01:32 --> 00:01:37
that look like

00:01:33 --> 00:01:38
to square each element in the list you

00:01:36 --> 00:01:40
could have a lambda function that does

00:01:37 --> 00:01:43
the squaring and a map

00:01:39 --> 00:01:44
that applies that lambda function to

00:01:42 --> 00:01:46
each element of nums

00:01:43 --> 00:01:48
that's the second line the code here and

00:01:45 --> 00:01:51
the third line

00:01:47 --> 00:01:51
you can add a filter to that so first

00:01:50 --> 00:01:53
apply

00:01:50 --> 00:01:56
a filter with a lambda function that

00:01:52 --> 00:01:58
does the module two equals zero

00:01:55 --> 00:02:00
conditional and then on top of that on

00:01:57 --> 00:02:02
the elements that pass the filter you

00:01:59 --> 00:02:05
again do the map function of the lambda

00:02:02 --> 00:02:06
that squares each element now i believe

00:02:04 --> 00:02:09
this is also

00:02:06 --> 00:02:10
beautiful and powerful notation but to

00:02:08 --> 00:02:13
me it's not

00:02:09 --> 00:02:16
nearly as elegant pythonic and readable

00:02:12 --> 00:02:18
as the list comprehension notation

00:02:15 --> 00:02:20
i already did a video on the most

00:02:17 --> 00:02:22
controversial

00:02:19 --> 00:02:23
python feature which in my opinion is

00:02:21 --> 00:02:25
the wallers operator

00:02:22 --> 00:02:27
it comes into play nicely with list

00:02:24 --> 00:02:29
comprehensions now if we take some

00:02:26 --> 00:02:31
difficult to compute function like

00:02:28 --> 00:02:33
fibo here which computes the nth element

00:02:30 --> 00:02:36
of the fibonacci sequence

00:02:32 --> 00:02:38
the one line ternary operator

00:02:35 --> 00:02:41
implementation of the function

00:02:37 --> 00:02:43
written by me untested i'll leave it to

00:02:40 --> 00:02:44
you as homework to test if this actually

00:02:42 --> 00:02:46
works

00:02:43 --> 00:02:48
and i threw it in there to give a shout

00:02:45 --> 00:02:51
to two other things i enjoy

00:02:47 --> 00:02:52
which is recursion and the ternary

00:02:50 --> 00:02:55
operator

00:02:51 --> 00:02:58
the if else notation of which in python

00:02:54 --> 00:02:59
i think is another beautiful design

00:02:57 --> 00:03:01
choice

00:02:58 --> 00:03:03
that makes an otherwise cryptic looking

00:03:00 --> 00:03:05
ternary operator

00:03:02 --> 00:03:07
actually readable to our human brains

00:03:04 --> 00:03:08
and so if we take then

00:03:06 --> 00:03:10
another definition of numbs that goes

00:03:07 --> 00:03:13
from one to six

00:03:09 --> 00:03:15
we can create a basic list comprehension

00:03:12 --> 00:03:16
that applies the fibo function to each

00:03:14 --> 00:03:18
element of nums

00:03:15 --> 00:03:21
resulting in the familiar fibonacci

00:03:17 --> 00:03:22
sequence of one one two three five eight

00:03:20 --> 00:03:24
now if we wanted to also add a

00:03:21 --> 00:03:25
conditional which is where the walrus

00:03:23 --> 00:03:28
operator comes in

00:03:24 --> 00:03:31
we can compute fibo x and assign it

00:03:27 --> 00:03:33
o the variable y via the walrus

00:03:30 --> 00:03:36
operator's assignment expression

00:03:32 --> 00:03:36
and then do the modules 2 equals 0 check

00:03:35 --> 00:03:38
to keep

00:03:35 --> 00:03:41
just the even elements of the fibonacci

00:03:37 --> 00:03:43
sequence and then in the actual output

00:03:40 --> 00:03:44
of the list comprehension we can just

00:03:42 --> 00:03:46
use the variable y

00:03:43 --> 00:03:48
as opposed to recomputing the fable

00:03:45 --> 00:03:49
function so the result of this list

00:03:47 --> 00:03:50
comprehension that uses the wallace

00:03:48 --> 00:03:53
operator

00:03:49 --> 00:03:56
is 2 and 8. so list comprehension

00:03:52 --> 00:03:57
actually creates a list objects computes

00:03:55 --> 00:03:59
all the elements in the list and stores

00:03:56 --> 00:04:01
the entire list of memory

00:03:58 --> 00:04:03
while the generator expression stores

00:04:00 --> 00:04:05
just the iterable object

00:04:02 --> 00:04:08
and computes every element in the list

00:04:04 --> 00:04:09
one at a time as it's being queried

00:04:07 --> 00:04:11
so for most people the list

00:04:08 --> 00:04:13
comprehension is probably the default

00:04:10 --> 00:04:14
choice it's used when the size of the

00:04:12 --> 00:04:16
list is not crazy large

00:04:14 --> 00:04:18
specially when you want to reiterate

00:04:15 --> 00:04:21
over the list multiple times

00:04:17 --> 00:04:22
it is faster than generator expressions

00:04:20 --> 00:04:24
depending on the context it could be two

00:04:21 --> 00:04:25
to three times faster

00:04:23 --> 00:04:28
so speed is essential you want to use

00:04:24 --> 00:04:29
these and if you need different list

00:04:27 --> 00:04:31
methods like

00:04:28 --> 00:04:33
specially the slicing notation you

00:04:30 --> 00:04:35
should be using list comprehension

00:04:32 --> 00:04:37
the other hand you should use

00:04:34 --> 00:04:39
generator expressions

00:04:36 --> 00:04:40
when the range of the sequence is large

00:04:38 --> 00:04:42
or infinite

00:04:40 --> 00:04:44
or if you want to construct iteratable

00:04:41 --> 00:04:47
generator objects

00:04:43 --> 00:04:48
which are great to impress your friends

00:04:46 --> 00:04:49
with

00:04:47 --> 00:04:51
i should mention i'm really grateful for

00:04:48 --> 00:04:52
the sponsors that support these videos

00:04:50 --> 00:04:55
and the podcast

00:04:52 --> 00:04:57
in this case eight sleep so if you enjoy

00:04:54 --> 00:04:58
these click the links in the description

00:04:56 --> 00:05:00
to get a discount and to support my

00:04:57 --> 00:05:02
efforts thanks for listening

00:04:59 --> 00:05:12
and remember try to learn something new

00:05:01 --> 00:05:12
every day

00:05:18 --> 00:05:21
ou

<!-- YOUTUBE_TRANSCRIPT_END -->
