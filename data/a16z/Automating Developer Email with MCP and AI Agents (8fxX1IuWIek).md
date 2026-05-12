---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "8fxX1IuWIek"
title: "Automating Developer Email with MCP and AI Agents"
video_url: "https://www.youtube.com/watch?v=8fxX1IuWIek"
thumbnail_url: "https://i.ytimg.com/vi/8fxX1IuWIek/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=8fxX1IuWIek"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-03-21T14:00:14.000Z"
upload_date: "2025-03-21"
duration_seconds: 2644
duration_human: "44:04"
view_count: 7507
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T12:55:51.680Z"
---

# Automating Developer Email with MCP and AI Agents

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=8fxX1IuWIek
- video_id: 8fxX1IuWIek
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-03-21T14:00:14.000Z
- upload_date: 2025-03-21
- duration: 44:04
- view_count: 7507
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

In this episode of AI + a16z,  Resend founder and CEO Zeno Rocha sits down with a16z partner Yoko Li to discuss:

- How generative AI — powered by agents and, now, MCP — is reshaping the email experience for developers, as well as the overall world of programming. 
- Zeno's obsession with developer experience has evolved into designing for "agent experience" — a new frontier where LLM-powered agents are not only building products but also operating within them. 
- How email, one of the most ubiquitous tools for developers and end users alike, is being reimagined for a future where agents send, parse, and optimize communication. 
- What it means to build agent-friendly APIs. 
- The emerging MCP protocol, and how AI is collapsing the creative loop for prosumers and developers alike.

Learn more:

Resend:
https://resend.com/

What is AX (agent experience) and how to improve it: 
https://resend.com/blog/agent-experience

A deep dive into MCP and the future of AI tooling: 
https://a16z.com/a-deep-dive-into-mcp-and-the-future-of-ai-tooling/

Dracula theme:
https://draculatheme.com/

Follow everyone on X:

Zeno Rocha - https://x.com/zenorocha

Yoko Li - https://x.com/stuffyokodraws

Check out everything a16z is doing with artificial intelligence, including articles, projects, and more podcasts, here: https://a16z.com/ai/

Chapters:
0:00 - 00:36   | Intro
00:37 - 02:16 | Developers Creating Agent Experience
02:17 - 04:06 | What Is Agent Experience?
04:07 - 07:29 | Email Is Being Redefined For A Future Where Agents Handle  Communication.| 
07:30 - 09:31 | New Competencies In AI
09:32 - 11:00 | Challenges In Email 
11:01 - 13:05 | Future Experiences That Will  Empower Consumers
13:06 - 18:19 | How Can Marketers Leverage Tech To Send High-Quality Emails
18:20 - 24:13 | Creating Agentic Workflow, MCP and The Evolving Ecosystem
24:14 - 27:43 | MCP’s Workflow, Adoption + Database
27:44 -32:48  | Creative Use Cases For Developers
32:49 - 35:52 | Advice For Developers Who Want To Build With AI
35:53 - 41:29 | Side Projects That Solve Problems
41:30 - 44:03 |The Future Of Email

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
When you go to all these different apps,

00:00:02 --> 00:00:08
you go to Superbase, the most databases

00:00:05 --> 00:00:11
you see there were built by humans. You

00:00:07 --> 00:00:13
go to resend, the emails were sent by

00:00:10 --> 00:00:15
humans or drafted by humans and then

00:00:12 --> 00:00:17
sent programmatically. I think we're

00:00:14 --> 00:00:19
going to see a big shift in terms of who

00:00:16 --> 00:00:21
is the actor, who is the creator. And I

00:00:18 --> 00:00:24
believe it's going to be the majority of

00:00:20 --> 00:00:26
the actions will be taken by agents

00:00:23 --> 00:00:28
instead of humans. And that's just the

00:00:25 --> 00:00:30
reality we're going to live in. So we

00:00:28 --> 00:00:35
have to rethink the way we're building

00:00:29 --> 00:00:35
product to support that reality.

00:00:37 --> 00:00:43
Recently we've been seeing a lot of

00:00:39 --> 00:00:45
agent centric applications and then

00:00:42 --> 00:00:48
developers kind of utilizing LMS to

00:00:44 --> 00:00:50
build net new experiences. And then

00:00:47 --> 00:00:53
what's interesting is that a lot of the

00:00:49 --> 00:00:55
developers I met they were like well

00:00:52 --> 00:00:59
nowadays not only do I need to build

00:00:54 --> 00:01:01
services for humans uh where DX is top

00:00:58 --> 00:01:04
of mind they now need to build uh

00:01:00 --> 00:01:05
experiences for agents you know as a

00:01:03 --> 00:01:07
founder in this space who's been

00:01:04 --> 00:01:10
building you know developer experience

00:01:06 --> 00:01:12
for you know all spectrum all across the

00:01:09 --> 00:01:15
spectrum what's your high level thoughts

00:01:11 --> 00:01:17
here uh what have you seen yeah I've

00:01:14 --> 00:01:20
been obsessed with developer experience

00:01:16 --> 00:01:22
you know for the past 10 years and now

00:01:19 --> 00:01:26
you can see that there's a a shift and

00:01:21 --> 00:01:28
there's a new obsession for me when it

00:01:25 --> 00:01:32
comes to agent experience you know as a

00:01:27 --> 00:01:34
product as a SAS uh provider ourselves

00:01:31 --> 00:01:37
we are thinking about how we can make

00:01:33 --> 00:01:39
the product easier for agents to consume

00:01:36 --> 00:01:43
so even like small things like adding

00:01:38 --> 00:01:45
recapture on the signup to prevent bots

00:01:42 --> 00:01:47
now you have to think do you really want

00:01:44 --> 00:01:50
o prevent bots from signing Yeah, maybe

00:01:46 --> 00:01:52
you don't, right? And same as an

00:01:49 --> 00:01:54
infrastructure provider. So, resend is

00:01:51 --> 00:01:56
an email API for developers. It helps

00:01:53 --> 00:01:58
people send transaction and marketing

00:01:55 --> 00:02:01
emails. So, I'm also thinking a lot

00:01:57 --> 00:02:03
about okay, how can we make the

00:02:00 --> 00:02:07
xperience of these agents sending

00:02:02 --> 00:02:09
emails the easiest as possible. So,

00:02:06 --> 00:02:12
there's a lot to uncover on each

00:02:08 --> 00:02:14
spectrum of of product uh when it comes

00:02:11 --> 00:02:16
to making it more agent friendly, but

00:02:13 --> 00:02:18
it's fascinating. It's like we're all

00:02:15 --> 00:02:20
trying to figure out right now. Agent

00:02:17 --> 00:02:22
experience is such an interesting term

00:02:19 --> 00:02:24
because like when I hear the term agent

00:02:21 --> 00:02:26
experience, I wonder is this like a

00:02:23 --> 00:02:28
developer experience but for agents or

00:02:25 --> 00:02:30
is this a developer experience that's

00:02:27 --> 00:02:33
better for the end human developers to

00:02:29 --> 00:02:35
build agents or perhaps it's somewhere

00:02:32 --> 00:02:38
in the middle. How would you define the

00:02:34 --> 00:02:41
term? I think about developer experience

00:02:37 --> 00:02:44
as the sum of all the little details and

00:02:40 --> 00:02:46
that's what makes either great developer

00:02:43 --> 00:02:48
experience or a bad developer

00:02:45 --> 00:02:51
experience. Right? So for agents I

00:02:47 --> 00:02:54
believe it's the same uh you know you're

00:02:50 --> 00:02:58
trying to build uh a world where agents

00:02:53 --> 00:02:59
are the first class citizens and when

00:02:57 --> 00:03:01
you put that in perspective then you

00:02:58 --> 00:03:04
have to rethink a lot of the different

00:03:00 --> 00:03:07
hings you do. So, as an example, in our

00:03:03 --> 00:03:09
industry, you go to Sang Grid, you go to

00:03:06 --> 00:03:10
Postmark, to mail gun, you sign up for

00:03:08 --> 00:03:13
these services, and the first thing you

00:03:10 --> 00:03:15
get is a manual verification process

00:03:12 --> 00:03:18
that takes two days for you to get

00:03:14 --> 00:03:22
approval of your account, right? In an

00:03:17 --> 00:03:23
agent first world, that's simply not,

00:03:21 --> 00:03:26
you know, possible. Like an agent will

00:03:22 --> 00:03:29
never wait two days to take an action.

00:03:26 --> 00:03:31
So, resend from day one was all about

00:03:28 --> 00:03:32
like removing friction, right? So you

00:03:30 --> 00:03:34
sign up, you can send an email in the

00:03:31 --> 00:03:36
first minute. When we built that, it was

00:03:33 --> 00:03:39
all because we thought this is a better

00:03:35 --> 00:03:42
product experience overall for users.

00:03:38 --> 00:03:46
Turns out this is a huge unlock for

00:03:41 --> 00:03:48
agents. So I think it auguments GX. It's

00:03:45 --> 00:03:50
not a replacement or or anything like

00:03:48 --> 00:03:53
that. It's more like everything you

00:03:49 --> 00:03:55
already do for for example docs, right?

00:03:52 --> 00:03:58
the more you invest in docs and

00:03:54 --> 00:04:00
knowledge base, the more quality of the

00:03:57 --> 00:04:04
uh LLMs that you're going to have like

