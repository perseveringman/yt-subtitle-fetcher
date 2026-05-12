---
archive_version: 2
source: "youtube"
source_type: "youtube"
archive_source_type: "channel"
video_id: "SHAz2iG5o6U"
title: "Luma's Dream Machine and Reasoning in Video Models"
video_url: "https://www.youtube.com/watch?v=SHAz2iG5o6U"
thumbnail_url: "https://i.ytimg.com/vi/SHAz2iG5o6U/maxresdefault.jpg"
source_url_canonical: "https://www.youtube.com/watch?v=SHAz2iG5o6U"
channel: "a16z"
channel_name: "a16z"
channel_id: "UC9cn0TuPq4dnbTY-CBsm8XA"
uploader_id: "@a16z"
published_at: "2024-09-09T21:06:25.000Z"
upload_date: "2024-09-09"
duration_seconds: 1779
duration_human: "29:39"
view_count: 1960
like_count: null
has_subtitle: true
language: "en-US"
availability: "public"
fetched_at: "2026-04-21T13:06:11.955Z"
---

# Luma's Dream Machine and Reasoning in Video Models

## Video Summary
- source_type: channel
- video_url: https://www.youtube.com/watch?v=SHAz2iG5o6U
- video_id: SHAz2iG5o6U
- channel_name: a16z
- channel_id: UC9cn0TuPq4dnbTY-CBsm8XA
- uploader_id: @a16z
- uploader_url: https://www.youtube.com/@a16z
- published_at: 2024-09-09T21:06:25.000Z
- upload_date: 2024-09-09
- duration: 29:39
- view_count: 1960
- like_count: _none_
- has_subtitle: true
- language: en-US
- availability: public
- tags: a16z, andreessen horowitz
- categories: Science & Technology

## Description

a16z General Partner Anjney Midha speaks with Luma Chief Scientist Jiaming Song about the company's recently released Dream Machine model. Among the amazing features of Dream Machine are how it learned to accurate generate 3D structures and elements from 2D videos, and how it is able to reason about things such as shot consistency and fictional worlds without explicit priors.

<!-- YOUTUBE_TRANSCRIPT_START -->
## Transcript

00:00:00 --> 00:00:05
[Music]

00:00:13 --> 00:00:18
hey jaming thanks for joining us I've

00:00:15 --> 00:00:20
been very excited for this conversation

00:00:17 --> 00:00:24
for a while so what is dream machine so

00:00:19 --> 00:00:28
dream machine is a foundational video

00:00:23 --> 00:00:31
generative model at the release we were

00:00:27 --> 00:00:33
having two like features that are

00:00:30 --> 00:00:35
critical to it which is text to video

00:00:32 --> 00:00:39
where you can type in the text prompt to

00:00:34 --> 00:00:42
generate a video or image to video and

00:00:38 --> 00:00:45
you can have an image plus text to

00:00:41 --> 00:00:46
generate a video why don't we start with

00:00:44 --> 00:00:48
e story of 3D capture right because

00:00:45 --> 00:00:50
that's really the first research and

00:00:47 --> 00:00:52
product Milestone that that led to the

00:00:49 --> 00:00:55
development ultimately of dream machine

00:00:51 --> 00:00:57
Luma was mostly doing things like 3D

00:00:54 --> 00:01:00
reconstruction 3D capturing so in this

00:00:56 --> 00:01:03
video we are showing you can take a

00:00:59 --> 00:01:06
drone and you fly the Drone around some

00:01:02 --> 00:01:08
Landmark to capture a video and then the

00:01:05 --> 00:01:11
Luma application will transform that

00:01:07 --> 00:01:13
video into a 3D scene that you can

00:01:10 --> 00:01:15
interact with and of course you can also

00:01:12 --> 00:01:17
do that on your cell phones to capture

00:01:14 --> 00:01:20
objects that are closer to you but

00:01:17 --> 00:01:22
essentially making things representable

00:01:19 --> 00:01:25
in 3D and being able to interact them

00:01:21 --> 00:01:28
was the initial kind of a product that

00:01:24 --> 00:01:31
we have then we were thinking about how

00:01:27 --> 00:01:34
e can not only do reconstruction ction

00:01:30 --> 00:01:37
but also do uh generation so we then

00:01:33 --> 00:01:41
released this app called Genie which

00:01:36 --> 00:01:43
allows you to generate 3D assets from

00:01:40 --> 00:01:46
text prompts and it was definitely the

00:01:42 --> 00:01:49
first one of this product in kind that

00:01:45 --> 00:01:52
we got there and I think we started

00:01:48 --> 00:01:55
releasing the the preview at around

00:01:51 --> 00:01:58
November early November last year but

00:01:54 --> 00:02:00
hen as we moved along into like working

00:01:57 --> 00:02:03
more and more on 3D with a lot of the

00:01:59 --> 00:02:06
best people in 3D in in our company we

00:02:02 --> 00:02:09
realize more and more that 3D data has

00:02:05 --> 00:02:11
this scalability issue and you if you

00:02:08 --> 00:02:13
compare that with like images everyone

00:02:11 --> 00:02:17
can you know use their cell phone to

00:02:12 --> 00:02:19
take a uh photo or you know take a video

00:02:16 --> 00:02:22
uh whereas if you try to do the same

00:02:19 --> 00:02:24
with 3D is very difficult um you either

00:02:21 --> 00:02:27
have to you know

00:02:23 --> 00:02:29
have Professional Knowledge about how to

00:02:26 --> 00:02:31
use these TOS or you have to you know

00:02:28 --> 00:02:35
use uh you know multiv view capture

00:02:30 --> 00:02:38
techniques that are not still not as

00:02:34 --> 00:02:41
nearly accessible to you know everyday

00:02:37 --> 00:02:44
users right so that there is you know a

00:02:40 --> 00:02:46
vast gap between um you know image video

00:02:43 --> 00:02:49
data and 3D data how did you solve that

00:02:45 --> 00:02:53
problem yes one thing that we realized

