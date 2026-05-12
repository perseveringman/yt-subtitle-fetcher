---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "p5AtrKqQ3Fw"
title: "Karl Iagnemma & Oscar Beijbom (Aptiv Autonomous Mobility) - MIT Self-Driving Cars"
video_url: "https://www.youtube.com/watch?v=p5AtrKqQ3Fw"
thumbnail_url: "https://i.ytimg.com/vi/p5AtrKqQ3Fw/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=p5AtrKqQ3Fw"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2019-02-26T14:49:03.000Z"
upload_date: "2019-02-26"
duration_seconds: 3526
duration_human: "58:46"
view_count: 26323
like_count: 412
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:12:38.936Z"
---

# Karl Iagnemma & Oscar Beijbom (Aptiv Autonomous Mobility) - MIT Self-Driving Cars

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=p5AtrKqQ3Fw
- video_id: p5AtrKqQ3Fw
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2019-02-26T14:49:03.000Z
- upload_date: 2019-02-26
- duration: 58:46
- view_count: 26323
- like_count: 412
- has_subtitle: true
- language: en
- availability: public
- tags: self driving, autonomous cars, autonomous vehicles, self-driving cars, autonomous vehicle, autonomous car, aptiv, las vegas, lyft, robotaxi, nutonomy, pointpillars, deep learning, neural networks, self driving cars, deep learning mit, lex fridman, artificial intelligence, aptiv autonomous mobility, self-driving cars 2019, aptiv self driving car, machine learning, lyft autonomous cars, lidar, perception, computer vision, singapore, boston
- categories: Science & Technology

## Description

Karl Iagnemma is the President of Aptiv Autonomous Mobility. Oscar Beijbom is their Machine Learning Lead. In 2013, Karl co-founded nuTonomy, a Boston-based autonomous vehicle company that was sold to Delphi (Aptiv) in 2017 for $400 million. Now as part of Aptiv, Karl and team are one of the leaders in autonomous vehicle development and deployment, with cars on the roads in several sites in the US. For more lecture videos on deep learning, reinforcement learning (RL), artificial intelligence (AI & AGI), and podcast conversations, visit our website or follow TensorFlow code tutorials on our GitHub repo.

INFO:
Website: https://deeplearning.mit.edu
GitHub: https://github.com/lexfridman/mit-deep-learning
Playlist: http://bit.ly/2S1MVdy

OUTLINE:
0:00 - Introduction to Karl Iagnemma and Oscar Beijbom
1:00 - Karl - Aptiv Background
10:18 - Dimensions of Safety for AVs
12:47 - Trusting neural networks behind the wheel
15:07 - Validation of black-box systems
17:50 - Trusting the data
19:27 - Trusting the algorithms
22:27 - Safety architecture for neural networks
25:20 - Engineering is inching closer to the natural sciences
25:57 - Oscar - DL for 3D Detection
30:06 - PointPillars
39:51 - nuScenes - a dataset for multimodal 3d object detection
43:17 - Q&A

CONNECT:
- If you enjoyed this video, please subscribe to this channel.
- Twitter: https://twitter.com/lexfridman
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Medium: https://medium.com/@lexfridman

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
all right welcome back to 6 s 0 9 for

00:00:03 --> 00:00:10
deep learning for self-driving cars

00:00:04 --> 00:00:13
today we have Carling yama and oscar

00:00:09 --> 00:00:15
baby boom from active karl is the

00:00:12 --> 00:00:18
president of apt of autonomous mobility

00:00:14 --> 00:00:21
where Oscar is the machine learning lead

00:00:17 --> 00:00:23
karl founded in autonomy as many of you

00:00:20 --> 00:00:27
know in 2013 it's a boston-based

00:00:22 --> 00:00:30
autonomous vehicle company and new tommy

00:00:26 --> 00:00:32
was acquired by active in 2017 and now

00:00:29 --> 00:00:34
it's part of active karl and team are

00:00:31 --> 00:00:37
one of the leaders in autonomous vehicle

00:00:33 --> 00:00:39
development and deployment with cars on

00:00:36 --> 00:00:42
roads all over the United States several

00:00:38 --> 00:00:45
sites but most importantly Karl is MIT

00:00:41 --> 00:00:48
through-and-through is also some of you

00:00:44 --> 00:00:50
may know getting his PhD here he led a

00:00:47 --> 00:00:52
robotics group here as a research

00:00:49 --> 00:00:55
scientist for many years so it's really

00:00:51 --> 00:00:57
a pleasure to have both karl and oscar

00:00:54 --> 00:00:59
with us today please give them a warm

00:00:56 --> 00:00:59
welcome

00:01:00 --> 00:01:06
all right thanks Lex

00:01:02 --> 00:01:08
yeah very glad to be back at MIT very

00:01:05 --> 00:01:09
impressed that you guys are here during

00:01:07 --> 00:01:12
IEP

00:01:08 --> 00:01:15
my course load during IEP was usually

00:01:11 --> 00:01:17
ice skating and sometimes like there was

00:01:14 --> 00:01:19
a wine tasting course this is now almost

00:01:16 --> 00:01:20
wenty years ago and that was pretty

00:01:18 --> 00:01:23
much it that's where the academic work

00:01:19 --> 00:01:24
stopped so you guys are here to learn

00:01:22 --> 00:01:26
something so I'm gonna do my best and

00:01:23 --> 00:01:28
try something radical actually sometime

00:01:25 --> 00:01:29
president now of apps of autonomous

00:01:27 --> 00:01:31
driving I'm not allowed to talk about

00:01:28 --> 00:01:34
anything technical or interesting I'm

00:01:30 --> 00:01:36
gonna flout that a little bit and and

00:01:33 --> 00:01:38
raise some topics that we think about

00:01:35 --> 00:01:41
hat I think are interesting you know

00:01:37 --> 00:01:42
questions too to keep in the back of

00:01:40 --> 00:01:44
your mind as you're thinking about deep

00:01:41 --> 00:01:46
learning an autonomous driving so I'll

00:01:43 --> 00:01:48
raise some of those questions and then

00:01:45 --> 00:01:50
Oscar will actually present some

00:01:47 --> 00:01:53
real-life technology and some of the

00:01:49 --> 00:01:54
work that he has been doing Oscar's our

00:01:52 --> 00:01:56
machine learning lead some of the work

00:01:53 --> 00:02:00
that he and his outstanding team have

00:01:55 --> 00:02:03
been doing around machine learning based

00:01:59 --> 00:02:05
etectors for the

00:02:02 --> 00:02:06
deception problem so let me first

00:02:04 --> 00:02:09
introduce apt of a little bit because

00:02:05 --> 00:02:12
people usually ask me like what's an

00:02:08 --> 00:02:13
active when I say I work for active apt

00:02:11 --> 00:02:15
has actually been around for a long time

00:02:13 --> 00:02:17
but in a different form

00:02:14 --> 00:02:19
after it was previously Delphi

00:02:16 --> 00:02:20
technologies which was previously part

00:02:18 --> 00:02:21
of General Motors

00:02:19 --> 00:02:24
o everybody's heard of General Motors

00:02:20 --> 00:02:28
ome of you may have heard of Delphi

00:02:23 --> 00:02:31
active spun from Delphi about 14 months

00:02:27 --> 00:02:33
ago and so after the tier 1 supplier

00:02:30 --> 00:02:34
they're an automotive company that

00:02:32 --> 00:02:37
industrialize --is technology

00:02:33 --> 00:02:40
essentially they take software and

00:02:36 --> 00:02:41
hardware they industrialize it and put

00:02:39 --> 00:02:43
it on car so it can run for many many

00:02:40 --> 00:02:46
hundreds of thousands of miles without

00:02:42 --> 00:02:47
failing which is a useful thing when we

00:02:45 --> 00:02:49
think about autonomous driving so the

00:02:46 --> 00:02:52
mes for active they develop what they

00:02:48 --> 00:02:55
say is safer greener and more connected

00:02:51 --> 00:02:57
solutions safer means safety systems

00:02:54 --> 00:03:00
active safety autonomous driving systems

00:02:56 --> 00:03:03
of the type that we're building greener

00:02:59 --> 00:03:05
systems to enable electrification and

00:03:02 --> 00:03:07
green vehicles and then more connected

00:03:04 --> 00:03:09
connectivity solutions both within the

00:03:06 --> 00:03:11
vehicle transmitting data around the

00:03:08 --> 00:03:14
vehicle and then externally wireless

00:03:10 --> 00:03:16
communication all of these things as you

00:03:13 --> 00:03:20
can imagine feed very very nicely into

00:03:15 --> 00:03:21
the future transportation systems that

00:03:19 --> 00:03:23
he software will actually only be a

00:03:20 --> 00:03:25
part of so active is in a really

00:03:22 --> 00:03:28
interesting spot when you think about

00:03:24 --> 00:03:31
he future of autonomous driving and

00:03:27 --> 00:03:31
give you sense of scale

00:03:31 --> 00:03:35
still kind of amazes me the biggest my

00:03:33 --> 00:03:39
research group ever was at MIT was like

00:03:34 --> 00:03:41
18 18 people active is a hundred and

00:03:38 --> 00:03:44
fifty six thousand employees so

00:03:40 --> 00:03:45
significant sized organization about a

00:03:43 --> 00:03:47
thirteen billion dollar company by

00:03:44 --> 00:03:51
revenue in about 50 countries around the

00:03:47 --> 00:03:54
world my groups about seven hundred

00:03:50 --> 00:03:55
people so of which Oscar is is one very

00:03:53 --> 00:03:56
important person we're about seven

00:03:54 --> 00:03:58
hundred working on autonomous driving

00:03:55 --> 00:04:00
we've got about a hundred twenty cars on

00:03:57 --> 00:04:01
the road in in different different

00:03:59 --> 00:04:04
countries and I'll show you some

00:04:00 --> 00:04:07
xamples of that but first let me take a

00:04:03 --> 00:04:10
trip down memory lane and show you a

00:04:06 --> 00:04:12
couple of snapshots about where we were

00:04:09 --> 00:04:15
not too long ago kind of as a community

00:04:11 --> 00:04:16
but but also you know me personally and

00:04:14 --> 00:04:20
this will either inspire or horrify you

00:04:15 --> 00:04:22
I'm not sure which but the fact is 2007

00:04:19 --> 00:04:24
you know there were groups driving

00:04:21 --> 00:04:26
around with cars like running blade

00:04:23 --> 00:04:27
servers in the trunk that we're

00:04:25 --> 00:04:30
generating so much heat you had to

00:04:26 --> 00:04:31
install another air conditioner which

00:04:29 --> 00:04:33
then was drawing so much power you have

00:04:30 --> 00:04:35
to add another alternator and then kind

00:04:32 --> 00:04:39
of rinse and repeat so it wasn't a great

00:04:34 --> 00:04:43
situation but people did enough

00:04:38 --> 00:04:45
algorithmically computationally to to

00:04:42 --> 00:04:46
enable these cars and this is the DARPA

00:04:44 --> 00:04:48
urban challenge for those who that may

00:04:45 --> 00:04:50
be familiar to enable these cars to do

00:04:47 --> 00:04:53
something useful and interesting on a

00:04:49 --> 00:04:56
closed course and it kind of convinced

00:04:52 --> 00:04:59
enough people that given enough devotion

00:04:55 --> 00:05:00
of you know thought and resources that

00:04:58 --> 00:05:03
his might actually become a real thing

00:04:59 --> 00:05:08
someday so I was one of those people

00:05:02 --> 00:05:10
that got convinced 2010 this is now I'm

00:05:07 --> 00:05:12
gonna crib from my co-founder Emilio who

00:05:09 --> 00:05:14
was a former MIT faculty member and

00:05:11 --> 00:05:16
aero-astro Emilio started up an

00:05:13 --> 00:05:17
operation in Singapore through smart who

00:05:15 --> 00:05:19
somebody had probably worked with so

00:05:16 --> 00:05:21
this is some some folks from smart

00:05:18 --> 00:05:23
hat's James who looks really young in

00:05:20 --> 00:05:26
that picture he was one of emilio

00:05:22 --> 00:05:28
students who was basically taking a golf

00:05:25 --> 00:05:31
cart and and turning it into an

00:05:27 --> 00:05:32
autonomous shuttle it turned out to work

00:05:30 --> 00:05:35
pretty well and it got people in

00:05:31 --> 00:05:38
Singapore excited which in turn got us

00:05:34 --> 00:05:39
further excited 2014 they did a demo

00:05:37 --> 00:05:42
where they led people of Singapore

