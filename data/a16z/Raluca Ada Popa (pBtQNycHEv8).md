---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "pBtQNycHEv8"
title: "Raluca Ada Popa"
video_url: "https://www.youtube.com/watch?v=pBtQNycHEv8"
thumbnail_url: "https://i.ytimg.com/vi/pBtQNycHEv8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=pBtQNycHEv8"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-28T20:54:06.000Z"
upload_date: "2017-07-28"
duration_seconds: 939
duration_human: "15:39"
view_count: 629
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:23:03.664Z"
---

# Raluca Ada Popa

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=pBtQNycHEv8
- video_id: pBtQNycHEv8
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-28T20:54:06.000Z
- upload_date: 2017-07-28
- duration: 15:39
- view_count: 629
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:06 --> 00:00:12
Hello everyone. I'm a new faculty at UC

00:00:08 --> 00:00:13
Berkeley and I'm going to tell you about

00:00:11 --> 00:00:15
some recent work. By the way, can you

00:00:12 --> 00:00:16
hear me? Well, okay, great. So, I'm

00:00:14 --> 00:00:20
going to tell you about some very recent

00:00:15 --> 00:00:23
work on blind box which enables us to

00:00:19 --> 00:00:26
inspect traffic that remains encrypted

00:00:22 --> 00:00:27
and protect the privacy of the users.

00:00:25 --> 00:00:30
And then I'm going to scope out from

00:00:26 --> 00:00:33
this and tell you about a bigger vision

00:00:29 --> 00:00:35
that BLbox is part of namely computing

00:00:32 --> 00:00:38
on encrypted data which I think can have

00:00:34 --> 00:00:40
a lot of impact to industry and to what

00:00:37 --> 00:00:42
people use

00:00:39 --> 00:00:46
today. Uh so let me tell you what

00:00:41 --> 00:00:48
blindbox does. So blindbox uh looks at

00:00:45 --> 00:00:51
deep packet inspection. So these devices

00:00:47 --> 00:00:54
are widely used today. Uh so

00:00:50 --> 00:00:57
Javanni built some of these for example

00:00:53 --> 00:00:59
and they're used for various reasons. So

00:00:56 --> 00:01:01
for example they could be used to

00:00:58 --> 00:01:03
prevent intrusion and detect intrusion

00:01:00 --> 00:01:06
attacks in the network. They could be

00:01:02 --> 00:01:08
used to prevent data exfiltration from a

00:01:05 --> 00:01:11
company's network or they could be used

00:01:07 --> 00:01:13
for parental filtering and others. So

00:01:10 --> 00:01:15
they're very commonly used and one thing

00:01:12 --> 00:01:17
they have in common is that they examine

00:01:14 --> 00:01:18
the payload of the packet. So not not

00:01:16 --> 00:01:21
just the

00:01:17 --> 00:01:22
ader. Now just to give you a very

00:01:20 --> 00:01:24
simple concrete example, consider that

00:01:22 --> 00:01:26
Alice and Bob are talking over the

00:01:23 --> 00:01:29
network and in the middle there's a

00:01:26 --> 00:01:32
middle box that is running intrusion

00:01:28 --> 00:01:35
detection. Now this middle box has rules

00:01:31 --> 00:01:37
from a rule generator. Uh for for

00:01:34 --> 00:01:41
example machi I should have used last

00:01:36 --> 00:01:43
line. Um and based on these rules the

00:01:40 --> 00:01:46
middle box is trying to detect if the

00:01:42 --> 00:01:49
traffic is malicious or not. So let's

00:01:45 --> 00:01:51
ay that Alice, for example, is um a

00:01:48 --> 00:01:54
malicious user and she tries to send an

00:01:50 --> 00:01:56
attack through the network and for the

00:01:53 --> 00:01:58
moment assume that the attacks are as

00:01:55 --> 00:02:01
imple as the attack word, which

00:01:57 --> 00:02:03
obviously is not the case. But in this

