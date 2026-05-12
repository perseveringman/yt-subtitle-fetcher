---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "HPfPFM1wNmE"
title: "Best hidden feature of Python | Chaining comparison operators"
video_url: "https://www.youtube.com/watch?v=HPfPFM1wNmE"
thumbnail_url: "https://i.ytimg.com/vi/HPfPFM1wNmE/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=HPfPFM1wNmE"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2020-08-21T20:23:20.000Z"
upload_date: "2020-08-21"
duration_seconds: 273
duration_human: "4:33"
view_count: 91520
like_count: 4644
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T14:21:54.916Z"
---

# Best hidden feature of Python | Chaining comparison operators

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=HPfPFM1wNmE
- video_id: HPfPFM1wNmE
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2020-08-21T20:23:20.000Z
- upload_date: 2020-08-21
- duration: 4:33
- view_count: 91520
- like_count: 4644
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

Python is full of amazing hidden features. Chaining comparison operators is my favorite. Support this channel by supporting our sponsor, ExpressVPN: https://expressvpn.com/lexpod

Software Engineering Stack Exchange: https://softwareengineering.stackexchange.com/q/316969
Hidden features of Python: https://stackoverflow.com/a/101945

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
this is a hidden feature of python that

00:00:02 --> 00:00:08
i recently came across

00:00:04 --> 00:00:09
the chaining of comparison operators

00:00:07 --> 00:00:12
that is not available in almost

00:00:08 --> 00:00:14
any mainstream programming language i

00:00:11 --> 00:00:15
think it's elegant and intuitive and

00:00:13 --> 00:00:17
oesn't make any sense to me why it's

00:00:14 --> 00:00:19
not available in most languages

00:00:16 --> 00:00:21
o what is it say we assign the values 2

00:00:18 --> 00:00:23
and 3 to x and y

00:00:20 --> 00:00:25
and then look at a single statement that

00:00:22 --> 00:00:26
includes several comparison operators

00:00:24 --> 00:00:30
chained together

00:00:26 --> 00:00:33
1 less than x less than y less than 4

00:00:29 --> 00:00:34
in python this evaluates to true the way

00:00:32 --> 00:00:36
python evaluates the statement is the

00:00:34 --> 00:00:38
same way that we would

00:00:35 --> 00:00:39
intuitively or mathematically look at

00:00:37 --> 00:00:42
he statement

00:00:38 --> 00:00:43
which is as a chain of binary comparison

00:00:42 --> 00:00:47
operators

00:00:42 --> 00:00:51
1 is less than x and x is less than y

00:00:46 --> 00:00:53
and y is less than 4 which again

00:00:50 --> 00:00:54
evaluates to true now you can use any

00:00:52 --> 00:00:56
comparison operator

00:00:54 --> 00:00:59
less than greater than less than or

00:00:56 --> 00:01:01
equal to greater than or equal to and

00:00:58 --> 00:01:03
mix and match them together in a single

00:01:00 --> 00:01:04
arbitrarily long chain of comparison

00:01:02 --> 00:01:06
operators

00:01:04 --> 00:01:08
now if we change the original statement

00:01:05 --> 00:01:09
o include a greater than operator is

00:01:07 --> 00:01:12
the last comparison

00:01:08 --> 00:01:14
then the entire statement returns false

00:01:11 --> 00:01:17
because y which is equal to 3

00:01:13 --> 00:01:19
is not greater than 4. and then finally

00:01:16 --> 00:01:21
again we can flip the 4 and the y

00:01:18 --> 00:01:23
to make the statement return true

00:01:20 --> 00:01:27
because all the individual comparisons

00:01:22 --> 00:01:27
are true 1 is less than x which is equal

00:01:26 --> 00:01:30
to two

00:01:26 --> 00:01:31
x is less than four and four is greater

00:01:29 --> 00:01:34
than y

00:01:30 --> 00:01:35
being equal to three now this feature

00:01:33 --> 00:01:38
is available in a few

00:01:34 --> 00:01:40
other languages not many like pearl six

00:01:37 --> 00:01:42
or reiku i think it's been her name too

00:01:39 --> 00:01:45
not sure how to pronounce it

00:01:41 --> 00:01:48
and julia and as shown here it's also

00:01:44 --> 00:01:50
a first-class citizen in some functional

00:01:47 --> 00:01:51
anguages like scheme common lisp and

00:01:49 --> 00:01:52
closure

00:01:50 --> 00:01:55
with the added constraint that the

00:01:52 --> 00:01:57
chaining of the operator includes only

