---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "HVx9bwiMWGQ"
title: "MIT-AVT: Data Collection Device (for Large-Scale Semi-Autonomous Driving)"
video_url: "https://www.youtube.com/watch?v=HVx9bwiMWGQ"
thumbnail_url: "https://i.ytimg.com/vi/HVx9bwiMWGQ/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=HVx9bwiMWGQ"
channel: "Lex Fridman"
channel_name: "Lex Fridman"
channel_id: "UCSHZKyawb77ixDdsGog4iWA"
uploader_id: "@lexfridman"
published_at: "2018-04-09T14:39:38.000Z"
upload_date: "2018-04-09"
duration_seconds: 943
duration_human: "15:43"
view_count: 19028
like_count: 531
has_subtitle: true
language: "en"
availability: "public"
fetched_at: "2026-04-23T17:18:15.493Z"
---

# MIT-AVT: Data Collection Device (for Large-Scale Semi-Autonomous Driving)

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=HVx9bwiMWGQ
- video_id: HVx9bwiMWGQ
- channel_name: Lex Fridman
- channel_id: UCSHZKyawb77ixDdsGog4iWA
- uploader_id: @lexfridman
- uploader_url: https://www.youtube.com/@lexfridman
- published_at: 2018-04-09T14:39:38.000Z
- upload_date: 2018-04-09
- duration: 15:43
- view_count: 19028
- like_count: 531
- has_subtitle: true
- language: en
- availability: public
- tags: mit, driving, data collection, autonomous vehicle, self-driving car, big data, c920, rasberry pi, banana pi, research
- categories: Science & Technology

## Description

MIT-AVT is a large-scale semi-autonomous driving study aimed at understanding how human-AI interaction in driving can be safe and enjoyable. The emphasis is on objective, data-driven analysis through large-scale real-world driving data collection and deep learning based parsing of that data.

Link: https://hcai.mit.edu/avt
Paper: https://arxiv.org/abs/1711.06976

CONNECT:
- AI Podcast: https://lexfridman.com/ai/
- Subscribe to this YouTube channel
- LinkedIn: https://www.linkedin.com/in/lexfridman
- Twitter: https://twitter.com/lexfridman
- Facebook: https://www.facebook.com/lexfridman
- Instagram: https://www.instagram.com/lexfridman
- Slack: https://deep-mit-slack.herokuapp.com

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:06
the MIT autonomous vehicle technology

00:00:02 --> 00:00:07
study is all about collecting large

00:00:05 --> 00:00:11
amounts of naturalistic driving data

00:00:06 --> 00:00:14
behind that data collection is this box

00:00:10 --> 00:00:16
right here that Dan is term writer a Dan

00:00:13 --> 00:00:19
is behind a lot of the hardware work we

00:00:15 --> 00:00:21
do embedded systems and Michael is

00:00:18 --> 00:00:24
behind a lot of the software the data

00:00:20 --> 00:00:27
pipeline as well as just offloading the

00:00:23 --> 00:00:29
data from the device would like to tell

00:00:26 --> 00:00:31
you some of the details behind rider and

00:00:28 --> 00:00:33
behind the sensors now we have three

00:00:30 --> 00:00:35
cameras in the car and the wires are

00:00:32 --> 00:00:38
running back into the trunk and that's

00:00:34 --> 00:00:39
where the rider is sitting there's a lot

00:00:37 --> 00:00:42
of design specifications to make this

00:00:38 --> 00:00:45
ystem work month after month reliably

00:00:41 --> 00:00:47
across multiple vehicles across multiple

00:00:44 --> 00:00:49
weather conditions and so on at the end

00:00:46 --> 00:00:52
of the day with multiple sensor streams

00:00:48 --> 00:00:55
we have the three cameras coming in we

00:00:51 --> 00:00:57
have IMU GPS and all of the raw canned

00:00:54 --> 00:00:59
messages coming from the vehicle itself

00:00:56 --> 00:01:03
and all of that has to be collected

00:00:58 --> 00:01:05
reliably synchronized and post processed