00:05:38 --> 00:05:44
coming right around these carts in in a

00:05:41 --> 00:05:45
garden and that worked great over the

00:05:43 --> 00:05:47
course a weekend

00:05:44 --> 00:05:49
course of a weekend around this time

00:05:46 --> 00:05:51
we'd started new autonomy we'd actually

00:05:48 --> 00:05:53
started a commercial enterprise it kind

00:05:50 --> 00:05:55
of stepped least partly away from MIT at

00:05:52 --> 00:05:58
hat point 2015 we had cars on the road

00:05:54 --> 00:06:01
this is a Mitsubishi i-miev electric

00:05:57 --> 00:06:02
vehicle when we had all our equipment in

00:06:00 --> 00:06:04
it the front seat was pushed forward so

00:06:01 --> 00:06:06
far that me I'm about six foot three

00:06:03 --> 00:06:08
actually couldn't sit in the front seat

00:06:05 --> 00:06:10
so I couldn't actually accompany people

00:06:07 --> 00:06:13
on rides it wasn't very practical

00:06:09 --> 00:06:15
we ended up switching cars to a Renault

00:06:12 --> 00:06:17
Zoe platform which is the one you see

00:06:14 --> 00:06:18
here which had a little more legroom we

00:06:16 --> 00:06:20
re giving at that point open to the

00:06:17 --> 00:06:22
public

00:06:19 --> 00:06:23
rides in our cars in Singapore in the

00:06:21 --> 00:06:26
part of the city that we were allowed to

00:06:22 --> 00:06:27
perate in

00:06:25 --> 00:06:29
it was a quick transition as you can see

00:06:26 --> 00:06:31
just even you know visually the

00:06:28 --> 00:06:34
volution of these systems has come a

00:06:30 --> 00:06:36
long way in a short time and we're just

00:06:33 --> 00:06:39
a point example of this phenomena which

00:06:35 --> 00:06:42
is kind of broadly speaking of you know

00:06:38 --> 00:06:44
similar across the industry but 2017 we

00:06:41 --> 00:06:47
joined active and we were excited by

00:06:43 --> 00:06:49
that because we as primarily scientists

00:06:46 --> 00:06:50
and technologists didn't have a great

00:06:48 --> 00:06:52
idea how we're gonna industrialize this

00:06:49 --> 00:06:54
technology and actually bring it to

00:06:51 --> 00:06:56
market and make it reliable and robust

00:06:53 --> 00:06:58
and make it safe which is what I'm going

00:06:55 --> 00:06:59
to talk about a little bit here today so

00:06:57 --> 00:07:02
we joined active with its global

00:06:58 --> 00:07:02
footprint today we're primarily in

00:07:01 --> 00:07:06
Pittsburgh

00:07:01 --> 00:07:08
Boston Singapore and Vegas and we've got

00:07:05 --> 00:07:11
connectivity to actives other sites in

00:07:07 --> 00:07:12
Shanghai and Wolfsburg let me tell you a

00:07:10 --> 00:07:14
little bit about what's happening in

00:07:11 --> 00:07:17
Vegas I think people were here when was

00:07:13 --> 00:07:19
Luke talking a couple days ago yesterday

00:07:16 --> 00:07:21
so Luke from lift Luke Vincent probably

00:07:18 --> 00:07:24
talked a little bit about Vegas Vegas is

00:07:20 --> 00:07:26
really an interesting place for us we've

00:07:23 --> 00:07:28
got a big operation there 130,000 square

00:07:25 --> 00:07:30
foot garage we've got about 75 cars

00:07:27 --> 00:07:33
we've got thirty of those cars on the

00:07:29 --> 00:07:34
lift Network so apt of technology but

00:07:32 --> 00:07:36
connecting to the customer through lift

00:07:33 --> 00:07:39
so if you go to Vegas and you open your

00:07:35 --> 00:07:40
lyft app it'll ask you do you want to

00:07:38 --> 00:07:42
take a ride in autonomous car you can

00:07:39 --> 00:07:44
opt in you can opt out it's up to you if

00:07:41 --> 00:07:45
you opt in there's a reasonable chance

00:07:43 --> 00:07:48
one of our cars will pick you up if you

00:07:44 --> 00:07:51
call for a ride so anybody can do this

00:07:47 --> 00:07:53
competitor's innocent bystanders totally

00:07:50 --> 00:07:54
up to you we have nothing to hide our

00:07:52 --> 00:07:57
cars are on the road 20 hours a day

00:07:53 --> 00:07:58
seven days a week if you take a ride

00:07:56 --> 00:08:00
when you get out of the car just like

00:07:57 --> 00:08:02
any lifts ride you got to give us a star

00:07:59 --> 00:08:03
ating one through five and that to us

00:08:01 --> 00:08:06
is actually really interesting because

00:08:02 --> 00:08:09
you know it's a scaler it's it's not too

00:08:05 --> 00:08:12
rich but that star rating to me says

00:08:08 --> 00:08:14
omething about the ride quality meaning

00:08:11 --> 00:08:15
the comfort of the trip the safety that

00:08:13 --> 00:08:18
you felt and the efficiency of getting

00:08:14 --> 00:08:19
to where you want it to go and our star

00:08:17 --> 00:08:22
ating today is four point nine five

00:08:18 --> 00:08:25
which is pretty good key numbers we've

00:08:21 --> 00:08:28
given this point

00:08:24 --> 00:08:29
over 30,000 rides to more than 50,000

00:08:27 --> 00:08:32
passengers we've driven over a million

00:08:28 --> 00:08:35
miles in Vegas and a little bit

00:08:31 --> 00:08:38
additional but primarily there and as I

00:08:34 --> 00:08:40
mentioned the 4.95 so what's it look

00:08:37 --> 00:08:42
like on the road I'll show just one

00:08:39 --> 00:08:45
video today I think Oscar has a few more

00:08:41 --> 00:08:46
this one's actually in Singapore but

00:08:44 --> 00:08:50
it's all kind of morally equivalent

00:08:45 --> 00:08:53
you'll see a sped up slightly sped up

00:08:49 --> 00:08:55
view of a run from this is now probably

00:08:52 --> 00:08:56
six seven months old on the road in

00:08:54 --> 00:09:00
Singapore but it's got some interesting

00:08:55 --> 00:09:02
stuff in a fairly typical run some of

00:08:59 --> 00:09:03
you may recognize these these these

00:09:01 --> 00:09:05
roads we're on the wrong side of the

00:09:02 --> 00:09:06
road remember because we're in Singapore

00:09:04 --> 00:09:08
but to give you an example of the some

00:09:05 --> 00:09:11
of the types of problems we have to

00:09:07 --> 00:09:15
solve on a daily basis so let me run

00:09:10 --> 00:09:18
this thing and you'll see is this car is

00:09:14 --> 00:09:20
cruising down the road you have

00:09:17 --> 00:09:23
obstacles that we have to avoid

00:09:19 --> 00:09:26
sometimes in the face of oncoming

00:09:22 --> 00:09:29
traffic we've got to deal with sometimes

00:09:25 --> 00:09:30
ituations where other road users are

00:09:28 --> 00:09:33
maybe not perfectly behaving by the

00:09:29 --> 00:09:36
rules we got to manage that in a natural

00:09:32 --> 00:09:37
way Construction is Singapore like

00:09:35 --> 00:09:39
verywhere else is pretty ubiquitous and

00:09:36 --> 00:09:43
so you have to navigate through these

00:09:38 --> 00:09:46
less structured environments people who

00:09:42 --> 00:09:48
are sometimes doing things or indicating

00:09:45 --> 00:09:50
some future action which you have to

00:09:47 --> 00:09:54
make inferences about that can be tricky

00:09:49 --> 00:09:56
to navigate so typical day a route that

00:09:53 --> 00:09:58
any one of us as humans would you know

00:09:55 --> 00:10:02
drive through without batting an eye no

00:09:57 --> 00:10:04
problem is actually presents some really

00:10:01 --> 00:10:06
complex problems for autonomous

00:10:03 --> 00:10:07
vehicles but it's the table stakes these

00:10:05 --> 00:10:08
days these are the things you have to do

00:10:06 --> 00:10:11
if you want to be on the road and

00:10:07 --> 00:10:12
certainly if you want to drive millions

00:10:10 --> 00:10:14
of miles you know with very few

00:10:11 --> 00:10:16
accidents which is what we're doing so

00:10:13 --> 00:10:18
that's an introduction to active and a

00:10:15 --> 00:10:21
little bit of background so let me talk

00:10:18 --> 00:10:24
about we're going to talk about learning

00:10:20 --> 00:10:26
and how we think about learning in the

00:10:23 --> 00:10:28
context of autonomous driving so there

00:10:25 --> 00:10:30
was a period a few years ago where I

00:10:27 --> 00:10:32
think as a community people thought that

00:10:29 --> 00:10:35
we would be able to go from pixels to

00:10:31 --> 00:10:38
actuator commands with a single learned

00:10:34 --> 00:10:40
architecture a single black box

00:10:37 --> 00:10:42
I'll say generally speaking we no longer

00:10:39 --> 00:10:44
believe that's true and I should include

00:10:41 --> 00:10:46
we in that I didn't believe that was

00:10:43 --> 00:10:48
ever true but some of us maybe thought

00:10:45 --> 00:10:50
hat was true and I'll tell you part of

00:10:47 --> 00:10:53
the reason why and in part of this talk

00:10:49 --> 00:10:55
a big part of it comes down to safety a

00:10:52 --> 00:10:58
nd

00:10:54 --> 00:11:00
the question of safety convincing

00:10:57 --> 00:11:02
ourselves that that system that black

00:10:59 --> 00:11:05
box even if we could train it to

00:11:01 --> 00:11:07
accurately approximate this massively

00:11:04 --> 00:11:09
complex underlying function that we're

00:11:06 --> 00:11:11
trying to approximate can we convince

00:11:08 --> 00:11:13
ourselves that it's safe and it's very

00:11:11 --> 00:11:14
hard to answer that question

00:11:12 --> 00:11:17
affirmatively

00:11:13 --> 00:11:20
and I'll raise some of the issues around

00:11:16 --> 00:11:21
why that is this is not to say that

00:11:19 --> 00:11:23
learning methods are not incredibly

00:11:20 --> 00:11:25
useful for autonomous driving because

00:11:22 --> 00:11:27
they absolutely are and Oscar will show

00:11:24 --> 00:11:28
you examples of why that is and how

00:11:26 --> 00:11:31
active is using some learning methods

00:11:27 --> 00:11:33
today but this safety dimension is

00:11:30 --> 00:11:36
tricky because there's actually there's

00:11:32 --> 00:11:38
actually two axes here one is the actual

00:11:35 --> 00:11:40
technical safety of the system which is

00:11:37 --> 00:11:43
to say can we build a system that's safe

00:11:39 --> 00:11:45
that's provably in some sets safe that's

00:11:42 --> 00:11:47
we can validate which we can convince

00:11:44 --> 00:11:49
ourselves achieves the intended

00:11:46 --> 00:11:52
functionality in our operational design

00:11:48 --> 00:11:55
domain that adheres to whatever

00:11:51 --> 00:11:56
egulatory requirements might be imposed

00:11:54 --> 00:11:58
on our jurisdictions that we're

00:11:55 --> 00:12:00
operating and there's a whole longer

00:11:57 --> 00:12:02
list related to technical safety but

00:11:59 --> 00:12:04
hese are technical problems primarily

00:12:01 --> 00:12:06
but there's another dimension which

00:12:03 --> 00:12:08
appear is you know called perceived

00:12:05 --> 00:12:11
safety which is to say when you ride in

00:12:07 --> 00:12:13
a car even if it's safe do you believe

00:12:10 --> 00:12:16
that it's safe and therefore will you

00:12:12 --> 00:12:19
want to take another trip which sounds

00:12:15 --> 00:12:20
kind of squishy and as engineers we're

00:12:18 --> 00:12:21
typically uncomfortable with that kind

00:12:19 --> 00:12:23
of stuff but it turns out to be really

00:12:20 --> 00:12:25
important and probably harder to solve

00:12:22 --> 00:12:27
because it's a little bit squishy and

00:12:24 --> 00:12:28
you know quite obviously we got to sit

00:12:26 --> 00:12:30
up here right we got to be in this upper

00:12:27 --> 00:12:32
ight-hand corner where we have not only

00:12:29 --> 00:12:34
a very safe car from a technical

00:12:31 --> 00:12:36
perspective but one that feels safe that

00:12:33 --> 00:12:40
inspires confidence in riders in

