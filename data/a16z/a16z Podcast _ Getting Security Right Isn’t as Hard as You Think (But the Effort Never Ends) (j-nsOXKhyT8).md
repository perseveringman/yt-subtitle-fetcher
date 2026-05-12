---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "j-nsOXKhyT8"
title: "a16z Podcast | Getting Security Right Isn’t as Hard as You Think (But the Effort Never Ends)"
video_url: "https://www.youtube.com/watch?v=j-nsOXKhyT8"
thumbnail_url: "https://i.ytimg.com/vi/j-nsOXKhyT8/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=j-nsOXKhyT8"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2019-01-02T05:28:22.000Z"
upload_date: "2019-01-02"
duration_seconds: 1684
duration_human: "28:04"
view_count: 71
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T15:43:57.182Z"
---

# a16z Podcast | Getting Security Right Isn’t as Hard as You Think (But the Effort Never Ends)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=j-nsOXKhyT8
- video_id: j-nsOXKhyT8
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2019-01-02T05:28:22.000Z
- upload_date: 2019-01-02
- duration: 28:04
- view_count: 71
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

The paradox of security is we pretty much know what we are supposed to do most of the time -- but we don’t do it. If you examine all the recent high profile attacks, somebody in the organization knew something was wrong before it happened. They just didn’t have the ability to escalate the problem, or the ability to raise a flag that people took seriously.

The lack of foundational security hygiene is what makes companies vulnerable to relatively mundane attacks, which are far more likely to hit your company than some sophisticated nation-state mounted attack. “There’s this misconception that we can’t defend against these attacks because we can’t deal with the sophistication of the attackers,” says Tanium CTO Orion Hindawi. “In turns out, we should just be doing the good hygiene we’ve all been trying to do for the last 20 years.” In this segment of the a16z Podcast, Hindawi shares how to get your security hygiene right -- not just from a technical perspective, but from a cultural one as well.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
welcome to the a 16z podcast i'm michael

00:00:02 --> 00:00:08
copeland and i am here at the

00:00:04 --> 00:00:10
adquarters of teh neum with Orion and

00:00:07 --> 00:00:12
AH we CTO Orion thanks for coming or

00:00:09 --> 00:00:15
actually I'm visiting you so thanks for

00:00:11 --> 00:00:16
having me pleasure either way I just saw

00:00:14 --> 00:00:18
literally I was coming up in the

00:00:15 --> 00:00:19
levator I just saw that WikiLeaks had

00:00:17 --> 00:00:21
posted hundreds of thousands of emails

00:00:18 --> 00:00:24
and more data from the Sony hack it

00:00:20 --> 00:00:25
seems to have been a pretty bad year I

00:00:23 --> 00:00:28
mean it's a tough year if you've been a

00:00:24 --> 00:00:30
security person and 2013 was certainly a

00:00:27 --> 00:00:33
tough year and you know a couple of

00:00:29 --> 00:00:34
years before that is it getting worse so

00:00:32 --> 00:00:36
there are a couple factors there so the

00:00:33 --> 00:00:38
first factor really is that we're

00:00:35 --> 00:00:40
getting better at detecting that we've

00:00:37 --> 00:00:43
been attacked and so I think a lot of

00:00:39 --> 00:00:45
customers have invested in detective

00:00:42 --> 00:00:46
mechanisms so that they can see that bad

00:00:44 --> 00:00:48
things are happening and I think we're

00:00:45 --> 00:00:50
actually surfacing a lot of stuff that

00:00:47 --> 00:00:51
used to happen and we just didn't even

00:00:49 --> 00:00:53
know it was happening

00:00:50 --> 00:00:54
and we're detecting it faster now and

00:00:52 --> 00:00:57
we've got better telemetry on what's

00:00:53 --> 00:00:58
happening and I think that's factoring

00:00:56 --> 00:01:01
into this I think another thing that

00:00:57 --> 00:01:04
we're seeing that definitely is getting

00:01:00 --> 00:01:06
worse is that companies are keeping more

00:01:03 --> 00:01:07
and more of their data online they've

00:01:05 --> 00:01:09
got more and more of this data

00:01:06 --> 00:01:11
ccessible to the internet because

00:01:08 --> 00:01:14
they're using it for customer facing

00:01:10 --> 00:01:15
activity and that opens up surface area

00:01:13 --> 00:01:16
of vulnerability and I think the

00:01:14 --> 00:01:19
attackers are actually getting a lot

00:01:15 --> 00:01:21
better we're definitely seeing the

00:01:18 --> 00:01:24
sophistication of the attacks that we're

00:01:20 --> 00:01:25
looking at increasing and I think the

00:01:23 --> 00:01:27
volume of data that they can go after

00:01:24 --> 00:01:30
and the accessibility of that data

00:01:26 --> 00:01:32
driven by business use and driven by the

00:01:29 --> 00:01:34
business that our customers are in and

00:01:31 --> 00:01:37
how having that customer data accessible

00:01:33 --> 00:01:39
to the internet enables that business is

00:01:36 --> 00:01:41
giving them more to attack rates of

00:01:38 --> 00:01:45
doctors sister there's more out there

00:01:40 --> 00:01:46
it's more valuable so I'm a hacker I'm

00:01:44 --> 00:01:49
going to go after it but there's this

00:01:45 --> 00:01:50
tension then between all these systems

00:01:48 --> 00:01:52
that we want online all this data that

00:01:49 --> 00:01:55
we want to put on like online that as

00:01:51 --> 00:01:57
you say is part of doing business so

00:01:54 --> 00:01:59
what are the gaps then if we're gonna

00:01:57 --> 00:02:01
live in this world of you know

00:01:58 --> 00:02:02
everything's connected I can work from

00:02:00 --> 00:02:04
anywhere I can bring in third-party

00:02:01 --> 00:02:07
vendors vendors and they can access my

00:02:03 --> 00:02:09
system - what are the gaps then that are

00:02:06 --> 00:02:11
need to be filled and you know that are

00:02:08 --> 00:02:14
making us in some ways more vulnerable

00:02:10 --> 00:02:17
so you know the irony of security

00:02:13 --> 00:02:18
is we all pretty much know what we're

00:02:16 --> 00:02:20
supposed to be doing most of the time if

00:02:17 --> 00:02:22
you're a security expert and you've been

00:02:19 --> 00:02:23
doing this for a while we all know that

00:02:21 --> 00:02:26
hey're just good hygiene things we've

00:02:22 --> 00:02:28
supposed to have done this whole time so

00:02:25 --> 00:02:30
patching your devices having disk

00:02:27 --> 00:02:33
encryption locally on devices that have

00:02:29 --> 00:02:35
data at rest having things like dual

00:02:32 --> 00:02:36
factor authentication and things like

00:02:34 --> 00:02:39
agents that are on endpoints like

