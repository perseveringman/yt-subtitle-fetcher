---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "wkv2ifxPpF8"
title: "How to Make Claude Code Your AI Engineering Team"
video_url: "https://www.youtube.com/watch?v=wkv2ifxPpF8"
thumbnail_url: "https://i.ytimg.com/vi/wkv2ifxPpF8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=wkv2ifxPpF8"
channel: "Y Combinator"
channel_name: "Y Combinator"
channel_id: "UCcefcZRL2oaA_uBNeo5UOWg"
uploader_id: "@ycombinator"
published_at: "2026-04-23T14:30:49.000Z"
upload_date: "2026-04-23"
duration_seconds: 1309
duration_human: "21:49"
view_count: 160052
like_count: 4489
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-05-12T03:19:07.156Z"
---

# How to Make Claude Code Your AI Engineering Team

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=wkv2ifxPpF8
- video_id: wkv2ifxPpF8
- channel_name: Y Combinator
- channel_id: UCcefcZRL2oaA_uBNeo5UOWg
- uploader_id: @ycombinator
- uploader_url: https://www.youtube.com/@ycombinator
- published_at: 2026-04-23T14:30:49.000Z
- upload_date: 2026-04-23
- duration: 21:49
- view_count: 160052
- like_count: 4489
- has_subtitle: true
- language: en-US
- availability: public
- tags: YC, Y Combinator
- categories: Science & Technology

## Description

GStack is an open-source toolkit built by YC President & CEO Garry Tan that turns Claude Code into an AI engineering team — with skills for office hours, design, code review, QA, and browser testing. 

Use it with Claude Code or Codex or Cursor. It's free and open source: https://github.com/garrytan/gstack

In this video, Garry walks through how GStack works, starting with Office Hours, a skill modeled after real YC partner sessions that pressure-tests your idea before you write a line of code. He demos it live, going from idea through adversarial review, design mockups, and automated QA in a single session.

00:00 – AI Just Changed Coding Forever
00:09 – From YC to Building With AI
01:07 – Why AI Coding Feels So Different
02:45 – Turning AI Into a Real Team (GStack)
03:45 – Let’s Build an App Live
05:23 – The Question That Kills Most Ideas
07:13 – This Idea Just Got Way Bigger
08:38 – The “Feels Illegal” AI Hack
10:50 – Upgrading the Idea in Real Time
12:44 – Breaking + Fixing the Plan
14:25 – AI Designs the App
16:59 – The Full System Explained
18:00 – Running Multiple AI Engineers
20:00 – Shipping 10x Faster
21:20 – The Only Thing That Matters Now

Apply to Y Combinator: https://www.ycombinator.com/apply
Work at a startup: https://www.ycombinator.com/jobs

https://www.conductor.build/

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:09 --> 00:00:15
Hi, I'm Gary, president and CEO of Y

00:00:11 --> 00:00:17
Combinator. I'm also an engineer who

00:00:14 --> 00:00:20
spent the first decade of my career

00:00:16 --> 00:00:22
building software full-time. I studied

00:00:19 --> 00:00:24
computer systems engineering at

00:00:21 --> 00:00:27
Stanford, then was employee number 10 at

00:00:23 --> 00:00:29
Palunteer, where I was an engineer,

00:00:26 --> 00:00:32
designer, and product manager all at

00:00:28 --> 00:00:34
once. I co-founded Posterous, a micro

00:00:31 --> 00:00:37
blogging platform that sold to Twitter,

00:00:33 --> 00:00:40
and I also built the first version of

00:00:36 --> 00:00:42
Bookface, YC's internal social platform

00:00:39 --> 00:00:44
and knowledge base. Basically, I've

00:00:41 --> 00:00:46
written a lot of code in my career, and

00:00:43 --> 00:00:48
I'm here to tell you we are in a

00:00:45 --> 00:00:51
completely new era of building software,

00:00:47 --> 00:00:53
the agent era. It turns out the way to

00:00:50 --> 00:00:57
get agents to do real work is the same

00:00:52 --> 00:01:00
way humans have always done it as a team

00:00:56 --> 00:01:04
with roles with process with review. I

00:00:59 --> 00:01:06
built GStack to encode this 3 weeks ago

00:01:03 --> 00:01:09
and now it has more GitHub stars than

00:01:05 --> 00:01:12
Ruby on Rails. In this video I want to

00:01:08 --> 00:01:14
explain how it can help you build with

00:01:11 --> 00:01:19
agents. I've coded more in the past two

00:01:13 --> 00:01:21
months than I did in all of 2013, which

00:01:18 --> 00:01:23
is the last time I worked really, really

00:01:20 --> 00:01:26
hard as an engineer. I started playing

00:01:22 --> 00:01:28
with Claude Code back in January after

00:01:25 --> 00:01:31
hearing people like Andre Karpathy and