00:12:35 --> 00:12:42
regulators and and everybody else so how

00:12:39 --> 00:12:44
do we get there in the context of

00:12:41 --> 00:12:47
elements of this system that maybe black

00:12:43 --> 00:12:49
boxes for lack of a better word what's

00:12:46 --> 00:12:50
required is trust

00:12:48 --> 00:12:52
you know how do we get to this point

00:12:49 --> 00:12:54
where we can trust neural networks in

00:12:51 --> 00:12:56
the context of safety critical systems

00:12:53 --> 00:12:58
which is what an autonomous vehicle is

00:12:55 --> 00:13:01
it really comes down to this question of

00:12:57 --> 00:13:02
how do we convince ourselves that we can

00:13:00 --> 00:13:05
validate these systems again validating

00:13:01 --> 00:13:08
the system ensuring that it can it can

00:13:04 --> 00:13:10
meet the requirements the operation

00:13:07 --> 00:13:13
requirements in the domain of interests

00:13:09 --> 00:13:16
that are imposed by the user alright

00:13:12 --> 00:13:18
here's three dimensions to to this this

00:13:15 --> 00:13:20
key question of understanding

00:13:17 --> 00:13:21
how to validate and I'm gonna just

00:13:19 --> 00:13:22
briefly introduce some questions some

00:13:20 --> 00:13:26
topics of interest around each of

00:13:21 --> 00:13:29
these but the first one trusting the

00:13:25 --> 00:13:31
data trusting the data so do we actually

00:13:28 --> 00:13:34
have confidence about what goes into

00:13:30 --> 00:13:37
this algorithm I mean everybody knows

00:13:33 --> 00:13:39
garbage in garbage out there's various

00:13:36 --> 00:13:41
ways that we can make this garbage we

00:13:38 --> 00:13:44
can have data which is insufficiently

00:13:40 --> 00:13:45
covering our domain not representative

00:13:43 --> 00:13:47
of the domain we can have data that's

00:13:44 --> 00:13:49
poorly annotated by our third party

00:13:46 --> 00:13:51
trusted partners so we've trusted to to

00:13:48 --> 00:13:53
label certain things of interests so do

00:13:50 --> 00:13:56
we trust the data that's going in to the

00:13:52 --> 00:13:57
algorithm itself do we trust the

00:13:55 --> 00:14:01
implementation you've got a beautiful

00:13:56 --> 00:14:03
algorithm super descriptive super robust

00:14:00 --> 00:14:05
not brittle at all well-trained and

00:14:02 --> 00:14:06
we're running it on poor hardware we've

00:14:04 --> 00:14:08
coded it poorly

00:14:05 --> 00:14:10
we've got buffer overruns right and left

00:14:07 --> 00:14:12
do we trust the implementation to

00:14:09 --> 00:14:15
actually execute in a safe manner

00:14:11 --> 00:14:17
and do we trust the algorithm again

00:14:14 --> 00:14:19
generally speaking we're trying to

00:14:16 --> 00:14:21
approximate really complicated functions

00:14:18 --> 00:14:23
I don't think we typically use neural

00:14:20 --> 00:14:25
networks for to approximate linear

00:14:22 --> 00:14:30
systems so this is a gnarly nasty

00:14:24 --> 00:14:32
function which has topics of which has

00:14:29 --> 00:14:34
problems of critical interest which are

00:14:31 --> 00:14:36
ally rare in fact they're the only

00:14:33 --> 00:14:38
ones of interests so there's these

00:14:35 --> 00:14:40
vents that happen very very

00:14:37 --> 00:14:42
infrequently that we absolutely have to

00:14:39 --> 00:14:44
get right it's a hard problem to

00:14:41 --> 00:14:46
convince ourselves that the algorithm is

00:14:43 --> 00:14:50
going to perform properly in these

00:14:45 --> 00:14:51
unexpected and rare situations so these

00:14:49 --> 00:14:54
are the sorts of things that we think

00:14:50 --> 00:14:56
about and that we have to answer in an

00:14:53 --> 00:14:59
intelligent way to convince ourselves

00:14:55 --> 00:15:01
that we have a validated neural network

00:14:58 --> 00:15:04
based system

00:15:00 --> 00:15:08
okay let me just step through these each

00:15:03 --> 00:15:10
of these topics really quickly so the

00:15:07 --> 00:15:12
topic of validation you know what do we

00:15:09 --> 00:15:14
mean by that or why it is hard there's a

00:15:11 --> 00:15:16
number of different dimensions here the

00:15:13 --> 00:15:17
first is that we don't have insight into

00:15:15 --> 00:15:19
the nature of the function that we're

00:15:16 --> 00:15:21
trying to approximate you know the

00:15:18 --> 00:15:24
underlying phenomena is really

00:15:20 --> 00:15:25
complicated again if it weren't we'd

00:15:23 --> 00:15:27
probably be possibly be modeling it

00:15:24 --> 00:15:29
using different techniques we'd write a

00:15:26 --> 00:15:33
closed-form equation to describe it so

00:15:28 --> 00:15:35
that's a problem second again you know

00:15:32 --> 00:15:37
the accidents the actual crashes on the

00:15:34 --> 00:15:40
road what's going crashes and not

00:15:36 --> 00:15:42
accidents these are rare luckily they're

00:15:39 --> 00:15:45
very rare but it makes the statistical

00:15:41 --> 00:15:46
argument around these accidents and

00:15:44 --> 00:15:48
being able to avoid these accidents

00:15:45 --> 00:15:50
really really difficult

00:15:47 --> 00:15:53
if you believe rant and they're pretty

00:15:49 --> 00:15:56
smart folks they say you got to drive

00:15:52 --> 00:15:57
275 million miles without accident

00:15:55 --> 00:15:59
without a crashed you can claim a lower

00:15:56 --> 00:16:03
fatality rate than a human with 95%

00:15:58 --> 00:16:06
confidence but how we gonna do that can

00:16:02 --> 00:16:08
we think about using some correlated

00:16:05 --> 00:16:10
incident maybe some kind of close call

00:16:07 --> 00:16:12
as a proxy for accidents which may be

00:16:09 --> 00:16:15
more frequent and maybe back in that way

00:16:11 --> 00:16:16
there's a lot of questions here which I

00:16:14 --> 00:16:18
won't say we don't have any answers to

00:16:15 --> 00:16:19
because I wouldn't go that far but there

00:16:17 --> 00:16:21
's heart they're hard questions

00:16:18 --> 00:16:23
they're not questions with obvious

00:16:20 --> 00:16:26
answers so this is one of them these

00:16:22 --> 00:16:29
this this issue of rare events the

00:16:25 --> 00:16:31
regulatory dimension is one of these

00:16:28 --> 00:16:34
known unknowns how do we evaluate a

00:16:30 --> 00:16:36
system if the requirements that may be

00:16:33 --> 00:16:39
imposed upon us from outside regulatory

00:16:35 --> 00:16:42
bodies are still to be written other

00:16:38 --> 00:16:44
that's difficult so there's a lack of

00:16:41 --> 00:16:47
consensus on what the safety target

00:16:43 --> 00:16:49
should be for these systems this is

00:16:46 --> 00:16:51
obviously evolving smart people are

00:16:48 --> 00:16:53
thinking about this but today it's not

00:16:50 --> 00:16:55
at all clear if you're driving in Las

00:16:52 --> 00:16:57
Vegas if you're driving in Singapore if

00:16:54 --> 00:16:59
you're driving in San Francisco or in or

00:16:56 --> 00:17:03
in between what this target needs to be

00:16:58 --> 00:17:05
and then lastly and this is a really

00:17:02 --> 00:17:07
interesting one we can get through a

00:17:04 --> 00:17:09
validation process for a build of code

00:17:06 --> 00:17:10
let's assume we can do that well what

00:17:08 --> 00:17:13
happens when we're gonna update the code

00:17:09 --> 00:17:14
because obviously we will does that mean

00:17:12 --> 00:17:16
we have to start that validation process

00:17:13 --> 00:17:18
again from scratch which will

00:17:15 --> 00:17:20
unavoidably be expensive and lengthy

00:17:17 --> 00:17:21
well what if we only change a little bit

00:17:19 --> 00:17:23
of the code would have I only changed

00:17:20 --> 00:17:25
one line but what if that one line is

00:17:22 --> 00:17:30
like the most important line of code in

00:17:24 --> 00:17:31
the whole code base this is one that I

00:17:29 --> 00:17:33
can tell you keeps a lot of people up at

00:17:30 --> 00:17:35
night this question of revalidation and

00:17:32 --> 00:17:37
then not even you know again now we'll

00:17:34 --> 00:17:39
keep that code base fixed what if we

00:17:36 --> 00:17:40
move from one city to the next and let's

00:17:38 --> 00:17:42
ay that city is quite similar to your

00:17:39 --> 00:17:45
previous city but not exactly the same

00:17:41 --> 00:17:47
how do we think about validation in the

00:17:44 --> 00:17:49
context of new environments so this

00:17:46 --> 00:17:53
continuous development issue is a

00:17:48 --> 00:17:54
challenge all right let me move on to

00:17:52 --> 00:17:57
talking about the data there's probably

00:17:53 --> 00:17:58
people in this room who are doing active

00:17:56 --> 00:18:00
research in this area because it's a

00:17:57 --> 00:18:02
really interesting one but there's a

00:17:59 --> 00:18:04
couple of

00:18:01 --> 00:18:07
questions I would say that we think

00:18:03 --> 00:18:09
about when we think about data we can

00:18:06 --> 00:18:11
have a great algorithm and if we're

00:18:08 --> 00:18:14
training it on poor data for one reason

00:18:10 --> 00:18:17
or another we won't have a great output

00:18:13 --> 00:18:18
so one thing we think about is this

00:18:16 --> 00:18:21
efficiency the completeness of the data

00:18:17 --> 00:18:25
nd the bias that may be inherent in the

00:18:20 --> 00:18:28
data for our operational domain if we

00:18:24 --> 00:18:29
want to operate 24 hours a day and we

00:18:27 --> 00:18:31
only train on data collected during day

00:18:28 --> 00:18:34
time we're probably going to have an

00:18:30 --> 00:18:34
issue

00:18:33 --> 00:18:38
annotating the data is another dimension

00:18:35 --> 00:18:40
of the problem we can collect raw data

00:18:37 --> 00:18:42
that's sufficient that covers our space

00:18:39 --> 00:18:43
but when we annotate it when we hand it

00:18:41 --> 00:18:46
off to a third party because it's

00:18:42 --> 00:18:49
typically a third party to mark up the

00:18:45 --> 00:18:50
interesting aspects of it we provide

00:18:48 --> 00:18:53
them some specifications but we put a

00:18:49 --> 00:18:55
lot of trust in that third party

00:18:52 --> 00:18:57
and-and-and and trust that they're gonna

00:18:54 --> 00:18:59
do a good job annotating the interesting

00:18:56 --> 00:19:00
parts and not the uninteresting parts

00:18:58 --> 00:19:02
that they're going to catch all the

00:18:59 --> 00:19:05
interesting parts that we've asked them

00:19:01 --> 00:19:08
to catch etc so this annotation part

00:19:04 --> 00:19:10
which seems very mundane very easy to

00:19:07 --> 00:19:14
manage and kind of like low-hanging

00:19:09 --> 00:19:17
fruit is in fact another key aspect of

00:19:13 --> 00:19:18
ensuring that we can trust the data ok

00:19:16 --> 00:19:20
and this

00:19:17 --> 00:19:22
just kind of point to the fact that

00:19:19 --> 00:19:24
here are again smart people thinking

00:19:21 --> 00:19:26
about this problem which rears its head

00:19:23 --> 00:19:31
in many domains beyond autonomous

00:19:25 --> 00:19:33
driving now what about the algorithms

00:19:30 --> 00:19:36
themselves so moving on you know from

00:19:32 --> 00:19:38
the data to the actual algorithm you

00:19:35 --> 00:19:40
know how do we convince ourselves that

00:19:37 --> 00:19:43
algorithm that you know like any

00:19:39 --> 00:19:46
kind of learning based auger we've

00:19:42 --> 00:19:50
trained on a training set is going to do

00:19:45 --> 00:19:53
well on some unknown test set well

00:19:49 --> 00:19:54
there's a couple kind of properties of

00:19:52 --> 00:19:57
the algorithm that we can look at that

00:19:53 --> 00:20:00
we can kind of interrogate and kind of

00:19:56 --> 00:20:03
poke at to convince ourselves that that

00:19:59 --> 00:20:05
algorithm will perform well you know one

