---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "1z1xZF7X2cQ"
title: "Aaron Levie and Steven Sinofsky on the AI-Worker Future"
video_url: "https://www.youtube.com/watch?v=1z1xZF7X2cQ"
thumbnail_url: "https://i.ytimg.com/vi/1z1xZF7X2cQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=1z1xZF7X2cQ"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-08-25T13:00:09.000Z"
upload_date: "2025-08-25"
duration_seconds: 3365
duration_human: "56:05"
view_count: 19995
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:38:34.893Z"
---

# Aaron Levie and Steven Sinofsky on the AI-Worker Future

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=1z1xZF7X2cQ
- video_id: 1z1xZF7X2cQ
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-08-25T13:00:09.000Z
- upload_date: 2025-08-25
- duration: 56:05
- view_count: 19995
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

What exactly is an AI agent, and how will agents change the way we work?

In this episode, a16z general partners Erik Torenberg and Martin Casado sit down with Aaron Levie (CEO, Box) and Steven Sinofsky (a16z board partner; former Microsoft exec) to unpack one of the hottest debates in AI right now.

They cover:
- Competing definitions of an “agent,” from background tasks to autonomous interns
- Why today’s agents look less like a single AGI and more like networks of specialized sub-agents
- The technical challenges of long-running, self-improving systems
- How agent-driven workflows could reshape coding, productivity, and enterprise software
- What history — from the early PC era to the rise of the internet — tells us about platform shifts like this one

The conversation moves from deep technical questions to big-picture implications for founders, enterprises, and the future of work.

Timecodes: 
0:00 Introduction: The Evolution of AI Agents
0:36 Defining Agency and Autonomy
1:39 Long-Running Agents and Feedback Loops
4:27 Specialization and Task Division in AI
6:04 Anthropomorphizing AI and Economic Impact
9:10 Predictions, Progress, and Platform Shifts
11:31 Recursive Self-Improvement and Technical Challenges
13: 13 Hallucinations, Verification, and Expert Productivity
16:16 The Role of Experts and Tool Adoption
22:14 Changing Workflows: Agents Reshaping Work Patterns
45:55 Division of Labor, Specialization, and New Roles
48:47 Verticalization, Applied AI, and the Future of Agents
54:44 Platform Competition and the Application Layer

Resources: 
Find Aaron on X: https://x.com/levie
Find Martin on X: https://x.com/martin_casado
Find Steven on X: https://x.com/stevesi

Stay Updated: 
Let us know what you think: https://ratethispodcast.com/a16z 
Find a16z on Twitter: https://twitter.com/a16z 
Find a16z on LinkedIn: https://www.linkedin.com/company/a16z 
Subscribe on your favorite podcast app: https://a16z.simplecast.com/ 
Follow our host: https://x.com/eriktorenberg

Please note that the content here is for informational purposes only; should NOT be taken as legal, business, tax, or investment advice or be used to evaluate any investment or security; and is not directed at any investors or potential investors in any a16z fund. a16z and its affiliates may maintain investments in the companies discussed. For more details, please see a16z.com/disclosures.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
We thought that we were looking at the

00:00:01 --> 00:00:05
form factor of AI, which is you're

00:00:03 --> 00:00:07
talking back and forth to something. The

00:00:04 --> 00:00:09
real ultimate end state of AI and thus

00:00:06 --> 00:00:11
AI agents is these are autonomous things

00:00:08 --> 00:00:13
that run in the background on your

00:00:10 --> 00:00:15
behalf and executing real work for you.

00:00:12 --> 00:00:17
The more work that it's doing without

00:00:14 --> 00:00:18
you having to intervene, the more

00:00:16 --> 00:00:20
agentic it's becoming.

00:00:17 --> 00:00:21
>> Somehow it produces output that it feeds

00:00:19 --> 00:00:24
back into itself.

00:00:20 --> 00:00:26
>> It's literally just the amperand in

00:00:23 --> 00:00:27
Linux, which is it's a background test.

00:00:26 --> 00:00:29
>> Okay.

00:00:26 --> 00:00:31
>> And it's like the worst assistant in the

00:00:28 --> 00:00:36
world. and agentification is just hiring

00:00:30 --> 00:00:36
a lot of these really bad interns.

00:00:36 --> 00:00:41
>> I thought we I'd start this wide-ranging

00:00:38 --> 00:00:43
podcast by asking the very simple but

00:00:40 --> 00:00:43
very provocative question, what is an

00:00:42 --> 00:00:45
agent?

00:00:42 --> 00:00:47
>> Oh boy. To who?

00:00:44 --> 00:00:50
>> Stephen. Okay. Exactly.

00:00:46 --> 00:00:52
>> Go for it. So, so I I actually have a

00:00:49 --> 00:00:54
very old person view of what an agent

00:00:51 --> 00:00:57
is, which is it's literally just the

00:00:53 --> 00:00:58
amperand in Linux, which is it's a

00:00:56 --> 00:01:00
background test.

00:00:57 --> 00:01:03
>> Okay. Because like you type something

00:00:59 --> 00:01:05
into 03 and then it's like, "Hey,

00:01:02 --> 00:01:07
I'm trying this out. Oh, wait. I need a

00:01:04 --> 00:01:09
password. Can't do that." And it's like

00:01:06 --> 00:01:10
the worst assistant in the world. And

00:01:08 --> 00:01:12
really, it's just cuz they need to

00:01:09 --> 00:01:15
entertain you while it's taking a long

00:01:11 --> 00:01:17
time to answer your prompt. And so

00:01:14 --> 00:01:19
that's my old person view of what an

00:01:16 --> 00:01:22
agent and agentification is just hiring

00:01:18 --> 00:01:24
a lot of these really bad interns.

00:01:21 --> 00:01:26
>> The intern, they're getting better. They

00:01:23 --> 00:01:28
are getting better, but they still don't

00:01:25 --> 00:01:29
remember if I have a password to nature,

00:01:27 --> 00:01:31
you know, like it's just

00:01:28 --> 00:01:33
>> Is it possible you guys just had bad

00:01:30 --> 00:01:34
interns in like the ' 80s and '90s?

00:01:32 --> 00:01:35
>> We were We had terrible interns.

00:01:33 --> 00:01:38
>> I have like a very high esteem for

00:01:34 --> 00:01:39
interns. So,

00:01:37 --> 00:01:42
>> but now a real answer.

00:01:38 --> 00:01:43
>> No, no. I mean, uh I I think I I think

00:01:41 --> 00:01:45
collectively we're seeing what what

00:01:42 --> 00:01:48
hese are becoming. So if you think

00:01:44 --> 00:01:50
about two years ago the you know post

00:01:47 --> 00:01:51
chatbt moment we we thought that we were

00:01:49 --> 00:01:53
looking at the form factor of AI which

00:01:50 --> 00:01:54
is you're talking back and forth to

00:01:52 --> 00:01:56
something and I think to Stephven's

00:01:53 --> 00:01:58
point the real you know ultimate end

00:01:55 --> 00:02:01
state of AI and thus AI agents is these

00:01:57 --> 00:02:03
are these are autonomous you know uh uh

00:02:00 --> 00:02:05
things that run in the background on

00:02:02 --> 00:02:08
your behalf and executing real work for

00:02:04 --> 00:02:09
you and you're ideally in a in an ideal

00:02:07 --> 00:02:12
world interacting with them actually

00:02:08 --> 00:02:13
relatively little uh relative to the

00:02:11 --> 00:02:15
amount of value that they're creating

00:02:12 --> 00:02:17
and so so there's some kind of, you

00:02:14 --> 00:02:19
know, metric where the more work that

00:02:16 --> 00:02:20
it's doing without you having to

00:02:18 --> 00:02:22
intervene, the more agentic it's

00:02:19 --> 00:02:23
becoming. And and I think that's that's

00:02:21 --> 00:02:23
ort of the paradigm that we're seeing.

00:02:22 --> 00:02:25
>> Yeah.

00:02:22 --> 00:02:27
>> The only addition I'd have in addition

00:02:24 --> 00:02:29
to longunning, which I agree,

00:02:26 --> 00:02:31
>> is that somehow it produces output that

00:02:28 --> 00:02:34
it feeds back into itself

00:02:30 --> 00:02:35
>> as input, which you can actually do

00:02:33 --> 00:02:37
longunning inference. Like you can make

00:02:34 --> 00:02:38
a video that's really longunning, but

00:02:36 --> 00:02:40
it's just basically a single shot video

00:02:38 --> 00:02:41
and you just throw more compute at it. I

00:02:39 --> 00:02:43
think there's

00:02:40 --> 00:02:45
>> like technical limitations.

00:02:42 --> 00:02:46
um you know if you start feeding the

00:02:44 --> 00:02:48
input back in because we're not quite

00:02:45 --> 00:02:50
sure how to contain that too and so you

00:02:48 --> 00:02:52
know I think you can do it I think you

00:02:49 --> 00:02:53
can measure things based on how long

00:02:51 --> 00:02:55
they run and you could also measure it

00:02:52 --> 00:02:56
by how many times it's actually taken

00:02:54 --> 00:02:58
its own guidance which would be kind of

00:02:55 --> 00:03:00
more of an agency. Yeah, because I think

00:02:57 --> 00:03:02
I do think it's important that in this

00:02:59 --> 00:03:04
transition, look, we are what Aaron

00:03:01 --> 00:03:05
described is where we're going to be. It

00:03:03 --> 00:03:07
it's it's just that what are the

00:03:04 --> 00:03:10
interesting steps that happen along the

00:03:06 --> 00:03:13
way because we are going to need for the

00:03:09 --> 00:03:14
time being it to stop and say, am I

00:03:12 --> 00:03:17
heading in the right direction or not?

00:03:13 --> 00:03:20
because you you really putting aside all

00:03:16 --> 00:03:22
the horror stories about you know taking

00:03:19 --> 00:03:24
um action without consent and using

00:03:21 --> 00:03:25
accounts and data or whatever there is

00:03:23 --> 00:03:28
this thing where like you just don't

00:03:24 --> 00:03:30
want to waste your time on the clock

00:03:27 --> 00:03:31
while it's churning away way off in the

00:03:29 --> 00:03:32
wrong direction.

00:03:30 --> 00:03:34
>> Yeah. So the question is to what extent

00:03:31 --> 00:03:36
do they have their own agency which to

00:03:33 --> 00:03:37
me means they've spit something out and

00:03:35 --> 00:03:39
they've kind of consumed it back up

00:03:36 --> 00:03:40
again and it's still a sensible thing

00:03:38 --> 00:03:42
which by the way as you start thinking

00:03:40 --> 00:03:43
of these things in distribution it's

00:03:41 --> 00:03:44
actually a very difficult thing to do

00:03:42 --> 00:03:46
because it doesn't know if it's going to

00:03:44 --> 00:03:47
be spitting something out that's still

00:03:45 --> 00:03:48
in distribution when it brings it back

00:03:46 --> 00:03:50
in like they don't have that

00:03:47 --> 00:03:51
self-reflection so I I think there's

00:03:49 --> 00:03:53
actually a very kind of technical

00:03:50 --> 00:03:54
question here of to what extent we can

00:03:52 --> 00:03:56
make these things have independent

00:03:53 --> 00:03:56
agency but we can make them long run

00:03:55 --> 00:03:58
pretty easily.

00:03:55 --> 00:04:00
>> Yeah. Yeah. We're good at the long run.

00:03:57 --> 00:04:04
>> The long running you get back is Yeah.

00:03:59 --> 00:04:06
Yeah, I mean I think the um uh the

00:04:03 --> 00:04:08
interesting thing is how the ecosystem

00:04:05 --> 00:04:11
is sort of solving

00:04:07 --> 00:04:12
um or or mitigating then you know the

00:04:10 --> 00:04:15
issues like you're seeing sort of this

00:04:11 --> 00:04:16
logical division of the agents. So they

00:04:14 --> 00:04:19
might be long running but they're not

00:04:15 --> 00:04:20
actually trying to do everything and so

00:04:18 --> 00:04:22
the more that you subdivide the tasks

00:04:19 --> 00:04:25
out then actually the more that they

00:04:21 --> 00:04:26
can go pretty far on on a single

00:04:24 --> 00:04:27
task without without getting kind of

00:04:25 --> 00:04:29
totally lost on what they're what

00:04:26 --> 00:04:31
hey're working on. Well, Unix is going

00:04:28 --> 00:04:32
to prove to be right, which is like

00:04:30 --> 00:04:35
you're gonna you're gonna want to break

00:04:31 --> 00:04:36
things up into much smaller granularity

00:04:34 --> 00:04:39
and tools. And I think to other points

00:04:36 --> 00:04:41
that you've made on X, like you're going

00:04:38 --> 00:04:44
to want to divide things up so that it's

00:04:40 --> 00:04:46
like an expert in this thing. Yeah. And

00:04:43 --> 00:04:48
and then it might be a different,

00:04:45 --> 00:04:50
>> let's just say, body of code where you

00:04:47 --> 00:04:52
go and ask like ask, you know, are you

00:04:49 --> 00:04:54
good at this thing? Let me get your

00:04:51 --> 00:04:56
answer on on this part of the problem.

00:04:53 --> 00:04:58
>> Yeah. Um it's it's kind of interesting.

00:04:55 --> 00:05:00
I I don't know um how much you've

00:04:57 --> 00:05:03
plotted this but like the conversation

00:04:59 --> 00:05:05
AGI has sort of evolved you know very

00:05:02 --> 00:05:07
clearly in the past like six months and

00:05:04 --> 00:05:10
>> and I think that the consensus was maybe

00:05:06 --> 00:05:11
not even consensus what what some of the

00:05:09 --> 00:05:14
view was let's say two years ago was is

00:05:10 --> 00:05:16
this sort of monolithic system that's

00:05:13 --> 00:05:18
just super intelligent and it solves you

00:05:15 --> 00:05:20
know all things and now if you kind of

00:05:17 --> 00:05:21
ast forward to today and let's say

00:05:19 --> 00:05:23
whatever we agree kind of

00:05:20 --> 00:05:24
state-of-the-art is it's sort of looking

00:05:22 --> 00:05:27
like that's probably not going to work

00:05:24 --> 00:05:28
and um for for a variety of reasons at

00:05:26 --> 00:05:30
least in in today's architecture. So

00:05:27 --> 00:05:32
then what do you have is maybe a system

00:05:29 --> 00:05:34
of many agents and those agents have to

00:05:31 --> 00:05:36
become very very deep experts in a

00:05:33 --> 00:05:38
particular set of tasks and then somehow

00:05:35 --> 00:05:40
you're orchestrating those agents

00:05:37 --> 00:05:41
together and then you know now you have

