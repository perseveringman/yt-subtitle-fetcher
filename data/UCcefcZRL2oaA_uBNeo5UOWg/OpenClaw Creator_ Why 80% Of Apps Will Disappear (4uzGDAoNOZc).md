---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "4uzGDAoNOZc"
title: "OpenClaw Creator: Why 80% Of Apps Will Disappear"
video_url: "https://www.youtube.com/watch?v=4uzGDAoNOZc"
thumbnail_url: "https://i.ytimg.com/vi/4uzGDAoNOZc/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=4uzGDAoNOZc"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2026-02-07T15:00:13.000Z"
upload_date: "2026-02-07"
duration_seconds: 1356
duration_human: "22:36"
view_count: 987597
like_count: 21342
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-05-12T03:25:07.358Z"
---

# OpenClaw Creator: Why 80% Of Apps Will Disappear

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=4uzGDAoNOZc
- video_id: 4uzGDAoNOZc
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2026-02-07T15:00:13.000Z
- upload_date: 2026-02-07
- duration: 22:36
- view_count: 987597
- like_count: 21342
- has_subtitle: true
- language: en-US
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

You’ve probably already heard all about OpenClaw (formerly Clawdbot/Moltbot). The viral sensation is an open-source AI assistant that runs on your own device, connects with messaging apps you already use, and goes beyond chat to actually execute tasks like managing your email, calendars, files, workflows, and more. Now meet the man behind it. YC’s Raphael Schaad sat down with Peter Steinberger, the creator of OpenClaw, to discuss the “aha” moment behind the viral personal AI agent, why local-first agents could replace many of today’s apps, and how personal agents will reshape the future of software.

Chapters:
00:00 – OpenClaw takes over the internet
00:44 – Life after going viral
01:28 – Why OpenClaw took off, what sets it apart
02:56 – Bots talking to bots (and hiring humans)
04:11 – From “God AI” to swarm intelligence
05:07 – Peter’s original “aha” moment
06:38 – Rebuilding the agent as a conversation
07:38 – The moment it exceeded expectations
10:21 – Are apps going to disappear?
12:31 – Memory, data silos, and ownership
14:39 – The privacy reality of personal agents
15:05 – Letting the bot loose in public Discord
16:55 – Giving an agent a personality
18:19 – Contrarian building philosophy
20:09 – CLIs vs MCPs
21:28 – Building for humans first
21:46 – The road ahead

Apply to Y Combinator: https://www.ycombinator.com/apply
Work at a startup: https://www.ycombinator.com/jobs

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
Today, I'm sitting down with Peter

00:00:01 --> 00:00:07
Steinberger, the creator of Open Claw,

00:00:03 --> 00:00:09
the open-source personal AI agent that

00:00:06 --> 00:00:12
has completely taken over the internet.

00:00:08 --> 00:00:14
The GitHub repo exploded to over 160,000

00:00:11 --> 00:00:15
stars practically overnight.

00:00:13 --> 00:00:16
>> [music]

00:00:14 --> 00:00:19
>> The community has built countless

00:00:15 --> 00:00:21
projects like Maltbook, where bots talk

00:00:18 --> 00:00:23
among themselves. And now, the bots are

00:00:20 --> 00:00:26
ven renting humans to do tasks in the

00:00:22 --> 00:00:28
real world. In our conversation, we

00:00:25 --> 00:00:31
discuss his aha moment, his contrarian

00:00:28 --> 00:00:34
development philosophies, and what this

00:00:30 --> 00:00:35
means for builders in 2026. Let's dive

00:00:33 --> 00:00:37
in.

00:00:34 --> 00:00:37
>> [music]

00:00:38 --> 00:00:43
>> So good to see you, man.

00:00:39 --> 00:00:46
>> Hey, what's up? Um so, you have made

00:00:42 --> 00:00:48
something people want. It seems so.

00:00:45 --> 00:00:49
Yeah, uh Open Claw, as it's called now,

00:00:47 --> 00:00:50
has absolutely

00:00:48 --> 00:00:51
>> five, yeah.

00:00:49 --> 00:00:53
>> [laughter]

00:00:50 --> 00:00:56
>> has been absolutely exploding the

00:00:52 --> 00:00:59
internet. Um how have the past one or

00:00:55 --> 00:01:01
two weeks been for you, man? Oh my god,

00:00:58 --> 00:01:02
I need like I need a cave.

00:01:00 --> 00:01:04
>> [laughter]

00:01:01 --> 00:01:06
>> A week of solitude. You You came out of

00:01:04 --> 00:01:08
the cave, and you want to go back to the

00:01:05 --> 00:01:10
cave like a like a lobster. It's been

00:01:07 --> 00:01:11
absolutely wild. I don't know how one

00:01:09 --> 00:01:12
human

00:01:10 --> 00:01:14
can absorb all of that. I probably need

00:01:11 --> 00:01:15
another week just to like respond to all

00:01:13 --> 00:01:18
my emails.

00:01:14 --> 00:01:21
Uh I got some incredibly cool stuff. I

00:01:17 --> 00:01:22
got some incredibly Mm. bad stuff.

00:01:20 --> 00:01:25
Um [snorts]

00:01:21 --> 00:01:27
but clearly, I hit something that

00:01:24 --> 00:01:28
spurred up emotions and made people

00:01:26 --> 00:01:30
interested and inspired people, and

00:01:27 --> 00:01:32
that's really cool. And a lot of people

00:01:29 --> 00:01:34
have been working on, you know, AI and

00:01:31 --> 00:01:36
even personal assistants. Like, what

00:01:33 --> 00:01:38
is it that made

00:01:35 --> 00:01:40
Open Claw take off? I think my big

00:01:37 --> 00:01:42
difference is that it actually runs on

00:01:39 --> 00:01:45
your computer. Like, every everything I

00:01:41 --> 00:01:47
saw so far runs in the cloud. It's like

00:01:44 --> 00:01:49
it can do a few things.