00:01:27 --> 00:01:34
Boris Churnney say they weren't manually

00:01:30 --> 00:01:37
writing any code anymore. And I got

00:01:33 --> 00:01:39
completely hooked. Along the way, I've

00:01:36 --> 00:01:41
ssentially built all of Posterus, which

00:01:38 --> 00:01:44
took 2 years to build with a co-founder

00:01:40 --> 00:01:46
and a team of 10 engineers. I've

00:01:43 --> 00:01:49
ssentially built all of my startup

00:01:45 --> 00:01:52
Posterus, which took 2 years, $10

00:01:48 --> 00:01:55
million, and 10 engineers to build. Out

00:01:52 --> 00:01:56
of the box, the model wanders. It

00:01:54 --> 00:01:59
doesn't know your data well. So, it

00:01:55 --> 00:02:01
guesses. And guessing at that scale is

00:01:58 --> 00:02:03
how you get plausible looking code that

00:02:00 --> 00:02:06
silently breaks. The bottleneck here is

00:02:02 --> 00:02:08
not the model's intelligence. As long as

00:02:05 --> 00:02:11
you set the models upright, they are

00:02:08 --> 00:02:13
already smart enough to do extraordinary

00:02:10 --> 00:02:15
work on your codebase. This is

00:02:12 --> 00:02:18
backwards. The scaffolding should be

00:02:14 --> 00:02:21
trivially thin. GStack is my

00:02:17 --> 00:02:23
implementation of the thin harness fat

00:02:20 --> 00:02:27
skills approach. It's an open-source

00:02:22 --> 00:02:30
repo that I built that turns clawed code

00:02:26 --> 00:02:32
into an AI engineering team for you.

00:02:29 --> 00:02:34
skills that act like a team of

00:02:31 --> 00:02:36
specialists. Office hours is one of

00:02:33 --> 00:02:40
those skills. It's actually modeled

00:02:35 --> 00:02:42
exactly after what we go through at YC

00:02:39 --> 00:02:44
as a partner doing office hours with

00:02:41 --> 00:02:47
startups. It starts by asking six

00:02:43 --> 00:02:49
forcing questions for you to reframe

00:02:46 --> 00:02:52
your product before you start building.

00:02:48 --> 00:02:54
Let me show you how it works. The best

00:02:51 --> 00:02:55
way to get started with GStack is uh

00:02:53 --> 00:02:58
actually conductor. And so we're going

00:02:54 --> 00:03:01
to go in quick start. And GStack is

00:02:57 --> 00:03:04
actually built into Conductor right now.

00:03:00 --> 00:03:06
You just click GStack. And today we're

00:03:03 --> 00:03:09
going to make a tax app. Uh it's going

00:03:05 --> 00:03:13
to go into your Gmail and fish out all

00:03:08 --> 00:03:15
of your 1099s cuz it's tax day as of

00:03:12 --> 00:03:17
today. Gstack is actually a set of

00:03:14 --> 00:03:19
skills. And the first one that we're

00:03:16 --> 00:03:22
actually going to use is called office

00:03:18 --> 00:03:26
hours. This is actually the distilled

00:03:21 --> 00:03:29
version of what is thousands and tens of

00:03:25 --> 00:03:32
thousands of hours that the 16 YC

00:03:28 --> 00:03:35
partners have spent many many years

00:03:31 --> 00:03:39
honing and perfecting. And uh this is a

00:03:34 --> 00:03:42
distilled down 10% strength version of

00:03:38 --> 00:03:45
what we do at YC every day. So as you

00:03:41 --> 00:03:47
can see uh conductor actually just drops

00:03:44 --> 00:03:51
you right in there. We're in YC office

00:03:46 --> 00:03:53
hours now and I'm trying to do a startup

00:03:50 --> 00:03:59
to create

00:03:52 --> 00:04:01
to help people get all their 1099 ins

00:03:58 --> 00:04:06
out of

00:04:00 --> 00:04:11
their Gmail and financial institutions.

00:04:05 --> 00:04:15
Many banks will email you with uh new

00:04:10 --> 00:04:20
tax documents, but some won't. So, we

00:04:14 --> 00:04:26
need to both search the user's inbox and

00:04:19 --> 00:04:30
accept URLs to go and search and

00:04:25 --> 00:04:33
ownload the 1099 int PDFs.

00:04:29 --> 00:04:34
Cool. That's our startup idea. It's just

00:04:32 --> 00:04:36
uh something to help people with their

00:04:33 --> 00:04:38
taxes and it's something that I had to

00:04:35 --> 00:04:40
deal with just yesterday. So, the user

00:04:37 --> 00:04:43
wants to do office hours about a startup

00:04:39 --> 00:04:45
idea. um and it's starting on office

00:04:42 --> 00:04:49
hours. So, one of the things you'll

00:04:44 --> 00:04:51
notice is um we have Gary mode on and uh

