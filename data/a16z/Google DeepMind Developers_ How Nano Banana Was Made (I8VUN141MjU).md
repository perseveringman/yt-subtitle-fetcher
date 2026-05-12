---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "I8VUN141MjU"
title: "Google DeepMind Developers: How Nano Banana Was Made"
video_url: "https://www.youtube.com/watch?v=I8VUN141MjU"
thumbnail_url: "https://i.ytimg.com/vi/I8VUN141MjU/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=I8VUN141MjU"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-10-28T17:00:23.000Z"
upload_date: "2025-10-28"
duration_seconds: 3252
duration_human: "54:12"
view_count: 6118
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:31:48.073Z"
---

# Google DeepMind Developers: How Nano Banana Was Made

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=I8VUN141MjU
- video_id: I8VUN141MjU
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-10-28T17:00:23.000Z
- upload_date: 2025-10-28
- duration: 54:12
- view_count: 6118
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

Google DeepMind’s new image model Nano Banana took the internet by storm.

In this episode, we sit down with Principal Scientist Oliver Wang and Group Product Manager Nicole Brichtova to discuss how Nano Banana was created, why it’s so viral, and the future of image and video editing.

Timestamps:
00:00 Intro
02:00 The Origin of Nano Banana and How It Got Its Name
04:15 The “Wow” Moments and Viral Launch
06:20 Seeing Yourself in AI
08:40 How AI Is Changing Art and Creative Work
11:00 Control, Customization & Character Consistency
14:00 Building Interfaces for Artists and Everyday Users
17:10 AI in Education and Visual Learning
20:25 Multimodal AI and the Future of Creativity
24:10 2D vs 3D: The Debate Over World Models
27:20 The Challenge of Taste, Preference & Artistic Style
31:10 The Japan Phenomenon & Creative Communities
35:00 From Images to Video: The Next Frontier
41:00 Working With Artists and Designing With Intent
47:30 The Next Era of Image Models
53:50 Closing Thoughts

Follow Oliver on X: https://x.com/oliver_wang2
Follow Nicole on X: https://x.com/nbrichtova
Follow Guido on X: https://x.com/appenz
Follow Yoko on X: https://x.com/stuffyokodraws
Follow Justine on X: https://x.com/venturetwins

Stay Updated: 
If you enjoyed this episode, be sure to like, subscribe, and share with your friends!

Follow a16z on X: https://x.com/a16z
Subscribe to a16z on Substack: https://a16z.substack.com/
Follow a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Listen to the a16z Podcast on Spotify: https://open.spotify.com/show/5bC65RDvs3oxnLyqqvkUYX
Listen to the a16z Podcast on Apple Podcasts: https://podcasts.apple.com/us/podcast/a16z-podcast/id842818711

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:07
These models are allowing creators to do

00:00:03 --> 00:00:09
um less tedious parts of the job, right?

00:00:06 --> 00:00:11
They can be more creative and they can

00:00:08 --> 00:00:13
spend, you know, 90% of their time being

00:00:10 --> 00:00:15
creative versus 90% of their time like

00:00:12 --> 00:00:16
diting things and doing these tedious

00:00:14 --> 00:00:18
kind of manual operations.

00:00:15 --> 00:00:20
>> I'm convinced that this ultimately

00:00:17 --> 00:00:22
really empowers the artists, right? It

00:00:19 --> 00:00:23
gives you new tools, right? It's like,

00:00:21 --> 00:00:25
hey, we now have, I don't know,

00:00:22 --> 00:00:26
watercolors for Michelangelo. Let's see

00:00:24 --> 00:00:30
what he does with it, right? And amazing

00:00:26 --> 00:00:30
things come out.

00:00:30 --> 00:00:35
maybe start by telling us about the

00:00:32 --> 00:00:37
backstory behind the nano banano model.

00:00:34 --> 00:00:39
How did it come to be? How did you all

00:00:36 --> 00:00:42
start working on it?

00:00:38 --> 00:00:44
>> Sure. So um you know our our team has

00:00:41 --> 00:00:47
worked on image models for some time. We

00:00:43 --> 00:00:49
developed the imagine family of models

00:00:46 --> 00:00:52
which is goes back a couple years. Um

00:00:48 --> 00:00:53
and and actually there was also an um an

00:00:51 --> 00:00:55
image generation model in Gemini before

00:00:52 --> 00:00:58
the Gemini 2.0 image generation model.

00:00:54 --> 00:01:02
So what happened was the um the teams

00:00:57 --> 00:01:04
kind of started to focus more on the

00:01:01 --> 00:01:06
Gemini use cases. So like interactive

00:01:03 --> 00:01:08
conversational and and editing

00:01:05 --> 00:01:10
>> um and and essentially what happened is

00:01:07 --> 00:01:12
we teamed up and we we built this model

00:01:09 --> 00:01:15
which became what's known as nano

00:01:11 --> 00:01:16
banana. Um so yeah that's sort of the

00:01:14 --> 00:01:18
origin story but

00:01:15 --> 00:01:20
>> yeah and and I think maybe just some

00:01:17 --> 00:01:22
more background on that. So our imagine

00:01:19 --> 00:01:24
models were always kind of top of the

00:01:21 --> 00:01:25
charts for visual quality and you know

00:01:23 --> 00:01:28
e really focus on kind of these

00:01:24 --> 00:01:30
specialized generation editing use cases

00:01:27 --> 00:01:32
and then when 2.0 Flash came out that's

00:01:29 --> 00:01:34
when we really started to see some of

00:01:31 --> 00:01:36
the magic of like being able to generate

00:01:33 --> 00:01:38
images and text at the same time so you

00:01:35 --> 00:01:40
can maybe tell a story. Um just the

00:01:37 --> 00:01:42
magic of being able to talk to images

00:01:39 --> 00:01:44
and edit them conversationally. Uh but

00:01:41 --> 00:01:46
he visual quality was maybe not where

00:01:43 --> 00:01:49
we wanted it to be. And so Nano Banana

00:01:45 --> 00:01:51
or Gemini 2.5 flash image um

00:01:48 --> 00:01:52
>> Nano Banana is way cooler.

00:01:50 --> 00:01:53
>> It's it's easier to say. It's a lot

00:01:51 --> 00:01:54
easier.

00:01:52 --> 00:01:56
>> It's the name that stuck.

00:01:53 --> 00:01:58
>> Yes, it's the name that stuck. Uh but it

00:01:55 --> 00:02:00
really became kind of the best of both

00:01:57 --> 00:02:02
worlds in that sense like the Gemini

00:01:59 --> 00:02:03
smartness and the multimodal kind of

00:02:01 --> 00:02:05
conversational nature of it plus the

00:02:02 --> 00:02:06
visual quality of imagine. And I feel

00:02:04 --> 00:02:08
ike that's maybe what resonates a lot

00:02:06 --> 00:02:11
with people.

00:02:07 --> 00:02:12
>> Wow. Amazing. Um, so I guess when you

00:02:10 --> 00:02:15
were testing out a model, as you were

00:02:11 --> 00:02:17
developing it, what were some wow

00:02:14 --> 00:02:19
moments um that you found, I know this

00:02:16 --> 00:02:21
going to go viral. I know people will

00:02:18 --> 00:02:24
ove this.

00:02:20 --> 00:02:26
>> I So I actually didn't feel like it was

00:02:23 --> 00:02:30
going to go viral until we had released

00:02:25 --> 00:02:32
on Ellarina. And what we saw was that we

00:02:29 --> 00:02:34
budgeted like, you know, a comparable

00:02:31 --> 00:02:35
amount of queries per second as we had

00:02:33 --> 00:02:38
for our previous models that were on Elm

00:02:34 --> 00:02:40
Marina. And we had to keep upping that

00:02:37 --> 00:02:42
number as people were going to Ella

00:02:39 --> 00:02:43
Marina to use the model. And I feel like

00:02:41 --> 00:02:45
that was the first time when I was

00:02:42 --> 00:02:47
really like, "Oh, wow. This is something

00:02:44 --> 00:02:49
that's very very useful to a lot of

00:02:46 --> 00:02:50
people." Like I it surprised even me. I

00:02:48 --> 00:02:51
don't know about the whole team, but

00:02:49 --> 00:02:54
like we, you know, we were trying to

00:02:50 --> 00:02:57
make the best conversational editing

00:02:53 --> 00:02:59
model possible. But um but then it

00:02:56 --> 00:03:01
really started taking off when when yeah

00:02:58 --> 00:03:02
when people were like going out of their

00:03:00 --> 00:03:04
way and using a using a website that

00:03:02 --> 00:03:05
would actually only give you the model

00:03:03 --> 00:03:08
some percentage of the time. But even

00:03:04 --> 00:03:09
that was worth like using going to that

00:03:07 --> 00:03:11
website to use the model. So I think

00:03:08 --> 00:03:12
that was really the moment at least for

00:03:10 --> 00:03:13
me that I was like oh wow this is this

00:03:11 --> 00:03:14
going to be bigger.

00:03:12 --> 00:03:16
>> That's actually the best way to

00:03:13 --> 00:03:18
condition people like only give them a

00:03:15 --> 00:03:21
rewards partially [laughter]

00:03:17 --> 00:03:24
not all the time by design. Uh I had a

00:03:20 --> 00:03:27
moment earlier um and that was when so

00:03:23 --> 00:03:29
I've been trying some similar queries on

00:03:26 --> 00:03:31
kind of multiple generations of models

00:03:28 --> 00:03:33
over time. Um and a lot of them have to

00:03:30 --> 00:03:36
do with like things I wanted to be as a

00:03:32 --> 00:03:38
kid. So like an astronaut explorer or

00:03:35 --> 00:03:39
you know put me on the red carpet and I

00:03:37 --> 00:03:42
tried it on a demo that we had

00:03:38 --> 00:03:43
internally before we released the model.

00:03:41 --> 00:03:46
It was the first time when the output

00:03:42 --> 00:03:48
actually looked like me. Um and you know

00:03:45 --> 00:03:49
you guys play with these models all the

00:03:47 --> 00:03:51
time. The only time that I've seen that

00:03:48 --> 00:03:54
before is if you know you fine-tune a

00:03:50 --> 00:03:56
model, you know, using Laura or some

00:03:53 --> 00:03:57
other method to like do that and you

00:03:55 --> 00:03:58
need multiple images and takes a really

00:03:56 --> 00:04:00
long time and then you have to like

00:03:57 --> 00:04:02
actually serve it somewhere. So this was

00:03:59 --> 00:04:04
the first time when it was like zero

00:04:01 --> 00:04:06
shot. Oh wow, just one image of me and

00:04:03 --> 00:04:07
it looks like me and I was like wow. And

00:04:05 --> 00:04:09
then there became these like we have

00:04:06 --> 00:04:10
decks that are just like covered in my

00:04:08 --> 00:04:13
face as I was trying to convince other

00:04:09 --> 00:04:15
people that it was really cool. Um, and

00:04:12 --> 00:04:17
really I think the moment more people

00:04:14 --> 00:04:19
realized that it was like a really fun

00:04:16 --> 00:04:20
feature to use is when they tried it on

00:04:18 --> 00:04:22
themselves because it's it's kind of fun

00:04:19 --> 00:04:24
when you see it on another person, but

00:04:21 --> 00:04:26
it doesn't really resonate with people

00:04:23 --> 00:04:28
motionally. It makes it so personal.

00:04:25 --> 00:04:31
It's like you your kids, you know, your

00:04:27 --> 00:04:33
spouse and and I think that's your dog,

00:04:30 --> 00:04:34
>> your dog. And and and that's really what

00:04:32 --> 00:04:36
started kind of resonating internally.

00:04:33 --> 00:04:37
And then people just started making all

00:04:35 --> 00:04:39
these like 80s makeover versions of

00:04:36 --> 00:04:40
themselves. And that's when we really

00:04:38 --> 00:04:41
started to see like a lot of internal

00:04:39 --> 00:04:42
activity and we were like, "Okay, we're

00:04:40 --> 00:04:44
on to something."

00:04:42 --> 00:04:46
>> It's it's a lot of fun to test these

00:04:43 --> 00:04:48
models when we're making them because

00:04:45 --> 00:04:49
you just you see all these amazing

00:04:47 --> 00:04:50
creative things that people make. Oh,

00:04:48 --> 00:04:51
wow. I I never thought that was

00:04:49 --> 00:04:52
possible.

00:04:50 --> 00:04:54
>> So, it's it's really fun.

00:04:51 --> 00:04:55
>> No, it's I mean, we've dealt with the

00:04:53 --> 00:04:58
whole with the whole family and it's

00:04:54 --> 00:05:01
it's a it's a crazy amount of fun.

00:04:57 --> 00:05:02
>> So, think a bit about long term. Where

00:05:00 --> 00:05:05
does this lead? Right. I mean we we

00:05:01 --> 00:05:08
built these new tools that I think will

00:05:04 --> 00:05:10
change visual arts forever, right? I

00:05:07 --> 00:05:12
mean there we suddenly can transfer

00:05:09 --> 00:05:14
style. We suddenly can you generate

00:05:11 --> 00:05:16
consistent images of a subject, right? I

00:05:13 --> 00:05:18
have I have what used to be a very

00:05:15 --> 00:05:19
complex manual Photoshop process.

00:05:17 --> 00:05:22
Suddenly I type one command and

00:05:18 --> 00:05:24
magically happens. But what's the end

00:05:21 --> 00:05:25
state of this? I mean do do we have an

00:05:23 --> 00:05:27
idea yet? You know how will how will

00:05:24 --> 00:05:31
creative arts be taught in a university

00:05:26 --> 00:05:33
in you know five years from now?

00:05:30 --> 00:05:36
want to take that.

00:05:32 --> 00:05:38
>> So I I think it's going to be a spectrum

00:05:35 --> 00:05:39
of things, right? I think on the

00:05:37 --> 00:05:41
professional side, a lot of what we're

00:05:38 --> 00:05:45
hearing is that these models are

00:05:40 --> 00:05:47
allowing creators to do um less tedious

00:05:44 --> 00:05:49
parts of the job, right? They can be