00:02:35 --> 00:02:40
antivirus that are working the

00:02:38 --> 00:02:43
fundamental problem that I think we're

00:02:39 --> 00:02:45
seeing is that people aren't doing a lot

00:02:42 --> 00:02:47
of those things and I think the more

00:02:44 --> 00:02:49
that you integrate third-party vendors

00:02:46 --> 00:02:52
the more that you have data that's

00:02:48 --> 00:02:54
present that you can access from

00:02:51 --> 00:02:56
internet-facing devices the more

00:02:53 --> 00:02:58
important it is that this basic hygiene

00:02:55 --> 00:03:00
get followed if you look at the attacks

00:02:57 --> 00:03:02
that we've been seeing you know this

00:02:59 --> 00:03:04
kind of this thought that these

00:03:01 --> 00:03:06
nation-states with you know thousands of

00:03:03 --> 00:03:08
people are attacking every customer and

00:03:05 --> 00:03:11
that may be true in some specific cases

00:03:07 --> 00:03:13
but in many cases when you actually look

00:03:10 --> 00:03:15
at the actual tangible attacks that

00:03:12 --> 00:03:17
people are seeing they're exploiting

00:03:14 --> 00:03:20
known vulnerabilities they're exploding

00:03:16 --> 00:03:21
customers not putting dual factor where

00:03:19 --> 00:03:23
they thought they would or disk

00:03:20 --> 00:03:25
encryption or they should have and this

00:03:22 --> 00:03:26
just block-and-tackle hygiene issues

00:03:24 --> 00:03:28
they're not actually be super

00:03:25 --> 00:03:30
sophisticated you know James bond-style

00:03:27 --> 00:03:32
somebody's parachuting through a

00:03:29 --> 00:03:34
skylight in Jing and your data center

00:03:31 --> 00:03:35
it's it is this misconception that we

00:03:33 --> 00:03:37
can't defend against these attacks

00:03:34 --> 00:03:39
because we can't deal with the

00:03:36 --> 00:03:41
sophistication of the attackers it turns

00:03:38 --> 00:03:43
out we should just be doing the good

00:03:40 --> 00:03:45
hygiene we've all been trying to do for

00:03:42 --> 00:03:47
the last you know whatever it is 20

00:03:44 --> 00:03:48
years and in many cases our customers

00:03:46 --> 00:03:51
are just realizing that they've been

00:03:47 --> 00:03:53
failing for 20 years and now they're

00:03:50 --> 00:03:56
actually realizing the frequency that

00:03:52 --> 00:03:58
hey're being attacked by relatively

00:03:55 --> 00:04:00
mundane attackers because they haven't

00:03:57 --> 00:04:01
been doing all the things that they

00:03:59 --> 00:04:03
thought they should have done this whole

00:04:00 --> 00:04:05
time and they just didn't notice it but

00:04:02 --> 00:04:09
so are you something that the psychology

00:04:04 --> 00:04:12
is today among some folks that look we

00:04:08 --> 00:04:14
can't win anyway so why bother or is it

00:04:11 --> 00:04:17
hat well it wasn't a problem in the

00:04:13 --> 00:04:19
past so I don't need to check all the

00:04:16 --> 00:04:21
boxes and do what I should I think it's

00:04:18 --> 00:04:22
more of people are realizing that they

00:04:20 --> 00:04:23
have

00:04:21 --> 00:04:26
been doing all the things they've been

00:04:22 --> 00:04:28
told to do for so long that they don't

00:04:25 --> 00:04:31
believe it's possible to do them so I

00:04:27 --> 00:04:34
mean I'll make an analogy right I mean

00:04:30 --> 00:04:37
if I told you that every day you had to

00:04:33 --> 00:04:40
go and exercise three hours a day and

00:04:36 --> 00:04:44
eat perfectly and you know live an

00:04:39 --> 00:04:48
extremely healthy life with you yeah

00:04:43 --> 00:04:50
most people would fail right yeah if you

00:04:47 --> 00:04:52
knew that you were going to die this

00:04:49 --> 00:04:54
year because you weren't doing that

00:04:51 --> 00:04:56
stuff you'd probably make a really good

00:04:53 --> 00:04:58
effort most of our customers have gotten

00:04:55 --> 00:05:00
to the point where they don't believe

00:04:57 --> 00:05:02
it's possible to do all the things

00:04:59 --> 00:05:04
they've been told to do so they're

00:05:01 --> 00:05:05
signed basically to dying every year

00:05:03 --> 00:05:08
they're resigned to getting attacked

00:05:04 --> 00:05:09
constantly because they don't think it's

00:05:07 --> 00:05:10
possible to patch all their devices

00:05:08 --> 00:05:13
because they don't think that it's

00:05:09 --> 00:05:15
possible for them to get all of the

00:05:12 --> 00:05:17
antivirus and hips and disk encryption

00:05:14 --> 00:05:19
working the way that they were supposed

00:05:16 --> 00:05:21
to password policies kicking off

00:05:18 --> 00:05:22
machines off their network that weren't

00:05:20 --> 00:05:23
supposed to be there in the first place

00:05:21 --> 00:05:25
I mean these are all the problems our

00:05:22 --> 00:05:27
industry has been basically tackling for

00:05:24 --> 00:05:29
the last 20 years and now people have

00:05:26 --> 00:05:32
been trying because they don't think

00:05:28 --> 00:05:33
it's possible to do those things to find

00:05:31 --> 00:05:35
a silver bullet so you know I'm not

00:05:32 --> 00:05:36
gonna name the names of vendors but when

00:05:34 --> 00:05:38
you start looking at them you'll start

00:05:36 --> 00:05:40
seeing some of these guys touting that

00:05:37 --> 00:05:41
if you install my agent on this end

00:05:39 --> 00:05:44
point everything automatically gets

00:05:40 --> 00:05:46
fixed right extend your exercise analogy

00:05:43 --> 00:05:48
just like just take this pill now for

00:05:45 --> 00:05:50
five minutes a day and like boom you're

00:05:47 --> 00:05:53
done even not that right I mean ideas

00:05:49 --> 00:05:54
just exercise once in your life and then

00:05:52 --> 00:05:56
it'll all carry over for the rest of

00:05:53 --> 00:05:58
your life and unfortunately insecurity

00:05:55 --> 00:05:59
that's never been true I mean if you

00:05:57 --> 00:06:01
look back at the last thirty years of

00:05:58 --> 00:06:03
security there's been a vendor every

00:06:00 --> 00:06:05
ear that's come up with a new theory on

00:06:02 --> 00:06:07
how if you just do one thing everything

00:06:04 --> 00:06:09
will be fine and truth of security is

00:06:06 --> 00:06:11
it's never been that way and it'll never

00:06:08 --> 00:06:13
be that way you have to do you know

00:06:10 --> 00:06:15
eating healthy and exercising every day

