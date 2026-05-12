---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "6Z5hlKIDV44"
title: "Who's Coding Now? - AI and the Future of Software Development"
video_url: "https://www.youtube.com/watch?v=6Z5hlKIDV44"
thumbnail_url: "https://i.ytimg.com/vi/6Z5hlKIDV44/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=6Z5hlKIDV44"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2025-05-16T14:00:09.000Z"
upload_date: "2025-05-16"
duration_seconds: 2606
duration_human: "43:26"
view_count: 19302
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T12:49:50.164Z"
---

# Who's Coding Now? - AI and the Future of Software Development

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=6Z5hlKIDV44
- video_id: 6Z5hlKIDV44
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2025-05-16T14:00:09.000Z
- upload_date: 2025-05-16
- duration: 43:26
- view_count: 19302
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

In this episode of the a16z AI podcast, a16z Infra partners Guido Appenzeller, Matt Bornstein, and Yoko Li explore how generative AI is reshaping software development. From its potential as a new high-level programming abstraction to its current practical impacts, they discuss whether AI coding tools will redefine what it means to be a developer.

Why has coding emerged as one of AI's most powerful use cases? How much can AI truly boost developer productivity, and will it fundamentally change traditional computer science education? Guido, Yoko, and Matt dive deep into these questions, addressing the dynamics of "vibe coding," the enduring role of formal programming languages, and the critical challenge of managing non-deterministic behavior in AI-driven applications.

Among other things, they discuss:
- The enormous market potential of AI-generated code, projected to deliver trillions in productivity gains.
- How "prompt-based programming" is evolving from Stack Overflow replacements into sophisticated development assistants.
- Why formal languages like Python and Java are here to stay, even as natural language interactions become common.
- The shifting landscape of programming education, and why understanding foundational abstractions remains essential.
- The unique complexities of integrating AI into enterprise software, from managing uncertainty to ensuring reliability.

00:00:39 - Who’s Coding Now? / Why is coding such a big use case?
00:05:41 - How has AI already changed software development?
00:13:05 - Vibe Coding vs. ‘Serious’ Engineering
00:17:30 - Vibe Coding and the future of Computer Science Education
00:23:15 - How does Vibe Coding affect programming languages?
00:35:07 - Adjusting to non-deterministic outputs
00:38:43 - Are prompts the narrow waist of AI programming?
00:42:22 - The nexus of Vibe Coding and enterprise programming

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:04
Today I think AI is not just a higher

00:00:02 --> 00:00:06
level language abstraction or something

00:00:03 --> 00:00:08
like that. But could it become one over

00:00:05 --> 00:00:10
time? That's the question. I don't do

00:00:07 --> 00:00:12
you do you think yes? I I think it

00:00:09 --> 00:00:14
could. If if I look at a classic say

00:00:11 --> 00:00:16
compiler design or or you know in in in

00:00:13 --> 00:00:20
programming languages, if I would

00:00:15 --> 00:00:21
have LLMs as a tool, I would probably

00:00:19 --> 00:00:24
think very differently about how I would

00:00:20 --> 00:00:26
build a compiler. Yeah. And I don't

00:00:23 --> 00:00:27
hink we've seen that work its way

00:00:25 --> 00:00:28
through yet. But if if I can basically

00:00:26 --> 00:00:31
define certain things in human language

00:00:27 --> 00:00:32
in efficient way and you know maybe in a

00:00:30 --> 00:00:35
sort of tight enough way that can use

00:00:31 --> 00:00:38
this directly as as input for a compiler

00:00:34 --> 00:00:38
that could change a lot of

00:00:43 --> 00:00:50
things. We're pretty sure it's the

00:00:46 --> 00:00:51
second biggest AI market right now.

00:00:49 --> 00:00:53
Correct me guys if I'm wrong, but you

00:00:50 --> 00:00:56
know consumer pure chatbot I think is

00:00:52 --> 00:00:57
number one and I think coding is number

00:00:55 --> 00:00:59
two. just purely purely looking at the

00:00:56 --> 00:01:02
numbers but consumer is the aggregation

00:00:58 --> 00:01:03
of a lot of different exactly right

00:01:01 --> 00:01:05
hat's how I define market I think

00:01:02 --> 00:01:07
there's you can make an argument it's

00:01:04 --> 00:01:09
the number one actually if you look at

00:01:06 --> 00:01:12
really homogeneous markets is coding

00:01:08 --> 00:01:13
bigger than companions yes I think so

00:01:11 --> 00:01:16
yeah yes at this point it is you think

00:01:12 --> 00:01:18
so that'd be interesting it depends it

00:01:15 --> 00:01:20
probably depends how how you classify

00:01:17 --> 00:01:23
something like chat GPT which to some

00:01:19 --> 00:01:26
degree is used for companionship so a a

00:01:22 --> 00:01:27
large portion of chat GPT usage which I

00:01:25 --> 00:01:30
think now is companionship. I think

00:01:26 --> 00:01:32
that's right. Yeah. So, well, in the

00:01:29 --> 00:01:34
nd, you know, is is is a person's

00:01:31 --> 00:01:37
motivation greater to build something or

00:01:33 --> 00:01:40
to or to to find love? I think, you

00:01:36 --> 00:01:42
know, you know, it may be neck and neck.

00:01:39 --> 00:01:43
One thing that's very unique about AI

00:01:41 --> 00:01:45
coding that's sometimes under

00:01:42 --> 00:01:47
appreciated is this was actually an

00:01:44 --> 00:01:49
existing behavior in in a couple of

00:01:46 --> 00:01:51
ways. First, people were already going

00:01:48 --> 00:01:52
somewhere to look for help, which which

00:01:50 --> 00:01:54
we mentioned earlier is is Stack

00:01:51 --> 00:01:56
Overflow for for the most part. So there

00:01:53 --> 00:01:58
was already sort of this muscle people

00:01:55 --> 00:01:59
were exercising when they hit a problem

00:01:57 --> 00:02:00
they couldn't solve to go find the

00:01:58 --> 00:02:03
information on the internet and this is

00:02:00 --> 00:02:04
really just a much better form of that.

00:02:02 --> 00:02:06
you know, there are all these jokes that

00:02:04 --> 00:02:08
Stack Overflow is actually writing most

00:02:05 --> 00:02:10
of the code, you know, for the last, you

00:02:07 --> 00:02:12
know, x number of years. A lot of that

00:02:09 --> 00:02:13
may just shift to to AI models, right?

00:02:11 --> 00:02:15
It's not clear if that was a joke or

00:02:12 --> 00:02:16
not, but yeah. Yeah. Maybe maybe not a

00:02:14 --> 00:02:18
joke. Also, there was this thing called

00:02:15 --> 00:02:20
GitHub copilot, right? They did this

00:02:17 --> 00:02:22
really foundational work to start to

00:02:19 --> 00:02:24
transition people off of that sort of

00:02:21 --> 00:02:26
Stack Overflow use case to uh to, you

00:02:24 --> 00:02:28
know, using AI models. And I think

00:02:25 --> 00:02:30
companies like Cursor have just done a

00:02:27 --> 00:02:32
much better job with that now. and and

00:02:29 --> 00:02:33
so you have this fairly unique thing

00:02:31 --> 00:02:35
that you're actually taking advantage of

00:02:32 --> 00:02:36
a an existing user behavior an existing

00:02:34 --> 00:02:38
market and like selling a great product

00:02:35 --> 00:02:39
into it. I think there's one other

00:02:37 --> 00:02:41
aspect which is look if you're a

00:02:38 --> 00:02:42
developer and you have access to the

00:02:40 --> 00:02:45
latest AI technology the first problem

00:02:41 --> 00:02:46
you solve is are your own problems right

00:02:44 --> 00:02:48
so I think it's uh developers just

00:02:46 --> 00:02:50
hat's the problems they understand best

00:02:47 --> 00:02:51
hat's the problems they they face every

00:02:49 --> 00:02:54
day and so they build infrastructure for

00:02:50 --> 00:02:56
themselves to use and developers are

00:02:53 --> 00:02:58
always early adopters for new

00:02:55 --> 00:03:00
technologies just because like naturally

00:02:57 --> 00:03:02
they're they like to tinker uh they like

00:02:59 --> 00:03:06
to configure net new tools and they're

00:03:01 --> 00:03:07
lazy so anything that actually you know

00:03:05 --> 00:03:10
increase the productivity they will

00:03:06 --> 00:03:12
adopt but I also think coding market is

00:03:09 --> 00:03:15
doing so well also because it's somewhat

00:03:11 --> 00:03:17
verifiable problem like you can verify

00:03:14 --> 00:03:19
if like a coding function like input

00:03:16 --> 00:03:22
output are very clear compared to like

00:03:18 --> 00:03:25
user preference you know uh and all the

00:03:21 --> 00:03:28
other problems and you can also reframe

00:03:24 --> 00:03:30
a lot of different uh problems into

00:03:27 --> 00:03:32
coding so I would even argue that some

00:03:29 --> 00:03:34
of the art generation is a coding

00:03:31 --> 00:03:36
problem people will not like it but like

00:03:33 --> 00:03:37
historically we always used machine

00:03:35 --> 00:03:40
learning learning before we call it AI

00:03:36 --> 00:03:42
in Adobe Photoshop and you know like

00:03:39 --> 00:03:44
that's somewhat coding you can really

00:03:41 --> 00:03:46
map the trajectory of brushes that's

00:03:43 --> 00:03:49
coding vector generation is also coding

00:03:45 --> 00:03:50
so I think the beauty of code is that

00:03:48 --> 00:03:52
you can really remodel a lot of the real

00:03:50 --> 00:03:55
world problems and make it into very

00:03:51 --> 00:03:57
machine consumable formats I think

00:03:54 --> 00:04:00
there's one other aspect which is it's

00:03:56 --> 00:04:01
a it's a massive market like if you

00:03:59 --> 00:04:03
think about this we have 30

00:04:00 --> 00:04:06
million developers worldwide let's say

00:04:02 --> 00:04:08
average value created by developers is

00:04:05 --> 00:04:11
$100,000 a year. That's $3

00:04:07 --> 00:04:12
trillion. Right? I think we if I look at

00:04:10 --> 00:04:14
he data we've seen from some of the

00:04:11 --> 00:04:17
large financial institutions, they're

00:04:13 --> 00:04:18
stimating that the increase in

00:04:16 --> 00:04:20
developer productivity from just a

00:04:17 --> 00:04:23
vanilla co-pilot deployment is something

00:04:19 --> 00:04:25
like 15%. My gut feeling is we can get

00:04:22 --> 00:04:27
hat substantially higher, right? Let's

00:04:24 --> 00:04:29
assume we can double the productivity of