00:04:48 --> 00:04:52
what that does is it actually shows you

00:04:50 --> 00:04:55
all of the reasoning traces. So, that's

00:04:51 --> 00:04:58
one of the things I really like about um

00:04:54 --> 00:05:02
using GStack. It actually with conductor

00:04:58 --> 00:05:04
you actually get to see exactly what um

00:05:01 --> 00:05:06
the model is thinking as it does it. Uh

00:05:03 --> 00:05:08
right now it's just sort of getting

00:05:05 --> 00:05:10
started but now it's starting to do some

00:05:07 --> 00:05:13
context. Okay, this is a fresh project

00:05:09 --> 00:05:16
with an initial commit. No prior design

00:05:12 --> 00:05:18
docs. We're in startup mode. Oh, and

00:05:15 --> 00:05:19
here this is uh this is sort of the

00:05:17 --> 00:05:23
first thing that happens. You know, your

00:05:18 --> 00:05:25
model with the skill uh of office hours

00:05:22 --> 00:05:27
does a lot of thinking. It searches the

00:05:24 --> 00:05:29
web sometimes and figures out well what

00:05:26 --> 00:05:30
are you trying to do? Here's the

00:05:28 --> 00:05:32
question that determines everything

00:05:29 --> 00:05:34
else. What's the strongest evidence that

00:05:31 --> 00:05:36
you have that someone actually wants

00:05:33 --> 00:05:38
this? This is actually one of the most

00:05:35 --> 00:05:40
important questions to ask yourself when

00:05:37 --> 00:05:43
you're trying to decide, should I work

00:05:39 --> 00:05:45
on project X or work on that startup? I

00:05:42 --> 00:05:47
actually just experienced this recently.

00:05:44 --> 00:05:51
So, I'm going to click that. I have this

00:05:46 --> 00:05:53
experience uh just the other day.

00:05:50 --> 00:05:56
So, what happened exactly? How many bank

00:05:52 --> 00:06:00
accounts do we have and which one sent

00:05:55 --> 00:06:02
uh 1099? Well, I have a few and then the

00:05:59 --> 00:06:04
process of hunting down is actually

00:06:01 --> 00:06:06
quite painful. Okay, the pain is real,

00:06:03 --> 00:06:08
but the consequence is friction and

00:06:05 --> 00:06:11
annoyance, not actual penalties. Well, I

00:06:07 --> 00:06:13
mean, frankly, my accountant uh sends me

00:06:10 --> 00:06:15
annoyed emails, and sometimes they get a

00:06:12 --> 00:06:17
phone call because they're just trying

00:06:14 --> 00:06:20
to do my their job, and uh I'm supposed

00:06:16 --> 00:06:21
to be there to help them.

00:06:19 --> 00:06:23
And so, I do have more than five

00:06:20 --> 00:06:24
accounts. This is actually a really

00:06:22 --> 00:06:27
interesting thing. It points out,

00:06:24 --> 00:06:29
Turboax and HR Block actually have 1099

00:06:26 --> 00:06:32
import features, and Plaid connects to

00:06:28 --> 00:06:34
banks. Why aren't those solving it for

00:06:31 --> 00:06:35
you? So, I answered and it said, "Well,

00:06:33 --> 00:06:37
the user's thinking bigger than a

00:06:34 --> 00:06:38
document act creator. They're seeing

00:06:36 --> 00:06:41
this as a funnel. The hook is we'll find

00:06:37 --> 00:06:43
all your 1099 ins for you, solving an

00:06:40 --> 00:06:46
immediate pain. But the expansion is now

00:06:42 --> 00:06:48
that you have your docs, let's actually

00:06:45 --> 00:06:50
get your taxes prepared, which is

00:06:47 --> 00:06:52
matchmaking and lead genen for tax

00:06:49 --> 00:06:53
preparers. And it's a classic wedge

00:06:51 --> 00:06:55
strategy. It's actually a more

00:06:52 --> 00:06:56
interesting business model than just the

00:06:54 --> 00:06:58
document aggregation alone, which is

00:06:55 --> 00:07:01
right. You could probably charge $2 or

00:06:57 --> 00:07:05
$5 a month or $2 or $5 maybe an entire

00:07:00 --> 00:07:08
year for $1099 in aggregation, but you

00:07:04 --> 00:07:10
can actually charge um a percentage of

00:07:07 --> 00:07:13
the transaction that ends up happening

00:07:09 --> 00:07:15
with a tax preparer, which uh might be

00:07:12 --> 00:07:17
10x more. This is actually a very cool

00:07:14 --> 00:07:19
part of office hours. I might just build

00:07:16 --> 00:07:21
this for myself just for fun because I

00:07:18 --> 00:07:22
do have to do this every single year.

00:07:20 --> 00:07:24
And this is actually one of the most fun