00:05:46 --> 00:05:51
more creative and they can spend, you

00:05:48 --> 00:05:53
know, 90% of their time being creative

00:05:50 --> 00:05:55
rsus 90% of their time like editing

00:05:52 --> 00:05:57
things and doing these tedious kind of

00:05:54 --> 00:05:58
manual operations. So I'm really excited

00:05:56 --> 00:06:00
about that. Like I think we'll see kind

00:05:58 --> 00:06:03
of an explosion of creativity like on

00:06:00 --> 00:06:05
that side of the spectrum. Um and then I

00:06:02 --> 00:06:07
think for consumers there's sort of like

00:06:04 --> 00:06:10
two spect two sides of the spectrum for

00:06:06 --> 00:06:11
this probably. One is you know you might

00:06:09 --> 00:06:14
just be doing some of these fun things

00:06:10 --> 00:06:16
like Halloween costumes for my kid,

00:06:13 --> 00:06:17
right? And and the out the goal there is

00:06:15 --> 00:06:19
probably just to like share it with

00:06:16 --> 00:06:21
somebody, right? Your family or your

00:06:18 --> 00:06:23
friends. Um on the other side of the

00:06:20 --> 00:06:24
spectrum, you might have these tasks

00:06:22 --> 00:06:26
like putting together a slide deck,

00:06:23 --> 00:06:28
right? I started out as a consultant. We

00:06:25 --> 00:06:30
talked about that at the beginning. Um,

00:06:27 --> 00:06:32
and you spend a lot of time on like very

00:06:29 --> 00:06:33
tedious things like trying to make

00:06:31 --> 00:06:35
things look good, trying to make the

00:06:32 --> 00:06:37
story make sense. I think for those

00:06:34 --> 00:06:39
types of tasks, you probably just have

00:06:36 --> 00:06:41
an agent who you give the specs of what

00:06:38 --> 00:06:43
you're trying to do and that it goes out

00:06:40 --> 00:06:46
and like actually lays it out nicely for

00:06:42 --> 00:06:47
you. It creates the right visual for the

00:06:45 --> 00:06:49
information that you're trying to

00:06:46 --> 00:06:50
convey. And it really is going to be

00:06:48 --> 00:06:52
this, I think, spectrum depending on

00:06:49 --> 00:06:54
what you're trying to do. Like do you

00:06:51 --> 00:06:55
want to be in the creative process and

00:06:53 --> 00:06:57
actually tinker with things and

00:06:54 --> 00:06:59
collaborate with the model or do you

00:06:56 --> 00:07:00
just want the model to like go do the

00:06:58 --> 00:07:02
task and be as minimally involved as

00:07:00 --> 00:07:05
possible?

00:07:01 --> 00:07:06
>> So So in this new world then what what

00:07:04 --> 00:07:09
is art? I mean somebody recently said

00:07:06 --> 00:07:12
art is if you can create an an out of

00:07:08 --> 00:07:13
distribution sample. Is is that a good

00:07:11 --> 00:07:14
efinition or or is it is it is it

00:07:12 --> 00:07:16
aiming too high? Right.

00:07:14 --> 00:07:18
>> Do you think if art is out of

00:07:15 --> 00:07:18
distribution or in distribution for the

00:07:17 --> 00:07:20
model?

00:07:17 --> 00:07:21
>> There we go. [laughter]

00:07:19 --> 00:07:23
I think that out of distribution sample

00:07:20 --> 00:07:25
that is a little bit too restrictive. I

00:07:22 --> 00:07:27
think a lot of great art is actually in

00:07:24 --> 00:07:30
distribution for art that occurred

00:07:26 --> 00:07:32
before it. So I I mean what is art? I

00:07:29 --> 00:07:33
think it's like a very philosophical

00:07:31 --> 00:07:35
debate and there's a lot of people that

00:07:32 --> 00:07:37
do discuss this. Like to me I think that

00:07:34 --> 00:07:40
he most important thing for art is

00:07:36 --> 00:07:43
intent. And so the the what is generated

00:07:39 --> 00:07:45
from these models is is a tool to allow

00:07:42 --> 00:07:47
people to create art. And I'm actually

00:07:44 --> 00:07:48
not worried about the high-end and the

00:07:46 --> 00:07:50
creatives and the professionals because

00:07:47 --> 00:07:52
I've seen like if you put me in front of

00:07:49 --> 00:07:53
one of these models like I can't create

00:07:51 --> 00:07:55
anything that anyone wants to see

00:07:52 --> 00:07:57
>> but like and but I've seen what people

00:07:54 --> 00:07:59
can do who are creative people and who

00:07:56 --> 00:08:00
have like intent and these ideas and I

00:07:58 --> 00:08:02
think it's like

00:07:59 --> 00:08:03
>> that's the most interesting thing to me

00:08:01 --> 00:08:06
is is the things they create are really

00:08:02 --> 00:08:08
amazing and and inspiring for me. So, I

00:08:05 --> 00:08:09
feel like the the high-end and the the

00:08:07 --> 00:08:12
professionals and the creatives,

00:08:08 --> 00:08:13
like they'll always use state-of-the-art

00:08:11 --> 00:08:15
ools, and this is like another tool in

00:08:12 --> 00:08:18
the tool belt for people to make cool

00:08:14 --> 00:08:19
things. I think one of the the really

00:08:17 --> 00:08:21
interesting things that I kept hearing

00:08:18 --> 00:08:24
about this model in particular from like

00:08:20 --> 00:08:26
creatives and artists was a lot of them

00:08:23 --> 00:08:28
felt like they couldn't use a lot of AI

00:08:25 --> 00:08:30
tools before because it didn't allow

00:08:27 --> 00:08:33
them the level of control that they

00:08:29 --> 00:08:36
expected for their art. what on one side

00:08:32 --> 00:08:39
that was like the um characters or

00:08:35 --> 00:08:41
object consistency like they really used

00:08:38 --> 00:08:44
that to have a compelling narrative for

00:08:40 --> 00:08:45
a story and so before when you couldn't

00:08:43 --> 00:08:48
get the same character over and over it

00:08:44 --> 00:08:50
was very difficult and then I think

00:08:47 --> 00:08:53
second the like second thing I hear all

00:08:49 --> 00:08:55
the time from artists is like um they

00:08:52 --> 00:08:57
love being able to upload multiple

00:08:54 --> 00:09:00
images and say like use the style of

00:08:56 --> 00:09:02
this on this character or add this thing

00:08:59 --> 00:09:04
to this image which is something that I

00:09:02 --> 00:09:07
think was very hard to do even with

00:09:03 --> 00:09:08
previous image edit models. I guess I'm

00:09:06 --> 00:09:11
curious like was that something you guys

00:09:08 --> 00:09:12
were really optimizing for when when you

00:09:10 --> 00:09:14
trained this one or or how did you think

00:09:12 --> 00:09:16
about that?

00:09:13 --> 00:09:18
>> I mean yeah definitely sort of

00:09:15 --> 00:09:21
customizability and character

00:09:17 --> 00:09:22
consistency are things that we closely

00:09:20 --> 00:09:24
monitored during the development and we

00:09:21 --> 00:09:27
tried to do the best job we could on

00:09:23 --> 00:09:29
them. Um, I think another thing is also

00:09:26 --> 00:09:32
uh the iterative nature of kind of like

00:09:28 --> 00:09:33
an interactive conversation. Um, and you

00:09:31 --> 00:09:35
know, art tends to be iterative as well

00:09:32 --> 00:09:36
where you you make lots of changes, you

00:09:34 --> 00:09:38
see how it where it's going and you make

00:09:35 --> 00:09:40
more. Um, and this is another thing I

00:09:37 --> 00:09:41
think makes the model more useful and

00:09:39 --> 00:09:43
actually that's an area that I also

00:09:40 --> 00:09:45
feel like we can improve the model

00:09:42 --> 00:09:47
greatly. Like I know that um once you

00:09:44 --> 00:09:49
get into really long conversations like

00:09:46 --> 00:09:50
it it starts to follow um your

00:09:48 --> 00:09:52
instructions a little bit worse. But

00:09:49 --> 00:09:54
like this something that we're planning

00:09:51 --> 00:09:55
to improve on and make the model more

00:09:53 --> 00:09:58
kind of like a natural conversation

00:09:54 --> 00:10:00
partner or like a creative partner in in

00:09:57 --> 00:10:02
making something.

00:09:59 --> 00:10:04
>> One thing that's so interesting is after

00:10:01 --> 00:10:06
you guys launched Nano Banana, we start

00:10:03 --> 00:10:08
o hear about editing models all the

00:10:05 --> 00:10:10
time everywhere. Like it's like after

00:10:08 --> 00:10:12
you launched the world woke up and they

00:10:09 --> 00:10:15
were editing model, it's great, everyone

00:10:11 --> 00:10:17
wants it. And then obviously like it it

00:10:14 --> 00:10:19
kind of um you know goes into the

00:10:16 --> 00:10:22
customizability the personalization of

00:10:18 --> 00:10:24
it and then uh Oliver I know you used to

00:10:21 --> 00:10:27
be Adobe and then there's also software

00:10:23 --> 00:10:29
where we used to manually edit things.

00:10:26 --> 00:10:31
How do you see the knobs evolve now on

00:10:28 --> 00:10:36
the model layer versus what we used to

00:10:30 --> 00:10:38
do? Um, yeah. I mean, I think that, you

00:10:35 --> 00:10:39
know, one thing that that Adobe has

00:10:37 --> 00:10:42
always done and the professional tools

00:10:38 --> 00:10:44
generally require is lots of of control,

00:10:41 --> 00:10:46
lots of knobs, lots of of So, there's

00:10:43 --> 00:10:48
always a balance of like we want someone

00:10:45 --> 00:10:50
to be able to use this on their phone.

00:10:47 --> 00:10:51
>> Um, maybe with just like a a voice

00:10:49 --> 00:10:54
interface,

00:10:50 --> 00:10:56
>> and we also want someone who can really

00:10:53 --> 00:10:58
like a really professional art creative

00:10:55 --> 00:11:00
to be able to do fine skill adjustments.

00:10:57 --> 00:11:03
I think we haven't exactly figured out

00:10:59 --> 00:11:04
how to enable both of those yet. Um, but

00:11:02 --> 00:11:07
here's a lot of people that are

00:11:03 --> 00:11:10
building really compelling UIs like um

00:11:06 --> 00:11:11
and and and I think it's a you know

00:11:09 --> 00:11:14
e're Yeah, I think I think there's

00:11:10 --> 00:11:16
different ways it can be done. Um, I

00:11:13 --> 00:11:19
don't know. You have thoughts?

00:11:15 --> 00:11:20
>> Well, I also hope that we get to a point

00:11:18 --> 00:11:22
where you don't have to learn what all

00:11:19 --> 00:11:25
these controls mean and the model can

00:11:21 --> 00:11:27
maybe smartly suggest what you could do

00:11:24 --> 00:11:29
next based on the context of what you've

00:11:26 --> 00:11:31
already done, right? Um, and that feels

00:11:28 --> 00:11:34
like it's kind of prime for someone to

00:11:30 --> 00:11:36
tackle that on. So like what do the UIs

00:11:33 --> 00:11:38
of the future look like um, in a way

00:11:35 --> 00:11:39
where you probably don't need to learn a

00:11:37 --> 00:11:40
hundred things that you had to before,

00:11:38 --> 00:11:42
but like the tools should be smart

00:11:40 --> 00:11:44
enough to suggest to you what it can do

00:11:41 --> 00:11:45
based on what you're already doing.

00:11:43 --> 00:11:47
>> That's such an insightful take. I

00:11:44 --> 00:11:50
definitely had moments when when I used

00:11:46 --> 00:11:51
Nano Banana, I was like, I didn't know I

00:11:49 --> 00:11:54
wanted this, but

00:11:50 --> 00:11:55
>> but I didn't even ask for this style. I

00:11:53 --> 00:11:57
don't even know have the words for that

00:11:54 --> 00:11:59
what that style even, you know, is

00:11:56 --> 00:12:01
called. So this is like very insightful

00:11:58 --> 00:12:03
on how image embedding and the language

00:12:00 --> 00:12:05
mbedding is not one to one like we

00:12:02 --> 00:12:08
cannot map to like all the editing task

00:12:04 --> 00:12:10
with language. So oh go ahead.

00:12:07 --> 00:12:11
>> Yeah, let me let me sort of take a

00:12:09 --> 00:12:14
little the counter point just to see

00:12:10 --> 00:12:15
where this goes.

00:12:13 --> 00:12:17
>> The other the question of how complex

00:12:14 --> 00:12:19
the interface be can be limited by sort

00:12:16 --> 00:12:20
of what we can express in software, how

00:12:18 --> 00:12:21
easy we can make something in software

00:12:19 --> 00:12:23
which to some degree is also limited by

00:12:20 --> 00:12:25
how much complexity is a user willing to

00:12:22 --> 00:12:26
lerate. And you know if you have a

00:12:24 --> 00:12:27
professional

00:12:25 --> 00:12:29
>> they only care about the result they're

00:12:26 --> 00:12:30
willing to tolerate a vast amount of

00:12:28 --> 00:12:32
complexity they they have the training

00:12:29 --> 00:12:34
they have the education they have the

00:12:31 --> 00:12:36
xperience to use that right then we may

00:12:33 --> 00:12:38
end up with lots of knobs and dials it's

00:12:35 --> 00:12:40
just very different of dials right I

00:12:37 --> 00:12:43
mean today if you use a cursor or so for

00:12:39 --> 00:12:45
coding it's not that it has a super easy

00:12:42 --> 00:12:47
ou know single text prompt interface it

00:12:44 --> 00:12:49
has it has a a good amount of you know

00:12:46 --> 00:12:52
here add context here different modes

00:12:48 --> 00:12:54
and so on right so so

00:12:51 --> 00:12:56
will we have Will we have like the the

00:12:53 --> 00:12:58
ultra sophisticated interface for the

00:12:55 --> 00:13:00
power user and how how would

00:12:57 --> 00:13:02
that look like? So I'm a big fan of