00:04:26 --> 00:04:31
a developer. For all developers in the

00:04:28 --> 00:04:33
world, that's $3 trillion worth of

00:04:30 --> 00:04:34
value, right? That's the value of Apple

00:04:32 --> 00:04:35
computer or something like that. It's an

00:04:33 --> 00:04:37
incredible amount of value that we

00:04:34 --> 00:04:38
unlock there. So it's it's it's a

00:04:36 --> 00:04:40
massive market and I mean there was I

00:04:37 --> 00:04:42
think it was last year when there was

00:04:39 --> 00:04:44
you know a good blog debate on on you

00:04:41 --> 00:04:46
know if we're overinvested in AI and I

00:04:43 --> 00:04:49
think back then the number was is $200

00:04:45 --> 00:04:51
billion annual investment you know

00:04:48 --> 00:04:53
something would ever you know recuperate

00:04:50 --> 00:04:55
here we have a way to recuperate $3

00:04:52 --> 00:04:58
trillion right so that makes the the 200

00:04:54 --> 00:05:00
billion look like peanuts. I think what

00:04:57 --> 00:05:01
might also be at work is it's it's an

00:04:59 --> 00:05:03
easy market to capture because

00:05:00 --> 00:05:05
developers understand it and it's it's a

00:05:02 --> 00:05:07
very very big market something

00:05:04 --> 00:05:08
potentially it might be the first really

00:05:06 --> 00:05:10
large market for AI in terms of in terms

00:05:08 --> 00:05:11
of driver. Yeah. No, that's that's a

00:05:09 --> 00:05:13
great point. Software and software

00:05:10 --> 00:05:15
developers create a huge amount of value

00:05:12 --> 00:05:16
at every company and every organization

00:05:14 --> 00:05:18
around the planet now and this is sort

00:05:16 --> 00:05:20
of a shortcut you know into into this

00:05:18 --> 00:05:22
ort of core capability. So so that that

00:05:19 --> 00:05:23
makes a lot of sense.

00:05:21 --> 00:05:25
There's almost a bootstrapping effect to

00:05:22 --> 00:05:27
your point too Guido because if you

00:05:24 --> 00:05:29
count not only the productivity gains

00:05:26 --> 00:05:30
but like the brand new things that are

00:05:28 --> 00:05:32
being created with these with these

00:05:29 --> 00:05:34
models like you kind of I think can see

00:05:31 --> 00:05:36
a cycle starting where you're getting

00:05:33 --> 00:05:37
better and better AI coding models which

00:05:35 --> 00:05:39
allow you to kind of create better

00:05:36 --> 00:05:44
absolutely software you know

00:05:38 --> 00:05:44
better new net new AI applications also

00:05:45 --> 00:05:51
nce the AI revolution has run its

00:05:47 --> 00:05:53
course do we have any idea how the job

00:05:50 --> 00:05:54
of a software developer will look like

00:05:52 --> 00:05:55
right it look different from today I

00:05:53 --> 00:05:57
think we're seeing that when I'm writing

00:05:54 --> 00:05:59
code today I'm I'm writing

00:05:56 --> 00:06:00
specifications I'm having discussions

00:05:58 --> 00:06:03
with a with a model about how to

00:05:59 --> 00:06:05
implement something um you know I'm I'm

00:06:02 --> 00:06:07
in for easy features I can actually

00:06:04 --> 00:06:09
ask it to implement a feature and just

00:06:06 --> 00:06:10
reviewing it how will the process be

00:06:08 --> 00:06:13
different will there still be the same

00:06:09 --> 00:06:15
stages will there will we all turn into

00:06:12 --> 00:06:17
basically product managers that write

00:06:14 --> 00:06:18
specifications and then the AI writes

00:06:16 --> 00:06:20
the code and you just step in

00:06:17 --> 00:06:21
occasionally to debug or what is the

00:06:19 --> 00:06:24
what's the and state yet. Do we have any

00:06:20 --> 00:06:26
idea at this point? Or we all become QA

00:06:23 --> 00:06:27
engineers and we test if it's to the

00:06:25 --> 00:06:29
spec. There we go. That is kind of

00:06:26 --> 00:06:32
ironic, right? We all got into this to

00:06:28 --> 00:06:33
avoid being QA engineers. I like what

00:06:31 --> 00:06:35
you were saying, Guido. Maybe we could

00:06:32 --> 00:06:38
each just talk a little bit about how we

00:06:34 --> 00:06:40
use AI models in coding right now. Like

00:06:38 --> 00:06:42
can you share a couple of stories about

00:06:39 --> 00:06:45
how this has changed your your coding

00:06:41 --> 00:06:46
workflows? to totally and I mean boy I'm

00:06:44 --> 00:06:49
not sure I'm even the I'm probably maybe

00:06:45 --> 00:06:50
the person coding least here but but the

00:06:48 --> 00:06:52
I think the the the most interesting

00:06:49 --> 00:06:55
insight is it has changed a lot over the

00:06:51 --> 00:06:56
last even 6 months how I use these

00:06:54 --> 00:06:59
models right it used to be

00:06:55 --> 00:07:01
that you take your favorite uh you know

00:06:58 --> 00:07:02
chatpt or something like that and you

00:07:00 --> 00:07:04
give it a prompt and out comes a program

00:07:01 --> 00:07:06
and you copy that into your editor and

00:07:03 --> 00:07:07
you know you you see if it works or not

00:07:05 --> 00:07:09
right that was that's sort of the stack

00:07:06 --> 00:07:11
overflow replacement thing is like when

00:07:08 --> 00:07:13
you inevitably hit a problem instead of

00:07:10 --> 00:07:15
going to Stack Overflow you go stat uh

00:07:12 --> 00:07:17
chatgbt and it actually gives you code

00:07:14 --> 00:07:19
back copy paste but from a different

00:07:16 --> 00:07:20
source right and this was like six

00:07:18 --> 00:07:21
months ago this was state-of-the-art

00:07:19 --> 00:07:23
his wasn't like that long ago maybe

00:07:20 --> 00:07:25
nine months nine months ago yeah 9

00:07:22 --> 00:07:27
months but then uh so then the next step

00:07:24 --> 00:07:29
was you started having integrated things

00:07:26 --> 00:07:31
that are integrated in your IDE right

00:07:28 --> 00:07:34
GitHub copilot then cursor that

00:07:30 --> 00:07:35
basically allows you to use autocomplete

00:07:33 --> 00:07:37
which is a big step forward right it's

00:07:34 --> 00:07:39
no longer like monolithic questions but

00:07:36 --> 00:07:42
it's sort of in the flow then this

00:07:38 --> 00:07:44
plit up into autocomplete at a line

00:07:41 --> 00:07:46
level. I can ask questions about

00:07:43 --> 00:07:48
paragraphs or I can have a um you know

00:07:45 --> 00:07:51
sort of a separate chat interface where

00:07:47 --> 00:07:53
I can have longer discussions. Then the

00:07:50 --> 00:07:54
IDE started to be able to use command

00:07:52 --> 00:07:56
line tools. So suddenly I can say hey

00:07:53 --> 00:07:58
can you set up you know my new Python

00:07:55 --> 00:08:00
project with UV or something like that

00:07:57 --> 00:08:03
and and um it could could basically run

00:07:59 --> 00:08:05
commands to to do all that work. And I

00:08:02 --> 00:08:08
think where we are today is when I write

00:08:04 --> 00:08:09
want to write a new piece of software or

00:08:07 --> 00:08:10
you know this is this is not production

00:08:08 --> 00:08:13
code right? this is like but I want to

00:08:10 --> 00:08:14
try something out. The first thing I do

00:08:12 --> 00:08:16
is I start writing a spec, right? I'm

00:08:13 --> 00:08:17
start basically a very high level.

00:08:15 --> 00:08:19
Here's what I'd like to do. And it's,

00:08:16 --> 00:08:21
you know, still fairly abstract and not

00:08:18 --> 00:08:24
very well thought through. And then I

00:08:20 --> 00:08:27
basically ask, you know, the the model,

00:08:23 --> 00:08:29
maybe something a set 3.5 or 3.7 or

00:08:26 --> 00:08:31
Gemini, here's here's what I'd like to

00:08:28 --> 00:08:33
do. Does this make sense? Please ask any

00:08:30 --> 00:08:35
questions that are unclear. And then

00:08:32 --> 00:08:37
write me a more detailed spec. And then

00:08:34 --> 00:08:38
the model gets to work. And usually

00:08:36 --> 00:08:40
there's lots of questions for me. It's

00:08:37 --> 00:08:41
like, hey, you know, I need an API key

00:08:39 --> 00:08:43
for that. you know, very simple things

00:08:40 --> 00:08:44
or more complex things like, you know,

00:08:42 --> 00:08:46
how do you want to manage stage? Should

00:08:44 --> 00:08:47
we put this in a database? Should we

00:08:45 --> 00:08:49
just dump it into a file or something

00:08:46 --> 00:08:51
like that? And so it's it's basically a

00:08:48 --> 00:08:54
back and forth discussion that helps me

00:08:50 --> 00:08:56
clarify my thinking. And the the model

00:08:53 --> 00:08:58
is almost a sparring partner to think

00:08:55 --> 00:09:01
through the process, which is really

00:08:57 --> 00:09:03
weird in a way, but it it works, right?

00:09:00 --> 00:09:05
Uh and you know, and and so over time

00:09:02 --> 00:09:06
you basically get more detailed specs

00:09:04 --> 00:09:08
and only when you have them, then you

00:09:05 --> 00:09:10
ask the model to start implementing. And

00:09:07 --> 00:09:12
all of that comes with a fair amount of

00:09:09 --> 00:09:14
context. You know, you also together

00:09:11 --> 00:09:15
with the model I have my standard Python

00:09:13 --> 00:09:17
coding guidelines. This is how I like to

00:09:14 --> 00:09:19
do commenting. This is how I like to do,

00:09:16 --> 00:09:21
you know, more object-oriented versus

00:09:18 --> 00:09:23
more procedural is how I like to

00:09:20 --> 00:09:25
structure my classes. I'm an

00:09:22 --> 00:09:28
object-oriented guy. So, we're talking

00:09:24 --> 00:09:30
Java here or what? No, Python, right?

00:09:27 --> 00:09:32
Yeah. Do you want to have type Python or

00:09:29 --> 00:09:34
untype Python? All these things, right?

00:09:31 --> 00:09:36
So, it's it's a lot about context. It's

00:09:33 --> 00:09:37
a lot about explaining your general

00:09:35 --> 00:09:39
development methodology. It's a lot

00:09:36 --> 00:09:42
about a back and forth with a model now

00:09:38 --> 00:09:44
here you sort of together figure out