00:02:00 --> 00:02:04
case, the middle box can just detect

00:02:02 --> 00:02:08
based on the rules the fact that there's

00:02:03 --> 00:02:11
an attack and flag the

00:02:07 --> 00:02:14
detection. So the middle box saved the

00:02:10 --> 00:02:16
day, but um its job is actually not that

00:02:13 --> 00:02:18
easy today. And one of the reason is

00:02:15 --> 00:02:20
that a lot of the traffic today is sent

00:02:18 --> 00:02:23
over

00:02:19 --> 00:02:24
HTTPS and HTTPS has a lot of wonderful

00:02:22 --> 00:02:27
guarantees that it gives us. One of it

00:02:23 --> 00:02:29
being privacy, the fact that the traffic

00:02:26 --> 00:02:31
is not known to the

00:02:28 --> 00:02:33
intermediaries. Uh but in that case, the

00:02:30 --> 00:02:35
middle box can no longer inspect the

00:02:32 --> 00:02:37
traffic. So the traffic remains

00:02:34 --> 00:02:40
encrypted with HTTPS. The middle box

00:02:36 --> 00:02:43
cannot do its work anymore because it's

00:02:39 --> 00:02:47
encrypted. Okay. So as part of HTTPS,

00:02:42 --> 00:02:48
users share a secret key uh and the data

00:02:46 --> 00:02:51
traffic is encrypted with that secret

00:02:47 --> 00:02:54
key. So the middle box can no longer

00:02:50 --> 00:02:54
inspect that

00:02:53 --> 00:02:59
raffic. So what do people do today?

00:02:56 --> 00:03:01
Right? Middle boxes are still widely

00:02:58 --> 00:03:04
used. Traffic is still widely encrypted

00:03:00 --> 00:03:06
with HTTPS. So what do people do today?

00:03:03 --> 00:03:11
And actually the solution is very

00:03:05 --> 00:03:12
embarrassing and insecure um solution.

00:03:10 --> 00:03:15
people basically mount a

00:03:11 --> 00:03:18
man-in-the-middle attack on SSL. What

00:03:14 --> 00:03:20
hey do is they install a fake

00:03:17 --> 00:03:22
certificate at the middle box claiming

00:03:19 --> 00:03:25
that the middle box is the server the

00:03:21 --> 00:03:27
user wants to talk to. And now because

00:03:24 --> 00:03:28
of this fake certificate, for example,

00:03:26 --> 00:03:31
claiming it's

00:03:27 --> 00:03:33
Google, the middle box and the user will

00:03:30 --> 00:03:35
actually share a key with the middle box

00:03:32 --> 00:03:38
instead of sharing the key with the

00:03:34 --> 00:03:40
actual server. So now the middle box can

00:03:37 --> 00:03:44
decrypt all of the user's traffic and

00:03:39 --> 00:03:46
run his detection. Okay. So first of all

00:03:43 --> 00:03:48
this doesn't this no longer has the

00:03:45 --> 00:03:50
guarantees of HTTPS. So first of all

00:03:47 --> 00:03:52
there's no privacy. The middle box uh

00:03:49 --> 00:03:54
can now see the user's traffic. If we

00:03:52 --> 00:03:56
have an administrator at the middle box

00:03:53 --> 00:03:59
they can read the user's traffic. So tra

00:03:55 --> 00:04:02
so privacy is goes away. But actually a

00:03:58 --> 00:04:05
lot of other security issues arise when

00:04:01 --> 00:04:06
you break the end to end um security and

00:04:04 --> 00:04:09
guarantees of

00:04:05 --> 00:04:11
SSL. So basically the question we set

00:04:08 --> 00:04:14
out to answer in blind box is whether we

00:04:10 --> 00:04:16
can achieve both privacy and inspect

00:04:13 --> 00:04:18
payload. So we want both the privacy of

00:04:15 --> 00:04:20
HTTPS and the functionality of the