00:12:59 --> 00:13:02
Comfy UI and nodebased interfaces in

00:13:01 --> 00:13:04
general

00:13:01 --> 00:13:06
>> and that is complex

00:13:03 --> 00:13:08
>> and it's complex but it's also it's very

00:13:05 --> 00:13:10
robust and you can do a lot of things

00:13:07 --> 00:13:12
and so you know after we released Nano

00:13:09 --> 00:13:14
Banana we saw people building all these

00:13:11 --> 00:13:16
really complicated comfy UI workflows

00:13:13 --> 00:13:17
where they were combining a bunch of

00:13:15 --> 00:13:18
different models together and different

00:13:16 --> 00:13:20
ools and that generated some of the

00:13:17 --> 00:13:22
like for example using nanobana as um as

00:13:20 --> 00:13:25
a way to get storyboards or key frames

00:13:21 --> 00:13:26
for video models like you can plug these

00:13:24 --> 00:13:28
things together and and get really

00:13:26 --> 00:13:30
amazing outputs. So, I I think that like

00:13:27 --> 00:13:32
at the the pro or the developer level,

00:13:29 --> 00:13:35
like these kinds of interfaces are are

00:13:31 --> 00:13:36
great. Um, in terms of like the proumer

00:13:34 --> 00:13:37
level, I think it's it's very much

00:13:35 --> 00:13:38
unknown what it's going to look like in

00:13:36 --> 00:13:40
a couple years.

00:13:37 --> 00:13:42
>> Yeah. I think it just really depends on

00:13:39 --> 00:13:43
your audience, right? Because for the

00:13:41 --> 00:13:45
regular consumer, like I use my parents

00:13:42 --> 00:13:46
always as an example. The chatbot is

00:13:44 --> 00:13:47
actually kind of great.

00:13:45 --> 00:13:49
>> Oh, yeah.

00:13:46 --> 00:13:51
>> Because you don't have to learn a new

00:13:48 --> 00:13:52
UI. You you just upload your images and

00:13:50 --> 00:13:54
then you talk to them, right? Like it's

00:13:51 --> 00:13:56
kind of amazing that way. Then for

00:13:53 --> 00:13:58
the pros, I agree that like you need so

00:13:55 --> 00:14:00
much more control than you know and then

00:13:57 --> 00:14:01
there's somewhere in between probably

00:13:59 --> 00:14:04
which are people who may want to be

00:14:00 --> 00:14:05
doing this but they were too intimidated

00:14:03 --> 00:14:07
by the professional tools in the past

00:14:04 --> 00:14:09
and for them I do think that there's a

00:14:06 --> 00:14:11
space of like that you need more control

00:14:08 --> 00:14:12
than the chatbot gives you. Uh but you

00:14:10 --> 00:14:13
don't need as much control as what the

00:14:11 --> 00:14:16
professional tools give you and like

00:14:12 --> 00:14:17
what's that kind of in between state?

00:14:15 --> 00:14:19
>> There's a ton of opportunity there.

00:14:16 --> 00:14:20
It

00:14:18 --> 00:14:23
is interesting you mentioned comfy UI

00:14:19 --> 00:14:25
because it's on the other far spectrum

00:14:22 --> 00:14:27
of workflow like a workflow can have

00:14:24 --> 00:14:30
hundreds of steps and notes and you need

00:14:26 --> 00:14:31
to make sure all of them work whereas on

00:14:29 --> 00:14:33
the other side of the spectrum there's

00:14:30 --> 00:14:34
nano banana you kind of describe

00:14:32 --> 00:14:36
something with words and then you get

00:14:34 --> 00:14:38
something out like I don't know what's a

00:14:35 --> 00:14:41
model architecture stuff like that but

00:14:38 --> 00:14:43
um I guess is your view that the world

00:14:40 --> 00:14:46
is moving to an ensemble of a model

00:14:42 --> 00:14:48
hosted by one provider doing it all or

00:14:45 --> 00:14:50
do you think the world is moving to more

00:14:48 --> 00:14:53
of everyone building a workflow. Nano

00:14:49 --> 00:14:55
Banana is one of the nodes in comfy work

00:14:52 --> 00:14:58
UI.

00:14:54 --> 00:15:01
>> Um I I definitely don't think that that

00:14:57 --> 00:15:04
he the broad amount of use cases will

00:15:00 --> 00:15:05
be fully satisfied by one model at any

00:15:03 --> 00:15:08
point. So I think that there will always

00:15:04 --> 00:15:10
be a diversity of models. some like um

00:15:07 --> 00:15:12
I'll give you an example, but some you

00:15:09 --> 00:15:14
know we could we could optimize for um

00:15:11 --> 00:15:15
instruction following in our models.

00:15:13 --> 00:15:18
Make sure it does exactly what you want,

00:15:14 --> 00:15:20
but it might be um a worse model for

00:15:17 --> 00:15:21
someone who's looking for ideiation or

00:15:19 --> 00:15:23
kind of inspiration where they want the

00:15:20 --> 00:15:25
model to kind of take over and and do

00:15:22 --> 00:15:26
ther things, go crazy. So like I just

00:15:24 --> 00:15:27
hink there's so many different use

00:15:25 --> 00:15:28
cases and so many types of people that

00:15:26 --> 00:15:30
like there's a lot of space there's a

00:15:28 --> 00:15:32
lot of room in this space for multiple

00:15:29 --> 00:15:33
models. So that's that's where I see us

00:15:31 --> 00:15:36
going. I don't think this is going to be

00:15:32 --> 00:15:37
like a single to rule it a single model

00:15:35 --> 00:15:39
to rule them all.

00:15:36 --> 00:15:41
>> Complete sense. Let's go to the very

00:15:38 --> 00:15:42
other end of the spectrum from the

00:15:40 --> 00:15:44
professional. Do you think

00:15:41 --> 00:15:46
indergarteners in the future will learn

00:15:43 --> 00:15:48
drawing by by sketching something, you

00:15:45 --> 00:15:50
know, on a on a little tablet and then

00:15:47 --> 00:15:52
you have the AI make turn that into a

00:15:49 --> 00:15:54
beautiful image and and so that's how

00:15:51 --> 00:15:56
they they allow get in touch with

00:15:53 --> 00:15:58
art. I don't know if you always wanted

00:15:55 --> 00:16:00
to turn into a beautiful image, but I

00:15:58 --> 00:16:03
think there's something there

00:15:59 --> 00:16:05
about the AI being again a partner and a

00:16:02 --> 00:16:06
teacher to you in a way that you like

00:16:04 --> 00:16:09
didn't have. So I

00:16:05 --> 00:16:11
>> didn't know how to draw, still don't um

00:16:08 --> 00:16:13
don't have any talent for it really. Uh,

00:16:10 --> 00:16:15
but I think it would be great if we

00:16:12 --> 00:16:16
could use these tools in a way that

00:16:14 --> 00:16:18
actually teaches you kind of the step by

00:16:15 --> 00:16:19
steps and helps you critique and maybe

00:16:17 --> 00:16:22
again shows you kind of like an

00:16:18 --> 00:16:23
autocomplete almost for images like what

00:16:21 --> 00:16:25
like like what's the next step that I

00:16:22 --> 00:16:26
could take, right? Or maybe show me a

00:16:24 --> 00:16:28
couple of options and like how do I

00:16:25 --> 00:16:30
actually do this? So, I hope it's more

00:16:27 --> 00:16:32
that direction. I I don't think we all

00:16:29 --> 00:16:35
want, you know, every 5-year-old's image

00:16:31 --> 00:16:37
to suddenly look perfect. [laughter]

00:16:34 --> 00:16:39
>> We we we would probably lose something

00:16:36 --> 00:16:41
um in the process. As someone who

00:16:38 --> 00:16:42
struggled the most in high school out of

00:16:40 --> 00:16:44
all my classes of the art and the

00:16:41 --> 00:16:46
sketching class, I actually would have

00:16:43 --> 00:16:48
preferred it, but I know a

00:16:45 --> 00:16:50
lot of people want their kids to learn

00:16:47 --> 00:16:51
to draw, which I understand.

00:16:49 --> 00:16:54
>> It's funny because we've been trying to

00:16:50 --> 00:16:56
get the model to create um like

00:16:53 --> 00:16:57
childlike crayon drawings, which is

00:16:55 --> 00:16:59
actually quite challenging.

00:16:56 --> 00:17:01
>> Um, ironically, you know, sometimes the

00:16:58 --> 00:17:03
things that are hard to make are

00:17:00 --> 00:17:04
because the level of abstraction is very

00:17:02 --> 00:17:05
large, right?

00:17:03 --> 00:17:06
>> So, it's actually quite difficult to

00:17:04 --> 00:17:09
make those types of images. your

00:17:06 --> 00:17:13
dedicated prek fin. [laughter]

00:17:08 --> 00:17:15
>> We we do have seminar evals right now

00:17:12 --> 00:17:18
>> to try to see if we're getting better.

00:17:14 --> 00:17:20
>> I'm in general I'm very optimistic about

00:17:17 --> 00:17:22
AI for education. And you know part of

00:17:19 --> 00:17:23
the reason is I think that most of us

00:17:21 --> 00:17:26
are visual learners,

00:17:22 --> 00:17:27
>> right? So that AI right now as a tutor

00:17:25 --> 00:17:29
basically all it can do is is talk to

00:17:26 --> 00:17:32
you or give you text to read and that's

00:17:28 --> 00:17:34
definitely not how students learn. So I

00:17:31 --> 00:17:37
think that these models have a lot of

00:17:33 --> 00:17:39
potential as a way to help education by

00:17:36 --> 00:17:40
giving people sort of visual cues. You

00:17:38 --> 00:17:41
know, imagine if you could get an

00:17:39 --> 00:17:43
explanation for something where you get

00:17:40 --> 00:17:45
he text explanation, but you also get

00:17:42 --> 00:17:47
images and figures that kind of like

00:17:44 --> 00:17:48
help explain how they work. I think it

00:17:46 --> 00:17:49
just everything will be much more

00:17:47 --> 00:17:51
useful, much more accessible for

00:17:48 --> 00:17:52
students. So I'm really excited about

00:17:50 --> 00:17:54
hat. That is a

00:17:51 --> 00:17:56
>> on that point, one thing that's very

00:17:53 --> 00:17:58
interesting to us is that when Nano

00:17:55 --> 00:17:59
Banana came out, it almost felt like

00:17:57 --> 00:18:00
there's part of a use case is the

00:17:58 --> 00:18:03
reasoning model. Like you have a

00:18:00 --> 00:18:05
diagram. Absolutely. Right. Like you can

00:18:02 --> 00:18:07
explain some knowledge visually. So the

00:18:04 --> 00:18:09
model not just doing approximation of

00:18:06 --> 00:18:11
the visual aspect. There's the reasoning

00:18:08 --> 00:18:12
aspect to it too.

00:18:10 --> 00:18:14
>> Do you think that's where we're going

00:18:11 --> 00:18:16
to? Do you think all the model large

00:18:13 --> 00:18:20
models will realize that oh like to be a

00:18:16 --> 00:18:22
good LM or VL like uh VLM we have to

00:18:19 --> 00:18:24
have both image and language and audio

00:18:21 --> 00:18:27
and so on so forth.

00:18:23 --> 00:18:30
>> 100%. I definitely think so. Um the the

00:18:26 --> 00:18:32
future for these AI models that I'm most

00:18:29 --> 00:18:34
excited by is where they are tools for

00:18:31 --> 00:18:36
people to accomplish more things. Like I

00:18:33 --> 00:18:38
think if you imagine a future where you

00:18:35 --> 00:18:39
have these agentic models that just talk

00:18:37 --> 00:18:40
to each other and do all the work, then

00:18:38 --> 00:18:42
it becomes a little bit less necessary

00:18:39 --> 00:18:43
that there's like this visual mode of

00:18:41 --> 00:18:45
communication. But as long as there's

00:18:42 --> 00:18:47
people in the loop and as long as the

00:18:44 --> 00:18:48
kind of the the motivation for the

00:18:46 --> 00:18:50
task they're solving comes from people,

00:18:47 --> 00:18:51
I think it makes total sense that that

00:18:49 --> 00:18:53
visual modality is going to be really

00:18:50 --> 00:18:56
critical for any of these AI agents

00:18:52 --> 00:18:57
going forward.

00:18:55 --> 00:19:00
Will we get to a point where there's

00:18:56 --> 00:19:02
actually so of you know I'm I'm asking

00:18:59 --> 00:19:04
you to create an image it sits for two

00:19:01 --> 00:19:06
hours reasons with itself has drafts

00:19:03 --> 00:19:08
explores different directions and then

00:19:05 --> 00:19:10
comes back with a final answer.

00:19:07 --> 00:19:11
>> Yeah. Absolutely. If it's if necessary.

00:19:09 --> 00:19:13
Yeah. Like

00:19:10 --> 00:19:14
>> and maybe not just for a single image

00:19:12 --> 00:19:16
but to the point of you know maybe

00:19:13 --> 00:19:17
you're redesigning your house and maybe

00:19:15 --> 00:19:19
you actually really don't want to be

00:19:16 --> 00:19:21
involved in the process right but you're

00:19:18 --> 00:19:22
like okay this is what it looks like

00:19:20 --> 00:19:24
this some this is some inspiration that

00:19:21 --> 00:19:25
I like. And then you send it to um a

00:19:23 --> 00:19:26
model the same way that you would send

00:19:24 --> 00:19:28
it to like a designer.

00:19:25 --> 00:19:30
>> It's the visual deep research.

00:19:27 --> 00:19:31
>> The vis it's like visual deep research

00:19:29 --> 00:19:33
basically. I really like that term. And

00:19:30 --> 00:19:34
then it goes off and does its thing and

00:19:32 --> 00:19:36
searches for maybe the furniture that

00:19:33 --> 00:19:37
would go with your environment and then

00:19:35 --> 00:19:39
it comes back to you and maybe presents

00:19:36 --> 00:19:40
you with options because maybe maybe you

00:19:38 --> 00:19:43
don't want to sit for two hours at one