00:07:21 --> 00:07:27
parts about using office hours and

00:07:23 --> 00:07:29
GStack is it's not this sort of on rails

00:07:26 --> 00:07:31
thing. It's more like a conversation

00:07:28 --> 00:07:35
with your model. And so if you just came

00:07:30 --> 00:07:37
in and gave instructions to the model as

00:07:34 --> 00:07:39
it is, if I just typed the original

00:07:36 --> 00:07:42
thing, which is I need to go and find my

00:07:38 --> 00:07:44
1099s, it'll go do that. It will just

00:07:41 --> 00:07:46
literally do it, but it won't think

00:07:43 --> 00:07:48
about who's the user, what is this, what

00:07:45 --> 00:07:50
is the business model, who wants this,

00:07:47 --> 00:07:52
what's the pain point, how does it work,

00:07:49 --> 00:07:54
right? Like this is the kind of stuff

00:07:51 --> 00:07:56
that we get to do every day with lots

00:07:53 --> 00:07:58
and lots of founders in office hours and

00:07:55 --> 00:08:00
we're pretty good at it, but so is this

00:07:57 --> 00:08:03
kill. Revised AI browser automation

00:08:00 --> 00:08:05
GStack browser style lets the user log

00:08:02 --> 00:08:08
in then AI navigates to tax docs and

00:08:04 --> 00:08:09
ownloads PDFs. The user watches it

00:08:07 --> 00:08:12
happen. I think that's correct. Let's

00:08:08 --> 00:08:14
ee. I mean this is a very interesting

00:08:11 --> 00:08:15
thing for me. I mean I feel like I learn

00:08:13 --> 00:08:17
about the process of building a little

00:08:14 --> 00:08:20
bit even though I do office hours with

00:08:16 --> 00:08:21
people all the time. This is sharp push

00:08:19 --> 00:08:23
back on premise 3. You're right. I do

00:08:20 --> 00:08:25
have GStack browser and the approach

00:08:22 --> 00:08:27
you're describing is genuinely clever.

00:08:24 --> 00:08:29
The model would be user logs in AI takes

00:08:26 --> 00:08:32
over, navigates to tax docs, finds the

00:08:28 --> 00:08:33
1099 ins, downloads it. No plaid, no

00:08:31 --> 00:08:35
stored credentials. The user watches the

00:08:32 --> 00:08:37
whole thing happen in the visible

00:08:34 --> 00:08:39
browser. I mean, what I like about it is

00:08:36 --> 00:08:41
it can happen on their actual browser.

00:08:38 --> 00:08:43
It's not happening in the cloud. The

00:08:40 --> 00:08:45
cloud is just someone else's computer.

00:08:42 --> 00:08:48
One of the cool things that GStack does

00:08:44 --> 00:08:51
increasingly is it lets you use codecs

00:08:47 --> 00:08:53
to actually sort out all of the crazy

00:08:50 --> 00:08:54
bugs that might be in here. I'm not

00:08:52 --> 00:08:56
going to do it right now, but it is

00:08:53 --> 00:08:58
omething that you can do when you're at

00:08:55 --> 00:09:01
home working on it yourself. The way to

00:08:57 --> 00:09:03
think about Claude code is that by

00:09:00 --> 00:09:07
default it uses Claude. And I think Opus

00:09:02 --> 00:09:09
4.6 is sort of ADHD CEO. He's the guy

00:09:06 --> 00:09:12
ou want to get a beer with and he's got

00:09:08 --> 00:09:14
a billion ideas, but when the going gets

00:09:11 --> 00:09:16
tough, you got to call in your autistic

00:09:13 --> 00:09:18
CTO and that's Codex. All right, we're

00:09:15 --> 00:09:20
going to skip for now because we're

00:09:18 --> 00:09:22
actually pretty close. I feel like

00:09:19 --> 00:09:25
basically we're in plan mode and office

00:09:21 --> 00:09:28
hours helps us start off with a plan

00:09:24 --> 00:09:30
that has a lot of the things thought

00:09:27 --> 00:09:32
hrough. So, here's actually a really

00:09:29 --> 00:09:34
cool uh example. It actually thinks

00:09:31 --> 00:09:37
through and here's three different

00:09:33 --> 00:09:40
approaches. The first approach is Gmail

00:09:36 --> 00:09:42
off then search for tax doc not

00:09:39 --> 00:09:44
ification then output a checklist of

00:09:41 --> 00:09:46
banks which issue 1099s. There's no

00:09:43 --> 00:09:49
browser automation initially. The effort

00:09:45 --> 00:09:50
is small and the risk is small. You know

00:09:48 --> 00:09:52
hen I look at that it's like that

00:09:50 --> 00:09:54
sounds interesting but it doesn't sound

00:09:51 --> 00:09:56
big enough for me to actually even work

00:09:53 --> 00:09:59
on this. Like I could do that myself.