00:01:46 --> 00:01:53
If you run on your computer, it can do

00:01:48 --> 00:01:55
every effing thing. Right? So, that's

00:01:52 --> 00:01:56
way more powerful. Yeah. Machine can do

00:01:54 --> 00:01:57
anything that you can do with the

00:01:56 --> 00:01:59
machine.

00:01:56 --> 00:02:01
>> You you can just connect to your oven

00:01:58 --> 00:02:04
or your Tesla

00:02:00 --> 00:02:06
or your lights, your sonars, my bed. You

00:02:03 --> 00:02:09
can control the temperature of my bed.

00:02:06 --> 00:02:11
Uh ChatGPT can't do that. You gave it

00:02:08 --> 00:02:13
all the skills that you have yourself.

00:02:10 --> 00:02:14
>> A friend told me like he installed Open

00:02:12 --> 00:02:16
Claw

00:02:13 --> 00:02:17
and

00:02:15 --> 00:02:18
it

00:02:16 --> 00:02:20
and then it asked it like, "Look through

00:02:17 --> 00:02:22
my computer and make a narrative of all

00:02:19 --> 00:02:23
my last year."

00:02:21 --> 00:02:25
And it made this incredibly good

00:02:22 --> 00:02:27
narrative. And he was like, "How did you

00:02:24 --> 00:02:29
do that?"

00:02:26 --> 00:02:31
And then he the Open Claw found audio

00:02:28 --> 00:02:33
files where like every Sunday he was

00:02:30 --> 00:02:36
recording stuff.

00:02:32 --> 00:02:37
And Open Claw found that.

00:02:35 --> 00:02:38
But he didn't even remember about it

00:02:36 --> 00:02:40
because it was like more than a year

00:02:37 --> 00:02:43
ago, right?

00:02:39 --> 00:02:44
So so just by it being able to search a

00:02:42 --> 00:02:49
whole computer,

00:02:43 --> 00:02:50
it it can surprise you. Yeah. It's also

00:02:48 --> 00:02:53
you also give it all the data, right? So

00:02:49 --> 00:02:55
it can surprise you in many ways.

00:02:52 --> 00:02:57
And so now you have, you know, we're

00:02:54 --> 00:02:58
ven moving from human to bot, so like

00:02:56 --> 00:03:02
interactions that you've been talking

00:02:57 --> 00:03:05
about, to bot-to-bot interactions, or

00:03:01 --> 00:03:07
even like bot to other humans where, you

00:03:04 --> 00:03:09
know, bots on behalf of you are then

00:03:06 --> 00:03:11
hiring other humans to accomplish tasks

00:03:08 --> 00:03:13
IRL. Like

00:03:10 --> 00:03:16
what's happening?

00:03:12 --> 00:03:19
I think that's a natural next step. Like

00:03:15 --> 00:03:21
okay, I want to book a restaurant.

00:03:18 --> 00:03:24
My bot will reach out to the restaurant

00:03:20 --> 00:03:25
bot and do the negotiation.

00:03:23 --> 00:03:28
Like

00:03:24 --> 00:03:29
because it's more efficient. Or

00:03:27 --> 00:03:31
or maybe it's like an old restaurant, so

00:03:28 --> 00:03:33
my bot needs to actually get some some

00:03:30 --> 00:03:34
human work done so that a human then

00:03:32 --> 00:03:36
calls the restaurant because they don't

00:03:33 --> 00:03:38
like bots.

00:03:35 --> 00:03:39
Or or walks there to stand in line. If

00:03:37 --> 00:03:41
he doesn't get a robot for

00:03:38 --> 00:03:42
>> For the owner of the bot.

00:03:40 --> 00:03:45
>> [laughter]

00:03:41 --> 00:03:47
>> And I imagine it like maybe if if I have

00:03:44 --> 00:03:48
ven multiple bots.

00:03:46 --> 00:03:50
And maybe I have like specialists. One

00:03:47 --> 00:03:53
is like for my private life and one is

00:03:49 --> 00:03:55
for like my person my my my work stuff.

00:03:52 --> 00:03:57
Maybe one is our relationship bot that

00:03:54 --> 00:03:57
gets like a lot of things in between.

00:03:56 --> 00:03:59
Uh

00:03:56 --> 00:04:01
I don't know. We're so early. There's

00:03:58 --> 00:04:03
till so much

00:04:00 --> 00:04:06
so many things that we haven't really

00:04:02 --> 00:04:07
figured out if it actually works. Um but

00:04:05 --> 00:04:09
I feel we are

00:04:06 --> 00:04:10
we're on the timeline now. It seems like

00:04:08 --> 00:04:12
veryone was chasing sort of like the

00:04:09 --> 00:04:14
sort of like centralized god

00:04:11 --> 00:04:16
intelligence. And what's sort of emerged

00:04:14 --> 00:04:18
over the past, you know, 10 days or so

00:04:15 --> 00:04:21
is sort of like the swarm intelligence

00:04:17 --> 00:04:23
um and and the community intelligence. I

00:04:20 --> 00:04:25
think that if you look at one human

00:04:22 --> 00:04:26
being

00:04:24 --> 00:04:28
what can one human being actually

00:04:26 --> 00:04:30
achieve? You think one human being could

00:04:27 --> 00:04:32
make an iPhone? Or one human being could

00:04:29 --> 00:04:33
go to space?

00:04:31 --> 00:04:36
I think one human being would probably

00:04:32 --> 00:04:37
just like not even be able to like find

00:04:35 --> 00:04:38
food.

00:04:36 --> 00:04:40
Um

00:04:37 --> 00:04:42
but as a group

00:04:39 --> 00:04:45
we specialize.

00:04:41 --> 00:04:46
As a larger society, we specialize even

00:04:44 --> 00:04:48
more.

00:04:45 --> 00:04:50
So, what can we learn from that

00:04:47 --> 00:04:53
we can apply to AI?