00:06:12 --> 00:06:16
if you actually want to keep secure and

00:06:14 --> 00:06:19
there's no way to be a hundred percent

00:06:15 --> 00:06:21
secure but the truth of the matter is if

00:06:18 --> 00:06:24
you look across the 10 biggest attacks

00:06:20 --> 00:06:26
us here all of them tied back to pretty

00:06:23 --> 00:06:28
mundane things that the organization

00:06:25 --> 00:06:31
knew they were supposed to do that they

00:06:27 --> 00:06:33
didn't do and really our emphasis from a

00:06:30 --> 00:06:34
security posture standpoint is it's

00:06:32 --> 00:06:35
great that we're looking for

00:06:33 --> 00:06:37
sophisticated inside

00:06:34 --> 00:06:39
threat from geniuses we should be doing

00:06:36 --> 00:06:42
that too but before you get there

00:06:38 --> 00:06:45
or nation-state attack prevention which

00:06:41 --> 00:06:48
is almost impossible let's just do the

00:06:44 --> 00:06:51
basic stuff if I'm in charge of security

00:06:47 --> 00:06:53
or if I'm running a company period and

00:06:50 --> 00:06:54
those that have kind of made that shift

00:06:52 --> 00:06:55
where they're not looking for a magic

00:06:53 --> 00:06:58
bullet but they're doing the sort of

00:06:54 --> 00:07:00
good hygiene blocking and tackling what

00:06:57 --> 00:07:04
if you can describe that mindset and

00:06:59 --> 00:07:06
that sort of environment that allows for

00:07:03 --> 00:07:08
that what what does that look like and

00:07:05 --> 00:07:10
feel like okay so one of the biggest

00:07:07 --> 00:07:11
hings that has to happen is the

00:07:09 --> 00:07:14
security and operations teams need to

00:07:10 --> 00:07:16
actually become friends so if you think

00:07:13 --> 00:07:18
about what I've been talking about here

00:07:15 --> 00:07:20
a lot of it is detected by security so

00:07:17 --> 00:07:22
flaws in the environment that aren't

00:07:19 --> 00:07:23
really up to the compliance standard

00:07:21 --> 00:07:25
that the organisation setting and the

00:07:22 --> 00:07:27
operations team is often responsible for

00:07:24 --> 00:07:30
fixing it so we've been talking about

00:07:26 --> 00:07:31
patches or antivirus updates or being

00:07:29 --> 00:07:34
able to do things like disk encryption

00:07:30 --> 00:07:35
those have to involve operations and one

00:07:33 --> 00:07:38
of the biggest problems that we see in

00:07:34 --> 00:07:40
enterprises that we work in is that

00:07:37 --> 00:07:42
hose two teams are not a hundred

00:07:39 --> 00:07:43
percent in sync right the operations

00:07:41 --> 00:07:45
team is really worried about some

00:07:42 --> 00:07:46
problems the security team is worried

00:07:44 --> 00:07:48
about a completely different set of

00:07:45 --> 00:07:50
problems and until those two teams

00:07:47 --> 00:07:52
really get on the same page it's not

00:07:49 --> 00:07:54
going to work because there's gonna be a

00:07:51 --> 00:07:56
huge gap between what security wants to

00:07:53 --> 00:07:58
happen and what operations is actually

00:07:55 --> 00:08:01
doing and so the most successful

00:07:57 --> 00:08:02
organizations that we're seeing and we

00:08:00 --> 00:08:04
would encourage all of our customers to

00:08:01 --> 00:08:05
move in this direction you've got

00:08:03 --> 00:08:07
security and operations really

00:08:04 --> 00:08:09
joined-at-the-hip both understanding

00:08:06 --> 00:08:11
this is an existential threat to their

00:08:08 --> 00:08:14
organization if they don't do it well

00:08:10 --> 00:08:16
and really coordinating on finding and

00:08:13 --> 00:08:18
then fixing very quickly any gaps that

00:08:15 --> 00:08:20
exist in the work is is that

00:08:17 --> 00:08:23
relationship you know as operations

00:08:19 --> 00:08:25
worried that their ability to function

00:08:22 --> 00:08:27
gets hampered by security or is it more

00:08:24 --> 00:08:30
that security sort of doesn't know the

00:08:26 --> 00:08:32
ins and outs of and vice-versa ins and

00:08:29 --> 00:08:34
outs of what operations does and and you

00:08:31 --> 00:08:37
know and and doesn't therefore know how

00:08:33 --> 00:08:39
to attend to it so I mean there are a

00:08:36 --> 00:08:41
few things so one of them is operations

00:08:38 --> 00:08:44
is really responsible for keeping the

00:08:40 --> 00:08:46
organization working and the more change

00:08:43 --> 00:08:47
you make and the faster you make it the

00:08:45 --> 00:08:48
more likely it is that you're going to

00:08:46 --> 00:08:51
break something

00:08:47 --> 00:08:53
security always super urgent when it

00:08:50 --> 00:08:54
comes to you know we've got a flaw we

00:08:52 --> 00:08:56
think it might be exploitable we

00:08:53 --> 00:08:58
absolutely need to fix it and operations

00:08:55 --> 00:08:59
typically is going to look at it as you

00:08:57 --> 00:09:02
know how do we make sure that we're

00:08:58 --> 00:09:04
implementing the change at a rate where

00:09:01 --> 00:09:05
we're not dooming the org to having a

00:09:03 --> 00:09:07
huge business knowledge because we

00:09:04 --> 00:09:09
changed something and it broke something

00:09:06 --> 00:09:11
and so there's a natural tension there

00:09:08 --> 00:09:13
what's really important is that security

00:09:10 --> 00:09:15
actually understand why operations wants

00:09:12 --> 00:09:17
to be deliberate and conversely

00:09:14 --> 00:09:20
operations needs to understand why

00:09:16 --> 00:09:22
security is so urgent and you know the

00:09:19 --> 00:09:24
reality is you really can do something

00:09:21 --> 00:09:26
in an hour across the largest

00:09:23 --> 00:09:28
environments in the world if everybody

00:09:25 --> 00:09:30
gets together you've got the right tools

00:09:27 --> 00:09:32
and you're pushing as hard as possible

00:09:29 --> 00:09:33
and I know that sounds hyperbolic to a

00:09:31 --> 00:09:35
lot of people because many people are

00:09:32 --> 00:09:36
gonna listen to this and say you know if

00:09:34 --> 00:09:38
I'm running the largest enterprises in

00:09:35 --> 00:09:40
the world I've never done anything in

00:09:37 --> 00:09:44
less than weeks right and the reality is

00:09:39 --> 00:09:46
you can do it in minutes if the tool set

00:09:43 --> 00:09:48
is upgraded to allow you to do it and if

00:09:45 --> 00:09:50
everybody understands the urgency and

