---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "m17Z9eyASfs"
title: "Kevin Fu"
video_url: "https://www.youtube.com/watch?v=m17Z9eyASfs"
thumbnail_url: "https://i.ytimg.com/vi/m17Z9eyASfs/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=m17Z9eyASfs"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2017-07-28T20:54:06.000Z"
upload_date: "2017-07-28"
duration_seconds: 1095
duration_human: "18:15"
view_count: 193
like_count: null
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-21T16:23:14.093Z"
---

# Kevin Fu

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=m17Z9eyASfs
- video_id: m17Z9eyASfs
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2017-07-28T20:54:06.000Z
- upload_date: 2017-07-28
- duration: 18:15
- view_count: 193
- like_count: _none_
- has_subtitle: true
- language: en
- availability: public
- tags: _none_
- categories: Science & Technology

## Description

_No description available._

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:05 --> 00:00:13
okay um how how's everybody doing this

00:00:09 --> 00:00:15
morning okay how's the soilin okay

00:00:12 --> 00:00:17
excellent all right just seeing who's

00:00:14 --> 00:00:20
awake um so I wanted to start with a a

00:00:16 --> 00:00:21
quick uh little quiz but um so I'm a

00:00:19 --> 00:00:23
professor from the University of

00:00:20 --> 00:00:25
Michigan I also have a dual role as a

00:00:22 --> 00:00:27
chief scientist and co-founder at a

00:00:24 --> 00:00:29
company called veral lab so we're not as

00:00:26 --> 00:00:31
far along as Dan's company but we did

00:00:28 --> 00:00:33
just close on our uh speed round on

00:00:30 --> 00:00:35
Friday so we're finally taking off um

00:00:32 --> 00:00:37
I'll tell you a little bit about that

00:00:34 --> 00:00:38
but it's mostly going to be about um

00:00:36 --> 00:00:41
some highle research today it should be

00:00:37 --> 00:00:43
pretty understandable so um if you're

00:00:40 --> 00:00:45
not a security person this is mainly for

00:00:42 --> 00:00:47
the non-security people I'll tell you

00:00:44 --> 00:00:49
it's really hard to get security right

00:00:46 --> 00:00:51
um so I just did this exercise with my

00:00:48 --> 00:00:53
undergrads uh the other day I asked them

00:00:50 --> 00:00:55
to Define correctness for this keypad to

00:00:52 --> 00:00:57
go through a door they did a relatively

00:00:54 --> 00:00:59
good job and then I asked them to Define

00:00:56 --> 00:01:01
what does it mean to be secure uh for

00:00:58 --> 00:01:03
this keypad and they gave all sorts of

00:01:00 --> 00:01:05
things like well if you enter the

00:01:02 --> 00:01:07
correct pin number the door will open uh

00:01:04 --> 00:01:08
they did a few other things um you know

00:01:06 --> 00:01:11
an adversary shouldn't be able to do

00:01:07 --> 00:01:13
this or that uh without the PIN code and

00:01:10 --> 00:01:15
what was interesting was um this is a

00:01:12 --> 00:01:17
picture I took at a hotel the hotel

00:01:14 --> 00:01:20
decided to print the pin code on a

00:01:17 --> 00:01:21
plastic placard uh and if you don't if

00:01:19 --> 00:01:25
you can't read English they also have

00:01:20 --> 00:01:26
the numbers uh in Spanish um and and so

00:01:24 --> 00:01:27
the students were surprised that

00:01:25 --> 00:01:29
actually everyone who suggested a

00:01:27 --> 00:01:32
definition of security their definition

00:01:28 --> 00:01:33
was satisfied because this placard

00:01:31 --> 00:01:35
circumvented their definition of

00:01:32 --> 00:01:37
security so the take-home message is a

00:01:34 --> 00:01:40
lot of the problems with computer

00:01:36 --> 00:01:43
security are that not and that something

00:01:39 --> 00:01:45
uh is is uh U necessarily broken but

00:01:42 --> 00:01:47
hat things don't always work the way

00:01:44 --> 00:01:48
ou think they should and the model you

00:01:46 --> 00:01:50
have of security is not always how the

00:01:47 --> 00:01:52
adversary

00:01:49 --> 00:01:54
thinks um but what I'm going to talk

00:01:51 --> 00:01:56
about today is uh effectively sort of

00:01:53 --> 00:01:58
what can embedded systems or what has

00:01:55 --> 00:02:00
now become more internet of security uh