00:03:59 --> 00:04:07
in terms of uh the output there. So the

00:04:03 --> 00:04:08
things you do for one already help

00:04:06 --> 00:04:11
you for another. It's so interesting

00:04:08 --> 00:04:13
especially that email is like a service

00:04:10 --> 00:04:15
very human developer needs either

00:04:12 --> 00:04:17
personally or as part of what they're

00:04:14 --> 00:04:20
building because like once someone signs

00:04:16 --> 00:04:23
up you want to send them a welcome email

00:04:19 --> 00:04:25
so on so forth. So when I think about

00:04:22 --> 00:04:26
agents uh what do agents need in the

00:04:24 --> 00:04:29
world of

00:04:25 --> 00:04:31
email? Do you think of agents as users

00:04:28 --> 00:04:33
of the email like in the future every

00:04:30 --> 00:04:35
agent will have their own email address

00:04:32 --> 00:04:39
and they'll process the email for to

00:04:34 --> 00:04:41
humans and or do you think agents will

00:04:38 --> 00:04:42
uh you know also kind of require a

00:04:40 --> 00:04:44
different level of traction when it

00:04:41 --> 00:04:47
comes to leveraging the service in a

00:04:43 --> 00:04:50
programmatic way? using the analogy of

00:04:46 --> 00:04:52
autonomous cars, right? Whimo, they they

00:04:49 --> 00:04:54
couldn't build new roads. Uh they had to

00:04:51 --> 00:04:58
figure out a way to use the existing

00:04:53 --> 00:05:00
roads to make sure like their product

00:04:57 --> 00:05:03
would work. So I I think the same for

00:04:59 --> 00:05:06
this like we already have APIs, we

00:05:02 --> 00:05:08
already have these established SDKs and

00:05:05 --> 00:05:10
protocols. So we're going to have to

00:05:07 --> 00:05:11
figure out a way to leverage those

00:05:09 --> 00:05:14
instead of creating everything from

00:05:10 --> 00:05:17
scratch. But I do believe there are like

00:05:13 --> 00:05:21
fundamental differences and limitations

00:05:16 --> 00:05:25
as well, right? So there's a reason why

00:05:20 --> 00:05:28
LLM.txt exists as a format because it's

00:05:24 --> 00:05:31
o much easier for LLMs to consume just

00:05:27 --> 00:05:34
plain text, right, versus all the

00:05:30 --> 00:05:36
different HTML and React code together

00:05:33 --> 00:05:38
with docs, right? All you want is the

00:05:35 --> 00:05:40
content. Uh same on the email world.

00:05:37 --> 00:05:42
Like whenever you're sending an email,

00:05:39 --> 00:05:45
you only have like two formats you can

00:05:41 --> 00:05:48
send. You have HTML and you have plain

00:05:44 --> 00:05:50
text as well. Uh and the plain text is

00:05:47 --> 00:05:52
like the old school format that you know

00:05:49 --> 00:05:55
people don't really care as much today,

00:05:51 --> 00:05:58
right? Turns out uh in today's world

00:05:54 --> 00:06:00
that's actually better than the HTML

00:05:57 --> 00:06:03
version because it's easier to parse.

00:05:59 --> 00:06:04
You're using less tokens. It's cheaper.

00:06:02 --> 00:06:06
So I do think there's a fundamental

00:06:03 --> 00:06:09
difference and even the way you think

00:06:05 --> 00:06:12
about API keys and permissioning is it a

00:06:08 --> 00:06:15
user or it's a service account like I

00:06:12 --> 00:06:18
think there's a lot of uh challenges and

00:06:14 --> 00:06:21
but you have to figure out a way to

00:06:17 --> 00:06:23
leverage the existing product surface.

00:06:20 --> 00:06:25
Yeah, the LLM.ext text is such an

00:06:22 --> 00:06:28
interesting example because like the

00:06:24 --> 00:06:31
fact that I exist is because LMS um just

00:06:27 --> 00:06:32
do better with this kind of information

00:06:30 --> 00:06:35
and then as a human if I want to copy

00:06:32 --> 00:06:37
paste the entirety of a site I wouldn't

00:06:34 --> 00:06:39
you know write a scraper to go copy it

00:06:36 --> 00:06:42
's very hard I'll go to lm text and

00:06:38 --> 00:06:44
copy paste it and put it in my chat GPT

00:06:41 --> 00:06:46
I guess in the case of email because

00:06:44 --> 00:06:49
historically people have been sending a

00:06:45 --> 00:06:51
lot of like very pretty marketing emails

00:06:48 --> 00:06:52
yeah to humans and humans react to that

00:06:50 --> 00:06:55
because we're very visual

00:06:51 --> 00:06:58
animals. Yeah. How would it change now

00:06:54 --> 00:07:01
if we're sending emails to agents? Yeah,

00:06:57 --> 00:07:03
content remains the king. I guess the

00:07:00 --> 00:07:05
difference now is that we're going to be

00:07:02 --> 00:07:08
living in a world where agents are

00:07:04 --> 00:07:10
talking to other agents and these agents

00:07:07 --> 00:07:13
are sending emails, but also receiving

00:07:09 --> 00:07:15
and parsing and sending to another inbox

00:07:12 --> 00:07:19
that is also powered by agents that's

00:07:14 --> 00:07:23
parsing, taking action and sending. So

00:07:18 --> 00:07:26
the more content focused these emails

00:07:22 --> 00:07:28
are, the less markup, the fact that if

00:07:25 --> 00:07:30
they have like a plain text version of

00:07:27 --> 00:07:32
it, I think this is more important than

00:07:29 --> 00:07:35
ever. Yeah, that is so interesting. I've

00:07:31 --> 00:07:38
been thinking about generating

00:07:34 --> 00:07:41
applications, generating even like a CLI

00:07:37 --> 00:07:43
tool. Like I'm a huge fan of cursor, so

00:07:40 --> 00:07:46
I use it every single day. At the same

00:07:42 --> 00:07:48
time, I keep wondering what does it look

00:07:45 --> 00:07:51
like if I can incorporate other longtail

00:07:47 --> 00:07:52
toolings I already use as a consumer or

00:07:50 --> 00:07:54
to generate other interesting

00:07:51 --> 00:07:56
experiences. What's your view here in

00:07:54 --> 00:07:58
when it comes to like consumers or

00:07:55 --> 00:08:01
consumers generating like net new

00:07:57 --> 00:08:04
contents using AI? I think my view

00:08:00 --> 00:08:07
changed drastically two months ago when

00:08:03 --> 00:08:10
I was answering users who are signing up

00:08:06 --> 00:08:12
to resent and I always asked them like

00:08:09 --> 00:08:15
oh like where'd you come from? what are

00:08:11 --> 00:08:16
you doing? And this one day like people

00:08:14 --> 00:08:18
were just saying like, "Oh, I came from

00:08:15 --> 00:08:21
lovable. I came from Bolts. I came from

00:08:17 --> 00:08:23
Vzero. Chad GPT recommended you. Claude

00:08:20 --> 00:08:25
recommended you." So I saw that

00:08:22 --> 00:08:27
happening like more and more every

00:08:24 --> 00:08:29
single day. And it was just so clear

00:08:26 --> 00:08:32
that you know there's a new world

00:08:28 --> 00:08:36
happening in front of us. And these

00:08:31 --> 00:08:38
proumer apps, those those text to apps,

00:08:35 --> 00:08:40
uh, applications, they they're very

00:08:37 --> 00:08:42
interesting because they focus on this

00:08:39 --> 00:08:45
one vertical like, oh, they help this

00:08:41 --> 00:08:47
type of user built this type of website,

00:08:44 --> 00:08:49
for example. I think we're going to see

00:08:46 --> 00:08:50
that across the board for every single

00:08:48 --> 00:08:52
industry. There's going to be one of

00:08:49 --> 00:08:54
those. The output might be a little bit

00:08:51 --> 00:08:56
different. Uh, but you're always going

00:08:53 --> 00:08:58
to need something that is tailored to

00:08:55 --> 00:09:00
that industry. So when I think about

00:08:58 --> 00:09:04
hese apps, you you almost see the same

00:09:00 --> 00:09:06
UI. You have like chat on the left, the

00:09:03 --> 00:09:08
preview on the right, but what really

00:09:05 --> 00:09:11
matters is what's the the the thing on

00:09:07 --> 00:09:14
the top right corner like that button,

00:09:10 --> 00:09:16
the the call to action. And for Bolt

00:09:13 --> 00:09:19
Lovable Vero, it's publishing. It's

00:09:16 --> 00:09:21
going live with the website. That's the

00:09:18 --> 00:09:24
aha moment. It's not generating the code

00:09:20 --> 00:09:27
or building the to-do app. It's actually

00:09:23 --> 00:09:29
putting it live. And I think uh you know

00:09:26 --> 00:09:32
there's going to be apps for each one

00:09:28 --> 00:09:35
and that that's the the main part of

00:09:31 --> 00:09:37
each one. What's a new call to action if

00:09:34 --> 00:09:38
we think about the email world? I guess

00:09:36 --> 00:09:41
like when I think about email, I'll

00:09:37 --> 00:09:42
think about I'm either on the receiving

00:09:40 --> 00:09:45
end or on the sending end. On the

00:09:42 --> 00:09:46
sending end, if I'm a non-technical

00:09:44 --> 00:09:48
user, I want to make sure that things

