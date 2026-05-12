---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "44tFKZhPyP0"
title: "François Chollet: History of Keras and TensorFlow | AI Podcast Clips"
video_url: "https://www.youtube.com/watch?v=44tFKZhPyP0"
thumbnail_url: "https://i.ytimg.com/vi/44tFKZhPyP0/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=44tFKZhPyP0"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-10-08T13:49:47.000Z"
upload_date: "2019-10-08"
duration_seconds: 719
duration_human: "11:59"
view_count: 9111
like_count: 223
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T16:57:11.685Z"
---

# François Chollet: History of Keras and TensorFlow | AI Podcast Clips

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=44tFKZhPyP0
- video_id: 44tFKZhPyP0
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-10-08T13:49:47.000Z
- upload_date: 2019-10-08
- duration: 11:59
- view_count: 9111
- like_count: 223
- has_subtitle: true
- language: en
- availability: public
- tags: keras, tensorflow, caffe, convnets, convolutional neural networks, francois chollet, artificial intelligence, ai, ai podcast, artificial intelligence podcast, lex clips, lex fridman, lex podcast, lex mit, lex ai, mit ai, ai podcast clips, ai clips
- categories: Science & Technology

## Description

This is a clip from a conversation with Francois Chollet from Sep 2019. New full episodes every Mon & Thu and 1-2 new clips or a new non-podcast video on all other days. You can watch the full conversation here: https://www.youtube.com/watch?v=Bo8MY4JpiXE
(more links below)

Podcast full episodes playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOdP_8GztsuKi9nrraNbKKp4

Podcasts clips playlist:
https://www.youtube.com/playlist?list=PLrAXtmErZgOeciFP3CBCIEElOJeitOr41

Podcast website:
https://lexfridman.com/ai

Podcast on iTunes:
https://apple.co/2lwqZIr

Podcast on Spotify:
https://spoti.fi/2nEwCF8

Podcast RSS:
https://lexfridman.com/category/ai/feed/

Note: I select clips with insights from these much longer conversation with the hope of helping make these ideas more accessible and discoverable. Ultimately, this podcast is a small side hobby for me with the goal of sharing and discussing ideas. For now, I post a few clips every Tue & Fri. I did a poll and 92% of people either liked or loved the posting of daily clips, 2% were indifferent, and 6% hated it, some suggesting that I post them on a separate YouTube channel. I hear the 6% and partially agree, so am torn about the whole thing. I tried creating a separate clips channel but the YouTube algorithm makes it very difficult for that channel to grow unless the main channel is already very popular. So for a little while, I'll keep posting clips on the main channel. I ask for your patience and to see these clips as supporting the dissemination of knowledge contained in nuanced discussion. If you enjoy it, consider subscribing, sharing, and commenting.

François Chollet is the creator of Keras, which is an open source deep learning library that is designed to enable fast, user-friendly experimentation with deep neural networks. It serves as an interface to several deep learning libraries, most popular of which is TensorFlow, and it was integrated into TensorFlow main codebase a while back. Aside from creating an exceptionally useful and popular library, François is also a world-class AI researcher and software engineer at Google, and is definitely an outspoken, if not controversial, personality in the AI world, especially in the realm of ideas around the future of artificial intelligence.

Subscribe to this YouTube channel or connect on:
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman
- Support on Patreon: https://www.patreon.com/lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:01 --> 00:00:07
let's go from the philosophical to the

00:00:04 --> 00:00:09
practical I can give me a history of

00:00:06 --> 00:00:11
Karis and all the major deep learning

00:00:08 --> 00:00:13
frameworks that you kind of remember in

00:00:10 --> 00:00:16
relation to chaos and in general

00:00:12 --> 00:00:19
tensorflow siano the old days you give a

00:00:15 --> 00:00:22
brief overview Wikipedia style history

00:00:18 --> 00:00:25
and your role in it before return to AGI

00:00:21 --> 00:00:29
discussions yeah that's a broad topic so

00:00:24 --> 00:00:31
I started working on chaos to the name

00:00:28 --> 00:00:33
chaos at the time I actually picked the

00:00:30 --> 00:00:35
name like just today I was gonna release