00:01:57 --> 00:02:02
excuse me internet of things can learn

00:01:59 --> 00:02:04
from medical devices security um and I

00:02:01 --> 00:02:06
actually brought some toys along so um

00:02:03 --> 00:02:09
this is a picture of an early

00:02:05 --> 00:02:12
defibrillator uh this is a device uh

00:02:08 --> 00:02:14
before Wireless communication was common

00:02:11 --> 00:02:17
uh it's from some of my colleagues at

00:02:13 --> 00:02:18
metronic up in Minnesota um Can anyone

00:02:16 --> 00:02:23
guess what the little wire uh on the

00:02:17 --> 00:02:23
right what its purpose is or what it

00:02:22 --> 00:02:26
does by the way this is I'm going to

00:02:24 --> 00:02:29
while you're thinking actually I'm going

00:02:25 --> 00:02:31
to pass around a defibrillator um this

00:02:28 --> 00:02:35
from a patient who no longer needed

00:02:30 --> 00:02:35
um and uh here you

00:02:34 --> 00:02:41
go uh that oh that is the electrode that

00:02:37 --> 00:02:43
sounds the shocks to your heart also

00:02:40 --> 00:02:45
senses your cardiac rythmia but what

00:02:42 --> 00:02:50
do you think that little wire is

00:02:44 --> 00:02:51
for data data very close so in the old

00:02:49 --> 00:02:53
ays oh yeah you can pass that around

00:02:50 --> 00:02:55
just make sure it comes back it has a

00:02:52 --> 00:02:58
street value of $40,000 so I would like

00:02:54 --> 00:02:59
it back but um in the old days before

00:02:57 --> 00:03:01
there was Wireless communication on

00:02:58 --> 00:03:02
implanted medical devices what they

00:03:00 --> 00:03:05
would do is they'd have the patient lift

00:03:01 --> 00:03:06
up their arm and they'd plunge a needle

00:03:04 --> 00:03:08
through their armpit and twist a

00:03:05 --> 00:03:10
potentiometer to change the heart rate

00:03:07 --> 00:03:13
um so there's very good reason to

00:03:09 --> 00:03:16
introduce Wireless um but Wireless can

00:03:12 --> 00:03:18
have sort of unintended consequences so

00:03:15 --> 00:03:21
the the point is Wireless addressed a

00:03:17 --> 00:03:24
specific risk that is infection so it

00:03:20 --> 00:03:27
was a tremendous leap uh in in safety by

00:03:23 --> 00:03:30
introducing Wireless um but Wireless

00:03:26 --> 00:03:31
also has its own risks so um as Dan

00:03:29 --> 00:03:34
alluded to

00:03:30 --> 00:03:36
uh I was part of a team uh gosh it was

00:03:33 --> 00:03:40
like s years ago now uh where we reverse

00:03:35 --> 00:03:41
ngineered a defibrillator um and uh

00:03:39 --> 00:03:43
this is how defibrillators are actually

00:03:40 --> 00:03:45
implanted in practice what you do uh is

00:03:42 --> 00:03:48
the surgical team first sets some

00:03:44 --> 00:03:50
initialization on it wirelessly um it

00:03:47 --> 00:03:52
gets implanted takes about only 90

00:03:49 --> 00:03:54
minutes uh the patient is actually awake

00:03:51 --> 00:03:57
slightly sedated there's a look on

00:03:53 --> 00:03:59
aesthetic um after the surgical team uh

00:03:56 --> 00:04:01
implants the device and weaves you'll

00:03:58 --> 00:04:03
see this little wire being passed around

00:04:00 --> 00:04:06
after the electrode is implanted in a

00:04:02 --> 00:04:07
sacrificed blood vessel uh it's sewn up

00:04:05 --> 00:04:09
and they do some testing to make sure it

00:04:06 --> 00:04:11
works properly and then typically the

00:04:08 --> 00:04:13
patient receives an at home monitor it

00:04:10 --> 00:04:15
looks sort of like a base station uh it

00:04:12 --> 00:04:17
wirelessly collects Telemetry from you

00:04:14 --> 00:04:18
as you're walking around you don't even

00:04:16 --> 00:04:20
eed to think about it and then this

00:04:17 --> 00:04:22
information is forwarded up the chain

00:04:20 --> 00:04:26
through various communication Pathways

00:04:22 --> 00:04:27
where the Physicians and the nurses uh

00:04:25 --> 00:04:30
the clinicians can actually see the