00:09:55 --> 00:10:02
Next is full stack Gmail and AI browser

00:09:58 --> 00:10:03
automation using uh and a CPA

00:10:01 --> 00:10:05
marketplace. This sounds like what I

00:10:02 --> 00:10:07
want actually.

00:10:04 --> 00:10:08
And then uh it sort of thinks out of the

00:10:06 --> 00:10:12
box. It says, "Oh, okay. What about

00:10:07 --> 00:10:14
approach C? CPA first flip the go to

00:10:11 --> 00:10:16
market. You know, I would say B sounds

00:10:13 --> 00:10:18
right." And then actually I sometimes I

00:10:15 --> 00:10:20
like to add this extra thing which like

00:10:17 --> 00:10:22
when I have an idea when I one of the

00:10:19 --> 00:10:23
approaches speaks to me, but then I

00:10:21 --> 00:10:26
think about something else. I'm like,

00:10:22 --> 00:10:29
"Okay, well, I like B, but actually we

00:10:25 --> 00:10:30
could use the browser

00:10:28 --> 00:10:35
interaction

00:10:29 --> 00:10:41
to skip Google OOTH entirely and just

00:10:34 --> 00:10:46
have the user open Gmail and a version

00:10:40 --> 00:10:49
of GStack browser could just use Gmail

00:10:45 --> 00:10:52
to find the 1099s

00:10:48 --> 00:10:53
to search for automatically."

00:10:51 --> 00:10:57
Simultaneous

00:10:52 --> 00:11:00
to that, it could also ask the user what

00:10:56 --> 00:11:03
other banks they have. Also, and this is

00:10:59 --> 00:11:06
what happens for me.

00:11:02 --> 00:11:10
If they already have a CPA, you can find

00:11:05 --> 00:11:14
out from the email. And if you're me,

00:11:09 --> 00:11:18
you probably already have a bunch of

00:11:13 --> 00:11:20
emails from your CPA bugging you for the

00:11:17 --> 00:11:22
specific accounts.

00:11:19 --> 00:11:24
We're sort of at the end of office

00:11:21 --> 00:11:27
hours, but as you can see, we already

00:11:23 --> 00:11:29
went from sort of a halfbaked rough idea

00:11:26 --> 00:11:30
for something that we might want to do.

00:11:28 --> 00:11:33
I'm not saying this is actually a good

00:11:30 --> 00:11:36
startup idea, but you can see how this

00:11:32 --> 00:11:39
got farther along. We started with

00:11:35 --> 00:11:42
something that might start with OOTH and

00:11:38 --> 00:11:44
then CPA's nagging emails, but in the

00:11:41 --> 00:11:47
nd we realized, well, we have a browser

00:11:43 --> 00:11:50
and the browser could be used with

00:11:46 --> 00:11:52
browser automation to search the inbox,

00:11:49 --> 00:11:55
find all of the 1099s that you need to

00:11:51 --> 00:11:58
download. It can also using LLM ask you

00:11:54 --> 00:12:01
which bank portals you need to add to

00:11:57 --> 00:12:02
and it can go log in with your account

00:12:00 --> 00:12:05
and actually download the PDFs for you

00:12:02 --> 00:12:08
and then send an email to the CPA. So I

00:12:04 --> 00:12:11
really like this browser automation is a

00:12:07 --> 00:12:13
very outofpocket sort of unusual way to

00:12:10 --> 00:12:16
solve this problem. And the wild thing

00:12:12 --> 00:12:19
about coding models is, you know, a year

00:12:15 --> 00:12:22
ago, two years ago, even like 3 months

00:12:18 --> 00:12:25
ago, it's not clear to me that anyone

00:12:21 --> 00:12:27
would even try this. I think that's the

00:12:24 --> 00:12:30
most interesting thing about uh our time

00:12:26 --> 00:12:32
right now. You're able to have an idea

00:12:29 --> 00:12:34
nd then get farther along with it than

00:12:31 --> 00:12:36
you ever would be. Frankly, sometimes I

00:12:33 --> 00:12:38
use office hours and maybe one in three

00:12:35 --> 00:12:40
times I get to the end of it and I say,

00:12:37 --> 00:12:41
"You know what? This isn't something

00:12:39 --> 00:12:44
that makes sense." You'll notice that

00:12:40 --> 00:12:46
here's actually a feasibility aspect of

00:12:43 --> 00:12:48
fice hours and that's one thing I

00:12:45 --> 00:12:50
really pride myself on in office hours

00:12:47 --> 00:12:51
working with startups. I have a very

00:12:49 --> 00:12:54
strong opinion about how the world works

00:12:50 --> 00:12:58
and what might work and um it's just

00:12:53 --> 00:13:01
very interesting to see Opus 4.6 mirror

00:12:57 --> 00:13:03
that in trying to help you figure out