00:00:32 --> 00:00:40
it so I started working on it in

00:00:34 --> 00:00:41
February 2015 and so at the time there

00:00:39 --> 00:00:43
weren't too many people working on deep

00:00:40 --> 00:00:46
learning maybe like fewer than 10,000

00:00:42 --> 00:00:48
the software tuning was not really

00:00:45 --> 00:00:48
developed

00:00:47 --> 00:00:53
so the

00:00:49 --> 00:00:56
deepening library was cafe which was

00:00:52 --> 00:00:59
mostly C++ why do I say cafe was the

00:00:55 --> 00:01:02
main one cafe was vastly more popular

00:00:58 --> 00:01:05
than ya know in in late 2014 early 2015

00:01:01 --> 00:01:07
cafe was the one library that everyone

00:01:04 --> 00:01:09
was using for computer vision and

00:01:06 --> 00:01:12
computer vision was the most popular

00:01:08 --> 00:01:14
problem absolutely company like

00:01:11 --> 00:01:17
covenants was like the subfield of

00:01:13 --> 00:01:22
deplaning it everyone was working on so

00:01:16 --> 00:01:25
myself suing in in late 2014 I was

00:01:21 --> 00:01:27
actually interested in islands in Rico

00:01:24 --> 00:01:30
neural networks which was a very niche

00:01:26 --> 00:01:33
topic at the time right III a tree to

00:01:29 --> 00:01:36
catherine around 2016 and so I was

00:01:32 --> 00:01:39
looking for good tools and I had used

00:01:35 --> 00:01:44
torch 7 News Channel you stay on a lot

00:01:38 --> 00:01:49
in Carroll competitions mmm I just cafe

00:01:43 --> 00:01:50
and there was no like good solution for

00:01:48 --> 00:01:53
Ireland's at the time like there was no

00:01:49 --> 00:01:55
reusable open-source implementation of

00:01:52 --> 00:01:58
in lsdm for instance so I decided to

00:01:54 --> 00:02:01
build my own and that first the pitch

00:01:57 --> 00:02:04
for that was it was going to be mostly

00:02:00 --> 00:02:07
around LSTA memory on your networks it

00:02:03 --> 00:02:09
was going to be in Python an important

00:02:06 --> 00:02:11
decision at the time that was Canon are

00:02:08 --> 00:02:15
obvious is that the models would be

00:02:10 --> 00:02:18
defined yeah a Python code which was

00:02:14 --> 00:02:20
kind of like going against the

00:02:17 --> 00:02:22
mainstream at the time because cafe

00:02:19 --> 00:02:25
thailand who wants on like all the big

00:02:21 --> 00:02:26
libraries were actually going with you

00:02:24 --> 00:02:30
approach sharing static configuration

00:02:25 --> 00:02:32
files in yemen to define models so some

00:02:29 --> 00:02:34
libraries were using code to define

00:02:31 --> 00:02:35
models like torch 7 obviously that was

00:02:33 --> 00:02:39
not

00:02:34 --> 00:02:41
python Lezyne was like a piano based

00:02:38 --> 00:02:42
very early library that was I think

00:02:40 --> 00:02:45
developed I don't remember exactly

00:02:41 --> 00:02:47
probably late 2014 Python as well

00:02:44 --> 00:02:51
it's Python as well it was it was like

00:02:46 --> 00:02:53
on top of Tiano and so I started working

00:02:50 --> 00:02:55
on something

00:02:52 --> 00:02:58
and in the value proposition at the time

00:02:54 --> 00:03:01
was that not only that the what I think

00:02:57 --> 00:03:04
was the first reducible open-source

00:03:00 --> 00:03:07
implementation affair astrium

00:03:03 --> 00:03:10
you could combine Islands and covenants

00:03:06 --> 00:03:12
with the same library which is not

00:03:09 --> 00:03:15
really possible before like a he was on

00:03:11 --> 00:03:18
into incontinence and it was kind of

00:03:14 --> 00:03:19
easy to use because so before I was

00:03:17 --> 00:03:21
using the N I was actually doing cycling

00:03:18 --> 00:03:24
and I loved psychically for its

00:03:20 --> 00:03:26
usability so I drew a lot of inspiration