00:05:39 --> 00:05:42
two different types of problems. One has

00:05:40 --> 00:05:45
to go deep the other has to be really

00:05:41 --> 00:05:47
good at orchestration. Um and and that

00:05:44 --> 00:05:49
maybe is is how you end up solving you

00:05:46 --> 00:05:50
know some of these some of these issues

00:05:48 --> 00:05:51
over the long run. I

00:05:49 --> 00:05:52
>> I just think it's very difficult to

00:05:50 --> 00:05:54
think cleanly about this. Like I've

00:05:51 --> 00:05:56
still yet to see a system where you you

00:05:53 --> 00:05:57
they perform very well and you don't

00:05:55 --> 00:05:58
draw a circle

00:05:56 --> 00:06:00
>> that doesn't have a human being in it

00:05:57 --> 00:06:03
somewhere. Oh yeah. So in a sense like

00:05:59 --> 00:06:04
the G like often seems to be coming from

00:06:02 --> 00:06:07
like the general seems to so like I just

00:06:04 --> 00:06:08
listen these things are tremendously

00:06:06 --> 00:06:10
good at increasing productivity of

00:06:08 --> 00:06:11
humans. At some point maybe they'll

00:06:09 --> 00:06:13
increase productivity without humans but

00:06:10 --> 00:06:15
until then it's just very hard for me

00:06:12 --> 00:06:18
actually to talk clean. Well, and it's

00:06:14 --> 00:06:19
just it's it's so important for people

00:06:17 --> 00:06:21
to get past sort of the

00:06:18 --> 00:06:23
anthropomorphization of AI because

00:06:20 --> 00:06:26
that's what's holding everybody back.

00:06:22 --> 00:06:28
Like AGI is about about robot

00:06:25 --> 00:06:30
>> fantasy land and it and that leads to

00:06:27 --> 00:06:32
all the nonsense about destroying jobs

00:06:29 --> 00:06:34
and blah blah blah. None of that is

00:06:31 --> 00:06:36
helpful because it you have to then you

00:06:34 --> 00:06:38
dig yourself out of that hole to just

00:06:35 --> 00:06:39
explain, wow, you know, it's really

00:06:37 --> 00:06:41
good at writing a case study,

00:06:38 --> 00:06:43
right? Which like it writes a better

00:06:40 --> 00:06:45
case study than all the people that work

00:06:42 --> 00:06:46
for, but it doesn't know who to write it

00:06:44 --> 00:06:48
about. It doesn't know what necessarily

00:06:45 --> 00:06:50
ou want to emphasize. It doesn't know

00:06:47 --> 00:06:51
hat's what the budget is, what's

00:06:49 --> 00:06:53
needed, how many words,

00:06:50 --> 00:06:55
>> right? But it also turns out like AGI

00:06:52 --> 00:06:57
just does an awful lot of work. You know

00:06:54 --> 00:06:59
hat? So, for example, someone asked me

00:06:56 --> 00:07:00
recently and they say, "Well, um, you

00:06:58 --> 00:07:03
know, are you worried that like if we

00:07:00 --> 00:07:05
have uh AGI, then you'll no longer be

00:07:02 --> 00:07:08
investing in software companies?" I'm

00:07:04 --> 00:07:09
like, "Well, I mean, you're AGI,

00:07:07 --> 00:07:11
right? I'm still investing in software

00:07:08 --> 00:07:13
companies, right?" And so, like, just

00:07:10 --> 00:07:14
because you're AGI says nothing about

00:07:12 --> 00:07:16
economic equilibrium or economic

00:07:14 --> 00:07:18
feasibility, etc. So, like just the term

00:07:15 --> 00:07:19
AGI does basically infinite work for

00:07:17 --> 00:07:21
every kind of fear we have and maybe

00:07:18 --> 00:07:24
very hope that we have. And the more we

00:07:20 --> 00:07:26
tie it down to like not only it solves a

00:07:23 --> 00:07:27
class of problems, but the economics

00:07:25 --> 00:07:29
pencil out yes or no, we can actually

00:07:26 --> 00:07:31
have a more sensible discussion, which I

00:07:28 --> 00:07:33
actually I think is finally entering the

00:07:30 --> 00:07:34
discourse. I think we're actually

00:07:32 --> 00:07:36
talking a lot more sensibly now than we

00:07:33 --> 00:07:39
re a year ago. And so when you hear

00:07:35 --> 00:07:40
when people say things or the AI 2027

00:07:38 --> 00:07:41
paper when they talk about sort of

00:07:39 --> 00:07:43
automated research or recursive

00:07:40 --> 00:07:45
self-improvement does that feel like

00:07:42 --> 00:07:47
fiction or fantasy or does it feel like

00:07:44 --> 00:07:49
or is it thinking that even with those

00:07:46 --> 00:07:52
things we're you know sort of nowhere

00:07:48 --> 00:07:54
near um you know peak software and there

00:07:51 --> 00:07:55
would just be unlimited uh sort of

00:07:53 --> 00:07:57
demand.

00:07:54 --> 00:07:59
>> I think you got to go first for each

00:07:56 --> 00:08:01
question. I don't want to stop.

00:07:58 --> 00:08:04
>> I need you to anchor us in reality and

00:08:00 --> 00:08:07
then and then we can deviate. Well, I

00:08:03 --> 00:08:09
look I I think that first I I would not

00:08:06 --> 00:08:11
I'm just not a fan right now of buying

00:08:08 --> 00:08:13
any into anything by year because

00:08:10 --> 00:08:15
whatever year you want to buy into I in

00:08:12 --> 00:08:18
that in 2027 we're just going to be

00:08:14 --> 00:08:20
having a fight over what we meant by by

00:08:17 --> 00:08:22
the metrics and it just turns into like

00:08:19 --> 00:08:26
OKRs for an industry which is just like

00:08:21 --> 00:08:28
a ridiculous place to be. But but I I I

00:08:25 --> 00:08:30
think that everything takes 10 years and

00:08:27 --> 00:08:32
the thing is but you can't predict

00:08:29 --> 00:08:35
anything in 10 years. So, how do you

00:08:31 --> 00:08:37
even reconcile that? And and I think

00:08:34 --> 00:08:40
that it there you you know, you just

00:08:36 --> 00:08:42
have to re recognize that the we're on

00:08:39 --> 00:08:43
an exponential curve. So, no one's

00:08:41 --> 00:08:44
predictive powers work,

00:08:42 --> 00:08:46
>> right?

00:08:43 --> 00:08:47
>> And and it's it's just going to keep

00:08:45 --> 00:08:49
happening. It's not going to plateau.

00:08:46 --> 00:08:51
It's not going to, you know, all of a

00:08:48 --> 00:08:54
sudden we're done. And that's what makes

00:08:50 --> 00:08:56
this a different kind of platform shift.

00:08:53 --> 00:08:58
Like you if you just you look at the

00:08:55 --> 00:08:59
progress and that's the same that went

00:08:57 --> 00:09:00
hrough with storage that went through

00:08:58 --> 00:09:03
with bandwidth that went through with

00:08:59 --> 00:09:06
productivity on on computing on on

00:09:02 --> 00:09:08
connectivity around the world like you

00:09:05 --> 00:09:10
because it's exponential you can't

00:09:07 --> 00:09:11
predict it and it's just folly to sit

00:09:09 --> 00:09:13
around and try to predict. Now you could

00:09:10 --> 00:09:14
o science fiction and you could say in

00:09:12 --> 00:09:16
the future when we all have our personal

00:09:13 --> 00:09:18
AI with all this other stuff and then

00:09:15 --> 00:09:20
that's great but then you say it's going

00:09:17 --> 00:09:23
to happen in 2029 you're an idiot.

00:09:19 --> 00:09:26
>> Yes. And so that that sounds totally

00:09:22 --> 00:09:28
correct, right? Because basically uh

00:09:25 --> 00:09:31
three years ago you would not have been

00:09:27 --> 00:09:32
able to conceive of cloud code. So or

00:09:30 --> 00:09:34
cursor or you know name your your

00:09:31 --> 00:09:35
background agent writing code. So it's

00:09:33 --> 00:09:36
like what is the point of having some

00:09:34 --> 00:09:39
date at which you're you're naming

00:09:35 --> 00:09:41
something? And um and so we've actually

00:09:38 --> 00:09:43
seen probably vastly more progress in

00:09:40 --> 00:09:46
the past just two years of of actual

00:09:42 --> 00:09:48
applied AI than we would have thought.

00:09:45 --> 00:09:50
And yet does it matter that one or two

00:09:47 --> 00:09:52
f the predictions didn't play out? Like

00:09:49 --> 00:09:54
no. Um, so, so I think it's probably

00:09:51 --> 00:09:57
more interesting to think about like

00:09:53 --> 00:09:58
where is the technology from more of a

00:09:56 --> 00:10:00
classic Moore's law standpoint and like

00:09:58 --> 00:10:02
how much compute do we have, how much

00:09:59 --> 00:10:03
data are we working through, um, how

00:10:01 --> 00:10:05
powerful these models.

00:10:02 --> 00:10:08
>> I mean, just let me ask you like as

00:10:04 --> 00:10:12
emi- old like

00:10:07 --> 00:10:15
>> well I mean like like nobody after AI

00:10:11 --> 00:10:17
collapsed and machine translation and

00:10:14 --> 00:10:19
machine vision failed.

00:10:16 --> 00:10:21
>> Yeah. there. You couldn't find anybody

00:10:18 --> 00:10:24
who thought that those would become

00:10:20 --> 00:10:26
solved problems or like or after neural

00:10:23 --> 00:10:26
nets imploded and like literally you

00:10:25 --> 00:10:27
were teaching

00:10:25 --> 00:10:29
>> or expert system

00:10:26 --> 00:10:31
but you were teaching

00:10:28 --> 00:10:32
and like like if you tried to teach

00:10:30 --> 00:10:35
neural nets

00:10:31 --> 00:10:37
>> like the students would rebel because

00:10:34 --> 00:10:40
you were wasting everybody's time you

00:10:36 --> 00:10:42
know in in like in 1999 like Hinton

00:10:39 --> 00:10:45
couldn't get funded

00:10:41 --> 00:10:47
>> trying to to do neural nets. I I took

00:10:44 --> 00:10:48
like I grad school was this three volume

00:10:46 --> 00:10:50
history of artificial intelligence

00:10:47 --> 00:10:52
thing. Neural nets was like eight pages.

00:10:49 --> 00:10:54
>> You know, ironically, I remember when ML

00:10:51 --> 00:10:56
was the cool thing and neural nets was

00:10:53 --> 00:10:57
the old thing and now like you know ML

00:10:55 --> 00:10:58
is like the old thing and neural nets

00:10:56 --> 00:11:01
are the cool thing,

00:10:57 --> 00:11:02
>> right? or NLP like and so so the fact

00:11:00 --> 00:11:04
hat like

00:11:01 --> 00:11:06
>> so we will return to all of these

00:11:03 --> 00:11:08
problems that couldn't be solved like

00:11:05 --> 00:11:10
ven like this the everyone's favorite

00:11:07 --> 00:11:10
one oh it doesn't understand math

00:11:09 --> 00:11:13
>> right

00:11:09 --> 00:11:15
>> like okay that is a solvable problem

00:11:12 --> 00:11:17
because math is solvable like there's

00:11:14 --> 00:11:19
just no one put the math layer in to

00:11:16 --> 00:11:21
understand what a number was and to you

00:11:18 --> 00:11:23
know hardcode it and just build in an

00:11:20 --> 00:11:24
expert system for math which is actually

00:11:22 --> 00:11:27
a well understood thing because we've

00:11:23 --> 00:11:29
had maxima since like 1975

00:11:26 --> 00:11:31
>> you know I I think it's important to

00:11:28 --> 00:11:32
like maybe for us to describe how hard

00:11:30 --> 00:11:34
it is to predict anything, right? So

00:11:31 --> 00:11:36
let's take recursive self-improvement.

00:11:33 --> 00:11:37
This is one of my favorite ones. So the

00:11:35 --> 00:11:38
ory of recursive self-improvement is

00:11:36 --> 00:11:40
you have a graph where you have a box

00:11:37 --> 00:11:41
which is the thing and then there's an

00:11:39 --> 00:11:43
arrow that goes back to the box which

00:11:40 --> 00:11:46
says improve and then of course you look

00:11:42 --> 00:11:47
at that and you're like

00:11:45 --> 00:11:49
works

00:11:46 --> 00:11:50
>> right. So I guess you know like from an

00:11:48 --> 00:11:52
intuitive lay perspective every time you

00:11:49 --> 00:11:53
have a box with an arrow back in it

00:11:51 --> 00:11:55
you're like okay we're we're done.

00:11:52 --> 00:11:56
Right? But like if you know anything

00:11:54 --> 00:11:58
about nonlinear control theory,

00:11:55 --> 00:12:00
answering that question is one of the

00:11:57 --> 00:12:02
most difficult question that we know in

00:11:59 --> 00:12:05
all of technical sciences, right? Like

00:12:01 --> 00:12:07
does it converge? Does it diverge? Like

00:12:04 --> 00:12:09
does it asmmptote? Right? So for

00:12:06 --> 00:12:11
example, you could recursively

00:12:08 --> 00:12:13
self-improve if you're doing basic

00:12:10 --> 00:12:15
search, but you asmtote, right? And so

00:12:12 --> 00:12:17
like saying recursive self-improvement

00:12:14 --> 00:12:19
from like a deeply technical perspective

00:12:16 --> 00:12:21
says almost nothing. Mhm.

00:12:18 --> 00:12:24
>> It says, but but but unfortunately

00:12:20 --> 00:12:25
because we tend to anthropomorphize AI,

00:12:23 --> 00:12:27
we say recursive self-improvement and

00:12:24 --> 00:12:30
all of a sudden we're like and then it

00:12:26 --> 00:12:30
like overcomes energy boundaries and

00:12:29 --> 00:12:32
human intelligence.

00:12:29 --> 00:12:34
>> Well, that's how it goes from being a

00:12:31 --> 00:12:36
toddler to being like an 8-year-old. It

00:12:33 --> 00:12:38
just because it it figured out, right?

00:12:35 --> 00:12:39
And so, I mean, the reality is like

00:12:37 --> 00:12:42
nonlinear control systems, which are

00:12:38 --> 00:12:44
feedback loops that are adaptive, we

00:12:41 --> 00:12:45
don't even have the math for for for

00:12:43 --> 00:12:47
elatively simple systems to understand

00:12:44 --> 00:12:49
what happens. You have to actually know

00:12:46 --> 00:12:50
the distributions that come out and go

00:12:48 --> 00:12:52
into them. And so these things are going