00:02:48 --> 00:02:55
is that in the last year there has been

00:02:52 --> 00:02:59
many works that use it that tries to

00:02:54 --> 00:03:02
solve 3D from a quite a different angle

00:02:58 --> 00:03:05
instead of trying to use only 3D data

00:03:01 --> 00:03:08
they try to use 3D as like a application

00:03:04 --> 00:03:11
of a 2D Foundation model such as a image

00:03:07 --> 00:03:13
model so in this case you first train a

00:03:10 --> 00:03:15
diffusion Foundation model and you

00:03:12 --> 00:03:20
leverage that vast amounts of data and

00:03:14 --> 00:03:22
then you try to fine-tune this model on

00:03:19 --> 00:03:25
multiv view images

00:03:21 --> 00:03:27
o just like the problem that we

00:03:24 --> 00:03:29
mentioned earlier about you know the the

00:03:26 --> 00:03:31
model not being able to reason about

00:03:28 --> 00:03:33
different size of an object

00:03:30 --> 00:03:36
it actually turns out that being able to

00:03:32 --> 00:03:39
do fine tuning on top of it leverages

00:03:35 --> 00:03:41
benefits from the B worlds so it not

00:03:38 --> 00:03:44
only gets this semantic knowledge about

00:03:40 --> 00:03:46
what an object in the world should look

00:03:43 --> 00:03:49
like it also leverages the 3D data to

00:03:45 --> 00:03:53
know about like how these objects look

00:03:48 --> 00:03:55
in like multiple size so a very common

00:03:52 --> 00:03:58
solution nowadays is to use like multiv

00:03:55 --> 00:04:01
iew like 2D generative models that are

00:03:57 --> 00:04:03
fine-tuned from the flat non multiv view

00:04:00 --> 00:04:05
versions of that and then try to convert

00:04:02 --> 00:04:08
hese like representations into a 3D

00:04:04 --> 00:04:11
object and here I'm showing two kind of

00:04:07 --> 00:04:14
Representative works on this direction

00:04:10 --> 00:04:17
okay so once once um it became clear

00:04:13 --> 00:04:20
that using 3D reasoning about 3D as a

00:04:17 --> 00:04:23
fine tune of a 2D Foundation model was a

00:04:19 --> 00:04:27
feasible path what came next so for us

00:04:22 --> 00:04:29
it's uh quite natural so uh you know

00:04:26 --> 00:04:33
like the limitations of images was that

00:04:28 --> 00:04:35
it wasn't able to reason about how you

00:04:32 --> 00:04:37
know the camera works in the world

00:04:34 --> 00:04:39
because it only has like a relatively

00:04:36 --> 00:04:41
independent shots of different objects

00:04:38 --> 00:04:45
the next thing that is quite natural for

00:04:40 --> 00:04:47
us is to see if we can learn and and

00:04:44 --> 00:04:49
capture 3D Knowledge from like by

00:04:46 --> 00:04:51
learning from videos because videos

00:04:48 --> 00:04:53
naturally have a lot of these innit

00:04:50 --> 00:04:55
observations for example the camera has

00:04:52 --> 00:04:58
there's the camera movements there's

00:04:54 --> 00:05:01
object movements and we are hoping that

00:04:57 --> 00:05:03
he having a video model can

00:05:00 --> 00:05:05
these things and try to learn something

00:05:02 --> 00:05:08
3D about the world yeah and it turns out

00:05:04 --> 00:05:10
from these type of videos we are able to

00:05:07 --> 00:05:13
show that a video model is able to

00:05:09 --> 00:05:16
reason about 3D quite well um which in

00:05:12 --> 00:05:17
some sense is unexpected before in in

00:05:15 --> 00:05:19
the community what was most surprising

00:05:16 --> 00:05:21
about this people will talk about

00:05:18 --> 00:05:22
different things about what surprises

00:05:20 --> 00:05:27
them but I think what's really

00:05:21 --> 00:05:31
surprising to me is how a large scale of

00:05:26 --> 00:05:34
compute is mostly all you need

00:05:30 --> 00:05:37
to capture a lot of the like intricate

00:05:33 --> 00:05:39
ffects that people spend years to

00:05:36 --> 00:05:41
develop in like graphics and you know

00:05:38 --> 00:05:42
physics simulation community and I'll

00:05:40 --> 00:05:45
will show some like more examples in

00:05:41 --> 00:05:47
details in just a second great yeah so

00:05:44 --> 00:05:49
just to just so I'm playing this back

00:05:46 --> 00:05:52
correctly you're saying when what what

00:05:48 --> 00:05:54
we're looking at here is a few

00:05:51 --> 00:05:58
samples of luma dream machine

00:05:53 --> 00:06:01
Generations yes right that were able to

00:05:57 --> 00:06:04
reconstruct a 3D scene

00:06:00 --> 00:06:07
yes for example in this case what we do

00:06:03 --> 00:06:11
is we literally took one of the videos

00:06:06 --> 00:06:15
from the last side and we put this video

00:06:10 --> 00:06:17
into our 3D reconstruction Pipeline and

00:06:14 --> 00:06:20
it turns out that it is able to

00:06:16 --> 00:06:23
reconstruct uh 3D scene at at this

00:06:19 --> 00:06:25
direction quite reasonably well so the

00:06:22 --> 00:06:26
pipeline was quite simple we take

00:06:24 --> 00:06:29
some image and then we convert that

00:06:25 --> 00:06:32
image to a video and then we put the IM

00:06:28 --> 00:06:34
video into 3D reconstruction and uh it

00:06:31 --> 00:06:36
urns out that it was pretty 3D

00:06:33 --> 00:06:38
consistent yeah so this is pretty

00:06:35 --> 00:06:40
mind-blowing yeah I think we should take

00:06:37 --> 00:06:43
a second to just talk about this you

00:06:39 --> 00:06:46
just said your the pipeline started with

00:06:42 --> 00:06:48
an arbitrary image yes that image then