00:19:39 --> 00:19:48
thing art book [laughter]

00:19:42 --> 00:19:50
you know 10 10 slide deck. I also I

00:19:47 --> 00:19:52
think if you if you think about like um

00:19:49 --> 00:19:53
instruction manuals or like IKEA

00:19:51 --> 00:19:55
directions or something then like

00:19:52 --> 00:19:56
breaking down a hard problem into many

00:19:54 --> 00:19:59
intermediate steps could be really

00:19:56 --> 00:20:02
useful as as a way to communicate.

00:19:58 --> 00:20:02
>> So when can we generate Lego sets?

00:20:01 --> 00:20:05
>> Yeah, [laughter]

00:20:02 --> 00:20:07
soon maybe

00:20:04 --> 00:20:08
do we at some point need 3D as part of

00:20:06 --> 00:20:08
it?

00:20:07 --> 00:20:10
>> Right.

00:20:07 --> 00:20:11
>> I mean there's a whole debate around

00:20:09 --> 00:20:14
world models and image models and how

00:20:10 --> 00:20:15
they fit together. thoughts

00:20:13 --> 00:20:16
enlighten us here. What is the what is

00:20:14 --> 00:20:18
the short summary of where [laughter]

00:20:15 --> 00:20:20
we'll end up there?

00:20:17 --> 00:20:22
>> Um I mean I don't know the answer. I

00:20:19 --> 00:20:25
think that um obviously the real world

00:20:21 --> 00:20:27
is in 3D. So if you have 3D a 3D world

00:20:24 --> 00:20:29
model or world model that has explicit

00:20:26 --> 00:20:30
3D representations. There's a lot of

00:20:28 --> 00:20:32
advantages. For example, everything

00:20:29 --> 00:20:34
stays consistent all the time.

00:20:31 --> 00:20:36
>> Um now the main challenge is that we

00:20:33 --> 00:20:38
don't walk around with 3D capture

00:20:35 --> 00:20:39
devices in our pocket. So in terms of

00:20:37 --> 00:20:40
like the available data for training

00:20:38 --> 00:20:44
these models, it's largely the

00:20:40 --> 00:20:45
projection onto onto 2D. So I think that

00:20:43 --> 00:20:47
both viewpoints are totally valid for

00:20:44 --> 00:20:49
where we're going. I come a bit from the

00:20:46 --> 00:20:50
projection side like I think it we can

00:20:48 --> 00:20:52
solve almost all the problems if not all

00:20:49 --> 00:20:54
the problems working on the projection

00:20:51 --> 00:20:55
of the 3D world directly and letting the

00:20:53 --> 00:20:57
models learn the latent world

00:20:54 --> 00:20:59
representations. I mean we see this

00:20:56 --> 00:21:01
already that the video models have very

00:20:58 --> 00:21:02
good 3D understanding. You can run

00:21:00 --> 00:21:04
reconstruction algorithms over the

00:21:02 --> 00:21:07
videos you generate and they're they're

00:21:03 --> 00:21:08
very accurate. Um, and in general, if

00:21:06 --> 00:21:10
you look at like the history of human

00:21:07 --> 00:21:12
art, like it it it starts as like the

00:21:09 --> 00:21:14
projection, right? People drawing on on

00:21:11 --> 00:21:17
cave walls. Um, all of our interfaces

00:21:13 --> 00:21:19
are in 2D. So, I think that like humans

00:21:16 --> 00:21:20
are very very well suited for working on

00:21:18 --> 00:21:22
this projection of the 3D world into a

00:21:19 --> 00:21:24
2D plane. And it's a really natural

00:21:21 --> 00:21:25
environment for interfaces and for

00:21:23 --> 00:21:27
viewing. So,

00:21:24 --> 00:21:29
>> that is very true. like um so I'm a

00:21:26 --> 00:21:32
cartoonist in my spare time and then

00:21:28 --> 00:21:33
drawing in 2D is just light and shadow

00:21:31 --> 00:21:35
and then you present yourself with 3D

00:21:32 --> 00:21:38
cannot we trick ourselves to believing

00:21:34 --> 00:21:40
it's 3D or it's you know on a piece of

00:21:37 --> 00:21:42
paper but then what human can do that

00:21:39 --> 00:21:44
you know like a drawing or like a model

00:21:41 --> 00:21:46
can do is you we can navigate the world

00:21:43 --> 00:21:49
like we see a table we can't walk past

00:21:46 --> 00:21:51
it I guess the question becomes if

00:21:48 --> 00:21:53
everything is 2D how do you solve that

00:21:50 --> 00:21:55
problem

00:21:52 --> 00:21:56
>> well I don't think yeah so if we're

00:21:54 --> 00:22:00
trying to solve the robot products

00:21:55 --> 00:22:02
problems. I think maybe the 2D um

00:21:59 --> 00:22:04
representation is useful for planning

00:22:01 --> 00:22:07
and visualizing kind of at a high level.

00:22:03 --> 00:22:08
>> Like I think people navigate by um by

00:22:06 --> 00:22:10
remembering kind of 2D projections of

00:22:07 --> 00:22:11
the world. Like you don't you don't

00:22:09 --> 00:22:12
build a 3D map in your head. You're more

00:22:10 --> 00:22:13
like oh I know I see this building I

00:22:11 --> 00:22:13
turn left.

00:22:12 --> 00:22:15
>> Yeah.

00:22:12 --> 00:22:16
>> So I think that like for that kind of

00:22:14 --> 00:22:18
planning it's reasonable but for the

00:22:15 --> 00:22:20
actual locomotion around the space like

00:22:17 --> 00:22:23
I definitely 3D is important there. So

00:22:19 --> 00:22:24
>> robotics Yeah. They probably need 3D.

00:22:22 --> 00:22:25
>> [laughter]

00:22:23 --> 00:22:28
>> That's the saving grace.

00:22:24 --> 00:22:30
>> Yeah. Yeah. Um, so character

00:22:27 --> 00:22:32
consistency, which you previously

00:22:29 --> 00:22:34
mentioned, I really love the example of

00:22:31 --> 00:22:36
like when a model feels so personal,

00:22:33 --> 00:22:38
like people are so tempted to try it.

00:22:35 --> 00:22:40
>> How did you unlock that moment? The

00:22:37 --> 00:22:42
reason why I asked is that character

00:22:39 --> 00:22:45
consistency is so hard.

00:22:41 --> 00:22:47
>> Uh, there's a huge uncanny valley to it.

00:22:44 --> 00:22:49
like you know like if it's someone I

00:22:46 --> 00:22:51
don't know if I see their AI generation

00:22:48 --> 00:22:53
I'm like okay it's maybe the same person

00:22:50 --> 00:22:56
but if it's someone I know if there's

00:22:52 --> 00:22:57
just a little bit of a difference uh I

00:22:55 --> 00:22:59
'm actually felt very turned off by it

00:22:56 --> 00:23:01
because I'm like this not a real person.

00:22:58 --> 00:23:04
So in that case how do you know what

00:23:00 --> 00:23:07
you're generating is good and then is it

00:23:03 --> 00:23:09
mostly by user feedback or like I love

00:23:06 --> 00:23:14
this or is it something else? You look

00:23:08 --> 00:23:16
at faces, you know, [laughter] and but

00:23:13 --> 00:23:19
face detection camera user and

00:23:15 --> 00:23:20
>> no. So, so, so not even before you ever

00:23:18 --> 00:23:22
eleased this, right? So, when when

00:23:19 --> 00:23:24
we're we were developing this model, we

00:23:21 --> 00:23:25
actually started out doing character

00:23:23 --> 00:23:27
consistency evolves on faces we didn't

00:23:24 --> 00:23:27
know and it doesn't tell you anything,

00:23:26 --> 00:23:29
right?

00:23:26 --> 00:23:30
>> Um, and then we started testing it on

00:23:28 --> 00:23:31
ourselves and quickly realized like,

00:23:29 --> 00:23:32
okay, this is what you need to do

00:23:30 --> 00:23:34
because this is a face that I'm familiar

00:23:31 --> 00:23:37
with. And so there is a lot of sort of

00:23:34 --> 00:23:39
eyeballing evaluations that happens and

00:23:36 --> 00:23:41
just the team testing it on themselves.

00:23:38 --> 00:23:42
Um, and just generally people they know

00:23:40 --> 00:23:44
like Oliver probably knows my face at

00:23:41 --> 00:23:45
his point enough to be able to tell

00:23:43 --> 00:23:47
[laughter] whether or not it's actually

00:23:44 --> 00:23:49
me when it's generated.

00:23:46 --> 00:23:51
>> Um, and so we do do a lot of that. Um,

00:23:48 --> 00:23:52
and then you know you you ideally test

00:23:50 --> 00:23:54
it on different sets of people,

00:23:51 --> 00:23:55
different ages, right? Different

00:23:53 --> 00:23:56
different kind of groups of folks to

00:23:54 --> 00:23:58
make sure that it kind of works across

00:23:55 --> 00:23:59
the board.

00:23:57 --> 00:24:00
>> Yeah, I think they're right. I mean that

00:23:58 --> 00:24:02
touches that touches a little bit

00:23:59 --> 00:24:04
on this this um bigger issue which is

00:24:01 --> 00:24:05
that like eval are really difficult in

00:24:03 --> 00:24:07
this space

00:24:04 --> 00:24:09
>> um because human perception is very

00:24:06 --> 00:24:11
uneven in terms of the things that it

00:24:08 --> 00:24:13
cares about. So um so really it's hard

00:24:10 --> 00:24:16
it's very hard to know like how good is

00:24:12 --> 00:24:17
the character consistency of a model and

00:24:15 --> 00:24:19
um is it good enough? Is it not good

00:24:16 --> 00:24:20
enough? Like you know I think there's

00:24:18 --> 00:24:22
still a lot of improvement we

00:24:19 --> 00:24:25
can make on character consistency but I

00:24:21 --> 00:24:26
think that for some use cases like we

00:24:24 --> 00:24:28
got to a point and that's you know we

00:24:25 --> 00:24:29
ren't the first edit model by any

00:24:27 --> 00:24:31
means but I think that like once the

00:24:28 --> 00:24:33
quality gets above a certain level for

00:24:30 --> 00:24:34
character consistency it can kind of

00:24:32 --> 00:24:35
just take off because it becomes useful

00:24:33 --> 00:24:38
for so much more.

00:24:34 --> 00:24:40
>> And I think as it gets better it'll be

00:24:37 --> 00:24:41
useful for even more things too. Yeah,

00:24:39 --> 00:24:43
>> I think one of the really interesting

00:24:40 --> 00:24:46
things we're seeing across a bunch of

00:24:42 --> 00:24:49
modalities of which image edit and

00:24:45 --> 00:24:51
generation obviously is one is like um I

00:24:48 --> 00:24:52
think the arenas and benchmarks and

00:24:50 --> 00:24:54
everything are awesome but especially

00:24:51 --> 00:24:57
when you have like multi-dimensional

00:24:53 --> 00:24:59
things like image and video um it's very

00:24:56 --> 00:25:03
hard as all of the models get better and

00:24:58 --> 00:25:05
better to condense every quality of a

00:25:02 --> 00:25:08
model into like one judgment. So it's

00:25:04 --> 00:25:10
like, you know, you're judging, okay,

00:25:07 --> 00:25:12
you swap a character into an image and

00:25:09 --> 00:25:13
you change the style of the image. Maybe

00:25:11 --> 00:25:15
one did the character swap and

00:25:12 --> 00:25:17
consistency much better and the other

00:25:14 --> 00:25:18
did the style much better? Like how do

00:25:16 --> 00:25:20
you say which output is better? And it

00:25:18 --> 00:25:22
probably comes down to like what the

00:25:19 --> 00:25:25
person cares most about and what they're

00:25:21 --> 00:25:27
what they want to use it for. Um, are

00:25:24 --> 00:25:29
there like certain, you know,

00:25:26 --> 00:25:32
characteristics of the model that you

00:25:28 --> 00:25:33
guys value more than other things in

00:25:31 --> 00:25:36
like making those trade-offs when

00:25:32 --> 00:25:38
deciding which version of the model to

00:25:35 --> 00:25:41
deploy or like what to really focus on

00:25:37 --> 00:25:43
during training?

00:25:40 --> 00:25:44
>> Um, yes, there are. One of the things I

00:25:42 --> 00:25:46
like about this space is that uh there

00:25:44 --> 00:25:48
is no right answer. So, actually there's

00:25:45 --> 00:25:50
quite a lot of of I don't know if it's

00:25:47 --> 00:25:51
taste, but it's like preference that

00:25:49 --> 00:25:53
goes into the models. And I think you

00:25:50 --> 00:25:54
can kind of see the difference in

00:25:52 --> 00:25:56
preferences of the different research

00:25:53 --> 00:25:59
labs in the models that they release.

00:25:55 --> 00:26:00
>> So like when we're balancing two things,

00:25:58 --> 00:26:02
a lot of it comes down to like, oh well,

00:25:59 --> 00:26:04
I I don't know. I just like this this

00:26:01 --> 00:26:06
look better or I you know, this this

00:26:03 --> 00:26:08
feature is more important to us.

00:26:05 --> 00:26:10
>> I'd imagine it's hard for for you guys,

00:26:07 --> 00:26:12
too, because you have you have so many

00:26:09 --> 00:26:14
users, right? like Google like being in

00:26:11 --> 00:26:15
the Gemini app like everyone in the

00:26:13 --> 00:26:18
world can use that versus like many

00:26:14 --> 00:26:19
other AI companies just think about like

00:26:17 --> 00:26:21
we're only going for the professional

00:26:18 --> 00:26:23
creatives or we're only going for the

00:26:20 --> 00:26:26
consumer meat makers and like you guys

00:26:22 --> 00:26:28
have the unique and exciting but

00:26:25 --> 00:26:29
challenging task of like literally

00:26:27 --> 00:26:32
anyone in the world can do this. How do

00:26:28 --> 00:26:35
we decide what everyone would want?

00:26:31 --> 00:26:36
>> Yeah. And it is sometimes we do make