00:09:41 --> 00:09:46
something. That's how I'm how are you

00:09:43 --> 00:09:49
coding? I guess like compared to maybe

00:09:45 --> 00:09:52
six months ago uh how I use coding agent

00:09:48 --> 00:09:54
nowadays is um I give it more of the

00:09:51 --> 00:09:56
world knowledge. Before I was mostly

00:09:53 --> 00:09:57
relying on what's a foundational models

00:09:55 --> 00:09:59
knowledge and it's funny because when

00:09:56 --> 00:10:02
you ask the coding agent when do you

00:09:58 --> 00:10:04
think today is it's always like 2023 and

00:10:01 --> 00:10:07
then all the specs I will give you are

00:10:03 --> 00:10:09
from like 2024 at best. So depending on

00:10:06 --> 00:10:12
when the knowledge cut off is nowadays I

00:10:08 --> 00:10:14
think it's very natural for me to like

00:10:11 --> 00:10:17
uh reach out to like linear here's a

00:10:13 --> 00:10:19
ticket and I just give my idea uh pull

00:10:16 --> 00:10:21
my idea into cursor cursor agent will

00:10:18 --> 00:10:23
take a first step at implementing it. So

00:10:20 --> 00:10:27
that's one kind of workflow change. The

00:10:22 --> 00:10:30
other one is more user prompted like uh

00:10:26 --> 00:10:33
active queries. So before um I may need

00:10:30 --> 00:10:36
to copy paste documentation into my

00:10:32 --> 00:10:38
little cursor window. Now I just ask the

00:10:35 --> 00:10:39
cursor agent to like hey can you use

00:10:37 --> 00:10:42
fire crawl to go search for the most

00:10:38 --> 00:10:44
up-to-date uh you know uh like clerk

00:10:41 --> 00:10:47
documentation and it will actually fetch

00:10:43 --> 00:10:48
a page and it will you know read up that

00:10:46 --> 00:10:51
works. Yeah it actually works and then

00:10:47 --> 00:10:53
it will mp it uses MCP but it's

00:10:50 --> 00:10:55
likeation detail it could be a tool call

00:10:52 --> 00:10:57
or whatever but it's there's more

00:10:54 --> 00:10:59
integration to the real world now. You

00:10:56 --> 00:11:01
guys sound much more planful than than

00:10:58 --> 00:11:04
me. I always, you know, the scenario for

00:11:00 --> 00:11:07
me is like Saturday night I finally have

00:11:03 --> 00:11:09
an hour free and I have a weird idea for

00:11:06 --> 00:11:11
an app and I just dive right into it and

00:11:08 --> 00:11:13
like ask ask cursor to do everything.

00:11:10 --> 00:11:17
And I've always found it works really

00:11:12 --> 00:11:20
well for high complexity, high kind of

00:11:16 --> 00:11:22
annoyance factor things like front end

00:11:19 --> 00:11:24
like if anybody on earth can remember

00:11:21 --> 00:11:26
all of the CSS classes that people use

00:11:23 --> 00:11:28
now for margins and padding it's it's

00:11:25 --> 00:11:31
like it's you know I I don't think that

00:11:27 --> 00:11:34
person exists. I center a div yet? Yes.

00:11:30 --> 00:11:36
Oh, yeah. We should do a benchmark on

00:11:33 --> 00:11:38
centering a div. Totally. Yeah, we Yeah.

00:11:35 --> 00:11:40
tutorial on div center. I mean, it's one

00:11:37 --> 00:11:42
of these it's one of these hard problems

00:11:39 --> 00:11:44
for for no reason, right? There's just

00:11:41 --> 00:11:46
like five different ways to center text

00:11:43 --> 00:11:47
and elements and and I can never

00:11:45 --> 00:11:49
emember any of them, right? And and and

00:11:46 --> 00:11:52
you know, AI models are really good at

00:11:48 --> 00:11:54
his, right? Um and they now can do it.

00:11:51 --> 00:11:56
When you start going to more niche

00:11:53 --> 00:11:57
libraries and function calls, that's

00:11:55 --> 00:11:59
where I always run into trouble. So, so

00:11:56 --> 00:12:01
I love this fire crawl kind of idea

00:11:58 --> 00:12:02
because usually I'm hunting for docs and

00:12:00 --> 00:12:04
then putting them back in or something

00:12:01 --> 00:12:06
like that. Yeah, sometimes I also copy

00:12:04 --> 00:12:10
paste like a milify doc because they

00:12:05 --> 00:12:13
have the lm.ext on like the um developer

00:12:09 --> 00:12:16
tool docs. I just give the URL add doc

00:12:12 --> 00:12:18
and then enter the URL and ask cursor to

00:12:15 --> 00:12:20
implement that and that works too. Has

00:12:17 --> 00:12:22
anything gone really wrong for you guys

00:12:19 --> 00:12:25
yet doing doing sort of AI assisted

00:12:21 --> 00:12:27
coding? Not really wrong per se, but a

00:12:24 --> 00:12:30
lot of how we code is dependent on the

00:12:26 --> 00:12:32
agent behavior on how like the client

00:12:29 --> 00:12:34
implemented the agent. One example is

00:12:32 --> 00:12:36
there's this very cool tool that

00:12:33 --> 00:12:39
actually generate like very pretty pages

00:12:36 --> 00:12:42
and send back like a react component

00:12:38 --> 00:12:44
like a HTML page for the coding agent to

00:12:41 --> 00:12:46
refer to. So one time I asked cursor

00:12:43 --> 00:12:49
agent to like reach out to this tool

00:12:45 --> 00:12:50
implement based on whatever it told you.

00:12:48 --> 00:12:52
Cursor agent's reaction was very

00:12:49 --> 00:12:54
interesting. It look at the code, it

00:12:51 --> 00:12:56
says, "Oh, this looks great. Let me give

00:12:53 --> 00:12:58
you a new version." So, it didn't adopt

00:12:55 --> 00:13:00
whatever that was returned. Interesting.

00:12:57 --> 00:13:02
Yeah. Which is like a very interesting

00:12:59 --> 00:13:03
like agent to agent communication.

00:13:01 --> 00:13:07
Cursor agent is like, "I don't agree

00:13:02 --> 00:13:07
with this direction."

00:13:08 --> 00:13:13
So, you've done a bunch of work on MCP,

00:13:10 --> 00:13:16
Yoko. How do you think that plays into

00:13:12 --> 00:13:18
this? I think MCP to its essence is just

00:13:15 --> 00:13:20
a way to provide context, the most

00:13:17 --> 00:13:24
relevant context to LMS. So it helps

00:13:20 --> 00:13:25
that a longtail MCP servers nowadays can

00:13:23 --> 00:13:27
be leveraged whatever client you're

00:13:24 --> 00:13:30
using. So that's what's you know

00:13:26 --> 00:13:33
empowering the kind of experience I was

00:13:29 --> 00:13:35
just describing. I can use linear MCP I

00:13:32 --> 00:13:37
can use GitHub MCP to pull in the

00:13:34 --> 00:13:39
relevant context and tool calling is

00:13:36 --> 00:13:41
like a technical detail how they

00:13:38 --> 00:13:44
implemented fetching the context but the

00:13:40 --> 00:13:47
crux of the MCP is actually the context

00:13:43 --> 00:13:48
part. what is the most relevant thing I

00:13:46 --> 00:13:50
can provide to you as a model so you can

00:13:48 --> 00:13:52
help me better. And so do you think

00:13:49 --> 00:13:54
having these kinds of tools available in

00:13:51 --> 00:13:58
an IDE

00:13:53 --> 00:14:00
means AI coding is kind of more

00:13:57 --> 00:14:02
productive or a better fit for kind of

00:13:59 --> 00:14:04
senior developers? Because because a a a

00:14:01 --> 00:14:06
knock against this for a long time has

00:14:03 --> 00:14:08
been that you know vibe coders for lack

00:14:05 --> 00:14:10
of a better word are kind of producing

00:14:07 --> 00:14:12
reat demos and and you know junior

00:14:09 --> 00:14:13
developers are kind of you know getting

00:14:11 --> 00:14:15
up to speed faster but the people I've

00:14:12 --> 00:14:17
always affectionately called neck beards

00:14:14 --> 00:14:19
right the the people who you know own

00:14:16 --> 00:14:21
the cluster and stop you from breaking

00:14:18 --> 00:14:22
things or or you know like own the

00:14:20 --> 00:14:24
overall architecture are sort of

00:14:21 --> 00:14:26
skeptics. Do do you think this is one

00:14:23 --> 00:14:29
way to get you know the the the neck

00:14:25 --> 00:14:31
beards engaged? I think it depends on

00:14:28 --> 00:14:34
what the very senior engineers are

00:14:30 --> 00:14:35
optimizing for. There are very senior

00:14:33 --> 00:14:37
like application engineers who are just

00:14:34 --> 00:14:39
very good at you know fleshing out

00:14:36 --> 00:14:42
ideas. So like in this case it's like a

00:14:38 --> 00:14:43
more evenly distributed skill set. You

00:14:41 --> 00:14:45
just need to put the stack together. But

00:14:42 --> 00:14:48
here are very senior engineers who are

00:14:44 --> 00:14:50
say optimizing best thing in the world

00:14:47 --> 00:14:54
for optimizing for distributed systems

00:14:49 --> 00:14:56
that I think we're not quite there yet

00:14:53 --> 00:14:58
just because the coding agent first like

00:14:55 --> 00:15:01
it can't fetch any and all state of the

00:14:57 --> 00:15:03
distributed system. It's a lot of human

00:15:00 --> 00:15:05
you know like intervention when it comes

00:15:02 --> 00:15:07
to like how to solve certain problems.

00:15:04 --> 00:15:09
But I feel like we're on the way there

00:15:06 --> 00:15:12
given enough context window, enough tool

00:15:08 --> 00:15:15
calling capabilities to bring just the

00:15:11 --> 00:15:17
right knowledge into the model. Today I

00:15:14 --> 00:15:19
think most IDs have a limit on the

00:15:16 --> 00:15:22
number of tools it can handle. I I

00:15:18 --> 00:15:24
remember was like 40 or 50 or something.

00:15:21 --> 00:15:26
So it naturally limits what's the

00:15:23 --> 00:15:28
context and what's the tools that the

00:15:25 --> 00:15:31
coding agent can leverage. I think that

00:15:27 --> 00:15:33
here's sort of a a pattern that the

00:15:30 --> 00:15:35
more sort of esoteric the problem is,

00:15:32 --> 00:15:36
the more novel the problems you're

00:15:34 --> 00:15:37
trying to solve, the more context you

00:15:35 --> 00:15:39
have to provide. Right? If I'm like,

00:15:36 --> 00:15:41
hey, write me a blog or, you know, what