00:04:17 --> 00:04:22
middle boxes. And this is clearly a

00:04:19 --> 00:04:25
tension in

00:04:21 --> 00:04:26
here. So the answer is yes. And our

00:04:24 --> 00:04:29
system blind box is the first to show

00:04:25 --> 00:04:31
that this could be possible and is the

00:04:28 --> 00:04:33
first system that enables DPI middle

00:04:30 --> 00:04:35
boxes to inspect traffic without seeing

00:04:32 --> 00:04:40
the

00:04:34 --> 00:04:43
traffic. Um so it's a blind box and the

00:04:39 --> 00:04:45
approach is the following. Um Alice and

00:04:42 --> 00:04:46
Bob share a key with each other and send

00:04:44 --> 00:04:49
encrypted traffic. The middle box no

00:04:45 --> 00:04:52
longer has fake certificates.

00:04:48 --> 00:04:54
Now we want to enable the middle box to

00:04:51 --> 00:04:57
inspect the encrypted traffic. So to

00:04:53 --> 00:05:00
actually work over the encrypted traffic

00:04:56 --> 00:05:02
without decryting it. Okay. So let me

00:04:59 --> 00:05:04
say how how how we could do that right.

00:05:01 --> 00:05:06
How how is that

00:05:03 --> 00:05:09
possible? So just to uh clarify the

00:05:06 --> 00:05:14
model really um again precisely before

00:05:08 --> 00:05:15
we go into the uh design. Um we have

00:05:13 --> 00:05:17
again the rule generator that produces

00:05:14 --> 00:05:19
rules. We have the middle box and the

00:05:16 --> 00:05:20
two users. And a crucial aspect here is

00:05:18 --> 00:05:22
that the user should not be able to see

00:05:19 --> 00:05:24
the rules. Uh because a lot of these

00:05:21 --> 00:05:27
ideas companies are not willing to

00:05:23 --> 00:05:29
release the rules. And also for uh

00:05:26 --> 00:05:31
classical papers in ideas say that if

00:05:28 --> 00:05:34
the endpoints don't see the rules then

00:05:30 --> 00:05:36
uh it's it's easier to catch them and

00:05:33 --> 00:05:38
it's harder for them to evade

00:05:35 --> 00:05:40
tection. Uh and in terms of the threat

00:05:37 --> 00:05:42
model, what we want to prevent against

00:05:39 --> 00:05:44
is an attacker who actually sees all the

00:05:41 --> 00:05:48
traffic at the middle box. So this could

00:05:43 --> 00:05:51
be an administrator that sees the

00:05:47 --> 00:05:52
traffic. Okay. So and within this

00:05:50 --> 00:05:54
powerful thread model of an

00:05:51 --> 00:05:56
administrator that can see everything at

00:05:53 --> 00:05:58
he middle box, we have three goals we

00:05:55 --> 00:06:00
want to provide. So one, we'd like to

00:05:57 --> 00:06:02
have strong privacy guarantees. So we'd

00:05:59 --> 00:06:05
like to use a security notion that

00:06:01 --> 00:06:06
already exists and it's well studied. Uh

00:06:04 --> 00:06:09
we'd like to be practical and this is

00:06:05 --> 00:06:12
really hard because network rates are on

00:06:08 --> 00:06:14
the order of microsconds. So not a lot

00:06:12 --> 00:06:16
of cryptography remains that could be

00:06:13 --> 00:06:18
used in this

00:06:15 --> 00:06:20
etting and we also want to have a wide

00:06:17 --> 00:06:22
range of functionality because some of

00:06:19 --> 00:06:24
these uh rules can be quite

00:06:21 --> 00:06:26
sophisticated. For example, they could

00:06:23 --> 00:06:28
even be regular

00:06:25 --> 00:06:29
expressions. So it's clearly very

00:06:27 --> 00:06:32
challenging and we're very ambitious

00:06:28 --> 00:06:35
here. Uh but actually we blind box