00:01:02 --> 00:01:07
once we offload the data first we have a

00:01:04 --> 00:01:09
single board computer here running a

00:01:06 --> 00:01:11
custom version of Linux that we wrote

00:01:08 --> 00:01:13
specifically for this application this

00:01:10 --> 00:01:16
ingle board computer integrates all of

00:01:12 --> 00:01:19
the cameras all the sensors GPS can IMU

00:01:15 --> 00:01:21
and offloads it all on to the

00:01:18 --> 00:01:24
solid-state hard drive that we have on

00:01:20 --> 00:01:26
board there are some extra components

00:01:23 --> 00:01:27
here for cellular communication as well

00:01:25 --> 00:01:29
as power management throughout the

00:01:26 --> 00:01:31
device here we have our single board

00:01:28 --> 00:01:33
computer as well as sensor integration

00:01:30 --> 00:01:34
and our power system this is our

00:01:32 --> 00:01:36
solid-state drive that connects directly

00:01:33 --> 00:01:38
to our single board computer on our

00:01:35 --> 00:01:41
single board computer we have a sensory

00:01:37 --> 00:01:42
integration board on top here you'll be

00:01:40 --> 00:01:44
able to see our real-time clock as well

00:01:41 --> 00:01:46
as its battery backup and can

00:01:43 --> 00:01:49
transceiver on the reverse side of this

00:01:45 --> 00:01:51
board we have our GPS receiver an IMU

00:01:48 --> 00:01:53
this is our can't control power board

00:01:50 --> 00:01:55
which monitors can throughout the car

00:01:52 --> 00:01:57
and determines whether or not the system

00:01:54 --> 00:01:58
should be on or off when the system is

00:01:56 --> 00:02:01
on this sends power through a buck

00:01:57 --> 00:02:03
converter to reduce the 12 volts from

00:02:00 --> 00:02:05
the vehicle down to 5 volts to operate

00:02:02 --> 00:02:08
the single board computer we also have a

00:02:04 --> 00:02:11
4G wireless connection on board to

00:02:07 --> 00:02:14
monitor the health of rider and

00:02:10 --> 00:02:15
etermine things like free capacity left

00:02:13 --> 00:02:17
on our dry

00:02:14 --> 00:02:20
as well as temperature and power usage

00:02:16 --> 00:02:25
information the cameras connect to Ryder

00:02:19 --> 00:02:27
through this USB hub right here so we

00:02:24 --> 00:02:28
needed the box to do at least three

00:02:26 --> 00:02:32
things one was record from at least

00:02:27 --> 00:02:34
hree cameras record can vehicle

00:02:31 --> 00:02:36
telemetry data and then lastly be able

00:02:33 --> 00:02:39
to store all this data onboard for a

00:02:35 --> 00:02:40
long period of time such that people

00:02:38 --> 00:02:43
could drive around for months without

00:02:39 --> 00:02:45
having us to offload the data from their

00:02:42 --> 00:02:49
vehicles and so when we're talking about

00:02:44 --> 00:02:52
hundreds of thousands of miles of worth

00:02:48 --> 00:02:55
e data so for about every hundred

00:02:51 --> 00:03:00
thousand miles uncompressed that's about

00:02:54 --> 00:03:02
a hundred petabytes of video data so one

00:02:59 --> 00:03:04
of the key other requirements was how to

00:03:01 --> 00:03:07
store all this data both on the device

00:03:03 --> 00:03:09
and how to be able to then offload us

00:03:06 --> 00:03:12
uccessfully onto thousands of machines

00:03:08 --> 00:03:13
to be then processed with the computer

00:03:11 --> 00:03:15
vision with a deep learning algorithms

00:03:12 --> 00:03:17
that we're using and one of the

00:03:14 --> 00:03:19
ssential elements for that was to do

00:03:16 --> 00:03:21
compression onboard so these are

00:03:18 --> 00:03:23
Logitech c920 webcam

00:03:20 --> 00:03:26
they can do up to 1080p at 30 frames a