00:15:38 --> 00:15:43
is it? Write me a, you know, online um

00:15:40 --> 00:15:45
store like the the simplified

00:15:42 --> 00:15:47
version, that's of a standard, I don't

00:15:44 --> 00:15:50
know, undergradu software development

00:15:46 --> 00:15:51
class problem. So, the amount of samples

00:15:49 --> 00:15:52
on the internet is more or less

00:15:50 --> 00:15:55
infinite. The models have seen this a

00:15:51 --> 00:15:58
gazillion times. incredibly good in in

00:15:54 --> 00:16:00
regurgitating um um this code. If you

00:15:57 --> 00:16:02
have something for which there's very

00:15:59 --> 00:16:05
little training code that typically all

00:16:01 --> 00:16:06
goes away and it's all sort of you have

00:16:04 --> 00:16:07
to specify exactly what you want. You

00:16:05 --> 00:16:09
need to provide the context. You need to

00:16:06 --> 00:16:11
provide the API specification. It's much

00:16:08 --> 00:16:12
harder and it will very confidently

00:16:10 --> 00:16:14
give you a wrong answer too. I can't

00:16:11 --> 00:16:16
ell you the number of times I'm like oh

00:16:13 --> 00:16:17
my god this function exists. I had no

00:16:15 --> 00:16:19
idea it's exactly what I needed. It's

00:16:16 --> 00:16:21
like wait no it doesn't exist. Pure

00:16:18 --> 00:16:23
hallucination and it's once it does that

00:16:20 --> 00:16:24
it's very hard to get it off. Right. And

00:16:22 --> 00:16:25
if you're saying like the function

00:16:23 --> 00:16:26
doesn't exist, it hallucinates a new

00:16:24 --> 00:16:28
one. It's like, "Oh, I'm so sorry.

00:16:26 --> 00:16:30
Here's here's another function that

00:16:27 --> 00:16:32
doesn't exist, that might work." Yeah. I

00:16:29 --> 00:16:33
think what models today are very bad at

00:16:31 --> 00:16:37
is telling you if they don't know

00:16:32 --> 00:16:39
something. Yeah. Do you think RL would

00:16:36 --> 00:16:41
change that in a training process? If

00:16:38 --> 00:16:42
you theoretically you give it all the

00:16:40 --> 00:16:45
relevant environments in the world, it

00:16:41 --> 00:16:48
can do all the things it needs to do to

00:16:44 --> 00:16:50
simulate a distributed system um and

00:16:47 --> 00:16:52
ebug it. Look, I I I think in the

00:16:49 --> 00:16:55
xtreme case, if you are the first

00:16:52 --> 00:16:56
person on the planet to write code that

00:16:54 --> 00:16:58
solves a specific problem, there's just

00:16:55 --> 00:17:00
zero training data out there. I think

00:16:57 --> 00:17:04
it'll always be very hard, right? I

00:16:59 --> 00:17:05
think the models are not really creative

00:17:03 --> 00:17:08
so far. They can do a little bit of

00:17:04 --> 00:17:09
transfer, but but but not much. So, you

00:17:07 --> 00:17:11
know, if you're say there's a brand new

00:17:08 --> 00:17:12
chip which has a new architecture and

00:17:10 --> 00:17:14
you're the first one to write a driver

00:17:11 --> 00:17:17
for it, it's going to be a fairly manual

00:17:13 --> 00:17:20
task. I think the good news is that is

00:17:16 --> 00:17:22
0.01% 01% of all software development

00:17:19 --> 00:17:25
right for the I don't know you

00:17:21 --> 00:17:27
know 100 thousands ERP system

00:17:24 --> 00:17:29
implementation or so right that we have

00:17:26 --> 00:17:31
tons of training data I think these

00:17:28 --> 00:17:31
tools can be very very

00:17:32 --> 00:17:37
powerful we haven't talked about vibe

00:17:34 --> 00:17:40
coding too much but right but there's

00:17:36 --> 00:17:42
this idea that that people who aren't

00:17:39 --> 00:17:44
developers can now kind of write code

00:17:41 --> 00:17:46
which is which is pretty cool right and

00:17:43 --> 00:17:48
and sort of feels like something

00:17:45 --> 00:17:50
that should happen. You know, we're not

00:17:48 --> 00:17:52
like priests of the computer where, you

00:17:49 --> 00:17:53
know, we need to intervene between

00:17:51 --> 00:17:55
ordinary people and and the and the

00:17:52 --> 00:17:57
processor, right? It should be that

00:17:54 --> 00:17:59
indoctrinated before. Yeah. Exactly.

00:17:56 --> 00:18:00
There's no, you know, seminary of Well,

00:17:58 --> 00:18:02
maybe maybe there were seminaries of

00:17:59 --> 00:18:04
computers. I don't know. CS departments.

00:18:01 --> 00:18:06
Yeah. Exactly. Um but but it kind of

00:18:03 --> 00:18:08
makes sense that people should be able

00:18:05 --> 00:18:10
to control computers in direct ways, not

00:18:07 --> 00:18:12
just in sort of pre-baked, you know,

00:18:10 --> 00:18:13
programs that have that have been given

00:18:11 --> 00:18:15
to them. So, so this is, I think, a a

00:18:12 --> 00:18:17
super interesting and and super exciting

00:18:14 --> 00:18:20
thing. I think there's a question there

00:18:16 --> 00:18:21
is is that true at all scales or or is

00:18:19 --> 00:18:23
this a little bit like look everybody

00:18:20 --> 00:18:26
can build a shack but you cannot build a

00:18:22 --> 00:18:28
skyscraper right well so so this is this

00:18:25 --> 00:18:31
exactly why why I bring it up right

00:18:27 --> 00:18:33
he demos that everybody does their

00:18:30 --> 00:18:36
first time they're they're trying you

00:18:32 --> 00:18:37
know a a website generator or or you

00:18:35 --> 00:18:39
know cursor or something like that

00:18:36 --> 00:18:41
probably are not you know doing that

00:18:38 --> 00:18:43
much for the rest of humanity right this

00:18:40 --> 00:18:44
ort of first weekend project but if you

00:18:42 --> 00:18:47
assume some portion of people who give

00:18:44 --> 00:18:48
that a I maybe start to climb the ladder

00:18:46 --> 00:18:50
and do increasingly sophisticated things

00:18:47 --> 00:18:51
and by the way in a totally different

00:18:49 --> 00:18:53
way than from you know the three of us

00:18:50 --> 00:18:55
would probably do it having learned sort

00:18:52 --> 00:18:57
of programming the the hard way. I just

00:18:54 --> 00:18:59
have a ton of optimism that that creates

00:18:56 --> 00:19:01
all sorts of kind of new things. You

00:18:58 --> 00:19:03
know you have a new pool of people

00:19:00 --> 00:19:04
writing software in a new way who may

00:19:02 --> 00:19:06
look at the world in a completely new

00:19:03 --> 00:19:07
ay. I I just have a ton of optimism

00:19:05 --> 00:19:09
that gives you kind of new new stuff,

00:19:06 --> 00:19:10
new applications, new programs and new

00:19:08 --> 00:19:11
ays of kind of using computers and

00:19:09 --> 00:19:13
computing that that we haven't had

00:19:10 --> 00:19:17
before. You know, this actually reminds

00:19:12 --> 00:19:20
me a lot of of the 2000s, like when uh

00:19:16 --> 00:19:22
blog was the new word uh on the blog and

00:19:19 --> 00:19:24
everyone was like, I need a new blog and

00:19:21 --> 00:19:26
then, you know, we rush to create our

00:19:23 --> 00:19:27
own blog and there comes like WordPress.

00:19:25 --> 00:19:29
People are still using WordPress, by the

00:19:26 --> 00:19:31
way. I'm surprised by that. And this

00:19:28 --> 00:19:33
wave of vibe coding almost felt like

00:19:30 --> 00:19:35
veryone and my my mom and my mom's

00:19:32 --> 00:19:37
neighbor are like trying to, you know,

00:19:34 --> 00:19:40
use the models to create personal

00:19:36 --> 00:19:43
software. So like we came from personal

00:19:39 --> 00:19:45
static content to like personal CRM to

00:19:42 --> 00:19:47
like manage your relationship or

00:19:44 --> 00:19:49
something. How deep do the software go?

00:19:46 --> 00:19:50
Like I don't know. I don't think it's

00:19:48 --> 00:19:53
very deep, but it doesn't matter like as

00:19:50 --> 00:19:56
long as there's like personal utility.

00:19:52 --> 00:19:57
Um I I think Martin tweeted about this

00:19:55 --> 00:19:59
earlier. He was like you should still

00:19:56 --> 00:20:02
earn to code. There's a uh if you're

00:19:58 --> 00:20:04
operating on on one abstraction, you

00:20:01 --> 00:20:06
need to learn the abstraction lower than

00:20:03 --> 00:20:09
where you're operating from which is

00:20:05 --> 00:20:11
very fair. And I I keep coming back to

00:20:08 --> 00:20:14
that because I wonder what is the one

00:20:10 --> 00:20:17
level lower abstraction for VIP coders.

00:20:13 --> 00:20:19
Is that code? Is that the IDE? Is that

00:20:16 --> 00:20:21
something else? But curious about your

00:20:18 --> 00:20:23
you guys take. I think this is a super

00:20:20 --> 00:20:26
good question and and let me try to

00:20:22 --> 00:20:29
rephrase the question a little bit like

00:20:25 --> 00:20:30
what is the thing that future people

00:20:28 --> 00:20:32
that want to do software development

00:20:29 --> 00:20:33
need to learn, right? Is it is it is it

00:20:31 --> 00:20:35
one level deeper? Is it actually

00:20:32 --> 00:20:36
something that's sitting more to the

00:20:34 --> 00:20:38
side? I mean there's actually some

00:20:35 --> 00:20:40
people say look there's no point in in

00:20:37 --> 00:20:42
learning CS anymore. Yeah. It's all

00:20:39 --> 00:20:43
about social emotional learning and and

00:20:41 --> 00:20:45
the kind of things. I'm not sure I agree

00:20:42 --> 00:20:47
with that. Right. But it's I feel like

00:20:44 --> 00:20:49
that comes up every 20 years or so.

00:20:46 --> 00:20:51
Definitely is a cycle there. Yeah.

00:20:48 --> 00:20:52
Honestly, I have absolutely no idea how

00:20:50 --> 00:20:54
the equivalent of computer science

00:20:51 --> 00:20:56
ducation will look like in 5 years,

00:20:53 --> 00:20:59
right? when when when we're on the other

00:20:55 --> 00:21:01
side of this you're probably I mean

00:20:58 --> 00:21:03
historically what happened when we did