00:20:02 --> 00:20:07
is in variance and the other one we can

00:20:04 --> 00:20:11
say is stability if we make small

00:20:06 --> 00:20:13
perturbations to this function does it

00:20:10 --> 00:20:15
behave well given kind of let's say a

00:20:12 --> 00:20:20
bounded input do we see a bounded output

00:20:14 --> 00:20:23
or do we see some wild response you know

00:20:19 --> 00:20:27
I'm sure you've all heard of examples of

00:20:22 --> 00:20:30
adversarial images that can confuse

00:20:26 --> 00:20:32
learning based classifiers so it's a

00:20:29 --> 00:20:33
it's a turtle you show it a

00:20:31 --> 00:20:35
turtle that says well that's a turtle

00:20:32 --> 00:20:36
and then you show it a turtle that's

00:20:34 --> 00:20:39
maybe fuzz with a little bit of noise

00:20:35 --> 00:20:41
that the human eye can't perceive so it

00:20:38 --> 00:20:45
still looks like a turtle and it tells

00:20:40 --> 00:20:46
you as a machine gun obviously for us in

00:20:44 --> 00:20:48
the driving domain we want to stop sign

00:20:45 --> 00:20:50
to be correctly identified as a stop

00:20:47 --> 00:20:52
sign a hundred types of a hundred we

00:20:49 --> 00:20:54
don't want that stop sign if somebody

00:20:51 --> 00:20:55
goes up and puts a piece of duct tape in

00:20:53 --> 00:20:59
the lower right hand corner to be

00:20:54 --> 00:21:02
interpreted as a yield sign for example

00:20:58 --> 00:21:04
so this question of the properties of

00:21:01 --> 00:21:06
the algorithm its invariance its

00:21:03 --> 00:21:11
tability is something of high interests

00:21:05 --> 00:21:13
and then lastly

00:21:10 --> 00:21:14
and one more point to this this notion

00:21:12 --> 00:21:18
of interpretability

00:21:13 --> 00:21:20
so interpretability understanding why an

00:21:17 --> 00:21:23
algorithm made a decision that it made

00:21:19 --> 00:21:24
this is the sort of thing that may not

00:21:22 --> 00:21:27
be a nice-to-have may actually be a

00:21:23 --> 00:21:28
requirement and would likely to be a

00:21:26 --> 00:21:30
requirement from the regulatory groups

00:21:27 --> 00:21:32
that I was referring to a minute ago so

00:21:29 --> 00:21:35
let's say imagine the case of a crash

00:21:31 --> 00:21:38
where the system that was governing your

00:21:34 --> 00:21:40
trajectory generator was a was a was a

00:21:37 --> 00:21:44
data-driven system was a deep learning

00:21:39 --> 00:21:46
based trajectory generator well you may

00:21:43 --> 00:21:48
need to explain to someone exactly why

00:21:45 --> 00:21:50
that particular generate trajectory was

00:21:47 --> 00:21:53
generated at that particular moment and

00:21:49 --> 00:21:56
this may be a hard thing to do if the

00:21:52 --> 00:21:57
generator was a was a data driven model

00:21:55 --> 00:21:59
now obviously there are people working

00:21:56 --> 00:22:02
and doing active research into this

00:21:58 --> 00:22:05
pecific question of interpretive all

00:22:01 --> 00:22:07
earning methods but it's it's it's a

00:22:04 --> 00:22:09
thorny one it's a very very difficult

00:22:06 --> 00:22:13
opic and it's not at all clear to me

00:22:08 --> 00:22:17
when and if we'll get to the stage where

00:22:12 --> 00:22:20
we can - even a technical audience but

00:22:16 --> 00:22:22
beyond that to a lay jury be able to

00:22:19 --> 00:22:24
explain why algorithm X made decision

00:22:21 --> 00:22:29
why

00:22:23 --> 00:22:34
okay so with all that in mind let me

00:22:28 --> 00:22:35
talk a little bit about safety that all

00:22:33 --> 00:22:36
maybe sounds pretty bleak you think well

00:22:34 --> 00:22:38
man well I've been taking this course

00:22:35 --> 00:22:41
with Lex because we're never really use

00:22:37 --> 00:22:45
this stuff but in fact we we can we can

00:22:40 --> 00:22:47
d will as a community there's a lot of

00:22:44 --> 00:22:50
tools we can bring to bear to think

00:22:46 --> 00:22:52
about neural networks and they're

00:22:49 --> 00:22:54
generally speaking within the context of

00:22:51 --> 00:22:56
a broader safety argument I think that's

00:22:53 --> 00:22:59
the key we tend not to think about using

00:22:55 --> 00:23:02
a neural network as an holistic system

00:22:58 --> 00:23:04
to drive a car but we'll think about it

00:23:01 --> 00:23:07
as a sub-module that we can build other

00:23:03 --> 00:23:09
systems around generally speaking that

00:23:06 --> 00:23:11
which we can say maybe make more

00:23:08 --> 00:23:14
rigorous claims about their performance

00:23:10 --> 00:23:16
their underlying properties and then

00:23:13 --> 00:23:17
therefore make a convincing holistic

00:23:15 --> 00:23:22
safety argument that this end-to-end

00:23:16 --> 00:23:25
system is safe we have tools functional

00:23:21 --> 00:23:26
safety is maybe familiar to some of you

00:23:24 --> 00:23:28
it's something we think about a lot in

00:23:25 --> 00:23:31
the automotive domain

00:23:27 --> 00:23:32
and so diff which stands for safety of

00:23:30 --> 00:23:33
the intended functionality we're

00:23:31 --> 00:23:38
basically asking ourselves the question

00:23:32 --> 00:23:40
is this overall function doing what it's

00:23:37 --> 00:23:42
intended to do is it operating safely

00:23:39 --> 00:23:44
and is it meeting its specifications

00:23:41 --> 00:23:47
there's kind of an analogy here to

00:23:43 --> 00:23:49
validation and verification if you will

00:23:46 --> 00:23:52
and we have to answer these questions

00:23:48 --> 00:23:55
around functional safety and soda if

00:23:51 --> 00:23:58
affirmative lis even in the even when we

00:23:54 --> 00:23:59
have neural network based elements in

00:23:57 --> 00:24:02
order to eventually put this car on the

00:23:58 --> 00:24:04
road all right so I mentioned that we

00:24:01 --> 00:24:07
need to do some embedding this is an

00:24:03 --> 00:24:09
example of what it might look like we

00:24:06 --> 00:24:11
refer to this as sometimes we call this

00:24:08 --> 00:24:13
caging the learning so we put the

00:24:10 --> 00:24:15
learning in a box it's this powerful

00:24:12 --> 00:24:17
animal we want to control and in this

00:24:14 --> 00:24:20
case it's up there at the top in red

00:24:16 --> 00:24:22
that might be you know that trajectory

00:24:19 --> 00:24:24
proposer I was talking about so let's

00:24:21 --> 00:24:25
ay we've got a powerful trajectory

00:24:23 --> 00:24:27
proposer we want to use this thing we've

00:24:24 --> 00:24:29
got it on what we call our performance

00:24:26 --> 00:24:31
compute our high-powered compute it's

00:24:28 --> 00:24:32
maybe not automotive grade it's got some

00:24:30 --> 00:24:34
potential failure modes but it's

00:24:31 --> 00:24:36
generally speaking you know good

00:24:33 --> 00:24:38
performance let's go there and we've got

00:24:35 --> 00:24:40
our neural network based generator on it

00:24:37 --> 00:24:43
which we can say some things about but

00:24:39 --> 00:24:45
maybe not everything we'd like to well

00:24:42 --> 00:24:47
we make the argument that if we can

00:24:44 --> 00:24:49
surround that says we can cage it kind

00:24:46 --> 00:24:53
of underpin it with a safety system that

00:24:48 --> 00:24:55
we can say very rigorous things about

00:24:52 --> 00:24:57
its performance then generally speaking

00:24:54 --> 00:25:00
we may be okay there may be a path to

00:24:56 --> 00:25:03
using neural networks on autonomous

00:24:59 --> 00:25:05
vehicles if we can wrap them in a safety

00:25:02 --> 00:25:07
architecture that we can say a lot of

00:25:04 --> 00:25:09
good things about and this is exactly

00:25:06 --> 00:25:11
what this represents so I'm going to

00:25:08 --> 00:25:15
conclude my part of the talk here handed

00:25:10 --> 00:25:18
over to Oscar with kind of a quote and

00:25:14 --> 00:25:20
assertion one of my engineers insisted I

00:25:17 --> 00:25:22
show today the argument is the following

00:25:19 --> 00:25:24
engineering is inching closer to the

00:25:21 --> 00:25:26
Natural Sciences I won't say how much

00:25:23 --> 00:25:28
closer but closer we're creating things

00:25:25 --> 00:25:30
that we don't fully understand and then

00:25:27 --> 00:25:32
we're investigating the properties or

00:25:29 --> 00:25:35
creation we're not ready down close for

00:25:31 --> 00:25:37
closed form functions that would be too

00:25:34 --> 00:25:40
easy we're generating these immensely

00:25:36 --> 00:25:42
complex function approximator x' and

00:25:39 --> 00:25:43
then we're just poking at

00:25:41 --> 00:25:45
ways of saying boy well what does this

00:25:42 --> 00:25:47
thing do under these situations and I'll

00:25:44 --> 00:25:49
eave leave you with one image which

00:25:46 --> 00:25:51
I'll present without comment and then

00:25:48 --> 00:25:59
hand it over to Oscar all right Thank

00:25:50 --> 00:26:02
You Karl

00:25:58 --> 00:26:04
thanks Lex for the invite yes my name is

00:26:01 --> 00:26:08
Oscar run the the machine learning team

00:26:03 --> 00:26:11
at active autonomy so every weekend with

00:26:07 --> 00:26:11
is slide

00:26:12 --> 00:26:16
specification was you know quite

00:26:13 --> 00:26:20
literally a joke so this is an actual

00:26:15 --> 00:26:22
comic I won't have seen this before

00:26:19 --> 00:26:27
okay well I was doing my PhD in this era

00:26:21 --> 00:26:29
where you know building a bird

00:26:26 --> 00:26:32
classifier was like a PhD project right

00:26:28 --> 00:26:34
and it was it was you know it's funny

00:26:31 --> 00:26:36
because it's true and then of course as

00:26:33 --> 00:26:38
you well know the deep learning

00:26:35 --> 00:26:40
revolution happened and unless you know

00:26:37 --> 00:26:42
previous introductory slides gives a

00:26:39 --> 00:26:44
great overview I don't want to redo that

00:26:41 --> 00:26:46
I just want to say sort of a straight

00:26:43 --> 00:26:48
line from what I consider the

00:26:45 --> 00:26:51
breakthrough paper by Chris Jeff's key

00:26:47 --> 00:26:52
at all to the to the work I'll be

00:26:50 --> 00:26:54
talking about today I was sort of these

00:26:51 --> 00:26:56
three so you had the you know deep

00:26:53 --> 00:26:58
learning and to end learning for you is

00:26:55 --> 00:27:00
genetic classification by Christian

00:26:57 --> 00:27:05
Hinton that papers been cited 35,000

00:26:59 --> 00:27:07
times I checked yesterday then 2014 Ross

00:27:04 --> 00:27:11
Kirsch ago at Berkeley basically showed

00:27:06 --> 00:27:13
how to you know repurpose the deep

00:27:10 --> 00:27:15
learning architecture to do a detection

00:27:12 --> 00:27:16
in images and that was the first time

00:27:14 --> 00:27:17
when the visual community really started

00:27:15 --> 00:27:19
seeing

00:27:16 --> 00:27:21
okay so classification is more general I

00:27:18 --> 00:27:23
can classify anything an image an audio

00:27:20 --> 00:27:25
signal whatever right but detection

00:27:22 --> 00:27:26
images was very intimate to the computer

00:27:24 --> 00:27:29
vision community we thought we were best

00:27:25 --> 00:27:31
in the world right so in this paper came

00:27:28 --> 00:27:33
out that was sort of the the final the

00:27:30 --> 00:27:36
final argument from I okay we all need

00:27:32 --> 00:27:39
to do deep learning now right and then

00:27:35 --> 00:27:41
2016 this this paper came out the single

00:27:38 --> 00:27:43
shot multi box detector which i think is

00:27:40 --> 00:27:46
a great paper finally at all

00:27:42 --> 00:27:48
so if you haven't looked at you haven't

00:27:45 --> 00:27:50
looked at this paper by all means read

00:27:47 --> 00:27:53
them carefully

