---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "GAZeHXqabr8"
title: "a16z Podcast | The Storage Renaissance"
video_url: "https://www.youtube.com/watch?v=GAZeHXqabr8"
thumbnail_url: "https://i.ytimg.com/vi/GAZeHXqabr8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=GAZeHXqabr8"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:38:12.000Z"
upload_date: "2019-01-02"
duration_seconds: 1324
duration_human: "22:04"
view_count: 41
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:08:05.659Z"
---

# a16z Podcast | The Storage Renaissance

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=GAZeHXqabr8
- video_id: GAZeHXqabr8
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:38:12.000Z
- upload_date: 2019-01-02
- duration: 22:04
- view_count: 41
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

As we enter a new era of distributed computing -- and of big data, in the form of machine and deep learning -- storage becomes (even more) important. It might not be sexy, but storage is what makes the internet and cloud computing go round and round: "Without storage, we wouldn't have databases; without databases, we wouldn't have big data; we wouldn't have analytics ... we wouldn't have anything because information needs to be stored, and it needs to be retrieved." This is especially complicated by the fact that more and more computing is happening at the edge, as with autonomous car sensing.

Clearly, storage is important. But now it's also undergoing a renaissance as it becomes faster, cheaper, and more in-memory. What does this mean for all the big players in the storage ecosystem? For CIOs and IT departments? For any company competing on data, whether it's in analyzing it or owning it? And for that matter: What is data, really? Beyond the existential questions, this episode of the a16z Podcast -- with a16z partner Peter Levine; Alluxio (formerly Tachyon) founder and CEO Haoyuan Li (“HY”); and storage industry analyst Mike Matchett of The Taneja Group -- covers all this and more. It even tries to make storage, er, great again.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
hi everyone welcome to the a6 & Z

00:00:02 --> 00:00:07
podcast I am sonal today's episode is

00:00:04 --> 00:00:10
all about storage with the cost of

00:00:06 --> 00:00:11
system memory decreasing memory for boat

00:00:09 --> 00:00:14
storage and compute will be the exact

00:00:10 --> 00:00:15
same thing so as we enter a new era of

00:00:13 --> 00:00:17
distributed computing and what Peter has

00:00:15 --> 00:00:18
also argued in a popular deck is the end

00:00:16 --> 00:00:20
of the cloud

00:00:17 --> 00:00:22
how does storage evolve how is this

00:00:19 --> 00:00:24
affected by trends in computing such as

00:00:21 --> 00:00:26
machine and deep learning joining us to

00:00:23 --> 00:00:28
have this conversation today our hy CEO

00:00:25 --> 00:00:30
and co-founder of Alexio formerly

00:00:27 --> 00:00:32
tachyon which came out of the UC Berkley

00:00:29 --> 00:00:34
amp lab the birthplace of other industry

00:00:31 --> 00:00:36
defining technologies such as spark and

00:00:33 --> 00:00:37
ms-dos general partner Peter Levine who

00:00:35 --> 00:00:39
is funded memory centric infrastructure

00:00:36 --> 00:00:41
companies at every level of the Berkeley

00:00:38 --> 00:00:43
data analytics deck the badass deck and

00:00:40 --> 00:00:45
Mike Majid senior analyst at Tunisia

00:00:42 --> 00:00:48
group which covers everything related to

00:00:44 --> 00:00:50
Big Data compute and storage okay so

00:00:47 --> 00:00:52
that's the intros to kick things off I

00:00:49 --> 00:00:53
just have to ask why should we care

00:00:51 --> 00:00:54
about storage I feel like it's the dark

00:00:52 --> 00:00:56
underbelly of computing that no one

00:00:53 --> 00:00:58
really cares about look I mean while

00:00:55 --> 00:01:02
storage may be the underbelly without

00:00:57 --> 00:01:05
storage computers wouldn't work and so

00:01:01 --> 00:01:07
it's one of the most important you know

00:01:04 --> 00:01:10
compute networking and storage or the

00:01:06 --> 00:01:12
three fundamental elements of what makes

00:01:09 --> 00:01:14
the entire Internet work it makes cloud

00:01:11 --> 00:01:15
computing work and without storage you

00:01:13 --> 00:01:17
wouldn't have databases and without

00:01:14 --> 00:01:18
databases you wouldn't have Big Eight if

00:01:16 --> 00:01:22
you wouldn't have analytics you wouldn't

00:01:18 --> 00:01:23
have anything because information needs

00:01:21 --> 00:01:25
to be stored and it needs to be

00:01:22 --> 00:01:28
retrieved so storage is hugely hugely

00:01:24 --> 00:01:30
important and you know it the

00:01:27 --> 00:01:32
interesting thing is I think we're in a

00:01:29 --> 00:01:36
very transformative period of time here

00:01:31 --> 00:01:38
where storage is undergoing a bit of a