00:09:47 --> 00:09:52
the requirements to make sure that the

00:09:49 --> 00:09:53
operational focus of the environment is

00:09:51 --> 00:09:55
maintained right

00:09:52 --> 00:09:56
and it's urgency not in the sense of

00:09:54 --> 00:09:59
like okay let's all freak out now it's

00:09:55 --> 00:10:02
urgency like okay we have a plan you

00:09:58 --> 00:10:05
know it's DEFCON 5 push the button let's

00:10:01 --> 00:10:07
go it's urgency in the sense that if you

00:10:04 --> 00:10:10
look at every one of the attacks that we

00:10:06 --> 00:10:13
saw somebody in that org knew something

00:10:09 --> 00:10:16
was wrong before it happened they just

00:10:12 --> 00:10:18
didn't have the latitude to escalate it

00:10:15 --> 00:10:20
hey didn't have the ability and the

00:10:17 --> 00:10:22
organization that effect change they

00:10:19 --> 00:10:24
weren't actually screaming from the

00:10:21 --> 00:10:27
parapets we need to fix us in having

00:10:23 --> 00:10:29
anybody listen and what you see in the

00:10:26 --> 00:10:31
best-run environments is the security

00:10:28 --> 00:10:34
has a seat at the highest table and

00:10:30 --> 00:10:36
they're able to really raise a flag and

00:10:33 --> 00:10:39
as soon as they raise it people take it

00:10:35 --> 00:10:41
very seriously em they understand the

00:10:38 --> 00:10:43
requirements in the organization not to

00:10:40 --> 00:10:45
blow the organization up because we're

00:10:42 --> 00:10:47
moving too quickly so urgency doesn't

00:10:44 --> 00:10:48
mean let's run with our hair on fire

00:10:46 --> 00:10:50
around and try and fix every issue

00:10:47 --> 00:10:53
without thinking about it urgency means

00:10:49 --> 00:10:54
that we can't afford to just forget

00:10:52 --> 00:10:56
about these things and bring them up

00:10:53 --> 00:10:57
three weeks later and then probably

00:10:55 --> 00:10:59
forget about them then and bring them up

00:10:56 --> 00:11:01
three weeks later which in all honesty

00:10:58 --> 00:11:03
and a lot of security organization

00:11:00 --> 00:11:04
have Vanar abilities they detected years

00:11:02 --> 00:11:07
ago that are still not being fixed right

00:11:03 --> 00:11:08
if that's the level of urgency in the

00:11:06 --> 00:11:10
organization to respond the security

00:11:07 --> 00:11:12
need this is a very high likelihood that

00:11:09 --> 00:11:15
hey're being attacked successfully

00:11:11 --> 00:11:18
right and it's you know shame on them

00:11:14 --> 00:11:19
and it gets back to this this notion of

00:11:17 --> 00:11:22
like you need an environment where again

00:11:19 --> 00:11:24
people understand both sides like I can

00:11:21 --> 00:11:27
imagine that you don't want to raise the

00:11:23 --> 00:11:28
alarm if that's gonna you are worried

00:11:26 --> 00:11:31
that it's gonna slow down the business

00:11:27 --> 00:11:34
and or there's been this kind of you

00:11:30 --> 00:11:35
know message from the top that look what

00:11:33 --> 00:11:38
we do is build the business and we grow

00:11:34 --> 00:11:40
grow and we go fast fast fast it's

00:11:37 --> 00:11:42
hard to put on the brakes if you see

00:11:39 --> 00:11:44
something in that sort of environment so

00:11:41 --> 00:11:45
let me just say I mean you were asking

00:11:43 --> 00:11:48
about the biggest change in the last

00:11:44 --> 00:11:50
year the biggest change were seeing is

00:11:47 --> 00:11:52
that there's board level acknowledgment

00:11:49 --> 00:11:54
hat this is an existential threat to

00:11:51 --> 00:11:57
the business so it used to be that

00:11:53 --> 00:12:00
security was annoying and often it was

00:11:56 --> 00:12:01
kind of will accept this risk the

00:11:59 --> 00:12:03
likelihood that it's gonna actually

00:12:00 --> 00:12:04
cause massive damage is pretty low if it

00:12:02 --> 00:12:06
is we can probably contain it we

00:12:03 --> 00:12:08
probably don't have to disclose it there

00:12:05 --> 00:12:10
were a lot of these kind of

00:12:07 --> 00:12:12
rationalizations around security and I

00:12:09 --> 00:12:14
think the watershed moment was the

00:12:11 --> 00:12:16
target breach where the CEO got fired

00:12:13 --> 00:12:19
the board got sued the whole stack and

00:12:15 --> 00:12:21
IT got replaced and you know potentially

00:12:18 --> 00:12:23
billions of dollars of damage were

00:12:20 --> 00:12:25
caused and when you take a step back and

00:12:22 --> 00:12:28
think about that now I was talking to a

00:12:24 --> 00:12:30
CEO recently and he told me and you know

00:12:27 --> 00:12:32
and this is now a quote I've repeated a

00:12:29 --> 00:12:34
number of times but that you know he's

00:12:31 --> 00:12:36
got three existential threats to his

00:12:33 --> 00:12:39
business nuclear weapons meteors and

00:12:35 --> 00:12:40
cybersecurity right right he never would

00:12:38 --> 00:12:42
have said that five years ago and he

00:12:39 --> 00:12:44
admits that he says you know five years

00:12:41 --> 00:12:46
ago I was worried about regulation and

00:12:43 --> 00:12:48
my China strategy in my competition and

00:12:45 --> 00:12:51
now I'm worried about three things only

00:12:47 --> 00:12:54
one of which I actually have any control

00:12:50 --> 00:12:56
over right and so that change drives

00:12:53 --> 00:12:57
behavior across the organization you

00:12:55 --> 00:12:59
look at a lot of these big companies

00:12:56 --> 00:13:01
they're spending literally ten times

00:12:58 --> 00:13:04
more on security than they were five

00:13:00 --> 00:13:06
years ago and the reason is there's a

00:13:03 --> 00:13:07
realization at the top level of the

00:13:05 --> 00:13:10
organization that we can't kick the can

00:13:06 --> 00:13:11
down the road anymore and that having

00:13:09 --> 00:13:14
operations come back and say well this

00:13:10 --> 00:13:16
annoying is not a good enough reason

00:13:13 --> 00:13:18
to do it five years ago it wasn't true

00:13:15 --> 00:13:21
you talked to a lot of large companies

00:13:17 --> 00:13:22
who are grappling with this how is the

00:13:20 --> 00:13:24
conversation talking how it happens at

00:13:21 --> 00:13:26
he board level now and had the highest

00:13:23 --> 00:13:29
levels of the company yeah if I'm a

00:13:25 --> 00:13:31
company that hasn't been hacked is the