00:26:34 --> 00:26:38
these trade-offs. We do have a set of

00:26:35 --> 00:26:40
things that are sort of like super high

00:26:37 --> 00:26:41
priority that we don't want to regret

00:26:39 --> 00:26:43
restress on. Right? So now because

00:26:40 --> 00:26:45
character consistency was so awesome and

00:26:42 --> 00:26:46
so many people are using it, we don't

00:26:44 --> 00:26:48
want our next models to get worse on

00:26:45 --> 00:26:50
that dimension. Right? So we pay a lot

00:26:47 --> 00:26:52
of attention to it. We care a lot about

00:26:49 --> 00:26:55
images looking photorealistic when you

00:26:51 --> 00:26:58
want photos and this is important. One,

00:26:54 --> 00:26:59
I think we all prefer that style.

00:26:57 --> 00:27:01
[laughter]

00:26:58 --> 00:27:03
too. Um, you know, for advertising use

00:27:00 --> 00:27:05
cases, for example, like a lot of it is

00:27:02 --> 00:27:07
kind of photorealistic images of

00:27:04 --> 00:27:08
products and people. And so, we want to

00:27:06 --> 00:27:10
make sure that we can kind of do that.

00:27:07 --> 00:27:12
And then sometimes there are just things

00:27:09 --> 00:27:14
that like will kind of fall down the

00:27:11 --> 00:27:16
wayside. So, for this first release, the

00:27:13 --> 00:27:18
model is not as good as text rendering

00:27:15 --> 00:27:20
at as we would like it to be, and that's

00:27:17 --> 00:27:21
omething that we want to fix in the

00:27:19 --> 00:27:23
future. But it was kind of one of those

00:27:20 --> 00:27:25
things where we looked at, okay, the

00:27:22 --> 00:27:27
model's good at XY Z, it's not as good

00:27:24 --> 00:27:28
at this, but we still think it's okay to

00:27:26 --> 00:27:32
release and it will still be an exciting

00:27:27 --> 00:27:34
thing for people to play with.

00:27:31 --> 00:27:36
>> If you look at the past, right, we we we

00:27:33 --> 00:27:38
had for previous model generations, a

00:27:36 --> 00:27:39
lot of things we did with like sidecar

00:27:37 --> 00:27:41
models like control net or something

00:27:38 --> 00:27:43
like that where we basically figured out

00:27:40 --> 00:27:45
a way to provide structured data to the

00:27:42 --> 00:27:47
model to achieve a particular result. It

00:27:44 --> 00:27:48
seems like these newer models that has

00:27:46 --> 00:27:50
taken a step back just because they're

00:27:47 --> 00:27:51
so incredibly good in just prompting or

00:27:49 --> 00:27:53
you know giving a reference image and

00:27:50 --> 00:27:55
picking things up from there. Where will

00:27:52 --> 00:27:57
this go long term? Do you think this

00:27:54 --> 00:27:59
will come back to some degree? Um you

00:27:56 --> 00:28:01
know like I mean for from the creators

00:27:58 --> 00:28:02
perspective right having I don't know

00:28:00 --> 00:28:04
open pose information so I can get get a

00:28:01 --> 00:28:05
pose exactly right right for multiple

00:28:03 --> 00:28:07
characters. This seems very very

00:28:04 --> 00:28:08
tempting, right? Is it like or to

00:28:06 --> 00:28:10
rephrase it a little bit, it's like does

00:28:08 --> 00:28:11
the bitter lesson hold here that at the

00:28:09 --> 00:28:13
nd of the day everything's just one big

00:28:10 --> 00:28:14
model and you throw things in or is

00:28:12 --> 00:28:17
there is a little of structure we can we

00:28:13 --> 00:28:20
can offer to make this better?

00:28:16 --> 00:28:21
>> Um, I mean I think that there will be

00:28:19 --> 00:28:22
there'll always be users that want

00:28:20 --> 00:28:24
control that the model doesn't give you

00:28:22 --> 00:28:27
t of the box. But I think we we tried

00:28:23 --> 00:28:29
to make it so that um you know because

00:28:26 --> 00:28:30
really what really what an artist wants

00:28:28 --> 00:28:32
when they want to do something is they

00:28:29 --> 00:28:35
want the intent to be understood. And I

00:28:31 --> 00:28:36
think that that these um AI models are

00:28:34 --> 00:28:38
getting better at understanding the

00:28:35 --> 00:28:40
intent of users. So often when you ask

00:28:37 --> 00:28:41
text queries now the model gets what

00:28:39 --> 00:28:43
you're going for.

00:28:40 --> 00:28:46
>> So you know in that sense I think we can

00:28:42 --> 00:28:48
get pretty far with understanding

00:28:45 --> 00:28:49
the intent of our users.

00:28:47 --> 00:28:51
>> And um and maybe some of that is

00:28:48 --> 00:28:52
personalization like we need to know

00:28:50 --> 00:28:53
information about what you're trying to

00:28:51 --> 00:28:54
do or what you've done in the past. But

00:28:52 --> 00:28:56
I think once you can understand the

00:28:54 --> 00:28:58
intent then you can you can generally do

00:28:56 --> 00:29:00
the the type of edit like is this like a

00:28:57 --> 00:29:02
very structure preserving edit or is

00:28:59 --> 00:29:04
this like a free form kind of like we

00:29:01 --> 00:29:06
can learn these these kinds of effects I

00:29:03 --> 00:29:07
think. Um but still of course there's

00:29:05 --> 00:29:09
one person who's going to really care

00:29:06 --> 00:29:10
about every pixel and like this this

00:29:08 --> 00:29:11
thing needs to be slightly to the left

00:29:09 --> 00:29:13
and a little bit more blue and like

00:29:10 --> 00:29:14
those people will use existing tools to

00:29:12 --> 00:29:16
do that.

00:29:13 --> 00:29:18
>> I mean I think it's like you know I want

00:29:15 --> 00:29:19
an image with 26 people spelling out

00:29:17 --> 00:29:20
every letter of the alphabet or

00:29:18 --> 00:29:22
something like that. Right. That's off

00:29:19 --> 00:29:24
the thing where I think we're still

00:29:21 --> 00:29:25
quite a bit away from getting that

00:29:23 --> 00:29:27
right, you know, in the first try. On

00:29:24 --> 00:29:29
the other hand, with pose information,

00:29:26 --> 00:29:30
it could potentially get

00:29:28 --> 00:29:32
>> But then the then the question I guess

00:29:29 --> 00:29:33
is like do you really want to be the one

00:29:31 --> 00:29:36
who's like extracting the pose and

00:29:32 --> 00:29:38
providing that as an information or do

00:29:35 --> 00:29:40
you just want to provide some reference

00:29:37 --> 00:29:43
image and say like this is actually what

00:29:39 --> 00:29:43
I want like model go figure this out

00:29:42 --> 00:29:46
right

00:29:42 --> 00:29:47
>> there are 26 people every now and

00:29:45 --> 00:29:49
ifferent style. Fair enough. Yeah, I

00:29:46 --> 00:29:52
think in that in that case I wouldn't

00:29:48 --> 00:29:54
spend a ton of time building a custom um

00:29:51 --> 00:29:57
interface for making this this picture

00:29:53 --> 00:29:59
of 46 people seems like the kind of

00:29:56 --> 00:30:00
thing that we can we can solve.

00:29:58 --> 00:30:02
>> Just transfer.

00:29:59 --> 00:30:05
>> Do you think the representation of what

00:30:01 --> 00:30:06
he AI images are will change? So the

00:30:04 --> 00:30:08
reason why I asked the question is that

00:30:05 --> 00:30:10
as artists there's different formats we

00:30:07 --> 00:30:12
play with. There's the SVGs, we have

00:30:09 --> 00:30:14
anchor points and bezier curves.

00:30:11 --> 00:30:16
>> And on the other side, there's, you

00:30:13 --> 00:30:18
know, porcy or like fresco, what have

00:30:15 --> 00:30:20
you. There's layers that we can also

00:30:17 --> 00:30:23
play with. There's the other parameter

00:30:19 --> 00:30:25
which is what's the brush you use like

00:30:22 --> 00:30:27
the brush, the texture of it. So, every

00:30:24 --> 00:30:29
one parameter you can write script and

00:30:26 --> 00:30:30
actually uh do something very personal

00:30:28 --> 00:30:32
about it. Mhm.

00:30:29 --> 00:30:35
>> Do you think like pixel is the right

00:30:31 --> 00:30:36
representation um the endgame for image

00:30:34 --> 00:30:38
neration model or do you think there's

00:30:35 --> 00:30:40
a net new representation that we haven't

00:30:37 --> 00:30:43
invented yet?

00:30:39 --> 00:30:47
>> That's an easy question to [laughter]

00:30:42 --> 00:30:50
>> wow. Um I I'll say that uh that um

00:30:46 --> 00:30:50
everything is a subset of pixels.

00:30:49 --> 00:30:52
>> That's true.

00:30:49 --> 00:30:54
>> So text is a subset of pixels because I

00:30:51 --> 00:30:54
could just render all the text as an

00:30:53 --> 00:30:57
image.

00:30:53 --> 00:30:59
>> So how far can we get with just pixels

00:30:56 --> 00:31:01
is an interesting question. I think you

00:30:58 --> 00:31:03
know if the model is really um

00:31:00 --> 00:31:05
responsive and handles multi-turn

00:31:02 --> 00:31:06
interactions well then I think you can

00:31:04 --> 00:31:08
probably get pretty far because the

00:31:05 --> 00:31:10
primary reason I think you would want to

00:31:07 --> 00:31:11
leave the pixel domain is for

00:31:09 --> 00:31:14
editability.

00:31:10 --> 00:31:16
>> Um and so you know in cases where you

00:31:13 --> 00:31:17
need to have your font or you want to

00:31:15 --> 00:31:19
change the text or you want to move

00:31:16 --> 00:31:22
things around just like with control

00:31:18 --> 00:31:24
points um it could be useful to have um

00:31:21 --> 00:31:27
kind of mix generation which consists of

00:31:23 --> 00:31:29
pixels and SVGs and other other forms.

00:31:26 --> 00:31:31
Um but if we can do it all, if we can if

00:31:28 --> 00:31:32
the multi- interaction is enough, then I

00:31:30 --> 00:31:34
think you can get pretty far with

00:31:31 --> 00:31:36
pixels. Um I will say that one of the

00:31:33 --> 00:31:37
things that's exciting about these um

00:31:35 --> 00:31:40
these models that have native

00:31:36 --> 00:31:41
capabilities is that you now have a

00:31:39 --> 00:31:42
model that can generate code and it can

00:31:40 --> 00:31:44
generate images.

00:31:41 --> 00:31:46
>> So there's a lot of interesting things

00:31:43 --> 00:31:47
that come in that intersection, right?

00:31:45 --> 00:31:49
Like maybe I wanted to write some code

00:31:46 --> 00:31:51
and then make make some some things be

00:31:48 --> 00:31:52
rasterized, some things be parametric.

00:31:50 --> 00:31:54
>> Yeah.

00:31:51 --> 00:31:55
>> Like stick it all together,

00:31:53 --> 00:31:56
>> train it together. Like this would be

00:31:54 --> 00:31:58
very cool. That's such a good point

00:31:55 --> 00:32:01
because I did see a tweet of someone

00:31:57 --> 00:32:03
asking Cloud Sauna to replicate a image

00:32:00 --> 00:32:05
on an Excel sheet where every cell is a

00:32:02 --> 00:32:07
pixel [laughter]

00:32:04 --> 00:32:09
>> which is like a very fun exercise. It

00:32:06 --> 00:32:10
was like a coding model like doesn't

00:32:08 --> 00:32:12
really know anything about you know

00:32:09 --> 00:32:14
images yet it worked.

00:32:11 --> 00:32:17
>> Yeah, there's the classic pelican riding

00:32:13 --> 00:32:20
a bicycle test. [laughter]

00:32:16 --> 00:32:22
>> Yeah, totally. I have one on on model

00:32:19 --> 00:32:24
ike on interfaces if that's okay. I

00:32:22 --> 00:32:25
don't sorry if I'm bringing up too much

00:32:23 --> 00:32:29
product stuff guys. I'm just very

00:32:24 --> 00:32:32
curious on on the product front like um

00:32:28 --> 00:32:34
I guess I'm curious how you think about

00:32:31 --> 00:32:36
like owning the interface where people

00:32:33 --> 00:32:39
are editing or generating images with

00:32:36 --> 00:32:41
Nano Banana versus

00:32:38 --> 00:32:43
really just wanting a ton of people to

00:32:40 --> 00:32:45
use the model for different things in

00:32:42 --> 00:32:47
the API. Like we've talked about so many

00:32:44 --> 00:32:49
different use cases like ads, you know,

00:32:46 --> 00:32:52
education,

00:32:48 --> 00:32:55
um design, uh like architecture. Each of

00:32:51 --> 00:32:57
those things could be there could be a

00:32:54 --> 00:32:58
standalone product built on top of Nano

00:32:56 --> 00:33:00
Banana that prompts the model in the

00:32:57 --> 00:33:03
right way or allows certain types of

00:32:59 --> 00:33:05
inputs or whatever. Is your guys' vision

00:33:02 --> 00:33:07
like that the kind of the product in the

00:33:04 --> 00:33:08
Gemini app is like a playground for

00:33:06 --> 00:33:11
people to explore and then developers

00:33:08 --> 00:33:14
will build the individual products that

00:33:10 --> 00:33:15
are used for certain use cases or is

00:33:13 --> 00:33:17
that something you're also kind of

00:33:14 --> 00:33:19
interested in owning?

00:33:16 --> 00:33:22
>> I think it's a little bit of everything.

00:33:18 --> 00:33:24
Um, so I definitely think that the

00:33:21 --> 00:33:26
Gemini app is an entry point for people

00:33:23 --> 00:33:28
to explore. And the one the nice thing

00:33:25 --> 00:33:31
about Nano Banana is I think it shows

00:33:27 --> 00:33:33
that fun is kind of a gateway to utility