00:06:31 --> 00:06:38
achieves these

00:06:34 --> 00:06:42
goals. So let me tell you

00:06:37 --> 00:06:45
how. Um so what we build in blindbox is

00:06:41 --> 00:06:47
an enhanced version of https called

00:06:44 --> 00:06:51
blindbox

00:06:46 --> 00:06:54
https and with blindbox https uh when a

00:06:50 --> 00:06:56
user sends a message u the user gets uh

00:06:53 --> 00:06:58
the message gets encrypted through SSL

00:06:55 --> 00:07:01
as before so we don't change

00:06:57 --> 00:07:03
SSL but then on top of

00:07:00 --> 00:07:06
that the traffic goes through blindbox

00:07:02 --> 00:07:10
encrypt which tokenizes the traffic into

00:07:05 --> 00:07:10
keywords and encrypts each keyword

00:07:10 --> 00:07:16
Now these encrypted tokens are sent to

00:07:13 --> 00:07:18
the uh middle box which is able to run

00:07:15 --> 00:07:21
the detection on encrypted tokens and

00:07:17 --> 00:07:24
then make decisions if it discovers an

00:07:20 --> 00:07:26
attack and then uh the end point

00:07:23 --> 00:07:29
receives the traffic and performs some

00:07:25 --> 00:07:32
verification. So let me give you a sense

00:07:28 --> 00:07:33
of how we do this detection on the

00:07:31 --> 00:07:37
ncrypted traffic and how we encrypt the

00:07:32 --> 00:07:39
traffic to enable the detection.

00:07:36 --> 00:07:41
So the very first step is something that

00:07:38 --> 00:07:44
we have in the security community which

00:07:40 --> 00:07:46
is searchable encryption. So this is a

00:07:43 --> 00:07:48
really cool primitive that allows you to

00:07:45 --> 00:07:50
search on encrypted text. So you can

00:07:47 --> 00:07:52
search an encrypted keyword over

00:07:49 --> 00:07:55
encrypted text and all that you learn is

00:07:51 --> 00:07:57
that there's a match at some point or

00:07:54 --> 00:07:59
not. But unfortunately none of these

00:07:56 --> 00:08:02
were really satisfactory for blind box

00:07:58 --> 00:08:04
because these schemes are split into two

00:08:01 --> 00:08:06
parts. Some schemes are deterministic

00:08:03 --> 00:08:09
which have the property of having weaker

00:08:05 --> 00:08:11
security uh due to frequency analysis

00:08:08 --> 00:08:13
but they are very fast because you can

00:08:10 --> 00:08:16
build indexes at the middle box and

00:08:12 --> 00:08:18
locate uh and find attacks very fast and

00:08:15 --> 00:08:19
randomized schemes are actually they

00:08:17 --> 00:08:22
have high security they don't permit

00:08:18 --> 00:08:24
frequency analysis uh but they're very

00:08:21 --> 00:08:27
slow because you can no longer build

00:08:23 --> 00:08:28
indexes and in the case of blind box uh

00:08:26 --> 00:08:30
we really wanted both because we wanted

00:08:28 --> 00:08:32
the security of the randomized schemes

00:08:29 --> 00:08:34
and we wanted

00:08:31 --> 00:08:36
speed of deterministic

00:08:33 --> 00:08:38
encryption. So as part of blind box, our

00:08:35 --> 00:08:41
first contribution was to construct such

00:08:37 --> 00:08:43
a scheme, a scheme that is as secure as

00:08:40 --> 00:08:45
randomized schemes and as fast as

00:08:42 --> 00:08:48
deterministic schemes and then to

00:08:44 --> 00:08:49
construct a deterministic a detection

00:08:47 --> 00:08:52
algorithm based on

00:08:48 --> 00:08:54
this. So I'm going to walk you just very

00:08:51 --> 00:08:56
fast through the technical details just

00:08:53 --> 00:08:58
very high level. Um so our new