00:04:26 --> 00:04:31
information on a website a quote secure

00:04:29 --> 00:04:33
website

00:04:30 --> 00:04:34
um so when we were looking at this we

00:04:32 --> 00:04:36
spent some time in the operating room

00:04:33 --> 00:04:37
and learning how the devices work and

00:04:35 --> 00:04:39
watching how people interact with

00:04:36 --> 00:04:41
technology and one of the interesting

00:04:38 --> 00:04:43
things we learned was the following um I

00:04:40 --> 00:04:45
was sitting there in the room and the

00:04:42 --> 00:04:47
lead physician said okay everybody stand

00:04:44 --> 00:04:48
back uh we're about to induce uh

00:04:46 --> 00:04:50
ventricular

00:04:47 --> 00:04:52
fibrillation and uh I sort of said well

00:04:49 --> 00:04:54
what does that mean and he said well you

00:04:51 --> 00:04:55
know in order to test if the

00:04:53 --> 00:04:57
defibrillator was implanted properly

00:04:54 --> 00:04:59
what we need to do is induce a fatal

00:04:56 --> 00:05:02
heart rhythm and then see if the device

00:04:58 --> 00:05:04
can recognize that um that there's a

00:05:01 --> 00:05:07
fatal heart rhythm and then shock the

00:05:03 --> 00:05:10
patient back into a normal sinus rhythm

00:05:06 --> 00:05:12
um and so um I I asked him well how is

00:05:09 --> 00:05:13
that authenticated and the physician

00:05:11 --> 00:05:15
gave me this look he didn't really say

00:05:13 --> 00:05:16
anything but all I could think was

00:05:14 --> 00:05:20
omething churning in his mind saying

00:05:15 --> 00:05:21
authent what um so that led us down this

00:05:19 --> 00:05:23
path where we discovered we could

00:05:20 --> 00:05:25
actually generate our own Wireless

00:05:22 --> 00:05:28
ignals that would trigger this what is

00:05:24 --> 00:05:30
effectively a debugging command uh to

00:05:27 --> 00:05:31
wirelessly induce fatal heart rhythms um

00:05:29 --> 00:05:33
this has long since been fixed

00:05:30 --> 00:05:37
fortunately uh but at the time it was

00:05:32 --> 00:05:39
ort of shocking um but uh haaha but um

00:05:36 --> 00:05:42
so my view on wireless and medical

00:05:38 --> 00:05:45
devices that um so I'm from the Midwest

00:05:41 --> 00:05:47
oh question you said how do you do you

00:05:44 --> 00:05:50
inst the oh the question is how do

00:05:46 --> 00:05:52
you fix this um so many of these devices

00:05:49 --> 00:05:53
have a Lifetime on the of 5 to seven

00:05:51 --> 00:05:55
years before the battery runs out and

00:05:52 --> 00:05:57
then it's surgically explanted and

00:05:54 --> 00:05:58
replaced so most of these devices are

00:05:56 --> 00:06:00
off the market there are only a few

00:05:57 --> 00:06:01
people who have defibrillators more than

00:05:59 --> 00:06:03
10 years old old uh that's because there

00:06:01 --> 00:06:05
used to be some polonium based batteries

00:06:02 --> 00:06:06
nuclear powered batteries and those

00:06:04 --> 00:06:09
typically Outlast the patient but these

00:06:05 --> 00:06:13
devices don't last that long but

00:06:08 --> 00:06:15
uh the interesting thing uh uh about uh

00:06:12 --> 00:06:17
Wireless is that um you know it was used

00:06:15 --> 00:06:20
for specific reason to address a

00:06:16 --> 00:06:21
clinical risk um but now I often see it

00:06:19 --> 00:06:23
used sort of willy-nilly on devices more

00:06:21 --> 00:06:26
for the marketing side less for actually

00:06:22 --> 00:06:27
addressing a safety risk um but my mom's

00:06:25 --> 00:06:28
from the Midwest and she always used to

00:06:26 --> 00:06:30
put bacon on everything because she said

00:06:27 --> 00:06:33
it made everything taste better uh and I

00:06:29 --> 00:06:36
think Wireless is sometimes treated that

00:06:32 --> 00:06:37
way um but let me tell you a little bit

00:06:35 --> 00:06:38
um I'm going to skip through I'm not

00:06:36 --> 00:06:41
going to be able to teach you everything

00:06:37 --> 00:06:42
about um medical devices today but let