00:03:23 --> 00:03:28
from cycling when I meant Cara's it's

00:03:25 --> 00:03:31
almost like psychically and for neural

00:03:27 --> 00:03:34
networks yeah the fit function exactly

00:03:30 --> 00:03:36
the v function like reducing a complex

00:03:33 --> 00:03:38
training loop to a single function core

00:03:35 --> 00:03:40
right and of course you know some people

00:03:37 --> 00:03:42
will say this is hiding a lot of details

00:03:39 --> 00:03:44
but that's exactly the point

00:03:41 --> 00:03:46
all right the magic is the point right

00:03:43 --> 00:03:48
so it's magical but in a good way it's

00:03:45 --> 00:03:50
magical in the sense that it's

00:03:47 --> 00:03:52
delightful yeah right yeah I'm actually

00:03:49 --> 00:03:55
quite surprised I didn't know that it

00:03:51 --> 00:03:57
was born out of desire to implement our

00:03:54 --> 00:03:59
hands in lc/ms it was that's fascinating

00:03:56 --> 00:04:02
so you were actually one of the first

00:03:58 --> 00:04:04
people to really try to attempt to get

00:04:01 --> 00:04:07
he major architectures together and

00:04:03 --> 00:04:08
it's also interesting you made me

00:04:06 --> 00:04:10
realize that that was a design decision

00:04:07 --> 00:04:13
at all is defining the modeling code

00:04:09 --> 00:04:16
just I'm putting myself in your shoes

00:04:12 --> 00:04:18
whether the yamo especially if cafe was

00:04:15 --> 00:04:21
the most popular it was the most spoken

00:04:17 --> 00:04:23
I might fall if I was I'm if I were yeah

00:04:20 --> 00:04:26
I don't it I didn't like the nominal

00:04:22 --> 00:04:28
thing but it makes more sense that you

00:04:25 --> 00:04:30
will put in a configuration file the

00:04:27 --> 00:04:32
definition of a model that's an

00:04:29 --> 00:04:35
interesting gutsy move just stick with

00:04:31 --> 00:04:37
defining it in code just if you look

00:04:34 --> 00:04:39
back other libraries where we're doing

00:04:36 --> 00:04:42
it this way but it was definitely the

00:04:38 --> 00:04:44
more niche option yeah okay Cara's and

00:04:41 --> 00:04:47
then your ass sorry discus in March 2015

00:04:43 --> 00:04:49
and it got you just pretty much from the

00:04:46 --> 00:04:51
start so the deepening community was

00:04:48 --> 00:04:53
very small at the time

00:04:50 --> 00:04:55
lots of people were starting to be

00:04:52 --> 00:04:56
interested in the rest um so it was

00:04:54 --> 00:04:57
gonna release it at the right time

00:04:55 --> 00:05:00
because it was offering and easy to use

00:04:56 --> 00:05:02
it as implementation exactly at the time

00:04:59 --> 00:05:05
where lots of you started to be

00:05:01 --> 00:05:09
intrigued by the capabilities of O&N on

00:05:04 --> 00:05:09
and so NLP so it it grew from there

00:05:09 --> 00:05:14
then I joined Google

00:05:13 --> 00:05:18
months later and that was actually

00:05:15 --> 00:05:21
completely unrelated to took care of

00:05:17 --> 00:05:24
actually joined a research team working

00:05:20 --> 00:05:25
on image classification mostly like

00:05:23 --> 00:05:27
computer vision so I was doing computer

00:05:24 --> 00:05:29
vision research at Google initially and

00:05:26 --> 00:05:33
immediately when I joined Google I was

00:05:28 --> 00:05:34
exposed to the early internal version of

00:05:32 --> 00:05:37
tensorflow

00:05:33 --> 00:05:39
and the way to peel to me at the time

00:05:36 --> 00:05:43
and it was definitely wait West at the

00:05:38 --> 00:05:44
time is that this was an improved

00:05:42 --> 00:05:47
version of Tiano

00:05:43 --> 00:05:50
so I immediately knew I had to Port

00:05:46 --> 00:05:53
Charles to this new tensorflow thing and