00:13:00 --> 00:13:05
what your startup or product idea might

00:13:02 --> 00:13:07
be. Now, what it's doing is a multi-step

00:13:04 --> 00:13:10
adversarial review. It's trying to put

00:13:06 --> 00:13:11
your idea through the paces. And as you

00:13:09 --> 00:13:13
can see, it's already found a bunch of

00:13:10 --> 00:13:15
things and it's going to try to autofix

00:13:12 --> 00:13:19
it. There's no failure handling. There's

00:13:14 --> 00:13:21
no privacy section. 2FA handoff has no

00:13:18 --> 00:13:24
proposed solution. It actually tries to

00:13:20 --> 00:13:26
auto fill out these things. And it if it

00:13:23 --> 00:13:29
can, it does. And so our doc survived

00:13:25 --> 00:13:31
two rounds of adversarial review. And it

00:13:28 --> 00:13:34
automatically caught and fixed 16

00:13:30 --> 00:13:37
issues. Um so we're going to approve

00:13:33 --> 00:13:39
this design doc. So, as you can see, the

00:13:36 --> 00:13:42
adversarial review improved the score

00:13:38 --> 00:13:44
from 6 out of 10 to 8 out of 10 with

00:13:41 --> 00:13:46
ree remaining issues that we can worry

00:13:43 --> 00:13:48
about later. Now that we've locked in

00:13:45 --> 00:13:50
the adversarial review and addressed all

00:13:47 --> 00:13:54
these issues, uh, normally what I would

00:13:49 --> 00:13:56
o is run plan CEO review, but instead I

00:13:53 --> 00:13:59
think what we're going to do is jump

00:13:55 --> 00:14:02
directly to design shotgun, which is one

00:13:58 --> 00:14:04
of my most fun uh, ways to use this. And

00:14:01 --> 00:14:07
this is just one of a bunch of different

00:14:03 --> 00:14:09
design tools that are in the bag. So, it

00:14:06 --> 00:14:10
figured out here's a bunch of different

00:14:08 --> 00:14:12
views. What do you want to actually

00:14:09 --> 00:14:16
design? And let's just do the main

00:14:11 --> 00:14:18
checklist dashboard. Design checks my

00:14:15 --> 00:14:21
visual brainstorming tool. So, it'll

00:14:17 --> 00:14:23
actually generate multiple AI versions

00:14:20 --> 00:14:25
and then ask us questions about it.

00:14:22 --> 00:14:27
These are three directions. It takes

00:14:24 --> 00:14:31
about 60 seconds. it actually farms it

00:14:26 --> 00:14:33
out to uh OpenAI codecs which um is able

00:14:30 --> 00:14:34
to use image gen. So all right let's

00:14:32 --> 00:14:36
there's three versions command center

00:14:33 --> 00:14:38
friendly progress and split view. Let's

00:14:35 --> 00:14:40
take a look. All right so let's let the

00:14:37 --> 00:14:43
agents cook and we'll be back in about 5

00:14:39 --> 00:14:45
minutes. Great. The agents are done

00:14:42 --> 00:14:49
cooking. And this is what we we got

00:14:44 --> 00:14:52
back. We got three different options for

00:14:48 --> 00:14:54
the actual page that shows up in the

00:14:51 --> 00:14:56
command center for tracking down our tax

00:14:53 --> 00:14:59
documents. So let's look at them one by

00:14:56 --> 00:15:01
one. There's option A, B, and C. All

00:14:58 --> 00:15:03
right, here's one command center.

00:15:00 --> 00:15:05
There's a dashboard. Here's all the

00:15:02 --> 00:15:07
specific. I mean, this looks pretty

00:15:04 --> 00:15:10
good. If you can extract here are all

00:15:06 --> 00:15:12
the banks and here are all the 1099s and

00:15:09 --> 00:15:15
where are they coming from? Um, and what

00:15:11 --> 00:15:16
heir status is, that's pretty good. I

00:15:14 --> 00:15:19
like that. I'm I'm going to give that a

00:15:15 --> 00:15:22
four out of five stars. Option B is like

00:15:18 --> 00:15:25
much more friendly. Um, so option A is

00:15:22 --> 00:15:26
ort of like if you're a Linux hacker, I

00:15:24 --> 00:15:28
bet you would really like this. But

00:15:25 --> 00:15:30
option B, I think it's more friendly for

00:15:27 --> 00:15:33
just normal people. So I kind of like I

00:15:29 --> 00:15:37
I might put that as a five. That might

00:15:32 --> 00:15:39
be a pick. And then let's see. Option C.

00:15:36 --> 00:15:41
This makes it way more complicated than

00:15:38 --> 00:15:44
it needs to. So I really wouldn't do

00:15:40 --> 00:15:45
that. Let's go with option B.

00:15:43 --> 00:15:47
Uh, and then the cool thing is if you