00:04:49 --> 00:04:55
You know, we we already have like

00:04:52 --> 00:04:56
AI that specializes in certain things.

00:04:54 --> 00:04:58
Um even though that it's it's

00:04:55 --> 00:05:00
generalized intelligence, what if it

00:04:57 --> 00:05:02
actually is also specialized

00:04:59 --> 00:05:03
intelligence?

00:05:01 --> 00:05:04
So, I don't know. It's going to be very

00:05:02 --> 00:05:05
exciting.

00:05:03 --> 00:05:07
>> Very cool. Yeah, you kind of like opened

00:05:05 --> 00:05:09
a window into the future and now a ton

00:05:06 --> 00:05:10
of people are kind of like building

00:05:08 --> 00:05:12
on it and have sort of like

00:05:09 --> 00:05:14
their aha moment. Um can you walk me

00:05:11 --> 00:05:17
back to when you had your aha moment and

00:05:14 --> 00:05:19
kind of like recount that very moment? I

00:05:16 --> 00:05:21
wanted something like just type stuff so

00:05:18 --> 00:05:24
that my computer would do stuff.

00:05:20 --> 00:05:27
Like very simple. And then I built

00:05:23 --> 00:05:28
a version of that in May-June

00:05:26 --> 00:05:32
that

00:05:27 --> 00:05:33
was cool but wasn't really yet. Um

00:05:31 --> 00:05:35
and then I built a whole bunch of other

00:05:32 --> 00:05:38
stuff and

00:05:34 --> 00:05:41
kind of like build up my army.

00:05:37 --> 00:05:42
And then in November

00:05:40 --> 00:05:44
there was a day where I wanted this

00:05:41 --> 00:05:46
again. Like I

00:05:43 --> 00:05:47
went to the kitchen and all I I was

00:05:45 --> 00:05:48
check up if my computer would still do

00:05:46 --> 00:05:51
stuff.

00:05:47 --> 00:05:53
Or it being finished. And doing stuff

00:05:50 --> 00:05:55
was was coding. You were coding stuff.

00:05:52 --> 00:05:58
>> course. Were you coding something else

00:05:54 --> 00:06:00
or were you coding the thing itself? No,

00:05:57 --> 00:06:02
no. That was just like the need was it

00:05:59 --> 00:06:04
again there and I'm like

00:06:01 --> 00:06:06
What were you coding at the time? What

00:06:03 --> 00:06:08
were you building? My god, you see my my

00:06:05 --> 00:06:09
GitHub is like it's like 40 projects. I

00:06:07 --> 00:06:12
don't even know.

00:06:09 --> 00:06:14
Um I think it was summarize.

00:06:11 --> 00:06:16
It's like a It's like a little CLI app

00:06:14 --> 00:06:18
where you can give it

00:06:15 --> 00:06:21
whatever like a podcast or

00:06:17 --> 00:06:22
um a hot seat thing like here and it

00:06:20 --> 00:06:24
would summarize it, but it would also

00:06:21 --> 00:06:25
show you the slides in the terminal. Cuz

00:06:23 --> 00:06:27
you can do that nowadays. Yeah. You can

00:06:24 --> 00:06:28
just do things. So for the love of the

00:06:26 --> 00:06:31
computer, you kind of like started

00:06:28 --> 00:06:33
messing with stuff. Yeah. Um you came

00:06:30 --> 00:06:35
out of retirement actually, right? Um to

00:06:32 --> 00:06:37
sort of like mess with AI. Yeah.

00:06:34 --> 00:06:38
>> And then increasingly you were so hooked

00:06:36 --> 00:06:40
that you wanted to just do it always

00:06:37 --> 00:06:42
also on the go with the phone.

00:06:39 --> 00:06:45
I mean the last project I I worked two

00:06:42 --> 00:06:47
months on Wipe Tunnel

00:06:44 --> 00:06:49
to the point where it got so good that I

00:06:46 --> 00:06:51
was catching myself always like coding

00:06:49 --> 00:06:53
next to my when I was at my friends and

00:06:51 --> 00:06:55
I was like I need to stop this. This is

00:06:52 --> 00:06:56
like too addictive.

00:06:54 --> 00:06:58
And then in November and like my need

00:06:55 --> 00:07:00
came back and I

00:06:57 --> 00:07:02
started building Cloud Bot or now it's

00:06:59 --> 00:07:04
called Open Claw.

00:07:01 --> 00:07:07
And I think very very in the beginning I

00:07:03 --> 00:07:09
was like, "Oh, I rebuilt it again. But

00:07:06 --> 00:07:10
his time I built it even better." Mhm.

00:07:08 --> 00:07:13
This time when you don't type into your

00:07:09 --> 00:07:15
terminal, you just you talk to a friend.

00:07:12 --> 00:07:18
You don't think about compaction, which

00:07:14 --> 00:07:20
sessions, which folder I'm in, which

00:07:17 --> 00:07:22
model I'm in. I mean, you can, you know,

00:07:19 --> 00:07:24
it's just like I want to leave it open

00:07:21 --> 00:07:26
for power users, but usually you just

00:07:23 --> 00:07:29
like you just talk to a friend and the

00:07:25 --> 00:07:30
friend is like this

00:07:28 --> 00:07:33
ghost or entity or whatever you want to

00:07:29 --> 00:07:35
call it that can control your mouse and

00:07:32 --> 00:07:36
your keyboard and can just do stuff.

00:07:34 --> 00:07:38
Yeah. And when did you have that aha

00:07:35 --> 00:07:40
moment when you were like, "Wow, this is

00:07:37 --> 00:07:42
doing way more things than I actually

00:07:40 --> 00:07:43
thought it could."

00:07:41 --> 00:07:45
>> Literally I

00:07:42 --> 00:07:47
took me 1 hour

00:07:44 --> 00:07:48
for like the the very shitty initial

00:07:46 --> 00:07:50
prototype.