00:09:45 --> 00:09:50
are, you know, structured correctly,

00:09:47 --> 00:09:52
sent to the right, you know, uh set of

00:09:49 --> 00:09:54
people and I want to make sure they open

00:09:51 --> 00:09:55
the email. If I'm a receiving end, I

00:09:53 --> 00:09:58
want to make sure that I get the

00:09:54 --> 00:10:01
information I want quickly or this is a

00:09:57 --> 00:10:03
joy to read. Like I guess like in the AI

00:10:00 --> 00:10:05
world, how would you think about it?

00:10:02 --> 00:10:07
Would does it change? Is it like the

00:10:04 --> 00:10:09
same set of abstractions or kind of

00:10:06 --> 00:10:12
playing with just how makes it more

00:10:08 --> 00:10:14
fficient? The challenge is always like

00:10:11 --> 00:10:16
sending the right message to the right

00:10:13 --> 00:10:19
person at the right time. So

00:10:16 --> 00:10:23
customization is more important than

00:10:18 --> 00:10:25
ever. you see all these AI SDR tools and

00:10:22 --> 00:10:28
you know it's great that we're seeing a

00:10:24 --> 00:10:30
revolution there but just customizing

00:10:27 --> 00:10:32
based on your last LinkedIn message it's

00:10:29 --> 00:10:33
not going to be enough when you're

00:10:31 --> 00:10:36
sending email you have all these

00:10:32 --> 00:10:39
different challenges around rendering uh

00:10:35 --> 00:10:42
so for an email to render the same on

00:10:38 --> 00:10:45
Outlook and Gmail and Yahoo mail you

00:10:41 --> 00:10:47
still have a lot of challenges so that's

00:10:44 --> 00:10:49
one part that needs to be figured out

00:10:46 --> 00:10:52
and then the other part on the receiver

00:10:48 --> 00:10:55
eceiving end is like, yeah, do I really

00:10:51 --> 00:10:56
care about this? And if I do, is this

00:10:54 --> 00:10:59
email on the primary box and not the

00:10:56 --> 00:11:01
spam folder? Yeah. Right. Yeah. So,

00:10:58 --> 00:11:04
there's a lot of challenges on both

00:11:00 --> 00:11:06
sides. Yeah. And then there are so many

00:11:03 --> 00:11:09
interesting experiences one can build

00:11:05 --> 00:11:12
with email whether it's from a developer

00:11:08 --> 00:11:14
or a consumer. Uh so as example like my

00:11:11 --> 00:11:17
husband and I we built this app that

00:11:13 --> 00:11:20
sends emails to us and texts us when our

00:11:16 --> 00:11:21
cat jumps on the kitchen counter. Uh and

00:11:19 --> 00:11:23
then it was like a lot of it there was

00:11:20 --> 00:11:25
not much code to be written but it just

00:11:22 --> 00:11:28
a lot of joy to build because everyone

00:11:24 --> 00:11:32
eds to be notified of something. Yeah.

00:11:27 --> 00:11:35
And I guess like in this example uh from

00:11:31 --> 00:11:36
all the text to app kind of side of

00:11:34 --> 00:11:38
applications, what kind of phone

00:11:36 --> 00:11:41
xperiences can you imagine that we can

00:11:37 --> 00:11:43
better empower consumers and consumers

00:11:40 --> 00:11:45
to do that's better incorporated with

00:11:42 --> 00:11:48
emails? What would they be able to do

00:11:44 --> 00:11:49
that they may have discovered or what

00:11:47 --> 00:11:52
have can they do that they haven't

00:11:48 --> 00:11:54
discovered? So in our case you know we

00:11:51 --> 00:11:57
started this open source project called

00:11:53 --> 00:11:59
react email two years ago and that

00:11:56 --> 00:12:01
project the whole vision around it was

00:11:58 --> 00:12:03
you know what we need to figure out a

00:12:00 --> 00:12:05
way to modernize the way emails are

00:12:02 --> 00:12:08
built. So it was all about like how can

00:12:04 --> 00:12:11
we bring typescript and tend and all

00:12:07 --> 00:12:14
these modern technologies react let's

00:12:10 --> 00:12:16
bring all that together to you know this

00:12:13 --> 00:12:18
industry that feels like it's not moving

00:12:15 --> 00:12:20
forward or not innovating as much. So we

00:12:17 --> 00:12:22
did that and it was great. A lot of

00:12:19 --> 00:12:25
people using that every single day. But

00:12:21 --> 00:12:27
now that we have LLMs, there's a new

00:12:24 --> 00:12:31
unlock. Uh so this process that used to

00:12:26 --> 00:12:34
take days now takes hours or minutes.

00:12:30 --> 00:12:36
But with LLMs, it can take seconds,

00:12:33 --> 00:12:39
right? And it can enable not only

00:12:35 --> 00:12:41
developers that needed how to code, but

00:12:38 --> 00:12:44
hese folks that can be just like I'm a

00:12:40 --> 00:12:46
marketer, I'm a designer, I'm a product

00:12:43 --> 00:12:49
manager, and I need to send an email.

00:12:46 --> 00:12:52
So, how can I do that? So, we built this

00:12:48 --> 00:12:55
thing called new email that really helps

00:12:51 --> 00:12:58
like you go from zero from like an idea

00:12:54 --> 00:13:00
to an email template in seconds, right?

00:12:57 --> 00:13:03
I just see that happening across the

00:12:59 --> 00:13:06
board. So, whatever the the industry is,

00:13:02 --> 00:13:09
I think they will have a variation of

00:13:05 --> 00:13:11
that in a way. That's so interesting. in

00:13:08 --> 00:13:13
a way like what would be a great way for

00:13:10 --> 00:13:15
say if I'm a marketer or designer I want

00:13:12 --> 00:13:17
o send an email like what's the best

00:13:14 --> 00:13:20
way to leverage existing tools like new

00:13:16 --> 00:13:22
email or others to kind of send high

00:13:19 --> 00:13:24
quality emails I remember this

00:13:21 --> 00:13:27
conversation I had with a friend of mine

00:13:23 --> 00:13:29
uh this is a designer that works at Uber

00:13:26 --> 00:13:32
and he was telling me how like for the

00:13:28 --> 00:13:34
past two weeks he didn't open Figma he

00:13:31 --> 00:13:38
was just building all these prototypes

00:13:34 --> 00:13:41
using cursor using vzero using uh these

00:13:37 --> 00:13:44
tools that are now available for folks.

00:13:40 --> 00:13:47
And for me, that's incredible. Like

00:13:43 --> 00:13:49
that's so amazing because it redefineses

00:13:46 --> 00:13:52
what a developer is. I think that's

00:13:48 --> 00:13:56
exactly the same for email. Uh before

00:13:51 --> 00:13:58
you needed to maybe hire an agency and

00:13:55 --> 00:14:00
you would build this beautiful email

00:13:57 --> 00:14:02
template and then you hand off the Figma

00:13:59 --> 00:14:06
file to them and then a week later they

00:14:01 --> 00:14:08
come with this super ugly markup. The

00:14:05 --> 00:14:10
mail looks good, but you know behind

00:14:07 --> 00:14:12
the scenes like they had to do a lot of

00:14:09 --> 00:14:15
magic to make it happen. We can give

00:14:11 --> 00:14:17
that to LLM's now and empower the actual

00:14:14 --> 00:14:20
creator, the person who's thinking about

00:14:16 --> 00:14:23
he copy, thinking about the the angle

00:14:19 --> 00:14:26
because as a builder yourself, you know

00:14:22 --> 00:14:28
that when we're building things like the

00:14:25 --> 00:14:31
first, you know, version is not always

00:14:27 --> 00:14:33
the best. It's just the beginning. So,

00:14:30 --> 00:14:35
you see that thing working and you're

00:14:32 --> 00:14:39
like, "Okay, now that's working. what

00:14:34 --> 00:14:41
else can I do? And that back and forth,

00:14:38 --> 00:14:45
you know, between agencies and and

00:14:40 --> 00:14:47
non-technical users, you know, it just

00:14:44 --> 00:14:49
um it's just like wasted time that it

00:14:46 --> 00:14:51
could be just focused on like that

00:14:48 --> 00:14:52
creative person that's just keep

00:14:50 --> 00:14:54
iterating on that until they have

00:14:52 --> 00:14:56
something they like and then they can

00:14:53 --> 00:14:58
just send, you know, I love that. It

00:14:55 --> 00:15:01
really shortens the creativ creative

00:14:57 --> 00:15:03
loop. Um yes, it it just reminds me

00:15:00 --> 00:15:06
that, you know, back in the days, uh

00:15:02 --> 00:15:08
obviously like for oil painting, people

00:15:05 --> 00:15:10
like to throw some paint on the canvas

00:15:07 --> 00:15:12
before they get started because a blank

00:15:09 --> 00:15:13
canvas is super scary. They're like, I

00:15:11 --> 00:15:15
don't know what to draw. Yeah. So, a lot

00:15:12 --> 00:15:18
of painters what they will actually do

00:15:14 --> 00:15:20
is to throw gray colored paint on the

00:15:17 --> 00:15:22
canvas and then they will use like a

00:15:19 --> 00:15:23
little bit of cloth to like spread it

00:15:21 --> 00:15:26
and then they were like, "Okay, now

00:15:22 --> 00:15:27
there's a bit of color. I'm like less uh