00:08:55 --> 00:09:00
encryption scheme

00:08:57 --> 00:09:03
um relies on the fact that the middle

00:08:59 --> 00:09:05
box has an as encryption of the rule

00:09:02 --> 00:09:07
under the SSL key and I'm going to

00:09:04 --> 00:09:10
mention at the high level how it obtains

00:09:06 --> 00:09:12
this encryption but then the user takes

00:09:09 --> 00:09:14
a message as I mentioned tokenizes it as

00:09:11 --> 00:09:17
part of blindbox https and then encrypts

00:09:14 --> 00:09:19
it and this is our encryption scheme and

00:09:16 --> 00:09:22
I'm not going to walk you through it but

00:09:19 --> 00:09:24
basically at the high level it has the

00:09:21 --> 00:09:26
following nice properties uh you can

00:09:23 --> 00:09:30
check for equality between a rule and a

00:09:25 --> 00:09:32
token by just taking the encryption of

00:09:29 --> 00:09:35
the rule uh using it as a key to encrypt

00:09:31 --> 00:09:36
he salt and matching the second term.

00:09:34 --> 00:09:38
The second is that it's randomized

00:09:35 --> 00:09:40
encryption scheme due to the salts which

00:09:37 --> 00:09:42
are random. And third is that actually

00:09:39 --> 00:09:45
it's fast. It can run at network rates

00:09:41 --> 00:09:47
because it only uses as and we have as

00:09:44 --> 00:09:49
instructions in

00:09:46 --> 00:09:51
hardware. Okay. And moreover, on top of

00:09:48 --> 00:09:54
this, we are actually able to build

00:09:50 --> 00:09:56
trees because we have a very careful

00:09:53 --> 00:09:58
schedule for how we choose the salts in

00:09:55 --> 00:10:00
a way that preserves the security but

00:09:57 --> 00:10:02
enables us to premp compute some indexes

00:09:59 --> 00:10:04
and adapt the indexes over time. So we

00:10:01 --> 00:10:06
can have a very fast

00:10:03 --> 00:10:08
lookup. Okay, so one last bit of the

00:10:05 --> 00:10:10
design that I didn't mention is how do

00:10:07 --> 00:10:12
we get these encrypted rules? Uh and

00:10:09 --> 00:10:14
that's not that straightforward because

00:10:11 --> 00:10:16
the middle box doesn't have the key to

00:10:13 --> 00:10:18
encrypt and it shouldn't have the key.

00:10:15 --> 00:10:20
uh and also the user uh shouldn't get

00:10:17 --> 00:10:23
he rules. So for this we use really

00:10:19 --> 00:10:25
cool primitive from the crypto community

00:10:22 --> 00:10:26
namely secure to party computation which

00:10:24 --> 00:10:30
enables the middlebox and the user

00:10:25 --> 00:10:31
during the SSL handshake to produce this

00:10:29 --> 00:10:34
encryption scheme to get this encryption

00:10:30 --> 00:10:36
encrypted value together without sharing

00:10:33 --> 00:10:38
with each other the rule or the key and

00:10:35 --> 00:10:40
we have a specialized protocol to make

00:10:37 --> 00:10:44
this very

00:10:39 --> 00:10:47
fast. Okay. So I gave you a sense of um

00:10:43 --> 00:10:49
how the equality part works in a blind

00:10:46 --> 00:10:50
box and just to give you a very quick

00:10:48 --> 00:10:52
sense of the security the point is that

00:10:49 --> 00:10:54
he middle box learns only if a

00:10:51 --> 00:10:55
malicious string matches at some

00:10:53 --> 00:10:57
location but it doesn't learn anything

00:10:54 --> 00:10:59
else about the other

00:10:56 --> 00:11:01
locations and in the paper we actually

00:10:58 --> 00:11:02
explain how we support regular

00:11:00 --> 00:11:05
expressions and I think it's a really