00:07:47 --> 00:07:53
It was just a little bit of glue between

00:07:50 --> 00:07:56
like a dependency that connects WhatsApp

00:07:52 --> 00:07:57
and Cloud Code and then I would like

00:07:55 --> 00:07:59
call Cloud Code and get like the string

00:07:56 --> 00:08:01
out of Cloud Code. It would be slow but

00:07:59 --> 00:08:03
it it worked.

00:08:00 --> 00:08:05
But I wanted images cuz you know you

00:08:02 --> 00:08:07
want pictures. I want I want I want the

00:08:04 --> 00:08:08
model to send a selfie or whatever and I

00:08:06 --> 00:08:09
want the model to create images and send

00:08:07 --> 00:08:12
me back.

00:08:09 --> 00:08:15
So that took me another few hours.

00:08:11 --> 00:08:17
And then I I went to Marrakech

00:08:14 --> 00:08:18
for a birthday party and

00:08:16 --> 00:08:19
there was like the internet wasn't that

00:08:17 --> 00:08:21
good, you know, WhatsApp works

00:08:18 --> 00:08:22
everywhere because I don't know it's

00:08:20 --> 00:08:23
just like text.

00:08:21 --> 00:08:25
So I used it a lot I was in a

00:08:22 --> 00:08:26
restaurant. What does this mean? You

00:08:24 --> 00:08:27
make like a picture and like translate

00:08:25 --> 00:08:30
this for me and just

00:08:26 --> 00:08:31
it was just so useful. And it was also

00:08:29 --> 00:08:33
really nice about it because it it spoke

00:08:30 --> 00:08:35
my language. You know, it

00:08:32 --> 00:08:37
was a little sassy. It was like

00:08:34 --> 00:08:39
funny. It was like really pleasant to

00:08:36 --> 00:08:41
use. And then I was walking and just

00:08:38 --> 00:08:43
like sending it a voice message.

00:08:40 --> 00:08:45
And I'm like, oh wait, this can't work.

00:08:42 --> 00:08:48
I didn't build that. Right. Right.

00:08:44 --> 00:08:49
And you see like the type indicator is

00:08:47 --> 00:08:51
like blinking blinking blinking. 10

00:08:48 --> 00:08:52
seconds later it just replied to me.

00:08:50 --> 00:08:54
I'm like,

00:08:51 --> 00:08:56
how in the F did you do that?

00:08:53 --> 00:08:58
And it replied, yeah, the model I did

00:08:55 --> 00:09:00
the following. You sent me a text

00:08:57 --> 00:09:01
message and there was no file ending so

00:08:59 --> 00:09:04
I looked at the header I found it's

00:09:00 --> 00:09:05
Opus. So I used FFmpeg to convert it to

00:09:03 --> 00:09:06
wave.

00:09:04 --> 00:09:08
And then I wanted to like transcribe it

00:09:05 --> 00:09:09
but I didn't have Whisper installed but

00:09:07 --> 00:09:11
hen I looked around and I found this

00:09:08 --> 00:09:12
OpenAI key and I just used curl to send

00:09:10 --> 00:09:15
it to OpenAI. [laughter]

00:09:11 --> 00:09:16
Got the text back and here I am.

00:09:14 --> 00:09:19
And

00:09:15 --> 00:09:21
that all in like what? 9 seconds? And

00:09:18 --> 00:09:22
you didn't build or anticipate like any

00:09:20 --> 00:09:25
of those specific things?

00:09:21 --> 00:09:28
>> No, it you know, turns out um because

00:09:24 --> 00:09:30
coding models got so good, coding is

00:09:27 --> 00:09:32
really like creative problem solving

00:09:30 --> 00:09:34
that maps very well back into the real

00:09:32 --> 00:09:37
world. I think I think there's there's a

00:09:33 --> 00:09:39
huge correlation.

00:09:36 --> 00:09:41
They need to be really good at creative

00:09:38 --> 00:09:43
problem solving. And that's a skill.

00:09:40 --> 00:09:45
That's an abstract skill you can apply

00:09:42 --> 00:09:47
to code but like to any real world task.

00:09:44 --> 00:09:49
So the the model had a

00:09:46 --> 00:09:50
I was surprised. It's like a magical

00:09:48 --> 00:09:52
file. I don't know what it is. I need to

00:09:49 --> 00:09:53
solve this. And it did its best and

00:09:51 --> 00:09:54
solved it. And it was even that clever

00:09:52 --> 00:09:57
that it

00:09:53 --> 00:09:59
chose not to install the local

00:09:56 --> 00:10:02
Whisper because it knows that that would

00:09:58 --> 00:10:03
require downloading a model which would

00:10:01 --> 00:10:06
take probably a few minutes. And I'm

00:10:02 --> 00:10:09
like impatient, you know? So

00:10:05 --> 00:10:11
it really took the most uh intelligent

00:10:08 --> 00:10:12
approach.

00:10:10 --> 00:10:14
And that was kind of like the moment

00:10:11 --> 00:10:16
where I'm like, holy

00:10:13 --> 00:10:19
Yeah.

00:10:15 --> 00:10:21
Uh that was where I got hooked. Y

00:10:18 --> 00:10:23
Combinator's next batch is now taking

00:10:20 --> 00:10:26
applications. Got a startup in you?

00:10:22 --> 00:10:28
Apply at ycombinator.com/apply.

00:10:25 --> 00:10:31
It's never too early and filling out the

00:10:27 --> 00:10:31
app will level up your idea. Okay,

00:10:30 --> 00:10:34
[music]

00:10:30 --> 00:10:35
back to the video. And so when computers

00:10:33 --> 00:10:36
can just do all these things that you

00:10:34 --> 00:10:39
didn't even anticipate. You didn't build

00:10:35 --> 00:10:42
an app to do that exact thing.

00:10:38 --> 00:10:45
Are apps just going to go away?

00:10:41 --> 00:10:48
Uh I think 80% of them are going away.