00:13:28 --> 00:13:32
conversation is something much different

00:13:30 --> 00:13:36
han a company that just has gone

00:13:31 --> 00:13:38
through a breach yeah so there's this

00:13:35 --> 00:13:41
concept in our industry that it's good

00:13:37 --> 00:13:43
for security companies when their

00:13:40 --> 00:13:45
customers get breached it's actually not

00:13:42 --> 00:13:48
rue and the reason it's not true is

00:13:44 --> 00:13:51
that often what you see in companies

00:13:47 --> 00:13:53
that have been attacked is a very

00:13:50 --> 00:13:55
neurotic behavior pattern for three or

00:13:52 --> 00:13:57
four months after the attack where they

00:13:54 --> 00:13:59
will pay anything for somebody to walk

00:13:56 --> 00:14:01
in and tell them that everything's fine

00:13:58 --> 00:14:02
which is actually not our business right

00:14:00 --> 00:14:03
I mean we don't really want to come in

00:14:01 --> 00:14:05
and tell you everything's fine or that

00:14:02 --> 00:14:07
we'll handle it and if it's really

00:14:04 --> 00:14:09
systemic change that needs to happen in

00:14:06 --> 00:14:12
the org for them to be fine and we can't

00:14:08 --> 00:14:14
affect that change they have to but you

00:14:11 --> 00:14:16
end up with people who are getting fired

00:14:13 --> 00:14:17
people who are constantly in meetings

00:14:15 --> 00:14:19
trying to defend themselves instead of

00:14:16 --> 00:14:21
actually make change and I'm just saying

00:14:18 --> 00:14:23
you know generalizing across the

00:14:20 --> 00:14:25
hundreds of customers who we've seen but

00:14:22 --> 00:14:27
it's actually not a very fertile

00:14:24 --> 00:14:31
nvironment for a good decision making

00:14:26 --> 00:14:34
right and so you know we will often get

00:14:30 --> 00:14:36
business out of those situations but

00:14:33 --> 00:14:38
it's not the kind of business that I

00:14:35 --> 00:14:41
actually prefer my preferences a

00:14:37 --> 00:14:43
deliberate decision by the board or the

00:14:40 --> 00:14:45
CEO or the management chain and IT that

00:14:42 --> 00:14:46
hey have to really reprioritize around

00:14:44 --> 00:14:49
security typically because they saw

00:14:45 --> 00:14:51
their peer get attacked right and then

00:14:48 --> 00:14:53
they want to actually build a strategy

00:14:50 --> 00:14:55
so there's no real strategic thinking

00:14:52 --> 00:14:57
that we typically see in the two months

00:14:54 --> 00:14:59
after an attack typically we see hair on

00:14:56 --> 00:15:01
fire behavior right people are getting

00:14:58 --> 00:15:05
fired you want to cover your you know

00:15:00 --> 00:15:07
your job yeah and those are not the kind

00:15:04 --> 00:15:10
of scenarios where we typically see

00:15:06 --> 00:15:12
thoughtful work now I will say this we

00:15:09 --> 00:15:14
have some customers I think target is a

00:15:11 --> 00:15:16
great example of one of them that are

00:15:13 --> 00:15:17
xtremely thoughtful and how we're

00:15:15 --> 00:15:20
thoughtful in the

00:15:17 --> 00:15:23
math of the breach they spent a lot of

00:15:19 --> 00:15:24
time building a real lasting structure

00:15:22 --> 00:15:27
and I think they've done one of the best

00:15:23 --> 00:15:28
jobs we've seen in building a security

00:15:26 --> 00:15:30
organization they should be extremely

00:15:27 --> 00:15:31
proud but unfortunately they're the

00:15:29 --> 00:15:35
xception not the rule

00:15:30 --> 00:15:37
in post breach situations and how has

00:15:34 --> 00:15:39
the culture sort of shifted at target

00:15:36 --> 00:15:41
Minh clearly you go through something

00:15:38 --> 00:15:44
like this everybody in the organization

00:15:40 --> 00:15:46
knows what happened and you know the

00:15:43 --> 00:15:49
consequences but then there's probably a

00:15:45 --> 00:15:51
tendency to sort of try and get past it

00:15:48 --> 00:15:53
and get on with business as usual

00:15:50 --> 00:15:55
so not a target at what we're seeing

00:15:52 --> 00:15:58
there is actually a continual

00:15:54 --> 00:16:00
realization that security is a permanent

00:15:57 --> 00:16:02
hing they need to be really careful

00:15:59 --> 00:16:05
with so I mean that org suffered

00:16:01 --> 00:16:07
tremendously during that breach and I

00:16:04 --> 00:16:08
think you know there's more public on

00:16:06 --> 00:16:12
this then I can repeat here that you

00:16:07 --> 00:16:14
know gives context but they hired a

00:16:11 --> 00:16:17
great C so he hired a great set of

00:16:13 --> 00:16:19
lieutenants all new into the org and

00:16:16 --> 00:16:21
what he did that I thought was really

00:16:18 --> 00:16:25
nice was he looked at the premier

00:16:20 --> 00:16:26
security executives from across the

00:16:24 --> 00:16:28
community he hired a bunch of people

00:16:25 --> 00:16:30
from the mandiant fire I crowd he hired

00:16:27 --> 00:16:32
a bunch of people from other places like

00:16:29 --> 00:16:34
General Electric that were super

00:16:31 --> 00:16:36
competent people and he built an org

00:16:33 --> 00:16:37
from the ground up and he had the

00:16:35 --> 00:16:39
latitude to do that because the

00:16:36 --> 00:16:41
organization that's top level of target

00:16:38 --> 00:16:44
he CEO on the board

00:16:40 --> 00:16:47
mandated that they do a world-class job

00:16:43 --> 00:16:48
and you know when you look at some of

00:16:46 --> 00:16:50
the people he hired especially some of

00:16:47 --> 00:16:53
the mandiant people they're exceptional

00:16:49 --> 00:16:54
people and I think he's built a kernel

00:16:52 --> 00:16:57
in that organization that's going to

00:16:53 --> 00:16:58
insist on an excellent org and that's a

00:16:56 --> 00:17:00
sea change from where they were two

00:16:57 --> 00:17:02
years ago you know let's say I'm not

00:16:59 --> 00:17:04
arget I don't have thousands of

00:17:01 --> 00:17:07
employees and you know thousands of

00:17:03 --> 00:17:09
stores for that matter how then on the

00:17:06 --> 00:17:13
spectrum do I want to view security you

00:17:08 --> 00:17:16
know as a smaller company but then also

00:17:12 --> 00:17:20
take us up to a big company in and I

00:17:15 --> 00:17:23
also want to circle back on your view of

00:17:19 --> 00:17:25
this personally like how it seems so

00:17:22 --> 00:17:30
rt of forbidding but maybe it