00:15:25 --> 00:15:30
scared to actually make an action." This

00:15:26 --> 00:15:32
actually feels a lot about that. Yeah.

00:15:29 --> 00:15:34
You know what's funny? Yes. This is

00:15:31 --> 00:15:36
omething that happened yesterday. So,

00:15:33 --> 00:15:40
we gave this product the the new email

00:15:36 --> 00:15:42
product to uh to a couple of friends and

00:15:39 --> 00:15:44
then one friend was like, "You know

00:15:41 --> 00:15:47
hat? I'm trying to build something very

00:15:43 --> 00:15:49
creative, you know, but it takes me like

00:15:46 --> 00:15:51
a couple of prompts until I get

00:15:48 --> 00:15:53
something that feels different." Like

00:15:50 --> 00:15:54
the beginning is always like it feels

00:15:52 --> 00:15:56
the same like this tool is always

00:15:53 --> 00:15:58
generating the same kind of emails,

00:15:55 --> 00:16:02
right? And that's because on the system

00:15:57 --> 00:16:05
prompt, we told, you know, the LLM to

00:16:01 --> 00:16:08
build Apple like emails with curved

00:16:04 --> 00:16:12
borders and black and white vibes

00:16:07 --> 00:16:14
versus, you know, go crazy. Um, and we

00:16:11 --> 00:16:16
thought we were doing a favor to include

00:16:13 --> 00:16:20
that because then the first version is

00:16:15 --> 00:16:22
good, but that also it's a constraint on

00:16:19 --> 00:16:26
the creative person that's trying to

00:16:21 --> 00:16:29
build something way more creative, you

00:16:25 --> 00:16:31
know? So it's fascinating like yes you

00:16:28 --> 00:16:34
need the the first version to to be

00:16:30 --> 00:16:35
there and then you keep iterating but if

00:16:33 --> 00:16:37
it takes too long for you to iterate

00:16:34 --> 00:16:39
that's also not good right uh there's a

00:16:36 --> 00:16:41
balance there that's so interesting it

00:16:38 --> 00:16:43
really reminds me of in the image

00:16:40 --> 00:16:45
neration world there are different

00:16:42 --> 00:16:47
loras train a Laura on specific style

00:16:44 --> 00:16:50
say impressionism

00:16:46 --> 00:16:52
and then the end user can select any one

00:16:49 --> 00:16:56
of these loras and then you know create

00:16:51 --> 00:16:58
the first generation of a u image that's

00:16:55 --> 00:17:00
like uh like these kind of styles they

00:16:57 --> 00:17:02
predefined and then they can iterate

00:16:59 --> 00:17:05
from there and then the rest of it is

00:17:01 --> 00:17:07
just editing process you need to um have

00:17:04 --> 00:17:09
a lasso tool somewhere like there's AI

00:17:06 --> 00:17:11
versions of all of these now right and

00:17:08 --> 00:17:12
then the question is like how can you

00:17:10 --> 00:17:15
morph that into something you like kind

00:17:12 --> 00:17:18
of like a sculpture so yeah this is like

00:17:14 --> 00:17:20
so interesting like email templates as

00:17:17 --> 00:17:22
very artistic expression because before

00:17:19 --> 00:17:24
it was so hard for people to do this

00:17:21 --> 00:17:26
themselves last time I looked at email

00:17:23 --> 00:17:28
templates It's it was all vanilla HTML

00:17:26 --> 00:17:31
and I just remember thinking this can't

00:17:27 --> 00:17:33
be because this is just 2025 now.

00:17:30 --> 00:17:34
Remember when I first got into the

00:17:32 --> 00:17:36
industry it was like that it just hasn't

00:17:33 --> 00:17:38
evolved much. So it's really great that

00:17:35 --> 00:17:40
you guys are you know creating a new

00:17:37 --> 00:17:42
experience a different level of

00:17:39 --> 00:17:45
abstraction too for a new audience.

00:17:41 --> 00:17:48
Yeah. You think about how much the web

00:17:44 --> 00:17:51
evolved as a platform and it's you know

00:17:47 --> 00:17:54
the problems that we used to have 10 12

00:17:50 --> 00:17:56
years ago around browsers rendering

00:17:53 --> 00:18:00
different websites you know that's gone

00:17:55 --> 00:18:03
like that's Ajax you know Ajax and like

00:17:59 --> 00:18:06
i6 would render different than opera and

00:18:02 --> 00:18:08
firefox that's solved but with emo is

00:18:05 --> 00:18:11
till a big pain outlook still doesn't

00:18:07 --> 00:18:14
render the same as superhuman as notion

00:18:10 --> 00:18:16
mail like you have new email clients,

00:18:13 --> 00:18:18
you know, being created right now,

00:18:15 --> 00:18:20
right? So, it's still an open problem.

00:18:18 --> 00:18:24
Like people are still trying to figure

00:18:19 --> 00:18:26
this out. Yeah. Speaking of generating

00:18:23 --> 00:18:30
things, do you see the generation

00:18:26 --> 00:18:31
experience as a agentic workflow? How do

00:18:29 --> 00:18:33
you feel that? Do you think you're

00:18:30 --> 00:18:36
building an agent? In many ways, I think

00:18:33 --> 00:18:38
yes. And then in other ways, I'm like,

00:18:35 --> 00:18:41
is this really an agent? What's your

00:18:37 --> 00:18:43
definition of agent? Yeah, I think it's

00:18:40 --> 00:18:45
a Yeah, and I don't know if it's the

00:18:42 --> 00:18:49
right one. There's no right definition.

00:18:44 --> 00:18:51
No one knows exactly, but I think it's

00:18:48 --> 00:18:54
just like a a set of tools that are

00:18:50 --> 00:18:57
being executed and they're trying to

00:18:53 --> 00:19:00
accomplish a specific task, right? So,

00:18:56 --> 00:19:03
it might take a few steps to to get to

00:18:59 --> 00:19:05
that final result, but it's still like

00:19:02 --> 00:19:08
very focused on doing one thing. So I

00:19:04 --> 00:19:10
think like in the case of new email for

00:19:07 --> 00:19:12
example, we have one agent to build the

00:19:09 --> 00:19:14
mail template and then there's another

00:19:11 --> 00:19:17
one to actually send it or schedule it.

00:19:13 --> 00:19:19
Uh so you can have like multiple agents

00:19:16 --> 00:19:22
running at the same time, right? Um but

00:19:18 --> 00:19:25
hey are still very focused on doing one

00:19:21 --> 00:19:26
task just like you know in a company you

00:19:24 --> 00:19:28
would have one person that does

00:19:25 --> 00:19:31
marketing, one person that does design

00:19:28 --> 00:19:34
and you're like assigning tasks to to

00:19:30 --> 00:19:37
these uh people. What is your

00:19:33 --> 00:19:39
definition? So my definition of agent is

00:19:36 --> 00:19:42
kind of like very similar to yours. I

00:19:38 --> 00:19:44
think of it as a multi-step LLM

00:19:41 --> 00:19:46
execution process. It's almost like a

00:19:44 --> 00:19:48
process in the systems level. The

00:19:45 --> 00:19:50
difference is that you have LM in the

00:19:47 --> 00:19:52
middle to make the decisions and then

00:19:49 --> 00:19:54
the rest of it is very much technical

00:19:51 --> 00:19:56
detail. On the one spectrum, you can

00:19:53 --> 00:19:57
have a one-step generation process. You

00:19:55 --> 00:20:00
could call it a agent because that's

00:19:56 --> 00:20:02
what co-pilots are. On the other

00:19:59 --> 00:20:04
spectrum, you could call AGI an agent.

00:20:01 --> 00:20:05
like that's like agent that reads and

00:20:03 --> 00:20:08
writes everything for you. Maybe manage

00:20:04 --> 00:20:11
your bank account one day and email.

00:20:07 --> 00:20:13
Yep. Um and off and so on and so forth.

00:20:10 --> 00:20:15
So for me, I've been just, you know, as

00:20:12 --> 00:20:18
a fellow developer kind of developing

00:20:14 --> 00:20:21
the space. There's so many different

00:20:17 --> 00:20:22
ways to build agents. Um you know, if

00:20:20 --> 00:20:24
you're a platform, you're thinking about

00:20:22 --> 00:20:28
how can I make it easy for agents to

00:20:23 --> 00:20:30
visit us. Uh how can I make it easy for

00:20:27 --> 00:20:32
uh other people to build tools around

00:20:29 --> 00:20:34
it? And then if you're like a developer

00:20:32 --> 00:20:37
trying out certain tools to kind of work

00:20:33 --> 00:20:38
with one of the platforms, the question

00:20:36 --> 00:20:40
becomes like how do I easily integrate

00:20:37 --> 00:20:43
the long tails? I don't want to rewrite

00:20:39 --> 00:20:46
all the API calls all over again. I

00:20:42 --> 00:20:48
guess what's your view like what's your

00:20:45 --> 00:20:50
advice to developers who want to start

00:20:47 --> 00:20:52
building agents like yourself? Um is

00:20:49 --> 00:20:54
there a standard today? Like how do you

00:20:51 --> 00:20:57
think about this? Yeah, I think the

00:20:53 --> 00:20:59
merging standard is is definitely MCP.

00:20:56 --> 00:21:02
there's still like the question of like

00:20:58 --> 00:21:05
is MCP going to be adopted by other AI