00:06:40 --> 00:06:44
me just tell you about how malware gets

00:06:41 --> 00:06:46
into medical devices you've probably

00:06:43 --> 00:06:47
read some things in the media uh and

00:06:45 --> 00:06:49
you're probably suffering from a little

00:06:46 --> 00:06:50
bit of availability bias because the

00:06:48 --> 00:06:52
media likes to talk about what they like

00:06:49 --> 00:06:54
to talk about rather than the things

00:06:51 --> 00:06:55
that actually happen um and so one of

00:06:53 --> 00:06:57
the interesting things is hospitals

00:06:54 --> 00:06:59
often get their malware from vendors

00:06:56 --> 00:07:01
themselves a common way as a vendor

00:06:58 --> 00:07:04
comes in with a USB stick is doing an

00:07:00 --> 00:07:05
update of say the Radiology software and

00:07:03 --> 00:07:06
accidentally brings in malware well

00:07:04 --> 00:07:08
guess what no firewall is going to

00:07:05 --> 00:07:11
protect you against that um another

00:07:07 --> 00:07:14
common mechanism uh is repair uh I

00:07:10 --> 00:07:16
recently met an engineer from a company

00:07:13 --> 00:07:18
uh that had conficker get onto their

00:07:15 --> 00:07:19
pharmaceutical compounder this is a

00:07:17 --> 00:07:22
device that makes custom liquid drugs

00:07:18 --> 00:07:24
for IV delivery um and he said well you

00:07:21 --> 00:07:26
know what what's in the in the published

00:07:23 --> 00:07:27
media is only half the story um what

00:07:25 --> 00:07:29
actually happened when the hospital

00:07:26 --> 00:07:32
reported that their pharmaceutical

00:07:28 --> 00:07:33
device uh got infected with malware what

00:07:31 --> 00:07:35
actually happened was when they brought

00:07:32 --> 00:07:36
it in for repair the malware was

00:07:34 --> 00:07:40
accidentally spread to all the other

00:07:36 --> 00:07:41
Compounders under repair um so it's it's

00:07:39 --> 00:07:43
really lwh hanging fruit right now in

00:07:40 --> 00:07:46
terms of what's going on I also had a a

00:07:42 --> 00:07:48
very um uh famous manufacturer who came

00:07:45 --> 00:07:49
to me saying they accidentally infected

00:07:47 --> 00:07:51
their medical devices on their product

00:07:48 --> 00:07:52
assembly line uh they didn't actually

00:07:50 --> 00:07:54
have a way to detect it but they got

00:07:51 --> 00:07:55
lucky because something just acted a

00:07:53 --> 00:07:57
little funny and they look a little more

00:07:54 --> 00:07:59
closely and they discover they

00:07:56 --> 00:08:01
accidentally infected their own devices

00:07:58 --> 00:08:04
um this company was less lucky uh this

00:08:01 --> 00:08:06
a ventilator um so ventilators are

00:08:03 --> 00:08:08
fairly common in hospitals and one day

00:08:05 --> 00:08:10
there was a recall and uh to address

00:08:07 --> 00:08:12
that recall they issued a software

00:08:09 --> 00:08:13
update um and so I went to their website

00:08:11 --> 00:08:15
you can see down there at the bottom it

00:08:13 --> 00:08:17
said click here for your update for your

00:08:14 --> 00:08:20
ventilator and I thought wow that's

00:08:16 --> 00:08:22
pretty Progressive pretty cool um so I

00:08:19 --> 00:08:24
clicked on the link um and this dialogue

00:08:21 --> 00:08:26
box popped up uh warning this website

00:08:23 --> 00:08:28
you're visiting appears to contain

00:08:25 --> 00:08:32
malware um who who recognizes this

00:08:28 --> 00:08:34
dialog box okay well the security people

00:08:31 --> 00:08:36
all right so for the non-security people

00:08:33 --> 00:08:38
this is a a service from Google called

00:08:35 --> 00:08:40
the Google safe web browsing service and

00:08:37 --> 00:08:43
what they do is they go off and spider

00:08:39 --> 00:08:45
the internet and identify what websites

00:08:42 --> 00:08:48
have been compromised and have been sort

00:08:44 --> 00:08:50
of duped into Distributing malware this

00:08:47 --> 00:08:52
medical device manufacturer was

00:08:49 --> 00:08:55
attaching this bonus piece of malware to