00:03:22 --> 00:03:28
second the major reason why we went with

00:03:25 --> 00:03:31
ese is because they do onboard h.264

00:03:27 --> 00:03:33
compression of the video so that allows

00:03:30 --> 00:03:35
us to offload all the processing from

00:03:33 --> 00:03:38
our single board computer onto these

00:03:34 --> 00:03:41
individual cameras allowing us to use a

00:03:37 --> 00:03:43
very slim pared-down

00:03:40 --> 00:03:46
lightweight single board computer to run

00:03:42 --> 00:03:48
all of these sensors this is the

00:03:45 --> 00:03:50
original Logitech c920 that you would

00:03:47 --> 00:03:53
buy at a store these are the two same

00:03:49 --> 00:03:55
Logitech c920 s although they were put

00:03:52 --> 00:03:57
into a custom-made camera case just for

00:03:54 --> 00:04:00
this application what this allows us to

00:03:56 --> 00:04:02
do is at our own C s type lenses to

00:03:59 --> 00:04:03
enable us to have a zoom lens as well as

00:04:01 --> 00:04:07
a fisheye lens from within the car

00:04:02 --> 00:04:10
allowing us a greater range of field of

00:04:06 --> 00:04:13
views inside the vehicle so this is the

00:04:09 --> 00:04:15
fisheye lens this is the zoom lens and

00:04:12 --> 00:04:18
the CS type there's also C type those

00:04:14 --> 00:04:20
are types of standard lenses that are

00:04:17 --> 00:04:22
connect to these types of cameras often

00:04:19 --> 00:04:25
to the industrial cameras that are often

00:04:21 --> 00:04:27
used for our Thomas vehicle applications

00:04:24 --> 00:04:28
we tested these cameras to see what

00:04:26 --> 00:04:29
would happen to them if placed inside of

00:04:27 --> 00:04:32
a

00:04:28 --> 00:04:33
hot car and it's um on a summer day we

00:04:31 --> 00:04:35
wanted to see what these cameras still

00:04:32 --> 00:04:37
be able to hold up to this to the heat

00:04:34 --> 00:04:40
in the summer and still function as

00:04:36 --> 00:04:45
needed we put these cameras in a toaster

00:04:39 --> 00:04:47
a scientific toaster what was the

00:04:44 --> 00:04:50
temperature that went up to we cycled

00:04:46 --> 00:04:53
these cameras between 58 and 75 degrees

00:04:49 --> 00:04:56
Celsius which is about the maximum of a

00:04:52 --> 00:04:58
hundred and fifty degree Fahrenheit max

00:04:55 --> 00:05:02
temperature that a car would get in in

00:04:57 --> 00:05:04
the summer we also cranked it up to 127

00:05:01 --> 00:05:06
degrees Celsius just to see what would

00:05:03 --> 00:05:09
happen to these cameras after prolonged

00:05:05 --> 00:05:11
long-term high heat in fact these

00:05:08 --> 00:05:15
cameras continued to work perfectly fine

00:05:10 --> 00:05:17
after that creating a system that would

00:05:14 --> 00:05:19
intelligently and autonomously turn off

00:05:16 --> 00:05:22
and on to start and end recording was

00:05:18 --> 00:05:23
also a key aspect to this device since

00:05:21 --> 00:05:25
people were just going to be driving

00:05:22 --> 00:05:26
their normal cars we couldn't rely on

00:05:24 --> 00:05:29
them necessarily to start and end

00:05:25 --> 00:05:31
recording so this device rider

00:05:28 --> 00:05:33
intelligently figures out when the car

00:05:30 --> 00:05:38
is running and when it's off to start

00:05:32 --> 00:05:40
and stop recording automatically so how

00:05:37 --> 00:05:44
does writers specifically know when to

00:05:39 --> 00:05:46
turn on so we use can to determine when

00:05:43 --> 00:05:48
the system should turn off and on when

00:05:45 --> 00:05:50
can is active the car is running and we

00:05:47 --> 00:05:52
should turn the system on when can is