00:33:30 --> 00:33:34
where you know people come to make a

00:33:32 --> 00:33:36
figurine image of themselves but then

00:33:33 --> 00:33:37
they stay because it helps them with

00:33:35 --> 00:33:39
eir math homework or it helps them

00:33:36 --> 00:33:40
write something, right? And and so I

00:33:38 --> 00:33:43
think that's a really powerful kind of

00:33:39 --> 00:33:45
transition point. Um there's definitely

00:33:42 --> 00:33:47
interfaces that we're interested in

00:33:44 --> 00:33:50
building and exploring as a company. And

00:33:46 --> 00:33:52
so um you know you may have seen Flo

00:33:49 --> 00:33:54
from Josh's team in labs that's that's

00:33:51 --> 00:33:56
really trying to rethink like what's

00:33:53 --> 00:33:58
the tool for AI filmmakers right

00:33:55 --> 00:34:00
and for AI filmmakers image is actually

00:33:57 --> 00:34:01
a big part of the iteration journey

00:33:59 --> 00:34:03
right because video creation is

00:34:00 --> 00:34:05
expensive a lot of people kind of think

00:34:02 --> 00:34:06
in frames um when they when they

00:34:04 --> 00:34:08
initially start creating and a lot of

00:34:05 --> 00:34:09
them even start in the LLM space for

00:34:07 --> 00:34:11
like brainstorming and thinking about

00:34:08 --> 00:34:12
what they want to create in the first

00:34:10 --> 00:34:14
place um and so there's definitely kind

00:34:12 --> 00:34:16
of place that we have in that space of

00:34:13 --> 00:34:18
just us trying to think about like what

00:34:15 --> 00:34:20
does look like. Um, we have the

00:34:18 --> 00:34:22
advantage of it kind of sitting close to

00:34:19 --> 00:34:24
the models and the interfaces so we can

00:34:21 --> 00:34:25
kind of build that in in a tight

00:34:23 --> 00:34:28
coupling. Um, and then there's

00:34:24 --> 00:34:30
definitely the, you know, we're probably

00:34:27 --> 00:34:32
not going to go build a software for an

00:34:29 --> 00:34:33
architecture firm. My dad is an

00:34:31 --> 00:34:36
architect and he would probably love

00:34:32 --> 00:34:37
that. Um, but I don't think that's

00:34:35 --> 00:34:39
omething that we will do, but somebody

00:34:36 --> 00:34:41
should go and do that. Um, and that's

00:34:38 --> 00:34:42
why it's exciting because we do have the

00:34:40 --> 00:34:44
developer business and we have the

00:34:41 --> 00:34:46
nterprise business and so people can go

00:34:43 --> 00:34:48
use these models and then figure out

00:34:45 --> 00:34:50
like what's the next generation workflow

00:34:47 --> 00:34:52
for like this specific audience so that

00:34:49 --> 00:34:55
I can help them solve a problem. So I I

00:34:51 --> 00:34:55
think the answer is kind of like yes all

00:34:54 --> 00:34:56
three.

00:34:54 --> 00:34:58
>> Yeah.

00:34:55 --> 00:34:59
I I brought that up. I don't know

00:34:57 --> 00:35:02
if you guys have been following the

00:34:58 --> 00:35:04
reception of Nano Banana in Japan, but

00:35:01 --> 00:35:07
um I'm sure you've had it's it's been

00:35:03 --> 00:35:10
insane. And it's so funny like I now

00:35:06 --> 00:35:12
half of my X feed is these really heavy

00:35:09 --> 00:35:14
Nano Banana users in Japan who have

00:35:11 --> 00:35:16
created like Chrome extensions called

00:35:13 --> 00:35:18
there's one called like Easy Banana

00:35:15 --> 00:35:20
that's specifically for using Nano

00:35:17 --> 00:35:22
Banana for like manga generation and

00:35:19 --> 00:35:25
specific types of anime and things like

00:35:21 --> 00:35:27
that. And like they go super deep into

00:35:24 --> 00:35:29
basically prompting the model for you

00:35:26 --> 00:35:32
and storing the outputs in various

00:35:28 --> 00:35:34
places. Um using obviously your your

00:35:31 --> 00:35:37
underlying model to generate these like

00:35:33 --> 00:35:39
amazing anime that you would never guess

00:35:36 --> 00:35:42
were AI generated because like the level

00:35:38 --> 00:35:43
of of precision and consistency and that

00:35:41 --> 00:35:45
sort of thing is just beyond what I've

00:35:42 --> 00:35:47
seen any single model be able to do

00:35:44 --> 00:35:49
today.

00:35:46 --> 00:35:51
I guess um what are some like to

00:35:48 --> 00:35:53
Justin's point what are some force

00:35:50 --> 00:35:56
multipliers that you guys have seen in

00:35:52 --> 00:35:57
the model? So what I mean by this is for

00:35:55 --> 00:35:59
example if you unlock character

00:35:56 --> 00:36:00
consistency you can generate different

00:35:58 --> 00:36:03
frames and then you can make a video and

00:35:59 --> 00:36:05
then you can make a movie right. Um so

00:36:02 --> 00:36:07
these are the things that if you get it

00:36:04 --> 00:36:09
right and get it really well there's so

00:36:06 --> 00:36:12
much more downstream tasks that can

00:36:08 --> 00:36:14
derive from it. Um just curious like how

00:36:11 --> 00:36:16
do you think about what are the force m

00:36:13 --> 00:36:16
ultipliers that you want to unlock? So

00:36:15 --> 00:36:17
the next

00:36:16 --> 00:36:20
>> what's the next big one

00:36:16 --> 00:36:22
>> what's the next yeah big wave of people

00:36:19 --> 00:36:24
who can just use nano nano as the base

00:36:21 --> 00:36:27
model for all the downstream tasks.

00:36:23 --> 00:36:29
So I think one one current one actually

00:36:26 --> 00:36:30
is also the latency point right because

00:36:28 --> 00:36:32
I think because I think it's also just

00:36:29 --> 00:36:34
like it makes it really fun to iterate

00:36:31 --> 00:36:36
with these models when it just takes 10

00:36:33 --> 00:36:38
seconds to generate the next frame right

00:36:35 --> 00:36:39
if you had to sit there and wait for two

00:36:37 --> 00:36:40
minutes like you would probably just

00:36:38 --> 00:36:42
give up and leave a very different

00:36:39 --> 00:36:44
experience so I think that's one just

00:36:41 --> 00:36:46
like there has to be some quality bar

00:36:43 --> 00:36:47
because if it's just fast and the

00:36:45 --> 00:36:48
quality isn't there then it also doesn't

00:36:46 --> 00:36:50
matter right like you have to hit a

00:36:47 --> 00:36:52
quality bar and then um then speed

00:36:49 --> 00:36:55
becomes a force multiplier I think this

00:36:52 --> 00:36:57
general idea of just visualizing

00:36:54 --> 00:36:59
information to your education point from

00:36:56 --> 00:37:01
earlier is sort of another one, right?

00:36:58 --> 00:37:03
And that needs

00:37:00 --> 00:37:05
>> good text. It needs factuality, right?

00:37:02 --> 00:37:06
Because if you're going to start making

00:37:04 --> 00:37:10
kind of visual explainers about

00:37:06 --> 00:37:11
something, um it it looks nice, but it

00:37:09 --> 00:37:11
also needs to be accurate,

00:37:10 --> 00:37:13
>> right?

00:37:10 --> 00:37:14
>> And so, and so I think that's probably

00:37:12 --> 00:37:16
kind of the next level where at some

00:37:13 --> 00:37:18
point then you could also just have a

00:37:15 --> 00:37:19
personalized textbook to you, right?

00:37:17 --> 00:37:21
Where it's not just the text that's

00:37:18 --> 00:37:24
different, but it's also the visuals.

00:37:20 --> 00:37:26
Yeah, the diamond age that was basically

00:37:23 --> 00:37:28
Yeah, basically. Um, and then it should

00:37:26 --> 00:37:30
also internationalize really well,

00:37:28 --> 00:37:32
right? Because a lot of the times today

00:37:29 --> 00:37:33
ou might actually be able to find a

00:37:31 --> 00:37:35
diagram that explains the thing that

00:37:32 --> 00:37:37
you're trying to learn about on the

00:37:34 --> 00:37:39
internet, but it's maybe not in the

00:37:36 --> 00:37:40
language that you actually speak. Um,

00:37:38 --> 00:37:43
right? And so I think that becomes just

00:37:39 --> 00:37:45
like another way to improve and open up

00:37:42 --> 00:37:47
accessibility um of information to just

00:37:44 --> 00:37:49
a lot more people and again visually

00:37:46 --> 00:37:50
because a lot of people are visual

00:37:48 --> 00:37:53
earners.

00:37:49 --> 00:37:55
>> Interesting. How do you think about like

00:37:52 --> 00:37:56
images generated? So the reason why I

00:37:54 --> 00:37:58
asked is that there's another very cool

00:37:56 --> 00:38:01
example. I've seen someone making it

00:37:57 --> 00:38:03
work with nano banana which is he wrote

00:38:00 --> 00:38:06
a script and then he kept prompt the

00:38:02 --> 00:38:08
model to say generate the frame one

00:38:05 --> 00:38:11
second after this and then it became a

00:38:07 --> 00:38:14
video. So and then when I saw it I'm

00:38:10 --> 00:38:16
like well is every image just one frame

00:38:13 --> 00:38:17
in a continuum like you always know

00:38:15 --> 00:38:19
about the continuum in a parallel

00:38:16 --> 00:38:21
universe. you could have you know

00:38:18 --> 00:38:22
generated any one of them.

00:38:20 --> 00:38:24
>> It's one big directive graph that

00:38:21 --> 00:38:26
>> right exactly and then maybe it's video

00:38:23 --> 00:38:28
at the end of the day. So how do you see

00:38:25 --> 00:38:30
that? Where does it you know intersect

00:38:27 --> 00:38:32
or not intersect?

00:38:29 --> 00:38:37
>> I think it's very yeah video and images

00:38:31 --> 00:38:38
are very closely related. Um and

00:38:36 --> 00:38:41
also I think what we're seeing in these

00:38:37 --> 00:38:44
kind of what's coming next or sequence

00:38:40 --> 00:38:46
predicting um use cases is the the

00:38:44 --> 00:38:51
generalization in world knowledge of the

00:38:45 --> 00:38:52
model as well. Um and and this is and so

00:38:50 --> 00:38:54
where where do I think it's going? I

00:38:51 --> 00:38:59
think that we will have yeah I think

00:38:53 --> 00:39:01
video is um an obvious next kind of

00:38:58 --> 00:39:03
domain. I think that like when when you

00:39:00 --> 00:39:04
have editing um a lot of times what

00:39:02 --> 00:39:06
you're asking is like you know what

00:39:03 --> 00:39:08
happens if I do this and that's what

00:39:05 --> 00:39:12
video has it has the the time sequence

00:39:07 --> 00:39:14
of actions. So it's like we have a slow

00:39:11 --> 00:39:14
frames per second video that you can

00:39:13 --> 00:39:16
interact with,

00:39:14 --> 00:39:18
>> but obviously making something that's

00:39:15 --> 00:39:21
like fully interactive and real time and

00:39:18 --> 00:39:22
um is the direction this this field is

00:39:20 --> 00:39:24
headed.

00:39:21 --> 00:39:27
>> So you are probably in the zero I don't

00:39:23 --> 00:39:29
know how many zer 0.001% of most

00:39:26 --> 00:39:31
experienced people in the world using

00:39:28 --> 00:39:33
image models.

00:39:30 --> 00:39:35
>> What are your your personal favorite use

00:39:32 --> 00:39:37
cases? How how do you use it dayto-day

00:39:34 --> 00:39:39
if you're not just testing an existing

00:39:36 --> 00:39:42
model?

00:39:38 --> 00:39:43
Well, I so I'm not sure I am in the the

00:39:41 --> 00:39:46
very top, [laughter]

00:39:42 --> 00:39:48
but but I'll tell you what,

00:39:45 --> 00:39:50
>> um I mean it's it's like we were saying

00:39:48 --> 00:39:52
earlier, the personalization aspect is

00:39:49 --> 00:39:54
the the thing that totally drives it

00:39:51 --> 00:39:56
home for me. I have I have two young

00:39:53 --> 00:39:57
kids and like the best things that I do

00:39:55 --> 00:39:59
with the model are the things I do with

00:39:56 --> 00:40:01
my kids and like we can make, you know,

00:39:58 --> 00:40:02
make their their stuffed animals come to

00:40:00 --> 00:40:04
life in these types of applications and

00:40:01 --> 00:40:07
it's just so personal and gratifying to

00:40:03 --> 00:40:08
see. Um, we also a lot of people um

00:40:06 --> 00:40:11
taking old pictures of their family for

00:40:07 --> 00:40:13
example and like um showing what

00:40:10 --> 00:40:14
restoring them and and like so I think

00:40:12 --> 00:40:16
that that's that's the the real beauty

00:40:13 --> 00:40:17
of the edit models is that you can you

00:40:15 --> 00:40:18
can make it about the one thing that

00:40:16 --> 00:40:20
matters most to you.

00:40:17 --> 00:40:21
>> So that's what I use it for is is my

00:40:19 --> 00:40:21
kids basically.

00:40:20 --> 00:40:23
>> Very nice.

00:40:20 --> 00:40:24
>> Yeah. You're you're basically making

00:40:22 --> 00:40:25
[clears throat] content that you

00:40:23 --> 00:40:27
probably would have never made before

00:40:24 --> 00:40:29
and it's like for the consumption of one

00:40:26 --> 00:40:30
person, right? Or or or one family and

00:40:28 --> 00:40:32
you're kind of telling these stories

00:40:29 --> 00:40:34
that you would have never told before.

00:40:31 --> 00:40:36
So, kind of similar like I do a lot of

00:40:33 --> 00:40:38
amily holiday cards and birthday cards

00:40:35 --> 00:40:40
and whatnot. Um, now anytime I make a

00:40:37 --> 00:40:41
slide deck, I like force myself to