00:15:44 --> 00:15:49
don't like it, you can enter uh, you

00:15:46 --> 00:15:50
know, any of your feedback. You can

00:15:48 --> 00:15:52
click regenerate. But in this case,

00:15:50 --> 00:15:56
we're just going to run with option B

00:15:51 --> 00:15:58
and continue. So that comes back in. And

00:15:55 --> 00:16:01
you know, as you can see, we're going to

00:15:57 --> 00:16:03
go ahead and select option B. And there

00:16:00 --> 00:16:05
it is. So a friendly card-based approach

00:16:02 --> 00:16:08
with progress and the progress ring.

00:16:04 --> 00:16:10
Good instinct. Variant B is locked in.

00:16:07 --> 00:16:14
So while I have you, I mean, that is

00:16:09 --> 00:16:18
just two of 28 different commands. We've

00:16:13 --> 00:16:20
got more than 70,000 uh stars now. And

00:16:17 --> 00:16:22
some of the people who use it like they

00:16:19 --> 00:16:24
actually talk about how when

00:16:21 --> 00:16:27
they're using cloud code they spend 80

00:16:23 --> 00:16:30
to 90% of their time in office hours

00:16:26 --> 00:16:32
plan CEO review and auto plan. Um this

00:16:29 --> 00:16:35
sort of a rough view of how that

00:16:31 --> 00:16:37
sprint process actually works. We

00:16:34 --> 00:16:40
already talked about office space, but

00:16:36 --> 00:16:42
if you don't want to do a lot of back

00:16:39 --> 00:16:44
and forth, if you don't want to be in

00:16:41 --> 00:16:46
the weeds, I did create auto plan, which

00:16:43 --> 00:16:49
gets you through CEO, engineering,

00:16:46 --> 00:16:51
design, and developer experience review

00:16:48 --> 00:16:53
using basically my default

00:16:50 --> 00:16:55
recommendations. Like these are sort of

00:16:52 --> 00:16:57
programmed to be what I would do if I

00:16:54 --> 00:16:59
were you. There are a bunch of design

00:16:56 --> 00:17:01
skills that you can use after the code

00:16:58 --> 00:17:03
is actually done. Cloud code will

00:17:00 --> 00:17:06
actually build when you click approve on

00:17:02 --> 00:17:08
the plan and then after it's done

00:17:05 --> 00:17:12
writing the code you can run review

00:17:07 --> 00:17:15
hich does a staff level uh bug catching

00:17:11 --> 00:17:18
service that goes through puts the work

00:17:14 --> 00:17:20
through the paces full code review uh

00:17:17 --> 00:17:23
finding bugs that might not have been in

00:17:20 --> 00:17:24
the plan mode and then the coolest part

00:17:22 --> 00:17:27
I think that um is actually an

00:17:23 --> 00:17:30
incredible amount of code is I wrote a

00:17:26 --> 00:17:32
CLI around playrite and chromium

00:17:29 --> 00:17:35
So there's actually an entire headed and

00:17:32 --> 00:17:37
headless browser in there. And that was

00:17:34 --> 00:17:40
a real magic moment for me as I was

00:17:36 --> 00:17:43
using cloud code as I sped up. Um

00:17:39 --> 00:17:46
there's this idea of trying to get a to

00:17:42 --> 00:17:49
a level 8 software factory and GSAC does

00:17:45 --> 00:17:51
not get you to level 8, but I do think

00:17:48 --> 00:17:54
it gets you to level seven. And that's

00:17:50 --> 00:17:57
where I can run multiple conductor

00:17:53 --> 00:17:59
windows on different projects and

00:17:56 --> 00:18:02
sometimes three or four all on the same

00:17:58 --> 00:18:05
project all at the same time. These are

00:18:01 --> 00:18:08
parallel PRs with parallel branches and

00:18:04 --> 00:18:11
parallel different features that all can

00:18:07 --> 00:18:13
land more or less simultaneously. And

00:18:10 --> 00:18:15
one of the bottlenecks I ran into was

00:18:12 --> 00:18:18
that, you know, once the agent was doing

00:18:14 --> 00:18:20
all the work of planning and design and

00:18:17 --> 00:18:24
coding it, I found myself sitting there

00:18:20 --> 00:18:26
doing QA, probably the least fun part of

00:18:23 --> 00:18:28
software development. So that made it

00:18:25 --> 00:18:31
very, very important for me to try to

00:18:27 --> 00:18:35
automate that. And when I did, Claude in

00:18:30 --> 00:18:37
Chrome MCP is one of the worst pieces of

00:18:34 --> 00:18:39
software I've ever used. You know, every

00:18:36 --> 00:18:40
time it would try to do an action, it

00:18:38 --> 00:18:43
would think and think and think. There

00:18:39 --> 00:18:44
was crazy context bloat. Often it

00:18:42 --> 00:18:47
wouldn't even do anything, but it would