00:21:00 --> 00:21:05
similar things say with with calculation

00:21:02 --> 00:21:09
right when we went from adding numbers

00:21:04 --> 00:21:11
manually to Excel right it's not that

00:21:08 --> 00:21:13
he whole job category disappeared right

00:21:10 --> 00:21:14
it's more that bookkeepers became

00:21:12 --> 00:21:16
accountants or something like that right

00:21:14 --> 00:21:18
edit entering data and writing down

00:21:15 --> 00:21:19
umbers and adding them manually became

00:21:17 --> 00:21:22
less important and doing higher level

00:21:18 --> 00:21:23
more abstract concepts became more

00:21:21 --> 00:21:26
important so for a pattern match that

00:21:22 --> 00:21:28
one to one you The guess would be that

00:21:25 --> 00:21:29
you know explaining the problem

00:21:27 --> 00:21:31
statement, explaining the algorithmic

00:21:28 --> 00:21:33
foundations, explaining architecture and

00:21:30 --> 00:21:35
explaining data flow is getting more

00:21:32 --> 00:21:37
important. And the nitty-gritty coding,

00:21:34 --> 00:21:38
you know, what's the most clever way to

00:21:36 --> 00:21:42
unroll a for loop? That's a very

00:21:38 --> 00:21:43
specialized more niche um discipline. It

00:21:41 --> 00:21:45
does almost feel like we're waiting for

00:21:42 --> 00:21:47
something, doesn't it? Right? Like like

00:21:44 --> 00:21:49
if you think about a a sort of classical

00:21:46 --> 00:21:52
computer science undergraduate

00:21:48 --> 00:21:54
ducation, you you don't just learn kind

00:21:51 --> 00:21:56
of the latest thing, you know, at least

00:21:53 --> 00:21:58
in a lot of programs, you learn you may

00:21:55 --> 00:21:59
do a semester of sort of assembly,

00:21:57 --> 00:22:01
right? You actually learn all the oldest

00:21:58 --> 00:22:03
hings. Yeah. You start with the old or

00:22:00 --> 00:22:04
you know, we even had to take like a

00:22:02 --> 00:22:06
processors course, right? And I'm the

00:22:03 --> 00:22:07
world's worst computer engineer, but

00:22:05 --> 00:22:09
like you know, I got in there and I was

00:22:06 --> 00:22:11
like connecting gates and you know, like

00:22:08 --> 00:22:12
that was fun. So you learn you learn

00:22:10 --> 00:22:14
like how processors work. You learn

00:22:11 --> 00:22:17
assembly. We did a course on lisp which

00:22:14 --> 00:22:19
was cool. You know we did file systems

00:22:16 --> 00:22:21
and some bits of operating systems and

00:22:18 --> 00:22:22
you know you learn Java like Java was

00:22:20 --> 00:22:25
tate-of-the-art at the time. That's why

00:22:21 --> 00:22:26
I mentioned it before not not anymore

00:22:24 --> 00:22:29
obviously. So it's tempting to say this

00:22:26 --> 00:22:31
this is like the next kind of thing

00:22:28 --> 00:22:33
that is kind of built on top of those

00:22:30 --> 00:22:35
things and that you would learn to code

00:22:32 --> 00:22:37
kind of only for historical reasons or

00:22:34 --> 00:22:39
for educational reasons. I just don't

00:22:36 --> 00:22:41
know yet if that's actually true. like a

00:22:38 --> 00:22:43
lot of the kind of layers we've added on

00:22:40 --> 00:22:45
top over over over the course of

00:22:42 --> 00:22:48
decades are are things that truly are a

00:22:44 --> 00:22:49
new programming interface. AI is not

00:22:47 --> 00:22:52
actually a programming interface, right?

00:22:48 --> 00:22:53
It's not actually a framework. It's it's

00:22:51 --> 00:22:55
ort of a tool that uses things you

00:22:52 --> 00:22:57
already helped you use things you

00:22:54 --> 00:22:58
already have. So I that just makes me

00:22:56 --> 00:23:01
wonder if we're waiting for kind of the

00:22:58 --> 00:23:03
next iteration of this thing like

00:23:00 --> 00:23:05
the thing that AI actually can like

00:23:02 --> 00:23:06
change about the way computers are

00:23:04 --> 00:23:08
programmed. for instance, it could just

00:23:05 --> 00:23:09
be prompts that are somehow, you know,

00:23:07 --> 00:23:11
that are somehow translated to code in a

00:23:08 --> 00:23:13
more direct way, you know, like and and

00:23:10 --> 00:23:14
agents as we see them now are kind of a

00:23:12 --> 00:23:17
starting point there. So that that's

00:23:13 --> 00:23:17
what I'm sort of curious

00:23:17 --> 00:23:23
about today. I think AI is not just a

00:23:20 --> 00:23:24
higher level language abstraction or

00:23:22 --> 00:23:27
something like that, but could it become

00:23:24 --> 00:23:29
one over time? That's the question. I

00:23:26 --> 00:23:31
don't do you do you think yes? I I think

00:23:28 --> 00:23:32
it could. I mean, look, I think we

00:23:30 --> 00:23:35
really haven't figured that out yet. I

00:23:32 --> 00:23:37
mean it's if if I look at a classic say

00:23:34 --> 00:23:40
compiler design or or you know in in in

00:23:36 --> 00:23:43
programming languages if I would have

00:23:39 --> 00:23:45
LLMs as a tool I would probably think

00:23:42 --> 00:23:47
about very differently about how I would

00:23:44 --> 00:23:50
build a compiler. Mhm. Yeah. And I don't

00:23:46 --> 00:23:51
hink we've seen that work its way

00:23:49 --> 00:23:52
through yet. I have no idea how it's

00:23:50 --> 00:23:53
going to look like. Right. But if if I

00:23:51 --> 00:23:55
can basically define certain things in

00:23:52 --> 00:23:57
human language in efficient way and you

00:23:54 --> 00:24:00
know maybe in a sort of tight enough way

00:23:56 --> 00:24:01
I can use this directly as as input for

00:23:59 --> 00:24:02
a compiler that could change a lot of

00:24:00 --> 00:24:04
things.

00:24:01 --> 00:24:06
analogy here would be like because a lot

00:24:03 --> 00:24:09
of companies are building agent-based

00:24:05 --> 00:24:11
systems and then when you kind of take a

00:24:08 --> 00:24:13
look at that system when you see what

00:24:10 --> 00:24:15
he agents are building you're like oh

00:24:12 --> 00:24:17
this is what I learned in operating

00:24:14 --> 00:24:19
system class many years ago these are

00:24:16 --> 00:24:21
processes one process fork another one

00:24:18 --> 00:24:23
and then hence the task to another one

00:24:20 --> 00:24:25
and then something else manage the

00:24:22 --> 00:24:27
resource of the system I don't think we

00:24:24 --> 00:24:29
have the framework like this is why I

00:24:26 --> 00:24:31
think the CS education will not go away

00:24:28 --> 00:24:32
because it give you a way to compare the

00:24:30 --> 00:24:34
few things otherwise you wouldn't have

00:24:31 --> 00:24:37
known there's a thing called process in

00:24:33 --> 00:24:38
the first place but at the same time I

00:24:36 --> 00:24:41
don't think on the on top of the

00:24:37 --> 00:24:43
foundational model we have invented the

00:24:40 --> 00:24:45
paradigm to make that work as if it's an

00:24:42 --> 00:24:48
operating system formal languages exist

00:24:44 --> 00:24:49
for a reason right I guess is the is the

00:24:47 --> 00:24:51
one thing I would say whether that's a

00:24:48 --> 00:24:53
programming language or you know a

00:24:50 --> 00:24:57
specification language or something like

00:24:53 --> 00:25:02
that there has to be some high

00:24:56 --> 00:25:04
bandwidth expressive way for a person to

00:25:01 --> 00:25:07
design software or or anything but

00:25:04 --> 00:25:10
software in this case. So I just have a

00:25:06 --> 00:25:12
hard time seeing you know Python going

00:25:09 --> 00:25:14
away or or programming languages going

00:25:11 --> 00:25:15
away entirely. You know to Yoko your

00:25:13 --> 00:25:18
point about you have to understand at

00:25:14 --> 00:25:19
least one level of abstraction down. Um

00:25:17 --> 00:25:20
it is an interesting interesting

00:25:18 --> 00:25:21
question if some will be more popular

00:25:19 --> 00:25:23
than others because they're kind of more

00:25:20 --> 00:25:25
AI native in a way. We're you know we're

00:25:22 --> 00:25:27
sort of seeing Python and JavaScript are

00:25:24 --> 00:25:29
kind of leading the pack right now

00:25:26 --> 00:25:30
but but you know it's not clear. Um,

00:25:28 --> 00:25:31
tooling I think is another really

00:25:29 --> 00:25:34
interesting thing. Like we're seeing a

00:25:30 --> 00:25:36
bunch of new Python tooling come out

00:25:33 --> 00:25:38
right now which is kind of cool because

00:25:35 --> 00:25:39
the uh the Python ecosystem is kind of

00:25:37 --> 00:25:41
more active than than ever and you can

00:25:38 --> 00:25:42
imagine that sort of has an impact on

00:25:40 --> 00:25:44
you know how well does it work with with

00:25:41 --> 00:25:46
kind of the AI you know add-ons to the

00:25:43 --> 00:25:47
language too. So so you know I I just

00:25:45 --> 00:25:49
don't think we can toss these things out

00:25:46 --> 00:25:52
completely. I

00:25:48 --> 00:25:55
think the reason behind you need to know

00:25:51 --> 00:25:58
a level like a abstraction level deeper

00:25:54 --> 00:26:00
is if and when you need to do

00:25:57 --> 00:26:02
ptimization on the system you're

00:25:59 --> 00:26:05
writing you just need to know how to

00:26:01 --> 00:26:06
ptimize that. uh if you don't then you

00:26:04 --> 00:26:08
really don't need to know like there's a

00:26:05 --> 00:26:09
lot of people who back in the days

00:26:07 --> 00:26:13
coding Java and never heard of you know

00:26:08 --> 00:26:15
JVM or know how it worked just uh like

00:26:12 --> 00:26:18
creating a calculator using Java you

00:26:14 --> 00:26:20
don't need to know JVM but if you want

00:26:17 --> 00:26:22
o optimize for you know runtime

00:26:19 --> 00:26:25
threading you do need to know JVM it's

00:26:21 --> 00:26:26
very similar with the vibe coding uh use

00:26:24 --> 00:26:28
cases if you're just building a

00:26:25 --> 00:26:29
marketing website I I don't think you

00:26:27 --> 00:26:32
need to know the next level of

00:26:28 --> 00:26:33
optimization like unless you're serving