00:05:49 --> 00:05:56
I was actually very busy as as as a

00:05:52 --> 00:05:59
noogler as new Googler so I had not time

00:05:55 --> 00:06:02
to work on that but then in November I

00:05:58 --> 00:06:06
think twist November 2015

00:06:01 --> 00:06:09
tensile flu got released and it was kind

00:06:05 --> 00:06:11
of like my my wake-up call at hey to

00:06:08 --> 00:06:15
actually you know go on make it happen

00:06:10 --> 00:06:17
so in December I I putted cars to run on

00:06:14 --> 00:06:18
two of tensorflow but it was not exactly

00:06:16 --> 00:06:22
port it was more accurate factoring

00:06:17 --> 00:06:24
where I was abstracting away all the

00:06:21 --> 00:06:27
backend functionality into one module

00:06:23 --> 00:06:30
then the same codebase could run on top

00:06:26 --> 00:06:33
of multiple backends right so on top of

00:06:29 --> 00:06:37
danceBlue orthia no and for the next

00:06:32 --> 00:06:41
year yeah no you know state as the

00:06:36 --> 00:06:45
default option it was you know it was

00:06:40 --> 00:06:46
easier to use somewhat let's begin it

00:06:44 --> 00:06:48
was much faster especially when he came

00:06:45 --> 00:06:52
to ordinance but eventually you know a

00:06:47 --> 00:06:55
tensorflow overtook it right and tester

00:06:51 --> 00:06:58
for the early test for a similar

00:06:54 --> 00:07:00
chitectural decisions this piano yeah

00:06:57 --> 00:07:02
so what is there was a natural as a

00:06:59 --> 00:07:06
natural transition yeah absolutely so

00:07:01 --> 00:07:10
what I mean that still carries is the

00:07:05 --> 00:07:13
side almost fun project right yeah so it

00:07:09 --> 00:07:16
was not my job assignment it's not I

00:07:12 --> 00:07:19
was doing it on the side so I'm and even

00:07:15 --> 00:07:21
though it grew to have you know a lot of

00:07:18 --> 00:07:24
uses for a deepening library at the time

00:07:20 --> 00:07:27
like Stroud 2016 but I wasn't doing it

00:07:23 --> 00:07:28
as my main job so things started

00:07:26 --> 00:07:33
changing

00:07:27 --> 00:07:37
in I think it's mustard maybe October

00:07:32 --> 00:07:40
2016 so one year later so Rashad who has

00:07:36 --> 00:07:43
the lead intensive law basically showed

00:07:39 --> 00:07:45
up one day in our building I was doing

00:07:42 --> 00:07:47
like so I was doing research and things

00:07:44 --> 00:07:50
like so I added of computer vision

00:07:46 --> 00:07:53
research also collaborations with

00:07:49 --> 00:07:55
Christians are getting and deplaning for

00:07:52 --> 00:08:01
theory improving this is a really

00:07:54 --> 00:08:04
interesting research topic and so Rajat

00:08:00 --> 00:08:07
was saying hey we so Kara's we liked it

00:08:03 --> 00:08:10
we saw that you had Google why don't you

00:08:06 --> 00:08:12
come over for like a quarter and and and

00:08:09 --> 00:08:14
work with us I was like yeah that sounds

00:08:11 --> 00:08:19
like a great opportunity let's do it and

00:08:13 --> 00:08:20
so I started working on integrating the

00:08:18 --> 00:08:25
chaos API into tends to flow more

00:08:19 --> 00:08:28
tightly so what fold up is sort of like

00:08:24 --> 00:08:31
temporary tents of lonely version of

00:08:27 --> 00:08:35
chaos that was in tents for that contrib

00:08:30 --> 00:08:38
for a while and finally moved to dance

00:08:34 --> 00:08:40
to the core and you know I've never

00:08:37 --> 00:08:43
actually gotten back to my old sim doing

00:08:39 --> 00:08:49
research well it's kind of funny that

00:08:42 --> 00:08:53
somebody like you who dreams of or at

00:08:48 --> 00:08:55
least sees the power of AI systems the

00:08:52 --> 00:08:58
reason and theorem proving we'll talk

00:08:54 --> 00:09:02
about has also created a system and