00:40:39 --> 00:40:43
generate some images that are like

00:40:40 --> 00:40:45
contextually relevant and then try to

00:40:42 --> 00:40:46
get the text right um and all of those

00:40:44 --> 00:40:48
things. And then we try to push the

00:40:45 --> 00:40:50
boundaries around like can you make a

00:40:47 --> 00:40:51
chart in the pixel space? Do you want to

00:40:49 --> 00:40:53
that's another question, right? Because

00:40:50 --> 00:40:54
you also want the um you want the bars

00:40:52 --> 00:40:56
in the bar chart to be accurately

00:40:53 --> 00:40:58
positioned relative to one another. Um

00:40:56 --> 00:40:59
so I I think we do a lot of these

00:40:57 --> 00:41:01
things. I'm actually really impressed

00:40:58 --> 00:41:04
with the people we work with on the team

00:41:00 --> 00:41:06
who are just like very creative. Um we

00:41:03 --> 00:41:07
have a team um who just works really

00:41:05 --> 00:41:08
closely with us on models that we're

00:41:06 --> 00:41:10
developing and then they just like push

00:41:08 --> 00:41:11
the boundary. They'll do like crazy

00:41:09 --> 00:41:13
things with the models.

00:41:10 --> 00:41:15
>> What's the most surprising thing you've

00:41:12 --> 00:41:17
seen here? Like I didn't know our model

00:41:14 --> 00:41:19
can do this. Yeah.

00:41:16 --> 00:41:21
>> This is even just kind of like simple

00:41:18 --> 00:41:23
things where people have been doing like

00:41:20 --> 00:41:25
texture transfer. Like they will take

00:41:22 --> 00:41:26
>> Yeah. like you take a portrait of a

00:41:24 --> 00:41:28
person and then you're like what would

00:41:25 --> 00:41:29
it look like but if it had the texture

00:41:27 --> 00:41:31
of this piece of wood and I'm like I

00:41:28 --> 00:41:33
would have never I would have never

00:41:30 --> 00:41:35
thought of this being a use case because

00:41:32 --> 00:41:37
my brain just doesn't work that way. Um

00:41:34 --> 00:41:38
but people like kind of just push the

00:41:36 --> 00:41:39
boundaries of what you're what you can

00:41:37 --> 00:41:41
do with these things.

00:41:38 --> 00:41:43
>> That is an interesting uh example of a

00:41:40 --> 00:41:45
world knowledge because texture

00:41:42 --> 00:41:48
technically is 3D because there's like

00:41:44 --> 00:41:50
the whole 3D aspect of it. There's a

00:41:47 --> 00:41:52
light and shadow of it but this is a 2D

00:41:49 --> 00:41:54
transfer. Yeah. So that's very cool. I

00:41:51 --> 00:41:56
think for me the the thing I'm most

00:41:53 --> 00:41:58
excited by and maybe most impressed by

00:41:55 --> 00:42:00
is um are the the use cases that test

00:41:57 --> 00:42:03
he reasoning abilities of the models.

00:41:59 --> 00:42:05
So um some people in our team figured

00:42:02 --> 00:42:08
out you could like give geometry

00:42:04 --> 00:42:09
problems to the model and like ask it to

00:42:07 --> 00:42:11
kind of you know solve for X here or

00:42:08 --> 00:42:13
fill in this missing thing or like

00:42:10 --> 00:42:14
present this this from a slightly

00:42:12 --> 00:42:17
different like a different view

00:42:13 --> 00:42:19
>> and like these types of um of things

00:42:16 --> 00:42:20
that really require world knowledge and

00:42:18 --> 00:42:22
the reasoning ability of like a

00:42:19 --> 00:42:24
state-of-the-art language model are the

00:42:21 --> 00:42:25
things that make me really go wow that's

00:42:23 --> 00:42:26
amazing I didn't think we would be able

00:42:24 --> 00:42:29
to do that.

00:42:25 --> 00:42:31
>> Can it uh generate compile code on a

00:42:28 --> 00:42:33
blackboard yet? And like if I take a

00:42:30 --> 00:42:36
picture of my I don't know like code on

00:42:32 --> 00:42:37
the laptop, would it know if it compiles

00:42:35 --> 00:42:40
on the image model?

00:42:36 --> 00:42:43
>> Um I've I've seen examples where people

00:42:39 --> 00:42:44
give it like an image of HTML code and

00:42:42 --> 00:42:45
have the model render the the web page

00:42:44 --> 00:42:47
and it can do that.

00:42:44 --> 00:42:48
>> That's very cool. The coolest example I

00:42:46 --> 00:42:50
saw, so I came from academia, so I spent

00:42:48 --> 00:42:53
a lot of time writing papers and making

00:42:49 --> 00:42:55
figures. And um one of our colleagues uh

00:42:52 --> 00:42:58
took a picture of one of the result

00:42:54 --> 00:42:59
figures uh from one of their papers with

00:42:57 --> 00:43:00
a method that could do a bunch of

00:42:58 --> 00:43:01
different things. This this one, you

00:42:59 --> 00:43:03
know, a bunch of different um type of

00:43:00 --> 00:43:06
applications in the paper and asked the

00:43:02 --> 00:43:07
model to and like sort of erased the um

00:43:05 --> 00:43:09
the results. So you have like the inputs

00:43:06 --> 00:43:11
and asked the model to like solve all of

00:43:08 --> 00:43:14
these in picture form in a figure of a

00:43:10 --> 00:43:16
paper and it was able to do that. So it

00:43:13 --> 00:43:17
could actually like figure out what is

00:43:15 --> 00:43:20
the problem that this one figure is

00:43:16 --> 00:43:21
asking for, find the answer and put it

00:43:19 --> 00:43:22
in the image and then do that for a

00:43:20 --> 00:43:24
bunch of different applications at the

00:43:21 --> 00:43:24
same time which was really amazing. Very

00:43:23 --> 00:43:27
cool.

00:43:23 --> 00:43:28
>> That's very cool. Have um has anyone

00:43:26 --> 00:43:30
built application on top of that

00:43:28 --> 00:43:32
capability yet? Like what's the

00:43:29 --> 00:43:34
application that will come out of that?

00:43:32 --> 00:43:37
>> I think that there are a lot of very

00:43:33 --> 00:43:39
interesting I would say zero transfer

00:43:36 --> 00:43:41
capability like problem solving type

00:43:38 --> 00:43:43
things that we don't even know the

00:43:40 --> 00:43:45
boundary of yet. And some of these are

00:43:42 --> 00:43:47
probably quite useful like you know

00:43:44 --> 00:43:50
if you want to have a method that does

00:43:46 --> 00:43:52
olves some problem X I don't know like

00:43:49 --> 00:43:53
finds the the the the normals of the

00:43:51 --> 00:43:55
scene or something like the service

00:43:52 --> 00:43:57
orientations or something um you

00:43:54 --> 00:43:59
probably can prompt the model to give

00:43:56 --> 00:44:01
you kind of a reasonable estimate. Um so

00:43:58 --> 00:44:03
I think there's lots of problems like

00:44:00 --> 00:44:04
sort of understanding problems and other

00:44:02 --> 00:44:06
types of things that we could maybe

00:44:03 --> 00:44:08
solve with zero or few shop prompting

00:44:05 --> 00:44:10
that we don't know yet. Yeah, there's

00:44:07 --> 00:44:11
one thing you mentioned I found super

00:44:09 --> 00:44:14
interesting, which is the world

00:44:10 --> 00:44:16
knowledge transfer, but in a lot of

00:44:13 --> 00:44:18
world models like or video models, there

00:44:15 --> 00:44:20
always is something that keeps the state

00:44:17 --> 00:44:22
like just because you look away doesn't

00:44:19 --> 00:44:23
mean that the chair should disappear or

00:44:21 --> 00:44:26
change color because it's that's not

00:44:22 --> 00:44:27
what the state of the world is. How do

00:44:25 --> 00:44:29
you see that? Do you think there's

00:44:26 --> 00:44:31
relevance there in image model? Is that

00:44:28 --> 00:44:33
something you even consider optimizing

00:44:30 --> 00:44:36
for? Yeah, I mean if you think about an

00:44:32 --> 00:44:37
image model that has a a long context

00:44:35 --> 00:44:41
where you can put other things in that

00:44:36 --> 00:44:43
context like text, images, audio, video,

00:44:40 --> 00:44:45
then I think it's definitely like your

00:44:42 --> 00:44:47
easoning over the context of things you

00:44:44 --> 00:44:49
have to produce a final output image

00:44:46 --> 00:44:53
>> or video. Um so yeah, I think there's

00:44:48 --> 00:44:56
definitely um some model capability to

00:44:52 --> 00:44:59
do this type of stuff already.

00:44:55 --> 00:45:00
>> Got it. I haven't tested it out yet for

00:44:58 --> 00:45:02
this big use case, but I'll let

00:44:59 --> 00:45:04
[laughter] you know. That's one of my

00:45:01 --> 00:45:05
favorite things about these models is

00:45:03 --> 00:45:07
just finding and I'm sure it's really

00:45:04 --> 00:45:08
fun for you guys and you guys probably

00:45:06 --> 00:45:10
have much more of a hint than we do

00:45:07 --> 00:45:12
about what they can do. But sometimes

00:45:09 --> 00:45:14
you'll just see some crazy X or Reddit

00:45:11 --> 00:45:17
or wherever post about some incredible

00:45:13 --> 00:45:18
thing that someone has figured out um

00:45:16 --> 00:45:20
how to do that you would never expect

00:45:17 --> 00:45:22
hat the model might be able to do

00:45:19 --> 00:45:24
necessarily and then other people kind

00:45:21 --> 00:45:26
of build on that and say like oh and

00:45:23 --> 00:45:28
then I tried the next iteration of this

00:45:25 --> 00:45:30
thing and suddenly you have this like

00:45:27 --> 00:45:32
almost entirely new space that's been

00:45:29 --> 00:45:34
discovered in terms of what the what the

00:45:31 --> 00:45:36
models are capable of. It must be fun as

00:45:33 --> 00:45:38
people much more deeply involved in kind

00:45:35 --> 00:45:40
of building these models and building

00:45:37 --> 00:45:40
the interfaces to kind of watch that

00:45:39 --> 00:45:41
happen.

00:45:39 --> 00:45:44
>> Yeah.

00:45:40 --> 00:45:46
>> So, so if you talk to visual artists

00:45:43 --> 00:45:48
today, I I've, you know, I I personally

00:45:45 --> 00:45:49
love this stuff. I post about it on the

00:45:47 --> 00:45:51
internet. You can get some very

00:45:48 --> 00:45:53
skeptical answers. People like, "Oh,

00:45:50 --> 00:45:56
this is terrible." Right? Like what do

00:45:52 --> 00:45:58
you have any idea what triggers this

00:45:55 --> 00:46:00
reaction, right? I'm convinced that

00:45:57 --> 00:46:02
his ultimately really empowers the

00:45:59 --> 00:46:03
artists, right? It gives you new tools,

00:46:01 --> 00:46:06
right? is like hey we now have I don't

00:46:02 --> 00:46:07
know watercolors for Michelangelo let's

00:46:05 --> 00:46:08
ee what he does with it right and

00:46:06 --> 00:46:10
amazing things come out it's of the

00:46:07 --> 00:46:13
similar thing but but what triggers this

00:46:09 --> 00:46:14
strong reaction against it

00:46:12 --> 00:46:17
>> so I think it's something something to

00:46:14 --> 00:46:19
do with the amount of control over the

00:46:16 --> 00:46:21
output so you know in the beginning when

00:46:18 --> 00:46:23
we had these kinds of text image models

00:46:20 --> 00:46:25
they would be very much like a oneshot

00:46:22 --> 00:46:26
you put in some text you get an output

00:46:24 --> 00:46:28
and people would be like oh this is art

00:46:25 --> 00:46:30
his is this thing I made and I think

00:46:27 --> 00:46:32
that maybe rubs people a little bit the

00:46:30 --> 00:46:35
wrong way who are come from the creative

00:46:31 --> 00:46:37
community because um you know that it's

00:46:34 --> 00:46:39
most of the decisions that were

00:46:36 --> 00:46:40
made were made by the model by the data

00:46:38 --> 00:46:42
that was used to train

00:46:39 --> 00:46:42
>> express yourself anymore physically

00:46:41 --> 00:46:44
right

00:46:41 --> 00:46:45
>> yeah exactly it's not yeah so as a

00:46:43 --> 00:46:46
creative person you want to be able to

00:46:44 --> 00:46:48
express yourself so I think as we make

00:46:45 --> 00:46:50
the models more controllable then a lot

00:46:47 --> 00:46:52
of these concerns of like oh that's just

00:46:50 --> 00:46:55
hat the computer is doing everything

00:46:51 --> 00:46:57
kind of may may go away um and the other

00:46:54 --> 00:46:58
thing is I think that that there was a

00:46:56 --> 00:46:59
period of time where we were all so

00:46:57 --> 00:47:02
amazed by the images these models could

00:46:58 --> 00:47:04
create that like we were we were pretty

00:47:01 --> 00:47:05
like uh happy to see just like oh this

00:47:03 --> 00:47:08
tuff comes out of these models but I

00:47:04 --> 00:47:09
think humans get really bored fast of

00:47:07 --> 00:47:11
this type of thing. So like there was a

00:47:08 --> 00:47:12
big rush and now if you see a if you see

00:47:10 --> 00:47:14
an image that you know was just like oh

00:47:11 --> 00:47:15
that's just like a single prompt person

00:47:13 --> 00:47:16
didn't think about it much you can kind

00:47:14 --> 00:47:18
of tell like that's an AI generated

00:47:16 --> 00:47:20
image not that interesting. So I think

00:47:17 --> 00:47:21
like there's still this boundary of like

00:47:19 --> 00:47:24
now you need to be able to make

00:47:20 --> 00:47:27
interesting things with the AI tools um

00:47:23 --> 00:47:30
which is hard but it this will yeah this

00:47:26 --> 00:47:31
will always be you know a requirement.