00:27:49 --> 00:27:53
ou know that's the result

00:27:52 --> 00:27:58
you know performance is no longer a joke

00:27:54 --> 00:28:00
right so this is this is a network that

00:27:57 --> 00:28:02
we developed in our in my group so it's

00:27:59 --> 00:28:05
a it's an image joint image

00:28:01 --> 00:28:07
classification segmentation network this

00:28:04 --> 00:28:10
thing we can run this at 200 Hertz on a

00:28:06 --> 00:28:10
single GPU

00:28:09 --> 00:28:14
and in this video in this

00:28:11 --> 00:28:16
rendering there is no tracking apply

00:28:13 --> 00:28:19
there is no temporal smoothing every

00:28:15 --> 00:28:21
single frame is analyzed independently

00:28:18 --> 00:28:24
from the other one and you can see that

00:28:20 --> 00:28:29
we can model several different classes

00:28:23 --> 00:28:31
you know both both boxes and and and the

00:28:28 --> 00:28:33
surfaces at the same time there's my

00:28:30 --> 00:28:35
cartoon drawing of a perception system

00:28:32 --> 00:28:38
an autonomous vehicle so you have the

00:28:34 --> 00:28:40
three different main sense of analyses

00:28:37 --> 00:28:42
typically have some module that does

00:28:39 --> 00:28:45
detection and tracking you know this

00:28:41 --> 00:28:46
tons of variations of the dis of course

00:28:44 --> 00:28:48
we you have some sort of sense of

00:28:45 --> 00:28:51
pipelines and then in the end you have a

00:28:48 --> 00:28:53
tracking infusion step right so what I

00:28:51 --> 00:28:55
showed you in the previous video is

00:28:52 --> 00:28:56
basically at this part so I did like I

00:28:54 --> 00:29:00
said it was a tracking but it's like

00:28:55 --> 00:29:03
going from the camera to detection and

00:28:59 --> 00:29:05
if you look you know when I started so I

00:29:02 --> 00:29:07
come strict from the computer science

00:29:04 --> 00:29:09
learning community so when I start

00:29:06 --> 00:29:10
looking at this pipeline I'm like why

00:29:08 --> 00:29:12
are there so many steps why aren't we

00:29:09 --> 00:29:14
optimizing things you know end to end so

00:29:11 --> 00:29:16
bviously like there is a there's a real

00:29:13 --> 00:29:17
temptation to just wrap everything in a

00:29:15 --> 00:29:20
kernel it's very well defined input

00:29:16 --> 00:29:22
output function and like like Karl

00:29:19 --> 00:29:25
alluded to it's it's one that can be

00:29:21 --> 00:29:28
verified quite quite well assuming you

00:29:24 --> 00:29:29
have the right data I'm not going to be

00:29:27 --> 00:29:34
talking about this I am going to talk

00:29:28 --> 00:29:36
about this namely the building a a deep

00:29:33 --> 00:29:38
learning kernel for the liteup pipeline

00:29:35 --> 00:29:41
and a lot of pipeline is arguably the

00:29:37 --> 00:29:44
backbone of the reception system for for

00:29:40 --> 00:29:46
most autonomous driving systems so

00:29:43 --> 00:29:48
what we're going to do is so this is

00:29:45 --> 00:29:50
basically going to be the goal here so

00:29:47 --> 00:29:53
we're going to have a point cloud simple

00:29:49 --> 00:29:54
and we're gonna have a have a neural

00:29:52 --> 00:29:57
network that takes that in simple and

00:29:53 --> 00:29:58
then generates 3d bounding boxes that

00:29:56 --> 00:30:01
are in the world coordinate system so

00:29:57 --> 00:30:03
it's like 20 meters that way it's two

00:30:00 --> 00:30:08
meters wide so long this this rotation

00:30:02 --> 00:30:10
and this orientation and so on so yeah

00:30:07 --> 00:30:11
so that's what this talk is about so I'm

00:30:09 --> 00:30:13
going to talk about point pillars which

00:30:10 --> 00:30:16
is a new method we developed for this

00:30:12 --> 00:30:18
and new scenes which is a benchmark data

00:30:15 --> 00:30:20
that we released okay so the supporters

00:30:17 --> 00:30:22
point bill as well it's a novel point

00:30:19 --> 00:30:24
cloud encoder that's what we do is we

00:30:21 --> 00:30:26
learn a representation that is suitable

00:30:23 --> 00:30:28
for downstream detection it's almost

00:30:25 --> 00:30:30
like the main innovation is the

00:30:27 --> 00:30:33
translation from a point cloud to a to a

00:30:29 --> 00:30:35
canvas that can then be processed by by

00:30:32 --> 00:30:36
a similar architecture that you would

00:30:34 --> 00:30:38
use in an image

00:30:35 --> 00:30:41
and we are sure it outperforms the you

00:30:37 --> 00:30:44
know all publish measures on kitty by a

00:30:40 --> 00:30:47
large margin especially with respect to

00:30:43 --> 00:30:49
inference speed and there's a pre

00:30:46 --> 00:30:53
printout and some code available if you

00:30:48 --> 00:30:54
guys want to play around with it so the

00:30:52 --> 00:30:57
architecture that we're going to use

00:30:54 --> 00:31:02
looks like something like this and I

00:30:56 --> 00:31:04
should say most papers in this space use

00:31:01 --> 00:31:06
this architecture so it's it's kind of a

00:31:03 --> 00:31:08
natural design right so you have the

00:31:05 --> 00:31:10
point cloud and at the top you have this

00:31:07 --> 00:31:11
encoder and that's where we introduced

00:31:09 --> 00:31:14
the point pillars but you can have I'll

00:31:10 --> 00:31:16
show you guys you can have various types

00:31:13 --> 00:31:18
of encoders and then after that that

00:31:15 --> 00:31:20
fits into backbone which is now a

00:31:17 --> 00:31:22
standard convolutional 2d backbone you

00:31:19 --> 00:31:24
have a detection head and you have you

00:31:21 --> 00:31:26
might have you may or may not have a

00:31:23 --> 00:31:27
segmentation at all that right the point

00:31:25 --> 00:31:30
is that after the encoder everything

00:31:26 --> 00:31:32
looks just like dark - is very similar

00:31:29 --> 00:31:35
to the SSD architecture of the our CNN

00:31:31 --> 00:31:35
architecture

00:31:35 --> 00:31:40
so so let's go into a little bit more

00:31:37 --> 00:31:42
detail right so so the range so what

00:31:39 --> 00:31:45
you're given here is it's a range of the

00:31:41 --> 00:31:46
meter say you wanted a model you know 40

00:31:44 --> 00:31:50
meters afforded me to circle around

00:31:45 --> 00:31:53
example you have certain resolution of

00:31:49 --> 00:31:55
your bins and then a number of output

00:31:52 --> 00:31:57
channels right so input is a set of

00:31:54 --> 00:32:01
pillars or and the pillar here is a

00:31:56 --> 00:32:03
vertical column right so you have n m of

00:32:00 --> 00:32:05
those that are non-empty in this space

00:32:02 --> 00:32:08
and you say a pillar P contains all the

00:32:04 --> 00:32:12
points which are a lot of point XYZ and

00:32:07 --> 00:32:16
intensity and there's n sub M indexed by

00:32:11 --> 00:32:18
M points in each pillar right so just to

00:32:15 --> 00:32:19
say that it varies right so it could be

00:32:17 --> 00:32:22
one single point at a particular

00:32:18 --> 00:32:24
location it could be 200 points and then

00:32:21 --> 00:32:26
it's centered around the spin and the

00:32:23 --> 00:32:30
goal here is to produce a tensor as a

00:32:25 --> 00:32:33
fixed size so it's height which is you

00:32:29 --> 00:32:36
know range of a resolution with inter

00:32:32 --> 00:32:39
esolution and then this parameter C C

00:32:35 --> 00:32:41
is the number of channels so in an image

00:32:38 --> 00:32:43
C will be three we don't necessarily

00:32:40 --> 00:32:44
care about that we call it a pseudo

00:32:42 --> 00:32:46
image but it's the same thing it's a

00:32:43 --> 00:32:49
fixed number of channels that the back

00:32:45 --> 00:32:49
broken and operate on

00:32:48 --> 00:32:54
yes here's a same thing without math

00:32:52 --> 00:32:58
right so you have a lot of points and

00:32:53 --> 00:32:59
you have this space with you just grid

00:32:57 --> 00:33:02
it up in these pillars right some are

00:32:58 --> 00:33:04
mpty some one of them so in this sort

00:33:01 --> 00:33:07
of with this notation let me give a

00:33:03 --> 00:33:08
little bit of a literature review people

00:33:06 --> 00:33:10
tend to do is you take each pillar and

00:33:07 --> 00:33:13
you divide it into voxels right so now I

00:33:09 --> 00:33:14
have a 3d box or grid right and then you

00:33:12 --> 00:33:15
say I'm gonna extract some sort of

00:33:13 --> 00:33:18
eatures for each box so for example how

00:33:14 --> 00:33:20
many points are in this voxel or what is

00:33:17 --> 00:33:23
the maximum intensity of all the points

00:33:19 --> 00:33:24
in this voxel then you extract feature

00:33:22 --> 00:33:27
for the whole pillar right what is the

00:33:23 --> 00:33:29
max intensity across all the points in

00:33:26 --> 00:33:32
the whole pillar right

00:33:28 --> 00:33:34
all of these are ten engineer functions

00:33:31 --> 00:33:35
that generates the fixed length output

00:33:33 --> 00:33:39
so what you can do is you can now

00:33:34 --> 00:33:43
concatenate them and their output is a

00:33:38 --> 00:33:43
this tensor X Y see

00:33:43 --> 00:33:51
so then Vox on that came came around

00:33:47 --> 00:33:54
I'd say year or so ago maybe a little

00:33:50 --> 00:33:55
bit more by now so they do the first

00:33:53 --> 00:33:58
his first step is similar right so you

00:33:54 --> 00:34:00
divide each pillar into voxels and then

00:33:57 --> 00:34:02
you take you map the point in each

00:33:59 --> 00:34:04
voxels and the normal thing here is that

00:34:01 --> 00:34:06
hey they got rid of the future

00:34:03 --> 00:34:09
ngineering so they said we'll we'll map

00:34:05 --> 00:34:12
it from a voxel to two features using a

00:34:08 --> 00:34:14
point net and I'm not going into the

00:34:11 --> 00:34:16
details of a point net but but it's

00:34:13 --> 00:34:19
basically a network architecture that

00:34:15 --> 00:34:21
allows you to take a point cloud

00:34:18 --> 00:34:25
and map it to again a fixed length

00:34:20 --> 00:34:28
representation it's a series of 1d

00:34:24 --> 00:34:30
convolutions and max pooling layers this

00:34:27 --> 00:34:32
a very neat paper right so what they

00:34:29 --> 00:34:34
did is they okay we say we apply that to

00:34:31 --> 00:34:35
each voxel but now I end up with this

00:34:33 --> 00:34:38
awkward four dimensional tensor because

00:34:34 --> 00:34:42
I still have X Y Z from the voxels and

00:34:37 --> 00:34:44
then I have this C dimensional output

00:34:41 --> 00:34:46
from the appointment so then they have

00:34:43 --> 00:34:49
to consolidate this Z dimension through

00:34:45 --> 00:34:52
a 3d convolution right and now you

00:34:48 --> 00:34:54
achieve your X Y C tensor so now you're

00:34:51 --> 00:34:56
ady to go so it's very nice in the

00:34:53 --> 00:34:58
sense that it's an turn method they show

00:34:55 --> 00:35:00
good performance but in the day was very

00:34:57 --> 00:35:03
slow as I got like five Hertz run time

00:34:59 --> 00:35:06
and then the the culprit here is is this

00:35:02 --> 00:35:09
last step so the 3d convolution it's

00:35:05 --> 00:35:13
much much slower than a standard 2d

00:35:08 --> 00:35:15
convolution alright so here's what we

00:35:12 --> 00:35:17
did we basically said let's just forget

00:35:14 --> 00:35:20
about voxels we'll take all the points

00:35:16 --> 00:35:25
in the pillar and we'll put it straight

00:35:19 --> 00:35:29
hrough a point in it that's it so just

00:35:24 --> 00:35:31
hat single change gave a 10200 fold you

00:35:28 --> 00:35:34
know speed up from walks on that and

00:35:30 --> 00:35:36
then we simplify the point net so now

00:35:33 --> 00:35:37
instead of having so a point that can

00:35:35 --> 00:35:39
have several layers and several modules