00:08:57 --> 00:09:04
makes the the most basic kind of Lego

00:09:01 --> 00:09:07
building that is deep learning super

00:09:03 --> 00:09:10
accessible super easy so beautifully so

00:09:06 --> 00:09:12
that's the funny irony that your book is

00:09:09 --> 00:09:16
just both you're responsible for both

00:09:11 --> 00:09:18
ings but so Tessa flow 2.0 it's kind

00:09:15 --> 00:09:20
of there's a sprint I don't know how

00:09:17 --> 00:09:23
long I'll take but there's a sprint

00:09:19 --> 00:09:25
owards the finish what do you look what

00:09:22 --> 00:09:26
are you working on these days what are

00:09:24 --> 00:09:29
you excited about what are you excited

00:09:25 --> 00:09:31
about in 2.0 I mean eager execution

00:09:28 --> 00:09:32
there's so many things that just make it

00:09:30 --> 00:09:35
a lot easier

00:09:31 --> 00:09:38
ya know to work what are you excited

00:09:34 --> 00:09:39
about and what's also really hard what

00:09:37 --> 00:09:42
are the problems you have to kind of

00:09:38 --> 00:09:45
solve so I've spent the past yeah aha

00:09:41 --> 00:09:49
working on 1002 it's been a long journey

00:09:44 --> 00:09:50
I'm actually extremely excited about it

00:09:48 --> 00:09:52
I think it's a great product it's a

00:09:49 --> 00:09:57
delightful product competitors for one

00:09:51 --> 00:10:00
we met huge progress so on the carrot

00:09:56 --> 00:10:04
side what I'm really excited about is

00:09:59 --> 00:10:07
that so you know previously Kara's has

00:10:03 --> 00:10:10
been this very easy-to-use high level

00:10:06 --> 00:10:13
interface to do deep learning but if you

00:10:09 --> 00:10:13
wanted to

00:10:12 --> 00:10:19
you know if you wanted a lot of

00:10:14 --> 00:10:22
lexibility the chaos framework you know

00:10:18 --> 00:10:23
as probably not the optimal way to do

00:10:21 --> 00:10:26
things compared to just writing

00:10:22 --> 00:10:28
everything from scratch so in some way

00:10:25 --> 00:10:31
the framework was getting in the way and

00:10:27 --> 00:10:33
in terms of you - you don't have this at

00:10:30 --> 00:10:35
all actually you have the usability of

00:10:32 --> 00:10:37
the high level interface but you have

00:10:34 --> 00:10:40
the flexibility of this lower level

00:10:36 --> 00:10:44
interface and you have this spectrum of

00:10:39 --> 00:10:48
workflows where you can get more or less

00:10:43 --> 00:10:51
usability and flexibility the trade-offs

00:10:47 --> 00:10:54
depending on your needs right you can

00:10:50 --> 00:10:57
write everything from scratch and you

00:10:53 --> 00:11:00
get a lot of help doing so by you know

00:10:56 --> 00:11:02
sub-classing models and writing some

00:10:59 --> 00:11:04
train loops using ego execution it's

00:11:01 --> 00:11:07
very flexible is very easy to debug is

00:11:03 --> 00:11:09
very powerful but all of these

00:11:06 --> 00:11:12
integrates seamlessly with higher level

00:11:08 --> 00:11:14
features up to you know the classic era

00:11:11 --> 00:11:17
square fruits which which are very

00:11:13 --> 00:11:20
psychically unlike and and you know

00:11:16 --> 00:11:23
ideal for a data scientist machining

00:11:19 --> 00:11:25
engineer type of profile so now you can

00:11:22 --> 00:11:28
have the same framework offering the

00:11:24 --> 00:11:30
same set of api's that enable a spectrum

00:11:27 --> 00:11:33
of workflows that are more or less

00:11:29 --> 00:11:35
Louisville more less high level that are

00:11:32 --> 00:11:38
suitable for you know profiles ranging

00:11:34 --> 00:11:41
from researchers to data scientists and

00:11:37 --> 00:11:41
everything in between

00:11:45 --> 00:11:48
you

<!-- YOUTUBE_TRANSCRIPT_END -->