00:12:49 --> 00:12:54
to improve. They're going to continue to

00:12:51 --> 00:12:56
improve. Maybe they'll improve

00:12:53 --> 00:12:57
themselves, but just because they do

00:12:55 --> 00:12:58
improve themselves doesn't mean they can

00:12:56 --> 00:13:00
continue to do it. And this is kind of

00:12:58 --> 00:13:01
part of this entire journey as we're

00:12:59 --> 00:13:02
learning about these systems. Again, the

00:13:00 --> 00:13:04
good news is I think we're talking a lot

00:13:01 --> 00:13:06
more sensibly now than we were a year

00:13:03 --> 00:13:08
ago. And hopefully that will continue. I

00:13:05 --> 00:13:09
hopefully hopefully the discourse can

00:13:07 --> 00:13:10
recursively self-improve. So we're just

00:13:08 --> 00:13:11
more

00:13:09 --> 00:13:13
>> Well, the good news is that's involving

00:13:10 --> 00:13:16
humans. So we don't actually model. But

00:13:12 --> 00:13:18
I I thought that I mean you you must be

00:13:15 --> 00:13:20
seeing this even with with customers. I

00:13:17 --> 00:13:21
mean like take the conversation about

00:13:19 --> 00:13:23
like hallucinations and things like

00:13:20 --> 00:13:26
that. How how dramatically that's

00:13:22 --> 00:13:28
altered in just the past two years say.

00:13:25 --> 00:13:30
>> Yeah. In in on two dimensions actually.

00:13:27 --> 00:13:33
So on one dimension the the problem of

00:13:29 --> 00:13:34
hallucinations has improved. So the as

00:13:32 --> 00:13:36
the models get better as our

00:13:33 --> 00:13:38
understanding of how do you you know

00:13:35 --> 00:13:41
hether it's rag or whatever what you

00:13:37 --> 00:13:43
know even the even the the problem of uh

00:13:40 --> 00:13:45
of of actually the efficacy of the

00:13:42 --> 00:13:47
context window has has improved. So you

00:13:44 --> 00:13:49
have the technical improvements um you

00:13:46 --> 00:13:52
know kind of across the stack and

00:13:48 --> 00:13:55
equally you have a kind of a cultural

00:13:51 --> 00:13:57
understanding to some degree within the

00:13:54 --> 00:13:58
nterprise as to like okay actually know

00:13:56 --> 00:14:01
these are these are non-deterministic

00:13:57 --> 00:14:02
systems they're probabilistic. So, so

00:14:00 --> 00:14:05
you're starting to see almost a culture

00:14:01 --> 00:14:08
shift which is okay, uh you can you can

00:14:04 --> 00:14:11
actually uh implement AI in in

00:14:07 --> 00:14:14
essentially more and more critical use

00:14:10 --> 00:14:16
cases because the employees that are

00:14:13 --> 00:14:17
using those systems understand that they

00:14:15 --> 00:14:19
do actually have to do the work to

00:14:16 --> 00:14:21
verify it. And then the only question is

00:14:18 --> 00:14:23
what is that ratio of of time it took

00:14:20 --> 00:14:24
to verify versus if I had done it myself

00:14:22 --> 00:14:27
and how much efficiency gained for

00:14:23 --> 00:14:29
whatever that workflow is. Um but we are

00:14:26 --> 00:14:31
we're going from probably like two and a

00:14:28 --> 00:14:34
half years ago where there was you know

00:14:30 --> 00:14:36
this instant excitement as as to oh my

00:14:33 --> 00:14:38
god this is going to be the greatest

00:14:35 --> 00:14:40
hing of all time to a reality check

00:14:37 --> 00:14:41
within 3 to 6 months because everybody

00:14:39 --> 00:14:43
was like hallucination is going to be

00:14:40 --> 00:14:46
the the massive you know kind of problem

00:14:42 --> 00:14:47
to now a couple years later after that

00:14:45 --> 00:14:49
which is like okay like we're we're

00:14:46 --> 00:14:51
seeing the hallucination rates shrink

00:14:48 --> 00:14:53
we're seeing the quality of the outputs

00:14:50 --> 00:14:54
increase and we understand that you do

00:14:52 --> 00:14:56
have to go and review the work that

00:14:53 --> 00:14:58
hese AI you know agents are doing and

00:14:55 --> 00:14:59
that that takes on a different form

00:14:57 --> 00:15:00
based depending on the use case. So in

00:14:58 --> 00:15:02
the form of coding that means just like

00:14:59 --> 00:15:03
you just had to go review the code in

00:15:01 --> 00:15:05
the in the uh

00:15:02 --> 00:15:06
>> which you had to do anyway. Seems people

00:15:04 --> 00:15:08
seem to be forgetting

00:15:05 --> 00:15:09
>> you you had to do anyway but but like

00:15:07 --> 00:15:11
there was probably at least a little bit

00:15:08 --> 00:15:14
of like theory as to like what part you

00:15:10 --> 00:15:15
should go review with extra level of

00:15:13 --> 00:15:16
detail because you kind of knew the

00:15:14 --> 00:15:18
person you were working with.

00:15:15 --> 00:15:20
>> It also implicitly limits the value of

00:15:17 --> 00:15:22
AI which people are uncomfortable with

00:15:19 --> 00:15:23
which it just basically says it helps

00:15:21 --> 00:15:25
people that will know more than the AI

00:15:22 --> 00:15:26
does. And as soon as it knows more than

00:15:24 --> 00:15:28
you know like it starts to actually kind

00:15:25 --> 00:15:29
of biseect the utility.

00:15:27 --> 00:15:31
>> Yeah. Yeah. Basically it's it's super

00:15:28 --> 00:15:33
interesting which is the experts are now

00:15:30 --> 00:15:35
becoming the the productivity of an

00:15:32 --> 00:15:36
expert is is outpacing everything else

00:15:34 --> 00:15:38
which is

00:15:35 --> 00:15:39
>> which was this you know I think we could

00:15:37 --> 00:15:40
have probably predicted it based on

00:15:38 --> 00:15:42
historical events and I think you've got

00:15:40 --> 00:15:45
some good theories about how you know

00:15:41 --> 00:15:47
the skill the the type of skills um that

00:15:44 --> 00:15:49
are that you know that kind of the

00:15:46 --> 00:15:51
right user for these models for the kind

00:15:48 --> 00:15:52
of use case. So we're seeing that, you

00:15:50 --> 00:15:54
know, where the expert engineers are

00:15:51 --> 00:15:55
like like I don't mind that it's a slot

00:15:53 --> 00:15:57
machine where I'm pulling it and I see

00:15:54 --> 00:15:59
what comes out because I know I can I

00:15:56 --> 00:16:00
can still get 10x productivity. It gives

00:15:58 --> 00:16:02
me good ideas and I get it good enough

00:16:00 --> 00:16:04
that that that it's worth that that

00:16:01 --> 00:16:05
productivity gain. Whereas if you were

00:16:03 --> 00:16:07
like not an expert engineer and you did

00:16:04 --> 00:16:09
this flot machine, you probably would

00:16:06 --> 00:16:10
try and go and deploy, you know, all the

00:16:08 --> 00:16:11
ones that were also wrong

00:16:09 --> 00:16:13
>> and you don't actually don't know which

00:16:10 --> 00:16:14
lever to pull, which is a big thing is

00:16:12 --> 00:16:16
like literally knowing the like what to

00:16:13 --> 00:16:17
ask for and what language to use. We'll

00:16:15 --> 00:16:18
get to a better

00:16:16 --> 00:16:20
>> Well, that I I think that this is just

00:16:17 --> 00:16:22
an incredibly important point that

00:16:19 --> 00:16:24
you're making and it it really gets to

00:16:21 --> 00:16:26
the heart of what it means to use a

00:16:23 --> 00:16:29
tool. Like you know, you put me in front

00:16:25 --> 00:16:33
of like a 12-in chopsaw and say like go

00:16:28 --> 00:16:35
fix the fence. Really really bad idea.

00:16:32 --> 00:16:37
I mean, I could go buy one. I I could go

00:16:34 --> 00:16:39
cruise the hungry

00:16:36 --> 00:16:42
>> and I'm like, "Dang, man. I would have a

00:16:38 --> 00:16:45
DeWalt and I could buy it, but it's

00:16:42 --> 00:16:47
really not a particularly good idea,

00:16:44 --> 00:16:50
right?" And and I think that how these

00:16:46 --> 00:16:52
platform shifts happen and why there's

00:16:49 --> 00:16:54
o much excitement over coding is that

00:16:51 --> 00:16:57
well, the best way for a platform shift

00:16:53 --> 00:16:59
o take hold is it's the the experts

00:16:56 --> 00:17:01
that are the the closest you have to an

00:16:58 --> 00:17:04
expert in the new platform. It's who

00:17:00 --> 00:17:06
becomes the most enthusiastic. Yeah.

00:17:03 --> 00:17:08
>> And the biggest users overall. Like I

00:17:05 --> 00:17:10
've been practicing yoga over at um the

00:17:07 --> 00:17:11
Cubberly Community Center in Palo Alto

00:17:09 --> 00:17:13
because the studio is closed remodel.

00:17:10 --> 00:17:16
But what's neat is that was like the OG

00:17:12 --> 00:17:19
place for computer clubs like in the

00:17:15 --> 00:17:21
arly 1990s and the late 80s like if you

00:17:18 --> 00:17:23
ever wanted to meet the computer and you

00:17:20 --> 00:17:25
would go and like this is like Halton

00:17:22 --> 00:17:27
Catch Fire like you and it's like like a

00:17:24 --> 00:17:30
bunch of people with soldering irons and

00:17:26 --> 00:17:32
like they're that's who and and

00:17:29 --> 00:17:34
you know when a when it didn't work when

00:17:31 --> 00:17:36
something was broken that wasn't like oh

00:17:34 --> 00:17:37
man these things are terrible I'm

00:17:35 --> 00:17:39
wasting all my time. That was like the

00:17:36 --> 00:17:41
whole meeting was like who could get

00:17:38 --> 00:17:43
like one of these new discrete graphics

00:17:40 --> 00:17:45
cards to actually work and debug the

00:17:42 --> 00:17:46
driver? Can anyone print? Is there

00:17:44 --> 00:17:49
anyone in this room who can print in

00:17:45 --> 00:17:50
this new thing called postcript? And I I

00:17:48 --> 00:17:52
think that's what's really happening

00:17:49 --> 00:17:53
right now. And so first it's obvious it

00:17:51 --> 00:17:56
should happen with development and

00:17:52 --> 00:17:57
coding first because they're the most

00:17:55 --> 00:17:59
forgiving. Yeah.

00:17:56 --> 00:18:01
>> And the most understanding of like

00:17:58 --> 00:18:02
what's a bug, what's a thing that can

00:18:00 --> 00:18:05
ever get fixed. And the thing to watch

00:18:01 --> 00:18:07
for is no one is saying that coding

00:18:04 --> 00:18:09
can't get fixed, right? Like whatever

00:18:06 --> 00:18:12
it's been generating that's bad for like

00:18:08 --> 00:18:14
a 2x coder rather than a 10x coder, no

00:18:11 --> 00:18:14
ne is saying, "Well, that'll never be

00:18:13 --> 00:18:16
fixed." Right.

00:18:13 --> 00:18:17
>> And then the next thing that's going to

00:18:15 --> 00:18:19
happen is going to be what I think is

00:18:16 --> 00:18:21
just going to be like the the creation

00:18:18 --> 00:18:23
of words like the the marketing

00:18:20 --> 00:18:25
document, the positioning document, all

00:18:22 --> 00:18:27
of this long form stuff where if you're

00:18:24 --> 00:18:29
ally good at that job,

00:18:26 --> 00:18:31
>> you you can you know the right questions

00:18:28 --> 00:18:33
to ask, you know what looks good and

00:18:30 --> 00:18:34
then you can you can get really domain

00:18:32 --> 00:18:36
specific like on the next you know the

00:18:33 --> 00:18:39
next level is like oh I need to

00:18:35 --> 00:18:41
understand like um a competitor which

00:18:38 --> 00:18:42
then is using real information from the

00:18:40 --> 00:18:44
internet in real time not just

00:18:41 --> 00:18:46
atistical and then you're like They

00:18:43 --> 00:18:46
already know what the competitor does,

00:18:45 --> 00:18:48
>> right?

00:18:45 --> 00:18:50
>> Like they're they're And then my

00:18:47 --> 00:18:52
favorite scenario is the one that just

00:18:49 --> 00:18:54
constantly just has these aha moments is

00:18:51 --> 00:18:56
attack this thing I just wrote.

00:18:53 --> 00:18:58
>> I'm not interested in you getting adding

00:18:55 --> 00:19:00
m dashes and making it a little bit

00:18:57 --> 00:19:02
better. I just want to know what did I

00:18:59 --> 00:19:05
miss? You said one I think recently on

00:19:01 --> 00:19:05
this last one about like here's my

00:19:04 --> 00:19:08
earning statement.

00:19:04 --> 00:19:11
>> Yeah. the the for people that's the

00:19:07 --> 00:19:14
thing you read that you read after to

00:19:10 --> 00:19:17
the analyst that now like attack it like

00:19:13 --> 00:19:19
an analyst and there's like 6,000 hours

00:19:16 --> 00:19:20
per company of analyst questions. it

00:19:18 --> 00:19:22
knows what they're gonna they only ask

00:19:19 --> 00:19:25
like three questions anyway expense line

00:19:21 --> 00:19:26
you know and I I feel like this is the

00:19:24 --> 00:19:27
thing that

00:19:25 --> 00:19:28
>> do not watch this if you're an analyst

00:19:26 --> 00:19:30
at this

00:19:27 --> 00:19:32
>> and this is not any advice about being

00:19:29 --> 00:19:34
an analyst

00:19:31 --> 00:19:36
>> but I this is what what's really going

00:19:33 --> 00:19:37
to happen with with writing and then

00:19:35 --> 00:19:39
it's going to happen with PowerPoint and

00:19:36 --> 00:19:40
slides and then it's going to happen

00:19:38 --> 00:19:42
with video and it

00:19:39 --> 00:19:45
>> but it's but it's really important to

00:19:41 --> 00:19:48
call out um which is you're getting the

00:19:44 --> 00:19:50
consensus mean response and so in the

00:19:47 --> 00:19:52
limit it it's offloading a lot of kind

00:19:49 --> 00:19:53
of busy work if you're a professional

00:19:51 --> 00:19:54
ike you're a professional you actually

00:19:52 --> 00:19:55
know all of these things you just don't

00:19:53 --> 00:19:58
have the time to go through all of it