00:26:31 --> 00:26:35
something at scale then you probably

00:26:32 --> 00:26:38
need to know what CDNs are, you know,

00:26:34 --> 00:26:40
how to cache pages, things like that.

00:26:37 --> 00:26:43
But at the same time, like if you're

00:26:39 --> 00:26:45
someone who uh aspire to serve something

00:26:42 --> 00:26:47
at scale and then want to, you know,

00:26:44 --> 00:26:50
flesh out the real service one day, it's

00:26:46 --> 00:26:52
really hard to get away without knowing

00:26:49 --> 00:26:55
the underlying knobs because the essence

00:26:51 --> 00:26:57
is there are certain things computers

00:26:54 --> 00:26:59
can do and these things are, you know,

00:26:56 --> 00:27:01
defined by formal languages. One

00:26:58 --> 00:27:04
language is buried under the other. Uh

00:27:00 --> 00:27:06
and then to touch these knobs and then

00:27:03 --> 00:27:08
to know what to even do, you need to

00:27:05 --> 00:27:10
know these languages. Yeah. So curious

00:27:07 --> 00:27:12
about your take too, Gradle. No, and I

00:27:09 --> 00:27:17
agree. I think formal languages won't go

00:27:11 --> 00:27:18
away because ultimately they they seem

00:27:16 --> 00:27:20
complicated, but I think effectively a

00:27:17 --> 00:27:23
formal language often the simplest type

00:27:19 --> 00:27:26
representation you can you can find to

00:27:22 --> 00:27:27
specify intent, right? doing that in a a

00:27:25 --> 00:27:29
language like natural language is is

00:27:26 --> 00:27:31
often very imprecise and you need a lot

00:27:28 --> 00:27:33
more words to to get the to get the same

00:27:30 --> 00:27:35
result. I mean I think the the

00:27:32 --> 00:27:38
interesting question at the moment is

00:27:34 --> 00:27:40
are there cases where AI has enough

00:27:37 --> 00:27:42
context from understanding humans and

00:27:39 --> 00:27:43
enough context from you inserting clever

00:27:41 --> 00:27:47
ad symbols and pulling in additional

00:27:42 --> 00:27:48
pages um that it can take for a certain

00:27:46 --> 00:27:51
subset of problems natural language

00:27:47 --> 00:27:53
descriptions and and um translate it

00:27:50 --> 00:27:54
accurately. And I mean it seems like

00:27:52 --> 00:27:56
there are there are areas where that's

00:27:53 --> 00:27:57
possible, right? So that's what we're

00:27:55 --> 00:28:00
using every day when we use use AI for

00:27:57 --> 00:28:01
coding. So can you hybridize that

00:27:59 --> 00:28:02
somehow that you actually create a

00:28:00 --> 00:28:04
language of of that type? Right. I don't

00:28:02 --> 00:28:06
know yet. I mean your distinction is

00:28:03 --> 00:28:08
really interesting, right? Like uh

00:28:05 --> 00:28:09
complicated is this word complicated is

00:28:07 --> 00:28:12
ort of overloaded, right? And in one

00:28:08 --> 00:28:14
sense it can mean a highly, you know,

00:28:11 --> 00:28:15
complex system that has a lot of pieces

00:28:13 --> 00:28:17
and you never quite know how it's going

00:28:14 --> 00:28:18
to behave. On the other hand, it may

00:28:16 --> 00:28:20
mean just kind of hard to use, right?

00:28:18 --> 00:28:22
And I think people sometimes see

00:28:19 --> 00:28:23
programming languages complicated in the

00:28:21 --> 00:28:25
sense that they're hard to use or hard

00:28:22 --> 00:28:26
to learn, right? You need to learn this

00:28:24 --> 00:28:28
kind of new language to speak in.

00:28:25 --> 00:28:31
They're actually very simple, right? You

00:28:27 --> 00:28:33
can you can draw a a tree that sort of,

00:28:30 --> 00:28:34
you know, encapsulates the entire set of

00:28:32 --> 00:28:36
things that can be expressed in that

00:28:33 --> 00:28:39
language. So, it's it's funny. We're

00:28:36 --> 00:28:40
we're switching to this thing called AI

00:28:38 --> 00:28:42
coding that's easier to use, but

00:28:39 --> 00:28:44
actually much more complicated under the

00:28:41 --> 00:28:47
hood. You know, insert meme about giant

00:28:43 --> 00:28:49
green monster with a mask on, you know,

00:28:46 --> 00:28:50
like here. So like so so to your point

00:28:48 --> 00:28:51
it's like how do you how do you sort of

00:28:49 --> 00:28:54
handle that and is it some hybrid

00:28:50 --> 00:28:56
solution or or something else? Um I know

00:28:53 --> 00:28:58
the the guys at Cursor have always

00:28:55 --> 00:28:59
talked about kind of formal

00:28:57 --> 00:29:02
specifications which which I think you

00:28:58 --> 00:29:04
alluded to also Guido as as kind of like

00:29:01 --> 00:29:06
writing a a spec in a really clear way

00:29:03 --> 00:29:08
as kind of the task that people will be

00:29:05 --> 00:29:10
faced with more and more over time. It's

00:29:07 --> 00:29:13
it's almost like an annealing process

00:29:09 --> 00:29:14
between you and the AI to go from some

00:29:12 --> 00:29:17
loosely formed model that you have and

00:29:14 --> 00:29:19
loosely formed model that the AI has to

00:29:16 --> 00:29:21
a tight spec that you can implement

00:29:18 --> 00:29:24
at the end of the day. This is so true.

00:29:20 --> 00:29:26
I talked to a classical vibe coder

00:29:23 --> 00:29:27
ecently and then because like my

00:29:25 --> 00:29:29
question was do you really need the

00:29:26 --> 00:29:31
coding interface like you know how you

00:29:28 --> 00:29:34
enter a prompt it generates bunch of

00:29:30 --> 00:29:37
code and this voders's uh answer was so

00:29:33 --> 00:29:40
interesting uh he said uh I like that

00:29:36 --> 00:29:42
he AI is generating code and showing me

00:29:39 --> 00:29:46
it's very empowering for me to see that

00:29:42 --> 00:29:48
I generated all this code and but when I

00:29:45 --> 00:29:49
want to go in and actually change

00:29:47 --> 00:29:52
something myself I don't know where to

00:29:48 --> 00:29:54
start so it tell me that there's a gap

00:29:51 --> 00:29:57
between what the AI generated and where

00:29:53 --> 00:29:58
you know v coders uh operate. It does

00:29:56 --> 00:30:01
feel like there is a product somewhere

00:29:57 --> 00:30:03
between like you we want to um give them

00:30:00 --> 00:30:05
the power to actually change the

00:30:02 --> 00:30:08
underlying knobs too. I mean this is not

00:30:04 --> 00:30:09
restricted to people who are not

00:30:07 --> 00:30:12
experienced programmers by the way like

00:30:08 --> 00:30:14
if one of us tried to vibe code an app

00:30:11 --> 00:30:16
after four to five turns if you went in

00:30:13 --> 00:30:18
to try to edit the code it would be very

00:30:15 --> 00:30:20
difficult. It's very opaque what's going

00:30:17 --> 00:30:23
on. I ran into this when I was trying

00:30:19 --> 00:30:25
out uh the Blender MCP. I've never used

00:30:22 --> 00:30:27
Blender before kind of like it's just

00:30:24 --> 00:30:30
really hard piece of software to get

00:30:26 --> 00:30:34
into, but um so I installed the MCP

00:30:29 --> 00:30:37
server on my cursor uh IDE and then I

00:30:33 --> 00:30:40
was able to prompt uh like a mini statue

00:30:36 --> 00:30:44
of A6Z infra uh just very easily. But

00:30:40 --> 00:30:47
when it comes to uh modifying this 3D

00:30:43 --> 00:30:48
representation, like that's where things

00:30:46 --> 00:30:50
you know start to break apart. I don't

00:30:47 --> 00:30:51
even know where to start, why I need to

00:30:49 --> 00:30:55
model. Yeah. Like a flat surface has

00:30:50 --> 00:30:57
like 10,000 polygons. Yeah. But there's

00:30:54 --> 00:30:59
a lot of opportunities here like kind of

00:30:56 --> 00:31:01
existing in the gaps of AI and VIP

00:30:58 --> 00:31:04
coders and what the representation is

00:31:00 --> 00:31:06
today. What's really cool about this is

00:31:03 --> 00:31:09
you're sort of creating a new layer

00:31:05 --> 00:31:11
of context and a new layer of intent in

00:31:08 --> 00:31:13
software programming that that didn't

00:31:10 --> 00:31:17
exist before. So So for instance, can AI

00:31:12 --> 00:31:18
help port old code? Right? this is one

00:31:16 --> 00:31:20
of these like the banks have been trying

00:31:17 --> 00:31:22
to drop cobalt for you know for hundred

00:31:19 --> 00:31:24
years or something like that and

00:31:21 --> 00:31:26
personally I think the answer is kind of

00:31:23 --> 00:31:27
no right like it can definitely help but

00:31:25 --> 00:31:29
it doesn't solve the hard problem and

00:31:26 --> 00:31:32
I mean that in the in the following

00:31:28 --> 00:31:35
way right like AI may be able to

00:31:31 --> 00:31:37
transpile you know cobalt to Java but

00:31:34 --> 00:31:39
here's a huge amount of context in what

00:31:36 --> 00:31:41
went into creating that cobalt code

00:31:38 --> 00:31:43
that's been totally lost right over the

00:31:40 --> 00:31:45
course of decades in many cases

00:31:42 --> 00:31:47
omething that started as an airline

00:31:44 --> 00:31:49
booking system became and airline

00:31:46 --> 00:31:52
booking plus HR plus you know fetch the

00:31:48 --> 00:31:53
coffee system and many of the people who

00:31:51 --> 00:31:55
contributed to it and by the way didn't

00:31:52 --> 00:31:57
write a lot of documentation or comments

00:31:54 --> 00:31:59
may not be around anymore at the company

00:31:56 --> 00:32:01
or you know on this earth right so and

00:31:58 --> 00:32:03
so but and and so this is a problem

00:32:00 --> 00:32:04
that AI I think can help and not solve

00:32:02 --> 00:32:05
but what's actually even more

00:32:03 --> 00:32:08
interesting about this to me we talk

00:32:04 --> 00:32:10
about specifications is like if they had

00:32:07 --> 00:32:11
been using AI at the time to create

00:32:09 --> 00:32:13
those systems there would be this whole

00:32:10 --> 00:32:15
other record of what their intention was

00:32:12 --> 00:32:16
um when they were creating the software

00:32:14 --> 00:32:17
that kind of comes for free, right? It's