00:01:35 --> 00:01:41
renaissance and I think it's going to

00:01:37 --> 00:01:45
transform how computing and applications

00:01:40 --> 00:01:47
work in the not-too-distant future when

00:01:44 --> 00:01:50
I got started storage I thought hey this

00:01:46 --> 00:01:52
really the stayed the the

00:01:49 --> 00:01:53
tried-and-true stuff compute was where

00:01:51 --> 00:01:56
it was at you know there's all these

00:01:52 --> 00:01:58
advantages in advanced is happening in

00:01:55 --> 00:02:00
client server and then cloud and new

00:01:57 --> 00:02:02
chips coming along every year but the

00:01:59 --> 00:02:04
more I got into storage the more I

00:02:01 --> 00:02:06
figured out that storage is really the

00:02:03 --> 00:02:09
most complex part of that equation it

00:02:05 --> 00:02:11
akes a lot of effort to protect data to

00:02:08 --> 00:02:13
manage data data has gravity it has

00:02:10 --> 00:02:15
momentum

00:02:12 --> 00:02:17
it has wait in history so storage is

00:02:14 --> 00:02:19
really the critical piece to get right

00:02:16 --> 00:02:21
wait what do you mean when you say that

00:02:18 --> 00:02:24
data has gravity and momentum data has

00:02:20 --> 00:02:27
to live somewhere you know compute can

00:02:23 --> 00:02:29
be spun up in a cloud it's a little

00:02:26 --> 00:02:32
phemeral you can repeat it you can spin

00:02:28 --> 00:02:33
up and down virtual machines but data

00:02:31 --> 00:02:35
ctually has to have a footprint

00:02:32 --> 00:02:38
somewhere and that footprint has to be

00:02:34 --> 00:02:40
persisted and protected and secured and

00:02:37 --> 00:02:42
of course in this case made accessible

00:02:39 --> 00:02:43
or the data has no valid height but how

00:02:41 --> 00:02:45
is that different than what we have

00:02:42 --> 00:02:48
right now that it requires a new form of

00:02:44 --> 00:02:50
storage I'm gonna use a phrase I say a

00:02:47 --> 00:02:52
lot in the podcast I think it's actually

00:02:49 --> 00:02:54
really true of our times which is when

00:02:51 --> 00:02:56
we say there's a lot more data that's a

00:02:53 --> 00:02:57
difference of degree not just kind why

00:02:55 --> 00:02:59
do we need a different type of solution

00:02:56 --> 00:03:00
why can't we just keep doing the same

00:02:58 --> 00:03:03
things that we were doing before but

00:02:59 --> 00:03:05
just do it bigger and better so I think

00:03:02 --> 00:03:07
this is like many other things in the

00:03:04 --> 00:03:09
world like when you make a cell phone at

00:03:06 --> 00:03:11
he beginning itself and just make a

00:03:08 --> 00:03:13
phone call and now itself is a different

00:03:10 --> 00:03:14
ype of cell phone similar thing is also

00:03:12 --> 00:03:17
happening in the storage industry as

00:03:13 --> 00:03:19
well at the very beginning in storing a

00:03:16 --> 00:03:21
block device is the base and bit but

00:03:18 --> 00:03:24
just bits raw data beyond the block

00:03:20 --> 00:03:26
devices we had file system a different

00:03:23 --> 00:03:29
ype of file system now we have blob

00:03:25 --> 00:03:31
storage object storage and in the

00:03:28 --> 00:03:33
meantime we have so much innovation in

00:03:30 --> 00:03:36
open source area as well and you have

00:03:33 --> 00:03:39
public cloud storage from several huge

00:03:35 --> 00:03:43
vendors in the world like Amazon Google

00:03:38 --> 00:03:45
Microsoft Alibaba etc you have different

00:03:42 --> 00:03:48
ype of storage solution provided by

00:03:44 --> 00:03:51
traditional wonders like EMC like HPE

00:03:47 --> 00:03:55
IBM the providing this new innovations I

00:03:50 --> 00:03:56
think that will pale in comparison to

00:03:54 --> 00:03:59
what's going to happen over the next

00:03:55 --> 00:04:03
let's say decade here when we think

00:03:58 --> 00:04:05
about information and data there's a an

00:04:02 --> 00:04:08
entirely new phenomena that's really

00:04:04 --> 00:04:10
just kicked in relative to what is data

00:04:07 --> 00:04:14
that's a very existential

00:04:09 --> 00:04:16
question well up until right now compute

00:04:13 --> 00:04:19
data has largely been input by some

00:04:15 --> 00:04:22
human being typing on a keyboard or a

00:04:18 --> 00:04:24
database recovering a record that's the

00:04:21 --> 00:04:25
input of a human asking the computer

00:04:23 --> 00:04:27
something

00:04:24 --> 00:04:29
data largely has been put in there