00:47:29 --> 00:47:32
We need someone to be able to do this.

00:47:30 --> 00:47:32
And I think

00:47:31 --> 00:47:34
>> we still need artists.

00:47:31 --> 00:47:35
>> We still need artists. And I think

00:47:33 --> 00:47:37
artists will be able to also recognize

00:47:34 --> 00:47:38
when when people have actually like put

00:47:36 --> 00:47:41
a lot of control and intent

00:47:37 --> 00:47:43
>> and still not be an artist. [laughter]

00:47:40 --> 00:47:45
>> Maybe get but but it it is there's a lot

00:47:42 --> 00:47:47
of craft and there's a lot of taste,

00:47:44 --> 00:47:49
right, that you accumulate sometimes

00:47:46 --> 00:47:51
over decades, right? And I don't think

00:47:48 --> 00:47:53
these models really have taste, right?

00:47:50 --> 00:47:55
And so I think a lot of like a lot of

00:47:52 --> 00:47:57
the reactions that you mentioned maybe

00:47:54 --> 00:47:58
also come from that. And so we do work

00:47:56 --> 00:48:00
with a lot of artists across all the

00:47:57 --> 00:48:03
modalities that we work with. Um so

00:47:59 --> 00:48:05
image, video, um music because we really

00:48:02 --> 00:48:07
care about like building the technology

00:48:04 --> 00:48:08
step by step with them and trying to

00:48:06 --> 00:48:09
figure out they really help us kind of

00:48:07 --> 00:48:11
like push the boundary of what's

00:48:08 --> 00:48:13
possible. A lot of people are really

00:48:10 --> 00:48:15
excited, but they they really do bring a

00:48:12 --> 00:48:17
lot of their knowledge and expertise and

00:48:14 --> 00:48:18
kind of like 30 years of design

00:48:16 --> 00:48:21
knowledge. We just work with um Ross

00:48:17 --> 00:48:23
Loveg Grove um on fine-tuning a model on

00:48:20 --> 00:48:24
his sketches so that he can then create

00:48:22 --> 00:48:26
something new

00:48:23 --> 00:48:27
>> out of that and then we design an actual

00:48:25 --> 00:48:30
physical chair that we like have a

00:48:26 --> 00:48:31
prototype of um and so there there's a

00:48:29 --> 00:48:33
lot of people who want to kind of bring

00:48:30 --> 00:48:34
the expertise that they've built and

00:48:32 --> 00:48:36
kind of like the rich language that they

00:48:33 --> 00:48:38
use to describe their work and and have

00:48:35 --> 00:48:40
that dialogue with the model so that

00:48:37 --> 00:48:42
hey can push their work kind of to the

00:48:39 --> 00:48:44
frontier. And it is, you know, it

00:48:41 --> 00:48:46
doesn't happen in like one prompt and

00:48:43 --> 00:48:48
two minutes. Um, it it does require a

00:48:45 --> 00:48:50
lot of that kind of taste and human

00:48:47 --> 00:48:51
creation and and craft that goes into

00:48:49 --> 00:48:53
building something that actually then,

00:48:50 --> 00:48:55
you know, becomes art.

00:48:52 --> 00:48:57
>> At the end, it's still a tool that

00:48:54 --> 00:48:58
requires the human behind it to to

00:48:56 --> 00:49:00
express the feelings and the emotions

00:48:57 --> 00:49:01
and the story and everything.

00:48:59 --> 00:49:02
>> Yeah, absolutely. Absolutely.

00:49:00 --> 00:49:04
>> And that's what resonates with you when

00:49:01 --> 00:49:06
you probably look at it, right? Um, you

00:49:03 --> 00:49:07
will have a different reaction when

00:49:05 --> 00:49:08
you know that there's a human behind it

00:49:06 --> 00:49:10
who has spent 30 years thinking about

00:49:08 --> 00:49:12
something and then pour that into a

00:49:09 --> 00:49:14
piece of art.

00:49:11 --> 00:49:16
I think there's also a bit of this um

00:49:13 --> 00:49:19
phenomenon that like most people who

00:49:15 --> 00:49:20
consume creative content and maybe even

00:49:18 --> 00:49:21
ones that are that care a lot about it

00:49:19 --> 00:49:23
like they they don't know what they're

00:49:20 --> 00:49:25
going to like next. You need someone who

00:49:22 --> 00:49:27
has a vision and can do something that's

00:49:24 --> 00:49:28
interesting and different, right? And

00:49:26 --> 00:49:29
then you show it to people like, "Oh,

00:49:27 --> 00:49:31
wow. That's amazing." But like they

00:49:28 --> 00:49:32
wouldn't necessarily like think of that

00:49:30 --> 00:49:32
on their own,

00:49:31 --> 00:49:34
>> right?

00:49:31 --> 00:49:36
>> So when we're, you know, when we're

00:49:33 --> 00:49:38
optimizing these models, like one thing

00:49:35 --> 00:49:39
we could do is we could optimize for

00:49:37 --> 00:49:40
like the the average preference of

00:49:38 --> 00:49:41
everybody.

00:49:39 --> 00:49:43
>> But I don't think you end up with

00:49:40 --> 00:49:44
interesting things by doing that. You

00:49:42 --> 00:49:46
end up with something that everyone kind

00:49:43 --> 00:49:47
of likes, but you don't end up with

00:49:45 --> 00:49:48
ings that people are like, "Oh, wow.

00:49:46 --> 00:49:50
That's amazing. like I'm going to change

00:49:47 --> 00:49:51
my my my whole like perspective of art

00:49:49 --> 00:49:52
because I saw that

00:49:50 --> 00:49:55
>> there's the avantguard edition of the

00:49:52 --> 00:49:57
model [laughter] if I use it with the

00:49:54 --> 00:49:59
term there's the I don't know what's

00:49:56 --> 00:50:01
the other end of the spectrum the

00:49:58 --> 00:50:02
marketing edition or so where it's very

00:50:00 --> 00:50:03
predictable and

00:50:01 --> 00:50:05
>> very straightforward.

00:50:02 --> 00:50:07
>> Yeah. Well, since we're coming up on

00:50:04 --> 00:50:10
time, uh, last couple question. One is,

00:50:06 --> 00:50:12
what's one feature that you know the

00:50:09 --> 00:50:14
model is capable of that you wish people

00:50:11 --> 00:50:15
ask you more?

00:50:14 --> 00:50:18
>> Interle.

00:50:14 --> 00:50:19
>> Yeah, in I think we've always been

00:50:17 --> 00:50:21
amazed that nobody ever posts anything

00:50:18 --> 00:50:22
about in solely generation is what we

00:50:20 --> 00:50:24
call the model's ability to generate

00:50:21 --> 00:50:27
more than one image for a specific

00:50:23 --> 00:50:28
prompt. So, you can ask for like I want

00:50:26 --> 00:50:30
a story like a bedtime story or

00:50:27 --> 00:50:32
something like generate the same

00:50:29 --> 00:50:34
character over these series of images.

00:50:31 --> 00:50:37
And I think that um yeah, people haven't

00:50:33 --> 00:50:38
really found it useful yet or haven't

00:50:36 --> 00:50:39
discovered it. I don't know.

00:50:37 --> 00:50:41
>> Oh, interesting. Well, if you're

00:50:38 --> 00:50:41
listening to the podcast, go try this

00:50:40 --> 00:50:43
out.

00:50:40 --> 00:50:45
>> Try [laughter]

00:50:42 --> 00:50:47
>> Yeah. And what's the most um exciting

00:50:44 --> 00:50:49
technical challenge that you look

00:50:46 --> 00:50:52
forward to tackling in the next, I don't

00:50:48 --> 00:50:55
know, months, years.

00:50:52 --> 00:50:58
>> So, I think that there's really a high

00:50:54 --> 00:50:59
ceiling in terms of quality for where

00:50:57 --> 00:51:00
we're going. Like, I think you people

00:50:58 --> 00:51:02
look at these images and say, "Oh, it's

00:50:59 --> 00:51:04
almost perfect. we must be done. And for

00:51:01 --> 00:51:06
a while, we were in this like cherrypick

00:51:03 --> 00:51:07
phase where we would, you know, everyone

00:51:05 --> 00:51:08
would pick their best images. So, you

00:51:06 --> 00:51:09
look at those and they're great. But

00:51:07 --> 00:51:11
actually, what's more important now is

00:51:08 --> 00:51:12
the worst image. We're in a lemon

00:51:10 --> 00:51:14
picking stage because every model can

00:51:12 --> 00:51:16
cherrypick images that look perfect.

00:51:13 --> 00:51:17
>> So, like now I think the real question

00:51:15 --> 00:51:19
is like how expressable is this model

00:51:16 --> 00:51:20
and what's the worst image you would get

00:51:18 --> 00:51:22
given what you're trying to do.

00:51:19 --> 00:51:24
>> So, I think by raising the quality of

00:51:21 --> 00:51:26
the worst image, we really open up the

00:51:23 --> 00:51:27
amount of use cases for things we can

00:51:25 --> 00:51:30
do. like there's all kinds of

00:51:26 --> 00:51:32
productivity use cases like um you know

00:51:29 --> 00:51:33
beyond this kind of like immediate

00:51:31 --> 00:51:34
creative tasks that we know the model

00:51:32 --> 00:51:36
can do and I think that's a direction

00:51:33 --> 00:51:37
we're headed we're headed to where if

00:51:35 --> 00:51:39
these models can do more things

00:51:36 --> 00:51:40
reasonably then they're just the the use

00:51:38 --> 00:51:41
cases will be far greater

00:51:39 --> 00:51:43
>> so that's the that's the moral

00:51:40 --> 00:51:45
equivalent of the monkeys on typewriters

00:51:42 --> 00:51:47
basically any model given enough tries

00:51:44 --> 00:51:47
will eventually make an amazing

00:51:46 --> 00:51:49
adventure

00:51:46 --> 00:51:51
>> but the the other way around it's hard

00:51:48 --> 00:51:52
>> yeah the other round is hard one monkey

00:51:50 --> 00:51:54
writing a book would be very hard

00:51:51 --> 00:51:55
>> it would be a good monkey for that one

00:51:53 --> 00:51:56
[laughter]

00:51:54 --> 00:51:59
>> what are the applications you think that

00:51:55 --> 00:52:01
would come out when we reach the lower

00:51:58 --> 00:52:03
bound?

00:52:00 --> 00:52:04
>> So, the one I'm most interested in, we

00:52:02 --> 00:52:08
mentioned this before, is education

00:52:03 --> 00:52:10
factuality. I have um you know, I I have

00:52:07 --> 00:52:11
very I don't know how many times I want

00:52:09 --> 00:52:13
o use these models for creative

00:52:10 --> 00:52:16
purposes a month, but like I have way

00:52:12 --> 00:52:18
more use cases for information seeking,

00:52:15 --> 00:52:20
factuality, kind of like learning,

00:52:17 --> 00:52:22
education type use cases. So, I think

00:52:19 --> 00:52:24
like once that starts working, then

00:52:21 --> 00:52:25
it'll be opening up all these new areas.

00:52:23 --> 00:52:27
Amazing.

00:52:24 --> 00:52:29
>> There's also something about I think

00:52:26 --> 00:52:31
taking more advantage of the models

00:52:28 --> 00:52:33
context window. Um so you can input a

00:52:30 --> 00:52:36
really large amount of content right

00:52:32 --> 00:52:39
into these LLMs. And um some companies

00:52:36 --> 00:52:41
um you mentioned a few before um they

00:52:38 --> 00:52:43
will have like 150 page brand guidelines

00:52:40 --> 00:52:45
on like what you can and cannot do,

00:52:42 --> 00:52:48
right? And they're like very precise,

00:52:44 --> 00:52:50
right? Like colors, fonts, and right

00:52:47 --> 00:52:52
>> um and like the the the size of like a

00:52:49 --> 00:52:54
Lego brick maybe. Um and so being able

00:52:51 --> 00:52:55
to actually like take that in and follow

00:52:53 --> 00:52:57
that to a tea when you're doing

00:52:54 --> 00:53:00
eneration that's like a whole new level

00:52:56 --> 00:53:02
of control um that we just can't we

00:52:59 --> 00:53:03
don't have today right um to to make

00:53:01 --> 00:53:05
sure that you're actually kind of like

00:53:02 --> 00:53:06
following that to a tea. I think that

00:53:04 --> 00:53:08
will build a lot of trust with you know

00:53:06 --> 00:53:10
very established brands. where we have a

00:53:07 --> 00:53:12
second creative compliance review model

00:53:09 --> 00:53:14
that then double checks everything that

00:53:11 --> 00:53:16
I could do against the the model should

00:53:13 --> 00:53:18
o it on its own, right? Like like it

00:53:15 --> 00:53:20
should kind of have this yes it should

00:53:18 --> 00:53:22
have this loop as like okay I generate

00:53:19 --> 00:53:23
this but then page 52 says that I

00:53:21 --> 00:53:25
shouldn't have right and I'm going to go

00:53:22 --> 00:53:26
back and try again and then two hours

00:53:24 --> 00:53:26
later it will come back to you with that

00:53:25 --> 00:53:27
respect.

00:53:25 --> 00:53:28
>> Yeah.

00:53:26 --> 00:53:30
>> And we saw with the text models how this

00:53:28 --> 00:53:32
inference time scaling how much it can

00:53:29 --> 00:53:33
help right being able to to critique

00:53:31 --> 00:53:36
your own work. Yep.

00:53:32 --> 00:53:39
>> So this this feels really important.

00:53:35 --> 00:53:41
>> Boy, an incredibly amazingly exciting

00:53:38 --> 00:53:42
future for for image models.

00:53:40 --> 00:53:43
>> Yes. And congrats on all the amazing

00:53:41 --> 00:53:43
work.

00:53:42 --> 00:53:44
>> Thank you.

00:53:43 --> 00:53:46
>> Thanks for having us.

00:53:44 --> 00:53:49
>> Well, thank you so much for coming on

00:53:45 --> 00:53:49
the pod.

<!-- YOUTUBE_TRANSCRIPT_END -->