00:19:54 --> 00:20:00
and you may not remember it. So so in a

00:19:57 --> 00:20:02
way it's it's it's it's productivity

00:19:59 --> 00:20:03
helpful but it's not you know solving

00:20:01 --> 00:20:06
some problems that where you know you

00:20:02 --> 00:20:08
are a particular expert in this is maybe

00:20:05 --> 00:20:09
why for those that are non-expert it's a

00:20:07 --> 00:20:10
little bit more threatening because it

00:20:08 --> 00:20:13
can do that job.

00:20:09 --> 00:20:14
>> Yeah. Well, the the maybe to to bridge a

00:20:12 --> 00:20:17
view and probably throw in a different

00:20:13 --> 00:20:18
angent like so so Stephen you're asking

00:20:16 --> 00:20:20
like so where is the enterprise now? So

00:20:17 --> 00:20:22
so that was the coding piece. I think

00:20:19 --> 00:20:24
what you're seeing this is you know kind

00:20:21 --> 00:20:26
of clear understanding which is okay the

00:20:23 --> 00:20:28
what I'm going to get out will be

00:20:25 --> 00:20:30
correlated to what I put in. So how

00:20:27 --> 00:20:32
precise I put the prompt what what like

00:20:29 --> 00:20:34
I think prompting doesn't go away

00:20:31 --> 00:20:36
anytime soon simply because the leverage

00:20:33 --> 00:20:38
you get on the set of instructions

00:20:35 --> 00:20:40
you're going to give the AI at the start

00:20:37 --> 00:20:42
is still going to be massive. So we see

00:20:39 --> 00:20:43
>> what what what what would the prompting

00:20:41 --> 00:20:45
went away? What would you end up with?

00:20:42 --> 00:20:47
>> Well, I mean two years ago, I think the

00:20:44 --> 00:20:49
like people were like like you'll just

00:20:46 --> 00:20:51
ell the AGI what you wanted to produce.

00:20:48 --> 00:20:53
>> Oh, just

00:20:50 --> 00:20:55
here's just one prompt. Like you unbox

00:20:52 --> 00:20:56
it and you say go do something a be a

00:20:54 --> 00:20:57
software engineer.

00:20:55 --> 00:20:59
>> No, literally that was like that was

00:20:56 --> 00:21:00
like an open debate and it was like no,

00:20:58 --> 00:21:01
you're probably missing the fact that

00:20:59 --> 00:21:04
what is in my head is going to be

00:21:00 --> 00:21:05
unbelievably gerine to the thing that

00:21:03 --> 00:21:07
I'm trying to produce and like I have to

00:21:04 --> 00:21:09
somehow give you that context. Like

00:21:06 --> 00:21:10
there's no world where you have that

00:21:08 --> 00:21:11
context without me telling it to you.

00:21:09 --> 00:21:13
And now you're seeing it like you're

00:21:10 --> 00:21:14
seeing these incre in incredibly

00:21:12 --> 00:21:16
unhinged prompts which are like pages

00:21:13 --> 00:21:18
long. Yeah. And the output you're

00:21:16 --> 00:21:19
getting from that is actually like way

00:21:17 --> 00:21:21
better than if you didn't give it that

00:21:18 --> 00:21:22
context. So I think there's a clear

00:21:20 --> 00:21:24
understanding of of that side on the

00:21:22 --> 00:21:25
nterprise use cases and then a clear

00:21:23 --> 00:21:27
understanding that you've got to go and

00:21:24 --> 00:21:29
review it. And then and then on on this

00:21:26 --> 00:21:32
point about like well you know you know

00:21:28 --> 00:21:34
hat what is I just have to say

00:21:31 --> 00:21:35
>> we forget that formal languages came out

00:21:33 --> 00:21:37
of natural languages for a reason. We

00:21:34 --> 00:21:39
didn't start we didn't like start with

00:21:36 --> 00:21:40
like we didn't start with like formal

00:21:38 --> 00:21:42
English like oh it's much easier to

00:21:39 --> 00:21:43
speak in English just speak in English.

00:21:41 --> 00:21:44
is the opposite is like we have this

00:21:42 --> 00:21:46
natural language we're like it's very

00:21:43 --> 00:21:48
tough to convey the information that I

00:21:45 --> 00:21:49
want to you and I are both experts we

00:21:47 --> 00:21:51
understand the solution space so let's

00:21:48 --> 00:21:52
communicate more efficiently right so to

00:21:50 --> 00:21:54
think that this somehow wouldn't happen

00:21:52 --> 00:21:54
>> and that's what jargon is

00:21:53 --> 00:21:56
>> of course

00:21:53 --> 00:21:58
>> like jargon is just a formalized way

00:21:55 --> 00:22:00
that people who have domain expertise

00:21:57 --> 00:22:04
talk to each other so so the thing that

00:21:59 --> 00:22:06
is kind of kind of the most like

00:22:03 --> 00:22:08
fun to kind of think about right now at

00:22:05 --> 00:22:10
least is and and maybe you could give us

00:22:08 --> 00:22:12
a little history lesson on this in in

00:22:09 --> 00:22:16
kind of interesting parallel

00:22:11 --> 00:22:17
So when does the style of work change

00:22:15 --> 00:22:20
because of the tool

00:22:16 --> 00:22:22
>> versus the tool sort of adapted to the

00:22:19 --> 00:22:24
style of work? And so what I'm starting

00:22:21 --> 00:22:26
we're like only in day one of this. But

00:22:23 --> 00:22:28
what I'm starting to see kind of some

00:22:25 --> 00:22:30
patterns emerge which is we thought

00:22:28 --> 00:22:32
agents would go and learn how we work

00:22:30 --> 00:22:34
and then automate that and then the

00:22:31 --> 00:22:36
question and so basically agents conform

00:22:33 --> 00:22:38
to how we work. The question is when is

00:22:35 --> 00:22:40
the moment when we conform to how agents

00:22:37 --> 00:22:41
are best used? Yeah. And you're you're

00:22:39 --> 00:22:43
seeing this in a couple areas. So you're

00:22:40 --> 00:22:44
seeing this in engineering to start with

00:22:42 --> 00:22:46
which is like people are saying okay I'm

00:22:43 --> 00:22:48
gonna have agents and then sub agents

00:22:45 --> 00:22:49
for parts of the codebase and then I'm

00:22:47 --> 00:22:51
going to give them kind of read me files

00:22:48 --> 00:22:52
that the agents read and then and then

00:22:50 --> 00:22:54
I'm going to actually optimize my

00:22:51 --> 00:22:55
codebase for the agent as opposed to the

00:22:53 --> 00:22:58
other way around in other forms of

00:22:54 --> 00:23:00
knowledge work. So within how we use Box

00:22:57 --> 00:23:02
um with with our AI product like you're

00:22:59 --> 00:23:04
starting to see people like basically

00:23:01 --> 00:23:07
tell the agent like its complete you

00:23:03 --> 00:23:09
know job and the the workflow is now

00:23:06 --> 00:23:10
starting to be almost like the agent is

00:23:08 --> 00:23:12
almost dictating the workflow in the

00:23:09 --> 00:23:14
future as opposed to it's just mapping

00:23:11 --> 00:23:16
to the existing workflow. So I don't

00:23:13 --> 00:23:17
know like what the history is on this of

00:23:15 --> 00:23:19
like when does when does the work

00:23:16 --> 00:23:22
pattern itself shift because of what the

00:23:18 --> 00:23:24
technology is capable of. I think I

00:23:21 --> 00:23:26
think probably where this goes has to be

00:23:23 --> 00:23:28
some version of that which is which is

00:23:25 --> 00:23:29
it's not going to just be that agents

00:23:27 --> 00:23:31
just plop into how we currently do our

00:23:28 --> 00:23:32
work and then and then just automate

00:23:30 --> 00:23:34
verything. I do think you start to

00:23:31 --> 00:23:37
change what we actually what the work is

00:23:34 --> 00:23:39
itself and then and then agents actually

00:23:36 --> 00:23:40
go in and accelerate that.

00:23:38 --> 00:23:42
>> Well, as important as that is, it's

00:23:39 --> 00:23:45
actually more important. Okay. Like

00:23:41 --> 00:23:47
because what what happens is where there

00:23:44 --> 00:23:50
's to reuse the word in a different

00:23:46 --> 00:23:53
his anthropomorphization of work. What

00:23:49 --> 00:23:56
happens in is that the first tools

00:23:52 --> 00:23:58
actually anthropomorphize the work. And

00:23:55 --> 00:24:00
so like if you go back this is every

00:23:57 --> 00:24:02
single evolution of computing. I mean

00:23:59 --> 00:24:04
like how long did it take for Steve Jobs

00:24:01 --> 00:24:05
to get rid of the number buttons on a

00:24:03 --> 00:24:07
smartphone

00:24:04 --> 00:24:09
>> like like they they still had number

00:24:06 --> 00:24:11
buttons or like you look at at cars and

00:24:08 --> 00:24:13
until Elon got rid of all the controls,

00:24:10 --> 00:24:14
everybody kept all of the controls. I

00:24:12 --> 00:24:16
don't want to get in that fight. But but

00:24:14 --> 00:24:18
like the what happened with every

00:24:15 --> 00:24:19
technology shift is, you know, if you if

00:24:17 --> 00:24:23
you were to look at what accounting

00:24:18 --> 00:24:26
software looked like in the 60s before

00:24:22 --> 00:24:28
IBM said stop. We all use double entry,

00:24:25 --> 00:24:30
but we need to have people skilled in

00:24:27 --> 00:24:32
how computers can do the accounting, not

00:24:30 --> 00:24:33
how people can. Because we're never

00:24:31 --> 00:24:37
going to figure out how to close the

00:24:32 --> 00:24:38
books if we have to automate this whole

00:24:36 --> 00:24:41
room of people with green eye shades

00:24:38 --> 00:24:42
that have a manual process based on how

00:24:40 --> 00:24:44
far apart the desks were,

00:24:41 --> 00:24:47
>> right? and and everything that happened

00:24:43 --> 00:24:49
with the rise of of PCs and personal

00:24:46 --> 00:24:50
productivity started off and I always

00:24:48 --> 00:24:52
use this example because I've watched it

00:24:49 --> 00:24:55
happen like five times now which is the

00:24:51 --> 00:24:57
first PCs that did word processing

00:24:54 --> 00:25:00
the biggest request was how do I fill in

00:24:56 --> 00:25:03
like expense reports and so the whole

00:24:59 --> 00:25:05
this whole world grew up of tractorfed

00:25:02 --> 00:25:08
paper that was preprinted with the

00:25:04 --> 00:25:10
xpense report and so then software we

00:25:07 --> 00:25:13
wrote all of this code like are you

00:25:09 --> 00:25:15
sing an Avery 2942 to expense report or

00:25:12 --> 00:25:17
is it a New England business systems

00:25:14 --> 00:25:19
A397

00:25:16 --> 00:25:20
and and like you know and then you had

00:25:18 --> 00:25:23
like these adjustments in the print

00:25:19 --> 00:25:25
dialogue like 0.208 208 in and you you

00:25:22 --> 00:25:28
moved little things and then you would

00:25:24 --> 00:25:29
print out like ate dinner $22 and that

00:25:27 --> 00:25:32
was all you printed. And then someone

00:25:28 --> 00:25:33
said, you know, we could use the

00:25:31 --> 00:25:35
computer

00:25:32 --> 00:25:36
>> to actually print the whole thing,

00:25:34 --> 00:25:38
>> right?

00:25:35 --> 00:25:42
>> And then like fast forward and finally

00:25:37 --> 00:25:43
Concur said, you know, why just take a

00:25:41 --> 00:25:45
picture? Why not just take a picture of

00:25:42 --> 00:25:47
the receipt and then we could do all of

00:25:44 --> 00:25:49
it? And so then the whole thing gets

00:25:46 --> 00:25:51
inverted and and every single business

00:25:48 --> 00:25:53
process ended up being like that. And

00:25:50 --> 00:25:55
and then there are things that really

00:25:52 --> 00:25:57
do change the tools. Like when

00:25:54 --> 00:25:59
email came along, you know, it used to

00:25:56 --> 00:26:02
be to prepare an agenda for a meeting,

00:25:58 --> 00:26:04
>> somebody would open up word and type in

00:26:01 --> 00:26:05
all the things and then print it out and

00:26:03 --> 00:26:08
everybody would show up the meeting with

00:26:04 --> 00:26:10
is very well for and now and then like

00:26:07 --> 00:26:12
mail came out and that whole use case

00:26:09 --> 00:26:14
for Word just evaporated.

00:26:11 --> 00:26:17
>> Yeah. and and then an email agenda

00:26:13 --> 00:26:18
became no formatting, nothing, just like

00:26:16 --> 00:26:19
here are the eight things we're gonna

00:26:17 --> 00:26:21
talk about and you show up and

00:26:18 --> 00:26:22
everybody's like did you get the agenda?

00:26:20 --> 00:26:24
>> You know what's interesting about the AI

00:26:21 --> 00:26:27
one is it's kind of it's like we're

00:26:23 --> 00:26:29
seeing the same thing but visav AI. So

00:26:26 --> 00:26:30
nobody really predicted the generative

00:26:28 --> 00:26:33
stuff and we've had AI for a very long

00:26:29 --> 00:26:34
time. So we had chat bots, we've had,

00:26:32 --> 00:26:36
you know, and so you had these kind of

00:26:33 --> 00:26:37
like AI shaped holes in the enterprise

00:26:35 --> 00:26:39
for a long time. And a lot of the

00:26:36 --> 00:26:40
mistakes that we see today is people are

00:26:38 --> 00:26:42
taking the generative stuff and trying

00:26:39 --> 00:26:44
to kind of cram it into the old models

00:26:41 --> 00:26:46
when it's really a new behavior that's

00:26:43 --> 00:26:49
emerging that's very much more in like

00:26:45 --> 00:26:51
it used to be you would centrally sell

00:26:48 --> 00:26:52
you know AI to some platform team and

00:26:50 --> 00:26:54
then they would kind of try to get the

00:26:51 --> 00:26:56
NLP thing to work or the voice to work

00:26:53 --> 00:26:57
for like talking to people on the phone

00:26:55 --> 00:26:59
for support and it was this kind of very

00:26:56 --> 00:27:01
central. a lot of the adoption that we

00:26:58 --> 00:27:02
see is like much more individual for

00:27:00 --> 00:27:04
example and so I just think that there

00:27:02 --> 00:27:05
is a bit of a mismatch as we're seeing

00:27:03 --> 00:27:07
now that it's getting ironed out too

00:27:04 --> 00:27:10
>> well and and so I I think the question

00:27:06 --> 00:27:12
is is yeah are we in the phase where