00:06:45 --> 00:06:51
became the prompt for the dream machine

00:06:48 --> 00:06:53
video model which then outputed a video

00:06:50 --> 00:06:55
that you were able to pass through into

00:06:52 --> 00:06:57
a reconstruction Pipeline and get a

00:06:54 --> 00:07:00
structurally consistent 3D scene outside

00:06:56 --> 00:07:02
the other end yes what does that tell

00:06:59 --> 00:07:07
you about what dream machine is doing so

00:07:01 --> 00:07:10
I think that tells me that dream machine

00:07:06 --> 00:07:13
is definitely able to reason about 3D

00:07:09 --> 00:07:15
better than any of the models that we've

00:07:12 --> 00:07:18
you know worked with before and uh this

00:07:14 --> 00:07:21
very much unlike like even the models

00:07:17 --> 00:07:24
that you try to obtain by fine-tuning on

00:07:20 --> 00:07:27
the you know like raw like you know

00:07:23 --> 00:07:29
fine-tuning on 3D uh like data uh

00:07:26 --> 00:07:31
because there is just a lot more videos

00:07:28 --> 00:07:33
and it was able to capture things in

00:07:30 --> 00:07:35
like much greater detail than the

00:07:32 --> 00:07:38
resolution that was possible for multiv

00:07:34 --> 00:07:40
iew um you know image models right and

00:07:37 --> 00:07:43
the also the Simplicity about this this

00:07:39 --> 00:07:45
pipeline is also um very attracting and

00:07:42 --> 00:07:48
that like 3D reconstruction without

00:07:44 --> 00:07:49
having to take very complex captures has

00:07:47 --> 00:07:52
always been a thing that we are trying

00:07:49 --> 00:07:54
to solve like we we've considered

00:07:51 --> 00:07:55
multiple approaches to solve this

00:07:53 --> 00:07:58
problem because we acknowledg the fact

00:07:54 --> 00:08:01
hat despite how Nerf and Gan PL were

00:07:57 --> 00:08:03
super popular in the research

00:08:00 --> 00:08:06
uh when you try to develop deploy these

00:08:02 --> 00:08:08
techniques in in in the wild there are

00:08:05 --> 00:08:10
many issues that comes with this

00:08:07 --> 00:08:12
imperfect Capt like capturing system

00:08:09 --> 00:08:14
that comes along like people when

00:08:11 --> 00:08:17
they're trying to capture an object will

00:08:13 --> 00:08:19
often times not capture the object fully

00:08:16 --> 00:08:21
360° there might be motion blur

00:08:18 --> 00:08:23
associated with the camera the object

00:08:20 --> 00:08:25
might be moving so it it would it's

00:08:22 --> 00:08:27
better to have them like perfectly still

00:08:24 --> 00:08:30
so all of these are limitations that we

00:08:26 --> 00:08:32
re trying to solve like before we even

00:08:29 --> 00:08:35
started trying to develop the dream

00:08:31 --> 00:08:38
achine I see so this is very exciting

00:08:34 --> 00:08:40
to us as well because it also shows that

00:08:37 --> 00:08:43
here is you know a very interesting

00:08:39 --> 00:08:45
alternative path towards solving like 3D

00:08:42 --> 00:08:48
reconstruction so here this was the

00:08:44 --> 00:08:51
first I guess attribute or first clue

00:08:47 --> 00:08:53
that you had that video models might be

00:08:50 --> 00:08:55
doing more than just generating

00:08:52 --> 00:08:56
interesting frames yes that there might

00:08:54 --> 00:08:59
be an inherent understanding of the

00:08:55 --> 00:09:02
world yes right and 3D I guess 3D

00:08:58 --> 00:09:03
consistency yeah was the first clue mhm

00:09:01 --> 00:09:06
what were some other Clues these are

00:09:02 --> 00:09:08
some videos on that we tried on some

00:09:05 --> 00:09:10
like Nerf data sets and actually because

00:09:07 --> 00:09:13
a lot of us uh work on Nerf like Gan

00:09:10 --> 00:09:15
splatting and reconstruction so the

00:09:12 --> 00:09:17
context here is that we put the first

00:09:14 --> 00:09:19
frame of an image into dream machine and

00:09:17 --> 00:09:22
then dream machine will give us the

00:09:18 --> 00:09:24
output as a video so as you can see here

00:09:21 --> 00:09:26
like the 3D consistency of the generator

00:09:23 --> 00:09:28
video looks uh quite amazing and here

00:09:25 --> 00:09:31
are some like more examples all from

00:09:27 --> 00:09:32
very popular uh Nerf data set and if you

00:09:30 --> 00:09:35
work in the domain you will definitely

00:09:31 --> 00:09:37
know what these data sets come from

00:09:34 --> 00:09:39
could you just tell people what a Nerf

00:09:36 --> 00:09:43
is okay what is a Nerf and what is a

00:09:38 --> 00:09:45
gaussian SPL I see sure so a Nerf uh is

00:09:42 --> 00:09:47
more like um you know new it's a full

00:09:44 --> 00:09:53
name called the neural Radiance field

00:09:46 --> 00:09:56
and the idea is to um assume that the

00:09:52 --> 00:09:59
world is simulated by volume rendering

00:09:55 --> 00:10:02
techniques and we based on this

00:09:58 --> 00:10:03
assumption which is obviously imperfect

00:10:01 --> 00:10:08
uh we try to

00:10:02 --> 00:10:10
solve in this you know 3D field how much

00:10:07 --> 00:10:13
what's the color and what's the opacity

00:10:09 --> 00:10:15
of this this point and then the

00:10:12 --> 00:10:18
rendering happens by integrating along

00:10:14 --> 00:10:21
array of line and then like and often

00:10:17 --> 00:10:23
times things are like just nonopaque at

00:10:20 --> 00:10:27
some certain like location and that's

00:10:22 --> 00:10:29
how we get the get the rendering out of

00:10:26 --> 00:10:31
course having one view is not sufficient

00:10:28 --> 00:10:34
enough to solve this problem so in the