00:08:51 --> 00:08:56
the software update for ventilators um

00:08:54 --> 00:08:59
all I could Wonder at this point was how

00:08:55 --> 00:09:01
many biomedical Engineers clicked ignore

00:08:58 --> 00:09:03
because at the end of the day they need

00:09:00 --> 00:09:05
to run their hospital they need to see

00:09:02 --> 00:09:08
patients I'm going to guess most people

00:09:04 --> 00:09:09
clicked ignore um but that's sort of the

00:09:07 --> 00:09:11
the state-of-the-art in medical

00:09:08 --> 00:09:12
device security there's it's it's

00:09:10 --> 00:09:14
nothing too sophisticated we're not

00:09:11 --> 00:09:16
alking about nation state adversaries

00:09:13 --> 00:09:17
or even the the kid in the basement

00:09:15 --> 00:09:20
rying to hack into things this is

00:09:16 --> 00:09:23
Garden variety malware uh automated

00:09:19 --> 00:09:26
sometimes 10 or 15 years old uh getting

00:09:23 --> 00:09:28
in um I'm going to skip over a lot of

00:09:26 --> 00:09:29
history and just talk about something

00:09:27 --> 00:09:32
that happened in the last couple months

00:09:28 --> 00:09:34
uh one of my colleagues Billy Rios had

00:09:31 --> 00:09:37
spent uh over a year analyzing an

00:09:34 --> 00:09:39
infusion pump this is the device that uh

00:09:36 --> 00:09:41
puts drugs into you via a little IV into

00:09:38 --> 00:09:43
ne of your veins uh and he discovered

00:09:40 --> 00:09:45
there were some vulnerabilities nobody

00:09:42 --> 00:09:47
was hurt nobody was killed um but here's

00:09:45 --> 00:09:49
what he discovered this is how lwh

00:09:46 --> 00:09:52
anging the fruit is today um he

00:09:48 --> 00:09:54
discovered um uh that there was actually

00:09:51 --> 00:09:59
uh if you tell net to Port 23 you get a

00:09:53 --> 00:10:02
root shell okay so that is how bad it is

00:09:58 --> 00:10:03
um the uh uh this is paraphrasing but

00:10:01 --> 00:10:06
effectively the solution that was

00:10:02 --> 00:10:08
initially suggested was well you know

00:10:05 --> 00:10:11
hospitals should just use a secure

00:10:07 --> 00:10:12
network um so uh it it's uh and if

00:10:10 --> 00:10:16
you're not in the security field it's

00:10:11 --> 00:10:18
hard to appreciate the irony but um uh

00:10:15 --> 00:10:20
suffice to say FDA has issued not

00:10:17 --> 00:10:22
echnically a recall but effectively a

00:10:19 --> 00:10:25
recall they sent out a notice saying

00:10:21 --> 00:10:27
basically we strongly advise uh uh uh

00:10:24 --> 00:10:29
ospitals to discontinue use of this

00:10:26 --> 00:10:31
particular device because of the risks

00:10:28 --> 00:10:33
it present present to patients please

00:10:30 --> 00:10:36
use the competitor products instead um

00:10:33 --> 00:10:37
was effectively what they said but if

00:10:35 --> 00:10:39
you take this analogy and apply it to

00:10:36 --> 00:10:42
iot you know I'm sort of seeing

00:10:39 --> 00:10:43
computation added everywhere but

00:10:41 --> 00:10:45
sometimes it's sort of willy-nilly maybe

00:10:42 --> 00:10:48
just to make it look nice you add bacon

00:10:44 --> 00:10:50
everything um the question is does it

00:10:47 --> 00:10:51
make everything better um here's a

00:10:49 --> 00:10:53
really fun Twitter feed I encourage you

00:10:50 --> 00:10:55
to follow I just discovered it a couple

00:10:52 --> 00:10:57
weeks ago but um you know during the

00:10:54 --> 00:10:59
update process you won't be allowed to

00:10:56 --> 00:11:00
drive your car apparently on this Tesla

00:10:58 --> 00:11:02
but um

00:10:59 --> 00:11:04
uh uh there's lots of interesting things

00:11:01 --> 00:11:07
this is the cynical part of the

00:11:03 --> 00:11:08
talk um let let me tell you a little bit

00:11:06 --> 00:11:10
hough about where I think some of the

00:11:07 --> 00:11:12
risks are going to be in the future not

00:11:09 --> 00:11:14
necessarily today uh but what's coming