00:01:54 --> 00:01:58
the same operator so you can't mix and

00:01:56 --> 00:02:01
match so shown here the greatest

00:01:57 --> 00:02:04
language of all time which is lisp

00:02:00 --> 00:02:05
the equals operator applied to a list of

00:02:03 --> 00:02:06
numbers

00:02:04 --> 00:02:08
three and three returns true three and

00:02:05 --> 00:02:11
five returns false

00:02:07 --> 00:02:12
all threes returns true all threes

00:02:10 --> 00:02:13
except one of them being five returns

00:02:11 --> 00:02:16
false

00:02:12 --> 00:02:18
so again that's chaining the equality

00:02:15 --> 00:02:19
comparison operator across the entire

00:02:17 --> 00:02:20
list

00:02:18 --> 00:02:23
and the same is true for the less than

00:02:20 --> 00:02:26
operator applied to the entire list

00:02:22 --> 00:02:28
below 3 less than 5 is true

00:02:25 --> 00:02:30
and then a long sequence returning true

00:02:27 --> 00:02:33
if it's in strictly increasing order

00:02:30 --> 00:02:34
and false if it's not in strictly

00:02:32 --> 00:02:36
increasing order

00:02:33 --> 00:02:38
i put some links in the description one

00:02:35 --> 00:02:40
of the more interesting ones is in the

00:02:37 --> 00:02:41
software engineering stack exchange

00:02:39 --> 00:02:43
which discusses from a

00:02:40 --> 00:02:45
semi-philosophical perspective

00:02:42 --> 00:02:46
why most mainstream languages do not

00:02:44 --> 00:02:48
include this feature

00:02:46 --> 00:02:49
you should check out some of the answers

00:02:47 --> 00:02:52
on that page but to summarize some of

00:02:48 --> 00:02:54
the discussion the reason to do it

00:02:51 --> 00:02:55
is despite the initial intuition about

00:02:53 --> 00:02:56
his feature being difficult to

00:02:54 --> 00:02:59
implement

00:02:55 --> 00:03:00
it's actually very easy to implement and

00:02:58 --> 00:03:03
as i said it's a

00:02:59 --> 00:03:06
mathematically intuitive and just

00:03:02 --> 00:03:07
elegant statement which i think makes it

00:03:05 --> 00:03:09
one of the

00:03:06 --> 00:03:11
best hidden features at least to me of

00:03:08 --> 00:03:12
python

00:03:10 --> 00:03:14
in the discussion the reasons that come

00:03:11 --> 00:03:17
up not to do it is

00:03:13 --> 00:03:19
fundamentally just laziness in that its

00:03:16 --> 00:03:20
importance versus other features is

00:03:18 --> 00:03:22
quite low

00:03:19 --> 00:03:23
and it doesn't seem to be the kind of

00:03:21 --> 00:03:26
eature that pops up as an

00:03:22 --> 00:03:30
intuitive first feature to implement

00:03:26 --> 00:03:32
when the language is first born and

00:03:29 --> 00:03:34
as with certain other features this can

00:03:31 --> 00:03:36
potentially break backward compatibility

00:03:33 --> 00:03:37
if this kind of chaining operators was

00:03:35 --> 00:03:40
allowed previously

00:03:36 --> 00:03:41
syntactically speaking meaning it was

00:03:39 --> 00:03:43
allowed but it

00:03:40 --> 00:03:45
didn't do the intuitive thing it can

00:03:42 --> 00:03:46
certainly break in quite painful ways

00:03:44 --> 00:03:48
backward compatibility

00:03:45 --> 00:03:50
but still as i said in the previous

00:03:47 --> 00:03:52
video list comprehensions i think is the

00:03:49 --> 00:03:54
best feature python

00:03:51 --> 00:03:55
and the chaining of comparison operators

00:03:53 --> 00:03:57
i think

00:03:54 --> 00:03:58
is the best hidden feature or not well

00:03:56 --> 00:04:02
known feature

00:03:57 --> 00:04:04
of python quick shout out to expressvpn

00:04:01 --> 00:04:07
click their link in the description

00:04:03 --> 00:04:09
it's the best way to support the podcast

00:04:06 --> 00:04:11
i host in these videos that i make

00:04:08 --> 00:04:13
if you enjoy these subscribe and

00:04:10 --> 00:04:16
remember try to learn something new

00:04:12 --> 00:04:16
every day

00:04:33 --> 00:04:36
ou

<!-- YOUTUBE_TRANSCRIPT_END -->