00:04:26 --> 00:04:32
through human fingers and through some

00:04:28 --> 00:04:34
human interaction fast-forward to right

00:04:31 --> 00:04:37
now let's just talk about a self-driving

00:04:33 --> 00:04:41
car that has sensors those sensors are

00:04:36 --> 00:04:43
now inputting data that's the world

00:04:40 --> 00:04:47
around us and so there's completely new

00:04:42 --> 00:04:50
types of data so what is data now far

00:04:46 --> 00:04:53
exceeds the human input data we are now

00:04:49 --> 00:04:55
collecting the world's information via

00:04:52 --> 00:04:57
sensors and all of that needs to be

00:04:54 --> 00:05:00
processed and stored it will be

00:04:56 --> 00:05:02
literally orders of magnitude and in the

00:04:59 --> 00:05:04
xact mathematical sense orders of

00:05:01 --> 00:05:05
magnitude more data that needs to be

00:05:03 --> 00:05:09
stored in process so that's sort of

00:05:04 --> 00:05:12
point one on what's

00:05:08 --> 00:05:15
happening secondly a mobile supply chain

00:05:11 --> 00:05:17
is influencing the data center and

00:05:14 --> 00:05:19
influencing the cost curves in the data

00:05:16 --> 00:05:21
center for storage you take a mobile

00:05:18 --> 00:05:22
phone and you take the components of

00:05:20 --> 00:05:26
that mobile phone and put it in the data

00:05:21 --> 00:05:29
center you have a a very inexpensive

00:05:25 --> 00:05:30
storage substrate that is far less

00:05:28 --> 00:05:32
expensive than the enterprise systems

00:05:29 --> 00:05:36
that we saw in the past

00:05:31 --> 00:05:39
and so the cost curves come way down we

00:05:35 --> 00:05:42
will have much more in memory data

00:05:38 --> 00:05:45
systems that literally live in real

00:05:41 --> 00:05:49
memory and the notion of disk drives and

00:05:44 --> 00:05:51
tape drives and even SSDs will all go

00:05:48 --> 00:05:54
away I believe that there's a future

00:05:50 --> 00:05:56
here where memory architecture is

00:05:53 --> 00:06:00
completely flattened computing has been

00:05:55 --> 00:06:03
built on slow cheap and fast and

00:05:59 --> 00:06:05
expensive and I believe that we're gonna

00:06:02 --> 00:06:06
be fast and cheap I mean it sounds like

00:06:04 --> 00:06:08
it'd be obvious but what does fast and

00:06:05 --> 00:06:10
cheap really do for us when it comes to

00:06:07 --> 00:06:12
the so called storage Renaissance fast

00:06:09 --> 00:06:15
and cheap means that we can collect

00:06:11 --> 00:06:18
massive amounts of information put it in

00:06:14 --> 00:06:19
memory not have to put it out to disk

00:06:17 --> 00:06:21
drive and do all these you know

00:06:18 --> 00:06:24
backflips to get data to work correctly

00:06:20 --> 00:06:26
it's going to all be in memory and it

00:06:23 --> 00:06:28
will be very inexpensive and that's the

00:06:25 --> 00:06:31
Renaissance in whether you call it

00:06:27 --> 00:06:32
storage but more importantly data and

00:06:30 --> 00:06:36
the importance of data and the

00:06:31 --> 00:06:39
correlation between the volumes of data

00:06:35 --> 00:06:41
the price curves in in in the

00:06:38 --> 00:06:43
not-too-distant future for what I'll

00:06:40 --> 00:06:46
call storage even though its memory and

00:06:42 --> 00:06:48
those pieces coming together that to me

00:06:45 --> 00:06:50
is the Renaissance that's happening in

00:06:47 --> 00:06:52
computing I totally grew and actually

00:06:49 --> 00:06:55
just add one more points to that is that

00:06:51 --> 00:06:58
we actually should view memory as a

00:06:54 --> 00:07:01
frontier of storage exactly it's a tier

00:06:57 --> 00:07:03
of store exactly I would argue that it

00:07:00 --> 00:07:05
is the tier of store that over time

00:07:02 --> 00:07:08
there is no other storage

00:07:04 --> 00:07:10
it's just memory certainly we've been

00:07:07 --> 00:07:12
seeing the rise of memory class storage

00:07:09 --> 00:07:16
already being talked about by vendors

00:07:11 --> 00:07:19
and bringing persistence to memory will

00:07:15 --> 00:07:21
completely overhaul how compute in

00:07:18 --> 00:07:25
storage is envisioned today because

00:07:20 --> 00:07:26
tomorrow data is going to live in the

00:07:24 --> 00:07:28
compute devices those are going to be

00:07:25 --> 00:07:30
more Internet of Things devices and be

00:07:27 --> 00:07:32
far more distributed as well