00:11:11 --> 00:11:16
down the line and and that's my concern

00:11:13 --> 00:11:18
about devices that make automated

00:11:15 --> 00:11:20
ecisions based upon what a sensor is

00:11:17 --> 00:11:23
telling you um a defibrillator is one

00:11:19 --> 00:11:26
such example um so my former postto

00:11:22 --> 00:11:27
Dennis um poting me to this news article

00:11:25 --> 00:11:29
where a gentleman's cell phone whenever

00:11:26 --> 00:11:30
his cell phone would ring his oven would

00:11:28 --> 00:11:32
turn on

00:11:29 --> 00:11:33
uh this is called electromagnetic

00:11:31 --> 00:11:36
interference or electromagnetic

00:11:33 --> 00:11:38
ompatibility that was accidental and so

00:11:35 --> 00:11:41
we asked the question well what happened

00:11:37 --> 00:11:44
if we would make our own transmitter um

00:11:40 --> 00:11:45
what kind of problems could we cause um

00:11:43 --> 00:11:47
well that's a lot easier to do when

00:11:45 --> 00:11:50
you're intentional so let me just give

00:11:46 --> 00:11:51
you a couple proofs of concept uh this

00:11:49 --> 00:11:53
a this is my laboratory it's

00:11:50 --> 00:11:55
completely silent all you hear is the

00:11:52 --> 00:11:58
ating and ventilation system which is

00:11:54 --> 00:12:00
completely secure um and on the left is

00:11:57 --> 00:12:02
a webcam we remove the housing and you

00:11:59 --> 00:12:03
see there's a microphone uh and that

00:12:01 --> 00:12:05
microphone is connected to that

00:12:02 --> 00:12:07
Macintosh on the left uh on the right

00:12:05 --> 00:12:09
you're going to see our software radio

00:12:06 --> 00:12:11
and we've created a custom transmitter

00:12:08 --> 00:12:13
and we're transmitting electromagnetic

00:12:10 --> 00:12:15
interference over the air and we're

00:12:13 --> 00:12:17
trying to trick the computer into

00:12:14 --> 00:12:20
hearing things that don't exist so in

00:12:16 --> 00:12:23
this room this is what you could

00:12:19 --> 00:12:26
hear oh sorry about that let me go back

00:12:22 --> 00:12:29
a little too loud um so uh this is what

00:12:25 --> 00:12:29
you could hear

00:12:30 --> 00:12:38
so we modulated music over the

00:12:34 --> 00:12:41
air so the the way that actually worked

00:12:37 --> 00:12:43
is there's a hidden assumption all iot

00:12:40 --> 00:12:44
designers make bits are these abstract

00:12:42 --> 00:12:47
hings but it turns out you implement

00:12:43 --> 00:12:49
hem using wires there's a tiny wire

00:12:46 --> 00:12:52
between the microphone and its amplifier

00:12:48 --> 00:12:54
that wire has an a resonant frequency so

00:12:51 --> 00:12:56
if you transmit a carrier wave at the

00:12:53 --> 00:12:58
resonant frequency of that wire and then

00:12:55 --> 00:13:00
you modulate some of your digital data

00:12:57 --> 00:13:02
on top of that uh and then if you happen

00:12:59 --> 00:13:04
to analyze the nonlinear properties of

00:13:01 --> 00:13:06
the amplification circuitry you can

00:13:03 --> 00:13:09
trick it into becoming uh an

00:13:05 --> 00:13:11
unintentional radio receiver um

00:13:08 --> 00:13:13
basically doing frequency uh Dem

00:13:10 --> 00:13:14
odulation and I can deliver chosen

00:13:12 --> 00:13:16
digital inputs to the microprocessor

00:13:13 --> 00:13:19
through the sensor um this completely

00:13:15 --> 00:13:21
back doors the system uh it's it's sort

00:13:18 --> 00:13:22
of like the old day of the webs where uh

00:13:20 --> 00:13:25
where you would just trust all user

00:13:21 --> 00:13:27
input um but but that's where we are um

00:13:24 --> 00:13:30
I see I'm is that overtime or running oh

00:13:26 --> 00:13:32
I'm running out of time um uh so tce to

00:13:29 --> 00:13:34
say we've done this on pacemakers too um

00:13:31 --> 00:13:37
a fun little trick you can do is um if

00:13:33 --> 00:13:39
you send a particular pulse at a rate

00:13:36 --> 00:13:42
that looks like a normal cardiac Rhythm