00:35:36 --> 00:35:41
inside it so it we simplified it to a

00:35:38 --> 00:35:45
single one deconvolution and max falling

00:35:40 --> 00:35:46
layer and then we showed you can get a

00:35:44 --> 00:35:49
really fast implementation by taking all

00:35:45 --> 00:35:51
your pillars that are not empty stack

00:35:48 --> 00:35:52
them together into nice dense tensor

00:35:50 --> 00:35:53
with a little bit of padding here and

00:35:51 --> 00:35:55
there

00:35:52 --> 00:35:57
and you can run that

00:35:54 --> 00:35:58
you know run the forward pass with a

00:35:56 --> 00:36:03
single you can post it as a 2d

00:35:57 --> 00:36:05
convolution with a one by one kernel so

00:36:02 --> 00:36:08
in the final encoder runtime it's not

00:36:04 --> 00:36:12
1.3 milliseconds which is which is

00:36:07 --> 00:36:14
really really fast so the full method

00:36:11 --> 00:36:16
looks like this right so you have the

00:36:13 --> 00:36:19
point cloud you have this pillar feature

00:36:15 --> 00:36:22
net which which is the encoder so the

00:36:18 --> 00:36:24
different steps there that feeds

00:36:21 --> 00:36:26
traight into the backbone and your

00:36:23 --> 00:36:29
detection heads and and there you go so

00:36:25 --> 00:36:31
it's still a multi-stage architecture

00:36:28 --> 00:36:34
but of course the key is that none of

00:36:30 --> 00:36:37
the steps are all the steps are you know

00:36:33 --> 00:36:38
fully parameterized and we learnt we can

00:36:36 --> 00:36:43
back propagate through the whole thing

00:36:37 --> 00:36:45
and learn it so putting these things

00:36:42 --> 00:36:48
together these were the sort results we

00:36:44 --> 00:36:52
got on the Qt benchmark so if you look

00:36:47 --> 00:36:54
at the core class right we actually got

00:36:51 --> 00:36:57
he highest performance so this is I

00:36:53 --> 00:36:59
think the bird's eye view metric and we

00:36:56 --> 00:37:03
ven outperformed the the methods that

00:36:58 --> 00:37:05
relied on lidar ambition and we did that

00:37:02 --> 00:37:13
running at you know over a little bit

00:37:04 --> 00:37:15
over 60 Hertz and we you know and this

00:37:12 --> 00:37:18
like I said this is a bird's eye view

00:37:14 --> 00:37:20
e can also measure the 3d the 3d

00:37:17 --> 00:37:27
benchmark and we get the same very

00:37:19 --> 00:37:29
similar performance yeah so you know

00:37:26 --> 00:37:30
recorded well cyclist did well

00:37:28 --> 00:37:32
pedestrian there was there was one or

00:37:29 --> 00:37:34
two map methods fusion methods that did

00:37:31 --> 00:37:36
a little bit better but then in

00:37:33 --> 00:37:41
aggregate on the top left we ended up on

00:37:35 --> 00:37:44
top and I put a little asterisk here

00:37:40 --> 00:37:46
this is compared to publish methods at

00:37:43 --> 00:37:49
he time of submission it's so many

00:37:45 --> 00:37:51
things happening so quickly so there's

00:37:48 --> 00:37:53
tons of you know submissions not a

00:37:50 --> 00:37:56
kiddie leaderboard that are a completely

00:37:52 --> 00:37:57
anonymous oh we don't even know you know

00:37:55 --> 00:37:59
hat was it what was the input what they

00:37:56 --> 00:38:02
did they use so we only compared to

00:37:58 --> 00:38:02
publish methods

00:38:02 --> 00:38:07
o here's a some quantitative results

00:38:04 --> 00:38:09
you have the we you know just for

00:38:06 --> 00:38:10
visualization you can project them into

00:38:08 --> 00:38:12
the image so you see the gray boxes are

00:38:09 --> 00:38:20
the ground truth and the the corridor

00:38:11 --> 00:38:22
ones are the predictions and yeah some

00:38:19 --> 00:38:24
challenging challenging us is so

00:38:21 --> 00:38:27
smaller but them so we have for example

00:38:23 --> 00:38:30
the person right there that's a you know

00:38:26 --> 00:38:33
a person with a little stand get

00:38:29 --> 00:38:34
interpreted as a bicycle we have this

00:38:32 --> 00:38:37
man on the ladder which is an actual

00:38:33 --> 00:38:38
annotation error so we discovered it as

00:38:36 --> 00:38:43
a person but it wasn't annotated in the

00:38:37 --> 00:38:47
data here's a young child on a bicycle

00:38:42 --> 00:38:51
that didn't get detected so that's a you

00:38:46 --> 00:38:51
know that's that's a bummer

00:38:51 --> 00:38:58
okay so stubs Kitty and then I just

00:38:55 --> 00:39:01
wanted to show you guys of course we can

00:38:57 --> 00:39:04
run this on our vehicle so this is a

00:39:00 --> 00:39:08
rendering we just deploy the network by

00:39:03 --> 00:39:11
two Hertz on on the full 360 sensor

00:39:07 --> 00:39:15
sweet input is still alive you know if

00:39:10 --> 00:39:18
you lidar sweeps but just projected into

00:39:14 --> 00:39:20
the images for visualization and again

00:39:17 --> 00:39:24
o tracking or smoothing applied here so

00:39:19 --> 00:39:29
it's every single frame is is analyzed

00:39:23 --> 00:39:31
independently see those arrows sticking

00:39:28 --> 00:39:35
out that's the velocity estimate so we

00:39:30 --> 00:39:37
actually show how you can yeah you can

00:39:34 --> 00:39:39
actually cumulate multiple point clouds

00:39:36 --> 00:39:42
into this method and now you can start

00:39:38 --> 00:39:42
reasoning about velocity as well

00:39:47 --> 00:39:50
you

00:39:50 --> 00:39:54
so the second part I want to talk about

00:39:51 --> 00:39:58
is new scenes which is a

00:39:53 --> 00:40:00
data said that we have published alright

00:39:57 --> 00:40:03
so what is new scene so it's one

00:39:59 --> 00:40:05
thousand twenty second scenes and that

00:40:02 --> 00:40:08
we collected with our development

00:40:04 --> 00:40:10
platforms it's a full it's the same

00:40:07 --> 00:40:11
platform that called show I sort of

00:40:09 --> 00:40:15
previous generation platform the so a

00:40:10 --> 00:40:17
vehicle so it's full you know the full

00:40:14 --> 00:40:20
automotive sends to sweep data is

00:40:16 --> 00:40:23
registered and synced in 360-degree view

00:40:19 --> 00:40:25
and it's also fully annotated with 3d

00:40:22 --> 00:40:28
bounding boxes I think there is over 1

00:40:24 --> 00:40:29
million 3d bounding boxes and we

00:40:27 --> 00:40:31
actually make this freely available for

00:40:28 --> 00:40:35
esearch so you can go to new scene

00:40:30 --> 00:40:39
store right now and download a teaser a

00:40:35 --> 00:40:42
teaser release which is 100 scenes the

00:40:38 --> 00:40:42
full release will be in about a month

00:40:41 --> 00:40:47
and a person motivation is

00:40:44 --> 00:40:49
traightforward right so you know the

00:40:46 --> 00:40:50
whole field is driven by benchmark and

00:40:48 --> 00:40:52
you know without image and I don't think

00:40:49 --> 00:40:54
none of it might be the case that none

00:40:51 --> 00:40:56
of us are here we're here right because

00:40:53 --> 00:40:59
they may never have been able to write

00:40:55 --> 00:41:01
that first paper and sort of start this

00:40:58 --> 00:41:01
whole thing going

00:41:01 --> 00:41:05
looking at 3d I looked at the kiddie

00:41:02 --> 00:41:07
benchmark which is which is truly

00:41:04 --> 00:41:08
groundbreaking I don't want to take

00:41:06 --> 00:41:10
anything away but it was becoming

00:41:07 --> 00:41:14
outdated that they don't have full 3d

00:41:09 --> 00:41:16
view they don't have any radar so I

00:41:13 --> 00:41:19
think this this offers the opportunity

00:41:15 --> 00:41:22
to sort of push push the field forward a

00:41:18 --> 00:41:26
little bit right and just as a

00:41:21 --> 00:41:27
comparison this is sort of the the most

00:41:25 --> 00:41:30
similar benchmark and really the only

00:41:26 --> 00:41:32
one that is the that you can really

00:41:29 --> 00:41:34
compare to is kitty

00:41:31 --> 00:41:37
but so there's other data sets that have

00:41:33 --> 00:41:41
maybe lidar only tons of data sets I

00:41:36 --> 00:41:43
have image only of course but it's it's

00:41:40 --> 00:41:47
a it's quite a big step up from from

00:41:42 --> 00:41:50
kidney yeah some some details so you see

00:41:46 --> 00:41:53
the layouts with the the Raiders along

00:41:49 --> 00:41:56
the edge all the cameras on the roof and

00:41:52 --> 00:41:59
the top top lidar and some of the

00:41:55 --> 00:42:02
receptive fields and this data is all on

00:41:58 --> 00:42:04
the website the taxonomy so we model

00:42:01 --> 00:42:06
several different sub sub categories of

00:42:03 --> 00:42:08
pedestrians several types of vehicles

00:42:05 --> 00:42:11
ome static objects barrier cones and

00:42:07 --> 00:42:12
then in addition all the bunch of

00:42:10 --> 00:42:15
attributes on the vehicles and on the

00:42:12 --> 00:42:17
pedestrians all right so with without

00:42:14 --> 00:42:19
further ado let's just look at some data

00:42:16 --> 00:42:22
so this is one of the thousand scenes

00:42:18 --> 00:42:25
right so all I'm showing here is

00:42:21 --> 00:42:30
just just playing the frames one by one

00:42:24 --> 00:42:32
of all the images and again the

00:42:29 --> 00:42:33
annotations are living the in the world

00:42:31 --> 00:42:35
coordinate system right so there are

00:42:32 --> 00:42:38
full three full 3d boxes I've just

00:42:34 --> 00:42:40
projected them into the image and that's

00:42:37 --> 00:42:43
what's so neat so we're not really

00:42:39 --> 00:42:44
annotating the lidar or the or the

00:42:42 --> 00:42:47
camera or the radar we're annotating the

00:42:43 --> 00:42:48
actual objects and put them in a wall

00:42:46 --> 00:42:50
coordinate system and give all the

00:42:47 --> 00:42:53
transformation so you guys can play

00:42:49 --> 00:42:56
around with it how you like so just to

00:42:52 --> 00:42:57
show that so I can because everything is

00:42:55 --> 00:42:58
ready so I can now take the light or

00:42:56 --> 00:43:00
sweep and I can just project them into

00:42:57 --> 00:43:02
the image images at the same time so

00:42:59 --> 00:43:04
here I'm showing just colored by

00:43:01 --> 00:43:08
distance so now you have some sort of

00:43:03 --> 00:43:11
sparse density measurement on the images

00:43:07 --> 00:43:12
a distance measurement sorry so so

00:43:10 --> 00:43:20
that's all I want there let's talk about

00:43:11 --> 00:43:21
hank you hi I was really really

00:43:19 --> 00:43:23
interested in your discussion around

00:43:20 --> 00:43:25
validation and particularly continuous

00:43:22 --> 00:43:27
development that sort of thing and so my

00:43:24 --> 00:43:29
question was basically is is this new

00:43:26 --> 00:43:31
scenes data set is this enough to to

00:43:28 --> 00:43:33
guarantee that your model is going to

00:43:30 --> 00:43:35
generalize to unseen data and you know

00:43:32 --> 00:43:36
not hit pedestrians in that stuff or do

00:43:34 --> 00:43:38
you have other validation that you need

00:43:35 --> 00:43:40
to do no no I mean so the new sensor for

00:43:37 --> 00:43:43
this is it's purely an academic efforts

00:43:39 --> 00:43:45
o we want to share our data with

00:43:42 --> 00:43:48
academic community to drive the car to

00:43:44 --> 00:43:50
feel forward we're not making any claims

00:43:47 --> 00:43:52
that this is somehow a sufficient data

00:43:49 --> 00:43:57
set for trying to save the case it's a

00:43:51 --> 00:44:00
small subset of our our data yeah I

00:43:56 --> 00:44:02
would say you know obviously my

00:43:59 --> 00:44:03
background is in the academic world one

00:44:01 --> 00:44:05
of the hardest things was always