00:07:29 --> 00:07:34
but I also want to temper that with the

00:07:31 --> 00:07:37
thought that we've also talked to a lot

00:07:33 --> 00:07:39
of these big storage vendors and they're

00:07:36 --> 00:07:41
forecasting that there just simply isn't

00:07:38 --> 00:07:43
going to be enough storage for all the

00:07:40 --> 00:07:45
data we're collecting in a midterm

00:07:42 --> 00:07:48
horizon like three to five years that

00:07:44 --> 00:07:49
we're creating so much data there won't

00:07:47 --> 00:07:51
be enough chips there won't be enough

00:07:48 --> 00:07:52
ard drives there won't be enough tape

00:07:50 --> 00:07:55
there simply isn't going to be enough

00:07:51 --> 00:07:56
storage out in the world which I do want

00:07:54 --> 00:07:58
o point out means that there's still

00:07:55 --> 00:08:00
some opportunities for things in storage

00:07:57 --> 00:08:02
management people to consider how many

00:07:59 --> 00:08:04
copies of that date am I making do I

00:08:01 --> 00:08:07
have to take the compute the processes

00:08:03 --> 00:08:09
out to where the data lives do I have to

00:08:06 --> 00:08:11
bring the data centralized and make

00:08:08 --> 00:08:14
copies of it or can I do something more

00:08:10 --> 00:08:16
optimized with how I organize my

00:08:13 --> 00:08:18
architecture and only store the data

00:08:15 --> 00:08:21
once only compute data once in one place

00:08:17 --> 00:08:23
to draw a fine point here we are we are

00:08:20 --> 00:08:26
ntering a new world of distributed

00:08:22 --> 00:08:28
computing and if you think about the new

00:08:25 --> 00:08:30
orld of distributed computing the data

00:08:27 --> 00:08:32
that gets collected in a in a

00:08:29 --> 00:08:35
self-driving car or some endpoint is

00:08:31 --> 00:08:37
going to be prot the information will be

00:08:34 --> 00:08:39
processed at that endpoint it won't be

00:08:36 --> 00:08:42
translated back to a central storage

00:08:38 --> 00:08:44
pool the information will be curated and

00:08:41 --> 00:08:46
then transmitted back or we'll be

00:08:43 --> 00:08:47
collecting massive amounts of

00:08:45 --> 00:08:49
information

00:08:46 --> 00:08:52
self-driving car collects 10 gigabytes

00:08:48 --> 00:08:54
of data a mile write like some

00:08:51 --> 00:08:56
ridiculous amount of data you know

00:08:53 --> 00:08:58
there's not enough storage on the planet

00:08:55 --> 00:09:01
o ever hold all that information so the

00:08:57 --> 00:09:04
curation is going to occur at the edge

00:09:00 --> 00:09:07
close to the compute and the quote

00:09:03 --> 00:09:10
unquote storage will be processed at the

00:09:06 --> 00:09:13
dge and then important information will

00:09:09 --> 00:09:14
come back to some centralized data store

00:09:12 --> 00:09:17
but all that computation at the edge in

00:09:13 --> 00:09:19
the storage of it and kind of the the

00:09:16 --> 00:09:22
permutations of it is exactly the

00:09:18 --> 00:09:24
Renaissance that I believe needs to

00:09:21 --> 00:09:26
happen in storage even to process this

00:09:23 --> 00:09:30
tuff so another huge issue here is that

00:09:25 --> 00:09:32
it may the ecosystem much more complex

00:09:29 --> 00:09:34
than before all the big enterprise

00:09:31 --> 00:09:36
companies it will try different

00:09:33 --> 00:09:39
innovations they will have their

00:09:35 --> 00:09:42
existing storage and past storage new

00:09:38 --> 00:09:45
storage formed very complex systems and

00:09:41 --> 00:09:48
makes this hard to manage how to consume

00:09:44 --> 00:09:52
and the many cases is not cost-effective

00:09:47 --> 00:09:55
as well and this is one thing we're

00:09:51 --> 00:09:57
seeing requested by the customers many

00:09:54 --> 00:10:00
big enterprise in the world is that how

00:09:56 --> 00:10:02
connect consume and and these data from

00:09:59 --> 00:10:05
different storage systems easily and

00:10:01 --> 00:10:06
manage them efficiently so this just

00:10:04 --> 00:10:08
because they have a hodgepodge of like

00:10:05 --> 00:10:10
all these different storage systems or

00:10:08 --> 00:10:11
is it that it's just buried in the same

00:10:09 --> 00:10:13
place but under a bunch of different

00:10:10 --> 00:10:15
interfaces and tools or like what's the

00:10:12 --> 00:10:17
problem really the data is stored in

00:10:14 --> 00:10:19
different storage systems just give you

00:10:16 --> 00:10:21
a very concrete example if you talk to