00:11:01 --> 00:11:06
cool uh protocol because we don't know

00:11:04 --> 00:11:09
how to do it entirely over encrypted

00:11:05 --> 00:11:11
ata but there's an interesting privacy

00:11:08 --> 00:11:14
model that you can provide in this case

00:11:10 --> 00:11:16
and enable them

00:11:13 --> 00:11:18
efficiently. Okay, so we implemented

00:11:15 --> 00:11:21
blind box and I just want to mention

00:11:17 --> 00:11:22
that um it covers a lot of uh

00:11:20 --> 00:11:24
applications already. So only the

00:11:21 --> 00:11:27
quality part that I told you about can

00:11:23 --> 00:11:29
support already watermarks checking if

00:11:26 --> 00:11:31
xfiltrated documents contain watermarks

00:11:28 --> 00:11:34
and parental filtering and a bunch of

00:11:30 --> 00:11:37
the IDS rules. Uh we even run it on some

00:11:33 --> 00:11:40
of the rules from last line.

00:11:36 --> 00:11:41
uh and the second protocol with regular

00:11:39 --> 00:11:43
expressions actually supports all these

00:11:40 --> 00:11:45
rule

00:11:42 --> 00:11:46
sets. So in terms of performance

00:11:44 --> 00:11:49
actually the middle box is very fast.

00:11:46 --> 00:11:50
It's really competitive to snort. So the

00:11:48 --> 00:11:52
detection of the middle box is

00:11:49 --> 00:11:55
competitive to snort. In terms of the

00:11:52 --> 00:11:57
transmission time we increase it. Uh so

00:11:54 --> 00:12:00
page load time would become 15% to to

00:11:56 --> 00:12:04
100% slower. And the one part that's

00:11:59 --> 00:12:07
till slow is the SSL handshake. Um and

00:12:03 --> 00:12:09
this is slow if you do as if you u do

00:12:06 --> 00:12:10
handshakes very often if you have

00:12:08 --> 00:12:12
shortlived connections but if you

00:12:09 --> 00:12:15
consider long live connections between

00:12:11 --> 00:12:18
terprises and clouds then that's not a

00:12:14 --> 00:12:22
problem okay so so far I gave you a

00:12:17 --> 00:12:24
sense of blind box which uh the idea is

00:12:21 --> 00:12:27
that we want to do deep packet

00:12:23 --> 00:12:28
inspection over encrypted traffic. So we

00:12:26 --> 00:12:30
really want to keep the privacy of the

00:12:27 --> 00:12:32
users while enabling the functionality

00:12:29 --> 00:12:35
of the middle

00:12:31 --> 00:12:37
boxes and blind box is part of a bigger

00:12:34 --> 00:12:39
vision. The one of computing on

00:12:36 --> 00:12:41
encrypted data which was initially

00:12:38 --> 00:12:43
started by cryptographers

00:12:40 --> 00:12:45
um and our work showed that you can

00:12:42 --> 00:12:48
actually do it in practice for for

00:12:44 --> 00:12:50
systems that are used today. So to give

00:12:47 --> 00:12:52
you a sense of other systems that we

00:12:49 --> 00:12:54
could build with this approach here are

00:12:51 --> 00:12:56
a few.

00:12:53 --> 00:12:59
So, Cry DB is actually a database system

00:12:56 --> 00:13:01
that is encrypted and you can process

00:12:58 --> 00:13:04
SQL queries over encrypted data, a rich

00:13:00 --> 00:13:06
set of SQL queries. So, for industry

00:13:03 --> 00:13:09
standard benchmarks such as DPCC, uh,

00:13:05 --> 00:13:11
cry DB had an overhead of 27% compared

00:13:08 --> 00:13:14
to my SQL. So, this can be quite

00:13:10 --> 00:13:17
practical and cry DB already has um had

00:13:14 --> 00:13:19
some impact. Uh, so for example, SAP has

00:13:16 --> 00:13:21
a system that's based on crypbal