00:05:49 --> 00:05:54
inactive we should turn the system off

00:05:51 --> 00:05:56
and end recording this also gives us the

00:05:53 --> 00:05:58
ability to trigger on certain can

00:05:55 --> 00:06:00
messages so for instance if we want to

00:05:57 --> 00:06:02
start recording as soon as they approach

00:06:00 --> 00:06:05
the car and unlock the door we can do

00:06:01 --> 00:06:06
that or if they turn the car on or they

00:06:04 --> 00:06:09
put it into drive or so on

00:06:05 --> 00:06:11
the cost of the car that the system

00:06:08 --> 00:06:13
resides in is about a thousand times

00:06:10 --> 00:06:16
more than the system itself so these a

00:06:12 --> 00:06:17
hundred thousand plus dollar cars so

00:06:15 --> 00:06:18
we'll have to make sure that we design

00:06:16 --> 00:06:21
the system we'll run the wires in such a

00:06:17 --> 00:06:23
way that doesn't do any damage to the

00:06:20 --> 00:06:25
vehicles what kind of things fail when

00:06:22 --> 00:06:27
they fail the biggest issue we've had

00:06:24 --> 00:06:30
with the system our camera cables

00:06:26 --> 00:06:32
becoming unplugged so when a camera

00:06:29 --> 00:06:36
cable becomes unplugged the system will

00:06:31 --> 00:06:37
try to restart that subsystem multiple

00:06:35 --> 00:06:39
times and if it's unable to it

00:06:36 --> 00:06:41
completely shuts off recording and as

00:06:38 --> 00:06:43
long as that cable is still unplugged

00:06:40 --> 00:06:45
writer will not start up the next

00:06:42 --> 00:06:47
so one issue that we've seen is that

00:06:44 --> 00:06:49
cables becoming a plugged causes us to

00:06:46 --> 00:06:51
lose the potential to record some data

00:06:48 --> 00:06:53
nd that was one of the requirements of

00:06:50 --> 00:06:55
the system from the very beginning is

00:06:52 --> 00:06:58
that all the video streams are always

00:06:54 --> 00:07:00
recorded perfectly and synchronized now

00:06:57 --> 00:07:03
if any of the systems are failing to be

00:06:59 --> 00:07:04
recording from the sensors that we try

00:07:02 --> 00:07:07
again restart the system restart the

00:07:03 --> 00:07:10
system and if it's still not working it

00:07:06 --> 00:07:11
should shut down so the video in order

00:07:09 --> 00:07:13
to understand what drivers are doing

00:07:10 --> 00:07:15
these systems the video is essential so

00:07:12 --> 00:07:18
if one of the cameras is not working

00:07:14 --> 00:07:22
that means the system that's not working

00:07:17 --> 00:07:26
as a whole the other crucial component

00:07:21 --> 00:07:29
of having a data collection system

00:07:25 --> 00:07:30
that's taking the multiple streams is

00:07:28 --> 00:07:33
that those streams have to be

00:07:29 --> 00:07:36
synchronized perfectly synchronization

00:07:32 --> 00:07:39
was the highest priority from the very

00:07:35 --> 00:07:40
beginning of writers design we have a

00:07:38 --> 00:07:42
real-time clock

00:07:39 --> 00:07:43
onboard writer that allows us down to

00:07:41 --> 00:07:45
two parts per million of accuracy and

00:07:42 --> 00:07:47
time stamping this means over the course

00:07:44 --> 00:07:50
of a one and a half hour drive our time

00:07:46 --> 00:07:53
stamps issue to each of the different

00:07:49 --> 00:07:57
subsystems may drift up to seven or so

00:07:52 --> 00:07:59
milliseconds relatively this is

00:07:56 --> 00:08:02
extremely small compared to most clocks

00:07:58 --> 00:08:05
on computers today and once the data is

00:08:01 --> 00:08:07
offloaded the very first thing we do is

00:08:04 --> 00:08:10
make sure that the time stamping that

00:08:06 --> 00:08:12
he data was time stamp correctly so