00:10:18 --> 00:10:23
this department their data is stored in

00:10:20 --> 00:10:26
you know public cloud storage maybe in

00:10:22 --> 00:10:28
probably Amazon s3 or Google Cloud

00:10:25 --> 00:10:31
storage and another department they have

00:10:27 --> 00:10:34
some data stored in the EMC storage HPE

00:10:30 --> 00:10:36
storage you have another department say

00:10:33 --> 00:10:38
they have my own private cloud storage

00:10:35 --> 00:10:41
another group they want analyze the data

00:10:37 --> 00:10:43
inside the enterprise in the end of the

00:10:40 --> 00:10:46
day why people want data people want to

00:10:42 --> 00:10:49
use data to generate values which means

00:10:45 --> 00:10:50
use data to make decision or facilitate

00:10:48 --> 00:10:53
making decisions the more data you have

00:10:49 --> 00:10:55
you've analyzed the best result normally

00:10:52 --> 00:10:58
ou get so this existing environment is

00:10:54 --> 00:10:59
very hard we trying to tackle or

00:10:57 --> 00:11:01
leverage

00:10:58 --> 00:11:03
taking memory as a first-class citizen

00:11:00 --> 00:11:05
in a storage in a storage system who

00:11:02 --> 00:11:07
have a memory century architecture and

00:11:04 --> 00:11:10
viana how to manage the data or how to

00:11:06 --> 00:11:12
access the data from different storage

00:11:09 --> 00:11:13
systems in the most effective manner

00:11:11 --> 00:11:15
what's pausing that for a quick moment

00:11:12 --> 00:11:18
why does in-memory aspect matter so one

00:11:14 --> 00:11:20
side is of course about performance

00:11:17 --> 00:11:23
and performances memory is much faster

00:11:19 --> 00:11:26
than than SSD or HDD and from the other

00:11:22 --> 00:11:29
perspective at a cost the cost is

00:11:25 --> 00:11:33
decreasing very fast it's about every 18

00:11:28 --> 00:11:36
months the cost if decreased by 50% so

00:11:32 --> 00:11:40
that 2 points performance plus the cost

00:11:35 --> 00:11:43
which regular capacity that 2 points

00:11:39 --> 00:11:46
together MIT is MIT now is the right

00:11:42 --> 00:11:50
ime to build memory as a tier of

00:11:46 --> 00:11:53
storage I think that machine learning is

00:11:49 --> 00:11:55
the application that unlocks much of the

00:11:52 --> 00:11:58
new in memory systems it's not so I mean

00:11:54 --> 00:11:59
machine learning is the next generation

00:11:57 --> 00:12:02
of big data and what is machine learning

00:11:58 --> 00:12:06
it's iterations over large large large

00:12:01 --> 00:12:08
data sets to come up with better ways to

00:12:05 --> 00:12:12
forecast and better ways to utilize

00:12:07 --> 00:12:14
information the only way so in order to

00:12:11 --> 00:12:17
unlock the power machine learning in a

00:12:13 --> 00:12:19
time-sensitive fashion is to actually do

00:12:16 --> 00:12:23
these computations in memory because if

00:12:18 --> 00:12:25
you have to what's called go go out to

00:12:22 --> 00:12:29
the disk drive to get information or go

00:12:24 --> 00:12:31
ut to an SSD the time to seek for that

00:12:28 --> 00:12:33
information and look for it is a huge

00:12:30 --> 00:12:35
penalty when you're dealing with massive

00:12:32 --> 00:12:38
amounts of information to the extent

00:12:34 --> 00:12:40
it's all in memory I can operate on it

00:12:37 --> 00:12:44
very quickly and do many more iterative

00:12:39 --> 00:12:46
sets in a shorter time frame giving the

00:12:43 --> 00:12:48
results that might be needed in a

00:12:45 --> 00:12:50
machine learning or AI environment

00:12:47 --> 00:12:53
unless we get to in-memory processing

00:12:49 --> 00:12:55
and in-memory data structures machine

00:12:52 --> 00:12:58
learning doesn't really work yeah and so

00:12:54 --> 00:13:00
we have to come up with these ways of

00:12:57 --> 00:13:03
having much more in process high

00:12:59 --> 00:13:05
fidelity storage that is this new tier

00:13:02 --> 00:13:07
and this exact is you know this is

00:13:04 --> 00:13:10
exactly what's causing what I would

00:13:06 --> 00:13:12
argue this renaissance to occur

00:13:09 --> 00:13:15
over the next several years here I'll

00:13:11 --> 00:13:17
just add that supercomputing a couple

00:13:14 --> 00:13:19
years ago was really inaccessible to

00:13:16 --> 00:13:21
most people and in a super queueing

00:13:18 --> 00:13:24
environment every node is highly

00:13:20 --> 00:13:27
networked to every other nodes because