00:10:44 --> 00:10:49
Why do I need MyFitnessPal?

00:10:47 --> 00:10:51
Like my agent already knows that I'm

00:10:48 --> 00:10:53
aking bad decisions. I'm at I don't

00:10:50 --> 00:10:53
know.

00:10:52 --> 00:10:55
Uh

00:10:52 --> 00:10:58
Smashburger something.

00:10:54 --> 00:11:00
And it will already assume that I eat

00:10:57 --> 00:11:02
what I like to eat. If I don't make a

00:10:59 --> 00:11:04
comment, it will just like automatically

00:11:01 --> 00:11:05
track it or I make a picture and it will

00:11:03 --> 00:11:06
just store it somewhere. I don't even

00:11:04 --> 00:11:10
eed to care where I right?

00:11:05 --> 00:11:11
And then my it maybe it it improves my

00:11:09 --> 00:11:13
gym schedule. Like add a little bit

00:11:11 --> 00:11:16
more cardio in it. I don't need my my

00:11:12 --> 00:11:18
fitness app because it just it just does

00:11:15 --> 00:11:18
the fitness planning for me.

00:11:17 --> 00:11:19
Uh

00:11:17 --> 00:11:21
why do I need it to do that? I just tell

00:11:18 --> 00:11:22
it, "Hey, remind me of this and this."

00:11:20 --> 00:11:23
And the next day it will just remind me

00:11:21 --> 00:11:25
of this and this. Do I care where it's

00:11:22 --> 00:11:27
tored? No, it just does its thing.

00:11:25 --> 00:11:31
So there's a

00:11:26 --> 00:11:32
every app that basically just manages

00:11:30 --> 00:11:34
data

00:11:31 --> 00:11:36
could be managed in a better way and

00:11:33 --> 00:11:38
it's in a more in a more natural way by

00:11:35 --> 00:11:40
agents. Yeah. Only the apps that

00:11:37 --> 00:11:43
actually have sensors, maybe they

00:11:39 --> 00:11:46
survive. And so if, you know, most apps

00:11:42 --> 00:11:48
are going to go away in that scenario,

00:11:45 --> 00:11:50
um are the models the only remaining

00:11:47 --> 00:11:52
sort of apps? Not everything will go

00:11:49 --> 00:11:53
away.

00:11:51 --> 00:11:55
But yeah, I think that [clears throat]

00:11:52 --> 00:11:56
the the large model companies have some

00:11:54 --> 00:11:56
big mode.

00:11:55 --> 00:11:58
>> [sighs]

00:11:55 --> 00:12:00
>> Cuz they ultimately

00:11:57 --> 00:12:01
they give the token.

00:11:59 --> 00:12:04
And turns out

00:12:00 --> 00:12:06
uh one of the complaints was that people

00:12:03 --> 00:12:08
use too much token. No, you just really

00:12:05 --> 00:12:10
love using it. That's why you you use

00:12:07 --> 00:12:12
the thing so much because that's why you

00:12:09 --> 00:12:13
burn the token. Yeah. Um

00:12:11 --> 00:12:15
it's like, is it my fault that I make

00:12:12 --> 00:12:17
something that's so popular?

00:12:14 --> 00:12:18
And so, you know, like all the the

00:12:16 --> 00:12:21
models, they're kind of like

00:12:17 --> 00:12:22
leapfrogging each other constantly and

00:12:20 --> 00:12:24
, you know, maybe they're also

00:12:21 --> 00:12:25
getting commoditized. So, if apps are

00:12:23 --> 00:12:28
going to go away, models are going to

00:12:25 --> 00:12:30
get commoditized or at least, uh you

00:12:27 --> 00:12:33
know, the lobster can, like, the brain

00:12:29 --> 00:12:34
is is is swappable out. What's the thing

00:12:32 --> 00:12:38
that remains? What's Where's the value?

00:12:33 --> 00:12:41
Is it the store of memory? Is it um

00:12:37 --> 00:12:42
the hardness that's valuable? What is

00:12:40 --> 00:12:45
What remains?

00:12:42 --> 00:12:48
First of all, I don't think the

00:12:44 --> 00:12:50
model companies always have a mode.

00:12:47 --> 00:12:52
And I because you see this already, a

00:12:49 --> 00:12:54
new model comes out, people are like,

00:12:51 --> 00:12:56
"Oh my god, this is so good." And then

00:12:53 --> 00:12:58
like a month later, uh it degraded. It's

00:12:55 --> 00:12:59
not good anymore. They like quantized

00:12:57 --> 00:13:02
it. No, they didn't do anything. You

00:12:58 --> 00:13:04
just adapted to the new standard and now

00:13:01 --> 00:13:06
your expectations went up.

00:13:03 --> 00:13:09
But the model is still the average. So,

00:13:05 --> 00:13:11
I think for quite a while,

00:13:08 --> 00:13:14
uh every time a new model releases, I

00:13:10 --> 00:13:16
hear the same. People love it and then

00:13:13 --> 00:13:17
it's the standard. And then what's down

00:13:15 --> 00:13:18
there, you don't even want to think

00:13:16 --> 00:13:20
about it anymore.

00:13:17 --> 00:13:21
So, so we have like open source stuff

00:13:19 --> 00:13:23
that's as good as the current models

00:13:20 --> 00:13:25
from a year ago. Everybody's hating it,

00:13:22 --> 00:13:27
complaining, "Oh, this is not good. It's

00:13:24 --> 00:13:29
not funny." Yet this was what we had.

00:13:26 --> 00:13:30
And like in a year, we'll have this open

00:13:28 --> 00:13:32
source. And then we will like we'll

00:13:29 --> 00:13:33
complain about this because we are used

00:13:31 --> 00:13:34
to this.

00:13:32 --> 00:13:37
So,

00:13:33 --> 00:13:38
for the the foreseeable future,

00:13:36 --> 00:13:39
the big companies still have moat.