00:17:24 --> 00:17:31
shouldn't be so I'll say kind of a

00:17:29 --> 00:17:35
girl thing first and then I'll go

00:17:30 --> 00:17:37
through the spectrum security is scary

00:17:34 --> 00:17:40
because it can cause massive damage the

00:17:36 --> 00:17:42
same way that you know a lot of things

00:17:39 --> 00:17:44
in our lives are scary cars are scary

00:17:41 --> 00:17:46
because people die in them every day and

00:17:43 --> 00:17:47
most people aren't scared of cars they

00:17:45 --> 00:17:50
just realize they have to drive

00:17:47 --> 00:17:52
carefully right security should be

00:17:49 --> 00:17:53
treated the same way you should just be

00:17:51 --> 00:17:56
prudently

00:17:52 --> 00:17:58
cautious about the fact that if you have

00:17:55 --> 00:18:00
vulnerabilities you should be fixing

00:17:57 --> 00:18:01
them if you have users who are being

00:17:59 --> 00:18:04
added you should make sure that there's

00:18:00 --> 00:18:06
multi-factor enabled on them they're

00:18:03 --> 00:18:08
just kind of these good habits that

00:18:05 --> 00:18:11
everybody knows they're supposed to

00:18:07 --> 00:18:13
follow and a lot of organizations look

00:18:10 --> 00:18:16
like they're driving 120 miles an hour

00:18:12 --> 00:18:17
drunk right they're not doing any of the

00:18:15 --> 00:18:19
things that they should be doing and as

00:18:16 --> 00:18:21
a result of the fact that they're not

00:18:18 --> 00:18:24
doing those things they are really prone

00:18:20 --> 00:18:26
to accidents right there are rules in

00:18:23 --> 00:18:29
security and in operations in general

00:18:25 --> 00:18:30
you should be going and monitoring your

00:18:28 --> 00:18:32
network traffic in specific ways you

00:18:29 --> 00:18:33
should be implementing firewall policies

00:18:31 --> 00:18:35
that make sense

00:18:32 --> 00:18:36
you should be patching your assets you

00:18:34 --> 00:18:37
should be figuring out what data is

00:18:35 --> 00:18:39
being exfiltrated

00:18:36 --> 00:18:40
from the endpoint so that you can

00:18:38 --> 00:18:42
actually see it you should see where

00:18:39 --> 00:18:43
your critical data is and data leak

00:18:41 --> 00:18:46
protect it there are things you should

00:18:42 --> 00:18:49
be doing and that's exactly analogous to

00:18:45 --> 00:18:51
driving 65 miles an hour on the freeway

00:18:48 --> 00:18:54
sober and paying attention to the people

00:18:50 --> 00:18:56
around you right so when I hear people

00:18:53 --> 00:18:57
who are kind of terrified generally

00:18:55 --> 00:19:00
about security and feel like it's an

00:18:56 --> 00:19:02
out-of-control situation those tend to

00:18:59 --> 00:19:04
be the people where from the analogy

00:19:01 --> 00:19:06
they're not driving anywhere near the

00:19:03 --> 00:19:07
speed limit and they don't seem to care

00:19:05 --> 00:19:08
and they just want to get wherever

00:19:06 --> 00:19:09
they're trying to get as quickly as

00:19:07 --> 00:19:11
possible and they're getting an

00:19:08 --> 00:19:13
accidents every day and there's a direct

00:19:10 --> 00:19:16
correlation between their behavior and

00:19:12 --> 00:19:17
the results so my assertion would be

00:19:15 --> 00:19:20
this good hygiene that you should be

00:19:16 --> 00:19:22
practicing in security and operations

00:19:19 --> 00:19:25
everyone knows what it is let's just do

00:19:21 --> 00:19:27
it it turns out that if you do it you

00:19:24 --> 00:19:29
feel a lot better and the results are a

00:19:26 --> 00:19:31
lot better it's exactly like exercise or

00:19:28 --> 00:19:33
like driving safely it's you know let's

00:19:30 --> 00:19:34
take it two really basic things that

00:19:32 --> 00:19:37
everybody knows they're supposed to be

00:19:33 --> 00:19:39
doing so that's the first thing I'd say

00:19:36 --> 00:19:41
the second thing I'd say is Danian is

00:19:38 --> 00:19:43
focused primarily on global 2000

00:19:40 --> 00:19:45
companies for a reason which is

00:19:42 --> 00:19:47
there is not the capacity in small

00:19:44 --> 00:19:50
companies to do the same work that our

00:19:46 --> 00:19:51
biggest customers are doing it's not

00:19:49 --> 00:19:53
hat they shouldn't be doing it it's if

00:19:50 --> 00:19:55
they don't have security personnel on

00:19:52 --> 00:19:56
staff who have been three years of

00:19:54 --> 00:19:59
training and have years of experience in

00:19:55 --> 00:20:01
ferreting out advanced threat they may

00:19:58 --> 00:20:03
be attacked in some cases we're seeing

00:20:00 --> 00:20:05
stores where they've got a thousand

00:20:02 --> 00:20:07
employees and ten stores and they're

00:20:04 --> 00:20:09
being attacked yeah and the reason is

00:20:06 --> 00:20:11
they've got credit card data and credit

00:20:08 --> 00:20:12
card data is valuable I don't know that

00:20:10 --> 00:20:14
hey have the wherewithal or that they

00:20:11 --> 00:20:16
should be trying to build that expertise

00:20:13 --> 00:20:17
to deal with the same attacks that a

00:20:15 --> 00:20:21
target or a Walmart are trying to deal

00:20:16 --> 00:20:23
with now that said you know again there

00:20:20 --> 00:20:24
are some good hygiene things they can do

00:20:22 --> 00:20:27
there are endpoint solutions that are

00:20:23 --> 00:20:28
designed to be heuristic alee kind of

00:20:26 --> 00:20:30
preventative so you think about

00:20:27 --> 00:20:33
antivirus is kind of the most simple one

00:20:29 --> 00:20:35
and you look at things like you know

00:20:32 --> 00:20:37
host IPS or some of the other solutions

00:20:34 --> 00:20:39
that are being released on the endpoint

00:20:36 --> 00:20:40
hat are really heuristic you set them

00:20:38 --> 00:20:42
and forget them if you want to think

00:20:40 --> 00:20:44
about it that way

00:20:41 --> 00:20:46
ou should probably deploy some of those

00:20:43 --> 00:20:48
but I'll be honest that's not our area

00:20:45 --> 00:20:49
of expertise where we start playing is

00:20:47 --> 00:20:52
when we've got a five or ten thousand

00:20:49 --> 00:20:54
seed org they've got enough data at this

00:20:51 --> 00:20:55
point where it potentially could be a

00:20:53 --> 00:20:58
huge disclosure issue if they actually

00:20:54 --> 00:21:00
get attacked and they typically have a