00:27:09 --> 00:27:15
we're trying to graft the agents and and

00:27:11 --> 00:27:17
work in basically the what we've been

00:27:14 --> 00:27:19
doing for 30 40 years of software

00:27:16 --> 00:27:21
>> and is this going to be actually like a

00:27:18 --> 00:27:22
like the first real step function

00:27:20 --> 00:27:24
shift we've seen in what the workflow

00:27:21 --> 00:27:25
itself should look like

00:27:23 --> 00:27:28
>> oh we but we are I mean like you if you

00:27:24 --> 00:27:30
know remember people like I I tried

00:27:27 --> 00:27:30
to jam the internet into office,

00:27:29 --> 00:27:32
>> right?

00:27:29 --> 00:27:34
>> And it and and it was fun to watch,

00:27:32 --> 00:27:37
>> but I mean you were you were not

00:27:33 --> 00:27:40
watching it, but but but like but but

00:27:36 --> 00:27:42
everybody around was trying to jam the

00:27:39 --> 00:27:44
internet into their product because

00:27:41 --> 00:27:47
that's the only way you could envision

00:27:43 --> 00:27:48
it. And it it didn't really like you you

00:27:46 --> 00:27:50
were like, well, where else would the

00:27:47 --> 00:27:51
internet go?

00:27:49 --> 00:27:53
>> Like there's no word processor on the

00:27:50 --> 00:27:55
internet. Like there's no spreadsheet on

00:27:52 --> 00:27:56
the internet. And and then other people

00:27:54 --> 00:27:59
would be like, well, let me just try to

00:27:56 --> 00:28:01
implement Excel using these seven HTML

00:27:58 --> 00:28:02
tags with no script. That turns out to

00:28:00 --> 00:28:04
not be a really good idea either. The

00:28:01 --> 00:28:05
best was like, let's do PowerPoint.

00:28:03 --> 00:28:07
Well, how do you do it? You give them

00:28:04 --> 00:28:08
five edit controls, tell them their

00:28:06 --> 00:28:10
bullet points, and then we'll generate a

00:28:07 --> 00:28:11
GIF on the back end and send it back to

00:28:09 --> 00:28:14
you as the slide. Yeah. Okay. That that

00:28:10 --> 00:28:14
was not and so there was that whole

00:28:13 --> 00:28:16
like

00:28:13 --> 00:28:18
>> I think actually maybe the main point is

00:28:15 --> 00:28:19
just the durability of Office. It

00:28:17 --> 00:28:20
ranscends all

00:28:18 --> 00:28:22
>> disruptions. I like to think it pretty

00:28:20 --> 00:28:25
much rises above everything. But but the

00:28:22 --> 00:28:26
thing is is that that's where we are now

00:28:24 --> 00:28:27
is everybody

00:28:25 --> 00:28:29
>> and you know like

00:28:26 --> 00:28:30
>> do but do you think

00:28:28 --> 00:28:32
>> I mean just to dig a little bit. So, do

00:28:30 --> 00:28:34
you think this is similar to the

00:28:31 --> 00:28:35
internet in that it's a consumption

00:28:33 --> 00:28:36
layer change? Because I always view the

00:28:34 --> 00:28:37
internet as very much a consumption

00:28:35 --> 00:28:39
layer change like I go to, you know,

00:28:36 --> 00:28:42
instead of going to my computer, I go to

00:28:38 --> 00:28:44
the internet. But otherwise, things kind

00:28:41 --> 00:28:46
of were the same where AI has got this

00:28:43 --> 00:28:49
weird quirk which for the first time I

00:28:45 --> 00:28:51
can recall programs are abdicating logic

00:28:48 --> 00:28:53
to a third party. Like we've always

00:28:50 --> 00:28:54
abdicated resources, right? Like so we'd

00:28:52 --> 00:28:55
be like, okay, I'll use your discs or

00:28:53 --> 00:28:57
whatever, but like I'm writing the

00:28:54 --> 00:28:58
logic.

00:28:56 --> 00:28:59
>> But this time it feels like we're

00:28:57 --> 00:29:02
changing the consumption layer. So like

00:28:58 --> 00:29:04
you know when my son you know talks to

00:29:01 --> 00:29:06
an AI character and you know he's not

00:29:03 --> 00:29:08
going to wsfargo.com he's going to an AI

00:29:05 --> 00:29:09
character and so like that's changing

00:29:07 --> 00:29:12
kind of how we're interacting with the

00:29:08 --> 00:29:15
computer but also these programs are no

00:29:11 --> 00:29:17
longer kind of written by a human in the

00:29:14 --> 00:29:19
same way. So I feel like the change is

00:29:16 --> 00:29:21
maybe a bit more sophisticated. Oh, I

00:29:18 --> 00:29:23
think but this is the this is why it's a

00:29:20 --> 00:29:26
platform shift and not just an

00:29:22 --> 00:29:28
application shift like where where each

00:29:25 --> 00:29:30
platform shift changes the

00:29:27 --> 00:29:32
abstraction layer with which you

00:29:29 --> 00:29:34
interact with computing but what that

00:29:31 --> 00:29:36
also does is it changes what you write

00:29:34 --> 00:29:37
the programs to.

00:29:35 --> 00:29:38
>> Do you do you remember ever abdicating

00:29:36 --> 00:29:40
logic?

00:29:37 --> 00:29:43
>> Oh, here's a great here's an example of

00:29:39 --> 00:29:45
how disruptive this can be. the the

00:29:42 --> 00:29:47
first word processors in in in the DOSs

00:29:44 --> 00:29:49
era, the character mode era, they all

00:29:46 --> 00:29:52
implemented their own print drivers and

00:29:48 --> 00:29:55
clipboard. So if you were Lotus and you

00:29:51 --> 00:29:57
wanted to put a chart into a memo, you

00:29:54 --> 00:29:59
you couldn't because you didn't have

00:29:56 --> 00:30:00
a word. You didn't sell a word

00:29:58 --> 00:30:02
processor. So you actually made a

00:29:59 --> 00:30:04
separate program to make something that

00:30:01 --> 00:30:06
he leading word processor could

00:30:03 --> 00:30:09
consume. And if you were word perfect,

00:30:05 --> 00:30:11
your ads said, "We support 1,700

00:30:08 --> 00:30:13
printers." like and you won reviews

00:30:10 --> 00:30:14
because you had 7,800 and Microsoft had

00:30:12 --> 00:30:14
1,200.

00:30:13 --> 00:30:16
>> That's so

00:30:14 --> 00:30:16
>> and so then along comes

00:30:15 --> 00:30:18
>> that's a great one

00:30:15 --> 00:30:20
>> and then so Windows comes along and and

00:30:17 --> 00:30:22
if you were and if you were trying to

00:30:19 --> 00:30:24
enter the word processing business step

00:30:21 --> 00:30:26
one I need to hire a team of 17 people

00:30:23 --> 00:30:29
to build device drivers for Epson and

00:30:25 --> 00:30:30
Okidata and Canon printers because you

00:30:28 --> 00:30:33
can't get them anywhere. Microsoft came

00:30:29 --> 00:30:35
along and for Windows built print

00:30:32 --> 00:30:37
drivers and a clipboard and all of a

00:30:34 --> 00:30:38
sudden and also Macintosh did it all of

00:30:36 --> 00:30:39
a sudden

00:30:37 --> 00:30:41
>> you there was a way that two

00:30:38 --> 00:30:42
applications that had no a priory

00:30:40 --> 00:30:43
knowledge of each other

00:30:41 --> 00:30:45
>> good

00:30:42 --> 00:30:47
>> but of course if you were word perfect

00:30:44 --> 00:30:50
or Lotus that's a dis you got creamed by

00:30:46 --> 00:30:52
that because your ability to control

00:30:49 --> 00:30:54
your information and so and what

00:30:51 --> 00:30:57
happened was a bunch of developers were

00:30:53 --> 00:31:00
like wow this is cool because now I'm

00:30:56 --> 00:31:02
just by when we did C++ for Windows

00:30:59 --> 00:31:04
like we were like where the demo in fact

00:31:01 --> 00:31:06
at that Cberly community center I would

00:31:03 --> 00:31:08
go and I would show brand new Windows

00:31:05 --> 00:31:10
programmers in 1990 like hey you don't

00:31:08 --> 00:31:12
have to write print drivers and use the

00:31:09 --> 00:31:14
clipboard and like literally standing

00:31:11 --> 00:31:17
ovation of you know 10 people at the

00:31:13 --> 00:31:19
thing and and but but they were like

00:31:16 --> 00:31:21
more than happy yeah to let data

00:31:18 --> 00:31:23
interchange between product because they

00:31:20 --> 00:31:23
were like that's nothing but opportunity

00:31:22 --> 00:31:26
for me

00:31:22 --> 00:31:28
>> can we can you like they they probably

00:31:25 --> 00:31:29
from an emotional standpoint felt

00:31:27 --> 00:31:31
exactly the same way as like a vibe

00:31:28 --> 00:31:33
coder does today which is like you've

00:31:30 --> 00:31:34
just given me this platform that and it

00:31:32 --> 00:31:36
was just a

00:31:33 --> 00:31:39
>> pring code for Windows book was like

00:31:35 --> 00:31:40
this big but the writing a device driver

00:31:38 --> 00:31:42
for an Epson printer was this big

00:31:40 --> 00:31:44
writing it for a Canon printer was this

00:31:41 --> 00:31:45
big and

00:31:43 --> 00:31:46
>> but I'm I'm just actually trying to

00:31:44 --> 00:31:48
think of like that but the paradigm

00:31:45 --> 00:31:50
shift is the same which is there's been

00:31:47 --> 00:31:51
many times where we've reduced the

00:31:49 --> 00:31:53
amount of work a developer takes but I

00:31:50 --> 00:31:55
just don't remember ever where the

00:31:52 --> 00:31:56
programmer advocates logic like so for

00:31:54 --> 00:31:57
example

00:31:55 --> 00:32:00
>> SDM didn't

00:31:56 --> 00:32:02
>> not logic Like I I would always say what

00:31:59 --> 00:32:02
is correct and what's not correct,

00:32:01 --> 00:32:04
right?

00:32:01 --> 00:32:07
>> I think you undersold it though.

00:32:03 --> 00:32:08
>> Could No, this is the thing by the way

00:32:06 --> 00:32:10
everybody that Martin invented and

00:32:07 --> 00:32:11
worked on that stuff like but but it's a

00:32:09 --> 00:32:12
big deal.

00:32:10 --> 00:32:16
>> Maybe we should postmortem your pitch at

00:32:11 --> 00:32:18
he time if if you mean well no let me

00:32:15 --> 00:32:21
like logic specifically which is I am

00:32:18 --> 00:32:25
writing an app. My app is whatever some

00:32:20 --> 00:32:27
vertical SAS app for a certain customer

00:32:24 --> 00:32:30
base. The answer the app gives is based

00:32:26 --> 00:32:31
on logic that I've written historically,

00:32:29 --> 00:32:33
right? Like if I run it on the cloud,

00:32:30 --> 00:32:35
the cloud is not producing an answer.

00:32:32 --> 00:32:37
It's providing resources. If I'm using

00:32:34 --> 00:32:39
your device driver, it's, you know,

00:32:36 --> 00:32:42
providing access to a device resources.

00:32:38 --> 00:32:43
But if I'm like, hey, large model, tell

00:32:41 --> 00:32:46
me the answer here. You're actually

00:32:42 --> 00:32:48
abdicating application. I'm maybe you're

00:32:45 --> 00:32:49
right. Maybe this

00:32:47 --> 00:32:52
>> I think what you're you're you're almost

00:32:48 --> 00:32:55
playing like incumbent in in the sense

00:32:51 --> 00:32:57
of trying to no trying to like decide

00:32:54 --> 00:33:01
this is abdicating the logic and this

00:32:56 --> 00:33:02
n't when in fact like it it really was

00:33:00 --> 00:33:05
like a huge competitive advantage for

00:33:01 --> 00:33:07
word perfect and and they didn't want to

00:33:04 --> 00:33:09
give it up and they they fought against

00:33:06 --> 00:33:11
it and the number of people who didn't

00:33:08 --> 00:33:13
want to do like great clip and the next

00:33:10 --> 00:33:15
example of course is the browser where

00:33:12 --> 00:33:17
people literally gave up

00:33:14 --> 00:33:19
>> like you in a in Windows Windows or in

00:33:16 --> 00:33:21
Mac, you could rasterize anything you

00:33:18 --> 00:33:22
wanted. You wanted a button that you

00:33:20 --> 00:33:24
pushed and it spun and it animated like

00:33:22 --> 00:33:27
a rainbow. You could do that in your

00:33:23 --> 00:33:28
product. But then the web came along and

00:33:26 --> 00:33:31
you're like, "Wow, I have to use a gray

00:33:28 --> 00:33:32
button that says submit

00:33:30 --> 00:33:34
>> and and that was like

00:33:31 --> 00:33:35
>> Yeah, because the point we do use a

00:33:33 --> 00:33:37
bunch of third party things."

00:33:34 --> 00:33:39
>> Well, but it took a long time for those

00:33:36 --> 00:33:41
to show up. And so early in the

00:33:38 --> 00:33:43
internet, the magazines in particular

00:33:40 --> 00:33:44
and and the printed media were the ones

00:33:42 --> 00:33:46
who absolutely wouldn't go to the

00:33:43 --> 00:33:48
internet because they would not give up

00:33:46 --> 00:33:50
their ability to format

00:33:47 --> 00:33:52
>> and they and this is is another part

00:33:49 --> 00:33:53
about the the tooling and where where

00:33:51 --> 00:33:55
what happen what's going to happen with

00:33:52 --> 00:33:57
AI is that

00:33:54 --> 00:34:00
>> like a huge amount of the productivity

00:33:56 --> 00:34:02
software space today is like the

00:33:59 --> 00:34:03
preparation of output like office is

00:34:01 --> 00:34:06
basically a format debugger,

00:34:02 --> 00:34:08
>> right? Like all it is is like 7,000

00:34:05 --> 00:34:10
commands for how to do kerning and bold

00:34:07 --> 00:34:12
and italic and like it turns out AI not

00:34:09 --> 00:34:14
only doesn't care. Yeah, you could ask

00:34:11 --> 00:34:15
it to make whatever you want. Like you

00:34:13 --> 00:34:18
could just say I'd like this to be a

00:34:14 --> 00:34:20
double index pie chart thing that that's

00:34:17 --> 00:34:22
not a thing. I just but but you you can

00:34:19 --> 00:34:23
do that and it it will just figure out

00:34:21 --> 00:34:26
something that looks like that and