00:10:30 --> 00:10:37
case of Nerf there is often times like a

00:10:33 --> 00:10:40
very detailed multiv view um you know

00:10:36 --> 00:10:43
like input for example images or video

00:10:39 --> 00:10:47
such that these problems can be solved

00:10:42 --> 00:10:49
uh one uh quite interesting breakthrough

00:10:46 --> 00:10:52
at that point was how realistic these

00:10:48 --> 00:10:54
reconstruction can be compared to the

00:10:51 --> 00:10:57
older like photogrametry based methods

00:10:53 --> 00:11:00
and because these methods can reflect

00:10:56 --> 00:11:02
he lighting changes and uh you know

00:10:59 --> 00:11:05
complex physical effects are much better

00:11:01 --> 00:11:07
than the existing pH gamy techniques but

00:11:04 --> 00:11:10
his is also from the 2020 so a lot of

00:11:06 --> 00:11:12
a lot more uh techniques have been

00:11:09 --> 00:11:15
improved uh since then one example being

00:11:11 --> 00:11:18
G sping so you can think of it as

00:11:14 --> 00:11:21
another type of you know representation

00:11:17 --> 00:11:22
um based on uh like volume rendering um

00:11:20 --> 00:11:25
that is you know much efficient much

00:11:21 --> 00:11:27
more efficient than the existing like

00:11:24 --> 00:11:30
Nerf based techniques in terms of how

00:11:26 --> 00:11:32
like rendering works so it made uh you

00:11:29 --> 00:11:34
know kind of interaction with these

00:11:31 --> 00:11:36
objects possible because you can render

00:11:33 --> 00:11:38
things at much higher FPS than before

00:11:35 --> 00:11:41
gotcha so what are we looking at here so

00:11:38 --> 00:11:45
here we are looking at

00:11:40 --> 00:11:51
a video generated by dream machine where

00:11:44 --> 00:11:54
the input is a image frame so this is a

00:11:50 --> 00:11:56
very common example that people use in

00:11:53 --> 00:11:59
like 3D reconstruction in the case of

00:11:55 --> 00:12:02
Nerf there will be like many images like

00:11:58 --> 00:12:04
that surrounds this object and the goal

00:12:01 --> 00:12:07
is to reconstruct the 3D object and then

00:12:03 --> 00:12:08
reender them like back it's a very

00:12:06 --> 00:12:11
interesting setup because you can see

00:12:07 --> 00:12:14
that the table is not fully reflective

00:12:10 --> 00:12:17
but you can see how the lights are like

00:12:13 --> 00:12:19
reflecting on the side of the table as

00:12:16 --> 00:12:21
you change your like viewing angles and

00:12:18 --> 00:12:23
that at that point was quite

00:12:20 --> 00:12:25
revolutionary for Nerf to do because

00:12:22 --> 00:12:27
photogra techniques won't be able to

00:12:24 --> 00:12:29
kind of Reason about this type of

00:12:26 --> 00:12:31
physical effects just yet um but what

00:12:28 --> 00:12:34
really surp uring about dream machine is

00:12:30 --> 00:12:38
that we almost did nothing with regards

00:12:33 --> 00:12:40
to these Nerf data sets or have zero 3D

00:12:37 --> 00:12:44
priors into how the model works right

00:12:39 --> 00:12:45
but the model just by itself learns to

00:12:43 --> 00:12:49
kind of uncover these interesting

00:12:45 --> 00:12:51
physical um aspects of the world as just

00:12:48 --> 00:12:54
by generating a image to video the

00:12:50 --> 00:12:57
second example is from this paper called

00:12:53 --> 00:12:59
the zip Nerf and here we are also given

00:12:56 --> 00:13:01
first frame of image and try to generate

00:12:58 --> 00:13:03
5sec of video on top of it what's the

00:13:00 --> 00:13:06
really interesting thing we can check it

00:13:02 --> 00:13:09
is the reflections of the you know

00:13:05 --> 00:13:12
background in the TV so as the camera

00:13:08 --> 00:13:14
moves the TV like reflection also seems

00:13:11 --> 00:13:16
to move consistently with what seems to

00:13:13 --> 00:13:19
be in the physical world which might be

00:13:15 --> 00:13:21
a window that shines light onto this you

00:13:18 --> 00:13:23
know TV thing like there so that's

00:13:20 --> 00:13:25
another kind of interesting or a few

00:13:22 --> 00:13:28
interesting like physical properties

00:13:24 --> 00:13:30
that is being like appeared onto this

00:13:27 --> 00:13:32
traditionally Nerf thinge again again

00:13:29 --> 00:13:34
this is only one image compared to in

00:13:31 --> 00:13:36
the traditional Nerf sense you have to

00:13:33 --> 00:13:38
take hundreds of image with almost

00:13:35 --> 00:13:39
perfect accuracy so I think it's just

00:13:37 --> 00:13:42
worth calling out what's happening here

00:13:38 --> 00:13:44
you're saying a single image was passed

00:13:41 --> 00:13:47
through the dream machine as is a prompt

00:13:43 --> 00:13:51
yes dream machine was then able to

00:13:46 --> 00:13:55
reconstruct a scene in video mhm and

00:13:50 --> 00:13:59
that video has consistent 3D light

00:13:54 --> 00:14:01
ransport I think it is yes so so yes

00:13:58 --> 00:14:04
the it's

00:14:00 --> 00:14:07
I'm not an expert on like Graphics to

00:14:03 --> 00:14:10
fully say like how physically accurate

00:14:06 --> 00:14:13
this but at least I think it looks to me

00:14:09 --> 00:14:15
to be quite physically competing right

00:14:12 --> 00:14:17
so maybe if we run this through the

00:14:14 --> 00:14:20
perfect simulator we will see some

00:14:16 --> 00:14:23
discrepancies as of now but still I I

00:14:19 --> 00:14:25
think the results are quite compelling

00:14:22 --> 00:14:27
and quite realistic compared to you know