00:44:02 --> 00:44:09
collecting data because it's difficult

00:44:04 --> 00:44:10
and expensive and so having access to a

00:44:08 --> 00:44:13
data set like that which was expensive

00:44:10 --> 00:44:16
to to collect and annotate but which we

00:44:12 --> 00:44:19
thought we would make available because

00:44:15 --> 00:44:21
well we hoped that it would spark

00:44:18 --> 00:44:23
academic interests and smart people like

00:44:20 --> 00:44:25
the people in this room coming up with

00:44:22 --> 00:44:26
new and better algorithms which could

00:44:24 --> 00:44:26
benefit the whole community and then

00:44:25 --> 00:44:28
maybe something

00:44:25 --> 00:44:31
even want to come work with us adaptive

00:44:27 --> 00:44:33
so not totally a little bit of self

00:44:30 --> 00:44:35
interest there wasn't intended to be for

00:44:32 --> 00:44:37
validation was more for research to give

00:44:34 --> 00:44:39
you a sense than the scale of validation

00:44:36 --> 00:44:41
there was one quote there and you know

00:44:38 --> 00:44:44
saying you got to drive 275 million

00:44:40 --> 00:44:48
miles or more depending on your

00:44:43 --> 00:44:51
certainty you want to impose but to date

00:44:47 --> 00:44:53
is an industry we've driven about like

00:44:50 --> 00:44:54
twelve million miles to twelve to

00:44:52 --> 00:44:58
fourteen million miles in some all

00:44:54 --> 00:44:59
participants in autonomous mode under

00:44:57 --> 00:45:00
hundreds of over hundreds of different

00:44:58 --> 00:45:03
Bills of code and many different

00:44:59 --> 00:45:04
environments so this would now be saying

00:45:02 --> 00:45:06
you're supposed to drive hundreds of

00:45:03 --> 00:45:08
millions of miles in a particular

00:45:05 --> 00:45:10
environment on a single build of code a

00:45:07 --> 00:45:12
single platform now obviously we're

00:45:09 --> 00:45:13
probably not going to do that what we'll

00:45:11 --> 00:45:15
end up doing is supplementing the

00:45:12 --> 00:45:18
driving with quite a lot of simulation

00:45:14 --> 00:45:20
and then other methodologies to convince

00:45:17 --> 00:45:22
ourselves that we have we can make a

00:45:19 --> 00:45:24
statistical ultimately a statistical

00:45:21 --> 00:45:26
argument for safety so there'll be use

00:45:23 --> 00:45:28
of data sets like this you know we'll be

00:45:25 --> 00:45:30
doing lots of regression testing on

00:45:27 --> 00:45:32
supersize version of data set

00:45:29 --> 00:45:34
either kind of morally equivalent

00:45:31 --> 00:45:35
versions to test different parts of the

00:45:33 --> 00:45:37
systems now I'm not just classification

00:45:34 --> 00:45:40
but different aspects of the system are

00:45:36 --> 00:45:42
motion planning decision-making

00:45:39 --> 00:45:45
localization all aspects of the system

00:45:41 --> 00:45:47
and then augment that with on-road

00:45:44 --> 00:45:49
riving and augment that with simulation

00:45:46 --> 00:45:52
so the safety case is really quite a bit

00:45:48 --> 00:45:54
broader unfortunately then any single

00:45:51 --> 00:45:56
data set would allow you to to kind of

00:45:53 --> 00:46:00
speak to from an industrial perspective

00:45:55 --> 00:46:04
what do you think can 5g offer for

00:45:59 --> 00:46:06
autonomous vehicles 5g yeah it's an

00:46:03 --> 00:46:08
interesting one well these vehicles are

00:46:05 --> 00:46:10
connected you know that's that's a

00:46:07 --> 00:46:12
requirement

00:46:09 --> 00:46:14
certainly when you think about operating

00:46:11 --> 00:46:16
them as a fleet when the day comes when

00:46:13 --> 00:46:18
you have an autonomous vehicle that is

00:46:15 --> 00:46:20
personally owned and that they will come

00:46:17 --> 00:46:22
in some point in the future it may or

00:46:19 --> 00:46:24
may not be connected it will almost

00:46:21 --> 00:46:25
certainly then be too but when you have

00:46:23 --> 00:46:27
a fleet of vehicles and you want to

00:46:24 --> 00:46:30
coordinate the activity that fleet and a

00:46:26 --> 00:46:31
way to you know maximize the efficiency

00:46:29 --> 00:46:32
of that network that transportation

00:46:30 --> 00:46:34
etwork

00:46:31 --> 00:46:35
they're certainly connected the

00:46:33 --> 00:46:37
requirements of that kind of tivity is

00:46:34 --> 00:46:38
fairly relaxed if you're talking about

00:46:36 --> 00:46:40
just passing back and forth the position

00:46:37 --> 00:46:41
of the car and maybe some status

00:46:39 --> 00:46:43
indicators you know are you know

00:46:41 --> 00:46:44
autonomous mode manual mode are all

00:46:42 --> 00:46:48
systems go where you have a fault code

00:46:43 --> 00:46:49
and what is it now there's some

00:46:47 --> 00:46:50
interesting requirements that become a

00:46:48 --> 00:46:52
little bit more stringent if you think

00:46:49 --> 00:46:55
about what we call teleoperation and

00:46:51 --> 00:46:56
remote operation of the car the case

00:46:54 --> 00:46:58
where if the car encounters a situation

00:46:55 --> 00:47:01
it doesn't recognize can't figure out

00:46:57 --> 00:47:04
gets stuck or confused you may kind of

00:47:00 --> 00:47:06
phone a human operator who's sitting

00:47:03 --> 00:47:08
remotely to intervene and in that case

00:47:05 --> 00:47:10
you know that human operator will want

00:47:07 --> 00:47:13
o have some situational awareness there

00:47:09 --> 00:47:14
may be a demand of high-bandwidth

00:47:12 --> 00:47:17
low-latency

00:47:13 --> 00:47:21
high reliability the sort that maybe 5g

00:47:16 --> 00:47:24
is better suited to than 4G or LTE or

00:47:20 --> 00:47:28
whatever you've got broadly speaking we

00:47:23 --> 00:47:30
see it as very nice to have but like any

00:47:27 --> 00:47:32
infrastructure we understand that it's

00:47:29 --> 00:47:35
gonna arrive on a time line of its own

00:47:31 --> 00:47:37
and be maintained by someone who's not

00:47:34 --> 00:47:39
us so it's very much outside our control

00:47:36 --> 00:47:42
and so for that reason we design a

00:47:38 --> 00:47:44
system such that we don't rely on kind

00:47:41 --> 00:47:45
of the coming 5g way but we'll certainly

00:47:43 --> 00:47:48
welcome it when it arrives

00:47:44 --> 00:47:50
o you said you have presence in 45

00:47:47 --> 00:47:52
countries so did you observe any

00:47:49 --> 00:47:55
interesting patterns from that like your

00:47:51 --> 00:47:57
car your same your same

00:47:54 --> 00:47:59
self-driving car model that is deployed

00:47:56 --> 00:48:01
in Vegas as well as Singapore was able

00:47:58 --> 00:48:03
to perform equally well in both Vegas

00:48:00 --> 00:48:05
and Singapore the model was able to

00:48:02 --> 00:48:07
perform very well in Singapore compared

00:48:04 --> 00:48:09
to Vegas to speak to your question about

00:48:06 --> 00:48:11
like country to country variation you

00:48:08 --> 00:48:14
know we touched on that for a moment in

00:48:10 --> 00:48:15
the validation discussion but obviously

00:48:13 --> 00:48:16
driving in Singapore and driving in

00:48:14 --> 00:48:18
Vegas is pretty different I mean you're

00:48:15 --> 00:48:21
on the other side of the road for

00:48:17 --> 00:48:23
starters but different traffic rules and

00:48:20 --> 00:48:24
it's sort of underappreciated people

00:48:22 --> 00:48:26
drive differently

00:48:23 --> 00:48:29
there's slightly different traffic norms

00:48:25 --> 00:48:30
o one of the things that well if anyone

00:48:28 --> 00:48:32
was in this class last year

00:48:29 --> 00:48:35
my co-founder Emilio gave a talk about

00:48:31 --> 00:48:37
something we call rule books which is a

00:48:34 --> 00:48:38
structure that we've designed around

00:48:36 --> 00:48:39
that what we call the driving policy or

00:48:37 --> 00:48:42
the decision-making engine which tries

00:48:38 --> 00:48:46
to admit in a general and fairly

00:48:41 --> 00:48:49
flexible way the ability to reprioritize

00:48:45 --> 00:48:51
rules reassign rules change weights on

00:48:48 --> 00:48:53
rules to enable us to drive in one

00:48:50 --> 00:48:55
community and then another in a fairly

00:48:52 --> 00:48:56
seamless manner so they give you an

00:48:54 --> 00:48:59
example when we when you want to get on

00:48:56 --> 00:49:01
the road in Singapore if you can imagine

00:48:58 --> 00:49:03
you've got a so you're let's say you're

00:49:00 --> 00:49:04
a autonomy engineer who was tasked with

00:49:02 --> 00:49:05
writing the decision-making engine you

00:49:03 --> 00:49:07
decided I'm gonna do a finite-state

00:49:04 --> 00:49:09
architecture I'm gonna write down some

00:49:06 --> 00:49:11
transition rules I'm gonna do them by

00:49:08 --> 00:49:13
hand it's gonna be great and then you

00:49:10 --> 00:49:14
did that for the right-hand driving and

00:49:12 --> 00:49:15
your boss came in and said oh yeah next

00:49:13 --> 00:49:18
Monday we're gonna be the left-hand

00:49:14 --> 00:49:20
riving so you flip all that and get it

00:49:17 --> 00:49:22
ready to go that could be a huge pain

00:49:19 --> 00:49:24
to do because it's generally

00:49:21 --> 00:49:25
speaking you're doing it manually and

00:49:23 --> 00:49:28
then a very difficult to validate to

00:49:24 --> 00:49:30
ensure that that the outputs are correct

00:49:27 --> 00:49:32
across the entire spectrum possibilities

00:49:29 --> 00:49:35
o we wanted to avoid that and so the

00:49:31 --> 00:49:38
long story short we actually quite

00:49:34 --> 00:49:41
carefully designed the system such that

00:49:37 --> 00:49:44
we can scale to different cities and

00:49:40 --> 00:49:46
countries and one of the ways you do

00:49:43 --> 00:49:48
that is by thinking carefully around the

00:49:45 --> 00:49:50
architectural design of the

00:49:47 --> 00:49:53
decision-making engine but it's it's

00:49:49 --> 00:49:54
you know quite different this for

00:49:52 --> 00:49:56
cities I mentioned which are primary

00:49:53 --> 00:49:58
sites Boston Pittsburgh Vegas and

00:49:55 --> 00:50:00
Singapore spans a wide spectrum of

00:49:57 --> 00:50:03
driving conditions I mean everybody

00:49:59 --> 00:50:07
knows Boston which is pretty bad

00:50:02 --> 00:50:11
Vegas is warm weather mid density urban

00:50:06 --> 00:50:13
but it's Vegas so I mean all kinds of

00:50:10 --> 00:50:15
stuff and then Singapore is interesting

00:50:12 --> 00:50:18
perfect infrastructure of good weather

00:50:14 --> 00:50:21
flat people generally speaking obey the

00:50:17 --> 00:50:24
rules so it's kind of close to the ideal

00:50:20 --> 00:50:27
case so you that exposure to this

00:50:23 --> 00:50:28
different spectrum of data I think I'll

00:50:26 --> 00:50:29
speak for Oscar maybe it's pretty

00:50:27 --> 00:50:31
valuable I know for other parts of the

00:50:29 --> 00:50:34
development team quite valuable

00:50:30 --> 00:50:36
Singapore is ideal except they're the

00:50:33 --> 00:50:37
constant construction zones so every

00:50:35 --> 00:50:39
time you drive out there's a new

00:50:36 --> 00:50:41
construction zone so we focus to have a

00:50:38 --> 00:50:43
lot of work in construction zone

00:50:40 --> 00:50:47
detection Singapore and the torrential

00:50:42 --> 00:50:49
rain yeah in the jaywalkers right they

00:50:46 --> 00:50:53
do a walk people don't break the radio

00:50:48 --> 00:50:55
AJ so other than that is perfect so

00:50:52 --> 00:50:56
which country is fully equipped it's a

00:50:54 --> 00:50:58
really good question

00:50:55 --> 00:51:00
yeah well it's interesting because