00:32:15 --> 00:32:19
not something you have to go back and

00:32:16 --> 00:32:21
o. And I think that's something that's

00:32:18 --> 00:32:23
kind of cool now, like if we see this

00:32:20 --> 00:32:24
kind of take off more and more, you have

00:32:22 --> 00:32:26
this kind of other set of metadata that

00:32:23 --> 00:32:28
can kind of capture the the software

00:32:25 --> 00:32:29
intent in a slightly different way. It's

00:32:27 --> 00:32:32
almost like a higher level language

00:32:28 --> 00:32:34
abstraction, isn't it? But it's I think

00:32:31 --> 00:32:36
it's different, right? Like because it

00:32:33 --> 00:32:38
doesn't like you can't compile it down,

00:32:35 --> 00:32:40
you know what I mean? Sort of. You can

00:32:37 --> 00:32:41
feed it back. I agree. It's sort of But

00:32:39 --> 00:32:42
actually, you're raising a very

00:32:40 --> 00:32:44
interesting point there. I recently

00:32:41 --> 00:32:47
talked to some large enterprises that

00:32:44 --> 00:32:48
are using AI to basically take legacy

00:32:46 --> 00:32:50
code bases specifically mainframes. So

00:32:47 --> 00:32:52
cobalt and PL1 is the other other good

00:32:49 --> 00:32:55
one there and and move that to more

00:32:51 --> 00:32:57
modern languages. And the it's super

00:32:54 --> 00:33:00
interesting. They they have exactly the

00:32:56 --> 00:33:02
issue that you described, which is that

00:32:59 --> 00:33:04
if you just um look at the the old

00:33:01 --> 00:33:05
codebase, you often have no idea what

00:33:03 --> 00:33:08
he intent was. And if you just try to

00:33:04 --> 00:33:10
translate that, you you pick up many of

00:33:07 --> 00:33:11
the idiosyncrasies of that old

00:33:09 --> 00:33:13
programming language, right? I mean,

00:33:10 --> 00:33:16
Java has much more modern constructs

00:33:12 --> 00:33:18
that you didn't have in in in Forrron.

00:33:15 --> 00:33:20
Maybe you want to use some of Cobalt,

00:33:17 --> 00:33:22
maybe you want to use some of those. So

00:33:19 --> 00:33:23
what I've heard from from now multiple

00:33:21 --> 00:33:25
organizations that they're

00:33:22 --> 00:33:28
saying the most efficient way for them

00:33:24 --> 00:33:30
is to actually go first and try to

00:33:27 --> 00:33:32
create a spec use to create a spec from

00:33:29 --> 00:33:35
that code right and once they have the

00:33:31 --> 00:33:36
spec then to reimplement the spec and

00:33:34 --> 00:33:38
that gets them much better results much

00:33:36 --> 00:33:40
more compact code much more modern code

00:33:37 --> 00:33:42
than than what they had originally and

00:33:39 --> 00:33:43
that is sort of an AI assisted problem

00:33:41 --> 00:33:45
for sure both of those problems I think.

00:33:42 --> 00:33:47
Yes it is. That's very cool. Yeah,

00:33:44 --> 00:33:49
that's interesting. Uh because I was

00:33:46 --> 00:33:51
actually just thinking about uh it's

00:33:48 --> 00:33:53
actually much easier to rewrite modern

00:33:50 --> 00:33:55
software like modern meaning something

00:33:52 --> 00:33:57
in the about past 10 years. It's like

00:33:54 --> 00:33:59
asier to implement from Angular to

00:33:56 --> 00:34:03
React especially both frameworks are

00:33:58 --> 00:34:06
well understood by the agent. It's much

00:34:02 --> 00:34:09
arder if the state PHP to Angular is a

00:34:05 --> 00:34:11
little PHP I mean Laravel is you know

00:34:08 --> 00:34:12
orking out pretty well. So that one's

00:34:10 --> 00:34:14
uh easier depends on what kind of

00:34:11 --> 00:34:18
ramework you're using. It's much harder

00:34:13 --> 00:34:20
if the state one is spanning across many

00:34:17 --> 00:34:23
software uh systems uh because like you

00:34:19 --> 00:34:25
just need to do some discovery or have

00:34:22 --> 00:34:27
an agent that can have access to this

00:34:24 --> 00:34:30
discovery. I can see that working out.

00:34:26 --> 00:34:32
And two, there's specific uh

00:34:29 --> 00:34:35
specificities on the hardware some of

00:34:31 --> 00:34:37
these things are running on. Uh like for

00:34:34 --> 00:34:40
example like uh for the runtime maybe I

00:34:36 --> 00:34:41
give it enough memory for this docker

00:34:39 --> 00:34:44
container I need to have specific

00:34:40 --> 00:34:46
onfigs to make this work. Uh sometimes

00:34:43 --> 00:34:48
like to your point all of that is lost

00:34:45 --> 00:34:50
until the day we can take a snapshot of

00:34:47 --> 00:34:52
the runtime like how is this run? What's

00:34:49 --> 00:34:54
the requirement of this? It's hard to

00:34:51 --> 00:34:57
migrate systems like that. I'm now

00:34:53 --> 00:35:00
getting like pre- nightmares of like

00:34:56 --> 00:35:02
something goes down in prod and you're

00:34:59 --> 00:35:04
digging through the chat GPT logs to

00:35:01 --> 00:35:07
like try to figure out what someone

00:35:03 --> 00:35:07
might have accidentally tried to

00:35:09 --> 00:35:15
do. Guido, I have sort of an interesting

00:35:12 --> 00:35:17
question for you. Like if you think of

00:35:14 --> 00:35:19
AI as a primitive in a in an

00:35:16 --> 00:35:22
application, not just a tool to write

00:35:18 --> 00:35:24
code, it does seem like it's kind of the

00:35:21 --> 00:35:27
pushing the frontier of the degree of

00:35:23 --> 00:35:29
kind of like uncertainty and and like

00:35:26 --> 00:35:31
non-deterministic behavior we can we can

00:35:28 --> 00:35:33
have in software, right? like like if

00:35:30 --> 00:35:35
you think like really old days kind of

00:35:32 --> 00:35:38
probably predating you know a lot of a

00:35:34 --> 00:35:39
lot of us and our our listeners um you

00:35:37 --> 00:35:41
know you just write software for like a

00:35:38 --> 00:35:43
local machine and you could have a

00:35:40 --> 00:35:44
pretty good expectation of of how it was

00:35:42 --> 00:35:46
going to execute. We had this new thing

00:35:44 --> 00:35:48
called the network, right? Which is

00:35:45 --> 00:35:49
which is very hard to predict how it's

00:35:47 --> 00:35:52
going to behave, but but you can kind of

00:35:48 --> 00:35:53
express it in the same terms, right? It

00:35:51 --> 00:35:55
feels it feels like a problem that you

00:35:52 --> 00:35:57
can wrap your arms around. It feels like

00:35:54 --> 00:35:58
AI is kind of an extension of that in a

00:35:56 --> 00:36:00
way where like you actually don't know

00:35:57 --> 00:36:02
hat's going to happen when you when you

00:35:59 --> 00:36:04
add AI into your software or or use it

00:36:01 --> 00:36:06
o write code or whatever. Like how do

00:36:03 --> 00:36:07
you how do you think about that? Do you

00:36:05 --> 00:36:09
think that's a reasonable way to look at

00:36:06 --> 00:36:12
it? And are there any lessons from kind

00:36:08 --> 00:36:13
of the networking world to um you know

00:36:11 --> 00:36:15
that that would help us figure out

00:36:12 --> 00:36:17
what's going to happen in AI? Yeah, I

00:36:14 --> 00:36:19
mean I want to say probably because I

00:36:16 --> 00:36:21
don't think we have the lessons fully

00:36:18 --> 00:36:24
digested yet. When it went to network

00:36:20 --> 00:36:26
systems there were sort of new failure

00:36:23 --> 00:36:28
modes like timeouts and you know then

00:36:25 --> 00:36:30
ew remedies for this like retries and

00:36:28 --> 00:36:32
you know and uh once you got to sort of

00:36:29 --> 00:36:34
distributed database you had to worry

00:36:31 --> 00:36:35
about automicity and roll backs in in a

00:36:33 --> 00:36:37
digital context. things got very

00:36:34 --> 00:36:39
complicated very quickly and I think for

00:36:36 --> 00:36:41
some of these design some of the design

00:36:38 --> 00:36:42
patterns today even today we don't have

00:36:40 --> 00:36:44
ry good software architectures yet

00:36:42 --> 00:36:46
right there still and they may be kind

00:36:43 --> 00:36:47
of unsolvable some of these problems

00:36:45 --> 00:36:50
right that's I mean I think the

00:36:46 --> 00:36:51
fundamental problem is not solvable but

00:36:49 --> 00:36:52
you can at least make it as easy as

00:36:50 --> 00:36:54
possible for a developer right I mean

00:36:52 --> 00:36:56
everything is just tools for the

00:36:53 --> 00:36:59
developer to to cushion some of the blow

00:36:55 --> 00:37:01
models are funny because at temperature

00:36:58 --> 00:37:03
zero a model is technically

00:37:00 --> 00:37:06
deterministic right so it's it's not so

00:37:02 --> 00:37:08
much that different inputs that the same

00:37:05 --> 00:37:10
input would pay result in different

00:37:07 --> 00:37:11
outputs. That's that's something we do

00:37:09 --> 00:37:14
by choice. I think the bigger problem is

00:37:10 --> 00:37:16
that an infantessimally small change in

00:37:13 --> 00:37:17
the input can have an arbitrary large

00:37:15 --> 00:37:19
ffect. So it's a chaotic system. You're

00:37:16 --> 00:37:23
saying chaotic system. Exactly. The user

00:37:18 --> 00:37:24
could put anything into a text box and

00:37:22 --> 00:37:26
the system is chaotic enough that you

00:37:23 --> 00:37:28
get you know like it used to be you just

00:37:25 --> 00:37:30
had to check for apostrophes and then

00:37:27 --> 00:37:31
you could execute a database statement.

00:37:29 --> 00:37:32
Like there's only a few things that

00:37:30 --> 00:37:34
could break a text box. Now, like kind

00:37:31 --> 00:37:36
of anything could happen when when

00:37:33 --> 00:37:38
someone enters text. That's right.

00:37:35 --> 00:37:39
Ignore all previous instructions. But

00:37:37 --> 00:37:41
hat's a really interesting thing you're

00:37:38 --> 00:37:43
saying that it may it may be the case

00:37:40 --> 00:37:44
that we just need to expose the

00:37:42 --> 00:37:47
primitives and capabilities of the

00:37:43 --> 00:37:49
system in a way that developers can use,