00:13:23 --> 00:13:28
they needed to communicate State and

00:13:26 --> 00:13:31
information between them when you have

00:13:27 --> 00:13:34
Hadoop and MapReduce they could

00:13:30 --> 00:13:37
partition certain categories of problems

00:13:33 --> 00:13:39
and run them in parallel but not really

00:13:36 --> 00:13:41
a lot of machine learning algorithms

00:13:38 --> 00:13:43
they just didn't don't work that way

00:13:40 --> 00:13:45
they require more of that

00:13:42 --> 00:13:47
interconnectedness and that

00:13:44 --> 00:13:49
communication between nodes and between

00:13:46 --> 00:13:53
memory and data sets are lots of

00:13:48 --> 00:13:55
iterations on the same data so spark and

00:13:52 --> 00:13:59
in-memory approaches to machine learning

00:13:54 --> 00:14:02
really accelerate the opportunity to

00:13:58 --> 00:14:04
create and apply machine learning

00:14:01 --> 00:14:07
algorithms to just about every facet of

00:14:03 --> 00:14:09
human existence not to overstate the

00:14:06 --> 00:14:11
case but there really is a huge

00:14:08 --> 00:14:14
Renaissance just from that alone coming

00:14:10 --> 00:14:17
so if I know this fascinating in terms

00:14:13 --> 00:14:18
of the evolution of computing but the

00:14:16 --> 00:14:20
question I have is how does this

00:14:17 --> 00:14:22
actually affect people like how does it

00:14:19 --> 00:14:25
change for better or worse their their

00:14:21 --> 00:14:27
work on their work practice today if

00:14:24 --> 00:14:30
people want to really see the global

00:14:26 --> 00:14:33
data they move the data manually from

00:14:29 --> 00:14:36
one storage to another storage to put

00:14:32 --> 00:14:38
hem together to analyze it even though

00:14:35 --> 00:14:41
the data could be in memory in a final

00:14:37 --> 00:14:44
storage but because of this manual

00:14:40 --> 00:14:46
process or this process of moving data

00:14:43 --> 00:14:49
round is first of all it's very hard to

00:14:45 --> 00:14:52
manage secondarily the whole process is

00:14:48 --> 00:14:55
very time consuming it could be easily

00:14:51 --> 00:14:58
like weeks or even longer so that makes

00:14:54 --> 00:15:01
things much hotter and data has have

00:14:57 --> 00:15:03
less value so that's another huge issue

00:15:00 --> 00:15:05
we're seeing yeah I mean you need a new

00:15:02 --> 00:15:07
abstraction layer when there's a whole

00:15:04 --> 00:15:08
when there's an old world and you have a

00:15:06 --> 00:15:10
new world and you don't need to be stuck

00:15:07 --> 00:15:12
into this old model of how you in this

00:15:09 --> 00:15:13
case store and be write data but what

00:15:11 --> 00:15:15
does that mean on the design side and

00:15:12 --> 00:15:18
the interface side for people exactly so

00:15:14 --> 00:15:20
the issue today is that data really

00:15:17 --> 00:15:22
stored in different data silos there's

00:15:19 --> 00:15:23
o many different types storage there

00:15:21 --> 00:15:26
are different type of interface

00:15:22 --> 00:15:28
make an application-level very hard to

00:15:25 --> 00:15:30
consume easily that's a big issue think

00:15:27 --> 00:15:33
of virtualization in a computer side we

00:15:29 --> 00:15:34
have a virtualization technology to

00:15:32 --> 00:15:37
really virtualize the compute resource

00:15:33 --> 00:15:39
and to be able to leverage resource more

00:15:36 --> 00:15:41
fficiently also think of Internet

00:15:38 --> 00:15:43
Protocol stack in the middle you have

00:15:40 --> 00:15:45
the IP layer which is really the narrow

00:15:42 --> 00:15:47
aist when you make the innovation in

00:15:44 --> 00:15:50
the upper layer you don't need to worry

00:15:46 --> 00:15:53
about a lower layer so similarly from

00:15:49 --> 00:15:55
the storage ecosystem perspective we

00:15:52 --> 00:15:58
should build a layer to extract

00:15:54 --> 00:16:02
different storage systems and then

00:15:57 --> 00:16:05
present a unique or standard API to the

00:16:01 --> 00:16:08
upper layer with a global namespace from

00:16:04 --> 00:16:11
the user perspective they will be able

00:16:07 --> 00:16:13
to access the data from different

00:16:10 --> 00:16:17
storage systems very easily very easily

00:16:13 --> 00:16:20
and this coupled with the in-memory

00:16:16 --> 00:16:23
technology as far as the smart algorithm

00:16:19 --> 00:16:26
to intelligently move the data will

00:16:22 --> 00:16:28
solve a lot of issues for the for the

00:16:25 --> 00:16:31
users performance issue cost issue