00:50:57 --> 00:51:02
there's other dimensions so when we look

00:50:59 --> 00:51:05
at which countries are interesting to us

00:51:01 --> 00:51:06
to be in as a market there's there's the

00:51:04 --> 00:51:08
infrastructure conditions

00:51:05 --> 00:51:10
there's the driving patterns and

00:51:07 --> 00:51:11
properties the density you know is it

00:51:09 --> 00:51:14
Times Square at rush hour or is it

00:51:10 --> 00:51:16
Dubuque Iowa there is the regulatory

00:51:13 --> 00:51:17
environment which is incredibly

00:51:15 --> 00:51:18
important you may have a perfectly

00:51:16 --> 00:51:20
well-suited city from a technical

00:51:17 --> 00:51:23
perspective and they may not allow you

00:51:19 --> 00:51:26
to drive there so it's really all of

00:51:22 --> 00:51:27
these things put together and so we you

00:51:25 --> 00:51:30
know we kind of have a matrix we analyze

00:51:26 --> 00:51:31
which cities check these boxes and and

00:51:29 --> 00:51:34
assign them scores and then try to

00:51:30 --> 00:51:36
understand then also the economics of

00:51:33 --> 00:51:38
that market is that city check all these

00:51:35 --> 00:51:40
boxes but there's no one taking using

00:51:37 --> 00:51:42
mobility services there there's no

00:51:39 --> 00:51:44
pportunity to actually generate revenue

00:51:41 --> 00:51:47
from the service so we can you know you

00:51:43 --> 00:51:49
factor in all of those things yeah and I

00:51:46 --> 00:51:50
think I mean one thing to keep in mind

00:51:48 --> 00:51:52
that is always the first first thing I

00:51:49 --> 00:51:54
thought candidates when I interview them

00:51:51 --> 00:51:55
there's a huge difference in the

00:51:53 --> 00:51:57
advantage to the business more we're

00:51:54 --> 00:51:59
proposing right that's right right

00:51:56 --> 00:52:01
having service so we can choose even if

00:51:58 --> 00:52:03
we commit to some city we can solve

00:52:00 --> 00:52:04
something you know select the routes

00:52:02 --> 00:52:06
that we feel comfortable and we can roll

00:52:03 --> 00:52:08
it out sort of piece by piece when you

00:52:05 --> 00:52:10
say okay we we don't feel comfortable

00:52:07 --> 00:52:13
when drive at night in the city yet so

00:52:09 --> 00:52:15
we just won't accept any rights right so

00:52:12 --> 00:52:16
that there's like that that decision

00:52:14 --> 00:52:18
space as well

00:52:15 --> 00:52:20
hi thank you very much for coming and

00:52:17 --> 00:52:21
giving us this talk today was very very

00:52:19 --> 00:52:23
interesting I have a question which

00:52:20 --> 00:52:26
might reveal more about how naive I am

00:52:22 --> 00:52:30
than anything else I was comparing your

00:52:25 --> 00:52:33
point pillar approach to the

00:52:29 --> 00:52:35
arlier approach where you were which is

00:52:32 --> 00:52:38
this the voxel based approach to

00:52:34 --> 00:52:40
interpreting the lidar results and in

00:52:37 --> 00:52:42
the voxels you had a four dimensional

00:52:39 --> 00:52:43
tensor that you were starting with and

00:52:41 --> 00:52:44
you

00:52:42 --> 00:52:46
r point Miller you only have three

00:52:43 --> 00:52:49
dimensions you're throwing away the Z as

00:52:45 --> 00:52:50
I understood it so when you do that are

00:52:48 --> 00:52:52
you concerned that you're losing

00:52:49 --> 00:52:55
information about potential occlusions

00:52:51 --> 00:52:59
or transparencies or semi occlusions is

00:52:54 --> 00:53:01
this a concern I think so so I may have

00:52:58 --> 00:53:02
you know I've been a little bit sloppy

00:53:00 --> 00:53:05
there so we're certainly not throwing

00:53:01 --> 00:53:08
away the see what we're saying is that

00:53:04 --> 00:53:10
we're learning the embedding of in the C

00:53:07 --> 00:53:13
dimension jointly with with everything

00:53:09 --> 00:53:16
else so Volk sonnet if you want sort of

00:53:12 --> 00:53:17
elt that when I first signed that paper

00:53:15 --> 00:53:19
that I felt the need to like

00:53:16 --> 00:53:21
spoon-feeding Network a little bit and

00:53:18 --> 00:53:24
say let's learn everything you know

00:53:20 --> 00:53:27
stratified in this in this high

00:53:23 --> 00:53:29
dimension and then we'll have a second

00:53:26 --> 00:53:32
step where we learn to consolidate that

00:53:28 --> 00:53:33
into a single vector we just said why

00:53:31 --> 00:53:37
don't just learn those things together

00:53:32 --> 00:53:39
so yeah thanks for a talk I have a

00:53:36 --> 00:53:42
question for Carl you mentioned that

00:53:38 --> 00:53:46
like if people make change to the code

00:53:41 --> 00:53:49
do we need another validation or not so

00:53:45 --> 00:53:52
I work in the industry of nuclear power

00:53:48 --> 00:53:55
so we do nuclear power simulations so

00:53:51 --> 00:53:57
when we like make any change to our

00:53:54 --> 00:54:00
simulation code and to make it

00:53:56 --> 00:54:03
commercialize we need to submit a

00:53:59 --> 00:54:07
request for NRC which is the nuclear

00:54:02 --> 00:54:10
Regulation Committee so in your opinion

00:54:06 --> 00:54:14
do you think for self-driving we need

00:54:09 --> 00:54:17
another third-party validation community

00:54:13 --> 00:54:21
or not or like should that be a third

00:54:16 --> 00:54:22
party or it's just self check yeah

00:54:20 --> 00:54:25
that's a really good question

00:54:21 --> 00:54:26
so I don't know the answer I would be

00:54:24 --> 00:54:27
surprised

00:54:25 --> 00:54:29
let me put it this way I would not be

00:54:26 --> 00:54:31
surprised either way if the automotive

00:54:28 --> 00:54:34
industry ended up with with third party

00:54:30 --> 00:54:36
regulatory or oversight or it didn't and

00:54:33 --> 00:54:38
I'll tell you why there's there's great

00:54:35 --> 00:54:41
precedents for what you just described

00:54:37 --> 00:54:43
nuclear aerospace there's external

00:54:40 --> 00:54:45
bodies who have deep technical

00:54:42 --> 00:54:48
competence who can come in they can do

00:54:44 --> 00:54:51
investigations they can impose strict

00:54:47 --> 00:54:54
regulation or or advise regulation and

00:54:50 --> 00:54:57
they can they can partner or

00:54:53 --> 00:54:59
our define requirements for

00:54:56 --> 00:55:01
certification of various types the

00:54:58 --> 00:55:03
automotive industry has largely been

00:55:00 --> 00:55:05
self-certifying

00:55:02 --> 00:55:06
there's an argument which is which is

00:55:04 --> 00:55:09
certainly not unreasonable that you have

00:55:05 --> 00:55:12
a you know a real alignment of incentive

00:55:08 --> 00:55:16
within the industry and with the public

00:55:11 --> 00:55:18
to be as safe as possible simply put the

00:55:15 --> 00:55:19
cost of a crashes is enormous

00:55:17 --> 00:55:22
you know economically socially

00:55:18 --> 00:55:26
everything else but whether it continues

00:55:21 --> 00:55:29
along that path I couldn't tell you it's

00:55:25 --> 00:55:31
an interesting space because it's one

00:55:28 --> 00:55:33
where the federal government is actually

00:55:30 --> 00:55:36
moving very very quickly I mean I would

00:55:32 --> 00:55:38
say carefully to not overstepping and

00:55:35 --> 00:55:40
not trying to impose too much regulation

00:55:37 --> 00:55:42
around an industry that has never

00:55:39 --> 00:55:45
generated a dollar of revenue is still

00:55:41 --> 00:55:47
quite NASA but if you would have told me

00:55:44 --> 00:55:50
a few years ago that there would have

00:55:46 --> 00:55:53
been very thoughtfully defined draft

00:55:49 --> 00:55:56
regulatory guidelines or advice I mean

00:55:52 --> 00:55:58
let's say it's not firm regulation

00:55:55 --> 00:56:00
around this industry I probably wouldn't

00:55:57 --> 00:56:01
believe you but in fact that exists

00:55:59 --> 00:56:03
there's a third version that was

00:56:00 --> 00:56:06
released this summer by the Department

00:56:02 --> 00:56:09
of Transportation so there's intense

00:56:05 --> 00:56:12
interest on the regulatory side in terms

00:56:08 --> 00:56:14
of how far you know the process goes in

00:56:11 --> 00:56:16
terms of formation of an external body I

00:56:13 --> 00:56:18
think really remains to be seen I don't

00:56:15 --> 00:56:20
know the answer thanks for your

00:56:17 --> 00:56:23
insightful talk looking at this slide

00:56:19 --> 00:56:27
I'm wondering how easy and effective

00:56:22 --> 00:56:29
your train models are to transfer across

00:56:26 --> 00:56:31
different letters and whether you need

00:56:28 --> 00:56:34
for example if it is snowing do we need

00:56:30 --> 00:56:37
specific trainings for specifically for

00:56:33 --> 00:56:39
your light hours to work effectively or

00:56:36 --> 00:56:42
you don't see any issues in that regard

00:56:38 --> 00:56:44
no I mean I think the same rules apply

00:56:41 --> 00:56:45
to this method us as any other machine

00:56:43 --> 00:56:48
learning based method you want to have

00:56:44 --> 00:56:50
support in your training data for the

00:56:47 --> 00:56:52
situation want to deploy in so if we

00:56:49 --> 00:56:55
have no snow you know train that I

00:56:51 --> 00:56:58
wouldn't go and deploy this in snow

00:56:54 --> 00:56:59
I do like one thing I like after having

00:56:57 --> 00:57:01
worked so much with mission though is

00:56:58 --> 00:57:05
that light the lighter point cloud is

00:57:00 --> 00:57:07
really easy to augment and play around

00:57:04 --> 00:57:11
with so for example it's you know if you

00:57:06 --> 00:57:13
wanna say you want to be robust some

00:57:10 --> 00:57:15
really rare events right so let's say

00:57:12 --> 00:57:16
there's a piano on the road I really

00:57:14 --> 00:57:18
want to detect that but it's hard

00:57:15 --> 00:57:20
because I have very few examples of

00:57:17 --> 00:57:21
pianos on the road right now if you

00:57:19 --> 00:57:23
think about augmenting your visual data

00:57:20 --> 00:57:25
set with that data it's actually quite

00:57:22 --> 00:57:27
tricky so that easy to have a

00:57:24 --> 00:57:30
photorealistic piano in your training

00:57:26 --> 00:57:32
data but it is quite easy to do that in

00:57:29 --> 00:57:34
your lighter alright so you have a 3d

00:57:31 --> 00:57:36
model of your obvious piano you have

00:57:33 --> 00:57:38
your your the model for your lidar and

00:57:35 --> 00:57:40
you can get a pretty accurate fairly

00:57:37 --> 00:57:42
realistic point cloud return from that

00:57:39 --> 00:57:44
right so I like that part about working

00:57:41 --> 00:57:46
with lighter you can you can augment you

00:57:43 --> 00:57:47
can play around with it in fact one of

00:57:45 --> 00:57:50
the things we do when we train this

00:57:46 --> 00:57:54
model is that we we copy and paste

00:57:49 --> 00:57:55
samples from from or like objects from

00:57:53 --> 00:57:58
different samples you can take a car

00:57:54 --> 00:57:59
that I saw yesterday take that point the

00:57:57 --> 00:58:02
points the point difference on that car

00:57:58 --> 00:58:03
you can just paste it into your current

00:58:01 --> 00:58:06
light or sweep you have to be a little

00:58:02 --> 00:58:08
bit careful right and I'm and this was

00:58:05 --> 00:58:10
actually proposed by another very

00:58:07 --> 00:58:13
previous paper and we found that that

00:58:09 --> 00:58:15
was really useful they don't it sounds

00:58:12 --> 00:58:18
absurd but it actually works and it

00:58:14 --> 00:58:20
speaks to the ability to do that with

00:58:17 --> 00:58:22
leather punk rock okay great please give

00:58:19 --> 00:58:24
Carl and Oscar up again thank you so

00:58:21 --> 00:58:24
much

00:58:33 --> 00:58:37
you

<!-- YOUTUBE_TRANSCRIPT_END -->