00:14:24 --> 00:14:30
any of the models that we see so you

00:14:27 --> 00:14:35
know one surprising capability

00:14:30 --> 00:14:39
that dream machine was able to handle

00:14:34 --> 00:14:41
was was modeling the world in 3D yes

00:14:38 --> 00:14:42
what other capabilities were you

00:14:40 --> 00:14:45
surprised by when dream machine was done

00:14:41 --> 00:14:47
training yes because we work on 3D so

00:14:44 --> 00:14:50
naturally there are many properties that

00:14:46 --> 00:14:52
are in 3D that we definitely care about

00:14:49 --> 00:14:54
and we are very surprised to see some of

00:14:51 --> 00:14:57
these problems being like solved just

00:14:53 --> 00:14:59
implicitly in the model so one example

00:14:56 --> 00:15:00
is the depth which is a very obvious

00:14:58 --> 00:15:03
thing that people people care a lot

00:14:59 --> 00:15:06
about in like 3D modeling there's a tons

00:15:02 --> 00:15:07
of research on the like topic of depth

00:15:05 --> 00:15:09
but we are just going to show some

00:15:06 --> 00:15:11
videos that clearly shows that the model

00:15:08 --> 00:15:14
has understanding about depth so for

00:15:10 --> 00:15:17
example in this video the this image to

00:15:13 --> 00:15:19
video case so the model is able to know

00:15:16 --> 00:15:21
that the person is in the foreground is

00:15:18 --> 00:15:24
closer to the camera than the background

00:15:20 --> 00:15:27
a similar case happens in this video as

00:15:23 --> 00:15:29
well where the subject is closer to the

00:15:26 --> 00:15:32
cameras and this is reflected when you

00:15:28 --> 00:15:34
see the camera starts to turn and

00:15:31 --> 00:15:37
similarly in even like more abstract

00:15:33 --> 00:15:39
cases you can see how this notion of

00:15:36 --> 00:15:41
depth appear where the center of the

00:15:38 --> 00:15:43
like Circle turns in the smaller

00:15:40 --> 00:15:46
distance than the the circles that are

00:15:43 --> 00:15:48
like outside it similarly there can be

00:15:45 --> 00:15:51
some quite non-trivial camera move

00:15:47 --> 00:15:54
changes that are just emerged from this

00:15:50 --> 00:15:57
type of reasoning and not only still

00:15:53 --> 00:15:58
things but also some cases where the

00:15:56 --> 00:16:01
subject is slightly moving for example

00:15:57 --> 00:16:03
this person Tils their camera upon and

00:16:00 --> 00:16:05
there's also cases where the depth is

00:16:02 --> 00:16:07
pretty clearly reflected in the case of

00:16:04 --> 00:16:09
alling leaves where there falling

00:16:06 --> 00:16:11
leaves that are closer to the camera and

00:16:08 --> 00:16:12
then they're also F that like further

00:16:10 --> 00:16:15
from the

00:16:11 --> 00:16:17
camera another interesting aspect of

00:16:14 --> 00:16:19
these things is also light transport

00:16:16 --> 00:16:21
where this is also a very heavily

00:16:18 --> 00:16:23
investigated Topic in graphics so for

00:16:20 --> 00:16:26
example in this case what we are trying

00:16:22 --> 00:16:29
to look at is as the camera turns the

00:16:25 --> 00:16:32
red neon sign of luma goes from the left

00:16:28 --> 00:16:34
o to sorry goes from the right to the

00:16:31 --> 00:16:38
left of the video and this is reflected

00:16:33 --> 00:16:40
on the person's uh left side as their

00:16:37 --> 00:16:42
jacket is slightly reflective of the red

00:16:39 --> 00:16:44
color and you can see more and more of

00:16:41 --> 00:16:46
this like red color being seeped in so

00:16:43 --> 00:16:48
this is clearly something that is quite

00:16:46 --> 00:16:50
difficult to simulate in traditional

00:16:47 --> 00:16:53
Graphics cases similarly you can also

00:16:49 --> 00:16:56
see that like for example in this cute

00:16:52 --> 00:16:58
animation you can see that as the bear

00:16:55 --> 00:17:00
is wobbling inside the Water by itself

00:16:57 --> 00:17:02
is moving but also the reflection of the

00:16:59 --> 00:17:05
bear on the water is also moving with

00:17:01 --> 00:17:08
e flow on this other video shows how

00:17:04 --> 00:17:10
it can simulate how light Co goes

00:17:07 --> 00:17:13
through semi-transparent materials as

00:17:09 --> 00:17:15
the camera slowly turns you can see the

00:17:12 --> 00:17:17
leaf on the foreground has more

00:17:14 --> 00:17:20
light shine through it as the camera

00:17:16 --> 00:17:22
turns so these are also all quite tricky

00:17:19 --> 00:17:24
so one thing we want to compare of

00:17:21 --> 00:17:26
course is how does it work against

00:17:23 --> 00:17:28
regular Nerf captures so this is

00:17:25 --> 00:17:31
omething that Nerfs are traditionally

00:17:27 --> 00:17:33
much better at than photogrametry uh but

00:17:30 --> 00:17:35
unfortunately this case requires

00:17:32 --> 00:17:37
hundreds of images to perform well with

00:17:35 --> 00:17:38
dream machine we just took another

00:17:36 --> 00:17:41
coffee machine that we have in the

00:17:37 --> 00:17:43
office and then just do image to video

00:17:40 --> 00:17:47
and we can actually see a lot of the

00:17:42 --> 00:17:49
light Reflections on top of the metal

00:17:46 --> 00:17:52
surface of the cuffe machine being

00:17:48 --> 00:17:54
simulated by the model and similarly

00:17:51 --> 00:17:56
there are also some very non- tribute

00:17:53 --> 00:17:59
Dynamics such as how water moves how

00:17:55 --> 00:18:01
Furs move that can be done in the video

00:17:58 --> 00:18:04
models and and this is also example from

00:18:00 --> 00:18:06
like having animals image to video of