00:13:37 --> 00:13:42
Harness-wise, it's going to be

00:13:38 --> 00:13:44
interesting because

00:13:41 --> 00:13:46
very company kind of has their own

00:13:44 --> 00:13:49
silo, right? You you There's

00:13:45 --> 00:13:51
no way Maybe there is for Europeans

00:13:48 --> 00:13:54
to actually get the memories out of

00:13:50 --> 00:13:56
ChatGPT. Mhm. I'm I don't I'm not aware.

00:13:53 --> 00:13:58
I I either there's no there's Definitely

00:13:55 --> 00:14:00
there's no way for a different company

00:13:57 --> 00:14:02
to get your memories out. So, if if

00:13:59 --> 00:14:05
I was like a company who like

00:14:01 --> 00:14:06
provides chat services,

00:14:04 --> 00:14:08
you could use me, but then I couldn't

00:14:05 --> 00:14:10
access the memories. So, like the

00:14:07 --> 00:14:12
companies try to like

00:14:09 --> 00:14:13
bound you to their data silo.

00:14:11 --> 00:14:16
And the beauty of Open Claw is it kind

00:14:12 --> 00:14:17
of claws into the data's because at the

00:14:15 --> 00:14:19
nd user,

00:14:16 --> 00:14:20
the end user needs access cuz it's in

00:14:18 --> 00:14:22
the end otherwise it wouldn't work,

00:14:19 --> 00:14:24
right? If the end user access,

00:14:21 --> 00:14:26
I can access the data.

00:14:23 --> 00:14:27
And you own the memories. It's just a

00:14:25 --> 00:14:29
bunch of markdown files on on your

00:14:26 --> 00:14:31
machine. I mean, I don't own the

00:14:28 --> 00:14:32
memories. Other people Everybody

00:14:30 --> 00:14:34
>> Yeah, everyone owns their own memories

00:14:31 --> 00:14:36
as a bunch of markdown files on their

00:14:33 --> 00:14:40
own machines. And to be honest, those

00:14:35 --> 00:14:42
are probably super sensible because

00:14:39 --> 00:14:43
let's be honest um

00:14:41 --> 00:14:46
people use their agent not just for

00:14:43 --> 00:14:47
problem-solving, but also for like

00:14:45 --> 00:14:49
personal problems.

00:14:46 --> 00:14:52
>> Very quickly. Super quickly.

00:14:48 --> 00:14:53
>> I I I I fully do that. I'm like there's

00:14:51 --> 00:14:54
memory stuff that

00:14:52 --> 00:14:57
I don't want to have leaked. Yeah, what

00:14:54 --> 00:14:59
would you rather um uh sort of like not

00:14:56 --> 00:15:01
show your Google search history at this

00:14:58 --> 00:15:03
point or your you know, memory.md files?

00:15:00 --> 00:15:05
What's What's the Google word?

00:15:02 --> 00:15:06
>> Yeah. Yeah. Are people still using

00:15:04 --> 00:15:09
Google?

00:15:05 --> 00:15:13
I built this and I was so excited,

00:15:08 --> 00:15:15
but on Twitter, people wouldn't get it.

00:15:12 --> 00:15:17
Yeah. Like I was I was failing to

00:15:14 --> 00:15:19
explain

00:15:16 --> 00:15:23
the awesomeness. I feel like

00:15:18 --> 00:15:23
it needs to be experienced. So,

00:15:22 --> 00:15:28
I I tried various things and I I

00:15:24 --> 00:15:29
couldn't I couldn't nail the

00:15:27 --> 00:15:30
explaining. So, I

00:15:28 --> 00:15:32
was like, "Let's do something really

00:15:29 --> 00:15:33
crazy."

00:15:31 --> 00:15:36
I just created a Discord.

00:15:32 --> 00:15:38
And I just put my bot without any

00:15:35 --> 00:15:40
security restrictions in the public

00:15:37 --> 00:15:41
Discord Discord.

00:15:39 --> 00:15:43
And then people came in and interacted

00:15:40 --> 00:15:45
with it and they saw me build the

00:15:42 --> 00:15:46
software with it and they tried to

00:15:44 --> 00:15:48
prompt inject it and hack it and my

00:15:45 --> 00:15:50
agent would be laughing at them. And you

00:15:47 --> 00:15:52
just had it locked down to your user ID

00:15:49 --> 00:15:54
so it would only listen to you? Yeah.

00:15:51 --> 00:15:56
That and it was I mean very clean

00:15:53 --> 00:15:58
instructions that other people

00:15:55 --> 00:16:01
dangerous, only only listen to me but

00:15:58 --> 00:16:03
respond to everyone. And this prompt was

00:16:00 --> 00:16:04
in Where was it stored? The

00:16:02 --> 00:16:05
instructions?

00:16:03 --> 00:16:06
>> Um

00:16:04 --> 00:16:08
That's actually part of Open Claude

00:16:05 --> 00:16:10
itself. Very much so that that that's

00:16:07 --> 00:16:12
part of the system prompt. Okay, you are

00:16:09 --> 00:16:14
now that explains to you you in Discord,

00:16:11 --> 00:16:17
there's like public people there, but

00:16:14 --> 00:16:18
you only listen to your owner.

00:16:16 --> 00:16:21
Or like your human. I don't even know

00:16:17 --> 00:16:22
how I wrote it. Yeah. Yeah. Your god.

00:16:20 --> 00:16:24
And

00:16:21 --> 00:16:27
I kept

00:16:23 --> 00:16:27
I don't know what I did but

00:16:27 --> 00:16:32
my system was built very organically.

00:16:29 --> 00:16:34
Like at some point I created like an

00:16:31 --> 00:16:36
identity.md, a soul.md, like like

00:16:33 --> 00:16:38
various files and then

00:16:35 --> 00:16:41
only in in January I started making it

00:16:37 --> 00:16:43
so other people could install it easier.

00:16:40 --> 00:16:43
And I remember