00:21:01 --> 00:21:08
models and uh if that's the case that

00:21:04 --> 00:21:10
will be an even bigger unlock then it

00:21:07 --> 00:21:13
already is you know MCP is on fire now

00:21:09 --> 00:21:17
everybody's talking about it imagine if

00:21:12 --> 00:21:19
OpenAI adopts it then it's it's over you

00:21:16 --> 00:21:22
know like that will be the de facto uh

00:21:18 --> 00:21:23
protocol but there's a lot still to be

00:21:21 --> 00:21:27
xplored in terms of the different

00:21:22 --> 00:21:29
interfaces so as a API provider myself

00:21:26 --> 00:21:32
like I want to make sure we have an MCP

00:21:28 --> 00:21:35
for resend so other agents can use that

00:21:31 --> 00:21:38
and and send emails. They can look at

00:21:34 --> 00:21:41
heir contact lists and take action, add

00:21:37 --> 00:21:43
people to the contact list, remove um

00:21:40 --> 00:21:46
you know see the performance of the

00:21:42 --> 00:21:48
mails they're sending and based on that

00:21:45 --> 00:21:50
hey can then decide like oh this email

00:21:47 --> 00:21:53
is being clicked more than this other

00:21:49 --> 00:21:55
one so let me optimize for that. So

00:21:52 --> 00:21:57
there's definitely things to explore

00:21:54 --> 00:22:00
around that. Uh but it's an ever

00:21:56 --> 00:22:02
evolving ecosystem, right? There's no

00:21:59 --> 00:22:05
right answer yet. Yeah. And you see some

00:22:02 --> 00:22:09
like some people trying to build

00:22:04 --> 00:22:11
galleries of MCP servers and uh trying

00:22:08 --> 00:22:14
to like create the marketplace for MCP.

00:22:10 --> 00:22:17
Yep. That's also interesting like the

00:22:13 --> 00:22:19
same way that when APIs came out, people

00:22:16 --> 00:22:21
were like rapid API. They were like oh

00:22:18 --> 00:22:23
let's build a marketplace of APIs. I

00:22:20 --> 00:22:25
think it's good to a certain extent. Uh,

00:22:22 --> 00:22:27
at the end of the day, I have a problem.

00:22:24 --> 00:22:29
I'm going to find whatever the solution

00:22:26 --> 00:22:31
is. So, if I'm thinking about billing,

00:22:28 --> 00:22:33
I'm going to go to the Stripe API. If I

00:22:30 --> 00:22:38
think about email, go to the recent

00:22:32 --> 00:22:40
email API. But the MCP format, it's

00:22:37 --> 00:22:42
extremely interesting. But we have to

00:22:39 --> 00:22:44
see what are the other interfaces that

00:22:41 --> 00:22:47
his is going to expand to like just

00:22:43 --> 00:22:49
cursor and cloud desktop is not enough.

00:22:46 --> 00:22:51
And that's what we have today, right?

00:22:48 --> 00:22:55
And Windsurf like these other editors.

00:22:50 --> 00:22:57
But what else? Uh, and I think if we get

00:22:54 --> 00:23:00
o the consumer layer, then it can be

00:22:56 --> 00:23:03
very very interesting. Yeah. So, there's

00:22:59 --> 00:23:05
obviously MCP servers.

00:23:02 --> 00:23:08
It's kind of a philosophical question

00:23:04 --> 00:23:09
ow. Are you a MCP server? Are you a MCP

00:23:07 --> 00:23:11
client? Because you can be both. You

00:23:08 --> 00:23:13
don't have to pick, right? What's your

00:23:10 --> 00:23:18
view on that? Like, do you think you'll

00:23:12 --> 00:23:20
ike is new email or recent both or one

00:23:17 --> 00:23:24
or Yeah. Yeah. I think we will be both.

00:23:19 --> 00:23:26
I can definitely like see a world where

00:23:23 --> 00:23:29
we are the MCP client where you can come

00:23:25 --> 00:23:33
in and say, you know what, get my the

00:23:28 --> 00:23:35
top 10 linear feature requests and then

00:23:32 --> 00:23:38
draft an email based on that and then

00:23:34 --> 00:23:41
send. So you have like three different

00:23:37 --> 00:23:44
services running to execute that task or

00:23:40 --> 00:23:46
go to notion like like we are running

00:23:43 --> 00:23:49
all of our all hands meetings on uh

00:23:46 --> 00:23:52
resend now. So, it's like one email that

00:23:48 --> 00:23:55
we all write in a multiplayer uh

00:23:52 --> 00:23:57
approach and then by the end of the

00:23:54 --> 00:24:00
call, we just send the email. So, it's

00:23:56 --> 00:24:02
just super fun. That's amazing. And

00:23:59 --> 00:24:04
yeah, like I see that kind of like

00:24:01 --> 00:24:07
workflow where I'm like, "Oh yeah, just

00:24:03 --> 00:24:09
go to linear, grab the tickets we closed

00:24:06 --> 00:24:11
last week, and then let's use that as a

00:24:08 --> 00:24:14
reporting mechanism or from notion or

00:24:10 --> 00:24:16
from whatever." So, yeah, I think we're

00:24:13 --> 00:24:19
going to be both. So most of the use

00:24:15 --> 00:24:22
cases I've actually seen MCP today is

00:24:18 --> 00:24:25
very local first because of the nature

00:24:21 --> 00:24:27
of how the MCP clients are implemented.

00:24:24 --> 00:24:29
First SSE is kind of a pain to

00:24:26 --> 00:24:32
implement. So most of people kind of

00:24:28 --> 00:24:35
default to implement MCP as a command.

00:24:31 --> 00:24:37
So as a client the client basically just

00:24:34 --> 00:24:39
execute that command locally and then

00:24:36 --> 00:24:42
that process can call into other

00:24:38 --> 00:24:46
thirdparty APIs. What do you think is

00:24:41 --> 00:24:47
missing to make MCP more of a ecosystem?

00:24:45 --> 00:24:50
I mean, obviously now it's ecosystem,

00:24:46 --> 00:24:52
but like what's missing from pushing it

00:24:49 --> 00:24:54
forward even more? I think it's adoption

00:24:52 --> 00:24:56
by the other models. I think that's the

00:24:53 --> 00:24:59
biggest one. There's so many different

00:24:55 --> 00:25:02
frontiers that MCP is getting to now

00:24:58 --> 00:25:05
that I I love. For example, access to

00:25:01 --> 00:25:08
your file system, you know, to Apple

00:25:04 --> 00:25:10
APIs that are running on your desktop.

00:25:07 --> 00:25:13
I've just seen like the the latest

00:25:09 --> 00:25:15
release from Raycast where you're

00:25:12 --> 00:25:17
building all these AI extensions and

00:25:14 --> 00:25:19
you're integrating all these different

00:25:16 --> 00:25:22
workflows that run on your desktop

00:25:18 --> 00:25:24
layer, not in the browser.

00:25:21 --> 00:25:26
As we keep like exploring that, I think

00:25:23 --> 00:25:28
that's fascinating because we keep going

00:25:25 --> 00:25:30
down, you know, these different

00:25:27 --> 00:25:32
abstraction layers and having more

00:25:29 --> 00:25:34
access to do more things. So go to Apple

00:25:31 --> 00:25:36
Notes, grab my notes and then do this

00:25:33 --> 00:25:39
other thing. I think that's fascinating

00:25:35 --> 00:25:41
and I hope yeah people continue to adopt

00:25:38 --> 00:25:44
it. What's your prediction on the kind

00:25:40 --> 00:25:46
of MCP workflows that will take off?

00:25:43 --> 00:25:50
Obviously there's a very productivity

00:25:45 --> 00:25:53
focused like getting notion uh notes put

00:25:49 --> 00:25:55
it in the email send the email or send

00:25:52 --> 00:25:58
emails from cursor it's like everyday

00:25:54 --> 00:26:01
like kind of workflow. Do you think

00:25:57 --> 00:26:04
there are runtime workflows? By that I

00:26:00 --> 00:26:06
mean like when surface is running and CP

00:26:03 --> 00:26:08
server will step in and do something. I

00:26:05 --> 00:26:10
actually haven't seen that happen uh in

00:26:07 --> 00:26:13
production. But just curious what your

00:26:09 --> 00:26:15
thoughts are there. I think all of the

00:26:12 --> 00:26:18
system of records type of applications

00:26:14 --> 00:26:21
they will be front and center uh at this

00:26:17 --> 00:26:23
you know new revolution like because all

00:26:20 --> 00:26:26
of your issues are already on linear all

00:26:22 --> 00:26:28
of your emails are already on Gmail. all

00:26:25 --> 00:26:31
of your notes are already on notion or

00:26:27 --> 00:26:33
Apple notes. So they're going to be in a

00:26:30 --> 00:26:36
very good position to then you know

00:26:32 --> 00:26:38
based on that information do this other

00:26:35 --> 00:26:42
task. Interesting. So there's definitely

00:26:37 --> 00:26:44
a data gravity I think so to it. Yes.

00:26:41 --> 00:26:46
That's so interesting. Do you see most

00:26:43 --> 00:26:50
of the MCP related like clients or

00:26:45 --> 00:26:53
server run their own databases?

00:26:49 --> 00:26:56
Wow. That That's a good one because you