00:13:18 --> 00:13:24
aboratories. Google's encrypted bequery

00:13:20 --> 00:13:25
is based on cry DB and a few others.

00:13:23 --> 00:13:27
There are a bunch of startups right now

00:13:24 --> 00:13:30
that are doing this and also a few other

00:13:26 --> 00:13:33
big companies that seem to be using it

00:13:29 --> 00:13:35
although they didn't quite say openly

00:13:32 --> 00:13:38
they're using cry DB. So for example

00:13:34 --> 00:13:40
Skyhigh is um using all the encryption

00:13:37 --> 00:13:42
schemes in cry DB and Microsoft recently

00:13:39 --> 00:13:45
released a service called always

00:13:41 --> 00:13:46
encrypted. So the cool thing with uh

00:13:44 --> 00:13:49
computing on encrypted data is that your

00:13:45 --> 00:13:51
data is always encrypted at the server.

00:13:48 --> 00:13:53
is not just encrypted at rest on disk or

00:13:50 --> 00:13:56
in transit. It's encrypted all

00:13:52 --> 00:13:58
throughout the

00:13:55 --> 00:14:01
computation. Another system we were able

00:13:57 --> 00:14:03
to build with this is miler. So miler

00:14:00 --> 00:14:06
allows web servers to run and process

00:14:02 --> 00:14:09
encrypted data. Of course the

00:14:05 --> 00:14:11
confidential data and um with miler we

00:14:08 --> 00:14:13
re able to build the web platform that

00:14:10 --> 00:14:15
when you write your application in the

00:14:12 --> 00:14:16
web platform ensures that the web server

00:14:14 --> 00:14:19
only gets encrypted data encrypted

00:14:15 --> 00:14:21
confidential data and actually uh a

00:14:18 --> 00:14:24
hospital in Boston is currently using

00:14:20 --> 00:14:26
miler in one of their medical

00:14:23 --> 00:14:28
applications. Uh and then we were able

00:14:25 --> 00:14:30
to do location applications. So for

00:14:27 --> 00:14:34
mobile applications, you have a lot of

00:14:29 --> 00:14:35
um map or location based uh systems in

00:14:33 --> 00:14:37
which you want to hide the path of a

00:14:34 --> 00:14:39
user, but you still want to be able to

00:14:36 --> 00:14:41
aggregate information such as how

00:14:38 --> 00:14:43
crowded is a certain street, what's the

00:14:40 --> 00:14:45
traffic jam looking

00:14:42 --> 00:14:46
like. And we're also able to show how

00:14:44 --> 00:14:48
you can do machine learning

00:14:45 --> 00:14:50
classification over encrypted data. And

00:14:47 --> 00:14:53
blind box now shows that you can

00:14:49 --> 00:14:56
actually do traffic inspection uh over

00:14:52 --> 00:15:00
encrypted traffic. uh and we have a few

00:14:55 --> 00:15:02
other uh systems coming up. Um but the

00:14:59 --> 00:15:04
bottom line that I want to mention is

00:15:01 --> 00:15:07
that computing connected data can be

00:15:03 --> 00:15:10
practical for a set of systems that we

00:15:06 --> 00:15:13
use today and it really gives you at the

00:15:09 --> 00:15:15
same time confidentiality and

00:15:12 --> 00:15:17
functionality. So you don't have to

00:15:14 --> 00:15:21
choose only one

00:15:17 --> 00:15:24
anymore. And I think that um this can

00:15:20 --> 00:15:26
have a lot of impact to industry. So I

00:15:23 --> 00:15:28
already mentioned some uh initial impact

00:15:25 --> 00:15:30
but I think this can permeate even more

00:15:27 --> 00:15:33
into what people use

00:15:29 --> 00:15:40
today. Okay. Thank you.

00:15:32 --> 00:15:40
[Applause]

<!-- YOUTUBE_TRANSCRIPT_END -->