00:18:03 --> 00:18:09
animal it requires definitely a lot of

00:18:05 --> 00:18:11
the understanding of how first move and

00:18:08 --> 00:18:13
the Dynamics of things if we come if we

00:18:10 --> 00:18:15
solve this problem from more traditional

00:18:12 --> 00:18:18
Graphics Pipeline and not only that we

00:18:14 --> 00:18:20
also simulate like very compelling or

00:18:17 --> 00:18:23
interesting like camera motions because

00:18:19 --> 00:18:25
of this innate knowledge similarly we

00:18:22 --> 00:18:28
can see how as this giraffe moves the

00:18:24 --> 00:18:30
Shadows also moves like alongside it so

00:18:27 --> 00:18:32
that the the model definitely has a

00:18:29 --> 00:18:33
knowledge about how light works like

00:18:31 --> 00:18:35
when things are moving this is another

00:18:32 --> 00:18:37
example where we showed that in like in

00:18:34 --> 00:18:40
the exploding room how things are

00:18:36 --> 00:18:42
floating together as the camera moves in

00:18:39 --> 00:18:45
forward and this is another case where

00:18:41 --> 00:18:47
we show that behind the person there is

00:18:44 --> 00:18:49
like interesting like cloth that are

00:18:46 --> 00:18:50
moving and if we try to simulate all of

00:18:48 --> 00:18:52
these with traditional Graphics

00:18:49 --> 00:18:55
pipelines like the cloth simulation part

00:18:51 --> 00:18:58
will by itself be quite difficult all

00:18:54 --> 00:19:00
right so fair enough we've got a video

00:18:57 --> 00:19:01
model now that as you just showed can

00:18:59 --> 00:19:04
handle a ton of capabilities that

00:19:00 --> 00:19:06
raditionally would have taken explicit

00:19:03 --> 00:19:09
Graphics pipelines right no game engine

00:19:05 --> 00:19:12
required no volumetric reconstruction

00:19:08 --> 00:19:13
required we can handle 3D structure it

00:19:11 --> 00:19:17
can do depth it can do light transport

00:19:12 --> 00:19:20
it can do Dynamics right but if I'm

00:19:16 --> 00:19:23
being let's say

00:19:19 --> 00:19:26
ultra um rigorous about whether these

00:19:22 --> 00:19:28
video models really understand what's

00:19:25 --> 00:19:31
going on in reality

00:19:27 --> 00:19:33
es the holy Gress causality MH am I

00:19:30 --> 00:19:36
right you kind of want to understand and

00:19:32 --> 00:19:38
see evidence that dream machine if it's

00:19:35 --> 00:19:42
actually doing more than just generating

00:19:37 --> 00:19:44
cool frames it it ideally should be able

00:19:41 --> 00:19:47
to start predicting what changes in the

00:19:43 --> 00:19:51
world must come must happen yes when

00:19:46 --> 00:19:53
given some input yeah some indication

00:19:50 --> 00:19:55
that it it has an understanding of

00:19:52 --> 00:19:57
Newtonian physics or or or state of the

00:19:54 --> 00:19:59
world all and and be able to reason over

00:19:56 --> 00:20:03
the entire State space of things that

00:19:58 --> 00:20:06
should happen when you when you throw a

00:20:02 --> 00:20:08
ball or or or my pen falls off do you

00:20:05 --> 00:20:10
have any evidence that might indicate

00:20:07 --> 00:20:12
that there's something more going on in

00:20:09 --> 00:20:14
these models than just pure frame to

00:20:11 --> 00:20:16
frame prediction yes totally in the

00:20:13 --> 00:20:18
previous types of You Know video models

00:20:15 --> 00:20:21
that people have access um typically

00:20:17 --> 00:20:24
it's a more like an image animator so

00:20:20 --> 00:20:26
the image takes a part in the majority

00:20:23 --> 00:20:29
of the scene and then uh you know it's

00:20:25 --> 00:20:31
mostly like moving without cuts however

00:20:28 --> 00:20:34
you know as we know in like movies and

00:20:30 --> 00:20:36
such there's a very common thing which

00:20:33 --> 00:20:37
is you know things like transition to

00:20:35 --> 00:20:41
different cuts of you know your they're

00:20:36 --> 00:20:44
taking a video of the same subject

00:20:40 --> 00:20:46
inside you know different angles for

00:20:43 --> 00:20:48
example in this case the task is image

00:20:45 --> 00:20:50
to video so we basically give this

00:20:47 --> 00:20:53
close-up shot of this cute like very

00:20:49 --> 00:20:56
little monster and we just ask it to do

00:20:52 --> 00:20:57
image to video so what's there are two

00:20:55 --> 00:20:59
interesting facts about it the first

00:20:56 --> 00:21:03
interesting fact is that there it

00:20:59 --> 00:21:06
generates a cut which is again not seen

00:21:02 --> 00:21:08
in like previous video models the other

00:21:05 --> 00:21:12
thing that is also interesting about

00:21:07 --> 00:21:14
his is that the background and and the

00:21:11 --> 00:21:18
subject which is the monster in the

00:21:13 --> 00:21:20
second shot looks basically the same as

00:21:17 --> 00:21:22
what is in the first shot so you can see

00:21:19 --> 00:21:24
that this is a blue fur little monster

00:21:21 --> 00:21:25
and then the second shot is that even

00:21:23 --> 00:21:27
though it's like taking a shot on the

00:21:24 --> 00:21:30
background the monster is still blue and

00:21:26 --> 00:21:32
furry so you get the impression that

00:21:29 --> 00:21:35
his is video about the same monster and

00:21:31 --> 00:21:37
also the environment is also similar

00:21:34 --> 00:21:40
where you have this like red ground on

00:21:36 --> 00:21:42
underneath and the blue kind of a forest

00:21:39 --> 00:21:44
on on top of like on top of it even

00:21:41 --> 00:21:46
though we haven't really asked the model

00:21:43 --> 00:21:48
to do anything about it the model is