00:08:09 --> 00:08:14
that we can synchronize it and the very

00:08:11 --> 00:08:16
first thing is part of the data pipeline

00:08:13 --> 00:08:19
would do is synchronize the data that

00:08:15 --> 00:08:20
means using the time stamp that came

00:08:18 --> 00:08:24
from the real-time clock that was

00:08:19 --> 00:08:27
signed to every single piece of sensor

00:08:23 --> 00:08:30
data using that time stamp to align the

00:08:26 --> 00:08:32
data together now for video that means

00:08:29 --> 00:08:35
30 frames a second perfectly aligned

00:08:31 --> 00:08:38
with other GPS signals and so on there

00:08:34 --> 00:08:40
are some other sensors like I am you and

00:08:37 --> 00:08:42
the can messages coming from the car

00:08:39 --> 00:08:44
that come much more frequently than 30

00:08:41 --> 00:08:46
Hertz 30 frames a second so we have a

00:08:43 --> 00:08:48
different synchronization scheme there

00:08:45 --> 00:08:50
but overall synchronization from the

00:08:47 --> 00:08:52
very beginning of the design of the

00:08:49 --> 00:08:54
hardware to the very end of the design

00:08:51 --> 00:08:56
of the software pipeline is crucial

00:08:53 --> 00:08:58
because we want to be able to analyze

00:08:55 --> 00:08:59
what people are doing in these semi

00:08:57 --> 00:09:01
autonomous vehicles how they're

00:08:58 --> 00:09:03
interacting with the technology and that

00:09:00 --> 00:09:05
means using data that comes from the

00:09:02 --> 00:09:08
face camera the body camera the forward

00:09:04 --> 00:09:10
view synchronized together with a GPS

00:09:07 --> 00:09:14
that I'm you and all the messages coming

00:09:09 --> 00:09:16
from the vehicle telemetry from camp the

00:09:13 --> 00:09:19
video stream compression which is a very

00:09:15 --> 00:09:21
much CPU or GPU intensive operations

00:09:18 --> 00:09:25
performed onboard the camera there are

00:09:20 --> 00:09:27
other CPU intensive operation performed

00:09:24 --> 00:09:30
on Ryder like the sense of fusion for

00:09:26 --> 00:09:32
IMU but for the most part there's

00:09:29 --> 00:09:34
ufficient CPU cycles left for the

00:09:31 --> 00:09:36
actual data collection to not have any

00:09:33 --> 00:09:39
skips or drifts in the census stream

00:09:35 --> 00:09:43
collection one of the questions we get

00:09:38 --> 00:09:46
is how do we get the data from this box

00:09:42 --> 00:09:49
to our computers then to the cluster

00:09:45 --> 00:09:51
that's doing the compute so when we

00:09:48 --> 00:09:54
receive a hard drive from one of these

00:09:50 --> 00:09:55
Ryder boxes that we're swapping we

00:09:53 --> 00:09:57
connect the hard drive locally to our

00:09:54 --> 00:09:58
computers and then we do a remote copy

00:09:56 --> 00:10:00
to a server that contains all of our

00:09:57 --> 00:10:02
data we then check the data for

00:09:59 --> 00:10:04
consistency and perform any fixes and

00:10:01 --> 00:10:07
the raw data in preparation for a

00:10:03 --> 00:10:10
synchronization operation so we're not

00:10:06 --> 00:10:13
doing any remote offloading of data so

00:10:09 --> 00:10:15
the data lives on Ryder until the

00:10:12 --> 00:10:17
subjects the drivers the owners of the

00:10:14 --> 00:10:19
car come back to us and offload the data

00:10:16 --> 00:10:21
so we take the hard drive swap it out

00:10:18 --> 00:10:24
and aweful the data from the hard drive

00:10:20 --> 00:10:27
can you tell me this the journey that a

00:10:23 --> 00:10:32
pixel takes on its way from the camera

00:10:26 --> 00:10:35
to our cluster well first the camera

00:10:31 --> 00:10:37
records the raw image data based on