00:26:52 --> 00:26:58
need to store state, right? Exactly.

00:26:55 --> 00:27:00
Yeah. Yeah. I haven't thought about

00:26:57 --> 00:27:02
hat, but I think that would be a a

00:26:59 --> 00:27:04
pretty interesting approach. I think

00:27:01 --> 00:27:06
when you look at uh even we're talking

00:27:03 --> 00:27:09
about this text to apps applications,

00:27:05 --> 00:27:11
right? So you have lovable vzero and

00:27:08 --> 00:27:14
these apps they're using different

00:27:10 --> 00:27:17
databases. So for lovable and bold to

00:27:13 --> 00:27:21
superbase, for rapid and

00:27:16 --> 00:27:23
create.xyz, it's neon. And I think the

00:27:20 --> 00:27:25
race w with those is going to be around

00:27:22 --> 00:27:28
like who can reduce friction the most,

00:27:24 --> 00:27:32
who can spin up a new Postgress database

00:27:27 --> 00:27:35
faster. Um so I think in a world where

00:27:31 --> 00:27:37
MCP is at the front and center then you

00:27:34 --> 00:27:39
know yeah like how can we have these

00:27:36 --> 00:27:43
databases there's you know they spin up

00:27:38 --> 00:27:45
so quickly we can save state and then uh

00:27:42 --> 00:27:48
maybe we'll need a new kind of database.

00:27:44 --> 00:27:50
Yeah that is very true. Obviously, I've

00:27:47 --> 00:27:52
been playing it's recent. It's always

00:27:49 --> 00:27:55
recommended by agents at LMS because the

00:27:52 --> 00:27:57
distribution of the training data. I

00:27:54 --> 00:27:59
guess it's there's just so much of that.

00:27:56 --> 00:28:00
Every time I ask like chat PT like, oh,

00:27:58 --> 00:28:02
I want to draft this email and it just

00:28:00 --> 00:28:05
gave me a React email template right

00:28:01 --> 00:28:07
away. I'm like, how did you know this?

00:28:04 --> 00:28:09
Where did it come from? When you think

00:28:06 --> 00:28:11
about more creative use cases developers

00:28:08 --> 00:28:14
can do either with agents, without

00:28:10 --> 00:28:18
agents or some other LM driven processes

00:28:13 --> 00:28:21
with resend, what comes to mind? You

00:28:17 --> 00:28:24
know what, there's just a lot of systems

00:28:20 --> 00:28:26
that developers rely every single day uh

00:28:23 --> 00:28:28
like GitHub, you know, they are storing

00:28:25 --> 00:28:30
their pull requests in one place, but

00:28:27 --> 00:28:32
hey also have branches that are running

00:28:29 --> 00:28:36
locally on their machines that they

00:28:31 --> 00:28:39
haven't pushed to a remote system yet.

00:28:35 --> 00:28:42
the combination of desktop and web. I

00:28:38 --> 00:28:44
think that's beautiful. There's so many

00:28:41 --> 00:28:47
fascinating uh angles that you you could

00:28:43 --> 00:28:51
o. I saw a demo last week where someone

00:28:46 --> 00:28:53
was using like a raycast extension uh

00:28:50 --> 00:28:55
that was not powered by MCP but very

00:28:52 --> 00:28:57
similar in a way when you look at the

00:28:54 --> 00:29:01
implementation and it was integrated

00:28:56 --> 00:29:04
with Bob like an HR system. So it would

00:29:00 --> 00:29:07
go to this HR tool and you would only

00:29:03 --> 00:29:10
ask like oh yeah like who is celebrating

00:29:06 --> 00:29:13
a birthday this month. So based on those

00:29:09 --> 00:29:15
four people like let's draft a message

00:29:12 --> 00:29:17
that's unique about each one of them.

00:29:14 --> 00:29:20
Wow. Or look at the the different

00:29:16 --> 00:29:22
interests uh from these people based on

00:29:19 --> 00:29:26
their lack messages on top of you know

00:29:21 --> 00:29:28
this HR data. Yeah. So you can go like

00:29:25 --> 00:29:31
you know there's so many interesting use

00:29:27 --> 00:29:33
cases where you can just pipe data from

00:29:30 --> 00:29:35
one place to the other and then you can

00:29:32 --> 00:29:37
get something that's extremely tailored

00:29:34 --> 00:29:40
on the other end. I guess in the past

00:29:36 --> 00:29:44
few weeks to past couple months what is

00:29:39 --> 00:29:47
the craziest use case you have seen that

00:29:43 --> 00:29:49
developers or AI developers use recent

00:29:46 --> 00:29:53
for? Yeah, there's some really

00:29:48 --> 00:29:56
interesting AI generated newsletters uh

00:29:52 --> 00:29:59
that are being triggered for recent. Uh

00:29:55 --> 00:30:01
I I saw one last week where every single

00:29:58 --> 00:30:03
day they generate a new one and they

00:30:00 --> 00:30:04
send just like the content is so

00:30:02 --> 00:30:06
interesting because you you can fetch

00:30:03 --> 00:30:09
from so many different places. you get

00:30:05 --> 00:30:10
like the latest news from X and the

00:30:08 --> 00:30:12
latest news from like different

00:30:09 --> 00:30:15
publications and then you you put all

00:30:11 --> 00:30:17
together and then here you have like a

00:30:14 --> 00:30:20
newsletter that's tailored for you

00:30:16 --> 00:30:24
versus you know like this big poll that

00:30:20 --> 00:30:26
you're trying to almost like uh please

00:30:23 --> 00:30:29
veryone and you ended up not pleasing

00:30:25 --> 00:30:33
like anyone. So there's something about

00:30:28 --> 00:30:35
hat that I really love. like yeah like

00:30:32 --> 00:30:38
there are people with thousands of

00:30:34 --> 00:30:42
domains in one recent account and

00:30:38 --> 00:30:44
they're spinning up new domains uh as

00:30:41 --> 00:30:47
new applications are built. So there's

00:30:43 --> 00:30:48
just very different spinning up new

00:30:46 --> 00:30:51
domains. Yeah. Can you do that on

00:30:47 --> 00:30:54
recent? You can. Yeah. Programmatically.

00:30:50 --> 00:30:56
Yeah. That's amazing.

00:30:53 --> 00:30:58
I think pre-warming domains or getting

00:30:55 --> 00:31:00
new domains. Yeah. So for example,

00:30:57 --> 00:31:02
Payload CMS

00:30:59 --> 00:31:06
every time you sign up for one of their

00:31:01 --> 00:31:08
cloud uh product. So they have like this

00:31:05 --> 00:31:10
it's like a WordPress alternative and

00:31:07 --> 00:31:12
you can just create a cloud version of

00:31:09 --> 00:31:14
it instead of deploying your own server.

00:31:11 --> 00:31:16
Yeah. Every time they provision one of

00:31:13 --> 00:31:19
those they provision a new domain

00:31:15 --> 00:31:21
powered by resent and then email sending

00:31:18 --> 00:31:24
is already done for you like all the

00:31:20 --> 00:31:26
configuration all the SMTP setup the

00:31:23 --> 00:31:28
domain is there already verified. You

00:31:25 --> 00:31:31
don't have to add a DKM or SPF record.

00:31:27 --> 00:31:34
It's all there. So from day one, you

00:31:30 --> 00:31:35
have email sending capabilities. Uh

00:31:33 --> 00:31:38
which is something that traditionally

00:31:34 --> 00:31:40
was very hard to do. I can't wait for

00:31:37 --> 00:31:42
the day when agents can have their own

00:31:39 --> 00:31:45
domain. Like just thinking about how

00:31:41 --> 00:31:46
many agents side projects there will be

00:31:44 --> 00:31:48
that they don't utilize way more than

00:31:45 --> 00:31:51
humans. Maybe they will come up with

00:31:47 --> 00:31:52
like new project ideas and they'll be

00:31:50 --> 00:31:56
like, "Oh, let me see if the domain is

00:31:51 --> 00:31:59
free. Oh yeah, it is. Buy and then

00:31:55 --> 00:32:02
Totally. Uh yeah, as a human developer,

00:31:58 --> 00:32:04
like this is just like something that I

00:32:01 --> 00:32:05
always love doing even though I don't

00:32:03 --> 00:32:07
use I probably spend hundreds of dollars

00:32:04 --> 00:32:10
every year just paying for domains I

00:32:06 --> 00:32:12
don't use. The other day, um a friend of

00:32:09 --> 00:32:16
mine, uh he sent me a text. He was like,

00:32:11 --> 00:32:18
"Did you know LIi is a top level domain?

00:32:15 --> 00:32:21
I didn't know that. It happens to be my

00:32:17 --> 00:32:24
last name." And then Yoko is not a very

00:32:20 --> 00:32:25
common name. So I was able to, you know,

00:32:23 --> 00:32:28
get the domain right away. So now it

00:32:24 --> 00:32:32
redirects to my website or something. I

00:32:27 --> 00:32:36
tried to get the N O which is the Norian

00:32:31 --> 00:32:38
uh TLD. I couldn't. Z.No I couldn't get

00:32:35 --> 00:32:40
but I'm still trying. Was it because

00:32:37 --> 00:32:41
someone took it? Someone took it. Oh, I

00:32:39 --> 00:32:44
see. Interesting. Well, we can write an

00:32:40 --> 00:32:46
agent to get domains. Yeah, just check