00:13:38 --> 00:13:44
uh in this case uh one Hertz so 60 beats

00:13:41 --> 00:13:46
per minute uh we've been able to trick

00:13:43 --> 00:13:48
pacemakers into effectively turning off

00:13:45 --> 00:13:49
uh because they say oh the heart is

00:13:47 --> 00:13:51
beating normally the sensor says it's

00:13:48 --> 00:13:54
beating normally but in fact it's our

00:13:50 --> 00:13:57
adio frequency interference uh and uh

00:13:53 --> 00:14:00
it just puts the um the device into a

00:13:56 --> 00:14:01
sort of a a sleep mode um fortunately

00:13:59 --> 00:14:02
ou don't need to worry about that

00:14:00 --> 00:14:05
particular attack in practice because

00:14:01 --> 00:14:07
the human body absorbs most of the RF uh

00:14:04 --> 00:14:09
but it's more conceptual so this didn't

00:14:06 --> 00:14:11
worry me too much until I started to see

00:14:08 --> 00:14:13
papers like the following uh there was a

00:14:10 --> 00:14:15
recent paper at unik security uh where

00:14:13 --> 00:14:17
some researchers discovered by writing

00:14:14 --> 00:14:19
to memory at particular rates you could

00:14:16 --> 00:14:21
cause the memory bus to act as a

00:14:18 --> 00:14:23
transmitter and you can transmit

00:14:20 --> 00:14:24
arbitrary waveforms to nearby devices so

00:14:22 --> 00:14:26
if you're were thinking well nobody

00:14:23 --> 00:14:27
would put a Transmitter near me well

00:14:25 --> 00:14:28
guess what if you have a computer you've

00:14:26 --> 00:14:32
got transmitters that are completely

00:14:27 --> 00:14:35
programmable um uh another colleague uh

00:14:31 --> 00:14:37
ad worked on um uh influencing sensors

00:14:34 --> 00:14:40
in the analog realm um he discovered if

00:14:36 --> 00:14:42
you send acoustic tones uh to a

00:14:39 --> 00:14:44
particular drone you can cause the Drone

00:14:41 --> 00:14:46
to fall out of the sky uh because the

00:14:43 --> 00:14:48
mems accelerometer on the inside of the

00:14:45 --> 00:14:51
chip has a resonant frequency and if you

00:14:47 --> 00:14:54
hit it at 8 khz it just tricks that

00:14:50 --> 00:14:55
little Mass just perfectly to confuse

00:14:53 --> 00:14:58
the software on the inside and it loses

00:14:54 --> 00:15:01
complete control um there was another

00:14:57 --> 00:15:03
fun paper uh recently called rammer uh

00:15:00 --> 00:15:06
rammer uh this is all the code you

00:15:02 --> 00:15:09
need to write to cause this particular

00:15:05 --> 00:15:12
flaw um if you uh read um from memory at

00:15:09 --> 00:15:14
a particular rate while flushing the

00:15:11 --> 00:15:16
cache you can cause these transient

00:15:13 --> 00:15:18
failures where your memory loses charge

00:15:16 --> 00:15:21
and you can actually cause chosen

00:15:17 --> 00:15:23
corrupted bits in memory um this was

00:15:20 --> 00:15:25
originally a reliability problem uh but

00:15:22 --> 00:15:27
hen some Google researchers discovered

00:15:24 --> 00:15:29
how to turn this into a security problem

00:15:26 --> 00:15:32
uh for instance you could uh in theory

00:15:28 --> 00:15:34
use this to get supervisor privileges by

00:15:31 --> 00:15:36
changing arbitrary values in memory so

00:15:33 --> 00:15:39
the lesson on sensors is basically trust

00:15:35 --> 00:15:41
what verify um a lot of iot devices are

00:15:38 --> 00:15:43
taking in sensor data uh and they're

00:15:40 --> 00:15:44
just acting on it blindly but you need a

00:15:42 --> 00:15:47
way to verify that what you're sensing

00:15:44 --> 00:15:50
is actually a real physical phenomena so

00:15:46 --> 00:15:53
um I'm I'm completely out of time but

00:15:49 --> 00:15:56
I'm just briefly say uh on the company

00:15:52 --> 00:15:58
side um one of my students discovered

00:15:55 --> 00:15:59
that um uh he could actually tell what

00:15:57 --> 00:16:01
website I'm browsing by looking at my