00:34:22 --> 00:34:28
you'll go cool. And this was where to

00:34:25 --> 00:34:30
this disempowering and experts and who's

00:34:27 --> 00:34:32
not an expert. When when productivity

00:34:29 --> 00:34:34
software arose, the big thing about it

00:34:31 --> 00:34:36
was that there were people who figured

00:34:33 --> 00:34:38
out how to like make like killer charts.

00:34:35 --> 00:34:40
Like Benet Evans, like killer chart guy.

00:34:37 --> 00:34:42
Yes. And there were people who are like

00:34:39 --> 00:34:43
very meeting started with how did you

00:34:41 --> 00:34:45
make that chart? Like I could be on an

00:34:42 --> 00:34:46
airplane and somebody would be like

00:34:44 --> 00:34:48
making a

00:34:45 --> 00:34:50
>> so interesting. So like in this case the

00:34:47 --> 00:34:51
abdication is like actually what's the

00:34:49 --> 00:34:53
way to to visually represent the data

00:34:50 --> 00:34:54
which is absolutely

00:34:52 --> 00:34:56
>> right. And it turns out well because

00:34:53 --> 00:34:58
like 90% of the people never really got

00:34:55 --> 00:35:01
o be expert at doing that task even

00:34:57 --> 00:35:02
though 90% of the tool is about like to

00:35:00 --> 00:35:03
even so what happens is each

00:35:01 --> 00:35:06
>> but the programmer didn't abdicate the

00:35:02 --> 00:35:08
logic in this case this is the user

00:35:05 --> 00:35:10
>> but you know what's the user what's the

00:35:07 --> 00:35:12
programmer in that and and in fact what

00:35:09 --> 00:35:14
he programmer was doing was like like

00:35:11 --> 00:35:16
we would invent the thing called wizards

00:35:13 --> 00:35:18
or whatever you know and that would make

00:35:15 --> 00:35:20
a whole bunch of choices for you

00:35:17 --> 00:35:22
stylesheets or whatever and so in a

00:35:19 --> 00:35:24
sense we were making a bunch of choices

00:35:21 --> 00:35:26
for the user which to the experts looked

00:35:23 --> 00:35:29
like disempowering the experts who were

00:35:25 --> 00:35:30
tweaking all and so I this is all like

00:35:28 --> 00:35:31
this

00:35:29 --> 00:35:33
>> there there's some Steve Jobs quote that

00:35:30 --> 00:35:35
he loves about Schopenhau how if you've

00:35:32 --> 00:35:37
seen the the conjur

00:35:34 --> 00:35:39
>> if you've seen the conjurer it's not a

00:35:36 --> 00:35:40
trick anymore and I really feel like

00:35:38 --> 00:35:42
this is like the third or fourth time

00:35:39 --> 00:35:44
that this has happened just in in my

00:35:42 --> 00:35:45
lifetime of watching this

00:35:43 --> 00:35:47
>> well so something that's really caught

00:35:44 --> 00:35:49
my attention because it's the most

00:35:46 --> 00:35:51
senior people I know um is that a lot of

00:35:48 --> 00:35:53
very senior developers are spinning up a

00:35:50 --> 00:35:55
lot of background agents like code

00:35:52 --> 00:35:56
agents and they're interfacing at like

00:35:54 --> 00:35:56
the GitHub PR level,

00:35:55 --> 00:35:59
>> right?

00:35:55 --> 00:36:01
>> And so it's not obvious to me why you do

00:35:58 --> 00:36:03
a bunch as opposed to one and it's not

00:36:00 --> 00:36:04
obvious to me why you wouldn't interact

00:36:02 --> 00:36:05
directly. So it feels like something's

00:36:03 --> 00:36:07
going on here, but I'm not quite sure

00:36:04 --> 00:36:10
what and I would love your thoughts.

00:36:06 --> 00:36:13
Well, the the my read on it um uh and

00:36:09 --> 00:36:14
then the qu I guess I would kind of sort

00:36:12 --> 00:36:16
of throw out like what then happens next

00:36:14 --> 00:36:17
as a result of this because because to

00:36:15 --> 00:36:20
me it's actually a little bit of an

00:36:16 --> 00:36:22
epiphany on what the future work design

00:36:19 --> 00:36:23
could look like in this world because

00:36:21 --> 00:36:25
ngineers back to the prior conversation

00:36:22 --> 00:36:28
are just the first to experience this.

00:36:24 --> 00:36:30
But I think what what my my read from

00:36:27 --> 00:36:32
talking to kind of similar folks

00:36:29 --> 00:36:35
that are like all in on this is um is

00:36:31 --> 00:36:37
this mix of basically uh the the

00:36:34 --> 00:36:38
ffectively the context rot problem

00:36:36 --> 00:36:41
which is you know the more that we put

00:36:37 --> 00:36:43
in the context window uh the the more it

00:36:40 --> 00:36:45
gets confused the the lossier the

00:36:42 --> 00:36:46
answers get. And so you have to have

00:36:44 --> 00:36:48
some kind of way to partition what what

00:36:45 --> 00:36:50
an agent should work on. And we see this

00:36:47 --> 00:36:52
in building agents internally, which is,

00:36:49 --> 00:36:54
you know, the panacea that I think we

00:36:51 --> 00:36:55
maybe would have hoped for is like,

00:36:53 --> 00:36:57
well, you just put a million tokens into

00:36:54 --> 00:36:59
the context window and then obviously

00:36:56 --> 00:37:02
>> Oh, so you're saying this is almost like

00:36:58 --> 00:37:03
a counter trend to the the AGI. It's

00:37:01 --> 00:37:06
almost like the is like the opposite.

00:37:02 --> 00:37:07
>> It it's the opposite, but it it's it's

00:37:05 --> 00:37:08
it only works because the models are so

00:37:06 --> 00:37:09
good.

00:37:07 --> 00:37:11
>> Yeah. But you're giving more things more

00:37:08 --> 00:37:12
specific tasks rather than one thing

00:37:10 --> 00:37:14
less specific tasks,

00:37:11 --> 00:37:16
>> right? And so so but like I think this

00:37:13 --> 00:37:17
why it's happening. So basically the

00:37:15 --> 00:37:20
craziest version of this is I was

00:37:16 --> 00:37:22
talking to somebody who who is in

00:37:19 --> 00:37:23
startup land and they have they have to

00:37:21 --> 00:37:25
your point they have all these sub

00:37:22 --> 00:37:28
agents but what's amazing is it maps one

00:37:24 --> 00:37:30
to one uh to each micros service in in

00:37:27 --> 00:37:32
their codebase and so they have an agent

00:37:29 --> 00:37:34
per microser they have effectively a

00:37:31 --> 00:37:37
readme for the agent and that agent owns

00:37:33 --> 00:37:38
the micros service and they I don't know

00:37:36 --> 00:37:40
the the the specific number but let's

00:37:37 --> 00:37:42
just say you could have you know dozens

00:37:39 --> 00:37:43
or hundreds of these things going on and

00:37:41 --> 00:37:45
you're you're effectively mitigating

00:37:42 --> 00:37:47
this issue which If you just said,

00:37:44 --> 00:37:50
"Here's my entire codebase, you know, go

00:37:46 --> 00:37:51
run wild," you know, to one agent,

00:37:49 --> 00:37:53
>> it's it will just, you know, produce

00:37:50 --> 00:37:55
worse and worse code over time because

00:37:52 --> 00:37:57
it's going to have context rot. It's not

00:37:54 --> 00:37:58
going to know exactly what what what

00:37:56 --> 00:38:00
you're trying to do in that one area of

00:37:57 --> 00:38:02
the microser, but the sub agent model

00:37:59 --> 00:38:03
seems to be working for that paradigm.

00:38:01 --> 00:38:05
>> I love this counter pattern because

00:38:02 --> 00:38:07
verybody's like they're going to like,

00:38:04 --> 00:38:09
you know, models will be get, you know,

00:38:06 --> 00:38:10
smarter and you'll give them higher

00:38:08 --> 00:38:11
level tasks and they'll do things

00:38:09 --> 00:38:12
longer. Yes, this is a counter one.

00:38:10 --> 00:38:14
>> I want to tweet that, but you have more

00:38:12 --> 00:38:15
Twitter followers. We can we can

00:38:13 --> 00:38:17
collectively do it.

00:38:14 --> 00:38:18
>> But but but the but then so then the

00:38:16 --> 00:38:20
question is okay so let let's just

00:38:17 --> 00:38:21
assume this works in engineering. You

00:38:19 --> 00:38:24
you have this interesting dynamic which

00:38:20 --> 00:38:25
is well then that means that like some

00:38:23 --> 00:38:26
of the coding practices will be pretty

00:38:24 --> 00:38:28
different in the future. We've talked

00:38:25 --> 00:38:29
about this idea of you know the

00:38:27 --> 00:38:31
individual engineer becomes the manager

00:38:28 --> 00:38:33
of agents. So that was already kind of I

00:38:30 --> 00:38:35
think a well understood path. This is

00:38:32 --> 00:38:37
like a supercharger of that of that

00:38:34 --> 00:38:38
concept. And then the then the question

00:38:36 --> 00:38:40
is like how does that translate to

00:38:37 --> 00:38:42
almost every form of work because if I

00:38:39 --> 00:38:44
am now you know the lawyer and working

00:38:41 --> 00:38:46
on cases and I can have 20 sub agents

00:38:43 --> 00:38:49
that all you know do a different case

00:38:45 --> 00:38:51
and then basically you know come back in

00:38:48 --> 00:38:55
some kind of task queue that I'm going

00:38:50 --> 00:38:56
through like obviously one just the the

00:38:54 --> 00:38:59
sheer leverage now you get is is going

00:38:56 --> 00:39:00
to be insane. Um but I do think the way

00:38:58 --> 00:39:03
that you you know might might even

00:38:59 --> 00:39:05
organize the work and um and what the

00:39:02 --> 00:39:07
you know workflows within an

00:39:04 --> 00:39:09
organization are are you know inevitably

00:39:06 --> 00:39:11
going to change as a result of that.

00:39:08 --> 00:39:13
>> Oh but I mean I think I think this just

00:39:10 --> 00:39:16
right goes gets to the you know

00:39:12 --> 00:39:19
essentially that that the the flow in

00:39:15 --> 00:39:22
the workflow has been serialized or

00:39:18 --> 00:39:25
linearized based sometimes on knowledge

00:39:21 --> 00:39:27
but other times on tooling. And so what

00:39:24 --> 00:39:29
happens when when the tooling changes is

00:39:26 --> 00:39:31
you just get this realignment of what's

00:39:28 --> 00:39:34
truly serial and and what's not. Like if

00:39:30 --> 00:39:35
you're if you're planning an event for a

00:39:33 --> 00:39:37
company, which is still going to keep

00:39:34 --> 00:39:38
happening, you know, like, oh, I have to

00:39:36 --> 00:39:40
book the venue. I have to invite all

00:39:37 --> 00:39:41
these people. We have to create all

00:39:39 --> 00:39:43
these materials. Well, they're actually

00:39:40 --> 00:39:44
not particularly gated on each other,

00:39:42 --> 00:39:46
>> right?

00:39:43 --> 00:39:47
>> But if you have an events person,

00:39:45 --> 00:39:50
>> they're gated,

00:39:46 --> 00:39:53
>> right? And and so now an events person

00:39:49 --> 00:39:54
can start spinning up all of these these

00:39:52 --> 00:39:55
different elements and then they're

00:39:53 --> 00:39:57
going to come back like I've gotten as

00:39:54 --> 00:39:59
far as I can on collateral until I get a

00:39:56 --> 00:40:02
logo for this event, right? Like I've

00:39:58 --> 00:40:04
gotten as far as I can on invites until

00:40:01 --> 00:40:04
I get the date and the time and the the

00:40:03 --> 00:40:07
venue.

00:40:04 --> 00:40:09
>> And I think there's no there's no reason

00:40:06 --> 00:40:10
why you can't spin up all those in

00:40:08 --> 00:40:12
parallel because of course how does that

00:40:09 --> 00:40:14
happen today? Well, if you're a company

00:40:11 --> 00:40:16
and you use Box and you've done this is

00:40:13 --> 00:40:18
your 58th event, you know, you have a

00:40:15 --> 00:40:21
folder called event, right? And people

00:40:17 --> 00:40:22
take the folder and go event 59 and they

00:40:20 --> 00:40:25
make a copy of it and all the stuff

00:40:22 --> 00:40:28
in it. And and well, if you think about

00:40:24 --> 00:40:31
hat workflow, that's exactly what a

00:40:27 --> 00:40:34
series of of different background tasks

00:40:30 --> 00:40:35
or agents could go do. And so I think

00:40:33 --> 00:40:37
the reason that you could be doing all

00:40:34 --> 00:40:40
that in coding is well there's a there

00:40:36 --> 00:40:42
was a natural there's a natural way to

00:40:39 --> 00:40:43
break that up because there's a bunch of

00:40:41 --> 00:40:45
>> program but there's the other side but

00:40:42 --> 00:40:46
here's also a bit of an indictment on

00:40:44 --> 00:40:49
the ability of you to give it a high

00:40:45 --> 00:40:51
level you know it kind of suggests that

00:40:48 --> 00:40:53
he human being needs to be you know

00:40:50 --> 00:40:54
giving them more granular orders

00:40:52 --> 00:40:56
otherwise you know to start a company

00:40:53 --> 00:40:57
ou'd issue one prompt you'd go to the

00:40:55 --> 00:40:58
beach for six months right back and

00:40:56 --> 00:40:58
you'd have a full

00:40:57 --> 00:41:00
>> company

00:40:57 --> 00:41:01
>> which is a which is this almost

00:40:59 --> 00:41:03
re-anthorphizing

00:41:00 --> 00:41:07
effect which is which is like it turns

00:41:02 --> 00:41:09
out we we did we did kind of figure out

00:41:06 --> 00:41:12
division of labor. Uh we we figured it

00:41:08 --> 00:41:13
out in the context of an of of a lot of

00:41:11 --> 00:41:16
physical you know kind of analog limits

00:41:12 --> 00:41:18
that we that we clearly had uh that

00:41:15 --> 00:41:20
agents won't have but we now you know

00:41:17 --> 00:41:22
there there's no kind of you know total

00:41:19 --> 00:41:24
free lunch. So you have this context rot

00:41:21 --> 00:41:26
issue which is which is that you do

00:41:23 --> 00:41:27
actually have to subdivide the tasks at

00:41:25 --> 00:41:28
some point. So then the question is like

00:41:26 --> 00:41:30
what are the right

00:41:27 --> 00:41:32
>> I mean it may not be a context like the