00:10:34 --> 00:10:40
these settings that we've configured

00:10:36 --> 00:10:42
from the Ryder box and that raw image

00:10:39 --> 00:10:45
data is compressed on the camera itself

00:10:41 --> 00:10:48
into an h.264 come format and then

00:10:44 --> 00:10:50
transmitted over the USB wire to the

00:10:47 --> 00:10:53
single board computer on the Ryder box

00:10:49 --> 00:10:55
then it's recorded on to the solid-state

00:10:52 --> 00:10:57
drive in a video file where it will stay

00:10:54 --> 00:11:01
until we do an offload in the course of

00:10:57 --> 00:11:04
about six months for rnds subjects and

00:11:00 --> 00:11:07
in one month for 50 subjects after that

00:11:03 --> 00:11:10
it is connected to a local computer

00:11:06 --> 00:11:13
synchronized within a remote server

00:11:09 --> 00:11:15
and is then processed with initial

00:11:12 --> 00:11:18
cleaning algorithms in order to remove

00:11:14 --> 00:11:20
any corrupt data or to fix any subject

00:11:17 --> 00:11:24
data in the configuration files for that

00:11:19 --> 00:11:25
particular trip after the initial

00:11:23 --> 00:11:28
cleaning is taken care of it is

00:11:24 --> 00:11:31
ynchronized at 30 frames per second and

00:11:27 --> 00:11:33
can then be used for different detection

00:11:30 --> 00:11:36
algorithms or manual annotation so the

00:11:32 --> 00:11:38
important hard work behind the magic

00:11:35 --> 00:11:41
that deep learning computer vision

00:11:37 --> 00:11:43
unlocks is the synchronization the

00:11:40 --> 00:11:46
cleaning of the messy data making sure

00:11:42 --> 00:11:50
we get anything that's at all weird in

00:11:45 --> 00:11:53
any way in the in the data out so that

00:11:49 --> 00:11:56
the end of the pipeline we have a

00:11:52 --> 00:11:57
clean data set of multiple sensor

00:11:55 --> 00:12:00
streams perfectly synchronized that we

00:11:56 --> 00:12:04
can then use for both analysis and for

00:11:59 --> 00:12:06
annotation so that we can improve the

00:12:03 --> 00:12:10
neural network models used for the

00:12:05 --> 00:12:12
various detection tasks so writers done

00:12:09 --> 00:12:14
an amazing job over 30 vehicles of

00:12:11 --> 00:12:17
collecting hundreds of thousands of

00:12:13 --> 00:12:19
miles worth of data billions of video

00:12:16 --> 00:12:22
frames so we're talking about an

00:12:18 --> 00:12:25
incredible amount of data all compressed

00:12:21 --> 00:12:29
with h.264 that's close to 300 terabytes

00:12:24 --> 00:12:32
worth of data but of course you can

00:12:28 --> 00:12:35
always improve so so what our next steps

00:12:31 --> 00:12:37
one huge improvement for writer would be

00:12:34 --> 00:12:39
transitioning to another single board

00:12:36 --> 00:12:41
computer in particular a Jetson tx2

00:12:38 --> 00:12:43
there's a lot more capability for added

00:12:40 --> 00:12:45
sensors as well as much more compute

00:12:42 --> 00:12:47
power and even the possibility for

00:12:44 --> 00:12:49
developing some real-time systems with a

00:12:46 --> 00:12:50
Jetson one of the critical things when

00:12:48 --> 00:12:53
you're collecting huge amounts of data

00:12:49 --> 00:12:54
nd driving is you realize that most of

00:12:52 --> 00:12:56
driving is quite boring nothing

00:12:53 --> 00:12:58
interesting in terms of understanding

00:12:55 --> 00:13:01
driver behavior or training computer

00:12:57 --> 00:13:04
vision models for edge cases and so on

00:13:00 --> 00:13:07
othing interesting happens so one of

00:13:03 --> 00:13:09
the future steps we're taking is based

00:13:06 --> 00:13:12
on the thing we found in the data so far