00:20:57 --> 00:21:01
security set of personnel in the

00:20:59 --> 00:21:03
nvironment because they can't afford

00:21:00 --> 00:21:06
not to right I mean it's again a risk

00:21:02 --> 00:21:08
reward the risk benefit if you want to

00:21:05 --> 00:21:09
think about it that way in the end of

00:21:07 --> 00:21:12
the day if they don't have these people

00:21:08 --> 00:21:14
then they stand to have huge risk and so

00:21:11 --> 00:21:16
they'll expend the cost to actually

00:21:13 --> 00:21:18
build a practice within the org that

00:21:15 --> 00:21:21
allows them to kind of understand their

00:21:17 --> 00:21:24
security posture when you get to that

00:21:20 --> 00:21:26
point there are a few hundred things you

00:21:23 --> 00:21:28
should just be doing and you know this

00:21:25 --> 00:21:30
kind of a theme of the discussion

00:21:27 --> 00:21:32
right is yet you know we should start

00:21:29 --> 00:21:35
making sure that all those 200 things

00:21:31 --> 00:21:38
are done so password policy is domain

00:21:34 --> 00:21:40
presence being able to have good ideas

00:21:37 --> 00:21:42
of what's connected to the network and

00:21:39 --> 00:21:43
being able to see whether devices are

00:21:41 --> 00:21:45
unmanaged and bring them under

00:21:42 --> 00:21:47
management making sure that manage

00:21:44 --> 00:21:48
devices are being patched correctly and

00:21:46 --> 00:21:50
that the applications that are on them

00:21:47 --> 00:21:50
are actually the intended applications

00:21:49 --> 00:21:52
that they're being upgraded

00:21:49 --> 00:21:54
appropriately you know just kind of

00:21:51 --> 00:21:56
block and tackle IT

00:21:53 --> 00:21:58
and assuming that that's done then you

00:21:55 --> 00:22:00
start getting to the next level so we

00:21:57 --> 00:22:01
have many of our customers we're

00:21:59 --> 00:22:03
starting to do outlier analysis

00:22:00 --> 00:22:05
heuristic analysis to determine whether

00:22:02 --> 00:22:07
behavior patterns are changing looking

00:22:04 --> 00:22:09
at things like the insider threat I'll

00:22:06 --> 00:22:11
say though I mean when we walk into

00:22:08 --> 00:22:13
companies we've now deployed this thing

00:22:10 --> 00:22:15
in hundreds of companies and we've seen

00:22:12 --> 00:22:16
a cross-section of the global 2,000 that

00:22:14 --> 00:22:18
you know it's a pretty interesting

00:22:15 --> 00:22:20
cross-section I think maybe one or two

00:22:17 --> 00:22:22
percent of the companies that we've

00:22:19 --> 00:22:24
walked into really should have started

00:22:21 --> 00:22:28
talking about insider threat when we got

00:22:23 --> 00:22:31
here right the other 98 99 percent they

00:22:27 --> 00:22:34
weren't through the just block and

00:22:30 --> 00:22:36
tackle stuff and it's so fun to talk

00:22:33 --> 00:22:39
about insider threat nation-states and

00:22:35 --> 00:22:41
you know cloak-and-dagger it's just a

00:22:38 --> 00:22:43
waste of company resources unless you've

00:22:40 --> 00:22:45
got the framework built correctly to

00:22:42 --> 00:22:47
even approach that kind of attack if you

00:22:44 --> 00:22:49
haven't dealt with your patches you

00:22:46 --> 00:22:51
should be worried about kids that have

00:22:48 --> 00:22:53
access to Google not nation-states that

00:22:50 --> 00:22:55
want to attack you right that's kind of

00:22:52 --> 00:22:57
the point I'm making is that you know

00:22:54 --> 00:22:59
there there are thousands of people that

00:22:56 --> 00:23:01
are professional attackers that our

00:22:58 --> 00:23:04
nation state level or criminal attackers

00:23:00 --> 00:23:06
who can get into most companies there

00:23:03 --> 00:23:08
are millions of kids with Google who can

00:23:05 --> 00:23:09
figure out how to explain known

00:23:07 --> 00:23:12
vulnerabilities that aren't patched

00:23:08 --> 00:23:14
right in some ways the nation-state is

00:23:11 --> 00:23:16
the meteor that hits you not the sort of

00:23:13 --> 00:23:17
you know security breach that happens to

00:23:15 --> 00:23:20
a lot of folks guy I mean I think

00:23:16 --> 00:23:23
serious people in security have realized

00:23:19 --> 00:23:25
a long time ago that given infinite time

00:23:22 --> 00:23:27
and infinite money a nation-state will

00:23:24 --> 00:23:30
come out you and will succeed the

00:23:26 --> 00:23:33
reality of the situation is very few

00:23:29 --> 00:23:36
companies very few are equipped to

00:23:32 --> 00:23:39
actually deal with that threat in any

00:23:35 --> 00:23:40
way I don't even want to use the city of

00:23:38 --> 00:23:42
the word prevent because I don't think

00:23:39 --> 00:23:44
it's possible but even deal with it I

00:23:41 --> 00:23:46
think you look at our intelligence

00:23:43 --> 00:23:48
community they're fighting a war with

00:23:45 --> 00:23:50
other intelligence communities and

00:23:47 --> 00:23:52
nation-state actors outside they are

00:23:49 --> 00:23:54
probably more equipped but the truth of

00:23:51 --> 00:23:57
the matter is this is a bloody conflict

00:23:53 --> 00:23:59
it's not a clean we keep everybody out

00:23:56 --> 00:24:00
everything's perfect we go to sleep at

00:23:58 --> 00:24:05
night and everyone feels good even for

00:23:59 --> 00:24:08
them well and so as a company I go

00:24:04 --> 00:24:09
through the 200 things that I need to do

00:24:07 --> 00:24:13
I might even look at insider threat sort

00:24:08 --> 00:24:15
of risk and then then I just need to

00:24:12 --> 00:24:18
keep it up I just need to keep this sort

00:24:14 --> 00:24:20
of regime going and stay fit and stay

00:24:17 --> 00:24:23
sober is that so here's what I would say

00:24:19 --> 00:24:25
there's an almost infinite amount of

00:24:22 --> 00:24:26
optimization that you can do in security

00:24:24 --> 00:24:29
when you've got hundreds of thousands of

00:24:25 --> 00:24:31
assets everything that could be going

00:24:28 --> 00:24:34
wrong is going wrong somewhere right now

00:24:30 --> 00:24:36
right you'll never get perfect and the

00:24:33 --> 00:24:38
goal is to reduce the surface area as

00:24:35 --> 00:24:40
much as possible by tamping down the

00:24:37 --> 00:24:42
obvious stuff and most obvious and then