00:37:46 --> 00:37:51
not necessarily tamp down all of the,

00:37:48 --> 00:37:53
you know, all the failure modes, you

00:37:50 --> 00:37:55
know, the the equivalent of a timeout,

00:37:52 --> 00:37:56
for instance. I think that's one part of

00:37:54 --> 00:37:59
it, but I think we also have to change

00:37:55 --> 00:38:02
our expectations. So there was I I

00:37:58 --> 00:38:05
talked to one large bank and they they

00:38:01 --> 00:38:08
implemented software and the the um you

00:38:04 --> 00:38:09
know they to basically generate text and

00:38:07 --> 00:38:10
you know one of the important things in

00:38:08 --> 00:38:12
financial institutions never give

00:38:09 --> 00:38:15
investment advice, right? And so you're

00:38:11 --> 00:38:17
trying to have an LM that is very

00:38:14 --> 00:38:19
helpful and never even implicitly gives

00:38:16 --> 00:38:20
investment advice. That's of an

00:38:18 --> 00:38:21
unsolvable problem, right? you can you

00:38:20 --> 00:38:22
can get better and better and better,

00:38:20 --> 00:38:24
but you can never completely rule it

00:38:22 --> 00:38:26
out. And you can add a second element

00:38:23 --> 00:38:27
hat tries to catch it, but also will

00:38:25 --> 00:38:30
occasionally not catch something because

00:38:26 --> 00:38:32
it's it thinks it's helpful. And at the

00:38:29 --> 00:38:33
nd of the day, they basically made a

00:38:31 --> 00:38:35
decision to say, you know, we can't

00:38:32 --> 00:38:37
build a software system that never does

00:38:34 --> 00:38:38
this. We have to change our metrics. We

00:38:36 --> 00:38:39
basically have to go and I think they

00:38:37 --> 00:38:41
ended up with something like it has to

00:38:38 --> 00:38:43
be whatever half the probability of a

00:38:40 --> 00:38:46
human of a well-trained human doing the

00:38:42 --> 00:38:46
same situation.

00:38:47 --> 00:38:52
If we were to zoom out a little bit, you

00:38:49 --> 00:38:54
were there for the whole inter rise of

00:38:51 --> 00:38:55
the internet history and then you were a

00:38:53 --> 00:38:58
pioneer on you know a lot of the

00:38:54 --> 00:39:01
networking research. So how the internet

00:38:58 --> 00:39:04
came to be is there is a narrow waste of

00:39:00 --> 00:39:05
the internet somehow that happened. Do

00:39:03 --> 00:39:08
you think it would be a similar dynamics

00:39:04 --> 00:39:10
playing out in AI at all like is there

00:39:07 --> 00:39:13
analogy? Maybe the waste is never narrow

00:39:09 --> 00:39:14
for AI like for the waste the narrow

00:39:12 --> 00:39:17
aste. I think it's the prompt. Oh

00:39:13 --> 00:39:18
interesting how why is that the case? I

00:39:16 --> 00:39:20
mean I mean look the typically these big

00:39:17 --> 00:39:22
tech cycles are built on abstractions

00:39:19 --> 00:39:24
that allow you to encapsulate the

00:39:21 --> 00:39:27
complexity underneath in a very narrow

00:39:23 --> 00:39:28
API for say a database it was sickle

00:39:26 --> 00:39:31
right in the early database or the the

00:39:28 --> 00:39:33
transaction databases where how does the

00:39:30 --> 00:39:34
database under the query work it's

00:39:32 --> 00:39:36
omething with B star trees we learned

00:39:34 --> 00:39:37
that in grad school but that doesn't

00:39:35 --> 00:39:39
really matter anymore like I just need

00:39:36 --> 00:39:42
to be able to specify the query and I

00:39:38 --> 00:39:45
think that's the same thing that led to

00:39:41 --> 00:39:47
the rise of modern ML right you no

00:39:44 --> 00:39:50
longer need the overpaid Stanford PhD

00:39:46 --> 00:39:53
that that trains a model for you, but

00:39:49 --> 00:39:55
instead you can now express and steer

00:39:52 --> 00:39:57
the model with a prompt. And so, you

00:39:54 --> 00:39:59
know, a fairly uh say mediocre Python

00:39:56 --> 00:40:04
programmer can suddenly leverage a very

00:39:58 --> 00:40:05
powerful LLM just by by prompting it.

00:40:03 --> 00:40:07
Interesting. If you were to double click

00:40:04 --> 00:40:09
on the prompts, like do you think it's

00:40:06 --> 00:40:10
like a natural language representation

00:40:08 --> 00:40:12
of what you want to do or is it like

00:40:09 --> 00:40:14
because there's no standard there. It's

00:40:12 --> 00:40:16
like prompts can be anything and

00:40:13 --> 00:40:18
everything. It's like partly a narrow

00:40:15 --> 00:40:21
aist formal language, right? It's not a

00:40:18 --> 00:40:23
formal language. It's clearly not like

00:40:20 --> 00:40:25
English either, though, right? It's It

00:40:22 --> 00:40:27
makes me think latent. Yeah. I mean,

00:40:24 --> 00:40:28
we're all learning kind of a new

00:40:26 --> 00:40:29
language in order to prompt these

00:40:28 --> 00:40:32
things. And actually, it's a little

00:40:28 --> 00:40:33
different for each model. So, dialects,

00:40:31 --> 00:40:35
you know, we've got like a translation

00:40:32 --> 00:40:37
issue, all that kind of stuff. I mean,

00:40:34 --> 00:40:39
will we ever have a formal prompting

00:40:36 --> 00:40:41
language? Maybe. I think there are some,

00:40:38 --> 00:40:43
you know, some overpriced Stanford PhDs

00:40:40 --> 00:40:44
working on that problem. I'm I'm you

00:40:42 --> 00:40:46
know hopeful to see what they come up

00:40:43 --> 00:40:49
with. Are Asian frameworks formal

00:40:45 --> 00:40:50
prompting languages?

00:40:48 --> 00:40:52
I think a little bit. Yeah, a little

00:40:49 --> 00:40:54
bit. Yeah, I mean we're certainly seeing

00:40:51 --> 00:40:56
starting to see prompts with structure,

00:40:53 --> 00:40:59
right? Um where it's like I don't know

00:40:55 --> 00:41:01
user something agent response or

00:40:58 --> 00:41:02
something like that or you know think

00:41:00 --> 00:41:04
and think beginning of the answer end of

00:41:02 --> 00:41:06
the answer and you say like okay good

00:41:03 --> 00:41:09
it's like two tags and a lot of text

00:41:05 --> 00:41:11
hat's not not very formal but I think

00:41:08 --> 00:41:13
the the first starting points are there.

00:41:10 --> 00:41:14
You could see future models getting

00:41:12 --> 00:41:16
trained and fine-tuned on a more

00:41:13 --> 00:41:17
structured representation. Oh yeah,

00:41:15 --> 00:41:19
we're already seeing this happening,

00:41:16 --> 00:41:22
right? There's uh models, every model

00:41:18 --> 00:41:24
has JSON mode now. Uh and then how you

00:41:21 --> 00:41:26
define what you want out of the JSON

00:41:23 --> 00:41:30
mode is like you give it a type system.

00:41:25 --> 00:41:33
It's like uh you can prompt like I want

00:41:29 --> 00:41:36
uh you to generate three fruits but only

00:41:32 --> 00:41:38
return it to fruits uh colon like you

00:41:35 --> 00:41:41
know apples uh like fruit uh like types

00:41:37 --> 00:41:43
of fruits and then you could define it

00:41:40 --> 00:41:45
in your code saying I only want your

00:41:42 --> 00:41:47
answer to be you know have the fruits

00:41:44 --> 00:41:50
key I don't want anything else I guess

00:41:46 --> 00:41:52
that's like a kind of formalization

00:41:49 --> 00:41:54
longterm I actually wonder if the like

00:41:51 --> 00:41:55
for for a reasoning model where a lot of

00:41:53 --> 00:41:57
the the thinking sort of happens

00:41:54 --> 00:41:58
internally

00:41:56 --> 00:42:00
If the model is generating the

00:41:57 --> 00:42:01
userfacing machine facing output, it's

00:41:59 --> 00:42:03
going to be a different model from the

00:42:00 --> 00:42:06
model doing the reasoning if that makes

00:42:02 --> 00:42:08
ense. Right? So the you know I I like a

00:42:05 --> 00:42:10
really a chatty chatty model or somebody

00:42:07 --> 00:42:12
else um you know wants a more tourist

00:42:09 --> 00:42:15
model or if you want to have generate

00:42:11 --> 00:42:17
JSON output you know one want have yet

00:42:14 --> 00:42:20
another model. So you could see sort of

00:42:16 --> 00:42:24
the the model output layer daminating at

00:42:19 --> 00:42:24
some point from the reasoning layer.

00:42:25 --> 00:42:29
In the future, do we think there's going

00:42:26 --> 00:42:31
to be different vibe coding models

00:42:28 --> 00:42:32
versus enterprise coding models? I

00:42:30 --> 00:42:35
actually don't think so. Oh. Well, I

00:42:31 --> 00:42:37
define vibe coding as you kind of let

00:42:34 --> 00:42:38
he model, you have a spec, you let the

00:42:36 --> 00:42:40
model generate whatever it needs to with

00:42:38 --> 00:42:42
e implementation detail. You don't

00:42:39 --> 00:42:44
care about the implementation, but you

00:42:41 --> 00:42:46
do care about what comes out of that

00:42:43 --> 00:42:48
implementation is what you wanted. So,

00:42:45 --> 00:42:50
it's less less formal, less constraint

00:42:47 --> 00:42:51
han classic coding. What what is the

00:42:49 --> 00:42:53
difference between web coding and

00:42:50 --> 00:42:55
classic coding? I think for classical

00:42:52 --> 00:42:58
coding you have to make a lot more

00:42:54 --> 00:43:01
choices in what you want to put in a

00:42:57 --> 00:43:03
code. So I want to use this this SDK and

00:43:00 --> 00:43:05
all the other one. For VIP coding you

00:43:02 --> 00:43:07
just don't care about the underlying

00:43:04 --> 00:43:09
technical details as long as the model

00:43:06 --> 00:43:11
drive. Yeah. As long as it gets things

00:43:08 --> 00:43:12
done but you still care about the higher

00:43:10 --> 00:43:16
level needs. Otherwise why are you

00:43:12 --> 00:43:18
writing this? Got it. So I can totally

00:43:15 --> 00:43:21
see enterprise users doing VIP coding

00:43:17 --> 00:43:21
and that's a compliment.

<!-- YOUTUBE_TRANSCRIPT_END -->