00:32:43 --> 00:32:49
every day if the domain is free and then

00:32:45 --> 00:32:50
let me know when it and then just buy.

00:32:48 --> 00:32:53
Yeah.

00:32:49 --> 00:32:56
Do you have advice for developers who

00:32:52 --> 00:32:58
are now navigating this whole AI

00:32:55 --> 00:33:02
landscape who are building either app

00:32:58 --> 00:33:04
for the agents or app using the agents

00:33:01 --> 00:33:07
uh or just you know entering the AI

00:33:03 --> 00:33:09
domain? Uh like how do you how would you

00:33:06 --> 00:33:12
m what would you tell them like they

00:33:08 --> 00:33:14
should focus on what matters the most um

00:33:11 --> 00:33:16
nowadays? I think in my case it's

00:33:13 --> 00:33:19
interesting because I'm both a developer

00:33:15 --> 00:33:21
and a founder and I have like many

00:33:18 --> 00:33:23
different hats that I have to wear every

00:33:20 --> 00:33:26
single day and for the past two years

00:33:22 --> 00:33:28
I've been ignoring AI to a certain

00:33:25 --> 00:33:31
extent like I knew the power I was a

00:33:27 --> 00:33:33
user power user but I was never building

00:33:30 --> 00:33:37
with AI because we didn't have time we

00:33:32 --> 00:33:39
had to like build the company right so I

00:33:36 --> 00:33:41
had to like just one day stop and be

00:33:38 --> 00:33:44
like okay let me look into this thing

00:33:40 --> 00:33:47
and I I think it's a it's around like

00:33:43 --> 00:33:50
changing your tool set in a way like

00:33:46 --> 00:33:53
okay I'm used to VS code I have to

00:33:49 --> 00:33:55
switch to cursor even for a little bit

00:33:52 --> 00:33:57
you know even if it hurts in the

00:33:54 --> 00:33:59
beginning like I remember my extensions

00:33:56 --> 00:34:01
were not ready and I was like I hate

00:33:58 --> 00:34:04
this cursor thing like it it broke my

00:34:00 --> 00:34:07
whole workflow now I can't live without

00:34:03 --> 00:34:10
it same with raycast and the AI on the

00:34:06 --> 00:34:12
desktop level you know and same with so

00:34:09 --> 00:34:14
many other tools so I think It starts

00:34:11 --> 00:34:17
from there like just looking at your

00:34:13 --> 00:34:20
tool chain and thinking how can I add AI

00:34:16 --> 00:34:23
enabled apps. Uh and then the second

00:34:20 --> 00:34:25
part is just like trying to figure out

00:34:22 --> 00:34:28
he use case. Yeah. So I remember a

00:34:24 --> 00:34:30
conversation I had with the stripe team

00:34:27 --> 00:34:32
and they were building the MCP server

00:34:29 --> 00:34:34
and I asked them like how are you

00:34:31 --> 00:34:36
approaching it? Like the stripe API is

00:34:33 --> 00:34:39
o big, there's so many endpoints. Does

00:34:35 --> 00:34:42
the Stripe MCP server give agent access

00:34:38 --> 00:34:44
to to their to accounts? Wow, that's

00:34:41 --> 00:34:47
really powerful. You can create

00:34:43 --> 00:34:49
invoices, payment links. Uh and with

00:34:46 --> 00:34:50
Stripe, there's a lot of different if

00:34:48 --> 00:34:53
you want to create an invoice, you need

00:34:49 --> 00:34:55
a customer uh object, you need a

00:34:52 --> 00:34:58
subscription object. So, there's a lot

00:34:54 --> 00:35:00
of chaining that you have to to do. And

00:34:57 --> 00:35:03
I remember them telling me like don't

00:34:59 --> 00:35:06
start like via the API like just

00:35:02 --> 00:35:09
grabbing your open API spec and

00:35:05 --> 00:35:12
generating an MCP server. No, start from

00:35:08 --> 00:35:14
the use case. What are people actually

00:35:11 --> 00:35:16
doing with your product and then you

00:35:14 --> 00:35:18
build like you don't need full coverage

00:35:16 --> 00:35:22
of your API just the most important

00:35:17 --> 00:35:25
hings. I think about that for like as a

00:35:22 --> 00:35:28
traditional software engineer that

00:35:24 --> 00:35:30
been doing this for the past 15 years

00:35:27 --> 00:35:32
now trying to convert to an AI engineer

00:35:29 --> 00:35:34
in a way right like

00:35:31 --> 00:35:36
I have to be building with those tools

00:35:33 --> 00:35:39
and I have to start from the use case so

00:35:35 --> 00:35:41
what is something I can optimize or you

00:35:38 --> 00:35:44
know make my life a little bit easier

00:35:40 --> 00:35:46
like the app you built for yourself you

00:35:43 --> 00:35:48
know that's fascinating like it's a real

00:35:45 --> 00:35:51
pain or like you you're really curious

00:35:48 --> 00:35:53
about something and that's always the

00:35:50 --> 00:35:55
best when you're really curious about

00:35:52 --> 00:35:58
something. Yeah, I guess that uh led me

00:35:54 --> 00:35:59
to the other question which I I love

00:35:57 --> 00:36:01
asking founders. I know you probably

00:35:58 --> 00:36:02
don't have time to work on side

00:36:00 --> 00:36:05
projects,

00:36:01 --> 00:36:08
but if you did have time, what are the

00:36:04 --> 00:36:10
side projects you wanted to work on?

00:36:07 --> 00:36:13
Wow, I actually do have a lot of side

00:36:09 --> 00:36:17
projects. I love that. I have a theme

00:36:12 --> 00:36:21
called Dracula that I that I build. Uh

00:36:16 --> 00:36:24
and I just like solving problems that

00:36:20 --> 00:36:27
I'm facing every day. Uh so with that

00:36:23 --> 00:36:30
heme was like you know what it I hated

00:36:26 --> 00:36:31
the fact that I had a theme on my code

00:36:29 --> 00:36:34
ditor and a different theme on my

00:36:30 --> 00:36:36
browser and a different theme elsewhere.

00:36:33 --> 00:36:38
I wanted to reduce you know my cognitive

00:36:35 --> 00:36:40
load when I move from different tools.

00:36:37 --> 00:36:44
So let me just build one that works

00:36:39 --> 00:36:47
everywhere. um the same for a reason. It

00:36:43 --> 00:36:51
was just solving my own pain. So yeah,

00:36:46 --> 00:36:53
today I just have a lot of different

00:36:50 --> 00:36:55
pains. For example, I don't like dealing

00:36:52 --> 00:36:59
with personal life things like going to

00:36:54 --> 00:37:01
the DMV and renewing my, you know, like

00:36:58 --> 00:37:04
car registration or whatever or dealing

00:37:00 --> 00:37:06
with insurance. I would love to automate

00:37:03 --> 00:37:08
all of those things. You know, I can't

00:37:05 --> 00:37:10
wait for someone to build a agent for

00:37:07 --> 00:37:12
DMV.

00:37:09 --> 00:37:14
That would be amazing. I will be a

00:37:11 --> 00:37:16
customer like day one. If you're

00:37:13 --> 00:37:18
watching this, please build it and let

00:37:15 --> 00:37:20
us know.

00:37:17 --> 00:37:22
But the Dracula theme is so cool. I

00:37:19 --> 00:37:24
remember when I first met you, I

00:37:21 --> 00:37:27
couldn't believe you were the person who

00:37:23 --> 00:37:29
made the Dracula theme like like when

00:37:26 --> 00:37:31
you open up the it term too like color

00:37:28 --> 00:37:34
theme and it's like one of the top

00:37:30 --> 00:37:36
themes you can add to. Uh I know we

00:37:33 --> 00:37:37
probably would take the entire episode

00:37:35 --> 00:37:40
to talk about the theme too because it

00:37:36 --> 00:37:42
has incredible story but like do you

00:37:39 --> 00:37:44
want to briefly talk about like how the

00:37:41 --> 00:37:47
me came to be and yeah. Yeah it's an

00:37:43 --> 00:37:49
insane story. Yeah. Dracula has now 9

00:37:46 --> 00:37:52
million users. Uh and it's a side

00:37:48 --> 00:37:54
project right uh recent is my main

00:37:51 --> 00:37:56
project. This is only a side project.

00:37:53 --> 00:37:59
And it started because I was traveling I

00:37:55 --> 00:38:02
was uh I was in Germany. I was in yeah

00:37:58 --> 00:38:04
Germany and I was traveling to Spain and

00:38:01 --> 00:38:06
I got sick uh in the plane I was like

00:38:03 --> 00:38:08
feeling so sick. I was like oh my gosh

00:38:05 --> 00:38:11
what's happening. I was alone. I've

00:38:07 --> 00:38:14
never been to Spain before. So I'm like

00:38:10 --> 00:38:16
okay I I was so I was feeling so much

00:38:13 --> 00:38:18
pain to the point that I had to call the

00:38:15 --> 00:38:21
flight attendant and I was like hey I

00:38:17 --> 00:38:23
need help. So they landed in Madrid.

00:38:20 --> 00:38:26
They took me out of the plane in an

00:38:22 --> 00:38:29
ambulance and I was like okay this is

00:38:25 --> 00:38:31
bad right? They take me to the hospital

00:38:28 --> 00:38:32
and they're starting to give me like