00:41:29 --> 00:41:34
aam's razor here is you need to give

00:41:31 --> 00:41:36
them specific instructions for for

00:41:33 --> 00:41:37
specific tests and if you give them

00:41:35 --> 00:41:39
higher level instructions independent of

00:41:36 --> 00:41:39
context they just don't know what you

00:41:38 --> 00:41:41
want

00:41:38 --> 00:41:44
>> and this gets to the formal language

00:41:40 --> 00:41:46
part like at some point if you tried to

00:41:43 --> 00:41:48
use like the Uber

00:41:45 --> 00:41:50
>> frontier to get the whole thing done you

00:41:47 --> 00:41:51
have to tell it the whole thing

00:41:49 --> 00:41:52
>> exactly

00:41:50 --> 00:41:55
>> and and that just seems like a lot of

00:41:52 --> 00:41:57
work whereas if you have to tell it less

00:41:54 --> 00:41:59
because the part of the model you're

00:41:56 --> 00:42:01
using knows more, right? It's basically

00:41:58 --> 00:42:02
a different way of thinking about

00:42:00 --> 00:42:05
emplates or a different way of thinking

00:42:01 --> 00:42:07
about starting artifacts or scoping the

00:42:04 --> 00:42:10
context in a generic world.

00:42:06 --> 00:42:12
>> Well, but then there's this I mean uh it

00:42:09 --> 00:42:14
might though be the right architecture

00:42:12 --> 00:42:16
in general if you assume that that you

00:42:14 --> 00:42:18
know there's we're never going to get to

00:42:15 --> 00:42:19
a point where the model is just 100%

00:42:17 --> 00:42:21
perfect, right? And so it might also be

00:42:18 --> 00:42:23
the right uh kind of architecture design

00:42:20 --> 00:42:26
because at some point you're going to

00:42:22 --> 00:42:28
have you don't want an agent or a set of

00:42:25 --> 00:42:30
agents to go so far down a path when

00:42:27 --> 00:42:32
there was a step that it needed to check

00:42:29 --> 00:42:34
in with you on because there's just the

00:42:31 --> 00:42:35
compounding effect of that. So you do

00:42:33 --> 00:42:37
need to kind of subdivide the work also

00:42:34 --> 00:42:39
because if you do have gating, you know,

00:42:36 --> 00:42:41
moments that are going to have a bunch

00:42:38 --> 00:42:43
of dependencies, the agent does need to

00:42:40 --> 00:42:43
know like at what point should I roll

00:42:42 --> 00:42:47
that back up to the user?

00:42:42 --> 00:42:49
>> Yeah. Again, against the the the the

00:42:46 --> 00:42:51
common narrative, now that I think about

00:42:48 --> 00:42:53
it, it seems that the trend is is

00:42:50 --> 00:42:55
prompts are getting more complex,

00:42:52 --> 00:42:58
>> not less, right? And we're seeing more

00:42:54 --> 00:42:59
agents, not less, doing more narrow

00:42:57 --> 00:43:00
tasks, which is almost this kind of

00:42:58 --> 00:43:02
counter AGI narrative. It's almost like

00:43:00 --> 00:43:04
these are much more specialized and much

00:43:01 --> 00:43:04
more deep working with much more

00:43:03 --> 00:43:06
specific instructions.

00:43:04 --> 00:43:08
>> And there's like a sort of a history of

00:43:05 --> 00:43:10
this this wow, maybe we can actually

00:43:08 --> 00:43:12
solve it if we're specialized.

00:43:09 --> 00:43:14
>> Yeah. a little bit more in like if you

00:43:11 --> 00:43:15
take expert systems at first they

00:43:13 --> 00:43:17
thought expert systems would just be

00:43:14 --> 00:43:19
xperts and they would just know and

00:43:16 --> 00:43:21
then like by the time you got to the

00:43:18 --> 00:43:23
actual published research like at

00:43:20 --> 00:43:25
Stanford it was like this is an expert

00:43:22 --> 00:43:27
system in deciding on what type of

00:43:24 --> 00:43:28
infectious disease as long as you have

00:43:26 --> 00:43:29
one of these seven.

00:43:27 --> 00:43:31
>> No, literally there was there was a

00:43:28 --> 00:43:33
paper was like there's this one

00:43:30 --> 00:43:36
digestive disorder that actually is a

00:43:32 --> 00:43:38
medical. I do but I I do want to though

00:43:35 --> 00:43:40
because I you wouldn't want like there

00:43:37 --> 00:43:42
is one big difference which is

00:43:39 --> 00:43:44
omehow the model itself is packing in

00:43:41 --> 00:43:45
the inherent intelligence or capability

00:43:43 --> 00:43:47
to solve all of these

00:43:44 --> 00:43:49
>> like like like we are benefiting from

00:43:46 --> 00:43:54
the fact that that at least you can

00:43:48 --> 00:43:56
build these all on cloud 4 and GPG5

00:43:53 --> 00:43:58
all on a computer too but let me try to

00:43:55 --> 00:44:00
show like demonstrate this one with an

00:43:57 --> 00:44:03
old person example on this one which was

00:43:59 --> 00:44:04
like early in the PC era the the there

00:44:02 --> 00:44:07
were words processor and spreadsheets

00:44:03 --> 00:44:09
and graphics and databases and a lot of

00:44:06 --> 00:44:11
people were like why are there these

00:44:08 --> 00:44:14
four programs? There should only be one

00:44:10 --> 00:44:16
program and and I my answer to that like

00:44:13 --> 00:44:18
which often involved screaming was have

00:44:15 --> 00:44:20
you been to an office supply store

00:44:17 --> 00:44:22
because if you go to an office supply

00:44:19 --> 00:44:24
store there's like paper with numbers

00:44:21 --> 00:44:26
and then there's blank rectangles of

00:44:23 --> 00:44:27
paper and then there's transparency

00:44:25 --> 00:44:29
paper for and like

00:44:26 --> 00:44:31
>> this has been around a really long time.

00:44:28 --> 00:44:33
There's some reason that these are

00:44:30 --> 00:44:35
different human context for

00:44:32 --> 00:44:36
>> how many minutes did it take you for for

00:44:34 --> 00:44:37
you to know Google Wave wasn't going to

00:44:35 --> 00:44:38
work?

00:44:36 --> 00:44:39
>> Zero.

00:44:37 --> 00:44:40
>> Okay. Okay.

00:44:38 --> 00:44:42
>> It was instantaneous.

00:44:39 --> 00:44:44
>> It was instant. No, I mean and and but

00:44:41 --> 00:44:46
his was the thing. There was a product

00:44:43 --> 00:44:48
ancient Mac product that was lauded by

00:44:45 --> 00:44:50
the industry called ClariS works which

00:44:47 --> 00:44:52
was like oh it does you could have a

00:44:49 --> 00:44:53
spreadsheet inside a word processor. And

00:44:51 --> 00:44:55
my first reaction is have you seen a

00:44:52 --> 00:44:58
person use a spreadsheet because their

00:44:54 --> 00:45:00
monitor can't be big enough. So they

00:44:57 --> 00:45:01
just want as many cells as you could

00:44:59 --> 00:45:03
possibly have and you're sitting there

00:45:00 --> 00:45:06
saying it has to fit on an 8 and 1 half

00:45:02 --> 00:45:07
x 11 sheet of paper on a on a Mac.

00:45:05 --> 00:45:10
>> And I think that one of the things that

00:45:06 --> 00:45:12
happens is is that these lenses that

00:45:09 --> 00:45:14
humans bring to specialization like

00:45:11 --> 00:45:15
really really matter. And if you think

00:45:13 --> 00:45:18
about the medical profession and you

00:45:14 --> 00:45:20
think about going from a a GP to the

00:45:17 --> 00:45:23
radiologist to a specialist to a nurse

00:45:19 --> 00:45:26
practitioner through the whole series,

00:45:22 --> 00:45:27
they're each going to look at and use AI

00:45:25 --> 00:45:29
in a different way.

00:45:26 --> 00:45:31
>> So then the only thing would be okay. So

00:45:28 --> 00:45:34
that was that level of specialization

00:45:30 --> 00:45:36
and division of labor emerged over a

00:45:33 --> 00:45:39
hundred-year period right with you know

00:45:35 --> 00:45:40
alongside tools and but but also with uh

00:45:38 --> 00:45:42
driven by a lot of the physical

00:45:40 --> 00:45:44
constraints and realities of of how

00:45:41 --> 00:45:46
organizations emerge. So the only

00:45:43 --> 00:45:49
question would be in a post agent world

00:45:45 --> 00:45:51
in 10 years from now do those divisions

00:45:48 --> 00:45:53
of labor look exactly the same or do

00:45:50 --> 00:45:55
those shift also because the agents

00:45:52 --> 00:45:56
collapse you know some of the functions

00:45:54 --> 00:45:58
and is there some blurring and then is

00:45:55 --> 00:46:01
there just a new set of roles like like

00:45:57 --> 00:46:03
clearly there's a role in a bunch of

00:46:00 --> 00:46:05
organizations emerging um which is like

00:46:02 --> 00:46:07
no I'm just like my role is like I'm the

00:46:04 --> 00:46:09
AI productivity person and like I just

00:46:06 --> 00:46:10
like have a way of of you know creating

00:46:08 --> 00:46:12
all new forms of productivity in the

00:46:09 --> 00:46:14
organization with AI. So, like clearly

00:46:11 --> 00:46:15
we'll have a bunch of new roles, but is

00:46:13 --> 00:46:17
our current division of labor going to

00:46:14 --> 00:46:18
also collapse in some interesting ways

00:46:16 --> 00:46:20
because of AI?

00:46:17 --> 00:46:22
>> Well, I I think that like if you

00:46:19 --> 00:46:23
actually stick with the medical example,

00:46:21 --> 00:46:25
we're just going to wake up and there's

00:46:22 --> 00:46:27
going to be way more people with way

00:46:24 --> 00:46:29
more specialties, right? And and AI will

00:46:26 --> 00:46:30
have created more jobs and in the

00:46:28 --> 00:46:32
interim,

00:46:29 --> 00:46:32
>> you think AI causes more specialization

00:46:31 --> 00:46:34
over time?

00:46:31 --> 00:46:36
>> Absolutely. Because everyone's every

00:46:33 --> 00:46:38
human is going to be way better, right?

00:46:35 --> 00:46:40
>> And and more knowledge will amount. And

00:46:37 --> 00:46:42
I think this is a thing that that has

00:46:39 --> 00:46:45
really happened with computing that

00:46:41 --> 00:46:47
people forget like there used to just be

00:46:44 --> 00:46:49
like this morass of marketing, right?

00:46:46 --> 00:46:51
And R&D, right?

00:46:48 --> 00:46:53
>> And all of a sudden like just just and

00:46:50 --> 00:46:54
there used to just be coding and then

00:46:52 --> 00:46:56
there was coding and testing and design

00:46:53 --> 00:46:57
and product management and program

00:46:55 --> 00:46:59
anagement and you know usability and

00:46:56 --> 00:47:02
research and all of these specialties

00:46:58 --> 00:47:03
and all of those had their own tools. Go

00:47:01 --> 00:47:04
to a construction site. I I remember

00:47:02 --> 00:47:06
growing up

00:47:03 --> 00:47:07
>> these our neighbors built a house. We

00:47:05 --> 00:47:09
lived in an apartment and they built a

00:47:06 --> 00:47:11
house and there was Clem the carpenter

00:47:08 --> 00:47:13
>> and you built a house with a guy named

00:47:10 --> 00:47:14
Clem who used all the tools and

00:47:12 --> 00:47:16
everything and now like you build a

00:47:14 --> 00:47:19
house and it's like this 20 person list

00:47:15 --> 00:47:21
of sub subcontractors all who have whole

00:47:18 --> 00:47:23
companies that do nothing but like put

00:47:20 --> 00:47:25
in pavers you know and and that's what

00:47:22 --> 00:47:26
it's going to be. I mean there's been a

00:47:24 --> 00:47:28
long disagregation in the

00:47:25 --> 00:47:30
history of it right like everything in

00:47:27 --> 00:47:32
the same sheet metal then you know

00:47:30 --> 00:47:34
disagregate the OS and the hardware then

00:47:31 --> 00:47:35
you disagregate the apps

00:47:33 --> 00:47:36
>> right

00:47:34 --> 00:47:39
>> um and then it was kind of interesting

00:47:36 --> 00:47:41
like in the last 15 years we saw the app

00:47:38 --> 00:47:43
and like independent functions got

00:47:40 --> 00:47:44
disagregated right it's like almost

00:47:42 --> 00:47:45
everything became like like an API would

00:47:43 --> 00:47:48
become a company right you'd have like

00:47:44 --> 00:47:50
the twilios like o became a company like

00:47:47 --> 00:47:53
pub became a company etc and so it may

00:47:50 --> 00:47:56
very well be the case that every agent

00:47:52 --> 00:47:58
becomes like a whole new vertical and a

00:47:55 --> 00:48:00
whole new specialization and then and

00:47:57 --> 00:48:01
then you can actually build a company

00:47:59 --> 00:48:03
around it like it may be the case that

00:48:00 --> 00:48:04
oday just like with APIs

00:48:02 --> 00:48:06
>> one company will have a whole bunch of

00:48:03 --> 00:48:07
agents it may be the case in the future

00:48:05 --> 00:48:09
that a third party will provide that

00:48:06 --> 00:48:10
agent as an independent

00:48:08 --> 00:48:13
>> well it's it's so it's the the

00:48:09 --> 00:48:15
opportunity to your point is is really

00:48:12 --> 00:48:18
there for that because

00:48:14 --> 00:48:20
>> like it used to be like the the

00:48:17 --> 00:48:21
impedance to creating a company and

00:48:19 --> 00:48:23
istributing

00:48:20 --> 00:48:24
>> No exactly was infinite and so you It

00:48:22 --> 00:48:26
used to be ridiculous to think that a

00:48:24 --> 00:48:27
single API like Oth could become a

00:48:25 --> 00:48:28
company, but then you know of course it

00:48:26 --> 00:48:29
became

00:48:27 --> 00:48:30
>> or it used to be ridiculous to think you

00:48:28 --> 00:48:31
could build a whole company out of

00:48:30 --> 00:48:32
signing documents,

00:48:30 --> 00:48:34
>> right?

00:48:31 --> 00:48:35
>> And and like that not just a whole

00:48:33 --> 00:48:37
company, but then all of a sudden you

00:48:34 --> 00:48:39
realize, wow, the addressable market for

00:48:36 --> 00:48:41
that is huge and it's way bigger than

00:48:38 --> 00:48:44
signing because of all the stuff that