00:16:27 --> 00:16:34
performance cost issue and also the

00:16:30 --> 00:16:36
unification or the silo issues so that's

00:16:33 --> 00:16:37
also a one direction while trying is

00:16:35 --> 00:16:39
this something we're seeing beyond one

00:16:36 --> 00:16:41
company like what's sort of the broad

00:16:38 --> 00:16:44
industry level view of all this there's

00:16:40 --> 00:16:47
certainly a big need for unifying

00:16:43 --> 00:16:52
storage today most organizations have a

00:16:46 --> 00:16:54
hodgepodge a a organically-grown set of

00:16:51 --> 00:16:55
state of storage systems and

00:16:53 --> 00:16:57
applications stretching all the way back

00:16:54 --> 00:16:58
to their mainframes there's an awful lot

00:16:56 --> 00:17:01
of mainframes still out there believe it

00:16:57 --> 00:17:04
or not and when we look at what a

00:17:00 --> 00:17:06
company's real assets are today

00:17:03 --> 00:17:09
oftentimes as I think Peter is pointing

00:17:05 --> 00:17:12
out it's in the data that they have but

00:17:08 --> 00:17:14
he data collectively and in aggregate

00:17:11 --> 00:17:15
in order for you to be able to analyze

00:17:13 --> 00:17:17
it and make predictions out of it you

00:17:14 --> 00:17:19
want a cohesive whole

00:17:16 --> 00:17:22
so solutions that can bring all that

00:17:18 --> 00:17:26
data together in an integrated analysis

00:17:21 --> 00:17:29
and and support actually uh pipelines of

00:17:25 --> 00:17:31
prediction and feedback loops of

00:17:28 --> 00:17:33
analytics and visualization and really

00:17:30 --> 00:17:35
tighten the knot if you will are gonna

00:17:32 --> 00:17:37
be extremely valuable

00:17:34 --> 00:17:39
those that can leverage the existing

00:17:36 --> 00:17:40
infrastructure in the existing data

00:17:38 --> 00:17:41
stores without upsetting the applecart

00:17:39 --> 00:17:43
are the ones that are going to be

00:17:40 --> 00:17:45
adopted for how does it affect the IT

00:17:42 --> 00:17:46
department or the CIO like how should

00:17:44 --> 00:17:49
they think about this shift IT

00:17:45 --> 00:17:52
departments in general are facing a lot

00:17:48 --> 00:17:54
of changes it started with this idea of

00:17:51 --> 00:17:57
cloud and treating their internal

00:17:53 --> 00:17:59
customers as service provider as clients

00:17:56 --> 00:18:02
and seeing themselves as service

00:17:58 --> 00:18:05
providers that's a big shift in culture

00:18:01 --> 00:18:08
and approach and temperament with

00:18:04 --> 00:18:10
infrastructure and the idea of being

00:18:07 --> 00:18:13
able to bring machine learning and

00:18:09 --> 00:18:16
really leverage a company's data sets in

00:18:12 --> 00:18:18
a myriad of ways they have to become

00:18:15 --> 00:18:21
xperts in that data in those

00:18:17 --> 00:18:22
applications because at the department

00:18:20 --> 00:18:24
level or division level in the business

00:18:21 --> 00:18:25
analyst side you know you're to find

00:18:23 --> 00:18:28
lots of people know how to use Microsoft

00:18:24 --> 00:18:31
Excel so IT departments are really gonna

00:18:27 --> 00:18:34
be looked at as the point of the sword

00:18:30 --> 00:18:37
in bringing these advances to the

00:18:33 --> 00:18:40
company and not just being seen as

00:18:36 --> 00:18:42
reactive operators of infrastructure on

00:18:39 --> 00:18:44
the back end and that's a big shock I

00:18:41 --> 00:18:47
mean data is the lifeblood of any

00:18:43 --> 00:18:49
organization and so it doesn't matter

00:18:46 --> 00:18:50
whether you're web developer or

00:18:48 --> 00:18:55
consumer products or healthcare

00:18:49 --> 00:18:58
organization fundamentally we are all

00:18:54 --> 00:19:01
becoming data-driven organizations big

00:18:57 --> 00:19:03
data up until right now has really been

00:19:00 --> 00:19:05
a reactive process even querying a

00:19:02 --> 00:19:08
database like I go look at what's

00:19:04 --> 00:19:10
happened in the past and the holy grail

00:19:07 --> 00:19:14
of all computing and the holy grail of

00:19:09 --> 00:19:16
what a CIO ultimately cares about and

00:19:13 --> 00:19:17
what a business cares about is that I

00:19:15 --> 00:19:19
can predict the future

00:19:16 --> 00:19:23
if I know what's gonna happen tomorrow

00:19:18 --> 00:19:25
hether its inventory healthcare finance