00:21:45 --> 00:21:50
able to reason about the second shot

00:21:47 --> 00:21:52
being a cut of the first shot that

00:21:49 --> 00:21:55
happens to have the same things in the

00:21:51 --> 00:21:57
first shot so this is curs definitely

00:21:54 --> 00:22:00
some kind of a non-rival cause and

00:21:56 --> 00:22:02
effect that happens like even in a not

00:21:59 --> 00:22:04
entirely like physically possible

00:22:01 --> 00:22:07
scenario another example here I want to

00:22:03 --> 00:22:09
show is that again this is a image to

00:22:06 --> 00:22:10
video so it might look a little bit

00:22:08 --> 00:22:13
disturbing in the first frame but the

00:22:09 --> 00:22:15
first frame contains what we want to

00:22:12 --> 00:22:17
give to the dream machine so in this

00:22:14 --> 00:22:20
case we are showing a very unnaturally

00:22:16 --> 00:22:22
looking eye looking at a girl that is

00:22:19 --> 00:22:24
tanding like in front of the eye in the

00:22:21 --> 00:22:28
first shot that is the input to the

00:22:23 --> 00:22:31
dream machine the model like the image

00:22:27 --> 00:22:33
does not contain the front face of the

00:22:30 --> 00:22:34
girl there are two interesting facts

00:22:32 --> 00:22:36
about that first the dream machine

00:22:33 --> 00:22:39
generates the second shot which is a

00:22:35 --> 00:22:42
close-up shot on the girl and secondly

00:22:38 --> 00:22:45
this girl looks very like terrified and

00:22:41 --> 00:22:48
this is possibly caused by this eye

00:22:44 --> 00:22:50
being very unnaturally looking and this

00:22:47 --> 00:22:52
some kind of a cause and effect that

00:22:49 --> 00:22:55
is like even harder to reason like

00:22:51 --> 00:22:59
strictly in the physics but more delving

00:22:55 --> 00:23:01
into how just human Psy psychology works

00:22:58 --> 00:23:04
o I I think the causality is definitely

00:23:00 --> 00:23:08
deeper than physics alone and is going

00:23:03 --> 00:23:11
into you know uh other you know aspects

00:23:07 --> 00:23:13
that we as humans don't really can

00:23:10 --> 00:23:15
explain well about another interesting

00:23:12 --> 00:23:17
fact about this frightened girl close-up

00:23:15 --> 00:23:20
shot is that if you look at the first

00:23:16 --> 00:23:22
shot uh the girl was wearing a blue

00:23:19 --> 00:23:24
dress and it has a short hair and the

00:23:21 --> 00:23:28
second shot is basically shows the same

00:23:23 --> 00:23:31
thing so it's not it's also suggesting

00:23:27 --> 00:23:33
that these two are basically different

00:23:30 --> 00:23:35
views of the same thing right so I think

00:23:32 --> 00:23:38
this is also another evidence that you

00:23:34 --> 00:23:40
know the dream machine is able to reason

00:23:37 --> 00:23:42
about things that will happen or like

00:23:39 --> 00:23:45
ven at like different angles in a

00:23:41 --> 00:23:47
matter that is quite non-trivial to

00:23:44 --> 00:23:50
reproduce using traditional methods so

00:23:46 --> 00:23:52
this is pretty remarkable right

00:23:49 --> 00:23:55
basically there's a representation of

00:23:51 --> 00:23:58
reality that the Luma Dream Machine

00:23:54 --> 00:24:00
model is exposing that is able to

00:23:57 --> 00:24:03
maintain semantic consist

00:23:59 --> 00:24:06
about what should happen in the world

00:24:02 --> 00:24:08
yes with zero explicit design from you

00:24:05 --> 00:24:11
guys around that M so is causality

00:24:07 --> 00:24:14
essentially just an emergent property of

00:24:10 --> 00:24:17
choosing the right data I would say yes

00:24:13 --> 00:24:21
um it seems that all the evidence that

00:24:16 --> 00:24:23
we are seen points toward that got it so

00:24:20 --> 00:24:25
this is pretty wild

00:24:22 --> 00:24:28
because dream machine is able to

00:24:24 --> 00:24:31
simulate the causality of reality purely

00:24:27 --> 00:24:33
through looking at camera Cuts yes just

00:24:30 --> 00:24:36
by observing how camera angles and

00:24:32 --> 00:24:39
videos change yes and the consistency of

00:24:35 --> 00:24:40
characters across those cuts mhm what's

00:24:38 --> 00:24:43
going on under the hood what did you

00:24:39 --> 00:24:45
have to do to get that causality to show

00:24:42 --> 00:24:49
up again this is not much I think the

00:24:44 --> 00:24:53
biggest Factor are the scale of data and

00:24:48 --> 00:24:55
the scale of compute and um I think we

00:24:52 --> 00:24:57
also get a lot of questions about

00:24:54 --> 00:24:59
whether there are you know more explicit

00:24:56 --> 00:25:02
priors being like baked into this

00:24:58 --> 00:25:05
but um the the answer is no like there's

00:25:01 --> 00:25:07
really not much prior that is um being

00:25:04 --> 00:25:11
baked into these models and this follows

00:25:06 --> 00:25:15
roughly how um the bider lesson tells us

00:25:10 --> 00:25:18
right cool okay um any other

00:25:14 --> 00:25:19
capabilities yes so I think the other

00:25:17 --> 00:25:21
interesting thing that we showed

00:25:18 --> 00:25:25
slightly earlier but also want to kind

00:25:20 --> 00:25:26
of reemphasize here is how dream machine

00:25:24 --> 00:25:30
is able to reason

00:25:25 --> 00:25:33
about the non-physical world as well

00:25:29 --> 00:25:35
even in cases where it's in entirely a

00:25:32 --> 00:25:38
scene of art it is able to first of all

00:25:34 --> 00:25:41
do camera changes and also introduce

00:25:37 --> 00:25:44
like new Concepts into the scene by just