00:13:08 --> 00:13:14
we know which parts are interesting

00:13:11 --> 00:13:16
which are not and so when a design on

00:13:13 --> 00:13:18
board algorithms that are processing in

00:13:15 --> 00:13:20
real time that video data

00:13:17 --> 00:13:22
Herman is this the kind of data I want

00:13:19 --> 00:13:24
o keep it this time and if not throw it

00:13:21 --> 00:13:26
out that means we can collect more

00:13:23 --> 00:13:28
fficiently just the bits that are

00:13:25 --> 00:13:30
interesting for edge case neural network

00:13:27 --> 00:13:34
model training or for understanding

00:13:30 --> 00:13:36
human behavior now this is a totally

00:13:33 --> 00:13:38
unknown open area because really we

00:13:35 --> 00:13:40
don't understand what people do and send

00:13:37 --> 00:13:42
me a time with vehicles when the car is

00:13:39 --> 00:13:44
driving itself and the human is driving

00:13:41 --> 00:13:46
itself so the initial stages of the

00:13:43 --> 00:13:49
study were to keep all the data so we

00:13:45 --> 00:13:51
can do the analysis to analyze the body

00:13:48 --> 00:13:54
pose glance allocation activity

00:13:50 --> 00:13:57
smartphone usage all the various Sun

00:13:53 --> 00:13:59
decelerations autopilot usage where it's

00:13:56 --> 00:14:02
used how it's used geographic weather

00:13:58 --> 00:14:03
night so on but as we start to

00:14:01 --> 00:14:06
understand where the fundamental

00:14:02 --> 00:14:07
insights come from we can start to be

00:14:05 --> 00:14:09
more and more selective about which

00:14:06 --> 00:14:12
epochs of data we want to be collecting

00:14:08 --> 00:14:13
now that requires real time processing

00:14:11 --> 00:14:16
of the data and as Dan said that's where

00:14:12 --> 00:14:19
the justin tx2 the power that the justin

00:14:15 --> 00:14:22
takes to brings is becomes more and more

00:14:18 --> 00:14:24
useful now all of this work is part of

00:14:21 --> 00:14:26
the MIT autonomous vehicle technology

00:14:23 --> 00:14:28
study we've collected over three hundred

00:14:25 --> 00:14:31
twenty thousand miles so far and

00:14:27 --> 00:14:32
collecting five hundred to a thousand

00:14:30 --> 00:14:35
miles every day so we're always growing

00:14:31 --> 00:14:39
adding new vehicles we're working at

00:14:34 --> 00:14:43
adding a Tesla Model 3 a Cadillac ct-6

00:14:38 --> 00:14:45
super cruise system and others one of

00:14:42 --> 00:14:47
the driving principles behind our work

00:14:44 --> 00:14:50
is that the kind of data collection we

00:14:46 --> 00:14:52
need to design safe semi autonomous and

00:14:49 --> 00:14:54
autonomous vehicles is that we need to

00:14:51 --> 00:14:57
record not just the forward roadway or

00:14:53 --> 00:14:59
any kind of sensor collection on the

00:14:56 --> 00:15:01
xternal environment we need to have

00:14:58 --> 00:15:03
rich sensor information about the

00:15:00 --> 00:15:05
internal environment what the driver is

00:15:02 --> 00:15:09
doing everything about their face the

00:15:04 --> 00:15:11
glance all the cognitive load and body

00:15:08 --> 00:15:15
pose everything about their activity we

00:15:10 --> 00:15:18
truly believe that autonomy autonomous

00:15:14 --> 00:15:20
vehicles require an understanding of how

00:15:17 --> 00:15:22
human supervisors of those systems

00:15:19 --> 00:15:25
behave how we can keep them attentive

00:15:21 --> 00:15:27
keep their glance on the road keep them

00:15:24 --> 00:15:29
as effective efficient supervisors of

00:15:26 --> 00:15:29
those systems

00:15:35 --> 00:15:38
you

<!-- YOUTUBE_TRANSCRIPT_END -->