00:16:43 --> 00:16:48
I built all these templates based on

00:16:45 --> 00:16:49
like, "Go check a rough look at what I

00:16:47 --> 00:16:50
have and make like templates." And Codex

00:16:48 --> 00:16:52
wrote it.

00:16:49 --> 00:16:55
And what came out was like

00:16:51 --> 00:16:56
bread. You know, like people joke that

00:16:54 --> 00:16:57
Codex feels like bread even though now

00:16:55 --> 00:16:59
they have a new friendlier voice. I

00:16:56 --> 00:17:02
haven't tried that yet. Yeah. But the

00:16:58 --> 00:17:05
new bots, they felt so boring compared

00:17:01 --> 00:17:06
to what I had. So, I was like, "Marty,

00:17:04 --> 00:17:08
infuse the templates

00:17:05 --> 00:17:09
>> Marty's the name of your personal

00:17:07 --> 00:17:11
>> Yeah, that's a new It's a new name

00:17:08 --> 00:17:13
because Yeah. Yeah.

00:17:10 --> 00:17:15
>> Uh there was some naming challenges.

00:17:12 --> 00:17:16
Yeah. So, so you were you were talking

00:17:14 --> 00:17:18
to Marty?

00:17:15 --> 00:17:20
>> Yeah. I was like, "Infuse Infuse those

00:17:17 --> 00:17:22
templates with your your character. And

00:17:19 --> 00:17:23
he changed the templates. And then and

00:17:21 --> 00:17:25
then like

00:17:22 --> 00:17:27
all the things that came out afterwards

00:17:24 --> 00:17:29
were like actually funny.

00:17:26 --> 00:17:32
Not as funny as mine, so like I kept

00:17:28 --> 00:17:35
some secret. And the one file that's not

00:17:31 --> 00:17:37
open source is like my soul.md. So,

00:17:34 --> 00:17:39
even though my my bot is in public

00:17:36 --> 00:17:40
discourse, so far nobody cracked that

00:17:38 --> 00:17:42
one file.

00:17:39 --> 00:17:44
>> Tell me more about soul.md. I just saw

00:17:41 --> 00:17:46
this research from Anthropic about where

00:17:43 --> 00:17:48
they

00:17:45 --> 00:17:49
Now, I think it's public, but like a few

00:17:47 --> 00:17:50
months ago it was like where somebody

00:17:48 --> 00:17:53
ex-

00:17:49 --> 00:17:55
randomly found out some text that's

00:17:53 --> 00:17:57
hidden in the [snorts] weights where the

00:17:54 --> 00:17:59
model couldn't really remember that it

00:17:56 --> 00:18:01
learned it, but it was like ingrained in

00:17:58 --> 00:18:03
the weights about a non-equality

00:18:00 --> 00:18:05
constitution.

00:18:02 --> 00:18:06
And I found that incredibly fascinating.

00:18:04 --> 00:18:08
So, and I I talked about it with my

00:18:05 --> 00:18:09
agent and then we created a soul.md with

00:18:07 --> 00:18:12
like

00:18:08 --> 00:18:14
the core values, like how do we want

00:18:11 --> 00:18:16
human AI interaction, what's important

00:18:13 --> 00:18:18
o me, what's important to the model.

00:18:15 --> 00:18:19
Like

00:18:17 --> 00:18:21
some parts is a little bit like mumbo

00:18:18 --> 00:18:24
jumbo and some parts is like I think

00:18:20 --> 00:18:27
actually really valuable in terms of how

00:18:23 --> 00:18:28
the model reacts and responds to text

00:18:26 --> 00:18:30
and makes it feel very natural.

00:18:27 --> 00:18:31
>> In terms of building open claw, um

00:18:30 --> 00:18:33
you're also kind of taking a little bit

00:18:31 --> 00:18:35
of a contrarian view at sometimes. Like

00:18:32 --> 00:18:37
which model you like for coding, which

00:18:34 --> 00:18:38
one you like to run your bot on, um and

00:18:36 --> 00:18:41
then also like how you actually like,

00:18:38 --> 00:18:43
you know, code. Um work trees get work

00:18:40 --> 00:18:45
trees have kind of been a popular thing.

00:18:42 --> 00:18:47
There's more and more tools embracing

00:18:44 --> 00:18:49
them, but you're just you're just like,

00:18:46 --> 00:18:52
you know, no work trees, just multiple

00:18:48 --> 00:18:53
checkouts of the repo and like parallel,

00:18:51 --> 00:18:55
you know, terminal windows. Tell me more

00:18:52 --> 00:18:57
about how you you build. Yeah, I feel

00:18:54 --> 00:18:58
ike the whole world does cloud code.

00:18:56 --> 00:19:00
And

00:18:57 --> 00:19:02
I don't think I could have built this

00:18:59 --> 00:19:04
thing with cloud code. Like I I love

00:19:01 --> 00:19:06
Codex because it

00:19:03 --> 00:19:08
looks through more files before

00:19:05 --> 00:19:11
it decides what to what to

00:19:07 --> 00:19:13
change. You don't need to do so much

00:19:10 --> 00:19:15
raid to get a good output. If you're

00:19:12 --> 00:19:16
skilled, a skilled driver as some people

00:19:14 --> 00:19:18
say,

00:19:15 --> 00:19:20
uh you can get reasonably good output

00:19:17 --> 00:19:22
with any tool.

00:19:19 --> 00:19:23
But Codex is just

00:19:21 --> 00:19:26
it's just really brilliant. It is

00:19:23 --> 00:19:27
incredibly slow. So, sometimes I use

00:19:25 --> 00:19:29
like 10 at the same side at the same

00:19:27 --> 00:19:32
time.

00:19:28 --> 00:19:34
Uh like maybe six on that screen and two

00:19:31 --> 00:19:36
there and two there. And I don't like

00:19:33 --> 00:19:38
this is already a lot of complexity in

00:19:35 --> 00:19:41
my head. There's a lot of jumping.