00:24:39 --> 00:24:43
moving up to the slightly more obvious

00:24:41 --> 00:24:45
or less obvious and then moving up to

00:24:42 --> 00:24:47
slightly less obvious and so far until

00:24:44 --> 00:24:51
you get to really esoteric kind of

00:24:46 --> 00:24:53
vulnerability most of our customers are

00:24:50 --> 00:24:55
at the first level of that when we walk

00:24:52 --> 00:24:56
in our goal is to ratchet them up a

00:24:54 --> 00:24:59
couple levels of less obvious

00:24:55 --> 00:25:02
vulnerability and give them the tools to

00:24:58 --> 00:25:03
keep going but the reality is given the

00:25:01 --> 00:25:05
flux of environments given the

00:25:02 --> 00:25:07
virtualization and cloud computing

00:25:04 --> 00:25:09
that's happening given the mobility and

00:25:06 --> 00:25:11
BYOD and all the other things that are

00:25:08 --> 00:25:14
happening the you know perimeter being

00:25:10 --> 00:25:16
dissolved in many companies in reality

00:25:13 --> 00:25:19
even if they don't want to admit it it's

00:25:15 --> 00:25:21
a never-ending process and unfortunately

00:25:18 --> 00:25:23
it's two steps forward one step back in

00:25:20 --> 00:25:25
many companies because as soon as you've

00:25:22 --> 00:25:27
stepped forward two steps of security

00:25:24 --> 00:25:28
org somebody from you know one of your

00:25:26 --> 00:25:30
business units comes back in and it has

00:25:27 --> 00:25:32
an awful idea that they want to do

00:25:29 --> 00:25:34
something and as soon as you hear you

00:25:31 --> 00:25:35
choked a little bit because you realize

00:25:33 --> 00:25:36
that this is going to obviate a lot of

00:25:34 --> 00:25:38
what you just did and you're gonna have

00:25:35 --> 00:25:41
to figure out how to deal with it so the

00:25:37 --> 00:25:43
other point that I would make is we

00:25:40 --> 00:25:45
can't build the security house for our

00:25:42 --> 00:25:47
customers what we can do is give them

00:25:44 --> 00:25:48
really effective tools that they can use

00:25:46 --> 00:25:50
to build the house and when somebody

00:25:47 --> 00:25:52
wants another bedroom added or a wall

00:25:49 --> 00:25:54
knocked down to make that as easy as

00:25:51 --> 00:25:57
possible and to confirm that you did it

00:25:53 --> 00:25:59
right right I mean you know to take the

00:25:56 --> 00:26:01
house analogy a little further you know

00:25:58 --> 00:26:02
many of our customers are constantly

00:26:00 --> 00:26:04
knocking down walls and they don't even

00:26:01 --> 00:26:07
know which walls are load-bearing and

00:26:03 --> 00:26:08
then the house crumbles right you need

00:26:06 --> 00:26:10
to actually have a good view of what you

00:26:07 --> 00:26:12
have you need to understand how it works

00:26:09 --> 00:26:14
and again you know I've said this many

00:26:11 --> 00:26:16
times before but many of our customers

00:26:13 --> 00:26:18
don't even know how many computers they

00:26:15 --> 00:26:21
have so when you start with that

00:26:17 --> 00:26:22
of lack of knowledge you can't knock

00:26:20 --> 00:26:24
down walls in the house you can't make

00:26:21 --> 00:26:25
any change and have any confidence it's

00:26:23 --> 00:26:27
going to work because you don't even

00:26:24 --> 00:26:29
know what you have you don't know what

00:26:26 --> 00:26:32
it's supposed to be doing once you know

00:26:28 --> 00:26:33
that then you can start planning well

00:26:31 --> 00:26:35
what's the deficiency between what I

00:26:32 --> 00:26:37
have and where I want to be somebody

00:26:34 --> 00:26:39
comes in and asks me for a change

00:26:36 --> 00:26:41
house I can affect what I have today how

00:26:38 --> 00:26:43
do I want to pivot so that I can

00:26:40 --> 00:26:45
minimize the security impact of that

00:26:42 --> 00:26:47
change or actually maybe allow that

00:26:44 --> 00:26:49
change to drive more security posture

00:26:46 --> 00:26:51
for the work but the first step is just

00:26:48 --> 00:26:54
figuring out how many bedrooms are there

00:26:50 --> 00:26:55
in the house where does the house you

00:26:53 --> 00:26:58
can sit what does the foundation look

00:26:54 --> 00:27:00
like and many of our customers before we

00:26:57 --> 00:27:01
walk in there don't have any idea they

00:26:59 --> 00:27:03
don't know how many subnets they have

00:27:00 --> 00:27:04
they don't know how many computers they

00:27:02 --> 00:27:05
have they don't know what's running on

00:27:03 --> 00:27:08
those computers they don't know where

00:27:04 --> 00:27:10
their data is security is impossible if

00:27:07 --> 00:27:14
you don't know those things right it's

00:27:09 --> 00:27:15
not hard it's impossible so we would

00:27:13 --> 00:27:17
assert that you have to solve those

00:27:14 --> 00:27:19
problems first get the hygiene in place

00:27:16 --> 00:27:20
then let's go worry about everything

00:27:18 --> 00:27:22
else

00:27:19 --> 00:27:23
arjan thanks so much for the

00:27:21 --> 00:27:25
conversation you haven't scared me

00:27:22 --> 00:27:26
you've actually made it seem like this

00:27:24 --> 00:27:28
something that's doable

00:27:25 --> 00:27:29
absolutely doable we're seeing our

00:27:27 --> 00:27:33
customers make progress on this

00:27:28 --> 00:27:34
constantly you just need good tools and

00:27:32 --> 00:27:36
you need to have the discipline to use

00:27:33 --> 00:27:37
them it's that simple and I do think

00:27:35 --> 00:27:39
people are getting better at this I

00:27:36 --> 00:27:41
don't think of this is hopeless in any

00:27:38 --> 00:27:43
way I think you know kind of the fear

00:27:40 --> 00:27:46
mongering aspect that people are so

00:27:42 --> 00:27:48
exhausted by insecurity is an admission

00:27:45 --> 00:27:50
that if you don't do this stuff first

00:27:47 --> 00:27:52
you don't know how to do it right that

00:27:49 --> 00:27:53
doesn't mean that it's hopeless that

00:27:51 --> 00:27:55
means you just need to do this stuff

00:27:52 --> 00:27:57
irst and then you actually have some

00:27:54 --> 00:27:58
hope so I think this is actually a very

00:27:56 --> 00:27:59
helpful message and I think people

00:27:57 --> 00:28:01
should see it that way

00:27:58 --> 00:28:05
well it's work and so I guess we have to

00:28:00 --> 00:28:05
get to it right on thank you yep

<!-- YOUTUBE_TRANSCRIPT_END -->