00:25:40 --> 00:25:46
using the model so again if we were

00:25:43 --> 00:25:48
trying to reason about the world via the

00:25:45 --> 00:25:50
traditional kind of physics techniques

00:25:47 --> 00:25:52
it is very difficult to kind of Reason

00:25:49 --> 00:25:55
about things inside a totally fictional

00:25:51 --> 00:25:57
world so I think this is something that

00:25:54 --> 00:25:59
more happens like inside our dreams

00:25:56 --> 00:26:03
rather than happening like the physical

00:25:58 --> 00:26:06
world and it is like something that is

00:26:02 --> 00:26:08
very close to what humans imagine and

00:26:05 --> 00:26:11
therefore it's also an evidence that

00:26:07 --> 00:26:14
shows that maybe trying to be too

00:26:10 --> 00:26:16
fundamentalist about physics might not

00:26:13 --> 00:26:18
solve these problems um and this is

00:26:15 --> 00:26:20
another example like from the same

00:26:17 --> 00:26:23
friend that like we showing this is like

00:26:19 --> 00:26:25
a very abstract figure of the input

00:26:22 --> 00:26:26
image is just a line inside the circus

00:26:24 --> 00:26:29
and the dream machine was able to

00:26:25 --> 00:26:32
imagine the scene of this is inside the

00:26:28 --> 00:26:35
performance and this concern line was

00:26:31 --> 00:26:38
just like vanished under this magic

00:26:34 --> 00:26:40
trick so again this is a totally kind of

00:26:37 --> 00:26:43
abstract scene that would not make any

00:26:39 --> 00:26:46
like physical sense um but overall it

00:26:42 --> 00:26:48
has this artistic effect that is going

00:26:45 --> 00:26:51
on where do we go from here what comes

00:26:47 --> 00:26:53
next and what have you what are your

00:26:50 --> 00:26:56
conclusions from seeing all the sort of

00:26:53 --> 00:26:59
emerging properties of reality that REM

00:26:55 --> 00:27:02
machine can simulate yes so I think you

00:26:58 --> 00:27:04
know obviously you know one of the next

00:27:01 --> 00:27:07
steps to do is to um improve the model

00:27:03 --> 00:27:11
on off fronts including uh resolution uh

00:27:07 --> 00:27:13
you know efficiency uh prompt following

00:27:10 --> 00:27:15
uh being able to control with more

00:27:12 --> 00:27:18
precision and so on and the team is

00:27:15 --> 00:27:20
actually you know kind of working on it

00:27:17 --> 00:27:23
um but I I want to take it a step

00:27:19 --> 00:27:25
further um about like what's you know

00:27:22 --> 00:27:27
hat we have in mind so one of the

00:27:24 --> 00:27:29
xample here that we are showing is we

00:27:26 --> 00:27:33
mentioned earlier that

00:27:28 --> 00:27:35
from you can actually get 3D from 2D so

00:27:32 --> 00:27:38
I don't think it's a much of a stretch

00:27:34 --> 00:27:42
to say maybe we can get from like videos

00:27:37 --> 00:27:44
to 40 so that's being able to do World

00:27:41 --> 00:27:45
simulators meaning meaning that you

00:27:43 --> 00:27:48
might be able to simulate multiple

00:27:44 --> 00:27:50
angles at the same time so I think

00:27:47 --> 00:27:53
towards that goal I think is definitely

00:27:49 --> 00:27:55
something would very much be interesting

00:27:52 --> 00:28:00
to have another really interesting

00:27:55 --> 00:28:02
aspect is to see how much unlock we can

00:27:59 --> 00:28:05
get by having a more intelligent

00:28:01 --> 00:28:07
multimodal agent so you know in this

00:28:04 --> 00:28:11
case we've only demonstrated you know

00:28:06 --> 00:28:15
the interaction between uh text and like

00:28:10 --> 00:28:17
video and image modalities but human uh

00:28:14 --> 00:28:19
uman perceive the world in you know

00:28:16 --> 00:28:21
many different factors for example

00:28:18 --> 00:28:23
humans also you know hear the world and

00:28:20 --> 00:28:27
also you know like you know interact

00:28:22 --> 00:28:30
with the world um you know differently

00:28:26 --> 00:28:32
so I I think it will also be very um

00:28:29 --> 00:28:36
interesting to see how we can make

00:28:32 --> 00:28:39
further unlocks by going into this uh

00:28:35 --> 00:28:41
multimodel uh AI route where you know we

00:28:38 --> 00:28:45
combine all the signals that we can get

00:28:41 --> 00:28:47
uh and try to develop uh AI that you

00:28:44 --> 00:28:49
know learns from these uh signals

00:28:46 --> 00:28:52
together in a in a joint manner uh and I

00:28:48 --> 00:28:54
think currently you know we are only at

00:28:51 --> 00:28:57
a very very uh you know basic stage at

00:28:53 --> 00:29:00
you know being able to like generate uh

00:28:56 --> 00:29:02
videos from text and Imes at this stage

00:28:59 --> 00:29:05
I would say this is more like a as you

00:29:01 --> 00:29:07
said research preview or version zero of

00:29:04 --> 00:29:09
the model I think the most more

00:29:06 --> 00:29:11
intelligent model will be able to kind

00:29:08 --> 00:29:15
of handle more complex inputs and more

00:29:10 --> 00:29:16
complex requirements that arise uh both

00:29:14 --> 00:29:18
from the you know product and

00:29:15 --> 00:29:21
requirement standpoint and also from you

00:29:18 --> 00:29:24
know what it means to be intelligent so

00:29:20 --> 00:29:27
uh our our goal is to be able to you

00:29:23 --> 00:29:31
know create these multimodal uh AI that

00:29:26 --> 00:29:34
are uh like that can achieve this you

00:29:30 --> 00:29:35
know in a efficient and compelling

00:29:33 --> 00:29:41
manner

00:29:34 --> 00:29:41
[Music]

<!-- YOUTUBE_TRANSCRIPT_END -->