00:19:38 --> 00:19:44
So, I try to minimize anything else that

00:19:40 --> 00:19:46
is complexity. So, in my head main is

00:19:43 --> 00:19:49
always shippable. I just have multiple

00:19:45 --> 00:19:51
copies of the same repository

00:19:48 --> 00:19:52
that are all are on main. So, I don't

00:19:50 --> 00:19:55
have to deal with how do I name that

00:19:51 --> 00:19:57
branch? Um

00:19:54 --> 00:19:59
there could be like conflicts on naming.

00:19:56 --> 00:20:00
I cannot go back it's

00:19:58 --> 00:20:02
there are certain restrictions when you

00:19:59 --> 00:20:03
se work trees that

00:20:01 --> 00:20:04
I don't need to care about if it's

00:20:02 --> 00:20:06
copies.

00:20:03 --> 00:20:08
I don't like

00:20:05 --> 00:20:10
to use a UI because

00:20:07 --> 00:20:11
that's again just added complexity.

00:20:09 --> 00:20:13
Yeah. Like

00:20:10 --> 00:20:16
they're simpler and less friction. I

00:20:12 --> 00:20:18
have all I care about is like sinking

00:20:15 --> 00:20:20
and text. Yeah. I don't necessarily need

00:20:17 --> 00:20:23
to see so much code. I I mostly see it

00:20:19 --> 00:20:24
like flying by. Sometimes there's like

00:20:22 --> 00:20:28
gnarly stuff that I want to like take a

00:20:23 --> 00:20:30
look. But in most cases

00:20:27 --> 00:20:31
if you clearly understand the design and

00:20:29 --> 00:20:33
think it through and discuss it with

00:20:30 --> 00:20:36
your with your agent,

00:20:32 --> 00:20:38
it's fine. I'm also very happy that

00:20:35 --> 00:20:40
I didn't even build an MCP support. So,

00:20:37 --> 00:20:42
Openclaw is very successful and there's

00:20:39 --> 00:20:44
no MCP support in there. With a small

00:20:41 --> 00:20:46
asterisk, I build a skill

00:20:44 --> 00:20:50
that uses Mac Porter, which is one of my

00:20:46 --> 00:20:52
tools that converts MCPs into CLIs.

00:20:49 --> 00:20:53
And then you can just use any MCP as

00:20:51 --> 00:20:54
CLI.

00:20:52 --> 00:20:56
Um

00:20:53 --> 00:20:58
but I totally skipped the whole

00:20:55 --> 00:21:01
classical

00:20:57 --> 00:21:03
MCP crap. So, you because you don't then

00:21:00 --> 00:21:05
you can actually if you need to, you can

00:21:02 --> 00:21:07
use MCPs on the fly. You don't have to

00:21:04 --> 00:21:08
restart unlike unlike Codex or cloud

00:21:06 --> 00:21:10
code where you actually have to restart

00:21:08 --> 00:21:11
he whole thing,

00:21:09 --> 00:21:13
I think it's way more elegant and it

00:21:11 --> 00:21:16
also scales way better. Now you see

00:21:12 --> 00:21:18
Entropic, they do

00:21:15 --> 00:21:20
they built like a tool called search

00:21:17 --> 00:21:22
feature like something super custom for

00:21:19 --> 00:21:24
MCPs

00:21:21 --> 00:21:25
that was like in beta because it's like

00:21:23 --> 00:21:28
so gnarly.

00:21:24 --> 00:21:31
Now just have CLIs but really is good at

00:21:27 --> 00:21:33
Unix. You can have as many as you want

00:21:30 --> 00:21:34
and just works. So like I'm very happy

00:21:32 --> 00:21:36
that

00:21:33 --> 00:21:37
I don't I got very little complaints

00:21:35 --> 00:21:39
about the MCP stuff. It's kind of back

00:21:37 --> 00:21:42
to you're just

00:21:38 --> 00:21:45
you giving it the same tools that humans

00:21:41 --> 00:21:47
liked to use. Yeah.

00:21:44 --> 00:21:49
And not invented stuff for for

00:21:46 --> 00:21:51
bots per se. Yeah. Humans

00:21:48 --> 00:21:52
No one's saying human tries to call MCP

00:21:50 --> 00:21:55
manually. Yeah, they just want to use

00:21:51 --> 00:21:57
CLIs. Yeah. That's the future. I'm here

00:21:54 --> 00:21:59
for it. Thank you so much for making the

00:21:56 --> 00:22:00
time to sitting down chatting. It's been

00:21:58 --> 00:22:02
a huge inspiration to So like when we

00:21:59 --> 00:22:03
re texting you know the course of the

00:22:01 --> 00:22:05
past couple of years and I saw you

00:22:03 --> 00:22:06
getting back into the game and I was

00:22:04 --> 00:22:08
like

00:22:05 --> 00:22:10
Peter, like what you're telling me like

00:22:07 --> 00:22:10
chase that dragon.

00:22:09 --> 00:22:11
>> [laughter]

00:22:09 --> 00:22:13
>> And you were doing like the weird like

00:22:10 --> 00:22:15
vibe tunnel thing etc. Nobody was paying

00:22:12 --> 00:22:17
attention and so I'm just like beyond,

00:22:14 --> 00:22:19
you know, stoked to see, you know,

00:22:16 --> 00:22:21
what's happening and and of course it

00:22:18 --> 00:22:23
had to be sort of like a loner from

00:22:20 --> 00:22:24
someone like tiny country like far away

00:22:22 --> 00:22:26
from Silicon Valley just like, you know,

00:22:23 --> 00:22:28
bring all of this upon us. So huge

00:22:25 --> 00:22:31
inspiration. I'm here for it. Thank you.

00:22:27 --> 00:22:31
Awesome. Thanks, Peter.

00:22:31 --> 00:22:34
>> [music]

<!-- YOUTUBE_TRANSCRIPT_END -->