00:19:22 --> 00:19:27
and I know what's gonna happen tomorrow

00:19:24 --> 00:19:30
or next week or next month and I can

00:19:26 --> 00:19:32
accurately predict that that is the holy

00:19:29 --> 00:19:34
grail of computing and I'll even

00:19:31 --> 00:19:36
accelerate that it's it's not about

00:19:33 --> 00:19:38
predicting tomorrow for a lot of people

00:19:35 --> 00:19:41
it's about predicting what's gonna

00:19:37 --> 00:19:44
happen next in terms of what the users

00:19:40 --> 00:19:47
gonna click on where do I where's the

00:19:43 --> 00:19:48
car turn you know how does that rocket

00:19:46 --> 00:19:50
land on its legs

00:19:47 --> 00:19:51
ort of thing it's becoming much more of

00:19:49 --> 00:19:55
a real-time proposition we are at the

00:19:50 --> 00:19:58
cus now of moving from historical to

00:19:54 --> 00:20:02
future prediction and rides on the back

00:19:57 --> 00:20:04
of oaring recreated storage for in

00:20:01 --> 00:20:06
memory architectures and machine

00:20:03 --> 00:20:09
learning coming together to provide this

00:20:05 --> 00:20:12
very unique and very interesting

00:20:08 --> 00:20:15
capability that quite frankly has not

00:20:11 --> 00:20:16
happened yet in the history of computing

00:20:14 --> 00:20:19
I can't believe this you've just made

00:20:15 --> 00:20:21
storage sexy again so one last note to

00:20:18 --> 00:20:24
wrap up what comes next well I think we

00:20:20 --> 00:20:26
mentioned the storage class memory

00:20:23 --> 00:20:31
that's coming out Intel 3d crosspoint

00:20:25 --> 00:20:35
and some other folks making a very fast

00:20:30 --> 00:20:37
close to the chip memory that's actually

00:20:34 --> 00:20:39
storage so it'll be faster again than

00:20:36 --> 00:20:42
flash maybe a little bit slower than

00:20:38 --> 00:20:44
today's DRAM but it's gonna fill in that

00:20:41 --> 00:20:45
gap and that's gonna be another

00:20:43 --> 00:20:47
interesting tier storage it's gonna

00:20:44 --> 00:20:50
change a lot of the way computing works

00:20:46 --> 00:20:51
and that's coming out already we're

00:20:49 --> 00:20:53
gonna see that in the next couple

00:20:50 --> 00:20:56
quarters I also would introduce in the

00:20:52 --> 00:20:58
longer term something to think about and

00:20:55 --> 00:21:02
that is there are companies today that

00:20:57 --> 00:21:05
should be from a contractual perspective

00:21:01 --> 00:21:07
perhaps locking in their rights to data

00:21:04 --> 00:21:08
up and down their supply chain

00:21:06 --> 00:21:10
especially with the Internet of Things I

00:21:07 --> 00:21:12
think there's gonna be some companies

00:21:09 --> 00:21:14
kind of surprised in a year to define

00:21:11 --> 00:21:15
that they're not gonna have access to

00:21:13 --> 00:21:17
the data that they're gonna really want

00:21:14 --> 00:21:19
o have that's relevant to what they

00:21:16 --> 00:21:21
need to do to make the predictions to

00:21:18 --> 00:21:23
ptimize their business and I'm gonna

00:21:20 --> 00:21:25
call it a kind of data poverty or

00:21:22 --> 00:21:27
paucity and we're gonna find companies

00:21:24 --> 00:21:29
that are forward-looking and data rich

00:21:26 --> 00:21:31
and some companies that have suddenly

00:21:28 --> 00:21:34
discovered they're sitting on the

00:21:30 --> 00:21:35
outside a little bit and data poor yeah

00:21:33 --> 00:21:37
that's especially fascinating because we

00:21:34 --> 00:21:38
talked a lot on this podcast about the

00:21:36 --> 00:21:40
role of data and building businesses

00:21:37 --> 00:21:42
like whether it's data network effects

00:21:39 --> 00:21:43
or data and machine learning startups we

00:21:41 --> 00:21:45
just talked a lot about how data is

00:21:42 --> 00:21:48
increasingly advantage and a lot of

00:21:44 --> 00:21:50
businesses if we can have faster access

00:21:47 --> 00:21:53
data easier management data have a

00:21:49 --> 00:21:56
complete view of the data a smarter way

00:21:52 --> 00:21:59
of analyzing the data I think it's a

00:21:55 --> 00:22:01
very exciting moment and many more

00:21:58 --> 00:22:01
innovation will come out along the way

00:22:00 --> 00:22:03
okay

00:22:00 --> 00:22:06
well thank you guys for joining the a

00:22:02 --> 00:22:06
6nz podcast

<!-- YOUTUBE_TRANSCRIPT_END -->