00:15:59 --> 00:16:03
power consumption from the power outlet

00:16:00 --> 00:16:04
uh he had a hard time publishing that so

00:16:02 --> 00:16:07
I told him why don't you figure out how

00:16:03 --> 00:16:09
to um detect malware instead uh long

00:16:06 --> 00:16:11
story short three years later uh it's

00:16:08 --> 00:16:13
now a product uh so this particular

00:16:11 --> 00:16:15
product is designed for ruggedized

00:16:12 --> 00:16:17
environments like hospitals so you can

00:16:14 --> 00:16:19
bleed on this designed to be bled on

00:16:16 --> 00:16:21
actually and so the biom meds can uh

00:16:18 --> 00:16:23
clean off the blood whatever you want to

00:16:20 --> 00:16:25
protect you just plug it in uh and it

00:16:22 --> 00:16:28
uses machine learning in order to look

00:16:24 --> 00:16:29
for anomalous activity for instance

00:16:27 --> 00:16:32
Parts wearing out too early as well as

00:16:28 --> 00:16:33
malware um and all I wanted to say I'm

00:16:31 --> 00:16:35
not going to talk too much about the

00:16:32 --> 00:16:36
product or how it works on the inside

00:16:34 --> 00:16:38
but I wanted to just quickly talk about

00:16:35 --> 00:16:40
he team because I think we have a sort

00:16:37 --> 00:16:42
of unique story um our team was built

00:16:39 --> 00:16:44
sort of from this iot house of cards my

00:16:41 --> 00:16:46
house collapsed uh about two or three

00:16:43 --> 00:16:48
years ago um and so what I discovered

00:16:46 --> 00:16:49
was the best way to find a team for a

00:16:47 --> 00:16:51
startup is you get a bunch of people to

00:16:48 --> 00:16:52
help you out in crisis and the people

00:16:50 --> 00:16:55
who work well together they're going to

00:16:51 --> 00:16:58
stick around um so uh what we actually

00:16:54 --> 00:17:00
did was completely rebuilt the house um

00:16:57 --> 00:17:02
so you can see our first office was the

00:16:59 --> 00:17:06
garage with outdoor Plumbing um as we

00:17:01 --> 00:17:07
re rebuilding the house uh our CEO uh

00:17:05 --> 00:17:09
was actually uh his job at the time was

00:17:06 --> 00:17:12
implanting self-powered computers in all

00:17:08 --> 00:17:13
my concrete walls um and so they were

00:17:11 --> 00:17:15
having a lot of fun in this unair

00:17:12 --> 00:17:17
conditioned space and uh they they

00:17:14 --> 00:17:18
worked so well together they hadn't

00:17:16 --> 00:17:20
really thought about doing a startup but

00:17:17 --> 00:17:21
hey they discovered that they work so

00:17:19 --> 00:17:23
well together at dealing with these

00:17:20 --> 00:17:25
problems and getting people contractors

00:17:22 --> 00:17:26
to do things that they started a company

00:17:24 --> 00:17:29
and we've recently started expanding and

00:17:25 --> 00:17:31
hiring uh so here we have our our

00:17:28 --> 00:17:33
operation manager an and she's uh well

00:17:30 --> 00:17:36
she's doing log analysis at the moment

00:17:32 --> 00:17:39
in my backyard um and uh actually how I

00:17:35 --> 00:17:40
first met Dennis was um uh after that I

00:17:38 --> 00:17:43
said I needed to put manure all over

00:17:39 --> 00:17:45
my yard and I convinced him uh uh to to

00:17:42 --> 00:17:47
shovel all that so here we are getting

00:17:44 --> 00:17:49
stuff done uh in in my yard but

00:17:46 --> 00:17:51
we we work well together uh and we're

00:17:48 --> 00:17:53
having a lot of fun building products

00:17:50 --> 00:17:55
and and protecting uh systems that are

00:17:52 --> 00:17:58
very difficult to protect but there's a

00:17:54 --> 00:18:00
lot of low hanging fruit uh in hospitals

00:17:57 --> 00:18:02
and high uh High consequence devices but

00:17:59 --> 00:18:04
I see them over time I'll end there uh

00:18:01 --> 00:18:06
and we'll take questions at the

00:18:03 --> 00:18:09
panel okay

00:18:05 --> 00:18:14
thanks all I would I would like my pce

00:18:08 --> 00:18:14
my defibrillator back though see

<!-- YOUTUBE_TRANSCRIPT_END -->