00:48:40 --> 00:48:47
got done that was baked into a company

00:48:43 --> 00:48:49
causing headcount and waste and a bunch

00:48:46 --> 00:48:51
and fraud and abuse. Well, I I think you

00:48:48 --> 00:48:54
can kind of underwrite thousands of of

00:48:50 --> 00:48:57
these companies emerging. So,

00:48:53 --> 00:49:00
>> uh Jared Freeman had a tweet um uh about

00:48:56 --> 00:49:02
basically like go deep on a on a

00:48:59 --> 00:49:05
workflow um you know take basically do

00:49:01 --> 00:49:06
the job of of some part of the economy

00:49:04 --> 00:49:07
payroll specialist and then build an

00:49:05 --> 00:49:09
agent for that.

00:49:06 --> 00:49:11
>> And it's not obvious that there's not

00:49:08 --> 00:49:12
literally like a thousand of those. So

00:49:10 --> 00:49:13
by every vertical and every line of

00:49:11 --> 00:49:14
department

00:49:12 --> 00:49:16
>> I just love this because this is like

00:49:13 --> 00:49:18
literally the anti-ag basically

00:49:15 --> 00:49:20
following like the long arc of computer

00:49:17 --> 00:49:21
science where as the market grows the

00:49:19 --> 00:49:21
level the granularity you can create a

00:49:20 --> 00:49:23
company

00:49:20 --> 00:49:26
>> well it's also economic growth like take

00:49:22 --> 00:49:27
that example like today just like

00:49:25 --> 00:49:29
Salesforce which is always my favorite

00:49:26 --> 00:49:31
xample like the idea of having a

00:49:28 --> 00:49:32
productive salesforce used to just be a

00:49:30 --> 00:49:32
consultancy

00:49:31 --> 00:49:34
>> right

00:49:31 --> 00:49:36
>> and the only way you could ever fix it

00:49:33 --> 00:49:38
was hiring a consultancy to show up and

00:49:35 --> 00:49:39
analyze what everybody does and then do

00:49:37 --> 00:49:41
a report that says this is how you need

00:49:38 --> 00:49:43
to reorgan It usually meant go the

00:49:40 --> 00:49:45
opposite of whatever you had and and

00:49:42 --> 00:49:48
then they would leave. And then you know

00:49:44 --> 00:49:51
people tried but there was no cloud. So

00:49:47 --> 00:49:54
to build like CRM you had to do all that

00:49:50 --> 00:49:55
consulting work and then roll it out and

00:49:53 --> 00:49:57
then it was static and you couldn't

00:49:54 --> 00:49:59
maintain it. And then all of a sudden

00:49:56 --> 00:50:01
there's like oh here's Mark Benny off

00:49:58 --> 00:50:02
and here's a whole way to do all this.

00:50:00 --> 00:50:04
And not only that, the people actually

00:50:02 --> 00:50:06
like it, right? And they think they're

00:50:03 --> 00:50:08
better at selling selling because

00:50:05 --> 00:50:09
they're they're using their phone and

00:50:07 --> 00:50:11
they're putting in a few notes about

00:50:08 --> 00:50:13
his client which helps everybody. And I

00:50:10 --> 00:50:15
think that's what's really going to

00:50:12 --> 00:50:17
happen with all this. And so suddenly

00:50:14 --> 00:50:18
something that looks really really

00:50:16 --> 00:50:19
small, right,

00:50:17 --> 00:50:21
>> becomes like a whole thing because

00:50:18 --> 00:50:23
there's no problem with distribution.

00:50:20 --> 00:50:24
There's no problem with customization.

00:50:22 --> 00:50:27
you know, we'll actually have ways to

00:50:23 --> 00:50:29
solve security and privacy and just like

00:50:26 --> 00:50:31
we solved reliability and and things

00:50:28 --> 00:50:32
like and and I think it's just I mean

00:50:30 --> 00:50:34
look at you know the stuff that you're a

00:50:32 --> 00:50:36
world expert in in the stack of internet

00:50:33 --> 00:50:39
echn of networking technologies. I

00:50:36 --> 00:50:42
mean, I you would have asked me 15 years

00:50:38 --> 00:50:43
ago, was CDN be companies? I never would

00:50:41 --> 00:50:44
have. I'm like, that doesn't make any

00:50:42 --> 00:50:45
sense. Like, how could you have a

00:50:43 --> 00:50:46
company that's a cash?

00:50:44 --> 00:50:47
>> Yeah.

00:50:45 --> 00:50:50
>> I think that people are

00:50:46 --> 00:50:52
>> probably way too afraid of the model

00:50:49 --> 00:50:56
providers kind of eating them. Um, and I

00:50:52 --> 00:50:58
think it was I think it was basically

00:50:55 --> 00:51:00
uh a phenomenon in the first wave which

00:50:57 --> 00:51:01
was if you were just doing like basic

00:50:59 --> 00:51:03
like like if you had figured out that

00:51:00 --> 00:51:05
you could do something on GPT you know

00:51:02 --> 00:51:07
two and three where it was a text

00:51:04 --> 00:51:09
interface that produced more text like

00:51:06 --> 00:51:11
yes chatbt ate you like like that that

00:51:08 --> 00:51:14
clearly happened. Yeah. But basically

00:51:10 --> 00:51:17
since then most enterprises want kind of

00:51:13 --> 00:51:19
applied use cases for AI and AI agents.

00:51:16 --> 00:51:20
And so so it's not obvious that the

00:51:18 --> 00:51:22
current crop of companies if you're

00:51:19 --> 00:51:24
doing AI for healthcare, if you're doing

00:51:21 --> 00:51:26
AI for life sciences, if you're doing AI

00:51:23 --> 00:51:28
for financial services, if you're doing

00:51:25 --> 00:51:30
AI for coding at the right parts of the

00:51:27 --> 00:51:32
stack, AI AI for coding may be the one

00:51:29 --> 00:51:33
asterric area which will be hyperco

00:51:31 --> 00:51:35
mpetitive simply because the model

00:51:32 --> 00:51:36
companies like don't want to use

00:51:34 --> 00:51:39
somebody else's product to build their

00:51:36 --> 00:51:39
own models.

00:51:38 --> 00:51:44
AI

00:51:40 --> 00:51:46
kind of exception basically we're just

00:51:43 --> 00:51:48
in a 5year period right now where you're

00:51:46 --> 00:51:50
going to have to build agents for every

00:51:47 --> 00:51:52
vertical every domain and there's a

00:51:50 --> 00:51:53
playbook that's starting to emerge of

00:51:51 --> 00:51:55
what that needs to look like.

00:51:52 --> 00:51:57
>> I mean so I I think there was kind of a

00:51:54 --> 00:51:59
technical head fake that happened early

00:51:56 --> 00:52:02
on which was pre-training. So the

00:51:58 --> 00:52:04
pre-training really was a 10 out of 10

00:52:01 --> 00:52:06
technical innovation. I I can't tell you

00:52:03 --> 00:52:07
like two years ago if somebody was like

00:52:05 --> 00:52:09
I had a friend that was building um like

00:52:06 --> 00:52:10
their own aging model post training

00:52:08 --> 00:52:12
aging model like we're going to make it

00:52:09 --> 00:52:15
so good at aging like you know this is a

00:52:11 --> 00:52:17
a text to image model and they

00:52:14 --> 00:52:18
wanted to make it so like old people

00:52:16 --> 00:52:20
looked really good at it and then of

00:52:17 --> 00:52:21
course the next version of like mid

00:52:19 --> 00:52:23
journey whatever comes out and it does a

00:52:20 --> 00:52:24
better job of it and the thing with

00:52:22 --> 00:52:25
pre-training was you're just kind of

00:52:23 --> 00:52:27
consuming all of the world's existing

00:52:24 --> 00:52:28
data you're draining all of that energy

00:52:26 --> 00:52:31
and it perfectly generalized right

00:52:28 --> 00:52:33
>> but it feels like technically that's

00:52:30 --> 00:52:35
passed and now we're more in post

00:52:32 --> 00:52:36
raining in RL which is a lot more

00:52:34 --> 00:52:38
domain specific and so

00:52:35 --> 00:52:41
>> well and the moment that you have access

00:52:37 --> 00:52:42
to some set of data that is only exactly

00:52:40 --> 00:52:44
is just for that enterprise and so who

00:52:41 --> 00:52:45
gets permission to access that data who

00:52:43 --> 00:52:47
gets permission to do the workflow on it

00:52:44 --> 00:52:49
's going to be applied companies.

00:52:46 --> 00:52:52
>> Yeah. So yeah this if we had an infinite

00:52:48 --> 00:52:53
number of tokens then the models would

00:52:51 --> 00:52:54
just continue to generalize but it's

00:52:52 --> 00:52:56
pretty clear that that's not happening

00:52:53 --> 00:52:58
and so now we're going into which we all

00:52:55 --> 00:52:59
understand very well which is now

00:52:57 --> 00:53:01
companies have to choose which domains

00:52:58 --> 00:53:02
to go into and they got to solve the

00:53:00 --> 00:53:04
longtail problems there and get access

00:53:01 --> 00:53:06
to the data etc. And I also think that

00:53:03 --> 00:53:08
here's that the shadow having been the

00:53:05 --> 00:53:09
shadow, the shadow cast by large

00:53:07 --> 00:53:10
companies

00:53:08 --> 00:53:12
>> over we're going to put you out of

00:53:09 --> 00:53:15
business and stomp you. It's ridiculous.

00:53:12 --> 00:53:17
>> And it it has never in any technology

00:53:14 --> 00:53:19
wave lived up to the fear that people

00:53:16 --> 00:53:22
have. Look, if you built a new word

00:53:18 --> 00:53:25
processor in 1995, you were an idiot.

00:53:21 --> 00:53:27
>> Like that was not the thing to go build.

00:53:24 --> 00:53:29
>> Yeah. you know, and and but you know,

00:53:26 --> 00:53:31
there was a time just 10 years earlier

00:53:28 --> 00:53:33
where like companies built standalone

00:53:30 --> 00:53:34
spell checkers. Like it was just a

00:53:32 --> 00:53:36
thing. You went to the store and you

00:53:33 --> 00:53:38
bought a spell checker and and like it

00:53:35 --> 00:53:39
had more words than the other spell

00:53:37 --> 00:53:41
checker

00:53:38 --> 00:53:43
>> and and so the the the thing is that

00:53:40 --> 00:53:45
's not being said now, which we

00:53:42 --> 00:53:47
should do a whole one on, is like what

00:53:44 --> 00:53:50
is the actual platform? Yeah, this is

00:53:46 --> 00:53:53
>> because it's very it's all well and good

00:53:49 --> 00:53:54
to say that the the large models will go

00:53:52 --> 00:53:56
subsume every application. The thing is

00:53:54 --> 00:53:57
the minute they start doing that, no one

00:53:55 --> 00:53:59
will be in their platform, right?

00:53:56 --> 00:54:01
Because like like no developer is gonna

00:53:58 --> 00:54:02
sit around and say if you're gonna

00:54:00 --> 00:54:04
subsume me, right,

00:54:01 --> 00:54:06
>> then and and this is there's a phrase

00:54:03 --> 00:54:08
that it's sherlocking on the Mac and the

00:54:05 --> 00:54:10
Apple world to this thing. And so it

00:54:07 --> 00:54:12
does it has a real chilling effect and

00:54:10 --> 00:54:13
that's one of the things all the model

00:54:11 --> 00:54:13
people are going to learn very very

00:54:12 --> 00:54:14
quickly.

00:54:12 --> 00:54:17
>> There's a chilling effect, but there's

00:54:14 --> 00:54:19
also just I think there really is just a

00:54:16 --> 00:54:20
problem of like it's hard to go deep in

00:54:18 --> 00:54:21
50 categories like you just you just

00:54:19 --> 00:54:22
can't

00:54:20 --> 00:54:24
>> mod pre-train. I think everybody is

00:54:21 --> 00:54:25
cared cuz pre-training was actually the

00:54:23 --> 00:54:27
one thing that was good at that and then

00:54:24 --> 00:54:28
ow they have to actually ch Yeah, I

00:54:26 --> 00:54:29
agree.

00:54:27 --> 00:54:31
>> You do have to like at some point it

00:54:28 --> 00:54:33
becomes purely just an execution issue

00:54:30 --> 00:54:35
which is like like I I don't know how

00:54:32 --> 00:54:37
anybody would set up a company to be to

00:54:34 --> 00:54:38
be able to beat 50 startups across 50

00:54:36 --> 00:54:40
different domains.

00:54:37 --> 00:54:43
>> No, it's ridicul. And in fact, like it's

00:54:39 --> 00:54:46
only good because the what happens is is

00:54:42 --> 00:54:48
that the the the big company raises the

00:54:45 --> 00:54:50
awareness of a

00:54:47 --> 00:54:52
whole category and then you just swoop

00:54:49 --> 00:54:53
in and you go

00:54:51 --> 00:54:55
>> we you to them

00:54:52 --> 00:54:58
>> you're I'm just a feature, right?

00:54:54 --> 00:54:58
>> But to to you I'm my this my whole life,

00:54:57 --> 00:55:00
right?

00:54:57 --> 00:55:01
>> And and you're gonna win. Look, I just I

00:54:59 --> 00:55:02
always come back there's a whole company

00:55:00 --> 00:55:03
that just signs things,

00:55:01 --> 00:55:06
>> right?

00:55:02 --> 00:55:07
>> I I I like I can't I cannot believe

00:55:05 --> 00:55:09
there's a whole company that just signs

00:55:06 --> 00:55:11
things. I have so much to say about this

00:55:08 --> 00:55:16
topic. I mean even minimally if you

00:55:10 --> 00:55:18
graph like like the cost to produ so the

00:55:15 --> 00:55:20
willingness to pay for um an inference

00:55:17 --> 00:55:22
versus the cost to serve it something

00:55:19 --> 00:55:24
like for most companies for most spaces

00:55:22 --> 00:55:26
20% of the inferences are 80% of the

00:55:23 --> 00:55:28
cost. So like actually the problem of

00:55:25 --> 00:55:29
the application is just to choose those

00:55:27 --> 00:55:31
ones on which tend to be more domain

00:55:28 --> 00:55:33
specific. Yeah, this is the problem of

00:55:30 --> 00:55:34
inviting the three of us on here, which

00:55:32 --> 00:55:36
is like

00:55:33 --> 00:55:38
>> we just opened up the next

00:55:35 --> 00:55:39
>> just getting us to shut up in the trick.

00:55:37 --> 00:55:42
>> Yeah. Guys, thank you so much for coming

00:55:38 --> 00:55:48
on. This is fantastic.

00:55:41 --> 00:55:48
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