00:18:44 --> 00:18:49
take two to three seconds even when it

00:18:46 --> 00:18:51
was working to be able to take an

00:18:48 --> 00:18:54
action. And I was amazed that I could

00:18:50 --> 00:18:59
use all of my other skills in GStack to

00:18:54 --> 00:19:02
create the SLQA and SL browse tool. I

00:18:58 --> 00:19:05
basically wrapped Playright at the CLI

00:19:01 --> 00:19:08
level. And now your cloud code and any

00:19:04 --> 00:19:10
agent now can actually just use the

00:19:07 --> 00:19:12
browser. And so you know, not only could

00:19:09 --> 00:19:14
it use the browser, it can take

00:19:11 --> 00:19:16
screenshots. It can do complex

00:19:13 --> 00:19:18
interactions. It can click on things. It

00:19:15 --> 00:19:21
can fill things out. Now it can even

00:19:17 --> 00:19:25
download media, run eventually full

00:19:20 --> 00:19:28
regression tests and update CSS and

00:19:24 --> 00:19:31
assess real browser bug issues, whether

00:19:27 --> 00:19:32
it's JavaScript or CSS. And finally,

00:19:30 --> 00:19:34
there's a ship tool. So, it's sort of

00:19:31 --> 00:19:37
the last step before to make sure that

00:19:33 --> 00:19:39
your PR is ready to land on main. And

00:19:36 --> 00:19:43
this is actually how I work. I run 10 to

00:19:38 --> 00:19:46
15 parallel cla code sessions all at the

00:19:42 --> 00:19:47
same time. I might in one session be

00:19:45 --> 00:19:51
running office hours on a brand new

00:19:46 --> 00:19:53
idea. And I actually now have multiple

00:19:50 --> 00:19:57
open- source projects with tens of

00:19:52 --> 00:20:00
thousands of stars. And I'm probably

00:19:56 --> 00:20:02
sitting on about 400 uh PRs to review

00:19:59 --> 00:20:05
right now. And so I almost always have

00:20:01 --> 00:20:08
one or two sessions active for each

00:20:04 --> 00:20:10
project just evaluating and bringing in

00:20:07 --> 00:20:12
all the open- source fixes that I'm

00:20:09 --> 00:20:14
getting from the community. Uh and I

00:20:11 --> 00:20:17
evaluate it in waves. Um one of the

00:20:13 --> 00:20:19
things that's been really scary in AI

00:20:16 --> 00:20:21
coding right now is supply chain

00:20:18 --> 00:20:22
attacks. So I'm really really paranoid

00:20:20 --> 00:20:25
about it. But the great thing is I have

00:20:21 --> 00:20:26
GStack that has my back. So I don't have

00:20:24 --> 00:20:29
a to-do list anymore. One of the things

00:20:26 --> 00:20:32
that has emerged is I actually click on

00:20:28 --> 00:20:34
whenever I have an idea or I get a bug

00:20:31 --> 00:20:36
report from a user or I see something on

00:20:33 --> 00:20:39
X where someone's frustrated with what

00:20:35 --> 00:20:41
GStack or GBrain does, I just click the

00:20:38 --> 00:20:43
plus icon in Conductor. It creates a new

00:20:40 --> 00:20:46
ork tree and each one of these things

00:20:42 --> 00:20:49
is a new work item. And all I have to do

00:20:45 --> 00:20:52
is run office hours, CEO review, end

00:20:48 --> 00:20:54
review, uh adversarial review, and then

00:20:51 --> 00:20:58
I just run my normal process. when it's

00:20:54 --> 00:21:02
ready to land, it lands and I can do 10,

00:20:57 --> 00:21:04
15, 20, sometimes 50 PRs in any given

00:21:01 --> 00:21:06
day, depending on the number of meetings

00:21:03 --> 00:21:09
I have in that day. So that's it. Uh,

00:21:05 --> 00:21:12
GStack is available right now. Just go

00:21:08 --> 00:21:12
to github.com/gritan/GStack.

00:21:11 --> 00:21:17
When you run/off hours, you're getting a

00:21:14 --> 00:21:20
version of the real product thinking we

00:21:16 --> 00:21:24
do at YC with founders. similar push

00:21:20 --> 00:21:27
back and similar reframing before you

00:21:23 --> 00:21:29
ever meet us. Give it a try and let me

00:21:26 --> 00:21:31
know what you think. This is the most

00:21:28 --> 00:21:33
incredible time in history to build

00:21:30 --> 00:21:36
software. The barrier to building just

00:21:32 --> 00:21:39
collapsed. The only question left is

00:21:35 --> 00:21:42
what are you going to build? It's time

00:21:38 --> 00:21:45
to let it rip. Go make something people

00:21:41 --> 00:21:45
want.

<!-- YOUTUBE_TRANSCRIPT_END -->