00:38:30 --> 00:38:34
some medicine. I'm feeling great. I'm

00:38:31 --> 00:38:36
like, "Okay, I'm ready to leave this

00:38:33 --> 00:38:39
place. Thank you for the help, you know,

00:38:35 --> 00:38:41
but I'm ready to go to the hotel or or

00:38:38 --> 00:38:43
something." And they're like, "No, no,

00:38:40 --> 00:38:45
no. You're not leaving. You got to

00:38:42 --> 00:38:48
stay." Uh, turns out I stayed there for

00:38:44 --> 00:38:51
three weeks. Oh my god. Uh, it was like

00:38:47 --> 00:38:53
that bad. Um, but in the first few days,

00:38:50 --> 00:38:55
like I was already feeling a little bit

00:38:52 --> 00:38:57
better. So, I asked my co-workers in

00:38:54 --> 00:39:00
Madrid. I was like, "Hey, can you bring

00:38:56 --> 00:39:01
me my computer?" Uh, because it got

00:38:59 --> 00:39:04
stuck like in the airplane or something

00:39:00 --> 00:39:06
like, you know, like I just left in an

00:39:03 --> 00:39:08
ambulance. So, like my whole luggage was

00:39:05 --> 00:39:10
there. So, they bring my computer and

00:39:07 --> 00:39:12
I'm like coding in the hospital. I'm

00:39:09 --> 00:39:15
like super happy. I have my my computer

00:39:11 --> 00:39:18
there. And then one day I leave the room

00:39:14 --> 00:39:21
just to get some water and then someone

00:39:17 --> 00:39:24
comes in and steals my computer. No. In

00:39:20 --> 00:39:26
the hospital. In the hospital. So, I

00:39:23 --> 00:39:28
came to my room. I was like, "What's

00:39:25 --> 00:39:31
going on?" Maybe they really want your

00:39:27 --> 00:39:34
program, too.

00:39:30 --> 00:39:36
No, it was so bad. I felt it was like

00:39:33 --> 00:39:39
the worst day. And then, you know, the

00:39:35 --> 00:39:41
next day I called my co-workers again. I

00:39:38 --> 00:39:42
tell them what happened and they're

00:39:40 --> 00:39:44
like, "Don't worry about it. We're

00:39:41 --> 00:39:46
bringing you a new computer." So, they

00:39:43 --> 00:39:48
bring me a new computer. And as a

00:39:45 --> 00:39:50
developer, you do that thing with a new

00:39:47 --> 00:39:52
machine. You're like start to configure

00:39:49 --> 00:39:54
all your hot keys and shortcuts and

00:39:51 --> 00:39:56
themes. So that's what Dracula came

00:39:53 --> 00:39:59
about. Like I just wanted a theme that

00:39:56 --> 00:40:02
worked everywhere. So I built the first

00:39:58 --> 00:40:04
version in the hospital. Uh and then it

00:40:01 --> 00:40:06
just took off. Uh after that were there

00:40:03 --> 00:40:08
already other themes when you built

00:40:05 --> 00:40:11
Dracula. What's the most popular theme

00:40:07 --> 00:40:14
before Dracula? There was Monai. There

00:40:10 --> 00:40:16
was another one that's like creamy

00:40:13 --> 00:40:18
color. I forgot the name now. Why did

00:40:15 --> 00:40:21
you name the theme Dracula? I don't

00:40:17 --> 00:40:23
know. Like I I completely blanked on

00:40:20 --> 00:40:25
that. I don't know. Uh

00:40:22 --> 00:40:27
I was like is it related to Germany? I

00:40:24 --> 00:40:29
don't remember if Dracula was I think

00:40:26 --> 00:40:31
just because it was a dark theme. Um

00:40:28 --> 00:40:35
akes sense. But it it really helped me

00:40:30 --> 00:40:36
on my entrepreneurial journey because at

00:40:34 --> 00:40:40
some point I built a pro version and

00:40:35 --> 00:40:43
then I sold like $300,000 with a theme.

00:40:39 --> 00:40:45
It's just like six colors. So I would

00:40:42 --> 00:40:48
never imagine that you could sell colors

00:40:44 --> 00:40:50
online, you know, and people would buy.

00:40:47 --> 00:40:52
But that gave me the confidence to then

00:40:49 --> 00:40:54
be like, you know what, let me build my

00:40:51 --> 00:40:55
own company. If this works, maybe

00:40:53 --> 00:40:57
something else will. I love that because

00:40:54 --> 00:41:01
there are people who are selling email

00:40:56 --> 00:41:02
templates too out there. Yeah. And now

00:41:00 --> 00:41:04
like what you're building is basically

00:41:02 --> 00:41:06
empowering a new type of audience to be

00:41:03 --> 00:41:09
able to build their own drag not for

00:41:05 --> 00:41:10
command line but for emails and they can

00:41:08 --> 00:41:12
go sell it if it, you know, turns out to

00:41:09 --> 00:41:15
be very good-looking and people want to

00:41:12 --> 00:41:16
adopt it because emails are hard to, you

00:41:14 --> 00:41:17
know, implement if it converts, you

00:41:15 --> 00:41:19
know.

00:41:16 --> 00:41:22
Yeah. Have you seen actually users of a

00:41:18 --> 00:41:24
recent selling like React email

00:41:21 --> 00:41:26
templates? Not yet, but there's a lot of

00:41:24 --> 00:41:30
libraries that are being built around

00:41:25 --> 00:41:32
that. So yeah, that's amazing. Okay, so

00:41:29 --> 00:41:34
I guess last question. If you have a

00:41:32 --> 00:41:37
crystal ball and you you can predict the

00:41:33 --> 00:41:40
future, what do you think the future of

00:41:36 --> 00:41:43
email and future of AI will look like?

00:41:40 --> 00:41:46
I believe today there's a lot of actions

00:41:42 --> 00:41:49
that we take as humans. uh and that's

00:41:45 --> 00:41:51
the majority of the the work when you go

00:41:48 --> 00:41:55
to you know all these different apps you

00:41:50 --> 00:41:57
go to superbase the most databases you

00:41:54 --> 00:42:00
see there were built by humans you go to

00:41:56 --> 00:42:03
resend the emails were sent by humans or

00:41:59 --> 00:42:04
drafted by humans and then sent

00:42:02 --> 00:42:07
programmatically I think we're going to

00:42:03 --> 00:42:09
see a big shift in terms of like who is

00:42:06 --> 00:42:11
the actor who is the creator uh and I

00:42:08 --> 00:42:14
believe it's going to be the majority of

00:42:10 --> 00:42:16
the actions will be taken by agents

00:42:13 --> 00:42:18
instead of humans and that's just the

00:42:15 --> 00:42:20
reality we're going to live in. So we

00:42:18 --> 00:42:24
have to rethink the way we're building

00:42:19 --> 00:42:26
product to support that reality.

00:42:23 --> 00:42:29
Do you want to add more on how to

00:42:25 --> 00:42:31
rethink how to build product? Yeah.

00:42:28 --> 00:42:34
Because it's such a great point. Yeah.

00:42:30 --> 00:42:37
And to rethink these products, you

00:42:33 --> 00:42:39
really have to, you know, go down the

00:42:36 --> 00:42:42
whole journey of the user. It starts

00:42:38 --> 00:42:45
from the onboarding. You cannot have

00:42:41 --> 00:42:46
like 10 steps or you cannot wait two

00:42:44 --> 00:42:49
days to get access to your account. You

00:42:45 --> 00:42:51
cannot, you know, wait for the account

00:42:48 --> 00:42:54
manager to schedule a call with you or

00:42:50 --> 00:42:57
to book a demo. From that point, you

00:42:53 --> 00:42:59
need to experience the aha moment uh as

00:42:56 --> 00:43:01
oon as possible. And the agent should

00:42:58 --> 00:43:05
be able to take action as soon as

00:43:01 --> 00:43:07
possible. And you have to rethink

00:43:04 --> 00:43:10
rolebased access control. you have to

00:43:06 --> 00:43:13
rethink uh permissioning and

00:43:09 --> 00:43:16
authentication for these agents. So

00:43:12 --> 00:43:18
every single layer of the product uh you

00:43:15 --> 00:43:21
have to rethink like even the way you

00:43:17 --> 00:43:24
store the activities you know like every

00:43:20 --> 00:43:26
SAS has like this activities page that

00:43:23 --> 00:43:30
hey can record every thing you did as a

00:43:26 --> 00:43:31
human. Yeah. like actually recording

00:43:29 --> 00:43:33
what every agent is doing is more

00:43:30 --> 00:43:35
important than ever because if they

00:43:32 --> 00:43:38
screw up, which they will in the

00:43:34 --> 00:43:40
beginning, then you need to know what

00:43:37 --> 00:43:41
happened. If they take a destructive

00:43:39 --> 00:43:44
action, you need to know. So there's

00:43:40 --> 00:43:45
just a lot that will change in terms of

00:43:43 --> 00:43:47
how we build product. And we have to

00:43:44 --> 00:43:49
take that in consideration because

00:43:46 --> 00:43:51
humans are not going to be the only user

00:43:48 --> 00:43:53
anymore. That's powerful and amazing.

00:43:50 --> 00:43:57
Well, thank you so much for coming. This

00:43:52 --> 00:43:57
a lot of fun. Yeah. Thank you.

00:43:57 --> 00:44:02
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
